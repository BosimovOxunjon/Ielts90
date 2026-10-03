// IELTS Master 90 - Complete 90-Day Curriculum & Skill Data
// Divided into 3 Months (30 Days each) with targeted skills

const ROADMAP_DATA = [
  // ==========================================
  // MONTH 1: FOUNDATION & SKILL MECHANICS (Days 1 - 30)
  // ==========================================
  {
    day: 1,
    month: 1,
    week: 1,
    skill: "Diagnostic",
    skillCategory: "mock",
    title: "Diagnostic Assessment & Baseline Band Score",
    duration: "150 mins",
    summary: "Establish your starting baseline across all four skills to identify your strongest and weakest areas.",
    tasks: [
      { id: "t1-1", text: "Take an untimed official diagnostic Listening test (Cambridge IELTS Section 1-4).", done: false },
      { id: "t1-2", text: "Take an untimed official diagnostic Academic Reading test (3 passages).", done: false },
      { id: "t1-3", text: "Calculate your raw scores and convert to starting band estimates.", done: false },
      { id: "t1-4", text: "Create your personal 'IELTS Error Journal' notebook or digital document.", done: false }
    ],
    proTip: "Do not worry about your initial band score. The purpose of Day 1 is to reveal your exact error patterns (e.g. spelling, speed, or question comprehension).",
    resources: "Cambridge IELTS Practice Test 14 or 15 Diagnostic Section"
  },
  {
    day: 2,
    month: 1,
    week: 1,
    skill: "Listening",
    skillCategory: "listening",
    title: "Section 1 Mastery: Form Completion & Numbers",
    duration: "90 mins",
    summary: "Master the easiest yet most prone to careless errors section: names, numbers, dates, and form filling.",
    tasks: [
      { id: "t2-1", text: "Study standard IELTS spelling conventions for numbers, telephone codes, currencies, and dates.", done: false },
      { id: "t2-2", text: "Practice predicting answer types (noun, date, number, price) during the 30-second prep window.", done: false },
      { id: "t2-3", text: "Complete 3 dedicated Section 1 practice exercises focusing on phone numbers and postal codes.", done: false },
      { id: "t2-4", text: "Log all misspelled words in your Error Journal with correct British/American spellings.", done: false }
    ],
    proTip: "Speakers frequently self-correct in Section 1 (e.g., 'That's 0774... oh wait, sorry, 0775'). Always wait for confirmation before committing your answer.",
    resources: "IELTS Listening Section 1 Audio Drills & Number Dictation"
  },
  {
    day: 3,
    month: 1,
    week: 1,
    skill: "Listening",
    skillCategory: "listening",
    title: "Section 1: Addresses, Names & Distractor Detection",
    duration: "90 mins",
    summary: "Learn to catch subtle phonetics (A vs E, I vs E, B vs P, 15 vs 50) and identify conversational distractors.",
    tasks: [
      { id: "t3-1", text: "Drill alphabet phonetics for tricky letter pairs (J/G, A/E/I, W, V/B).", done: false },
      { id: "t3-2", text: "Practice word-count constraint discipline: 'NO MORE THAN TWO WORDS AND/OR A NUMBER'.", done: false },
      { id: "t3-3", text: "Complete 2 Section 1 tests under real 1-listen conditions.", done: false },
      { id: "t3-4", text: "Review audio transcripts to highlight where the distractor was placed.", done: false }
    ],
    proTip: "If the instruction says 'NO MORE THAN ONE WORD AND/OR A NUMBER', writing 'the library' instead of 'library' gives zero marks.",
    resources: "Section 1 Form Filling Drills & Phonetics Chart"
  },
  {
    day: 4,
    month: 1,
    week: 1,
    skill: "Listening",
    skillCategory: "listening",
    title: "Section 2: Social Context Monologues & Multiple Choice",
    duration: "90 mins",
    summary: "Tackle single-speaker talks (museum guide, orientation officer) with tricky Multiple Choice questions.",
    tasks: [
      { id: "t4-1", text: "Analyze the 3-step Multiple Choice method: Underline stem keywords, scan options, eliminate false leads.", done: false },
      { id: "t4-2", text: "Understand synonym paraphrasing: Options rarely use the exact words spoken by the speaker.", done: false },
      { id: "t4-3", text: "Complete 2 Section 2 tests focusing on short and long multiple choice.", done: false },
      { id: "t4-4", text: "Identify at least 5 instances where a spoken distractor tempted you to pick the wrong option.", done: false }
    ],
    proTip: "In Multiple Choice, the speaker will often mention words from ALL three choices (A, B, and C). The correct answer is the only one that directly answers the question stem.",
    resources: "Section 2 Monologues & Multiple Choice Elimination Guide"
  },
  {
    day: 5,
    month: 1,
    week: 1,
    skill: "Listening",
    skillCategory: "listening",
    title: "Section 2: Map & Diagram Labelling Navigation",
    duration: "90 mins",
    summary: "Master directional prepositions and spatial vocabulary for campus, park, and building floorplans.",
    tasks: [
      { id: "t5-1", text: "Memorize spatial signposts: clockwise, adjacent to, opposite, bend in the path, intersection, north-east corner.", done: false },
      { id: "t5-2", text: "Locate the starting point on the map immediately before the audio begins (look for 'You are here' or the entrance).", done: false },
      { id: "t5-3", text: "Execute 3 Map & Plan Labelling exercises, tracing the speaker's path with your pen/cursor in real-time.", done: false },
      { id: "t5-4", text: "Analyze missed items and list spatial phrases that caused hesitation.", done: false }
    ],
    proTip: "Keep your eyes on the map landmarks! If you lose your place on the map, listen for fixed reference points like the reception desk or main gate to reset.",
    resources: "Map Labelling Practice Pack & Directional Vocabulary Sheet"
  },
  {
    day: 6,
    month: 1,
    week: 1,
    skill: "Listening",
    skillCategory: "listening",
    title: "Section 3: Academic Discussions & Multi-Speaker Matching",
    duration: "100 mins",
    summary: "Navigate 2-3 university students discussing assignments, research projects, or tutor feedback.",
    tasks: [
      { id: "t6-1", text: "Learn to distinguish multiple voices (male student, female student, professor) within 10 seconds.", done: false },
      { id: "t6-2", text: "Practice 'Who said what?' matching questions: track agreements, disagreements, and compromises.", done: false },
      { id: "t6-3", text: "Complete 2 Section 3 tests with matching boxes and flow-chart completion.", done: false },
      { id: "t6-4", text: "Listen while reading the audio script to verify why options with partial matches were incorrect.", done: false }
    ],
    proTip: "Pay close attention to concession words: 'I see your point, but...', 'Initially I thought so, yet...', 'Wouldn't it be better if...'. The conclusion comes after the concession.",
    resources: "Section 3 Academic Dialogue Series & Audio Transcripts"
  },
  {
    day: 7,
    month: 1,
    week: 1,
    skill: "Listening",
    skillCategory: "listening",
    title: "Week 1 Review & Listening Section 1-4 Mini-Mock",
    duration: "100 mins",
    summary: "Synthesize all Listening strategies learned this week with a full 40-question timed practice test.",
    tasks: [
      { id: "t7-1", text: "Complete 1 full timed official Listening test (Section 1 to 4: 40 questions).", done: false },
      { id: "t7-2", text: "Grade strictly using official answer keys (spelling and singular/plural matter 100%).", done: false },
      { id: "t7-3", text: "Record your Week 1 Band Score and compare against Day 1 baseline.", done: false },
      { id: "t7-4", text: "Write down your top 3 Listening recurring errors in your error journal.", done: false }
    ],
    proTip: "Always use the 10 minutes (or 2 mins for computer-delivered) transfer time to double-check subject-verb agreement and singular/plural endings ('s').",
    resources: "Official Cambridge IELTS Listening Test 1"
  },

  // WEEK 2: READING FOUNDATION & CORE QUESTION TYPES
  {
    day: 8,
    month: 1,
    week: 2,
    skill: "Reading",
    skillCategory: "reading",
    title: "Reading Anatomy, Skimming & Scanning Mechanics",
    duration: "90 mins",
    summary: "Break down the structure of IELTS Academic passages and master the two fundamental reading speeds.",
    tasks: [
      { id: "t8-1", text: "Understand the difference between Skimming (reading for gist, 2-3 mins) and Scanning (searching specific keywords, 30 secs).", done: false },
      { id: "t8-2", text: "Practice paragraph skimming: read topic sentence (first sentence), linkers, and concluding sentence.", done: false },
      { id: "t8-3", text: "Perform 3 keyword scanning drills on 800-word academic articles (locating dates, names, capitalized terms).", done: false },
      { id: "t8-4", text: "Read 1 complete Passage 1 without answering questions, writing a 5-word summary beside each paragraph.", done: false }
    ],
    proTip: "Never read the passage word-for-word before reading the questions. Read questions first to know what you are hunting for.",
    resources: "Passage 1 Gist Reading Drills & Keyword Scanning Worksheets"
  },
  {
    day: 9,
    month: 1,
    week: 2,
    skill: "Reading",
    skillCategory: "reading",
    title: "Keyword Paraphrasing & Synonym Tables",
    duration: "90 mins",
    summary: "Recognize how IELTS questions paraphrase passage content using synonyms and syntactic shifts.",
    tasks: [
      { id: "t9-1", text: "Learn the 4 types of paraphrasing: Synonym substitution, Part of speech change, Active to passive, Antonym + negation.", done: false },
      { id: "t9-2", text: "Build a 3-column 'Vocabulary & Synonym Table' (Question Keyword | Passage Equivalent | Meaning).", done: false },
      { id: "t9-3", text: "Solve 10 Sentence Completion questions using targeted synonym identification.", done: false },
      { id: "t9-4", text: "Add 15 academic synonyms to your flashcard deck (e.g. curb -> restrict, pioneer -> introduce).", done: false }
    ],
    proTip: "If you search for the exact keyword from the question in the text, you might fall for a trap. Look for the meaning/concept, not just identical spelling.",
    resources: "Academic Collocations & Paraphrasing Index"
  },
  {
    day: 10,
    month: 1,
    week: 2,
    skill: "Reading",
    skillCategory: "reading",
    title: "True / False / Not Given (T/F/NG) Logic Mastery",
    duration: "100 mins",
    summary: "Master the most dreaded question type by learning exact mathematical definitions of True, False, and Not Given.",
    tasks: [
      { id: "t10-1", text: "Memorize definitions: TRUE = 100% matches fact; FALSE = Directly contradicts/opposite; NOT GIVEN = Impossible to verify.", done: false },
      { id: "t10-2", text: "Watch for qualifier words that flip logic: all, some, never, occasionally, likely, guaranteed.", done: false },
      { id: "t10-3", text: "Solve 15 isolated T/F/NG questions with step-by-step logic justification for each answer.", done: false },
      { id: "t10-4", text: "Analyze 3 questions where you mistook 'False' for 'Not Given'.", done: false }
    ],
    proTip: "Golden Rule: 'Not Given' doesn't mean the topic isn't mentioned; it means the specific relationship or claim stated in the question is neither confirmed nor denied by the text.",
    resources: "T/F/NG Step-by-Step Logic Guide & 20 Practice Items"
  },
  {
    day: 11,
    month: 1,
    week: 2,
    skill: "Reading",
    skillCategory: "reading",
    title: "Yes / No / Not Given: Identifying Writer's Claims",
    duration: "90 mins",
    summary: "Understand the distinction between factual reporting (T/F/NG) and opinions/claims (Y/N/NG).",
    tasks: [
      { id: "t11-1", text: "Identify opinion markers in texts: argue, assert, believe, speculate, contend, it is doubtful.", done: false },
      { id: "t11-2", text: "Practice distinguishing an author's personal voice from cited external research.", done: false },
      { id: "t11-3", text: "Complete a full 14-question Passage 2 focusing on Yes/No/Not Given.", done: false },
      { id: "t11-4", text: "Double check you didn't write 'True' instead of 'Yes' on your answer sheet (which costs points).", done: false }
    ],
    proTip: "Writing 'TRUE' when the question specifies 'YES' can result in 0 points depending on strict examiner policies. Always write the exact requested term.",
    resources: "Passage 2 Opinion Analysis & Y/N/NG Drill Sheet"
  },
  {
    day: 12,
    month: 1,
    week: 2,
    skill: "Reading",
    skillCategory: "reading",
    title: "Matching Headings to Paragraphs",
    duration: "100 mins",
    summary: "Conquer matching headings by distilling the central main idea of each paragraph rather than isolated details.",
    tasks: [
      { id: "t12-1", text: "Learn the Heading Strategy: Cross out used headings, underline keywords in headings list first.", done: false },
      { id: "t12-2", text: "Read paragraphs to determine the main theme vs secondary illustrative examples.", done: false },
      { id: "t12-3", text: "Complete 2 full sets of Matching Headings questions.", done: false },
      { id: "t12-4", text: "Write down the trap headings and identify why they only represented a minor detail.", done: false }
    ],
    proTip: "If two headings seem equally valid for a paragraph, one heading is almost always a 'distractor' that mentions a specific example rather than the overarching paragraph idea.",
    resources: "Matching Headings Masterclass & Passage Exercises"
  },
  {
    day: 13,
    month: 1,
    week: 2,
    skill: "Reading",
    skillCategory: "reading",
    title: "Summary, Note & Diagram Completion",
    duration: "90 mins",
    summary: "Harness grammatical clues to predict missing words in summary completion questions.",
    tasks: [
      { id: "t13-1", text: "Predict part of speech (noun, adjective, verb, adverb) for each blank before reading.", done: false },
      { id: "t13-2", text: "Differentiate between 'Direct words from text' vs 'Choose from list of provided options (A-H)'.", done: false },
      { id: "t13-3", text: "Solve 2 Summary Completion tasks and 1 Diagram Labelling task.", done: false },
      { id: "t13-4", text: "Check grammar coherence: read the completed sentence to verify it is grammatically flawless.", done: false }
    ],
    proTip: "Your inserted word MUST fit the sentence grammatically. If the sentence requires a plural noun and you write a singular, your answer is incorrect.",
    resources: "Summary Completion & Grammar Clues Worksheet"
  },
  {
    day: 14,
    month: 1,
    week: 2,
    skill: "Reading",
    skillCategory: "reading",
    title: "Week 2 Review: Passage 1 & 2 Timed Benchmark",
    duration: "100 mins",
    summary: "Put all reading question strategies together under strict 40-minute timing for 2 complete passages.",
    tasks: [
      { id: "t14-1", text: "Complete Passage 1 (13 questions) in strictly 18 minutes.", done: false },
      { id: "t14-2", text: "Complete Passage 2 (13 questions) in strictly 20 minutes.", done: false },
      { id: "t14-3", text: "Grade both passages and record accuracy percentage per question type.", done: false },
      { id: "t14-4", text: "Review all mistakes: was the error due to vocabulary, grammar, or time pressure?", done: false }
    ],
    proTip: "Never spend more than 90 seconds on any single question. If stuck, make an educated guess, circle the question number, and move forward immediately.",
    resources: "Cambridge IELTS Reading Test (Passages 1 & 2)"
  },

  // WEEK 3: WRITING TASK 1 & TASK 2 FUNDAMENTALS
  {
    day: 15,
    month: 1,
    week: 3,
    skill: "Writing",
    skillCategory: "writing",
    title: "IELTS Writing Band Descriptors Breakdown",
    duration: "90 mins",
    summary: "Deep dive into the 4 assessment criteria: Task Achievement (TA), Coherence & Cohesion (CC), Lexical Resource (LR), and Grammatical Range & Accuracy (GRA).",
    tasks: [
      { id: "t15-1", text: "Study official public band descriptors for Task 1 and Task 2 across Band 6, 7, 8, and 9.", done: false },
      { id: "t15-2", text: "Identify the requirements for Band 7+ Task Achievement: clear overview, all key features highlighted.", done: false },
      { id: "t15-3", text: "Analyze sample Band 6 vs Band 8 essays side-by-side to spot specific differences in cohesion and grammar.", done: false },
      { id: "t15-4", text: "Create your personal Writing Checklist to use for self-evaluations.", done: false }
    ],
    proTip: "A high-scoring essay doesn't require rare or archaic vocabulary. It requires natural, precise collocations, clear paragraph progression, and error-free complex sentences.",
    resources: "Official IELTS Writing Band Descriptors & Model Comparisons"
  },
  {
    day: 16,
    month: 1,
    week: 3,
    skill: "Writing",
    skillCategory: "writing",
    title: "Task 1: Paraphrasing the Prompt & Writing the Overview",
    duration: "90 mins",
    summary: "Master the first two critical elements of any Task 1 Academic report: Introduction and the Overview paragraph.",
    tasks: [
      { id: "t16-1", text: "Learn 5 sentence starters to paraphrase any prompt: 'The line graph illustrates...', 'The bar chart compares...'.", done: false },
      { id: "t16-2", text: "Master the 'Overview Formula': Identify 2-3 main trends, highest points, or key anomalies without quoting data figures.", done: false },
      { id: "t16-3", text: "Write 4 introductions and 4 overviews for 4 different charts (Line, Bar, Pie, Table).", done: false },
      { id: "t16-4", text: "Check that your overview contains NO specific numbers or dates (reserve figures for body paragraphs).", done: false }
    ],
    proTip: "Without a clear overview paragraph, your Task Achievement score is automatically capped at Band 5, no matter how good your grammar is!",
    resources: "Task 1 Overview Writing Formula & 10 Chart Prompts"
  },
  {
    day: 17,
    month: 1,
    week: 3,
    skill: "Writing",
    skillCategory: "writing",
    title: "Task 1: Line Graphs & Dynamic Trend Vocabulary",
    duration: "90 mins",
    summary: "Learn dynamic verbs, adverbs, and comparative expressions to describe changes over time with high precision.",
    tasks: [
      { id: "t17-1", text: "Master trend verbs: soar, surge, escalate, dip, plummet, fluctuate, level off, plateau.", done: false },
      { id: "t17-2", text: "Master degree and speed adverbs: dramatically, marginally, steadily, sharply, exponentially.", done: false },
      { id: "t17-3", text: "Learn noun-verb conversions: 'increased significantly' -> 'witnessed a significant increase'.", done: false },
      { id: "t17-4", text: "Draft a complete 150-word Line Graph report in 25 minutes.", done: false }
    ],
    proTip: "Alternate between verbal phrases ('sales rose moderately') and nominal phrases ('there was a moderate rise in sales') to demonstrate Grammatical Range.",
    resources: "Line Graph Lexicon & Model Band 9 Line Graph Report"
  },
  {
    day: 18,
    month: 1,
    week: 3,
    skill: "Writing",
    skillCategory: "writing",
    title: "Task 1: Bar Charts & Comparative Language",
    duration: "90 mins",
    summary: "Describe static comparisons, rankings, and cross-category groupings across multiple countries or industries.",
    tasks: [
      { id: "t18-1", text: "Study comparative structures: 'in stark contrast to', 'followed closely by', 'surpassed only by', 'accounted for'.", done: false },
      { id: "t18-2", text: "Practice grouping data logically into 2 distinct body paragraphs (never write a separate paragraph for each bar!).", done: false },
      { id: "t18-3", text: "Write a complete Bar Chart report (150-180 words).", done: false },
      { id: "t18-4", text: "Check word count: ensure you hit at least 150 words without repetitive phrasing.", done: false }
    ],
    proTip: "Do not attempt to mention every single figure in the chart. Group similar categories together and highlight only the highest, lowest, and key differences.",
    resources: "Bar Chart Grouping Guide & Model Band 8+ Essays"
  },
  {
    day: 19,
    month: 1,
    week: 3,
    skill: "Writing",
    skillCategory: "writing",
    title: "Task 2: Essay Structures & Prompt Deconstruction",
    duration: "100 mins",
    summary: "Deconstruct the 5 major Task 2 prompt types and learn the standardized 4-paragraph essay architecture.",
    tasks: [
      { id: "t19-1", text: "Classify the 5 essay types: Opinion (Agree/Disagree), Discussion, Advantages/Disadvantages, Problem/Solution, Two-Part.", done: false },
      { id: "t19-2", text: "Master the 4-paragraph architecture: Introduction (2 sentences), Body 1 (4-5 sentences), Body 2 (4-5 sentences), Conclusion (2 sentences).", done: false },
      { id: "t19-3", text: "Practice 5-minute planning: brainstorm 2 main arguments + supporting examples for 3 different prompts.", done: false },
      { id: "t19-4", text: "Write 3 complete introductory paragraphs with clear thesis statements.", done: false }
    ],
    proTip: "Never skip the 5-minute planning phase. Candidates who start writing immediately without a plan almost always lose marks on Coherence and Cohesion.",
    resources: "Task 2 Essay Skeleton & Prompt Analysis Templates"
  },
  {
    day: 20,
    month: 1,
    week: 3,
    skill: "Writing",
    skillCategory: "writing",
    title: "Task 2: Opinion Essays & Thesis Formulation",
    duration: "100 mins",
    summary: "Write strong, unambiguous Opinion essays ('To what extent do you agree or disagree?').",
    tasks: [
      { id: "t20-1", text: "Learn the distinction between a strong one-sided stance vs a balanced/nuanced stance.", done: false },
      { id: "t20-2", text: "Formulate crystal-clear thesis statements: 'This essay completely agrees because X and Y.'", done: false },
      { id: "t20-3", text: "Draft a complete Opinion essay (260-280 words) within 40 minutes.", done: false },
      { id: "t20-4", text: "Review against Band 7 criteria: Is your position clear throughout the entire essay?", done: false }
    ],
    proTip: "If you choose to agree completely, do not contradict yourself in Body 2. Every single paragraph must reinforce your thesis.",
    resources: "Opinion Essay Masterclass & High-Scoring Examples"
  },
  {
    day: 21,
    month: 1,
    week: 3,
    skill: "Writing",
    skillCategory: "writing",
    title: "Task 2: Body Paragraph Development with PEEL Method",
    duration: "90 mins",
    summary: "Master the PEEL paragraph formula: Point, Explanation, Example, Link back to thesis.",
    tasks: [
      { id: "t21-1", text: "Study PEEL structure: Point (Topic sentence) -> Explain (Why/How) -> Example (Real-world or hypothetical) -> Link (Therefore...).", done: false },
      { id: "t21-2", text: "Practice writing cohesive linking devices (Furthermore, Consequently, In particular, As an illustration).", done: false },
      { id: "t21-3", text: "Write 2 powerhouse body paragraphs on the topic of Technology or Education.", done: false },
      { id: "t21-4", text: "Check for unsubstantiated claims: ensure every general point is followed by logical elaboration.", done: false }
    ],
    proTip: "Avoid vague examples like 'For example, my brother'. Use credible, generalized examples: 'For instance, recent digital learning initiatives in Scandinavian schools have demonstrated...'.",
    resources: "PEEL Paragraph Builder & Cohesion Markers Reference"
  },

  // WEEK 4: SPEAKING FLUENCY & LEXICAL FOUNDATIONS
  {
    day: 22,
    month: 1,
    week: 4,
    skill: "Speaking",
    skillCategory: "speaking",
    title: "Speaking Test Anatomy & Fluency Metrics",
    duration: "90 mins",
    summary: "Understand the 3 parts of the 11-14 minute interview and what the examiner assesses in real-time.",
    tasks: [
      { id: "t22-1", text: "Review the 4 Speaking criteria: Fluency & Coherence, Lexical Resource, Grammatical Range, Pronunciation.", done: false },
      { id: "t22-2", text: "Understand time breakdown: Part 1 (4-5 mins), Part 2 (3-4 mins), Part 3 (4-5 mins).", done: false },
      { id: "t22-3", text: "Identify common fluency killers: long pauses, excessive self-repair, repeating the question words.", done: false },
      { id: "t22-4", text: "Record your voice answering 5 simple personal questions and evaluate your pace and pauses.", done: false }
    ],
    proTip: "The examiner does NOT evaluate whether your opinions are true or interesting. They only evaluate how clearly and naturally you articulate your thoughts.",
    resources: "Speaking Band Descriptors & Part 1-3 Overview Video"
  },
  {
    day: 23,
    month: 1,
    week: 4,
    skill: "Speaking",
    skillCategory: "speaking",
    title: "Speaking Part 1: The 1-2-3 Expansion Formula",
    duration: "90 mins",
    summary: "Avoid 1-word dead ends in Part 1 by answering with the Direct Answer + Reason + Detail formula.",
    tasks: [
      { id: "t23-1", text: "Learn the 1-2-3 Formula: 1) Direct answer, 2) Reason ('mainly because...'), 3) Additional detail or frequency ('in fact, just last weekend...').", done: false },
      { id: "t23-2", text: "Target ideal length: 2 to 4 sentences (15-20 seconds per response).", done: false },
      { id: "t23-3", text: "Practice answering 10 Part 1 questions on Hometown, Accommodation, and Weather.", done: false },
      { id: "t23-4", text: "Listen back to recordings to eliminate filler sounds ('uhh', 'umm').", done: false }
    ],
    proTip: "Never give a simple 'Yes' or 'No'. If asked 'Do you like reading books?', say: 'Yes, definitely. I find it a great way to unwind after a hectic day, especially historical fiction.'",
    resources: "Part 1 Question Bank (50 Topics) & Expansion Drills"
  },
  {
    day: 24,
    month: 1,
    week: 4,
    skill: "Speaking",
    skillCategory: "speaking",
    title: "Speaking Part 1: Work, Study & Leisure Vocabulary",
    duration: "90 mins",
    summary: "Build idiomatic expressions and precise vocabulary for standard opening topic pools.",
    tasks: [
      { id: "t24-1", text: "Learn 15 natural collocations for work/study (e.g., steep learning curve, career prospects, demanding workload).", done: false },
      { id: "t24-2", text: "Learn 15 collocations for hobbies and leisure (e.g., recharge my batteries, blow off steam, avid reader).", done: false },
      { id: "t24-3", text: "Simulate a live 5-minute Part 1 session with a timer.", done: false },
      { id: "t24-4", text: "Ensure you use natural discourse markers (Well, To be honest, Actually, As a matter of fact).", done: false }
    ],
    proTip: "Use discourse markers like 'Well, honestly...' or 'That's an interesting question...' to buy yourself 2 seconds of thinking time without awkward silence.",
    resources: "Part 1 Topic Collocations Deck & Audio Models"
  },
  {
    day: 25,
    month: 1,
    week: 4,
    skill: "Speaking",
    skillCategory: "speaking",
    title: "Speaking Part 2: The 1-Minute Note-Taking System",
    duration: "100 mins",
    summary: "Transform the 60-second preparation time into a high-scoring bullet-point roadmap on your scrap paper.",
    tasks: [
      { id: "t25-1", text: "Study the Note-Taking Method: Divide paper into 4 quadrants (Who/What, When/Where, How, Why memorable).", done: false },
      { id: "t25-2", text: "Practice writing keywords, abbreviations, and advanced vocabulary instead of full sentences during prep.", done: false },
      { id: "t25-3", text: "Prepare notes for 3 diverse Cue Cards within exactly 60 seconds each.", done: false },
      { id: "t25-4", text: "Test speaking from notes for 90 seconds without running out of ideas.", done: false }
    ],
    proTip: "Never try to write full sentences during the 1-minute prep. Write 6-8 potent keywords and collocations you want to weave into your response.",
    resources: "Cue Card Note-Taking Grid & 5 Sample Topics"
  },
  {
    day: 26,
    month: 1,
    week: 4,
    skill: "Speaking",
    skillCategory: "speaking",
    title: "Speaking Part 2: The Storytelling & Timeline Framework",
    duration: "100 mins",
    summary: "Speak smoothly for the full 2 minutes by using the Past-Present-Future narrative structure.",
    tasks: [
      { id: "t26-1", text: "Master the Timeline method: 30 secs background (past), 60 secs core event (present), 30 secs reflection/future impact.", done: false },
      { id: "t26-2", text: "Practice narrative tenses: past continuous, past perfect, used to / would.", done: false },
      { id: "t26-3", text: "Record 2 full 2-minute Cue Card talks (Topic 1: A memorable journey; Topic 2: A helpful person).", done: false },
      { id: "t26-4", text: "Check timing: Did you reach at least 1 minute and 45 seconds before stopping?", done: false }
    ],
    proTip: "Do not stop speaking until the examiner signals you to halt with a polite nod or hand gesture. Speaking for the full 2 minutes maximizes your Fluency score.",
    resources: "Part 2 Storytelling Blueprint & Narrative Tense Drills"
  },
  {
    day: 27,
    month: 1,
    week: 4,
    skill: "Speaking",
    skillCategory: "speaking",
    title: "Speaking Part 3: Abstract Discussions & Two-Way Dialogue",
    duration: "100 mins",
    summary: "Elevate your speech from personal anecdotes to broad societal, economic, and philosophical analysis.",
    tasks: [
      { id: "t27-1", text: "Shift perspective from 'I think...' to societal level: 'Generally speaking, in modern society...', 'Many people hold the view that...'.", done: false },
      { id: "t27-2", text: "Learn 4 analytical speech structures: Comparing (past vs present), Evaluating pros/cons, Speculating future, Suggesting solutions.", done: false },
      { id: "t27-3", text: "Answer 6 Part 3 questions linked to education, environment, and consumerism.", done: false },
      { id: "t27-4", text: "Use PEEL in speaking: State point -> Justify -> Give societal example.", done: false }
    ],
    proTip: "Part 3 is where Band 7, 8, and 9 are determined. Avoid personal stories about yourself or family here; discuss trends across populations.",
    resources: "Part 3 Abstract Discussion Strategies & Sample Audio"
  },
  {
    day: 28,
    month: 1,
    week: 4,
    skill: "Speaking",
    skillCategory: "speaking",
    title: "Full Speaking Interview Simulation (Parts 1, 2 & 3)",
    duration: "90 mins",
    summary: "Simulate a complete 14-minute speaking test with audio recording and self-assessment.",
    tasks: [
      { id: "t28-1", text: "Run a full continuous 14-minute mock speaking test using an audio prompt or speaking partner.", done: false },
      { id: "t28-2", text: "Listen back to the full recording without pausing and take objective notes.", done: false },
      { id: "t28-3", text: "Score yourself across the 4 criteria: Did you maintain steady pace? Did you use idiomatic language? Did you vary grammar?", done: false },
      { id: "t28-4", text: "Transcribe 1 minute of your Part 2 speech to spot grammatical slips.", done: false }
    ],
    proTip: "Transcribing your own spoken words is eye-opening. You will immediately notice repeated words, missing articles ('a/the'), or tense shifts.",
    resources: "Complete Speaking Mock Test 1 with Audio Prompts"
  },

  // MONTH 1 WRAP-UP
  {
    day: 29,
    month: 1,
    week: 4,
    skill: "Review",
    skillCategory: "mock",
    title: "Month 1 Comprehensive Review & Error Journal Audit",
    duration: "120 mins",
    summary: "Review all entries in your Error Journal across Listening, Reading, Writing, and Speaking to consolidate learnings.",
    tasks: [
      { id: "t29-1", text: "Review all misspelled words from Month 1 Listening tests; write each word correctly 3 times.", done: false },
      { id: "t29-2", text: "Review your Reading Synonym Table and re-test yourself on 30 key paraphrases.", done: false },
      { id: "t29-3", text: "Re-read your Writing Task 1 and Task 2 essays; identify recurring grammatical errors (articles, prepositions, run-ons).", done: false },
      { id: "t29-4", text: "Prepare your mindset and desk setup for tomorrow's official Mid-Term Mock Exam.", done: false }
    ],
    proTip: "Progress in IELTS comes from understanding WHY you got an answer wrong, not merely doing more practice tests. Highlighting error patterns is key.",
    resources: "Month 1 Error Log Synthesis & Revision Sheet"
  },
  {
    day: 30,
    month: 1,
    week: 4,
    skill: "Mock Exam",
    skillCategory: "mock",
    title: "Mid-Term Benchmark Mock Exam #1 (Full Timed)",
    duration: "180 mins",
    summary: "Complete a full official IELTS exam under strict exam conditions to measure Month 1 progress.",
    tasks: [
      { id: "t30-1", text: "Listening Test (30 mins audio + 10 mins transfer).", done: false },
      { id: "t30-2", text: "Academic Reading Test (strict 60 mins, 40 questions).", done: false },
      { id: "t30-3", text: "Academic Writing Test (Task 1: 20 mins, Task 2: 40 mins).", done: false },
      { id: "t30-4", text: "Calculate your overall Month 1 Band Score and compare with Day 1 baseline!", done: false }
    ],
    proTip: "Celebrate your Month 1 completion! You have built solid technical mechanics for all four skills. Month 2 will focus on speed, complex tasks, and score acceleration.",
    resources: "Official Cambridge IELTS Academic Practice Test (Full)"
  },

  // ==========================================
  // MONTH 2: DEEP SKILL ACCELERATION & INTENSIVE DRILLS (Days 31 - 60)
  // ==========================================
  {
    day: 31,
    month: 2,
    week: 5,
    skill: "Listening",
    skillCategory: "listening",
    title: "Advanced Section 3: Rapid Academic Exchanges",
    duration: "90 mins",
    summary: "Handle multi-speaker debates where opinions shift rapidly and speakers modify each other's conclusions.",
    tasks: [
      { id: "t31-1", text: "Train on rapid speaker tracking: note speaker initials (M for Mark, S for Sarah) next to question options.", done: false },
      { id: "t31-2", text: "Identify consensus points vs unresolved disputes between students.", done: false },
      { id: "t31-3", text: "Complete 2 Section 3 tests with complex matching lists (e.g. matching research methods to study limitations).", done: false },
      { id: "t31-4", text: "Transcribe a 2-minute dialogue excerpt to practice catching rapid connected speech.", done: false }
    ],
    proTip: "Watch out for polite disagreements: 'That's one way of looking at it, but don't you think...' means the speaker is disagreeing!",
    resources: "Section 3 Academic Debate Series"
  },
  {
    day: 32,
    month: 2,
    week: 5,
    skill: "Listening",
    skillCategory: "listening",
    title: "Advanced Section 4: Academic Monologue Signposting",
    duration: "90 mins",
    summary: "Maintain focus through a continuous 10-question university lecture with zero pauses in between.",
    tasks: [
      { id: "t32-1", text: "Identify rhetorical signpost markers: 'Turning now to...', 'Having considered X, let's explore Y...', 'Crucially...'.", done: false },
      { id: "t32-2", text: "Practice scanning 10 blank notes in 60 seconds to pre-identify contextual topic headers.", done: false },
      { id: "t32-3", text: "Complete 2 Section 4 full lectures (Archaeology, Marine Biology, or Architecture).", done: false },
      { id: "t32-4", text: "Audit any lost answers: did you lose your spot in the notes because you waited too long for one word?", done: false }
    ],
    proTip: "Because Section 4 has no mid-way break, use your 60-second prep window to underline heading anchors throughout all 10 questions.",
    resources: "Section 4 University Lecture Series & Transcripts"
  },
  {
    day: 33,
    month: 2,
    week: 5,
    skill: "Listening",
    skillCategory: "listening",
    title: "Accent Mastery: Australian, Scottish & Connected Speech",
    duration: "90 mins",
    summary: "Accustom your ear to varied native English accents and phonetic elision (linking, intrusion, assimilation).",
    tasks: [
      { id: "t33-1", text: "Listen to 20 minutes of ABC Australia (Australian Broadcasting Corp) and BBC Scotland podcasts.", done: false },
      { id: "t33-2", text: "Study connected speech rules: intrusive /r/, linked /w/ and /j/, and dropped /t/ and /d/ sounds.", done: false },
      { id: "t33-3", text: "Complete 1 full listening test featuring diverse regional accents.", done: false },
      { id: "t33-4", text: "Write down 10 words you misheard purely due to accent variation.", done: false }
    ],
    proTip: "In Australian accents, the vowel sound in 'day' can sound closer to 'die', and 'water' has an open vowel sound. Exposing your ears to BBC and ABC news builds instant recognition.",
    resources: "IELTS Accent Adaptation Audio Pack & BBC News Clips"
  },
  {
    day: 34,
    month: 2,
    week: 5,
    skill: "Listening",
    skillCategory: "listening",
    title: "Multiple Choice Elimination & Distractor Traps",
    duration: "90 mins",
    summary: "Sharpen elimination speed for Section 3 Multiple Choice where every single option is referenced.",
    tasks: [
      { id: "t34-1", text: "Practice 'Active Cross-Out': physically strike through options as soon as the audio disproves them.", done: false },
      { id: "t34-2", text: "Look for absolute words (only, always, impossible, must) in options—they are frequently distractors.", done: false },
      { id: "t34-3", text: "Complete 3 difficult multiple choice sections.", done: false },
      { id: "t34-4", text: "Review incorrect picks and write down the exact verbal trick used.", done: false }
    ],
    proTip: "If an option uses the exact same word as the speaker, be suspicious! The correct option almost always uses a synonym or paraphrase.",
    resources: "Advanced Multiple Choice Strategy Workshop"
  },
  {
    day: 35,
    month: 2,
    week: 5,
    skill: "Listening",
    skillCategory: "listening",
    title: "Flowchart & Process Completion in Listening",
    duration: "90 mins",
    summary: "Master sequential listening for scientific cycles, historical timelines, and manufacturing workflows.",
    tasks: [
      { id: "t35-1", text: "Learn sequential signposts: 'initially', 'subsequently', 'the next phase entails', 'prior to this'.", done: false },
      { id: "t35-2", text: "Anticipate grammatical forms: passive voice ('is heated') vs active processes ('evaporates').", done: false },
      { id: "t35-3", text: "Complete 2 Flowchart listening exercises.", done: false },
      { id: "t35-4", text: "Verify word limits: Ensure hyphenated words (e.g. 'high-tech') count as single words.", done: false }
    ],
    proTip: "Hyphenated words (e.g. 'state-of-the-art', 'eco-friendly') count as ONE single word in IELTS Listening and Reading!",
    resources: "Process & Flowchart Listening Drills"
  },
  {
    day: 36,
    month: 2,
    week: 5,
    skill: "Listening",
    skillCategory: "listening",
    title: "High-Speed Conditioning (1.25x Audio Training)",
    duration: "90 mins",
    summary: "Over-train your auditory processing speed so regular exam audio feels leisurely and crystal clear.",
    tasks: [
      { id: "t36-1", text: "Listen to a Section 3 and Section 4 audio track at 1.25x playback speed.", done: false },
      { id: "t36-2", text: "Attempt to answer all questions at 1.25x speed without pausing.", done: false },
      { id: "t36-3", text: "Re-listen to the same track at normal 1.0x speed and complete questions you missed.", done: false },
      { id: "t36-4", text: "Notice how much slower and clearer 1.0x feels after speed conditioning.", done: false }
    ],
    proTip: "Athletes train with weights on their ankles so they feel light on race day. Training at 1.25x creates the same neural advantage for IELTS Listening.",
    resources: "Speed-Adjusted Cambridge Listening Audio Files"
  },
  {
    day: 37,
    month: 2,
    week: 5,
    skill: "Listening",
    skillCategory: "listening",
    title: "Listening Full Timed Test #2 + Deep Error Analysis",
    duration: "100 mins",
    summary: "Verify your listening acceleration under standard test conditions with a full 40-question paper.",
    tasks: [
      { id: "t37-1", text: "Complete Cambridge IELTS Full Listening Test (Sections 1-4).", done: false },
      { id: "t37-2", text: "Mark your answers strictly and compute your Band Score.", done: false },
      { id: "t37-3", text: "Classify every missed item into: A) Misheard sound, B) Distractor fell for, C) Spelling error, D) Lost place.", done: false },
      { id: "t37-4", text: "Listen to the transcript audio for every missed question until you hear the answer clearly.", done: false }
    ],
    proTip: "A Band 8.0 in Academic Listening requires 35/40 correct. A Band 7.0 requires 30/40. Track how many points you lose solely to spelling.",
    resources: "Cambridge IELTS Official Listening Test 2"
  },

  // WEEK 6: READING SPEED, COMPLEX TEXTS & PASSAGE 3
  {
    day: 38,
    month: 2,
    week: 6,
    skill: "Reading",
    skillCategory: "reading",
    title: "Passage 3 Academic Discourse & Synthesizing Arguments",
    duration: "100 mins",
    summary: "Tackle the most intellectually demanding text in the exam: philosophical, anthropological, or cognitive science essays.",
    tasks: [
      { id: "t38-1", text: "Understand Passage 3 characteristics: denser academic vocabulary, complex subordinate clauses, multiple opposing viewpoints.", done: false },
      { id: "t38-2", text: "Learn to track shifting arguments: 'Proponents argue...', 'Critics counter...', 'However, an emerging consensus suggests...'.", done: false },
      { id: "t38-3", text: "Complete 1 full Passage 3 untimed, focusing on 100% comprehension of complex sentences.", done: false },
      { id: "t38-4", text: "Deconstruct 3 multi-clause sentences: identify subject, main verb, and embedded relative clauses.", done: false }
    ],
    proTip: "When encountering long 4-line sentences, find the main subject and predicate verb first. Strip away prepositional phrases to reveal core meaning.",
    resources: "Passage 3 Deep Reading Workshop & Complex Syntax Guide"
  },
  {
    day: 39,
    month: 2,
    week: 6,
    skill: "Reading",
    skillCategory: "reading",
    title: "Matching Information to Paragraphs (Which paragraph contains...)",
    duration: "90 mins",
    summary: "Differentiate 'Matching Information' (specific details) from 'Matching Headings' (main overall idea).",
    tasks: [
      { id: "t39-1", text: "Notice the difference: Headings summarize paragraphs; Matching Information asks where a specific example, fact, or definition lives.", done: false },
      { id: "t39-2", text: "Look out for NB instruction: 'NB You may use any letter more than once.'", done: false },
      { id: "t39-3", text: "Solve 2 sets of Matching Information questions.", done: false },
      { id: "t39-4", text: "Analyze scanning strategies: finding mentions of numbers, experiments, or contrasting historical periods.", done: false }
    ],
    proTip: "Matching Information questions are NOT in chronological order in the text! Tackle other question types (like summary completion) first so you get familiar with the passage before answering these.",
    resources: "Matching Information Strategy & Practice Tests"
  },
  {
    day: 40,
    month: 2,
    week: 6,
    skill: "Reading",
    skillCategory: "reading",
    title: "Matching Features (Connecting People to Theories)",
    duration: "90 mins",
    summary: "Match researchers, theorists, or historical figures to their respective hypotheses or findings.",
    tasks: [
      { id: "t40-1", text: "Scan the entire passage first and highlight EVERY occurrence of the named individuals (e.g. Dr. Green, Professor Evans).", done: false },
      { id: "t40-2", text: "Read the sentences immediately before and after the researcher's name to capture their conclusion.", done: false },
      { id: "t40-3", text: "Complete 2 Matching Features sets (8 questions each).", done: false },
      { id: "t40-4", text: "Note how theories are paraphrased with reporting verbs (advocated, deduced, refuted).", done: false }
    ],
    proTip: "A researcher's name might appear 3 times across different paragraphs. Check all mentions before selecting your answer, as their final finding is often at the end.",
    resources: "Matching Features Practice & Academic Reporting Verbs"
  },
  {
    day: 41,
    month: 2,
    week: 6,
    skill: "Reading",
    skillCategory: "reading",
    title: "Diagram, Table & Flow-Chart Completion in Reading",
    duration: "90 mins",
    summary: "Leverage visual diagrams and step-by-step technical processes to quickly locate answers in scientific passages.",
    tasks: [
      { id: "t41-1", text: "Inspect diagram labels: use known labeled parts to anchor exactly where in the text the machine or organism is described.", done: false },
      { id: "t41-2", text: "Strictly adhere to word counts ('ONE WORD ONLY' or 'NO MORE THAN TWO WORDS').", done: false },
      { id: "t41-3", text: "Complete 2 technical diagram/table completion exercises.", done: false },
      { id: "t41-4", text: "Check your answers for exact spelling directly transcribed from the passage.", done: false }
    ],
    proTip: "Never alter the form of the word in direct completion questions. If the text says 'pollination', do not write 'pollinate'. Take the exact word as printed.",
    resources: "Reading Diagram & Table Completion Pack"
  },
  {
    day: 42,
    month: 2,
    week: 6,
    skill: "Reading",
    skillCategory: "reading",
    title: "Academic Vocabulary in Context: Context Clues Technique",
    duration: "90 mins",
    summary: "Decode difficult, unfamiliar technical terminology without a dictionary by reading surrounding sentence clues.",
    tasks: [
      { id: "t42-1", text: "Learn 4 context clue patterns: Definition clues (in other words, meaning), Contrast clues (unlike, whereas), Example clues (such as), Restatement.", done: false },
      { id: "t42-2", text: "Practice inferring meanings of 20 high-level academic words from authentic scientific journals.", done: false },
      { id: "t42-3", text: "Complete 1 full Passage 2 with heavy scientific terminology (e.g. neuroplasticity, paleontology).", done: false },
      { id: "t42-4", text: "Verify: Did unfamiliar terms prevent you from answering questions, or could you bypass them?", done: false }
    ],
    proTip: "You do not need to know what every specialized word means to get Band 9 in Reading. If a word is Latin or technical, the exam usually defines it in the sentence or footnote.",
    resources: "Context Clues Decoder Worksheet & Academic Word List (AWL)"
  },
  {
    day: 43,
    month: 2,
    week: 6,
    skill: "Reading",
    skillCategory: "reading",
    title: "Pacing & Time Management Strategy: The 17-20-23 Rule",
    duration: "90 mins",
    summary: "Master the optimal time budget across the 3 passages to ensure you never run out of time on Passage 3.",
    tasks: [
      { id: "t43-1", text: "Internalize the 17-20-23 minute pacing rule: Passage 1 (17 mins), Passage 2 (20 mins), Passage 3 (23 mins).", done: false },
      { id: "t43-2", text: "Practice transfer discipline: Fill in your answer sheet directly as you go—there is NO extra transfer time at the end!", done: false },
      { id: "t43-3", text: "Simulate Passage 1 + Passage 2 back-to-back under a strict 37-minute alarm.", done: false },
      { id: "t43-4", text: "Assess how many questions you had to rush and adjust scanning intensity.", done: false }
    ],
    proTip: "Unlike the Listening test, Reading does NOT give you 10 minutes to transfer answers at the end. Answering on the question booklet and running out of time to copy them results in a 0 for all uncopied answers.",
    resources: "IELTS Reading Pacing Clock & Printable Answer Sheets"
  },
  {
    day: 44,
    month: 2,
    week: 6,
    skill: "Reading",
    skillCategory: "reading",
    title: "Reading Full Timed Mock #2 (Strict 60 Mins, 40 Questions)",
    duration: "100 mins",
    summary: "Test your full 3-passage endurance and tactical pacing in a complete 60-minute simulation.",
    tasks: [
      { id: "t44-1", text: "Complete Cambridge IELTS Full Reading Test (Passages 1, 2, and 3) in exactly 60 minutes.", done: false },
      { id: "t44-2", text: "Score and determine your Month 2 Reading Band Score.", done: false },
      { id: "t44-3", text: "Conduct post-exam error analysis: Did any question type cause a cluster of mistakes?", done: false },
      { id: "t44-4", text: "Log all missed questions into your Error Journal.", done: false }
    ],
    proTip: "For Band 7.0 in Academic Reading, you need 30/40. For Band 8.0, you need 35/40. If you missed fewer than 6 questions, you are firmly in Band 8 territory!",
    resources: "Cambridge IELTS Reading Test 2"
  },

  // WEEK 7: ADVANCED WRITING TASK 1 & TASK 2 ARGUMENTATION
  {
    day: 45,
    month: 2,
    week: 7,
    skill: "Writing",
    skillCategory: "writing",
    title: "Task 1: Pie Charts, Proportions & Fraction Mastery",
    duration: "90 mins",
    summary: "Express percentage distributions without repeating 'percent' by using precise fraction and proportional language.",
    tasks: [
      { id: "t45-1", text: "Learn proportion equivalents: 75% -> three quarters, 51% -> a small majority, 24% -> roughly a quarter, 10% -> one in ten.", done: false },
      { id: "t45-2", text: "Master share verbs: comprised, constituted, represented, made up, accounted for.", done: false },
      { id: "t45-3", text: "Write a complete 150-word report on a 2-pie-chart comparison (e.g. household expenditure in 2000 vs 2020).", done: false },
      { id: "t45-4", text: "Check that your overview highlights the most dramatic shift in proportions.", done: false }
    ],
    proTip: "Never say 'the pie chart increased'. The pie chart itself doesn't change size—say 'the proportion of income allocated to food rose'.",
    resources: "Pie Chart Proportion Guide & Band 9 Model Answers"
  },
  {
    day: 46,
    month: 2,
    week: 7,
    skill: "Writing",
    skillCategory: "writing",
    title: "Task 1: Tables with Dense Data & Selective Reporting",
    duration: "90 mins",
    summary: "Learn how to filter tables containing 20+ data points so you only present key patterns without data drowning.",
    tasks: [
      { id: "t46-1", text: "Practice data grouping: group countries/categories by high performers vs low performers.", done: false },
      { id: "t46-2", text: "Select only extremes: maximums, minimums, greatest gains, and static trends.", done: false },
      { id: "t46-3", text: "Write a complete 170-word Table report in 20 minutes.", done: false },
      { id: "t46-4", text: "Verify that all key trends from your overview are supported by numbers in the body paragraphs.", done: false }
    ],
    proTip: "In large tables, examiners award high marks for your ability to summarize and group data intelligently, not for regurgitating every single number.",
    resources: "Complex Table Reporting Workshop & Sample Tasks"
  },
  {
    day: 47,
    month: 2,
    week: 7,
    skill: "Writing",
    skillCategory: "writing",
    title: "Task 1: Process & Manufacturing Diagrams (Passive Voice)",
    duration: "90 mins",
    summary: "Master natural and industrial processes by using sequencing linkers and grammatical passive voice.",
    tasks: [
      { id: "t47-1", text: "Master passive voice for man-made processes: 'The tea leaves are harvested, sorted, and transported...'.", done: false },
      { id: "t47-2", text: "Master active voice for natural life cycles: 'The larva emerges, feeds, and undergoes metamorphosis...'.", done: false },
      { id: "t47-3", text: "Write an overview specifying total number of stages: 'Overall, the process comprises six distinct stages, commencing with X and culminating in Y.'", done: false },
      { id: "t47-4", text: "Draft a complete Process report (e.g. brick manufacturing or water purification).", done: false }
    ],
    proTip: "For process diagrams, you do not need comparative language (since there are no numbers!). Instead, Grammatical Range comes entirely from passive voice and stage linkers.",
    resources: "Process Diagram Grammar Guide & High-Band Models"
  },
  {
    day: 48,
    month: 2,
    week: 7,
    skill: "Writing",
    skillCategory: "writing",
    title: "Task 1: Maps & Urban Development (Spatial Changes)",
    duration: "90 mins",
    summary: "Describe structural changes to a town, island, or facility over time (expansion, demolition, replacement).",
    tasks: [
      { id: "t48-1", text: "Memorize urban transformation verbs: demolished, cleared, converted into, replaced by, erected, modernized.", done: false },
      { id: "t48-2", text: "Master compass references: 'in the north-western sector of the town', 'adjacent to the coastal railway'.", done: false },
      { id: "t48-3", text: "Write a complete 160-word Map report comparing an island before and after tourist facilities were constructed.", done: false },
      { id: "t48-4", text: "Check that your overview captures the overarching nature of change (e.g. 'transformed from an uninhabited rural area into a bustling commercial hub').", done: false }
    ],
    proTip: "Use 'give way to' for advanced vocabulary: 'The farmland in the south gave way to a multi-story car park.'",
    resources: "Map Writing Vocabulary Bank & Model Essays"
  },
  {
    day: 49,
    month: 2,
    week: 7,
    skill: "Writing",
    skillCategory: "writing",
    title: "Task 2: Discussion Essays ('Discuss both views & give opinion')",
    duration: "100 mins",
    summary: "Balance two competing perspectives fairly while maintaining your personal position consistently throughout.",
    tasks: [
      { id: "t49-1", text: "Understand the structure: Intro (mention both views + your opinion) -> Body 1 (View A) -> Body 2 (View B + why you agree/disagree) -> Conclusion.", done: false },
      { id: "t49-2", text: "Practice attributing views to society: 'On the one hand, proponents argue that...', 'On the other hand, opponents contend that...'.", done: false },
      { id: "t49-3", text: "Draft a complete Discussion essay (e.g. 'Some believe universities should focus on employment skills, while others believe education should be for knowledge itself').", done: false },
      { id: "t49-4", text: "Ensure your personal opinion is stated in BOTH the introduction and conclusion.", done: false }
    ],
    proTip: "Never wait until the conclusion to reveal your opinion for the first time in a Discussion essay! Presenting your stance in the introduction ensures you achieve Band 7+ for Task Achievement.",
    resources: "Discussion Essay Template & Band 8.5 Model Essay"
  },
  {
    day: 50,
    month: 2,
    week: 7,
    skill: "Writing",
    skillCategory: "writing",
    title: "Task 2: Problem & Solution / Causes & Effects",
    duration: "100 mins",
    summary: "Structure essays addressing global societal issues (traffic congestion, urbanization, obesity, waste).",
    tasks: [
      { id: "t50-1", text: "Learn the direct match rule: Every solution proposed in Body 2 MUST directly address a specific cause outlined in Body 1.", done: false },
      { id: "t50-2", text: "Master conditional and policy language: 'Governments should enact legislation to...', 'Were authorities to subsidize public transport...'.", done: false },
      { id: "t50-3", text: "Draft a complete Problem & Solution essay in 40 minutes.", done: false },
      { id: "t50-4", text: "Check that solutions are pragmatic and concrete rather than wishful thinking.", done: false }
    ],
    proTip: "Avoid vague solutions like 'People should be educated'. Specify HOW and BY WHOM: 'Governments should mandate comprehensive recycling curriculums in primary schools.'",
    resources: "Problem-Solution Framework & Sample Answers"
  },
  {
    day: 51,
    month: 2,
    week: 7,
    skill: "Writing",
    skillCategory: "writing",
    title: "Task 2: Advantages vs Disadvantages & Two-Part Questions",
    duration: "100 mins",
    summary: "Handle 'Do advantages outweigh disadvantages?' and compound two-part prompts effectively.",
    tasks: [
      { id: "t51-1", text: "Understand 'Outweigh': If advantages outweigh disadvantages, the advantages must be objectively more impactful, not just more numerous.", done: false },
      { id: "t51-2", text: "Structure Two-Part essays: Dedicate Body 1 entirely to Question 1 and Body 2 entirely to Question 2.", done: false },
      { id: "t51-3", text: "Draft an 'Outweigh' essay on Remote Work / Artificial Intelligence.", done: false },
      { id: "t51-4", text: "Check paragraph word balance: Ensure Body 1 and Body 2 are roughly equal in depth (approx. 90-110 words each).", done: false }
    ],
    proTip: "In 'Do advantages outweigh disadvantages?', state clearly in your thesis which side is heavier: 'Although there are undeniable drawbacks, I would argue that the benefits are far more profound.'",
    resources: "Outweigh & Double-Question Essay Guides"
  },

  // WEEK 8: SPEAKING ANALYTICAL AGILITY & IDIOMATIC LANGUAGE
  {
    day: 52,
    month: 2,
    week: 8,
    skill: "Speaking",
    skillCategory: "speaking",
    title: "Speaking Part 2: People & Relationships Cue Cards",
    duration: "90 mins",
    summary: "Describe mentors, leaders, family members, and public figures with high-level character traits.",
    tasks: [
      { id: "t52-1", text: "Master personality collocations: charismatic leadership, unwavering dedication, down-to-earth, empathetic listener, role model.", done: false },
      { id: "t52-2", text: "Prepare 1 flexible 'Master Person Story' that can adapt to 5 different prompts (admired person, teacher, business leader, helpful stranger).", done: false },
      { id: "t52-3", text: "Record a 2-minute response for: 'Describe an older person you admire'.", done: false },
      { id: "t52-4", text: "Critique your recording: Did you explain the lasting impact they had on your life?", done: false }
    ],
    proTip: "By preparing 1 rich, multidimensional character (e.g. an inspiring teacher or entrepreneur), you can adapt the same core story to almost any 'Describe a person' prompt!",
    resources: "Master Persona Speaking Framework & Character Vocabulary"
  },
  {
    day: 53,
    month: 2,
    week: 8,
    skill: "Speaking",
    skillCategory: "speaking",
    title: "Speaking Part 2: Events & Memorable Experiences",
    duration: "90 mins",
    summary: "Narrate festivals, weddings, achievements, and challenges with emotional vocabulary and suspense.",
    tasks: [
      { id: "t53-1", text: "Learn experiential vocabulary: milestone, exhilarating, sense of accomplishment, bittersweet moment, vivid memory.", done: false },
      { id: "t53-2", text: "Practice the 'Climax & Reflection' structure: build tension up to a peak event, then discuss the takeaway lesson.", done: false },
      { id: "t53-3", text: "Record 2 minutes for: 'Describe a challenging event you successfully overcame'.", done: false },
      { id: "t53-4", text: "Ensure you use past perfect tense accurately ('By the time we arrived, the event had already commenced').", done: false }
    ],
    proTip: "A great story has a turning point. Don't just list facts in a flat tone; introduce a moment of doubt or challenge to make your narrative engaging.",
    resources: "Event Cue Card Bank & Narrative Devices"
  },
  {
    day: 54,
    month: 2,
    week: 8,
    skill: "Speaking",
    skillCategory: "speaking",
    title: "Speaking Part 2: Objects, Technology & Inventions",
    duration: "90 mins",
    summary: "Describe smartphones, apps, gifts, and historical artifacts with functional and sensory vocabulary.",
    tasks: [
      { id: "t54-1", text: "Master tech collocations: indispensable tool, revolutionized daily life, user-friendly interface, seamless integration.", done: false },
      { id: "t54-2", text: "Practice describing physical attributes: sleek design, durable, compact, heirloom, sentimental value.", done: false },
      { id: "t54-3", text: "Record 2 minutes for: 'Describe a piece of technology that you find difficult to live without'.", done: false },
      { id: "t54-4", text: "Listen back for natural cadence: avoid sounding like a rehearsed robot.", done: false }
    ],
    proTip: "If you describe a phone or computer, pivot quickly from its technical specs to how it transforms your personal productivity or relationships to ensure you have plenty to say.",
    resources: "Technology & Inventions Speaking Pack"
  },
  {
    day: 55,
    month: 2,
    week: 8,
    skill: "Speaking",
    skillCategory: "speaking",
    title: "Speaking Part 2: Places, Architecture & Nature",
    duration: "90 mins",
    summary: "Describe cities, historic monuments, quiet spots, and natural landscapes with evocative descriptive imagery.",
    tasks: [
      { id: "t55-1", text: "Master atmospheric adjectives: picturesque, tranquil haven, bustling metropolis, architectural marvel, off the beaten track.", done: false },
      { id: "t55-2", text: "Prepare a flexible 'Master Place Story' (e.g. a serene coastal village or historic mountain town).", done: false },
      { id: "t55-3", text: "Record 2 minutes for: 'Describe a quiet place you like to visit'.", done: false },
      { id: "t55-4", text: "Check: Did you vividly describe sensory elements (sounds, smells, visual scenery)?", done: false }
    ],
    proTip: "Engage all senses when describing places: 'The gentle rustle of leaves, the crisp mountain air, and the panoramic vista of the valley below.'",
    resources: "Place Cue Cards & Sensory Descriptive Toolkit"
  },
  {
    day: 56,
    month: 2,
    week: 8,
    skill: "Speaking",
    skillCategory: "speaking",
    title: "Speaking Part 3: Speculating About Future Trends",
    duration: "90 mins",
    summary: "Answer hypothetical questions about future society, technological disruption, and environmental shifts.",
    tasks: [
      { id: "t56-1", text: "Master speculative grammar: 'It is highly probable that...', 'Were this trend to persist...', 'I foresee a future where...'.", done: false },
      { id: "t56-2", text: "Practice probability modal verbs: will inevitably, might conceivably, is bound to, is unlikely to.", done: false },
      { id: "t56-3", text: "Answer 5 future-oriented Part 3 questions (e.g. 'Will AI replace teachers in the next 30 years?').", done: false },
      { id: "t56-4", text: "Evaluate your answers: Did you provide balanced projections instead of extreme one-sided statements?", done: false }
    ],
    proTip: "Examiners love conditional structures in Part 3: 'If governments were to invest heavily in renewable energy today, it is plausible that carbon emissions could drop drastically by 2040.'",
    resources: "Hypothetical Language Guide & Part 3 Questions"
  },
  {
    day: 57,
    month: 2,
    week: 8,
    skill: "Speaking",
    skillCategory: "speaking",
    title: "Speaking Part 3: Generational Comparisons & Social Evolution",
    duration: "90 mins",
    summary: "Contrast attitudes of younger generations vs older generations on work-life balance, tradition, and technology.",
    tasks: [
      { id: "t57-1", text: "Master contrast discourse markers: 'Whereas the older generation prioritized job security, today's youth tend to gravitate towards flexibility.'", done: false },
      { id: "t57-2", text: "Learn generational vocabulary: digital natives, traditionalist mindset, consumer-driven culture, evolving values.", done: false },
      { id: "t57-3", text: "Record responses to 6 comparative questions (e.g. 'How has family life changed compared to 50 years ago?').", done: false },
      { id: "t57-4", text: "Ensure you use 'used to' and past vs present tenses cleanly without tense confusion.", done: false }
    ],
    proTip: "Use phrases like 'In stark contrast to previous generations...' or 'There has been a paradigm shift in how people view...' to demonstrate Band 8+ Lexical Resource.",
    resources: "Social Contrast Speaking Exercises & Vocabulary List"
  },
  {
    day: 58,
    month: 2,
    week: 8,
    skill: "Speaking",
    skillCategory: "speaking",
    title: "Fluency Drills: Eliminating Hesitation & Pauses",
    duration: "90 mins",
    summary: "Train your mouth and brain to eliminate dead air, repeated words, and nervous filler sounds.",
    tasks: [
      { id: "t58-1", text: "Practice the 'Continuous 60-Second Talk': speak on a random household object for 60 seconds without pausing.", done: false },
      { id: "t58-2", text: "Replace 'uhhh' with silent thinking pauses or sophisticated bridging phrases ('That's a nuanced issue...').", done: false },
      { id: "t58-3", text: "Execute 10 rapid-fire Part 1 questions with instant 1-second starts.", done: false },
      { id: "t58-4", text: "Count your filler sounds: target fewer than 2 fillers across a 5-minute conversation.", done: false }
    ],
    proTip: "A brief, silent 1-second pause sounds confident and thoughtful. A prolonged 'uhhhhhhh' sounds hesitant and lowers your Fluency score. Embrace deliberate pauses.",
    resources: "Fluency Conditioning Drills & Random Topic Generator"
  },

  // MONTH 2 WRAP-UP
  {
    day: 59,
    month: 2,
    week: 8,
    skill: "Writing",
    skillCategory: "writing",
    title: "Writing Task 1 + Task 2 Timed Sprint (Strict 60 Mins Flat)",
    duration: "90 mins",
    summary: "Execute both Task 1 and Task 2 back-to-back under authentic test constraints without stopping.",
    tasks: [
      { id: "t59-1", text: "Task 1 (Bar Chart or Map): Complete in strictly 20 minutes (150+ words).", done: false },
      { id: "t59-2", text: "Task 2 (Discussion or Problem/Solution): Complete in strictly 40 minutes (250+ words).", done: false },
      { id: "t59-3", text: "Count words for both tasks: Ensure you did NOT fall below 150/250 words.", done: false },
      { id: "t59-4", text: "Perform a 3-minute proofread on both essays to fix minor spelling, plural 's', and punctuation.", done: false }
    ],
    proTip: "Always write Task 2 first on exam day if you prefer, because Task 2 accounts for two-thirds (66.6%) of your total Writing score!",
    resources: "Cambridge IELTS Writing Test Prompt Pack"
  },
  {
    day: 60,
    month: 2,
    week: 8,
    skill: "Mock Exam",
    skillCategory: "mock",
    title: "Month 2 Comprehensive Benchmark Mock Exam #2",
    duration: "180 mins",
    summary: "Assess your complete 2-month transformation with a full 4-skill timed mock exam.",
    tasks: [
      { id: "t60-1", text: "Take Official Listening Test under real-time audio conditions.", done: false },
      { id: "t60-2", text: "Take Official Academic Reading Test (60 mins, Passages 1-3).", done: false },
      { id: "t60-3", text: "Take Official Academic Writing Test (Task 1 + Task 2 in 60 mins).", done: false },
      { id: "t60-4", text: "Conduct Full Recorded Speaking Test (Parts 1-3).", done: false },
      { id: "t60-5", text: "Calculate your Month 2 overall Band Score and graph your progress!", done: false }
    ],
    proTip: "Compare your Month 2 scores with Day 1 and Day 30. You should now be consistently performing around Band 7.0 - 7.5. Month 3 will push you into Band 8.0 - 8.5 territory!",
    resources: "Official Cambridge IELTS Academic Test 3"
  },

  // ==========================================
  // MONTH 3: EXAM SIMULATION, STAMINA & BAND 8.0+ POLISH (Days 61 - 90)
  // ==========================================
  {
    day: 61,
    month: 3,
    week: 9,
    skill: "Listening",
    skillCategory: "listening",
    title: "Listening Precision: Common Word List & Spelling Masterclass",
    duration: "90 mins",
    summary: "Eliminate the final 3-5 careless mistakes by mastering the 200 most commonly misspelled IELTS listening words.",
    tasks: [
      { id: "t61-1", text: "Drill tricky double consonants: accommodation, millennium, questionnaire, embarrassed, commitment.", done: false },
      { id: "t61-2", text: "Drill silent letters and tricky vowels: environment, government, Wednesday, February, schedule, foreign.", done: false },
      { id: "t61-3", text: "Take a 50-word audio spelling dictation test.", done: false },
      { id: "t61-4", text: "Verify capital letters for proper nouns (London, Monday, Professor Jones) where required.", done: false }
    ],
    proTip: "Writing in ALL CAPITAL LETTERS on the Listening and Reading paper is completely allowed by Cambridge and avoids any ambiguity regarding capitalization!",
    resources: "The Top 200 Misspelled IELTS Listening Words Dictation Audio"
  },
  {
    day: 62,
    month: 3,
    week: 9,
    skill: "Reading",
    skillCategory: "reading",
    title: "Reading Precision: Eliminating T/F/NG Traps & False Assumptions",
    duration: "90 mins",
    summary: "Fine-tune your critical thinking on borderline questions where candidates second-guess themselves.",
    tasks: [
      { id: "t62-1", text: "Practice the 'Negative Assertion Trap': check whether a negative prefix (unlikely, ineffective) reversed the meaning.", done: false },
      { id: "t62-2", text: "Check for assumption traps: never assume something is True just because it is scientifically true in real life; it MUST be in the passage!", done: false },
      { id: "t62-3", text: "Solve 20 difficult T/F/NG and Y/N/NG questions selected from Cambridge 16-18.", done: false },
      { id: "t62-4", text: "Achieve 18/20 or higher on the diagnostic set.", done: false }
    ],
    proTip: "Leave your outside knowledge at the door! If the text says 'Apples are purple' and the question asks 'Apples are purple', the answer is TRUE. Treat the text as your only reality.",
    resources: "High-Difficulty T/F/NG Trap Compilation"
  },
  {
    day: 63,
    month: 3,
    week: 9,
    skill: "Writing",
    skillCategory: "writing",
    title: "Writing Task 2: Counter-Arguments & Concession Clauses",
    duration: "100 mins",
    summary: "Demonstrate Band 8+ critical thinking by acknowledging opposing viewpoints and systematically refuting them.",
    tasks: [
      { id: "t63-1", text: "Master concession syntax: 'While it is true that [Opposing View], this overlooks the fundamental reality that [Your View].'", done: false },
      { id: "t63-2", text: "Learn refutation linkers: 'Nevertheless', 'Notwithstanding this assertion', 'Such an argument fails to account for...'.", done: false },
      { id: "t63-3", text: "Draft a sophisticated Band 8.5 essay on Climate Change or Economic Globalization.", done: false },
      { id: "t63-4", text: "Evaluate your concession: Did you dismantle the opposing argument convincingly?", done: false }
    ],
    proTip: "A well-executed concession paragraph is the hallmark of Band 8 and 9 essays. It shows examiners you can handle nuanced, balanced academic discourse.",
    resources: "Concession & Counter-Argument Formula Sheet"
  },
  {
    day: 64,
    month: 3,
    week: 9,
    skill: "Speaking",
    skillCategory: "speaking",
    title: "Speaking: Complex Grammatical Structures & Inversions",
    duration: "90 mins",
    summary: "Elevate your Grammatical Range score by incorporating inverted sentences, mixed conditionals, and cleft sentences.",
    tasks: [
      { id: "t64-1", text: "Master negative inversions: 'Not only did this enhance my skills, but it also...', 'Seldom have I encountered such...'.", done: false },
      { id: "t64-2", text: "Practice cleft sentences for emphasis: 'What I found most captivating was...', 'The reason why this resonated with me was...'.", done: false },
      { id: "t64-3", text: "Record 4 speaking responses deliberately integrating at least 2 inverted or cleft sentences.", done: false },
      { id: "t64-4", text: "Ensure the structures sound natural and effortless rather than forced.", done: false }
    ],
    proTip: "Using just ONE or TWO complex grammatical structures like 'Not only was it memorable, but it also taught me...' naturally propels your Grammatical Range into Band 8.",
    resources: "Advanced Spoken Grammar & Inversions Audio Practice"
  },
  {
    day: 65,
    month: 3,
    week: 9,
    skill: "Mock Exam",
    skillCategory: "mock",
    title: "Combined Listening + Reading Back-to-Back Simulation",
    duration: "110 mins",
    summary: "Build cognitive stamina by completing the first two test sections seamlessly without any break.",
    tasks: [
      { id: "t65-1", text: "Complete Listening Test (Sections 1-4: 40 questions, 30 mins + 10 mins transfer).", done: false },
      { id: "t65-2", text: "Immediately begin Reading Test without pausing (Passages 1-3: 40 questions, 60 mins).", done: false },
      { id: "t65-3", text: "Grade both tests and calculate combined raw score out of 80.", done: false },
      { id: "t65-4", text: "Assess mental fatigue during Reading Passage 3 and note concentration dips.", done: false }
    ],
    proTip: "In the real exam, there is zero break between Listening, Reading, and Writing. Training back-to-back prevents cognitive burnout during the final 30 minutes of Reading.",
    resources: "Official Cambridge IELTS Academic Test 4 (Sections 1 & 2)"
  },
  {
    day: 66,
    month: 3,
    week: 9,
    skill: "Writing",
    skillCategory: "writing",
    title: "Full Writing Exam (Task 1 + Task 2) with Self-Audit",
    duration: "90 mins",
    summary: "Simulate a live 60-minute writing session followed by a thorough 30-minute line-by-line self-audit.",
    tasks: [
      { id: "t66-1", text: "Write Task 1 (Process or Mixed Chart) in 20 minutes.", done: false },
      { id: "t66-2", text: "Write Task 2 (Two-Part or Opinion) in 40 minutes.", done: false },
      { id: "t66-3", text: "Audit Task 1 against public descriptors: Did you state key features? Did you avoid individual data listings?", done: false },
      { id: "t66-4", text: "Audit Task 2: Did you use cohesive linkers? Are paragraphs well-developed with PEEL?", done: false }
    ],
    proTip: "Leave 2 minutes at the end of each task strictly for proofreading. Spotting and correcting three silly singular/plural or tense errors can mean the difference between Band 6.5 and 7.0.",
    resources: "Official IELTS Writing Practice Paper & Examiner Checklist"
  },
  {
    day: 67,
    month: 3,
    week: 9,
    skill: "Speaking",
    skillCategory: "speaking",
    title: "Full Speaking Interview Simulation with Native Model Critique",
    duration: "90 mins",
    summary: "Conduct a full speaking interview and compare your audio answers side-by-side with official Band 8.5/9.0 test transcripts.",
    tasks: [
      { id: "t67-1", text: "Record a complete continuous 14-minute speaking test (Parts 1, 2, and 3).", done: false },
      { id: "t67-2", text: "Listen to an official Cambridge Band 9 candidate audio on the exact same cue card.", done: false },
      { id: "t67-3", text: "Identify 3 phrases or idioms the native/Band 9 speaker used that made their speech sound organic.", done: false },
      { id: "t67-4", text: "Re-record your Part 2 talk incorporating those idiomatic improvements.", done: false }
    ],
    proTip: "Notice how Band 9 speakers don't speak unnaturally fast; they speak with steady rhythm, expressive intonation, and flawless coherence.",
    resources: "Cambridge IELTS Band 9 Speaking Sample Recordings"
  },

  // WEEK 10: COMPLETE FULL-LENGTH EXAM CONDITIONING (STAMINA)
  {
    day: 68,
    month: 3,
    week: 10,
    skill: "Mock Exam",
    skillCategory: "mock",
    title: "Full-Length Official Mock Exam #3 (2 Hours 45 Mins)",
    duration: "180 mins",
    summary: "Complete the entire written exam (Listening + Reading + Writing) under exact official time limits.",
    tasks: [
      { id: "t68-1", text: "Listening: 40 questions (40 mins).", done: false },
      { id: "t68-2", text: "Reading: 40 questions (60 mins).", done: false },
      { id: "t68-3", text: "Writing: Task 1 + Task 2 (60 mins).", done: false },
      { id: "t68-4", text: "Keep snacks and phone away; strictly mirror official testing centre regulations.", done: false }
    ],
    proTip: "Simulating the physical exam environment (sitting upright, no music, no bathroom pauses during tests) conditions your mental endurance for test day.",
    resources: "Cambridge IELTS Academic Book 17 Test 1"
  },
  {
    day: 69,
    month: 3,
    week: 10,
    skill: "Review",
    skillCategory: "mock",
    title: "Deep Error Audit & Root Cause Analysis for Mock #3",
    duration: "100 mins",
    summary: "Spend twice as long dissecting your Mock #3 errors as you spent taking the test.",
    tasks: [
      { id: "t69-1", text: "Grade all 80 questions from Listening and Reading.", done: false },
      { id: "t69-2", text: "Map every incorrect answer to its root cause (vocabulary deficit, misread question, time panic, spelling).", done: false },
      { id: "t69-3", text: "Highlight the specific sentences in the reading passages that you misconstrued.", done: false },
      { id: "t69-4", text: "Draft an action plan for the specific question types that cost you points.", done: false }
    ],
    proTip: "Top scorers don't just ask 'What is the right answer?'. They ask 'Why was the author's logic different from mine, and how do I predict it next time?'.",
    resources: "Error Root Cause Diagnostic Template"
  },
  {
    day: 70,
    month: 3,
    week: 10,
    skill: "Diagnostic",
    skillCategory: "mock",
    title: "Targeted Fix Day: Re-testing Weak Question Types",
    duration: "90 mins",
    summary: "Drill isolated sets of your historically lowest-scoring question types until they become second nature.",
    tasks: [
      { id: "t70-1", text: "If weak in Reading Headings: Complete 3 isolated sets of Matching Headings passages.", done: false },
      { id: "t70-2", text: "If weak in Listening Section 3: Complete 3 Section 3 multiple-choice recordings.", done: false },
      { id: "t70-3", text: "If weak in T/F/NG: Re-solve 15 questions with explicit written justifications.", done: false },
      { id: "t70-4", text: "Verify an accuracy rate of at least 85% on your targeted skill drills.", done: false }
    ],
    proTip: "Isolating weaknesses turns liability areas into strengths. Never take full tests without surgical drills in between.",
    resources: "Targeted Skill Repair Question Compilations"
  },
  {
    day: 71,
    month: 3,
    week: 10,
    skill: "Writing",
    skillCategory: "writing",
    title: "Writing Task 1 Speed Drill: 2 Reports in 35 Minutes",
    duration: "90 mins",
    summary: "Supercharge your Task 1 speed so that you can complete any Task 1 in 15 minutes, saving 5 extra minutes for Task 2.",
    tasks: [
      { id: "t71-1", text: "Write 1 complete Line/Bar Graph report in 17 minutes.", done: false },
      { id: "t71-2", text: "Write 1 complete Process/Map report in 17 minutes.", done: false },
      { id: "t71-3", text: "Verify that both reports contain clear overviews and zero missing key features.", done: false },
      { id: "t71-4", text: "Confirm word counts are between 160 and 190 words each.", done: false }
    ],
    proTip: "If you can write Task 1 in 15-17 minutes with high accuracy, you gift yourself an extra 3-5 minutes on Task 2, which is worth twice as many band score points.",
    resources: "Task 1 Speed Drill Prompts & Timing Timer"
  },
  {
    day: 72,
    month: 3,
    week: 10,
    skill: "Writing",
    skillCategory: "writing",
    title: "Task 2 Rapid Idea Generation Sprint (5 Prompts in 25 Mins)",
    duration: "90 mins",
    summary: "Eliminate writer's block by practicing instant outlining across diverse, unpredictable essay prompts.",
    tasks: [
      { id: "t72-1", text: "Select 5 varied prompts: Space Exploration, Youth Crime, Historic Preservation, Globalization, Artificial Intelligence.", done: false },
      { id: "t72-2", text: "Spend exactly 5 minutes per prompt: write thesis, Body 1 main idea + example, Body 2 main idea + example.", done: false },
      { id: "t72-3", text: "Check: Are your points relevant to the exact prompt wording without going off-topic?", done: false },
      { id: "t72-4", text: "Pick your favorite outline and write out the full essay in 35 minutes.", done: false }
    ],
    proTip: "Off-topic essays are severely penalized under Task Achievement. Always circle the boundary words in the prompt (e.g. 'young children', 'developing nations') so your arguments remain laser-focused.",
    resources: "IELTS Task 2 Rapid Brainstorming Workshop"
  },
  {
    day: 73,
    month: 3,
    week: 10,
    skill: "Speaking",
    skillCategory: "speaking",
    title: "Speaking Unfamiliar & Abstract Topics Drill",
    duration: "90 mins",
    summary: "Prepare for weird or obscure Part 1 & Part 2 topics (e.g. shoes, mirrors, stargazing, wild animals).",
    tasks: [
      { id: "t73-1", text: "Practice answering 10 unusual Part 1 questions without hesitating or expressing disbelief.", done: false },
      { id: "t73-2", text: "Master pivoting techniques: 'To be frank, I've never given much thought to mirrors, but if I consider their utility...'.", done: false },
      { id: "t73-3", text: "Record 2 minutes for: 'Describe an unusual plant or animal in your country'.", done: false },
      { id: "t73-4", text: "Focus on maintaining upbeat body language, smile, and natural eye contact during delivery.", done: false }
    ],
    proTip: "If you get a bizarre topic like 'mirrors' or 'shoes', never say 'I don't know'. Smile, acknowledge the novelty of the question, and relate it to daily habits or design.",
    resources: "Unusual & Obscure Speaking Topic Bank"
  },
  {
    day: 74,
    month: 3,
    week: 10,
    skill: "Speaking",
    skillCategory: "speaking",
    title: "Full Speaking Mock with Audio Transcription Critique",
    duration: "90 mins",
    summary: "Record an entire 14-minute speaking test, transcribe every word, and edit it to a Band 9 version.",
    tasks: [
      { id: "t74-1", text: "Conduct a full recorded 14-minute speaking exam.", done: false },
      { id: "t74-2", text: "Transcribe your answers to Part 2 and Part 3 using automated speech-to-text or manual typing.", done: false },
      { id: "t74-3", text: "Highlight every repetitive word (e.g. good, bad, thing, a lot of) and replace with Band 8+ academic collocations.", done: false },
      { id: "t74-4", text: "Read the edited transcript out loud twice with expressive intonation.", done: false }
    ],
    proTip: "The physical act of reading your edited Band 9 transcript trains your speech motor memory to produce those collocations instinctively during the real exam.",
    resources: "Speaking Self-Transcription Protocol"
  },

  // WEEK 11: PEAK PERFORMANCE & BAND 8.0+ POLISH
  {
    day: 75,
    month: 3,
    week: 11,
    skill: "Mock Exam",
    skillCategory: "mock",
    title: "Full-Length Official Mock Exam #4",
    duration: "180 mins",
    summary: "Take your fourth full-length mock exam to solidify test conditioning and pacing.",
    tasks: [
      { id: "t75-1", text: "Complete Listening Test (Sections 1-4: 40 questions).", done: false },
      { id: "t75-2", text: "Complete Academic Reading Test (Passages 1-3: 60 mins).", done: false },
      { id: "t75-3", text: "Complete Academic Writing Test (Task 1 + Task 2: 60 mins).", done: false },
      { id: "t75-4", text: "Grade strictly and calculate your 4-skill cumulative Band Score.", done: false }
    ],
    proTip: "Notice how your pacing has evolved: questions that caused panic in Month 1 are now processed methodically and smoothly.",
    resources: "Cambridge IELTS Academic Book 17 Test 2"
  },
  {
    day: 76,
    month: 3,
    week: 11,
    skill: "Review",
    skillCategory: "mock",
    title: "Error Log Review & Personalized 'Golden Rules' Checklist",
    duration: "90 mins",
    summary: "Condense 75 days of notes into a high-impact, 1-page laminated summary of your personal Golden Rules.",
    tasks: [
      { id: "t76-1", text: "Write 5 personal Golden Rules for Listening (e.g. 'Watch for self-corrections', 'Check plural s').", done: false },
      { id: "t76-2", text: "Write 5 personal Golden Rules for Reading (e.g. '17-20-23 min pacing', 'Read Y/N/NG carefully').", done: false },
      { id: "t76-3", text: "Write 5 personal Golden Rules for Writing (e.g. 'Overview is mandatory', 'PEEL paragraphs', '3 mins proofreading').", done: false },
      { id: "t76-4", text: "Write 5 personal Golden Rules for Speaking (e.g. 'No 1-word answers', 'Speak till stopped in Part 2', 'PEEL in Part 3').", done: false }
    ],
    proTip: "Review this 1-page Golden Rules document every morning from now until test day. It will anchor your focus under stress.",
    resources: "Personal IELTS Golden Rules Master Template"
  },
  {
    day: 77,
    month: 3,
    week: 11,
    skill: "Writing",
    skillCategory: "writing",
    title: "Task 2 Masterclass: Lexical Precision & Collocations",
    duration: "100 mins",
    summary: "Swap generic, overused words for topic-specific, academic collocations across major IELTS themes.",
    tasks: [
      { id: "t77-1", text: "Review Education collocations: tertiary education, vocational training, rote memorization, holistic curriculum.", done: false },
      { id: "t77-2", text: "Review Environment collocations: carbon footprint, renewable energy subsidies, ecological degradation, sustainable development.", done: false },
      { id: "t77-3", text: "Review Society & Technology collocations: digital literacy, algorithmic bias, socioeconomic disparity, civic engagement.", done: false },
      { id: "t77-4", text: "Draft an essay using at least 8 high-level topic collocations with seamless natural flow.", done: false }
    ],
    proTip: "Lexical Resource in Band 8 is defined as 'uses a wide range of vocabulary flexibly and precisely... rare minor errors or inappropriate word choice only as slips'. Precision beats fancy obscurity.",
    resources: "IELTS Topic-by-Topic Collocation Dictionary"
  },
  {
    day: 78,
    month: 3,
    week: 11,
    skill: "Reading",
    skillCategory: "reading",
    title: "Reading Speed Blitz: 3 Passages in 50 Minutes",
    duration: "90 mins",
    summary: "Train with a 10-minute buffer so that regular 60-minute test timing feels relaxed and comfortable.",
    tasks: [
      { id: "t78-1", text: "Set a countdown timer for exactly 50 minutes (10 mins shorter than official exam).", done: false },
      { id: "t78-2", text: "Complete all 40 questions across Passages 1, 2, and 3.", done: false },
      { id: "t78-3", text: "Score your accuracy: Did completing it faster cause significant accuracy loss?", done: false },
      { id: "t78-4", text: "Analyze which passage suffered most and practice allocating buffer time accordingly.", done: false }
    ],
    proTip: "If you can score 34+ in 50 minutes, you will possess supreme confidence during the standard 60-minute test.",
    resources: "Cambridge IELTS Reading Speed Test"
  },
  {
    day: 79,
    month: 3,
    week: 11,
    skill: "Listening",
    skillCategory: "listening",
    title: "Listening Under Distraction Conditioning",
    duration: "90 mins",
    summary: "Train your concentration against coughing, pencil dropping, or faint background hums that occur in exam halls.",
    tasks: [
      { id: "t79-1", text: "Play light coffee shop / classroom ambient sound in the background while taking a full listening test.", done: false },
      { id: "t79-2", text: "Maintain absolute tunnel vision on the question keywords.", done: false },
      { id: "t79-3", text: "Practice immediate recovery: if you lose an answer, instantly refocus on the next question number.", done: false },
      { id: "t79-4", text: "Score your test and verify resilience under non-ideal acoustic conditions.", done: false }
    ],
    proTip: "If you miss an answer in the listening exam, it is GONE. Dwelling on question 14 for 5 seconds will cause you to miss questions 15 and 16. Let it go and catch the next wave.",
    resources: "Ambient Noise Audio Overlay & Cambridge Test"
  },
  {
    day: 80,
    month: 3,
    week: 11,
    skill: "Speaking",
    skillCategory: "speaking",
    title: "Speaking Accent, Intonation & Chunking Rhythm",
    duration: "90 mins",
    summary: "Master natural thought-chunking, sentence stress, and rising/falling intonation for Band 8+ Pronunciation.",
    tasks: [
      { id: "t80-1", text: "Understand Chunking: Speak in meaningful phrases rather than robotically word-by-word ('In my personal opinion, // having access to quality education // is a fundamental human right.').", done: false },
      { id: "t80-2", text: "Practice sentence stress: stress content words (nouns, main verbs) and unstressed function words (articles, auxiliary verbs).", done: false },
      { id: "t80-3", text: "Shadow a Band 9 native speaker audio for 15 minutes, mimicking their rhythm, pitch rises, and falling cadences.", done: false },
      { id: "t80-4", text: "Record a full Part 2 talk focusing entirely on expressive intonation.", done: false }
    ],
    proTip: "Having a foreign accent does NOT lower your pronunciation score! Cambridge assesses clarity, word/sentence stress, and intonation. You can score Band 9 with an accent as long as you are 100% effortless to understand.",
    resources: "Intonation & Thought Chunking Workshop"
  },
  {
    day: 81,
    month: 3,
    week: 11,
    skill: "Mock Exam",
    skillCategory: "mock",
    title: "Full-Length Official Mock Exam #5",
    duration: "180 mins",
    summary: "Your penultimate full-length rehearsal across all 4 components.",
    tasks: [
      { id: "t81-1", text: "Listening: 40 questions (40 mins).", done: false },
      { id: "t81-2", text: "Reading: 40 questions (60 mins).", done: false },
      { id: "t81-3", text: "Writing: Task 1 + Task 2 (60 mins).", done: false },
      { id: "t81-4", text: "Speaking: Full interview (14 mins).", done: false },
      { id: "t81-5", text: "Calculate your complete Band Score and verify you are at your target band!", done: false }
    ],
    proTip: "You have built tremendous academic endurance over 80 days. Trust your preparation and embrace the process.",
    resources: "Cambridge IELTS Academic Book 18 Test 1"
  },

  // WEEK 12: FINAL SIMULATION, CONSOLIDATION & EXAM READINESS
  {
    day: 82,
    month: 3,
    week: 12,
    skill: "Writing",
    skillCategory: "writing",
    title: "Writing Final Polish: Top 20 Band 9 Sentence Templates",
    duration: "90 mins",
    summary: "Consolidate and memorize your favorite, most reliable syntactic structures for introductions, body paragraphs, and conclusions.",
    tasks: [
      { id: "t82-1", text: "Review 5 introductory paraphrase formulas.", done: false },
      { id: "t82-2", text: "Review 5 sophisticated body paragraph linkers ('A compelling case can be made for...', 'This phenomenon can largely be attributed to...').", done: false },
      { id: "t82-3", text: "Review 5 concluding summary structures ('In conclusion, while X is not without merit, I remain convinced that Y...').", done: false },
      { id: "t82-4", text: "Handwrite 2 full essays using these structures smoothly without hesitation.", done: false }
    ],
    proTip: "Handwriting practice is vital if you are taking the paper-based test! Ensure your handwriting is legible and your hand doesn't cramp during the 60 minutes.",
    resources: "The 20 Essential Band 9 Sentence Structures Blueprint"
  },
  {
    day: 83,
    month: 3,
    week: 12,
    skill: "Reading",
    skillCategory: "reading",
    title: "Reading Final Polish: 10 Golden Tactics for Every Question Type",
    duration: "90 mins",
    summary: "Conduct a fast, methodical review of tactical procedures for Headings, T/F/NG, Matching, and Multiple Choice.",
    tasks: [
      { id: "t83-1", text: "Review the exact protocol for Matching Headings (theme vs detail).", done: false },
      { id: "t83-2", text: "Review the exact protocol for T/F/NG and Y/N/NG (contradiction vs absence of fact).", done: false },
      { id: "t83-3", text: "Review Summary Completion (grammar constraints & direct copying).", done: false },
      { id: "t83-4", text: "Solve 1 mixed passage in 18 minutes applying these protocols with zero hesitation.", done: false }
    ],
    proTip: "Confidence comes from having a predetermined battle plan for every question type. When a Heading question appears, execute your heading plan automatically.",
    resources: "Reading Tactics Pocket Reference"
  },
  {
    day: 84,
    month: 3,
    week: 12,
    skill: "Listening",
    skillCategory: "listening",
    title: "Listening Final Polish: Transfer Sheet & Spelling Safeguards",
    duration: "90 mins",
    summary: "Rehearse answer transfer protocols and eliminate any remaining risk of technical scoring errors.",
    tasks: [
      { id: "t84-1", text: "Practice using the 10-minute transfer time (paper) or 2-minute review time (computer) with maximum efficiency.", done: false },
      { id: "t84-2", text: "Perform the 'Grammar Compatibility Check': Ensure answers fit into sentences grammatically.", done: false },
      { id: "t84-3", text: "Complete 1 full Section 1-4 Listening Test under exam volume levels.", done: false },
      { id: "t84-4", text: "Verify 100% adherence to word limit instructions.", done: false }
    ],
    proTip: "If the instruction says 'NO MORE THAN TWO WORDS', writing 'in the hospital' is marked wrong even if the idea is right! Write 'hospital' or 'the hospital'.",
    resources: "Official IELTS Listening Answer Sheet & Final Audio Drill"
  },
  {
    day: 85,
    month: 3,
    week: 12,
    skill: "Speaking",
    skillCategory: "speaking",
    title: "Speaking Final Warmup: 30 Rapid Part 1 & Part 3 Questions",
    duration: "90 mins",
    summary: "Engage in a rapid, spontaneous speaking marathon to loosen your articulatory muscles and boost natural responsiveness.",
    tasks: [
      { id: "t85-1", text: "Answer 15 diverse Part 1 questions back-to-back with immediate 1-second starts.", done: false },
      { id: "t85-2", text: "Practice 1 Cue Card with 1-min prep and 2-min uninterrupted speech.", done: false },
      { id: "t85-3", text: "Answer 10 complex Part 3 analytical questions with PEEL justification.", done: false },
      { id: "t85-4", text: "Congratulate yourself: your spoken fluency is now agile, natural, and expressive.", done: false }
    ],
    proTip: "Treat the examiner as a curious, friendly professional with whom you are having an engaging intellectual conversation. A relaxed, confident demeanor naturally boosts fluency.",
    resources: "Rapid Fire Speaking Warmup Cards"
  },
  {
    day: 86,
    month: 3,
    week: 12,
    skill: "Mock Exam",
    skillCategory: "mock",
    title: "Final Full-Length Mock Exam #6: The Official Dress Rehearsal",
    duration: "180 mins",
    summary: "The final complete test rehearsal. Start at the exact time your real exam will commence (usually 9:00 AM).",
    tasks: [
      { id: "t86-1", text: "Start at official exam time (e.g. 9:00 AM).", done: false },
      { id: "t86-2", text: "Complete Listening (40 mins), Reading (60 mins), and Writing (60 mins) back-to-back without interruption.", done: false },
      { id: "t86-3", text: "Complete Speaking Interview Simulation (14 mins).", done: false },
      { id: "t86-4", text: "Record your final Dress Rehearsal Band Score. You are ready!", done: false }
    ],
    proTip: "This is your final full test. Regardless of the score today, your 90 days of structured preparation have built deep, real competence. Trust your training.",
    resources: "Cambridge IELTS Academic Book 18 Test 2"
  },
  {
    day: 87,
    month: 3,
    week: 12,
    skill: "Review",
    skillCategory: "mock",
    title: "Error Journal Final Retrospective & Confidence Reinforcement",
    duration: "75 mins",
    summary: "Close your Error Journal. Celebrate how many past mistakes you have permanently conquered.",
    tasks: [
      { id: "t87-1", text: "Leaf through your entire Error Journal from Day 1 to Day 86.", done: false },
      { id: "t87-2", text: "Notice how hundreds of weaknesses have been identified and systematically eliminated.", done: false },
      { id: "t87-3", text: "Read your 1-page Golden Rules summary aloud.", done: false },
      { id: "t87-4", text: "Pack your study materials away; heavy academic studying ends today.", done: false }
    ],
    proTip: "Do not do heavy studying in the final 72 hours. Your brain needs rest to operate at maximum cognitive speed and sharpness on exam day.",
    resources: "Personal Error Journal & Golden Rules Sheet"
  },
  {
    day: 88,
    month: 3,
    week: 12,
    skill: "Review",
    skillCategory: "mock",
    title: "Light Review: Vocabulary Flashcards & Transition Markers Only",
    duration: "60 mins",
    summary: "Gentle 60-minute refresher: flip through key collocations, transition words, and trend phrases.",
    tasks: [
      { id: "t88-1", text: "Lightly review 30 Task 1 trend verbs and percentage fractions.", done: false },
      { id: "t88-2", text: "Review 20 cohesive transition markers for Task 2.", done: false },
      { id: "t88-3", text: "Listen to 15 minutes of an enjoyable English podcast or audio story at standard speed.", done: false },
      { id: "t88-4", text: "Go for a walk, exercise, and allow your brain to relax.", done: false }
    ],
    proTip: "Keep your language exposure light, pleasant, and natural today. No mock tests, no stress.",
    resources: "IELTS Core Collocations Pocket Flashcards"
  },
  {
    day: 89,
    month: 3,
    week: 12,
    skill: "Review",
    skillCategory: "mock",
    title: "Exam Logistics, Mental Preparation & Routine Setup",
    duration: "45 mins",
    summary: "Organize test day documents, prepare stationery, plan transportation, and establish a calm mindset.",
    tasks: [
      { id: "t89-1", text: "Gather required documents: Original National Passport / ID used during registration, confirmation slip.", done: false },
      { id: "t89-2", text: "Prepare permitted stationery: 2B/HB pencils, pencil sharpener, clean eraser, clear transparent water bottle (labels removed).", done: false },
      { id: "t89-3", text: "Map your route to the test center: plan to arrive at least 45 minutes prior to registration closing.", done: false },
      { id: "t89-4", text: "Eat a balanced dinner, avoid heavy sugar or excess caffeine, and get 8 hours of solid sleep.", done: false }
    ],
    proTip: "Exam day success is 80% preparation and 20% emotional regulation. You have prepared for 90 days. Walk into the venue with the calm poise of a master.",
    resources: "Official British Council / IDP Test Day Guidelines & Checklist"
  },
  {
    day: 90,
    month: 3,
    week: 12,
    skill: "Mock Exam",
    skillCategory: "mock",
    title: "IELTS Exam Day: Peak Performance & Band Score Triumph!",
    duration: "Full Test",
    summary: "Deliver your best performance across Listening, Reading, Writing, and Speaking with complete confidence.",
    tasks: [
      { id: "t90-1", text: "Eat a nutritious breakfast with protein and complex carbs.", done: false },
      { id: "t90-2", text: "Warm up your English: listen to 10 minutes of conversational English on your commute to activate your language center.", done: false },
      { id: "t90-3", text: "Listening: Predict during prep time; don't dwell on missed items.", done: false },
      { id: "t90-4", text: "Reading: Execute the 17-20-23 pacing; write answers directly on the answer sheet.", done: false },
      { id: "t90-5", text: "Writing: 5 mins planning; write a stellar Overview for Task 1; use PEEL in Task 2; proofread!", done: false },
      { id: "t90-6", text: "Speaking: Smile, maintain eye contact, expand in Part 1, talk for 2 mins in Part 2, analyze societal trends in Part 3!", done: false }
    ],
    proTip: "Take a deep, slow breath before each module begins. You have conquered all 90 days of the roadmap. You are fully equipped to achieve your target band score!",
    resources: "Official IELTS Examination Session"
  }
];

// Pre-defined Skill Guides and Practice Content for interactive Lab modules
const SKILL_MODULES = {
  listening: {
    title: "Listening Mastery",
    icon: "headphones",
    description: "4 sections, 40 questions, 30 minutes audio (+ 10 mins transfer on paper, 2 mins on computer). Raw score 35/40 = Band 8.0.",
    sections: [
      {
        name: "Section 1: Everyday Social Conversation (2 Speakers)",
        focus: "Form, table, or note completion (names, telephone numbers, addresses, dates, credit cards).",
        strategy: "Use the 30-second prep window to predict the required part of speech (is it a price, surname, or date?). Beware of speaker self-corrections."
      },
      {
        name: "Section 2: Everyday Context Monologue (1 Speaker)",
        focus: "Campus orientation, local tour guide, facility introduction, radio broadcast.",
        strategy: "Multiple Choice and Map/Plan Labelling. Keep your finger or cursor on the map anchor points ('entrance', 'roundabout', 'reception')."
      },
      {
        name: "Section 3: Academic Discussion (2-4 Speakers)",
        focus: "University students discussing a tutorial, research paper, experiment, or professor's feedback.",
        strategy: "Track agreement and disagreement. Listen for signposts: 'While that is true, shouldn't we rather...'. Beware of distractors matching other options."
      },
      {
        name: "Section 4: Academic University Lecture (1 Speaker)",
        focus: "Continuous lecture on history, biology, economics, geology, or psychology with zero pauses.",
        strategy: "Scan all 10 questions before the audio starts. Use heading structures in the notes as roadmaps to avoid getting lost."
      }
    ],
    rules: [
      "NO MORE THAN X WORDS: Exceeding word limit by even one word (e.g. 'the hospital' when limit is ONE WORD) results in zero marks.",
      "Spelling must be 100% correct according to standard British or American English conventions.",
      "Singular vs Plural matters: If the audio says 'computers' and you write 'computer', it is marked wrong.",
      "You can write answers in ALL CAPITAL LETTERS to avoid capitalization ambiguity."
    ]
  },
  reading: {
    title: "Academic Reading Mastery",
    icon: "book-open",
    description: "3 long academic passages, 40 questions, 60 minutes. Raw score 30/40 = Band 7.0, 35/40 = Band 8.0.",
    sections: [
      {
        name: "Passage 1 (Descriptive / Factual)",
        focus: "History of an invention, a biography, or natural science overview. Generally the most straightforward.",
        strategy: "Target completion in 16-17 minutes to bank time for Passage 3. Common types: T/F/NG, Summary Completion."
      },
      {
        name: "Passage 2 (Analytical / Explanatory)",
        focus: "Workplace psychology, environmental conservation, educational innovations.",
        strategy: "Target completion in 20 minutes. Common types: Matching Information, Matching Headings, Multiple Choice."
      },
      {
        name: "Passage 3 (Theoretical / Complex Discourse)",
        focus: "Philosophy of mind, ancient linguistics, cognitive science, astrophysics.",
        strategy: "Target completion in 23 minutes. Heavy academic syntax and dense argumentation. Look for main clause subject and verb."
      }
    ],
    rules: [
      "No extra transfer time! Write your answers directly on the answer sheet as you complete each passage.",
      "TRUE vs NOT GIVEN: TRUE means the passage explicitly confirms it. NOT GIVEN means the text neither confirms nor refutes it.",
      "YES / NO / NOT GIVEN is for writer's claims and opinions, whereas TRUE / FALSE / NOT GIVEN is for factual information.",
      "Do not read the full passage first; read the question stems first to identify what you are hunting for."
    ]
  },
  writing: {
    title: "Academic Writing Mastery",
    icon: "pen-tool",
    description: "Task 1 (Report, 150+ words, 20 mins, 33.3% of score) + Task 2 (Essay, 250+ words, 40 mins, 66.6% of score).",
    criteria: [
      { code: "TA/TR", name: "Task Achievement / Response", desc: "Did you address all parts of prompt? Clear overview in Task 1? Consistent clear stance in Task 2?" },
      { code: "CC", name: "Coherence & Cohesion", desc: "Logical paragraph progression, effective PEEL structure, natural linking devices without over-use." },
      { code: "LR", name: "Lexical Resource", desc: "Accurate, flexible range of academic vocabulary, precise collocations, few spelling errors." },
      { code: "GRA", name: "Grammatical Range & Accuracy", desc: "Variety of complex sentence structures (relative clauses, conditionals, passive voice) with high accuracy." }
    ],
    task1Formula: {
      structure: [
        "Paragraph 1: Introduction (Paraphrase the prompt in 1-2 sentences)",
        "Paragraph 2: Overview (2-3 main trends, highest/lowest points, or key changes - NO figures!)",
        "Paragraph 3: Body 1 (Detailed reporting of Group A data with specific dates and figures)",
        "Paragraph 4: Body 2 (Detailed reporting of Group B data with comparisons and figures)"
      ],
      mustRemember: "Without a clear Overview paragraph, your Task Achievement score is automatically capped at Band 5!"
    },
    task2Formula: {
      structure: [
        "Paragraph 1: Introduction (Paraphrase prompt + clear thesis statement stating your position)",
        "Paragraph 2: Body Paragraph 1 (PEEL: Point -> Explain -> Concrete Example -> Link back)",
        "Paragraph 3: Body Paragraph 2 (PEEL: Point -> Explain -> Concrete Example -> Link back)",
        "Paragraph 4: Conclusion (Restate thesis in fresh words + summarize main arguments)"
      ],
      mustRemember: "Task 2 is worth twice as many points as Task 1. Allocate a full 40 minutes and at least 250 words."
    }
  },
  speaking: {
    title: "Speaking Interview Mastery",
    icon: "mic",
    description: "11-14 minute one-on-one interview with certified examiner. Divided into 3 distinct parts.",
    parts: [
      {
        part: "Part 1: Introduction & Familiar Topics (4-5 mins)",
        focus: "Work, study, hometown, hobbies, weather, daily routine, colors, transportation.",
        strategy: "The 1-2-3 Formula: Direct Answer + Reason ('because...') + Detail/Example ('In fact...'). Keep responses to 2-4 sentences (15-20 secs)."
      },
      {
        part: "Part 2: Long Turn / Cue Card (3-4 mins)",
        focus: "Given a topic card with 4 bullet points; 1 minute to prepare with pen & paper; speak for 1.5 to 2 minutes.",
        strategy: "Use the Past-Present-Future timeline framework or Storytelling structure. Do not stop speaking until the examiner stops you!"
      },
      {
        part: "Part 3: Two-Way Analytical Discussion (4-5 mins)",
        focus: "Abstract societal, educational, technological, and ethical questions linked to the Part 2 theme.",
        strategy: "Never answer about yourself or your family here. Discuss societal trends, compare past vs future, evaluate pros and cons using PEEL."
      }
    ],
    rules: [
      "Fluency & Coherence: Don't repeat the question words. Speak at a steady, natural pace. Avoid silent dead-air.",
      "Lexical Resource: Use idiomatic language, collocations, and topic-specific vocabulary naturally.",
      "Grammatical Range: Use conditional clauses ('If people were to...'), passive voice, and cleft sentences.",
      "Pronunciation: Intonation and thought chunking matter. An accent is completely acceptable as long as it is clear."
    ]
  }
};
