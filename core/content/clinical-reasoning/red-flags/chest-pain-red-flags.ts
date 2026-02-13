/**
 * Chest Pain Red Flags
 *
 * Warning signs and symptoms that indicate serious underlying pathology
 * requiring urgent evaluation when presenting with chest pain.
 */

import { EducationalContent } from '../../types';

export const chestPainRedFlagsContent: EducationalContent = {
  id: 'chest-pain-red-flags',
  type: 'concept',
  name: 'Chest Pain Red Flags',
  alternateNames: ['Dangerous Chest Pain Signs', 'Chest Pain Warning Signs', 'Serious Chest Pain Features'],

  levels: {
    1: {
      level: 1,
      summary: 'Red flags for chest pain are warning signs that mean something serious might be wrong and you need emergency help right away.',
      explanation: `Chest pain can have many causes - some are minor, but some are very serious. Red flags are warning signs that mean you need to get emergency medical help right away.

**Call 911 Immediately If You Have:**

**Pressure or Squeezing Pain**
Feeling like someone is sitting on your chest, or like your chest is being squeezed tightly. This can mean your heart is not getting enough blood.

**Pain Spreading to Other Parts**
Pain that moves to your arm (especially left), jaw, neck, or back. This pattern often means the heart is involved.

**Shortness of Breath**
Having trouble breathing or feeling like you cannot get enough air, especially with chest pain.

**Cold Sweats**
Breaking out in a cold sweat while having chest pain is a warning sign of heart problems.

**Feeling Faint or Passing Out**
If you feel dizzy, lightheaded, or actually pass out along with chest pain, this is an emergency.

**Severe Sudden Pain**
Pain that starts suddenly and is the worst pain you have ever felt, especially if it feels like tearing or ripping.

**Pain With Nausea or Vomiting**
Feeling sick to your stomach along with chest pain can be a sign of a heart attack.

**What to Do:**
- Call 911 immediately - do not drive yourself
- Chew an aspirin if you are not allergic (only if recommended by emergency dispatcher)
- Stay calm and rest while waiting for help
- Do not ignore these warning signs - it is better to be checked and find out it is nothing serious than to wait too long`,
      keyTerms: [
        { term: 'red flag', definition: 'A warning sign that something serious might be wrong' },
        { term: 'heart attack', definition: 'When blood flow to the heart is blocked, damaging the heart muscle' },
        { term: 'emergency', definition: 'A serious situation requiring immediate help' },
        { term: 'pressure', definition: 'A feeling of squeezing or weight on the chest' },
      ],
      analogies: [
        'Red flags in chest pain are like smoke alarms - they do not always mean there is a fire, but you should always check immediately to be safe.',
        'They are like warning lights on your car dashboard - they tell you something important needs attention right away.',
      ],
      examples: [
        'A person who feels crushing chest pressure with sweating and arm pain should call 911 immediately - this is the classic pattern for a heart attack.',
        'Someone with sudden severe tearing pain in their chest and back needs emergency care - this could be an aortic dissection.',
      ],
    },
    2: {
      level: 2,
      summary: 'Chest pain red flags are clinical features that indicate potentially life-threatening conditions such as acute coronary syndrome, aortic dissection, or pulmonary embolism requiring immediate emergency evaluation.',
      explanation: `Chest pain is one of the most common emergency presentations, and certain features significantly increase the likelihood of serious underlying pathology. Recognizing these red flags is essential for timely intervention.

**Life-Threatening Causes of Chest Pain:**

**1. Acute Coronary Syndrome (Heart Attack)**
Red flags:
- Crushing, pressure, or squeezing substernal pain
- Pain radiating to arm, jaw, neck, or back
- Associated diaphoresis (sweating)
- Nausea or vomiting
- Shortness of breath
- Sense of impending doom

**2. Aortic Dissection**
Red flags:
- Sudden, severe "tearing" or "ripping" pain
- Pain maximal at onset
- May radiate to back
- Unequal blood pressures in arms
- Neurological symptoms (if carotid involvement)

**3. Pulmonary Embolism**
Red flags:
- Sudden pleuritic chest pain (worse with breathing)
- Sudden shortness of breath
- Tachycardia (rapid heart rate)
- Risk factors: recent surgery, immobilization, cancer
- Hemoptysis (coughing blood)

**4. Tension Pneumothorax**
Red flags:
- Sudden unilateral chest pain
- Severe respiratory distress
- Tracheal deviation (late sign)
- Absent breath sounds on one side
- Hypotension and shock

**5. Esophageal Rupture (Boerhaave Syndrome)**
Red flags:
- Severe chest pain after forceful vomiting
- Subcutaneous emphysema (crepitus)
- Rapid deterioration
- History of heavy eating/alcohol

**Risk Stratification:**

High-risk features requiring immediate action:
- Hemodynamic instability (low blood pressure, shock)
- Altered mental status
- Severe respiratory distress
- Elevated troponin
- ST elevation on ECG

**When to Call Emergency Services:**
- Any chest pain with red flag features
- New severe chest pain in high-risk patients (elderly, known heart disease)
- Chest pain not improving with rest`,
      keyTerms: [
        { term: 'acute coronary syndrome', definition: 'Spectrum of conditions from unstable angina to heart attack caused by reduced blood flow to the heart (ACS)' },
        { term: 'aortic dissection', definition: 'A tear in the inner layer of the aorta causing blood to flow between layers', pronunciation: 'ay-OR-tik' },
        { term: 'pulmonary embolism', definition: 'Blockage in a lung artery, usually by a blood clot (PE)' },
        { term: 'pleuritic', definition: 'Pain that worsens with breathing or coughing', pronunciation: 'PLOOR-ih-tik' },
        { term: 'hemodynamic instability', definition: 'Abnormal blood pressure or circulation indicating inadequate organ perfusion' },
      ],
      analogies: [
        'Chest pain red flags are like the difference between a small kitchen fire and a whole-house blaze - both involve fire, but one requires immediate emergency response.',
        'They are like airport security alerts - certain combinations trigger immediate, thorough investigation even when most turn out to be false alarms.',
      ],
      examples: [
        'A 55-year-old man with diabetes who has crushing chest pressure, diaphoresis, and radiation to his left arm has multiple red flags for acute MI.',
        'A patient with recent knee surgery who develops sudden pleuritic chest pain and dyspnea has red flags for pulmonary embolism.',
      ],
    },
    3: {
      level: 3,
      summary: 'Chest pain red flags represent clinical features with high positive likelihood ratios for life-threatening cardiovascular and pulmonary pathology, necessitating immediate diagnostic workup and therapeutic intervention.',
      explanation: `## Chest Pain Red Flags: Clinical Approach

### Pathophysiologic Basis of Red Flags

**Ischemic Pain (ACS):**
- Substernal pressure reflects cardiac ischemia
- Radiation patterns follow sympathetic innervation
- Autonomic activation causes diaphoresis and nausea
- Catecholamine surge causes sense of doom

**Dissection Pain:**
- Sudden tearing from intimal tear
- Pain tracks with dissection propagation
- Involvement of branch vessels causes end-organ symptoms

**Embolic Pain:**
- Pleuritic from pleural irritation
- Dyspnea from ventilation-perfusion mismatch
- Hemoptysis from pulmonary infarction

### Evidence-Based Red Flags

**High-Risk Historical Features:**

| Feature | LR+ for ACS | Clinical Significance |
|---------|-------------|----------------------|
| Radiation to arm | 2.3-4.7 | Strong cardiac marker |
| Diaphoresis | 2.0-2.4 | Autonomic activation |
| Nausea/vomiting | 1.9-2.0 | Vagal stimulation |
| Pressure quality | 1.3-1.5 | Typical angina |
| Similar to prior MI | High | Known cardiac history |

**Physical Exam Red Flags:**

| Finding | Concern | Immediate Action |
|---------|---------|------------------|
| Hypotension (SBP <90) | Cardiogenic shock | IV fluids, pressors, emergent cath |
| JVD + clear lungs | RV infarct or tamponade | Echo, fluids, avoid nitrates |
| New neurologic deficit | Aortic dissection | CTA aorta, surgical consult |
| Unilateral absent breath sounds | Pneumothorax | Chest X-ray, decompression |
| Asymmetric pulses/BP | Dissection | CTA, surgical evaluation |

### Diagnostic Testing Priorities

**Immediate (Emergency Department):**
1. 12-lead ECG (within 10 minutes)
2. High-sensitivity troponin
3. Chest X-ray
4. Bedside echo (if indicated)

**Urgent (Based on Presentation):**
- CT coronary angiography (CCTA)
- CT pulmonary angiography (CTPA)
- CT aortography
- Formal echocardiogram

### Differential Diagnosis by Red Flag

**ST Elevation:**
- STEMI
- Pericarditis (diffuse, concave)
- Early repolarization
- LV aneurysm

**Wide Mediastinum on CXR:**
- Aortic dissection
- Aortic aneurysm
- Technical artifact

**Elevated Troponin:**
- Type 1 MI (plaque rupture)
- Type 2 MI (demand ischemia)
- Myocarditis
- Pulmonary embolism
- Sepsis

### Risk Stratification Tools

**HEART Score:**
- 0-3: Low risk (0.9-1.7% MACE)
- 4-6: Moderate risk (12-16.6% MACE)
- 7-10: High risk (50-65% MACE)

**TIMI Risk Score:**
- Predicts mortality and ischemic events
- 0-2: Low risk
- 3-4: Intermediate risk
- 5-7: High risk

### Management Principles

**Immediate Priorities:**
1. ABCs (Airway, Breathing, Circulation)
2. IV access, continuous monitoring
3. Supplemental oxygen if hypoxic
4. Aspirin (if not given)
5. Nitroglycerin for ongoing pain
6. Morphine if pain refractory

**STEMI:** Door-to-balloon <90 minutes
**NSTEMI:** Risk-stratify for invasive strategy
**Aortic Dissection:** IV beta-blockade + surgical/endovascular
**PE with hemodynamic compromise:** Systemic thrombolysis`,
      keyTerms: [
        { term: 'likelihood ratio', definition: 'Measure of diagnostic test performance; how much a finding changes disease probability (LR)' },
        { term: 'MACE', definition: 'Major Adverse Cardiac Events - typically death, MI, or revascularization' },
        { term: 'TIMI score', definition: 'Thrombolysis in Myocardial Infarction risk score for prognostication in ACS' },
        { term: 'subendocardial', definition: 'Relating to the inner layer of the heart muscle' },
        { term: 'ventilation-perfusion mismatch', definition: 'Imbalance between air reaching alveoli and blood perfusing them (V/Q mismatch)' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced understanding of chest pain red flags requires integration of nuanced ECG interpretation, high-sensitivity troponin dynamics, multimodal imaging selection, and recognition of atypical presentations in special populations.',
      explanation: `## Advanced Chest Pain Evaluation

### High-Risk ECG Patterns

**STEMI Recognition:**
- ST elevation >1mm in 2 contiguous leads (except V2-V3)
- New LBBB with ischemic symptoms
- Posterior MI: ST depression V1-V3, tall R waves

**STEMI Equivalents:**
- De Winter T-waves: Upsloping ST depression with hyperacute T-waves (proximal LAD)
- Wellens syndrome: Biphasic or deeply inverted T-waves V2-V3 (critical LAD)
- Sgarbossa criteria for LBBB/paced rhythm

**High-Risk Non-STE Patterns:**
- ST depression >1mm
- Dynamic T-wave inversions
- ST elevation aVR with widespread depression (left main disease)

### High-Sensitivity Troponin Interpretation

**Rapid Rule-Out Protocols:**

**0/1-Hour Algorithm:**
- Baseline hs-cTnT <5 ng/L: Rule-out (NPV >99%)
- Delta <3 ng/L at 1 hour: Supports rule-out
- Delta >5 ng/L or absolute >52 ng/L: Rule-in

**Clinical Context Matters:**
- Chronically elevated in CKD, heart failure
- Dynamic change >50% suggests acute process
- Magnitude correlates with prognosis

### Multimodal Imaging Selection

**CT Coronary Angiography (CCTA):**
- Indications: Low-intermediate risk, no known CAD, stable patient
- Advantages: Excellent NPV, plaque characterization
- Contraindications: Known CAD, renal dysfunction, irregular rhythm

**Stress Testing:**
- Exercise ECG: Low-risk, interpretable baseline ECG
- Stress echo: Wall motion assessment, no radiation
- Nuclear MPI: Prior imaging for comparison, viability
- Stress MRI: Microvascular disease, no radiation

**CT Pulmonary Angiography:**
- First-line for PE diagnosis
- Assess right heart strain
- May show RV dilation, septal bowing

**CT Aortography:**
- Dissection detection: Sensitivity >95%
- Intimal flap visualization
- Branch vessel involvement

### Special Populations

**Women:**
- More likely atypical presentation
- Higher false-positive stress tests
- Consider CCTA for evaluation
- SCAD risk (especially peripartum)

**Elderly (>75 years):**
- Silent ischemia more common
- Higher baseline troponin
- Atypical symptoms (weakness, confusion)
- Benefit from invasive strategy maintained

**Diabetics:**
- Autonomic neuropathy masks pain
- Higher risk silent MI
- More diffuse disease

**Chronic Kidney Disease:**
- Baseline troponin elevation
- Delta >20% more meaningful
- Contrast limitations for CT

### Challenging Presentations

**Chest Pain with Normal Troponin:**
- Early presentation (<6 hours from symptom onset)
- Unstable angina
- Non-cardiac cause
- Consider serial testing

**Chest Pain with Normal ECG:**
- 6% of NSTEMI have normal ECG
- Does not rule out ACS
- Risk stratification still indicated

**Reproducible Chest Wall Pain:**
- Usually musculoskeletal
- Cannot exclude cardiac cause
- 15% of MI patients have reproducible tenderness

### Risk-Stratified Management

**Low Risk (HEART 0-3, negative troponin):**
- Consider discharge with outpatient follow-up
- Optional stress testing within 72 hours
- Clear return precautions

**Intermediate Risk:**
- Observation unit or admission
- Serial troponins
- Non-invasive testing

**High Risk:**
- Cardiac care unit admission
- Cardiology consultation
- Invasive strategy`,
      keyTerms: [
        { term: 'De Winter T-waves', definition: 'ECG pattern indicating acute proximal LAD occlusion without ST elevation' },
        { term: 'Wellens syndrome', definition: 'T-wave pattern indicating critical proximal LAD stenosis in pain-free period' },
        { term: 'SCAD', definition: 'Spontaneous Coronary Artery Dissection - non-atherosclerotic cause of ACS' },
        { term: 'false positive', definition: 'Positive test result when disease is actually absent' },
        { term: 'silent ischemia', definition: 'Myocardial ischemia without symptoms' },
      ],
      clinicalNotes: 'The 2021 ACC/AHA Chest Pain Guideline emphasizes that even low-risk patients have residual cardiac risk and may benefit from risk factor modification. Shared decision-making is important for borderline cases.',
    },
    5: {
      level: 5,
      summary: 'Expert-level chest pain evaluation encompasses precision phenotyping of acute coronary syndromes, recognition of rare but critical presentations, integration of emerging biomarkers and imaging modalities, and sophisticated approaches to shared decision-making in diagnostic uncertainty.',
      explanation: `## Expert-Level Chest Pain Management

### Precision Phenotyping of ACS

**Plaque Morphology:**
- Plaque rupture (~70%): Thin-cap fibroatheroma
- Plaque erosion (~25%): Younger, smokers, women
- Calcified nodule (~5%): Older, heavily calcified
- SCAD (~5%): Non-atherosclerotic, women

**Intravascular Imaging:**
- OCT: High resolution for plaque characterization
- IVUS: Vessel sizing, plaque burden
- Guides treatment strategy (erosion may be conservative)

### MINOCA Evaluation

**Definition:** MI with Non-Obstructive Coronary Arteries
- Occurs in 5-10% of MI presentations
- Mortality similar to obstructive MI

**Systematic Evaluation:**

1. **Epicardial causes:**
   - Coronary spasm (provocative testing)
   - SCAD (correlated with angiographic appearance)
   - Coronary embolism (AF, paradoxical, tumor)
   - Plaque disruption (IVUS/OCT)

2. **Microvascular causes:**
   - Microvascular angina
   - Takotsubo cardiomyopathy
   - Myocardial bridging hemodynamics

3. **Myocardial causes:**
   - Myocarditis (CMR with LGE)
   - Infiltrative disease (sarcoid, amyloid)

**CMR Protocol:**
- T2 mapping: Edema (acute injury)
- LGE pattern: Ischemic (subendocardial/transmural) vs. non-ischemic (epicardial/mid-wall)
- T1 mapping: Diffuse fibrosis

### Rare but Critical Presentations

**Anomalous Coronary Arteries:**
- Malignant course between aorta and pulmonary artery
- Exercise-induced sudden cardiac death
- CT coronary or coronary angiography for diagnosis

**Myocardial Bridging:**
- Systolic compression of epicardial vessel
- "Milking effect" on angiography
- Can cause ischemia, MI, arrhythmia
- Consider surgical unroofing if symptomatic

**Coronary Vasospastic Disorders:**
- Prinzmetal angina
- Provocative testing (acetylcholine/ergonovine)
- High-dose calcium channel blockers

### Emerging Biomarkers

**Beyond Troponin:**

**Copeptin:**
- Vasopressin surrogate
- Combined with troponin for rapid rule-out
- Negative predictive value >99%

**Heart-Type Fatty Acid Binding Protein (H-FABP):**
- Early rise after myocardial injury
- May detect injury before troponin
- Limited specificity

**MicroRNA:**
- Regulators of gene expression
- Cardiac-specific miRNAs emerging
- Future diagnostic potential

### Advanced Imaging

**PET Myocardial Perfusion:**
- Quantitative blood flow measurement
- Detects microvascular disease
- MBFR (myocardial blood flow reserve)

**Cardiac CT FFR:**
- Non-invasive functional assessment
- CT-derived fractional flow reserve
- Guides revascularization decisions

**CMR Stress Testing:**
- Dobutamine stress CMR
- Perfusion imaging
- No radiation, high resolution

### Shared Decision-Making

**For Borderline Cases:**

**Factors to Discuss:**
- Pre-test probability
- Test characteristics
- Radiation exposure
- Contrast risks
- Patient preferences and values

**Documentation:**
- Shared decision-making conversation
- Risks, benefits, alternatives
- Patient understanding and agreement

### Quality Metrics

**Timely Care:**
- Door-to-ECG <10 minutes
- Door-to-troponin <60 minutes
- Door-to-balloon <90 minutes (STEMI)

**Appropriate Testing:**
- Appropriate use criteria adherence
- Avoiding low-value testing
- Resource utilization

**Outcomes:**
- Missed MI rate
- 30-day MACE
- Patient satisfaction

### Future Directions

**AI-Assisted ECG:**
- Detection of subtle ischemia
- Risk stratification
- Triage support

**Precision Medicine:**
- Genomic risk stratification
- Pharmacogenomic-guided therapy
- Personalized secondary prevention

**Point-of-Care Testing:**
- High-sensitivity troponin
- Pre-hospital rule-out
- Emergency department flow improvement`,
      keyTerms: [
        { term: 'MINOCA', definition: 'Myocardial Infarction with Non-Obstructive Coronary Arteries' },
        { term: 'myocardial bridging', definition: 'Congenital anomaly where coronary artery tunnels through myocardium' },
        { term: 'copeptin', definition: 'C-terminal provasopressin fragment; surrogate marker for vasopressin release' },
        { term: 'FFR', definition: 'Fractional Flow Reserve - functional measure of coronary stenosis significance' },
        { term: 'myocardial blood flow reserve', definition: 'Ratio of hyperemic to rest myocardial blood flow (MBFR)' },
      ],
      clinicalNotes: `Expert chest pain evaluation requires:
1. Recognition of atypical and rare presentations
2. Integration of multiple diagnostic modalities
3. Understanding of test limitations
4. Effective shared decision-making
5. Continuous quality improvement

The goal is accurate, timely diagnosis with optimal resource utilization and patient-centered care.`,
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
      url: 'https://www.ahajournals.org/doi/10.1161/CIR.0000000000001029',
      accessedDate: '2026-01-28',
    },
    {
      id: 'esc-nsteacs-2020',
      type: 'article',
      title: '2020 ESC Guidelines for the management of acute coronary syndromes in patients presenting without persistent ST-segment elevation',
      authors: ['Collet JP', 'et al.'],
      source: 'European Heart Journal',
    },
    {
      id: 'heart-score-validation',
      type: 'article',
      title: 'HEART Score for Chest Pain Patients at the Emergency Department',
      source: 'MDCalc',
      url: 'https://www.mdcalc.com/heart-score-major-cardiac-events',
    },
  ],

  crossReferences: [
    { targetId: 'neurological-red-flags', targetType: 'concept', relationship: 'sibling', label: 'Neurological Red Flags' },
    { targetId: 'abdominal-red-flags', targetType: 'concept', relationship: 'sibling', label: 'Abdominal Red Flags' },
    { targetId: 'pediatric-red-flags', targetType: 'concept', relationship: 'sibling', label: 'Pediatric Red Flags' },
    { targetId: 'cardiac-referral-criteria', targetType: 'concept', relationship: 'related', label: 'Cardiac Referral Criteria' },
  ],

  tags: {
    systems: ['cardiovascular', 'pulmonary'],
    topics: ['emergency-medicine', 'cardiology', 'clinical-reasoning'],
    keywords: ['chest pain', 'red flags', 'ACS', 'MI', 'emergency', 'diagnosis'],
    clinicalRelevance: 'critical',
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

export default chestPainRedFlagsContent;
