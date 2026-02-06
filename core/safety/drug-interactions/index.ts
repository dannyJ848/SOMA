/**
 * Drug Interaction Database
 * Main entry point - aggregates all interaction types
 */

export * from './database';
export * from './interactions-drug-drug';
export * from './interactions-food';
export * from './interactions-supplement';
export * from './interactions-disease';

import { DrugInteraction, DRUG_INTERACTIONS } from './interactions-drug-drug';
import { FOOD_INTERACTIONS } from './interactions-food';
import { SUPPLEMENT_INTERACTIONS } from './interactions-supplement';
import { DISEASE_INTERACTIONS } from './interactions-disease';

// Combined list of all interactions
export const ALL_INTERACTIONS: DrugInteraction[] = [
  ...DRUG_INTERACTIONS,
  ...FOOD_INTERACTIONS,
  ...SUPPLEMENT_INTERACTIONS,
  ...DISEASE_INTERACTIONS
];

// Statistics for documentation
export const INTERACTION_STATS = {
  total: ALL_INTERACTIONS.length,
  drugDrug: DRUG_INTERACTIONS.length,
  drugFood: FOOD_INTERACTIONS.length,
  drugSupplement: SUPPLEMENT_INTERACTIONS.length,
  drugDisease: DISEASE_INTERACTIONS.length,
  bySeverity: {
    contraindicated: ALL_INTERACTIONS.filter(i => i.severity === 'contraindicated').length,
    major: ALL_INTERACTIONS.filter(i => i.severity === 'major').length,
    moderate: ALL_INTERACTIONS.filter(i => i.severity === 'moderate').length,
    minor: ALL_INTERACTIONS.filter(i => i.severity === 'minor').length
  }
};

// Top 500 most prescribed drugs (subset for matching)
export const COMMON_DRUGS = [
  // Cardiovascular
  'atorvastatin', 'rosuvastatin', 'simvastatin', 'pravastatin', 'lovastatin',
  'lisinopril', 'enalapril', 'captopril', 'ramipril', 'benazepril',
  'amlodipine', 'diltiazem', 'verapamil', 'nifedipine',
  'metoprolol', 'atenolol', 'propranolol', 'carvedilol', 'bisoprolol',
  'hydrochlorothiazide', 'furosemide', 'chlorthalidone', 'spironolactone',
  'losartan', 'valsartan', 'irbesartan', 'candesartan', 'olmesartan',
  'warfarin', 'rivaroxaban', 'apixaban', 'dabigatran', 'edoxaban',
  'clopidogrel', 'aspirin', 'prasugrel', 'ticagrelor',
  'digoxin', 'amiodarone', 'dofetilide', 'sotalol',
  'isosorbide', 'nitroglycerin', 'ranolazine',
  'ezetimibe', 'fenofibrate', 'gemfibrozil',
  'hydralazine', 'minoxidil', 'doxazosin', 'terazosin', 'tamsulosin',
  
  // CNS/Psychiatric
  'sertraline', 'fluoxetine', 'paroxetine', 'citalopram', 'escitalopram', 'fluvoxamine',
  'venlafaxine', 'duloxetine', 'desvenlafaxine',
  'bupropion', 'mirtazapine', 'trazodone',
  'amitriptyline', 'nortriptyline', 'imipramine', 'desipramine',
  'phenelzine', 'tranylcypromine',
  'alprazolam', 'lorazepam', 'diazepam', 'clonazepam', 'temazepam',
  'zolpidem', 'eszopiclone', 'zaleplon',
  'haloperidol', 'risperidone', 'olanzapine', 'quetiapine', 'aripiprazole', 'ziprasidone',
  'lithium', 'valproic acid', 'carbamazepine', 'lamotrigine', 'levetiracetam', 'phenytoin', 'topiramate', 'gabapentin', 'pregabalin',
  'methylphenidate', 'amphetamine', 'lisdexamfetamine', 'modafinil',
  'sumatriptan', 'rizatriptan', 'eletriptan',
  'donepezil', 'memantine',
  'ropinirole', 'pramipexole', 'carbidopa', 'levodopa',
  
  // Pain/Analgesics
  'oxycodone', 'hydrocodone', 'morphine', 'fentanyl', 'tramadol', 'codeine',
  'hydromorphone', 'oxymorphone', 'buprenorphine', 'methadone',
  'ibuprofen', 'naproxen', 'diclofenac', 'meloxicam', 'celecoxib',
  'acetaminophen',
  'cyclobenzaprine', 'tizanidine', 'baclofen', 'carisoprodol', 'methocarbamol',
  'gabapentin', 'pregabalin', 'duloxetine', 'milnacipran',
  
  // Endocrine/Diabetes
  'metformin', 'glipizide', 'glyburide', 'glimepiride',
  'sitagliptin', 'saxagliptin', 'linagliptin', 'alogliptin',
  'canagliflozin', 'dapagliflozin', 'empagliflozin',
  'liraglutide', 'semaglutide', 'dulaglutide', 'exenatide',
  'pioglitazone', 'rosiglitazone',
  'insulin', 'insulin glargine', 'insulin detemir', 'insulin aspart', 'insulin lispro',
  'levothyroxine', 'liothyronine', 'methimazole', 'propylthiouracil',
  'prednisone', 'prednisolone', 'methylprednisolone', 'dexamethasone', 'hydrocortisone',
  
  // Gastrointestinal
  'omeprazole', 'esomeprazole', 'pantoprazole', 'lansoprazole', 'rabeprazole',
  'ranitidine', 'famotidine', 'cimetidine',
  'sucralfate', 'misoprostol',
  'ondansetron', 'promethazine', 'prochlorperazine', 'metoclopramide',
  'loperamide', 'diphenoxylate',
  'lubiprostone', 'linaclotide', 'plecanatide',
  'mesalamine', 'sulfasalazine', 'balsalazide',
  'infliximab', 'adalimumab', 'vedolizumab',
  
  // Antibiotics
  'amoxicillin', 'amoxicillin-clavulanate', 'ampicillin', 'cephalexin', 'cefuroxime',
  'azithromycin', 'clarithromycin', 'erythromycin',
  'ciprofloxacin', 'levofloxacin', 'moxifloxacin',
  'trimethoprim-sulfamethoxazole', 'nitrofurantoin', 'fosfomycin',
  'metronidazole', 'clindamycin', 'doxycycline', 'minocycline',
  'vancomycin', 'linezolid', 'daptomycin',
  'piperacillin-tazobactam', 'meropenem', 'ertapenem', 'imipenem',
  'gentamicin', 'tobramycin', 'amikacin',
  'fluconazole', 'itraconazole', 'voriconazole', 'posaconazole', 'isavuconazole',
  'acyclovir', 'valacyclovir', 'famciclovir',
  'oseltamivir',
  
  // Antiviral/HIV/Hepatitis
  'tenofovir', 'emtricitabine', 'lamivudine', 'abacavir', 'zidovudine',
  'dolutegravir', 'raltegravir', 'elvitegravir', 'bictegravir',
  'darunavir', 'atazanavir', 'raltegravir', 'maraviroc',
  'sofosbuvir', 'ledipasvir', 'velpatasvir', 'glecaprevir', 'pibrentasvir',
  
  // Respiratory
  'albuterol', 'levalbuterol', 'salmeterol', 'formoterol', 'vilanterol',
  'fluticasone', 'budesonide', 'mometasone', 'beclomethasone',
  'tiotropium', 'ipratropium', 'umeclidinium', 'aclidinium',
  'montelukast', 'zafirlukast', 'omalizumab', 'mepolizumab',
  'theophylline', 'roflumilast',
  'benzonatate', 'guaifenesin', 'dextromethorphan',
  
  // Urology
  'sildenafil', 'tadalafil', 'vardenafil', 'avanafil',
  'finasteride', 'dutasteride',
  'oxybutynin', 'tolterodine', 'solifenacin', 'darifenacin', 'trospium', 'mirabegron',
  'phenazopyridine',
  
  // Women's Health
  'ethinyl estradiol', 'norethindrone', 'levonorgestrel', 'drospirenone', 'norgestimate',
  'medroxyprogesterone', 'megestrol',
  'tamoxifen', 'raloxifene', 'anastrozole', 'letrozole', 'exemestane',
  'conjugated estrogens', 'estradiol',
  
  // Oncology
  'methotrexate', 'cyclophosphamide', 'doxorubicin', 'vincristine', 'paclitaxel', 'docetaxel',
  'carboplatin', 'cisplatin', 'oxaliplatin',
  'imatinib', 'dasatinib', 'nilotinib',
  'rituximab', 'trastuzumab', 'bevacizumab',
  
  // Immunosuppressants
  'tacrolimus', 'cyclosporine', 'sirolimus', 'everolimus',
  'mycophenolate', 'azathioprine', 'leflunomide',
  'prednisone', 'methylprednisolone',
  'etanercept', 'adalimumab', 'infliximab', 'ustekinumab', 'secukinumab',
  
  // Other
  'allopurinol', 'febuxostat', 'colchicine', 'probenecid',
  'warfarin', 'heparin', 'enoxaparin', 'dalteparin',
  'deferasirox', 'penicillamine',
  'disulfiram', 'naltrexone', 'acamprosate',
  'bupropion', 'varenicline', 'nicotine',
  
  // Vitamins/Supplements (that interact)
  'vitamin K', 'vitamin E', 'calcium', 'iron', 'magnesium', 'potassium',
  'fish oil', 'omega-3', 'coenzyme Q10', 'St. John\'s Wort',
  'ginkgo', 'garlic', 'ginseng', 'ginger'
];

// Helper to normalize drug names for matching
export function normalizeDrugName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '')
    .replace(/sodium|potassium|calcium|magnesium|hydrochloride|sulfate|acetate/g, '');
}

// Helper to check if a drug name matches
export function drugNameMatches(drug: string, interaction: DrugInteraction): boolean {
  const normalizedDrug = normalizeDrugName(drug);
  
  // Check primary drug
  if (interaction.primaryDrug.genericNames.some(n => normalizeDrugName(n) === normalizedDrug)) {
    return true;
  }
  
  // Check drug classes (would need drug class lookup in real implementation)
  // For now, just check generic names
  
  return false;
}

// Helper to check if two drugs interact
export function findDrugInteraction(drug1: string, drug2: string): DrugInteraction | undefined {
  return DRUG_INTERACTIONS.find(i => 
    (drugNameMatches(drug1, i) && drugNameMatches(drug2, { ...i, primaryDrug: { ...i.interactsWith, genericNames: i.interactsWith.genericNames || [i.interactsWith.name] } } as any)) ||
    (drugNameMatches(drug2, i) && drugNameMatches(drug1, { ...i, primaryDrug: { ...i.interactsWith, genericNames: i.interactsWith.genericNames || [i.interactsWith.name] } } as any))
  );
}
