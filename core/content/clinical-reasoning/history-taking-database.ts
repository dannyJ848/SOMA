/**
 * History-Taking Database
 *
 * Comprehensive reference database of history-taking frameworks, system-specific
 * histories, population-specific approaches, screening tools, and clinical
 * assessment instruments for medical education.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type HistoryCategory =
  | 'framework'
  | 'system-specific'
  | 'population-specific'
  | 'screening-tool'
  | 'assessment-tool';

export interface HistoryTakingEntry {
  id: string;
  name: string;
  category: HistoryCategory;
  description: string;
  keyQuestions: string[];
  mnemonics?: string;
  redFlags?: string[];
  clinicalPearl: string;
  documentationTips: string;
}

// ---------------------------------------------------------------------------
// Database Entries
// ---------------------------------------------------------------------------

export const HISTORY_TAKING_ENTRIES: Record<string, HistoryTakingEntry> = {
  // =======================================================================
  // FRAMEWORKS
  // =======================================================================
  'hpi-oldcarts': {
    id: 'hpi-oldcarts',
    name: 'HPI Framework — OLDCARTS',
    category: 'framework',
    description: 'Structured mnemonic for characterizing any chief complaint through Onset, Location, Duration, Character, Aggravating factors, Relieving factors, Timing, and Severity.',
    keyQuestions: [
      'Onset: When did this start? What were you doing?',
      'Location: Where exactly is it? Does it radiate?',
      'Duration: How long does each episode last? Is it constant or intermittent?',
      'Character: What does it feel like (sharp, dull, burning, pressure)?',
      'Aggravating factors: What makes it worse?',
      'Relieving factors: What makes it better? Have you tried anything?',
      'Timing: Does it occur at specific times? How often?',
      'Severity: On a 0-10 scale, how severe is it now and at its worst?',
    ],
    mnemonics: 'OLDCARTS — Onset, Location, Duration, Character, Aggravating, Relieving, Timing, Severity',
    redFlags: [
      'Sudden onset worst-ever symptom (e.g., thunderclap headache)',
      'Rapidly progressive severity',
      'Associated syncope, hemodynamic instability, or neurological deficit',
    ],
    clinicalPearl: 'Always ask about the very first episode and the most recent episode separately; chronic conditions evolve and the original character may differ significantly from the current presentation.',
    documentationTips: 'Document each OLDCARTS element explicitly. Use direct patient quotes for character description. Note negatives that narrow the differential (e.g., "no radiation, no diaphoresis").',
  },

  'hpi-opqrst': {
    id: 'hpi-opqrst',
    name: 'HPI Framework — OPQRST',
    category: 'framework',
    description: 'EMS and emergency medicine mnemonic for rapid symptom characterization: Onset, Provocation/Palliation, Quality, Region/Radiation, Severity, Time.',
    keyQuestions: [
      'Onset: What were you doing when it started? Was it sudden or gradual?',
      'Provocation/Palliation: What provokes it? What alleviates it?',
      'Quality: Describe the sensation in your own words.',
      'Region/Radiation: Point to where it is. Does it spread anywhere?',
      'Severity: Rate 0-10. Is this the worst you have ever experienced?',
      'Time: When exactly did it begin? Has it changed since onset?',
    ],
    mnemonics: 'OPQRST — Onset, Provocation/Palliation, Quality, Region/Radiation, Severity, Time',
    redFlags: [
      '10/10 severity with acute onset',
      'Pain unresponsive to any palliative measure',
      'Radiation pattern suggesting vascular emergency (tearing to back, jaw/left arm)',
    ],
    clinicalPearl: 'OPQRST overlaps with OLDCARTS but is preferred in acute and prehospital settings for its emphasis on provocation/palliation — critical for early triage decisions.',
    documentationTips: 'In ED documentation, lead with time of onset and acuity. Quantify severity consistently with a validated scale so serial assessments are comparable.',
  },

  'past-medical-history': {
    id: 'past-medical-history',
    name: 'Past Medical History',
    category: 'framework',
    description: 'Systematic inventory of all chronic diagnoses, prior hospitalizations, and ongoing conditions that may influence the current presentation and management.',
    keyQuestions: [
      'What medical conditions have you been diagnosed with?',
      'Have you ever been hospitalized? Why and when?',
      'Do you see any specialists? For what?',
      'Have you been told you have diabetes, hypertension, heart disease, lung disease, cancer, or autoimmune conditions?',
      'Any history of blood clots, strokes, or bleeding disorders?',
      'What immunizations are you up to date on?',
    ],
    mnemonics: 'Think organ-systems head-to-toe: neuro, cardiac, pulmonary, GI, renal, endocrine, heme/onc, rheum, psych',
    redFlags: [
      'Undisclosed immunosuppression changing the infection differential',
      'Undiagnosed malignancy presenting with paraneoplastic syndrome',
      'Multiple ER visits suggesting uncontrolled chronic disease or missed diagnosis',
    ],
    clinicalPearl: 'Patients often omit conditions they consider "resolved" (e.g., childhood asthma, prior DVT). Always ask specifically about conditions with lifelong recurrence risk.',
    documentationTips: 'List each condition with year of diagnosis and current status (active/inactive/resolved). Note disease-specific metrics (e.g., last HbA1c, EF, FEV1).',
  },

  'surgical-history': {
    id: 'surgical-history',
    name: 'Surgical History',
    category: 'framework',
    description: 'Complete accounting of prior surgical and procedural interventions, complications, and anesthetic history relevant to current care.',
    keyQuestions: [
      'Have you ever had surgery? What type and when?',
      'Were there any complications (infection, bleeding, reactions)?',
      'Have you ever had anesthesia? Any problems with it?',
      'Any history of difficult intubation?',
      'Do you have any implants, hardware, or prosthetics?',
      'Have you ever had a blood transfusion? Any reaction?',
    ],
    redFlags: [
      'History of malignant hyperthermia or pseudocholinesterase deficiency',
      'Prior difficult airway or failed intubation',
      'Unexplained intraoperative complications',
    ],
    clinicalPearl: 'Abdominal surgical history is critical when evaluating acute abdominal pain — adhesive small bowel obstruction is the most common cause of SBO and requires knowledge of prior procedures.',
    documentationTips: 'Record procedure name, approximate date, surgeon/institution if known, and any complications. For abdominal surgeries, note the approach (open vs laparoscopic).',
  },

  'medications-allergies': {
    id: 'medications-allergies',
    name: 'Medications and Allergies',
    category: 'framework',
    description: 'Detailed medication reconciliation and allergy history including true allergies, intolerances, adverse reactions, and current supplement use.',
    keyQuestions: [
      'What prescription medications do you take? Doses and frequency?',
      'Any over-the-counter medications, vitamins, or supplements?',
      'Any herbal remedies or traditional medicines?',
      'Are you allergic to any medications? What happened when you took them?',
      'Any allergies to foods, latex, or environmental triggers?',
      'Have you recently started, stopped, or changed any medications?',
      'Do you take your medications as prescribed? Any doses missed recently?',
    ],
    mnemonics: 'Distinguish true allergy (anaphylaxis, urticaria, angioedema) from intolerance (nausea, headache) from side effect (expected pharmacologic effect)',
    redFlags: [
      'Reported penicillin allergy requiring cross-reactivity consideration',
      'Polypharmacy (≥5 medications) increasing drug-interaction risk',
      'Abrupt discontinuation of corticosteroids, beta-blockers, or anticonvulsants',
    ],
    clinicalPearl: 'Approximately 90% of patients labeled penicillin-allergic are not truly allergic on testing. Clarify the reaction: rash vs anaphylaxis determines whether cephalosporins and carbapenems can be safely used.',
    documentationTips: 'Record each allergy with the specific reaction (e.g., "Amoxicillin — diffuse urticaria and lip swelling" not just "Amoxicillin — allergy"). Categorize as allergy, intolerance, or adverse reaction.',
  },

  'family-history': {
    id: 'family-history',
    name: 'Family History',
    category: 'framework',
    description: 'Systematic collection of heritable and familial disease patterns in first- and second-degree relatives to assess genetic risk and inform screening.',
    keyQuestions: [
      'Are your parents alive? If deceased, what was the cause and age at death?',
      'Do any first-degree relatives have heart disease, stroke, diabetes, or cancer?',
      'Any cancers in the family? At what age were they diagnosed?',
      'Is there a history of sudden cardiac death or early heart disease (men <55, women <65)?',
      'Any hereditary conditions (sickle cell, hemophilia, cystic fibrosis, Huntington)?',
      'Any family history of mental illness, suicide, or substance abuse?',
      'What is your ethnic background? (relevant for certain genetic conditions)',
    ],
    redFlags: [
      'Multiple first-degree relatives with same cancer suggesting hereditary syndrome (e.g., Lynch, BRCA)',
      'Sudden cardiac death in a young relative (channelopathy, HCM)',
      'Early-onset autoimmune disease clustering',
    ],
    clinicalPearl: 'A three-generation pedigree is the gold standard. Ask about both sides of the family separately — patients often omit paternal history. Early-onset disease in relatives shifts screening timelines earlier.',
    documentationTips: 'Record age of onset for each condition. Use standardized family history notation. Document "non-contributory" only after specifically asking about cardiac, cancer, DM, and psychiatric histories.',
  },

  'social-history': {
    id: 'social-history',
    name: 'Social History',
    category: 'framework',
    description: 'Comprehensive assessment of lifestyle, occupational, and psychosocial factors affecting health including substance use, living situation, and social determinants.',
    keyQuestions: [
      'Do you smoke or use tobacco? If quit, when? Pack-year history?',
      'How much alcohol do you drink per week? Binge episodes?',
      'Any recreational drug use — current or past?',
      'What is your occupation? Any workplace exposures?',
      'Who lives at home with you? Do you feel safe at home?',
      'What is your highest level of education?',
      'Do you have health insurance? Any barriers to accessing care?',
      'Do you exercise? What does your diet look like?',
      'Have you traveled recently? Where?',
    ],
    mnemonics: 'Social history captures the "person behind the patient" — substance use, occupation, living situation, support system, safety, insurance, diet, exercise, travel',
    redFlags: [
      'Domestic violence or unsafe living environment',
      'Active IV drug use (endocarditis, hepatitis, HIV risk)',
      'Occupational exposures (asbestos, silica, benzene) with relevant symptoms',
    ],
    clinicalPearl: 'Social determinants of health (housing instability, food insecurity, transportation barriers) predict outcomes more strongly than many biomedical variables. Screen proactively and connect to resources.',
    documentationTips: 'Quantify substance use (pack-years for tobacco, drinks/week for alcohol, specific drugs and route). Document occupation and exposures. Note social support and barriers to care.',
  },

  'social-history-headss': {
    id: 'social-history-headss',
    name: 'Adolescent Social History — HEADSS',
    category: 'population-specific',
    description: 'Structured psychosocial interview for adolescents covering Home, Education/Employment, Activities, Drugs, Sexuality, and Suicide/Safety.',
    keyQuestions: [
      'Home: Who do you live with? How are things at home? Do you feel safe?',
      'Education/Employment: How is school going? Grades? Do you work?',
      'Activities: What do you do for fun? Friends? Screen time?',
      'Drugs: Have you or your friends tried tobacco, alcohol, marijuana, or other substances?',
      'Sexuality: Are you in a relationship? Are you sexually active? Contraception?',
      'Suicide/Safety: Have you ever felt so sad you wished you were not alive? Self-harm? Bullying?',
    ],
    mnemonics: 'HEADSS — Home, Education/Employment, Activities, Drugs, Sexuality, Suicide/Safety (some add an extra S for Social media)',
    redFlags: [
      'Active suicidal ideation with plan or intent',
      'Signs of abuse, neglect, or trafficking',
      'Substance use disorder interfering with daily functioning',
      'Risky sexual behavior without contraception or STI prevention',
    ],
    clinicalPearl: 'Interview the adolescent alone for the HEADSS assessment — confidentiality (within legal limits) is essential to obtaining honest answers. Start with least sensitive topics (Home, Education) and progress to more sensitive areas.',
    documentationTips: 'Note that confidential interview was conducted without parent present. Document safety assessment clearly. Record what confidentiality limits were explained to the patient.',
  },

  // =======================================================================
  // SYSTEM-SPECIFIC HISTORIES
  // =======================================================================
  'review-of-systems': {
    id: 'review-of-systems',
    name: 'Review of Systems (ROS)',
    category: 'system-specific',
    description: 'Systematic head-to-toe symptom inventory across all organ systems to identify symptoms not captured in the HPI and ensure completeness.',
    keyQuestions: [
      'Constitutional: Fever, chills, night sweats, weight change, fatigue?',
      'HEENT: Headache, vision changes, hearing loss, sore throat, nasal congestion?',
      'Cardiovascular: Chest pain, palpitations, dyspnea on exertion, orthopnea, edema?',
      'Respiratory: Cough, sputum, hemoptysis, wheezing, shortness of breath?',
      'GI: Nausea, vomiting, diarrhea, constipation, abdominal pain, blood in stool?',
      'GU: Dysuria, frequency, urgency, hematuria, incontinence?',
      'MSK: Joint pain, swelling, stiffness, muscle weakness, back pain?',
      'Neuro: Numbness, tingling, weakness, dizziness, seizures, syncope?',
      'Psych: Depression, anxiety, sleep disturbance, hallucinations?',
      'Skin: Rashes, lesions, pruritus, color changes, wounds?',
      'Heme/Lymph: Easy bruising, bleeding, lymphadenopathy?',
      'Endocrine: Heat/cold intolerance, polydipsia, polyuria?',
    ],
    redFlags: [
      'Constitutional symptoms (fever, weight loss, night sweats) suggesting malignancy or chronic infection',
      'Multi-system positive ROS raising concern for systemic autoimmune disease',
      'New neurological deficits in any context',
    ],
    clinicalPearl: 'A focused ROS driven by the differential diagnosis is more valuable than an unfocused checklist. If chest pain is the chief complaint, explore cardiovascular, respiratory, GI, and MSK systems in depth rather than asking every system equally.',
    documentationTips: 'Document pertinent positives and negatives by system. For billing purposes, 10+ systems reviewed constitutes a complete ROS. Always document the systems reviewed, even if negative.',
  },

  'chest-pain-history': {
    id: 'chest-pain-history',
    name: 'Chest Pain History',
    category: 'system-specific',
    description: 'Targeted history for chest pain evaluation emphasizing cardiac, pulmonary, GI, MSK, and psychogenic etiologies.',
    keyQuestions: [
      'Quality: Pressure/squeezing (cardiac), sharp/pleuritic (PE, pericarditis), tearing (dissection), burning (GERD)?',
      'Radiation: Jaw/left arm (ACS), back (dissection), epigastric (GI)?',
      'Exertional component: Does it occur with activity and resolve with rest?',
      'Duration: Seconds (MSK), minutes (angina), hours (MI, PE, pericarditis)?',
      'Reproducible with palpation? (MSK, costochondritis)',
      'Associated symptoms: Dyspnea, diaphoresis, nausea, syncope?',
      'Positional component: Worse lying flat, better leaning forward (pericarditis)?',
      'Risk factors: HTN, DM, smoking, hyperlipidemia, family history, cocaine use?',
    ],
    mnemonics: 'Typical angina meets 3 criteria: (1) substernal, (2) provoked by exertion or stress, (3) relieved by rest or nitroglycerin. 2/3 = atypical angina. 1/3 or 0/3 = non-cardiac.',
    redFlags: [
      'Acute tearing chest pain radiating to back (aortic dissection)',
      'Chest pain with hemodynamic instability',
      'New chest pain with ST changes on ECG',
      'Chest pain with unilateral leg swelling (DVT/PE)',
    ],
    clinicalPearl: 'Women, diabetics, and elderly patients frequently present with atypical symptoms — fatigue, dyspnea, nausea, or jaw/back pain rather than classic substernal pressure. Maintain a low threshold for workup in these populations.',
    documentationTips: 'Document cardiac risk factors explicitly. Note whether pain is typical, atypical, or non-cardiac by criteria. Record ECG findings and troponin timing relative to symptom onset.',
  },

  'abdominal-pain-history': {
    id: 'abdominal-pain-history',
    name: 'Abdominal Pain History',
    category: 'system-specific',
    description: 'Systematic history for abdominal pain evaluation including characterization by location, quality, and associated GI/GU/GYN symptoms.',
    keyQuestions: [
      'Location: RUQ (biliary), epigastric (gastric/pancreatic), RLQ (appendicitis), LLQ (diverticulitis), diffuse (obstruction, peritonitis)?',
      'Quality: Colicky/crampy (obstruction, renal colic) vs constant (peritonitis, pancreatitis)?',
      'Relationship to meals: Better or worse with eating?',
      'Bowel habits: Last BM? Diarrhea, constipation, blood, melena?',
      'Nausea/vomiting: Bilious? Feculent? Blood?',
      'Urinary symptoms: Dysuria, hematuria, frequency?',
      'GYN history (if applicable): LMP, vaginal discharge/bleeding, pregnancy possible?',
      'Prior abdominal surgeries? (adhesion risk)',
    ],
    mnemonics: 'Abdominal pain quadrant map: RUQ = biliary/hepatic, LUQ = splenic, RLQ = appendiceal/ovarian, LLQ = diverticular/ovarian, epigastric = gastric/pancreatic/cardiac, periumbilical = early appendicitis/SBO',
    redFlags: [
      'Rigid abdomen with rebound tenderness (peritonitis)',
      'Abdominal pain with hemodynamic instability (ruptured AAA, ectopic)',
      'Pain out of proportion to exam (mesenteric ischemia)',
      'Positive pregnancy test with abdominal pain (ectopic pregnancy)',
    ],
    clinicalPearl: 'Pain out of proportion to physical exam findings is the hallmark of mesenteric ischemia — the "abdominal angina." This diagnosis is frequently delayed; maintain high suspicion in elderly patients with atrial fibrillation or vascular disease.',
    documentationTips: 'Map pain precisely to abdominal quadrants/regions. Document bowel sounds, tenderness pattern (with/without guarding/rebound), and rectal exam findings. Always document LMP in reproductive-age females.',
  },

  'headache-history': {
    id: 'headache-history',
    name: 'Headache History',
    category: 'system-specific',
    description: 'Focused headache evaluation distinguishing primary (migraine, tension, cluster) from secondary (vascular, infectious, neoplastic) causes.',
    keyQuestions: [
      'Is this the worst headache of your life? (SAH screen)',
      'Onset: Sudden (thunderclap) or gradual?',
      'Pattern: First ever, episodic recurrent, or chronic daily?',
      'Location: Unilateral (migraine, cluster), bilateral (tension), occipital (cervicogenic)?',
      'Associated: Nausea, photophobia, phonophobia (migraine)? Lacrimation, rhinorrhea (cluster)?',
      'Aura: Visual disturbances, sensory changes before onset?',
      'Triggers: Stress, foods, menses, sleep changes?',
      'Neurological symptoms: Weakness, numbness, vision loss, confusion, seizures?',
      'Positional component: Worse standing (low CSF pressure) vs lying flat (raised ICP)?',
    ],
    mnemonics: 'SNOOP red flags — Systemic symptoms/Secondary risk factors, Neurologic symptoms, Onset sudden, Older age (>50 new headache), Previous headache pattern change',
    redFlags: [
      'Thunderclap headache (SAH until proven otherwise)',
      'New headache in patient >50 (temporal arteritis, mass)',
      'Headache with fever and meningismus (meningitis)',
      'Progressive headache with papilledema (raised ICP)',
      'Headache with focal neurological deficits',
    ],
    clinicalPearl: 'A "first or worst" headache demands urgent workup. Even if CT head is negative, LP is required to rule out SAH if clinical suspicion is high — CT sensitivity drops from 98% at 6 hours to 86% at 72 hours.',
    documentationTips: 'Document SNOOP criteria explicitly. Record headache frequency, disability impact (missed work/school), and medication use frequency (to assess medication overuse headache). Note all red flag screening as positive or negative.',
  },

  'respiratory-history': {
    id: 'respiratory-history',
    name: 'Respiratory History',
    category: 'system-specific',
    description: 'Comprehensive pulmonary history including dyspnea characterization, cough evaluation, and occupational/environmental exposure assessment.',
    keyQuestions: [
      'Dyspnea: At rest or exertional? Onset acute or chronic? Orthopnea? PND?',
      'Cough: Productive or dry? Sputum color and quantity? Hemoptysis?',
      'Wheezing: When does it occur? Known asthma or COPD?',
      'Smoking: Current/former/never? Pack-years? Vaping?',
      'Occupational exposures: Asbestos, silica, coal dust, chemicals?',
      'Environmental: Pets, mold, recent travel, TB contacts?',
      'Exercise tolerance: How far can you walk on flat ground? Stairs?',
      'Sleep: Snoring, witnessed apneas, daytime somnolence? (OSA screen)',
    ],
    redFlags: [
      'Massive hemoptysis (>200 mL/24h)',
      'Acute dyspnea with hypoxia and unilateral leg swelling (PE)',
      'Stridor suggesting upper airway obstruction',
      'Rapidly progressive dyspnea with accessory muscle use',
    ],
    clinicalPearl: 'Quantify dyspnea with functional capacity (blocks walked, flights of stairs) rather than vague descriptors. The MRC dyspnea scale or mMRC provides reproducible grading for longitudinal tracking.',
    documentationTips: 'Record pack-year history precisely (packs/day x years smoked). Document baseline oxygen requirement. For asthma/COPD, note last PFTs, exacerbation frequency, and current controller regimen.',
  },

  'cardiac-history': {
    id: 'cardiac-history',
    name: 'Cardiac History',
    category: 'system-specific',
    description: 'Focused cardiovascular history covering ischemic symptoms, heart failure assessment, arrhythmia evaluation, and valvular disease symptoms.',
    keyQuestions: [
      'Chest pain or pressure with exertion? (anginal equivalents: dyspnea, fatigue)',
      'Palpitations: Regular or irregular? Duration? Associated lightheadedness?',
      'Syncope or pre-syncope: Exertional? Positional? Prodrome?',
      'Heart failure symptoms: Orthopnea (how many pillows?), PND, lower extremity edema, weight gain?',
      'Exercise tolerance: Quantify in METs or functional capacity.',
      'Prior cardiac history: MI, stents, CABG, valve surgery, pacemaker/ICD?',
      'Cardiac risk factors: HTN, DM, hyperlipidemia, smoking, family history of premature CAD?',
    ],
    mnemonics: 'NYHA Functional Classification: I = no limitation, II = slight limitation (ordinary activity), III = marked limitation (less than ordinary), IV = symptoms at rest',
    redFlags: [
      'Exertional syncope (aortic stenosis, HCM, arrhythmia)',
      'New-onset heart failure symptoms in young patient (myocarditis, cardiomyopathy)',
      'Palpitations with syncope (ventricular arrhythmia)',
      'Chest pain at rest lasting >20 minutes (unstable angina/NSTEMI)',
    ],
    clinicalPearl: 'Orthopnea is the most specific symptom for heart failure. Ask "How many pillows do you sleep with?" and "Have you started sleeping in a recliner?" — changes from baseline are more meaningful than absolute numbers.',
    documentationTips: 'Record NYHA class, quantified exercise tolerance, number of pillows, and weight trajectory. Document all cardiac risk factors and prior interventions with dates. Include last echo EF and stress test results.',
  },

  'gi-history': {
    id: 'gi-history',
    name: 'GI History',
    category: 'system-specific',
    description: 'Gastrointestinal history covering dysphagia, reflux, bowel habit changes, GI bleeding, hepatobiliary, and pancreatic symptoms.',
    keyQuestions: [
      'Dysphagia: Solids, liquids, or both? Progressive or intermittent? Location?',
      'Heartburn/reflux: Frequency? Relationship to meals or position?',
      'Nausea/vomiting: Timing relative to meals? Blood? Bilious?',
      'Bowel habits: Frequency? Consistency (Bristol stool scale)? Recent changes?',
      'GI bleeding: Hematemesis? Melena? Hematochezia? Quantity?',
      'Jaundice: Skin/eye yellowing? Dark urine? Clay-colored stools?',
      'Abdominal distension or early satiety?',
      'Diet history: Alcohol intake? Spicy/fatty food tolerance? Food intolerances?',
    ],
    redFlags: [
      'Progressive dysphagia to solids (esophageal malignancy)',
      'Unintentional weight loss with GI symptoms (malignancy)',
      'Hematemesis or large-volume melena (upper GI bleed)',
      'New-onset jaundice with painless palpable gallbladder (Courvoisier sign — pancreatic head mass)',
    ],
    clinicalPearl: 'Dysphagia to solids only suggests mechanical obstruction (stricture, mass); dysphagia to both solids and liquids from onset suggests a motility disorder (achalasia, scleroderma esophagus). This single question dramatically narrows the differential.',
    documentationTips: 'Use the Bristol stool scale for bowel habit documentation. Quantify alcohol in standard drinks per week. Record alarm features (weight loss, dysphagia, bleeding, anemia) explicitly for any GI complaint.',
  },

  'neurological-history': {
    id: 'neurological-history',
    name: 'Neurological History',
    category: 'system-specific',
    description: 'Focused neurological history for evaluating weakness, sensory changes, headaches, seizures, movement disorders, and cognitive symptoms.',
    keyQuestions: [
      'Weakness: Focal or generalized? Proximal or distal? Upper/lower motor neuron pattern?',
      'Sensory changes: Numbness, tingling, burning? Distribution (dermatomal, stocking-glove, hemisensory)?',
      'Gait: Unsteady, dragging, shuffling? Falls?',
      'Vision: Double vision, visual field cuts, blurring?',
      'Speech: Slurred, word-finding difficulty, comprehension problems?',
      'Seizures: Witnessed description, aura, postictal state, tongue biting, incontinence?',
      'Cognitive: Memory changes, confusion, personality change?',
      'Timing: Sudden onset (vascular), progressive (degenerative/neoplastic), relapsing-remitting (MS)?',
    ],
    mnemonics: 'Sudden neuro deficit = vascular until proven otherwise. "Time is brain" — determine last-known-well time immediately for potential stroke.',
    redFlags: [
      'Acute focal neurological deficit (stroke — activate code)',
      'Thunderclap headache with neck stiffness (SAH)',
      'Progressive weakness ascending from legs (Guillain-Barre)',
      'New seizure in adult (mass, metabolic, or vascular lesion)',
      'Cauda equina symptoms: bilateral leg weakness, saddle anesthesia, urinary retention',
    ],
    clinicalPearl: 'The temporal profile of neurological symptoms is the most powerful localizing and etiologic clue. Sudden = vascular, hours-days = inflammatory/infectious, weeks-months = neoplastic/degenerative, relapsing-remitting = demyelinating.',
    documentationTips: 'Record exact time of onset and last-known-well time. Document handedness. Describe deficits in anatomic terms (e.g., "left hemiparesis" not "left-sided weakness"). NIHSS score for suspected stroke.',
  },

  'psychiatric-history': {
    id: 'psychiatric-history',
    name: 'Psychiatric History & Screening Tools',
    category: 'screening-tool',
    description: 'Comprehensive psychiatric history with standardized screening instruments including PHQ-9, GAD-7, CAGE, and AUDIT for depression, anxiety, and substance use disorders.',
    keyQuestions: [
      'PHQ-9 screening: Over the past 2 weeks — little interest/pleasure? Feeling down/hopeless? Sleep changes? Fatigue? Appetite changes? Feelings of failure? Concentration difficulty? Psychomotor changes? Suicidal thoughts?',
      'GAD-7 screening: Feeling nervous/anxious? Unable to stop worrying? Worrying too much? Trouble relaxing? Restless? Irritable? Feeling afraid?',
      'CAGE questions: Have you felt you should Cut down? Annoyed by criticism of drinking? Guilty about drinking? Eye-opener drink in the morning?',
      'AUDIT-C: How often do you have a drink? How many on a typical day? How often 6+ drinks?',
      'Prior psychiatric diagnoses and hospitalizations?',
      'Current or prior psychiatric medications?',
      'History of suicide attempts or self-harm?',
      'History of trauma or abuse?',
    ],
    mnemonics: 'PHQ-9 ≥10 = moderate depression; GAD-7 ≥10 = moderate anxiety; CAGE ≥2 = clinically significant; AUDIT ≥8 (men) or ≥4 (women) = hazardous drinking',
    redFlags: [
      'Active suicidal ideation with plan, intent, and access to means',
      'Homicidal ideation',
      'Psychotic symptoms (command hallucinations)',
      'Severe alcohol withdrawal risk (seizures, DTs)',
      'PHQ-9 question 9 positive (suicidality) — requires immediate safety assessment',
    ],
    clinicalPearl: 'PHQ-9 question 9 (suicidal thoughts) must always trigger a direct safety assessment regardless of total score. Even a score of 1 on this item warrants follow-up: "Tell me more about those thoughts." Determine frequency, plan, intent, access to means, and protective factors.',
    documentationTips: 'Record validated screening tool scores (PHQ-9: X/27, GAD-7: X/21). Document suicide risk assessment with ideation, plan, intent, means, and protective factors. Note safety plan if applicable. Record substance quantities precisely.',
  },

  // =======================================================================
  // POPULATION-SPECIFIC
  // =======================================================================
  'obgyn-history': {
    id: 'obgyn-history',
    name: 'OB/GYN History',
    category: 'population-specific',
    description: 'Comprehensive obstetric and gynecologic history including menstrual, contraceptive, pregnancy, and gynecologic cancer screening history.',
    keyQuestions: [
      'LMP: When was your last menstrual period? Was it normal?',
      'Menstrual: Age of menarche? Cycle regularity, duration, flow? Dysmenorrhea?',
      'Obstetric: Gravida/Para? Delivery methods? Complications (preeclampsia, GDM, preterm)?',
      'Contraception: Current method? Any issues?',
      'STI history: Prior infections? Testing?',
      'Gynecologic: Abnormal Pap results? Fibroids? Endometriosis? PCOS?',
      'Menopause: Vasomotor symptoms? HRT? Postmenopausal bleeding?',
      'Breast history: Lumps, discharge, prior biopsies? Family history of breast/ovarian cancer?',
    ],
    mnemonics: 'Obstetric shorthand: G_P_ (TPAL — Term, Preterm, Abortions, Living). Example: G3P1011 = 3 pregnancies, 1 term delivery, 0 preterm, 1 abortion, 1 living child.',
    redFlags: [
      'Postmenopausal bleeding (endometrial cancer until proven otherwise)',
      'Positive pregnancy test with abdominal pain and vaginal bleeding (ectopic)',
      'Heavy menstrual bleeding with hemodynamic instability',
      'Pelvic mass with ascites and weight loss (ovarian malignancy)',
    ],
    clinicalPearl: 'Any reproductive-age female with abdominal/pelvic pain or abnormal bleeding needs a pregnancy test before any workup proceeds. Ectopic pregnancy is life-threatening and must be excluded first.',
    documentationTips: 'Record GTPAL accurately. Document LMP date and whether it was a normal period. Note contraceptive method and adherence. List all prior cervical cytology and HPV results with dates.',
  },

  'pediatric-history': {
    id: 'pediatric-history',
    name: 'Pediatric History',
    category: 'population-specific',
    description: 'Age-appropriate pediatric history emphasizing birth history, developmental milestones, immunization status, growth parameters, and caregiver concerns.',
    keyQuestions: [
      'Birth: Gestational age? Delivery type? Birth weight? NICU stay? Complications?',
      'Feeding: Breastfed/formula? Solid food introduction? Current diet? Picky eating?',
      'Development: Meeting milestones? (gross motor, fine motor, language, social) Any regression?',
      'Immunizations: Up to date? Any reactions? Parental concerns about vaccines?',
      'Growth: Tracking on curve? Any concerns about height, weight, or head circumference?',
      'School: Performance? Behavior? IEP or 504 plan? Friends?',
      'Family dynamics: Custody? Siblings? Recent stressors? ACEs screening?',
      'Safety: Car seats, helmets, water safety, firearm access, sleep position (infants)?',
    ],
    mnemonics: 'Developmental milestones by age: 2mo = social smile; 4mo = rolls; 6mo = sits; 9mo = crawls/pincer; 12mo = walks/first words; 18mo = runs/10 words; 2yr = 2-word phrases; 3yr = sentences/tricycle',
    redFlags: [
      'Developmental regression at any age (neurometabolic disease, autism screening)',
      'Failure to thrive (weight crossing 2+ percentile lines)',
      'Injuries inconsistent with developmental stage (non-accidental trauma)',
      'Delayed or absent immunizations in at-risk populations',
    ],
    clinicalPearl: 'The parental concern "something is not right" is one of the most sensitive screening tools in pediatrics. Studies show parental concern about development has high sensitivity for detecting actual delays — take it seriously and screen formally.',
    documentationTips: 'Plot growth parameters on appropriate charts (WHO <2yr, CDC 2-20yr). Document developmental milestones as met/not met with ages. Record immunization status and catch-up plan if behind. Note caregiver relationship to child.',
  },

  'geriatric-assessment': {
    id: 'geriatric-assessment',
    name: 'Geriatric Comprehensive Assessment',
    category: 'population-specific',
    description: 'Multidimensional geriatric assessment covering functional status, cognition, polypharmacy, fall risk, advanced care planning, and geriatric syndromes.',
    keyQuestions: [
      'Functional status: ADLs (bathing, dressing, toileting, transferring, feeding)? IADLs (cooking, shopping, finances, medications, transportation)?',
      'Cognition: Any memory concerns? Getting lost? Difficulty with finances or medications? (MMSE or MoCA screen)',
      'Falls: Have you fallen in the past year? How many times? Any injuries? Fear of falling?',
      'Polypharmacy: Review all medications including OTC. Beers criteria medications?',
      'Sensory: Vision and hearing changes? Last eye exam? Hearing aids?',
      'Nutrition: Unintentional weight loss? Appetite changes? Difficulty chewing or swallowing?',
      'Continence: Urinary or fecal incontinence? Type and severity?',
      'Mood: PHQ-2 or GDS-15 screen for depression.',
      'Goals of care: Health care proxy? Living will? Code status discussion?',
    ],
    mnemonics: 'Geriatric Giants (Isaacs): Immobility, Instability (falls), Incontinence, Intellectual impairment (dementia/delirium). Additional: Iatrogenesis, Isolation.',
    redFlags: [
      'Acute confusion (delirium — look for underlying cause: infection, medication, metabolic)',
      'Rapid functional decline (screen for depression, malignancy, infection)',
      'Recurrent falls (evaluate gait, medications, orthostatic BP, vision, environment)',
      'Elder abuse or neglect signs (unexplained injuries, malnutrition, poor hygiene)',
    ],
    clinicalPearl: 'Delirium in the elderly is a medical emergency, not a normal part of aging. Always look for the underlying cause: infection (UTI, pneumonia), medications (anticholinergics, benzodiazepines, opioids), metabolic derangement, pain, or urinary retention.',
    documentationTips: 'Document baseline functional status (ADLs/IADLs) and compare to current. Record cognitive screening score with tool used. Note fall risk assessment. List Beers criteria medications. Document advance directive status and goals-of-care conversation.',
  },

  // =======================================================================
  // ASSESSMENT TOOLS
  // =======================================================================
  'preoperative-assessment': {
    id: 'preoperative-assessment',
    name: 'Pre-operative Assessment',
    category: 'assessment-tool',
    description: 'Systematic pre-surgical evaluation covering cardiac risk stratification, airway assessment, functional capacity, and anesthetic considerations.',
    keyQuestions: [
      'What surgery is planned? Urgency (elective, urgent, emergent)?',
      'Functional capacity: Can you climb 2 flights of stairs without stopping? (≥4 METs)',
      'Cardiac history: Prior MI, CHF, valvular disease, arrhythmia? (Revised Cardiac Risk Index)',
      'Pulmonary: Asthma, COPD, OSA, recent URI? Smoking status?',
      'Airway: Prior difficult intubation? Neck mobility? Mallampati class? Dental status?',
      'Bleeding risk: Anticoagulants? Antiplatelet agents? Bleeding history? Liver disease?',
      'Anesthetic history: Prior anesthesia complications? Family history of malignant hyperthermia?',
      'NPO status: Last oral intake (solids and liquids)?',
    ],
    mnemonics: 'Revised Cardiac Risk Index (Lee): IHD, CHF, CVD, DM on insulin, Cr >2, high-risk surgery. Each factor = 1 point. ≥3 points = elevated cardiac risk.',
    redFlags: [
      'Active cardiac conditions: unstable angina, decompensated CHF, severe valvular disease, significant arrhythmia',
      'Functional capacity <4 METs with cardiac risk factors',
      'History of malignant hyperthermia',
      'Anticipated difficult airway with no backup plan',
    ],
    clinicalPearl: 'Functional capacity is the strongest predictor of perioperative cardiac events. A patient who can climb 2 flights of stairs (≥4 METs) without symptoms can safely proceed to most surgeries regardless of other risk factors. Always assess this first.',
    documentationTips: 'Record ASA class, Mallampati score, RCRI score, and functional capacity in METs. Document anticoagulant bridging plan. Note NPO times for solids and liquids separately. Include consent discussion documentation.',
  },

  'trauma-assessment': {
    id: 'trauma-assessment',
    name: 'Trauma Assessment — ATLS Primary/Secondary Survey',
    category: 'assessment-tool',
    description: 'Advanced Trauma Life Support systematic evaluation: primary survey (ABCDE) for immediate life threats followed by comprehensive secondary survey (head-to-toe with AMPLE history).',
    keyQuestions: [
      'Primary Survey — A: Airway patent? C-spine immobilized? Speaking?',
      'Primary Survey — B: Breathing? Bilateral breath sounds? Tracheal deviation? Chest wall integrity?',
      'Primary Survey — C: Circulation? Pulses? Active hemorrhage? BP? Skin color/cap refill?',
      'Primary Survey — D: Disability — GCS? Pupils equal and reactive? Motor response?',
      'Primary Survey — E: Exposure — fully undress, log roll, maintain normothermia.',
      'Secondary Survey AMPLE: Allergies? Medications? Past medical history? Last meal? Events/mechanism of injury?',
      'Mechanism: Blunt vs penetrating? Speed, height, weapon? Restraints, airbag, ejection?',
      'Head-to-toe secondary exam: Scalp, face, neck, chest, abdomen, pelvis, extremities, back, neuro.',
    ],
    mnemonics: 'Primary: ABCDE — Airway, Breathing, Circulation, Disability, Exposure. History: AMPLE — Allergies, Medications, Past history, Last meal, Events.',
    redFlags: [
      'Compromised airway (stridor, gurgling, inability to speak)',
      'Tension pneumothorax (absent breath sounds, tracheal deviation, hypotension)',
      'Hemorrhagic shock (tachycardia, hypotension, altered mental status)',
      'Signs of traumatic brain injury (GCS ≤8, unequal pupils, Cushing triad)',
    ],
    clinicalPearl: 'Treat the greatest threat to life first — follow ABCDE order strictly. The most common cause of preventable death in trauma is unrecognized hemorrhage. If hemodynamics do not improve with 2L crystalloid, activate massive transfusion protocol.',
    documentationTips: 'Document primary survey findings with times. Record GCS components (E_V_M_) not just total. Note mechanism in detail. Document all imaging ordered and results. Record total fluid and blood product administration with times.',
  },

  'pain-assessment': {
    id: 'pain-assessment',
    name: 'Pain Assessment',
    category: 'assessment-tool',
    description: 'Multidimensional pain evaluation using validated scales, functional impact assessment, and identification of neuropathic vs nociceptive components.',
    keyQuestions: [
      'Numeric Rating Scale: Rate your pain 0-10 (current, worst, least, acceptable level)?',
      'Quality: Aching, throbbing, burning, shooting, stabbing, electric? (nociceptive vs neuropathic)',
      'Temporal pattern: Constant, intermittent, breakthrough? Worse at certain times?',
      'Functional impact: How does pain affect sleep, work, mood, relationships, daily activities?',
      'Current treatments: What have you tried? What works? What doesn\'t? Side effects?',
      'Prior pain evaluations: Imaging, procedures, specialist visits?',
      'Psychosocial factors: Depression, anxiety, catastrophizing, fear-avoidance?',
      'Substance use: Current or prior opioid use? Alcohol? Other substances?',
      'Non-verbal cues (for non-communicative patients): Facial grimacing, guarding, agitation, vital sign changes?',
    ],
    mnemonics: 'Pain assessment scales by population: NRS (adults), Wong-Baker FACES (children/cognitively impaired), FLACC (preverbal children), CPOT/BPS (intubated ICU patients), PAINAD (advanced dementia)',
    redFlags: [
      'Pain with neurological deficits (spinal cord compression)',
      'Escalating opioid requirements without clear etiology',
      'Pain crisis in sickle cell disease',
      'New back pain with saddle anesthesia and urinary retention (cauda equina)',
    ],
    clinicalPearl: 'Pain is multidimensional — biological, psychological, and social factors all contribute. Burning, shooting, or electric pain suggests neuropathic etiology and responds better to gabapentinoids, SNRIs, or TCAs than to opioids or NSAIDs.',
    documentationTips: 'Record pain scores using the same validated scale consistently. Document functional goals (not just numeric targets). Note current analgesic regimen with efficacy assessment. For chronic pain, document PMP check and urine drug screen results.',
  },

  'fall-risk-assessment': {
    id: 'fall-risk-assessment',
    name: 'Fall Risk Assessment',
    category: 'assessment-tool',
    description: 'Systematic evaluation of intrinsic and extrinsic fall risk factors using standardized tools and targeted interventions.',
    keyQuestions: [
      'Have you fallen in the past 12 months? How many times?',
      'Do you feel unsteady when standing or walking?',
      'Are you afraid of falling?',
      'Medications: Sedatives, antihypertensives, anticholinergics, polypharmacy (≥4)?',
      'Vision: When was your last eye exam? Any visual impairment?',
      'Orthostatic symptoms: Lightheadedness when standing?',
      'Footwear: What shoes do you typically wear?',
      'Home environment: Rugs, poor lighting, stairs, grab bars in bathroom?',
      'Assistive devices: Do you use a cane, walker, or wheelchair?',
      'Gait assessment: Timed Up and Go (TUG) test?',
    ],
    mnemonics: 'Fall risk factors (I HATE FALLING): Inflammation of joints, Hypotension, Auditory/visual impairment, Tremor, Equilibrium problem, Foot problems, Arrhythmia, Leg-length discrepancy, Lack of conditioning, Illness, Nutrition, Gait disturbance',
    redFlags: [
      'Falls with loss of consciousness (cardiac arrhythmia, seizure)',
      'Recurrent unexplained falls (neurological or cardiac workup needed)',
      'Fall with significant injury (fracture, subdural hematoma)',
      'Fall on anticoagulation (high bleeding risk)',
    ],
    clinicalPearl: 'The single best screening question is "Have you fallen in the past year?" One fall doubles the risk of a future fall. The Timed Up and Go (TUG) test — stand from chair, walk 3 meters, turn, return, sit — taking >12 seconds indicates increased fall risk.',
    documentationTips: 'Document number of falls, circumstances, and injuries. Record Morse Fall Scale or Hendrich II score for inpatients. Note gait assessment findings and TUG time. List modifiable risk factors and interventions implemented.',
  },

  'nutritional-screening': {
    id: 'nutritional-screening',
    name: 'Nutritional Screening',
    category: 'screening-tool',
    description: 'Assessment of nutritional status using validated tools, anthropometric measures, and dietary history to identify malnutrition and guide intervention.',
    keyQuestions: [
      'Have you lost weight unintentionally in the past 3-6 months? How much?',
      'Has your appetite changed? Are you eating less than usual?',
      'Do you have difficulty chewing or swallowing?',
      'Do you have nausea, vomiting, or diarrhea affecting intake?',
      'What do you typically eat in a day? (24-hour dietary recall)',
      'Do you follow a special diet (vegetarian, diabetic, renal)?',
      'Can you afford and access nutritious food? (food insecurity screen)',
      'Do you take any nutritional supplements?',
      'BMI and recent weight trend?',
    ],
    mnemonics: 'Malnutrition screening (MUST): BMI <18.5 = high risk; unplanned weight loss >10% in 3-6 months = high risk; acutely ill with no intake >5 days = high risk',
    redFlags: [
      'Unintentional weight loss >10% in 6 months (malignancy workup)',
      'BMI <16 (severe malnutrition)',
      'Refeeding syndrome risk (prolonged starvation, anorexia nervosa, alcoholism)',
      'Micronutrient deficiency signs (glossitis, angular cheilitis, petechiae, neuropathy)',
    ],
    clinicalPearl: 'Refeeding syndrome can be fatal. Patients at risk (BMI <16, minimal intake >10 days, low K/Mg/Phos) must have electrolytes checked and supplemented before and during nutritional repletion, with caloric advancement at 10-20 kcal/kg/day initially.',
    documentationTips: 'Record BMI, weight change with timeframe and percentage. Document MUST or NRS-2002 screening score. Note dietary restrictions and intake adequacy. Flag refeeding risk and electrolyte monitoring plan.',
  },

  'functional-status-assessment': {
    id: 'functional-status-assessment',
    name: 'Functional Status Assessment',
    category: 'assessment-tool',
    description: 'Evaluation of patient independence in Activities of Daily Living (ADLs) and Instrumental Activities of Daily Living (IADLs) for care planning and prognostication.',
    keyQuestions: [
      'Basic ADLs: Can you independently bathe, dress, use the toilet, transfer, maintain continence, and feed yourself?',
      'IADLs: Can you independently manage medications, finances, shopping, cooking, housekeeping, laundry, transportation, and telephone use?',
      'Mobility: Do you walk independently? Use assistive device? Wheelchair-bound? Bedbound?',
      'What is your baseline functional level versus current level?',
      'Has there been a recent decline? Over what timeframe?',
      'What help do you currently receive? From whom?',
      'What is your living situation (independent, assisted living, skilled nursing)?',
      'What are your functional goals?',
    ],
    mnemonics: 'ADLs (DEATH): Dressing, Eating, Ambulating, Toileting, Hygiene. IADLs (SHAFT): Shopping, Housekeeping, Accounting (finances), Food prep, Transportation.',
    redFlags: [
      'Acute functional decline (delirium, stroke, infection, acute illness)',
      'Progressive ADL dependence (screen for dementia, depression, or new neurological disease)',
      'Discrepancy between reported and observed function (safety concern)',
      'Patient unable to manage medications independently (medication error risk)',
    ],
    clinicalPearl: 'Functional status is the single strongest predictor of outcomes in elderly patients — more prognostic than any individual diagnosis. A patient losing IADLs is at the threshold where home safety becomes a concern; losing ADLs typically necessitates a higher level of care.',
    documentationTips: 'Score ADLs and IADLs using Katz (ADL) and Lawton (IADL) scales. Document baseline vs current status. Note which activities require assistance and who provides it. Include PT/OT recommendations and discharge disposition planning.',
  },

  'sexual-history': {
    id: 'sexual-history',
    name: 'Sexual History',
    category: 'framework',
    description: 'Non-judgmental, comprehensive sexual history covering partners, practices, protection, past STIs, and pregnancy prevention using the 5 Ps framework.',
    keyQuestions: [
      'Partners: Do you have sex with men, women, or both? How many partners in the past year?',
      'Practices: What types of sexual contact (oral, vaginal, anal)?',
      'Protection: Do you use condoms or other barrier methods? How consistently?',
      'Past STIs: Have you ever had an STI? Which one? Treatment?',
      'Pregnancy prevention: Are you trying to conceive? What contraception do you use?',
      'Additional: Any pain with sex? Satisfaction concerns? History of sexual trauma?',
      'Do you have any concerns about your sexual health you would like to discuss?',
    ],
    mnemonics: '5 Ps — Partners, Practices, Protection from STIs, Past STIs, Pregnancy prevention/plans',
    redFlags: [
      'High-risk practices without barrier protection (PrEP candidate screening)',
      'Symptoms of acute STI (discharge, ulcers, dysuria, pelvic pain)',
      'History of sexual assault (trauma-informed care, prophylaxis)',
      'Sex trafficking indicators (control by partner, inability to speak freely)',
    ],
    clinicalPearl: 'Normalize the conversation: "I ask all my patients about sexual health." Use inclusive, non-assuming language — ask about "partners" not "boyfriend/girlfriend." This approach improves disclosure rates and therapeutic alliance regardless of patient demographics.',
    documentationTips: 'Document using clinical terminology. Record number and gender of partners, specific practices for STI risk stratification, contraceptive method, and last STI testing with results. Note if PrEP was discussed for qualifying patients.',
  },

  // Additional screening tools and assessments
  'phq9-depression-screen': {
    id: 'phq9-depression-screen',
    name: 'PHQ-9 Depression Screening',
    category: 'screening-tool',
    description: 'Patient Health Questionnaire-9: validated 9-item self-report tool for depression screening and severity monitoring over the past 2 weeks.',
    keyQuestions: [
      'Little interest or pleasure in doing things?',
      'Feeling down, depressed, or hopeless?',
      'Trouble falling/staying asleep, or sleeping too much?',
      'Feeling tired or having little energy?',
      'Poor appetite or overeating?',
      'Feeling bad about yourself or that you are a failure?',
      'Trouble concentrating on things (reading, watching TV)?',
      'Moving or speaking slowly, or being fidgety/restless?',
      'Thoughts that you would be better off dead or of hurting yourself?',
    ],
    mnemonics: 'Scoring: 0 = not at all, 1 = several days, 2 = more than half the days, 3 = nearly every day. Total: 0-4 minimal, 5-9 mild, 10-14 moderate, 15-19 moderately severe, 20-27 severe.',
    redFlags: [
      'Any positive response to question 9 (suicidal ideation) requires immediate safety assessment',
      'Score ≥20 (severe depression) — consider psychiatric referral and safety planning',
      'Significant functional impairment at any score level',
      'Comorbid substance use amplifying suicide risk',
    ],
    clinicalPearl: 'PHQ-2 (first 2 questions) is 97% sensitive for major depression — use as initial screen. If either question is positive, complete the full PHQ-9. A score ≥10 has 88% sensitivity and 88% specificity for major depressive disorder.',
    documentationTips: 'Record total PHQ-9 score with severity category. Note individual item scores, especially Q9. Document clinical assessment concordance with score. Track longitudinally — a 5-point change is clinically significant.',
  },

  'gad7-anxiety-screen': {
    id: 'gad7-anxiety-screen',
    name: 'GAD-7 Anxiety Screening',
    category: 'screening-tool',
    description: 'Generalized Anxiety Disorder-7: validated 7-item tool for anxiety screening and severity monitoring over the past 2 weeks.',
    keyQuestions: [
      'Feeling nervous, anxious, or on edge?',
      'Not being able to stop or control worrying?',
      'Worrying too much about different things?',
      'Trouble relaxing?',
      'Being so restless that it is hard to sit still?',
      'Becoming easily annoyed or irritable?',
      'Feeling afraid as if something awful might happen?',
    ],
    mnemonics: 'Scoring: same as PHQ-9 (0-3 per item). Total: 0-4 minimal, 5-9 mild, 10-14 moderate, 15-21 severe anxiety.',
    redFlags: [
      'Score ≥15 (severe anxiety) — assess for panic disorder, PTSD, OCD, or secondary medical cause',
      'Anxiety with chest pain, palpitations, and dyspnea (rule out cardiac etiology)',
      'New-onset severe anxiety in elderly (delirium, thyroid, or medication effect)',
      'Anxiety co-occurring with suicidal ideation (increases acute risk)',
    ],
    clinicalPearl: 'GAD-7 also screens reasonably well for panic disorder, social anxiety, and PTSD (sensitivity >70% for each at cutoff ≥10). It is not specific to GAD despite the name — a positive screen should prompt broader anxiety disorder evaluation.',
    documentationTips: 'Record GAD-7 total score with severity category. Note functional impairment rating ("How difficult have these problems made it?"). Track serially for treatment response. Document differential including medical causes of anxiety.',
  },

  'cage-audit-substance-screen': {
    id: 'cage-audit-substance-screen',
    name: 'CAGE and AUDIT Substance Use Screening',
    category: 'screening-tool',
    description: 'CAGE questionnaire (4 items) and AUDIT/AUDIT-C for identifying alcohol use disorder and hazardous drinking patterns.',
    keyQuestions: [
      'CAGE — Cut down: Have you ever felt you should cut down on your drinking?',
      'CAGE — Annoyed: Have people annoyed you by criticizing your drinking?',
      'CAGE — Guilty: Have you ever felt bad or guilty about your drinking?',
      'CAGE — Eye-opener: Have you ever had a drink first thing in the morning?',
      'AUDIT-C — How often do you have a drink containing alcohol?',
      'AUDIT-C — How many drinks on a typical drinking day?',
      'AUDIT-C — How often do you have 6 or more drinks on one occasion?',
      'Additional: Have you ever used recreational drugs? Which ones? How often?',
    ],
    mnemonics: 'CAGE ≥2 positive = clinically significant (sensitivity 93%, specificity 76% for alcohol use disorder). AUDIT-C: men ≥4, women ≥3 = positive screen.',
    redFlags: [
      'All 4 CAGE questions positive (high specificity for alcohol dependence)',
      'AUDIT total ≥20 (probable alcohol dependence)',
      'History of withdrawal seizures or delirium tremens',
      'Concurrent benzodiazepine or opioid use with alcohol',
    ],
    clinicalPearl: 'CAGE identifies dependence better than hazardous drinking. AUDIT identifies the full spectrum from hazardous to dependent drinking. For comprehensive screening, use AUDIT-C first; if positive, complete the full 10-item AUDIT. Brief intervention (SBIRT) at the point of screening improves outcomes.',
    documentationTips: 'Record CAGE (X/4) and/or AUDIT-C (X/12) scores. Quantify alcohol in standard drinks (12 oz beer = 5 oz wine = 1.5 oz spirits). Document pattern (daily, binge, weekend). Note readiness to change (precontemplation through maintenance). Record SBIRT delivery.',
  },

  'ace-trauma-screen': {
    id: 'ace-trauma-screen',
    name: 'Adverse Childhood Experiences (ACE) & Trauma Screening',
    category: 'screening-tool',
    description: 'ACE questionnaire and trauma-informed screening for identifying childhood adversity and trauma exposure that influence health outcomes across the lifespan.',
    keyQuestions: [
      'Before age 18, did you experience physical, emotional, or sexual abuse?',
      'Did you witness domestic violence in your household?',
      'Was a household member imprisoned, mentally ill, or substance-dependent?',
      'Were your parents separated or divorced?',
      'Did you experience physical or emotional neglect?',
      'Have you experienced any traumatic events as an adult (assault, accident, disaster, combat)?',
      'Do you have nightmares, flashbacks, or feel on guard related to past experiences?',
      'Do past experiences affect your current health or relationships?',
    ],
    mnemonics: 'ACE score (0-10): 3 abuse types + 2 neglect types + 5 household dysfunction types. Score ≥4 associated with dramatically increased risk of chronic disease, mental illness, and early death.',
    redFlags: [
      'Active trauma response requiring immediate mental health support',
      'Disclosure of current abuse or danger (mandatory reporting obligations)',
      'ACE ≥4 with untreated mental health conditions (high-risk for poor outcomes)',
      'Trauma re-enactment in healthcare settings (trauma-informed care essential)',
    ],
    clinicalPearl: 'ACE score ≥4 doubles the risk of heart disease, increases depression risk 4.6-fold, and increases suicide attempt risk 12-fold compared to ACE score 0. Resilience factors (stable relationships, community support) can buffer these effects — screen for both adversity and protective factors.',
    documentationTips: 'Document ACE score if screening is performed. Use sensitive, trauma-informed language. Note patient consent before screening. Record referrals to mental health. Document mandatory reporting if applicable. Note resilience and protective factors alongside adversity.',
  },
};

// ---------------------------------------------------------------------------
// Utility Functions
// ---------------------------------------------------------------------------

const entriesArray = Object.values(HISTORY_TAKING_ENTRIES);

/** Search entries by matching query against name, description, keyQuestions, and clinicalPearl. */
export function searchHistoryTakingEntries(query: string): HistoryTakingEntry[] {
  const q = query.toLowerCase();
  return entriesArray.filter(
    (e) =>
      e.name.toLowerCase().includes(q) ||
      e.description.toLowerCase().includes(q) ||
      e.clinicalPearl.toLowerCase().includes(q) ||
      e.keyQuestions.some((k) => k.toLowerCase().includes(q)),
  );
}

/** Filter entries by one or more categories. */
export function filterHistoryByCategory(categories: HistoryCategory[]): HistoryTakingEntry[] {
  const set = new Set<string>(categories);
  return entriesArray.filter((e) => set.has(e.category));
}

/** Retrieve a single entry by id, or undefined if not found. */
export function getHistoryEntryById(id: string): HistoryTakingEntry | undefined {
  return HISTORY_TAKING_ENTRIES[id];
}

/** Return all entry ids. */
export function getAllHistoryEntryIds(): string[] {
  return Object.keys(HISTORY_TAKING_ENTRIES);
}

/** Return entries that have specific red flags containing the query term. */
export function searchByRedFlag(query: string): HistoryTakingEntry[] {
  const q = query.toLowerCase();
  return entriesArray.filter(
    (e) => e.redFlags?.some((rf) => rf.toLowerCase().includes(q)),
  );
}

/** Return the count of entries per category. */
export function getHistoryCategoryCounts(): Record<HistoryCategory, number> {
  const counts: Record<string, number> = {
    'framework': 0,
    'system-specific': 0,
    'population-specific': 0,
    'screening-tool': 0,
    'assessment-tool': 0,
  };
  for (const e of entriesArray) {
    counts[e.category]++;
  }
  return counts as Record<HistoryCategory, number>;
}
