# GetPost v1.2

**Libre linking for poems and memes**
🚀 **Run your own instance for free on any domain**🚀

GetPost is a simple, secure [imagebin](https://en.wikipedia.org/wiki/Image_hosting_service) and [pastebin](https://www.urbandictionary.com/define.php?term=Pastebin) built on Cloudflare Workers.
Share text, images, and files up to 10MB with no accounts, no tracking, and global distribution.


```bash
# Try it now
curl --data-binary @myfile.txt https://public.getpost.workers.dev

# Deploy your own in minutes
git clone https://github.com/getpost-loves-you/getpost
cp .staging .mydomain
<add API keys>
./deploy.sh mydomain
```

## Why GetPost?

**For Users:**
- 📝 **Instant sharing** - Text, markdown, images, most other filetypes
- 🔗 **Clean URLs** - Short, shareable links with delete keys
- ⚡ **Fast worldwide** - Sub-100ms response times via Cloudflare edge
- 🛡️ **Privacy-focused** - No tracking, no ads, no accounts required

**For Self-Hosters:**
- 💰 **Free forever** - Cloudflare's generous free tier (100k reads, 1k uploads daily)
- 🔧 **Zero maintenance** - No servers, no updates, no downtime
- 🌍 **Global by default** - Your content is distributed worldwide automatically
- 🎨 **Hackable** - Minimal, suckless codebase that is easy to customize

## Quick Start

### Web Upload
Visit your GetPost instance and drag & drop files. Markdown is rendered automatically via [marked](https://github.com/markedjs/marked).

### Command Line
```bash
# Basic upload
curl --data-binary @file.txt https://your-domain.com

# From clipboard (macOS)
pbpaste | curl --data-binary @- https://your-domain.com

# Custom expiration
curl -H "X-TTL: 3600" --data-binary @file.txt https://your-domain.com
```

### One-Liner Script
Save as `/usr/local/bin/pastebin`:
```bash
#!/bin/bash
curl --data-binary @${1:--} https://your-domain.com
```

Usage: `pastebin file.txt` or `echo "hello" | pastebin`

## Deploy Your Own

GetPost runs on **Cloudflare Workers** - zero servers, global distribution, generous free tier (100k reads, 1k uploads daily).

```bash
git clone https://github.com/getpost-loves-you/getpost
cd getpost
# Follow SETUP.md for detailed instructions
./deploy.sh mydomain
```

**Why Self-Host?**
- 💰 **Free forever** - No hosting costs on Cloudflare's free tier
- 🌍 **Your domain** - Custom branding and control
- 🔧 **Zero maintenance** - No servers, no updates, no downtime
- 🛡️ **Privacy** - Your data stays in your KV namespace

📄 **[Full Setup Guide →](SETUP.md)**

## Features

- **📝 Text & Markdown** - Server-side rendering with clean typography
- **🖼️ Images** - PNG, JPEG, GIF with instant preview
- **📄 Documents** - PDFs, videos, any file type up to 10MB
- **🔗 Raw Access** - Append `&raw` for direct file download
- **⏰ Configurable TTL** - Default 1 year, customizable via X-TTL header
- **🗑️ Delete Keys** - Every upload gets a unique deletion URL
- **🌐 CORS Support** - Add `?cors=1` for cross-origin requests
- **🔍 Debug Tools** - `/headers`, `/echo` endpoints for troubleshooting

## Architecture

**Built on Cloudflare Workers** - a globally distributed edge computing platform.

```
User → Cloudflare Edge → Worker → KV Storage
```

- **Workers:** JavaScript runtime at 200+ locations worldwide
- **KV Storage:** Eventually-consistent key-value store, AES-256 encrypted
- **ULIDs:** Lexicographically sortable identifiers for posts and delete keys
- **Zero dependencies:** Self-contained, no external services
- **Crypto Libraries:** [TweetNaCl.js](https://github.com/dchest/tweetnacl-js) for encryption, [argon2-browser](https://github.com/antelle/argon2-browser) for key derivation

### Why Cloudflare Workers?

From Cloudflare's documentation:

> Workers KV supports exceptionally high read volumes with low-latency, making it possible to build highly dynamic APIs and websites which respond as quickly as a cached static file would.

Perfect for a pastebin! Popular content gets cached globally, while the free tier offers:
- 100,000 reads per day
- 1,000 writes per day
- Sub-100ms cold start times
- 128MB memory per request

## Security Model

GetPost prioritizes **simplicity over complexity** in its security approach:

**What's Protected:**
- 🔐 **End-to-end encryption** - Web uploads are encrypted in-browser (NaCl SecretBox + Argon2id); the server never sees plaintext or passphrases
- 🔐 **Access control** - 80 bits of entropy in ULIDs (stronger than most passwords)
- 🔒 **Data at rest** - AES-256 encryption by Cloudflare
- 🌐 **Data in transit** - TLS encryption for all requests
- 🚫 **No tracking** - No cookies, analytics, or third-party scripts

**What's Not Protected:**
- CLI uploads (`curl`) are stored unencrypted unless you encrypt first (use `pastebin-crypted.py`)
- Encrypted content is theoretically accessible to Cloudflare employees, [with some difficulty](https://developers.cloudflare.com/kv/reference/data-security/) - but only as ciphertext
- Share links embed the passphrase in the URL fragment: anyone with the link can decrypt
- Your computer.

**Privacy Philosophy:**
We choose transparent simplicity over false security promises. For most use cases, ULID-based access control and Cloudflare's infrastructure security are sufficient.

## Development

### Hacking

It's free and easy to get started with your own GetPost instance, either on a domain you already own, or a free "*.workers.dev" subdomain.

Because I love you, I have included a set of credentials allowing anyone to deploy to "https://staging.getpost.workers.dev" - as well as a set of end-to-end tests, and lots of source code comments. Also spared interested parties from painful toolchain misadventures!

GetPost doesn't require the use of Cloudflare's Wrangler tool, the Node Package Manager, or a Rust buildchain. It does require `curl`, `python3`, and a Linux-like environment (termux or WSL should work).

### Build Process

To keep the main worker.js file manageable, a simple well-documented Python script - `autoinsert.py` - loads files from the `deps` folder into `worker.js` to make `worker.packed.js`.

The `deploy.sh` script calls autoinsert.py to assemble the packed worker, loads credentials from a file in the local directory, and uploads the `worker.packed.js` file to Cloudflare.

You can get started by cloning this repository, making a small edit to `worker.js` or one of the resources in `deps` - and running `./deploy.sh staging`.

This loads the credentials from the `.staging` file, assembles your changes, and uploads the file.

Your script will then start running on "https://staging.getpost.workers.dev" - and you can verify it works as expected by running `./test.sh staging`

This loads other values from the `.staging` file, makes a series of requests to the staging URL, and prints "ALL TESTS PASSED" if the responses to the inputs are all as expected.

Be excellent to one another, and follow the instructions in SETUP.md to create your own account with your own credentials, if you intend to do any real work - after all, other folks may also avail themselves of the staging deploy API key!

### Project Structure
```
getpost/
├── worker.js            # Main Cloudflare Worker code
├── autoinsert.py        # Build script (embeds deps/ into worker)
├── deploy.sh            # Deployment automation
├── test.sh              # End-to-end testing
├── pastebin-crypted.py  # E2E encrypted CLI uploader
├── SETUP.md             # Detailed deployment guide
├── deps/                # Static assets (embedded at build time)
│   ├── upload.html      # Upload page (encrypts in-browser)
│   ├── getpost.html     # Content viewer (decrypts in-browser)
│   ├── about.html       # About page
│   ├── marked.min.js    # Markdown parser
│   └── *.base64         # NaCl, Argon2, QR code libraries
└── .staging             # Shared staging credentials + test hashes
```

### Testing
```bash
# Test against staging (using shared credentials)
./test.sh staging

# Test your own deployment
./test.sh mydomain
```

The suite uploads small probes against the live deployment and asserts behavior end to end: content negotiation, raw round trips, MIME detection, the encrypted round trip, the delete flow, error/limit handling, CORS, and asset caching. It needs `curl`, `jq`, and `python3`; the encryption tests skip gracefully without PyNaCl.

### Customization Ideas
- **Custom CSS themes** - Edit `deps/getpost.css`
- **File type support** - Extend `generateHtmlBasedOnType()`
- **Rate limiting** - Add IP-based restrictions
- **Analytics** - Track usage stats (respect privacy!)
- **Content filtering** - Add moderation hooks

## API Reference

### Upload
```bash
POST /post
Content-Type: application/octet-stream
X-TTL: 3600  # Optional: expiry in seconds (min 60, default 1 year)

# Max 10MB; response includes share link and delete key
```

### Retrieve
```bash
GET /post?key=ULID          # Rendered HTML view
GET /post?key=ULID&raw      # Original file
GET /post?key=ULID&cors=1   # With CORS headers
```

### Delete
```bash
POST /post?key=ULID&del=DELETE_KEY

# e.g.
curl -X POST "https://your-domain.com/post?key=ULID&del=DELETE_KEY"
```
GET on a delete link returns a confirmation page instead of deleting, so link-preview crawlers can't destroy content.

### Debug
```bash
GET /headers    # Request headers and metadata
GET /echo       # Echo request body
```

## Community

**Philosophy:** CC0. No Rights Reserved. Fork it, hack it, improve it, deploy it everywhere.

- 📄 [Source Code](https://github.com/getpost-loves-you/getpost)
- 🚀 [Setup Guide](SETUP.md)
- 🐛 [Report Issues](https://github.com/getpost-loves-you/getpost/issues)

### Contributing
1. Test changes with `./test.sh staging`
2. Update `RELEASE_NOTES.md` and `README.md`
3. Follow [SemVer](https://semver.org/) for version numbers
4. Submit PRs with clear descriptions

### Inspiration
GetPost revives the spirit of personal file servers from the pre-GitHub era, when sharing a file meant SCPing it to your homepage. We've made that experience:
- Globally distributed (via Cloudflare's edge network)
- Zero maintenance (no servers to patch)
- Free forever (generous cloud free tiers)
- Instantly deployable (minutes, not hours)

## Advanced Topics

### ULID Format
Posts use [ULIDs](https://github.com/ulid/spec) instead of UUIDs:
- **Lexicographically sortable** (chronological ordering)
- **26 characters** vs UUID's 36 (shorter URLs)
- **Crockford base32** (avoids visual ambiguity: 0/O, 1/I/L)

### Content Type Detection
GetPost examines file headers to determine MIME types:
- **Magic bytes** for binary formats (PNG, PDF, etc.)
- **UTF-8 validation** for text content
- **Markdown rendering** for text files
- **Raw passthrough** for unknown types

### Performance Characteristics
- **Cold start:** ~50ms (Cloudflare Workers)
- **Warm requests:** ~10ms globally
- **KV read latency:** ~10ms from cache, ~100ms from origin
- **Global propagation:** ~60 seconds for KV writes

---

*"Because I love you, I included credentials for anyone to deploy to staging.getpost.workers.dev. Be excellent to one another!"*
