/**
 * ============================================================================
 * PLACEMENTGENIE - AI PLACEMENT PREPARATION PLATFORM & INTEGRATED CHATBOT
 * Comprehensive Client-Side Engine (HTML5, CSS3, Vanilla JavaScript, LocalStorage)
 * ============================================================================
 * 
 * This file powers:
 * 1. WEBSITE INTERACTIVITY:
 *    - 20-Day Placement Roadmap (Filter tabs, Checkboxes & Completion sync)
 *    - Interactive Aptitude Practice Lab (MCQ question bank, real-time score, explanations)
 *    - Technical Interview Accordions & Subject Switcher
 *    - Resume ATS Score Checklist & Live calculation
 *    - Placement Readiness Dashboard (Live calculation of roadmap, quiz & resume progress)
 *    - Navigation smooth scrolling & mobile menu drawer
 * 
 * 2. INTEGRATED FLOATING AI CHATBOT:
 *    - Bottom-Right Floating Launcher open/close toggle
 *    - Natural Language Intent Recognition (Regex & keyword scoring)
 *    - Entity Extraction (Days, Hours, Subjects, Experience levels)
 *    - Multi-Turn Slot Filling (Interactive 20-Day Timetable & HR Mock flows)
 *    - Context Management & Memory
 *    - 6 Custom Actions (Timetable generator, Aptitude drill, Tech explainer, HR evaluator, Resume advisor, Progress reporter)
 *    - LocalStorage persistence for conversation history & preferences
 */

'use strict';

/* ============================================================================
   1. KNOWLEDGE BASES & DATA REPOSITORIES
   ============================================================================ */

// 20-Day Placement Syllabus Database (Synced with Roadmap & Chatbot)
const ROADMAP_DATA = [
  { day: 1, week: 1, title: "Quantitative: Numbers & Percentages", topics: ["Divisibility rules, LCM & HCF shortcuts", "Percentage to fraction conversion tricks", "25 practice questions"] },
  { day: 2, week: 1, title: "Profit, Loss & Simple/Compound Interest", topics: ["Cost price, selling price & discount formulas", "Compound interest annual/semi-annual shortcuts", "20 business math questions"] },
  { day: 3, week: 1, title: "Time, Speed, Distance & Work", topics: ["Trains, boats and streams problem types", "Unitary method for pipes and cisterns", "20 speed-distance challenges"] },
  { day: 4, week: 1, title: "Logical Reasoning: Blood Relations & Coding", topics: ["Family tree diagram representation", "Letter coding, substitution & number series", "30 logical deduction puzzles"] },
  { day: 5, week: 1, title: "Verbal Ability & Reading Comprehension", topics: ["Subject-verb agreement & error spotting", "Sentence correction & paragraph jumbles", "2 editorial passages + practice MCQs"] },
  { day: 6, week: 2, title: "Arrays, Strings & Two-Pointer Technique", topics: ["Time & space complexity basics (Big-O)", "Reverse string, palindromes & anagrams", "Two-sum and sliding window fundamentals"] },
  { day: 7, week: 2, title: "Searching & Sorting Algorithms", topics: ["Binary search variations (first/last occurrence)", "Merge sort & Quick sort mechanisms", "Search in rotated sorted array"] },
  { day: 8, week: 2, title: "Linked Lists: Singly & Doubly", topics: ["Node creation, insertion and deletion", "Reverse a linked list (iterative & recursive)", "Detect cycle using Floyd's Tortoise and Hare"] },
  { day: 9, week: 2, title: "Stacks & Queues", topics: ["Valid parentheses balance problem", "Next greater element using monotonic stack", "Implement queue using stacks"] },
  { day: 10, week: 2, title: "Trees & Binary Search Trees (BST)", topics: ["Inorder, preorder, postorder traversals", "Height of binary tree & diameter", "Check if a tree is a valid BST"] },
  { day: 11, week: 3, title: "Object-Oriented Programming (OOP)", topics: ["Encapsulation, Abstraction, Inheritance, Polymorphism", "Method overloading vs method overriding", "Abstract classes vs Interfaces"] },
  { day: 12, week: 3, title: "DBMS & SQL Fundamentals", topics: ["ACID properties & normalization (1NF to BCNF)", "INNER, LEFT, RIGHT, FULL OUTER joins", "Top SQL queries: Nth highest salary, GROUP BY"] },
  { day: 13, week: 3, title: "Operating Systems (OS) Concepts", topics: ["Processes vs Threads, context switching", "CPU scheduling algorithms (SJF, Round Robin)", "Deadlocks (4 Coffman conditions) & Virtual Memory"] },
  { day: 14, week: 3, title: "Computer Networks (CN)", topics: ["OSI 7-layer model vs TCP/IP model", "TCP vs UDP handshake differences", "HTTP vs HTTPS, DNS lookup lifecycle, Subnetting"] },
  { day: 15, week: 3, title: "Projects & System Architecture", topics: ["Draft 2-minute elevator pitch for your major project", "Identify challenges faced & architectural decisions", "Review Git branching & deployment pipelines"] },
  { day: 16, week: 4, title: "HR Round: Classic Behavioral Questions", topics: ["'Tell me about yourself' 90-second framework", "'What are your strengths and weaknesses?'", "'Why should we hire you over other candidates?'"] },
  { day: 17, week: 4, title: "STAR Method & Conflict Resolution", topics: ["Structure answers with Situation-Task-Action-Result", "Describe a time you handled a difficult team member", "Questions you must ask the interviewer at the end"] },
  { day: 18, week: 4, title: "Professional English & Communication", topics: ["Corporate email writing etiquettes", "Eliminate filler words (um, uh, like, you know)", "Practice mirror mock speaking session for 15 minutes"] },
  { day: 19, week: 4, title: "Full-Length Mock Placement Test", topics: ["Timed 60-minute aptitude assessment test", "2 medium coding challenges (60 minutes)", "Analyze incorrect answers and refine speed"] },
  { day: 20, week: 4, title: "Final Polish & Mental Confidence", topics: ["Review resume printouts & key formulas", "Dress code, body language & posture check", "Rest well and enter the interview with confidence"] }
];

// Aptitude Practice Lab Question Bank
const APTITUDE_BANK = {
  quant: [
    {
      topic: "Percentages & Passing Marks",
      question: "A student scores 35% marks and fails by 15 marks. Another student scores 45% marks and gets 25 marks more than the minimum passing marks. What are the maximum marks of the examination?",
      options: ["A) 350", "B) 400", "C) 450", "D) 500"],
      correct: 1, // B) 400
      explanation: "Let maximum marks be M. Minimum passing marks = 0.35M + 15 = 0.45M - 25. Therefore, 0.45M - 0.35M = 15 + 25 => 0.10M = 40 => M = 400."
    },
    {
      topic: "Time, Speed and Distance",
      question: "A train 180 meters long running at a speed of 72 km/h crosses a platform in 20 seconds. What is the length of the platform?",
      options: ["A) 200 meters", "B) 220 meters", "C) 240 meters", "D) 250 meters"],
      correct: 1, // B) 220 meters
      explanation: "Speed = 72 * (5/18) = 20 m/s. Total distance in 20 seconds = Speed * Time = 20 * 20 = 400 meters. Length of platform = Total distance - Length of train = 400 - 180 = 220 meters."
    },
    {
      topic: "Work and Time",
      question: "A can complete a project in 12 days and B can complete it in 18 days. If they work together for 4 days, what fraction of the total work is left?",
      options: ["A) 4/9", "B) 5/9", "C) 1/3", "D) 2/5"],
      correct: 0, // A) 4/9
      explanation: "A's 1-day work = 1/12, B's 1-day work = 1/18. Combined 1-day work = (3 + 2)/36 = 5/36. In 4 days, work completed = 4 * (5/36) = 20/36 = 5/9. Work remaining = 1 - 5/9 = 4/9."
    }
  ],
  logical: [
    {
      topic: "Blood Relations",
      question: "Pointing to a photograph, Ramesh says, 'She is the daughter of the only son of my grandfather.' How is the girl in the photograph related to Ramesh?",
      options: ["A) Mother", "B) Sister", "C) Niece", "D) Cousin"],
      correct: 1, // B) Sister
      explanation: "The only son of Ramesh's grandfather is Ramesh's father. The daughter of Ramesh's father is Ramesh's sister."
    },
    {
      topic: "Number Series",
      question: "Find the next number in the sequence: 3, 7, 15, 31, 63, ?",
      options: ["A) 95", "B) 117", "C) 127", "D) 129"],
      correct: 2, // C) 127
      explanation: "Each number is formed by multiplying the previous number by 2 and adding 1: 3*2+1=7, 7*2+1=15, 15*2+1=31, 31*2+1=63, 63*2+1 = 127."
    },
    {
      topic: "Direction Sense",
      question: "A student walks 20 meters North, turns right and walks 30 meters, turns right again and walks 20 meters. How far and in which direction is he from his starting point?",
      options: ["A) 30 meters East", "B) 30 meters West", "C) 20 meters South", "D) 40 meters East"],
      correct: 0, // A) 30 meters East
      explanation: "The North (20m) and South (20m) movements cancel each other out, leaving him 30 meters to the East of his starting origin."
    }
  ],
  verbal: [
    {
      topic: "Subject-Verb Agreement",
      question: "Choose the grammatically correct sentence:",
      options: [
        "A) Neither the manager nor the software developers was present.",
        "B) Neither the manager nor the software developers were present.",
        "C) Neither the manager or the software developers was present.",
        "D) Neither the manager nor the software developers are being present."
      ],
      correct: 1, // B
      explanation: "When subjects are joined by 'neither... nor', the verb agrees with the subject closest to it. Here, 'software developers' is plural, requiring 'were'."
    },
    {
      topic: "Sentence Correction",
      question: "Identify the sentence with the correct preposition:",
      options: [
        "A) She is proficient at Python and SQL.",
        "B) She is proficient in Python and SQL.",
        "C) She is proficient with Python and SQL.",
        "D) She is proficient for Python and SQL."
      ],
      correct: 1, // B
      explanation: "In formal English, one is 'proficient in' a language, science, or subject area."
    }
  ]
};

// Technical Explanations Repository
const TECHNICAL_QA = {
  dsa: {
    title: "Data Structures & Algorithms",
    q: "What is the difference between an Array and a Linked List?",
    a: "1. Memory: Arrays occupy contiguous blocks; Linked Lists use scattered dynamic nodes connected via pointers.\n2. Access: Array lookup by index is O(1); Linked List requires O(N) linear traversal.\n3. Insertion: Inserting at beginning of an Array is O(N) due to element shifting; Linked List is O(1) by updating the head pointer."
  },
  dbms: {
    title: "Database Management Systems (DBMS)",
    q: "Explain ACID Properties with an example.",
    a: "ACID guarantees transactional reliability:\n• Atomicity: Entire transaction completes or none does (e.g. Bank fund transfer debit & credit).\n• Consistency: Database remains in a valid state adhering to all constraints.\n• Isolation: Concurrent transactions do not overwrite or interfere with each other.\n• Durability: Once committed, data survives system crashes and power loss."
  },
  os: {
    title: "Operating Systems (OS)",
    q: "What are the four Coffman conditions for Deadlock?",
    a: "A deadlock occurs if all four conditions hold simultaneously:\n1. Mutual Exclusion (non-shareable resource)\n2. Hold and Wait (process holds resource while requesting another)\n3. No Preemption (resources cannot be confiscated forcibly)\n4. Circular Wait (a closed chain of processes waiting on each other)"
  },
  cn: {
    title: "Computer Networks (CN)",
    q: "What are the main differences between TCP and UDP?",
    a: "• TCP: Connection-oriented, uses 3-way handshake (SYN, SYN-ACK, ACK), guarantees reliable ordered delivery, has error recovery. Used in HTTP, HTTPS, SSH, FTP.\n• UDP: Connectionless, sends datagrams without handshake or delivery guarantees, minimal latency. Used in DNS, VoIP, Video Streaming, Gaming."
  },
  web: {
    title: "Web Technologies & Programming",
    q: "What is Event Bubbling in JavaScript?",
    a: "Event Bubbling is a mechanism in the browser DOM where an event triggered on the deepest target element (e.g., a button inside a card) bubbles upwards through its ancestor hierarchy until it reaches document and window, unless stopped using event.stopPropagation()."
  }
};

/* ============================================================================
   2. LOCALSTORAGE KEYS & APPLICATION STATE
   ============================================================================ */

const STORAGE_KEYS = {
  ROADMAP_COMPLETED: 'placementgenie_roadmap_days',
  QUIZ_STATS: 'placementgenie_quiz_stats',
  RESUME_CHECKS: 'placementgenie_resume_checks',
  CHAT_HISTORY: 'placementgenie_chat_history'
};

// Central State Controller
const state = {
  // Website Interactive State
  completedDays: [],          // Array of day numbers completed [1, 2, ...]
  quizCategory: 'quant',      // 'quant' | 'logical' | 'verbal'
  quizIndex: 0,               // Current question index in active category
  quizScore: { correct: 0, total: 0 },
  resumeChecks: [],           // Array of checked resume item indexes
  
  // Chatbot Assistant State
  chatOpen: false,
  messages: [],               // Chat history { sender, text, timestamp, isHtml }
  activeFlow: null,           // null | 'TIMETABLE' | 'HR_MOCK' | 'APTITUDE'
  flowStep: 0,
  flowSlots: {},              // Stores collected slots during multi-turn conversations
  isTyping: false
};

/* ============================================================================
   3. DOM ELEMENT REFERENCES
   ============================================================================ */

const DOM = {
  // Header & Mobile Nav
  mobileMenuBtn: document.getElementById('mobile-menu-btn'),
  mainNav: document.getElementById('main-nav'),
  headerChatBtn: document.getElementById('header-chat-btn'),
  heroOpenChatBtn: document.getElementById('hero-open-chat-btn'),
  navLinks: document.querySelectorAll('.nav-link'),

  // Module 1: 20-Day Roadmap
  plannerFilterTabs: document.querySelectorAll('.planner-filter-tabs .tab-btn'),
  roadmapCards: document.querySelectorAll('.day-card'),
  dayCheckboxes: document.querySelectorAll('.day-checkbox'),

  // Module 2: Aptitude Practice Lab
  quizCatBtns: document.querySelectorAll('.quiz-cat-btn'),
  quizScoreDisplay: document.getElementById('quiz-score-display'),
  questionNumber: document.getElementById('question-number'),
  questionTopic: document.getElementById('question-topic'),
  questionText: document.getElementById('question-text'),
  optionsGrid: document.getElementById('options-grid'),
  quizFeedback: document.getElementById('quiz-feedback'),
  feedbackStatus: document.getElementById('feedback-status'),
  feedbackExplanation: document.getElementById('feedback-explanation'),
  quizResetBtn: document.getElementById('quiz-reset-btn'),
  quizNextBtn: document.getElementById('quiz-next-btn'),

  // Module 3: Technical Hub
  techTabBtns: document.querySelectorAll('.tech-tab-btn'),
  technicalAccordion: document.getElementById('technical-accordion'),

  // Module 5: Resume Assistant
  resumeChecks: document.querySelectorAll('.resume-check'),
  resumeScoreNumber: document.getElementById('resume-score-number'),

  // Module 6: Readiness Tracker
  overallReadinessPercent: document.getElementById('overall-readiness-percent'),
  readinessStatusHeading: document.getElementById('readiness-status-heading'),
  readinessStatusDesc: document.getElementById('readiness-status-desc'),
  resetAllProgressBtn: document.getElementById('reset-all-progress-btn'),
  metricRoadmapVal: document.getElementById('metric-roadmap-val'),
  metricRoadmapBar: document.getElementById('metric-roadmap-bar'),
  metricAptitudeVal: document.getElementById('metric-aptitude-val'),
  metricAptitudeBar: document.getElementById('metric-aptitude-bar'),
  metricResumeVal: document.getElementById('metric-resume-val'),
  metricResumeBar: document.getElementById('metric-resume-bar'),

  // Floating Chatbot Widget
  chatLauncherBtn: document.getElementById('chat-launcher-btn'),
  chatLauncherIconChat: document.querySelector('.launcher-icon-chat'),
  chatLauncherIconClose: document.querySelector('.launcher-icon-close'),
  chatWidgetPanel: document.getElementById('chat-widget-panel'),
  closeChatWidgetBtn: document.getElementById('close-chat-widget-btn'),
  restartChatBtn: document.getElementById('restart-chat-btn'),
  chatViewport: document.getElementById('chat-viewport'),
  welcomeScreen: document.getElementById('welcome-screen'),
  messagesContainer: document.getElementById('messages-container'),
  typingIndicator: document.getElementById('typing-indicator'),
  chatForm: document.getElementById('chat-form'),
  userInput: document.getElementById('user-input'),
  sendBtn: document.getElementById('send-btn'),
  promptChips: document.querySelectorAll('.prompt-chip')
};

/* ============================================================================
   4. INITIALIZATION CONTROLLER
   ============================================================================ */

function initPlacementGenie() {
  loadStoredData();
  initNavigation();
  initRoadmapModule();
  initAptitudeModule();
  initTechnicalModule();
  initResumeModule();
  initChatbotModule();
  updateReadinessDashboard();
}

/* ============================================================================
   5. NAVIGATION & GENERAL WEBSITE INTERACTION
   ============================================================================ */

function initNavigation() {
  // Mobile hamburger menu toggle
  if (DOM.mobileMenuBtn && DOM.mainNav) {
    DOM.mobileMenuBtn.addEventListener('click', () => {
      DOM.mainNav.classList.toggle('open');
      const isOpen = DOM.mainNav.classList.contains('open');
      DOM.mobileMenuBtn.setAttribute('aria-expanded', isOpen);
    });
  }

  // Close mobile nav when a link is clicked
  DOM.navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (DOM.mainNav) DOM.mainNav.classList.remove('open');
      DOM.navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Top header button triggers the floating chatbot
  if (DOM.headerChatBtn) {
    DOM.headerChatBtn.addEventListener('click', openChatWidget);
  }

  // Hero section CTA triggers chatbot
  if (DOM.heroOpenChatBtn) {
    DOM.heroOpenChatBtn.addEventListener('click', openChatWidget);
  }
}

/* ============================================================================
   6. MODULE 1: 20-DAY ROADMAP CONTROLLER
   ============================================================================ */

function initRoadmapModule() {
  // Week filtering tabs
  DOM.plannerFilterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      DOM.plannerFilterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const selectedWeek = tab.getAttribute('data-week');
      DOM.roadmapCards.forEach(card => {
        const cardWeek = card.getAttribute('data-week');
        if (selectedWeek === 'all' || cardWeek === selectedWeek) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Checkbox completion handler
  DOM.dayCheckboxes.forEach(checkbox => {
    const dayNumber = parseInt(checkbox.getAttribute('data-day'), 10);
    
    // Restore saved state
    if (state.completedDays.includes(dayNumber)) {
      checkbox.checked = true;
      const parentCard = checkbox.closest('.day-card');
      if (parentCard) parentCard.classList.add('completed');
    }

    checkbox.addEventListener('change', () => {
      const parentCard = checkbox.closest('.day-card');
      if (checkbox.checked) {
        if (!state.completedDays.includes(dayNumber)) {
          state.completedDays.push(dayNumber);
        }
        if (parentCard) parentCard.classList.add('completed');
      } else {
        state.completedDays = state.completedDays.filter(d => d !== dayNumber);
        if (parentCard) parentCard.classList.remove('completed');
      }

      saveStoredData(STORAGE_KEYS.ROADMAP_COMPLETED, state.completedDays);
      updateReadinessDashboard();
    });
  });
}

/* ============================================================================
   7. MODULE 2: APTITUDE PRACTICE LAB CONTROLLER
   ============================================================================ */

function initAptitudeModule() {
  // Category tabs switcher
  DOM.quizCatBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      DOM.quizCatBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.quizCategory = btn.getAttribute('data-category');
      state.quizIndex = 0;
      renderCurrentQuizQuestion();
    });
  });

  // Reset quiz button
  if (DOM.quizResetBtn) {
    DOM.quizResetBtn.addEventListener('click', () => {
      state.quizScore = { correct: 0, total: 0 };
      state.quizIndex = 0;
      saveStoredData(STORAGE_KEYS.QUIZ_STATS, state.quizScore);
      updateReadinessDashboard();
      renderCurrentQuizQuestion();
    });
  }

  // Next question button
  if (DOM.quizNextBtn) {
    DOM.quizNextBtn.addEventListener('click', () => {
      const currentQuestions = APTITUDE_BANK[state.quizCategory] || [];
      if (state.quizIndex < currentQuestions.length - 1) {
        state.quizIndex++;
      } else {
        state.quizIndex = 0; // Loop back
      }
      renderCurrentQuizQuestion();
    });
  }

  // Render initial question
  renderCurrentQuizQuestion();
}

function renderCurrentQuizQuestion() {
  const questions = APTITUDE_BANK[state.quizCategory] || [];
  if (questions.length === 0) return;

  const currentQ = questions[state.quizIndex];
  
  DOM.questionNumber.textContent = `Question ${state.quizIndex + 1} of ${questions.length}`;
  DOM.questionTopic.textContent = `Topic: ${currentQ.topic}`;
  DOM.questionText.textContent = currentQ.question;
  DOM.quizScoreDisplay.textContent = `${state.quizScore.correct} / ${state.quizScore.total}`;

  // Hide previous feedback
  DOM.quizFeedback.style.display = 'none';

  // Render option buttons
  DOM.optionsGrid.innerHTML = '';
  currentQ.options.forEach((optText, index) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'option-btn';
    btn.textContent = optText;
    btn.setAttribute('data-index', index);

    btn.addEventListener('click', () => handleQuizOptionClick(index, currentQ));
    DOM.optionsGrid.appendChild(btn);
  });
}

function handleQuizOptionClick(selectedIndex, questionObj) {
  const allOptionBtns = DOM.optionsGrid.querySelectorAll('.option-btn');
  allOptionBtns.forEach(btn => btn.disabled = true);

  const isCorrect = selectedIndex === questionObj.correct;

  // Visual cues
  allOptionBtns[selectedIndex].classList.add(isCorrect ? 'correct' : 'wrong');
  if (!isCorrect) {
    allOptionBtns[questionObj.correct].classList.add('correct');
  }

  // Score tracking
  state.quizScore.total++;
  if (isCorrect) state.quizScore.correct++;
  
  DOM.quizScoreDisplay.textContent = `${state.quizScore.correct} / ${state.quizScore.total}`;
  saveStoredData(STORAGE_KEYS.QUIZ_STATS, state.quizScore);
  updateReadinessDashboard();

  // Show step-by-step explanation
  DOM.feedbackStatus.className = `feedback-status ${isCorrect ? 'correct' : 'wrong'}`;
  DOM.feedbackStatus.textContent = isCorrect ? "✓ Correct Answer!" : "✗ Incorrect Answer";
  DOM.feedbackExplanation.textContent = questionObj.explanation;
  DOM.quizFeedback.style.display = 'block';
}

/* ============================================================================
   8. MODULE 3: TECHNICAL INTERVIEW CONTROLLER
   ============================================================================ */

function initTechnicalModule() {
  DOM.techTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      DOM.techTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const subjectKey = btn.getAttribute('data-subject');
      renderTechnicalAccordion(subjectKey);
    });
  });
}

function renderTechnicalAccordion(subjectKey) {
  const data = TECHNICAL_QA[subjectKey];
  if (!data) return;

  DOM.technicalAccordion.innerHTML = `
    <details class="accordion-item" open>
      <summary class="accordion-header">
        <span class="q-badge">${subjectKey.toUpperCase()}</span>
        <span class="q-title">${data.q}</span>
        <span class="accordion-icon" aria-hidden="true">+</span>
      </summary>
      <div class="accordion-content">
        <p>${formatMessageText(data.a)}</p>
      </div>
    </details>
  `;
}

/* ============================================================================
   9. MODULE 5: RESUME IMPROVEMENT ASSISTANT CONTROLLER
   ============================================================================ */

function initResumeModule() {
  DOM.resumeChecks.forEach((checkbox, index) => {
    // Restore checked items
    if (state.resumeChecks.includes(index)) {
      checkbox.checked = true;
    }

    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        if (!state.resumeChecks.includes(index)) state.resumeChecks.push(index);
      } else {
        state.resumeChecks = state.resumeChecks.filter(i => i !== index);
      }

      saveStoredData(STORAGE_KEYS.RESUME_CHECKS, state.resumeChecks);
      calculateResumeScore();
      updateReadinessDashboard();
    });
  });

  calculateResumeScore();
}

function calculateResumeScore() {
  let score = 0;
  DOM.resumeChecks.forEach((checkbox, index) => {
    if (checkbox.checked) {
      const weight = parseInt(checkbox.getAttribute('data-weight'), 10) || 10;
      score += weight;
    }
  });

  // Cap at 100%
  score = Math.min(score, 100);
  DOM.resumeScoreNumber.textContent = `${score}%`;
  return score;
}

/* ============================================================================
   10. MODULE 6: STUDENT PLACEMENT READINESS DASHBOARD
   ============================================================================ */

function updateReadinessDashboard() {
  // 1. Roadmap score: 20 days max (weight: 40%)
  const roadmapCount = state.completedDays.length;
  const roadmapPct = Math.round((roadmapCount / 20) * 100);
  DOM.metricRoadmapVal.textContent = `${roadmapCount} / 20 Days (${roadmapPct}%)`;
  DOM.metricRoadmapBar.style.width = `${roadmapPct}%`;

  // 2. Aptitude score: accuracy % (weight: 30%)
  let aptPct = 0;
  if (state.quizScore.total > 0) {
    aptPct = Math.round((state.quizScore.correct / state.quizScore.total) * 100);
  }
  DOM.metricAptitudeVal.textContent = `${aptPct}% (${state.quizScore.correct}/${state.quizScore.total})`;
  DOM.metricAptitudeBar.style.width = `${aptPct}%`;

  // 3. Resume ATS score (weight: 30%)
  const resumeScore = calculateResumeScore();
  DOM.metricResumeVal.textContent = `${resumeScore}%`;
  DOM.metricResumeBar.style.width = `${resumeScore}%`;

  // 4. Overall Weighted Score Calculation
  const overallScore = Math.round((roadmapPct * 0.40) + (aptPct * 0.30) + (resumeScore * 0.30));
  DOM.overallReadinessPercent.textContent = `${overallScore}%`;

  // Status message update based on overall score
  if (overallScore >= 80) {
    DOM.readinessStatusHeading.textContent = "Status: Campus Placement Ready! 🚀";
    DOM.readinessStatusDesc.textContent = "Outstanding preparation! Your roadmap, aptitude accuracy, and resume are primed for Day-1 tier-1 placement offers.";
  } else if (overallScore >= 50) {
    DOM.readinessStatusHeading.textContent = "Status: Steady Progress (Intermediate) 📈";
    DOM.readinessStatusDesc.textContent = "Good momentum. Focus on completing your pending roadmap days and refining weak aptitude areas to reach 80%+ readiness.";
  } else {
    DOM.readinessStatusHeading.textContent = "Status: Preparation Started 🎯";
    DOM.readinessStatusDesc.textContent = "Kickstart your preparation by checking off Day 1 on the 20-Day roadmap and auditing your resume checklist.";
  }

  // Reset all progress button
  if (DOM.resetAllProgressBtn) {
    DOM.resetAllProgressBtn.onclick = resetAllProgress;
  }
}

function resetAllProgress() {
  const confirmed = confirm("Are you sure you want to reset all roadmap checks, aptitude test scores, and resume progress?");
  if (!confirmed) return;

  state.completedDays = [];
  state.quizScore = { correct: 0, total: 0 };
  state.resumeChecks = [];

  localStorage.removeItem(STORAGE_KEYS.ROADMAP_COMPLETED);
  localStorage.removeItem(STORAGE_KEYS.QUIZ_STATS);
  localStorage.removeItem(STORAGE_KEYS.RESUME_CHECKS);

  // Uncheck roadmap checkboxes
  DOM.dayCheckboxes.forEach(cb => {
    cb.checked = false;
    const parentCard = cb.closest('.day-card');
    if (parentCard) parentCard.classList.remove('completed');
  });

  // Uncheck resume checkboxes
  DOM.resumeChecks.forEach(cb => {
    cb.checked = false;
  });

  updateReadinessDashboard();
  renderCurrentQuizQuestion();
  alert("Placement progress has been reset.");
}

/* ============================================================================
   11. INTEGRATED FLOATING AI CHATBOT CONTROLLER
   ============================================================================ */

function initChatbotModule() {
  // Toggle floating widget open and closed
  DOM.chatLauncherBtn.addEventListener('click', toggleChatWidget);
  DOM.closeChatWidgetBtn.addEventListener('click', closeChatWidget);
  DOM.restartChatBtn.addEventListener('click', restartChatSession);

  // Message submission handlers
  DOM.chatForm.addEventListener('submit', handleChatMessageSubmit);
  DOM.userInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      DOM.chatForm.requestSubmit();
    }
  });

  // Dynamic textarea height
  DOM.userInput.addEventListener('input', autoResizeChatInput);

  // Suggested prompt chips
  DOM.promptChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const prompt = chip.getAttribute('data-prompt');
      if (prompt) {
        DOM.userInput.value = prompt;
        DOM.chatForm.requestSubmit();
      }
    });
  });

  // Render restored chat messages
  renderChatMessages();
}

function toggleChatWidget() {
  if (state.chatOpen) {
    closeChatWidget();
  } else {
    openChatWidget();
  }
}

function openChatWidget() {
  state.chatOpen = true;
  DOM.chatWidgetPanel.classList.add('open');
  DOM.chatWidgetPanel.setAttribute('aria-hidden', 'false');
  DOM.chatLauncherBtn.setAttribute('aria-expanded', 'true');
  
  // Icon switch
  DOM.chatLauncherIconChat.style.display = 'none';
  DOM.chatLauncherIconClose.style.display = 'block';

  scrollChatToBottom();
  DOM.userInput.focus();
}

function closeChatWidget() {
  state.chatOpen = false;
  DOM.chatWidgetPanel.classList.remove('open');
  DOM.chatWidgetPanel.setAttribute('aria-hidden', 'true');
  DOM.chatLauncherBtn.setAttribute('aria-expanded', 'false');

  // Icon switch
  DOM.chatLauncherIconChat.style.display = 'block';
  DOM.chatLauncherIconClose.style.display = 'none';
}

function restartChatSession() {
  const confirmed = confirm("Restart this conversation?");
  if (!confirmed) return;

  state.messages = [];
  state.activeFlow = null;
  state.flowStep = 0;
  state.flowSlots = {};

  saveStoredData(STORAGE_KEYS.CHAT_HISTORY, state.messages);
  renderChatMessages();
}

function handleChatMessageSubmit(e) {
  e.preventDefault();
  if (state.isTyping) return;

  const raw = DOM.userInput.value;
  const userText = raw.trim();

  // Input Validation
  if (!userText) {
    DOM.userInput.focus();
    return;
  }

  // Clear text box
  DOM.userInput.value = '';
  autoResizeChatInput();

  // Hide initial welcome screen
  DOM.welcomeScreen.style.display = 'none';

  // 1. Add User Message
  const userMsg = {
    sender: 'user',
    text: userText,
    timestamp: getCurrentTime()
  };
  state.messages.push(userMsg);
  renderSingleMessageBubble(userMsg);
  scrollChatToBottom();
  saveStoredData(STORAGE_KEYS.CHAT_HISTORY, state.messages);

  // 2. Trigger Chatbot Intelligence
  showBotTyping();

  setTimeout(() => {
    const botResponse = processUserQueryThroughBrain(userText);

    const botMsg = {
      sender: 'bot',
      text: botResponse.text,
      isHtml: !!botResponse.isHtml,
      timestamp: getCurrentTime()
    };

    hideBotTyping();
    state.messages.push(botMsg);
    renderSingleMessageBubble(botMsg);
    scrollChatToBottom();
    saveStoredData(STORAGE_KEYS.CHAT_HISTORY, state.messages);
  }, 600);
}

/* ============================================================================
   12. CHATBOT INTELLIGENCE ENGINE (INTENT, ENTITY, SLOTS, ACTIONS)
   ============================================================================ */

/**
 * Main intelligence processor. Evaluates current flow context, matches intents,
 * extracts entities, fills missing slots, and executes custom actions.
 */
function processUserQueryThroughBrain(userText) {
  const lower = userText.toLowerCase().trim();

  // Check for cancellation of active flow
  if (lower === 'cancel' || lower === 'stop' || lower === 'exit') {
    state.activeFlow = null;
    state.flowStep = 0;
    state.flowSlots = {};
    return {
      text: "Current operation cancelled. How else can I help your placement prep? You can ask for study timetables, aptitude questions, technical explanations, or progress reports."
    };
  }

  // --------------------------------------------------------------------------
  // FLOW 1: ACTIVE MULTI-TURN SLOT FILLING (STUDY TIMETABLE FLOW)
  // --------------------------------------------------------------------------
  if (state.activeFlow === 'TIMETABLE') {
    return handleTimetableSlotFilling(userText, lower);
  }

  // --------------------------------------------------------------------------
  // FLOW 2: ACTIVE HR MOCK INTERVIEW EVALUATION FLOW
  // --------------------------------------------------------------------------
  if (state.activeFlow === 'HR_MOCK') {
    return handleHRMockEvaluation(userText);
  }

  // --------------------------------------------------------------------------
  // FLOW 3: ACTIVE APTITUDE QUIZ FLOW
  // --------------------------------------------------------------------------
  if (state.activeFlow === 'APTITUDE_DRILL') {
    return handleAptitudeDrillResponse(userText, lower);
  }

  // --------------------------------------------------------------------------
  // INTENT RECOGNITION & ENTITY EXTRACTION ENGINE
  // --------------------------------------------------------------------------

  // Intent A: Greeting
  if (/^(hi|hello|hey|greetings|good morning|good evening)/i.test(lower)) {
    return {
      text: "Hello, Future Engineer! 👋 I am PlacementGenie, your smart campus placement mentor. I can create a custom 20-day study timetable, quiz you on aptitude, explain technical topics (DSA, DBMS, OS), conduct HR mock interviews, or report your readiness score. What would you like to tackle today?"
    };
  }

  // Intent B: Study Timetable / Placement Planner
  if (lower.includes('timetable') || lower.includes('study plan') || lower.includes('schedule') || lower.includes('plan')) {
    // Check if entities were already supplied in the message
    const extractedDays = extractDaysCount(lower);
    const extractedHours = extractHoursCount(lower);

    if (extractedDays && extractedHours) {
      return executeGenerateTimetableAction(extractedDays, extractedHours, "Balanced (Aptitude + Tech + HR)");
    }

    // Start Multi-turn Slot Filling Flow
    state.activeFlow = 'TIMETABLE';
    state.flowStep = 1;
    state.flowSlots = {};

    return {
      text: "📅 **Placement Timetable Assistant Initialized!**\n\nI will customize an optimal daily revision schedule for you.\n\n**Question 1/3:** How many days are available before your placement drive begins? (e.g., 5 days, 10 days, 20 days)"
    };
  }

  // Intent C: Specific Day Lookup in the 20-Day Roadmap (e.g., "What is Day 7?", "Show Day 12")
  const dayMatch = lower.match(/day\s*([0-9]{1,2})/);
  if (dayMatch) {
    const targetDay = parseInt(dayMatch[1], 10);
    return executeDayLookupAction(targetDay);
  }

  // Intent D: Aptitude Practice Drill
  if (lower.includes('aptitude') || lower.includes('quiz') || lower.includes('quant') || lower.includes('mcq') || lower.includes('verbal') || lower.includes('logical')) {
    state.activeFlow = 'APTITUDE_DRILL';
    state.flowSlots = {
      correctAnswer: 1, // B
      explanation: "Divisibility rule for 9 requires sum of digits to be a multiple of 9: 4+5+6+X+2 = 17+X. The smallest whole digit is 1 (17+1=18)."
    };
    return {
      text: "🧠 **Aptitude Drill:**\n\nIf the number **456X2** is completely divisible by 9, what is the value of single-digit **X**?\n\nA) 0\nB) 1\nC) 4\nD) 7\n\nType **A, B, C, or D** to submit your answer!"
    };
  }

  // Intent E: HR Behavioral & STAR Method Practice
  if (lower.includes('hr') || lower.includes('tell me about yourself') || lower.includes('weakness') || lower.includes('interview practice') || lower.includes('behavioral')) {
    state.activeFlow = 'HR_MOCK';
    return {
      text: "💼 **HR Interview Mock Drill:**\n\nHere is a common high-impact HR question:\n\n*\"Tell me about a time you faced a difficult deadline or project roadblock, and how you resolved it.\"*\n\nType your answer below! I will evaluate your response based on the **STAR method** (Situation, Task, Action, Result)."
    };
  }

  // Intent F: Technical Concept Explanations
  if (lower.includes('acid') || lower.includes('dbms') || lower.includes('dsa') || lower.includes('linked list') || lower.includes('deadlock') || lower.includes('tcp') || lower.includes('python') || lower.includes('java')) {
    return executeTechnicalExplainAction(lower);
  }

  // Intent G: Resume Improvement & ATS Advice
  if (lower.includes('resume') || lower.includes('ats') || lower.includes('verbs') || lower.includes('cv') || lower.includes('bullet')) {
    return {
      text: "📄 **ATS Resume Guidelines:**\n\n1. **Format:** Stick to a clean single-column structure without nested graphics, columns, or text boxes.\n2. **Quantify:** Never say *'Worked on frontend'*. Say *'Engineered responsive web client improving load time by 35%'*.\n3. **Power Verbs:** Start bullets with verbs like *Architected*, *Automated*, *Spearheaded*, *Refactored*.\n4. **Audit Tool:** Be sure to check off items in the **Resume Booster** section on this page to test your score!"
    };
  }

  // Intent H: Placement Readiness Score & Progress Tracking
  if (lower.includes('progress') || lower.includes('score') || lower.includes('readiness') || lower.includes('status') || lower.includes('how ready')) {
    return executeProgressReportAction();
  }

  // Intent I: Help / Capabilities
  if (lower.includes('help') || lower.includes('what can you do') || lower.includes('features')) {
    return {
      text: "🧞‍♂️ **Here is what I can do for you:**\n\n1. 📅 **Create Study Timetable**: Type *'Create my study timetable'*.\n2. 🗓️ **Lookup Roadmap Days**: Type *'What is Day 8?'* or *'Show Day 15'*.\n3. 🧠 **Aptitude Drill**: Type *'Quiz me on aptitude'*.\n4. 💻 **Technical Explanations**: Ask me about *'ACID properties'*, *'Deadlocks'*, or *'TCP vs UDP'*.\n5. 💼 **HR Mock Practice**: Type *'HR interview'*.\n6. 📊 **Progress Status**: Type *'Show my progress'*."
    };
  }

  // Fallback / Unknown Intent Handling
  return {
    text: `I understood: "${userText}".\n\nI can best assist you with:\n• 📅 **Study Timetable:** Ask *"Create study plan"*\n• 🧠 **Aptitude Practice:** Ask *"Aptitude quiz"*\n• 💻 **Technical Questions:** Ask *"Explain Deadlocks"* or *"What is ACID?"*\n• 📊 **Placement Progress:** Ask *"How is my readiness score?"*`
  };
}

/* ============================================================================
   13. MULTI-TURN SLOT FILLING FLOW HANDLERS
   ============================================================================ */

/**
 * Handles slot filling for personalized study timetable creation.
 */
function handleTimetableSlotFilling(userText, lower) {
  // Step 1: Collect Days
  if (state.flowStep === 1) {
    const days = parseInt(userText.replace(/\D/g, ''), 10);
    if (!days || days <= 0 || days > 90) {
      return {
        text: "⚠️ Please enter a valid number of days between 1 and 90 (e.g., '10 days' or '20')."
      };
    }

    state.flowSlots.days = days;
    state.flowStep = 2;
    return {
      text: `Got it: **${days} days available**.\n\n**Question 2/3:** How many hours can you dedicate to study each day? (e.g., '3 hours', '4')`
    };
  }

  // Step 2: Collect Daily Hours
  if (state.flowStep === 2) {
    const hours = parseInt(userText.replace(/\D/g, ''), 10);
    if (!hours || hours <= 0 || hours > 18) {
      return {
        text: "⚠️ Please enter realistic daily study hours between 1 and 16 (e.g., '3 hours' or '4')."
      };
    }

    state.flowSlots.hours = hours;
    state.flowStep = 3;
    return {
      text: `Noted: **${hours} hours daily**.\n\n**Question 3/3:** What is your top focus area or weakest subject?\n1) Aptitude & Math\n2) Coding & DSA\n3) Core CS (DBMS/OS/CN)\n4) All-round Balanced`
    };
  }

  // Step 3: Collect Priority Area & Trigger Custom Action
  if (state.flowStep === 3) {
    let focus = "Balanced (Aptitude + Tech + HR)";
    if (lower.includes('aptitude') || lower.includes('math') || lower === '1') focus = "Aptitude Intensive";
    if (lower.includes('coding') || lower.includes('dsa') || lower === '2') focus = "Coding & DSA Focus";
    if (lower.includes('core') || lower.includes('dbms') || lower.includes('os') || lower === '3') focus = "Core CS Fundamentals";

    const days = state.flowSlots.days;
    const hours = state.flowSlots.hours;

    // Reset Flow
    state.activeFlow = null;
    state.flowStep = 0;
    state.flowSlots = {};

    return executeGenerateTimetableAction(days, hours, focus);
  }

  return { text: "Timetable setup reset. Type 'Create timetable' to begin." };
}

/**
 * Handles evaluation of HR mock interview responses.
 */
function handleHRMockEvaluation(userResponse) {
  state.activeFlow = null; // Exit flow

  const text = userResponse.trim();
  const wordCount = text.split(/\s+/).length;

  if (wordCount < 10) {
    return {
      text: "⚠️ Your answer was very brief (" + wordCount + " words). In campus HR rounds, aim for a 60 to 90-second answer (approx. 100-150 words) incorporating the **STAR** method:\n• **Situation:** Context\n• **Task:** Your responsibility\n• **Action:** Steps you took\n• **Result:** Quantifiable outcome."
    };
  }

  const hasSituation = /project|team|college|semester|assignment|company|task/i.test(text);
  const hasAction = /created|solved|developed|debugged|led|managed|researched|decided/i.test(text);
  const hasResult = /result|succeeded|completed|improved|percent|won|delivered|achieved/i.test(text);

  let feedback = "🌟 **HR Response Evaluation:**\n\n";
  feedback += `• **Word Count:** ${wordCount} words (Good length).\n`;
  feedback += `• **Context (Situation/Task):** ${hasSituation ? "✅ Clearly presented." : "⚠️ Context could be clearer."}\n`;
  feedback += `• **Action Taken:** ${hasAction ? "✅ Demonstrates personal initiative." : "⚠️ Use stronger action verbs like 'Architected' or 'Resolved'."}\n`;
  feedback += `• **Measurable Result:** ${hasResult ? "✅ Great job stating outcomes!" : "⚠️ Tip: Always state the tangible outcome (e.g., 'finished 2 days early' or 'achieved 95% accuracy')."}\n\n`;
  feedback += "*Well done practicing! Would you like another question or an aptitude drill?*";

  return { text: feedback };
}

/**
 * Handles answers to in-chat aptitude drills.
 */
function handleAptitudeDrillResponse(userText, lower) {
  state.activeFlow = null;
  const isB = lower.includes('b') || lower === '1';

  if (isB) {
    state.quizScore.correct++;
    state.quizScore.total++;
    saveStoredData(STORAGE_KEYS.QUIZ_STATS, state.quizScore);
    updateReadinessDashboard();
    return {
      text: "🎉 **Correct! (Option B: 1)**\n\n**Reasoning:** Divisibility rule for 9 states that the sum of digits must be a multiple of 9.\n4 + 5 + 6 + X + 2 = 17 + X.\nThe next multiple of 9 is 18. So 17 + 1 = 18 => **X = 1**.\n\n*Your Aptitude accuracy has been updated in the website tracker!*"
    };
  } else {
    state.quizScore.total++;
    saveStoredData(STORAGE_KEYS.QUIZ_STATS, state.quizScore);
    updateReadinessDashboard();
    return {
      text: "❌ **Incorrect (Correct Answer is B: 1)**\n\n**Reasoning:** For 456X2 to be divisible by 9, the sum of digits (4 + 5 + 6 + X + 2 = 17 + X) must be divisible by 9. The smallest single digit X is 1 (17 + 1 = 18)."
    };
  }
}

/* ============================================================================
   14. CUSTOM JAVASCRIPT ACTION FUNCTIONS
   ============================================================================ */

/**
 * Action 1: Generates an algorithm-backed personalized placement timetable.
 */
function executeGenerateTimetableAction(days, hours, focus) {
  const totalStudyHours = days * hours;
  const aptHours = Math.round(totalStudyHours * 0.35);
  const codingHours = Math.round(totalStudyHours * 0.40);
  const coreCsHours = Math.round(totalStudyHours * 0.15);
  const hrHours = Math.max(1, totalStudyHours - (aptHours + codingHours + coreCsHours));

  const tableHtml = `
    <h4>📅 Your Personalized ${days}-Day Placement Plan</h4>
    <p><strong>Total Prep Budget:</strong> ${totalStudyHours} Hours (${hours} hrs/day) | <strong>Focus:</strong> ${focus}</p>
    <div class="table-responsive">
      <table class="study-table">
        <thead>
          <tr>
            <th>Module</th>
            <th>Allocated Time</th>
            <th>Daily Objective</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Aptitude &amp; Logic</strong></td>
            <td>${aptHours} Hours (~${Math.round(aptHours / days * 10) / 10} h/d)</td>
            <td>Solve 20 Quant &amp; 15 Reasoning MCQs</td>
          </tr>
          <tr>
            <td><strong>Coding &amp; DSA</strong></td>
            <td>${codingHours} Hours (~${Math.round(codingHours / days * 10) / 10} h/d)</td>
            <td>Arrays, Two-Pointers, Stack &amp; Trees</td>
          </tr>
          <tr>
            <td><strong>Core CS (DBMS/OS)</strong></td>
            <td>${coreCsHours} Hours (~${Math.round(coreCsHours / days * 10) / 10} h/d)</td>
            <td>ACID, Joins, Normalization, Scheduling</td>
          </tr>
          <tr>
            <td><strong>HR &amp; Soft Skills</strong></td>
            <td>${hrHours} Hours</td>
            <td>STAR model answers &amp; Mock speaking</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>💡 <em>Tip: You can tick off days on the 20-Day Roadmap above to track your live readiness!</em></p>
  `;

  return {
    text: tableHtml,
    isHtml: true
  };
}

/**
 * Action 2: Fetches exact syllabus from the 20-Day Roadmap.
 */
function executeDayLookupAction(dayNum) {
  if (dayNum < 1 || dayNum > 20) {
    return { text: "The PlacementGenie sprint covers Day 1 to Day 20. Please request a day between 1 and 20." };
  }

  const dayInfo = ROADMAP_DATA.find(d => d.day === dayNum);
  if (!dayInfo) return { text: `Day ${dayNum} not found.` };

  const isCompleted = state.completedDays.includes(dayNum);

  let reply = `📅 **Day ${dayInfo.day}: ${dayInfo.title}** (Week ${dayInfo.week})\n`;
  reply += `**Status:** ${isCompleted ? "✅ Completed" : "⏳ Pending"}\n\n`;
  reply += "**Core Topics to Master:**\n";
  dayInfo.topics.forEach(t => {
    reply += `• ${t}\n`;
  });
  reply += `\n*You can check off Day ${dayInfo.day} in the 20-Day Roadmap section to update your readiness score!*`;

  return { text: reply };
}

/**
 * Action 3: Explains technical concepts based on keywords.
 */
function executeTechnicalExplainAction(lower) {
  if (lower.includes('acid') || lower.includes('dbms')) {
    return {
      text: "💾 **ACID Properties in DBMS:**\n\n• **Atomicity:** All operations succeed or all roll back (e.g. Bank transfer).\n• **Consistency:** Database transitions only between valid states satisfying constraints.\n• **Isolation:** Concurrent transactions don't interfere with each other.\n• **Durability:** Committed transactions survive system reboots and crashes."
    };
  }

  if (lower.includes('deadlock') || lower.includes('os')) {
    return {
      text: "⚙️ **Deadlock in Operating Systems:**\n\nA condition where processes cannot proceed because each holds a resource needed by another.\n\n**4 Coffman Conditions:**\n1. Mutual Exclusion\n2. Hold and Wait\n3. No Preemption\n4. Circular Wait"
    };
  }

  if (lower.includes('tcp') || lower.includes('udp')) {
    return {
      text: "🌐 **TCP vs UDP:**\n\n• **TCP:** Reliable, connection-oriented, 3-way handshake (SYN, SYN-ACK, ACK), ordered delivery, higher latency (HTTP, HTTPS, SSH).\n• **UDP:** Unreliable, connectionless, low-latency, no retransmission (DNS, Streaming, VoIP)."
    };
  }

  return {
    text: "💻 **Technical Interview Tip:** Always clarify constraints (time/space complexity, input sizes) before writing code, and verbally explain your thought process using brute-force first, followed by an optimized O(N) or O(N log N) approach!"
  };
}

/**
 * Action 4: Real-time placement readiness status report from LocalStorage.
 */
function executeProgressReportAction() {
  const roadmapCount = state.completedDays.length;
  const roadmapPct = Math.round((roadmapCount / 20) * 100);
  
  let aptPct = 0;
  if (state.quizScore.total > 0) {
    aptPct = Math.round((state.quizScore.correct / state.quizScore.total) * 100);
  }

  const resumeScore = calculateResumeScore();
  const overall = Math.round((roadmapPct * 0.40) + (aptPct * 0.30) + (resumeScore * 0.30));

  let report = `📊 **Current Placement Readiness: ${overall}%**\n\n`;
  report += `• 📅 **Roadmap Sprint:** ${roadmapCount}/20 Days completed (${roadmapPct}%)\n`;
  report += `• 🧠 **Aptitude Accuracy:** ${aptPct}% (${state.quizScore.correct}/${state.quizScore.total} answered)\n`;
  report += `• 📄 **Resume ATS Score:** ${resumeScore}%\n\n`;

  if (overall >= 75) {
    report += "🏆 **Status: Placement Ready!** You are positioned well for upcoming campus drives.";
  } else {
    report += "🎯 **Recommendation:** Complete 2 more roadmap days and audit your resume checklist to boost your readiness!";
  }

  return { text: report };
}

/* ============================================================================
   15. CHATBOT UI RENDERING & STORAGE PERSISTENCE
   ============================================================================ */

function renderChatMessages() {
  DOM.messagesContainer.innerHTML = '';
  if (state.messages.length === 0) {
    DOM.welcomeScreen.style.display = 'flex';
  } else {
    DOM.welcomeScreen.style.display = 'none';
    state.messages.forEach(msg => renderSingleMessageBubble(msg));
    scrollChatToBottom();
  }
}

function renderSingleMessageBubble(msg) {
  const isUser = msg.sender === 'user';
  
  const row = document.createElement('div');
  row.className = `message-row ${isUser ? 'user-row' : 'bot-row'}`;

  const avatar = document.createElement('div');
  avatar.className = 'message-avatar';
  avatar.setAttribute('aria-hidden', 'true');
  avatar.textContent = isUser ? '🧑‍🎓' : '🧞‍♂️';

  const bubble = document.createElement('div');
  bubble.className = 'message-bubble';

  if (msg.isHtml) {
    bubble.innerHTML = msg.text;
  } else {
    const p = document.createElement('p');
    p.innerHTML = formatMessageText(msg.text);
    bubble.appendChild(p);
  }

  const time = document.createElement('span');
  time.className = 'timestamp';
  time.textContent = msg.timestamp || getCurrentTime();
  bubble.appendChild(time);

  row.appendChild(avatar);
  row.appendChild(bubble);

  DOM.messagesContainer.appendChild(row);
}

function formatMessageText(text) {
  if (!text) return '';
  // Escape HTML tags to prevent XSS
  const escaped = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  
  // Convert markdown bold to <strong>
  const bolded = escaped.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  
  // Convert markdown italic to <em>
  const italicized = bolded.replace(/\*(.*?)\*/g, '<em>$1</em>');

  // Convert newlines to <br>
  return italicized.replace(/\n/g, '<br>');
}

function scrollChatToBottom() {
  DOM.chatViewport.scrollTo({
    top: DOM.chatViewport.scrollHeight,
    behavior: 'smooth'
  });
}

function showBotTyping() {
  state.isTyping = true;
  DOM.typingIndicator.classList.add('active');
  DOM.sendBtn.disabled = true;
  scrollChatToBottom();
}

function hideBotTyping() {
  state.isTyping = false;
  DOM.typingIndicator.classList.remove('active');
  DOM.sendBtn.disabled = false;
}

function autoResizeChatInput() {
  const ta = DOM.userInput;
  ta.style.height = 'auto';
  ta.style.height = `${Math.min(ta.scrollHeight, 100)}px`;
}

/* ============================================================================
   16. ENTITY EXTRACTION UTILITIES
   ============================================================================ */

function extractDaysCount(text) {
  const match = text.match(/(\d+)\s*(days?)/);
  if (match) return parseInt(match[1], 10);
  return null;
}

function extractHoursCount(text) {
  const match = text.match(/(\d+)\s*(hours?|hrs?)/);
  if (match) return parseInt(match[1], 10);
  return null;
}

function getCurrentTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  return `${hours}:${minutes} ${ampm}`;
}

/* ============================================================================
   17. LOCALSTORAGE HELPERS
   ============================================================================ */

function saveStoredData(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error("LocalStorage save error:", e);
  }
}

function loadStoredData() {
  try {
    const savedDays = localStorage.getItem(STORAGE_KEYS.ROADMAP_COMPLETED);
    if (savedDays) state.completedDays = JSON.parse(savedDays);

    const savedQuiz = localStorage.getItem(STORAGE_KEYS.QUIZ_STATS);
    if (savedQuiz) state.quizScore = JSON.parse(savedQuiz);

    const savedResume = localStorage.getItem(STORAGE_KEYS.RESUME_CHECKS);
    if (savedResume) state.resumeChecks = JSON.parse(savedResume);

    const savedChat = localStorage.getItem(STORAGE_KEYS.CHAT_HISTORY);
    if (savedChat) state.messages = JSON.parse(savedChat);
  } catch (e) {
    console.error("LocalStorage load error:", e);
  }
}

/* ============================================================================
   18. START APPLICATION
   ============================================================================ */

document.addEventListener('DOMContentLoaded', initPlacementGenie);
