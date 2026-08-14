import re
from bs4 import BeautifulSoup

with open("provided_design.html", "r", encoding="utf-8") as f:
    html = f.read()

soup = BeautifulSoup(html, "html.parser")

# 1. Update Title
if soup.title:
    soup.title.string = "Panjab University BCA 1st Sem Hub | Google Antigravity"

# 2. Add MathJax and syllabus-data.js to head if not present
head = soup.find("head")
if head:
    # Check if syllabus-data.js exists
    if not head.find("script", src="syllabus-data.js"):
        script_data = soup.new_tag("script", src="syllabus-data.js")
        head.append(script_data)
    
    # Add MathJax
    mathjax_config = soup.new_tag("script")
    mathjax_config.string = """
    window.MathJax = {
        tex: { inlineMath: [['$', '$'], ['\\\\(', '\\\\)']], displayMath: [['$$', '$$'], ['\\\\[', '\\\\]']] },
        svg: { fontCache: 'global' }
    };
    """
    head.append(mathjax_config)
    mathjax_script = soup.new_tag("script", id="MathJax-script", src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js", **{"async": "true"})
    head.append(mathjax_script)

    # Add custom modal & reader CSS that respects Antigravity variables
    modal_style = soup.new_tag("style")
    modal_style.string = """
    /* Modal Overlay & Antigravity Reader Styles */
    .modal-overlay {
        position: fixed;
        inset: 0;
        background: rgba(18, 19, 23, 0.7);
        backdrop-filter: blur(8px);
        z-index: 10000;
        display: none;
        align-items: center;
        justify-content: center;
        padding: 24px;
        opacity: 0;
        transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .modal-overlay.active {
        display: flex;
        opacity: 1;
    }
    .modal-card {
        background: var(--theme-surface-surface, #ffffff);
        border: 1px solid var(--theme-outline-variant, #e1e3e8);
        border-radius: var(--shape-corner-xl, 24px);
        width: 100%;
        max-width: 960px;
        max-height: 88vh;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        box-shadow: 0 24px 48px rgba(0,0,0,0.15);
        transform: translateY(20px);
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .modal-overlay.active .modal-card {
        transform: translateY(0);
    }
    .modal-header {
        padding: 20px 28px;
        border-bottom: 1px solid var(--theme-outline-variant, #e1e3e8);
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: var(--theme-surface-surface-container, #f8f9fa);
    }
    .modal-body {
        padding: 28px;
        overflow-y: auto;
        flex: 1;
        font-family: var(--font-sans, 'Google Sans Flex', sans-serif);
        color: var(--theme-surface-on-surface, #121317);
        line-height: 1.7;
    }
    .modal-units-nav {
        display: flex;
        gap: 8px;
        overflow-x: auto;
        padding-bottom: 12px;
        margin-bottom: 20px;
        border-bottom: 1px solid var(--theme-outline-variant, #e1e3e8);
    }
    .unit-tab-btn {
        padding: 6px 14px;
        border-radius: 999px;
        border: 1px solid var(--theme-outline-variant, #e1e3e8);
        background: var(--theme-surface-surface, #ffffff);
        color: var(--theme-surface-on-surface-variant, #45474d);
        font-family: var(--font-mono, 'Google Sans Code', monospace);
        font-size: 0.82rem;
        cursor: pointer;
        transition: all 0.2s;
        white-space: nowrap;
    }
    .unit-tab-btn.active, .unit-tab-btn:hover {
        background: var(--theme-surface-on-surface, #121317);
        color: #ffffff;
        border-color: var(--theme-surface-on-surface, #121317);
    }
    .reader-markdown h1, .reader-markdown h2, .reader-markdown h3 {
        margin-top: 1.5em;
        margin-bottom: 0.6em;
        font-weight: 500;
        color: var(--theme-surface-on-surface, #121317);
        letter-spacing: -0.01em;
    }
    .reader-markdown p {
        margin-bottom: 1.2em;
    }
    .reader-markdown ul, .reader-markdown ol {
        padding-left: 24px;
        margin-bottom: 1.2em;
    }
    .reader-markdown li {
        margin-bottom: 0.4em;
    }
    .reader-markdown pre {
        background: var(--theme-surface-surface-container, #f8f9fa);
        border: 1px solid var(--theme-outline-variant, #e1e3e8);
        border-radius: 12px;
        padding: 16px;
        overflow-x: auto;
        margin-bottom: 1.4em;
        font-family: var(--font-mono, 'Google Sans Code', monospace);
        font-size: 0.88rem;
    }
    .reader-markdown code {
        font-family: var(--font-mono, 'Google Sans Code', monospace);
        background: var(--theme-surface-surface-container, #f8f9fa);
        padding: 2px 6px;
        border-radius: 6px;
        font-size: 0.9em;
    }
    .reader-markdown blockquote {
        border-left: 4px solid #3186FF;
        padding-left: 16px;
        color: var(--theme-surface-on-surface-variant, #45474d);
        font-style: italic;
        margin: 1.5em 0;
    }
    .mcp-pill {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 4px 12px;
        border-radius: 999px;
        font-family: var(--font-mono, 'Google Sans Code', monospace);
        font-size: 0.78rem;
        background: #e6f4ea;
        color: #137333;
        font-weight: 500;
    }
    .mcp-pill.disconnected {
        background: #fce8e6;
        color: #c5221f;
    }
    """
    head.append(modal_style)

# 3. Update Header Navigation Links
nav = soup.find("nav", class_="call-to-action--nav")
if nav:
    # Replace subnav links
    for a in nav.find_all("a", class_="call-to-action"):
        text = a.get_text(strip=True)
        if "Product" in text:
            a.string = "Subjects"
            a["href"] = "#subjects"
        elif "Use Cases" in text:
            a.string = "Question Bank"
            a["href"] = "#qbank"
        elif "Resources" in text:
            a.string = "Solutions & Code"
            a["href"] = "#solutions"

# Update header action button
header_actions = soup.find("div", class_="header-actions")
if header_actions:
    admin_btn = header_actions.find("a", class_="button-primary")
    if admin_btn:
        admin_btn["href"] = "mcp-admin.html"
        span = admin_btn.find("span")
        if span:
            span.string = "MCP Admin"
        else:
            admin_btn.string = "MCP Admin"

# 4. Update Hero Typed Headline and Subtitle
typed_content = soup.find("span", class_="typed-content")
if typed_content:
    typed_content.string = "Panjab University BCA 1st Semester Academic Deck"

visually_hidden = soup.find("span", class_="visually-hidden")
if visually_hidden:
    visually_hidden.string = "Panjab University BCA 1st Semester Academic Deck"

# Update hero CTA buttons
welcome_cta = soup.find("div", class_="welcome-cta")
if welcome_cta:
    p_btn = welcome_cta.find("a", class_="button-primary")
    if p_btn:
        p_btn["href"] = "#subjects"
        span = p_btn.find("span")
        if span:
            span.string = "Explore Subjects"
    s_btn = welcome_cta.find("a", class_="button-secondary")
    if s_btn:
        s_btn["href"] = "mcp-admin.html"
        span = s_btn.find("span")
        if span:
            span.string = "MCP Admin Deck"

# 5. Insert Subjects / Feature Explorer Dynamic Container & ID
feat_section = soup.find("section", class_="feature-explorer-section")
if feat_section:
    feat_section["id"] = "subjects"

# 6. Insert Use Cases / Question Bank Section ID
use_cases = soup.find("section", class_="landing-use-case-section")
if use_cases:
    use_cases["id"] = "qbank"
    h2 = use_cases.find("h2", class_="heading-4")
    if h2:
        spans = h2.find_all("span")
        if len(spans) >= 2:
            spans[0].string = "High-Yield Question Bank"
            spans[1].string = "Past Year Exam Questions & Solutions"
    p = use_cases.find("p", class_="body")
    if p:
        p.string = "Comprehensive collection of Unit 1–4 examination questions, previous year questions (PYQs), and model answers aligned with the Panjab University NEP curriculum."

# 7. Insert Solutions Section ID
sol_section = soup.find("section", class_="try-solutions-section")
if sol_section:
    sol_section["id"] = "solutions"
    heading = sol_section.find("h2") or sol_section.find("h3") or sol_section.find("p", class_="headline-3")
    if heading:
        heading.string = "Verified Practical Solutions & Code"

# 8. Add Modals & Interactive Scripts before </body>
body = soup.find("body")
if body:
    # Add Modal HTML
    modal_html = """
    <!-- NOTES READER MODAL -->
    <div id="notes-modal" class="modal-overlay">
        <div class="modal-card">
            <div class="modal-header">
                <div>
                    <h3 id="modal-subject-title" style="font-size:1.25rem; font-weight:500; margin:0;">Subject Notes</h3>
                    <p id="modal-subject-code" style="font-size:0.8rem; font-family:var(--font-mono); color:var(--theme-surface-on-surface-variant); margin:0;">BCA-101</p>
                </div>
                <div style="display:flex; gap:12px; align-items:center;">
                    <button class="call-to-action button button-secondary" style="padding:6px 14px; font-size:0.85rem;" onclick="toggleFullscreen()">
                        Fullscreen
                    </button>
                    <button class="call-to-action button button-secondary" style="padding:6px 14px; font-size:0.85rem;" onclick="closeModal('notes-modal')">
                        ✕ Close
                    </button>
                </div>
            </div>
            <div class="modal-body">
                <div id="modal-units-nav" class="modal-units-nav"></div>
                <div id="modal-content-area" class="reader-markdown"></div>
            </div>
        </div>
    </div>

    <!-- QBANK MODAL -->
    <div id="qbank-modal" class="modal-overlay">
        <div class="modal-card">
            <div class="modal-header">
                <h3 id="qbank-modal-title" style="font-size:1.25rem; font-weight:500; margin:0;">Question Bank</h3>
                <button class="call-to-action button button-secondary" style="padding:6px 14px; font-size:0.85rem;" onclick="closeModal('qbank-modal')">
                    ✕ Close
                </button>
            </div>
            <div class="modal-body">
                <div id="qbank-content-area"></div>
            </div>
        </div>
    </div>

    <!-- SOLUTIONS MODAL -->
    <div id="sol-modal" class="modal-overlay">
        <div class="modal-card">
            <div class="modal-header">
                <h3 id="sol-modal-title" style="font-size:1.25rem; font-weight:500; margin:0;">Solutions & Practical Codes</h3>
                <button class="call-to-action button button-secondary" style="padding:6px 14px; font-size:0.85rem;" onclick="closeModal('sol-modal')">
                    ✕ Close
                </button>
            </div>
            <div class="modal-body">
                <div id="sol-content-area" class="reader-markdown"></div>
            </div>
        </div>
    </div>
    """
    body.append(BeautifulSoup(modal_html, "html.parser"))

    # Add Application Logic JS
    app_js = soup.new_tag("script")
    app_js.string = """
    let currentSubjectId = null;
    let isFullscreen = false;

    // Simple Markdown Parser
    function markdownToHtml(md) {
        if (!md) return '';
        let html = md
            .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            // Headers
            .replace(/^### (.*$)/gim, '<h3>$1</h3>')
            .replace(/^## (.*$)/gim, '<h2>$1</h2>')
            .replace(/^# (.*$)/gim, '<h1>$1</h1>')
            // Code blocks
            .replace(/```([a-z]*)\\n([\\s\\S]*?)\\n```/gim, '<pre><code>$2</code></pre>')
            // Inline code
            .replace(/`([^`]+)`/gim, '<code>$1</code>')
            // Bold
            .replace(/\\*\\*(.*?)\\*\\*/gim, '<strong>$1</strong>')
            // Italic
            .replace(/\\*(.*?)\\*/gim, '<em>$1</em>')
            // Blockquotes
            .replace(/^\\> (.*$)/gim, '<blockquote>$1</blockquote>')
            // Lists
            .replace(/^\\s*[-*+] (.*$)/gim, '<li>$1</li>')
            // Linebreaks & paragraphs
            .replace(/\\n\\n+/g, '</p><p>')
            .replace(/\\n/g, '<br>');
        return '<p>' + html + '</p>';
    }

    function getSyllabusData() {
        return window.BCA_1ST_SEM_DATA || window.syllabusData || { subjects: [] };
    }

    function openNotes(subjectId) {
        const data = getSyllabusData();
        const subject = data.subjects ? data.subjects.find(s => s.id === subjectId) : null;
        if (!subject) return;
        currentSubjectId = subjectId;

        document.getElementById('modal-subject-title').innerText = subject.title || subject.name;
        document.getElementById('modal-subject-code').innerText = (subject.code || '') + (subject.credits ? ` • ${subject.credits} Credits` : '');

        const nav = document.getElementById('modal-units-nav');
        nav.innerHTML = '';

        if (subject.units && subject.units.length > 0) {
            subject.units.forEach((u, i) => {
                const btn = document.createElement('button');
                btn.className = `unit-tab-btn ${i === 0 ? 'active' : ''}`;
                btn.innerText = u.title || `Unit ${u.unitNumber || i+1}`;
                btn.onclick = () => {
                    document.querySelectorAll('.unit-tab-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    renderUnit(u);
                };
                nav.appendChild(btn);
            });
            renderUnit(subject.units[0]);
        } else {
            document.getElementById('modal-content-area').innerHTML = '<p>Comprehensive unit notes are being compiled for this subject.</p>';
        }

        const modal = document.getElementById('notes-modal');
        modal.classList.add('active');
    }

    function renderUnit(unit) {
        const area = document.getElementById('modal-content-area');
        if (!unit) return;
        let content = unit.content || unit.summary || unit.description || '';
        if (unit.topics && unit.topics.length > 0) {
            content += '\\n\\n### Key Syllabus Topics\\n' + unit.topics.map(t => `- **${t.name || t}**: ${t.details || ''}`).join('\\n');
        }
        area.innerHTML = markdownToHtml(content);
        if (window.MathJax && window.MathJax.typesetPromise) {
            window.MathJax.typesetPromise();
        }
    }

    function openQBank(subjectId) {
        const data = getSyllabusData();
        const subject = data.subjects ? data.subjects.find(s => s.id === subjectId) : null;
        if (!subject) return;

        document.getElementById('qbank-modal-title').innerText = `${subject.title || subject.name} — Question Bank`;
        const area = document.getElementById('qbank-content-area');

        if (subject.qbank && subject.qbank.length > 0) {
            let html = '<div style="display:flex; flex-direction:column; gap:16px;">';
            subject.qbank.forEach((q, i) => {
                html += `
                <div style="background:var(--theme-surface-surface-container, #f8f9fa); border:1px solid var(--theme-outline-variant, #e1e3e8); border-radius:16px; padding:20px;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                        <span style="font-family:var(--font-mono); font-size:0.75rem; background:#3186FF; color:#fff; padding:3px 10px; border-radius:999px;">${q.type ? q.type.toUpperCase() : 'EXAM'}</span>
                        ${q.year ? `<span style="font-family:var(--font-mono); font-size:0.75rem; color:#d93025; font-weight:600;">PYQ ${q.year}</span>` : ''}
                    </div>
                    <div style="font-size:1.05rem; font-weight:500; margin-bottom:8px;">${q.question}</div>
                    ${q.hint ? `<div style="font-size:0.9rem; color:var(--theme-surface-on-surface-variant); margin-top:8px;">💡 <strong>Hint:</strong> ${q.hint}</div>` : ''}
                </div>`;
            });
            html += '</div>';
            area.innerHTML = html;
        } else {
            area.innerHTML = `
            <div style="padding:24px; text-align:center; color:var(--theme-surface-on-surface-variant);">
                <p>Standard high-yield questions and previous year examination patterns are ready in the curriculum deck.</p>
                <button class="call-to-action button button-primary" style="margin-top:16px;" onclick="closeModal('qbank-modal'); openNotes('${subjectId}')">
                    Open Unit Notes
                </button>
            </div>`;
        }

        document.getElementById('qbank-modal').classList.add('active');
    }

    function openSolutions(subjectId) {
        const data = getSyllabusData();
        const subject = data.subjects ? data.subjects.find(s => s.id === subjectId) : null;
        if (!subject) return;

        document.getElementById('sol-modal-title').innerText = `${subject.title || subject.name} — Solutions & Practical Codes`;
        const area = document.getElementById('sol-content-area');

        if (subject.solutions && subject.solutions.length > 0) {
            let html = '<div style="display:flex; flex-direction:column; gap:20px;">';
            subject.solutions.forEach(sol => {
                html += `
                <div style="background:var(--theme-surface-surface-container, #f8f9fa); border:1px solid var(--theme-outline-variant, #e1e3e8); border-radius:16px; padding:24px;">
                    <h4 style="font-size:1.15rem; font-weight:500; margin-bottom:12px;">${sol.title}</h4>
                    <div class="reader-markdown">${markdownToHtml(sol.content)}</div>
                </div>`;
            });
            html += '</div>';
            area.innerHTML = html;
        } else {
            area.innerHTML = `
            <div style="padding:24px; text-align:center; color:var(--theme-surface-on-surface-variant);">
                <p>Step-by-step solutions and verified code implementations are integrated in the unit manual.</p>
                <button class="call-to-action button button-primary" style="margin-top:16px;" onclick="closeModal('sol-modal'); openNotes('${subjectId}')">
                    Explore Notes
                </button>
            </div>`;
        }

        document.getElementById('sol-modal').classList.add('active');
        if (window.MathJax && window.MathJax.typesetPromise) {
            window.MathJax.typesetPromise();
        }
    }

    function closeModal(id) {
        const modal = document.getElementById(id);
        if (modal) modal.classList.remove('active');
    }

    function toggleFullscreen() {
        const modal = document.getElementById('notes-modal');
        if (!modal) return;
        const card = modal.querySelector('.modal-card');
        if (!isFullscreen) {
            card.style.maxWidth = '98vw';
            card.style.maxHeight = '96vh';
            isFullscreen = true;
        } else {
            card.style.maxWidth = '960px';
            card.style.maxHeight = '88vh';
            isFullscreen = false;
        }
    }

    // Populate Feature Explorer with Subjects dynamically
    function populateSubjects() {
        const data = getSyllabusData();
        if (!data.subjects || data.subjects.length === 0) return;

        const featureList = document.querySelector('.feature-list');
        if (!featureList) return;

        featureList.innerHTML = '';
        data.subjects.forEach((subj, idx) => {
            const item = document.createElement('div');
            item.className = 'feature-item';
            item.setAttribute('data-astro-cid-hkzvdn3m', '');
            item.setAttribute('data-feature-item', '');

            item.innerHTML = `
            <div class="grid-row" data-astro-cid-hkzvdn3m="" style="align-items:center; padding: 32px 0; border-bottom: 1px solid var(--theme-outline-variant, #e1e3e8);">
                <div class="grid-col col-xs-4 col-md-5" data-astro-cid-hkzvdn3m="">
                    <div class="feature-copy" data-astro-cid-hkzvdn3m="">
                        <div style="display:flex; gap:8px; align-items:center; margin-bottom:12px;">
                            <span class="mcp-pill">${subj.code}</span>
                            ${subj.credits ? `<span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--theme-surface-on-surface-variant);">${subj.credits} Credits</span>` : ''}
                        </div>
                        <span class="heading-4 feature-title" data-astro-cid-hkzvdn3m="" style="display:block; margin-bottom:8px; font-weight:500;">
                            ${subj.title || subj.name}
                        </span>
                        <p class="body feature-description" data-astro-cid-hkzvdn3m="" style="color:var(--theme-surface-on-surface-variant); margin-bottom:20px; line-height:1.6;">
                            ${subj.description || 'Full unit curriculum, conceptual derivations, high-yield examination question banks, and verified solutions.'}
                        </p>
                        <div style="display:flex; gap:12px; flex-wrap:wrap;">
                            <button class="call-to-action button button-primary" onclick="openNotes('${subj.id}')">
                                <span>Read Unit Notes</span>
                            </button>
                            <button class="call-to-action button button-secondary" onclick="openQBank('${subj.id}')">
                                <span>Question Bank</span>
                            </button>
                            <button class="call-to-action button button-secondary" onclick="openSolutions('${subj.id}')">
                                <span>Solutions & Practical</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="grid-col col-xs-4 col-md-6 col-md-offset-1" data-astro-cid-hkzvdn3m="">
                    <div style="background:var(--theme-surface-surface-container, #f8f9fa); border:1px solid var(--theme-outline-variant, #e1e3e8); border-radius:24px; padding:28px;">
                        <h4 style="font-size:1rem; font-family:var(--font-mono); color:var(--theme-surface-on-surface-variant); margin-bottom:16px; text-transform:uppercase; letter-spacing:0.05em;">Curriculum Units (1–4)</h4>
                        <div style="display:flex; flex-direction:column; gap:10px;">
                            ${(subj.units || [1,2,3,4]).map((u, i) => `
                                <div style="display:flex; align-items:center; justify-content:space-between; background:var(--theme-surface-surface, #ffffff); border:1px solid var(--theme-outline-variant, #e1e3e8); border-radius:12px; padding:12px 16px; cursor:pointer;" onclick="openNotes('${subj.id}')">
                                    <span style="font-weight:500; font-size:0.95rem;">${typeof u === 'object' ? u.title : 'Unit ' + u}</span>
                                    <span style="font-size:0.8rem; color:#3186FF; font-family:var(--font-mono);">Read →</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>`;
            featureList.appendChild(item);
        });
    }

    // Check MCP Health
    async function checkMcpStatus() {
        try {
            const res = await fetch('http://localhost:8080/health', { method: 'GET' });
            if (res.ok) {
                const el = document.getElementById('mcp-status');
                if (el) {
                    el.className = 'mcp-pill';
                    el.innerHTML = '● MCP Live Sync Active';
                }
            }
        } catch(e) {
            const el = document.getElementById('mcp-status');
            if (el) {
                el.className = 'mcp-pill disconnected';
                el.innerHTML = '○ MCP Standby';
            }
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        populateSubjects();
        checkMcpStatus();
        setInterval(checkMcpStatus, 15000);
    });
    """
    body.append(app_js)

# Write output to index.html
final_html = str(soup)
with open("index.html", "w", encoding="utf-8") as out:
    out.write(final_html)

print("Generated final index.html using the exact Google Antigravity design! Length:", len(final_html))
