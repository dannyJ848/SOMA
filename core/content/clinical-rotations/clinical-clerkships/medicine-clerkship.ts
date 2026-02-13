/**
 * Medicine Clerkship - Internal Medicine Clinical Rotation
 *
 * Educational content for the internal medicine clinical clerkship,
 * covering clinical skills, patient management, and rotation strategies.
 */

import { EducationalContent } from '../../types';

export const medicineClerkship: EducationalContent = {
  id: 'clerkship-medicine',
  type: 'concept',
  name: 'Internal Medicine Clerkship',
  alternateNames: ['Medicine Rotation', 'IM Clerkship', 'Medicine Core Clerkship', 'Internal Medicine Rotation'],

  levels: {
    1: {
      level: 1,
      summary: 'The medicine clerkship is where medical students learn to care for adult patients with medical problems like diabetes, heart disease, and infections. Students learn by working with patients in hospitals and clinics.',
      explanation: `## What Is the Medicine Clerkship?

The medicine clerkship (also called internal medicine rotation) is one of the most important parts of medical school. You learn to take care of adults with medical problems - things that do not need surgery.

## What Is Internal Medicine?

Internal medicine doctors (called "internists") are experts at:
- Understanding how the body works
- Figuring out what is causing symptoms
- Managing complex medical conditions
- Preventing disease

## Where Will You Work?

**Hospital (Inpatient):**
- Patient wards
- Intensive care units
- Emergency department

**Clinic (Outpatient):**
- Regular doctor visits
- Follow-up appointments
- Preventive care

## Daily Activities

**Morning:**
- Check on your patients
- Review overnight events
- Do physical exams

**Mid-day:**
- Present patients to your team
- Discuss treatment plans
- Attend teaching sessions

**Afternoon:**
- Follow up on tests
- Talk with patients and families
- Write notes in charts
- Read about your patients' conditions

## Skills You Will Learn

**Patient Care:**
- Taking a complete medical history
- Doing a thorough physical exam
- Writing medical notes
- Explaining medical information to patients

**Medical Thinking:**
- Making a list of possible diagnoses
- Ordering the right tests
- Creating treatment plans
- Recognizing emergencies

## Common Conditions You Will See

- Heart problems (heart failure, chest pain)
- Lung problems (pneumonia, asthma attacks)
- Infections (skin, lungs, bladder)
- Diabetes and blood sugar problems
- Kidney disease
- Blood problems (anemia)

## Tips for Success

1. Know your patients well
2. Read about each patient's conditions
3. Ask questions when confused
4. Be on time and prepared
5. Show you care about your patients
6. Practice presenting patients out loud`,
      keyTerms: [
        { term: 'internist', definition: 'A doctor who specializes in internal medicine and cares for adults with medical problems' },
        { term: 'inpatient', definition: 'A patient who stays in the hospital overnight for treatment' },
        { term: 'outpatient', definition: 'A patient who visits the clinic and goes home the same day' },
        { term: 'rounds', definition: 'When the medical team visits each patient together to discuss their care' },
      ],
      analogies: [
        'An internist is like a detective - they gather clues from symptoms and tests to solve the mystery of what is wrong.',
        'The medicine rotation is like learning the foundation of a house - other specialties build on what you learn here.',
        'Patient rounds are like a team meeting - everyone shares information to make the best decisions.',
      ],
      examples: [
        'A student follows a patient with heart failure, learning about medications, daily weights, and salt restrictions.',
        'During rounds, a student presents their patient with pneumonia and discusses the antibiotic treatment plan.',
      ],
      patientCounselingPoints: [
        'Medical students work closely with experienced doctors who supervise all aspects of patient care',
        'Students spend extra time learning about each patient, which helps them provide attentive care',
      ],
    },

    2: {
      level: 2,
      summary: 'The medicine clerkship develops clinical reasoning, comprehensive patient assessment, and evidence-based management skills. Students rotate through inpatient and outpatient settings, learning to evaluate and treat common adult medical conditions.',
      explanation: `## Medicine Clerkship Overview

**Duration:** 8-12 weeks
**Settings:** Inpatient wards, ICU, outpatient clinics

## Core Competencies

**Clinical Skills:**
| Skill | Expectation |
|-------|-------------|
| History taking | Comprehensive, patient-centered |
| Physical exam | Systematic, focused on key findings |
| Documentation | Organized, thorough notes |
| Presentation | Clear, concise oral presentations |

**Clinical Reasoning:**
- Generating differential diagnoses
- Prioritizing diagnostic workup
- Interpreting test results
- Developing treatment plans

## Inpatient Experience

**Daily Structure:**
| Time | Activity |
|------|----------|
| 6-7 AM | Pre-round on patients |
| 7-8 AM | Review labs and imaging |
| 8-12 PM | Attending rounds |
| 12-1 PM | Conference or lunch |
| 1-5 PM | Patient care, admissions |
| Evening | Reading, preparation |

**Team Hierarchy:**
1. **Attending physician:** Supervising doctor
2. **Resident:** Training doctor (2-3 years after med school)
3. **Intern:** First-year resident
4. **Medical student:** You

**Patient Load:**
- Typically 2-4 patients
- Know everything about your patients
- Follow their course daily
- Participate in their care decisions

## Outpatient Experience

**Clinic Skills:**
- Focused patient visits
- Preventive care counseling
- Chronic disease management
- Documentation efficiency

**Common Visits:**
- Diabetes management
- Hypertension follow-up
- Wellness exams
- Pre-operative clearance
- Acute complaints

## High-Yield Medical Conditions

**Cardiovascular:**
- Heart failure (systolic and diastolic)
- Acute coronary syndrome
- Atrial fibrillation
- Hypertension management

**Pulmonary:**
- Pneumonia (community and hospital acquired)
- COPD exacerbation
- Asthma
- Pulmonary embolism

**Infectious Disease:**
- Urinary tract infections
- Cellulitis
- Sepsis
- C. difficile colitis

**Endocrine:**
- Diabetes mellitus management
- Diabetic ketoacidosis
- Thyroid disorders

**Nephrology:**
- Acute kidney injury
- Chronic kidney disease
- Electrolyte abnormalities

## Documentation

**Admission Note Components:**
1. Chief complaint
2. History of present illness
3. Past medical history
4. Medications
5. Allergies
6. Family and social history
7. Review of systems
8. Physical examination
9. Laboratory and imaging
10. Assessment and plan

**Daily Progress Notes:**
- Subjective: Patient symptoms
- Objective: Exam, labs, vitals
- Assessment: Clinical interpretation
- Plan: Next steps for each problem

## Evaluation Criteria

**Areas Assessed:**
| Component | Weight |
|-----------|--------|
| Clinical knowledge | 20-30% |
| Clinical skills | 20-30% |
| Professionalism | 15-20% |
| Shelf exam | 20-30% |

## Study Strategies

**During the Rotation:**
- Read about your patients daily
- Review key topics in Step Up to Medicine
- Do UWorld questions by topic
- Attend teaching conferences

**Shelf Exam Preparation:**
- UWorld Internal Medicine
- AMBOSS questions
- NBME practice exams`,
      keyTerms: [
        { term: 'differential diagnosis', definition: 'A list of possible conditions that could explain a patient\'s symptoms' },
        { term: 'pre-rounding', definition: 'Seeing patients before formal rounds to gather updated information' },
        { term: 'shelf exam', definition: 'A standardized test at the end of each clerkship that tests clinical knowledge' },
        { term: 'SOAP note', definition: 'A format for progress notes: Subjective, Objective, Assessment, Plan' },
      ],
      analogies: [
        'Differential diagnosis is like detective work - you consider all suspects before narrowing down.',
        'Pre-rounding is like preparation before a presentation - you want to know your material before the main event.',
        'The hierarchy of the medical team is like a sports team - everyone has a role and learns from more experienced players.',
      ],
      examples: [
        'A student admits a patient with chest pain, creating a differential including ACS, PE, pneumonia, and GERD.',
        'During outpatient clinic, a student counsels a diabetic patient on medication adherence and lifestyle changes.',
      ],
      patientCounselingPoints: [
        'Medical students are actively supervised by experienced physicians at all times',
        'The structured teaching in medicine rotations ensures comprehensive clinical training',
      ],
    },

    3: {
      level: 3,
      summary: 'The medicine clerkship develops comprehensive clinical reasoning through systematic patient evaluation, evidence-based management, and integration of pathophysiology with clinical presentation. Success requires mastering differential diagnosis, clinical decision-making, and effective communication across care settings.',
      explanation: `## Medicine Clerkship Mastery

Excelling in the medicine clerkship requires integration of knowledge, clinical skills, and professional behaviors.

## Clinical Reasoning Framework

**Diagnostic Approach:**
| Step | Process |
|------|---------|
| Data gathering | History, exam, initial tests |
| Problem representation | One-liner summary |
| Differential generation | Hypothesis list |
| Discriminating features | Key distinguishing findings |
| Working diagnosis | Most likely explanation |
| Management plan | Diagnostic and therapeutic steps |

**Problem Representation:**
A concise summary combining:
- Demographics
- Risk factors
- Key symptoms/signs
- Time course
- Severity indicators

## Advanced Physical Examination

**Cardiac Examination:**
| Finding | Significance |
|---------|--------------|
| S3 gallop | Volume overload, HF |
| S4 gallop | Decreased compliance |
| Murmurs | Valvular disease |
| JVD | Right heart pressure |
| Peripheral edema | Fluid status |

**Pulmonary Examination:**
| Finding | Significance |
|---------|--------------|
| Crackles | Fluid, fibrosis |
| Wheezes | Airway obstruction |
| Decreased breath sounds | Effusion, consolidation |
| Dullness to percussion | Effusion, consolidation |

**Abdominal Examination:**
| Finding | Significance |
|---------|--------------|
| Hepatomegaly | Liver disease, CHF |
| Splenomegaly | Hematologic, infection |
| Ascites | Liver disease, malignancy |
| Tenderness patterns | Localizing pathology |

## High-Yield Clinical Syndromes

**Heart Failure Management:**
- Distinguish HFrEF vs HFpEF
- Diuretic titration
- GDMT optimization
- Volume status assessment
- Discharge planning

**Acute Coronary Syndrome:**
- STEMI vs NSTEMI recognition
- Risk stratification
- Antiplatelet and anticoagulation
- Cardiac catheterization timing
- Secondary prevention

**Sepsis Recognition and Management:**
- SIRS criteria and qSOFA
- Early antibiotics
- Fluid resuscitation
- Source control
- Lactate monitoring

**Diabetic Emergencies:**
- DKA vs HHS differentiation
- Insulin and fluid protocols
- Electrolyte management
- Precipitant identification

## Evidence-Based Practice

**Guideline Integration:**
| Condition | Key Guidelines |
|-----------|----------------|
| Heart failure | ACC/AHA HF Guidelines |
| COPD | GOLD Guidelines |
| Diabetes | ADA Standards of Care |
| Hypertension | JNC/ACC Guidelines |

**Literature Application:**
- Recognize landmark trials
- Apply risk calculators
- Interpret study results
- Discuss evidence in rounds

## Interprofessional Collaboration

**Team Communication:**
- Nursing handoffs
- Pharmacy consultation
- Social work coordination
- Case management
- Physical/occupational therapy

**Discharge Planning:**
- Medication reconciliation
- Follow-up arrangements
- Patient education
- Home services coordination

## Oral Presentation Excellence

**Admission Presentation:**
\`\`\`
[Demographics] with [relevant history] presents with [chief complaint] x [duration].

HPI: [Organized symptom description with pertinent positives and negatives]

PMH/PSH/Meds/Allergies: [Relevant items]

Social/Family: [Relevant items]

Physical Exam: [Key findings]

Labs/Imaging: [Significant results]

Assessment: [Problem representation and differential]

Plan: [Organized by problem]
\`\`\`

**Daily Presentation:**
- Brief and focused
- Updates on each problem
- New data and interpretation
- Proposed changes to plan

## Shelf Exam Integration

**High-Yield Topics:**
| System | Must-Know |
|--------|-----------|
| Cardiology | HF, ACS, arrhythmias |
| Pulmonology | COPD, PE, pneumonia |
| GI | GI bleed, liver disease |
| Nephrology | AKI, CKD, electrolytes |
| Infectious | Sepsis, UTI, pneumonia |
| Endocrine | Diabetes, thyroid |

**Study Strategy:**
- Questions by topic as you rotate
- Review missed questions thoroughly
- Integrate clinical experience with studying`,
      keyTerms: [
        { term: 'problem representation', definition: 'A concise summary of key clinical features that frames the diagnostic reasoning' },
        { term: 'GDMT', definition: 'Guideline-directed medical therapy - evidence-based treatments for specific conditions' },
        { term: 'qSOFA', definition: 'Quick Sequential Organ Failure Assessment - bedside screening for sepsis' },
        { term: 'HFrEF vs HFpEF', definition: 'Heart failure with reduced vs preserved ejection fraction - different pathophysiology and treatment' },
      ],
      analogies: [
        'Problem representation is like a movie trailer - it captures the essential elements to tell the story efficiently.',
        'GDMT is like a recipe from experts - follow evidence-based ingredients for best outcomes.',
        'Discharge planning is like planning a relay race - smooth handoffs are essential for patient safety.',
      ],
      examples: [
        'A student presents: "65-year-old man with HTN, DM, and CHF presents with 3 days of progressive dyspnea and lower extremity edema consistent with acute HF exacerbation."',
        'On rounds, the team discusses EMPEROR-Reduced trial results when starting a patient on an SGLT2 inhibitor for HFrEF.',
      ],
      patientCounselingPoints: [
        'Clinical reasoning development helps doctors make accurate diagnoses efficiently',
        'Evidence-based medicine ensures patients receive treatments proven to work',
      ],
    },

    4: {
      level: 4,
      summary: 'Advanced medicine clerkship performance requires sophisticated clinical reasoning, nuanced understanding of diagnostic uncertainty, and expert-level communication. Excellence involves leading patient care discussions, integrating complex pathophysiology, and demonstrating consultant-level thinking.',
      explanation: `## Advanced Medicine Clerkship Excellence

Outstanding performance requires integration of deep knowledge, refined clinical skills, and leadership behaviors.

## Expert Clinical Reasoning

**Bayesian Reasoning:**
| Concept | Application |
|---------|-------------|
| Pre-test probability | Estimate based on presentation |
| Likelihood ratio | Test characteristics |
| Post-test probability | Updated estimate |
| Threshold analysis | When to stop testing |

**Diagnostic Uncertainty Management:**
- Communicate uncertainty appropriately
- Safe discharge with uncertainty
- Follow-up planning
- Patient counseling about uncertainty

**Illness Script Development:**
| Component | Elements |
|-----------|----------|
| Epidemiology | Who gets this disease |
| Pathophysiology | How it develops |
| Time course | Typical progression |
| Presentation | Classic features |
| Diagnostic tests | Confirmation approach |
| Treatment | Management strategy |

## Advanced Pathophysiology Integration

**Heart Failure Mechanisms:**
\`\`\`
Cardiac injury → Neurohormonal activation →
Remodeling → Worsening function → Congestion
\`\`\`

**Treatment Targets:**
| Mechanism | Drug Class |
|-----------|------------|
| RAAS activation | ACEi/ARB/ARNI |
| Sympathetic activation | Beta blockers |
| Aldosterone | MRA |
| Volume overload | Diuretics |
| SGLT2 pathways | SGLT2i |

**Sepsis Pathophysiology:**
\`\`\`
Infection → Inflammatory response →
Endothelial dysfunction → Organ hypoperfusion →
Multi-organ failure
\`\`\`

## Leadership on the Team

**Taking Ownership:**
- Proactive patient management
- Anticipating complications
- Initiating discussions about care transitions
- Advocating for patients

**Teaching Peers:**
- Share learning from your patients
- Create teaching points
- Model effective behaviors
- Support struggling colleagues

**Managing Up:**
- Appropriate escalation
- Clear communication of concerns
- Presenting solutions, not just problems
- Understanding supervisor constraints

## Complex Case Management

**Multimorbidity Challenges:**
| Challenge | Approach |
|-----------|----------|
| Competing priorities | Goal-clarification with patient |
| Drug interactions | Pharmacy consultation |
| Polypharmacy | Deprescribing consideration |
| Care transitions | Enhanced communication |

**Difficult Conversations:**
- Goals of care discussions
- Breaking bad news
- Addressing non-adherence
- Family conflicts

## Consultant-Level Thinking

**When to Consult:**
| Indication | Examples |
|------------|----------|
| Diagnostic uncertainty | Unexplained findings |
| Procedural need | Central line, biopsy |
| Management complexity | Specialist medications |
| Second opinion | Major decision points |

**Effective Consultation:**
1. Specific question
2. Relevant background
3. Urgency level
4. Contact information
5. Follow-up expectations

## Documentation Excellence

**Attending-Level Notes:**
- Clear clinical reasoning
- Appropriate detail level
- Defensible decision-making
- Patient-centered language
- Billing compliance

**Quality Metrics:**
| Element | Standard |
|---------|----------|
| Completeness | All required elements |
| Accuracy | Factually correct |
| Clarity | Easy to understand |
| Timeliness | Same-day documentation |

## Honors-Level Performance

**Characteristics:**
| Domain | Excellence Markers |
|--------|-------------------|
| Knowledge | Exceeds expectations |
| Clinical skills | Refined, reliable |
| Reasoning | Sophisticated, calibrated |
| Communication | Clear, patient-centered |
| Professionalism | Exemplary |
| Initiative | Self-directed learning |

**Differentiating Factors:**
- Reads ahead, not just about current patients
- Contributes meaningfully to discussions
- Helps team function efficiently
- Demonstrates growth mindset
- Handles feedback professionally`,
      keyTerms: [
        { term: 'Bayesian reasoning', definition: 'Updating probability estimates based on new information using likelihood ratios' },
        { term: 'illness script', definition: 'Mental representation of a disease including typical features, course, and management' },
        { term: 'deprescribing', definition: 'Systematic process of identifying and discontinuing unnecessary medications' },
        { term: 'goals of care', definition: 'Discussion of patient priorities and values to guide medical decision-making' },
      ],
      analogies: [
        'Bayesian reasoning is like updating your weather prediction - new data (clouds forming) changes your estimate of rain.',
        'Illness scripts are like mental movies of diseases - you recognize the pattern from experience.',
        'Goals of care discussions are like navigation - you need to know the destination before planning the route.',
      ],
      examples: [
        'A student calculates pre-test probability for PE using Wells criteria, then discusses whether CTPA is needed based on D-dimer results.',
        'During a family meeting, a student helps facilitate discussion of goals for an elderly patient with advanced heart failure.',
      ],
      patientCounselingPoints: [
        'Advanced clinical reasoning helps doctors navigate complex medical situations accurately',
        'Goals of care discussions ensure treatment aligns with patient values and preferences',
      ],
    },

    5: {
      level: 5,
      summary: 'Professional mastery of the medicine clerkship encompasses comprehensive clinical expertise, educational leadership, and contribution to the learning environment. Expert performance involves independent patient management, scholarly integration, and modeling excellence for peers.',
      explanation: `## Professional Medicine Clerkship Mastery

Expert-level performance demonstrates independent competence, educational contribution, and professional leadership.

## Expert Diagnostic Reasoning

**Metacognitive Awareness:**
| Skill | Application |
|-------|-------------|
| Cognitive bias recognition | Avoid premature closure |
| Uncertainty calibration | Accurate confidence |
| Error prevention | Systematic approaches |
| Reflection in action | Real-time adjustment |

**Common Cognitive Biases:**
| Bias | Description | Mitigation |
|------|-------------|------------|
| Anchoring | Fixating on initial impression | Force differential reconsideration |
| Availability | Recalling recent/memorable cases | Use systematic approaches |
| Confirmation | Seeking confirming evidence | Actively seek disconfirming data |
| Premature closure | Stopping search too early | Ask "what else could this be?" |

**Diagnostic Excellence:**
- Systematic information gathering
- Appropriate test selection
- Results interpretation
- Hypothesis revision
- Communication of reasoning

## Clinical Leadership

**Team Coordination:**
| Role | Responsibility |
|------|----------------|
| Patient advocate | Ensure needs are addressed |
| Information synthesizer | Integrate data sources |
| Communication hub | Facilitate team interaction |
| Quality monitor | Track outcomes |

**Handoff Excellence:**
- Standardized format (I-PASS)
- Anticipatory guidance
- Clear action items
- Receiver confirmation
- Follow-up verification

## Scholarly Integration

**Evidence Application:**
| Level | Action |
|-------|--------|
| Awareness | Know major trials exist |
| Understanding | Explain trial findings |
| Application | Use in clinical decisions |
| Critical appraisal | Evaluate quality |

**Teaching Integration:**
- Create teaching materials
- Lead educational sessions
- Mentor junior learners
- Contribute to curriculum

## Quality and Safety

**Error Prevention:**
| Domain | Strategies |
|--------|------------|
| Diagnostic | Differential checklists |
| Medication | Reconciliation, allergy check |
| Communication | Structured handoffs |
| Systems | Recognizing failure modes |

**Quality Improvement:**
- Outcome monitoring
- Process analysis
- Intervention design
- Implementation science

## Patient-Centered Excellence

**Communication Mastery:**
| Skill | Application |
|-------|-------------|
| Empathy | Emotional connection |
| Shared decision-making | Value-concordant care |
| Health literacy | Appropriate language |
| Cultural humility | Respect for differences |

**Family Engagement:**
- Information sharing
- Care planning participation
- Emotional support
- Conflict resolution

## Professional Development

**Self-Directed Learning:**
| Activity | Purpose |
|----------|---------|
| Reflective practice | Continuous improvement |
| Feedback seeking | Targeted growth |
| Knowledge updating | Currency maintenance |
| Skill development | Competency expansion |

**Career Preparation:**
- Specialty exploration
- Research involvement
- Leadership development
- Network building

## Assessment and Feedback

**Self-Assessment:**
- Accurate performance estimation
- Gap identification
- Learning goal setting
- Progress monitoring

**Feedback Utilization:**
| Type | Application |
|------|-------------|
| Formative | Ongoing improvement |
| Summative | Performance benchmark |
| 360-degree | Multi-perspective view |
| Self-generated | Reflective practice |

## Shelf Exam Mastery

**Advanced Preparation:**
| Strategy | Implementation |
|----------|----------------|
| Integration | Link questions to patients |
| Pattern recognition | Identify question types |
| Time management | Pacing practice |
| Test-taking | Strategic approach |

**Performance Optimization:**
- Simulate exam conditions
- Analyze performance data
- Target weaknesses
- Build endurance`,
      keyTerms: [
        { term: 'cognitive bias', definition: 'Systematic patterns of deviation from rational judgment that affect clinical decision-making' },
        { term: 'I-PASS', definition: 'Standardized handoff framework: Illness severity, Patient summary, Action list, Situation awareness, Synthesis by receiver' },
        { term: 'shared decision-making', definition: 'Collaborative process where clinicians and patients make healthcare decisions together' },
        { term: 'premature closure', definition: 'Cognitive error of accepting a diagnosis before it has been fully verified' },
      ],
      clinicalNotes: `Expert perspective on medicine clerkship excellence:

1. **Foundation for Medicine:** The medicine clerkship establishes core clinical skills used across all specialties. Investment here pays dividends throughout your career.

2. **Clinical Reasoning is Central:** The ability to think through problems systematically distinguishes excellent clinicians. Practice the process, not just the answers.

3. **Know Your Patients:** There is no substitute for thoroughly knowing everything about your patients. This knowledge is the foundation of excellent presentations and care.

4. **Own the Patient:** Take responsibility as if you were the attending. Anticipate needs, follow results, and ensure nothing falls through the cracks.

5. **Read Every Day:** Integrate clinical experience with targeted reading. This combination creates durable knowledge.

6. **Seek Feedback Actively:** Do not wait for evaluations. Ask specifically: "What is one thing I could do better?"

7. **Professionalism Always:** How you treat staff, patients, and colleagues matters as much as your medical knowledge.

8. **Teach to Learn:** Explaining concepts to others deepens your understanding and demonstrates mastery.

9. **Balance is Essential:** Sustainable performance requires adequate sleep, exercise, and personal time. Burnout helps no one.

10. **Growth Mindset:** Approach challenges as learning opportunities. The best students learn the most from their mistakes.`,
    },
  },

  media: [
    {
      id: 'medicine-clerkship-workflow',
      type: 'diagram',
      filename: 'medicine-clerkship-workflow.svg',
      title: 'Daily Medicine Clerkship Workflow',
      description: 'Diagram showing typical daily structure for medicine rotation',
    },
    {
      id: 'clinical-reasoning-framework',
      type: 'diagram',
      filename: 'clinical-reasoning-framework.svg',
      title: 'Clinical Reasoning Framework',
      description: 'Visual guide to systematic diagnostic reasoning',
    },
  ],

  citations: [
    {
      id: 'cdim-competencies',
      type: 'website',
      title: 'Core Competencies in Internal Medicine Clerkship',
      source: 'Clerkship Directors in Internal Medicine',
      url: 'https://www.im.org/resources/ume-gme-702',
      accessedDate: '2025-01-28',
    },
    {
      id: 'step-up-medicine',
      type: 'textbook',
      title: 'Step-Up to Medicine',
      authors: ['Agabegi, S.S.', 'Agabegi, E.D.'],
      source: 'Wolters Kluwer',
      accessedDate: '2025-01-28',
    },
  ],

  crossReferences: [
    { targetId: 'clerkship-overview', targetType: 'concept', relationship: 'parent', label: 'Clerkship Overview' },
    { targetId: 'clerkship-surgery', targetType: 'concept', relationship: 'sibling', label: 'Surgery Clerkship' },
    { targetId: 'education-clinical-reasoning', targetType: 'concept', relationship: 'related', label: 'Clinical Reasoning' },
  ],

  tags: {
    systems: ['medical-education', 'clinical-rotations'],
    topics: ['internal medicine', 'clerkship', 'clinical skills', 'medical education'],
    keywords: ['medicine rotation', 'internal medicine', 'clinical clerkship', 'ward rounds', 'patient care'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['internal-medicine'],
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export default medicineClerkship;
