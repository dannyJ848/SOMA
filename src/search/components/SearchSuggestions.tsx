/**
 * SearchSuggestions - Autocomplete suggestions dropdown
 * Shows search suggestions and instant results
 */

import React from 'react';
import { SearchResult, SearchCategory } from '../core/searchEngine';
import SearchHighlight from './SearchHighlight';

export interface SearchSuggestionsProps {
  suggestions: string[];
  instantResults: SearchResult[];
  selectedIndex: number;
  onSelectSuggestion: (suggestion: string) => void;
  onSelectResult: (result: SearchResult) => void;
  searchTerm: string;
  maxSuggestions?: number;
  maxResults?: number;
  className?: string;
}

// Category icons
const CATEGORY_ICONS: Record<SearchCategory, string> = {
  anatomy: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  conditions: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  medications: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
  symptoms: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
  lab_tests: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
  procedures: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
  encyclopedia: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  educational: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z',
};

export function SearchSuggestions({
  suggestions,
  instantResults,
  selectedIndex,
  onSelectSuggestion,
  onSelectResult,
  searchTerm,
  maxSuggestions = 5,
  maxResults = 5,
  className = '',
}: SearchSuggestionsProps) {
  const displayedSuggestions = suggestions.slice(0, maxSuggestions);
  const displayedResults = instantResults.slice(0, maxResults);

  if (displayedSuggestions.length === 0 && displayedResults.length === 0) {
    return null;
  }

  return (
    <div
      id="search-suggestions"
      role="listbox"
      className={`
        absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg
        border border-gray-200 overflow-hidden z-50
        ${className}
      `}
    >
      {/* Suggestions section */}
      {displayedSuggestions.length > 0 && (
        <div className="py-2">
          <div className="px-4 py-1 text-xs font-medium text-gray-500 uppercase tracking-wider">
            Suggestions
          </div>
          {displayedSuggestions.map((suggestion, index) => (
            <button
              key={suggestion}
              role="option"
              aria-selected={selectedIndex === index}
              onClick={() => onSelectSuggestion(suggestion)}
              className={`
                w-full flex items-center px-4 py-2 text-left text-sm
                transition-colors
                ${
                  selectedIndex === index
                    ? 'bg-blue-50 text-blue-900'
                    : 'text-gray-900 hover:bg-gray-50'
                }
              `}
            >
              <svg
                className="w-4 h-4 text-gray-400 mr-3 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <SearchHighlight text={suggestion} searchTerm={searchTerm} />
              <kbd className="ml-auto hidden sm:inline-block px-2 py-0.5 text-xs text-gray-400 bg-gray-100 rounded">
                Enter
              </kbd>
            </button>
          ))}
        </div>
      )}

      {/* Divider */}
      {displayedSuggestions.length > 0 && displayedResults.length > 0 && (
        <div className="border-t border-gray-200" />
      )}

      {/* Instant results section */}
      {displayedResults.length > 0 && (
        <div className="py-2">
          <div className="px-4 py-1 text-xs font-medium text-gray-500 uppercase tracking-wider">
            Quick Results
          </div>
          {displayedResults.map((result, index) => {
            const adjustedIndex = displayedSuggestions.length + index;
            const icon = CATEGORY_ICONS[result.category];

            return (
              <button
                key={result.id}
                role="option"
                aria-selected={selectedIndex === adjustedIndex}
                onClick={() => onSelectResult(result)}
                className={`
                  w-full flex items-start px-4 py-3 text-left
                  transition-colors
                  ${
                    selectedIndex === adjustedIndex
                      ? 'bg-blue-50'
                      : 'hover:bg-gray-50'
                  }
                `}
              >
                {/* Category icon */}
                <div
                  className={`
                    w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mr-3
                    ${getCategoryColor(result.category)}
                  `}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={icon}
                    />
                  </svg>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center">
                    <span
                      className={`
                        text-sm font-medium truncate
                        ${selectedIndex === adjustedIndex ? 'text-blue-900' : 'text-gray-900'}
                      `}
                    >
                      <SearchHighlight text={result.title} searchTerm={searchTerm} />
                    </span>
                    {(result.metadata.verified as boolean) && (
                      <svg
                        className="w-4 h-4 text-green-500 ml-1 flex-shrink-0"
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
                  <p className="text-xs text-gray-500 truncate mt-0.5">
                    {result.description}
                  </p>
                </div>

                {/* Arrow */}
                <svg
                  className="w-4 h-4 text-gray-400 ml-2 flex-shrink-0"
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
          })}
        </div>
      )}

      {/* Footer hint */}
      <div className="px-4 py-2 bg-gray-50 border-t border-gray-200">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-3">
            <span className="flex items-center">
              <kbd className="px-1.5 py-0.5 bg-white border border-gray-300 rounded text-xs mr-1">
                ↑
              </kbd>
              <kbd className="px-1.5 py-0.5 bg-white border border-gray-300 rounded text-xs mr-1">
                ↓
              </kbd>
              to navigate
            </span>
            <span className="flex items-center">
              <kbd className="px-1.5 py-0.5 bg-white border border-gray-300 rounded text-xs mr-1">
                Enter
              </kbd>
              to select
            </span>
          </div>
          <span className="flex items-center">
            <kbd className="px-1.5 py-0.5 bg-white border border-gray-300 rounded text-xs mr-1">
              Esc
            </kbd>
            to close
          </span>
        </div>
      </div>
    </div>
  );
}

// Helper function to get category color
function getCategoryColor(category: SearchCategory): string {
  const colors: Record<SearchCategory, string> = {
    anatomy: 'bg-blue-100 text-blue-600',
    conditions: 'bg-red-100 text-red-600',
    medications: 'bg-green-100 text-green-600',
    symptoms: 'bg-yellow-100 text-yellow-600',
    lab_tests: 'bg-purple-100 text-purple-600',
    procedures: 'bg-indigo-100 text-indigo-600',
    encyclopedia: 'bg-gray-100 text-gray-600',
    educational: 'bg-teal-100 text-teal-600',
  };
  return colors[category] || 'bg-gray-100 text-gray-600';
}

export default SearchSuggestions;
