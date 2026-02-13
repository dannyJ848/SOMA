/**
 * Chest Pain Diagnostic Algorithm
 *
 * A comprehensive approach to evaluating chest pain, one of the most
 * common and potentially serious presentations in medicine.
 */

import { DiagnosticAlgorithm } from '../types';

export const CHEST_PAIN_ALGORITHM: DiagnosticAlgorithm = {
  id: 'algorithm-chest-pain',
  name: 'Chest Pain Diagnostic Algorithm',
  alternateNames: ['Chest Discomfort Evaluation', 'Thoracic Pain Assessment'],
  presentation: 'Chest Pain',
  icdCodes: ['R07.9', 'R07.89', 'R07.1', 'R07.2'],

  levels: {
    1: {
      level: 1,
      summary: 'Chest pain can have many causes - some need immediate attention while others are not dangerous.',
      explanation: `When someone has chest pain, doctors need to figure out quickly if it's something serious like a heart attack, or something less dangerous like muscle strain.

**Why Chest Pain Matters:**
Your chest holds important organs - your heart, lungs, and the tube that carries food to your stomach. Pain in this area could come from any of these, or from the muscles, ribs, or skin.

**What Doctors Look For:**
1. **Is it your heart?** Heart attacks cause a squeezing or pressure feeling, often with sweating and trouble breathing
2. **Is it your lungs?** Lung problems usually hurt more when you breathe in deeply
3. **Is it your muscles or ribs?** This type of pain hurts when you press on it or move certain ways
4. **Is it heartburn?** Stomach acid can cause burning pain in your chest

**When to Get Help Right Away:**
- Crushing or squeezing chest pain
- Pain spreading to your arm, jaw, or back
- Trouble breathing
- Feeling like something is very wrong
- Cold sweats with chest pain`,
      keyTerms: [
        { term: 'heart attack', definition: 'When blood stops flowing to part of the heart, causing damage' },
        { term: 'heartburn', definition: 'Burning feeling caused by stomach acid going up into your food tube' },
        { term: 'symptoms', definition: 'Signs that something might be wrong with your body' },
      ],
      analogies: [
        'Chest pain is like a car warning light - it tells you something needs attention, but you need to figure out if it\'s the engine (serious) or just a loose gas cap (not urgent).',
      ],
      examples: [
        'A person having a heart attack might feel like an elephant is sitting on their chest.',
        'Muscle pain in the chest might happen after lifting something heavy and hurts when you press on it.',
      ],
    },
    2: {
      level: 2,
      summary: 'Chest pain evaluation focuses on quickly identifying life-threatening causes while systematically considering other possibilities based on pain characteristics and associated symptoms.',
      explanation: `Chest pain is one of the most common reasons people visit emergency rooms. The challenge is that serious conditions like heart attacks can look similar to harmless conditions like muscle strain.

**The Initial Assessment:**
Healthcare providers first determine if the patient is stable - checking vital signs (blood pressure, heart rate, oxygen levels) and looking for signs of distress.

**Key Questions Asked:**
- **Location**: Where exactly is the pain? Does it spread anywhere?
- **Quality**: What does it feel like - sharp, dull, pressure, burning?
- **Timing**: When did it start? Is it constant or does it come and go?
- **Triggers**: What makes it better or worse? Exercise? Breathing? Eating?
- **Associated symptoms**: Shortness of breath? Sweating? Nausea?

**Main Categories of Chest Pain:**

1. **Cardiac (Heart) Causes**:
   - Heart attack (myocardial infarction): Blocked artery to the heart
   - Angina: Temporary reduced blood flow to the heart
   - Pericarditis: Inflammation of the sac around the heart

2. **Pulmonary (Lung) Causes**:
   - Pulmonary embolism: Blood clot in the lung
   - Pneumonia: Lung infection
   - Pneumothorax: Collapsed lung

3. **Gastrointestinal Causes**:
   - GERD (acid reflux): Stomach acid irritating the esophagus
   - Esophageal spasm: Muscle cramps in the food tube

4. **Musculoskeletal Causes**:
   - Costochondritis: Inflammation where ribs meet the breastbone
   - Muscle strain: From injury or overuse

**Tests That May Be Done:**
- ECG/EKG: Records heart's electrical activity
- Blood tests: Check for heart damage markers (troponin)
- Chest X-ray: Shows heart size and lung condition
- CT scan: Detailed images to look for blood clots or other problems`,
      keyTerms: [
        { term: 'vital signs', definition: 'Measurements of basic body functions - temperature, blood pressure, heart rate, breathing rate, oxygen level', pronunciation: 'VY-tal signs' },
        { term: 'myocardial infarction', definition: 'Medical term for heart attack - death of heart muscle due to blocked blood supply', pronunciation: 'my-oh-KAR-dee-al in-FARK-shun' },
        { term: 'ECG/EKG', definition: 'Electrocardiogram - a test that records the electrical activity of the heart' },
        { term: 'troponin', definition: 'A protein released into blood when heart muscle is damaged', pronunciation: 'TROH-poh-nin' },
      ],
      analogies: [
        'The troponin blood test is like a smoke detector for your heart - it goes off when there\'s damage happening.',
      ],
    },
    3: {
      level: 3,
      summary: 'Chest pain evaluation employs risk stratification using validated clinical decision tools, targeted history and physical examination, and diagnostic testing to differentiate acute coronary syndrome from other cardiac, pulmonary, gastrointestinal, and musculoskeletal etiologies.',
      explanation: `## Systematic Approach to Chest Pain

### Initial Stabilization (ABCs)
- Assess airway, breathing, circulation
- Obtain IV access, continuous cardiac monitoring
- Administer supplemental oxygen if hypoxic (SpO2 < 94%)
- Obtain 12-lead ECG within 10 minutes of presentation

### History - Key Elements

**Pain Characteristics (OPQRST):**
- Onset: Sudden vs. gradual
- Provocation/Palliation: Exertional? Relief with rest/nitroglycerin?
- Quality: Pressure, squeezing, sharp, tearing, burning
- Radiation: Jaw, arm (especially left), back, shoulder
- Severity: 0-10 scale, worst pain ever?
- Timing: Duration, intermittent vs. constant

**Associated Symptoms:**
- Diaphoresis (sweating)
- Nausea/vomiting
- Dyspnea
- Palpitations
- Syncope or near-syncope
- Anxiety/"sense of doom"

**Risk Factor Assessment:**
- CAD history or equivalents (DM, PAD, prior stroke)
- Family history of premature CAD
- Hypertension, hyperlipidemia, smoking
- Cocaine/stimulant use
- Hypercoagulable states (for PE consideration)

### Physical Examination Focus

| Finding | Suggests |
|---------|----------|
| Hypotension, JVD, muffled heart sounds | Cardiac tamponade |
| Unequal blood pressures, new murmur | Aortic dissection |
| Reproducible chest wall tenderness | Musculoskeletal |
| Unilateral decreased breath sounds | Pneumothorax |
| Friction rub | Pericarditis or pleuritis |

### Differential Diagnosis by Category

**Immediately Life-Threatening (Rule out first):**
1. Acute Coronary Syndrome (ACS)
2. Aortic Dissection
3. Pulmonary Embolism
4. Tension Pneumothorax
5. Esophageal Rupture (Boerhaave syndrome)
6. Cardiac Tamponade

**Cardiac (Non-ACS):**
- Stable angina
- Pericarditis
- Myocarditis
- Aortic stenosis

**Pulmonary:**
- Pneumonia
- Pleuritis
- Simple pneumothorax

**Gastrointestinal:**
- GERD/Esophagitis
- Esophageal spasm
- Peptic ulcer disease
- Biliary colic

**Musculoskeletal:**
- Costochondritis
- Rib fracture
- Muscle strain
- Herpes zoster (shingles)

### Risk Stratification Tools

**HEART Score (for ACS):**
- History (0-2)
- ECG (0-2)
- Age (0-2)
- Risk factors (0-2)
- Troponin (0-2)
- Score 0-3: Low risk (0.9-1.7% MACE)
- Score 4-6: Intermediate (12-16.6% MACE)
- Score 7-10: High risk (50-65% MACE)

**Wells Score (for PE):**
- Clinical signs of DVT (+3)
- PE most likely diagnosis (+3)
- Heart rate >100 (+1.5)
- Immobilization/surgery (+1.5)
- Prior DVT/PE (+1.5)
- Hemoptysis (+1)
- Malignancy (+1)`,
      keyTerms: [
        { term: 'acute coronary syndrome', definition: 'Spectrum of conditions from unstable angina to STEMI, caused by acute myocardial ischemia', pronunciation: 'a-KYOOT KOR-oh-nair-ee SIN-drohm' },
        { term: 'HEART score', definition: 'Validated risk stratification tool for chest pain using History, ECG, Age, Risk factors, Troponin' },
        { term: 'MACE', definition: 'Major Adverse Cardiac Events - typically death, MI, or revascularization' },
        { term: 'diaphoresis', definition: 'Profuse sweating, often associated with acute cardiac events', pronunciation: 'dy-ah-for-EE-sis' },
        { term: 'Boerhaave syndrome', definition: 'Spontaneous esophageal rupture, typically from forceful vomiting', pronunciation: 'BOOR-hah-vuh' },
      ],
      clinicalNotes: 'Women, elderly, and diabetic patients may present with atypical symptoms (fatigue, dyspnea, nausea) rather than classic chest pain. Maintain high index of suspicion in these populations.',
    },
    4: {
      level: 4,
      summary: 'Evidence-based chest pain evaluation integrates pre-test probability assessment, sequential diagnostic testing with high-sensitivity troponin protocols, and risk-benefit analysis of downstream testing to optimize diagnostic accuracy while minimizing unnecessary interventions.',
      explanation: `## Advanced Diagnostic Framework

### Bayesian Approach to Chest Pain

Pre-test probability significantly influences test interpretation:

**Estimating Pre-test Probability for CAD:**
- Duke Clinical Score incorporates age, sex, chest pain characteristics
- Typical angina (substernal, exertional, relieved by rest/NTG) in 60-year-old male: ~90% probability
- Atypical chest pain in 30-year-old female: ~5% probability

### High-Sensitivity Troponin Protocols

**Contemporary hs-cTn Strategies:**

1. **0/1-hour Protocol (ESC):**
   - Rule-out: hs-cTnT <5 ng/L at 0h OR <12 ng/L with delta <3 ng/L
   - Rule-in: hs-cTnT ≥52 ng/L OR delta ≥5 ng/L
   - Observe: All others require 3-hour testing

2. **0/2-hour Protocol:**
   - Similar principles with 2-hour delta assessment
   - May be preferred for less validated assays

3. **Single Low Troponin:**
   - hs-cTnT <5 ng/L with low clinical probability
   - NPV >99% for 30-day MACE
   - Requires symptom onset >3 hours prior

**Troponin Elevation Differential:**
- Type 1 MI: Plaque rupture/erosion
- Type 2 MI: Supply-demand mismatch
- Non-ischemic: Myocarditis, PE, sepsis, renal failure, HF exacerbation

### ECG Interpretation Nuances

**STEMI Equivalents:**
- De Winter T-waves (upsloping ST depression V1-V6 + peaked T-waves = LAD occlusion)
- Wellens syndrome (biphasic or deeply inverted T-waves V2-V3 = critical LAD stenosis)
- Posterior MI (ST depression V1-V4, tall R-waves = posterior STEMI)
- Sgarbossa criteria (for STEMI in LBBB)

**High-Risk ECG Patterns:**
- New LBBB (controversial; use modified Sgarbossa)
- ST depression >1mm in ≥8 leads + ST elevation aVR = Left main/severe 3-vessel disease

### Advanced Imaging Selection

**CT Coronary Angiography (CCTA):**
- Indications: Low-intermediate probability, able to achieve HR <65
- Contraindications: Known CAD, renal dysfunction, contrast allergy
- Advantages: High NPV (99%), anatomic information, plaque characterization
- Limitations: Blooming artifact with calcium, radiation exposure

**Functional Testing:**
- Exercise ECG: Low-risk, can exercise, interpretable baseline ECG
- Stress Echo: Can't exercise, need regional wall motion assessment
- Nuclear MPI: Need viability assessment, prior imaging for comparison
- Stress MRI: Best for microvascular disease, no radiation

### Risk Stratification Integration

**Combining Clinical + Biomarker + Imaging:**

| Clinical Risk | Troponin | ECG | Recommendation |
|---------------|----------|-----|----------------|
| High | Positive | Ischemic changes | Invasive strategy |
| Intermediate | Positive | Non-diagnostic | CCU, serial testing |
| Intermediate | Negative | Non-diagnostic | Observation, functional testing |
| Low | Negative | Normal | Consider discharge with CCTA or stress |

### Aortic Dissection Considerations

**ADD-RS (Aortic Dissection Detection Risk Score):**

High-risk conditions (1 point each):
- Marfan syndrome, family history
- Aortic valve disease, known thoracic aortic aneurysm
- Prior aortic manipulation

High-risk pain features (1 point each):
- Abrupt onset
- Severe intensity
- Ripping/tearing quality

High-risk exam findings (1 point each):
- Pulse deficit or BP differential >20mmHg
- Focal neurological deficit
- New aortic insufficiency murmur

ADD-RS 0: D-dimer may rule out
ADD-RS ≥1: CTA aorta recommended`,
      keyTerms: [
        { term: 'high-sensitivity troponin', definition: 'Assay detecting troponin at much lower concentrations (ng/L vs mcg/L), enabling earlier MI detection' },
        { term: 'De Winter T-waves', definition: 'ECG pattern of upsloping ST depression with hyperacute T-waves indicating acute LAD occlusion without ST elevation' },
        { term: 'Wellens syndrome', definition: 'T-wave pattern (biphasic or deep symmetric inversion V2-V3) indicating critical proximal LAD stenosis in pain-free period' },
        { term: 'ADD-RS', definition: 'Aortic Dissection Detection Risk Score - clinical decision aid for suspected dissection' },
        { term: 'NPV', definition: 'Negative Predictive Value - probability that a negative test result correctly identifies absence of disease' },
      ],
      clinicalNotes: 'The 2021 ACC/AHA Chest Pain Guideline emphasizes shared decision-making and incorporation of patient preferences when multiple testing strategies are reasonable. For patients at very low risk (HEART score 0-3 and negative hs-cTn), outpatient evaluation is often appropriate.',
    },
    5: {
      level: 5,
      summary: 'Contemporary chest pain management requires integration of rapid diagnostic protocols, precision phenotyping of acute coronary syndromes, recognition of STEMI equivalents and high-risk presentations, and application of current guideline-directed therapies with awareness of emerging evidence and special populations.',
      explanation: `## Expert-Level Diagnostic Considerations

### Precision Phenotyping of ACS

**Type 1 MI Subtypes:**
- Plaque rupture (~70%): Thin-cap fibroatheroma, lipid-rich core, macrophage infiltration
- Plaque erosion (~25%): Younger patients, women, smokers, lesser stenosis
- Calcified nodule (~5%): Older patients, heavily calcified vessels
- Spontaneous coronary dissection: Young women, peripartum, fibromuscular dysplasia

**Implications:**
- Erosion may benefit from conservative management vs. intervention
- SCAD management differs fundamentally (conservative first)
- Intravascular imaging (IVUS/OCT) defines mechanism

### MINOCA (MI with Non-Obstructive Coronary Arteries)

Occurs in 5-10% of MI presentations. Systematic evaluation:

1. **Epicardial causes:**
   - Coronary spasm (provocative testing)
   - Spontaneous coronary dissection
   - Coronary embolism (paradoxical, atrial fibrillation)
   - Plaque disruption (IVUS/OCT)

2. **Microvascular causes:**
   - Coronary microvascular dysfunction
   - Takotsubo cardiomyopathy

3. **Non-coronary causes (mimics):**
   - Myocarditis (CMR with LGE)
   - Pulmonary embolism
   - Type 2 MI (demand ischemia)

**CMR Protocol for MINOCA:**
- T1/T2 mapping for edema and fibrosis
- Late gadolinium enhancement pattern
- Ischemic pattern (subendocardial/transmural) vs. non-ischemic (epicardial/patchy)

### High-Risk ECG Patterns - Deep Dive

**Recognizing the "Widow-Maker" (Proximal LAD):**
- Tombstone ST elevation V1-V4
- De Winter pattern
- Proximal LAD often shows reciprocal changes in inferior leads
- May see complete heart block (septal involvement)

**Recognizing Right Ventricular MI:**
- ST elevation V1, V3R-V4R (right-sided leads critical)
- Associated with inferior STEMI (RCA)
- Hypotension with clear lungs (preload dependent)
- Avoid nitroglycerin and aggressive diuresis

**Posterior MI Recognition:**
- Isolated ST depression V1-V3 (really ST elevation viewed from front)
- Tall R waves V1-V2 (reciprocal Q waves)
- Obtain V7-V9 (posterior leads): ST elevation confirms
- Often RCA or LCx territory

### Challenging Populations

**Women with Chest Pain:**
- More likely atypical presentation (dyspnea, fatigue, nausea)
- Higher prevalence of microvascular disease
- SCAD consideration, especially peripartum
- False-positive stress tests more common
- Consider CCTA for anatomic evaluation

**Elderly (>75 years):**
- Presentation may be altered mental status, weakness, syncope
- Higher baseline troponin (age-adjusted cutoffs debated)
- Benefit from invasive strategy maintained but higher bleeding risk
- Creatinine clearance affects antithrombotic dosing

**Chronic Kidney Disease:**
- Baseline troponin elevation common
- Delta troponin (>20% change) more useful
- CCTA limited by contrast concerns
- Non-contrast stress testing preferred

**Cocaine-Associated Chest Pain:**
- Beta-blockers controversial (unopposed alpha stimulation)
- Benzodiazepines and nitroglycerin first-line
- Phenolamine for refractory hypertension
- Low threshold for ACS given hypercoagulable state

### Integrating Recent Guideline Updates (2021 ACC/AHA)

**Class I Recommendations:**
- First hs-cTn at presentation with serial testing if initially negative
- CCTA reasonable for low-intermediate risk without known CAD
- Functional stress testing for known CAD or non-diagnostic CCTA

**New Emphasis:**
- Shared decision-making for borderline cases
- Avoiding routine admission for low-risk chest pain
- Recognition of exercise capacity as prognostic marker
- Integration of CAD-RADS reporting for CCTA standardization

### Emerging Concepts

**Point-of-Care Troponin:**
- Enables early rule-out in pre-hospital and ambulatory settings
- FDA-approved hs-cTn POC devices now available
- May transform chest pain evaluation pathways

**Computational ECG Analysis:**
- AI-enhanced ECG interpretation shows promise
- Detection of subtle STEMI equivalents
- Risk prediction beyond human interpretation

**Coronary Physiology in ACS:**
- FFR/iFR in stable lesions during ACS catheterization
- Angiography-derived FFR (QFR) emerging
- Index of microcirculatory resistance (IMR) for microvascular assessment`,
      keyTerms: [
        { term: 'MINOCA', definition: 'Myocardial Infarction with Non-Obstructive Coronary Arteries - MI without ≥50% stenosis on angiography' },
        { term: 'SCAD', definition: 'Spontaneous Coronary Artery Dissection - non-atherosclerotic cause of ACS, common in young women' },
        { term: 'CAD-RADS', definition: 'Coronary Artery Disease Reporting and Data System - standardized reporting for CCTA findings' },
        { term: 'Late gadolinium enhancement', definition: 'CMR technique identifying myocardial scar/fibrosis; pattern distinguishes ischemic from non-ischemic injury' },
        { term: 'Index of microcirculatory resistance', definition: 'Invasive measurement of coronary microvascular function using thermodilution' },
      ],
      clinicalNotes: `Key clinical pearls:
1. Never attribute chest pain to GERD without excluding cardiac causes, especially in patients with risk factors
2. A normal ECG does not rule out ACS - up to 6% of patients with normal ECG have acute MI
3. Posterior MI is frequently missed - maintain high suspicion with isolated anterior ST depression
4. SCAD should be considered in all young women with ACS, particularly peripartum
5. Cocaine-associated chest pain may occur days after use due to vasospasm`,
    },
  },

  steps: [
    {
      id: 'initial-assessment',
      type: 'action',
      content: {
        1: 'First, check if the person is awake, breathing, and their heart is beating properly.',
        2: 'Perform initial assessment: check vital signs, level of consciousness, and signs of distress.',
        3: 'Assess ABCs (Airway, Breathing, Circulation). Obtain vital signs including BP in both arms.',
        4: 'Rapid hemodynamic assessment: Evaluate for shock, respiratory failure, or altered mental status requiring immediate intervention.',
        5: 'Systematic primary survey: Airway patency, work of breathing, perfusion status. Bilateral BPs (dissection), pulsus paradoxus (tamponade), JVP assessment.',
      },
      nextSteps: [
        { condition: 'Patient is unstable (low BP, severe distress)', targetStepId: 'unstable-pathway' },
        { condition: 'Patient is stable', targetStepId: 'ecg-assessment' },
      ],
    },
    {
      id: 'unstable-pathway',
      type: 'warning',
      content: {
        1: 'EMERGENCY: This person needs immediate help! Call for emergency services right away.',
        2: 'CRITICAL: Patient is unstable. Activate emergency response team and prepare for immediate intervention.',
        3: 'Unstable patient requires immediate stabilization: IV access, oxygen, continuous monitoring, and preparation for emergent intervention.',
        4: 'Activate STEMI/critical care protocol. Bedside echo to assess for tamponade, RV strain, wall motion abnormality. Consider vasopressors if hypotensive.',
        5: 'Immediate priorities: Large-bore IV access, arterial line if needed, bedside echocardiography for tamponade/RV failure/severe LV dysfunction. Activate cath lab vs CT vs OR based on most likely etiology.',
      },
      isRedFlag: true,
      requiresUrgentAction: true,
      nextSteps: [
        { condition: 'STEMI identified', targetStepId: 'stemi-pathway' },
        { condition: 'Suspected dissection/PE/tamponade', targetStepId: 'other-emergency' },
      ],
    },
    {
      id: 'ecg-assessment',
      type: 'action',
      content: {
        1: 'Get a heart tracing test (ECG) to see how the heart is working.',
        2: 'Obtain a 12-lead ECG within 10 minutes to check for signs of heart attack or other heart problems.',
        3: 'Perform 12-lead ECG. Look for ST elevation, ST depression, T-wave inversions, new bundle branch block, or arrhythmias.',
        4: 'ECG interpretation: STEMI criteria, STEMI equivalents (de Winter, Wellens, posterior MI), high-risk patterns (widespread ST depression, aVR elevation).',
        5: 'Comprehensive ECG analysis: Apply modified Sgarbossa if LBBB/paced, obtain posterior (V7-V9) and right-sided (V3R-V4R) leads if indicated, compare to prior ECGs, recognize subtle STEMI equivalents.',
      },
      nextSteps: [
        { condition: 'STEMI present', targetStepId: 'stemi-pathway' },
        { condition: 'High-risk ECG changes', targetStepId: 'high-risk-acs' },
        { condition: 'Non-diagnostic ECG', targetStepId: 'history-assessment' },
      ],
    },
    {
      id: 'stemi-pathway',
      type: 'endpoint',
      content: {
        1: 'HEART ATTACK: The heart is not getting enough blood. Emergency treatment is needed right now to open the blocked blood vessel.',
        2: 'ST-elevation heart attack (STEMI) identified. Patient needs emergency treatment to restore blood flow to the heart, usually through a procedure called cardiac catheterization.',
        3: 'STEMI confirmed. Activate cardiac catheterization lab for primary PCI. Target door-to-balloon time <90 minutes. Administer dual antiplatelet therapy and anticoagulation per protocol.',
        4: 'STEMI activation: Load with aspirin 325mg, P2Y12 inhibitor (ticagrelor 180mg or clopidogrel 600mg), anticoagulation (heparin or bivalirudin). Consider GP IIb/IIIa inhibitor. Primary PCI is reperfusion strategy of choice.',
        5: 'STEMI management: Antiplatelet loading (aspirin + P2Y12 inhibitor based on bleeding risk), anticoagulation choice (UFH vs bivalirudin), radial access preferred, aspiration thrombectomy not routine, complete revascularization consideration, cardiogenic shock pathway if indicated.',
      },
      isRedFlag: true,
      requiresUrgentAction: true,
      clinicalPearl: 'First medical contact to device time <90 min is the goal. If transfer needed and will exceed 120 min, consider fibrinolysis.',
    },
    {
      id: 'high-risk-acs',
      type: 'decision',
      content: {
        1: 'The heart test shows warning signs. The person needs close monitoring and more tests.',
        2: 'ECG shows concerning changes suggesting possible heart attack. Patient needs admission to a monitored unit and further evaluation.',
        3: 'High-risk ECG findings (ST depression, dynamic T-wave changes, new LBBB). Admit to cardiac care unit, serial troponins, consider early invasive strategy.',
        4: 'NSTE-ACS likely: Risk stratify with GRACE or TIMI score. High-risk features warrant early invasive strategy (within 24-48 hours). Initiate DAPT and anticoagulation.',
        5: 'Risk stratification guides management: GRACE score >140 or TIMI ≥5 suggests early invasive strategy benefit. Very high-risk features (refractory angina, hemodynamic instability, sustained VT) warrant urgent (<2 hours) angiography.',
      },
      nextSteps: [
        { condition: 'Very high risk', targetStepId: 'urgent-cath' },
        { condition: 'High risk', targetStepId: 'early-invasive' },
        { condition: 'Intermediate risk', targetStepId: 'troponin-assessment' },
      ],
    },
    {
      id: 'history-assessment',
      type: 'question',
      content: {
        1: 'Now we need to learn more about the chest pain. Where does it hurt? What does it feel like? When did it start?',
        2: 'Take a detailed history of the chest pain: location, quality (sharp, dull, pressure), radiation, duration, what makes it better or worse, and any other symptoms.',
        3: 'Obtain structured history using OPQRST framework. Assess cardiovascular risk factors, prior cardiac history, and features suggesting non-cardiac etiology.',
        4: 'Comprehensive history: Anginal equivalent symptoms (dyspnea, diaphoresis, nausea), ACS risk factors, features of alternative diagnoses (pleuritic, positional, reproducible, postprandial). Calculate HEART score.',
        5: 'History integration: Typicality of angina (3/3 = typical, 2/3 = atypical, 0-1/3 = non-cardiac), incorporation into pre-test probability estimation, attention to atypical presentations in women/elderly/diabetics.',
      },
      nextSteps: [
        { condition: 'Typical angina with risk factors', targetStepId: 'troponin-assessment' },
        { condition: 'Atypical features', targetStepId: 'alternative-diagnosis' },
        { condition: 'Clear non-cardiac features', targetStepId: 'non-cardiac-evaluation' },
      ],
    },
    {
      id: 'troponin-assessment',
      type: 'action',
      content: {
        1: 'A blood test checks for signs of heart damage.',
        2: 'Blood test called troponin measures if there is any damage to the heart muscle. It may need to be repeated after a few hours.',
        3: 'Obtain high-sensitivity troponin at presentation. If negative and symptoms <6 hours, repeat at 3-6 hours. Interpret in clinical context.',
        4: 'Apply rapid rule-out protocol: hs-cTn at 0 and 1-3 hours. Very low troponin (<5 ng/L) with low clinical suspicion enables early discharge consideration. Elevated or rising troponin indicates myocardial injury.',
        5: 'hs-cTn interpretation: 0/1-hour rule-out if validated for assay used, delta criteria for serial testing, recognize non-ACS causes of troponin elevation (type 2 MI, myocarditis, PE, renal disease). Troponin magnitude has prognostic value.',
      },
      nextSteps: [
        { condition: 'Troponin positive or rising', targetStepId: 'positive-troponin' },
        { condition: 'Troponin negative, low risk', targetStepId: 'low-risk-pathway' },
        { condition: 'Troponin negative, intermediate risk', targetStepId: 'further-testing' },
      ],
    },
    {
      id: 'positive-troponin',
      type: 'decision',
      content: {
        1: 'The blood test shows some heart damage. Doctors will figure out what caused it and how to treat it.',
        2: 'Troponin is elevated, indicating heart muscle injury. This could be from a heart attack or other conditions. Further testing and monitoring are needed.',
        3: 'Elevated troponin confirms myocardial injury. Differentiate Type 1 MI (ACS) from Type 2 MI (supply-demand mismatch) or non-ischemic causes based on clinical context.',
        4: 'Troponin-positive workup: Rise-and-fall pattern suggests acute injury. Clinical context determines Type 1 vs Type 2 MI vs non-ischemic etiology. Echo for wall motion abnormalities.',
        5: 'Precision diagnosis: Dynamic troponin change favors acute process. Consider MINOCA workup if angiography non-obstructive. CMR can differentiate myocarditis from MI. OCT/IVUS can identify plaque morphology.',
      },
      nextSteps: [
        { condition: 'Type 1 MI (ACS)', targetStepId: 'acs-management' },
        { condition: 'Type 2 MI', targetStepId: 'treat-underlying' },
        { condition: 'Non-ischemic injury', targetStepId: 'non-ischemic-workup' },
      ],
    },
    {
      id: 'alternative-diagnosis',
      type: 'decision',
      content: {
        1: 'The chest pain might not be from the heart. Let\'s check for other causes like lung or muscle problems.',
        2: 'Features suggest possible non-cardiac cause. Consider pulmonary embolism, aortic dissection, pneumothorax, or musculoskeletal pain based on presentation.',
        3: 'Evaluate for alternative diagnoses: PE (Wells score, D-dimer, CTPA), dissection (ADD-RS, D-dimer, CTA), pneumothorax (CXR, exam), GI (response to antacids, endoscopy), MSK (reproducibility, localization).',
        4: 'Systematic alternative diagnosis evaluation: Risk-stratify for PE (Wells, YEARS algorithm) and dissection (ADD-RS). Targeted imaging based on probability. Don\'t anchor on first diagnosis.',
        5: 'Comprehensive evaluation: PE and dissection can coexist with ACS (dissection flap involving coronary ostium). Multi-detector CT can evaluate aorta, pulmonary arteries, and coronaries ("triple rule-out"). Consider cost-effectiveness and radiation exposure.',
      },
      nextSteps: [
        { condition: 'PE suspected', targetStepId: 'pe-evaluation' },
        { condition: 'Dissection suspected', targetStepId: 'dissection-evaluation' },
        { condition: 'GI/MSK likely', targetStepId: 'non-cardiac-evaluation' },
      ],
    },
    {
      id: 'low-risk-pathway',
      type: 'endpoint',
      content: {
        1: 'Good news! Tests show your heart is likely okay. Your doctor will discuss what might be causing your chest pain and next steps.',
        2: 'Testing suggests low risk for heart attack. You may be able to go home with follow-up arranged. Your doctor will discuss the most likely cause and when to return if symptoms change.',
        3: 'Low HEART score (0-3) with negative serial troponins indicates low risk for 30-day MACE (<2%). Consider discharge with primary care follow-up vs. outpatient stress testing or CCTA.',
        4: 'Evidence supports discharge of low-risk patients (HEART ≤3, negative hs-cTn, non-ischemic ECG) without routine stress testing. Shared decision-making regarding optional outpatient anatomic (CCTA) or functional testing.',
        5: 'Risk-benefit of further testing in low-risk patients: CCTA may identify subclinical CAD enabling preventive interventions but also leads to downstream testing. Exercise capacity on treadmill has independent prognostic value. Individualize based on patient factors and preferences.',
      },
      clinicalPearl: 'Low-risk patients benefit from reinforcing symptoms that should prompt return (recurrent or worsening chest pain, new dyspnea, syncope).',
    },
    {
      id: 'further-testing',
      type: 'action',
      content: {
        1: 'More tests are needed to make sure your heart is okay. This might include a stress test or special heart scan.',
        2: 'Additional testing is recommended to evaluate your heart further. Options include stress testing (exercise or with medication) or CT scan of the heart arteries.',
        3: 'Intermediate-risk patients benefit from further risk stratification: CCTA for anatomic evaluation in those without known CAD, or functional stress testing. Choice depends on patient factors and local expertise.',
        4: 'Testing strategy selection: CCTA preferred if no known CAD, able to achieve HR control, eGFR adequate. Functional testing if known CAD, interpretation of anatomy limited, or viability assessment needed. Exercise preferred over pharmacologic when possible.',
        5: 'Optimal test selection: Consider pre-test probability (Duke clinical score), patient characteristics (ability to exercise, baseline ECG), and what information is needed. CCTA provides excellent rule-out and identifies non-obstructive CAD. Functional testing assesses ischemia burden and exercise capacity.',
      },
      nextSteps: [
        { condition: 'Positive test', targetStepId: 'cardiology-referral' },
        { condition: 'Negative test', targetStepId: 'reassurance-discharge' },
        { condition: 'Indeterminate', targetStepId: 'additional-workup' },
      ],
    },
    {
      id: 'non-cardiac-evaluation',
      type: 'action',
      content: {
        1: 'Your chest pain is probably not from your heart. Doctors will check for other causes like stomach acid, muscle strain, or anxiety.',
        2: 'Evaluation for non-cardiac causes: GI (trial of antacids, possible endoscopy), musculoskeletal (physical therapy, anti-inflammatory medications), anxiety (reassurance, possible referral).',
        3: 'Non-cardiac chest pain workup: GERD trial with PPI, consider H. pylori testing. MSK: NSAIDs, PT referral. Persistent unexplained symptoms may warrant GI or psych consultation.',
        4: 'Non-cardiac chest pain is a diagnosis of exclusion. Esophageal causes (GERD, spasm, hypersensitivity) are common. Functional testing can assess esophageal motility. CBT effective for anxiety-related chest pain.',
        5: 'Chronic non-cardiac chest pain management: High-resolution esophageal manometry for motility disorders, ambulatory pH monitoring for GERD evaluation, consideration of esophageal hypersensitivity and central sensitization. Tricyclic antidepressants may help neuropathic pain.',
      },
    },
    {
      id: 'other-emergency',
      type: 'warning',
      content: {
        1: 'EMERGENCY: This could be a very serious problem. The person needs special scans and possibly surgery.',
        2: 'CRITICAL: Possible life-threatening condition (aortic dissection, pulmonary embolism, or cardiac tamponade). Immediate imaging and specialist consultation needed.',
        3: 'Critical non-ACS emergency: Dissection requires emergent CTA and surgical consultation. Massive PE requires anticoagulation and consideration of thrombolysis/embolectomy. Tamponade requires emergent pericardiocentesis.',
        4: 'Emergency pathway activation: Type A dissection → CT surgery emergently. Massive PE → systemic thrombolysis or catheter-directed therapy. Tamponade → pericardiocentesis, address underlying cause.',
        5: 'Unstable non-ACS chest pain: Hemodynamically significant PE may require ECMO if thrombolysis contraindicated. Type A dissection mortality increases hourly without repair. Bedside echo can rapidly differentiate these entities.',
      },
      isRedFlag: true,
      requiresUrgentAction: true,
    },
    {
      id: 'acs-management',
      type: 'endpoint',
      content: {
        1: 'Heart attack treatment focuses on restoring blood flow to the heart and preventing more damage.',
        2: 'Acute coronary syndrome management includes blood thinners to prevent clots, medications to protect the heart, and often a procedure to open blocked arteries.',
        3: 'ACS management: Dual antiplatelet therapy (aspirin + P2Y12 inhibitor), anticoagulation, anti-ischemic therapy (beta-blocker, nitrates), statin, and revascularization strategy based on risk.',
        4: 'NSTE-ACS management per guidelines: DAPT choice based on bleeding/ischemic risk balance, timing of invasive strategy by risk (immediate/early/delayed/conservative), in-hospital initiation of GDMT.',
        5: 'Contemporary ACS management: Ticagrelor or prasugrel preferred over clopidogrel in most; consider de-escalation strategies. Routine pretreatment with P2Y12 inhibitor before angiography debated. Complete revascularization supported by recent trials. GDMT optimization before discharge.',
      },
    },
    {
      id: 'reassurance-discharge',
      type: 'endpoint',
      content: {
        1: 'Your tests are normal. This is good news! Follow up with your regular doctor and return if symptoms get worse.',
        2: 'Testing is reassuring, suggesting your heart is functioning well. Follow up with your primary care doctor. Return immediately if you have severe or worsening symptoms.',
        3: 'Negative evaluation is reassuring (30-day MACE <1%). Discharge with clear return precautions and primary care follow-up. Address modifiable risk factors.',
        4: 'Negative workup enables confident discharge. Document shared decision-making. Emphasize importance of risk factor modification and symptom recognition. Arrange appropriate follow-up.',
        5: 'Negative evaluation context: Even with negative hs-cTn and stress/CCTA, some residual risk exists. Subclinical atherosclerosis on CCTA warrants aggressive prevention. Patient education on warning symptoms is crucial.',
      },
    },
    {
      id: 'cardiology-referral',
      type: 'endpoint',
      content: {
        1: 'Tests show your heart needs more attention. You\'ll see a heart specialist for the best treatment plan.',
        2: 'Testing indicates heart disease requiring specialist care. Referral to a cardiologist for further evaluation and treatment planning.',
        3: 'Positive testing warrants cardiology referral. Significant CAD may require revascularization (PCI or CABG). Medical optimization with GDMT indicated.',
        4: 'Cardiology referral indications: Obstructive CAD on CCTA, inducible ischemia on stress testing, need for revascularization decision (PCI vs CABG for complex disease), optimization of medical therapy.',
        5: 'Multidisciplinary evaluation: Complex CAD benefits from Heart Team discussion. FFR/iFR guides PCI vs medical therapy decisions. CABG preferred for left main disease, complex 3-vessel disease, especially with diabetes.',
      },
    },
  ],

  startStepId: 'initial-assessment',

  differentials: [
    {
      diagnosis: 'Acute Coronary Syndrome (ACS)',
      prevalence: 'common',
      urgency: 'emergent',
      keyFeatures: ['Substernal pressure/squeezing', 'Radiation to arm/jaw', 'Diaphoresis', 'Associated dyspnea', 'Risk factors for CAD'],
    },
    {
      diagnosis: 'Aortic Dissection',
      prevalence: 'uncommon',
      urgency: 'emergent',
      keyFeatures: ['Sudden, tearing chest/back pain', 'Maximal at onset', 'Blood pressure differential', 'Pulse deficit', 'Hypertension history'],
    },
    {
      diagnosis: 'Pulmonary Embolism',
      prevalence: 'common',
      urgency: 'emergent',
      keyFeatures: ['Pleuritic chest pain', 'Dyspnea (often sudden)', 'Tachycardia', 'Recent immobilization/surgery', 'DVT risk factors'],
    },
    {
      diagnosis: 'Tension Pneumothorax',
      prevalence: 'rare',
      urgency: 'emergent',
      keyFeatures: ['Sudden pleuritic pain', 'Severe dyspnea', 'Absent breath sounds', 'Tracheal deviation', 'Hypotension'],
    },
    {
      diagnosis: 'Pericarditis',
      prevalence: 'common',
      urgency: 'urgent',
      keyFeatures: ['Sharp, pleuritic pain', 'Worse lying flat, better sitting forward', 'Friction rub', 'Diffuse ST elevation', 'Recent viral illness'],
    },
    {
      diagnosis: 'GERD/Esophageal Spasm',
      prevalence: 'common',
      urgency: 'routine',
      keyFeatures: ['Burning quality', 'Postprandial', 'Relief with antacids', 'Associated with regurgitation', 'No exertional component'],
    },
    {
      diagnosis: 'Musculoskeletal Pain',
      prevalence: 'common',
      urgency: 'routine',
      keyFeatures: ['Reproducible with palpation', 'Worse with movement/position', 'Sharp/localized', 'History of strain/injury', 'No systemic symptoms'],
    },
    {
      diagnosis: 'Costochondritis',
      prevalence: 'common',
      urgency: 'routine',
      keyFeatures: ['Reproducible tenderness at costochondral junction', 'Sharp pain', 'Worse with movement/breathing', 'No systemic symptoms'],
    },
  ],

  redFlags: [
    {
      finding: 'Crushing or pressure-like chest pain',
      implication: 'May indicate acute myocardial infarction',
      action: 'Call 911/emergency services immediately',
    },
    {
      finding: 'Pain radiating to arm, jaw, neck, or back',
      implication: 'Classic pattern for cardiac ischemia or aortic dissection',
      action: 'Seek immediate emergency evaluation',
    },
    {
      finding: 'Severe sudden "tearing" or "ripping" pain',
      implication: 'Concerning for aortic dissection',
      action: 'Call 911 immediately - do not drive yourself',
    },
    {
      finding: 'Chest pain with severe shortness of breath',
      implication: 'May indicate PE, heart attack, or other serious cause',
      action: 'Emergency evaluation needed',
    },
    {
      finding: 'Chest pain with syncope or near-syncope',
      implication: 'Suggests significant cardiac or vascular compromise',
      action: 'Emergency evaluation required',
    },
    {
      finding: 'Chest pain with profuse sweating (diaphoresis)',
      implication: 'Associated with myocardial infarction',
      action: 'Call 911 immediately',
    },
    {
      finding: 'Chest pain after recent immobilization or surgery',
      implication: 'High risk for pulmonary embolism',
      action: 'Urgent evaluation needed',
    },
    {
      finding: 'Chest pain with unequal blood pressures or pulses',
      implication: 'Strongly suggests aortic dissection',
      action: 'Call 911 - surgical emergency',
    },
  ],

  media: [
    {
      id: 'chest-pain-algorithm-flowchart',
      type: 'diagram',
      filename: 'chest-pain-algorithm.svg',
      title: 'Chest Pain Evaluation Algorithm',
      description: 'Flowchart showing systematic approach to chest pain evaluation',
    },
    {
      id: 'ecg-stemi-examples',
      type: 'diagram',
      filename: 'stemi-ecg-patterns.svg',
      title: 'STEMI ECG Patterns',
      description: 'Examples of ST elevation patterns in different territories',
    },
  ],

  citations: [
    {
      id: 'acc-aha-chest-pain-2021',
      type: 'article',
      title: '2021 ACC/AHA Guideline for the Evaluation and Diagnosis of Chest Pain',
      authors: ['Gulati M', 'et al.'],
      source: 'Circulation',
      url: 'https://www.ahajournals.org/doi/10.1161/CIR.0000000000001029',
      accessedDate: '2026-01-24',
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
      title: 'HEART Score for Chest Pain Patients',
      source: 'MDCalc / Original validation studies',
      url: 'https://www.mdcalc.com/heart-score-major-cardiac-events',
    },
  ],

  crossReferences: [
    { targetId: 'algorithm-dyspnea', targetType: 'pathway', relationship: 'related', label: 'Dyspnea Algorithm' },
    { targetId: 'red-flags-cardiovascular', targetType: 'topic', relationship: 'related', label: 'Cardiovascular Red Flags' },
    { targetId: 'history-opqrst', targetType: 'topic', relationship: 'related', label: 'OPQRST Framework' },
    { targetId: 'exam-cardiovascular', targetType: 'topic', relationship: 'related', label: 'Cardiovascular Examination' },
  ],

  tags: {
    systems: ['cardiovascular', 'pulmonary', 'gastrointestinal'],
    topics: ['diagnostic-algorithm', 'emergency-medicine', 'cardiology'],
    keywords: ['chest pain', 'ACS', 'STEMI', 'NSTEMI', 'myocardial infarction', 'heart attack', 'angina'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'emergency-medicine', 'surgery'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default CHEST_PAIN_ALGORITHM;
