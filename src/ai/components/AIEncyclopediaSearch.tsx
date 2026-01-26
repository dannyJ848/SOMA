/**
 * AI-Enhanced Encyclopedia Search
 *
 * Semantic search component for the Medical Encyclopedia with:
 * - AI-powered query understanding and expansion
 * - "Explain like I'm 5" / "Explain like a doctor" toggle
 * - AI-generated summaries
 * - Cross-reference suggestions
 */

import { useState, useCallback, useMemo } from 'react';
import { useAI, useAIContext } from '../index';
import type { ExplanationLevel } from '../types';

interface AIEncyclopediaSearchProps {
  onSearch: (query: string, enhancedTerms?: string[]) => void;
  onExplainEntry?: (entryId: string, question?: string) => void;
  currentEntry?: {
    id: string;
    name: string;
    type: string;
    category: string;
    summary: string;
  };
}

const LEVEL_LABELS: Record<ExplanationLevel, { label: string; description: string }> = {
  simple: { label: 'Simple', description: 'Explain like I\'m 5' },
  intermediate: { label: 'Standard', description: 'General audience' },
  advanced: { label: 'Advanced', description: 'Science background' },
  clinical: { label: 'Clinical', description: 'Medical professional' },
};

export function AIEncyclopediaSearch({
  onSearch,
  onExplainEntry,
  currentEntry,
}: AIEncyclopediaSearchProps) {
  const ai = useAI();
  const context = useAIContext();

  const [searchQuery, setSearchQuery] = useState('');
  const [isEnhancing, setIsEnhancing] = useState(false);
  const [enhancedResults, setEnhancedResults] = useState<{
    concepts: string[];
    relatedTerms: string[];
  } | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [explanation, setExplanation] = useState<string | null>(null);
  const [isExplaining, setIsExplaining] = useState(false);

  // Handle search with AI enhancement
  const handleSearch = useCallback(async () => {
    if (!searchQuery.trim()) return;

    setIsEnhancing(true);
    setEnhancedResults(null);

    try {
      if (ai.isAvailable) {
        const enhanced = await ai.enhanceSearchQuery(searchQuery);
        setEnhancedResults({
          concepts: enhanced.concepts,
          relatedTerms: enhanced.relatedTerms,
        });
        onSearch(enhanced.enhancedQuery, enhanced.relatedTerms);
      } else {
        onSearch(searchQuery);
      }
    } catch (err) {
      console.error('Search enhancement failed:', err);
      onSearch(searchQuery);
    } finally {
      setIsEnhancing(false);
    }
  }, [searchQuery, ai, onSearch]);

  // Handle key press
  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }, [handleSearch]);

  // Handle explanation level change
  const handleLevelChange = useCallback((level: ExplanationLevel) => {
    context.setExplanationLevel(level);
    if (currentEntry && showExplanation) {
      // Re-generate explanation at new level
      handleExplainEntry();
    }
  }, [context, currentEntry, showExplanation]);

  // Handle explain entry
  const handleExplainEntry = useCallback(async () => {
    if (!currentEntry) return;

    setIsExplaining(true);
    setShowExplanation(true);

    try {
      const response = await ai.ask(
        `Explain ${currentEntry.name} in the context of ${currentEntry.category}. ${currentEntry.summary ? `Current summary: ${currentEntry.summary}` : ''}`
      );
      setExplanation(response.content);

      if (onExplainEntry) {
        onExplainEntry(currentEntry.id);
      }
    } catch (err) {
      console.error('Failed to generate explanation:', err);
      setExplanation('Unable to generate explanation. Please try again.');
    } finally {
      setIsExplaining(false);
    }
  }, [currentEntry, ai, onExplainEntry]);

  // Suggested searches based on current entry
  const suggestedSearches = useMemo(() => {
    if (!currentEntry) return [];

    return [
      `Symptoms of ${currentEntry.name}`,
      `Causes of ${currentEntry.name}`,
      `Treatment for ${currentEntry.name}`,
      `Related conditions to ${currentEntry.name}`,
    ].slice(0, 3);
  }, [currentEntry]);

  return (
    <div className="ai-encyclopedia-search">
      {/* Search Section */}
      <div className="search-section">
        <div className="search-input-container">
          <span className="search-icon">Search</span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Search with AI-powered understanding..."
            className="search-input"
          />
          <button
            onClick={handleSearch}
            disabled={isEnhancing || !searchQuery.trim()}
            className="search-btn"
          >
            {isEnhancing ? 'Searching...' : 'Search'}
          </button>
        </div>

        {/* AI Enhancement Results */}
        {enhancedResults && (
          <div className="enhanced-results">
            {enhancedResults.concepts.length > 0 && (
              <div className="concepts">
                <span className="label">Key concepts:</span>
                <div className="tags">
                  {enhancedResults.concepts.map((concept, i) => (
                    <span key={i} className="tag concept">{concept}</span>
                  ))}
                </div>
              </div>
            )}
            {enhancedResults.relatedTerms.length > 0 && (
              <div className="related-terms">
                <span className="label">Also search:</span>
                <div className="tags">
                  {enhancedResults.relatedTerms.slice(0, 5).map((term, i) => (
                    <button
                      key={i}
                      className="tag related"
                      onClick={() => {
                        setSearchQuery(term);
                        onSearch(term);
                      }}
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Explanation Level Toggle */}
      <div className="level-toggle">
        <span className="toggle-label">Explanation level:</span>
        <div className="level-buttons">
          {(Object.entries(LEVEL_LABELS) as [ExplanationLevel, typeof LEVEL_LABELS[ExplanationLevel]][]).map(([level, config]) => (
            <button
              key={level}
              className={`level-btn ${context.explanationLevel === level ? 'active' : ''}`}
              onClick={() => handleLevelChange(level)}
              title={config.description}
            >
              {config.label}
            </button>
          ))}
        </div>
      </div>

      {/* Current Entry Actions */}
      {currentEntry && (
        <div className="current-entry-section">
          <div className="entry-header">
            <h4>{currentEntry.name}</h4>
            <span className="entry-type">{currentEntry.type}</span>
          </div>

          <div className="entry-actions">
            <button
              className="action-btn primary"
              onClick={handleExplainEntry}
              disabled={isExplaining}
            >
              {isExplaining ? 'Generating...' : `Explain at ${LEVEL_LABELS[context.explanationLevel].label} level`}
            </button>

            {suggestedSearches.map((search, i) => (
              <button
                key={i}
                className="action-btn"
                onClick={() => {
                  setSearchQuery(search);
                  handleSearch();
                }}
              >
                {search}
              </button>
            ))}
          </div>

          {/* AI Explanation */}
          {showExplanation && (
            <div className="explanation-panel">
              <div className="explanation-header">
                <span>AI Explanation</span>
                <button onClick={() => setShowExplanation(false)}>Close</button>
              </div>
              <div className="explanation-content">
                {isExplaining ? (
                  <div className="loading">Generating explanation...</div>
                ) : (
                  <p>{explanation}</p>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* AI Status */}
      {!ai.isAvailable && (
        <div className="ai-status-warning">
          AI features are currently unavailable. Basic search will be used.
        </div>
      )}

      <style>{`
        .ai-encyclopedia-search {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 16px;
          background: #1e1e1e;
          border-radius: 8px;
          color: #e0e0e0;
        }

        .search-section {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .search-input-container {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .search-icon {
          padding: 8px 12px;
          background: #333;
          border-radius: 4px 0 0 4px;
          color: #888;
          font-size: 12px;
        }

        .search-input {
          flex: 1;
          padding: 10px 12px;
          background: #252525;
          border: 1px solid #333;
          border-radius: 0;
          color: #e0e0e0;
          font-size: 14px;
        }

        .search-input:focus {
          outline: none;
          border-color: #4a9eff;
        }

        .search-btn {
          padding: 10px 20px;
          background: linear-gradient(135deg, #4a9eff 0%, #7c3aed 100%);
          border: none;
          border-radius: 0 4px 4px 0;
          color: white;
          font-weight: 500;
          cursor: pointer;
        }

        .search-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .enhanced-results {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 12px;
          background: rgba(74, 158, 255, 0.1);
          border-radius: 6px;
          border: 1px solid rgba(74, 158, 255, 0.2);
        }

        .concepts, .related-terms {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .label {
          font-size: 12px;
          color: #888;
        }

        .tags {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }

        .tag {
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
        }

        .tag.concept {
          background: rgba(74, 158, 255, 0.2);
          color: #4a9eff;
        }

        .tag.related {
          background: #333;
          color: #ccc;
          border: none;
          cursor: pointer;
        }

        .tag.related:hover {
          background: #444;
        }

        .level-toggle {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .toggle-label {
          font-size: 12px;
          color: #888;
        }

        .level-buttons {
          display: flex;
          gap: 4px;
        }

        .level-btn {
          padding: 6px 12px;
          background: #333;
          border: none;
          border-radius: 4px;
          color: #888;
          font-size: 12px;
          cursor: pointer;
        }

        .level-btn:hover {
          background: #444;
          color: #ccc;
        }

        .level-btn.active {
          background: #4a9eff;
          color: white;
        }

        .current-entry-section {
          padding-top: 16px;
          border-top: 1px solid #333;
        }

        .entry-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .entry-header h4 {
          margin: 0;
          font-size: 16px;
        }

        .entry-type {
          padding: 2px 8px;
          background: #333;
          border-radius: 4px;
          font-size: 11px;
          color: #888;
        }

        .entry-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .action-btn {
          padding: 8px 12px;
          background: #333;
          border: none;
          border-radius: 4px;
          color: #ccc;
          font-size: 12px;
          cursor: pointer;
        }

        .action-btn:hover {
          background: #444;
        }

        .action-btn.primary {
          background: linear-gradient(135deg, #4a9eff 0%, #7c3aed 100%);
          color: white;
          font-weight: 500;
        }

        .action-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .explanation-panel {
          margin-top: 16px;
          background: #252525;
          border-radius: 8px;
          overflow: hidden;
        }

        .explanation-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          background: #333;
        }

        .explanation-header span {
          font-size: 13px;
          font-weight: 500;
        }

        .explanation-header button {
          padding: 4px 8px;
          background: none;
          border: none;
          color: #888;
          cursor: pointer;
          font-size: 12px;
        }

        .explanation-header button:hover {
          color: #ccc;
        }

        .explanation-content {
          padding: 16px;
        }

        .explanation-content p {
          margin: 0;
          line-height: 1.6;
          font-size: 14px;
        }

        .loading {
          color: #888;
          font-style: italic;
        }

        .ai-status-warning {
          padding: 12px;
          background: rgba(255, 193, 7, 0.1);
          border: 1px solid rgba(255, 193, 7, 0.2);
          border-radius: 6px;
          font-size: 12px;
          color: #ffc107;
        }
      `}</style>
    </div>
  );
}

export default AIEncyclopediaSearch;
