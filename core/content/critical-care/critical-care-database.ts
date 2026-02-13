/**
 * Critical Care Database - Comprehensive Reference for ICU and Emergency Medicine
 *
 * Structured database of critical care conditions, procedures, and monitoring
 * concepts for medical education within SOMA. Each entry includes pathophysiology,
 * clinical features, diagnostics, treatment, complications, patient-facing
 * explanations, and emergency warning signs.
 *
 * IMPORTANT: This content is for educational purposes only and does not
 * constitute medical advice. Clinical decisions must always be made by
 * qualified healthcare professionals.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type CriticalCareCategory =
  | 'shock'
  | 'respiratory-failure'
  | 'cardiac-arrest'
  | 'sepsis'
  | 'neurological-emergency'
  | 'toxicology'
  | 'monitoring'
  | 'procedures';

export interface CriticalCareEntry {
  id: string;
  name: string;
  nameEs: string;
  category: CriticalCareCategory;
  description: string;
  pathophysiology: string;
  clinicalFeatures: string[];
  diagnostics: string[];
  treatment: string[];
  complications: string[];
  patientExplanation: string;
  emergencySigns: string[];
}

// ---------------------------------------------------------------------------
// Compact helper
// ---------------------------------------------------------------------------

const cc = (
  id: string,
  name: string,
  nameEs: string,
  category: CriticalCareCategory,
  description: string,
  pathophysiology: string,
  clinicalFeatures: string[],
  diagnostics: string[],
  treatment: string[],
  complications: string[],
  patientExplanation: string,
  emergencySigns: string[],
): CriticalCareEntry => ({
  id,
  name,
  nameEs,
  category,
  description,
  pathophysiology,
  clinicalFeatures,
  diagnostics,
  treatment,
  complications,
  patientExplanation,
  emergencySigns,
});

// ---------------------------------------------------------------------------
// Database Entries
// ---------------------------------------------------------------------------

export const CRITICAL_CARE_ENTRIES: Record<string, CriticalCareEntry> = {
  // =========================================================================
  // SHOCK (5 entries)
  // =========================================================================

  'hypovolemic-shock': cc(
    'hypovolemic-shock',
    'Hypovolemic Shock',
    'Shock hipovolémico',
    'shock',
    'Circulatory failure caused by inadequate intravascular volume, most commonly from hemorrhage or severe dehydration.',
    'Loss of circulating volume reduces venous return and cardiac preload, leading to decreased cardiac output. Compensatory sympathetic activation initially maintains blood pressure through tachycardia and vasoconstriction, but decompensation occurs once roughly 30-40% of blood volume is lost.',
    [
      'Tachycardia with weak, thready pulse',
      'Hypotension (may be late finding due to compensatory mechanisms)',
      'Cool, clammy, pale skin',
      'Decreased urine output (<0.5 mL/kg/hr)',
      'Altered mental status progressing from anxiety to obtundation',
      'Collapsed jugular veins',
    ],
    [
      'CBC with serial hemoglobin/hematocrit',
      'Lactate level (elevated indicates tissue hypoperfusion)',
      'Basic metabolic panel and blood gas',
      'Type and crossmatch if hemorrhagic',
      'Point-of-care ultrasound (POCUS) — collapsible IVC, hyperdynamic heart',
      'FAST exam for trauma',
    ],
    [
      'Aggressive crystalloid resuscitation (30 mL/kg initial bolus)',
      'Packed red blood cell transfusion for hemorrhagic shock (target Hb > 7 g/dL)',
      'Massive transfusion protocol if indicated (1:1:1 ratio of pRBC:FFP:platelets)',
      'Identify and control source of volume loss',
      'Vasopressors (norepinephrine) if fluid-refractory',
      'Permissive hypotension strategy in traumatic hemorrhage until surgical control',
    ],
    [
      'Multi-organ dysfunction syndrome (MODS)',
      'Acute kidney injury from prolonged hypoperfusion',
      'Ischemic hepatitis (shock liver)',
      'Disseminated intravascular coagulation (DIC)',
      'Abdominal compartment syndrome after massive resuscitation',
    ],
    'Hypovolemic shock happens when your body loses too much blood or fluid. Think of it like a garden hose losing water pressure because the supply is running low. Doctors replace the lost fluid quickly with IV fluids or blood transfusions and work to stop the source of the loss.',
    [
      'Systolic blood pressure below 90 mmHg unresponsive to fluids',
      'Heart rate above 120 bpm with signs of poor perfusion',
      'Obvious uncontrolled hemorrhage',
      'Altered consciousness — confusion, unresponsiveness',
    ],
  ),

  'cardiogenic-shock': cc(
    'cardiogenic-shock',
    'Cardiogenic Shock',
    'Shock cardiogénico',
    'shock',
    'Pump failure of the heart leading to inadequate tissue perfusion, most commonly following acute myocardial infarction.',
    'Impaired myocardial contractility reduces stroke volume and cardiac output. Compensatory neurohormonal activation increases afterload and myocardial oxygen demand, worsening ischemia and creating a downward spiral. Elevated left ventricular end-diastolic pressure causes pulmonary edema.',
    [
      'Hypotension with narrow pulse pressure',
      'Pulmonary edema (crackles, dyspnea, orthopnea)',
      'Jugular venous distension',
      'Cool extremities with delayed capillary refill',
      'Altered mental status',
      'S3 gallop on cardiac auscultation',
    ],
    [
      'ECG — ST changes, arrhythmias',
      'Troponin (serial measurements)',
      'Echocardiography (reduced EF, wall motion abnormalities)',
      'Brain natriuretic peptide (BNP)',
      'Pulmonary artery catheter (elevated PCWP, low cardiac index)',
      'Chest X-ray (pulmonary congestion, cardiomegaly)',
    ],
    [
      'Inotropic support (dobutamine or milrinone)',
      'Vasopressor therapy (norepinephrine preferred)',
      'Emergent percutaneous coronary intervention for MI-related cardiogenic shock',
      'Mechanical circulatory support (IABP, Impella, ECMO)',
      'Diuretics for volume overload once perfusion stabilized',
      'Treat underlying cause (revascularization, valve repair)',
    ],
    [
      'Cardiogenic pulmonary edema and acute respiratory failure',
      'Renal failure from hypoperfusion',
      'Hepatic ischemia',
      'Limb ischemia from low-flow state or mechanical support devices',
      'Death — mortality rate 40-50% even with treatment',
    ],
    'Cardiogenic shock means your heart is too weak to pump enough blood to your body. It usually happens after a severe heart attack. Doctors use medications to strengthen the heart and may use special devices to help pump blood while treating the underlying cause.',
    [
      'Blood pressure dropping despite IV fluids',
      'Severe difficulty breathing with frothy sputum',
      'Chest pain with hemodynamic instability',
      'Worsening confusion or loss of consciousness',
    ],
  ),

  'septic-shock': cc(
    'septic-shock',
    'Septic Shock',
    'Shock séptico',
    'shock',
    'Life-threatening circulatory failure caused by a dysregulated host response to infection requiring vasopressors to maintain MAP >= 65 mmHg and lactate > 2 mmol/L despite adequate fluid resuscitation.',
    'Infection triggers a massive inflammatory cascade releasing cytokines (TNF-alpha, IL-1, IL-6). This causes widespread vasodilation, increased capillary permeability, and myocardial depression. The result is distributive shock with maldistribution of blood flow and cellular oxygen utilization failure.',
    [
      'Hypotension refractory to fluid resuscitation',
      'Warm, flushed skin initially; cool, mottled skin later',
      'Tachycardia and tachypnea',
      'Fever or hypothermia',
      'Altered mental status',
      'Decreased urine output',
    ],
    [
      'Blood cultures (at least 2 sets before antibiotics)',
      'Serum lactate (>2 mmol/L defines septic shock)',
      'Procalcitonin',
      'CBC with differential',
      'Comprehensive metabolic panel',
      'Source-specific imaging (CT, ultrasound)',
    ],
    [
      'Early broad-spectrum antibiotics within 1 hour of recognition',
      'Aggressive fluid resuscitation (30 mL/kg crystalloid within first 3 hours)',
      'Norepinephrine first-line vasopressor (target MAP >= 65 mmHg)',
      'Vasopressin as second-line agent',
      'Stress-dose hydrocortisone if vasopressor-refractory',
      'Source control (drainage of abscess, removal of infected device)',
    ],
    [
      'Multi-organ dysfunction syndrome',
      'Acute respiratory distress syndrome (ARDS)',
      'Disseminated intravascular coagulation',
      'Acute kidney injury requiring renal replacement therapy',
      'Critical illness myopathy and neuropathy',
    ],
    'Septic shock is the most severe form of an infection spreading through your body. The infection causes your blood pressure to drop dangerously low. Treatment involves strong antibiotics given immediately and fluids through an IV, along with medicines to raise your blood pressure.',
    [
      'Blood pressure remaining low despite large amounts of IV fluid',
      'Lactate level rising above 2 mmol/L',
      'Evidence of organ dysfunction (altered mentation, decreased urine)',
      'Rapid deterioration despite initial treatment',
    ],
  ),

  'anaphylactic-shock': cc(
    'anaphylactic-shock',
    'Anaphylactic Shock',
    'Shock anafiláctico',
    'shock',
    'Severe, potentially fatal systemic hypersensitivity reaction causing distributive shock through massive vasodilation and capillary leak.',
    'IgE-mediated or direct mast cell and basophil degranulation releases histamine, tryptase, prostaglandins, and leukotrienes. These mediators cause widespread vasodilation, bronchospasm, increased vascular permeability, and mucosal edema. Cardiac output drops due to profound preload reduction and direct myocardial depression.',
    [
      'Urticaria, angioedema, flushing',
      'Stridor, wheezing, respiratory distress',
      'Hypotension and tachycardia',
      'Abdominal cramping, nausea, vomiting, diarrhea',
      'Sense of impending doom',
      'Loss of consciousness',
    ],
    [
      'Clinical diagnosis — do NOT delay treatment for testing',
      'Serum tryptase (peaked 1-2 hours after onset)',
      'IgE levels and allergen-specific IgE (post-recovery workup)',
      'CBC (eosinophilia may be present)',
      'ECG to assess for Kounis syndrome (allergic coronary spasm)',
    ],
    [
      'Intramuscular epinephrine (0.3-0.5 mg of 1:1000 in anterolateral thigh) — FIRST LINE',
      'Repeat epinephrine every 5-15 minutes as needed',
      'Aggressive IV fluid resuscitation (1-2 L crystalloid rapid bolus)',
      'Adjuncts: H1 and H2 antihistamines, corticosteroids, nebulized albuterol',
      'Epinephrine infusion for refractory hypotension',
      'Secure airway early if angioedema progressing',
    ],
    [
      'Biphasic anaphylaxis (recurrence 1-72 hours after initial episode)',
      'Refractory anaphylaxis unresponsive to epinephrine',
      'Cardiac arrest',
      'Hypoxic brain injury from airway compromise',
      'Kounis syndrome (acute coronary syndrome triggered by allergic mediators)',
    ],
    'Anaphylactic shock is a severe allergic reaction that affects your whole body. It can cause your airways to swell shut and your blood pressure to drop dangerously. The most important treatment is an immediate injection of epinephrine (adrenaline). If you have a known severe allergy, always carry your epinephrine auto-injector.',
    [
      'Throat swelling or difficulty breathing after allergen exposure',
      'Sudden drop in blood pressure with hives',
      'Inability to speak or swallow',
      'Loss of consciousness following known allergen contact',
    ],
  ),

  'neurogenic-shock': cc(
    'neurogenic-shock',
    'Neurogenic Shock',
    'Shock neurogénico',
    'shock',
    'Distributive shock resulting from disruption of the autonomic nervous system, most commonly from acute spinal cord injury above T6.',
    'Injury to the spinal cord disrupts sympathetic outflow from the thoracolumbar region while parasympathetic tone (vagus nerve) remains intact. This imbalance causes loss of peripheral vascular tone (vasodilation) and unopposed vagal activity (bradycardia), leading to profound hypotension without the expected compensatory tachycardia.',
    [
      'Hypotension with bradycardia (distinguishing feature)',
      'Warm, dry, flushed skin below the level of injury',
      'Poikilothermia (inability to regulate temperature)',
      'Neurological deficits consistent with spinal cord level',
      'Priapism in males',
      'Loss of rectal tone',
    ],
    [
      'Clinical assessment of neurological level',
      'CT and MRI of the spine',
      'ECG (bradycardia, conduction abnormalities)',
      'Hemodynamic monitoring (low SVR, low-normal cardiac output)',
      'Spinal cord injury assessment (ASIA scale)',
    ],
    [
      'IV fluid resuscitation (cautious — avoid volume overload)',
      'Vasopressors: norepinephrine or phenylephrine to restore vascular tone',
      'Atropine or transcutaneous pacing for symptomatic bradycardia',
      'Maintain MAP >= 85-90 mmHg for 7 days (neuroprotection)',
      'Spinal immobilization and surgical stabilization if indicated',
      'Temperature management (warming measures)',
    ],
    [
      'Secondary spinal cord injury from prolonged hypoperfusion',
      'Pulmonary edema from over-resuscitation',
      'Deep vein thrombosis and pulmonary embolism',
      'Autonomic dysreflexia (later complication)',
      'Pressure injuries',
    ],
    'Neurogenic shock happens when a spinal cord injury disrupts the nerves that control your blood vessels and heart rate. Unlike other types of shock where your heart beats fast, in neurogenic shock your heart rate is often slow and your blood pressure drops because blood vessels relax too much. Treatment focuses on supporting blood pressure and protecting the spinal cord.',
    [
      'Low blood pressure with slow heart rate after spine injury',
      'Progressive neurological deficits',
      'Respiratory failure (high cervical injuries)',
      'Temperature instability',
    ],
  ),

  // =========================================================================
  // RESPIRATORY FAILURE (4 entries)
  // =========================================================================

  'ards': cc(
    'ards',
    'Acute Respiratory Distress Syndrome (ARDS)',
    'Síndrome de dificultad respiratoria aguda (SDRA)',
    'respiratory-failure',
    'Acute, diffuse, inflammatory lung injury causing non-cardiogenic pulmonary edema and hypoxemic respiratory failure.',
    'An initial insult (pneumonia, sepsis, aspiration, trauma) triggers a neutrophil-mediated inflammatory cascade damaging the alveolar-capillary membrane. Protein-rich edema fluid floods the alveoli, inactivating surfactant and causing alveolar collapse. The result is severe ventilation-perfusion mismatch and intrapulmonary shunting, classified by PaO2/FiO2 ratio (mild 200-300, moderate 100-200, severe <100).',
    [
      'Acute onset of severe dyspnea (within 1 week of insult)',
      'Profound hypoxemia refractory to supplemental oxygen',
      'Bilateral pulmonary infiltrates on imaging',
      'Tachypnea and increased work of breathing',
      'Cyanosis',
      'Decreased lung compliance',
    ],
    [
      'Arterial blood gas (PaO2/FiO2 ratio for severity staging)',
      'Chest X-ray (bilateral opacities not fully explained by effusions)',
      'CT chest (ground-glass opacities, consolidation, dependent atelectasis)',
      'Echocardiography (exclude cardiogenic pulmonary edema)',
      'BNP (to differentiate from heart failure)',
      'Cultures and infectious workup for underlying cause',
    ],
    [
      'Low tidal volume ventilation (6 mL/kg predicted body weight)',
      'Plateau pressure limitation (<30 cmH2O)',
      'PEEP titration guided by oxygenation and compliance',
      'Prone positioning for moderate-severe ARDS (>=16 hours/day)',
      'Conservative fluid strategy once resuscitated',
      'Neuromuscular blockade in early severe ARDS',
      'Consider ECMO for refractory hypoxemia',
    ],
    [
      'Ventilator-associated pneumonia',
      'Barotrauma (pneumothorax, pneumomediastinum)',
      'Multi-organ failure',
      'Pulmonary fibrosis (late complication)',
      'ICU-acquired weakness',
      'Long-term cognitive and psychological impairment',
    ],
    'ARDS is a severe lung condition where both lungs become badly inflamed, making it very difficult to get enough oxygen into your blood. It usually happens after a serious infection or injury. Most people with ARDS need a breathing machine (ventilator). Recovery can be slow, but many people do recover with proper intensive care.',
    [
      'Oxygen saturation below 90% despite high-flow oxygen',
      'Rapidly worsening shortness of breath',
      'Cyanosis (bluish discoloration of lips and skin)',
      'Increasing ventilator requirements',
    ],
  ),

  'status-asthmaticus': cc(
    'status-asthmaticus',
    'Status Asthmaticus',
    'Estado asmático',
    'respiratory-failure',
    'Severe, life-threatening asthma exacerbation that is refractory to standard bronchodilator therapy and may lead to respiratory failure.',
    'Persistent bronchospasm, airway inflammation, and mucus plugging lead to progressive air trapping and dynamic hyperinflation (auto-PEEP). Increasing airway resistance raises the work of breathing. As respiratory muscles fatigue, hypoventilation develops with CO2 retention. A "silent chest" indicates critical airflow obstruction.',
    [
      'Severe dyspnea with inability to speak in full sentences',
      'Diffuse wheezing progressing to silent chest',
      'Use of accessory muscles, tripod positioning',
      'Tachypnea and tachycardia',
      'Pulsus paradoxus (>12 mmHg)',
      'Diaphoresis and agitation, progressing to somnolence',
    ],
    [
      'Peak expiratory flow (often <25% predicted)',
      'Arterial blood gas (initial respiratory alkalosis, then normalization of CO2 is ominous, then respiratory acidosis)',
      'Chest X-ray (hyperinflation, rule out pneumothorax)',
      'Continuous pulse oximetry',
      'Basic metabolic panel (monitor potassium with beta-agonist use)',
    ],
    [
      'Continuous nebulized albuterol or ipratropium-albuterol',
      'IV magnesium sulfate (2 g over 20 minutes)',
      'Systemic corticosteroids (methylprednisolone 125 mg IV)',
      'Epinephrine (IM or IV) for imminent arrest',
      'Non-invasive ventilation (BiPAP) in select patients',
      'Intubation if impending respiratory failure (use ketamine for induction)',
      'Heliox consideration for severe obstruction',
    ],
    [
      'Respiratory arrest',
      'Pneumothorax from air trapping or barotrauma',
      'Myocardial ischemia from hypoxia and hyperinflation',
      'Hypokalemia from beta-agonist therapy',
      'Post-intubation hypotension (auto-PEEP reduces venous return)',
    ],
    'Status asthmaticus is a severe asthma attack that does not respond to the usual inhalers and treatments. Breathing becomes extremely difficult and can become life-threatening. If you or someone you know has asthma and their rescue inhaler is not working, call emergency services immediately. In the hospital, strong breathing treatments and other medications are used.',
    [
      'Rescue inhaler providing no relief',
      'Inability to speak full sentences due to breathlessness',
      'Chest becoming quiet (no wheezing) despite worsening distress',
      'Drowsiness or confusion during an asthma attack',
    ],
  ),

  'acute-pulmonary-embolism': cc(
    'acute-pulmonary-embolism',
    'Acute Pulmonary Embolism',
    'Embolia pulmonar aguda',
    'respiratory-failure',
    'Obstruction of pulmonary vasculature by thrombus causing acute right heart failure and hypoxemia, a leading cause of preventable hospital death.',
    'Venous thrombus (usually from deep leg veins) embolizes to the pulmonary arterial tree, increasing pulmonary vascular resistance. The right ventricle acutely dilates and fails under the increased afterload. Dead-space ventilation increases (perfusion blocked but ventilation continues), leading to hypoxemia and hypocapnia. Massive PE can cause obstructive shock.',
    [
      'Acute dyspnea (most common symptom)',
      'Pleuritic chest pain',
      'Tachycardia and tachypnea',
      'Hemoptysis',
      'Syncope or presyncope (suggests massive PE)',
      'Unilateral leg swelling (concomitant DVT)',
    ],
    [
      'CT pulmonary angiography (gold standard)',
      'D-dimer (high sensitivity, low specificity — useful for exclusion)',
      'ECG (sinus tachycardia, S1Q3T3 pattern, right heart strain)',
      'Echocardiography (RV dilation, McConnell sign)',
      'Troponin and BNP (prognostic markers)',
      'Lower extremity duplex ultrasound',
    ],
    [
      'Anticoagulation with unfractionated heparin (massive/submassive PE) or LMWH',
      'Systemic thrombolysis (alteplase) for massive PE with hemodynamic instability',
      'Catheter-directed therapy for submassive PE in select patients',
      'Surgical embolectomy if thrombolysis contraindicated',
      'IVC filter if anticoagulation absolutely contraindicated',
      'Hemodynamic support with fluids and vasopressors as needed',
      'Transition to long-term anticoagulation (DOAC preferred)',
    ],
    [
      'Obstructive shock and cardiac arrest',
      'Chronic thromboembolic pulmonary hypertension (CTEPH)',
      'Recurrent PE',
      'Major bleeding from anticoagulation or thrombolysis',
      'Right heart failure',
    ],
    'A pulmonary embolism is a blood clot that travels to the lungs and blocks blood flow. It often starts as a clot in the legs. Symptoms include sudden shortness of breath and chest pain. This is a medical emergency. Treatment involves blood-thinning medicines, and in severe cases, clot-dissolving drugs.',
    [
      'Sudden severe shortness of breath without explanation',
      'Chest pain worsening with breathing',
      'Fainting or near-fainting episode',
      'Coughing up blood',
    ],
  ),

  'tension-pneumothorax': cc(
    'tension-pneumothorax',
    'Tension Pneumothorax',
    'Neumotórax a tensión',
    'respiratory-failure',
    'Life-threatening accumulation of air in the pleural space under pressure, causing mediastinal shift and cardiovascular collapse.',
    'A one-way valve mechanism allows air to enter the pleural space during inspiration but prevents its escape during expiration. Progressive air accumulation increases intrapleural pressure, collapsing the ipsilateral lung and shifting the mediastinum to the contralateral side. This compresses the contralateral lung and obstructs venous return to the heart, causing obstructive shock.',
    [
      'Severe respiratory distress and hypoxia',
      'Absent breath sounds on the affected side',
      'Hypotension and tachycardia',
      'Tracheal deviation away from affected side (late finding)',
      'Jugular venous distension',
      'Subcutaneous emphysema',
    ],
    [
      'Clinical diagnosis — do NOT delay treatment for imaging',
      'Point-of-care ultrasound (absent lung sliding)',
      'Chest X-ray (if patient stable enough — hyperlucency, mediastinal shift)',
      'CT chest (definitive but rarely needed acutely)',
      'Arterial blood gas (hypoxemia, respiratory acidosis)',
    ],
    [
      'Immediate needle decompression (14-gauge needle, 2nd intercostal space, midclavicular line or 5th intercostal space, anterior axillary line)',
      'Followed by tube thoracostomy (chest tube placement)',
      'Supplemental oxygen',
      'Hemodynamic support as needed',
      'Surgical repair if air leak persists (VATS, thoracotomy)',
    ],
    [
      'Cardiac arrest (PEA) if untreated',
      'Contralateral lung compression',
      'Hemopneumothorax',
      'Re-expansion pulmonary edema after decompression',
      'Persistent air leak',
    ],
    'A tension pneumothorax is when air gets trapped in the space around your lung and builds up pressure, pushing on your heart and the other lung. It is a true emergency. Doctors treat it by releasing the trapped air with a needle and then placing a chest tube. Without treatment, it can be rapidly fatal.',
    [
      'Sudden severe chest pain with worsening breathing difficulty',
      'Absent breath sounds on one side',
      'Neck veins bulging with low blood pressure',
      'Rapid deterioration in a trauma or ventilated patient',
    ],
  ),

  // =========================================================================
  // CARDIAC ARREST (3 entries)
  // =========================================================================

  'ventricular-fibrillation-cardiac-arrest': cc(
    'ventricular-fibrillation-cardiac-arrest',
    'Ventricular Fibrillation / Pulseless VT Cardiac Arrest',
    'Fibrilación ventricular / TV sin pulso - paro cardíaco',
    'cardiac-arrest',
    'Shockable cardiac arrest rhythm characterized by chaotic ventricular electrical activity (VF) or organized but pulseless ventricular tachycardia, both producing no effective cardiac output.',
    'In VF, multiple re-entrant circuits cause asynchronous ventricular depolarization with no coordinated contraction. In pulseless VT, a single re-entrant circuit fires rapidly but does not generate meaningful forward flow. Common causes include acute MI, electrolyte abnormalities, and structural heart disease. Without defibrillation, VF degenerates to asystole.',
    [
      'Unresponsiveness and absence of pulse',
      'Agonal or absent respirations',
      'VF: irregular, chaotic waveform on monitor',
      'Pulseless VT: wide-complex, regular tachycardia without detectable pulse',
      'Preceding symptoms may include chest pain, palpitations, syncope',
    ],
    [
      'Cardiac monitor / defibrillator (rhythm identification)',
      'End-tidal CO2 (confirm CPR quality and ROSC)',
      'Point-of-care ultrasound (assess cardiac activity, reversible causes)',
      'Post-ROSC: 12-lead ECG, troponin, electrolytes, ABG',
      'Post-ROSC: CT head and coronary angiography as indicated',
    ],
    [
      'Immediate high-quality CPR (push hard, push fast, minimize interruptions)',
      'Early defibrillation (biphasic 120-200J for VF, synchronized 100-200J for pulseless VT)',
      'Epinephrine 1 mg IV every 3-5 minutes',
      'Amiodarone 300 mg IV first dose, then 150 mg for refractory VF/pVT',
      'Identify and treat reversible causes (H\'s and T\'s)',
      'Targeted temperature management (32-36°C) post-ROSC',
      'Emergent cardiac catheterization if STEMI suspected',
    ],
    [
      'Anoxic brain injury',
      'Post-cardiac arrest syndrome (myocardial stunning, systemic ischemia-reperfusion)',
      'Recurrent arrest',
      'Aspiration pneumonia',
      'Rib fractures from CPR',
    ],
    'Ventricular fibrillation and pulseless ventricular tachycardia are dangerous heart rhythms where the heart quivers or beats too fast to pump blood. This is a cardiac arrest — the person has no pulse and is not breathing normally. Immediate CPR and shock from a defibrillator (AED) are lifesaving. Every minute without treatment reduces survival.',
    [
      'Person collapses and is unresponsive',
      'No pulse detected',
      'No normal breathing (gasping does not count)',
      'Shockable rhythm identified on AED or monitor',
    ],
  ),

  'pea-asystole': cc(
    'pea-asystole',
    'PEA / Asystole Cardiac Arrest',
    'AESP / asistolia - paro cardíaco',
    'cardiac-arrest',
    'Non-shockable cardiac arrest rhythms. PEA (pulseless electrical activity) shows organized electrical activity without a pulse; asystole shows no electrical activity.',
    'PEA results from profound mechanical-electrical dissociation — the heart has organized electrical signals but cannot generate effective contraction, often due to a specific reversible cause (H\'s and T\'s). Asystole represents complete absence of ventricular electrical activity and is usually a terminal rhythm. Both require aggressive search for treatable causes.',
    [
      'Unresponsiveness with no palpable pulse',
      'PEA: organized rhythm on monitor but no pulse',
      'Asystole: flat line confirmed in multiple leads',
      'Agonal or absent respirations',
      'Often preceded by progressive bradycardia or deterioration',
    ],
    [
      'Confirm asystole in 2 leads (rule out fine VF)',
      'End-tidal CO2 monitoring',
      'Point-of-care ultrasound (cardiac standstill vs. pseudo-PEA)',
      'Rapid bedside glucose',
      'Blood gas and electrolytes',
      'Temperature (hypothermia is a treatable cause)',
    ],
    [
      'Immediate high-quality CPR',
      'Epinephrine 1 mg IV every 3-5 minutes',
      'Do NOT defibrillate (non-shockable rhythms)',
      'Systematic search for reversible causes: Hypovolemia, Hypoxia, H+ (acidosis), Hypo/Hyperkalemia, Hypothermia, Tension pneumothorax, Tamponade, Toxins, Thrombosis (PE/MI)',
      'Treat identified cause aggressively (e.g., fluids, needle decompression, pericardiocentesis)',
      'Consider sodium bicarbonate for severe acidosis or hyperkalemia',
    ],
    [
      'Irreversible cardiac arrest (especially prolonged asystole)',
      'Anoxic brain injury',
      'Post-cardiac arrest multi-organ failure',
      'Futility — asystole carries worse prognosis than VF/VT',
    ],
    'PEA and asystole are cardiac arrest rhythms that cannot be treated with a shock from a defibrillator. In PEA, the heart shows electrical signals but is not actually pumping. In asystole, all heart activity has stopped. CPR and medications are given while doctors urgently search for a fixable cause, such as a blood clot or blood loss.',
    [
      'Unresponsive patient with no pulse',
      'Flat line on heart monitor (confirm in multiple leads)',
      'Organized rhythm on monitor but no signs of circulation',
      'Known reversible cause present (e.g., overdose, hypothermia)',
    ],
  ),

  'post-cardiac-arrest-care': cc(
    'post-cardiac-arrest-care',
    'Post-Cardiac Arrest Care',
    'Cuidados posparo cardíaco',
    'cardiac-arrest',
    'Structured management of patients who achieve return of spontaneous circulation (ROSC) after cardiac arrest, targeting neurological recovery and hemodynamic stability.',
    'ROSC initiates a whole-body ischemia-reperfusion syndrome. Systemic inflammation, myocardial stunning, and endothelial activation mirror sepsis-like physiology. Brain injury occurs during arrest (primary) and continues after ROSC (secondary) through reperfusion injury, cerebral edema, and micro-thrombosis. Targeted temperature management reduces neuronal apoptosis and inflammatory cascades.',
    [
      'Hemodynamic instability (post-arrest myocardial dysfunction)',
      'Persistent coma or altered consciousness',
      'Metabolic acidosis (lactate clearance as prognostic marker)',
      'Seizures (may be subtle or non-convulsive)',
      'Multi-organ dysfunction',
      'Fever (associated with worse neurological outcomes)',
    ],
    [
      '12-lead ECG (assess for STEMI, arrhythmias)',
      'CT head (exclude intracranial hemorrhage)',
      'Continuous EEG monitoring (detect non-convulsive seizures)',
      'Serial lactate (clearance predicts outcomes)',
      'Echocardiography (assess myocardial function)',
      'MRI brain (72+ hours for prognostication)',
      'Neuron-specific enolase (NSE) at 48-72 hours',
    ],
    [
      'Targeted temperature management at 32-36°C for at least 24 hours',
      'Hemodynamic optimization (target MAP > 65 mmHg, SBP > 90 mmHg)',
      'Mechanical ventilation targeting SpO2 94-98%, normocapnia',
      'Emergent coronary angiography if STEMI or high suspicion for MI',
      'Seizure management (avoid prophylactic anticonvulsants; treat if identified)',
      'Multimodal neuroprognostication at 72+ hours (clinical exam, EEG, SSEP, imaging, biomarkers)',
      'Avoid premature withdrawal of life-sustaining treatment',
    ],
    [
      'Anoxic-ischemic brain injury (most common cause of death)',
      'Cardiogenic shock from myocardial stunning',
      'Rearrest',
      'Sepsis (post-arrest immunosuppression)',
      'Chronic neurological disability',
    ],
    'After the heart is restarted following a cardiac arrest, the body needs intensive care to recover. Doctors cool the body slightly to protect the brain, support blood pressure, and identify why the arrest happened. It takes several days before doctors can determine how well the brain will recover. Families should ask the care team questions and understand that prognosis is not rushed.',
    [
      'Recurrence of cardiac arrest after ROSC',
      'Persistent hemodynamic instability requiring escalating vasopressors',
      'Status epilepticus on EEG monitoring',
      'Signs of acute coronary syndrome post-arrest',
    ],
  ),

  // =========================================================================
  // SEPSIS (3 entries)
  // =========================================================================

  'sepsis-identification': cc(
    'sepsis-identification',
    'Sepsis Identification and Early Management',
    'Identificación y manejo temprano de sepsis',
    'sepsis',
    'Life-threatening organ dysfunction caused by a dysregulated host response to infection, identified using SOFA score criteria.',
    'Infection activates innate immune cells, releasing pro-inflammatory cytokines (TNF-alpha, IL-1beta, IL-6) and triggering the complement and coagulation cascades. Endothelial damage increases capillary permeability and promotes microvascular thrombosis. The result is tissue hypoperfusion and progressive organ dysfunction. Sepsis exists on a continuum from infection to sepsis to septic shock.',
    [
      'Suspected or documented infection plus acute organ dysfunction',
      'Tachycardia (HR > 90) and tachypnea (RR > 22)',
      'Fever (>38.3°C) or hypothermia (<36°C)',
      'Altered mental status (new confusion)',
      'Hypotension or MAP < 65 mmHg',
      'Mottled skin, delayed capillary refill',
    ],
    [
      'qSOFA score (RR >= 22, altered mentation, SBP <= 100)',
      'SOFA score calculation (assess 6 organ systems)',
      'Blood cultures (2+ sets before antibiotics)',
      'Serum lactate (>2 mmol/L indicates hypoperfusion)',
      'Procalcitonin (trend for antibiotic stewardship)',
      'CBC, CMP, coagulation studies, urinalysis, chest X-ray',
    ],
    [
      'Sepsis bundle: within 1 hour — obtain cultures, measure lactate, administer broad-spectrum antibiotics, begin fluid resuscitation',
      'Crystalloid 30 mL/kg within first 3 hours for hypotension or lactate >= 4 mmol/L',
      'Reassess volume status and tissue perfusion',
      'Narrow antibiotics based on culture sensitivities',
      'Source identification and control (imaging, drainage)',
      'Monitor for organ dysfunction progression',
    ],
    [
      'Progression to septic shock',
      'Multi-organ dysfunction syndrome',
      'Disseminated intravascular coagulation',
      'Secondary infections (Clostridioides difficile, fungal)',
      'Long-term immune dysfunction and increased mortality risk',
    ],
    'Sepsis is your body\'s extreme and dangerous response to an infection. Instead of fighting just the infection, your immune system starts damaging your own organs. Early signs include fever, fast breathing, confusion, and feeling very ill. Getting antibiotics and IV fluids quickly is critical — every hour of delay increases risk. If you suspect sepsis, seek emergency care immediately.',
    [
      'Fever with confusion or altered mental status',
      'Fast breathing (>22 breaths/min) with infection',
      'Low blood pressure with suspected infection',
      'Not making urine despite drinking fluids',
    ],
  ),

  'sepsis-source-control': cc(
    'sepsis-source-control',
    'Sepsis Source Control',
    'Control de foco séptico',
    'sepsis',
    'Identification and physical elimination of the source of infection, a cornerstone of sepsis management when antibiotics alone are insufficient.',
    'Many infections require more than antimicrobials to resolve. Abscesses contain walled-off collections of purulent material where antibiotics penetrate poorly. Infected prosthetic material forms biofilm that resists antibiotic activity. Ischemic or necrotic tissue serves as a nidus for ongoing bacterial proliferation. Source control removes these reservoirs, reducing bacterial burden and allowing host immunity and antibiotics to be effective.',
    [
      'Persistent fever and bacteremia despite appropriate antibiotics',
      'Localizing signs (abdominal pain, wound erythema, flank pain)',
      'Imaging revealing drainable collection or infected source',
      'Worsening organ dysfunction despite initial resuscitation',
      'Infected foreign body or prosthetic device',
    ],
    [
      'CT with IV contrast (most common for abscess identification)',
      'Ultrasound (biliary, soft tissue, pelvic collections)',
      'MRI (spinal epidural abscess, deep soft tissue infections)',
      'Blood cultures (persistent positivity suggests uncontrolled source)',
      'Surgical consultation for operative sources',
    ],
    [
      'Percutaneous drainage of abscesses (CT or ultrasound-guided)',
      'Surgical debridement of necrotic tissue (necrotizing fasciitis, pancreatic necrosis)',
      'Removal of infected prosthetic material (lines, devices, implants)',
      'Cholecystectomy or cholecystostomy for biliary sepsis',
      'Timing: as soon as feasible, ideally within 6-12 hours of identification',
      'Balance operative risk vs. benefit in hemodynamically unstable patients',
    ],
    [
      'Procedure-related bleeding or organ injury',
      'Fistula formation after drainage',
      'Incomplete source control requiring re-intervention',
      'Hemodynamic instability during intervention',
      'Prolonged need for antimicrobial therapy',
    ],
    'Source control means finding and removing the source of an infection in your body. Sometimes antibiotics alone cannot clear an infection — for example, if pus has collected in an abscess, it needs to be drained. Doctors may use a needle guided by imaging, or surgery may be needed. Removing the source of infection gives antibiotics the best chance to work.',
    [
      'Fever not improving after 48-72 hours of appropriate antibiotics',
      'Known abscess not yet drained',
      'Infected surgical hardware or central line',
      'Worsening clinical status with suspected undrained infection',
    ],
  ),

  'fungal-sepsis': cc(
    'fungal-sepsis',
    'Invasive Candidiasis and Fungal Sepsis',
    'Candidiasis invasiva y sepsis fúngica',
    'sepsis',
    'Bloodstream infection caused by Candida species or other fungi, associated with high mortality in critically ill patients.',
    'Candida species are normal commensals of skin and mucosal surfaces. In immunocompromised or critically ill patients (prolonged ICU stay, broad-spectrum antibiotics, central venous catheters, TPN, abdominal surgery), Candida translocates across damaged mucosal barriers into the bloodstream. Biofilm formation on catheters provides a persistent nidus. The inflammatory response mirrors bacterial sepsis but diagnosis is often delayed.',
    [
      'Persistent fever despite broad-spectrum antibacterial therapy',
      'Hemodynamic instability similar to bacterial sepsis',
      'Endophthalmitis (eye involvement — blurred vision, eye pain)',
      'Skin lesions (nodular, erythematous)',
      'Hepatosplenic candidiasis (in neutropenic patients)',
      'Risk factors: central lines, TPN, prior antibiotics, GI surgery',
    ],
    [
      'Blood cultures (sensitivity only 50% for candidemia — often delayed)',
      'Beta-D-glucan (panfungal biomarker)',
      'T2 Candida panel (rapid PCR-based detection)',
      'Ophthalmologic exam (rule out endophthalmitis)',
      'Echocardiography (rule out endocarditis)',
      'Species identification and antifungal susceptibility testing',
    ],
    [
      'Echinocandin first-line (micafungin, caspofungin, or anidulafungin)',
      'Remove all central venous catheters if possible',
      'Fluconazole step-down for susceptible Candida albicans after clinical improvement',
      'Dilated ophthalmologic exam within 1 week',
      'Duration: minimum 14 days after first negative blood culture',
      'Amphotericin B for resistant species or echinocandin failure',
    ],
    [
      'Metastatic seeding (endophthalmitis, endocarditis, osteomyelitis)',
      'Persistent candidemia despite therapy',
      'Echinocandin-resistant species (especially C. auris)',
      'Antifungal drug toxicity (nephrotoxicity with amphotericin)',
      'Mortality rate 30-40% despite treatment',
    ],
    'Fungal sepsis is a serious bloodstream infection caused by yeast (usually Candida). It typically affects very sick patients in the ICU, especially those with central IV lines or who have been on antibiotics for a long time. It can look just like a bacterial infection but requires different antifungal medications. The infected IV lines usually need to be removed.',
    [
      'Fever persisting despite appropriate antibacterial antibiotics in ICU patient',
      'Positive blood culture for Candida species',
      'New visual changes in a patient with candidemia',
      'Hemodynamic instability with no identified bacterial source',
    ],
  ),

  // =========================================================================
  // NEUROLOGICAL EMERGENCY (4 entries)
  // =========================================================================

  'status-epilepticus': cc(
    'status-epilepticus',
    'Status Epilepticus',
    'Estado epiléptico',
    'neurological-emergency',
    'Continuous seizure activity lasting more than 5 minutes or two or more seizures without return to baseline, representing a neurological emergency.',
    'Sustained seizure activity causes excitotoxicity through excessive glutamate release and intracellular calcium accumulation, leading to neuronal death. After approximately 30 minutes, GABA receptor internalization makes benzodiazepines progressively less effective. Systemic complications include hyperthermia, rhabdomyolysis, metabolic acidosis, and cardiorespiratory compromise. Non-convulsive status epilepticus may occur without visible motor activity.',
    [
      'Generalized tonic-clonic activity lasting >5 minutes',
      'Recurrent seizures without return to baseline consciousness',
      'Subtle motor activity (eye deviation, facial twitching) in later stages',
      'Persistent altered mental status (consider non-convulsive SE)',
      'Hyperthermia, tachycardia, hypertension during active seizure',
      'Post-ictal features if seizure has terminated',
    ],
    [
      'Continuous EEG monitoring (essential for detecting non-convulsive SE)',
      'Point-of-care glucose',
      'Basic metabolic panel (calcium, magnesium, sodium)',
      'Antiepileptic drug levels if on therapy',
      'CT head (rule out structural cause)',
      'Lumbar puncture if infectious etiology suspected',
      'Toxicology screen',
    ],
    [
      'First-line: benzodiazepines — lorazepam 0.1 mg/kg IV or midazolam 10 mg IM',
      'Second-line: levetiracetam 60 mg/kg IV, fosphenytoin 20 mg PE/kg IV, or valproate 40 mg/kg IV',
      'Refractory SE (>30 min): continuous infusion of propofol, midazolam, or pentobarbital with EEG monitoring',
      'Airway protection (intubation may be needed)',
      'Treat underlying cause (infection, metabolic, structural, toxin)',
      'Avoid hyperthermia — active cooling if temp >40°C',
    ],
    [
      'Permanent neuronal injury and epilepsy worsening',
      'Rhabdomyolysis and acute kidney injury',
      'Aspiration pneumonia',
      'Cerebral edema',
      'Death (mortality 10-20% for convulsive SE)',
    ],
    'Status epilepticus is a prolonged seizure or repeated seizures without recovery in between. This is a brain emergency. Medication is given urgently to stop the seizure because the longer it lasts, the harder it is to control and the more damage it can cause. If you see someone having a seizure lasting more than 5 minutes, call emergency services immediately.',
    [
      'Seizure activity lasting more than 5 minutes',
      'Multiple seizures without waking up between them',
      'Persistent unresponsiveness after apparent seizure stops',
      'New onset prolonged seizure in a patient without epilepsy history',
    ],
  ),

  'raised-intracranial-pressure': cc(
    'raised-intracranial-pressure',
    'Raised Intracranial Pressure',
    'Hipertensión intracraneal',
    'neurological-emergency',
    'Elevation of pressure within the cranial vault (>20 mmHg) threatening cerebral perfusion and risking brain herniation.',
    'The rigid skull contains a fixed volume (brain ~80%, blood ~10%, CSF ~10%). The Monro-Kellie doctrine states that an increase in one compartment must be offset by a decrease in another. Compensatory mechanisms (CSF displacement, venous blood displacement) are limited. Once exhausted, ICP rises exponentially. Cerebral perfusion pressure (CPP = MAP - ICP) falls, causing ischemia. Herniation syndromes occur when brain tissue shifts across fixed structures.',
    [
      'Headache (worse in morning, with Valsalva)',
      'Nausea and projectile vomiting',
      'Papilledema on fundoscopy',
      'Altered consciousness (GCS decline)',
      'Cushing triad (hypertension, bradycardia, irregular respiration) — late, ominous sign',
      'Unilateral fixed dilated pupil (uncal herniation)',
    ],
    [
      'CT head without contrast (mass lesion, hydrocephalus, edema, hemorrhage)',
      'ICP monitoring (EVD or intraparenchymal bolt)',
      'Neurological examination and GCS trending',
      'CT angiography or MRI as indicated',
      'Fundoscopy (papilledema)',
      'Serum osmolality and sodium (guide osmotherapy)',
    ],
    [
      'Elevate head of bed 30 degrees, keep head midline',
      'Osmotherapy: mannitol 0.5-1 g/kg IV or hypertonic saline (23.4% 30 mL bolus)',
      'CSF drainage via external ventricular drain',
      'Controlled hyperventilation (target PaCO2 30-35 mmHg — short-term bridge only)',
      'Sedation and analgesia to reduce metabolic demand',
      'Decompressive craniectomy for refractory elevation',
      'Treat underlying cause (tumor resection, hematoma evacuation, shunt for hydrocephalus)',
    ],
    [
      'Brain herniation syndromes (uncal, transtentorial, tonsillar)',
      'Cerebral infarction from impaired perfusion',
      'Diabetes insipidus (pituitary stalk compression)',
      'Brain death',
      'Complications of ICP monitors (infection, hemorrhage)',
    ],
    'Raised intracranial pressure means pressure is building inside the skull, which can squeeze and damage the brain. Causes include bleeding, swelling, tumors, or excess fluid. Symptoms include severe headache, vomiting, and confusion. This is a medical emergency. Doctors use medications, drain fluid, and sometimes surgery to lower the pressure and protect the brain.',
    [
      'Sudden severe headache with vomiting and vision changes',
      'Rapidly declining consciousness (GCS drop >=2 points)',
      'One pupil larger than the other and not reacting to light',
      'Cushing triad: high blood pressure + slow heart rate + irregular breathing',
    ],
  ),

  'acute-ischemic-stroke-icu': cc(
    'acute-ischemic-stroke-icu',
    'Acute Ischemic Stroke — ICU Management',
    'Accidente cerebrovascular isquémico agudo — manejo en UCI',
    'neurological-emergency',
    'Acute cerebral infarction requiring intensive care for reperfusion therapy, monitoring, and complication management.',
    'Arterial occlusion (thrombotic or embolic) deprives brain tissue of oxygen and glucose. The ischemic core undergoes irreversible injury within minutes. Surrounding penumbral tissue is hypoperfused but viable if reperfused promptly. Time-dependent salvage is the basis for "time is brain." Large territory strokes may develop malignant cerebral edema with mass effect and herniation risk.',
    [
      'Acute focal neurological deficit (hemiparesis, aphasia, neglect)',
      'NIHSS score quantifies deficit severity',
      'Sudden onset — identify last known well time',
      'Large vessel occlusion signs: gaze preference, dense hemiplegia',
      'Posterior circulation: vertigo, diplopia, ataxia, decreased consciousness',
      'Malignant edema: declining consciousness 24-72 hours post-stroke',
    ],
    [
      'Non-contrast CT head (exclude hemorrhage)',
      'CT angiography (identify large vessel occlusion)',
      'CT perfusion (define core-penumbra mismatch for extended window)',
      'MRI with DWI/FLAIR (definitive ischemic assessment)',
      'Point-of-care glucose (exclude hypoglycemia)',
      'Coagulation studies, CBC, basic metabolic panel',
    ],
    [
      'IV alteplase within 4.5 hours of symptom onset (0.9 mg/kg, max 90 mg)',
      'Mechanical thrombectomy for large vessel occlusion within 24 hours (select patients with favorable perfusion imaging)',
      'Blood pressure management: permissive hypertension (<220/120 if no thrombolysis; <185/110 if thrombolysis given)',
      'Maintain euglycemia (avoid both hypo- and hyperglycemia)',
      'DVT prophylaxis (intermittent pneumatic compression initially)',
      'Decompressive hemicraniectomy for malignant MCA infarction in select patients <60 years',
      'Swallow screen before oral intake',
    ],
    [
      'Hemorrhagic transformation (especially post-thrombolysis)',
      'Malignant cerebral edema and herniation',
      'Aspiration pneumonia',
      'DVT and pulmonary embolism',
      'Post-stroke seizures',
      'Post-stroke depression',
    ],
    'An ischemic stroke happens when a blood clot blocks a blood vessel in the brain. Brain cells begin to die within minutes without blood flow. The most important factor is time — clot-dissolving medication works best within hours of symptom onset, and clot-removal procedures can be done in select patients. Recognizing stroke signs (face drooping, arm weakness, speech difficulty) and calling emergency services immediately saves brain tissue.',
    [
      'Sudden face drooping, arm weakness, or speech difficulty (F.A.S.T.)',
      'Sudden severe headache with neurological symptoms',
      'Rapid decline in consciousness in a stroke patient (herniation concern)',
      'Bleeding symptoms after receiving clot-dissolving medication',
    ],
  ),

  'meningitis-encephalitis': cc(
    'meningitis-encephalitis',
    'Acute Bacterial Meningitis and Encephalitis',
    'Meningitis bacteriana aguda y encefalitis',
    'neurological-emergency',
    'Life-threatening CNS infections: meningitis involves the meninges; encephalitis involves the brain parenchyma. Both require emergent diagnosis and treatment.',
    'Bacterial meningitis: pathogens (Streptococcus pneumoniae, Neisseria meningitidis, Listeria in elderly/immunocompromised) access the CSF via hematogenous spread. The subarachnoid space has limited immune defenses, allowing rapid bacterial proliferation. Inflammation increases the blood-brain barrier permeability, causing cerebral edema and raised ICP. Encephalitis (usually viral — HSV, arbovirus) directly infects neurons, causing inflammation, hemorrhagic necrosis (especially temporal lobes in HSV), and edema.',
    [
      'Classic triad of meningitis: fever, neck stiffness, altered mental status (present in <50%)',
      'Severe headache and photophobia',
      'Petechial or purpuric rash (meningococcal)',
      'Seizures (more common in encephalitis)',
      'Focal neurological deficits (encephalitis)',
      'Kernig and Brudzinski signs',
    ],
    [
      'Lumbar puncture with CSF analysis (opening pressure, cell count, protein, glucose, Gram stain, culture)',
      'Blood cultures (before antibiotics if possible, but do NOT delay treatment)',
      'CT head before LP if: immunocompromised, CNS lesion history, papilledema, focal deficits, new seizure',
      'CSF PCR panel (HSV, enterovirus, other pathogens)',
      'CSF lactate (elevated in bacterial meningitis)',
      'MRI brain with contrast (encephalitis — temporal lobe enhancement in HSV)',
    ],
    [
      'Empiric antibiotics IMMEDIATELY (do NOT wait for LP): vancomycin + ceftriaxone +/- ampicillin (if Listeria coverage needed)',
      'Dexamethasone 0.15 mg/kg before or with first antibiotic dose (proven benefit in pneumococcal meningitis)',
      'Acyclovir 10 mg/kg IV q8h if HSV encephalitis suspected (do not wait for PCR results)',
      'Seizure management',
      'ICP management if elevated',
      'Chemoprophylaxis for close contacts (meningococcal — rifampin or ciprofloxacin)',
    ],
    [
      'Cerebral edema and herniation',
      'Cerebral venous sinus thrombosis',
      'Hydrocephalus',
      'Hearing loss (especially pneumococcal meningitis)',
      'Cognitive and neurological sequelae',
      'Mortality: 15-25% for bacterial meningitis despite treatment',
    ],
    'Meningitis is an infection of the protective membranes around the brain and spinal cord. Encephalitis is an infection of the brain itself. Both cause fever, severe headache, and confusion, and they are medical emergencies. Antibiotics (for bacterial) or antiviral medications (for viral) must be started immediately. A spinal tap helps doctors identify the cause. Some forms of meningitis are contagious, and close contacts may need preventive treatment.',
    [
      'Fever with stiff neck and altered mental status',
      'Rapidly spreading purplish rash (meningococcal)',
      'New seizures with fever',
      'Rapidly declining consciousness',
    ],
  ),

  // =========================================================================
  // TOXICOLOGY (4 entries)
  // =========================================================================

  'opioid-overdose': cc(
    'opioid-overdose',
    'Opioid Overdose',
    'Sobredosis de opioides',
    'toxicology',
    'Life-threatening respiratory depression caused by opioid receptor agonism, reversible with naloxone.',
    'Opioids bind mu-receptors in the brainstem respiratory centers (pre-Bötzinger complex), depressing the ventilatory response to hypoxia and hypercapnia. Progressive respiratory depression leads to hypoventilation, hypoxemia, hypercarbia, respiratory acidosis, and ultimately respiratory arrest. Central apnea may occur. Non-cardiogenic pulmonary edema can develop. Death results from respiratory failure.',
    [
      'Respiratory depression (RR <12, shallow breathing, apnea)',
      'Miosis (pinpoint pupils) — classic triad with respiratory depression and decreased consciousness',
      'Decreased level of consciousness to coma',
      'Cyanosis',
      'Hypotension and bradycardia',
      'Needle marks (IV drug use) — but many opioid overdoses are from prescription drugs',
    ],
    [
      'Clinical diagnosis — treatment should not be delayed',
      'Pulse oximetry and capnography (elevated EtCO2)',
      'Arterial blood gas (respiratory acidosis)',
      'Urine drug screen (qualitative — may not detect synthetic opioids like fentanyl)',
      'Point-of-care glucose (exclude hypoglycemia)',
      'ECG (QTc prolongation with methadone)',
    ],
    [
      'Naloxone (Narcan) 0.04-0.4 mg IV/IM/IN, titrated to respiratory effort (not consciousness)',
      'Bag-valve-mask ventilation while awaiting naloxone effect',
      'Repeat naloxone every 2-3 minutes if no response (up to 10 mg for synthetic opioids)',
      'Naloxone infusion for long-acting opioid ingestion (two-thirds of reversal dose per hour)',
      'Endotracheal intubation if naloxone insufficient',
      'Observation: minimum 4-6 hours (longer for sustained-release formulations or fentanyl)',
      'Social work and addiction medicine consultation before discharge',
    ],
    [
      'Recurrent respiratory depression (opioid half-life exceeds naloxone duration)',
      'Aspiration pneumonia',
      'Non-cardiogenic pulmonary edema',
      'Rhabdomyolysis from prolonged immobility',
      'Anoxic brain injury',
      'Acute naloxone-precipitated withdrawal (uncomfortable but not dangerous)',
    ],
    'An opioid overdose happens when too much of an opioid drug (like heroin, fentanyl, or prescription painkillers) slows breathing to a dangerous level. The person may be unconscious with very slow or stopped breathing and tiny pupils. Naloxone (Narcan) is a life-saving antidote that reverses the overdose in minutes. It is available as a nasal spray without prescription. Call 911 even after giving naloxone, as the overdose may return.',
    [
      'Unresponsive person with very slow or absent breathing',
      'Pinpoint pupils with blue/gray skin color',
      'Gurgling or snoring sounds indicating airway obstruction',
      'Known opioid use with loss of consciousness',
    ],
  ),

  'acetaminophen-toxicity': cc(
    'acetaminophen-toxicity',
    'Acetaminophen (Paracetamol) Toxicity',
    'Toxicidad por acetaminofén (paracetamol)',
    'toxicology',
    'Dose-dependent hepatotoxicity from acetaminophen overdose, the most common cause of acute liver failure in the Western world.',
    'At therapeutic doses, acetaminophen is safely conjugated by glucuronidation and sulfation. In overdose, these pathways are saturated, and CYP2E1 produces the toxic metabolite NAPQI. When glutathione stores are depleted (<30% of normal), NAPQI binds hepatocyte proteins causing centrilobular necrosis. N-acetylcysteine (NAC) replenishes glutathione and directly detoxifies NAPQI. Risk is increased with chronic alcohol use, fasting, and enzyme-inducing drugs.',
    [
      'Stage 1 (0-24h): nausea, vomiting, malaise, or asymptomatic',
      'Stage 2 (24-72h): right upper quadrant pain, rising transaminases',
      'Stage 3 (72-96h): peak hepatotoxicity — jaundice, coagulopathy, encephalopathy, renal failure',
      'Stage 4 (4-14 days): recovery or progression to multi-organ failure',
      'Chronic ingestion may present without clear staging',
    ],
    [
      'Serum acetaminophen level at 4 hours post-ingestion (plot on Rumack-Matthew nomogram)',
      'AST/ALT (may be normal initially; serial monitoring essential)',
      'INR/PT (best marker of synthetic function and prognosis)',
      'Serum creatinine and BUN',
      'Arterial blood gas and lactate (lactate >3.5 mmol/L is a poor prognostic sign)',
      'Phosphate level (early decline suggests severe injury)',
    ],
    [
      'N-acetylcysteine (NAC) — most effective within 8 hours but beneficial up to and beyond 24 hours',
      'IV NAC protocol: 150 mg/kg over 1 hour, then 50 mg/kg over 4 hours, then 100 mg/kg over 16 hours',
      'Activated charcoal if within 1-2 hours of ingestion and airway intact',
      'Do NOT wait for levels to start NAC if strong clinical suspicion and >8-hour ingestion',
      'King\'s College Criteria for liver transplant evaluation',
      'Liver transplant referral for acute liver failure (pH <7.3, INR >6.5, creatinine >3.4, grade III-IV encephalopathy)',
    ],
    [
      'Fulminant hepatic failure',
      'Hepatic encephalopathy and cerebral edema',
      'Acute kidney injury (direct tubular toxicity)',
      'Coagulopathy and hemorrhage',
      'Death without transplant in fulminant cases (mortality ~30% with King\'s criteria met)',
    ],
    'Acetaminophen (Tylenol/paracetamol) is safe at normal doses but can cause severe liver damage in overdose. The danger is that you may feel fine initially while liver damage is silently occurring. The antidote, N-acetylcysteine (NAC), works best when given early. If you or someone may have taken too much acetaminophen — even accidentally from multiple products containing it — go to the emergency room immediately.',
    [
      'Reported ingestion of more than 150 mg/kg or 7.5 g total',
      'Rising liver enzymes with known or suspected overdose',
      'Jaundice and confusion developing days after ingestion',
      'INR rising above 1.5 with right upper quadrant pain',
    ],
  ),

  'toxic-alcohol-ingestion': cc(
    'toxic-alcohol-ingestion',
    'Toxic Alcohol Ingestion (Methanol / Ethylene Glycol)',
    'Ingestión de alcohol tóxico (metanol / etilenglicol)',
    'toxicology',
    'Life-threatening poisoning by methanol or ethylene glycol, which are metabolized to toxic organic acids causing end-organ damage.',
    'Alcohol dehydrogenase converts methanol to formaldehyde and then formic acid, which inhibits mitochondrial cytochrome c oxidase causing retinal and basal ganglia toxicity. Ethylene glycol is converted to glycolaldehyde, glycolic acid, and oxalic acid; calcium oxalate crystals deposit in renal tubules causing acute kidney injury. Both produce severe high-anion-gap metabolic acidosis with osmolar gap.',
    [
      'Initial inebriation without ethanol smell on breath',
      'Nausea, vomiting, abdominal pain',
      'Methanol: visual disturbances ("snowfield vision"), blindness',
      'Ethylene glycol: flank pain, oliguria, hematuria (calcium oxalate nephropathy)',
      'Severe metabolic acidosis with Kussmaul respirations',
      'CNS depression progressing to coma and seizures',
    ],
    [
      'Serum osmolality and calculated osmolar gap (>10 mOsm/kg suggestive)',
      'Arterial blood gas (high-anion-gap metabolic acidosis)',
      'Serum methanol and ethylene glycol levels (may not be readily available)',
      'Urinalysis for calcium oxalate crystals (ethylene glycol)',
      'Serum lactate and co-oximetry',
      'Basic metabolic panel (calculate anion gap)',
    ],
    [
      'Fomepizole (4-methylpyrazole) — alcohol dehydrogenase inhibitor, first-line antidote',
      'Loading dose: fomepizole 15 mg/kg IV, then 10 mg/kg q12h',
      'Hemodialysis for: severe acidosis (pH <7.15), end-organ damage, level >50 mg/dL, renal failure',
      'Ethanol infusion if fomepizole unavailable (target blood ethanol 100-150 mg/dL)',
      'Folinic acid (leucovorin) for methanol (enhances formic acid metabolism)',
      'Thiamine and pyridoxine for ethylene glycol (shunt to non-toxic metabolites)',
      'Correct electrolytes and support end-organ function',
    ],
    [
      'Permanent blindness (methanol — retinal toxicity)',
      'Irreversible renal failure (ethylene glycol)',
      'Basal ganglia necrosis with parkinsonian syndrome (methanol)',
      'Death from refractory acidosis and multi-organ failure',
      'Cranial nerve palsies',
    ],
    'Methanol (found in windshield fluid, solvents) and ethylene glycol (found in antifreeze) are extremely dangerous poisons. They may initially make someone appear drunk, but within hours they produce severe organ damage — methanol can cause blindness and ethylene glycol can destroy the kidneys. An antidote (fomepizole) blocks the body from converting these alcohols into their toxic forms. Dialysis may be needed to remove the poison. Seek emergency care immediately for any suspected ingestion.',
    [
      'Known or suspected ingestion of antifreeze or methanol-containing products',
      'Unexplained severe metabolic acidosis with osmolar gap',
      'Visual disturbances after possible methanol exposure',
      'Rapidly declining kidney function after unknown ingestion',
    ],
  ),

  'sympathomimetic-toxidrome': cc(
    'sympathomimetic-toxidrome',
    'Sympathomimetic Toxidrome',
    'Toxíndrome simpaticomimético',
    'toxicology',
    'Clinical syndrome from excessive sympathetic nervous system stimulation, commonly caused by cocaine, amphetamines, MDMA, or synthetic cathinones.',
    'Sympathomimetic agents increase catecholamine activity by blocking reuptake (cocaine), promoting release (amphetamines), or directly stimulating adrenergic receptors. Excessive sympathetic activation causes hypertension, tachycardia, hyperthermia, and vasoconstriction. Cocaine also blocks sodium channels (local anesthetic effect) predisposing to arrhythmias and seizures. Serotonergic effects of MDMA and amphetamines may overlap with serotonin syndrome.',
    [
      'Hypertension and tachycardia',
      'Hyperthermia (can exceed 41°C — life-threatening)',
      'Agitation, psychosis, paranoia',
      'Mydriasis (dilated pupils)',
      'Diaphoresis',
      'Seizures',
      'Chest pain (cocaine-induced coronary vasospasm or MI)',
    ],
    [
      'ECG (wide QRS with cocaine, ST changes, arrhythmias)',
      'Core temperature monitoring',
      'Basic metabolic panel and creatine kinase (rhabdomyolysis)',
      'Troponin if chest pain present',
      'CT head if altered mental status or focal deficits',
      'Urine drug screen (note: synthetic cathinones may not be detected)',
    ],
    [
      'Benzodiazepines first-line for agitation, seizures, hypertension, and tachycardia',
      'Active cooling for hyperthermia (target <39°C) — ice packs, evaporative cooling, cold IV fluids',
      'IV fluids for rhabdomyolysis prevention',
      'Sodium bicarbonate for cocaine-induced wide QRS',
      'Avoid beta-blockers in cocaine toxicity (unopposed alpha-stimulation)',
      'Nitroglycerin or phentolamine for cocaine-associated chest pain',
      'Cyproheptadine if serotonergic component suspected',
    ],
    [
      'Intracranial hemorrhage from severe hypertension',
      'Acute coronary syndrome',
      'Aortic dissection',
      'Rhabdomyolysis and acute kidney injury',
      'Disseminated intravascular coagulation from hyperthermia',
      'Seizures and status epilepticus',
    ],
    'A sympathomimetic toxidrome occurs when stimulant drugs (such as cocaine, methamphetamine, or ecstasy) overstimulate the nervous system. Symptoms include a racing heart, dangerously high blood pressure and temperature, agitation, and paranoia. The main treatment is sedation with calming medications (benzodiazepines) and cooling the body. This is a medical emergency — very high body temperature can be fatal.',
    [
      'Body temperature above 40°C (104°F) with drug use',
      'Chest pain after cocaine or stimulant use',
      'Severe agitation with hypertension and tachycardia',
      'Seizures in the setting of stimulant use',
    ],
  ),

  // =========================================================================
  // MONITORING (4 entries)
  // =========================================================================

  'hemodynamic-monitoring': cc(
    'hemodynamic-monitoring',
    'Hemodynamic Monitoring',
    'Monitoreo hemodinámico',
    'monitoring',
    'Assessment of cardiovascular function using invasive and non-invasive techniques to guide fluid and vasopressor management in critically ill patients.',
    'Hemodynamic monitoring provides data on preload (volume status), afterload (vascular resistance), and contractility (pump function). Arterial lines measure continuous blood pressure and stroke volume variation. Central venous pressure (CVP) reflects right-sided filling. Pulmonary artery catheters measure cardiac output, PCWP (left-sided filling), and mixed venous oxygen saturation. Non-invasive methods (POCUS, pulse contour analysis) increasingly guide resuscitation.',
    [
      'Arterial waveform analysis (systolic/diastolic/mean pressures)',
      'Central venous pressure trends',
      'Cardiac output/cardiac index assessment',
      'Stroke volume variation and pulse pressure variation (predict fluid responsiveness)',
      'Mixed venous oxygen saturation (SvO2 — reflects oxygen supply-demand balance)',
      'Lactate trends (tissue perfusion marker)',
    ],
    [
      'Arterial line (radial, femoral) for continuous BP and ABG access',
      'Central venous catheter (CVP monitoring, central access)',
      'Pulmonary artery catheter (cardiac output, PCWP, PVR, SVR)',
      'Point-of-care echocardiography (IVC collapsibility, cardiac function)',
      'Non-invasive cardiac output monitors (pulse contour, bioreactance)',
      'Passive leg raise test (functional assessment of fluid responsiveness)',
    ],
    [
      'Target-driven resuscitation (MAP >= 65 mmHg, lactate clearance)',
      'Dynamic assessment of fluid responsiveness before giving fluids',
      'Vasopressor titration guided by continuous arterial monitoring',
      'Serial echocardiography for evolving shock states',
      'Integrate multiple data points rather than relying on single values',
      'De-escalate monitoring as patient improves',
    ],
    [
      'Arterial line: thrombosis, bleeding, pseudoaneurysm, distal ischemia',
      'Central line: pneumothorax, air embolism, CLABSI, arrhythmia',
      'PA catheter: pulmonary artery rupture, arrhythmia, knotting, infection',
      'Over-reliance on numbers without clinical correlation',
      'Fluid overload from over-resuscitation',
    ],
    'Hemodynamic monitoring uses special sensors and tubes to measure how well your heart and blood vessels are working. An arterial line in the wrist or groin continuously measures blood pressure. A central line in a large vein can measure pressure near the heart. These help doctors make precise decisions about IV fluids, blood pressure medicines, and heart medications. They are temporary and removed when no longer needed.',
    [
      'MAP consistently below 65 mmHg despite interventions',
      'Rising lactate levels indicating worsening perfusion',
      'New arrhythmia detected on monitoring',
      'Signs of arterial line compromise (loss of waveform, signs of hand ischemia)',
    ],
  ),

  'mechanical-ventilation-monitoring': cc(
    'mechanical-ventilation-monitoring',
    'Mechanical Ventilation Monitoring',
    'Monitoreo de ventilación mecánica',
    'monitoring',
    'Systematic assessment of ventilator parameters, respiratory mechanics, and gas exchange to optimize mechanical ventilation and prevent injury.',
    'Mechanical ventilation delivers positive-pressure breaths, which is non-physiologic and carries injury risk. Monitoring ensures adequate gas exchange while avoiding ventilator-induced lung injury (VILI). Key mechanisms of VILI include volutrauma (overdistension), atelectrauma (cyclic opening-closing of alveoli), barotrauma (excessive pressure), and biotrauma (inflammatory mediator release). Lung-protective ventilation limits tidal volume and plateau pressure while maintaining adequate PEEP.',
    [
      'Ventilator waveform interpretation (pressure, flow, volume curves)',
      'Peak inspiratory pressure vs. plateau pressure (airway resistance vs. compliance)',
      'Auto-PEEP detection (expiratory flow not reaching zero)',
      'Patient-ventilator dyssynchrony (trigger, flow, cycle mismatches)',
      'SpO2 and EtCO2 trends',
      'Driving pressure (plateau pressure minus PEEP)',
    ],
    [
      'Arterial blood gas (PaO2, PaCO2, pH for ventilator adjustment)',
      'Respiratory mechanics: static compliance, resistance, auto-PEEP',
      'P/F ratio (PaO2/FiO2 — classifies severity of hypoxemia)',
      'Chest X-ray (ETT position, lung pathology, complications)',
      'Continuous SpO2 and capnography',
      'Daily spontaneous breathing trial assessment (readiness to wean)',
    ],
    [
      'Lung-protective ventilation: Vt 6-8 mL/kg PBW, Pplat <30 cmH2O',
      'PEEP titration based on oxygenation, compliance, or imaging',
      'Driving pressure minimization (<15 cmH2O target)',
      'Daily sedation interruption and spontaneous breathing trials',
      'ABCDEF bundle implementation for liberation',
      'Prone positioning protocol for P/F <150',
    ],
    [
      'Ventilator-induced lung injury (VILI)',
      'Ventilator-associated pneumonia (VAP)',
      'Barotrauma (pneumothorax, pneumomediastinum)',
      'Diaphragm atrophy from prolonged controlled ventilation',
      'ICU-acquired weakness',
      'Tracheal stenosis from prolonged intubation',
    ],
    'When you are on a breathing machine (ventilator), doctors and nurses constantly monitor many readings to make sure your lungs are being supported safely. They check the pressures, volumes, and oxygen levels with every breath. The goal is to help your lungs recover while avoiding injury from the machine itself. As you get better, they gradually let you do more breathing on your own until you can come off the ventilator.',
    [
      'Sudden desaturation on the ventilator (DOPE mnemonic: Displacement, Obstruction, Pneumothorax, Equipment)',
      'Peak pressures rising sharply',
      'Increasing FiO2 requirements',
      'Patient agitation with ventilator alarms',
    ],
  ),

  'continuous-eeg-monitoring': cc(
    'continuous-eeg-monitoring',
    'Continuous EEG Monitoring in the ICU',
    'Monitoreo EEG continuo en la UCI',
    'monitoring',
    'Prolonged electroencephalographic monitoring to detect non-convulsive seizures, guide status epilepticus treatment, and assist neuroprognostication.',
    'Non-convulsive seizures (NCS) and non-convulsive status epilepticus (NCSE) occur in 10-35% of comatose ICU patients and are undetectable without EEG. Ongoing electrical seizure activity causes excitotoxic neuronal injury, increased metabolic demand, and elevated ICP — all worsening outcomes. cEEG also provides information about depth of sedation (burst suppression), cortical function, and is an essential component of multimodal neuroprognostication after cardiac arrest.',
    [
      'Unexplained altered mental status in ICU patient',
      'Subtle clinical signs: eye deviation, nystagmus, facial twitching',
      'Failure to improve after clinically treated convulsive seizures',
      'Fluctuating level of consciousness',
      'Coma after cardiac arrest (prognostication role)',
      'Monitoring depth of therapeutic coma (barbiturate coma)',
    ],
    [
      'Continuous EEG with at minimum 21-electrode montage',
      'Quantitative EEG (qEEG) trends for nursing detection',
      'American Clinical Neurophysiology Society (ACNS) standardized terminology',
      'Duration: minimum 24 hours (48+ hours for high-risk patients)',
      'Correlation with clinical exam and imaging',
      'Reactivity testing during recording',
    ],
    [
      'Urgent cEEG for all ICU patients with unexplained altered consciousness',
      'Titrate antiepileptic therapy based on EEG patterns',
      'Target seizure suppression or burst suppression for refractory status epilepticus',
      'Integrate EEG findings with clinical exam and imaging for neuroprognostication',
      'Avoid premature withdrawal of care based on incomplete EEG data',
      'Neurotelemetry systems for remote expert interpretation',
    ],
    [
      'Skin breakdown at electrode sites',
      'False reassurance from brief routine EEG (may miss intermittent seizures)',
      'Artifact mimicking seizure activity (ICU environment is noisy)',
      'Over-treatment of benign patterns misidentified as seizures',
      'Resource and staffing limitations for 24/7 interpretation',
    ],
    'Continuous EEG monitoring places small sensors on the scalp to record brain electrical activity around the clock. In the ICU, it is used to detect hidden seizures that cannot be seen by just looking at the patient. It also helps doctors understand how the brain is recovering, especially after a cardiac arrest. The monitoring is painless and the electrodes are simply attached to the skin.',
    [
      'New or worsening unexplained coma',
      'Ongoing subtle motor activity (eyelid flutter, facial twitching)',
      'Status epilepticus not responding to treatment',
      'Failure to awaken after cardiac arrest',
    ],
  ),

  'point-of-care-ultrasound': cc(
    'point-of-care-ultrasound',
    'Point-of-Care Ultrasound (POCUS) in Critical Care',
    'Ecografía en el punto de atención (POCUS) en cuidados críticos',
    'monitoring',
    'Bedside ultrasound performed by the treating clinician to rapidly diagnose and monitor critical conditions in real time.',
    'POCUS uses high-frequency sound waves reflected by tissues to create real-time images. In critical care, it rapidly assesses cardiac function (qualitative EF, wall motion, pericardial effusion), volume status (IVC diameter and collapsibility), lung pathology (B-lines for pulmonary edema, absent lung sliding for pneumothorax, consolidation), and vascular access. It integrates into clinical decision-making at the bedside without transport to radiology.',
    [
      'Cardiac: parasternal long/short axis, apical 4-chamber, subcostal views',
      'Lung: anterior and lateral lung fields bilaterally',
      'IVC assessment for volume status',
      'FAST exam (free abdominal fluid in trauma)',
      'DVT assessment (common femoral and popliteal vein compression)',
      'Guided vascular access (internal jugular, subclavian, femoral, arterial)',
    ],
    [
      'Focused cardiac ultrasound (qualitative function, effusion, RV dilation)',
      'Lung ultrasound (A-lines = normal/dry, B-lines = interstitial edema, consolidation, effusion)',
      'IVC diameter and respirophasic variation',
      'RUSH exam (Rapid Ultrasound in Shock and Hypotension)',
      'Optic nerve sheath diameter (screen for elevated ICP)',
      'E-FAST in trauma (Extended Focused Assessment with Sonography)',
    ],
    [
      'Integrate POCUS into initial resuscitation assessment',
      'RUSH protocol for undifferentiated shock (pump, tank, pipes)',
      'Serial lung ultrasound to guide fluid management',
      'Ultrasound-guided central and arterial line placement',
      'Ultrasound-guided procedures (thoracentesis, paracentesis, pericardiocentesis)',
      'Document findings and maintain quality assurance program',
    ],
    [
      'Operator-dependent image quality and interpretation',
      'Over-reliance on single findings without clinical context',
      'Body habitus limitations (obesity, subcutaneous emphysema)',
      'False confidence leading to delayed definitive imaging',
      'Limited acoustic windows (dressings, drains, positioning)',
    ],
    'Point-of-care ultrasound is a portable imaging tool that lets doctors look inside your body right at the bedside. Using the same safe sound waves as a pregnancy ultrasound, ICU doctors can quickly see how your heart is pumping, check for fluid in your lungs, and guide the placement of IV lines. It gives immediate answers without needing to move you to a scanner.',
    [
      'New hypotension requiring rapid assessment for cause',
      'Respiratory distress — differentiate cardiogenic vs. non-cardiogenic',
      'Trauma patient with possible internal bleeding',
      'Difficult IV access requiring ultrasound guidance',
    ],
  ),

  // =========================================================================
  // PROCEDURES (5 entries)
  // =========================================================================

  'endotracheal-intubation': cc(
    'endotracheal-intubation',
    'Endotracheal Intubation',
    'Intubación endotraqueal',
    'procedures',
    'Placement of a cuffed tube through the mouth into the trachea to secure the airway for mechanical ventilation, airway protection, or oxygenation failure.',
    'The endotracheal tube (ETT) bypasses the upper airway and creates a sealed conduit to the lungs. Rapid sequence intubation (RSI) uses an induction agent (propofol, etomidate, or ketamine) followed by a neuromuscular blocker (succinylcholine or rocuronium) to facilitate laryngoscopy and tube placement. Video laryngoscopy has improved first-pass success rates. Confirmation requires waveform capnography. Pre-oxygenation with high-flow nasal cannula or non-rebreather maximizes apnea tolerance.',
    [
      'Indications: airway protection (GCS <= 8), respiratory failure, anticipated clinical course',
      'Pre-oxygenation: 3 min 100% FiO2 or 8 vital capacity breaths',
      'Positioning: sniffing position, ramped position for obese patients',
      'Laryngoscopy: direct or video-assisted visualization of vocal cords',
      'Tube placement confirmed by waveform capnography and bilateral breath sounds',
      'Post-intubation: CXR for tube position, initiate ventilator settings',
    ],
    [
      'Waveform capnography (gold standard confirmation)',
      'Chest X-ray (tip 3-5 cm above carina)',
      'Pre-procedure assessment: Mallampati score, neck mobility, mouth opening, thyromental distance',
      'Pulse oximetry throughout procedure',
      'Pre-procedure airway ultrasound (identify anatomy, confirm placement)',
    ],
    [
      'Rapid Sequence Intubation (RSI): induction + paralytic + laryngoscopy',
      'Induction agents: etomidate 0.3 mg/kg, ketamine 1-2 mg/kg, propofol 1-2 mg/kg',
      'Paralytics: succinylcholine 1-1.5 mg/kg or rocuronium 1.2 mg/kg',
      'Bougie or stylet for difficult airways',
      'Supraglottic airway (LMA) as rescue device',
      'Surgical cricothyrotomy for cannot-intubate-cannot-oxygenate (CICO) scenario',
      'Post-intubation sedation and analgesia',
    ],
    [
      'Esophageal intubation (detected by absent capnography)',
      'Right mainstem intubation',
      'Aspiration during procedure',
      'Dental or airway trauma',
      'Post-intubation hypotension (sedation + positive pressure)',
      'Laryngeal injury and subglottic stenosis (long-term)',
    ],
    'Endotracheal intubation is a procedure where doctors place a breathing tube through your mouth into your windpipe. This is done when a person cannot breathe on their own or needs a breathing machine. You are given medication to make you sleep and relax your muscles before the tube is placed. The tube is connected to a ventilator that breathes for you while your body heals.',
    [
      'Inability to maintain oxygen saturation above 90% with non-invasive support',
      'GCS 8 or below with inability to protect airway',
      'Failed non-invasive ventilation with worsening respiratory distress',
      'Cannot-intubate-cannot-oxygenate scenario (surgical airway needed)',
    ],
  ),

  'central-venous-catheter': cc(
    'central-venous-catheter',
    'Central Venous Catheter Placement',
    'Colocación de catéter venoso central',
    'procedures',
    'Insertion of a multi-lumen catheter into a large central vein (internal jugular, subclavian, or femoral) for medication delivery, hemodynamic monitoring, and venous access.',
    'Central venous catheters (CVCs) provide access to large veins that can tolerate vasoactive medications, hyperosmolar solutions, and high-volume infusions that would damage peripheral veins. Ultrasound-guided insertion of the internal jugular vein has become standard of care, reducing complications. The Seldinger technique (needle → guidewire → dilator → catheter) is used. CVP transduction from the distal port enables hemodynamic assessment.',
    [
      'Indications: vasopressor/inotrope administration, TPN, hemodialysis access, CVP monitoring, poor peripheral access, rapid volume resuscitation',
      'Site selection: IJ (preferred — ultrasound guided), subclavian (lowest infection rate), femoral (emergent access)',
      'Sterile technique with full barrier precautions (cap, mask, gown, gloves, large drape)',
      'Ultrasound-guided needle insertion with real-time visualization',
      'Seldinger technique for catheter placement',
      'Confirm placement with chest X-ray (tip at cavoatrial junction)',
    ],
    [
      'Pre-procedure ultrasound to assess vein patency and anatomy',
      'Post-procedure chest X-ray (confirm position, rule out pneumothorax)',
      'Daily assessment of line necessity (remove as soon as possible)',
      'Chlorhexidine-impregnated dressings',
      'Blood cultures if line infection suspected',
    ],
    [
      'Use ultrasound guidance for all CVC insertions (reduces complications)',
      'Maximum sterile barrier precautions',
      'Chlorhexidine skin preparation',
      'Consider subclavian site for lowest CLABSI risk',
      'Daily line rounds: assess necessity, site condition, dressing integrity',
      'CLABSI prevention bundle adherence',
      'Remove catheter as soon as no longer indicated',
    ],
    [
      'Central line-associated bloodstream infection (CLABSI)',
      'Pneumothorax (especially subclavian approach)',
      'Arterial puncture and hematoma',
      'Air embolism',
      'Catheter-related thrombosis',
      'Arrhythmia during guidewire insertion',
    ],
    'A central line is a special IV that goes into a large vein in your neck, chest, or groin. It is needed when strong medications (like blood pressure drugs) or nutrition must be given directly into a large vein, or when regular IVs are not possible. Doctors use ultrasound to place it safely. The site is kept very clean to prevent infection, and the line is removed as soon as it is no longer needed.',
    [
      'Signs of central line infection: fever, redness, or pus at insertion site',
      'Sudden shortness of breath after subclavian line placement (pneumothorax)',
      'Swelling of the arm, neck, or face (catheter-related thrombosis)',
      'Arrhythmia during or immediately after placement',
    ],
  ),

  'chest-tube-placement': cc(
    'chest-tube-placement',
    'Chest Tube (Tube Thoracostomy) Placement',
    'Colocación de tubo torácico (toracostomía)',
    'procedures',
    'Insertion of a tube into the pleural space to drain air (pneumothorax), blood (hemothorax), or fluid (pleural effusion) and restore normal lung expansion.',
    'The pleural space normally contains only a thin layer of fluid between the visceral and parietal pleura, maintained at negative pressure. Pathological accumulation of air or fluid collapses the lung and impairs ventilation. Tube thoracostomy creates a controlled drainage pathway. The tube is connected to a collection system with a water seal (prevents air re-entry) and optionally suction. Re-expansion of the lung restores normal ventilation-perfusion matching.',
    [
      'Indications: pneumothorax (traumatic, spontaneous, tension after decompression), hemothorax, large or symptomatic pleural effusion, empyema, post-operative drainage',
      'Position: lateral decubitus or supine with arm above head',
      'Insertion site: 4th-5th intercostal space, anterior to mid-axillary line (safe triangle)',
      'Blunt dissection technique through chest wall layers',
      'Finger sweep to confirm pleural entry and exclude adhesions',
      'Secure tube and connect to drainage system',
    ],
    [
      'Chest X-ray pre-procedure (confirm indication and side)',
      'Chest X-ray post-procedure (confirm tube position, lung re-expansion)',
      'Ultrasound to localize effusion and guide entry point',
      'Monitor output volume and character (serous, bloody, purulent)',
      'Daily assessment for air leak, output, and lung re-expansion',
      'CT chest if tube is malpositioned or drainage inadequate',
    ],
    [
      'Local anesthesia with lidocaine (skin, periosteum, parietal pleura)',
      'Procedural sedation/analgesia for patient comfort',
      'Large-bore tube (28-36 Fr) for hemothorax and empyema',
      'Smaller tube (14-20 Fr) or pigtail catheter for simple pneumothorax or serous effusion',
      'Water seal with or without suction (-20 cmH2O)',
      'Remove chest tube when air leak resolved, drainage <200 mL/24h, and lung fully expanded',
      'Autotransfusion for significant hemothorax',
    ],
    [
      'Tube malposition (subcutaneous, intra-fissural, intra-abdominal)',
      'Organ injury (lung laceration, diaphragm, liver, spleen)',
      'Empyema or superinfection',
      'Re-expansion pulmonary edema (rapid re-expansion of chronically collapsed lung)',
      'Retained hemothorax',
      'Subcutaneous emphysema',
    ],
    'A chest tube is a flexible tube placed through the chest wall into the space between the lung and the ribs. It drains trapped air or fluid that is preventing the lung from expanding properly. The procedure is done with numbing medicine at the bedside. The tube is connected to a drainage container and will stay in place until the lung has fully re-expanded and drainage has stopped.',
    [
      'Large pneumothorax with respiratory distress',
      'Hemothorax draining more than 1500 mL initially or more than 200 mL/hour',
      'Tube blockage with clinical deterioration',
      'Tension physiology developing despite chest tube in place',
    ],
  ),

  'lumbar-puncture-icu': cc(
    'lumbar-puncture-icu',
    'Lumbar Puncture in the ICU',
    'Punción lumbar en la UCI',
    'procedures',
    'Diagnostic and therapeutic procedure to obtain cerebrospinal fluid (CSF) from the lumbar subarachnoid space.',
    'A spinal needle is advanced between lumbar vertebrae (typically L3-L4 or L4-L5) into the subarachnoid space below the level of the conus medullaris (which ends at L1-L2 in adults). CSF analysis provides critical diagnostic information for meningitis, encephalitis, subarachnoid hemorrhage, and autoimmune CNS conditions. Opening pressure measurement is essential. In the ICU, LP may be performed in coagulopathic or hemodynamically unstable patients, requiring careful risk-benefit assessment.',
    [
      'Indications: suspected meningitis/encephalitis, subarachnoid hemorrhage (if CT negative), CSF pressure measurement, therapeutic drainage, intrathecal medication administration',
      'Patient positioning: lateral decubitus (preferred for opening pressure measurement) or seated',
      'Landmark or ultrasound-guided needle insertion',
      'Opening pressure measurement with manometer',
      'CSF collection: tube 1 (cell count, differential), tube 2 (protein, glucose), tube 3 (culture, Gram stain), tube 4 (cell count — compare with tube 1 for traumatic tap vs. true SAH)',
    ],
    [
      'CT head before LP if: immunocompromised, papilledema, focal deficits, altered consciousness, new seizure',
      'Coagulation studies (INR, platelet count) — correct if INR >1.5 or platelets <50,000',
      'CSF studies: cell count, protein, glucose (with concurrent serum glucose), Gram stain, culture',
      'CSF PCR panel, cytology, flow cytometry as clinically indicated',
      'Opening pressure (normal 6-20 cmH2O in lateral decubitus)',
    ],
    [
      'Rule out contraindications: raised ICP with mass effect, skin infection at site, severe coagulopathy',
      'Correct coagulopathy before procedure if possible',
      'Sterile technique with local anesthesia',
      'Use atraumatic (pencil-point) needle to reduce post-LP headache risk',
      'Ultrasound-guided identification of interspinous space',
      'Collect minimum 4 tubes for comprehensive analysis',
      'Do NOT delay antibiotics for LP in suspected bacterial meningitis',
    ],
    [
      'Post-LP headache (10-30%, reduced with atraumatic needle)',
      'Epidural or subdural hematoma (in coagulopathic patients)',
      'Cerebral herniation (if raised ICP with mass effect — this is why imaging first is critical)',
      'Infection (meningitis, epidural abscess)',
      'Nerve root irritation and radiculopathy',
      'CSF leak',
    ],
    'A lumbar puncture (spinal tap) is a procedure where doctors insert a needle into the lower back to collect spinal fluid for testing. It helps diagnose serious conditions like meningitis and brain hemorrhage. Numbing medicine is used to minimize pain. You will be asked to curl up in a ball position. The most common side effect is a headache afterward, which usually resolves with rest and fluids.',
    [
      'Suspected bacterial meningitis — antibiotics should not wait for LP',
      'Sudden severe headache (thunderclap) with CT negative for bleeding',
      'Signs of raised intracranial pressure requiring CT before LP',
      'Spinal epidural hematoma symptoms after LP in a coagulopathic patient',
    ],
  ),

  'targeted-temperature-management': cc(
    'targeted-temperature-management',
    'Targeted Temperature Management (TTM)',
    'Manejo de temperatura objetivo (TTM)',
    'procedures',
    'Deliberate control of core body temperature to 32-36°C for neuroprotection after cardiac arrest or other neurological injuries.',
    'Hypothermia reduces cerebral metabolic rate (6-10% per degree Celsius), decreases excitotoxic neurotransmitter release, attenuates free radical production, reduces blood-brain barrier permeability, and inhibits pro-apoptotic pathways. After cardiac arrest, ischemia-reperfusion injury causes secondary neuronal death over hours to days. TTM interrupts these cascading injury mechanisms. Current evidence supports targeting 32-36°C (or actively preventing fever) for at least 24 hours.',
    [
      'Induction phase: cooling to target temperature as quickly as possible',
      'Maintenance phase: stable temperature at target for 24+ hours',
      'Rewarming phase: controlled rewarming at 0.25-0.5°C per hour',
      'Shivering is the primary barrier to effective cooling (shivering protocol needed)',
      'Temperature monitoring via esophageal, bladder, or PA catheter probe',
      'Post-rewarming: active fever prevention for 72 hours',
    ],
    [
      'Continuous core temperature monitoring (esophageal probe preferred)',
      'Serial neurological assessment',
      'Continuous EEG monitoring',
      'Serial lactate (clearance as prognostic marker)',
      'Electrolytes q4-6h (hypothermia causes hypokalemia, hypomagnesemia)',
      'Coagulation studies (hypothermia impairs clotting)',
    ],
    [
      'Surface cooling devices (Arctic Sun, cooling blankets) or intravascular cooling catheters',
      'Cold IV saline (4°C) as adjunct (not sole method)',
      'Anti-shivering protocol: acetaminophen, buspirone, meperidine, dexmedetomidine, neuromuscular blockade if needed',
      'Target temperature: 32-36°C for at least 24 hours post-ROSC',
      'Slow controlled rewarming (0.25°C/hour) to avoid rebound hyperthermia',
      'Multimodal neuroprognostication at 72+ hours after rewarming',
    ],
    [
      'Shivering (increases metabolic demand, counters cooling)',
      'Electrolyte disturbances (hypokalemia during cooling, hyperkalemia during rewarming)',
      'Coagulopathy and increased bleeding risk',
      'Infections (pneumonia, bacteremia — immune suppression)',
      'Cardiac arrhythmias (bradycardia, QT prolongation)',
      'Skin breakdown at cooling device sites',
    ],
    'Targeted temperature management (sometimes called therapeutic hypothermia) is a treatment used after cardiac arrest to protect the brain. The body is cooled slightly using special blankets or cooling devices for at least 24 hours. This slows down brain activity and reduces damage from the lack of blood flow during the arrest. Afterward, the body is slowly warmed back to normal temperature while doctors monitor brain recovery.',
    [
      'Fever during the TTM maintenance phase (may indicate inadequate cooling or infection)',
      'Severe bradycardia or arrhythmia during cooling',
      'Electrolyte abnormalities (especially potassium shifts during rewarming)',
      'Signs of bleeding (hypothermia-induced coagulopathy)',
    ],
  ),
};

// ---------------------------------------------------------------------------
// Utility Functions
// ---------------------------------------------------------------------------

/**
 * Returns all entries matching the given category.
 */
export function getCriticalCareByCategory(
  category: CriticalCareCategory,
): CriticalCareEntry[] {
  return Object.values(CRITICAL_CARE_ENTRIES).filter(
    (entry) => entry.category === category,
  );
}

/**
 * Case-insensitive search across entry name, nameEs, description,
 * pathophysiology, clinicalFeatures, diagnostics, treatment,
 * complications, patientExplanation, and emergencySigns.
 */
export function searchCriticalCare(query: string): CriticalCareEntry[] {
  const lowerQuery = query.toLowerCase();

  return Object.values(CRITICAL_CARE_ENTRIES).filter((entry) => {
    const searchableStrings: string[] = [
      entry.id,
      entry.name,
      entry.nameEs,
      entry.category,
      entry.description,
      entry.pathophysiology,
      entry.patientExplanation,
      ...entry.clinicalFeatures,
      ...entry.diagnostics,
      ...entry.treatment,
      ...entry.complications,
      ...entry.emergencySigns,
    ];

    return searchableStrings.some((str) =>
      str.toLowerCase().includes(lowerQuery),
    );
  });
}

/**
 * Returns a single entry by its id, or undefined if not found.
 */
export function getCriticalCareById(
  id: string,
): CriticalCareEntry | undefined {
  return CRITICAL_CARE_ENTRIES[id];
}

/**
 * Returns all unique categories present in the database.
 */
export function getCriticalCareCategories(): CriticalCareCategory[] {
  const categories = new Set<CriticalCareCategory>();
  for (const entry of Object.values(CRITICAL_CARE_ENTRIES)) {
    categories.add(entry.category);
  }
  return Array.from(categories);
}

/**
 * Returns entries matching the given category with an optional text
 * search filter applied on top.
 */
export function filterCriticalCare(
  options: {
    category?: CriticalCareCategory;
    query?: string;
  } = {},
): CriticalCareEntry[] {
  let results = Object.values(CRITICAL_CARE_ENTRIES);

  if (options.category) {
    results = results.filter((entry) => entry.category === options.category);
  }

  if (options.query) {
    const lowerQuery = options.query.toLowerCase();
    results = results.filter((entry) => {
      const searchableStrings: string[] = [
        entry.id,
        entry.name,
        entry.nameEs,
        entry.category,
        entry.description,
        entry.pathophysiology,
        entry.patientExplanation,
        ...entry.clinicalFeatures,
        ...entry.diagnostics,
        ...entry.treatment,
        ...entry.complications,
        ...entry.emergencySigns,
      ];
      return searchableStrings.some((str) =>
        str.toLowerCase().includes(lowerQuery),
      );
    });
  }

  return results;
}
