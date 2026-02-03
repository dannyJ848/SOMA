import { EducationalContent } from '../../types';

export const dischargePlanningContent: EducationalContent = {
  id: 'discharge-planning',
  type: 'concept',
  name: 'Discharge Planning',
  nameEs: 'Planificación del Alta Hospitalaria',
  alternateNames: ['Hospital Discharge', 'Care Transition', 'Discharge Process'],
  levels: {
    1: {
      level: 1,
      summary: 'Discharge planning is the process of preparing to leave the hospital. Good planning helps you recover safely at home and avoid returning to the hospital.',
      explanation: `## Planning to Leave the Hospital

Discharge planning is the process of preparing to leave the hospital. Good planning helps you recover safely at home and avoid returning to the hospital.

### What is Discharge Planning?

It is preparing for when you go home including:
- What medicines to take
- What foods to eat
- When to see the doctor
- Who will help you at home
- Warning signs to watch for

### Planning Starts Early

- Planning begins when you enter the hospital
- Staff asks about your home situation
- Family may need to help
- Equipment might be needed

### Before You Leave

You should know:
- What medicines to take and when
- When your follow-up appointments are
- What activities you can do
- What foods to eat or avoid
- Who to call with questions

### Your Discharge Instructions

- Get them in writing
- Ask questions if you do not understand
- Have someone else listen too
- Know what symptoms mean call the doctor

### Help After Discharge

You might need:
- Home health nurse visits
- Physical therapy
- Meals delivered
- Someone to help with daily tasks
- Transportation to appointments

### Call Your Doctor If

- Symptoms get worse
- You have new symptoms
- You have questions about medicines
- You cannot get to your appointment`,
      keyTerms: [
        { term: 'Discharge planning', definition: 'Preparing for leaving the hospital' },
        { term: 'Follow-up', definition: 'Appointment after hospital stay' },
        { term: 'Home health', definition: 'Medical care at home' },
        { term: 'Readmission', definition: 'Going back to the hospital' }
      ],
      analogies: [
        'Discharge planning is like packing for a trip - you need to prepare so you have what you need'
      ],
      examples: [
        'A patient arranges for a family member to pick up medications before discharge',
        'Home health nursing is set up to check on a patient after heart surgery'
      ]
    },
    2: {
      level: 2,
      summary: 'Discharge planning is a process that begins at admission and coordinates care transitions. Effective planning reduces hospital readmissions through medication reconciliation, follow-up appointment scheduling, patient education, and ensuring appropriate post-acute services.',
      explanation: `## The Discharge Planning Process

Discharge planning is a process that begins at admission and coordinates care transitions. Effective planning reduces hospital readmissions through medication reconciliation, follow-up appointment scheduling, patient education, and ensuring appropriate post-acute services.

### Regulatory Requirements

**CMS Conditions of Participation:**
- Must have discharge planning process
- Evaluation of discharge needs
- Timely completion
- Re-evaluation as needed

**Timing:**
- Assessment within 24 hours
- Reassessment as condition changes
- Final plan before discharge
- Not last-minute process

### Key Components

**Medical Stability:**
- Safe for discharge
- Pain controlled
- Oral intake tolerable
- Self-care ability

**Medication Management:**
- Reconciliation complete
- Prescriptions filled
- Instructions provided
- Access confirmed

**Follow-Up Care:**
- Appointments scheduled
- Transportation arranged
- Records sent
- Questions answered

**Home Environment:**
- Safety assessment
- Equipment needs
- Caregiver availability
- Support services

### The Discharge Team

**Case Managers:**
- Coordinate care
- Insurance authorization
- Post-acute arrangements
- Resource connection

**Social Workers:**
- Psychosocial assessment
- Support services
- Financial resources
- Disposition planning

**Nurses:**
- Patient education
- Medication teaching
- Wound care instruction
- Warning signs review

**Physicians:**
- Medical plan
- Follow-up coordination
- Order writing
- Final evaluation

### Discharge Checklist

**Medications:**
- Reconciled list
- New prescriptions
- Changes explained
- Side effects reviewed

**Appointments:**
- Primary care
- Specialists
- Tests scheduled
- Transportation

**Services:**
- Home health ordered
- Equipment delivered
- Rehabilitation arranged
- Transportation set

**Education:**
- Disease understanding
- Self-care instructions
- Warning signs
- Who to call

### Reducing Readmissions

**High-Risk Patients:**
- Previous readmissions
- Multiple chronic conditions
- Cognitive impairment
- Limited support
- Insurance gaps

**Post-Discharge Contact:**
- Phone call within 48 hours
- Medication verification
- Appointment confirmation
- Question answering`,
      keyTerms: [
        { term: 'Case manager', definition: 'Person who coordinates care and services' },
        { term: 'Post-acute care', definition: 'Care after hospital discharge' },
        { term: 'Disposition', definition: 'Plan for where patient goes after hospital' },
        { term: 'Home health', definition: 'Skilled medical care at home' }
      ],
      analogies: [
        'Discharge planning is like a relay race - the baton must be passed smoothly to the next caregiver'
      ],
      examples: [
        'A case manager arranges skilled nursing facility placement for a patient not ready for home',
        'Pharmacist counsels patient on new medications before discharge'
      ]
    },
    3: {
      level: 3,
      summary: 'Hospital readmissions are costly and often preventable. Discharge planning research shows that comprehensive interventions including medication reconciliation, timely follow-up, patient education, and post-discharge support reduce readmissions and improve outcomes.',
      explanation: `## Evidence-Based Discharge Planning

Hospital readmissions are costly and often preventable. Discharge planning research shows that comprehensive interventions including medication reconciliation, timely follow-up, patient education, and post-discharge support reduce readmissions and improve outcomes.

### Readmission Statistics

**Scope:**
- 15-20% of patients readmitted within 30 days
- Cost $26 billion annually
- 75% potentially preventable
- Target of quality improvement

**High-Risk Conditions:**
- Heart failure
- Acute myocardial infarction
- Pneumonia
- COPD
- Hip/knee surgery

### Transitional Care Models

**Nurse Transitional Care:**
- Hospital to home visits
- Phone follow-up
- Patient education
- Medication management
- Provider communication

**Hospital at Home:**
- Acute care in home
- Daily visits
- Remote monitoring
- Growing evidence
- Patient satisfaction

**Transitional Care Centers:**
- Short-stay facilities
- Stabilization
- Intense monitoring
- Rehabilitation focus

### Project RED (Re-Engineered Discharge)

**Components:**
- Discharge advocate
- Medication reconciliation
- Discharge summary
- Patient education
- Follow-up appointments
- Phone call after discharge

**Results:**
- 30% reduction in readmissions
- Cost savings
- Improved satisfaction
- Replicable model

### Care Transitions Intervention

**Four Pillars:**
1. Personal health record
2. Medication management
3. Red flags education
4. Primary care follow-up

**Coach Role:**
- Home visit
- Phone follow-up
- Skill teaching
- Self-management support

### BOOST (Better Outcomes for Older Adults)

**Components:**
- Discharge checklist
- Risk assessment
- Patient education
- Medication reconciliation
- Follow-up coordination

**Target Population:**
- Older adults
- Complex conditions
- Functional impairment
- Social vulnerability

### Post-Discharge Support

**Phone Follow-Up:**
- 48-72 hours
- Medication verification
- Symptom check
- Appointment confirmation

**Home Visits:**
- Assessment
- Medication review
- Environment safety
- Caregiver support

**Clinic Follow-Up:**
- Within 7 days
- Medication review
- Test results
- Care coordination`,
      keyTerms: [
        { term: 'Transitional care', definition: 'Coordinated care during transitions' },
        { term: 'Project RED', definition: 'Re-Engineered Discharge program' },
        { term: 'BOOST', definition: 'Care transitions program for older adults' },
        { term: 'Discharge advocate', definition: 'Staff member coordinating discharge' }
      ]
    },
    4: {
      level: 4,
      summary: 'Discharge planning requires interdisciplinary coordination, risk stratification, and systematic processes. CMS penalties for excess readmissions, bundled payment models, and value-based purchasing have elevated discharge planning as a strategic priority requiring robust infrastructure and quality monitoring.',
      explanation: `## Institutional Discharge Planning

Discharge planning requires interdisciplinary coordination, risk stratification, and systematic processes. CMS penalties for excess readmissions, bundled payment models, and value-based purchasing have elevated discharge planning as a strategic priority requiring robust infrastructure and quality monitoring.

### Financial Incentives

**Hospital Readmission Reduction Program:**
- Penalties for excess readmissions
- Heart failure, MI, pneumonia
- COPD, hip/knee replacement
- CABG added
- Up to 3% penalty

**Bundled Payments:**
- Single payment for episode
- Includes post-acute care
- Financial incentive for coordination
- Risk stratification important

**Value-Based Purchasing:**
- Care transitions measures
- Patient experience
- Efficiency metrics
- Quality composite

### Risk Stratification

**Readmission Risk Tools:**
- LACE index
- HOSPITAL score
- PARR (Probability of Admission)
- EHR-based models
- Social determinants

**LACE Score:**
- Length of stay
- Acuity of admission
- Comorbidities
- Emergency department visits

**Targeted Interventions:**
- Intensive case management
- Pharmacy involvement
- Home visits
- Phone follow-up
- Primary care coordination

### Quality Metrics

**Process Measures:**
- Discharge instruction completion
- Medication reconciliation
- Follow-up appointment scheduling
- Patient education documentation

**Outcome Measures:**
- 30-day readmission rate
- 7-day follow-up rate
- ED visits post-discharge
- Patient satisfaction
- Mortality

**Balancing Measures:**
- Length of stay
- Cost per discharge
- Staff workload
- Patient experience

### Special Populations

**Pediatrics:**
- Caregiver education
- School coordination
- Equipment training
- Growth and development

**Behavioral Health:**
- Medication adherence
- Crisis planning
- Outpatient connection
- Social support

**Elderly:**
- Cognitive assessment
- Caregiver support
- Fall prevention
- Medication complexity

**Limited English:**
- Interpreter services
- Translated materials
- Cultural considerations
- Health literacy

### Post-Acute Care Networks

**Skilled Nursing Facilities:**
- Quality metrics
- Partnership agreements
- Care coordination
- Readmission tracking

**Home Health Agencies:**
- Outcome data
- Timely start of care
- Communication
- Re-hospitalization rates

**Hospice:**
- Palliative care integration
- Advanced care planning
- Family support
- Bereavement services`,
      keyTerms: [
        { term: 'LACE index', definition: 'Readmission risk scoring tool' },
        { term: 'Bundled payment', definition: 'Single payment for episode of care' },
        { term: 'Value-based purchasing', definition: 'Payment tied to quality metrics' },
        { term: 'Social determinants', definition: 'Non-medical factors affecting health' }
      ],
      clinicalNotes: '7-day follow-up appointments associated with reduced readmissions. Pharmacist-led medication reconciliation at discharge reduces errors by 50%. Project RED model cost-effective with strong evidence base. Social determinants increasingly recognized as key readmission risk factors - screening and intervention expanding.'
    },
    5: {
      level: 5,
      summary: 'Future discharge planning involves predictive analytics for risk stratification, digital health tools for remote monitoring, hospital-at-home models, and greater patient activation. Addressing social determinants, ensuring equity, and managing complex medication regimens remain critical challenges.',
      explanation: `## Future of Care Transitions

Future discharge planning involves predictive analytics for risk stratification, digital health tools for remote monitoring, hospital-at-home models, and greater patient activation. Addressing social determinants, ensuring equity, and managing complex medication regimens remain critical challenges.

### Predictive Analytics

**Machine Learning Models:**
- Real-time risk prediction
- Intervention targeting
- Resource allocation
- Outcome prediction

**Data Integration:**
- EHR data
- Claims data
- Social determinants
- Wearable devices
- Patient-generated data

**Implementation:**
- Clinical workflow
- Alert fatigue prevention
- Actionable insights
- Equity monitoring

### Digital Health

**Remote Monitoring:**
- Vital signs
- Weight (heart failure)
- Glucose (diabetes)
- Activity tracking
- Symptom monitoring

**Telehealth Follow-Up:**
- Video visits
- Access expansion
- Rural reach
- Cost savings
- Patient satisfaction

**Mobile Apps:**
- Medication reminders
- Symptom tracking
- Education
- Care team communication
- Appointment scheduling

### Hospital at Home

**Model:**
- Hospital-level care at home
- Daily visits
- Remote monitoring
- 24/7 availability
- Lower cost

**Evidence:**
- Non-inferior outcomes
- Higher satisfaction
- Lower costs
- Lower complications
- Infection reduction

**Expansion:**
- Acute conditions
- COVID-19 catalyst
- Regulatory evolution
- Payment models

### Social Determinants Integration

**Screening:**
- Food insecurity
- Housing instability
- Transportation needs
- Utility access
- Social isolation

**Interventions:**
- Food prescriptions
- Housing navigation
- Transportation services
- Utility assistance
- Community health workers

**Community Partnerships:**
- Food banks
- Housing agencies
- Transportation services
- Faith organizations
- Social services

### Patient Activation

**Self-Management:**
- Disease education
- Action plans
- Symptom monitoring
- Medication management
- Lifestyle modification

**Shared Decision-Making:**
- Post-acute options
- Goals of care
- Risk communication
- Preference elicitation

**Peer Support:**
- Mentorship
- Group programs
- Online communities
- Telephone support

### Policy Directions

**Payment Reform:**
- Hospital at home
- SNF without three-day rule
- Home health expansion
- Palliative care access

**Health Equity:**
- SDOH screening requirements
- Transportation benefits
- Housing interventions
- Food security programs

**Workforce:**
- Care transitions nurses
- Community health workers
- Patient navigators
- Social workers

### Measurement Evolution

**Patient-Reported Outcomes:**
- Quality of life
- Functional status
- Symptom burden
- Care experience

**Social Needs:**
- SDOH screening
- Intervention outcomes
- Health impact
- Cost-effectiveness

**Long-Term Outcomes:**
- 90-day readmissions
- Functional recovery
- Return to work
- Mortality`,
      keyTerms: [
        { term: 'Hospital at home', definition: 'Acute hospital care provided at home' },
        { term: 'Patient activation', definition: 'Patient knowledge and confidence' },
        { term: 'Food prescription', definition: 'Referral to food assistance' },
        { term: 'Peer support', definition: 'Help from others with similar conditions' }
      ],
      clinicalNotes: 'Hospital at home models show promise but require robust infrastructure and patient selection. Machine learning readmission prediction models improve targeting but require bias monitoring. Telehealth follow-up expanding post-COVID - quality and access issues remain. Social determinants intervention ROI increasingly demonstrated - food, housing, transportation support reduces readmissions.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['patient-safety', 'communication'],
    keywords: ['discharge planning', 'care transitions', 'readmission', 'hospital discharge', 'transitional care']
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
