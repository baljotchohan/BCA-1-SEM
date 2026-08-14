/**
 * BCA 1st Semester Academic Hub — Controller & Single Page Application Routing
 * Ultra-robust initialization, instantaneous SPA view transitions,
 * distraction-free reader, MathJax formula rendering, and instant command palette.
 */

let activeSubjectId = 'web-tech';
let activeWorkspaceTab = 'notes';
let currentNoteFilter = 'all';

// --- 1. INTRO ANIMATION & IMMEDIATE FALLBACK ---
const textToType = "Kive A Singhh...";
let charIndex = 0;
let introCompleted = false;

function typeText() {
  if (introCompleted) return;
  const typingEl = document.getElementById('typing-text');
  if (!typingEl) {
    finishIntro();
    return;
  }

  if (charIndex < textToType.length) {
    typingEl.textContent += textToType.charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 40);
  } else {
    setTimeout(finishIntro, 350);
  }
}

function finishIntro() {
  if (introCompleted) return;
  introCompleted = true;

  const overlay = document.getElementById('intro-overlay');
  const mainContent = document.getElementById('main-content');

  if (overlay) {
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 500);
  }

  if (mainContent) {
    mainContent.style.opacity = '1';
  }
  document.body.style.overflow = 'auto';
}

// Allow user to skip intro immediately on click or keypress
function setupIntroSkip() {
  const overlay = document.getElementById('intro-overlay');
  if (overlay) {
    overlay.addEventListener('click', finishIntro);
  }
  window.addEventListener('keydown', (e) => {
    if (!introCompleted && (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter')) {
      finishIntro();
    }
  });

  // Failsafe: Automatically dismiss after 1.8 seconds max
  setTimeout(finishIntro, 1800);
}

// --- 2. THEME CONTROLLER ---
function initTheme() {
  const savedTheme = localStorage.getItem('bca_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeMeta(savedTheme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  const newTheme = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('bca_theme', newTheme);
  updateThemeMeta(newTheme);
}

function updateThemeMeta(theme) {
  const meta = document.getElementById('theme-color-meta');
  if (meta) {
    meta.setAttribute('content', theme === 'dark' ? '#141413' : '#faf9f5');
  }
}

// --- 3. SPA ROUTING & NAVIGATION ---
function handleHashChange() {
  const hash = window.location.hash || '#/';
  if (hash.startsWith('#/subject/')) {
    const parts = hash.replace('#/subject/', '').split('/');
    const subjectId = parts[0];
    const tab = parts[1] || 'notes';
    renderSubjectWorkspace(subjectId, tab);
  } else {
    showDashboardView();
  }
}

function navigateToSubject(subjectId, tab = 'notes') {
  window.location.hash = `#/subject/${subjectId}/${tab}`;
  renderSubjectWorkspace(subjectId, tab);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function navigateToDashboard(e) {
  if (e && e.preventDefault) e.preventDefault();
  window.location.hash = '#/';
  showDashboardView();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showDashboardView() {
  const dashView = document.getElementById('dashboard-view');
  const wsView = document.getElementById('subject-workspace-view');
  if (dashView) dashView.style.display = 'block';
  if (wsView) wsView.style.display = 'none';
  renderDashboardCards();
}

// --- 4. DASHBOARD CARDS RENDERING (ANTHROPIC EDITORIAL STYLE) ---
function renderDashboardCards() {
  const container = document.getElementById('subjects-container');
  if (!container || typeof BCA_1ST_SEM_DATA === 'undefined') return;

  const svgVectors = {
    'web-tech': `
      <svg class="vector-art-svg" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="24" y="32" width="112" height="96" rx="10" stroke="#141413" stroke-width="3" fill="#141413" fill-opacity="0.05"/>
        <line x1="24" y1="56" x2="136" y2="56" stroke="#141413" stroke-width="2.5"/>
        <circle cx="38" cy="44" r="4" fill="#141413"/>
        <circle cx="50" cy="44" r="4" fill="#141413"/>
        <circle cx="62" cy="44" r="4" fill="#141413"/>
        <path d="M50 85L65 72M50 85L65 98M110 85L95 72M110 85L95 98M75 105L85 65" stroke="#cc785c" stroke-width="3.5" stroke-linecap="round"/>
      </svg>`,
    'c-programming': `
      <svg class="vector-art-svg" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="80" cy="80" r="54" stroke="#141413" stroke-width="3.5" fill="#141413" fill-opacity="0.05"/>
        <path d="M102 54C96 48 88 45 80 45C60.67 45 45 60.67 45 80C45 99.33 60.67 115 80 115C88 115 96 112 102 106" stroke="#141413" stroke-width="8" stroke-linecap="round"/>
        <path d="M110 74H124M117 67V81M128 74H142M135 67V81" stroke="#cc785c" stroke-width="3" stroke-linecap="round"/>
      </svg>`,
    'statistics': `
      <svg class="vector-art-svg" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="25" y1="135" x2="140" y2="135" stroke="#141413" stroke-width="3"/>
        <line x1="25" y1="25" x2="25" y2="135" stroke="#141413" stroke-width="3"/>
        <path d="M30 110 C 60 100, 75 40, 135 30" stroke="#141413" stroke-width="3.5" fill="none"/>
        <line x1="45" y1="135" x2="45" y2="105" stroke="#cc785c" stroke-width="2" stroke-dasharray="3 3"/>
        <line x1="85" y1="135" x2="85" y2="55" stroke="#cc785c" stroke-width="2" stroke-dasharray="3 3"/>
        <line x1="125" y1="135" x2="125" y2="32" stroke="#cc785c" stroke-width="2" stroke-dasharray="3 3"/>
      </svg>`,
    'hardware': `
      <svg class="vector-art-svg" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="28" y="28" width="104" height="104" rx="16" fill="#141413" fill-opacity="0.06"/>
        <rect x="48" y="48" width="64" height="64" rx="8" fill="#141413" fill-opacity="0.9"/>
        <path d="M48 64H32M48 80H32M48 96H32M112 64H128M112 80H128M112 96H128M64 48V32M80 48V32M96 48V32M64 112V128M80 112V128M96 112V128" stroke="#141413" stroke-width="3" stroke-linecap="round"/>
        <circle cx="80" cy="80" r="12" fill="#faf9f5"/>
      </svg>`,
    'english': `
      <svg class="vector-art-svg" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M35 125 C 35 125, 48 115, 80 115 C 112 115, 125 125, 125 125 V 45 C 125 45, 112 35, 80 35 C 48 35, 35 45, 35 45 Z" fill="#141413" fill-opacity="0.05" stroke="#141413" stroke-width="3"/>
        <line x1="80" y1="35" x2="80" y2="115" stroke="#141413" stroke-width="3"/>
        <path d="M48 58H68M48 74H68M48 90H62M92 58H112M92 74H112M92 90H106" stroke="#cc785c" stroke-width="2" stroke-linecap="round"/>
      </svg>`,
    'punjabi': `
      <svg class="vector-art-svg" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="80" cy="80" r="50" stroke="#141413" stroke-width="3" fill="#141413" fill-opacity="0.06"/>
        <path d="M50 60 H 110 M 70 60 V 105 M 90 60 V 105 M 70 85 H 90" stroke="#cc785c" stroke-width="4" stroke-linecap="round"/>
      </svg>`,
    'ecommerce': `
      <svg class="vector-art-svg" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="35" y="45" width="90" height="70" rx="8" stroke="#141413" stroke-width="3" fill="#141413" fill-opacity="0.05"/>
        <circle cx="60" cy="125" r="8" fill="#141413"/>
        <circle cx="100" cy="125" r="8" fill="#141413"/>
        <path d="M50 70H110M50 85H90" stroke="#cc785c" stroke-width="3" stroke-linecap="round"/>
      </svg>`
  };

  container.innerHTML = BCA_1ST_SEM_DATA.subjects.map(s => {
    return `
      <div class="EducationSections-module-scss-module__dxNdua__section ${s.bgClass} subject-card-item" id="card-${s.id}">
        <div class="EducationSections-module-scss-module__dxNdua__sectionInner">
          <div class="EducationSections-module-scss-module__dxNdua__contentCtaWrapper">
            <div class="EducationSections-module-scss-module__dxNdua__contentWrapper">
              <span class="subject-code-tag">${s.code} • ${s.credits} Credits • ${s.theoryHours || 30} Theory Hrs</span>
              <h2 class="headline-4 serif">${s.title}</h2>
              <p class="body-1 serif">
                ${s.description}
              </p>
              <div class="topic-tags-row">
                ${(s.tags || []).map(t => `<span class="topic-badge">${t}</span>`).join('')}
              </div>
            </div>

            <!-- 3 Direct Action Buttons on Card -->
            <div class="card-action-bar-3">
              <button class="card-pill-btn btn-notes-pill" onclick="navigateToSubject('${s.id}', 'notes')">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
                <span>Notes</span>
              </button>
              <button class="card-pill-btn btn-qbank-pill" onclick="navigateToSubject('${s.id}', 'questions')">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                <span>Question Bank</span>
              </button>
              <button class="card-pill-btn btn-solution-pill" onclick="navigateToSubject('${s.id}', 'solutions')">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
                <span>Solutions</span>
              </button>
            </div>

            <button class="Button-module-scss-module__f9ZZrG__button Button-module-scss-module__f9ZZrG__large Button-module-scss-module__f9ZZrG__secondary" onclick="navigateToSubject('${s.id}', 'notes')">
              <span class="body-3">Open Subject Workspace →</span>
            </button>
          </div>

          <div class="EducationSections-module-scss-module__dxNdua__illustrationWrapper">
            ${svgVectors[s.id] || ''}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// --- 5. DEDICATED FULL SUBJECT WORKSPACE RENDERING ---
function renderSubjectWorkspace(subjectId, tab = 'notes') {
  if (typeof BCA_1ST_SEM_DATA === 'undefined' || !BCA_1ST_SEM_DATA.subjects) return;

  const subject = BCA_1ST_SEM_DATA.subjects.find(s => s.id === subjectId) || BCA_1ST_SEM_DATA.subjects[0];
  activeSubjectId = subject.id;
  activeWorkspaceTab = tab;
  currentNoteFilter = 'all';

  const dashView = document.getElementById('dashboard-view');
  const wsView = document.getElementById('subject-workspace-view');
  if (dashView) dashView.style.display = 'none';
  if (wsView) {
    wsView.style.display = 'block';
    wsView.classList.remove('view-transition-container');
    void wsView.offsetWidth;
    wsView.classList.add('view-transition-container');
  }

  // Update Breadcrumbs & Hero
  const bcTitle = document.getElementById('ws-breadcrumb-title');
  if (bcTitle) bcTitle.innerText = subject.title;
  
  const codeBadge = document.getElementById('ws-code-badge');
  if (codeBadge) codeBadge.innerText = `${subject.code} • ${subject.type}`;
  
  const creditTag = document.getElementById('ws-credit-tag');
  if (creditTag) creditTag.innerText = `${subject.credits} Credits • ${subject.theoryHours || 30} Theory Hrs`;
  
  const subTitle = document.getElementById('ws-subject-title');
  if (subTitle) subTitle.innerText = subject.title;
  
  const subDesc = document.getElementById('ws-subject-desc');
  if (subDesc) subDesc.innerText = subject.description;

  // Hero Card Color Class
  const heroCard = document.getElementById('ws-hero-card');
  if (heroCard) heroCard.className = `subject-hero-card ${subject.bgClass || 'bg-cactus'}`;

  // Subject Tags
  const tagsRow = document.getElementById('ws-tags-row');
  if (tagsRow) {
    tagsRow.innerHTML = (subject.tags || []).map(t => `<span class="topic-badge">${t}</span>`).join('');
  }

  // Render Sidebar
  renderSidebarSubjectLinks();

  // Render Tabs Content
  renderSubjectUnits(subject);
  renderSubjectNotes(subject);
  renderSubjectQuestions(subject);
  renderSubjectSolutions(subject);

  // Switch to active tab
  switchWorkspaceTab(activeWorkspaceTab);
}

function renderSidebarSubjectLinks() {
  const container = document.getElementById('sidebar-subjects-list');
  if (!container || typeof BCA_1ST_SEM_DATA === 'undefined') return;

  container.innerHTML = BCA_1ST_SEM_DATA.subjects.map(s => `
    <div class="sidebar-subject-item ${s.id === activeSubjectId ? 'active' : ''}" onclick="navigateToSubject('${s.id}', '${activeWorkspaceTab}')">
      <span class="sidebar-subject-name">${s.title}</span>
      <span class="sidebar-subject-code">${s.code.split('-')[0]}</span>
    </div>
  `).join('');
}

function switchWorkspaceTab(tabName) {
  activeWorkspaceTab = tabName;

  // Highlight tab buttons
  document.querySelectorAll('.workspace-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabName);
  });

  // Hide all tab panes
  document.querySelectorAll('.workspace-tab-content').forEach(pane => {
    pane.style.display = 'none';
  });

  // Show target tab pane
  const activePane = document.getElementById(`ws-tab-${tabName}`);
  if (activePane) activePane.style.display = 'block';

  // MathJax re-render for formulas
  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise();
  }
}

// --- 6. WORKSPACE CONTENT RENDERERS ---

// Tab 1: Notes
function renderSubjectNotes(subject) {
  const container = document.getElementById('ws-notes-stream');
  if (!container) return;

  const notes = (subject.notes || []).filter(n => currentNoteFilter === 'all' || n.unit === currentNoteFilter);

  if (!notes || notes.length === 0) {
    container.innerHTML = `
      <div class="empty-state-wrap">
        <p class="empty-title">No notes found for ${currentNoteFilter}.</p>
      </div>`;
    return;
  }

  container.innerHTML = notes.map((n, idx) => `
    <article class="note-card-stream-item" id="note-item-${idx}">
      <header class="note-article-header">
        <div class="note-unit-badge-row">
          <span class="note-unit-pill">${n.unit}</span>
          <span class="note-read-time">${n.readTime || '5 min read'}</span>
          <span class="note-author-pill">Author: ${n.author || 'Baljot Chohan'}</span>
        </div>
        <h2 class="note-stream-title serif">${n.title}</h2>
      </header>

      <div class="note-article-body serif">
        ${formatMarkdown(n.content)}
      </div>

      <footer class="note-article-footer">
        <button class="note-tool-btn" onclick="copyCardContent(this)">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
          <span>Copy Note Content</span>
        </button>
      </footer>
    </article>
  `).join('');
}

function filterNotesByUnit(unitNum, btn) {
  currentNoteFilter = unitNum;
  document.querySelectorAll('.note-filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  const subject = BCA_1ST_SEM_DATA.subjects.find(s => s.id === activeSubjectId);
  if (subject) renderSubjectNotes(subject);

  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise();
  }
}

// Tab 2: Question Bank
function renderSubjectQuestions(subject) {
  const container = document.getElementById('ws-questions-stream');
  if (!container) return;

  const qs = subject.questions || [];
  if (qs.length === 0) {
    container.innerHTML = `<div class="empty-state-wrap"><p class="empty-title">Question bank currently updating for this subject.</p></div>`;
    return;
  }

  container.innerHTML = qs.map((q, idx) => `
    <div class="qbank-card-item">
      <div class="qbank-header-row">
        <div class="flex items-center gap-2">
          <span class="qbank-unit-badge">${q.unit}</span>
          <span class="qbank-type-tag">${q.type}</span>
        </div>
        <span class="qbank-prob-badge">🔥 ${q.probability} Exam Probability</span>
      </div>
      <p class="qbank-question-text serif"><strong>Q${idx + 1}.</strong> ${q.question}</p>
    </div>
  `).join('');
}

// Tab 3: Solutions
function renderSubjectSolutions(subject) {
  const container = document.getElementById('ws-solutions-stream');
  if (!container) return;

  const sols = subject.solutions || [];
  if (sols.length === 0) {
    container.innerHTML = `<div class="empty-state-wrap"><p class="empty-title">Detailed verified solutions will appear here.</p></div>`;
    return;
  }

  container.innerHTML = sols.map(sol => `
    <div class="solution-card-item">
      <div class="solution-header-row">
        <span class="solution-unit-badge">${sol.unit}</span>
        <button class="solution-copy-btn" onclick="copyCardContent(this)">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
          <span>Copy Answer</span>
        </button>
      </div>
      <h3 class="solution-q-title serif">Q: ${sol.question}</h3>
      <div class="solution-body serif">
        ${formatMarkdown(sol.solution)}
      </div>
    </div>
  `).join('');
}

// Tab 4: Syllabus Units
function renderSubjectUnits(subject) {
  const container = document.getElementById('ws-units-list');
  if (!container) return;

  container.innerHTML = (subject.units || []).map(u => `
    <div class="unit-breakdown-card">
      <div class="unit-card-header">
        <span class="unit-num-badge">${u.unitNumber}</span>
        <h3 class="unit-card-title serif">${u.title}</h3>
      </div>
      <ul class="unit-topics-list">
        ${(u.topics || []).map(t => `<li>${t}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

// --- 7. UTILITIES & PARSERS ---
function formatMarkdown(text) {
  if (!text) return '';
  let html = text
    .replace(/### (.*)/g, '<h4 class="doc-subheading serif">$1</h4>')
    .replace(/## (.*)/g, '<h3 class="doc-heading serif">$1</h3>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>');

  // Code blocks
  html = html.replace(/```(c|html|javascript|text)?\n([\s\S]*?)```/g, (match, lang, code) => {
    const escaped = code.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return `<pre><code class="language-${lang || 'text'}">${escaped}</code></pre>`;
  });

  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>');

  // Line breaks
  html = html.replace(/\n\n/g, '<br><br>');

  return html;
}

function copyCardContent(btn) {
  const card = btn.closest('.note-card-stream-item') || btn.closest('.solution-card-item');
  if (!card) return;
  const textToCopy = card.innerText;
  navigator.clipboard.writeText(textToCopy).then(() => {
    const oldHtml = btn.innerHTML;
    btn.innerHTML = '<span>✅ Copied to Clipboard!</span>';
    setTimeout(() => { btn.innerHTML = oldHtml; }, 1800);
  });
}

// --- 8. COMMAND PALETTE & SEARCH (⌘K) ---
function openCommandPalette() {
  const modal = document.getElementById('command-palette-modal');
  if (modal) {
    modal.style.display = 'flex';
    const input = document.getElementById('cmd-palette-input');
    if (input) {
      input.value = '';
      input.focus();
      executeCommandSearch('');
    }
  }
}

function closeCommandPalette() {
  const modal = document.getElementById('command-palette-modal');
  if (modal) modal.style.display = 'none';
}

function executeCommandSearch(query) {
  const resultsBox = document.getElementById('cmd-results-list');
  if (!resultsBox || typeof BCA_1ST_SEM_DATA === 'undefined') return;

  const q = query.trim().toLowerCase();
  if (!q) {
    resultsBox.innerHTML = `<p class="cmd-empty-tip">Type above to search all 7 subjects, notes, and question banks...</p>`;
    return;
  }

  let matches = [];
  BCA_1ST_SEM_DATA.subjects.forEach(s => {
    if (s.title.toLowerCase().includes(q) || s.code.toLowerCase().includes(q)) {
      matches.push({ subject: s, title: s.title, subtitle: `${s.code} • Subject Hub`, tab: 'notes' });
    }
    (s.notes || []).forEach(n => {
      if (n.title.toLowerCase().includes(q) || n.content.toLowerCase().includes(q)) {
        matches.push({ subject: s, title: n.title, subtitle: `${s.title} • Notes (${n.unit})`, tab: 'notes' });
      }
    });
    (s.questions || []).forEach(ques => {
      if (ques.question.toLowerCase().includes(q)) {
        matches.push({ subject: s, title: ques.question, subtitle: `${s.title} • Question Bank`, tab: 'questions' });
      }
    });
    (s.solutions || []).forEach(sol => {
      if (sol.question.toLowerCase().includes(q) || sol.solution.toLowerCase().includes(q)) {
        matches.push({ subject: s, title: sol.question, subtitle: `${s.title} • Solution`, tab: 'solutions' });
      }
    });
  });

  if (matches.length === 0) {
    resultsBox.innerHTML = `<p class="cmd-empty-tip text-red-500">No results found for "${query}".</p>`;
    return;
  }

  resultsBox.innerHTML = matches.slice(0, 10).map(m => `
    <div class="cmd-result-item" onclick="selectCommandResult('${m.subject.id}', '${m.tab}')">
      <div>
        <div class="cmd-result-title">${m.title}</div>
        <div class="cmd-result-subtitle">${m.subtitle}</div>
      </div>
      <span class="cmd-result-badge">${m.tab}</span>
    </div>
  `).join('');
}

function selectCommandResult(subjectId, tab) {
  closeCommandPalette();
  navigateToSubject(subjectId, tab);
}

// --- 9. FOCUS / ZEN READER ---
function openZenReader() {
  if (typeof BCA_1ST_SEM_DATA === 'undefined') return;
  const subject = BCA_1ST_SEM_DATA.subjects.find(s => s.id === activeSubjectId);
  if (!subject) return;
  const modal = document.getElementById('zen-reader-modal');
  if (!modal) return;

  const zenTitle = document.getElementById('zen-title');
  if (zenTitle) zenTitle.innerText = subject.title;

  const zenMeta = document.getElementById('zen-meta');
  if (zenMeta) zenMeta.innerText = `${subject.code} • Full Academic Handout`;
  
  const body = document.getElementById('zen-body');
  if (body) {
    body.innerHTML = (subject.notes || []).map(n => `
      <div class="zen-note-block">
        <h2 class="serif">${n.unit}: ${n.title}</h2>
        <div class="serif leading-relaxed">${formatMarkdown(n.content)}</div>
      </div>
    `).join('<hr class="zen-divider"/>');
  }

  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';

  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise();
  }
}

function closeZenReader() {
  const modal = document.getElementById('zen-reader-modal');
  if (modal) modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// --- 10. GLOBAL SHORTCUTS & INITIALIZATION ---
window.addEventListener('keydown', (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault();
    openCommandPalette();
  }
  if (e.key === 'Escape') {
    closeCommandPalette();
    closeZenReader();
  }
});

window.addEventListener('hashchange', handleHashChange);

function initializeApp() {
  initTheme();
  setupIntroSkip();
  typeText();
  handleHashChange();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}
