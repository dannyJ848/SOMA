/**
 * Pulmonology Specialty Educational Content
 *
 * Comprehensive content covering:
 * - Obstructive diseases: Asthma, COPD
 * - Infectious diseases: Pneumonia (CAP, HAP, atypical)
 * - Vascular diseases: Pulmonary embolism
 * - Neoplastic diseases: Lung cancer
 * - Interstitial lung diseases
 * - Pleural diseases: Effusion, pneumothorax
 * - Sleep-disordered breathing
 * - Pulmonary function testing
 * - Respiratory pharmacology
 *
 * All content features 5 complexity levels from 8th grade to MD/Professional
 */

// Obstructive diseases
export { asthma } from './asthma';
export { copd } from './copd';

// Infectious diseases
export { pneumonia } from './pneumonia';

// Vascular diseases
export { pulmonaryEmbolism } from './pulmonary-embolism';

// Neoplastic diseases
export { lungCancer } from './lung-cancer';

// Interstitial lung diseases
export { interstitialLungDiseases } from './interstitial-lung-diseases';

// Pleural diseases
export { pleuralDiseases } from './pleural-diseases';

// Sleep disorders
export { sleepDisorders } from './sleep-disorders';

// Diagnostics
export { pulmonaryFunctionTests } from './pulmonary-function-tests';

// Pharmacology
export { respiratoryMedications } from './respiratory-medications';

// Pulmonology specialty database
export {
  PULMONOLOGY_ENTRIES,
  getPulmonologyEntry,
  searchPulmonology,
  getPulmonologyByCategory,
  getPulmonologyCount,
  searchPulmonologyEmergencies,
  getPulmonologyICD11Map,
} from './pulmonology-database';
export type {
  PulmonologyCategory as PulmonologyDatabaseCategory,
  PulmonologyEntry,
} from './pulmonology-database';

// Content categories
export const PULMONOLOGY_CATEGORIES = [
  'obstructive',
  'infectious',
  'vascular',
  'neoplastic',
  'interstitial',
  'pleural',
  'sleep',
  'diagnostics',
  'pharmacology',
] as const;

export type PulmonologyCategory = (typeof PULMONOLOGY_CATEGORIES)[number];

// Content registry for programmatic access
export const PULMONOLOGY_CONTENT_REGISTRY = {
  obstructive: ['asthma', 'copd'],
  infectious: ['pneumonia'],
  vascular: ['pulmonary-embolism'],
  neoplastic: ['lung-cancer'],
  interstitial: ['interstitial-lung-diseases'],
  pleural: ['pleural-diseases'],
  sleep: ['sleep-disorders'],
  diagnostics: ['pulmonary-function-tests'],
  pharmacology: ['respiratory-medications'],
} as const;
