/**
 * Toxicology Database
 *
 * Comprehensive database of 36 toxicology entries covering overdoses,
 * toxidromes, environmental toxins, envenomations, household toxins,
 * industrial toxins, medication toxicities, substance abuse, and antidotes.
 *
 * IMPORTANT: This content is for educational purposes only. In any
 * poisoning emergency, call Poison Control (1-800-222-1222) or 911.
 */

// ============================================
// Types
// ============================================

export type ToxicologyDatabaseCategory =
  | 'overdose'
  | 'toxidrome'
  | 'environmental-toxin'
  | 'substance-abuse'
  | 'antidote'
  | 'envenomation'
  | 'household-toxin'
  | 'industrial-toxin'
  | 'medication-toxicity';

export interface ToxicologyEntry {
  id: string;
  name: string;
  category: ToxicologyDatabaseCategory;
  description: string;
  mechanism: string;
  clinicalPresentation: string[];
  diagnosticWorkup: string[];
  management: string[];
  antidote?: string;
  keyPearls: string[];
  references: string[];
}

// ============================================
// Compact helper
// ============================================

function te(
  id: string,
  name: string,
  category: ToxicologyDatabaseCategory,
  description: string,
  mechanism: string,
  clinicalPresentation: string[],
  diagnosticWorkup: string[],
  management: string[],
  antidote: string | undefined,
  keyPearls: string[],
  references: string[],
): ToxicologyEntry {
  return {
    id, name, category, description, mechanism,
    clinicalPresentation, diagnosticWorkup, management,
    ...(antidote != null ? { antidote } : {}),
    keyPearls, references,
  };
}

// ============================================
// Database
// ============================================

export const TOXICOLOGY_ENTRIES: Record<string, ToxicologyEntry> = {

  // ── Overdoses (6) ─────────────────────────

  'acetaminophen-overdose': te(
    'acetaminophen-overdose', 'Acetaminophen Overdose', 'overdose',
    'Most common single-agent overdose in the US. Hepatotoxicity develops via accumulation of the toxic metabolite NAPQI when glutathione stores are depleted.',
    'CYP2E1 converts acetaminophen to NAPQI. Normally conjugated by glutathione. In overdose, glutathione depleted leading to hepatocellular necrosis (centrilobular zone 3).',
    [
      'Phase 1 (0-24h): nausea, vomiting, or asymptomatic',
      'Phase 2 (24-72h): RUQ pain, rising transaminases',
      'Phase 3 (72-96h): hepatic failure, coagulopathy, encephalopathy',
      'Phase 4 (>96h): recovery or death',
    ],
    [
      'Serum acetaminophen level at 4h post-ingestion',
      'Plot on Rumack-Matthew nomogram',
      'LFTs (AST, ALT), INR/PT, BMP, lactate',
      'Serum creatinine and lipase',
    ],
    [
      'Activated charcoal if within 1-2h of ingestion',
      'N-acetylcysteine (NAC): 21h IV protocol or 72h oral protocol',
      'Continue NAC until ALT trending down, INR <2, APAP undetectable',
      'King\'s College Criteria for transplant evaluation',
    ],
    'N-acetylcysteine (NAC)',
    [
      'Toxic dose: >150 mg/kg acute single ingestion',
      'NAC most effective within 8h but beneficial even at 24h+',
      'Beware combination products containing acetaminophen',
      'Chronic ingestion: nomogram NOT applicable; treat if elevated ALT + detectable APAP',
    ],
    ['Goldfrank\'s Toxicologic Emergencies', 'Tintinalli\'s Emergency Medicine'],
  ),

  'salicylate-overdose': te(
    'salicylate-overdose', 'Salicylate Overdose', 'overdose',
    'Aspirin toxicity causes a complex mixed acid-base disturbance. Primary respiratory alkalosis with superimposed anion gap metabolic acidosis.',
    'Direct stimulation of medullary respiratory center (respiratory alkalosis). Uncoupling of oxidative phosphorylation causes metabolic acidosis and hyperthermia. Inhibits Krebs cycle enzymes.',
    [
      'Tinnitus, hearing loss',
      'Nausea, vomiting, epigastric pain',
      'Tachypnea and hyperpnea (Kussmaul breathing)',
      'Diaphoresis, hyperthermia',
      'Altered mental status, seizures in severe cases',
      'Pulmonary edema (non-cardiogenic)',
    ],
    [
      'Serum salicylate level (serial q2h until trending down)',
      'ABG/VBG: expect mixed respiratory alkalosis + metabolic acidosis',
      'BMP (anion gap), glucose, lactate',
      'CBC, coagulation studies',
      'Chest X-ray if respiratory symptoms',
    ],
    [
      'Activated charcoal if within 1-2h (consider MDAC for large ingestions)',
      'Sodium bicarbonate infusion for urinary alkalinization (target urine pH 7.5-8.0)',
      'IV fluids with dextrose (CNS glucose may be low despite normal serum)',
      'Hemodialysis for level >100 mg/dL, AMS, pulmonary edema, renal failure, refractory acidosis',
      'Do NOT intubate unless absolutely necessary (loss of respiratory compensation can be fatal)',
    ],
    'Sodium bicarbonate (urinary alkalinization); hemodialysis for severe cases',
    [
      'Avoid intubation if possible: minute ventilation hard to match',
      'Any decline in mental status is a dialysis indication',
      'Oil of wintergreen (methyl salicylate): 1 tsp = 7g aspirin, rapidly lethal in children',
      'Chronic salicylism can present at much lower levels with severe symptoms',
    ],
    ['Goldfrank\'s Toxicologic Emergencies', 'EXTRIP guidelines on salicylate'],
  ),

  'opioid-overdose': te(
    'opioid-overdose', 'Opioid Overdose', 'overdose',
    'Leading cause of overdose death in the US. Classic triad: respiratory depression, CNS depression, and miosis.',
    'Agonism at mu-opioid receptors in brainstem respiratory center depresses ventilatory drive. Decreased tidal volume and respiratory rate leading to hypoxia, hypercarbia, and respiratory arrest.',
    [
      'Classic triad: respiratory depression, decreased LOC, miosis',
      'Cyanosis (blue/gray lips and fingernails)',
      'Bradycardia, hypotension, hypothermia',
      'Pulmonary edema (especially heroin)',
      'Absent bowel sounds',
    ],
    [
      'Clinical diagnosis based on presentation',
      'Pulse oximetry, ABG/VBG',
      'Urine drug screen (may not detect synthetic opioids)',
      'ECG (QTc for methadone)',
      'CXR if concern for aspiration or pulmonary edema',
    ],
    [
      'Immediate airway management: BVM ventilation',
      'Naloxone: 0.04-0.4 mg IV (titrate to respirations, not consciousness)',
      'Intranasal naloxone 4 mg for lay rescue',
      'Repeat naloxone q2-3 min as needed; may need >10 mg for fentanyl',
      'Monitor for re-sedation (naloxone duration 30-90 min vs hours for most opioids)',
      'Consider naloxone drip for long-acting opioids',
    ],
    'Naloxone (Narcan)',
    [
      'Titrate naloxone to adequate respirations, not full arousal (reduces withdrawal)',
      'Fentanyl may require massive naloxone doses',
      'Xylazine contamination: NOT reversed by naloxone',
      'Loss of tolerance after abstinence is a major risk factor',
      'Good Samaritan laws protect bystanders calling 911',
    ],
    ['AHA Opioid-Associated OHCA Guidelines', 'CDC Drug Overdose Data'],
  ),

  'benzodiazepine-overdose': te(
    'benzodiazepine-overdose', 'Benzodiazepine Overdose', 'overdose',
    'Rarely lethal alone but extremely dangerous in combination with opioids or alcohol. Enhances GABA-A inhibition causing CNS and respiratory depression.',
    'Positive allosteric modulation at GABA-A receptors increases chloride channel opening frequency, enhancing inhibitory neurotransmission.',
    [
      'CNS depression: drowsiness to coma',
      'Slurred speech, ataxia',
      'Respiratory depression (especially with co-ingestants)',
      'Hypotension, hypothermia',
      'Paradoxical agitation in some patients',
    ],
    [
      'Clinical diagnosis; urine drug screen',
      'BMP, glucose',
      'ECG (rule out co-ingestants)',
      'Serum APAP and salicylate levels (rule out co-ingestion)',
      'Ethanol level if suspected',
    ],
    [
      'Supportive care: airway management is cornerstone',
      'Flumazenil generally NOT recommended in acute overdose',
      'IV fluids for hypotension',
      'Intubation if unable to protect airway',
    ],
    'Flumazenil (generally avoided in acute overdose due to seizure risk)',
    [
      'Benzo OD alone rarely fatal; co-ingestion with opioids or alcohol dramatically increases risk',
      'Flumazenil contraindicated if chronic benzo use (precipitates seizures)',
      'Flumazenil contraindicated if co-ingestion with TCA or other seizure-prone agent',
      'Novel designer benzodiazepines (clonazolam, flualprazolam) are more potent',
    ],
    ['Goldfrank\'s Toxicologic Emergencies'],
  ),

  'tca-overdose': te(
    'tca-overdose', 'Tricyclic Antidepressant Overdose', 'overdose',
    'Lethal in overdose. Multi-mechanism toxicity including sodium channel blockade, anticholinergic effects, alpha blockade, and potassium channel blockade.',
    'Sodium channel blockade (wide QRS, arrhythmias), muscarinic antagonism (anticholinergic syndrome), alpha-1 blockade (hypotension), GABA-A antagonism (seizures), potassium channel blockade (QTc prolongation).',
    [
      'Anticholinergic toxidrome: tachycardia, mydriasis, dry skin, urinary retention, ileus',
      'Cardiac: wide QRS (>100 ms), right axis deviation, R wave in aVR >3 mm',
      'Seizures',
      'Hypotension refractory to fluids',
      'Altered mental status progressing to coma',
    ],
    [
      'ECG: QRS width, R wave in aVR, QTc',
      'Serial ECGs',
      'BMP, glucose, lactate',
      'Serum APAP level (rule out co-ingestion)',
      'ABG if acidotic',
    ],
    [
      'Sodium bicarbonate: 1-2 mEq/kg IV bolus for QRS >100 ms or ventricular arrhythmia',
      'Goal pH 7.45-7.55; maintain with bicarb drip',
      'Benzodiazepines for seizures (avoid phenytoin)',
      'Norepinephrine for refractory hypotension (avoid pure vasodilators)',
      'Lipid emulsion therapy for refractory cardiac toxicity',
      'Do NOT use class IA or IC antiarrhythmics',
    ],
    'Sodium bicarbonate',
    [
      'QRS >100 ms: seizure risk. QRS >160 ms: arrhythmia risk',
      'R wave in aVR >3 mm is sensitive marker of TCA toxicity',
      'Avoid all class IA/IC antiarrhythmics and physostigmine',
      'Patients can deteriorate rapidly from alert to seizure/arrest',
      'Ingestion of >10 mg/kg is potentially life-threatening',
    ],
    ['Goldfrank\'s Toxicologic Emergencies', 'Tintinalli\'s Emergency Medicine'],
  ),

  'lithium-toxicity': te(
    'lithium-toxicity', 'Lithium Toxicity', 'overdose',
    'Narrow therapeutic index. Toxicity can be acute, chronic, or acute-on-chronic with different presentations and management priorities.',
    'Lithium substitutes for sodium in neuronal ion channels, disrupts second messenger systems (inositol pathway), affects neurotransmitter release. Toxicity causes neuronal dysfunction.',
    [
      'Acute: GI predominant (nausea, vomiting, diarrhea)',
      'Chronic: neurological predominant (tremor, ataxia, confusion, hyperreflexia)',
      'Severe: seizures, coma, cardiac dysrhythmias',
      'Nephrogenic diabetes insipidus',
      'Serotonin syndrome if combined with serotonergic drugs',
    ],
    [
      'Serum lithium level (serial q2-4h)',
      'BMP: creatinine (renal function critical), sodium',
      'TSH (chronic use: hypothyroidism)',
      'ECG (may show T-wave flattening, sinus node dysfunction)',
      'Urine output monitoring',
    ],
    [
      'Aggressive IV normal saline hydration',
      'Whole bowel irrigation for acute ingestion (charcoal does NOT bind lithium)',
      'Hemodialysis: level >4 mEq/L with symptoms, renal impairment, or severe neurotoxicity',
      'Recheck level 6h post-dialysis (rebound from tissues)',
      'Avoid NSAIDs, ACE inhibitors, diuretics (increase lithium levels)',
    ],
    'Hemodialysis (no specific pharmacologic antidote)',
    [
      'Charcoal does NOT adsorb lithium',
      'Chronic toxicity is often more severe at lower levels than acute',
      'Dehydration and renal impairment rapidly precipitate toxicity',
      'Post-dialysis rebound is common; recheck levels at 6h',
      'Neurological sequelae (SILENT syndrome) can be permanent',
    ],
    ['EXTRIP guidelines on lithium', 'Goldfrank\'s Toxicologic Emergencies'],
  ),

  // ── Toxidromes (5) ────────────────────────

  'cholinergic-toxidrome': te(
    'cholinergic-toxidrome', 'Cholinergic Toxidrome', 'toxidrome',
    'Excessive acetylcholine stimulation at muscarinic and nicotinic receptors. Classic presentation with the SLUDGE/BBB or DUMBELS mnemonic.',
    'Acetylcholinesterase inhibition leads to accumulation of acetylcholine at muscarinic (glands, smooth muscle, heart) and nicotinic (skeletal muscle, ganglia) receptors.',
    [
      'DUMBELS: Diarrhea, Urination, Miosis, Bronchorrhea/Bronchospasm, Emesis, Lacrimation, Salivation',
      'Nicotinic: fasciculations, muscle weakness, paralysis',
      'Bradycardia (muscarinic) or tachycardia (nicotinic)',
      'Seizures and coma in severe cases',
      'Respiratory failure from bronchospasm + secretions + diaphragm weakness',
    ],
    [
      'Clinical diagnosis by toxidrome recognition',
      'RBC cholinesterase (butyrylcholinesterase) levels',
      'BMP, glucose, lactate',
      'CXR (pulmonary edema, aspiration)',
      'ECG',
    ],
    [
      'Atropine: 1-2 mg IV, double dose q3-5 min until secretions dry (may need massive doses)',
      'Pralidoxime (2-PAM): 1-2 g IV over 15-30 min; reactivates acetylcholinesterase before aging',
      'Benzodiazepines for seizures',
      'Aggressive airway suctioning and ventilatory support',
      'Decontamination: remove clothing, wash skin with soap/water',
    ],
    'Atropine + pralidoxime (2-PAM)',
    [
      'Endpoint for atropine: drying of secretions, NOT pupil size or heart rate',
      'Pralidoxime must be given before enzyme "aging" (irreversible binding) occurs',
      'May need hundreds of mg of atropine in severe organophosphate poisoning',
      'Common causes: organophosphates, carbamates, nerve agents',
      'Intermediate syndrome: weakness 24-96h post-exposure despite treatment',
    ],
    ['Goldfrank\'s Toxicologic Emergencies', 'CDC chemical emergency guidelines'],
  ),

  'anticholinergic-toxidrome': te(
    'anticholinergic-toxidrome', 'Anticholinergic Toxidrome', 'toxidrome',
    'Blockade of muscarinic acetylcholine receptors. Classic mnemonic: Red as a beet, Dry as a bone, Blind as a bat, Mad as a hatter, Hot as a hare.',
    'Competitive antagonism at muscarinic receptors blocks parasympathetic activity. Affects CNS (delirium), peripheral glands (anhidrosis), eyes (mydriasis), bladder (retention), and GI (ileus).',
    [
      'Mydriasis (blind as a bat)',
      'Dry skin and mucous membranes (dry as a bone)',
      'Flushed skin (red as a beet)',
      'Hyperthermia (hot as a hare)',
      'Delirium, agitation, hallucinations (mad as a hatter)',
      'Tachycardia, urinary retention, decreased bowel sounds, ileus',
    ],
    [
      'Clinical diagnosis by toxidrome recognition',
      'ECG: sinus tachycardia, QRS/QTc (rule out sodium channel blockade)',
      'BMP, glucose',
      'Bladder scan (urinary retention)',
      'Core temperature',
    ],
    [
      'Supportive care: external cooling, IV fluids',
      'Benzodiazepines for agitation and seizures',
      'Physostigmine 0.5-2 mg slow IV (if no contraindications)',
      'Foley catheter for urinary retention',
      'Avoid restraints alone (worsens hyperthermia)',
    ],
    'Physostigmine (use with caution)',
    [
      'Differentiate from sympathomimetic toxidrome: anticholinergic has DRY skin, sympathomimetic has DIAPHORETIC skin',
      'Physostigmine contraindicated if: wide QRS, seizure history, bowel/bladder obstruction',
      'Common causes: antihistamines (diphenhydramine), TCAs, atropine, scopolamine, jimsonweed',
      'Can cause hyperthermia via impaired sweating, not increased heat production',
    ],
    ['Goldfrank\'s Toxicologic Emergencies'],
  ),

  'sympathomimetic-toxidrome': te(
    'sympathomimetic-toxidrome', 'Sympathomimetic Toxidrome', 'toxidrome',
    'Excessive catecholamine stimulation from drugs or endogenous release. Life-threatening via cardiovascular complications, seizures, and hyperthermia.',
    'Direct or indirect stimulation of alpha and beta adrenergic receptors, or inhibition of catecholamine reuptake. Increases heart rate, blood pressure, and metabolic rate.',
    [
      'Tachycardia, hypertension',
      'Hyperthermia, diaphoresis',
      'Mydriasis (dilated pupils)',
      'Agitation, psychosis, paranoia',
      'Seizures',
      'Chest pain, palpitations',
    ],
    [
      'ECG: tachycardia, ischemia, arrhythmia',
      'Troponin if chest pain',
      'BMP, CK (rhabdomyolysis), lactate',
      'Core temperature',
      'Head CT if focal neuro deficit (hemorrhagic stroke)',
      'Urine drug screen',
    ],
    [
      'Benzodiazepines first-line for agitation, seizures, and sympatholysis',
      'External cooling for hyperthermia',
      'Cocaine chest pain: benzos + nitrates (avoid beta-blockers: unopposed alpha)',
      'IV fluids, monitor for rhabdomyolysis',
      'Phentolamine for refractory hypertension',
    ],
    undefined,
    [
      'No specific antidote; treatment is supportive with benzodiazepines',
      'AVOID beta-blockers in cocaine toxicity (unopposed alpha stimulation)',
      'Common causes: cocaine, amphetamines, MDMA, synthetic cathinones',
      'Rhabdomyolysis, DIC, and multiorgan failure are feared complications',
      'Hyperthermia >41C is life-threatening and requires aggressive cooling',
    ],
    ['Goldfrank\'s Toxicologic Emergencies', 'AHA ACLS Guidelines'],
  ),

  'serotonin-syndrome': te(
    'serotonin-syndrome', 'Serotonin Syndrome', 'toxidrome',
    'Life-threatening condition from excess serotonergic activity. Triad: altered mental status, autonomic instability, neuromuscular hyperactivity.',
    'Excess serotonin (5-HT) at central and peripheral receptors, primarily 5-HT2A. Caused by combinations of serotonergic drugs or overdose of a single serotonergic agent.',
    [
      'Neuromuscular: clonus (especially lower extremity), hyperreflexia, tremor, rigidity',
      'Autonomic: hyperthermia, diaphoresis, tachycardia, hypertension, diarrhea',
      'Mental status: agitation, confusion, restlessness',
      'Mydriasis',
      'Inducible clonus is the most reliable clinical sign',
    ],
    [
      'Clinical diagnosis using Hunter Criteria',
      'Core temperature',
      'BMP, CK (rhabdomyolysis risk), LFTs',
      'CBC, coagulation studies if DIC suspected',
      'Rule out NMS, anticholinergic toxicity, malignant hyperthermia',
    ],
    [
      'Discontinue all serotonergic agents immediately',
      'Benzodiazepines for agitation and muscle rigidity',
      'Cyproheptadine 12 mg PO initial, then 2 mg q2h (5-HT2A antagonist)',
      'Active cooling for hyperthermia',
      'Intubation and paralysis (non-depolarizing agents) if severe/refractory',
      'Avoid dantrolene (not effective)',
    ],
    'Cyproheptadine',
    [
      'Key differentiator from anticholinergic: serotonin syndrome has CLONUS and DIAPHORESIS',
      'Key differentiator from NMS: serotonin syndrome onset is rapid (hours), NMS is gradual (days)',
      'Hunter Criteria: requires serotonergic agent + clonus (spontaneous/inducible/ocular) or tremor + hyperreflexia',
      'MAOI + SSRI is highest risk combination',
      'Symptoms typically resolve within 24-72h after offending agent discontinued',
    ],
    ['Hunter Serotonin Toxicity Criteria', 'Goldfrank\'s Toxicologic Emergencies'],
  ),

  'neuroleptic-malignant-syndrome': te(
    'neuroleptic-malignant-syndrome', 'Neuroleptic Malignant Syndrome (NMS)', 'toxidrome',
    'Rare but life-threatening reaction to dopamine antagonists. Lead-pipe rigidity, hyperthermia, altered mental status, and autonomic dysfunction.',
    'Central dopamine D2 receptor blockade in hypothalamus (thermoregulation) and basal ganglia (extrapyramidal). Leads to muscle rigidity, impaired heat dissipation, and autonomic instability.',
    [
      'Lead-pipe rigidity (not clonus)',
      'Hyperthermia (often >40C)',
      'Altered mental status (confusion to coma)',
      'Autonomic instability: tachycardia, labile BP, diaphoresis',
      'Markedly elevated CK (often >1000 U/L)',
    ],
    [
      'CK (often massively elevated)',
      'BMP, LFTs, coagulation studies',
      'Core temperature',
      'CBC, iron level (low iron is risk factor)',
      'Rule out serotonin syndrome, malignant hyperthermia, infection',
    ],
    [
      'Discontinue offending agent immediately',
      'Aggressive cooling and IV fluids',
      'Dantrolene 1-2.5 mg/kg IV for severe rigidity/hyperthermia',
      'Bromocriptine 2.5 mg PO/NG q8h (dopamine agonist)',
      'Benzodiazepines for agitation',
      'Monitor and treat rhabdomyolysis aggressively',
    ],
    'Dantrolene and/or bromocriptine',
    [
      'Onset is GRADUAL (days to weeks) unlike serotonin syndrome (hours)',
      'Lead-pipe rigidity (NOT clonus) distinguishes from serotonin syndrome',
      'CK is markedly elevated (usually >1000); risk of AKI from rhabdomyolysis',
      'Can occur with any dopamine antagonist including antiemetics (metoclopramide)',
      'Mortality 5-20% even with treatment; death from renal failure, DIC, or respiratory failure',
    ],
    ['Goldfrank\'s Toxicologic Emergencies', 'DSM-5 diagnostic criteria'],
  ),

  // ── Environmental Toxins (3) ──────────────

  'carbon-monoxide': te(
    'carbon-monoxide', 'Carbon Monoxide Poisoning', 'environmental-toxin',
    'Odorless, colorless gas. Leading cause of poisoning death worldwide. Causes tissue hypoxia by displacing oxygen from hemoglobin and impairing cellular respiration.',
    'CO binds hemoglobin with 240x greater affinity than O2, forming carboxyhemoglobin (COHb). Shifts O2-hemoglobin dissociation curve LEFT (impairs O2 delivery). Also binds cytochrome oxidase directly.',
    [
      'Headache (most common early symptom)',
      'Nausea, vomiting, dizziness',
      'Confusion, syncope, altered mental status',
      'Cherry-red skin (classic but rarely seen)',
      'Myocardial ischemia, arrhythmias',
      'Seizures, coma in severe cases',
      'Delayed neuropsychiatric syndrome (DNS) days to weeks later',
    ],
    [
      'COHb level on co-oximetry (NOT standard pulse oximetry which is falsely normal)',
      'ABG with co-oximetry',
      'ECG, troponin (myocardial injury common)',
      'BMP, lactate',
      'Consider neuropsychiatric testing at baseline',
      'Pregnancy test (fetus extremely vulnerable)',
    ],
    [
      'High-flow 100% O2 via NRB mask (half-life of COHb: 5h room air vs 60-90 min on 100% O2)',
      'Hyperbaric oxygen (HBO) for: LOC, COHb >25%, pregnancy with COHb >15%, cardiac ischemia',
      'IV fluids, cardiac monitoring',
      'Evacuate source and ventilate area',
      'Monitor for delayed neuropsychiatric syndrome (2-40 days post)',
    ],
    'High-flow oxygen; hyperbaric oxygen in severe cases',
    [
      'Pulse oximetry reads falsely normal (cannot distinguish COHb from O2Hb)',
      'Always think CO in multiple patients from same location with headache/nausea',
      'Sources: house fires, generators, furnaces, car exhaust, charcoal grills indoors',
      'Delayed neuropsychiatric syndrome: cognitive changes, personality changes, parkinsonism',
      'Fetus is at extreme risk: fetal Hb has even higher CO affinity',
    ],
    ['Undersea and Hyperbaric Medical Society', 'Goldfrank\'s Toxicologic Emergencies'],
  ),

  'cyanide-poisoning': te(
    'cyanide-poisoning', 'Cyanide Poisoning', 'environmental-toxin',
    'Rapidly lethal cellular poison. Inhibits cytochrome oxidase halting aerobic metabolism. Causes cellular asphyxia despite adequate oxygen delivery.',
    'Cyanide binds ferric iron (Fe3+) in cytochrome c oxidase (Complex IV), blocking electron transport chain. Cells cannot utilize oxygen, shifting to anaerobic metabolism with severe lactic acidosis.',
    [
      'Rapid onset: headache, dizziness, confusion, anxiety',
      'Tachycardia followed by bradycardia',
      'Cherry-red skin (rarely seen in practice)',
      'Seizures, coma',
      'Severe lactic acidosis with high venous O2 saturation',
      'Cardiovascular collapse and death within minutes if untreated',
    ],
    [
      'Elevated lactate is hallmark (>8 mmol/L highly suggestive)',
      'ABG: severe metabolic acidosis',
      'Narrowed arterio-venous O2 difference (cells cannot extract O2)',
      'Serum cyanide level (usually not available in time for treatment)',
      'BMP, lactate, co-oximetry (rule out concurrent CO in fire victims)',
    ],
    [
      'Hydroxocobalamin (Cyanokit): 5g IV over 15 min (first-line)',
      'Sodium thiosulfate 12.5 g IV (can be used alone or with hydroxocobalamin)',
      'Amyl nitrite pearls (inhaled) if IV access delayed',
      'High-flow 100% O2',
      'Sodium bicarbonate for acidosis',
      'Treat empirically in fire victims with AMS and lactic acidosis',
    ],
    'Hydroxocobalamin (Cyanokit); sodium thiosulfate',
    [
      'Think cyanide in fire victims with persistent lactic acidosis despite O2 therapy',
      'Bitter almond odor: only 40-60% of population can detect it',
      'Hydroxocobalamin preferred over nitrites (nitrites cause methemoglobinemia)',
      'Sources: house fires (burning plastics/synthetics), industrial, ingestion (acetonitrile, amygdalin)',
      'Lactic acidosis + high venous O2 = cells cannot use oxygen (classic cyanide finding)',
    ],
    ['Goldfrank\'s Toxicologic Emergencies', 'ACMT position statement'],
  ),

  'organophosphate-poisoning': te(
    'organophosphate-poisoning', 'Organophosphate Poisoning', 'environmental-toxin',
    'Irreversible acetylcholinesterase inhibitor. Agricultural pesticide poisoning is a major cause of death worldwide. Causes severe cholinergic crisis.',
    'Phosphorylates the serine hydroxyl group on acetylcholinesterase, causing irreversible inhibition. Acetylcholine accumulates at muscarinic and nicotinic receptors. "Aging" makes enzyme bond permanent.',
    [
      'Muscarinic (DUMBELS): diarrhea, urination, miosis, bronchospasm/bronchorrhea, emesis, lacrimation, salivation',
      'Nicotinic: fasciculations, weakness, paralysis, tachycardia',
      'CNS: seizures, altered mental status, coma',
      'Respiratory failure from bronchospasm + secretions + diaphragm paralysis',
      'Garlic/petroleum-like odor',
    ],
    [
      'Clinical diagnosis: cholinergic toxidrome',
      'RBC acetylcholinesterase and plasma butyrylcholinesterase levels',
      'ABG, BMP, glucose',
      'CXR (pulmonary edema)',
      'ECG',
    ],
    [
      'Decontamination: remove all clothing, wash skin with soap/water (protect rescuers)',
      'Atropine 2-4 mg IV; double dose q5 min until secretions dry (may need 10-100+ mg)',
      'Pralidoxime (2-PAM) 1-2 g IV over 30 min; must give BEFORE enzyme aging',
      'Benzodiazepines for seizures (diazepam preferred)',
      'Intubation and mechanical ventilation as needed',
      'Avoid succinylcholine (prolonged paralysis)',
    ],
    'Atropine + pralidoxime (2-PAM)',
    [
      'Atropine endpoint: drying of secretions (NOT pupil size)',
      'Pralidoxime timing is critical: must give before aging (~24-48h for most OPs)',
      'Intermediate syndrome: recurrent weakness at 24-96h, affects respiratory muscles',
      'OPIDN: delayed polyneuropathy weeks after exposure',
      'Dermal absorption means full decontamination is essential; protect healthcare workers',
    ],
    ['WHO Organophosphate Guidelines', 'Goldfrank\'s Toxicologic Emergencies'],
  ),

  // ── Envenomation (3) ──────────────────────

  'pit-viper-envenomation': te(
    'pit-viper-envenomation', 'Pit Viper Envenomation (Crotalidae)', 'envenomation',
    'Most common venomous snakebite in North America (rattlesnakes, copperheads, cottonmouths). Venom causes local tissue destruction, coagulopathy, and systemic effects.',
    'Complex venom containing metalloproteinases (tissue destruction), phospholipase A2 (myotoxicity), serine proteases (coagulopathy), and disintegrins (platelet dysfunction). Causes venom-induced consumptive coagulopathy.',
    [
      'Local: pain, swelling, ecchymosis progressing from bite site',
      'Fang marks (may be single or double)',
      'Coagulopathy: elevated PT/INR, low fibrinogen, thrombocytopenia',
      'Systemic: nausea, vomiting, metallic taste, paresthesias',
      'Severe: hypotension, compartment syndrome (rare), angioedema',
    ],
    [
      'Mark leading edge of swelling with time stamps q15-30 min',
      'CBC with platelets, PT/INR, fibrinogen (serial q6h)',
      'BMP, CK',
      'Blood type and screen',
      'Do NOT measure circumference only; check labs for coagulopathy',
    ],
    [
      'Crotalidae polyvalent immune Fab (CroFab): 4-6 vials IV initial, repeat until progression stops',
      'Anavip (F(ab\')2): alternative antivenom with longer half-life',
      'Wound care, tetanus prophylaxis',
      'Elevate and immobilize affected limb',
      'Serial labs q6h for recurrent coagulopathy (common days 7-14)',
      'Do NOT: tourniquet, ice, incision/suction, electric shock',
    ],
    'Crotalidae polyvalent immune Fab (CroFab) or Anavip',
    [
      'Approximately 25% of pit viper bites are "dry" (no venom injected)',
      'Observe 8-12h minimum even if initially asymptomatic',
      'Recurrent coagulopathy after antivenom can occur days later (re-check labs)',
      'Copperhead bites often mild; antivenom may not be needed',
      'Fasciotomy is almost never needed; antivenom treats compartment pressure',
    ],
    ['ACMT/AACT unified treatment algorithm', 'Goldfrank\'s Toxicologic Emergencies'],
  ),

  'black-widow-spider': te(
    'black-widow-spider', 'Black Widow Spider Envenomation', 'envenomation',
    'Latrodectus species. Venom (alpha-latrotoxin) causes massive neurotransmitter release. Painful envenomation with muscle spasm but rarely fatal in adults.',
    'Alpha-latrotoxin binds presynaptic neuronal receptors, causing massive exocytosis of acetylcholine and norepinephrine. Depletes neurotransmitter stores leading to sustained muscle contraction.',
    [
      'Immediate sharp pain at bite site with minimal local findings',
      'Severe muscle cramping and rigidity (especially abdominal: "board-like abdomen")',
      'Diffuse pain, diaphoresis, hypertension, tachycardia',
      'Nausea, vomiting',
      'Fasciculations, muscle spasms',
      'Target lesion sometimes visible at bite site',
    ],
    [
      'Clinical diagnosis based on history and presentation',
      'BMP, CBC, CK (mild rhabdomyolysis)',
      'Lipase (abdominal rigidity may mimic acute abdomen)',
      'ECG',
      'UA (myoglobinuria if rhabdomyolysis)',
    ],
    [
      'IV opioids and benzodiazepines for pain and muscle spasm',
      'Latrodectus antivenom (Antivenin) for severe cases: one vial IV',
      'Calcium gluconate historically used but limited evidence of benefit',
      'Wound care, tetanus prophylaxis',
      'NSAIDs for mild cases',
    ],
    'Latrodectus antivenom (for severe envenomation)',
    [
      'Board-like abdomen can mimic acute surgical abdomen: obtain history carefully',
      'Symptoms typically resolve in 1-3 days without antivenom',
      'Antivenom highly effective but serum sickness risk (equine-derived)',
      'Highest risk: children, elderly, those with cardiovascular disease',
      'Female spider is medically significant; males rarely bite',
    ],
    ['Goldfrank\'s Toxicologic Emergencies', 'Toxicon journal reviews'],
  ),

  'scorpion-envenomation': te(
    'scorpion-envenomation', 'Scorpion Envenomation (Centruroides)', 'envenomation',
    'Bark scorpion (Centruroides sculpturatus) is the medically significant species in North America. Neurotoxic venom causes cranial nerve and somatic motor dysfunction.',
    'Venom toxins prolong sodium channel opening in neurons, causing repetitive depolarization and uncontrolled neurotransmitter release at neuromuscular junctions and autonomic synapses.',
    [
      'Local pain and paresthesias (tap test positive: exquisite tenderness)',
      'Cranial nerve dysfunction: roving eye movements, hypersalivation, dysphagia, dysarthria',
      'Motor hyperactivity: restlessness, flailing, involuntary movements',
      'Autonomic storm: tachycardia, hypertension, diaphoresis',
      'Respiratory distress in children',
    ],
    [
      'Clinical diagnosis based on geography and presentation',
      'Tap test: worsening pain with light tap over sting site',
      'Continuous monitoring: pulse oximetry, cardiac',
      'BMP, glucose',
      'No specific lab test for scorpion venom',
    ],
    [
      'Centruroides (scorpion) immune F(ab\')2 (Anascorp): 3 vials IV for severe envenomation',
      'Benzodiazepines for motor hyperactivity and agitation',
      'Avoid opioids in moderate-severe (can worsen respiratory depression)',
      'Supportive care: airway protection, IV fluids',
      'Local wound care, analgesics for mild cases',
    ],
    'Centruroides immune F(ab\')2 (Anascorp)',
    [
      'Most stings in US cause only local pain; severe systemic toxicity mainly in children',
      'The tap test is highly sensitive for bark scorpion envenomation',
      'Avoid opioids in severe envenomation: can worsen respiratory and neurologic symptoms',
      'Antivenom dramatically reduces ICU length of stay in pediatric cases',
      'Highest risk in southwestern US (Arizona, New Mexico)',
    ],
    ['Anascorp clinical trial data', 'Goldfrank\'s Toxicologic Emergencies'],
  ),

  // ── Household Toxins (3) ──────────────────

  'caustic-ingestion': te(
    'caustic-ingestion', 'Caustic Ingestion', 'household-toxin',
    'Strong acids (pH <2) or strong alkalis (pH >12) cause severe GI tract burns. Alkali causes deeper liquefactive necrosis. Drain cleaners and oven cleaners are most common.',
    'Alkalis: saponification of fats, protein denaturation, deep penetrating liquefactive necrosis. Acids: coagulative necrosis with eschar formation that limits depth (but still severe).',
    [
      'Oral/pharyngeal burns, drooling, dysphagia, odynophagia',
      'Chest or epigastric pain',
      'Stridor (laryngeal edema)',
      'Vomiting (may be bloody)',
      'Absence of oral burns does NOT exclude esophageal injury',
      'Perforation: peritoneal signs, subcutaneous emphysema, mediastinitis',
    ],
    [
      'Upper endoscopy (EGD) within 12-24h to grade injury',
      'CT chest/abdomen if perforation suspected',
      'CBC, BMP, lactate, type and screen',
      'CXR, upright abdominal film (free air)',
      'Avoid blind NG tube placement',
    ],
    [
      'NPO, IV access, IV fluids',
      'Dilution with small amount of water/milk only if immediate and no signs of perforation',
      'Do NOT induce emesis or neutralize (exothermic reaction)',
      'Pain control',
      'EGD within 12-24h (avoid days 5-15: highest perforation risk)',
      'Surgery for grade 3 injuries with perforation or necrosis',
      'Long-term: stricture surveillance, increased esophageal cancer risk',
    ],
    undefined,
    [
      'Absence of oropharyngeal burns does NOT exclude esophageal injury',
      'Do NOT neutralize (acid + base = exothermic reaction causing more injury)',
      'Avoid EGD days 5-15 post-ingestion (weakened wall, highest perforation risk)',
      'Grade 2b-3 injuries have >50-75% stricture rate requiring serial dilation',
      'Intentional ingestion tends to have larger volume and worse outcomes',
    ],
    ['Goldfrank\'s Toxicologic Emergencies', 'GI endoscopy guidelines'],
  ),

  'hydrocarbon-ingestion': te(
    'hydrocarbon-ingestion', 'Hydrocarbon Ingestion/Aspiration', 'household-toxin',
    'Petroleum distillates and related compounds. Primary danger is aspiration causing chemical pneumonitis, not GI absorption. Includes gasoline, kerosene, lamp oil, lighter fluid.',
    'Low viscosity hydrocarbons spread over large surface area in lungs, causing direct pneumocyte toxicity, surfactant disruption, and chemical pneumonitis. GI absorption varies by type.',
    [
      'Coughing, choking, gagging immediately after ingestion',
      'Respiratory: tachypnea, hypoxia, respiratory distress',
      'Chemical pneumonitis: crackles, wheezing (symptoms within 6h)',
      'CNS depression with certain hydrocarbons (toluene, gasoline)',
      'Cardiac arrhythmias (halogenated hydrocarbons: "sudden sniffing death")',
    ],
    [
      'CXR at presentation and at 6h (may be delayed)',
      'Pulse oximetry, ABG if symptomatic',
      'ECG (arrhythmia risk with halogenated hydrocarbons)',
      'BMP, CBC, LFTs (halogenated hydrocarbons: hepatotoxicity)',
      'Observe minimum 6h for respiratory symptoms',
    ],
    [
      'Do NOT induce emesis (aspiration risk far outweighs GI toxicity)',
      'Activated charcoal NOT recommended (poor adsorption, aspiration risk)',
      'Observe 6h: if asymptomatic with normal CXR at 6h, safe to discharge',
      'Supportive respiratory care if symptomatic',
      'Avoid catecholamines if possible (sensitized myocardium)',
      'GI decontamination only for CHAMP compounds: Camphor, Halogenated, Aromatic, Metals, Pesticides',
    ],
    undefined,
    [
      'Primary danger is ASPIRATION, not ingestion: do NOT induce vomiting',
      'CHAMP mnemonic: compounds that warrant GI decontamination despite aspiration risk',
      'Asymptomatic at 6h with normal CXR: safe for discharge',
      'Sudden sniffing death: halogenated hydrocarbons sensitize myocardium to catecholamines',
      'Lamp oil is particularly dangerous in children: low viscosity, easy to aspirate',
    ],
    ['Goldfrank\'s Toxicologic Emergencies', 'AACT/EAPCCT position statement'],
  ),

  'button-battery-ingestion': te(
    'button-battery-ingestion', 'Button Battery Ingestion', 'household-toxin',
    'Pediatric emergency. Esophageal impaction causes rapid alkaline necrosis via electrochemical injury. Can perforate esophagus within 2 hours.',
    'Battery generates external current in moist tissue. Hydroxide ions produced at negative pole create alkaline pH >12 within 15 minutes, causing liquefactive necrosis through esophageal wall.',
    [
      'May be asymptomatic initially',
      'Dysphagia, drooling, refusing to eat',
      'Cough, stridor',
      'Chest pain, abdominal pain',
      'Bloody emesis (late, ominous sign)',
      'Sentinel bleed heralding aortoesophageal fistula (catastrophic)',
    ],
    [
      'STAT AP and lateral X-ray (chest and abdomen)',
      'Double-disc sign on AP view differentiates from coin',
      'Step-off sign on lateral view',
      'CBC, type and screen (aortoesophageal fistula risk)',
    ],
    [
      'Esophageal battery: EMERGENCY endoscopic removal (<2h)',
      'Honey 10 mL q10 min while awaiting procedure (>12 months old only; botulism risk in infants)',
      'Sucralfate alternative to honey',
      'Gastric battery: observe if asymptomatic; remove if >48h or symptomatic',
      'Post-removal: surveillance for delayed fistula (aortoesophageal, tracheoesophageal)',
    ],
    undefined,
    [
      '20mm lithium batteries are most dangerous',
      'Injury begins within 15 minutes of esophageal impaction',
      'Aortoesophageal fistula: sentinel bleed followed by massive hemorrhage, >50% mortality',
      'Honey protocol is NOT for infants <12 months (botulism risk)',
      'Post-removal complications can occur days later: maintain high vigilance',
    ],
    ['National Capital Poison Center Button Battery Guidelines'],
  ),

  // ── Industrial Toxins (3) ─────────────────

  'methanol-poisoning': te(
    'methanol-poisoning', 'Methanol Poisoning', 'industrial-toxin',
    'Found in windshield fluid, fuels, solvents. Toxic metabolite (formic acid) causes visual loss and metabolic acidosis. 15-30 mL can be fatal.',
    'Alcohol dehydrogenase converts methanol to formaldehyde, then aldehyde dehydrogenase converts to formic acid. Formic acid inhibits cytochrome c oxidase (Complex IV), causing cellular asphyxia. Retinal toxicity due to high metabolic demand.',
    [
      'Initial: intoxication similar to ethanol (latency period 12-24h)',
      'Visual disturbance: blurred vision, "snowfield" vision, blindness',
      'Severe metabolic acidosis (anion gap)',
      'Headache, nausea, vomiting, abdominal pain',
      'Altered mental status, seizures, coma',
    ],
    [
      'Serum methanol level',
      'Osmol gap (elevated early) and anion gap (elevated late)',
      'ABG: severe anion gap metabolic acidosis',
      'BMP, lactate, ethanol level',
      'Fundoscopy: optic disc hyperemia or pallor',
    ],
    [
      'Fomepizole 15 mg/kg IV loading (ADH inhibitor; prevents toxic metabolite formation)',
      'Ethanol infusion alternative (target 100-150 mg/dL)',
      'Folinic/folic acid 1 mg/kg IV q4-6h (enhances formate metabolism)',
      'Hemodialysis: level >50 mg/dL, severe acidosis, visual symptoms, renal failure',
      'Sodium bicarbonate for severe acidosis',
    ],
    'Fomepizole (or ethanol); hemodialysis for severe cases',
    [
      'Normal osmol gap does NOT exclude late methanol poisoning (already metabolized)',
      'Osmol gap decreases as anion gap increases over time ("gap-gap" phenomenon)',
      'Fomepizole must be dosed q4h during dialysis (it is also dialyzed)',
      'Visual loss may be irreversible; early treatment is critical',
      'Folinic acid enhances formate metabolism and is an important adjunct',
    ],
    ['EXTRIP guidelines on methanol', 'Goldfrank\'s Toxicologic Emergencies'],
  ),

  'ethylene-glycol-poisoning': te(
    'ethylene-glycol-poisoning', 'Ethylene Glycol Poisoning', 'industrial-toxin',
    'Found in antifreeze and coolants. Sweet taste makes accidental ingestion common. Metabolized to glycolic and oxalic acid causing renal failure and metabolic acidosis.',
    'ADH metabolizes ethylene glycol to glycoaldehyde, then to glycolic acid (causes acidosis), glyoxylic acid, and finally oxalic acid. Oxalate combines with calcium forming calcium oxalate crystals in renal tubules.',
    [
      'Stage 1 (0-12h): CNS depression, apparent intoxication, nausea',
      'Stage 2 (12-24h): cardiopulmonary (tachycardia, hypertension, pulmonary edema)',
      'Stage 3 (24-72h): renal failure, flank pain, oliguria, hematuria',
      'Metabolic acidosis with elevated anion gap',
      'Hypocalcemia (calcium bound by oxalate)',
    ],
    [
      'Serum ethylene glycol level',
      'Osmol gap (elevated early), anion gap (elevated late)',
      'BMP: renal function, calcium, potassium',
      'ABG: anion gap metabolic acidosis',
      'Urinalysis: calcium oxalate crystals (envelope or needle shaped), fluorescence under Wood lamp',
      'Lactate (may be falsely elevated: glycolate cross-reacts with some assays)',
    ],
    [
      'Fomepizole 15 mg/kg IV loading dose',
      'Ethanol infusion alternative (target BAC 100-150 mg/dL)',
      'Pyridoxine 100 mg IV daily + thiamine 100 mg IV daily (cofactors for non-toxic metabolism)',
      'Hemodialysis: level >50 mg/dL, severe acidosis, renal failure',
      'Calcium replacement if hypocalcemic (but avoid excessive: may worsen crystal deposition)',
    ],
    'Fomepizole (or ethanol); hemodialysis',
    [
      'Sweet taste of antifreeze makes accidental pediatric ingestion and malicious poisoning possible',
      'Calcium oxalate crystals on UA are diagnostic but not always present',
      'False lactate elevation: glycolate cross-reacts with some lactate assays (use enzymatic assay)',
      'Some antifreeze contains fluorescein: Wood lamp urine may fluoresce',
      'Fomepizole q4h during dialysis (it is dialyzed)',
    ],
    ['EXTRIP guidelines on ethylene glycol', 'Goldfrank\'s Toxicologic Emergencies'],
  ),

  'hydrogen-sulfide': te(
    'hydrogen-sulfide', 'Hydrogen Sulfide Poisoning', 'industrial-toxin',
    'Toxic gas with "rotten egg" odor at low concentrations. Olfactory fatigue occurs rapidly. Causes cellular asphyxia similar to cyanide.',
    'Inhibits cytochrome c oxidase (Complex IV) in mitochondrial electron transport chain, blocking aerobic metabolism. Also causes direct irritant injury to mucous membranes.',
    [
      'Low concentration: eye/respiratory irritation, headache, nausea ("rotten egg" smell)',
      'Moderate: cough, dyspnea, pulmonary edema',
      'High concentration: rapid "knockdown" (olfactory paralysis occurs, so no warning smell)',
      'Seizures, coma, cardiovascular collapse',
      'Delayed pulmonary edema',
    ],
    [
      'Clinical diagnosis: exposure history and presentation',
      'ABG: metabolic acidosis, elevated lactate',
      'CXR: pulmonary edema',
      'BMP, lactate',
      'Sulfhemoglobin level (not widely available)',
    ],
    [
      'Remove from exposure (protect rescuers: full SCBA required)',
      'High-flow 100% oxygen',
      'Sodium nitrite 300 mg IV (induces methemoglobinemia to bind sulfide)',
      'Hyperbaric oxygen if available for severe cases',
      'Supportive care: intubation, vasopressors as needed',
      'Do NOT use hydroxocobalamin (not effective for H2S)',
    ],
    'Sodium nitrite (induces methemoglobin to bind sulfide)',
    [
      'Olfactory fatigue at >100 ppm: loss of smell is a DANGER sign, not improvement',
      'Rescuer safety: H2S is heavier than air, accumulates in low-lying areas',
      'Sources: sewers, manure pits, petroleum refineries, paper mills, hot springs',
      'Multiple down rescuers: classic for confined-space H2S exposure',
      '"Knockdown": sudden collapse from high-concentration exposure',
    ],
    ['OSHA H2S guidelines', 'Goldfrank\'s Toxicologic Emergencies'],
  ),

  // ── Medication Toxicity (4) ───────────────

  'digoxin-toxicity': te(
    'digoxin-toxicity', 'Digoxin Toxicity', 'medication-toxicity',
    'Narrow therapeutic index (0.5-2.0 ng/mL). Toxicity manifests as cardiac arrhythmias, GI, and visual symptoms. Hyperkalemia is a marker of severe acute toxicity.',
    'Inhibits Na+/K+ ATPase, increasing intracellular sodium, which increases intracellular calcium via Na/Ca exchanger. Enhanced automaticity and decreased AV conduction. At toxic levels: dangerous arrhythmias.',
    [
      'GI: nausea, vomiting, anorexia (often first symptoms)',
      'Visual: yellow-green halos (xanthopsia), blurred vision',
      'Cardiac: virtually any arrhythmia, classic "regularized" atrial fibrillation',
      'Bidirectional ventricular tachycardia (nearly pathognomonic)',
      'Hyperkalemia (acute toxicity: K+ predicts severity)',
      'CNS: confusion, delirium in elderly',
    ],
    [
      'Serum digoxin level (>2 ng/mL suggests toxicity; clinical correlation required)',
      'Stat potassium (hyperkalemia = severity marker)',
      'ECG: ST scooping ("Salvador Dali mustache"), arrhythmias',
      'BMP: renal function (digoxin is renally cleared)',
      'Calcium: avoid IV calcium in dig toxicity (contraindicated: "stone heart")',
    ],
    [
      'Digoxin immune Fab (DigiFab): definitive treatment',
      'Dosing: by known ingested amount, serum level, or empiric 10 vials',
      'Atropine for symptomatic bradycardia',
      'Correct hypokalemia CAUTIOUSLY (NOT in acute overdose with hyperkalemia)',
      'Avoid calcium administration (theoretically worsens toxicity)',
      'Temporary pacing for refractory bradycardia (may be difficult)',
    ],
    'Digoxin immune Fab (DigiFab)',
    [
      'Bidirectional VT is nearly pathognomonic for digoxin toxicity',
      'Hyperkalemia in acute digoxin overdose predicts severity (K >5.5 = high mortality without Fab)',
      'AVOID IV calcium in digoxin toxicity (theoretical "stone heart" phenomenon)',
      'Numerous drug interactions raise digoxin levels: amiodarone, verapamil, quinidine, macrolides',
      'Renal impairment is the most common cause of chronic toxicity',
    ],
    ['Goldfrank\'s Toxicologic Emergencies', 'ACC/AHA arrhythmia guidelines'],
  ),

  'beta-blocker-overdose': te(
    'beta-blocker-overdose', 'Beta-Blocker Overdose', 'medication-toxicity',
    'Potentially lethal overdose causing bradycardia, hypotension, and cardiogenic shock. Propranolol also causes sodium channel blockade and seizures.',
    'Competitive antagonism at beta-1 (cardiac) and beta-2 (vascular, bronchial) adrenergic receptors. Decreases heart rate, contractility, and conduction. Propranolol: additional sodium channel and CNS effects.',
    [
      'Bradycardia (may be profound)',
      'Hypotension, cardiogenic shock',
      'Altered mental status',
      'Seizures (propranolol: sodium channel blockade)',
      'Hypoglycemia (blocked glycogenolysis, especially children)',
      'Bronchospasm',
      'QRS widening (propranolol)',
    ],
    [
      'ECG: bradycardia, conduction delays, QRS width',
      'BMP: glucose (hypoglycemia), potassium, renal function',
      'Serial glucose monitoring',
      'Lactate (perfusion marker)',
      'Bedside echocardiography (assess contractility)',
    ],
    [
      'Atropine for bradycardia (often ineffective in overdose)',
      'Glucagon 3-10 mg IV bolus, then 2-5 mg/h infusion (bypasses beta receptor)',
      'High-dose insulin euglycemia (HDI): insulin 1 U/kg bolus + 1-10 U/kg/h with dextrose',
      'IV calcium chloride or gluconate',
      'Vasopressors: norepinephrine, epinephrine',
      'Lipid emulsion therapy for refractory shock',
      'VA-ECMO for refractory cardiac failure',
      'Sodium bicarbonate if QRS widened (propranolol)',
    ],
    'Glucagon (first-line); high-dose insulin euglycemia',
    [
      'Glucagon bypasses blocked beta receptors via adenylyl cyclase stimulation',
      'High-dose insulin is now considered the most effective therapy for refractory shock',
      'Monitor glucose closely with HDI therapy (give dextrose concurrently)',
      'Propranolol is most dangerous beta-blocker: lipophilic, sodium channel blockade, seizures',
      'One-pill-can-kill in toddlers for propranolol and sotalol',
    ],
    ['ACMT position statement', 'Goldfrank\'s Toxicologic Emergencies'],
  ),

  'calcium-channel-blocker-overdose': te(
    'calcium-channel-blocker-overdose', 'Calcium Channel Blocker Overdose', 'medication-toxicity',
    'Life-threatening overdose with bradycardia (non-dihydropyridines) or vasodilatory shock (dihydropyridines). Often refractory to conventional vasopressors.',
    'Block L-type voltage-gated calcium channels. Verapamil/diltiazem: primarily cardiac (negative chronotropy, inotropy, dromotropy). Dihydropyridines (nifedipine, amlodipine): primarily vascular (vasodilation). In overdose, selectivity is lost.',
    [
      'Bradycardia and hypotension (may be profound)',
      'Heart block (first to third degree)',
      'Cardiogenic shock',
      'Hyperglycemia (unique: insulin release is calcium-dependent)',
      'Metabolic acidosis (from poor perfusion)',
      'Non-cardiogenic pulmonary edema',
      'Altered mental status',
    ],
    [
      'ECG: bradycardia, heart block, ST changes',
      'BMP: glucose (hyperglycemia is a clue), calcium, potassium',
      'Lactate (perfusion marker)',
      'ABG if unstable',
      'Bedside echocardiography',
      'Serial glucose monitoring',
    ],
    [
      'IV calcium chloride 1-3 g IV or calcium gluconate 3-6 g IV (repeat PRN)',
      'Atropine (usually ineffective)',
      'High-dose insulin euglycemia (HDI): insulin 1 U/kg bolus + 1-10 U/kg/h with dextrose/glucose monitoring',
      'Vasopressors: norepinephrine preferred',
      'Methylene blue for refractory vasoplegic shock',
      'Lipid emulsion therapy',
      'VA-ECMO for refractory shock',
      'Whole bowel irrigation for sustained-release formulations',
    ],
    'IV calcium + high-dose insulin euglycemia',
    [
      'Hyperglycemia is a clue to CCB overdose (insulin requires calcium for release)',
      'High-dose insulin euglycemia is the single most effective therapy',
      'Sustained-release formulations: may have delayed onset, prolonged toxicity',
      'One-pill-can-kill in toddlers (especially verapamil sustained-release)',
      'ECMO can bridge through the drug effect in refractory cases',
    ],
    ['ACMT position statement', 'Goldfrank\'s Toxicologic Emergencies'],
  ),

  'warfarin-toxicity': te(
    'warfarin-toxicity', 'Warfarin/Anticoagulant Toxicity', 'medication-toxicity',
    'Vitamin K antagonist with narrow therapeutic range. Supratherapeutic INR increases bleeding risk. "Superwarfarin" rodenticides (brodifacoum) cause prolonged anticoagulation.',
    'Inhibits vitamin K epoxide reductase (VKORC1), preventing recycling of vitamin K. Depletes vitamin K-dependent clotting factors (II, VII, IX, X) and proteins C and S.',
    [
      'Mucocutaneous bleeding: epistaxis, gingival bleeding, easy bruising',
      'GI bleeding, hematuria',
      'Intracranial hemorrhage (most feared complication)',
      'Occult bleeding: flank pain (retroperitoneal), compartment syndrome',
      'Skin necrosis (protein C depletion, early in therapy)',
    ],
    [
      'INR/PT (markedly elevated)',
      'CBC with differential',
      'BMP, LFTs',
      'Type and crossmatch if active bleeding',
      'CT head if neurological symptoms',
      'Consider superwarfarin (brodifacoum) level if rodenticide exposure',
    ],
    [
      'Hold warfarin',
      'Vitamin K1 (phytonadione): 5-10 mg IV slow infusion for serious bleeding',
      '4-factor PCC (Kcentra) for life-threatening bleeding: immediate reversal',
      'FFP if PCC unavailable (slower, volume overload risk)',
      'Superwarfarin rodenticides: may need months of vitamin K therapy',
      'Reassess indication for anticoagulation',
    ],
    'Vitamin K1 (phytonadione); 4-factor PCC for emergent reversal',
    [
      '4-factor PCC is preferred over FFP for emergent warfarin reversal (faster, lower volume)',
      'Superwarfarin rodenticides (brodifacoum): half-life >1 month, may need vitamin K for months',
      'Vitamin K IV should be given slowly (anaphylactoid reactions)',
      'INR >9 without bleeding: hold warfarin, give oral vitamin K, monitor closely',
      'Numerous drug and food interactions: always check medication list',
    ],
    ['AHA/ACC anticoagulation reversal guidelines', 'Goldfrank\'s Toxicologic Emergencies'],
  ),

  // ── Substance Abuse (3) ───────────────────

  'alcohol-withdrawal': te(
    'alcohol-withdrawal', 'Alcohol Withdrawal Syndrome', 'substance-abuse',
    'Potentially fatal syndrome from abrupt cessation of chronic alcohol use. Spectrum from mild tremor to delirium tremens (DTs). Occurs 6-96 hours after last drink.',
    'Chronic alcohol upregulates excitatory NMDA glutamate receptors and downregulates inhibitory GABA-A receptors. Abrupt cessation removes GABA inhibition, causing unopposed excitatory neurotransmission.',
    [
      'Minor (6-24h): tremor, anxiety, insomnia, diaphoresis, tachycardia',
      'Seizures (12-48h): generalized tonic-clonic, usually brief and self-limited',
      'Alcoholic hallucinosis (12-48h): visual/tactile/auditory with intact sensorium',
      'Delirium tremens (48-96h): confusion, agitation, autonomic instability, hallucinations, fever',
    ],
    [
      'CIWA-Ar score for withdrawal severity',
      'BMP (magnesium, phosphorus), glucose',
      'LFTs, CBC, lipase',
      'Ethanol level, blood alcohol',
      'Consider CT head if first seizure or focal deficit',
      'Blood cultures if febrile (rule out infection)',
    ],
    [
      'Benzodiazepines: first-line. Symptom-triggered (CIWA-based) or fixed-dose protocols',
      'Lorazepam 2-4 mg IV or diazepam 10-20 mg IV, repeat PRN',
      'Phenobarbital 10-15 mg/kg for refractory withdrawal',
      'Thiamine 500 mg IV TID x 3d (before glucose to prevent Wernicke)',
      'Electrolyte repletion: magnesium, potassium, phosphorus',
      'Folate, multivitamins, IV fluids',
    ],
    'Benzodiazepines (first-line); phenobarbital for refractory cases',
    [
      'Always give thiamine BEFORE glucose (prevent Wernicke encephalopathy)',
      'DT mortality is 5-15% untreated; <1% with aggressive treatment',
      'Prior DTs or withdrawal seizures: strongest predictor of severe withdrawal',
      'CIWA-Ar >20: high risk for DTs and seizures',
      'Symptom-triggered dosing reduces total benzo use and ICU length of stay',
    ],
    ['ASAM Clinical Practice Guideline on Alcohol Withdrawal', 'Goldfrank\'s Toxicologic Emergencies'],
  ),

  'methamphetamine-toxicity': te(
    'methamphetamine-toxicity', 'Methamphetamine Toxicity', 'substance-abuse',
    'Potent sympathomimetic stimulant. Causes severe cardiovascular, neurological, and psychiatric toxicity. Associated with cardiomyopathy, stroke, and psychosis.',
    'Releases monoamines (dopamine, norepinephrine, serotonin) from presynaptic terminals and inhibits reuptake. Blocks VMAT2. Causes massive sympathetic stimulation. Neurotoxic to dopaminergic neurons.',
    [
      'Sympathomimetic toxidrome: tachycardia, hypertension, hyperthermia, diaphoresis',
      'Agitation, psychosis, paranoia, violent behavior',
      'Seizures',
      'Chest pain (coronary vasospasm, aortic dissection)',
      'Rhabdomyolysis',
      'Intracerebral hemorrhage',
      'Chronic: cardiomyopathy, dental decay ("meth mouth"), skin excoriations',
    ],
    [
      'ECG: ischemia, arrhythmias',
      'Troponin if chest pain',
      'CK, BMP, lactate',
      'Core temperature',
      'Head CT if focal neurological deficit or severe headache',
      'Urine drug screen (amphetamine positive)',
    ],
    [
      'Benzodiazepines: first-line for agitation, seizures, and sympatholysis',
      'Active cooling for hyperthermia (target <39C)',
      'IV fluids for rhabdomyolysis (target UOP 200-300 mL/h)',
      'Avoid beta-blockers (unopposed alpha risk, same as cocaine)',
      'Antihypertensives: phentolamine, nitroprusside, or nicardipine',
      'Intubation and paralysis for severe refractory hyperthermia',
    ],
    undefined,
    [
      'No specific antidote; benzodiazepines are the cornerstone of treatment',
      'Avoid all beta-blockers (same concern as cocaine: unopposed alpha)',
      'Hyperthermia >41C carries extremely high mortality',
      'Methamphetamine-associated cardiomyopathy may be reversible with abstinence',
      'Chronic use causes neurotoxic damage to dopaminergic pathways',
    ],
    ['Goldfrank\'s Toxicologic Emergencies'],
  ),

  'synthetic-cannabinoid-toxicity': te(
    'synthetic-cannabinoid-toxicity', 'Synthetic Cannabinoid Toxicity', 'substance-abuse',
    'Synthetic compounds (K2, Spice) binding cannabinoid receptors with much greater affinity than THC. Unpredictable effects, often severe, unlike natural cannabis.',
    'Full agonists at CB1 and CB2 cannabinoid receptors (natural THC is partial agonist). High potency, variable pharmacology. Some batches contaminated with brodifacoum (anticoagulant).',
    [
      'Agitation, psychosis, paranoia (paradoxical to natural cannabis)',
      'Tachycardia, hypertension or hypotension',
      'Seizures',
      'Vomiting',
      'AKI (certain compounds)',
      'Coagulopathy with bleeding (brodifacoum contamination)',
      'Altered mental status, obtundation',
    ],
    [
      'Standard urine drug screen will NOT detect most synthetic cannabinoids',
      'INR/PT (check for brodifacoum contamination)',
      'BMP, CK, LFTs',
      'ECG',
      'Specialized testing for synthetic cannabinoids (send-out)',
    ],
    [
      'Supportive care is mainstay',
      'Benzodiazepines for agitation and seizures',
      'If coagulopathy: vitamin K1 (may need prolonged course for brodifacoum)',
      'IV fluids',
      'Cardiac monitoring',
      'Psychiatric evaluation if psychosis persists',
    ],
    undefined,
    [
      'Standard urine drug screen does NOT detect synthetic cannabinoids',
      'Effects are unpredictable and often much more severe than natural cannabis',
      'Brodifacoum contamination: check INR in all patients (superwarfarin)',
      'Mass casualty events reported from contaminated batches',
      'Full agonism at CB1 (vs partial agonism with THC) explains greater toxicity',
    ],
    ['CDC synthetic cannabinoid investigation reports', 'Goldfrank\'s Toxicologic Emergencies'],
  ),

  // ── Antidotes (6) ─────────────────────────

  'naloxone-antidote': te(
    'naloxone-antidote', 'Naloxone (Narcan)', 'antidote',
    'Competitive opioid receptor antagonist. Reverses opioid-induced respiratory depression, sedation, and hypotension. Available as nasal spray, IM, and IV formulations.',
    'Competitive antagonist at mu, kappa, and delta opioid receptors. Displaces opioid agonists from receptors. Onset: 1-2 min IV, 3-5 min IM/IN. Duration: 30-90 min.',
    [
      'Indication: known or suspected opioid overdose with respiratory depression',
      'Reverses: respiratory depression, CNS depression, miosis, hypotension',
      'May precipitate withdrawal in opioid-dependent patients (not dangerous, uncomfortable)',
    ],
    [
      'Clinical assessment of opioid toxidrome',
      'Monitor respiratory rate and SpO2',
      'No specific labs required for naloxone administration',
    ],
    [
      'IV: 0.04-0.4 mg, titrate to respirations (not full arousal)',
      'IN: 4 mg spray (lay rescue)',
      'IM: 0.4-2 mg',
      'Repeat q2-3 min as needed',
      'Continuous infusion: 2/3 of effective bolus dose per hour',
      'Monitor for re-sedation (naloxone wears off before most opioids)',
    ],
    undefined,
    [
      'Titrate to adequate breathing, NOT full consciousness (reduces withdrawal)',
      'Duration of naloxone (30-90 min) is shorter than most opioids: monitor for re-sedation',
      'Fentanyl/fentanyl analogues may require doses >10 mg',
      'Safe to give even if not sure it is an opioid overdose',
      'Available without prescription in most states',
    ],
    ['AHA Opioid-Associated Emergency Guidelines'],
  ),

  'nac-antidote': te(
    'nac-antidote', 'N-Acetylcysteine (NAC)', 'antidote',
    'Antidote for acetaminophen toxicity. Glutathione precursor that detoxifies NAPQI. Most effective within 8 hours but beneficial even late.',
    'Replenishes hepatic glutathione stores. Also acts as glutathione substitute, enhances sulfation pathway, acts as direct antioxidant, and improves microvascular blood flow in liver.',
    [
      'Indication: acetaminophen level above treatment line on Rumack-Matthew nomogram',
      'Also used for: unknown time of ingestion with detectable APAP and elevated ALT',
      'Late treatment: beneficial even in established hepatic failure',
    ],
    [
      'Serum acetaminophen level at 4h post-ingestion',
      'LFTs (AST, ALT), INR, BMP',
      'Plot on Rumack-Matthew nomogram',
    ],
    [
      '21-hour IV protocol: 150 mg/kg over 1h, 50 mg/kg over 4h, 100 mg/kg over 16h',
      '72-hour oral protocol: 140 mg/kg loading, then 70 mg/kg q4h x 17 doses',
      'Continue until: ALT trending down, INR <2, APAP undetectable, clinically improving',
      'Anaphylactoid reactions: slow infusion rate, treat with antihistamines, may restart at lower rate',
    ],
    undefined,
    [
      'Most effective within 8h of ingestion (nearly 100% hepatoprotection)',
      'Still beneficial even 24-48h+ post-ingestion',
      'Anaphylactoid reactions (not true allergy) are dose-rate dependent: slow the infusion',
      'IV preferred if: vomiting, AMS, hepatic failure, pregnancy',
      'Continue NAC beyond protocol if labs still abnormal',
    ],
    ['Goldfrank\'s Toxicologic Emergencies', 'ACG acute liver failure guidelines'],
  ),

  'fomepizole-antidote': te(
    'fomepizole-antidote', 'Fomepizole (Antizol)', 'antidote',
    'Alcohol dehydrogenase inhibitor. First-line antidote for methanol and ethylene glycol poisoning. Prevents formation of toxic metabolites.',
    'Competitive inhibitor of alcohol dehydrogenase (ADH) with 8,000x greater affinity than ethanol. Prevents metabolism of methanol to formic acid and ethylene glycol to glycolic/oxalic acid.',
    [
      'Indication: known or suspected methanol or ethylene glycol poisoning',
      'Also used for: diethylene glycol, propylene glycol toxicity',
      'Give empirically if toxic alcohol suspected while awaiting levels',
    ],
    [
      'Serum methanol or ethylene glycol level',
      'Osmol gap, anion gap',
      'ABG, BMP, lactate',
    ],
    [
      'Loading: 15 mg/kg IV over 30 min',
      'Maintenance: 10 mg/kg q12h x 4 doses',
      'Then: 15 mg/kg q12h until level undetectable and acidosis resolved',
      'During hemodialysis: increase to q4h dosing (fomepizole is dialyzed)',
      'Continue until toxic alcohol undetectable and no acidosis',
    ],
    undefined,
    [
      'Preferred over ethanol: predictable kinetics, no CNS depression, simpler dosing',
      'MUST increase dosing frequency during hemodialysis (drug is dialyzed)',
      'Cost: ~$1,000/vial, but avoids ICU monitoring needed for ethanol drip',
      'Do NOT delay treatment while awaiting levels if clinical suspicion is high',
      'Works by preventing toxin formation, not reversing existing damage',
    ],
    ['EXTRIP workgroup guidelines', 'Goldfrank\'s Toxicologic Emergencies'],
  ),

  'atropine-antidote': te(
    'atropine-antidote', 'Atropine (Cholinergic Poisoning Antidote)', 'antidote',
    'Competitive muscarinic antagonist. First-line treatment for cholinergic crisis from organophosphate/carbamate poisoning and nerve agents.',
    'Competitively blocks acetylcholine at muscarinic receptors. Reverses muscarinic effects (bronchospasm, bronchorrhea, bradycardia, secretions) but NOT nicotinic effects (weakness, fasciculations).',
    [
      'Indication: cholinergic crisis (organophosphate, carbamate, nerve agent poisoning)',
      'Treats muscarinic symptoms only: bronchospasm, secretions, bradycardia',
      'Does NOT reverse nicotinic effects (muscle weakness, fasciculations)',
    ],
    [
      'Clinical diagnosis of cholinergic toxidrome',
      'RBC/plasma cholinesterase levels',
    ],
    [
      'Initial: 1-2 mg IV for adults (0.02 mg/kg for children, min 0.1 mg)',
      'Double the dose every 3-5 minutes until secretions dry',
      'May need 10-100+ mg in severe organophosphate poisoning',
      'Atropine drip: 10-20% of loading dose per hour',
      'Always give with pralidoxime when organophosphate suspected',
    ],
    undefined,
    [
      'Titrate to DRYING OF SECRETIONS, not pupil size or heart rate',
      'May need massive doses (hundreds of mg) in severe OP poisoning',
      'Does NOT reverse nicotinic effects: add pralidoxime for weakness/paralysis',
      'Inadequate atropine dosing is the most common treatment error',
      'Continue atropine drip as needed: OP toxicity can last days to weeks',
    ],
    ['WHO OP poisoning guidelines', 'Goldfrank\'s Toxicologic Emergencies'],
  ),

  'digifab-antidote': te(
    'digifab-antidote', 'Digoxin Immune Fab (DigiFab)', 'antidote',
    'Antigen-binding antibody fragments that bind and neutralize free digoxin. Definitive treatment for life-threatening digoxin toxicity.',
    'Digoxin-specific Fab antibody fragments bind free digoxin with higher affinity than Na/K-ATPase. Digoxin-Fab complex is renally excreted. Rapidly reduces free digoxin concentration.',
    [
      'Indications: life-threatening arrhythmias, K+ >5.5 in acute overdose, hemodynamic instability',
      'Also: chronic toxicity with symptomatic arrhythmias',
      'Effective within 30-60 minutes',
    ],
    [
      'Digoxin level (note: level is unreliable after Fab administration)',
      'Potassium level (hyperkalemia = severity marker)',
      'ECG, cardiac monitoring',
    ],
    [
      'Known ingestion: # vials = (amount ingested in mg x 0.8) / 0.5',
      'Known serum level: # vials = (level ng/mL x weight kg) / 100',
      'Empiric: 10-20 vials for acute life-threatening ingestion',
      'Chronic toxicity: start with 1-2 vials, reassess',
      'Administer IV over 30 minutes',
    ],
    undefined,
    [
      'Serum digoxin level is UNRELIABLE after Fab administration (measures bound + free)',
      'Monitor potassium: may drop rapidly after Fab (digoxin was blocking Na/K-ATPase)',
      'Allergic reactions rare but possible (papain sensitivity)',
      'Cost: ~$5,000 per vial; may need 10-20 vials for acute overdose',
      'Rebound toxicity possible as Fab is cleared (half-life 15-20h)',
    ],
    ['Goldfrank\'s Toxicologic Emergencies', 'DigiFab product labeling'],
  ),

  'hydroxocobalamin-antidote': te(
    'hydroxocobalamin-antidote', 'Hydroxocobalamin (Cyanokit)', 'antidote',
    'Cyanide antidote. Vitamin B12 precursor that chelates cyanide to form cyanocobalamin (vitamin B12) which is renally excreted. Preferred cyanide antidote.',
    'Cobalt ion in hydroxocobalamin has high affinity for cyanide ion (CN-). Directly chelates cyanide forming non-toxic cyanocobalamin (vitamin B12). Does NOT induce methemoglobinemia (unlike nitrites).',
    [
      'Indication: known or suspected cyanide poisoning',
      'Empiric use in fire victims with AMS, lactic acidosis, hemodynamic instability',
      'Preferred over sodium nitrite in fire victims (concurrent CO poisoning)',
    ],
    [
      'Lactate (>8 mmol/L in cyanide)',
      'ABG: severe metabolic acidosis',
      'Co-oximetry (rule out concurrent CO)',
      'Cyanide level rarely available in time',
    ],
    [
      'Cyanokit: 5 g IV over 15 minutes',
      'May repeat x1 for persistent hemodynamic instability',
      'Can be given with sodium thiosulfate (synergistic)',
      'Pediatric dose: 70 mg/kg IV (max 5 g)',
    ],
    undefined,
    [
      'Preferred over nitrite-thiosulfate kit in smoke inhalation (nitrites cause MetHb)',
      'Causes red discoloration of skin, urine, and mucous membranes (cosmetic, not harmful)',
      'Interferes with colorimetric lab assays for 24-48h',
      'Cost: ~$600-800 per kit',
      'Safe in pregnancy and CO co-poisoning (advantages over nitrites)',
    ],
    ['ACMT position statement on cyanide antidotes', 'Cyanokit product labeling'],
  ),
};

// ============================================
// Utility Functions
// ============================================

const entriesArray = Object.values(TOXICOLOGY_ENTRIES);

/**
 * Search toxicology entries by a case-insensitive query string.
 * Matches against name, description, mechanism, clinicalPresentation, management, antidote, and keyPearls.
 */
export function searchToxicologyEntries(query: string): ToxicologyEntry[] {
  const q = query.toLowerCase();
  return entriesArray.filter((e) =>
    e.name.toLowerCase().includes(q) ||
    e.description.toLowerCase().includes(q) ||
    e.mechanism.toLowerCase().includes(q) ||
    e.clinicalPresentation.some((s) => s.toLowerCase().includes(q)) ||
    e.management.some((s) => s.toLowerCase().includes(q)) ||
    (e.antidote?.toLowerCase().includes(q) ?? false) ||
    e.keyPearls.some((s) => s.toLowerCase().includes(q)) ||
    e.category.toLowerCase().includes(q)
  );
}

/**
 * Filter entries by one or more categories.
 */
export function filterByCategory(
  categories: ToxicologyDatabaseCategory[],
): ToxicologyEntry[] {
  const set = new Set(categories);
  return entriesArray.filter((e) => set.has(e.category));
}

/**
 * Retrieve a single entry by its ID.
 */
export function getEntryById(id: string): ToxicologyEntry | undefined {
  return TOXICOLOGY_ENTRIES[id];
}
