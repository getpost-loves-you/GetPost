#!/usr/bin/env node
// Local unit tests for the worker - no deployment, no toolchain.
// Usage: node test_local.js
//
// Rebuilds worker.packed.js, loads it into a sandboxed VM with a mock KV
// namespace, and exercises both the pure helpers and the full request handler.

const fs = require("fs");
const vm = require("vm");
const assert = require("assert");
const { execSync } = require("child_process");
const { webcrypto } = require("crypto");

// ---- build + load the packed worker into a sandbox ----
execSync("python3 autoinsert.py", { stdio: "ignore" });
const src = fs.readFileSync(__dirname + "/worker.packed.js", "utf8");

const sandbox = {
  addEventListener: () => {},
  NAMESPACE: null, // swapped in per test
  crypto: webcrypto,
  TextEncoder,
  TextDecoder,
  URL,
  Request,
  Response,
  Headers,
  atob,
  btoa,
  console,
};
vm.createContext(sandbox);
vm.runInContext(src, sandbox, { filename: "worker.packed.js" });

// ---- mock KV namespace matching the subset of the API the worker uses ----
function makeNamespace() {
  const store = new Map();
  return {
    store,
    async put(key, value, opts) {
      store.set(key, { value, opts: opts || {} });
    },
    async getWithMetadata(key) {
      const entry = store.get(key);
      if (!entry) return { value: null, metadata: null };
      return { value: entry.value, metadata: entry.opts.metadata || null };
    },
    async get(key) {
      const entry = store.get(key);
      return entry ? entry.value : null;
    },
    async delete(key) {
      store.delete(key);
    },
  };
}

// mock CacheStorage matching the subset of the Cache API the worker uses
function makeCacheStorage() {
  const store = new Map();
  return {
    store,
    default: {
      async match(request) {
        const entry = store.get(request.url);
        return entry ? entry.clone() : undefined;
      },
      async put(request, response) {
        store.set(request.url, response);
      },
      async delete(urlOrRequest) {
        return store.delete(typeof urlOrRequest === "string" ? urlOrRequest : urlOrRequest.url);
      },
    },
  };
}

async function call(method, path, opts = {}) {
  const init = { method };
  if (opts.body !== undefined) init.body = opts.body;
  if (opts.headers) init.headers = opts.headers;
  const request = new Request("https://test.local" + path, init);
  const pending = [];
  const response = await sandbox.HANDLER({ request, waitUntil: (p) => pending.push(p) });
  await Promise.all(pending);
  return response;
}

async function uploadJson(body, headers = {}) {
  const resp = await call("POST", "/post", {
    body,
    headers: Object.assign({ Accept: "application/json" }, headers),
  });
  assert.strictEqual(resp.status, 200, "upload should succeed");
  return resp.json();
}

// ---- tiny runner ----
let passed = 0;
let failed = 0;
async function test(name, fn) {
  try {
    await fn();
    passed++;
    console.log("  PASS  " + name);
  } catch (e) {
    failed++;
    console.log("  FAIL  " + name);
    console.log("        " + e.message.split("\n")[0]);
  }
}

(async () => {
  console.log("[pure helpers]");

  await test("encodeTime zero-pads", () => {
    assert.strictEqual(sandbox.encodeTime(0, 10), "0000000000");
    assert.strictEqual(sandbox.encodeTime(31, 2), "0Z");
  });

  await test("ulid format and time ordering", () => {
    const a = sandbox.ulid(1000);
    const b = sandbox.ulid(2000000000000);
    assert.match(a, /^[0-9A-HJKMNP-TV-Z]{26}$/);
    assert.ok(a.slice(0, 10) < b.slice(0, 10), "ulids sort by time");
  });

  await test("encodeRandom length and charset", () => {
    assert.match(sandbox.encodeRandom(16), /^[0-9A-HJKMNP-TV-Z]{16}$/);
  });

  await test("hex encodes bytes", () => {
    assert.strictEqual(sandbox.hex(new Uint8Array([0, 0x47, 0x50, 0x45, 0x31])), "0047504531");
  });

  await test("sanitizeHtml escapes markup", () => {
    const out = sandbox.sanitizeHtml('<script>"x"&\'</script>');
    assert.ok(!out.includes("<") && !out.includes(">") && !out.includes('"'));
  });

  await test("isValidContentType accepts/rejects", () => {
    assert.ok(sandbox.isValidContentType("text/html"));
    assert.ok(sandbox.isValidContentType("application/json; charset=utf-8"));
    assert.ok(!sandbox.isValidContentType("not_a_mime"));
    assert.ok(!sandbox.isValidContentType("a/" + "x".repeat(300)));
  });

  await test("isCliRequest detects cli tools", () => {
    assert.ok(sandbox.isCliRequest({ "user-agent": "curl/8.0" }));
    assert.ok(!sandbox.isCliRequest({ "user-agent": "Mozilla/5.0" }));
  });

  await test("buildResponse does not mutate shared headers", () => {
    const shared = { "Cache-Control": "public, max-age=86400" };
    sandbox.buildResponse("x", "text/plain", shared, 200, new URL("https://t.local/?cors=1"));
    assert.deepStrictEqual(Object.keys(shared), ["Cache-Control"]);
  });

  console.log("[rendered page integrity]");

  await test("served viewer page script is valid JS (catches template-literal escape eating)", () => {
    // render a real page and syntax-check its embedded <script>. the worker embeds
    // getpost.html inside a backtick template literal, which silently eats JS
    // backslash escapes - this would have caught the '\n'/'\.' breakage.
    const [html] = sandbox.generateHtmlBasedOnType(
      new TextEncoder().encode("x").buffer,
      new URL("https://t.local/post?key=X"), { permanent: true }, null);
    const scripts = html.match(/<script>([\s\S]*?)<\/script>/g);
    const inline = scripts[scripts.length - 1].replace(/<\/?script>/g, "")
      // the ${injectorScript} placeholder is the only unresolved interpolation here
      .replace(/\n\s*;\s*$/, "");
    // throws SyntaxError if the packed script is malformed
    new vm.Script(inline);
  });

  console.log("[type detection]");

  const detect = (bytes) =>
    sandbox.generateHtmlBasedOnType(Uint8Array.from(bytes).buffer, new URL("https://t.local/post?key=X"), null, null);

  await test("GPE1 container detected as encrypted", () => {
    const [, type] = detect([0, 0x47, 0x50, 0x45, 0x31, 1, 2, 3]);
    assert.strictEqual(type, "application/x-encrypted");
  });

  await test("bare 0x00 (no GPE1) is not treated as encrypted", () => {
    const [, type] = detect([0, 9, 9, 9, 9, 9, 9, 9, 9]);
    assert.notStrictEqual(type, "application/x-encrypted");
  });

  await test("mp42 not mistaken for encrypted, page redirects", () => {
    const bytes = Array.from(new TextEncoder().encode("\x00\x00\x00\x18ftypmp42xxxx")).map((b) => b & 0xff);
    bytes[0] = 0; bytes[1] = 0; bytes[2] = 0; bytes[3] = 0x18;
    const [html, type] = detect(bytes);
    assert.strictEqual(type, "video/mp4");
    // match the injector form specifically - the viewer's own countdown code also
    // contains a window.location.assign call on every page
    assert.ok(html.includes("window.location.assign(window.location.href"));
  });

  await test("png magic detected", () => {
    const [, type] = detect([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
    assert.strictEqual(type, "image/png");
  });

  await test("pdf magic detected", () => {
    const [, type] = detect([0x25, 0x50, 0x44, 0x46, 0x2d]);
    assert.strictEqual(type, "application/pdf");
  });

  await test("webp detected via RIFF+WEBP, renders inline", () => {
    const [html, type] = detect([0x52, 0x49, 0x46, 0x46, 0, 0, 0, 0, 0x57, 0x45, 0x42, 0x50]);
    assert.strictEqual(type, "image/webp");
    assert.ok(!html.includes("window.location.assign(window.location.href"));
  });

  await test("wav detected via RIFF+WAVE, redirects to raw", () => {
    const [html, type] = detect([0x52, 0x49, 0x46, 0x46, 0, 0, 0, 0, 0x57, 0x41, 0x56, 0x45]);
    assert.strictEqual(type, "audio/wav");
    assert.ok(html.includes("window.location.assign(window.location.href"));
  });

  await test("jpeg detected for any ffd8ff prefix (jfif, exif, quant-table-first)", () => {
    assert.strictEqual(detect([0xff, 0xd8, 0xff, 0xe0, 1, 2])[1], "image/jpeg");
    assert.strictEqual(detect([0xff, 0xd8, 0xff, 0xdb, 1, 2])[1], "image/jpeg");
    assert.strictEqual(detect([0xff, 0xd8, 0xff, 0xee, 1, 2])[1], "image/jpeg");
  });

  await test("mp3 detected for any ID3v2 version", () => {
    assert.strictEqual(detect([0x49, 0x44, 0x33, 0x03, 0, 0])[1], "audio/mp3"); // v2.3
    assert.strictEqual(detect([0x49, 0x44, 0x33, 0x04, 0, 0])[1], "audio/mp3"); // v2.4
    assert.strictEqual(detect([0x49, 0x44, 0x33, 0x02, 0, 0])[1], "audio/mp3"); // v2.2
  });

  await test("webm, ogg, flac magics detected", () => {
    assert.strictEqual(detect([0x1a, 0x45, 0xdf, 0xa3, 1, 2, 3, 4])[1], "video/webm");
    assert.strictEqual(detect([0x4f, 0x67, 0x67, 0x53, 1, 2, 3, 4])[1], "audio/ogg");
    assert.strictEqual(detect([0x66, 0x4c, 0x61, 0x43, 1, 2, 3, 4])[1], "audio/flac");
  });

  await test("svg detected and rendered inline (not as markdown)", () => {
    const svg = (s) => detect(Array.from(new TextEncoder().encode(s)));
    assert.strictEqual(svg('<svg xmlns="http://www.w3.org/2000/svg"></svg>')[1], "image/svg+xml");
    assert.strictEqual(svg('<?xml version="1.0"?>\n<svg></svg>')[1], "image/svg+xml");
    // a markdown doc that merely mentions svg stays text
    assert.strictEqual(svg("# my svg notes")[1], "text/raw; charset=UTF-8");
  });

  const detectText = (s) => detect(Array.from(new TextEncoder().encode(s)));

  await test("non-ascii utf-8 stays text (accents, em-dash, emoji)", () => {
    assert.strictEqual(detectText("# café zine — tést \u{1f389}")[1], "text/raw; charset=UTF-8");
  });

  await test("invalid utf-8 byte sequences detected as binary", () => {
    // 0xff/0xfe never appear in valid utf-8 - strict decode must reject this
    assert.strictEqual(detect([0xff, 0xfe, 0xfa, 0x01, 0x80, 0x81])[1], "application/octet-stream");
  });

  await test("valid utf-8 with stray control bytes detected as binary", () => {
    assert.strictEqual(detect([0x68, 0x69, 0x01, 0x02, 0x03, 0x04])[1], "application/octet-stream");
  });

  await test("single-line http url detected as text/x-url", () => {
    assert.strictEqual(detectText("https://example.com/some/path?q=1")[1], "text/x-url");
    assert.strictEqual(detectText("http://example.com/")[1], "text/x-url");
  });

  await test("url with trailing newline/whitespace still detected", () => {
    assert.strictEqual(detectText("https://example.com/\n")[1], "text/x-url");
    assert.strictEqual(detectText("  https://example.com/  \n")[1], "text/x-url");
  });

  await test("multi-line content starting with a url stays text/markdown", () => {
    assert.strictEqual(
      detectText("https://example.com/\nand some more text")[1],
      "text/raw; charset=UTF-8");
  });

  await test("non-http scheme (javascript:, ftp:) not treated as url", () => {
    assert.strictEqual(detectText("javascript:alert(1)")[1], "text/raw; charset=UTF-8");
    assert.strictEqual(detectText("ftp://example.com/file")[1], "text/raw; charset=UTF-8");
  });

  await test("url longer than 2048 chars stays text", () => {
    assert.strictEqual(
      detectText("https://example.com/" + "a".repeat(2100))[1],
      "text/raw; charset=UTF-8");
  });

  await test("encrypted container takes precedence over url detection", () => {
    const urlBytes = Array.from(new TextEncoder().encode("https://example.com/"));
    const [, type] = detect([0, 0x47, 0x50, 0x45, 0x31].concat(urlBytes));
    assert.strictEqual(type, "application/x-encrypted");
  });

  await test("url viewer page contains countdown hook and no server redirect", () => {
    const [html, type] = detectText("https://example.com/");
    assert.strictEqual(type, "text/x-url");
    assert.ok(html.includes('var payloadType = "text/x-url"'));
    assert.ok(html.includes('id="redirectNotice"'));
    assert.ok(html.includes("showRedirectCountdown"));
    // the injectorScript slot (the lone statement before </script>) must be empty -
    // the only location.assign on the page is inside showRedirectCountdown itself
    assert.ok(/\n\s*;\s*<\/script>/.test(html), "injector slot is empty");
    // and the page script must still be valid JS after template-literal packing
    const scripts = html.match(/<script>([\s\S]*?)<\/script>/g);
    const inline = scripts[scripts.length - 1].replace(/<\/?script>/g, "")
      .replace(/\n\s*;\s*$/, "");
    new vm.Script(inline);
  });

  await test("plain text rendered as markdown", () => {
    const [html, type] = detect(Array.from(new TextEncoder().encode("# hello")));
    assert.strictEqual(type, "text/raw; charset=UTF-8");
    assert.ok(html.includes("<h1"));
  });

  await test("server renders code-fence when content_type forces it", () => {
    const src = "# a heading\n\nsome body text\n";
    const renderWith = (q) => sandbox.generateHtmlBasedOnType(
      new TextEncoder().encode(src).buffer,
      new URL("https://t.local/post?key=X" + q), null, null)[0];
    // bare text: markdown - "# a heading" becomes an <h1>, not a code block
    const md = renderWith("");
    assert.ok(md.includes("<h1") && !md.includes("<pre><code"));
    // forced via content_type: verbatim in <pre><code>, heading syntax not interpreted
    const code = renderWith("&content_type=text/x-python");
    assert.ok(code.includes("<pre><code") && !code.includes("<h1"));
    assert.ok(code.includes("# a heading"));
    // ?lang= adds the highlight-friendly class
    assert.ok(renderWith("&lang=python").includes("language-python"));
  });

  await test("toCodeFence escapes backtick runs so they can't close the fence", () => {
    const out = sandbox.toCodeFence("a ``` b ```` c", "");
    // fence must be longer than the longest internal run (4 -> 5)
    assert.ok(out.startsWith("`````"));
  });

  await test("custom title is sanitized", () => {
    const [html] = sandbox.generateHtmlBasedOnType(
      new TextEncoder().encode("hi").buffer,
      new URL("https://t.local/post?key=X"), null, "<script>alert(1)</script>");
    assert.ok(!html.includes("<script>alert(1)"));
    assert.ok(html.includes("&lt;script&gt;alert(1)"));
  });

  console.log("[handler: upload]");

  sandbox.NAMESPACE = makeNamespace();
  sandbox.caches = makeCacheStorage();

  await test("upload returns json links and stores content", async () => {
    const json = await uploadJson("hello world");
    assert.match(json.key, /^[0-9A-HJKMNP-TV-Z]{26}$/);
    assert.ok(json.share_url.includes("key=" + json.key));
    assert.ok(json.delete_url.includes("del="));
    assert.strictEqual(json.size, 11);
    const entry = sandbox.NAMESPACE.store.get(json.key);
    assert.ok(entry, "stored in KV");
    assert.strictEqual(entry.opts.expirationTtl, 365 * 24 * 60 * 60);
    assert.match(entry.opts.metadata.del, /^[0-9A-HJKMNP-TV-Z]{26}$/);
  });

  await test("cli upload gets plain text", async () => {
    const resp = await call("POST", "/post", { body: "hi", headers: { "User-Agent": "curl/8.0" } });
    const text = await resp.text();
    assert.ok(text.includes("share link:"));
  });

  await test("x-ttl below minimum is clamped to 60", async () => {
    const json = await uploadJson("ttl", { "X-TTL": "30" });
    assert.strictEqual(sandbox.NAMESPACE.store.get(json.key).opts.expirationTtl, 60);
  });

  await test("garbage x-ttl falls back to a year", async () => {
    const json = await uploadJson("ttl", { "X-TTL": "banana" });
    assert.strictEqual(sandbox.NAMESPACE.store.get(json.key).opts.expirationTtl, 365 * 24 * 60 * 60);
  });

  await test("oversize upload rejected with 413", async () => {
    const resp = await call("POST", "/post", { body: Buffer.alloc(11 * 1024 * 1024) });
    assert.strictEqual(resp.status, 413);
  });

  console.log("[permanent posts]");

  await test("operator secret as X-TTL stores with no expiry", async () => {
    sandbox.PERMANENT_KEY = "test-secret";
    try {
      const json = await uploadJson("forever", { "X-TTL": "test-secret" });
      const opts = sandbox.NAMESPACE.store.get(json.key).opts;
      assert.strictEqual(opts.expirationTtl, undefined, "no expirationTtl");
      assert.strictEqual(opts.metadata.permanent, true);
      assert.strictEqual(opts.metadata.expiry, undefined);
      assert.strictEqual(json.expires_at, "never");
      const html = await (await call("GET", "/post?key=" + json.key)).text();
      assert.ok(html.includes("Never (permanent)"));
    } finally {
      delete sandbox.PERMANENT_KEY;
    }
  });

  await test("numeric X-TTL still expires when secret is set", async () => {
    sandbox.PERMANENT_KEY = "test-secret";
    try {
      const json = await uploadJson("temp", { "X-TTL": "3600" });
      const opts = sandbox.NAMESPACE.store.get(json.key).opts;
      assert.strictEqual(opts.expirationTtl, 3600);
      assert.ok(!opts.metadata.permanent);
    } finally {
      delete sandbox.PERMANENT_KEY;
    }
  });

  await test("secret value is inert when no PERMANENT_KEY is bound", async () => {
    // PERMANENT_KEY unset: the would-be secret is just a garbage TTL -> default year
    const json = await uploadJson("nope", { "X-TTL": "test-secret" });
    const opts = sandbox.NAMESPACE.store.get(json.key).opts;
    assert.strictEqual(opts.expirationTtl, 365 * 24 * 60 * 60);
    assert.ok(!opts.metadata.permanent);
  });

  console.log("[handler: retrieval]");

  await test("share page renders with detected type", async () => {
    const json = await uploadJson("# rendered");
    const resp = await call("GET", "/post?key=" + json.key);
    assert.strictEqual(resp.status, 200);
    const html = await resp.text();
    assert.ok(html.includes('var payloadType = "text/raw'));
    assert.ok(html.includes("<h1"));
  });

  await test("raw fetch round-trips exact bytes", async () => {
    const body = Uint8Array.from([1, 2, 3, 250, 251]);
    const json = await uploadJson(body);
    const resp = await call("GET", "/post?key=" + json.key + "&raw");
    assert.deepStrictEqual(new Uint8Array(await resp.arrayBuffer()), body);
  });

  await test("raw fetch sets cache header", async () => {
    const json = await uploadJson("cache me");
    const resp = await call("GET", "/post?key=" + json.key + "&raw");
    assert.strictEqual(resp.headers.get("cache-control"), "public, max-age=300");
  });

  await test("custom content_type honored when valid, 400 when not", async () => {
    const json = await uploadJson("ct");
    let resp = await call("GET", "/post?key=" + json.key + "&raw&content_type=text/html");
    assert.ok(resp.headers.get("content-type").includes("text/html"));
    resp = await call("GET", "/post?key=" + json.key + "&raw&content_type=not_a_mime");
    assert.strictEqual(resp.status, 400);
  });

  await test("encrypted upload flagged for the viewer", async () => {
    const blob = new Uint8Array(50);
    blob.set([0, 0x47, 0x50, 0x45, 0x31], 0);
    const json = await uploadJson(blob);
    const html = await (await call("GET", "/post?key=" + json.key)).text();
    assert.ok(html.includes('var payloadType = "application/x-encrypted"'));
  });

  await test("uploaded url body served with text/x-url viewer page", async () => {
    const json = await uploadJson("https://example.com/short/link");
    const html = await (await call("GET", "/post?key=" + json.key)).text();
    assert.ok(html.includes('var payloadType = "text/x-url"'));
    assert.ok(html.includes('id="redirectNotice"'));
  });

  await test("unknown key 404, malformed key 404", async () => {
    assert.strictEqual((await call("GET", "/post?key=" + "A".repeat(26))).status, 404);
    assert.strictEqual((await call("GET", "/post?key=tooshort")).status, 404);
  });

  console.log("[handler: delete]");

  await test("GET delete link returns confirmation, content survives", async () => {
    const json = await uploadJson("keep me");
    const del = new URL(json.delete_url).search;
    const resp = await call("GET", "/post" + del);
    assert.strictEqual(resp.status, 200);
    assert.ok((await resp.text()).includes("POST"));
    assert.ok(sandbox.NAMESPACE.store.has(json.key), "not deleted by GET");
  });

  await test("POST with wrong delete key 404s, content survives", async () => {
    const json = await uploadJson("keep me too");
    const resp = await call("POST", "/post?key=" + json.key + "&del=" + "0".repeat(26));
    assert.strictEqual(resp.status, 404);
    assert.ok(sandbox.NAMESPACE.store.has(json.key));
  });

  await test("POST with correct delete key removes content", async () => {
    const json = await uploadJson("delete me");
    const del = new URL(json.delete_url).search;
    const resp = await call("POST", "/post" + del);
    assert.strictEqual(resp.status, 200);
    assert.ok(!sandbox.NAMESPACE.store.has(json.key), "deleted");
  });

  console.log("[edge cache]");

  await test("repeat view served from edge cache without KV", async () => {
    const json = await uploadJson("cache hit test");
    assert.strictEqual((await call("GET", "/post?key=" + json.key)).status, 200);
    // remove from KV to prove the second view comes from the cache
    sandbox.NAMESPACE.store.delete(json.key);
    const second = await call("GET", "/post?key=" + json.key);
    assert.strictEqual(second.status, 200);
    assert.ok((await second.text()).includes("cache hit test"));
  });

  await test("delete purges this PoP's cached copies", async () => {
    const json = await uploadJson("purge me");
    await call("GET", "/post?key=" + json.key);
    await call("GET", "/post?key=" + json.key + "&raw");
    const resp = await call("POST", "/post" + new URL(json.delete_url).search);
    assert.strictEqual(resp.status, 200);
    assert.strictEqual((await call("GET", "/post?key=" + json.key)).status, 404);
    assert.strictEqual((await call("GET", "/post?key=" + json.key + "&raw")).status, 404);
  });

  await test("HEAD does not populate the edge cache", async () => {
    const json = await uploadJson("head no cache");
    await call("HEAD", "/post?key=" + json.key);
    assert.ok(!sandbox.caches.store.has("https://test.local/post?key=" + json.key));
  });

  console.log("[named pastes]");

  // POST a named paste with the operator secret, returning the parsed response
  async function postNamed(name, body, headers = {}) {
    return call("POST", "/x/" + name, {
      body,
      headers: Object.assign(
        { Accept: "application/json", Authorization: "named-secret" },
        headers
      ),
    });
  }

  await test("named-paste writes 403 when NAMED_KEY is unbound", async () => {
    // NAMED_KEY unset: feature disabled, even a "correct-looking" auth fails
    assert.strictEqual(
      (await call("POST", "/x/blog", { body: "x", headers: { Authorization: "anything" } })).status,
      403);
    assert.strictEqual(
      (await call("DELETE", "/x/blog", { headers: { Authorization: "anything" } })).status,
      403);
  });

  await test("named-paste wrong/missing auth 401, GET stays public", async () => {
    sandbox.NAMED_KEY = "named-secret";
    try {
      assert.strictEqual((await call("POST", "/x/auth-test", { body: "x" })).status, 401);
      assert.strictEqual(
        (await call("POST", "/x/auth-test", { body: "x", headers: { Authorization: "wrong" } })).status,
        401);
      assert.strictEqual((await call("DELETE", "/x/auth-test", { headers: { Authorization: "wrong" } })).status, 401);
      // a real create, then an unauthenticated public read
      assert.strictEqual((await postNamed("auth-test", "public read")).status, 200);
      const page = await call("GET", "/x/auth-test");
      assert.strictEqual(page.status, 200);
      assert.ok((await page.text()).includes("public read"));
    } finally {
      delete sandbox.NAMED_KEY;
    }
  });

  await test("create named paste: permanent metadata, no edit/del keys, json fields", async () => {
    sandbox.NAMED_KEY = "named-secret";
    try {
      const resp = await postNamed("notes.v1", "named content");
      assert.strictEqual(resp.status, 200);
      const json = await resp.json();
      assert.strictEqual(json.share_url, "https://test.local/x/notes.v1");
      assert.strictEqual(json.raw_url, "https://test.local/x/notes.v1?raw");
      assert.strictEqual(json.size, 13);
      assert.strictEqual(json.expires_at, "never");
      const entry = sandbox.NAMESPACE.store.get("_X_notes.v1");
      assert.ok(entry, "stored under the _X_ prefix");
      assert.strictEqual(entry.opts.expirationTtl, undefined, "no expirationTtl");
      assert.strictEqual(entry.opts.metadata.permanent, true);
      assert.strictEqual(entry.opts.metadata.edit, undefined, "no edit key minted");
      assert.strictEqual(entry.opts.metadata.del, undefined, "no del key minted");
    } finally {
      delete sandbox.NAMED_KEY;
    }
  });

  await test("numeric X-TTL honored (and clamped) on named paste, garbage stays permanent", async () => {
    sandbox.NAMED_KEY = "named-secret";
    try {
      await postNamed("ttl-test", "x", { "X-TTL": "3600" });
      let opts = sandbox.NAMESPACE.store.get("_X_ttl-test").opts;
      assert.strictEqual(opts.expirationTtl, 3600);
      assert.ok(!opts.metadata.permanent);
      assert.ok(opts.metadata.expiry.includes("T"));
      await postNamed("ttl-clamp", "x", { "X-TTL": "30" });
      assert.strictEqual(sandbox.NAMESPACE.store.get("_X_ttl-clamp").opts.expirationTtl, 60);
      await postNamed("ttl-garbage", "x", { "X-TTL": "banana" });
      opts = sandbox.NAMESPACE.store.get("_X_ttl-garbage").opts;
      assert.strictEqual(opts.expirationTtl, undefined);
      assert.strictEqual(opts.metadata.permanent, true);
    } finally {
      delete sandbox.NAMED_KEY;
    }
  });

  await test("duplicate POST 409 keeps original; X-I-Really-Mean-It overwrites + purges cache", async () => {
    sandbox.NAMED_KEY = "named-secret";
    try {
      assert.strictEqual((await postNamed("dup", "original")).status, 200);
      // populate the edge cache with the original page and raw bytes
      await call("GET", "/x/dup");
      await call("GET", "/x/dup?raw");
      assert.ok(sandbox.caches.store.has("https://test.local/x/dup"));
      assert.ok(sandbox.caches.store.has("https://test.local/x/dup?raw"));
      // plain duplicate is refused and changes nothing
      const dup = await postNamed("dup", "clobber attempt");
      assert.strictEqual(dup.status, 409);
      assert.ok((await dup.text()).includes("X-I-Really-Mean-It"));
      assert.strictEqual((await (await call("GET", "/x/dup?raw")).text()), "original");
      // explicit overwrite succeeds and the stale cached copies are purged
      const ow = await postNamed("dup", "overwritten", { "X-I-Really-Mean-It": "yes" });
      assert.strictEqual(ow.status, 200);
      assert.ok((await ow.json()).message.includes("overwrote"));
      assert.strictEqual((await (await call("GET", "/x/dup?raw")).text()), "overwritten");
    } finally {
      delete sandbox.NAMED_KEY;
    }
  });

  await test("named paste GET renders the viewer (markdown case)", async () => {
    sandbox.NAMED_KEY = "named-secret";
    try {
      await postNamed("md-page", "# named heading");
      const html = await (await call("GET", "/x/md-page")).text();
      assert.ok(html.includes('var payloadType = "text/raw'));
      assert.ok(html.includes("<h1"));
      assert.ok(html.includes("Never (permanent)"));
    } finally {
      delete sandbox.NAMED_KEY;
    }
  });

  await test("named paste ?raw round-trips exact bytes", async () => {
    sandbox.NAMED_KEY = "named-secret";
    try {
      const body = Uint8Array.from([1, 2, 3, 250, 251]);
      await postNamed("raw-bytes", body);
      const resp = await call("GET", "/x/raw-bytes?raw");
      assert.deepStrictEqual(new Uint8Array(await resp.arrayBuffer()), body);
    } finally {
      delete sandbox.NAMED_KEY;
    }
  });

  await test("encrypted named paste flagged for the viewer", async () => {
    sandbox.NAMED_KEY = "named-secret";
    try {
      const blob = new Uint8Array(50);
      blob.set([0, 0x47, 0x50, 0x45, 0x31], 0);
      await postNamed("enc-page", blob);
      const html = await (await call("GET", "/x/enc-page")).text();
      assert.ok(html.includes('var payloadType = "application/x-encrypted"'));
    } finally {
      delete sandbox.NAMED_KEY;
    }
  });

  await test("url named paste gets the text/x-url countdown viewer", async () => {
    sandbox.NAMED_KEY = "named-secret";
    try {
      await postNamed("shortlink", "https://example.com/dest");
      const html = await (await call("GET", "/x/shortlink")).text();
      assert.ok(html.includes('var payloadType = "text/x-url"'));
      assert.ok(html.includes('id="redirectNotice"'));
    } finally {
      delete sandbox.NAMED_KEY;
    }
  });

  await test("invalid names 404 for GET and POST", async () => {
    sandbox.NAMED_KEY = "named-secret";
    try {
      const bad = ["/x/", "/x/a/b", "/x/.leading-dot", "/x/" + "a".repeat(65), "/x/sp%20ace"];
      for (const path of bad) {
        assert.strictEqual((await call("GET", path)).status, 404, "GET " + path);
        assert.strictEqual(
          (await call("POST", path, { body: "x", headers: { Authorization: "named-secret" } })).status,
          404, "POST " + path);
      }
      assert.strictEqual((await call("GET", "/x")).status, 404);
    } finally {
      delete sandbox.NAMED_KEY;
    }
  });

  await test("DELETE named paste: auth required, deletes, purges cache, missing 404", async () => {
    sandbox.NAMED_KEY = "named-secret";
    try {
      await postNamed("doomed", "delete me");
      await call("GET", "/x/doomed");
      await call("GET", "/x/doomed?raw");
      assert.strictEqual((await call("DELETE", "/x/doomed")).status, 401, "auth required");
      const resp = await call("DELETE", "/x/doomed", { headers: { Authorization: "named-secret" } });
      assert.strictEqual(resp.status, 200);
      assert.ok(!sandbox.NAMESPACE.store.has("_X_doomed"), "removed from KV");
      // cached copies purged: subsequent reads 404 instead of serving stale
      assert.strictEqual((await call("GET", "/x/doomed")).status, 404);
      assert.strictEqual((await call("GET", "/x/doomed?raw")).status, 404);
      // deleting something that never existed
      assert.strictEqual(
        (await call("DELETE", "/x/never-was", { headers: { Authorization: "named-secret" } })).status,
        404);
    } finally {
      delete sandbox.NAMED_KEY;
    }
  });

  await test("viewer builds ?raw (not &raw) for query-less /x/ pages, script stays valid JS", () => {
    // render a page as a /x/ path (no query string) and check the raw-url helper
    const [html] = sandbox.generateHtmlBasedOnType(
      new TextEncoder().encode("# x").buffer,
      new URL("https://t.local/x/page"), { permanent: true }, null);
    assert.ok(html.includes("function rawUrlOfPage"), "raw-url helper present");
    assert.ok(html.includes("'?raw'"), "helper has the no-query branch");
    assert.ok(html.includes("'&raw'"), "helper keeps the query-page branch");
    // the binary-redirect injector must use the same conditional construction
    const [mp4Html] = sandbox.generateHtmlBasedOnType(
      Uint8Array.from([0x1a, 0x45, 0xdf, 0xa3, 1, 2, 3, 4]).buffer,
      new URL("https://t.local/x/vid"), null, null);
    assert.ok(mp4Html.includes("window.location.search?'&raw':'?raw'"), "injector handles both forms");
    // and the page script must still be valid JS after template-literal packing
    const scripts = html.match(/<script>([\s\S]*?)<\/script>/g);
    const inline = scripts[scripts.length - 1].replace(/<\/?script>/g, "")
      .replace(/\n\s*;\s*$/, "");
    new vm.Script(inline);
  });

  await test("fragment carry-forward script targets same-origin /x/ links only", () => {
    const [html] = sandbox.generateHtmlBasedOnType(
      new TextEncoder().encode("x").buffer,
      new URL("https://t.local/x/page"), { permanent: true }, null);
    assert.ok(html.includes("function carryFragmentForward"), "carry-forward helper present");
    assert.ok(html.includes("carryFragmentForward(decryptedDiv)"), "wired into decrypted render");
    assert.ok(html.includes("indexOf('/x/')"), "restricted to /x/ paths");
    assert.ok(html.includes("window.location.origin"), "restricted to same origin");
    const scripts = html.match(/<script>([\s\S]*?)<\/script>/g);
    const inline = scripts[scripts.length - 1].replace(/<\/?script>/g, "")
      .replace(/\n\s*;\s*$/, "");
    new vm.Script(inline);
  });

  console.log("[handler: methods, pages, cors]");

  await test("HEAD served via GET path", async () => {
    const json = await uploadJson("head test");
    assert.strictEqual((await call("HEAD", "/post?key=" + json.key)).status, 200);
  });

  await test("PUT rejected with 405 + Allow", async () => {
    const resp = await call("PUT", "/post", { body: "x" });
    assert.strictEqual(resp.status, 405);
    assert.ok(resp.headers.get("allow").includes("POST"));
  });

  await test("upload page served at / and /post", async () => {
    for (const path of ["/", "/post"]) {
      const html = await (await call("GET", path)).text();
      assert.ok(html.includes('id="dropZone"'), path + " has drop zone");
      assert.ok(html.includes('id="pasteToggle"'), path + " has paste mode");
      assert.ok(html.includes('id="encryptToggle" checked'), path + " has encrypt toggle, default on");
      assert.ok(html.includes('id="fileInput" multiple'), path + " accepts multiple files");
      assert.ok(html.includes('id="resultList"'), path + " has multi-result list");
      assert.ok(html.includes('id="indexToggle"'), path + " has index-page option");
    }
  });

  await test("embedded libs served with long cache", async () => {
    for (const lib of ["/naclfast.min.js", "/argon2bundled.min.js", "/qrcode.min.js", "/marked.min.js"]) {
      const resp = await call("GET", lib);
      assert.strictEqual(resp.status, 200, lib);
      assert.strictEqual(resp.headers.get("cache-control"), "public, max-age=86400", lib);
    }
  });

  await test("favicon served as both ico (raster) and svg", async () => {
    // raster ico for clients that won't parse svg (Signal, link crawlers);
    // svg for browsers that accept it
    const ico = await call("GET", "/favicon.ico");
    assert.strictEqual(ico.status, 200);
    assert.strictEqual(ico.headers.get("content-type"), "image/x-icon");
    const icoBytes = new Uint8Array(await ico.arrayBuffer());
    // ICO magic: 00 00 01 00
    assert.deepStrictEqual([...icoBytes.slice(0, 4)], [0, 0, 1, 0], "valid ICO header");

    const svg = await call("GET", "/favicon.svg");
    assert.strictEqual(svg.headers.get("content-type"), "image/svg+xml");
    assert.ok((await svg.text()).includes("<svg"));
    assert.strictEqual((await call("GET", "/about")).status, 200);
  });

  await test("preview icon served as png (raster) and svg", async () => {
    const png = await call("GET", "/icon.png");
    assert.strictEqual(png.status, 200);
    assert.strictEqual(png.headers.get("content-type"), "image/png");
    const pngBytes = new Uint8Array(await png.arrayBuffer());
    // PNG magic: 89 50 4E 47
    assert.deepStrictEqual([...pngBytes.slice(0, 4)], [0x89, 0x50, 0x4e, 0x47], "valid PNG header");
    assert.strictEqual((await call("GET", "/icon.svg")).headers.get("content-type"), "image/svg+xml");
  });

  await test("static icon assets carry the long cache header", async () => {
    for (const path of ["/favicon.svg", "/favicon.ico", "/icon.svg", "/icon.png"]) {
      const cc = (await call("GET", path)).headers.get("cache-control") || "";
      assert.ok(cc.includes("max-age=86400"), path + " cached: " + cc);
    }
  });

  await test("text post link-preview falls back to the raster site icon", async () => {
    const json = await uploadJson("# just text, no image");
    const html = await (await call("GET", "/post?key=" + json.key)).text();
    // no uploaded image -> og:image should point at the PNG (svg is rejected by crawlers)
    assert.ok(/og:image" content="https?:\/\/[^"]+\/icon\.png"/.test(html), "og:image falls back to icon.png");
    assert.ok(html.includes('href="/favicon.ico"'), "ico favicon link present");
    assert.ok(html.includes('type="image/svg+xml"'), "svg favicon link present");
  });

  await test("about page curl examples target /post, not the about page itself", async () => {
    const html = await (await call("GET", "/about")).text();
    // the snippets interpolate the request URL's host; uploads must POST to /post.
    // regression guard: ${url.toString()} here would yield .../about (a docs page
    // that stores nothing), which is the bug this catches.
    assert.ok(html.includes("/post"), "upload target present");
    assert.ok(/--data-binary @\S+ https:\/\/[^/]+\/post/.test(html), "curl posts to /post");
    assert.ok(!/--data-binary[^\n]*\/about/.test(html), "no upload aimed at /about");
  });

  await test("cli client served byte-identical to repo copy", async () => {
    const served = await (await call("GET", "/pastebin-crypted.py")).text();
    assert.strictEqual(served, fs.readFileSync(__dirname + "/pastebin-crypted.py", "utf8"));
  });

  await test("OPTIONS preflight and cors=1 set allow-origin", async () => {
    const pre = await call("OPTIONS", "/post");
    assert.strictEqual(pre.status, 204);
    assert.strictEqual(pre.headers.get("access-control-allow-origin"), "*");
    const json = await uploadJson("cors");
    const resp = await call("GET", "/post?key=" + json.key + "&raw&cors=1");
    assert.strictEqual(resp.headers.get("access-control-allow-origin"), "*");
  });

  await test("/headers and /echo debug endpoints", async () => {
    const headers = await (await call("GET", "/headers")).json();
    assert.strictEqual(headers.method, "GET");
    const echo = await (await call("POST", "/echo", { body: "echo test" })).text();
    assert.strictEqual(echo, "echo test");
  });

  await test("worker error path returns traceback json", async () => {
    const resp = await call("GET", "/raise_exception");
    assert.strictEqual(resp.status, 500);
    assert.ok(resp.headers.get("content-type").includes("application/json"));
    const json = await resp.json();
    assert.ok(Array.isArray(json.traceback));
  });

  await test("error responses do not stuff the body into statusText", async () => {
    const resp = await call("GET", "/post?key=tooshort");
    assert.strictEqual(resp.status, 404);
    // statusText should be the default reason phrase, not the body text
    assert.ok(!resp.statusText.includes("Sorry"));
  });

  console.log("");
  console.log("==================================");
  if (failed === 0) {
    console.log("ALL TESTS PASSED (" + passed + " passed)");
    process.exit(0);
  } else {
    console.log("TESTS FAILED (" + failed + " failed, " + passed + " passed)");
    process.exit(1);
  }
})();
