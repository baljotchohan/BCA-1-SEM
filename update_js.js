const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Update renderUnits
const oldRenderUnitsRegex = /function renderUnits\(subjectId\) \{[\s\S]*?renderUnitContent\(subjectId, units\[0\]\.id\);\n\s*\}/m;
const newRenderUnits = `function renderUnits(subjectId) {
            const subject = syllabusData.subjects.find(s => s.id === subjectId);
            const nav = document.getElementById('modal-units-nav');
            if(!subject || !subject.units) { nav.innerHTML = ''; return; }
            
            const units = subject.units;
            let navHtml = '';
            units.forEach((unit, idx) => {
                const isActive = idx === 0;
                const activeStyle = isActive ? 'background: var(--theme-button-primary); color: #fff; border-color: var(--theme-button-primary);' : '';
                navHtml += \`
                <button class="chip" style="cursor:pointer; \${activeStyle}" onclick="renderUnitContent('\${subjectId}', '\${unit.id}'); highlightUnitTab(this)">
                    \${unit.title}
                </button>\`;
            });
            nav.innerHTML = navHtml;
            if(units.length > 0) renderUnitContent(subjectId, units[0].id);
        }`;
html = html.replace(oldRenderUnitsRegex, newRenderUnits);

// We need to add highlightUnitTab function
const highlightFn = `
        function highlightUnitTab(btn) {
            const tabs = document.getElementById('modal-units-nav').querySelectorAll('.chip');
            tabs.forEach(t => {
                t.style.background = 'var(--theme-surface-surface-container)';
                t.style.color = 'var(--theme-surface-on-surface-variant)';
                t.style.borderColor = 'var(--theme-outline-variant)';
            });
            btn.style.background = 'var(--theme-button-primary)';
            btn.style.color = '#fff';
            btn.style.borderColor = 'var(--theme-button-primary)';
        }
`;
html = html.replace(/function renderUnitContent/, highlightFn + "\n        function renderUnitContent");

// Update renderUnitContent
const oldRenderContentRegex = /function renderUnitContent\(subjectId, unitId\) \{[\s\S]*?contentArea\.innerHTML = markdownToHtml\(unit\.content\);\n\s*setTimeout\(\(\) => MathJax\.typesetPromise\(\), 50\);\n\s*\}/m;
const newRenderContent = `function renderUnitContent(subjectId, unitId) {
            const subject = syllabusData.subjects.find(s => s.id === subjectId);
            const unit = subject.units.find(u => u.id === unitId);
            const contentArea = document.getElementById('modal-content-area');
            
            if(!unit || !unit.content) {
                contentArea.innerHTML = '<div style="color:var(--theme-surface-on-surface-variant)">No content available for this unit yet.</div>';
                return;
            }
            
            contentArea.innerHTML = markdownToHtml(unit.content);
            setTimeout(() => MathJax.typesetPromise(), 50);
        }`;
html = html.replace(oldRenderContentRegex, newRenderContent);


// Update QBank
const oldOpenQBankRegex = /function openQBank\(subjectId\) \{[\s\S]*?qbankArea\.innerHTML = html;\n\s*\}/m;
const newOpenQBank = `function openQBank(subjectId) {
            currentSubjectId = subjectId;
            const subject = syllabusData.subjects.find(s => s.id === subjectId);
            document.getElementById('qbank-modal').classList.add('active');
            
            const qbankArea = document.getElementById('qbank-content-area');
            if(!subject || !subject.qbank || subject.qbank.length === 0) {
                qbankArea.innerHTML = '<div style="color:var(--theme-surface-on-surface-variant)">No questions available.</div>';
                return;
            }
            
            let html = '<div style="display:flex; flex-direction:column; gap:16px;">';
            subject.qbank.forEach(q => {
                const isPyq = q.year ? \`<span class="chip" style="background:#fce8e6; color:#d93025; border:none;">PYQ \${q.year}</span>\` : '';
                const typeChip = \`<span class="chip" style="background:#e8f0fe; color:#1a73e8; border:none;">\${q.type === 'long' ? 'Long' : 'Short'}</span>\`;
                
                html += \`
                <div class="feature-card" style="padding:24px;">
                    <div style="display:flex; gap:8px; margin-bottom:12px;">\${typeChip} \${isPyq}</div>
                    <div style="font-size:1.1rem; color:var(--theme-surface-on-surface); margin-bottom:16px;">\${markdownToHtml(q.question)}</div>
                    \${q.hint ? \`<div style="font-size:0.9rem; color:var(--theme-surface-on-surface-variant); background:var(--theme-surface-surface-container); padding:12px; border-radius:8px;"><span class="symbol" style="font-size:16px; margin-right:4px;">lightbulb</span> \${q.hint}</div>\` : ''}
                </div>\`;
            });
            html += '</div>';
            qbankArea.innerHTML = html;
        }`;
html = html.replace(oldOpenQBankRegex, newOpenQBank);


fs.writeFileSync('index.html', html);
console.log('JS rendering updated');
