# Alpha Terminal v2.0 — BCA 1st Semester Academic Portal

A clean, high-yield academic study dashboard and exam preparation suite for **Panjab University BCA 1st Semester students (2026–27 NEP-2020 Framework)**.

---

## ✨ What's New in v2.0

- 🎯 **BCA-III Style Subject Card Grid**: Clean, modern cards across all 7 first-semester curriculum subjects.
- ⚡ **3 Dedicated Subject Actions**:
  - 📝 **Notes**: Comprehensive, unit-wise conceptual study notes with syntax-highlighted code blocks and LaTeX math formulas.
  - ❓ **Question Bank**: Real, high-probability 2-mark compulsory and 8/10-mark long exam questions organized by unit.
  - 💡 **Solutions**: Verified, step-by-step master solutions, code examples, and mathematical calculations.
- 🖥️ **Preserved Terminal Boot Intro**: Signature retro terminal overlay with audio and animated typing transition.
- 🔍 **Instant Global Search (`⌘K` / `Ctrl+K`)**: Live search across all subjects, topics, question banks, and notes.
- 🖨️ **Print & PDF Ready**: One-click printable view with clean typography for offline exam practice.

---

## 📚 Curriculum Coverage (7 Official PU Subjects)

| Code | Subject Name | Type | Credits |
|---|---|---|---|
| `BCA-DSC-1(Maj)-101A` | **Introduction to Web Technologies** | DSC (Major) | 4 Credits |
| `BCA-DSC-1(Maj)-102` | **Fundamentals of Mathematical Statistics** | DSC (Major) | 4 Credits |
| `BCA-DSC-1(Min)-103` | **Problem Solving Through C** | DSC (Minor) | 4 Credits |
| `CSA-VAC-102` | **Introduction to Computer Hardware** | VAC (Value Added) | 2 Credits |
| `AEC-1-101` | **English-1 (Communication Skills & AEC)** | AEC | 2 Credits |
| `PUN-COMPL-1-101` | **ਪੰਜਾਬੀ ਲਾਜ਼ਮੀ / HCP-1 (Compulsory)** | Compulsory | 2 Credits |
| `CSA-MDC-101` | **E-Commerce & Digital Trends** | MDC | 3 Credits |

---

## ⌨️ Keyboard Shortcuts

- `⌘K` or `Ctrl+K`: Open Global Search
- `Esc`: Close Search / Workspace Modals
- `Ctrl+P` or `⌘P`: Print / Export Active Subject

---

## 🚀 Running Locally

### Academic Portal Web App:
```bash
python3 -m http.server 8080
```
Then visit [`http://localhost:8080`](http://localhost:8080) in your browser.

### 🧠 Model Context Protocol (MCP) Server:
To connect your local AI (ChatGPT, Claude Desktop, Cursor, Antigravity) directly to the 1st Sem Academic Hub:

```bash
# Stdio Mode (for Claude / Cursor / Antigravity):
./run-mcp.sh

# HTTP Mode (for ChatGPT Actions / REST API):
./run-mcp.sh --http 8080
```
See the full setup guide in [`mcp-server/README.md`](file:///Users/baljotchohan/Desktop/BCA%20I/BCA-1-SEM/mcp-server/README.md).