/**
 * usePhysiologyContent Hook
 *
 * Maps region ID to relevant physiology content modules and returns
 * content at the appropriate complexity level with loading states.
 *
 * This hook:
 * - Loads real EducationalContent from core/content/physiology databases
 * - Uses the region-to-physiology mapping for topic discovery
 * - Falls back to regionContentMapping for basic region data
 * - Adapts content based on complexity level (1-5)
 * - Handles loading and error states
 * - Caches content for performance
 */

import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { REGION_CONTENT_MAP, type RegionContent, type PhysiologyContent } from '../education/regionContentMapping';
import {
  getRegionPhysiologyEntry,
  getPhysiologyTopicsForRegion,
  type PhysiologyTopicRef,
  type RegionPhysiologyEntry,
} from './regionPhysiologyMapping';
import type {
  EducationalContent,
  LevelContent,
  ComplexityLevel as ContentComplexityLevel,
  CrossReference,
  Citation as ContentCitation,
  MediaAsset,
} from '@core/content/types';

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

/** A loaded physiology topic with its EducationalContent */
export interface PhysiologyTopic {
  id: string;
  label: string;
  system: string;
  name: string;
  summary: string;
  explanation?: string;
  keyTerms: KeyTerm[];
  analogies?: string[];
  examples?: string[];
  clinicalNotes?: string;
  patientCounselingPoints?: string[];
}

export interface PhysiologyContentData {
  // Basic info
  regionId: string;
  regionName: string;
  complexityLevel: ComplexityLevel;

  // All available physiology topics for this region
  topics: PhysiologyTopic[];

  // Currently selected topic (full detail)
  selectedTopicId: string | null;

  // Overview content (from selected topic or region fallback)
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
  /** Select a specific physiology topic by its id */
  selectTopic: (topicId: string) => void;
  /** The currently selected topic ID */
  selectedTopicId: string | null;
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

function getCacheKey(regionId: string, level: ComplexityLevel, topicId?: string | null): string {
  return `${regionId}:${level}:${topicId ?? 'all'}`;
}

function getCachedContent(regionId: string, level: ComplexityLevel, topicId?: string | null): PhysiologyContentData | null {
  const key = getCacheKey(regionId, level, topicId);
  const cached = contentCache.get(key);

  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.content;
  }

  return null;
}

function setCachedContent(regionId: string, level: ComplexityLevel, topicId: string | null, content: PhysiologyContentData): void {
  const key = getCacheKey(regionId, level, topicId);
  contentCache.set(key, { content, timestamp: Date.now() });
}

// ============================================================================
// Content Transformers — EducationalContent -> PhysiologyContentData
// ============================================================================

/**
 * Extract level-specific content from an EducationalContent object.
 * Handles both standard LevelContent and legacy formats.
 */
function getLevelContent(ec: EducationalContent, level: ComplexityLevel): LevelContent | null {
  const levels = ec.levels;
  if (!levels) return null;
  const lc = levels[level];
  if (!lc) return null;
  return lc;
}

/**
 * Transform an EducationalContent into a PhysiologyTopic at a given level.
 */
function toPhysiologyTopic(
  ec: EducationalContent,
  level: ComplexityLevel,
  topicRef: PhysiologyTopicRef
): PhysiologyTopic {
  const lc = getLevelContent(ec, level);

  return {
    id: ec.id,
    label: topicRef.label,
    system: topicRef.system,
    name: ec.name,
    summary: lc?.summary ?? `${ec.name} - educational content`,
    explanation: lc?.explanation,
    keyTerms: (lc?.keyTerms ?? []).map((kt) => ({
      term: kt.term,
      definition: kt.definition,
      pronunciation: kt.pronunciation,
      etymology: kt.etymology,
    })),
    analogies: lc?.analogies,
    examples: lc?.examples,
    clinicalNotes: lc?.clinicalNotes ?? undefined,
    patientCounselingPoints: lc?.patientCounselingPoints ?? undefined,
  };
}

/**
 * Build citations from EducationalContent
 */
function buildCitationsFromContent(ec: EducationalContent): Citation[] {
  if (!ec.citations || ec.citations.length === 0) {
    return defaultCitations();
  }
  return ec.citations.map((c: ContentCitation) => ({
    id: c.id,
    type: c.type,
    title: c.title,
    source: c.source,
    url: c.url,
    authors: c.authors,
    chapter: c.chapter,
    license: c.license,
  }));
}

/**
 * Build media items from EducationalContent
 */
function buildMediaFromContent(ec: EducationalContent): MediaItem[] {
  if (!ec.media || ec.media.length === 0) return [];
  return ec.media.map((m: MediaAsset) => ({
    id: m.id,
    type: m.type,
    filename: m.filename,
    title: m.title,
    description: m.description,
  }));
}

/**
 * Build related systems from EducationalContent cross-references
 */
function buildRelatedFromContent(ec: EducationalContent): RelatedSystem[] {
  if (!ec.crossReferences || ec.crossReferences.length === 0) return [];
  return ec.crossReferences.map((cr: CrossReference) => ({
    targetId: cr.targetId,
    targetType: cr.targetType,
    relationship: cr.relationship,
    label: cr.label ?? cr.targetId,
  }));
}

function defaultCitations(): Citation[] {
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
// Fallback adapters (for regions without database content)
// ============================================================================

function adaptSummaryForLevel(
  regionContent: RegionContent,
  level: ComplexityLevel
): { summary: string; explanation?: string; analogies?: string[]; examples?: string[] } {
  const basePhysiology = regionContent.physiology;
  const functionSummary = basePhysiology.functions.map((f) => f.description).join(' ');

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

function adaptFunctionsForLevel(physiology: PhysiologyContent, level: ComplexityLevel): FunctionInfo[] {
  return physiology.functions.map((func) => {
    let description = func.description;
    if (level <= 2) {
      const firstSentence = description.split('.')[0];
      description = firstSentence.endsWith('.') ? firstSentence : `${firstSentence}.`;
    }
    return { name: func.name, description, importance: func.importance };
  });
}

function adaptMechanismsForLevel(physiology: PhysiologyContent, level: ComplexityLevel): MechanismInfo[] {
  return physiology.processes.map((process) => {
    const mechanism: MechanismInfo = { name: process.name, description: process.description };
    if (level >= 3 && process.steps.length > 0) {
      mechanism.steps = process.steps;
    }
    return mechanism;
  });
}

function adaptParametersForLevel(physiology: PhysiologyContent, level: ComplexityLevel): ParameterInfo[] {
  if (level < 2) return [];
  return physiology.normalParameters.map((param) => ({
    name: param.name,
    normalRange: param.normalRange,
    unit: param.unit,
    highImplications: level >= 3 ? param.highImplications : undefined,
    lowImplications: level >= 3 ? param.lowImplications : undefined,
  }));
}

function buildRelatedSystems(regionContent: RegionContent): RelatedSystem[] {
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

// ============================================================================
// Content Loading (real database content)
// ============================================================================

/**
 * Loads real EducationalContent from physiology databases for a region,
 * falling back to regionContentMapping if no database content exists.
 */
async function loadPhysiologyContent(
  regionId: string,
  level: ComplexityLevel,
  selectedTopicId: string | null
): Promise<PhysiologyContentData> {
  const regionEntry = getRegionPhysiologyEntry(regionId);
  const regionContent = REGION_CONTENT_MAP[regionId];

  if (!regionEntry && !regionContent) {
    throw new Error(`No physiology content found for region: ${regionId}`);
  }

  const regionName = regionEntry?.regionName ?? regionContent?.name ?? regionId;
  const topicRefs = getPhysiologyTopicsForRegion(regionId);

  // Load all topics for this region in parallel
  const loadedTopics: PhysiologyTopic[] = [];
  const loadedContents: EducationalContent[] = [];

  if (topicRefs.length > 0) {
    const contentPromises = topicRefs.map(async (ref) => {
      try {
        return await ref.load();
      } catch {
        return null;
      }
    });
    const results = await Promise.all(contentPromises);

    for (let i = 0; i < results.length; i++) {
      const ec = results[i];
      if (ec) {
        loadedContents.push(ec);
        loadedTopics.push(toPhysiologyTopic(ec, level, topicRefs[i]));
      }
    }
  }

  // Determine selected topic
  let activeTopicId = selectedTopicId;
  if (!activeTopicId && loadedTopics.length > 0) {
    activeTopicId = loadedTopics[0].id;
  }

  // Find the selected EducationalContent
  const selectedIdx = loadedContents.findIndex((ec) => ec.id === activeTopicId);
  const selectedEc = selectedIdx >= 0 ? loadedContents[selectedIdx] : null;
  const selectedTopic = selectedIdx >= 0 ? loadedTopics[selectedIdx] : null;

  // Build content from the selected EducationalContent if available
  if (selectedEc && selectedTopic) {
    const lc = getLevelContent(selectedEc, level);
    const relatedFromContent = buildRelatedFromContent(selectedEc);
    const relatedFromRegion = regionContent ? buildRelatedSystems(regionContent) : [];
    const allRelated = [...relatedFromContent, ...relatedFromRegion];

    // Build clinical notes
    const clinicalNotes: string[] = [];
    if (level >= 3 && lc?.clinicalNotes) {
      clinicalNotes.push(lc.clinicalNotes);
    }
    if (level >= 3 && regionContent?.clinicalNotes) {
      clinicalNotes.push(...regionContent.clinicalNotes);
    }

    // Build functions from the topic content + region content
    const functions: FunctionInfo[] = [];
    if (regionContent) {
      functions.push(...adaptFunctionsForLevel(regionContent.physiology, level));
    }

    // Build mechanisms from region content
    const mechanisms: MechanismInfo[] = [];
    if (regionContent) {
      mechanisms.push(...adaptMechanismsForLevel(regionContent.physiology, level));
    }

    // Build parameters from region content
    const parameters = regionContent ? adaptParametersForLevel(regionContent.physiology, level) : [];

    // Build homeostasis from region content
    const homeostasis = level >= 3 && regionContent ? regionContent.physiology.homeostasis : undefined;

    // System interactions from region content
    const systemInteractions = level >= 2 && regionContent ? regionContent.physiology.systemInteractions : undefined;

    return {
      regionId,
      regionName,
      complexityLevel: level,
      topics: loadedTopics,
      selectedTopicId: activeTopicId,
      summary: selectedTopic.summary,
      explanation: selectedTopic.explanation,
      analogies: selectedTopic.analogies,
      examples: selectedTopic.examples,
      keyTerms: selectedTopic.keyTerms,
      functions,
      mechanisms,
      normalParameters: parameters,
      homeostasis,
      relatedSystems: allRelated,
      systemInteractions,
      clinicalNotes: clinicalNotes.length > 0 ? clinicalNotes : undefined,
      media: buildMediaFromContent(selectedEc),
      citations: buildCitationsFromContent(selectedEc),
    };
  }

  // Fallback: use regionContentMapping data with generic adapters
  if (regionContent) {
    const summaryData = adaptSummaryForLevel(regionContent, level);
    const functions = adaptFunctionsForLevel(regionContent.physiology, level);
    const mechanisms = adaptMechanismsForLevel(regionContent.physiology, level);
    const parameters = adaptParametersForLevel(regionContent.physiology, level);
    const relatedSystems = buildRelatedSystems(regionContent);
    const homeostasis = level >= 3 ? regionContent.physiology.homeostasis : undefined;
    const systemInteractions = level >= 2 ? regionContent.physiology.systemInteractions : undefined;
    const clinicalNotes = level >= 3 ? regionContent.clinicalNotes : undefined;
    const media: MediaItem[] = regionContent.models.map((model) => ({
      id: model.name,
      type: '3d-model',
      filename: model.path,
      title: model.name,
      description: `${model.detailLevel} view`,
    }));

    // Generate key terms from region content
    const terms: KeyTerm[] = [];
    regionContent.physiology.functions.forEach((func) => {
      terms.push({ term: func.name, definition: func.description });
    });
    if (level >= 3) {
      regionContent.physiology.homeostasis.forEach((h) => {
        terms.push({ term: h.variable, definition: `${h.regulationMechanism}. Normal range: ${h.normalRange} ${h.unit}` });
      });
    }
    const maxTerms = level <= 2 ? 3 : level <= 4 ? 6 : 10;

    return {
      regionId,
      regionName: regionContent.name,
      complexityLevel: level,
      topics: loadedTopics,
      selectedTopicId: null,
      ...summaryData,
      keyTerms: terms.slice(0, maxTerms),
      functions,
      mechanisms,
      normalParameters: parameters,
      homeostasis,
      relatedSystems,
      systemInteractions,
      clinicalNotes,
      media,
      citations: defaultCitations(),
    };
  }

  throw new Error(`No physiology content found for region: ${regionId}`);
}

// ============================================================================
// Hook Implementation
// ============================================================================

/**
 * Hook for fetching and managing physiology content.
 *
 * Loads real EducationalContent from core/content/physiology databases,
 * mapped by region. Supports topic selection within a region.
 *
 * @param regionId - The anatomical region identifier
 * @param complexityLevel - The desired complexity level (1-5)
 * @returns Content data, loading state, error state, refetch, and topic selection
 */
export function usePhysiologyContent(
  regionId: string,
  complexityLevel: ComplexityLevel
): UsePhysiologyContentReturn {
  const [content, setContent] = useState<PhysiologyContentData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);

  // Track current request to handle race conditions
  const requestIdRef = useRef(0);

  const fetchContent = useCallback(async () => {
    const currentRequestId = ++requestIdRef.current;

    // Check cache
    const cached = getCachedContent(regionId, complexityLevel, selectedTopicId);
    if (cached) {
      setContent(cached);
      setIsLoading(false);
      setError(null);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const data = await loadPhysiologyContent(regionId, complexityLevel, selectedTopicId);

      if (currentRequestId === requestIdRef.current) {
        setCachedContent(regionId, complexityLevel, selectedTopicId, data);
        setContent(data);
        setIsLoading(false);
      }
    } catch (err) {
      if (currentRequestId === requestIdRef.current) {
        const message = err instanceof Error ? err.message : 'Failed to load physiology content';
        setError(message);
        setIsLoading(false);
      }
    }
  }, [regionId, complexityLevel, selectedTopicId]);

  // Reset selected topic when region changes
  useEffect(() => {
    setSelectedTopicId(null);
  }, [regionId]);

  // Fetch content when dependencies change
  useEffect(() => {
    fetchContent();
  }, [fetchContent]);

  const selectTopic = useCallback((topicId: string) => {
    setSelectedTopicId(topicId);
  }, []);

  return useMemo(
    () => ({
      content,
      isLoading,
      error,
      refetch: fetchContent,
      selectTopic,
      selectedTopicId,
    }),
    [content, isLoading, error, fetchContent, selectTopic, selectedTopicId]
  );
}

export default usePhysiologyContent;
