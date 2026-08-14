const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Update CSS Variables
html = html.replace(/:root \{([\s\S]*?)\}/, `:root {
            --bg-color: #212121;
            --bg-panel: #2f2f2f;
            --bg-card: #2f2f2f;
            --bg-card-hover: #3a3a3a;
            --border-color: #424242;
            --border-highlight: #565656;
            --text-main: #ececec;
            --text-muted: #b4b4b4;
            --text-dim: #888888;
            --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
            --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            --terminal-green: #00ff41;
            --terminal-glow: rgba(0, 255, 65, 0.4);
        }`);

// 2. Remove body background image
html = html.replace(/background-image:\s*radial-gradient[\s\S]*?background-size: 24px 24px, 100% 100%;/, '/* Clean background */');

// 3. Remove scanlines completely but keep intro overlay
html = html.replace(/\/\* --- CRT SCANLINES LAYER --- \*\/[\s\S]*?opacity: 0\.35;\n        \}/, `/* --- CRT SCANLINES LAYER --- */\n        .scanlines {\n            display: none !important;\n        }`);

// 4. Update Header Nav (remove heavy blur, make it clean)
html = html.replace(/\.terminal-nav \{[\s\S]*?padding: 0 1\.5rem;\n        \}/, `.terminal-nav {\n            height: 64px;\n            background: #212121;\n            border-bottom: 1px solid var(--border-color);\n            position: sticky;\n            top: 0;\n            z-index: 50;\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n            padding: 0 1.5rem;\n        }`);

// 5. Update terminal-card to be elegant
html = html.replace(/\.terminal-card::before \{[\s\S]*?opacity: 1;\n        \}/, `/* Elegant minimalist card */\n        .terminal-card:hover {\n            border-color: var(--border-highlight);\n            background: var(--bg-card-hover);\n            box-shadow: 0 4px 12px rgba(0,0,0,0.1);\n        }`);

// 6. Update terminal buttons to simple pill buttons
html = html.replace(/\.term-btn-notes \{[\s\S]*?color: #fff;\n        \}/, `.term-btn-notes, .term-btn-qbank, .term-btn-solutions {\n            background: #424242;\n            border-color: transparent;\n            color: #ececec;\n        }\n        .term-btn-notes:hover, .term-btn-qbank:hover, .term-btn-solutions:hover {\n            background: #565656;\n            color: #fff;\n        }`);

// 7. Update workspace hero
html = html.replace(/\.workspace-hero \{[\s\S]*?position: relative;\n        \}/, `.workspace-hero {\n            background: var(--bg-card);\n            border: 1px solid var(--border-color);\n            border-radius: 12px;\n            padding: 1.75rem;\n            margin-bottom: 1.5rem;\n            position: relative;\n        }`);

// 8. Update workspace tabs
html = html.replace(/\.tab-btn\.active \{[\s\S]*?box-shadow: 0 0 15px rgba\(0, 255, 65, 0\.1\);\n        \}/, `.tab-btn.active {\n            background: #424242;\n            color: #fff;\n            border-color: #565656;\n        }`);

// 9. Update unit chips
html = html.replace(/\.unit-chip\.active, \.unit-chip:hover \{[\s\S]*?background: rgba\(0, 255, 65, 0\.08\);\n        \}/, `.unit-chip.active, .unit-chip:hover {\n            border-color: #888;\n            color: #ececec;\n            background: #424242;\n        }`);

// 10. Fix Paper Mode so it respects the new dark mode
html = html.replace(/#reader-article-box \{[\s\S]*?transition: background-color 0\.2s ease, color 0\.2s ease;\n        \}/, `#reader-article-box {\n            background-color: var(--bg-card);\n            border-color: var(--border-color);\n            color: var(--text-main);\n            transition: background-color 0.2s ease, color 0.2s ease;\n        }`);

// 11. Globally replace Tailwind Neon classes with elegant neutral classes
// Dashboard Banner
html = html.replace(/bg-gradient-to-r from-emerald-950\/20 via-black to-cyan-950\/20 border border-emerald-500\/30/g, "bg-[#2f2f2f] border border-[#424242]");
// Badges / pills
html = html.replace(/bg-emerald-500\/10 border border-emerald-500\/30 text-emerald-400/g, "bg-[#424242] border border-[#565656] text-[#ececec]");
html = html.replace(/bg-cyan-500\/10 border border-cyan-500\/30 text-cyan-400/g, "bg-[#424242] border border-[#565656] text-[#ececec]");
html = html.replace(/bg-amber-500\/10 border border-amber-500\/30 text-amber-400/g, "bg-[#424242] border border-[#565656] text-[#ececec]");
html = html.replace(/bg-purple-500\/10 border border-purple-500\/30 text-purple-400/g, "bg-[#424242] border border-[#565656] text-[#ececec]");
html = html.replace(/bg-red-500\/10 text-red-400 border border-red-500\/20/g, "bg-[#424242] text-[#ececec] border border-[#565656]");

// Glowing texts to neutral
html = html.replace(/glow-text-green/g, "text-white font-medium");
html = html.replace(/glow-text-cyan/g, "text-white font-medium");

// Tailwind colors
html = html.replace(/text-emerald-400/g, "text-gray-200");
html = html.replace(/text-cyan-400/g, "text-gray-200");
html = html.replace(/text-amber-400/g, "text-gray-200");
html = html.replace(/text-purple-400/g, "text-gray-200");
html = html.replace(/text-cyan-300/g, "text-gray-100");
html = html.replace(/text-emerald-300/g, "text-gray-100");

// Borders
html = html.replace(/border-emerald-500\/20/g, "border-[#424242]");
html = html.replace(/border-l-purple-500/g, "border-l-gray-400");
html = html.replace(/border-left: 4px solid var\(--neon-cyan\)/g, "border-left: 4px solid #888");

// Backgrounds
html = html.replace(/bg-black\/60/g, "bg-[#2f2f2f]");
html = html.replace(/bg-[#0e111a]/g, "bg-[#2f2f2f]");
html = html.replace(/bg-[#0b0d14]/g, "bg-[#212121]");
html = html.replace(/bg-[#161b22]/g, "bg-[#2f2f2f]");
html = html.replace(/bg-[#0d1117]/g, "bg-[#212121]");
html = html.replace(/bg-[#0a0c10]/g, "bg-[#212121]");

// Intro overlay green keep
html = html.replace(/text-gray-200 animate-pulse/g, "text-emerald-400 animate-pulse"); // wait, intro doesn't use tailwind for typing-text, it uses CSS class typing-text which uses var(--terminal-green).
// We kept --terminal-green for the intro.

fs.writeFileSync('index.html', html);
console.log('Transformation complete!');
