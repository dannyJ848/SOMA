/**
 * Dyspnea Diagnostic Algorithm
 *
 * A comprehensive approach to evaluating shortness of breath, one of the
 * most common presentations in both ambulatory and emergency settings.
 */

import { DiagnosticAlgorithm } from '../types';

export const DYSPNEA_ALGORITHM: DiagnosticAlgorithm = {
  id: 'algorithm-dyspnea',
  name: 'Dyspnea Diagnostic Algorithm',
  alternateNames: ['Shortness of Breath Evaluation', 'Breathlessness Assessment', 'Respiratory Distress Workup'],
  presentation: 'Dyspnea',
  icdCodes: ['R06.0', 'R06.00', 'R06.02', 'R06.09'],

  levels: {
    1: {
      level: 1,
      summary: 'Shortness of breath means it feels hard to breathe. Doctors need to find out why and if it is dangerous.',
      explanation: `When you feel like you can not get enough air, that is called shortness of breath or dyspnea. It can happen for many reasons, from being out of shape to having a serious problem with your heart or lungs.

**Why Shortness of Breath Happens:**
Your body needs oxygen to work. When something makes it harder to get oxygen, you feel short of breath. This could be because:
- Your lungs are not working well (like in asthma or pneumonia)
- Your heart is not pumping well (like in heart failure)
- You are very stressed or anxious
- You are out of shape

**What Doctors Look For:**
1. **How fast did it start?** Sudden breathing problems can be more dangerous
2. **What makes it worse?** Exercise? Lying down? Being around pets or dust?
3. **Are there other symptoms?** Chest pain? Cough? Swelling in your legs?
4. **What are your other health problems?** Heart disease? Lung disease? Allergies?

**When to Get Help Right Away:**
- You can not catch your breath at all
- Your lips or fingernails turn blue
- Chest pain with shortness of breath
- Breathing problems came on suddenly
- You feel like you might pass out`,
      keyTerms: [
        { term: 'dyspnea', definition: 'The medical word for feeling short of breath', pronunciation: 'DISP-nee-uh' },
        { term: 'oxygen', definition: 'The part of air your body needs to survive' },
        { term: 'lungs', definition: 'The organs in your chest that take in air and get oxygen into your blood' },
      ],
      analogies: [
        'Feeling short of breath is like trying to breathe through a straw - your body is working harder than normal to get air.',
        'Your lungs are like sponges that soak up oxygen from the air. If something is wrong with the sponges, they cannot soak up as much.',
      ],
      examples: [
        'Someone with asthma might feel short of breath when they exercise or are around cats.',
        'An older person with heart failure might get short of breath when they lie flat in bed.',
      ],
    },
    2: {
      level: 2,
      summary: 'Dyspnea evaluation requires distinguishing between cardiac, pulmonary, and other causes while identifying life-threatening conditions that need immediate treatment.',
      explanation: `Shortness of breath can come from problems with the lungs, heart, blood, muscles, or even anxiety. The challenge is figuring out which system is causing the problem.

**Initial Assessment:**
Doctors first check if the patient is getting enough oxygen and if they are stable. They look at:
- Vital signs: oxygen saturation, respiratory rate, heart rate, blood pressure
- Work of breathing: Is the patient using extra muscles? Speaking in full sentences?
- Mental status: Confused patients may have severe oxygen deprivation

**Key Questions:**
- **Onset**: Did it start suddenly or gradually over weeks/months?
- **Duration**: Is it constant or does it come and go?
- **Position**: Worse lying flat (orthopnea)? Better sitting up?
- **Triggers**: Exercise, allergens, stress, eating?
- **Associated symptoms**: Cough, wheeze, chest pain, leg swelling, fever?

**Main Categories:**

1. **Lung Problems (Pulmonary)**:
   - Asthma: Wheezing, triggered by allergens or exercise
   - COPD: Chronic cough, smoking history
   - Pneumonia: Fever, productive cough
   - Pulmonary embolism: Sudden onset, chest pain, recent surgery/travel

2. **Heart Problems (Cardiac)**:
   - Heart failure: Leg swelling, worse lying flat
   - Heart attack: Chest pain, sweating
   - Arrhythmias: Palpitations, irregular heartbeat

3. **Other Causes**:
   - Anemia: Fatigue, pale skin
   - Anxiety: Hyperventilation, tingling in hands/face
   - Deconditioning: Gradual onset, no other symptoms

**Basic Tests:**
- Pulse oximetry: Measures oxygen in blood
- Chest X-ray: Shows lungs and heart size
- ECG: Checks heart rhythm
- Blood tests: Check for infection, anemia, heart damage`,
      keyTerms: [
        { term: 'pulse oximetry', definition: 'A clip on your finger that measures oxygen levels in your blood', pronunciation: 'PULS ok-SIM-eh-tree' },
        { term: 'orthopnea', definition: 'Shortness of breath when lying flat', pronunciation: 'or-THOP-nee-uh' },
        { term: 'COPD', definition: 'Chronic Obstructive Pulmonary Disease - long-term lung damage, usually from smoking' },
        { term: 'pulmonary embolism', definition: 'A blood clot that travels to the lungs and blocks blood flow', pronunciation: 'PUL-moh-nair-ee EM-boh-lizm' },
      ],
      analogies: [
        'Pulse oximetry is like a gas gauge for your blood oxygen - it tells you how full your oxygen tank is.',
      ],
    },
    3: {
      level: 3,
      summary: 'Dyspnea evaluation integrates clinical probability assessment for life-threatening causes, systematic history and examination, and targeted diagnostic testing based on suspected etiology.',
      explanation: `## Systematic Approach to Dyspnea

### Initial Stabilization
- Assess airway, breathing, circulation
- Supplemental oxygen if SpO2 < 94% (or <88-92% in COPD)
- Continuous pulse oximetry and cardiac monitoring
- IV access for unstable patients

### History - Key Elements

**Temporal Profile:**
- Acute (minutes to hours): PE, pneumothorax, asthma exacerbation, flash pulmonary edema
- Subacute (days to weeks): Pneumonia, heart failure exacerbation, pleural effusion
- Chronic (months): COPD, interstitial lung disease, chronic heart failure

**Associated Symptoms:**
- Chest pain: Consider PE, pneumonia, pneumothorax, ACS
- Cough: Productive (infection) vs dry (interstitial disease, heart failure)
- Wheezing: Asthma, COPD, heart failure ("cardiac asthma")
- Hemoptysis: PE, lung cancer, tuberculosis
- Leg swelling: Heart failure, PE (DVT)
- Fever: Pneumonia, other infections

**Functional Assessment:**
- Baseline exercise tolerance
- Number of pillows used for sleeping (orthopnea)
- Paroxysmal nocturnal dyspnea (PND)
- MRC Dyspnea Scale or NYHA Functional Class

### Physical Examination Focus

| Finding | Suggests |
|---------|----------|
| Decreased breath sounds | Pneumothorax, pleural effusion, COPD |
| Crackles/rales | Pulmonary edema, pneumonia, ILD |
| Wheezes | Asthma, COPD, heart failure |
| JVD, peripheral edema | Heart failure |
| Unilateral leg swelling | DVT (consider PE) |
| Barrel chest, pursed lips | COPD |
| Stridor | Upper airway obstruction |

### Differential Diagnosis

**Immediately Life-Threatening:**
1. Pulmonary embolism
2. Tension pneumothorax
3. Acute coronary syndrome
4. Acute heart failure/pulmonary edema
5. Severe asthma/COPD exacerbation
6. Anaphylaxis
7. Upper airway obstruction

**Common Pulmonary:**
- Asthma
- COPD exacerbation
- Pneumonia
- Pleural effusion
- Interstitial lung disease

**Common Cardiac:**
- Heart failure (HFrEF, HFpEF)
- Arrhythmias (AFib with RVR)
- Valvular heart disease

**Other:**
- Anemia
- Metabolic acidosis (diabetic ketoacidosis, uremia)
- Neuromuscular weakness
- Anxiety/hyperventilation

### Diagnostic Workup

**First-line:**
- CBC (anemia)
- BMP (metabolic acidosis, renal failure)
- BNP/NT-proBNP (heart failure)
- Troponin (if cardiac concern)
- D-dimer (if PE suspected, use with clinical probability)
- ABG/VBG (if severe or unclear)
- Chest X-ray
- ECG

**Second-line based on suspicion:**
- CT pulmonary angiography (PE)
- CT chest (ILD, malignancy)
- Echocardiogram (heart failure, valvular disease)
- Spirometry (asthma, COPD)`,
      keyTerms: [
        { term: 'BNP/NT-proBNP', definition: 'Brain Natriuretic Peptide - hormone released by the heart when it is stretched, elevated in heart failure', pronunciation: 'bee-en-PEE' },
        { term: 'paroxysmal nocturnal dyspnea', definition: 'Sudden awakening at night with severe shortness of breath, classic for heart failure', pronunciation: 'par-ok-SIZ-mal nok-TUR-nal DISP-nee-uh' },
        { term: 'interstitial lung disease', definition: 'Group of disorders causing scarring/fibrosis of lung tissue' },
        { term: 'MRC Dyspnea Scale', definition: 'Medical Research Council scale rating dyspnea severity from 1 (with strenuous exercise) to 5 (too breathless to leave house)' },
      ],
      clinicalNotes: 'The acuity of onset is one of the most important historical features. Sudden-onset dyspnea in a previously well patient demands urgent evaluation for PE, pneumothorax, or cardiac causes.',
    },
    4: {
      level: 4,
      summary: 'Dyspnea evaluation requires integration of clinical probability assessment, biomarker interpretation, and multimodal imaging to differentiate cardiac from pulmonary etiologies and identify high-risk patients requiring urgent intervention.',
      explanation: `## Advanced Diagnostic Framework

### Pathophysiology of Dyspnea

**Sensory Components:**
- Chemoreceptor stimulation (hypoxia, hypercapnia, acidosis)
- Mechanoreceptor activation (lung stretch, chest wall)
- Respiratory muscle afferents (increased work of breathing)
- Central processing and perception

**Physiologic Mechanisms:**
- Increased ventilatory demand (hypoxemia, acidosis, hypermetabolism)
- Increased work of breathing (airway obstruction, decreased compliance)
- Decreased ventilatory capacity (neuromuscular weakness)
- Mismatch between demand and capacity (deconditioning)

### Biomarker Interpretation

**BNP/NT-proBNP:**
- BNP <100 pg/mL or NT-proBNP <300 pg/mL: Heart failure unlikely (NPV >95%)
- BNP >400 pg/mL or NT-proBNP >900 pg/mL: Heart failure likely
- Gray zone: Consider age-adjusted cutoffs, renal function, obesity
- NT-proBNP age-adjusted cutoffs: <450 (age <50), <900 (50-75), <1800 (>75)

**Troponin in Dyspnea:**
- May be elevated in PE, severe heart failure, sepsis
- Dynamic rise and fall suggests acute coronary syndrome
- Stable elevation may reflect chronic myocardial stress

**D-dimer:**
- Use age-adjusted cutoff (age x 10 for patients >50)
- High sensitivity, low specificity
- Only useful to rule OUT PE in low-moderate probability patients
- Do not order if pretest probability is high (proceed to imaging)

### Pulmonary Embolism Risk Stratification

**Wells Score for PE:**
- Clinical signs of DVT: +3
- PE most likely diagnosis: +3
- Heart rate >100: +1.5
- Immobilization >3 days or surgery in past 4 weeks: +1.5
- Previous DVT/PE: +1.5
- Hemoptysis: +1
- Active cancer: +1

**Risk Categories:**
- Low (0-1): 1.3% prevalence
- Moderate (2-6): 16.2% prevalence
- High (>6): 37.5% prevalence

**PERC Rule (Pulmonary Embolism Rule-out Criteria):**
All 8 criteria must be absent in low-risk patients to exclude PE without D-dimer:
1. Age <50
2. HR <100
3. SpO2 ≥95% on room air
4. No hemoptysis
5. No recent surgery/trauma
6. No prior DVT/PE
7. No unilateral leg swelling
8. No estrogen use

### Heart Failure Phenotyping

**HFrEF vs HFpEF:**
| Feature | HFrEF | HFpEF |
|---------|-------|-------|
| LVEF | <40% | ≥50% |
| LV size | Dilated | Normal or small |
| Wall thickness | Variable | Often increased |
| Natriuretic peptides | Very elevated | Moderately elevated |
| Response to diuretics | Good | Variable |

**HFpEF Diagnosis (H2FPEF Score):**
- Heavy (BMI >30): +2
- Hypertensive (≥2 antihypertensives): +1
- Atrial Fibrillation: +3
- Pulmonary hypertension (PASP >35): +1
- Elder (age >60): +1
- Filling pressures (E/e' >9): +1

### Advanced Imaging Interpretation

**Chest X-ray in Heart Failure:**
- Cardiomegaly (CTR >0.5)
- Cephalization of pulmonary vessels
- Kerley B lines (interstitial edema)
- Pleural effusions (bilateral, right > left)
- Alveolar edema (bat wing pattern)

**CT Findings:**
- Ground glass opacity: Pulmonary edema, PCP, viral pneumonia
- Consolidation: Bacterial pneumonia, hemorrhage
- Honeycombing: End-stage pulmonary fibrosis
- Mosaic attenuation: Small airways disease, chronic PE
- Filling defects in pulmonary arteries: Acute PE

### Special Populations

**Elderly:**
- Atypical presentations common
- Multiple overlapping pathologies
- Lower threshold for BNP elevation

**Pregnancy:**
- Physiologic dyspnea common
- Must exclude peripartum cardiomyopathy
- PE risk elevated
- Radiation concerns with CT (consider V/Q scan)

**Morbid Obesity:**
- Obesity hypoventilation syndrome
- Restrictive physiology
- Technical challenges with imaging
- BNP may be falsely low`,
      keyTerms: [
        { term: 'PERC rule', definition: 'Pulmonary Embolism Rule-out Criteria - 8 criteria that, if all absent, exclude PE without further testing in low-risk patients' },
        { term: 'HFpEF', definition: 'Heart Failure with Preserved Ejection Fraction - heart failure with LVEF ≥50%', pronunciation: 'hef-PEF' },
        { term: 'E/e\'', definition: 'Ratio of mitral inflow velocity to tissue Doppler annular velocity - echocardiographic estimate of filling pressure', pronunciation: 'ee over ee-prime' },
        { term: 'PASP', definition: 'Pulmonary Artery Systolic Pressure - estimated on echo from tricuspid regurgitation velocity' },
      ],
      clinicalNotes: 'The combination of BNP/NT-proBNP with clinical assessment significantly improves diagnostic accuracy for heart failure in the acute setting. However, remember that natriuretic peptides can be elevated in many conditions including PE, renal failure, and sepsis.',
    },
    5: {
      level: 5,
      summary: 'Expert dyspnea evaluation requires recognition of atypical presentations, integration of advanced physiologic testing, application of current evidence-based algorithms, and consideration of emerging diagnostic modalities to optimize patient outcomes.',
      explanation: `## Expert-Level Diagnostic Considerations

### Diagnostic Dilemmas

**Mixed Cardiopulmonary Disease:**
Many patients have concurrent cardiac and pulmonary disease. Strategies to differentiate:
- Cardiopulmonary exercise testing (CPET): Differentiates cardiac vs pulmonary limitation
- Invasive hemodynamic assessment: Right heart catheterization with exercise
- Response to diuresis: Improvement suggests cardiac contribution

**CPET Parameters:**
- Peak VO2: <80% predicted indicates limitation
- Anaerobic threshold: Early threshold suggests cardiac limitation
- VE/VCO2 slope: >34 suggests pulmonary vascular disease or ventilatory inefficiency
- Oxygen pulse plateau: Indicates cardiac output limitation
- Breathing reserve: <20% at peak suggests ventilatory limitation

**Unexplained Dyspnea:**
For patients with negative initial workup:
1. Full pulmonary function testing with DLCO
2. High-resolution CT chest (ILD screening)
3. Echocardiogram with diastolic assessment
4. Consider CPET
5. Laryngoscopy (paradoxical vocal cord motion)
6. Consider occult PE with V/Q scan
7. Rule out pulmonary hypertension

### Pulmonary Embolism - Advanced Concepts

**Submassive PE Stratification:**
- PESI Score or sPESI for mortality risk
- RV dysfunction on echo or CT (RV/LV ratio >0.9)
- Elevated troponin or BNP
- Consider catheter-directed therapy for intermediate-high risk

**CTEPH Consideration:**
- Unexplained dyspnea with normal parenchyma
- History of VTE (present in only 75%)
- Elevated PA pressures on echo
- Screening: V/Q scan more sensitive than CTPA
- Confirmation: Right heart catheterization + pulmonary angiography

### Heart Failure - Current Concepts

**Acute Heart Failure Phenotypes:**
1. **Wet and warm (most common)**: Congestion without hypoperfusion
2. **Wet and cold**: Congestion with hypoperfusion - highest mortality
3. **Dry and cold**: Low output without congestion
4. **Dry and warm**: Compensated (not typically acute)

**Diuretic Resistance:**
- Definition: Inadequate response to loop diuretics
- Strategies:
  - Increase dose (ceiling dose: furosemide 200-400mg)
  - Convert to IV continuous infusion
  - Add thiazide (metolazone 2.5-5mg)
  - Add MRA
  - Consider ultrafiltration

**Cardiorenal Syndrome:**
- Type 1: Acute HF causing AKI
- Type 2: Chronic HF causing progressive CKD
- Type 3: AKI causing acute cardiac dysfunction
- Type 4: CKD causing chronic cardiac dysfunction
- Type 5: Systemic condition affecting both

### Respiratory Failure - ARDS Considerations

**Berlin Definition:**
- Timing: Within 1 week of known insult
- Imaging: Bilateral opacities not fully explained by effusions, collapse, or nodules
- Origin: Not fully explained by cardiac failure or fluid overload
- Oxygenation:
  - Mild: 200 < PaO2/FiO2 ≤ 300 (PEEP ≥5)
  - Moderate: 100 < PaO2/FiO2 ≤ 200 (PEEP ≥5)
  - Severe: PaO2/FiO2 ≤ 100 (PEEP ≥5)

**Management Principles:**
- Low tidal volume ventilation (6 mL/kg IBW)
- Plateau pressure <30 cm H2O
- Permissive hypercapnia acceptable
- Prone positioning for moderate-severe ARDS
- Conservative fluid strategy
- Consider ECMO for refractory hypoxemia

### Emerging Concepts

**Point-of-Care Ultrasound:**
- Lung ultrasound: B-lines (pulmonary edema), consolidation, effusion, pneumothorax
- Cardiac ultrasound: LVEF, RV function, pericardial effusion
- DVT assessment: Compress common femoral and popliteal veins
- Combined protocols (BLUE, RUSH) improve diagnostic accuracy

**Biomarker Combinations:**
- BNP + troponin + D-dimer for risk stratification
- Procalcitonin to guide antibiotic therapy in suspected pneumonia
- Mid-regional pro-adrenomedullin (MR-proADM) for prognosis in dyspnea

**Novel Therapeutics Affecting Diagnosis:**
- SGLT2 inhibitors: Reduce HF hospitalization regardless of EF
- Tafamidis: For ATTR cardiac amyloidosis (consider in HFpEF)
- Riociguat/Selexipag: For pulmonary hypertension`,
      keyTerms: [
        { term: 'CPET', definition: 'Cardiopulmonary Exercise Testing - comprehensive assessment distinguishing cardiac from pulmonary limitation of exercise' },
        { term: 'CTEPH', definition: 'Chronic Thromboembolic Pulmonary Hypertension - pulmonary hypertension due to organized thrombus', pronunciation: 'see-tef' },
        { term: 'ARDS', definition: 'Acute Respiratory Distress Syndrome - acute inflammatory lung injury with hypoxemia and bilateral infiltrates' },
        { term: 'ECMO', definition: 'Extracorporeal Membrane Oxygenation - mechanical support for severe respiratory or cardiac failure' },
        { term: 'B-lines', definition: 'Hyperechoic vertical artifacts on lung ultrasound indicating interstitial syndrome (edema, fibrosis)' },
      ],
      clinicalNotes: `Key clinical pearls:
1. Cardiogenic and non-cardiogenic pulmonary edema can coexist - treating only one may be insufficient
2. BNP can be falsely low in flash pulmonary edema (not enough time to synthesize) and obesity
3. Normal resting echo does not exclude HFpEF - exercise testing or invasive hemodynamics may be needed
4. V/Q scan remains the preferred screening test for CTEPH as CTPA may miss chronic organized thrombus
5. Point-of-care ultrasound can dramatically accelerate diagnosis in undifferentiated dyspnea`,
    },
  },

  steps: [
    {
      id: 'initial-assessment',
      type: 'action',
      content: {
        1: 'First, check if the person is getting enough oxygen and if they are breathing too fast.',
        2: 'Perform initial assessment: check oxygen saturation, respiratory rate, heart rate, and signs of distress.',
        3: 'Assess ABCs. Obtain vital signs including SpO2. Evaluate work of breathing and ability to speak in full sentences.',
        4: 'Rapid respiratory assessment: SpO2, RR, accessory muscle use, speaking in sentences vs words vs unable. Determine if immediate intervention needed.',
        5: 'Systematic evaluation: Respiratory rate/pattern, accessory muscle use, SpO2 on room air, response to supplemental O2, signs of impending respiratory failure (altered mental status, exhaustion, paradoxical breathing).',
      },
      nextSteps: [
        { condition: 'Severe respiratory distress or SpO2 <88%', targetStepId: 'critical-pathway' },
        { condition: 'Stable with mild-moderate distress', targetStepId: 'history-assessment' },
      ],
    },
    {
      id: 'critical-pathway',
      type: 'warning',
      content: {
        1: 'EMERGENCY: This person cannot breathe well enough. They need oxygen and immediate help!',
        2: 'CRITICAL: Severe respiratory distress. Apply high-flow oxygen, prepare for possible intubation, call for emergency help.',
        3: 'Critical dyspnea requires simultaneous evaluation and treatment. High-flow oxygen, IV access, cardiac monitoring. Consider BiPAP for pulmonary edema or COPD exacerbation.',
        4: 'Immediate stabilization: High-flow O2 or NIV if appropriate. Bedside assessment for pneumothorax (absent breath sounds), pulmonary edema (crackles, JVD), anaphylaxis (stridor, urticaria). Prepare for intubation if declining.',
        5: 'Critical pathway activation: Point-of-care ultrasound for rapid differentiation (pneumothorax, pulmonary edema, PE, effusion). NIV for acute cardiogenic pulmonary edema or COPD (contraindicated if altered mental status). Early intubation if trajectory suggests imminent failure.',
      },
      isRedFlag: true,
      requiresUrgentAction: true,
      nextSteps: [
        { condition: 'Tension pneumothorax suspected', targetStepId: 'pneumothorax-management' },
        { condition: 'Pulmonary edema', targetStepId: 'pulmonary-edema-pathway' },
        { condition: 'Anaphylaxis', targetStepId: 'anaphylaxis-pathway' },
        { condition: 'Stabilizing', targetStepId: 'history-assessment' },
      ],
    },
    {
      id: 'history-assessment',
      type: 'question',
      content: {
        1: 'Tell me about your breathing problem. When did it start? What makes it better or worse?',
        2: 'Obtain detailed history: onset (sudden vs gradual), triggers, position effects, associated symptoms like chest pain, cough, or leg swelling.',
        3: 'Structured history: Temporal profile, positional symptoms (orthopnea, PND), triggers, associated symptoms. Assess risk factors for PE (immobilization, malignancy, OCP use) and cardiac disease.',
        4: 'Comprehensive history: Quantify functional decline, assess for both cardiac and pulmonary risk factors. Calculate Wells score for PE if relevant. Review medications including recent changes.',
        5: 'Expert history taking: Distinguish symptom mimics (deconditioning, obesity, anxiety). Assess for atypical HF presentations. Screen for occupational/environmental exposures. Consider medication-induced causes (beta-blockers, amiodarone).',
      },
      nextSteps: [
        { condition: 'Acute onset with PE risk factors', targetStepId: 'pe-evaluation' },
        { condition: 'Orthopnea, PND, edema suggesting heart failure', targetStepId: 'heart-failure-evaluation' },
        { condition: 'Fever, productive cough suggesting infection', targetStepId: 'infection-evaluation' },
        { condition: 'Wheezing, allergen exposure suggesting asthma/COPD', targetStepId: 'obstructive-evaluation' },
      ],
    },
    {
      id: 'pe-evaluation',
      type: 'decision',
      content: {
        1: 'We need to check if a blood clot traveled to your lungs. This is serious but treatable.',
        2: 'Evaluating for pulmonary embolism: Blood test (D-dimer) and possibly CT scan to look for blood clots in the lungs.',
        3: 'PE workup: Calculate Wells score. Low probability + negative age-adjusted D-dimer rules out PE. Intermediate-high probability or positive D-dimer requires CTPA.',
        4: 'Apply PERC rule in low-risk patients to avoid unnecessary D-dimer. Age-adjusted D-dimer (age x 10 ng/mL for age >50). YEARS algorithm as alternative: if no PE signs, no hemoptysis, and PE not most likely, D-dimer <1000 rules out.',
        5: 'Risk-stratified approach: PERC-negative low-risk patients need no testing. Consider V/Q scan for contrast allergy, renal dysfunction, or pregnancy. If PE confirmed, assess hemodynamic significance (echo, troponin, BNP) for risk stratification and therapy decisions.',
      },
      nextSteps: [
        { condition: 'PE confirmed', targetStepId: 'pe-management' },
        { condition: 'PE ruled out', targetStepId: 'alternative-diagnosis' },
      ],
    },
    {
      id: 'heart-failure-evaluation',
      type: 'decision',
      content: {
        1: 'We need to check if your heart is pumping well. Blood tests and a chest X-ray will help.',
        2: 'Evaluating for heart failure: BNP blood test, chest X-ray, and ECG. An echocardiogram (ultrasound of the heart) may be needed.',
        3: 'Heart failure workup: BNP/NT-proBNP for screening (NPV >95% if low). CXR for pulmonary edema, cardiomegaly. ECG for ischemia, arrhythmia. Echocardiogram to assess EF and filling.',
        4: 'Differentiate HFrEF vs HFpEF. Assess volume status clinically. BNP may be falsely low in obesity, flash pulmonary edema. Consider precipitants: ACS, arrhythmia, dietary indiscretion, medication non-adherence.',
        5: 'Comprehensive HF assessment: Invasive hemodynamics if diagnosis unclear. Consider cardiac MRI for infiltrative disease, myocarditis. Screen for reversible causes (ischemia, valvular disease, tachycardia-mediated). Evaluate for cardiorenal syndrome.',
      },
      nextSteps: [
        { condition: 'Acute decompensated heart failure', targetStepId: 'heart-failure-management' },
        { condition: 'HF ruled out', targetStepId: 'alternative-diagnosis' },
      ],
    },
    {
      id: 'infection-evaluation',
      type: 'decision',
      content: {
        1: 'You might have an infection in your lungs. We need a chest X-ray and blood tests.',
        2: 'Evaluating for lung infection: Chest X-ray to look for pneumonia, blood tests including white blood cell count, and possibly procalcitonin.',
        3: 'Pneumonia workup: CXR for infiltrate, CBC, BMP. Consider procalcitonin to guide antibiotic therapy. Risk stratify with CURB-65 or PSI for disposition.',
        4: 'Identify organism if possible: Sputum culture, blood cultures, Legionella/pneumococcal urinary antigens. Consider atypical pathogens and fungal infection based on history. Assess for parapneumonic effusion.',
        5: 'Consider healthcare-associated pathogens, immunocompromised hosts, geographic exposures. CT chest if CXR inconclusive or concern for complication. Bronchoscopy for non-resolving pneumonia or immunocompromised patient.',
      },
      nextSteps: [
        { condition: 'Pneumonia confirmed', targetStepId: 'pneumonia-management' },
        { condition: 'No infection identified', targetStepId: 'alternative-diagnosis' },
      ],
    },
    {
      id: 'obstructive-evaluation',
      type: 'decision',
      content: {
        1: 'Your breathing tubes might be narrow, like in asthma. We can try medicine to open them up.',
        2: 'Evaluating for asthma or COPD: Listen for wheezing, try bronchodilator treatment, and possibly do breathing tests (spirometry).',
        3: 'Obstructive disease evaluation: Assess severity (speaking in sentences?). Trial of bronchodilators. Peak flow measurement. Spirometry if stable enough.',
        4: 'Differentiate asthma from COPD from asthma-COPD overlap. Assess for exacerbation triggers (infection, non-adherence, environmental). Consider eosinophil count for therapy guidance.',
        5: 'Advanced phenotyping: Type 2 inflammation markers (eosinophils, FeNO, IgE) guide biologic therapy. Consider VCD/ILO if paradoxical. HRCT for bronchiectasis or emphysema quantification. Alpha-1 antitrypsin testing in unexplained COPD.',
      },
      nextSteps: [
        { condition: 'Asthma/COPD exacerbation', targetStepId: 'obstructive-management' },
        { condition: 'Poor response, consider alternative', targetStepId: 'alternative-diagnosis' },
      ],
    },
    {
      id: 'alternative-diagnosis',
      type: 'action',
      content: {
        1: 'We need to check for other reasons you might be short of breath.',
        2: 'Consider other causes: anemia (blood test), anxiety (hyperventilation), deconditioning, or less common lung diseases.',
        3: 'Expanded differential: Check hemoglobin for anemia. Consider metabolic acidosis (ABG/VBG). Evaluate for interstitial lung disease, neuromuscular weakness, or anxiety/hyperventilation.',
        4: 'Systematic approach to undifferentiated dyspnea: PFTs with DLCO, HRCT if ILD suspected, echocardiogram with diastolic assessment, CPET if diagnosis remains unclear.',
        5: 'Consider occult causes: CTEPH (V/Q scan more sensitive than CTPA), cardiac amyloidosis (HFpEF with low voltage ECG), pulmonary vasculitis, diaphragm paralysis (sniff test), upper airway obstruction (flow-volume loop).',
      },
      nextSteps: [
        { condition: 'Diagnosis established', targetStepId: 'specific-management' },
        { condition: 'Diagnosis unclear', targetStepId: 'advanced-workup' },
      ],
    },
    {
      id: 'pe-management',
      type: 'endpoint',
      content: {
        1: 'You have a blood clot in your lungs. You need blood-thinning medicine to prevent more clots.',
        2: 'Pulmonary embolism confirmed. Treatment with blood thinners (anticoagulation) to prevent clot growth and new clots. Admission usually required.',
        3: 'PE management: Risk stratify with PESI/sPESI. Low-risk may be candidates for outpatient treatment. Start anticoagulation (DOAC preferred, LMWH + warfarin alternative). Assess for thrombolysis if massive.',
        4: 'Submassive PE: Assess RV function (echo, CT) and biomarkers (troponin, BNP). Consider catheter-directed therapy or systemic thrombolysis for intermediate-high risk with deterioration. IVC filter only if anticoagulation contraindicated.',
        5: 'Contemporary PE management: DOACs non-inferior to warfarin for most patients. Catheter-directed therapy expanding for intermediate-high risk. Consider extended anticoagulation assessment (provoked vs unprovoked, risk-benefit). Screen for CTEPH at 3-6 months if persistent symptoms.',
      },
    },
    {
      id: 'heart-failure-management',
      type: 'endpoint',
      content: {
        1: 'Your heart is having trouble pumping. We will give you medicine to remove extra fluid and help your heart.',
        2: 'Heart failure treatment: Diuretics to remove excess fluid, oxygen if needed, and medications to help your heart pump better. You will likely need to be admitted.',
        3: 'ADHF management: IV diuretics (furosemide 40-80mg or 2.5x home dose), oxygen to maintain SpO2 >94%, vasodilators if hypertensive. Monitor urine output and creatinine.',
        4: 'Optimize diuresis: Continuous infusion if bolus inadequate. Add thiazide for diuretic resistance. Avoid over-diuresis causing cardiorenal syndrome. Maintain GDMT if possible. Treat precipitants.',
        5: 'Advanced HF management: Consider inotropes (dobutamine, milrinone) for low-output states. Mechanical circulatory support for cardiogenic shock. Evaluate for advanced therapies (LVAD, transplant) in refractory cases. Initiate SGLT2i in hospital.',
      },
    },
    {
      id: 'pneumonia-management',
      type: 'endpoint',
      content: {
        1: 'You have an infection in your lungs. You need antibiotics and rest to get better.',
        2: 'Pneumonia treatment: Antibiotics based on the likely type of bacteria, oxygen if needed, fluids and rest. Some patients need hospital admission.',
        3: 'CAP management: Empiric antibiotics per guidelines (respiratory fluoroquinolone or beta-lactam + macrolide). Disposition based on CURB-65 or PSI. De-escalate based on cultures.',
        4: 'Risk-stratified antibiotic selection: Consider Pseudomonas coverage if structural lung disease or recent hospitalization. Early mobilization and nutrition. Transition to oral therapy when improving.',
        5: 'Severe pneumonia: ICU criteria include mechanical ventilation, vasopressors, or multiple organ failure. Consider steroids for severe CAP. Procalcitonin-guided duration. Monitor for complications (empyema, ARDS).',
      },
    },
    {
      id: 'obstructive-management',
      type: 'endpoint',
      content: {
        1: 'Your breathing tubes are narrow. Medicine through a nebulizer will help open them up.',
        2: 'Asthma/COPD treatment: Bronchodilators (albuterol) to open airways, steroids to reduce inflammation, oxygen if needed.',
        3: 'Exacerbation management: Nebulized SABA +/- ipratropium. Systemic corticosteroids (prednisone 40-60mg or equivalent). Antibiotics for COPD if increased sputum purulence.',
        4: 'Severity-guided therapy: Assess for respiratory failure requiring NIV or intubation. Magnesium sulfate for severe asthma. Ensure controller medication adherence. Smoking cessation counseling.',
        5: 'Refractory exacerbation: Consider heliox for severe obstruction. Ketamine for refractory bronchospasm. Avoid over-sedation prior to intubation. Post-discharge follow-up within 1-2 weeks critical for preventing readmission.',
      },
    },
    {
      id: 'advanced-workup',
      type: 'endpoint',
      content: {
        1: 'We need more tests to figure out why you are short of breath. This may take some time.',
        2: 'Additional testing needed: May include specialized breathing tests, heart ultrasound, or CT scan. Referral to a lung or heart specialist may be helpful.',
        3: 'Advanced evaluation: PFTs with DLCO, HRCT chest, echocardiogram with diastolic assessment. Consider CPET for unexplained exertional dyspnea. Specialist referral as needed.',
        4: 'Systematic approach: If initial workup unrevealing, consider V/Q scan for CTEPH, cardiac MRI for infiltrative disease, laryngoscopy for VCD. CPET can differentiate cardiac vs pulmonary vs deconditioning.',
        5: 'Comprehensive evaluation pathway: Right heart catheterization with exercise for HFpEF or pulmonary vascular disease. High-resolution manometry for diaphragm dysfunction. Consider rare causes: hereditary hemorrhagic telangiectasia, pulmonary veno-occlusive disease, foreign body aspiration.',
      },
    },
  ],

  startStepId: 'initial-assessment',

  differentials: [
    {
      diagnosis: 'Pulmonary Embolism',
      prevalence: 'common',
      urgency: 'emergent',
      keyFeatures: ['Sudden onset', 'Pleuritic chest pain', 'Tachycardia', 'DVT risk factors', 'Hemoptysis'],
    },
    {
      diagnosis: 'Acute Heart Failure',
      prevalence: 'common',
      urgency: 'emergent',
      keyFeatures: ['Orthopnea', 'PND', 'Lower extremity edema', 'JVD', 'S3 gallop', 'Prior cardiac history'],
    },
    {
      diagnosis: 'Pneumonia',
      prevalence: 'common',
      urgency: 'urgent',
      keyFeatures: ['Fever', 'Productive cough', 'Pleuritic pain', 'Focal crackles', 'Elevated WBC'],
    },
    {
      diagnosis: 'Asthma Exacerbation',
      prevalence: 'common',
      urgency: 'urgent',
      keyFeatures: ['Wheezing', 'Triggers identified', 'Prior asthma history', 'Response to bronchodilators'],
    },
    {
      diagnosis: 'COPD Exacerbation',
      prevalence: 'common',
      urgency: 'urgent',
      keyFeatures: ['Smoking history', 'Chronic dyspnea at baseline', 'Increased sputum', 'Wheezing'],
    },
    {
      diagnosis: 'Pneumothorax',
      prevalence: 'uncommon',
      urgency: 'emergent',
      keyFeatures: ['Sudden onset', 'Pleuritic pain', 'Decreased breath sounds', 'Hyperresonance', 'Tall thin body habitus'],
    },
    {
      diagnosis: 'Anemia',
      prevalence: 'common',
      urgency: 'routine',
      keyFeatures: ['Gradual onset', 'Fatigue', 'Pallor', 'Exertional dyspnea', 'Tachycardia at rest'],
    },
    {
      diagnosis: 'Anxiety/Hyperventilation',
      prevalence: 'common',
      urgency: 'routine',
      keyFeatures: ['Perioral tingling', 'Carpopedal spasm', 'Anxious affect', 'Normal SpO2', 'Prior episodes'],
    },
    {
      diagnosis: 'Interstitial Lung Disease',
      prevalence: 'uncommon',
      urgency: 'routine',
      keyFeatures: ['Chronic progressive dyspnea', 'Dry cough', 'Velcro crackles', 'Clubbing', 'Occupational exposure'],
    },
    {
      diagnosis: 'Pulmonary Hypertension',
      prevalence: 'uncommon',
      urgency: 'urgent',
      keyFeatures: ['Exertional dyspnea', 'Syncope', 'RV heave', 'Loud P2', 'Right heart failure signs'],
    },
  ],

  redFlags: [
    {
      finding: 'SpO2 <88% on room air',
      implication: 'Severe hypoxemia requiring immediate oxygen supplementation',
      action: 'Apply high-flow oxygen immediately, prepare for possible intubation',
    },
    {
      finding: 'Severe respiratory distress with accessory muscle use',
      implication: 'Impending respiratory failure',
      action: 'Emergency evaluation, consider NIV or intubation',
    },
    {
      finding: 'Sudden onset dyspnea with chest pain',
      implication: 'May indicate PE, pneumothorax, or ACS',
      action: 'Call 911/emergency services immediately',
    },
    {
      finding: 'Unilateral absent breath sounds',
      implication: 'Pneumothorax (possibly tension)',
      action: 'Emergency evaluation, needle decompression if tension',
    },
    {
      finding: 'Stridor or drooling',
      implication: 'Upper airway obstruction',
      action: 'Immediate airway management, prepare for difficult airway',
    },
    {
      finding: 'Hypotension with dyspnea',
      implication: 'Massive PE, tension pneumothorax, or cardiogenic shock',
      action: 'Emergency evaluation and resuscitation',
    },
    {
      finding: 'Altered mental status with dyspnea',
      implication: 'Severe hypoxemia or hypercapnia',
      action: 'Emergency airway management',
    },
    {
      finding: 'Dyspnea with recent immobilization or surgery',
      implication: 'High risk for pulmonary embolism',
      action: 'Urgent PE evaluation',
    },
  ],

  media: [
    {
      id: 'dyspnea-algorithm-flowchart',
      type: 'diagram',
      filename: 'dyspnea-algorithm.svg',
      title: 'Dyspnea Evaluation Algorithm',
      description: 'Flowchart showing systematic approach to dyspnea evaluation',
    },
    {
      id: 'cxr-findings-dyspnea',
      type: 'diagram',
      filename: 'cxr-dyspnea-findings.svg',
      title: 'Chest X-ray Findings in Dyspnea',
      description: 'Common CXR patterns in different causes of dyspnea',
    },
  ],

  citations: [
    {
      id: 'esc-pe-2019',
      type: 'article',
      title: '2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism',
      authors: ['Konstantinides SV', 'et al.'],
      source: 'European Heart Journal',
      url: 'https://academic.oup.com/eurheartj/article/41/4/543/5556136',
    },
    {
      id: 'acc-aha-hf-2022',
      type: 'article',
      title: '2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure',
      authors: ['Heidenreich PA', 'et al.'],
      source: 'Circulation',
    },
    {
      id: 'gold-copd-2023',
      type: 'article',
      title: 'Global Strategy for the Diagnosis, Management, and Prevention of COPD (GOLD) 2023',
      source: 'Global Initiative for Chronic Obstructive Lung Disease',
      url: 'https://goldcopd.org/',
    },
  ],

  crossReferences: [
    { targetId: 'algorithm-chest-pain', targetType: 'pathway', relationship: 'related', label: 'Chest Pain Algorithm' },
    { targetId: 'red-flags-pulmonary', targetType: 'topic', relationship: 'related', label: 'Pulmonary Red Flags' },
    { targetId: 'red-flags-cardiovascular', targetType: 'topic', relationship: 'related', label: 'Cardiovascular Red Flags' },
    { targetId: 'exam-respiratory', targetType: 'topic', relationship: 'related', label: 'Respiratory Examination' },
  ],

  tags: {
    systems: ['respiratory', 'cardiovascular'],
    topics: ['diagnostic-algorithm', 'emergency-medicine', 'pulmonology', 'cardiology'],
    keywords: ['dyspnea', 'shortness of breath', 'pulmonary embolism', 'heart failure', 'pneumonia', 'asthma', 'COPD'],
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

export const dyspneaDiagnosticAlgorithm = DYSPNEA_ALGORITHM;
export default DYSPNEA_ALGORITHM;
