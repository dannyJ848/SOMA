/**
 * Radiology Content Module
 *
 * Exports all radiology educational content including modality-specific
 * content, types, and the interpretation database.
 */

export { xrayBasics } from './x-ray';
export { ctScan } from './ct-scan';
export { mri } from './mri';
export { ultrasound } from './ultrasound';

export type {
  ImagingModality,
  BodyRegion,
  ContrastAgent,
  RadiationExposure,
  PatientPreparation,
  ImagingContraindication,
  ImagingFinding,
  ImagingProtocol,
  MRISafetyCategory,
  MRIDeviceSafety,
  RadiologyModalityContent,
  CommonFindingsContent,
  RadiationSafetyContent,
  PatientPrepGuide,
  RadiologyQuickReference,
  AppropriatenessCriteria,
} from './types';

export type { RadiologyCategory, RadiologyEntry } from './radiology-database';

export {
  radiologyDatabase,
  searchRadiologyEntries,
  filterByCategory,
  getEntryById,
} from './radiology-database';
