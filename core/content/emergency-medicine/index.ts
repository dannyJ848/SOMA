/**
 * Emergency Medicine Module - Barrel Export
 *
 * This module contains educational content for emergency medicine topics including
 * cardiac arrest, trauma assessment, shock, respiratory emergencies, and more.
 */

export { cardiacArrest } from './cardiac-arrest';
export { traumaPrimarySurvey } from './trauma-primary-survey';
export { traumaSecondarySurvey } from './trauma-secondary-survey';
export { shock } from './shock';
export { respiratoryDistress } from './respiratory-distress';
export { alteredMentalStatus } from './altered-mental-status';
export { syncope } from './syncope';
export { severePain } from './severe-pain';
export { overdose } from './overdose';

// Emergency structured database
export {
  emergencyDatabase,
  searchEmergencies,
  getEmergencyById,
  getEmergenciesByCategory,
  getEmergenciesByTriageLevel,
  getAvailableEmergencyCategories,
} from './emergency-database';
export type {
  EmergencyEntry,
  EmergencyCategory,
  TriageLevel,
} from './emergency-database';

// Re-export defaults for convenience
export { default as cardiacArrestDefault } from './cardiac-arrest';
export { default as traumaPrimarySurveyDefault } from './trauma-primary-survey';
export { default as traumaSecondarySurveyDefault } from './trauma-secondary-survey';
export { default as shockDefault } from './shock';
export { default as respiratoryDistressDefault } from './respiratory-distress';
export { default as alteredMentalStatusDefault } from './altered-mental-status';
export { default as syncopeDefault } from './syncope';
export { default as severePainDefault } from './severe-pain';
export { default as overdoseDefault } from './overdose';

// Expanded emergency medicine content - Trauma
export { primarySurvey } from './trauma/primary-survey';
export { secondarySurvey } from './trauma/secondary-survey';

// Expanded emergency medicine content - Cardiac
export { aclsAlgorithms } from './cardiac/acls-algorithms';
export { stemiManagement } from './cardiac/stemi-management';

// Expanded emergency medicine content - Toxicology
export { overdoseManagement } from './toxicology/overdose-management';
export { antidoteProtocols } from './toxicology/antidote-protocols';

// Expanded emergency medicine content - Airway
export { intubation } from './airway/intubation';
export { cricothyrotomy } from './airway/cricothyrotomy';
