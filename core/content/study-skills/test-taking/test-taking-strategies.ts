/**
 * Test-Taking Strategies - Optimizing Performance on Medical Examinations
 *
 * Educational content covering effective test-taking strategies, time management,
 * and performance optimization for medical examinations.
 */

import { EducationalContent } from '../../types';

export const testTakingStrategies: EducationalContent = {
  id: 'education-test-taking-strategies',
  type: 'concept',
  name: 'Test-Taking Strategies',
  alternateNames: ['Exam Strategies', 'Test Performance', 'Examination Techniques'],

  levels: {
    1: {
      level: 1,
      summary: 'Good test-taking strategies can help you do better on exams. These include reading questions carefully, managing your time, and staying calm.',
      explanation: `## How to Do Well on Tests

Taking tests is a skill you can learn! Even if you know the material, these tips can help you do your best.

## Before the Test

**Get Ready:**
- Get a good night's sleep
- Eat a healthy breakfast
- Arrive early
- Bring everything you need (pencils, ID, etc.)

## During the Test

**Read Carefully:**
- Read each question completely
- Look for important words like "NOT" or "EXCEPT"
- Make sure you understand what's being asked

**Manage Your Time:**
- Know how much time you have
- Don't spend too long on one question
- Try to leave time to review

**Answer Questions Smartly:**
- Answer easy questions first
- Mark hard questions and come back to them
- Never leave questions blank (unless there's a penalty)

**Use the Process of Elimination:**
- Cross out answers you know are wrong
- Even if you're not sure, fewer choices makes it easier
- Make your best educated guess

## Staying Calm

**If you feel nervous:**
- Take a deep breath
- Remember: you prepared for this
- Do some easier questions first to build confidence
- Focus on one question at a time

## Multiple Choice Tips

- Read all the choices before picking
- Your first answer is often right (don't change it unless you're sure)
- Watch for "always" and "never" - these are often wrong
- Look for grammar clues

## After the Test

- Don't worry about what you can't change
- Learn from any mistakes for next time
- Celebrate that you finished!`,
      keyTerms: [
        { term: 'process of elimination', definition: 'A method of answering by removing choices you know are wrong' },
        { term: 'time management', definition: 'Planning how to use your time during a test so you can finish everything' },
        { term: 'educated guess', definition: 'A guess based on what you do know, even if you\'re not completely sure' },
      ],
      analogies: [
        'Taking a test is like running a race - you need to pace yourself and not sprint too fast at the beginning.',
        'The process of elimination is like finding a needle in a haystack by removing handfuls of hay.',
        'Reading questions carefully is like reading a recipe - missing one word can change everything.',
      ],
      examples: [
        'A student sees a question with "NOT" in it, circles the word NOT, and makes sure to find the answer that is NOT correct.',
        'When stuck on a hard question, a student marks it and moves on, coming back to it after finishing easier ones.',
      ],
      patientCounselingPoints: [
        'Test-taking skills help future doctors demonstrate their knowledge on important medical exams',
        'Managing stress during tests is similar to staying calm during challenging clinical situations',
      ],
    },

    2: {
      level: 2,
      summary: 'Effective test-taking involves systematic question analysis, strategic time allocation, and management of test anxiety. These skills complement content knowledge to optimize examination performance.',
      explanation: `## Test-Taking Strategy Fundamentals

Test performance depends on both knowledge and test-taking skills. Optimizing these skills can significantly improve scores.

## Question Analysis

**Reading Strategy:**
1. Read the last sentence first (the actual question)
2. Identify what's being asked
3. Read the stem for relevant information
4. Eliminate clearly wrong answers
5. Choose the best answer

**Key Words to Watch:**
| Word | Meaning |
|------|---------|
| MOST | More than one answer may be correct, choose best |
| EXCEPT | Looking for the incorrect option |
| NOT | Looking for what's false |
| ALWAYS/NEVER | Extreme words, often incorrect |
| FIRST | Initial/immediate action |
| BEST | Most appropriate option |

## Time Management

**Allocation Strategy:**
- Know total time and number of questions
- Calculate time per question (usually 60-90 seconds)
- Build in review time (10-15% of total)
- Don't spend more than 2x average time on any question

**Pacing Techniques:**
| Phase | Time | Activity |
|-------|------|----------|
| First pass | 70% | Answer known, flag uncertain |
| Second pass | 20% | Review flagged questions |
| Final review | 10% | Check answers, verify bubbling |

## Answer Selection

**Process of Elimination:**
1. Identify obviously wrong answers
2. Look for subtle differences in remaining options
3. Compare remaining answers to the question stem
4. Select the best fit

**When to Change Answers:**
- Change if you find clear evidence you were wrong
- Don't change based on "gut feeling"
- Research shows first instinct is usually right
- Exception: if you misread the question

## Multiple Choice Strategies

**Answer Patterns:**
- Correct answers are randomly distributed
- No pattern to exploit
- Don't let previous answers influence current choice

**Structural Clues:**
- Longest answer is often correct (more qualifications)
- Middle answers (B, C) slightly more common
- Answers with qualifiers ("usually," "often") more likely correct
- "All of the above" when present is often correct

## Two-Step Questions

**Approach:**
1. Answer the first part independently
2. Let that answer guide the second part
3. Don't work backward (finding an answer that works for both)

## Managing Test Anxiety

**Before the Test:**
- Adequate sleep and nutrition
- Arrive early to settle in
- Positive self-talk
- Deep breathing exercises

**During the Test:**
- Start with easier questions for confidence
- Take brief mental breaks (30 seconds)
- Use relaxation techniques if anxious
- Focus on the present question, not the whole test

**Physical Strategies:**
- Comfortable posture
- Brief stretching during breaks
- Avoid excessive caffeine
- Stay hydrated

## Review and Checking

**What to Review:**
- Flagged questions
- Questions where you changed answers
- Questions with "NOT" or "EXCEPT"

**What NOT to Do:**
- Don't second-guess every answer
- Don't look for patterns
- Don't spend excessive time on review`,
      keyTerms: [
        { term: 'stem', definition: 'The main body of a test question that provides context and information' },
        { term: 'flag', definition: 'To mark a question for later review when unsure of the answer' },
        { term: 'two-step question', definition: 'A question requiring two sequential decisions or conclusions' },
        { term: 'process of elimination', definition: 'Systematically removing incorrect answers to identify the correct one' },
      ],
      analogies: [
        'The two-pass approach is like sorting mail - first put obvious items in their place, then go back for the tricky ones.',
        'Flagging questions is like leaving bookmarks - you can find them easily when you return.',
        'Process of elimination is like a detective ruling out suspects - each eliminated option gets you closer to the answer.',
      ],
      examples: [
        'A student encounters a question asking for the LEAST appropriate treatment, circles "LEAST," and looks for the one wrong answer among correct options.',
        'During a 60-question, 60-minute exam, a student budgets 1 minute per question with 5 minutes for review, flagging any question taking more than 2 minutes.',
      ],
      patientCounselingPoints: [
        'Test-taking skills help medical students efficiently demonstrate clinical knowledge',
        'The ability to remain calm and think systematically under pressure translates to clinical practice',
      ],
    },

    3: {
      level: 3,
      summary: 'Advanced test-taking strategy integrates systematic question analysis, cognitive load management, and performance psychology. Understanding question construction and common error patterns enables strategic optimization of examination performance.',
      explanation: `## Advanced Test-Taking Framework

Optimizing test performance requires understanding cognitive processes, question design, and strategic decision-making under time pressure.

## Cognitive Question Analysis

**Information Processing Model:**
1. **Perception:** Accurately read question
2. **Comprehension:** Understand what's being asked
3. **Retrieval:** Access relevant knowledge
4. **Integration:** Apply knowledge to specific scenario
5. **Selection:** Choose best answer from options

**Common Cognitive Errors:**
| Error | Description | Prevention |
|-------|-------------|------------|
| Misreading | Missing key words | Circle key terms |
| Premature closure | Stopping search early | Consider all options |
| Anchoring | Over-relying on first impression | Reconsider with new info |
| Confirmation bias | Seeking supporting evidence | Look for contradictory data |

## Question Type Analysis

**Single Best Answer:**
- All options may be partially correct
- Choose the MOST correct
- Consider safety and standard of care

**Extended Matching:**
- Multiple questions from same option list
- Options may be used once, multiple times, or not at all
- Read all questions before answering

**Sequential Questions:**
- Answer in order
- Usually cannot go back
- Information may build

## Item Writing Principles

**Understanding Test Construction:**
- Questions test specific learning objectives
- Distractors (wrong answers) based on common errors
- Key features distinguish among similar conditions

**Distractor Analysis:**
| Type | Characteristic |
|------|----------------|
| True but irrelevant | Correct statement, wrong question |
| Partially correct | Missing key element |
| Common misconception | Tests for common error |
| Close but wrong | Related condition or treatment |

## Time Efficiency Optimization

**Question Difficulty Triage:**
| Category | Action | Time |
|----------|--------|------|
| Known | Answer immediately | <60 sec |
| Uncertain | Flag, answer tentatively | 60-90 sec |
| Unknown | Flag, educated guess | 30 sec |

**Efficiency Techniques:**
- Read answer choices first for simple questions
- Skip lengthy stems initially if stuck
- Use answer choices to guide stem reading
- Don't re-read entire stem on review

## Strategic Decision Making

**When You Don't Know:**
1. Eliminate what you can
2. Look for clues in the question
3. Consider which option a test-writer would expect
4. Make educated guess and move on

**Answer Change Strategy:**
| Situation | Action |
|-----------|--------|
| Found new information | Change |
| Misread question | Change |
| Just feeling uncertain | Keep original |
| No clear reason | Keep original |

## Performance State Management

**Optimal Arousal:**
- Yerkes-Dodson Law: Moderate arousal = best performance
- Too calm: May miss details
- Too anxious: Impairs processing
- Goal: Alert but not anxious

**State Management Techniques:**
| Technique | Purpose |
|-----------|---------|
| Deep breathing | Reduce anxiety |
| Positive self-talk | Build confidence |
| Progressive relaxation | Physical calm |
| Mindfulness | Present focus |

## Question Pattern Recognition

**Clinical Vignette Structure:**
1. Demographics (age, sex)
2. Chief complaint
3. History elements
4. Physical findings
5. Lab/imaging results
6. Question stem

**Using Structure:**
- Demographics suggest differential
- Chief complaint focuses thinking
- History narrows possibilities
- Findings confirm or exclude
- Data provides evidence

## Review Strategy

**Efficient Review:**
- Focus on flagged questions
- Check questions with NOT/EXCEPT
- Verify no bubbling errors
- Don't exhaustively reconsider answered questions

**When to Stop Reviewing:**
- Time running low
- Beginning to second-guess without reason
- Anxiety increasing`,
      keyTerms: [
        { term: 'distractor', definition: 'An incorrect answer option designed to attract test-takers who have incomplete knowledge' },
        { term: 'Yerkes-Dodson Law', definition: 'Principle that moderate arousal optimizes performance while too little or too much impairs it' },
        { term: 'premature closure', definition: 'Cognitive error of accepting an answer before adequately considering alternatives' },
        { term: 'clinical vignette', definition: 'A patient case description that provides context for medical examination questions' },
      ],
      analogies: [
        'Distractors are like decoys - they look real but lead you away from the target.',
        'The Yerkes-Dodson Law is like tuning a guitar - too loose or too tight and it won\'t play right.',
        'Question triage is like emergency triage - handle what you can quickly, flag what needs more time.',
        'Premature closure is like declaring victory before the game is over - always verify before moving on.',
      ],
      examples: [
        'A student recognizes that an answer option describes a true condition but doesn\'t answer what was actually asked - a true-but-irrelevant distractor.',
        'Feeling overwhelmed, a student takes three deep breaths, completes a few easier questions, and returns to the difficult section with renewed focus.',
      ],
      patientCounselingPoints: [
        'Understanding question design helps identify what knowledge is being tested',
        'Performance state management skills transfer directly to high-pressure clinical situations',
      ],
    },

    4: {
      level: 4,
      summary: 'Graduate-level test-taking mastery integrates cognitive psychology, psychometrics, and performance optimization. Understanding question construction, cognitive error patterns, and state management enables maximal demonstration of knowledge on high-stakes examinations.',
      explanation: `## Expert Test-Taking Framework

Advanced test performance optimization requires understanding psychometric principles, cognitive processes, and systematic error prevention.

## Psychometric Foundations

**Item Characteristics:**
| Metric | Description | Implication |
|--------|-------------|-------------|
| Difficulty | % answering correctly | Guides pacing |
| Discrimination | Differentiates high/low | Important items |
| Distractor analysis | Wrong answer patterns | Common errors |

**Question Construction Insight:**
- Items referenced to specific content
- Cognitive level specified (recall/application/synthesis)
- Single best answer has defined rationale
- Distractors target specific misconceptions

## Cognitive Error Prevention

**Systematic Approach:**
1. **Read stem completely:** Resist urge to jump to answers
2. **Identify question type:** What is actually being asked?
3. **Generate answer:** Before looking at options
4. **Evaluate options:** Compare to generated answer
5. **Verify selection:** Does it answer what was asked?

**Error Type Management:**
| Error | Recognition | Prevention |
|-------|-------------|------------|
| Misreading | Rereading reveals | Circle keywords |
| Knowledge gap | Can't recall relevant content | Accept and move on |
| Interference | Similar content confusion | Compare discriminating features |
| Reasoning error | Logic doesn't hold | Check reasoning chain |

## Time Optimization

**Cognitive Load Considerations:**
- Working memory limited
- Time pressure increases load
- Complex stems tax processing
- Strategic rest periods help

**Time Allocation Algorithm:**
| Question State | Time Limit | Action |
|----------------|-----------|--------|
| Confident | 45 seconds | Answer, don't linger |
| Uncertain | 90 seconds | Analyze, decide |
| Unknown | 30 seconds | Best guess, flag |
| Flagged review | 60 seconds | Final decision |

## Answer Selection Optimization

**Decision Theory Application:**
- Expected value = P(correct) × score
- No penalty: Always guess
- Penalty: Calculate threshold for guessing

**Bayesian Reasoning:**
- Prior probability from stem
- Update with each piece of information
- Select highest posterior probability

## Pattern Recognition

**Clinical Reasoning Integration:**
- Build problem representation
- Match to illness scripts
- Evaluate fit with findings
- Select most likely diagnosis/treatment

**Recognizing "Classic" Presentations:**
- Step 1/2 rely on pattern recognition
- Classic presentations are frequently tested
- Atypical presentations require broader thinking
- "Can't miss" diagnoses are prioritized

## Performance Psychology

**Pre-Test Optimization:**
| Factor | Strategy |
|--------|----------|
| Sleep | 7-8 hours, consistent schedule |
| Nutrition | Balanced meal, avoid heavy food |
| Arrival | 30 minutes early |
| Mindset | Positive, confident |

**In-Test State Management:**
- Monitor arousal level
- Use breaks strategically
- Reframe challenges positively
- Maintain present focus

**Recovery Techniques:**
| Situation | Technique |
|-----------|-----------|
| Rising anxiety | Deep breathing, muscle relaxation |
| Mental fatigue | Brief break, stretch, water |
| Frustration | Positive self-talk, skip and return |
| Time panic | Reassess strategy, prioritize |

## Specific Question Types

**"Next Best Step" Questions:**
- Consider safety first (ABCs)
- Stabilize before diagnose
- Most efficient diagnostic path
- Evidence-based management

**"Most Likely Diagnosis" Questions:**
- Key features point to answer
- Epidemiology matters
- Common things are common
- Don't ignore "can't miss" diagnoses

**Ethical/Legal Questions:**
- Patient autonomy primary
- Safety of patient and others
- Legal boundaries
- Standard of care

## Post-Test Analysis

**For Learning:**
- Review missed questions
- Identify error patterns
- Address knowledge gaps
- Refine test-taking strategy

**Performance Calibration:**
- Track predicted vs. actual scores
- Identify overconfidence patterns
- Adjust study based on data`,
      keyTerms: [
        { term: 'item discrimination', definition: 'The degree to which a test question differentiates between high and low performers' },
        { term: 'problem representation', definition: 'A mental summary of a patient case that captures key features for pattern matching' },
        { term: 'illness script', definition: 'A cognitive framework organizing knowledge about a disease for rapid diagnosis' },
        { term: 'Bayesian reasoning', definition: 'Updating probability estimates based on new evidence' },
        { term: 'cognitive load', definition: 'The mental effort required for information processing during test-taking' },
      ],
      analogies: [
        'Item discrimination is like a filter - good questions separate those who know from those who don\'t.',
        'Building a problem representation is like creating a thumbnail sketch before a detailed drawing.',
        'Bayesian reasoning is like a detective updating suspicions as new clues appear.',
        'Cognitive load is like RAM - limited capacity means you must manage what you\'re processing.',
      ],
      examples: [
        'A student generates "likely pneumonia" before looking at answer options, then finds "community-acquired pneumonia" as an option, building confidence in the selection.',
        'Recognizing increasing anxiety during a block, a student takes a scheduled break, does deep breathing, and returns with improved focus.',
      ],
      patientCounselingPoints: [
        'Test-taking strategies reflect clinical reasoning processes used in patient care',
        'The discipline of systematic thinking under pressure is essential for safe medical practice',
      ],
    },

    5: {
      level: 5,
      summary: 'Professional-level test-taking mastery synthesizes cognitive science, psychometrics, and performance psychology. Expert test-takers understand question design, manage cognitive resources strategically, and optimize performance states for maximal knowledge demonstration.',
      explanation: `## Professional Test Performance Optimization

Expert-level examination performance requires integration of cognitive science, psychometric understanding, and performance psychology.

## Advanced Psychometric Understanding

**Item Response Theory Application:**
- Item difficulty not fixed; depends on ability
- Measurement precision varies by ability level
- Adaptive testing implications
- Information function optimization

**Question Validation Process:**
| Phase | Activity |
|-------|----------|
| Development | Content expert item writing |
| Review | Editorial and peer review |
| Pilot testing | Psychometric analysis |
| Revision | Refine based on data |
| Operational | Use in scored exams |

## Cognitive Science Integration

**Dual-Process Theory:**
| System 1 | System 2 |
|----------|----------|
| Fast, intuitive | Slow, analytical |
| Pattern matching | Logical reasoning |
| First impressions | Deliberate analysis |
| Error-prone | Resource-intensive |

**Strategic System Deployment:**
- Easy questions: System 1 sufficient
- Complex questions: Engage System 2
- Verify System 1 intuitions
- Know when to trust each

**Working Memory Optimization:**
- Chunk information
- Use external aids (notes, diagrams)
- Reduce extraneous processing
- Focus on essential elements

## Expert Error Management

**Cognitive Bias Awareness:**
| Bias | Description | Countermeasure |
|------|-------------|----------------|
| Availability | Recent cases overweighted | Consider base rates |
| Representativeness | Prototype matching | Consider variants |
| Anchoring | First impression dominates | Actively reconsider |
| Confirmation | Seek supporting data | Look for contradictions |

**Metacognitive Monitoring:**
- Assess confidence calibration
- Recognize uncertainty sources
- Flag appropriately
- Adjust time allocation

## High-Stakes Performance Psychology

**Optimal Performance State:**
- Alertness without anxiety
- Confidence without complacency
- Focus without rigidity
- Persistence without perseveration

**State Induction Techniques:**
| Technique | Application |
|-----------|-------------|
| Pre-performance routine | Consistent preparation sequence |
| Arousal regulation | Breathing, relaxation |
| Attention control | Present-moment focus |
| Self-talk | Constructive internal dialogue |

**Performance Recovery:**
| Challenge | Response |
|-----------|----------|
| Difficult question streak | Reset, find easy win |
| Time pressure | Prioritize, guess strategically |
| Anxiety spike | Breathing, reframe |
| Fatigue | Strategic break, movement |

## Strategic Decision Framework

**Expected Value Calculation:**
- P(correct) × benefit of correct answer
- P(wrong) × cost of wrong answer
- Compare to skipping or guessing
- Inform time investment

**Satisficing vs. Maximizing:**
- Satisficing: Accept good-enough answer
- Maximizing: Optimize every question
- Satisficing often more efficient
- Know when maximizing is worth it

## Clinical Reasoning Integration

**Expert vs. Novice Differences:**
| Expert | Novice |
|--------|--------|
| Pattern recognition | Algorithm following |
| Efficient encoding | Verbose processing |
| Flexible schemas | Rigid rules |
| Automatic processing | Effortful processing |

**Illness Script Application:**
1. Recognize key features in stem
2. Activate relevant illness script
3. Compare findings to script
4. Select best matching diagnosis/treatment

## Test-Day Optimization

**Physical Preparation:**
- Sleep optimization (7-8 hours, consistent)
- Nutrition timing (avoid heavy meals)
- Caffeine management (consistent with practice)
- Hydration maintenance

**Mental Preparation:**
- Visualization of success
- Review of high-yield content (light)
- Confidence-building activities
- Anxiety management techniques

**Logistical Preparation:**
- Confirm test location
- Prepare materials
- Plan arrival time
- Backup plans for contingencies

## Continuous Improvement

**Performance Analysis:**
| Data | Insight |
|------|---------|
| Question accuracy | Knowledge gaps |
| Time patterns | Efficiency issues |
| Confidence calibration | Metacognitive accuracy |
| Error categorization | Pattern identification |

**Deliberate Practice:**
- Identify specific weaknesses
- Practice under test conditions
- Get feedback on performance
- Refine strategies iteratively`,
      keyTerms: [
        { term: 'Item Response Theory', definition: 'Psychometric framework where item performance is modeled as a function of latent ability' },
        { term: 'dual-process theory', definition: 'Cognitive framework distinguishing fast intuitive (System 1) from slow analytical (System 2) thinking' },
        { term: 'satisficing', definition: 'Decision strategy of selecting the first option that meets a threshold rather than optimizing' },
        { term: 'metacognitive monitoring', definition: 'Awareness and assessment of one\'s own cognitive processes during task performance' },
      ],
      clinicalNotes: `Expert perspective on test-taking:

1. **Knowledge Foundation:** Test-taking strategies cannot replace content knowledge. They optimize demonstration of what you know.

2. **Systematic Approach:** Develop and practice a consistent question approach. Under pressure, systematic methods prevent errors.

3. **Cognitive Awareness:** Recognize when you're using intuition vs. analysis. Know when to trust each and when to verify.

4. **Error Pattern Analysis:** Track and categorize errors. Systematic review reveals patterns that inform study and strategy.

5. **Performance State:** Optimal performance requires appropriate arousal. Practice managing your state under simulated test conditions.

6. **Time as Resource:** Time is finite. Allocate strategically based on question difficulty and your confidence.

7. **Confidence Calibration:** Most test-takers are overconfident. Use practice tests to calibrate your sense of certainty.

8. **Question Intent:** Understand what the question is testing. This helps identify the intended correct answer.

9. **Resilience:** Difficult questions and uncertain moments are inevitable. Practice recovery techniques to maintain performance.

10. **Continuous Improvement:** Use every exam as learning data. Systematic analysis of performance drives improvement.`,
    },
  },

  media: [
    {
      id: 'question-approach-flowchart',
      type: 'diagram',
      filename: 'question-approach-flowchart.svg',
      title: 'Systematic Question Approach',
      description: 'Flowchart for approaching exam questions systematically',
    },
    {
      id: 'time-management-diagram',
      type: 'diagram',
      filename: 'time-management-diagram.svg',
      title: 'Test Time Management Strategy',
      description: 'Visual guide to allocating time during examinations',
    },
  ],

  citations: [
    {
      id: 'test-anxiety-research',
      type: 'article',
      title: 'Test Anxiety: Contemporary Theories and Implications for Learning',
      source: 'Handbook of Competence and Motivation',
      accessedDate: '2025-01-28',
    },
    {
      id: 'answer-changing-research',
      type: 'article',
      title: 'Answer Changing on Multiple-Choice Tests',
      source: 'Journal of Experimental Education',
      accessedDate: '2025-01-28',
    },
  ],

  crossReferences: [
    { targetId: 'education-exam-anxiety', targetType: 'concept', relationship: 'related', label: 'Exam Anxiety Management' },
    { targetId: 'education-effective-study-methods', targetType: 'concept', relationship: 'related', label: 'Effective Study Methods' },
    { targetId: 'education-usmle-step1-overview', targetType: 'concept', relationship: 'related', label: 'USMLE Step 1 Overview' },
  ],

  tags: {
    systems: ['medical-education'],
    topics: ['test-taking', 'examination strategies', 'performance optimization', 'cognitive psychology'],
    keywords: ['test strategies', 'exam tips', 'multiple choice', 'time management', 'test anxiety'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export default testTakingStrategies;
