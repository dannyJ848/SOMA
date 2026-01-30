/**
 * Differential Diagnosis Database
 *
 * Comprehensive chief-complaint-driven differential diagnosis reference
 * for medical education. Each entry provides emergency/must-not-miss
 * diagnoses, common and uncommon differentials, key history questions,
 * red flags, initial workup, and a clinical pearl.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type ChiefComplaintCategory =
  | 'cardiovascular'
  | 'pulmonary'
  | 'gastrointestinal'
  | 'neurological'
  | 'musculoskeletal'
  | 'hematologic'
  | 'endocrine'
  | 'infectious'
  | 'renal'
  | 'general';

export interface DifferentialDiagnosisEntry {
  id: string;
  chiefComplaint: string;
  category: ChiefComplaintCategory;
  emergencyDDx: string[];
  commonDDx: string[];
  uncommonDDx: string[];
  keyQuestions: string[];
  redFlags: string[];
  initialWorkup: string[];
  clinicalPearl: string;
}

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const DIFFERENTIAL_DIAGNOSIS_ENTRIES: Record<string, DifferentialDiagnosisEntry> = {
  // =========================================================================
  // CHEST PAIN
  // =========================================================================
  'chest-pain': {
    id: 'chest-pain',
    chiefComplaint: 'Chest pain',
    category: 'cardiovascular',
    emergencyDDx: [
      'Acute coronary syndrome (STEMI/NSTEMI/unstable angina)',
      'Aortic dissection',
      'Pulmonary embolism',
      'Tension pneumothorax',
      'Cardiac tamponade',
      'Esophageal rupture (Boerhaave syndrome)',
    ],
    commonDDx: [
      'Musculoskeletal (costochondritis, muscle strain)',
      'GERD / esophageal spasm',
      'Stable angina',
      'Pericarditis',
      'Anxiety / panic disorder',
      'Pneumonia / pleuritis',
    ],
    uncommonDDx: [
      'Herpes zoster (pre-eruption)',
      'Prinzmetal (vasospastic) angina',
      'Takotsubo cardiomyopathy',
      'Mediastinitis',
      'Sickle cell acute chest syndrome',
    ],
    keyQuestions: [
      'Onset, location, radiation, quality (crushing, sharp, tearing)?',
      'Exertional vs rest? Positional component?',
      'Associated dyspnea, diaphoresis, nausea, syncope?',
      'History of CAD, HTN, DM, smoking, hyperlipidemia?',
      'Recent immobilization, surgery, travel, OCP use?',
    ],
    redFlags: [
      'Acute-onset tearing pain radiating to back (dissection)',
      'Exertional substernal pressure with diaphoresis (ACS)',
      'Hypotension, JVD, muffled heart sounds (tamponade)',
      'Sudden pleuritic pain with hypoxia (PE)',
      'Subcutaneous emphysema (esophageal rupture)',
    ],
    initialWorkup: [
      'ECG (immediate), troponin (serial), CXR',
      'CBC, BMP, coagulation studies',
      'D-dimer if PE suspected (after Wells/PERC)',
      'CT angiography if dissection or PE suspected',
      'Echocardiogram if tamponade or wall motion abnormality suspected',
    ],
    clinicalPearl:
      'Always exclude the "big five" life threats (ACS, dissection, PE, tension pneumothorax, tamponade) before attributing chest pain to benign causes. A normal ECG does not exclude ACS — serial troponins are essential.',
  },

  // =========================================================================
  // SHORTNESS OF BREATH
  // =========================================================================
  'shortness-of-breath': {
    id: 'shortness-of-breath',
    chiefComplaint: 'Shortness of breath',
    category: 'pulmonary',
    emergencyDDx: [
      'Pulmonary embolism',
      'Tension pneumothorax',
      'Acute heart failure / flash pulmonary edema',
      'Severe asthma exacerbation (status asthmaticus)',
      'Anaphylaxis',
      'Cardiac tamponade',
    ],
    commonDDx: [
      'COPD exacerbation',
      'Asthma',
      'Pneumonia',
      'Congestive heart failure',
      'Anxiety / hyperventilation',
      'Pleural effusion',
      'Anemia',
    ],
    uncommonDDx: [
      'Interstitial lung disease / pulmonary fibrosis',
      'Pulmonary hypertension',
      'Neuromuscular weakness (myasthenia, GBS)',
      'Superior vena cava syndrome',
      'Metabolic acidosis (Kussmaul breathing)',
    ],
    keyQuestions: [
      'Acute or gradual onset? At rest or exertional?',
      'Orthopnea, PND, or leg swelling (CHF)?',
      'Wheezing, cough, sputum production?',
      'Fever, pleuritic pain, hemoptysis?',
      'History of asthma, COPD, heart failure, VTE?',
    ],
    redFlags: [
      'Acute onset with hypoxia and unilateral leg swelling (PE)',
      'Stridor or angioedema (upper airway obstruction)',
      'Tripod positioning, accessory muscle use, inability to speak in full sentences',
      'Hypotension with JVD (tension pneumothorax, tamponade, massive PE)',
      'Acute-onset bilateral crackles with hypertension (flash pulmonary edema)',
    ],
    initialWorkup: [
      'SpO2, ABG/VBG, CXR, ECG',
      'CBC, BMP, BNP/NT-proBNP, troponin',
      'D-dimer if PE suspected',
      'CT chest (PE protocol or HRCT depending on clinical picture)',
      'Bedside ultrasound (lung, cardiac, IVC)',
    ],
    clinicalPearl:
      'BNP <100 pg/mL effectively excludes heart failure as the cause of acute dyspnea. An elevated BNP alone does not confirm CHF — it rises with PE, renal failure, sepsis, and atrial fibrillation.',
  },

  // =========================================================================
  // ABDOMINAL PAIN
  // =========================================================================
  'abdominal-pain': {
    id: 'abdominal-pain',
    chiefComplaint: 'Abdominal pain',
    category: 'gastrointestinal',
    emergencyDDx: [
      'Ruptured abdominal aortic aneurysm',
      'Mesenteric ischemia',
      'Perforated viscus',
      'Ectopic pregnancy (ruptured)',
      'Bowel obstruction with strangulation',
      'Acute pancreatitis (severe / necrotizing)',
    ],
    commonDDx: [
      'Acute appendicitis',
      'Acute cholecystitis / biliary colic',
      'Peptic ulcer disease',
      'Gastroenteritis',
      'Diverticulitis',
      'Constipation',
      'Ureterolithiasis (renal colic)',
      'UTI / pyelonephritis',
    ],
    uncommonDDx: [
      'Adrenal crisis',
      'Diabetic ketoacidosis (abdominal presentation)',
      'Hereditary angioedema',
      'Acute intermittent porphyria',
      'Lead poisoning',
      'Familial Mediterranean fever',
    ],
    keyQuestions: [
      'Location, radiation, quality (sharp, crampy, burning)?',
      'Sudden onset ("like a switch") vs gradual?',
      'Relation to meals, bowel movements, position?',
      'Associated nausea, vomiting, fever, diarrhea, constipation?',
      'Last menstrual period (always ask in reproductive-age women)?',
    ],
    redFlags: [
      'Sudden-onset severe pain out of proportion to exam (mesenteric ischemia)',
      'Rigid abdomen with rebound/guarding (peritonitis)',
      'Hemodynamic instability with abdominal pain (ruptured AAA, ectopic)',
      'Pain with absent bowel sounds and distension (obstruction)',
      'Elderly patient with new-onset abdominal pain and atrial fibrillation (mesenteric ischemia)',
    ],
    initialWorkup: [
      'CBC, BMP, lipase, LFTs, lactate, UA',
      'Urine pregnancy test (all reproductive-age women)',
      'Abdominal X-ray (obstruction), CT abdomen/pelvis with contrast',
      'RUQ ultrasound if biliary pathology suspected',
      'CTA abdomen if mesenteric ischemia or AAA suspected',
    ],
    clinicalPearl:
      'Pain out of proportion to physical exam findings is the hallmark of mesenteric ischemia — a diagnosis that is fatal if missed. Always consider ectopic pregnancy in any woman of reproductive age with abdominal pain, regardless of reported contraception.',
  },

  // =========================================================================
  // HEADACHE
  // =========================================================================
  'headache': {
    id: 'headache',
    chiefComplaint: 'Headache',
    category: 'neurological',
    emergencyDDx: [
      'Subarachnoid hemorrhage',
      'Bacterial meningitis',
      'Intracranial hemorrhage (epidural, subdural, intraparenchymal)',
      'Cerebral venous sinus thrombosis',
      'Acute angle-closure glaucoma',
      'Carbon monoxide poisoning',
    ],
    commonDDx: [
      'Tension-type headache',
      'Migraine (with or without aura)',
      'Sinusitis',
      'Medication-overuse headache',
      'Cervicogenic headache',
      'Cluster headache',
    ],
    uncommonDDx: [
      'Temporal arteritis (giant cell arteritis)',
      'Idiopathic intracranial hypertension (pseudotumor cerebri)',
      'Pituitary apoplexy',
      'Carotid or vertebral artery dissection',
      'Reversible cerebral vasoconstriction syndrome (RCVS)',
    ],
    keyQuestions: [
      'Worst headache of your life? Thunderclap onset (peak in seconds)?',
      'Fever, neck stiffness, photophobia?',
      'Prior headache history — is this different from usual?',
      'Visual changes, focal weakness, or altered mental status?',
      'Trauma history? Anticoagulant use? Immunosuppression? Pregnancy?',
    ],
    redFlags: [
      'Thunderclap onset (maximal intensity in <1 minute) — SAH until proven otherwise',
      'Fever + nuchal rigidity (meningitis)',
      'New headache in patient >50 (temporal arteritis, mass lesion)',
      'Headache with focal neurologic deficits',
      'Papilledema on fundoscopic exam (elevated ICP)',
      'Headache worse with Valsalva or positional changes',
    ],
    initialWorkup: [
      'Neurological exam including fundoscopy',
      'Non-contrast CT head (if acute, thunderclap, or focal findings)',
      'LP with opening pressure if SAH suspected and CT negative',
      'ESR/CRP in patients >50 (temporal arteritis)',
      'MRI/MRV if cerebral venous sinus thrombosis suspected',
    ],
    clinicalPearl:
      'A CT head is only ~95% sensitive for SAH in the first 6 hours and sensitivity declines rapidly after that. If clinical suspicion is high and CT is negative, LP is mandatory — xanthochromia is the key finding.',
  },

  // =========================================================================
  // BACK PAIN
  // =========================================================================
  'back-pain': {
    id: 'back-pain',
    chiefComplaint: 'Back pain',
    category: 'musculoskeletal',
    emergencyDDx: [
      'Cauda equina syndrome',
      'Epidural abscess',
      'Spinal cord compression (tumor)',
      'Aortic dissection (posterior pain)',
      'Ruptured abdominal aortic aneurysm',
      'Vertebral fracture (pathologic or traumatic)',
    ],
    commonDDx: [
      'Mechanical low back pain (strain/sprain)',
      'Lumbar disc herniation with radiculopathy',
      'Degenerative disc disease / spondylosis',
      'Spinal stenosis',
      'Musculoligamentous strain',
      'Nephrolithiasis (flank/back pain)',
    ],
    uncommonDDx: [
      'Vertebral osteomyelitis / discitis',
      'Ankylosing spondylitis',
      'Retroperitoneal hemorrhage',
      'Pancreatitis (radiating to back)',
      'Herpes zoster (pre-eruption)',
    ],
    keyQuestions: [
      'Radiation to legs? Bilateral or unilateral?',
      'Bowel or bladder dysfunction (retention, incontinence)?',
      'Saddle anesthesia or progressive weakness?',
      'Fever, weight loss, history of cancer, IV drug use?',
      'Worse at rest (inflammatory) vs with activity (mechanical)?',
    ],
    redFlags: [
      'Bowel/bladder dysfunction + saddle anesthesia (cauda equina)',
      'Fever + back pain + IVDU or immunosuppression (epidural abscess)',
      'Progressive neurologic deficit',
      'History of cancer with new back pain (metastatic compression)',
      'Back pain in patient >50 with unexplained weight loss',
    ],
    initialWorkup: [
      'Detailed neurological exam (strength, sensation, reflexes, rectal tone)',
      'No imaging needed for uncomplicated mechanical back pain <6 weeks',
      'Urgent MRI if red flags present (cauda equina, abscess, cord compression)',
      'CBC, ESR/CRP, blood cultures if infection suspected',
      'Plain films if fracture or spondylolisthesis suspected',
    ],
    clinicalPearl:
      'Cauda equina syndrome is a surgical emergency. Bilateral leg symptoms, urinary retention, and saddle anesthesia mandate emergent MRI. Post-void residual >200 mL in this context is highly suggestive.',
  },

  // =========================================================================
  // DIZZINESS / VERTIGO
  // =========================================================================
  'dizziness-vertigo': {
    id: 'dizziness-vertigo',
    chiefComplaint: 'Dizziness/vertigo',
    category: 'neurological',
    emergencyDDx: [
      'Posterior circulation stroke (cerebellar or brainstem)',
      'Vertebral artery dissection',
      'Basilar artery occlusion',
      'Intracranial hemorrhage',
    ],
    commonDDx: [
      'Benign paroxysmal positional vertigo (BPPV)',
      'Vestibular neuritis / labyrinthitis',
      'Orthostatic hypotension',
      'Medication side effect (antihypertensives, anticonvulsants)',
      'Anxiety / hyperventilation',
      'Vasovagal presyncope',
    ],
    uncommonDDx: [
      'Meniere disease',
      'Vestibular migraine',
      'Acoustic neuroma (vestibular schwannoma)',
      'Multiple sclerosis (brainstem plaque)',
      'Perilymphatic fistula',
    ],
    keyQuestions: [
      'True vertigo (room spinning) vs lightheadedness vs disequilibrium?',
      'Episodic vs continuous? Duration of episodes?',
      'Positional triggers? Head turn, rolling in bed (BPPV)?',
      'Hearing loss, tinnitus, aural fullness (Meniere)?',
      'Focal neurologic symptoms (diplopia, dysarthria, dysphagia, ataxia)?',
    ],
    redFlags: [
      'Acute vertigo + focal neurologic deficits (posterior stroke)',
      'Direction-changing nystagmus or vertical nystagmus (central cause)',
      'Negative head impulse test with nystagmus (central cause)',
      'Severe gait ataxia (cannot sit unsupported — cerebellar stroke)',
      'New-onset worst headache with vertigo (vertebral dissection, SAH)',
    ],
    initialWorkup: [
      'HINTS exam (Head Impulse, Nystagmus, Test of Skew) for acute vestibular syndrome',
      'Orthostatic vitals',
      'Dix-Hallpike maneuver if BPPV suspected',
      'Neurological exam (cranial nerves, cerebellar testing, gait)',
      'MRI brain (DWI) if central cause suspected — CT misses >80% of posterior strokes',
    ],
    clinicalPearl:
      'The HINTS exam (performed by a trained examiner) is more sensitive than MRI in the first 24-48 hours for detecting posterior circulation stroke presenting as acute vestibular syndrome. A normal head impulse test in a patient with acute persistent vertigo suggests a central (dangerous) cause.',
  },

  // =========================================================================
  // SYNCOPE
  // =========================================================================
  'syncope': {
    id: 'syncope',
    chiefComplaint: 'Syncope',
    category: 'cardiovascular',
    emergencyDDx: [
      'Cardiac arrhythmia (VT, VF, complete heart block, long QT)',
      'Aortic dissection',
      'Pulmonary embolism (massive)',
      'Acute MI',
      'Aortic stenosis (exertional syncope)',
      'Cardiac tamponade',
      'Subarachnoid hemorrhage',
    ],
    commonDDx: [
      'Vasovagal (neurocardiogenic) syncope',
      'Orthostatic hypotension (dehydration, medications)',
      'Situational syncope (micturition, cough, defecation)',
      'Carotid sinus hypersensitivity',
    ],
    uncommonDDx: [
      'Hypertrophic cardiomyopathy',
      'Brugada syndrome',
      'Subclavian steal syndrome',
      'Pulmonary hypertension',
      'Autonomic failure (Shy-Drager, pure autonomic failure)',
    ],
    keyQuestions: [
      'Prodromal symptoms (lightheadedness, warmth, nausea, tunnel vision)?',
      'Exertional syncope (structural heart disease)?',
      'Palpitations before the event? Family history of sudden cardiac death?',
      'Witnessed seizure activity, incontinence, tongue biting?',
      'Medications (antihypertensives, QT-prolonging drugs, diuretics)?',
    ],
    redFlags: [
      'Exertional syncope (aortic stenosis, HOCM, arrhythmia)',
      'Syncope without prodrome (arrhythmia)',
      'Family history of sudden cardiac death in young relatives',
      'New cardiac murmur',
      'Syncope with chest pain or dyspnea (ACS, PE, dissection)',
      'Abnormal ECG (prolonged QT, Brugada pattern, heart block)',
    ],
    initialWorkup: [
      'ECG (12-lead, immediate — look for arrhythmia, QT, Brugada, heart block)',
      'Orthostatic vitals',
      'CBC, BMP, glucose, troponin',
      'Echocardiogram if structural heart disease suspected',
      'Telemetry or Holter/event monitor for recurrent unexplained syncope',
    ],
    clinicalPearl:
      'The ECG is the single most important test in syncope evaluation. A normal ECG with a clear vasovagal prodrome in a young patient is very reassuring. Exertional syncope is cardiac until proven otherwise.',
  },

  // =========================================================================
  // PALPITATIONS
  // =========================================================================
  'palpitations': {
    id: 'palpitations',
    chiefComplaint: 'Palpitations',
    category: 'cardiovascular',
    emergencyDDx: [
      'Ventricular tachycardia',
      'Unstable SVT with hemodynamic compromise',
      'Atrial fibrillation with rapid ventricular response (new-onset)',
      'Wolff-Parkinson-White with atrial fibrillation',
      'Torsades de pointes',
    ],
    commonDDx: [
      'Premature atrial or ventricular contractions (PACs/PVCs)',
      'Sinus tachycardia (anxiety, deconditioning, dehydration)',
      'Atrial fibrillation / flutter',
      'SVT (AVNRT, AVRT)',
      'Anxiety / panic disorder',
      'Caffeine or stimulant use',
    ],
    uncommonDDx: [
      'Pheochromocytoma',
      'Hyperthyroidism',
      'Carcinoid syndrome',
      'Brugada syndrome',
      'Arrhythmogenic right ventricular cardiomyopathy (ARVC)',
    ],
    keyQuestions: [
      'Regular or irregular rhythm? Rapid or slow?',
      'Sudden onset and offset (SVT) vs gradual?',
      'Associated lightheadedness, syncope, chest pain, dyspnea?',
      'Caffeine, alcohol, stimulant, or drug use?',
      'Thyroid symptoms (weight loss, heat intolerance, tremor)?',
    ],
    redFlags: [
      'Palpitations with syncope or presyncope (arrhythmia with hemodynamic compromise)',
      'Associated chest pain (ischemia-triggered arrhythmia)',
      'Family history of sudden cardiac death',
      'Known structural heart disease or reduced EF',
      'Wide-complex tachycardia on ECG (VT until proven otherwise)',
    ],
    initialWorkup: [
      'ECG (12-lead, during symptoms if possible)',
      'CBC, BMP (K+, Mg2+, Ca2+), TSH',
      'Ambulatory monitoring (Holter 24-48h, event monitor 2-4 weeks)',
      'Echocardiogram if structural heart disease suspected',
      'Urine drug screen if stimulant use suspected',
    ],
    clinicalPearl:
      'Ask the patient to tap out the rhythm — a regularly irregular pattern ("grouped beating") suggests Wenckebach, while an irregularly irregular pattern suggests atrial fibrillation. Abrupt onset/offset suggests SVT.',
  },

  // =========================================================================
  // FEVER
  // =========================================================================
  'fever': {
    id: 'fever',
    chiefComplaint: 'Fever',
    category: 'infectious',
    emergencyDDx: [
      'Sepsis / septic shock',
      'Bacterial meningitis',
      'Necrotizing fasciitis',
      'Febrile neutropenia',
      'Endocarditis with embolic complications',
      'Malignant hyperthermia / neuroleptic malignant syndrome',
    ],
    commonDDx: [
      'Upper respiratory infection (viral)',
      'Urinary tract infection / pyelonephritis',
      'Pneumonia (community-acquired)',
      'Cellulitis / skin and soft tissue infection',
      'Gastroenteritis',
      'Sinusitis / pharyngitis',
    ],
    uncommonDDx: [
      'Fever of unknown origin (FUO): occult abscess, endocarditis, TB, lymphoma',
      'Drug fever',
      'Adult-onset Still disease',
      'Thyroid storm',
      'Factitious fever',
    ],
    keyQuestions: [
      'Duration and pattern of fever? Continuous, intermittent, or relapsing?',
      'Localizing symptoms (cough, dysuria, headache, rash, joint pain)?',
      'Recent travel, sick contacts, animal exposures?',
      'Immunosuppression, HIV status, recent chemotherapy?',
      'Recent surgery, hospitalization, IV lines, prosthetic material?',
    ],
    redFlags: [
      'Fever with hemodynamic instability (sepsis/septic shock)',
      'Fever + petechial rash + nuchal rigidity (meningococcemia)',
      'Fever in neutropenic patient (ANC <500 — febrile neutropenia emergency)',
      'Fever + rapidly spreading erythema with crepitus (necrotizing fasciitis)',
      'Fever with new murmur (endocarditis)',
    ],
    initialWorkup: [
      'CBC with differential, BMP, lactate, blood cultures (x2)',
      'UA and urine culture, CXR',
      'Procalcitonin (bacterial vs viral differentiation)',
      'Site-specific cultures and imaging as indicated',
      'LP if meningitis suspected',
    ],
    clinicalPearl:
      'Fever in a neutropenic patient is a medical emergency requiring broad-spectrum antibiotics within 60 minutes. Do not wait for culture results. The absence of localizing symptoms does not reduce urgency — neutropenic patients cannot mount a normal inflammatory response.',
  },

  // =========================================================================
  // WEIGHT LOSS
  // =========================================================================
  'weight-loss': {
    id: 'weight-loss',
    chiefComplaint: 'Weight loss',
    category: 'general',
    emergencyDDx: [
      'Adrenal crisis (acute adrenal insufficiency)',
      'Diabetic ketoacidosis (new-onset diabetes)',
    ],
    commonDDx: [
      'Malignancy (lung, GI, lymphoma, pancreatic)',
      'Depression / psychiatric illness',
      'Hyperthyroidism',
      'Diabetes mellitus (uncontrolled)',
      'COPD / chronic heart failure (cardiac cachexia)',
      'Medication effect (stimulants, metformin, GLP-1 agonists)',
    ],
    uncommonDDx: [
      'Chronic infection (TB, HIV, endocarditis)',
      'Celiac disease / malabsorption',
      'Adrenal insufficiency',
      'Inflammatory bowel disease',
      'Eating disorder (anorexia nervosa)',
      'Chronic mesenteric ischemia',
    ],
    keyQuestions: [
      'Intentional vs unintentional? Amount and timeframe (>5% in 6-12 months is significant)?',
      'Appetite preserved (hyperthyroidism, DM, malabsorption) vs decreased (malignancy, depression)?',
      'GI symptoms: dysphagia, early satiety, diarrhea, steatorrhea?',
      'Night sweats, fevers, fatigue (malignancy, infection)?',
      'Mood, sleep, anhedonia (depression screen)?',
    ],
    redFlags: [
      'Unintentional >5% body weight loss in 6-12 months',
      'Associated lymphadenopathy, night sweats (lymphoma)',
      'Dysphagia with weight loss (esophageal/gastric cancer)',
      'New-onset diabetes in older adult with weight loss (pancreatic cancer)',
      'Progressive dyspnea + weight loss (lung cancer)',
    ],
    initialWorkup: [
      'CBC, CMP (including LFTs, albumin, glucose), TSH',
      'ESR/CRP, LDH, HIV',
      'Age-appropriate cancer screening (CT chest, colonoscopy)',
      'Stool studies if malabsorption suspected (fecal fat, celiac panel)',
      'Depression screening (PHQ-9)',
    ],
    clinicalPearl:
      'Unintentional weight loss with preserved appetite suggests hyperthyroidism, uncontrolled diabetes, or malabsorption. Weight loss with decreased appetite is more concerning for malignancy or depression. In patients >50, malignancy must be excluded first.',
  },

  // =========================================================================
  // FATIGUE
  // =========================================================================
  'fatigue': {
    id: 'fatigue',
    chiefComplaint: 'Fatigue',
    category: 'general',
    emergencyDDx: [
      'Acute coronary syndrome (atypical presentation)',
      'Severe anemia (Hgb <7)',
      'Adrenal crisis',
      'Carbon monoxide poisoning',
    ],
    commonDDx: [
      'Depression / anxiety',
      'Sleep disorder (OSA, insomnia)',
      'Iron deficiency anemia',
      'Hypothyroidism',
      'Diabetes mellitus',
      'Medication side effects (beta-blockers, antidepressants, antihistamines)',
      'Deconditioning / sedentary lifestyle',
    ],
    uncommonDDx: [
      'Heart failure (early)',
      'Chronic kidney disease',
      'Hepatitis (viral or autoimmune)',
      'Adrenal insufficiency',
      'Multiple sclerosis',
      'Myasthenia gravis',
      'Chronic fatigue syndrome / ME-CFS',
    ],
    keyQuestions: [
      'Duration? Acute onset vs chronic (>6 months)?',
      'Worse with exertion or constant? Relieved by rest?',
      'Sleep quality and quantity? Snoring, witnessed apneas?',
      'Mood, concentration, anhedonia (depression screen)?',
      'Weight changes, cold intolerance, constipation (hypothyroid)?',
    ],
    redFlags: [
      'Fatigue with exertional dyspnea or chest pain (cardiac cause)',
      'Fatigue with unintentional weight loss (malignancy)',
      'Fatigue with fever and night sweats (infection, lymphoma)',
      'Progressive weakness with fatigue (neuromuscular disease)',
      'Fatigue with skin hyperpigmentation (adrenal insufficiency)',
    ],
    initialWorkup: [
      'CBC, CMP, TSH, ferritin/iron studies, glucose/HbA1c',
      'ESR/CRP, Vitamin D, B12',
      'Depression screening (PHQ-9)',
      'Sleep study if OSA suspected',
      'AM cortisol if adrenal insufficiency suspected',
    ],
    clinicalPearl:
      'Fatigue is one of the most common and least specific complaints. A structured approach — screening for depression, sleep disorders, anemia, thyroid dysfunction, and diabetes — identifies the cause in >80% of cases. ME/CFS is a diagnosis of exclusion requiring >6 months of disabling fatigue with post-exertional malaise.',
  },

  // =========================================================================
  // JOINT PAIN
  // =========================================================================
  'joint-pain': {
    id: 'joint-pain',
    chiefComplaint: 'Joint pain',
    category: 'musculoskeletal',
    emergencyDDx: [
      'Septic arthritis',
      'Necrotizing fasciitis (overlying joint)',
      'Crystal arthropathy with septic joint (concurrent)',
    ],
    commonDDx: [
      'Osteoarthritis',
      'Gout / pseudogout (crystal arthropathies)',
      'Rheumatoid arthritis',
      'Tendinitis / bursitis',
      'Trauma / mechanical injury',
      'Reactive arthritis',
    ],
    uncommonDDx: [
      'Psoriatic arthritis',
      'Systemic lupus erythematosus',
      'Gonococcal arthritis (disseminated)',
      'Lyme disease',
      'Sarcoidosis',
      'Hemochromatosis',
    ],
    keyQuestions: [
      'Monoarticular vs polyarticular? Symmetric vs asymmetric?',
      'Acute onset vs chronic/progressive?',
      'Morning stiffness >1 hour (inflammatory) vs <30 min (mechanical)?',
      'Associated fever, rash, urethritis, diarrhea, eye symptoms?',
      'History of gout, autoimmune disease, recent infection, tick exposure?',
    ],
    redFlags: [
      'Hot, swollen, erythematous joint with fever (septic arthritis — tap immediately)',
      'Acute monoarthritis in immunosuppressed patient',
      'Polyarthritis with systemic symptoms (vasculitis, endocarditis)',
      'Joint pain with new cardiac murmur (endocarditis)',
    ],
    initialWorkup: [
      'Joint aspiration (cell count, crystals, Gram stain, culture) — do NOT delay for imaging',
      'CBC, ESR/CRP, uric acid, BMP',
      'Blood cultures if septic arthritis suspected',
      'X-ray of affected joint(s)',
      'ANA, RF, anti-CCP if chronic polyarthritis suspected',
    ],
    clinicalPearl:
      'The golden rule of acute monoarthritis: it is septic arthritis until proven otherwise. Joint aspiration with synovial fluid analysis is the most important diagnostic test. WBC >50,000 with >75% PMNs suggests infection; crystal presence does NOT exclude concurrent infection.',
  },

  // =========================================================================
  // COUGH
  // =========================================================================
  'cough': {
    id: 'cough',
    chiefComplaint: 'Cough',
    category: 'pulmonary',
    emergencyDDx: [
      'Pulmonary embolism',
      'Pneumonia with respiratory failure',
      'Foreign body aspiration',
      'Acute heart failure (cough variant)',
    ],
    commonDDx: [
      'Upper airway cough syndrome (postnasal drip)',
      'Asthma (cough-variant)',
      'GERD',
      'ACE inhibitor-induced cough',
      'Acute bronchitis (viral)',
      'Pneumonia',
      'COPD exacerbation',
    ],
    uncommonDDx: [
      'Lung cancer',
      'Tuberculosis',
      'Interstitial lung disease',
      'Bronchiectasis',
      'Pertussis',
      'Sarcoidosis',
    ],
    keyQuestions: [
      'Acute (<3 weeks), subacute (3-8 weeks), or chronic (>8 weeks)?',
      'Productive or dry? Sputum color and quantity?',
      'Hemoptysis? Fever? Weight loss? Night sweats?',
      'ACE inhibitor use? GERD symptoms?',
      'Smoking history? Occupational exposures?',
    ],
    redFlags: [
      'Hemoptysis (lung cancer, TB, PE)',
      'Cough with weight loss and night sweats (TB, malignancy)',
      'New cough in heavy smoker >40 years old (lung cancer)',
      'Cough with progressive dyspnea (ILD, heart failure)',
      'Paroxysmal cough with inspiratory whoop (pertussis)',
    ],
    initialWorkup: [
      'CXR (first-line for any persistent cough)',
      'Spirometry if asthma or COPD suspected',
      'Trial of PPI if GERD suspected; nasal steroids if postnasal drip',
      'Sputum studies (culture, AFB) if TB suspected',
      'CT chest if CXR abnormal or high-risk patient',
    ],
    clinicalPearl:
      'The three most common causes of chronic cough in a non-smoker with a normal CXR are upper airway cough syndrome, asthma, and GERD — these account for ~90% of cases. ACE inhibitor cough can appear weeks to months after starting the medication.',
  },

  // =========================================================================
  // HEMOPTYSIS
  // =========================================================================
  'hemoptysis': {
    id: 'hemoptysis',
    chiefComplaint: 'Hemoptysis',
    category: 'pulmonary',
    emergencyDDx: [
      'Massive hemoptysis (>600 mL/24h or >100 mL/h) — any cause',
      'Pulmonary embolism with infarction',
      'Aorto-bronchial fistula',
      'Diffuse alveolar hemorrhage (DAH)',
    ],
    commonDDx: [
      'Acute bronchitis',
      'Pneumonia',
      'Lung cancer (primary or metastatic)',
      'Bronchiectasis',
      'Tuberculosis',
    ],
    uncommonDDx: [
      'Pulmonary vasculitis (GPA/Wegener, Goodpasture)',
      'Pulmonary AV malformation',
      'Mitral stenosis',
      'Coagulopathy / anticoagulant-related',
      'Aspergilloma (fungal ball)',
    ],
    keyQuestions: [
      'True hemoptysis (coughed up) vs hematemesis or epistaxis?',
      'Volume estimation — teaspoons, tablespoons, or cups?',
      'Associated cough, fever, weight loss, night sweats?',
      'Smoking history? Prior TB exposure? Travel?',
      'Anticoagulant use? Known bleeding disorder?',
    ],
    redFlags: [
      'Massive hemoptysis (>600 mL/24h) — airway emergency',
      'Hemoptysis with hypoxia and respiratory distress',
      'New hemoptysis in smoker >40 (lung cancer)',
      'Hemoptysis with hematuria (pulmonary-renal syndrome)',
      'Hemoptysis + weight loss + night sweats (TB, cancer)',
    ],
    initialWorkup: [
      'CXR, CBC, coagulation studies, BMP, type and screen',
      'CT chest (with contrast if PE or vascular cause suspected)',
      'Sputum for cytology, AFB, culture',
      'Bronchoscopy for localization if significant or recurrent',
      'UA (pulmonary-renal syndrome screen), ANCA, anti-GBM',
    ],
    clinicalPearl:
      'In massive hemoptysis, the immediate priority is airway protection, not diagnosis. Position the patient with the bleeding side down to protect the unaffected lung. Early involvement of interventional radiology (bronchial artery embolization) and thoracic surgery is essential.',
  },

  // =========================================================================
  // HEMATURIA
  // =========================================================================
  'hematuria': {
    id: 'hematuria',
    chiefComplaint: 'Hematuria',
    category: 'renal',
    emergencyDDx: [
      'Bladder or renal cancer',
      'Renal infarction',
      'Rapidly progressive glomerulonephritis',
      'Severe coagulopathy with urologic bleeding',
    ],
    commonDDx: [
      'Urinary tract infection / cystitis',
      'Nephrolithiasis',
      'BPH (benign prostatic hyperplasia)',
      'Menstrual contamination',
      'Urethritis',
      'Exercise-induced hematuria',
    ],
    uncommonDDx: [
      'IgA nephropathy',
      'Polycystic kidney disease',
      'Glomerulonephritis (post-infectious, lupus nephritis)',
      'Bladder/ureteral endometriosis',
      'Renal vein thrombosis',
      'Alport syndrome',
    ],
    keyQuestions: [
      'Gross or microscopic? Initial, terminal, or throughout stream?',
      'Painful (infection, stones) vs painless (cancer — more concerning)?',
      'Associated dysuria, frequency, urgency, flank pain?',
      'Age >40 with painless gross hematuria (malignancy workup mandatory)?',
      'Anticoagulant use? Recent UTI? Vigorous exercise?',
    ],
    redFlags: [
      'Painless gross hematuria in patient >40 (urologic malignancy)',
      'Hematuria with dysmorphic RBCs or RBC casts (glomerular disease)',
      'Hematuria with rapidly rising creatinine (RPGN)',
      'Hematuria with flank mass (renal cell carcinoma)',
      'Hematuria with hemoptysis (pulmonary-renal syndrome)',
    ],
    initialWorkup: [
      'UA with microscopy (dysmorphic RBCs, casts, protein)',
      'Urine culture, CBC, BMP/creatinine',
      'Renal/bladder ultrasound or CT urogram',
      'Urology referral for cystoscopy if >40 with gross hematuria',
      'Nephrology referral if glomerular origin suspected',
    ],
    clinicalPearl:
      'Painless gross hematuria in a patient >40 is urothelial cancer until proven otherwise — requires cystoscopy and upper tract imaging. Anticoagulation does NOT cause hematuria but may unmask an underlying lesion; the workup should not change.',
  },

  // =========================================================================
  // JAUNDICE
  // =========================================================================
  'jaundice': {
    id: 'jaundice',
    chiefComplaint: 'Jaundice',
    category: 'gastrointestinal',
    emergencyDDx: [
      'Ascending cholangitis (Charcot triad: fever, jaundice, RUQ pain)',
      'Acute liver failure (fulminant hepatitis)',
      'Pancreatic head mass with biliary obstruction',
      'Hemolytic crisis (sickle cell, G6PD, TTP)',
    ],
    commonDDx: [
      'Choledocholithiasis (common bile duct stone)',
      'Viral hepatitis (A, B, C)',
      'Alcoholic hepatitis',
      'Drug-induced liver injury (acetaminophen, antibiotics, statins)',
      'Cirrhosis with decompensation',
      'Gilbert syndrome (benign, unconjugated)',
    ],
    uncommonDDx: [
      'Primary biliary cholangitis',
      'Primary sclerosing cholangitis',
      'Autoimmune hepatitis',
      'Cholangiocarcinoma',
      'Hemolytic anemia (autoimmune, microangiopathic)',
      'Wilson disease',
    ],
    keyQuestions: [
      'Painless vs painful jaundice? Fever?',
      'Dark urine (conjugated) vs normal urine (unconjugated)?',
      'Pale/clay-colored stools (obstructive)?',
      'Alcohol history? Medications (including OTC, supplements)?',
      'History of gallstones, liver disease, blood disorders?',
    ],
    redFlags: [
      'Fever + jaundice + RUQ pain (Charcot triad — ascending cholangitis)',
      'Add AMS + hypotension = Reynold pentad (suppurative cholangitis)',
      'Painless jaundice with weight loss (pancreatic head cancer)',
      'Jaundice with coagulopathy and encephalopathy (acute liver failure)',
      'Rapidly progressive jaundice with hemolysis labs (hemolytic crisis)',
    ],
    initialWorkup: [
      'LFTs (total/direct bilirubin, AST, ALT, ALP, GGT), CBC, INR, albumin',
      'Hepatitis serologies (A IgM, B sAg/sAb/cAb, C Ab)',
      'RUQ ultrasound (biliary dilation, gallstones, liver echotexture)',
      'Reticulocyte count, haptoglobin, LDH, peripheral smear if hemolysis suspected',
      'MRCP or ERCP if obstructive pattern confirmed',
    ],
    clinicalPearl:
      'Fractionating the bilirubin is the first critical step: unconjugated (indirect) hyperbilirubinemia suggests hemolysis or Gilbert syndrome; conjugated (direct) suggests hepatocellular or obstructive causes. The ALT/AST ratio and ALP pattern further distinguish hepatocellular from cholestatic injury.',
  },

  // =========================================================================
  // EDEMA
  // =========================================================================
  'edema': {
    id: 'edema',
    chiefComplaint: 'Edema',
    category: 'cardiovascular',
    emergencyDDx: [
      'Deep vein thrombosis (unilateral)',
      'Acute decompensated heart failure',
      'Anaphylaxis / angioedema (facial/airway)',
      'Compartment syndrome',
      'Necrotizing fasciitis (edema with systemic toxicity)',
    ],
    commonDDx: [
      'Chronic venous insufficiency',
      'Heart failure (bilateral)',
      'Nephrotic syndrome',
      'Cirrhosis with portal hypertension',
      'Medication-related (CCBs, NSAIDs, steroids, thiazolidinediones)',
      'Dependent edema (immobility, obesity)',
      'Lymphedema',
    ],
    uncommonDDx: [
      'Hypothyroidism (myxedema)',
      'Protein-losing enteropathy',
      'Chronic kidney disease',
      'Malnutrition (kwashiorkor)',
      'Superior vena cava syndrome (upper body)',
      'May-Thurner syndrome',
    ],
    keyQuestions: [
      'Unilateral (DVT, lymphedema, venous insufficiency) vs bilateral (systemic)?',
      'Acute onset vs chronic/progressive?',
      'Pitting vs non-pitting (non-pitting: lymphedema, myxedema)?',
      'Associated dyspnea, orthopnea (CHF)? Proteinuria (nephrotic)?',
      'Medications? Liver or kidney disease history?',
    ],
    redFlags: [
      'Acute unilateral leg swelling with calf pain (DVT)',
      'Bilateral edema with dyspnea and JVD (decompensated CHF)',
      'Facial/periorbital edema with frothy urine (nephrotic syndrome)',
      'Lip/tongue swelling with stridor (angioedema — airway emergency)',
      'Tense edema with severe pain and paresthesias (compartment syndrome)',
    ],
    initialWorkup: [
      'CBC, BMP (creatinine, albumin), LFTs, BNP, TSH',
      'UA (proteinuria screen), urine protein-to-creatinine ratio',
      'Duplex ultrasound if unilateral (DVT evaluation)',
      'CXR, echocardiogram if CHF suspected',
      'D-dimer if low-moderate pretest probability for DVT',
    ],
    clinicalPearl:
      'Albumin <2.5 g/dL from any cause (nephrotic syndrome, cirrhosis, malnutrition) lowers oncotic pressure and causes edema. Checking serum albumin is the single most useful test for distinguishing systemic causes of bilateral edema.',
  },

  // =========================================================================
  // ALTERED MENTAL STATUS
  // =========================================================================
  'altered-mental-status': {
    id: 'altered-mental-status',
    chiefComplaint: 'Altered mental status',
    category: 'neurological',
    emergencyDDx: [
      'Stroke (ischemic or hemorrhagic)',
      'Hypoglycemia',
      'Meningitis / encephalitis',
      'Status epilepticus (nonconvulsive)',
      'Intoxication or overdose',
      'Intracranial hemorrhage',
      'Sepsis / septic encephalopathy',
    ],
    commonDDx: [
      'Delirium (infection, metabolic, medication)',
      'UTI in elderly',
      'Medication side effects (opioids, benzodiazepines, anticholinergics)',
      'Hepatic encephalopathy',
      'Uremia',
      'Electrolyte abnormalities (Na+, Ca2+, glucose)',
      'Alcohol withdrawal',
    ],
    uncommonDDx: [
      'Nonconvulsive status epilepticus',
      'Wernicke encephalopathy (thiamine deficiency)',
      'Autoimmune encephalitis (anti-NMDA receptor)',
      'Thyroid storm / myxedema coma',
      'CNS lymphoma / carcinomatous meningitis',
      'Normal pressure hydrocephalus',
    ],
    keyQuestions: [
      'Baseline mental status? Acute change or progressive decline?',
      'Medications (new, changed, or missed doses)? Drug/alcohol use?',
      'Fever? Headache? Focal neurologic symptoms?',
      'Recent falls, head trauma?',
      'Liver disease, kidney disease, diabetes (glucose management)?',
    ],
    redFlags: [
      'Fever + AMS (meningitis, encephalitis, sepsis)',
      'Focal neurologic deficits + AMS (stroke)',
      'AMS + pupil asymmetry (herniation)',
      'Rapidly deteriorating consciousness (emergent imaging needed)',
      'AMS following head trauma (intracranial hemorrhage)',
    ],
    initialWorkup: [
      'Finger-stick glucose (immediate — do not wait for lab glucose)',
      'CBC, BMP (Na, Ca, glucose, BUN/Cr), LFTs, ammonia, TSH',
      'UA, urine drug screen, blood alcohol level',
      'CT head without contrast (if focal findings or trauma)',
      'LP if meningitis/encephalitis suspected (after CT)',
      'EEG if nonconvulsive status epilepticus suspected',
    ],
    clinicalPearl:
      'The mnemonic AEIOU-TIPS covers emergent causes: Alcohol, Endocrine/Electrolytes, Insulin (glucose), Opiates/Overdose, Uremia, Trauma, Infection, Psychiatric/Poisoning, Stroke/Seizure. Always check a fingerstick glucose immediately — hypoglycemia is the most rapidly reversible cause.',
  },

  // =========================================================================
  // SEIZURE
  // =========================================================================
  'seizure': {
    id: 'seizure',
    chiefComplaint: 'Seizure',
    category: 'neurological',
    emergencyDDx: [
      'Status epilepticus',
      'Intracranial hemorrhage / mass',
      'Meningitis / encephalitis',
      'Eclampsia',
      'Hyponatremia (severe, <120 mEq/L)',
      'Hypoglycemia',
    ],
    commonDDx: [
      'Known epilepsy (breakthrough, medication non-compliance)',
      'Alcohol withdrawal',
      'Drug-induced (tramadol, bupropion, fluoroquinolones)',
      'Febrile seizure (pediatric)',
      'Post-traumatic seizure',
      'Syncope (convulsive, misidentified as seizure)',
    ],
    uncommonDDx: [
      'Autoimmune encephalitis',
      'CNS tumor (primary or metastatic)',
      'Neurocysticercosis',
      'Posterior reversible encephalopathy syndrome (PRES)',
      'Psychogenic non-epileptic events (PNEE)',
    ],
    keyQuestions: [
      'Witnessed description: tonic-clonic, focal onset, duration?',
      'Preceding aura? Post-ictal confusion and duration?',
      'History of epilepsy? Antiseizure medication compliance?',
      'Alcohol use or recent cessation? Drug use?',
      'Pregnancy status? Recent head trauma? Fever?',
    ],
    redFlags: [
      'Seizure lasting >5 minutes (status epilepticus)',
      'No return to baseline between seizures (status epilepticus)',
      'First seizure in adult (requires full workup for structural/metabolic cause)',
      'Focal onset seizure (structural lesion until proven otherwise)',
      'Seizure in pregnancy (eclampsia until proven otherwise)',
    ],
    initialWorkup: [
      'Fingerstick glucose, BMP (Na, Ca, Mg, glucose), CBC',
      'Urine drug screen, blood alcohol, antiseizure drug levels',
      'CT head without contrast (emergent for first seizure or focal)',
      'MRI brain with epilepsy protocol (outpatient, after stabilization)',
      'EEG (routine or continuous if status suspected)',
      'LP if infection suspected',
    ],
    clinicalPearl:
      'Convulsive syncope (myoclonic jerks during syncope) is commonly misdiagnosed as seizure. Key differentiators: syncope has a clear trigger, brief duration (<15 seconds of jerking), rapid return to baseline, and no post-ictal confusion. Tongue biting (lateral) and prolonged post-ictal confusion favor true seizure.',
  },

  // =========================================================================
  // VISION CHANGES
  // =========================================================================
  'vision-changes': {
    id: 'vision-changes',
    chiefComplaint: 'Vision changes',
    category: 'neurological',
    emergencyDDx: [
      'Central retinal artery occlusion (CRAO) — "stroke of the eye"',
      'Acute angle-closure glaucoma',
      'Retinal detachment',
      'Temporal arteritis with visual loss',
      'Optic neuritis (demyelinating)',
      'Stroke (posterior circulation)',
    ],
    commonDDx: [
      'Refractive error (myopia, hyperopia, presbyopia)',
      'Cataracts',
      'Migraine with visual aura',
      'Dry eye syndrome',
      'Open-angle glaucoma (chronic)',
      'Diabetic retinopathy',
    ],
    uncommonDDx: [
      'Papilledema (raised ICP)',
      'Optic neuritis (MS)',
      'Pituitary adenoma (bitemporal hemianopsia)',
      'Methanol poisoning',
      'Central serous retinopathy',
    ],
    keyQuestions: [
      'Monocular vs binocular? Sudden vs gradual?',
      'Painless (CRAO, retinal detachment) vs painful (glaucoma, optic neuritis)?',
      'Flashing lights or floaters (retinal detachment)?',
      'Curtain or shadow over vision (CRAO, retinal detachment)?',
      'Scalp tenderness, jaw claudication, age >50 (temporal arteritis)?',
    ],
    redFlags: [
      'Sudden painless monocular vision loss (CRAO — minutes to intervene)',
      'Eye pain with halos around lights, mid-dilated pupil (acute angle-closure)',
      'New flashing lights + shower of floaters + curtain/shadow (retinal detachment)',
      'Temporal headache + jaw claudication + vision loss in >50 (GCA emergency)',
      'Bilateral visual field cuts (stroke)',
    ],
    initialWorkup: [
      'Visual acuity, pupillary exam (APD), confrontation visual fields',
      'Fundoscopy (optic disc edema, retinal findings)',
      'Intraocular pressure (if acute glaucoma suspected)',
      'ESR/CRP urgently if temporal arteritis suspected (start steroids before biopsy)',
      'MRI brain/orbits if optic neuritis or CNS lesion suspected',
    ],
    clinicalPearl:
      'CRAO is the ocular equivalent of a stroke — "time is retina." Irreversible damage occurs within 90-120 minutes. If suspected, emergent ophthalmology consultation is needed. Temporal arteritis requires immediate high-dose steroids even before biopsy — the other eye is at imminent risk.',
  },

  // =========================================================================
  // DYSPHAGIA
  // =========================================================================
  'dysphagia': {
    id: 'dysphagia',
    chiefComplaint: 'Dysphagia',
    category: 'gastrointestinal',
    emergencyDDx: [
      'Esophageal food impaction (complete obstruction)',
      'Epiglottitis / retropharyngeal abscess',
      'Esophageal perforation',
      'Anaphylaxis (pharyngeal edema)',
    ],
    commonDDx: [
      'GERD with peptic stricture',
      'Eosinophilic esophagitis',
      'Esophageal cancer',
      'Schatzki ring',
      'Esophageal motility disorder (achalasia, diffuse esophageal spasm)',
      'Oropharyngeal dysphagia (stroke, Parkinson, myasthenia)',
    ],
    uncommonDDx: [
      'Esophageal web (Plummer-Vinson syndrome)',
      'Zenker diverticulum',
      'Extrinsic compression (mediastinal mass, aortic aneurysm)',
      'Scleroderma esophagus',
      'Chagas disease',
    ],
    keyQuestions: [
      'Solids only (mechanical obstruction) vs solids AND liquids (motility disorder)?',
      'Oropharyngeal (difficulty initiating swallow, coughing, nasal regurgitation) vs esophageal (food sticking)?',
      'Progressive (stricture, cancer) vs intermittent (ring, spasm)?',
      'Associated weight loss, odynophagia, heartburn?',
      'History of GERD, radiation, autoimmune disease, allergies?',
    ],
    redFlags: [
      'Progressive solid food dysphagia with weight loss (esophageal cancer)',
      'Complete inability to swallow saliva (complete obstruction — emergency)',
      'Dysphagia + hoarseness (recurrent laryngeal nerve involvement — malignancy)',
      'Odynophagia in immunocompromised (infectious esophagitis)',
      'Oropharyngeal dysphagia with neurologic symptoms (stroke, ALS)',
    ],
    initialWorkup: [
      'Barium swallow or esophagram (initial structural assessment)',
      'EGD (esophagogastroduodenoscopy) — both diagnostic and therapeutic',
      'Esophageal manometry if motility disorder suspected',
      'Video fluoroscopic swallow study if oropharyngeal dysphagia',
      'CT neck/chest if extrinsic compression or malignancy suspected',
    ],
    clinicalPearl:
      'Dysphagia to solids only that is progressive suggests mechanical obstruction (stricture, cancer). Dysphagia to both solids and liquids from the onset suggests a motility disorder (achalasia). Young patients with solid food dysphagia and food impaction — think eosinophilic esophagitis.',
  },

  // =========================================================================
  // NAUSEA / VOMITING
  // =========================================================================
  'nausea-vomiting': {
    id: 'nausea-vomiting',
    chiefComplaint: 'Nausea/vomiting',
    category: 'gastrointestinal',
    emergencyDDx: [
      'Bowel obstruction (SBO, LBO)',
      'Diabetic ketoacidosis',
      'Acute myocardial infarction (atypical presentation)',
      'Increased intracranial pressure (brain tumor, hemorrhage)',
      'Toxic ingestion / poisoning',
      'Adrenal crisis',
    ],
    commonDDx: [
      'Gastroenteritis (viral or bacterial)',
      'Gastroparesis',
      'Medication side effects (opioids, chemotherapy, antibiotics)',
      'Pregnancy (hyperemesis gravidarum)',
      'GERD / peptic ulcer disease',
      'Pancreatitis',
      'Cholecystitis',
    ],
    uncommonDDx: [
      'Cyclic vomiting syndrome',
      'Superior mesenteric artery syndrome',
      'Cannabinoid hyperemesis syndrome',
      'Addison disease',
      'Bulimia nervosa',
    ],
    keyQuestions: [
      'Duration? Relation to meals? Bilious vs non-bilious vs feculent?',
      'Associated abdominal pain, distension, constipation (obstruction)?',
      'Diabetic? Last glucose check? Polyuria/polydipsia?',
      'Pregnancy possible? LMP?',
      'Relief with hot showers (cannabinoid hyperemesis)?',
    ],
    redFlags: [
      'Bilious or feculent vomiting (bowel obstruction)',
      'Projectile vomiting with headache (increased ICP)',
      'Vomiting + chest pain/diaphoresis (atypical MI)',
      'Intractable vomiting with metabolic derangement (DKA)',
      'Bloody emesis (hematemesis — upper GI bleed)',
    ],
    initialWorkup: [
      'BMP (electrolytes, glucose, BUN/Cr), CBC, lipase, LFTs',
      'Urine pregnancy test, UA',
      'Abdominal X-ray (obstruction series) if bowel obstruction suspected',
      'CT abdomen/pelvis if no clear cause identified',
      'ECG if cardiac cause suspected (inferior MI can present with vomiting)',
    ],
    clinicalPearl:
      'Cannabinoid hyperemesis syndrome presents with cyclical vomiting, improvement with hot showers, and a history of chronic cannabis use. It is increasingly common and frequently misdiagnosed. In patients with DKA, vomiting may be the presenting symptom — always check glucose.',
  },

  // =========================================================================
  // DIARRHEA
  // =========================================================================
  'diarrhea': {
    id: 'diarrhea',
    chiefComplaint: 'Diarrhea',
    category: 'gastrointestinal',
    emergencyDDx: [
      'C. difficile colitis (fulminant/toxic megacolon)',
      'Ischemic colitis',
      'Hemolytic uremic syndrome (E. coli O157:H7)',
      'Severe dehydration with hemodynamic compromise',
    ],
    commonDDx: [
      'Viral gastroenteritis',
      'Bacterial gastroenteritis (Salmonella, Campylobacter, Shigella)',
      'Medication-related (antibiotics, metformin, colchicine)',
      'IBS (diarrhea-predominant)',
      'Lactose intolerance',
      'Food intolerance / food poisoning',
    ],
    uncommonDDx: [
      'Inflammatory bowel disease (Crohn, UC)',
      'Celiac disease',
      'Microscopic colitis',
      'Carcinoid syndrome',
      'VIPoma',
      'Hyperthyroidism',
      'Chronic pancreatitis (exocrine insufficiency)',
    ],
    keyQuestions: [
      'Acute (<2 weeks) vs chronic (>4 weeks)?',
      'Watery vs bloody vs fatty/greasy (steatorrhea)?',
      'Fever? Recent antibiotics (C. diff risk)? Travel? Sick contacts?',
      'Nocturnal diarrhea (suggests organic cause, not IBS)?',
      'Weight loss? Does fasting improve symptoms (osmotic vs secretory)?',
    ],
    redFlags: [
      'Bloody diarrhea with fever (invasive infection, IBD, ischemic colitis)',
      'Recent antibiotics + profuse watery diarrhea (C. difficile)',
      'Bloody diarrhea in child with renal failure (HUS)',
      'Severe dehydration (hypotension, tachycardia, oliguria)',
      'Chronic diarrhea with weight loss (malabsorption, IBD, malignancy)',
    ],
    initialWorkup: [
      'BMP (electrolytes, renal function), CBC',
      'Stool studies: C. diff toxin, stool culture, ova and parasites',
      'Fecal calprotectin or lactoferrin (inflammatory vs functional)',
      'Celiac panel (tTG IgA) if chronic',
      'Colonoscopy if chronic, bloody, or IBD suspected',
    ],
    clinicalPearl:
      'Nocturnal diarrhea essentially excludes IBS and indicates an organic cause requiring investigation. Fecal calprotectin is an excellent non-invasive marker to distinguish inflammatory diarrhea (IBD, infection) from functional causes (IBS) — negative calprotectin makes IBD very unlikely.',
  },

  // =========================================================================
  // CONSTIPATION
  // =========================================================================
  'constipation': {
    id: 'constipation',
    chiefComplaint: 'Constipation',
    category: 'gastrointestinal',
    emergencyDDx: [
      'Large bowel obstruction (volvulus, malignancy)',
      'Ogilvie syndrome (acute colonic pseudo-obstruction)',
      'Toxic megacolon',
      'Fecal impaction with overflow incontinence',
    ],
    commonDDx: [
      'Functional constipation (inadequate fiber/fluid/exercise)',
      'Medication-related (opioids, calcium channel blockers, anticholinergics, iron)',
      'IBS (constipation-predominant)',
      'Hypothyroidism',
      'Hemorrhoids / anal fissure (avoidance behavior)',
    ],
    uncommonDDx: [
      'Colorectal cancer (especially new-onset in >50)',
      'Hirschsprung disease (pediatric/rare adult)',
      'Pelvic floor dysfunction (dyssynergic defecation)',
      'Hypercalcemia',
      'Parkinson disease',
      'Scleroderma',
    ],
    keyQuestions: [
      'Duration? Acute change vs lifelong pattern?',
      'Straining, hard stools, sensation of incomplete evacuation?',
      'Medications (especially opioids, anticholinergics)?',
      'Red flag symptoms: blood in stool, weight loss, family history of CRC?',
      'Diet (fiber intake), fluid intake, activity level?',
    ],
    redFlags: [
      'New-onset constipation in patient >50 (colorectal cancer screening needed)',
      'Constipation with rectal bleeding and weight loss',
      'Acute constipation with abdominal distension and vomiting (obstruction)',
      'Obstipation (complete inability to pass stool or gas)',
      'Pencil-thin stools (rectosigmoid narrowing)',
    ],
    initialWorkup: [
      'Abdominal X-ray if obstruction suspected',
      'TSH, BMP (calcium), CBC',
      'Colonoscopy if >50 and not up to date, or alarm features',
      'Anorectal manometry and defecography if pelvic floor dysfunction suspected',
      'CT abdomen/pelvis if obstruction or mass suspected',
    ],
    clinicalPearl:
      'Always review the medication list — opioids, anticholinergics, and calcium channel blockers are the most common iatrogenic causes. New-onset constipation in a patient >50 with no clear cause warrants colonoscopy to exclude malignancy.',
  },

  // =========================================================================
  // RASH
  // =========================================================================
  'rash': {
    id: 'rash',
    chiefComplaint: 'Rash',
    category: 'general',
    emergencyDDx: [
      'Stevens-Johnson syndrome / toxic epidermal necrolysis',
      'Meningococcemia (petechial/purpuric rash with fever)',
      'Necrotizing fasciitis (rapidly spreading erythema)',
      'Anaphylaxis (urticaria with systemic symptoms)',
      'Toxic shock syndrome',
      'Rocky Mountain spotted fever',
    ],
    commonDDx: [
      'Contact dermatitis',
      'Drug eruption',
      'Eczema / atopic dermatitis',
      'Psoriasis',
      'Urticaria (hives)',
      'Viral exanthem',
      'Cellulitis',
      'Tinea (fungal)',
    ],
    uncommonDDx: [
      'Pemphigus vulgaris',
      'Dermatomyositis',
      'Vasculitis (leukocytoclastic)',
      'Secondary syphilis',
      'Mycosis fungoides (cutaneous T-cell lymphoma)',
      'Sweet syndrome',
    ],
    keyQuestions: [
      'Distribution and morphology (macular, papular, vesicular, bullous, petechial)?',
      'Pruritic vs painful vs asymptomatic?',
      'New medications in past 1-6 weeks?',
      'Fever, mucosal involvement, blistering (SJS/TEN)?',
      'Skin involvement of palms/soles (secondary syphilis, RMSF, hand-foot-mouth)?',
    ],
    redFlags: [
      'Mucous membrane involvement + skin blistering/sloughing (SJS/TEN)',
      'Petechial/purpuric rash with fever (meningococcemia, DIC, vasculitis)',
      'Rapidly spreading erythema with pain out of proportion to appearance (necrotizing fasciitis)',
      'Target lesions with mucosal involvement (erythema multiforme major/SJS)',
      'Nikolsky sign positive (gentle pressure causes skin sloughing)',
    ],
    initialWorkup: [
      'Detailed skin exam (morphology, distribution, mucosal surfaces)',
      'Skin biopsy if diagnosis unclear',
      'CBC with differential, BMP, LFTs (if systemic involvement)',
      'Blood cultures if infectious etiology suspected',
      'Discontinue suspected offending medications',
    ],
    clinicalPearl:
      'SJS/TEN is a dermatologic emergency usually triggered by medications (sulfonamides, anticonvulsants, allopurinol, NSAIDs). Mucosal involvement (oral, ocular, genital) + skin detachment = immediate drug discontinuation and burn center consultation. Mortality of TEN exceeds 30%.',
  },

  // =========================================================================
  // LYMPHADENOPATHY
  // =========================================================================
  'lymphadenopathy': {
    id: 'lymphadenopathy',
    chiefComplaint: 'Lymphadenopathy',
    category: 'hematologic',
    emergencyDDx: [
      'Lymphoma (Hodgkin or non-Hodgkin)',
      'Metastatic cancer',
      'Leukemia (acute)',
    ],
    commonDDx: [
      'Reactive lymphadenopathy (viral URI, pharyngitis)',
      'Bacterial lymphadenitis',
      'Infectious mononucleosis (EBV)',
      'Cat scratch disease',
      'HIV (acute seroconversion or persistent generalized)',
    ],
    uncommonDDx: [
      'Sarcoidosis',
      'Tuberculosis (scrofula)',
      'Autoimmune (SLE, RA)',
      'Kikuchi disease',
      'Castleman disease',
      'Drug reaction (phenytoin, allopurinol)',
    ],
    keyQuestions: [
      'Location? Localized vs generalized (>2 non-contiguous regions)?',
      'Duration? >4 weeks with no explanation warrants biopsy consideration',
      'Size (>2 cm is more concerning)? Firm/rubbery/matted (malignancy) vs soft/tender (infection)?',
      'Associated B-symptoms: fever, night sweats, weight loss >10%?',
      'Recent infection, travel, cat exposure, HIV risk factors?',
    ],
    redFlags: [
      'Supraclavicular lymphadenopathy (high likelihood of malignancy)',
      'Firm, non-tender, matted nodes >2 cm (lymphoma, metastatic)',
      'Generalized lymphadenopathy + B-symptoms (lymphoma, HIV, SLE)',
      'Progressive enlargement over weeks without infection',
      'Lymphadenopathy with hepatosplenomegaly (hematologic malignancy)',
    ],
    initialWorkup: [
      'CBC with differential, LDH, ESR/CRP, peripheral smear',
      'Monospot/EBV serologies, HIV, CMV if infectious cause suspected',
      'CT neck/chest/abdomen/pelvis for staging if malignancy suspected',
      'Excisional biopsy (preferred over FNA for lymphoma — architecture needed)',
      'PPD/IGRA if TB suspected',
    ],
    clinicalPearl:
      'Supraclavicular lymphadenopathy is malignant until proven otherwise — left supraclavicular (Virchow node) classically suggests abdominal malignancy. Excisional biopsy (not FNA) is preferred when lymphoma is suspected because architectural pattern is essential for diagnosis and classification.',
  },

  // =========================================================================
  // ANEMIA WORKUP
  // =========================================================================
  'anemia-workup': {
    id: 'anemia-workup',
    chiefComplaint: 'Anemia workup',
    category: 'hematologic',
    emergencyDDx: [
      'Acute GI hemorrhage',
      'Hemolytic crisis (TTP, HUS, autoimmune)',
      'DIC (disseminated intravascular coagulation)',
      'Ruptured ectopic pregnancy',
      'Aplastic crisis (parvovirus B19 in sickle cell)',
    ],
    commonDDx: [
      'Iron deficiency anemia (GI blood loss, menorrhagia, dietary)',
      'Anemia of chronic disease / inflammation',
      'B12 or folate deficiency',
      'Chronic kidney disease (EPO deficiency)',
      'Thalassemia trait',
    ],
    uncommonDDx: [
      'Myelodysplastic syndrome',
      'Autoimmune hemolytic anemia',
      'Sideroblastic anemia',
      'Pure red cell aplasia',
      'Lead poisoning',
      'Hemoglobinopathies (sickle cell, HbC)',
    ],
    keyQuestions: [
      'Acuity: acute (bleeding, hemolysis) vs chronic (deficiency, chronic disease)?',
      'Symptoms: fatigue, dyspnea, pallor, pica, ice craving (pagophagia)?',
      'Diet: vegan (B12), alcohol use (folate, liver disease)?',
      'GI symptoms: melena, hematochezia, heavy menses?',
      'Family history of anemia, thalassemia, sickle cell?',
    ],
    redFlags: [
      'Hgb <7 with symptoms (transfusion threshold in most patients)',
      'Anemia with schistocytes on smear (TTP/HUS — hematologic emergency)',
      'Pancytopenia (bone marrow failure, leukemia, aplastic anemia)',
      'New anemia with elevated LDH and low haptoglobin (hemolysis)',
      'Iron deficiency in male or postmenopausal female (GI malignancy workup needed)',
    ],
    initialWorkup: [
      'CBC with MCV classification: microcytic (<80), normocytic (80-100), macrocytic (>100)',
      'Reticulocyte count (production vs destruction/loss)',
      'Iron studies (ferritin, serum iron, TIBC, transferrin saturation)',
      'Peripheral blood smear',
      'B12, folate if macrocytic; hemolysis labs (LDH, haptoglobin, bilirubin, Coombs) if indicated',
    ],
    clinicalPearl:
      'MCV is the most important initial classifier: microcytic (think iron deficiency, thalassemia), normocytic (think chronic disease, CKD, early iron deficiency), macrocytic (think B12/folate deficiency, alcohol, MDS). Ferritin <15 is virtually diagnostic of iron deficiency; ferritin >100 essentially excludes it (except in concurrent inflammation).',
  },

  // =========================================================================
  // ELEVATED LIVER ENZYMES
  // =========================================================================
  'elevated-liver-enzymes': {
    id: 'elevated-liver-enzymes',
    chiefComplaint: 'Elevated liver enzymes',
    category: 'gastrointestinal',
    emergencyDDx: [
      'Acute liver failure (ALT >1000 + coagulopathy + encephalopathy)',
      'Ischemic hepatitis (shock liver)',
      'Acetaminophen toxicity',
      'Acute Budd-Chiari syndrome',
      'HELLP syndrome (in pregnancy)',
    ],
    commonDDx: [
      'Non-alcoholic fatty liver disease (NAFLD/NASH)',
      'Alcohol-related liver disease',
      'Drug-induced liver injury',
      'Viral hepatitis (A, B, C)',
      'Choledocholithiasis / biliary obstruction',
    ],
    uncommonDDx: [
      'Autoimmune hepatitis',
      'Wilson disease',
      'Hemochromatosis',
      'Alpha-1 antitrypsin deficiency',
      'Primary biliary cholangitis',
      'Celiac disease (hepatic involvement)',
    ],
    keyQuestions: [
      'Pattern: hepatocellular (AST/ALT predominant) vs cholestatic (ALP/GGT predominant)?',
      'Alcohol history (quantity, frequency, duration)?',
      'Medications, supplements, and herbal products?',
      'Risk factors for viral hepatitis (IV drug use, transfusions, travel, sexual history)?',
      'Metabolic syndrome components (obesity, diabetes, hyperlipidemia)?',
    ],
    redFlags: [
      'AST/ALT >1000 (acute hepatitis: viral, ischemic, toxin, autoimmune)',
      'Elevated INR + encephalopathy (acute liver failure — transfer to transplant center)',
      'AST:ALT ratio >2:1 with elevated GGT (alcoholic hepatitis)',
      'Elevated ALP >3x ULN with normal transaminases (biliary obstruction or infiltrative)',
      'Young patient with liver disease + neuropsychiatric symptoms (Wilson disease)',
    ],
    initialWorkup: [
      'Hepatocellular pattern: hepatitis serologies (A IgM, B panel, C Ab), iron studies, ceruloplasmin (if <40)',
      'Cholestatic pattern: RUQ ultrasound, AMA (PBC), MRCP if ductal dilation',
      'CBC, INR, albumin (synthetic function assessment)',
      'ANA, anti-smooth muscle Ab, IgG levels (autoimmune hepatitis)',
      'Ultrasound with elastography or FibroScan for fibrosis staging',
    ],
    clinicalPearl:
      'The AST/ALT ratio helps narrow the differential: ratio >2:1 is classic for alcoholic liver disease. ALT >ALT in most other hepatocellular diseases. An R-factor (ALT/ULN divided by ALP/ULN) >5 = hepatocellular, <2 = cholestatic, 2-5 = mixed pattern.',
  },

  // =========================================================================
  // ACUTE KIDNEY INJURY
  // =========================================================================
  'acute-kidney-injury': {
    id: 'acute-kidney-injury',
    chiefComplaint: 'Acute kidney injury',
    category: 'renal',
    emergencyDDx: [
      'Urinary tract obstruction (bilateral or solitary kidney)',
      'Rapidly progressive glomerulonephritis',
      'Thrombotic microangiopathy (TTP/HUS)',
      'Bilateral renal artery occlusion',
      'Rhabdomyolysis (massive)',
      'Tumor lysis syndrome',
    ],
    commonDDx: [
      'Prerenal: dehydration, heart failure, sepsis, hepatorenal syndrome',
      'Intrinsic: acute tubular necrosis (ischemic or nephrotoxic)',
      'NSAIDs, ACE-inhibitors/ARBs, contrast nephropathy',
      'Post-renal: BPH, nephrolithiasis, malignant obstruction',
    ],
    uncommonDDx: [
      'Acute interstitial nephritis (drug-induced)',
      'Atheroembolic disease (cholesterol emboli post-catheterization)',
      'Cortical necrosis',
      'Cast nephropathy (multiple myeloma)',
      'Oxalate nephropathy (ethylene glycol)',
    ],
    keyQuestions: [
      'Baseline creatinine? Timeline of rise?',
      'Volume status: dehydration, hemorrhage, poor intake, diuretic use?',
      'Nephrotoxin exposure: NSAIDs, contrast, aminoglycosides, ACE/ARBs?',
      'Urinary symptoms: decreased output, hematuria, foamy urine?',
      'Systemic symptoms: rash (AIN), muscle pain (rhabdomyolysis), joint pain (lupus nephritis)?',
    ],
    redFlags: [
      'Anuria (<100 mL/24h) — obstruction or vascular catastrophe',
      'Hyperkalemia >6.0 with ECG changes (dialysis indication)',
      'Severe metabolic acidosis pH <7.1 (dialysis indication)',
      'Volume overload with pulmonary edema refractory to diuretics (dialysis indication)',
      'AKI with active urine sediment (RBC casts = glomerulonephritis)',
    ],
    initialWorkup: [
      'BMP (Cr trend, K+, bicarb), CBC, UA with microscopy (casts, eosinophils)',
      'FENa (<1% prerenal, >2% ATN) or FEUrea if on diuretics',
      'Renal ultrasound (hydronephrosis, kidney size, chronicity)',
      'CK if rhabdomyolysis suspected; uric acid if TLS suspected',
      'Serologies (ANA, ANCA, anti-GBM, complement) if glomerulonephritis suspected',
    ],
    clinicalPearl:
      'The urine microscopy is the "renal biopsy of the bedside." Muddy brown casts = ATN, RBC casts = glomerulonephritis, WBC casts = interstitial nephritis or pyelonephritis, bland sediment = prerenal or post-renal. Always check a renal ultrasound to exclude obstruction — it is reversible.',
  },

  // =========================================================================
  // THYROID NODULE
  // =========================================================================
  'thyroid-nodule': {
    id: 'thyroid-nodule',
    chiefComplaint: 'Thyroid nodule',
    category: 'endocrine',
    emergencyDDx: [
      'Anaplastic thyroid carcinoma (rapidly enlarging, compressive)',
      'Thyroid lymphoma (rapidly enlarging in Hashimoto background)',
    ],
    commonDDx: [
      'Benign colloid nodule',
      'Thyroid cyst',
      'Follicular adenoma',
      'Hashimoto thyroiditis (pseudonodule)',
      'Multinodular goiter',
    ],
    uncommonDDx: [
      'Papillary thyroid carcinoma (most common thyroid cancer)',
      'Follicular thyroid carcinoma',
      'Medullary thyroid carcinoma (associated with MEN2)',
      'Metastatic cancer to thyroid',
      'Parathyroid adenoma (mistaken for thyroid nodule)',
    ],
    keyQuestions: [
      'How discovered: palpation, incidental imaging, symptoms?',
      'Growth rate? Rapid growth is concerning',
      'Compressive symptoms: dysphagia, hoarseness, dyspnea?',
      'Family history of thyroid cancer, MEN syndrome, familial polyposis?',
      'History of head/neck radiation exposure (especially childhood)?',
    ],
    redFlags: [
      'Rapidly growing firm/hard nodule (anaplastic carcinoma)',
      'Vocal cord paralysis / hoarseness (recurrent laryngeal nerve invasion)',
      'Fixed, non-mobile nodule (invasion of surrounding structures)',
      'Associated cervical lymphadenopathy',
      'Family history of MEN2 or medullary thyroid cancer',
      'History of childhood radiation to head/neck',
    ],
    initialWorkup: [
      'TSH (if low, radionuclide scan — hot nodules rarely malignant)',
      'Thyroid ultrasound with TI-RADS classification',
      'FNA biopsy based on size and ultrasound features (TI-RADS guidelines)',
      'Calcitonin if medullary thyroid cancer suspected (family history of MEN2)',
      'Molecular testing (Afirma, ThyroSeq) for indeterminate cytology',
    ],
    clinicalPearl:
      'Most thyroid nodules are benign (>90%). The key to management is risk stratification with ultrasound (TI-RADS) and FNA when indicated. A "hot" (hyperfunctioning) nodule on radionuclide scan is almost never malignant and does not require FNA. Cold nodules with suspicious US features require biopsy.',
  },
};

// ---------------------------------------------------------------------------
// Utility Functions
// ---------------------------------------------------------------------------

/** Get all chief complaint category values. */
export const ALL_CHIEF_COMPLAINT_CATEGORIES: readonly ChiefComplaintCategory[] = [
  'cardiovascular',
  'pulmonary',
  'gastrointestinal',
  'neurological',
  'musculoskeletal',
  'hematologic',
  'endocrine',
  'infectious',
  'renal',
  'general',
] as const;

/** Retrieve a single entry by id, or undefined if not found. */
export function getDifferentialById(
  id: string,
): DifferentialDiagnosisEntry | undefined {
  return DIFFERENTIAL_DIAGNOSIS_ENTRIES[id];
}

/** Filter entries by chief complaint category. */
export function filterDifferentialsByCategory(
  category: ChiefComplaintCategory,
): DifferentialDiagnosisEntry[] {
  return Object.values(DIFFERENTIAL_DIAGNOSIS_ENTRIES).filter(
    (e) => e.category === category,
  );
}

/** Search entries by matching query against chief complaint, DDx lists, key questions, and clinical pearl. */
export function searchDifferentialDiagnoses(
  query: string,
): DifferentialDiagnosisEntry[] {
  const q = query.toLowerCase();
  return Object.values(DIFFERENTIAL_DIAGNOSIS_ENTRIES).filter(
    (e) =>
      e.chiefComplaint.toLowerCase().includes(q) ||
      e.emergencyDDx.some((d) => d.toLowerCase().includes(q)) ||
      e.commonDDx.some((d) => d.toLowerCase().includes(q)) ||
      e.uncommonDDx.some((d) => d.toLowerCase().includes(q)) ||
      e.clinicalPearl.toLowerCase().includes(q),
  );
}

/** Get all entries as an array. */
export function getAllDifferentialEntries(): DifferentialDiagnosisEntry[] {
  return Object.values(DIFFERENTIAL_DIAGNOSIS_ENTRIES);
}

/** Get all chief complaints as a list of strings. */
export function getAllChiefComplaints(): string[] {
  return Object.values(DIFFERENTIAL_DIAGNOSIS_ENTRIES).map(
    (e) => e.chiefComplaint,
  );
}

/** Find entries whose red flags match the query. */
export function searchByRedFlag(
  query: string,
): DifferentialDiagnosisEntry[] {
  const q = query.toLowerCase();
  return Object.values(DIFFERENTIAL_DIAGNOSIS_ENTRIES).filter((e) =>
    e.redFlags.some((f) => f.toLowerCase().includes(q)),
  );
}

/** Find all entries that mention a specific diagnosis across any DDx list. */
export function findEntriesByDiagnosis(
  diagnosis: string,
): DifferentialDiagnosisEntry[] {
  const q = diagnosis.toLowerCase();
  return Object.values(DIFFERENTIAL_DIAGNOSIS_ENTRIES).filter(
    (e) =>
      e.emergencyDDx.some((d) => d.toLowerCase().includes(q)) ||
      e.commonDDx.some((d) => d.toLowerCase().includes(q)) ||
      e.uncommonDDx.some((d) => d.toLowerCase().includes(q)),
  );
}
