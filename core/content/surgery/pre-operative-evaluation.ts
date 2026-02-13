/**
 * Pre-Operative Evaluation and Preparation
 *
 * Comprehensive content covering what patients need to know before surgery,
 * including medical evaluation, preparation steps, and what to expect.
 */

import { EducationalContent } from '../types';

export const preOperativeEvaluation: EducationalContent = {
  id: 'surgery-pre-operative-evaluation',
  type: 'process',
  name: 'Pre-Operative Evaluation and Preparation',
  alternateNames: ['Pre-Op Evaluation', 'Surgical Preparation', 'Pre-Surgery Workup'],

  levels: {
    1: {
      level: 1,
      summary: 'Before surgery, doctors check that you are healthy enough and give you instructions to prepare.',
      explanation: `Before you have surgery, your doctor wants to make sure you are as healthy and ready as possible. This is called "pre-operative evaluation" - think of it like a safety check before a big trip.

**What happens before surgery:**

1. **Doctor's Visit**: You will meet with your surgeon and maybe other doctors. They will ask about your health history and any medicines you take.

2. **Health Tests**: You might need some tests like:
   - Blood tests (a small sample from your arm)
   - Heart test (EKG) - stickers on your chest that check your heartbeat
   - Chest X-ray - a picture of your lungs
   - Other tests depending on your surgery

3. **Instructions to Follow**: Your doctor will tell you:
   - When to stop eating and drinking (usually midnight before surgery)
   - Which medicines to take or skip
   - When to arrive at the hospital

4. **Questions to Ask**: It's important to ask your doctor:
   - Why do I need this surgery?
   - What will happen during the surgery?
   - How long will I need to recover?
   - What problems could happen?

**Getting Ready at Home:**
- Arrange for someone to drive you home
- Prepare your recovery area at home
- Follow all the instructions your doctor gives you`,
      keyTerms: [
        { term: 'pre-operative', definition: 'The time before surgery' },
        { term: 'evaluation', definition: 'Checking to see how healthy you are' },
        { term: 'fasting', definition: 'Not eating or drinking for a period of time' },
        { term: 'consent', definition: 'Giving permission for doctors to do the surgery' },
      ],
      analogies: [
        'Pre-operative evaluation is like a pilot checking the airplane before takeoff - making sure everything is safe and ready.',
        'Getting ready for surgery is like preparing for a big test - you need to follow instructions and be well-rested.',
      ],
      examples: [
        'If you take blood pressure medicine, your doctor might tell you to take it the morning of surgery with a small sip of water.',
        'You cannot eat after midnight before surgery because food in your stomach can be dangerous during anesthesia.',
      ],
    },
    2: {
      level: 2,
      summary: 'Pre-operative evaluation involves medical history review, physical examination, laboratory tests, and patient education to minimize surgical risks.',
      explanation: `Pre-operative evaluation is a systematic process to assess a patient's fitness for surgery and optimize their condition before the procedure.

## Components of Pre-Operative Evaluation

### Medical History Review
- Past surgeries and anesthesia experiences
- Current medications (including supplements and OTC drugs)
- Allergies (especially to medications, latex, iodine)
- Chronic conditions (diabetes, heart disease, lung disease)
- Bleeding or clotting disorders
- Family history of anesthesia problems

### Physical Examination
- Vital signs (blood pressure, heart rate, temperature)
- Heart and lung examination
- Airway assessment (for anesthesia planning)
- Examination of the surgical site

### Pre-Operative Testing
Tests are ordered based on the type of surgery and patient health:
- **Blood tests**: Complete blood count (CBC), metabolic panel, coagulation studies
- **Electrocardiogram (EKG)**: For patients over 50 or with heart conditions
- **Chest X-ray**: For patients with lung problems or major surgery
- **Pregnancy test**: For women of childbearing age

### NPO (Nothing by Mouth) Guidelines
- Clear liquids: Stop 2 hours before surgery
- Light meal: Stop 6 hours before surgery
- Heavy meal/fatty foods: Stop 8 hours before surgery

### Medication Instructions
- **Continue**: Blood pressure medications (with sip of water), asthma inhalers
- **Stop**: Blood thinners (varies by medication), diabetes medications, herbal supplements
- **Discuss**: Aspirin, NSAIDs, birth control pills

## Informed Consent
Before surgery, you must sign a consent form showing you understand:
- The procedure and why it's needed
- Risks and potential complications
- Alternative treatments
- Expected recovery`,
      keyTerms: [
        { term: 'NPO', definition: 'Nothing by mouth (Latin: nil per os) - no eating or drinking', pronunciation: 'N-P-O' },
        { term: 'informed consent', definition: 'The process of understanding and agreeing to a medical procedure after learning about risks and benefits' },
        { term: 'CBC', definition: 'Complete blood count - a test measuring different types of blood cells' },
        { term: 'EKG/ECG', definition: 'Electrocardiogram - a test that records the heart\'s electrical activity' },
        { term: 'coagulation studies', definition: 'Blood tests that check how well your blood clots' },
      ],
      analogies: [
        'Pre-operative evaluation is like a mechanic inspecting a car before a long road trip - identifying and fixing problems before they cause trouble.',
      ],
    },
    3: {
      level: 3,
      summary: 'Pre-operative assessment stratifies surgical risk using validated tools, optimizes modifiable risk factors, and implements evidence-based protocols to reduce perioperative complications.',
      explanation: `## Risk Stratification

### Cardiovascular Risk Assessment
**Revised Cardiac Risk Index (RCRI/Lee Index):**
Each factor = 1 point:
1. High-risk surgery (intraperitoneal, intrathoracic, suprainguinal vascular)
2. History of ischemic heart disease
3. History of heart failure
4. History of cerebrovascular disease
5. Diabetes requiring insulin
6. Creatinine > 2.0 mg/dL

| Score | Major Cardiac Event Risk |
|-------|--------------------------|
| 0     | 0.4%                     |
| 1     | 1.0%                     |
| 2     | 2.4%                     |
| >=3   | 5.4%                     |

### Functional Capacity (METs)
- **<4 METs** (cannot climb stairs): Higher risk, may need further testing
- **4-10 METs** (walk up hill, climb 2 flights): Moderate functional capacity
- **>10 METs** (strenuous sports): Excellent functional capacity

### ASA Physical Status Classification
- **ASA I**: Healthy patient
- **ASA II**: Mild systemic disease (controlled HTN, diabetes)
- **ASA III**: Severe systemic disease (CHF, ESRD on dialysis)
- **ASA IV**: Severe disease, constant threat to life
- **ASA V**: Moribund, not expected to survive without surgery
- **ASA VI**: Brain-dead organ donor

## Pre-Operative Optimization

### Glycemic Control
- Target HbA1c < 8% for elective surgery
- Hold metformin 48h before if contrast planned
- Adjust insulin dosing pre-operatively

### Anticoagulation Management
| Medication | Hold Before Surgery |
|------------|---------------------|
| Warfarin   | 5 days              |
| Rivaroxaban| 2-3 days           |
| Apixaban   | 2-3 days           |
| Dabigatran | 2-5 days (renal function dependent) |
| Clopidogrel| 5-7 days           |
| Aspirin    | 7 days (procedure dependent) |

### Smoking Cessation
- Ideal: 8 weeks before surgery
- Any cessation improves outcomes
- 24-hour abstinence reduces carboxyhemoglobin

### Nutritional Assessment
- Albumin < 3.0 g/dL associated with increased complications
- Consider nutritional supplementation 7-14 days pre-op

## Enhanced Recovery After Surgery (ERAS) Protocols
- Carbohydrate loading 2-4 hours pre-op
- Minimize fasting duration
- Patient education and expectation setting
- Multimodal analgesia planning`,
      keyTerms: [
        { term: 'RCRI', definition: 'Revised Cardiac Risk Index - validated tool for predicting major cardiac events perioperatively' },
        { term: 'METs', definition: 'Metabolic equivalents - measure of functional capacity; 1 MET = resting energy expenditure', pronunciation: 'mets' },
        { term: 'ASA classification', definition: 'American Society of Anesthesiologists physical status classification system' },
        { term: 'ERAS', definition: 'Enhanced Recovery After Surgery - evidence-based protocols to optimize perioperative care', pronunciation: 'EE-ras' },
        { term: 'bridging anticoagulation', definition: 'Using short-acting anticoagulants during perioperative period when oral anticoagulants are held' },
      ],
      clinicalNotes: 'The RCRI has limitations in vascular surgery populations. Consider using NSQIP Surgical Risk Calculator for patient-specific risk estimation. Frailty assessment is increasingly important, especially in elderly patients.',
    },
    4: {
      level: 4,
      summary: 'Comprehensive pre-operative evaluation integrates multidisciplinary assessment, advanced risk calculators, and individualized optimization strategies within quality improvement frameworks.',
      explanation: `## Advanced Risk Assessment Tools

### NSQIP Surgical Risk Calculator
Uses 21 patient variables to predict:
- Serious complications
- Any complications
- Pneumonia
- Cardiac complications
- Surgical site infection
- UTI
- VTE
- Renal failure
- Discharge destination
- Mortality

### Frailty Assessment
**Modified Frailty Index (mFI-11):**
- Functional dependence
- Diabetes
- COPD/pneumonia
- CHF
- MI history
- CVA/TIA
- Hypertension requiring medication
- Peripheral vascular disease
- Impaired sensorium
- Previous PCI/stent
- Previous cardiac surgery

Scores >=0.27 associated with significantly increased morbidity and mortality.

### Cardiopulmonary Exercise Testing (CPET)
For high-risk patients undergoing major surgery:
- **AT (Anaerobic Threshold)**: < 11 mL/kg/min = high risk
- **VO2 peak**: < 15 mL/kg/min = high risk
- Provides objective functional capacity data

## Specialized Pre-Operative Clinics

### Anesthesia Pre-Operative Clinic
- Airway assessment (Mallampati, thyromental distance, neck mobility)
- Anesthetic plan discussion
- Anxiety management
- PONV risk stratification (Apfel score)

### Cardiac Optimization Clinic
- Beta-blocker optimization (target HR 60-65)
- Statin therapy initiation
- Stress testing interpretation
- Coronary intervention decisions

### Surgical Prehabilitation
Evidence for improved outcomes:
- Exercise training (aerobic + resistance)
- Nutritional optimization
- Psychological preparation
- Tobacco and alcohol cessation

## Perioperative Medicine Integration

### Team-Based Approach
- Surgeon
- Anesthesiologist
- Primary care/hospitalist
- Specialists (cardiology, pulmonology as needed)
- Nursing coordinator
- Case management

### Standardized Order Sets
- NPO timing
- Bowel preparation protocols
- DVT prophylaxis
- Antibiotic prophylaxis timing
- Glucose management protocols

## High-Risk Populations

### Elderly Patients (>65 years)
- Cognitive screening (Mini-Cog)
- Delirium risk assessment
- Functional status evaluation
- Polypharmacy review
- Goals of care discussion

### Obese Patients (BMI >40)
- OSA screening (STOP-BANG)
- CPAP compliance assessment
- Positioning considerations
- VTE prophylaxis intensification`,
      keyTerms: [
        { term: 'NSQIP', definition: 'National Surgical Quality Improvement Program - ACS database and risk calculator' },
        { term: 'CPET', definition: 'Cardiopulmonary exercise testing - objective assessment of functional capacity using gas exchange', pronunciation: 'C-pet' },
        { term: 'prehabilitation', definition: 'Pre-operative optimization through exercise, nutrition, and psychological preparation' },
        { term: 'STOP-BANG', definition: 'Obstructive sleep apnea screening tool (Snoring, Tiredness, Observed apnea, Pressure, BMI, Age, Neck, Gender)' },
        { term: 'Apfel score', definition: 'Risk score for post-operative nausea and vomiting (female, non-smoker, history of PONV/motion sickness, opioid use)' },
      ],
      clinicalNotes: 'The 2022 AHA/ACC guidelines recommend against routine stress testing before non-cardiac surgery unless it would change management. Shared decision-making should incorporate patient values, particularly regarding major surgery in frail elderly patients.',
    },
    5: {
      level: 5,
      summary: 'Pre-operative evaluation in contemporary practice requires integration of precision medicine approaches, shared decision-making frameworks, and healthcare system optimization to achieve personalized surgical outcomes.',
      explanation: `## Evidence-Based Practice Updates

### Current Guidelines (2024-2025)
**AHA/ACC Cardiovascular Evaluation:**
- Elevated troponin: Consider cardiac catheterization only if would change surgical plan
- Proceed with surgery if functional capacity >4 METs without symptoms
- Routine preoperative echo not recommended without clinical indication
- Coronary revascularization rarely beneficial before non-cardiac surgery

**AAGBI Fasting Guidelines (2023):**
- Clear fluids: 1 hour (previously 2 hours)
- Oral carbohydrate drinks: 2 hours
- Light meal: 6 hours
- Evidence supports reduced fasting duration for patient comfort and glucose homeostasis

### Biomarker-Guided Risk Stratification
**Pre-operative NT-proBNP/BNP:**
- BNP > 92 pg/mL or NT-proBNP > 300 pg/mL: Increased cardiovascular risk
- Consider enhanced monitoring, ICU admission
- May guide decision for beta-blocker optimization

**Frailty Biomarkers:**
- Low albumin/prealbumin
- Elevated CRP
- Low lymphocyte count
- Elevated RDW

### Shared Decision-Making Framework
For elective surgery in high-risk patients:
1. Present quantified risk (NNT, NNH)
2. Explore patient values and priorities
3. Discuss alternatives including non-operative management
4. Document decision-making process
5. Advance care planning for complex cases

## Perioperative Surgical Home (PSH)

### Concept
Patient-centered, physician-led, team-based system from decision for surgery through recovery:
- Pre-operative: Optimization, education, logistics
- Intra-operative: Protocolized care
- Post-operative: ERAS, early mobilization
- Post-discharge: Care coordination, monitoring

### Outcomes
- Reduced length of stay
- Fewer complications
- Lower readmission rates
- Improved patient satisfaction
- Cost reduction

## Precision Medicine in Perioperative Care

### Pharmacogenomics
**CYP2D6 Testing:**
- Poor metabolizers: Inadequate analgesia from codeine/tramadol
- Ultra-rapid metabolizers: Risk of toxicity

**SLCO1B1:**
- Statin metabolism
- Relevant for perioperative statin optimization

### Genetic Risk Factors
- Malignant hyperthermia susceptibility (RYR1, CACNA1S)
- Pseudocholinesterase deficiency (BCHE)
- PONV susceptibility

## Quality Metrics and Reporting

### NSQIP Participation
- Risk-adjusted outcomes comparison
- Semiannual reports
- Best practices collaboration

### Enhanced Recovery Partnership Program
- Standardized pathways by procedure
- Compliance monitoring
- Outcomes tracking

### Pre-Operative Optimization Clinic Metrics
- Time from referral to surgery
- Cancellation rates
- Unplanned ICU admissions
- 30-day outcomes

## Emerging Practices

### Wearable Technology
- Pre-operative activity monitoring
- Heart rate variability assessment
- Sleep quality optimization

### Telemedicine Pre-Op
- Remote history and medication reconciliation
- Virtual education
- Appropriate patient selection criteria

### Machine Learning Risk Models
- Integration of EHR data
- Dynamic risk updating
- Personalized outcome prediction

## Ethical Considerations

### High-Risk Surgery in Limited-Prognosis Patients
- Prognostic awareness assessment
- Goals of care alignment
- Palliative surgery vs. comfort care
- Family communication

### Resource Allocation
- ICU bed availability in surgical planning
- Appropriate timing of elective procedures
- Balancing urgent vs. elective surgical access`,
      keyTerms: [
        { term: 'Perioperative Surgical Home', definition: 'Model of coordinated, patient-centered care encompassing the entire surgical episode from decision through recovery' },
        { term: 'NT-proBNP', definition: 'N-terminal pro-brain natriuretic peptide - cardiac biomarker for risk stratification', pronunciation: 'N-T pro-B-N-P' },
        { term: 'pharmacogenomics', definition: 'Study of how genetic variation affects drug response and metabolism' },
        { term: 'NNT/NNH', definition: 'Number needed to treat/harm - measures of treatment effect magnitude for shared decision-making' },
        { term: 'RDW', definition: 'Red cell distribution width - marker of inflammation and frailty' },
      ],
      clinicalNotes: `Key practice points:
1. Risk calculators should inform, not replace, clinical judgment
2. Pre-operative optimization time should be weighed against disease progression
3. Document shared decision-making for high-risk elective procedures
4. Consider geriatric co-management for elderly surgical patients
5. Pre-operative clinic visits reduce day-of-surgery cancellations by 50-70%
6. Multimodal prehabilitation shows strongest evidence in colorectal and thoracic surgery`,
    },
  },

  media: [
    {
      id: 'pre-op-flowchart',
      type: 'diagram',
      filename: 'pre-operative-evaluation-flowchart.svg',
      title: 'Pre-Operative Evaluation Algorithm',
      description: 'Decision flowchart for pre-operative assessment and testing',
    },
    {
      id: 'cardiac-risk-algorithm',
      type: 'diagram',
      filename: 'cardiac-risk-assessment.svg',
      title: 'Perioperative Cardiac Risk Assessment',
      description: 'ACC/AHA algorithm for cardiac evaluation before non-cardiac surgery',
    },
  ],

  citations: [
    {
      id: 'acc-aha-2022',
      type: 'article',
      title: '2022 AHA/ACC Guideline on Cardiovascular Evaluation and Management of Patients Undergoing Noncardiac Surgery',
      source: 'Circulation',
      authors: ['Fleisher, L.A.', 'et al.'],
      url: 'https://www.ahajournals.org/doi/10.1161/CIR.0000000000001105',
    },
    {
      id: 'eras-society',
      type: 'website',
      title: 'ERAS Society Guidelines',
      source: 'Enhanced Recovery After Surgery Society',
      url: 'https://erassociety.org/guidelines/',
    },
    {
      id: 'millers-anesthesia',
      type: 'textbook',
      title: 'Preoperative Evaluation',
      source: 'Miller\'s Anesthesia',
      chapter: '31',
    },
  ],

  crossReferences: [
    { targetId: 'surgery-anesthesia-types', targetType: 'topic', relationship: 'related', label: 'Anesthesia Types' },
    { targetId: 'surgery-complications', targetType: 'topic', relationship: 'related', label: 'Surgical Complications' },
    { targetId: 'surgery-informed-consent', targetType: 'topic', relationship: 'related', label: 'Informed Consent' },
  ],

  tags: {
    systems: ['surgical'],
    topics: ['pre-operative', 'risk assessment', 'patient preparation'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      shelf: ['surgery'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default preOperativeEvaluation;
