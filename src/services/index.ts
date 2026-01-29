/**
 * Services Module
 *
 * Centralized exports for all application services.
 */

// Content Integration Service
export {
  ContentIntegrationService,
  contentIntegrationService,
  getContentForRegion,
  getSpecialistsForRegion,
  searchRegions,
  getAllRegionIds,
  REGION_CONTENT_MAPPINGS,
  CONDITIONS_DATABASE,
  type ContentComplexityLevel,
  type EducationalContentItem,
  type ConditionContent,
  type RegionEducationalContent,
  type RegionContentPaths,
  type RegionMapping
} from './ContentIntegrationService';

// Patient Context Service
export {
  PatientContextService,
  patientContextService,
  buildPatientContext,
  getConditionsForRegion,
  getMedicationsAffectingRegion,
  getSymptomsInRegion,
  getLabsRelevantToRegion,
  buildEducationalContext,
  type PatientCondition,
  type PatientMedication,
  type PatientSymptom,
  type PatientLabResult,
  type PatientVital,
  type PatientAllergy,
  type PatientHealthData,
  type EducationalPriority,
  type EducationalRelevance,
  type RegionPatientContext,
  type UnifiedPatientContext,
  type RegionEducationalContext
} from './PatientContextService';
