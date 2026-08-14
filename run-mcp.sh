#!/usr/bin/env bash
# ==============================================================================
# BCA 1st Semester MCP Launcher (Panjab University 2026-27 NEP Framework)
# Author: Baljot Chohan
# ==============================================================================

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
SERVER_PATH="$DIR/mcp-server/index.js"

if [ "$1" == "--http" ] || [ "$1" == "http" ]; then
  PORT=${2:-8080}
  echo "🚀 Launching BCA 1st Sem MCP Server in HTTP Mode on port $PORT..."
  node "$SERVER_PATH" --http --port="$PORT"
else
  echo "⚡ Launching BCA 1st Sem MCP Server in Stdio Mode (Ready for AI Client)..."
  node "$SERVER_PATH"
fi
