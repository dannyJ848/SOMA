/**
 * Treatment Algorithms Module
 *
 * Re-exports all treatment algorithm types, data, and utilities.
 */

// Types
export type {
  TreatmentStep,
  MedicationOption,
  TreatmentTarget,
  MonitoringRequirement,
  StepCriteria,
  SpecialPopulation,
  TreatmentLevelContent,
  TreatmentAlgorithm,
  VaccinationEntry,
  VaccinationSchedule,
  AntibioticSelection,
  AntibioticGuide,
} from './types';

// Existing condition-specific algorithms
export { hypertensionAlgorithm } from './hypertension';
export { diabetesAlgorithm } from './diabetes';
export { heartFailureAlgorithm } from './heart-failure';
export { copdAlgorithm } from './copd';
export { asthmaAlgorithm } from './asthma';
export { depressionAnxietyAlgorithm } from './depression-anxiety';

// Algorithm database — clinical decision algorithms
export type { AlgorithmEntry, AlgorithmStep } from './algorithm-database';
export {
  ALGORITHM_ENTRIES,
  getAlgorithm,
  searchAlgorithms,
  getAlgorithmsByCategory,
  getAlgorithmCount,
} from './algorithm-database';
