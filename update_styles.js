const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const newStyles = `<style>
        :root {
            /* Google Antigravity Light/Dark Theme System */
            --theme-surface-surface: #ffffff;
            --theme-surface-surface-container: #f8f9fa;
            --theme-surface-surface-container-low: #ffffff;
            --theme-surface-on-surface: #121317;
            --theme-surface-on-surface-variant: #45474d;
            --theme-outline-variant: #e1e3e8;
            --theme-button-primary: #121317;
            --theme-button-primary-hover: #31333a;
            --theme-button-secondary: transparent;
            --theme-button-secondary-hover: #f1f3f6;
            --gemini-blue: #3186FF;
            --space-xs: 4px;
            --space-sm: 8px;
            --space-md: 16px;
            --space-lg: 24px;
            --space-xl: 32px;
            --space-2xl: 48px;
            --space-4xl: 72px;
            --shape-corner-rounded: 999px;
            --shape-corner-xl: 24px;
            
            --font-mono: 'Google Sans Code', 'JetBrains Mono', monospace;
            --font-sans: 'Google Sans Flex', 'Inter', -apple-system, sans-serif;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            background-color: var(--theme-surface-surface);
            color: var(--theme-surface-on-surface);
            font-family: var(--font-sans);
            min-height: 100vh;
            overflow-x: hidden;
            -webkit-font-smoothing: antialiased;
        }

        .mono {
            font-family: var(--font-mono);
        }

        .symbol {
            font-family: 'Google Symbols';
            font-weight: normal;
            font-style: normal;
            font-size: 20px;
            line-height: 1;
            letter-spacing: normal;
            text-transform: none;
            display: inline-block;
            white-space: nowrap;
            word-wrap: normal;
            direction: ltr;
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
            vertical-align: middle;
        }

        /* --- ANTIGRAVITY COMPONENTS --- */
        
        .header {
            height: 64px;
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid var(--theme-outline-variant);
            position: sticky;
            top: 0;
            z-index: 50;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 24px;
        }

        .header-logo {
            font-weight: 500;
            font-size: 1.25rem;
            color: var(--theme-surface-on-surface);
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .button-primary {
            background: var(--theme-button-primary);
            color: #fff;
            border: none;
            padding: 10px 24px;
            border-radius: var(--shape-corner-rounded);
            font-family: var(--font-sans);
            font-weight: 500;
            font-size: 0.95rem;
            cursor: pointer;
            transition: background 0.2s;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            text-decoration: none;
        }
        
        .button-primary:hover {
            background: var(--theme-button-primary-hover);
        }

        .button-secondary {
            background: var(--theme-button-secondary);
            color: var(--theme-surface-on-surface);
            border: 1px solid var(--theme-outline-variant);
            padding: 10px 24px;
            border-radius: var(--shape-corner-rounded);
            font-family: var(--font-sans);
            font-weight: 500;
            font-size: 0.95rem;
            cursor: pointer;
            transition: background 0.2s;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            text-decoration: none;
        }

        .button-secondary:hover {
            background: var(--theme-button-secondary-hover);
        }

        .button-icon {
            background: transparent;
            color: var(--theme-surface-on-surface-variant);
            border: none;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: background 0.2s, color 0.2s;
        }

        .button-icon:hover {
            background: var(--theme-surface-surface-container);
            color: var(--theme-surface-on-surface);
        }

        .feature-card {
            background: var(--theme-surface-surface);
            border: 1px solid var(--theme-outline-variant);
            border-radius: var(--shape-corner-xl);
            padding: 32px;
            display: flex;
            flex-direction: column;
            transition: box-shadow 0.2s, border-color 0.2s;
        }

        .feature-card:hover {
            border-color: #d2d5db;
            box-shadow: 0 4px 20px rgba(0,0,0,0.04);
        }

        .feature-title {
            font-size: 1.5rem;
            font-weight: 400;
            margin-bottom: 8px;
            color: var(--theme-surface-on-surface);
        }
        
        .feature-desc {
            color: var(--theme-surface-on-surface-variant);
            font-size: 0.95rem;
            line-height: 1.5;
            margin-bottom: 24px;
        }

        .chip {
            font-family: var(--font-mono);
            font-size: 0.75rem;
            padding: 4px 10px;
            border-radius: var(--shape-corner-rounded);
            background: var(--theme-surface-surface-container);
            color: var(--theme-surface-on-surface-variant);
            border: 1px solid var(--theme-outline-variant);
            display: inline-flex;
            align-items: center;
        }

        /* Container & Layout */
        .page-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: var(--space-4xl) var(--space-lg);
        }

        .hero-section {
            text-align: center;
            padding: var(--space-4xl) 0;
        }
        
        .hero-title {
            font-size: clamp(2.5rem, 5vw, 4rem);
            font-weight: 400;
            letter-spacing: -0.02em;
            margin-bottom: var(--space-md);
            color: var(--theme-surface-on-surface);
        }

        .hero-subtitle {
            font-size: 1.25rem;
            color: var(--theme-surface-on-surface-variant);
            max-width: 600px;
            margin: 0 auto var(--space-xl);
        }

        /* Override old terminal classes dynamically */
        .terminal-nav { display: none; }
        
        /* Modal & Views */
        .modal-overlay {
            position: fixed;
            inset: 0;
            background: rgba(255,255,255,0.9);
            backdrop-filter: blur(4px);
            z-index: 100;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s;
        }
        
        .modal-overlay.active {
            opacity: 1;
            pointer-events: auto;
        }

        .modal-content {
            background: var(--theme-surface-surface);
            border: 1px solid var(--theme-outline-variant);
            border-radius: var(--shape-corner-xl);
            width: 90%;
            max-width: 800px;
            max-height: 90vh;
            overflow-y: auto;
            padding: 40px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.08);
            position: relative;
            transform: translateY(20px);
            transition: transform 0.3s;
        }
        
        .modal-overlay.active .modal-content {
            transform: translateY(0);
        }

        .modal-close {
            position: absolute;
            top: 24px;
            right: 24px;
        }

        .reader-view {
            max-width: 700px;
            margin: 0 auto;
            padding: 40px 20px;
            font-size: 1.1rem;
            line-height: 1.7;
            color: var(--theme-surface-on-surface);
        }
        
        .reader-view h1, .reader-view h2, .reader-view h3 {
            margin-top: 2em;
            margin-bottom: 0.5em;
            font-weight: 500;
        }
        
        /* Loading Overlay (Clean fade) */
        #intro-overlay {
            position: fixed;
            inset: 0;
            background-color: var(--theme-surface-surface);
            z-index: 100000;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transition: opacity 0.6s;
            color: var(--theme-surface-on-surface);
        }
        .intro-img {
            width: 80px;
            height: 80px;
            margin-bottom: 24px;
        }
        .typing-text {
            font-family: var(--font-sans);
            font-size: 1.5rem;
            font-weight: 400;
            letter-spacing: -0.01em;
        }

        /* QBank/List styles */
        .list-item {
            padding: 20px;
            border-bottom: 1px solid var(--theme-outline-variant);
            display: flex;
            align-items: flex-start;
            gap: 16px;
        }
        
        .list-item:last-child {
            border-bottom: none;
        }
        
        .mcp-sync-badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 0.8rem;
            color: #0F9D58; /* Google Green */
            background: rgba(15, 157, 88, 0.1);
            padding: 4px 12px;
            border-radius: var(--shape-corner-rounded);
            font-weight: 500;
        }
    </style>`;

html = html.replace(/<style>[\s\S]*?<\/style>/, newStyles);
fs.writeFileSync('index.html', html);
console.log('Styles replaced');
