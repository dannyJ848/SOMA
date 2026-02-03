/**
 * Search Filters Component
 *
 * Filter controls for search with category selection
 * and result count display.
 */

import { useCallback } from 'react';
import type { SearchCategory } from './types';

// ============================================
// Props
// ============================================

interface SearchFiltersProps {
  /** Currently selected category */
  selectedCategory: SearchCategory;

  /** Callback when category changes */
  onCategoryChange: (category: SearchCategory) => void;

  /** Result counts by category */
  categoryBreakdown?: Record<SearchCategory, number>;

  /** Whether filters are in compact mode */
  compact?: boolean;

  /** Additional class name */
  className?: string;
}

// ============================================
// Category Configuration
// ============================================

const CATEGORIES: Array<{
  value: SearchCategory;
  label: string;
  icon: string;
  color: string;
}> = [
  { value: 'all', label: 'All', icon: '🔍', color: '#6b7280' },
  { value: 'anatomy', label: 'Anatomy', icon: '🫀', color: '#ef4444' },
  { value: 'conditions', label: 'Conditions', icon: '🏥', color: '#f59e0b' },
  { value: 'medications', label: 'Medications', icon: '💊', color: '#10b981' },
  { value: 'symptoms', label: 'Symptoms', icon: '🤒', color: '#f97316' },
  { value: 'procedures', label: 'Procedures', icon: '🔬', color: '#6366f1' },
  { value: 'lab-tests', label: 'Lab Tests', icon: '🧪', color: '#8b5cf6' },
  { value: 'physiology', label: 'Physiology', icon: '⚡', color: '#06b6d4' },
  { value: 'encyclopedia', label: 'Encyclopedia', icon: '📚', color: '#3b82f6' },
];

// ============================================
// Main Component
// ============================================

export function SearchFilters({
  selectedCategory,
  onCategoryChange,
  categoryBreakdown,
  compact = false,
  className = '',
}: SearchFiltersProps) {
  // Handle category click
  const handleCategoryClick = useCallback(
    (category: SearchCategory) => {
      onCategoryChange(category);
    },
    [onCategoryChange]
  );

  // Calculate total for "All" category
  const totalCount = categoryBreakdown
    ? Object.values(categoryBreakdown).reduce((sum, count) => sum + count, 0)
    : undefined;

  // Filter to only show categories with results (if breakdown provided)
  const visibleCategories = categoryBreakdown
    ? CATEGORIES.filter(
        (cat) =>
          cat.value === 'all' ||
          (categoryBreakdown[cat.value] && categoryBreakdown[cat.value] > 0)
      )
    : CATEGORIES;

  if (compact) {
    return (
      <div className={`search-filters compact ${className}`}>
        <select
          value={selectedCategory}
          onChange={(e) => handleCategoryClick(e.target.value as SearchCategory)}
          className="filter-select"
        >
          {visibleCategories.map((category) => {
            const count =
              category.value === 'all'
                ? totalCount
                : categoryBreakdown?.[category.value];

            return (
              <option key={category.value} value={category.value}>
                {category.icon} {category.label}
                {count !== undefined && ` (${count})`}
              </option>
            );
          })}
        </select>
      </div>
    );
  }

  return (
    <div className={`search-filters ${className}`}>
      <div className="filter-chips">
        {visibleCategories.map((category) => {
          const isSelected = selectedCategory === category.value;
          const count =
            category.value === 'all'
              ? totalCount
              : categoryBreakdown?.[category.value];

          return (
            <button
              key={category.value}
              className={`filter-chip ${isSelected ? 'active' : ''}`}
              onClick={() => handleCategoryClick(category.value)}
              style={
                {
                  '--chip-color': category.color,
                  '--chip-bg': isSelected ? `${category.color}20` : 'transparent',
                } as React.CSSProperties
              }
            >
              <span className="chip-icon">{category.icon}</span>
              <span className="chip-label">{category.label}</span>
              {count !== undefined && count > 0 && (
                <span className="chip-count">{count}</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ============================================
// Extended Filters Component
// ============================================

interface ExtendedFiltersProps extends SearchFiltersProps {
  /** Filters object */
  filters: {
    bodySystem?: string[];
    verified?: boolean;
    dateRange?: { start: string; end: string };
    source?: string[];
  };

  /** Callback when filters change */
  onFilterChange: (filters: ExtendedFiltersProps['filters']) => void;

  /** Available categories for filtering */
  categories: SearchCategory[];
}

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

const CONTENT_SOURCES = [
  { value: 'encyclopedia', label: 'Encyclopedia' },
  { value: 'anatomy-structures', label: 'Anatomy' },
  { value: 'user-data', label: 'Your Data' },
  { value: 'medical-simulation', label: 'Simulations' },
];

export function ExtendedSearchFilters({
  selectedCategory,
  onCategoryChange,
  categoryBreakdown,
  filters,
  onFilterChange,
  categories,
  className = '',
}: ExtendedFiltersProps) {
  // Toggle body system filter
  const toggleBodySystem = useCallback(
    (system: string) => {
      const current = filters.bodySystem || [];
      const updated = current.includes(system)
        ? current.filter((s) => s !== system)
        : [...current, system];
      onFilterChange({ ...filters, bodySystem: updated.length > 0 ? updated : undefined });
    },
    [filters, onFilterChange]
  );

  // Toggle source filter
  const toggleSource = useCallback(
    (source: string) => {
      const current = filters.source || [];
      const updated = current.includes(source)
        ? current.filter((s) => s !== source)
        : [...current, source];
      onFilterChange({ ...filters, source: updated.length > 0 ? updated : undefined });
    },
    [filters, onFilterChange]
  );

  // Toggle verified filter
  const toggleVerified = useCallback(() => {
    onFilterChange({ ...filters, verified: !filters.verified });
  }, [filters, onFilterChange]);

  // Clear all filters
  const clearFilters = useCallback(() => {
    onFilterChange({});
    onCategoryChange('all');
  }, [onFilterChange, onCategoryChange]);

  // Check if any filters are active
  const hasActiveFilters =
    selectedCategory !== 'all' ||
    (filters.bodySystem && filters.bodySystem.length > 0) ||
    (filters.source && filters.source.length > 0) ||
    filters.verified;

  return (
    <div className={`search-filters extended ${className}`}>
      {/* Category filters */}
      <div className="filter-section">
        <h4 className="filter-section-title">Category</h4>
        <SearchFilters
          selectedCategory={selectedCategory}
          onCategoryChange={onCategoryChange}
          categoryBreakdown={categoryBreakdown}
        />
      </div>

      {/* Body system filters */}
      <div className="filter-section">
        <h4 className="filter-section-title">Body System</h4>
        <div className="filter-checkboxes">
          {BODY_SYSTEMS.map((system) => (
            <label key={system} className="filter-checkbox">
              <input
                type="checkbox"
                checked={filters.bodySystem?.includes(system) || false}
                onChange={() => toggleBodySystem(system)}
              />
              <span>{system}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Source filters */}
      <div className="filter-section">
        <h4 className="filter-section-title">Content Source</h4>
        <div className="filter-checkboxes">
          {CONTENT_SOURCES.map((source) => (
            <label key={source.value} className="filter-checkbox">
              <input
                type="checkbox"
                checked={filters.source?.includes(source.value) || false}
                onChange={() => toggleSource(source.value)}
              />
              <span>{source.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Verified filter */}
      <div className="filter-section">
        <label className="filter-toggle">
          <input
            type="checkbox"
            checked={filters.verified || false}
            onChange={toggleVerified}
          />
          <span>Verified content only</span>
        </label>
      </div>

      {/* Clear filters */}
      {hasActiveFilters && (
        <button className="clear-filters-btn" onClick={clearFilters}>
          Clear all filters
        </button>
      )}
    </div>
  );
}

export default SearchFilters;
