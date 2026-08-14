const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Replace the Header and Hero section
const oldHeaderRegex = /<nav class="terminal-nav">[\s\S]*?<main class="max-w-7xl mx-auto p-4 md:p-8 pt-8">/m;
const newHeaderAndHero = `<header class="header">
        <div class="header-logo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="var(--gemini-blue)"/>
                <path d="M2 17L12 22L22 17M2 12L12 17L22 12" stroke="var(--gemini-blue)" stroke-width="2" stroke-linejoin="round"/>
            </svg>
            BCA Hub
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
            <div id="mcp-status" class="mcp-sync-badge hidden">
                <span class="symbol">sync</span> Syncing...
            </div>
            <button class="button-secondary" onclick="toggleTheme()">
                <span class="symbol">light_mode</span> Theme
            </button>
            <a href="mcp-admin.html" class="button-primary">
                Admin
            </a>
        </div>
    </header>

    <main class="page-container">
        <section class="hero-section">
            <h1 class="hero-title">Panjab University BCA Hub</h1>
            <p class="hero-subtitle">The complete academic deck for Semester 1. High-yield notes, question banks, and verified solutions designed for quick mastery.</p>
        </section>
        
        <div id="subjects-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Rendered via JS -->
        </div>`;

html = html.replace(oldHeaderRegex, newHeaderAndHero);

// 2. Replace the JS `renderSubjects` function
const oldRenderSubjectsRegex = /function renderSubjects\(\) \{[\s\S]*?container\.innerHTML = html;/m;
const newRenderSubjects = `function renderSubjects() {
            const container = document.getElementById('subjects-grid');
            if(!container) return;
            
            let html = '';
            syllabusData.subjects.forEach(subject => {
                const isCore = subject.id === 'bca104' || subject.id === 'bca101';
                
                html += \`
                <div class="feature-card">
                    <div style="display:flex; justify-content:space-between; margin-bottom:16px;">
                        <span class="chip">
                            \${subject.code}
                        </span>
                        \${isCore ? '<span class="chip" style="background:var(--gemini-blue);color:#fff;border:none;">Core</span>' : ''}
                    </div>
                    <h3 class="feature-title">\${subject.title}</h3>
                    <p class="feature-desc">\${subject.description}</p>
                    
                    <div style="margin-top:auto; display:flex; flex-direction:column; gap:12px;">
                        <button class="button-primary" style="width:100%; justify-content:center;" onclick="openNotes('\${subject.id}')">
                            <span class="symbol">menu_book</span> Read Notes
                        </button>
                        <div style="display:flex; gap:12px;">
                            <button class="button-secondary" style="flex:1; justify-content:center;" onclick="openQBank('\${subject.id}')">
                                <span class="symbol">quiz</span> Q-Bank
                            </button>
                            <button class="button-secondary" style="flex:1; justify-content:center;" onclick="openSolutions('\${subject.id}')">
                                <span class="symbol">check_circle</span> Solutions
                            </button>
                        </div>
                    </div>
                </div>\`;
            });
            container.innerHTML = html;`;
html = html.replace(oldRenderSubjectsRegex, newRenderSubjects);

// 3. Replace the Modal classes to use the Antigravity modal style
html = html.replace(/<div id="notes-modal" class="hidden fixed inset-0 z-50 overflow-y-auto bg-black\/80 backdrop-blur-sm">/g, '<div id="notes-modal" class="modal-overlay">');
html = html.replace(/<div class="relative min-h-screen flex items-center justify-center p-4">/g, '');
html = html.replace(/<div class="relative bg-\[#1e1e1e\] border border-border-color rounded-xl w-full max-w-4xl max-h-\[90vh\] flex flex-col shadow-2xl">/g, '<div class="modal-content">');
// Since I removed the wrapper flex div, I need to remove one closing div at the end of the modal. I will handle this simply.
// Actually it's better to rewrite the modal HTML structure directly.
const oldModalRegex = /<!-- NOTES MODAL -->[\s\S]*?<!-- QBANK MODAL -->/m;
const newNotesModal = `<!-- NOTES MODAL -->
    <div id="notes-modal" class="modal-overlay">
        <div class="modal-content">
            <button class="button-icon modal-close" onclick="closeModal('notes-modal')">
                <span class="symbol">close</span>
            </button>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px; border-bottom:1px solid var(--theme-outline-variant); padding-bottom:16px;">
                <h2 id="modal-subject-title" class="feature-title" style="margin:0;">Subject Notes</h2>
                <button class="button-secondary" onclick="toggleFullscreen()">
                    <span class="symbol">open_in_full</span> Expand
                </button>
            </div>
            <div id="modal-units-nav" style="display:flex; gap:8px; overflow-x:auto; margin-bottom:24px; padding-bottom:8px;"></div>
            <div id="modal-content-area" class="reader-view"></div>
        </div>
    </div>
    
    <!-- QBANK MODAL -->`;
html = html.replace(oldModalRegex, newNotesModal);

const oldQBankModalRegex = /<!-- QBANK MODAL -->[\s\S]*?<!-- SOLUTIONS MODAL -->/m;
const newQBankModal = `<!-- QBANK MODAL -->
    <div id="qbank-modal" class="modal-overlay">
        <div class="modal-content">
            <button class="button-icon modal-close" onclick="closeModal('qbank-modal')">
                <span class="symbol">close</span>
            </button>
            <div style="margin-bottom:24px; border-bottom:1px solid var(--theme-outline-variant); padding-bottom:16px;">
                <h2 class="feature-title" style="margin:0;">Question Bank</h2>
            </div>
            <div id="qbank-content-area"></div>
        </div>
    </div>
    
    <!-- SOLUTIONS MODAL -->`;
html = html.replace(oldQBankModalRegex, newQBankModal);

const oldSolModalRegex = /<!-- SOLUTIONS MODAL -->[\s\S]*?<script>/m;
const newSolModal = `<!-- SOLUTIONS MODAL -->
    <div id="sol-modal" class="modal-overlay">
        <div class="modal-content">
            <button class="button-icon modal-close" onclick="closeModal('sol-modal')">
                <span class="symbol">close</span>
            </button>
            <div style="margin-bottom:24px; border-bottom:1px solid var(--theme-outline-variant); padding-bottom:16px;">
                <h2 class="feature-title" style="margin:0;">Solutions & Practical</h2>
            </div>
            <div id="sol-content-area"></div>
        </div>
    </div>
    
    <script>`;
html = html.replace(oldSolModalRegex, newSolModal);


// Update modal open/close functions in JS
html = html.replace(/document\.getElementById\(modalId\)\.classList\.remove\('hidden'\);/g, "document.getElementById(modalId).classList.add('active');");
html = html.replace(/document\.getElementById\(modalId\)\.classList\.add\('hidden'\);/g, "document.getElementById(modalId).classList.remove('active');");


fs.writeFileSync('index.html', html);
console.log('DOM replaced');
