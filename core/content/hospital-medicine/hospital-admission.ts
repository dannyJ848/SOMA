/**
 * Hospital Admission Process - Educational Content
 *
 * Comprehensive guide to understanding the hospital admission process,
 * from arrival through initial assessment and room assignment.
 */

import { EducationalContent } from '../types';
import { AdmissionStep } from './types';

/**
 * Hospital admission steps for patient reference
 */
export const ADMISSION_STEPS: AdmissionStep[] = [
  {
    step: 1,
    name: 'Registration/Check-in',
    description: 'Providing personal and insurance information at the admissions desk',
    whatToExpect: 'Staff will collect your identification, insurance cards, and emergency contact information',
    patientTips: [
      'Bring photo ID and insurance cards',
      'Have a list of current medications ready',
      'Bring emergency contact phone numbers',
      'Ask about estimated wait times',
    ],
    documentsNeeded: ['Photo ID', 'Insurance cards', 'Referral/authorization if required', 'Advance directives if available'],
    duration: '15-30 minutes',
  },
  {
    step: 2,
    name: 'Triage Assessment',
    description: 'Initial evaluation to determine urgency and care needs',
    whatToExpect: 'A nurse will check your vital signs and ask about your symptoms and medical history',
    patientTips: [
      'Be honest about your symptoms and pain level',
      'Mention any allergies',
      'Describe when symptoms started',
      'Report any recent hospitalizations or surgeries',
    ],
    duration: '10-20 minutes',
  },
  {
    step: 3,
    name: 'Medical Evaluation',
    description: 'Physician or provider assessment and examination',
    whatToExpect: 'A doctor will examine you, ask detailed questions, and may order tests',
    patientTips: [
      'Ask questions about your diagnosis',
      'Request explanations in terms you understand',
      'Ask about what tests are being ordered and why',
      'Inquire about the treatment plan',
    ],
    duration: '30-60 minutes',
  },
  {
    step: 4,
    name: 'Diagnostic Testing',
    description: 'Lab work, imaging, or other tests ordered by your physician',
    whatToExpect: 'You may need blood draws, X-rays, CT scans, EKGs, or other tests',
    patientTips: [
      'Ask how long results will take',
      'Inform staff of any allergies to contrast dyes',
      'Ask about eating/drinking restrictions before tests',
      'Request copies of results for your records',
    ],
    duration: 'Varies (30 minutes to several hours)',
  },
  {
    step: 5,
    name: 'Admission Decision',
    description: 'Determination of whether inpatient admission is needed',
    whatToExpect: 'The doctor will explain whether you need to be admitted and why',
    patientTips: [
      'Understand the difference between observation and inpatient admission',
      'Ask about expected length of stay',
      'Inquire about what will happen during your stay',
      'Ask about the anticipated discharge plan',
    ],
  },
  {
    step: 6,
    name: 'Room Assignment',
    description: 'Transfer to your hospital room on the appropriate unit',
    whatToExpect: 'You will be taken to a room matching your care needs (ICU, medical floor, surgical floor, etc.)',
    patientTips: [
      'Ask for an orientation to your room and call button',
      'Know the visiting hours and policies',
      'Secure your valuables or send them home',
      'Learn how to contact nursing staff',
    ],
  },
  {
    step: 7,
    name: 'Nursing Admission Assessment',
    description: 'Comprehensive nursing evaluation and care planning',
    whatToExpect: 'Detailed questions about your health history, functional status, and care needs',
    patientTips: [
      'Be thorough about your medical history',
      'Mention fall risk factors',
      'Discuss any special dietary needs',
      'Share your preferences and concerns',
    ],
    duration: '30-60 minutes',
  },
];

export const hospitalAdmission: EducationalContent = {
  id: 'concept-hospital-admission-process',
  type: 'concept',
  name: 'Hospital Admission Process',
  alternateNames: ['Hospital Check-in', 'Inpatient Admission', 'Hospital Registration'],

  levels: {
    1: {
      level: 1,
      summary: 'Going to the hospital involves checking in, being examined by doctors, and getting a room where nurses will take care of you.',
      explanation: `When you need to stay in the hospital, there are several steps that happen to make sure you get the right care.

**Step 1: Check-in (Registration)**
When you arrive at the hospital, you go to a desk where someone asks for your name, address, and insurance card. This is like checking in at a hotel, but for your health. They put a bracelet on your wrist with your name so everyone knows who you are.

**Step 2: Nurse Check (Triage)**
A nurse will check your temperature, blood pressure, and how fast your heart is beating. They'll ask you what's wrong and how bad you feel. This helps the hospital know how quickly you need to see a doctor.

**Step 3: Doctor Visit**
A doctor will listen to your heart and lungs, feel your belly, and ask more questions about how you're feeling. They might want to do tests like taking blood or getting pictures of inside your body.

**Step 4: Getting Your Room**
If you need to stay overnight, you'll be taken to a hospital room. It has a special bed that goes up and down, a TV, and a button to call the nurse if you need help.

**Step 5: Settling In**
Nurses will check on you regularly. They'll bring you meals and medicine. Your family can visit during certain hours.

**What to Bring:**
- Your ID card and insurance card
- A list of medicines you take
- Comfortable clothes and slippers
- Your phone and charger
- Something to read or do`,
      keyTerms: [
        { term: 'admission', definition: 'When you officially become a patient staying in the hospital' },
        { term: 'triage', definition: 'The process of deciding who needs care most urgently' },
        { term: 'vital signs', definition: 'Measurements like temperature and blood pressure that show how your body is doing' },
        { term: 'wristband', definition: 'A bracelet put on your wrist with your name and information' },
      ],
      analogies: [
        'Hospital admission is like checking into a hotel, but instead of a vacation, you\'re there to get better.',
        'The triage nurse is like a school crossing guard, making sure the sickest people get help first.',
      ],
      examples: [
        'If you break your arm badly and need surgery, you would be admitted to stay in the hospital.',
        'Someone having a heart attack would be admitted right away without waiting.',
      ],
    },
    2: {
      level: 2,
      summary: 'Hospital admission involves registration, triage assessment, medical evaluation, and transfer to an appropriate unit for ongoing care and monitoring.',
      explanation: `The hospital admission process is a series of organized steps designed to ensure you receive appropriate care for your medical needs.

## The Admission Journey

**1. Pre-Admission Preparation**
If your admission is planned (non-emergency), you may complete paperwork ahead of time and receive instructions about eating, drinking, and medications before arrival.

**2. Registration**
- Present identification and insurance information
- Sign consent forms for treatment
- Receive an identification wristband with barcodes for safety
- Complete health questionnaires

**3. Triage Assessment**
Emergency department nurses prioritize patients using a 5-level system:
- Level 1 (Red): Life-threatening, immediate care needed
- Level 2 (Orange): High risk, very urgent
- Level 3 (Yellow): Urgent but stable
- Level 4 (Green): Less urgent
- Level 5 (Blue): Non-urgent

**4. Medical Evaluation**
The physician will:
- Take a detailed medical history
- Perform a physical examination
- Review your medications
- Order diagnostic tests (labs, imaging)
- Make a diagnosis or differential diagnosis

**5. Admission Decision**
Two main types of admission:
- **Observation status**: Short-term monitoring (usually <48 hours)
- **Inpatient admission**: Full hospital admission for ongoing care

*Important: Observation vs. inpatient status affects Medicare coverage differently.*

**6. Unit Placement**
You'll be placed on a unit matching your needs:
- ICU/CCU: Critical care for unstable patients
- Step-down: Close monitoring, less intensive than ICU
- Medical/Surgical floor: Standard inpatient care
- Telemetry: Continuous heart monitoring

**7. Nursing Assessment**
Nurses complete a comprehensive assessment including:
- Fall risk evaluation
- Skin integrity check
- Nutritional assessment
- Pain assessment
- Medication reconciliation

## Patient Rights During Admission
- Right to understand your diagnosis and treatment plan
- Right to refuse treatment
- Right to privacy
- Right to have an advocate present`,
      keyTerms: [
        { term: 'triage', definition: 'A system for prioritizing patients based on the severity of their condition', pronunciation: 'TREE-ahzh' },
        { term: 'observation status', definition: 'Temporary status for short-term monitoring without full hospital admission; affects insurance coverage' },
        { term: 'inpatient admission', definition: 'Official hospital admission for patients needing care beyond 24-48 hours' },
        { term: 'differential diagnosis', definition: 'A list of possible conditions that could explain your symptoms' },
        { term: 'medication reconciliation', definition: 'Comparing your home medications with what you\'ll receive in the hospital' },
      ],
      analogies: [
        'Triage is like airport security fast-tracking passengers whose flights are about to leave - the most urgent cases get seen first.',
        'Different hospital units are like different sections of a hotel - ICU is the penthouse with 24/7 service, the regular floor is a standard room.',
      ],
    },
    3: {
      level: 3,
      summary: 'Hospital admission encompasses pre-admission planning, emergency or elective pathways, comprehensive assessments, appropriate level-of-care determination, and initiation of the inpatient treatment plan.',
      explanation: `## Admission Pathways

### Emergency Department Admission
Most common pathway for acute conditions:
1. Arrival and registration (may occur simultaneously with care for critical patients)
2. Triage using Emergency Severity Index (ESI) or similar system
3. Provider evaluation and diagnostic workup
4. Admission decision based on clinical criteria and observation guidelines
5. Bed request and transfer to appropriate unit

### Direct Admission
Arranged by outpatient physician:
- Patient bypasses ED
- Bed requested in advance
- Used for known conditions requiring hospitalization
- Requires attending physician acceptance

### Surgical Admission
For planned procedures:
- Pre-operative testing completed outpatient
- Pre-admission testing (PAT) visit
- Day-of-surgery arrival time coordinated
- Post-operative admission to appropriate unit

### Transfer Admission
From outside facility:
- Accepting physician must agree
- Insurance authorization obtained
- Transport arranged
- Medical records transferred

## Assessment Components

### History and Physical (H&P)
Required within 24 hours of admission:
- Chief complaint
- History of present illness
- Past medical/surgical history
- Medications and allergies
- Social and family history
- Review of systems
- Physical examination
- Assessment and plan

### Nursing Assessment
- Fall Risk Assessment (Morse Fall Scale or similar)
- Braden Scale (pressure injury risk)
- Nutritional screening
- Pain assessment
- Functional status
- Psychosocial assessment
- Discharge planning needs

### Ancillary Assessments
- Pharmacy: medication reconciliation, drug interactions
- Case management: insurance, discharge planning
- Physical/Occupational therapy: mobility and function
- Dietary: nutrition needs

## Level of Care Determination

### InterQual/Milliman Criteria
Insurance-driven criteria for appropriate level of care:
- Severity of illness
- Intensity of service needed
- Clinical indicators

### Two-Midnight Rule (Medicare)
- If expected stay crosses two midnights = inpatient
- Less than two midnights = typically observation
- Exceptions for procedural admissions

### Bed Utilization
Considerations for bed placement:
- Isolation requirements
- Monitoring needs
- Staffing ratios
- Equipment availability
- Patient preferences when possible

## Documentation Requirements

### Admission Orders
- Admitting diagnosis and attending physician
- Level of care (floor, telemetry, ICU)
- Activity level and diet
- Vital sign frequency
- Medications
- IV fluids
- Laboratory and imaging
- Nursing orders (fall precautions, etc.)
- DVT prophylaxis
- Consultations

### Consent Documents
- General consent for treatment
- Procedure-specific consents
- HIPAA acknowledgment
- Advance directive documentation`,
      keyTerms: [
        { term: 'Emergency Severity Index (ESI)', definition: 'Five-level triage algorithm assigning patients to resources and acuity levels', pronunciation: 'ee-es-eye' },
        { term: 'InterQual criteria', definition: 'Evidence-based clinical criteria used to determine appropriate level of care and medical necessity' },
        { term: 'Two-Midnight Rule', definition: 'Medicare guideline stating hospitalizations expected to span two midnights should be inpatient admissions' },
        { term: 'Morse Fall Scale', definition: 'Validated assessment tool predicting fall risk based on history, secondary diagnosis, ambulatory aids, IV access, gait, and mental status' },
        { term: 'Braden Scale', definition: 'Tool assessing pressure injury risk based on sensory perception, moisture, activity, mobility, nutrition, and friction/shear' },
        { term: 'H&P', definition: 'History and Physical examination document; required comprehensive admission assessment' },
      ],
      clinicalNotes: 'Observation status has significant implications for Medicare beneficiaries - it may result in higher out-of-pocket costs and affect SNF eligibility (which requires 3-day inpatient stay). Hospitals use screening tools and physician advisors to ensure appropriate admission status.',
    },
    4: {
      level: 4,
      summary: 'Hospital admission integrates clinical assessment, utilization management, regulatory compliance, and care coordination to ensure appropriate level of care, resource allocation, and initiation of evidence-based treatment protocols.',
      explanation: `## Clinical Decision-Making in Admission

### Admission Criteria
Evidence-based criteria guide admission decisions:

**Severity of Illness Indicators:**
- Vital sign instability
- Laboratory abnormalities requiring monitoring
- Clinical deterioration potential
- Failed outpatient management
- Need for IV therapy unavailable outpatient

**Intensity of Service Required:**
- Frequent monitoring (hourly or more)
- IV medications requiring titration
- Nursing care needs exceeding outpatient capacity
- Specialized equipment or staffing

### Observation vs. Inpatient Decision

**Observation Appropriate When:**
- Diagnosis unclear but likely short-term
- Treatment response expected within 24-48 hours
- Risk stratification needed before disposition
- Procedural monitoring without expected complications

**Inpatient Criteria:**
- Likely stay exceeding two midnights
- Acute illness requiring intensive services
- Post-procedure complications anticipated
- Complex comorbidities affecting recovery

### Special Populations

**Geriatric Patients:**
- Higher admission thresholds often appropriate
- Functional decline as admission indicator
- Delirium screening at admission
- Early geriatric consultation consideration
- Enhanced discharge planning needs

**Pediatric Patients:**
- Age-specific vital sign norms
- Parental accommodation considerations
- Child life services involvement
- Developmental stage-appropriate care

**Psychiatric Patients:**
- Voluntary vs. involuntary status
- Medical clearance requirements
- Safety precautions
- Specialty unit placement if available

## Quality Metrics and Regulatory Considerations

### The Joint Commission Requirements
- H&P within 24 hours of admission
- Reassessment within 48 hours of H&P update
- Medication reconciliation at all transitions
- Fall risk assessment
- Pressure injury risk assessment
- VTE prophylaxis assessment
- Restraint documentation if applicable

### CMS Conditions of Participation
- Patient rights notification
- Advance directive documentation
- Privacy practices notification
- Grievance process information
- Non-discrimination statement

### Core Measures Initiation
Beginning evidence-based protocols at admission:
- Sepsis bundle initiation
- Stroke protocols (door-to-needle time)
- STEMI protocols (door-to-balloon time)
- Pneumonia antibiotic timing
- Surgical infection prevention

## Care Coordination at Admission

### Hospitalist Role
- Principal coordinator of inpatient care
- Communication hub for consultants
- Family meetings and goals of care
- Transitions of care management

### Discharge Planning Initiation
Beginning at admission:
- Anticipated discharge date
- Post-acute care needs assessment
- Insurance coverage verification
- Prior authorization for SNF/rehab if needed
- DME needs identification

### Interprofessional Communication
- SBAR handoffs (Situation, Background, Assessment, Recommendation)
- Multidisciplinary rounds participation
- Electronic health record documentation
- Secure messaging for team communication

## Technology in Admissions

### Electronic Health Record Functions
- Order sets for common admissions
- Clinical decision support
- Drug interaction checking
- Allergy alerts
- Sepsis screening algorithms
- Early warning scores

### Patient Identification Technology
- Barcode wristbands
- Two-identifier verification
- Blood bank specimen labeling
- Medication administration scanning

### Real-Time Location Systems
- Bed tracking
- Staff location
- Equipment management`,
      keyTerms: [
        { term: 'SBAR', definition: 'Structured communication technique: Situation, Background, Assessment, Recommendation' },
        { term: 'sepsis bundle', definition: 'Time-sensitive interventions for sepsis including lactate, blood cultures, antibiotics, and fluid resuscitation' },
        { term: 'utilization management', definition: 'Process ensuring appropriate level of care and efficient use of hospital resources' },
        { term: 'physician advisor', definition: 'Physician reviewing admission status determinations and appeals' },
        { term: 'early warning score', definition: 'Aggregate vital sign score identifying patients at risk for deterioration' },
        { term: 'core measures', definition: 'CMS quality measures for common conditions including AMI, heart failure, pneumonia, and surgical care' },
      ],
      clinicalNotes: 'Hospital admission represents a high-risk transition point. Studies show medication errors occur in up to 70% of patients at admission if formal reconciliation isn\'t performed. Early identification of discharge barriers and proactive planning reduces length of stay and readmission rates.',
    },
    5: {
      level: 5,
      summary: 'Hospital admission serves as a critical care transition requiring systematic application of clinical criteria, regulatory compliance, quality metrics initiation, and coordinated interprofessional assessment to optimize outcomes while ensuring appropriate resource utilization.',
      explanation: `## Evidence-Based Admission Decision-Making

### Clinical Decision Support Integration
Modern admission processes incorporate validated prediction tools:

**Prediction Models:**
- LACE Index (Length of stay, Acuity, Comorbidities, ED visits): Readmission risk
- HOSPITAL Score: 30-day readmission prediction
- NEWS2 (National Early Warning Score 2): Deterioration risk
- APACHE/SOFA in ICU settings

**Application:**
- Risk stratification at admission guides intensity of services
- High-risk patients flagged for enhanced monitoring
- Care management resources allocated based on predicted needs
- Discharge planning complexity estimated early

### Admission Status Regulatory Framework

**Medicare Hospital Condition of Participation:**
42 CFR 482.24 requires:
- Documented H&P with physician authentication
- Admission order by qualified practitioner
- Documented reason for hospitalization
- Treatment plan established

**Observation vs. Inpatient Status Complexities:**
- CMS-R1644 guidance on self-administered drug rule
- MOON (Medicare Outpatient Observation Notice) requirements
- ABN requirements for non-covered services
- Condition Code 44 for status changes

**Appeals Process:**
- Initial determination by utilization review
- Physician advisor escalation
- External review (QIO involvement for Medicare)
- Beneficiary notification requirements

### High-Reliability Organization Principles at Admission

**Safety Culture Elements:**
- Preoccupation with failure: Anticipating potential admission errors
- Reluctance to simplify: Thorough assessment despite pressure
- Sensitivity to operations: Bed flow awareness
- Commitment to resilience: Contingency planning
- Deference to expertise: Appropriate consultation

**Error Prevention Strategies:**
- Hard stops for missing allergy documentation
- Time-out procedures for correct patient identification
- Handoff standardization
- Redundant verification systems

### Value-Based Care Considerations

**Admission Appropriateness:**
- Potentially preventable admissions tracking
- Ambulatory-sensitive condition rates
- ED revisit analysis
- Admission from post-acute care monitoring

**Cost-Quality Balance:**
- Length of stay optimization
- ICU avoidance programs
- Rapid response team utilization
- Code status discussions at admission

### Special Considerations

**Sepsis Recognition and Bundle Compliance:**
- Screening tool sensitivity/specificity considerations
- Time-zero determination complexities
- Bundle compliance measurement
- Mortality impact of delayed recognition

**Social Determinants Screening:**
- Housing stability assessment
- Food security screening
- Transportation access
- Health literacy evaluation
- Caregiver availability

### Emerging Trends

**Hospital at Home:**
- Acute-level care delivered in patient's home
- Admission avoidance for appropriate candidates
- Remote monitoring integration
- Criteria for home-based acute care

**Virtual Hospital Integration:**
- Tele-hospitalist programs
- Remote patient monitoring
- Virtual nursing support
- Digital rounding capabilities

**AI/ML Applications:**
- Admission probability prediction from ED
- Optimal bed assignment algorithms
- Length of stay prediction
- Deterioration early warning

### Performance Metrics

**Key Performance Indicators:**
| Metric | Target | Rationale |
|--------|--------|-----------|
| ED-to-admit time | <4 hours | Patient safety and satisfaction |
| H&P completion | 100% in 24h | Regulatory compliance |
| Med rec completion | 100% at admission | Safety |
| VTE prophylaxis | >95% assessed | Quality measure |
| Fall risk assessment | 100% | Safety |
| Discharge planning initiation | <24h | LOS reduction |

**Outcome Measures:**
- Hospital-acquired condition rates
- 30-day readmission rates
- Patient satisfaction (HCAHPS)
- Mortality indices (O/E ratios)

### Teaching and Handoff

**Resident Education:**
- Admission note templates and expectations
- Supervised decision-making
- Progressive autonomy model

**Shift Handoff:**
- Structured handoff tools (I-PASS)
- Pending studies communication
- Anticipated overnight events
- Clear escalation pathways`,
      keyTerms: [
        { term: 'LACE Index', definition: 'Readmission prediction score using Length of stay, Acuity of admission, Comorbidities, and Emergency visits in prior 6 months' },
        { term: 'NEWS2', definition: 'National Early Warning Score 2; aggregate physiological score triggering clinical response based on vital sign abnormalities' },
        { term: 'MOON', definition: 'Medicare Outpatient Observation Notice; required written notification when patient is in observation status' },
        { term: 'Condition Code 44', definition: 'Code used when utilization review determines inpatient admission was not appropriate and status is changed to outpatient' },
        { term: 'I-PASS', definition: 'Structured handoff mnemonic: Illness severity, Patient summary, Action list, Situation awareness, Synthesis by receiver' },
        { term: 'hospital-at-home', definition: 'Care model providing acute-level hospital care in patient\'s residence with monitoring and regular provider visits' },
      ],
      clinicalNotes: `Critical admission considerations for hospitalists:
1. Status determination has downstream implications - document medical necessity thoroughly
2. Early goals-of-care discussions for patients with serious illness reduce unwanted intensive interventions
3. The "Golden Hours" concept applies beyond trauma - early antibiotics in sepsis, early anticoagulation in PE reduce mortality
4. Social determinants identified at admission predict readmission risk better than many clinical factors
5. Bundle compliance is publicly reported - systematic approaches outperform individual decision-making
6. Hospital-at-home programs demonstrate equivalent or better outcomes for appropriate patients`,
    },
  },

  media: [
    {
      id: 'admission-flowchart',
      type: 'diagram',
      filename: 'hospital-admission-flowchart.svg',
      title: 'Hospital Admission Process Flowchart',
      description: 'Visual guide to the steps from arrival through room assignment',
    },
    {
      id: 'triage-levels',
      type: 'diagram',
      filename: 'esi-triage-levels.svg',
      title: 'Emergency Severity Index Triage Levels',
      description: 'Five-level triage system used in emergency departments',
    },
  ],

  citations: [
    {
      id: 'cms-inpatient-rules',
      type: 'website',
      title: 'Medicare Benefit Policy Manual, Chapter 1 - Inpatient Hospital Services',
      source: 'Centers for Medicare & Medicaid Services',
      url: 'https://www.cms.gov/regulations-and-guidance',
    },
    {
      id: 'joint-commission-standards',
      type: 'website',
      title: 'Hospital Accreditation Standards',
      source: 'The Joint Commission',
    },
  ],

  crossReferences: [
    { targetId: 'concept-discharge-planning', targetType: 'concept', relationship: 'related', label: 'Discharge Planning' },
    { targetId: 'concept-hospital-care-team', targetType: 'concept', relationship: 'related', label: 'Hospital Care Team' },
    { targetId: 'concept-medication-reconciliation', targetType: 'concept', relationship: 'related', label: 'Medication Reconciliation' },
  ],

  tags: {
    topics: ['hospital-medicine', 'admission', 'patient-education'],
    clinicalRelevance: 'high',
    keywords: ['hospital admission', 'inpatient', 'observation', 'triage'],
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default hospitalAdmission;
