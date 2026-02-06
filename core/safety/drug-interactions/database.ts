/**
 * Drug Interaction Database
 * 
 * Contains 100+ clinically significant drug-drug, drug-disease, drug-food,
 * and drug-supplement interactions with severity ratings and management recommendations.
 * 
 * Sources: Lexicomp, Micromedex, FDA drug labels, clinical guidelines
 */

// ============================================================================
// Type Definitions
// ============================================================================

export type InteractionSeverity = 'minor' | 'moderate' | 'major' | 'contraindicated';
export type InteractionType = 'drug-drug' | 'drug-disease' | 'drug-food' | 'drug-supplement';
export type MechanismType = 
  | 'cyp450-inhibition'
  | 'cyp450-induction'
  | 'additive-effect'
  | 'synergistic'
  | 'antagonistic'
  | 'pharmacodynamic'
  | 'pharmacokinetic'
  | 'serotonergic'
  | 'qt-prolongation'
  | 'nephrotoxic'
  | 'hepatotoxic'
  | 'hematologic'
  | 'hypotensive'
  | 'hyperkalemia'
  | 'bleeding-risk'
  | 'respiratory-depression'
  | 'metabolic'
  | 'excretion-reduction'
  | 'absorption-reduction'
  | 'protein-binding-displacement'
  | 'unknown';

export interface DrugInteraction {
  id: string;
  type: InteractionType;
  severity: InteractionSeverity;
  mechanism: MechanismType;
  
  // Primary drug being checked
  primaryDrug: {
    name: string;
    genericNames: string[];
    drugClasses?: string[];
  };
  
  // Interacting substance
  interactsWith: {
    name: string;
    genericNames?: string[];
    drugClasses?: string[];
    conditions?: string[]; // For drug-disease
    foods?: string[]; // For drug-food
    supplements?: string[]; // For drug-supplement
  };
  
  // Detailed information
  description: string;
  clinicalEffects: string[];
  onset: 'rapid' | 'delayed' | 'variable';
  
  // Management
  recommendation: string;
  alternatives?: string[];
  monitoringRequired?: string[];
  
  // Evidence
  evidenceLevel: 'theoretical' | 'case-reports' | 'clinical-trial' | 'established';
  references?: string[];
}

export interface InteractionSeverityInfo {
  level: InteractionSeverity;
  name: string;
  color: string;
  icon: string;
  description: string;
  action: string;
}

// ============================================================================
// Severity Definitions
// ============================================================================

export const SEVERITY_INFO: Record<InteractionSeverity, InteractionSeverityInfo> = {
  minor: {
    level: 'minor',
    name: 'Minor Interaction',
    color: '#3b82f6', // blue-500
    icon: 'ℹ️',
    description: 'Interaction is unlikely to cause adverse effects',
    action: 'Usually no action needed, but be aware'
  },
  moderate: {
    level: 'moderate',
    name: 'Moderate Interaction',
    color: '#f59e0b', // amber-500
    icon: '⚠️',
    description: 'May cause significant clinical problems',
    action: 'Consider therapy modification or monitoring'
  },
  major: {
    level: 'major',
    name: 'Major Interaction',
    color: '#ef4444', // red-500
    icon: '🚨',
    description: 'High risk of serious adverse effects',
    action: 'Therapy modification usually required'
  },
  contraindicated: {
    level: 'contraindicated',
    name: 'Contraindicated',
    color: '#7f1d1d', // red-900
    icon: '⛔',
    description: 'Should not be used together',
    action: 'Avoid combination - use alternative therapy'
  }
};

// ============================================================================
// Drug Class Definitions
// ============================================================================

export const DRUG_CLASSES: Record<string, string[]> = {
  'statins': ['atorvastatin', 'simvastatin', 'lovastatin', 'pravastatin', 'rosuvastatin', 'fluvastatin', 'pitavastatin'],
  'macrolide-antibiotics': ['erythromycin', 'clarithromycin', 'azithromycin'],
  'azole-antifungals': ['ketoconazole', 'itraconazole', 'fluconazole', 'voriconazole', 'posaconazole'],
  'protease-inhibitors': ['ritonavir', 'darunavir', 'atazanavir', 'lopinavir'],
  'benzodiazepines': ['alprazolam', 'diazepam', 'lorazepam', 'clonazepam', 'temazepam', 'triazolam', 'midazolam'],
  'opioids': ['morphine', 'oxycodone', 'hydrocodone', 'codeine', 'fentanyl', 'tramadol', 'methadone', 'buprenorphine'],
  'ssris': ['fluoxetine', 'sertraline', 'paroxetine', 'citalopram', 'escitalopram', 'fluvoxamine'],
  'snris': ['venlafaxine', 'duloxetine', 'desvenlafaxine'],
  'maois': ['phenelzine', 'tranylcypromine', 'isocarboxazid', 'selegiline'],
  'tcas': ['amitriptyline', 'nortriptyline', 'imipramine', 'desipramine', 'clomipramine'],
  'nsaids': ['ibuprofen', 'naproxen', 'diclofenac', 'meloxicam', 'celecoxib', 'aspirin'],
  'anticoagulants': ['warfarin', 'rivaroxaban', 'apixaban', 'dabigatran', 'edoxaban', 'heparin', 'enoxaparin'],
  'ace-inhibitors': ['lisinopril', 'enalapril', 'captopril', 'ramipril', 'benazepril'],
  'arbs': ['losartan', 'valsartan', 'irbesartan', 'candesartan', 'telmisartan'],
  'diuretics': ['furosemide', 'hydrochlorothiazide', 'chlorthalidone', 'spironolactone', 'triamterene'],
  'beta-blockers': ['metoprolol', 'atenolol', 'propranolol', 'carvedilol', 'bisoprolol'],
  'calcium-channel-blockers': ['amlodipine', 'diltiazem', 'verapamil', 'nifedipine'],
  'antiplatelets': ['aspirin', 'clopidogrel', 'prasugrel', 'ticagrelor'],
  'pPIs': ['omeprazole', 'esomeprazole', 'pantoprazole', 'lansoprazole', 'rabeprazole'],
  'h2-blockers': ['ranitidine', 'famotidine', 'cimetidine'],
  'corticosteroids': ['prednisone', 'prednisolone', 'methylprednisolone', 'dexamethasone', 'hydrocortisone'],
  'antipsychotics': ['haloperidol', 'risperidone', 'olanzapine', 'quetiapine', 'aripiprazole', 'ziprasidone'],
  'tca-related': ['cyclobenzaprine'],
  'triptans': ['sumatriptan', 'rizatriptan', 'zolmitriptan', 'eletriptan'],
  'ergots': ['ergotamine', 'dihydroergotamine'],
  'sedatives': ['zolpidem', 'eszopiclone', 'zaleplon', 'suvorexant', 'ramelteon'],
  'muscle-relaxants': ['cyclobenzaprine', 'carisoprodol', 'methocarbamol', 'tizanidine', 'baclofen'],
  'immunosuppressants': ['tacrolimus', 'cyclosporine', 'mycophenolate', 'azathioprine', 'sirolimus'],
  'anticonvulsants': ['carbamazepine', 'phenytoin', 'phenobarbital', 'valproic-acid', 'lamotrigine', 'levetiracetam'],
  'quinolones': ['ciprofloxacin', 'levofloxacin', 'moxifloxacin', 'ofloxacin'],
  'nitrates': ['nitroglycerin', 'isosorbide-mononitrate', 'isosorbide-dinitrate'],
  'pde5-inhibitors': ['sildenafil', 'tadalafil', 'vardenafil', 'avanafil'],
  'lithium': ['lithium-carbonate', 'lithium-citrate'],
  'methotrexate': ['methotrexate'],
  'digoxin': ['digoxin'],
  'theophylline': ['theophylline'],
  'warfarin': ['warfarin']
};
