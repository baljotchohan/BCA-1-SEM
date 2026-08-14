const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const oldOpenSolRegex = /function openSolutions\(subjectId\) \{[\s\S]*?solArea\.innerHTML = html;\n\s*\}/m;
const newOpenSol = `function openSolutions(subjectId) {
            currentSubjectId = subjectId;
            const subject = syllabusData.subjects.find(s => s.id === subjectId);
            document.getElementById('sol-modal').classList.add('active');
            
            const solArea = document.getElementById('sol-content-area');
            if(!subject || !subject.solutions || subject.solutions.length === 0) {
                solArea.innerHTML = '<div style="color:var(--theme-surface-on-surface-variant)">No solutions available yet.</div>';
                return;
            }
            
            let html = '<div style="display:flex; flex-direction:column; gap:16px;">';
            subject.solutions.forEach(sol => {
                html += \`
                <div class="feature-card" style="padding:24px;">
                    <div style="font-weight:500; font-size:1.1rem; color:var(--theme-surface-on-surface); margin-bottom:12px;">\${sol.title}</div>
                    <div class="reader-view" style="padding:0; margin:0; max-width:none; font-size:1rem;">\${markdownToHtml(sol.content)}</div>
                </div>\`;
            });
            html += '</div>';
            solArea.innerHTML = html;
        }`;

html = html.replace(oldOpenSolRegex, newOpenSol);

fs.writeFileSync('index.html', html);
console.log('Solutions JS updated');
