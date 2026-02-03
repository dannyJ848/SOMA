/**
 * RegionContextMenu
 *
 * Enhanced context menu that appears when a 3D anatomy region is selected.
 * Features a sleek glassmorphism design with slide-in animation and
 * organized sections for exploring anatomical information.
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import { getRegionDisplayName, getLayersForRegion, type LayerInfo } from '../utils/regionToSystemMapper';
import '../styles/region-menu.css';

// ============================================
// Types
// ============================================

export type MenuSection =
  | 'layers'
  | 'physiology'
  | 'histology'
  | 'pathology'
  | 'conditions'
  | 'encyclopedia';

export type AnatomicalLayer =
  | 'bone'
  | 'muscle'
  | 'blood'
  | 'connective'
  | 'skin'
  | 'nerves';

export interface SelectedRegion {
  id: string;
  name: string;
  position: { x: number; y: number; z?: number };
}

export interface UserCondition {
  id: string;
  name: string;
  severity?: 'mild' | 'moderate' | 'severe';
  dateAdded?: Date;
}

export interface RegionContextMenuProps {
  /** The currently selected anatomy region */
  selectedRegion: SelectedRegion;
  /** User's personal conditions tagged to this region */
  userConditions: UserCondition[];
  /** Callback when a menu section is selected */
  onSectionSelect: (section: MenuSection) => void;
  /** Callback when anatomical layers are toggled */
  onLayerToggle: (layer: AnatomicalLayer, enabled: boolean) => void;
  /** Close handler */
  onClose: () => void;
  /** Currently active layers (for toggle state) */
  activeLayers?: AnatomicalLayer[];
  /** Initial active section */
  initialSection?: MenuSection;
}

// ============================================
// Section Configuration
// ============================================

interface SectionConfig {
  id: MenuSection;
  label: string;
  description: string;
  icon: React.ReactNode;
}

const MENU_SECTIONS: SectionConfig[] = [
  {
    id: 'layers',
    label: 'Layers',
    description: 'Toggle anatomical layers',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    id: 'physiology',
    label: 'Physiology',
    description: 'How this region functions',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    id: 'histology',
    label: 'Histology',
    description: 'Microscopic anatomy',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
        <circle cx="11" cy="11" r="3" />
      </svg>
    ),
  },
  {
    id: 'pathology',
    label: 'Pathology',
    description: 'Diseases affecting this region',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    id: 'conditions',
    label: 'Your Conditions',
    description: 'Personal health conditions',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
];

// Layer configuration
interface LayerConfig {
  id: AnatomicalLayer;
  label: string;
  color: string;
  icon: React.ReactNode;
}

const ANATOMICAL_LAYERS: LayerConfig[] = [
  {
    id: 'bone',
    label: 'Bone',
    color: '#f5f5dc',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 3a3 3 0 00-3 3v2a3 3 0 01-3 3 3 3 0 01-3-3V6a3 3 0 10-6 0v12a3 3 0 106 0v-2a3 3 0 013-3 3 3 0 013 3v2a3 3 0 106 0V6a3 3 0 00-3-3z" />
      </svg>
    ),
  },
  {
    id: 'muscle',
    label: 'Muscle',
    color: '#c62828',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M7 12s2-2 5-2 5 2 5 2" />
        <path d="M7 12s2 2 5 2 5-2 5-2" />
        <path d="M4 16l3-4-3-4" />
        <path d="M20 16l-3-4 3-4" />
      </svg>
    ),
  },
  {
    id: 'blood',
    label: 'Blood Vessels',
    color: '#b71c1c',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 21c-4-4-8-7.5-8-11a8 8 0 1116 0c0 3.5-4 7-8 11z" />
        <path d="M12 13a2 2 0 100-4 2 2 0 000 4z" />
      </svg>
    ),
  },
  {
    id: 'connective',
    label: 'Connective',
    color: '#ffd54f',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 6h16M4 12h16M4 18h16" />
        <circle cx="7" cy="6" r="1" fill="currentColor" />
        <circle cx="17" cy="12" r="1" fill="currentColor" />
        <circle cx="10" cy="18" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'skin',
    label: 'Skin',
    color: '#ffccbc',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" rx="2" width="18" height="18" />
        <path d="M7 7h.01M12 7h.01M17 7h.01" />
      </svg>
    ),
  },
  {
    id: 'nerves',
    label: 'Nerves',
    color: '#ffeb3b',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
];

// ============================================
// Component
// ============================================

export function RegionContextMenu({
  selectedRegion,
  userConditions,
  onSectionSelect,
  onLayerToggle,
  onClose,
  activeLayers = [],
  initialSection,
}: RegionContextMenuProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [activeSection, setActiveSection] = useState<MenuSection | null>(initialSection || null);
  const [localActiveLayers, setLocalActiveLayers] = useState<Set<AnatomicalLayer>>(
    new Set(activeLayers)
  );
  const menuRef = useRef<HTMLDivElement>(null);
  const regionLayers = getLayersForRegion(selectedRegion.id);

  // Handle entrance animation
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // Sync activeLayers prop
  useEffect(() => {
    setLocalActiveLayers(new Set(activeLayers));
  }, [activeLayers]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        handleClose();
      }
    };

    const timer = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 100);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 250);
  }, [onClose]);

  const handleSectionClick = useCallback((section: MenuSection) => {
    if (section === 'layers') {
      // Toggle layer panel visibility
      setActiveSection(prev => (prev === 'layers' ? null : 'layers'));
    } else {
      onSectionSelect(section);
      handleClose();
    }
  }, [onSectionSelect, handleClose]);

  const handleLayerToggle = useCallback((layer: AnatomicalLayer) => {
    const newEnabled = !localActiveLayers.has(layer);
    setLocalActiveLayers(prev => {
      const next = new Set(prev);
      if (newEnabled) {
        next.add(layer);
      } else {
        next.delete(layer);
      }
      return next;
    });
    onLayerToggle(layer, newEnabled);
  }, [localActiveLayers, onLayerToggle]);

  const handleEncyclopediaClick = useCallback(() => {
    onSectionSelect('encyclopedia');
    handleClose();
  }, [onSectionSelect, handleClose]);

  // Get region icon based on ID
  const getRegionIcon = (regionId: string): React.ReactNode => {
    const iconMap: Record<string, React.ReactNode> = {
      head: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="8" r="6" />
          <path d="M12 14v4M8 22h8" />
        </svg>
      ),
      neck: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M8 4h8M6 8h12M8 12h8M10 16h4M10 20h4" />
        </svg>
      ),
      chest: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2l-4 4v6l4 4 4-4V6l-4-4zM4 10v4l8 8 8-8v-4" />
        </svg>
      ),
      abdomen: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="12" rx="8" ry="10" />
          <path d="M12 6v12M8 10h8M8 14h8" />
        </svg>
      ),
    };
    return iconMap[regionId] || (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    );
  };

  const conditionCount = userConditions.length;

  return (
    <div
      ref={menuRef}
      className={`region-context-menu ${isVisible ? 'visible' : ''} ${isClosing ? 'closing' : ''}`}
      role="dialog"
      aria-label={`Context menu for ${selectedRegion.name}`}
      aria-modal="true"
    >
      {/* Header */}
      <header className="region-menu-header">
        <div className="region-menu-icon">
          {getRegionIcon(selectedRegion.id)}
        </div>
        <div className="region-menu-title">
          <h2>{getRegionDisplayName(selectedRegion.id) || selectedRegion.name}</h2>
          <span className="region-menu-subtitle">Anatomical Region</span>
        </div>
        <button
          className="region-menu-close"
          onClick={handleClose}
          aria-label="Close menu"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </header>

      {/* Section Buttons */}
      <nav className="region-menu-sections">
        {MENU_SECTIONS.map((section) => (
          <button
            key={section.id}
            className={`region-menu-section-btn ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => handleSectionClick(section.id)}
            aria-pressed={activeSection === section.id}
            aria-label={`${section.label}: ${section.description}`}
          >
            <span className="section-icon">{section.icon}</span>
            <span className="section-label">{section.label}</span>
            {section.id === 'conditions' && conditionCount > 0 && (
              <span className="section-badge">{conditionCount}</span>
            )}
            {section.id === 'layers' && (
              <span className={`section-chevron ${activeSection === 'layers' ? 'expanded' : ''}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            )}
          </button>
        ))}
      </nav>

      {/* Layers Panel (expandable) */}
      <div className={`region-menu-layers-panel ${activeSection === 'layers' ? 'expanded' : ''}`}>
        <div className="layers-grid">
          {ANATOMICAL_LAYERS.map((layer) => (
            <button
              key={layer.id}
              className={`layer-toggle ${localActiveLayers.has(layer.id) ? 'active' : ''}`}
              onClick={() => handleLayerToggle(layer.id)}
              style={{ '--layer-color': layer.color } as React.CSSProperties}
              aria-pressed={localActiveLayers.has(layer.id)}
              aria-label={`Toggle ${layer.label} layer`}
            >
              <span className="layer-icon">{layer.icon}</span>
              <span className="layer-label">{layer.label}</span>
              <span className="layer-indicator" />
            </button>
          ))}
        </div>
        {regionLayers.length > 0 && (
          <div className="layers-info">
            <span className="layers-info-label">Available in this region:</span>
            <span className="layers-info-count">{regionLayers.length} layers</span>
          </div>
        )}
      </div>

      {/* AI Encyclopedia Button - Prominent */}
      <div className="region-menu-ai-section">
        <button
          className="ai-encyclopedia-btn"
          onClick={handleEncyclopediaClick}
          aria-label="Open AI Medical Encyclopedia for this region"
        >
          <div className="ai-btn-glow" />
          <span className="ai-btn-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
              <path d="M2 12h20" />
              <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.3" />
            </svg>
          </span>
          <div className="ai-btn-content">
            <span className="ai-btn-title">AI Medical Encyclopedia</span>
            <span className="ai-btn-subtitle">Explore with intelligent guidance</span>
          </div>
          <span className="ai-btn-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </button>
      </div>

      {/* Condition Preview (if any) */}
      {conditionCount > 0 && (
        <div className="region-menu-conditions-preview">
          <div className="conditions-preview-header">
            <span className="conditions-preview-label">Your conditions in this region</span>
          </div>
          <div className="conditions-preview-list">
            {userConditions.slice(0, 3).map((condition) => (
              <div
                key={condition.id}
                className={`condition-chip ${condition.severity || 'default'}`}
              >
                <span className="condition-dot" />
                <span className="condition-name">{condition.name}</span>
              </div>
            ))}
            {conditionCount > 3 && (
              <span className="conditions-more">+{conditionCount - 3} more</span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default RegionContextMenu;
