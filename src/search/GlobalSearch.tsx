/**
 * Global Search Component
 *
 * Main search bar component with keyboard shortcut support, autocomplete,
 * voice search readiness, and comprehensive filtering capabilities.
 */

import { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import { SearchEngine, getSearchEngine } from './SearchEngine';
import { SearchResults } from './SearchResults';
import { SearchFilters } from './SearchFilters';
import type {
  SearchResults as SearchResultsType,
  SearchSuggestion,
  SearchCategory,
  RecentSearch,
} from './types';
import { initializeAnatomyIndex, getIndexStats } from './SearchIndex';
import './GlobalSearch.css';

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
  const [results, setResults] = useState<SearchResultsType | null>(null);
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [recentSearches, setRecentSearches] = useState<RecentSearch[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<SearchCategory>('all');
  const [isSearching, setIsSearching] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
  const [isIndexReady, setIsIndexReady] = useState(false);

  // Refs
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  // Search engine
  const searchEngine = useMemo(() => getSearchEngine(), []);

  // ============================================
  // Index Initialization
  // ============================================

  useEffect(() => {
    // Initialize search index
    const stats = getIndexStats();
    if (stats.totalDocuments === 0) {
      initializeAnatomyIndex();
    }
    setIsIndexReady(true);
    setRecentSearches(searchEngine.getRecentSearches());
  }, [searchEngine]);

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
  // Search Logic
  // ============================================

  // Debounced search
  useEffect(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    if (query.length < 2) {
      setResults(null);
      setSuggestions([]);
      return;
    }

    // Get suggestions immediately
    const newSuggestions = searchEngine.getSuggestions(query);
    setSuggestions(newSuggestions);

    // Debounce full search
    debounceRef.current = setTimeout(() => {
      performSearch(query);
    }, 150);

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [query, searchEngine]);

  const performSearch = useCallback(async (searchQuery: string) => {
    if (!isIndexReady || searchQuery.length < 2) return;

    setIsSearching(true);
    setSelectedSuggestionIndex(-1);

    try {
      const searchResults = searchEngine.search({
        query: searchQuery,
        categories: selectedCategory === 'all' ? undefined : [selectedCategory],
        fuzzy: true,
        limit: 20,
        includeSuggestions: true,
      });

      setResults(searchResults);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setIsSearching(false);
    }
  }, [isIndexReady, searchEngine, selectedCategory]);

  // Re-search when category changes
  useEffect(() => {
    if (query.length >= 2) {
      performSearch(query);
    }
  }, [selectedCategory, query, performSearch]);

  // ============================================
  // Event Handlers
  // ============================================

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setQuery('');
    setResults(null);
    setSuggestions([]);
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

  const handleSuggestionClick = useCallback((suggestion: SearchSuggestion) => {
    setQuery(suggestion.text);
    performSearch(suggestion.text);
  }, [performSearch]);

  const handleRecentSearchClick = useCallback((recent: RecentSearch) => {
    setQuery(recent.query);
    performSearch(recent.query);
  }, [performSearch]);

  const handleClearHistory = useCallback(() => {
    searchEngine.clearHistory();
    setRecentSearches([]);
  }, [searchEngine]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    const totalItems = suggestions.length + (results?.results.length || 0);

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
        if (selectedSuggestionIndex >= 0) {
          if (selectedSuggestionIndex < suggestions.length) {
            handleSuggestionClick(suggestions[selectedSuggestionIndex]);
          } else {
            const resultIndex = selectedSuggestionIndex - suggestions.length;
            if (results?.results[resultIndex]) {
              handleResultClick(results.results[resultIndex]);
            }
          }
        } else if (query.length >= 2) {
          performSearch(query);
        }
        break;

      case 'Escape':
        if (!inline) {
          handleClose();
        } else {
          setQuery('');
          setResults(null);
        }
        break;
    }
  }, [
    suggestions,
    results,
    selectedSuggestionIndex,
    query,
    inline,
    handleClose,
    handleSuggestionClick,
    handleResultClick,
    performSearch,
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
                setResults(null);
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
                  <span className="recent-icon">🕐</span>
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

        {/* Suggestions dropdown */}
        {suggestions.length > 0 && query.length >= 2 && !results && (
          <div className="suggestions-list">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                className={`suggestion-item ${selectedSuggestionIndex === index ? 'selected' : ''}`}
                onClick={() => handleSuggestionClick(suggestion)}
              >
                <span className="suggestion-icon">{suggestion.icon}</span>
                <span className="suggestion-text">{suggestion.text}</span>
                <span className="suggestion-type">{suggestion.type}</span>
              </button>
            ))}
          </div>
        )}

        {/* Search Results */}
        {results && (
          <SearchResults
            results={results}
            onResultClick={handleResultClick}
            selectedIndex={selectedSuggestionIndex - suggestions.length}
            query={query}
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
          <span><kbd>↑</kbd><kbd>↓</kbd> to navigate</span>
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
