/**
 * Drug Contraindications Database
 *
 * Comprehensive database of condition-based contraindications
 * with alternatives and clinical reasoning.
 */

// ============================================
// Types
// ============================================

export type ContraindicationType = 'absolute' | 'relative' | 'caution';

export interface DrugContraindication {
  id: string;
  drugClass: string;
  drugs: string[];
  condition: string;
  conditionAliases: string[];
  type: ContraindicationType;
  reason: string;
  mechanism: string;
  risk: string;
  alternatives: string[];
  exceptions?: string;
  monitoring?: string[];
  clinicalPearl?: string;
}

// ============================================
// Cardiovascular Contraindications
// ============================================

export const CARDIOVASCULAR_CONTRAINDICATIONS: DrugContraindication[] = [
  // Beta-blockers
  {
    id: 'bb-asthma',
    drugClass: 'Beta-blockers',
    drugs: ['propranolol', 'nadolol', 'timolol', 'sotalol', 'carvedilol', 'labetalol'],
    condition: 'Asthma (uncontrolled)',
    conditionAliases: ['asthma', 'reactive airway disease', 'bronchospasm'],
    type: 'relative',
    reason: 'Beta-2 blockade causes bronchospasm',
    mechanism: 'Blocking beta-2 receptors in bronchial smooth muscle causes constriction, worsening asthma',
    risk: 'Acute bronchospasm, status asthmaticus, respiratory failure',
    alternatives: ['Cardioselective beta-blockers (metoprolol, bisoprolol) with caution', 'Calcium channel blockers', 'ACE inhibitors'],
    exceptions: 'Beta-1 selective agents (metoprolol, bisoprolol) may be used with caution in mild, well-controlled asthma',
    monitoring: ['Peak flow', 'Respiratory symptoms'],
    clinicalPearl: 'Start with lowest dose of cardioselective agent and monitor closely. Have rescue inhaler available.',
  },
  {
    id: 'bb-bradycardia',
    drugClass: 'Beta-blockers',
    drugs: ['metoprolol', 'atenolol', 'propranolol', 'carvedilol', 'bisoprolol', 'nadolol'],
    condition: 'Severe bradycardia',
    conditionAliases: ['bradycardia', 'sick sinus syndrome', 'sinus node dysfunction', 'heart block'],
    type: 'absolute',
    reason: 'Further depression of heart rate can cause symptomatic bradycardia or asystole',
    mechanism: 'Beta-blockers reduce SA node automaticity and AV conduction, worsening existing bradycardia',
    risk: 'Syncope, cardiogenic shock, asystole',
    alternatives: ['Calcium channel blockers (dihydropyridine)', 'ACE inhibitors', 'Pacemaker then beta-blocker if indicated'],
    monitoring: ['Heart rate', 'ECG'],
    clinicalPearl: 'If beta-blocker is essential (e.g., HFrEF), consider pacemaker first',
  },
  {
    id: 'bb-decompensated-hf',
    drugClass: 'Beta-blockers',
    drugs: ['metoprolol', 'carvedilol', 'bisoprolol', 'atenolol'],
    condition: 'Decompensated heart failure',
    conditionAliases: ['acute heart failure', 'cardiogenic shock', 'acute pulmonary edema'],
    type: 'absolute',
    reason: 'Negative inotropy can precipitate cardiogenic shock in acute decompensation',
    mechanism: 'Reduced contractility further impairs cardiac output in already compromised heart',
    risk: 'Cardiogenic shock, death',
    alternatives: ['Stabilize with diuretics and vasodilators first', 'Inotropes if needed', 'Start beta-blocker once euvolemic'],
    exceptions: 'Should be started once patient is euvolemic and stable',
    clinicalPearl: 'Do NOT stop chronic beta-blocker abruptly in hospitalized HF patient unless cardiogenic shock',
  },

  // ACE Inhibitors
  {
    id: 'acei-pregnancy',
    drugClass: 'ACE Inhibitors',
    drugs: ['lisinopril', 'enalapril', 'ramipril', 'captopril', 'benazepril', 'quinapril', 'fosinopril', 'perindopril', 'trandolapril'],
    condition: 'Pregnancy',
    conditionAliases: ['pregnant', 'pregnancy', 'expecting'],
    type: 'absolute',
    reason: 'Causes fetal renal agenesis, oligohydramnios, limb defects, and death',
    mechanism: 'Fetal renin-angiotensin system is essential for renal development; inhibition causes dysgenesis',
    risk: 'Fetal death, renal agenesis, oligohydramnios, limb defects, pulmonary hypoplasia',
    alternatives: ['Labetalol', 'Nifedipine', 'Methyldopa', 'Hydralazine'],
    clinicalPearl: 'Stop immediately if pregnancy detected. Risk is primarily 2nd and 3rd trimester but avoid throughout.',
  },
  {
    id: 'acei-angioedema',
    drugClass: 'ACE Inhibitors',
    drugs: ['lisinopril', 'enalapril', 'ramipril', 'captopril', 'benazepril', 'quinapril'],
    condition: 'History of ACE inhibitor-induced angioedema',
    conditionAliases: ['angioedema', 'acei angioedema', 'ace inhibitor angioedema'],
    type: 'absolute',
    reason: 'High risk of recurrent, potentially fatal angioedema',
    mechanism: 'Bradykinin accumulation causes vascular permeability and angioedema in susceptible individuals',
    risk: 'Airway obstruction, death',
    alternatives: ['ARBs are NOT completely safe alternatives (10% cross-reactivity)', 'Consider CCB, diuretic, or other antihypertensive'],
    clinicalPearl: 'Angioedema can occur even after years of safe use. Higher risk in Black patients.',
  },
  {
    id: 'acei-bilateral-ras',
    drugClass: 'ACE Inhibitors/ARBs',
    drugs: ['lisinopril', 'enalapril', 'ramipril', 'losartan', 'valsartan', 'olmesartan'],
    condition: 'Bilateral renal artery stenosis',
    conditionAliases: ['renal artery stenosis', 'ras', 'renovascular hypertension'],
    type: 'absolute',
    reason: 'Removes compensatory efferent arteriolar constriction, precipitating acute kidney injury',
    mechanism: 'GFR in RAS depends on efferent arteriole constriction by angiotensin II; blocking this collapses GFR',
    risk: 'Acute renal failure',
    alternatives: ['Calcium channel blockers', 'Beta-blockers', 'Revascularization'],
    monitoring: ['Creatinine after starting ACEi/ARB'],
    clinicalPearl: 'Check creatinine 1-2 weeks after starting; up to 30% rise acceptable, more suggests RAS',
  },

  // Calcium Channel Blockers
  {
    id: 'ccb-hf',
    drugClass: 'Non-dihydropyridine CCBs',
    drugs: ['verapamil', 'diltiazem'],
    condition: 'Heart failure with reduced EF (HFrEF)',
    conditionAliases: ['systolic heart failure', 'hfref', 'reduced ejection fraction', 'ef less than 40'],
    type: 'absolute',
    reason: 'Negative inotropic effect worsens heart failure',
    mechanism: 'Verapamil and diltiazem reduce cardiac contractility, worsening already impaired pump function',
    risk: 'Heart failure decompensation, cardiogenic shock',
    alternatives: ['Amlodipine (neutral in HF)', 'Dihydropyridines if rate control not needed'],
    clinicalPearl: 'Amlodipine is safe in HFrEF (PRAISE trial). Verapamil/diltiazem are contraindicated.',
  },

  // Diuretics
  {
    id: 'thiazide-gout',
    drugClass: 'Thiazide diuretics',
    drugs: ['hydrochlorothiazide', 'chlorthalidone', 'indapamide', 'metolazone'],
    condition: 'Gout (active or poorly controlled)',
    conditionAliases: ['gout', 'hyperuricemia', 'gouty arthritis'],
    type: 'relative',
    reason: 'Thiazides increase uric acid levels and can precipitate gout attacks',
    mechanism: 'Thiazides compete with uric acid for renal tubular secretion, reducing urate excretion',
    risk: 'Acute gout flares, chronic tophaceous gout',
    alternatives: ['ACE inhibitors', 'ARBs (losartan has uricosuric effect)', 'Calcium channel blockers'],
    exceptions: 'May be used if well-controlled on urate-lowering therapy and best diuretic choice',
    monitoring: ['Uric acid level', 'Gout symptoms'],
  },
  {
    id: 'spironolactone-hyperkalemia',
    drugClass: 'Potassium-sparing diuretics',
    drugs: ['spironolactone', 'eplerenone', 'amiloride', 'triamterene'],
    condition: 'Hyperkalemia',
    conditionAliases: ['hyperkalemia', 'high potassium', 'elevated potassium'],
    type: 'absolute',
    reason: 'Further increases potassium, risking fatal arrhythmia',
    mechanism: 'Blocks aldosterone or ENaC, reducing potassium excretion',
    risk: 'Life-threatening hyperkalemia, cardiac arrest',
    alternatives: ['Loop diuretics', 'Thiazides'],
    monitoring: ['Serum potassium'],
    clinicalPearl: 'Risk is highest with concurrent ACEi/ARB, NSAIDs, renal impairment',
  },

  // Statins
  {
    id: 'statin-pregnancy',
    drugClass: 'Statins',
    drugs: ['atorvastatin', 'simvastatin', 'rosuvastatin', 'pravastatin', 'lovastatin', 'fluvastatin', 'pitavastatin'],
    condition: 'Pregnancy',
    conditionAliases: ['pregnant', 'pregnancy', 'expecting', 'breastfeeding'],
    type: 'absolute',
    reason: 'Cholesterol is essential for fetal development; theoretical teratogenicity',
    mechanism: 'Cholesterol is required for cell membrane synthesis and hormone production in developing fetus',
    risk: 'Theoretical teratogenicity (limited human data)',
    alternatives: ['Stop statin before conception', 'Bile acid sequestrants if needed during pregnancy'],
    clinicalPearl: 'Category X. Stop before pregnancy. Short-term lipid management not critical during pregnancy.',
  },
  {
    id: 'statin-liver-disease',
    drugClass: 'Statins',
    drugs: ['atorvastatin', 'simvastatin', 'rosuvastatin', 'pravastatin', 'lovastatin'],
    condition: 'Active liver disease',
    conditionAliases: ['liver disease', 'hepatitis', 'cirrhosis', 'elevated transaminases', 'alt elevated'],
    type: 'absolute',
    reason: 'May worsen hepatic function; altered drug metabolism',
    mechanism: 'Statins undergo hepatic metabolism; diseased liver cannot process drugs safely',
    risk: 'Hepatotoxicity, drug accumulation',
    alternatives: ['Ezetimibe', 'Bile acid sequestrants', 'Treat liver disease first'],
    exceptions: 'Stable NAFLD is not a contraindication; statins may actually benefit NAFLD',
    monitoring: ['LFTs'],
    clinicalPearl: 'Routine LFT monitoring no longer required by FDA, but check baseline and if symptomatic',
  },
];

// ============================================
// Diabetes Drug Contraindications
// ============================================

export const DIABETES_CONTRAINDICATIONS: DrugContraindication[] = [
  {
    id: 'metformin-ckd',
    drugClass: 'Biguanides',
    drugs: ['metformin'],
    condition: 'Severe renal impairment (eGFR <30)',
    conditionAliases: ['kidney failure', 'ckd stage 4', 'ckd stage 5', 'dialysis', 'egfr less than 30'],
    type: 'absolute',
    reason: 'Cannot be renally excreted; accumulates causing lactic acidosis',
    mechanism: 'Metformin is cleared 100% by kidneys; accumulation inhibits lactate metabolism',
    risk: 'Metformin-associated lactic acidosis (MALA), which is often fatal',
    alternatives: ['Sulfonylureas (with caution)', 'DPP-4 inhibitors', 'GLP-1 agonists', 'Insulin'],
    exceptions: 'Can use reduced dose (max 1000mg/day) if eGFR 30-45',
    monitoring: ['eGFR', 'Lactate if symptomatic'],
    clinicalPearl: 'Updated FDA guidance allows use with eGFR 30-45 at reduced dose. Stop if <30.',
  },
  {
    id: 'metformin-lactic-acidosis',
    drugClass: 'Biguanides',
    drugs: ['metformin'],
    condition: 'Lactic acidosis or conditions predisposing to lactic acidosis',
    conditionAliases: ['lactic acidosis', 'sepsis', 'shock', 'hypoxia', 'acute mi', 'liver failure'],
    type: 'absolute',
    reason: 'Impaired lactate clearance increases lactic acidosis risk',
    mechanism: 'Metformin inhibits lactate conversion to glucose; conditions with tissue hypoxia produce excess lactate',
    risk: 'Fatal lactic acidosis',
    alternatives: ['Insulin', 'Hold metformin during acute illness'],
    clinicalPearl: 'Hold metformin during acute illness, hospitalization, or procedures with contrast',
  },
  {
    id: 'su-severe-renal',
    drugClass: 'Sulfonylureas',
    drugs: ['glyburide', 'glimepiride'],
    condition: 'Severe renal impairment',
    conditionAliases: ['kidney failure', 'ckd stage 4', 'ckd stage 5', 'egfr less than 30'],
    type: 'relative',
    reason: 'Prolonged hypoglycemia due to reduced drug and metabolite clearance',
    mechanism: 'Active metabolites accumulate, causing prolonged insulin secretion and hypoglycemia',
    risk: 'Severe, prolonged hypoglycemia',
    alternatives: ['Glipizide (hepatically cleared)', 'Linagliptin', 'Insulin'],
    exceptions: 'Glipizide is preferred sulfonylurea in CKD',
    monitoring: ['Blood glucose', 'Renal function'],
    clinicalPearl: 'Glipizide is the safest sulfonylurea in CKD as it lacks active renally-cleared metabolites',
  },
  {
    id: 'sglt2-dialysis',
    drugClass: 'SGLT2 inhibitors',
    drugs: ['empagliflozin', 'canagliflozin', 'dapagliflozin', 'ertugliflozin'],
    condition: 'Dialysis',
    conditionAliases: ['dialysis', 'esrd', 'end stage renal disease', 'hemodialysis', 'peritoneal dialysis'],
    type: 'absolute',
    reason: 'Mechanism requires functioning kidneys; no efficacy and increased risk',
    mechanism: 'SGLT2 inhibitors work by blocking glucose reabsorption in proximal tubule; no tubular function = no effect',
    risk: 'No benefit, potential harm from volume depletion',
    alternatives: ['Insulin', 'DPP-4 inhibitors (dose adjusted)', 'GLP-1 agonists'],
    clinicalPearl: 'Some data support dapagliflozin down to eGFR 25 for HF benefit, but not for glycemic control',
  },
  {
    id: 'sglt2-dka-history',
    drugClass: 'SGLT2 inhibitors',
    drugs: ['empagliflozin', 'canagliflozin', 'dapagliflozin', 'ertugliflozin'],
    condition: 'History of diabetic ketoacidosis or type 1 diabetes',
    conditionAliases: ['dka', 'diabetic ketoacidosis', 'type 1 diabetes', 't1dm'],
    type: 'relative',
    reason: 'Risk of euglycemic DKA',
    mechanism: 'Glucosuria reduces glucose but shifts metabolism to ketogenesis; DKA can occur with near-normal glucose',
    risk: 'Euglycemic diabetic ketoacidosis',
    alternatives: ['Insulin optimization', 'GLP-1 agonists for T2DM'],
    exceptions: 'Some use in T1DM with close monitoring (off-label)',
    monitoring: ['Ketones if ill', 'Consider sick day rules'],
    clinicalPearl: 'Euglycemic DKA: glucose may be only slightly elevated. Check ketones if patient is ill.',
  },
];

// ============================================
// Psychiatric Drug Contraindications
// ============================================

export const PSYCHIATRIC_CONTRAINDICATIONS: DrugContraindication[] = [
  {
    id: 'ssri-maoi',
    drugClass: 'SSRIs/SNRIs',
    drugs: ['sertraline', 'fluoxetine', 'paroxetine', 'citalopram', 'escitalopram', 'venlafaxine', 'duloxetine', 'desvenlafaxine'],
    condition: 'Concurrent or recent MAOI use',
    conditionAliases: ['maoi', 'monoamine oxidase inhibitor', 'phenelzine', 'tranylcypromine', 'selegiline'],
    type: 'absolute',
    reason: 'Fatal serotonin syndrome',
    mechanism: 'MAOIs prevent serotonin breakdown + SSRIs prevent reuptake = massive serotonin accumulation',
    risk: 'Life-threatening serotonin syndrome: hyperthermia, rigidity, autonomic instability, death',
    alternatives: ['Wait appropriate washout period', 'Other antidepressant classes (with caution)'],
    monitoring: ['Never combine'],
    clinicalPearl: 'Wait 2 weeks after stopping most SSRIs; 5 weeks after fluoxetine (long half-life) before starting MAOI',
  },
  {
    id: 'benzo-respiratory',
    drugClass: 'Benzodiazepines',
    drugs: ['alprazolam', 'lorazepam', 'diazepam', 'clonazepam', 'temazepam', 'triazolam'],
    condition: 'Severe respiratory insufficiency',
    conditionAliases: ['respiratory failure', 'copd exacerbation', 'severe sleep apnea', 'respiratory insufficiency'],
    type: 'relative',
    reason: 'Respiratory depression can be fatal',
    mechanism: 'GABA-A agonism depresses respiratory drive',
    risk: 'Respiratory failure, death',
    alternatives: ['Non-benzodiazepine anxiolytics', 'Low-dose if essential with monitoring'],
    exceptions: 'Palliative care situations may warrant careful use',
    monitoring: ['Respiratory rate', 'Oxygen saturation'],
    clinicalPearl: 'Particularly dangerous when combined with opioids - FDA black box warning',
  },
  {
    id: 'benzo-glaucoma',
    drugClass: 'Benzodiazepines',
    drugs: ['alprazolam', 'lorazepam', 'diazepam', 'clonazepam'],
    condition: 'Narrow-angle glaucoma',
    conditionAliases: ['acute angle closure glaucoma', 'narrow angle glaucoma', 'closed angle glaucoma'],
    type: 'relative',
    reason: 'Anticholinergic effects may precipitate acute angle closure',
    mechanism: 'Weak anticholinergic activity can cause mydriasis, blocking aqueous outflow',
    risk: 'Acute angle closure glaucoma, vision loss',
    alternatives: ['Non-anticholinergic anxiolytics', 'Buspirone', 'SSRIs (low anticholinergic)'],
    exceptions: 'Open-angle glaucoma is not a contraindication',
    monitoring: ['Eye pressure'],
  },
  {
    id: 'lithium-severe-renal',
    drugClass: 'Mood stabilizers',
    drugs: ['lithium'],
    condition: 'Severe renal impairment',
    conditionAliases: ['kidney failure', 'ckd stage 4', 'ckd stage 5', 'dialysis', 'egfr less than 30'],
    type: 'relative',
    reason: 'Lithium is renally cleared; accumulation causes toxicity',
    mechanism: 'Reduced renal clearance leads to lithium accumulation and toxicity',
    risk: 'Lithium toxicity (tremor, ataxia, seizures, coma)',
    alternatives: ['Valproate', 'Lamotrigine', 'Atypical antipsychotics'],
    exceptions: 'Can be used with very close monitoring and dose reduction in moderate CKD',
    monitoring: ['Lithium level frequently', 'Renal function'],
    clinicalPearl: 'Lithium also causes nephrogenic DI and chronic kidney disease - monitor renal function',
  },
  {
    id: 'antipsychotic-dementia',
    drugClass: 'Antipsychotics',
    drugs: ['risperidone', 'olanzapine', 'quetiapine', 'aripiprazole', 'haloperidol', 'ziprasidone'],
    condition: 'Dementia-related psychosis',
    conditionAliases: ['dementia', 'alzheimers', 'vascular dementia', 'lewy body dementia', 'elderly psychosis'],
    type: 'relative',
    reason: 'FDA black box warning: increased mortality in elderly with dementia',
    mechanism: 'Increased risk of stroke and sudden cardiac death in this population',
    risk: '1.6-1.7x increased mortality, stroke, sudden death',
    alternatives: ['Non-pharmacological interventions first', 'If necessary, use lowest dose for shortest time'],
    clinicalPearl: 'Use only when benefits clearly outweigh risks. Document discussion with family.',
  },
];

// ============================================
// Analgesic Contraindications
// ============================================

export const ANALGESIC_CONTRAINDICATIONS: DrugContraindication[] = [
  {
    id: 'nsaid-gi-bleeding',
    drugClass: 'NSAIDs',
    drugs: ['ibuprofen', 'naproxen', 'indomethacin', 'meloxicam', 'diclofenac', 'piroxicam', 'ketorolac', 'celecoxib'],
    condition: 'Active GI bleeding or ulcer',
    conditionAliases: ['gi bleed', 'peptic ulcer', 'gastric ulcer', 'duodenal ulcer', 'melena', 'hematemesis'],
    type: 'absolute',
    reason: 'NSAIDs inhibit prostaglandin protection and platelet function, worsening bleeding',
    mechanism: 'COX inhibition reduces protective mucus and bicarbonate; also impairs platelet aggregation',
    risk: 'Fatal hemorrhage',
    alternatives: ['Acetaminophen', 'Topical NSAIDs', 'Opioids if severe pain'],
    clinicalPearl: 'COX-2 selective agents (celecoxib) have lower GI risk but still problematic with active bleeding',
  },
  {
    id: 'nsaid-ckd',
    drugClass: 'NSAIDs',
    drugs: ['ibuprofen', 'naproxen', 'indomethacin', 'meloxicam', 'diclofenac', 'piroxicam', 'ketorolac', 'celecoxib'],
    condition: 'Chronic kidney disease (especially advanced)',
    conditionAliases: ['ckd', 'kidney disease', 'renal failure', 'renal insufficiency'],
    type: 'relative',
    reason: 'NSAIDs can cause acute kidney injury and accelerate CKD progression',
    mechanism: 'Prostaglandins maintain afferent arteriolar dilation; inhibition reduces renal blood flow',
    risk: 'Acute kidney injury, accelerated CKD progression, fluid retention',
    alternatives: ['Acetaminophen', 'Topical agents', 'Low-dose short-term if essential'],
    monitoring: ['Creatinine', 'Urine output'],
    clinicalPearl: 'Triple whammy: NSAID + ACEi + diuretic dramatically increases AKI risk',
  },
  {
    id: 'nsaid-heart-failure',
    drugClass: 'NSAIDs',
    drugs: ['ibuprofen', 'naproxen', 'indomethacin', 'meloxicam', 'diclofenac', 'piroxicam', 'ketorolac', 'celecoxib'],
    condition: 'Heart failure',
    conditionAliases: ['heart failure', 'hf', 'chf', 'congestive heart failure', 'hfref', 'hfpef'],
    type: 'relative',
    reason: 'NSAIDs cause sodium and water retention, worsening heart failure',
    mechanism: 'Prostaglandin inhibition reduces natriuresis and causes fluid retention',
    risk: 'Heart failure exacerbation, hospitalization',
    alternatives: ['Acetaminophen', 'Topical agents'],
    clinicalPearl: 'NSAIDs are a common precipitant of HF hospitalization - always ask about OTC use',
  },
  {
    id: 'nsaid-pregnancy-3rd',
    drugClass: 'NSAIDs',
    drugs: ['ibuprofen', 'naproxen', 'indomethacin', 'meloxicam', 'diclofenac', 'ketorolac', 'celecoxib'],
    condition: 'Pregnancy (especially 3rd trimester)',
    conditionAliases: ['pregnancy', 'pregnant', '3rd trimester', 'third trimester'],
    type: 'absolute',
    reason: 'Causes premature closure of ductus arteriosus and oligohydramnios',
    mechanism: 'Prostaglandins keep ductus arteriosus open; inhibition causes premature closure',
    risk: 'Fetal pulmonary hypertension, oligohydramnios, premature DA closure',
    alternatives: ['Acetaminophen'],
    clinicalPearl: 'FDA recommends avoiding NSAIDs after 20 weeks; contraindicated after 30 weeks',
  },
  {
    id: 'opioid-resp-depression',
    drugClass: 'Opioids',
    drugs: ['morphine', 'oxycodone', 'hydrocodone', 'fentanyl', 'hydromorphone', 'methadone', 'codeine'],
    condition: 'Severe respiratory depression or status asthmaticus',
    conditionAliases: ['respiratory failure', 'respiratory depression', 'asthma attack', 'copd exacerbation'],
    type: 'absolute',
    reason: 'Opioids depress respiratory drive, worsening respiratory failure',
    mechanism: 'Mu-opioid receptors in brainstem reduce sensitivity to CO2 and respiratory rate',
    risk: 'Respiratory arrest, death',
    alternatives: ['Non-opioid analgesics', 'Regional anesthesia'],
    exceptions: 'Palliative care may warrant careful use',
    clinicalPearl: 'Particularly dangerous with concurrent benzodiazepines - FDA black box warning',
  },
  {
    id: 'opioid-mao-inhibitor',
    drugClass: 'Opioids (especially meperidine)',
    drugs: ['meperidine', 'tramadol', 'fentanyl', 'methadone', 'tapentadol'],
    condition: 'MAOI use (current or within 14 days)',
    conditionAliases: ['maoi', 'monoamine oxidase inhibitor', 'phenelzine', 'tranylcypromine'],
    type: 'absolute',
    reason: 'Serotonin syndrome or hypertensive crisis',
    mechanism: 'Some opioids have serotonergic effects; combined with MAOI causes serotonin syndrome',
    risk: 'Fatal serotonin syndrome or hypertensive crisis',
    alternatives: ['Morphine and oxycodone are safer (avoid meperidine)', 'Non-opioid analgesics'],
    clinicalPearl: 'Meperidine + MAOI is particularly dangerous. Tramadol also high risk.',
  },
];

// ============================================
// Antibiotic Contraindications
// ============================================

export const ANTIBIOTIC_CONTRAINDICATIONS: DrugContraindication[] = [
  {
    id: 'fq-tendinopathy',
    drugClass: 'Fluoroquinolones',
    drugs: ['ciprofloxacin', 'levofloxacin', 'moxifloxacin', 'ofloxacin', 'norfloxacin'],
    condition: 'History of fluoroquinolone-associated tendinopathy',
    conditionAliases: ['tendon rupture', 'achilles rupture', 'tendinitis', 'fq tendinopathy'],
    type: 'absolute',
    reason: 'High risk of recurrent tendon damage',
    mechanism: 'Fluoroquinolones damage collagen synthesis in tendons',
    risk: 'Tendon rupture, especially Achilles',
    alternatives: ['Other antibiotic classes based on infection'],
    clinicalPearl: 'Risk factors: age >60, concurrent corticosteroids, renal impairment, organ transplant',
  },
  {
    id: 'fq-myasthenia',
    drugClass: 'Fluoroquinolones',
    drugs: ['ciprofloxacin', 'levofloxacin', 'moxifloxacin', 'ofloxacin'],
    condition: 'Myasthenia gravis',
    conditionAliases: ['myasthenia gravis', 'mg', 'neuromuscular disease'],
    type: 'relative',
    reason: 'May exacerbate myasthenia gravis symptoms',
    mechanism: 'Fluoroquinolones may block neuromuscular transmission',
    risk: 'Myasthenic crisis, respiratory failure',
    alternatives: ['Non-fluoroquinolone antibiotics based on infection'],
    monitoring: ['Respiratory function', 'Muscle strength'],
    clinicalPearl: 'FDA black box warning. Use only if no alternatives.',
  },
  {
    id: 'aminoglycoside-renal',
    drugClass: 'Aminoglycosides',
    drugs: ['gentamicin', 'tobramycin', 'amikacin', 'streptomycin'],
    condition: 'Pre-existing renal impairment',
    conditionAliases: ['kidney disease', 'ckd', 'renal insufficiency', 'aki'],
    type: 'relative',
    reason: 'Aminoglycosides are nephrotoxic and renally cleared',
    mechanism: 'Accumulate in renal tubular cells causing proximal tubule necrosis',
    risk: 'Acute kidney injury, permanent renal damage',
    alternatives: ['Beta-lactams', 'Fluoroquinolones', 'Carbapenems'],
    exceptions: 'May be necessary for serious infections; use extended-interval dosing',
    monitoring: ['Drug levels (trough)', 'Creatinine', 'Urine output'],
    clinicalPearl: 'Extended-interval dosing (once daily) is less nephrotoxic than traditional dosing',
  },
  {
    id: 'tetracycline-pregnancy',
    drugClass: 'Tetracyclines',
    drugs: ['doxycycline', 'tetracycline', 'minocycline'],
    condition: 'Pregnancy (after 1st trimester) and children <8 years',
    conditionAliases: ['pregnancy', 'pregnant', 'children', 'pediatric'],
    type: 'absolute',
    reason: 'Permanent tooth discoloration and bone growth effects',
    mechanism: 'Tetracyclines bind calcium in developing teeth and bones',
    risk: 'Permanent tooth discoloration, enamel hypoplasia, bone growth inhibition',
    alternatives: ['Azithromycin', 'Amoxicillin', 'Other pregnancy-safe antibiotics'],
    clinicalPearl: 'Short courses of doxycycline may be used in first trimester if strongly indicated',
  },
  {
    id: 'bactrim-g6pd',
    drugClass: 'Sulfonamides',
    drugs: ['sulfamethoxazole', 'trimethoprim-sulfamethoxazole', 'sulfasalazine'],
    condition: 'G6PD deficiency',
    conditionAliases: ['g6pd', 'g6pd deficiency', 'favism', 'glucose-6-phosphate dehydrogenase deficiency'],
    type: 'relative',
    reason: 'Can trigger hemolytic anemia in G6PD deficiency',
    mechanism: 'Sulfonamides cause oxidative stress; G6PD-deficient RBCs cannot handle oxidative damage',
    risk: 'Hemolytic anemia, potentially severe',
    alternatives: ['Non-sulfonamide antibiotics based on infection'],
    monitoring: ['Hemoglobin', 'Reticulocyte count', 'Signs of hemolysis'],
    clinicalPearl: 'Risk varies by G6PD variant severity. Mediterranean variants are most severe.',
  },
];

// ============================================
// GI Drug Contraindications
// ============================================

export const GI_CONTRAINDICATIONS: DrugContraindication[] = [
  {
    id: 'ppi-hypomagnesemia',
    drugClass: 'Proton Pump Inhibitors',
    drugs: ['omeprazole', 'esomeprazole', 'lansoprazole', 'pantoprazole', 'rabeprazole'],
    condition: 'History of PPI-induced hypomagnesemia',
    conditionAliases: ['hypomagnesemia', 'low magnesium', 'ppi hypomagnesemia'],
    type: 'relative',
    reason: 'PPIs can cause persistent hypomagnesemia',
    mechanism: 'PPIs reduce intestinal magnesium absorption through unclear mechanism',
    risk: 'Arrhythmias, seizures, tetany from severe hypomagnesemia',
    alternatives: ['H2 blockers', 'Antacids', 'Discontinue PPI if possible'],
    monitoring: ['Magnesium level'],
    clinicalPearl: 'Check magnesium before starting long-term PPI in at-risk patients',
  },
  {
    id: 'metoclopramide-parkinson',
    drugClass: 'Prokinetics',
    drugs: ['metoclopramide'],
    condition: 'Parkinson disease or tardive dyskinesia',
    conditionAliases: ['parkinsons', 'parkinson disease', 'tardive dyskinesia', 'td'],
    type: 'absolute',
    reason: 'Dopamine blockade worsens parkinsonism and can cause tardive dyskinesia',
    mechanism: 'Central dopamine-2 receptor blockade',
    risk: 'Worsening parkinsonism, irreversible tardive dyskinesia',
    alternatives: ['Domperidone (not available in US)', 'Erythromycin as prokinetic'],
    clinicalPearl: 'FDA black box warning: do not use >12 weeks due to tardive dyskinesia risk',
  },
];

// ============================================
// Combined Contraindication Database
// ============================================

export const ALL_CONTRAINDICATIONS: DrugContraindication[] = [
  ...CARDIOVASCULAR_CONTRAINDICATIONS,
  ...DIABETES_CONTRAINDICATIONS,
  ...PSYCHIATRIC_CONTRAINDICATIONS,
  ...ANALGESIC_CONTRAINDICATIONS,
  ...ANTIBIOTIC_CONTRAINDICATIONS,
  ...GI_CONTRAINDICATIONS,
];

// ============================================
// Lookup Functions
// ============================================

/**
 * Find contraindications for a specific drug
 */
export function getContraindicationsForDrug(drugName: string): DrugContraindication[] {
  const name = drugName.toLowerCase().trim();

  return ALL_CONTRAINDICATIONS.filter((ci) =>
    ci.drugs.some((d) => d.toLowerCase() === name)
  );
}

/**
 * Find contraindications for a specific condition
 */
export function getContraindicationsForCondition(condition: string): DrugContraindication[] {
  const cond = condition.toLowerCase().trim();

  return ALL_CONTRAINDICATIONS.filter(
    (ci) =>
      ci.condition.toLowerCase().includes(cond) ||
      ci.conditionAliases.some((a) => a.toLowerCase().includes(cond))
  );
}

/**
 * Check if a drug is contraindicated for a specific condition
 */
export function isContraindicated(
  drugName: string,
  condition: string
): { isContraindicated: boolean; contraindication?: DrugContraindication } {
  const drugCIs = getContraindicationsForDrug(drugName);
  const cond = condition.toLowerCase().trim();

  const match = drugCIs.find(
    (ci) =>
      ci.condition.toLowerCase().includes(cond) ||
      ci.conditionAliases.some((a) => a.toLowerCase().includes(cond))
  );

  return {
    isContraindicated: !!match,
    contraindication: match,
  };
}

/**
 * Check multiple drugs against multiple conditions
 */
export function checkMultipleContraindications(
  drugs: string[],
  conditions: string[]
): { drug: string; condition: string; contraindication: DrugContraindication }[] {
  const results: { drug: string; condition: string; contraindication: DrugContraindication }[] = [];

  for (const drug of drugs) {
    for (const condition of conditions) {
      const { isContraindicated: ci, contraindication } = isContraindicated(drug, condition);
      if (ci && contraindication) {
        results.push({
          drug,
          condition,
          contraindication,
        });
      }
    }
  }

  // Sort by type (absolute first)
  const typeOrder: Record<ContraindicationType, number> = {
    absolute: 0,
    relative: 1,
    caution: 2,
  };

  results.sort((a, b) => typeOrder[a.contraindication.type] - typeOrder[b.contraindication.type]);

  return results;
}

/**
 * Get contraindication severity color
 */
export function getContraindicationColor(type: ContraindicationType): string {
  switch (type) {
    case 'absolute':
      return '#dc2626'; // red
    case 'relative':
      return '#f97316'; // orange
    case 'caution':
      return '#eab308'; // yellow
  }
}

/**
 * Get alternatives for a contraindicated drug
 */
export function getAlternatives(drugName: string, condition: string): string[] {
  const { contraindication } = isContraindicated(drugName, condition);
  return contraindication?.alternatives || [];
}
