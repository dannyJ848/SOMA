/**
 * USMLE Step 1 Overview - Comprehensive Guide to the Exam
 *
 * Educational content covering USMLE Step 1 structure, content,
 * scoring, and preparation strategies for medical students.
 */

import { EducationalContent } from '../../types';

export const step1Overview: EducationalContent = {
  id: 'education-usmle-step1-overview',
  type: 'concept',
  name: 'USMLE Step 1 Overview',
  alternateNames: ['Step 1', 'USMLE Step 1 Exam', 'Boards Step 1', 'Medical Licensing Exam Part 1'],

  levels: {
    1: {
      level: 1,
      summary: 'USMLE Step 1 is a big test that medical students take to become doctors. It tests what you know about how the body works and what goes wrong when people get sick.',
      explanation: `## What is USMLE Step 1?

USMLE Step 1 is like a big final exam for medical students. It is one of the first major tests on the path to becoming a doctor in the United States.

**Why is it important?**
- It shows that you understand basic medical science
- You need to pass it to continue your medical training
- It used to give you a score, but now it is just pass/fail

## What Does the Test Cover?

The test asks questions about:
- **How the body works** - anatomy, how organs function
- **What makes people sick** - germs, diseases, genetic problems
- **How medicines work** - drugs and their effects
- **How to think like a doctor** - connecting symptoms to diagnoses

## How is the Test Given?

- You take it on a computer at a testing center
- It takes about 8 hours to complete
- There are about 280 multiple choice questions
- You take it after your first two years of medical school

## The Result

The test is pass/fail. If you pass, you can continue your training. If you don't pass, you can study more and try again.

## Preparing for Step 1

Students usually spend several weeks or months studying. They use:
- Textbooks and review books
- Practice questions
- Study groups
- Online resources`,
      keyTerms: [
        { term: 'USMLE', definition: 'United States Medical Licensing Examination - the tests doctors must pass to practice medicine in America' },
        { term: 'pass/fail', definition: 'A grading system where you either pass (succeed) or fail (do not succeed), without a letter grade or number score' },
        { term: 'medical school', definition: 'A special school where people train to become doctors, usually lasting 4 years' },
      ],
      analogies: [
        'Step 1 is like the driving test you take to get a learner\'s permit - it shows you know the basic rules before you start practicing for real.',
        'Studying for Step 1 is like training for a marathon - it takes months of preparation and building up your knowledge bit by bit.',
      ],
      examples: [
        'A second-year medical student spends their summer studying for Step 1, using flashcards and practice tests every day.',
        'After passing Step 1, a student can move on to working with real patients in hospitals during their third year of medical school.',
      ],
      patientCounselingPoints: [
        'If someone you know is studying for Step 1, understand that it is a very stressful time requiring lots of focus',
        'Becoming a doctor takes many years of training and multiple exams like Step 1',
      ],
    },

    2: {
      level: 2,
      summary: 'USMLE Step 1 is a standardized exam testing foundational medical sciences including anatomy, biochemistry, physiology, pharmacology, pathology, and microbiology. It is now pass/fail and taken after the preclinical years.',
      explanation: `## USMLE Step 1 Fundamentals

USMLE Step 1 is the first of three licensing exams required for medical practice in the United States. It assesses understanding of foundational sciences essential for medical practice.

**Exam Structure:**
- 280 multiple choice questions
- 7 blocks of 40 questions each
- 60 minutes per block
- Total testing time: approximately 8 hours
- Computer-based testing at Prometric centers

## Content Areas

The exam covers seven main disciplines:

| Subject | Approximate Weight |
|---------|-------------------|
| Pathology | 25-30% |
| Pharmacology | 15-20% |
| Physiology | 15-20% |
| Biochemistry/Nutrition | 10-15% |
| Microbiology | 10-15% |
| Anatomy/Histology | 10-15% |
| Behavioral Sciences | 5-10% |

## Organ System Integration

Questions are organized by organ system:
- Cardiovascular system
- Respiratory system
- Gastrointestinal system
- Renal/Urinary system
- Reproductive system
- Endocrine system
- Nervous system
- Musculoskeletal system
- Hematologic/Lymphatic system
- Skin and related connective tissue
- Multisystem processes

## Scoring

**Current System (as of January 2022):**
- Pass/Fail only
- Minimum passing score: 196
- No three-digit score reported
- Results in 3-4 weeks

**Why the change?**
- Reduce student stress
- Decrease focus on numeric scores in residency selection
- Emphasize holistic application review

## Eligibility and Timing

**Who takes Step 1:**
- US allopathic (MD) medical students
- US osteopathic (DO) medical students
- International medical graduates (IMGs)

**When:**
- Typically after completing preclinical curriculum (end of year 2)
- Must be enrolled in or graduated from accredited medical school

## Preparation Resources

**Common Study Materials:**
- First Aid for the USMLE Step 1
- UWorld question bank
- Pathoma (pathology videos)
- Sketchy Medical (microbiology, pharmacology)
- Boards and Beyond (video lectures)
- Anki flashcard decks`,
      keyTerms: [
        { term: 'preclinical years', definition: 'The first two years of medical school focused on classroom learning before clinical rotations begin' },
        { term: 'Prometric', definition: 'The company that administers USMLE exams at testing centers nationwide' },
        { term: 'organ system', definition: 'A group of organs that work together to perform major functions, like the cardiovascular or respiratory system' },
        { term: 'question bank', definition: 'A collection of practice questions designed to simulate the actual exam format and difficulty' },
      ],
      analogies: [
        'Step 1 is like the written portion of getting a pilot\'s license - you need to know all the theory before you can start flying with passengers.',
        'The seven content areas are like the ingredients in a recipe - you need all of them to create a complete understanding of medicine.',
      ],
      examples: [
        'A typical Step 1 question presents a patient case and asks you to identify the underlying mechanism causing their symptoms.',
        'Students often create a study schedule that dedicates specific weeks to each organ system while continuously reviewing high-yield material.',
      ],
      patientCounselingPoints: [
        'The pass/fail change helps reduce unnecessary stress on future doctors during their training',
        'All doctors practicing in the US have passed this exam, demonstrating their foundational medical knowledge',
      ],
    },

    3: {
      level: 3,
      summary: 'USMLE Step 1 comprehensively assesses foundational biomedical sciences through integrated, clinically-oriented questions. The transition to pass/fail has shifted preparation strategies toward clinical competency and holistic development.',
      explanation: `## USMLE Step 1 In-Depth Analysis

USMLE Step 1 evaluates the foundational science knowledge essential for clinical practice. The exam integrates basic science principles with clinical applications through case-based questions.

## Exam Blueprint

**Content Distribution:**

| Domain | Percentage |
|--------|------------|
| Pathophysiology of Disease | 45-50% |
| Normal Structure and Function | 25-30% |
| Diagnosis and Treatment | 15-20% |
| Health Maintenance | 5-10% |

**Question Formats:**
- Single best answer (most common)
- Extended matching questions
- Sequential item sets (case clusters)
- Abstract/experiment-based questions
- Image-based questions (histology, radiology, ECG)

## Cognitive Levels Tested

**Bloom's Taxonomy Application:**
1. **Recall (10-15%):** Direct factual recall
2. **Application (60-70%):** Apply knowledge to clinical scenarios
3. **Synthesis (20-25%):** Integrate multiple concepts to solve complex problems

## High-Yield Content Areas

**Pathology Concepts:**
- Cellular injury and adaptation
- Inflammation and repair
- Neoplasia principles
- System-specific pathology

**Pharmacology Principles:**
- Drug mechanisms of action
- Pharmacokinetics (ADME)
- Drug interactions
- Toxicology and antidotes

**Microbiology Focus:**
- Virulence factors
- Antimicrobial mechanisms and resistance
- Immune evasion strategies
- Characteristic presentations

**Biochemistry Integration:**
- Metabolic pathway disorders
- Enzyme deficiencies
- Genetic diseases
- Nutritional deficiencies

## Strategic Preparation

**Evidence-Based Approaches:**

**Active Learning:**
- Practice questions (10,000+ recommended)
- Spaced repetition flashcards
- Teaching concepts to peers (Feynman technique)

**Resource Integration:**
| Resource | Primary Use |
|----------|-------------|
| First Aid | Comprehensive review, annotation |
| UWorld | Question practice, rationales |
| Pathoma | Pathology foundation |
| Sketchy | Visual mnemonics |
| Boards and Beyond | Conceptual understanding |

**Study Schedule Considerations:**
- Dedicated study period: 4-8 weeks typical
- Daily practice questions: 40-80 questions
- Content review: 4-6 hours daily
- Review weak areas: 2 hours daily
- Regular breaks and self-care

## Score Interpretation (Historical Context)

Prior to pass/fail:
- Mean score: ~230
- Standard deviation: ~20
- Competitive specialties: 240+
- Pass threshold: 196

**Current Implications:**
- Pass/fail removes numeric comparison
- Residency programs emphasize other factors:
  - Clinical grades
  - Research experience
  - Letters of recommendation
  - Personal statement
  - Step 2 CK score (now more important)

## Common Pitfalls

1. **Over-reliance on passive learning**
   - Reading without active recall
   - Watching videos without practice

2. **Neglecting weak areas**
   - Avoiding difficult subjects
   - Not addressing knowledge gaps

3. **Burnout**
   - Excessive study hours
   - Ignoring mental health
   - Social isolation`,
      keyTerms: [
        { term: 'spaced repetition', definition: 'A learning technique where information is reviewed at increasing intervals to optimize long-term retention' },
        { term: 'ADME', definition: 'Absorption, Distribution, Metabolism, Excretion - the four processes determining drug pharmacokinetics' },
        { term: 'Bloom\'s taxonomy', definition: 'A framework classifying learning objectives from basic recall to higher-order thinking like analysis and synthesis' },
        { term: 'high-yield', definition: 'Topics frequently tested on exams with high probability of appearing on the actual test' },
        { term: 'dedicated study period', definition: 'A focused time, typically 4-8 weeks, devoted exclusively to exam preparation' },
      ],
      analogies: [
        'UWorld questions are like flight simulators - they create realistic scenarios to practice decision-making before the real test.',
        'First Aid is like a detailed map - it shows you all the important destinations but doesn\'t explain how to get there.',
        'Spaced repetition is like watering a plant regularly - consistent small doses help knowledge grow better than flooding it all at once.',
      ],
      examples: [
        'A student analyzes their UWorld performance, noting 45% accuracy in renal physiology, and dedicates extra time to reviewing nephron function and fluid balance.',
        'During dedicated study, a student completes 2 UWorld blocks daily, reviews incorrect answers thoroughly, and uses Anki for topics they struggle to remember.',
      ],
      patientCounselingPoints: [
        'The extensive preparation medical students undergo helps ensure they have comprehensive knowledge to care for patients',
        'The shift to pass/fail reflects a recognition that numerical scores alone do not determine clinical competence',
      ],
    },

    4: {
      level: 4,
      summary: 'USMLE Step 1 requires mastery of foundational sciences through integration of basic mechanisms with clinical presentations. Optimal preparation involves evidence-based learning strategies, comprehensive resource utilization, and maintenance of wellness during the dedicated study period.',
      explanation: `## Advanced Step 1 Preparation Framework

USMLE Step 1 demands not just content knowledge but the ability to apply basic science principles to clinical scenarios. Success requires understanding mechanism over memorization.

## Examination Architecture

**Item Development:**
- Questions created by practicing physicians and basic scientists
- Reviewed for psychometric validity
- Field-tested before operational use
- Referenced to peer-reviewed literature

**Question Anatomy:**
| Component | Purpose |
|-----------|---------|
| Patient stem | Clinical context |
| Lead-in | What is being asked |
| Correct answer | Best response |
| Distractors | Plausible but incorrect options |

**Difficulty Distribution:**
- Easy (25-30%): Test fundamental concepts
- Medium (50-55%): Require application
- Hard (15-20%): Complex integration

## Content Mastery Strategies

**Pathophysiology Integration:**
Understanding disease mechanisms enables answering novel questions:

1. **Etiology** → Risk factors, epidemiology
2. **Pathogenesis** → Molecular/cellular mechanisms
3. **Morphology** → Gross and microscopic findings
4. **Clinical manifestations** → Signs and symptoms
5. **Diagnosis** → Tests and findings
6. **Treatment** → Mechanism-based interventions

**Pharmacology Framework:**
Organize drugs by mechanism:
- Receptor agonists/antagonists
- Enzyme inhibitors
- Channel blockers
- Transporter inhibitors
- Structural analogs

**Microbiology Organization:**
Pattern recognition by organism:
- Morphology and staining
- Virulence factors
- Transmission
- Clinical syndrome
- Diagnosis
- Treatment
- Prevention

## Evidence-Based Study Methods

**Active Recall:**
- Testing effect improves retention 50% over re-reading
- Practice retrieving information without looking at notes
- Explain concepts aloud (Feynman technique)

**Interleaving:**
- Mix topics during study sessions
- Improves discrimination between similar concepts
- Better long-term retention than blocked practice

**Elaborative Interrogation:**
- Ask "why" and "how" questions
- Connect new information to existing knowledge
- Create meaningful associations

## Question Bank Analytics

**Performance Metrics:**
- Overall percentage correct
- Percentile rank vs. other users
- Subject-specific performance
- Time per question
- Question flag patterns

**Optimal Usage:**
- Tutor mode initially for learning
- Timed mode as exam approaches
- System-based organization vs. random
- Review incorrect AND correct answers
- Create personal "missed question" list

## Dedicated Period Optimization

**Sample 6-Week Schedule:**

| Week | Focus | Questions/Day |
|------|-------|---------------|
| 1-2 | Content review by system | 40 |
| 3-4 | Integration and weak areas | 60 |
| 5-6 | Practice exams and review | 80 |

**Daily Structure:**
- 8 AM: Morning review
- 9 AM-12 PM: Content study
- 12-1 PM: Lunch and break
- 1-4 PM: Practice questions
- 4-5 PM: Question review
- 5-7 PM: Evening review
- 7+ PM: Rest and recovery

## Assessment Tools

**Self-Assessment Exams:**
| Exam | Timing | Purpose |
|------|--------|---------|
| NBME Forms | Throughout | Track progress |
| UWorld Self-Assessment | Mid-study | Predict score |
| Free 120 | Final week | USMLE format exposure |

**Interpretation:**
- NBME scores correlate with actual performance
- Add 10-20 points for predicted score
- Track improvement over time
- Identify persistent weak areas

## Wellness and Performance

**Sleep:**
- 7-8 hours minimum
- Consistent sleep schedule
- Memory consolidation occurs during sleep

**Exercise:**
- 30 minutes daily
- Improves cognitive function
- Reduces stress hormones

**Nutrition:**
- Regular meals
- Adequate hydration
- Limit caffeine after 2 PM

**Social Support:**
- Study groups (limited)
- Regular check-ins with family/friends
- Professional support if needed

## Test Day Logistics

**Before Exam:**
- Schedule confirmation
- ID requirements
- Testing center location
- Practice run if possible

**During Exam:**
- Scheduled breaks between blocks
- Bring snacks and water
- Don't change answers without good reason
- Flag and return strategy

**Post-Exam:**
- Results in 3-4 weeks
- Processing immediately after normal
- Begin clinical rotations planning`,
      keyTerms: [
        { term: 'psychometric validity', definition: 'Statistical measures ensuring exam questions accurately measure the intended knowledge and skills' },
        { term: 'testing effect', definition: 'The finding that actively retrieving information enhances long-term retention more than passive review' },
        { term: 'interleaving', definition: 'Alternating between topics or skills during practice rather than studying each topic in isolation' },
        { term: 'elaborative interrogation', definition: 'A learning strategy involving generating explanations for facts and asking why relationships exist' },
        { term: 'NBME forms', definition: 'Practice exams created by the National Board of Medical Examiners that simulate actual USMLE content and difficulty' },
      ],
      analogies: [
        'The pathophysiology framework is like a story arc - etiology is the beginning, pathogenesis is the conflict, and treatment is the resolution.',
        'Question bank analytics are like a coach\'s game tape review - they show you exactly where you\'re strong and where you need more practice.',
        'Interleaving topics is like cross-training in sports - it builds more versatile skills than practicing the same thing repeatedly.',
      ],
      examples: [
        'A student notices their NBME scores improving from 180 to 210 over four practice exams, with persistent weakness in cardiovascular pharmacology requiring targeted review.',
        'During dedicated study, a student schedules their practice blocks at the same time as the actual exam, building stamina and circadian alignment.',
      ],
      patientCounselingPoints: [
        'The rigorous preparation for medical licensing exams ensures physicians have comprehensive knowledge to make diagnostic and treatment decisions',
        'Evidence-based study strategies used for board exams reflect the same principles physicians apply to clinical practice',
      ],
    },

    5: {
      level: 5,
      summary: 'USMLE Step 1 preparation at the expert level integrates cognitive science principles with comprehensive content mastery. The transition to pass/fail necessitates strategic focus on clinical preparation while maintaining foundational science competency for lifelong learning.',
      explanation: `## Expert-Level Step 1 Preparation

USMLE Step 1, despite its pass/fail status, remains foundational for clinical practice. Expert preparation integrates learning science with strategic content review.

## Examination Psychometrics

**Item Response Theory (IRT):**
- Questions calibrated by difficulty
- Adaptive difficulty through form construction
- Equating processes ensure score comparability
- Standard error of measurement: ~6-8 points historically

**Content Validity:**
- Blueprint developed with practicing physicians
- Regular job analysis studies
- Alignment with core curriculum competencies
- Integration with ACGME milestones

## Cognitive Load Management

**Working Memory Optimization:**
- Limit new concepts per study session
- Use schemas to organize information
- External cognitive aids (notes, diagrams)
- Regular consolidation periods

**Schema Development:**
Build robust mental models:
1. **Prototype cases** - Classic presentations
2. **Illness scripts** - Disease frameworks
3. **Semantic networks** - Concept connections
4. **Procedural knowledge** - Diagnostic algorithms

## Advanced Learning Strategies

**Retrieval Practice Optimization:**
| Technique | Application |
|-----------|-------------|
| Free recall | End of study session review |
| Cued recall | Flashcard systems |
| Recognition | Multiple choice practice |
| Spaced retrieval | Increasing intervals |

**Generation Effect:**
- Creating answers improves retention vs. reading
- Writing question explanations
- Teaching concepts to others
- Creating mnemonics and associations

**Dual Coding:**
- Combine verbal and visual information
- Sketch mechanisms
- Use diagrams liberally
- Create mental imagery

## Resource Integration Framework

**Primary Sources:**
- Textbooks for depth (Robbins, Costanzo)
- Guidelines for current standards
- Research literature for mechanisms

**Secondary Sources:**
- Review books (First Aid)
- Question banks (UWorld)
- Video resources (Pathoma, Boards and Beyond)

**Tertiary Sources:**
- Study guides and summaries
- Peer-created resources
- Anki community decks

**Integration Strategy:**
1. Learn from primary/video resources
2. Synthesize in review books
3. Test with questions
4. Reinforce with spaced repetition

## Performance Prediction

**Predictive Factors:**
| Factor | Correlation |
|--------|-------------|
| UWorld % correct | 0.7-0.8 |
| NBME practice exams | 0.8-0.9 |
| MCAT score | 0.5-0.6 |
| Preclinical GPA | 0.4-0.5 |

**Score Estimation:**
- NBME + 10-20 points (historically)
- UWorld first-pass % correlates with outcome
- Self-assessment exams most predictive

## Post-Pass/Fail Landscape

**Residency Application Implications:**

**What matters more now:**
- Step 2 CK score
- Clinical grades (especially core rotations)
- Research productivity
- Letters of recommendation
- Personal statement quality
- Medical Student Performance Evaluation (MSPE)
- Extracurricular leadership

**Strategic Adjustments:**
- Maintain strong Step 1 preparation
- Begin Step 2 CK preparation earlier
- Invest in research and clinical experiences
- Develop meaningful relationships for letters

## Specialty-Specific Considerations

**Highly Competitive Specialties:**
- Step 2 CK score elevated in importance
- Research expectations increased
- Sub-internships more critical
- Away rotations still valuable

**Primary Care and Less Competitive:**
- Holistic review emphasized
- Community involvement valued
- Geographic considerations important
- Mission alignment matters

## Institutional Preparation Support

**Curriculum Integration:**
- Longitudinal board preparation
- Weekly practice questions
- System-based review sessions
- NBME shelf exam preparation

**Faculty Support:**
- Content expert sessions
- Learning specialist consultation
- Wellness resources
- Peer tutoring programs

## Lifelong Learning Foundation

Step 1 preparation establishes:
- Evidence-based study habits
- Self-assessment capabilities
- Resource evaluation skills
- Time management strategies

**Continuing Medical Education:**
- Board recertification
- Maintenance of certification
- Self-directed learning
- Practice improvement

## Common Failure Patterns

**Knowledge Gaps:**
- Weak foundational understanding
- Superficial learning without depth
- Neglected content areas

**Test-Taking Issues:**
- Poor time management
- Answer-changing habits
- Test anxiety interference

**Preparation Problems:**
- Insufficient practice questions
- Passive study methods
- Burnout and fatigue

**Remediation Strategies:**
- Diagnostic assessment
- Targeted content review
- Test-taking skills coaching
- Mental health support`,
      keyTerms: [
        { term: 'Item Response Theory', definition: 'A psychometric framework used to design and score standardized tests, accounting for item difficulty and discrimination' },
        { term: 'cognitive load', definition: 'The total amount of mental effort being used in working memory during learning' },
        { term: 'schema', definition: 'An organized pattern of thought or knowledge that helps categorize and interpret new information' },
        { term: 'generation effect', definition: 'The memory benefit of actively producing information rather than passively reading it' },
        { term: 'dual coding', definition: 'Learning theory suggesting information is better retained when presented both verbally and visually' },
        { term: 'MSPE', definition: 'Medical Student Performance Evaluation - the Dean\'s letter summarizing student performance for residency applications' },
      ],
      clinicalNotes: `Expert perspective on Step 1 preparation:

1. **Foundation vs. Score:** Even with pass/fail, Step 1 content forms the mechanistic understanding essential for clinical reasoning. Invest in true learning, not just passing.

2. **Learning Science Application:** The most successful students apply evidence-based learning strategies consistently. Retrieval practice and spaced repetition outperform re-reading and highlighting.

3. **Resource Efficiency:** Quality over quantity. Deep engagement with core resources beats superficial coverage of many. First Aid + UWorld + one pathology resource forms a strong foundation.

4. **Self-Regulation:** The dedicated period is a marathon, not a sprint. Sustainable study schedules with adequate rest outperform excessive hours leading to burnout.

5. **Step 2 CK Planning:** Begin preparing mentally for Step 2 CK during rotations. Clinical experience will reinforce Step 1 knowledge while building clinical reasoning.

6. **Professionalism Foundation:** The discipline, self-assessment, and continuous improvement developed during Step 1 preparation are the same skills required for lifelong competency maintenance.

7. **Seeking Help:** Students struggling with preparation should seek assistance early - learning specialists, peer tutoring, and faculty support are available and effective.

8. **Wellness Priority:** Burnout during preparation predicts poor performance. Adequate sleep, exercise, and social connection are not luxuries but necessities for cognitive function.`,
    },
  },

  media: [
    {
      id: 'step1-content-blueprint',
      type: 'diagram',
      filename: 'step1-content-blueprint.svg',
      title: 'USMLE Step 1 Content Blueprint',
      description: 'Visual breakdown of exam content areas and their relative weights',
    },
    {
      id: 'step1-study-timeline',
      type: 'diagram',
      filename: 'step1-study-timeline.svg',
      title: 'Recommended Step 1 Study Timeline',
      description: 'Sample study schedule for dedicated preparation period',
    },
  ],

  citations: [
    {
      id: 'usmle-step1-content-outline',
      type: 'website',
      title: 'USMLE Step 1 Content Description and General Information',
      source: 'USMLE.org',
      url: 'https://www.usmle.org/step-1',
      accessedDate: '2025-01-28',
    },
    {
      id: 'pass-fail-announcement',
      type: 'article',
      title: 'Change to Pass/Fail Score Reporting for Step 1',
      authors: ['USMLE Policy Committee'],
      source: 'USMLE.org',
      url: 'https://www.usmle.org/announcements',
      accessedDate: '2025-01-28',
    },
    {
      id: 'learning-strategies-research',
      type: 'article',
      title: 'Improving Students\' Learning With Effective Learning Techniques',
      authors: ['Dunlosky, J.', 'et al.'],
      source: 'Psychological Science in the Public Interest',
      accessedDate: '2025-01-28',
    },
  ],

  crossReferences: [
    { targetId: 'education-step1-study-strategies', targetType: 'concept', relationship: 'related', label: 'Step 1 Study Strategies' },
    { targetId: 'education-usmle-step2-overview', targetType: 'concept', relationship: 'sibling', label: 'USMLE Step 2 Overview' },
    { targetId: 'education-spaced-repetition', targetType: 'concept', relationship: 'related', label: 'Spaced Repetition Learning' },
    { targetId: 'education-effective-study-methods', targetType: 'concept', relationship: 'related', label: 'Effective Study Methods' },
  ],

  tags: {
    systems: ['medical-education'],
    topics: ['USMLE', 'Step 1', 'board exams', 'medical licensing', 'exam preparation'],
    keywords: ['USMLE Step 1', 'medical boards', 'licensing exam', 'pass fail', 'medical student', 'preclinical', 'First Aid', 'UWorld'],
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

export default step1Overview;
