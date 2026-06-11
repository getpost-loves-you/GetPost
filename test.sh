#!/bin/bash
# Usage: ./test.sh deployment_name
# Example: ./test.sh staging
#
# Assertion-based end-to-end suite run against a live deployment.
# Needs: curl, jq, python3 (PyNaCl optional - encryption tests skip without it).

if [ $# -eq 0 ]; then
    echo "Usage: $0 <deployment_name>"
    echo "Example: $0 staging"
    exit 1
fi

source ."$1"
BASE="$DEPLOY_URL"

PASS=0
FAIL=0
SKIP=0

pass() { PASS=$((PASS+1)); echo "  PASS  $1"; }
fail() { FAIL=$((FAIL+1)); echo "  FAIL  $1"; [ -n "${2:-}" ] && echo "        $2"; }
skip() { SKIP=$((SKIP+1)); echo "  SKIP  $1"; }

# assert_eq <label> <got> <want>
assert_eq() {
    if [ "$2" = "$3" ]; then pass "$1"; else fail "$1" "got: '$2'  want: '$3'"; fi
}

# assert_contains <label> <haystack> <needle>
assert_contains() {
    case "$2" in
        *"$3"*) pass "$1" ;;
        *) fail "$1" "expected to find: $3" ;;
    esac
}

# assert_not_contains <label> <haystack> <needle>
assert_not_contains() {
    case "$2" in
        *"$3"*) fail "$1" "found forbidden: $3" ;;
        *) pass "$1" ;;
    esac
}

http_code() { curl -s -o /dev/null -w "%{http_code}" "$@"; }
content_type() { curl -s -o /dev/null -w "%{content_type}" "$@"; }
lower_headers() { curl -s -D - -o /dev/null "$@" | tr '[:upper:]' '[:lower:]'; }

echo "Running tests against: $BASE"

echo "[upload + content negotiation]"
json=$(echo -n "hello json" | curl -s -H "Accept: application/json" --data-binary @- "$BASE/post")
share_url=$(echo "$json" | jq -r .share_url)
raw_url=$(echo "$json" | jq -r .raw_url)
assert_contains "json response has share_url" "$share_url" "key="
assert_contains "json response has delete_url" "$(echo "$json" | jq -r .delete_url)" "del="
assert_eq "json reports upload size" "$(echo "$json" | jq -r .size)" "10"
assert_contains "json reports expiry" "$(echo "$json" | jq -r .expires_at)" "T"

text=$(echo -n "hello text" | curl -s --data-binary @- "$BASE/post")
assert_contains "cli upload gets plain text links" "$text" "share link:"

echo "[content round trip]"
assert_eq "raw bytes round trip" "$(curl -s "$raw_url")" "hello json"

echo "[rendering]"
md_json=$(printf '# heading test\n\nbody text' | curl -s -H "Accept: application/json" --data-binary @- "$BASE/post")
md_page=$(curl -s "$(echo "$md_json" | jq -r .share_url)")
assert_contains "markdown rendered to h1" "$md_page" "<h1"
assert_contains "text page typed as text" "$md_page" 'var payloadType = "text/raw'
assert_contains "page shows expiry" "$md_page" "expires"

xss_page=$(curl -s "${share_url}&title=<script>alert(1)</script>")
assert_not_contains "custom title sanitized" "$xss_page" "<script>alert(1)</script>"

echo "[mime detection]"
png_json=$(printf '\x89\x50\x4e\x47\x0d\x0a\x1a\x0afakepng' | curl -s -H "Accept: application/json" --data-binary @- "$BASE/post")
assert_eq "png magic detected" "$(content_type "$(echo "$png_json" | jq -r .raw_url)")" "image/png"

mp4_json=$(printf '\x00\x00\x00\x18ftypmp42fakevideo' | curl -s -H "Accept: application/json" --data-binary @- "$BASE/post")
assert_eq "mp42 magic detected, not mistaken for encrypted" "$(content_type "$(echo "$mp4_json" | jq -r .raw_url)")" "video/mp4"
mp4_page=$(curl -s "$(echo "$mp4_json" | jq -r .share_url)")
assert_contains "mp4 page redirects to raw" "$mp4_page" "window.location.assign"

echo "[encryption]"
if python3 -c "import nacl" 2>/dev/null; then
    enc_share_url=$(echo -n "round trip test" | PASTEBIN="$BASE" PASTEBIN_PASSWORD="test-passphrase" ./pastebin-crypted.py 2>/dev/null | tail -n1)
    enc_page_url=$(echo "$enc_share_url" | sed 's/#.*//')
    enc_page=$(curl -s "$enc_page_url")
    assert_contains "server flags encrypted payload" "$enc_page" 'var payloadType = "application/x-encrypted"'
    decrypted=$(curl -s "${enc_page_url}&raw" | python3 -c '
import sys
import nacl.secret, nacl.pwhash
data = sys.stdin.buffer.read()
header = 5 if data[:5] == b"\x00GPE1" else 1
salt = data[header:header+16]
nonce = data[header+16:header+40]
ct = data[header+40:]
key = nacl.pwhash.argon2id.kdf(32, b"test-passphrase", salt, opslimit=4, memlimit=67108864)
sys.stdout.write(nacl.secret.SecretBox(key).decrypt(ct, nonce).decode())
' 2>/dev/null)
    assert_eq "encrypted round trip decrypts" "$decrypted" "round trip test"
else
    skip "encryption tests (PyNaCl not installed)"
fi

echo "[delete flow]"
del_json=$(echo -n "delete me" | curl -s -H "Accept: application/json" --data-binary @- "$BASE/post")
del_share=$(echo "$del_json" | jq -r .share_url)
del_url=$(echo "$del_json" | jq -r .delete_url)
assert_contains "GET delete link shows confirmation" "$(curl -s "$del_url")" "POST"
assert_eq "content survives GET on delete link" "$(http_code "$del_share")" "200"
assert_eq "wrong delete key rejected" "$(http_code -X POST "${del_share}&del=00000000000000000000000000")" "404"
assert_contains "POST delete accepted" "$(curl -s -X POST "$del_url")" "OK, sent command to delete"
gone="no"
for _ in $(seq 1 18); do
    if [ "$(http_code "$del_share")" = "404" ]; then gone="yes"; break; fi
    sleep 5
done
assert_eq "deleted content returns 404" "$gone" "yes"

echo "[errors and limits]"
assert_eq "unknown key 404" "$(http_code "$BASE/post?key=AAAAAAAAAAAAAAAAAAAAAAAAAA")" "404"
assert_eq "malformed key 404" "$(http_code "$BASE/post?key=tooshort")" "404"
assert_eq "PUT method 405" "$(http_code -X PUT --data "x" "$BASE/post")" "405"
assert_eq "HEAD share link 200" "$(http_code -I "$share_url")" "200"
assert_eq "sub-minimum ttl clamped, accepted" "$(echo ttl | http_code -H "X-TTL: 30" --data-binary @- "$BASE/post")" "200"
assert_eq "garbage ttl accepted with default" "$(echo ttl | http_code -H "X-TTL: banana" --data-binary @- "$BASE/post")" "200"
if [ -n "${PERMANENT_KEY:-}" ]; then
    perm_json=$(echo -n "permalink" | curl -s -H "Accept: application/json" -H "X-TTL: $PERMANENT_KEY" --data-binary @- "$BASE/post")
    assert_eq "operator secret unlocks no-expiry" "$(echo "$perm_json" | jq -r .expires_at)" "never"
    assert_contains "permanent post viewer shows never" "$(curl -s "$(echo "$perm_json" | jq -r .share_url)")" "Never (permanent)"
else
    skip "permanent-post test (no PERMANENT_KEY in config)"
fi
assert_eq "oversize upload 413" "$(dd if=/dev/zero bs=1048576 count=11 2>/dev/null | http_code --data-binary @- "$BASE/post")" "413"
assert_eq "invalid content_type 400" "$(http_code "${raw_url}&content_type=not_a_mime")" "400"

echo "[pages and assets]"
upload_page=$(curl -s "$BASE/post")
assert_contains "upload page has drop zone" "$upload_page" 'id="dropZone"'
assert_contains "upload page has paste mode" "$upload_page" 'id="pasteToggle"'
assert_eq "about page 200" "$(http_code "$BASE/about")" "200"
if curl -s "$BASE/pastebin-crypted.py" | cmp -s - pastebin-crypted.py; then
    pass "served cli client byte-identical to repo copy"
else
    fail "served cli client byte-identical to repo copy"
fi
assert_eq "favicon 200" "$(http_code "$BASE/favicon.ico")" "200"
for lib in naclfast.min.js argon2bundled.min.js qrcode.min.js marked.min.js; do
    assert_contains "$lib cached" "$(lower_headers "$BASE/$lib")" "max-age=86400"
done
assert_contains "content cached briefly" "$(lower_headers "$raw_url")" "max-age=300"

echo "[cors and debug]"
assert_contains "preflight allows origin" "$(lower_headers -X OPTIONS "$BASE/post")" "access-control-allow-origin"
assert_contains "cors=1 adds allow-origin" "$(lower_headers "${raw_url}&cors=1")" "access-control-allow-origin"
assert_eq "/headers returns json" "$(curl -s "$BASE/headers" | jq -r .method)" "GET"
assert_eq "/echo returns body" "$(echo -n "echo test" | curl -s --data-binary @- "$BASE/echo")" "echo test"

echo ""
echo "=================================="
if [ "$FAIL" -eq 0 ]; then
    echo "ALL TESTS PASSED ($PASS passed, $SKIP skipped)"
    exit 0
else
    echo "TESTS FAILED ($FAIL failed, $PASS passed, $SKIP skipped)"
    exit 1
fi
