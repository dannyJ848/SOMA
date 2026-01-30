/**
 * Pain Management Module
 *
 * Re-exports all pain management content, types, and utilities.
 */

// Types (from types.ts)
export type {
  PainAssessmentScale,
  PainMedication,
  WHOPainLadderStep,
  InterventionalProcedure,
  PhysicalTherapyModality,
  ComplementaryApproach,
  PainManagementLevelContent,
  PainManagementContent,
} from './types';
export { PAIN_CATEGORIES } from './types';
export type { PainCategory as PainContentCategory } from './types';

// Database types & data
export type { PainCategory, PainManagementEntry } from './pain-management-database';
export {
  painManagementDatabase,
  searchPainEntries,
  filterByCategory,
  getEntryById,
} from './pain-management-database';

// Content modules
export { acuteVsChronicPain } from './acute-vs-chronic-pain';
export { neuropathicPain, neuropathicPainMedications } from './neuropathic-pain';
export { nonOpioidAnalgesics, nonOpioidMedications } from './non-opioid-analgesics';
export { opioidMedicationsContent, opioidMedications } from './opioid-medications';
export { painAssessment, painAssessmentScales } from './pain-assessment';
export { whoPainLadder, whoPainLadderSteps } from './who-pain-ladder';
