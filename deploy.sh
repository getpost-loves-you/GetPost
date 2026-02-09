#!/bin/bash
set -e
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
    }
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
