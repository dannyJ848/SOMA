/**
 * Anatomy-Patient Bridge - Type Definitions
 *
 * Types for mapping patient data (conditions, symptoms, medications, labs)
 * to anatomical regions for visualization and educational purposes.
 */

// ============================================================================
// Core Bridge Interface
// ============================================================================

/**
 * The main bridge interface that connects patient data to anatomical regions
 */
export interface AnatomyPatientBridge {
  /** Conditions mapped to their affected anatomical regions */
  conditionsByRegion: Map<string, PatientConditionMapping[]>;

  /** Symptoms mapped to their affected anatomical regions */
  symptomsByRegion: Map<string, PatientSymptomMapping[]>;

  /** Medications mapped to their target organs/systems */
  medicationTargets: Map<string, PatientMedicationMapping[]>;

  /** Abnormal lab results mapped to related organs */
  labsByOrgan: Map<string, AbnormalLabMapping[]>;
}

// ============================================================================
// Condition Mapping
// ============================================================================

/**
 * Maps a patient condition to an anatomical region
 */
export interface PatientConditionMapping {
  /** Unique identifier for the condition */
  conditionId: string;

  /** Human-readable condition name */
  conditionName: string;

  /** The anatomical region ID this condition affects */
  regionId: string;

  /** For paired structures, which side is affected */
  laterality?: 'left' | 'right' | 'bilateral';

  /** Specific structures within the region that are affected */
  structures?: string[];

  /** The type of anatomical effect this condition causes */
  effectType?: AnatomicalEffectType;

  /** Clinical severity of the condition */
  severity?: 'mild' | 'moderate' | 'severe';

  /** How this condition should be visualized on the anatomy model */
  visualizationType: VisualizationType;
}

// ============================================================================
// Symptom Mapping
// ============================================================================

/**
 * Maps a patient symptom to an anatomical region
 */
export interface PatientSymptomMapping {
  /** Unique identifier for the symptom */
  symptomId: string;

  /** Description of the symptom */
  description: string;

  /** The anatomical region ID where this symptom is felt */
  regionId: string;

  /** Original body location from the symptom (hierarchical path) */
  bodyLocation: string;

  /** Severity on 1-10 scale */
  severity: number;

  /** Current status of the symptom */
  status: 'active' | 'resolved' | 'recurring';

  /** For paired structures, which side is affected */
  laterality?: 'left' | 'right' | 'bilateral';

  /** How this symptom should be visualized on the anatomy model */
  visualizationType: VisualizationType;
}

// ============================================================================
// Medication Mapping
// ============================================================================

/**
 * Maps a medication to its target organs/systems
 */
export interface PatientMedicationMapping {
  /** Unique identifier for the medication */
  medicationId: string;

  /** Medication name (brand or generic) */
  medicationName: string;

  /** Target anatomical region ID */
  regionId: string;

  /** Whether this is a primary or secondary target */
  targetType: 'primary' | 'secondary' | 'side-effect';

  /** The mechanism of action at this target */
  mechanism?: string;

  /** Current medication status */
  status: 'current' | 'past' | 'as-needed';

  /** How this medication target should be visualized */
  visualizationType: VisualizationType;
}

// ============================================================================
// Lab Result Mapping
// ============================================================================

/**
 * Maps an abnormal lab result to its related organ
 */
export interface AbnormalLabMapping {
  /** Unique identifier for the lab result */
  labResultId: string;

  /** Name of the lab test */
  testName: string;

  /** The anatomical region/organ ID this lab reflects */
  regionId: string;

  /** The value of the lab result */
  value: number | string;

  /** Unit of measurement */
  unit?: string;

  /** How the result relates to normal range */
  status: 'normal' | 'abnormal-low' | 'abnormal-high' | 'critical';

  /** Clinical significance of this result */
  clinicalSignificance?: string;

  /** How this lab abnormality should be visualized */
  visualizationType: VisualizationType;
}

// ============================================================================
// Effect and Visualization Types
// ============================================================================

/**
 * Types of anatomical effects that conditions can cause
 */
export type AnatomicalEffectType =
  | 'fracture'       // Bone breaks
  | 'inflammation'   // Swelling, redness, heat
  | 'infection'      // Bacterial, viral, fungal invasion
  | 'tumor'          // Neoplastic growth
  | 'atrophy'        // Wasting, shrinkage
  | 'hypertrophy'    // Enlargement
  | 'ischemia'       // Reduced blood flow
  | 'necrosis'       // Cell/tissue death
  | 'degeneration'   // Progressive deterioration
  | 'fibrosis'       // Scarring, collagen buildup
  | 'edema'          // Fluid accumulation
  | 'hemorrhage';    // Bleeding

/**
 * Types of visualization for displaying patient data on anatomy models
 */
export type VisualizationType =
  | 'highlight'      // Simple color highlight
  | 'pulse'          // Pulsing animation
  | 'badge'          // Small indicator badge
  | 'heatmap'        // Color gradient based on severity
  | 'overlay'        // Semi-transparent overlay
  | 'particle';      // Particle effects

// ============================================================================
// Region Mapping Types
// ============================================================================

/**
 * Definition for mapping ICD codes to anatomical regions
 */
export interface ICDRegionMapping {
  /** ICD-10 code prefix (e.g., "I21" for acute MI) */
  icdPrefix: string;

  /** Primary anatomical region affected */
  primaryRegion: string;

  /** Secondary regions that may be affected */
  secondaryRegions?: string[];

  /** Default effect type for this condition category */
  defaultEffectType?: AnatomicalEffectType;

  /** Default visualization type */
  defaultVisualization?: VisualizationType;
}

/**
 * Definition for mapping body location paths to anatomical regions
 */
export interface BodyLocationRegionMapping {
  /** Hierarchical body location path (e.g., "body.torso.chest.heart") */
  locationPath: string;

  /** Corresponding anatomical region ID */
  regionId: string;

  /** Body system this location belongs to */
  system?: AnatomicalSystem;
}

/**
 * Definition for mapping lab tests to organs
 */
export interface LabOrganMapping {
  /** LOINC code for the lab test */
  loincCode?: string;

  /** Common test name */
  testName: string;

  /** Primary organ this lab reflects */
  primaryOrgan: string;

  /** Secondary organs that may be affected */
  secondaryOrgans?: string[];

  /** Default visualization for abnormal results */
  defaultVisualization?: VisualizationType;
}

/**
 * Definition for mapping medications to target organs
 */
export interface MedicationTargetMapping {
  /** RxNorm code for the medication */
  rxNormCode?: string;

  /** Drug class */
  drugClass: string;

  /** Primary target organs/systems */
  primaryTargets: string[];

  /** Secondary targets (including side effect sites) */
  secondaryTargets?: string[];

  /** General mechanism of action */
  mechanism?: string;
}

// ============================================================================
// Anatomical System Types
// ============================================================================

/**
 * Major anatomical systems for categorization
 */
export type AnatomicalSystem =
  | 'cardiovascular'
  | 'respiratory'
  | 'digestive'
  | 'nervous'
  | 'musculoskeletal'
  | 'endocrine'
  | 'urinary'
  | 'reproductive'
  | 'integumentary'
  | 'lymphatic'
  | 'immune';

// ============================================================================
// Bridge Summary Types
// ============================================================================

/**
 * Summary statistics for a bridge instance
 */
export interface BridgeSummary {
  /** Total number of conditions mapped */
  conditionCount: number;

  /** Total number of symptoms mapped */
  symptomCount: number;

  /** Total number of medications mapped */
  medicationCount: number;

  /** Total number of abnormal labs mapped */
  abnormalLabCount: number;

  /** Regions with the most mappings */
  mostAffectedRegions: RegionImpactSummary[];

  /** Systems with the most mappings */
  mostAffectedSystems: SystemImpactSummary[];
}

/**
 * Summary of impact on a specific region
 */
export interface RegionImpactSummary {
  /** Region identifier */
  regionId: string;

  /** Human-readable region name */
  regionName: string;

  /** Total number of mappings to this region */
  totalMappings: number;

  /** Breakdown by mapping type */
  conditionCount: number;
  symptomCount: number;
  medicationCount: number;
  labCount: number;
}

/**
 * Summary of impact on a body system
 */
export interface SystemImpactSummary {
  /** System identifier */
  system: AnatomicalSystem;

  /** Total number of mappings to this system */
  totalMappings: number;

  /** Most affected regions within this system */
  topRegions: string[];
}
