/**
 * Encyclopedia Content Aggregation Queries
 *
 * This module provides a unified interface for querying content
 * organized by anatomical regions. It aggregates content from
 * multiple sources including anatomy, physiology, pathology,
 * histology, physical examination, conditions, and symptoms.
 *
 * @module core/encyclopedia/queries
 *
 * @example
 * ```typescript
 * import {
 *   getRegionalContent,
 *   getConditionsAffectingRegion,
 *   searchRegionalContent
 * } from '../core/encyclopedia/queries';
 *
 * // Get all content for a region
 * const heartContent = await getRegionalContent('heart', {
 *   complexityLevel: 3,
 *   includeClinical: true
 * });
 *
 * // Get conditions affecting a region
 * const conditions = await getConditionsAffectingRegion('lungs');
 *
 * // Search across all content
 * const results = await searchRegionalContent('chest pain');
 * ```
 */

// ============================================
// Types
// ============================================

export type {
  // Region types
  AnatomicalRegion,
  BodySystemId,

  // Content types
  AnatomyContent,
  PhysiologyContent,
  PathologyContent,
  PathologyCategory,
  HistologyContent,
  PhysicalExamContent,
  AbnormalFindingSummary,

  // Clinical types
  ConditionSummary,
  SymptomSummary,

  // Aggregation types
  RegionalContent,
  RegionalContentSummary,
  RegionalContentOptions,

  // Mapping types
  ConditionAnatomyMapping,
  ContentSource,
} from './types';

// ============================================
// Main Aggregation Query
// ============================================

export {
  getRegionalContent,
  getBasicRegionalContent,
  getClinicalRegionalContent,
  getRegionsInSystem,
  searchRegionalContent,
  getRegionOverview,
} from './getRegionalContent';

// ============================================
// Anatomy Queries
// ============================================

export {
  getAnatomyForRegion,
  getAnatomyByFmaId,
  searchAnatomyContent,
  getRegion,
  getRegionsBySystem,
  findRegionsByKeywords,
} from './getAnatomyForRegion';

// ============================================
// Physiology Queries
// ============================================

export {
  getPhysiologyForRegion,
  getPhysiologyBySystem,
  searchPhysiologyContent,
} from './getPhysiologyForRegion';

// ============================================
// Pathology Queries
// ============================================

export {
  getPathologyForRegion,
  getPathologyByCategory,
  searchPathologyContent,
} from './getPathologyForRegion';

// ============================================
// Histology Queries
// ============================================

export {
  getHistologyForRegion,
  getHistologyByTissueType,
  searchHistologyContent,
} from './getHistologyForRegion';

// ============================================
// Physical Exam Queries
// ============================================

export {
  getPhysicalExamForRegion,
  getPhysicalExamByTechnique,
  searchPhysicalExamContent,
  getAbnormalFindingsForRegion,
} from './getPhysicalExamForRegion';

// ============================================
// Condition Queries
// ============================================

export {
  getConditionsAffectingRegion,
  getConditionsForSystem,
  searchConditions,
  getCommonConditionsForRegion,
  getSevereConditionsForRegion,
} from './getConditionsAffectingRegion';

// ============================================
// Symptom Queries
// ============================================

export {
  getSymptomsInRegion,
  getSymptomsByUrgency,
  searchSymptoms,
  getRedFlagSymptoms,
  getSymptomsBySystem,
} from './getSymptomsInRegion';

// ============================================
// Condition-Anatomy Mapping
// ============================================

export {
  CONDITION_ANATOMY_MAP,
  getConditionsByRegion,
  getConditionsBySystem,
  getRegionsByCondition,
  conditionAffectsRegion,
  getConditionEffectsInRegion,
} from './condition-anatomy-map';
