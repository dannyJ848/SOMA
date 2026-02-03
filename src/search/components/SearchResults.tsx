/**
 * SearchResults - Results display component
 * Renders search results with highlighting and pagination
 */

import React, { useCallback, useMemo } from 'react';
import { useSearchContext } from './SearchProvider';
import SearchHighlight from './SearchHighlight';
import { SearchResult, SearchCategory } from '../core/searchEngine';

export interface SearchResultsProps {
  showCategories?: boolean;
  showPagination?: boolean;
  showResultCount?: boolean;
  layout?: 'list' | 'grid' | 'compact';
  onResultClick?: (result: SearchResult) => void;
  emptyMessage?: string;
  className?: string;
}

// Category display configuration
const CATEGORY_CONFIG: Record<SearchCategory, { label: string; color: string; icon: string }> = {
  anatomy: { label: 'Anatomy', color: 'bg-blue-100 text-blue-800', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
  conditions: { label: 'Conditions', color: 'bg-red-100 text-red-800', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
  medications: { label: 'Medications', color: 'bg-green-100 text-green-800', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' },
  symptoms: { label: 'Symptoms', color: 'bg-yellow-100 text-yellow-800', icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z' },
  lab_tests: { label: 'Lab Tests', color: 'bg-purple-100 text-purple-800', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' },
  procedures: { label: 'Procedures', color: 'bg-indigo-100 text-indigo-800', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' },
  encyclopedia: { label: 'Encyclopedia', color: 'bg-gray-100 text-gray-800', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
  educational: { label: 'Educational', color: 'bg-teal-100 text-teal-800', icon: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' },
};

export function SearchResults({
  showCategories = true,
  showPagination = true,
  showResultCount = true,
  layout = 'list',
  onResultClick,
  emptyMessage = 'No results found. Try different keywords or check your spelling.',
  className = '',
}: SearchResultsProps) {
  const { state, loadMore } = useSearchContext();
  const { results, totalCount, categories, isLoading, error, query, searchTime, hasMore } = state;

  // Group results by category if needed
  const groupedResults = useMemo(() => {
    if (!showCategories) return null;

    const groups = new Map<SearchCategory, SearchResult[]>();
    results.forEach(result => {
      const existing = groups.get(result.category) || [];
      groups.set(result.category, [...existing, result]);
    });
    return groups;
  }, [results, showCategories]);

  // Handle result click
  const handleResultClick = useCallback(
    (result: SearchResult) => {
      onResultClick?.(result);
    },
    [onResultClick]
  );

  // Handle load more
  const handleLoadMore = useCallback(() => {
    loadMore();
  }, [loadMore]);

  // Empty state
  if (!isLoading && results.length === 0 && query) {
    return (
      <div className={`text-center py-12 ${className}`}>
        <svg
          className="w-16 h-16 mx-auto text-gray-300 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          No results for "{query}"
        </h3>
        <p className="text-gray-500 max-w-md mx-auto">{emptyMessage}</p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className={`text-center py-12 ${className}`}>
        <svg
          className="w-16 h-16 mx-auto text-red-300 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <h3 className="text-lg font-medium text-red-900 mb-2">Search Error</h3>
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  // Loading state
  if (isLoading && results.length === 0) {
    return (
      <div className={`space-y-4 ${className}`}>
        {[1, 2, 3].map(i => (
          <div key={i} className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-full mb-1"></div>
            <div className="h-3 bg-gray-200 rounded w-2/3"></div>
          </div>
        ))}
      </div>
    );
  }

  // Layout classes
  const layoutClasses = {
    list: 'space-y-4',
    grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
    compact: 'divide-y divide-gray-100',
  };

  return (
    <div className={className}>
      {/* Result count and search time */}
      {showResultCount && results.length > 0 && (
        <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
          <span>
            {totalCount.toLocaleString()} result{totalCount !== 1 ? 's' : ''} for "{query}"
          </span>
          <span>{searchTime.toFixed(0)}ms</span>
        </div>
      )}

      {/* Category tabs */}
      {showCategories && categories.length > 1 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map(({ category, count }) => {
            const config = CATEGORY_CONFIG[category];
            return (
              <button
                key={category}
                className={`
                  inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium
                  transition-colors hover:opacity-80
                  ${config.color}
                `}
              >
                <svg
                  className="w-4 h-4 mr-1.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={config.icon}
                  />
                </svg>
                {config.label}
                <span className="ml-1.5 px-1.5 py-0.5 text-xs rounded-full bg-white/50">
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* Results */}
      <div className={layoutClasses[layout]}>
        {results.map(result => (
          <ResultCard
            key={result.id}
            result={result}
            layout={layout}
            searchTerm={query}
            onClick={() => handleResultClick(result)}
          />
        ))}
      </div>

      {/* Load more */}
      {showPagination && hasMore && (
        <div className="mt-6 text-center">
          <button
            onClick={handleLoadMore}
            disabled={isLoading}
            className={`
              inline-flex items-center px-6 py-2 border border-gray-300 rounded-lg
              text-sm font-medium text-gray-700 bg-white
              hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
              disabled:opacity-50 disabled:cursor-not-allowed
              transition-colors
            `}
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Loading...
              </>
            ) : (
              'Load more results'
            )}
          </button>
        </div>
      )}
    </div>
  );
}

// Individual result card component
interface ResultCardProps {
  result: SearchResult;
  layout: 'list' | 'grid' | 'compact';
  searchTerm: string;
  onClick: () => void;
}

function ResultCard({ result, layout, searchTerm, onClick }: ResultCardProps) {
  const config = CATEGORY_CONFIG[result.category];

  if (layout === 'compact') {
    return (
      <button
        onClick={onClick}
        className="w-full text-left py-3 px-4 hover:bg-gray-50 transition-colors group"
      >
        <div className="flex items-center">
          <span className={`px-2 py-0.5 text-xs rounded ${config.color} mr-3`}>
            {config.label}
          </span>
          <SearchHighlight text={result.title} searchTerm={searchTerm} />
          <svg
            className="w-4 h-4 ml-auto text-gray-400 group-hover:text-gray-600 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </button>
    );
  }

  if (layout === 'grid') {
    return (
      <button
        onClick={onClick}
        className="text-left p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow group"
      >
        {result.thumbnail && (
          <img
            src={result.thumbnail}
            alt=""
            className="w-full h-32 object-cover rounded-md mb-3"
          />
        )}
        <span className={`inline-block px-2 py-0.5 text-xs rounded ${config.color} mb-2`}>
          {config.label}
        </span>
        <h3 className="font-medium text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
          <SearchHighlight text={result.title} searchTerm={searchTerm} />
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2">
          <SearchHighlight text={result.description} searchTerm={searchTerm} />
        </p>
      </button>
    );
  }

  // Default list layout
  return (
    <button
      onClick={onClick}
      className="w-full text-left p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow group"
    >
      <div className="flex items-start">
        {result.thumbnail && (
          <img
            src={result.thumbnail}
            alt=""
            className="w-16 h-16 object-cover rounded-md mr-4 flex-shrink-0"
          />
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center mb-1">
            <span className={`inline-block px-2 py-0.5 text-xs rounded ${config.color} mr-2`}>
              {config.label}
            </span>
            {(result.metadata.verified as boolean) && (
              <svg
                className="w-4 h-4 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
          <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors truncate">
            <SearchHighlight text={result.title} searchTerm={searchTerm} />
          </h3>
          <p className="text-sm text-gray-600 mt-1 line-clamp-2">
            <SearchHighlight text={result.description} searchTerm={searchTerm} />
          </p>
          {result.lastUpdated && (
            <p className="text-xs text-gray-400 mt-2">
              Updated {new Date(result.lastUpdated).toLocaleDateString()}
            </p>
          )}
        </div>
        <svg
          className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors ml-4 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </button>
  );
}

export default SearchResults;
