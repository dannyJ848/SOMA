import { EducationalContent } from '../../types';

/**
 * Heart Failure Classification
 *
 * Educational content on heart failure classification systems including
 * NYHA functional classification, ACC/AHA staging, and ejection fraction-based
 * categorization (HFrEF, HFmrEF, HFpEF).
 */
export const heartFailureClassification: EducationalContent = {
  id: 'heart-failure-classification',
  type: 'concept',
  name: 'Heart Failure Classification',
  nameEs: 'Clasificacion de la Insuficiencia Cardiaca',
  alternateNames: ['HF Staging', 'Heart Failure Types', 'Congestive Heart Failure Classification'],

  levels: {
    1: {
      level: 1,
      summary: 'Heart failure means the heart cannot pump blood as well as it should, and doctors classify it by how much it affects daily activities and how well the heart squeezes.',
      explanation:
        'Heart failure does not mean the heart has stopped — it means the heart is weaker than normal and cannot pump enough blood to meet the body\'s needs. ' +
        'This can cause tiredness, shortness of breath, and swelling in the legs and feet.\n\n' +
        'Doctors classify heart failure in two main ways:\n\n' +
        '**By Symptoms (NYHA Classes):**\n' +
        '- **Class I**: No symptoms. You can do normal activities without getting short of breath or tired.\n' +
        '- **Class II**: Mild symptoms. Normal activities like climbing stairs cause some shortness of breath.\n' +
        '- **Class III**: Moderate symptoms. Even light activities like walking across a room cause symptoms.\n' +
        '- **Class IV**: Severe symptoms. You have shortness of breath even while resting.\n\n' +
        '**By How Well the Heart Pumps (Ejection Fraction):**\n' +
        'The ejection fraction (EF) is the percentage of blood pumped out of the heart with each beat. Normal is 55-70%. ' +
        'In heart failure, the EF may be reduced (weak pump) or preserved (stiff heart that does not fill properly).\n\n' +
        'Understanding the type and severity of heart failure helps doctors choose the right treatment.',
      keyTerms: [
        { term: 'Heart failure', definition: 'A condition where the heart cannot pump enough blood to meet the body\'s needs', pronunciation: 'hart FAYL-yur' },
        { term: 'Ejection fraction', definition: 'The percentage of blood pumped out of the heart with each beat; normal is 55-70%', pronunciation: 'ee-JEK-shun FRAK-shun' },
        { term: 'NYHA class', definition: 'A system that rates heart failure severity from I (no symptoms) to IV (symptoms at rest)' },
      ],
      analogies: [
        'Think of the heart as a water pump in your house. Heart failure is when the pump gets weaker and cannot push enough water through the pipes.',
        'NYHA classes are like grades on a test — Class I is the best (no symptoms) and Class IV is the worst (symptoms at rest).',
      ],
      patientCounselingPoints: [
        'Heart failure is a chronic condition but can be managed with medications and lifestyle changes.',
        'Monitor your weight daily — sudden weight gain may mean fluid is building up.',
        'Limit salt intake to help reduce fluid retention and swelling.',
      ],
    },

    2: {
      level: 2,
      summary: 'Heart failure is classified by ejection fraction (HFrEF, HFmrEF, HFpEF), NYHA functional class (I-IV), and ACC/AHA stage (A-D), each providing different clinical information.',
      explanation:
        '**Ejection Fraction-Based Classification:**\n\n' +
        '- **HFrEF (Heart Failure with Reduced Ejection Fraction)**: EF <= 40%. The heart muscle is weakened and cannot contract forcefully enough. ' +
        'Also called "systolic heart failure." Most common causes: coronary artery disease, dilated cardiomyopathy.\n\n' +
        '- **HFmrEF (Heart Failure with Mildly Reduced EF)**: EF 41-49%. An intermediate category. These patients may respond to HFrEF therapies and ' +
        'may transition to either HFrEF or HFpEF over time.\n\n' +
        '- **HFpEF (Heart Failure with Preserved EF)**: EF >= 50%. The heart contracts normally but is stiff and does not fill properly. ' +
        'Also called "diastolic heart failure." More common in elderly women with hypertension, obesity, and diabetes.\n\n' +
        '**NYHA Functional Classification:**\n' +
        '- Class I: No limitation of physical activity\n' +
        '- Class II: Slight limitation — comfortable at rest, ordinary activity causes symptoms\n' +
        '- Class III: Marked limitation — comfortable at rest, less than ordinary activity causes symptoms\n' +
        '- Class IV: Unable to carry out any physical activity without symptoms; symptoms at rest\n\n' +
        '**ACC/AHA Staging System:**\n' +
        'Unlike NYHA (which can change), these stages only progress forward:\n' +
        '- **Stage A**: At risk for HF but no structural disease or symptoms (e.g., hypertension, diabetes)\n' +
        '- **Stage B**: Structural heart disease but no symptoms (e.g., previous MI, reduced EF, valve disease)\n' +
        '- **Stage C**: Structural disease with current or prior symptoms\n' +
        '- **Stage D**: Refractory HF requiring specialized interventions (advanced therapies, transplant, palliative care)',
      keyTerms: [
        { term: 'HFrEF', definition: 'Heart failure with reduced ejection fraction (EF <= 40%), also called systolic heart failure' },
        { term: 'HFpEF', definition: 'Heart failure with preserved ejection fraction (EF >= 50%), also called diastolic heart failure' },
        { term: 'HFmrEF', definition: 'Heart failure with mildly reduced ejection fraction (EF 41-49%), an intermediate category' },
        { term: 'ACC/AHA stages', definition: 'A progressive staging system (A through D) that classifies heart failure from risk factors to refractory disease' },
        { term: 'NYHA functional class', definition: 'Classification of symptom severity from I (no limitation) to IV (symptoms at rest)' },
      ],
      examples: [
        'A 65-year-old man with prior MI, EF of 30%, and dyspnea on exertion has HFrEF, NYHA Class II-III, ACC/AHA Stage C.',
        'A 75-year-old woman with hypertension, EF of 60%, but dyspnea climbing one flight of stairs has HFpEF, NYHA Class II.',
      ],
    },

    3: {
      level: 3,
      summary: 'Heart failure classification integrates hemodynamic profiles (Forrester/Stevenson), biomarkers (BNP/NT-proBNP), imaging parameters, and the Universal Definition to guide diagnostic and therapeutic decisions.',
      explanation:
        '**Hemodynamic Classification (Stevenson Profiles):**\n' +
        'Based on clinical assessment of congestion ("wet" vs. "dry") and perfusion ("warm" vs. "cold"):\n' +
        '- **Profile A (Warm-Dry)**: Compensated, no congestion, adequate perfusion\n' +
        '- **Profile B (Warm-Wet)**: Congested but adequately perfused — most common decompensated profile\n' +
        '- **Profile C (Cold-Wet)**: Congested and hypoperfused — worst prognosis, may need inotropes\n' +
        '- **Profile L (Cold-Dry)**: Hypoperfused without congestion — may need volume or inotropic support\n\n' +
        '**Universal Definition of Heart Failure (2021):**\n' +
        'HF is defined as a clinical syndrome with symptoms and/or signs caused by a structural and/or functional cardiac abnormality ' +
        'and corroborated by at least one of: elevated natriuretic peptides, or objective evidence of cardiogenic pulmonary or systemic congestion.\n\n' +
        '**Biomarker Classification:**\n' +
        '- BNP >= 100 pg/mL or NT-proBNP >= 300 pg/mL supports acute HF diagnosis\n' +
        '- Serial measurements guide treatment response\n' +
        '- NT-proBNP is not cleared by neprilysin, making it preferred for monitoring patients on sacubitril/valsartan\n\n' +
        '**Echocardiographic Parameters:**\n' +
        '- LVEF by biplane Simpson method (gold standard for 2D echo)\n' +
        '- Diastolic function grading (I-III) using E/A ratio, E/e\' ratio, LA volume index, TR velocity\n' +
        '- Global longitudinal strain (GLS): More sensitive than EF for detecting subclinical dysfunction; normal < -18%\n\n' +
        '**HFpEF Diagnostic Scores:**\n' +
        '- **H2FPEF score**: Heavy (BMI >30), Hypertensive, AFib, Pulmonary hypertension (PA systolic >35), Elder (>60), Filling pressure (E/e\' >9)\n' +
        '- **HFA-PEFF algorithm**: Step 1 (pretest), Step 2 (echo/BNP), Step 3 (diastolic stress test), Step 4 (invasive hemodynamics)\n\n' +
        '**Right Heart Failure:**\n' +
        'Often occurs secondary to left HF but can be isolated (RV infarction, pulmonary hypertension, ARVC). Key features: JVD, hepatomegaly, ' +
        'peripheral edema without pulmonary congestion. RV function assessed by TAPSE (< 17 mm = dysfunction), RV FAC, and RV free wall strain.',
      keyTerms: [
        { term: 'Stevenson profiles', definition: 'Hemodynamic classification of HF based on congestion (wet/dry) and perfusion (warm/cold), guiding acute management' },
        { term: 'BNP/NT-proBNP', definition: 'Natriuretic peptide biomarkers released in response to ventricular wall stress; elevated in heart failure' },
        { term: 'Global longitudinal strain (GLS)', definition: 'Speckle-tracking echocardiography measure of myocardial deformation; more sensitive than EF for detecting subclinical dysfunction' },
        { term: 'E/e\' ratio', definition: 'Ratio of mitral inflow E velocity to tissue Doppler e\' velocity; correlates with LV filling pressure. E/e\' > 14 suggests elevated filling pressures' },
        { term: 'H2FPEF score', definition: 'Clinical prediction score for HFpEF using six variables: obesity, hypertension, AF, pulmonary hypertension, age, and filling pressure' },
        { term: 'TAPSE', definition: 'Tricuspid annular plane systolic excursion; a simple measure of RV systolic function. < 17 mm indicates RV dysfunction' },
      ],
      examples: [
        'A patient presenting with dyspnea, bilateral crackles, warm extremities, and JVD — Stevenson Profile B (warm-wet). Start IV diuretics.',
        'A post-MI patient with cold extremities, hypotension, elevated lactate, and pulmonary edema — Profile C (cold-wet). May need inotropes plus diuretics.',
      ],
      clinicalNotes: 'The Stevenson classification remains the most practical bedside tool for acute HF management. The H2FPEF and HFA-PEFF scores have improved diagnosis of HFpEF, which was historically a diagnosis of exclusion.',
    },

    4: {
      level: 4,
      summary: 'Advanced HF classification incorporates invasive hemodynamics, cardiopulmonary exercise testing, multi-organ risk scores (INTERMACS, SHFM), and phenotypic clustering to guide advanced therapy selection.',
      explanation:
        '**Invasive Hemodynamic Assessment:**\n' +
        'Right heart catheterization (Swan-Ganz) provides definitive hemodynamic profiling:\n' +
        '- **Cardiac index (CI)**: Normal >= 2.5 L/min/m2. CI < 2.2 = cardiogenic shock if symptomatic\n' +
        '- **Pulmonary capillary wedge pressure (PCWP)**: Normal <= 15 mmHg. Elevated = left-sided congestion\n' +
        '- **Pulmonary artery pulsatility index (PAPi)**: (sPAP - dPAP)/CVP. PAPi < 1.85 predicts RV failure post-LVAD\n' +
        '- **Cardiac power output (CPO)**: MAP x CO / 451. Most potent hemodynamic predictor of in-hospital mortality in cardiogenic shock. CPO < 0.6 W = poor prognosis\n\n' +
        '**Cardiopulmonary Exercise Testing (CPET):**\n' +
        '- Peak VO2: Gold standard for functional capacity. < 12-14 mL/kg/min (or <50% predicted) on beta-blocker = transplant listing criterion\n' +
        '- VE/VCO2 slope: Ventilatory efficiency. >36 = poor prognosis independent of peak VO2\n' +
        '- Exercise oscillatory ventilation: Cheyne-Stokes pattern during exercise = poor prognosis\n\n' +
        '**INTERMACS Profiles (for advanced HF):**\n' +
        '- Profile 1: Critical cardiogenic shock ("crash and burn")\n' +
        '- Profile 2: Progressive decline on inotropes ("sliding on inotropes")\n' +
        '- Profile 3: Stable but inotrope-dependent ("dependent stability")\n' +
        '- Profile 4: Resting symptoms on oral therapy ("frequent flyer")\n' +
        '- Profile 5: Exertion intolerant ("housebound")\n' +
        '- Profile 6: Exertion limited ("walking wounded")\n' +
        '- Profile 7: Advanced NYHA III ("placeholder")\n\n' +
        '**Risk Prediction Models:**\n' +
        '- **Seattle Heart Failure Model (SHFM)**: Predicts 1-5 year survival using clinical, laboratory, device, and medication variables\n' +
        '- **MAGGIC score**: Meta-Analysis Global Group in Chronic HF risk score\n' +
        '- **MELD-XI**: Modified MELD score (without INR) predicting outcomes in HF with renal/hepatic dysfunction\n\n' +
        '**HFpEF Phenotyping:**\n' +
        'Machine learning clustering has identified distinct HFpEF phenogroups:\n' +
        '- Obesity-cardiometabolic phenotype: Younger, obese, diabetic, lower NT-proBNP\n' +
        '- Aging-fibrosis phenotype: Older, more AF, higher filling pressures, worse outcomes\n' +
        '- Pulmonary hypertension phenotype: Combined pre- and post-capillary PH, worst prognosis\n\n' +
        '**Cardiogenic Shock Classification (SCAI Stages):**\n' +
        '- Stage A: At risk (e.g., large MI without hemodynamic compromise)\n' +
        '- Stage B: Beginning shock (relative hypotension, tachycardia without hypoperfusion)\n' +
        '- Stage C: Classic cardiogenic shock (hypoperfusion requiring intervention)\n' +
        '- Stage D: Deteriorating (failure to respond to initial interventions)\n' +
        '- Stage E: Extremis (cardiac arrest with ongoing CPR, refractory to all interventions)',
      keyTerms: [
        { term: 'INTERMACS profiles', definition: 'Seven-level classification of advanced HF severity, from critical cardiogenic shock (1) to advanced NYHA III (7), guiding mechanical circulatory support decisions' },
        { term: 'Peak VO2', definition: 'Maximum oxygen consumption during exercise, the gold standard for functional capacity in HF. <12-14 mL/kg/min suggests transplant candidacy' },
        { term: 'Cardiac power output', definition: 'Product of MAP and CO divided by 451; the strongest hemodynamic predictor of mortality in cardiogenic shock' },
        { term: 'SCAI shock stages', definition: 'Five-stage classification of cardiogenic shock severity (A through E) developed by the Society for Cardiovascular Angiography and Interventions' },
        { term: 'PAPi', definition: 'Pulmonary artery pulsatility index; ratio predicting RV failure post-LVAD implantation. PAPi < 1.85 is concerning' },
      ],
      clinicalNotes: 'INTERMACS profiling is essential for mechanical circulatory support decision-making. Profile 1-3 patients are candidates for LVAD as bridge to transplant or destination therapy. SCAI shock staging has standardized cardiogenic shock communication and helps guide escalation of mechanical support.',
    },

    5: {
      level: 5,
      summary: 'Expert-level HF classification leverages multi-omics profiling, AI-driven phenotyping, novel biomarker panels, and systems biology approaches to enable precision heart failure medicine.',
      explanation:
        '**Precision HF Classification — Multi-Omics:**\n' +
        '- **Genomics**: Titin truncating variants (TTNtv) found in ~25% of dilated cardiomyopathy, with implications for arrhythmia risk and recovery potential. ' +
        'Lamin A/C mutations (LMNA) associated with aggressive course requiring early ICD consideration.\n' +
        '- **Transcriptomics**: RNA sequencing of endomyocardial biopsies identifies distinct gene expression profiles correlating with response to GDMT and recovery.\n' +
        '- **Proteomics**: High-throughput plasma proteomics (SomaScan, Olink) identifies novel protein signatures beyond BNP for HF subtyping and prognostication.\n' +
        '- **Metabolomics**: Acylcarnitine profiles, branched-chain amino acids, and trimethylamine N-oxide (TMAO) levels provide metabolic phenotyping.\n\n' +
        '**AI-Driven Phenotyping:**\n' +
        '- Unsupervised machine learning (k-means, hierarchical clustering, latent class analysis) on large HF registries identifies 3-5 clinically distinct phenogroups.\n' +
        '- Deep learning on ECG, echo, and clinical data predicts HF phenotype transitions and treatment response.\n' +
        '- Digital phenotyping using wearable devices (accelerometry, heart rate variability) detects early decompensation.\n\n' +
        '**Novel Biomarker Panels:**\n' +
        '- sST2 (soluble suppression of tumorigenicity 2): Reflects myocardial fibrosis and inflammation; additive prognostic value to NT-proBNP\n' +
        '- Galectin-3: Marker of cardiac fibrosis; predicts adverse remodeling\n' +
        '- High-sensitivity troponin: Chronic elevation in HF reflects ongoing myocardial injury\n' +
        '- GDF-15: Growth differentiation factor-15; integrative marker of metabolic stress, inflammation, and prognosis\n' +
        '- MicroRNAs: miR-423-5p, miR-126 emerging as circulating biomarkers for HF diagnosis and prognosis\n\n' +
        '**HFpEF — Emerging Understanding:**\n' +
        '- Microvascular inflammation hypothesis: Systemic comorbidity-driven endothelial inflammation leads to myocardial fibrosis and stiffening\n' +
        '- Titin phosphorylation: Hypophosphorylation of the giant sarcomeric protein titin increases passive myocardial stiffness in HFpEF\n' +
        '- Epicardial adipose tissue: Paracrine signaling from epicardial fat contributes to myocardial fibrosis and diastolic dysfunction\n\n' +
        '**Advanced Hemodynamic Phenotyping:**\n' +
        '- Pressure-volume loop analysis (invasive conductance catheter): Gold standard for assessment of systolic and diastolic function, ventricular-arterial coupling, and contractile reserve\n' +
        '- End-systolic pressure-volume relationship (ESPVR): Load-independent measure of contractility\n' +
        '- Effective arterial elastance (Ea): Measure of vascular load; Ea/Ees ratio reflects ventricular-arterial coupling\n\n' +
        '**Future Directions:**\n' +
        '- Integration of multi-omics with clinical data through systems biology frameworks\n' +
        '- N-of-1 trials guided by individual patient phenotyping\n' +
        '- Implantable hemodynamic sensors (CardioMEMS) for real-time classification and treatment adjustment\n' +
        '- Gene therapy approaches targeting specific HF subtypes (SERCA2a, S100A1, adenylyl cyclase 6)',
      keyTerms: [
        { term: 'TTNtv', definition: 'Titin truncating variants — the most common genetic cause of dilated cardiomyopathy, found in ~25% of DCM cases' },
        { term: 'sST2', definition: 'Soluble ST2 — biomarker reflecting myocardial fibrosis and inflammation with additive prognostic value to natriuretic peptides' },
        { term: 'Pressure-volume loop analysis', definition: 'Invasive gold standard for characterizing ventricular systolic and diastolic function, contractility, and ventricular-arterial coupling' },
        { term: 'Digital phenotyping', definition: 'Use of wearable sensor data (activity, heart rate variability) to continuously characterize HF status and detect decompensation' },
        { term: 'Ventricular-arterial coupling', definition: 'The relationship between ventricular contractility (Ees) and vascular load (Ea); Ea/Ees ratio near 1.0 indicates optimal coupling' },
      ],
      clinicalNotes: 'Precision HF medicine is moving beyond EF-based classification toward molecular and phenotypic subtyping. TTNtv-positive DCM patients may have better recovery potential on GDMT. The GUIDE-HF trial showed CardioMEMS-guided management reduced HF events in NYHA II-IV, though pre-COVID subgroup analysis was the primary positive signal. Multi-omics integration remains primarily research-based but is increasingly informing clinical trial design and patient selection.',
    },
  },

  media: [
    { id: 'hf-classification-overview', type: 'diagram', filename: 'hf-classification-systems.svg', title: 'Heart Failure Classification Systems', description: 'Comparison of NYHA, ACC/AHA, and EF-based HF classification' },
    { id: 'stevenson-profiles', type: 'diagram', filename: 'stevenson-hemodynamic-profiles.svg', title: 'Stevenson Hemodynamic Profiles', description: 'Four-quadrant classification of HF by congestion and perfusion' },
  ],
  citations: [
    { id: 'heidenreich-2022', type: 'article', title: '2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure', authors: ['Heidenreich, P.A.', 'Bozkurt, B.'], source: 'Circulation' },
    { id: 'mcdonagh-2021', type: 'article', title: '2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure', authors: ['McDonagh, T.A.', 'Metra, M.'], source: 'European Heart Journal' },
  ],
  crossReferences: [
    { targetId: 'heart-failure-management', targetType: 'concept', relationship: 'related', label: 'Heart Failure Management' },
    { targetId: 'echocardiography', targetType: 'concept', relationship: 'related', label: 'Echocardiography' },
    { targetId: 'cardiac-arrhythmias', targetType: 'concept', relationship: 'see-also', label: 'Cardiac Arrhythmias' },
  ],
  tags: {
    systems: ['cardiovascular'],
    topics: ['heart-failure', 'classification', 'cardiology'],
    keywords: ['heart failure', 'HFrEF', 'HFpEF', 'NYHA', 'ejection fraction', 'Stevenson profiles', 'INTERMACS'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },
  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published',
};
