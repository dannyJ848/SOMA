/**
 * Urgent Referrals Educational Content
 *
 * Guidance on when to refer patients to specialists urgently,
 * including criteria for cardiology, neurology, oncology, and surgery referrals.
 */

import { EducationalContent } from '../types';

export const URGENT_REFERRALS_CONTENT: EducationalContent = {
  id: 'clinical-reasoning-urgent-referrals',
  type: 'concept',
  name: 'Urgent Specialist Referrals',
  alternateNames: ['Urgent Consultations', 'Time-Sensitive Referrals', 'Specialist Urgency Criteria'],

  levels: {
    1: {
      level: 1,
      summary: 'Sometimes your regular doctor needs to send you to a specialist right away because waiting could be dangerous.',
      explanation: `# When You Need to See a Specialist Quickly

Sometimes your doctor needs to send you to another doctor who specializes in certain body parts or conditions. This is called a referral. Some referrals can wait, but others need to happen fast.

## Heart Specialists (Cardiologists)

You might need to see a heart doctor right away if you have:
- Chest pain that could be from your heart
- Feeling like your heart is beating very fast or skipping beats
- Passing out or almost passing out
- Swelling in your legs with trouble breathing

## Brain and Nerve Specialists (Neurologists)

You might need to see a brain doctor right away if you have:
- Signs of a stroke (face drooping, arm weakness, speech trouble)
- Very bad headaches that are new or different
- Seizures (shaking that you cannot control)
- Sudden weakness or numbness

## Cancer Specialists (Oncologists)

You might need to see a cancer doctor soon if:
- A test found something that might be cancer
- You have a lump that is growing
- You have lost weight without trying
- You have bleeding that should not be there

## Surgeons

You might need surgery soon if:
- You have belly pain that might need an operation
- You have a blockage in your intestines
- A bone is broken and needs fixing
- You have an infection that needs to be drained

## How Fast Is "Urgent"?

| How Fast | What It Means | Examples |
|----------|---------------|----------|
| Same Day | You need help today | Stroke signs, chest pain |
| 1-2 Days | Very soon | New seizure, bad infection |
| 1 Week | Pretty soon | Possible cancer, heart rhythm problems |
| 2 Weeks | Soon but can wait a bit | Lump that might be cancer |

## What You Can Do

- Ask your doctor how soon you need to be seen
- If it is urgent, call the specialist office and tell them
- If you cannot get an appointment fast enough, ask your doctor for help
- Go to the emergency room if you get worse while waiting`,
      keyTerms: [
        { term: 'referral', definition: 'When your doctor sends you to see another doctor who is an expert in something' },
        { term: 'specialist', definition: 'A doctor who is an expert in one part of the body or one type of sickness' },
        { term: 'cardiologist', definition: 'A doctor who is an expert in hearts', pronunciation: 'kar-dee-OL-oh-jist' },
        { term: 'neurologist', definition: 'A doctor who is an expert in the brain and nerves', pronunciation: 'nur-OL-oh-jist' },
        { term: 'oncologist', definition: 'A doctor who is an expert in cancer', pronunciation: 'on-KOL-oh-jist' },
      ],
      analogies: [
        'Seeing a specialist is like taking your car to a mechanic who only fixes engines when there is an engine problem - they know more about that specific thing.',
        'Urgent referrals are like getting a fast pass at a theme park - you skip the regular line because waiting could cause problems.',
      ],
      examples: [
        'Someone with a possible mini-stroke would see a neurologist within 1-2 days to prevent a bigger stroke.',
        'Someone with a suspicious breast lump would see an oncologist within 2 weeks to find out if it is cancer.',
      ],
    },
    2: {
      level: 2,
      summary: 'Urgent referrals are time-sensitive consultations with specialists when delays could lead to serious health consequences or missed treatment opportunities.',
      explanation: `# Understanding Urgent Specialist Referrals

Urgent referrals ensure patients see the right specialist quickly when time matters for diagnosis or treatment.

## Cardiology Urgent Referrals

**Immediate/Same-Day (Call 911 or ED):**
- Acute chest pain suspicious for heart attack
- Severe shortness of breath with heart failure signs
- Unstable heart rhythms causing symptoms
- Syncope (passing out) with heart-related cause suspected

**Within 24-48 Hours:**
- New heart murmur with symptoms
- Possible heart infection (endocarditis)
- Blood clots in heart chambers
- Rapid atrial fibrillation needing rate control

**Within 1-2 Weeks:**
- Newly detected heart failure
- Atrial fibrillation for rhythm management
- Concerning stress test results
- Pacemaker or defibrillator issues

## Neurology Urgent Referrals

**Immediate (ED/Stroke Alert):**
- Acute stroke symptoms (even if improving)
- Status epilepticus (prolonged seizure)
- Rapidly progressive weakness
- Acute severe headache with warning features

**Within 24-72 Hours:**
- First-time seizure
- Transient ischemic attack (TIA/"mini-stroke")
- New severe headache with red flags
- Sudden vision loss

**Within 1-2 Weeks:**
- New multiple sclerosis symptoms
- Peripheral neuropathy with rapid progression
- Movement disorders affecting function
- Chronic headache with concerning features

## Oncology Urgent Referrals

**Immediate (ED):**
- Spinal cord compression (back pain + leg weakness)
- Superior vena cava syndrome (face/arm swelling)
- Tumor lysis syndrome
- Severe chemotherapy complications

**Within 1 Week:**
- Biopsy-proven cancer awaiting staging/treatment
- Suspicious imaging highly concerning for malignancy
- Cancer-related pain crisis

**Within 2 Weeks (Two-Week Wait Pathways):**
- Breast lump in patient over 30
- Unexplained rectal bleeding over 40
- Persistent hoarseness over 3 weeks
- Unexplained weight loss with other symptoms
- Suspicious skin lesion for melanoma

## Surgery Urgent Referrals

**Immediate (Emergency Surgery):**
- Appendicitis
- Bowel obstruction or perforation
- Ruptured aneurysm
- Acute limb ischemia (blocked artery to leg/arm)
- Testicular torsion
- Necrotizing fasciitis

**Within 24-48 Hours:**
- Acute cholecystitis (gallbladder inflammation)
- Incarcerated hernia
- Abscess requiring drainage
- Open fractures

**Within 1-2 Weeks:**
- Symptomatic gallstones
- Stable hernias causing symptoms
- Suspicious masses needing biopsy
- Elective procedures with concerning symptoms

## Time-Sensitive Conditions

Some conditions have specific time windows:

| Condition | Time Window | Why It Matters |
|-----------|-------------|----------------|
| Acute stroke | 4.5 hours for clot-busting drugs | Brain cells dying every minute |
| Heart attack | 90 minutes for artery opening | Heart muscle damage ongoing |
| Testicular torsion | 6 hours | Risk of losing the testicle |
| Retinal artery occlusion | 90-100 minutes | Risk of permanent vision loss |
| TIA | 48 hours high-risk period | Stroke prevention window |

## Getting an Urgent Referral

1. Your doctor determines urgency based on your symptoms
2. Referral is marked as urgent in the system
3. Specialist office contacted directly if very urgent
4. You may be given an appointment within days instead of weeks
5. Always ask about warning signs while waiting`,
      keyTerms: [
        { term: 'transient ischemic attack', definition: 'A temporary blockage of blood to part of the brain causing stroke-like symptoms that resolve; also called a mini-stroke', pronunciation: 'TRAN-see-ent is-KEE-mik' },
        { term: 'status epilepticus', definition: 'A seizure lasting more than 5 minutes or multiple seizures without recovery between them - a medical emergency', pronunciation: 'STAT-us ep-ih-LEP-tih-kus' },
        { term: 'acute limb ischemia', definition: 'Sudden loss of blood flow to an arm or leg, causing pain and color changes - surgical emergency', pronunciation: 'is-KEE-mee-ah' },
        { term: 'two-week wait', definition: 'A fast-track referral pathway for suspected cancer, aiming for specialist appointment within 14 days' },
        { term: 'incarcerated hernia', definition: 'A hernia where tissue is trapped and cannot be pushed back in, risking loss of blood supply' },
      ],
      analogies: [
        'Urgent referrals are like the express lane at the grocery store - some situations need faster processing.',
        'Time-sensitive conditions are like ice cream on a hot day - the longer you wait, the more you lose.',
      ],
      examples: [
        'A patient with TIA symptoms in the morning should see a neurologist within 24-48 hours because the stroke risk is highest in the first few days.',
        'A 55-year-old with new rectal bleeding should see a gastroenterologist within 2 weeks for colonoscopy to rule out colon cancer.',
      ],
    },
    3: {
      level: 3,
      summary: 'Urgent specialist referrals are evidence-based pathways designed to expedite evaluation of time-sensitive conditions where diagnostic or therapeutic delays adversely affect patient outcomes.',
      explanation: `# Urgent Referral Criteria and Pathways

## Cardiology Urgent Referrals

### Acute Coronary Syndrome Pathway
**Immediate (ED/Cath Lab):**
- STEMI: Door-to-balloon <90 minutes
- NSTEMI with high-risk features: Early invasive strategy <24 hours
- Unstable angina: Risk stratification and management

**High-risk Features Requiring Early Invasive Strategy:**
- Hemodynamic instability
- Recurrent angina despite medical therapy
- New/worsening mitral regurgitation
- Sustained ventricular arrhythmia
- GRACE score >140

### Heart Failure Pathway
**Same-day ED evaluation:**
- Acute decompensation with respiratory distress
- New-onset HF with hemodynamic compromise
- Cardiogenic shock

**Urgent (24-72 hours):**
- New HF diagnosis for workup
- Worsening chronic HF despite optimization
- Post-discharge follow-up after HF admission

### Arrhythmia Pathway
**Immediate:**
- Hemodynamically unstable arrhythmia
- Wide complex tachycardia
- Complete heart block

**Urgent (24-48 hours):**
- New atrial fibrillation for rate/rhythm control
- Symptomatic bradycardia
- Syncope with arrhythmic features

**Within 1-2 weeks:**
- Atrial fibrillation for anticoagulation decisions
- Palpitations with documented arrhythmia
- Device interrogation needed

### Structural Heart Disease
**Urgent referral indicators:**
- Severe symptomatic aortic stenosis
- Acute severe mitral regurgitation
- Suspected endocarditis
- Prosthetic valve dysfunction

## Neurology Urgent Referrals

### Stroke/TIA Pathway
**Immediate (Stroke Alert):**
- Acute ischemic stroke within treatment window
- Hemorrhagic stroke
- Any acute focal neurological deficit

**24-48 Hour TIA Clinic:**
- ABCD2 score stratification:
  - Age >=60: 1 point
  - BP >=140/90: 1 point
  - Clinical features: Unilateral weakness (2), Speech disturbance without weakness (1)
  - Duration: >=60 min (2), 10-59 min (1)
  - Diabetes: 1 point
- Score >=4: High risk, urgent evaluation
- Score <4: Still requires urgent outpatient evaluation

**Workup includes:**
- Brain MRI with DWI
- Carotid imaging (ultrasound or CTA)
- Cardiac evaluation (ECG, echo, monitor)
- Risk factor assessment

### Seizure Pathway
**Immediate (ED):**
- Status epilepticus
- First seizure with abnormal neuro exam
- Seizure in pregnancy
- Seizure with significant trauma

**Urgent (days):**
- First unprovoked seizure (normal exam)
- Breakthrough seizures on medication
- Seizure with new-onset headache

### Headache Red Flag Pathway
**Immediate:**
- Thunderclap headache
- Headache with focal deficits
- Headache with papilledema
- Worst headache of life

**Urgent:**
- New daily persistent headache
- Headache with systemic symptoms (fever, weight loss)
- Headache waking from sleep
- New headache in patient >50

## Oncology Urgent Referrals

### Two-Week Wait Cancer Pathways

**Breast:**
- Lump age >=30
- Nipple changes (discharge, retraction, eczema)
- Skin changes (peau d'orange, ulceration)

**Colorectal:**
- Rectal bleeding with change in bowel habit age >=40
- Rectal bleeding without anal symptoms age >=60
- Iron deficiency anemia (Hb <11 men, <10 women)
- Palpable rectal mass

**Lung:**
- CXR suspicious for lung cancer
- Hemoptysis age >=40
- Persistent cough with other risk factors

**Upper GI:**
- Dysphagia
- Age >=55 with weight loss and upper abdominal pain/reflux/dyspepsia

**Urological:**
- Hematuria age >=45
- Palpable prostate mass
- PSA elevation meeting referral criteria

**Skin:**
- Pigmented lesion meeting 7-point checklist (major: change in size, irregular shape, irregular color)
- Dermoscopy features concerning for melanoma

### Oncologic Emergencies
**Immediate management required:**
- Spinal cord compression
- Superior vena cava syndrome
- Malignant hypercalcemia
- Tumor lysis syndrome
- Febrile neutropenia
- Malignant pericardial effusion

## Surgery Urgent Referrals

### Acute Abdomen Pathway
**Immediate surgery consultation:**
- Peritonitis (rigid abdomen, rebound)
- Free air on imaging
- Bowel obstruction with strangulation signs
- Ruptured viscus

**Urgent (24-48 hours):**
- Acute cholecystitis (within 72 hours optimal)
- Acute diverticulitis with complications
- Appendicitis (uncomplicated)

### Vascular Surgery Emergencies
**Immediate:**
- Acute limb ischemia (6 P's: Pain, Pallor, Pulselessness, Paresthesias, Paralysis, Poikilothermia)
- Ruptured AAA
- Acute aortic syndrome

**Urgent:**
- Symptomatic carotid stenosis
- Critical limb ischemia
- Expanding aneurysm

### General Surgery
**Time-sensitive referrals:**
- Incarcerated/strangulated hernia
- Breast abscess
- Perianal abscess
- Pilonidal abscess

## Facilitating Urgent Referrals

### Communication Elements
- Clear indication for urgency
- Relevant clinical findings and investigations
- Contact information for questions
- What patient has been told

### Patient Instructions
- Specific return precautions
- Who to contact if worsening
- What to do if appointment delayed
- Preparation requirements`,
      keyTerms: [
        { term: 'GRACE score', definition: 'Global Registry of Acute Coronary Events risk score for ACS prognosis', pronunciation: 'GRACE' },
        { term: 'ABCD2 score', definition: 'Risk stratification tool for stroke after TIA using Age, Blood pressure, Clinical features, Duration, Diabetes' },
        { term: 'two-week wait', definition: 'Urgent referral pathway ensuring suspected cancer patients see specialist within 14 days' },
        { term: 'peau d\'orange', definition: 'Orange-peel skin appearance from lymphatic obstruction, concerning for inflammatory breast cancer', pronunciation: 'poh dor-AHNZH' },
        { term: '6 P\'s', definition: 'Classic signs of acute limb ischemia: Pain, Pallor, Pulselessness, Paresthesias, Paralysis, Poikilothermia' },
      ],
      clinicalNotes: 'Referral urgency should be communicated directly between providers when possible. Written referrals should clearly indicate urgency level and clinical rationale. Consider patient factors (transport, support) when arranging urgent evaluations.',
    },
    4: {
      level: 4,
      summary: 'Urgent referral pathways integrate clinical prediction rules, healthcare system capacity, and evidence-based timelines to optimize patient outcomes while managing resource utilization across the care continuum.',
      explanation: `# Advanced Urgent Referral Framework

## Cardiology: Risk-Stratified Referral Pathways

### ACS Pathway Optimization

**Pre-Hospital Considerations:**
- EMS activation of cath lab
- Prehospital ECG transmission
- Appropriate hospital destination (PCI-capable vs non-PCI)
- Transfer protocols for STEMI

**Risk Stratification Tools:**

*HEART Score for ED Chest Pain:*
- 0-3: Low risk (0.9-1.7% MACE) - consider discharge
- 4-6: Intermediate (12-16.6% MACE) - observation/admission
- 7-10: High risk (50-65% MACE) - cardiology consultation

*GRACE Score for Admitted ACS:*
- Predicts in-hospital and 6-month mortality
- Guides invasive vs conservative strategy
- >140: High risk, early invasive approach

*TIMI Risk Scores:*
- STEMI: Predicts 30-day mortality
- UA/NSTEMI: 14-day event risk

### Heart Failure Referral Criteria

**Cardiology Referral Indicated:**
- New HF requiring workup
- HFrEF for optimization
- Candidate for device therapy
- Advanced HF evaluation

**Advanced HF/Transplant Referral:**
- NYHA Class III-IV despite optimal therapy
- Multiple HF hospitalizations
- Inotrope dependence
- INTERMACS profile assessment

### Syncope: Structured Referral

**ED Evaluation Required:**
- Syncope with abnormal ECG
- Syncope during exertion
- Syncope with chest pain/palpitations
- Family history sudden death
- Syncope causing injury

**Risk Scores:**
*San Francisco Syncope Rule:*
- Abnormal ECG
- CHF history
- Hematocrit <30%
- Shortness of breath
- Systolic BP <90
- Any positive: admission/urgent evaluation

## Neurology: Time-Sensitive Pathways

### Stroke: Door-to-Treatment Optimization

**IV tPA Window:**
- 0-4.5 hours from last known well
- Extended criteria (wake-up stroke with favorable imaging)
- Door-to-needle target: <60 minutes

**Mechanical Thrombectomy:**
- Large vessel occlusion
- 0-6 hours: Standard window
- 6-24 hours: DAWN/DEFUSE criteria (imaging selection)

**Post-Stroke Referral:**
- Stroke prevention clinic within 7 days
- Neurology follow-up for etiology workup
- Rehabilitation assessment

### TIA: Rapid Access Clinic Model

**High-Risk TIA (24-48 hour evaluation):**
- ABCD2 >=4
- Crescendo TIAs
- TIA on anticoagulation
- Known carotid stenosis

**Evaluation Components:**
- MRI brain with DWI
- MRA or CTA head/neck
- Cardiac evaluation (ECG, echo, monitoring)
- Laboratory workup

**Secondary Prevention Initiation:**
- Antiplatelet therapy
- Statin therapy
- Blood pressure management
- Risk factor modification

### Seizure: Evidence-Based Referral

**First Seizure Workup:**
- Brain MRI
- EEG
- Laboratory studies
- Risk stratification for recurrence

**Recurrence Risk Factors:**
- Abnormal EEG
- Structural brain lesion
- Nocturnal seizure
- Status epilepticus presentation

**Treatment Decision:**
- Discuss risks/benefits of AED
- Patient preference
- Driving implications
- Pregnancy planning

## Oncology: Pathway Optimization

### Two-Week Wait Audit Standards

**Performance Targets:**
- 93% seen within 2 weeks
- 85% receiving diagnosis within 28 days
- 96% receiving treatment within 62 days

**Pathway Efficiency Factors:**
- One-stop diagnostic clinics
- Direct access investigations
- Rapid biopsy pathways
- MDT scheduling

### Cancer of Unknown Primary

**Urgent Referral Indicated:**
- Performance status maintained
- Limited metastatic sites
- Potentially treatable primary suspected
- Treatable histology

**Initial Workup:**
- CT chest/abdomen/pelvis
- Site-specific tumor markers
- Biopsy of accessible lesion
- PET-CT consideration

### Oncologic Emergency Pathway

**Spinal Cord Compression:**
- Clinical suspicion: Immediate dexamethasone
- MRI whole spine urgent
- Oncology/neurosurgery consultation
- Treatment within 24 hours optimal

**Superior Vena Cava Syndrome:**
- Histology before treatment if possible
- Emergent treatment if airway compromise
- Stenting vs chemotherapy vs radiation

**Malignant Hypercalcemia:**
- IV fluids, bisphosphonates
- Address underlying malignancy
- Hospice discussion if end-stage

## Surgery: Optimization of Emergent Referral

### Acute Abdomen Triage

**Immediate Surgery Indicators:**
- Hemodynamic instability
- Peritonitis
- Free air
- Ischemia

**Observation Pathway:**
- Stable patient
- Equivocal diagnosis
- Serial examination
- Response to conservative management

### Time-Dependent Surgical Conditions

| Condition | Optimal Timing | Rationale |
|-----------|---------------|-----------|
| Appendectomy | <24 hours | Perforation risk increases |
| Cholecystectomy | <72 hours | Technical difficulty increases |
| Incarcerated hernia | <6 hours | Bowel viability |
| Testicular torsion | <6 hours | Testicular salvage |
| Acute limb ischemia | <6 hours | Limb salvage |
| Necrotizing fasciitis | Immediate | Mortality doubles with delay |

### Surgical Oncology Pathway

**Expedited Surgical Referral:**
- Tissue diagnosis needed
- Resectable disease suspected
- Neoadjuvant therapy candidate
- Complex resection planning

**MDT Involvement:**
- All cancer cases pre-treatment
- Multimodality planning
- Clinical trial eligibility
- Supportive care integration

## System-Level Considerations

### Referral Pathway Components

1. **Identification:** Clinical criteria + decision support
2. **Triage:** Urgency classification
3. **Communication:** Direct referral + documentation
4. **Scheduling:** Appropriate timeframe
5. **Preparation:** Investigations + patient education
6. **Transition:** Information transfer + follow-up

### Barriers to Urgent Referral

- Specialist availability
- Geographic access
- Insurance/authorization
- Patient factors
- Communication gaps

### Quality Metrics

- Referral-to-appointment time
- Diagnostic interval
- Treatment initiation time
- Patient satisfaction
- Outcome tracking`,
      keyTerms: [
        { term: 'INTERMACS', definition: 'Interagency Registry for Mechanically Assisted Circulatory Support, profiles HF severity 1-7', pronunciation: 'in-ter-MACS' },
        { term: 'DAWN criteria', definition: 'DWI or CTP Assessment with Clinical Mismatch in the Triage of Wake-Up and Late Presenting Strokes for thrombectomy eligibility' },
        { term: 'DEFUSE criteria', definition: 'Diffusion and Perfusion Imaging Evaluation for Understanding Stroke Evolution, criteria for extended window thrombectomy' },
        { term: 'MDT', definition: 'Multidisciplinary Team, required for cancer treatment planning' },
        { term: 'one-stop clinic', definition: 'Service model providing consultation, imaging, and procedures in single visit' },
      ],
      clinicalNotes: 'System capacity varies by institution and region. Understanding local referral pathways, specialist availability, and backup options is essential for effective urgent referral management.',
    },
    5: {
      level: 5,
      summary: 'Expert-level urgent referral management integrates evidence-based clinical criteria, healthcare system dynamics, resource stewardship, and shared decision-making to optimize patient outcomes while maintaining sustainable specialty care access.',
      explanation: `# Expert Urgent Referral Management

## System Design Principles

### Demand-Capacity Alignment

**Referral Volume Management:**
- Defining appropriate referral criteria
- Primary care capability building
- Shared care protocols
- Return-to-primary-care pathways

**Capacity Optimization:**
- Triage protocols
- Virtual consultations for advice
- One-stop diagnostic clinics
- Parallel processing

### Quality Framework

**Structure Measures:**
- Referral pathway documentation
- Electronic referral systems
- Decision support integration
- Communication standards

**Process Measures:**
- Referral appropriateness
- Time to appointment
- Information completeness
- Patient preparation

**Outcome Measures:**
- Diagnostic accuracy
- Treatment initiation
- Patient satisfaction
- Clinical outcomes

## Cardiology: Advanced Pathways

### Chest Pain Pathway Evolution

**Traditional Model:**
ED -> Admit -> Cardiology consult -> Testing -> Discharge

**Contemporary Models:**

*Chest Pain Unit:*
- Protocolized observation
- Accelerated diagnostic protocols
- 0/1 or 0/3 hour troponin
- Stress testing or CCTA

*Same-Day Discharge ACS:*
- Low-risk NSTEMI (selected)
- Completed workup
- Optimized medical therapy
- Close follow-up arranged

### Heart Failure Pathways

**Transition of Care:**
- Discharge optimization
- 7-day follow-up appointment
- Medication reconciliation
- Patient education

**Bridge Clinics:**
- Post-discharge intensification
- Diuretic adjustment
- Titration to GDMT
- Early specialty access

### Electrophysiology Access

**Device Urgency Tiers:**

| Indication | Timeframe | Rationale |
|------------|-----------|-----------|
| Complete heart block | Days | Syncope/death risk |
| Secondary prevention ICD | 2-4 weeks | SCD risk post-event |
| Primary prevention ICD | Outpatient | After optimization |
| CRT | Outpatient | After HF optimization |

## Neurology: Comprehensive Pathways

### Stroke Systems of Care

**Certification Levels:**
- Acute Stroke Ready Hospital
- Primary Stroke Center
- Thrombectomy-Capable Stroke Center
- Comprehensive Stroke Center

**Transfer Protocols:**
- Drip and ship (tPA then transfer)
- Direct to comprehensive center
- Telemedicine consultation
- Hub-and-spoke model

### TIA: Contemporary Management

**EXPRESS Study Model:**
- Same-day specialist evaluation
- Immediate secondary prevention
- 80% reduction in 90-day stroke risk

**Virtual TIA Clinics:**
- Telemedicine assessment
- Protocol-driven workup
- Close follow-up
- Appropriate resource utilization

### Headache: Rational Referral

**Primary Care Management Capable:**
- Migraine
- Tension-type headache
- Medication overuse headache (with support)

**Neurology Referral Appropriate:**
- Refractory to multiple preventives
- Diagnostic uncertainty
- Red flag features
- Medication overuse requiring detox

## Oncology: Pathway Excellence

### Rapid Diagnostic Centers

**Model:**
- Single point of access
- Integrated diagnostics
- Fast-track pathology
- Same-day results where possible

**Outcomes:**
- Reduced diagnostic interval
- Patient satisfaction
- Earlier stage at diagnosis
- Survival benefit

### Pathway Variance Management

**Acceptable Variance:**
- Patient choice
- Comorbidity considerations
- Treatment individualization

**Unacceptable Variance:**
- Access barriers
- Communication failures
- Resource limitations
- Quality deficits

### Prehabilitation and Optimization

**Components:**
- Nutritional optimization
- Smoking cessation
- Anemia correction
- Functional assessment

**Timing:**
- Integrated into diagnostic pathway
- Not delaying treatment inappropriately
- Parallel processing

## Surgery: Emergency Pathway Optimization

### Acute Surgical Assessment Units

**Model:**
- Dedicated surgical receiving
- Senior surgeon assessment
- Direct access imaging
- Streamlined admission

**Benefits:**
- Reduced time to surgery
- Improved patient experience
- Better resource utilization
- Training opportunities

### Hot Gallbladder Pathway

**Evidence:**
- ACDC trial: Early cholecystectomy superior
- Optimal: Within 72 hours
- Complications reduced
- Length of stay reduced

**Barriers:**
- OR access
- Surgeon availability
- Patient factors

### Emergency Surgery Standards

**Quality Indicators:**
- Time to OR for specified conditions
- Senior surgeon involvement
- 30-day mortality
- Unplanned return to OR

## Shared Decision-Making Integration

### When Speed Conflicts with Preference

**Considerations:**
- Life-threatening vs quality-of-life
- Reversibility of delay
- Patient values clarification
- Family involvement

**Documentation:**
- Decision discussed
- Risks explained
- Patient preference noted
- Plan documented

### Communication Excellence

**Referral Communication:**
- Clear urgency indication
- Clinical summary
- What has been discussed with patient
- Specific question for specialist

**Feedback Loops:**
- Outcome communication to referrer
- Pathway performance data
- Continuous improvement

## Resource Stewardship

### Appropriate Urgency Classification

**Over-urgency Consequences:**
- System strain
- Dilution of truly urgent cases
- Access reduction

**Under-urgency Consequences:**
- Delayed diagnosis
- Worse outcomes
- Patient harm

### Sustainable Models

**Primary Care Enhancement:**
- Education and support
- Advice and guidance services
- Shared protocols
- Capacity building

**Specialist Time Protection:**
- Administrative support
- Protocol-driven care
- Task delegation
- Efficiency optimization

## Future Directions

### Technology Integration
- AI triage support
- Predictive analytics
- Real-time capacity visibility
- Automated pathway navigation

### Value-Based Models
- Outcome-linked referral
- Quality incentives
- Integrated care systems
- Population health management`,
      keyTerms: [
        { term: 'EXPRESS study', definition: 'Early use of eXisting PREventive Strategies for Stroke - showed immediate specialist evaluation and treatment after TIA dramatically reduces stroke risk' },
        { term: 'GDMT', definition: 'Guideline-Directed Medical Therapy, evidence-based medications for heart failure' },
        { term: 'hub-and-spoke', definition: 'Healthcare delivery model with specialized center (hub) and referring facilities (spokes)' },
        { term: 'drip and ship', definition: 'Strategy of initiating thrombolysis at presenting hospital then transferring to comprehensive center' },
        { term: 'prehabilitation', definition: 'Optimizing patient fitness and health before major treatment or surgery' },
      ],
      clinicalNotes: 'Expert referral management balances individual patient needs with system sustainability. Understanding local pathways, building relationships with specialists, and advocating for system improvements are essential components of high-quality care delivery.',
    },
  },

  media: [],
  citations: [
    {
      id: 'cite-nice-referral',
      type: 'website',
      title: 'Suspected cancer: recognition and referral',
      source: 'NICE Guidelines NG12',
      url: 'https://www.nice.org.uk/guidance/ng12',
      license: 'Open Government Licence',
    },
    {
      id: 'cite-tia-express',
      type: 'article',
      title: 'Effect of urgent treatment of transient ischaemic attack and minor stroke on early recurrent stroke (EXPRESS study)',
      authors: ['Rothwell PM', 'Giles MF', 'Chandratheva A', 'et al.'],
      source: 'Lancet',
      url: 'https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(07)61448-2/fulltext',
      license: 'Journal Article',
    },
    {
      id: 'cite-acs-guidelines',
      type: 'article',
      title: 'ACC/AHA Guidelines for the Management of Patients With Acute Coronary Syndromes',
      authors: ['Writing Committee Members'],
      source: 'Circulation',
      url: 'https://www.ahajournals.org/journal/circ',
      license: 'Professional Guidelines',
    },
  ],
  crossReferences: [
    {
      targetId: 'clinical-reasoning-red-flags',
      targetType: 'concept',
      relationship: 'related',
      label: 'Medical Red Flags',
    },
    {
      targetId: 'algorithm-chest-pain',
      targetType: 'concept',
      relationship: 'related',
      label: 'Chest Pain Diagnostic Algorithm',
    },
  ],
  tags: {
    systems: ['cardiovascular', 'neurological', 'oncology', 'surgery'],
    topics: ['clinical-reasoning', 'referral-pathways', 'healthcare-navigation', 'time-sensitive-care'],
    keywords: ['urgent referral', 'specialist consultation', 'time-sensitive', 'pathways', 'triage'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      shelf: ['medicine', 'surgery', 'neurology'],
    },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
