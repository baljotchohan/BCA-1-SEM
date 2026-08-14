/**
 * BCA 1st Semester Academic Hub — Visuals & Interactive Simulations Engine
 * High-precision interactive visual models for Computer Science, Math Stats, Web Dev & Hardware
 * Aligned with Panjab University 2026-27 NEP Framework
 * Author: Baljot Chohan
 */

(function () {
  'use strict';

  const VisualEngines = {};

  function setupHiDPICanvas(canvas, logicalWidth, logicalHeight) {
    const dpr = Math.max(window.devicePixelRatio || 1, 2);
    canvas.width = logicalWidth * dpr;
    canvas.height = logicalHeight * dpr;
    canvas.style.width = '100%';
    canvas.style.maxWidth = logicalWidth + 'px';
    canvas.style.height = 'auto';
    canvas.style.aspectRatio = `${logicalWidth} / ${logicalHeight}`;

    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    return { ctx, width: logicalWidth, height: logicalHeight, dpr };
  }

  /* -------------------------------------------------------------------------- */
  /* 1. WEB DEV: INTERACTIVE CSS BOX MODEL SIMULATOR                            */
  /* -------------------------------------------------------------------------- */
  VisualEngines['css-box-model'] = {
    title: 'Interactive CSS Box Model & Sizing Algorithm',
    init: function (container) {
      let width = 200;
      let padding = 20;
      let border = 5;
      let margin = 15;
      let isBorderBox = false;

      container.innerHTML = `
        <div class="visual-engine-deck p-5 rounded-xl bg-[#0b0f19] border border-emerald-500/30 text-white my-6">
          <div class="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
            <div class="flex items-center gap-2">
              <span class="p-1.5 rounded bg-emerald-500/10 text-emerald-400 font-mono text-xs font-bold"><i class="fas fa-cube mr-1"></i>CSS ENGINE</span>
              <h4 class="font-bold text-sm text-white">CSS Box Model & Specificity Calculator</h4>
            </div>
            <button id="toggle-box-sizing" class="px-3 py-1 text-xs mono font-bold rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30 transition">
              box-sizing: ${isBorderBox ? 'border-box' : 'content-box'}
            </button>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <!-- Interactive Visual Preview -->
            <div class="flex flex-col items-center justify-center p-4 bg-black/40 rounded-lg border border-white/5 min-h-[260px] relative">
              <div id="box-preview-margin" class="p-3 bg-amber-500/20 border border-dashed border-amber-500/40 rounded text-center transition-all duration-200">
                <span class="text-[10px] mono text-amber-400 font-bold block mb-1">MARGIN: <span id="val-margin-txt">15px</span></span>
                <div id="box-preview-border" class="p-2 bg-yellow-500/20 border-4 border-yellow-500 rounded text-center transition-all duration-200">
                  <span class="text-[10px] mono text-yellow-400 font-bold block mb-1">BORDER: <span id="val-border-txt">5px</span></span>
                  <div id="box-preview-padding" class="p-3 bg-emerald-500/20 border border-emerald-500/40 rounded text-center transition-all duration-200">
                    <span class="text-[10px] mono text-emerald-400 font-bold block mb-1">PADDING: <span id="val-padding-txt">20px</span></span>
                    <div id="box-preview-content" class="px-4 py-3 bg-blue-500/40 border border-blue-400 rounded text-center transition-all duration-200">
                      <span class="text-[11px] mono text-blue-200 font-bold block">CONTENT: <span id="val-width-txt">200px</span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Controls & Live Formula Calculations -->
            <div class="space-y-3.5 text-xs mono">
              <div>
                <div class="flex justify-between text-gray-300 mb-1">
                  <span>Declared Width</span><span class="text-blue-400" id="ctrl-w-label">200px</span>
                </div>
                <input type="range" min="120" max="280" value="200" id="ctrl-w" class="w-full accent-emerald-400 cursor-pointer">
              </div>

              <div>
                <div class="flex justify-between text-gray-300 mb-1">
                  <span>Padding (Left/Right)</span><span class="text-emerald-400" id="ctrl-p-label">20px</span>
                </div>
                <input type="range" min="0" max="40" value="20" id="ctrl-p" class="w-full accent-emerald-400 cursor-pointer">
              </div>

              <div>
                <div class="flex justify-between text-gray-300 mb-1">
                  <span>Border Width</span><span class="text-yellow-400" id="ctrl-b-label">5px</span>
                </div>
                <input type="range" min="1" max="15" value="5" id="ctrl-b" class="w-full accent-emerald-400 cursor-pointer">
              </div>

              <div>
                <div class="flex justify-between text-gray-300 mb-1">
                  <span>Margin (Left/Right)</span><span class="text-amber-400" id="ctrl-m-label">15px</span>
                </div>
                <input type="range" min="0" max="30" value="15" id="ctrl-m" class="w-full accent-emerald-400 cursor-pointer">
              </div>

              <!-- Computed Telemetry -->
              <div class="p-3 bg-black/60 rounded border border-emerald-500/20 text-gray-300 mt-2">
                <div class="text-emerald-400 font-bold mb-1">📐 Computed Rendered Width:</div>
                <div id="box-formula-breakdown" class="text-[11px] text-gray-400 leading-relaxed font-mono">
                  200 (width) + 40 (padding) + 10 (border) = <strong class="text-white">250px</strong> (content-box)
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

      const btnToggle = container.querySelector('#toggle-box-sizing');
      const ctrlW = container.querySelector('#ctrl-w');
      const ctrlP = container.querySelector('#ctrl-p');
      const ctrlB = container.querySelector('#ctrl-b');
      const ctrlM = container.querySelector('#ctrl-m');

      function update() {
        width = parseInt(ctrlW.value, 10);
        padding = parseInt(ctrlP.value, 10);
        border = parseInt(ctrlB.value, 10);
        margin = parseInt(ctrlM.value, 10);

        container.querySelector('#ctrl-w-label').textContent = `${width}px`;
        container.querySelector('#ctrl-p-label').textContent = `${padding}px`;
        container.querySelector('#ctrl-b-label').textContent = `${border}px`;
        container.querySelector('#ctrl-m-label').textContent = `${margin}px`;

        container.querySelector('#val-width-txt').textContent = `${width}px`;
        container.querySelector('#val-padding-txt').textContent = `${padding}px`;
        container.querySelector('#val-border-txt').textContent = `${border}px`;
        container.querySelector('#val-margin-txt').textContent = `${margin}px`;

        const totalPad = padding * 2;
        const totalBrd = border * 2;
        const totalMrg = margin * 2;

        let totalRendered = isBorderBox ? width : (width + totalPad + totalBrd);
        let totalSpace = totalRendered + totalMrg;

        const breakdown = isBorderBox
          ? `Rendered Width = Declared <strong class="text-white">${width}px</strong> (Padding & Border absorbed inside) • Total Screen Space = <strong class="text-emerald-300">${totalSpace}px</strong>`
          : `Rendered Width = ${width} + ${totalPad} (pad) + ${totalBrd} (brd) = <strong class="text-white">${totalRendered}px</strong> • Total Screen Space = <strong class="text-emerald-300">${totalSpace}px</strong>`;

        container.querySelector('#box-formula-breakdown').innerHTML = breakdown;
      }

      btnToggle.addEventListener('click', () => {
        isBorderBox = !isBorderBox;
        btnToggle.textContent = `box-sizing: ${isBorderBox ? 'border-box' : 'content-box'}`;
        update();
      });

      [ctrlW, ctrlP, ctrlB, ctrlM].forEach(el => el.addEventListener('input', update));
      update();
    }
  };

  /* -------------------------------------------------------------------------- */
  /* 2. C PROGRAMMING: STACK VS HEAP & POINTER MEMORY TELEMETRY                 */
  /* -------------------------------------------------------------------------- */
  VisualEngines['c-pointer-memory'] = {
    title: 'C Memory Architecture: Stack, Heap & Pointer Dereferencing',
    init: function (container) {
      let allocatedBlocks = [
        { addr: '0x7ffd01', name: 'int a = 10', type: 'stack', val: 10 },
        { addr: '0x7ffd05', name: 'int *ptr = &a', type: 'stack', val: '0x7ffd01', pointsTo: '0x7ffd01' },
        { addr: '0x100a40', name: 'malloc(4 * sizeof(int))', type: 'heap', val: '[42, 99, 108, 255]' }
      ];

      container.innerHTML = `
        <div class="visual-engine-deck p-5 rounded-xl bg-[#0b0f19] border border-blue-500/30 text-white my-6">
          <div class="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
            <div class="flex items-center gap-2">
              <span class="p-1.5 rounded bg-blue-500/10 text-blue-400 font-mono text-xs font-bold"><i class="fas fa-memory mr-1"></i>MEMORY TELEMETRY</span>
              <h4 class="font-bold text-sm text-white">C Virtual Memory & Pointer Dereference Map</h4>
            </div>
            <div class="flex gap-2">
              <button id="btn-alloc-heap" class="px-2.5 py-1 text-xs mono font-bold rounded bg-blue-500/20 text-blue-300 border border-blue-500/40 hover:bg-blue-500/30 transition">
                + malloc()
              </button>
              <button id="btn-free-heap" class="px-2.5 py-1 text-xs mono font-bold rounded bg-red-500/20 text-red-300 border border-red-500/40 hover:bg-red-500/30 transition">
                free(ptr)
              </button>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs mono">
            <!-- Stack Segment (Grows Downwards) -->
            <div class="p-3 bg-black/40 rounded-lg border border-emerald-500/30">
              <div class="flex items-center justify-between mb-2 text-emerald-400 font-bold">
                <span>STACK SEGMENT (Automatic Storage)</span>
                <span class="text-[10px] text-gray-400">↓ Grows Down</span>
              </div>
              <div id="stack-memory-list" class="space-y-2">
                <div class="p-2 bg-emerald-950/40 border border-emerald-500/30 rounded flex justify-between items-center">
                  <div>
                    <span class="text-gray-400">0x7ffd01:</span> <strong class="text-white">int a</strong>
                  </div>
                  <span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">Value = 10</span>
                </div>
                <div class="p-2 bg-emerald-950/40 border border-emerald-500/30 rounded flex justify-between items-center">
                  <div>
                    <span class="text-gray-400">0x7ffd05:</span> <strong class="text-white">int *ptr</strong>
                  </div>
                  <span class="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-bold">→ 0x7ffd01 (*ptr=10)</span>
                </div>
              </div>
            </div>

            <!-- Heap Segment (Grows Upwards) -->
            <div class="p-3 bg-black/40 rounded-lg border border-blue-500/30">
              <div class="flex items-center justify-between mb-2 text-blue-400 font-bold">
                <span>HEAP SEGMENT (Dynamic DMA)</span>
                <span class="text-[10px] text-gray-400">↑ Grows Up</span>
              </div>
              <div id="heap-memory-list" class="space-y-2">
                <div class="p-2 bg-blue-950/40 border border-blue-500/30 rounded flex justify-between items-center">
                  <div>
                    <span class="text-gray-400">0x100a40:</span> <strong class="text-white">dyn_array[4]</strong>
                  </div>
                  <span class="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-bold">[42, 99, 108, 255]</span>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-3 p-3 bg-black/60 rounded border border-white/10 text-xs mono text-gray-300 flex justify-between items-center">
            <span><strong>Dereference Check:</strong> *ptr = 10 (Accessing target memory at address 0x7ffd01)</span>
            <span class="text-emerald-400"><i class="fas fa-check-circle mr-1"></i>No Memory Leak</span>
          </div>
        </div>
      `;

      let heapCount = 1;
      const heapList = container.querySelector('#heap-memory-list');
      const btnAlloc = container.querySelector('#btn-alloc-heap');
      const btnFree = container.querySelector('#btn-free-heap');

      btnAlloc.addEventListener('click', () => {
        heapCount++;
        const hex = '0x100a' + (40 + heapCount * 12).toString(16);
        const item = document.createElement('div');
        item.className = 'p-2 bg-blue-950/40 border border-blue-500/30 rounded flex justify-between items-center animate-pulse';
        item.innerHTML = `
          <div>
            <span class="text-gray-400">${hex}:</span> <strong class="text-white">malloc_block_${heapCount}</strong>
          </div>
          <span class="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-bold">[${Math.floor(Math.random() * 50)}, ${Math.floor(Math.random() * 50)}]</span>
        `;
        heapList.appendChild(item);
      });

      btnFree.addEventListener('click', () => {
        if (heapList.children.length > 0) {
          heapList.removeChild(heapList.lastElementChild);
        }
      });
    }
  };

  /* -------------------------------------------------------------------------- */
  /* 3. MATHEMATICAL STATISTICS: NORMAL DISTRIBUTION & EMPIRICAL RULE           */
  /* -------------------------------------------------------------------------- */
  VisualEngines['stats-normal-dist'] = {
    title: 'Normal Gaussian Distribution & Z-Score Telemetry',
    init: function (container) {
      let mean = 0;
      let stdDev = 1;

      container.innerHTML = `
        <div class="visual-engine-deck p-5 rounded-xl bg-[#0b0f19] border border-purple-500/30 text-white my-6">
          <div class="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
            <div class="flex items-center gap-2">
              <span class="p-1.5 rounded bg-purple-500/10 text-purple-400 font-mono text-xs font-bold"><i class="fas fa-chart-area mr-1"></i>GAUSSIAN ENGINE</span>
              <h4 class="font-bold text-sm text-white">Standard Normal Distribution & Empirical Rule (68-95-99.7%)</h4>
            </div>
            <span class="text-xs mono text-purple-300 font-bold bg-purple-500/20 px-2.5 py-1 rounded border border-purple-500/30">
              Total Area = 1.000
            </span>
          </div>

          <div class="flex flex-col items-center">
            <canvas id="normal-dist-canvas" class="w-full rounded-lg bg-black/40 border border-white/5"></canvas>
            
            <div class="grid grid-cols-3 gap-3 w-full mt-4 text-center text-xs mono">
              <div class="p-2.5 rounded bg-purple-950/40 border border-purple-500/30">
                <span class="text-gray-400 block text-[10px]">μ ± 1σ (1 StdDev)</span>
                <strong class="text-purple-300 text-sm">68.27%</strong>
              </div>
              <div class="p-2.5 rounded bg-purple-950/40 border border-purple-500/30">
                <span class="text-gray-400 block text-[10px]">μ ± 2σ (2 StdDev)</span>
                <strong class="text-purple-300 text-sm">95.45%</strong>
              </div>
              <div class="p-2.5 rounded bg-purple-950/40 border border-purple-500/30">
                <span class="text-gray-400 block text-[10px]">μ ± 3σ (3 StdDev)</span>
                <strong class="text-purple-300 text-sm">99.73%</strong>
              </div>
            </div>
          </div>
        </div>
      `;

      const canvas = container.querySelector('#normal-dist-canvas');
      const { ctx, width, height } = setupHiDPICanvas(canvas, 600, 240);

      function draw() {
        ctx.clearRect(0, 0, width, height);

        // Draw Axes
        const groundY = height - 40;
        const centerX = width / 2;

        ctx.strokeStyle = '#2e384d';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(30, groundY);
        ctx.lineTo(width - 30, groundY);
        ctx.stroke();

        // Draw Bell Curve
        ctx.beginPath();
        ctx.moveTo(30, groundY);

        const curvePts = [];
        for (let px = 30; px <= width - 30; px++) {
          const xVal = ((px - centerX) / (width - 60)) * 6; // from -3 to +3
          const yVal = (1 / Math.sqrt(2 * Math.PI)) * Math.exp(-0.5 * xVal * xVal);
          const py = groundY - yVal * 380;
          curvePts.push({ x: px, y: py });
          if (px === 30) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }

        ctx.strokeStyle = '#c084fc';
        ctx.lineWidth = 2.5;
        ctx.stroke();

        // Fill Area
        ctx.lineTo(width - 30, groundY);
        ctx.lineTo(30, groundY);
        ctx.closePath();
        ctx.fillStyle = 'rgba(192, 132, 252, 0.15)';
        ctx.fill();

        // Center line (Mean)
        ctx.strokeStyle = '#a855f7';
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(centerX, 20);
        ctx.lineTo(centerX, groundY);
        ctx.stroke();
        ctx.setLineDash([]);

        // Labels
        ctx.fillStyle = '#94a3b8';
        ctx.font = '11px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('μ (Mean)', centerX, groundY + 20);
        ctx.fillText('-1σ', centerX - 80, groundY + 20);
        ctx.fillText('+1σ', centerX + 80, groundY + 20);
        ctx.fillText('-2σ', centerX - 160, groundY + 20);
        ctx.fillText('+2σ', centerX + 160, groundY + 20);
      }

      draw();
    }
  };

  // Mount visual tags in DOM
  function mountVisualEngines(rootEl) {
    if (!rootEl) return;
    const visualNodes = rootEl.querySelectorAll('[data-visual-engine]');
    visualNodes.forEach(node => {
      const vType = node.getAttribute('data-visual-engine');
      if (VisualEngines[vType]) {
        VisualEngines[vType].init(node);
      }
    });
  }

  window.VisualEngines = VisualEngines;
  window.mountVisualEngines = mountVisualEngines;
})();
