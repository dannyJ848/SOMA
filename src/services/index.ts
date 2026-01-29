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
  getConditionsForRegion as getPatientConditionsForRegion,
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

// Regional Condition Mapper Service
export {
  RegionalConditionMapper,
  regionalConditionMapper,
  getRegionsForCondition,
  getConditionsForRegion,
  searchConditions,
  getCondition,
  getConditionByICD10,
  getAllConditionIds,
  getConditionsByCategory,
  getConditionsBySystem,
  CONDITION_MAPPINGS,
  type VisualizationType,
  type ConditionSeverity,
  type EducationalFocusPoint,
  type AffectedRegion,
  type SeverityVisualization,
  type ConditionMapping,
  type RegionConditionEntry
} from './RegionalConditionMapper';

// Unified Content Service (knowledge graph, search, all databases)
export {
  ContentService,
  ContentContext,
  ContentProvider,
  useContentService,
  getContentService,
  type ContentType,
  type UnifiedSearchResult,
  type ConditionInfo,
  type SymptomInfo,
} from './ContentService';
