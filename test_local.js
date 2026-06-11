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

function call(method, path, opts = {}) {
  const init = { method };
  if (opts.body !== undefined) init.body = opts.body;
  if (opts.headers) init.headers = opts.headers;
  const request = new Request("https://test.local" + path, init);
  return sandbox.HANDLER({ request });
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

  console.log("[type detection]");

  const detect = (bytes) =>
    sandbox.generateHtmlBasedOnType(Uint8Array.from(bytes).buffer, new URL("https://t.local/post?key=X"), null, null);

  await test("GPE1 container detected as encrypted", () => {
    const [, type] = detect([0, 0x47, 0x50, 0x45, 0x31, 1, 2, 3]);
    assert.strictEqual(type, "application/x-encrypted");
  });

  await test("legacy bare-0x00 container detected as encrypted", () => {
    const [, type] = detect([0, 9, 9, 9, 9, 9, 9, 9, 9]);
    assert.strictEqual(type, "application/x-encrypted");
  });

  await test("mp42 not mistaken for encrypted, page redirects", () => {
    const bytes = Array.from(new TextEncoder().encode("\x00\x00\x00\x18ftypmp42xxxx")).map((b) => b & 0xff);
    bytes[0] = 0; bytes[1] = 0; bytes[2] = 0; bytes[3] = 0x18;
    const [html, type] = detect(bytes);
    assert.strictEqual(type, "video/mp4");
    assert.ok(html.includes("window.location.assign"));
  });

  await test("zero-leading non-mp42 binary does not fall through to pdf", () => {
    const [, type] = sandbox.generateHtmlBasedOnType(
      // bare 0x00 marker is assumed legacy-encrypted, never pdf
      Uint8Array.from([0, 0, 0, 0x18, 65, 65, 65, 65, 65, 65, 65, 65]).buffer,
      new URL("https://t.local/post?key=X"), null, null);
    assert.notStrictEqual(type, "application/pdf");
  });

  await test("png magic detected", () => {
    const [, type] = detect([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
    assert.strictEqual(type, "image/png");
  });

  await test("pdf magic detected", () => {
    const [, type] = detect([0x25, 0x50, 0x44, 0x46, 0x2d]);
    assert.strictEqual(type, "application/pdf");
  });

  await test("plain text rendered as markdown", () => {
    const [html, type] = detect(Array.from(new TextEncoder().encode("# hello")));
    assert.strictEqual(type, "text/raw; charset=UTF-8");
    assert.ok(html.includes("<h1"));
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

  await test("unknown key 404, malformed key 404", async () => {
    assert.strictEqual((await call("GET", "/post?key=" + "A".repeat(26))).status, 404);
    assert.strictEqual((await call("GET", "/post?key=tooshort")).status, 404);
  });

  await test("legacy post (no metadata) strips appended delete key", async () => {
    const legacyDel = "B".repeat(26);
    const value = new TextEncoder().encode("legacy content" + legacyDel).buffer;
    const key = "C".repeat(26);
    sandbox.NAMESPACE.store.set(key, { value, opts: {} });
    const html = await (await call("GET", "/post?key=" + key)).text();
    assert.ok(html.includes("legacy content"));
    assert.ok(!html.includes(legacyDel));
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

  await test("legacy post deletable via appended key", async () => {
    const legacyDel = "D".repeat(26);
    const key = "E".repeat(26);
    sandbox.NAMESPACE.store.set(key, {
      value: new TextEncoder().encode("legacy" + legacyDel).buffer,
      opts: {},
    });
    const resp = await call("POST", "/post?key=" + key + "&del=" + legacyDel);
    assert.strictEqual(resp.status, 200);
    assert.ok(!sandbox.NAMESPACE.store.has(key));
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
    const json = await resp.json();
    assert.ok(Array.isArray(json.traceback));
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
