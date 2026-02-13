/**
 * Emergency Medicine Specialty - Barrel Export
 *
 * Comprehensive emergency medicine database including:
 * - Cardiac emergencies (STEMI, cardiac arrest, tamponade)
 * - Respiratory emergencies (tension pneumothorax, status asthmaticus, ARDS)
 * - Neurologic emergencies (stroke, subarachnoid hemorrhage, status epilepticus)
 * - Trauma emergencies (hemorrhagic shock, TBI, spinal cord injury)
 * - Toxicologic emergencies (opioid overdose, acetaminophen toxicity)
 * - Environmental emergencies (heat stroke, hypothermia, anaphylaxis)
 * - Infectious/metabolic emergencies (septic shock, DKA)
 * - Emergency procedures (airway management, central line)
 */

// --- Emergency Medicine Specialty Database ---
export {
  EMERGENCY_MEDICINE_ENTRIES,
  EMERGENCY_MEDICINE_DATABASE,
  EMERGENCY_CATEGORIES,
  TRIAGE_LEVELS,
  EMERGENCY_MEDICINE_METADATA,
  getEmergencyEntry,
  getEmergenciesByCategory,
  getEmergenciesByTriage,
  searchEmergencyMedicine,
  getEmergenciesBySign,
} from './emergency-medicine-database';

export type {
  EmergencyEntry,
  EmergencyCategory,
  TriageLevel,
} from './emergency-medicine-database';

// --- Re-export from core emergency content ---
export {
  cardiacArrest,
  traumaPrimarySurvey,
  traumaSecondarySurvey,
  shock,
  respiratoryDistress,
  alteredMentalStatus,
  syncope,
  severePain,
  overdose,
} from '../../emergency-medicine';

// Re-export defaults for convenience
export { default as cardiacArrestContent } from '../../emergency-medicine/cardiac-arrest';
export { default as traumaPrimarySurveyContent } from '../../emergency-medicine/trauma-primary-survey';
export { default as traumaSecondarySurveyContent } from '../../emergency-medicine/trauma-secondary-survey';
export { default as shockContent } from '../../emergency-medicine/shock';
export { default as respiratoryDistressContent } from '../../emergency-medicine/respiratory-distress';
export { default as alteredMentalStatusContent } from '../../emergency-medicine/altered-mental-status';
export { default as syncopeContent } from '../../emergency-medicine/syncope';
export { default as severePainContent } from '../../emergency-medicine/severe-pain';
export { default as overdoseContent } from '../../emergency-medicine/overdose';
