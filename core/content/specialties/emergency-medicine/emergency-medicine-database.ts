/**
 * Emergency Medicine Specialty Database
 *
 * Comprehensive emergency medicine database for Biological Self.
 * Covers cardiac emergencies, respiratory emergencies, trauma, neurologic emergencies,
 * toxicology, environmental emergencies, critical care, and emergency procedures.
 *
 * Bilingual (English/Spanish) with ICD-11 codes where applicable.
 */

import type { EducationalContent, LevelContent, TermDefinition, MediaAsset, Citation, CrossReference } from '../../types';

// =============================================================================
// Types
// =============================================================================

export type EmergencyCategory =
  | 'cardiac'
  | 'respiratory'
  | 'trauma'
  | 'neurologic'
  | 'toxicologic'
  | 'environmental'
  | 'infectious'
  | 'metabolic'
  | 'surgical'
  | 'procedures'
  | 'critical-care';

export type TriageLevel = 1 | 2 | 3 | 4 | 5;

export interface EmergencyEntry {
  id: string;
  name: string;
  nameEs: string;
  category: EmergencyCategory;
  triageLevel: TriageLevel;
  icd11?: string;
  description: string;
  pathophysiology: string;
  clinicalFeatures: string[];
  diagnostics: string[];
  treatment: string[];
  complications: string[];
  patientExplanation: string;
  emergencySigns: string[];
}

// =============================================================================
// Helper Functions
// =============================================================================

function em(
  id: string,
  name: string,
  nameEs: string,
  category: EmergencyCategory,
  triage: TriageLevel,
  icd11: string | undefined,
  description: string,
  pathophysiology: string,
  clinicalFeatures: string[],
  diagnostics: string[],
  treatment: string[],
  complications: string[],
  patientExplanation: string,
  emergencySigns: string[],
): EmergencyEntry {
  return {
    id,
    name,
    nameEs,
    category,
    triageLevel: triage,
    icd11,
    description,
    pathophysiology,
    clinicalFeatures,
    diagnostics,
    treatment,
    complications,
    patientExplanation,
    emergencySigns,
  };
}

// =============================================================================
// Database Entries
// =============================================================================

const entries: EmergencyEntry[] = [
  // ── Cardiac Emergencies ────────────────────────────────────────────────────
  em(
    'stemi',
    'ST-Elevation Myocardial Infarction (STEMI)',
    'Infarto Agudo al Miocardio con Elevación del ST',
    'cardiac',
    1,
    'BA41.0',
    'Complete coronary artery occlusion causing transmural myocardial necrosis with ST elevation on ECG. Time-critical emergency requiring emergent reperfusion.',
    'Atherosclerotic plaque rupture with superimposed thrombus causes complete coronary artery occlusion. Ischemic cascade leads to myocardial cell death within 20-40 minutes. ST elevation indicates full-thickness injury.',
    ['Crushing chest pain', 'Diaphoresis', 'Nausea/vomiting', 'Dyspnea', 'Radiation to arm/jaw/back', 'Syncope', 'Sense of impending doom'],
    ['12-lead ECG within 10 min', 'ST elevation in 2+ contiguous leads', 'Cardiac troponin I/T', 'Chest X-ray', 'Echocardiogram', 'CBC, CMP, PT/INR'],
    ['Aspirin 325 mg chewable', 'P2Y12 inhibitor (ticagrelor/clopidogrel)', 'Heparin anticoagulation', 'Primary PCI within 90 min', 'Fibrinolysis if PCI delayed >120 min', 'Beta-blockers (if no contraindications)', 'High-intensity statin'],
    ['Cardiogenic shock', 'Malignant arrhythmias (VT/VF)', 'Free wall rupture', 'Acute mitral regurgitation', 'Ventricular septal defect', 'Pericarditis/Dressler syndrome'],
    'A STEMI is the most serious type of heart attack where a coronary artery is completely blocked. The heart muscle begins to die within minutes without blood flow. Call 911 immediately if you suspect a heart attack.',
    ['Chest pressure >20 min', 'ST elevation on ECG', 'Hemodynamic instability', 'Cardiogenic shock', 'New LBBB with symptoms']
  ),

  em(
    'nste-acs',
    'Non-ST Elevation Acute Coronary Syndrome',
    'Síndrome Coronario Agudo sin Elevación del ST',
    'cardiac',
    2,
    'BA41.1',
    'Partial coronary artery occlusion causing myocardial ischemia without ST elevation. Includes NSTEMI (elevated troponin) and unstable angina.',
    'Plaque rupture with non-occlusive thrombus causes subendocardial ischemia. Ongoing myocardial oxygen demand-supply mismatch. May progress to STEMI if thrombus propagates.',
    ['Chest pain at rest or minimal exertion', 'New/worsening angina', 'Diaphoresis', 'Nausea', 'Dyspnea', 'Fatigue'],
    ['ECG without ST elevation', 'Elevated troponin (NSTEMI)', 'Normal troponin (unstable angina)', 'Stress testing when stabilized', 'Coronary CT angiography', 'TIMI/GRACE risk scores'],
    ['Dual antiplatelet therapy', 'Anticoagulation (heparin)', 'High-intensity statin', 'Early invasive strategy if high-risk', 'Medical management if low-risk', 'Beta-blockers', 'Nitrates for pain'],
    ['Progression to STEMI', 'Reinfarction', 'Malignant arrhythmias', 'Heart failure', 'Cardiogenic shock', 'Sudden cardiac death'],
    'This is a partial blockage of a coronary artery that causes chest pain and may damage the heart. Unlike a STEMI, the artery is not completely blocked, but it is still a medical emergency requiring urgent care.',
    ['Chest pain at rest', 'Dynamic ST/T changes', 'Elevated troponin', 'Hemodynamic instability', 'Sustained ventricular arrhythmias']
  ),

  em(
    'vfib',
    'Ventricular Fibrillation',
    'Fibrilación Ventricular',
    'cardiac',
    1,
    'BC82.1',
    'Chaotic disorganized ventricular electrical activity causing immediate cessation of cardiac output. Cardiac arrest rhythm requiring immediate defibrillation.',
    'Multiple re-entrant wavelets in ventricles cause disorganized depolarization. No effective ventricular contraction occurs. Most common cause of sudden cardiac death. Rapid loss of consciousness and death without immediate intervention.',
    ['Sudden collapse', 'No pulse', 'No breathing', 'Loss of consciousness', 'Agonal respirations (gasping)'],
    ['ECG: chaotic irregular waveform', 'No discernible QRS complexes', 'Clinical cardiac arrest', 'Check for reversible causes post-ROSC'],
    ['Immediate CPR', 'Defibrillation 120-200J biphasic', 'Epinephrine 1 mg IV q3-5 min', 'Amiodarone 300 mg IV', 'Advanced airway', 'Targeted temperature management post-ROSC'],
    ['Sudden death', 'Anoxic brain injury', 'Multi-organ failure', 'Post-cardiac arrest syndrome'],
    'Ventricular fibrillation is a life-threatening heart rhythm where the heart quivers instead of pumping blood. The person collapses immediately and needs CPR and a defibrillator shock within minutes to survive.',
    ['Pulseless arrest', 'Chaotic rhythm on monitor', 'Witnessed sudden collapse']
  ),

  em(
    'pea',
    'Pulseless Electrical Activity',
    'Actividad Eléctrica sin Pulso',
    'cardiac',
    1,
    'BC82',
    'Presence of organized electrical activity on ECG without palpable pulse or effective cardiac output. Non-shockable cardiac arrest rhythm.',
    'Electrical activity present but mechanical contraction absent. Often due to severe hypovolemia, tension pneumothorax, tamponade, massive PE, or hypoxia. Prognosis depends on rapidly identifying and treating underlying cause.',
    ['Unresponsive', 'No pulse', 'Organized electrical rhythm on ECG', 'Agonal respirations', 'Dilated pupils'],
    ['ECG showing organized rhythm', 'Absence of pulse', 'Bedside echo: no cardiac motion', 'Identify reversible causes (Hs and Ts)'],
    ['High-quality CPR', 'Epinephrine 1 mg IV q3-5 min', 'IV/IO access', 'Airway management', 'Treat reversible causes', 'Consider echocardiography'],
    ['Death without treatment', 'Hypoxic brain injury', 'Multi-organ failure'],
    'PEA means the heart has electrical activity but is not pumping blood. This is often caused by other problems like bleeding, collapsed lung, or fluid around the heart that must be fixed quickly.',
    ['Pulseless with organized rhythm', 'Hypovolemia suspected', 'Tamponade signs', 'Tension pneumothorax']
  ),

  em(
    'cardiac-tamponade',
    'Cardiac Tamponade',
    'Taponamiento Cardíaco',
    'cardiac',
    1,
    'BB04',
    'Accumulation of fluid in pericardial sac causing compression of heart chambers and impaired diastolic filling. Life-threatening emergency.',
    'Fluid accumulation in pericardium increases intrapericardial pressure. When pressure exceeds ventricular filling pressures, diastolic filling is impaired. Stroke volume and cardiac output drop precipitously.',
    ['Beck triad: hypotension, JVD, muffled heart sounds', 'Pulsus paradoxus >10 mmHg', 'Dyspnea', 'Chest pain', 'Fatigue', 'Tachycardia'],
    ['Bedside echocardiogram', 'Pericardial effusion on echo', 'RA/RV diastolic collapse', 'IVC plethora', 'ECG: electrical alternans', 'CXR: enlarged cardiac silhouette'],
    ['Emergent pericardiocentesis', 'IV fluid bolus to maintain preload', 'Avoid diuretics', 'Pericardial window if recurrent', 'Treat underlying cause'],
    ['Cardiogenic shock', 'Cardiac arrest', 'Recurrent effusion', 'Pericardial constriction'],
    'Fluid builds up around the heart in a sac, squeezing it so it cannot fill with blood properly. This causes blood pressure to drop dangerously low and requires emergency drainage.',
    ['Beck triad', 'Pulsus paradoxus >20 mmHg', 'Hemodynamic instability', 'Tamponade physiology on echo']
  ),

  // ── Respiratory Emergencies ────────────────────────────────────────────────
  em(
    'tension-pneumothorax',
    'Tension Pneumothorax',
    'Neumotórax a Tensión',
    'respiratory',
    1,
    'CB21.1',
    'Air trapped in pleural space under pressure causing mediastinal shift and cardiovascular collapse. Immediate needle decompression required.',
    'One-way valve mechanism allows air into pleural space but not out. Pressure rises with each breath, collapsing lung and shifting mediastinum. Compression of vena cava reduces venous return and cardiac output.',
    ['Severe dyspnea', 'Hypotension', 'Jugular venous distension', 'Tracheal deviation (late)', 'Absent breath sounds unilateral', 'Tachycardia', 'Cyanosis'],
    ['Clinical diagnosis - do NOT wait for imaging', 'Absent breath sounds on affected side', 'CXR if stable: mediastinal shift', 'Bedside ultrasound: absent lung sliding'],
    ['Immediate needle decompression', '14-gauge needle, 2nd ICS midclavicular', 'Or 4th/5th ICS anterior axillary', 'Chest tube placement', 'High-flow oxygen', 'IV access'],
    ['Cardiovascular collapse', 'Cardiac arrest', 'Re-expansion pulmonary edema', 'Infection'],
    'Air gets trapped in the chest and builds up pressure, collapsing the lung and pushing the heart. This is a medical emergency requiring immediate needle drainage to release the pressure.',
    ['Hemodynamic instability', 'Absent unilateral breath sounds', 'Tracheal deviation', 'Clinical tension physiology']
  ),

  em(
    'status-asthmaticus',
    'Status Asthmaticus',
    'Estado Asmático',
    'respiratory',
    1,
    'CA23.0',
    'Severe asthma exacerbation refractory to initial bronchodilator therapy with risk of respiratory failure.',
    'Severe bronchospasm, mucosal edema, and mucus plugging cause airway obstruction. Increased work of breathing leads to respiratory muscle fatigue. Ventilation-perfusion mismatch causes hypoxemia and hypercapnia.',
    ['Severe dyspnea', 'Silent chest (ominous)', 'Inability to speak', 'Diaphoresis', 'Accessory muscle use', 'Altered mental status', 'PaCO2 normal or elevated'],
    ['Peak expiratory flow <50% predicted', 'ABG: respiratory acidosis', 'CXR: hyperinflation', 'Pulse oximetry', 'Rule out pneumothorax'],
    ['Continuous albuterol nebulization', 'Ipratropium bromide', 'Systemic corticosteroids', 'Magnesium sulfate', 'Consider BiPAP', 'Intubation if failing', 'Ketamine for RSI'],
    ['Respiratory arrest', 'Hypoxic brain injury', 'Pneumothorax', 'Barotrauma', 'Myopathy from steroids'],
    'Severe asthma attack where usual medicines do not work. The person struggles to breathe, uses chest and neck muscles to breathe, and may stop breathing without emergency treatment.',
    ['Silent chest', 'Altered mental status', 'PaCO2 >45 mmHg', 'Exhaustion', 'Cyanosis']
  ),

  em(
    'ards',
    'Acute Respiratory Distress Syndrome',
    'Síndrome de Dificultad Respiratoria Aguda',
    'respiratory',
    1,
    'CB01.0',
    'Acute onset of hypoxemic respiratory failure with bilateral infiltrates due to inflammatory lung injury. High mortality critical illness.',
    'Diffuse alveolar damage from inflammatory cascade. Loss of surfactant, alveolar flooding, and hyaline membrane formation cause V/Q mismatch and shunt. Stiff non-compliant lungs require high pressures to ventilate.',
    ['Severe hypoxemia', 'Bilateral crackles', 'Dyspnea', 'Tachypnea', 'Accessory muscle use', 'Confusion from hypoxia'],
    ['Bilateral infiltrates on CXR/CT', 'PaO2/FiO2 ratio <300', 'PCWP <18 (non-cardiogenic)', 'Echocardiogram to exclude CHF', 'Identify precipitant'],
    ['Lung-protective ventilation (6 mL/kg)', 'PEEP optimization', 'Prone positioning', 'Consider ECMO if refractory', 'Treat underlying cause', 'Conservative fluid strategy'],
    ['Multi-organ failure', 'Ventilator-associated pneumonia', 'Barotrauma', 'ICU-acquired weakness', 'Death (30-40% mortality)'],
    'ARDS is severe lung inflammation causing the lungs to fill with fluid, making it very hard to get oxygen into the blood. Patients need a breathing machine and intensive care.',
    ['PaO2/FiO2 <100 (severe)', 'Refractory hypoxemia', 'Multi-organ dysfunction']
  ),

  // ── Neurologic Emergencies ─────────────────────────────────────────────────
  em(
    'acute-ischemic-stroke',
    'Acute Ischemic Stroke',
    'Accidente Cerebrovascular Isquémico Agudo',
    'neurologic',
    1,
    '8B11',
    'Sudden onset focal neurologic deficit due to cerebral artery occlusion. Time-critical emergency with narrow therapeutic window for thrombolysis.',
    'Atherosclerotic plaque rupture or cardioembolism causes arterial occlusion. Cerebral ischemia leads to irreversible neuronal death. Penumbra is at-risk but salvageable tissue. Benefit of treatment declines rapidly with time.',
    ['Sudden unilateral weakness', 'Facial droop', 'Aphasia', 'Vision loss', 'Severe headache (if hemorrhagic)', 'Ataxia', 'Vertigo (posterior circulation)'],
    ['Non-contrast CT head immediately', 'CTA head/neck if LVO suspected', 'NIHSS assessment', 'Glucose, PT/INR, CBC', 'ECG', 'MRI if diagnosis unclear'],
    ['tPA within 4.5 hours if eligible', 'Mechanical thrombectomy if LVO', 'BP control per protocol', 'Aspirin within 24 hours', 'Stroke unit admission', 'Rehabilitation evaluation'],
    ['Hemorrhagic conversion', 'Cerebral edema', 'Recurrent stroke', 'Seizures', 'Aspiration pneumonia', 'Deep vein thrombosis'],
    'A stroke occurs when blood flow to part of the brain is blocked. Brain cells begin to die within minutes. Call 911 immediately if you notice face drooping, arm weakness, or speech difficulty.',
    ['Onset <4.5 hours', 'Large vessel occlusion', 'Rapidly improving symptoms', 'Severe deficits (NIHSS >20)']
  ),

  em(
    'subarachnoid-hemorrhage',
    'Subarachnoid Hemorrhage',
    'Hemorragia Subaracnoidea',
    'neurologic',
    1,
    '8B00',
    'Bleeding into subarachnoid space, usually from ruptured cerebral aneurysm. Thunderclap headache with high mortality and morbidity.',
    'Rupture of berry aneurysm at circle of Willis releases blood under arterial pressure into subarachnoid space. Increased ICP, vasospasm, and hydrocephalus are major complications. Rebleeding has very high mortality.',
    ['Thunderclap headache (worst ever)', 'Nuchal rigidity', 'Altered mental status', 'Seizures', 'Focal deficits', 'Photophobia', 'Nausea/vomiting'],
    ['Non-contrast CT head', 'Lumbar puncture if CT negative', 'CTA or MRA for aneurysm', 'Digital subtraction angiography', 'ECG (may show ST changes)'],
    ['Secure aneurysm (clipping/coiling)', 'Nimodipine for vasospasm', 'Blood pressure control', 'Treat hydrocephalus if present', 'ICU monitoring', 'Seizure prophylaxis'],
    ['Rebleeding (50% mortality)', 'Cerebral vasospasm', 'Hydrocephalus', 'Seizures', 'SIADH/cerebral salt wasting'],
    'A sudden severe headache that feels like being hit by lightning, caused by bleeding around the brain. This is a brain emergency requiring immediate surgery to stop the bleeding.',
    ['Thunderclap headache', 'Altered mental status', 'Coma', 'Seizures']
  ),

  em(
    'status-epilepticus',
    'Status Epilepticus',
    'Estado Epiléptico',
    'neurologic',
    1,
    '8A60.1',
    'Continuous seizure activity >5 minutes or recurrent seizures without recovery between episodes. Medical emergency with risk of neuronal injury.',
    'Prolonged seizure activity causes excitotoxic neuronal damage. Neurotransmitter depletion and metabolic demands exceed supply. Cardiovascular and respiratory complications from sustained convulsions.',
    ['Generalized tonic-clonic activity', 'No return to baseline between seizures', 'Altered consciousness', 'Hypoxia', 'Rhabdomyolysis', 'Hyperthermia', 'Acidosis'],
    ['Continuous EEG monitoring', 'Fingerstick glucose', 'CT head when stable', 'Labs: CBC, CMP, ABG, tox screen', 'Antiepileptic drug levels', 'Lumbar puncture if infection suspected'],
    ['Benzodiazepines first-line', 'IV levetiracetam, fosphenytoin, or valproate', 'Intubation if needed', 'Propofol or midazolam infusion', 'Treat underlying cause', 'Neuroprotective measures'],
    ['Anoxic brain injury', 'Aspiration pneumonia', 'Rhabdomyolysis', 'Acute kidney injury', 'Cardiac arrhythmias', 'Death'],
    'Seizures that continue for a long time or occur repeatedly without the person waking up between them. This can cause permanent brain damage and requires emergency medication to stop the seizures.',
    ['Seizure >5 minutes', 'No return to baseline', 'Serial seizures', 'Respiratory compromise']
  ),

  // ── Trauma Emergencies ─────────────────────────────────────────────────────
  em(
    'hemorrhagic-shock',
    'Hemorrhagic Shock',
    'Choque Hemorrágico',
    'trauma',
    1,
    'BD20',
    'Acute blood loss leading to inadequate tissue perfusion and oxygen delivery. Leading cause of preventable trauma death.',
    'Blood loss exceeds compensatory mechanisms. Tachycardia and vasoconstriction maintain perfusion initially. When blood loss >30%, hypotension and tissue hypoperfusion occur. Metabolic acidosis and coagulopathy develop.',
    ['Tachycardia', 'Hypotension', 'Cool clammy skin', 'Delayed capillary refill', 'Altered mental status', 'Decreased urine output', 'Tachypnea'],
    ['Clinical assessment', 'Blood type and crossmatch', 'Hb/Hct trending', 'Lactate and base deficit', 'FAST exam', 'CT scan when stable', 'Occult blood loss assessment'],
    ['Massive transfusion protocol', 'Control bleeding source', 'Damage control surgery', 'Permissive hypotension (until bleeding controlled)', 'TXA if within 3 hours', 'Warm blood products', 'Calcium replacement'],
    ['Multi-organ failure', 'Coagulopathy', 'Hypothermia', 'Acidosis', 'Death'],
    'Severe blood loss causes the body to go into shock from lack of oxygen delivery. This is life-threatening and requires immediate blood transfusion and stopping the bleeding.',
    ['SBP <90 mmHg', 'HR >120', 'Lactate >4', 'Base deficit >6', 'Massive transfusion needed']
  ),

  em(
    'tbi',
    'Traumatic Brain Injury',
    'Traumatismo Craneoencefálico',
    'trauma',
    1,
    'NA07',
    'Head trauma causing temporary or permanent brain dysfunction. Spectrum from concussion to severe diffuse axonal injury.',
    'Primary injury occurs at moment of impact. Secondary injury includes hypoxia, hypotension, cerebral edema, and intracranial hypertension. Increased ICP compromises cerebral perfusion. Excitotoxicity and inflammation cause ongoing damage.',
    ['Altered mental status', 'GCS <15', 'Focal neurologic deficits', 'Seizures', 'Vomiting', 'Headache', 'Amnesia', 'Battle sign/raccoon eyes (basilar skull fracture)'],
    ['Non-contrast CT head', 'GCS assessment', 'Pupil exam', 'C-spine clearance', 'ICP monitoring if severe', 'Cerebral perfusion pressure calculation'],
    ['Airway protection', 'Prevent hypotension and hypoxia', 'Elevate head 30 degrees', 'Hyperosmolar therapy if herniation', 'Neurosurgical consultation', 'ICU monitoring'],
    ['Brain herniation', 'Seizures', 'Neurogenic pulmonary edema', 'SIADH/DI', 'Permanent disability', 'Death'],
    'A head injury that damages the brain. Can range from mild concussion to severe bleeding in the brain. Emergency care focuses on preventing further brain damage.',
    ['GCS <8', 'Unequal pupils', 'Herniation signs', 'Intracranial hemorrhage', 'Open skull fracture']
  ),

  em(
    'spinal-cord-injury',
    'Spinal Cord Injury',
    'Lesión de la Médula Espinal',
    'trauma',
    1,
    'NA03',
    'Damage to spinal cord causing motor, sensory, and autonomic dysfunction below level of injury. High cervical injuries can compromise respiration.',
    'Primary injury from direct trauma. Secondary injury from ischemia, inflammation, and excitotoxicity. Spinal shock causes flaccid paralysis and areflexia initially. Neurogenic shock from loss of sympathetic tone.',
    ['Motor weakness/paralysis', 'Sensory loss', 'Neurogenic shock (hypotension + bradycardia)', 'Spinal shock (areflexia)', 'Loss of bowel/bladder control', 'Priapism', 'Respiratory failure (C3-C5 injuries)'],
    ['CT spine', 'MRI spine', 'Plain films for alignment', 'ASIA impairment scale', 'C-spine immobilization until cleared'],
    ['Maintain MAP >85-90 mmHg', 'High-dose steroids (controversial)', 'Spinal immobilization', 'Surgical decompression', 'Manage neurogenic bladder', 'DVT prophylaxis'],
    ['Permanent paralysis', 'Respiratory failure', 'Autonomic dysreflexia', 'Pressure ulcers', 'Spasticity', 'Chronic pain'],
    'Injury to the spinal cord that can cause permanent paralysis below the injury level. Immediate immobilization and maintaining blood pressure are critical to preserve function.',
    ['Complete SCI', 'Cervical level injury', 'Neurogenic shock', 'Respiratory compromise']
  ),

  // ── Toxicologic Emergencies ────────────────────────────────────────────────
  em(
    'opioid-overdose',
    'Opioid Overdose',
    'Sobredosis de Opioides',
    'toxicologic',
    1,
    'PA70',
    'Exogenous opioid intoxication causing respiratory depression, CNS depression, and miosis. Rapidly fatal without intervention.',
    'Opioid agonism at mu receptors causes analgesia, euphoria, and respiratory depression. Medullary respiratory center depression leads to CO2 retention and hypoxia. Pulmonary edema may develop. High addiction potential with chronic use.',
    ['Respiratory depression', 'Pinpoint pupils', 'Decreased level of consciousness', 'Cyanosis', 'Hypotension', 'Bradycardia', 'Track marks'],
    ['Response to naloxone (diagnostic)', 'Urine drug screen', 'ABG for CO2 retention', 'Chest X-ray if pulmonary edema', 'Serum acetaminophen level if combo product'],
    ['Naloxone 0.4-2 mg IV/IM/IN', 'Repeat naloxone as needed', 'Airway protection', 'Supplemental oxygen', 'IV access', 'Monitor for recurrent sedation'],
    ['Respiratory arrest', 'Aspiration pneumonia', 'Anoxic brain injury', 'Rhabdomyolysis', 'Recurrent overdose (naloxone wears off)'],
    'Taking too much opioid medicine (heroin, oxycodone, fentanyl) causes severe slowing or stopping of breathing. Naloxone is a life-saving medicine that reverses the effects.',
    ['Respiratory rate <8', 'Unresponsive', 'Cyanosis', 'No response to painful stimuli']
  ),

  em(
    'acetaminophen-toxicity',
    'Acetaminophen Toxicity',
    'Toxicidad por Paracetamol',
    'toxicologic',
    2,
    'PA70',
    'Hepatotoxic overdose of acetaminophen causing centrilobular hepatic necrosis. Leading cause of acute liver failure in US.',
    'Therapeutic doses metabolized via glucuronidation and sulfation. Toxic doses saturate these pathways, leading to formation of toxic metabolite NAPQI. Glutathione depletion allows NAPQI to bind hepatocyte proteins, causing necrosis.',
    ['Often asymptomatic initially', 'Nausea/vomiting', 'RUQ pain', 'Jaundice (24-72 hours)', 'Confusion (hepatic encephalopathy)', 'Bleeding (coagulopathy)'],
    ['Serum acetaminophen level', 'Rumack-Matthew nomogram', 'LFTs, INR, bilirubin', 'ABG, lactate', 'Blood glucose', 'Renal function'],
    ['N-acetylcysteine (NAC) within 8 hours', 'Activated charcoal if very early', 'Supportive care', 'Liver transplant evaluation if severe', 'Hemodialysis if extended-release'],
    ['Acute liver failure', 'Hepatic encephalopathy', 'Renal failure', 'Death without transplant'],
    'Taking too much acetaminophen (Tylenol) can destroy the liver. There is an antidote that works best if given within 8 hours of taking too much.',
    ['Potential toxic ingestion', 'Elevated acetaminophen level', 'Elevated INR', 'Encephalopathy']
  ),

  em(
    'tricyclic-overdose',
    'Tricyclic Antidepressant Overdose',
    'Sobredosis de Antidepresivos Tricíclicos',
    'toxicologic',
    1,
    'PA70',
    'Life-threatening overdose causing anticholinergic effects, sodium channel blockade, and cardiac toxicity. High mortality if untreated.',
    'Sodium channel blockade causes wide QRS and arrhythmias. Anticholinergic effects cause delirium, tachycardia, and hyperthermia. Alpha blockade causes hypotension. Seizures from GABA antagonism. Cardiovascular collapse is terminal event.',
    ['Altered mental status', 'Anticholinergic toxidrome', 'Wide QRS >100 ms', 'Ventricular arrhythmias', 'Seizures', 'Hypotension', 'Coma'],
    ['ECG: wide QRS, terminal R wave aVR', 'QRS duration predicts toxicity', 'Drug levels (not helpful acutely)', 'Toxidrome recognition'],
    ['Activated charcoal if early', 'Sodium bicarbonate for QRS >100', 'Seizure control', 'Airway protection', 'IV fluids/pressors', 'Avoid Class IA/IC antiarrhythmics'],
    ['Ventricular tachycardia/fibrillation', 'Status epilepticus', 'Cardiovascular collapse', 'Death'],
    'Overdose of older antidepressant medicines can cause dangerous heart rhythm problems and seizures. Treatment includes special IV fluids (sodium bicarbonate) to protect the heart.',
    ['QRS >100 ms', 'Ventricular arrhythmias', 'Seizures', 'Hypotension refractory to fluids']
  ),

  // ── Environmental Emergencies ──────────────────────────────────────────────
  em(
    'heat-stroke',
    'Heat Stroke',
    'Golpe de Calor',
    'environmental',
    1,
    'NF07.0',
    'Life-threatening hyperthermia with CNS dysfunction and temperature >40C. Medical emergency with high mortality.',
    'Thermoregulatory failure from heat exposure or exertion. Inflammatory cytokine release causes multi-organ damage. Direct thermal injury to cells. Rhabdomyolysis, coagulopathy, and acute kidney injury common.',
    ['Core temp >40C (104F)', 'Altered mental status', 'Hot dry skin (classic) or sweaty (exertional)', 'Seizures', 'Hypotension', 'Tachycardia', 'Hyperventilation'],
    ['Core temperature (rectal)', 'CBC, CMP, coagulation studies', 'Creatine kinase', 'ABG', 'Urine myoglobin', 'ECG'],
    ['Rapid cooling (evaporative + ice packs)', 'Cold IV fluids', 'Target temp 38-39C', 'Supportive care', 'Benzodiazepines for shivering', 'Treat complications'],
    ['Rhabdomyolysis', 'Acute kidney injury', 'DIC', 'Liver failure', 'ARDS', 'Death'],
    'Body temperature rises dangerously high, usually from heat exposure or intense exercise. The brain stops working properly. Immediate cooling is lifesaving.',
    ['Temp >40C with AMS', 'Hypotension', 'Seizures', 'Coma', 'Coagulopathy']
  ),

  em(
    'hypothermia',
    'Severe Hypothermia',
    'Hipotermia Severa',
    'environmental',
    1,
    'NF07.1',
    'Core body temperature <30C causing physiologic dysfunction. Cardiac instability with risk of VF. Handle with extreme care.',
    'Progressive slowing of metabolic processes. Decreased CO and O2 consumption. Cold-induced diuresis causes volume depletion. Myocardial irritability increases below 30C. Osborn waves on ECG.',
    ['Core temp <30C', 'Altered mental status', 'Bradycardia', 'Hypotension', 'Shivering absent (<32C)', 'Rigidity', 'Dilated pupils'],
    ['Core temperature measurement', 'ECG: Osborn J waves', 'CBC, CMP, coagulation', 'ABG (correct for temp)', 'Blood glucose', 'CK for rhabdomyolysis'],
    ['Gentle handling (avoid VF)', 'Passive rewarming if mild', 'Active external + internal rewarming if severe', 'Warm IV fluids', 'Warm humidified oxygen', 'Consider ECMO if severe'],
    ['Ventricular fibrillation', 'Cardiac arrest', 'Rhabdomyolysis', 'Pancreatitis', 'Coagulopathy', 'Death'],
    'Dangerously low body temperature that slows the heart and brain. Must be handled gently as rough movement can trigger fatal heart rhythms.',
    ['Temp <28C', 'Cardiac instability', 'Asystole', 'VF']
  ),

  em(
    'anaphylaxis',
    'Anaphylaxis',
    'Anafilaxia',
    'environmental',
    1,
    '4A84',
    'Severe systemic allergic reaction with potential for airway compromise, hypotension, and death. Rapid recognition and treatment essential.',
    'IgE-mediated mast cell and basophil activation causes release of histamine, tryptase, and other mediators. Systemic vasodilation increases capillary permeability. Bronchospasm and mucosal edema compromise airway. Biphasic reactions can occur.',
    ['Urticaria and angioedema', 'Bronchospasm/wheezing', 'Hypotension/shock', 'GI symptoms (vomiting/diarrhea)', 'Sense of doom', 'Laryngeal edema', 'Respiratory arrest'],
    ['Clinical diagnosis', 'Serum tryptase (within 15 min-3 hr)', 'Trigger identification', 'ECG if cardiac symptoms', 'CBC (elevated eosinophils)'],
    ['Epinephrine IM 0.3-0.5 mg immediately', 'Repeat epinephrine q5-15 min', 'High-flow oxygen', 'IV fluids for hypotension', 'H1/H2 antihistamines', 'Corticosteroids', 'Airway protection'],
    ['Respiratory failure', 'Cardiovascular collapse', 'Biphasic reaction', 'Death without treatment'],
    'Severe allergic reaction causing breathing difficulty and low blood pressure. Epinephrine (EpiPen) is the life-saving treatment and must be given immediately.',
    ['Airway compromise', 'Hypotension', 'Severe bronchospasm', 'Known allergen exposure with systemic symptoms']
  ),

  // ── Infectious/Medical Emergencies ─────────────────────────────────────────
  em(
    'septic-shock',
    'Septic Shock',
    'Choque Séptico',
    'infectious',
    1,
    '1G41',
    'Sepsis with persistent hypotension requiring vasopressors and elevated lactate. Multi-organ failure with high mortality.',
    'Dysregulated host response to infection causes cytokine storm, vasodilation, and capillary leak. Endothelial dysfunction and mitochondrial dysfunction cause cellular hypoxia. Coagulopathy and microvascular thrombosis compound tissue injury.',
    ['Fever or hypothermia', 'Tachycardia', 'Tachypnea', 'Altered mental status', 'Oliguria', 'Hypotension', 'Mottled skin', 'Delayed capillary refill'],
    ['Blood cultures x2 before antibiotics', 'Elevated lactate (>2 mmol/L)', 'qSOFA >=2', 'Source identification', 'Procalcitonin', 'CBC, CMP, coagulation'],
    ['Broad-spectrum antibiotics within 1 hour', '30 mL/kg crystalloid bolus', 'Norepinephrine for MAP <65', 'Vasopressin if needed', 'Hydrocortisone if refractory', 'Source control', 'ICU admission'],
    ['Multi-organ failure', 'ARDS', 'DIC', 'Acute kidney injury', 'Death (20-50% mortality)'],
    'Severe infection causes the body to go into shock with low blood pressure and organ failure. Antibiotics and fluids must be given within the first hour to save lives.',
    ['Lactate >4', 'MAP <65 despite fluids', 'qSOFA >=2', 'Need for vasopressors']
  ),

  em(
    'dk',
    'Diabetic Ketoacidosis',
    'Cetoacidosis Diabética',
    'metabolic',
    2,
    '5A21',
    'Acute metabolic complication of diabetes characterized by hyperglycemia, ketosis, and metabolic acidosis. Life-threatening if untreated.',
    'Absolute or relative insulin deficiency causes unrestrained lipolysis and hepatic ketogenesis. Ketoacid accumulation causes anion gap metabolic acidosis. Osmotic diuresis causes volume depletion and electrolyte losses.',
    ['Polyuria/polydipsia', 'Nausea/vomiting', 'Abdominal pain', 'Kussmaul respirations', 'Fruity breath odor', 'Altered mental status', 'Dehydration'],
    ['Blood glucose >250 mg/dL', 'pH <7.30', 'Bicarbonate <18 mEq/L', 'Ketones in serum/urine', 'Anion gap >12', 'Basic metabolic panel'],
    ['Aggressive IV fluids', 'Regular insulin infusion', 'Potassium replacement (if >3.3)', 'Bicarbonate if pH <6.9', 'Treat precipitant', 'Transition to subcutaneous insulin'],
    ['Cerebral edema (especially pediatric)', 'Hypokalemia', 'ARDS', 'Thromboembolism', 'Shock'],
    'A diabetes emergency where high blood sugar and lack of insulin cause the body to produce dangerous acids. Requires insulin and fluids in the hospital.',
    ['pH <7.0', 'Altered mental status', 'Severe hypotension', 'Potassium <3.3']
  ),

  em(
    'upper-gi-bleed',
    'Upper GI Hemorrhage',
    'Hemorragia Digestiva Alta',
    'surgical',
    1,
    'ME24.4',
    'Bleeding from esophagus, stomach, or duodenum. Can be massive with hemodynamic compromise. Mortality 5-10%.',
    'Common causes include peptic ulcer disease (H. pylori/NSAIDs), erosive gastritis, varices (portal hypertension), and Mallory-Weiss tears. Massive bleeding causes hypovolemic shock. Uremia impairs platelet function.',
    ['Hematemesis (bright red or coffee-ground)', 'Melena', 'Hematochezia (massive bleed)', 'Hypotension', 'Tachycardia', 'Syncope', 'Abdominal pain'],
    ['CBC (Hgb may be normal initially)', 'Type and cross', 'Coagulation studies', 'BUN/Cr ratio >36 suggests upper source', 'Nasogastric lavage', 'Upper endoscopy'],
    ['Two large-bore IVs', 'IV fluids/blood transfusion', 'PPI infusion', 'Octreotide if variceal', 'Antibiotics if cirrhotic', 'Urgent endoscopy', 'Balloon tamponade if refractory'],
    ['Rebleeding', 'Aspiration', 'Myocardial ischemia', 'Death (higher with varices)'],
    'Vomiting blood or passing black tarry stools from bleeding in the upper digestive tract. Can cause severe blood loss requiring transfusion and emergency procedures.',
    ['Hemodynamic instability', 'Hematemesis with bright red blood', 'Syncope', 'Ongoing bleeding']
  ),

  // ── Critical Care / Procedures ─────────────────────────────────────────────
  em(
    'airway-management',
    'Emergency Airway Management',
    'Manejo de Vía Aérea de Emergencia',
    'procedures',
    1,
    undefined,
    'Rapid sequence intubation and airway control for critically ill patients. High-stakes procedure with risk of hypoxia and cardiovascular collapse.',
    'Failed airway is a life-threatening emergency. Rapid sequence intubation uses sedative and paralytic for optimal intubating conditions. Cricoid pressure, preoxygenation, and positioning are key. Difficult airway algorithm must be ready.',
    ['Respiratory failure', 'Altered mental status', 'Airway obstruction', 'GCS <8', 'Hypoxemia refractory to supplemental O2', 'Inability to protect airway'],
    ['Preoxygenation with 100% O2', 'RSI medications', 'Videolaryngoscopy', 'Capnography confirmation', 'C-spine precautions if trauma', 'Difficult airway assessment'],
    ['Preoxygenate 3-5 minutes', 'Pretreatment (optional)', 'Induction + paralysis', 'Intubation with cricoid pressure', 'Confirm placement (ETCO2)', 'Post-intubation sedation'],
    ['Hypoxia', 'Esophageal intubation', 'Aspiration', 'Hemodynamic collapse', 'Failed airway', 'Cardiac arrest'],
    'Placing a breathing tube into the windpipe to help a person breathe. Used when someone cannot protect their airway or breathe adequately on their own.',
    ['Inability to intubate', 'Cannot ventilate', 'Severe hypoxia', 'Cardiac arrest during intubation']
  ),

  em(
    'central-line',
    'Central Venous Catheterization',
    'Cateterismo Venoso Central',
    'procedures',
    2,
    undefined,
    'Placement of large-bore catheter into central vein for monitoring, medications, and access. Essential skill with potential complications.',
    'Internal jugular, subclavian, or femoral approaches used. Ultrasound guidance recommended for IJ and femoral. Complications include pneumothorax, arterial puncture, and infection.',
    ['Need for vasopressors', 'Need for central venous monitoring', 'Difficult peripheral access', 'Need for TPN', 'Hemodialysis access', 'PA catheter placement'],
    ['Anatomy identification', 'Ultrasound guidance', 'Sterile technique', 'Confirm with CXR or ultrasound', 'Pressure transduction'],
    ['Sterile prep', 'Local anesthesia', 'Needle guidance with ultrasound', 'Wire placement', 'Dilator + catheter', 'Confirm position', 'Dressing'],
    ['Pneumothorax', 'Arterial puncture', 'Air embolism', 'Arrhythmia', 'Infection', 'Thrombosis'],
    'Placing a large IV into a major vein near the heart to give medicines, monitor pressures, or provide dialysis.',
    ['Arterial puncture', 'Pneumothorax', 'Air embolism', 'Cardiac arrhythmia']
  ),
];

// =============================================================================
// Exported Database & Lookup Functions
// =============================================================================

/** Complete emergency medicine specialty database */
export const EMERGENCY_MEDICINE_ENTRIES: Record<string, EmergencyEntry> = Object.fromEntries(
  entries.map(e => [e.id, e])
);

/** Array of all emergency entries for iteration */
export const EMERGENCY_MEDICINE_DATABASE: EmergencyEntry[] = entries;

/** All available emergency categories */
export const EMERGENCY_CATEGORIES: EmergencyCategory[] = [
  'cardiac', 'respiratory', 'trauma', 'neurologic', 'toxicologic',
  'environmental', 'infectious', 'metabolic', 'surgical', 'procedures', 'critical-care'
];

/** Triage level descriptions */
export const TRIAGE_LEVELS: Record<TriageLevel, { name: string; nameEs: string; description: string }> = {
  1: { name: 'Immediate', nameEs: 'Inmediato', description: 'Life-threatening, immediate intervention required' },
  2: { name: 'Emergent', nameEs: 'Emergente', description: 'Potentially life-threatening, rapid evaluation needed' },
  3: { name: 'Urgent', nameEs: 'Urgente', description: 'Stable but needs prompt evaluation' },
  4: { name: 'Less Urgent', nameEs: 'Menos Urgente', description: 'Stable, can wait for evaluation' },
  5: { name: 'Non-Urgent', nameEs: 'No Urgente', description: 'Minor condition, can be delayed' },
};

/**
 * Find emergency entry by ID
 */
export function getEmergencyEntry(id: string): EmergencyEntry | undefined {
  return EMERGENCY_MEDICINE_ENTRIES[id];
}

/**
 * Filter entries by category
 */
export function getEmergenciesByCategory(category: EmergencyCategory): EmergencyEntry[] {
  return entries.filter(e => e.category === category);
}

/**
 * Filter entries by triage level
 */
export function getEmergenciesByTriage(level: TriageLevel): EmergencyEntry[] {
  return entries.filter(e => e.triageLevel === level);
}

/**
 * Search emergency entries by name, description, or clinical features
 */
export function searchEmergencyMedicine(query: string): EmergencyEntry[] {
  const q = query.toLowerCase();
  return entries.filter(e =>
    e.name.toLowerCase().includes(q) ||
    e.nameEs.toLowerCase().includes(q) ||
    e.description.toLowerCase().includes(q) ||
    e.clinicalFeatures.some(f => f.toLowerCase().includes(q))
  );
}

/**
 * Get entries with specific emergency signs
 */
export function getEmergenciesBySign(sign: string): EmergencyEntry[] {
  const s = sign.toLowerCase();
  return entries.filter(e =>
    e.emergencySigns.some(es => es.toLowerCase().includes(s))
  );
}

// =============================================================================
// Specialty Metadata
// =============================================================================

export const EMERGENCY_MEDICINE_METADATA = {
  specialtyId: 'emergency-medicine',
  name: 'Emergency Medicine',
  nameEs: 'Medicina de Emergencias',
  description: 'Immediate evaluation, stabilization, diagnosis, and treatment of acute illnesses and injuries requiring urgent intervention.',
  totalEntries: entries.length,
  categories: EMERGENCY_CATEGORIES,
  criticalCount: entries.filter(e => e.triageLevel === 1).length,
};
