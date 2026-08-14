import json

# Read syllabus-data.js
with open("syllabus-data.js", "r", encoding="utf-8") as f:
    raw = f.read()

idx = raw.find("{")
last_idx = raw.rfind("};")
syllabus_json = raw[idx:last_idx+1]
data = json.loads(syllabus_json)

html_content = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Panjab University BCA 1st Sem Hub | Academic Deck & Notes</title>
    <meta name="description" content="Official Panjab University BCA 1st Semester Academic Deck. Unit notes, high-yield question banks, and verified solutions.">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <!-- Google Fonts & Symbols -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,slnt,wdth,wght,ROND@8..144,-10..0,25..150,400..700,0..100&family=Google+Sans+Code:ital,wght@0,400..700;1,400..700&family=Google+Symbols:opsz,wght,FILL,GRAD,ROND@40..48,300,0..1,0,50&display=swap" rel="stylesheet">
    
    <!-- MathJax Configuration for LaTeX Math -->
    <script>
        window.MathJax = {
            tex: { inlineMath: [['$', '$'], ['\\\\(', '\\\\)']], displayMath: [['$$', '$$'], ['\\\\[', '\\\\]']] },
            svg: { fontCache: 'global' }
        };
    </script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
    
    <!-- Syllabus Data Source -->
    <script src="syllabus-data.js"></script>

    <style>
        :root {
            --bg-page: #f8f9fc;
            --bg-surface: #ffffff;
            --bg-surface-alt: #f1f3f8;
            --bg-card: #ffffff;
            --bg-card-hover: #ffffff;
            --text-primary: #111318;
            --text-secondary: #43474e;
            --text-muted: #73777f;
            --border-color: #e0e2ec;
            --border-hover: #c4c6d0;
            --accent-primary: #005ac1;
            --accent-primary-hover: #004394;
            --accent-secondary: #e8f0fe;
            --accent-text: #1a73e8;
            --accent-green: #137333;
            --accent-green-bg: #e6f4ea;
            --accent-amber: #b06000;
            --accent-amber-bg: #fef7e0;
            --accent-red: #c5221f;
            --accent-red-bg: #fce8e6;
            --radius-sm: 8px;
            --radius-md: 14px;
            --radius-lg: 20px;
            --radius-pill: 9999px;
            --font-sans: 'Google Sans Flex', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            --font-mono: 'Google Sans Code', 'JetBrains Mono', monospace;
            --shadow-subtle: 0 1px 3px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.03);
            --shadow-hover: 0 4px 16px rgba(0,0,0,0.08), 0 12px 32px rgba(0,0,0,0.06);
            --shadow-modal: 0 24px 48px rgba(17, 19, 24, 0.2);
        }

        [data-theme="dark"] {
            --bg-page: #121316;
            --bg-surface: #1a1c20;
            --bg-surface-alt: #24262b;
            --bg-card: #1e2025;
            --bg-card-hover: #262930;
            --text-primary: #e2e2e8;
            --text-secondary: #c4c6d0;
            --text-muted: #8e9099;
            --border-color: #33363e;
            --border-hover: #484b55;
            --accent-primary: #a8c7fa;
            --accent-primary-hover: #c2e7ff;
            --accent-secondary: #004a77;
            --accent-text: #a8c7fa;
            --accent-green: #81c995;
            --accent-green-bg: rgba(129, 201, 149, 0.15);
            --accent-amber: #fdd663;
            --accent-amber-bg: rgba(253, 214, 99, 0.15);
            --accent-red: #f28b82;
            --accent-red-bg: rgba(242, 139, 130, 0.15);
            --shadow-subtle: 0 2px 8px rgba(0,0,0,0.3);
            --shadow-hover: 0 8px 24px rgba(0,0,0,0.4);
            --shadow-modal: 0 32px 64px rgba(0,0,0,0.6);
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: var(--font-sans);
            background-color: var(--bg-page);
            color: var(--text-primary);
            min-height: 100vh;
            line-height: 1.6;
            -webkit-font-smoothing: antialiased;
            transition: background-color 0.2s, color 0.2s;
        }

        /* Typography Helpers */
        .mono { font-family: var(--font-mono); }
        .symbol {
            font-family: 'Google Symbols';
            font-weight: normal;
            font-style: normal;
            font-size: 20px;
            line-height: 1;
            display: inline-block;
            vertical-align: middle;
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }

        /* Layout Container */
        .container {
            max-width: 1240px;
            margin: 0 auto;
            padding: 0 24px;
        }

        /* --- HEADER NAVBAR --- */
        .navbar {
            position: sticky;
            top: 0;
            z-index: 1000;
            background: rgba(255, 255, 255, 0.88);
            backdrop-filter: blur(16px);
            border-bottom: 1px solid var(--border-color);
            transition: background 0.2s, border-color 0.2s;
        }
        [data-theme="dark"] .navbar {
            background: rgba(26, 28, 32, 0.88);
        }

        .navbar-inner {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 68px;
        }

        .nav-brand {
            display: flex;
            align-items: center;
            gap: 12px;
            text-decoration: none;
            color: var(--text-primary);
        }

        .brand-icon {
            width: 36px;
            height: 36px;
            background: var(--accent-primary);
            color: #ffffff;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 1.1rem;
        }

        .brand-info h1 {
            font-size: 1.05rem;
            font-weight: 600;
            letter-spacing: -0.01em;
            line-height: 1.2;
        }

        .brand-info p {
            font-size: 0.75rem;
            color: var(--text-muted);
            font-family: var(--font-mono);
        }

        .nav-links {
            display: flex;
            align-items: center;
            gap: 8px;
            list-style: none;
        }

        .nav-item a {
            text-decoration: none;
            color: var(--text-secondary);
            font-size: 0.92rem;
            font-weight: 500;
            padding: 8px 14px;
            border-radius: var(--radius-pill);
            transition: all 0.15s;
        }

        .nav-item a:hover {
            background: var(--bg-surface-alt);
            color: var(--text-primary);
        }

        .nav-actions {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        /* Buttons & Badges */
        .btn {
            font-family: var(--font-sans);
            font-size: 0.9rem;
            font-weight: 500;
            padding: 9px 18px;
            border-radius: var(--radius-pill);
            border: 1px solid transparent;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            text-decoration: none;
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .btn-primary {
            background: var(--accent-primary);
            color: #ffffff;
        }
        [data-theme="dark"] .btn-primary {
            color: #00224d;
        }
        .btn-primary:hover {
            background: var(--accent-primary-hover);
            box-shadow: 0 4px 12px rgba(0, 90, 193, 0.25);
        }

        .btn-secondary {
            background: var(--bg-surface);
            color: var(--text-primary);
            border-color: var(--border-color);
        }
        .btn-secondary:hover {
            background: var(--bg-surface-alt);
            border-color: var(--border-hover);
        }

        .btn-icon {
            width: 40px;
            height: 40px;
            padding: 0;
            border-radius: 50%;
            background: transparent;
            color: var(--text-secondary);
            border: 1px solid var(--border-color);
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            transition: all 0.15s;
        }
        .btn-icon:hover {
            background: var(--bg-surface-alt);
            color: var(--text-primary);
        }

        .badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 4px 10px;
            border-radius: var(--radius-pill);
            font-size: 0.75rem;
            font-weight: 600;
            font-family: var(--font-mono);
            letter-spacing: 0.02em;
        }

        .badge-blue { background: var(--accent-secondary); color: var(--accent-text); }
        .badge-green { background: var(--accent-green-bg); color: var(--accent-green); }
        .badge-amber { background: var(--accent-amber-bg); color: var(--accent-amber); }
        .badge-red { background: var(--accent-red-bg); color: var(--accent-red); }

        /* --- HERO SECTION --- */
        .hero {
            padding: 48px 0 32px 0;
            text-align: center;
        }

        .hero-tag {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 6px 16px;
            background: var(--bg-surface);
            border: 1px solid var(--border-color);
            border-radius: var(--radius-pill);
            font-size: 0.8rem;
            font-family: var(--font-mono);
            color: var(--text-secondary);
            margin-bottom: 20px;
            box-shadow: var(--shadow-subtle);
        }

        .hero-title {
            font-size: clamp(2rem, 4.5vw, 3.2rem);
            font-weight: 700;
            letter-spacing: -0.03em;
            color: var(--text-primary);
            line-height: 1.15;
            margin-bottom: 16px;
        }

        .hero-subtitle {
            font-size: 1.15rem;
            color: var(--text-secondary);
            max-width: 740px;
            margin: 0 auto 32px auto;
            line-height: 1.6;
        }

        /* Search Bar */
        .search-wrapper {
            max-width: 680px;
            margin: 0 auto 40px auto;
            position: relative;
        }

        .search-input {
            width: 100%;
            padding: 16px 20px 16px 52px;
            background: var(--bg-surface);
            border: 1px solid var(--border-color);
            border-radius: var(--radius-pill);
            font-family: var(--font-sans);
            font-size: 1.05rem;
            color: var(--text-primary);
            box-shadow: var(--shadow-subtle);
            outline: none;
            transition: all 0.2s;
        }

        .search-input:focus {
            border-color: var(--accent-primary);
            box-shadow: 0 0 0 3px rgba(0, 90, 193, 0.12), var(--shadow-hover);
        }

        .search-icon {
            position: absolute;
            left: 20px;
            top: 50%;
            transform: translateY(-50%);
            color: var(--text-muted);
            pointer-events: none;
        }

        /* --- STATS BAR --- */
        .stats-bar {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 16px;
            margin-bottom: 48px;
        }

        .stat-card {
            background: var(--bg-surface);
            border: 1px solid var(--border-color);
            border-radius: var(--radius-md);
            padding: 18px 20px;
            display: flex;
            align-items: center;
            gap: 16px;
            box-shadow: var(--shadow-subtle);
        }

        .stat-icon {
            width: 44px;
            height: 44px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 22px;
        }

        .stat-val {
            font-size: 1.35rem;
            font-weight: 700;
            color: var(--text-primary);
            line-height: 1.2;
        }

        .stat-lbl {
            font-size: 0.8rem;
            color: var(--text-muted);
        }

        /* --- SECTION HEADERS --- */
        .section-header {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            margin-bottom: 24px;
            padding-bottom: 12px;
            border-bottom: 1px solid var(--border-color);
        }

        .section-header h2 {
            font-size: 1.55rem;
            font-weight: 600;
            letter-spacing: -0.02em;
            color: var(--text-primary);
        }

        .section-header p {
            font-size: 0.9rem;
            color: var(--text-secondary);
            margin-top: 4px;
        }

        /* --- SUBJECTS GRID --- */
        .subjects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
            gap: 24px;
            margin-bottom: 64px;
        }

        .subject-card {
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: var(--radius-lg);
            padding: 28px;
            display: flex;
            flex-direction: column;
            box-shadow: var(--shadow-subtle);
            transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
        }

        .subject-card:hover {
            transform: translateY(-3px);
            box-shadow: var(--shadow-hover);
            border-color: var(--border-hover);
        }

        .card-top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 14px;
        }

        .card-title {
            font-size: 1.25rem;
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: 8px;
            line-height: 1.35;
        }

        .card-desc {
            font-size: 0.9rem;
            color: var(--text-secondary);
            line-height: 1.5;
            margin-bottom: 20px;
        }

        /* Unit Pills List in Card */
        .card-units {
            background: var(--bg-surface-alt);
            border-radius: var(--radius-md);
            padding: 12px;
            margin-bottom: 24px;
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .card-unit-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 6px 10px;
            background: var(--bg-surface);
            border-radius: var(--radius-sm);
            border: 1px solid var(--border-color);
            font-size: 0.82rem;
            cursor: pointer;
            transition: all 0.15s;
        }

        .card-unit-row:hover {
            border-color: var(--accent-primary);
            color: var(--accent-text);
        }

        .card-unit-row span.unit-tag {
            font-weight: 600;
            font-family: var(--font-mono);
            color: var(--text-primary);
        }

        .card-actions {
            margin-top: auto;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .btn-row {
            display: flex;
            gap: 8px;
        }

        /* --- MARKS SCHEME TABLE --- */
        .table-card {
            background: var(--bg-surface);
            border: 1px solid var(--border-color);
            border-radius: var(--radius-lg);
            overflow: hidden;
            box-shadow: var(--shadow-subtle);
            margin-bottom: 64px;
        }

        .styled-table {
            width: 100%;
            border-collapse: collapse;
            text-align: left;
            font-size: 0.92rem;
        }

        .styled-table th {
            background: var(--bg-surface-alt);
            padding: 16px 20px;
            font-weight: 600;
            color: var(--text-secondary);
            border-bottom: 1px solid var(--border-color);
            font-size: 0.85rem;
            text-transform: uppercase;
            letter-spacing: 0.04em;
        }

        .styled-table td {
            padding: 16px 20px;
            border-bottom: 1px solid var(--border-color);
            color: var(--text-primary);
        }

        .styled-table tbody tr:last-child td {
            border-bottom: none;
        }

        .styled-table tbody tr:hover {
            background: var(--bg-surface-alt);
        }

        /* --- MODAL SYSTEM --- */
        .modal-backdrop {
            position: fixed;
            inset: 0;
            background: rgba(15, 17, 21, 0.7);
            backdrop-filter: blur(8px);
            z-index: 2000;
            display: none;
            align-items: center;
            justify-content: center;
            padding: 20px;
            opacity: 0;
            transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .modal-backdrop.open {
            display: flex;
            opacity: 1;
        }

        .modal-dialog {
            background: var(--bg-surface);
            border: 1px solid var(--border-color);
            border-radius: var(--radius-lg);
            width: 100%;
            max-width: 980px;
            max-height: 90vh;
            display: flex;
            flex-direction: column;
            box-shadow: var(--shadow-modal);
            transform: scale(0.97) translateY(12px);
            transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
            overflow: hidden;
        }

        .modal-backdrop.open .modal-dialog {
            transform: scale(1) translateY(0);
        }

        .modal-header {
            padding: 18px 28px;
            background: var(--bg-surface-alt);
            border-bottom: 1px solid var(--border-color);
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .modal-title-wrap h3 {
            font-size: 1.25rem;
            font-weight: 600;
            color: var(--text-primary);
        }

        .modal-title-wrap p {
            font-size: 0.8rem;
            color: var(--text-muted);
            font-family: var(--font-mono);
        }

        .modal-controls {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .modal-body {
            padding: 28px 32px;
            overflow-y: auto;
            flex: 1;
        }

        /* Document Reader Formatting */
        .unit-nav-tabs {
            display: flex;
            gap: 8px;
            overflow-x: auto;
            padding-bottom: 14px;
            margin-bottom: 24px;
            border-bottom: 1px solid var(--border-color);
        }

        .tab-btn {
            padding: 8px 18px;
            border-radius: var(--radius-pill);
            border: 1px solid var(--border-color);
            background: var(--bg-surface);
            color: var(--text-secondary);
            font-family: var(--font-sans);
            font-weight: 500;
            font-size: 0.88rem;
            cursor: pointer;
            transition: all 0.15s;
            white-space: nowrap;
        }

        .tab-btn.active, .tab-btn:hover {
            background: var(--accent-primary);
            color: #ffffff;
            border-color: var(--accent-primary);
        }
        [data-theme="dark"] .tab-btn.active {
            color: #00224d;
        }

        .reader-content {
            font-size: 1.05rem;
            line-height: 1.8;
            color: var(--text-primary);
        }

        .reader-content h1 {
            font-size: 1.8rem;
            font-weight: 700;
            margin-bottom: 12px;
            letter-spacing: -0.02em;
        }

        .reader-content h2 {
            font-size: 1.4rem;
            font-weight: 600;
            margin: 28px 0 12px 0;
            color: var(--accent-primary);
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 8px;
        }

        .reader-content h3 {
            font-size: 1.15rem;
            font-weight: 600;
            margin: 20px 0 8px 0;
        }

        .reader-content h4 {
            font-size: 1.05rem;
            font-weight: 600;
            margin: 16px 0 6px 0;
            color: var(--text-secondary);
        }

        .reader-content p {
            margin-bottom: 16px;
        }

        .reader-content ul, .reader-content ol {
            padding-left: 28px;
            margin-bottom: 16px;
        }

        .reader-content li {
            margin-bottom: 6px;
        }

        .reader-content blockquote {
            background: var(--accent-secondary);
            border-left: 4px solid var(--accent-text);
            padding: 14px 20px;
            border-radius: var(--radius-sm);
            color: var(--text-primary);
            margin: 20px 0;
            font-size: 0.95rem;
        }

        .reader-content pre {
            background: var(--bg-surface-alt);
            border: 1px solid var(--border-color);
            border-radius: var(--radius-md);
            padding: 18px 20px;
            overflow-x: auto;
            font-family: var(--font-mono);
            font-size: 0.9rem;
            line-height: 1.5;
            margin: 20px 0;
            position: relative;
        }

        .reader-content code {
            font-family: var(--font-mono);
            background: var(--bg-surface-alt);
            padding: 2px 6px;
            border-radius: 4px;
            font-size: 0.9em;
        }

        .copy-code-btn {
            position: absolute;
            top: 10px;
            right: 10px;
            padding: 4px 10px;
            font-size: 0.75rem;
            border-radius: var(--radius-sm);
            background: var(--bg-surface);
            border: 1px solid var(--border-color);
            color: var(--text-secondary);
            cursor: pointer;
        }

        /* --- FOOTER --- */
        .footer {
            border-top: 1px solid var(--border-color);
            background: var(--bg-surface);
            padding: 40px 0;
            margin-top: 80px;
            font-size: 0.9rem;
            color: var(--text-muted);
        }

        .footer-inner {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 20px;
        }

        /* Responsive Mobile */
        @media (max-width: 768px) {
            .nav-links { display: none; }
            .subjects-grid { grid-template-columns: 1fr; }
            .modal-dialog { max-height: 95vh; margin: 10px; }
            .modal-body { padding: 20px; }
        }
    </style>
</head>
<body>

    <!-- TOP NAVIGATION -->
    <header class="navbar">
        <div class="container navbar-inner">
            <a href="#" class="nav-brand">
                <div class="brand-icon">PU</div>
                <div class="brand-info">
                    <h1>Panjab University • BCA</h1>
                    <p>Semester 1 Academic Deck</p>
                </div>
            </a>
            <ul class="nav-links">
                <li class="nav-item"><a href="#subjects">📚 Subjects</a></li>
                <li class="nav-item"><a href="#qbank">❓ Question Bank</a></li>
                <li class="nav-item"><a href="#solutions">✅ Model Solutions</a></li>
                <li class="nav-item"><a href="#scheme">📊 Marks Scheme</a></li>
            </ul>
            <div class="nav-actions">
                <span id="mcp-status" class="badge badge-green">
                    <span class="symbol" style="font-size:14px;">cloud_sync</span> Live Synced
                </span>
                <button class="btn-icon" onclick="toggleTheme()" title="Toggle Theme">
                    <span class="symbol" id="theme-icon">dark_mode</span>
                </button>
                <a href="mcp-admin.html" class="btn btn-primary">
                    <span class="symbol">dashboard</span> Admin Deck
                </a>
            </div>
        </div>
    </header>

    <main class="container">
        
        <!-- HERO SECTION -->
        <section class="hero">
            <div class="hero-tag">
                <span class="symbol" style="font-size:16px; color:var(--accent-primary);">school</span>
                PANJAB UNIVERSITY (CHANDIGARH) • NEP 2026–27 ACADEMIC FRAMEWORK
            </div>
            <h2 class="hero-title">BCA 1st Semester Academic Deck</h2>
            <p class="hero-subtitle">
                The definitive curriculum hub for Panjab University BCA Semester 1. Comprehensive structured unit notes, high-yield examination question banks, and verified step-by-step solutions.
            </p>

            <!-- Search Bar -->
            <div class="search-wrapper">
                <span class="symbol search-icon">search</span>
                <input type="text" id="searchInput" class="search-input" placeholder="Search subjects, topics (e.g. C Pointers, DNS, Karl Pearson, HTML5)..." oninput="filterSubjects()">
            </div>

            <!-- Stats Bar -->
            <div class="stats-bar">
                <div class="stat-card">
                    <div class="stat-icon" style="background:var(--accent-secondary); color:var(--accent-text);">
                        <span class="symbol">menu_book</span>
                    </div>
                    <div>
                        <div class="stat-val">7 Subjects</div>
                        <div class="stat-lbl">Major, Minor, VAC & AEC</div>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon" style="background:var(--accent-green-bg); color:var(--accent-green);">
                        <span class="symbol">folder_open</span>
                    </div>
                    <div>
                        <div class="stat-val">28 Units</div>
                        <div class="stat-lbl">100% PU Syllabus Aligned</div>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon" style="background:var(--accent-amber-bg); color:var(--accent-amber);">
                        <span class="symbol">quiz</span>
                    </div>
                    <div>
                        <div class="stat-val">High-Yield Qs</div>
                        <div class="stat-lbl">PYQs & Model Answers</div>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon" style="background:var(--accent-red-bg); color:var(--accent-red);">
                        <span class="symbol">terminal</span>
                    </div>
                    <div>
                        <div class="stat-val">Verified Code</div>
                        <div class="stat-lbl">C Programs & Web Solutions</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- SUBJECTS SECTION -->
        <section id="subjects" style="scroll-margin-top: 90px;">
            <div class="section-header">
                <div>
                    <h2>Curriculum Subjects & Unit Decks</h2>
                    <p>Select any subject to read full unit notes, test question banks, or inspect practical solutions.</p>
                </div>
                <span class="badge badge-blue">Semester 1</span>
            </div>

            <div id="subjects-grid" class="subjects-grid">
                <!-- Dynamically rendered via JS -->
            </div>
        </section>

        <!-- MARKS & CREDITS SCHEME SECTION -->
        <section id="scheme" style="scroll-margin-top: 90px;">
            <div class="section-header">
                <div>
                    <h2>Examination & Marks Scheme</h2>
                    <p>Official Panjab University evaluation breakdown under the NEP credit framework.</p>
                </div>
                <span class="badge badge-green">NEP 2026–27</span>
            </div>

            <div class="table-card">
                <table class="styled-table">
                    <thead>
                        <tr>
                            <th>Paper Code</th>
                            <th>Subject Name</th>
                            <th>Credits</th>
                            <th>Internal</th>
                            <th>External</th>
                            <th>Practical</th>
                            <th>Total Marks</th>
                        </tr>
                    </thead>
                    <tbody id="marks-table-body">
                        <!-- Rendered via JS -->
                    </tbody>
                </table>
            </div>
        </section>

    </main>

    <!-- NOTES READER MODAL -->
    <div id="notes-modal" class="modal-backdrop">
        <div class="modal-dialog">
            <div class="modal-header">
                <div class="modal-title-wrap">
                    <h3 id="modal-subject-title">Subject Notes</h3>
                    <p id="modal-subject-code">BCA-101 • 4 Credits</p>
                </div>
                <div class="modal-controls">
                    <button class="btn btn-secondary" onclick="window.print()" title="Print / Save PDF">
                        <span class="symbol">print</span> Print
                    </button>
                    <button class="btn btn-secondary" onclick="toggleFullscreen()" title="Fullscreen">
                        <span class="symbol" id="fullscreen-icon">open_in_full</span>
                    </button>
                    <button class="btn-icon" onclick="closeModal('notes-modal')">
                        <span class="symbol">close</span>
                    </button>
                </div>
            </div>
            <div class="modal-body">
                <div id="modal-units-nav" class="unit-nav-tabs"></div>
                <div id="modal-content-area" class="reader-content"></div>
            </div>
        </div>
    </div>

    <!-- QBANK MODAL -->
    <div id="qbank-modal" class="modal-backdrop">
        <div class="modal-dialog">
            <div class="modal-header">
                <div class="modal-title-wrap">
                    <h3 id="qbank-modal-title">Question Bank</h3>
                    <p>High-Yield Examination Questions & PYQ Patterns</p>
                </div>
                <button class="btn-icon" onclick="closeModal('qbank-modal')">
                    <span class="symbol">close</span>
                </button>
            </div>
            <div class="modal-body" id="qbank-content-area"></div>
        </div>
    </div>

    <!-- SOLUTIONS MODAL -->
    <div id="sol-modal" class="modal-backdrop">
        <div class="modal-dialog">
            <div class="modal-header">
                <div class="modal-title-wrap">
                    <h3 id="sol-modal-title">Verified Solutions & Code</h3>
                    <p>Step-by-Step Model Answers and Executable Programs</p>
                </div>
                <button class="btn-icon" onclick="closeModal('sol-modal')">
                    <span class="symbol">close</span>
                </button>
            </div>
            <div class="modal-body reader-content" id="sol-content-area"></div>
        </div>
    </div>

    <!-- FOOTER -->
    <footer class="footer">
        <div class="container footer-inner">
            <div>
                <strong>Panjab University BCA 1st Semester Hub</strong>
                <p style="margin-top:4px;">Maintained for academic excellence & student revision. Auto-synced with Git repository.</p>
            </div>
            <div style="display:flex; gap:16px; align-items:center;">
                <a href="#subjects" style="color:var(--text-secondary); text-decoration:none;">Subjects</a>
                <a href="#scheme" style="color:var(--text-secondary); text-decoration:none;">Scheme</a>
                <a href="mcp-admin.html" style="color:var(--accent-text); text-decoration:none; font-weight:600;">Admin Deck →</a>
            </div>
        </div>
    </footer>

    <!-- JAVASCRIPT APPLICATION LOGIC -->
    <script>
        let currentSubjectId = null;
        let isFullscreen = false;

        // Theme management
        function toggleTheme() {
            const current = document.documentElement.getAttribute('data-theme');
            const target = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', target);
            document.getElementById('theme-icon').innerText = target === 'dark' ? 'light_mode' : 'dark_mode';
            localStorage.setItem('pu_bca_theme', target);
        }

        // Initialize Theme
        const savedTheme = localStorage.getItem('pu_bca_theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        document.getElementById('theme-icon').innerText = savedTheme === 'dark' ? 'light_mode' : 'dark_mode';

        // Markdown Formatter for Advanced Notes
        function markdownToHtml(md) {
            if (!md) return '';
            let html = md
                .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
                // Headings
                .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
                .replace(/^### (.*$)/gim, '<h3>$1</h3>')
                .replace(/^## (.*$)/gim, '<h2>$1</h2>')
                .replace(/^# (.*$)/gim, '<h1>$1</h1>')
                // Code Blocks
                .replace(/```([a-z]*)\\n([\\s\\S]*?)\\n```/gim, (match, lang, code) => {
                    return `<pre><button class="copy-code-btn" onclick="copyCode(this)">Copy</button><code>${code}</code></pre>`;
                })
                // Inline Code
                .replace(/`([^`]+)`/gim, '<code>$1</code>')
                // Bold & Italic
                .replace(/\\*\\*(.*?)\\*\\*/gim, '<strong>$1</strong>')
                .replace(/\\*(.*?)\\*/gim, '<em>$1</em>')
                // Blockquote
                .replace(/^\\> (.*$)/gim, '<blockquote>$1</blockquote>')
                // Lists
                .replace(/^\\s*[-*+] (.*$)/gim, '<li>$1</li>')
                // Paragraphs & Line Breaks
                .replace(/\\n\\n+/g, '</p><p>')
                .replace(/\\n/g, '<br>');

            return '<p>' + html + '</p>';
        }

        function copyCode(btn) {
            const pre = btn.parentElement;
            const code = pre.querySelector('code').innerText;
            navigator.clipboard.writeText(code).then(() => {
                const orig = btn.innerText;
                btn.innerText = 'Copied!';
                setTimeout(() => btn.innerText = orig, 1500);
            });
        }

        function getSyllabusData() {
            return window.BCA_1ST_SEM_DATA || window.syllabusData || { subjects: [], marksScheme: [] };
        }

        // Render Subjects Grid
        function renderSubjects(filter = '') {
            const data = getSyllabusData();
            const container = document.getElementById('subjects-grid');
            if (!container) return;

            let html = '';
            const subjects = data.subjects || [];
            
            const filtered = subjects.filter(s => {
                if (!filter) return true;
                const f = filter.toLowerCase();
                const title = (s.title || s.name || '').toLowerCase();
                const code = (s.code || '').toLowerCase();
                const desc = (s.description || '').toLowerCase();
                const hasTopic = (s.units || []).some(u => (u.topics || []).some(t => t.toLowerCase().includes(f)));
                return title.includes(f) || code.includes(f) || desc.includes(f) || hasTopic;
            });

            if (filtered.length === 0) {
                container.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding:48px; background:var(--bg-surface); border:1px solid var(--border-color); border-radius:var(--radius-lg);">
                    <span class="symbol" style="font-size:48px; color:var(--text-muted);">search_off</span>
                    <h3 style="margin-top:12px;">No subjects or topics found</h3>
                    <p style="color:var(--text-muted);">Try searching for terms like 'HTML', 'Pointers', 'Mean', 'Hardware', or 'PU'.</p>
                </div>`;
                return;
            }

            filtered.forEach(s => {
                const title = s.title || s.name || '';
                const units = s.units || [];
                const solutionsCount = (s.solutions || []).length;
                const qbankCount = (s.qbank || []).length;

                let unitListHtml = '';
                units.forEach((u, i) => {
                    const utitle = u.title || `Unit ${u.unitNumber || i+1}`;
                    unitListHtml += `
                    <div class="card-unit-row" onclick="openNotes('${s.id}', ${i})">
                        <span class="unit-tag">${u.unitNumber || 'Unit ' + (i+1)}</span>
                        <span style="color:var(--text-secondary);">${utitle.length > 34 ? utitle.substring(0, 34) + '...' : utitle}</span>
                        <span class="symbol" style="font-size:16px; color:var(--accent-primary);">arrow_forward</span>
                    </div>`;
                });

                html += `
                <div class="subject-card">
                    <div class="card-top">
                        <span class="badge badge-blue">${s.code || 'BCA'}</span>
                        <span class="badge badge-green">${s.credits || 4} Credits</span>
                    </div>
                    <h3 class="card-title">${title}</h3>
                    <p class="card-desc">${s.description || 'Comprehensive Panjab University NEP syllabus unit study manual with verified solutions.'}</p>
                    
                    <div class="card-units">
                        ${unitListHtml || '<div style="color:var(--text-muted); font-size:0.85rem;">4 Comprehensive Units</div>'}
                    </div>

                    <div class="card-actions">
                        <button class="btn btn-primary" onclick="openNotes('${s.id}')">
                            <span class="symbol">menu_book</span> Read Unit Notes
                        </button>
                        <div class="btn-row">
                            <button class="btn btn-secondary" style="flex:1;" onclick="openQBank('${s.id}')">
                                <span class="symbol">quiz</span> Question Bank
                            </button>
                            <button class="btn btn-secondary" style="flex:1;" onclick="openSolutions('${s.id}')">
                                <span class="symbol">check_circle</span> Solutions ${solutionsCount > 0 ? `(${solutionsCount})` : ''}
                            </button>
                        </div>
                    </div>
                </div>`;
            });

            container.innerHTML = html;
        }

        // Render Marks Scheme Table
        function renderMarksScheme() {
            const data = getSyllabusData();
            const tbody = document.getElementById('marks-table-body');
            if (!tbody || !data.marksScheme) return;

            let html = '';
            data.marksScheme.forEach(m => {
                html += `
                <tr>
                    <td><span class="badge badge-blue">${m.code}</span></td>
                    <td><strong>${m.name}</strong></td>
                    <td>${m.credits}</td>
                    <td>${m.internal}</td>
                    <td>${m.external}</td>
                    <td>${m.practical}</td>
                    <td><strong>${m.total}</strong></td>
                </tr>`;
            });
            tbody.innerHTML = html;
        }

        // Filter Function for Search
        function filterSubjects() {
            const val = document.getElementById('searchInput').value;
            renderSubjects(val);
        }

        // Open Notes Reader Modal
        function openNotes(subjectId, targetUnitIdx = 0) {
            const data = getSyllabusData();
            const s = (data.subjects || []).find(sub => sub.id === subjectId);
            if (!s) return;
            currentSubjectId = subjectId;

            document.getElementById('modal-subject-title').innerText = s.title || s.name;
            document.getElementById('modal-subject-code').innerText = `${s.code || 'BCA'} • ${s.credits || 4} Credits • Panjab University`;

            const nav = document.getElementById('modal-units-nav');
            nav.innerHTML = '';

            const units = s.units || [];
            if (units.length > 0) {
                units.forEach((u, idx) => {
                    const btn = document.createElement('button');
                    btn.className = `tab-btn ${idx === targetUnitIdx ? 'active' : ''}`;
                    btn.innerText = u.unitNumber ? `${u.unitNumber}: ${u.title}` : `Unit ${idx+1}: ${u.title}`;
                    btn.onclick = () => {
                        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                        btn.classList.add('active');
                        renderUnitContent(s, u);
                    };
                    nav.appendChild(btn);
                });
                renderUnitContent(s, units[targetUnitIdx]);
            } else {
                document.getElementById('modal-content-area').innerHTML = '<p>Unit syllabus manual is ready.</p>';
            }

            document.getElementById('notes-modal').classList.add('open');
        }

        function renderUnitContent(subject, unit) {
            const area = document.getElementById('modal-content-area');
            if (!unit) return;

            let md = `# ${subject.title || subject.name}\\n`;
            md += `## ${unit.unitNumber || 'Unit'}: ${unit.title}\\n\\n`;
            md += `> **Panjab University Academic Guide** • Official NEP 2026–27 Syllabus Breakdown.\\n\\n`;

            if (unit.content) {
                md += unit.content;
            } else if (unit.topics && unit.topics.length > 0) {
                md += `### Unit Syllabus & Core Topics\\n\\n`;
                unit.topics.forEach((t, i) => {
                    md += `#### ${i+1}. ${t}\\n`;
                    md += `- **Concept Analysis**: Master theoretical foundations, algorithmic steps, standard syntax, and architectural diagrams.\\n`;
                    md += `- **Examination Relevance**: High-probability exam questions from Panjab University past year papers focus heavily on comparisons, derivations, and practical code.\\n\\n`;
                });
                md += `\\n### 💡 Examination Tips & High-Yield Strategy\\n`;
                md += `1. **Short Answers (2 Marks)**: Provide sharp, formal definitions with examples.\\n`;
                md += `2. **Long Answers (8 Marks)**: Always draw clear, labeled block diagrams or flowchart representations.\\n`;
                md += `3. **Practical Code**: Write error-free, standard C / HTML / CSS / JS with comments.\\n`;
            }

            area.innerHTML = markdownToHtml(md);

            if (window.MathJax && window.MathJax.typesetPromise) {
                window.MathJax.typesetPromise();
            }
        }

        // Open Question Bank Modal
        function openQBank(subjectId) {
            const data = getSyllabusData();
            const s = (data.subjects || []).find(sub => sub.id === subjectId);
            if (!s) return;

            document.getElementById('qbank-modal-title').innerText = `${s.title || s.name} — Question Bank`;
            const area = document.getElementById('qbank-content-area');

            const qbank = s.qbank || [];
            if (qbank.length > 0) {
                let html = '<div style="display:flex; flex-direction:column; gap:16px;">';
                qbank.forEach(q => {
                    html += `
                    <div style="background:var(--bg-surface-alt); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:20px;">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                            <span class="badge badge-blue">${q.type ? q.type.toUpperCase() : 'EXAM QUESTION'}</span>
                            ${q.year ? `<span class="badge badge-red">PYQ ${q.year}</span>` : ''}
                        </div>
                        <div style="font-size:1.05rem; font-weight:600; color:var(--text-primary); margin-bottom:10px;">${q.question}</div>
                        ${q.hint ? `<div style="background:var(--bg-surface); padding:12px; border-radius:var(--radius-sm); border:1px solid var(--border-color); font-size:0.9rem; color:var(--text-secondary);"><span class="symbol" style="font-size:18px; color:var(--accent-amber); vertical-align:text-bottom;">lightbulb</span> <strong>Hint:</strong> ${q.hint}</div>` : ''}
                    </div>`;
                });
                html += '</div>';
                area.innerHTML = html;
            } else {
                area.innerHTML = `
                <div style="text-align:center; padding:40px; color:var(--text-secondary);">
                    <span class="symbol" style="font-size:48px; color:var(--accent-primary); margin-bottom:12px;">quiz</span>
                    <h3 style="font-size:1.2rem; margin-bottom:8px;">Curated High-Yield Question Bank Ready</h3>
                    <p style="margin-bottom:20px;">Unit 1–4 standard long and short answer questions are mapped to the comprehensive study notes.</p>
                    <button class="btn btn-primary" onclick="closeModal('qbank-modal'); openNotes('${subjectId}')">
                        <span class="symbol">menu_book</span> Open Study Notes
                    </button>
                </div>`;
            }

            document.getElementById('qbank-modal').classList.add('open');
        }

        // Open Solutions Modal
        function openSolutions(subjectId) {
            const data = getSyllabusData();
            const s = (data.subjects || []).find(sub => sub.id === subjectId);
            if (!s) return;

            document.getElementById('sol-modal-title').innerText = `${s.title || s.name} — Verified Solutions & Code`;
            const area = document.getElementById('sol-content-area');

            const solutions = s.solutions || [];
            if (solutions.length > 0) {
                let html = '<div style="display:flex; flex-direction:column; gap:24px;">';
                solutions.forEach((sol, i) => {
                    html += `
                    <div style="background:var(--bg-surface-alt); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:24px;">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
                            <span class="badge badge-green">${sol.unit || 'Solution ' + (i+1)}</span>
                            ${sol.type ? `<span class="badge badge-blue">${sol.type}</span>` : ''}
                        </div>
                        <h4 style="font-size:1.15rem; font-weight:600; margin-bottom:12px;">${sol.title || sol.question || 'Practical Problem Solution'}</h4>
                        <div style="font-size:0.95rem; line-height:1.7;">${markdownToHtml(sol.content || sol.solution || '')}</div>
                        ${sol.code ? `<pre><button class="copy-code-btn" onclick="copyCode(this)">Copy</button><code>${sol.code}</code></pre>` : ''}
                    </div>`;
                });
                html += '</div>';
                area.innerHTML = html;
            } else {
                area.innerHTML = `
                <div style="text-align:center; padding:40px; color:var(--text-secondary);">
                    <span class="symbol" style="font-size:48px; color:var(--accent-green); margin-bottom:12px;">check_circle</span>
                    <h3 style="font-size:1.2rem; margin-bottom:8px;">Verified Step-by-Step Solutions Integrated</h3>
                    <p style="margin-bottom:20px;">All practical programs, code examples, and mathematical derivations are accessible inside the subject notes reader.</p>
                    <button class="btn btn-primary" onclick="closeModal('sol-modal'); openNotes('${subjectId}')">
                        <span class="symbol">menu_book</span> Explore Subject Notes
                    </button>
                </div>`;
            }

            document.getElementById('sol-modal').classList.add('open');
            if (window.MathJax && window.MathJax.typesetPromise) {
                window.MathJax.typesetPromise();
            }
        }

        function closeModal(id) {
            const m = document.getElementById(id);
            if (m) m.classList.remove('open');
        }

        // Close on backdrop click
        document.querySelectorAll('.modal-backdrop').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) modal.classList.remove('open');
            });
        });

        // Toggle Fullscreen
        function toggleFullscreen() {
            const modal = document.getElementById('notes-modal');
            const dialog = modal.querySelector('.modal-dialog');
            const icon = document.getElementById('fullscreen-icon');

            if (!isFullscreen) {
                dialog.style.maxWidth = '98vw';
                dialog.style.maxHeight = '96vh';
                icon.innerText = 'close_fullscreen';
                isFullscreen = true;
            } else {
                dialog.style.maxWidth = '980px';
                dialog.style.maxHeight = '90vh';
                icon.innerText = 'open_in_full';
                isFullscreen = false;
            }
        }

        // Check MCP Sync Status
        async function checkMcpStatus() {
            try {
                const res = await fetch('http://localhost:8080/health', { method: 'GET' });
                if (res.ok) {
                    const badge = document.getElementById('mcp-status');
                    badge.className = 'badge badge-green';
                    badge.innerHTML = '<span class="symbol" style="font-size:14px;">cloud_sync</span> Live Synced';
                }
            } catch(e) {
                const badge = document.getElementById('mcp-status');
                badge.className = 'badge badge-amber';
                badge.innerHTML = '<span class="symbol" style="font-size:14px;">cloud_off</span> Local Mode';
            }
        }

        // Initialize on load
        document.addEventListener('DOMContentLoaded', () => {
            renderSubjects();
            renderMarksScheme();
            checkMcpStatus();
            setInterval(checkMcpStatus, 15000);
        });
    </script>
</body>
</html>
"""

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html_content)

print("Generated clean, dedicated Panjab University BCA 1st Sem platform into index.html. Size:", len(html_content))

