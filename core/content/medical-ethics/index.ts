// Ethical Principles
export {
  autonomy,
  beneficence,
  nonMaleficence,
  justice
} from './ethical-principles';

// Clinical Ethics
export {
  informedConsent,
  confidentiality,
  endOfLifeEthics
} from './clinical-ethics';

// Research Ethics
export {
  humanSubjects,
  researchMisconduct,
  animalResearch
} from './research-ethics';

// Medical Ethics Database
export type { MedicalEthicsCategory, MedicalEthicsEntry } from './medical-ethics-database';
export {
  MEDICAL_ETHICS_ENTRIES,
  searchEthicsEntries,
  filterByCategory,
  getEntryById,
} from './medical-ethics-database';
