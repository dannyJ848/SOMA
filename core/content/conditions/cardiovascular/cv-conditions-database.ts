/**
 * Cardiovascular Conditions Database
 *
 * Comprehensive reference of 40+ cardiovascular conditions with
 * clinical summaries, patient education, and lifestyle guidance.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type CVCategory =
  | 'coronary'
  | 'structural'
  | 'arrhythmia'
  | 'vascular'
  | 'heart-failure'
  | 'congenital'
  | 'pericardial';

export interface CVConditionEntry {
  id: string;
  name: string;
  nameEs: string;
  category: CVCategory;
  icd11: string;
  description: string;
  riskFactors: string[];
  pathophysiology: string;
  symptoms: string[];
  diagnostics: string[];
  treatment: string;
  lifestyle: string;
  emergencySigns: string[];
  patientExplanation: string;
}

// ---------------------------------------------------------------------------
// Compact helper
// ---------------------------------------------------------------------------

function cv(
  id: string, name: string, nameEs: string,
  category: CVCategory, icd11: string, description: string,
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
// Database
// ---------------------------------------------------------------------------

export const CV_CONDITIONS: Record<string, CVConditionEntry> = {

  // ---- Coronary (7) -------------------------------------------------------

  'stable-angina': cv(
    'stable-angina', 'Stable Angina', 'Angina estable',
    'coronary', 'BA80',
    'Predictable chest discomfort triggered by exertion or stress, relieved by rest or nitroglycerin within minutes.',
    ['Hypertension', 'Hyperlipidemia', 'Diabetes', 'Smoking', 'Family history of CAD', 'Obesity', 'Sedentary lifestyle'],
    'Fixed atherosclerotic plaque narrows coronary arteries, limiting blood flow during increased myocardial oxygen demand. Supply–demand mismatch causes reversible ischemia without myocyte necrosis.',
    ['Substernal chest pressure or tightness with exertion', 'Pain radiating to left arm, jaw, or neck', 'Dyspnea on exertion', 'Relief within 1-5 minutes with rest or nitroglycerin', 'Predictable pattern with consistent triggers'],
    ['Resting 12-lead ECG', 'Exercise stress test (treadmill or pharmacologic)', 'Stress echocardiography', 'Coronary CT angiography', 'Cardiac catheterization if non-invasive tests positive'],
    'Antianginal therapy: sublingual nitroglycerin PRN, beta-blockers or calcium channel blockers for prevention. Antiplatelet (aspirin), statin, ACE inhibitor. Revascularization (PCI or CABG) if refractory or high-risk anatomy.',
    'Smoking cessation, Mediterranean-style diet, moderate aerobic exercise 150 min/week (cardiac rehab), weight management, stress reduction techniques, limit alcohol.',
    ['New or worsening pattern of chest pain', 'Pain at rest lasting >15 minutes', 'No relief after 3 nitroglycerin doses', 'Associated shortness of breath, sweating, or nausea'],
    'Stable angina means a partially blocked artery in your heart cannot deliver enough blood when your heart works harder. Think of it like a garden hose with a kink—water flows fine at low pressure but struggles when you turn it up. Medications help widen the artery and reduce your heart\'s workload. Lifestyle changes can slow or even reverse the blockage over time.',
  ),

  'unstable-angina': cv(
    'unstable-angina', 'Unstable Angina', 'Angina inestable',
    'coronary', 'BA81',
    'Acute chest pain at rest or with minimal exertion, representing an acute coronary syndrome without troponin elevation.',
    ['Known CAD', 'Hypertension', 'Diabetes', 'Smoking', 'Hyperlipidemia', 'Prior MI', 'Cocaine use'],
    'Rupture or erosion of an atherosclerotic plaque leads to partial thrombus formation, critically reducing coronary blood flow without complete occlusion. No sustained myocardial necrosis (troponin-negative).',
    ['New-onset severe chest pain at rest', 'Accelerating pattern of previously stable angina', 'Prolonged chest discomfort >20 minutes', 'Diaphoresis and nausea', 'Dyspnea'],
    ['Serial troponins (remain negative)', '12-lead ECG (ST depression or T-wave inversion)', 'TIMI or GRACE risk score', 'Urgent cardiac catheterization in high-risk patients', 'Continuous telemetry monitoring'],
    'Dual antiplatelet therapy (aspirin + P2Y12 inhibitor), anticoagulation (heparin), beta-blocker, statin, nitroglycerin infusion. Early invasive strategy (catheterization within 24-72h) for intermediate-to-high risk.',
    'Absolute smoking cessation, cardiac rehabilitation, strict lipid and glucose control, DASH or Mediterranean diet, stress management, medication adherence.',
    ['Chest pain not responding to nitroglycerin', 'ST elevation on ECG (upgrade to STEMI)', 'Hemodynamic instability', 'Syncope or near-syncope', 'New arrhythmia'],
    'Unstable angina is a warning that a blockage in your heart artery has become dangerously unstable. Unlike stable angina, pain can occur at rest and is unpredictable. This is treated as a medical emergency because without treatment it can progress to a heart attack. Getting to the hospital quickly allows doctors to stabilize the blockage before permanent heart damage occurs.',
  ),

  'stemi': cv(
    'stemi', 'ST-Elevation Myocardial Infarction (STEMI)', 'Infarto con elevacion del ST (IAMCEST)',
    'coronary', 'BA41.0',
    'Complete coronary artery occlusion causing transmural myocardial ischemia and necrosis. A time-critical cardiac emergency.',
    ['Atherosclerosis', 'Smoking', 'Hypertension', 'Diabetes', 'Hyperlipidemia', 'Family history', 'Age >45 (men) / >55 (women)', 'Cocaine use'],
    'Atherosclerotic plaque rupture with superimposed occlusive thrombus completely blocks coronary blood flow. Myocardial necrosis begins within 20 minutes and progresses transmurally over hours ("time is muscle").',
    ['Severe crushing chest pain >20 minutes', 'Radiation to left arm, jaw, back, or epigastrium', 'Diaphoresis, nausea, vomiting', 'Dyspnea', 'Sense of impending doom', 'Women/diabetics may have atypical presentations'],
    ['12-lead ECG showing ST elevation in 2+ contiguous leads', 'Elevated serial troponins', 'Echocardiography (wall motion abnormality)', 'Emergent coronary angiography'],
    'Emergent reperfusion: primary PCI (door-to-balloon <90 min) or fibrinolysis (door-to-needle <30 min) if PCI unavailable. DAPT, anticoagulation, beta-blocker, ACE inhibitor, high-intensity statin. Cardiac rehab post-discharge.',
    'Cardiac rehabilitation program, smoking cessation, heart-healthy diet, gradual return to exercise under guidance, sexual activity counseling, medication adherence, depression screening.',
    ['Any sudden severe chest pain—call 911 immediately', 'Loss of consciousness', 'Severe shortness of breath', 'Cold, clammy skin with confusion', 'Cardiac arrest'],
    'A STEMI is the most serious type of heart attack. A blood clot completely blocks an artery feeding your heart, and heart muscle begins to die within minutes. That is why calling 911 immediately is critical—every minute of delay means more heart damage. At the hospital, doctors will open the blocked artery with a catheter and stent. Taking your medications afterward and attending cardiac rehab can significantly improve your recovery and prevent another event.',
  ),

  'nstemi': cv(
    'nstemi', 'Non-ST-Elevation Myocardial Infarction (NSTEMI)', 'Infarto sin elevacion del ST (IAMSEST)',
    'coronary', 'BA41.1',
    'Partial coronary occlusion causing myocardial necrosis (troponin-positive) without ST elevation on ECG.',
    ['Same as STEMI', 'Prior ACS', 'Chronic kidney disease', 'Peripheral artery disease'],
    'Plaque rupture or erosion with subtotal thrombus formation or distal embolization. Causes subendocardial (non-transmural) necrosis detected by elevated cardiac troponin.',
    ['Chest pain or pressure at rest or with minimal exertion', 'Dyspnea', 'Diaphoresis', 'Nausea', 'May have intermittent or stuttering symptoms'],
    ['Serial high-sensitivity troponins (elevated)', '12-lead ECG (ST depression, T-wave inversion, or nonspecific changes)', 'GRACE risk score for prognosis', 'Coronary angiography (within 24h for high-risk)'],
    'Antiplatelet (aspirin + ticagrelor or clopidogrel), anticoagulation, beta-blocker, statin, ACE inhibitor. Invasive strategy within 24h for high-risk patients; conservative strategy with stress testing for low-risk.',
    'Cardiac rehabilitation, strict cardiovascular risk factor control, Mediterranean diet, regular moderate exercise, stress management, smoking cessation, medication adherence lifelong.',
    ['Recurrent chest pain despite medical therapy', 'Hemodynamic instability', 'Ventricular arrhythmias', 'Pulmonary edema', 'Cardiogenic shock'],
    'An NSTEMI is a heart attack where the artery is severely narrowed but not completely blocked. Heart muscle is still being damaged—your blood test (troponin) confirms this. Treatment includes blood-thinning medications and usually a catheterization procedure to find and fix the blockage. Recovery involves lifelong medications, cardiac rehabilitation, and lifestyle changes to keep your heart healthy.',
  ),

  'prinzmetal-angina': cv(
    'prinzmetal-angina', 'Prinzmetal\'s (Vasospastic) Angina', 'Angina de Prinzmetal (vasoespastica)',
    'coronary', 'BA80.1',
    'Episodic chest pain caused by transient coronary artery spasm, typically at rest and often nocturnal.',
    ['Smoking', 'Cocaine or amphetamine use', 'Younger age', 'Migraine history', 'Raynaud\'s phenomenon', 'Magnesium deficiency'],
    'Focal smooth muscle spasm of an epicardial coronary artery causes transient transmural ischemia. May occur at sites of minimal atherosclerosis. Endothelial dysfunction and hyperreactive smooth muscle contribute.',
    ['Chest pain at rest, often between midnight and early morning', 'Transient ST elevation during episodes', 'Pain may be severe and mimic STEMI', 'Syncope or arrhythmia during spasm', 'Episodes cluster then remit'],
    ['ECG during episode (transient ST elevation that resolves)', 'Coronary angiography (often normal or minimal disease)', 'Provocative testing with acetylcholine or ergonovine', 'Holter monitoring for nocturnal ST changes', 'Rule out fixed obstructive disease'],
    'Calcium channel blockers (diltiazem, amlodipine—mainstay), long-acting nitrates. Avoid beta-blockers (may worsen spasm). Absolute avoidance of cocaine, triptans, and smoking.',
    'Strict smoking cessation (most important), avoid cocaine and stimulants, stress reduction, magnesium-rich diet, avoid cold exposure triggers, limit alcohol.',
    ['Prolonged spasm not responding to nitroglycerin', 'Ventricular arrhythmia during episode', 'Syncope', 'ST elevation persisting >30 minutes (consider STEMI)'],
    'Prinzmetal\'s angina is caused by a sudden spasm (tightening) of a heart artery, not a permanent blockage. It is like a charley horse in your heart artery. It often happens at rest, especially at night. Smoking and stimulant drugs are major triggers. Calcium channel blockers relax the artery and prevent spasms. Unlike typical angina, beta-blockers can actually make it worse, so accurate diagnosis is important.',
  ),

  'coronary-artery-disease': cv(
    'coronary-artery-disease', 'Coronary Artery Disease (CAD)', 'Enfermedad arterial coronaria (EAC)',
    'coronary', 'BA80',
    'Chronic atherosclerotic narrowing of coronary arteries, the leading cause of death worldwide.',
    ['Hypertension', 'Hyperlipidemia', 'Diabetes mellitus', 'Smoking', 'Obesity', 'Family history of premature CAD', 'Sedentary lifestyle', 'Chronic kidney disease'],
    'Endothelial injury triggers lipid deposition, inflammatory cell recruitment, and fibroproliferative response forming atherosclerotic plaques. Progressive luminal narrowing reduces coronary flow reserve. Plaque rupture causes acute thrombotic events.',
    ['May be asymptomatic for years', 'Exertional chest discomfort or dyspnea', 'Fatigue with activity', 'Can present acutely as ACS', 'Atypical presentations more common in women, diabetics, and elderly'],
    ['Risk factor assessment (lipid panel, HbA1c, BP)', 'Exercise stress testing', 'Coronary calcium score (CT)', 'CT coronary angiography', 'Invasive coronary angiography for definitive diagnosis'],
    'Risk factor modification is cornerstone: statin therapy, antihypertensives, antiplatelet (aspirin if indicated), diabetes management. Revascularization (PCI/CABG) for significant ischemia or refractory symptoms.',
    'Heart-healthy diet (Mediterranean or DASH), exercise 150+ min/week, weight management (BMI <25), smoking cessation, limit alcohol to 1-2 drinks/day, stress management, sleep 7-9 hours.',
    ['New or worsening chest pain', 'Chest pain at rest', 'Sudden shortness of breath', 'Syncope', 'Signs of heart attack (call 911)'],
    'Coronary artery disease means fatty deposits (plaque) have built up in the arteries that supply your heart with blood. Think of it like rust building up inside pipes. Over years, the buildup narrows the pipes and restricts blood flow. The good news is that lifestyle changes—eating better, exercising, not smoking—combined with medications can dramatically slow or even reverse this process. The most important step you can take is controlling your risk factors every day.',
  ),

  'spontaneous-coronary-dissection': cv(
    'spontaneous-coronary-dissection', 'Spontaneous Coronary Artery Dissection (SCAD)', 'Diseccion espontanea de arteria coronaria',
    'coronary', 'BA92',
    'Non-atherosclerotic tear in the coronary artery wall causing intramural hematoma and vessel obstruction.',
    ['Female sex (>90%)', 'Peripartum period', 'Fibromuscular dysplasia', 'Connective tissue disorders', 'Extreme emotional or physical stress', 'Hormonal therapy'],
    'Spontaneous intimal tear or vasa vasorum hemorrhage creates an intramural hematoma that compresses the true lumen, causing myocardial ischemia. Not related to atherosclerosis. Associated with arteriopathies like FMD.',
    ['Acute chest pain (indistinguishable from ACS)', 'Dyspnea', 'Diaphoresis', 'May present as sudden cardiac arrest', 'Often in young women with few traditional risk factors'],
    ['Coronary angiography (pathognomonic appearance)', 'Intravascular ultrasound or OCT for confirmation', 'Elevated troponin', 'Screening for FMD (renal, cerebrovascular imaging)', 'Genetic testing if connective tissue disorder suspected'],
    'Conservative management preferred for most (avoids procedural complications in fragile vessels). Medical therapy: aspirin, beta-blocker, consider short-term DAPT. PCI/CABG reserved for ongoing ischemia or left main involvement. Cardiac rehab.',
    'Gradual return to moderate exercise (avoid extreme exertion), manage emotional stress, avoid isometric straining (heavy lifting), avoid future pregnancies per cardiology guidance, cardiac rehabilitation.',
    ['Recurrent chest pain after initial event', 'Hemodynamic instability', 'Ventricular arrhythmia', 'Sudden cardiac arrest'],
    'SCAD is a rare cause of heart attack, most common in younger women. Unlike a typical heart attack from cholesterol buildup, a tear develops in the wall of a heart artery. The torn tissue can block blood flow. Most cases heal on their own with medications and rest—surgery is usually not needed. Screening for related blood vessel conditions is important. While recurrence is possible, most patients do well long-term with appropriate follow-up.',
  ),

  // ---- Structural (7) -----------------------------------------------------

  'aortic-stenosis': cv(
    'aortic-stenosis', 'Aortic Stenosis', 'Estenosis aortica',
    'structural', 'BB80.0',
    'Narrowing of the aortic valve obstructing left ventricular outflow, the most common valvular disease requiring intervention.',
    ['Age >65 (degenerative calcific)', 'Bicuspid aortic valve (congenital)', 'Rheumatic heart disease', 'Chronic kidney disease', 'Radiation therapy'],
    'Progressive calcification and fibrosis of aortic valve leaflets restricts opening (normal area 3-4 cm2, severe <1 cm2). LV faces increased afterload, develops concentric hypertrophy, eventually decompensates.',
    ['Exertional dyspnea (most common)', 'Angina with exertion', 'Exertional syncope or presyncope', 'Harsh crescendo-decrescendo systolic murmur (best at right 2nd ICS radiating to carotids)', 'Late: heart failure symptoms'],
    ['Echocardiography (valve area, mean gradient, jet velocity)', 'ECG (LVH, left atrial enlargement)', 'Cardiac catheterization if discordant findings', 'CT calcium scoring of aortic valve', 'Exercise testing only if asymptomatic'],
    'Symptomatic severe AS requires valve replacement: surgical aortic valve replacement (SAVR) or transcatheter (TAVR). No medical therapy reverses stenosis. Avoid vasodilators that may cause hypotension. Manage heart failure symptoms as bridge to intervention.',
    'Moderate activity as tolerated (avoid strenuous exertion if severe), dental hygiene (endocarditis prevention), regular follow-up echocardiograms, heart-healthy diet, weight management.',
    ['New syncope or near-syncope', 'Chest pain with exertion', 'Worsening shortness of breath', 'Sudden inability to perform usual activities', 'Signs of heart failure'],
    'Aortic stenosis means the main exit valve of your heart has become stiff and narrow. Your heart must pump harder to push blood through this tight opening. Over time, the heart muscle thickens and eventually weakens. Once symptoms appear—chest pain, fainting, or breathlessness with activity—valve replacement is needed. Modern options include traditional surgery or a less invasive catheter-based procedure (TAVR) inserted through a small incision. After valve replacement, most patients experience dramatic improvement.',
  ),

  'aortic-regurgitation': cv(
    'aortic-regurgitation', 'Aortic Regurgitation', 'Insuficiencia aortica',
    'structural', 'BB81.1',
    'Backflow of blood from the aorta into the left ventricle during diastole due to incompetent aortic valve closure.',
    ['Bicuspid aortic valve', 'Rheumatic heart disease', 'Infective endocarditis', 'Aortic root dilation (Marfan, aortic dissection)', 'Hypertension'],
    'Incompetent aortic valve allows diastolic regurgitant flow into the LV, causing volume overload. Chronic AR leads to eccentric LV hypertrophy and dilation. Acute AR (endocarditis, dissection) causes sudden LV overload without compensatory dilation.',
    ['Chronic: often asymptomatic for years, then exertional dyspnea, palpitations, bounding pulses', 'Wide pulse pressure', 'Early diastolic blowing murmur (left sternal border)', 'Acute: sudden pulmonary edema, cardiogenic shock'],
    ['Echocardiography (regurgitant volume, LV dimensions)', 'ECG (LVH)', 'Chest X-ray (cardiomegaly, aortic root dilation)', 'Cardiac MRI for precise regurgitant fraction', 'CT/MRI of aorta if root pathology suspected'],
    'Chronic: vasodilators (ACE inhibitors, nifedipine) for afterload reduction, diuretics for symptoms. Surgical aortic valve replacement when symptomatic or LV dilating (LVESD >50mm or LVEF <55%). Acute severe AR: emergency surgery.',
    'Regular echocardiographic monitoring, moderate exercise (avoid heavy isometric exercise if severe), blood pressure control, dental hygiene, heart-healthy diet.',
    ['Sudden severe shortness of breath (acute AR)', 'Rapid heart rate with chest pain', 'Signs of pulmonary edema', 'Syncope', 'Fever with known AR (endocarditis concern)'],
    'Aortic regurgitation means your aortic valve does not close tightly, so blood leaks backward into your heart after each beat. In the chronic form, your heart gradually enlarges to handle the extra volume, and you may feel fine for years. Regular ultrasound monitoring is key to catching the right time for valve surgery—before your heart stretches too much. If you develop breathlessness or notice your heart racing, report it promptly.',
  ),

  'mitral-stenosis': cv(
    'mitral-stenosis', 'Mitral Stenosis', 'Estenosis mitral',
    'structural', 'BB80.2',
    'Narrowing of the mitral valve obstructing blood flow from the left atrium to the left ventricle, most commonly from rheumatic heart disease.',
    ['Prior rheumatic fever (most common worldwide)', 'Age-related calcification', 'Lupus', 'Carcinoid syndrome', 'Radiation therapy'],
    'Rheumatic inflammation causes commissural fusion, leaflet thickening, and chordal shortening. Reduced mitral valve area (normal 4-6 cm2, severe <1.5 cm2) impedes diastolic LV filling, causing left atrial pressure elevation, pulmonary hypertension, and eventual right heart failure.',
    ['Exertional dyspnea (earliest symptom)', 'Orthopnea and PND', 'Hemoptysis', 'Atrial fibrillation and palpitations', 'Opening snap and low-pitched diastolic rumble (best at apex, left lateral decubitus)', 'Malar flush (mitral facies)'],
    ['Echocardiography (valve area, transmitral gradient, pulmonary pressure)', 'ECG (P mitrale, AFib)', 'Chest X-ray (left atrial enlargement, pulmonary congestion)', 'TEE for thrombus assessment before intervention'],
    'Medical: diuretics for congestion, rate control for AFib (beta-blocker or digoxin), anticoagulation if AFib. Intervention: percutaneous mitral balloon commissurotomy (PMBC) if favorable anatomy; surgical repair or MVR if not.',
    'Sodium restriction, daily weight monitoring, moderate exercise as tolerated, anticoagulation management if on warfarin (INR monitoring, dietary vitamin K consistency), dental hygiene.',
    ['Sudden severe dyspnea (flash pulmonary edema)', 'Hemoptysis', 'Stroke symptoms (atrial thrombus embolization)', 'New rapid irregular heartbeat', 'Chest pain'],
    'Mitral stenosis means the valve between your upper and lower left heart chambers has become stiff and narrow, usually from a childhood strep infection that caused rheumatic fever. Blood backs up into your lungs, making you short of breath. Treatment can include a balloon procedure to stretch the valve open or surgery to repair or replace it. If you also develop an irregular heartbeat (atrial fibrillation), blood thinners are essential to prevent stroke.',
  ),

  'mitral-regurgitation': cv(
    'mitral-regurgitation', 'Mitral Regurgitation', 'Insuficiencia mitral',
    'structural', 'BB81.3',
    'Backflow of blood from the left ventricle into the left atrium during systole due to incompetent mitral valve closure.',
    ['Mitral valve prolapse', 'Ischemic heart disease', 'Dilated cardiomyopathy', 'Rheumatic heart disease', 'Endocarditis', 'Connective tissue disorders'],
    'Primary MR: intrinsic valve pathology (prolapse, leaflet perforation). Secondary MR: LV dilation distorts annulus and papillary muscle geometry. Regurgitant volume causes LA and LV volume overload, eventually leading to pulmonary hypertension and heart failure.',
    ['Chronic: exertional dyspnea, fatigue, palpitations', 'Holosystolic murmur at apex radiating to axilla', 'Acute: sudden pulmonary edema and shock (papillary muscle rupture, chordal rupture)', 'AFib in advanced disease'],
    ['Echocardiography (regurgitant volume, EROA, LV function)', 'TEE for surgical planning', 'ECG (LAE, AFib, LVH)', 'Cardiac MRI for quantification', 'Coronary angiography pre-surgery'],
    'Chronic: medical management of HF (ACE inhibitor, diuretics, beta-blocker). Surgical repair preferred over replacement when feasible. MitraClip (transcatheter) for high-surgical-risk patients. Acute severe MR: emergency surgery.',
    'Regular exercise as tolerated (avoid extreme exertion if severe), sodium restriction, daily weight monitoring, dental hygiene, regular echocardiographic follow-up.',
    ['Sudden severe shortness of breath', 'Pink frothy sputum', 'Rapid irregular heartbeat', 'Inability to lie flat', 'Signs of shock'],
    'Mitral regurgitation means your mitral valve leaks, allowing blood to flow backward in your heart with each beat. A small leak may cause no problems for years. A significant leak makes your heart work harder and can lead to heart failure over time. Repair surgery (preferred over replacement) can often fix the valve. Your doctor will monitor you with regular heart ultrasounds to determine the best timing for intervention.',
  ),

  'mitral-valve-prolapse': cv(
    'mitral-valve-prolapse', 'Mitral Valve Prolapse', 'Prolapso de la valvula mitral',
    'structural', 'BB82',
    'Displacement of one or both mitral valve leaflets into the left atrium during systole, the most common valvular abnormality.',
    ['Female sex', 'Connective tissue disorders (Marfan, Ehlers-Danlos)', 'Family history', 'Thin body habitus'],
    'Myxomatous degeneration causes redundant, thickened leaflet tissue that billows into the left atrium during systole. Most cases are benign; a subset develops progressive MR due to leaflet elongation and chordal stretching.',
    ['Most patients are asymptomatic', 'Mid-systolic click with or without late systolic murmur', 'Atypical chest pain', 'Palpitations', 'Anxiety', 'Rarely: significant mitral regurgitation'],
    ['Echocardiography (leaflet displacement >2mm above annular plane)', 'Assessment of MR severity', 'ECG if palpitations (usually normal or mild arrhythmias)', 'Holter monitor for symptomatic palpitations'],
    'Most require no treatment—reassurance. Beta-blocker for symptomatic palpitations. If significant MR develops, manage as mitral regurgitation (see above). Surgical repair if MR becomes severe.',
    'Regular exercise is encouraged, adequate hydration (dehydration worsens symptoms), limit caffeine if palpitations, stress management, routine follow-up echocardiography if MR present.',
    ['New or worsening murmur', 'Syncope', 'Rapid irregular heartbeat lasting >minutes', 'Transient neurologic symptoms', 'Progressive dyspnea'],
    'Mitral valve prolapse means one of your heart valves is slightly floppy and billows backward when your heart beats. This is very common and almost always harmless. Most people with MVP live completely normal lives without treatment. The clicking sound your doctor hears is the floppy valve snapping. A small number of people develop a leak that needs monitoring. Stay hydrated, exercise normally, and keep your follow-up appointments.',
  ),

  'infective-endocarditis': cv(
    'infective-endocarditis', 'Infective Endocarditis', 'Endocarditis infecciosa',
    'structural', 'BB22',
    'Infection of the heart valve endothelium, forming vegetations that can destroy valves and embolize systemically.',
    ['Prosthetic heart valves', 'Prior endocarditis', 'IV drug use', 'Congenital heart defects', 'Poor dental hygiene', 'Immunosuppression', 'Indwelling central lines'],
    'Bacteremia seeds damaged or prosthetic valve endothelium. Organisms (Staph aureus, Streptococci, Enterococci) form infected vegetations of fibrin, platelets, and bacteria. Valve destruction, abscess formation, and septic emboli cause multisystem damage.',
    ['Fever (most common)', 'New or changing heart murmur', 'Petechiae, splinter hemorrhages, Janeway lesions, Osler nodes', 'Embolic events (stroke, splenic infarct, septic pulmonary emboli)', 'Malaise, weight loss, night sweats'],
    ['Blood cultures (3 sets before antibiotics—cornerstone)', 'Echocardiography (TTE first, TEE for better sensitivity)', 'Modified Duke criteria for diagnosis', 'CBC, ESR, CRP, urinalysis', 'CT/MRI for embolic complications'],
    'Prolonged IV antibiotics (4-6 weeks, organism-specific). Surgical valve replacement/repair if: heart failure, uncontrolled infection, large vegetation (>10mm), embolic events, abscess, or prosthetic valve endocarditis. Empiric: vancomycin + gentamicin pending cultures.',
    'Excellent dental hygiene (brush, floss, regular cleanings), avoid IV drug use, care for any chronic wounds, recognize early signs of infection, endocarditis prophylaxis with antibiotics before dental procedures if high-risk.',
    ['High fever with known valve disease', 'Stroke-like symptoms', 'Sudden vision loss', 'New heart failure', 'Embolic events (painful fingers/toes, abdominal pain)'],
    'Endocarditis is an infection that settles on a heart valve, forming a cluster of bacteria. This infection can damage the valve and send infected fragments to other parts of the body (brain, kidneys, skin). Treatment requires weeks of IV antibiotics, and some patients need surgery to replace the damaged valve. Prevention is critical—good dental care and avoiding IV drug use are the most important steps. If you have an artificial valve or certain heart conditions, tell your dentist so you can receive protective antibiotics before procedures.',
  ),

  'rheumatic-heart-disease': cv(
    'rheumatic-heart-disease', 'Rheumatic Heart Disease', 'Cardiopatia reumatica',
    'structural', 'BB40',
    'Chronic valvular damage from one or more episodes of acute rheumatic fever, most commonly affecting the mitral valve.',
    ['Prior Group A streptococcal pharyngitis', 'Poverty and overcrowding', 'Limited healthcare access', 'Recurrent rheumatic fever episodes', 'Endemic regions (sub-Saharan Africa, South Asia)'],
    'Molecular mimicry: Group A strep M protein shares epitopes with cardiac myosin and valve tissue. Autoimmune cross-reactivity causes pancarditis. Chronic inflammation leads to valve fibrosis, commissural fusion, and calcification—predominantly mitral stenosis.',
    ['Acute RF: migratory polyarthritis, carditis, Sydenham chorea, erythema marginatum, subcutaneous nodules', 'Chronic RHD: exertional dyspnea, palpitations (AFib), fatigue', 'Murmur of mitral stenosis or regurgitation', 'Signs of heart failure in advanced disease'],
    ['Echocardiography (valve morphology, severity)', 'Modified Jones criteria for acute RF', 'Throat culture or rapid strep test', 'ASO titer, anti-DNase B', 'ESR, CRP elevated in acute RF'],
    'Acute RF: aspirin/NSAIDs for arthritis, corticosteroids for severe carditis, penicillin to eradicate strep. Secondary prophylaxis: monthly IM benzathine penicillin (10+ years or until age 40). Valve intervention for severe valvular disease.',
    'Adherence to prophylactic penicillin injections (most important), prompt treatment of sore throats, regular cardiac follow-up, sodium restriction if heart failure, dental hygiene.',
    ['Worsening dyspnea or exercise intolerance', 'Stroke symptoms', 'Fever with new murmur (endocarditis risk)', 'Rapid irregular heartbeat', 'Hemoptysis'],
    'Rheumatic heart disease happens when strep throat triggers an immune reaction that damages heart valves. It is most common in developing countries but can affect anyone. The key to prevention is treating strep throat early with antibiotics and continuing preventive penicillin injections for years to prevent repeat damage. If significant valve damage has already occurred, surgery may eventually be needed. Monthly penicillin injections are a small price to pay for protecting your heart.',
  ),

  // ---- Arrhythmia (8) -----------------------------------------------------

  'atrial-fibrillation': cv(
    'atrial-fibrillation', 'Atrial Fibrillation (AFib)', 'Fibrilacion auricular',
    'arrhythmia', 'BC81',
    'Irregular and often rapid heart rhythm originating from chaotic atrial electrical activity, the most common sustained arrhythmia.',
    ['Age >65', 'Hypertension', 'Heart failure', 'Valvular disease', 'Obesity', 'Obstructive sleep apnea', 'Thyroid disease', 'Alcohol use ("holiday heart")', 'Diabetes'],
    'Multiple re-entrant wavelets and/or focal triggers (often from pulmonary veins) cause rapid, disorganized atrial depolarization (350-600/min). Loss of coordinated atrial contraction reduces cardiac output by 15-25% and promotes stasis/thrombus in the left atrial appendage.',
    ['Palpitations (rapid, irregular)', 'Dyspnea', 'Fatigue and exercise intolerance', 'Dizziness or lightheadedness', 'Some patients are asymptomatic', 'Irregularly irregular pulse'],
    ['12-lead ECG (absent P waves, irregularly irregular RR intervals)', 'Holter or event monitor for paroxysmal AFib', 'Echocardiography (LA size, LV function, valvular disease)', 'TSH, electrolytes', 'CHA2DS2-VASc score for stroke risk', 'TEE before cardioversion if >48h or unknown duration'],
    'Rate control: beta-blocker or CCB (diltiazem/verapamil), digoxin. Rhythm control: cardioversion, antiarrhythmics (amiodarone, flecainide, sotalol), catheter ablation. Anticoagulation per CHA2DS2-VASc: DOACs preferred over warfarin. LAA occlusion device if anticoagulation contraindicated.',
    'Weight loss (10% reduces AFib burden significantly), treat sleep apnea, limit alcohol (ideally abstain), regular moderate exercise, manage blood pressure, reduce caffeine if triggers episodes, stress management.',
    ['Very rapid heart rate (>150 bpm) with dizziness', 'Chest pain', 'Severe shortness of breath', 'Fainting', 'Signs of stroke (face drooping, arm weakness, speech difficulty)—call 911'],
    'Atrial fibrillation means the upper chambers of your heart quiver chaotically instead of beating in a coordinated way. This causes an irregular and often fast heartbeat. The biggest risk is stroke—blood can pool and form clots in the quivering chambers. Blood thinners dramatically reduce this risk. Treatment focuses on controlling the heart rate, sometimes restoring normal rhythm, and preventing stroke. Lifestyle changes like losing weight, treating sleep apnea, and limiting alcohol can significantly improve AFib.',
  ),

  'atrial-flutter': cv(
    'atrial-flutter', 'Atrial Flutter', 'Aleteo auricular',
    'arrhythmia', 'BC82',
    'Organized rapid atrial rhythm, typically at 300 bpm with variable AV conduction (commonly 2:1 producing a ventricular rate of 150 bpm).',
    ['Same as AFib', 'Prior cardiac surgery', 'COPD', 'Pulmonary embolism', 'Thyrotoxicosis'],
    'Macro-reentrant circuit, most commonly in the right atrium around the tricuspid annulus (typical flutter, counterclockwise through the cavotricuspid isthmus). Produces characteristic sawtooth flutter waves at ~300/min.',
    ['Palpitations (regular, rapid)', 'Dyspnea', 'Fatigue', 'Dizziness', 'Flutter waves visible in neck veins', 'Ventricular rate often exactly 150 bpm (2:1 block)'],
    ['12-lead ECG (sawtooth flutter waves, especially leads II, III, aVF)', 'Echocardiography', 'TSH', 'Electrolytes', 'CHA2DS2-VASc score (same stroke risk as AFib)'],
    'Rate control often difficult (resistant to medications). Rhythm control: electrical cardioversion very effective. Catheter ablation of cavotricuspid isthmus (>95% success for typical flutter—often curative). Anticoagulation same as AFib.',
    'Similar to AFib: weight management, treat sleep apnea, limit alcohol, regular exercise, blood pressure control.',
    ['Rapid heart rate >150 with hemodynamic compromise', 'Chest pain', 'Presyncope or syncope', 'Severe shortness of breath', 'Stroke symptoms'],
    'Atrial flutter is similar to atrial fibrillation but more organized—the upper chamber beats very fast (about 300 times per minute) in a regular pattern, though your heart\'s natural gatekeeper lets only every second or third beat through. It carries similar stroke risks and requires blood thinners. The good news is that typical atrial flutter can often be permanently cured with a catheter ablation procedure that has a very high success rate.',
  ),

  'svt': cv(
    'svt', 'Supraventricular Tachycardia (SVT)', 'Taquicardia supraventricular (TSV)',
    'arrhythmia', 'BC83',
    'Rapid regular heart rhythm (150-250 bpm) originating above the ventricles, most commonly AVNRT or AVRT.',
    ['Young age (often 20s-30s)', 'Female sex', 'Caffeine or stimulant use', 'Accessory pathway (WPW)', 'Stress', 'Anxiety'],
    'AVNRT: dual AV nodal physways create a micro-reentrant circuit. AVRT: macro-reentrant circuit using an accessory pathway (Bundle of Kent in WPW). Triggered by premature atrial or ventricular beats initiating the circuit.',
    ['Sudden onset rapid regular palpitations', 'Heart rate 150-250 bpm', 'Dizziness or lightheadedness', 'Chest tightness', 'Anxiety', 'Polyuria (ANP release)', 'Abrupt termination'],
    ['12-lead ECG during episode (narrow complex tachycardia, regular)', 'Vagal maneuvers may terminate and be diagnostic', 'Adenosine (diagnostic and therapeutic)', 'Holter/event monitor if paroxysmal', 'Electrophysiology study for definitive diagnosis'],
    'Acute: vagal maneuvers (Valsalva, carotid sinus massage, cold water face immersion), IV adenosine 6mg then 12mg. Chronic: catheter ablation (>95% cure rate, first-line for recurrent), or pill-in-pocket flecainide/propafenone, or daily beta-blocker/CCB.',
    'Identify and avoid triggers (caffeine, alcohol, sleep deprivation, stress), stay well-hydrated, learn vagal maneuvers, regular exercise is safe and encouraged, manage stress.',
    ['Episode lasting >30 minutes despite vagal maneuvers', 'Chest pain', 'Syncope', 'Severe shortness of breath', 'Heart rate >200 with hemodynamic instability'],
    'SVT is a sudden episode of very fast heartbeat caused by an extra electrical circuit in your heart. It is not life-threatening in most cases but can be frightening. You may feel your heart racing suddenly at 150-250 beats per minute, then it stops just as suddenly. Simple techniques like bearing down or putting ice water on your face can sometimes stop an episode. A catheter ablation procedure can permanently cure SVT in over 95% of cases with minimal risk.',
  ),

  'ventricular-tachycardia': cv(
    'ventricular-tachycardia', 'Ventricular Tachycardia (VT)', 'Taquicardia ventricular (TV)',
    'arrhythmia', 'BC84',
    'Rapid heart rhythm originating in the ventricles (>100 bpm, 3+ consecutive beats), potentially life-threatening.',
    ['Prior myocardial infarction (scar-related)', 'Heart failure/cardiomyopathy', 'Electrolyte imbalances (K+, Mg2+)', 'QT-prolonging drugs', 'Myocarditis', 'Arrhythmogenic RV cardiomyopathy'],
    'Re-entry around ventricular scar tissue (most common), or abnormal automaticity/triggered activity. Scarred myocardium creates areas of slow conduction that sustain re-entrant circuits. Can degenerate into ventricular fibrillation.',
    ['Palpitations', 'Dizziness or syncope', 'Chest pain', 'Dyspnea', 'Hemodynamic compromise (hypotension)', 'Pulseless VT = cardiac arrest'],
    ['12-lead ECG (wide complex tachycardia, AV dissociation)', 'Echocardiography (LV function, structural disease)', 'Cardiac MRI (scar characterization)', 'Electrophysiology study', 'Electrolytes, drug levels', 'Coronary evaluation'],
    'Acute stable VT: IV amiodarone or procainamide. Unstable/pulseless VT: immediate synchronized cardioversion or defibrillation. Long-term: ICD implantation (primary or secondary prevention), catheter ablation for recurrent VT, antiarrhythmics (amiodarone, sotalol), treat underlying cause.',
    'Strict medication adherence, avoid QT-prolonging drugs, maintain electrolytes (potassium, magnesium), limit alcohol, moderate exercise per cardiologist guidance, ICD precautions (avoid strong magnets), carry medical ID.',
    ['Rapid heartbeat with dizziness or fainting', 'Loss of consciousness', 'Cardiac arrest (no pulse)—begin CPR and call 911', 'ICD shock', 'Chest pain with palpitations'],
    'Ventricular tachycardia is a fast rhythm from the lower heart chambers that can be dangerous. It often occurs in people with prior heart damage. Treatment may include an implantable defibrillator (ICD)—a small device placed under your skin that monitors your heartbeat and delivers a shock if a dangerous rhythm occurs. Think of it as a personal paramedic inside your chest. Medications and sometimes ablation procedures also help prevent episodes. Keeping your potassium and magnesium levels normal is important.',
  ),

  'ventricular-fibrillation': cv(
    'ventricular-fibrillation', 'Ventricular Fibrillation (VF)', 'Fibrilacion ventricular (FV)',
    'arrhythmia', 'BC84.1',
    'Chaotic electrical activity in the ventricles producing no effective cardiac output. The most common cause of sudden cardiac death.',
    ['Acute MI', 'Prior MI with scar', 'Severe heart failure', 'Cardiomyopathy', 'Electrolyte imbalances', 'Drowning/electrocution', 'Inherited channelopathies (Long QT, Brugada)'],
    'Completely disorganized ventricular depolarization. Multiple micro-reentrant circuits produce chaotic quivering with no coordinated contraction, no cardiac output, and clinical death within minutes without intervention.',
    ['Sudden cardiac arrest', 'Loss of consciousness', 'No pulse', 'Agonal breathing or no breathing', 'Often preceded by VT'],
    ['ECG/AED showing VF (chaotic, no QRS complexes)', 'Post-resuscitation: echocardiography, coronary angiography, cardiac MRI', 'Electrolytes, toxicology', 'Genetic testing if young/structurally normal heart'],
    'Immediate defibrillation (every minute of delay reduces survival ~10%). CPR until defibrillator available. ACLS protocol: epinephrine, amiodarone. Post-resuscitation: targeted temperature management, PCI if STEMI, ICD implantation for secondary prevention, treat reversible causes.',
    'Post-ICD: medication adherence, regular device checks, avoid known triggers, cardiac rehabilitation, driving restrictions per guidelines, psychological support, CPR training for family members.',
    ['VF IS the emergency—call 911, begin CPR immediately, use AED if available', 'Every second counts', 'Do not wait to see if person recovers', 'Continue CPR until paramedics arrive'],
    'Ventricular fibrillation is the most dangerous heart rhythm—the heart quivers uselessly and cannot pump blood. Without treatment, death occurs within minutes. CPR and an AED (automated defibrillator, found in many public places) can save a life. If someone collapses and is not breathing normally: call 911, start chest compressions, and use an AED. Survivors receive an implantable defibrillator to protect against future episodes. Learning CPR is one of the most important things you can do—you could save a loved one\'s life.',
  ),

  'bradycardia': cv(
    'bradycardia', 'Symptomatic Bradycardia', 'Bradicardia sintomatica',
    'arrhythmia', 'BC85',
    'Heart rate below 60 bpm causing symptoms from inadequate cardiac output. Includes sinus node dysfunction and AV block.',
    ['Aging (fibrosis of conduction system)', 'Medications (beta-blockers, CCBs, digoxin, amiodarone)', 'Hypothyroidism', 'Sleep apnea', 'Inferior MI', 'Increased vagal tone (athletes)', 'Post-cardiac surgery'],
    'Sinus node dysfunction: degeneration of pacemaker cells reduces automaticity. AV block: impaired conduction through AV node (1st/2nd degree) or His-Purkinje system (3rd degree). Drug-induced: suppression of sinus node or AV conduction.',
    ['Fatigue and exercise intolerance', 'Dizziness or lightheadedness', 'Syncope or presyncope', 'Dyspnea on exertion', 'Cognitive slowing or confusion', 'Some patients are asymptomatic (especially trained athletes)'],
    ['12-lead ECG (heart rate, rhythm, AV conduction)', 'Holter or event monitor (correlate symptoms with bradycardia)', 'Electrophysiology study if diagnosis uncertain', 'TSH, electrolytes, drug levels', 'Exercise testing (chronotropic incompetence)'],
    'Identify and correct reversible causes (stop offending drugs, treat hypothyroidism, treat sleep apnea). Acute symptomatic: atropine 0.5-1mg IV, temporary pacing. Permanent pacemaker for: symptomatic sinus node dysfunction, high-grade or complete AV block, chronotropic incompetence.',
    'If pacemaker implanted: regular device follow-up, carry ID card, avoid MRI unless MRI-conditional device, alert security (metal detectors), avoid strong electromagnetic fields, normal exercise and activity encouraged.',
    ['Syncope or near-syncope', 'Heart rate <40 with symptoms', 'Prolonged pauses >3 seconds on monitoring', 'New complete heart block', 'Hemodynamic instability'],
    'Bradycardia means your heart beats too slowly. For athletes, a slow heart rate is normal and healthy. But for others, it can mean the heart\'s electrical system is not working properly. If your slow heartbeat causes dizziness, fainting, or fatigue, a pacemaker can help. A pacemaker is a small device implanted under the skin near your collarbone that sends tiny electrical signals to keep your heart beating at a normal rate. Modern pacemakers are very reliable and allow you to live a fully active life.',
  ),

  'long-qt-syndrome': cv(
    'long-qt-syndrome', 'Long QT Syndrome', 'Sindrome de QT largo',
    'arrhythmia', 'BC86',
    'Prolongation of the QT interval predisposing to polymorphic VT (torsades de pointes) and sudden cardiac death.',
    ['Congenital: genetic mutations (KCNQ1-LQT1, KCNH2-LQT2, SCN5A-LQT3)', 'Acquired: QT-prolonging drugs (antiarrhythmics, antibiotics, antipsychotics, antiemetics)', 'Hypokalemia, hypomagnesemia', 'Female sex', 'Bradycardia', 'Heart failure'],
    'Prolonged ventricular repolarization from dysfunctional cardiac ion channels (K+ or Na+). Creates dispersion of refractoriness, enabling triggered activity (early afterdepolarizations) that can initiate torsades de pointes—a polymorphic VT that can degenerate into VF.',
    ['Often asymptomatic until first event', 'Syncope (especially with exercise or emotional stress—LQT1; or auditory stimuli—LQT2)', 'Seizures (misdiagnosed epilepsy)', 'Sudden cardiac arrest', 'Family history of sudden death', 'Palpitations'],
    ['12-lead ECG (QTc >470ms males, >480ms females)', 'Genetic testing (identifies mutation in ~75% of congenital LQTS)', 'Exercise stress test (QT response to heart rate)', 'Family screening with ECG', 'Schwartz score for clinical probability', 'Review medication list for QT-prolonging drugs'],
    'Beta-blockers (nadolol or propranolol—cornerstone for congenital LQTS). Avoid QT-prolonging drugs (CredibleMeds.org list). ICD for cardiac arrest survivors or high-risk patients. Left cardiac sympathetic denervation for refractory cases. Correct electrolytes.',
    'Avoid QT-prolonging medications (carry a list), maintain normal potassium and magnesium, avoid trigger-specific activities (competitive swimming in LQT1, loud alarm clocks in LQT2), genetic counseling for family planning, medical alert identification.',
    ['Syncope or seizure', 'Cardiac arrest', 'ICD shock', 'Family member with sudden unexplained death', 'QTc >500ms on ECG'],
    'Long QT syndrome is a condition where your heart\'s electrical system takes too long to reset between beats. This can trigger a dangerous fast rhythm. Many people have it without knowing. It can be inherited (genetic) or caused by certain medications. Beta-blocker medications are very effective at preventing dangerous episodes. Knowing which medications to avoid is critical—always tell every doctor and pharmacist about your diagnosis. Family members should be screened because the genetic form runs in families.',
  ),

  'wpw': cv(
    'wpw', 'Wolff-Parkinson-White Syndrome (WPW)', 'Sindrome de Wolff-Parkinson-White',
    'arrhythmia', 'BC87',
    'Pre-excitation syndrome with an accessory pathway (Bundle of Kent) bypassing the AV node, predisposing to SVT and rarely sudden death.',
    ['Congenital (present from birth)', 'Ebstein anomaly', 'Family history', 'Male sex (more commonly symptomatic)'],
    'An accessory pathway (Bundle of Kent) connects atria and ventricles, bypassing the AV node. This creates a circuit for re-entrant tachycardia (orthodromic AVRT). In AFib, rapid conduction through the accessory pathway can cause extremely fast ventricular rates potentially leading to VF.',
    ['Palpitations (rapid, regular SVT episodes)', 'Dizziness or syncope', 'Chest discomfort', 'ECG: short PR interval, delta wave, wide QRS (pre-excitation pattern)', 'May be asymptomatic (discovered incidentally)'],
    ['12-lead ECG (delta wave, short PR, wide QRS)', 'Electrophysiology study (localize pathway, assess risk, guide ablation)', 'Echocardiography (assess for Ebstein anomaly)', 'Exercise testing (if delta wave disappears at higher rates, lower risk)'],
    'Catheter ablation of accessory pathway (first-line, >95% success, potentially curative). Medical therapy: flecainide or propafenone for SVT prevention. AVOID AV nodal blockers (verapamil, digoxin, adenosine) during AFib with WPW—can cause VF. Procainamide for pre-excited AFib.',
    'Once ablated, most patients have no restrictions. Before ablation: avoid stimulants, stay hydrated, learn vagal maneuvers, wear medical alert identification, know which medications are contraindicated.',
    ['Very rapid palpitations with hemodynamic instability', 'Syncope', 'Pre-excited AFib (irregular wide complex tachycardia—medical emergency)', 'Cardiac arrest'],
    'WPW means you have an extra electrical wire in your heart that you were born with. This extra wire can cause episodes of very fast heartbeat. For most people, these episodes are uncomfortable but not dangerous. However, in rare cases, if you develop atrial fibrillation, the extra wire can conduct signals too fast to the lower chambers. Catheter ablation—a procedure where a thin wire is threaded to your heart to eliminate the extra pathway—cures WPW in over 95% of cases. Importantly, certain common heart medications are dangerous in WPW, so always carry information about your diagnosis.',
  ),

  // ---- Vascular (8) -------------------------------------------------------

  'hypertension': cv(
    'hypertension', 'Hypertension (High Blood Pressure)', 'Hipertension arterial',
    'vascular', 'BA00',
    'Persistently elevated blood pressure (>130/80 mmHg), the leading modifiable risk factor for cardiovascular disease worldwide.',
    ['Family history', 'Obesity', 'High sodium diet', 'Physical inactivity', 'Excessive alcohol', 'Age', 'African American race', 'Chronic kidney disease', 'Sleep apnea', 'Stress'],
    'Primary (essential, 90%): multifactorial—genetic susceptibility, sodium retention, RAAS activation, sympathetic overactivity, endothelial dysfunction. Secondary (10%): renal artery stenosis, primary aldosteronism, pheochromocytoma, Cushing, coarctation, thyroid/parathyroid disease.',
    ['Usually asymptomatic ("silent killer")', 'Headache (severe hypertension)', 'Visual changes', 'Epistaxis', 'Dizziness', 'Target organ damage: LVH, CKD, retinopathy, stroke, MI'],
    ['Office BP measurement (properly sized cuff, seated, 2+ readings)', 'Ambulatory BP monitoring (gold standard)', 'Home BP monitoring', 'Labs: BMP, lipid panel, CBC, urinalysis, HbA1c, TSH', 'ECG for LVH', 'Secondary workup if refractory or onset <30'],
    'Lifestyle modifications for all. Stage 1 (130-139/80-89): lifestyle +/- medication if high CVD risk. Stage 2 (>140/90): lifestyle + medication. First-line: ACE inhibitor/ARB, CCB, or thiazide diuretic. Many patients need 2-3 agents. Target <130/80 for most adults.',
    'DASH diet (rich in fruits, vegetables, whole grains, low-fat dairy), sodium <2300mg/day (ideally <1500mg), regular aerobic exercise 150 min/week, weight loss (each kg lost drops BP ~1 mmHg), limit alcohol, quit smoking, manage stress, adequate sleep.',
    ['BP >180/120 with symptoms (hypertensive emergency)', 'Sudden severe headache', 'Vision changes or loss', 'Chest pain', 'Confusion or neurological symptoms', 'Blood in urine'],
    'High blood pressure is called the "silent killer" because it usually has no symptoms but silently damages your heart, brain, kidneys, and blood vessels over years. Think of it like too much pressure in a garden hose—eventually it damages everything downstream. The good news is that lifestyle changes alone can significantly lower your blood pressure. Reducing salt, losing weight, exercising, and eating more fruits and vegetables are powerful medicine. When medications are needed, they are effective and generally well-tolerated. Checking your blood pressure regularly at home helps you and your doctor stay on track.',
  ),

  'hypertensive-emergency': cv(
    'hypertensive-emergency', 'Hypertensive Emergency', 'Emergencia hipertensiva',
    'vascular', 'BA03',
    'Severely elevated BP (>180/120) with acute target organ damage (brain, heart, kidneys, eyes), requiring immediate IV therapy.',
    ['Non-adherence to antihypertensives (most common)', 'Renal artery stenosis', 'Pheochromocytoma', 'Cocaine/stimulant use', 'Eclampsia', 'Aortic dissection'],
    'Acute severe hypertension overwhelms vascular autoregulation. Endothelial damage triggers fibrinoid necrosis, platelet activation, and activation of RAAS/sympathetic nervous system in a vicious cycle. Target organs with end-arterioles (brain, kidney, retina) are most vulnerable.',
    ['Severe headache', 'Visual disturbance or papilledema', 'Chest pain (aortic dissection, ACS)', 'Dyspnea (pulmonary edema)', 'Altered mental status or seizures', 'Oliguria or hematuria', 'Nausea and vomiting'],
    ['BP measurement (both arms)', 'Fundoscopic exam (papilledema, hemorrhages, exudates)', 'BMP (creatinine, electrolytes)', 'Urinalysis (proteinuria, hematuria)', 'Troponin', 'CBC with smear (MAHA)', 'CT head if neurologic symptoms', 'Chest X-ray, ECG'],
    'ICU admission with continuous BP monitoring. IV antihypertensives: nicardipine, clevidipine, labetalol, or nitroprusside. Goal: reduce MAP by no more than 25% in first hour, then to 160/100 over 2-6 hours (too rapid reduction risks ischemic stroke). Exception: aortic dissection (rapid reduction to SBP <120).',
    'Once stabilized: strict medication adherence (most common cause is stopping meds), home BP monitoring, low-sodium diet, regular follow-up, substance avoidance (cocaine, amphetamines), stress management.',
    ['This IS an emergency—call 911', 'Sudden severe headache with confusion', 'Chest pain with severe hypertension', 'Sudden vision loss', 'Seizures', 'Difficulty breathing while lying down'],
    'A hypertensive emergency means blood pressure is so high that it is actively damaging your organs right now. This is different from just having a high reading—there must be signs of organ damage. It requires immediate treatment in an ICU with IV medications to carefully lower the pressure. The most common cause is stopping blood pressure medications. Never stop your blood pressure pills without your doctor\'s guidance, even if you feel fine. Always keep a refill on hand and set reminders to take your medication daily.',
  ),

  'aortic-dissection': cv(
    'aortic-dissection', 'Aortic Dissection', 'Diseccion aortica',
    'vascular', 'BA21',
    'Life-threatening tear in the aortic intima allowing blood to enter and separate the vessel wall layers.',
    ['Hypertension (most important)', 'Connective tissue disorders (Marfan, Ehlers-Danlos, Loeys-Dietz)', 'Bicuspid aortic valve', 'Cocaine use', 'Prior aortic surgery', 'Age >60', 'Male sex', 'Pregnancy (3rd trimester)'],
    'Intimal tear allows blood to dissect between intima and media, creating a false lumen. Stanford Type A involves ascending aorta (surgical emergency). Type B involves descending aorta only (medical management unless complicated). Propagation can occlude branch vessels, cause rupture, or cause aortic regurgitation/tamponade.',
    ['Sudden, severe "tearing" or "ripping" chest/back pain', 'Pain migrating as dissection propagates', 'Unequal blood pressures or pulses between arms', 'Aortic regurgitation murmur (Type A)', 'Stroke symptoms if carotid involved', 'Abdominal pain, leg ischemia if branch vessels involved'],
    ['CT angiography of aorta (test of choice—rapid, widely available)', 'TEE (excellent for Type A, can be done at bedside)', 'MRA (most accurate but time-consuming)', 'D-dimer (very sensitive if negative, helps rule out)', 'Chest X-ray (widened mediastinum in ~60%)'],
    'Type A: emergency surgical repair (mortality ~1% per hour without surgery). Type B uncomplicated: IV beta-blocker to HR <60 and SBP <120, pain control, ICU monitoring. Type B complicated (malperfusion, rupture): thoracic endovascular aortic repair (TEVAR). Long-term: lifelong BP control and imaging surveillance.',
    'Strict blood pressure control (most important—target <130/80), no heavy lifting or intense isometric exercise, regular aortic imaging surveillance, genetic counseling if connective tissue disorder, smoking cessation, avoid cocaine and stimulants.',
    ['Sudden severe chest or back pain (call 911 immediately)', 'Tearing quality pain radiating to back', 'Unequal pulses or blood pressure between arms', 'Sudden weakness or numbness on one side', 'Loss of consciousness'],
    'Aortic dissection is a tear in the wall of the aorta, the largest blood vessel in your body. It is one of the most dangerous cardiovascular emergencies. The tearing chest or back pain is sudden and severe. Getting to the hospital immediately is critical—Type A dissections involving the ascending aorta need emergency surgery. The most important thing you can do to prevent this is control your blood pressure. If you have Marfan syndrome or other connective tissue conditions, regular monitoring of your aorta with imaging is essential.',
  ),

  'aortic-aneurysm-abdominal': cv(
    'aortic-aneurysm-abdominal', 'Abdominal Aortic Aneurysm (AAA)', 'Aneurisma de aorta abdominal',
    'vascular', 'BA11.0',
    'Focal dilation of the abdominal aorta to >3 cm, most commonly infrarenal. Risk of rupture increases dramatically with size.',
    ['Male sex', 'Age >65', 'Smoking (strongest modifiable risk)', 'Family history', 'Hypertension', 'Atherosclerosis', 'Connective tissue disorders'],
    'Proteolytic degradation of elastin and collagen in the aortic media by matrix metalloproteinases (MMPs), chronic inflammation, and hemodynamic stress. Wall weakening leads to progressive dilation. Rupture risk rises exponentially above 5.5 cm (Laplace\'s law: wall tension = pressure x radius).',
    ['Usually asymptomatic (found incidentally)', 'Pulsatile abdominal mass', 'Abdominal or back pain (concerning for expansion)', 'Rupture: sudden severe abdominal/back pain, hypotension, pulsatile mass (classic triad, present in ~50%)'],
    ['Abdominal ultrasound (screening and surveillance)', 'CT angiography (pre-operative planning, acute evaluation)', 'USPSTF recommends one-time screening ultrasound for men 65-75 who have ever smoked', 'MRA as alternative to CTA'],
    'Surveillance: <4 cm (annually), 4-5.4 cm (every 6-12 months). Repair threshold: >5.5 cm, rapid growth (>0.5 cm/6 months), or symptomatic. Options: endovascular aneurysm repair (EVAR, less invasive, preferred if anatomy suitable) or open surgical repair. Smoking cessation, statin, BP control for all.',
    'Smoking cessation (most important—only intervention shown to slow growth), blood pressure control, statin therapy, regular surveillance imaging, moderate exercise (avoid straining/Valsalva), report new abdominal or back pain immediately.',
    ['Sudden severe abdominal or back pain', 'Lightheadedness with abdominal pain', 'Known AAA with new symptoms—call 911 immediately', 'Signs of shock (pale, sweaty, confused, rapid pulse)'],
    'An abdominal aortic aneurysm is a bulge in the main blood vessel in your belly, like a weak spot in a tire. It usually causes no symptoms and is found by chance. The danger is rupture, which is often fatal. Screening with a painless ultrasound is recommended for men over 65 who have ever smoked. Small aneurysms are monitored with regular ultrasounds. Larger ones can be repaired, often through a minimally invasive catheter procedure. Quitting smoking is the single most important thing you can do to slow the growth.',
  ),

  'thoracic-aortic-aneurysm': cv(
    'thoracic-aortic-aneurysm', 'Thoracic Aortic Aneurysm', 'Aneurisma de aorta toracica',
    'vascular', 'BA11.1',
    'Dilation of the thoracic aorta (ascending, arch, or descending) increasing risk of dissection and rupture.',
    ['Hypertension', 'Bicuspid aortic valve', 'Connective tissue disorders (Marfan, Loeys-Dietz)', 'Family history of aortic disease', 'Age', 'Turner syndrome', 'Aortitis (Takayasu, giant cell)'],
    'Cystic medial degeneration (loss of smooth muscle cells and elastic fibers) weakens the aortic wall. Genetic disorders (fibrillin-1 mutation in Marfan) accelerate degeneration. Ascending aneurysms often related to connective tissue disease or bicuspid valve; descending to atherosclerosis.',
    ['Often asymptomatic', 'Ascending: aortic regurgitation murmur', 'Arch: hoarseness (recurrent laryngeal nerve), dysphagia', 'Descending: back pain', 'Compression symptoms: cough, stridor, SVC syndrome'],
    ['CT angiography (primary imaging)', 'Transthoracic echocardiography (ascending aorta, aortic valve)', 'MRA (serial surveillance, no radiation)', 'Genetic testing if suspected heritable aortopathy', 'Family screening'],
    'Surveillance imaging per guidelines. Repair thresholds: ascending >5.5 cm (>5.0 cm if Marfan, >4.5 cm if Loeys-Dietz, or >4.5-5.0 cm if bicuspid valve with risk factors). Open surgery for ascending. TEVAR for descending. BP control (beta-blocker preferred), losartan in Marfan.',
    'Strict blood pressure control, avoid heavy lifting and isometric exercise, no contact sports if connective tissue disorder, regular imaging surveillance, genetic counseling, avoid stimulants, moderate aerobic exercise is acceptable.',
    ['Sudden severe chest or back pain', 'Signs of dissection (see aortic dissection)', 'New hoarseness or difficulty swallowing', 'Syncope'],
    'A thoracic aortic aneurysm is a bulge in the portion of the aorta inside your chest. Many are found incidentally when imaging is done for another reason. Keeping your blood pressure controlled with beta-blockers is the most important medication therapy. If you have Marfan syndrome, a bicuspid aortic valve, or a family history of aortic problems, regular imaging surveillance is essential. Surgery or endovascular repair is recommended when the aneurysm reaches a size where the risk of rupture outweighs the risk of the procedure.',
  ),

  'peripheral-artery-disease': cv(
    'peripheral-artery-disease', 'Peripheral Artery Disease (PAD)', 'Enfermedad arterial periferica (EAP)',
    'vascular', 'BA80.3',
    'Atherosclerotic narrowing of peripheral arteries (most commonly legs), a marker of systemic atherosclerosis.',
    ['Smoking (strongest risk factor)', 'Diabetes', 'Hypertension', 'Hyperlipidemia', 'Age >50', 'Chronic kidney disease', 'African American race'],
    'Atherosclerotic plaques narrow peripheral arteries, reducing blood flow to the lower extremities. During exercise, oxygen demand exceeds supply, causing claudication. Severe disease causes critical limb ischemia with rest pain, ulceration, and gangrene.',
    ['Intermittent claudication (calf pain with walking that resolves with rest)', 'Reduced or absent pedal pulses', 'Cool, pale extremities', 'Hair loss on legs, shiny skin', 'Non-healing wounds or ulcers', 'Rest pain (severe disease—foot pain at night, relieved by dangling legs)', 'Erectile dysfunction'],
    ['Ankle-brachial index (ABI: <0.9 diagnostic)', 'Segmental pressures and pulse volume recordings', 'Duplex ultrasound', 'CT angiography or MR angiography', 'Assess for concomitant CAD and cerebrovascular disease'],
    'All patients: supervised exercise therapy (cornerstone, 30-45 min 3x/week), antiplatelet (aspirin or clopidogrel), high-intensity statin, ACE inhibitor, cilostazol for claudication. Revascularization (endovascular or surgical bypass) for lifestyle-limiting claudication or critical limb ischemia.',
    'Absolute smoking cessation (most important), structured walking program (walk until pain, rest, repeat—30-45 min, 3x/week), foot care (daily inspection, moisturize, proper footwear), diabetes control, heart-healthy diet.',
    ['Sudden severe leg pain with pale, cold limb (acute limb ischemia—emergency)', 'New foot ulcer that won\'t heal', 'Rest pain (constant foot pain especially at night)', 'Gangrene or blackened toes', 'Sudden change in leg color or temperature'],
    'Peripheral artery disease means the same kind of plaque buildup that causes heart attacks is also narrowing arteries in your legs. The hallmark symptom is leg cramping when you walk that goes away with rest. Surprisingly, the best treatment is walking more—a supervised exercise program can be as effective as surgery for most patients. Quitting smoking is essential because continued smoking dramatically worsens PAD. Daily foot inspection is important, especially if you have diabetes, because poor circulation can turn small wounds into serious problems.',
  ),

  'deep-vein-thrombosis': cv(
    'deep-vein-thrombosis', 'Deep Vein Thrombosis (DVT)', 'Trombosis venosa profunda (TVP)',
    'vascular', 'BD70',
    'Blood clot formation in a deep vein, most commonly in the lower extremities, with risk of pulmonary embolism.',
    ['Immobilization (surgery, travel, hospitalization)', 'Malignancy', 'Oral contraceptives/HRT', 'Pregnancy', 'Thrombophilia (Factor V Leiden, prothrombin mutation)', 'Obesity', 'Prior VTE', 'Age >60'],
    'Virchow\'s triad: venous stasis, endothelial injury, and hypercoagulability. Thrombus typically forms in valve cusps of deep veins. Clot can propagate proximally and embolize to pulmonary arteries.',
    ['Unilateral leg swelling', 'Calf pain or tenderness', 'Warmth and erythema', 'Pitting edema', 'Dilated superficial veins', 'Homan sign (unreliable)', 'May be asymptomatic'],
    ['Wells score for pre-test probability', 'D-dimer (high sensitivity, low specificity—rules out if low probability and negative)', 'Compression ultrasonography (test of choice)', 'CT venography if ultrasound inconclusive', 'Thrombophilia workup if unprovoked or recurrent'],
    'Anticoagulation: DOACs (rivaroxaban, apixaban) preferred for most—no bridging needed. Alternative: LMWH bridged to warfarin (INR 2-3). Duration: provoked 3 months, unprovoked 3-6+ months (consider indefinite if recurrent). Catheter-directed thrombolysis for massive iliofemoral DVT. Compression stockings.',
    'Early mobilization (bed rest no longer recommended), compression stockings (30-40 mmHg) for post-thrombotic syndrome prevention, stay hydrated during travel, calf exercises during prolonged sitting, avoid prolonged immobility, weight management.',
    ['Sudden shortness of breath (PE)', 'Chest pain with breathing', 'Rapidly increasing leg swelling', 'Signs of phlegmasia (massively swollen, blue, painful leg)', 'Hemoptysis'],
    'A DVT is a blood clot that forms in a deep vein, usually in the leg. The main danger is that the clot can break loose and travel to the lungs (pulmonary embolism), which can be life-threatening. Blood thinners are the main treatment, typically for 3 to 6 months. During long flights or car rides, walk around regularly, do calf pumps, and stay hydrated. If you develop sudden leg swelling on one side, seek medical attention promptly. Once treated, compression stockings can help prevent long-term leg swelling.',
  ),

  'pulmonary-embolism': cv(
    'pulmonary-embolism', 'Pulmonary Embolism (PE)', 'Embolia pulmonar (EP)',
    'vascular', 'BB00',
    'Obstruction of pulmonary arteries by thrombus, most commonly from lower extremity DVT. A leading cause of preventable hospital death.',
    ['DVT (source in >90%)', 'Immobilization/surgery', 'Malignancy', 'Thrombophilia', 'Oral contraceptives', 'Pregnancy', 'Obesity', 'Long-haul travel', 'Prior VTE'],
    'Thrombus from deep veins embolizes to pulmonary vasculature. Mechanical obstruction plus reflex vasoconstriction increases pulmonary vascular resistance and right ventricular afterload. Massive PE causes RV failure, hemodynamic collapse, and death. Ventilation-perfusion mismatch causes hypoxemia.',
    ['Sudden dyspnea (most common)', 'Pleuritic chest pain', 'Tachycardia', 'Cough, hemoptysis', 'Syncope (suggests massive PE)', 'Tachypnea', 'Hypoxemia', 'Signs of DVT in leg'],
    ['Wells score or Geneva score for pre-test probability', 'D-dimer (to rule out if low probability)', 'CT pulmonary angiography (test of choice)', 'V/Q scan if CT contraindicated', 'Echocardiography (RV strain in massive PE)', 'Troponin, BNP (prognostic markers)', 'Lower extremity ultrasound'],
    'Anticoagulation: DOACs (rivaroxaban, apixaban) preferred. Massive PE (hemodynamic instability): systemic thrombolysis (alteplase), catheter-directed therapy, or surgical embolectomy. Submassive (RV dysfunction): anticoagulation +/- thrombolysis. IVC filter only if anticoagulation absolutely contraindicated.',
    'VTE prophylaxis during hospitalization and post-surgery, early mobilization, compression devices, hydration during travel, avoid prolonged immobility, weight management, discuss contraceptive risks with provider.',
    ['Sudden severe shortness of breath—call 911', 'Chest pain worsening with breathing', 'Coughing up blood', 'Fainting or near-fainting', 'Rapid heartbeat with lightheadedness', 'Known DVT with new breathing difficulty'],
    'A pulmonary embolism is a blood clot that has traveled to the lungs, blocking blood flow. It is a medical emergency. The most common symptom is sudden shortness of breath that may be accompanied by chest pain when breathing. Most PEs come from blood clots that started in the legs. Treatment with blood thinners dissolves the clot and prevents new ones. Prevention is key: move around after surgery, during hospital stays, and on long flights. If you experience sudden difficulty breathing, especially if you have recently been immobilized or had surgery, seek emergency care immediately.',
  ),

  'varicose-veins': cv(
    'varicose-veins', 'Varicose Veins', 'Varices',
    'vascular', 'BD92',
    'Dilated, tortuous superficial veins of the lower extremities due to venous valve incompetence.',
    ['Family history', 'Female sex', 'Pregnancy', 'Prolonged standing', 'Obesity', 'Age', 'Prior DVT'],
    'Incompetent venous valves allow retrograde blood flow (reflux) in superficial veins. Chronic venous hypertension causes vein dilation and tortuosity. Great saphenous vein is most commonly affected. Chronic venous insufficiency can lead to skin changes and ulceration.',
    ['Visible dilated, tortuous veins', 'Leg heaviness and aching (worse with prolonged standing)', 'Swelling (ankles)', 'Itching around veins', 'Skin changes: hyperpigmentation, lipodermatosclerosis', 'Venous ulcers (severe, medial malleolus)'],
    ['Clinical examination (standing position)', 'Duplex ultrasound (assess reflux, exclude DVT)', 'CEAP classification for staging', 'Rarely need further workup'],
    'Conservative: compression stockings (20-30 mmHg), leg elevation, exercise. Interventional: endovenous thermal ablation (laser or radiofrequency—first-line), sclerotherapy for smaller veins, ambulatory phlebectomy. Surgical stripping rarely needed with modern techniques.',
    'Compression stockings during prolonged standing/sitting, leg elevation when resting, regular walking and calf exercises, weight management, avoid prolonged standing, elevate legs above heart level when possible.',
    ['Sudden painful swollen leg (DVT concern)', 'Bleeding from a varicose vein (apply pressure, elevate, seek care)', 'Non-healing ulcer near ankle', 'Sudden warmth/redness along a vein (superficial thrombophlebitis)', 'Skin breakdown with infection'],
    'Varicose veins are swollen, twisted veins you can see under the skin, most commonly in the legs. They happen when tiny valves inside the veins stop working properly, allowing blood to pool. While often considered cosmetic, they can cause aching, swelling, and in severe cases, skin damage and ulcers. Compression stockings are the first step and provide significant relief. Modern treatments like laser ablation are minimally invasive, done in the office, and have excellent results. Regular walking and elevating your legs are simple daily habits that help.',
  ),

  // ---- Heart Failure (4) --------------------------------------------------

  'hfref': cv(
    'hfref', 'Heart Failure with Reduced Ejection Fraction (HFrEF)', 'Insuficiencia cardiaca con fraccion de eyeccion reducida',
    'heart-failure', 'BD10',
    'Heart failure with LVEF <=40%, reflecting impaired systolic (pumping) function. Also called systolic heart failure.',
    ['Prior MI/CAD (most common)', 'Hypertension', 'Dilated cardiomyopathy', 'Valvular disease', 'Myocarditis', 'Alcohol abuse', 'Cardiotoxic chemotherapy (doxorubicin)', 'Familial cardiomyopathy'],
    'Myocardial injury reduces contractile function (low EF). Compensatory neurohormonal activation (RAAS, sympathetic) temporarily maintains output but long-term causes maladaptive remodeling (ventricular dilation, fibrosis). Reduced cardiac output causes congestion (fluid retention) and poor end-organ perfusion.',
    ['Dyspnea on exertion (most common)', 'Orthopnea and paroxysmal nocturnal dyspnea', 'Fatigue and exercise intolerance', 'Peripheral edema', 'Weight gain from fluid retention', 'Jugular venous distension', 'S3 gallop', 'Bilateral pulmonary crackles'],
    ['Echocardiography (LVEF <=40%, LV dilation)', 'BNP or NT-proBNP (elevated)', 'Chest X-ray (cardiomegaly, pulmonary congestion)', 'ECG (may show prior MI, LBBB, arrhythmia)', 'Labs: BMP, CBC, TSH, iron studies, lipid panel', 'Coronary evaluation if ischemic etiology suspected', 'Cardiac MRI for etiology'],
    'Guideline-directed medical therapy (GDMT): ACE inhibitor/ARB/ARNI (sacubitril-valsartan preferred), beta-blocker (carvedilol, metoprolol succinate, bisoprolol), mineralocorticoid receptor antagonist (spironolactone/eplerenone), SGLT2 inhibitor (dapagliflozin/empagliflozin). Diuretics for congestion. Hydralazine/isosorbide dinitrate for African Americans. ICD if EF <=35%. CRT if LBBB with wide QRS. LVAD or transplant for advanced refractory HF.',
    'Daily weight monitoring (report gain >2-3 lbs overnight or >5 lbs/week), sodium restriction <2g/day, fluid restriction 1.5-2L/day if hyponatremic, regular moderate exercise (cardiac rehab), avoid NSAIDs and excessive alcohol, get annual flu and pneumonia vaccines, medication adherence.',
    ['Sudden weight gain (>3 lbs overnight)', 'Worsening shortness of breath or inability to lie flat', 'Persistent cough with pink frothy sputum', 'Fainting or severe dizziness', 'Chest pain', 'ICD shock'],
    'HFrEF means your heart muscle has weakened and cannot pump blood as effectively as it should. Your ejection fraction (the percentage of blood pumped out with each beat) is reduced. Modern medications have transformed this condition—four key drug classes (ARNI, beta-blocker, MRA, and SGLT2 inhibitor) have been shown to help the heart recover and prolong life. Many patients see improvement in their ejection fraction with proper treatment. Weighing yourself daily and limiting salt and fluids help you stay out of the hospital. Cardiac rehabilitation is safe and improves how you feel.',
  ),

  'hfpef': cv(
    'hfpef', 'Heart Failure with Preserved Ejection Fraction (HFpEF)', 'Insuficiencia cardiaca con fraccion de eyeccion preservada',
    'heart-failure', 'BD11',
    'Heart failure symptoms with LVEF >=50%, reflecting impaired diastolic (filling/relaxation) function. Also called diastolic heart failure.',
    ['Age >65', 'Female sex', 'Obesity', 'Hypertension (most common)', 'Diabetes', 'Atrial fibrillation', 'Chronic kidney disease', 'Obstructive sleep apnea'],
    'Concentric LV hypertrophy and fibrosis impair ventricular relaxation and compliance. The stiff LV requires higher filling pressures, which transmit backward to the left atrium and pulmonary veins, causing congestion. EF is normal but the heart cannot fill adequately, especially during exercise.',
    ['Exertional dyspnea', 'Exercise intolerance (hallmark)', 'Fatigue', 'Lower extremity edema', 'Orthopnea', 'Often obese with multiple comorbidities', 'Atrial fibrillation common'],
    ['Echocardiography (LVEF >=50%, diastolic dysfunction, LVH, LA enlargement)', 'Elevated BNP/NT-proBNP (may be lower than in HFrEF, especially in obese patients)', 'H2FPEF score for diagnosis', 'Exercise hemodynamics (invasive or diastolic stress echo) if resting studies equivocal', 'Evaluate for comorbidities: sleep study, HbA1c, iron studies'],
    'Treat underlying conditions aggressively: BP control, AF management, weight loss, diabetes management, sleep apnea treatment. SGLT2 inhibitors (empagliflozin—EMPEROR-Preserved trial). Diuretics for congestion. GLP-1 receptor agonists for obese HFpEF. No other medications have shown mortality benefit.',
    'Weight loss (if obese—>5% body weight improves symptoms significantly), exercise training (shown to improve exercise capacity and quality of life), sodium restriction, CPAP for sleep apnea, blood pressure optimization, diabetes control.',
    ['Same as HFrEF: sudden weight gain, worsening breathlessness, inability to lie flat', 'New or worsening edema', 'Chest pain', 'Syncope'],
    'HFpEF means your heart pumps normally but has become stiff and does not relax well between beats. Think of it like a stiff balloon that is hard to fill with air. This causes fluid to back up into your lungs and legs. It is most common in older adults with high blood pressure, obesity, and diabetes. Unlike the other type of heart failure, fewer medications help—but weight loss and exercise have been shown to make a real difference. Treating sleep apnea, controlling blood pressure, and managing diabetes are all important parts of feeling better.',
  ),

  'acute-decompensated-hf': cv(
    'acute-decompensated-hf', 'Acute Decompensated Heart Failure (ADHF)', 'Insuficiencia cardiaca aguda descompensada',
    'heart-failure', 'BD10.1',
    'Rapid worsening of heart failure symptoms requiring urgent medical intervention, the most common cause of hospitalization in adults >65.',
    ['Medication non-adherence (most common)', 'Dietary indiscretion (high salt)', 'Acute MI', 'Uncontrolled hypertension', 'New arrhythmia (AFib)', 'Infection', 'Anemia', 'Renal failure', 'NSAID use'],
    'Precipitant shifts compensated heart failure into a decompensated state. Fluid overload (wet) and/or low cardiac output (cold) overwhelm compensatory mechanisms. Increased filling pressures cause pulmonary and systemic congestion. Severe cases progress to cardiogenic shock.',
    ['Worsening dyspnea and orthopnea', 'Paroxysmal nocturnal dyspnea', 'Rapid weight gain (fluid)', 'Severe peripheral edema', 'Jugular venous distension', 'Pulmonary crackles', 'Hypoxemia', 'Flash pulmonary edema (rapid onset)'],
    ['BNP/NT-proBNP (markedly elevated)', 'Chest X-ray (pulmonary edema, pleural effusions)', 'Echocardiography (assess EF, new wall motion abnormality)', 'BMP (renal function, electrolytes)', 'Troponin (rule out ACS as trigger)', 'ECG', 'Assess congestion and perfusion (warm/cold, wet/dry profile)'],
    'IV loop diuretics (furosemide bolus or infusion—cornerstone of decongestion). Vasodilators (nitroglycerin, nitroprusside) if hypertensive. Oxygen/NIPPV for respiratory distress. Identify and treat precipitant. Inotropes (dobutamine, milrinone) only for cardiogenic shock. Optimize GDMT before discharge.',
    'Strict medication adherence (use pill organizer, pharmacy reminders), daily weights (call doctor if >3 lb gain overnight), sodium <2g/day, fluid restriction as directed, recognize early warning signs, keep follow-up within 7 days of discharge.',
    ['Unable to breathe lying down', 'Severe shortness of breath at rest', 'Pink frothy sputum', 'Confusion or altered mental status', 'Cold and clammy with low blood pressure', 'Rapid weight gain >3 lbs overnight'],
    'Acute decompensated heart failure means your heart failure has suddenly worsened, usually because of excess fluid buildup. The most common cause is missing medications or eating too much salt. You will need IV diuretics (water pills) in the hospital to remove the excess fluid. Weighing yourself every morning is the best way to catch this early—a sudden gain of 2-3 pounds overnight means fluid is building up and you should call your doctor. Following your medication schedule and salt restriction are the two most important things you can do to stay out of the hospital.',
  ),

  'cardiogenic-shock': cv(
    'cardiogenic-shock', 'Cardiogenic Shock', 'Choque cardiogenico',
    'heart-failure', 'BD12',
    'Critical state of end-organ hypoperfusion due to severe cardiac pump failure, with in-hospital mortality of 40-50%.',
    ['Acute MI (most common cause—especially large anterior STEMI)', 'Acute myocarditis', 'Acute valvular failure', 'Takotsubo cardiomyopathy', 'End-stage heart failure', 'Post-cardiotomy', 'Massive PE', 'Cardiac tamponade'],
    'Severe reduction in cardiac output leads to systemic hypoperfusion. Compensatory vasoconstriction increases afterload, further reducing output (downward spiral). Coronary hypoperfusion worsens ischemia. Inflammatory cascade (SIRS) contributes to vasodilation and multiorgan failure.',
    ['Hypotension (SBP <90 or requiring vasopressors)', 'Tachycardia', 'Cold, clammy, mottled extremities', 'Altered mental status', 'Oliguria (<0.5 mL/kg/hr)', 'Pulmonary congestion (crackles, hypoxemia)', 'Elevated lactate'],
    ['Hemodynamic assessment (CI <2.2, PCWP >15)', 'Echocardiography (LV function, complications)', 'Arterial line, central line, +/- PA catheter', 'Lactate, mixed venous O2 saturation', 'Serial troponins', 'Emergent coronary angiography if MI suspected', 'Assess for mechanical complications (VSD, papillary muscle rupture, free wall rupture)'],
    'Emergent revascularization if MI-related (PCI preferred). Vasopressors (norepinephrine first-line) and inotropes (dobutamine, milrinone). Mechanical circulatory support: intra-aortic balloon pump, Impella, ECMO. Treat underlying cause. Heart transplant or durable LVAD for refractory cases.',
    'Recovery phase: cardiac rehabilitation, medication optimization, monitor for recovery of LV function, psychological support, advance care planning discussions, lifestyle modifications as tolerated.',
    ['Cardiogenic shock IS the emergency', 'Any signs of end-organ failure with cardiac disease', 'Worsening despite treatment', 'This requires immediate ICU care'],
    'Cardiogenic shock means the heart is too weak to pump enough blood to keep your body\'s organs alive. It is the most severe form of heart failure and is a life-threatening emergency. The most common cause is a large heart attack. Treatment in the ICU includes powerful medications to support blood pressure, mechanical devices that help the heart pump, and treating the underlying cause. While survival has improved with modern treatments, this remains a very serious condition. If you or a loved one survives cardiogenic shock, cardiac rehabilitation and close follow-up are essential for recovery.',
  ),

  // ---- Congenital (5) -----------------------------------------------------

  'atrial-septal-defect': cv(
    'atrial-septal-defect', 'Atrial Septal Defect (ASD)', 'Comunicacion interauricular (CIA)',
    'congenital', 'LA80.0',
    'Abnormal opening in the interatrial septum allowing left-to-right shunt, one of the most common congenital heart defects in adults.',
    ['Genetic factors', 'Down syndrome', 'Fetal alcohol syndrome', 'Family history of CHD'],
    'Defect in the interatrial septum allows oxygenated blood to shunt from higher-pressure left atrium to lower-pressure right atrium. Chronic volume overload of right heart causes RA/RV dilation, pulmonary overcirculation, and eventually pulmonary hypertension (Eisenmenger if severe, reversing shunt direction).',
    ['Often asymptomatic until adulthood', 'Exertional dyspnea', 'Palpitations (AFib/flutter)', 'Fatigue', 'Paradoxical embolism (stroke)', 'Fixed split S2', 'Systolic flow murmur at pulmonic area'],
    ['Transthoracic echocardiography with bubble study', 'TEE for precise anatomy and sizing', 'ECG (right axis deviation, incomplete RBBB)', 'Chest X-ray (enlarged RA/RV, prominent pulmonary arteries)', 'Cardiac catheterization (Qp:Qs ratio, pulmonary pressures)', 'Cardiac MRI'],
    'Small ASD (<5mm) with no hemodynamic effect: observation. Significant shunt (Qp:Qs >1.5:1): closure recommended. Secundum ASD: percutaneous device closure (preferred). Primum or sinus venosus ASD: surgical closure. Contraindicated if Eisenmenger physiology (irreversible pulmonary hypertension).',
    'After closure: generally no restrictions, normal activity and exercise. Before closure with significant shunt: avoid extreme exertion. Endocarditis prophylaxis for 6 months after device closure, follow-up echocardiography.',
    ['Paradoxical stroke (especially in young adults)', 'New arrhythmia', 'Progressive exercise intolerance', 'Signs of right heart failure', 'Cyanosis (Eisenmenger reversal)'],
    'An ASD is a hole between the upper chambers of your heart that you were born with. Small holes may never cause problems. Larger holes allow extra blood to flow to the lungs, which over decades can enlarge the right side of your heart and cause irregular rhythms or pulmonary hypertension. The good news is that most ASDs can be closed with a device delivered through a catheter (no open-heart surgery). After closure, most patients return to a completely normal life. If you have an ASD and experience palpitations, shortness of breath, or have had a stroke, talk to a cardiologist about closure.',
  ),

  'ventricular-septal-defect': cv(
    'ventricular-septal-defect', 'Ventricular Septal Defect (VSD)', 'Comunicacion interventricular (CIV)',
    'congenital', 'LA80.1',
    'Abnormal opening in the interventricular septum, the most common congenital heart defect at birth.',
    ['Genetic factors', 'Trisomy 21, 18, 13', 'Maternal diabetes', 'Fetal alcohol exposure', 'Part of complex CHD (TOF)'],
    'Defect in the ventricular septum allows left-to-right shunt. Shunt volume depends on defect size and pulmonary vascular resistance. Large VSDs cause pulmonary overcirculation, LV volume overload, and heart failure. Chronic pulmonary overcirculation can lead to Eisenmenger physiology.',
    ['Small: often asymptomatic, loud holosystolic murmur at LLSB', 'Moderate-large: failure to thrive, feeding difficulties, tachypnea, recurrent respiratory infections', 'Heart failure symptoms in infancy', 'Adults with unrepaired large VSD: Eisenmenger (cyanosis)'],
    ['Echocardiography (location, size, shunt quantification)', 'ECG (LVH if significant shunt, RVH if pulmonary HTN)', 'Chest X-ray (cardiomegaly, increased pulmonary markings)', 'Cardiac catheterization for hemodynamic assessment', 'Cardiac MRI for complex anatomy'],
    'Small restrictive VSD: observation (many close spontaneously—up to 80% of muscular VSDs). Large VSD with HF: medical management (diuretics, digoxin, ACE inhibitor) then surgical closure by 6 months if not improving. Percutaneous device closure for select muscular VSDs. Contraindicated if Eisenmenger.',
    'After repair: normal activity and exercise in most. Monitor for residual shunt, aortic regurgitation (subarterial VSD), arrhythmia. Lifelong cardiology follow-up for moderate-large defects. Endocarditis prophylaxis per guidelines.',
    ['Heart failure signs in infants (poor feeding, sweating, rapid breathing)', 'Progressive cyanosis', 'New murmur or change in murmur character', 'Signs of endocarditis (fever with heart defect)'],
    'A VSD is a hole between the lower chambers of your heart, present from birth. It is the most common heart defect in newborns. Small holes often close on their own during childhood and may only be noticed as a heart murmur. Larger holes can cause heart failure in infancy and need surgical repair. After successful closure, most children grow up to lead completely normal, active lives. Regular follow-up with a cardiologist is recommended even after repair to monitor for any long-term changes.',
  ),

  'patent-ductus-arteriosus': cv(
    'patent-ductus-arteriosus', 'Patent Ductus Arteriosus (PDA)', 'Conducto arterioso persistente',
    'congenital', 'LA81',
    'Persistence of the fetal ductus arteriosus connecting the aorta and pulmonary artery after birth.',
    ['Prematurity (most significant)', 'High altitude birth', 'Maternal rubella in first trimester', 'Female sex', 'Genetic syndromes'],
    'The ductus arteriosus normally closes within 24-72 hours of birth due to rising PaO2 and falling prostaglandins. Persistent patency creates an aorto-pulmonary left-to-right shunt. Chronic pulmonary overcirculation leads to LV volume overload, pulmonary hypertension, and eventually Eisenmenger.',
    ['Premature infants: respiratory distress, ventilator dependence, worsening oxygenation', 'Term infants/children: continuous "machinery" murmur (best at left infraclavicular area)', 'Bounding pulses, wide pulse pressure', 'Heart failure if large shunt', 'Failure to thrive'],
    ['Echocardiography (visualize PDA, measure shunt)', 'ECG (LVH, LAE)', 'Chest X-ray (cardiomegaly, increased pulmonary vascularity)', 'Premature infants: serial echocardiography to assess hemodynamic significance'],
    'Premature infants: ibuprofen or indomethacin (prostaglandin inhibitors to promote closure), or acetaminophen. Surgical ligation or transcatheter closure if medical failure. Term infants/children: transcatheter device or coil closure (preferred over surgery). Small silent PDAs may be observed.',
    'After closure: no restrictions, normal activity. Before closure with significant shunt: limit strenuous activity per cardiologist. Regular follow-up echocardiography. Endocarditis prophylaxis for 6 months after device closure.',
    ['Signs of heart failure in a premature infant', 'Worsening respiratory distress', 'New or worsening murmur', 'Feeding difficulties with sweating'],
    'A PDA is a blood vessel that all babies have before birth, connecting the two main arteries leaving the heart. It normally closes shortly after birth. When it stays open, blood flows from the aorta into the lung artery, overloading the lungs and heart. In premature babies, medication can often close it. In older children, a catheter procedure can seal it with a small device without surgery. After closure, most patients have no further issues and can be fully active.',
  ),

  'tetralogy-of-fallot': cv(
    'tetralogy-of-fallot', 'Tetralogy of Fallot (TOF)', 'Tetralogia de Fallot',
    'congenital', 'LA86',
    'Classic cyanotic congenital heart defect with four features: VSD, overriding aorta, RV outflow tract obstruction, and RV hypertrophy.',
    ['22q11.2 deletion (DiGeorge)', 'Maternal diabetes', 'Maternal phenylketonuria', 'Fetal alcohol syndrome', 'Genetic factors'],
    'Anterior and cephalad deviation of the infundibular septum creates RVOT obstruction, a large nonrestrictive VSD, an aorta that overrides the septum, and compensatory RVH. Right-to-left shunting through the VSD causes cyanosis. "Tet spells" occur when RVOT spasm acutely increases right-to-left shunting.',
    ['Cyanosis (may not be present at birth, "pink tet")', '"Tet spells": episodes of severe cyanosis, hyperpnea, irritability', 'Squatting in older children (increases SVR, reduces R-to-L shunt)', 'Harsh systolic ejection murmur (RVOT obstruction)', 'Failure to thrive', 'Clubbing'],
    ['Echocardiography (definitive—shows all four features)', 'Pulse oximetry (desaturation)', 'ECG (RVH, right axis deviation)', 'Chest X-ray (boot-shaped heart, decreased pulmonary vascularity)', 'Cardiac catheterization (pre-surgical)', 'Genetic testing (22q11.2 deletion)'],
    'Tet spell: knee-to-chest position, oxygen, morphine, IV fluids, phenylephrine. Definitive: complete surgical repair (VSD closure + RVOT relief) ideally at 3-6 months of age. Palliative: Blalock-Taussig shunt if too small/complex for early repair. Beta-blocker (propranolol) to prevent tet spells before surgery.',
    'Post-repair: most live active lives with lifelong cardiology follow-up. Monitor for residual RVOT obstruction, pulmonary regurgitation (may need pulmonary valve replacement later), arrhythmia. Endocarditis precautions. Pregnancy counseling.',
    ['Tet spell (deep cyanosis with rapid breathing—place infant knee-to-chest, call 911)', 'Progressive cyanosis', 'Syncope', 'Arrhythmia symptoms', 'Exercise intolerance worsening'],
    'Tetralogy of Fallot is a combination of four heart defects present from birth that reduce oxygen in the blood, causing a bluish color. Before modern surgery, this was a devastating diagnosis. Today, surgical repair in infancy has excellent outcomes, and most children grow up to lead active, fulfilling lives. The repair involves closing the hole between the heart chambers and widening the narrow pathway to the lungs. Lifelong follow-up with a congenital heart specialist is important because some patients need additional procedures later in life, particularly a new pulmonary valve.',
  ),

  'coarctation-of-aorta': cv(
    'coarctation-of-aorta', 'Coarctation of the Aorta', 'Coartacion de la aorta',
    'congenital', 'LA87',
    'Discrete narrowing of the aorta, typically just distal to the left subclavian artery at the site of the ductus arteriosus.',
    ['Bicuspid aortic valve (50-80% association)', 'Turner syndrome', 'Male sex (2-3x more common)', 'Other CHD', 'Family history'],
    'Narrowing of the aortic isthmus creates a pressure gradient between upper and lower body. Upper body hypertension with reduced lower body perfusion. Collateral circulation develops through intercostal and internal mammary arteries. Associated with bicuspid aortic valve and berry aneurysms.',
    ['Neonates: heart failure, shock when ductus closes', 'Older children: hypertension (upper extremity), headaches, epistaxis, leg claudication with exercise', 'BP differential between arms and legs (>20 mmHg)', 'Weak or absent femoral pulses', 'Systolic murmur (left infraclavicular or interscapular)', 'Rib notching on CXR (collaterals)'],
    ['4-limb blood pressures (arm-leg gradient)', 'Echocardiography (narrowing, gradient, bicuspid valve)', 'CT or MR angiography (anatomy, collaterals)', 'Chest X-ray (rib notching, "3 sign" on aortogram)', 'ECG (LVH in older patients)'],
    'Neonates: prostaglandin E1 to maintain ductus, surgical repair (resection with end-to-end anastomosis or extended arch repair). Older children/adults: balloon angioplasty with stenting or surgical repair. Antihypertensive therapy (may persist after repair).',
    'Post-repair: regular BP monitoring (hypertension may persist or recur), lifelong cardiology follow-up, regular imaging of repair site, manage associated lesions (bicuspid valve), exercise as tolerated (avoid extreme isometric in unrepaired or recurrent coarctation).',
    ['Neonatal collapse when ductus closes (grey, lethargic, poor feeding—emergency)', 'Severe headache with hypertension', 'Cold legs with weak pulses', 'Signs of heart failure', 'Stroke symptoms (associated berry aneurysms)'],
    'Coarctation of the aorta is a narrowing of the main blood vessel leaving your heart, like a pinch in a garden hose. This causes high blood pressure in the arms but low blood pressure in the legs. It is usually found in childhood or young adulthood. Treatment involves either surgery or a balloon procedure to widen the narrowing, often with a stent. Even after successful repair, lifelong monitoring of blood pressure and the repair site is important. Many patients need blood pressure medication long-term. If you were born with coarctation, make sure all your doctors know, and have regular follow-ups with a cardiologist who specializes in congenital heart disease.',
  ),

  // ---- Pericardial (3) ----------------------------------------------------

  'pericarditis': cv(
    'pericarditis', 'Acute Pericarditis', 'Pericarditis aguda',
    'pericardial', 'BB20',
    'Inflammation of the pericardium causing characteristic chest pain, the most common pericardial disease.',
    ['Viral infection (most common—Coxsackie, EBV, HIV)', 'Post-MI (Dressler syndrome)', 'Autoimmune (lupus, RA)', 'Uremia', 'Malignancy', 'Tuberculosis (common in endemic areas)', 'Post-cardiac surgery/procedure'],
    'Inflammation of pericardial layers causes fibrinous or serous exudate. Pericardial irritation stimulates somatic pain fibers. Pericardial friction from inflamed surfaces produces the characteristic rub. Most cases are viral/idiopathic with self-limited inflammation.',
    ['Sharp pleuritic chest pain (worsens with inspiration and lying flat)', 'Pain improves sitting up and leaning forward (pathognomonic)', 'Pericardial friction rub (scratchy 3-component sound)', 'Low-grade fever', 'Malaise', 'Dyspnea'],
    ['ECG (diffuse ST elevation with PR depression—hallmark)', 'Echocardiography (pericardial effusion if present)', 'Troponin (may be mildly elevated—myopericarditis)', 'CRP/ESR (elevated, useful for monitoring)', 'CBC, BMP', 'Additional workup based on suspected etiology (ANA, TSH, TB testing, blood cultures)'],
    'NSAIDs (ibuprofen 600mg TID, tapered over 2-4 weeks) + colchicine (0.5mg BID for 3 months—reduces recurrence by 50%). Corticosteroids only if contraindication to NSAIDs and colchicine or autoimmune etiology. Activity restriction until symptoms resolve and CRP normalizes.',
    'Rest and avoid strenuous exercise until symptoms resolve and inflammatory markers normalize (usually 4-6 weeks). Athletes: no competitive sports until fully resolved. Gradual return to activity.',
    ['Increasing shortness of breath or chest pain', 'Signs of cardiac tamponade (see below)', 'Hemodynamic instability', 'Fever >38.5C with large effusion', 'Failure to improve after 1 week of treatment'],
    'Pericarditis is inflammation of the thin sac surrounding your heart. The most common symptom is a sharp chest pain that worsens when you lie down or breathe in, and improves when you sit up and lean forward. Most cases are caused by a virus and resolve completely with anti-inflammatory medications (like ibuprofen) and colchicine. Rest is important—avoid exercise until your doctor confirms the inflammation has resolved. About 30% of people have a recurrence, which is why colchicine is given for at least 3 months. While uncomfortable, pericarditis rarely causes serious complications.',
  ),

  'cardiac-tamponade': cv(
    'cardiac-tamponade', 'Cardiac Tamponade', 'Taponamiento cardiaco',
    'pericardial', 'BB21',
    'Life-threatening compression of the heart by fluid accumulating in the pericardial space, preventing adequate cardiac filling.',
    ['Pericarditis with effusion', 'Malignancy (most common cause of large effusions)', 'Trauma (penetrating or blunt)', 'Aortic dissection (Type A)', 'Post-cardiac surgery', 'Uremia', 'Anticoagulation with pericarditis'],
    'Pericardial fluid accumulation increases intrapericardial pressure. When pressure exceeds right atrial/ventricular diastolic pressure, cardiac chambers cannot fill adequately. Cardiac output drops. Rate of fluid accumulation matters more than volume—rapid accumulation of even 150-200 mL can cause tamponade, while chronic effusions may tolerate >1 liter.',
    ['Beck\'s triad: hypotension, muffled heart sounds, JVD', 'Pulsus paradoxus (>10 mmHg drop in SBP with inspiration)', 'Tachycardia', 'Dyspnea', 'Tachypnea', 'Cool extremities', 'Electrical alternans on ECG'],
    ['Echocardiography (urgently—RA/RV diastolic collapse, swinging heart, respiratory variation of mitral/tricuspid inflow)', 'ECG (low voltage, electrical alternans, sinus tachycardia)', 'Chest X-ray (enlarged cardiac silhouette "water bottle heart")', 'Pulsus paradoxus measurement', 'Pericardial fluid analysis after drainage'],
    'Emergency pericardiocentesis (needle drainage of pericardial fluid—lifesaving). Subxiphoid approach under echo guidance. IV fluid bolus as temporizing measure. Surgical pericardial window for recurrent effusions. Treat underlying cause. Avoid diuretics and vasodilators (worsen preload dependence).',
    'Recovery depends on underlying cause. Follow-up echocardiography to monitor for reaccumulation. Treat underlying condition aggressively. Activity as tolerated once resolved.',
    ['Cardiac tamponade IS a medical emergency—call 911', 'Rapidly worsening shortness of breath with lightheadedness', 'Fainting', 'Chest pressure with distant heart sounds', 'Signs of shock'],
    'Cardiac tamponade occurs when fluid builds up around the heart and squeezes it, preventing it from filling properly. This is a medical emergency. Think of it like a tight sleeve around the heart that keeps it from expanding. Treatment involves draining the fluid with a needle, which provides immediate relief. The fluid is then tested to determine the cause. If you have pericarditis or known pericardial effusion and develop worsening shortness of breath, rapid heartbeat, or feel like you might faint, seek emergency care immediately.',
  ),

  'constrictive-pericarditis': cv(
    'constrictive-pericarditis', 'Constrictive Pericarditis', 'Pericarditis constrictiva',
    'pericardial', 'BB23',
    'Chronic pericardial thickening and fibrosis/calcification that restricts cardiac filling, mimicking heart failure.',
    ['Prior cardiac surgery (most common in developed countries)', 'Prior radiation therapy', 'Tuberculosis (most common worldwide)', 'Prior pericarditis', 'Connective tissue disease', 'Uremia'],
    'Chronic pericardial inflammation leads to fibrosis, thickening, and calcification of the pericardium. The rigid shell encases the heart, limiting diastolic filling. All four chambers are equally affected. Ventricular interdependence is enhanced—inspiration increases RV filling at the expense of LV filling (key diagnostic feature).',
    ['Peripheral edema and ascites (often out of proportion to dyspnea)', 'Fatigue and exercise intolerance', 'JVD with Kussmaul sign (JVP rises with inspiration)', 'Hepatomegaly and hepatic dysfunction', 'Pericardial knock (early diastolic sound)', 'May mimic cirrhosis or restrictive cardiomyopathy'],
    ['Echocardiography (septal bounce, respiratory variation of mitral/tricuspid inflow, medial e\' velocity preserved or increased)', 'CT (pericardial thickening >4mm, calcification)', 'Cardiac MRI (pericardial enhancement, thickening)', 'Cardiac catheterization (equalization of diastolic pressures, ventricular interdependence)', 'BNP (may be low or normal—distinguishes from restrictive cardiomyopathy)'],
    'Definitive: surgical pericardiectomy (complete pericardial stripping). Medical temporization: diuretics for volume overload (use cautiously—preload dependent). Anti-inflammatory therapy for transient constrictive pericarditis (may resolve without surgery). Distinguish from transient constriction (resolves in months) before committing to surgery.',
    'Pre-surgery: manage volume status with careful diuresis, sodium restriction. Post-pericardiectomy: gradual return to activity over weeks, cardiac rehabilitation, nutritional support, follow-up imaging.',
    ['Worsening edema and ascites despite treatment', 'New atrial fibrillation', 'Liver dysfunction worsening', 'Signs of low cardiac output (fatigue, dizziness)', 'Post-surgery: signs of cardiac decompensation'],
    'Constrictive pericarditis means the sac around your heart has become thick, stiff, and sometimes calcified, like a rigid shell that prevents your heart from expanding properly to fill with blood. This causes fluid buildup in your legs, abdomen, and liver. It can be tricky to diagnose because it looks like heart failure, but the treatment is very different—surgery to remove the stiff pericardium. Some cases caused by inflammation can resolve with medications. If you have had prior heart surgery, chest radiation, or tuberculosis and develop progressive swelling and fatigue, this condition should be considered.',
  ),
};

// ---------------------------------------------------------------------------
// Utility functions
// ---------------------------------------------------------------------------

/** Get a single condition by ID. */
export function getCVCondition(id: string): CVConditionEntry | undefined {
  return CV_CONDITIONS[id];
}

/** Search conditions by name, category, or any text field (case-insensitive). */
export function searchCVConditions(query: string): CVConditionEntry[] {
  const q = query.toLowerCase();
  return Object.values(CV_CONDITIONS).filter(c =>
    c.name.toLowerCase().includes(q) ||
    c.nameEs.toLowerCase().includes(q) ||
    c.category.toLowerCase().includes(q) ||
    c.description.toLowerCase().includes(q) ||
    c.pathophysiology.toLowerCase().includes(q) ||
    c.treatment.toLowerCase().includes(q) ||
    c.patientExplanation.toLowerCase().includes(q),
  );
}

/** Filter conditions by category. */
export function getCVByCategory(category: CVCategory): CVConditionEntry[] {
  return Object.values(CV_CONDITIONS).filter(c => c.category === category);
}

/** Return the total number of CV conditions in the database. */
export function getCVConditionCount(): number {
  return Object.keys(CV_CONDITIONS).length;
}

/** Get all conditions with a specific risk factor (case-insensitive). */
export function getCVByRiskFactor(riskFactor: string): CVConditionEntry[] {
  const rf = riskFactor.toLowerCase();
  return Object.values(CV_CONDITIONS).filter(c =>
    c.riskFactors.some(r => r.toLowerCase().includes(rf)),
  );
}
