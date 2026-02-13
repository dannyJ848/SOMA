/**
 * Cardiovascular Conditions Database - Expanded
 *
 * Additional cardiovascular conditions NOT included in the main database.
 * Focuses on cardiomyopathies and other specialized cardiac conditions.
 */

import type { CVConditionEntry } from './cv-conditions-database.js';

// ---------------------------------------------------------------------------
// Compact helper
// ---------------------------------------------------------------------------

function cv(
  id: string, name: string, nameEs: string,
  category: 'coronary' | 'structural' | 'arrhythmia' | 'vascular' | 'heart-failure' | 'congenital' | 'pericardial',
  icd11: string, description: string,
  riskFactors: string[], pathophysiology: string,
  symptoms: string[], diagnostics: string[],
  treatment: string, lifestyle: string,
  emergencySigns: string[], patientExplanation: string,
): CVConditionEntry {
  return {
    id, name, nameEs, category, icd11, description,
    riskFactors, pathophysiology, symptoms, diagnostics,
    treatment, lifestyle, emergencySigns, patientExplanation,
  };
}

// ---------------------------------------------------------------------------
// Expanded Database
// ---------------------------------------------------------------------------

export const CV_CONDITIONS_EXPANDED: Record<string, CVConditionEntry> = {

  'dilated-cardiomyopathy': cv(
    'dilated-cardiomyopathy', 'Dilated Cardiomyopathy', 'Miocardiopatía dilatada',
    'heart-failure', 'BC43.0',
    'Progressive ventricular dilation and systolic dysfunction without ischemic cause. Leading indication for heart transplantation.',
    ['Genetic mutations (TTN, LMNA—familial in 30-40%)', 'Chronic alcohol abuse', 'Viral myocarditis (post-inflammatory)', 'Cardiotoxic chemotherapy (anthracyclines)', 'Peripartum period', 'Nutritional deficiencies (thiamine, selenium)', 'Chronic tachycardia'],
    'Myocyte loss and dysfunction lead to progressive ventricular dilation, eccentric remodeling, and reduced contractility. Neurohormonal activation (RAAS, SNS) initially compensates but eventually worsens remodeling. Mitral/tricuspid regurgitation develops from annular dilation.',
    ['Progressive dyspnea on exertion', 'Orthopnea and paroxysmal nocturnal dyspnea', 'Fatigue and exercise intolerance', 'Peripheral edema', 'Chest pain (atypical—may mimic CAD)', 'Palpitations (atrial fibrillation common)', 'Sudden cardiac death risk from ventricular arrhythmias'],
    ['Echocardiography (LV dilation, LVEF <40%, global hypokinesis)', 'BNP or NT-proBNP (elevated)', 'ECG (may show LBBB, low voltage, Q waves)', 'Cardiac MRI (LV dimensions, late gadolinium enhancement for fibrosis)', 'Coronary angiography or CTA (exclude ischemic etiology)', 'Genetic testing if family history', 'Endomyocardial biopsy rarely needed'],
    'Guideline-directed medical therapy: ACE inhibitor/ARB, beta-blocker (carvedilol/metoprolol), mineralocorticoid antagonist, SGLT2 inhibitor. Diuretics for volume overload. ICD for primary prevention if LVEF ≤35%. CRT if LVEF ≤35% with LBBB. Advanced therapies: LVAD, heart transplant for refractory cases. Treat underlying cause (abstinence from alcohol, cessation of cardiotoxic agents).',
    'Absolute alcohol abstinence, sodium restriction (<2g/day), fluid restriction if advanced HF, daily weights (call MD if gain >2-3 lbs in 1 day), moderate exercise as tolerated (cardiac rehab), vaccination (influenza, pneumococcal), medication adherence. Family screening recommended if genetic cause suspected.',
    ['Acute decompensated heart failure (worsening dyspnea, unable to lie flat)', 'Chest pain suggesting ischemia', 'Syncope or presyncope (arrhythmia)', 'Rapid weight gain (>5 lbs in 1 week)', 'Palpitations with lightheadedness', 'ICD shocks'],
    'Dilated cardiomyopathy means your heart muscle has become weakened and stretched out like a worn-out rubber band, so it cannot pump blood effectively. This can be caused by genetics, alcohol, infections, or sometimes the cause is unknown. Medications can significantly improve heart function and symptoms—many patients feel much better with treatment. It is critical to avoid alcohol completely and take all medications as prescribed. In advanced cases, devices like a defibrillator or even a heart transplant may be needed, but early treatment improves outcomes dramatically.',
  ),

  'hypertrophic-cardiomyopathy': cv(
    'hypertrophic-cardiomyopathy', 'Hypertrophic Cardiomyopathy (HCM)', 'Miocardiopatía hipertrófica',
    'structural', 'BC43.1',
    'Genetic disorder causing asymmetric left ventricular hypertrophy, dynamic outflow obstruction, and risk of sudden cardiac death.',
    ['Autosomal dominant mutations in sarcomere genes (MYH7, MYBPC3—60-70% of cases)', 'Family history of HCM or sudden cardiac death', 'De novo mutations'],
    'Sarcomere protein mutations cause myocyte disarray, hypertrophy (especially interventricular septum), and diastolic dysfunction. Dynamic LVOT obstruction occurs when hypertrophied septum and systolic anterior motion (SAM) of mitral valve narrow outflow tract. Myocardial fibrosis increases arrhythmia and sudden death risk.',
    ['Often asymptomatic (diagnosed on screening or murmur)', 'Exertional dyspnea and fatigue', 'Angina (increased O2 demand, microvascular dysfunction)', 'Presyncope or syncope with exertion', 'Palpitations (atrial fibrillation, ventricular arrhythmias)', 'Sudden cardiac death (especially young athletes)', 'Systolic crescendo-decrescendo murmur at LLSB (louder with Valsalva)'],
    ['Echocardiography (LVH ≥15mm, asymmetric septal hypertrophy, SAM, LVOT gradient)', 'Cardiac MRI (extent of hypertrophy and fibrosis—LGE predicts arrhythmia risk)', 'ECG (LVH, deep Q waves, T-wave inversion)', '24-48h Holter (detect NSVT)', 'Exercise stress test (assess symptoms, BP response, arrhythmias)', 'Genetic testing for confirmation and family screening'],
    'For obstructive HCM: beta-blockers or non-DHP CCBs (verapamil) to reduce gradient. Avoid vasodilators/diuretics (worsen obstruction). Disopyramide if refractory. Septal reduction therapy: surgical myectomy (gold standard) or alcohol septal ablation if not surgical candidate. ICD for high-risk features (family hx sudden death, massive LVH ≥30mm, unexplained syncope, NSVT). Afib: anticoagulation + rate control. Heart transplant for end-stage refractory HF.',
    'Avoid intense competitive sports and heavy isometric exercise (sudden death risk). Stay well-hydrated, avoid excessive alcohol. Genetic counseling and family screening (echo + ECG for first-degree relatives). Lifelong cardiology follow-up. Pregnancy requires high-risk OB care.',
    ['Syncope or near-syncope during or after exercise', 'Sustained palpitations with chest pain or dyspnea', 'Acute pulmonary edema', 'ICD shocks', 'New atrial fibrillation with rapid ventricular response', 'Sudden cardiac arrest'],
    'Hypertrophic cardiomyopathy is a genetic condition where part of your heart muscle becomes abnormally thick, especially the wall between the two lower chambers. This can block blood flow out of the heart and cause dangerous irregular rhythms. Many people have no symptoms and live normal lives, but it is the most common cause of sudden cardiac death in young athletes. Medications help the heart relax and reduce obstruction. If you have high-risk features, an implantable defibrillator can be life-saving. Family members should be screened because this condition is inherited.',
  ),

  'restrictive-cardiomyopathy': cv(
    'restrictive-cardiomyopathy', 'Restrictive Cardiomyopathy', 'Miocardiopatía restrictiva',
    'heart-failure', 'BC43.2',
    'Abnormal myocardial stiffness limiting ventricular filling despite preserved systolic function. Least common cardiomyopathy in Western countries.',
    ['Infiltrative diseases: cardiac amyloidosis (most common in US), sarcoidosis, hemochromatosis', 'Storage diseases: Fabry disease, Gaucher disease', 'Endomyocardial diseases: endomyocardial fibrosis, hypereosinophilic syndrome, carcinoid', 'Radiation therapy', 'Post-anthracycline chemotherapy', 'Idiopathic'],
    'Infiltration or fibrosis of myocardium causes severe diastolic dysfunction with markedly elevated filling pressures. Ventricular chambers remain normal size but atria dilate significantly. Systolic function often preserved until late. Impaired filling causes reduced cardiac output despite normal EF.',
    ['Progressive dyspnea on exertion', 'Fatigue and exercise intolerance (out of proportion to dyspnea)', 'Peripheral edema, ascites, hepatomegaly (right-sided failure predominates)', 'Jugular venous distension', 'Low-voltage ECG despite thick myocardium (amyloid)', 'Minimal response to diuretics', 'Atrial fibrillation common', 'Thromboembolic events'],
    ['Echocardiography (biatrial enlargement, normal/small ventricles, preserved EF, restrictive mitral inflow, medial e\' velocity reduced)', 'Cardiac MRI (tissue characterization—LGE pattern helps identify etiology)', 'BNP/NT-proBNP (markedly elevated)', 'ECG (low voltage, pseudo-infarct Q waves)', 'Right heart catheterization (elevated filling pressures, dip-and-plateau pattern, equalization of diastolic pressures)', 'Endomyocardial biopsy (definitive for amyloid, sarcoid, storage diseases)', 'Serum/urine immunofixation, free light chains (amyloid)', 'Genetic testing (Fabry, familial amyloid)'],
    'Treat underlying cause: tafamidis or patisiran for ATTR amyloidosis, chelation for hemochromatosis, immunosuppression for sarcoidosis. Symptomatic HF management: cautious diuresis (preload-dependent), avoid aggressive diuresis. Digoxin contraindicated in amyloid (binds to fibrils). Rate control for afib, anticoagulation (high stroke risk). Permanent pacemaker often needed. Heart transplant for select patients; combined heart-liver or heart-kidney in some cases.',
    'Low-sodium diet (<2g/day), fluid restriction (1.5-2L/day), daily weights. Avoid strenuous exertion. Genetic counseling if hereditary etiology. Amyloidosis patients: avoid NSAIDs, monitor for autonomic dysfunction (orthostatic hypotension). Screen for systemic complications (renal, hepatic, neuropathy).',
    ['Severe volume overload (acute dyspnea, unable to lie flat)', 'Syncope (conduction block common in amyloid and sarcoid)', 'Stroke or TIA (afib with embolism)', 'Rapid weight gain despite diuretics', 'Cardiogenic shock'],
    'Restrictive cardiomyopathy means your heart muscle has become stiff and cannot relax properly to fill with blood, like a leather glove that has dried out and hardened. This is often caused by abnormal proteins or substances depositing in the heart muscle (such as amyloid). Even though the heart squeezes normally, it cannot fill, so your body does not get enough blood. Treatment focuses on the underlying cause if possible, and carefully managing fluid buildup. This is the rarest type of cardiomyopathy and can be challenging to treat, but early diagnosis improves outcomes.',
  ),

  'takotsubo-cardiomyopathy': cv(
    'takotsubo-cardiomyopathy', 'Takotsubo Cardiomyopathy (Broken Heart Syndrome)', 'Miocardiopatía de Takotsubo (Síndrome del corazón roto)',
    'heart-failure', 'BC43.8',
    'Acute, reversible left ventricular dysfunction triggered by emotional or physical stress, mimicking acute MI but without obstructive CAD.',
    ['Postmenopausal women (90% of cases)', 'Emotional stress (death of loved one, divorce, frightening event)', 'Physical stress (acute illness, surgery, asthma exacerbation)', 'Neurologic events (SAH, stroke, seizure)', 'Catecholamine surge (pheochromocytoma, cocaine, epinephrine infusion)'],
    'Surge of catecholamines causes myocardial stunning via direct toxicity, microvascular dysfunction, and transient epicardial spasm. Apical and mid-ventricular segments become akinetic (balloon-like), while base hypercontracts—resembles Japanese octopus trap (tako-tsubo). LV function typically recovers in days to weeks.',
    ['Acute chest pain (indistinguishable from MI)', 'Dyspnea', 'Diaphoresis', 'Nausea and vomiting', 'Syncope rare', 'Triggers: recent emotional trauma, argument, sudden shock, or acute medical illness', 'ECG changes mimic anterior STEMI (ST elevation in precordial leads)', 'Troponin elevated but disproportionately low given extent of wall motion abnormality'],
    ['ECG (ST elevation, deep T-wave inversions, QTc prolongation)', 'Troponin (modest elevation)', 'BNP/NT-proBNP (elevated)', 'Echocardiography (apical ballooning, mid-ventricular akinesis, basal hyperkinesis—classic appearance)', 'Coronary angiography (NO obstructive CAD—required for diagnosis)', 'Left ventriculography (apical ballooning)', 'Cardiac MRI (myocardial edema without LGE in CAD distribution)', 'Repeat echo in 4-6 weeks (confirms recovery)'],
    'Supportive care: ACE inhibitors/ARBs, beta-blockers (especially during acute phase to reduce catecholamine effect). Diuretics and vasopressors as needed for HF or shock. Anticoagulation if apical thrombus. Aspirin and statin often given empirically until CAD excluded. Most patients recover fully in weeks. ICD contraindicated (arrhythmia risk low, recovery expected). Treat underlying stressor/trigger.',
    'Stress management and psychological support (counseling, therapy). Avoid triggers if identifiable. Heart-healthy lifestyle (diet, exercise, sleep). Continue beta-blocker and ACE inhibitor for at least 3 months; many continue long-term. Follow-up echo at 1-2 months to confirm recovery. Recurrence rate ~2% per year.',
    ['Cardiogenic shock (occurs in ~10-15%)', 'Acute pulmonary edema', 'Dynamic LVOT obstruction (avoid inotropes if present—use beta-blockers)', 'Ventricular arrhythmias (QTc prolongation)', 'LV thrombus with embolization', 'Cardiac arrest (rare)'],
    'Takotsubo cardiomyopathy, also called broken heart syndrome, happens when severe emotional or physical stress causes part of your heart to temporarily weaken and balloon out. It feels exactly like a heart attack—chest pain, shortness of breath—but your heart arteries are not blocked. The good news is that this condition is almost always reversible. Your heart function typically returns to normal within a few weeks. Treatment includes medications to support your heart while it recovers and managing stress. Though frightening, the prognosis is generally excellent.',
  ),

  'myocarditis': cv(
    'myocarditis', 'Myocarditis', 'Miocarditis',
    'heart-failure', 'BC40.0',
    'Acute inflammation of the myocardium, often viral, causing chest pain, arrhythmias, and heart failure. Can mimic acute coronary syndrome.',
    ['Viral infections (Coxsackie B, adenovirus, parvovirus B19, influenza, COVID-19, EBV, HIV)', 'Autoimmune diseases (lupus, sarcoidosis, eosinophilic granulomatosis)', 'Hypersensitivity reactions (medications: clozapine, penicillin, sulfonamides)', 'Toxins (cocaine, alcohol, chemotherapy—anthracyclines, trastuzumab)', 'Lyme disease, Chagas disease', 'Giant cell myocarditis (rapidly progressive)', 'Post-mRNA COVID-19 vaccine (rare, typically mild)'],
    'Infectious or immune-mediated myocardial inflammation causes myocyte injury, edema, and dysfunction. Viral infection triggers innate and adaptive immune responses. Cardiac autoantibodies and T-cell mediated damage may persist after viral clearance. Can progress to dilated cardiomyopathy in chronic cases.',
    ['Chest pain (sharp or pressure-like, may worsen with inspiration)', 'Dyspnea and fatigue', 'Palpitations or arrhythmias', 'Fever, recent viral illness (URI, GI symptoms)', 'Syncope', 'Fulminant presentation: cardiogenic shock, severe HF within days', 'Young, previously healthy patients common'],
    ['Troponin (elevated—indicates myocardial injury)', 'BNP/NT-proBNP (elevated)', 'ECG (ST elevation, PR depression, T-wave changes, arrhythmias)', 'Echocardiography (regional or global LV dysfunction, pericardial effusion in myopericarditis)', 'Cardiac MRI (myocardial edema on T2, LGE in non-ischemic pattern—patchy, mid-wall—diagnostic)', 'Coronary angiography (exclude ACS)', 'Endomyocardial biopsy (gold standard but rarely done—reserved for fulminant cases or suspected giant cell)', 'Viral PCR, serology (often low yield)', 'Inflammatory markers (CRP, ESR elevated)'],
    'Supportive care is mainstay: ACE inhibitors, beta-blockers, diuretics for HF. Avoid strenuous activity (can worsen inflammation). NSAIDs generally avoided (may worsen myocardial damage). Immunosuppression (corticosteroids, azathioprine) ONLY for specific causes (giant cell, eosinophilic, autoimmune—NOT viral). Fulminant myocarditis may require ECMO, LVAD, or transplant. Treat underlying infection if identified. Arrhythmias: antiarrhythmics, temporary pacing, wearable defibrillator until recovery.',
    'Strict rest for 3-6 months (avoid all exercise until LV function normalizes and troponin normalizes). Gradual return to activity guided by repeat imaging. Avoid alcohol. Low-sodium diet if HF. Follow-up echo at 1, 3, 6 months. Athletes: delay return to sports ≥6 months and only after normal echo, ECG, and Holter.',
    ['Fulminant heart failure (acute dyspnea, cardiogenic shock)', 'Sustained ventricular arrhythmias', 'Complete heart block or high-grade AV block', 'Syncope', 'Sudden cardiac arrest', 'Worsening symptoms despite medical therapy'],
    'Myocarditis is inflammation of your heart muscle, usually caused by a viral infection. Your immune system fights the virus but also attacks some heart muscle cells in the process. This can cause chest pain, fatigue, and in severe cases, heart failure or dangerous heart rhythms. Most people recover completely with rest and supportive medications, but this requires strict avoidance of exercise for several months to allow full healing. A small percentage develop chronic heart damage. Close follow-up with repeat heart imaging is essential to monitor recovery.',
  ),

  'pulmonary-hypertension': cv(
    'pulmonary-hypertension', 'Pulmonary Hypertension', 'Hipertensión pulmonar',
    'vascular', 'BB01',
    'Elevated pressure in the pulmonary arteries (mean PAP ≥20 mmHg), causing right heart strain and eventual failure.',
    ['Left heart disease (HFpEF, HFrEF, valvular—Group 2, most common)', 'Chronic lung disease (COPD, ILD—Group 3)', 'Chronic thromboembolic disease (CTEPH—Group 4)', 'Idiopathic pulmonary arterial hypertension (IPAH—Group 1)', 'Connective tissue disease (scleroderma, lupus—Group 1)', 'Congenital heart disease with shunts', 'HIV, portal hypertension, drugs (methamphetamine, cocaine)'],
    'Increased pulmonary vascular resistance from vasoconstriction, remodeling, thrombosis, or obstruction. Right ventricle initially compensates with hypertrophy but eventually dilates and fails. Endothelial dysfunction and smooth muscle proliferation narrow pulmonary arterioles. WHO classification (Groups 1-5) based on etiology.',
    ['Progressive dyspnea on exertion (earliest and most common)', 'Fatigue and exercise intolerance', 'Chest pain (RV ischemia)', 'Syncope or presyncope with exertion (ominous sign)', 'Peripheral edema, ascites (RV failure)', 'Loud P2 on auscultation', 'JVD and hepatomegaly', 'Cyanosis in advanced disease'],
    ['Transthoracic echo (elevated RVSP, RV dilation and dysfunction, TR jet velocity)', 'Right heart catheterization (GOLD STANDARD—directly measures mean PAP, PCWP, PVR)', 'ECG (RVH, right axis deviation, P pulmonale)', 'Chest X-ray (enlarged pulmonary arteries, RV enlargement)', 'PFTs with DLCO (assess for lung disease)', 'V/Q scan or CTPA (rule out CTEPH)', 'Workup for underlying cause: ANA, HIV, liver function, sleep study'],
    'Treatment depends on WHO group. Group 1 (PAH): pulmonary vasodilators (phosphodiesterase-5 inhibitors like sildenafil, endothelin receptor antagonists like bosentan, prostacyclin analogs), anticoagulation. Group 2: optimize treatment of left heart disease. Group 3: treat underlying lung disease, oxygen. Group 4 (CTEPH): pulmonary thromboendarterectomy (curative), riociguat if not surgical candidate. Diuretics for volume overload. Supplemental O2 if hypoxemic. Avoid pregnancy. Advanced disease: lung or heart-lung transplant.',
    'Avoid high altitudes (worsens hypoxemia and pulmonary vasoconstriction). Supplemental oxygen to keep SpO2 >90%. Low-sodium diet, fluid restriction. Gentle activity as tolerated—avoid strenuous exertion. Avoid decongestants and NSAIDs. Influenza and pneumococcal vaccination. Pregnancy contraindicated (high maternal mortality). Join support groups.',
    ['Syncope with exertion (suggests severe disease)', 'Hemoptysis', 'Acute decompensated right heart failure (severe edema, ascites)', 'Chest pain with hypotension', 'Signs of cardiogenic shock', 'Sudden worsening of dyspnea (PE, arrhythmia)'],
    'Pulmonary hypertension means the blood pressure in the arteries of your lungs is too high, making it hard for your heart to pump blood through them. Over time, the right side of your heart weakens from the extra effort. This causes shortness of breath, fatigue, and leg swelling. There are many causes—from lung disease to blood clots—and treatment depends on finding the underlying reason. Some types have specific medications that can significantly improve symptoms and slow progression. While this is a serious condition, early diagnosis and treatment can greatly improve quality of life.',
  ),

};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Search expanded CV conditions by query string
 */
export function searchExpandedCVConditions(query: string): CVConditionEntry[] {
  const q = query.toLowerCase().trim();
  if (!q) return Object.values(CV_CONDITIONS_EXPANDED);

  return Object.values(CV_CONDITIONS_EXPANDED).filter(cond =>
    cond.name.toLowerCase().includes(q) ||
    cond.nameEs.toLowerCase().includes(q) ||
    cond.id.includes(q) ||
    cond.description.toLowerCase().includes(q) ||
    cond.category.includes(q)
  );
}

/**
 * Get expanded CV condition by ID
 */
export function getExpandedCVConditionById(id: string): CVConditionEntry | undefined {
  return CV_CONDITIONS_EXPANDED[id];
}

/**
 * Get all expanded CV condition IDs
 */
export function getExpandedCVConditionIds(): string[] {
  return Object.keys(CV_CONDITIONS_EXPANDED);
}

/**
 * Get expanded CV conditions by category
 */
export function getExpandedCVConditionsByCategory(
  category: 'coronary' | 'structural' | 'arrhythmia' | 'vascular' | 'heart-failure' | 'congenital' | 'pericardial'
): CVConditionEntry[] {
  return Object.values(CV_CONDITIONS_EXPANDED).filter(c => c.category === category);
}
