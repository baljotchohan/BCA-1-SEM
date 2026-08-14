const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// The JS object subjectThemes:
html = html.replace(/'web-tech': \{.*?\},/g, `'web-tech': { color: 'gray', border: 'border-[#424242]', bg: 'bg-[#424242]', text: 'text-[#ececec]', glow: 'hover:border-[#565656]' },`);
html = html.replace(/'hardware': \{.*?\},/g, `'hardware': { color: 'gray', border: 'border-[#424242]', bg: 'bg-[#424242]', text: 'text-[#ececec]', glow: 'hover:border-[#565656]' },`);
html = html.replace(/'c-lang': \{.*?\},/g, `'c-lang': { color: 'gray', border: 'border-[#424242]', bg: 'bg-[#424242]', text: 'text-[#ececec]', glow: 'hover:border-[#565656]' },`);
html = html.replace(/'english': \{.*?\},/g, `'english': { color: 'gray', border: 'border-[#424242]', bg: 'bg-[#424242]', text: 'text-[#ececec]', glow: 'hover:border-[#565656]' },`);
html = html.replace(/'punjabi': \{.*?\},/g, `'punjabi': { color: 'gray', border: 'border-[#424242]', bg: 'bg-[#424242]', text: 'text-[#ececec]', glow: 'hover:border-[#565656]' },`);
html = html.replace(/'math': \{.*?\},/g, `'math': { color: 'gray', border: 'border-[#424242]', bg: 'bg-[#424242]', text: 'text-[#ececec]', glow: 'hover:border-[#565656]' },`);
html = html.replace(/'e-commerce': \{.*?\},/g, `'e-commerce': { color: 'gray', border: 'border-[#424242]', bg: 'bg-[#424242]', text: 'text-[#ececec]', glow: 'hover:border-[#565656]' },`);

html = html.replace(/const theme = subjectThemes\[s\.id\] \|\| \{.*?\};/g, `const theme = subjectThemes[s.id] || { color: 'gray', border: 'border-[#424242]', bg: 'bg-[#424242]', text: 'text-[#ececec]', glow: 'hover:border-[#565656]' };`);

// Fix any leftover tailwind border colors
html = html.replace(/border-emerald-500\/30/g, 'border-[#565656]');
html = html.replace(/border-emerald-500\/50/g, 'border-[#6a6a6a]');
html = html.replace(/border-cyan-500\/30/g, 'border-[#565656]');
html = html.replace(/border-cyan-500\/50/g, 'border-[#6a6a6a]');
html = html.replace(/border-amber-500\/30/g, 'border-[#565656]');
html = html.replace(/border-amber-500\/50/g, 'border-[#6a6a6a]');
html = html.replace(/border-purple-500\/30/g, 'border-[#565656]');
html = html.replace(/border-purple-500\/50/g, 'border-[#6a6a6a]');

fs.writeFileSync('index.html', html);
console.log('Fixed JS themes');
