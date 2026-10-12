# AGENTS.md

GetPost is a single-file Cloudflare Worker pastebin and file host with optional
client-side end-to-end encryption. This file follows the [agents.md](https://agents.md/)
convention: the context a coding agent (or a new contributor) needs to work in this
repository. The HTTP API a running instance exposes is a separate document,
`getpost-api.md`, served by every instance at `/api`. Every instance also serves this file
followed by the API reference at `/llms.txt` (`/agents.md` redirects there).

## Project overview

- `worker.js` is the entire server: routing, KV storage, MIME sniffing by magic bytes,
  the viewer-page builder, edge caching. It is heavily commented; read it top to bottom.
- `deps/` holds everything embedded into the worker at build time: the HTML pages
  (`upload.html`, `getpost.html`, `about.html`), vendored JS libraries as `.base64`,
  icons, and the markdown docs. Some entries are symlinks to repo-root files (this file,
  the API reference, the CLI client) so the served copy cannot drift from the source.
- `pastebin-crypted.py` is the encrypted CLI client. Each instance serves it verbatim at
  `/pastebin-crypted.py`, and its MIME sniffer mirrors the one in `worker.js`: change both.
- `worker.packed.js` is the build output and is committed. Rebuild and commit it with
  every change to `worker.js` or anything in `deps/`.
- Encryption is client-side only (NaCl secretbox + Argon2id, the GPE1 container). The
  server stores opaque bytes and recognises the container magic to show the decrypt UI.
  The passphrase lives in the URL fragment and never reaches the server.

## Dev environment and build

- Needs `python3`, `node`, `curl`, `jq`. There is no `npm install`, no bundler, no
  Wrangler; do not add a toolchain.
- `python3 autoinsert.py` splices `deps/` into `worker.js` at the `AUTOINSERT_*` markers
  and writes `worker.packed.js`. `node test_local.js` runs this build first, so running
  the tests also refreshes the packed worker.
- Deploy configs are dotfiles named `.<deployment>` and are sourced by `deploy.sh` and
  `test.sh`. `.staging` is committed on purpose (shared public staging credentials).
  Private configs holding real secrets are named `.deploy.<name>` (run as
  `./deploy.sh deploy.<name>`), which `.gitignore` excludes. Never commit one; prefer
  `git add <files>` over `git add -A`.

## Testing instructions

- `node test_local.js`: offline unit suite. Loads the packed worker into a sandbox with a
  mock KV namespace and mock edge cache and exercises helpers and the full request
  handler. Every behaviour change gets a test here. Tests are
  `await test("name", async () => { ... })` blocks using `node:assert`; put a new test
  next to the tests for the feature it touches.
- `./test.sh staging`: end-to-end suite against a live deployment, using `curl` and
  `jq`. Encryption round-trip tests skip without PyNaCl. Run it after deploying to
  staging, before opening a PR.
- The template-literal integrity tests matter: embedded HTML is spliced into a JS
  backtick string, so a stray backslash escape in `deps/*.html` breaks the page script.
  `autoinsert.py` fails the build on any escape other than `` \` `` and `\$`.

## Code style

- Plain modern JavaScript, no transpiling: 2-space indent, double quotes, semicolons,
  `const`/`let`. Comments explain why, not what; keep the existing comment density.
- Python is stdlib only, plus PyNaCl in the CLI client.
- Anything user-controlled that lands in HTML goes through `sanitizeHtml()`. Query
  parameters that alter a response are presence-checked with `searchParams.has()` or
  validated (`content_type` must pass `isValidContentType()`).
- `${...}` inside `deps/*.html` is interpolated server-side by the page builder;
  `.md` and `.py` deps are escaped automatically and served verbatim.
- Responses go through `buildResponse()`; human-readable error text goes in the body,
  never in the status line.

## Security considerations

- The server must never see plaintext or passphrases. Do not log request bodies; the
  `500` handler only echoes the first 20 body bytes as hex.
- Deletion is `POST`-only so link-preview crawlers cannot delete content by fetching a
  delete URL. Keep it that way.
- Uploads are capped at 10 MB plus a small slack for the encryption container.
- Operator secrets (`PERMANENT_KEY`, `NAMED_KEY`) are worker bindings set at deploy time
  and are compared, never echoed. Named-paste writes require `Authorization` and
  overwrites require `X-I-Really-Mean-It: yes`.
- Raw bytes and viewer pages (markdown passes inline HTML and scripts through) are
  attacker-controlled and share this origin with the upload page, which keeps the
  operator key in `sessionStorage`. `buildRawResponse` and `buildViewerResponse` sandbox
  them with CSP (opaque origin); every raw or viewer path must go through them, and the
  upload page must never be sandboxed.
- MIME types are sniffed from stored bytes on every read, so a sniffer fix takes effect
  for existing content on the next deploy without re-uploading.

## Deployment

- `./deploy.sh <deployment>` builds, creates the KV namespace if needed, and uploads the
  worker through the Cloudflare API. Verify with `./test.sh <deployment>`.
- Content responses carry `max-age=300`; edge caching is only active on custom domains,
  not `*.workers.dev`. KV deletes propagate globally within about three minutes.

## Docs to keep in sync

- `README.md` (features, retrieve examples), `deps/about.html` (parameter list), and
  `getpost-api.md` (the full reference) all describe the API. A new query parameter,
  route, or sniffed type is documented in all three.
- `RELEASE_NOTES.md` gets a line per release; versions follow SemVer.

## Commit and PR instructions

- Subject: lowercase, imperative, no trailing period, under about 72 characters, for
  example `sniff any ISO base media file as mp4, not just 0x18/0x1c ftypmp42`.
- Body: what was wrong or missing, what changed, and the user-visible effect. Reference
  the behaviour, not the diff.
- One logical change per commit, with `worker.packed.js` rebuilt in the same commit as
  the source change that affects it. Generated assets (`deps/icon.png` and its base64)
  are committed together with the source they are rendered from.
- Before a PR: `node test_local.js` and `./test.sh staging` both green.
