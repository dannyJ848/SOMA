/**
 * Cardiac Wearables - Medical Wearables
 *
 * Wearable devices for heart monitoring, arrhythmia
 * detection, and cardiovascular assessment.
 */

import { EducationalContent } from '../../types';

export const cardiacWearables: EducationalContent = {
  id: 'wearables-cardiac-wearables',
  type: 'concept',
  name: 'Cardiac Wearables',
  alternateNames: ['Heart Monitoring Wearables', 'Cardiac Event Monitors', 'Arrhythmia Detectors'],

  levels: {
    1: {
      level: 1,
      summary: 'Cardiac wearables are special devices that monitor your heart rhythm and rate to detect irregular heartbeats and other heart problems while you go about your daily life.',
      explanation: `## What Are Cardiac Wearables?

Cardiac wearables are medical devices that keep track of your heart\'s activity. They can detect irregular heartbeats, fast or slow heart rates, and other heart problems that might need medical attention.

**Types of Cardiac Wearables:**

1. **Heart Rate Monitors:**
   - Track how fast your heart beats
   - Show if heart rate is normal during activity
   - Alert if heart rate is too high or low

2. **ECG Monitors:**
   - Record heart\'s electrical signals
   - Can detect atrial fibrillation (irregular rhythm)
   - Some are small enough to fit in your pocket

3. **Event Monitors:**
   - Worn for days or weeks
   - Record when you feel symptoms
   - Help find heart problems that come and go

4. **Smart Watch Heart Features:**
   - Some watches can check heart rhythm
   - Send alerts if something seems wrong
   - Share information with your doctor

**Why Use Cardiac Wearables?**

- **Find Problems:** Catch irregular heartbeats
- **Feel Safe:** Know your heart is being watched
- **Help Doctors:** Give information for treatment
- **Track Progress:** See if medicine is working

**Signs You Might Need One:**
- Feeling heart racing or skipping
- Passing out or feeling dizzy
- Shortness of breath
- Family history of heart problems

**How They Help:**
- Record every heartbeat
- Find problems missed at doctor visits
- Alert you to serious issues
- Share data with your heart doctor

**Important Features:**
- Long battery life
- Waterproof (can wear in shower)
- Comfortable to wear
- Easy to send data to doctor

Cardiac wearables help keep your heart healthy by watching over it all the time!`,
      keyTerms: [
        { term: 'cardiac', definition: 'Related to the heart' },
        { term: 'heart rate', definition: 'How many times your heart beats per minute' },
        { term: 'ECG', definition: 'Electrocardiogram - recording of heart\'s electrical activity' },
        { term: 'atrial fibrillation', definition: 'Irregular heart rhythm that can cause strokes' },
      ],
      analogies: [
        'Cardiac wearables are like having an electrician constantly check your heart\'s wiring.',
        'They function as heart security guards, always watching for trouble.',
        'Think of them as heart diaries that record everything your heart does.',
      ],
      examples: [
        'A smart watch detecting an irregular heartbeat and suggesting a doctor visit',
        'A small ECG device showing a normal heart rhythm during a racing heart episode',
        'A patch monitor worn for 2 weeks catching a heart rhythm problem during sleep',
        'A heart rate monitor showing improved fitness as resting heart rate decreases',
      ],
      patientCounselingPoints: [
        'Cardiac wearables can find problems, but only your doctor can diagnose and treat them',
        'Keep a symptom diary to match with heart recordings',
        'Learn how to use the device properly for best results',
        'Know when to call for emergency help versus regular doctor contact',
      ],
    },
    2: {
      level: 2,
      summary: 'Cardiac wearables monitor heart rhythm and rate through ECG recording, photoplethysmography, or implantable sensors to detect arrhythmias, ischemia, and conduction abnormalities, available as external patches, smartwatches with ECG capability, mobile ECG devices, and implantable loop recorders for varying diagnostic durations and clinical indications.',
      explanation: `## Cardiac Wearables

Cardiac wearables encompass a range of technologies for ambulatory heart monitoring, from consumer-grade devices with arrhythmia detection to medical-grade continuous monitors and implantable recorders, serving diagnostic, monitoring, and preventive clinical functions.

**Types of Cardiac Wearables:**

| Device Type | Technology | Duration | Clinical Use |
|-------------|------------|----------|--------------|
| Smartwatch ECG | Single-lead ECG | On-demand | AF screening, symptom check |
| External Patch | Multi-lead ECG | 7-14 days | Arrhythmia detection |
| Event Recorder | Patient-activated | 30 days | Symptom correlation |
| Mobile ECG | Handheld | On-demand | Symptom capture |
| Implantable Loop | Subcutaneous ECG | 2-3 years | Infrequent events |
| Holter Monitor | Multi-lead ECG | 24-48 hours | Continuous monitoring |

**Sensor Technologies:**

**Electrocardiography (ECG):**
- Electrical potential differences on skin surface
- P wave (atrial depolarization)
- QRS complex (ventricular depolarization)
- T wave (ventricular repolarization)
- Standard 12-lead vs single-lead wearable

**Photoplethysmography (PPG):**
- Optical detection of blood volume changes
- Pulse waveform analysis
- Heart rate and rhythm estimation
- Irregular pulse detection (AF screening)

**Arrhythmias Detected:**

**Atrial Fibrillation:**
- Most common clinically significant arrhythmia
- Irregularly irregular rhythm, absent P waves
- Stroke risk requiring anticoagulation consideration
- Most studied wearable detection target

**Other Arrhythmias:**
- Atrial flutter
- Supraventricular tachycardia
- Ventricular tachycardia
- Bradycardia and pauses
- Heart block

**Clinical Indications:**

**Symptom Evaluation:**
- Palpitations
- Syncope or presyncope
- Unexplained dizziness
- Chest pain correlation

**Stroke Prevention:**
- Cryptogenic stroke AF detection
- Paroxysmal AF monitoring
- Anticoagulation decision support

**Chronic Disease Management:**
- AF burden quantification
- Rate control assessment
- Post-ablation monitoring
- Medication efficacy`,
      keyTerms: [
        { term: 'arrhythmia', definition: 'Abnormal heart rhythm' },
        { term: 'paroxysmal', definition: 'Starting and stopping suddenly; occurring in episodes' },
        { term: 'cryptogenic stroke', definition: 'Stroke of undetermined cause' },
        { term: 'anticoagulation', definition: 'Medication to prevent blood clotting' },
        { term: 'depolarization', definition: 'Electrical activation of heart muscle' },
        { term: 'repolarization', definition: 'Electrical recovery of heart muscle' },
      ],
      analogies: [
        'Cardiac wearables are like having a cardiac telemetry unit that fits in your pocket.',
        'They function as continuous cardiac surveillance systems for early warning.',
        'Think of ECG as the heart\'s electrical fingerprint, unique and diagnostic.',
      ],
      examples: [
        'Apple Watch irregular rhythm notification prompting AF diagnosis and treatment',
        'Zio Patch detecting asymptomatic paroxysmal AF in cryptogenic stroke patient',
        'KardiaMobile capturing SVT episode during patient-reported palpitations',
        'Insertable cardiac monitor guiding anticoagulation decision after stroke',
      ],
    },
    3: {
      level: 3,
      summary: 'Cardiac wearables employ ECG and PPG sensors to detect arrhythmias with varying sensitivity and specificity, with FDA-cleared devices available for atrial fibrillation screening and monitoring, clinical indications including palpitations, syncope, cryptogenic stroke, and AF management, and evidence from large studies supporting diagnostic utility while requiring appropriate clinical follow-up for positive findings.',
      explanation: `## Cardiac Wearables: Clinical Evidence and Implementation

Cardiac wearables have demonstrated clinical utility across multiple applications with growing evidence from large-scale studies, requiring appropriate implementation strategies including patient selection, result interpretation, and clinical workflow integration.

**Clinical Evidence:**

**Atrial Fibrillation Screening:**

**Apple Heart Study (n=419,297):**
- 0.52% received irregular pulse notifications
- 71% positive predictive value for AFib on ECG patch
- 34% of notification recipients had AFib
- Demonstrated feasibility of large-scale screening

**HUAWEI Heart Study (n=187,912):**
- AI-based AF detection using PPG
- 92% accuracy for AF detection
- High specificity (99%+)
- Lower sensitivity for paroxysmal AF

**STROKESTOP Study:**
- Systematic AF screening in 75-76 year-olds
- Single-lead ECG screening
- 3% new AF detection
- Anticoagulation initiation in detected cases

**Diagnostic Yield by Device:**

| Device | Duration | Diagnostic Yield |
|--------|----------|------------------|
| 24-48h Holter | 1-2 days | 15-30% |
| 7-day Patch | 7-14 days | 35-50% |
| 30-day Event | 30 days | 50-65% |
| Implantable Loop | 1-3 years | 30-50% for infrequent events |

**Clinical Implementation:**

**Patient Selection:**
- Age and risk factor assessment
- Symptom frequency and severity
- Stroke risk (CHA2DS2-VASc score)
- Technology readiness

**Result Interpretation:**
- Understanding false positive/negative rates
- Correlation with symptoms
- Clinical significance assessment
- Appropriate follow-up protocols

**Workflow Integration:**
- Automated result routing
- Clinical review prioritization
- Patient notification protocols
- Documentation requirements

**Guideline Recommendations:**

**AHA/ACC/HRS Guidelines:**
- Class IIa: Implantable monitors for cryptogenic stroke
- Class IIb: External monitors for syncope evaluation
- Emerging: Consumer device AF screening (select populations)

**USPSTF:**
- Insufficient evidence for AF screening (2022)
- Ongoing studies may inform future recommendations
- Shared decision-making emphasized

**EHRA Practical Guide:**
- Recommendations for device selection
- Interpretation guidance
- Follow-up protocols
- Integration with clinical care`,
      keyTerms: [
        { term: 'positive predictive value', definition: 'Probability disease present given positive test' },
        { term: 'screening', definition: 'Testing asymptomatic individuals for disease' },
        { term: 'CHA2DS2-VASc', definition: 'Stroke risk score for atrial fibrillation patients' },
        { term: 'shared decision-making', definition: 'Collaborative process for medical decisions' },
        { term: 'EHRA', definition: 'European Heart Rhythm Association' },
        { term: 'class IIa', definition: 'Guideline recommendation: reasonable, can be useful' },
      ],
    },
    4: {
      level: 4,
      summary: 'Cardiac wearables demonstrate clinical utility with large studies showing AF screening feasibility and diagnostic yields varying by monitoring duration, guideline support for implantable monitors in cryptogenic stroke and external monitors in syncope, implementation requiring patient selection criteria, result interpretation with awareness of false positive rates, clinical workflow integration, and appropriate follow-up while navigating evolving regulatory landscape for consumer device screening applications.',
      explanation: `## Cardiac Wearables: Advanced Clinical Applications

Cardiac wearables have expanded beyond arrhythmia detection to encompass ischemia monitoring, heart failure assessment, rehabilitation monitoring, and risk stratification, with sophisticated implementation strategies addressing patient selection, clinical integration, and quality assurance.

**Advanced Monitoring Applications:**

**Ischemia Detection:**
- ST-segment monitoring patches
- Angina symptom correlation
- Silent ischemia detection
- Post-MI surveillance

**Heart Failure Monitoring:**
- Heart rate variability trends
- Activity level tracking
- Sleep-disordered breathing
- Early decompensation detection

**Cardiac Rehabilitation:**
- Exercise prescription optimization
- Safety monitoring during activity
- Progress tracking
- Remote patient monitoring integration

**Risk Stratification:**
- Post-MI arrhythmia risk
- Congenital heart disease monitoring
- Channelopathy detection
- Pre-operative assessment

**Device Selection Framework:**

**Symptom Frequency-Based Selection:**

| Symptom Frequency | Recommended Device | Rationale |
|-------------------|-------------------|-----------|
| Daily | Holter or patch | High capture probability |
| Weekly | 14-30 day patch | Extended monitoring |
| Monthly | Implantable loop recorder | Long-term monitoring |
| Exercise-induced | Exercise stress test + patch | Symptom reproduction |
| Asymptomatic | Smartwatch or systematic screening | Population approach |

**Technology Comparison:**

**Consumer vs Medical-Grade:**

| Feature | Consumer (Apple Watch) | Medical-Grade (Zio Patch) |
|---------|----------------------|---------------------------|
| ECG Quality | Single-lead, on-demand | Multi-lead, continuous |
| AF Detection | Intermittent | Continuous |
| Diagnostic Yield | Screening tool | Diagnostic standard |
| Clinical Integration | Limited | Full EHR integration |
| Cost | Consumer purchase | Insurance covered |

**Clinical Workflow Optimization:**

**Automated Detection and Alerting:**
- Cloud-based AI analysis
- Automated AF detection algorithms
- Priority-based alert routing
- False positive filtering

**Over-Reading and Verification:**
- Technician preliminary review
- Cardiologist confirmation
- Artifact recognition
- Clinical correlation

**Patient Management Protocols:**
- Positive result notification
- Follow-up scheduling
- Treatment initiation pathways
- Anticoagulation decision support

**Quality Metrics:**
- Diagnostic yield by indication
- Time to diagnosis
- False positive/negative rates
- Patient satisfaction
- Cost per diagnosis

**Reimbursement and Economics:**

**Coverage Criteria:**
- Symptom documentation
- Prior testing requirements
- Frequency limitations
- Device-specific coverage

**Cost-Effectiveness:**
- Diagnostic yield comparisons
- Cost per quality-adjusted life year
- Stroke prevention value
- Healthcare utilization impact`,
      keyTerms: [
        { term: 'silent ischemia', definition: 'Heart muscle ischemia without symptoms' },
        { term: 'decompensation', definition: 'Failure of heart to maintain adequate function' },
        { term: 'channelopathy', definition: 'Genetic ion channel disorder causing arrhythmias' },
        { term: 'over-reading', definition: 'Clinical expert review of automated interpretations' },
        { term: 'QALY', definition: 'Quality-Adjusted Life Year - health outcome measure' },
        { term: 'artifact', definition: 'Non-physiological signal interference' },
      ],
    },
    5: {
      level: 5,
      summary: 'Cardiac wearables have expanded to advanced applications including ischemia detection, heart failure monitoring, and cardiac rehabilitation with AI-augmented automated analysis, sophisticated device selection frameworks based on symptom frequency and clinical indication, integration into clinical workflows with quality metrics and cost-effectiveness analysis, evolving toward predictive analytics for sudden cardiac death prevention, genotype-phenotype correlation in channelopathies, and precision medicine approaches while addressing health equity in screening access and the balance between diagnostic yield and healthcare resource utilization.',
      explanation: `## Cardiac Wearables: Future Directions and Emerging Applications

Cardiac wearables are advancing through artificial intelligence, multi-parameter integration, predictive analytics, and precision medicine applications, while addressing implementation challenges including health equity, resource allocation, and the integration of consumer and medical-grade devices into comprehensive care pathways.

**Artificial Intelligence Integration:**

**Deep Learning ECG Analysis:**
- Automated morphology analysis
- Subtle abnormality detection
- Risk stratification algorithms
- Prediction of future events

**Predictive Analytics:**
- Sudden cardiac death risk prediction
- AF progression modeling
- Heart failure hospitalization prediction
- Medication response prediction

**Multi-Parameter Fusion:**
- ECG + activity + sleep integration
- Multi-modal risk scores
- Personalized alert thresholds
- Context-aware interpretation

**Precision Cardiology Applications:**

**Pharmacogenomics:**
- Drug-induced arrhythmia risk (QT prolongation)
- Antiarrhythmic drug selection
- Beta-blocker responsiveness
- Personalized therapy optimization

**Genotype-Phenotype Correlation:**
- Channelopathy monitoring (LQTS, Brugada, CPVT)
- Arrhythmogenic cardiomyopathy
- Catecholaminergic polymorphic VT
- Family screening optimization

**Disease Progression Tracking:**
- Atrial fibrillation burden quantification
- Ventricular ectopy trends
- Conduction system disease progression
- Treatment response trajectories

**Global Health and Equity:**

**Low-Resource Implementation:**
- Low-cost smartphone-based ECG
- Task-shifting to community health workers
- Store-and-forward telemedicine
- AI-augmented interpretation support

**Health Equity Considerations:**
- Access to screening technology
- Algorithm validation across demographics
- Socioeconomic disparities in AF detection
- Rural and underserved populations

**Public Health Applications:**
- Population AF screening programs
- Pharmacovigilance (drug safety)
- Environmental cardiac effects
- Pandemic cardiac monitoring

**Emerging Technologies:**

**Advanced Sensors:**
- Wearable echocardiography
- Continuous blood pressure monitoring
- Heart failure biomarker detection (BNP)
- Myocardial perfusion assessment

**Implantable and Ingestible:**
- Leadless pacemakers with monitoring
- Ingestible ECG sensors
- Injectable monitors
- Bioresorbable sensors

**Brain-Heart Interaction:**
- Autonomic monitoring
- Stress-induced arrhythmia detection
- Neurocardiac optimization
- Biofeedback interventions

**Integration and Ecosystem:**

**Hospital-at-Home:**
- Acute cardiac monitoring at home
- Post-procedure surveillance
- Decompensation early warning
- Virtual ward integration

**Chronic Disease Management:**
- Integrated cardiovascular risk management
- Multimorbidity monitoring
- Medication adherence tracking
- Lifestyle intervention support

**Challenges and Considerations:**

**Data Science:**
- Big data analytics infrastructure
- Real-time processing requirements
- Interoperability standards
- Privacy-preserving analytics

**Regulatory Evolution:**
- AI/ML-enabled device regulation
- Consumer-medical device convergence
- Software as Medical Device frameworks
- International harmonization

**Ethical Frameworks:**
- Screening ethics and overdiagnosis
- Data ownership and control
- Insurance and employment discrimination
- Right not to know

**Future Directions:**
- Pre-symptomatic disease detection
- Preventive intervention triggering
- Digital twins for cardiac simulation
- Quantum sensing applications
- Closed-loop cardiac therapeutics`,
      keyTerms: [
        { term: 'pharmacogenomics', definition: 'Study of how genes affect drug response' },
        { term: 'channelopathy', definition: 'Genetic disorder of ion channels causing arrhythmias' },
        { term: 'pharmacovigilance', definition: 'Monitoring drug safety after approval' },
        { term: 'bioresorbable', definition: 'Materials that dissolve in the body after use' },
        { term: 'multimorbidity', definition: 'Co-occurrence of multiple chronic conditions' },
        { term: 'overdiagnosis', definition: 'Diagnosis of conditions that may never cause symptoms' },
      ],
      clinicalNotes: `The future of cardiac wearables lies in AI-augmented prediction and prevention rather than simple detection. When implementing cardiac monitoring programs, ensure equity in access and validation across diverse populations. The convergence of consumer and medical-grade devices will require new clinical workflows integrating patient-generated data with traditional care. Pharmacogenomic integration will enable truly personalized arrhythmia management. Be mindful of overdiagnosis risks as screening becomes ubiquitous - not all detected arrhythmias require treatment. The brain-heart axis represents an emerging frontier for understanding and preventing stress-induced cardiac events. As devices become more capable, the challenge shifts from data collection to intelligent interpretation and action. Advocate for policies supporting equitable access to cardiac monitoring technology. The ultimate goal is preventing cardiac events before they occur through intelligent, personalized surveillance and intervention.`,
    },
  },

  media: [],
  citations: [],
  crossReferences: [],

  tags: {
    systems: ['cardiovascular'],
    topics: ['digital-health'],
    keywords: ['cardiac-wearables', 'heart-monitors', 'ECG', 'arrhythmia', 'atrial-fibrillation'],
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
