/**
 * Search Results Component
 *
 * Displays search results with category grouping, highlighting,
 * and keyboard navigation support.
 */

import { useMemo, useCallback } from 'react';
import type {
  SearchResults as SearchResultsType,
  SearchResult,
  SearchCategory,
  RelatedItem,
} from './types';

// ============================================
// Props
// ============================================

interface SearchResultsProps {
  /** Search results to display */
  results: SearchResultsType;

  /** Callback when a result is clicked */
  onResultClick: (result: {
    id: string;
    category: SearchCategory;
    navigationPath?: string;
    structureId?: string;
    entryId?: string;
  }) => void;

  /** Callback when a related item chip is clicked */
  onRelatedItemClick?: (item: RelatedItem) => void;

  /** Currently selected result index for keyboard navigation */
  selectedIndex?: number;

  /** Search query for highlighting */
  query: string;

  /** Loading state */
  isLoading?: boolean;

  /** Whether to group results by category */
  groupByCategory?: boolean;

  /** Maximum results to show per category when grouped */
  maxPerCategory?: number;
}

// ============================================
// Category Configuration
// ============================================

const CATEGORY_CONFIG: Record<SearchCategory, {
  label: string;
  icon: string;
  color: string;
}> = {
  all: { label: 'All', icon: '🔍', color: '#6b7280' },
  anatomy: { label: 'Anatomy', icon: '🫀', color: '#ef4444' },
  conditions: { label: 'Conditions', icon: '🏥', color: '#f59e0b' },
  medications: { label: 'Medications', icon: '💊', color: '#10b981' },
  symptoms: { label: 'Symptoms', icon: '🤒', color: '#f97316' },
  procedures: { label: 'Procedures', icon: '🔬', color: '#6366f1' },
  'lab-tests': { label: 'Lab Tests', icon: '🧪', color: '#8b5cf6' },
  physiology: { label: 'Physiology', icon: '⚡', color: '#06b6d4' },
  encyclopedia: { label: 'Encyclopedia', icon: '📚', color: '#3b82f6' },
};

// ============================================
// Main Component
// ============================================

export function SearchResults({
  results,
  onResultClick,
  onRelatedItemClick,
  selectedIndex = -1,
  query,
  isLoading = false,
  groupByCategory = false,
  maxPerCategory = 5,
}: SearchResultsProps) {
  // Group results by category if needed
  const groupedResults = useMemo(() => {
    if (!groupByCategory) return null;

    const groups = new Map<SearchCategory, SearchResult[]>();

    for (const result of results.results) {
      const category = result.category;
      if (!groups.has(category)) {
        groups.set(category, []);
      }
      const categoryResults = groups.get(category)!;
      if (categoryResults.length < maxPerCategory) {
        categoryResults.push(result);
      }
    }

    return groups;
  }, [results.results, groupByCategory, maxPerCategory]);

  // Handle result click
  const handleResultClick = useCallback(
    (result: SearchResult) => {
      onResultClick({
        id: result.id,
        category: result.category,
        navigationPath: result.navigationPath,
        structureId: result.structureId,
        entryId: result.entryId,
      });
    },
    [onResultClick]
  );

  // Loading state
  if (isLoading) {
    return (
      <div className="search-results loading">
        <div className="loading-skeleton">
          {[1, 2, 3].map((i) => (
            <div key={i} className="skeleton-item">
              <div className="skeleton-icon" />
              <div className="skeleton-content">
                <div className="skeleton-title" />
                <div className="skeleton-description" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Empty state
  if (results.results.length === 0) {
    return (
      <div className="search-results empty">
        <div className="empty-state">
          <span className="empty-icon">🔍</span>
          <p className="empty-title">No results found</p>
          <p className="empty-description">
            Try adjusting your search terms or filters
          </p>
          {results.didYouMean && results.didYouMean.length > 0 && (
            <div className="did-you-mean">
              <span>Did you mean: </span>
              {results.didYouMean.map((suggestion, i) => (
                <button
                  key={i}
                  className="suggestion-link"
                  onClick={() => {
                    // This would typically trigger a new search
                    console.log('Search for:', suggestion);
                  }}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  // Render grouped results
  if (groupByCategory && groupedResults) {
    return (
      <div className="search-results grouped">
        {Array.from(groupedResults.entries()).map(([category, categoryResults]) => {
          const config = CATEGORY_CONFIG[category];
          const totalInCategory = results.categoryBreakdown?.[category] || categoryResults.length;

          return (
            <div key={category} className="result-group">
              <div className="group-header">
                <span className="group-icon">{config.icon}</span>
                <span className="group-label">{config.label}</span>
                <span className="group-count">{totalInCategory}</span>
              </div>
              <div className="group-results">
                {categoryResults.map((result, idx) => (
                  <ResultItem
                    key={result.id}
                    result={result}
                    query={query}
                    isSelected={false}
                    onClick={() => handleResultClick(result)}
                    onRelatedItemClick={onRelatedItemClick}
                  />
                ))}
                {totalInCategory > maxPerCategory && (
                  <button className="view-more-btn">
                    View {totalInCategory - maxPerCategory} more {config.label.toLowerCase()}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  // Render flat list
  return (
    <div className="search-results flat">
      {results.results.map((result, index) => (
        <ResultItem
          key={result.id}
          result={result}
          query={query}
          isSelected={index === selectedIndex}
          onClick={() => handleResultClick(result)}
          onRelatedItemClick={onRelatedItemClick}
        />
      ))}

      {/* Related searches */}
      {results.relatedSearches && results.relatedSearches.length > 0 && (
        <div className="related-searches">
          <span className="related-label">Related searches:</span>
          <div className="related-list">
            {results.relatedSearches.slice(0, 5).map((term, i) => (
              <button key={i} className="related-item">
                {term}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================
// Result Item Component
// ============================================

interface ResultItemProps {
  result: SearchResult;
  query: string;
  isSelected: boolean;
  onClick: () => void;
  onRelatedItemClick?: (item: RelatedItem) => void;
}

/** Icon map for related item types */
const RELATED_TYPE_ICON: Record<RelatedItem['type'], string> = {
  condition: '\uD83C\uDFE5',
  symptom: '\uD83E\uDE7A',
  anatomy: '\uD83E\uDEC0',
  medication: '\uD83D\uDC8A',
  procedure: '\uD83D\uDD2C',
  specialty: '\uD83D\uDC68\u200D\u2695\uFE0F',
};

function ResultItem({ result, query, isSelected, onClick, onRelatedItemClick }: ResultItemProps) {
  const config = CATEGORY_CONFIG[result.category] || CATEGORY_CONFIG.all;

  return (
    <div className={`result-item-wrapper ${isSelected ? 'selected' : ''}`}>
      <button
        className={`result-item ${isSelected ? 'selected' : ''}`}
        onClick={onClick}
        style={{ '--result-color': config.color } as React.CSSProperties}
      >
        <span className="result-icon">{result.icon || config.icon}</span>
        <div className="result-content">
          <div className="result-header">
            <span className="result-title">
              <HighlightText text={result.title} query={query} />
            </span>
            <span
              className="result-category"
              style={{ backgroundColor: `${config.color}20`, color: config.color }}
            >
              {config.label}
            </span>
          </div>
          <p className="result-description">
            {result.snippet ? (
              <HighlightText text={result.snippet} query={query} />
            ) : (
              <HighlightText text={result.description} query={query} />
            )}
          </p>
          {result.matchedTerms && result.matchedTerms.length > 0 && (
            <div className="result-matched-terms">
              {result.matchedTerms.slice(0, 3).map((term, i) => (
                <span key={i} className="matched-term">
                  {term}
                </span>
              ))}
            </div>
          )}
        </div>
        <span className="result-score" title={`Relevance: ${result.score}%`}>
          {result.matchType === 'exact' && '\u2B50'}
        </span>
      </button>

      {/* Related items from knowledge graph */}
      {result.relatedItems && result.relatedItems.length > 0 && (
        <div className="related-items">
          <span className="related-items-label">Related:</span>
          <div className="related-items-list">
            {result.relatedItems.map((item) => (
              <button
                key={item.id}
                className="related-item-chip"
                title={`${item.relationship}: ${item.name}`}
                onClick={(e) => {
                  e.stopPropagation();
                  onRelatedItemClick?.(item);
                }}
              >
                <span className="related-item-icon">
                  {RELATED_TYPE_ICON[item.type] || '\uD83D\uDD17'}
                </span>
                <span className="related-item-name">{item.name}</span>
                <span className="related-item-rel">{item.relationship}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================
// Highlight Text Component
// ============================================

interface HighlightTextProps {
  text: string;
  query: string;
}

function HighlightText({ text, query }: HighlightTextProps) {
  if (!query || query.length < 2) {
    return <>{text}</>;
  }

  const parts = text.split(new RegExp(`(${escapeRegex(query)})`, 'gi'));

  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <mark key={i} className="highlight">
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

function escapeRegex(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ============================================
// Styles (inline for component encapsulation)
// ============================================

// Note: Styles should be defined in GlobalSearch.css or a separate stylesheet

export default SearchResults;
