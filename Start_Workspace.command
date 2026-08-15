#!/bin/bash
cd "$(dirname "$0")"

echo "=========================================="
echo "🚀 Starting BCA-I Command Deck & MCP Server"
echo "=========================================="

# Kill any existing instances to prevent port conflicts
lsof -ti:3000 | xargs kill -9 2>/dev/null
lsof -ti:8080 | xargs kill -9 2>/dev/null

# Start the Web Server
echo "🌐 Starting Web UI on http://localhost:3000"
python3 -m http.server 3000 &

# Start the MCP Server
echo "🤖 Starting MCP Server on http://localhost:8080"
node mcp-server/index.js --http --port=8080 &

echo ""
echo "✅ Local MCP Server is running at http://localhost:8080/mcp/sse"
echo "Press CTRL+C to stop everything."

# Keep terminal open
wait
