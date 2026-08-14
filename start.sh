#!/usr/bin/env bash
# ==============================================================================
# Master Local Launcher: BCA 1st Sem Academic Hub & MCP Server
# Author: Baljot Chohan
# ==============================================================================

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd "$DIR"

echo "=================================================================="
echo "⚡ Starting BCA 1st Semester Academic Portal & MCP Suite"
echo "=================================================================="

# 1. Kill any existing instances on port 3000 or 8080
lsof -ti :3000 | xargs kill -9 2>/dev/null || true
lsof -ti :8080 | xargs kill -9 2>/dev/null || true
pkill -f "cloudflared tunnel.*8080" 2>/dev/null || true

# 2. Start Web Portal on Port 3000
python3 -m http.server 3000 > /dev/null 2>&1 &
WEB_PID=$!
echo "✅ Academic Web Portal running at: http://localhost:3000"

# 3. Start MCP Server on Port 8080
node mcp-server/index.js --http --port=8080 > /dev/null 2>&1 &
MCP_PID=$!
echo "✅ MCP Server running at       : http://localhost:8080/mcp"

# 4. Start Cloudflare Tunnel for ChatGPT
if command -v cloudflared &> /dev/null; then
  cloudflared tunnel --url http://localhost:8080 > "$DIR/mcp-server/tunnel.log" 2>&1 &
  TUNNEL_PID=$!
  sleep 3
  TUNNEL_URL=$(grep -o 'https://[a-zA-Z0-9.-]*\.trycloudflare\.com' "$DIR/mcp-server/tunnel.log" | head -n 1)
  if [ -n "$TUNNEL_URL" ]; then
    echo "🔒 Cloudflare Tunnel for ChatGPT: $TUNNEL_URL/mcp"
  fi
fi

echo "=================================================================="
echo "🎯 System Ready! All changes from AI/MCP write live to syllabus-data.js"
echo "   Press Ctrl+C to stop all services."
echo "=================================================================="

trap "kill $WEB_PID $MCP_PID $TUNNEL_PID 2>/dev/null; exit 0" SIGINT SIGTERM
wait
