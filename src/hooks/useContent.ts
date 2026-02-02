/**
 * useContent hooks
 *
 * React hooks for consuming the unified ContentService.
 * All hooks must be used inside a <ContentProvider>.
 *
 * Hooks:
 *   useContentSearch(query)          — search across ALL content types
 *   useConditionInfo(conditionId)    — full condition info with related content
 *   useSymptomLookup(symptomId)      — symptom with possible causes
 *   useExplanation(topicId, level)   — level-appropriate explanation
 */

import { useState, useEffect, useRef } from 'react';
import {
  useContentService,
  type UnifiedSearchResult,
  type ConditionInfo,
  type SymptomInfo,
  type ExplanationLevelNumber,
} from '../services/ContentService';
import type { SearchOptions } from '@core/knowledge-graph/search-engine';

// ===========================================================================
// useContentSearch
// ===========================================================================

export interface ContentSearchState {
  /** Current search results */
  results: UnifiedSearchResult[];
  /** True while computing results (always synchronous so effectively instant) */
  isSearching: boolean;
  /** Total result count before limit */
  totalCount: number;
}

/**
 * Search across all content types: conditions, symptoms, procedures, anatomy,
 * specialties, medications, and glossary entries.
 *
 * Uses MedicalSearchEngine for fuzzy, bilingual, synonym-aware matching.
 *
 * @param query - The search string (can be English or Spanish)
 * @param options - Optional search options (language, limit, type filters, etc.)
 * @returns Search state with results sorted by relevance score
 *
 * @example
 * ```tsx
 * const { results, isSearching } = useContentSearch('dolor de pecho');
 * ```
 */
export function useContentSearch(
  query: string,
  options?: SearchOptions & { includeGlossary?: boolean },
): ContentSearchState {
  const service = useContentService();
  const [state, setState] = useState<ContentSearchState>({
    results: [],
    isSearching: false,
    totalCount: 0,
  });

  // Debounce: avoid re-searching on every keystroke
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const latestQuery = useRef(query);
  latestQuery.current = query;

  useEffect(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    const trimmed = query.trim();
    if (!trimmed) {
      setState({ results: [], isSearching: false, totalCount: 0 });
      return;
    }

    setState((prev) => ({ ...prev, isSearching: true }));

    debounceRef.current = setTimeout(() => {
      // Only run if the query hasn't changed during the debounce window
      if (latestQuery.current.trim() !== trimmed) return;

      service.searchAll(trimmed, options).then((results) => {
        // Check again after async — query may have changed
        if (latestQuery.current.trim() !== trimmed) return;
        setState({
          results,
          isSearching: false,
          totalCount: results.length,
        });
      });
    }, 150);

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
    // We intentionally serialise options to avoid reference-identity churn
     
  }, [query, service, JSON.stringify(options)]);

  return state;
}

// ===========================================================================
// useConditionInfo
// ===========================================================================

export interface ConditionInfoState {
  /** Aggregated condition info or null if not found / not yet loaded */
  info: ConditionInfo | null;
  /** True during first computation */
  isLoading: boolean;
  /** Non-null if the condition was not found */
  error: string | null;
}

/**
 * Get full condition info including symptoms, medications, procedures,
 * specialists, anatomy regions, glossary entry, and multi-level explanations.
 *
 * Uses the KnowledgeGraphImpl for relationship traversal and enriches
 * with data from the specialty map, anatomy encyclopedia, and glossary.
 *
 * @param conditionId - e.g. "hypertension" or "condition:hypertension"
 * @returns Aggregated condition data
 *
 * @example
 * ```tsx
 * const { info, isLoading, error } = useConditionInfo('hypertension');
 * if (info) {
 *   console.log(info.symptoms.map(s => s.name));
 * }
 * ```
 */
export function useConditionInfo(conditionId: string): ConditionInfoState {
  const service = useContentService();
  const [state, setState] = useState<ConditionInfoState>({
    info: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    if (!conditionId) {
      setState({ info: null, isLoading: false, error: 'No condition ID provided' });
      return;
    }

    setState((prev) => ({ ...prev, isLoading: true }));

    service.getConditionInfo(conditionId).then((info) => {
      if (!info) {
        setState({
          info: null,
          isLoading: false,
          error: `Condition "${conditionId}" not found in the knowledge graph`,
        });
      } else {
        setState({ info, isLoading: false, error: null });
      }
    });
  }, [conditionId, service]);

  return state;
}

// ===========================================================================
// useSymptomLookup
// ===========================================================================

export interface SymptomLookupState {
  /** Aggregated symptom info or null if not found */
  info: SymptomInfo | null;
  /** True during first computation */
  isLoading: boolean;
  /** Non-null if the symptom was not found */
  error: string | null;
}

/**
 * Look up a symptom by its ID, returning the full SymptomEntry along with
 * possible conditions (from the symptom database), "do-not-miss" diagnoses,
 * related anatomy from the knowledge graph, and glossary definitions.
 *
 * @param symptomId - e.g. "SX-001" (symptom database ID)
 * @returns Enriched symptom data
 *
 * @example
 * ```tsx
 * const { info } = useSymptomLookup('SX-001');
 * if (info) {
 *   console.log('Possible causes:', info.entry.possibleCauses);
 *   console.log('Do not miss:', info.doNotMiss);
 * }
 * ```
 */
export function useSymptomLookup(symptomId: string): SymptomLookupState {
  const service = useContentService();
  const [state, setState] = useState<SymptomLookupState>({
    info: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    if (!symptomId) {
      setState({ info: null, isLoading: false, error: 'No symptom ID provided' });
      return;
    }

    setState((prev) => ({ ...prev, isLoading: true }));

    service.getSymptomInfo(symptomId).then((info) => {
      if (!info) {
        setState({
          info: null,
          isLoading: false,
          error: `Symptom "${symptomId}" not found in the database`,
        });
      } else {
        setState({ info, isLoading: false, error: null });
      }
    });
  }, [symptomId, service]);

  return state;
}

// ===========================================================================
// useExplanation
// ===========================================================================

export interface ExplanationState {
  /** The level-appropriate explanation text, or null if not available */
  text: string | null;
  /** Metadata about the target explanation level */
  levelInfo: {
    name: string;
    label: string;
    audience: string;
    constraints: string[];
  };
  /** True during first computation */
  isLoading: boolean;
  /** Non-null if no explanation was found */
  error: string | null;
}

/**
 * Get a complexity-level-aware explanation for a medical topic.
 *
 * The 5-level explanation system maps content to audience tiers:
 *   1 — Child (ages 5-12)
 *   2 — Patient (general adult)
 *   3 — Nursing / Allied Health
 *   4 — Medical Student
 *   5 — Physician
 *
 * Looks in symptom-level explanations, condition explanations, and the
 * glossary (for levels 1-2) in priority order.
 *
 * @param topicId - Symptom ID (e.g. "SX-001"), condition key (e.g. "hypertension"),
 *                  or glossary term (e.g. "Myocardial infarction")
 * @param level - Explanation tier (1-5)
 * @returns Explanation text and level metadata
 *
 * @example
 * ```tsx
 * const { text, levelInfo } = useExplanation('hypertension', 2);
 * // text = patient-level explanation of hypertension
 * // levelInfo.name = "Patient"
 * ```
 */
export function useExplanation(
  topicId: string,
  level: 1 | 2 | 3 | 4 | 5,
): ExplanationState {
  const service = useContentService();
  const [state, setState] = useState<ExplanationState>({
    text: null,
    levelInfo: { name: '', label: '', audience: '', constraints: [] },
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const lvl = level as ExplanationLevelNumber;

    Promise.all([
      service.getExplanationLevel(lvl),
      topicId ? service.getExplanation(topicId, lvl) : Promise.resolve(undefined),
    ]).then(([levelMeta, text]) => {
      const levelInfo = {
        name: levelMeta.name,
        label: levelMeta.label,
        audience: levelMeta.audience,
        constraints: levelMeta.constraints,
      };

      if (!topicId) {
        setState({
          text: null,
          levelInfo,
          isLoading: false,
          error: 'No topic ID provided',
        });
        return;
      }

      if (!text) {
        setState({
          text: null,
          levelInfo,
          isLoading: false,
          error: `No level-${level} explanation found for "${topicId}". ` +
            'Use getExplanationPrompt() to generate one via an LLM.',
        });
        return;
      }

      setState({ text, levelInfo, isLoading: false, error: null });
    });
  }, [topicId, level, service]);

  return state;
}
