/**
 * RegionExplorer Component
 *
 * Main integration component that wires together all region panels
 * and the AI Medical Encyclopedia. Manages panel navigation, state,
 * and transitions for exploring anatomical regions.
 */

import {
  useState,
  useCallback,
  useEffect,
  useRef,
  useMemo,
  createContext,
  useContext,
  type ReactNode,
} from 'react';

// Import education panels
import {
  HistologyPanel,
  PathologyPanel,
  PhysiologyPanel,
  getRegionContent,
  type RegionContent,
} from '../education';

// Import types from layer system
import type { LayerState, LayerStateMap } from '../LayerPanel';

// ============================================
// Types
// ============================================

export type PanelType =
  | 'menu'
  | 'layers'
  | 'physiology'
  | 'histology'
  | 'pathology'
  | 'conditions'
  | 'encyclopedia';

export type ComplexityLevel = 1 | 2 | 3 | 4 | 5;

export interface SelectedRegion {
  id: string;
  name: string;
  screenPosition?: { x: number; y: number };
}

export interface LayerVisibility {
  layerId: string;
  visible: boolean;
  opacity: number;
}

export interface UserHealthData {
  conditions?: string[];
  medications?: string[];
  allergies?: string[];
  age?: number;
  sex?: 'male' | 'female' | 'other';
}

export interface RegionExplorerProps {
  /** Currently selected region from 3D viewer */
  selectedRegion: SelectedRegion | null;
  /** Callback when region is deselected */
  onDeselect: () => void;
  /** Callback for layer visibility changes */
  onLayerChange?: (layerId: string, visible: boolean, opacity?: number) => void;
  /** Callback to show all layers */
  onShowAllLayers?: () => void;
  /** Callback to hide all layers */
  onHideAllLayers?: () => void;
  /** Callback to apply layer preset */
  onApplyLayerPreset?: (presetId: string) => void;
  /** Current layer states */
  layerStates?: LayerStateMap;
  /** User health data for personalized conditions */
  userHealthData?: UserHealthData;
  /** Callback for AI encyclopedia queries */
  onAIQuery?: (query: string, context: { regionId: string; regionName: string }) => void;
  /** Callback when encyclopedia entry is opened */
  onOpenEncyclopedia?: (entryId: string) => void;
  /** Dashboard data for AI context */
  dashboardData?: Record<string, unknown> | null;
  /** Initial complexity level */
  initialComplexityLevel?: ComplexityLevel;
  /** Initial panel to show */
  initialPanel?: PanelType;
}

interface NavigationHistoryEntry {
  panel: PanelType;
  subPanel?: string;
  label: string;
}

// ============================================
// Context for Panel State
// ============================================

interface RegionExplorerContextValue {
  selectedRegion: SelectedRegion | null;
  activePanel: PanelType;
  complexityLevel: ComplexityLevel;
  setComplexityLevel: (level: ComplexityLevel) => void;
  navigateToPanel: (panel: PanelType) => void;
  navigateBack: () => void;
  canGoBack: boolean;
  breadcrumbs: NavigationHistoryEntry[];
  regionContent: RegionContent | null;
}

const RegionExplorerContext = createContext<RegionExplorerContextValue | null>(null);

export function useRegionExplorer() {
  const context = useContext(RegionExplorerContext);
  if (!context) {
    throw new Error('useRegionExplorer must be used within a RegionExplorer');
  }
  return context;
}

// ============================================
// Panel Configuration
// ============================================

interface PanelConfig {
  id: PanelType;
  label: string;
  icon: string;
  description: string;
  color: string;
}

const PANEL_CONFIGS: PanelConfig[] = [
  {
    id: 'layers',
    label: 'Layers',
    icon: 'layers',
    description: 'Anatomical layer controls',
    color: '#3b82f6',
  },
  {
    id: 'physiology',
    label: 'Physiology',
    icon: 'activity',
    description: 'Functions & processes',
    color: '#22c55e',
  },
  {
    id: 'histology',
    label: 'Histology',
    icon: 'microscope',
    description: 'Tissue & cell types',
    color: '#8b5cf6',
  },
  {
    id: 'pathology',
    label: 'Pathology',
    icon: 'alert-triangle',
    description: 'Conditions & diseases',
    color: '#ef4444',
  },
  {
    id: 'conditions',
    label: 'My Conditions',
    icon: 'heart',
    description: 'Your health conditions',
    color: '#f97316',
  },
  {
    id: 'encyclopedia',
    label: 'Encyclopedia',
    icon: 'book-open',
    description: 'AI Medical Knowledge',
    color: '#06b6d4',
  },
];

const COMPLEXITY_LABELS: Record<ComplexityLevel, { label: string; description: string }> = {
  1: { label: 'Simple', description: '8th grade level' },
  2: { label: 'Basic', description: 'High school level' },
  3: { label: 'Standard', description: 'College level' },
  4: { label: 'Advanced', description: 'Graduate level' },
  5: { label: 'Expert', description: 'Medical professional' },
};

// ============================================
// Animation Direction
// ============================================

type SlideDirection = 'left' | 'right' | 'none';

// ============================================
// Icon Component
// ============================================

interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

function Icon({ name, size = 20, className = '' }: IconProps) {
  const icons: Record<string, ReactNode> = {
    layers: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    activity: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    microscope: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="8" r="6" />
        <path d="M8 14v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7" />
        <path d="M6 21h12" />
        <path d="M12 2v2" />
      </svg>
    ),
    'alert-triangle': (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    heart: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    'book-open': (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    'chevron-left': (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="15 18 9 12 15 6" />
      </svg>
    ),
    'chevron-right': (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="9 18 15 12 9 6" />
      </svg>
    ),
    x: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    ),
    search: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    info: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
    ),
  };

  return <span className={`region-explorer-icon ${className}`}>{icons[name] || null}</span>;
}

// ============================================
// Complexity Selector
// ============================================

interface ComplexitySelectorProps {
  level: ComplexityLevel;
  onChange: (level: ComplexityLevel) => void;
}

function ComplexitySelector({ level, onChange }: ComplexitySelectorProps) {
  return (
    <div className="complexity-selector">
      <label className="complexity-label">Complexity</label>
      <div className="complexity-buttons">
        {([1, 2, 3, 4, 5] as ComplexityLevel[]).map((l) => (
          <button
            key={l}
            className={`complexity-btn ${level === l ? 'active' : ''}`}
            onClick={() => onChange(l)}
            title={COMPLEXITY_LABELS[l].description}
          >
            {l}
          </button>
        ))}
      </div>
      <span className="complexity-description">{COMPLEXITY_LABELS[level].label}</span>
    </div>
  );
}

// ============================================
// Breadcrumb Navigation
// ============================================

interface BreadcrumbsProps {
  items: NavigationHistoryEntry[];
  onNavigate: (index: number) => void;
}

function Breadcrumbs({ items, onNavigate }: BreadcrumbsProps) {
  if (items.length <= 1) return null;

  return (
    <div className="region-explorer-breadcrumbs">
      {items.map((item, index) => (
        <span key={index} className="breadcrumb-item">
          {index > 0 && <Icon name="chevron-right" size={14} className="breadcrumb-separator" />}
          <button
            className={`breadcrumb-link ${index === items.length - 1 ? 'current' : ''}`}
            onClick={() => index < items.length - 1 && onNavigate(index)}
            disabled={index === items.length - 1}
          >
            {item.label}
          </button>
        </span>
      ))}
    </div>
  );
}

// ============================================
// Main Menu Panel
// ============================================

interface MainMenuPanelProps {
  regionName: string;
  regionContent: RegionContent | null;
  onSelectPanel: (panel: PanelType) => void;
  userHealthData?: UserHealthData;
}

function MainMenuPanel({ regionName, regionContent, onSelectPanel, userHealthData }: MainMenuPanelProps) {
  const hasUserConditions = userHealthData?.conditions && userHealthData.conditions.length > 0;

  return (
    <div className="region-explorer-menu">
      <div className="menu-header">
        <h2 className="region-name">{regionName}</h2>
        {regionContent?.description && (
          <p className="region-description">{regionContent.description}</p>
        )}
      </div>

      <div className="menu-grid">
        {PANEL_CONFIGS.map((config) => {
          // Show conditions panel only if user has health data
          if (config.id === 'conditions' && !hasUserConditions) {
            return null;
          }

          const stats = getPanelStats(config.id, regionContent, userHealthData);

          return (
            <button
              key={config.id}
              className="menu-item"
              onClick={() => onSelectPanel(config.id)}
              style={{ '--panel-color': config.color } as React.CSSProperties}
            >
              <div className="menu-item-icon">
                <Icon name={config.icon} size={24} />
              </div>
              <div className="menu-item-content">
                <span className="menu-item-label">{config.label}</span>
                <span className="menu-item-description">{config.description}</span>
              </div>
              {stats && <span className="menu-item-stat">{stats}</span>}
              <Icon name="chevron-right" size={18} className="menu-item-arrow" />
            </button>
          );
        })}
      </div>

      {/* Quick AI Question */}
      <div className="quick-ai-section">
        <h3 className="quick-ai-title">Quick Questions</h3>
        <div className="quick-ai-buttons">
          <button
            className="quick-ai-btn"
            onClick={() => onSelectPanel('encyclopedia')}
          >
            What does {regionName} do?
          </button>
          <button
            className="quick-ai-btn"
            onClick={() => onSelectPanel('pathology')}
          >
            Common conditions?
          </button>
          <button
            className="quick-ai-btn"
            onClick={() => onSelectPanel('physiology')}
          >
            How does it work?
          </button>
        </div>
      </div>
    </div>
  );
}

function getPanelStats(
  panelId: PanelType,
  content: RegionContent | null,
  healthData?: UserHealthData
): string | null {
  if (!content) return null;

  switch (panelId) {
    case 'histology':
      return `${content.histology.tissueTypes.length} tissues`;
    case 'pathology':
      return `${content.pathology.commonConditions.length} conditions`;
    case 'physiology':
      return `${content.physiology.functions.length} functions`;
    case 'conditions':
      return healthData?.conditions ? `${healthData.conditions.length} tracked` : null;
    default:
      return null;
  }
}

// ============================================
// Layer Control Panel
// ============================================

interface LayerControlPanelProps {
  layerStates?: LayerStateMap;
  onLayerChange?: (layerId: string, visible: boolean, opacity?: number) => void;
  onShowAll?: () => void;
  onHideAll?: () => void;
  onApplyPreset?: (presetId: string) => void;
}

function LayerControlPanel({
  layerStates,
  onLayerChange,
  onShowAll,
  onHideAll,
  onApplyPreset,
}: LayerControlPanelProps) {
  const presets = [
    { id: 'all', name: 'All Systems', icon: 'layers' },
    { id: 'skeletal-muscular', name: 'Musculoskeletal', icon: 'activity' },
    { id: 'cardiovascular', name: 'Cardiovascular', icon: 'heart' },
    { id: 'nervous', name: 'Nervous System', icon: 'activity' },
  ];

  return (
    <div className="layer-control-panel">
      <div className="layer-section">
        <h3 className="layer-section-title">Quick Presets</h3>
        <div className="layer-presets">
          {presets.map((preset) => (
            <button
              key={preset.id}
              className="layer-preset-btn"
              onClick={() => onApplyPreset?.(preset.id)}
            >
              <Icon name={preset.icon} size={16} />
              {preset.name}
            </button>
          ))}
        </div>
      </div>

      <div className="layer-section">
        <div className="layer-section-header">
          <h3 className="layer-section-title">Layer Visibility</h3>
          <div className="layer-quick-actions">
            <button className="layer-action-btn" onClick={onShowAll}>
              Show All
            </button>
            <button className="layer-action-btn" onClick={onHideAll}>
              Hide All
            </button>
          </div>
        </div>

        {layerStates ? (
          <div className="layer-list">
            {Array.from(layerStates.entries()).map(([id, state]) => (
              <div key={id} className="layer-item">
                <label className="layer-toggle">
                  <input
                    type="checkbox"
                    checked={state.visible}
                    onChange={(e) => onLayerChange?.(id, e.target.checked)}
                  />
                  <span className="layer-name">{formatLayerName(id)}</span>
                </label>
                {state.visible && (
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={state.opacity * 100}
                    onChange={(e) =>
                      onLayerChange?.(id, state.visible, parseInt(e.target.value) / 100)
                    }
                    className="layer-opacity-slider"
                  />
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="layer-placeholder">
            <p>Layer controls not connected to 3D viewer.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function formatLayerName(id: string): string {
  return id
    .replace(/-/g, ' ')
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase())
    .trim();
}

// ============================================
// Conditions Panel (User's Health Conditions)
// ============================================

interface ConditionsPanelProps {
  regionName: string;
  userHealthData?: UserHealthData;
  regionContent: RegionContent | null;
  onOpenEncyclopedia?: (entryId: string) => void;
}

function ConditionsPanel({
  regionName,
  userHealthData,
  regionContent,
  onOpenEncyclopedia,
}: ConditionsPanelProps) {
  const relevantConditions = useMemo(() => {
    if (!userHealthData?.conditions || !regionContent) return [];

    // Match user conditions with region's pathology
    const regionConditionNames = regionContent.pathology.commonConditions.map((c) =>
      c.name.toLowerCase()
    );

    return userHealthData.conditions.filter((condition) =>
      regionConditionNames.some(
        (rc) =>
          rc.includes(condition.toLowerCase()) || condition.toLowerCase().includes(rc)
      )
    );
  }, [userHealthData?.conditions, regionContent]);

  if (!userHealthData?.conditions?.length) {
    return (
      <div className="conditions-panel empty">
        <div className="empty-state">
          <Icon name="heart" size={48} />
          <h3>No Health Data</h3>
          <p>Connect your health data to see conditions related to {regionName}.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="conditions-panel">
      <div className="conditions-header">
        <h3>Your Conditions Related to {regionName}</h3>
      </div>

      {relevantConditions.length > 0 ? (
        <div className="conditions-list">
          {relevantConditions.map((condition, index) => (
            <div key={index} className="condition-card">
              <div className="condition-header">
                <span className="condition-name">{condition}</span>
                <span className="condition-badge relevant">Relevant</span>
              </div>
              <button
                className="condition-learn-more"
                onClick={() => onOpenEncyclopedia?.(condition.toLowerCase().replace(/\s+/g, '-'))}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-relevant-conditions">
          <p>
            None of your tracked conditions are directly related to {regionName}.
          </p>
        </div>
      )}

      {userHealthData.medications && userHealthData.medications.length > 0 && (
        <div className="medications-section">
          <h4>Your Medications</h4>
          <div className="medication-chips">
            {userHealthData.medications.map((med, index) => (
              <span key={index} className="medication-chip">
                {med}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================
// Encyclopedia Panel
// ============================================

interface EncyclopediaPanelProps {
  regionId: string;
  regionName: string;
  onAIQuery?: (query: string, context: { regionId: string; regionName: string }) => void;
  onOpenEntry?: (entryId: string) => void;
}

function EncyclopediaPanel({
  regionId,
  regionName,
  onAIQuery,
  onOpenEntry,
}: EncyclopediaPanelProps) {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const suggestedQueries = [
    `What is the ${regionName}?`,
    `How does the ${regionName} work?`,
    `What conditions affect the ${regionName}?`,
    `How is the ${regionName} examined?`,
    `What are the parts of the ${regionName}?`,
  ];

  const handleSubmit = useCallback(
    (q: string) => {
      if (!q.trim()) return;
      setIsLoading(true);
      onAIQuery?.(q, { regionId, regionName });
      // Reset after a delay (in production, this would be after response)
      setTimeout(() => setIsLoading(false), 1000);
    },
    [onAIQuery, regionId, regionName]
  );

  const relatedEntries = [
    { id: `anatomy-${regionId}`, name: regionName, type: 'anatomy' },
    { id: `physiology-${regionId}`, name: `${regionName} Function`, type: 'physiology' },
  ];

  return (
    <div className="encyclopedia-panel">
      <div className="encyclopedia-search">
        <div className="search-input-wrapper">
          <Icon name="search" size={18} className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder={`Ask about ${regionName}...`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit(query)}
          />
        </div>
        <button
          className="search-submit"
          onClick={() => handleSubmit(query)}
          disabled={!query.trim() || isLoading}
        >
          {isLoading ? 'Asking...' : 'Ask AI'}
        </button>
      </div>

      <div className="encyclopedia-suggestions">
        <h4>Suggested Questions</h4>
        <div className="suggestion-list">
          {suggestedQueries.map((q, index) => (
            <button
              key={index}
              className="suggestion-btn"
              onClick={() => handleSubmit(q)}
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      <div className="encyclopedia-related">
        <h4>Related Encyclopedia Entries</h4>
        <div className="related-entries">
          {relatedEntries.map((entry) => (
            <button
              key={entry.id}
              className="related-entry"
              onClick={() => onOpenEntry?.(entry.id)}
            >
              <Icon name={entry.type === 'anatomy' ? 'layers' : 'activity'} size={16} />
              <span>{entry.name}</span>
              <Icon name="chevron-right" size={14} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================
// Panel Wrapper with Animation
// ============================================

interface AnimatedPanelProps {
  children: ReactNode;
  direction: SlideDirection;
  isActive: boolean;
}

function AnimatedPanel({ children, direction, isActive }: AnimatedPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(isActive);

  useEffect(() => {
    if (isActive) {
      setIsVisible(true);
    } else {
      // Delay hiding for exit animation
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isActive]);

  if (!isVisible && !isActive) return null;

  const animationClass =
    direction === 'none'
      ? ''
      : isActive
      ? `slide-in-${direction}`
      : `slide-out-${direction === 'left' ? 'right' : 'left'}`;

  return (
    <div ref={panelRef} className={`animated-panel ${animationClass} ${isActive ? 'active' : ''}`}>
      {children}
    </div>
  );
}

// ============================================
// Swipe Handler Hook
// ============================================

function useSwipeGesture(
  onSwipeLeft?: () => void,
  onSwipeRight?: () => void,
  threshold = 50
) {
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStart.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (!touchStart.current) return;

      const deltaX = e.changedTouches[0].clientX - touchStart.current.x;
      const deltaY = e.changedTouches[0].clientY - touchStart.current.y;

      // Only trigger if horizontal swipe is dominant
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > threshold) {
        if (deltaX > 0) {
          onSwipeRight?.();
        } else {
          onSwipeLeft?.();
        }
      }

      touchStart.current = null;
    },
    [onSwipeLeft, onSwipeRight, threshold]
  );

  return { handleTouchStart, handleTouchEnd };
}

// ============================================
// Main RegionExplorer Component
// ============================================

export function RegionExplorer({
  selectedRegion,
  onDeselect,
  onLayerChange,
  onShowAllLayers,
  onHideAllLayers,
  onApplyLayerPreset,
  layerStates,
  userHealthData,
  onAIQuery,
  onOpenEncyclopedia,
  dashboardData,
  initialComplexityLevel = 3,
  initialPanel = 'menu',
}: RegionExplorerProps) {
  // State
  const [activePanel, setActivePanel] = useState<PanelType>(initialPanel);
  const [complexityLevel, setComplexityLevel] = useState<ComplexityLevel>(initialComplexityLevel);
  const [navigationHistory, setNavigationHistory] = useState<NavigationHistoryEntry[]>([]);
  const [slideDirection, setSlideDirection] = useState<SlideDirection>('none');

  // Get region content
  const regionContent = useMemo(() => {
    if (!selectedRegion) return null;
    return getRegionContent(selectedRegion.id);
  }, [selectedRegion?.id]);

  // Build breadcrumbs
  const breadcrumbs = useMemo<NavigationHistoryEntry[]>(() => {
    const items: NavigationHistoryEntry[] = [
      { panel: 'menu', label: selectedRegion?.name || 'Region' },
    ];

    if (activePanel !== 'menu') {
      const config = PANEL_CONFIGS.find((c) => c.id === activePanel);
      if (config) {
        items.push({ panel: activePanel, label: config.label });
      }
    }

    return items;
  }, [selectedRegion?.name, activePanel]);

  // Navigation functions
  const navigateToPanel = useCallback((panel: PanelType) => {
    setSlideDirection('left');
    setNavigationHistory((prev) => [...prev, { panel: activePanel, label: '' }]);
    setActivePanel(panel);
  }, [activePanel]);

  const navigateBack = useCallback(() => {
    if (navigationHistory.length > 0) {
      setSlideDirection('right');
      const prev = navigationHistory[navigationHistory.length - 1];
      setNavigationHistory((h) => h.slice(0, -1));
      setActivePanel(prev.panel);
    } else if (activePanel !== 'menu') {
      setSlideDirection('right');
      setActivePanel('menu');
    } else {
      onDeselect();
    }
  }, [navigationHistory, activePanel, onDeselect]);

  const handleBreadcrumbNavigate = useCallback(
    (index: number) => {
      const targetPanel = breadcrumbs[index].panel;
      setSlideDirection('right');
      setActivePanel(targetPanel);
      setNavigationHistory([]);
    },
    [breadcrumbs]
  );

  // Swipe gesture support
  const { handleTouchStart, handleTouchEnd } = useSwipeGesture(
    undefined, // No swipe left action
    navigateBack // Swipe right to go back
  );

  // Reset when region changes
  useEffect(() => {
    setActivePanel('menu');
    setNavigationHistory([]);
    setSlideDirection('none');
  }, [selectedRegion?.id]);

  // Context value
  const contextValue: RegionExplorerContextValue = useMemo(
    () => ({
      selectedRegion,
      activePanel,
      complexityLevel,
      setComplexityLevel,
      navigateToPanel,
      navigateBack,
      canGoBack: navigationHistory.length > 0 || activePanel !== 'menu',
      breadcrumbs,
      regionContent,
    }),
    [
      selectedRegion,
      activePanel,
      complexityLevel,
      navigateToPanel,
      navigateBack,
      navigationHistory.length,
      breadcrumbs,
      regionContent,
    ]
  );

  // Don't render if no region selected
  if (!selectedRegion) return null;

  return (
    <RegionExplorerContext.Provider value={contextValue}>
      <div
        className="region-explorer"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Header */}
        <div className="region-explorer-header">
          <button className="back-btn" onClick={navigateBack} aria-label="Go back">
            <Icon name="chevron-left" size={20} />
          </button>
          <Breadcrumbs items={breadcrumbs} onNavigate={handleBreadcrumbNavigate} />
          <button className="close-btn" onClick={onDeselect} aria-label="Close panel">
            <Icon name="x" size={20} />
          </button>
        </div>

        {/* Complexity Selector */}
        <ComplexitySelector level={complexityLevel} onChange={setComplexityLevel} />

        {/* Panel Content */}
        <div className="region-explorer-content">
          <AnimatedPanel direction={slideDirection} isActive={activePanel === 'menu'}>
            <MainMenuPanel
              regionName={selectedRegion.name}
              regionContent={regionContent}
              onSelectPanel={navigateToPanel}
              userHealthData={userHealthData}
            />
          </AnimatedPanel>

          <AnimatedPanel direction={slideDirection} isActive={activePanel === 'layers'}>
            <LayerControlPanel
              layerStates={layerStates}
              onLayerChange={onLayerChange}
              onShowAll={onShowAllLayers}
              onHideAll={onHideAllLayers}
              onApplyPreset={onApplyLayerPreset}
            />
          </AnimatedPanel>

          <AnimatedPanel direction={slideDirection} isActive={activePanel === 'physiology'}>
            {regionContent && (
              <PhysiologyPanel
                regionName={selectedRegion.name}
                content={regionContent.physiology}
              />
            )}
          </AnimatedPanel>

          <AnimatedPanel direction={slideDirection} isActive={activePanel === 'histology'}>
            {regionContent && (
              <HistologyPanel
                regionName={selectedRegion.name}
                content={regionContent.histology}
              />
            )}
          </AnimatedPanel>

          <AnimatedPanel direction={slideDirection} isActive={activePanel === 'pathology'}>
            {regionContent && (
              <PathologyPanel
                regionName={selectedRegion.name}
                content={regionContent.pathology}
              />
            )}
          </AnimatedPanel>

          <AnimatedPanel direction={slideDirection} isActive={activePanel === 'conditions'}>
            <ConditionsPanel
              regionName={selectedRegion.name}
              userHealthData={userHealthData}
              regionContent={regionContent}
              onOpenEncyclopedia={onOpenEncyclopedia}
            />
          </AnimatedPanel>

          <AnimatedPanel direction={slideDirection} isActive={activePanel === 'encyclopedia'}>
            <EncyclopediaPanel
              regionId={selectedRegion.id}
              regionName={selectedRegion.name}
              onAIQuery={onAIQuery}
              onOpenEntry={onOpenEncyclopedia}
            />
          </AnimatedPanel>
        </div>
      </div>

      <style>{`
        .region-explorer {
          display: flex;
          flex-direction: column;
          height: 100%;
          background: #1a1a2e;
          color: #e0e0e0;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        .region-explorer-header {
          display: flex;
          align-items: center;
          padding: 12px 16px;
          background: #252536;
          border-bottom: 1px solid #333;
          gap: 8px;
        }

        .back-btn,
        .close-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          border-radius: 8px;
          color: #ccc;
          cursor: pointer;
          transition: all 0.2s;
        }

        .back-btn:hover,
        .close-btn:hover {
          background: rgba(255, 255, 255, 0.15);
          color: #fff;
        }

        .close-btn {
          margin-left: auto;
        }

        .region-explorer-breadcrumbs {
          display: flex;
          align-items: center;
          flex: 1;
          gap: 4px;
          overflow-x: auto;
        }

        .breadcrumb-item {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .breadcrumb-separator {
          color: #666;
        }

        .breadcrumb-link {
          background: none;
          border: none;
          color: #888;
          font-size: 14px;
          cursor: pointer;
          padding: 4px 8px;
          border-radius: 4px;
          transition: all 0.2s;
        }

        .breadcrumb-link:not(:disabled):hover {
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
        }

        .breadcrumb-link.current {
          color: #fff;
          font-weight: 500;
        }

        .complexity-selector {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background: #1e1e30;
          border-bottom: 1px solid #333;
        }

        .complexity-label {
          font-size: 12px;
          color: #888;
          text-transform: uppercase;
        }

        .complexity-buttons {
          display: flex;
          gap: 4px;
        }

        .complexity-btn {
          width: 28px;
          height: 28px;
          border: 1px solid #444;
          border-radius: 6px;
          background: transparent;
          color: #888;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .complexity-btn:hover {
          border-color: #666;
          color: #ccc;
        }

        .complexity-btn.active {
          background: linear-gradient(135deg, #4a9eff 0%, #7c3aed 100%);
          border-color: transparent;
          color: #fff;
        }

        .complexity-description {
          font-size: 13px;
          color: #aaa;
          margin-left: auto;
        }

        .region-explorer-content {
          flex: 1;
          overflow: hidden;
          position: relative;
        }

        .animated-panel {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow-y: auto;
          transform: translateX(0);
          opacity: 1;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .animated-panel:not(.active) {
          pointer-events: none;
        }

        .slide-in-left {
          animation: slideInLeft 0.3s ease forwards;
        }

        .slide-in-right {
          animation: slideInRight 0.3s ease forwards;
        }

        .slide-out-left {
          animation: slideOutLeft 0.3s ease forwards;
        }

        .slide-out-right {
          animation: slideOutRight 0.3s ease forwards;
        }

        @keyframes slideInLeft {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideInRight {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideOutLeft {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(-100%);
            opacity: 0;
          }
        }

        @keyframes slideOutRight {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(100%);
            opacity: 0;
          }
        }

        /* Menu Panel Styles */
        .region-explorer-menu {
          padding: 20px;
        }

        .menu-header {
          margin-bottom: 24px;
        }

        .region-name {
          font-size: 24px;
          font-weight: 600;
          margin: 0 0 8px 0;
          color: #fff;
        }

        .region-description {
          color: #999;
          font-size: 14px;
          line-height: 1.5;
          margin: 0;
        }

        .menu-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
        }

        .menu-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.2s;
          text-align: left;
        }

        .menu-item:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--panel-color, #4a9eff);
          transform: translateX(4px);
        }

        .menu-item-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background: var(--panel-color, #4a9eff);
          border-radius: 10px;
          color: #fff;
        }

        .menu-item-content {
          flex: 1;
        }

        .menu-item-label {
          display: block;
          font-size: 16px;
          font-weight: 500;
          color: #fff;
          margin-bottom: 2px;
        }

        .menu-item-description {
          font-size: 13px;
          color: #888;
        }

        .menu-item-stat {
          font-size: 12px;
          color: var(--panel-color, #4a9eff);
          background: rgba(74, 158, 255, 0.15);
          padding: 4px 8px;
          border-radius: 12px;
        }

        .menu-item-arrow {
          color: #666;
        }

        .quick-ai-section {
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid #333;
        }

        .quick-ai-title {
          font-size: 14px;
          color: #888;
          margin: 0 0 12px 0;
          text-transform: uppercase;
        }

        .quick-ai-buttons {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .quick-ai-btn {
          padding: 12px 16px;
          background: rgba(6, 182, 212, 0.1);
          border: 1px solid rgba(6, 182, 212, 0.2);
          border-radius: 8px;
          color: #06b6d4;
          font-size: 14px;
          text-align: left;
          cursor: pointer;
          transition: all 0.2s;
        }

        .quick-ai-btn:hover {
          background: rgba(6, 182, 212, 0.15);
          border-color: rgba(6, 182, 212, 0.4);
        }

        /* Layer Control Panel */
        .layer-control-panel {
          padding: 20px;
        }

        .layer-section {
          margin-bottom: 24px;
        }

        .layer-section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .layer-section-title {
          font-size: 14px;
          color: #888;
          text-transform: uppercase;
          margin: 0;
        }

        .layer-quick-actions {
          display: flex;
          gap: 8px;
        }

        .layer-action-btn {
          padding: 6px 12px;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          border-radius: 6px;
          color: #ccc;
          font-size: 12px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .layer-action-btn:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        .layer-presets {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .layer-preset-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 8px;
          color: #3b82f6;
          font-size: 13px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .layer-preset-btn:hover {
          background: rgba(59, 130, 246, 0.2);
        }

        .layer-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .layer-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
        }

        .layer-toggle {
          display: flex;
          align-items: center;
          gap: 8px;
          flex: 1;
          cursor: pointer;
        }

        .layer-toggle input[type="checkbox"] {
          width: 18px;
          height: 18px;
          accent-color: #4a9eff;
        }

        .layer-name {
          font-size: 14px;
          color: #ccc;
        }

        .layer-opacity-slider {
          width: 80px;
          accent-color: #4a9eff;
        }

        .layer-placeholder {
          padding: 20px;
          text-align: center;
          color: #888;
        }

        /* Conditions Panel */
        .conditions-panel {
          padding: 20px;
        }

        .conditions-panel.empty .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          text-align: center;
          color: #888;
        }

        .empty-state h3 {
          margin: 16px 0 8px;
          color: #ccc;
        }

        .conditions-header h3 {
          font-size: 18px;
          margin: 0 0 16px 0;
          color: #fff;
        }

        .conditions-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .condition-card {
          padding: 16px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          border-left: 3px solid #ef4444;
        }

        .condition-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .condition-name {
          font-size: 16px;
          font-weight: 500;
          color: #fff;
        }

        .condition-badge {
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 11px;
          text-transform: uppercase;
        }

        .condition-badge.relevant {
          background: rgba(239, 68, 68, 0.2);
          color: #ef4444;
        }

        .condition-learn-more {
          padding: 8px 16px;
          background: rgba(74, 158, 255, 0.1);
          border: 1px solid rgba(74, 158, 255, 0.3);
          border-radius: 6px;
          color: #4a9eff;
          font-size: 13px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .condition-learn-more:hover {
          background: rgba(74, 158, 255, 0.2);
        }

        .no-relevant-conditions {
          padding: 20px;
          text-align: center;
          color: #888;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 8px;
        }

        .medications-section {
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid #333;
        }

        .medications-section h4 {
          font-size: 14px;
          color: #888;
          margin: 0 0 12px 0;
        }

        .medication-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .medication-chip {
          padding: 6px 12px;
          background: rgba(139, 92, 246, 0.1);
          border-radius: 16px;
          font-size: 13px;
          color: #a78bfa;
        }

        /* Encyclopedia Panel */
        .encyclopedia-panel {
          padding: 20px;
        }

        .encyclopedia-search {
          display: flex;
          gap: 12px;
          margin-bottom: 24px;
        }

        .search-input-wrapper {
          flex: 1;
          position: relative;
        }

        .search-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #666;
        }

        .search-input {
          width: 100%;
          padding: 12px 12px 12px 40px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid #444;
          border-radius: 8px;
          color: #fff;
          font-size: 14px;
        }

        .search-input:focus {
          outline: none;
          border-color: #4a9eff;
        }

        .search-submit {
          padding: 12px 20px;
          background: linear-gradient(135deg, #4a9eff 0%, #7c3aed 100%);
          border: none;
          border-radius: 8px;
          color: #fff;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .search-submit:hover:not(:disabled) {
          opacity: 0.9;
        }

        .search-submit:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .encyclopedia-suggestions {
          margin-bottom: 24px;
        }

        .encyclopedia-suggestions h4,
        .encyclopedia-related h4 {
          font-size: 14px;
          color: #888;
          margin: 0 0 12px 0;
          text-transform: uppercase;
        }

        .suggestion-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .suggestion-btn {
          padding: 12px 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid #333;
          border-radius: 8px;
          color: #ccc;
          font-size: 14px;
          text-align: left;
          cursor: pointer;
          transition: all 0.2s;
        }

        .suggestion-btn:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: #444;
        }

        .related-entries {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .related-entry {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid #333;
          border-radius: 8px;
          color: #ccc;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .related-entry:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: #444;
        }

        .related-entry span {
          flex: 1;
        }

        /* Icon styling */
        .region-explorer-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        /* Scrollbar styling */
        .region-explorer ::-webkit-scrollbar {
          width: 8px;
        }

        .region-explorer ::-webkit-scrollbar-track {
          background: transparent;
        }

        .region-explorer ::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 4px;
        }

        .region-explorer ::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          .region-explorer-header {
            padding: 8px 12px;
          }

          .complexity-selector {
            padding: 8px 12px;
            flex-wrap: wrap;
          }

          .region-explorer-menu,
          .layer-control-panel,
          .conditions-panel,
          .encyclopedia-panel {
            padding: 16px;
          }

          .menu-item {
            padding: 12px;
          }

          .menu-item-icon {
            width: 36px;
            height: 36px;
          }
        }
      `}</style>
    </RegionExplorerContext.Provider>
  );
}

export default RegionExplorer;
