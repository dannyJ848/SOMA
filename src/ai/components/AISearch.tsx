/**
 * AI Search Component
 *
 * Semantic search component with AI-enhanced query understanding
 * and result presentation.
 */

import { useState, useCallback, useRef, useEffect } from 'react';
import { useAI } from '../useAI';
import { invoke } from '../../tauri-invoke';
import type { AISearchResult } from '../types';

// ============================================================================
// Types
// ============================================================================

interface AISearchProps {
  placeholder?: string;
  collections?: string[];
  maxResults?: number;
  onResultSelect?: (result: AISearchResult) => void;
  onSearchComplete?: (results: AISearchResult[]) => void;
  className?: string;
  autoFocus?: boolean;
}

interface EnhancedQuery {
  enhancedQuery: string;
  concepts: string[];
  relatedTerms: string[];
}

// ============================================================================
// Search Result Card
// ============================================================================

function SearchResultCard({
  result,
  onClick,
  isSelected,
}: {
  result: AISearchResult;
  onClick: () => void;
  isSelected?: boolean;
}) {
  const getSourceIcon = (source: string) => {
    if (source.toLowerCase().includes('openstax')) return '📚';
    if (source.toLowerCase().includes('pubmed')) return '🔬';
    if (source.toLowerCase().includes('anatomy')) return '🫀';
    if (source.toLowerCase().includes('histology')) return '🔬';
    return '📄';
  };

  const getRelevanceColor = (score: number) => {
    if (score >= 0.8) return '#22c55e';
    if (score >= 0.6) return '#eab308';
    return '#6b7280';
  };

  return (
    <div
      className={`search-result-card ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <div className="result-header">
        <span className="result-icon">{getSourceIcon(result.source)}</span>
        <h4 className="result-title">{result.title}</h4>
        <span
          className="result-score"
          style={{ color: getRelevanceColor(result.score) }}
        >
          {Math.round(result.score * 100)}%
        </span>
      </div>
      <p className="result-snippet">{result.snippet}</p>
      <div className="result-meta">
        <span className="result-source">{result.source}</span>
        <span className="result-collection">{result.collection}</span>
      </div>
    </div>
  );
}

// ============================================================================
// Related Terms Pills
// ============================================================================

function RelatedTerms({
  terms,
  onTermClick,
}: {
  terms: string[];
  onTermClick: (term: string) => void;
}) {
  if (terms.length === 0) return null;

  return (
    <div className="related-terms">
      <span className="terms-label">Related:</span>
      <div className="terms-list">
        {terms.slice(0, 5).map((term, i) => (
          <button
            key={i}
            className="term-pill"
            onClick={() => onTermClick(term)}
          >
            {term}
          </button>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// Main Component
// ============================================================================

export function AISearch({
  placeholder = 'Search with AI understanding...',
  collections = ['anatomy', 'conditions', 'medications', 'symptoms'],
  maxResults = 10,
  onResultSelect,
  onSearchComplete,
  className = '',
  autoFocus = false,
}: AISearchProps) {
  // State
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<AISearchResult[]>([]);
  const [enhancedQuery, setEnhancedQuery] = useState<EnhancedQuery | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [isEnhancing, setIsEnhancing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [showEnhancement, setShowEnhancement] = useState(false);

  // Refs
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  // AI
  const ai = useAI();

  // Auto focus
  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  // Debounced search
  useEffect(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    if (query.trim().length < 2) {
      setResults([]);
      setEnhancedQuery(null);
      return;
    }

    debounceRef.current = setTimeout(() => {
      performSearch(query);
    }, 300);

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [query]);

  // Perform search
  const performSearch = useCallback(async (searchQuery: string) => {
    setIsSearching(true);
    setError(null);

    try {
      // First, enhance the query using AI
      setIsEnhancing(true);
      let enhanced: EnhancedQuery | null = null;

      try {
        enhanced = await ai.enhanceSearchQuery(searchQuery);
        setEnhancedQuery(enhanced);
      } catch {
        // Continue with original query if enhancement fails
        enhanced = { enhancedQuery: searchQuery, concepts: [], relatedTerms: [] };
      }
      setIsEnhancing(false);

      // Perform RAG search
      const searchResults = await invoke<{
        results: AISearchResult[];
        success: boolean;
      }>('rag_search', {
        request: {
          query: enhanced?.enhancedQuery || searchQuery,
          collections,
          maxResults,
          minScore: 0.3,
        },
      });

      if (searchResults.success && searchResults.results) {
        setResults(searchResults.results);
        onSearchComplete?.(searchResults.results);
      } else {
        // Fallback: use mock results for browser development
        const mockResults: AISearchResult[] = [
          {
            id: '1',
            title: `Search result for "${searchQuery}"`,
            snippet: 'This is a sample search result. The actual implementation will query the RAG vector store.',
            score: 0.85,
            source: 'OpenStax Anatomy & Physiology 2e',
            collection: 'anatomy',
          },
          {
            id: '2',
            title: `Related content for "${searchQuery}"`,
            snippet: 'Additional relevant information from the knowledge base.',
            score: 0.72,
            source: 'Medical Encyclopedia',
            collection: 'conditions',
          },
        ];
        setResults(mockResults);
        onSearchComplete?.(mockResults);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Search failed');
      setResults([]);
    } finally {
      setIsSearching(false);
      setIsEnhancing(false);
    }
  }, [ai, collections, maxResults, onSearchComplete]);

  // Handle result selection
  const handleResultSelect = useCallback((result: AISearchResult) => {
    onResultSelect?.(result);
  }, [onResultSelect]);

  // Handle term click
  const handleTermClick = useCallback((term: string) => {
    setQuery(term);
  }, []);

  // Keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => Math.max(prev - 1, -1));
        break;
      case 'Enter':
        if (selectedIndex >= 0 && results[selectedIndex]) {
          handleResultSelect(results[selectedIndex]);
        }
        break;
      case 'Escape':
        setQuery('');
        setResults([]);
        inputRef.current?.blur();
        break;
    }
  }, [results, selectedIndex, handleResultSelect]);

  // Clear search
  const handleClear = useCallback(() => {
    setQuery('');
    setResults([]);
    setEnhancedQuery(null);
    inputRef.current?.focus();
  }, []);

  return (
    <div className={`ai-search ${className}`}>
      {/* Search Input */}
      <div className="search-input-container">
        <div className="search-icon">
          {isSearching ? (
            <svg className="spinner" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" strokeDasharray="32" strokeDashoffset="32">
                <animate attributeName="stroke-dashoffset" values="32;0" dur="1s" repeatCount="indefinite" />
              </circle>
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          )}
        </div>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="search-input"
        />
        {query && (
          <button className="clear-btn" onClick={handleClear}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        )}
        {isEnhancing && (
          <span className="enhancing-badge">AI enhancing...</span>
        )}
      </div>

      {/* AI Enhancement Indicator */}
      {enhancedQuery && query && (
        <div className="enhancement-info">
          <button
            className="toggle-enhancement"
            onClick={() => setShowEnhancement(!showEnhancement)}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            AI-enhanced search
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{ transform: showEnhancement ? 'rotate(180deg)' : 'none' }}
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          {showEnhancement && (
            <div className="enhancement-details">
              <div className="enhanced-query">
                <span className="label">Enhanced:</span>
                <span className="value">{enhancedQuery.enhancedQuery}</span>
              </div>
              {enhancedQuery.concepts.length > 0 && (
                <div className="concepts">
                  <span className="label">Concepts:</span>
                  <span className="value">{enhancedQuery.concepts.join(', ')}</span>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Related Terms */}
      {enhancedQuery && (
        <RelatedTerms
          terms={enhancedQuery.relatedTerms}
          onTermClick={handleTermClick}
        />
      )}

      {/* Error */}
      {error && (
        <div className="search-error">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M15 9l-6 6M9 9l6 6" />
          </svg>
          {error}
        </div>
      )}

      {/* Results */}
      {results.length > 0 && (
        <div className="search-results">
          <div className="results-header">
            <span className="results-count">{results.length} results</span>
          </div>
          <div className="results-list">
            {results.map((result, i) => (
              <SearchResultCard
                key={result.id}
                result={result}
                onClick={() => handleResultSelect(result)}
                isSelected={i === selectedIndex}
              />
            ))}
          </div>
        </div>
      )}

      {/* No Results */}
      {query.length >= 2 && !isSearching && results.length === 0 && !error && (
        <div className="no-results">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
            <path d="M8 8l6 6M8 14l6-6" />
          </svg>
          <p>No results found for "{query}"</p>
          <span>Try different keywords or check spelling</span>
        </div>
      )}

      <style>{`
        .ai-search {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .search-input-container {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          background: #252538;
          border: 1px solid #333;
          border-radius: 10px;
          transition: border-color 0.15s;
        }

        .search-input-container:focus-within {
          border-color: #4a9eff;
        }

        .search-icon {
          color: #666;
          display: flex;
          align-items: center;
        }

        .spinner {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .search-input {
          flex: 1;
          background: none;
          border: none;
          color: #fff;
          font-size: 15px;
          outline: none;
        }

        .search-input::placeholder {
          color: #666;
        }

        .clear-btn {
          background: none;
          border: none;
          color: #666;
          cursor: pointer;
          padding: 4px;
          display: flex;
          align-items: center;
        }

        .clear-btn:hover {
          color: #fff;
        }

        .enhancing-badge {
          padding: 4px 8px;
          background: rgba(74, 158, 255, 0.2);
          color: #4a9eff;
          border-radius: 4px;
          font-size: 11px;
        }

        .enhancement-info {
          background: #1e1e30;
          border: 1px solid #333;
          border-radius: 8px;
          overflow: hidden;
        }

        .toggle-enhancement {
          display: flex;
          align-items: center;
          gap: 8px;
          width: 100%;
          padding: 10px 12px;
          background: none;
          border: none;
          color: #888;
          cursor: pointer;
          font-size: 12px;
          text-align: left;
          transition: background 0.15s;
        }

        .toggle-enhancement:hover {
          background: #252538;
        }

        .toggle-enhancement svg:last-child {
          margin-left: auto;
          transition: transform 0.15s;
        }

        .enhancement-details {
          padding: 10px 12px;
          border-top: 1px solid #333;
          font-size: 12px;
        }

        .enhancement-details > div {
          display: flex;
          gap: 8px;
          margin-bottom: 6px;
        }

        .enhancement-details .label {
          color: #666;
        }

        .enhancement-details .value {
          color: #ccc;
        }

        .related-terms {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .terms-label {
          font-size: 12px;
          color: #666;
        }

        .terms-list {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }

        .term-pill {
          padding: 4px 10px;
          background: #252538;
          border: 1px solid #333;
          border-radius: 16px;
          color: #888;
          cursor: pointer;
          font-size: 12px;
          transition: all 0.15s;
        }

        .term-pill:hover {
          background: #2a2a4a;
          color: #ccc;
          border-color: #4a9eff;
        }

        .search-error {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px;
          background: rgba(255, 107, 107, 0.1);
          color: #ff6b6b;
          border-radius: 8px;
          font-size: 13px;
        }

        .search-results {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .results-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .results-count {
          font-size: 12px;
          color: #888;
        }

        .results-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .search-result-card {
          padding: 12px;
          background: #252538;
          border: 1px solid #333;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.15s;
        }

        .search-result-card:hover {
          background: #2a2a4a;
          border-color: #4a9eff;
        }

        .search-result-card.selected {
          background: #2a2a4a;
          border-color: #4a9eff;
        }

        .result-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }

        .result-icon {
          font-size: 16px;
        }

        .result-title {
          flex: 1;
          margin: 0;
          font-size: 14px;
          font-weight: 500;
          color: #fff;
        }

        .result-score {
          font-size: 12px;
          font-weight: 600;
        }

        .result-snippet {
          margin: 0 0 8px 0;
          font-size: 13px;
          color: #aaa;
          line-height: 1.5;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .result-meta {
          display: flex;
          gap: 12px;
          font-size: 11px;
        }

        .result-source {
          color: #4a9eff;
        }

        .result-collection {
          color: #666;
          text-transform: capitalize;
        }

        .no-results {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 32px;
          color: #666;
          text-align: center;
        }

        .no-results p {
          margin: 0;
          font-size: 14px;
          color: #888;
        }

        .no-results span {
          font-size: 12px;
        }
      `}</style>
    </div>
  );
}

export default AISearch;
