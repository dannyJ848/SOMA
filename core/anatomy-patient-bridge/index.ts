/**
 * Anatomy-Patient Bridge
 *
 * This module provides a bridge between patient data (BiologicalSelf) and
 * anatomical regions, enabling visualization of conditions, symptoms,
 * medications, and lab results on anatomical models.
 *
 * @example
 * ```typescript
 * import {
 *   createBridge,
 *   getAffectedRegions,
 *   getMappingsForRegion,
 *   getBridgeSummary,
 * } from './core/anatomy-patient-bridge';
 *
 * // Create a bridge from patient data
 * const bridge = createBridge(patientData);
 *
 * // Get all affected regions
 * const regions = getAffectedRegions(bridge);
 *
 * // Get mappings for a specific region
 * const heartMappings = getMappingsForRegion(bridge, 'cardiovascular.heart');
 *
 * // Get summary statistics
 * const summary = getBridgeSummary(bridge);
 * ```
 */

// ============================================================================
// Type Exports
// ============================================================================

export type {
  // Core bridge types
  AnatomyPatientBridge,
  PatientConditionMapping,
  PatientSymptomMapping,
  PatientMedicationMapping,
  AbnormalLabMapping,

  // Effect and visualization types
  AnatomicalEffectType,
  VisualizationType,

  // Mapping definition types
  ICDRegionMapping,
  BodyLocationRegionMapping,
  LabOrganMapping,
  MedicationTargetMapping,

  // System and summary types
  AnatomicalSystem,
  BridgeSummary,
  RegionImpactSummary,
  SystemImpactSummary,
} from './types';

// ============================================================================
// Bridge Functions
// ============================================================================

export {
  // Main bridge creation
  createBridge,

  // Individual mapping functions
  mapConditionsToRegions,
  mapSymptomsToRegions,
  mapMedicationsToTargets,
  mapLabsToOrgans,

  // Bridge utilities
  getAffectedRegions,
  getMappingsForRegion,
  getBridgeSummary,
  filterBridgeBySystem,
  mergeBridges,
} from './bridge';

// ============================================================================
// Utility Functions
// ============================================================================

export {
  // Region lookup functions
  getRegionForICD,
  getRegionForBodyLocation,
  getOrganForLabTest,
  getTargetsForMedication,

  // Laterality and visualization helpers
  extractLaterality,
  selectVisualizationType,

  // Region parsing helpers
  getSystemForRegion,
  parseRegionId,
  buildRegionId,

  // Mapping data (for extension/customization)
  ICD_REGION_MAPPINGS,
  BODY_LOCATION_MAPPINGS,
  LAB_ORGAN_MAPPINGS,
  MEDICATION_TARGET_MAPPINGS,
} from './utils';

// ============================================================================
// Lab-to-Organ Mappings (Extended)
// ============================================================================

export {
  type LabOrganMapping as ExtendedLabOrganMapping,
  LAB_ORGAN_MAP,
  getLabMapping,
  getLabsForOrgan,
  getLabsForRegion,
  getRelatedLabs,
  getAllMappedOrgans,
  type LabOrganMapStats,
  getLabOrganMapStats,
} from './lab-organ-map';

// ============================================================================
// Medication-to-Target Mappings (Extended)
// ============================================================================

export {
  type MedicationTargetMapping as ExtendedMedicationTargetMapping,
  MEDICATION_TARGET_MAP,
  getMedicationMapping,
  getMedicationsForOrgan,
  getMedicationsByClass,
  getMedicationsForRegion,
  getAllDrugClasses,
  getAllTargetOrgans,
  type MedicationTargetMapStats,
  getMedicationTargetMapStats,
} from './medication-target-map';

// ============================================================================
// Condition-to-Anatomy Mappings
// ============================================================================

export {
  // Types
  type AnatomicalEffectType as ConditionEffectType,
  type VisualizationType as ConditionVisualizationType,
  type BodySystem,
  type ConditionAnatomyMapping,

  // Main data
  CONDITION_ANATOMY_MAP,
  TOTAL_CONDITIONS,

  // Helper functions
  getConditionsBySystem,
  getConditionsByRegion,
  getConditionById,
  getConditionByIcdCode,
  getConditionsRequiringLaterality,
  getConditionsByEffectType,
  searchConditions,
  getConditionMapStatistics,
} from './condition-anatomy-map';
