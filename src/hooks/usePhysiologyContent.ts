/**
 * usePhysiologyContent Hook
 *
 * Maps region ID to relevant physiology content modules and returns
 * content at the appropriate complexity level with loading states.
 *
 * This hook:
 * - Fetches physiology content from core/content files
 * - Adapts content based on complexity level (1-5)
 * - Handles loading and error states
 * - Caches content for performance
 */

import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { REGION_CONTENT_MAP, type RegionContent, type PhysiologyContent } from '../education/regionContentMapping';

// ============================================================================
// Types
// ============================================================================

export type ComplexityLevel = 1 | 2 | 3 | 4 | 5;

export interface KeyTerm {
  term: string;
  definition: string;
  pronunciation?: string;
  etymology?: string;
}

export interface FunctionInfo {
  name: string;
  description: string;
  importance?: 'vital' | 'essential' | 'supportive';
}

export interface MechanismInfo {
  name: string;
  description: string;
  steps?: string[];
}

export interface ParameterInfo {
  name: string;
  normalRange: string;
  unit: string;
  highImplications?: string;
  lowImplications?: string;
}

export interface RelatedSystem {
  targetId: string;
  targetType: string;
  relationship: string;
  label: string;
}

export interface MediaItem {
  id: string;
  type: string;
  filename?: string;
  title: string;
  description?: string;
}

export interface Citation {
  id: string;
  type: string;
  title: string;
  source?: string;
  url?: string;
  authors?: string[];
  chapter?: string;
  license?: string;
}

export interface PhysiologyContentData {
  // Basic info
  regionId: string;
  regionName: string;
  complexityLevel: ComplexityLevel;

  // Overview content
  summary: string;
  explanation?: string;
  analogies?: string[];
  examples?: string[];

  // Key terms for the current complexity level
  keyTerms?: KeyTerm[];

  // Functions
  functions: FunctionInfo[];

  // Mechanisms/Processes
  mechanisms: MechanismInfo[];

  // Homeostasis and parameters
  normalParameters?: ParameterInfo[];
  homeostasis?: Array<{
    variable: string;
    normalRange: string;
    unit: string;
    regulationMechanism: string;
  }>;

  // Related systems and interactions
  relatedSystems: RelatedSystem[];
  systemInteractions?: string[];

  // Clinical notes (for higher complexity levels)
  clinicalNotes?: string[];

  // Media and citations
  media?: MediaItem[];
  citations: Citation[];
}

export interface UsePhysiologyContentReturn {
  content: PhysiologyContentData | null;
  isLoading: boolean;
  error: string | null;
  refetch: () => void;
}

// ============================================================================
// Content Cache
// ============================================================================

interface CacheEntry {
  content: PhysiologyContentData;
  timestamp: number;
}

const contentCache = new Map<string, CacheEntry>();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

function getCacheKey(regionId: string, level: ComplexityLevel): string {
  return `${regionId}:${level}`;
}

function getCachedContent(regionId: string, level: ComplexityLevel): PhysiologyContentData | null {
  const key = getCacheKey(regionId, level);
  const cached = contentCache.get(key);

  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.content;
  }

  return null;
}

function setCachedContent(regionId: string, level: ComplexityLevel, content: PhysiologyContentData): void {
  const key = getCacheKey(regionId, level);
  contentCache.set(key, { content, timestamp: Date.now() });
}

// ============================================================================
// Content Adapters
// ============================================================================

/**
 * Adapts summary content based on complexity level
 */
function adaptSummaryForLevel(
  regionContent: RegionContent,
  level: ComplexityLevel
): { summary: string; explanation?: string; analogies?: string[]; examples?: string[] } {
  // Default summary from physiology
  const basePhysiology = regionContent.physiology;

  // Build summary from functions
  const functionSummary = basePhysiology.functions
    .map((f) => f.description)
    .join(' ');

  // Adapt based on level
  switch (level) {
    case 1:
      return {
        summary: `The ${regionContent.name.toLowerCase()} performs essential functions in your body.`,
        explanation: functionSummary,
        analogies: [`Think of the ${regionContent.name.toLowerCase()} as a vital part of your body's system.`],
        examples: [`The ${regionContent.name.toLowerCase()} works constantly to keep you healthy.`],
      };
    case 2:
      return {
        summary: `The ${regionContent.name} is responsible for several important physiological processes.`,
        explanation: functionSummary,
      };
    case 3:
      return {
        summary: `The ${regionContent.name} plays a critical role in maintaining homeostasis through multiple physiological mechanisms.`,
        explanation: `${functionSummary} These processes are regulated by complex feedback systems.`,
      };
    case 4:
      return {
        summary: `The ${regionContent.name} integrates multiple physiological pathways including ${basePhysiology.functions.map((f) => f.name.toLowerCase()).join(', ')}.`,
        explanation: `${functionSummary} Understanding these mechanisms is essential for clinical practice.`,
      };
    case 5:
      return {
        summary: `The ${regionContent.name} demonstrates complex physiological integration across multiple organ systems, serving as a nexus for ${basePhysiology.functions.map((f) => f.name.toLowerCase()).join(', ')}.`,
        explanation: `${functionSummary} Clinical mastery requires understanding the interplay of these systems in both health and disease states.`,
      };
    default:
      return { summary: functionSummary };
  }
}

/**
 * Adapts functions based on complexity level
 */
function adaptFunctionsForLevel(
  physiology: PhysiologyContent,
  level: ComplexityLevel
): FunctionInfo[] {
  return physiology.functions.map((func) => {
    let description = func.description;

    // Simplify descriptions for lower levels
    if (level <= 2) {
      // Take first sentence only for simpler levels
      const firstSentence = description.split('.')[0];
      description = firstSentence.endsWith('.') ? firstSentence : `${firstSentence}.`;
    }

    return {
      name: func.name,
      description,
      importance: func.importance,
    };
  });
}

/**
 * Adapts mechanisms/processes based on complexity level
 */
function adaptMechanismsForLevel(
  physiology: PhysiologyContent,
  level: ComplexityLevel
): MechanismInfo[] {
  // For lower levels, simplify or omit detailed steps
  return physiology.processes.map((process) => {
    const mechanism: MechanismInfo = {
      name: process.name,
      description: process.description,
    };

    // Only include steps for intermediate and above
    if (level >= 3 && process.steps.length > 0) {
      mechanism.steps = process.steps;
    }

    return mechanism;
  });
}

/**
 * Adapts parameters based on complexity level
 */
function adaptParametersForLevel(
  physiology: PhysiologyContent,
  level: ComplexityLevel
): ParameterInfo[] {
  // Only show parameters for level 2 and above
  if (level < 2) {
    return [];
  }

  return physiology.normalParameters.map((param) => ({
    name: param.name,
    normalRange: param.normalRange,
    unit: param.unit,
    highImplications: level >= 3 ? param.highImplications : undefined,
    lowImplications: level >= 3 ? param.lowImplications : undefined,
  }));
}

/**
 * Generates key terms based on complexity level
 */
function generateKeyTermsForLevel(
  regionContent: RegionContent,
  level: ComplexityLevel
): KeyTerm[] {
  const terms: KeyTerm[] = [];

  // Extract terms from physiology content
  const physiology = regionContent.physiology;

  // Add function names as terms
  physiology.functions.forEach((func) => {
    terms.push({
      term: func.name,
      definition: func.description,
    });
  });

  // Add homeostasis variables as terms for level 3+
  if (level >= 3) {
    physiology.homeostasis.forEach((h) => {
      terms.push({
        term: h.variable,
        definition: `${h.regulationMechanism}. Normal range: ${h.normalRange} ${h.unit}`,
      });
    });
  }

  // Limit terms based on level
  const maxTerms = level <= 2 ? 3 : level <= 4 ? 6 : 10;
  return terms.slice(0, maxTerms);
}

/**
 * Builds related systems from cross-references
 */
function buildRelatedSystems(regionContent: RegionContent): RelatedSystem[] {
  // Use relatedStructures from region content
  return regionContent.relatedStructures.map((structureId) => {
    const relatedRegion = REGION_CONTENT_MAP[structureId];
    return {
      targetId: structureId,
      targetType: 'structure',
      relationship: 'related',
      label: relatedRegion?.name || structureId.charAt(0).toUpperCase() + structureId.slice(1),
    };
  });
}

/**
 * Builds citations from region content
 */
function buildCitations(): Citation[] {
  // Default citations for all physiological content
  return [
    {
      id: 'openstax-ap',
      type: 'textbook',
      title: 'Anatomy and Physiology 2e',
      source: 'OpenStax',
      url: 'https://openstax.org/details/books/anatomy-and-physiology-2e',
      license: 'CC BY 4.0',
    },
    {
      id: 'grays-anatomy',
      type: 'textbook',
      title: "Gray's Anatomy: The Anatomical Basis of Clinical Practice",
      source: 'Elsevier',
    },
  ];
}

// ============================================================================
// Content Loading
// ============================================================================

/**
 * Loads and transforms physiology content for a region
 */
async function loadPhysiologyContent(
  regionId: string,
  level: ComplexityLevel
): Promise<PhysiologyContentData> {
  // Check if region exists in mapping
  const regionContent = REGION_CONTENT_MAP[regionId];

  if (!regionContent) {
    throw new Error(`No physiology content found for region: ${regionId}`);
  }

  // Simulate async loading (in real app, this might fetch from API or file system)
  await new Promise((resolve) => setTimeout(resolve, 100));

  const physiology = regionContent.physiology;

  // Build adapted content
  const summaryData = adaptSummaryForLevel(regionContent, level);
  const functions = adaptFunctionsForLevel(physiology, level);
  const mechanisms = adaptMechanismsForLevel(physiology, level);
  const parameters = adaptParametersForLevel(physiology, level);
  const keyTerms = generateKeyTermsForLevel(regionContent, level);
  const relatedSystems = buildRelatedSystems(regionContent);
  const citations = buildCitations();

  // Build homeostasis data (for level 3+)
  const homeostasis = level >= 3 ? physiology.homeostasis : undefined;

  // Build system interactions (for level 2+)
  const systemInteractions = level >= 2 ? physiology.systemInteractions : undefined;

  // Build clinical notes (for level 3+)
  const clinicalNotes = level >= 3 ? regionContent.clinicalNotes : undefined;

  // Build media references
  const media: MediaItem[] = regionContent.models.map((model) => ({
    id: model.name,
    type: '3d-model',
    filename: model.path,
    title: model.name,
    description: `${model.detailLevel} view`,
  }));

  return {
    regionId,
    regionName: regionContent.name,
    complexityLevel: level,
    ...summaryData,
    keyTerms,
    functions,
    mechanisms,
    normalParameters: parameters,
    homeostasis,
    relatedSystems,
    systemInteractions,
    clinicalNotes,
    media,
    citations,
  };
}

// ============================================================================
// Hook Implementation
// ============================================================================

/**
 * Hook for fetching and managing physiology content
 *
 * @param regionId - The anatomical region identifier
 * @param complexityLevel - The desired complexity level (1-5)
 * @returns Content data, loading state, error state, and refetch function
 */
export function usePhysiologyContent(
  regionId: string,
  complexityLevel: ComplexityLevel
): UsePhysiologyContentReturn {
  const [content, setContent] = useState<PhysiologyContentData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Track current request to handle race conditions
  const requestIdRef = useRef(0);

  const fetchContent = useCallback(async () => {
    // Increment request ID
    const currentRequestId = ++requestIdRef.current;

    // Check cache first
    const cached = getCachedContent(regionId, complexityLevel);
    if (cached) {
      setContent(cached);
      setIsLoading(false);
      setError(null);
      return;
    }

    // Start loading
    setIsLoading(true);
    setError(null);

    try {
      const data = await loadPhysiologyContent(regionId, complexityLevel);

      // Only update if this is still the current request
      if (currentRequestId === requestIdRef.current) {
        setCachedContent(regionId, complexityLevel, data);
        setContent(data);
        setIsLoading(false);
      }
    } catch (err) {
      // Only update if this is still the current request
      if (currentRequestId === requestIdRef.current) {
        const message = err instanceof Error ? err.message : 'Failed to load physiology content';
        setError(message);
        setIsLoading(false);
      }
    }
  }, [regionId, complexityLevel]);

  // Fetch content when dependencies change
  useEffect(() => {
    fetchContent();
  }, [fetchContent]);

  // Memoize return value
  return useMemo(
    () => ({
      content,
      isLoading,
      error,
      refetch: fetchContent,
    }),
    [content, isLoading, error, fetchContent]
  );
}

export default usePhysiologyContent;
