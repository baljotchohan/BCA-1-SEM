const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Replace Stylesheets
html = html.replace(/<link href="https:\/\/fonts\.googleapis\.com\/css2\?family=Inter[\s\S]*?rel="stylesheet">/, 
`<link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,slnt,wdth,wght,ROND@8..144,-10..0,25..150,400..500,0..100&display=swap">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,slnt,wdth,wght,ROND@8..144,-10..0,25..150,400..500,0..100&display=swap">
    <link href="https://fonts.googleapis.com/css2?family=Google+Sans+Code:ital@0;1&display=swap" rel="stylesheet">
    <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Google+Symbols:opsz,wght,FILL,GRAD,ROND@40..48,300,0..1,0,50&display=swap">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Google+Symbols:opsz,wght,FILL,GRAD,ROND@40..48,300,0..1,0,50&display=swap">`);

// Remove font awesome
html = html.replace(/<link rel="stylesheet" href="https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/font-awesome.*?">/, '');

// 2. Map FontAwesome icons to Google Symbols
const faToSymbol = {
    'fa-search': 'search',
    'fa-clock': 'schedule',
    'fa-history': 'history',
    'fa-check': 'check_circle',
    'fa-copy': 'content_copy',
    'fa-compress': 'close_fullscreen',
    'fa-expand': 'open_in_full',
    'fa-times': 'close',
    'fa-chevron-right': 'chevron_right',
    'fa-chevron-left': 'chevron_left',
    'fa-arrow-right': 'arrow_forward',
    'fa-arrow-left': 'arrow_back',
    'fa-file-lines': 'description',
    'fa-folder': 'folder',
    'fa-book': 'menu_book',
    'fa-question-circle': 'help',
    'fa-lightbulb': 'lightbulb',
    'fa-cog': 'settings',
    'fa-moon': 'dark_mode',
    'fa-sun': 'light_mode',
    'fa-bars': 'menu',
    'fa-globe': 'public',
    'fa-code': 'code',
    'fa-laptop-code': 'laptop_mac',
    'fa-microchip': 'memory',
    'fa-database': 'database',
    'fa-calculator': 'calculate'
};

html = html.replace(/<i class="[a-z]+ (fa-[a-z0-9\-]+)[^"]*"><\/i>/g, (match, faClass) => {
    const symbol = faToSymbol[faClass] || 'circle';
    // Keep some original classes for tailwind positioning if needed, but remove FA specific ones
    // Wait, let's just make it a pure span
    return `<span class="symbol mr-1">${symbol}</span>`;
});

// Since symbols in Antigravity are styled via .symbol, let's ensure we have a CSS class for it
// It will be added in step 2.

// We must also fix JS template literals that generate FontAwesome.
Object.entries(faToSymbol).forEach(([fa, sym]) => {
    const regex = new RegExp(`<i class="[^"]*?${fa}[^"]*"><\\/i>`, 'g');
    html = html.replace(regex, `<span class="symbol mr-1">${sym}</span>`);
});

fs.writeFileSync('index.html', html);
console.log('Fonts and Icons replaced');
