# 🎓 IELTS Master 90: All-4-Skills Preparation & 90-Day Roadmap Platform

A full-featured, interactive IELTS preparation platform and structured 90-day syllabus divided across 3 months into specialized skill modules: **Listening, Reading, Writing, and Speaking**.

---

## 🚀 Quick Start

You can use this application in two ways:

### Option 1: Direct in Any Web Browser (No installation needed)
Simply double-click [`index.html`](file:///d:/Documents/Website/index.html) or right-click and choose **Open with > Chrome / Edge / Firefox**.

### Option 2: Run with Local Node.js Server
Open your terminal in this directory and run:
```bash
node server.js
```
Then open your browser at **[http://localhost:3000](http://localhost:3000)**.

---

## 📅 The 90-Day Roadmap Architecture (Divided by Skill & Month)

### 🔵 Month 1: Foundation & Skill Mechanics (Days 1 – 30)
- **Primary Goal:** Diagnostic assessment, mastering core question formats, eradicating spelling mistakes, and establishing fundamental frameworks.
- **Week 1 (Days 1–7):** Diagnostic Baseline & Listening Mechanics (Section 1 form completion, spelling conventions, distractor recognition, Section 2 maps/plans, Section 3 dialogues).
- **Week 2 (Days 8–14):** Academic Reading Foundation (Skimming vs scanning, synonym tables, True/False/Not Given logic, Matching Headings, Summary completion).
- **Week 3 (Days 15–21):** Writing Task 1 & Task 2 Fundamentals (Band descriptors, Task 1 overview formula, trend verbs, Task 2 PEEL paragraph structure, thesis statements).
- **Week 4 (Days 22–28):** Speaking Fluency & Lexical Foundations (The 1-2-3 expansion formula for Part 1, 1-minute cue card note-taking method, Part 2 storytelling timeline, Part 3 analytical discourse).
- **Days 29–30:** Month 1 Error Log Audit & Mid-Term Benchmark Mock Exam #1.

---

### 🟢 Month 2: Deep Skill Acceleration & Intensive Drills (Days 31 – 60)
- **Primary Goal:** Pacing, handling complex question types, academic speed training, and elevated lexical resource.
- **Week 5 (Days 31–37):** Advanced Listening (Section 3 debates, Section 4 rapid signposting, Australian/Scottish accents, connected speech, 1.25x speed conditioning).
- **Week 6 (Days 38–44):** Reading Speed & Complex Passage 3 (Matching Information, Matching Features, technical context clues, and the strict **17-20-23 minute pacing protocol**).
- **Week 7 (Days 45–51):** Advanced Writing (Pie charts, dense data tables, Process diagrams using passive voice, Map comparisons, Discussion and Problem/Solution essays).
- **Week 8 (Days 52–58):** Speaking Agility & Idiomatic Collocations (Master Person and Place cue card frameworks, future speculative grammar, eliminating hesitation and filler sounds).
- **Days 59–60:** Timed Writing Sprint (60 mins flat) & Month 2 Comprehensive Benchmark Mock Exam #2.

---

### 🟣 Month 3: Exam Conditioning, Stamina & Band 8.0+ Polish (Days 61 – 90)
- **Primary Goal:** Mental endurance, back-to-back testing simulations, error audits, and final polishing of high-band language.
- **Week 9 (Days 61–67):** Surgical Precision (Top 200 listening spelling words, T/F/NG trap elimination, concession clauses in Task 2, spoken grammatical inversions).
- **Week 10 (Days 68–74):** Full-Length Conditioning (Official Mock #3, root cause error analysis, writing speed drills, unfamiliar abstract speaking topics).
- **Week 11 (Days 75–81):** Peak Performance (Full Mock #4, 50-minute reading blitz, listening under acoustic distraction, thought chunking and intonation).
- **Week 12 (Days 82–90):** Final Polish & Dress Rehearsal (Top 20 Band 9 sentence templates, Dress Rehearsal Mock #6, logistics check, and exam day mindset).

---

## 🛠️ Interactive Features Built Into the Web Platform

1. **Interactive 90-Day Tracker:** Check off daily tasks with real-time progress bar, task counts, and local storage persistence.
2. **Filter & Search Engine:** Instant filtering by Month (1, 2, 3), Skill (Listening, Reading, Writing, Speaking, Mocks), or text search.
3. **Dedicated Skill Laboratories:**
   - 🎧 **Listening Lab:** Interactive audio dialogue simulator with speech synthesis, section breakdowns, and top 40 spelling pitfalls reference.
   - 📖 **Reading Lab:** The 17-20-23 pacing clock, True/False/Not Given decision engine, and an interactive academic reading passage with instant answer explanations.
   - ✍️ **Writing Studio:** Official band descriptors guide, Task 1 & Task 2 blueprints, live essay drafting area with word and paragraph counters, and self-evaluation checklist.
   - 🗣️ **Speaking Simulator:** Random Part 2 Cue Card generator, 60-second prep countdown timer, 2-minute speaking timer, and built-in **Web Audio voice recorder** for recording and reviewing your responses.
4. **Official IELTS Band Score Calculator:** Exact Cambridge conversion tables for Listening and Reading (Academic & General), Writing & Speaking sliders, and official Cambridge rounding rules (.25 -> .5, .75 -> 1.0).
5. **Study Focus Pomodoro Timer:** 25m, 45m, and 60m focus blocks with synthesized audio alerts.
6. **Mistake Dissection Journal:** Local storage error log to record recurring mistakes, question types, and root-cause remedies.
7. **Print / PDF Export:** Clean printable layout formatted for paper or PDF export (`window.print()`).

---

## 📂 Project Structure

```
d:\Documents\Website\
├── index.html          # Main responsive web dashboard & UI
├── app.js              # State management, calculators, timers, audio recorder, labs
├── roadmap-data.js     # Complete 90-day day-by-day curriculum dataset (Days 1–90)
├── styles.css          # Styling, Tailwind typography, glassmorphism, print CSS
├── server.js           # Zero-dependency local Node.js static server
├── package.json        # Project metadata and run scripts
└── README.md           # Documentation and syllabus summary
```
# Ielts90
