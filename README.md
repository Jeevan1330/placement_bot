# PLACEMENTGENIE – AI Campus Placement Preparation Website & Integrated Chatbot

> **College Assignment:** "Build and Deploy Your Own Chatbot"  
> **Tagline:** Your Intelligent Academic & Campus Placement Preparation Companion.  
> **Live Deployment:** GitHub Pages Compatible (100% Client-Side)

---

## 1. PROJECT OVERVIEW & PROBLEM STATEMENT

### The Problem
During college campus placement seasons, undergraduate engineering and degree students face high stress and fragmentation:
- **Aptitude Tests:** Students struggle with quantitative speed, formulas, and logical reasoning under time constraints.
- **Technical Rounds:** Core computer science concepts (Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks) are spread across scattered textbooks.
- **HR Rounds & Soft Skills:** Many technically proficient students fail behavioral interviews due to unstructured answers and lack of preparation with the industry-standard **STAR method** (Situation, Task, Action, Result).
- **ATS Resume Rejections:** Over 75% of candidate resumes are filtered out by Automated Applicant Tracking Systems (ATS) due to poor formatting and weak action verbs.
- **Lack of Guidance:** Students rarely have access to 24/7 personalized mentorship to test their knowledge, calculate readiness, or structure a day-by-day revision schedule.

### The PlacementGenie Solution
**PlacementGenie** is a complete, modern web platform engineered with an integrated floating **AI Placement Assistant Chatbot**. It provides a structured **20-Day Placement Sprint**, an interactive **Aptitude Practice Lab** with live score tracking, a **Technical Knowledge Hub**, **HR Interview Preparation**, an **ATS Resume Auditor**, and a **Student Placement Readiness Dashboard**.

The integrated chatbot functions directly inside the browser using natural language intent recognition, entity extraction, multi-turn slot filling, and algorithmic action dispatching—without requiring expensive third-party APIs, external servers, or databases.

---

## 2. STRICT TECHNOLOGY STACK

This application adheres to zero-dependency client-side standards:

| Technology | Purpose |
| :--- | :--- |
| **HTML5** | Semantic structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<details>`, `<footer>`), accessibility ARIA labels. |
| **CSS3** | Modern dark-accented academic theme (Navy Blue `#0b0f19`, Purple `#7c3aed`, Crisp White `#ffffff`), responsive flexbox & grid layouts, glassmorphism, micro-animations, and mobile drawer transitions. |
| **Vanilla JavaScript (ES6+)** | Modular logic controller, natural language intent recognition, regex entity extraction, multi-turn slot filling, custom calculation actions, and DOM manipulation. |
| **Browser LocalStorage** | Persistent storage for roadmap completion, aptitude scores, resume checklist state, and conversation history. |
| **GitHub Pages** | Free, permanent, zero-configuration cloud hosting. |

> **No Heavy Frameworks:** Zero Node.js, zero React, zero Python, zero backend servers, and zero paid API keys. All intelligence runs 100% locally and privately in the student's browser.

---

## 3. PROJECT FILE STRUCTURE

To maintain maximum simplicity and clean deployment on GitHub Pages, the project strictly uses only four files in the project root:

```text
PlacementGenie/
│
├── index.html     --> Complete webpage sections & integrated chatbot markup
├── style.css      --> Modern responsive styling (Navy, Purple & White design)
├── script.js      --> Interactive website modules & Natural Language Chatbot Brain
└── README.md      --> Comprehensive documentation, testing & deployment guide
```

---

## 4. CORE PLATFORM MODULES

### Module 1: The 20-Day Placement Sprint (`#planner`)
- A day-by-day structured curriculum dividing preparation into 4 distinct weeks:
  - **Week 1 (Days 1–5):** Quantitative Aptitude, Numbers, Speed-Distance, Logic, and Reading Comprehension.
  - **Week 2 (Days 6–10):** Data Structures & Algorithms (Arrays, Two-Pointers, Searching, Linked Lists, Stacks, Trees).
  - **Week 3 (Days 11–15):** Core CS Fundamentals (OOP, DBMS & SQL, Operating Systems, Computer Networks, System Projects).
  - **Week 4 (Days 16–20):** HR Behavioral Rounds, STAR Method, Corporate English, Full Mock Tests, and Mental Polish.
- Features interactive checkboxes for each day that automatically update the student's live Placement Readiness Score in `localStorage`.
- Includes week-by-week filter tabs (*All 20 Days*, *Week 1*, *Week 2*, *Week 3*, *Week 4*).

### Module 2: Interactive Aptitude Practice Lab (`#aptitude`)
- Real-world campus placement multiple-choice questions across three categories: **Quantitative**, **Logical Reasoning**, and **Verbal Ability**.
- Instant visual feedback: Correct choices turn green (`#10b981`), while incorrect choices turn red (`#ef4444`).
- Displays step-by-step mathematical reasoning and formula explanations for every question.
- Real-time score counter (`Score: X / Y`) saved to browser memory.

### Module 3: Core Technical Interview Hub (`#technical`)
- Interactive tab switcher covering **DSA**, **DBMS & SQL**, **Operating Systems**, **Computer Networks**, and **Web/Programming**.
- Expandable `<details>` accordions with in-depth model answers, memory diagrams, time/space complexity comparisons, and real-world system architecture examples.

### Module 4: HR Interview Preparation & STAR Method (`#hr-interview`)
- Complete guide to the industry-standard **STAR Response Framework** (**S**ituation, **T**ask, **A**ction, **R**esult).
- Winning strategies and model answers for top behavioral questions (*"Tell me about yourself"*, *"What is your greatest weakness?"*, *"Questions to ask the recruiter"*).

### Module 5: ATS Resume Improvement Assistant (`#resume`)
- **Interactive 9-Point ATS Checklist:** Tests for single-column layout, quantified metrics, strong action verbs, standard headings, and single-page constraints.
- Real-time weighted percentage calculation (`0%` to `100%`).
- **Power Action Verb Bank:** Categorized lists of high-impact words (*Architected*, *Automated*, *Spearheaded*, *Diagnosed*, *Refactored*) to replace weak phrasing.

### Module 6: Student Placement Readiness Dashboard (`#tracker`)
- An animated circular progress gauge displaying the student's **Overall Placement Readiness Score (%)**.
- Dynamically weighted formula:
  $$\text{Readiness Score} = (\text{Roadmap Progress} \times 0.40) + (\text{Aptitude Accuracy} \times 0.30) + (\text{Resume ATS Score} \times 0.30)$$
- Real-time status badge (*"Getting Started"*, *"Steady Progress"*, *"Campus Placement Ready 🚀"*).
- One-click progress reset button with confirmation dialogue.

---

## 5. CHATBOT INTELLIGENCE ENGINE (ASSIGNMENT CRITERIA)

The integrated chatbot (accessible via the floating launcher button at the bottom-right corner) provides true conversational capability:

### A. Intent Recognition
Uses JavaScript regular expressions, pattern scoring, and keyword frequency matching to detect:
1. `GREETING` (*hello, hi, hey, greetings*)
2. `TIMETABLE` (*timetable, study plan, schedule, generate plan*)
3. `ROADMAP_LOOKUP` (*what is day 7, show day 12, syllabus for day 5*)
4. `APTITUDE_DRILL` (*quiz me, aptitude question, math puzzle*)
5. `TECHNICAL_EXPLAIN` (*ACID properties, deadlocks, TCP vs UDP, linked lists*)
6. `HR_MOCK` (*HR interview, behavioral question, tell me about yourself*)
7. `RESUME_ADVICE` (*resume tips, ATS advice, action verbs*)
8. `PROGRESS_REPORT` (*show my progress, how ready am I, test score*)
9. `CANCEL / RESTART` (*cancel, stop, restart, clear history*)
10. `UNKNOWN / FALLBACK` (*graceful error handling with suggested prompt chips*)

### B. Entity Extraction
Extracts parameters directly from user text:
- **Day Numbers:** Extracts `day 5`, `day 12`, `day 18`.
- **Number of Days:** Extracts `10 days`, `15 days`, `20 days`.
- **Study Hours:** Extracts `3 hours`, `4 hrs`, `5 hours daily`.
- **Topics:** Extracts `DSA`, `DBMS`, `OS`, `Networks`, `Python`, `Quant`.

### C. Multi-Turn Slot Filling
When creating a customized timetable, the bot systematically collects missing parameters:
- **Turn 1 (Days Slot):** Asks how many days remain before the student's placement drive.
- **Turn 2 (Hours Slot):** Asks how many study hours the student can commit daily.
- **Turn 3 (Focus Slot):** Asks which subject is their priority or weakest area.
- **Turn 4 (Action Execution):** Generates an HTML study timetable table with time budgets and revision sessions.

### D. Context Management
The bot maintains an internal state machine (`state.activeFlow`, `state.flowStep`, `state.flowSlots`):
- Students can cancel a flow at any time by typing `"cancel"` or `"stop"`.
- Remembers in-progress aptitude questions and evaluates the student's answer.
- Evaluates student HR responses against the **STAR criteria** (checking for Situation context, Action verbs, and Measurable Results).

### E. Custom JavaScript Actions
1. `executeGenerateTimetableAction(days, hours, focus)`: Computes subject time allocation and outputs a structured HTML table.
2. `executeDayLookupAction(dayNum)`: Connects with the 20-Day database and returns the exact topics for any requested day.
3. `executeTechnicalExplainAction(topic)`: Delivers concise technical explanations with real-world examples.
4. `handleHRMockEvaluation(userResponse)`: Evaluates user's HR answer for word count and STAR framework compliance.
5. `executeProgressReportAction()`: Directly reads live data from the website's `localStorage` and reports overall placement readiness.
6. `handleAptitudeDrillResponse(userText)`: Scores aptitude answers and increments the website quiz counter.

---

## 6. HOW TO RUN LOCALLY

Because PlacementGenie uses pure web standards without build tools, running it is effortless:

1. **Download / Clone:** Place `index.html`, `style.css`, `script.js`, and `README.md` into a single folder on your computer.
2. **Double-Click:** Double-click `index.html` to open it in your default web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari).
3. **No Web Server Required:** The entire website, quiz scoring, and AI chatbot run client-side via standard `file:///` protocols.

---

## 7. STEP-BY-STEP GITHUB REPOSITORY CREATION & DEPLOYMENT

Follow these simple steps to deploy your project live to the internet for free using **GitHub Pages**:

### Step 1: Create a GitHub Account
1. Open your web browser and visit: [https://github.com](https://github.com)
2. If you don't have an account, click **Sign up**, enter your email, create a password, and verify your account.
3. If you already have an account, click **Sign in**.

### Step 2: Create a New Public Repository
1. On GitHub, look at the top-right corner and click the **`+`** icon → select **New repository**.
2. **Repository name:** Enter `PlacementGenie` (or `placement-chatbot`).
3. **Description (optional):** Enter `AI Campus Placement Preparation Website & Integrated Chatbot`.
4. **Public / Private:** Select **Public** *(GitHub Pages requires public repositories on free accounts)*.
5. **Initialize repository:** Leave all checkboxes (README, .gitignore, license) unchecked.
6. Click the green **Create repository** button.

### Step 3: Upload the 4 Project Files
1. On the new repository page, click the link that says **"uploading an existing file"**.
2. Open your computer's File Explorer and navigate to your project folder:
   `c:\Users\Jeevan\OneDrive\Desktop\ITV DA AND DS\ITV AI\bots project`
3. Drag and drop all **4 files** into the GitHub upload area:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
4. Wait for all 4 files to finish uploading.
5. Under **Commit changes**, enter `Initial commit - PlacementGenie complete website and chatbot`.
6. Click the green **Commit changes** button.

### Step 4: Verify Uploaded Files
Confirm that your repository root displays exactly these 4 files:
```text
index.html
style.css
script.js
README.md
```
*(Ensure `index.html` is directly in the root directory and not inside a subfolder).*

### Step 5: Enable GitHub Pages
1. In your GitHub repository, click on the **Settings** tab (gear icon at the top).
2. On the left sidebar menu, scroll down and click on **Pages** (under the "Code and automation" section).
3. Under **Build and deployment**:
   - **Source:** Ensure `Deploy from a branch` is selected.
   - **Branch:** Click the dropdown and select **`main`** (or `master`).
   - **Folder:** Keep it set to **`/(root)`**.
4. Click the **Save** button.

### Step 5: Obtain and Test Your Public Deployment Link
1. Wait **1 to 2 minutes** while GitHub deploys your website.
2. Refresh the GitHub Pages settings page.
3. You will see a banner:
   > *"Your site is live at `https://<your-username>.github.io/PlacementGenie/`"*
4. Click the link to open your live website in a new tab!
5. Test the floating chatbot, click prompt chips, solve an aptitude question, check off roadmap days, and audit your resume.

---

## 8. COMPREHENSIVE TESTING REPORT

| Test # | Test Scenario | Expected Outcome | Result |
| :---: | :--- | :--- | :---: |
| **1** | Navigation smooth scroll | Clicking nav links (`20-Day Plan`, `Aptitude Lab`, etc.) scrolls smoothly to section | **PASSED** |
| **2** | Mobile drawer navigation | Hamburger button opens and closes mobile menu on screen widths `< 768px` | **PASSED** |
| **3** | Floating launcher button | Clicking bottom-right launcher button opens/minimizes chatbot widget with icon animation | **PASSED** |
| **4** | Roadmap week filter tabs | Clicking "Week 2: DSA & Coding" shows only Days 6–10; "All 20 Days" shows all 20 | **PASSED** |
| **5** | Roadmap checkbox persistence | Checking Day 1 updates card style (`.completed`), saves to LocalStorage, updates readiness % | **PASSED** |
| **6** | Aptitude category switcher | Switching between Quant, Logical, and Verbal loads category-specific questions | **PASSED** |
| **7** | Aptitude option validation | Clicking an option highlights correct (green) or wrong (red) and reveals explanation | **PASSED** |
| **8** | Aptitude score counter | Correct answers increment live score counter and update Readiness Dashboard metric | **PASSED** |
| **9** | Technical accordions | Clicking question summary smoothly toggles answer content and rotates `+` icon | **PASSED** |
| **10** | ATS resume checklist | Checking weighted items updates the `0%–100%` readiness score pill dynamically | **PASSED** |
| **11** | Readiness score calculation | Weighted formula correctly combines roadmap %, aptitude accuracy %, and resume % | **PASSED** |
| **12** | Chat greeting recognition | Typing `"Hello"` triggers polite assistant introduction with capabilities overview | **PASSED** |
| **13** | Slot filling (Timetable) | Typing `"Create timetable"` prompts for days → hours → focus, then outputs HTML timetable | **PASSED** |
| **14** | Entity extraction (Day lookup)| Typing `"What is Day 7?"` extracts `Day 7` and outputs exact DSA syllabus | **PASSED** |
| **15** | In-chat aptitude quiz | Typing `"Quiz me on aptitude"` displays interactive question; typing `"B"` scores and explains | **PASSED** |
| **16** | HR STAR evaluation | Submitting HR answer evaluates response length, context, action verbs, and results | **PASSED** |
| **17** | Flow cancellation | Typing `"cancel"` or `"stop"` exits active slot filling and restores default prompt mode | **PASSED** |
| **18** | LocalStorage restoration | Refreshing the web browser preserves checked days, quiz score, resume score, and chat | **PASSED** |

---

## 9. ACADEMIC SUBMISSION METADATA

- **Project Title:** STUDYGENIE / PLACEMENTGENIE
- **Assignment Name:** Build and Deploy Your Own Chatbot
- **Submission Type:** Web Application + Interactive AI Chatbot
- **Author:** College Student Developer
- **License:** Open Source MIT License (Educational Use)
