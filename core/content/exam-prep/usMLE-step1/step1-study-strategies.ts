/**
 * USMLE Step 1 Study Strategies - Evidence-Based Preparation Methods
 *
 * Comprehensive guide to effective study strategies, resource utilization,
 * and preparation planning for USMLE Step 1 success.
 */

import { EducationalContent } from '../../types';

export const step1StudyStrategies: EducationalContent = {
  id: 'education-step1-study-strategies',
  type: 'concept',
  name: 'Step 1 Study Strategies',
  alternateNames: ['Step 1 Prep Methods', 'USMLE Step 1 Study Guide', 'Board Study Strategies'],

  levels: {
    1: {
      level: 1,
      summary: 'Studying for Step 1 takes special techniques. The best methods include practicing with questions, using flashcards, and studying a little bit every day instead of all at once.',
      explanation: `## How to Study for Step 1

Studying for this big test is different from regular school studying. Here are the best ways to prepare.

## Practice Questions

The best way to prepare is by doing lots of practice questions.

**Why practice questions help:**
- You learn by trying to answer, not just by reading
- You find out what you don't know yet
- The questions are similar to the real test

## Flashcards

Flashcards help you remember important facts.

**How to use them:**
- Put a question on one side and the answer on the other
- Review them every day
- Focus more on the cards you get wrong

## Study a Little Every Day

**Spaced repetition** means reviewing things multiple times over many days.

**Why this works:**
- Your brain remembers better when you spread out studying
- Cramming (studying everything at once) doesn't work as well
- Little by little, the information sticks

## Take Breaks

Your brain needs rest to learn well.

**Study tips:**
- Study for 30-45 minutes, then take a 5-10 minute break
- Get enough sleep (at least 8 hours)
- Exercise helps your brain work better

## Study with Friends

Working with others can help:
- You can explain things to each other
- Teaching something helps you remember it
- Friends can quiz you

## Stay Healthy

To do your best:
- Eat healthy food
- Drink lots of water
- Don't forget to have some fun too!`,
      keyTerms: [
        { term: 'practice questions', definition: 'Sample test questions used to prepare for an exam by testing your knowledge' },
        { term: 'flashcards', definition: 'Cards with a question on one side and an answer on the other, used for studying' },
        { term: 'spaced repetition', definition: 'A study method where you review information at regular intervals over time' },
      ],
      analogies: [
        'Studying for Step 1 is like training for a sports competition - you need to practice regularly over many weeks, not just the night before.',
        'Using flashcards is like training your memory muscles - the more you exercise them, the stronger they get.',
        'Taking study breaks is like letting a muscle rest between exercises - your brain needs recovery time to get stronger.',
      ],
      examples: [
        'A student does 20 practice questions every morning before reviewing their flashcards.',
        'A study group meets twice a week to quiz each other on different topics.',
      ],
      patientCounselingPoints: [
        'Medical students studying for Step 1 need support and understanding from family and friends',
        'Good study habits help future doctors learn the information they need to help patients',
      ],
    },

    2: {
      level: 2,
      summary: 'Effective Step 1 preparation combines active learning strategies like practice questions and spaced repetition with structured study schedules. Key resources include question banks, review books, and flashcard systems.',
      explanation: `## Effective Step 1 Study Strategies

Success on Step 1 comes from using proven study methods and staying consistent.

## Core Study Principles

**Active vs. Passive Learning:**
| Passive (Less Effective) | Active (More Effective) |
|-------------------------|------------------------|
| Reading textbooks | Doing practice questions |
| Watching videos | Teaching concepts to others |
| Highlighting notes | Making flashcards |
| Re-reading notes | Testing yourself |

## Essential Study Resources

**Question Banks:**
- UWorld is the most popular and effective
- Contains 2,800+ questions
- Detailed explanations teach you concepts
- Tracks your performance

**Review Books:**
- First Aid for USMLE Step 1 - the "Bible" of Step 1
- Covers all testable material
- Annotate with additional notes

**Video Resources:**
- Pathoma for pathology
- Sketchy for microbiology and pharmacology
- Boards and Beyond for comprehensive review

**Flashcard Systems:**
- Anki - digital flashcards with spaced repetition
- Pre-made decks available (Zanki, AnKing)
- Can create your own cards

## Building Your Study Schedule

**Long-term Plan (During Preclinical Years):**
- Review material as you learn it
- Start Anki flashcards early
- Do questions related to current coursework

**Dedicated Period (4-8 weeks before exam):**
- Full-time studying, 8-10 hours daily
- Complete at least one pass through UWorld
- Regular practice exams

## Daily Study Structure

**Sample Day:**
- Morning: Review weak topics (2-3 hours)
- Midday: Practice questions (40-80 questions)
- Afternoon: Review question explanations
- Evening: Flashcard review and light reading

## Practice Questions Strategy

**How to Use Question Banks:**
1. **Tutor mode first** - Learn from explanations
2. **System-based blocks** - Match your study topic
3. **Random mode later** - Simulate real exam
4. **Review ALL explanations** - Even correct answers

**Performance Tracking:**
- Keep track of your percentage correct
- Note which topics are weakest
- Spend more time on difficult areas

## Spaced Repetition with Anki

**Why it works:**
- Reviews cards at optimal intervals
- Algorithm adapts to your learning
- Prevents forgetting

**Best Practices:**
- Do Anki cards every day
- Keep up with reviews
- Add new cards gradually

## Study Groups

**Benefits:**
- Different perspectives
- Teaching reinforces learning
- Accountability

**Potential Downsides:**
- Can slow you down if not organized
- Not everyone studies at the same pace

## Test-Taking Skills

**During Practice:**
- Read questions carefully
- Look for key words
- Eliminate wrong answers
- Manage your time

## Self-Care During Studying

**Sleep:** 7-8 hours per night
**Exercise:** 30 minutes daily
**Breaks:** Regular short breaks
**Social time:** Stay connected with friends/family`,
      keyTerms: [
        { term: 'question bank', definition: 'A collection of practice questions designed to prepare for standardized exams like USMLE' },
        { term: 'active learning', definition: 'Study methods that require engagement and effort, such as practice testing and self-explanation' },
        { term: 'Anki', definition: 'A popular flashcard application that uses spaced repetition algorithms to optimize review timing' },
        { term: 'dedicated period', definition: 'A focused study time (usually 4-8 weeks) devoted exclusively to Step 1 preparation' },
        { term: 'tutor mode', definition: 'A question bank setting that shows explanations after each question for learning purposes' },
      ],
      analogies: [
        'Question banks are like practice games before a championship - they prepare you for the real thing in a realistic way.',
        'Anki\'s algorithm is like a personal trainer who knows exactly when you need to review something before you forget it.',
        'First Aid is like a map - it shows you everything important, but you need other resources to understand the details.',
      ],
      examples: [
        'A student completes 80 UWorld questions daily during dedicated period, spending 2-3 hours reviewing explanations.',
        'A study schedule includes morning Anki reviews, afternoon question blocks, and evening content review.',
      ],
      patientCounselingPoints: [
        'The rigorous study methods medical students use help ensure they develop comprehensive medical knowledge',
        'Practice questions help future doctors develop clinical reasoning skills they will use with patients',
      ],
    },

    3: {
      level: 3,
      summary: 'Optimal Step 1 preparation integrates evidence-based learning strategies including retrieval practice, spaced repetition, and interleaving. Strategic resource utilization and performance monitoring enable targeted improvement throughout the study period.',
      explanation: `## Advanced Step 1 Study Strategies

Evidence-based learning science provides the foundation for effective Step 1 preparation. Understanding these principles enables strategic studying.

## Learning Science Foundations

**Retrieval Practice (Testing Effect):**
- Actively recalling information strengthens memory
- Testing > re-reading by 50% for retention
- Every question attempt is a learning opportunity

**Spaced Repetition:**
- Distributed practice outperforms massed practice
- Optimal spacing intervals increase over time
- Forgetting is actually necessary for memory strengthening

**Interleaving:**
- Mixing different topics improves discrimination
- Better than studying one topic at a time
- Initially feels harder but improves long-term retention

**Elaboration:**
- Connecting new information to existing knowledge
- Asking "why" and "how" questions
- Creating meaningful associations

## Resource Integration Framework

**Tier 1: Core Resources**
| Resource | Purpose | Usage |
|----------|---------|-------|
| First Aid | Content outline | Daily reference, annotation |
| UWorld | Question practice | 2-3 blocks daily |
| Pathoma | Pathology | System-aligned review |
| Anki | Retention | Daily reviews |

**Tier 2: Supplemental Resources**
- Sketchy: Visual mnemonics for micro/pharm
- Boards and Beyond: Video explanations
- Costanzo Physiology: Deep physiology understanding
- Rapid Review Pathology: Detailed pathology

**Tier 3: As-Needed Resources**
- Textbooks for complex topics
- Additional question banks (Amboss, Kaplan)
- Subject-specific resources

## Question Bank Optimization

**UWorld Strategy:**
1. **First pass:** Tutor mode, system-based
   - Complete during dedicated period week 1-3
   - Thorough review of all explanations
   - Annotate First Aid

2. **Second pass:** Timed, random
   - Incorrect and marked questions
   - Focus on reasoning process
   - Simulate exam conditions

**Performance Analysis:**
- Track accuracy by system and discipline
- Identify patterns in incorrect answers
- Create targeted review lists

**Question Approach:**
1. Read the last sentence first (what's being asked)
2. Identify key clinical features
3. Generate differential before looking at choices
4. Eliminate obviously wrong answers
5. Choose best answer based on evidence

## Spaced Repetition Mastery

**Anki Best Practices:**

**Card Creation:**
- One concept per card
- Use cloze deletions
- Include images when helpful
- Keep cards simple and direct

**Deck Management:**
- Use comprehensive pre-made decks (AnKing)
- Unsuspend cards as you study topics
- Create personal cards for weak areas
- Tag for easy searching

**Daily Workflow:**
- Complete ALL reviews daily
- New cards: 50-100/day maximum
- Total time: 60-90 minutes
- Never let reviews pile up

## Study Schedule Architecture

**Pre-Dedicated Period (Months Before):**
- Integrate Step 1 content with coursework
- Build Anki habit
- Complete foundational resources (Pathoma, Sketchy)

**Dedicated Period Structure:**

| Week | Focus | Questions | Hours |
|------|-------|-----------|-------|
| 1 | Foundation, weak areas | 40/day | 8-10 |
| 2-3 | Content review, UWorld | 60/day | 10-12 |
| 4-5 | Integration, practice exams | 80/day | 10-12 |
| 6 | Review, light studying | 40/day | 6-8 |

**Daily Rhythm:**
- 7 AM: Morning routine
- 8-10 AM: Anki reviews
- 10 AM-1 PM: Content study/videos
- 1-2 PM: Lunch break
- 2-5 PM: Question blocks
- 5-7 PM: Question review
- 7-9 PM: Light review, relaxation
- 10 PM: Sleep

## Practice Exam Strategy

**NBME Forms:**
- Take every 1-2 weeks
- Simulate actual conditions
- Track score progression
- Review thoroughly

**Score Interpretation:**
- Add 10-20 points to NBME for actual prediction
- Look for score improvement trend
- Identify persistent weak areas

**UWorld Self-Assessment:**
- Take 2 weeks before exam
- Most predictive assessment
- Helps gauge readiness

## Weak Area Identification

**Data Sources:**
- UWorld performance by system
- NBME forms missed questions
- Anki card accuracy
- Self-assessment of confidence

**Targeted Remediation:**
1. Identify bottom 3-5 topics
2. Return to foundational resources
3. Do additional focused questions
4. Create summary notes
5. Review again before exam

## Cognitive Load Management

**Avoid Burnout:**
- Maximum 10-12 hours studying
- Take breaks every 45-60 minutes
- One full day off weekly
- Maintain social connections

**Stress Management:**
- Regular exercise
- Mindfulness/meditation
- Adequate sleep
- Professional support if needed`,
      keyTerms: [
        { term: 'retrieval practice', definition: 'A learning strategy involving actively recalling information from memory, which strengthens retention' },
        { term: 'interleaving', definition: 'Mixing different topics or skills during practice sessions rather than studying each in isolation' },
        { term: 'elaboration', definition: 'Learning technique involving explaining how new information relates to existing knowledge' },
        { term: 'cloze deletion', definition: 'A flashcard format where key words are removed from sentences for active recall' },
        { term: 'NBME forms', definition: 'Official practice exams from the National Board of Medical Examiners that predict actual performance' },
      ],
      analogies: [
        'Retrieval practice is like strengthening a trail through the forest - each time you walk it, the path becomes clearer and easier to find.',
        'Interleaving topics is like practicing basketball by mixing free throws, dribbling, and defense rather than doing 100 free throws in a row.',
        'The dedicated period is like training camp before the season - intense, focused preparation before the main event.',
      ],
      examples: [
        'A student analyzes their UWorld performance and finds cardiology at 45% while other systems are 60%+, triggering a dedicated cardiology review week.',
        'During dedicated period, a student completes Anki reviews each morning before 10 AM, then focuses on UWorld blocks in the afternoon.',
      ],
      patientCounselingPoints: [
        'The systematic approach medical students use for board preparation reflects the evidence-based thinking they will apply to patient care',
        'Understanding learning science helps both students and future physicians continually update their knowledge throughout their careers',
      ],
    },

    4: {
      level: 4,
      summary: 'Graduate-level Step 1 preparation requires integration of cognitive science principles with metacognitive monitoring. Optimal performance demands strategic resource allocation, sophisticated self-assessment, and maintenance of physical and psychological well-being.',
      explanation: `## Expert Step 1 Study Strategy Framework

Effective Step 1 preparation at the graduate level requires understanding both learning science and metacognitive skills for self-directed study.

## Cognitive Science Applications

**Memory Systems:**
| System | Characteristics | Study Implication |
|--------|-----------------|-------------------|
| Working Memory | Limited capacity (4 items) | Chunk information |
| Declarative | Facts and concepts | Direct study |
| Procedural | Skills and algorithms | Practice application |
| Episodic | Contextual memories | Create associations |

**Desirable Difficulties:**
- Challenges that slow learning but improve retention
- Testing, spacing, interleaving, generation
- Avoid fluency illusion (feeling of knowing ≠ actual knowledge)

**Transfer of Learning:**
- Surface vs. deep transfer
- Learning principles > memorizing facts
- Clinical application of basic science

## Advanced Question Strategy

**Cognitive Task Analysis:**
1. **Information acquisition** - Extract relevant data from stem
2. **Hypothesis generation** - Create differential
3. **Hypothesis evaluation** - Test against findings
4. **Selection** - Choose best answer

**Error Analysis:**
| Error Type | Cause | Intervention |
|------------|-------|--------------|
| Knowledge gap | Missing information | Content review |
| Comprehension | Misunderstood concept | Return to fundamentals |
| Application | Can't apply knowledge | More practice |
| Careless | Rush/distraction | Slow down, check work |

**Second-Order Thinking:**
- Why is the wrong answer wrong?
- What makes the right answer right?
- What would change the answer?
- What related concepts might appear?

## Resource Optimization

**Diminishing Returns Recognition:**
- Initial hours most productive
- Know when to stop adding resources
- Depth > breadth in final weeks

**Active Annotation:**
- First Aid as master document
- Add UWorld explanations
- Include personal mnemonics
- Cross-reference resources

**Note-Taking System:**
- Cornell method for lectures
- Mind maps for connections
- Summary sheets for high-yield
- Question logs for mistakes

## Performance Monitoring

**Metacognitive Awareness:**
- Judgment of learning (JOL)
- Feeling of knowing (FOK)
- Calibration between confidence and accuracy

**Data-Driven Adjustments:**
1. **Weekly review:** Analyze question bank data
2. **Identify patterns:** System/topic weaknesses
3. **Adjust schedule:** Allocate time to gaps
4. **Re-assess:** Track improvement

**Practice Exam Analysis:**

| Metric | Target | Action if Low |
|--------|--------|---------------|
| % Correct | >70% | General content review |
| Time/question | <90 sec | Timed practice |
| Consistent improvement | +5-10 points/exam | Continue plan |
| Plateau | N/A | Change approach |

## Schedule Optimization

**Circadian Alignment:**
- Peak cognitive hours vary by individual
- Schedule difficult material during peak
- Light review during troughs
- Consistent sleep/wake times

**Ultradian Rhythms:**
- 90-minute cycles
- Take breaks at cycle ends
- Don't fight fatigue

**Strategic Rest:**
- 7-8 hours sleep minimum
- Naps: 20 minutes or 90 minutes
- Rest days for consolidation

## Psychological Preparation

**Stress Inoculation:**
- Practice under exam conditions
- Simulate time pressure
- Manage test anxiety with exposure

**Growth Mindset:**
- Mistakes are learning opportunities
- Effort leads to improvement
- Intelligence is not fixed

**Attribution Theory:**
- Attribute success to effort and strategy
- Attribute failure to changeable factors
- Avoid external locus of control

## Test Day Optimization

**Week Before:**
- Light review only
- No new material
- Focus on high-yield
- Rest and recover

**Night Before:**
- Normal routine
- Early bedtime
- No last-minute cramming
- Prepare logistics

**Exam Day:**
| Phase | Strategy |
|-------|----------|
| Morning | Normal routine, light breakfast |
| Transit | Calming activities, no studying |
| Pre-exam | Bathroom, settle in |
| Breaks | Snacks, movement, don't review |
| Post-exam | Decompress, no analysis |

**In-Test Strategy:**
- First pass: Answer known, flag uncertain
- Second pass: Review flagged
- Don't change unless certain
- Time management critical

## Common Pitfalls

**Over-Studying:**
- Diminishing returns after 10-12 hours
- Quality decreases with fatigue
- Burnout risk

**Under-Practicing:**
- Too much content, not enough questions
- Passive consumption
- Not simulating test conditions

**Comparison Trap:**
- Everyone has different baseline
- Focus on personal improvement
- Avoid social media during study

**Perfectionism:**
- Can't know everything
- 80/20 rule applies
- Good enough is often sufficient`,
      keyTerms: [
        { term: 'desirable difficulties', definition: 'Challenging conditions during learning that slow acquisition but improve long-term retention and transfer' },
        { term: 'fluency illusion', definition: 'The mistaken belief that ease of processing information during study indicates strong memory' },
        { term: 'metacognition', definition: 'Awareness and understanding of one\'s own thought processes, including self-monitoring and self-regulation' },
        { term: 'ultradian rhythms', definition: 'Biological cycles shorter than 24 hours, including 90-minute alertness cycles' },
        { term: 'stress inoculation', definition: 'A technique of gradually exposing oneself to stressors to build coping capacity' },
        { term: 'growth mindset', definition: 'The belief that abilities can be developed through dedication and hard work' },
      ],
      analogies: [
        'Desirable difficulties are like resistance training - the struggle is what builds strength, not the easy repetitions.',
        'Metacognitive monitoring is like a pilot\'s instrument panel - it tells you how you\'re actually performing, not just how you feel.',
        'The fluency illusion is like recognizing a song on the radio but not being able to recall its name - familiarity is not the same as knowledge.',
      ],
      examples: [
        'A student notices their confidence ratings on practice questions don\'t match their accuracy, indicating poor metacognitive calibration, and starts tracking both metrics.',
        'After analyzing 500 UWorld questions, a student creates a spreadsheet categorizing errors by type (knowledge vs. careless) and adjusts study accordingly.',
      ],
      patientCounselingPoints: [
        'The metacognitive skills developed during Step 1 preparation translate directly to clinical self-assessment and lifelong learning',
        'Understanding cognitive limitations helps physicians recognize when to seek consultation or additional resources',
      ],
    },

    5: {
      level: 5,
      summary: 'Expert-level Step 1 preparation synthesizes cognitive psychology, educational research, and performance science. Strategic preparation optimizes learning efficiency while maintaining sustainable practices for long-term professional development.',
      explanation: `## Professional-Level Step 1 Study Science

Optimal Step 1 preparation applies principles from cognitive psychology, educational research, and performance science to maximize efficiency and outcomes.

## Learning Science Deep Dive

**Encoding Specificity:**
- Context-dependent memory
- Study conditions should match test conditions
- Environmental cues affect retrieval
- Implications: Practice in exam-like settings

**Levels of Processing:**
| Level | Description | Retention |
|-------|-------------|-----------|
| Shallow | Structural/surface features | Low |
| Intermediate | Acoustic/phonemic | Moderate |
| Deep | Semantic/meaning | High |

**Testing Effect Mechanisms:**
1. Retrieval strengthens memory traces
2. Identifies knowledge gaps
3. Enhances organization
4. Improves transfer

**Spacing Effect Research:**
- Cepeda et al.: Optimal spacing = 10-20% of retention interval
- For 30-day retention: 3-6 day spacing optimal
- Exponential increase in intervals over time

## Advanced Spaced Repetition

**Algorithm Optimization:**
- SM-2 algorithm (Anki default)
- Adjust ease factor based on personal data
- Optimal retention target: 85-90%
- Balance new cards vs. reviews

**Memory Half-Life:**
- Initial: Hours to days
- After review 1: Days to weeks
- After review 2-3: Weeks to months
- Mature cards: Months to years

**Interference Management:**
- Proactive interference: Old learning impairs new
- Retroactive interference: New learning impairs old
- Solutions: Spacing, interleaving, distinctive encoding

## Expert Question Analysis

**Item Writing Principles:**
Understanding how questions are written improves performance:
- Lead-in determines cognitive task
- Distractors based on common errors
- Best answer may not be perfect answer

**Psychometric Considerations:**
- Difficulty index: Proportion correct
- Discrimination index: Differentiation between high/low performers
- Point-biserial correlation: Item-total correlation

**Answer Choice Analysis:**
| Type | Characteristics | Strategy |
|------|-----------------|----------|
| Correct | Best supported by stem | Verify all criteria met |
| Close distractor | Partially correct | Identify what's missing |
| Far distractor | Plausible but wrong | Eliminate quickly |
| Absolute distractor | Clearly incorrect | Discard immediately |

## Performance Psychology

**Flow State Optimization:**
- Challenge-skill balance
- Clear goals and feedback
- Deep concentration
- Intrinsic motivation

**Deliberate Practice:**
1. Specific goals
2. Full concentration
3. Immediate feedback
4. Repetition with refinement
5. Expert guidance

**Peak Performance Model:**
- Inverted U arousal-performance curve
- Individual optimal arousal level
- Too little or too much stress impairs performance

## Cognitive Load Management

**Intrinsic Load:**
- Complexity inherent to material
- Cannot be reduced
- Must be managed with scaffolding

**Extraneous Load:**
- Poor instructional design
- Should be minimized
- Streamline study materials

**Germane Load:**
- Effort toward schema construction
- Should be optimized
- Active processing activities

**Load Reduction Strategies:**
- Chunking complex information
- Using worked examples
- Building on prior knowledge
- Eliminating redundancy

## Expert Self-Regulation

**Self-Regulated Learning Cycle:**
1. **Forethought:** Goal setting, strategic planning
2. **Performance:** Self-monitoring, strategy use
3. **Reflection:** Self-evaluation, adaptation

**Implementation Intentions:**
- "When X happens, I will do Y"
- Reduces decision fatigue
- Automates study behaviors
- Example: "When I miss a question, I will immediately write a flashcard"

**Energy Management:**
- Physical energy: Sleep, nutrition, exercise
- Emotional energy: Stress management
- Mental energy: Focus intervals
- Spiritual energy: Purpose and meaning

## Systems-Level Optimization

**Environmental Design:**
- Dedicated study space
- Minimize distractions
- Optimal lighting and temperature
- Ergonomic setup

**Habit Stacking:**
- Attach new behaviors to existing routines
- Morning coffee → Anki reviews
- After lunch → Question block
- Reduce willpower requirements

**Social Architecture:**
- Accountability partnerships
- Study groups for specific purposes
- Minimize negative influences
- Support system maintenance

## Long-Term Perspective

**Step 1 as Foundation:**
- Knowledge base for clinical years
- Learning strategies for lifelong use
- Self-assessment skills
- Professional identity formation

**Transfer to Clinical Practice:**
| Study Skill | Clinical Application |
|-------------|---------------------|
| Evidence evaluation | Literature appraisal |
| Self-assessment | Competency monitoring |
| Spaced review | Maintenance of knowledge |
| Error analysis | Quality improvement |

**Continuing Medical Education:**
- Board recertification uses similar methods
- Self-directed learning essential
- Study skills transfer across career

## Evidence-Based Resource Selection

**Evaluating Study Materials:**
1. Alignment with exam blueprint
2. Evidence for effectiveness
3. Fit with learning style
4. Time efficiency
5. Integration with other resources

**Meta-Analysis of Methods:**
| Method | Effect Size | Utility |
|--------|-------------|---------|
| Practice testing | 0.6-0.7 | High |
| Distributed practice | 0.4-0.5 | High |
| Interleaved practice | 0.3-0.4 | Moderate |
| Elaborative interrogation | 0.4-0.5 | Moderate |
| Self-explanation | 0.5-0.6 | Moderate |
| Summarization | 0.2-0.3 | Low |
| Highlighting | 0.1 | Low |
| Re-reading | 0.1-0.2 | Low |`,
      keyTerms: [
        { term: 'encoding specificity', definition: 'Principle that memory retrieval is enhanced when the retrieval context matches the encoding context' },
        { term: 'levels of processing', definition: 'Framework suggesting that deeper semantic processing leads to better memory retention' },
        { term: 'deliberate practice', definition: 'Purposeful, systematic practice focused on improving specific aspects of performance with expert feedback' },
        { term: 'implementation intentions', definition: 'Specific if-then plans that link situational cues to goal-directed responses' },
        { term: 'germane load', definition: 'The mental effort devoted to processing and constructing schemas during learning' },
        { term: 'self-regulated learning', definition: 'The process of taking control of and evaluating one\'s own learning and behavior' },
      ],
      clinicalNotes: `Expert perspective on Step 1 study strategies:

1. **Evidence Over Anecdote:** Popular study methods often lack evidence. Highlighting and re-reading are ubiquitous but ineffective. Testing and spacing have strong research support - use them.

2. **Individual Variation:** No single approach works for everyone. Experiment with methods, track results, and adjust. The best strategy is the one you'll actually implement consistently.

3. **Diminishing Returns:** After 10-12 hours of quality study, additional time yields minimal benefit and risks burnout. Efficiency matters more than hours logged.

4. **Metacognitive Calibration:** Most students overestimate their knowledge. Use practice exams and question banks to calibrate. Feeling confident is not the same as being competent.

5. **Sleep Is Non-Negotiable:** Memory consolidation occurs during sleep. Seven hours minimum, preferably eight. Studying instead of sleeping is counterproductive.

6. **Question Quality:** Understanding why answers are right or wrong matters more than the number of questions completed. A thorough review of 50 questions beats rushing through 100.

7. **Stress Optimization:** Some stress improves performance; too much impairs it. Practice under exam-like conditions to calibrate arousal levels and build coping strategies.

8. **Long-Term Transfer:** The study skills developed for Step 1 form the foundation for lifelong learning. Invest in learning how to learn, not just memorizing facts.

9. **Resource Selection:** More resources is not better. Deep engagement with core materials (First Aid + UWorld + Pathoma) outperforms superficial coverage of many sources.

10. **Wellness Integration:** Physical health, mental health, and academic performance are interconnected. Exercise, social connection, and stress management are not luxuries - they are performance enhancers.`,
    },
  },

  media: [
    {
      id: 'learning-pyramid',
      type: 'diagram',
      filename: 'learning-pyramid.svg',
      title: 'Learning Retention Pyramid',
      description: 'Visual comparison of retention rates for different study methods',
    },
    {
      id: 'spaced-repetition-curve',
      type: 'diagram',
      filename: 'spaced-repetition-curve.svg',
      title: 'Spaced Repetition and Forgetting Curves',
      description: 'Illustration of how spaced review combats forgetting',
    },
  ],

  citations: [
    {
      id: 'dunlosky-2013',
      type: 'article',
      title: 'Improving Students\' Learning With Effective Learning Techniques',
      authors: ['Dunlosky, J.', 'Rawson, K.A.', 'Marsh, E.J.', 'Nathan, M.J.', 'Willingham, D.T.'],
      source: 'Psychological Science in the Public Interest',
      accessedDate: '2025-01-28',
    },
    {
      id: 'roediger-2006',
      type: 'article',
      title: 'The Power of Testing Memory: Basic Research and Implications for Educational Practice',
      authors: ['Roediger, H.L.', 'Karpicke, J.D.'],
      source: 'Perspectives on Psychological Science',
      accessedDate: '2025-01-28',
    },
    {
      id: 'cepeda-2006',
      type: 'article',
      title: 'Distributed Practice in Verbal Recall Tasks: A Review and Quantitative Synthesis',
      authors: ['Cepeda, N.J.', 'Pashler, H.', 'Vul, E.', 'Wixted, J.T.', 'Rohrer, D.'],
      source: 'Psychological Bulletin',
      accessedDate: '2025-01-28',
    },
  ],

  crossReferences: [
    { targetId: 'education-usmle-step1-overview', targetType: 'concept', relationship: 'parent', label: 'USMLE Step 1 Overview' },
    { targetId: 'education-spaced-repetition', targetType: 'concept', relationship: 'related', label: 'Spaced Repetition' },
    { targetId: 'education-active-learning', targetType: 'concept', relationship: 'related', label: 'Active Learning Techniques' },
    { targetId: 'education-test-taking-strategies', targetType: 'concept', relationship: 'related', label: 'Test-Taking Strategies' },
  ],

  tags: {
    systems: ['medical-education'],
    topics: ['study strategies', 'learning science', 'USMLE preparation', 'cognitive psychology', 'spaced repetition'],
    keywords: ['Step 1', 'study methods', 'question banks', 'UWorld', 'Anki', 'active learning', 'retrieval practice'],
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

export default step1StudyStrategies;
