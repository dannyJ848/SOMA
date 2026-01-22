/**
 * Medication Physiology Type Definitions
 *
 * Comprehensive data model for medication mechanisms, body system effects,
 * therapeutic targets, and adverse effects with 3D anatomy mapping.
 */

// ============================================
// Core Types
// ============================================

/**
 * Drug classification categories
 */
export type DrugClass =
  | 'antihypertensive'
  | 'antiplatelet'
  | 'anticoagulant'
  | 'statin'
  | 'beta-blocker'
  | 'ace-inhibitor'
  | 'arb'
  | 'calcium-channel-blocker'
  | 'diuretic'
  | 'antidiabetic'
  | 'biguanide'
  | 'sulfonylurea'
  | 'glp1-agonist'
  | 'insulin'
  | 'sglt2-inhibitor'
  | 'nsaid'
  | 'analgesic'
  | 'opioid'
  | 'bronchodilator'
  | 'corticosteroid'
  | 'antihistamine'
  | 'ppi'
  | 'h2-blocker'
  | 'antibiotic'
  | 'antiviral'
  | 'antifungal'
  | 'antidepressant'
  | 'anxiolytic'
  | 'antipsychotic'
  | 'anticonvulsant'
  | 'thyroid'
  | 'vitamin'
  | 'mineral'
  | 'other';

/**
 * Effect classification
 */
export type EffectType = 'therapeutic' | 'adverse' | 'neutral';

/**
 * Effect intensity
 */
export type EffectIntensity = 'strong' | 'moderate' | 'mild';

/**
 * Adverse effect severity
 */
export type AdverseEffectSeverity = 'mild' | 'moderate' | 'severe' | 'life-threatening';

/**
 * Adverse effect frequency
 */
export type AdverseEffectFrequency =
  | 'very-common'    // >10%
  | 'common'         // 1-10%
  | 'uncommon'       // 0.1-1%
  | 'rare'           // 0.01-0.1%
  | 'very-rare';     // <0.01%

/**
 * Pharmacokinetic phase
 */
export type PKPhase = 'absorption' | 'distribution' | 'metabolism' | 'excretion';

/**
 * Drug interaction severity
 */
export type InteractionSeverity = 'contraindicated' | 'major' | 'moderate' | 'minor';

/**
 * Interaction mechanism type
 */
export type InteractionMechanism =
  | 'pharmacokinetic'
  | 'pharmacodynamic'
  | 'additive'
  | 'synergistic'
  | 'antagonistic';

// ============================================
// Body System Effect
// ============================================

/**
 * Effect on a specific body system
 */
export interface BodySystemEffect {
  /** Body system identifier */
  systemId: string;

  /** Display name of the system */
  systemName: string;

  /** Type of effect: therapeutic, adverse, or neutral */
  effectType: EffectType;

  /** Intensity of the effect */
  intensity: EffectIntensity;

  /** Description of the mechanism */
  mechanism: string;

  /** Color for 3D visualization highlighting */
  highlightColor: string;

  /** Anatomical structures involved */
  affectedStructures?: string[];

  /** Time to onset of effect */
  onsetTime?: string;

  /** Duration of effect */
  duration?: string;
}

// ============================================
// Therapeutic Target
// ============================================

/**
 * Therapeutic target of a medication
 */
export interface TherapeuticTarget {
  /** Target identifier */
  targetId: string;

  /** Target name (e.g., receptor, enzyme, channel) */
  targetName: string;

  /** Target type */
  targetType: 'receptor' | 'enzyme' | 'channel' | 'transporter' | 'protein' | 'pathway' | 'other';

  /** Structure IDs for 3D anatomy mapping */
  structureIds: string[];

  /** Mechanism of action on this target */
  mechanism: string;

  /** Effect when target is engaged */
  effect: string;

  /** Physiological pathway affected */
  pathway?: string;

  /** Color for 3D highlighting */
  highlightColor: string;
}

// ============================================
// Adverse Effect
// ============================================

/**
 * Adverse effect of a medication
 */
export interface AdverseEffect {
  /** Effect identifier */
  effectId: string;

  /** Effect name */
  effectName: string;

  /** Severity classification */
  severity: AdverseEffectSeverity;

  /** Frequency of occurrence */
  frequency: AdverseEffectFrequency;

  /** Anatomical structures affected */
  affectedStructures: string[];

  /** Mechanism of adverse effect */
  mechanism: string;

  /** Management/mitigation strategies */
  management?: string;

  /** When to seek medical attention */
  seekCareIf?: string;

  /** Is this a black box warning? */
  blackBoxWarning?: boolean;

  /** Color for 3D highlighting */
  highlightColor: string;

  /** Related symptoms */
  symptoms?: string[];
}

// ============================================
// Mechanism of Action
// ============================================

/**
 * Detailed mechanism of action
 */
export interface MechanismOfAction {
  /** Primary mechanism category */
  primaryMechanism: string;

  /** Molecular target (if applicable) */
  molecularTarget?: string;

  /** Receptor type (if applicable) */
  receptorType?: string;

  /** Downstream effects */
  downstreamEffects: string[];

  /** Time to therapeutic effect */
  timeToEffect?: string;

  /** Duration of action */
  durationOfAction?: string;

  /** Receptor binding (agonist, antagonist, etc.) */
  bindingType?: 'agonist' | 'antagonist' | 'partial-agonist' | 'inverse-agonist' | 'allosteric' | 'inhibitor' | 'inducer';
}

// ============================================
// Pharmacokinetics
// ============================================

/**
 * Pharmacokinetic properties
 */
export interface Pharmacokinetics {
  /** Absorption characteristics */
  absorption?: {
    route: string;
    bioavailability?: string;
    tmax?: string;
    foodEffect?: string;
  };

  /** Distribution characteristics */
  distribution?: {
    volumeOfDistribution?: string;
    proteinBinding?: string;
    crossesBBB?: boolean;
    crossesPlacenta?: boolean;
  };

  /** Metabolism characteristics */
  metabolism?: {
    primarySite: string;
    cyp450Enzymes?: string[];
    activeMetabolites?: string[];
    firstPassEffect?: boolean;
  };

  /** Excretion characteristics */
  excretion?: {
    primaryRoute: string;
    halfLife?: string;
    renalElimination?: string;
  };
}

// ============================================
// Multi-Level Explanation
// ============================================

/**
 * Multi-level educational explanations
 */
export interface MultiLevelExplanation {
  /** Level 1: Very basic, patient-friendly */
  level1: string;

  /** Level 2: Basic understanding */
  level2: string;

  /** Level 3: General medical knowledge */
  level3: string;

  /** Level 4: Healthcare professional */
  level4: string;

  /** Level 5: Expert/specialist level */
  level5: string;
}

// ============================================
// Drug Interaction
// ============================================

/**
 * Drug-drug interaction
 */
export interface DrugInteraction {
  /** Interaction identifier */
  interactionId: string;

  /** Interacting drug ID */
  interactingDrugId: string;

  /** Interacting drug name */
  interactingDrugName: string;

  /** Severity of interaction */
  severity: InteractionSeverity;

  /** Mechanism type */
  mechanismType: InteractionMechanism;

  /** Description of interaction */
  description: string;

  /** Clinical effect */
  clinicalEffect: string;

  /** Management recommendation */
  management: string;

  /** Evidence level */
  evidenceLevel?: 'established' | 'probable' | 'suspected' | 'theoretical';

  /** Affected body systems */
  affectedSystems?: string[];

  /** Monitoring parameters */
  monitoring?: string[];
}

// ============================================
// Contraindication
// ============================================

/**
 * Contraindication
 */
export interface Contraindication {
  /** Contraindication identifier */
  contraindicationId: string;

  /** Condition or scenario */
  condition: string;

  /** Type: absolute or relative */
  type: 'absolute' | 'relative';

  /** Reason for contraindication */
  reason: string;

  /** Alternative recommendations */
  alternatives?: string[];
}

// ============================================
// Dosing Information
// ============================================

/**
 * Dosing information
 */
export interface DosingInfo {
  /** Standard adult dose */
  standardDose?: string;

  /** Dose range */
  doseRange?: string;

  /** Frequency */
  frequency?: string;

  /** Route of administration */
  route: string;

  /** Maximum daily dose */
  maxDailyDose?: string;

  /** Renal dose adjustment */
  renalAdjustment?: string;

  /** Hepatic dose adjustment */
  hepaticAdjustment?: string;

  /** Geriatric considerations */
  geriatricConsiderations?: string;

  /** Pediatric dosing */
  pediatricDosing?: string;
}

// ============================================
// Main Medication Physiology Interface
// ============================================

/**
 * Complete medication physiology data
 */
export interface MedicationPhysiology {
  /** Unique medication identifier */
  medicationId: string;

  /** Brand name(s) */
  brandNames: string[];

  /** Generic name */
  genericName: string;

  /** Drug class */
  drugClass: DrugClass;

  /** Drug subclass (more specific) */
  drugSubclass?: string;

  /** Brief description */
  description: string;

  /** Primary indications */
  indications: string[];

  /** Mechanism of action */
  mechanism: MechanismOfAction;

  /** Therapeutic targets */
  therapeuticTargets: TherapeuticTarget[];

  /** Body system effects */
  affectedSystems: BodySystemEffect[];

  /** Adverse effects */
  adverseEffects: AdverseEffect[];

  /** Pharmacokinetic properties */
  pharmacokinetics?: Pharmacokinetics;

  /** Known drug interactions */
  interactions?: DrugInteraction[];

  /** Contraindications */
  contraindications?: Contraindication[];

  /** Dosing information */
  dosing?: DosingInfo;

  /** Multi-level educational explanations */
  explanations: MultiLevelExplanation;

  /** 3D anatomy navigation settings */
  anatomySettings: {
    /** Recommended camera view */
    recommendedView: 'anterior' | 'posterior' | 'left' | 'right' | 'superior' | 'inferior';

    /** Layers to enable for visualization */
    recommendedLayers: string[];

    /** Primary focus region */
    focusRegion?: string;
  };

  /** Monitoring parameters */
  monitoring?: {
    /** Lab tests to monitor */
    labTests?: string[];

    /** Vital signs to monitor */
    vitalSigns?: string[];

    /** Symptoms to watch for */
    symptoms?: string[];

    /** Monitoring frequency */
    frequency?: string;
  };

  /** Patient education points */
  patientEducation?: string[];

  /** Clinical pearls */
  clinicalPearls?: string[];

  /** References */
  references?: string[];
}

// ============================================
// Medication Summary (for lists)
// ============================================

/**
 * Abbreviated medication info for lists
 */
export interface MedicationSummary {
  medicationId: string;
  brandNames: string[];
  genericName: string;
  drugClass: DrugClass;
  primaryIndication: string;
  primaryMechanism: string;
}

// ============================================
// Search Result
// ============================================

/**
 * Medication search result
 */
export interface MedicationSearchResult {
  medicationId: string;
  genericName: string;
  brandNames: string[];
  matchType: 'exact' | 'brand' | 'generic' | 'class' | 'partial';
  relevanceScore: number;
}

// ============================================
// 3D Visualization Types
// ============================================

/**
 * Medication anatomy highlight for 3D view
 */
export interface MedicationAnatomyHighlight {
  structureId: string;
  structureName: string;
  highlightColor: string;
  effectType: EffectType;
  intensity: EffectIntensity;
  mechanism: string;
}

/**
 * Medication visualization context
 */
export interface MedicationVisualizationContext {
  medication: MedicationPhysiology;
  highlights: MedicationAnatomyHighlight[];
  viewSettings: {
    cameraPosition: string;
    visibleLayers: string[];
    focusRegion?: string;
  };
}

// ============================================
// Highlight Color Palette
// ============================================

/**
 * Standard colors for medication visualization
 */
export const MEDICATION_HIGHLIGHT_COLORS = {
  /** Therapeutic effect - green */
  therapeutic: {
    strong: '#22c55e',
    moderate: '#4ade80',
    mild: '#86efac',
  },
  /** Adverse effect - red */
  adverse: {
    'life-threatening': '#dc2626',
    severe: '#ef4444',
    moderate: '#f87171',
    mild: '#fca5a5',
  },
  /** Neutral - blue/gray */
  neutral: {
    strong: '#3b82f6',
    moderate: '#60a5fa',
    mild: '#93c5fd',
  },
  /** Interaction warning - orange */
  interaction: {
    contraindicated: '#dc2626',
    major: '#f97316',
    moderate: '#fb923c',
    minor: '#fdba74',
  },
} as const;
