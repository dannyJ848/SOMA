/**
 * Question Banks - Strategic Practice for Medical Exams
 *
 * Educational content covering the use of question banks for exam preparation
 * and knowledge assessment in medical education.
 */

import { EducationalContent } from '../../types';

export const questionBanks: EducationalContent = {
  id: 'education-question-banks',
  type: 'concept',
  name: 'Question Banks',
  alternateNames: ['Qbank', 'Question Bank', 'Practice Questions', 'Test Bank'],

  levels: {
    1: {
      level: 1,
      summary: 'Question banks are large collections of practice test questions that help students prepare for medical exams. They are one of the most important study tools for medical students.',
      explanation: `## What Are Question Banks?

Question banks are big collections of practice questions that look like the questions on real medical exams. Students use them to practice and learn.

## Why Are Question Banks Important?

**They help you:**
- Practice answering exam-style questions
- Learn from detailed explanations
- Find out what topics you need to study more
- Get used to the exam format
- Test your knowledge

## Popular Question Banks

**For Medical Students:**
- UWorld - most popular, high quality
- Kaplan - good explanations
- NBME practice exams - from the test makers
- USMLE-Rx - ties to First Aid
- AMBOSS - modern interface

**How Many Questions Are There?**
- Small banks: 1,000-2,000 questions
- Large banks: 3,000-5,000+ questions
- Many students do 5,000-10,000+ questions total

## How to Use Question Banks

**Start Early:**
- Begin using questions from day one
- Do a few questions every day
- Build up your stamina

**Learn From Explanations:**
- Read all explanations, even for correct answers
- Understand why wrong answers are wrong
- Take notes on important points

**Track Your Progress:**
- See your percentage correct
- Find weak areas
- Watch your improvement over time

**Simulate Real Exams:**
- Do timed practice tests
- Use exam-like conditions
- Build test-taking stamina

## Tips for Success

1. Do questions every day
2. Review all explanations
3. Focus on understanding, not just memorizing
4. Use questions to guide your studying
5. Mix topics rather than doing one at a time`,
      keyTerms: [
        { term: 'question bank', definition: 'A collection of practice test questions used to prepare for exams' },
        { term: 'UWorld', definition: 'The most popular question bank for USMLE preparation' },
        { term: 'explanation', definition: 'The detailed teaching that follows a question, explaining why answers are right or wrong' },
        { term: 'timed mode', definition: 'Answering questions with a time limit to simulate real exam conditions' },
      ],
      analogies: [
        'Question banks are like practicing with old game footage - you see what the real competition looks like.',
        'Using a question bank is like doing practice games before the championship - you get experience in conditions like the real event.',
      ],
      examples: [
        'A medical student does 40 UWorld questions every morning, reading all explanations carefully.',
        'A student uses question bank performance to identify they are weak in cardiology, then focuses their studying there.',
      ],
      patientCounselingPoints: [
        'Medical students practice with thousands of questions to prepare for caring for patients',
        'Question banks help doctors learn to think through complex medical problems',
      ],
    },

    2: {
      level: 2,
      summary: 'Question banks provide realistic exam practice with detailed explanations that enhance learning. Strategic use involves daily practice, thorough explanation review, performance analysis, and integration with content review to optimize exam preparation.',
      explanation: `## Question Bank Fundamentals

Question banks are essential tools for medical exam preparation, providing authentic practice questions with comprehensive educational content.

## Major Question Bank Options

| Bank | Strengths | Best For |
|------|-----------|----------|
| UWorld | Quality, explanations | Primary preparation |
| Kaplan | Content review integrated | Learning foundations |
| AMBOSS | Technology, library | Integrated studying |
| USMLE-Rx | First Aid integration | Early studying |
| NBME | Authentic practice | Assessment |

## Question Bank Features

**Question Characteristics:**
- Clinical vignette format
- Single best answer (most common)
- Multiple correct (select all that apply)
- Sequential item sets
- Multimedia (images, audio)

**Explanation Components:**
- Correct answer rationale
- Why other options are wrong
- Teaching points
- References to textbooks
- Related concepts

**Performance Analytics:**
- Overall percentage
- Performance by subject
- Progress over time
- Comparison to peers
- Time per question

## Strategic Use Methods

**Tutor Mode vs. Timed Mode:**
| Mode | Use Case |
|------|----------|
| Tutor | Learning phase |
| Timed | Assessment phase |
| Mixed | Combination approach |

**Study Approaches:**
1. **Systems-based:** Focus on one subject
2. **Random:** Mix all subjects
3. **Unused:** New questions only
4. **Incorrect:** Review missed questions
5. **Marked:** Flagged for review

**Daily Routine:**
- Set question target (20-100/day)
- Maintain consistent schedule
- Review all explanations
- Take notes on errors
- Track weak areas

## Learning Optimization

**Explanation Review Strategy:**
- Read entire explanation
- Understand why correct
- Learn from wrong options
- Note high-yield points
- Connect to prior knowledge

**Error Analysis:**
| Error Type | Response |
|------------|----------|
| Knowledge gap | Study topic |
| Misreading | Slow down |
| Second-guessing | Trust first instinct |
| Careless | Improve focus |

**Integration with Content:**
- Use errors to guide reading
- Cross-reference textbooks
- Create summary notes
- Build mental frameworks

## Progress Tracking

**Metrics to Monitor:**
- Percent correct (target: >65% for Step 1)
- Questions completed
- Time per question
- Subject performance
- Improvement trend

**Benchmarking:**
- Compare to national averages
- Track percentile rank
- Monitor readiness
- Identify problem areas`,
      keyTerms: [
        { term: 'clinical vignette', definition: 'A detailed patient case description used as the basis for exam questions' },
        { term: 'tutor mode', definition: 'Question bank mode showing explanations immediately after answering' },
        { term: 'timed mode', definition: 'Question bank mode simulating exam timing conditions' },
        { term: 'sequential item sets', definition: 'Related questions that must be answered in order about a single case' },
      ],
      analogies: [
        'A question bank is like a flight simulator - you practice in realistic conditions before the real flight.',
        'Question bank explanations are like having a tutor who explains every answer in detail, helping you learn from each question.',
      ],
      examples: [
        'A student maintains a spreadsheet tracking UWorld performance by system, watching cardiology improve from 55% to 75% over 6 weeks.',
        'A student in dedicated study does 80 UWorld questions daily in timed mode to build stamina for the 8-hour exam.',
      ],
      patientCounselingPoints: [
        'Question banks help medical students practice clinical reasoning on thousands of cases',
        'Detailed explanations in question banks help students learn from both correct and incorrect answers',
      ],
    },

    3: {
      level: 3,
      summary: 'Question banks serve dual purposes: exam simulation and active learning. Optimal use requires understanding question construction, explanation architecture, and performance analytics while implementing systematic review strategies and targeted remediation.',
      explanation: `## Question Bank Science and Application

Question banks function as both assessment tools and learning platforms, requiring strategic implementation for maximum benefit.

## Question Construction Understanding

**USMLE-Style Question Anatomy:**

**Vignette Components:**
1. **Lead-in:** Patient demographics, chief complaint
2. **History:** Present illness, past medical history
3. **Physical:** Key examination findings
4. **Data:** Labs, imaging, other studies
5. **Question:** What is being asked?

**Question Types:**
| Type | Structure | Strategy |
|------|-----------|----------|
| Most likely diagnosis | Presentation given | Pattern recognition |
| Next best step | Initial workup | Risk stratification |
| Best initial test | Diagnostic approach | Screening vs confirmatory |
| Most accurate test | Definitive diagnosis | Gold standard tests |
| Best treatment | Management | Evidence-based guidelines |
| Mechanism | Pathophysiology | Basic science linkage |

**Distractor Design:**
- Common errors (most dangerous)
- Related conditions
- Partially correct options
- True but irrelevant statements

## Explanation Architecture

**High-Quality Explanation Elements:**
1. **Direct answer:** Clear statement of correct choice
2. **Mechanism:** Why this is correct
3. **Distractor analysis:** Why others are wrong
4. **Clinical context:** Real-world application
5. **Related concepts:** Broader learning
6. **References:** Supporting evidence

**Information Extraction:**
- Core concept
- Clinical pearl
- Common pitfalls
- Related topics to review

## Performance Analytics Deep Dive

**Statistical Measures:**
| Metric | Interpretation |
|--------|----------------|
| Percent correct | Overall performance |
| Percentile | Comparison to peers |
| Trend line | Improvement over time |
| Subject breakdown | Content strengths/weaknesses |
| Time analysis | Pacing efficiency |

**Predictive Value:**
- First pass UWorld: Strong predictor of Step 1 score
- Subject performance: Identifies remediation needs
- Trend trajectory: Indicates readiness

## Systematic Implementation

**Phased Approach:**

**Foundation Phase:**
- Tutor mode
- Systems-based
- Focus on learning
- 20-40 questions/day
- Detailed notes

**Integration Phase:**
- Mixed random mode
- Timed blocks
- Building stamina
- 40-80 questions/day
- Error log analysis

**Assessment Phase:**
- Timed blocks
- Unused questions
- Simulating exam
- 60-100 questions/day
- Final review

**Remediation Phase:**
- Incorrect questions
- Weak subjects
- Flashcard creation
- Targeted reading

## Advanced Strategies

**Spaced Repetition Integration:**
- Create cards from missed questions
- Include question ID for reference
- Review at optimal intervals
- Track repeat performance

**Interleaving:**
- Mix subjects
- Mix question types
- Improve discrimination
- Enhance transfer

**Elaboration:**
- Self-explanation of answers
- Connection to prior knowledge
- Clinical application
- Teaching others

## Quality Indicators

**Good Question Bank Characteristics:**
- Content aligned to exam
- Detailed explanations
- Regular updates
- Performance analytics
- User-friendly interface

**Red Flags:**
- Outdated content
- Poor explanations
- Typos/errors
- No performance tracking
- Unrealistic difficulty`,
      keyTerms: [
        { term: 'distractor', definition: 'Incorrect answer options designed to challenge test-takers who have incomplete knowledge' },
        { term: 'gold standard test', definition: 'The most accurate diagnostic test for a condition, though not always the first test ordered' },
        { term: 'first pass', definition: 'The initial completion of all questions in a question bank before repeat attempts' },
        { term: 'interleaving', definition: 'Mixing different topics or question types during practice rather than blocking' },
      ],
      analogies: [
        'Understanding distractor design is like knowing magic tricks - once you see how they work, you are less likely to be fooled.',
        'Question bank analytics are like a GPS for your studying - they show where you are and guide you to your destination.',
      ],
      examples: [
        'A student analyzes their UWorld performance and sees 45% in biochemistry vs 75% in physiology, directing focused biochemistry review.',
        'A student uses the UWorld notebook feature to create flashcards directly from question explanations.',
      ],
      patientCounselingPoints: [
        'Question banks use authentic clinical scenarios to teach medical decision-making',
        'Analyzing performance helps identify areas where additional study is needed',
      ],
    },

    4: {
      level: 4,
      summary: 'Advanced question bank mastery involves understanding psychometric principles, optimizing learning from explanations, and using analytics for targeted improvement. Expert users integrate question banks with comprehensive study systems while avoiding common pitfalls.',
      explanation: `## Advanced Question Bank Concepts

Expert use of question banks requires understanding exam construction principles, optimizing learning efficiency, and integrating with broader study strategies.

## Psychometric Foundations

**Item Response Theory (IRT):**
- Question difficulty calibration
- Ability estimation
- Adaptive testing potential
- Performance prediction

**Question Quality Metrics:**
| Metric | Target | Interpretation |
|--------|--------|----------------|
| Difficulty | 0.30-0.70 | Discriminates ability |
| Discrimination | >0.30 | Identifies knowledge levels |
| Distractor selection | Even distribution | Functional distractors |

**Exam Blueprint Alignment:**
- Content distribution matching
- Question type proportions
- Difficulty progression
- Topic coverage verification

## Explanation Learning Optimization

**Active Processing Strategies:**

**Elaborative Interrogation:**
- Why is this correct?
- How does this connect to...?
- What if the case were different?
- When would this not apply?

**Self-Explanation:**
- Explain in your own words
- Connect to prior knowledge
- Generate examples
- Predict related concepts

**Error Analysis Framework:**
| Error Type | Analysis | Action |
|------------|----------|--------|
| Knowledge deficit | What don\'t I know? | Study topic |
| Application failure | Couldn\'t apply knowledge | Practice problems |
| Reading error | Misread question | Slow down, highlight |
| Test strategy | Poor approach | Learn technique |
| Careless mistake | Inattention | Focus techniques |

## Analytics-Driven Improvement

**Performance Pattern Recognition:**
- Consistent error types
- Subject-specific weaknesses
- Time pressure effects
- Fatigue patterns

**Targeted Remediation:**
1. Identify weak subjects
2. Calculate improvement potential
3. Allocate study time
4. Monitor progress
5. Adjust strategy

**Efficiency Analysis:**
| Factor | Optimization |
|--------|--------------|
| Time per question | Speed vs accuracy balance |
| Review time | Quality vs quantity |
| Repeat questions | Value of second pass |
| New vs review | Learning vs retention |

## Integration with Study System

**Content Review Coordination:**
- Use questions to identify gaps
- Read to fill identified gaps
- Re-test understanding
- Build comprehensive notes

**Spaced Repetition Synchronization:**
- Create cards from explanations
- Include question context
- Reference back to bank
- Track retention

**Note-Taking Systems:**
- Error log with analysis
- High-yield concept summaries
- Subject-specific notes
- Quick reference guides

## Common Pitfalls

**Quantity Over Quality:**
- Rushing through questions
- Skimming explanations
- Prioritizing number completed over understanding

**Passive Review:**
- Re-reading without active processing
- Not creating notes
- Failing to integrate knowledge

**Over-reliance:**
- Questions without foundation
- Neglecting content review
- Pattern matching without understanding

**Ignoring Analytics:**
- Not tracking weak areas
- Missing patterns
- Wasting time on strong subjects

## Simulation Strategies

**Full-Length Simulation:**
- Match exam conditions
- Build stamina
- Practice pacing
- Reduce anxiety

**Block Simulation:**
- 40-question blocks
- Timed conditions
- Review patterns
- Build endurance

**Targeted Simulation:**
- Weak subject focus
- Question type practice
- Time pressure training
- Anxiety management`,
      keyTerms: [
        { term: 'item response theory', definition: 'A statistical framework for evaluating test questions and estimating test-taker ability' },
        { term: 'discrimination index', definition: 'A measure of how well a question distinguishes between high and low performers' },
        { term: 'adaptive testing', definition: 'Testing that adjusts question difficulty based on previous responses' },
        { term: 'elaborative interrogation', definition: 'Asking "why" questions to deepen understanding and improve memory' },
      ],
      analogies: [
        'IRT is like a smart scale that not only weighs you but also calibrates itself based on previous measurements.',
        'Active processing of explanations is like digesting food - chewing thoroughly extracts more nutrients than swallowing whole.',
      ],
      examples: [
        'A student notices they consistently miss "next best step" questions and does focused practice on that question type.',
        'A student creates a spreadsheet analyzing every incorrect UWorld answer by error type, revealing they misread 30% of questions.',
      ],
      patientCounselingPoints: [
        'High-quality question banks undergo rigorous development to ensure they teach accurate, current medical information',
        'Analyzing why answers are wrong helps prevent similar errors in actual patient care',
      ],
    },

    5: {
      level: 5,
      summary: 'Professional mastery of question banks encompasses understanding assessment science, designing optimal learning workflows, and contributing to educational quality. Expert practitioners use question banks as both diagnostic and therapeutic educational tools while mentoring others in evidence-based test preparation.',
      explanation: `## Professional Question Bank Framework

Expert-level question bank use integrates assessment science, learning theory, and practical implementation to optimize medical education outcomes.

## Assessment Science

**Test Construction Principles:**
| Principle | Application |
|-----------|-------------|
| Content validity | Blueprint alignment |
| Construct validity | Measures intended knowledge |
| Reliability | Consistent measurement |
| Standard setting | Appropriate difficulty |

**Question Development Process:**
1. Content specification
2. Item writing by experts
3. Review and revision
4. Pilot testing
5. Psychometric analysis
6. Standard setting
7. Maintenance and updates

**Adaptive Testing Technology:**
- Computerized adaptive testing (CAT)
- Item selection algorithms
- Ability estimation
- Precision optimization

## Learning Science Integration

**Testing Effect Maximization:**
- Retrieval practice through questions
- Feedback timing optimization
- Spacing implementation
- Interleaving strategies

**Desirable Difficulties:**
| Technique | Mechanism | Implementation |
|-----------|-----------|----------------|
| Testing vs restudying | Retrieval effort | Prioritize questions |
| Interleaving | Discrimination | Mix subjects |
| Spacing | Consolidation | Distributed practice |
| Generation | Deep processing | Self-explanation |

**Metacognitive Calibration:**
- Confidence judgments
- Performance monitoring
- Error recognition
- Strategy adjustment

## Optimal Workflow Design

**Individualized Protocols:**

**Pre-Dedicated Phase:**
- Systems-based tutor mode
- Foundation building
- Note creation
- Pattern exposure

**Dedicated Phase:**
- Random mixed mode
- Timed blocks
- Stamina building
- Weakness targeting

**Final Phase:**
- Full simulation
- Error review
- High-yield focus
- Confidence building

**Analytics-Driven Personalization:**
- Performance pattern analysis
- Study time allocation
- Content prioritization
- Progress monitoring

## Educational Quality

**Question Bank Evaluation:**
| Criterion | Assessment |
|-----------|------------|
| Content accuracy | Expert review |
| Explanation quality | Educational value |
| Interface usability | User experience |
| Analytics depth | Actionable insights |
| Update frequency | Currency |

**Contribution Opportunities:**
- Item writing
- Explanation improvement
- Error reporting
- Feature suggestions
- Beta testing

## Teaching and Mentoring

**Student Guidance:**
| Stage | Focus |
|-------|-------|
| Beginning | Bank selection, basic use |
| Developing | Strategy optimization |
| Advanced | Analytics use, efficiency |
| Expert | Mentoring others |

**Common Misconceptions:**
- "More questions = better" (quality matters)
- "Percent correct = readiness" (trend matters more)
- "Finish the bank once" (mastery requires review)
- "Memorize questions" (understand concepts)

**Curriculum Integration:**
- Formative assessment
- Learning progress tracking
- Remediation targeting
- Competency demonstration

## Technology and Innovation

**Current Developments:**
- AI-powered explanations
- Personalized learning paths
- Predictive analytics
- Virtual patient simulations

**Future Directions:**
| Area | Innovation |
|------|------------|
| Adaptive | Real-time difficulty adjustment |
| Immersive | VR case simulations |
| Social | Collaborative learning |
| Data | Learning analytics |

## Professional Application

**Lifelong Learning:**
- Board recertification preparation
- Knowledge updating
- New specialty preparation
- Teaching tool

**Clinical Reasoning:**
- Diagnostic calibration
- Decision-making practice
- Error pattern recognition
- Uncertainty management

**Educational Leadership:**
- Curriculum design
- Assessment development
- Faculty development
- Quality improvement`,
      keyTerms: [
        { term: 'computerized adaptive testing', definition: 'Testing where question difficulty adjusts based on the test-taker\'s responses' },
        { term: 'content validity', definition: 'The extent to which a test covers the intended content domain' },
        { term: 'construct validity', definition: 'Whether a test measures the theoretical construct it claims to measure' },
        { term: 'standard setting', definition: 'The process of determining the passing score for an examination' },
      ],
      clinicalNotes: `Expert perspective on question banks:

1. **Foundation of Preparation:** Question banks are the single most important resource for exam preparation. No other resource provides equivalent practice with exam-style thinking.

2. **Quality Over Quantity:** Completing 2,000 questions with deep understanding beats 5,000 questions with superficial review. The depth of explanation processing determines learning.

3. **Explanation is Everything:** The value lies in explanations, not questions. Every explanation should be read completely, even for correct answers.

4. **Analytics Guide Study:** Use performance data diagnostically. Weak subjects get more study time; strong subjects get maintenance only.

5. **Simulation Matters:** Practice under exam conditions builds stamina and reduces anxiety. Full-length simulations are essential preparation.

6. **Error Analysis:** Maintain detailed error logs. Patterns reveal systematic issues (reading errors, knowledge gaps, strategy problems) that general study will not fix.

7. **Integration Required:** Question banks work best when integrated with content review, spaced repetition, and other study methods. Isolated use is insufficient.

8. **Bank Selection:** Choose based on explanation quality and content accuracy. Interface matters less than educational value.

9. **Second Pass Value:** Reviewing incorrect questions has high yield. Many students benefit from a second pass through the entire bank.

10. **Clinical Transfer:** Question bank skills transfer to clinical reasoning. The pattern recognition and decision-making practice directly benefits patient care.`,
    },
  },

  media: [
    {
      id: 'question-bank-analytics',
      type: 'diagram',
      filename: 'question-bank-analytics.svg',
      title: 'Question Bank Performance Dashboard',
      description: 'Sample analytics showing performance by subject and over time',
    },
    {
      id: 'question-anatomy',
      type: 'diagram',
      filename: 'question-anatomy.svg',
      title: 'USMLE Question Anatomy',
      description: 'Breakdown of components in a typical USMLE-style question',
    },
  ],

  citations: [
    {
      id: 'uworld-effectiveness',
      type: 'website',
      title: 'UWorld Medical',
      source: 'UWorld',
      url: 'https://www.uworld.com',
      accessedDate: '2025-01-28',
    },
    {
      id: 'nbme-practice',
      type: 'website',
      title: 'NBME Self-Assessments',
      source: 'National Board of Medical Examiners',
      url: 'https://www.nbme.org',
      accessedDate: '2025-01-28',
    },
  ],

  crossReferences: [
    { targetId: 'education-active-recall', targetType: 'concept', relationship: 'related', label: 'Active Recall' },
    { targetId: 'education-spaced-repetition', targetType: 'concept', relationship: 'related', label: 'Spaced Repetition' },
    { targetId: 'education-effective-study-methods', targetType: 'concept', relationship: 'parent', label: 'Effective Study Methods' },
  ],

  tags: {
    systems: ['medical-education'],
    topics: ['question banks', 'exam preparation', 'practice questions', 'test preparation'],
    keywords: ['question bank', 'Qbank', 'UWorld', 'practice questions', 'test prep'],
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

export default questionBanks;
