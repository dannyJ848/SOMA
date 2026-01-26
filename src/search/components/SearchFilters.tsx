/**
 * SearchFilters - Filter controls for search results
 * Allows filtering by category, body system, and other criteria
 */

import React, { useState, useCallback } from 'react';
import { useSearchContext } from './SearchProvider';
import { SearchCategory, SearchFilters as FilterType } from '../core/searchEngine';

export interface SearchFiltersProps {
  showCategoryFilter?: boolean;
  showBodySystemFilter?: boolean;
  showAgeGroupFilter?: boolean;
  showVerifiedFilter?: boolean;
  showSeverityFilter?: boolean;
  collapsible?: boolean;
  defaultExpanded?: boolean;
  className?: string;
}

// Category configuration
const CATEGORIES: Array<{ value: SearchCategory; label: string; icon: string }> = [
  { value: 'anatomy', label: 'Anatomy', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
  { value: 'conditions', label: 'Conditions', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
  { value: 'medications', label: 'Medications', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' },
  { value: 'symptoms', label: 'Symptoms', icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z' },
  { value: 'lab_tests', label: 'Lab Tests', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
  { value: 'procedures', label: 'Procedures', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' },
  { value: 'encyclopedia', label: 'Encyclopedia', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
  { value: 'educational', label: 'Educational', icon: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' },
];

// Body systems
const BODY_SYSTEMS = [
  'Cardiovascular',
  'Respiratory',
  'Digestive',
  'Nervous',
  'Musculoskeletal',
  'Endocrine',
  'Immune',
  'Urinary',
  'Reproductive',
  'Integumentary',
];

// Age groups
const AGE_GROUPS = [
  { value: 'infant', label: 'Infant (0-1)' },
  { value: 'child', label: 'Child (1-12)' },
  { value: 'adolescent', label: 'Adolescent (13-17)' },
  { value: 'adult', label: 'Adult (18-64)' },
  { value: 'elderly', label: 'Elderly (65+)' },
] as const;

// Severity levels
const SEVERITY_LEVELS = [
  { value: 'low', label: 'Low', color: 'bg-green-100 text-green-800' },
  { value: 'medium', label: 'Medium', color: 'bg-yellow-100 text-yellow-800' },
  { value: 'high', label: 'High', color: 'bg-red-100 text-red-800' },
] as const;

export function SearchFilters({
  showCategoryFilter = true,
  showBodySystemFilter = true,
  showAgeGroupFilter = true,
  showVerifiedFilter = true,
  showSeverityFilter = true,
  collapsible = true,
  defaultExpanded = true,
  className = '',
}: SearchFiltersProps) {
  const { state, setFilters, setCategories, search } = useSearchContext();
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [localFilters, setLocalFilters] = useState<FilterType>(state.filters);
  const [selectedCategories, setSelectedCategories] = useState<SearchCategory[]>(
    state.selectedCategories
  );

  // Toggle category selection
  const toggleCategory = useCallback((category: SearchCategory) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(c => c !== category);
      }
      return [...prev, category];
    });
  }, []);

  // Toggle body system
  const toggleBodySystem = useCallback((system: string) => {
    setLocalFilters(prev => {
      const current = prev.bodySystem || [];
      if (current.includes(system)) {
        return { ...prev, bodySystem: current.filter(s => s !== system) };
      }
      return { ...prev, bodySystem: [...current, system] };
    });
  }, []);

  // Set age group
  const setAgeGroup = useCallback((age: typeof AGE_GROUPS[number]['value'] | undefined) => {
    setLocalFilters(prev => ({ ...prev, ageGroup: age }));
  }, []);

  // Set severity
  const setSeverity = useCallback((severity: typeof SEVERITY_LEVELS[number]['value'] | undefined) => {
    setLocalFilters(prev => ({ ...prev, severity }));
  }, []);

  // Toggle verified only
  const toggleVerified = useCallback(() => {
    setLocalFilters(prev => ({ ...prev, verified: !prev.verified }));
  }, []);

  // Apply filters
  const applyFilters = useCallback(() => {
    setFilters(localFilters);
    setCategories(selectedCategories);
    if (state.query) {
      search(state.query);
    }
  }, [localFilters, selectedCategories, setFilters, setCategories, search, state.query]);

  // Clear all filters
  const clearFilters = useCallback(() => {
    setLocalFilters({});
    setSelectedCategories([]);
    setFilters({});
    setCategories([]);
    if (state.query) {
      search(state.query);
    }
  }, [setFilters, setCategories, search, state.query]);

  // Check if any filters are active
  const hasActiveFilters =
    selectedCategories.length > 0 ||
    (localFilters.bodySystem && localFilters.bodySystem.length > 0) ||
    localFilters.ageGroup ||
    localFilters.severity ||
    localFilters.verified;

  return (
    <div className={`bg-white rounded-lg border border-gray-200 ${className}`}>
      {/* Header */}
      <div
        className={`
          flex items-center justify-between px-4 py-3 border-b border-gray-200
          ${collapsible ? 'cursor-pointer' : ''}
        `}
        onClick={collapsible ? () => setIsExpanded(!isExpanded) : undefined}
      >
        <div className="flex items-center">
          <svg
            className="w-5 h-5 text-gray-500 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
          <span className="font-medium text-gray-900">Filters</span>
          {hasActiveFilters && (
            <span className="ml-2 px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
              Active
            </span>
          )}
        </div>
        {collapsible && (
          <svg
            className={`w-5 h-5 text-gray-400 transition-transform ${
              isExpanded ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </div>

      {/* Filter content */}
      {isExpanded && (
        <div className="p-4 space-y-6">
          {/* Category filter */}
          {showCategoryFilter && (
            <FilterSection title="Categories">
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map(category => (
                  <button
                    key={category.value}
                    onClick={() => toggleCategory(category.value)}
                    className={`
                      inline-flex items-center px-3 py-1.5 rounded-full text-sm
                      transition-colors border
                      ${
                        selectedCategories.includes(category.value)
                          ? 'bg-blue-100 border-blue-300 text-blue-800'
                          : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                      }
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
                        d={category.icon}
                      />
                    </svg>
                    {category.label}
                  </button>
                ))}
              </div>
            </FilterSection>
          )}

          {/* Body system filter */}
          {showBodySystemFilter && (
            <FilterSection title="Body System">
              <div className="flex flex-wrap gap-2">
                {BODY_SYSTEMS.map(system => (
                  <button
                    key={system}
                    onClick={() => toggleBodySystem(system)}
                    className={`
                      px-3 py-1.5 rounded-full text-sm transition-colors border
                      ${
                        localFilters.bodySystem?.includes(system)
                          ? 'bg-purple-100 border-purple-300 text-purple-800'
                          : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                      }
                    `}
                  >
                    {system}
                  </button>
                ))}
              </div>
            </FilterSection>
          )}

          {/* Age group filter */}
          {showAgeGroupFilter && (
            <FilterSection title="Age Group">
              <div className="flex flex-wrap gap-2">
                {AGE_GROUPS.map(age => (
                  <button
                    key={age.value}
                    onClick={() =>
                      setAgeGroup(
                        localFilters.ageGroup === age.value ? undefined : age.value
                      )
                    }
                    className={`
                      px-3 py-1.5 rounded-full text-sm transition-colors border
                      ${
                        localFilters.ageGroup === age.value
                          ? 'bg-teal-100 border-teal-300 text-teal-800'
                          : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                      }
                    `}
                  >
                    {age.label}
                  </button>
                ))}
              </div>
            </FilterSection>
          )}

          {/* Severity filter */}
          {showSeverityFilter && (
            <FilterSection title="Severity">
              <div className="flex gap-2">
                {SEVERITY_LEVELS.map(severity => (
                  <button
                    key={severity.value}
                    onClick={() =>
                      setSeverity(
                        localFilters.severity === severity.value
                          ? undefined
                          : severity.value
                      )
                    }
                    className={`
                      flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors border
                      ${
                        localFilters.severity === severity.value
                          ? severity.color + ' border-transparent'
                          : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                      }
                    `}
                  >
                    {severity.label}
                  </button>
                ))}
              </div>
            </FilterSection>
          )}

          {/* Verified filter */}
          {showVerifiedFilter && (
            <FilterSection title="Quality">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={localFilters.verified || false}
                  onChange={toggleVerified}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">
                  Verified content only
                </span>
                <svg
                  className="w-4 h-4 text-green-500 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </FilterSection>
          )}

          {/* Action buttons */}
          <div className="flex gap-3 pt-4 border-t border-gray-200">
            <button
              onClick={clearFilters}
              disabled={!hasActiveFilters}
              className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Clear all
            </button>
            <button
              onClick={applyFilters}
              className="flex-1 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Apply filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Filter section component
interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
}

function FilterSection({ title, children }: FilterSectionProps) {
  return (
    <div>
      <h4 className="text-sm font-medium text-gray-900 mb-3">{title}</h4>
      {children}
    </div>
  );
}

export default SearchFilters;
