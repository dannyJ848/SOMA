/**
 * Emergency Medicine Structured Database
 *
 * Compact database of 15 high-acuity emergency conditions with triage levels,
 * time-critical interventions, red flags, and clinical mnemonics.
 * Bilingual (English/Spanish) naming.
 *
 * Used by SOMA for rapid emergency lookups, triage guidance, and clinical education.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type EmergencyCategory =
  | 'cardiac'
  | 'neurological'
  | 'respiratory'
  | 'allergic-immunologic'
  | 'infectious'
  | 'metabolic-endocrine'
  | 'gastrointestinal'
  | 'toxicology'
  | 'trauma'
  | 'vascular';

/** ESI triage level: 1 = resuscitation, 2 = emergent, 3 = urgent, 4 = less urgent, 5 = non-urgent */
export type TriageLevel = 1 | 2 | 3 | 4 | 5;

export interface EmergencyEntry {
  id: string;
  name: string;
  nameEs: string;
  category: EmergencyCategory;
  triageLevel: TriageLevel;
  /** Target time from recognition to definitive intervention */
  timeToTreat: string;
  keyInterventions: string[];
  redFlags: string[];
  mnemonics: string;
}

// ---------------------------------------------------------------------------
// Compact helper
// ---------------------------------------------------------------------------

function em(
  id: string,
  name: string,
  nameEs: string,
  cat: EmergencyCategory,
  triage: TriageLevel,
  time: string,
  interventions: string[],
  flags: string[],
  mnemonics: string,
): EmergencyEntry {
  return {
    id,
    name,
    nameEs,
    category: cat,
    triageLevel: triage,
    timeToTreat: time,
    keyInterventions: interventions,
    redFlags: flags,
    mnemonics,
  };
}

// ---------------------------------------------------------------------------
// Database entries
// ---------------------------------------------------------------------------

const entries: EmergencyEntry[] = [
  // ── Cardiac ──────────────────────────────────────────────────────────────
  em(
    'cardiac-arrest',
    'Cardiac Arrest',
    'Paro Cardíaco',
    'cardiac',
    1,
    'Immediate — seconds count',
    [
      'High-quality CPR (100-120/min, 2-2.4 in depth)',
      'Defibrillation for VF/pVT within 2 min',
      'Epinephrine 1 mg IV/IO every 3-5 min',
      'Amiodarone 300 mg IV for refractory VF/pVT',
      'Advanced airway management',
      'Identify and treat reversible causes (Hs and Ts)',
    ],
    [
      'Unresponsive with no pulse',
      'Agonal respirations or apnea',
      'Sudden witnessed collapse',
      'Preceding chest pain or dyspnea',
    ],
    'Hs and Ts: Hypovolemia, Hypoxia, Hydrogen ion (acidosis), Hypo/Hyperkalemia, Hypothermia — Tension pneumothorax, Tamponade, Toxins, Thrombosis (pulmonary), Thrombosis (coronary)',
  ),

  em(
    'stemi',
    'ST-Elevation Myocardial Infarction (STEMI)',
    'Infarto Agudo al Miocardio con Elevación del ST',
    'cardiac',
    1,
    'Door-to-balloon <90 min; door-to-needle <30 min',
    [
      'Aspirin 325 mg PO stat',
      'P2Y12 inhibitor (ticagrelor 180 mg or clopidogrel 600 mg)',
      'Heparin bolus per protocol',
      'Emergent PCI (preferred) or fibrinolytics if PCI unavailable',
      'Nitroglycerin SL (if no RV infarct/hypotension)',
      'Morphine for refractory pain',
    ],
    [
      'Chest pain with ST elevation in 2+ contiguous leads',
      'New LBBB with ischemic symptoms',
      'Hypotension or cardiogenic shock',
      'Acute heart failure / pulmonary edema',
      'Ventricular arrhythmias',
    ],
    'MONA (modified): Morphine, Oxygen (if SpO2<90%), Nitro, Aspirin. Time = Myocardium.',
  ),

  // ── Neurological ─────────────────────────────────────────────────────────
  em(
    'acute-stroke',
    'Acute Stroke (CVA)',
    'Accidente Cerebrovascular Agudo',
    'neurological',
    1,
    'Door-to-needle <60 min (tPA within 4.5 hr window)',
    [
      'Rapid NIHSS assessment',
      'Non-contrast CT head stat (rule out hemorrhage)',
      'IV alteplase 0.9 mg/kg if eligible (max 90 mg)',
      'Mechanical thrombectomy if LVO within 24 hr window',
      'Blood pressure management per guidelines',
      'Glucose management (target 140-180 mg/dL)',
    ],
    [
      'Sudden unilateral weakness or numbness',
      'Aphasia or speech difficulty',
      'Sudden severe headache (hemorrhagic)',
      'Visual field deficits',
      'Gaze deviation',
    ],
    'BE-FAST: Balance, Eyes, Face drooping, Arm weakness, Speech difficulty, Time to call 911.',
  ),

  em(
    'status-epilepticus',
    'Status Epilepticus',
    'Estado Epiléptico',
    'neurological',
    1,
    '<5 min to initiate benzos; <30 min to abort seizure',
    [
      'Benzodiazepine first-line: lorazepam 4 mg IV or midazolam 10 mg IM',
      'Second-line: levetiracetam 60 mg/kg IV, fosphenytoin 20 mg PE/kg, or valproate 40 mg/kg',
      'Third-line: propofol or midazolam infusion (intubate)',
      'Airway protection with lateral positioning',
      'Check glucose, electrolytes, toxicology',
      'Continuous EEG monitoring',
    ],
    [
      'Seizure lasting >5 minutes',
      'Recurrent seizures without return to baseline',
      'Fever with seizures (CNS infection)',
      'Post-ictal focal deficits',
      'First seizure in adults',
    ],
    'Staged approach: Stage 1 (0-5 min) benzos, Stage 2 (5-20 min) second-line AED, Stage 3 (20-40 min) anesthetic infusion.',
  ),

  // ── Allergic / Immunologic ───────────────────────────────────────────────
  em(
    'anaphylaxis',
    'Anaphylaxis',
    'Anafilaxia',
    'allergic-immunologic',
    1,
    'Epinephrine within 5 min of recognition',
    [
      'Epinephrine 0.3-0.5 mg IM anterolateral thigh (repeat q5-15 min)',
      'High-flow oxygen',
      'IV fluid bolus 1-2 L NS for hypotension',
      'Albuterol nebulization for bronchospasm',
      'Diphenhydramine 50 mg IV + ranitidine 50 mg IV (adjuncts only)',
      'Methylprednisolone 125 mg IV (prevents biphasic reaction)',
    ],
    [
      'Rapid-onset urticaria with airway compromise',
      'Stridor or tongue swelling',
      'Hypotension or syncope after allergen exposure',
      'GI symptoms (vomiting/diarrhea) with skin findings',
      'Known severe allergy with re-exposure',
    ],
    'Epinephrine is the ONLY first-line treatment. Antihistamines and steroids are adjuncts, never substitutes.',
  ),

  // ── Respiratory ──────────────────────────────────────────────────────────
  em(
    'tension-pneumothorax',
    'Tension Pneumothorax',
    'Neumotórax a Tensión',
    'respiratory',
    1,
    'Immediate needle decompression — clinical diagnosis',
    [
      'Needle decompression: 14g needle, 2nd ICS midclavicular (or 4th/5th ICS anterior axillary)',
      'Followed by tube thoracostomy (chest tube 28-36 Fr)',
      'High-flow oxygen',
      'IV fluid resuscitation if hypotensive',
      'Reassess breath sounds and vitals post-procedure',
    ],
    [
      'Unilateral absent breath sounds',
      'Tracheal deviation (late sign)',
      'Jugular venous distension with hypotension',
      'Hemodynamic collapse after intubation',
      'Subcutaneous emphysema',
    ],
    'Clinical diagnosis — do NOT delay for imaging. Absent breath sounds + hypotension + JVD = decompress now.',
  ),

  em(
    'status-asthmaticus',
    'Status Asthmaticus',
    'Estado Asmático',
    'respiratory',
    1,
    '<15 min to initiate aggressive therapy',
    [
      'Continuous albuterol nebulization (10-15 mg/hr)',
      'Ipratropium bromide 0.5 mg neb every 20 min x3',
      'Methylprednisolone 125 mg IV',
      'Magnesium sulfate 2 g IV over 20 min',
      'Epinephrine 0.3-0.5 mg IM if imminent arrest',
      'BiPAP or intubation if failing (use ketamine for RSI)',
    ],
    [
      'Silent chest (no wheezing = critical obstruction)',
      'Inability to speak in full sentences',
      'Accessory muscle use, diaphoresis',
      'Altered mental status',
      'PaCO2 normal or rising (sign of fatigue)',
    ],
    'Beware the "silent chest" — absence of wheezing in severe asthma means critical air trapping, not improvement.',
  ),

  em(
    'pulmonary-embolism',
    'Pulmonary Embolism',
    'Embolia Pulmonar',
    'vascular',
    1,
    '<60 min for massive PE with hemodynamic instability',
    [
      'Heparin bolus 80 units/kg then 18 units/kg/hr infusion',
      'tPA 100 mg IV over 2 hr for massive PE (or 50 mg IV bolus if arrest)',
      'Catheter-directed therapy if available',
      'Surgical embolectomy as last resort',
      'Supportive: IV fluids (cautious), vasopressors (norepinephrine)',
      'CTA chest for diagnosis (or bedside echo if unstable)',
    ],
    [
      'Sudden dyspnea with pleuritic chest pain',
      'Tachycardia disproportionate to clinical picture',
      'Hypotension or shock (massive PE)',
      'RV strain on ECG (S1Q3T3, RBBB)',
      'Unilateral leg swelling (DVT source)',
    ],
    'Wells Criteria: Clinical signs of DVT (3), PE most likely diagnosis (3), HR>100 (1.5), Immobilization/surgery (1.5), Prior DVT/PE (1.5), Hemoptysis (1), Malignancy (1).',
  ),

  // ── Infectious ───────────────────────────────────────────────────────────
  em(
    'septic-shock',
    'Septic Shock',
    'Choque Séptico',
    'infectious',
    1,
    'Hour-1 bundle: antibiotics + fluids within 60 min',
    [
      'Blood cultures x2 before antibiotics (do not delay abx >45 min)',
      'Broad-spectrum antibiotics within 1 hour',
      'Crystalloid 30 mL/kg IV bolus within 3 hours',
      'Norepinephrine for MAP <65 after fluids',
      'Vasopressin 0.03-0.04 units/min as second vasopressor',
      'Hydrocortisone 200 mg/day if refractory shock',
      'Lactate reassessment within 2-4 hours',
    ],
    [
      'qSOFA >= 2 (AMS, RR>=22, SBP<=100)',
      'Lactate > 2 mmol/L',
      'Hypotension refractory to fluids',
      'Altered mental status with fever/infection',
      'Mottled skin, delayed capillary refill',
    ],
    'SEP-1 bundle: Lactate, blood cultures, broad-spectrum abx, 30 mL/kg crystalloid, vasopressors for refractory hypotension — all within the first hour.',
  ),

  em(
    'acute-meningitis',
    'Acute Bacterial Meningitis',
    'Meningitis Bacteriana Aguda',
    'infectious',
    2,
    'Antibiotics within 30 min if suspected; do NOT delay for LP',
    [
      'Empiric abx: ceftriaxone 2g IV + vancomycin 15-20 mg/kg IV',
      'Add ampicillin if >50 yr, immunocompromised, or alcoholic (Listeria)',
      'Dexamethasone 0.15 mg/kg IV before or with first abx dose',
      'Lumbar puncture (after CT if focal neuro deficits or papilledema)',
      'IV fluids, seizure precautions',
    ],
    [
      'Fever + neck stiffness + altered mental status (classic triad)',
      'Petechial/purpuric rash (meningococcal)',
      'Kernig and Brudzinski signs',
      'Seizures with fever',
      'Rapid deterioration of consciousness',
    ],
    'Do NOT delay antibiotics for CT/LP. Classic triad (fever, neck stiffness, AMS) present in <50% of cases — have high suspicion.',
  ),

  // ── Metabolic / Endocrine ────────────────────────────────────────────────
  em(
    'dka',
    'Diabetic Ketoacidosis (DKA)',
    'Cetoacidosis Diabética',
    'metabolic-endocrine',
    2,
    '<60 min to start insulin and fluids',
    [
      'NS 1-1.5 L/hr for first 1-2 hours',
      'Regular insulin bolus 0.1 units/kg then 0.1 units/kg/hr infusion',
      'Potassium replacement: add 20-40 mEq/L if K<5.3 (hold insulin if K<3.3)',
      'Switch to D5 + 1/2 NS when glucose <200-250',
      'Transition to subQ insulin when gap closes and patient eating',
      'Bicarbonate only if pH <6.9',
    ],
    [
      'Blood glucose >250 with ketones and acidosis',
      'Kussmaul respirations (deep, rapid breathing)',
      'Fruity breath odor',
      'Severe dehydration (orthostasis, tachycardia)',
      'Altered mental status or abdominal pain',
      'Potassium <3.3 (life-threatening — replace before insulin)',
    ],
    'DKA triad: Hyperglycemia (>250), Ketosis (positive ketones), Acidosis (pH<7.3, bicarb<18). Always check K+ before insulin.',
  ),

  // ── GI ───────────────────────────────────────────────────────────────────
  em(
    'upper-gi-bleed',
    'Upper GI Hemorrhage',
    'Hemorragia Digestiva Alta',
    'gastrointestinal',
    1,
    '<60 min to resuscitate; endoscopy within 24 hr (12 hr if high-risk)',
    [
      'Two large-bore IVs (16-18g), aggressive crystalloid resuscitation',
      'Type and crossmatch; transfuse pRBC if Hgb <7 (or <9 if cardiac)',
      'IV PPI: pantoprazole 80 mg bolus then 8 mg/hr infusion',
      'Octreotide 50 mcg bolus + 50 mcg/hr if variceal bleed suspected',
      'Ceftriaxone 1g IV if cirrhotic',
      'Urgent GI consult for endoscopy',
      'Airway protection — intubate if massive hematemesis',
    ],
    [
      'Hematemesis (bright red or coffee-ground)',
      'Melena or hematochezia with hemodynamic instability',
      'Syncope or orthostatic hypotension',
      'Glasgow-Blatchford score >= 6',
      'Known cirrhosis with GI bleed (variceal)',
    ],
    'Glasgow-Blatchford Score (GBS): BUN, Hgb, SBP, HR, melena, syncope, liver disease, heart failure. GBS 0 = safe for outpatient management.',
  ),

  // ── Vascular ─────────────────────────────────────────────────────────────
  em(
    'hypertensive-emergency',
    'Hypertensive Emergency',
    'Emergencia Hipertensiva',
    'vascular',
    2,
    '<60 min to initiate IV antihypertensive; reduce MAP 20-25% in first hour',
    [
      'IV nicardipine 5 mg/hr (titrate by 2.5 mg/hr q5-15 min, max 15)',
      'IV labetalol 20 mg bolus then 2 mg/min infusion',
      'IV nitroprusside 0.3-0.5 mcg/kg/min (for aortic dissection)',
      'Clevidipine for perioperative BP control',
      'Target: reduce MAP by 20-25% in first hour, then to 160/100 over 2-6 hr',
      'Identify and treat end-organ damage',
    ],
    [
      'SBP >180 with acute end-organ damage',
      'Acute chest pain (dissection, ACS)',
      'Neurological symptoms (encephalopathy, stroke)',
      'Acute kidney injury with severely elevated BP',
      'Pulmonary edema with hypertension',
      'Eclampsia / HELLP syndrome',
    ],
    'Emergency vs Urgency: Emergency = elevated BP + end-organ damage (needs IV meds). Urgency = elevated BP without damage (oral meds OK).',
  ),

  // ── Toxicology ───────────────────────────────────────────────────────────
  em(
    'overdose-toxicology',
    'Overdose / Toxicology Emergency',
    'Sobredosis / Emergencia Toxicológica',
    'toxicology',
    1,
    'Immediate stabilization; antidote within minutes if indicated',
    [
      'ABCs and continuous monitoring',
      'Naloxone 0.4-2 mg IV/IM/IN for opioid overdose (repeat q2-3 min)',
      'Activated charcoal 1 g/kg if ingestion <1-2 hr and airway intact',
      'N-acetylcysteine for acetaminophen (within 8 hr ideal)',
      'Flumazenil for benzodiazepines (CAUTION: seizure risk)',
      'Whole bowel irrigation for sustained-release or body packing',
      'Toxicology consult and Poison Control (1-800-222-1222)',
    ],
    [
      'Altered mental status of unknown cause',
      'Miosis (opioid) or mydriasis (sympathomimetic)',
      'Respiratory depression or apnea',
      'Seizures with unknown ingestion',
      'QRS widening or QTc prolongation on ECG',
      'Metabolic acidosis with elevated anion gap',
    ],
    'Toxidromes: Opioid (miosis, CNS/resp depression), Sympathomimetic (mydriasis, tachy, HTN), Anticholinergic (mydriasis, dry, tachy), Cholinergic (SLUDGE/DUMBELS).',
  ),

  // ── Trauma ───────────────────────────────────────────────────────────────
  em(
    'trauma-atls',
    'Trauma Assessment (ATLS)',
    'Evaluación de Trauma (ATLS)',
    'trauma',
    1,
    'Primary survey completed within 5-10 min',
    [
      'A: Airway with C-spine protection (jaw thrust, intubation PRN)',
      'B: Breathing — assess, BVM, chest decompression, intubation',
      'C: Circulation — hemorrhage control, 2 large-bore IVs, blood products',
      'D: Disability — GCS, pupil exam, glucose',
      'E: Exposure — full undress, logroll, prevent hypothermia',
      'Massive transfusion protocol (1:1:1 pRBC:FFP:platelets)',
      'FAST exam for free fluid',
    ],
    [
      'Mechanism: high-speed MVC, fall >20 ft, penetrating torso',
      'GCS <8 (intubate for airway protection)',
      'Hemodynamic instability despite fluids',
      'Pelvic instability (apply binder)',
      'Expanding hematoma or uncontrolled hemorrhage',
      'Signs of tension pneumothorax or cardiac tamponade',
    ],
    'ABCDE: Airway, Breathing, Circulation, Disability, Exposure. Massive hemorrhage: MARCH — Massive hemorrhage, Airway, Respiration, Circulation, Hypothermia.',
  ),
];

// ---------------------------------------------------------------------------
// Exported database & lookup functions
// ---------------------------------------------------------------------------

/** Complete emergency medicine database */
export const emergencyDatabase: EmergencyEntry[] = entries;

/**
 * Find an emergency entry by ID.
 */
export function getEmergencyById(id: string): EmergencyEntry | undefined {
  return entries.find((e) => e.id === id);
}

/**
 * Filter entries by category.
 */
export function getEmergenciesByCategory(cat: EmergencyCategory): EmergencyEntry[] {
  return entries.filter((e) => e.category === cat);
}

/**
 * Filter entries by triage level.
 */
export function getEmergenciesByTriageLevel(level: TriageLevel): EmergencyEntry[] {
  return entries.filter((e) => e.triageLevel === level);
}

/**
 * Return all unique categories present in the database.
 */
export function getAvailableEmergencyCategories(): EmergencyCategory[] {
  return [...new Set(entries.map((e) => e.category))];
}

/**
 * Full-text search across all textual fields (name, interventions, red flags, mnemonics).
 * Returns entries ranked by number of field matches (descending).
 */
export function searchEmergencies(query: string): EmergencyEntry[] {
  const q = query.toLowerCase();

  const scored = entries.map((e) => {
    let score = 0;
    if (e.name.toLowerCase().includes(q)) score += 3;
    if (e.nameEs.toLowerCase().includes(q)) score += 3;
    if (e.id.toLowerCase().includes(q)) score += 2;
    if (e.mnemonics.toLowerCase().includes(q)) score += 2;
    if (e.timeToTreat.toLowerCase().includes(q)) score += 1;
    if (e.keyInterventions.some((i) => i.toLowerCase().includes(q))) score += 1;
    if (e.redFlags.some((f) => f.toLowerCase().includes(q))) score += 1;
    return { entry: e, score };
  });

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((s) => s.entry);
}
