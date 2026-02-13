/**
 * Internal Medicine Rotation Guide - Clinical Rotations
 *
 * Comprehensive guide for medical students on the internal medicine clerkship,
 * covering expectations, clinical skills, and preparation strategies.
 */

import { EducationalContent } from '../../types';

export const internalMedicineRotation: EducationalContent = {
  id: 'rotations-internal-medicine',
  type: 'concept',
  name: 'Internal Medicine Rotation',
  alternateNames: ['Medicine Clerkship', 'IM Rotation', 'Internal Medicine Clerkship'],

  levels: {
    1: {
      level: 1,
      summary: 'The internal medicine rotation teaches medical students how to care for adults with all kinds of medical problems, from common illnesses to complex diseases.',
      explanation: `Internal medicine is about taking care of adult patients with medical (not surgical) problems. This rotation is one of the most important in medical school.

**What Internal Medicine Doctors Do:**
- Diagnose complex medical problems
- Manage chronic diseases like diabetes and heart disease
- Coordinate care with specialists
- Prevent disease through screening and counseling

**What You Will Do on This Rotation:**
- Follow your own patients closely
- Do complete physical exams
- Write detailed notes
- Present patients to your team
- Learn to think through complex problems

**Common Conditions You Will See:**
- Pneumonia and other infections
- Heart failure
- Diabetes management
- Kidney problems
- Liver disease
- Blood disorders
- Hospital-acquired complications

**Daily Schedule:**
- **Morning:** Pre-rounds, see your patients
- **Mid-morning:** Team rounds with attending
- **Afternoon:** Admissions, follow-ups, teaching
- **Evening:** Finish notes, read about cases

**Tips for Success:**
- Know your patients inside and out
- Read about every diagnosis you see
- Practice your presentations
- Ask questions and show curiosity
- Be thorough but organized
- Build relationships with patients

**What Makes This Rotation Special:**
- Deep thinking about diagnosis
- Understanding how diseases connect
- Longitudinal patient relationships
- Foundation for any medical career

**Important Skills to Develop:**
- Complete history taking
- Thorough physical examination
- Clear oral presentations
- Organized written notes
- Clinical reasoning
- Evidence-based decision making`,
      keyTerms: [
        { term: 'internal medicine', definition: 'The specialty focused on preventing, diagnosing, and treating diseases in adults' },
        { term: 'attending physician', definition: 'The fully trained doctor who supervises the team and is responsible for patient care' },
        { term: 'rounds', definition: 'When the medical team discusses each patient together, often while visiting them' },
      ],
      analogies: [
        'An internist is like a detective - gathering clues from the history, exam, and tests to solve the mystery of what is wrong.',
        'Internal medicine is the trunk of the tree - many specialties branch off from it, but it holds everything together.',
      ],
      examples: [
        'A patient comes in with shortness of breath - you will learn to figure out if it is heart failure, pneumonia, a blood clot, or something else.',
        'You might follow a patient with diabetes who is admitted for an infection and learn how all their problems connect.',
      ],
      patientCounselingPoints: [
        'Many patients have several conditions at once - explaining how they connect helps them understand their health.',
        'Medication teaching is crucial - make sure patients understand what they are taking and why.',
        'Lifestyle discussions (diet, exercise, smoking) are as important as prescriptions.',
      ],
    },
    2: {
      level: 2,
      summary: 'The internal medicine clerkship develops diagnostic reasoning, comprehensive patient evaluation skills, and evidence-based management of common medical conditions in hospital and ambulatory settings.',
      explanation: `## Internal Medicine Clerkship Structure

**Duration:** Typically 8-12 weeks
**Settings:**
| Setting | Focus |
|---------|-------|
| Inpatient wards | Acute illness management |
| ICU/CCU (some programs) | Critical care exposure |
| Ambulatory clinic | Outpatient chronic disease |
| Subspecialty clinics | Specialty exposure |

## Daily Workflow

**Pre-Rounds (6-7 AM):**
- Check overnight events, vitals, I/Os
- Review new labs and imaging
- Examine your patients
- Formulate assessment and plan
- Prepare presentation

**Attending Rounds (8-10 AM):**
- Present patients formally
- Discuss pathophysiology
- Teaching points
- Plan refinement

**Work Rounds/Post-Rounds:**
- Update problem lists
- Write/update notes
- Place orders
- Coordinate care
- Follow up on pending tests

**Afternoon:**
- New admissions
- Patient education
- Family meetings
- Reading/studying

## Core Clinical Skills

**History Taking:**

*Complete Medical History:*
| Component | Key Elements |
|-----------|--------------|
| Chief complaint | In patient's words |
| HPI | OLDCARTS, timeline |
| PMH | Conditions, surgeries |
| Medications | Names, doses, compliance |
| Allergies | Reactions, not side effects |
| Family history | First-degree relatives |
| Social history | Smoking, alcohol, drugs, occupation |
| Review of systems | Systematic screen |

**Physical Examination:**

*Systematic Approach:*
- General appearance and vitals
- HEENT
- Neck (JVD, thyroid, lymph nodes)
- Cardiovascular
- Pulmonary
- Abdominal
- Extremities (edema, pulses)
- Neurologic
- Skin

**Presentation Format:**

*Classic Structure:*
\`\`\`
"This is [name], a [age]-year-old [gender] with a PMH of [relevant conditions] who presents with [chief complaint] for [duration]."

[HPI in chronological narrative]

"Review of systems is notable for... and negative for..."

[Relevant PMH, meds, allergies, social]

"On exam, vitals are... General appearance... [system by system]"

"Labs and imaging show..."

"In summary, this is a [age] [gender] with [conditions] presenting with [problem]. My differential includes... Most likely..."

"My plan is..."
\`\`\`

## Common Conditions

**Cardiovascular:**
| Condition | Key Management Points |
|-----------|----------------------|
| Heart failure exacerbation | Diuresis, optimize GDMT |
| Acute coronary syndrome | Risk stratification, anticoagulation |
| Atrial fibrillation | Rate vs. rhythm, anticoagulation |
| Hypertensive emergency | BP control, end-organ assessment |

**Pulmonary:**
| Condition | Key Points |
|-----------|------------|
| Community-acquired pneumonia | CURB-65, antibiotic selection |
| COPD exacerbation | Bronchodilators, steroids, antibiotics |
| Pulmonary embolism | Wells, D-dimer, anticoagulation |
| Asthma exacerbation | Peak flow, steroids, bronchodilators |

**Infectious Disease:**
| Condition | Management |
|-----------|------------|
| Sepsis | Early recognition, bundle compliance |
| UTI/Pyelonephritis | Culture-guided antibiotics |
| Cellulitis | Antibiotic coverage, MRSA risk |
| C. diff colitis | Isolation, oral vancomycin |

**Renal:**
| Condition | Approach |
|-----------|----------|
| AKI | Pre-renal vs. intrinsic vs. post-renal |
| CKD management | Complication prevention |
| Electrolyte disorders | Systematic correction |

## Note Writing

**Admission H&P:**
- Complete, thorough documentation
- All history and exam elements
- Data synthesis
- Differential diagnosis
- Evidence-based plan

**Daily Progress Notes:**

*SOAP Format:*
| Section | Content |
|---------|---------|
| S - Subjective | Patient symptoms, overnight events |
| O - Objective | Vitals, exam, labs, imaging |
| A - Assessment | Problem list, progress |
| P - Plan | By problem or system |

## Study Priorities

**High-Yield Shelf Topics:**
| Category | Topics |
|----------|--------|
| Cardiology | CHF, ACS, arrhythmias, HTN |
| Pulmonology | COPD, asthma, pneumonia, PE |
| Nephrology | AKI, CKD, electrolytes, acid-base |
| GI/Hepatology | GI bleed, cirrhosis, pancreatitis |
| Endocrine | Diabetes, thyroid |
| Heme/Onc | Anemia, DVT, cancer screening |
| ID | Sepsis, common infections |
| Rheumatology | Arthritis, lupus |

**Resources:**
- Step Up to Medicine
- UWorld Step 2 CK
- Online Med Ed
- IM Essentials
- MKSAP (if available)`,
      keyTerms: [
        { term: 'SOAP note', definition: 'Documentation format: Subjective, Objective, Assessment, Plan' },
        { term: 'differential diagnosis', definition: 'List of possible diagnoses that could explain a patient\'s presentation' },
        { term: 'GDMT', definition: 'Guideline-Directed Medical Therapy; evidence-based medication regimen for conditions like heart failure' },
        { term: 'CURB-65', definition: 'Severity score for pneumonia: Confusion, Urea, Respiratory rate, Blood pressure, age 65+' },
      ],
      analogies: [
        'Building a differential diagnosis is like being a detective with multiple suspects - you gather evidence to narrow it down.',
        'The problem list is like a to-do list for the patient\'s health - each problem needs its own plan.',
      ],
    },
    3: {
      level: 3,
      summary: 'Internal medicine clerkship excellence requires mastery of clinical reasoning processes, evidence-based management algorithms, multidisciplinary care coordination, and effective communication across the healthcare team.',
      explanation: `## Clinical Reasoning Framework

**Diagnostic Reasoning Approaches:**

*Hypothetico-Deductive:*
- Generate hypotheses early
- Gather data to confirm/refute
- Iterative refinement
- Most common expert approach

*Pattern Recognition:*
- Recognize illness scripts
- Match presentations to known patterns
- Risk: Premature closure

*Systematic (Exhaustive):*
- Consider all possibilities
- Use frameworks (anatomic, pathophysiologic)
- Resource-intensive but thorough

**Problem Representation:**

*Semantic Qualifiers:*
| Transformation | Example |
|----------------|---------|
| Acute vs. chronic | Sudden vs. gradual onset |
| Severe vs. mild | Degree of impairment |
| Continuous vs. intermittent | Pattern of symptoms |
| Localized vs. diffuse | Distribution |

*One-Liner Construction:*
"[Age] [gender] with [key history] presenting with [duration] of [semantic qualifier] [chief complaint] associated with [key features]"

## Evidence-Based Practice

**Applying Evidence to Patients:**

*PICO Framework:*
| Element | Application |
|---------|-------------|
| P - Patient | Characteristics of your patient |
| I - Intervention | Treatment being considered |
| C - Comparison | Alternative approaches |
| O - Outcome | What matters to patient |

**Levels of Evidence:**
| Level | Source |
|-------|--------|
| I | Systematic reviews, RCTs |
| II | Cohort studies |
| III | Case-control studies |
| IV | Case series |
| V | Expert opinion |

**Key Guidelines to Know:**
| Condition | Guideline Source |
|-----------|------------------|
| Heart failure | ACC/AHA |
| Hypertension | JNC/ACC |
| Diabetes | ADA |
| COPD | GOLD |
| Asthma | GINA |
| Anticoagulation | CHEST |

## Complex Case Management

**Multimorbidity:**

*Approach:*
- Prioritize by acuity and impact
- Consider interactions between conditions
- Simplify medications when possible
- Align with patient goals
- Coordinate specialists

*Medication Reconciliation:*
| Step | Action |
|------|--------|
| Verify | Compare lists from all sources |
| Clarify | Confirm with patient/pharmacy |
| Reconcile | Resolve discrepancies |
| Transmit | Communicate accurate list |

**Care Transitions:**

*Discharge Planning:*
- Start on admission
- Identify barriers to discharge
- Coordinate home services
- Medication education
- Follow-up appointments
- Warning signs education

*Handoff Communication (I-PASS):*
| Element | Content |
|---------|---------|
| Illness severity | Stable, watcher, unstable |
| Patient summary | One-liner |
| Action list | To-do items |
| Situation awareness | What might happen |
| Synthesis | Opportunity for questions |

## Subspecialty Integration

**Cardiology:**
| Consultation | Key Information |
|--------------|-----------------|
| ACS | Troponin trend, ECG, timing |
| Heart failure | EF, volume status, BNP |
| Arrhythmia | ECG, hemodynamics |

**Nephrology:**
| Consultation | Key Information |
|--------------|-----------------|
| AKI | Creatinine trend, volume, obstruction |
| CKD | Stage, complications, dialysis need |
| Electrolytes | Severity, symptoms, etiology |

**Pulmonology:**
| Consultation | Key Information |
|--------------|-----------------|
| COPD/Asthma | FEV1, current regimen |
| Pleural disease | Imaging, fluid analysis |
| Respiratory failure | ABG, ventilation status |

## Advanced Physical Exam

**Cardiovascular:**
| Finding | Significance |
|---------|--------------|
| JVD | Volume overload, right heart failure |
| S3 gallop | LV dysfunction |
| S4 gallop | Stiff ventricle |
| Murmurs | Valvular disease |
| Displaced PMI | Cardiomegaly |

**Pulmonary:**
| Finding | Significance |
|---------|--------------|
| Crackles | Fluid, fibrosis, infection |
| Wheezes | Airway obstruction |
| Decreased breath sounds | Effusion, consolidation |
| Egophony | Consolidation |
| Dullness to percussion | Effusion, consolidation |

**Abdominal:**
| Finding | Significance |
|---------|--------------|
| Hepatomegaly | Heart failure, liver disease |
| Splenomegaly | Portal hypertension, heme disorders |
| Ascites | Liver disease, malignancy |
| Shifting dullness | Ascites |

## Documentation Excellence

**Assessment Section Best Practices:**
- Lead with most important problem
- Provide reasoning, not just diagnosis
- Include relevant negatives
- Address each active problem
- Note deferred/resolved issues

**Plan Section Organization:**
| Approach | When to Use |
|----------|-------------|
| By problem | Complex patients, multiple issues |
| By system | Simpler patients, related issues |
| Hybrid | Most common approach |

**Attestation and Billing:**
- Attending must attest to student notes
- Document medical decision-making
- Time-based billing documentation
- Critical care time if applicable`,
      keyTerms: [
        { term: 'illness script', definition: 'Mental template of how a disease typically presents, including predisposing factors, pathophysiology, and clinical features' },
        { term: 'premature closure', definition: 'Cognitive error of accepting a diagnosis before adequately considering alternatives' },
        { term: 'I-PASS', definition: 'Structured handoff tool: Illness severity, Patient summary, Action list, Situation awareness, Synthesis' },
        { term: 'semantic qualifier', definition: 'Descriptive terms that transform chief complaint data into abstract concepts useful for diagnosis' },
      ],
      clinicalNotes: 'The problem representation ("one-liner") is the most important skill for clinical reasoning. Practice transforming patient data into concise summaries that trigger appropriate differential diagnoses. A good one-liner should make listeners think of the right diagnosis.',
    },
    4: {
      level: 4,
      summary: 'Advanced internal medicine clerkship performance integrates sophisticated diagnostic reasoning, quality improvement engagement, interprofessional collaboration, and strategic preparation for residency in medicine or medicine-based subspecialties.',
      explanation: `## Advanced Diagnostic Reasoning

**Cognitive Biases in Medicine:**

| Bias | Definition | Mitigation |
|------|------------|------------|
| Anchoring | Over-relying on initial impression | Serial reassessment |
| Availability | Overweighting recent experiences | Systematic approach |
| Confirmation | Seeking only supporting evidence | Actively seek disconfirmation |
| Premature closure | Accepting diagnosis too early | "What else could this be?" |
| Diagnosis momentum | Accepting prior diagnosis uncritically | Verify independently |
| Framing | Being influenced by how info is presented | Reframe the problem |

**Metacognition:**
- Awareness of thinking process
- "Slow down" when uncertain
- Recognize emotional influences
- Seek feedback on reasoning

**Diagnostic Uncertainty Management:**

| Strategy | Application |
|----------|-------------|
| Explicitly acknowledge | "We're not sure yet" |
| Communicate to patient | Shared understanding |
| Create contingency plans | If X happens, do Y |
| Schedule reassessment | Don't diagnose and forget |
| Document uncertainty | Communicate to colleagues |

## Quality Improvement and Safety

**Quality Metrics in Medicine:**
| Metric | Example |
|--------|---------|
| Process | DVT prophylaxis rate |
| Outcome | 30-day readmission |
| Patient experience | HCAHPS scores |
| Safety | Falls, infections |

**High-Value Care:**

*Choosing Wisely Principles:*
| Recommendation | Rationale |
|----------------|-----------|
| Avoid routine labs without indication | Cost, discomfort, false positives |
| Don't repeat imaging unnecessarily | Radiation, cost |
| Avoid unnecessary antibiotics | Resistance, C. diff |
| Question daily tests | Value vs. cost |

**Safety Practices:**
| Practice | Implementation |
|----------|----------------|
| Medication reconciliation | Every transition |
| VTE prophylaxis | Every patient |
| Fall prevention | Risk assessment, precautions |
| Infection control | Hand hygiene, isolation |

## Interprofessional Practice

**Team Members:**
| Role | Collaboration Points |
|------|---------------------|
| Nursing | Safety, patient status, care coordination |
| Pharmacy | Medication review, dosing, interactions |
| Care management | Discharge planning, resources |
| Social work | Psychosocial needs, placement |
| Physical therapy | Mobility, discharge safety |
| Dietary | Nutrition assessment, education |
| Chaplaincy | Spiritual care, coping |

**Effective Communication:**
| Situation | Approach |
|-----------|----------|
| Urgent concerns | Direct, clear, escalate appropriately |
| Care coordination | Regular team meetings |
| Conflict | Address directly, professionally |
| Feedback | Specific, constructive, timely |

## Subspecialty Preparation

**Hospital Medicine Career Track:**
| Aspect | Preparation |
|--------|-------------|
| Complex patients | Seek challenging cases |
| Systems | QI projects, safety initiatives |
| Procedures | Bedside procedures exposure |
| Teaching | Medical student education |

**Subspecialty Fellowship Preparation:**

| Specialty | Key Clerkship Activities |
|-----------|-------------------------|
| Cardiology | ECG interpretation, consults |
| GI | Liver cases, procedures |
| Pulm/CCU | ICU exposure, ventilators |
| Nephrology | AKI, electrolytes, dialysis |
| Heme/Onc | Anemia workup, malignancies |
| ID | Antibiotic stewardship, complex infections |
| Rheumatology | Joint pain, autoimmune cases |

## Research Integration

**Opportunities:**
| Type | Engagement |
|------|------------|
| Case reports | Unusual presentations |
| QI projects | Departmental initiatives |
| Database research | EHR-based studies |
| Clinical trials | Subject recruitment |
| Reviews | Systematic or narrative |

**Evidence Appraisal Skills:**
| Study Type | Key Questions |
|------------|---------------|
| RCT | Randomization, blinding, ITT |
| Cohort | Confounders, follow-up |
| Case-control | Selection bias, recall |
| Meta-analysis | Heterogeneity, publication bias |

## Residency Application Strategy

**Internal Medicine Match:**

| Factor | Strategy |
|--------|----------|
| Step scores | Strong performance |
| Grades | Honors in IM |
| Letters | IM faculty, program directors |
| Research | Publications/presentations |
| Leadership | Student organizations |
| Personal statement | Specific to IM passion |

**Program Evaluation:**
| Criterion | Assessment |
|-----------|------------|
| Training sites | Variety, volume |
| Fellowship match | Subspecialty success |
| Resident wellness | Satisfaction, burnout |
| Teaching | Education quality |
| Location | Personal factors |

**Away Rotations:**
- Target programs of interest
- Demonstrate fit
- Obtain letters
- Network
- Usually August-October

## Advanced Procedures

**Medicine Procedures to Learn:**
| Procedure | Level of Competency Goal |
|-----------|--------------------------|
| Arterial blood gas | Perform independently |
| Venipuncture | Perform independently |
| Peripheral IV | Perform independently |
| EKG interpretation | Independent analysis |
| Paracentesis | Observe/assist |
| Thoracentesis | Observe/assist |
| Lumbar puncture | Observe/assist |

**Procedure Documentation:**
- Indication
- Consent
- Timeout
- Technique
- Findings
- Complications
- Specimens sent`,
      keyTerms: [
        { term: 'metacognition', definition: 'Awareness and understanding of one\'s own thinking processes; "thinking about thinking"' },
        { term: 'high-value care', definition: 'Healthcare that balances clinical benefit with costs and potential harms' },
        { term: 'Choosing Wisely', definition: 'Initiative identifying tests and treatments commonly overused in medicine' },
        { term: 'intention-to-treat', definition: 'ITT; analysis including all randomized patients regardless of compliance, preserving randomization' },
      ],
      clinicalNotes: 'For students interested in medicine subspecialties, identify potential mentors early and seek opportunities to work on projects together. Fellowship match is competitive - start building your CV in medical school.',
    },
    5: {
      level: 5,
      summary: 'Expert-level internal medicine clerkship engagement encompasses medical education scholarship, clinical reasoning expertise development, systems leadership, and contribution to advancing the field of academic medicine.',
      explanation: `## Clinical Reasoning Expertise

**Expert Clinician Characteristics:**

| Attribute | Development Path |
|-----------|------------------|
| Rich illness scripts | Deliberate learning from cases |
| Pattern recognition | High case volume, feedback |
| Adaptive expertise | Novel problem solving |
| Metacognitive skill | Reflective practice |
| Knowledge organization | Conceptual frameworks |

**Deliberate Practice in Diagnosis:**
| Element | Application |
|---------|-------------|
| Specific goals | Target reasoning gaps |
| Focused attention | Single skill focus |
| Immediate feedback | Expert review of reasoning |
| Repetition with variation | Multiple case types |
| Progressive difficulty | Increasing complexity |

**Teaching Clinical Reasoning:**

*Case Presentation as Teaching:*
| Stage | Teaching Opportunity |
|-------|---------------------|
| Data gathering | What to ask and why |
| Problem representation | Synthesis skills |
| Differential generation | Hypothesis formation |
| Diagnostic verification | Test interpretation |
| Management | Evidence application |

## Medical Education Scholarship

**Education Research Opportunities:**

| Area | Potential Projects |
|------|-------------------|
| Assessment | Validity of evaluations |
| Curriculum | Educational interventions |
| Simulation | Skills development |
| Learning science | Cognitive load, spacing |
| Feedback | Effective approaches |

**Academic Medicine Career Path:**

*Clinician-Educator Track:*
| Milestone | Activities |
|-----------|------------|
| Medical school | Teaching, curriculum involvement |
| Residency | Chief resident, teaching awards |
| Fellowship | Education fellowship or focus |
| Faculty | Education scholarship, leadership |

**Education Scholarship Products:**
| Type | Examples |
|------|----------|
| Innovation | Curriculum, simulation |
| Investigation | Education research |
| Integration | Review, meta-analysis |
| Application | Implementation science |

## Systems Leadership

**Healthcare Systems Understanding:**

| Domain | Knowledge Areas |
|--------|-----------------|
| Quality | Measurement, improvement methodology |
| Safety | Error prevention, safety culture |
| Informatics | EHR, clinical decision support |
| Policy | Payment, regulations |
| Population health | Prevention, social determinants |

**Leadership Development:**
| Opportunity | How to Engage |
|-------------|---------------|
| Student government | Medical school representation |
| Quality committees | Departmental participation |
| Peer teaching | Organized programs |
| Research leadership | Project management |
| Advocacy | Professional organizations |

## Advanced Topics

**Artificial Intelligence in Medicine:**
| Application | Current Status |
|-------------|----------------|
| Diagnostic support | Decision support tools |
| Imaging interpretation | Radiology AI |
| Predictive analytics | Deterioration prediction |
| Documentation | Ambient clinical intelligence |
| Literature review | Evidence synthesis |

**Precision Medicine:**
| Aspect | Internal Medicine Application |
|--------|------------------------------|
| Pharmacogenomics | Drug selection, dosing |
| Risk prediction | Genetic risk scores |
| Targeted therapy | Oncology, rheumatology |
| Prevention | Personalized screening |

**Global Health Perspectives:**
| Topic | Relevance |
|-------|-----------|
| Disease burden | Non-communicable diseases rising |
| Health systems | Access and quality variations |
| Social determinants | Universal factors |
| Climate health | Emerging impacts |

## Professionalism and Ethics

**Complex Ethical Situations:**
| Scenario | Framework |
|----------|-----------|
| End-of-life | Goals of care discussions |
| Capacity assessment | Decision-making ability |
| Surrogate decisions | Substituted judgment |
| Resource allocation | Justice considerations |
| Error disclosure | Transparency |

**Wellness and Burnout:**
| Challenge | Strategy |
|-----------|----------|
| Long hours | Efficiency, boundaries |
| Emotional burden | Processing, support |
| Work-life balance | Prioritization |
| Imposter syndrome | Normalization, mentorship |

## Innovation in Medical Education

**Emerging Approaches:**

| Innovation | Application |
|------------|-------------|
| Competency-based | Milestone assessment |
| Adaptive learning | Personalized education |
| Virtual patients | Simulated reasoning |
| Team-based learning | Active pedagogy |
| Entrustable activities | Workplace assessment |

**Technology in Education:**
| Technology | Educational Use |
|------------|-----------------|
| Virtual reality | Procedure simulation |
| AI tutors | Personalized feedback |
| Mobile learning | Spaced repetition |
| Analytics | Learning optimization |

## Contributing to the Field

**Student Scholarship:**
| Contribution | Venue |
|--------------|-------|
| Case reports | Student journals |
| Research | Faculty mentorship |
| QI projects | Institutional improvement |
| Education projects | Curriculum development |
| Advocacy | Policy engagement |

**Professional Development:**
| Activity | Benefit |
|----------|---------|
| Conferences | Networking, learning |
| Professional organizations | Community, resources |
| Mentorship | Guidance, sponsorship |
| Peer networks | Support, collaboration |

**Building a Career:**

*Long-term Planning:*
| Timeline | Focus |
|----------|-------|
| Medical school | Foundation, exploration |
| Residency | Competency, specialization |
| Fellowship (if applicable) | Expertise development |
| Early career | Niche establishment |
| Mid-career | Leadership, scholarship |
| Senior career | Mentorship, legacy |`,
      keyTerms: [
        { term: 'adaptive expertise', definition: 'Ability to flexibly apply knowledge to novel situations beyond routine problems' },
        { term: 'clinician-educator', definition: 'Physician whose academic focus is medical education scholarship and teaching' },
        { term: 'ambient clinical intelligence', definition: 'AI technology that passively captures and documents clinical encounters' },
        { term: 'competency-based medical education', definition: 'Outcomes-focused approach defining specific abilities trainees must demonstrate' },
      ],
      clinicalNotes: `Expert Practice Points:
1. Expert clinicians have highly organized knowledge in illness scripts developed through deliberate practice
2. Teaching clinical reasoning is a valuable way to strengthen your own reasoning skills
3. Medical education research is a growing field with meaningful opportunities
4. Systems improvement skills are increasingly valued in medical careers
5. AI is transforming medicine - understanding its applications is essential
6. Wellness is not optional - sustainable careers require intentional self-care
7. Start building your academic portfolio now - scholarship takes time to develop`,
    },
  },

  media: [
    {
      id: 'clinical-reasoning-diagram',
      type: 'diagram',
      filename: 'clinical-reasoning-diagram.svg',
      title: 'Clinical Reasoning Process',
      description: 'Visual representation of diagnostic reasoning steps',
    },
    {
      id: 'presentation-framework',
      type: 'diagram',
      filename: 'presentation-framework.svg',
      title: 'Patient Presentation Framework',
      description: 'Structure for organizing oral patient presentations',
    },
  ],

  citations: [
    {
      id: 'acp-education',
      type: 'website',
      title: 'American College of Physicians - Medical Student Resources',
      source: 'American College of Physicians',
      url: 'https://www.acponline.org/about-acp/about-internal-medicine/career-paths/medical-student-resources',
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
    { targetId: 'rotations-surgery', targetType: 'concept', relationship: 'sibling', label: 'Surgery Rotation' },
    { targetId: 'rotations-pediatrics', targetType: 'concept', relationship: 'sibling', label: 'Pediatrics Rotation' },
    { targetId: 'clinical-reasoning-overview', targetType: 'concept', relationship: 'related', label: 'Clinical Reasoning' },
  ],

  tags: {
    systems: ['general'],
    topics: ['clinical-rotations', 'medical-education', 'internal-medicine'],
    keywords: ['internal medicine clerkship', 'clinical reasoning', 'diagnosis', 'medical education'],
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
  contributors: ['Biological Self Content Team'],
};

export default internalMedicineRotation;
