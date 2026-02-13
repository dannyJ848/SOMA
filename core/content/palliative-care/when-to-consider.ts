/**
 * When to Consider Palliative Care - Educational Content
 *
 * Helps patients, families, and healthcare providers understand
 * the appropriate timing and indications for palliative care referral.
 */

import { EducationalContent } from '../types';

export const whenToConsiderPalliativeCare: EducationalContent = {
  id: 'concept-when-to-consider-palliative',
  type: 'concept',
  name: 'When to Consider Palliative Care',
  alternateNames: ['Palliative Care Indications', 'Timing of Palliative Care', 'Palliative Care Referral'],

  levels: {
    1: {
      level: 1,
      summary: 'Palliative care can help anyone with a serious illness who needs extra support with symptoms, feelings, or making decisions about care.',
      explanation: `**When Should Someone Get Palliative Care?**

Palliative care is for anyone who has a serious illness and could use extra help. You do not have to wait until you are very sick. In fact, getting palliative care early can help you feel better longer.

**Signs That Palliative Care Might Help**

- You have pain or other symptoms that are hard to control
- You feel worried, sad, or overwhelmed about your illness
- You are having trouble understanding your illness or treatment choices
- Your family needs support dealing with your illness
- You have been in the hospital a lot lately
- You want to talk about what is most important to you in your care

**Common Illnesses Where Palliative Care Helps**

- Cancer
- Heart problems
- Lung diseases
- Kidney disease
- Dementia and memory problems
- Neurological diseases (like ALS or Parkinson's)
- Any serious illness that affects daily life

**Remember**: Palliative care does not mean giving up. It means getting extra help so you can feel your best while dealing with a serious illness.`,
      keyTerms: [
        { term: 'serious illness', definition: 'A health condition that is long-lasting and significantly affects daily life' },
        { term: 'symptoms', definition: 'Problems caused by illness, like pain, tiredness, or trouble breathing' },
        { term: 'quality of life', definition: 'How good daily life feels, including comfort and happiness' },
      ],
      analogies: [
        'Palliative care is like having a coach who joins your team when the game gets tough - they help you play your best even when things are hard.',
        'Think of it like getting a tutor when school gets difficult. You do not wait until you are failing - you get help early so you can do better.',
      ],
      examples: [
        'A person newly diagnosed with cancer might see palliative care to help with anxiety and understand treatment options.',
        'Someone with heart failure who keeps going to the hospital might benefit from palliative care to manage symptoms at home.',
        'A family caring for a parent with dementia might work with palliative care to plan for the future and get support.',
      ],
    },
    2: {
      level: 2,
      summary: 'Palliative care should be considered at diagnosis of any serious illness, especially when symptoms are difficult to manage, prognosis is uncertain, or patients need help navigating complex care decisions.',
      explanation: `## When to Consider Palliative Care

**Early Integration Is Best**

Research shows that starting palliative care early in serious illness leads to:
- Better symptom control
- Improved quality of life
- Less depression and anxiety
- Better understanding of illness and prognosis
- More satisfaction with care
- Possibly longer survival in some conditions

**Key Triggers for Palliative Care Referral**

**Symptom-Based Triggers**
- Pain that is difficult to control
- Severe fatigue affecting daily activities
- Shortness of breath with minimal exertion
- Nausea, vomiting, or poor appetite
- Trouble sleeping
- Anxiety or depression related to illness

**Disease-Based Triggers**
- New diagnosis of advanced cancer
- Heart failure with frequent hospitalizations
- COPD requiring oxygen
- End-stage kidney disease
- Progressive neurological disease
- Advanced dementia

**Situation-Based Triggers**
- Multiple hospital admissions in past 6 months
- ICU admission with serious illness
- Decline in functional status (needing more help)
- Weight loss despite treatment
- Difficulty making treatment decisions
- Family conflict about care
- Questions about goals of care

**The "Surprise Question"**

Healthcare providers often use this question: "Would I be surprised if this patient died in the next 12 months?"

If the answer is "No, I would not be surprised," it is a good time to consider palliative care consultation.

**Who Can Refer?**

- Any doctor or nurse practitioner
- Patient or family can request
- Some hospitals have automatic referral criteria`,
      keyTerms: [
        { term: 'prognosis', definition: 'The likely course and outcome of a disease', pronunciation: 'prog-NOH-sis' },
        { term: 'functional status', definition: 'A person\'s ability to perform daily activities like walking, bathing, and eating' },
        { term: 'Surprise Question', definition: 'A screening tool asking if death within 12 months would be surprising' },
        { term: 'referral', definition: 'When one healthcare provider recommends seeing another specialist' },
      ],
      analogies: [
        'Palliative care is like financial planning - you do not wait until retirement to start. The earlier you begin, the better prepared you are.',
      ],
    },
    3: {
      level: 3,
      summary: 'Evidence-based criteria for palliative care referral include the Surprise Question, disease-specific prognostic indicators, functional decline, symptom burden, and healthcare utilization patterns, with early integration improving outcomes across serious illnesses.',
      explanation: `## Evidence for Early Palliative Care

**Landmark Studies**

*Temel et al., NEJM 2010*
- Metastatic NSCLC patients randomized to early palliative care vs. standard care
- Improved quality of life (FACT-L scores)
- Less depression (PHQ-9 scores)
- Less aggressive end-of-life care
- Median survival: 11.6 vs 8.9 months (p=0.02)

*Zimmermann et al., Lancet 2014*
- Cluster RCT in cancer patients
- Early palliative care improved quality of life and satisfaction
- Better symptom control and communication

*Bakitas et al., JAMA 2009 (ENABLE II)*
- Telehealth palliative care intervention
- Improved mood and quality of life

## Screening and Referral Criteria

**Validated Screening Tools**

**Surprise Question**
- "Would I be surprised if this patient died in the next 12 months?"
- Sensitivity 67-98%, specificity 14-56% depending on population
- Best used as conversation starter, not sole criterion

**NECPAL CCOMS-ICO**
Spanish screening tool combining:
- Surprise Question
- Disease indicators
- Functional decline
- Nutritional decline
- Emotional distress

**SPICT (Supportive and Palliative Care Indicators Tool)**
General indicators plus disease-specific criteria for:
- Cancer
- Dementia/frailty
- Neurological disease
- Heart/vascular disease
- Respiratory disease
- Kidney disease
- Liver disease

## Disease-Specific Considerations

**Cancer**
- Stage IV disease at diagnosis
- Recurrence after initial treatment
- Poor performance status (ECOG 2-4)
- Symptom burden requiring management
- Any discussion of prognosis or goals

**Heart Failure**
- NYHA Class III-IV symptoms
- EF <30%
- Frequent hospitalizations (>2 in 6 months)
- ICD firing or consideration of deactivation
- Refractory symptoms despite optimal therapy

**COPD**
- FEV1 <30% predicted
- Oxygen dependence
- Multiple exacerbations requiring hospitalization
- Cor pulmonale/right heart failure
- Weight loss or cachexia

**Dementia**
- Moderate-severe stage (FAST 6-7)
- Recurrent infections (UTI, pneumonia)
- Pressure ulcers
- Feeding difficulties
- Need for goals of care discussion

**Kidney Disease**
- CKD Stage 5 or dialysis
- Decision about dialysis initiation
- Conservative management choice
- Multiple comorbidities
- Poor prognosis despite dialysis

## Healthcare Utilization Triggers

**Automatic Consultation Criteria (example)**
- ICU admission with serious illness
- >2 hospital admissions in 6 months
- >30 days total hospitalization in past year
- Mechanical ventilation >5 days
- Tracheostomy consideration
- Long-term feeding tube placement`,
      keyTerms: [
        { term: 'SPICT', definition: 'Supportive and Palliative Care Indicators Tool - validated screening instrument' },
        { term: 'ECOG Performance Status', definition: 'Scale 0-4 measuring functional ability, where 0 is fully active and 4 is completely disabled' },
        { term: 'FACT-L', definition: 'Functional Assessment of Cancer Therapy - Lung, quality of life questionnaire' },
        { term: 'NYHA Class', definition: 'New York Heart Association functional classification for heart failure severity' },
        { term: 'FAST Stage', definition: 'Functional Assessment Staging Tool for dementia progression' },
      ],
      clinicalNotes: 'Implement automatic palliative care consultation triggers in the EMR to increase appropriate referrals. Common triggers include ICU admission, multiple hospitalizations, and specific diagnoses. Early referral improves outcomes and should not be delayed until end of life.',
    },
    4: {
      level: 4,
      summary: 'Systematic identification of palliative care needs requires integrating prognostic tools (PPS, PPI, disease-specific criteria), needs-based screening (symptom burden, functional decline), and system-level triggers with attention to disparities in access.',
      explanation: `## Prognostic Assessment

### General Prognostic Tools

**Palliative Performance Scale (PPS)**
Derived from Karnofsky, validated in palliative populations:
- PPS 10-20%: Prognosis days to weeks
- PPS 30-40%: Prognosis weeks to months
- PPS 50-60%: Prognosis months
- PPS 70+%: Prognosis months to years

**Palliative Prognostic Index (PPI)**
Validated for cancer patients:
- PPS, oral intake, edema, dyspnea at rest, delirium
- PPI >6: <3 weeks survival likely
- PPI >4: <6 weeks survival likely

**Palliative Prognostic Score (PaP)**
Factors:
- Clinical prediction of survival
- Karnofsky PS
- Anorexia
- Dyspnea
- Total WBC
- Lymphocyte percentage

Groups:
- A: >70% 30-day survival
- B: 30-70% 30-day survival
- C: <30% 30-day survival

### Disease-Specific Prognostication

**Cancer Prognostic Tools**
- Serum biomarkers: Albumin, CRP, LDH
- Prognostic scales: GPS, mGPS, NLR
- Disease-specific nomograms

**Heart Failure**
- Seattle Heart Failure Model
- MAGGIC Risk Calculator
- SHFM predicts 1-5 year survival

**COPD**
- BODE Index (BMI, Obstruction, Dyspnea, Exercise)
- ADO Index (Age, Dyspnea, Obstruction)
- CODEX predicts 1-year mortality

**Dementia**
- FAST staging
- Mitchell Risk Index (6-month mortality on nursing home admission)
- ePrognosis calculators

## Needs-Based Assessment

### Symptom Burden Screening

**Edmonton Symptom Assessment System (ESAS-r)**
- 9 symptoms rated 0-10
- Pain, tiredness, drowsiness, nausea, appetite, dyspnea, depression, anxiety, wellbeing
- Distress thermometer can supplement

**IPOS (Integrated Palliative Care Outcome Scale)**
- Physical symptoms
- Information needs
- Psychological symptoms
- Communication
- Practical concerns

### Unmet Needs

**Primary Palliative Care Gaps**
When specialty consultation needed:
- Refractory symptoms despite standard management
- Complex psychosocial issues
- Family conflict regarding goals
- Existential distress
- Need for specialized communication
- Ethical complexity

## System-Level Implementation

### Electronic Health Record Triggers

**Diagnosis-Based**
- New metastatic cancer diagnosis
- Heart failure hospitalization
- COPD exacerbation requiring ICU
- Dementia with feeding difficulties
- ALS diagnosis

**Utilization-Based**
- >2 admissions in 6 months for same condition
- ICU stay >7 days
- Mechanical ventilation >3 days
- Code status discussion documented
- Transfer from long-term care facility

**Laboratory/Clinical**
- Albumin <2.5 g/dL
- Performance status decline
- Weight loss >10% in 6 months
- New pressure ulcer stage 3-4

### Quality Metrics

**CAPC Operational Metrics**
- Time from trigger to consultation
- Penetration rate (% eligible patients seen)
- Time from admission to consultation
- Goals of care documentation rate
- Patient/family satisfaction

## Disparities in Palliative Care Access

### Documented Disparities

**By Race/Ethnicity**
- Black patients less likely to receive hospice
- Hispanic patients have lower palliative care utilization
- Language barriers affect communication

**By Socioeconomic Status**
- Uninsured/underinsured patients have limited access
- Rural areas have fewer palliative care services
- Lower education associated with less hospice use

**By Diagnosis**
- Cancer patients receive more palliative care than non-cancer
- Dementia patients often receive late or no palliative care
- Organ failure patients have less access

### Strategies to Address

- Culturally competent communication training
- Interpreter services
- Community-based palliative care
- Telehealth palliative care
- Integration into primary care
- Removing financial barriers`,
      keyTerms: [
        { term: 'PPS', definition: 'Palliative Performance Scale - functional assessment predicting prognosis' },
        { term: 'PPI', definition: 'Palliative Prognostic Index - validated tool combining PPS with symptoms' },
        { term: 'GPS', definition: 'Glasgow Prognostic Score - inflammation-based prognostic marker using CRP and albumin' },
        { term: 'BODE Index', definition: 'Composite COPD prognostic score using BMI, obstruction, dyspnea, exercise capacity' },
        { term: 'trigger', definition: 'Clinical event or criterion that prompts automatic palliative care consultation' },
      ],
      clinicalNotes: 'Consider implementing automatic palliative care consultation for: any ICU admission with serious illness, >2 admissions in 6 months, new stage IV cancer, and heart failure with EF <25%. Track penetration rates and time-to-consultation as quality metrics. Address disparities through culturally competent care and telehealth.',
    },
    5: {
      level: 5,
      summary: 'Optimal palliative care integration requires population health approaches, validated screening instruments, EHR-based clinical decision support, interprofessional workforce development, and value-based payment models that incentivize upstream serious illness care.',
      explanation: `## Population Health Approaches

### Identification Strategies

**Risk Stratification Models**
Machine learning approaches to identify high-risk patients:
- Predictive analytics using EHR data
- Natural language processing of clinical notes
- Claims-based algorithms

**Example: CARING Criteria**
Cancer patients identified using:
- Cancer diagnosis
- Admissions (>2 in past year)
- Residence in nursing facility
- ICU stay with MOF
- Non-curative status
- Guardian or conservator

### Proactive Outreach Models

**ENABLE Model (Bakitas)**
Telehealth-based:
1. Initial assessment
2. Structured educational sessions
3. Monthly follow-up calls
4. Goals of care conversations
5. Caregiver support

**PREPARE for Your Care**
Patient-facing advance care planning:
- Video-based
- Culturally tailored
- Readiness assessment
- Action steps

**Serious Illness Conversation Guide**
Ariadne Labs framework:
1. Setting up the conversation
2. Assessing understanding/preferences
3. Sharing prognosis
4. Exploring key topics
5. Closing and documenting

## Clinical Decision Support

### EHR Integration

**Best Practice Alerts**
Triggered by:
- Diagnosis codes (ICD-10 metastatic cancer, ESRD, etc.)
- Laboratory values (albumin, creatinine, etc.)
- Utilization patterns (admissions, ICU, etc.)
- Clinical assessments (surprise question, etc.)

**Order Sets**
Palliative care consultation order set including:
- Consultation request
- Reason for consultation
- Current symptom assessment
- Goals of care status
- Code status verification

**Documentation Templates**
Structured note elements:
- Prognosis communicated
- Goals of care discussion
- Patient/family preferences
- Treatment recommendations
- Follow-up plan

### Quality Measurement

**National Quality Forum Measures**
- #1617: Hospice and palliative care - treatment preferences
- #1641: Hospice and palliative care - beliefs/values addressed
- #1634: Hospice and palliative care - pain assessment

**AAHPM/HPNA Measures**
- Dyspnea screening
- Pain screening
- Discussion of emotional/spiritual concerns
- Caregiver needs assessment

## Workforce and Education

### Primary Palliative Care Competencies

All clinicians should be able to:
- Conduct basic symptom assessment
- Communicate prognosis honestly
- Discuss goals of care
- Complete advance care planning
- Recognize when to refer

### Specialty Palliative Care Role

Expert consultation for:
- Refractory symptoms
- Complex family dynamics
- Ethical dilemmas
- Prognostic uncertainty
- Existential distress

### Training Programs

**CAPC Training Curriculum**
- Communication skills
- Pain management
- Non-pain symptoms
- Goals of care
- Care coordination

**VitalTalk**
Communication skills workshop:
- SPIKES for bad news
- NURSE statements for emotion
- Wish statements
- Hope and worry

**ELNEC (End-of-Life Nursing Education Consortium)**
Nurse-focused curriculum

## Payment Models and Incentives

### Fee-for-Service

**CPT Codes**
- 99497/99498: Advance care planning
- G0505: Cognition/functional assessment with care plan
- Palliative care consultation codes

### Value-Based Payment

**CMMI Models**
- Oncology Care Model (OCM) includes hospice/palliative
- Primary Care First
- GUIDE Model (dementia)

**Medicare Advantage**
- Supplemental benefits for palliative care
- Chronic condition special needs plans (C-SNPs)
- Care management programs

**Accountable Care Organizations**
Incentives for:
- Advance care planning completion
- Hospice utilization (appropriate)
- Avoidance of unwanted aggressive care

### Economic Considerations

**Cost Reduction Evidence**
- Morrison et al.: $1,696-$4,908/admission savings
- Smith et al.: $2,280/admission in cancer patients
- ENABLE: Trend toward cost reduction

**Return on Investment**
- Consultation programs typically cost-neutral or positive ROI
- Quality improvement justifies investment even if cost-neutral
- Downstream effects (ICU avoidance, hospice transition)

## Emerging Directions

### Technology

- Telehealth palliative care (particularly rural)
- Automated symptom monitoring
- AI-assisted prognostication
- Digital advance care planning tools

### Integration Models

- Oncology/palliative care co-clinics
- Heart failure/palliative care integration
- Primary care-based serious illness care
- Community paramedicine

### Research Priorities

- Implementation science for palliative care
- Comparative effectiveness of delivery models
- Geriatric palliative care
- Non-cancer serious illness
- Health equity in palliative care`,
      keyTerms: [
        { term: 'CARING Criteria', definition: 'Cancer-specific screening tool for palliative care need identification' },
        { term: 'Serious Illness Conversation Guide', definition: 'Ariadne Labs structured framework for goals of care discussions' },
        { term: 'VitalTalk', definition: 'Evidence-based communication skills training for serious illness conversations' },
        { term: 'ELNEC', definition: 'End-of-Life Nursing Education Consortium - comprehensive palliative care nursing curriculum' },
        { term: 'C-SNP', definition: 'Chronic Condition Special Needs Plan - Medicare Advantage plan for specific conditions' },
        { term: 'OCM', definition: 'Oncology Care Model - CMS value-based payment model including palliative care elements' },
      ],
      clinicalNotes: `Implementation priorities for clinical leaders:
1. Implement EHR-based triggers for automatic palliative care consultation
2. Train all clinicians in primary palliative care skills (basic symptom management, advance care planning, goals of care)
3. Use validated screening tools (SPICT, ESAS) systematically
4. Track penetration rates and time-to-consultation as quality metrics
5. Consider value-based payment models that incentivize appropriate palliative care and hospice use
6. Address disparities through telehealth, language services, and community partnerships`,
    },
  },

  media: [
    {
      id: 'palliative-care-timeline',
      type: 'diagram',
      filename: 'palliative-care-timeline.svg',
      title: 'When to Consider Palliative Care',
      description: 'Timeline showing appropriate timing for palliative care referral in serious illness trajectory',
    },
    {
      id: 'screening-algorithm',
      type: 'diagram',
      filename: 'palliative-care-screening-algorithm.svg',
      title: 'Palliative Care Screening Algorithm',
      description: 'Flowchart for identifying patients who may benefit from palliative care',
    },
  ],

  citations: [
    {
      id: 'temel-nejm-2010',
      type: 'article',
      title: 'Early Palliative Care for Patients with Metastatic Non-Small-Cell Lung Cancer',
      authors: ['Temel, J.S.', 'Greer, J.A.', 'Muzikansky, A.', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa1000678',
    },
    {
      id: 'spict-tool',
      type: 'website',
      title: 'Supportive and Palliative Care Indicators Tool (SPICT)',
      source: 'University of Edinburgh',
      url: 'https://www.spict.org.uk/',
    },
    {
      id: 'capc-referral',
      type: 'website',
      title: 'Palliative Care Referral Criteria',
      source: 'Center to Advance Palliative Care',
      url: 'https://www.capc.org/',
    },
  ],

  crossReferences: [
    { targetId: 'concept-palliative-vs-hospice', targetType: 'concept', relationship: 'related', label: 'Palliative vs Hospice Care' },
    { targetId: 'concept-goals-of-care', targetType: 'concept', relationship: 'related', label: 'Goals of Care Conversations' },
    { targetId: 'concept-quality-of-life', targetType: 'concept', relationship: 'related', label: 'Quality of Life Focus' },
    { targetId: 'symptom-overview', targetType: 'topic', relationship: 'related', label: 'Symptom Management Overview' },
  ],

  tags: {
    systems: ['palliative-care'],
    topics: ['palliative medicine', 'screening', 'referral', 'serious illness'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default whenToConsiderPalliativeCare;
