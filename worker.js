// Copyleft 2021: AKA Infra
// Formally: PUBLIC DOMAIN / CC0
// Informally: "an ye harm none, do what ye will"

// declaration parsed by autoinsert.py; inserts the literal contents of deps/marked.min.js
import 'marked' // prettier-ignore

const ENCODING = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";

const DEFAULT_MIME_TEXT = "text/raw; charset=UTF-8";
const DEFAULT_MIME_HTML = "text/html; charset=UTF-8";

// This is non-standard, but very convenient and relatively simple:
// specific interpolated strings - those wrapped in single-backticks (`) - and prefaced by AUTOINSERT_
// are found by a regular-expression search autoinsert.py and converted into corresponding filenames
//
// This keeps the worker.js script simple, without requiring much build tooling!

const naclfast_base64 = `AUTOINSERT_NACLFAST__MIN__JS__BASE64`; // eslint-disable-line
const argon2bundled_base64 = `AUTOINSERT_ARGON2BUNDLED__MIN__JS__BASE64`; // eslint-disable-line
const qrcode_base64 = `AUTOINSERT_QRCODE__MIN__JS__BASE64`; // eslint-disable-line
const marked_base64 = `AUTOINSERT_MARKED__MIN__JS__BASE64`; // eslint-disable-line

// SVG marks: favicon is the keyhole+hash seal; icon is the full envelope used
// for link previews. Spliced raw (no backticks/${} in the files).
const favicon_svg = `AUTOINSERT_FAVICON__SVG`; // eslint-disable-line
const icon_svg = `AUTOINSERT_ICON__SVG`; // eslint-disable-line
// Raster fallbacks for clients that refuse SVG (Signal and most link-preview
// crawlers won't parse SVG - too much attack surface). favicon.ico is a real
// multi-size ICO (16/32/48); icon.png is the 512px preview image.
const favicon_ico_base64 = `AUTOINSERT_FAVICON__ICO__BASE64`; // eslint-disable-line
const icon_png_base64 = `AUTOINSERT_ICON__PNG__BASE64`; // eslint-disable-line

const ENCODING_LEN = ENCODING.length;
const TIME_LEN = 10;
const RANDOM_LEN = 16;

// embedded libraries only change on deploy; content can linger as long as delete propagation (~3min)
const CACHE_STATIC = {
  "Cache-Control": "public, max-age=86400"
};
const CACHE_CONTENT = {
  "Cache-Control": "public, max-age=300"
};

addEventListener("fetch", (fetch_event) => {
  // configure primary entrypoint
  fetch_event.respondWith(HANDLER(fetch_event));
});

// main entrypoint for all requests
async function HANDLER(fetch_event) {
  const now = Date.now();
  const request = fetch_event.request;
  let headers = [...request.headers];
  for (const key in request.cf) {
    headers = headers.concat([
      ["cf-" + key, request.cf[key]]
    ]);
  }
  // massage headers and cloudflare metadata into "requestHeadersAndFriends" - an object containing helpful metadata for a given request
  const requestHeadersAndFriends = {};
  for (const header_index in headers) {
    requestHeadersAndFriends[headers[header_index][0].toLowerCase()] =
      headers[header_index][1];
  }
  const url = new URL(request.url);

  // Handle CORS preflight requests
  if (request.method === "OPTIONS") {
    return handleCorsPreflightRequest(url);
  }

  // first bytes of the request body, captured wherever the body is actually read -
  // used by /headers and the error handler without buffering every upload twice
  let requestBodyForDebug = null;

  // wrap main handler in a try/catch exception logging & reporting block, for easy debug
  try {
    url.protocol = "https:";

    if (url.pathname === "/post" || url.pathname === "/") {
      if (request.method === "POST") {
        // deletion is a POST so link-preview crawlers fetching a delete URL can't destroy content
        if (url.searchParams.has("key") && url.searchParams.has("del")) {
          return await deletePost(url);
        }
        // Accept any reasonable content for uploads
        const blob = await request.arrayBuffer();
        requestBodyForDebug = blob.slice(0, 20);

        // advertised limit is 10MB (plus slack for the encryption container overhead)
        if (blob.byteLength > 10 * 1024 * 1024 + 4096) {
          return buildResponse(
            "Sorry, content exceeds the 10MB limit!",
            DEFAULT_MIME_TEXT, {},
            413,
            url,
          );
        }

        // Generate keys
        const storeKey = ulid(now);
        const editKey = ulid(now);
        const deleteKey = ulid(now);

        // Handle TTL. Passing the operator secret (PERMANENT_KEY binding) as X-TTL
        // stores with no expiry - this gates permalinks to the operator so the
        // public can't fill KV with content that never ages out.
        const xTtlRaw = requestHeadersAndFriends["x-ttl"];
        let xTtlSeconds = 365 * 24 * 60 * 60; // 1 year
        let permanent = false;
        if (typeof PERMANENT_KEY !== "undefined" && PERMANENT_KEY && xTtlRaw === PERMANENT_KEY) {
          permanent = true;
        } else if (xTtlRaw !== undefined) {
          xTtlSeconds = parseInt(xTtlRaw, 10);
          // Validate parsed value - must be a positive number
          if (isNaN(xTtlSeconds) || xTtlSeconds <= 0) {
            xTtlSeconds = 365 * 24 * 60 * 60; // default to 1 year
          } else if (xTtlSeconds < 60) {
            xTtlSeconds = 60; // KV rejects expirationTtl below 60 seconds
          }
        }

        const expiryTime = permanent ?
          "never" :
          new Date(xTtlSeconds * 1000 + now).toISOString();

        // Store the content - omit expirationTtl entirely for permanent posts
        const putOptions = {
          metadata: {
            edit: editKey,
            del: deleteKey
          }
        };
        if (permanent) {
          putOptions.metadata.permanent = true;
        } else {
          putOptions.expirationTtl = xTtlSeconds;
          putOptions.metadata.expiry = expiryTime;
        }
        await NAMESPACE.put(storeKey, blob, putOptions);

        // Prepare response data
        const responseData = {
          message: `GetPost stored ${blob.byteLength} bytes!`,
          size: blob.byteLength,
          key: storeKey,
          share_url: `${url.href}?key=${storeKey}`,
          raw_url: `${url.href}?key=${storeKey}&raw`,
          delete_url: `${url.href}?key=${storeKey}&del=${deleteKey}`,
          expires_at: expiryTime
        };

        // Content negotiation based on Accept header with user-agent fallback
        const acceptHeader = requestHeadersAndFriends["accept"] || "";

        // Check for CLI tools as fallback when Accept header is generic
        const isCLITool = isCliRequest(requestHeadersAndFriends);

        if (acceptHeader.includes("application/json")) {
          // JSON response for API clients
          return buildResponse(JSON.stringify(responseData, null, 2), "application/json", {}, 200, url);
        } else if (acceptHeader.includes("text/plain") && !acceptHeader.includes("text/html")) {
          // Plain text response explicitly requested
          const textResp = `${responseData.message}

share link: ${responseData.share_url}
raw link: ${responseData.raw_url}
delete link: ${responseData.delete_url}
expires at: ${responseData.expires_at}`;
          return buildResponse(textResp, DEFAULT_MIME_TEXT, {}, 200, url);
        } else if (isCLITool && !acceptHeader.includes("text/html")) {
          // Fallback: CLI tools get plain text when Accept header is generic (*/* or missing)
          const textResp = `${responseData.message}

share link: ${responseData.share_url}
raw link: ${responseData.raw_url}
delete link: ${responseData.delete_url}
expires at: ${responseData.expires_at}`;
          return buildResponse(textResp, DEFAULT_MIME_TEXT, {}, 200, url);
        } else {
          // HTML response for browsers (with markdown parsing)
          const htmlResp = marked(`${responseData.message}

**Share link:** ${responseData.share_url}
**Raw link:** ${responseData.raw_url}
**Delete link:** ${responseData.delete_url}
**Expires at:** ${responseData.expires_at}`);
          return buildResponse(htmlResp, DEFAULT_MIME_HTML, {}, 200, url);
        }
      } else if (request.method === "GET" || request.method === "HEAD") {
        // the runtime strips the body from HEAD responses, so HEAD can share the GET path
        const key = url.searchParams.get("key");
        const raw = url.searchParams.has("raw");
        const customContentType = url.searchParams.get("content_type");
        const customTitle = url.searchParams.get("title");

        // if no key parameter provided, return the upload prompt so user can upload
        if (!url.searchParams.has("key")) {
          const upload = `AUTOINSERT_UPLOAD__HTML`; // eslint-disable-line
          return buildResponse(upload, DEFAULT_MIME_HTML, {}, 200, url);
        }
        // deleting requires a POST (so link-preview crawlers can't trigger it) - GET shows a confirmation
        if (url.searchParams.has("del")) {
          return buildDeleteConfirmation(url, requestHeadersAndFriends);
        }
        // edge cache: serve repeat views from this PoP without touching KV.
        // silently inert on *.workers.dev (the Cache API needs a custom-domain zone);
        // staleness after delete is bounded by CACHE_CONTENT's max-age and the purge in deletePost
        const edgeCache = caches.default;
        if (request.method === "GET") {
          const cachedResponse = await edgeCache.match(request);
          if (cachedResponse) {
            return cachedResponse;
          }
        }
        // ULID is len26
        if (key.length === 26 || key.length === 91) {
          const {
            value: contentFromKeyAsArrayBuffer,
            metadata
          } =
          await NAMESPACE.getWithMetadata(key, "arrayBuffer");
          if (contentFromKeyAsArrayBuffer === null) {
            return buildResponse(
              "Sorry, invalid key!",
              DEFAULT_MIME_TEXT, {},
              404,
              url,
            );
          }
          const [generatedBodyHtml, type] = generateHtmlBasedOnType(
            contentFromKeyAsArrayBuffer,
            url,
            metadata,
            customTitle
          );
          if (raw) {
            // Check if custom content type is provided and validate it
            let responseContentType = type;
            if (customContentType) {
              if (isValidContentType(customContentType)) {
                responseContentType = customContentType;
              } else {
                return buildResponse(
                  "Sorry, invalid content_type parameter!",
                  DEFAULT_MIME_TEXT, {},
                  400,
                  url,
                );
              }
            }

            // if requested as raw, return the original resp object with detected or custom MIME type
            return cacheAndReturn(fetch_event, edgeCache, buildResponse(
              contentFromKeyAsArrayBuffer,
              responseContentType,
              CACHE_CONTENT,
              200,
              url,
            ));
          }
          // otherwise, return the wrapped body with the text/html mimetype
          else {
            return cacheAndReturn(fetch_event, edgeCache, buildResponse(
              generatedBodyHtml,
              DEFAULT_MIME_HTML,
              CACHE_CONTENT,
              200,
              url,
            ));
          }
        } else {
          return buildResponse(
            "Sorry, invalid key!",
            DEFAULT_MIME_TEXT, {},
            404,
            url,
          );
        }
      } else {
        // other methods (PUT/DELETE/...) used to fall through to an undefined response
        return buildResponse(
          "Method not allowed - use GET or POST.",
          DEFAULT_MIME_TEXT, {
            Allow: "GET, HEAD, POST, OPTIONS"
          },
          405,
          url,
        );
      }
    } else if (url.pathname === "/x" || url.pathname.startsWith("/x/")) {
      // named pastes: operator-published content at /x/<name>. KV keys are
      // "_X_" + name - "_" is not in the Crockford base32 ULID alphabet, so
      // named keys can never collide with generated content keys.
      const name = url.pathname.slice(3);
      if (!/^[A-Za-z0-9][A-Za-z0-9._-]{0,63}$/.test(name)) {
        return buildResponse(
          "Sorry, invalid key!",
          DEFAULT_MIME_TEXT, {},
          404,
          url,
        );
      }
      const namedKey = "_X_" + name;

      if (request.method === "POST" || request.method === "DELETE") {
        // writes and deletes are gated on the operator secret (NAMED_KEY binding);
        // reads stay public - the capability is the encryption, not the name
        if (typeof NAMED_KEY === "undefined" || !NAMED_KEY) {
          return buildResponse(
            "Sorry, named pastes are not enabled on this instance!",
            DEFAULT_MIME_TEXT, {},
            403,
            url,
          );
        }
        if (requestHeadersAndFriends["authorization"] !== NAMED_KEY) {
          return buildResponse(
            "Sorry, invalid authorization!",
            DEFAULT_MIME_TEXT, {},
            401,
            url,
          );
        }
      }

      if (request.method === "POST") {
        const blob = await request.arrayBuffer();
        requestBodyForDebug = blob.slice(0, 20);

        // same advertised limit as /post (10MB plus encryption container slack)
        if (blob.byteLength > 10 * 1024 * 1024 + 4096) {
          return buildResponse(
            "Sorry, content exceeds the 10MB limit!",
            DEFAULT_MIME_TEXT, {},
            413,
            url,
          );
        }

        // refuse silent clobbering - overwriting needs an explicit header
        const existing = await NAMESPACE.getWithMetadata(namedKey, "text");
        const overwrite = existing.value !== null;
        if (overwrite && requestHeadersAndFriends["x-i-really-mean-it"] !== "yes") {
          return buildResponse(
            `Sorry, /x/${name} already exists - send 'X-I-Really-Mean-It: yes' to overwrite it.`,
            DEFAULT_MIME_TEXT, {},
            409,
            url,
          );
        }

        // named pastes default to permanent (the operator secret is the gate);
        // a numeric X-TTL opts into expiry instead, clamped like /post
        const xTtlRaw = requestHeadersAndFriends["x-ttl"];
        let permanent = true;
        let xTtlSeconds = 0;
        if (xTtlRaw !== undefined) {
          xTtlSeconds = parseInt(xTtlRaw, 10);
          if (isNaN(xTtlSeconds) || xTtlSeconds <= 0) {
            permanent = true; // garbage TTL -> the permanent default
          } else {
            permanent = false;
            if (xTtlSeconds < 60) {
              xTtlSeconds = 60; // KV rejects expirationTtl below 60 seconds
            }
          }
        }
        const expiryTime = permanent ?
          "never" :
          new Date(xTtlSeconds * 1000 + now).toISOString();

        // no edit/del metadata keys - the operator secret is the only mutation path
        const putOptions = {
          metadata: {}
        };
        if (permanent) {
          putOptions.metadata.permanent = true;
        } else {
          putOptions.expirationTtl = xTtlSeconds;
          putOptions.metadata.expiry = expiryTime;
        }
        await NAMESPACE.put(namedKey, blob, putOptions);

        // overwrites must be visible promptly on this PoP, like deletes
        await purgeNamedPasteCache(url, name);

        const responseData = {
          message: `GetPost stored ${blob.byteLength} bytes at /x/${name}${overwrite ? " (overwrote existing content)" : ""}!`,
          size: blob.byteLength,
          name: name,
          share_url: `${url.origin}/x/${name}`,
          raw_url: `${url.origin}/x/${name}?raw`,
          expires_at: expiryTime
        };

        const acceptHeader = requestHeadersAndFriends["accept"] || "";
        const isCLITool = isCliRequest(requestHeadersAndFriends);
        if (acceptHeader.includes("application/json")) {
          return buildResponse(JSON.stringify(responseData, null, 2), "application/json", {}, 200, url);
        } else if (
          (acceptHeader.includes("text/plain") && !acceptHeader.includes("text/html")) ||
          (isCLITool && !acceptHeader.includes("text/html"))
        ) {
          const textResp = `${responseData.message}

share link: ${responseData.share_url}
raw link: ${responseData.raw_url}
expires at: ${responseData.expires_at}`;
          return buildResponse(textResp, DEFAULT_MIME_TEXT, {}, 200, url);
        } else {
          const htmlResp = marked(`${responseData.message}

**Share link:** ${responseData.share_url}
**Raw link:** ${responseData.raw_url}
**Expires at:** ${responseData.expires_at}`);
          return buildResponse(htmlResp, DEFAULT_MIME_HTML, {}, 200, url);
        }
      } else if (request.method === "DELETE") {
        const existing = await NAMESPACE.getWithMetadata(namedKey, "text");
        if (existing.value === null) {
          return buildResponse(
            "Sorry, invalid key!",
            DEFAULT_MIME_TEXT, {},
            404,
            url,
          );
        }
        await NAMESPACE.delete(namedKey);
        await purgeNamedPasteCache(url, name);
        return buildResponse(
          `OK, sent command to delete /x/${name} - please wait 3min for full delete.`,
          DEFAULT_MIME_TEXT, {},
          200,
          url,
        );
      } else if (request.method === "GET" || request.method === "HEAD") {
        const raw = url.searchParams.has("raw");
        const customContentType = url.searchParams.get("content_type");
        const customTitle = url.searchParams.get("title");

        // same edge-cache behavior as the /post GET path
        const edgeCache = caches.default;
        if (request.method === "GET") {
          const cachedResponse = await edgeCache.match(request);
          if (cachedResponse) {
            return cachedResponse;
          }
        }
        const {
          value: contentFromKeyAsArrayBuffer,
          metadata
        } =
        await NAMESPACE.getWithMetadata(namedKey, "arrayBuffer");
        if (contentFromKeyAsArrayBuffer === null) {
          return buildResponse(
            "Sorry, invalid key!",
            DEFAULT_MIME_TEXT, {},
            404,
            url,
          );
        }
        const [generatedBodyHtml, type] = generateHtmlBasedOnType(
          contentFromKeyAsArrayBuffer,
          url,
          metadata,
          customTitle
        );
        if (raw) {
          let responseContentType = type;
          if (customContentType) {
            if (isValidContentType(customContentType)) {
              responseContentType = customContentType;
            } else {
              return buildResponse(
                "Sorry, invalid content_type parameter!",
                DEFAULT_MIME_TEXT, {},
                400,
                url,
              );
            }
          }
          return cacheAndReturn(fetch_event, edgeCache, buildResponse(
            contentFromKeyAsArrayBuffer,
            responseContentType,
            CACHE_CONTENT,
            200,
            url,
          ));
        } else {
          return cacheAndReturn(fetch_event, edgeCache, buildResponse(
            generatedBodyHtml,
            DEFAULT_MIME_HTML,
            CACHE_CONTENT,
            200,
            url,
          ));
        }
      } else {
        return buildResponse(
          "Method not allowed - use GET, POST or DELETE.",
          DEFAULT_MIME_TEXT, {
            Allow: "GET, HEAD, POST, DELETE, OPTIONS"
          },
          405,
          url,
        );
      }
    } else if (url.pathname === "/headers") {
      // helpful debug endpoint - return the headersAndFriends object, as a nicely formatted string
      requestHeadersAndFriends.url = url.toString();
      requestHeadersAndFriends.method = request.method;
      // first 20 bytes (hex-encoded) of the request
      if (request.body) {
        requestBodyForDebug = await request.arrayBuffer();
      }
      if (requestBodyForDebug && requestBodyForDebug.byteLength > 0) {
        requestHeadersAndFriends.startBodyHex = hex(
          requestBodyForDebug.slice(0, 20),
        );
      } else {
        requestHeadersAndFriends.startBodyHex = "";
      }
      return buildResponse(
        JSON.stringify(requestHeadersAndFriends, null, 2) + "\n",
        "application/json", {},
        200,
        url,
      );
    } else if (url.pathname === "/echo") {
      // helpful debug endpoint - return the request body
      return buildResponse(
        await request.arrayBuffer(),
        "application/octet-stream", {},
        200,
        url,
      );
    } else if (url.pathname === "/raise_exception") {
      // trigger an exception
      this_method_does_not_exist();
    } else if (url.pathname === "/naclfast.min.js") {
      // return NaCl crypto library (base64 decoded)
      return buildResponse(str2ab(atob(naclfast_base64)), "application/javascript", CACHE_STATIC, 200, url);
    } else if (url.pathname === "/argon2bundled.min.js") {
      // return Argon2 key derivation library (base64 decoded)
      return buildResponse(str2ab(atob(argon2bundled_base64)), "application/javascript", CACHE_STATIC, 200, url);
    } else if (url.pathname === "/qrcode.min.js") {
      // return QR code generation library (base64 decoded)
      return buildResponse(str2ab(atob(qrcode_base64)), "application/javascript", CACHE_STATIC, 200, url);
    } else if (url.pathname === "/marked.min.js") {
      // return Marked markdown parser (base64 decoded)
      return buildResponse(str2ab(atob(marked_base64)), "application/javascript", CACHE_STATIC, 200, url);
    } else if (url.pathname === "/pastebin-crypted.py") {
      // each instance serves its own E2E encrypted CLI client
      const pastebin_crypted = `AUTOINSERT_PASTEBIN_CRYPTED__PY`; // eslint-disable-line
      return buildResponse(pastebin_crypted, "text/plain; charset=UTF-8", CACHE_STATIC, 200, url);
    } else if (url.pathname === "/about") {
      // return about/docs page
      const about_page = `AUTOINSERT_ABOUT__HTML`; // eslint-disable-line
      return buildResponse(about_page, DEFAULT_MIME_HTML, {}, 200, url);
    } else if (url.pathname === "/favicon.svg") {
      // SVG favicon for browsers that accept it (via <link rel="icon">)
      return buildResponse(favicon_svg, "image/svg+xml", CACHE_STATIC, 200, url);
    } else if (url.pathname === "/favicon.ico") {
      // real multi-size ICO for browsers and clients that won't parse SVG
      return buildResponse(str2ab(atob(favicon_ico_base64)), "image/x-icon", CACHE_STATIC, 200, url);
    } else if (url.pathname === "/icon.svg") {
      // the full envelope mark as SVG (browsers, crisp at any size)
      return buildResponse(icon_svg, "image/svg+xml", CACHE_STATIC, 200, url);
    } else if (url.pathname === "/icon.png") {
      // raster preview image - the og:image, since link-preview crawlers reject SVG
      return buildResponse(str2ab(atob(icon_png_base64)), "image/png", CACHE_STATIC, 200, url);
    } else {
      return buildResponse(
        `You probably want ${url.host}/post, not ${url.pathname}!`,
        DEFAULT_MIME_HTML, {},
        404,
        url,
      );
    }
  } catch (err) {
    // very helpful traceback functionality, such that users can report errors
    requestHeadersAndFriends.url = url.toString();
    requestHeadersAndFriends.method = request.method;
    requestHeadersAndFriends.traceback = err.stack.split("\n");
    // include the first 20 bytes, as 40 hex characters - use pre-cloned body
    if (requestBodyForDebug && requestBodyForDebug.byteLength > 0) {
      requestHeadersAndFriends.startBodyHex = hex(
        requestBodyForDebug.slice(0, 20),
      );
    } else {
      requestHeadersAndFriends.startBodyHex = "";
    }
    return buildResponse(
      JSON.stringify(requestHeadersAndFriends, null, 2),
      "application/json", {},
      500,
      url,
    );
  }
}

// Validate content type parameter
function isValidContentType(contentType) {
  // Basic validation for content type format
  // Allow common patterns like "text/html", "application/json", etc.
  const contentTypeRegex = /^[a-zA-Z][a-zA-Z0-9][a-zA-Z0-9!#$&\-\^_]*\/[a-zA-Z0-9][a-zA-Z0-9!#$&\-\^_.+]*(?:\s*;\s*[a-zA-Z0-9!#$&\-\^_]+=[a-zA-Z0-9!#$&\-\^_.+]*)*$/;

  if (!contentTypeRegex.test(contentType)) {
    return false;
  }

  // Additional length check for security
  if (contentType.length > 200) {
    return false;
  }

  return true;
}

// store a content response in the PoP-local cache and return it (the Cache API only accepts GET)
function cacheAndReturn(fetch_event, edgeCache, response) {
  if (fetch_event.request.method === "GET") {
    fetch_event.waitUntil(edgeCache.put(fetch_event.request, response.clone()));
  }
  return response;
}

// detect CLI tools (curl/wget/etc) for content negotiation when Accept is generic
function isCliRequest(requestHeadersAndFriends) {
  const userAgent = requestHeadersAndFriends["user-agent"] || "";
  return userAgent.startsWith("curl/") ||
    userAgent.toLowerCase().includes("wget") ||
    userAgent.toLowerCase().includes("python") ||
    userAgent.toLowerCase().includes("node") ||
    userAgent.toLowerCase().includes("go-http-client");
}

// validate a delete key against stored metadata and delete the post
async function deletePost(url) {
  const key = url.searchParams.get("key");
  const del = url.searchParams.get("del");
  if (!key || (key.length !== 26 && key.length !== 91)) {
    return buildResponse("Sorry, invalid key!", DEFAULT_MIME_TEXT, {}, 404, url);
  }
  // metadata-only read - we don't need the content bytes just to verify the delete key
  const { metadata } = await NAMESPACE.getWithMetadata(key, "text");
  if (metadata === null) {
    return buildResponse("Sorry, invalid key!", DEFAULT_MIME_TEXT, {}, 404, url);
  }
  if (del && del.length === 26 && del === metadata.del) {
    await NAMESPACE.delete(key);
    // best-effort purge of this PoP's cached copies so the deleter sees it gone
    // immediately; other PoPs age out via CACHE_CONTENT's max-age
    const edgeCache = caches.default;
    for (const path of ["/", "/post"]) {
      await edgeCache.delete(url.origin + path + "?key=" + key);
      await edgeCache.delete(url.origin + path + "?key=" + key + "&raw");
    }
    return buildResponse(
      `OK, sent command to delete ${key} - please wait 3min for full delete.`,
      DEFAULT_MIME_TEXT, {},
      200,
      url,
    );
  }
  return buildResponse("Sorry, invalid del key!", DEFAULT_MIME_TEXT, {}, 404, url);
}

// best-effort purge of this PoP's cached copies of a named paste (page + raw),
// mirroring the purge loop in deletePost; other PoPs age out via max-age
async function purgeNamedPasteCache(url, name) {
  const edgeCache = caches.default;
  await edgeCache.delete(url.origin + "/x/" + name);
  await edgeCache.delete(url.origin + "/x/" + name + "?raw");
}

// GET on a delete link returns instructions (CLI) or a confirmation page (browser) that POSTs back
function buildDeleteConfirmation(url, requestHeadersAndFriends) {
  if (isCliRequest(requestHeadersAndFriends)) {
    return buildResponse(
      `Deleting requires a POST:\n\n  curl -X POST "${url.href}"\n`,
      DEFAULT_MIME_TEXT, {},
      200,
      url,
    );
  }
  const confirmPage = `<html><head><title>GetPost - delete</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
body { background: #0d0d0d; color: #b0b0b0; font-family: 'SF Mono', 'Menlo', 'Consolas', monospace; font-size: 14px; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; }
.box { border: 1px solid #2a2a2a; border-radius: 4px; padding: 2rem; max-width: 420px; }
.box .heading { color: #888; margin-bottom: 1.25rem; }
button { width: 100%; padding: 0.5rem; background: none; color: #e53e3e; border: 1px solid #e53e3e; border-radius: 2px; font-family: inherit; font-size: 13px; cursor: pointer; }
button:hover { background: rgba(229, 62, 62, 0.1); }
#result { margin-top: 0.75rem; font-size: 12px; color: #888; line-height: 1.5; overflow-wrap: anywhere; }
</style></head><body>
<div class="box">
  <div class="heading">delete this post?</div>
  <button onclick="doDelete()">delete permanently</button>
  <div id="result"></div>
</div>
<script>
async function doDelete() {
  var r = await fetch(window.location.pathname + window.location.search, { method: "POST" });
  document.getElementById("result").textContent = await r.text();
}
</script>
</body></html>`;
  return buildResponse(confirmPage, DEFAULT_MIME_HTML, {}, 200, url);
}

// Handle CORS preflight requests
function handleCorsPreflightRequest(url) {
  // named-paste paths additionally allow DELETE (operator mutation path)
  const isNamedPaste = url.pathname === "/x" || url.pathname.startsWith("/x/");
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": isNamedPaste ? "GET, POST, DELETE, OPTIONS" : "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, X-TTL, Authorization, X-I-Really-Mean-It",
    "Access-Control-Max-Age": "86400", // 24 hours
  };

  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  });
}

// Add CORS headers if cors=1 parameter is present
function addCorsHeaders(headers, url) {
  if (url && url.searchParams.has("cors")) {
    const isNamedPaste = url.pathname === "/x" || url.pathname.startsWith("/x/");
    headers["Access-Control-Allow-Origin"] = "*";
    headers["Access-Control-Allow-Methods"] = isNamedPaste ? "GET, POST, DELETE, OPTIONS" : "GET, POST, OPTIONS";
    headers["Access-Control-Allow-Headers"] = "Content-Type, X-TTL, Authorization, X-I-Really-Mean-It";
  }
  return headers;
}

// shove time (or any integer) into "len" base32 characters
function encodeTime(now, len) {
  let mod;
  let str = "";
  for (; len > 0; len--) {
    mod = now % ENCODING_LEN;
    str = ENCODING.charAt(mod) + str;
    now = (now - mod) / ENCODING_LEN;
  }
  return str;
}

// get "len" random base32 characters from the worker's (cryptographically secure) RNG
function encodeRandom(len) {
  const bytes = new Uint8Array(len);
  crypto.getRandomValues(bytes);
  let str = "";
  for (let i = 0; i < len; i++) {
    // 256 % 32 === 0, so the modulo is unbiased
    str += ENCODING.charAt(bytes[i] % ENCODING_LEN);
  }
  return str;
}

// return a ULID from an optional time, comprised of TIME_LEN characters of timestamp and RANDOM_LEN characters of entropy
function ulid(seedTime) {
  // if no seedTime is provided, use the current time
  if (isNaN(seedTime)) {
    seedTime = Date.now();
  }
  return encodeTime(seedTime, TIME_LEN) + encodeRandom(RANDOM_LEN);
}

// helper to turn a string into an array buffer
function str2ab(str) {
  const buf = new ArrayBuffer(str.length);
  const bufView = new Uint8Array(buf);
  for (let i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i) & 0xff;
  }
  return buf;
}

// Uint8Array -> hex string
function hex(uint8arr_or_arraybuffer) {
  const uint8arr = new Uint8Array(uint8arr_or_arraybuffer);
  if (!uint8arr) {
    return "";
  }
  let hexStr = "";
  for (let i = 0; i < uint8arr.length; i++) {
    let hex = (uint8arr[i] & 0xff).toString(16);
    hex = hex.length === 1 ? "0" + hex : hex;
    hexStr += hex;
  }
  return hexStr;
}

// Sanitize HTML to prevent XSS attacks
function sanitizeHtml(str) {
  if (!str) return str;
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

// wrap verbatim text in a fenced code block, escaping backtick runs that would
// close the fence early and tagging an optional language for highlight class hooks
function toCodeFence(text, lang) {
  let longest = 0;
  const runs = text.match(/`+/g);
  if (runs) {
    for (const run of runs) longest = Math.max(longest, run.length);
  }
  const fence = "`".repeat(Math.max(3, longest + 1));
  const tag = lang ? String(lang).replace(/[^a-zA-Z0-9+#-]/g, "").slice(0, 20) : "";
  return fence + tag + "\n" + text + "\n" + fence;
}

// detect SVG: XML text whose root element is <svg, allowing a leading <?xml/comment/BOM
function looksLikeSvg(str) {
  const head = str.slice(0, 1000).replace(/^﻿/, "").trimStart();
  if (head.startsWith("<svg")) return true;
  if (head.startsWith("<?xml") || head.startsWith("<!--")) {
    return /<svg[\s>]/i.test(head);
  }
  return false;
}

// detect a shortlink: the entire content (trimmed) is one line, at most 2048
// characters, and parses as a single http/https URL - the viewer page shows a
// cancellable countdown before redirecting (no server-side redirect)
function looksLikeUrl(str) {
  const trimmed = str.trim();
  if (trimmed.length === 0 || trimmed.length > 2048) return false;
  if (trimmed.includes("\n") || trimmed.includes("\r")) return false;
  if (!trimmed.startsWith("http://") && !trimmed.startsWith("https://")) return false;
  try {
    const parsed = new URL(trimmed);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch (e) {
    return false;
  }
}

// content (and optional url) to wrapper html and detected type
function generateHtmlBasedOnType(content, url = "", metadata = null, customTitle = null) {
  let expiryTime = "Unknown";
  if (metadata) {
    if (metadata.permanent) {
      expiryTime = "Never (permanent)";
    } else if (metadata.expiry) {
      expiryTime = metadata.expiry.split('T')[0];
    }
  }
  if (content === null || content === undefined) {
    return ["CONTENT NOT FOUND", DEFAULT_MIME_TEXT];
  }
  const contentAsUint8Array = new Uint8Array(content);

  // encrypted container: 0x00 "GPE1" + salt + nonce + ciphertext
  const isEncrypted = hex(contentAsUint8Array.slice(0, 5)) === "0047504531";

  // strict utf-8 decode: invalid byte sequences mean binary. a lenient decode
  // would turn binary into replacement chars and mistake it for text.
  let contentAsString = "";
  let contentIsPrintable = true;
  try {
    contentAsString = new TextDecoder("utf-8", { fatal: true }).decode(contentAsUint8Array);
  } catch (e) {
    contentAsString = new TextDecoder("utf-8").decode(contentAsUint8Array);
    contentIsPrintable = false;
  }
  // valid utf-8 with no stray control bytes is text; code points above 127
  // (accents, smart quotes, emoji) are normal text and must NOT count as binary
  if (contentIsPrintable) {
    for (let i = 0; i < Math.min(contentAsString.length, 1000); i++) {
      const code = contentAsString.charCodeAt(i);
      if (code < 32 && code !== 9 && code !== 10 && code !== 13) {
        contentIsPrintable = false;
        break;
      }
    }
  }
  const header = hex(contentAsUint8Array.slice(0, 4));
  let injectorScript, type;

  // Handle encrypted content specially - don't auto-redirect
  if (isEncrypted) {
    type = "application/x-encrypted";
    injectorScript = "";
  } else if (header.slice(0, 6) === "ffd8ff") {
    // all JPEGs start ff d8 ff; the fourth byte varies (e0-ee JFIF/EXIF/etc,
    // db for quantization-table-first files) so match only the first three
    type = "image/jpeg";
  } else if (header.slice(0, 6) === "494433") {
    // "ID3" - any ID3v2 tag version (v2.2/v2.3/v2.4); the fourth byte is the
    // version and v2.3 (03) is far more common than v2.4 (04)
    type = "audio/mp3";
  } else {
  // matches the first four bytes of the uploaded file
  switch (header) {
    // echo -n 'ftypmp42' | xxd
    // 00000000: 6674 7970 6d70 3432                      ftypmp42
    case "00000018":
    case "0000001c":
      if (hex(contentAsUint8Array.slice(4, 12)) === "667479706d703432") {
        type = "video/mp4";
      } else {
        type = "application/octet-stream";
      }
      break;
    case "25504446":
      type = "application/pdf";
      break;
    case "89504e47":
      type = "image/png";
      break;
    case "47494638":
      type = "image/gif";
      break;
    case "504b0304":
      type = "application/zip";
      break;
    case "1a45dfa3":
      // EBML container - WebM (video) or Matroska (.mkv); both are video/webm-ish to browsers
      type = "video/webm";
      break;
    case "4f676753":
      // OggS - could be audio or video; audio/ogg covers the common case
      type = "audio/ogg";
      break;
    case "664c6143":
      // fLaC
      type = "audio/flac";
      break;
    case "52494646":
      // RIFF container - WebP if bytes 8-12 are "WEBP", otherwise WAV if "WAVE"
      if (hex(contentAsUint8Array.slice(8, 12)) === "57454250") {
        type = "image/webp";
      } else if (hex(contentAsUint8Array.slice(8, 12)) === "57415645") {
        type = "audio/wav";
      } else {
        type = "application/octet-stream";
      }
      break;
    default:
      if (contentIsPrintable === true) {
        // SVG is XML text; sniff a leading <svg or <?xml ... <svg before treating as markdown
        if (looksLikeSvg(contentAsString)) {
          type = "image/svg+xml";
        } else if (looksLikeUrl(contentAsString)) {
          // a bare single-line URL becomes a shortlink with a countdown viewer
          type = "text/x-url";
        } else {
          type = DEFAULT_MIME_TEXT;
        }
      } else {
        type = "application/octet-stream";
      }
      break;
  }
  } // end encrypted check

  switch (type) {
    case "application/x-encrypted":
      // Encrypted content - let the HTML wrapper handle decryption
      injectorScript = "";
      break;
    case "image/png":
    case "image/gif":
    case "image/jpeg":
    case "image/webp":
    case "image/svg+xml":
      // browsers render these natively - send them to raw like pdf/video;
      // crawlers don't run the JS redirect so og:image previews still work
    case "audio/mp3":
    case "audio/ogg":
    case "audio/flac":
    case "audio/wav":
    case "video/mp4":
    case "video/webm":
    case "application/pdf":
    case "application/zip":
    case "application/octet-stream":
      // append the raw flag correctly for both /post?key=... (has a query
      // string already) and /x/<name> (bare path) viewer pages
      injectorScript = "window.location.assign(window.location.href.split('#')[0]+(window.location.search?'&raw':'?raw'))";
      break;
    case "text/x-url":
      // NO server-side redirect - the viewer page fetches the raw URL, validates
      // it, and shows a cancellable countdown before navigating
      injectorScript = "";
      break;
    case DEFAULT_MIME_TEXT:
    default:
      injectorScript = "";
      break;
  }
  // Sanitize customTitle to prevent XSS, and limit length
  const sanitizedTitle = customTitle ? sanitizeHtml(customTitle).substring(0, 100) : null;
  const TITLE = sanitizedTitle || `GetPost: ${type}`;
  let contentAsHtmlFromMarked = "";
  let imageUrl = "";
  let description = "";
  // link-preview image: the uploaded image itself when there is one, else the
  // site icon. PNG, not SVG - link-preview crawlers (Signal, etc.) won't render SVG.
  const iconUrl = url ? `${url.protocol}//${url.host}/icon.png` : "/icon.png";
  // future use
  const encodedPayload = "";
  // strip non-url characters from description
  if (type === DEFAULT_MIME_TEXT) {
    const text = new TextDecoder("utf-8").decode(content);
    // markdown by default; an explicit ?content_type of code/* or text other than
    // markdown, or a ?lang= hint, renders verbatim in a fenced code block instead
    const ct = (url && url.searchParams.get("content_type") || "").toLowerCase();
    const lang = url && url.searchParams.get("lang");
    const forceCode = !!lang ||
      (ct && ct.indexOf("text/markdown") === -1 &&
        (ct.indexOf("text/plain") === -1) && ct.indexOf("text/") === 0) ||
      ct.indexOf("application/") === 0;
    if (forceCode) {
      contentAsHtmlFromMarked = marked(toCodeFence(text, lang));
    } else {
      contentAsHtmlFromMarked = marked(text);
    }
    // use the first 140 characters that aren't special, as the description!
    description = new TextDecoder("utf-8")
      .decode(new Uint8Array(content.slice(0, 140)))
      .replace(/[^0-9a-z\\\ \.\:\?]/gi, "");
  } else if (type === "text/x-url") {
    // don't render the URL as page content - the viewer JS owns the display
    description = "GetPost: redirect";
  } else {
    description = "GetPost: " + type;
  }
  if (type.startsWith("image/")) {
    // feeds og:image (via previewImage) only - browsers redirect to raw before
    // paint, and crawlers read the meta tag without running the redirect.
    // /post?key=... pages already have a query string; /x/<name> pages do not
    imageUrl = url.toString() + (url.search ? "&raw" : "?raw");
  }
  // og:image uses the uploaded image when present, else the site icon
  const previewImage = imageUrl || iconUrl;
  const contentAsWrappedHtml = `AUTOINSERT_GETPOST__HTML`; // eslint-disable-line
  return [contentAsWrappedHtml, type];
}

function buildResponse(
  blob,
  type = DEFAULT_MIME_HTML,
  headers = {},
  statuscode = 200,
  url = null
) {
  // copy rather than mutate, so shared header constants stay clean across requests
  const headersObj = Object.assign({}, headers, {
    "content-type": type
  });

  // Add CORS headers if cors parameter is present
  if (url) {
    addCorsHeaders(headersObj, url);
  }

  // statusText is left default - the human-readable reason already lives in the body,
  // and only a restricted charset is legal on the HTTP status line
  return new Response(blob, {
    status: statuscode,
    headers: headersObj
  });
}