/**
 * Regional Detail View
 *
 * Expanded view showing all content for a selected anatomical region.
 * Provides tabbed navigation between anatomy, physiology, pathology,
 * histology, and personal health data for that region.
 *
 * Features:
 * - Layer selection that integrates with all tabs
 * - Complexity level management for content depth
 * - Visual feedback for tabs with layer-filtered content
 */

import React, { useState, useCallback, createContext, useContext, useMemo } from 'react';
import type { BiologicalSelf } from '../../core/biological-self/types';
import type { AnatomicalLayer } from '../components/LayerFilterBar';
import { useRegionalEncyclopedia } from './hooks/useRegionalEncyclopedia';
import { usePatientDataForRegion } from './hooks/usePatientDataForRegion';
import { AnatomyTab } from './tabs/AnatomyTab';
import { PhysiologyTab } from './tabs/PhysiologyTab';
import { PathologyTab } from './tabs/PathologyTab';
import { HistologyTab } from './tabs/HistologyTab';
import { MyDataTab } from './tabs/MyDataTab';

// ============================================
// Types
// ============================================

export type DetailViewTab = 'anatomy' | 'physiology' | 'pathology' | 'histology' | 'my-data';

export type AnatomicalLayerType = AnatomicalLayer | 'all';

export type ComplexityLevel = 'basic' | 'intermediate' | 'advanced' | 'expert';

export interface RegionalDetailViewProps {
  regionId: string;
  patientData?: BiologicalSelf;
  initialTab?: DetailViewTab;
  initialLayer?: AnatomicalLayerType;
  initialComplexity?: ComplexityLevel;
  onClose: () => void;
}

// ============================================
// Complexity Context
// ============================================

interface ComplexityContextValue {
  level: ComplexityLevel;
  setLevel: (level: ComplexityLevel) => void;
  levelIndex: number;
  levelLabel: string;
}

const ComplexityContext = createContext<ComplexityContextValue | null>(null);

interface ComplexityProviderProps {
  children: React.ReactNode;
  initialLevel?: ComplexityLevel;
}

const COMPLEXITY_LEVELS: ComplexityLevel[] = ['basic', 'intermediate', 'advanced', 'expert'];
const COMPLEXITY_LABELS: Record<ComplexityLevel, string> = {
  basic: 'Basic',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
  expert: 'Expert',
};

export function ComplexityProvider({ children, initialLevel = 'intermediate' }: ComplexityProviderProps) {
  const [level, setLevel] = useState<ComplexityLevel>(initialLevel);

  const contextValue = useMemo<ComplexityContextValue>(() => ({
    level,
    setLevel,
    levelIndex: COMPLEXITY_LEVELS.indexOf(level),
    levelLabel: COMPLEXITY_LABELS[level],
  }), [level]);

  return (
    <ComplexityContext.Provider value={contextValue}>
      {children}
    </ComplexityContext.Provider>
  );
}

export function useComplexity(): ComplexityContextValue {
  const context = useContext(ComplexityContext);
  if (!context) {
    throw new Error('useComplexity must be used within a ComplexityProvider');
  }
  return context;
}

// ============================================
// Layer Configuration
// ============================================

interface LayerConfig {
  id: AnatomicalLayerType;
  label: string;
  color: string;
  icon: string;
}

const LAYER_CONFIGS: LayerConfig[] = [
  { id: 'all', label: 'All', color: '#6b7280', icon: '◉' },
  { id: 'skin', label: 'Skin', color: '#fbbf24', icon: '▣' },
  { id: 'muscle', label: 'Muscle', color: '#ef4444', icon: '▤' },
  { id: 'bone', label: 'Bone', color: '#f5f5f4', icon: '▥' },
  { id: 'vessels', label: 'Vessels', color: '#ec4899', icon: '▦' },
  { id: 'nerves', label: 'Nerves', color: '#a855f7', icon: '▧' },
  { id: 'organs', label: 'Organs', color: '#22c55e', icon: '▨' },
  { id: 'connective', label: 'Connective', color: '#3b82f6', icon: '▩' },
];

// Tabs that support layer filtering
const LAYER_AWARE_TABS: DetailViewTab[] = ['anatomy', 'pathology', 'histology', 'my-data'];

// ============================================
// Components
// ============================================

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  badge?: number;
  hasLayerContent?: boolean;
  selectedLayer?: AnatomicalLayerType | null;
}

function TabButton({ active, onClick, children, badge, hasLayerContent, selectedLayer }: TabButtonProps) {
  const showLayerIndicator = hasLayerContent && selectedLayer && selectedLayer !== 'all';

  return (
    <button
      className={`tab-button ${active ? 'active' : ''} ${showLayerIndicator ? 'has-layer-content' : ''}`}
      onClick={onClick}
      aria-selected={active}
      role="tab"
    >
      <span className="tab-label">{children}</span>
      {showLayerIndicator && (
        <span className="layer-indicator" title={`Has ${selectedLayer} content`}>
          ●
        </span>
      )}
      {badge !== undefined && badge > 0 && (
        <span className="tab-badge">{badge}</span>
      )}
    </button>
  );
}

interface LayerSelectorProps {
  selectedLayer: AnatomicalLayerType | null;
  onLayerChange: (layer: AnatomicalLayerType | null) => void;
}

function LayerSelector({ selectedLayer, onLayerChange }: LayerSelectorProps) {
  return (
    <div className="layer-selector">
      <span className="selector-label">Layer:</span>
      <div className="layer-pills">
        {LAYER_CONFIGS.map((layer) => (
          <button
            key={layer.id}
            className={`layer-pill ${selectedLayer === layer.id ? 'selected' : ''}`}
            onClick={() => onLayerChange(layer.id === 'all' ? null : layer.id)}
            style={{
              '--layer-color': layer.color,
            } as React.CSSProperties}
          >
            <span className="layer-icon">{layer.icon}</span>
            <span className="layer-label">{layer.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

interface ComplexityIndicatorProps {
  level: ComplexityLevel;
  onLevelChange: (level: ComplexityLevel) => void;
}

function ComplexityIndicator({ level, onLevelChange }: ComplexityIndicatorProps) {
  const levelIndex = COMPLEXITY_LEVELS.indexOf(level);

  const handleCycle = () => {
    const nextIndex = (levelIndex + 1) % COMPLEXITY_LEVELS.length;
    onLevelChange(COMPLEXITY_LEVELS[nextIndex]);
  };

  return (
    <button
      className="complexity-indicator"
      onClick={handleCycle}
      title={`Complexity: ${COMPLEXITY_LABELS[level]}. Click to cycle.`}
    >
      <span className="complexity-label">Complexity</span>
      <div className="complexity-dots">
        {COMPLEXITY_LEVELS.map((_, index) => (
          <span
            key={index}
            className={`complexity-dot ${index <= levelIndex ? 'active' : ''}`}
          />
        ))}
      </div>
      <span className="complexity-level">{COMPLEXITY_LABELS[level]}</span>
    </button>
  );
}

// ============================================
// Main Component
// ============================================

function RegionalDetailViewContent({
  regionId,
  patientData,
  initialTab,
  initialLayer,
  onClose,
}: Omit<RegionalDetailViewProps, 'initialComplexity'>) {
  const [activeTab, setActiveTab] = useState<DetailViewTab>(initialTab || 'anatomy');
  const [selectedLayer, setSelectedLayer] = useState<AnatomicalLayerType | null>(
    initialLayer || null
  );

  const { level: complexityLevel, setLevel: setComplexityLevel } = useComplexity();

  const regionalContent = useRegionalEncyclopedia(regionId);
  const patientDataForRegion = usePatientDataForRegion(regionId, patientData);

  const handleTabChange = useCallback((tab: DetailViewTab) => {
    setActiveTab(tab);
  }, []);

  const handleLayerChange = useCallback((layer: AnatomicalLayerType | null) => {
    setSelectedLayer(layer);
  }, []);

  // Determine which tabs have content for the selected layer
  const tabsWithLayerContent = useMemo(() => {
    if (!selectedLayer || selectedLayer === 'all') {
      return new Set<DetailViewTab>();
    }

    const tabs = new Set<DetailViewTab>();

    // Check if anatomy tab has content for this layer
    if (regionalContent.layers?.some(l =>
      l.name.toLowerCase().includes(selectedLayer.toLowerCase())
    )) {
      tabs.add('anatomy');
    }

    // Check if pathology has content (conditions that might relate to layer)
    if (regionalContent.content?.pathology?.commonConditions?.length > 0) {
      tabs.add('pathology');
    }

    // Check if histology has content
    const histologyContent = regionalContent.content?.histology as { images?: unknown[] } | undefined;
    if (histologyContent?.images?.length && histologyContent.images.length > 0) {
      tabs.add('histology');
    }

    // Check if patient data has content
    if (patientDataForRegion && patientDataForRegion.totalItems > 0) {
      tabs.add('my-data');
    }

    return tabs;
  }, [selectedLayer, regionalContent, patientDataForRegion]);

  // Get the current layer context string for display
  const layerContextString = selectedLayer && selectedLayer !== 'all'
    ? `Viewing ${LAYER_CONFIGS.find(l => l.id === selectedLayer)?.label || selectedLayer} layer`
    : null;

  // Loading state
  if (regionalContent.isLoading) {
    return (
      <div className="regional-detail-view loading">
        <div className="loading-spinner">
          <div className="spinner" />
          <p>Loading region data...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (regionalContent.error || !regionalContent.region) {
    return (
      <div className="regional-detail-view error">
        <header className="detail-header">
          <button className="back-button" onClick={onClose}>
            <span className="back-arrow">&#8592;</span>
            <span>Back to Body</span>
          </button>
        </header>
        <div className="error-message">
          <h3>Unable to load region</h3>
          <p>{regionalContent.error?.message || 'Region not found'}</p>
          <button onClick={onClose}>Return to Body View</button>
        </div>
      </div>
    );
  }

  return (
    <div className="regional-detail-view">
      <header className="detail-header">
        <button className="back-button" onClick={onClose}>
          <span className="back-arrow">&#8592;</span>
          <span>Back to Body</span>
        </button>
        <h2 className="region-title">{regionalContent.region.name}</h2>
        <ComplexityIndicator
          level={complexityLevel}
          onLevelChange={setComplexityLevel}
        />
      </header>

      {/* Layer Selector Bar */}
      <div className="layer-bar">
        <LayerSelector
          selectedLayer={selectedLayer}
          onLayerChange={handleLayerChange}
        />
      </div>

      <nav className="tab-navigation" role="tablist" aria-label="Region content tabs">
        {layerContextString && (
          <span className="layer-context">{layerContextString}</span>
        )}
        <div className="tabs-container">
          <TabButton
            active={activeTab === 'anatomy'}
            onClick={() => handleTabChange('anatomy')}
            hasLayerContent={LAYER_AWARE_TABS.includes('anatomy')}
            selectedLayer={selectedLayer}
          >
            Anatomy
          </TabButton>
          <TabButton
            active={activeTab === 'physiology'}
            onClick={() => handleTabChange('physiology')}
          >
            Physiology
          </TabButton>
          <TabButton
            active={activeTab === 'pathology'}
            onClick={() => handleTabChange('pathology')}
            hasLayerContent={tabsWithLayerContent.has('pathology')}
            selectedLayer={selectedLayer}
          >
            Pathology
          </TabButton>
          <TabButton
            active={activeTab === 'histology'}
            onClick={() => handleTabChange('histology')}
            hasLayerContent={tabsWithLayerContent.has('histology')}
            selectedLayer={selectedLayer}
          >
            Histology
          </TabButton>
          {patientDataForRegion && (
            <TabButton
              active={activeTab === 'my-data'}
              onClick={() => handleTabChange('my-data')}
              badge={patientDataForRegion.totalItems}
              hasLayerContent={tabsWithLayerContent.has('my-data')}
              selectedLayer={selectedLayer}
            >
              My Data
            </TabButton>
          )}
        </div>
      </nav>

      <main className="tab-content" role="tabpanel">
        {activeTab === 'anatomy' && (
          <AnatomyTab
            structures={regionalContent.structures}
            layers={regionalContent.layers}
            models={regionalContent.models}
            regionName={regionalContent.region.name}
            regionId={regionalContent.region.id}
          />
        )}
        {activeTab === 'physiology' && (
          <PhysiologyTab
            content={regionalContent.content.physiology}
            regionName={regionalContent.region.name}
          />
        )}
        {activeTab === 'pathology' && (
          <PathologyTab
            content={regionalContent.content.pathology}
            regionId={regionId}
            regionName={regionalContent.region.name}
            selectedLayer={selectedLayer === 'all' ? null : selectedLayer}
            onLayerChange={handleLayerChange as any}
          />
        )}
        {activeTab === 'histology' && (
          <HistologyTab
            images={regionalContent.content.histology}
            regionName={regionalContent.region.name}
          />
        )}
        {activeTab === 'my-data' && patientDataForRegion && (
          <MyDataTab
            conditions={patientDataForRegion.conditions as any}
            symptoms={patientDataForRegion.symptoms as any}
            medications={patientDataForRegion.medications as any}
            labs={patientDataForRegion.labs as any}
            imaging={patientDataForRegion.imaging as any}
            regionName={regionalContent.region.name}
            selectedLayer={selectedLayer === 'all' ? null : selectedLayer}
          />
        )}
      </main>

      <style>{`
        .regional-detail-view {
          display: flex;
          flex-direction: column;
          height: 100%;
          background: var(--background-primary, #0a0a0a);
          color: var(--text-primary, #ffffff);
        }

        .regional-detail-view.loading,
        .regional-detail-view.error {
          align-items: center;
          justify-content: center;
        }

        .loading-spinner {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .spinner {
          width: 40px;
          height: 40px;
          border: 3px solid var(--border-color, #333);
          border-top-color: var(--accent-primary, #4a9eff);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .error-message {
          text-align: center;
          padding: 24px;
        }

        .error-message h3 {
          margin: 0 0 8px 0;
          color: var(--error-color, #ef4444);
        }

        .error-message p {
          margin: 0 0 16px 0;
          color: var(--text-secondary, #888);
        }

        .error-message button {
          padding: 10px 20px;
          background: var(--accent-primary, #4a9eff);
          border: none;
          border-radius: 6px;
          color: white;
          cursor: pointer;
          font-size: 14px;
        }

        .detail-header {
          display: flex;
          align-items: center;
          padding: 12px 16px;
          background: var(--background-secondary, #1a1a1a);
          border-bottom: 1px solid var(--border-color, #333);
          gap: 16px;
        }

        .back-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          background: var(--button-background, #2a2a2a);
          border: none;
          border-radius: 6px;
          color: var(--text-primary, #fff);
          cursor: pointer;
          font-size: 14px;
          transition: background-color 0.2s;
        }

        .back-button:hover {
          background: var(--button-hover, #3a3a3a);
        }

        .back-arrow {
          font-size: 16px;
        }

        .region-title {
          margin: 0;
          flex: 1;
          font-size: 20px;
          font-weight: 600;
          text-align: center;
        }

        /* Complexity Indicator */
        .complexity-indicator {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          background: var(--button-background, #2a2a2a);
          border: 1px solid var(--border-color, #333);
          border-radius: 6px;
          color: var(--text-primary, #fff);
          cursor: pointer;
          font-size: 12px;
          transition: all 0.2s;
        }

        .complexity-indicator:hover {
          background: var(--button-hover, #3a3a3a);
          border-color: var(--accent-primary, #4a9eff);
        }

        .complexity-label {
          color: var(--text-tertiary, #666);
          font-size: 11px;
        }

        .complexity-dots {
          display: flex;
          gap: 3px;
        }

        .complexity-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--border-color, #333);
          transition: background-color 0.2s;
        }

        .complexity-dot.active {
          background: var(--accent-primary, #4a9eff);
        }

        .complexity-level {
          font-weight: 500;
          min-width: 80px;
          text-align: left;
        }

        /* Layer Bar */
        .layer-bar {
          padding: 12px 16px;
          background: var(--background-secondary, #1a1a1a);
          border-bottom: 1px solid var(--border-color, #333);
        }

        .layer-selector {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .selector-label {
          font-size: 13px;
          color: var(--text-tertiary, #666);
          font-weight: 500;
        }

        .layer-pills {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }

        .layer-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: var(--background-tertiary, #2a2a2a);
          border: 1px solid var(--border-color, #333);
          border-radius: 16px;
          color: var(--text-secondary, #888);
          cursor: pointer;
          font-size: 12px;
          transition: all 0.2s;
        }

        .layer-pill:hover {
          border-color: var(--layer-color, #4a9eff);
          color: var(--text-primary, #fff);
        }

        .layer-pill.selected {
          background: rgba(74, 158, 255, 0.15);
          border-color: var(--layer-color, #4a9eff);
          color: var(--layer-color, #4a9eff);
        }

        .layer-icon {
          font-size: 10px;
          opacity: 0.7;
        }

        .layer-pill.selected .layer-icon {
          opacity: 1;
        }

        .layer-label {
          font-weight: 500;
        }

        .tab-navigation {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 12px 16px;
          background: var(--background-secondary, #1a1a1a);
          border-bottom: 1px solid var(--border-color, #333);
        }

        .layer-context {
          font-size: 11px;
          color: var(--accent-primary, #4a9eff);
          padding: 4px 10px;
          background: rgba(74, 158, 255, 0.1);
          border-radius: 4px;
          align-self: flex-start;
        }

        .tabs-container {
          display: flex;
          gap: 4px;
          overflow-x: auto;
        }

        .tab-button {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 10px 16px;
          background: transparent;
          border: none;
          border-radius: 6px;
          color: var(--text-secondary, #888);
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          white-space: nowrap;
          transition: all 0.2s;
          position: relative;
        }

        .tab-button:hover {
          background: var(--button-background, #2a2a2a);
          color: var(--text-primary, #fff);
        }

        .tab-button.active {
          background: var(--accent-primary, #4a9eff);
          color: white;
        }

        .tab-button.has-layer-content::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--accent-primary, #4a9eff);
        }

        .tab-button.active.has-layer-content::after {
          background: white;
        }

        .layer-indicator {
          font-size: 8px;
          color: var(--accent-primary, #4a9eff);
          margin-left: -2px;
        }

        .tab-button.active .layer-indicator {
          color: rgba(255, 255, 255, 0.7);
        }

        .tab-badge {
          min-width: 20px;
          height: 20px;
          padding: 0 6px;
          background: var(--badge-background, rgba(255, 255, 255, 0.2));
          border-radius: 10px;
          font-size: 12px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tab-button.active .tab-badge {
          background: rgba(255, 255, 255, 0.3);
        }

        .tab-content {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
        }

        @media (max-width: 768px) {
          .detail-header {
            padding: 10px 12px;
            flex-wrap: wrap;
          }

          .region-title {
            font-size: 16px;
            order: 3;
            width: 100%;
            text-align: left;
            margin-top: 8px;
          }

          .complexity-indicator {
            margin-left: auto;
          }

          .complexity-label {
            display: none;
          }

          .back-button span:last-child {
            display: none;
          }

          .layer-bar {
            padding: 10px 12px;
          }

          .layer-selector {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }

          .layer-pills {
            width: 100%;
          }

          .layer-pill {
            flex: 1;
            justify-content: center;
            min-width: 70px;
          }

          .tab-navigation {
            padding: 8px 12px;
          }

          .tabs-container {
            width: 100%;
          }

          .tab-button {
            padding: 8px 12px;
            font-size: 13px;
            flex: 1;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .layer-pill {
            padding: 5px 8px;
            font-size: 11px;
          }

          .layer-icon {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

// ============================================
// Exported Component with Provider
// ============================================

export function RegionalDetailView({
  regionId,
  patientData,
  initialTab,
  initialLayer,
  initialComplexity = 'intermediate',
  onClose,
}: RegionalDetailViewProps) {
  return (
    <ComplexityProvider initialLevel={initialComplexity}>
      <RegionalDetailViewContent
        regionId={regionId}
        patientData={patientData}
        initialTab={initialTab}
        initialLayer={initialLayer}
        onClose={onClose}
      />
    </ComplexityProvider>
  );
}

export default RegionalDetailView;
