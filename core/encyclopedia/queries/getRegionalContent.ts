/**
 * Get Regional Content - Main Query Aggregator
 *
 * Main query function to get all content for an anatomical region.
 * Aggregates content from multiple sources including anatomy, physiology,
 * pathology, histology, physical exam, conditions, and symptoms.
 */

import {
  RegionalContent,
  RegionalContentSummary,
  AnatomicalRegion,
  AnatomyContent,
  PhysiologyContent,
  PathologyContent,
  HistologyContent,
  PhysicalExamContent,
  ConditionSummary,
  SymptomSummary,
  RegionalContentOptions,
  BodySystemId,
} from './types';

import { getRegion, findRegionsByKeywords, getRegionsBySystem } from './getAnatomyForRegion';
import { getAnatomyForRegion } from './getAnatomyForRegion';
import { getPhysiologyForRegion } from './getPhysiologyForRegion';
import { getPathologyForRegion } from './getPathologyForRegion';
import { getHistologyForRegion } from './getHistologyForRegion';
import { getPhysicalExamForRegion } from './getPhysicalExamForRegion';
import { getConditionsAffectingRegion } from './getConditionsAffectingRegion';
import { getSymptomsInRegion } from './getSymptomsInRegion';

// ============================================
// Helper Functions
// ============================================

/**
 * Create a content summary for a region
 */
async function createRegionalContentSummary(
  regionId: string,
  options: RegionalContentOptions = {}
): Promise<RegionalContentSummary | null> {
  const region = getRegion(regionId);
  if (!region) return null;

  // Get counts for each content type (limited queries for performance)
  const limitedOptions = { ...options, maxItemsPerType: 50 };

  const [anatomy, physiology, pathology, histology, physicalExam, conditions, symptoms] =
    await Promise.all([
      getAnatomyForRegion(regionId, limitedOptions),
      getPhysiologyForRegion(regionId, limitedOptions),
      getPathologyForRegion(regionId, limitedOptions),
      getHistologyForRegion(regionId, limitedOptions),
      getPhysicalExamForRegion(regionId, limitedOptions),
      getConditionsAffectingRegion(regionId, limitedOptions),
      getSymptomsInRegion(regionId, limitedOptions),
    ]);

  // Generate highlights
  const highlights: string[] = [];

  if (anatomy.length > 0) {
    highlights.push(`${anatomy.length} anatomical structures`);
  }
  if (conditions.length > 0) {
    const commonConditions = conditions.filter((c) => c.prevalence === 'common');
    if (commonConditions.length > 0) {
      highlights.push(`${commonConditions.length} common conditions`);
    }
  }
  if (symptoms.length > 0) {
    const urgentSymptoms = symptoms.filter(
      (s) => s.urgencyLevel === 'emergency' || s.urgencyLevel === 'urgent'
    );
    if (urgentSymptoms.length > 0) {
      highlights.push(`${urgentSymptoms.length} urgent symptoms to know`);
    }
  }

  return {
    regionId: region.id,
    regionName: region.name,
    contentCounts: {
      anatomy: anatomy.length,
      physiology: physiology.length,
      pathology: pathology.length,
      histology: histology.length,
      physicalExam: physicalExam.length,
      conditions: conditions.length,
      symptoms: symptoms.length,
    },
    highlights,
  };
}

/**
 * Get related regions for a given region
 */
async function getRelatedRegions(
  region: AnatomicalRegion,
  options: RegionalContentOptions = {}
): Promise<RegionalContentSummary[]> {
  const related: RegionalContentSummary[] = [];

  // Get regions in the same system
  const systemRegions = getRegionsBySystem(region.system);

  for (const sysRegion of systemRegions) {
    if (sysRegion.id !== region.id) {
      const summary = await createRegionalContentSummary(sysRegion.id, options);
      if (summary) {
        related.push(summary);
      }
    }
    if (related.length >= 5) break;
  }

  return related;
}

// ============================================
// Main Query Function
// ============================================

/**
 * Get all content for a specific anatomical region
 *
 * This is the main aggregation function that collects content from
 * all available sources and returns a comprehensive RegionalContent object.
 *
 * @param regionId - The ID of the anatomical region to query
 * @param options - Optional query configuration
 * @returns Complete regional content aggregation
 *
 * @example
 * ```typescript
 * // Get heart content at college level
 * const heartContent = await getRegionalContent('heart', {
 *   complexityLevel: 3,
 *   includeClinical: true
 * });
 *
 * // Get simplified content for a patient
 * const simpleContent = await getRegionalContent('lungs', {
 *   complexityLevel: 1,
 *   maxItemsPerType: 5
 * });
 * ```
 */
export async function getRegionalContent(
  regionId: string,
  options: RegionalContentOptions = {}
): Promise<RegionalContent | null> {
  const {
    complexityLevel = 3,
    includeChildContent = true,
    contentTypes = ['anatomy', 'physiology', 'pathology', 'histology', 'physicalExam'],
    maxItemsPerType = 20,
    includeClinical = true,
    searchQuery,
  } = options;

  // Get the region
  let region = getRegion(regionId);

  if (!region) {
    // Try keyword matching
    const matchingRegions = findRegionsByKeywords([regionId]);
    if (matchingRegions.length === 0) {
      return null;
    }
    region = matchingRegions[0];
  }

  // Build query options
  const queryOptions: RegionalContentOptions = {
    complexityLevel,
    maxItemsPerType,
    searchQuery,
  };

  // Fetch all content in parallel
  const contentPromises: Promise<any>[] = [];

  // Always fetch based on contentTypes
  const anatomyPromise = contentTypes.includes('anatomy')
    ? getAnatomyForRegion(region.id, queryOptions)
    : Promise.resolve([]);

  const physiologyPromise = contentTypes.includes('physiology')
    ? getPhysiologyForRegion(region.id, queryOptions)
    : Promise.resolve([]);

  const pathologyPromise = contentTypes.includes('pathology')
    ? getPathologyForRegion(region.id, queryOptions)
    : Promise.resolve([]);

  const histologyPromise = contentTypes.includes('histology')
    ? getHistologyForRegion(region.id, queryOptions)
    : Promise.resolve([]);

  const physicalExamPromise = contentTypes.includes('physicalExam')
    ? getPhysicalExamForRegion(region.id, queryOptions)
    : Promise.resolve([]);

  // Clinical content
  const conditionsPromise = includeClinical
    ? getConditionsAffectingRegion(region.id, queryOptions)
    : Promise.resolve([]);

  const symptomsPromise = includeClinical
    ? getSymptomsInRegion(region.id, queryOptions)
    : Promise.resolve([]);

  // Execute all queries in parallel
  const [anatomy, physiology, pathology, histology, physicalExam, relatedConditions, relatedSymptoms] =
    await Promise.all([
      anatomyPromise,
      physiologyPromise,
      pathologyPromise,
      histologyPromise,
      physicalExamPromise,
      conditionsPromise,
      symptomsPromise,
    ]);

  // Get child region summaries
  const childRegions: RegionalContentSummary[] = [];
  if (includeChildContent && region.childRegionIds.length > 0) {
    for (const childId of region.childRegionIds) {
      const summary = await createRegionalContentSummary(childId, queryOptions);
      if (summary) {
        childRegions.push(summary);
      }
    }
  }

  // Get parent region summary
  let parentRegion: RegionalContentSummary | undefined;
  if (region.parentRegionId) {
    const parentSummary = await createRegionalContentSummary(region.parentRegionId, queryOptions);
    if (parentSummary) {
      parentRegion = parentSummary;
    }
  }

  // Get related regions
  const relatedRegions = await getRelatedRegions(region, queryOptions);

  // Calculate total content items
  const totalContentItems =
    anatomy.length +
    physiology.length +
    pathology.length +
    histology.length +
    physicalExam.length +
    relatedConditions.length +
    relatedSymptoms.length;

  // Build and return the result
  const result: RegionalContent = {
    region,
    anatomy,
    physiology,
    pathology,
    histology,
    physicalExam,
    relatedConditions,
    relatedSymptoms,
    childRegions,
    parentRegion,
    relatedRegions,
    lastUpdated: new Date().toISOString(),
    totalContentItems,
  };

  return result;
}

// ============================================
// Convenience Functions
// ============================================

/**
 * Get regional content with only anatomy and physiology
 */
export async function getBasicRegionalContent(
  regionId: string,
  options: RegionalContentOptions = {}
): Promise<RegionalContent | null> {
  return getRegionalContent(regionId, {
    ...options,
    contentTypes: ['anatomy', 'physiology'],
    includeClinical: false,
    includeChildContent: false,
  });
}

/**
 * Get clinical content for a region (conditions, symptoms, physical exam)
 */
export async function getClinicalRegionalContent(
  regionId: string,
  options: RegionalContentOptions = {}
): Promise<RegionalContent | null> {
  return getRegionalContent(regionId, {
    ...options,
    contentTypes: ['physicalExam', 'pathology'],
    includeClinical: true,
  });
}

/**
 * Get all regions in a body system with content summaries
 */
export async function getRegionsInSystem(
  system: BodySystemId,
  options: RegionalContentOptions = {}
): Promise<RegionalContentSummary[]> {
  const regions = getRegionsBySystem(system);
  const summaries: RegionalContentSummary[] = [];

  for (const region of regions) {
    const summary = await createRegionalContentSummary(region.id, options);
    if (summary) {
      summaries.push(summary);
    }
  }

  return summaries;
}

/**
 * Search across all regional content
 */
export async function searchRegionalContent(
  query: string,
  options: RegionalContentOptions = {}
): Promise<{
  regions: AnatomicalRegion[];
  anatomy: AnatomyContent[];
  conditions: ConditionSummary[];
  symptoms: SymptomSummary[];
}> {
  const searchOptions = { ...options, searchQuery: query, maxItemsPerType: 10 };

  // Find matching regions
  const matchingRegions = findRegionsByKeywords(query.split(/\s+/));

  // Search across content types
  const allAnatomy: AnatomyContent[] = [];
  const allConditions: ConditionSummary[] = [];
  const allSymptoms: SymptomSummary[] = [];

  for (const region of matchingRegions) {
    const [anatomy, conditions, symptoms] = await Promise.all([
      getAnatomyForRegion(region.id, searchOptions),
      getConditionsAffectingRegion(region.id, searchOptions),
      getSymptomsInRegion(region.id, searchOptions),
    ]);

    allAnatomy.push(...anatomy);
    allConditions.push(...conditions);
    allSymptoms.push(...symptoms);
  }

  // Remove duplicates
  const uniqueAnatomy = allAnatomy.filter(
    (item, index, self) => self.findIndex((t) => t.id === item.id) === index
  );
  const uniqueConditions = allConditions.filter(
    (item, index, self) => self.findIndex((t) => t.id === item.id) === index
  );
  const uniqueSymptoms = allSymptoms.filter(
    (item, index, self) => self.findIndex((t) => t.id === item.id) === index
  );

  return {
    regions: matchingRegions,
    anatomy: uniqueAnatomy.slice(0, options.maxItemsPerType || 20),
    conditions: uniqueConditions.slice(0, options.maxItemsPerType || 20),
    symptoms: uniqueSymptoms.slice(0, options.maxItemsPerType || 20),
  };
}

/**
 * Get a quick overview of a region (minimal content)
 */
export async function getRegionOverview(
  regionId: string,
  complexityLevel: 1 | 2 | 3 | 4 | 5 = 3
): Promise<{
  region: AnatomicalRegion | null;
  summary: RegionalContentSummary | null;
  topConditions: ConditionSummary[];
  urgentSymptoms: SymptomSummary[];
} | null> {
  const region = getRegion(regionId);
  if (!region) return null;

  const summary = await createRegionalContentSummary(regionId, { complexityLevel });

  const [conditions, symptoms] = await Promise.all([
    getConditionsAffectingRegion(regionId, { complexityLevel, maxItemsPerType: 5 }),
    getSymptomsInRegion(regionId, { complexityLevel, maxItemsPerType: 10 }),
  ]);

  const topConditions = conditions
    .filter((c) => c.prevalence === 'common')
    .slice(0, 3);

  const urgentSymptoms = symptoms
    .filter((s) => s.urgencyLevel === 'emergency' || s.urgencyLevel === 'urgent')
    .slice(0, 3);

  return {
    region,
    summary,
    topConditions,
    urgentSymptoms,
  };
}
