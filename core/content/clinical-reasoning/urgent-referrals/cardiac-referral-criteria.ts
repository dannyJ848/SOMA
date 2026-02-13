/**
 * Cardiac Referral Criteria
 *
 * Guidelines for when to refer patients to cardiology urgently or emergently
 * based on clinical presentation and risk stratification.
 */

import { EducationalContent } from '../../types';

export const cardiacReferralCriteriaContent: EducationalContent = {
  id: 'cardiac-referral-criteria',
  type: 'concept',
  name: 'Cardiac Referral Criteria',
  alternateNames: ['Cardiology Referral Guidelines', 'Heart Specialist Referral', 'Cardiac Consultation Criteria'],

  levels: {
    1: {
      level: 1,
      summary: 'Cardiac referral criteria tell you when to see a heart specialist right away because of serious heart problems that need expert care.',
      explanation: `Sometimes your regular doctor needs help from a heart specialist called a cardiologist. There are certain signs that mean you should see a cardiologist soon or even go to the emergency room.

**Go to Emergency Room Immediately For:**

**Chest Pain That Could Be Your Heart**
- Pressure or squeezing in your chest
- Pain that spreads to your arm, jaw, or back
- Shortness of breath with chest pain
- Cold sweats with chest pain
- Feeling faint or dizzy

**Heart Racing or Irregular With Other Symptoms**
- Your heart is beating very fast or irregularly
- AND you feel dizzy, faint, or have chest pain

**Sudden Severe Shortness of Breath**
- Cannot catch your breath
- Need to sit up to breathe
- Waking up gasping for air

**Fainting**
- Passing out without warning
- Especially during exercise

**See a Cardiologist Soon (Within Days) For:**

**New Heart Murmur**
If your doctor hears an unusual sound in your heartbeat.

**Swelling in Legs or Feet**
If your ankles or feet are puffy, especially with shortness of breath.

**Getting Tired Easily**
If you get winded doing things that used to be easy.

**Known Heart Problems**
If you already have heart disease and your symptoms are getting worse.

**High Blood Pressure That Is Hard to Control**
If your blood pressure stays high even with medicine.

**Why Early Referral Matters:**
- Heart problems can get worse quickly
- Early treatment prevents damage
- Some heart problems can be fixed if caught early
- Better outcomes with specialist care`,
      keyTerms: [
        { term: 'cardiologist', definition: 'A doctor who specializes in treating diseases of the heart and blood vessels' },
        { term: 'heart murmur', definition: 'An unusual sound heard when listening to the heart with a stethoscope' },
        { term: 'referral', definition: 'When one doctor sends you to see another doctor who specializes in a certain area' },
        { term: 'symptom', definition: 'A change in your body that shows something might be wrong' },
      ],
      analogies: [
        'Seeing a cardiologist for heart problems is like seeing a specialist mechanic for your car engine - they have the special tools and expertise to fix complex problems.',
        'It is like calling a fire department for a fire - you want the right experts with the right equipment to handle serious problems.',
      ],
      examples: [
        'A person with new chest pain when walking up stairs should see a cardiologist to check if their heart is getting enough blood.',
        'Someone who fainted while exercising needs urgent cardiology evaluation to rule out dangerous heart rhythm problems.',
      ],
    },
    2: {
      level: 2,
      summary: 'Cardiac referral criteria establish appropriate urgency levels for cardiology consultation based on symptom severity, risk stratification, and potential for life-threatening cardiovascular pathology.',
      explanation: `Cardiology referral decisions are based on clinical presentation, risk factors, and evidence-based guidelines. Appropriate triage ensures timely care for high-risk patients while efficiently managing lower-risk presentations.

**Emergency Referral (Go to ED Immediately):**

**Acute Coronary Syndrome:**
- Chest pain/pressure at rest or with exertion
- Associated dyspnea, diaphoresis, nausea
- New ECG changes (ST elevation, depression)
- Elevated cardiac troponin

**Malignant Arrhythmias:**
- Sustained ventricular tachycardia
- Ventricular fibrillation
- Symptomatic bradycardia
- Atrial fibrillation with RVR and hemodynamic instability

**Acute Heart Failure:**
- Severe dyspnea at rest
- Hypoxia
- Pulmonary edema on imaging
- Hemodynamic instability

**Hypertensive Emergency:**
- Severe hypertension (>180/120) with end-organ damage
- Neurological symptoms
- Chest pain
- Acute kidney injury

**Urgent Referral (Same Day to 48 Hours):**

**New Onset Arrhythmias:**
- New atrial fibrillation/flutter
- Frequent PVCs with symptoms
- New conduction block
- Syncope of unknown cause

**Worsening Heart Failure:**
- Weight gain
- Increasing edema
- Decreased exercise tolerance
- NYHA class progression

**Unstable Angina:**
- Chest pain at rest
- Increasing frequency or severity of angina
- Decreased response to nitroglycerin

**New Murmur with Symptoms:**
- Especially with dyspnea, syncope, or chest pain
- Signs of valvular dysfunction

**Elective Referral (Within Weeks):**

**Risk Factor Management:**
- Complex hypertension management
- Dyslipidemia requiring specialist input
- Diabetes with cardiovascular risk

**Abnormal Testing:**
- Stress test abnormalities
- Echocardiogram findings requiring follow-up
- Ambulatory arrhythmia monitoring results

**Preventive Cardiology:**
- Strong family history of premature CAD
- Multiple cardiovascular risk factors

**Cardiac Clearance:**
- Pre-operative evaluation for high-risk surgery
- Sports participation clearance

**Pediatric/Adolescent:**
- Congenital heart disease follow-up
- New murmur evaluation
- Chest pain with exertion`,
      keyTerms: [
        { term: 'acute coronary syndrome', definition: 'Spectrum of conditions from unstable angina to heart attack due to reduced blood flow to heart (ACS)' },
        { term: 'ventricular tachycardia', definition: 'Rapid heart rhythm originating from the ventricles; potentially life-threatening (VT)' },
        { term: 'hypertensive emergency', definition: 'Severe high blood pressure with acute damage to organs' },
        { term: 'syncope', definition: 'Temporary loss of consciousness due to inadequate blood flow to brain', pronunciation: 'SIN-kuh-pee' },
        { term: 'NYHA class', definition: 'New York Heart Association functional classification system for heart failure severity' },
      ],
      analogies: [
        'Cardiac referral triage is like airport security screening - high-risk passengers get expedited screening while lower-risk passengers go through standard procedures.',
        'It is like a help desk tier system - basic issues handled by first level, complex issues escalated to specialists.',
      ],
      examples: [
        'A patient with new atrial fibrillation and rapid heart rate but stable blood pressure needs urgent cardiology referral within 24 hours.',
        'Someone with moderate aortic stenosis on echocardiogram but no symptoms can be scheduled for routine cardiology follow-up.',
      ],
    },
    3: {
      level: 3,
      summary: 'Cardiac referral criteria integrate clinical guidelines, risk stratification tools, and healthcare system capabilities to optimize patient outcomes while ensuring efficient resource utilization.',
      explanation: `## Cardiac Referral Decision Framework

### Evidence-Based Referral Guidelines

**Acute Chest Pain Pathways:**

**Immediate ED Referral:**
- STEMI: ECG with ST elevation
- High-risk NSTEMI: Troponin elevation with high-risk features
- Aortic dissection: Severe tearing pain, pulse deficits
- Pulmonary embolism: Pleuritic pain, dyspnea, risk factors

**Urgent Cardiology Referral:**
- Intermediate-risk chest pain
- New wall motion abnormality
- Stress-induced ischemia
- Dynamic ECG changes

**Arrhythmia Management:**

**Immediate Intervention:**
- Hemodynamically unstable tachyarrhythmias
- Complete heart block with symptoms
- Sustained ventricular arrhythmias
- Atrial fibrillation with pre-excitation (WPW)

**Urgent Evaluation:**
- New atrial fibrillation requiring rate/rhythm control
- Syncope with suspected cardiac cause
- Frequent symptomatic PVCs
- New conduction abnormality

**Elective Follow-up:**
- Stable atrial fibrillation on appropriate therapy
- Infrequent PVCs without structural disease
- First-degree AV block

**Heart Failure Referral Criteria:**

**Hospitalization Indicated:**
- Acute pulmonary edema
- Hypoperfusion (cold, clammy)
- Altered mental status
- Worsening renal function
- Arrhythmia precipitation

**Urgent Outpatient Referral:**
- NYHA Class III-IV symptoms
- Ejection fraction <35%
- New or worsening heart failure
- Need for device consideration (ICD, CRT)

**Valvular Heart Disease:**

**Urgent Intervention:**
- Acute severe regurgitation
- Critical aortic stenosis with symptoms
- Infective endocarditis

**Surgical/Interventional Referral:**
- Severe AS with symptoms or LV dysfunction
- Severe MR with symptoms or LV dysfunction
- Severe AR with symptoms or LV dilation
- Severe MS with symptoms

### Risk Stratification Tools

**HEART Score for Chest Pain:**
- 0-3: Low risk (outpatient management)
- 4-6: Moderate risk (observation/serial testing)
- 7-10: High risk (admission, early intervention)

**CHA2DS2-VASc for AF:**
- Determines stroke risk
- Guides anticoagulation decisions
- Score >=2 (men) or >=3 (women): Anticoagulation indicated

**HAS-BLED for Bleeding Risk:**
- Balances against stroke risk
- Identifies modifiable risk factors

**Sudden Cardiac Death Risk:**
- Ejection fraction <35%
- Specific cardiomyopathies (HCM, ARVC)
- Channelopathies (Long QT, Brugada)
- Prior cardiac arrest

### Specialized Cardiology Referrals

**Electrophysiology:**
- Complex arrhythmias
- Device management (pacemaker, ICD)
- Catheter ablation candidates
- Inherited arrhythmia syndromes

**Interventional Cardiology:**
- Coronary angiography
- Percutaneous coronary intervention
- Structural heart interventions (TAVR, MitraClip)

**Advanced Heart Failure:**
- Stage D heart failure
- Mechanical circulatory support
- Heart transplant evaluation
- Palliative care integration

**Preventive Cardiology:**
- Familial hypercholesterolemia
- Complex risk factor management
- Cardiac rehabilitation
- Lifestyle intervention programs

### Pediatric Cardiology

**Neonatal Referrals:**
- Cyanosis
- Heart murmur with symptoms
- Failure to thrive
- Abnormal pulse oximetry

**Child/Adolescent:**
- Chest pain with exertion
- Syncope with exertion
- New pathologic murmur
- Hypertension
- Known congenital heart disease

### Administrative Considerations

**Insurance/Authorization:**
- Documentation requirements
- Appropriate use criteria
- Step therapy requirements

**Geographic/Telemedicine:**
- Access to specialists
- Telecardiology for remote areas
- Transfer protocols

**Documentation:**
- Clear indication for referral
- Relevant testing completed
- Urgency level specified`,
      keyTerms: [
        { term: 'risk stratification', definition: 'Process of categorizing patients by likelihood of adverse outcomes' },
        { term: 'ejection fraction', definition: 'Percentage of blood pumped out of ventricle with each contraction; normal is >55% (EF)' },
        { term: 'pre-excitation', definition: 'Early ventricular activation via accessory pathway; seen in WPW syndrome' },
        { term: 'TAVR', definition: 'Transcatheter Aortic Valve Replacement; minimally invasive valve replacement' },
        { term: 'mechanical circulatory support', definition: 'Devices that help pump blood; includes LVAD, Impella, ECMO (MCS)' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced cardiac referral decision-making incorporates multimodality imaging interpretation, contemporary guideline-directed therapy, heart team discussions for complex valvular disease, and shared decision-making for high-risk interventions.',
      explanation: `## Advanced Cardiac Referral Management

### Multimodality Imaging Integration

**Echocardiography:**

**Transthoracic Echo:**
- First-line for structure and function
- Valve assessment
- Chamber quantification
- EF calculation

**Transesophageal Echo:**
- Better resolution for posterior structures
- Prosthetic valve evaluation
- Endocarditis assessment
- Guidance for procedures

**Stress Echocardiography:**
- Ischemia detection
- Viability assessment
- Hemodynamic evaluation
- Valve function with exertion

**Cardiac CT:**

**Coronary CTA:**
- Anatomic assessment
- Plaque characterization
- Excellent negative predictive value
- Radiation considerations

**CT for Structural Planning:**
- Annular sizing for TAVR
- LAA anatomy for closure
- PV anatomy for ablation

**Cardiac MRI:**

**Tissue Characterization:**
- LGE for scar/fibrosis
- T1/T2 mapping for inflammation
- T2* for iron overload
- ECV for diffuse fibrosis

**Indications:**
- Cardiomyopathy evaluation
- Arrhythmia substrate
- Congenital heart disease
- Viability assessment

**Nuclear Cardiology:**

**Myocardial Perfusion Imaging:**
- SPECT vs. PET
- Ischemia quantification
- LV function
- Risk stratification

### Complex Decision-Making

**Stable Ischemic Heart Disease:**

**COURAGE Trial Implications:**
- Medical therapy first for stable patients
- PCI for persistent symptoms
- Optimal medical therapy components:
  - Anti-ischemic: Beta-blocker, calcium channel blocker, nitrate
  - Risk reduction: Statin, aspirin, ACE-I

**ISCHEMIA Trial:**
- Initial invasive vs. conservative strategy
- No mortality benefit for routine revascularization in stable CAD
- Symptom improvement with PCI

**Heart Team Approach:**

**Multidisciplinary Discussions:**
- Complex CAD (SYNTAX score)
- Valve disease (TAVR vs. SAVR)
- Hypertrophic cardiomyopathy
- Adult congenital heart disease

**Shared Decision-Making:**
- Present risks and benefits
- Incorporate patient values
- Discuss alternatives
- Document conversation

**Transcatheter Interventions:**

**TAVR Indications:**
- Symptomatic severe AS
- Intermediate to high surgical risk
- Inoperable patients
- Low-risk patients (evolving)

**MitraClip:**
- Secondary MR (COAPT criteria)
- Prohibitive surgical risk
- Optimal medical therapy failing

**LAA Closure:**
- Atrial fibrillation
- Contraindication to anticoagulation
- Stroke prevention

### Advanced Heart Failure Referral

**Stage D Heart Failure:**

**Inotrope-Dependent:**
- Bridge to decision
- Bridge to transplant
- Palliative

**Mechanical Circulatory Support:**

**Short-Term:**
- Impella
- TandemHeart
- ECMO

**Long-Term (DT-LVAD):**
- Bridge to transplant
- Destination therapy
- Shared care with advanced HF team

**Transplant Evaluation:**

**Indications:**
- Refractory heart failure
- VO2 max <14 mL/kg/min
- Peak cardiac index
- Inotrope dependence

**Contraindications:**
- Active malignancy
- Severe COPD
- Fixed pulmonary hypertension
- Active substance abuse
- Non-adherence

**Palliative Care Integration:**
- Symptom management
- Advance care planning
- Hospice transition
- Shared care model

### Sudden Cardiac Death Prevention

**Primary Prevention ICD:**

**Ischemic Cardiomyopathy:**
- EF <=35% despite optimal therapy
- >40 days post-MI
- NYHA Class II-III
- Reasonable life expectancy

**Non-Ischemic Cardiomyopathy:**
- EF <=35% despite optimal therapy
- NYHA Class II-III
- >3 months on optimal therapy

**CRT Indications:**
- EF <=35%
- LBBB with QRS >=150ms
- NYHA Class II-IV
- On optimal medical therapy

**Inherited Arrhythmia Syndromes:**

**Hypertrophic Cardiomyopathy:**
- ICD for primary or secondary prevention
- Risk factors: Massive LVH, family history SCD, NSVT, unexplained syncope

**Arrhythmogenic RV Cardiomyopathy:**
- ICD for aborted SCD, sustained VT, high-risk features

**Long QT Syndrome:**
- ICD for recurrent syncope despite beta-blocker

**Brugada Syndrome:**
- ICD for aborted SCD or documented VT/VF`,
      keyTerms: [
        { term: 'SYNTAX score', definition: 'Angiographic scoring system to grade complexity of CAD for CABG vs. PCI decision' },
        { term: 'COAPT criteria', definition: 'Clinical and echocardiographic criteria selecting patients who benefit from MitraClip' },
        { term: 'DT-LVAD', definition: 'Destination Therapy Left Ventricular Assist Device; long-term mechanical support' },
        { term: 'VO2 max', definition: 'Maximum oxygen consumption during exercise; prognostic marker in heart failure' },
        { term: 'LGE', definition: 'Late Gadolinium Enhancement; MRI technique detecting myocardial scar' },
      ],
      clinicalNotes: 'The ISCHEMIA trial demonstrated that for stable CAD without left main disease, an initial invasive strategy does not reduce cardiovascular death or MI compared to optimal medical therapy alone, though it does improve symptoms. This has shifted referral patterns toward medical therapy optimization with selective revascularization for persistent symptoms.',
    },
    5: {
      level: 5,
      summary: 'Expert-level cardiac referral practice encompasses precision medicine approaches, advanced risk modeling, regional systems of care, quality improvement initiatives, and integration of emerging technologies in cardiovascular care.',
      explanation: `## Expert-Level Cardiac Referral Practice

### Precision Cardiovascular Medicine

**Genomic Risk Stratification:**

**Polygenic Risk Scores:**
- CAD risk prediction beyond traditional factors
- Risk refinement for statin therapy
- Emerging clinical utility

**Monogenic Conditions:**
- Familial hypercholesterolemia (LDLR, PCSK9, APOB)
- Hypertrophic cardiomyopathy (sarcomeric genes)
- Channelopathies (KCNQ1, SCN5A, RYR2)
- Precision management strategies

**Pharmacogenomics:**

**Clopidogrel Response (CYP2C19):**
- Loss-of-function alleles common
- Reduced antiplatelet effect
- Alternative: Ticagrelor or prasugrel

**Warfarin Dosing (CYP2C9, VKORC1):**
- Pharmacogenetic algorithms
- Reduced time to therapeutic INR
- Fewer bleeding complications

**Statin Myopathy (SLCO1B1):**
- Risk variant identification
- Statin selection and dosing
- Alternative lipid-lowering strategies

### Advanced Risk Modeling

**Machine Learning Approaches:**

**Deep Learning for ECG:**
- Atrial fibrillation prediction
- LV dysfunction detection
- Hyperkalemia detection
- QT prolongation

**Risk Prediction Models:**
- Machine learning improves on traditional models
- Integration of multiple data sources
- Personalized risk communication

**Artificial Intelligence in Imaging:**

**Automated Echocardiography:**
- EF calculation
- Chamber quantification
- Strain analysis

**CT Angiography AI:**
- Plaque quantification
- FFR-CT calculation
- Risk stratification

### Regional Systems of Care

**STEMI Systems:**

**Regional Networks:**
- PCI-capable centers
- Transfer protocols
- Prehospital ECG
- Door-to-balloon time optimization

**Bypass vs. Transfer Decision:**
- Time to treatment
- Expected door-to-balloon
- Fibrinolysis considerations

**Cardiac Arrest Centers:**

**Post-Cardiac Arrest Care:**
- Targeted temperature management
- Cardiac catheterization
- Neuroprognostication
- Quality metrics

**Telemedicine in Cardiology:**

**Applications:**
- Remote consultations
- Device monitoring
- ECG interpretation
- Rural access

**Benefits:**
- Improved access
- Reduced travel burden
- Earlier specialist involvement
- Cost effectiveness

### Quality Improvement Initiatives

**Accreditation Programs:**

**Chest Pain Center Accreditation:**
- Chest Pain - MI Registry participation
- Protocol standardization
- Quality metrics tracking
- Continuous improvement

**Heart Failure Accreditation:**
- Get With The Guidelines - HF
- Readmission reduction
- Transition of care
- Patient education

**Atrial Fibrillation Certification:**
- Anticoagulation appropriate use
- Rate/rhythm control
- Stroke prevention
- Outcomes measurement

**Appropriate Use Criteria:**

**AUC Implementation:**
- Decision support integration
- Preauthorization requirements
- Feedback and education
- Overuse reduction

**Radiation Safety:**
- Dose monitoring
- ALARA principles
- Protocol optimization
- Patient communication

### Emerging Frontiers

**Digital Health:**

**Wearable Devices:**
- Atrial fibrillation detection (Apple Heart Study)
- Activity and fitness tracking
- Heart rate variability
- Remote monitoring

**Smartphone ECG:**
- AliveCor/KardiaMobile
- Patient-initiated recordings
- Arrhythmia detection
- Integration with EMR

**Remote Patient Monitoring:**
- Heart failure (implantable sensors)
- Post-discharge surveillance
- Telehealth visits
- Medication adherence

**Advanced Therapies:**

**Gene Therapy:**
- Familial hypercholesterolemia
- Hereditary transthyretin amyloidosis
- Emerging applications

**RNA Therapeutics:**
- PCSK9 inhibitors
- Lipid management
- Antisense oligonucleotides

**Cell Therapy:**
- Cardiac regeneration
- Stem cell trials
- Challenges and opportunities

**Structural Heart Innovation:**

**Next-Generation TAVR:**
- Lower-risk expansion
- Expanded indications
- Improved devices

**Tricuspid Intervention:**
- Transcatheter edge-to-edge repair
- Annuloplasty devices
- Emerging data

**Pulmonary Valve:**
- Transcatheter replacement
- Congenital heart disease
- Valve-in-valve procedures

### Population Health

**Cardiovascular Disease Prevention:**

**Public Health Strategies:**
- Tobacco control
- Physical activity promotion
- Healthy diet initiatives
- Blood pressure control

**Health Equity:**
- Disparities in care
- Social determinants of health
- Access to care
- Cultural competence

**Global Cardiovascular Health:**
- Rheumatic heart disease
- Chagas disease
- Congenital heart disease
- Capacity building`,
      keyTerms: [
        { term: 'polygenic risk score', definition: 'Combined effect of multiple genetic variants to predict disease risk (PRS)' },
        { term: 'FFR-CT', definition: 'Computed tomography-derived fractional flow reserve; non-invasive functional assessment' },
        { term: 'ALARA', definition: 'As Low As Reasonably Achievable; radiation safety principle' },
        { term: 'antisense oligonucleotide', definition: 'Synthetic nucleic acid that binds to mRNA to modulate protein expression' },
        { term: 'social determinants of health', definition: 'Conditions in which people are born, grow, live, work, and age that affect health outcomes' },
      ],
      clinicalNotes: `Expert cardiac referral practice requires:
1. Integration of multimodality imaging
2. Application of contemporary evidence
3. Multidisciplinary heart team approach
4. Shared decision-making
5. Quality and appropriate use focus
6. Health equity consideration

The field continues to evolve rapidly with technological advances, precision medicine, and a growing emphasis on value-based care and population health.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'acc-aha-chest-pain-2021',
      type: 'article',
      title: '2021 ACC/AHA Guideline for the Evaluation and Diagnosis of Chest Pain',
      authors: ['Gulati M', 'et al.'],
      source: 'Circulation',
    },
    {
      id: 'ischemia-trial',
      type: 'article',
      title: 'Initial Invasive or Conservative Strategy for Stable Coronary Disease',
      authors: ['Maron DJ', 'et al.'],
      source: 'New England Journal of Medicine',
    },
    {
      id: 'coapt-trial',
      type: 'article',
      title: 'Transcatheter Mitral-Valve Repair in Patients with Heart Failure',
      authors: ['Stone GW', 'et al.'],
      source: 'New England Journal of Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'neurological-referrals', targetType: 'concept', relationship: 'sibling', label: 'Neurological Referrals' },
    { targetId: 'oncologic-urgencies', targetType: 'concept', relationship: 'sibling', label: 'Oncologic Urgencies' },
    { targetId: 'psychiatric-emergencies', targetType: 'concept', relationship: 'sibling', label: 'Psychiatric Emergencies' },
    { targetId: 'chest-pain-red-flags', targetType: 'concept', relationship: 'related', label: 'Chest Pain Red Flags' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['cardiology', 'clinical-reasoning', 'referral'],
    keywords: ['cardiology', 'referral', 'heart failure', 'arrhythmia', 'intervention', 'urgent'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'emergency-medicine'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default cardiacReferralCriteriaContent;
