/**
 * Condition Simulation Data Model
 *
 * Comprehensive types for medical condition simulation including
 * disease progression, anatomical changes, and treatment options.
 */

// ============================================
// Core Enums and Types
// ============================================

/**
 * Medical condition categories
 */
export type ConditionCategory =
  | 'cardiovascular'
  | 'metabolic'
  | 'respiratory'
  | 'musculoskeletal'
  | 'neurologic'
  | 'gastrointestinal'
  | 'dermatologic'
  | 'urologic'
  | 'hematologic'
  | 'immunologic'
  | 'endocrine'
  | 'psychiatric'
  | 'infectious'
  | 'oncologic';

/**
 * Disease progression phase type
 */
export type ProgressionPhase =
  | 'preclinical'
  | 'early'
  | 'established'
  | 'advanced'
  | 'severe'
  | 'end-stage'
  | 'remission'
  | 'chronic'
  | 'acute'
  | 'subacute';

/**
 * Reversibility of anatomical changes
 */
export type Reversibility = 'reversible' | 'partially-reversible' | 'irreversible';

/**
 * Treatment modality types
 */
export type TreatmentModality =
  | 'pharmacological'
  | 'surgical'
  | 'lifestyle'
  | 'interventional'
  | 'supportive'
  | 'rehabilitative'
  | 'preventive';

/**
 * Evidence level for treatments
 */
export type EvidenceLevel =
  | 'level-1a' // Systematic review of RCTs
  | 'level-1b' // Individual RCT
  | 'level-2a' // Systematic review of cohort studies
  | 'level-2b' // Individual cohort study
  | 'level-3'  // Case-control studies
  | 'level-4'  // Case series
  | 'level-5'  // Expert opinion
  | 'guideline-recommended';

/**
 * Treatment efficacy rating
 */
export type TreatmentEfficacy =
  | 'highly-effective'
  | 'effective'
  | 'moderately-effective'
  | 'limited-effectiveness'
  | 'variable';

/**
 * Complication severity
 */
export type ComplicationSeverity =
  | 'minor'
  | 'moderate'
  | 'major'
  | 'life-threatening';

/**
 * Effect type on anatomy
 */
export type AnatomicalEffectType =
  | 'inflammation'
  | 'fibrosis'
  | 'hypertrophy'
  | 'atrophy'
  | 'ischemia'
  | 'necrosis'
  | 'calcification'
  | 'edema'
  | 'stenosis'
  | 'dilation'
  | 'degeneration'
  | 'infiltration'
  | 'dysfunction'
  | 'structural-damage';

// ============================================
// Multi-Level Educational Content
// ============================================

/**
 * 5-level educational explanations
 * Same structure as used in medications for consistency
 */
export interface MultiLevelExplanation {
  /** Level 1: Very simple, patient-friendly */
  level1: string;
  /** Level 2: Simple with basic medical concepts */
  level2: string;
  /** Level 3: Intermediate, nursing/allied health level */
  level3: string;
  /** Level 4: Advanced, medical student level */
  level4: string;
  /** Level 5: Expert, physician level with pathophysiology details */
  level5: string;
}

// ============================================
// Pathophysiology
// ============================================

/**
 * Detailed pathophysiology of a condition
 */
export interface ConditionPathophysiology {
  /** Brief summary of pathophysiology */
  summary: string;

  /** Underlying mechanisms */
  mechanisms: PathophysiologyMechanism[];

  /** Key molecular/cellular processes */
  molecularProcesses?: string[];

  /** Risk factors for developing/progressing */
  riskFactors: RiskFactor[];

  /** Genetic factors if applicable */
  geneticFactors?: string[];

  /** Environmental factors */
  environmentalFactors?: string[];
}

/**
 * Individual pathophysiology mechanism
 */
export interface PathophysiologyMechanism {
  /** Mechanism name */
  name: string;

  /** Description of the mechanism */
  description: string;

  /** Body systems involved */
  systemsInvolved: string[];

  /** Key mediators (hormones, cytokines, etc.) */
  keyMediators?: string[];

  /** How this contributes to disease */
  contribution: string;
}

/**
 * Risk factor for condition
 */
export interface RiskFactor {
  /** Factor name */
  name: string;

  /** Factor type */
  type: 'modifiable' | 'non-modifiable' | 'partially-modifiable';

  /** Impact level */
  impact: 'major' | 'moderate' | 'minor';

  /** Description */
  description: string;

  /** If modifiable, how to address */
  intervention?: string;
}

// ============================================
// Clinical Presentation
// ============================================

/**
 * Clinical presentation of a condition
 */
export interface ClinicalPresentation {
  /** Primary symptoms */
  primarySymptoms: ClinicalSymptom[];

  /** Associated symptoms */
  associatedSymptoms?: ClinicalSymptom[];

  /** Physical exam findings */
  physicalFindings?: PhysicalFinding[];

  /** Typical lab abnormalities */
  labFindings?: LabFinding[];

  /** Imaging findings */
  imagingFindings?: ImagingFinding[];
}

/**
 * Clinical symptom
 */
export interface ClinicalSymptom {
  /** Symptom name */
  name: string;

  /** How common (percentage) */
  prevalence: 'very-common' | 'common' | 'uncommon' | 'rare';

  /** Typical description */
  description: string;

  /** Character/quality */
  quality?: string;

  /** Anatomical location */
  location?: string;

  /** When it typically appears in disease course */
  timing?: string;
}

/**
 * Physical examination finding
 */
export interface PhysicalFinding {
  /** Finding name */
  name: string;

  /** Type of exam */
  examType: string;

  /** Description */
  description: string;

  /** How sensitive/specific */
  diagnosticValue?: string;
}

/**
 * Laboratory finding
 */
export interface LabFinding {
  /** Test name */
  testName: string;

  /** Expected abnormality */
  abnormality: string;

  /** Normal range for reference */
  normalRange?: string;

  /** Significance */
  significance: string;
}

/**
 * Imaging finding
 */
export interface ImagingFinding {
  /** Imaging modality */
  modality: string;

  /** Finding description */
  finding: string;

  /** What it indicates */
  significance: string;

  /** Structures visible */
  structures?: string[];
}

// ============================================
// Disease Progression
// ============================================

/**
 * Disease progression timeline
 */
export interface DiseaseProgression {
  /** Natural history overview */
  naturalHistory: string;

  /** Average time from onset to diagnosis */
  typicalOnsetToDiagnosis?: string;

  /** Timeline steps/phases */
  timelineSteps: ProgressionStep[];

  /** Factors affecting progression */
  progressionFactors?: string[];

  /** Prognosis summary */
  prognosis: string;

  /** Mortality/morbidity notes */
  outcomes?: string;
}

/**
 * Individual progression step/phase
 */
export interface ProgressionStep {
  /** Phase identifier */
  phaseId: string;

  /** Phase name */
  phase: ProgressionPhase;

  /** Display name */
  displayName: string;

  /** Typical timeframe */
  timeframe: string;

  /** Duration in this phase */
  duration?: string;

  /** Description of this phase */
  description: string;

  /** Symptoms at this phase */
  symptoms: string[];

  /** Anatomical changes */
  anatomicalChanges: AnatomicalChange[];

  /** Functional impact */
  functionalImpact?: string;

  /** Lab markers at this phase */
  labMarkers?: string[];

  /** Reversibility at this phase */
  reversibility: Reversibility;

  /** Typical treatments for this phase */
  typicalTreatments?: string[];

  /** Goals of care at this phase */
  goalsOfCare?: string[];
}

/**
 * Anatomical change at a progression phase
 */
export interface AnatomicalChange {
  /** Structure affected */
  structureId: string;

  /** Structure name */
  structureName: string;

  /** Type of change */
  changeType: AnatomicalEffectType;

  /** Description of change */
  description: string;

  /** Severity at this phase */
  severity: 'mild' | 'moderate' | 'severe';

  /** Visual indicator for 3D */
  visualIndicator: {
    /** Color to use for highlighting */
    color: string;
    /** Whether to show pulsing animation */
    pulse: boolean;
    /** Opacity (0-1) */
    opacity: number;
  };

  /** Whether this is a new change vs. progression of existing */
  isNewAtPhase: boolean;
}

// ============================================
// Complications
// ============================================

/**
 * Disease complication
 */
export interface Complication {
  /** Complication identifier */
  complicationId: string;

  /** Complication name */
  name: string;

  /** Category */
  category: 'acute' | 'chronic' | 'both';

  /** Severity */
  severity: ComplicationSeverity;

  /** Risk level */
  riskLevel: 'high' | 'moderate' | 'low';

  /** Description */
  description: string;

  /** Pathophysiology of complication */
  mechanism: string;

  /** Structures affected */
  affectedStructures: AffectedStructure[];

  /** Warning signs/symptoms */
  warningSymptoms: string[];

  /** Prevention strategies */
  prevention?: string[];

  /** Treatment approach */
  treatment?: string;

  /** When it typically occurs */
  timing?: string;

  /** Is it preventable? */
  preventable: boolean;
}

/**
 * Structure affected by complication
 */
export interface AffectedStructure {
  /** Structure ID */
  structureId: string;

  /** Structure name */
  structureName: string;

  /** How it's affected */
  effect: string;

  /** Highlight color for 3D */
  highlightColor: string;
}

// ============================================
// Treatment Options
// ============================================

/**
 * Treatment option for a condition
 */
export interface TreatmentOption {
  /** Treatment identifier */
  treatmentId: string;

  /** Treatment name */
  name: string;

  /** Treatment modality */
  modality: TreatmentModality;

  /** Brief description */
  description: string;

  /** Mechanism of action */
  mechanism?: string;

  /** Efficacy rating */
  efficacy: TreatmentEfficacy;

  /** Evidence level */
  evidenceLevel: EvidenceLevel;

  /** First-line treatment? */
  isFirstLine: boolean;

  /** Which phases is it appropriate for */
  appropriatePhases: ProgressionPhase[];

  /** Goals of this treatment */
  goals: string[];

  /** Expected outcomes */
  expectedOutcomes?: string[];

  /** Time to effect */
  timeToEffect?: string;

  /** If pharmacological, link to medication */
  medicationIds?: string[];

  /** Contraindications */
  contraindications?: string[];

  /** Side effects/risks */
  sideEffects?: string[];

  /** Monitoring required */
  monitoring?: string[];

  /** Cost considerations */
  costLevel?: 'low' | 'moderate' | 'high' | 'very-high';

  /** Multi-level explanation */
  explanations: MultiLevelExplanation;
}

// ============================================
// Anatomy Mapping
// ============================================

/**
 * Mapping of condition to anatomical structures
 */
export interface ConditionAnatomyMapping {
  /** Primary structures involved */
  primaryStructures: StructureInvolvement[];

  /** Secondary/associated structures */
  secondaryStructures?: StructureInvolvement[];

  /** Body systems involved */
  systemsInvolved: string[];

  /** Recommended 3D view preset */
  recommendedView: ViewPreset;

  /** Recommended layers to enable */
  recommendedLayers: string[];

  /** Focus region */
  focusRegion?: string;
}

/**
 * Structure involvement details
 */
export interface StructureInvolvement {
  /** Structure ID for 3D navigation */
  structureId: string;

  /** Structure name */
  structureName: string;

  /** Role in the condition */
  role: 'primary-site' | 'secondary-site' | 'target-organ' | 'collateral' | 'compensatory';

  /** How it's involved */
  involvement: string;

  /** Default highlight color */
  highlightColor: string;

  /** Whether to show by default */
  showByDefault: boolean;
}

/**
 * View preset for 3D viewer
 */
export type ViewPreset =
  | 'anterior'
  | 'posterior'
  | 'lateral-left'
  | 'lateral-right'
  | 'superior'
  | 'inferior'
  | 'oblique-right'
  | 'oblique-left';

// ============================================
// Main Condition Type
// ============================================

/**
 * Complete condition simulation data
 */
export interface ConditionSimulation {
  /** Unique condition identifier */
  conditionId: string;

  /** Condition name */
  name: string;

  /** Condition name in Spanish */
  nameEs?: string;

  /** Alternative names */
  aliases?: string[];

  /** ICD-10 code */
  icdCode: string;

  /** Category */
  category: ConditionCategory;

  /** Subcategory */
  subcategory?: string;

  /** Brief description */
  description: string;

  /** Pathophysiology details */
  pathophysiology: ConditionPathophysiology;

  /** Clinical presentation */
  clinicalPresentation: ClinicalPresentation;

  /** Disease progression */
  progression: DiseaseProgression;

  /** Possible complications */
  complications: Complication[];

  /** Treatment options */
  treatmentOptions: TreatmentOption[];

  /** Anatomy mapping */
  anatomyMapping: ConditionAnatomyMapping;

  /** Multi-level educational content */
  explanations: MultiLevelExplanation;

  /** Related conditions */
  relatedConditions?: string[];

  /** Common comorbidities */
  comorbidities?: string[];

  /** Prevalence/epidemiology */
  epidemiology?: {
    prevalence?: string;
    incidence?: string;
    demographics?: string;
  };

  /** Key clinical pearls */
  clinicalPearls?: string[];

  /** Patient education points */
  patientEducation?: string[];

  /** When to seek emergency care */
  emergencyWarnings?: string[];
}

// ============================================
// Summary Types for Lists/Search
// ============================================

/**
 * Summary for condition list display
 */
export interface ConditionSummary {
  conditionId: string;
  name: string;
  category: ConditionCategory;
  icdCode: string;
  description: string;
  primarySymptoms: string[];
  numberOfPhases: number;
  numberOfTreatments: number;
}

/**
 * Search result
 */
export interface ConditionSearchResult {
  conditionId: string;
  name: string;
  aliases?: string[];
  category: ConditionCategory;
  matchType: 'exact' | 'alias' | 'category' | 'symptom' | 'partial';
  relevanceScore: number;
}

// ============================================
// Highlight Colors Palette
// ============================================

/**
 * Color palette for condition visualization
 */
export const CONDITION_HIGHLIGHT_COLORS = {
  // Primary disease site
  primarySite: '#dc2626',     // Red

  // Secondary involvement
  secondarySite: '#f97316',   // Orange

  // Target organs
  targetOrgan: '#eab308',     // Yellow

  // Collateral effects
  collateralDamage: '#f59e0b', // Amber

  // Compensatory changes
  compensatory: '#3b82f6',    // Blue

  // Inflammation
  inflammation: '#ef4444',    // Red-500

  // Fibrosis/scarring
  fibrosis: '#78716c',        // Stone

  // Ischemia
  ischemia: '#7c3aed',        // Violet

  // Edema
  edema: '#06b6d4',           // Cyan

  // Degeneration
  degeneration: '#71717a',    // Zinc

  // Healing/recovery
  healing: '#22c55e',         // Green

  // Phases (for timeline)
  phasePreclinical: '#94a3b8',  // Slate
  phaseEarly: '#fbbf24',        // Amber
  phaseEstablished: '#f97316',  // Orange
  phaseAdvanced: '#ef4444',     // Red
  phaseSevere: '#dc2626',       // Red-600
  phaseEndStage: '#7f1d1d',     // Red-900
} as const;

export type ConditionHighlightColor = keyof typeof CONDITION_HIGHLIGHT_COLORS;
