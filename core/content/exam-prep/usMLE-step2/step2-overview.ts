/**
 * USMLE Step 2 CK Overview - Comprehensive Guide to the Clinical Knowledge Exam
 *
 * Educational content covering USMLE Step 2 CK structure, content,
 * scoring, and preparation strategies for clinical medical students.
 */

import { EducationalContent } from '../../types';

export const step2Overview: EducationalContent = {
  id: 'education-usmle-step2-overview',
  type: 'concept',
  name: 'USMLE Step 2 CK Overview',
  alternateNames: ['Step 2 CK', 'Step 2 Clinical Knowledge', 'USMLE Step 2', 'Boards Step 2'],

  levels: {
    1: {
      level: 1,
      summary: 'USMLE Step 2 CK is a test medical students take during their third or fourth year. It tests what they have learned while working with real patients in hospitals and clinics.',
      explanation: `## What is USMLE Step 2 CK?

Step 2 CK (Clinical Knowledge) is a big test that medical students take after they start working with real patients. CK stands for "Clinical Knowledge" - the things doctors need to know to take care of patients.

**Why is it important?**
- It shows you know how to diagnose and treat diseases
- You need to pass it to become a doctor
- Your score helps you get into residency (more doctor training)

## What Does the Test Cover?

The test asks about:
- **Diagnosing diseases** - figuring out what's wrong with patients
- **Treating patients** - choosing the right medicines and treatments
- **Preventing problems** - keeping people healthy
- **Emergency care** - handling serious, urgent situations

## The Questions

The questions describe patient cases:
- A patient comes in with certain symptoms
- You have to figure out what's wrong
- You choose the best treatment or next step

## When Do Students Take It?

- Usually during the third or fourth year of medical school
- After they have worked with patients in different areas of medicine
- Areas include: internal medicine, surgery, pediatrics, OB/GYN, psychiatry

## The Score

Unlike Step 1 (which is pass/fail), Step 2 CK gives you a number score:
- The score is important for getting into residency
- Higher scores help for competitive specialties
- Average scores are around 245-250

## Preparing for Step 2 CK

Students study using:
- Practice questions about patient cases
- Review of what they learned during rotations
- Study guides and resources`,
      keyTerms: [
        { term: 'Step 2 CK', definition: 'Clinical Knowledge exam - tests what medical students know about diagnosing and treating patients' },
        { term: 'residency', definition: 'Additional training after medical school where doctors specialize in a specific area of medicine' },
        { term: 'clinical rotation', definition: 'Time spent working with patients in different areas of medicine like surgery or pediatrics' },
      ],
      analogies: [
        'If Step 1 is like learning the rules of driving, Step 2 CK is like taking the driving test where you actually drive the car.',
        'Step 2 CK is like a job interview that tests if you are ready to start working as a doctor.',
      ],
      examples: [
        'A question might describe a patient with chest pain and ask what tests to order and what diagnosis is most likely.',
        'A student studies for Step 2 CK by reviewing the patients they saw during their medicine rotation.',
      ],
      patientCounselingPoints: [
        'Step 2 CK ensures that doctors know how to diagnose and treat common medical problems',
        'The clinical rotations before Step 2 CK give medical students hands-on experience with real patients',
      ],
    },

    2: {
      level: 2,
      summary: 'USMLE Step 2 CK assesses clinical knowledge and application through patient-based scenarios. It covers all major medical specialties and has become increasingly important for residency applications since Step 1 became pass/fail.',
      explanation: `## USMLE Step 2 CK Fundamentals

Step 2 CK (Clinical Knowledge) evaluates the medical knowledge and clinical reasoning necessary for supervised patient care. It tests application of knowledge to clinical scenarios.

**Exam Structure:**
- 318 multiple choice questions (9 blocks of ~40 questions)
- 8 hours of testing time
- 45-60 minutes per block
- Computer-based testing at Prometric centers

## Content Areas

Questions are organized by clinical discipline:

| Discipline | Approximate Weight |
|------------|-------------------|
| Internal Medicine | 25-30% |
| Surgery | 10-15% |
| Pediatrics | 10-15% |
| Obstetrics/Gynecology | 10-15% |
| Psychiatry | 10-15% |
| Preventive Medicine/Epidemiology | 5-10% |
| Other (Emergency, Family, etc.) | 10-15% |

## Clinical Task Distribution

| Task | Percentage |
|------|------------|
| Diagnosis | 45-50% |
| Management/Treatment | 30-35% |
| Health Maintenance/Prevention | 15-20% |
| Pharmacotherapy | 10-15% |
| Prognosis/Outcomes | 5-10% |

## Question Format

**Typical Structure:**
- Patient demographics (age, gender)
- Chief complaint
- History of present illness
- Physical exam findings
- Lab/imaging results (when relevant)
- Question asking for diagnosis, next step, or treatment

**Types of Questions:**
- Single best answer
- "Next best step" questions
- "Most likely diagnosis" questions
- "Best initial management" questions

## Scoring

**Score Report:**
- Three-digit score (mean ~245, SD ~15)
- Two-digit score (used less commonly)
- Pass/fail status (minimum passing ~214)

**Current Importance:**
Since Step 1 became pass/fail, Step 2 CK scores have become more important for:
- Residency application screening
- Competitive specialty consideration
- Program ranking comparisons

## Timing and Eligibility

**When to Take:**
- After completing core clinical rotations
- Typically third or fourth year
- Some take before clinical rotations (less common)

**Eligibility:**
- Must be enrolled in or graduated from accredited medical school
- No attempt limits

## Preparation Resources

**Question Banks:**
- UWorld Step 2 CK
- Amboss
- Kaplan Qbank

**Review Resources:**
- Step Up to Medicine
- OME (Online MedEd) videos
- Divine Intervention podcasts
- First Aid for Step 2 CK`,
      keyTerms: [
        { term: 'clinical reasoning', definition: 'The thought process used by healthcare providers to diagnose and manage patient problems' },
        { term: 'chief complaint', definition: 'The main reason a patient seeks medical attention, stated in their own words' },
        { term: 'next best step', definition: 'The most appropriate immediate action to take in a clinical scenario' },
        { term: 'core rotations', definition: 'Required clinical rotations in the major specialties: medicine, surgery, OB/GYN, pediatrics, psychiatry' },
      ],
      analogies: [
        'Step 2 CK questions are like case presentations on rounds - you get patient information and must make clinical decisions.',
        'The shift in importance from Step 1 to Step 2 CK is like a job interview focusing more on practical skills than academic knowledge.',
      ],
      examples: [
        'A Step 2 CK question presents a 55-year-old with crushing chest pain radiating to the jaw, sweating, and nausea, asking for the most appropriate initial intervention.',
        'Students often take Step 2 CK after their medicine and surgery rotations to apply what they learned clinically.',
      ],
      patientCounselingPoints: [
        'Step 2 CK ensures doctors can translate their knowledge into clinical decisions for patient care',
        'The exam tests the skills doctors use every day in hospitals and clinics',
      ],
    },

    3: {
      level: 3,
      summary: 'USMLE Step 2 CK evaluates clinical reasoning across medical specialties through patient-centered vignettes. With Step 1 now pass/fail, Step 2 CK scores serve as a primary metric for residency selection. Optimal preparation integrates clinical experience with systematic content review.',
      explanation: `## USMLE Step 2 CK Comprehensive Overview

Step 2 CK assesses the clinical knowledge and patient care skills required for supervised practice. The exam emphasizes clinical application over factual recall.

## Exam Architecture

**Question Distribution by Setting:**
| Setting | Percentage |
|---------|------------|
| Outpatient/Ambulatory | 40-45% |
| Emergency Department | 20-25% |
| Inpatient | 25-30% |
| Intensive Care | 5-10% |

**Patient Age Distribution:**
| Age Group | Percentage |
|-----------|------------|
| Adult (18-65) | 50-55% |
| Geriatric (>65) | 15-20% |
| Pediatric (<18) | 15-20% |
| Adolescent | 5-10% |

## Clinical Reasoning Framework

**Question Approach:**
1. **Identify the clinical presentation** - Key symptoms, signs, demographics
2. **Generate differential diagnosis** - Most likely vs. worst-case
3. **Determine what's being asked** - Diagnosis, workup, or management
4. **Apply clinical decision rules** - Evidence-based guidelines
5. **Select best answer** - Most appropriate given the scenario

**Common Question Patterns:**

| Pattern | What They're Testing |
|---------|---------------------|
| Classic presentation | Pattern recognition |
| Atypical presentation | Flexible thinking |
| Red flag symptoms | Emergency recognition |
| Step-wise management | Algorithm knowledge |
| Prevention/screening | Guidelines awareness |

## High-Yield Content Areas

**Internal Medicine:**
- Cardiovascular emergencies (ACS, CHF, arrhythmias)
- Pulmonary diseases (COPD, asthma, pneumonia, PE)
- GI disorders (GI bleeding, hepatitis, pancreatitis)
- Endocrine (diabetes management, thyroid disorders)
- Renal (AKI, CKD, electrolyte disorders)
- Infectious disease (sepsis, HIV, common infections)

**Surgery:**
- Acute abdomen evaluation
- Trauma management (ATLS principles)
- Pre/post-operative care
- Surgical emergencies
- Breast and GI malignancy screening/staging

**Pediatrics:**
- Well-child visits and milestones
- Common pediatric infections
- Congenital conditions
- Pediatric emergencies
- Vaccination schedule

**OB/GYN:**
- Prenatal care and screening
- Labor and delivery complications
- Gynecologic emergencies
- Contraception
- Breast and cervical cancer screening

**Psychiatry:**
- Major psychiatric disorders (depression, anxiety, schizophrenia)
- Substance use disorders
- Emergency psychiatry (suicidality, acute psychosis)
- Medication side effects

## Strategic Preparation

**Timeline:**
| Phase | Duration | Focus |
|-------|----------|-------|
| During rotations | 12-18 months | Build clinical foundation |
| Pre-dedicated | 4-8 weeks | Content gaps, question practice |
| Dedicated | 2-4 weeks | Intensive review, practice exams |

**Question Bank Strategy:**
1. **During rotations:** Questions related to current rotation
2. **Pre-dedicated:** System-based review
3. **Dedicated:** Random, timed blocks

**Resource Integration:**
- UWorld: Primary question resource
- OME/Divine: Conceptual understanding
- Step Up to Medicine: Quick reference
- First Aid Step 2 CK: Comprehensive review

## Score Optimization

**Factors Associated with Higher Scores:**
- Strong clinical rotation grades
- Systematic UWorld completion
- Practice exam performance
- Time management skills

**Score Interpretation:**
- Mean: ~245
- Standard deviation: ~15
- Competitive specialties often want: 250+
- Most residencies accept: >230

**Practice Exam Correlation:**
| Assessment | Correlation |
|------------|-------------|
| UWorld % correct | Strong |
| NBME forms | Strong |
| UWorld self-assessment | Very strong |

## Clinical Application

**Integrating Rotation Experience:**
- Recognize patterns from real patients
- Apply evidence-based guidelines
- Understand typical disease presentations
- Learn from clinical reasoning discussions

**Transition to Residency:**
- Step 2 CK validates clinical readiness
- Scores predict early residency performance
- Demonstrates knowledge integration`,
      keyTerms: [
        { term: 'clinical vignette', definition: 'A patient case scenario presenting clinical information used in medical exam questions' },
        { term: 'differential diagnosis', definition: 'A list of possible diagnoses that could explain a patient\'s symptoms, ranked by likelihood' },
        { term: 'ATLS', definition: 'Advanced Trauma Life Support - standardized approach to trauma patient evaluation and management' },
        { term: 'evidence-based guidelines', definition: 'Clinical recommendations derived from systematic review of research evidence' },
        { term: 'dedicated period', definition: 'Focused study time devoted exclusively to exam preparation, typically 2-4 weeks for Step 2 CK' },
      ],
      analogies: [
        'Clinical vignettes are like mini-patient encounters where you must make decisions with limited information, just like real practice.',
        'The differential diagnosis process is like a detective narrowing down suspects based on clues.',
        'Step 2 CK preparation is like studying game film before a championship - you review patterns to recognize them in the moment.',
      ],
      examples: [
        'A student completing their medicine rotation does 20-30 UWorld internal medicine questions daily, reinforcing clinical concepts.',
        'During dedicated study, a student takes NBME practice exams weekly to track progress and identify weak areas.',
      ],
      patientCounselingPoints: [
        'Step 2 CK ensures physicians can integrate knowledge from different specialties when caring for patients',
        'The clinical focus of the exam reflects the real decision-making process doctors use daily',
      ],
    },

    4: {
      level: 4,
      summary: 'USMLE Step 2 CK requires integration of clinical knowledge across specialties with emphasis on evidence-based management. As the primary scored licensing exam, strategic preparation balances rotation experience with systematic review and practice testing.',
      explanation: `## Advanced Step 2 CK Framework

Step 2 CK evaluates clinical competency through complex patient scenarios requiring integration of diagnostic reasoning and management principles.

## Examination Psychometrics

**Item Development:**
- Questions written by practicing clinicians
- Based on real patient encounters
- Tested for validity and reliability
- Aligned with ACGME competencies

**Cognitive Levels:**
| Level | Percentage | Description |
|-------|------------|-------------|
| Recall | 10-15% | Direct knowledge |
| Application | 50-60% | Apply to scenarios |
| Synthesis | 25-35% | Integrate multiple concepts |

## Clinical Decision-Making Framework

**Diagnostic Reasoning:**
1. **Problem representation** - One-liner summarizing case
2. **Schema activation** - Match to known patterns
3. **Hypothesis testing** - Evaluate differentials
4. **Confirmation** - Select most supported diagnosis

**Management Principles:**
- Always address ABCs and urgent issues first
- Stabilize before detailed workup
- Treat empirically when appropriate
- Follow evidence-based guidelines

**Clinical Decision Rules:**
- PERC rule for PE
- HEART score for chest pain
- Ottawa ankle/knee rules
- CURB-65 for pneumonia
- Wells criteria

## Specialty-Specific Strategies

**Internal Medicine Approach:**
- Recognize symptom patterns
- Know risk stratification tools
- Understand stepwise management
- Master medication adjustments

**Surgery Approach:**
- Identify surgical emergencies
- Know pre/post-op management
- Understand wound/infection management
- Recognize complications

**Pediatrics Approach:**
- Age-appropriate differentials
- Developmental milestones
- Vaccination schedule mastery
- Fluid/medication dosing

**OB/GYN Approach:**
- Gestational age-appropriate management
- Labor stage recognition
- Emergency delivery complications
- Screening intervals

**Psychiatry Approach:**
- DSM-5 criteria
- Medication mechanisms/side effects
- Emergency management
- Safety assessment

## Evidence-Based Content

**Must-Know Guidelines:**
- USPSTF screening recommendations
- JNC hypertension guidelines
- ADA diabetes standards
- GOLD COPD guidelines
- AHA/ACC cardiovascular guidelines

**High-Yield Topics:**
| Topic | Why Important |
|-------|---------------|
| ACS management | Common, high-stakes |
| Sepsis protocols | Time-sensitive |
| Stroke algorithm | Thrombolytics window |
| DKA management | Common, complex |
| Medication toxicity | Safety focus |

## Question Analysis Techniques

**Stem Analysis:**
- Identify patient demographics (age, sex)
- Note setting (ED, clinic, ICU)
- Extract key clinical features
- Recognize red flags

**Answer Elimination:**
- Remove clearly incorrect options
- Identify "almost right" distractors
- Compare remaining choices
- Select best-supported answer

**Common Traps:**
| Trap | Strategy |
|------|----------|
| Premature closure | Consider alternatives |
| Anchoring | Reassess with new info |
| Availability bias | Use systematic approach |
| Test-taking tricks | Focus on clinical logic |

## Preparation Optimization

**Question Bank Mastery:**
- Complete UWorld at least once (ideally twice)
- Review all explanations thoroughly
- Track performance by topic
- Create weakness-targeted review

**Integration Strategy:**
| Resource | Purpose | Timing |
|----------|---------|--------|
| UWorld | Question practice | Throughout |
| OME/Divine | Conceptual gaps | As needed |
| First Aid | Quick review | Final weeks |
| Practice exams | Score prediction | Monthly |

**Dedicated Period Schedule:**
- Week 1: Weak area focused review
- Week 2: System-based question blocks
- Week 3: Random blocks, practice exams
- Week 4: Review, light studying

## Performance Metrics

**Score Prediction:**
- UWorld overall %: Strong predictor
- NBME forms: Add ~10-15 points
- UWorld self-assessment: Most accurate

**Optimization Targets:**
| Metric | Target |
|--------|--------|
| UWorld % | >70% |
| Time/question | <90 seconds |
| NBME practice | >240 |
| Improvement trend | Positive |

## Residency Application Context

**Score Utilization:**
- Primary objective metric post-Step 1 P/F
- Screening filter for many programs
- Comparison across applicants

**Specialty Expectations:**
| Specialty | Typical Range |
|-----------|---------------|
| Dermatology | 255+ |
| Orthopedics | 250+ |
| Internal Medicine | 240+ |
| Family Medicine | 230+ |
| Pediatrics | 235+ |

**Holistic Review:**
- Score is one component
- Clinical grades matter
- Research, letters, interviews`,
      keyTerms: [
        { term: 'problem representation', definition: 'A concise summary of a patient case that captures key clinical features to facilitate pattern recognition' },
        { term: 'clinical decision rule', definition: 'A validated tool that uses clinical findings to guide diagnostic or management decisions' },
        { term: 'premature closure', definition: 'Cognitive error of accepting a diagnosis before adequately considering alternatives' },
        { term: 'anchoring bias', definition: 'Tendency to rely too heavily on initial information when making subsequent judgments' },
        { term: 'USPSTF', definition: 'United States Preventive Services Task Force - provides evidence-based screening and prevention recommendations' },
      ],
      analogies: [
        'Problem representation is like writing a newspaper headline - it captures the essential story in a few words.',
        'Clinical decision rules are like GPS navigation - they guide you through complex decisions using validated pathways.',
        'Avoiding cognitive biases is like checking your blind spots while driving - systematic habits prevent errors.',
      ],
      examples: [
        'A student creates a problem representation: "65-year-old male smoker with acute dyspnea, pleuritic chest pain, and unilateral leg swelling" - immediately suggesting PE.',
        'Using the Wells criteria, a student calculates a moderate-probability score and recommends D-dimer testing before CT angiography.',
      ],
      patientCounselingPoints: [
        'Clinical decision rules help physicians make consistent, evidence-based decisions for patient safety',
        'The rigorous testing process ensures physicians can recognize patterns and avoid cognitive errors',
      ],
    },

    5: {
      level: 5,
      summary: 'Expert-level Step 2 CK preparation integrates clinical experience with evidence-based medicine principles. As the primary differentiator in residency selection post-Step 1 pass/fail, strategic optimization requires mastery of clinical reasoning, guideline knowledge, and test-taking efficiency.',
      explanation: `## Professional-Level Step 2 CK Mastery

Step 2 CK at the expert level requires synthesis of clinical experience with systematic knowledge, applied through sophisticated reasoning frameworks.

## Clinical Reasoning Science

**Dual-Process Theory:**
| System 1 | System 2 |
|----------|----------|
| Pattern recognition | Analytical reasoning |
| Fast, automatic | Slow, deliberate |
| Experience-based | Rule-based |
| Error-prone | Resource-intensive |

**Optimal Integration:**
- Use System 1 for initial hypothesis generation
- Engage System 2 for verification
- Recognize when to switch
- Avoid cognitive biases

**Illness Script Development:**
| Component | Content |
|-----------|---------|
| Epidemiology | Who gets this disease |
| Pathophysiology | How it develops |
| Time course | Acute vs. chronic |
| Clinical features | Symptoms and signs |
| Diagnosis | Key tests |
| Management | Treatment approach |

## Evidence Hierarchy Application

**Levels of Evidence:**
1. Systematic reviews/meta-analyses
2. Randomized controlled trials
3. Cohort studies
4. Case-control studies
5. Case series/expert opinion

**Guideline Implementation:**
- Know major society recommendations
- Understand grade of evidence
- Recognize when guidelines conflict
- Apply to individual patients

## Advanced Question Strategies

**Diagnostic Question Types:**
| Type | Approach |
|------|----------|
| Most likely diagnosis | Pattern match, typical features |
| Cannot miss diagnosis | Consider worst-case first |
| Confirm diagnosis | Best single test |
| Rule out diagnosis | High sensitivity test |

**Management Question Types:**
| Type | Approach |
|------|----------|
| Initial management | Stabilization first |
| Best treatment | First-line therapy |
| Next step | Most appropriate now |
| Long-term management | Chronic care principles |

**Special Situations:**
- Pregnant patients: Fetal considerations
- Pediatric patients: Age-appropriate care
- Geriatric patients: Functional status
- End-of-life: Goals of care

## Specialty Integration

**Cross-Specialty Reasoning:**
- Medical conditions in surgical patients
- Psychiatric manifestations of medical illness
- Pediatric presentations of adult diseases
- Obstetric complications affecting multiple systems

**Consultation Indications:**
- Know when to involve other specialties
- Understand urgent vs. routine referral
- Recognize limitations of primary management

## Performance Psychology

**Test-Day Optimization:**
- Circadian alignment with exam time
- Stress management techniques
- Energy maintenance through blocks
- Recovery between sections

**Cognitive Load Management:**
- Eliminate extraneous processing
- Focus on clinical reasoning
- Trust preparation
- Avoid second-guessing

**Decision Fatigue Mitigation:**
- Consistent question approach
- Scheduled breaks
- Nutritional support
- Movement between blocks

## Score Maximization Strategies

**High-Yield Focus Areas:**
| Area | ROI |
|------|-----|
| Emergency presentations | High |
| Common conditions | High |
| Prevention/screening | Moderate |
| Rare diseases | Low |

**Time Investment:**
| Activity | Value |
|----------|-------|
| UWorld + review | Highest |
| Practice exams | High |
| Video resources | Moderate |
| Reading textbooks | Lower |

## Post-Step 1 P/F Landscape

**Strategic Implications:**
- Step 2 CK is now primary objective metric
- Score matters more for competitive specialties
- Timing affects application strength
- Consider taking earlier in fourth year

**Application Timeline:**
- Score needed for ERAS submission
- Results take 3-4 weeks
- Plan testing accordingly
- Consider backup timeline

## Transition to Clinical Practice

**Skills Validated:**
- Clinical decision-making
- Evidence application
- Patient safety awareness
- Systems-based thinking

**Residency Preparation:**
- Step 2 CK knowledge directly applicable
- Reasoning frameworks transfer
- Guidelines become daily tools
- Pattern recognition essential

## Continuous Improvement

**Post-Exam Development:**
- Identify knowledge gaps from practice
- Continue clinical reasoning refinement
- Build specialty-specific expertise
- Prepare for Step 3 and boards

**Lifelong Learning Foundation:**
- Self-assessment skills
- Evidence evaluation
- Guideline implementation
- Competency maintenance`,
      keyTerms: [
        { term: 'dual-process theory', definition: 'Cognitive framework describing two systems of thinking: fast intuitive (System 1) and slow analytical (System 2)' },
        { term: 'illness script', definition: 'A mental framework organizing knowledge about a disease including epidemiology, pathophysiology, presentation, and management' },
        { term: 'decision fatigue', definition: 'The deteriorating quality of decisions made after prolonged decision-making activity' },
        { term: 'ERAS', definition: 'Electronic Residency Application Service - the platform for residency applications' },
        { term: 'systems-based thinking', definition: 'Approach to healthcare that considers how system factors affect patient care and outcomes' },
      ],
      clinicalNotes: `Expert perspective on Step 2 CK preparation:

1. **Clinical Integration:** The strongest preparation comes from actively engaging in clinical rotations. Every patient encounter is Step 2 CK studying. Ask "why" constantly during rounds.

2. **Pattern Recognition:** Build robust illness scripts through deliberate practice. When you see a patient, consciously compare to your mental database. The exam rewards pattern recognition.

3. **Guideline Mastery:** Know USPSTF screening, JNC for hypertension, ADA for diabetes, and major specialty guidelines. Many questions directly test guideline knowledge.

4. **Question Quality:** Understanding why answers are right or wrong matters more than volume. Fifty questions thoroughly reviewed beats 100 rushed through.

5. **Clinical Reasoning:** The exam tests clinical thinking, not just knowledge. Practice generating differentials and justifying management decisions.

6. **Timing Strategy:** With Step 1 pass/fail, consider taking Step 2 CK earlier to have scores for ERAS. Some specialties screen heavily on this score.

7. **Emergency Bias:** The exam has significant emergency medicine content. Know your ABCs, common emergencies, and time-sensitive interventions cold.

8. **Test-Day Performance:** You have significant knowledge by this point. Test-day success depends on managing fatigue, maintaining focus, and trusting your preparation.

9. **Score Context:** While scores matter more now, they remain one component of holistic review. Strong clinical evaluations, meaningful experiences, and compelling narratives still matter.

10. **Residency Connection:** Step 2 CK content directly prepares you for intern year. What you learn for this exam will be used daily in residency.`,
    },
  },

  media: [
    {
      id: 'step2ck-content-breakdown',
      type: 'diagram',
      filename: 'step2ck-content-breakdown.svg',
      title: 'Step 2 CK Content Distribution',
      description: 'Visual breakdown of exam content by specialty and clinical task',
    },
    {
      id: 'clinical-reasoning-framework',
      type: 'diagram',
      filename: 'clinical-reasoning-framework.svg',
      title: 'Clinical Reasoning Framework',
      description: 'Systematic approach to clinical decision-making for exam questions',
    },
  ],

  citations: [
    {
      id: 'usmle-step2ck-content',
      type: 'website',
      title: 'USMLE Step 2 CK Content Description',
      source: 'USMLE.org',
      url: 'https://www.usmle.org/step-2-ck',
      accessedDate: '2025-01-28',
    },
    {
      id: 'clinical-reasoning-literature',
      type: 'article',
      title: 'Clinical Reasoning in Medicine',
      authors: ['Croskerry, P.'],
      source: 'Cambridge Handbook of Thinking and Reasoning',
      accessedDate: '2025-01-28',
    },
  ],

  crossReferences: [
    { targetId: 'education-step2-clinical-skills', targetType: 'concept', relationship: 'related', label: 'Step 2 Clinical Skills' },
    { targetId: 'education-usmle-step1-overview', targetType: 'concept', relationship: 'sibling', label: 'USMLE Step 1 Overview' },
    { targetId: 'education-clerkship-overview', targetType: 'concept', relationship: 'related', label: 'Clinical Clerkship Overview' },
    { targetId: 'education-clinical-documentation', targetType: 'concept', relationship: 'related', label: 'Clinical Documentation' },
  ],

  tags: {
    systems: ['medical-education'],
    topics: ['USMLE', 'Step 2 CK', 'clinical knowledge', 'board exams', 'residency preparation'],
    keywords: ['Step 2 CK', 'clinical reasoning', 'medical boards', 'residency', 'clinical rotations'],
    clinicalRelevance: 'critical',
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

export default step2Overview;
