/**
 * Global Search Component
 *
 * Main search bar component with keyboard shortcut support, autocomplete,
 * voice search readiness, and comprehensive filtering capabilities.
 *
 * Wired to ContentService.searchAll() for unified search across all content
 * types: conditions, symptoms, procedures, anatomy, medications, specialties,
 * and glossary entries.
 */

import { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import { useContentSearch } from '../hooks/useContent';
import {
  useContentService,
  type UnifiedSearchResult,
  type ContentType,
  type KnowledgeNode,
} from '../services/ContentService';
import { SearchResults } from './SearchResults';
import { SearchFilters } from './SearchFilters';
import type {
  SearchResults as SearchResultsType,
  SearchResult,
  SearchCategory,
  RecentSearch,
  RelatedItem,
} from './types';
import './GlobalSearch.css';

// ============================================
// ContentType -> SearchCategory mapping
// ============================================

/** Map ContentService ContentType to search UI SearchCategory */
function contentTypeToSearchCategory(type: ContentType): SearchCategory {
  switch (type) {
    case 'condition':
      return 'conditions';
    case 'symptom':
      return 'symptoms';
    case 'medication':
      return 'medications';
    case 'procedure':
      return 'procedures';
    case 'anatomy':
      return 'anatomy';
    case 'specialty':
      return 'encyclopedia';
    case 'glossary':
      return 'encyclopedia';
    default:
      return 'encyclopedia';
  }
}

/** Generate a navigation path for a unified search result */
function getNavigationPath(result: UnifiedSearchResult): string {
  switch (result.type) {
    case 'condition':
      return `/conditions/${result.id.replace(/^condition:/, '')}`;
    case 'symptom':
      return `/symptoms/${result.id.replace(/^symptom:/, '')}`;
    case 'medication':
      return `/medications/${result.id.replace(/^medication:/, '')}`;
    case 'procedure':
      return `/procedures/${result.id.replace(/^procedure:/, '')}`;
    case 'anatomy':
      return `/anatomy/${result.id.replace(/^anatomy:/, '')}`;
    case 'specialty':
      return `/specialties/${result.id.replace(/^specialty:/, '')}`;
    case 'glossary':
      return `/glossary/${encodeURIComponent(result.id.replace(/^glossary:/, ''))}`;
    default:
      return `/search?q=${encodeURIComponent(result.name)}`;
  }
}

/** Get an icon for a content type */
function getContentTypeIcon(type: ContentType): string {
  switch (type) {
    case 'condition':
      return '\uD83C\uDFE5'; // hospital
    case 'symptom':
      return '\uD83E\uDE7A'; // stethoscope
    case 'medication':
      return '\uD83D\uDC8A'; // pill
    case 'procedure':
      return '\uD83D\uDD2C'; // microscope
    case 'anatomy':
      return '\uD83E\uDEC0'; // anatomical heart
    case 'specialty':
      return '\uD83D\uDC68\u200D\u2695\uFE0F'; // doctor
    case 'glossary':
      return '\uD83D\uDCD6'; // book
    default:
      return '\uD83D\uDD0D'; // magnifying glass
  }
}

/** Generate a navigation path for a knowledge graph node */
function getNavigationPathForNode(node: KnowledgeNode): string {
  const bareId = node.id.replace(/^(condition|symptom|medication|procedure|anatomy|specialty):/, '');
  switch (node.type) {
    case 'condition':
      return `/conditions/${bareId}`;
    case 'symptom':
      return `/symptoms/${bareId}`;
    case 'medication':
      return `/medications/${bareId}`;
    case 'procedure':
      return `/procedures/${bareId}`;
    case 'anatomy':
      return `/anatomy/${bareId}`;
    case 'specialty':
      return `/specialties/${bareId}`;
    default:
      return `/search?q=${encodeURIComponent(node.name)}`;
  }
}

/** Map a RelationshipType to a human-friendly label */
function relationshipLabel(rel: string): string {
  switch (rel) {
    case 'causes': return 'Symptom';
    case 'treats': return 'Treatment';
    case 'manifests-in': return 'Location';
    case 'diagnosed-by': return 'Diagnosis';
    case 'performed-on': return 'Procedure';
    case 'managed-by': return 'Specialist';
    case 'affects': return 'Affects';
    case 'associated-with': return 'Related';
    case 'specializes-in': return 'Specialty';
    default: return 'Related';
  }
}

/** Convert a KnowledgeNode to a RelatedItem */
function nodeToRelatedItem(node: KnowledgeNode, relationship: string): RelatedItem {
  return {
    id: node.id,
    name: node.name,
    type: node.type as RelatedItem['type'],
    relationship: relationshipLabel(relationship),
    navigationPath: getNavigationPathForNode(node),
  };
}

/** Max related items to attach per search result */
const MAX_RELATED_PER_RESULT = 6;

/** Convert UnifiedSearchResult[] to the SearchResultsType expected by SearchResults component */
function unifiedResultsToSearchResults(
  unifiedResults: UnifiedSearchResult[],
  queryText: string,
  searchTimeMs: number,
  categoryFilter: SearchCategory,
): SearchResultsType {
  // Filter by category if not 'all'
  const filtered =
    categoryFilter === 'all'
      ? unifiedResults
      : unifiedResults.filter(
          (r) => contentTypeToSearchCategory(r.type) === categoryFilter,
        );

  // Convert to SearchResult format
  const results: SearchResult[] = filtered.map((r) => ({
    id: r.id,
    category: contentTypeToSearchCategory(r.type),
    source: 'encyclopedia' as const,
    title: r.name,
    description: r.description || r.spanishName || '',
    score: Math.round(r.score * 100),
    matchType: r.score >= 0.8 ? 'exact' as const : r.score >= 0.5 ? 'keyword' as const : 'fuzzy' as const,
    snippet: r.description,
    matchedTerms: [queryText],
    navigationPath: getNavigationPath(r),
    icon: getContentTypeIcon(r.type),
  }));

  // Calculate category breakdown from ALL results (not filtered)
  const categoryBreakdown: Partial<Record<SearchCategory, number>> = {};
  for (const r of unifiedResults) {
    const cat = contentTypeToSearchCategory(r.type);
    categoryBreakdown[cat] = (categoryBreakdown[cat] || 0) + 1;
  }

  return {
    query: queryText,
    results,
    totalMatches: filtered.length,
    searchTimeMs,
    categoryBreakdown: categoryBreakdown as Record<SearchCategory, number>,
    relatedSearches: [],
  };
}

// ============================================
// Recent search history helpers
// ============================================

const RECENT_SEARCH_KEY = 'soma-recent-searches';

function loadRecentSearches(): RecentSearch[] {
  try {
    const stored = localStorage.getItem(RECENT_SEARCH_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveRecentSearch(query: string, resultCount: number): RecentSearch[] {
  const recent = loadRecentSearches().filter(
    (r) => r.query.toLowerCase() !== query.toLowerCase(),
  );
  const updated: RecentSearch[] = [
    { query, timestamp: Date.now(), resultCount },
    ...recent,
  ].slice(0, 20);
  try {
    localStorage.setItem(RECENT_SEARCH_KEY, JSON.stringify(updated));
  } catch {
    // Ignore storage errors
  }
  return updated;
}

function clearRecentSearches(): void {
  try {
    localStorage.removeItem(RECENT_SEARCH_KEY);
  } catch {
    // Ignore
  }
}

// ============================================
// Props
// ============================================

interface GlobalSearchProps {
  /** Callback when a result is selected */
  onResultSelect?: (result: {
    id: string;
    category: SearchCategory;
    navigationPath?: string;
    structureId?: string;
    entryId?: string;
  }) => void;

  /** Callback when search is opened/closed */
  onOpenChange?: (isOpen: boolean) => void;

  /** Initial open state */
  defaultOpen?: boolean;

  /** Placeholder text */
  placeholder?: string;

  /** Show as inline search bar (not modal) */
  inline?: boolean;

  /** Auto focus on mount */
  autoFocus?: boolean;

  /** Show voice search button (placeholder for future implementation) */
  showVoiceSearch?: boolean;

  /** Additional CSS class */
  className?: string;
}

// ============================================
// Main Component
// ============================================

export function GlobalSearch({
  onResultSelect,
  onOpenChange,
  defaultOpen = false,
  placeholder = 'Search anatomy, conditions, medications...',
  inline = false,
  autoFocus = false,
  showVoiceSearch = true,
  className = '',
}: GlobalSearchProps) {
  // State
  const [isOpen, setIsOpen] = useState(defaultOpen || inline);
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<SearchCategory>('all');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
  const [recentSearches, setRecentSearches] = useState<RecentSearch[]>([]);
  const [searchStartTime, setSearchStartTime] = useState(0);

  // Refs
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // ---------------------------------------------------------------------------
  // Content service for knowledge graph traversal
  // ---------------------------------------------------------------------------
  const contentService = useContentService();

  // ---------------------------------------------------------------------------
  // Wire to ContentService.searchAll() via the useContentSearch hook.
  // The hook internally debounces (150ms) and calls ContentService.searchAll().
  // ---------------------------------------------------------------------------
  const {
    results: unifiedResults,
    isSearching,
    totalCount,
  } = useContentSearch(query);

  // Track search timing
  useEffect(() => {
    if (query.trim().length >= 2) {
      setSearchStartTime(performance.now());
    }
  }, [query]);

  // ---------------------------------------------------------------------------
  // Enrich a single search result with related items from the knowledge graph.
  //
  // Strategy per content type:
  //   condition -> related symptoms, treatments (medications), procedures
  //   anatomy   -> related conditions, symptoms
  //   symptom   -> possible conditions (including "do not miss" diagnoses)
  //   medication -> conditions it treats
  //   procedure  -> anatomy regions, conditions
  //   specialty  -> conditions it manages
  // ---------------------------------------------------------------------------
  const enrichResultWithRelated = useCallback(
    (result: SearchResult, contentType: ContentType): SearchResult => {
      const graph = contentService.getGraph();
      const related: RelatedItem[] = [];

      try {
        switch (contentType) {
          case 'condition': {
            // Symptoms for this condition
            const symptoms = graph.getSymptomsForCondition(result.id);
            for (const s of symptoms.slice(0, 3)) {
              related.push(nodeToRelatedItem(s, 'causes'));
            }
            // Medications (treatments)
            const meds = graph.getMedicationsForCondition(result.id);
            for (const m of meds.slice(0, 2)) {
              related.push(nodeToRelatedItem(m, 'treats'));
            }
            // Procedures
            const procs = graph.getProceduresForCondition(result.id);
            for (const p of procs.slice(0, 1)) {
              related.push(nodeToRelatedItem(p, 'diagnosed-by'));
            }
            break;
          }

          case 'anatomy': {
            // Conditions that affect this region
            const conditions = graph.getConditionsForRegion(result.id);
            for (const c of conditions.slice(0, 3)) {
              related.push(nodeToRelatedItem(c, 'affects'));
            }
            // Symptoms that manifest here
            const symptoms = graph.getRelated(result.id, 'manifests-in', 'symptom');
            for (const s of symptoms.slice(0, 3)) {
              related.push(nodeToRelatedItem(s, 'manifests-in'));
            }
            break;
          }

          case 'symptom': {
            // Possible conditions (including "do not miss" diagnoses)
            const conditions = graph.getRelated(result.id, 'causes', 'condition')
              .concat(graph.getRelated(result.id, 'associated-with', 'condition'));
            const seen = new Set<string>();
            for (const c of conditions.slice(0, 4)) {
              if (seen.has(c.id)) continue;
              seen.add(c.id);
              related.push(nodeToRelatedItem(c, 'causes'));
            }
            // Anatomy where it manifests
            const anatomy = graph.getAnatomyForSymptom(result.id);
            for (const a of anatomy.slice(0, 2)) {
              related.push(nodeToRelatedItem(a, 'manifests-in'));
            }
            break;
          }

          case 'medication': {
            // Conditions this medication treats
            const conditions = graph.getRelated(result.id, 'treats', 'condition');
            for (const c of conditions.slice(0, 4)) {
              related.push(nodeToRelatedItem(c, 'treats'));
            }
            // Body systems it affects
            const systems = graph.getSystemsForMedication(result.id);
            for (const s of systems.slice(0, 2)) {
              related.push(nodeToRelatedItem(s, 'affects'));
            }
            break;
          }

          case 'procedure': {
            // Anatomy regions where it's performed
            const anatomy = graph.getAnatomyForProcedure(result.id);
            for (const a of anatomy.slice(0, 3)) {
              related.push(nodeToRelatedItem(a, 'performed-on'));
            }
            // Conditions it diagnoses/treats
            const conditions = graph.getRelated(result.id, 'diagnosed-by', 'condition')
              .concat(graph.getRelated(result.id, 'performed-on', 'condition'));
            for (const c of conditions.slice(0, 3)) {
              related.push(nodeToRelatedItem(c, 'diagnosed-by'));
            }
            break;
          }

          case 'specialty': {
            // Conditions this specialty manages
            const nodes = graph.getNodesForSpecialty(result.id);
            const conditionNodes = nodes.filter((n) => n.type === 'condition');
            for (const c of conditionNodes.slice(0, MAX_RELATED_PER_RESULT)) {
              related.push(nodeToRelatedItem(c, 'specializes-in'));
            }
            break;
          }
        }
      } catch {
        // Gracefully handle missing nodes - return result without related items
      }

      if (related.length === 0) return result;
      return { ...result, relatedItems: related.slice(0, MAX_RELATED_PER_RESULT) };
    },
    [contentService],
  );

  // Convert unified results to the SearchResultsType for the UI, enriched with
  // knowledge-graph cross-references.
  const results: SearchResultsType | null = useMemo(() => {
    if (!query.trim() || query.trim().length < 2 || unifiedResults.length === 0) {
      // If still searching, show null (loading state). If done and empty, show empty results.
      if (!isSearching && query.trim().length >= 2) {
        return unifiedResultsToSearchResults([], query, 0, selectedCategory);
      }
      return null;
    }

    const elapsed = searchStartTime > 0 ? performance.now() - searchStartTime : 0;
    const base = unifiedResultsToSearchResults(unifiedResults, query, elapsed, selectedCategory);

    // Enrich each result with knowledge-graph related items.
    // We map back to the original unified result to get the ContentType.
    const idToType = new Map<string, ContentType>();
    for (const ur of unifiedResults) {
      idToType.set(ur.id, ur.type);
    }

    base.results = base.results.map((r) => {
      const contentType = idToType.get(r.id);
      if (!contentType) return r;
      return enrichResultWithRelated(r, contentType);
    });

    return base;
  }, [unifiedResults, query, selectedCategory, isSearching, searchStartTime, enrichResultWithRelated]);

  // Save to recent searches when results arrive
  useEffect(() => {
    if (
      !isSearching &&
      query.trim().length >= 3 &&
      unifiedResults.length > 0
    ) {
      const updated = saveRecentSearch(query.trim(), totalCount);
      setRecentSearches(updated);
    }
  }, [isSearching, query, unifiedResults.length, totalCount]);

  // Load recent searches on mount
  useEffect(() => {
    setRecentSearches(loadRecentSearches());
  }, []);

  // ============================================
  // Keyboard Shortcuts
  // ============================================

  useEffect(() => {
    if (inline) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd/Ctrl + K to open search
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
        onOpenChange?.(true);
      }

      // Escape to close
      if (e.key === 'Escape' && isOpen) {
        e.preventDefault();
        handleClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [inline, isOpen, onOpenChange]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Auto focus on mount
  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  // ============================================
  // Event Handlers
  // ============================================

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setQuery('');
    setSelectedSuggestionIndex(-1);
    onOpenChange?.(false);
  }, [onOpenChange]);

  const handleResultClick = useCallback((result: {
    id: string;
    category: SearchCategory;
    navigationPath?: string;
    structureId?: string;
    entryId?: string;
  }) => {
    onResultSelect?.(result);
    if (!inline) {
      handleClose();
    }
  }, [inline, handleClose, onResultSelect]);

  /** Handle clicks on related-item chips within a search result */
  const handleRelatedItemClick = useCallback((item: RelatedItem) => {
    // Map the knowledge graph node type to a SearchCategory for the callback
    const typeToCategory: Record<RelatedItem['type'], SearchCategory> = {
      condition: 'conditions',
      symptom: 'symptoms',
      anatomy: 'anatomy',
      medication: 'medications',
      procedure: 'procedures',
      specialty: 'encyclopedia',
    };

    onResultSelect?.({
      id: item.id,
      category: typeToCategory[item.type] || 'encyclopedia',
      navigationPath: item.navigationPath,
    });
    if (!inline) {
      handleClose();
    }
  }, [inline, handleClose, onResultSelect]);

  const handleRecentSearchClick = useCallback((recent: RecentSearch) => {
    setQuery(recent.query);
  }, []);

  const handleClearHistory = useCallback(() => {
    clearRecentSearches();
    setRecentSearches([]);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    const totalItems = results?.results.length || 0;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedSuggestionIndex((prev) =>
          prev < totalItems - 1 ? prev + 1 : prev
        );
        break;

      case 'ArrowUp':
        e.preventDefault();
        setSelectedSuggestionIndex((prev) => (prev > -1 ? prev - 1 : -1));
        break;

      case 'Enter':
        e.preventDefault();
        if (selectedSuggestionIndex >= 0 && results?.results[selectedSuggestionIndex]) {
          handleResultClick(results.results[selectedSuggestionIndex]);
        }
        break;

      case 'Escape':
        if (!inline) {
          handleClose();
        } else {
          setQuery('');
        }
        break;
    }
  }, [
    results,
    selectedSuggestionIndex,
    inline,
    handleClose,
    handleResultClick,
  ]);

  const handleVoiceSearch = useCallback(() => {
    // Placeholder for voice search implementation
    // Would integrate with Web Speech API or native voice recognition
    console.log('Voice search triggered - implementation pending');
  }, []);

  // ============================================
  // Render
  // ============================================

  // Render trigger button for modal mode
  if (!inline && !isOpen) {
    return (
      <button
        className={`global-search-trigger ${className}`}
        onClick={() => {
          setIsOpen(true);
          onOpenChange?.(true);
        }}
      >
        <span className="search-icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
        </span>
        <span className="trigger-text">Search...</span>
        <span className="shortcut-hint">
          <kbd>Cmd</kbd>
          <kbd>K</kbd>
        </span>
      </button>
    );
  }

  // Render inline or modal search
  const searchContent = (
    <div
      ref={containerRef}
      className={`global-search ${inline ? 'inline' : 'modal'} ${className}`}
    >
      {/* Search Header */}
      <div className="search-header">
        <div className="search-input-wrapper">
          <span className="search-icon">
            {isSearching ? (
              <svg className="spinner" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" strokeDasharray="32" strokeDashoffset="32">
                  <animate attributeName="stroke-dashoffset" values="32;0" dur="0.8s" repeatCount="indefinite" />
                </circle>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            )}
          </span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className="search-input"
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
          />
          {query && (
            <button
              className="clear-btn"
              onClick={() => {
                setQuery('');
                inputRef.current?.focus();
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          )}
          {showVoiceSearch && (
            <button
              className="voice-btn"
              onClick={handleVoiceSearch}
              title="Voice search (coming soon)"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                <line x1="12" y1="19" x2="12" y2="23" />
                <line x1="8" y1="23" x2="16" y2="23" />
              </svg>
            </button>
          )}
          <button
            className="filter-toggle-btn"
            onClick={() => setShowFilters(!showFilters)}
            title="Toggle filters"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="4" y1="21" x2="4" y2="14" />
              <line x1="4" y1="10" x2="4" y2="3" />
              <line x1="12" y1="21" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12" y2="3" />
              <line x1="20" y1="21" x2="20" y2="16" />
              <line x1="20" y1="12" x2="20" y2="3" />
              <line x1="1" y1="14" x2="7" y2="14" />
              <line x1="9" y1="8" x2="15" y2="8" />
              <line x1="17" y1="16" x2="23" y2="16" />
            </svg>
          </button>
          {!inline && (
            <button className="close-btn" onClick={handleClose}>
              <kbd>Esc</kbd>
            </button>
          )}
        </div>

        {/* Filters */}
        {showFilters && (
          <SearchFilters
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            categoryBreakdown={results?.categoryBreakdown}
          />
        )}
      </div>

      {/* Search Body */}
      <div className="search-body">
        {/* No query state - show recent searches */}
        {query.length < 2 && recentSearches.length > 0 && (
          <div className="recent-searches">
            <div className="section-header">
              <span className="section-title">Recent Searches</span>
              <button className="clear-history-btn" onClick={handleClearHistory}>
                Clear
              </button>
            </div>
            <div className="recent-list">
              {recentSearches.slice(0, 5).map((recent, index) => (
                <button
                  key={index}
                  className="recent-item"
                  onClick={() => handleRecentSearchClick(recent)}
                >
                  <span className="recent-icon">{'\uD83D\uDD50'}</span>
                  <span className="recent-query">{recent.query}</span>
                  <span className="recent-count">{recent.resultCount} results</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Quick suggestions */}
        {query.length < 2 && recentSearches.length === 0 && (
          <div className="quick-suggestions">
            <p className="hint">Try searching for:</p>
            <div className="suggestion-chips">
              <button onClick={() => setQuery('heart')}>Heart</button>
              <button onClick={() => setQuery('diabetes')}>Diabetes</button>
              <button onClick={() => setQuery('headache')}>Headache</button>
              <button onClick={() => setQuery('metformin')}>Metformin</button>
              <button onClick={() => setQuery('liver')}>Liver</button>
            </div>
          </div>
        )}

        {/* Search Results */}
        {results && (
          <SearchResults
            results={results}
            onResultClick={handleResultClick}
            onRelatedItemClick={handleRelatedItemClick}
            selectedIndex={selectedSuggestionIndex}
            query={query}
            groupByCategory={true}
            maxPerCategory={5}
          />
        )}

        {/* Loading state */}
        {isSearching && !results && (
          <div className="loading-state">
            <div className="loading-spinner" />
            <p>Searching...</p>
          </div>
        )}
      </div>

      {/* Search Footer */}
      <div className="search-footer">
        <div className="footer-hints">
          <span><kbd>{'\u2191'}</kbd><kbd>{'\u2193'}</kbd> to navigate</span>
          <span><kbd>Enter</kbd> to select</span>
          <span><kbd>Esc</kbd> to close</span>
        </div>
        {results && (
          <span className="result-stats">
            {results.totalMatches} results in {results.searchTimeMs.toFixed(0)}ms
          </span>
        )}
      </div>
    </div>
  );

  // Modal wrapper
  if (!inline) {
    return (
      <div className="global-search-overlay" onClick={handleClose}>
        <div onClick={(e) => e.stopPropagation()}>
          {searchContent}
        </div>
      </div>
    );
  }

  return searchContent;
}

export default GlobalSearch;
