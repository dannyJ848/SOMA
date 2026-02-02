/**
 * Physical Examination Module - The Biological Self
 */

// Abdominal Examination
export * from './abdominal/index';

// Cardiovascular Examination
export * from './cardiovascular/index';

// HEENT Examination
export * from './heent/index';

// Musculoskeletal Examination
export * from './musculoskeletal/index';

// Neurological Examination
export * from './neurological/index';

// Respiratory Examination
export * from './respiratory/index';

// Skin Examination
export * from './skin/index';

// Physical Exam Database
export type { PhysicalExamCategory, PhysicalExamEntry } from './physical-exam-database';
export {
  physicalExamDatabase,
  searchPhysicalExamEntries,
  filterByCategory,
  getEntryById,
} from './physical-exam-database';
