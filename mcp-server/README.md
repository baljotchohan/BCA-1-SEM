# BCA 1st Semester MCP Server (Panjab University 2026–27)

> **Official Model Context Protocol (MCP) Server for BCA 1st Semester Academic Deck**  
> Aligned with the Panjab University NEP-2020 Curriculum.  
> **Author:** Baljot Chohan

---

## ⚡ Quick Start

### 1. Launch in Standard I/O Mode (For Claude Desktop, Cursor, Antigravity)
From the project folder:
```bash
# Direct run
node mcp-server/index.js

# Or using the launcher
./run-mcp.sh
```

### 2. Launch in HTTP Server Mode (For ChatGPT Custom GPT, Webhooks, or REST API)
```bash
# Launch on port 8080 (or custom port)
node mcp-server/index.js --http --port=8080

# Or via launcher
./run-mcp.sh --http 8080
```
- **Live Health Status:** `http://localhost:8080/`
- **JSON-RPC Endpoint:** `http://localhost:8080/mcp`
- **OpenAPI 3.1 Spec:** `http://localhost:8080/openapi.json`
- **REST Subjects API:** `http://localhost:8080/api/subjects`
- **REST Live Search:** `http://localhost:8080/api/search?q=Bayes`

---

## 🤖 How to Connect with AI Models

### 1. Connecting to ChatGPT

#### Option A: ChatGPT Desktop App (macOS / Windows with MCP Developer Mode)
1. Open **ChatGPT Settings** → **Developer / MCP**.
2. Click **Add New MCP Server**.
3. Set the following configuration:
   - **Name:** `bca-1st-sem`
   - **Command:** `node`
   - **Arguments:** `["/Users/baljotchohan/Desktop/BCA I/BCA-1-SEM/mcp-server/index.js"]`
4. Save and restart ChatGPT. You can now prompt ChatGPT:
   > *"Show me the Unit II syllabus for C Programming from my BCA 1st sem MCP."*

#### Option B: ChatGPT Custom GPT (Web / Mobile with Actions)
1. Start your local MCP HTTP server:
   ```bash
   node mcp-server/index.js --http --port=8080
   ```
2. (Optional for local testing) Expose your local port using [ngrok](https://ngrok.com) or [Cloudflare Tunnel](https://developers.cloudflare.com/pages/how-to/tunnel/):
   ```bash
   ngrok http 8080
   ```
3. In ChatGPT: Go to **Explore GPTs** → **Create a GPT** → **Configure** → **Actions** → **Create new action**.
4. Paste the content of [`openapi.json`](file:///Users/baljotchohan/Desktop/BCA%20I/BCA-1-SEM/mcp-server/openapi.json) or import URL `https://<your-ngrok-subdomain>.ngrok-free.app/openapi.json`.
5. Save your Custom GPT!

---

### 2. Connecting to Claude Desktop
Edit your Claude configuration file at:
- **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`

Add the server:
```json
{
  "mcpServers": {
    "bca-1st-sem": {
      "command": "node",
      "args": [
        "/Users/baljotchohan/Desktop/BCA I/BCA-1-SEM/mcp-server/index.js"
      ]
    }
  }
}
```
Restart Claude Desktop. The hammer 🔨 icon will show all BCA 1st sem tools!

---

### 3. Connecting to Cursor IDE
Add to `~/.cursor/mcp.json` (or Cursor Settings → MCP):
```json
{
  "mcpServers": {
    "bca-1st-sem": {
      "command": "node",
      "args": [
        "/Users/baljotchohan/Desktop/BCA I/BCA-1-SEM/mcp-server/index.js"
      ]
    }
  }
}
```

---

## 🛠️ Included Tools

| Tool Name | Purpose |
|---|---|
| `get_subject_list` | Lists all 7 subjects with code, credit, internal/external marks |
| `get_syllabus` | Returns full Units I-IV syllabus breakdown for a subject |
| `get_unit_details` | Returns specific unit topics and high-yield takeaway points |
| `get_digital_notes` | Retrieves complete conceptual notes |
| `search_academic_deck` | Full-text instant search across notes, syllabus, questions, solutions |
| `get_question_bank` | High-probability 2-mark compulsory & 8/10-mark questions |
| `get_question_solution`| Verified step-by-step master solutions with code and math derivations |
| `get_exam_pattern` | Official PU marking scheme, question paper format, and passing criteria |
| `add_study_task` | Adds milestone to local study planner |
| `get_study_tasks` | Retrieves active study goals |
| `add_custom_study_note`| Allows AI to save revision notes directly into local storage |
| `get_hub_stats` | Summary statistics of the repository |

---

## 📚 Subject Codes Reference

- `web-tech`: **Introduction to Web Technologies** (`BCA-DSC-1(Maj)-101A`, 4 Credits)
- `c-lang`: **Problem Solving Through C** (`BCA-DSC-1(Min)-103`, 4 Credits)
- `math`: **Fundamentals of Mathematical Statistics** (`BCA-DSC-1(Maj)-102`, 4 Credits)
- `hardware`: **Introduction to Computer Hardware** (`CSA-VAC-102`, 2 Credits)
- `english`: **English-1 (Communication Skills & AEC)** (`AEC-1-101`, 2 Credits)
- `punjabi`: **ਪੰਜਾਬੀ ਲਾਜ਼ਮੀ / HCP-1** (`PUN-COMPL-1-101`, 2 Credits)
- `ecommerce`: **E-Commerce & Digital Trends** (`CSA-MDC-101`, 3 Credits)
