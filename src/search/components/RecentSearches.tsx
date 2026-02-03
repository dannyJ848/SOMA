/**
 * RecentSearches - Recent search history component
 * Displays and manages recent search terms
 */

import React, { useCallback } from 'react';
import { useSearchContext } from './SearchProvider';

export interface RecentSearchesProps {
  maxItems?: number;
  showClearButton?: boolean;
  showPopular?: boolean;
  title?: string;
  onSelect?: (term: string) => void;
  className?: string;
}

export function RecentSearches({
  maxItems = 10,
  showClearButton = true,
  showPopular = true,
  title = 'Recent Searches',
  onSelect,
  className = '',
}: RecentSearchesProps) {
  const { state, search, clearHistory } = useSearchContext();
  const { recentSearches, popularSearches } = state;

  const displayedRecent = recentSearches.slice(0, maxItems);
  const displayedPopular = popularSearches.slice(0, 5);

  // Handle search selection
  const handleSelect = useCallback(
    (term: string) => {
      search(term);
      onSelect?.(term);
    },
    [search, onSelect]
  );

  // Handle clear history
  const handleClear = useCallback(() => {
    clearHistory();
  }, [clearHistory]);

  if (displayedRecent.length === 0 && displayedPopular.length === 0) {
    return null;
  }

  return (
    <div className={className}>
      {/* Recent searches */}
      {displayedRecent.length > 0 && (
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-gray-900 flex items-center">
              <svg
                className="w-4 h-4 text-gray-400 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {title}
            </h3>
            {showClearButton && (
              <button
                onClick={handleClear}
                className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
              >
                Clear all
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {displayedRecent.map((term, index) => (
              <RecentSearchItem
                key={`${term}-${index}`}
                term={term}
                onClick={() => handleSelect(term)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Popular searches */}
      {showPopular && displayedPopular.length > 0 && (
        <div>
          <h3 className="text-sm font-medium text-gray-900 flex items-center mb-3">
            <svg
              className="w-4 h-4 text-gray-400 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
            Popular Searches
          </h3>
          <div className="flex flex-wrap gap-2">
            {displayedPopular.map((term, index) => (
              <PopularSearchItem
                key={`${term}-${index}`}
                term={term}
                rank={index + 1}
                onClick={() => handleSelect(term)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Recent search item component
interface RecentSearchItemProps {
  term: string;
  onClick: () => void;
}

function RecentSearchItem({ term, onClick }: RecentSearchItemProps) {
  return (
    <button
      onClick={onClick}
      className="
        inline-flex items-center px-3 py-1.5 bg-white border border-gray-200
        rounded-full text-sm text-gray-700 hover:bg-gray-50 hover:border-gray-300
        transition-colors group
      "
    >
      <svg
        className="w-3.5 h-3.5 text-gray-400 mr-1.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      {term}
      <svg
        className="w-3.5 h-3.5 text-gray-400 ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
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
    </button>
  );
}

// Popular search item component
interface PopularSearchItemProps {
  term: string;
  rank: number;
  onClick: () => void;
}

function PopularSearchItem({ term, rank, onClick }: PopularSearchItemProps) {
  // Different styles based on rank
  const rankStyles = {
    1: 'bg-amber-50 border-amber-200 text-amber-800',
    2: 'bg-gray-50 border-gray-200 text-gray-700',
    3: 'bg-orange-50 border-orange-200 text-orange-800',
  };

  const style = rankStyles[rank as keyof typeof rankStyles] || 'bg-white border-gray-200 text-gray-700';

  return (
    <button
      onClick={onClick}
      className={`
        inline-flex items-center px-3 py-1.5 border rounded-full text-sm
        hover:opacity-80 transition-opacity group
        ${style}
      `}
    >
      {rank <= 3 && (
        <span className="flex items-center justify-center w-4 h-4 mr-1.5 text-xs font-bold">
          {rank === 1 ? (
            <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ) : (
            rank
          )}
        </span>
      )}
      {term}
      <svg
        className="w-3.5 h-3.5 ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
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
    </button>
  );
}

// Compact variant for smaller spaces
export interface RecentSearchesCompactProps {
  onSelect?: (term: string) => void;
  className?: string;
}

export function RecentSearchesCompact({
  onSelect,
  className = '',
}: RecentSearchesCompactProps) {
  const { state, search } = useSearchContext();
  const { recentSearches } = state;

  const displayedRecent = recentSearches.slice(0, 5);

  if (displayedRecent.length === 0) {
    return null;
  }

  const handleSelect = (term: string) => {
    search(term);
    onSelect?.(term);
  };

  return (
    <div className={className}>
      {displayedRecent.map((term, index) => (
        <button
          key={`${term}-${index}`}
          onClick={() => handleSelect(term)}
          className="
            w-full flex items-center px-3 py-2 text-sm text-gray-700
            hover:bg-gray-50 transition-colors
          "
        >
          <svg
            className="w-4 h-4 text-gray-400 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {term}
        </button>
      ))}
    </div>
  );
}

export default RecentSearches;
