/**
 * Question Analysis - Strategic Approach to Exam Questions
 *
 * Educational content covering systematic question analysis techniques
 * for medical examinations.
 */

import { EducationalContent } from '../../types';

export const questionAnalysis: EducationalContent = {
  id: 'education-question-analysis',
  type: 'concept',
  name: 'Question Analysis',
  alternateNames: ['Question Deconstruction', 'Test Item Analysis', 'Question Strategy', 'Exam Analysis'],

  levels: {
    1: {
      level: 1,
      summary: 'Question analysis is a way to carefully read and understand test questions before answering. It helps you figure out what the question is really asking and choose the best answer.',
      explanation: `## What Is Question Analysis?

Question analysis means breaking down a test question to understand what it is asking before you try to answer it. This helps you avoid mistakes and pick the right answer.

## Why Is Question Analysis Important?

Sometimes test questions are tricky:
- They might have extra information you do not need
- They might try to trick you with similar-sounding answers
- They might ask for something specific
- If you read too fast, you might miss important words

## The Steps of Question Analysis

**Step 1: Read the Last Line First**
- This tells you what the question is asking
- It might say "What is the most likely diagnosis?" or "What is the next best step?"
- Knowing this helps you focus on the right information

**Step 2: Read the Whole Question**
- Read carefully, not quickly
- Look for key words and numbers
- Notice any pictures or diagrams

**Step 3: Identify Important Information:**
- Patient age and gender
- Main symptoms
- Important test results
- Timeline of events

**Step 4: Figure Out What You Need:**
- What is the question really asking?
- What do you need to know to answer?

**Step 5: Look at Each Answer:**
- Read all choices before picking one
- Eliminate answers that are clearly wrong
- Choose the best answer, not just a good one

## Common Question Words

- "Most likely" - what is the probable answer
- "Next best step" - what should you do now
- "Best initial test" - first test to order
- "Most accurate test" - gold standard
- "Best treatment" - most effective therapy

## Tips for Success

1. Do not rush - take time to understand
2. Watch for words like "EXCEPT" or "NOT"
3. Use the process of elimination
4. Do not change your first answer without good reason
5. If unsure, make your best guess`,
      keyTerms: [
        { term: 'question analysis', definition: 'The process of carefully reading and understanding a test question before answering' },
        { term: 'stem', definition: 'The main part of a question that presents the information and asks the question' },
        { term: 'distractor', definition: 'Wrong answer choices designed to look correct' },
        { term: 'process of elimination', definition: 'Removing wrong answers to narrow down choices' },
      ],
      analogies: [
        'Question analysis is like reading a recipe carefully before cooking - you need to know what you are making before you start.',
        'It is like being a detective - you need to find the clues in the question to solve the mystery.',
      ],
      examples: [
        'A question describes a patient with chest pain. Reading the last line first tells you it is asking for the "most likely diagnosis."',
        'The question says "EXCEPT" - this means three answers are correct and one is wrong; you need to find the wrong one.',
      ],
      patientCounselingPoints: [
        'Taking time to understand questions helps doctors make better clinical decisions',
        'Careful analysis of information is a key skill in medical practice',
      ],
    },

    2: {
      level: 2,
      summary: 'Question analysis involves systematic deconstruction of test items to identify key information, understand what is being asked, and apply clinical reasoning. Strategic approaches improve accuracy and efficiency on medical examinations.',
      explanation: `## Question Analysis Fundamentals

Effective question analysis requires systematic reading, pattern recognition, and strategic decision-making to optimize performance on medical examinations.

## USMLE Question Structure

**Clinical Vignette Components:**
| Element | Information Provided | What to Look For |
|---------|---------------------|------------------|
| Demographics | Age, gender, occupation | Risk factors |
| Chief complaint | Presenting symptom | Focus of question |
| History | Present illness, past medical | Clues to diagnosis |
| Physical exam | Vital signs, findings | Confirmatory signs |
| Studies | Labs, imaging, tests | Diagnostic data |
| Question stem | What is being asked | Task to perform |

**Question Types:**
| Type | Key Words | Strategy |
|------|-----------|----------|
| Diagnosis | Most likely diagnosis | Pattern recognition |
| Next step | Next best step, initial test | Prioritization |
| Management | Best treatment, therapy | Evidence-based |
| Mechanism | Explanation for | Pathophysiology |
| Prognosis | Most likely outcome | Natural history |

## Systematic Analysis Approach

**Read Last Line First (RLLF):**
- Identifies the task
- Focuses reading
- Prevents misinterpretation
- Saves time

**Information Extraction:**
| Priority | Data Points |
|----------|-------------|
| Critical | Age, key symptoms, red flags |
| Important | Timeline, risk factors, labs |
| Supporting | Social history, family history |
| Distracting | Normal findings, irrelevant details |

**Pattern Recognition:**
- Classic presentations
- Disease associations
- Risk factor clusters
- Syndrome patterns

## Strategic Answering

**Process of Elimination:**
| Stage | Action |
|-------|--------|
| 1 | Eliminate clearly wrong answers |
| 2 | Compare remaining options |
| 3 | Identify best match |
| 4 | Confirm with stem |

**Common Distractor Patterns:**
| Type | Example | Strategy |
|------|---------|----------|
| True but irrelevant | Correct fact, wrong context | Check relevance |
| Partially correct | Missing key element | Verify completeness |
| Opposite of correct | Wrong direction | Watch for reversals |
| Common but wrong | Popular misconception | Verify with knowledge |
| Extreme language | Always, never | Be skeptical |

**Answer Selection Criteria:**
- Most likely (probability)
- Most appropriate (clinical judgment)
- Best evidence (guidelines)
- Least harmful (safety)

## Common Traps

**Reading Errors:**
| Error | Prevention |
|-------|------------|
| Skipping negative words | Read carefully for EXCEPT, NOT |
| Ignoring age/sex | Note demographics first |
| Missing timeline | Check acute vs chronic |
| Overlooking labs | Review all data provided |

**Cognitive Traps:**
| Trap | Description | Solution |
|------|-------------|----------|
| Anchoring | Fixation on first impression | Consider alternatives |
| Availability | Recent cases bias | Base rates matter |
| Premature closure | Stopping analysis too soon | Complete workup mentally |
| Representativeness | Stereotyping | Individual variation |

**Test-Taking Pitfalls:**
| Pitfall | Correction |
|---------|------------|
| Changing answers | Change only if sure |
| Second-guessing | Trust preparation |
| Pattern seeking | No pattern to answers |
| Time mismanagement | Pace appropriately |

## Practice Strategies

**Question Bank Analysis:**
| Step | Action |
|------|--------|
| Attempt | Answer using technique |
| Review | Analyze correct and incorrect |
| Learn | Identify knowledge gaps |
| Pattern | Track error types |

**Error Log:**
| Category | Examples |
|----------|----------|
| Knowledge gap | Did not know fact |
| Misreading | Missed key word |
| Overthinking | Added complexity |
| Careless | Simple error |

## Time Management

**Per-Question Timing:**
| Phase | Time |
|-------|------|
| Read and analyze | 45-60 seconds |
| Answer selection | 15-30 seconds |
| Review (flagged) | Variable |

**Block Strategy:**
| Action | Implementation |
|--------|----------------|
| Preview | Quick scan of block |
| Work through | Answer sequentially |
| Flag uncertain | For later review |
| Review | Check flagged questions |`,
      keyTerms: [
        { term: 'clinical vignette', definition: 'A detailed patient case description used as the basis for exam questions' },
        { term: 'pattern recognition', definition: 'Identifying diseases based on characteristic presentations' },
        { term: 'anchoring bias', definition: 'Relying too heavily on the first piece of information encountered' },
        { term: 'gold standard test', definition: 'The most accurate diagnostic test for a condition' },
      ],
      analogies: [
        'Reading the last line first is like reading the title of a book - it tells you what the story is about.',
        'Distractors are like decoys used by hunters - they look real but are designed to trick you.',
      ],
      examples: [
        'A question about chest pain might have "pulmonary embolism" as a distractor when the answer is actually "costochondritis" based on the specific findings.',
        'Recognizing the pattern of "young woman + irregular periods + obesity + hirsutism" suggests PCOS without needing extensive analysis.',
      ],
      patientCounselingPoints: [
        'Systematic analysis of clinical information helps doctors avoid diagnostic errors',
        'Question analysis skills translate to careful clinical decision-making',
      ],
    },

    3: {
      level: 3,
      summary: 'Advanced question analysis requires understanding item construction, recognizing common patterns, and applying probabilistic reasoning. Strategic approaches include systematic reading, distractor analysis, and metacognitive monitoring during examinations.',
      explanation: `## Comprehensive Question Analysis Framework

Mastery of question analysis involves understanding how test items are constructed, recognizing common patterns, and applying systematic approaches to maximize performance.

## Item Construction Principles

**Psychometric Foundations:**
| Element | Purpose |
|---------|---------|
| Stem | Present clinical scenario |
| Lead-in | Pose specific question |
| Key | Correct answer |
| Distractors | Plausible alternatives |

**Distractor Design:**
| Type | Purpose | Example |
|------|---------|---------|
| Common error | Tests misconception | Wrong calculation |
| Related condition | Tests differential | Similar disease |
| Partial knowledge | Tests depth | Incomplete answer |
| Opposite | Tests direction | Reversed physiology |

**Difficulty Factors:**
| Factor | Impact |
|--------|--------|
| Content complexity | Rare vs common disease |
| Stem length | More information to process |
| Distractor plausibility | Harder to eliminate |
| Vocabulary | Technical language |

## Systematic Analysis Method

**The FIFE Approach:**
| Step | Action | Time |
|------|--------|------|
| F | Focus: Read last line | 5 sec |
| I | Identify: Key information | 20 sec |
| F | Filter: Relevant vs irrelevant | 15 sec |
| E | Evaluate: Answer choices | 30 sec |

**Information Prioritization:**
| Priority | Data | Rationale |
|----------|------|-----------|
| 1 | Age, gender | Prevalence, risk |
| 2 | Chief complaint | Diagnostic direction |
| 3 | Key findings | Discriminating features |
| 4 | Labs/studies | Confirmatory data |
| 5 | Background | Context, risk factors |

**Differential Generation:**
1. Identify key features
2. Generate possibilities
3. Match to answer choices
4. Select best fit

## Question Type Strategies

**Diagnosis Questions:**
| Approach | Implementation |
|----------|----------------|
| Pattern match | Recognize classic presentation |
| Probability | Most likely given presentation |
| Rule out | Eliminate less likely |
| Confirm | Best supporting evidence |

**Next Step Questions:**
| Framework | Questions |
|-----------|-----------|
| Safety | Is patient unstable? |
| Diagnosis | Do we know the diagnosis? |
| Severity | How serious is this? |
| Evidence | What does guideline say? |

**Treatment Questions:**
| Consideration | Action |
|---------------|--------|
| First-line | Initial therapy |
| Most effective | Evidence-based |
| Patient factors | Comorbidities, preferences |
| Safety | Contraindications |

**Laboratory Questions:**
| Type | Strategy |
|------|----------|
| Best initial | Screening, high-yield |
| Most accurate | Gold standard |
| Follow-up | Monitoring response |
| Next best | Based on prior results |

## Cognitive Strategies

**Metacognitive Monitoring:**
| Checkpoint | Question |
|------------|----------|
| During reading | Do I understand the scenario? |
| After analysis | What is my confidence level? |
| Before answering | Have I considered all options? |
| After selection | Does my answer make sense? |

**Confidence Calibration:**
| Level | Action |
|-------|--------|
| High confidence | Select and move on |
| Moderate | Consider alternatives briefly |
| Low | Flag for review, guess if needed |

**Decision Frameworks:**
| Scenario | Framework |
|----------|-----------|
| Acute presentation | ABCs, rule out life threats |
| Chronic condition | Most likely, then best test |
| Abnormal labs | Pattern recognition |
| Imaging | Anatomy, pathology correlation |

## Error Prevention

**Reading Strategies:**
| Technique | Purpose |
|-----------|---------|
| Underline key words | Emphasize critical info |
| Margin notes | Brief summaries |
| Slow reading | Prevent skipping |
| Reread lead-in | Confirm understanding |

**Verification Steps:**
| Check | Purpose |
|-------|---------|
| Age/gender | Correct patient population |
| Timeframe | Acute vs chronic |
| Key findings | Present and consistent |
| Answer match | Addresses question asked |

## Pattern Recognition

**High-Yield Patterns:**
| Pattern | Diagnosis |
|---------|-----------|
| Young woman + pleuritic chest pain + OCPs | PE |
| Elderly + vision loss + jaw claudication | Giant cell arteritis |
| Alcoholic + confusion + ophthalmoplegia | Wernicke |
| Post-MI + hypotension + JVD | Cardiac tamponade |

**Red Flag Clusters:**
| Flags | Action |
|-------|--------|
| Unstable vital signs | Resuscitate first |
| Acute neurologic deficit | Emergent imaging |
| Severe pain | Analgesia, diagnosis |
| Altered mental status | Workup for cause |

## Practice and Improvement

**Deliberate Practice:**
| Activity | Purpose |
|----------|---------|
| Timed blocks | Speed development |
| Error analysis | Identify weaknesses |
| Topic focus | Content improvement |
| Mixed practice | Discrimination |

**Performance Tracking:**
| Metric | Interpretation |
|--------|----------------|
| Accuracy by subject | Knowledge gaps |
| Time per question | Efficiency |
| Error patterns | Technique issues |
| Improvement trend | Progress |

**Remediation Strategies:**
| Issue | Solution |
|-------|----------|
| Slow reading | Timed practice |
| Misreading | Active reading techniques |
| Knowledge gaps | Targeted study |
| Test anxiety | Practice, preparation |`,
      keyTerms: [
        { term: 'test wiseness', definition: 'The ability to use test-taking strategies to perform well on examinations' },
        { term: 'metacognition', definition: 'Awareness and understanding of one\'s own thought processes' },
        { term: 'confidence calibration', definition: 'The accuracy of one\'s confidence judgments relative to actual performance' },
        { term: 'deliberate practice', definition: 'Focused, structured practice with specific goals and feedback' },
      ],
      analogies: [
        'Test item analysis is like reverse-engineering a puzzle - understanding how it was made helps you solve it.',
        'Metacognitive monitoring is like having a co-pilot - someone watching your thinking to catch errors.',
      ],
      examples: [
        'A question about "best initial test" for suspected PE uses pretest probability - D-dimer for low probability, CT angiography for high.',
        'Pattern recognition allows immediate identification of "chest pain + ST elevation" as STEMI before reading the entire vignette.',
      ],
      patientCounselingPoints: [
        'Systematic approaches to clinical problems help ensure important factors are not overlooked',
        'Pattern recognition combined with careful analysis leads to accurate diagnoses',
      ],
    },

    4: {
      level: 4,
      summary: 'Advanced question analysis expertise requires understanding psychometric principles, sophisticated distractor analysis, and rapid clinical reasoning. Expert test-takers combine pattern recognition with analytical approaches while managing cognitive biases and time pressure.',
      explanation: `## Advanced Question Analysis Concepts

Professional-level question analysis mastery requires sophisticated understanding of item construction, advanced reasoning strategies, and expert metacognitive control.

## Psychometric Sophistication

**Item Response Theory:**
| Concept | Application |
|---------|-------------|
| Item difficulty | Probability correct at given ability |
| Discrimination | Distinguishes high vs low performers |
| Guessing parameter | Probability of correct guess |
| Information function | Precision at ability levels |

**Item Analysis Metrics:**
| Statistic | Interpretation |
|-----------|----------------|
| P-value | Difficulty (% correct) |
| Point-biserial | Discrimination |
| Distractor analysis | Option functioning |
| Differential item functioning | Bias detection |

**Adaptive Testing:**
| Feature | Impact on Strategy |
|---------|-------------------|
| Item selection | Based on prior performance |
| Ability estimation | Continuous updating |
| Precision targeting | Question difficulty adjusts |
| Test length | Variable, precision-based |

## Sophisticated Distractor Analysis

**Distractor Taxonomy:**
| Category | Mechanism | Example |
|----------|-----------|---------|
| Association | Related but incorrect | Similar drug name |
| Extension | Taking fact too far | Overapplication |
| Omission | Missing critical element | Incomplete criteria |
| Reversal | Opposite of correct | Wrong direction |
| Similarity | Looks/sounds correct | Confusable concept |

**Distractor Function:**
| Function | Characteristic |
|----------|---------------|
| High-quality | Attracts low performers |
| Moderate | Attracts mid performers |
| Low-quality | Attracts few test-takers |
| Non-functioning | No one selects |

**Reverse Engineering:**
1. Identify correct answer
2. Predict common errors
3. Design plausible distractors
4. Test and refine

## Expert Reasoning Strategies

**Hypothesis-Driven Analysis:**
| Step | Action |
|------|--------|
| 1 | Generate hypothesis from stem |
| 2 | Check if answer exists |
| 3 | Verify supporting evidence |
| 4 | Eliminate competing hypotheses |

**Probabilistic Reasoning:**
| Element | Application |
|---------|-------------|
| Base rates | Consider prevalence |
| Likelihood ratios | Test interpretation |
| Post-test probability | Updated assessment |
| Threshold approach | Decision points |

**Clinical Prediction Rules:**
| Rule | Application |
|------|-------------|
| Wells (DVT/PE) | Risk stratification |
| HEART | Chest pain risk |
| CURB-65 | Pneumonia severity |
| Ottawa ankle | Fracture probability |

## Time-Efficient Strategies

**Rapid Pattern Recognition:**
| Pattern Type | Recognition Time |
|--------------|------------------|
| Classic presentation | <5 seconds |
| Emergency pattern | <5 seconds |
| Common disease | <10 seconds |
| Atypical case | Longer analysis |

**Selective Deep Reading:**
| Strategy | Application |
|----------|-------------|
| Skim for red flags | Immediate recognition |
| Deep read if atypical | Complex cases |
| Return if uncertain | Second look |
| Skip and return | Time management |

**Answer Analysis Shortcuts:**
| Technique | Use Case |
|-----------|----------|
| Look for absolute terms | Often wrong (always, never) |
| Check for qualifiers | Often correct (may, can) |
| Compare similar answers | One likely correct |
| Eliminate outliers | Different category |

## Metacognitive Expertise

**Real-Time Monitoring:**
| Checkpoint | Self-Question |
|------------|---------------|
| During reading | Am I processing this? |
| After analysis | What is my hypothesis? |
| Before selecting | Have I considered alternatives? |
| After marking | Should I flag this? |

**Confidence Management:**
| Confidence Level | Action |
|------------------|--------|
| Very high | Answer and move on |
| Moderate | Brief verification |
| Low | Flag for review |
| Random guess | Strategic elimination |

**Error Recovery:**
| Situation | Response |
|-----------|----------|
| Realize mid-analysis | Re-read, re-analyze |
| Suspect misreading | Careful re-read |
| Between two answers | Analysis, gut check |
| Time running out | Strategic guessing |

## Complex Scenarios

**Multi-Step Questions:**
| Approach | Strategy |
|----------|----------|
| Work backwards | From question to data |
| Identify decision points | Critical junctures |
| Track changes | Evolving condition |
| Synthesize information | Combine multiple sources |

**Vague or Incomplete Stems:**
| Issue | Approach |
|-------|----------|
| Missing key data | Look for implied information |
| Atypical presentation | Focus on what is present |
| Unclear timeline | Assume typical unless stated |
| Conflicting findings | Prioritize key features |

**Experimental Items:**
| Characteristic | Strategy |
|----------------|----------|
| New format | Careful reading |
| Multimedia | Process all elements |
| Complex layout | Systematic scanning |
| Unclear scoring | Do your best |

## Performance Optimization

**Pre-Exam Preparation:**
| Element | Implementation |
|---------|----------------|
| Sleep | Adequate rest |
| Nutrition | Balanced meal |
| Timing | Arrive early |
| Materials | Prepared, organized |

**During Exam:**
| Strategy | Purpose |
|----------|---------|
| Positive self-talk | Confidence |
| Breathing | Stress management |
| Stretching | Physical comfort |
| Breaks | Mental reset |

**Post-Item Processing:**
| Action | Benefit |
|--------|---------|
| Quick mental reset | Clear working memory |
| Brief stretch | Physical comfort |
| Confidence check | Emotional regulation |
| Move on | Avoid dwelling |

## Practice and Mastery

**Expert Practice:**
| Component | Implementation |
|-----------|----------------|
| Volume | Thousands of questions |
| Variety | All subjects, formats |
| Analysis | Deep error review |
| Feedback | Expert coaching |

**Deliberate Improvement:**
| Step | Action |
|------|--------|
| Identify weakness | Error pattern analysis |
| Targeted practice | Focused improvement |
| Technique refinement | Strategy adjustment |
| Reassessment | Performance verification |

**Mastery Indicators:**
| Indicator | Description |
|-----------|-------------|
| Automaticity | Effless pattern recognition |
| Flexibility | Adapt to novel items |
| Efficiency | Optimal time use |
| Accuracy | High correct rate |`,
      keyTerms: [
        { term: 'item response theory', definition: 'A statistical framework for evaluating test questions and estimating test-taker ability' },
        { term: 'differential item functioning', definition: 'When test items perform differently for different groups with equal ability' },
        { term: 'post-test probability', definition: 'The probability of a condition after incorporating test results' },
        { term: 'automaticity', definition: 'The ability to perform a task without conscious attention' },
      ],
      analogies: [
        'Item response theory is like a smart scale that adjusts questions based on how well you are doing.',
        'Expert question analysis is like chess grandmaster pattern recognition - years of practice create instant recognition.',
      ],
      examples: [
        'An expert test-taker recognizes "acute onset + tearing chest pain + BP differential" as aortic dissection in under 5 seconds.',
        'Understanding that "most appropriate" questions often have multiple reasonable answers requiring best clinical judgment.',
      ],
      patientCounselingPoints: [
        'Expert clinical reasoning involves both pattern recognition and careful systematic analysis',
        'Experience and deliberate practice lead to more efficient and accurate clinical decision-making',
      ],
    },

    5: {
      level: 5,
      summary: 'Professional mastery of question analysis encompasses psychometric expertise, test construction knowledge, and coaching capability. Expert practitioners contribute to assessment science while teaching strategic thinking and clinical reasoning.',
      explanation: `## Professional Question Analysis Framework

Professional mastery of question analysis integrates psychometric expertise, assessment development, educational research, and leadership in test preparation.

## Assessment Science

**Test Development:**
| Stage | Activities |
|-------|------------|
| Blueprint | Content specification |
| Item writing | Question creation |
| Review | Content, bias, clarity |
| Pilot testing | Statistical analysis |
| Assembly | Test construction |
| Standard setting | Pass score determination |

**Psychometric Quality:**
| Property | Measurement |
|----------|-------------|
| Reliability | Consistency |
| Validity | Appropriateness |
| Fairness | Equity |
| Transparency | Clear process |

**Technology-Enhanced Items:**
| Type | Features |
|------|----------|
| Multimedia | Audio, video |
| Interactive | Drag-drop, hotspots |
| Adaptive | Difficulty adjustment |
| Simulation | Virtual patients |

## Item Writing Expertise

**Stem Construction:**
| Element | Best Practice |
|---------|---------------|
| Focus | Single, clear question |
| Relevance | Clinical authenticity |
| Clarity | Unambiguous language |
| Length | Necessary information only |

**Distractor Crafting:**
| Quality | Characteristic |
|---------|---------------|
| Plausible | Based on common errors |
| Homogeneous | Similar format to key |
| Independent | Not obviously wrong |
| Discriminating | Attracts specific levels |

**Lead-in Design:**
| Type | Construction |
|------|--------------|
| Diagnosis | "Most likely diagnosis" |
| Management | "Best initial step" |
| Mechanism | "Explanation for" |
| Prognosis | "Most likely outcome" |

## Educational Research

**Assessment Research:**
| Area | Questions |
|------|-----------|
| Validity | Does it measure what it should? |
| Reliability | Is it consistent? |
| Fairness | Is it equitable? |
| Utility | Is it useful? |

**Learning Science:**
| Topic | Application |
|-------|-------------|
| Retrieval practice | Testing effect |
| Feedback | Answer explanation |
| Spacing | Practice distribution |
| Interleaving | Mixed practice |

**Technology Research:**
| Area | Development |
|------|-------------|
| AI | Automated item generation |
| Analytics | Performance patterns |
| Simulation | Virtual patients |
| Gamification | Engagement |

## Teaching and Coaching

**Instructional Design:**
| Component | Content |
|-----------|---------|
| Curriculum | Structured learning |
| Materials | Resources, practice |
| Assessment | Progress monitoring |
| Feedback | Performance improvement |

**Coaching Strategies:**
| Approach | Implementation |
|----------|----------------|
| Diagnostic | Identify weaknesses |
| Prescriptive | Targeted intervention |
| Supportive | Motivation, confidence |
| Analytical | Error pattern review |

**Mentorship:**
| Level | Focus |
|-------|-------|
| Novice | Basic technique |
| Developing | Strategy refinement |
| Competent | Efficiency |
| Expert | Fine-tuning |

## Professional Development

**Specialization Areas:**
| Area | Expertise |
|------|-----------|
| Specific exams | USMLE, specialty boards |
| Populations | Underrepresented, IMG |
| Content areas | Specific subjects |
| Remediation | Struggling learners |

**Research Contribution:**
| Activity | Output |
|----------|--------|
| Studies | Publications |
| Presentations | Conferences |
| Reviews | Expert consultation |
| Innovation | New methods |

**Leadership:**
| Role | Contribution |
|------|--------------|
| Program director | Curriculum oversight |
| Faculty | Teaching excellence |
| Advocate | Policy, access |
| Innovator | New approaches |

## Future Directions

**AI and Assessment:**
| Application | Development |
|-------------|-------------|
| Item generation | Automated creation |
| Adaptive testing | Personalized assessment |
| Feedback | Intelligent tutoring |
| Analytics | Predictive modeling |

**Competency-Based Assessment:**
| Feature | Implementation |
|---------|----------------|
| Entrustable professional activities | Workplace assessment |
| Milestones | Progress markers |
| Portfolio | Comprehensive evidence |
| Narrative | Qualitative assessment |

**Global Health:**
| Challenge | Opportunity |
|-----------|-------------|
| Access | Technology solutions |
| Equity | Fair assessment |
| Context | Cultural adaptation |
| Quality | Standards alignment |

## Ethics and Standards

**Test Security:**
| Issue | Standard |
|-------|----------|
| Item exposure | Limited access |
| Cheating prevention | Security measures |
| Intellectual property | Protection |
| Fairness | Equity |

**Coaching Ethics:**
| Principle | Application |
|-----------|-------------|
| Honesty | Realistic expectations |
| Integrity | Ethical preparation |
| Competence | Qualified instruction |
| Beneficence | Student welfare |

**Professional Standards:**
| Standard | Commitment |
|----------|------------|
| Best practices | Evidence-based |
| Continuous improvement | Ongoing development |
| Collaboration | Professional community |
| Accountability | Results responsibility |`,
      keyTerms: [
        { term: 'standard setting', definition: 'The process of determining the passing score for an examination' },
        { term: 'entrustable professional activity', definition: 'A unit of professional practice that can be entrusted to a trainee once competence is demonstrated' },
        { term: 'blueprint', definition: 'A detailed specification of exam content and weighting' },
        { term: 'utility', definition: 'The usefulness of an assessment for its intended purpose' },
      ],
      analogies: [
        'Test development is like architecture - you need a blueprint, quality materials, and careful construction.',
        'Assessment research is like quality control in manufacturing - continuous monitoring and improvement.',
      ],
      examples: [
        'Expert item writers create questions that test clinical reasoning, not just memorization, through carefully crafted vignettes.',
        'Adaptive testing adjusts question difficulty in real-time based on performance, creating personalized assessments.',
      ],
      patientCounselingPoints: [
        'Well-designed assessments measure true clinical competence, not just test-taking ability',
        'Continuous assessment throughout training ensures readiness for independent practice',
      ],
    },
  },

  media: [
    {
      id: 'question-structure',
      type: 'diagram',
      filename: 'question-structure.svg',
      title: 'USMLE Question Structure',
      description: 'Breakdown of components in a clinical vignette question',
    },
    {
      id: 'analysis-flowchart',
      type: 'diagram',
      filename: 'analysis-flowchart.svg',
      title: 'Question Analysis Flowchart',
      description: 'Systematic approach to analyzing exam questions',
    },
  ],

  citations: [
    {
      id: 'test-taking-strategies',
      type: 'article',
      title: 'Test-Taking Strategies for Medical Students',
      source: 'Medical Education',
      accessedDate: '2025-01-28',
    },
    {
      id: 'nbme-guide',
      type: 'website',
      title: 'USMLE Step 1 Content Description',
      source: 'National Board of Medical Examiners',
      url: 'https://www.usmle.org',
      accessedDate: '2025-01-28',
    },
  ],

  crossReferences: [
    { targetId: 'education-test-taking-strategies', targetType: 'concept', relationship: 'parent', label: 'Test Taking Strategies' },
    { targetId: 'education-time-strategies', targetType: 'concept', relationship: 'related', label: 'Time Strategies' },
    { targetId: 'education-question-banks', targetType: 'concept', relationship: 'related', label: 'Question Banks' },
  ],

  tags: {
    systems: ['medical-education'],
    topics: ['test taking', 'exam preparation', 'question analysis'],
    keywords: ['test taking', 'question analysis', 'exam strategy', 'USMLE'],
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

export default questionAnalysis;
