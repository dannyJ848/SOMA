/**
 * Clinical Decision Algorithm Database
 *
 * 25+ evidence-based clinical decision algorithms covering emergency,
 * chronic disease management, screening, diagnostic, and management pathways.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface AlgorithmStep {
  step: number;
  action: string;
  criteria?: string;
  nextIfYes?: string;
  nextIfNo?: string;
}

export interface AlgorithmEntry {
  id: string;
  name: string;
  nameEs: string;
  category: 'emergency' | 'chronic-disease' | 'screening' | 'diagnostic' | 'management';
  presentation: string;
  steps: AlgorithmStep[];
  redFlags: string[];
  firstLineTherapy: string;
  secondLineTherapy: string;
  referralCriteria: string[];
  guidelineSource: string;
  patientVersion: string;
}

// ---------------------------------------------------------------------------
// Compact helper
// ---------------------------------------------------------------------------

const alg = (
  id: string,
  name: string,
  nameEs: string,
  category: AlgorithmEntry['category'],
  presentation: string,
  steps: AlgorithmStep[],
  redFlags: string[],
  firstLineTherapy: string,
  secondLineTherapy: string,
  referralCriteria: string[],
  guidelineSource: string,
  patientVersion: string,
): AlgorithmEntry => ({
  id, name, nameEs, category, presentation, steps, redFlags,
  firstLineTherapy, secondLineTherapy, referralCriteria, guidelineSource, patientVersion,
});

// ---------------------------------------------------------------------------
// ALGORITHM_ENTRIES — 25 clinical decision algorithms
// ---------------------------------------------------------------------------

export const ALGORITHM_ENTRIES: Record<string, AlgorithmEntry> = {
  // ========================================================================
  // EMERGENCY (5)
  // ========================================================================
  'chest-pain-eval': alg(
    'chest-pain-eval', 'Chest Pain Evaluation', 'Evaluación del dolor torácico', 'emergency',
    'Acute chest pain in the emergency department',
    [
      { step: 1, action: 'Obtain 12-lead ECG within 10 minutes of arrival', criteria: 'ST-elevation present?', nextIfYes: 'Activate cath lab (STEMI protocol)', nextIfNo: 'Proceed to step 2' },
      { step: 2, action: 'Draw initial troponin, CBC, BMP, coagulation studies', criteria: 'Troponin elevated?', nextIfYes: 'NSTEMI pathway — cardiology consult', nextIfNo: 'Proceed to step 3' },
      { step: 3, action: 'Calculate HEART score (History, ECG, Age, Risk factors, Troponin)', criteria: 'HEART score >= 4?', nextIfYes: 'Admit for serial troponins and observation', nextIfNo: 'Proceed to step 4' },
      { step: 4, action: 'Consider non-cardiac causes: PE (Wells), aortic dissection, pneumothorax', criteria: 'Alternative diagnosis found?', nextIfYes: 'Treat specific condition', nextIfNo: 'Proceed to step 5' },
      { step: 5, action: 'Repeat troponin at 3–6 hours', criteria: 'Delta troponin significant?', nextIfYes: 'Admit — ACS pathway', nextIfNo: 'Consider discharge with outpatient follow-up' },
    ],
    ['ST-elevation on ECG', 'Hemodynamic instability', 'Tearing chest pain radiating to back', 'Unequal blood pressures between arms', 'New heart murmur'],
    'Aspirin 325 mg chewed + nitroglycerin SL (if no contraindication) + heparin for ACS',
    'Morphine for refractory pain; PCI or thrombolysis per STEMI/NSTEMI protocol',
    ['STEMI — immediate interventional cardiology', 'Aortic dissection — cardiovascular surgery', 'Massive PE — pulmonology/IR'],
    'AHA/ACC 2021 Chest Pain Guidelines',
    'If you have sudden chest pain, call 911 immediately. Doctors will do a heart tracing (ECG) and blood tests to check if your heart is being damaged. Quick treatment saves heart muscle.',
  ),

  'acute-stroke': alg(
    'acute-stroke', 'Acute Stroke Management (BE-FAST)', 'Manejo del accidente cerebrovascular agudo', 'emergency',
    'Sudden onset focal neurological deficit',
    [
      { step: 1, action: 'Apply BE-FAST screen: Balance, Eyes, Face, Arm, Speech, Time', criteria: 'BE-FAST positive?', nextIfYes: 'Activate stroke code', nextIfNo: 'Consider stroke mimics' },
      { step: 2, action: 'Obtain non-contrast CT head STAT — rule out hemorrhage', criteria: 'Hemorrhage present?', nextIfYes: 'Hemorrhagic stroke pathway — neurosurgery consult', nextIfNo: 'Proceed to step 3' },
      { step: 3, action: 'Determine time of symptom onset or last known well', criteria: 'Within 4.5-hour tPA window?', nextIfYes: 'Evaluate for IV alteplase', nextIfNo: 'Proceed to step 4' },
      { step: 4, action: 'Check for tPA contraindications (recent surgery, bleeding, BP > 185/110)', criteria: 'Eligible for tPA?', nextIfYes: 'Administer IV alteplase 0.9 mg/kg', nextIfNo: 'Proceed to step 5' },
      { step: 5, action: 'Consider mechanical thrombectomy for large vessel occlusion (CTA)', criteria: 'LVO within 24 hours with favorable imaging?', nextIfYes: 'Activate neuro-interventional team', nextIfNo: 'Supportive care, admit to stroke unit' },
    ],
    ['Rapidly worsening neurological deficit', 'Signs of brainstem herniation', 'BP > 220/120', 'Hemorrhagic conversion after tPA', 'Cerebellar stroke with hydrocephalus'],
    'IV alteplase (tPA) 0.9 mg/kg (max 90 mg), 10% bolus + remainder over 60 min',
    'Mechanical thrombectomy for large vessel occlusion; antiplatelet therapy if tPA not given',
    ['All acute strokes — neurology', 'LVO — neuro-interventional radiology', 'Hemorrhagic stroke — neurosurgery'],
    'AHA/ASA 2019 Acute Ischemic Stroke Guidelines',
    'A stroke happens when blood flow to part of the brain is blocked. BE-FAST helps spot signs: Balance problems, Eye changes, Face drooping, Arm weakness, Speech difficulty — call 911 immediately. Time is brain.',
  ),

  'anaphylaxis': alg(
    'anaphylaxis', 'Anaphylaxis Management', 'Manejo de la anafilaxia', 'emergency',
    'Acute onset of multi-system allergic reaction after exposure to trigger',
    [
      { step: 1, action: 'Recognize anaphylaxis: skin findings + respiratory/cardiovascular compromise', criteria: 'Meets anaphylaxis criteria?', nextIfYes: 'Proceed to step 2 immediately', nextIfNo: 'Treat as allergic reaction; monitor' },
      { step: 2, action: 'Administer epinephrine 0.3–0.5 mg IM (mid-outer thigh) — DO NOT DELAY', criteria: 'Response within 5 minutes?', nextIfYes: 'Continue monitoring; proceed to step 4', nextIfNo: 'Repeat epinephrine every 5–15 min (up to 3 doses)' },
      { step: 3, action: 'Establish IV access, give NS bolus 1–2 L for hypotension; position supine', criteria: 'Refractory hypotension?', nextIfYes: 'Start epinephrine infusion; ICU transfer', nextIfNo: 'Proceed to step 4' },
      { step: 4, action: 'Adjunct therapy: albuterol for bronchospasm, H1/H2 blockers, corticosteroids', criteria: 'Symptoms resolving?', nextIfYes: 'Observe 4–6 hours (biphasic risk)', nextIfNo: 'ICU admission' },
      { step: 5, action: 'Discharge planning: prescribe epinephrine auto-injector, allergy referral, anaphylaxis action plan' },
    ],
    ['Stridor or airway compromise', 'Refractory hypotension after 2 epinephrine doses', 'Loss of consciousness', 'Previous near-fatal anaphylaxis', 'Beta-blocker use (may cause refractory anaphylaxis)'],
    'Epinephrine 0.3–0.5 mg IM (1:1000) in mid-outer thigh',
    'Epinephrine IV infusion for refractory cases; glucagon if on beta-blockers',
    ['All anaphylaxis patients — allergy/immunology follow-up', 'Refractory anaphylaxis — ICU admission', 'Recurrent idiopathic anaphylaxis — allergy specialist'],
    'ACAAI/WAO 2020 Anaphylaxis Guidelines',
    'Anaphylaxis is a severe allergic reaction that can be life-threatening. Epinephrine (EpiPen) is the most important treatment — use it right away, then call 911. Always carry two auto-injectors.',
  ),

  'acute-asthma': alg(
    'acute-asthma', 'Acute Asthma Exacerbation', 'Exacerbación aguda del asma', 'emergency',
    'Acute wheezing, dyspnea, and accessory muscle use in known or suspected asthmatic',
    [
      { step: 1, action: 'Assess severity: mild (speaks sentences), moderate (speaks phrases), severe (speaks words), life-threatening (silent chest)', criteria: 'Life-threatening features?', nextIfYes: 'ICU; prepare for intubation', nextIfNo: 'Proceed to step 2' },
      { step: 2, action: 'Albuterol nebulizer 2.5 mg or MDI 4–8 puffs every 20 min x 3; ipratropium if severe', criteria: 'Adequate response after 1 hour?', nextIfYes: 'Continue albuterol q1–4h; discharge plan', nextIfNo: 'Proceed to step 3' },
      { step: 3, action: 'Systemic corticosteroids: prednisone 40–60 mg PO or methylprednisolone 125 mg IV', criteria: 'Improvement in 1–2 hours?', nextIfYes: 'Continue steroid burst (5 days); step-up plan', nextIfNo: 'Proceed to step 4' },
      { step: 4, action: 'Consider magnesium sulfate 2 g IV over 20 min for severe exacerbation', criteria: 'Improvement?', nextIfYes: 'Admit for monitoring', nextIfNo: 'Proceed to step 5' },
      { step: 5, action: 'Prepare for non-invasive ventilation or intubation if respiratory failure imminent' },
    ],
    ['Silent chest', 'Altered mental status', 'PEF < 25% predicted', 'SpO2 < 90% on supplemental O2', 'Respiratory acidosis on ABG', 'Previous ICU admission for asthma'],
    'Inhaled SABA (albuterol) + systemic corticosteroids',
    'IV magnesium sulfate; IV aminophylline; non-invasive ventilation',
    ['Life-threatening exacerbation — ICU', 'Near-fatal asthma — pulmonology', 'Frequent exacerbations (>2/year) — asthma specialist'],
    'GINA 2024 Acute Asthma Management',
    'An asthma attack makes your airways swell and tighten. Use your rescue inhaler right away. If breathing does not improve, go to the ER. Steroids help reduce swelling and are safe short-term.',
  ),

  'sepsis-bundle': alg(
    'sepsis-bundle', 'Sepsis Hour-1 Bundle', 'Paquete de sepsis hora 1', 'emergency',
    'Suspected infection with signs of organ dysfunction (qSOFA >= 2 or SOFA increase >= 2)',
    [
      { step: 1, action: 'Measure lactate level', criteria: 'Lactate > 2 mmol/L?', nextIfYes: 'Initiate aggressive resuscitation; re-measure in 2–4 h', nextIfNo: 'Continue monitoring; proceed to step 2' },
      { step: 2, action: 'Obtain blood cultures (2 sets) BEFORE antibiotics', criteria: 'Cultures drawn?', nextIfYes: 'Proceed to step 3 immediately', nextIfNo: 'Draw cultures now — do not delay antibiotics > 1 hour' },
      { step: 3, action: 'Administer broad-spectrum antibiotics within 1 hour of recognition', criteria: 'Source identified?', nextIfYes: 'Narrow antibiotics to source', nextIfNo: 'Maintain broad coverage; source imaging' },
      { step: 4, action: 'Begin rapid IV crystalloid 30 mL/kg for hypotension or lactate >= 4', criteria: 'MAP >= 65 after fluids?', nextIfYes: 'Continue monitoring; reassess q1h', nextIfNo: 'Proceed to step 5' },
      { step: 5, action: 'Start vasopressors (norepinephrine first-line) for fluid-refractory shock', criteria: 'MAP >= 65 on vasopressors?', nextIfYes: 'ICU admission; continue bundle', nextIfNo: 'Add vasopressin; consider stress-dose steroids' },
    ],
    ['Lactate > 4 mmol/L', 'Refractory hypotension after 30 mL/kg fluids', 'Altered mental status', 'Acute kidney injury', 'Coagulopathy / DIC', 'Multi-organ dysfunction'],
    'Broad-spectrum antibiotics within 1 hour + IV crystalloid 30 mL/kg',
    'Vasopressors (norepinephrine) for fluid-refractory hypotension; stress-dose hydrocortisone',
    ['All septic shock — ICU admission', 'Source requiring surgical control — surgery consult', 'Refractory shock — critical care'],
    'Surviving Sepsis Campaign 2021',
    'Sepsis is a dangerous response to infection where organs start failing. Doctors act fast: blood tests, antibiotics within 1 hour, and IV fluids. Quick treatment is critical — every hour of delay increases risk.',
  ),

  // ========================================================================
  // CHRONIC DISEASE MANAGEMENT (8)
  // ========================================================================
  'htn-stepped': alg(
    'htn-stepped', 'Hypertension Stepped Therapy', 'Terapia escalonada para hipertensión', 'chronic-disease',
    'Blood pressure consistently >= 130/80 mmHg on multiple readings',
    [
      { step: 1, action: 'Lifestyle modifications: DASH diet, sodium < 2300 mg/day, exercise 150 min/week, weight loss, limit alcohol', criteria: 'BP at goal after 3–6 months?', nextIfYes: 'Continue lifestyle; recheck in 3–6 months', nextIfNo: 'Proceed to step 2' },
      { step: 2, action: 'Start monotherapy: ACE-I/ARB, CCB, or thiazide diuretic based on patient profile', criteria: 'BP at goal after 1 month?', nextIfYes: 'Continue; recheck in 3 months', nextIfNo: 'Proceed to step 3' },
      { step: 3, action: 'Add second agent from different class (e.g., ACE-I + CCB or ACE-I + thiazide)', criteria: 'BP at goal?', nextIfYes: 'Maintain dual therapy', nextIfNo: 'Proceed to step 4' },
      { step: 4, action: 'Triple therapy: ACE-I/ARB + CCB + thiazide diuretic', criteria: 'BP at goal?', nextIfYes: 'Maintain; screen for secondary causes if resistant', nextIfNo: 'Proceed to step 5' },
      { step: 5, action: 'Add spironolactone 25–50 mg for resistant hypertension; evaluate for secondary causes' },
    ],
    ['BP > 180/120 with end-organ damage (hypertensive emergency)', 'New papilledema', 'Acute kidney injury', 'Flash pulmonary edema', 'Aortic dissection'],
    'ACE inhibitor, ARB, CCB, or thiazide diuretic (monotherapy)',
    'Combination therapy (ACE-I/ARB + CCB or thiazide); spironolactone for resistant HTN',
    ['Resistant hypertension (uncontrolled on 3 drugs)', 'Suspected secondary hypertension', 'Hypertensive emergency', 'Pregnancy with hypertension'],
    'JNC 8 / ACC/AHA 2017 HTN Guidelines',
    'High blood pressure usually has no symptoms but damages your heart and kidneys over time. Treatment starts with diet and exercise. If that is not enough, your doctor adds medicines one at a time to find what works best.',
  ),

  't2dm-management': alg(
    't2dm-management', 'Type 2 Diabetes Management', 'Manejo de la diabetes tipo 2', 'chronic-disease',
    'HbA1c >= 6.5% or fasting glucose >= 126 mg/dL on two occasions',
    [
      { step: 1, action: 'Lifestyle intervention + metformin 500 mg, titrate to 2000 mg/day', criteria: 'HbA1c at individualized goal after 3 months?', nextIfYes: 'Continue; recheck A1c every 3–6 months', nextIfNo: 'Proceed to step 2' },
      { step: 2, action: 'Add second agent based on comorbidities: SGLT2i if HF/CKD, GLP-1 RA if ASCVD/obesity', criteria: 'HbA1c at goal after 3 months?', nextIfYes: 'Continue dual therapy', nextIfNo: 'Proceed to step 3' },
      { step: 3, action: 'Add third agent or intensify (triple oral or add GLP-1 RA if not yet used)', criteria: 'HbA1c at goal?', nextIfYes: 'Maintain regimen', nextIfNo: 'Proceed to step 4' },
      { step: 4, action: 'Add basal insulin (start 10 units or 0.1–0.2 U/kg/day); titrate by 2 units every 3 days to fasting glucose target', criteria: 'Fasting glucose controlled?', nextIfYes: 'Continue; reassess prandial needs', nextIfNo: 'Proceed to step 5' },
      { step: 5, action: 'Add prandial insulin or switch to premixed insulin regimen; consider endocrinology referral' },
    ],
    ['DKA (type 1 features in suspected type 2)', 'HbA1c > 10% at diagnosis', 'Symptomatic hyperglycemia (polyuria, weight loss)', 'Hypoglycemia unawareness', 'Rapidly declining renal function'],
    'Metformin 500–2000 mg daily + lifestyle modifications',
    'SGLT2 inhibitor or GLP-1 receptor agonist (based on comorbidities)',
    ['HbA1c > 10% at diagnosis', 'Uncertain type 1 vs type 2', 'Recurrent DKA', 'Complex insulin regimens', 'Pregnancy with diabetes'],
    'ADA Standards of Care 2025',
    'Type 2 diabetes means your body does not use insulin well. Treatment starts with a medicine called metformin and healthy eating. If blood sugar stays high, your doctor adds other medicines step by step. Some newer medicines also protect your heart and kidneys.',
  ),

  'heart-failure': alg(
    'heart-failure', 'Heart Failure Management (HFrEF)', 'Manejo de la insuficiencia cardíaca', 'chronic-disease',
    'Dyspnea, fatigue, fluid retention with EF <= 40%',
    [
      { step: 1, action: 'Start GDMT quadruple therapy simultaneously or in rapid sequence: ACEi/ARB/ARNI + beta-blocker + MRA + SGLT2i', criteria: 'Tolerating all four pillars?', nextIfYes: 'Titrate to target doses over 2–4 weeks', nextIfNo: 'Address intolerance; substitute as needed' },
      { step: 2, action: 'Switch ACEi/ARB to sacubitril-valsartan (ARNI) if tolerating ACEi/ARB', criteria: 'NYHA class improved?', nextIfYes: 'Continue; optimize doses', nextIfNo: 'Proceed to step 3' },
      { step: 3, action: 'Add hydralazine/isosorbide dinitrate (especially in Black patients or ACEi-intolerant)', criteria: 'Symptoms improved?', nextIfYes: 'Continue current regimen', nextIfNo: 'Proceed to step 4' },
      { step: 4, action: 'Consider device therapy: ICD if EF <= 35% on GDMT >= 3 months; CRT if LBBB + QRS >= 150ms', criteria: 'Eligible for device?', nextIfYes: 'Electrophysiology referral', nextIfNo: 'Proceed to step 5' },
      { step: 5, action: 'Advanced therapies evaluation: LVAD, transplant assessment if refractory NYHA III-IV' },
    ],
    ['Cardiogenic shock', 'Acute decompensation with hypoxia', 'New-onset HF with acute MI', 'Syncope', 'Ventricular arrhythmias'],
    'ACEi/ARB/ARNI + beta-blocker + MRA + SGLT2i (quadruple GDMT)',
    'Hydralazine/isosorbide dinitrate; ivabradine if HR > 70; device therapy',
    ['EF <= 35% for ICD/CRT evaluation', 'Refractory NYHA III-IV — advanced HF center', 'New-onset HF — cardiology', 'HF with preserved EF — cardiology'],
    'ACC/AHA 2022 Heart Failure Guidelines',
    'Heart failure means your heart cannot pump as well as it should. Four types of medicine work together to help your heart: one relaxes blood vessels, one slows the heart, one removes extra fluid, and one protects the kidneys. Most people feel much better on all four.',
  ),

  'copd-gold': alg(
    'copd-gold', 'COPD GOLD Classification & Treatment', 'Clasificación GOLD y tratamiento de EPOC', 'chronic-disease',
    'Chronic cough, dyspnea, and sputum production with smoking history; spirometry FEV1/FVC < 0.70',
    [
      { step: 1, action: 'Confirm diagnosis with post-bronchodilator spirometry; classify GOLD group (A, B, E) by symptoms and exacerbation history', criteria: 'Group E (>= 2 exacerbations/year)?', nextIfYes: 'Start LABA + LAMA + ICS triple therapy', nextIfNo: 'Proceed to step 2' },
      { step: 2, action: 'Group A (few symptoms, low risk): short-acting bronchodilator PRN', criteria: 'Adequate symptom control?', nextIfYes: 'Continue PRN therapy', nextIfNo: 'Proceed to step 3' },
      { step: 3, action: 'Group B (more symptoms): start LABA + LAMA combination', criteria: 'Symptoms and exacerbations controlled?', nextIfYes: 'Continue dual bronchodilator', nextIfNo: 'Proceed to step 4' },
      { step: 4, action: 'Escalate: add ICS if eosinophils >= 300; consider roflumilast or azithromycin for frequent exacerbations', criteria: 'Exacerbation frequency reduced?', nextIfYes: 'Maintain regimen', nextIfNo: 'Proceed to step 5' },
      { step: 5, action: 'Pulmonary rehabilitation referral; evaluate for lung volume reduction surgery or transplant in advanced disease' },
    ],
    ['Acute exacerbation with respiratory failure', 'SpO2 < 88% at rest', 'Cor pulmonale signs', 'Rapid FEV1 decline', 'Hemoptysis (rule out malignancy)'],
    'LABA + LAMA combination inhaler (Group B/E)',
    'Triple therapy (LABA + LAMA + ICS); roflumilast; azithromycin prophylaxis',
    ['Frequent exacerbations on triple therapy', 'Consideration for lung volume reduction', 'Oxygen evaluation', 'Suspected overlap with asthma'],
    'GOLD 2024 COPD Report',
    'COPD makes it hard to breathe because your airways are narrowed. Inhalers open your airways and reduce flare-ups. Quitting smoking is the single most important thing you can do. Pulmonary rehab exercise programs also help a lot.',
  ),

  'asthma-stepwise': alg(
    'asthma-stepwise', 'Asthma Stepwise Therapy', 'Terapia escalonada del asma', 'chronic-disease',
    'Recurrent wheezing, cough, chest tightness with variable airflow limitation',
    [
      { step: 1, action: 'Step 1: PRN low-dose ICS-formoterol as needed (preferred) or PRN SABA', criteria: 'Symptoms < 2 days/week, no nighttime symptoms?', nextIfYes: 'Maintain Step 1', nextIfNo: 'Step up to Step 2' },
      { step: 2, action: 'Step 2: Daily low-dose ICS + PRN SABA, or PRN low-dose ICS-formoterol', criteria: 'Well-controlled (ACT >= 20)?', nextIfYes: 'Maintain Step 2', nextIfNo: 'Step up to Step 3' },
      { step: 3, action: 'Step 3: Low-dose ICS-LABA maintenance + PRN ICS-formoterol (MART)', criteria: 'Well-controlled?', nextIfYes: 'Consider step-down after 3 months', nextIfNo: 'Step up to Step 4' },
      { step: 4, action: 'Step 4: Medium-dose ICS-LABA; add LTRA or tiotropium if needed', criteria: 'Well-controlled?', nextIfYes: 'Maintain; attempt step-down after 3 months stable', nextIfNo: 'Step up to Step 5' },
      { step: 5, action: 'Step 5: High-dose ICS-LABA + tiotropium; refer for biologic therapy (anti-IgE, anti-IL5, anti-IL4R) or oral corticosteroids as last resort' },
    ],
    ['Life-threatening attack history', 'Previous intubation for asthma', 'Using > 3 SABA canisters/year', 'FEV1 < 60% predicted', 'Anaphylaxis history with aspirin-exacerbated respiratory disease'],
    'Low-dose ICS-formoterol as needed (GINA preferred Step 1–2)',
    'Medium/high-dose ICS-LABA; biologic therapy for severe uncontrolled asthma',
    ['Severe uncontrolled asthma on Step 4 therapy', 'Diagnostic uncertainty', 'Occupational asthma suspected', 'Biologic therapy consideration'],
    'GINA 2024 Asthma Strategy',
    'Asthma inflames your airways, making them sensitive. Controller inhalers (taken daily) prevent attacks; rescue inhalers (blue) relieve sudden symptoms. Your doctor adjusts your medicine up or down based on how you are doing.',
  ),

  'ckd-management': alg(
    'ckd-management', 'CKD Management by Stage', 'Manejo de la enfermedad renal crónica por estadio', 'chronic-disease',
    'eGFR < 60 mL/min/1.73m² or albuminuria >= 30 mg/g on two measurements over 3 months',
    [
      { step: 1, action: 'Stage 1–2 (eGFR >= 60 with albuminuria): optimize BP, start ACEi/ARB, control diabetes, lifestyle mods', criteria: 'Albuminuria improving?', nextIfYes: 'Continue; monitor every 6–12 months', nextIfNo: 'Maximize ACEi/ARB dose; proceed to step 2' },
      { step: 2, action: 'Stage 3a–3b (eGFR 30–59): add SGLT2 inhibitor if eGFR >= 20; finerenone if T2DM + albuminuria; monitor electrolytes', criteria: 'Progression slowed?', nextIfYes: 'Continue; monitor every 3–6 months', nextIfNo: 'Proceed to step 3' },
      { step: 3, action: 'Stage 4 (eGFR 15–29): nephrology co-management; plan for RRT; manage anemia (EPO), mineral bone disease (phosphate binders, vitamin D)', criteria: 'Stable?', nextIfYes: 'Continue management; quarterly labs', nextIfNo: 'Proceed to step 4' },
      { step: 4, action: 'Stage 5 (eGFR < 15): initiate dialysis planning or transplant evaluation; vascular access placement if hemodialysis', criteria: 'Symptoms of uremia?', nextIfYes: 'Start dialysis', nextIfNo: 'Monitor closely; conservative management if appropriate' },
      { step: 5, action: 'Ongoing: cardiovascular risk reduction, avoid nephrotoxins (NSAIDs, contrast), dose-adjust medications, vaccinations' },
    ],
    ['Rapidly declining eGFR (> 5 mL/min/year)', 'Hyperkalemia > 6.0', 'Severe metabolic acidosis', 'Uremic symptoms (nausea, pericarditis, encephalopathy)', 'Refractory fluid overload'],
    'ACEi or ARB (maximized) + SGLT2 inhibitor (dapagliflozin or empagliflozin)',
    'Finerenone (for T2DM + CKD); GLP-1 RA for additional renoprotection in diabetic CKD',
    ['eGFR < 30 — nephrology referral', 'Rapid decline > 5 mL/min/year', 'Refractory hyperkalemia or acidosis', 'Nephrotic-range proteinuria', 'Unclear etiology'],
    'KDIGO 2024 CKD Guidelines',
    'Chronic kidney disease means your kidneys are slowly losing their filtering ability. Medicines that protect your kidneys (blood pressure pills and newer diabetes drugs) can slow this down. Avoiding certain painkillers (like ibuprofen) is important.',
  ),

  'afib-rate-rhythm': alg(
    'afib-rate-rhythm', 'Atrial Fibrillation: Rate vs Rhythm Control', 'Fibrilación auricular: control de frecuencia vs ritmo', 'chronic-disease',
    'Irregularly irregular pulse with atrial fibrillation confirmed on ECG',
    [
      { step: 1, action: 'Assess hemodynamic stability; if unstable, immediate cardioversion', criteria: 'Hemodynamically stable?', nextIfYes: 'Proceed to step 2', nextIfNo: 'Synchronized cardioversion' },
      { step: 2, action: 'Determine AF onset duration and classify (paroxysmal, persistent, permanent)', criteria: 'Onset < 48 hours or on anticoagulation?', nextIfYes: 'Consider rhythm control (cardioversion ± antiarrhythmic)', nextIfNo: 'Rate control; start anticoagulation; TEE before cardioversion' },
      { step: 3, action: 'Rate control strategy: target HR < 110 bpm resting; beta-blocker or CCB (diltiazem/verapamil)', criteria: 'Rate controlled and symptoms acceptable?', nextIfYes: 'Maintain rate control', nextIfNo: 'Consider rhythm control strategy' },
      { step: 4, action: 'Rhythm control: antiarrhythmic drugs (flecainide if no structural heart disease, amiodarone if HF) or catheter ablation', criteria: 'Maintaining sinus rhythm?', nextIfYes: 'Continue; monitor', nextIfNo: 'Catheter ablation referral' },
      { step: 5, action: 'Early rhythm control (within 1 year of diagnosis) shown to reduce cardiovascular outcomes per EAST-AFNET 4 trial' },
    ],
    ['AF with rapid ventricular response + hemodynamic instability', 'AF with WPW (wide-complex irregular)', 'New HF decompensation', 'Stroke/TIA symptoms', 'HR > 150 with chest pain'],
    'Rate control with beta-blocker (metoprolol) or non-dihydropyridine CCB (diltiazem)',
    'Rhythm control: flecainide (no structural disease) or amiodarone (HF); catheter ablation',
    ['All new AF — cardiology', 'Failed rate control', 'Candidate for ablation', 'AF with WPW — electrophysiology', 'Young patients for rhythm control strategy'],
    'ACC/AHA/HRS 2023 AF Guidelines; EAST-AFNET 4 Trial',
    'Atrial fibrillation means your heart beats irregularly. Treatment focuses on controlling the heart rate with medicine or restoring normal rhythm. Blood thinners are usually needed to prevent stroke.',
  ),

  'depression-treatment': alg(
    'depression-treatment', 'Depression Treatment Algorithm', 'Algoritmo de tratamiento de la depresión', 'chronic-disease',
    'Persistent depressed mood or anhedonia for >= 2 weeks with functional impairment (PHQ-9 >= 10)',
    [
      { step: 1, action: 'Screen with PHQ-9; assess suicide risk; rule out medical causes (thyroid, substance use)', criteria: 'Moderate-severe depression (PHQ-9 >= 15)?', nextIfYes: 'Start pharmacotherapy + psychotherapy', nextIfNo: 'Step 2: mild-moderate' },
      { step: 2, action: 'Mild-moderate: offer psychotherapy (CBT or IPT) alone or with SSRI; patient preference guides choice', criteria: 'Adequate response at 4–6 weeks?', nextIfYes: 'Continue for minimum 6–9 months', nextIfNo: 'Proceed to step 3' },
      { step: 3, action: 'Optimize SSRI dose to maximum tolerated; if no response at 6–8 weeks, switch SSRI or try SNRI', criteria: 'Response (>= 50% PHQ-9 reduction)?', nextIfYes: 'Continue; aim for remission (PHQ-9 < 5)', nextIfNo: 'Proceed to step 4' },
      { step: 4, action: 'Augmentation: add bupropion, aripiprazole, or lithium to current antidepressant', criteria: 'Remission achieved?', nextIfYes: 'Continue for 12+ months', nextIfNo: 'Proceed to step 5' },
      { step: 5, action: 'Treatment-resistant depression: consider esketamine nasal spray, ECT, TMS, or MAOI; psychiatry referral required' },
    ],
    ['Active suicidal ideation with plan', 'Psychotic features', 'Severe functional impairment', 'Bipolar features (screen with MDQ)', 'Comorbid substance use disorder', 'Pregnancy'],
    'SSRI (sertraline or escitalopram) + CBT psychotherapy',
    'SNRI (duloxetine/venlafaxine), bupropion, or augmentation strategies',
    ['Suicidal ideation — psychiatry/crisis', 'Treatment-resistant (failed 2+ adequate trials)', 'Bipolar suspected', 'Psychotic features', 'Severe functional impairment'],
    'APA 2023 Major Depression Guidelines',
    'Depression is a medical condition, not a personal weakness. Talk therapy and medicines (antidepressants) both work well. Medicines take 4–6 weeks to fully work. If the first medicine does not help, your doctor will try a different one.',
  ),

  // ========================================================================
  // SCREENING (5)
  // ========================================================================
  'cancer-screening': alg(
    'cancer-screening', 'Cancer Screening by Age and Sex', 'Detección de cáncer por edad y sexo', 'screening',
    'Asymptomatic patient presenting for routine health maintenance',
    [
      { step: 1, action: 'Cervical cancer: age 21–65 — Pap every 3 years (21–29); Pap + HPV co-test every 5 years or HPV alone every 5 years (30–65)', criteria: 'Female, age 21–65, with cervix?', nextIfYes: 'Schedule appropriate cervical screening', nextIfNo: 'Proceed to step 2' },
      { step: 2, action: 'Breast cancer: mammography every 2 years starting age 40 (USPSTF 2024); annual starting 40 (ACS option)', criteria: 'Female, age >= 40?', nextIfYes: 'Schedule mammogram', nextIfNo: 'Proceed to step 3' },
      { step: 3, action: 'Colorectal cancer: age 45–75 — colonoscopy every 10 years, or FIT annually, or CT colonography every 5 years', criteria: 'Age 45–75?', nextIfYes: 'Offer preferred CRC screening', nextIfNo: 'Proceed to step 4' },
      { step: 4, action: 'Lung cancer: low-dose CT annually for age 50–80 with >= 20 pack-year history (current or quit < 15 years)', criteria: 'Meets lung cancer screening criteria?', nextIfYes: 'Order LDCT', nextIfNo: 'Proceed to step 5' },
      { step: 5, action: 'Prostate cancer: shared decision-making for PSA screening in men age 55–69 (USPSTF); discuss risks/benefits' },
    ],
    ['Family history of hereditary cancer syndrome (BRCA, Lynch)', 'Prior cancer history', 'Abnormal screening result', 'New unexplained weight loss', 'Palpable mass'],
    'Age/sex-appropriate screening per USPSTF recommendations',
    'Genetic counseling and enhanced screening for high-risk individuals',
    ['BRCA mutation carriers — genetics/oncology', 'Abnormal screening — specialist per organ', 'Lynch syndrome — GI/oncology', 'Strong family history — genetic counseling'],
    'USPSTF 2024 Screening Recommendations; ACS 2024',
    'Cancer screening finds problems early when they are easiest to treat. Which tests you need depends on your age and sex. Ask your doctor which screenings are right for you at your next visit.',
  ),

  'ascvd-risk': alg(
    'ascvd-risk', 'Cardiovascular Risk Assessment (ASCVD)', 'Evaluación del riesgo cardiovascular', 'screening',
    'Adult age 40–75 for primary prevention cardiovascular risk stratification',
    [
      { step: 1, action: 'Calculate 10-year ASCVD risk using Pooled Cohort Equations (age, sex, race, cholesterol, BP, DM, smoking)', criteria: 'Risk < 5% (low)?', nextIfYes: 'Lifestyle counseling; recheck in 4–6 years', nextIfNo: 'Proceed to step 2' },
      { step: 2, action: 'Borderline risk (5–7.5%): use risk enhancers (family history, metabolic syndrome, CKD, elevated CRP/Lp(a))', criteria: 'Risk enhancers present?', nextIfYes: 'Consider statin; shared decision-making', nextIfNo: 'Lifestyle focus; recheck in 4–6 years' },
      { step: 3, action: 'Intermediate risk (7.5–20%): coronary artery calcium (CAC) score can refine risk', criteria: 'CAC = 0?', nextIfYes: 'May defer statin; recheck in 5 years', nextIfNo: 'Proceed to step 4' },
      { step: 4, action: 'CAC >= 100 or >= 75th percentile: initiate moderate-intensity statin', criteria: 'LDL response adequate (>= 30% reduction)?', nextIfYes: 'Continue statin; recheck lipids in 4–12 weeks', nextIfNo: 'Intensify or add ezetimibe' },
      { step: 5, action: 'High risk (>= 20%): high-intensity statin (atorvastatin 40–80 mg or rosuvastatin 20–40 mg); target >= 50% LDL reduction' },
    ],
    ['Known ASCVD (secondary prevention)', 'LDL >= 190 mg/dL (familial hypercholesterolemia)', 'Diabetes age 40–75', 'Family history of premature ASCVD (men < 55, women < 65)'],
    'Moderate-intensity statin for intermediate risk; high-intensity for high risk',
    'Ezetimibe add-on; PCSK9 inhibitor for very high-risk or statin-intolerant',
    ['LDL >= 190 — lipid specialist', 'Familial hypercholesterolemia suspected', 'Statin intolerance', 'Very high-risk requiring PCSK9i'],
    'ACC/AHA 2019 Primary Prevention Guidelines',
    'Your heart risk score estimates your chance of having a heart attack or stroke in the next 10 years. Based on this number, your doctor decides if you need a cholesterol-lowering medicine (statin). Healthy habits lower your risk too.',
  ),

  'diabetes-screening': alg(
    'diabetes-screening', 'Diabetes Screening Criteria', 'Criterios de detección de diabetes', 'screening',
    'Asymptomatic patient being evaluated for diabetes risk',
    [
      { step: 1, action: 'Screen all adults age >= 35 (USPSTF) or >= 45 (ADA); screen earlier if BMI >= 25 with risk factors', criteria: 'Meets screening criteria?', nextIfYes: 'Proceed to step 2', nextIfNo: 'Reassess at next visit or if risk factors develop' },
      { step: 2, action: 'Order fasting plasma glucose, HbA1c, or 2-hour OGTT', criteria: 'Normal (FPG < 100, A1c < 5.7%)?', nextIfYes: 'Rescreen every 3 years', nextIfNo: 'Proceed to step 3' },
      { step: 3, action: 'Prediabetes (FPG 100–125, A1c 5.7–6.4%): intensive lifestyle intervention (DPP model — 7% weight loss, 150 min/week exercise)', criteria: 'High risk for progression (BMI >= 35, A1c >= 6.0)?', nextIfYes: 'Consider metformin for prevention', nextIfNo: 'Lifestyle intervention; recheck A1c annually' },
      { step: 4, action: 'Diabetes confirmed (FPG >= 126, A1c >= 6.5%, or random glucose >= 200 + symptoms): confirm with repeat test', criteria: 'Diagnosis confirmed?', nextIfYes: 'Initiate diabetes management pathway', nextIfNo: 'Repeat testing in 3–6 months' },
      { step: 5, action: 'Gestational diabetes: screen all pregnant patients at 24–28 weeks; screen high-risk patients at first visit' },
    ],
    ['Random glucose > 300 with symptoms', 'DKA presentation', 'New polyuria/polydipsia with weight loss', 'Acanthosis nigricans in child/adolescent'],
    'Lifestyle intervention (DPP model) for prediabetes',
    'Metformin 850 mg BID for high-risk prediabetes prevention',
    ['Newly diagnosed diabetes — diabetes education', 'Uncertain type 1 vs type 2 — endocrinology', 'Gestational diabetes — MFM/endocrine', 'Pediatric diabetes — pediatric endocrinology'],
    'ADA Standards of Care 2025; USPSTF 2021',
    'A simple blood test can find diabetes or pre-diabetes before symptoms appear. If you are overweight or have a family history, ask your doctor about testing. Catching it early gives you the best chance to prevent complications.',
  ),

  'osteoporosis-screening': alg(
    'osteoporosis-screening', 'Osteoporosis Screening (FRAX)', 'Detección de osteoporosis (FRAX)', 'screening',
    'Postmenopausal woman or man age >= 50 for fracture risk assessment',
    [
      { step: 1, action: 'Screen women >= 65 and men >= 70 with DXA; screen earlier if risk factors (low BMI, steroid use, fracture history)', criteria: 'Meets screening criteria?', nextIfYes: 'Order DXA scan', nextIfNo: 'Calculate FRAX; screen if 10-year major fracture risk >= 9.3%' },
      { step: 2, action: 'Interpret DXA: T-score >= -1.0 normal; -1.0 to -2.5 osteopenia; <= -2.5 osteoporosis', criteria: 'Osteoporosis (T-score <= -2.5)?', nextIfYes: 'Initiate pharmacotherapy', nextIfNo: 'Proceed to step 3' },
      { step: 3, action: 'Osteopenia: calculate FRAX score including BMD', criteria: 'FRAX >= 3% hip or >= 20% major osteoporotic fracture?', nextIfYes: 'Initiate pharmacotherapy', nextIfNo: 'Lifestyle measures; repeat DXA in 2–5 years' },
      { step: 4, action: 'Pharmacotherapy: oral bisphosphonate (alendronate 70 mg weekly or risedronate 35 mg weekly); ensure calcium 1200 mg + vitamin D 800–1000 IU daily', criteria: 'Tolerating bisphosphonate?', nextIfYes: 'Continue for 5 years; reassess', nextIfNo: 'Switch to denosumab or zoledronic acid IV yearly' },
      { step: 5, action: 'Very high risk (T-score <= -3.0, recent fracture): consider anabolic therapy first (teriparatide or romosozumab) before antiresorptive' },
    ],
    ['Fragility fracture', 'Height loss > 4 cm', 'Kyphosis', 'Chronic glucocorticoid use >= 3 months', 'T-score <= -3.0'],
    'Oral bisphosphonate (alendronate 70 mg/week) + calcium + vitamin D',
    'Denosumab, zoledronic acid, or anabolic therapy (teriparatide/romosozumab)',
    ['Very high fracture risk — endocrinology/rheumatology', 'Atypical fracture suspected', 'Premenopausal osteoporosis', 'Secondary osteoporosis workup needed'],
    'USPSTF 2018; NOF/AACE 2024; FRAX Tool',
    'Osteoporosis means your bones have become thin and fragile. A painless DXA scan measures bone density. If bones are weak, medicines can make them stronger. Getting enough calcium, vitamin D, and weight-bearing exercise also helps.',
  ),

  'colon-cancer-screening': alg(
    'colon-cancer-screening', 'Colon Cancer Screening Pathways', 'Vías de detección del cáncer de colon', 'screening',
    'Average-risk adult age >= 45 for colorectal cancer screening initiation',
    [
      { step: 1, action: 'Begin screening at age 45; discuss options with patient preference', criteria: 'Patient prefers direct visualization?', nextIfYes: 'Colonoscopy every 10 years', nextIfNo: 'Proceed to step 2 for stool-based options' },
      { step: 2, action: 'Stool-based test: annual FIT (fecal immunochemical test) — most common non-invasive option', criteria: 'FIT positive?', nextIfYes: 'Diagnostic colonoscopy required', nextIfNo: 'Repeat FIT annually' },
      { step: 3, action: 'Alternative: FIT-DNA (Cologuard) every 3 years or CT colonography every 5 years', criteria: 'Abnormal result?', nextIfYes: 'Diagnostic colonoscopy', nextIfNo: 'Continue screening per schedule' },
      { step: 4, action: 'High-risk patients (family hx, IBD, polyp history): colonoscopy at shorter intervals per guidelines', criteria: 'First-degree relative with CRC < 60?', nextIfYes: 'Begin screening at age 40 or 10 years before relative dx', nextIfNo: 'Standard screening schedule' },
      { step: 5, action: 'Continue screening until age 75; ages 76–85 individualized decision; stop after 85' },
    ],
    ['Iron deficiency anemia', 'Rectal bleeding with weight loss', 'Change in bowel habits > 4 weeks', 'Family history of hereditary CRC syndrome', 'Palpable rectal mass'],
    'Colonoscopy every 10 years or annual FIT (patient preference)',
    'FIT-DNA every 3 years; CT colonography every 5 years',
    ['Positive stool-based test — GI for colonoscopy', 'Family history of Lynch/FAP — genetics', 'Polyps found — GI for surveillance schedule', 'Suspected IBD — GI'],
    'USPSTF 2021; ACS 2018; ACG 2021',
    'Colon cancer screening saves lives by finding polyps before they become cancer. Starting at age 45, you can choose a colonoscopy every 10 years or a simple stool test each year. Both are effective — the best test is the one you actually do.',
  ),

  // ========================================================================
  // DIAGNOSTIC (4)
  // ========================================================================
  'anemia-workup': alg(
    'anemia-workup', 'Anemia Workup', 'Estudio de anemia', 'diagnostic',
    'Low hemoglobin (< 13 g/dL men, < 12 g/dL women) found on CBC',
    [
      { step: 1, action: 'Check MCV to classify: microcytic (< 80), normocytic (80–100), macrocytic (> 100)', criteria: 'Microcytic anemia?', nextIfYes: 'Check iron studies (ferritin, TIBC, serum iron)', nextIfNo: 'Proceed to step 2' },
      { step: 2, action: 'Normocytic anemia: check reticulocyte count', criteria: 'Reticulocyte count elevated?', nextIfYes: 'Hemolysis workup (LDH, haptoglobin, bilirubin, Coombs) or bleeding', nextIfNo: 'Check renal function, CRP, TSH — anemia of chronic disease or bone marrow issue' },
      { step: 3, action: 'Macrocytic anemia: check B12 and folate levels; review medications (methotrexate, hydroxyurea)', criteria: 'B12 or folate deficient?', nextIfYes: 'Replace deficiency; evaluate for pernicious anemia if B12 low', nextIfNo: 'Check reticulocyte count, TSH, LFTs; consider MDS' },
      { step: 4, action: 'Iron deficiency confirmed (low ferritin < 30): evaluate GI source in men and postmenopausal women', criteria: 'Age >= 50 or alarm symptoms?', nextIfYes: 'Upper and lower endoscopy', nextIfNo: 'Empiric iron replacement; recheck in 4–8 weeks' },
      { step: 5, action: 'If unclear etiology after initial workup: peripheral smear review, consider hematology referral for bone marrow biopsy' },
    ],
    ['Hemoglobin < 7 g/dL (symptomatic)', 'Active GI bleeding', 'Pancytopenia', 'Blast cells on smear', 'Rapidly falling hemoglobin'],
    'Oral iron sulfate 325 mg TID on empty stomach (for iron deficiency)',
    'IV iron infusion (if oral intolerant); B12 injections; transfusion if Hb < 7 or symptomatic',
    ['Unexplained anemia after initial workup — hematology', 'Suspected MDS or leukemia', 'Hemolytic anemia', 'Need for endoscopy for iron deficiency source'],
    'ASH 2023 Anemia Guidelines',
    'Anemia means you do not have enough red blood cells, which can make you feel tired and weak. A blood test tells your doctor the type of anemia and its cause. Iron deficiency is most common and is treated with iron supplements.',
  ),

  'thyroid-nodule': alg(
    'thyroid-nodule', 'Thyroid Nodule Evaluation', 'Evaluación de nódulo tiroideo', 'diagnostic',
    'Thyroid nodule found on palpation or incidentally on imaging',
    [
      { step: 1, action: 'Check TSH level', criteria: 'TSH low (hyperthyroid)?', nextIfYes: 'Thyroid uptake scan — if hot nodule, likely benign (autonomous); treat hyperthyroidism', nextIfNo: 'Proceed to step 2' },
      { step: 2, action: 'Thyroid ultrasound: characterize nodule size, composition, echogenicity, margins, calcifications', criteria: 'Meets FNA criteria (ACR TI-RADS)?', nextIfYes: 'Proceed to FNA', nextIfNo: 'Follow-up ultrasound per TI-RADS interval' },
      { step: 3, action: 'FNA performed: classify by Bethesda system (I–VI)', criteria: 'Bethesda V or VI (suspicious/malignant)?', nextIfYes: 'Surgical referral (thyroidectomy)', nextIfNo: 'Proceed to step 4' },
      { step: 4, action: 'Bethesda III or IV (indeterminate): molecular testing (Afirma, ThyroSeq)', criteria: 'Molecular test suspicious?', nextIfYes: 'Diagnostic lobectomy', nextIfNo: 'Follow-up with ultrasound in 12–24 months' },
      { step: 5, action: 'Bethesda II (benign): follow-up ultrasound in 12–24 months; repeat FNA if nodule grows > 20%' },
    ],
    ['Rapid nodule growth', 'Fixed hard nodule', 'Cervical lymphadenopathy', 'Vocal cord paralysis/hoarseness', 'Family history of thyroid cancer or MEN syndrome', 'History of neck radiation'],
    'Observation with serial ultrasound for benign nodules',
    'Thyroidectomy for malignant or suspicious cytology; radioactive iodine for differentiated thyroid cancer',
    ['FNA with suspicious/malignant cytology — endocrine surgery', 'Indeterminate cytology — endocrinology', 'Rapid growth or compressive symptoms', 'Family history of MEN/thyroid cancer'],
    'ATA 2015 Thyroid Nodule Guidelines; ACR TI-RADS 2017',
    'A thyroid nodule is a lump in the thyroid gland in your neck. Most nodules are not cancer. Your doctor uses ultrasound and sometimes a small needle biopsy to check. Many nodules only need monitoring over time.',
  ),

  'cxr-abnormality': alg(
    'cxr-abnormality', 'Chest X-Ray Abnormality Workup', 'Estudio de anomalía en radiografía de tórax', 'diagnostic',
    'Abnormal finding on chest X-ray (incidental or symptom-directed)',
    [
      { step: 1, action: 'Identify abnormality pattern: pulmonary nodule, infiltrate, effusion, mass, widened mediastinum', criteria: 'Pulmonary nodule?', nextIfYes: 'Apply Fleischner criteria for follow-up CT timing', nextIfNo: 'Proceed to step 2' },
      { step: 2, action: 'Infiltrate/consolidation: correlate with clinical picture (fever, cough, WBC)', criteria: 'Consistent with pneumonia?', nextIfYes: 'Treat empirically; follow-up CXR in 6–8 weeks for resolution', nextIfNo: 'CT chest for further characterization' },
      { step: 3, action: 'Pleural effusion: thoracentesis if significant (> 1 cm on lateral decubitus)', criteria: 'Transudate (Light criteria)?', nextIfYes: 'Treat underlying cause (CHF, cirrhosis, nephrotic)', nextIfNo: 'Exudative workup: cytology, cultures, LDH, protein, glucose, pH' },
      { step: 4, action: 'Lung mass or nodule > 8 mm: CT chest with contrast; consider PET-CT', criteria: 'Suspicious for malignancy (spiculated, growing, PET-avid)?', nextIfYes: 'Tissue sampling (CT-guided biopsy, bronchoscopy, or surgical)', nextIfNo: 'Follow-up CT per Fleischner/Lung-RADS' },
      { step: 5, action: 'Widened mediastinum or hilar lymphadenopathy: CT with contrast; consider lymphoma, sarcoidosis, or aortic pathology' },
    ],
    ['Large pleural effusion with dyspnea', 'Tension pneumothorax', 'Widened mediastinum (aortic dissection)', 'Rapidly enlarging mass', 'Cavitary lesion (TB, abscess, cancer)'],
    'Follow-up imaging per established guidelines (Fleischner for nodules)',
    'CT-guided biopsy or bronchoscopy for tissue diagnosis',
    ['Suspicious lung mass — pulmonology/thoracic surgery', 'Large or symptomatic effusion — pulmonology', 'Widened mediastinum — vascular surgery', 'Suspected TB — infectious disease'],
    'Fleischner Society 2017; ACR Guidelines',
    'If your chest X-ray shows something unusual, it does not automatically mean something serious. Many findings need a CT scan for a closer look. Your doctor will decide if you need more tests or just follow-up imaging over time.',
  ),

  'hematuria-eval': alg(
    'hematuria-eval', 'Hematuria Evaluation', 'Evaluación de la hematuria', 'diagnostic',
    'Blood detected in urine — gross hematuria or >= 3 RBC/HPF on microscopy',
    [
      { step: 1, action: 'Confirm true hematuria with urinalysis and microscopy; rule out contamination (menstruation), myoglobinuria, medications', criteria: 'True hematuria confirmed?', nextIfYes: 'Proceed to step 2', nextIfNo: 'Address alternative cause' },
      { step: 2, action: 'Evaluate for UTI: symptoms, UA with culture', criteria: 'UTI confirmed?', nextIfYes: 'Treat UTI; repeat UA 6 weeks after treatment to confirm resolution', nextIfNo: 'Proceed to step 3' },
      { step: 3, action: 'Assess for glomerular vs non-glomerular source: dysmorphic RBCs, proteinuria, RBC casts', criteria: 'Glomerular features present?', nextIfYes: 'Nephrology referral for glomerulonephritis workup', nextIfNo: 'Proceed to step 4 — urologic evaluation' },
      { step: 4, action: 'Urologic workup: CT urogram + cystoscopy (age >= 35 or risk factors for malignancy)', criteria: 'Lesion identified?', nextIfYes: 'Biopsy/surgical management per finding', nextIfNo: 'Proceed to step 5' },
      { step: 5, action: 'Negative workup: if low-risk, follow-up UA in 6–12 months; if persistent hematuria, repeat workup in 3–5 years' },
    ],
    ['Gross painless hematuria in adult (bladder cancer until proven otherwise)', 'Clot retention', 'Hematuria with flank mass', 'Hematuria with declining renal function', 'Recent anticoagulation initiation (still requires workup)'],
    'Urologic evaluation with CT urogram + cystoscopy for adults >= 35',
    'Nephrology referral for glomerular hematuria; renal biopsy if indicated',
    ['Age >= 35 with any hematuria — urology', 'Dysmorphic RBCs/proteinuria — nephrology', 'Gross hematuria at any age — urgent urology', 'Persistent microscopic hematuria — urology'],
    'AUA 2020 Microhematuria Guidelines',
    'Blood in the urine can come from many causes — infections, kidney stones, or rarely cancer. Your doctor will do urine tests and possibly imaging to find the cause. Most causes are not serious, but it is important to check.',
  ),

  // ========================================================================
  // MANAGEMENT (3)
  // ========================================================================
  'af-anticoagulation': alg(
    'af-anticoagulation', 'Anticoagulation for AF (CHA2DS2-VASc)', 'Anticoagulación para FA (CHA2DS2-VASc)', 'management',
    'Patient with non-valvular atrial fibrillation requiring stroke risk assessment',
    [
      { step: 1, action: 'Calculate CHA2DS2-VASc score: CHF(1), HTN(1), Age>=75(2), DM(1), Stroke/TIA(2), Vascular disease(1), Age 65-74(1), Sex female(1)', criteria: 'Score = 0 in males or 1 in females?', nextIfYes: 'No anticoagulation needed; reassess annually', nextIfNo: 'Proceed to step 2' },
      { step: 2, action: 'Score >= 2 in males or >= 3 in females: anticoagulation recommended', criteria: 'Contraindication to anticoagulation?', nextIfYes: 'Consider LAA occlusion device (Watchman); cardiology referral', nextIfNo: 'Proceed to step 3' },
      { step: 3, action: 'Choose anticoagulant: DOAC preferred over warfarin (apixaban, rivaroxaban, dabigatran, edoxaban)', criteria: 'Mechanical valve or moderate-severe mitral stenosis?', nextIfYes: 'Warfarin only (INR 2–3)', nextIfNo: 'DOAC preferred' },
      { step: 4, action: 'Assess bleeding risk (HAS-BLED score) — does not contraindicate anticoagulation but identifies modifiable risks', criteria: 'HAS-BLED >= 3?', nextIfYes: 'Address modifiable bleeding risks; closer monitoring', nextIfNo: 'Standard follow-up' },
      { step: 5, action: 'Monitor: renal function annually (dose-adjust DOACs), bleeding signs, adherence; avoid concurrent antiplatelet unless recent ACS/PCI' },
    ],
    ['Active major bleeding', 'Recent intracranial hemorrhage', 'Severe thrombocytopenia', 'Non-adherent to monitoring (warfarin)', 'Falls risk (relative, not absolute contraindication)'],
    'DOAC: apixaban 5 mg BID (preferred based on ARISTOTLE trial safety profile)',
    'Rivaroxaban 20 mg daily, dabigatran 150 mg BID, or edoxaban 60 mg daily; warfarin if valve disease',
    ['CHA2DS2-VASc = 1 in males — shared decision-making', 'Contraindication to anticoagulation — LAA occlusion evaluation', 'Mechanical valve — anticoagulation clinic', 'Triple therapy needed (AF + ACS/PCI) — cardiology'],
    'ACC/AHA/HRS 2023 AF Guidelines; CHA2DS2-VASc',
    'Atrial fibrillation increases stroke risk. A scoring system tells your doctor if you need a blood thinner. Newer blood thinners (DOACs) are easier to take than warfarin — no regular blood tests or food restrictions.',
  ),

  'pain-ladder': alg(
    'pain-ladder', 'Pain Management Ladder (WHO)', 'Escalera del manejo del dolor (OMS)', 'management',
    'Patient with acute or chronic pain requiring systematic analgesic approach',
    [
      { step: 1, action: 'Step 1 — Mild pain (1–3/10): non-opioid analgesics (acetaminophen 650–1000 mg q6h or NSAID) ± adjuvants', criteria: 'Pain controlled?', nextIfYes: 'Continue current regimen; reassess regularly', nextIfNo: 'Proceed to step 2' },
      { step: 2, action: 'Step 2 — Moderate pain (4–6/10): weak opioid (tramadol 50–100 mg q6h) or low-dose strong opioid + non-opioid ± adjuvants', criteria: 'Pain controlled?', nextIfYes: 'Continue; monitor for opioid side effects', nextIfNo: 'Proceed to step 3' },
      { step: 3, action: 'Step 3 — Severe pain (7–10/10): strong opioid (morphine, oxycodone, hydromorphone) + non-opioid ± adjuvants', criteria: 'Pain controlled with acceptable side effects?', nextIfYes: 'Continue; reassess opioid need frequently', nextIfNo: 'Proceed to step 4' },
      { step: 4, action: 'Adjuvant therapies: gabapentinoids for neuropathic pain, duloxetine for musculoskeletal/neuropathic, muscle relaxants, topical agents', criteria: 'Multimodal approach effective?', nextIfYes: 'Maintain; attempt to taper opioids', nextIfNo: 'Pain specialist referral' },
      { step: 5, action: 'Interventional: nerve blocks, epidural steroid injections, spinal cord stimulation, intrathecal pump; consider palliative care for cancer pain' },
    ],
    ['Pain out of proportion to exam (compartment syndrome, ischemia)', 'New neurological deficit with pain', 'Opioid overdose signs', 'Aberrant opioid behaviors', 'Uncontrolled cancer pain'],
    'Acetaminophen 650–1000 mg q6h and/or NSAID (ibuprofen 400 mg q6h)',
    'Tramadol or low-dose opioid for moderate pain; strong opioid for severe pain',
    ['Refractory pain despite multimodal approach — pain management', 'Neuropathic pain syndromes', 'Cancer pain — palliative care', 'Opioid use disorder — addiction medicine'],
    'WHO Pain Ladder; CDC Opioid Prescribing Guidelines 2022',
    'Pain treatment follows a stepladder approach. Mild pain starts with Tylenol or ibuprofen. If those do not work, stronger medicines are added. Non-drug treatments (physical therapy, relaxation) also help and can reduce the need for pain medicine.',
  ),

  'insomnia-management': alg(
    'insomnia-management', 'Insomnia Management (CBT-I First)', 'Manejo del insomnio (TCC-I primero)', 'management',
    'Difficulty initiating or maintaining sleep >= 3 nights/week for >= 3 months with daytime impairment',
    [
      { step: 1, action: 'Evaluate for underlying causes: sleep apnea, restless legs, depression, medications, substances (caffeine, alcohol)', criteria: 'Secondary cause identified?', nextIfYes: 'Treat underlying condition first', nextIfNo: 'Proceed to step 2' },
      { step: 2, action: 'First-line: CBT-I (Cognitive Behavioral Therapy for Insomnia) — sleep restriction, stimulus control, cognitive restructuring, sleep hygiene', criteria: 'CBT-I available and patient willing?', nextIfYes: 'Complete 6–8 session course; reassess', nextIfNo: 'Proceed to step 3 while arranging CBT-I' },
      { step: 3, action: 'If CBT-I alone insufficient or unavailable: short-term pharmacotherapy — low-dose doxepin (3–6 mg), suvorexant (10 mg), or ramelteon (8 mg)', criteria: 'Sleep improved?', nextIfYes: 'Taper medication after 4–8 weeks; maintain CBT-I skills', nextIfNo: 'Proceed to step 4' },
      { step: 4, action: 'Alternative: trazodone 25–50 mg, gabapentin (if comorbid pain), or melatonin 0.5–3 mg; avoid benzodiazepines and Z-drugs long-term', criteria: 'Improvement with combined approach?', nextIfYes: 'Continue; plan for medication taper', nextIfNo: 'Proceed to step 5' },
      { step: 5, action: 'Sleep specialist referral: formal polysomnography if sleep apnea suspected; consider comorbid sleep disorder' },
    ],
    ['Excessive daytime sleepiness with snoring (sleep apnea)', 'Parasomnia with injury risk', 'Narcolepsy symptoms', 'Dependence on benzodiazepines or Z-drugs', 'Insomnia with suicidal ideation'],
    'CBT-I (6–8 sessions): sleep restriction + stimulus control + cognitive therapy',
    'Low-dose doxepin (3–6 mg), suvorexant (10–20 mg), or ramelteon (8 mg)',
    ['Failed CBT-I + pharmacotherapy — sleep medicine', 'Suspected sleep apnea — sleep study', 'Chronic benzodiazepine/Z-drug dependence — psychiatry/addiction', 'Comorbid psychiatric disorder — psychiatry'],
    'AASM 2023 Insomnia Guidelines; ACP 2016',
    'Insomnia treatment works best with a behavioral approach called CBT-I, which retrains your brain for better sleep. It is more effective long-term than sleeping pills. If medicine is needed, your doctor picks safe options used short-term.',
  ),
};

// ---------------------------------------------------------------------------
// Utility Functions
// ---------------------------------------------------------------------------

/** Get a single algorithm by ID */
export function getAlgorithm(id: string): AlgorithmEntry | undefined {
  return ALGORITHM_ENTRIES[id];
}

/** Search algorithms by name, presentation, or category keyword */
export function searchAlgorithms(query: string): AlgorithmEntry[] {
  const q = query.toLowerCase();
  return Object.values(ALGORITHM_ENTRIES).filter(a =>
    a.name.toLowerCase().includes(q) ||
    a.nameEs.toLowerCase().includes(q) ||
    a.presentation.toLowerCase().includes(q) ||
    a.category.toLowerCase().includes(q) ||
    a.firstLineTherapy.toLowerCase().includes(q) ||
    a.redFlags.some(f => f.toLowerCase().includes(q)) ||
    a.guidelineSource.toLowerCase().includes(q)
  );
}

/** Get all algorithms in a given category */
export function getAlgorithmsByCategory(category: AlgorithmEntry['category']): AlgorithmEntry[] {
  return Object.values(ALGORITHM_ENTRIES).filter(a => a.category === category);
}

/** Return total number of algorithms in the database */
export function getAlgorithmCount(): number {
  return Object.keys(ALGORITHM_ENTRIES).length;
}
