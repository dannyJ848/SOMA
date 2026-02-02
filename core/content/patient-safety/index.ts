/**
 * Patient Safety Module
 *
 * Educational content for patient safety in healthcare settings
 */

// Navigating Healthcare
export * from './navigating-healthcare/index';

// Informed Consent
export * from './informed-consent/index';

// Hospital Safety
export * from './hospital-safety/index';

// Medical Records
export * from './medical-records/index';

// Medication Safety
export * from './medication-safety/index';

// Communication
export * from './communication/index';

// Patient Safety Database
export {
  PATIENT_SAFETY_ENTRIES,
  searchPatientSafetyEntries,
  filterByCategory,
  getEntryById,
} from './patient-safety-database';
export type {
  PatientSafetyCategory,
  PatientSafetyEntry,
} from './patient-safety-database';
