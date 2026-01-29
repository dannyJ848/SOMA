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
