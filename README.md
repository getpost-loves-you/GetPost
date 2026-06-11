# GetPost v2.0

**End-to-end encrypted file sharing on Cloudflare Workers.**
🔐 Encrypted in your browser before it ever leaves. No accounts, no tracking, globally distributed.
🚀 Run your own instance for free, on any domain.

GetPost is a small, hackable [pastebin](https://www.urbandictionary.com/define.php?term=Pastebin) and file host. Drop a file in the browser and it's encrypted client-side — the server only ever stores opaque ciphertext, and the passphrase travels in the URL fragment, which never reaches the server. Prefer the terminal? There's a one-liner curl path and an encrypted CLI client each instance serves itself.

```bash
# Try it now (plaintext, quick)
curl --data-binary @myfile.txt https://public.getpost.workers.dev

# Deploy your own in minutes
git clone https://github.com/getpost-loves-you/getpost
cp .staging .mydomain      # add your Cloudflare API keys
./deploy.sh mydomain
```

## Why GetPost?

- 🔐 **End-to-end encrypted** — web uploads are encrypted in-browser with NaCl SecretBox + Argon2id; the server never sees your plaintext or your passphrase.
- 🔗 **One link to share** — the passphrase rides in the URL fragment, so anyone with the link can decrypt, and no one without it can.
- 🗑️ **You hold the delete key** — every upload gets a unique deletion URL.
- ⚡ **Globally distributed** — runs at Cloudflare's edge, with popular content cached close to readers.
- 🛡️ **No accounts, no tracking** — no cookies, no analytics, no third-party scripts.
- 🎨 **Hackable & free** — a minimal, suckless codebase on Cloudflare's free tier (100k reads, 1k writes daily). No Wrangler, no NPM, no Rust toolchain.

## Quick Start

### Web Upload (encrypted)
Visit your GetPost instance and drag a file onto the page — or click *paste text* to type directly. A passphrase is generated for you (edit it if you like), the file is encrypted in your browser, and you get a share link with a QR code. The passphrase is embedded in the link's fragment; the server stores only the encrypted container.

Markdown renders as rich text; source files and other text render as syntax-aware code blocks; images, audio, video, and PDFs preview inline.

### Command Line (plaintext)
```bash
# Basic upload
curl --data-binary @file.txt https://your-domain.com

# From clipboard (macOS)
pbpaste | curl --data-binary @- https://your-domain.com

# Custom expiration
curl -H "X-TTL: 3600" --data-binary @file.txt https://your-domain.com
```
CLI uploads are stored **unencrypted** unless you encrypt first — see below.

### Command Line (encrypted)
Every instance serves its own E2E-encrypted client (needs `python3` and [PyNaCl](https://pynacl.readthedocs.io/)):
```bash
curl -sO https://your-domain.com/pastebin-crypted.py
echo "secret" | PASTEBIN=https://your-domain.com python3 pastebin-crypted.py
# or encrypt a file:
PASTEBIN=https://your-domain.com python3 pastebin-crypted.py myfile.txt
```
It prints a share link with the passphrase in the fragment, decryptable by the web viewer or the client.

### One-Liner Alias
Save as `/usr/local/bin/pastebin`:
```bash
#!/bin/bash
curl --data-binary @${1:--} https://your-domain.com
```
Usage: `pastebin file.txt` or `echo "hello" | pastebin`.

## Deploy Your Own

GetPost runs entirely on **Cloudflare Workers** — no servers to run, global distribution, generous free tier.

```bash
git clone https://github.com/getpost-loves-you/getpost
cd getpost
cp .staging .mydomain      # add CF_ACCOUNT_ID, CF_API_TOKEN, etc.
./deploy.sh mydomain
./test.sh mydomain
```

The deploy needs only `curl`, `python3`, `jq`, and a Linux-like shell (macOS, Linux, WSL, Termux). No Wrangler, no NPM, no Rust. Full walkthrough in **[SETUP.md](SETUP.md)**.

**Why self-host?** Your domain, your KV namespace, your data — and it costs nothing on the free tier.

## Features

- **🔐 Client-side encryption** — NaCl SecretBox (XSalsa20-Poly1305) + Argon2id, all in-browser
- **📝 Smart rendering** — markdown as rich text, source as fenced code blocks (`?lang=` or filename hint), everything else verbatim
- **🖼️ Inline media** — PNG, JPEG, GIF, WebP, SVG, MP4, WebM, MP3, Ogg, FLAC, WAV, PDF
- **🔗 Raw access** — append `&raw` to any link for the original bytes
- **⏰ Configurable TTL** — default 1 year, set via `X-TTL` (seconds); operators can unlock no-expiry posts with a secret key
- **🗑️ Delete keys** — every upload gets a unique deletion URL (deletion requires POST, so link crawlers can't trigger it)
- **🌐 CORS** — add `?cors=1` for cross-origin reads
- **⚡ Edge caching** — content is cached at the PoP and purged on delete (custom domains)

## Security Model

GetPost favors **transparent simplicity** over false promises.

**What's protected:**
- 🔐 **End-to-end encryption** — web (and `pastebin-crypted.py`) uploads are encrypted before they leave your device; the server only stores ciphertext.
- 🔑 **The passphrase never reaches the server** — it lives in the URL fragment, which browsers don't transmit.
- 🔒 **Data at rest & in transit** — Cloudflare's AES-256 on KV, TLS on every request.
- 🚫 **No tracking** — no cookies, analytics, or third-party scripts.

**What's not:**
- **Plain `curl` uploads are stored unencrypted** — use `pastebin-crypted.py` (or encrypt the file yourself) if you want E2E from the terminal.
- **Anyone with the link can decrypt** — the passphrase is in the fragment by design, so treat share links like the secret they contain.
- **Encrypted content is opaque to Cloudflare** but still sits on their infrastructure [as ciphertext](https://developers.cloudflare.com/kv/reference/data-security/).
- **Your own machine** — GetPost can't protect what happens after you decrypt.

> **A note on rendering:** by design, an instance will serve arbitrary content — including HTML/SVG — back to the browser. That's a feature (one-command static hosting), but it means a public instance can host whatever someone uploads. Run a public instance on a domain whose reputation you're willing to share.

## How It Works

```
You → Cloudflare Edge → Worker → KV Storage
```

- **Workers** — JavaScript running at Cloudflare's edge locations worldwide.
- **KV storage** — eventually-consistent key/value store, AES-256 encrypted at rest.
- **ULIDs** — lexicographically sortable, 26-char Crockford base32 ids for posts and delete keys.
- **Self-contained** — crypto libs ([TweetNaCl.js](https://github.com/dchest/tweetnacl-js), [argon2-browser](https://github.com/antelle/argon2-browser)), the markdown parser ([marked](https://github.com/markedjs/marked)), and QR generation are all embedded at build time. No external runtime dependencies.

## Development

### Hacking

It's free and easy to spin up your own instance, on a domain you own or a `*.workers.dev` subdomain. To make that painless, shared credentials are included so anyone can deploy to `https://staging.getpost.workers.dev` and try the full flow — plus end-to-end tests and heavily commented source. (Because I love you, I spared you the toolchain misadventures.)

Make a small edit to `worker.js` or something in `deps/`, then:
```bash
./deploy.sh staging      # assemble + upload to staging.getpost.workers.dev
./test.sh staging        # verify it still behaves
```

Be excellent to one another — and set up your own credentials (see [SETUP.md](SETUP.md)) before doing anything real, since others share that staging key too.

### Build Process
There's no bundler. `autoinsert.py` reads `worker.js`, inlines the files from `deps/` (HTML pages, base64-encoded libraries) at their `AUTOINSERT_` markers, and writes `worker.packed.js`. `deploy.sh` runs that build, sources credentials from a local `.<name>` file, and uploads the packed worker to Cloudflare.

> Embedded HTML is spliced into a JS backtick template literal, so `autoinsert.py` rejects stray backslash escapes in those files at build time — they'd be silently eaten otherwise.

### Project Structure
```
getpost/
├── worker.js            # the Cloudflare Worker (all request handling)
├── autoinsert.py        # build: embeds deps/ into worker.packed.js
├── deploy.sh            # build + upload to Cloudflare
├── test.sh              # end-to-end tests against a live deployment
├── test_local.js        # offline unit tests (sandboxed worker + mock KV)
├── pastebin-crypted.py  # E2E-encrypted CLI uploader (also served by each instance)
├── SETUP.md             # full deployment guide
├── deps/                # assets embedded at build time
│   ├── upload.html      #   upload page (encrypts in-browser)
│   ├── getpost.html     #   content viewer (decrypts in-browser)
│   ├── about.html       #   about / help page
│   ├── marked.min.js    #   markdown parser
│   └── *.base64         #   NaCl, Argon2, QR-code libraries
└── .staging             # shared staging credentials
```

### Testing
```bash
node test_local.js       # offline unit tests — no deploy needed (node + python3)
./test.sh staging        # end-to-end against shared staging
./test.sh mydomain       # end-to-end against your own deployment
```
`test_local.js` loads the packed worker into a sandbox with a mock KV namespace and exercises the helpers and the full request handler — ULIDs, MIME detection, encryption flagging, TTL clamping, the delete flow, limits, edge caching, and rendered-page integrity.

`test.sh` fires real requests at a live deployment and asserts behavior end to end, including an encrypted round trip. It needs `curl`, `jq`, and `python3`; encryption tests skip gracefully without PyNaCl.

### Contributing
1. Verify with `node test_local.js` and `./test.sh staging`.
2. Update `RELEASE_NOTES.md` and `README.md`.
3. Follow [SemVer](https://semver.org/).
4. Open a PR with a clear description.

## API Reference

### Upload
```
POST /post
Content-Type: application/octet-stream
X-TTL: 3600          # optional: seconds until expiry (min 60, default 1 year)
```
Max 10MB. Response carries the share link, raw link, and delete link; send `Accept: application/json` for a JSON body.

### Retrieve
```
GET /post?key=ULID          # rendered HTML view
GET /post?key=ULID&raw      # original bytes
GET /post?key=ULID&lang=py  # render text as a code block in the given language
GET /post?key=ULID&cors=1   # add CORS headers
```

### Delete
```bash
curl -X POST "https://your-domain.com/post?key=ULID&del=DELETE_KEY"
```
A `GET` on a delete link returns a confirmation page rather than deleting, so link-preview crawlers can't destroy content.

### Debug
```
GET /headers    # request headers + metadata, as JSON
GET /echo       # echoes the request body
```

## Encryption Format (GPE1 container)

Browser uploads and `pastebin-crypted.py` produce a self-describing binary container:

```
┌───────────┬──────────┬───────────┬──────────────┐
│  5 bytes  │ 16 bytes │  24 bytes │   remainder  │
│ 00 "GPE1" │   salt   │   nonce   │  ciphertext  │
└───────────┴──────────┴───────────┴──────────────┘
```

- **Magic** — `0x00` + ASCII `GPE1`. The leading NUL flags the post as encrypted to the server (so it serves the decrypt page); `GPE1` is the version tag (room for `GPE2`).
- **Salt** — 16 random bytes, per upload.
- **Key derivation** — Argon2id: `time=4`, `mem=65536` KiB (64 MB), `parallelism=1`, 32-byte key.
- **Encryption** — NaCl `secretbox` (XSalsa20-Poly1305) with the 24-byte nonce; the Poly1305 tag is part of the ciphertext.
- **Passphrase / MIME / filename** — never sent to the server; they live only in the URL fragment (`#;;;passphrase;;;mime;;;filename`).

## License

**CC0 — No Rights Reserved.** Fork it, hack it, deploy it everywhere.

- 📄 [Source](https://github.com/getpost-loves-you/getpost) · 🚀 [Setup](SETUP.md) · 🐛 [Issues](https://github.com/getpost-loves-you/getpost/issues)

GetPost revives the spirit of personal file servers from the pre-GitHub era, when sharing a file meant SCPing it to your homepage — now globally distributed, zero-maintenance, free, and encrypted before it leaves your hands.

*Because I love you, shared staging credentials are included so anyone can try a deploy. Be excellent to one another. o7*
