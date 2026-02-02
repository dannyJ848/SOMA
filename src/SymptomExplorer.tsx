/**
 * SymptomExplorer Component
 *
 * Main component for exploring symptoms from the full 155+ symptom database.
 * Groups by body system, supports bilingual search (EN/ES), and shows
 * rich detail including possible causes, red flags, and knowledge-graph links.
 * Integrates with 3D anatomy viewer, AI chat, and RAG system.
 */

import { useState, useCallback, useMemo, useEffect } from 'react';
import { useAnatomy3DNavigation, type SymptomSource } from './hooks/useAnatomy3DNavigation';
import { useActionTracker } from './hooks/useActionTracker';
import { useContentService, type SymptomEntry, type SymptomInfo } from './services/ContentService';
import { useTranslation } from './i18n/useI18n';
import type { SymptomExplorerAction } from '../core/intent-prediction/types';
import {
  getSymptomAnatomyMapping,
  getSymptomAnatomyHighlights,
} from '../core/exploration/symptom-anatomy/store';
import type {
  SymptomAnatomyMapping,
  AnatomicalSource,
  RedFlag,
  LikelihoodLevel,
} from '../core/exploration/symptom-anatomy/types';
import { type DashboardData } from './utils/anatomyContextBuilder';
import { SymptomFollowUpChat } from './SymptomFollowUpChat';
import './SymptomExplorer.css';

// ============================================
// Types
// ============================================

/** Body system display metadata */
const BODY_SYSTEM_LABELS: Record<string, { en: string; es: string; icon: string }> = {
  general: { en: 'General / Constitutional', es: 'General / Constitucional', icon: '🌡' },
  neurological: { en: 'Neurological', es: 'Neurologico', icon: '🧠' },
  cardiovascular: { en: 'Cardiovascular', es: 'Cardiovascular', icon: '❤' },
  respiratory: { en: 'Respiratory', es: 'Respiratorio', icon: '🫁' },
  gastrointestinal: { en: 'Gastrointestinal', es: 'Gastrointestinal', icon: '🫃' },
  genitourinary: { en: 'Genitourinary', es: 'Genitourinario', icon: '🫘' },
  musculoskeletal: { en: 'Musculoskeletal', es: 'Musculoesqueletico', icon: '🦴' },
  dermatological: { en: 'Dermatological', es: 'Dermatologico', icon: '🩹' },
  endocrine: { en: 'Endocrine', es: 'Endocrino', icon: '⚗' },
  hematologic: { en: 'Hematologic', es: 'Hematologico', icon: '🩸' },
  immunologic: { en: 'Immunologic', es: 'Inmunologico', icon: '🛡' },
  psychiatric: { en: 'Psychiatric', es: 'Psiquiatrico', icon: '🧩' },
  reproductive: { en: 'Reproductive', es: 'Reproductivo', icon: '🌸' },
  ophthalmologic: { en: 'Ophthalmologic', es: 'Oftalmologico', icon: '👁' },
  otologic: { en: 'Otologic', es: 'Otologico', icon: '👂' },
  oropharyngeal: { en: 'Oropharyngeal', es: 'Orofaringeo', icon: '🗣' },
};

const BODY_SYSTEM_ORDER = [
  'general',
  'neurological',
  'cardiovascular',
  'respiratory',
  'gastrointestinal',
  'genitourinary',
  'musculoskeletal',
  'dermatological',
  'endocrine',
  'hematologic',
  'immunologic',
  'psychiatric',
  'reproductive',
  'ophthalmologic',
  'otologic',
  'oropharyngeal',
];

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
  likelihood: LikelihoodLevel | 'common' | 'less-common' | 'rare' | 'do-not-miss';
}

function LikelihoodBadge({ likelihood }: LikelihoodBadgeProps) {
  const badgeStyles: Record<string, { bg: string; text: string; label: string }> = {
    common: { bg: '#22c55e22', text: '#22c55e', label: 'Common' },
    'less-common': { bg: '#eab30822', text: '#eab308', label: 'Less Common' },
    rare: { bg: '#f9731622', text: '#f97316', label: 'Rare' },
    'do-not-miss': { bg: '#ef444422', text: '#ef4444', label: 'Do Not Miss' },
  };

  const style = badgeStyles[likelihood] || badgeStyles['common'];

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
// Red Flag Component (for anatomy mapping red flags)
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
// Simple Red Flag Item (for symptom database red flags — string-based)
// ============================================

function SimpleRedFlagItem({ text }: { text: string }) {
  return (
    <div className="red-flag-card">
      <div className="red-flag-finding">{text}</div>
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
  // i18n
  const { language } = useTranslation('symptoms');
  const isSpanish = language === 'es';

  // Content service for full symptom database
  const contentService = useContentService();

  // State
  const [searchQuery, setSearchQuery] = useState('');
  const [allSymptoms, setAllSymptoms] = useState<SymptomEntry[]>([]);
  const [symptomsLoaded, setSymptomsLoaded] = useState(false);
  const [selectedSymptomId, setSelectedSymptomId] = useState<string | null>(null);
  const [selectedSymptomEntry, setSelectedSymptomEntry] = useState<SymptomEntry | null>(null);
  const [selectedSymptomInfo, setSelectedSymptomInfo] = useState<SymptomInfo | null>(null);
  const [selectedAnatomyMapping, setSelectedAnatomyMapping] = useState<SymptomAnatomyMapping | null>(null);
  const [highlightedSourceId, setHighlightedSourceId] = useState<string | null>(null);
  const [complexityLevel, setComplexityLevel] = useState<1 | 2 | 3 | 4 | 5>(3);
  const [showRedFlags, setShowRedFlags] = useState(true);
  const [showFollowUpChat, setShowFollowUpChat] = useState(false);
  const [activeSystemFilter, setActiveSystemFilter] = useState<string | null>(null);

  // 3D Navigation API
  const navigation = useAnatomy3DNavigation({
    componentId: 'SymptomExplorer',
    autoResetOnUnmount: true,
  });

  // Action tracking for intent prediction
  const { track } = useActionTracker<SymptomExplorerAction>('symptom-explorer', 'SymptomExplorer');

  // Load all symptoms from the content database on mount
  useEffect(() => {
    contentService.getAllSymptoms().then((symptoms) => {
      setAllSymptoms(symptoms);
      setSymptomsLoaded(true);
    });
  }, [contentService]);

  // Filtered symptoms based on search query
  const filteredSymptoms = useMemo(() => {
    if (!allSymptoms.length) return [];
    const q = searchQuery.trim().toLowerCase();
    let filtered = allSymptoms;

    if (q) {
      filtered = filtered.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.spanishName.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q) ||
          s.associatedSymptoms.some((a) => a.toLowerCase().includes(q))
      );
    }

    if (activeSystemFilter) {
      filtered = filtered.filter((s) => s.bodySystems.includes(activeSystemFilter));
    }

    return filtered;
  }, [allSymptoms, searchQuery, activeSystemFilter]);

  // Group symptoms by body system for browse view
  const symptomsBySystem = useMemo(() => {
    const groups = new Map<string, SymptomEntry[]>();
    const symptomsToGroup = searchQuery.trim() ? filteredSymptoms : allSymptoms;

    for (const symptom of symptomsToGroup) {
      // Use the first body system as primary grouping
      const primarySystem = symptom.bodySystems[0] || 'general';
      if (!groups.has(primarySystem)) {
        groups.set(primarySystem, []);
      }
      groups.get(primarySystem)!.push(symptom);
    }

    // Sort by BODY_SYSTEM_ORDER
    const sorted: { system: string; symptoms: SymptomEntry[] }[] = [];
    for (const system of BODY_SYSTEM_ORDER) {
      const symptoms = groups.get(system);
      if (symptoms && symptoms.length > 0) {
        sorted.push({ system, symptoms });
      }
    }
    // Add any remaining systems not in our order
    for (const [system, symptoms] of groups.entries()) {
      if (!BODY_SYSTEM_ORDER.includes(system) && symptoms.length > 0) {
        sorted.push({ system, symptoms });
      }
    }

    return sorted;
  }, [allSymptoms, filteredSymptoms, searchQuery]);

  // Search handler — also clears selected symptom to return to browse view
  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    setSelectedSymptomEntry(null);
    setSelectedSymptomId(null);
    setSelectedSymptomInfo(null);
    setSelectedAnatomyMapping(null);
    if (query.trim().length > 0) {
      track('search', { searchQuery: query });
    }
  }, [track]);

  // Select symptom handler — loads from content service + optional anatomy mapping
  const handleSelectSymptom = useCallback(async (symptomId: string) => {
    setSelectedSymptomId(symptomId);
    setShowFollowUpChat(false);

    // Load from content service (full database)
    const [symptomEntry, symptomInfo] = await Promise.all([
      contentService.getSymptom(symptomId),
      contentService.getSymptomInfo(symptomId),
    ]);

    if (symptomEntry) {
      setSelectedSymptomEntry(symptomEntry);
      setSelectedSymptomInfo(symptomInfo ?? null);

      track('select-symptom', {
        entityId: symptomId,
        entityName: symptomEntry.name,
      });
    }

    // Try to also load anatomy mapping (available for a subset of symptoms)
    // The anatomy store uses slug-style IDs like "chest-pain", so try converting
    const slugId = symptomEntry?.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') ?? '';
    const anatomyMapping = getSymptomAnatomyMapping(slugId) || getSymptomAnatomyMapping(symptomId);
    setSelectedAnatomyMapping(anatomyMapping ?? null);

    if (anatomyMapping) {
      const highlights = getSymptomAnatomyHighlights(anatomyMapping.symptomId);
      const sources: SymptomSource[] = highlights.map((h) => ({
        structureId: h.structureId,
        structureName: h.structureName,
        likelihood: h.likelihood,
        highlightColor: h.highlightColor,
      }));
      navigation.focusOnSymptomSources(sources);
    }

    setSearchQuery('');
  }, [contentService, navigation, track]);

  // Highlight single source (anatomy mapping)
  const handleHighlightSource = useCallback((source: AnatomicalSource) => {
    setHighlightedSourceId(source.structureId);

    track('view-source', {
      structureId: source.structureId,
      structureName: source.structureName,
    });

    navigation.highlightSingleStructure(
      source.structureId,
      source.highlightColor,
      source.likelihood === 'do-not-miss'
    );
  }, [navigation, track]);

  // Navigate to source
  const handleNavigateToSource = useCallback((source: AnatomicalSource) => {
    navigation.navigateToRegion(source.structureId, {
      animate: true,
      duration: 800,
      highlight: true,
      highlightColor: source.highlightColor,
    });

    if (onNavigateToAnatomy) {
      onNavigateToAnatomy();
    }
  }, [navigation, onNavigateToAnatomy]);

  // Clear selection
  const handleClearSelection = useCallback(() => {
    setSelectedSymptomId(null);
    setSelectedSymptomEntry(null);
    setSelectedSymptomInfo(null);
    setSelectedAnatomyMapping(null);
    setHighlightedSourceId(null);
    setShowFollowUpChat(false);
    navigation.clearHighlights();
    navigation.resetView();
  }, [navigation]);

  // Handle source highlight from follow-up chat
  const handleChatHighlightSource = useCallback((structureId: string) => {
    const source = selectedAnatomyMapping?.anatomicalSources.find(s => s.structureId === structureId);
    if (source) {
      handleHighlightSource(source);
    }
  }, [selectedAnatomyMapping, handleHighlightSource]);

  // Get current explanation based on complexity level
  const currentExplanation = useMemo(() => {
    if (!selectedSymptomEntry) return '';
    const key = `level${complexityLevel}` as keyof typeof selectedSymptomEntry.explanations;
    return selectedSymptomEntry.explanations[key] || '';
  }, [selectedSymptomEntry, complexityLevel]);

  // Sort anatomy sources by likelihood (do-not-miss first)
  const sortedSources = useMemo(() => {
    if (!selectedAnatomyMapping) return [];
    const order: Record<LikelihoodLevel, number> = {
      'do-not-miss': 0,
      common: 1,
      'less-common': 2,
      rare: 3,
    };
    return [...selectedAnatomyMapping.anatomicalSources].sort(
      (a, b) => order[a.likelihood] - order[b.likelihood]
    );
  }, [selectedAnatomyMapping]);

  // Track follow-up chat toggle
  useEffect(() => {
    if (showFollowUpChat && selectedSymptomEntry) {
      track('answer-followup', {
        entityId: selectedSymptomEntry.symptomId,
        entityName: selectedSymptomEntry.name,
      });
    }
  }, [showFollowUpChat, selectedSymptomEntry, track]);

  // Track complexity level changes
  useEffect(() => {
    if (selectedSymptomEntry) {
      track('change-complexity', {
        complexityLevel,
        entityId: selectedSymptomEntry.symptomId,
        entityName: selectedSymptomEntry.name,
      });
    }
   
  }, [complexityLevel]);

  // User's relevant symptoms from dashboard
  const userRelevantSymptoms = useMemo(() => {
    if (!dashboardData?.recentSymptoms || !allSymptoms.length) return [];
    return dashboardData.recentSymptoms.filter((s) =>
      allSymptoms.some(
        (entry) =>
          entry.name.toLowerCase().includes(s.description.toLowerCase()) ||
          entry.spanishName.toLowerCase().includes(s.description.toLowerCase())
      )
    ).map((s, index) => ({
      ...s,
      _id: `user-sym-${index}`,
    }));
  }, [dashboardData, allSymptoms]);

  // Get system label
  const getSystemLabel = (system: string): string => {
    const meta = BODY_SYSTEM_LABELS[system];
    if (!meta) return system;
    return isSpanish ? meta.es : meta.en;
  };

  const getSystemIcon = (system: string): string => {
    return BODY_SYSTEM_LABELS[system]?.icon || '🔬';
  };

  // Symptom display name
  const getSymptomName = (entry: SymptomEntry): string => {
    return isSpanish ? entry.spanishName : entry.name;
  };

  // Symptom display description
  const getSymptomDescription = (entry: SymptomEntry): string => {
    return isSpanish ? entry.spanishDescription : entry.description;
  };

  return (
    <div className="symptom-explorer">
      {/* Header */}
      <div className="symptom-explorer-header">
        <button onClick={onBack} className="back-button">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          {isSpanish ? 'Volver' : 'Back'}
        </button>
        <h1>{isSpanish ? 'Explorador de Sintomas' : 'Symptom Explorer'}</h1>
        {selectedSymptomEntry && (
          <button onClick={handleClearSelection} className="clear-button">
            {isSpanish ? 'Limpiar' : 'Clear'}
          </button>
        )}
      </div>

      {/* Search & Browse Section */}
      {!selectedSymptomEntry && (
        <div className="search-section">
          <div className="search-input-wrapper">
            <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              className="search-input"
              placeholder={isSpanish
                ? 'Buscar sintomas (ej. dolor de pecho, fiebre, fatiga)...'
                : 'Search symptoms (e.g., chest pain, headache, fever)...'
              }
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              autoFocus
            />
          </div>

          {/* Symptom count */}
          {symptomsLoaded && (
            <div style={{ fontSize: '0.8rem', color: '#888', marginBottom: 12 }}>
              {filteredSymptoms.length} {isSpanish ? 'sintomas' : 'symptoms'}
              {searchQuery.trim() ? ` ${isSpanish ? 'encontrados' : 'found'}` : ` ${isSpanish ? 'en la base de datos' : 'in database'}`}
              {activeSystemFilter && ` — ${getSystemLabel(activeSystemFilter)}`}
            </div>
          )}

          {/* Body System Filter Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
            <button
              className={`complexity-btn ${!activeSystemFilter ? 'active' : ''}`}
              style={{ width: 'auto', height: 'auto', padding: '4px 12px', fontSize: '0.75rem', borderRadius: 16 }}
              onClick={() => setActiveSystemFilter(null)}
            >
              {isSpanish ? 'Todos' : 'All'}
            </button>
            {BODY_SYSTEM_ORDER.map((sys) => (
              <button
                key={sys}
                className={`complexity-btn ${activeSystemFilter === sys ? 'active' : ''}`}
                style={{ width: 'auto', height: 'auto', padding: '4px 12px', fontSize: '0.75rem', borderRadius: 16 }}
                onClick={() => setActiveSystemFilter(activeSystemFilter === sys ? null : sys)}
              >
                {getSystemIcon(sys)} {getSystemLabel(sys)}
              </button>
            ))}
          </div>

          {/* User's Recent Symptoms */}
          {userRelevantSymptoms.length > 0 && !searchQuery && (
            <div className="user-symptoms-section">
              <h3>{isSpanish ? 'Tus Sintomas Recientes' : 'Your Recent Symptoms'}</h3>
              <div className="user-symptoms-list">
                {userRelevantSymptoms.map((s) => (
                  <button
                    key={s._id}
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

          {/* Loading state */}
          {!symptomsLoaded && (
            <div style={{ textAlign: 'center', padding: 40, color: '#888' }}>
              {isSpanish ? 'Cargando sintomas...' : 'Loading symptoms...'}
            </div>
          )}

          {/* Browse Symptoms Grouped by Body System */}
          {symptomsLoaded && symptomsBySystem.map(({ system, symptoms }) => (
            <div key={system} className="browse-section" style={{ marginBottom: 24 }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span>{getSystemIcon(system)}</span>
                {getSystemLabel(system)}
                <span style={{ fontSize: '0.75rem', color: '#666', fontWeight: 400 }}>
                  ({symptoms.length})
                </span>
              </h3>
              <div className="symptom-grid">
                {symptoms.map((symptom) => (
                  <button
                    key={symptom.symptomId}
                    className="symptom-browse-card"
                    onClick={() => handleSelectSymptom(symptom.symptomId)}
                  >
                    <div className="symptom-card-name">{getSymptomName(symptom)}</div>
                    {isSpanish && (
                      <div style={{ fontSize: '0.8rem', color: '#a5b4fc', marginBottom: 4 }}>
                        {symptom.name}
                      </div>
                    )}
                    <div className="symptom-card-region">
                      {symptom.bodySystems.map((s) => getSystemLabel(s)).join(', ')}
                    </div>
                    <div className="symptom-card-sources">
                      {symptom.possibleCauses.length} {isSpanish ? 'posibles causas' : 'possible causes'}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}

          {/* No results */}
          {symptomsLoaded && filteredSymptoms.length === 0 && searchQuery.trim() && (
            <div style={{ textAlign: 'center', padding: 40, color: '#888' }}>
              {isSpanish
                ? `No se encontraron sintomas para "${searchQuery}"`
                : `No symptoms found for "${searchQuery}"`
              }
            </div>
          )}
        </div>
      )}

      {/* Selected Symptom Detail */}
      {selectedSymptomEntry && (
        <div className="symptom-detail">
          {/* Symptom Header */}
          <div className="symptom-detail-header">
            <h2>{getSymptomName(selectedSymptomEntry)}</h2>
            {isSpanish && (
              <div style={{ fontSize: '0.95rem', color: '#a5b4fc', marginBottom: 8 }}>
                {selectedSymptomEntry.name}
              </div>
            )}
            <div className="symptom-meta">
              {selectedSymptomEntry.bodySystems.map((sys) => (
                <span key={sys} className="meta-item category">
                  {getSystemIcon(sys)} {getSystemLabel(sys)}
                </span>
              ))}
              {selectedSymptomEntry.bodyRegions.map((region) => (
                <span key={region} className="meta-item region">
                  {region}
                </span>
              ))}
            </div>
            <p className="symptom-description">{getSymptomDescription(selectedSymptomEntry)}</p>

            {/* AI Analysis Button - only show if anatomy mapping exists */}
            {selectedAnatomyMapping && (
              <button
                className="ai-analysis-btn"
                onClick={() => setShowFollowUpChat(!showFollowUpChat)}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
                {showFollowUpChat
                  ? (isSpanish ? 'Ocultar Analisis IA' : 'Hide AI Analysis')
                  : (isSpanish ? 'Iniciar Analisis con IA' : 'Start AI-Powered Analysis')
                }
              </button>
            )}
          </div>

          {/* AI Follow-up Chat (if anatomy mapping available) */}
          {showFollowUpChat && selectedAnatomyMapping && (
            <div className="followup-chat-container">
              <SymptomFollowUpChat
                symptom={selectedAnatomyMapping}
                complexityLevel={complexityLevel}
                onHighlightSource={handleChatHighlightSource}
              />
            </div>
          )}

          {/* Complexity Level Selector */}
          <div className="complexity-selector">
            <span className="complexity-label">
              {isSpanish ? 'Nivel de explicacion:' : 'Explanation Level:'}
            </span>
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
              {complexityLevel <= 2
                ? (isSpanish ? 'Para pacientes' : 'Patient-friendly')
                : complexityLevel === 3
                  ? (isSpanish ? 'General' : 'General')
                  : (isSpanish ? 'Profesional medico' : 'Medical professional')
              }
            </span>
          </div>

          {/* Explanation */}
          {currentExplanation && (
            <div className="symptom-explanation">
              <p>{currentExplanation}</p>
            </div>
          )}

          {/* Possible Causes Section */}
          <div className="differential-section" style={{ marginBottom: 24 }}>
            <h3>
              {isSpanish ? 'Posibles Causas' : 'Possible Causes'}
              {' '}({selectedSymptomEntry.possibleCauses.length})
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {selectedSymptomEntry.possibleCauses.map((cause) => (
                <div
                  key={cause.conditionId}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '10px 14px',
                    background: 'rgba(255,255,255,0.03)',
                    borderRadius: 8,
                    borderLeft: cause.likelihood === 'do-not-miss'
                      ? '4px solid #ef4444'
                      : cause.likelihood === 'common'
                        ? '4px solid #22c55e'
                        : '4px solid #666',
                  }}
                >
                  <span style={{ color: '#e8e8e8', fontSize: '0.95rem' }}>
                    {cause.conditionName}
                  </span>
                  <LikelihoodBadge likelihood={cause.likelihood} />
                </div>
              ))}
            </div>
          </div>

          {/* Red Flags Section (from symptom database) */}
          {selectedSymptomEntry.redFlags.length > 0 && (
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
                  {isSpanish ? 'Senales de Alarma' : 'Red Flags'} ({selectedSymptomEntry.redFlags.length})
                </h3>
                <span className="toggle-icon">{showRedFlags ? '\u2212' : '+'}</span>
              </div>
              {showRedFlags && (
                <div className="red-flags-list">
                  {selectedSymptomEntry.redFlags.map((rf, i) => (
                    <SimpleRedFlagItem key={i} text={rf} />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Red Flags from anatomy mapping (if available, structured) */}
          {selectedAnatomyMapping && selectedAnatomyMapping.redFlags.length > 0 && (
            <div className="red-flags-section" style={{ marginTop: 12 }}>
              <div className="red-flags-header" style={{ cursor: 'default' }}>
                <h3>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                  {isSpanish ? 'Senales Clinicas Detalladas' : 'Detailed Clinical Red Flags'} ({selectedAnatomyMapping.redFlags.length})
                </h3>
              </div>
              <div className="red-flags-list">
                {selectedAnatomyMapping.redFlags.map((rf, i) => (
                  <RedFlagCard key={i} redFlag={rf} />
                ))}
              </div>
            </div>
          )}

          {/* When to See Doctor */}
          {selectedSymptomEntry.whenToSeeDoctor && (
            <div style={{
              padding: 16,
              background: 'rgba(59, 130, 246, 0.1)',
              borderRadius: 12,
              borderLeft: '4px solid #3b82f6',
              marginBottom: 20,
            }}>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '1rem', color: '#93c5fd' }}>
                {isSpanish ? 'Cuando Consultar al Medico' : 'When to See a Doctor'}
              </h3>
              <p style={{ margin: 0, color: '#e8e8e8', lineHeight: 1.6, fontSize: '0.9rem' }}>
                {selectedSymptomEntry.whenToSeeDoctor}
              </p>
            </div>
          )}

          {/* Anatomical Sources (from anatomy mapping, if available) */}
          {selectedAnatomyMapping && selectedAnatomyMapping.anatomicalSources.length > 0 && (
            <div className="anatomical-sources-section">
              <h3>
                {isSpanish ? 'Fuentes Anatomicas' : 'Anatomical Sources'} ({selectedAnatomyMapping.anatomicalSources.length})
              </h3>
              <p className="sources-hint">
                {isSpanish
                  ? 'Haz clic para resaltar en el visor de anatomia 3D'
                  : 'Click to highlight in the 3D anatomy viewer'
                }
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
          )}

          {/* Referred Pain Patterns (from anatomy mapping, if available) */}
          {selectedAnatomyMapping && selectedAnatomyMapping.referredPainPatterns.length > 0 && (
            <div className="referred-pain-section">
              <h3>{isSpanish ? 'Patrones de Dolor Referido' : 'Referred Pain Patterns'}</h3>
              <div className="referred-pain-list">
                {selectedAnatomyMapping.referredPainPatterns.map((pattern, i) => (
                  <div key={i} className="referred-pain-card">
                    <div className="referred-source">
                      <strong>{pattern.sourceOrgan}</strong>
                      {pattern.sourceLocation && ` (${pattern.sourceLocation})`}
                    </div>
                    <div className="referred-to">
                      <span className="referred-arrow">&rarr;</span>
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

          {/* Home Management */}
          {selectedSymptomEntry.homeManagement.length > 0 && (
            <div className="differential-section" style={{ marginBottom: 24 }}>
              <h3>{isSpanish ? 'Manejo en Casa' : 'Home Management'}</h3>
              <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
                {selectedSymptomEntry.homeManagement.map((tip, i) => (
                  <li key={i} style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: 1.5 }}>{tip}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Diagnostic Workup */}
          {selectedSymptomEntry.diagnosticWorkup.length > 0 && (
            <div className="differential-section" style={{ marginBottom: 24 }}>
              <h3>{isSpanish ? 'Estudios Diagnosticos' : 'Diagnostic Workup'}</h3>
              <div className="differential-list">
                {selectedSymptomEntry.diagnosticWorkup.map((test, i) => (
                  <span key={i} className="differential-item">{test}</span>
                ))}
              </div>
            </div>
          )}

          {/* Character Questions */}
          {selectedSymptomEntry.characterQuestions.length > 0 && (
            <div className="differential-section" style={{ marginBottom: 24 }}>
              <h3>{isSpanish ? 'Preguntas Clave' : 'Key Questions to Ask'}</h3>
              <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
                {selectedSymptomEntry.characterQuestions.map((q, i) => (
                  <li key={i} style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: 1.5 }}>{q}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Associated Symptoms */}
          {selectedSymptomEntry.associatedSymptoms.length > 0 && (
            <div className="related-symptoms-section">
              <h3>{isSpanish ? 'Sintomas Asociados' : 'Associated Symptoms'}</h3>
              <div className="related-symptoms-list">
                {selectedSymptomEntry.associatedSymptoms.map((symptom, i) => (
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
          )}

          {/* Linked Conditions from Knowledge Graph */}
          {selectedSymptomInfo && selectedSymptomInfo.possibleConditions.length > 0 && (
            <div className="differential-section" style={{ marginBottom: 24 }}>
              <h3>
                {isSpanish ? 'Condiciones Relacionadas (Grafo de Conocimiento)' : 'Related Conditions (Knowledge Graph)'}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {selectedSymptomInfo.possibleConditions.map((node) => (
                  <div
                    key={node.id}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '10px 14px',
                      background: 'rgba(99,102,241,0.08)',
                      borderRadius: 8,
                      borderLeft: '4px solid #6366f1',
                    }}
                  >
                    <div>
                      <div style={{ color: '#e8e8e8', fontSize: '0.95rem' }}>{node.name}</div>
                      {isSpanish && node.spanishName && (
                        <div style={{ color: '#a5b4fc', fontSize: '0.8rem' }}>{node.spanishName}</div>
                      )}
                    </div>
                    {node.description && (
                      <span style={{ fontSize: '0.75rem', color: '#888', maxWidth: '50%', textAlign: 'right' }}>
                        {node.description.slice(0, 80)}{node.description.length > 80 ? '...' : ''}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Do Not Miss */}
          {selectedSymptomInfo && selectedSymptomInfo.doNotMiss.length > 0 && (
            <div style={{
              padding: 16,
              background: 'rgba(239, 68, 68, 0.08)',
              borderRadius: 12,
              borderLeft: '4px solid #ef4444',
              marginBottom: 20,
            }}>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '1rem', color: '#fca5a5' }}>
                {isSpanish ? 'No Pasar Por Alto' : 'Do Not Miss'}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {selectedSymptomInfo.doNotMiss.map((d) => (
                  <span
                    key={d.conditionId}
                    style={{
                      padding: '6px 12px',
                      background: 'rgba(239,68,68,0.15)',
                      borderRadius: 20,
                      fontSize: '0.85rem',
                      color: '#fca5a5',
                      fontWeight: 600,
                    }}
                  >
                    {d.conditionName}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
