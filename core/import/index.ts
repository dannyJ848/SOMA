/**
 * Import Module
 *
 * Exports functionality for importing health data from various sources.
 */

export { LabImporter, importLabsFromPDF, importLabsFromText } from './lab-import.js';
export type { LabImportResult } from './lab-import.js';

export { AppleHealthImporter, importFromAppleHealth } from './apple-health.js';
export type { AppleHealthImportResult } from './apple-health.js';

// P4.1.1: Medical Record PDF Import
export {
  MedicalRecordExtractor,
  extractMedicalRecordFromPDF,
  extractMedicalRecordFromText,
  extractPDFText,
  convertExtractedLabs,
  convertExtractedMedications,
  convertExtractedConditions,
  convertExtractedImaging,
} from './pdf-medical-record.js';
export type {
  MedicalDocumentType,
  MedicalRecordExtraction,
  ExtractedLabResult,
  ExtractedMedication,
  ExtractedCondition,
  ExtractedImagingReport,
  ExtractedVitals,
  PDFParseResult,
} from './pdf-medical-record.js';

// Duplicate Detection
export {
  checkLabDuplicate,
  findLabDuplicates,
  checkMedicationDuplicate,
  findMedicationDuplicates,
  checkConditionDuplicate,
  findConditionDuplicates,
  detectAllDuplicates,
} from './duplicate-detector.js';
export type {
  DuplicateMatch,
  DuplicateCheckResult,
  LabDuplicateOptions,
  MedicationDuplicateOptions,
  BatchDuplicateResult,
} from './duplicate-detector.js';

// P4.1.2: FHIR Integration
export * from './fhir/index.js';
