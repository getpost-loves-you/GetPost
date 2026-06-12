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
    }
  });

  await test("embedded libs served with long cache", async () => {
    for (const lib of ["/naclfast.min.js", "/argon2bundled.min.js", "/qrcode.min.js", "/marked.min.js"]) {
      const resp = await call("GET", lib);
      assert.strictEqual(resp.status, 200, lib);
      assert.strictEqual(resp.headers.get("cache-control"), "public, max-age=86400", lib);
    }
  });

  await test("favicon and about served", async () => {
    assert.strictEqual((await call("GET", "/favicon.ico")).headers.get("content-type"), "image/x-icon");
    assert.strictEqual((await call("GET", "/about")).status, 200);
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
