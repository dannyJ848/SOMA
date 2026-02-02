/**
 * Comprehensive Pathology Encyclopedia Entries
 * 
 * Transcribed from OpenStax Anatomy & Physiology (CC BY 4.0)
 * and NCBI StatPearls (Open Access)
 * 
 * Covers common and important pathological conditions across all organ systems
 */

import type { EncyclopediaEntry } from '../types';

// ═══════════════════════════════════════════════════════════════════════════════
// CARDIOVASCULAR PATHOLOGY
// ═══════════════════════════════════════════════════════════════════════════════

export const coronaryArteryDiseaseEntry: EncyclopediaEntry = {
  entryId: 'coronary-artery-disease',
  name: 'Coronary Artery Disease (CAD)',
  entryType: 'condition',
  category: 'cardiovascular',
  summary: 'Narrowing or blockage of coronary arteries due to atherosclerosis, leading to reduced blood flow to the heart muscle.',
  overview: {
    patient: 'Coronary artery disease (CAD) is the most common type of heart disease. It happens when cholesterol and other substances build up in the walls of the arteries that supply blood to your heart, forming plaque. This buildup narrows the arteries and reduces blood flow to your heart muscle. When the heart doesn\'t get enough oxygen-rich blood, you may feel chest pain (angina) or have a heart attack. Risk factors include high blood pressure, high cholesterol, smoking, diabetes, obesity, and family history.',
    intermediate: 'Coronary artery disease results from atherosclerosis of the epicardial coronary arteries. Atherosclerotic plaques consist of lipid-rich necrotic core, fibrous cap, and inflammatory cells. Plaque rupture or erosion leads to thrombosis, causing acute coronary syndromes (STEMI, NSTEMI, unstable angina). Chronic stable angina occurs with predictable exertional chest pain relieved by rest. Risk factors include dyslipidemia (elevated LDL, low HDL), hypertension, cigarette smoking, diabetes mellitus, obesity, sedentary lifestyle, and family history of premature CAD. Diagnosis involves stress testing, coronary CT angiography, or invasive coronary angiography. Treatment includes lifestyle modification, antiplatelet agents, statins, beta-blockers, ACE inhibitors, and revascularization (PCI or CABG) when indicated.',
    professional: 'Coronary artery disease (CAD) encompasses stable ischemic heart disease and acute coronary syndromes (ACS). Pathophysiology: Endothelial dysfunction → lipid retention (subendothelial LDL oxidation) → inflammatory response (monocyte recruitment, foam cell formation) → smooth muscle cell migration → fibrous cap formation. Plaque types: thin-cap fibroatheroma (vulnerable), thick-cap fibroatheroma (stable), calcified nodule, fibrocalcific plaque. ACS pathophysiology: plaque rupture (65-70%), plaque erosion (30-35%), calcified nodule (2-5%) → subendothelial collagen/thrombogenic lipids exposed → platelet adhesion/activation/aggregation → thrombin generation → fibrin deposition → thrombus formation. Clinical presentations: Stable angina (predictable exertional chest pain, >70% stenosis), Unstable angina/NSTEMI (plaque rupture, partial thrombotic occlusion, elevated troponin in NSTEMI), STEMI (complete occlusion, transmural infarction). Modifiable risk factors: dyslipidemia (ApoB-containing lipoproteins), hypertension, diabetes, smoking, obesity, sedentary lifestyle, diet. Non-modifiable: age, male sex, family history. Diagnostics: ECG (ST changes, Q waves), troponins (cTnI, cTnT - highly sensitive/specific for myocardial necrosis), stress testing (exercise or pharmacologic with imaging), coronary CTA (anatomical assessment, calcium scoring), invasive coronary angiography (gold standard for luminal assessment, FFR/iFR for functional significance). Management: Anti-ischemic (beta-blockers, nitrates, CCBs), antiplatelet (aspirin, P2Y12 inhibitors - clopidogrel/ticagrelor/prasugrel), anticoagulation (heparin, bivalirudin in ACS), high-intensity statins (atorvastatin 40-80mg, rosuvastatin 20-40mg), ACE-I/ARB (particularly with diabetes, CKD, LV dysfunction), SGLT2 inhibitors/GLP-1 agonists (diabetes with ASCVD). Revascularization: PCI with DES (drug-eluting stents) for suitable anatomy, CABG for left main disease, triple vessel disease, or diabetes with multivessel disease.',
  },
  content: [
    {
      title: 'Pathophysiology and Plaque Biology',
      content: {
        patient: `CAD develops over many years. Fatty deposits called plaque build up inside your coronary arteries. This process starts when the inner lining of the artery is damaged - by high blood pressure, smoking, or high cholesterol. Cholesterol particles enter the artery wall and become oxidized. Your immune system sends white blood cells to clean up the cholesterol, but they get overwhelmed and turn into "foam cells" filled with fat. These cells die and release their contents, forming a fatty core. The body tries to cover this with a fibrous cap. If the cap is thin and unstable, it can rupture, causing a blood clot that blocks the artery.`,
        intermediate: `Atherosclerosis is a chronic inflammatory disease of the arterial wall. Key steps: (1) Endothelial dysfunction from risk factors reduces nitric oxide bioavailability and increases permeability. (2) LDL particles enter intima and become oxidized (oxLDL). (3) oxLDL triggers expression of adhesion molecules (VCAM-1, ICAM-1) recruiting monocytes. (4) Monocytes differentiate into macrophages and uptake oxLDL via scavenger receptors (CD36, SR-A) becoming foam cells. (5) Foam cells release pro-inflammatory cytokines (IL-1β, TNF-α), growth factors (PDGF), and metalloproteinases (MMPs) that degrade extracellular matrix. (6) Smooth muscle cells migrate from media to intima, proliferate, and produce collagen forming fibrous cap. (7) Necrotic core forms from dead foam cells and lipid accumulation. Plaque rupture occurs when MMPs (MMP-1, MMP-8, MMP-13) degrade collagen in thin fibrous caps (<65 μm), especially at shoulder regions.`,
        professional: `Atherosclerotic plaque morphology and vulnerability:

Stages (Stary classification): I (isolated foam cells), II (fatty streak), III (pre-atheroma - extracellular lipid pools), IV (atheroma - necrotic core), V (fibroatheroma - thick fibrous cap), VI (complicated - rupture/hemorrhage/thrombosis), VII (calcified), VIII (fibrotic).

Vulnerable plaque characteristics: Large necrotic core (>40% plaque volume), thin fibrous cap (<65 μm), high macrophage infiltration, reduced smooth muscle cells, expansive remodeling (Glagov phenomenon - outward growth preserving lumen initially), intraplaque hemorrhage (from vasa vasorum), neovascularization, spotty calcification.

Cellular mechanisms: Endothelial activation → leukocyte recruitment (selectin-mediated rolling, integrin activation, transmigration) → monocyte differentiation (classical CD14++CD16- to inflammatory CD14+CD16+ to patrolling CD14+CD16++ subsets) → foam cell formation (uptake via CD36, SR-A1, SR-A2; efflux via ABCA1, ABCG1 to apoA-I/HDL) → efferocytosis impairment (MerTK cleavage, CD47 "don't eat me" signals) → secondary necrosis → inflammasome activation (NLRP3) → IL-1β/IL-18 release → SMC phenotypic switching (contractile to synthetic) → collagen synthesis (type I, III) and degradation (MMP-1, -8, -9, -13 from macrophages and SMCs).

Thrombosis mechanisms: Plaque rupture exposes thrombogenic core (tissue factor, collagen, von Willebrand factor) → platelet adhesion (GPIb-IX-V to vWF, GPVI to collagen) → platelet activation (ADP, thromboxane A2, thrombin via PAR-1) → integrin activation (GPIIb/IIIa) → platelet aggregation (fibrinogen bridges) → coagulation cascade activation (tissue factor-FVIIa complex, FXa, thrombin) → fibrin formation → thrombus propagation. Plaque erosion involves endothelial denudation without rupture, more common in women and smokers, often with less calcification.`,
      },
    },
    {
      title: 'Clinical Presentations',
      content: {
        patient: `CAD can present in different ways:

Stable Angina: Chest pain or discomfort that happens when your heart works harder, like during exercise or stress. It usually goes away with rest or nitroglycerin. The pain may feel like pressure, squeezing, or heaviness in the chest.

Heart Attack (Myocardial Infarction): When a blood clot completely blocks a coronary artery, part of the heart muscle is damaged from lack of oxygen. Symptoms include severe chest pain, shortness of breath, sweating, nausea, and pain in the arm, jaw, or back. This is a medical emergency.

Silent Ischemia: Some people, especially those with diabetes, may have blocked arteries but no symptoms.`,
        intermediate: `Clinical spectrum of CAD:

Stable Ischemic Heart Disease (SIHD): Chronic predictable exertional angina with stable plaque. Canadian Cardiovascular Society (CCS) classification: I (angina with strenuous activity), II (slight limitation - walking >2 blocks or climbing >1 flight), III (marked limitation - walking 1-2 blocks), IV (angina at rest). Equivalent symptoms: dyspnea, fatigue, indigestion, particularly in elderly, women, and diabetics.

Acute Coronary Syndromes (ACS): Unstable angina (UA), Non-ST-elevation MI (NSTEMI), ST-elevation MI (STEMI). Unified pathophysiology: plaque rupture/erosion + thrombosis + distal embolization. Differentiation based on ECG and troponins: STEMI (persistent ST elevation >1mm, new LBBB, needs emergent reperfusion), NSTEMI (ST depression, T wave inversion, or nonspecific ECG with elevated troponin), UA (similar symptoms but no troponin elevation).

Non-atherosclerotic CAD: Coronary vasospastic disorders (Prinzmetal's angina - transient ST elevation with vasospasm), spontaneous coronary artery dissection (SCAD, especially young women), coronary embolism (atrial fibrillation, infective endocarditis), vasculitis (Kawasaki disease in adults), anomalous coronary arteries.

Physical examination findings: Often normal in chronic stable angina. ACS may show diaphoresis, pallor, tachycardia or bradycardia, hypertension or hypotension, new S4 gallop (atrial kick into stiff ventricle), mitral regurgitation murmur (papillary muscle dysfunction), rales (heart failure), hypotension with inferior MI (right ventricular involvement).`,
        professional: `Detailed clinical presentations and differential diagnosis:

Typical angina (definite): (1) Substernal chest discomfort with characteristic quality and duration, (2) Provoked by exertion or emotional stress, (3) Relieved by rest or nitroglycerin within 5 minutes. Atypical angina (probable): meets 2 criteria. Non-anginal chest pain: meets ≤1 criterion.

ACS phenotypes: 
- STEMI: Complete coronary occlusion, ST elevation ≥1mm in 2 contiguous leads (≥2mm in V2-V3 for men <40y, ≥2.5mm for men ≥40y, ≥1.5mm for women) or new LBBB. Transmural infarction, Q waves develop. Door-to-balloon time <90 minutes goal.
- NSTEMI: Subendocardial or non-transmural infarction, partial occlusion or distal embolization. TIMI risk score (age, ≥3 CAD risk factors, known CAD, ASA use <7 days, severe angina, ST deviation, elevated cardiac markers) guides management. GRACE score predicts mortality.
- Unstable Angina: Clinical instability - crescendo angina (more frequent/severe/prolonged), angina at rest, new onset severe angina (within 2 months), post-MI angina. No biomarker elevation but high-risk features warrant invasive strategy.

Special populations:
- Women: More atypical symptoms (dyspnea, fatigue, indigestion, back/jaw pain), higher mortality with MI, more non-obstructive coronary arteries (INOCA) - microvascular angina, vasospastic disorders.
- Elderly: Silent ischemia more common, dyspnea predominant symptom, atypical presentations, higher mortality.
- Diabetics: 2-4x higher risk, more multivessel disease, silent ischemia due to autonomic neuropathy, higher complication rates.

Differential diagnosis: Non-cardiac mimics - GERD (burning pain, related to meals, relief with antacids), musculoskeletal chest wall pain (reproducible with palpation or movement), pulmonary causes (pulmonary embolism, pneumothorax, pneumonia), pericarditis (pleuritic pain, friction rub, diffuse ST elevation), aortic dissection (tearing pain, pulse deficits, BP difference), anxiety/panic disorder.`,
      },
    },
    {
      title: 'Diagnosis and Risk Stratification',
      content: {
        patient: `To diagnose CAD, doctors use several tests:

ECG (Electrocardiogram): Records your heart's electrical activity. Can show if you've had a heart attack or if your heart isn't getting enough oxygen.

Blood Tests: Check for troponin proteins that leak from damaged heart muscle. High levels suggest a heart attack.

Stress Test: You exercise while connected to a heart monitor to see if reduced blood flow causes symptoms or ECG changes.

Coronary Angiography: Special X-ray using dye injected through a catheter to see blockages in coronary arteries.

CT Scan: Can show calcium buildup in arteries (calcium score) and sometimes blockages.`,
        intermediate: `Diagnostic approach to CAD:

Non-invasive testing for symptomatic patients with intermediate pre-test probability: Exercise ECG (treadmill test) for patients who can exercise with interpretable ECG. Positive if ST depression ≥1mm, angina, hypotensive response, or complex ventricular arrhythmias. Imaging stress tests (more sensitive/specific): stress echocardiography (wall motion abnormalities), nuclear MPI SPECT (perfusion defects), PET (superior quantification, especially in obesity), cardiac MRI (perfusion and function). Pharmacologic stress for those who cannot exercise (dobutamine, adenosine, regadenoson).

Coronary CT angiography (CCTA): Excellent negative predictive value (>95%), anatomical assessment, calcium scoring (Agatston score - <100 low risk, 100-400 moderate, >400 high risk). Good for intermediate-risk patients, younger patients, suspected anomalous coronaries. Limitations: arrhythmia, severe calcification (blooming artifact), obesity, renal insufficiency (contrast).

Invasive coronary angiography: Gold standard for luminal assessment. Quantitative coronary analysis (QCA), fractional flow reserve (FFR ≤0.80 ischemic) and instantaneous wave-free ratio (iFR ≤0.89 ischemic) for functional significance of intermediate lesions (40-70% stenosis). Intravascular ultrasound (IVUS) and optical coherence tomography (OCT) for plaque characterization and stent optimization.

Biomarkers: Cardiac troponins (cTnI, cTnT) - highly sensitive and specific for myocardial necrosis. High-sensitivity troponins detect even minor injury. CK-MB less specific. BNP/NT-proBNP for heart failure assessment and prognosis.`,
        professional: `Comprehensive diagnostic algorithms and advanced imaging:

Pre-test probability (PTP) assessment using Diamond-Forrester or updated CAD consortium models incorporating age, sex, and symptom characteristics. PTP <15%: no testing. PTP 15-85%: non-invasive testing. PTP >85%: treat as CAD.

Functional testing comparison:
- Exercise ECG: Sensitivity 45-50%, specificity 85-90%, high specificity for multivessel disease when ST depression >2mm in multiple leads, downsloping, or prolonged recovery. Duke Treadmill Score (exercise time, ST deviation, angina) predicts prognosis.
- Stress echo: Sensitivity 80-85%, specificity 85-90%. Wall motion score index (WMSI). Can assess valvular function simultaneously. Contrast agents improve endocardial visualization.
- SPECT MPI: Sensitivity 85-90%, specificity 75-80%. Attenuation correction, prone imaging, and CAC integration improve specificity. SSD (summed stress difference) quantifies ischemic burden. Transient ischemic dilation (TID) suggests multivessel disease.
- PET Rb-82 or N-13 ammonia: Higher diagnostic accuracy, especially in obese patients, attenuation correction with CT, quantification of MBF (myocardial blood flow) and MFR (myocardial flow reserve).
- CMR: Stress perfusion (adenosine/regadenoson), LGE (late gadolinium enhancement) for scar, T1/T2 mapping for diffuse fibrosis/edema, T2* for iron/hemorrhage.

Invasive assessment:
- FFR: Hyperemic ratio of distal coronary pressure to aortic pressure using adenosine. FFR ≤0.80 indicates ischemia. FAME trials showed FFR-guided PCI improves outcomes vs angiography alone.
- iFR: Resting distal/aortic pressure ratio during wave-free period. iFR-SWEDEHEART showed non-inferiority to FFR. Hybrid approach: iFR 0.86-0.93 → FFR, outside this range defer (iFR >0.93) or treat (iFR <0.86).
- IVUS: Minimum lumen area (MLA) <4.0 mm² (left main <6.0 mm²) suggests significance. Plaque burden >70% predictive of events. Virtual histology IVUS characterizes plaque composition.
- OCT: 10x higher resolution than IVUS (10-15 μm). Excellent for stent optimization (expansion, apposition, edge dissection), plaque characterization, and guiding PCI of calcified lesions.

Risk stratification tools: SYNTAX score (angiographic complexity for CABG vs PCI decision), EuroSCORE (surgical risk), NCDR CathPCI Registry risk models, Mayo Clinic risk score for PCI.`,
      },
    },
    {
      title: 'Treatment and Management',
      content: {
        patient: `CAD treatment involves:

Lifestyle Changes: Stop smoking, eat a heart-healthy diet, exercise regularly, maintain healthy weight, control stress, limit alcohol.

Medications: 
- Aspirin: Prevents blood clots
- Statins: Lower cholesterol and stabilize plaque
- Beta-blockers: Slow heart rate, reduce angina
- Nitroglycerin: Relieves chest pain
- ACE inhibitors: Protect heart and kidneys

Procedures:
- Angioplasty/Stent: Balloon opens blocked artery, stent keeps it open
- Bypass Surgery (CABG): New routes created around blocked arteries using vessels from chest, leg, or arm

Cardiac rehabilitation after procedures helps recovery and prevents future problems.`,
        intermediate: `Medical therapy for CAD:

Anti-ischemic agents: Beta-blockers (first-line for chronic angina, reduce myocardial oxygen demand by lowering HR, BP, contractility; carvedilol, metoprolol succinate, bisoprolol), calcium channel blockers (verapamil, diltiazem - rate control; amlodipine - vasodilation), nitrates (nitroglycerin SL for acute angina, isosorbide mononitrate for chronic, act via NO → cGMP → vasodilation), ranolazine (late sodium current inhibitor, useful if beta-blockers contraindicated or inadequate). Ivabradine (If channel blocker) for heart rate reduction if beta-blockers not tolerated.

Antiplatelet therapy: Aspirin 81 mg daily (inhibits COX-1, thromboxane A2) - reduces MI, stroke, vascular death. P2Y12 inhibitors for dual antiplatelet therapy (DAPT) after ACS or PCI: clopidogrel (prodrug, CYP2C19 variability), ticagrelor (reversible, more potent, dyspnea/bradyarrhythmia side effects), prasugrel (irreversible, potent, bleeding risk). Duration: minimum 12 months after ACS/PCI, shorter (3-6 months) for stable CAD with high bleeding risk.

Lipid management: High-intensity statins (atorvastatin 40-80mg, rosuvastatin 20-40mg) - reduce LDL ≥50%, stabilize plaque, anti-inflammatory effects. Add ezetimibe if LDL ≥70 mg/dL on statin (IMPROVE-IT). PCSK9 inhibitors (evolocumab, alirocumab) for familial hypercholesterolemia or ASCVD with LDL ≥70 on maximally tolerated statin ± ezetimibe (FOURIER, ODYSSEY outcomes).

ACE inhibitors/ARBs: Reduce mortality in CAD with LV dysfunction, diabetes, CKD, or hypertension. Ramipril, perindopril particularly well-studied. ARBs if ACE-I cough/angioedema.

Revascularization: PCI with drug-eluting stents (DES) - second-generation everolimus/zotarolimus eluting stents preferred. CABG for left main disease, triple vessel disease, bifurcation LAD disease, diabetes with multivessel disease (FREEDOM trial). Hybrid approaches (mini-CABG LAD + PCI other vessels).`,
        professional: `Evidence-based management strategies:

GDMT (Guideline-Directed Medical Therapy) optimization: ISCHEMIA trial showed no mortality benefit from routine invasive strategy vs optimal medical therapy in stable CAD with moderate ischemia, though invasive approach better relieves angina and improves quality of life. All patients should receive: antiplatelet, high-intensity statin, beta-blocker (if prior MI or LV dysfunction), ACE-I/ARB (if diabetes, CKD, hypertension, or LV dysfunction), SGLT2 inhibitor or GLP-1 RA (if diabetes with ASCVD).

ACS management:
- STEMI: Primary PCI within 90 minutes (door-to-balloon) preferred over fibrinolysis. If PCI not available within 120 minutes, thrombolytics (tenecteplase preferred) with rescue PCI for failed reperfusion. Anticoagulation (UFH, enoxaparin, or bivalirudin during PCI). Glycoprotein IIb/IIIa inhibitors (eptifibatide, abciximab) for bail-out. Stent choice: DES (everolimus/zotarolimus) unless high bleeding risk requiring short DAPT.
- NSTEMI/UA: Risk stratification (GRACE score) guides early invasive (<24h for high-risk) vs conservative strategy. Anticoagulation (UFH, enoxaparin, fondaparinux, bivalirudin). Dual antiplatelet mandatory. High-risk features: elevated troponin, ST changes, GRACE >140, hemodynamic instability, malignant arrhythmias.

DAPT duration and management: ACC/AHA guidelines recommend minimum 12 months after ACS/PCI. DAPT score helps identify patients benefiting from extended (>12 months) DAPT (score ≥2) vs shortened (<12 months) for bleeding risk. De-escalation strategies: switching from potent P2Y12 to clopidogrel after 1-3 months in stable patients (TROPICAL-ACS, TOPIC trials). Platelet function testing or genetic testing for CYP2C19 loss-of-function variants controversial (not routinely recommended).

Secondary prevention: Complete smoking cessation (greatest single benefit). Mediterranean diet (PREDIMED trial) or DASH diet. Exercise 150 min/week moderate or 75 min/week vigorous. Weight management (BMI 18.5-24.9). Blood pressure <130/80 (ACC/AHA) or <140/90 (ESC). LDL <70 for very high risk (ESC 2019), <100 for high risk. Diabetes management with A1c target <7% individualized. Influenza and pneumococcal vaccination.

Special situations: Chronic total occlusion (CTO) - consider revascularization if symptoms refractory to medical therapy, large ischemic territory, or proven viability. Microvascular angina (INOCA) - treat with calcium channel blockers, nitrates, beta-blockers; consider ACE-I, statins, L-arginine. Coronary vasospastic disorders - calcium channel blockers first-line, nitrates second-line, avoid beta-blockers (unopposed alpha). Spontaneous coronary artery dissection (SCAD) - conservative management preferred, avoid aggressive intervention unless hemodynamic compromise, recurrence risk higher with intervention.`,
      },
    },
  ],
  anatomyLinks: [
    { structureId: 'coronary-arteries', structureName: 'Coronary Arteries', linkText: 'Coronary Arteries', relevance: 'Site of atherosclerosis' },
    { structureId: 'myocardium', structureName: 'Heart Muscle', linkText: 'Myocardium', relevance: 'Tissue affected by ischemia' },
    { structureId: 'left-ventricle', structureName: 'Left Ventricle', linkText: 'Left Ventricle', relevance: 'Most commonly affected chamber' },
  ],
  references: [
    {
      referenceId: 'openstax-ap-19-cad',
      type: 'textbook',
      title: 'Anatomy and Physiology - 19.4 Cardiac Physiology',
      authors: 'Betts JG, et al.',
      source: 'OpenStax',
      year: 2021,
      citation: 'Betts JG, et al. Anatomy and Physiology. OpenStax; 2021.',
    },
    {
      referenceId: 'statpearls-cad',
      type: 'textbook',
      title: 'Coronary Artery Disease',
      authors: 'Malik A, et al.',
      source: 'NCBI StatPearls',
      year: 2023,
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK564294/',
      citation: 'Malik A, et al. Coronary Artery Disease. StatPearls. NCBI; 2023.',
    },
    {
      referenceId: 'acc-aha-guideline-2021',
      type: 'guideline',
      title: '2021 ACC/AHA/SCAI Guideline for Coronary Artery Revascularization',
      authors: 'Writing Committee Members',
      source: 'Circulation',
      year: 2022,
      citation: '2021 ACC/AHA/SCAI Guideline for Coronary Artery Revascularization. Circulation. 2022;145(3):e18-e114.',
    },
  ],
  relatedEntries: [
    { entryId: 'heart-anatomy', entryType: 'anatomy', name: 'Heart Anatomy', relationship: 'part-of' },
    { entryId: 'myocardial-infarction', entryType: 'condition', name: 'Myocardial Infarction', relationship: 'causes' },
    { entryId: 'heart-failure', entryType: 'condition', name: 'Heart Failure', relationship: 'causes' },
    { entryId: 'cardiac-cycle', entryType: 'physiology', name: 'Cardiac Cycle', relationship: 'related-to' },
  ],
  searchMetadata: {
    primaryKeywords: ['coronary artery disease', 'CAD', 'atherosclerosis', 'angina', 'heart attack', 'myocardial infarction', 'ischemic heart disease'],
    secondaryKeywords: ['plaque', 'stenosis', 'revascularization', 'PCI', 'CABG', 'stent', 'bypass'],
    synonyms: ['ischemic heart disease', 'coronary heart disease', 'atherosclerotic cardiovascular disease', 'ASCVD'],
    tags: ['cardiology', 'cardiovascular', 'atherosclerosis', 'emergency', 'chronic'],
  },
};

export const heartFailureEntry: EncyclopediaEntry = {
  entryId: 'heart-failure',
  name: 'Heart Failure',
  entryType: 'condition',
  category: 'cardiovascular',
  summary: 'Clinical syndrome where the heart cannot pump enough blood to meet the body\'s needs, or can only do so with elevated filling pressures.',
  overview: {
    patient: 'Heart failure means your heart isn\'t pumping blood as well as it should. Your heart tries to compensate by working harder, but over time this can make the heart muscle stiff and weak. There are two main types: one where the heart can\'t pump effectively (reduced ejection fraction), and another where the heart pumps normally but can\'t relax and fill properly (preserved ejection fraction). Symptoms include shortness of breath, fatigue, swollen legs, and trouble breathing when lying down. Treatment includes medications, lifestyle changes, and sometimes devices or surgery.',
    intermediate: 'Heart failure (HF) is a clinical syndrome characterized by typical symptoms (dyspnea, ankle swelling, fatigue) and signs (elevated jugular venous pressure, pulmonary crackles, peripheral edema) caused by structural and/or functional cardiac abnormality resulting in elevated intracardiac pressures and/or inadequate cardiac output at rest and/or during stress. Classification by LVEF: HFrEF (≤40%), HFmrEF (41-49%), HFpEF (≥50%). HFrEF involves impaired contractility; HFpEF involves impaired relaxation and increased stiffness. Common causes: coronary artery disease, hypertension, cardiomyopathies, valvular disease, arrhythmias. Compensatory mechanisms initially maintain cardiac output but become maladaptive: Frank-Starling mechanism (increased preload), neurohormonal activation (SNS, RAAS), and myocardial remodeling (hypertrophy, dilation, fibrosis). NYHA functional classification guides severity and treatment decisions.',
    professional: 'Heart failure is a complex clinical syndrome resulting from any structural or functional impairment of ventricular filling or ejection of blood. ACC/AHA stages: A (at risk, no structural disease), B (structural disease, no symptoms), C (structural disease with prior/current symptoms), D (refractory symptoms requiring specialized interventions). Universal Definition (2021): Requires (1) HF symptoms and/or signs, (2) Evidence of structural/functional cardiac abnormality and/or elevated natriuretic peptides, (3) Response to HF treatment if diagnosis unclear. Pathophysiology: HFrEF - systolic dysfunction from myocyte loss (infarction), abnormal loading conditions (HTN, valvular), cardiomyocyte dysfunction (toxic, genetic); HFpEF - diastolic dysfunction from increased myocardial stiffness (hypertrophy, fibrosis), impaired relaxation, vascular dysfunction, chronotropic incompetence, and inflammation/comorbidities driving systemic microvascular dysfunction. Molecular mechanisms: neurohormonal activation (SNS → β-receptor downregulation/desensitization; RAAS → sodium/water retention, fibrosis; natriuretic peptide system counter-regulatory but overwhelmed), inflammatory cytokines (TNF-α, IL-6, IL-1β), oxidative stress, mitochondrial dysfunction, calcium handling abnormalities (SERCA2a downregulation, RyR2 hyperphosphorylation, phospholamban). Remodeling: concentric hypertrophy (pressure overload), eccentric hypertrophy (volume overload), progressive LV dilation (spherical remodeling), replacement fibrosis (scar), reactive fibrosis (interstitial).',
  },
  content: [
    {
      title: 'Classification and Phenotypes',
      content: {
        patient: `Heart failure is classified in several ways:

By EF (Ejection Fraction): This measures how much blood your heart pumps out with each beat.
- HFrEF (Reduced EF ≤40%): Heart can't pump effectively
- HFpEF (Preserved EF ≥50%): Heart pumps OK but can't relax and fill properly
- HFmrEF (Mildly Reduced 41-49%): In between

By Symptoms (NYHA Class):
- I: No symptoms with normal activity
- II: Comfortable at rest, slight limitation with activity
- III: Comfortable at rest, marked limitation with activity
- IV: Symptoms even at rest

By Stage (ACC/AHA):
- A: At risk but no heart disease yet
- B: Heart disease present but no symptoms
- C: Current or previous symptoms
- D: Advanced, symptoms at rest`,
        intermediate: `Heart failure classification systems:

By LVEF (ACC/AHA/HFSA):
- HFrEF (Heart Failure with reduced Ejection Fraction): LVEF ≤40%. Impaired contractility, eccentric remodeling, thin/dilated walls. Most clinical trial evidence. Neurohormonal antagonists beneficial.
- HFmrEF (Heart Failure with mildly reduced Ejection Fraction): LVEF 41-49%. Heterogeneous group, may have features of HFrEF or HFpEF. Some benefit from neurohormonal blockade.
- HFpEF (Heart Failure with preserved Ejection Fraction): LVEF ≥50%. Represents >50% of HF patients, especially elderly women with hypertension. Diastolic dysfunction, concentric remodeling, increased stiffness. No proven mortality-reducing therapy yet (PARAGON-HF neutral).
- HFimpEF (HF with improved EF): Previously HFrEF, now EF >40%. Continue GDMT even if EF improves (guideline recommendation).

NYHA Functional Classification (symptom severity):
- I: No limitation. Ordinary activity doesn't cause symptoms.
- II: Slight limitation. Comfortable at rest. Ordinary activity causes fatigue, dyspnea, palpitation, or angina.
- III: Marked limitation. Comfortable at rest. Less than ordinary activity causes symptoms.
- IV: Unable to carry out any physical activity without symptoms. Symptoms may be present even at rest.

ACC/AHA Staging (structural/functional progression):
- Stage A: At high risk, no structural heart disease or symptoms (hypertension, CAD, diabetes, family history). Preventive strategies.
- Stage B: Structural heart disease, no signs/symptoms (prior MI, LVH, low EF, valvular disease). ACE-I/ARB, beta-blockers if indicated.
- Stage C: Structural heart disease with prior or current symptoms. Full GDMT.
- Stage D: Refractory HF requiring specialized interventions (inotropes, mechanical support, transplant, hospice).`,
        professional: `Detailed HF phenotyping and emerging classifications:

HFpEF subphenotypes (cluster analysis from TOPCAT, I-PRESERVE trials):
- Phenotype 1: Younger, obese, diabetic, renal dysfunction, severe symptoms, highest NT-proBNP, poor outcomes
- Phenotype 2: Oldest, normotensive, atrial fibrillation, conduction disease, intermediate outcomes
- Phenotype 3: Youngest, non-obese, hypertensive, CAD, mildest symptoms, lowest NT-proBNP, best outcomes

Etiologic classification:
- Ischemic: Prior MI, hibernating myocardium, ischemic cardiomyopathy (dilated LV with EF reduction from CAD)
- Non-ischemic cardiomyopathies:
  - Dilated (DCM): Idiopathic (25-50% genetic - TTN truncating variants most common), familial, post-viral (myocarditis), alcoholic, chemotherapy-induced (anthracyclines - dose-dependent, trastuzumab - reversible), peripartum, tachycardia-induced
  - Hypertrophic (HCM): Sarcomeric protein mutations (MYBPC3, MYH7 most common), asymmetric septal hypertrophy, dynamic outflow obstruction
  - Restrictive (RCM): Infiltrative (amyloidosis - AL, ATTR, sarcoidosis), storage (hemochromatosis, Fabry), endomyocardial (Löffler, endomyocardial fibrosis)
  - Arrhythmogenic (ARVC): Desmosomal mutations (PKP2, DSP), fibrofatty replacement of RV, arrhythmia risk
  - Stress-induced (Takotsubo): Catecholamine surge, apical ballooning, transient, often post-menopausal women

Precipitating factors ("SHOCKED"): Substance abuse (alcohol, cocaine), Hypertension, Oxygen (hypoxia), non-Compliance (diet/meds), Knowledge (dietary indiscretion), Endocrine (thyroid, diabetes), Drugs (NSAIDs, CCBs, negative inotropes), arrhythmias, Infections, Rheumatic, Embolic (PE), Cardiac ischemia.

Hemodynamic profiles (Forrester classification): I (normal PCWP, normal CI), II (high PCWP, normal CI - "wet and warm"), III (normal PCWP, low CI - "dry and cold"), IV (high PCWP, low CI - "wet and cold"). Guides diuretic and inotrope use.`,
      },
    },
    {
      title: 'Pathophysiology',
      content: {
        patient: `In heart failure, your heart can't pump enough blood. At first, your body tries to help:

1. Your heart stretches more to pump harder (Frank-Starling mechanism) - works short-term but causes enlargement
2. Your nervous system activates (adrenaline) - speeds heart, tightens vessels - increases workload
3. Your kidneys hold onto salt and water - increases fluid but causes swelling

Over time, these compensations backfire. The heart muscle stiffens and weakens. Fluid backs up into your lungs (causing shortness of breath) and legs (causing swelling). This becomes a vicious cycle.`,
        intermediate: `Compensatory mechanisms in HF:

Frank-Starling mechanism: Increased preload (end-diastolic volume) stretches cardiac muscle, increasing contractility (up to a point - then descending limb). In failing heart, operates on flatter portion of curve, requiring higher filling pressures for same output.

Neurohormonal activation:
- Sympathetic nervous system: Norepinephrine release increases heart rate, contractility, and vascular tone. Chronic activation causes β-receptor downregulation and desensitization, arrhythmias, myocyte toxicity.
- RAAS: Reduced renal perfusion → renin release → angiotensin II (vasoconstriction, aldosterone release, myocardial remodeling) and aldosterone (sodium/water retention, fibrosis, endothelial dysfunction).
- ADH/Vasopressin: Released with baroreceptor unloading → water retention.
- Natriuretic peptides: ANP (atria) and BNP (ventricles) released with stretch → counter-regulatory (vasodilation, natriuresis, inhibit RAAS/SNS) but overwhelmed.

Myocardial remodeling: Progressive changes in cardiac structure and function. Molecular: fetal gene program reactivation (β-MHC, ANP), matrix metalloproteinases activation (extracellular matrix degradation), collagen deposition (fibrosis). Structural: myocyte hypertrophy, chamber dilation, wall thinning (eccentric) or thickening (concentric), progressive dysfunction.

Peripheral adaptations: Reduced skeletal muscle blood flow, endothelial dysfunction, anemia (CKD, hepcidin, chronic inflammation), cachexia (inflammatory cytokines, neurohormonal activation).`,
        professional: `Advanced HF pathophysiology:

Molecular and cellular mechanisms:

β-adrenergic signaling: Chronic SNS activation causes β1-receptor downregulation (40-50% reduction in HF), receptor uncoupling from Gs protein, increased Gi inhibitory signaling, GRK2 (βARK1)-mediated receptor phosphorylation/internalization. Reduced cAMP → decreased PKA activity → reduced phospholamban phosphorylation → impaired SERCA2a function → decreased calcium uptake into SR → impaired relaxation (diastolic dysfunction) and reduced calcium transient (systolic dysfunction). Beta-blockers reverse these changes (β1-upregulation, improved signaling).

Calcium handling abnormalities:
- SERCA2a downregulation (reduced SR calcium uptake) 
- Phospholamban (PLN) unphosphorylated state predominates (inhibits SERCA2a)
- Ryanodine receptor (RyR2) hyperphosphorylation by PKA/CaMKII → leaky channels → diastolic calcium release → reduced SR calcium content, arrhythmias
- Sodium-calcium exchanger (NCX) upregulation (compensatory extrusion but causes arrhythmias)
- L-type calcium channel downregulation
- Result: Impaired excitation-contraction coupling, reduced contractility, slowed relaxation

Mitochondrial dysfunction: Reduced oxidative capacity, increased ROS production, opening of mitochondrial permeability transition pore (MPTP) leading to apoptosis/necrosis, impaired ATP synthesis.

Inflammation and oxidative stress: Cytokines (TNF-α, IL-1β, IL-6, IL-18) directly depress contractility, promote apoptosis, stimulate MMPs. iNOS upregulation → nitrosative stress. NADPH oxidase activation → superoxide production.

Myocardial energetics: Reduced PCr/ATP ratio (energy reserve), impaired creatine kinase shuttle, reduced high-energy phosphate transfer.

Renal mechanisms: Cardiorenal syndrome bidirectional relationship. Reduced cardiac output → renal hypoperfusion → RAAS activation + SNS activation + ADH release → sodium/water retention. Venous congestion (elevated CVP) reduces GFR independent of perfusion. Tubuloglomerular feedback (macula densa) activates renin with diuretic use.

Vascular dysfunction: Endothelial dysfunction (reduced NO bioavailability), increased arterial stiffness (arteriosclerosis), impaired skeletal muscle vasodilation (reduced exercise capacity).

Skeletal muscle abnormalities: Atrophy (type II fiber loss), mitochondrial dysfunction, impaired oxidative capacity, inflammation, reduced capillary density. Contribute to exercise intolerance independent of cardiac function.`,
      },
    },
  ],
  anatomyLinks: [
    { structureId: 'left-ventricle', structureName: 'Left Ventricle', linkText: 'Left Ventricle', relevance: 'Primary pumping chamber' },
    { structureId: 'heart-valves', structureName: 'Heart Valves', linkText: 'Heart Valves', relevance: 'Potential cause of HF' },
  ],
  references: [
    {
      referenceId: 'hf-guideline-2022',
      type: 'guideline',
      title: '2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure',
      authors: 'Heidenreich PA, et al.',
      source: 'Circulation',
      year: 2022,
      citation: 'Heidenreich PA, et al. 2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure. Circulation. 2022;145(18):e895-e1032.',
    },
  ],
  relatedEntries: [
    { entryId: 'coronary-artery-disease', entryType: 'condition', name: 'Coronary Artery Disease', relationship: 'caused-by' },
    { entryId: 'hypertension', entryType: 'condition', name: 'Hypertension', relationship: 'caused-by' },
  ],
  searchMetadata: {
    primaryKeywords: ['heart failure', 'HF', 'congestive heart failure', 'CHF', 'cardiomyopathy', 'HFrEF', 'HFpEF'],
    secondaryKeywords: ['dyspnea', 'edema', 'ejection fraction', 'BNP', 'nt-probnp', 'diastolic dysfunction'],
    synonyms: ['congestive heart failure', 'cardiac failure', 'myocardial failure'],
    tags: ['cardiology', 'cardiovascular', 'chronic', 'heart failure'],
  },
};

// ═══════════════════════════════════════════════════════════════════════════════
// RESPIRATORY PATHOLOGY
// ═══════════════════════════════════════════════════════════════════════════════

export const copdEntry: EncyclopediaEntry = {
  entryId: 'copd',
  name: 'Chronic Obstructive Pulmonary Disease (COPD)',
  entryType: 'condition',
  category: 'respiratory',
  summary: 'Progressive lung disease characterized by persistent airflow limitation, usually caused by cigarette smoking, involving chronic bronchitis and/or emphysema.',
  overview: {
    patient: 'COPD is a lung disease that makes it hard to breathe. It includes chronic bronchitis (inflamed airways with mucus) and emphysema (damaged air sacs). The main cause is cigarette smoking, though air pollution and genetics can contribute. Symptoms include chronic cough, mucus production, wheezing, and shortness of breath that gets worse over time. While there\'s no cure, treatments can help manage symptoms and slow progression. Quitting smoking is the most important step.',
    intermediate: 'Chronic obstructive pulmonary disease is characterized by persistent airflow limitation that is usually progressive and associated with enhanced chronic inflammatory response to noxious particles or gases. Major risk factor: cigarette smoking (80-90% of cases). Other exposures: biomass fuel smoke, occupational dusts/chemicals, air pollution. α1-antitrypsin deficiency causes early-onset panacinar emphysema (genetic). Pathology: chronic bronchitis (productive cough >3 months/year for 2 years), small airways disease (fibrosis, mucus plugging), emphysema (destruction of alveolar walls, loss of elastic recoil). Types: centriacinar (central acinus, upper lobes, smoking-related), panacinar (entire acinus, lower lobes, α1-AT deficiency), paraseptal (distal acinus, subpleural, bullae formation). Clinical: progressive dyspnea, chronic cough, sputum production, exacerbations (infections, pollutants). Diagnosis: spirometry showing post-bronchodilator FEV1/FVC <0.70. GOLD staging by FEV1 and symptom assessment (CAT or mMRC). Treatment: smoking cessation, bronchodilators (LABA, LAMA, SABA, SAMA), inhaled corticosteroids (frequent exacerbators), triple therapy, pulmonary rehabilitation, oxygen (if resting PaO2 ≤55 mmHg or 56-59 with cor pulmonale/polycythemia), lung volume reduction or transplant in selected.',
    professional: 'COPD is a heterogeneous condition with small airways disease (chronic bronchitis, bronchiolitis, mucus plugging, fibrosis) and parenchymal destruction (emphysema) components varying between patients. Pathogenesis: inhaled irritants → epithelial injury → innate immune activation (macrophages, neutrophils, CD8+ T cells) → adaptive immune response (B cells, lymphoid follicles) → chronic inflammation → protease-antiprotease imbalance (neutrophil elastase, MMPs > α1-AT, secretory leukoprotease inhibitor) → tissue destruction, small airway fibrosis, mucus hypersecretion. Exacerbations triggered by bacterial (H. influenzae, M. catarrhalis, S. pneumoniae), viral (Rhinovirus, influenza, RSV), or environmental factors. Pathophysiology: Emphysema reduces elastic recoil and surface area for gas exchange; small airway disease increases resistance; both cause air trapping, hyperinflation, flattened diaphragms, increased work of breathing. Pulmonary hypertension develops from hypoxic vasoconstriction and vascular remodeling (intimal thickening). Right heart failure (cor pulmonale) in advanced disease. Systemic effects: skeletal muscle wasting, osteoporosis, cardiovascular disease, depression, lung cancer risk.',
  },
  content: [
    {
      title: 'Pathophysiology and Disease Mechanisms',
      content: {
        patient: `In COPD, harmful particles from smoke or pollution damage your lungs. Your immune system responds with chronic inflammation, sending white blood cells that release enzymes. Normally, proteins like alpha-1 antitrypsin protect your lungs from these enzymes. But in COPD, either there's too much enzyme activity or not enough protection. Over time, this destroys the walls of tiny air sacs (alveoli) and clogs small airways with mucus. The damaged air sacs can't exchange oxygen well, and mucus blocks airflow, making breathing progressively harder.`,
        intermediate: `COPD pathogenesis involves chronic inflammation and protease-antiprotease imbalance:

Inflammatory cascade: Inhaled irritants activate epithelial cells and macrophages releasing chemokines (IL-8, MCP-1) recruiting neutrophils, macrophages, and CD8+ T cells. Neutrophils release serine proteases (elastase, proteinase 3, cathepsin G) and matrix metalloproteinases (MMP-8, MMP-9). CD8+ T cells release perforin and granzymes, contributing to epithelial apoptosis. Macrophages are 5-10x increased in COPD lungs and release MMPs, elastase, and TGF-β driving fibrosis.

Protease-antiprotease imbalance: Proteases (neutrophil elastase, MMPs, cathepsins) exceed antiprotease defenses (α1-antitrypsin, secretory leukoprotease inhibitor, elafin). Neutrophil elastase degrades elastin, destroys alveolar walls, stimulates mucus production, and activates more inflammatory cells. α1-AT deficiency (genetic, ZZ genotype) causes only 1-2% of COPD but early-onset severe disease.

Emphysema mechanisms: Loss of alveolar attachments to small airways causes airway collapse on expiration. Centriacinar emphysema affects respiratory bronchioles in upper lobes (smoking-related). Panacinar affects entire acinus, lower lobe predominant (α1-AT deficiency). Irregular (paraseptal) affects distal acinus near pleura and septa (bullae formation, pneumothorax risk).`,
        professional: `Detailed COPD pathophysiology:

Small airways disease (<2 mm diameter):
- Goblet cell metaplasia and mucus hypersecretion (MUC5AC, MUC5B overexpression)
- Subepithelial fibrosis (TGF-β driven collagen deposition)
- Smooth muscle hypertrophy and bronchospasm
- Lymphoid follicle formation with B cells and CD4+ T cells
- Luminal occlusion by mucus plugs
- Result: progressive airflow limitation, especially during expiration

Emphysema pathology:
- Centriacinar: proximal acinus involved, distal alveoli spared, upper lobe predominance, associated with smoking, more common in men historically
- Panacinar: entire acinus uniformly involved, lower lobe predominance, associated with α1-AT deficiency, can occur with smoking
- Distinct morphological quantification: mean linear intercept (Lm), destruction index (DI), surface-to-volume ratio

Alveolar destruction mechanisms:
- Elastin degradation by neutrophil elastase and MMPs disrupts alveolar wall structural integrity
- Apoptosis of structural cells (endothelial cells, type I pneumocytes) via caspase activation
- Failure of lung maintenance and repair (impaired VEGF signaling, defective stem cell function)
- Senescence markers (p16, p21) elevated in COPD lungs

Systemic inflammation:
- Circulating inflammatory mediators (CRP, IL-6, TNF-α, leukocytosis)
- Skeletal muscle dysfunction (atrophy, impaired oxidative capacity, inflammation)
- Cardiovascular comorbidity shared risk factors and inflammation
- Osteoporosis from smoking, steroids, inactivity, inflammation
- Cachexia in severe disease (TNF-α, leptin resistance)

Exacerbation pathophysiology:
- Increased airway inflammation during exacerbations (elevated IL-6, IL-8, neutrophils)
- Viral infections impair host defense and enhance bacterial colonization
- Bacterial infections induce neutrophilic inflammation and mucus production
- Airway edema and bronchospasm worsen obstruction
- Dynamic hyperinflation increases work of breathing, respiratory muscle fatigue
- Right heart strain from hypoxia and acidosis`,
      },
    },
    {
      title: 'Diagnosis and Assessment',
      content: {
        patient: `COPD diagnosis requires a breathing test called spirometry. You blow into a machine that measures how much air you can exhale and how fast. The key measure is FEV1 (forced expiratory volume in 1 second) divided by FVC (forced vital capacity). If this ratio is less than 0.70 after using a bronchodilator, you have COPD. Doctors also use chest X-rays or CT scans to look for emphysema, check your oxygen levels, and assess symptoms to determine severity and guide treatment.`,
        intermediate: `Diagnostic criteria:
- Post-bronchodilator FEV1/FVC <0.70 confirms persistent airflow limitation
- FEV1 percent predicted determines severity: GOLD 1 (≥80%), 2 (50-79%), 3 (30-49%), 4 (<30%)
- Symptoms assessed by CAT (COPD Assessment Test, 0-40 scale) or mMRC (Modified Medical Research Council) dyspnea scale (0-4)
- Combined assessment: Group A (low symptoms, low exacerbation risk), B (high symptoms, low risk), C (low symptoms, high risk), D (high symptoms, high risk)

Exacerbation risk factors: ≥2 moderate exacerbations/year or ≥1 hospitalization. Anthonisen criteria for exacerbation: increased dyspnea, sputum volume, sputum purulence (Type I - all three, Type II - two, Type III - one plus URI or fever).

Imaging: Chest X-ray shows hyperinflation (flat diaphragms, increased retrosternal airspace, bullae). CT characterizes emphysema pattern, quantifies extent, identifies bullae for LVRS, assesses for bronchial wall thickening, air trapping, and lung cancer screening. α1-AT screening in early onset (<45), basilar emphysema, family history.

Differential: Asthma (variable symptoms, reversible obstruction, onset younger), heart failure (orthopnea, JVD, edema, cardiomegaly), bronchiectasis (copious purulent sputum, clubbing), tuberculosis (cavitary lesions, upper lobe), obliterative bronchiolitis (younger, rapid progression, post-infection or transplant).`,
        professional: `Comprehensive COPD assessment:

Spirometry quality and interpretation:
- Acceptability: good start of test (rapid, forceful), no cough in first second, no glottis closure, no leak, satisfactory exhalation (6 seconds or plateau)
- Repeatability: 2 largest FEV1 and FVC within 150 mL (100 mL if FVC <1L)
- Bronchodilator response: 400 mcg albuterol. Significant reversibility (>12% and >200 mL increase in FEV1) suggests asthma component (asthma-COPD overlap, ACO)
- Lower Limit of Normal (LLN, 5th percentile of healthy population) vs fixed ratio (FEV1/FVC <0.70): LLN recommended for diagnosis in guidelines but fixed ratio commonly used

Advanced physiological assessment:
- Lung volumes: Increased TLC, FRC, RV; decreased RV/TLC if severe emphysema (air trapping quantification)
- DLCO: Reduced in emphysema (destruction of alveolar-capillary interface); normal or mildly reduced in pure chronic bronchitis
- Arterial blood gas: PaO2 <60 mmHg or PaCO2 >45 mmHg indicates respiratory failure; pH <7.35 with elevated PaCO2 indicates acute-on-chronic respiratory failure
- 6-minute walk test: Distance, oxygen desaturation, dyspnea score (Borg)
- Cardiopulmonary exercise testing: VO2 max, ventilatory efficiency (VE/VCO2 slope), cardiac vs pulmonary limitation

Biomarkers and phenotyping:
- COPD is heterogeneous; "treatable traits" approach: airflow limitation, emphysema, chronic bronchitis, exacerbation frequency, cardiovascular risk, skeletal muscle dysfunction, anxiety/depression
- Blood eosinophils: Predict ICS response (≥300/μL high likelihood of benefit, <100 unlikely to benefit)
- Fibrinogen, CRP: Systemic inflammation markers
- Procalcitonin: Guide antibiotic use in exacerbations (low levels suggest viral cause)

Comorbidity assessment:
- Cardiovascular disease (shared pathophysiology, common cause of death)
- Lung cancer screening (annual low-dose CT if age 50-80, 20 pack-year smoking history, current smoker or quit <15 years)
- Osteoporosis (DEXA scan if risk factors, chronic steroids)
- Anxiety/depression screening (PHQ-9, GAD-7)
- GERD (associated with exacerbations)
- Skeletal muscle dysfunction (quadriceps strength, fat-free mass index)`,
      },
    },
  ],
  anatomyLinks: [
    { structureId: 'lungs', structureName: 'Lungs', linkText: 'Lungs', relevance: 'Affected organ' },
    { structureId: 'bronchi', structureName: 'Bronchi', linkText: 'Bronchi', relevance: 'Airway inflammation' },
    { structureId: 'alveoli', structureName: 'Alveoli', linkText: 'Alveoli', relevance: 'Site of emphysema' },
  ],
  references: [
    {
      referenceId: 'gold-report-2024',
      type: 'guideline',
      title: 'GOLD 2024 Global Strategy for Prevention, Diagnosis and Management of COPD',
      authors: 'Global Initiative for Chronic Obstructive Lung Disease',
      source: 'GOLD',
      year: 2024,
      url: 'https://goldcopd.org/2024-gold-report/',
      citation: 'Global Initiative for Chronic Obstructive Lung Disease. GOLD 2024 Report. 2024.',
    },
  ],
  relatedEntries: [
    { entryId: 'respiratory-system', entryType: 'anatomy', name: 'Respiratory System', relationship: 'part-of' },
    { entryId: 'asthma', entryType: 'condition', name: 'Asthma', relationship: 'related-to' },
  ],
  searchMetadata: {
    primaryKeywords: ['COPD', 'chronic obstructive pulmonary disease', 'emphysema', 'chronic bronchitis', 'airflow limitation'],
    secondaryKeywords: ['smoking', 'spirometry', 'FEV1', 'exacerbation', 'dyspnea', 'alpha-1 antitrypsin'],
    synonyms: ['emphysema', 'chronic bronchitis', 'COAD', 'chronic obstructive airway disease'],
    tags: ['pulmonology', 'respiratory', 'chronic', 'smoking-related'],
  },
};

// ═══════════════════════════════════════════════════════════════════════════════
// Export all pathology entries
// ═══════════════════════════════════════════════════════════════════════════════

export const pathologyEntries: EncyclopediaEntry[] = [
  coronaryArteryDiseaseEntry,
  heartFailureEntry,
  copdEntry,
];
