/**
 * Medication Content Types
 *
 * Specialized types for pharmaceutical drug content with 5 complexity levels:
 * - Level 1: Patient-friendly (8th grade reading level)
 * - Level 2: High school health class level
 * - Level 3: Pre-pharmacy/nursing student level
 * - Level 4: Pharmacy/medical student level
 * - Level 5: Pharmacist/physician clinical practice level
 */

import { ComplexityLevel, Citation, CrossReference, ContentTags } from '../types';

/**
 * Drug class categories
 */
export type DrugClass =
  | 'statin'
  | 'ace-inhibitor'
  | 'arb'
  | 'beta-blocker'
  | 'calcium-channel-blocker'
  | 'thiazide-diuretic'
  | 'loop-diuretic'
  | 'potassium-sparing-diuretic'
  | 'antiplatelet'
  | 'anticoagulant'
  | 'biguanide'
  | 'sulfonylurea'
  | 'sglt2-inhibitor'
  | 'glp1-agonist'
  | 'dpp4-inhibitor'
  | 'insulin'
  | 'thiazolidinedione'
  | 'nsaid'
  | 'acetaminophen'
  | 'opioid'
  | 'muscle-relaxant'
  | 'gabapentinoid'
  | 'ssri'
  | 'snri'
  | 'tricyclic-antidepressant'
  | 'benzodiazepine'
  | 'antipsychotic'
  | 'mood-stabilizer'
  | 'stimulant'
  | 'penicillin'
  | 'cephalosporin'
  | 'fluoroquinolone'
  | 'macrolide'
  | 'tetracycline'
  | 'sulfonamide'
  | 'aminoglycoside'
  | 'antiviral'
  | 'antifungal'
  | 'beta2-agonist'
  | 'inhaled-corticosteroid'
  | 'laba'
  | 'lama'
  | 'leukotriene-modifier'
  | 'antihistamine'
  | 'decongestant'
  | 'ppi'
  | 'h2-blocker'
  | 'antiemetic'
  | 'laxative'
  | 'antidiarrheal'
  | 'thyroid-hormone'
  | 'antithyroid'
  | 'corticosteroid'
  | 'bisphosphonate'
  | 'vitamin-d'
  | 'other';

/**
 * Therapeutic categories for grouping medications
 */
export type TherapeuticCategory =
  | 'cardiovascular'
  | 'diabetes'
  | 'pain'
  | 'psychiatric'
  | 'antibiotics'
  | 'respiratory'
  | 'gastrointestinal'
  | 'endocrine'
  | 'neurologic'
  | 'dermatologic'
  | 'musculoskeletal'
  | 'genitourinary'
  | 'hematologic'
  | 'immunologic';

/**
 * Drug formulation types
 */
export type FormulationType =
  | 'tablet'
  | 'capsule'
  | 'solution'
  | 'suspension'
  | 'injection'
  | 'patch'
  | 'cream'
  | 'ointment'
  | 'inhaler'
  | 'nebulizer'
  | 'suppository'
  | 'sublingual'
  | 'ophthalmic'
  | 'otic'
  | 'nasal';

/**
 * Drug interaction severity levels
 */
export type InteractionSeverity = 'contraindicated' | 'major' | 'moderate' | 'minor';

/**
 * Black box warning information
 */
export interface BlackBoxWarning {
  warning: string;
  conditions?: string[];
  populations?: string[];
}

/**
 * Drug interaction entry
 */
export interface DrugInteraction {
  drug: string;
  severity: InteractionSeverity;
  mechanism: string;
  clinicalEffect: string;
  management: string;
}

/**
 * Dosing information
 */
export interface DosingInfo {
  indication: string;
  adultDose: string;
  pediatricDose?: string;
  geriatricConsiderations?: string;
  renalAdjustment?: string;
  hepaticAdjustment?: string;
  maxDose?: string;
}

/**
 * Pharmacokinetic parameters
 */
export interface Pharmacokinetics {
  absorption?: string;
  distribution?: string;
  metabolism?: string;
  elimination?: string;
  halfLife?: string;
  peakEffect?: string;
  durationOfAction?: string;
  proteinBinding?: string;
  bioavailability?: string;
}

/**
 * Monitoring parameters
 */
export interface MonitoringParameter {
  parameter: string;
  frequency: string;
  rationale: string;
  targetRange?: string;
}

/**
 * Patient counseling point
 */
export interface CounselingPoint {
  topic: string;
  instruction: string;
  importance: 'critical' | 'important' | 'helpful';
}

/**
 * Level-specific medication content
 */
export interface MedicationLevelContent {
  level: ComplexityLevel;

  /** Brief summary appropriate for the level */
  summary: string;

  /** What this medication does (mechanism) */
  howItWorks: string;

  /** What conditions it treats */
  usedFor: string;

  /** Important side effects to know */
  sideEffects: string;

  /** Key warnings and precautions */
  warnings: string;

  /** When/how to take it */
  howToTake: string;

  /** Drug interactions (level-appropriate detail) */
  interactions?: string;

  /** What to monitor (level-appropriate detail) */
  monitoring?: string;

  /** Clinical pearls (primarily levels 4-5) */
  clinicalPearls?: string;

  /** Key terms for this level */
  keyTerms?: { term: string; definition: string }[];
}

/**
 * Complete medication educational content
 */
export interface MedicationContent {
  /** Unique identifier */
  id: string;

  /** Generic name (primary identifier) */
  genericName: string;

  /** Brand name(s) */
  brandNames: string[];

  /** Drug class */
  drugClass: DrugClass;

  /** Therapeutic category */
  category: TherapeuticCategory;

  /** Available formulations */
  formulations: FormulationType[];

  /** DEA schedule if controlled */
  deaSchedule?: 'C-II' | 'C-III' | 'C-IV' | 'C-V';

  /** Pregnancy category/safety */
  pregnancyCategory?: string;

  /** Lactation safety */
  lactationSafety?: string;

  /** Black box warnings */
  blackBoxWarnings?: BlackBoxWarning[];

  /** Multi-level educational content */
  levels: {
    1: MedicationLevelContent;
    2: MedicationLevelContent;
    3: MedicationLevelContent;
    4: MedicationLevelContent;
    5: MedicationLevelContent;
  };

  /** Detailed pharmacokinetics (for reference) */
  pharmacokinetics?: Pharmacokinetics;

  /** Detailed dosing information */
  dosing?: DosingInfo[];

  /** Key drug interactions */
  interactions: DrugInteraction[];

  /** Monitoring parameters */
  monitoring: MonitoringParameter[];

  /** Patient counseling points */
  counselingPoints: CounselingPoint[];

  /** Cross-references to related content */
  crossReferences: CrossReference[];

  /** Content tags */
  tags: ContentTags;

  /** Citations/sources */
  citations: Citation[];

  /** Metadata */
  createdAt: string;
  updatedAt: string;
  version: number;
  status: 'draft' | 'review' | 'published';
}

/**
 * Drug class overview content
 */
export interface DrugClassContent {
  id: string;
  className: string;
  drugClass: DrugClass;
  category: TherapeuticCategory;

  /** Prototype drug for the class */
  prototypeDrug: string;

  /** Class mechanism of action */
  mechanismOfAction: string;

  /** Multi-level content */
  levels: {
    1: MedicationLevelContent;
    2: MedicationLevelContent;
    3: MedicationLevelContent;
    4: MedicationLevelContent;
    5: MedicationLevelContent;
  };

  /** Drugs in this class */
  drugsInClass: string[];

  /** Class-wide warnings */
  classWarnings: string[];

  /** Class-wide interactions */
  classInteractions: DrugInteraction[];

  crossReferences: CrossReference[];
  tags: ContentTags;
  citations: Citation[];

  createdAt: string;
  updatedAt: string;
  version: number;
  status: 'draft' | 'review' | 'published';
}
