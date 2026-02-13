/**
 * Internal Medicine Clerkship - Clinical Rotations
 *
 * Educational content for the internal medicine clinical clerkship,
 * covering expectations, skills, and strategies for medical students.
 */

import { EducationalContent } from '../../types';

export const internalMedicineClerkship: EducationalContent = {
  id: 'clerkship-internal-medicine',
  type: 'concept',
  name: 'Internal Medicine Clerkship',
  alternateNames: ['Medicine Rotation', 'IM Clerkship', 'Internal Medicine Core'],

  levels: {
    1: {
      level: 1,
      summary: 'The internal medicine clerkship is where medical students learn to care for adults with medical problems like heart disease, diabetes, and infections in hospitals and clinics.',
      explanation: `## What Is Internal Medicine?

Internal medicine doctors, called "internists," take care of adults with medical problems. These are problems that don\'t need surgery - things like diabetes, heart disease, and infections.

## Where You Will Work

**In the Hospital:**
- Regular patient floors (wards)
- Intensive care units (for very sick patients)
- Emergency department (some rotations)

**In the Clinic:**
- Outpatient offices
- Same-day appointments
- Follow-up visits

## What You Will Do

**Daily Activities:**
- Check on your patients each morning
- Write notes about how they are doing
- Talk with patients and their families
- Present your patients to the medical team
- Learn from doctors and other students

**Skills You Will Learn:**
- Taking a complete health history
- Doing a physical exam
- Thinking through medical problems
- Writing medical notes
- Explaining things to patients

## Common Medical Problems You\'ll See

- Heart problems (heart failure, heart attacks)
- Lung problems (pneumonia, asthma)
- Diabetes and hormone problems
- Kidney disease
- Blood problems (anemia)
- Infections throughout the body

## Why This Rotation Matters

Internal medicine is one of the most important rotations because:
- You see a wide variety of conditions
- You learn how to think like a doctor
- Many other specialties build on internal medicine
- It helps you understand how the body works when things go wrong

## Tips for Doing Well

- Know your patients well - their history, medications, and current problems
- Read about your patients\' conditions
- Ask questions when you don\'t understand
- Be on time and prepared
- Show you care about your patients`,
      keyTerms: [
        { term: 'internist', definition: 'A doctor who specializes in caring for adults with medical (non-surgical) problems' },
        { term: 'ward', definition: 'A hospital area where patients stay in rooms during treatment' },
        { term: 'clinic', definition: 'A place where patients come for appointments rather than staying overnight' },
      ],
      analogies: [
        'An internist is like a detective - they gather clues from symptoms and tests to figure out what is wrong.',
        'The internal medicine rotation is like learning the trunk of a tree - it supports many branches (other specialties).',
      ],
      examples: [
        'You might care for a patient with diabetes who is in the hospital for an infection, learning how these problems affect each other.',
        'You could follow a patient with heart failure, learning about medications and daily weight checks to manage their condition.',
      ],
      patientCounselingPoints: [
        'Medical students are learning doctors who work under close supervision of experienced physicians.',
        'Students spend extra time with patients, which helps them learn while also giving patients more opportunity to ask questions.',
      ],
    },
    2: {
      level: 2,
      summary: 'The internal medicine clerkship develops clinical reasoning and comprehensive care skills for adult patients across inpatient and outpatient settings, requiring mastery of patient evaluation, documentation, and evidence-based management.',
      explanation: `## Clerkship Overview

**Duration:** 8-12 weeks
**Settings:**
| Setting | Time | Focus |
|---------|------|-------|
| Inpatient wards | 4-8 weeks | Acute illness management |
| Ambulatory clinic | 2-4 weeks | Chronic disease management |
| ICU (optional) | 1-2 weeks | Critical care exposure |

## Clinical Responsibilities

**Patient Load:**
- Typically 2-4 patients at a time
- Follow patients from admission to discharge
- Transition care to outpatient providers

**Daily Schedule:**
| Time | Activity |
|------|----------|
| 6:00-7:30 AM | Pre-round on your patients |
| 7:30-8:00 AM | Review labs and overnight events |
| 8:00-10:00 AM | Attending rounds |
| 10:00-12:00 PM | Complete notes and orders |
| 12:00-1:00 PM | Teaching conferences |
| 1:00-5:00 PM | Admissions, patient care |
| 5:00-6:00 PM | Sign-out preparation |

## Core Clinical Skills

**History Taking:**
- Chief complaint in patient\'s words
- History of present illness (HPI) with OLDCARTS
- Past medical history and medications
- Allergies with reactions
- Family and social history
- Review of systems

**Physical Examination:**
- Vital signs interpretation
- General appearance assessment
- Systematic examination from head to toe
- Focused exam based on complaint

**Clinical Documentation:**
- Admission H&P notes
- Daily progress notes
- Discharge summaries
- Procedure notes

## Common Conditions by System

**Cardiovascular:**
- Heart failure exacerbation
- Acute coronary syndromes
- Atrial fibrillation
- Hypertension

**Pulmonary:**
- Community-acquired pneumonia
- COPD exacerbation
- Pulmonary embolism
- Asthma

**Gastrointestinal:**
- GI bleeding
- Acute pancreatitis
- Cirrhosis complications
- Inflammatory bowel disease

**Renal:**
- Acute kidney injury
- Chronic kidney disease
- Electrolyte abnormalities

**Infectious Disease:**
- Sepsis
- Cellulitis
- Urinary tract infections
- C. difficile colitis

## Assessment Components

**Clinical Evaluation:**
- Patient interaction skills
- Clinical reasoning ability
- Physical examination technique
- Documentation quality
- Professionalism

**NBME Shelf Exam:**
- Multiple choice format
- Tests clinical knowledge
- Counts for 30-50% of grade

## Study Strategies

**High-Yield Resources:**
- Step Up to Medicine
- UWorld Step 2 CK questions
- Online Med Ed videos
- Case Files series

**Integration Approach:**
- Read about your patients\' conditions
- Review common presentations
- Practice explaining diagnoses to patients`,
      keyTerms: [
        { term: 'OLDCARTS', definition: 'Mnemonic for symptom assessment: Onset, Location, Duration, Characteristics, Aggravating/Alleviating factors, Radiation, Timing, Severity' },
        { term: 'H&P', definition: 'History and Physical - comprehensive documentation of patient assessment at admission' },
        { term: 'shelf exam', definition: 'Standardized NBME examination at the end of the clerkship' },
        { term: 'pre-rounding', definition: 'Checking on patients and gathering information before team rounds' },
      ],
      analogies: [
        'Pre-rounding is like doing your homework before class - it prepares you to participate meaningfully.',
        'The internal medicine team is like a sports team - everyone has a role and contributes to patient care.',
      ],
      examples: [
        'A student presents a patient with chest pain, discussing the differential diagnosis of heart attack, pneumonia, and pulmonary embolism.',
        'You write a daily progress note using the SOAP format to document your patient\'s changing condition and care plan.',
      ],
      patientCounselingPoints: [
        'Hospitalized patients may see multiple doctors; the internal medicine team coordinates this care.',
        'Understanding your medications and follow-up plan is crucial when leaving the hospital.',
      ],
    },
    3: {
      level: 3,
      summary: 'Internal medicine clerkship excellence requires sophisticated clinical reasoning, comprehensive management of complex patients, understanding of evidence-based guidelines, and effective interprofessional collaboration across the healthcare team.',
      explanation: `## Clinical Reasoning Development

**Diagnostic Frameworks:**

*Hypothetico-Deductive Reasoning:*
- Generate initial hypotheses from presenting complaint
- Gather data to confirm or refute each hypothesis
- Iteratively refine differential diagnosis
- Most common approach in complex cases

*Problem Representation:*
Transform clinical data into abstract categories:
- Semantic qualifiers (acute vs. chronic, severe vs. mild)
- Anatomic localization
- Pathophysiologic mechanism
- Clinical syndrome

**Differential Diagnosis Construction:**
| Approach | Application |
|----------|-------------|
| Anatomic | System-based consideration |
| Pathophysiologic | Disease mechanism categories |
| Clinical syndrome | Pattern matching |
| Mnemonic | VINDICATE, MUDPILES |

## Evidence-Based Management

**Major Guidelines:**
| Condition | Guideline Source |
|-----------|------------------|
| Heart failure | ACC/AHA |
| Hypertension | ACC/AHA |
| Diabetes | ADA |
| COPD | GOLD |
| Asthma | GINA |
| Lipids | ACC/AHA |

**Clinical Practice Integration:**
- Apply population evidence to individual patients
- Consider patient preferences and values
- Account for comorbidities
- Evaluate cost-effectiveness

## Complex Patient Management

**Multimorbidity Approach:**
- Prioritize problems by acuity and impact
- Consider medication interactions
- Align with patient goals
- Coordinate with specialists

**Care Transitions:**
- Admission medication reconciliation
- Discharge planning from day one
- Clear follow-up instructions
- Patient education and teach-back

## Interprofessional Collaboration

**Team Communication:**
| Role | Collaboration Focus |
|------|---------------------|
| Nursing | Patient status updates, care coordination |
| Pharmacy | Medication review, dosing optimization |
| Social work | Discharge planning, resources |
| Case management | Length of stay, transitions |
| Physical therapy | Mobility, safety assessment |

**Handoff Communication (I-PASS):**
- Illness severity
- Patient summary
- Action list
- Situation awareness
- Synthesis by receiver

## Advanced Physical Examination

**Cardiovascular:**
- Jugular venous pressure assessment
- Heart sound interpretation (S3, S4, murmurs)
- Point of maximal impulse localization

**Pulmonary:**
- Breath sound characterization
- Percussion techniques
- Dullness and egophony interpretation

**Abdominal:**
- Liver and spleen assessment
- Ascites detection
- Peritoneal signs

## Documentation Excellence

**Assessment and Plan Structure:**
- Prioritized problem list
- Active problem discussion
- Resolved/deferred problems noted
- Evidence-based reasoning

**Daily Progress Notes:**
- SOAP or APSO format
- Data synthesis, not just listing
- Clear reasoning for changes
- Anticipatory guidance`,
      keyTerms: [
        { term: 'semantic qualifiers', definition: 'Descriptive terms that transform patient data into abstract diagnostic categories' },
        { term: 'problem representation', definition: 'Concise summary of patient data that facilitates diagnostic reasoning' },
        { term: 'I-PASS', definition: 'Structured handoff mnemonic: Illness severity, Patient summary, Action list, Situation awareness, Synthesis' },
        { term: 'multimorbidity', definition: 'Coexistence of multiple chronic conditions in one patient' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced internal medicine clerkship performance integrates sophisticated diagnostic reasoning with quality improvement principles, systems-based practice, and strategic preparation for residency in internal medicine or related fields.',
      explanation: `## Advanced Diagnostic Reasoning

**Cognitive Errors in Diagnosis:**
| Error Type | Description | Mitigation Strategy |
|------------|-------------|---------------------|
| Anchoring bias | Over-reliance on initial impression | Serial reassessment |
| Availability heuristic | Recent cases influence judgment | Systematic approach |
| Confirmation bias | Seeking only supporting data | Active disconfirmation |
| Premature closure | Accepting diagnosis too early | "What else could this be?" |
| Diagnosis momentum | Uncritical acceptance of prior dx | Independent verification |

**Metacognitive Strategies:**
- Explicit reflection on thinking process
- "Slow down" moments when uncertain
- Recognition of emotional influences
- Structured reflection on diagnostic failures

**Diagnostic Uncertainty:**
- Explicit communication with patients
- Contingency planning
- Scheduled reassessment
- Documentation of uncertainty

## Systems-Based Practice

**Quality Improvement Engagement:**
| Activity | Student Role |
|----------|--------------|
| Root cause analysis | Observation, participation |
| Morbidity and mortality conference | Case presentation |
| Quality metrics review | Data collection |
| Process improvement projects | Team participation |

**High-Value Care:**
- Choosing Wisely recommendations
- Resource stewardship
- Elimination of low-value care
- Cost-conscious decision making

**Patient Safety:**
- Universal protocols (time-outs)
- Medication reconciliation
- VTE prophylaxis assessment
- Fall prevention

## Educational Theory Application

**Experiential Learning:**
- Concrete experience (patient care)
- Reflective observation (case review)
- Abstract conceptualization (reading)
- Active experimentation (application)

**Deliberate Practice:**
- Specific skill targeting
- Immediate feedback
- Repetition with variation
- Progressive difficulty

## Subspecialty Exposure

**Clerkship Goals by Specialty:**
| Specialty | Learning Objectives |
|-----------|---------------------|
| Cardiology | ECG interpretation, heart failure management |
| GI/Hepatology | Liver disease, GI bleeding |
| Nephrology | AKI, electrolytes, dialysis principles |
| Pulmonology | COPD, asthma, respiratory failure |
| Hematology/Oncology | Anemia workup, cancer care |
| Infectious Disease | Antibiotic stewardship, complex infections |
| Rheumatology | Autoimmune disease, joint complaints |
| Endocrinology | Diabetes management, thyroid disorders |

## Research and Scholarship

**Opportunities:**
- Case reports of interesting presentations
- Quality improvement projects
- Literature reviews
- Clinical research participation

**Evidence Appraisal:**
- Study design evaluation
- Statistical interpretation
- Clinical applicability assessment

## Career Development

**Internal Medicine Pathways:**
| Path | Training | Focus |
|------|----------|-------|
| Hospital medicine | 3 years IM residency | Inpatient care |
| Primary care | 3 years IM residency | Outpatient focus |
| Subspecialty | 3 years IM + 2-3 years fellowship | Specialty expertise |

**Fellowship Preparation:**
- Strong clinical performance
- Research involvement
- Relationship building with faculty
- Away rotations for competitive specialties`,
      keyTerms: [
        { term: 'metacognition', definition: 'Awareness and understanding of one\'s own thought processes' },
        { term: 'high-value care', definition: 'Healthcare that balances clinical benefit with costs and harms' },
        { term: 'deliberate practice', definition: 'Focused, structured practice with specific goals and immediate feedback' },
        { term: 'Choosing Wisely', definition: 'Campaign identifying commonly overused tests and treatments' },
      ],
      clinicalNotes: `Clinical Pearl: The internal medicine clerkship develops the foundational cognitive skills used throughout medical careers. Focus on developing strong problem representation and differential diagnosis skills, as these transfer to all specialties. The ability to synthesize complex patient data into clear summaries is the hallmark of a strong internist.

Expert Tip: Seek out "zebra" cases (unusual presentations) but master the "horses" (common conditions). Most diagnoses are common conditions presenting commonly. Pattern recognition develops through deliberate exposure to diverse cases with structured reflection.`,
    },
    5: {
      level: 5,
      summary: 'Professional mastery of the internal medicine clerkship encompasses educational scholarship, clinical reasoning expertise, systems leadership, and contribution to advancing the field of academic internal medicine.',
      explanation: `## Clinical Reasoning Expertise

**Illness Script Development:**
Rich mental representations include:
- Enabling conditions (predisposing factors)
- Pathophysiologic mechanisms
- Clinical consequences (signs, symptoms)
- Typical trajectory and complications

**Adaptive Expertise:**
| Component | Development |
|-----------|-------------|
| Routine expertise | Pattern recognition |
| Adaptive expertise | Novel problem solving |
| Flexibility | Cross-domain application |
| Innovation | Creating new approaches |

**Teaching Clinical Reasoning:**
- Think aloud during case presentations
- Explicit discussion of reasoning processes
- Feedback on problem representation
- Coaching through uncertainty

## Medical Education Scholarship

**Education Research:**
| Area | Topics |
|------|--------|
| Assessment | Validity of clinical evaluations |
| Curriculum | Educational intervention effectiveness |
| Learning science | Cognitive load, spaced repetition |
| Clinical reasoning | Development and instruction |
| Feedback | Optimal delivery and reception |

**Academic Career Paths:**
| Track | Focus |
|-------|-------|
| Clinician-educator | Teaching and education research |
| Clinician-investigator | Clinical or translational research |
| Clinician-administrator | Leadership and systems |

## Healthcare Systems Leadership

**Quality Science:**
- Measurement theory
- Improvement methodology (PDSA, Lean)
- Implementation science
- Safety culture

**Health Policy:**
- Payment models (fee-for-service, value-based)
- Regulatory environment
- Population health management
- Health equity and disparities

## Innovation in Medicine

**Artificial Intelligence:**
| Application | Current State |
|-------------|---------------|
| Diagnostic support | Decision support tools |
| Imaging interpretation | Computer-aided detection |
| Predictive analytics | Deterioration prediction |
| Clinical documentation | Ambient intelligence |

**Precision Medicine:**
- Pharmacogenomics integration
- Risk stratification
- Targeted therapies
- Personalized prevention

**Digital Health:**
- Remote patient monitoring
- Telemedicine
- Mobile health applications
- Wearable devices

## Professional Formation

**Identity Development:**
- Transition from student to physician
- Values clarification
- Professional community membership
- Ethical framework development

**Wellness and Resilience:**
| Challenge | Strategy |
|-----------|----------|
| Burnout | Early recognition, intervention |
| Moral distress | Peer support, ethics consultation |
| Imposter syndrome | Normalization, mentorship |
| Work-life integration | Boundary setting, priorities |

## Contributing to the Field

**Professional Engagement:**
- American College of Physicians (ACP)
- Society of General Internal Medicine (SGIM)
- Regional and local societies
- Quality and safety organizations

**Dissemination:**
| Product | Venue |
|---------|-------|
| Case reports | Medical journals |
| QI projects | Local, regional forums |
| Education innovations | Conferences |
| Research | Peer-reviewed publications |

**Mentorship:**
- Finding mentors
- Being a mentor to junior students
- Sponsorship relationships
- Peer mentoring networks`,
      keyTerms: [
        { term: 'illness scripts', definition: 'Mental representations of diseases including predisposing conditions, pathophysiology, and clinical manifestations' },
        { term: 'adaptive expertise', definition: 'Ability to flexibly apply knowledge to novel and complex situations' },
        { term: 'implementation science', definition: 'Study of methods to promote systematic uptake of evidence into practice' },
        { term: 'ambient clinical intelligence', definition: 'AI technology that passively captures clinical encounters for documentation' },
      ],
      clinicalNotes: `Expert Perspective: Internal medicine remains the intellectual foundation of medicine. The clerkship is where students develop the cognitive frameworks that support all subsequent medical learning. Expert internists demonstrate:

1. Rapid, accurate problem representation
2. Sophisticated differential diagnosis
3. Evidence-based management with patient-centered adaptation
4. Systems thinking and quality improvement orientation
5. Lifelong learning commitment
6. Professional identity as a physician

The transition from novice to expert in internal medicine takes years, but the clerkship establishes the patterns of thinking and learning that enable this journey. Embrace uncertainty, cultivate curiosity, and maintain humility - these traits characterize the best internists throughout their careers.`,
    },
  },

  media: [
    {
      id: 'im-daily-schedule',
      type: 'diagram',
      filename: 'im-daily-schedule.svg',
      title: 'Internal Medicine Daily Schedule',
      description: 'Typical daily workflow for internal medicine clerkship',
    },
    {
      id: 'clinical-reasoning-flowchart',
      type: 'diagram',
      filename: 'clinical-reasoning-flowchart.svg',
      title: 'Clinical Reasoning Process',
      description: 'Step-by-step diagnostic reasoning framework',
    },
  ],

  citations: [
    {
      id: 'im-clerkship-guide',
      type: 'website',
      title: 'Internal Medicine Clerkship Guide',
      source: 'American College of Physicians',
      url: 'https://www.acponline.org',
      accessedDate: '2025-01-28',
    },
    {
      id: 'step-up-medicine',
      type: 'textbook',
      title: 'Step-Up to Medicine',
      authors: ['Agabegi SS', 'Agabegi ED'],
      source: 'Wolters Kluwer',
    },
  ],

  crossReferences: [
    { targetId: 'clerkship-surgery', targetType: 'concept', relationship: 'sibling', label: 'Surgery Clerkship' },
    { targetId: 'clerkship-pediatrics', targetType: 'concept', relationship: 'sibling', label: 'Pediatrics Clerkship' },
    { targetId: 'guide-presenting-patients', targetType: 'concept', relationship: 'related', label: 'Presenting Patients' },
  ],

  tags: {
    systems: ['medical-education'],
    topics: ['clinical-clerkships', 'internal-medicine'],
    keywords: ['internal medicine', 'clerkship', 'clinical reasoning', 'patient care'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine'],
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default internalMedicineClerkship;
