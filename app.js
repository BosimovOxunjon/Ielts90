// IELTS Master 90 - Application Logic & State Management

(function () {
  'use strict';

  // --- State Initialization ---
  const STORAGE_KEY = 'ielts_master_90_data_v1';
  let appState = {
    completedTasks: {},
    completedDays: {},
    targetBand: '7.5',
    examDate: '',
    activeTab: 'roadmap',
    filterMonth: 'all',
    filterSkill: 'all',
    searchQuery: '',
    notes: '',
    errorLog: [],
    theme: 'light'
  };

  // Load from LocalStorage
  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        appState = { ...appState, ...parsed };
      }
    } catch (e) {
      console.warn('Could not load saved state from localStorage:', e);
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
    } catch (e) {
      console.warn('Could not save state to localStorage:', e);
    }
  }

  // --- Band Score Conversion Tables (Official Cambridge Scale) ---
  const LISTENING_SCORE_TABLE = [
    { min: 39, band: 9.0 },
    { min: 37, band: 8.5 },
    { min: 35, band: 8.0 },
    { min: 32, band: 7.5 },
    { min: 30, band: 7.0 },
    { min: 26, band: 6.5 },
    { min: 23, band: 6.0 },
    { min: 18, band: 5.5 },
    { min: 16, band: 5.0 },
    { min: 13, band: 4.5 },
    { min: 10, band: 4.0 },
    { min: 0, band: 3.5 }
  ];

  const READING_ACADEMIC_TABLE = [
    { min: 39, band: 9.0 },
    { min: 37, band: 8.5 },
    { min: 35, band: 8.0 },
    { min: 33, band: 7.5 },
    { min: 30, band: 7.0 },
    { min: 27, band: 6.5 },
    { min: 23, band: 6.0 },
    { min: 19, band: 5.5 },
    { min: 15, band: 5.0 },
    { min: 13, band: 4.5 },
    { min: 10, band: 4.0 },
    { min: 0, band: 3.5 }
  ];

  const READING_GENERAL_TABLE = [
    { min: 40, band: 9.0 },
    { min: 39, band: 8.5 },
    { min: 37, band: 8.0 },
    { min: 36, band: 7.5 },
    { min: 34, band: 7.0 },
    { min: 32, band: 6.5 },
    { min: 30, band: 6.0 },
    { min: 27, band: 5.5 },
    { min: 23, band: 5.0 },
    { min: 19, band: 4.5 },
    { min: 15, band: 4.0 },
    { min: 0, band: 3.5 }
  ];

  function getListeningBand(raw) {
    const score = parseInt(raw, 10) || 0;
    for (let row of LISTENING_SCORE_TABLE) {
      if (score >= row.min) return row.band;
    }
    return 3.0;
  }

  function getReadingBand(raw, isAcademic = true) {
    const score = parseInt(raw, 10) || 0;
    const table = isAcademic ? READING_ACADEMIC_TABLE : READING_GENERAL_TABLE;
    for (let row of table) {
      if (score >= row.min) return row.band;
    }
    return 3.0;
  }

  function calculateOverallBand(l, r, w, s) {
    const avg = (l + r + w + s) / 4;
    const decimal = avg - Math.floor(avg);
    
    // Official IELTS Rounding Rules:
    // < 0.25 -> round down to .0
    // >= 0.25 and < 0.75 -> round to .5
    // >= 0.75 -> round up to next whole number
    if (decimal < 0.25) {
      return Math.floor(avg);
    } else if (decimal < 0.75) {
      return Math.floor(avg) + 0.5;
    } else {
      return Math.ceil(avg);
    }
  }

  // --- Sound Synthesizer via Web Audio API ---
  function playTone(freq = 600, duration = 0.2, type = 'sine') {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {
      console.log('Audio tone not supported:', e);
    }
  }

  // --- DOM Elements Cache ---
  let elements = {};

  function initDOMElements() {
    elements = {
      navTabs: document.querySelectorAll('.nav-tab-btn'),
      tabPanels: document.querySelectorAll('.tab-panel'),
      roadmapContainer: document.getElementById('roadmap-cards-container'),
      monthFilterBtns: document.querySelectorAll('.month-filter-btn'),
      skillFilterBtns: document.querySelectorAll('.skill-filter-btn'),
      searchInput: document.getElementById('roadmap-search'),
      overallProgressBar: document.getElementById('overall-progress-bar'),
      overallProgressText: document.getElementById('overall-progress-text'),
      completedDaysCount: document.getElementById('completed-days-count'),
      daysRemainingBadge: document.getElementById('days-remaining-badge'),
      examDatePicker: document.getElementById('exam-date-picker'),
      targetBandSelect: document.getElementById('target-band-select'),
      themeToggleBtn: document.getElementById('theme-toggle-btn'),
      
      // Timer elements
      studyTimerDisplay: document.getElementById('study-timer-display'),
      timerStartBtn: document.getElementById('timer-start-btn'),
      timerPauseBtn: document.getElementById('timer-pause-btn'),
      timerResetBtn: document.getElementById('timer-reset-btn'),
      timerDurationBtns: document.querySelectorAll('.timer-duration-btn'),
      
      // Calculator elements
      calcListeningRaw: document.getElementById('calc-listening-raw'),
      calcListeningBand: document.getElementById('calc-listening-band'),
      calcReadingType: document.getElementById('calc-reading-type'),
      calcReadingRaw: document.getElementById('calc-reading-raw'),
      calcReadingBand: document.getElementById('calc-reading-band'),
      calcWritingBand: document.getElementById('calc-writing-band'),
      calcSpeakingBand: document.getElementById('calc-speaking-band'),
      calcOverallBandDisplay: document.getElementById('calc-overall-band-display'),
      calcCefrLevel: document.getElementById('calc-cefr-level'),
      calcBandFeedback: document.getElementById('calc-band-feedback'),
      
      // Writing Studio elements
      essayTextarea: document.getElementById('essay-textarea'),
      wordCountDisplay: document.getElementById('word-count-display'),
      paragraphCountDisplay: document.getElementById('paragraph-count-display'),
      writingPromptSelect: document.getElementById('writing-prompt-select'),
      promptDescription: document.getElementById('prompt-description'),
      
      // Speaking Simulator elements
      cueCardTitle: document.getElementById('cue-card-title'),
      cueCardPrompts: document.getElementById('cue-card-prompts'),
      randomizeCueCardBtn: document.getElementById('randomize-cue-card-btn'),
      prepTimerDisplay: document.getElementById('prep-timer-display'),
      startPrepTimerBtn: document.getElementById('start-prep-timer-btn'),
      speakingTimerDisplay: document.getElementById('speaking-timer-display'),
      startSpeakingTimerBtn: document.getElementById('start-speaking-timer-btn'),
      speakingNotesArea: document.getElementById('speaking-notes-area'),
      recordSpeakingBtn: document.getElementById('record-speaking-btn'),
      stopRecordingBtn: document.getElementById('stop-recording-btn'),
      recordingAudioPlayer: document.getElementById('recording-audio-player'),
      recordingStatusBadge: document.getElementById('recording-status-badge'),
      
      // Journal elements
      journalTextarea: document.getElementById('journal-textarea'),
      saveJournalBtn: document.getElementById('save-journal-btn'),
      addErrorBtn: document.getElementById('add-error-btn'),
      errorLogContainer: document.getElementById('error-log-container')
    };
  }

  // --- Statistics & Progress Calculation ---
  function updateProgressMetrics() {
    let totalTasks = 0;
    let completedCount = 0;
    
    ROADMAP_DATA.forEach(day => {
      day.tasks.forEach(task => {
        totalTasks++;
        if (appState.completedTasks[task.id]) {
          completedCount++;
        }
      });
    });

    const percent = totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0;
    const completedDaysCount = Object.keys(appState.completedDays).filter(k => appState.completedDays[k]).length;

    if (elements.overallProgressBar) {
      elements.overallProgressBar.style.width = `${percent}%`;
    }
    if (elements.overallProgressText) {
      elements.overallProgressText.textContent = `${percent}% Completed (${completedCount}/${totalTasks} Tasks)`;
    }
    if (elements.completedDaysCount) {
      elements.completedDaysCount.textContent = `${completedDaysCount} of 90 Days Done`;
    }

    // Exam countdown
    if (elements.daysRemainingBadge && appState.examDate) {
      const target = new Date(appState.examDate);
      const today = new Date();
      const diffTime = target - today;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      if (diffDays > 0) {
        elements.daysRemainingBadge.textContent = `🎯 ${diffDays} Days to Exam`;
        elements.daysRemainingBadge.classList.remove('hidden');
      } else if (diffDays === 0) {
        elements.daysRemainingBadge.textContent = `🚨 Exam is Today! Best of Luck!`;
        elements.daysRemainingBadge.classList.remove('hidden');
      } else {
        elements.daysRemainingBadge.textContent = `Target Exam Date Passed`;
        elements.daysRemainingBadge.classList.remove('hidden');
      }
    }
  }

  // --- Render Roadmap Cards ---
  function getSkillBadgeStyle(skillCategory) {
    switch (skillCategory) {
      case 'listening':
        return {
          bg: 'bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300 border-blue-200 dark:border-blue-800',
          accent: 'border-l-4 border-l-blue-500',
          icon: '🎧'
        };
      case 'reading':
        return {
          bg: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
          accent: 'border-l-4 border-l-emerald-500',
          icon: '📖'
        };
      case 'writing':
        return {
          bg: 'bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-300 border-amber-200 dark:border-amber-800',
          accent: 'border-l-4 border-l-amber-500',
          icon: '✍️'
        };
      case 'speaking':
        return {
          bg: 'bg-pink-100 text-pink-800 dark:bg-pink-900/60 dark:text-pink-300 border-pink-200 dark:border-pink-800',
          accent: 'border-l-4 border-l-pink-500',
          icon: '🗣️'
        };
      default:
        return {
          bg: 'bg-purple-100 text-purple-800 dark:bg-purple-900/60 dark:text-purple-300 border-purple-200 dark:border-purple-800',
          accent: 'border-l-4 border-l-purple-500',
          icon: '🏆'
        };
    }
  }

  function renderRoadmap() {
    if (!elements.roadmapContainer) return;

    const filtered = ROADMAP_DATA.filter(day => {
      // Month Filter
      if (appState.filterMonth !== 'all' && day.month !== parseInt(appState.filterMonth, 10)) {
        return false;
      }
      // Skill Filter
      if (appState.filterSkill !== 'all' && day.skillCategory !== appState.filterSkill) {
        return false;
      }
      // Search Query
      if (appState.searchQuery.trim() !== '') {
        const query = appState.searchQuery.toLowerCase();
        const matchesTitle = day.title.toLowerCase().includes(query);
        const matchesSummary = day.summary.toLowerCase().includes(query);
        const matchesSkill = day.skill.toLowerCase().includes(query);
        const matchesTip = day.proTip.toLowerCase().includes(query);
        const matchesTasks = day.tasks.some(t => t.text.toLowerCase().includes(query));
        if (!matchesTitle && !matchesSummary && !matchesSkill && !matchesTip && !matchesTasks) {
          return false;
        }
      }
      return true;
    });

    if (filtered.length === 0) {
      elements.roadmapContainer.innerHTML = `
        <div class="col-span-full text-center py-16 bg-white dark:bg-slate-800 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700">
          <div class="text-4xl mb-3">🔍</div>
          <h3 class="text-lg font-semibold text-slate-800 dark:text-white">No roadmap days found matching your filter</h3>
          <p class="text-slate-500 dark:text-slate-400 mt-1">Try clearing your search query or selecting "All Months" & "All Skills".</p>
          <button id="reset-roadmap-filters" class="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition">
            Reset Filters
          </button>
        </div>
      `;
      const resetBtn = document.getElementById('reset-roadmap-filters');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          appState.filterMonth = 'all';
          appState.filterSkill = 'all';
          appState.searchQuery = '';
          if (elements.searchInput) elements.searchInput.value = '';
          updateFilterButtons();
          renderRoadmap();
        });
      }
      return;
    }

    let html = '';
    filtered.forEach(day => {
      const isDayComplete = !!appState.completedDays[day.day];
      const badge = getSkillBadgeStyle(day.skillCategory);
      
      const dayTasksHtml = day.tasks.map(task => {
        const isChecked = !!appState.completedTasks[task.id];
        return `
          <label class="flex items-start gap-2.5 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 cursor-pointer transition select-none group">
            <input type="checkbox" data-task-id="${task.id}" data-day="${day.day}" 
              class="task-checkbox mt-1 h-4 w-4 rounded border-slate-300 dark:border-slate-600 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
              ${isChecked ? 'checked' : ''}>
            <span class="text-sm ${isChecked ? 'line-through text-slate-400 dark:text-slate-500' : 'text-slate-700 dark:text-slate-200'} group-hover:text-slate-900 dark:group-hover:text-white transition">
              ${task.text}
            </span>
          </label>
        `;
      }).join('');

      html += `
        <div class="roadmap-card bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-5 ${badge.accent} card-hover-effect flex flex-col justify-between" data-day="${day.day}">
          <div>
            <!-- Card Header -->
            <div class="flex items-center justify-between gap-2 mb-3">
              <div class="flex items-center gap-2">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${badge.bg} border">
                  ${badge.icon} Day ${day.day} • ${day.skill}
                </span>
                <span class="text-xs text-slate-400 dark:text-slate-500 font-mono">
                  M${day.month} / W${day.week}
                </span>
              </div>
              <span class="text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded-md flex items-center gap-1">
                ⏱️ ${day.duration}
              </span>
            </div>

            <!-- Title & Summary -->
            <h3 class="text-base font-bold text-slate-900 dark:text-white mb-1.5 leading-snug">
              ${day.title}
            </h3>
            <p class="text-xs text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
              ${day.summary}
            </p>

            <!-- Task Checklist -->
            <div class="space-y-1 mb-4 bg-slate-50/70 dark:bg-slate-900/40 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
              <div class="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1 px-1">
                Action Items (${day.tasks.filter(t => appState.completedTasks[t.id]).length}/${day.tasks.length})
              </div>
              ${dayTasksHtml}
            </div>

            <!-- Pro Tip Box -->
            <div class="bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50 p-3 rounded-xl mb-4 text-xs text-indigo-900 dark:text-indigo-200">
              <span class="font-semibold text-indigo-700 dark:text-indigo-300 block mb-0.5">💡 Strategy Tip:</span>
              ${day.proTip}
            </div>
          </div>

          <!-- Card Footer -->
          <div class="pt-3 border-t border-slate-100 dark:border-slate-700/80 flex items-center justify-between text-xs text-slate-500">
            <span class="truncate max-w-[170px]" title="${day.resources}">
              📚 ${day.resources}
            </span>
            <button class="toggle-day-complete-btn px-3 py-1 rounded-lg text-xs font-medium transition ${isDayComplete ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200'}" data-day="${day.day}">
              ${isDayComplete ? '✓ Completed' : 'Mark Day Done'}
            </button>
          </div>
        </div>
      `;
    });

    elements.roadmapContainer.innerHTML = html;

    // Attach Listeners to checkboxes and Day Done buttons
    elements.roadmapContainer.querySelectorAll('.task-checkbox').forEach(cb => {
      cb.addEventListener('change', (e) => {
        const taskId = e.target.getAttribute('data-task-id');
        const dayNum = parseInt(e.target.getAttribute('data-day'), 10);
        appState.completedTasks[taskId] = e.target.checked;

        // Auto check if all tasks for this day are checked
        const targetDay = ROADMAP_DATA.find(d => d.day === dayNum);
        if (targetDay) {
          const allTasksDone = targetDay.tasks.every(t => appState.completedTasks[t.id]);
          appState.completedDays[dayNum] = allTasksDone;
        }

        playTone(e.target.checked ? 800 : 400, 0.1);
        saveState();
        updateProgressMetrics();
        renderRoadmap();
      });
    });

    elements.roadmapContainer.querySelectorAll('.toggle-day-complete-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const dayNum = parseInt(btn.getAttribute('data-day'), 10);
        const currentState = !!appState.completedDays[dayNum];
        const newState = !currentState;
        appState.completedDays[dayNum] = newState;

        // Check/uncheck all tasks for this day
        const targetDay = ROADMAP_DATA.find(d => d.day === dayNum);
        if (targetDay) {
          targetDay.tasks.forEach(t => {
            appState.completedTasks[t.id] = newState;
          });
        }

        playTone(newState ? 900 : 350, 0.15);
        saveState();
        updateProgressMetrics();
        renderRoadmap();
      });
    });
  }

  function updateFilterButtons() {
    // Month filters
    if (elements.monthFilterBtns) {
      elements.monthFilterBtns.forEach(btn => {
        const m = btn.getAttribute('data-month');
        if (m === appState.filterMonth) {
          btn.className = 'month-filter-btn px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 text-white shadow-sm transition';
        } else {
          btn.className = 'month-filter-btn px-4 py-2 rounded-xl text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition';
        }
      });
    }

    // Skill filters
    if (elements.skillFilterBtns) {
      elements.skillFilterBtns.forEach(btn => {
        const s = btn.getAttribute('data-skill');
        if (s === appState.filterSkill) {
          btn.className = 'skill-filter-btn px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm transition';
        } else {
          btn.className = 'skill-filter-btn px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition';
        }
      });
    }
  }

  // --- Band Score Calculator Logic ---
  function updateCalculator() {
    if (!elements.calcListeningRaw || !elements.calcOverallBandDisplay) return;

    const lRaw = parseInt(elements.calcListeningRaw.value, 10) || 0;
    const isAcademic = elements.calcReadingType ? elements.calcReadingType.value === 'academic' : true;
    const rRaw = parseInt(elements.calcReadingRaw.value, 10) || 0;
    const wBand = parseFloat(elements.calcWritingBand.value) || 6.5;
    const sBand = parseFloat(elements.calcSpeakingBand.value) || 6.5;

    const lDisplay = document.getElementById('calc-listening-raw-display');
    if (lDisplay) lDisplay.textContent = lRaw;
    const rDisplay = document.getElementById('calc-reading-raw-display');
    if (rDisplay) rDisplay.textContent = rRaw;

    const lBand = getListeningBand(lRaw);
    const rBand = getReadingBand(rRaw, isAcademic);

    if (elements.calcListeningBand) elements.calcListeningBand.textContent = `Band ${lBand.toFixed(1)}`;
    if (elements.calcReadingBand) elements.calcReadingBand.textContent = `Band ${rBand.toFixed(1)}`;

    const overall = calculateOverallBand(lBand, rBand, wBand, sBand);
    elements.calcOverallBandDisplay.textContent = overall.toFixed(1);

    // CEFR Equivalence
    let cefr = 'B2 (Independent)';
    let commentary = 'Good operational command of English. Suitable for most undergraduate university admissions.';
    if (overall >= 8.5) {
      cefr = 'C2 (Expert / Native-like Mastery)';
      commentary = 'Full operational command of language. Fluent, flexible, and accurate in all demanding academic and professional settings.';
    } else if (overall >= 7.5) {
      cefr = 'C1 (Advanced Operational)';
      commentary = 'Exceeds prerequisites for Top 20 Global Universities (Oxford, Cambridge, Harvard, MIT) and Tier 1 medical/legal registrations.';
    } else if (overall >= 6.5) {
      cefr = 'B2/C1 (Competent)';
      commentary = 'Meets standard requirements for Canadian Express Entry, UK Skilled Worker Visa, and most Australian master degree programs.';
    } else if (overall < 6.0) {
      cefr = 'B1 (Modest)';
      commentary = 'Requires focused work on Reading Passage 3 and Writing Task 2 structure before sitting the official test.';
    }

    if (elements.calcCefrLevel) elements.calcCefrLevel.textContent = cefr;
    if (elements.calcBandFeedback) elements.calcBandFeedback.textContent = commentary;
  }

  // --- Cue Card Generator & Speaking Timer ---
  const CUE_CARDS = [
    {
      title: "Describe a person who has strongly influenced your life choices",
      bullets: [
        "Who this person is and how you know them",
        "What specific qualities or values they possess",
        "What key advice or example they gave you",
        "And explain why their influence has been so profound on your personal development"
      ]
    },
    {
      title: "Describe a memorable journey you went on that did not go as planned",
      bullets: [
        "Where you were traveling to and with whom",
        "What unexpected obstacle or delay occurred",
        "How you and your companions responded to the situation",
        "And explain what you learned from this unexpected experience"
      ]
    },
    {
      title: "Describe a technological device or application you find indispensable",
      bullets: [
        "What device or app it is and how often you use it",
        "What primary functions it serves in your daily routine",
        "How you managed before you started using it",
        "And explain why it would be challenging for you to live without it"
      ]
    },
    {
      title: "Describe a peaceful place you enjoy visiting to relax or focus",
      bullets: [
        "Where this place is located and how you discovered it",
        "What the atmosphere, scenery, and surroundings are like",
        "What activities you usually do when you are there",
        "And explain why this place brings you peace of mind"
      ]
    },
    {
      title: "Describe an important environmental problem in your country",
      bullets: [
        "What the problem is and what causes it",
        "How it affects local communities and wildlife",
        "What measures are currently being taken by authorities or citizens",
        "And explain what further solutions you believe should be implemented"
      ]
    },
    {
      title: "Describe a challenging decision you had to make recently",
      bullets: [
        "What the decision was about and what options were available",
        "Why the choice was particularly difficult or stressful",
        "Who you consulted with before finalizing your decision",
        "And explain whether you are satisfied with the outcome in retrospect"
      ]
    }
  ];

  let prepInterval = null;
  let speakingInterval = null;
  let prepSecondsRemaining = 60;
  let speakingSecondsRemaining = 120;

  function loadCueCard(index = null) {
    const idx = index !== null ? index : Math.floor(Math.random() * CUE_CARDS.length);
    const card = CUE_CARDS[idx];
    if (elements.cueCardTitle) elements.cueCardTitle.textContent = card.title;
    if (elements.cueCardPrompts) {
      elements.cueCardPrompts.innerHTML = card.bullets.map(b => `
        <li class="flex items-start gap-2">
          <span class="text-indigo-500 font-bold">•</span>
          <span>${b}</span>
        </li>
      `).join('');
    }
  }

  function startPrepTimer() {
    clearInterval(prepInterval);
    prepSecondsRemaining = 60;
    if (elements.prepTimerDisplay) elements.prepTimerDisplay.textContent = '01:00';
    playTone(550, 0.2);

    prepInterval = setInterval(() => {
      prepSecondsRemaining--;
      const mins = Math.floor(prepSecondsRemaining / 60);
      const secs = prepSecondsRemaining % 60;
      if (elements.prepTimerDisplay) {
        elements.prepTimerDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
      }

      if (prepSecondsRemaining <= 0) {
        clearInterval(prepInterval);
        playTone(880, 0.6, 'triangle');
        alert("⏱️ 1-Minute Preparation Time is up! You must now speak for 2 minutes.");
      }
    }, 1000);
  }

  function startSpeakingTimer() {
    clearInterval(speakingInterval);
    speakingSecondsRemaining = 120;
    if (elements.speakingTimerDisplay) elements.speakingTimerDisplay.textContent = '02:00';
    playTone(650, 0.2);

    speakingInterval = setInterval(() => {
      speakingSecondsRemaining--;
      const mins = Math.floor(speakingSecondsRemaining / 60);
      const secs = speakingSecondsRemaining % 60;
      if (elements.speakingTimerDisplay) {
        elements.speakingTimerDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
      }

      if (speakingSecondsRemaining <= 0) {
        clearInterval(speakingInterval);
        playTone(900, 0.8, 'triangle');
        alert("🎉 Excellent! You have completed the full 2-minute speaking turn!");
      }
    }, 1000);
  }

  // --- Voice Recorder for Speaking Practice ---
  let mediaRecorder = null;
  let audioChunks = [];

  async function startAudioRecording() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder = new MediaRecorder(stream);
      audioChunks = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunks.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
        const audioUrl = URL.createObjectURL(audioBlob);
        if (elements.recordingAudioPlayer) {
          elements.recordingAudioPlayer.src = audioUrl;
          elements.recordingAudioPlayer.classList.remove('hidden');
        }
        if (elements.recordingStatusBadge) {
          elements.recordingStatusBadge.textContent = 'Recording Complete. Playback Below:';
          elements.recordingStatusBadge.className = 'text-xs font-semibold text-emerald-600 dark:text-emerald-400';
        }
      };

      mediaRecorder.start();
      if (elements.recordSpeakingBtn) elements.recordSpeakingBtn.classList.add('hidden');
      if (elements.stopRecordingBtn) elements.stopRecordingBtn.classList.remove('hidden');
      if (elements.recordingStatusBadge) {
        elements.recordingStatusBadge.textContent = '● Live Recording... Speak Clearly';
        elements.recordingStatusBadge.className = 'text-xs font-semibold text-rose-600 dark:text-rose-400 recording-pulse';
      }
      playTone(700, 0.15);
    } catch (err) {
      alert("Microphone permission was not granted or microphone is unavailable. You can still practice speaking with the countdown timer!");
      console.error('Audio recording error:', err);
    }
  }

  function stopAudioRecording() {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
      mediaRecorder.stop();
      mediaRecorder.stream.getTracks().forEach(track => track.stop());
      if (elements.recordSpeakingBtn) elements.recordSpeakingBtn.classList.remove('hidden');
      if (elements.stopRecordingBtn) elements.stopRecordingBtn.classList.add('hidden');
      playTone(500, 0.15);
    }
  }

  // --- Study Pomodoro Timer ---
  let studyTimerInterval = null;
  let studySecondsRemaining = 25 * 60;
  let isTimerRunning = false;

  function updateTimerDisplay() {
    if (!elements.studyTimerDisplay) return;
    const mins = Math.floor(studySecondsRemaining / 60);
    const secs = studySecondsRemaining % 60;
    elements.studyTimerDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  function startStudyTimer() {
    if (isTimerRunning) return;
    isTimerRunning = true;
    playTone(600, 0.1);
    studyTimerInterval = setInterval(() => {
      if (studySecondsRemaining > 0) {
        studySecondsRemaining--;
        updateTimerDisplay();
      } else {
        clearInterval(studyTimerInterval);
        isTimerRunning = false;
        playTone(900, 0.5);
        alert("⏰ Study Session Complete! Take a 5-minute breather before resuming.");
      }
    }, 1000);
  }

  function pauseStudyTimer() {
    clearInterval(studyTimerInterval);
    isTimerRunning = false;
    playTone(400, 0.1);
  }

  function resetStudyTimer(durationMinutes = 25) {
    clearInterval(studyTimerInterval);
    isTimerRunning = false;
    studySecondsRemaining = durationMinutes * 60;
    updateTimerDisplay();
  }

  // --- Writing Studio Word & Paragraph Counter ---
  function updateWritingStats() {
    if (!elements.essayTextarea) return;
    const text = elements.essayTextarea.value.trim();
    const words = text === '' ? 0 : text.split(/\s+/).length;
    const paragraphs = text === '' ? 0 : text.split(/\n+/).filter(p => p.trim().length > 0).length;

    if (elements.wordCountDisplay) {
      elements.wordCountDisplay.textContent = `${words} words`;
      if (words < 150) {
        elements.wordCountDisplay.className = 'text-xs font-semibold text-rose-500';
      } else if (words >= 150 && words < 250) {
        elements.wordCountDisplay.className = 'text-xs font-semibold text-amber-500';
      } else {
        elements.wordCountDisplay.className = 'text-xs font-semibold text-emerald-600 dark:text-emerald-400';
      }
    }

    if (elements.paragraphCountDisplay) {
      elements.paragraphCountDisplay.textContent = `${paragraphs} paragraphs`;
    }
  }

  // --- Error Log & Journal Persistence ---
  function renderErrorLog() {
    if (!elements.errorLogContainer) return;
    if (!appState.errorLog || appState.errorLog.length === 0) {
      elements.errorLogContainer.innerHTML = `
        <div class="text-center py-8 text-slate-400 text-xs">
          No errors recorded yet. Click "+ Add Mistake Entry" after taking a test to dissect recurring pitfalls.
        </div>
      `;
      return;
    }

    elements.errorLogContainer.innerHTML = appState.errorLog.map((item, idx) => `
      <div class="p-3 bg-slate-50 dark:bg-slate-700/60 rounded-xl border border-slate-200 dark:border-slate-600 text-xs relative group">
        <button class="delete-error-btn absolute top-2 right-2 text-slate-400 hover:text-rose-500 transition" data-index="${idx}">
          ✕
        </button>
        <div class="flex items-center gap-2 mb-1">
          <span class="font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">${item.skill}</span>
          <span class="text-slate-400">•</span>
          <span class="font-medium text-slate-700 dark:text-slate-300">${item.type}</span>
          <span class="text-slate-400 ml-auto mr-5 font-mono text-[10px]">${item.date}</span>
        </div>
        <p class="text-slate-800 dark:text-slate-200 font-semibold mb-0.5">Mistake: <span class="font-normal">${item.mistake}</span></p>
        <p class="text-emerald-700 dark:text-emerald-400 font-semibold">Remedy / Root Cause: <span class="font-normal">${item.remedy}</span></p>
      </div>
    `).join('');

    elements.errorLogContainer.querySelectorAll('.delete-error-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const i = parseInt(btn.getAttribute('data-index'), 10);
        appState.errorLog.splice(i, 1);
        saveState();
        renderErrorLog();
      });
    });
  }

  // --- Interactive Mini-Tests in Labs ---
  function initInteractiveLabs() {
    // Reading Lab Interactive Passage Check
    const checkReadingBtn = document.getElementById('check-reading-answers-btn');
    if (checkReadingBtn) {
      checkReadingBtn.addEventListener('click', () => {
        const q1 = document.querySelector('input[name="reading-q1"]:checked')?.value;
        const q2 = document.querySelector('input[name="reading-q2"]:checked')?.value;
        const q3 = document.querySelector('input[name="reading-q3"]:checked')?.value;

        const resultsDiv = document.getElementById('reading-results-div');
        if (!resultsDiv) return;

        let score = 0;
        let details = [];

        // Question 1: TRUE
        if (q1 === 'TRUE') {
          score++;
          details.push("✓ Question 1: Correct! (TRUE - The passage explicitly states the magnetic field serves as an orientation cue).");
        } else {
          details.push("✗ Question 1: Incorrect. The answer is TRUE. The text explicitly confirms this fact.");
        }

        // Question 2: FALSE
        if (q2 === 'FALSE') {
          score++;
          details.push("✓ Question 2: Correct! (FALSE - The passage confirms birds navigate in overcast skies using low-frequency sound, directly contradicting the statement).");
        } else {
          details.push("✗ Question 2: Incorrect. The answer is FALSE. Overcast skies do not prevent navigation; they switch sensory cues.");
        }

        // Question 3: NOT GIVEN
        if (q3 === 'NOT GIVEN') {
          score++;
          details.push("✓ Question 3: Correct! (NOT GIVEN - While artificial light pollution is mentioned, the exact percentage claim is neither verified nor denied).");
        } else {
          details.push("✗ Question 3: Incorrect. The answer is NOT GIVEN. The text mentions light disturbance but never states a 40% threshold.");
        }

        resultsDiv.classList.remove('hidden');
        resultsDiv.innerHTML = `
          <div class="p-4 rounded-xl ${score === 3 ? 'bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200' : 'bg-amber-50 dark:bg-amber-950/50 border border-amber-200'}">
            <h4 class="font-bold text-sm mb-2 ${score === 3 ? 'text-emerald-800 dark:text-emerald-300' : 'text-amber-800 dark:text-amber-300'}">
              Score: ${score} / 3 Correct
            </h4>
            <div class="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
              ${details.map(d => `<p>${d}</p>`).join('')}
            </div>
          </div>
        `;
        playTone(score === 3 ? 880 : 500, 0.2);
      });
    }

    // Listening Lab Interactive Audio Dialogue
    const playListeningAudioBtn = document.getElementById('play-listening-audio-btn');
    if (playListeningAudioBtn) {
      playListeningAudioBtn.addEventListener('click', () => {
        if ('speechSynthesis' in window) {
          const text = "Good morning, City Car Rental reservations. How can I help you today? Hello, I'd like to book a family estate car for next weekend, starting Friday the 14th of October. Certainly, and may I have your full surname please? Yes, it's Hemmings. That's H-E-M-M-I-N-G-S. And a contact telephone number? My mobile is 0774 291 550... wait, pardon me, the last three digits are 5-5-2. 0774 291 552. Thank you.";
          const utterance = new SpeechSynthesisUtterance(text);
          utterance.rate = 0.95;
          utterance.pitch = 1.0;
          // Try to pick a British English voice if available
          const voices = window.speechSynthesis.getVoices();
          const gbVoice = voices.find(v => v.lang.includes('en-GB') || v.name.includes('UK') || v.name.includes('British'));
          if (gbVoice) utterance.voice = gbVoice;
          window.speechSynthesis.speak(utterance);
        } else {
          alert("Audio dialogue: 'Name: Hemmings (H-E-M-M-I-N-G-S), Telephone: 0774 291 552, Date: 14th of October'");
        }
      });
    }

    const checkListeningAnswersBtn = document.getElementById('check-listening-answers-btn');
    if (checkListeningAnswersBtn) {
      checkListeningAnswersBtn.addEventListener('click', () => {
        const a1 = (document.getElementById('listening-q1-input')?.value || '').trim().toLowerCase();
        const a2 = (document.getElementById('listening-q2-input')?.value || '').trim().replace(/\s+/g, '');
        const a3 = (document.getElementById('listening-q3-input')?.value || '').trim().toLowerCase();

        let score = 0;
        let details = [];

        if (a1 === 'hemmings') {
          score++;
          details.push("✓ Question 1 (Surname): Correct! ('Hemmings')");
        } else {
          details.push(`✗ Question 1: Expected 'Hemmings', you wrote '${a1 || '[blank]'}'`);
        }

        if (a2 === '0774291552') {
          score++;
          details.push("✓ Question 2 (Phone Number): Correct! ('0774 291 552') - Caught the self-correction!");
        } else {
          details.push(`✗ Question 2: Expected '0774 291 552', you wrote '${a2 || '[blank]'}'. (Speaker corrected 550 to 552).`);
        }

        if (a3.includes('14') && (a3.includes('october') || a3.includes('oct'))) {
          score++;
          details.push("✓ Question 3 (Rental Date): Correct! ('14th October' or 'October 14th')");
        } else {
          details.push(`✗ Question 3: Expected '14th October', you wrote '${a3 || '[blank]'}'`);
        }

        const out = document.getElementById('listening-results-div');
        if (out) {
          out.classList.remove('hidden');
          out.innerHTML = `
            <div class="p-4 rounded-xl ${score === 3 ? 'bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200' : 'bg-amber-50 dark:bg-amber-950/50 border border-amber-200'}">
              <h4 class="font-bold text-sm mb-2 ${score === 3 ? 'text-emerald-800 dark:text-emerald-300' : 'text-amber-800 dark:text-amber-300'}">
                Score: ${score} / 3 Correct
              </h4>
              <div class="space-y-1 text-xs text-slate-700 dark:text-slate-300">
                ${details.map(d => `<p>${d}</p>`).join('')}
              </div>
            </div>
          `;
        }
        playTone(score === 3 ? 880 : 500, 0.2);
      });
    }
  }

  // --- Tab Navigation ---
  function switchTab(targetTabId) {
    appState.activeTab = targetTabId;
    saveState();

    elements.navTabs.forEach(btn => {
      const tab = btn.getAttribute('data-tab');
      if (tab === targetTabId) {
        btn.classList.add('active', 'border-indigo-600', 'text-indigo-600', 'dark:text-indigo-400');
        btn.classList.remove('border-transparent', 'text-slate-500');
      } else {
        btn.classList.remove('active', 'border-indigo-600', 'text-indigo-600', 'dark:text-indigo-400');
        btn.classList.add('border-transparent', 'text-slate-500');
      }
    });

    elements.tabPanels.forEach(panel => {
      if (panel.id === `tab-${targetTabId}`) {
        panel.classList.remove('hidden');
      } else {
        panel.classList.add('hidden');
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // --- Master Event Listeners Setup ---
  function initEventListeners() {
    // Navigation Tabs
    elements.navTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const tabId = tab.getAttribute('data-tab');
        switchTab(tabId);
      });
    });

    // Month Filters
    elements.monthFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        appState.filterMonth = btn.getAttribute('data-month');
        updateFilterButtons();
        renderRoadmap();
      });
    });

    // Skill Filters
    elements.skillFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        appState.filterSkill = btn.getAttribute('data-skill');
        updateFilterButtons();
        renderRoadmap();
      });
    });

    // Search Box
    if (elements.searchInput) {
      elements.searchInput.addEventListener('input', (e) => {
        appState.searchQuery = e.target.value;
        renderRoadmap();
      });
    }

    // Exam Date Picker
    if (elements.examDatePicker) {
      if (appState.examDate) elements.examDatePicker.value = appState.examDate;
      elements.examDatePicker.addEventListener('change', (e) => {
        appState.examDate = e.target.value;
        saveState();
        updateProgressMetrics();
      });
    }

    // Target Band Selector
    if (elements.targetBandSelect) {
      elements.targetBandSelect.value = appState.targetBand || '7.5';
      elements.targetBandSelect.addEventListener('change', (e) => {
        appState.targetBand = e.target.value;
        saveState();
      });
    }

    // Calculator inputs
    [elements.calcListeningRaw, elements.calcReadingType, elements.calcReadingRaw, elements.calcWritingBand, elements.calcSpeakingBand].forEach(el => {
      if (el) {
        el.addEventListener('input', updateCalculator);
        el.addEventListener('change', updateCalculator);
      }
    });

    // Cue Card Generator
    if (elements.randomizeCueCardBtn) {
      elements.randomizeCueCardBtn.addEventListener('click', () => {
        loadCueCard();
        playTone(600, 0.1);
      });
    }

    // Speaking Timers
    if (elements.startPrepTimerBtn) elements.startPrepTimerBtn.addEventListener('click', startPrepTimer);
    if (elements.startSpeakingTimerBtn) elements.startSpeakingTimerBtn.addEventListener('click', startSpeakingTimer);

    // Audio Recorder
    if (elements.recordSpeakingBtn) elements.recordSpeakingBtn.addEventListener('click', startAudioRecording);
    if (elements.stopRecordingBtn) elements.stopRecordingBtn.addEventListener('click', stopAudioRecording);

    // Writing Studio Stats
    if (elements.essayTextarea) {
      elements.essayTextarea.addEventListener('input', updateWritingStats);
    }

    // Writing Prompt Change
    if (elements.writingPromptSelect) {
      elements.writingPromptSelect.addEventListener('change', (e) => {
        const val = e.target.value;
        let promptText = "";
        if (val === 'task2-tech') {
          promptText = "Some people believe that artificial intelligence will create more leisure time for humans, while others argue it will cause widespread unemployment and social inequality. Discuss both views and give your own opinion. (Write at least 250 words)";
        } else if (val === 'task2-edu') {
          promptText = "Universities should focus solely on providing graduates with practical skills needed for high-paying employment, rather than general theoretical knowledge. To what extent do you agree or disagree? (Write at least 250 words)";
        } else if (val === 'task1-line') {
          promptText = "The graph below shows the proportion of four different renewable energy sources used in a European nation between 1990 and 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. (Write at least 150 words)";
        } else if (val === 'task1-process') {
          promptText = "The diagram below illustrates the stages involved in the collection and industrial recycling of plastic bottles into polyester fabric. Summarise the information by selecting and reporting the main features. (Write at least 150 words)";
        }
        if (elements.promptDescription) elements.promptDescription.textContent = promptText;
      });
    }

    // Study Pomodoro Timer
    if (elements.timerStartBtn) elements.timerStartBtn.addEventListener('click', startStudyTimer);
    if (elements.timerPauseBtn) elements.timerPauseBtn.addEventListener('click', pauseStudyTimer);
    if (elements.timerResetBtn) elements.timerResetBtn.addEventListener('click', () => resetStudyTimer(25));
    elements.timerDurationBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const mins = parseInt(btn.getAttribute('data-mins'), 10);
        resetStudyTimer(mins);
      });
    });

    // Journal & Error Log
    if (elements.journalTextarea) {
      elements.journalTextarea.value = appState.notes || '';
      if (elements.saveJournalBtn) {
        elements.saveJournalBtn.addEventListener('click', () => {
          appState.notes = elements.journalTextarea.value;
          saveState();
          playTone(800, 0.1);
          alert("✓ Personal study notes saved successfully!");
        });
      }
    }

    if (elements.addErrorBtn) {
      elements.addErrorBtn.addEventListener('click', () => {
        const skill = prompt("Enter Skill (Listening / Reading / Writing / Speaking):", "Listening");
        if (!skill) return;
        const type = prompt("Question or Task Type (e.g. T/F/NG, Section 3 Multiple Choice, Task 2 Thesis):", "Multiple Choice");
        if (!type) return;
        const mistake = prompt("Describe the mistake you made:", "Confused option A for C due to speaker's initial remark");
        if (!mistake) return;
        const remedy = prompt("What is the root cause & how will you avoid it next time?", "Always wait for speaker to finish sentence; note concession words like 'however'");
        if (!remedy) return;

        if (!appState.errorLog) appState.errorLog = [];
        appState.errorLog.unshift({
          skill,
          type,
          mistake,
          remedy,
          date: new Date().toLocaleDateString()
        });
        saveState();
        renderErrorLog();
        playTone(750, 0.1);
      });
    }

    // Theme Toggle
    if (elements.themeToggleBtn) {
      elements.themeToggleBtn.addEventListener('click', () => {
        const isDark = document.documentElement.classList.toggle('dark');
        appState.theme = isDark ? 'dark' : 'light';
        saveState();
      });
    }

    // Print Plan Button
    const printBtn = document.getElementById('print-roadmap-btn');
    if (printBtn) {
      printBtn.addEventListener('click', () => {
        window.print();
      });
    }
  }

  // --- Initial Boot ---
  document.addEventListener('DOMContentLoaded', () => {
    loadState();
    
    // Apply saved theme
    if (appState.theme === 'dark' || (!appState.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }

    initDOMElements();
    initEventListeners();
    initInteractiveLabs();
    
    updateFilterButtons();
    renderRoadmap();
    updateProgressMetrics();
    updateCalculator();
    loadCueCard(0);
    renderErrorLog();
    updateWritingStats();
    resetStudyTimer(25);

    if (appState.activeTab) {
      switchTab(appState.activeTab);
    }
  });

})();
