/**
 * Anatomy Main Screen Hooks
 */

export { useRegionalEncyclopedia } from './useRegionalEncyclopedia';
export type {
  AnatomicalStructure,
  AnatomicalLayer,
  HistologyTabContent,
  RegionalEncyclopediaData,
  UseRegionalEncyclopediaResult,
} from './useRegionalEncyclopedia';

export { usePatientDataForRegion } from './usePatientDataForRegion';
export type { PatientRegionData } from './usePatientDataForRegion';

export { useMedicationPharmacology } from './useMedicationPharmacology';
export type {
  EnrichedMedicationTarget,
  EnrichedMedicationData,
  SideEffectExplanationSummary,
  InteractionSummary,
  PKSummary,
} from './useMedicationPharmacology';

export { useConditionHighlightsBridge } from './useConditionHighlightsBridge';
export type {
  BridgeableCondition,
  ConditionHighlightsBridgeResult,
} from './useConditionHighlightsBridge';
