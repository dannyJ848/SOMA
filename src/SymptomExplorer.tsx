/**
 * SymptomExplorer Component
 *
 * Main component for exploring symptoms and their anatomical sources.
 * Integrates with 3D anatomy viewer, AI chat, and RAG system.
 */

import { useState, useCallback, useMemo } from 'react';
import { useAnatomy3DNavigation, type SymptomSource } from './hooks/useAnatomy3DNavigation';
import {
  searchSymptoms,
  getSymptomAnatomyMapping,
  getAllSymptomAnatomyMappings,
  getSymptomAnatomyHighlights,
} from '../core/exploration/symptom-anatomy/store';
import type {
  SymptomAnatomyMapping,
  AnatomicalSource,
  RedFlag,
  LikelihoodLevel,
  SymptomSearchResult,
} from '../core/exploration/symptom-anatomy/types';
import { type DashboardData } from './utils/anatomyContextBuilder';
import './SymptomExplorer.css';

// ============================================
// Props
// ============================================

interface SymptomExplorerProps {
  onBack: () => void;
  dashboardData: DashboardData | null;
  onNavigateToAnatomy?: () => void;
}

// ============================================
// Likelihood Badge Component
// ============================================

interface LikelihoodBadgeProps {
  likelihood: LikelihoodLevel;
}

function LikelihoodBadge({ likelihood }: LikelihoodBadgeProps) {
  const badgeStyles: Record<LikelihoodLevel, { bg: string; text: string; label: string }> = {
    common: { bg: '#22c55e22', text: '#22c55e', label: 'Common' },
    'less-common': { bg: '#eab30822', text: '#eab308', label: 'Less Common' },
    rare: { bg: '#f9731622', text: '#f97316', label: 'Rare' },
    'do-not-miss': { bg: '#ef444422', text: '#ef4444', label: 'Do Not Miss' },
  };

  const style = badgeStyles[likelihood];

  return (
    <span
      className="likelihood-badge"
      style={{ backgroundColor: style.bg, color: style.text }}
    >
      {style.label}
    </span>
  );
}

// ============================================
// Red Flag Component
// ============================================

interface RedFlagCardProps {
  redFlag: RedFlag;
}

function RedFlagCard({ redFlag }: RedFlagCardProps) {
  const urgencyColors: Record<string, string> = {
    immediate: '#ef4444',
    urgent: '#f97316',
    soon: '#eab308',
  };

  return (
    <div className="red-flag-card">
      <div className="red-flag-header">
        <span
          className="red-flag-urgency"
          style={{ backgroundColor: urgencyColors[redFlag.urgency] }}
        >
          {redFlag.urgency.toUpperCase()}
        </span>
      </div>
      <div className="red-flag-finding">{redFlag.finding}</div>
      <div className="red-flag-concern">
        <strong>Concern:</strong> {redFlag.concern}
      </div>
      <div className="red-flag-action">
        <strong>Action:</strong> {redFlag.actionRequired}
      </div>
    </div>
  );
}

// ============================================
// Anatomical Source Card Component
// ============================================

interface AnatomicalSourceCardProps {
  source: AnatomicalSource;
  isHighlighted: boolean;
  onHighlight: () => void;
  onNavigate: () => void;
}

function AnatomicalSourceCard({
  source,
  isHighlighted,
  onHighlight,
  onNavigate,
}: AnatomicalSourceCardProps) {
  return (
    <div
      className={`anatomical-source-card ${isHighlighted ? 'highlighted' : ''}`}
      style={{ borderLeftColor: source.highlightColor }}
    >
      <div className="source-header">
        <div className="source-name">
          <span
            className="source-color-dot"
            style={{ backgroundColor: source.highlightColor }}
          />
          {source.structureName}
        </div>
        <LikelihoodBadge likelihood={source.likelihood} />
      </div>

      <div className="source-system">{source.system}</div>

      <div className="source-mechanism">{source.mechanism}</div>

      {source.characteristicFeatures && source.characteristicFeatures.length > 0 && (
        <div className="source-features">
          <strong>Typical features:</strong>
          <ul>
            {source.characteristicFeatures.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
      )}

      {source.aggravatingFactors && source.aggravatingFactors.length > 0 && (
        <div className="source-factors">
          <span className="factor-label aggravating">Worse with:</span>
          {source.aggravatingFactors.join(', ')}
        </div>
      )}

      {source.relievingFactors && source.relievingFactors.length > 0 && (
        <div className="source-factors">
          <span className="factor-label relieving">Better with:</span>
          {source.relievingFactors.join(', ')}
        </div>
      )}

      <div className="source-actions">
        <button
          className="source-action-btn highlight-btn"
          onClick={onHighlight}
          title="Highlight in 3D viewer"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          Highlight
        </button>
        <button
          className="source-action-btn navigate-btn"
          onClick={onNavigate}
          title="Navigate to in 3D viewer"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="3 11 22 2 13 21 11 13 3 11" />
          </svg>
          Navigate
        </button>
      </div>
    </div>
  );
}

// ============================================
// Main Component
// ============================================

export function SymptomExplorer({
  onBack,
  dashboardData,
  onNavigateToAnatomy,
}: SymptomExplorerProps) {
  // State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSymptom, setSelectedSymptom] = useState<SymptomAnatomyMapping | null>(null);
  const [searchResults, setSearchResults] = useState<SymptomSearchResult[]>([]);
  const [highlightedSourceId, setHighlightedSourceId] = useState<string | null>(null);
  const [complexityLevel, setComplexityLevel] = useState<1 | 2 | 3 | 4 | 5>(3);
  const [showRedFlags, setShowRedFlags] = useState(true);

  // 3D Navigation API
  const navigation = useAnatomy3DNavigation({
    componentId: 'SymptomExplorer',
    autoResetOnUnmount: true,
  });

  // Get all available symptoms for browsing
  const allSymptoms = useMemo(() => getAllSymptomAnatomyMappings(), []);

  // Search handler
  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    if (query.trim().length > 0) {
      const results = searchSymptoms(query);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, []);

  // Select symptom handler
  const handleSelectSymptom = useCallback((symptomId: string) => {
    const mapping = getSymptomAnatomyMapping(symptomId);
    if (mapping) {
      setSelectedSymptom(mapping);
      setSearchQuery('');
      setSearchResults([]);

      // Get highlights for 3D viewer
      const highlights = getSymptomAnatomyHighlights(symptomId);

      // Convert to SymptomSource format and focus
      const sources: SymptomSource[] = highlights.map((h) => ({
        structureId: h.structureId,
        structureName: h.structureName,
        likelihood: h.likelihood,
        highlightColor: h.highlightColor,
      }));

      navigation.focusOnSymptomSources(sources);
    }
  }, [navigation]);

  // Highlight single source
  const handleHighlightSource = useCallback((source: AnatomicalSource) => {
    setHighlightedSourceId(source.structureId);
    navigation.highlightSingleStructure(
      source.structureId,
      source.highlightColor,
      source.likelihood === 'do-not-miss'
    );
  }, [navigation]);

  // Navigate to source
  const handleNavigateToSource = useCallback((source: AnatomicalSource) => {
    navigation.navigateToRegion(source.structureId, {
      animate: true,
      duration: 800,
      highlight: true,
      highlightColor: source.highlightColor,
    });

    // Also open anatomy view if callback provided
    if (onNavigateToAnatomy) {
      onNavigateToAnatomy();
    }
  }, [navigation, onNavigateToAnatomy]);

  // Clear selection
  const handleClearSelection = useCallback(() => {
    setSelectedSymptom(null);
    setHighlightedSourceId(null);
    navigation.clearHighlights();
    navigation.resetView();
  }, [navigation]);

  // Get current explanation based on complexity level
  const currentExplanation = useMemo(() => {
    if (!selectedSymptom) return '';
    return selectedSymptom.explanations[`level${complexityLevel}`] || '';
  }, [selectedSymptom, complexityLevel]);

  // Sort sources by likelihood (do-not-miss first)
  const sortedSources = useMemo(() => {
    if (!selectedSymptom) return [];
    const order: Record<LikelihoodLevel, number> = {
      'do-not-miss': 0,
      common: 1,
      'less-common': 2,
      rare: 3,
    };
    return [...selectedSymptom.anatomicalSources].sort(
      (a, b) => order[a.likelihood] - order[b.likelihood]
    );
  }, [selectedSymptom]);

  // User's relevant symptoms from dashboard
  const userRelevantSymptoms = useMemo(() => {
    if (!dashboardData?.recentSymptoms) return [];
    return dashboardData.recentSymptoms.filter((s) =>
      allSymptoms.some(
        (mapping) =>
          mapping.symptomName.toLowerCase().includes(s.description.toLowerCase()) ||
          mapping.aliases.some((a) => a.toLowerCase().includes(s.description.toLowerCase()))
      )
    ).map((s, index) => ({
      ...s,
      id: index,
    }));
  }, [dashboardData, allSymptoms]);

  return (
    <div className="symptom-explorer">
      {/* Header */}
      <div className="symptom-explorer-header">
        <button onClick={onBack} className="back-button">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        <h1>Symptom Explorer</h1>
        {selectedSymptom && (
          <button onClick={handleClearSelection} className="clear-button">
            Clear
          </button>
        )}
      </div>

      {/* Search Section */}
      {!selectedSymptom && (
        <div className="search-section">
          <div className="search-input-wrapper">
            <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              className="search-input"
              placeholder="Search symptoms (e.g., chest pain, headache, shortness of breath)..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              autoFocus
            />
          </div>

          {/* Search Results */}
          {searchResults.length > 0 && (
            <div className="search-results">
              {searchResults.map((result) => (
                <button
                  key={result.symptomId}
                  className="search-result-item"
                  onClick={() => handleSelectSymptom(result.symptomId)}
                >
                  <span className="result-name">{result.symptomName}</span>
                  <span className="result-match-type">{result.matchType}</span>
                </button>
              ))}
            </div>
          )}

          {/* User's Recent Symptoms */}
          {userRelevantSymptoms.length > 0 && !searchQuery && (
            <div className="user-symptoms-section">
              <h3>Your Recent Symptoms</h3>
              <div className="user-symptoms-list">
                {userRelevantSymptoms.map((s) => (
                  <button
                    key={s.id}
                    className="user-symptom-item"
                    onClick={() => handleSearch(s.description)}
                  >
                    {s.description}
                    {s.location && (
                      <span className="symptom-location">
                        {s.location}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Browse All Symptoms */}
          <div className="browse-section">
            <h3>Browse All Symptoms</h3>
            <div className="symptom-grid">
              {allSymptoms.map((symptom) => (
                <button
                  key={symptom.symptomId}
                  className="symptom-browse-card"
                  onClick={() => handleSelectSymptom(symptom.symptomId)}
                >
                  <div className="symptom-card-name">{symptom.symptomName}</div>
                  <div className="symptom-card-region">{symptom.bodyRegion}</div>
                  <div className="symptom-card-sources">
                    {symptom.anatomicalSources.length} anatomical sources
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Selected Symptom Detail */}
      {selectedSymptom && (
        <div className="symptom-detail">
          {/* Symptom Header */}
          <div className="symptom-detail-header">
            <h2>{selectedSymptom.symptomName}</h2>
            <div className="symptom-meta">
              <span className="meta-item category">{selectedSymptom.category}</span>
              <span className="meta-item region">{selectedSymptom.bodyRegion}</span>
            </div>
            <p className="symptom-description">{selectedSymptom.description}</p>
          </div>

          {/* Complexity Level Selector */}
          <div className="complexity-selector">
            <span className="complexity-label">Explanation Level:</span>
            <div className="complexity-buttons">
              {([1, 2, 3, 4, 5] as const).map((level) => (
                <button
                  key={level}
                  className={`complexity-btn ${complexityLevel === level ? 'active' : ''}`}
                  onClick={() => setComplexityLevel(level)}
                >
                  {level}
                </button>
              ))}
            </div>
            <span className="complexity-hint">
              {complexityLevel <= 2 ? 'Patient-friendly' : complexityLevel === 3 ? 'General' : 'Medical professional'}
            </span>
          </div>

          {/* Explanation */}
          <div className="symptom-explanation">
            <p>{currentExplanation}</p>
          </div>

          {/* Red Flags Section */}
          {selectedSymptom.redFlags.length > 0 && (
            <div className="red-flags-section">
              <div
                className="red-flags-header"
                onClick={() => setShowRedFlags(!showRedFlags)}
              >
                <h3>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                  Red Flags ({selectedSymptom.redFlags.length})
                </h3>
                <span className="toggle-icon">{showRedFlags ? '−' : '+'}</span>
              </div>
              {showRedFlags && (
                <div className="red-flags-list">
                  {selectedSymptom.redFlags.map((rf, i) => (
                    <RedFlagCard key={i} redFlag={rf} />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Anatomical Sources */}
          <div className="anatomical-sources-section">
            <h3>
              Anatomical Sources ({selectedSymptom.anatomicalSources.length})
            </h3>
            <p className="sources-hint">
              Click to highlight in the 3D anatomy viewer
            </p>
            <div className="sources-list">
              {sortedSources.map((source) => (
                <AnatomicalSourceCard
                  key={source.structureId}
                  source={source}
                  isHighlighted={highlightedSourceId === source.structureId}
                  onHighlight={() => handleHighlightSource(source)}
                  onNavigate={() => handleNavigateToSource(source)}
                />
              ))}
            </div>
          </div>

          {/* Referred Pain Patterns */}
          {selectedSymptom.referredPainPatterns.length > 0 && (
            <div className="referred-pain-section">
              <h3>Referred Pain Patterns</h3>
              <div className="referred-pain-list">
                {selectedSymptom.referredPainPatterns.map((pattern, i) => (
                  <div key={i} className="referred-pain-card">
                    <div className="referred-source">
                      <strong>{pattern.sourceOrgan}</strong>
                      {pattern.sourceLocation && ` (${pattern.sourceLocation})`}
                    </div>
                    <div className="referred-to">
                      <span className="referred-arrow">→</span>
                      {pattern.referredTo.join(', ')}
                    </div>
                    {pattern.dermatomalLevel && (
                      <div className="dermatome">
                        Dermatome: {pattern.dermatomalLevel}
                      </div>
                    )}
                    <div className="referred-mechanism">{pattern.mechanism}</div>
                    <div className="referred-example">
                      <em>Example: {pattern.clinicalExample}</em>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Differential Considerations */}
          <div className="differential-section">
            <h3>Differential Considerations</h3>
            <div className="differential-list">
              {selectedSymptom.differentialConsiderations.map((dx, i) => (
                <span key={i} className="differential-item">
                  {dx}
                </span>
              ))}
            </div>
          </div>

          {/* Related Symptoms */}
          <div className="related-symptoms-section">
            <h3>Related Symptoms</h3>
            <div className="related-symptoms-list">
              {selectedSymptom.relatedSymptoms.map((symptom, i) => (
                <button
                  key={i}
                  className="related-symptom-btn"
                  onClick={() => handleSearch(symptom)}
                >
                  {symptom}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
