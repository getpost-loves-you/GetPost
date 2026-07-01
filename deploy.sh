#!/bin/bash
set -e
if [ -z "$1" ] || [ ! -f ".$1" ]; then
    echo "Usage: $0 <deployment_name>   (expects a ./.<deployment_name> config file)"
    exit 1
fi
CONFIG_FILE=.$1
source "$CONFIG_FILE"
echo "✓ Configuration loaded from $CONFIG_FILE"

# Embed resources
echo "► Running build script..."
python3 autoinsert.py
echo "✓ Worker script 'worker.packed.js' created."

# Find or Create the KV Namespace
if [ ! -z "${KV_NAMESPACE_NAME:-}" ]; then
    echo "► Checking for KV Namespace '$KV_NAMESPACE_NAME'..."
    API_URL="https://api.cloudflare.com/client/v4/accounts/$CF_ACCOUNT_ID/storage/kv/namespaces"

    NAMESPACE_ID=$(curl -s -X GET "$API_URL" -H "Authorization: Bearer $CF_API_TOKEN" | python3 -c "import sys, json; data = json.load(sys.stdin); [print(ns['id']) for ns in data.get('result', []) if ns['title'] == '$KV_NAMESPACE_NAME'];" 2>/dev/null | head -n1)

    if [ -z "$NAMESPACE_ID" ]; then
        echo "  - Namespace not found. Creating it..."
        NAMESPACE_ID=$(curl -s -X POST "$API_URL" -H "Authorization: Bearer $CF_API_TOKEN" -H "Content-Type: application/json" --data "{\"title\":\"$KV_NAMESPACE_NAME\"}" | python3 -c "import sys, json; print(json.load(sys.stdin)['result']['id'])")
        echo "✓ Namespace created with ID: $NAMESPACE_ID"
    else
        echo "✓ Namespace already exists with ID: $NAMESPACE_ID"
    fi

    # Optional operator secret that unlocks no-expiry posts (see PERMANENT_KEY in worker.js).
    # secret_text keeps the value out of the API readback below; swap to plain_text if a
    # provider rejects inline secrets.
    EXTRA_BINDINGS=""
    if [ -n "${PERMANENT_KEY:-}" ]; then
        EXTRA_BINDINGS=$(printf ',\n    { "name": "PERMANENT_KEY", "type": "secret_text", "text": "%s" }' "$PERMANENT_KEY")
        echo "  - PERMANENT_KEY binding enabled (permalinks unlocked for the operator)"
    fi

    # Optional operator secret that unlocks named pastes at /x/<name> (see NAMED_KEY in worker.js)
    if [ -n "${NAMED_KEY:-}" ]; then
        EXTRA_BINDINGS="$EXTRA_BINDINGS$(printf ',\n    { "name": "NAMED_KEY", "type": "secret_text", "text": "%s" }' "$NAMED_KEY")"
        echo "  - NAMED_KEY binding enabled (named pastes at /x/ unlocked for the operator)"
    fi

    # Upload worker with KV binding (service worker format)
    echo "► Uploading worker script '$SCRIPT_NAME' with KV binding..."
    METADATA=$(cat <<EOF
{
  "body_part": "script",
  "bindings": [
    {
      "name": "NAMESPACE",
      "type": "kv_namespace",
      "namespace_id": "$NAMESPACE_ID"
    }$EXTRA_BINDINGS
  ]
}
EOF
)

    RESPONSE=$(curl -s -X PUT "https://api.cloudflare.com/client/v4/accounts/$CF_ACCOUNT_ID/workers/scripts/$SCRIPT_NAME" \
        -H "Authorization: Bearer $CF_API_TOKEN" \
        -F "metadata=$METADATA" \
        -F "script=@worker.packed.js;type=application/javascript")

    echo "$RESPONSE" | jq '.'

    if ! echo "$RESPONSE" | jq -e '.success == true' > /dev/null; then
        echo ""
        echo "❌ Deployment failed!"
        echo "$RESPONSE" | jq -r '.errors[] | "Error \(.code): \(.message)"'
        exit 1
    fi

    # Enable workers.dev route
    echo "► Enabling workers.dev route..."
    ROUTE_RESPONSE=$(curl -s -X POST "https://api.cloudflare.com/client/v4/accounts/$CF_ACCOUNT_ID/workers/scripts/$SCRIPT_NAME/subdomain" \
        -H "Authorization: Bearer $CF_API_TOKEN" \
        -H "Content-Type: application/json" \
        --data '{"enabled":true}')

    if echo "$ROUTE_RESPONSE" | jq -e '.success == true' > /dev/null; then
        echo "✓ Workers.dev route enabled"
    else
        echo "⚠ Warning: Could not enable workers.dev route"
        echo "$ROUTE_RESPONSE" | jq -r '.errors[] | "Error \(.code): \(.message)"'
    fi
else
    # Original simple upload (for staging/testing without KV)
    # secrets ride the bindings metadata, so without KV_NAMESPACE_NAME they are silently dropped
    if [ -n "${NAMED_KEY:-}" ] || [ -n "${PERMANENT_KEY:-}" ]; then
        echo "⚠ NAMED_KEY/PERMANENT_KEY set but KV_NAMESPACE_NAME is not - secret bindings will NOT be uploaded."
        echo "  Add KV_NAMESPACE_NAME=<namespace title> to $CONFIG_FILE to enable them."
    fi
    echo "► Uploading worker script '$SCRIPT_NAME' (no bindings)..."
    RESPONSE=$(curl -s -X PUT "https://api.cloudflare.com/client/v4/accounts/$CF_ACCOUNT_ID/workers/scripts/$SCRIPT_NAME" \
        -H  "Authorization: Bearer $CF_API_TOKEN" \
        -H "Content-Type: application/javascript" \
        --data-binary @worker.packed.js)

    echo "$RESPONSE" | jq '.'

    if ! echo "$RESPONSE" | jq -e '.success == true' > /dev/null; then
        echo ""
        echo "❌ Deployment failed!"
        echo "$RESPONSE" | jq -r '.errors[] | "Error \(.code): \(.message)"'
        exit 1
    fi
fi

echo "✓ Worker script uploaded successfully."
echo -e "\n\n🚀 Deployment Complete! 🚀"
echo "Your GetPost instance is available at: $DEPLOY_URL"
