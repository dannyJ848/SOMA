/**
 * MedicalEncyclopedia Component
 *
 * Main component for browsing and searching medical encyclopedia entries
 * with semantic search, category filtering, and cross-referenced navigation.
 */

import { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import { useAnatomy3DNavigation } from './hooks/useAnatomy3DNavigation';
import { useActionTracker } from './hooks/useActionTracker';
import type { EncyclopediaAction } from '../core/intent-prediction/types';
import {
  searchEntries,
  getEntrySummaries,
} from '../core/medical-simulation/encyclopedia/store';
import type {
  EncyclopediaEntrySummary,
  EncyclopediaSearchResult,
  EntryType,
  MedicalCategory,
} from '../core/medical-simulation/encyclopedia/types';
import type { DashboardData } from './utils/anatomyContextBuilder';
import './MedicalEncyclopedia.css';

// ============================================
// Props
// ============================================

interface MedicalEncyclopediaProps {
  onBack: () => void;
  dashboardData: DashboardData | null;
  onNavigateToAnatomy?: () => void;
  onOpenEntry?: (entryId: string) => void;
  initialEntryId?: string;
}

// ============================================
// Entry Type Configuration
// ============================================

const ENTRY_TYPE_CONFIG: Record<EntryType, { label: string; icon: string; color: string }> = {
  condition: { label: 'Conditions', icon: '🏥', color: '#ef4444' },
  symptom: { label: 'Symptoms', icon: '🩺', color: '#f97316' },
  medication: { label: 'Medications', icon: '💊', color: '#8b5cf6' },
  anatomy: { label: 'Anatomy', icon: '🫀', color: '#3b82f6' },
  procedure: { label: 'Procedures', icon: '🔬', color: '#06b6d4' },
  physiology: { label: 'Physiology', icon: '⚙️', color: '#22c55e' },
  'lab-test': { label: 'Lab Tests', icon: '🧪', color: '#eab308' },
  imaging: { label: 'Imaging', icon: '📷', color: '#a855f7' },
  terminology: { label: 'Terminology', icon: '📖', color: '#6b7280' },
};

const CATEGORY_CONFIG: Partial<Record<MedicalCategory, { label: string; color: string }>> = {
  cardiovascular: { label: 'Cardiovascular', color: '#ef4444' },
  respiratory: { label: 'Respiratory', color: '#3b82f6' },
  gastrointestinal: { label: 'GI', color: '#22c55e' },
  neurologic: { label: 'Neurologic', color: '#8b5cf6' },
  musculoskeletal: { label: 'Musculoskeletal', color: '#f97316' },
  endocrine: { label: 'Endocrine', color: '#eab308' },
  renal: { label: 'Renal', color: '#06b6d4' },
  hematologic: { label: 'Hematologic', color: '#dc2626' },
  immunologic: { label: 'Immunologic', color: '#ec4899' },
  infectious: { label: 'Infectious', color: '#84cc16' },
  dermatologic: { label: 'Dermatologic', color: '#fb923c' },
  psychiatric: { label: 'Psychiatric', color: '#a78bfa' },
  oncologic: { label: 'Oncology', color: '#475569' },
  general: { label: 'General', color: '#6b7280' },
};

// ============================================
// Entry Type Badge Component
// ============================================

interface EntryTypeBadgeProps {
  entryType: EntryType;
}

function EntryTypeBadge({ entryType }: EntryTypeBadgeProps) {
  const config = ENTRY_TYPE_CONFIG[entryType];
  if (!config) return null;

  return (
    <span
      className="entry-type-badge"
      style={{ backgroundColor: `${config.color}22`, color: config.color }}
    >
      {config.icon} {config.label.replace(/s$/, '')}
    </span>
  );
}

// ============================================
// Category Badge Component
// ============================================

interface CategoryBadgeProps {
  category: MedicalCategory;
}

function CategoryBadge({ category }: CategoryBadgeProps) {
  const config = CATEGORY_CONFIG[category];
  if (!config) return <span className="category-badge">{category}</span>;

  return (
    <span
      className="category-badge"
      style={{ backgroundColor: `${config.color}15`, color: config.color }}
    >
      {config.label}
    </span>
  );
}

// ============================================
// Match Type Badge Component
// ============================================

interface MatchTypeBadgeProps {
  matchType: EncyclopediaSearchResult['matchType'];
}

function MatchTypeBadge({ matchType }: MatchTypeBadgeProps) {
  const config: Record<string, { bg: string; text: string; label: string }> = {
    exact: { bg: '#22c55e22', text: '#22c55e', label: 'Exact' },
    synonym: { bg: '#3b82f622', text: '#3b82f6', label: 'Synonym' },
    keyword: { bg: '#8b5cf622', text: '#8b5cf6', label: 'Keyword' },
    content: { bg: '#f9731622', text: '#f97316', label: 'Content' },
    partial: { bg: '#6b728022', text: '#6b7280', label: 'Partial' },
  };

  const style = config[matchType];

  return (
    <span
      className="match-type-badge"
      style={{ backgroundColor: style.bg, color: style.text }}
    >
      {style.label}
    </span>
  );
}

// ============================================
// Search Result Card Component
// ============================================

interface SearchResultCardProps {
  result: EncyclopediaSearchResult;
  onClick: () => void;
}

function SearchResultCard({ result, onClick }: SearchResultCardProps) {
  return (
    <div className="search-result-card" onClick={onClick}>
      <div className="result-header">
        <h4 className="result-name">{result.name}</h4>
        <div className="result-badges">
          <EntryTypeBadge entryType={result.entryType} />
          <MatchTypeBadge matchType={result.matchType} />
        </div>
      </div>
      <div className="result-meta">
        <CategoryBadge category={result.category} />
        <span className="relevance-score">{Math.round(result.relevanceScore)}% match</span>
      </div>
      <p className="result-summary">{result.summary}</p>
      {result.highlightedSnippet && (
        <p className="result-snippet">{result.highlightedSnippet}</p>
      )}
    </div>
  );
}

// ============================================
// Entry Preview Card Component
// ============================================

interface EntryPreviewCardProps {
  entry: EncyclopediaEntrySummary;
  onClick: () => void;
}

function EntryPreviewCard({ entry, onClick }: EntryPreviewCardProps) {
  return (
    <div className="entry-preview-card" onClick={onClick}>
      <div className="preview-header">
        <h4 className="preview-name">{entry.name}</h4>
        <EntryTypeBadge entryType={entry.entryType} />
      </div>
      <CategoryBadge category={entry.category} />
      <p className="preview-summary">{entry.summary}</p>
      <div className="preview-stats">
        {entry.relatedCount > 0 && (
          <span className="stat-item">🔗 {entry.relatedCount} related</span>
        )}
        {entry.anatomyLinksCount > 0 && (
          <span className="stat-item">🫀 {entry.anatomyLinksCount} anatomy links</span>
        )}
      </div>
    </div>
  );
}

// ============================================
// Recent Searches Component
// ============================================

interface RecentSearchesProps {
  searches: string[];
  onSelect: (query: string) => void;
  onClear: () => void;
}

function RecentSearches({ searches, onSelect, onClear }: RecentSearchesProps) {
  if (searches.length === 0) return null;

  return (
    <div className="recent-searches">
      <div className="recent-header">
        <span className="recent-label">Recent Searches</span>
        <button className="clear-btn" onClick={onClear}>Clear</button>
      </div>
      <div className="recent-list">
        {searches.map((query, idx) => (
          <button
            key={idx}
            className="recent-item"
            onClick={() => onSelect(query)}
          >
            🕐 {query}
          </button>
        ))}
      </div>
    </div>
  );
}

// ============================================
// Alphabetical Index Component
// ============================================

interface AlphabeticalIndexProps {
  entries: EncyclopediaEntrySummary[];
  onSelectEntry: (entryId: string) => void;
}

function AlphabeticalIndex({ entries, onSelectEntry }: AlphabeticalIndexProps) {
  // Group entries by first letter
  const grouped = useMemo(() => {
    const groups: Record<string, EncyclopediaEntrySummary[]> = {};
    for (const entry of entries) {
      const letter = entry.name.charAt(0).toUpperCase();
      if (!groups[letter]) {
        groups[letter] = [];
      }
      groups[letter].push(entry);
    }
    // Sort entries within each group
    for (const letter of Object.keys(groups)) {
      groups[letter].sort((a, b) => a.name.localeCompare(b.name));
    }
    return groups;
  }, [entries]);

  const letters = Object.keys(grouped).sort();
  const [activeLetter, setActiveLetter] = useState<string | null>(letters[0] || null);

  return (
    <div className="alphabetical-index">
      <div className="letter-nav">
        {letters.map(letter => (
          <button
            key={letter}
            className={`letter-btn ${activeLetter === letter ? 'active' : ''}`}
            onClick={() => setActiveLetter(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
      {activeLetter && grouped[activeLetter] && (
        <div className="letter-entries">
          <h3 className="letter-heading">{activeLetter}</h3>
          <div className="entries-grid">
            {grouped[activeLetter].map(entry => (
              <EntryPreviewCard
                key={entry.entryId}
                entry={entry}
                onClick={() => onSelectEntry(entry.entryId)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================
// Main Component
// ============================================

export function MedicalEncyclopedia({
  onBack,
  dashboardData: _dashboardData,
  onNavigateToAnatomy: _onNavigateToAnatomy,
  onOpenEntry,
  initialEntryId: _initialEntryId,
}: MedicalEncyclopediaProps) {
  // Initialize 3D navigation (will be used in EncyclopediaEntry component)
  useAnatomy3DNavigation({ componentId: 'encyclopedia' });

  // Action tracking for intent prediction
  const { track } = useActionTracker<EncyclopediaAction>('encyclopedia', 'MedicalEncyclopedia');

  // Ref to prevent initial tracking
  const hasSearched = useRef(false);

  // State
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [selectedEntryTypes, setSelectedEntryTypes] = useState<EntryType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<MedicalCategory | null>(null);
  const [recentSearches, setRecentSearches] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('encyclopedia-recent-searches');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [activeView, setActiveView] = useState<'search' | 'browse'>('search');
  const [searchResults, setSearchResults] = useState<EncyclopediaSearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Perform search when debounced query changes
  useEffect(() => {
    if (debouncedQuery.trim().length < 2) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);

    // Use the search function from store
    const results = searchEntries(debouncedQuery, {
      entryType: selectedEntryTypes.length === 1 ? selectedEntryTypes[0] : undefined,
      category: selectedCategory || undefined,
      limit: 20,
    });

    setSearchResults(results);
    setIsSearching(false);

    // Add to recent searches
    if (debouncedQuery.trim().length >= 3) {
      setRecentSearches(prev => {
        const updated = [debouncedQuery, ...prev.filter(s => s !== debouncedQuery)].slice(0, 10);
        localStorage.setItem('encyclopedia-recent-searches', JSON.stringify(updated));
        return updated;
      });

      // Track search action
      hasSearched.current = true;
      track('search', { searchQuery: debouncedQuery });
    }
  }, [debouncedQuery, selectedEntryTypes, selectedCategory, track]);

  // Get all entries for browse view
  const allEntries = useMemo(() => {
    if (activeView !== 'browse') return [];

    let entries: EncyclopediaEntrySummary[] = getEntrySummaries();

    // Filter by entry type if selected
    if (selectedEntryTypes.length > 0) {
      entries = entries.filter(e => selectedEntryTypes.includes(e.entryType));
    }

    // Filter by category if selected
    if (selectedCategory) {
      entries = entries.filter(e => e.category === selectedCategory);
    }

    return entries;
  }, [activeView, selectedEntryTypes, selectedCategory]);

  // Toggle entry type filter
  const toggleEntryType = useCallback((entryType: EntryType) => {
    setSelectedEntryTypes(prev =>
      prev.includes(entryType)
        ? prev.filter(t => t !== entryType)
        : [...prev, entryType]
    );
  }, []);

  // Handle entry selection
  const handleSelectEntry = useCallback((entryId: string) => {
    // Track view-entry action
    track('view-entry', { entityId: entryId });

    if (onOpenEntry) {
      onOpenEntry(entryId);
    }
  }, [onOpenEntry, track]);

  // Track browse view toggle
  useEffect(() => {
    if (activeView === 'browse') {
      track('browse-category', {});
    }
   
  }, [activeView]); // Only track when view changes

  // Handle recent search selection
  const handleRecentSearchSelect = useCallback((query: string) => {
    setSearchQuery(query);
    setActiveView('search');
  }, []);

  // Clear recent searches
  const clearRecentSearches = useCallback(() => {
    setRecentSearches([]);
    localStorage.removeItem('encyclopedia-recent-searches');
  }, []);

  // Entry type filter chips
  const entryTypeFilters = Object.entries(ENTRY_TYPE_CONFIG).map(([type, config]) => ({
    type: type as EntryType,
    ...config,
  }));

  // Category filter chips
  const categoryFilters = Object.entries(CATEGORY_CONFIG).map(([cat, config]) => ({
    category: cat as MedicalCategory,
    ...config,
  }));

  return (
    <div className="medical-encyclopedia">
      {/* Header */}
      <div className="encyclopedia-header">
        <button className="back-btn" onClick={onBack}>
          ← Back
        </button>
        <h1 className="encyclopedia-title">📚 Medical Encyclopedia</h1>
      </div>

      {/* View Toggle */}
      <div className="view-toggle">
        <button
          className={`toggle-btn ${activeView === 'search' ? 'active' : ''}`}
          onClick={() => setActiveView('search')}
        >
          🔍 Search
        </button>
        <button
          className={`toggle-btn ${activeView === 'browse' ? 'active' : ''}`}
          onClick={() => setActiveView('browse')}
        >
          📖 Browse
        </button>
      </div>

      {/* Search Bar */}
      <div className="search-section">
        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder="Search conditions, symptoms, medications, anatomy..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="clear-search" onClick={() => setSearchQuery('')}>
              ✕
            </button>
          )}
        </div>
        {isSearching && <div className="searching-indicator">Searching...</div>}
      </div>

      {/* Entry Type Filters */}
      <div className="filter-section">
        <div className="filter-label">Filter by Type:</div>
        <div className="filter-chips">
          {entryTypeFilters.map(({ type, label, icon, color }) => (
            <button
              key={type}
              className={`filter-chip ${selectedEntryTypes.includes(type) ? 'active' : ''}`}
              style={{
                backgroundColor: selectedEntryTypes.includes(type) ? `${color}33` : undefined,
                borderColor: selectedEntryTypes.includes(type) ? color : undefined,
                color: selectedEntryTypes.includes(type) ? color : undefined,
              }}
              onClick={() => toggleEntryType(type)}
            >
              {icon} {label}
            </button>
          ))}
        </div>
      </div>

      {/* Category Filters */}
      <div className="filter-section">
        <div className="filter-label">Filter by Category:</div>
        <div className="filter-chips category-filters">
          <button
            className={`filter-chip ${selectedCategory === null ? 'active' : ''}`}
            onClick={() => setSelectedCategory(null)}
          >
            All Categories
          </button>
          {categoryFilters.map(({ category, label, color }) => (
            <button
              key={category}
              className={`filter-chip ${selectedCategory === category ? 'active' : ''}`}
              style={{
                backgroundColor: selectedCategory === category ? `${color}33` : undefined,
                borderColor: selectedCategory === category ? color : undefined,
                color: selectedCategory === category ? color : undefined,
              }}
              onClick={() => setSelectedCategory(category)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="encyclopedia-content">
        {activeView === 'search' ? (
          <>
            {/* Recent Searches */}
            {searchQuery.length === 0 && (
              <RecentSearches
                searches={recentSearches}
                onSelect={handleRecentSearchSelect}
                onClear={clearRecentSearches}
              />
            )}

            {/* Search Results */}
            {debouncedQuery.length >= 2 ? (
              searchResults.length > 0 ? (
                <div className="search-results">
                  <div className="results-header">
                    <span className="results-count">{searchResults.length} results found</span>
                  </div>
                  <div className="results-grid">
                    {searchResults.map(result => (
                      <SearchResultCard
                        key={result.entryId}
                        result={result}
                        onClick={() => handleSelectEntry(result.entryId)}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="no-results">
                  <div className="no-results-icon">🔍</div>
                  <h3>No results found</h3>
                  <p>Try different keywords or browse by category</p>
                </div>
              )
            ) : (
              <div className="search-prompt">
                <div className="prompt-icon">📚</div>
                <h3>Search the Medical Encyclopedia</h3>
                <p>Enter at least 2 characters to search across conditions, symptoms, medications, anatomy, and more.</p>
                <div className="search-tips">
                  <h4>Search tips:</h4>
                  <ul>
                    <li>Search by condition name: "diabetes", "hypertension"</li>
                    <li>Search by symptom: "chest pain", "fatigue"</li>
                    <li>Search by medication: "metformin", "lisinopril"</li>
                    <li>Search by anatomy: "heart", "liver", "kidney"</li>
                  </ul>
                </div>
              </div>
            )}
          </>
        ) : (
          /* Browse View */
          <AlphabeticalIndex
            entries={allEntries}
            onSelectEntry={handleSelectEntry}
          />
        )}
      </div>

      {/* Footer */}
      <div className="encyclopedia-footer">
        <p className="disclaimer">
          ℹ️ This encyclopedia is for educational purposes only and does not constitute medical advice.
        </p>
      </div>
    </div>
  );
}
