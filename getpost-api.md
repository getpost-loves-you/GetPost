# GetPost API

GetPost is a Cloudflare Worker pastebin/file-host with optional client-side end-to-end
encryption. There is no authentication for public posting, no accounts, and no tracking.
Content is stored in Cloudflare KV with a TTL; encryption (when used) happens entirely in
the browser or CLI client — **the server never sees plaintext or passphrases**.

This document describes the HTTP API as implemented in `worker.js`. It is written for
programmatic consumers (scripts, agents, other services).

- **Base URL:** any deployed instance, e.g. `https://infra.moe` (production) or
  `https://staging.getpost.workers.dev` (staging). Substitute `$BASE` below.
- **Transport:** HTTPS only. The worker forces `url.protocol = "https:"` internally.
- **No SDK required:** everything is plain HTTP with `curl`-friendly bodies.

---

## Concepts

### Keys and IDs

- **Content key (`key`)** — a 26-character [ULID](https://github.com/ulid/spec)
  (Crockford base32, alphabet `0123456789ABCDEFGHJKMNPQRSTVWXYZ`, time-sortable).
  Returned on upload; used to read/delete a post. A 91-char key is also accepted by the
  read/delete paths (legacy/extended form) but normal uploads always mint 26-char keys.
- **Delete key (`del`)** — a separate 26-char ULID minted per upload. Required to delete.
  Not derivable from the content key.
- **Edit key** — minted and stored in metadata but **not currently exposed** by any route.

### Content typing

On read, the worker sniffs the stored bytes by magic number and serves an appropriate
MIME type. Recognized: ISO base media (any `ftyp` brand: mp4/m4v → `video/mp4`, `qt` →
`video/quicktime`, `M4A` → `audio/mp4`, HEIF brands → `image/heic`), PDF, PNG, GIF, MP3,
ZIP, WebM/Matroska, Ogg, FLAC, WAV, WebP, JPEG, SVG. Encrypted containers (see below) are typed `application/x-encrypted`. Anything
that decodes as printable UTF-8 and isn't an SVG/URL is treated as `text/raw` (rendered as
markdown in the browser viewer). A bare single-line `http(s)://` URL is typed `text/x-url`
and becomes a client-side "shortlink" with a cancellable redirect countdown. Unrecognized
binary is `application/octet-stream`.

### Encryption (GPE1 container)

Encryption is **client-side and optional**. The server stores and serves opaque bytes; it
only recognizes the container to pick the `application/x-encrypted` type and serve the
decrypt UI. The container format is:

```
0x00 "GPE1"   (5 bytes magic)
salt          (16 bytes, Argon2id)
nonce         (24 bytes, NaCl secretbox / XSalsa20-Poly1305)
ciphertext    (remainder)
```

- KDF: Argon2id, `time=4`, `mem=65536` KiB (64 MB), `hashLen=32`, `parallelism=1`.
- Cipher: NaCl `secretbox` (XSalsa20-Poly1305).
- The passphrase travels only in the URL **fragment** (`#...`), which browsers never send
  to the server. Fragment layout used by the viewer:
  `#;;;<passphrase>;;;<mime-type>;;;<filename>[;;;<player options>]`.
  An optional field after the filename takes the same player options as the query
  string, in query syntax (`loop&t=30`), and applies them to decrypted audio/video — so
  they stay client-side along with the passphrase.

CLI uploads via `POST /post` are stored **as sent** — i.e. unencrypted unless you encrypt
first. Use the bundled `pastebin-crypted.py` client (served at `/pastebin-crypted.py`) to
produce GPE1 containers and share links from the command line.

### Content negotiation

Several endpoints vary their response body by the request's `Accept` header, with a
User-Agent fallback for CLI tools (`curl/`, `wget`, `python`, `node`, `go-http-client`):

| Condition | Response body |
|---|---|
| `Accept: application/json` | JSON object |
| `Accept: text/plain` (and not `text/html`) | plain-text summary |
| CLI User-Agent, generic `Accept` | plain-text summary |
| otherwise (browsers) | rendered HTML |

### Size limit

Upload bodies are capped at **10 MB + 4096 bytes** of slack (the slack covers GPE1
container overhead). Over the limit → `413`.

### TTL / expiry

- Default expiry: **1 year**.
- `X-TTL: <seconds>` sets a custom expiry. Values are clamped to a minimum of **60 s**
  (Cloudflare KV rejects shorter TTLs). Non-numeric or `<= 0` values fall back to the
  1-year default.
- Passing the operator's `PERMANENT_KEY` secret as the `X-TTL` value stores the post with
  **no expiry**. This is gated to the operator so the public can't fill KV with permanent
  content.

### Caching

GET responses for content are cached at the edge (Cloudflare Cache API, `caches.default`)
with `Cache-Control: public, max-age=300`. Static assets use `max-age=86400`. Deletes and
named-paste overwrites best-effort purge the current PoP's cache; other PoPs age out via
`max-age`. The Cache API is inert on `*.workers.dev` (it needs a custom-domain zone), so
edge caching only takes effect on custom domains.

### CORS

- Preflight `OPTIONS` on any path returns `204` with
  `Access-Control-Allow-Origin: *`, allowed methods (`GET, POST, OPTIONS`; named-paste
  paths also allow `DELETE`), allowed headers `Content-Type, X-TTL, Authorization,
  X-I-Really-Mean-It`, and `Access-Control-Max-Age: 86400`.
- For non-preflight responses, CORS headers are added **only when `?cors=1`** (any
  `cors` query param) is present on the request URL.

### Error conventions

Errors return a plain-text body with a human message and an appropriate status code
(`400`, `401`, `403`, `404`, `405`, `409`, `413`). The message text is in the body, not the
HTTP status line. Unhandled exceptions return `500` with a JSON object containing the
request headers, method, URL, a `traceback` array, and `startBodyHex` (first 20 bytes of
the request body, hex-encoded) — useful for bug reports.

---

## Endpoints

### `POST /post` (or `POST /`) — upload

Stores the raw request body and returns share/raw/delete URLs.

**Request**
- Body: raw bytes (`--data-binary`). Any content type.
- Headers (optional):
  - `X-TTL: <seconds>` — custom expiry (see TTL rules). Or the operator `PERMANENT_KEY`
    for a permanent post.
  - `Accept` — controls response format (see content negotiation).
- Query params (optional):
  - `cors=1` — add CORS headers to the response.

**Response** `200` — fields (JSON form):

| field | description |
|---|---|
| `message` | human summary, e.g. `GetPost stored 1234 bytes!` |
| `size` | byte count stored |
| `key` | content key (ULID) |
| `share_url` | `"$BASE/post?key=<key>"` — viewer page |
| `raw_url` | `"$BASE/post?key=<key>&raw"` — original bytes |
| `delete_url` | `"$BASE/post?key=<key>&del=<deleteKey>"` |
| `expires_at` | ISO-8601 timestamp, or `"never"` for permanent |

**Errors**: `413` if body exceeds the size limit.

**Examples**
```sh
# JSON response (recommended for programmatic use)
curl -s -H "Accept: application/json" --data-binary @file.txt "$BASE/post"

# plain-text response (default for curl)
curl --data-binary @file.txt "$BASE/post"

# from stdin, 1-hour expiry
echo "hello" | curl -H "X-TTL: 3600" --data-binary @- "$BASE/post"
```

> Note: this stores bytes verbatim (unencrypted). For E2E encryption from the CLI, use
> `pastebin-crypted.py` (below).

---

### `GET /post?key=<key>` (or `GET /?key=<key>`) — read / view

- Without `key`: returns the **upload HTML page** (`200`).
- With `key`, no `raw`: returns the **HTML viewer** wrapping the content (markdown render
  for text, decrypt UI for GPE1, redirect countdown for `text/x-url`, an inline
  `<video>`/`<audio>` player for media with player options (below), and a JS
  auto-redirect to `&raw` for images, audio, video and other
  binary — crawlers don't run it, so `og:image`/meta previews still work).
- With `key` and `raw`: returns the **original bytes** with the sniffed MIME type.
  Single byte ranges (`Range: bytes=a-b`, `a-`, `-n`) get `206` (`416` when out of
  bounds), so media can be scrubbed and seeked. Raw responses carry
  `Content-Security-Policy: sandbox allow-scripts allow-popups allow-forms` (PDFs
  excepted, since browsers won't render them sandboxed): uploaded HTML/SVG opened raw runs
  in an opaque origin and can't read this origin's storage.
- The HTML viewer page is sandboxed the same way (plus `allow-popups-to-escape-sandbox
  allow-modals allow-downloads`). Inline HTML and `<script>` in markdown still run, just
  without access to this origin; the viewer fetches its own raw bytes with `cors=1`.
  Decrypted PDFs are offered as a download rather than shown inline, since browsers
  won't render PDFs in a sandboxed page.

`HEAD` is served via the same path (body stripped by the runtime) — useful for link-preview
crawlers.

**Query params**
- `raw` (presence) — return original bytes instead of the HTML viewer.
- Player options, for audio and video — any of them plays the media inline (with
  controls) instead of redirecting to `&raw`; ignored for other content. Flags are
  presence-only (`loop`, `loop=1`); `0`/`false`/`no`/`off` turns one off, and all-off is
  the same as none.
  - `loop` — repeat. On video, `loop` alone is gif-style: it also autoplays muted
    (browsers only allow muted autoplay) unless `autoplay`/`muted` are given explicitly.
  - `autoplay` — start playing. A video the browser refuses to autoplay with sound
    retries muted.
  - `muted` — start muted.
  - `t=<time>` — start position: `90`, `12.5`, `1:30`, `1:02:03` or `1h2m3s`.
  - For encrypted media the same options go in the fragment, after the filename (see above).
- `content_type=<mime>` — override the response `Content-Type` for `raw` reads. Validated;
  invalid value → `400`.
- `title=<text>` — custom `<title>`/`og:title` for the viewer page (HTML-sanitized, max
  100 chars).
- `lang=<hint>` — render text content as a fenced code block in the given language instead
  of markdown.
- `cors=1` — add CORS headers.

**Responses**
- `200` — upload page, HTML viewer, or raw bytes.
- `404` — `key` missing from KV, or malformed (not 26/91 chars).
- `400` — invalid `content_type`.

**Examples**
```sh
curl -s "$BASE/post?key=01ARZ...&raw"                  # original bytes
curl -s "$BASE/post?key=01ARZ...&raw&content_type=text/html"
open "$BASE/post?key=01ARZ...&loop"                    # video, gif-style loop
open "$BASE/post?key=01ARZ...&t=1m30s&autoplay"        # start 90s in
open "$BASE/post?key=01ARZ...#;;;pass;;;video%2Fmp4;;;v.mp4;;;loop%26t%3D5"  # encrypted
curl -sI "$BASE/post?key=01ARZ..."                     # HEAD
```

---

### `POST /post?key=<key>&del=<deleteKey>` — delete

Deletion is a **POST** (not GET/DELETE) so that link-preview crawlers fetching a delete URL
can't destroy content. The matching `GET` shows a confirmation page (browser) or curl
instructions (CLI) instead of deleting.

**Response**
- `200` — `OK, sent command to delete <key> - please wait 3min for full delete.`
  (KV deletes propagate globally in up to ~3 minutes; the current PoP's cache is purged
  immediately.)
- `404` — invalid `key` or wrong `del` key.

**Example**
```sh
curl -X POST "$BASE/post?key=01ARZ...&del=01BWX..."
```

---

### `/x/<name>` — named pastes (operator-gated writes, public reads)

Operator-published content at a stable, human-readable path. Read access is public; writes
and deletes require the operator secret. Available only if the instance sets the `NAMED_KEY`
binding (otherwise writes return `403`).

- **Name pattern:** `^[A-Za-z0-9][A-Za-z0-9._-]{0,63}$`. Invalid names → `404`.
- KV key is internally `"_X_" + name`; `_` is not in the ULID alphabet, so named keys can
  never collide with generated content keys.
- Named pastes default to **permanent**. A numeric `X-TTL` opts into expiry (clamped to
  ≥60 s like `/post`).

#### `GET /x/<name>` (and `HEAD`)
Public read. Same `raw`, player options, `content_type`, `title`, `lang`, `cors` params
as `GET /post`.
- `200` — HTML viewer, or raw bytes with `?raw`.
- `404` — name not found or invalid.

```sh
curl -s "$BASE/x/welcome?raw"
```

#### `POST /x/<name>` — create/overwrite (operator only)
- **Auth:** `Authorization: <NAMED_KEY>` header. Missing/wrong → `401`. Feature disabled
  → `403`.
- Overwriting existing content requires `X-I-Really-Mean-It: yes` — otherwise `409`.
- Body: raw bytes, same 10 MB limit (`413` over).
- `X-TTL: <seconds>` opts into expiry; omit for permanent.
- Response negotiated like `/post` (`message`, `size`, `name`, `share_url`, `raw_url`,
  `expires_at`). No delete key is issued — the operator secret is the only mutation path.

```sh
curl -X POST -H "Authorization: $NAMED_KEY" -H "X-I-Really-Mean-It: yes" \
     --data-binary @page.md "$BASE/x/welcome"
```

#### `DELETE /x/<name>` — delete (operator only)
- **Auth:** `Authorization: <NAMED_KEY>`. Missing/wrong → `401`. Disabled → `403`.
- `200` — delete command accepted (≤3 min propagation). `404` if name doesn't exist.

```sh
curl -X DELETE -H "Authorization: $NAMED_KEY" "$BASE/x/welcome"
```

---

### Static assets and client

| Path | Returns | Content-Type | Cache |
|---|---|---|---|
| `GET /about` | about/docs HTML page | `text/html` | — |
| `GET /api`, `/api.md` | this document, verbatim markdown | `text/markdown` | 24 h |
| `GET /llms.txt` | the repo's `AGENTS.md` ([agents.md](https://agents.md/) guide) followed by this document | `text/markdown` | 24 h |
| `GET /agents.md` | `301` redirect to `/llms.txt` | — | — |
| `GET /pastebin-crypted.py` | the E2E-encrypted CLI client (self-hosted, byte-identical per instance) | `text/plain` | 24 h |
| `GET /naclfast.min.js` | NaCl crypto library | `application/javascript` | 24 h |
| `GET /argon2bundled.min.js` | Argon2 KDF library | `application/javascript` | 24 h |
| `GET /qrcode.min.js` | QR code library | `application/javascript` | 24 h |
| `GET /marked.min.js` | Marked markdown parser | `application/javascript` | 24 h |
| `GET /favicon.svg` | favicon (SVG) | `image/svg+xml` | 24 h |
| `GET /favicon.ico` | favicon (multi-size ICO) | `image/x-icon` | 24 h |
| `GET /icon.svg` | preview/envelope mark (SVG) | `image/svg+xml` | 24 h |
| `GET /icon.png` | preview image / `og:image` (512px) | `image/png` | 24 h |

**Encrypted CLI usage** (fetch the client from any instance):
```sh
curl -sO "$BASE/pastebin-crypted.py"
echo "secret" | PASTEBIN="$BASE" python3 pastebin-crypted.py        # encrypt stdin
PASTEBIN="$BASE" python3 pastebin-crypted.py myfile.txt             # encrypt a file
PASTEBIN_PASSWORD="hunter2" PASTEBIN="$BASE" python3 pastebin-crypted.py f.txt  # fixed pass
```
Requires `python3` and [PyNaCl](https://pynacl.readthedocs.io/). Prints a share link with
the passphrase in the URL fragment.

---

### Debug endpoints

| Path | Method | Returns |
|---|---|---|
| `GET /headers` | any | JSON: request headers + Cloudflare `cf-*` metadata, `url`, `method`, and `startBodyHex` (first 20 body bytes, hex) |
| `/echo` | any | echoes the request body back as `application/octet-stream` |
| `/raise_exception` | any | deliberately throws → exercises the `500` traceback path |

```sh
curl -s "$BASE/headers"
curl -s --data-binary @file "$BASE/echo" -o roundtrip.bin
```

---

## Status code reference

| Code | Meaning in GetPost |
|---|---|
| `200` | success (upload, read, delete-accepted, static asset) |
| `204` | CORS preflight (`OPTIONS`) |
| `400` | invalid `content_type` parameter |
| `401` | named-paste write/delete with missing/wrong `Authorization` |
| `403` | named pastes not enabled on this instance |
| `404` | unknown key/name, malformed key, or unknown path |
| `405` | method not allowed (response includes an `Allow` header) |
| `409` | named-paste overwrite without `X-I-Really-Mean-It: yes` |
| `413` | body exceeds the 10 MB (+slack) limit |
| `500` | unhandled exception (JSON body with traceback for bug reports) |

## Header reference

| Header | Direction | Purpose |
|---|---|---|
| `X-TTL` | request | expiry in seconds (or operator `PERMANENT_KEY` for permanent) |
| `Authorization` | request | operator secret for `/x/` writes and deletes (`NAMED_KEY`) |
| `X-I-Really-Mean-It` | request | `yes` to permit overwriting an existing named paste |
| `Accept` | request | selects JSON / plain-text / HTML response form |
| `Allow` | response | listed on `405` responses |
| `Cache-Control` | response | `max-age=300` for content, `max-age=86400` for static assets |
| `Access-Control-*` | response | present on `OPTIONS`, and on `?cors=1` requests |

## Operator-only configuration (worker bindings)

These are Worker environment bindings, not request parameters — listed for completeness:

- `NAMESPACE` — the KV namespace storing all content (required).
- `PERMANENT_KEY` — secret that, when passed as `X-TTL`, stores a post with no expiry.
- `NAMED_KEY` — secret enabling and authorizing `/x/<name>` writes and deletes. Absent →
  named pastes are read-only/disabled.
