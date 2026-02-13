/**
 * Neurological Conditions Database
 *
 * Comprehensive reference of 90+ neurological conditions with clinical
 * summaries, bilingual names, ICD-11 codes, patient education, and
 * lifestyle guidance. Sourced from open-access medical textbooks
 * (OpenStax Anatomy & Physiology, Amboss, StatPearls).
 *
 * SOMA Medical Education Platform
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type NeuroCategory =
  | 'cerebrovascular'
  | 'degenerative'
  | 'demyelinating'
  | 'neuromuscular'
  | 'headache'
  | 'neoplastic'
  | 'infectious'
  | 'peripheral-nerve'
  | 'spinal'
  | 'movement-disorder'
  | 'congenital'
  | 'seizure'
  | 'autoimmune'
  | 'other';

export interface NeuroConditionEntry {
  id: string;
  name: string;
  nameEs: string;
  category: NeuroCategory;
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
// Compact builder
// ---------------------------------------------------------------------------

function n(
  id: string, name: string, nameEs: string,
  category: NeuroCategory, icd11: string, description: string,
  riskFactors: string[], pathophysiology: string,
  symptoms: string[], diagnostics: string[],
  treatment: string, lifestyle: string,
  emergencySigns: string[], patientExplanation: string,
): NeuroConditionEntry {
  return {
    id, name, nameEs, category, icd11, description,
    riskFactors, pathophysiology, symptoms, diagnostics,
    treatment, lifestyle, emergencySigns, patientExplanation,
  };
}

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const NEURO_CONDITIONS: Record<string, NeuroConditionEntry> = {

  // ===== CEREBROVASCULAR (7) =================================================

  'ischemic-stroke-thrombotic': n(
    'ischemic-stroke-thrombotic', 'Thrombotic Ischemic Stroke', 'Accidente cerebrovascular isquemico trombotico',
    'cerebrovascular', '8B11.0',
    'Ischemic stroke from in-situ thrombus on an atherosclerotic plaque within a cerebral artery, the most common stroke subtype.',
    ['Hypertension', 'Diabetes', 'Hyperlipidemia', 'Smoking', 'Age >55', 'Obesity', 'Family history of stroke'],
    'Atherosclerotic plaque rupture triggers platelet aggregation and thrombus formation, occluding the vessel. Ischemic penumbra surrounds the infarct core. ~1.9 million neurons lost per minute without reperfusion.',
    ['Sudden unilateral weakness or numbness', 'Aphasia or dysarthria', 'Visual field cuts', 'Ataxia', 'Altered consciousness in large-vessel occlusion', 'May have stuttering onset over hours'],
    ['Non-contrast CT head', 'CT angiography', 'MRI DWI/FLAIR mismatch', 'NIHSS scoring', 'Carotid duplex ultrasound', 'Echocardiography', 'Lipid panel and HbA1c'],
    'IV alteplase within 4.5 h. Mechanical thrombectomy for large-vessel occlusion up to 24 h in select patients. DAPT 21 days then monotherapy. High-intensity statin. Blood pressure permissive acutely then optimized. Stroke-unit care.',
    'Smoking cessation, Mediterranean/DASH diet, aerobic exercise 150 min/week, weight management, limit alcohol, BP and glucose self-monitoring.',
    ['Acute focal deficit—call 911 (BE FAST)', 'Declining consciousness', 'Signs of raised ICP'],
    'A thrombotic stroke happens when a blood clot forms inside a brain artery narrowed by plaque. Brain cells die within minutes—treatment must be fast. Remember BE FAST: Balance, Eyes, Face, Arm, Speech, Time to call 911. / Un derrame trombotico ocurre cuando un coagulo se forma en una arteria cerebral. Recuerde: Equilibrio, Ojos, Cara, Brazo, Habla, Tiempo—llame al 911.'
  ),

  'ischemic-stroke-embolic': n(
    'ischemic-stroke-embolic', 'Embolic Ischemic Stroke', 'Accidente cerebrovascular isquemico embolico',
    'cerebrovascular', '8B11.1',
    'Ischemic stroke caused by an embolus, most often cardiac, that occludes a cerebral artery.',
    ['Atrial fibrillation', 'Valvular heart disease', 'Recent MI', 'Endocarditis', 'Patent foramen ovale', 'Carotid stenosis', 'Hypercoagulable states'],
    'An embolus from the left atrium (AF) or other source travels to a cerebral artery causing sudden complete occlusion. MCA territory most commonly affected. Onset is abrupt and maximal.',
    ['Sudden maximal-at-onset deficit', 'Unilateral weakness', 'Aphasia', 'Neglect', 'Visual field loss', 'May affect multiple territories'],
    ['Non-contrast CT head', 'CT angiography', 'MRI DWI', 'ECG and telemetry for AF', 'TEE', 'Bubble study for PFO', 'Hypercoagulability workup'],
    'IV alteplase and/or thrombectomy acutely. Anticoagulation for AF (DOACs preferred). PFO closure if cryptogenic with high-risk features. Statin therapy. Treat underlying cardiac source.',
    'Anticoagulant adherence, regular monitoring, fall prevention, heart-healthy diet, exercise after clearance, smoking cessation.',
    ['Sudden neurological deficit—call 911', 'Hemorrhagic conversion signs', 'Concurrent cardiac symptoms'],
    'An embolic stroke occurs when a clot from the heart or another source travels to the brain. Atrial fibrillation is the most common cause. Blood thinners are essential to prevent recurrence. / Un derrame embolico ocurre cuando un coagulo viaja al cerebro desde el corazon. Los anticoagulantes son esenciales.'
  ),

  'lacunar-stroke': n(
    'lacunar-stroke', 'Lacunar Stroke', 'Infarto lacunar',
    'cerebrovascular', '8B11.2',
    'Small subcortical infarct (<15 mm) from occlusion of a single deep penetrating artery due to lipohyalinosis.',
    ['Chronic hypertension', 'Diabetes mellitus', 'Smoking', 'Age', 'Hyperlipidemia'],
    'Lipohyalinosis or microatheroma of small penetrating arteries causes occlusion and small deep infarcts. Five classic lacunar syndromes. Cortical signs are absent.',
    ['Pure motor hemiparesis (most common)', 'Pure sensory stroke', 'Ataxic hemiparesis', 'Dysarthria-clumsy hand', 'Sensorimotor stroke', 'NO cortical signs'],
    ['MRI DWI (most sensitive)', 'Non-contrast CT', 'No large-vessel occlusion on CTA', 'Echocardiography', 'HbA1c and lipid panel'],
    'Antiplatelet therapy. Aggressive BP control (target <130/80). High-intensity statin. Glycemic control. DAPT for 21 days if minor stroke then monotherapy.',
    'Strict BP control at home, DASH diet, regular exercise, smoking cessation, diabetes management, medication adherence.',
    ['Acute new deficit', 'Progressive worsening (capsular warning syndrome)'],
    'A lacunar stroke is a small stroke deep in the brain caused by a tiny blocked artery. High blood pressure is the main cause. Keeping BP well controlled is the most important prevention. / Un infarto lacunar es un derrame pequeno causado por el bloqueo de una arteria diminuta. Controlar la presion arterial es la prevencion mas importante.'
  ),

  'hemorrhagic-stroke-intracerebral': n(
    'hemorrhagic-stroke-intracerebral', 'Intracerebral Hemorrhage', 'Hemorragia intracerebral',
    'cerebrovascular', '8B00',
    'Acute bleeding into brain parenchyma, ~10-15% of strokes with high mortality.',
    ['Chronic hypertension', 'Cerebral amyloid angiopathy', 'Anticoagulant use', 'Vascular malformations', 'Cocaine/amphetamine use', 'Brain tumors', 'Coagulopathies'],
    'Rupture of small penetrating arteries weakened by hypertension or amyloid deposition. Expanding hematoma causes mass effect and edema. Hematoma expansion in first hours worsens outcome.',
    ['Sudden severe headache', 'Vomiting', 'Progressive focal deficit', 'Decreased consciousness', 'Hypertension', 'Symptoms vary by location'],
    ['Non-contrast CT (hyperdense lesion)', 'CTA spot sign (predicts expansion)', 'MRI GRE/SWI for microbleeds', 'Coagulation studies', 'Toxicology screen', 'ICH Score'],
    'BP reduction (SBP <140 within 1 h). Reverse anticoagulation emergently. Surgical evacuation for cerebellar hemorrhage >3 cm. EVD for hydrocephalus. ICP management. Seizure prophylaxis for lobar. VTE prophylaxis after 24-48 h.',
    'Strict BP control, avoid anticoagulants unless essential, fall prevention, no stimulants, limit alcohol.',
    ['Worst headache of life', 'Declining consciousness', 'Pupil asymmetry', 'Cushing triad'],
    'An intracerebral hemorrhage occurs when a vessel bursts inside the brain. High blood pressure is the most common cause. Treatment focuses on controlling BP, reversing blood thinners, and sometimes surgery. / Una hemorragia intracerebral ocurre cuando un vaso sanguineo revienta en el cerebro. Controlar la presion arterial es esencial.'
  ),

  'subarachnoid-hemorrhage': n(
    'subarachnoid-hemorrhage', 'Subarachnoid Hemorrhage', 'Hemorragia subaracnoidea',
    'cerebrovascular', '8B01',
    'Bleeding into the subarachnoid space, most commonly from a ruptured berry aneurysm; a neurosurgical emergency.',
    ['Smoking', 'Hypertension', 'Family history', 'Polycystic kidney disease', 'Ehlers-Danlos IV', 'Excessive alcohol', 'Cocaine use'],
    'Ruptured intracranial aneurysm (85%) or AVM causes arterial blood in subarachnoid space. Vasospasm peaks days 4-14 causing delayed cerebral ischemia. Rebleeding risk highest first 24 h.',
    ['Thunderclap headache (worst headache of life)', 'Neck stiffness', 'Nausea/vomiting', 'Photophobia', 'Loss of consciousness at onset', 'Sentinel headache in 30-50%', 'CN III palsy (PComm aneurysm)'],
    ['Non-contrast CT (>95% sensitive <6 h)', 'LP if CT negative (xanthochromia)', 'CT angiography', 'Digital subtraction angiography (gold standard)', 'Hunt-Hess and Fisher grading', 'Transcranial Doppler for vasospasm'],
    'Secure aneurysm: endovascular coiling (preferred) or surgical clipping. Nimodipine 60 mg q4h for 21 days. BP control. EVD for hydrocephalus. Seizure prophylaxis. Induced hypertension for vasospasm.',
    'Lifelong BP control, absolute smoking cessation, no stimulants, screen first-degree relatives if familial, moderate exercise after recovery.',
    ['Thunderclap headache—call 911', 'Loss of consciousness', 'Worsening deficits days later (vasospasm)', 'Seizures'],
    'A subarachnoid hemorrhage is bleeding around the brain from a burst aneurysm. It causes the worst headache of your life. This is a life-threatening emergency requiring immediate treatment. / Una hemorragia subaracnoidea es sangrado alrededor del cerebro por un aneurisma roto. Causa el peor dolor de cabeza. Es una emergencia.'
  ),

  'tia': n(
    'tia', 'Transient Ischemic Attack (TIA)', 'Ataque isquemico transitorio (AIT)',
    'cerebrovascular', '8B10',
    'Transient neurological deficit from temporary cerebral ischemia without infarction; a critical stroke warning.',
    ['Hypertension', 'Atrial fibrillation', 'Diabetes', 'Hyperlipidemia', 'Smoking', 'Carotid stenosis', 'Prior TIA/stroke', 'Age >60'],
    'Temporary arterial occlusion with spontaneous resolution before infarction. 90-day stroke risk 10-20% without treatment, highest in first 48 h. ABCD2 score predicts risk.',
    ['Transient unilateral weakness or numbness', 'Speech difficulty', 'Visual loss (amaurosis fugax)', 'Symptoms resolve completely within 1 h', 'No residual deficit'],
    ['MRI DWI', 'CTA or MRA head and neck', 'Carotid duplex', 'Echo', 'ECG/Holter for AF', 'ABCD2 score', 'CBC, BMP, lipids, HbA1c'],
    'DAPT 21 days then monotherapy. High-intensity statin. BP optimization. CEA if ipsilateral stenosis >70%. Anticoagulation if AF. Risk factor modification.',
    'Smoking cessation, heart-healthy diet, exercise, weight management, medication adherence, recognize stroke symptoms.',
    ['Any acute neurological symptoms—treat as stroke until proven otherwise', 'Crescendo TIAs'],
    'A TIA is a mini-stroke—symptoms go away, but it warns of high stroke risk in coming days. Go to the ER immediately. / Un AIT es un mini-derrame: los sintomas pasan, pero advierte alto riesgo. Vaya a urgencias de inmediato.'
  ),

  'cerebral-venous-thrombosis': n(
    'cerebral-venous-thrombosis', 'Cerebral Venous Sinus Thrombosis', 'Trombosis venosa cerebral',
    'cerebrovascular', '8B22',
    'Thrombosis of cerebral venous sinuses causing venous congestion, elevated ICP, and potential venous infarction.',
    ['Oral contraceptives', 'Pregnancy/puerperium', 'Prothrombotic conditions', 'Dehydration', 'Infection (otitis, sinusitis)', 'Malignancy', 'Obesity'],
    'Thrombus in dural venous sinuses impairs drainage, elevating venous and intracranial pressure. May progress to hemorrhagic venous infarction.',
    ['Progressive headache over days', 'Papilledema', 'Seizures', 'Focal deficits', 'Altered consciousness', 'CN VI palsy from raised ICP'],
    ['CT or MR venography', 'MRI with SWI', 'D-dimer', 'Thrombophilia screening', 'LP (elevated opening pressure)'],
    'Anticoagulation with heparin (even with hemorrhagic infarction). Transition to warfarin/DOAC 3-12 months. Treat prothrombotic condition. Seizure management. Acetazolamide or LP for raised ICP.',
    'Stay hydrated, discuss contraceptive alternatives, maintain healthy weight, mobilize during travel, treat infections promptly.',
    ['Declining consciousness', 'Refractory seizures', 'Signs of herniation', 'Vision loss from papilledema'],
    'Cerebral venous thrombosis is a blood clot in the veins draining the brain. It is more common in young women on birth control. Treatment with blood thinners is very effective. / La trombosis venosa cerebral es un coagulo en las venas del cerebro. Es mas comun en mujeres jovenes. El tratamiento con anticoagulantes es efectivo.'
  ),

  // ===== SEIZURE DISORDERS (6) ================================================

  'focal-epilepsy': n(
    'focal-epilepsy', 'Focal Epilepsy', 'Epilepsia focal',
    'seizure', '8A60',
    'Epilepsy with seizures originating from a localized cortical network in one hemisphere.',
    ['Prior stroke or TBI', 'Brain tumor', 'Cortical malformations', 'CNS infection', 'Family history', 'Mesial temporal sclerosis'],
    'Abnormal hypersynchronous neuronal activity originates from a discrete cortical focus. Focal aware seizures preserve consciousness; focal impaired-awareness seizures (formerly complex partial) involve altered awareness. May secondarily generalize. Temporal lobe is the most common focus.',
    ['Aura (epigastric rising, deja vu, fear, olfactory hallucination)', 'Automatisms (lip smacking, hand fumbling)', 'Focal motor signs (clonic jerking, tonic posturing)', 'Altered awareness', 'Postictal confusion and aphasia', 'Todd paralysis (transient focal weakness)'],
    ['EEG (interictal epileptiform discharges)', 'Video-EEG monitoring', 'MRI epilepsy protocol (3T preferred)', 'Neuropsychological testing', 'PET and SPECT for surgical planning', 'MEG if needed'],
    'First-line ASMs: levetiracetam, lamotrigine, carbamazepine, oxcarbazepine, lacosamide. Epilepsy surgery (temporal lobectomy, lesionectomy) for drug-resistant focal epilepsy—up to 70% seizure freedom in mesial temporal sclerosis. Vagus nerve stimulation, responsive neurostimulation (RNS) for non-surgical candidates.',
    'Medication adherence, regular sleep schedule, avoid alcohol excess, seizure diary, medical alert bracelet, driving restrictions per local law, stress management.',
    ['Seizure lasting >5 min (status epilepticus)', 'First seizure', 'Seizure with prolonged postictal state', 'Cluster of seizures'],
    'Focal epilepsy means seizures start in one area of the brain. Symptoms depend on which area is affected—you might have unusual feelings, movements, or briefly lose awareness. Most people can control seizures well with medication. If medications fail, surgery may offer a cure. / La epilepsia focal significa que las convulsiones comienzan en un area del cerebro. La mayoria se controla bien con medicamentos. Si fallan, la cirugia puede ofrecer cura.'
  ),

  'generalized-tonic-clonic-epilepsy': n(
    'generalized-tonic-clonic-epilepsy', 'Generalized Tonic-Clonic Epilepsy', 'Epilepsia tonico-clonica generalizada',
    'seizure', '8A61.0',
    'Generalized epilepsy with bilateral tonic stiffening followed by clonic jerking with loss of consciousness.',
    ['Genetic predisposition', 'Sleep deprivation', 'Alcohol withdrawal', 'Metabolic disturbances', 'Photosensitivity', 'Medication non-adherence'],
    'Simultaneous onset of abnormal electrical activity in both hemispheres. Tonic phase: sustained muscle contraction (10-20 s). Clonic phase: rhythmic jerking (30-60 s). Sympathetic surge causes tachycardia, hypertension, and apnea during tonic phase.',
    ['Sudden loss of consciousness', 'Tonic stiffening followed by clonic jerking', 'Tongue biting (lateral tongue)', 'Urinary incontinence', 'Cyanosis during tonic phase', 'Postictal confusion and fatigue (minutes to hours)', 'Postictal headache and myalgia'],
    ['EEG: generalized spike-and-wave or polyspike-and-wave', 'MRI brain (often normal in genetic generalized epilepsy)', 'Video-EEG if classification uncertain', 'Blood work: electrolytes, glucose, toxicology', 'Prolactin level (elevated 15-20 min post-seizure)'],
    'First-line ASMs: valproate (most effective but teratogenic), lamotrigine, levetiracetam. Avoid carbamazepine and phenytoin (may worsen generalized seizures). Valproate contraindicated in women of childbearing potential unless no alternative. Lifestyle trigger avoidance critical.',
    'Regular sleep (7-9 h), avoid alcohol and recreational drugs, medication adherence, stress management, photosensitive patients should avoid strobe lights.',
    ['Seizure >5 min', 'Repeated seizures without recovery', 'Injury during seizure', 'First seizure'],
    'Tonic-clonic seizures involve the whole brain. The body stiffens, then jerks rhythmically, and consciousness is lost. These usually last 1-3 minutes. Medication controls seizures in most people. Avoiding triggers like sleep deprivation and alcohol is very important. / Las convulsiones tonico-clonicas involucran todo el cerebro. El medicamento las controla en la mayoria. Evitar falta de sueno y alcohol es muy importante.'
  ),

  'absence-epilepsy': n(
    'absence-epilepsy', 'Absence Epilepsy', 'Epilepsia de ausencia',
    'seizure', '8A61.1',
    'Generalized epilepsy characterized by brief staring spells with arrest of activity, most common in childhood (peak age 5-7).',
    ['Genetic predisposition', 'Family history of epilepsy', 'Female > male'],
    'Abnormal thalamocortical oscillatory circuits generate bilateral synchronous 3 Hz spike-and-wave discharges. T-type calcium channels in thalamic relay neurons play a key role. Seizures are brief (5-30 seconds) and may occur dozens to hundreds of times daily.',
    ['Brief staring spells with unresponsiveness', 'Arrest of activity', 'Subtle automatisms (eyelid fluttering, lip movements)', 'Abrupt onset and offset', 'No postictal confusion', 'Often mistaken for daydreaming', 'Can be provoked by hyperventilation'],
    ['EEG: classic 3 Hz generalized spike-and-wave (provoked by hyperventilation)', 'MRI (usually normal)', 'Video-EEG confirms clinical correlation'],
    'First-line: ethosuximide (for absence only) or valproate (if also has GTC). Lamotrigine as alternative. Carbamazepine and phenytoin worsen absence seizures. Childhood absence epilepsy remits in 70% by adolescence. Juvenile absence epilepsy usually requires lifelong treatment.',
    'Regular sleep, avoid hyperventilation triggers, school accommodations, medication adherence.',
    ['Status epilepticus (absence status—prolonged confusion)', 'First seizure evaluation', 'Emergence of tonic-clonic seizures'],
    'Absence seizures cause brief staring spells—the child appears to "zone out" for a few seconds and then immediately returns to normal. They can happen many times a day and are often mistaken for daydreaming. Medication (ethosuximide or valproate) is very effective. Most children with childhood absence epilepsy outgrow it by their teens. / Las crisis de ausencia causan episodios breves de mirada fija. Se confunden con estar distraido. El medicamento es muy efectivo y la mayoria de los ninos las superan.'
  ),

  'myoclonic-epilepsy': n(
    'myoclonic-epilepsy', 'Myoclonic Epilepsy', 'Epilepsia mioclonica',
    'seizure', '8A61.2',
    'Epilepsy characterized by sudden, brief, shock-like involuntary jerks of a muscle or group of muscles.',
    ['Genetic predisposition', 'Juvenile myoclonic epilepsy (JME) most common', 'Sleep deprivation', 'Photosensitivity', 'Alcohol'],
    'Cortical origin with rapid bilateral activation. In JME, genetic channelopathies (GABRA1, EFHC1) produce cortical hyperexcitability. Myoclonic jerks are brief (<100 ms), bilateral, often affecting arms more than legs. Typically occur shortly after waking.',
    ['Sudden brief bilateral jerking (dropping things, especially in morning)', 'Consciousness preserved during isolated myoclonus', 'Photosensitivity in 30%', 'May progress to tonic-clonic seizure', 'Sleep deprivation triggers', 'Morning predominance'],
    ['EEG: generalized polyspike-and-wave (4-6 Hz)', 'Video-EEG to capture events', 'MRI brain (usually normal in JME)', 'Genetic testing if familial or syndromic'],
    'Valproate is most effective (first-line in males). Levetiracetam (preferred in women of childbearing age). Lamotrigine may worsen myoclonus in some. Avoid carbamazepine, phenytoin, gabapentin. JME usually requires lifelong treatment (high relapse if medications withdrawn).',
    'Strict sleep hygiene, avoid alcohol, avoid photic stimulation, medication adherence especially important, stress management.',
    ['Clusters of myoclonic jerks progressing to GTC', 'Status epilepticus', 'First presentation'],
    'Myoclonic epilepsy causes sudden, brief muscle jerks—often in the arms, especially in the morning after waking. You might drop things or spill your coffee. Medications like valproate or levetiracetam work very well. Avoiding sleep deprivation and alcohol is critical. This type of epilepsy usually needs lifelong treatment. / La epilepsia mioclonica causa sacudidas musculares breves. Los medicamentos funcionan muy bien, pero se necesita tratamiento de por vida.'
  ),

  'status-epilepticus': n(
    'status-epilepticus', 'Status Epilepticus', 'Estado epileptico',
    'seizure', '8A61.Y',
    'Continuous seizure activity >5 minutes or recurrent seizures without regaining consciousness; a life-threatening neurological emergency.',
    ['Known epilepsy with non-adherence', 'Acute brain injury (stroke, TBI)', 'CNS infection', 'Metabolic derangements', 'Alcohol withdrawal', 'Drug toxicity', 'Low ASM levels'],
    'Prolonged seizure activity causes excitotoxic injury from excessive glutamate and calcium influx. After ~30 min, GABA receptor internalization renders seizures refractory. Systemic complications: hyperthermia, rhabdomyolysis, metabolic acidosis, aspiration. Mortality 20-30% for refractory SE.',
    ['Continuous convulsive activity >5 min', 'Recurrent seizures without recovery between', 'Non-convulsive SE: altered awareness, subtle eye movements', 'Autonomic instability', 'Hyperthermia', 'May evolve from convulsive to subtle/non-convulsive'],
    ['Clinical observation', 'Continuous EEG monitoring', 'Point-of-care glucose', 'Electrolytes, CBC, toxicology', 'ASM levels', 'CT/MRI for structural cause', 'LP if infectious etiology suspected'],
    'First-line: IV lorazepam 0.1 mg/kg or IM midazolam 10 mg. Second-line: IV fosphenytoin, valproate, or levetiracetam. Third-line (refractory): propofol, midazolam, or pentobarbital continuous infusion with burst-suppression on EEG. Treat underlying cause. Airway protection. Temperature management. ICU admission.',
    'Medication adherence is paramount, avoid known triggers, epilepsy action plan, medical alert bracelet, family/caregiver seizure first-aid training.',
    ['Any seizure >5 min—call 911', 'Repeated seizures without recovery', 'Unexplained prolonged confusion (non-convulsive SE)', 'Respiratory compromise during seizure'],
    'Status epilepticus is a dangerous condition where a seizure lasts more than 5 minutes or seizures happen repeatedly without waking up between them. This is a brain emergency requiring immediate IV medications. The longer it continues, the harder it is to stop. Call 911 immediately. / El estado epileptico es cuando una convulsion dura mas de 5 minutos. Es una emergencia cerebral. Llame al 911 inmediatamente.'
  ),

  'febrile-seizures': n(
    'febrile-seizures', 'Febrile Seizures', 'Convulsiones febriles',
    'seizure', '8A6Y',
    'Seizures in children 6 months to 5 years associated with fever, without evidence of CNS infection, in a neurologically normal child.',
    ['Age 6 months to 5 years', 'Family history of febrile seizures', 'High fever (rate of rise matters)', 'Viral infections (HHV-6, influenza)', 'Recent vaccination (small increased risk)'],
    'Fever lowers the seizure threshold in the developing brain. Genetic susceptibility plays a role (polygenic). Simple febrile seizures are generalized, last <15 min, and occur once in 24 h. Complex febrile seizures are focal, prolonged (>15 min), or recurrent within 24 h.',
    ['Seizure associated with fever (>38C/100.4F)', 'Generalized tonic-clonic most common', 'Brief (usually <5 min)', 'Rapid postictal recovery', 'No focal features in simple type', 'Child otherwise neurologically normal'],
    ['Clinical diagnosis (focus on excluding meningitis)', 'LP if <12 months or meningeal signs', 'Blood glucose', 'Electrolytes if dehydrated', 'EEG and MRI NOT routinely needed for simple febrile seizures'],
    'Simple febrile seizures: reassurance, no daily ASMs needed. Treat underlying fever source. Antipyretics for comfort (do NOT prevent recurrence). Rescue benzodiazepine (rectal diazepam or intranasal midazolam) for prolonged episodes. Daily ASMs only for complex/recurrent febrile SE. Risk of epilepsy: 2-4% (vs 1% general population).',
    'Fever management for comfort, know seizure first aid, have rescue medication plan, reassurance to parents about benign prognosis.',
    ['Seizure >5 min', 'Focal features', 'Multiple seizures in 24 h', 'Prolonged postictal state', 'Child <6 months or >5 years', 'Meningeal signs'],
    'Febrile seizures happen when a child between 6 months and 5 years gets a fever. While terrifying to watch, simple febrile seizures are generally harmless. Most children outgrow them and do not develop epilepsy. Daily seizure medication is usually not needed. Your doctor may provide a rescue medication for prolonged episodes. / Las convulsiones febriles ocurren con fiebre en ninos pequenos. Aunque asustan, generalmente son inofensivas. La mayoria de los ninos las superan.'
  ),

  // ===== DEGENERATIVE (10) =====================================================

  'alzheimers-disease': n(
    'alzheimers-disease', "Alzheimer's Disease", 'Enfermedad de Alzheimer',
    'degenerative', '8A20',
    'Progressive neurodegenerative disorder and most common cause of dementia, characterized by amyloid plaques and neurofibrillary tangles.',
    ['Age (strongest risk factor)', 'APOE e4 allele', 'Family history', 'Down syndrome', 'Female sex', 'Low education', 'Cardiovascular risk factors', 'TBI history'],
    'Accumulation of amyloid-beta plaques (extracellular) and hyperphosphorylated tau tangles (intracellular) causes synaptic dysfunction, neuroinflammation, and neuronal death. Begins in entorhinal cortex/hippocampus, spreads to association cortex. Cholinergic deficit from nucleus basalis of Meynert degeneration.',
    ['Progressive episodic memory loss (earliest)', 'Word-finding difficulty', 'Visuospatial disorientation', 'Executive dysfunction', 'Behavioral changes (apathy, agitation)', 'Loss of ADLs', 'Sundowning'],
    ['Cognitive testing (MoCA, MMSE)', 'MRI: hippocampal and medial temporal atrophy', 'Amyloid PET or CSF biomarkers (low Ab42, high tau/p-tau)', 'FDG-PET: temporoparietal hypometabolism', 'Rule out reversible causes (B12, TSH, depression, NPH)'],
    'Cholinesterase inhibitors (donepezil, rivastigmine, galantamine) for mild-moderate. Memantine (NMDA antagonist) for moderate-severe. Anti-amyloid antibodies (lecanemab) in early disease. Cognitive stimulation, exercise, caregiver support. Manage behavioral symptoms (avoid antipsychotics if possible).',
    'Regular physical exercise (150 min/week), cognitive engagement and socialization, Mediterranean diet, adequate sleep, cardiovascular risk factor management, fall prevention.',
    ['Rapid cognitive decline (consider other causes)', 'Acute behavioral crisis', 'Wandering with safety risk', 'Aspiration or inability to eat'],
    'Alzheimer disease gradually destroys memory and thinking skills. Abnormal proteins build up in the brain, damaging nerve cells. There is no cure yet, but medications manage symptoms and new treatments show promise for slowing early disease. Support for both patient and caregivers is essential. / El Alzheimer destruye gradualmente la memoria. No tiene cura, pero los medicamentos manejan los sintomas. El apoyo al paciente y cuidadores es esencial.'
  ),

  'frontotemporal-dementia': n(
    'frontotemporal-dementia', 'Frontotemporal Dementia', 'Demencia frontotemporal',
    'degenerative', '8A21',
    'Group of neurodegenerative dementias with frontal and temporal lobe atrophy, presenting with behavioral/personality changes or language dysfunction.',
    ['Family history (40% have positive FH)', 'Genetic mutations (MAPT, GRN, C9orf72)', 'Age 45-65 (younger onset than Alzheimer)'],
    'Abnormal protein accumulation: tau (Pick bodies in Pick disease), TDP-43, or FUS protein in frontal and temporal cortices. Three clinical variants: behavioral variant (most common), semantic variant primary progressive aphasia, and nonfluent/agrammatic PPA. C9orf72 expansion links FTD and ALS.',
    ['Behavioral variant: personality change, disinhibition, apathy, loss of empathy, compulsive behaviors, hyperorality', 'Semantic PPA: loss of word meaning, fluent but empty speech', 'Nonfluent PPA: effortful speech, agrammatism', 'Relative preservation of memory early on', 'Executive dysfunction'],
    ['Clinical diagnosis (Rascovsky criteria for behavioral variant)', 'MRI: frontal and/or anterior temporal atrophy (may be asymmetric)', 'FDG-PET: frontal/temporal hypometabolism', 'Genetic testing (C9orf72, MAPT, GRN)', 'CSF biomarkers to exclude Alzheimer pathology'],
    'No disease-modifying therapy. SSRIs for behavioral symptoms (disinhibition, compulsions). Trazodone for agitation. Avoid antipsychotics when possible. Speech therapy for PPA variants. Caregiver education and support. Genetic counseling for familial cases.',
    'Structured routine, safety modifications at home, caregiver support groups, advance care planning early while capacity preserved, cognitive engagement.',
    ['Acute behavioral escalation', 'Suicidal ideation', 'Inability to maintain safety', 'Aspiration risk'],
    'Frontotemporal dementia affects personality, behavior, and language—not memory at first. It tends to start younger (40s-60s). There is no cure, but medications can help with behavior. Unlike Alzheimer, memory is often preserved early on. It is important to plan ahead while the person can still participate in decisions. / La demencia frontotemporal afecta personalidad y lenguaje. Tiende a empezar mas joven que el Alzheimer.'
  ),

  'vascular-dementia': n(
    'vascular-dementia', 'Vascular Dementia', 'Demencia vascular',
    'degenerative', '8A22',
    'Cognitive decline resulting from cerebrovascular disease, the second most common cause of dementia.',
    ['Hypertension', 'Diabetes', 'Hyperlipidemia', 'Smoking', 'Atrial fibrillation', 'Prior stroke', 'Heart disease'],
    'Cognitive impairment from cumulative vascular brain injury: multi-infarct (multiple cortical strokes), subcortical ischemic (small-vessel disease/lacunes in white matter), strategic single infarct (thalamus, angular gyrus), or hemorrhagic. Often coexists with Alzheimer pathology (mixed dementia).',
    ['Stepwise cognitive decline (may worsen suddenly with each vascular event)', 'Executive dysfunction prominent', 'Gait disturbance', 'Urinary symptoms', 'Pseudobulbar affect', 'Focal neurological signs', 'Personality relatively preserved early'],
    ['Clinical criteria (NINDS-AIREN)', 'MRI: white matter hyperintensities, lacunes, cortical infarcts', 'Neuropsychological testing (executive > memory pattern)', 'Vascular risk factor assessment', 'Carotid ultrasound', 'Echocardiography'],
    'Aggressive vascular risk factor management (BP, lipids, glucose, smoking cessation). Antiplatelet or anticoagulant as indicated. Cholinesterase inhibitors may provide modest benefit (especially in mixed dementia). Cognitive rehabilitation. Treat depression.',
    'Strict cardiovascular risk factor control, regular exercise, Mediterranean diet, social engagement, cognitive stimulation, medication adherence.',
    ['Acute new neurological deficit (new stroke)', 'Rapid cognitive decline', 'Falls'],
    'Vascular dementia is caused by reduced blood flow to the brain from strokes or small-vessel disease. Unlike Alzheimer, it may worsen in steps rather than gradually. The good news is that controlling risk factors—blood pressure, diabetes, cholesterol, smoking—can slow progression and prevent further damage. / La demencia vascular es causada por dano cerebral vascular. Controlar factores de riesgo puede frenar la progresion.'
  ),

  'parkinsons-disease': n(
    'parkinsons-disease', "Parkinson's Disease", 'Enfermedad de Parkinson',
    'degenerative', '8A00.0',
    'Progressive neurodegenerative movement disorder from loss of dopaminergic neurons in the substantia nigra pars compacta.',
    ['Age >60', 'Male sex', 'Pesticide/herbicide exposure', 'Rural living', 'Well-water consumption', 'Family history', 'LRRK2 or GBA mutations', 'TBI history'],
    'Loss of dopaminergic neurons in substantia nigra pars compacta depletes striatal dopamine. Alpha-synuclein aggregates form Lewy bodies. Motor symptoms appear when ~60-80% of neurons are lost. Braak staging: disease begins in olfactory bulb and dorsal motor nucleus of vagus before reaching substantia nigra.',
    ['Resting tremor (pill-rolling, 4-6 Hz)', 'Bradykinesia (cardinal feature)', 'Rigidity (cogwheel)', 'Postural instability (late feature)', 'Shuffling gait and festination', 'Masked facies, hypophonia', 'Micrographia', 'Non-motor: anosmia, REM sleep behavior disorder, constipation, depression, cognitive decline'],
    ['Clinical diagnosis (UK Brain Bank or MDS criteria)', 'DaTscan if uncertain', 'MRI to exclude other causes', 'Response to levodopa supports diagnosis', 'Genetic testing in young-onset or familial'],
    'Levodopa/carbidopa (most effective motor therapy). Dopamine agonists (pramipexole, ropinirole). MAO-B inhibitors (selegiline, rasagiline). COMT inhibitors (entacapone). Deep brain stimulation (STN or GPi) for motor fluctuations. Physical therapy and exercise. Speech therapy.',
    'Regular vigorous exercise (shown to slow progression), tai chi or dance for balance, high-fiber diet for constipation, fall prevention, speech exercises, social engagement, adequate sleep.',
    ['Neuroleptic malignant syndrome (if dopamine meds stopped abruptly)', 'Severe dysphagia with aspiration', 'Acute psychosis', 'Falls with injury'],
    'Parkinson disease affects movement due to loss of brain cells that make dopamine. Main symptoms: tremor at rest, slowness, stiffness, and balance problems. Levodopa replaces missing dopamine. Exercise is critical and may slow progression. For advanced disease, deep brain stimulation helps. / El Parkinson afecta el movimiento por perdida de dopamina cerebral. Temblor, lentitud, rigidez son los sintomas principales. El ejercicio es fundamental.'
  ),

  'lewy-body-dementia': n(
    'lewy-body-dementia', 'Dementia with Lewy Bodies', 'Demencia con cuerpos de Lewy',
    'degenerative', '8A22.0',
    'Second most common neurodegenerative dementia, characterized by alpha-synuclein Lewy body inclusions in cortical neurons.',
    ['Age >50', 'Male sex', 'REM sleep behavior disorder', 'Depression', 'Family history of Parkinson or DLB'],
    'Alpha-synuclein Lewy bodies in cortical and subcortical neurons. Distinguished from Parkinson disease dementia by timing: cognitive symptoms within 1 year of motor symptoms in DLB. More severe cholinergic deficit than Alzheimer.',
    ['Fluctuating cognition and alertness', 'Recurrent vivid visual hallucinations', 'REM sleep behavior disorder', 'Parkinsonism (bradykinesia, rigidity)', 'Severe neuroleptic sensitivity', 'Autonomic dysfunction', 'Falls and syncope'],
    ['Consensus criteria (2 core features = probable)', 'MRI: relative medial temporal preservation', 'DaTscan: reduced basal ganglia uptake', 'FDG-PET: occipital hypometabolism', 'Polysomnography: REM without atonia', 'MIBG cardiac scintigraphy: reduced uptake'],
    'Cholinesterase inhibitors (rivastigmine preferred). Cautious low-dose levodopa for parkinsonism. Melatonin or low-dose clonazepam for RBD. AVOID antipsychotics (severe sensitivity—NMS risk). If antipsychotic essential: quetiapine or pimavanserin only. Structured environment, good lighting.',
    'Structured daily routine, well-lit environment (reduce hallucinations), fall prevention, caregiver education about neuroleptic danger, regular exercise.',
    ['Neuroleptic sensitivity reaction', 'Acute delirium', 'Falls with injury', 'Autonomic crisis'],
    'Lewy body dementia causes fluctuating thinking, vivid visual hallucinations, dream-acting (RBD), and Parkinson-like movements. Critical warning: many common medications for hallucinations can cause severe, life-threatening reactions. Accurate diagnosis is essential for safe treatment. / La demencia con cuerpos de Lewy causa fluctuaciones cognitivas y alucinaciones. Muchos medicamentos para alucinaciones son peligrosos en esta condicion.'
  ),

  'progressive-supranuclear-palsy': n(
    'progressive-supranuclear-palsy', 'Progressive Supranuclear Palsy', 'Paralisis supranuclear progresiva',
    'degenerative', '8A00.1',
    'Tauopathy causing progressive supranuclear gaze palsy, early postural instability with falls, axial rigidity, and frontal cognitive decline.',
    ['Age >60', 'Male sex', 'No established modifiable risk factors'],
    'Four-repeat tau accumulation in basal ganglia, brainstem (especially midbrain), and frontal cortex. Midbrain atrophy (hummingbird sign on MRI). Vertical gaze palsy from degeneration of rostral interstitial nucleus of the medial longitudinal fasciculus.',
    ['Vertical supranuclear gaze palsy (especially downgaze)', 'Early falls (typically backward)', 'Axial rigidity (neck > limbs)', 'Bradykinesia unresponsive to levodopa', 'Pseudobulbar affect', 'Frontal cognitive decline (apathy, impulsivity)', 'Dysarthria and dysphagia (early)'],
    ['Clinical diagnosis (MDS-PSP criteria)', 'MRI: midbrain atrophy (hummingbird sign sagittal, Mickey Mouse sign axial)', 'Poor response to levodopa', 'Tau PET (research)', 'DaTscan abnormal but non-specific'],
    'No disease-modifying therapy. Levodopa trial (usually minimal benefit). Botulinum toxin for blepharospasm or dystonia. Physical therapy for falls prevention. Speech and swallowing therapy. Weighted walker. Prism glasses for downgaze palsy. Antidepressants for mood.',
    'Fall prevention (primary concern), adaptive equipment, thickened liquids as dysphagia progresses, regular PT, advance care planning.',
    ['Severe dysphagia with aspiration', 'Falls with head injury', 'Respiratory compromise'],
    'PSP is a rare brain disease that affects eye movements, balance, and thinking. Early falls, especially backwards, and difficulty looking down are characteristic. It looks similar to Parkinson but does not respond well to Parkinson medications. Physical therapy for fall prevention is very important. / La PSP es una enfermedad rara que afecta movimiento ocular, equilibrio y pensamiento. Las caidas tempranas son caracteristicas.'
  ),

  'multiple-system-atrophy': n(
    'multiple-system-atrophy', 'Multiple System Atrophy', 'Atrofia multisistemica',
    'degenerative', '8A00.2',
    'Synucleinopathy causing progressive autonomic failure with cerebellar ataxia (MSA-C) or parkinsonism (MSA-P).',
    ['Age 50-60 at onset', 'No established genetic risk factors in most cases'],
    'Alpha-synuclein accumulation in oligodendrocytes (glial cytoplasmic inclusions), unlike Parkinson/DLB where Lewy bodies are in neurons. Neuronal loss in striatum, substantia nigra, cerebellum, pons, and intermediolateral cell column (autonomic). Two phenotypes: MSA-P (parkinsonism-predominant) and MSA-C (cerebellar-predominant).',
    ['Severe autonomic failure (orthostatic hypotension, urinary retention/incontinence, erectile dysfunction)', 'MSA-P: poorly levodopa-responsive parkinsonism, often symmetric', 'MSA-C: cerebellar ataxia, intention tremor, dysarthria', 'Stridor (laryngeal dystonia—life-threatening)', 'REM sleep behavior disorder', 'Rapid progression'],
    ['Clinical diagnosis (consensus criteria)', 'MRI: hot cross bun sign (pontine, MSA-C), putaminal atrophy and slit sign (MSA-P)', 'Autonomic function testing (tilt table, QSART)', 'DaTscan abnormal', 'Poor levodopa response helps distinguish from PD'],
    'Levodopa trial (some partial response in MSA-P). Autonomic management: midodrine, droxidopa, fludrocortisone for orthostatic hypotension. CPAP or tracheostomy for stridor. Catheterization for urinary retention. PT and OT. Median survival 6-9 years.',
    'Rise slowly from sitting/lying, compression stockings, adequate fluid and salt intake (if no heart failure), avoid hot environments, fall prevention.',
    ['Stridor (can cause sudden death)', 'Severe orthostatic hypotension with syncope', 'Aspiration pneumonia'],
    'MSA is a rare brain disease that affects movement, balance, and automatic body functions like blood pressure and bladder control. It can look like Parkinson but progresses faster and does not respond well to Parkinson medications. Treatment focuses on managing symptoms, especially dangerous drops in blood pressure. / La AMS afecta movimiento y funciones automaticas. Progresa mas rapido que el Parkinson. El tratamiento se centra en manejar sintomas.'
  ),

  'corticobasal-degeneration': n(
    'corticobasal-degeneration', 'Corticobasal Degeneration', 'Degeneracion corticobasal',
    'degenerative', '8A00.3',
    'Asymmetric tauopathy causing progressive apraxia, alien limb phenomenon, cortical sensory loss, and parkinsonism.',
    ['Age >60', 'No established modifiable risk factors'],
    'Four-repeat tau accumulation in cortex and basal ganglia, causing asymmetric neuronal loss. Ballooned achromatic neurons and astrocytic plaques on pathology. Clinically presents as corticobasal syndrome (CBS), but pathology may also underlie PSP or FTD presentations.',
    ['Asymmetric limb apraxia (cannot perform learned movements)', 'Alien limb phenomenon', 'Cortical sensory loss (astereognosis, agraphesthesia)', 'Asymmetric rigidity and dystonia', 'Myoclonus', 'Poor levodopa response', 'Cognitive decline (frontal-parietal pattern)'],
    ['Clinical diagnosis (Armstrong criteria)', 'MRI: asymmetric frontoparietal cortical atrophy', 'FDG-PET: asymmetric hypometabolism', 'DaTscan may be abnormal', 'Tau PET (research)'],
    'No disease-modifying therapy. Levodopa trial (usually fails). Botulinum toxin for focal dystonia. Clonazepam for myoclonus. PT and OT for limb function. Speech therapy. Occupational therapy for ADLs.',
    'Adaptive equipment, occupational therapy for daily tasks, fall prevention, caregiver support, advance care planning.',
    ['Falls with injury', 'Aspiration from dysphagia', 'Complete limb disability'],
    'CBD is a rare brain disease causing one limb to become stiff, clumsy, and sometimes seem to move on its own (alien limb). It progressively affects movement and thinking. There is no cure, but therapy helps maintain function as long as possible. / La DCB causa que un miembro se vuelva rigido y torpe. No tiene cura pero la terapia ayuda a mantener la funcion.'
  ),

  'normal-pressure-hydrocephalus': n(
    'normal-pressure-hydrocephalus', 'Normal Pressure Hydrocephalus', 'Hidrocefalia de presion normal',
    'degenerative', '8A05',
    'Potentially reversible dementia with the triad of gait disturbance, urinary incontinence, and cognitive impairment with ventriculomegaly.',
    ['Age >60', 'Prior SAH', 'Prior meningitis', 'Prior TBI', 'Prior brain surgery'],
    'Impaired CSF absorption at arachnoid granulations causes chronic ventricular dilation despite normal opening pressure. Dilated ventricles compress periventricular white matter (corona radiata). Gait fibers affected first, then bladder, then cognition (wet, wobbly, wacky).',
    ['Gait disturbance (earliest—magnetic, wide-based, shuffling)', 'Urinary urgency then incontinence', 'Frontal-subcortical cognitive pattern (apathy, inattention)', 'Classic triad: Hakim triad (wet, wobbly, wacky)'],
    ['MRI: ventriculomegaly disproportionate to atrophy (Evans index >0.3)', 'Large-volume LP tap test (30-50 mL)—gait improvement within hours supports diagnosis', 'Continuous lumbar drainage 72 h if tap equivocal', 'CSF infusion test', 'Rule out Alzheimer, vascular dementia, PD'],
    'VP shunt (definitive treatment)—programmable valve preferred. ETV as alternative. Gait improvement 60-80% post-shunt. Cognitive improvement 40-60%. Urinary improvement 50-70%. Better outcomes with earlier intervention.',
    'Fall prevention, structured routine, physical therapy before and after shunt, caregiver support.',
    ['Acute shunt malfunction (headache, declining cognition)', 'Shunt infection signs (fever, meningismus)', 'Rapid neurological deterioration'],
    'NPH is a condition where fluid builds up in the brain, causing difficulty walking, bladder problems, and memory issues. Unlike other dementias, it is potentially treatable with a shunt that drains excess fluid. Early diagnosis leads to better outcomes. If walking problems come first, ask the doctor about this condition. / La HPN es una acumulacion de liquido en el cerebro que puede tratarse con una valvula. El diagnostico temprano mejora los resultados.'
  ),

  'als': n(
    'als', 'Amyotrophic Lateral Sclerosis (ALS)', 'Esclerosis lateral amiotrofica (ELA)',
    'degenerative', '8B60',
    'Fatal progressive motor neuron disease affecting both upper and lower motor neurons.',
    ['Age 55-75', 'Male sex (slight predominance)', 'Family history (10% familial—SOD1, C9orf72)', 'Military service', 'Smoking', 'Possible environmental toxin exposure'],
    'Degeneration of upper motor neurons (corticospinal tract) and lower motor neurons (anterior horn cells, brainstem). TDP-43 proteinopathy in most sporadic cases. Glutamate excitotoxicity, oxidative stress, protein aggregation contribute. Spares extraocular muscles and sphincters early.',
    ['Combined UMN and LMN signs in same region', 'Progressive asymmetric limb weakness', 'Fasciculations and muscle wasting', 'Hyperreflexia with atrophy', 'Dysarthria and dysphagia (bulbar onset 25%)', 'Respiratory weakness', 'NO sensory loss, NO eye movement abnormality early'],
    ['El Escorial criteria', 'EMG/NCS: widespread denervation with reinnervation', 'MRI brain and spine (exclude mimics)', 'PFTs (FVC)', 'Genetic testing if familial', 'Rule out cervical myelopathy, MMN, Kennedy disease'],
    'Riluzole (modest survival benefit ~3 months). Edaravone (may slow functional decline). Tofersen for SOD1 mutations. NIV for respiratory support (improves survival). PEG tube for nutrition. Multidisciplinary care (PT, OT, speech, respiratory, palliative). Communication devices.',
    'Maintain nutrition (high-calorie diet), adaptive equipment, energy conservation, respiratory exercises, maintain social connections, advance care planning early.',
    ['Acute respiratory decline', 'Severe dysphagia with aspiration', 'Rapid functional deterioration'],
    'ALS (Lou Gehrig disease) attacks the nerve cells controlling muscles. Over time, muscles weaken and waste, affecting movement, speech, swallowing, and eventually breathing. There is no cure, but treatments can slow progression and supportive care greatly improves quality of life. / La ELA ataca las neuronas que controlan los musculos. No hay cura, pero los tratamientos mejoran la calidad de vida.'
  ),

// SPLIT_MARKER_3
};

// ---------------------------------------------------------------------------
// Utility helpers
// ---------------------------------------------------------------------------

export function getNeuroCondition(id: string): NeuroConditionEntry | undefined {
  return NEURO_CONDITIONS[id];
}

export function searchNeuroConditions(query: string): NeuroConditionEntry[] {
  const q = query.toLowerCase();
  return Object.values(NEURO_CONDITIONS).filter(c =>
    c.name.toLowerCase().includes(q) ||
    c.nameEs.toLowerCase().includes(q) ||
    c.category.toLowerCase().includes(q) ||
    c.description.toLowerCase().includes(q) ||
    c.pathophysiology.toLowerCase().includes(q) ||
    c.treatment.toLowerCase().includes(q) ||
    c.patientExplanation.toLowerCase().includes(q),
  );
}

export function getNeuroByCategory(category: NeuroCategory): NeuroConditionEntry[] {
  return Object.values(NEURO_CONDITIONS).filter(c => c.category === category);
}

export function getNeuroConditionCount(): number {
  return Object.keys(NEURO_CONDITIONS).length;
}

export function getNeuroByRiskFactor(riskFactor: string): NeuroConditionEntry[] {
  const rf = riskFactor.toLowerCase();
  return Object.values(NEURO_CONDITIONS).filter(c =>
    c.riskFactors.some(r => r.toLowerCase().includes(rf)),
  );
}

export const NEURO_CATEGORY_LABELS: Record<NeuroCategory, string> = {
  'cerebrovascular': 'Cerebrovascular',
  'degenerative': 'Neurodegenerative',
  'demyelinating': 'Demyelinating',
  'neuromuscular': 'Neuromuscular Junction',
  'headache': 'Headache Disorders',
  'neoplastic': 'Brain & CNS Tumors',
  'infectious': 'CNS Infections',
  'peripheral-nerve': 'Peripheral Nerve',
  'spinal': 'Spinal Cord',
  'movement-disorder': 'Movement Disorders',
  'congenital': 'Congenital & Developmental',
  'seizure': 'Seizure Disorders',
  'autoimmune': 'Autoimmune / Inflammatory',
  'other': 'Other Neurological',
};
