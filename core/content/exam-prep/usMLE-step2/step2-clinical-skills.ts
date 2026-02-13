/**
 * USMLE Step 2 Clinical Skills - Clinical Competency Development
 *
 * Educational content covering clinical skills assessment, patient encounters,
 * communication, and clinical competency development for medical students.
 */

import { EducationalContent } from '../../types';

export const step2ClinicalSkills: EducationalContent = {
  id: 'education-step2-clinical-skills',
  type: 'concept',
  name: 'Clinical Skills Development',
  alternateNames: ['Step 2 CS', 'Clinical Skills Assessment', 'OSCE Preparation', 'Patient Encounter Skills'],

  levels: {
    1: {
      level: 1,
      summary: 'Clinical skills are the abilities doctors use when meeting with patients. These include talking to patients, doing physical exams, and explaining diagnoses and treatments.',
      explanation: `## What Are Clinical Skills?

Clinical skills are the hands-on abilities doctors use every day with patients. They are different from book knowledge - they are practical skills you learn by practicing.

## Main Clinical Skills

**1. Talking to Patients (History Taking)**
- Asking about symptoms and problems
- Listening carefully to answers
- Being kind and respectful
- Making patients feel comfortable

**2. Physical Examination**
- Checking the body for signs of illness
- Using tools like stethoscopes
- Looking, listening, and feeling
- Being gentle and professional

**3. Communication**
- Explaining what you found
- Describing the treatment plan
- Answering questions
- Making sure patients understand

**4. Writing Notes**
- Recording what happened in the visit
- Describing findings clearly
- Sharing information with other doctors

## Why These Skills Matter

Good clinical skills help doctors:
- Find out what's wrong with patients
- Make patients feel cared for
- Avoid mistakes
- Work well with other healthcare workers

## How Medical Students Learn These

- Practice with fake patients (actors)
- Work with real patients during rotations
- Get feedback from teachers
- Keep practicing to get better`,
      keyTerms: [
        { term: 'history taking', definition: 'The process of asking patients questions about their health problem and medical background' },
        { term: 'physical examination', definition: 'Checking a patient\'s body for signs of illness using looking, listening, and touching' },
        { term: 'communication', definition: 'Sharing information clearly between doctor and patient in a way both understand' },
      ],
      analogies: [
        'Clinical skills are like the moves in a sport - you can read about them, but you only get good by actually practicing.',
        'A doctor doing a history is like a detective asking questions to solve a mystery.',
        'A physical exam is like an inspection - checking everything carefully to find problems.',
      ],
      examples: [
        'A medical student practices asking questions with an actor pretending to be a patient with stomach pain.',
        'A doctor uses a stethoscope to listen to a patient\'s heart and lungs during a checkup.',
      ],
      patientCounselingPoints: [
        'When your doctor asks lots of questions, they are gathering important information to help you',
        'The physical exam helps doctors find problems that you might not notice yourself',
      ],
    },

    2: {
      level: 2,
      summary: 'Clinical skills encompass history taking, physical examination, clinical reasoning, patient communication, and documentation. These skills are assessed throughout medical training and are essential for patient care.',
      explanation: `## Clinical Skills Overview

Clinical skills are the practical abilities physicians use during patient encounters. They combine communication, examination technique, and clinical reasoning.

## Core Clinical Competencies

**1. History Taking**
- Chief complaint: Why the patient is here today
- History of present illness (HPI): Details about current problem
- Past medical history: Previous health issues
- Medications and allergies
- Family history: Health problems in relatives
- Social history: Lifestyle factors
- Review of systems: Checking other body systems

**2. Physical Examination**
- General observation: Overall appearance
- Vital signs: Temperature, blood pressure, heart rate, respiratory rate
- System-specific exams: Heart, lungs, abdomen, etc.
- Focused vs. comprehensive exams

**3. Communication Skills**
- Building rapport with patients
- Active listening
- Showing empathy
- Explaining findings in plain language
- Shared decision-making
- Discussing difficult topics (bad news, sensitive issues)

**4. Clinical Documentation**
- SOAP notes (Subjective, Objective, Assessment, Plan)
- Progress notes
- Discharge summaries
- Referral letters

## Assessment Methods

**Objective Structured Clinical Examination (OSCE):**
- Standardized patient encounters
- Scored on specific skills
- Time-limited stations
- Immediate feedback

**Clinical Evaluations:**
- Observed encounters during rotations
- Feedback from attendings and residents
- Mid-rotation and end-of-rotation assessments

## Historical Context: Step 2 CS

**What It Was:**
- Day-long clinical skills exam
- 12 standardized patient encounters
- Evaluated patient interaction and documentation
- Required for medical licensure

**Why It Was Discontinued (2021):**
- COVID-19 pandemic disruption
- Logistical challenges
- Medical schools can assess clinical skills
- Low failure rate questioned value

**Current Clinical Skills Assessment:**
- Medical school-based evaluation
- OSCE exams at each institution
- Clinical rotation assessments
- Some states may have additional requirements

## Building Clinical Skills

**Practice Opportunities:**
- Clinical skills labs
- Standardized patient sessions
- Peer practice
- Real patient encounters
- Simulation experiences

**Key Practice Areas:**
| Skill | How to Practice |
|-------|-----------------|
| History taking | Standardized patients, peers |
| Physical exam | Skills labs, patients |
| Communication | Role play, reflection |
| Documentation | Chart reviews, feedback |`,
      keyTerms: [
        { term: 'chief complaint', definition: 'The main reason a patient seeks medical care, usually stated in the patient\'s own words' },
        { term: 'SOAP note', definition: 'A documentation format: Subjective (symptoms), Objective (findings), Assessment (diagnosis), Plan (treatment)' },
        { term: 'OSCE', definition: 'Objective Structured Clinical Examination - a practical exam testing clinical skills in simulated scenarios' },
        { term: 'standardized patient', definition: 'A person trained to portray a patient with a specific condition for teaching and assessment' },
        { term: 'review of systems', definition: 'A systematic series of questions covering each body system to identify symptoms' },
      ],
      analogies: [
        'The OSCE is like a driving test - you have to demonstrate practical skills, not just know the rules.',
        'SOAP notes are like a story with four chapters - what the patient says, what you find, what you think, and what you\'ll do.',
        'Clinical skills practice with standardized patients is like dress rehearsal before the real performance.',
      ],
      examples: [
        'A student completes an OSCE station where they take a history from a standardized patient presenting with chest pain.',
        'After seeing a patient on rounds, a student writes a SOAP note documenting the encounter.',
      ],
      patientCounselingPoints: [
        'When doctors ask many questions, they are being thorough to give you the best care',
        'Medical students practice extensively to provide skilled, compassionate care',
      ],
    },

    3: {
      level: 3,
      summary: 'Clinical skills integrate history taking, physical examination, clinical reasoning, communication, and documentation. With Step 2 CS discontinued, medical schools assess clinical competency through OSCEs, clinical evaluations, and simulation experiences.',
      explanation: `## Comprehensive Clinical Skills Framework

Clinical skills form the foundation of physician-patient interaction, integrating technical examination abilities with communication and reasoning.

## History Taking Mastery

**Structured Approach:**

| Component | Content | Purpose |
|-----------|---------|---------|
| CC | Chief complaint | Focus encounter |
| HPI | History of present illness | Define problem |
| PMH | Past medical history | Context |
| Medications | Current and recent | Safety, interactions |
| Allergies | Drug and environmental | Safety |
| FH | Family history | Risk assessment |
| SH | Social history | Lifestyle factors |
| ROS | Review of systems | Screen symptoms |

**HPI Framework (OLDCARTS):**
- **O**nset: When did it start?
- **L**ocation: Where is it?
- **D**uration: How long does it last?
- **C**haracter: What does it feel like?
- **A**ggravating factors: What makes it worse?
- **R**elieving factors: What makes it better?
- **T**iming: When does it occur?
- **S**everity: How bad is it (0-10)?

## Physical Examination Technique

**General Principles:**
- Wash hands before and after
- Explain what you're doing
- Respect patient comfort and dignity
- Develop systematic approach
- Compare bilateral findings

**Examination Methods:**
| Method | Description | Examples |
|--------|-------------|----------|
| Inspection | Visual observation | Skin color, swelling |
| Palpation | Touch examination | Masses, tenderness |
| Percussion | Tapping | Lung fields, abdomen |
| Auscultation | Listening | Heart, lungs, bowel |

**System-Specific Exams:**
- Cardiovascular: JVP, heart sounds, peripheral pulses
- Respiratory: Breath sounds, chest expansion, percussion
- Abdominal: Bowel sounds, organomegaly, tenderness
- Neurological: Mental status, cranial nerves, motor, sensory, reflexes
- Musculoskeletal: Range of motion, strength, special tests

## Clinical Reasoning Integration

**Connecting Skills to Diagnosis:**
1. History generates differential diagnosis
2. Physical exam narrows differential
3. Test findings confirm/exclude diagnoses
4. Synthesis leads to working diagnosis

**Pattern Recognition:**
- Classic presentations suggest specific diagnoses
- Atypical presentations require broader consideration
- Red flags indicate serious conditions

## Communication Excellence

**Patient-Centered Communication:**
- Establish rapport early
- Use open-ended questions
- Reflect and summarize
- Check understanding
- Involve patient in decisions

**Breaking Bad News (SPIKES):**
- **S**etting: Ensure privacy, adequate time
- **P**erception: Assess what patient knows
- **I**nvitation: Ask how much they want to know
- **K**nowledge: Share information clearly
- **E**mpathy: Acknowledge emotions
- **S**trategy: Discuss next steps

**Cultural Competence:**
- Recognize cultural influences on health beliefs
- Use interpreters appropriately
- Avoid assumptions
- Adapt communication style

## Documentation Standards

**SOAP Note Quality:**

| Section | Content | Tips |
|---------|---------|------|
| Subjective | CC, HPI, ROS | Patient's perspective |
| Objective | Vitals, PE, data | Factual findings |
| Assessment | Diagnoses, reasoning | Clinical judgment |
| Plan | Tests, treatments | Action items |

**Common Documentation Errors:**
- Incomplete histories
- Missing pertinent negatives
- Vague assessments
- Unclear plans
- Copy-paste without update

## Competency Assessment

**OSCE Structure:**
- Multiple stations (8-15 typically)
- 10-20 minutes per station
- Standardized checklists
- Communication and interpersonal skills scored
- Post-encounter documentation

**Clinical Evaluation Forms:**
- Entrustable Professional Activities (EPAs)
- Milestones framework
- Global ratings
- Narrative feedback

**Self-Assessment:**
- Video review of encounters
- Reflection exercises
- Peer feedback
- Patient satisfaction data`,
      keyTerms: [
        { term: 'OLDCARTS', definition: 'Mnemonic for characterizing symptoms: Onset, Location, Duration, Character, Aggravating, Relieving, Timing, Severity' },
        { term: 'SPIKES', definition: 'Protocol for delivering bad news: Setting, Perception, Invitation, Knowledge, Empathy, Strategy' },
        { term: 'pertinent negatives', definition: 'Absence of symptoms or findings that would be expected if a particular diagnosis were present' },
        { term: 'EPAs', definition: 'Entrustable Professional Activities - tasks physicians can be trusted to perform unsupervised' },
        { term: 'milestones', definition: 'Competency-based developmental outcomes expected of trainees at different stages' },
      ],
      analogies: [
        'OLDCARTS is like a reporter\'s checklist - it ensures you get all the important details of the story.',
        'The SPIKES protocol is like a roadmap through difficult territory - it guides you through a challenging conversation.',
        'Pertinent negatives are like ruling out suspects in a mystery - what\'s not there can be as important as what is.',
      ],
      examples: [
        'A student uses OLDCARTS to systematically characterize a patient\'s abdominal pain, discovering it worsens with eating and improves with antacids.',
        'Using SPIKES, a resident tells a patient about a new cancer diagnosis while managing emotions and discussing next steps.',
      ],
      patientCounselingPoints: [
        'Doctors use structured approaches to ensure they don\'t miss important details about your health',
        'When doctors pause to check your understanding, they want to make sure you\'re fully informed',
      ],
    },

    4: {
      level: 4,
      summary: 'Advanced clinical skills integrate sophisticated history taking, expert physical examination, clinical reasoning, and patient-centered communication. Competency assessment uses multiple methods including OSCEs, workplace-based evaluation, and entrustable professional activities.',
      explanation: `## Advanced Clinical Skills Development

Graduate-level clinical skills require integration of technical competence, communication expertise, and adaptive reasoning across diverse patient populations and settings.

## Expert History Taking

**Hypothesis-Driven History:**
- Begin with mental differential
- Ask discriminating questions
- Adjust based on responses
- Know when to expand or focus

**Sensitive History Components:**
| Topic | Approach |
|-------|----------|
| Sexual history | Normalize, non-judgmental |
| Substance use | CAGE/AUDIT, motivational |
| Domestic violence | Private, validating |
| Suicide assessment | Direct, caring |
| End-of-life wishes | Open, respectful |

**Pediatric Adaptations:**
- Age-appropriate language
- Include parent perspective
- Developmental history
- School and social functioning

**Geriatric Adaptations:**
- Functional status focus
- Medication reconciliation
- Cognitive screening
- Goals of care discussion

## Advanced Physical Examination

**Signs with High Clinical Utility:**
| Finding | LR+ | Clinical Significance |
|---------|-----|----------------------|
| Pulsus paradoxus | 5-10 | Tamponade, severe asthma |
| Asterixis | 5-10 | Hepatic encephalopathy |
| Kussmaul sign | High | Constrictive pericarditis |
| Murphy's sign | 2-3 | Acute cholecystitis |
| Kernig's sign | 5+ | Meningitis |

**Evidence-Based Examination:**
- Know sensitivity/specificity of findings
- Understand likelihood ratios
- Combine findings for diagnosis
- Recognize limitations

**Procedural Skills Integration:**
- Fundoscopy
- Otoscopy
- Joint aspiration
- Lumbar puncture
- Bedside ultrasound

## Clinical Reasoning Excellence

**Cognitive Error Prevention:**
| Error | Description | Prevention |
|-------|-------------|------------|
| Premature closure | Stopping search early | Generate alternatives |
| Anchoring | Over-relying on first impression | Reassess with new data |
| Availability | Recalling recent cases | Use systematic approach |
| Confirmation bias | Seeking supporting evidence | Look for contradictory data |

**Diagnostic Uncertainty Management:**
- Acknowledge uncertainty explicitly
- Communicate confidence levels
- Use test of time judiciously
- Plan for diagnostic re-evaluation

## Communication Mastery

**Advanced Communication Techniques:**
- NURSE statements (Name, Understand, Respect, Support, Explore)
- Motivational interviewing
- Agenda setting
- Reflective listening

**Difficult Conversations:**
| Situation | Strategy |
|-----------|----------|
| Angry patient | Acknowledge, don't defend |
| Non-adherence | Explore barriers |
| Family conflict | Facilitate dialogue |
| Medical error disclosure | CANDOR approach |

**Interprofessional Communication:**
- SBAR (Situation, Background, Assessment, Recommendation)
- Closed-loop communication
- Handoff protocols
- Team communication

## Assessment and Feedback

**Workplace-Based Assessment:**
| Method | What It Measures |
|--------|-----------------|
| Mini-CEX | Clinical encounter skills |
| DOPS | Procedural competence |
| CBD | Clinical reasoning |
| MSF | Professionalism, communication |

**EPA Framework:**
- Core EPAs define entrustable activities
- Supervision levels range from observe to independent
- Assessment informs entrustment decisions
- Continuous developmental tracking

**Deliberate Practice:**
- Identify specific skill gaps
- Focused practice with feedback
- Progressive challenge
- Reflection and adjustment

## Quality and Safety Integration

**Patient Safety Skills:**
- Situation awareness
- Error recognition
- Speaking up
- Systems thinking

**Quality Improvement:**
- PDSA cycles
- Root cause analysis
- Evidence-based practice
- Outcome measurement`,
      keyTerms: [
        { term: 'likelihood ratio', definition: 'The ratio of the probability of a test result in patients with disease to the probability in patients without disease' },
        { term: 'NURSE statements', definition: 'Communication technique: Name emotions, Understand, Respect, Support, Explore' },
        { term: 'mini-CEX', definition: 'Mini Clinical Evaluation Exercise - workplace-based assessment of clinical encounter skills' },
        { term: 'SBAR', definition: 'Communication framework: Situation, Background, Assessment, Recommendation' },
        { term: 'CANDOR', definition: 'Framework for medical error disclosure: Communication And Optimal Resolution' },
      ],
      analogies: [
        'Likelihood ratios are like multipliers in betting - they tell you how much a finding should change your confidence in a diagnosis.',
        'SBAR is like a news brief format - it gives the essential information in a structured, efficient way.',
        'Cognitive errors are like optical illusions - being aware of them helps you avoid being fooled.',
      ],
      examples: [
        'Finding asterixis during examination of a patient with confusion increases suspicion for hepatic encephalopathy, prompting ammonia level check.',
        'A resident uses SBAR to efficiently communicate concern about a deteriorating patient: "Situation: Mr. Smith\'s respiratory rate increased to 32. Background: He has COPD. Assessment: I\'m concerned about exacerbation. Recommendation: I think he needs a blood gas and possibly BiPAP."',
      ],
      patientCounselingPoints: [
        'When doctors ask to examine you, they are looking for specific physical signs that help with diagnosis',
        'Healthcare teams use structured communication to keep you safe and ensure everyone has the same information',
      ],
    },

    5: {
      level: 5,
      summary: 'Expert clinical skills integrate sophisticated diagnostic reasoning, nuanced communication, and evidence-based examination techniques. Competency assessment frameworks ensure progressive skill development aligned with professional practice standards.',
      explanation: `## Professional Clinical Skills Mastery

Expert-level clinical skills represent the synthesis of technical ability, communication artistry, and adaptive reasoning necessary for independent practice.

## Diagnostic Reasoning Science

**Probabilistic Reasoning:**
- Pre-test probability estimation
- Test characteristic application
- Post-test probability calculation
- Threshold approach to testing/treatment

**Bayesian Framework:**
| Pre-test Probability | Test Result | Interpretation |
|---------------------|-------------|----------------|
| Low | Positive | May be false positive |
| High | Negative | May be false negative |
| Moderate | Either | Most informative |

**Dual-Process Integration:**
- System 1: Pattern recognition, fast
- System 2: Analytical, deliberate
- Metacognitive monitoring
- Strategic deployment

## Evidence-Based Physical Examination

**Rational Clinical Examination:**
- Systematic reviews of physical findings
- JAMA Rational Clinical Examination series
- LR+ and LR- for clinical findings
- Pre-test probability influences utility

**High-Value Examination:**
| Finding | Disease | LR+ |
|---------|---------|-----|
| S3 gallop | Heart failure | 11 |
| Egophony | Pneumonia | 6.8 |
| Straight leg raise | Disk herniation | 3.9 |
| Dullness to percussion | Pleural effusion | 5.7 |
| Hepatojugular reflux | CHF | 6.4 |

**Examination Limitations:**
- Interobserver variability
- Training and experience effects
- Patient factors (body habitus, cooperation)
- Setting influences (noise, positioning)

## Communication Science

**Shared Decision-Making Model:**
1. Introduce choice
2. Describe options
3. Discuss preferences and values
4. Make decision together
5. Evaluate decision

**Motivational Interviewing Principles:**
- Express empathy
- Develop discrepancy
- Roll with resistance
- Support self-efficacy

**Health Literacy Optimization:**
- Plain language use
- Teach-back method
- Visual aids
- Limited information per encounter

## Competency-Based Medical Education

**ACGME Competencies:**
1. Patient Care
2. Medical Knowledge
3. Practice-Based Learning
4. Interpersonal and Communication Skills
5. Professionalism
6. Systems-Based Practice

**EPA Framework Details:**
| EPA | Description |
|-----|-------------|
| EPA 1 | History and physical |
| EPA 2 | Diagnostic workup |
| EPA 3 | Interpret data |
| EPA 4 | Orders and prescriptions |
| EPA 5 | Document encounters |
| EPA 6 | Oral presentations |
| EPA 7 | Clinical reasoning |
| EPA 8 | Patient handoffs |
| EPA 9 | Team collaboration |
| EPA 10 | Emergency management |
| EPA 11 | Informed consent |
| EPA 12 | Procedures |
| EPA 13 | Safety/QI |

**Supervision Levels:**
- Level 1: Observation only
- Level 2: Direct supervision
- Level 3: Indirect supervision
- Level 4: Oversight
- Level 5: Independent practice

## Assessment Science

**Validity Evidence:**
- Content: Covers relevant domains
- Response process: Standardized administration
- Internal structure: Consistent measurement
- Relations to other variables: Correlates appropriately
- Consequences: Leads to appropriate decisions

**Reliability Considerations:**
- Inter-rater reliability
- Test-retest reliability
- Internal consistency
- Standard error of measurement

**Programmatic Assessment:**
- Multiple assessments over time
- Diverse assessment methods
- Longitudinal perspective
- Progress decision framework

## Continuous Professional Development

**Expertise Development:**
- 10,000 hours principle
- Deliberate practice essential
- Feedback integration
- Progressive challenge

**Lifelong Learning:**
- Self-assessment calibration
- Knowledge gap identification
- Targeted learning activities
- Practice modification

**Quality Improvement Integration:**
- Performance data review
- Outcome analysis
- Practice change implementation
- Continuous monitoring`,
      keyTerms: [
        { term: 'pre-test probability', definition: 'The estimated likelihood of disease before diagnostic testing, based on clinical assessment' },
        { term: 'teach-back method', definition: 'Communication technique where patients explain information back to confirm understanding' },
        { term: 'programmatic assessment', definition: 'Assessment approach using multiple methods and timepoints for comprehensive competency evaluation' },
        { term: 'ACGME competencies', definition: 'Six core competencies defining physician training outcomes established by the Accreditation Council for Graduate Medical Education' },
        { term: 'deliberate practice', definition: 'Purposeful practice focused on specific skill improvement with immediate feedback' },
      ],
      clinicalNotes: `Expert perspective on clinical skills development:

1. **Integration Over Isolation:** Clinical skills function together - history informs examination focus, findings drive reasoning, communication delivers care. Practice integrated encounters, not isolated skills.

2. **Deliberate Practice:** Expertise develops through purposeful practice with feedback. Video review, standardized patient sessions, and structured reflection accelerate skill development.

3. **Evidence-Based Examination:** Know which physical findings have diagnostic utility. Many traditional maneuvers lack evidence; focus on high-yield findings with strong likelihood ratios.

4. **Communication as Treatment:** Skilled communication improves outcomes independent of other treatments. Invest in communication skills as you would procedural skills.

5. **Uncertainty Communication:** Patients respect honest uncertainty more than false certainty. Learn to communicate probabilistic thinking and diagnostic evolution.

6. **Cultural Humility:** Every patient encounter crosses cultures. Approach with curiosity rather than assumptions about values, beliefs, and preferences.

7. **Documentation as Communication:** Notes communicate with future providers and patients. Write with clarity and purpose, not just compliance.

8. **Assessment Drives Learning:** Use assessment experiences (OSCEs, clinical evaluations) as learning opportunities. Feedback is valuable information, not judgment.

9. **Safety Integration:** Patient safety is a clinical skill. Situation awareness, speaking up, and error prevention should be practiced like examination techniques.

10. **Lifelong Development:** Clinical expertise is never complete. The best clinicians continuously refine skills throughout their careers through deliberate practice and reflection.`,
    },
  },

  media: [
    {
      id: 'clinical-encounter-framework',
      type: 'diagram',
      filename: 'clinical-encounter-framework.svg',
      title: 'Clinical Encounter Framework',
      description: 'Visual guide to structured patient encounters',
    },
    {
      id: 'osce-station-examples',
      type: 'diagram',
      filename: 'osce-station-examples.svg',
      title: 'OSCE Station Examples',
      description: 'Sample OSCE stations with assessment criteria',
    },
  ],

  citations: [
    {
      id: 'rational-clinical-exam',
      type: 'article',
      title: 'The Rational Clinical Examination Series',
      source: 'JAMA',
      url: 'https://jamanetwork.com/collections/6256/the-rational-clinical-examination',
      accessedDate: '2025-01-28',
    },
    {
      id: 'acgme-milestones',
      type: 'website',
      title: 'ACGME Milestones',
      source: 'ACGME.org',
      url: 'https://www.acgme.org/what-we-do/accreditation/milestones/',
      accessedDate: '2025-01-28',
    },
  ],

  crossReferences: [
    { targetId: 'education-usmle-step2-overview', targetType: 'concept', relationship: 'parent', label: 'USMLE Step 2 Overview' },
    { targetId: 'education-clerkship-overview', targetType: 'concept', relationship: 'related', label: 'Clinical Clerkship Overview' },
    { targetId: 'education-clinical-documentation', targetType: 'concept', relationship: 'related', label: 'Clinical Documentation' },
  ],

  tags: {
    systems: ['medical-education'],
    topics: ['clinical skills', 'history taking', 'physical examination', 'communication', 'OSCE'],
    keywords: ['clinical competency', 'patient encounter', 'OSCE', 'medical communication', 'physical exam'],
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

export default step2ClinicalSkills;
