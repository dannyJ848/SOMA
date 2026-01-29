/**
 * Layer Controller
 *
 * Side panel for controlling visible anatomical layers.
 * Provides toggle switches for each layer type, opacity sliders,
 * and preset configurations for common viewing modes.
 *
 * Integrated with SmartPanelManager for dockable, collapsible,
 * and draggable panel functionality with glass morphism styling.
 */

import { useState, useCallback, useEffect, useMemo } from 'react';
import './regional-context-menu.css';
import {
  PanelManagerProvider,
  usePanelManager,
  SmartPanelManager,
  type PanelConfig,
  type PanelContentProps,
  type DockPosition,
} from '../components/panels/SmartPanelManager';
import { GlassPanel } from '../components/ui/GlassUI';

// ============================================
// Types
// ============================================

export interface LayerDefinition {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  description: string;
}

export interface LayerPreset {
  id: string;
  name: string;
  description: string;
  layers: string[];
}

export interface LayerState {
  visible: boolean;
  opacity: number;
}

export interface LayerControllerProps {
  /** Currently active layer IDs */
  activeLayers: string[];
  /** Callback when layers change */
  onLayersChange: (layers: string[]) => void;
  /** Optional callback for opacity changes */
  onOpacityChange?: (layerId: string, opacity: number) => void;
  /** Optional initial opacity values */
  initialOpacities?: Record<string, number>;
  /** Whether the panel is in compact mode */
  compact?: boolean;
  /** Optional class name */
  className?: string;
}

// ============================================
// Constants
// ============================================

const LAYER_DEFINITIONS: LayerDefinition[] = [
  {
    id: 'skin',
    name: 'Skin',
    color: '#e8c4a8',
    description: 'Integumentary system - epidermis, dermis, and hypodermis',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: 'muscle',
    name: 'Muscle',
    color: '#c84040',
    description: 'Muscular system - skeletal, smooth, and cardiac muscles',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6.5 6.5c3.5-3.5 8.5-2.5 10 0s1.5 5.5-2 7.5c-3.5 2-4.5 5.5-4.5 5.5" />
        <path d="M17.5 17.5c-3.5 3.5-8.5 2.5-10 0s-1.5-5.5 2-7.5c3.5-2 4.5-5.5 4.5-5.5" />
      </svg>
    ),
  },
  {
    id: 'bone',
    name: 'Bone',
    color: '#f5f5dc',
    description: 'Skeletal system - bones, cartilage, and joints',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M7 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        <path d="M17 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        <path d="M17 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        <path d="M9 6v12" />
        <path d="M15 6v12" />
        <path d="M9 12h6" />
      </svg>
    ),
  },
  {
    id: 'vessels',
    name: 'Vessels',
    color: '#c04040',
    description: 'Cardiovascular system - arteries, veins, and capillaries',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
  },
  {
    id: 'nerves',
    name: 'Nerves',
    color: '#f0d060',
    description: 'Nervous system - brain, spinal cord, and peripheral nerves',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v4" />
        <path d="M12 18v4" />
        <path d="M4.93 4.93l2.83 2.83" />
        <path d="M16.24 16.24l2.83 2.83" />
        <path d="M2 12h4" />
        <path d="M18 12h4" />
        <path d="M4.93 19.07l2.83-2.83" />
        <path d="M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
];

const LAYER_PRESETS: LayerPreset[] = [
  {
    id: 'all',
    name: 'All',
    description: 'Show all anatomical layers',
    layers: ['skin', 'muscle', 'bone', 'vessels', 'nerves'],
  },
  {
    id: 'skeleton',
    name: 'Skeleton Only',
    description: 'Show only the skeletal system',
    layers: ['bone'],
  },
  {
    id: 'muscular',
    name: 'Muscular',
    description: 'Show muscles and bones',
    layers: ['muscle', 'bone'],
  },
  {
    id: 'vascular',
    name: 'Vascular',
    description: 'Show blood vessels and heart',
    layers: ['vessels'],
  },
  {
    id: 'nervous',
    name: 'Nervous',
    description: 'Show nerves and brain',
    layers: ['nerves'],
  },
  {
    id: 'surface',
    name: 'Surface',
    description: 'Show skin and surface anatomy',
    layers: ['skin'],
  },
];

// ============================================
// Core Layer Controller Component (Internal)
// ============================================

function LayerControllerContent({
  activeLayers,
  onLayersChange,
  onOpacityChange,
  initialOpacities = {},
  compact = false,
  className = '',
}: LayerControllerProps) {
  // Track opacity for each layer
  const [opacities, setOpacities] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    LAYER_DEFINITIONS.forEach(layer => {
      initial[layer.id] = initialOpacities[layer.id] ?? 1;
    });
    return initial;
  });

  // Track which preset is currently active (if any)
  const [activePreset, setActivePreset] = useState<string | null>(() => {
    // Check if current layers match a preset
    const sortedActive = [...activeLayers].sort();
    for (const preset of LAYER_PRESETS) {
      const sortedPreset = [...preset.layers].sort();
      if (
        sortedActive.length === sortedPreset.length &&
        sortedActive.every((l, i) => l === sortedPreset[i])
      ) {
        return preset.id;
      }
    }
    return null;
  });

  // Update active preset when layers change
  useEffect(() => {
    const sortedActive = [...activeLayers].sort();
    for (const preset of LAYER_PRESETS) {
      const sortedPreset = [...preset.layers].sort();
      if (
        sortedActive.length === sortedPreset.length &&
        sortedActive.every((l, i) => l === sortedPreset[i])
      ) {
        setActivePreset(preset.id);
        return;
      }
    }
    setActivePreset(null);
  }, [activeLayers]);

  const handleLayerToggle = useCallback((layerId: string) => {
    const isActive = activeLayers.includes(layerId);
    let newLayers: string[];

    if (isActive) {
      newLayers = activeLayers.filter(l => l !== layerId);
    } else {
      newLayers = [...activeLayers, layerId];
    }

    onLayersChange(newLayers);
  }, [activeLayers, onLayersChange]);

  const handleOpacityChange = useCallback((layerId: string, opacity: number) => {
    setOpacities(prev => ({ ...prev, [layerId]: opacity }));
    onOpacityChange?.(layerId, opacity);
  }, [onOpacityChange]);

  const handlePresetSelect = useCallback((preset: LayerPreset) => {
    onLayersChange(preset.layers);
    setActivePreset(preset.id);
  }, [onLayersChange]);

  const handleShowAll = useCallback(() => {
    const allLayers = LAYER_DEFINITIONS.map(l => l.id);
    onLayersChange(allLayers);
  }, [onLayersChange]);

  const handleHideAll = useCallback(() => {
    onLayersChange([]);
  }, [onLayersChange]);

  return (
    <div className={`layer-controller ${compact ? 'compact' : ''} ${className}`}>
      {/* Header */}
      <div className="layer-controller-header">
        <h3 className="layer-controller-title">Layers</h3>
        <div className="layer-controller-actions">
          <button
            className="layer-action-button"
            onClick={handleShowAll}
            title="Show All"
            aria-label="Show all layers"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </button>
          <button
            className="layer-action-button"
            onClick={handleHideAll}
            title="Hide All"
            aria-label="Hide all layers"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
              <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
              <line x1="1" y1="1" x2="23" y2="23" />
            </svg>
          </button>
        </div>
      </div>

      {/* Presets */}
      <div className="layer-presets">
        <span className="layer-presets-label">Presets:</span>
        <div className="layer-presets-list">
          {LAYER_PRESETS.map(preset => (
            <button
              key={preset.id}
              className={`layer-preset-button ${activePreset === preset.id ? 'active' : ''}`}
              onClick={() => handlePresetSelect(preset)}
              title={preset.description}
              aria-pressed={activePreset === preset.id}
            >
              {preset.name}
            </button>
          ))}
        </div>
      </div>

      {/* Layer List */}
      <div className="layer-list">
        {LAYER_DEFINITIONS.map(layer => {
          const isActive = activeLayers.includes(layer.id);
          const opacity = opacities[layer.id] ?? 1;

          return (
            <div
              key={layer.id}
              className={`layer-item ${isActive ? 'active' : ''}`}
            >
              <div className="layer-item-main">
                {/* Toggle Switch */}
                <button
                  className={`layer-toggle ${isActive ? 'on' : 'off'}`}
                  onClick={() => handleLayerToggle(layer.id)}
                  role="switch"
                  aria-checked={isActive}
                  aria-label={`Toggle ${layer.name} layer`}
                >
                  <span className="layer-toggle-track">
                    <span className="layer-toggle-thumb" />
                  </span>
                </button>

                {/* Layer Icon */}
                <div
                  className="layer-item-icon"
                  style={{ color: layer.color }}
                  aria-hidden="true"
                >
                  {layer.icon}
                </div>

                {/* Layer Info */}
                <div className="layer-item-info">
                  <span className="layer-item-name">{layer.name}</span>
                  {!compact && (
                    <span className="layer-item-description">{layer.description}</span>
                  )}
                </div>

                {/* Color Indicator */}
                <span
                  className="layer-color-indicator"
                  style={{ backgroundColor: layer.color }}
                  aria-hidden="true"
                />
              </div>

              {/* Opacity Slider */}
              {isActive && !compact && (
                <div className="layer-opacity-control">
                  <label className="layer-opacity-label" htmlFor={`opacity-${layer.id}`}>
                    Opacity: {Math.round(opacity * 100)}%
                  </label>
                  <input
                    id={`opacity-${layer.id}`}
                    type="range"
                    className="layer-opacity-slider"
                    min="0"
                    max="1"
                    step="0.05"
                    value={opacity}
                    onChange={(e) => handleOpacityChange(layer.id, parseFloat(e.target.value))}
                    style={{
                      '--slider-color': layer.color,
                    } as React.CSSProperties}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Quick Info */}
      {!compact && (
        <div className="layer-controller-info">
          <p className="layer-info-text">
            {activeLayers.length === 0
              ? 'No layers visible. Select layers to view anatomical structures.'
              : `Showing ${activeLayers.length} layer${activeLayers.length !== 1 ? 's' : ''}.`}
          </p>
        </div>
      )}
    </div>
  );
}

// ============================================
// SmartPanel-Compatible Layer Controller
// ============================================

/** Extended props for the smart panel wrapper */
export interface SmartLayerControllerProps extends LayerControllerProps {
  /** Default dock position (defaults to 'right') */
  defaultDockPosition?: DockPosition;
  /** Whether the panel starts open */
  defaultOpen?: boolean;
  /** Panel ID for the SmartPanelManager */
  panelId?: string;
}

/** Layer icon for panel header */
const LayerIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

/**
 * Panel content component that receives SmartPanelManager props
 * and renders the layer controller with glass morphism styling
 */
function LayerControllerPanelContent({
  panelId,
  isMinimized,
  onClose,
  onMinimize,
  onMaximize,
  // Layer controller props passed via closure
  layerControllerProps,
}: PanelContentProps & { layerControllerProps: LayerControllerProps }) {
  if (isMinimized) {
    return null;
  }

  return (
    <GlassPanel
      size="sm"
      elevated
      context="dark"
      className="layer-controller-smart-panel"
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <LayerControllerContent
        {...layerControllerProps}
        className={`smart-panel-layer-controller ${layerControllerProps.className || ''}`}
      />
    </GlassPanel>
  );
}

/**
 * Creates a panel configuration for the LayerController
 */
function createLayerControllerPanelConfig(
  panelId: string,
  defaultPosition: DockPosition,
  layerControllerProps: LayerControllerProps
): PanelConfig {
  // Create a component that includes the layer controller props in closure
  const PanelComponent = (props: PanelContentProps) => (
    <LayerControllerPanelContent
      {...props}
      layerControllerProps={layerControllerProps}
    />
  );

  return {
    id: panelId,
    title: 'Layers',
    component: PanelComponent,
    defaultPosition,
    minSize: { width: 280, height: 300 },
    defaultSize: { width: 320, height: 480 },
    maxSize: { width: 400, height: 800 },
    resizable: true,
    priority: 10,
    icon: '🗂',
  };
}

/**
 * Hook to manage the layer controller panel
 */
export function useLayerControllerPanel(panelId: string = 'layer-controller') {
  const panelManager = usePanelManager();

  return useMemo(
    () => ({
      isOpen: panelManager.getPanelState(panelId)?.isOpen ?? false,
      isMinimized: panelManager.getPanelState(panelId)?.isMinimized ?? false,
      open: () => panelManager.openPanel(panelId),
      close: () => panelManager.closePanel(panelId),
      toggle: () => panelManager.togglePanel(panelId),
      minimize: () => panelManager.minimizePanel(panelId),
      maximize: () => panelManager.maximizePanel(panelId),
      moveTo: (position: DockPosition) => panelManager.movePanel(panelId, position),
    }),
    [panelManager, panelId]
  );
}

/**
 * Smart Layer Controller Component
 *
 * Wraps the LayerController with SmartPanelManager integration,
 * providing dockable, collapsible, and draggable functionality
 * with glass morphism styling from GlassUI.
 *
 * This component should be used within a PanelManagerProvider context.
 * For standalone usage, use LayerControllerWithProvider instead.
 */
export function LayerController({
  activeLayers,
  onLayersChange,
  onOpacityChange,
  initialOpacities = {},
  compact = false,
  className = '',
  defaultDockPosition = 'right',
  defaultOpen = true,
  panelId = 'layer-controller',
}: SmartLayerControllerProps) {
  const panelManager = usePanelManager();

  // Create the panel config with current props
  const panelConfig = useMemo(
    () =>
      createLayerControllerPanelConfig(panelId, defaultDockPosition, {
        activeLayers,
        onLayersChange,
        onOpacityChange,
        initialOpacities,
        compact,
        className,
      }),
    [
      panelId,
      defaultDockPosition,
      activeLayers,
      onLayersChange,
      onOpacityChange,
      initialOpacities,
      compact,
      className,
    ]
  );

  // Register the panel on mount
  useEffect(() => {
    panelManager.registerPanel(panelConfig);

    // Open the panel by default if specified
    if (defaultOpen) {
      panelManager.openPanel(panelId);
    }

    return () => {
      panelManager.unregisterPanel(panelId);
    };
  }, [panelManager, panelConfig, panelId, defaultOpen]);

  // The actual rendering is handled by SmartPanelManager
  return null;
}

/**
 * Standalone Layer Controller with built-in PanelManagerProvider
 *
 * Use this component when you don't have an existing PanelManagerProvider
 * in your component tree. It creates its own provider and renders the
 * SmartPanelManager along with the layer controller panel.
 */
export function LayerControllerWithProvider({
  activeLayers,
  onLayersChange,
  onOpacityChange,
  initialOpacities = {},
  compact = false,
  className = '',
  defaultDockPosition = 'right',
  defaultOpen = true,
  panelId = 'layer-controller',
}: SmartLayerControllerProps) {
  const panelConfig = useMemo(
    () =>
      createLayerControllerPanelConfig(panelId, defaultDockPosition, {
        activeLayers,
        onLayersChange,
        onOpacityChange,
        initialOpacities,
        compact,
        className,
      }),
    [
      panelId,
      defaultDockPosition,
      activeLayers,
      onLayersChange,
      onOpacityChange,
      initialOpacities,
      compact,
      className,
    ]
  );

  return (
    <PanelManagerProvider
      initialPanels={[panelConfig]}
      storageKey="layer-controller-panel-state"
    >
      <LayerControllerInner
        panelId={panelId}
        defaultOpen={defaultOpen}
      />
      <SmartPanelManager className="layer-controller-panel-manager" />
    </PanelManagerProvider>
  );
}

/**
 * Internal component to handle panel registration within provider
 */
function LayerControllerInner({
  panelId,
  defaultOpen,
}: {
  panelId: string;
  defaultOpen: boolean;
}) {
  const panelManager = usePanelManager();

  useEffect(() => {
    if (defaultOpen) {
      panelManager.openPanel(panelId);
    }
  }, [panelManager, panelId, defaultOpen]);

  return null;
}

/**
 * Legacy Layer Controller for backward compatibility
 *
 * This is the original LayerController component without SmartPanelManager
 * integration. Use this if you need the simple, non-dockable version.
 */
export function LegacyLayerController(props: LayerControllerProps) {
  return <LayerControllerContent {...props} />;
}

// ============================================
// Exports
// ============================================

export { LAYER_DEFINITIONS, LAYER_PRESETS };
export default LayerController;
