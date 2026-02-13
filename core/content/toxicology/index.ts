/**
 * Toxicology Content Module
 *
 * Re-exports all toxicology content including the toxicology database,
 * educational content, and associated utility functions.
 */

// Toxicology database
export {
  TOXICOLOGY_ENTRIES,
  searchToxicologyEntries,
  filterByCategory,
  getEntryById,
} from './toxicology-database';

export type {
  ToxicologyDatabaseCategory,
  ToxicologyEntry,
} from './toxicology-database';

// Existing toxicology types
export {
  POISON_CONTROL_NUMBER,
  TOXICOLOGY_CONTACTS,
} from './types';

export type {
  ToxicitySeverity,
  ExposureRoute,
  OnsetTiming,
  ToxicologyCategory,
  ToxicityManifestation,
  Antidote,
  DecontaminationMethod,
  Toxidrome,
  ToxicDrugInteraction,
  RiskAssessment,
  EmergencyGuidance,
  ToxLabEvaluation,
  ToxicologyContent,
  PoisonControlGuidance,
  HouseholdPoisoningContent,
  DrugOverdoseContent,
  EnvironmentalToxinContent,
  FoodPoisoningContent,
} from './types';

// Educational content
export { drugOverdoses } from './drug-overdoses';
export { householdPoisonings } from './household-poisonings';
export { alcoholToxicity } from './alcohol-toxicity';
export { poisonControlGuide } from './poison-control-guide';
