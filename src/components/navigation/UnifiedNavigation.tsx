/**
 * UnifiedNavigation
 *
 * Integrates all navigation components into a cohesive navigation experience:
 * - FloatingToolbar: Primary actions toolbar
 * - RadialContextMenu: Right-click context menu
 * - SpatialBreadcrumbs: Location breadcrumb trail
 * - SmartPanelManager: Auto-positioning panel management
 * - EnhancedCameraControls: Smooth camera transitions
 *
 * Keyboard shortcuts:
 * - Space: Reset view
 * - F: Focus on selection
 * - Escape: Close panels/menus
 * - 1-6: Camera presets
 * - H: Toggle UI visibility
 */

import React, {
  createContext,
  useContext,
  useReducer,
  useCallback,
  useEffect,
  useRef,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import {
  RadialContextMenu,
  type RadialMenuAction,
  type RadialContextMenuProps,
} from './RadialContextMenu';
import {
  FloatingToolbar as ExternalFloatingToolbar,
  type FloatingToolbarProps as ExternalFloatingToolbarProps,
  type ToolbarItem,
} from './FloatingToolbar';
import {
  SpatialBreadcrumbs as ExternalSpatialBreadcrumbs,
  type SpatialBreadcrumbsProps as ExternalSpatialBreadcrumbsProps,
  type BreadcrumbItem as ExternalBreadcrumbItem,
} from './SpatialBreadcrumbs';
import {
  ANATOMICAL_VIEW_PRESETS,
  type ViewPreset,
} from '../../anatomy/EnhancedCameraControls';

// ============================================
// Types
// ============================================

export type NavigationMode = 'explore' | 'focus' | 'compare' | 'measure';

export type PanelPosition = 'left' | 'right' | 'bottom' | 'center' | 'floating';

export type CameraPreset = 'anterior' | 'posterior' | 'leftLateral' | 'rightLateral' | 'superior' | 'inferior';

export interface NavigationLocation {
  id: string;
  label: string;
  path: string[];
  regionId?: string;
  structureId?: string;
}

export interface ToolbarAction {
  id: string;
  label: string;
  icon: React.ReactNode;
  shortcut?: string;
  onClick: () => void;
  disabled?: boolean;
  active?: boolean;
  group?: string;
}

export interface PanelConfig {
  id: string;
  title: string;
  position: PanelPosition;
  width?: number;
  height?: number;
  minWidth?: number;
  minHeight?: number;
  isOpen: boolean;
  isPinned: boolean;
  content: React.ReactNode;
  priority?: number;
}

export interface BreadcrumbItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export interface UnifiedNavigationState {
  mode: NavigationMode;
  currentLocation: NavigationLocation | null;
  selectedStructure: { id: string; name: string; position: { x: number; y: number } } | null;
  isUIVisible: boolean;
  isContextMenuOpen: boolean;
  contextMenuPosition: { x: number; y: number };
  activePanels: string[];
  breadcrumbs: BreadcrumbItem[];
  cameraPreset: CameraPreset | null;
  isTransitioning: boolean;
  focusedElement: string | null;
}

type NavigationAction =
  | { type: 'SET_MODE'; payload: NavigationMode }
  | { type: 'SET_LOCATION'; payload: NavigationLocation | null }
  | { type: 'SELECT_STRUCTURE'; payload: { id: string; name: string; position: { x: number; y: number } } | null }
  | { type: 'TOGGLE_UI_VISIBILITY' }
  | { type: 'SET_UI_VISIBILITY'; payload: boolean }
  | { type: 'OPEN_CONTEXT_MENU'; payload: { x: number; y: number } }
  | { type: 'CLOSE_CONTEXT_MENU' }
  | { type: 'TOGGLE_PANEL'; payload: string }
  | { type: 'OPEN_PANEL'; payload: string }
  | { type: 'CLOSE_PANEL'; payload: string }
  | { type: 'CLOSE_ALL_PANELS' }
  | { type: 'SET_BREADCRUMBS'; payload: BreadcrumbItem[] }
  | { type: 'SET_CAMERA_PRESET'; payload: CameraPreset | null }
  | { type: 'SET_TRANSITIONING'; payload: boolean }
  | { type: 'SET_FOCUSED_ELEMENT'; payload: string | null }
  | { type: 'RESET_VIEW' };

// ============================================
// Initial State
// ============================================

const initialState: UnifiedNavigationState = {
  mode: 'explore',
  currentLocation: null,
  selectedStructure: null,
  isUIVisible: true,
  isContextMenuOpen: false,
  contextMenuPosition: { x: 0, y: 0 },
  activePanels: [],
  breadcrumbs: [],
  cameraPreset: 'anterior',
  isTransitioning: false,
  focusedElement: null,
};

// ============================================
// Reducer
// ============================================

function navigationReducer(
  state: UnifiedNavigationState,
  action: NavigationAction
): UnifiedNavigationState {
  switch (action.type) {
    case 'SET_MODE':
      return { ...state, mode: action.payload };

    case 'SET_LOCATION':
      return {
        ...state,
        currentLocation: action.payload,
        breadcrumbs: action.payload
          ? action.payload.path.map((p, i) => ({
              id: `breadcrumb-${i}`,
              label: p,
            }))
          : [],
      };

    case 'SELECT_STRUCTURE':
      return { ...state, selectedStructure: action.payload };

    case 'TOGGLE_UI_VISIBILITY':
      return { ...state, isUIVisible: !state.isUIVisible };

    case 'SET_UI_VISIBILITY':
      return { ...state, isUIVisible: action.payload };

    case 'OPEN_CONTEXT_MENU':
      return {
        ...state,
        isContextMenuOpen: true,
        contextMenuPosition: action.payload,
      };

    case 'CLOSE_CONTEXT_MENU':
      return { ...state, isContextMenuOpen: false };

    case 'TOGGLE_PANEL':
      return {
        ...state,
        activePanels: state.activePanels.includes(action.payload)
          ? state.activePanels.filter((p) => p !== action.payload)
          : [...state.activePanels, action.payload],
      };

    case 'OPEN_PANEL':
      return {
        ...state,
        activePanels: state.activePanels.includes(action.payload)
          ? state.activePanels
          : [...state.activePanels, action.payload],
      };

    case 'CLOSE_PANEL':
      return {
        ...state,
        activePanels: state.activePanels.filter((p) => p !== action.payload),
      };

    case 'CLOSE_ALL_PANELS':
      return { ...state, activePanels: [], isContextMenuOpen: false };

    case 'SET_BREADCRUMBS':
      return { ...state, breadcrumbs: action.payload };

    case 'SET_CAMERA_PRESET':
      return { ...state, cameraPreset: action.payload, isTransitioning: true };

    case 'SET_TRANSITIONING':
      return { ...state, isTransitioning: action.payload };

    case 'SET_FOCUSED_ELEMENT':
      return { ...state, focusedElement: action.payload };

    case 'RESET_VIEW':
      return {
        ...state,
        cameraPreset: 'anterior',
        selectedStructure: null,
        isTransitioning: true,
        activePanels: [],
        isContextMenuOpen: false,
      };

    default:
      return state;
  }
}

// ============================================
// Context
// ============================================

interface UnifiedNavigationContextValue {
  state: UnifiedNavigationState;
  dispatch: React.Dispatch<NavigationAction>;
  // Actions
  setMode: (mode: NavigationMode) => void;
  setLocation: (location: NavigationLocation | null) => void;
  selectStructure: (structure: { id: string; name: string; position: { x: number; y: number } } | null) => void;
  toggleUIVisibility: () => void;
  openContextMenu: (x: number, y: number) => void;
  closeContextMenu: () => void;
  togglePanel: (panelId: string) => void;
  openPanel: (panelId: string) => void;
  closePanel: (panelId: string) => void;
  closeAllPanels: () => void;
  setCameraPreset: (preset: CameraPreset | null) => void;
  resetView: () => void;
  focusOnSelection: () => void;
}

const UnifiedNavigationContext = createContext<UnifiedNavigationContextValue | null>(null);

// ============================================
// Provider
// ============================================

export interface UnifiedNavigationProviderProps {
  children: ReactNode;
  onCameraPresetChange?: (preset: CameraPreset) => void;
  onContextMenuAction?: (action: RadialMenuAction) => void;
  onResetView?: () => void;
  onFocusSelection?: (structureId: string) => void;
}

export function UnifiedNavigationProvider({
  children,
  onCameraPresetChange,
  onContextMenuAction,
  onResetView,
  onFocusSelection,
}: UnifiedNavigationProviderProps) {
  const [state, dispatch] = useReducer(navigationReducer, initialState);

  // Actions
  const setMode = useCallback((mode: NavigationMode) => {
    dispatch({ type: 'SET_MODE', payload: mode });
  }, []);

  const setLocation = useCallback((location: NavigationLocation | null) => {
    dispatch({ type: 'SET_LOCATION', payload: location });
  }, []);

  const selectStructure = useCallback((
    structure: { id: string; name: string; position: { x: number; y: number } } | null
  ) => {
    dispatch({ type: 'SELECT_STRUCTURE', payload: structure });
  }, []);

  const toggleUIVisibility = useCallback(() => {
    dispatch({ type: 'TOGGLE_UI_VISIBILITY' });
  }, []);

  const openContextMenu = useCallback((x: number, y: number) => {
    dispatch({ type: 'OPEN_CONTEXT_MENU', payload: { x, y } });
  }, []);

  const closeContextMenu = useCallback(() => {
    dispatch({ type: 'CLOSE_CONTEXT_MENU' });
  }, []);

  const togglePanel = useCallback((panelId: string) => {
    dispatch({ type: 'TOGGLE_PANEL', payload: panelId });
  }, []);

  const openPanel = useCallback((panelId: string) => {
    dispatch({ type: 'OPEN_PANEL', payload: panelId });
  }, []);

  const closePanel = useCallback((panelId: string) => {
    dispatch({ type: 'CLOSE_PANEL', payload: panelId });
  }, []);

  const closeAllPanels = useCallback(() => {
    dispatch({ type: 'CLOSE_ALL_PANELS' });
  }, []);

  const setCameraPreset = useCallback((preset: CameraPreset | null) => {
    dispatch({ type: 'SET_CAMERA_PRESET', payload: preset });
    if (preset) {
      onCameraPresetChange?.(preset);
    }
  }, [onCameraPresetChange]);

  const resetView = useCallback(() => {
    dispatch({ type: 'RESET_VIEW' });
    onResetView?.();
  }, [onResetView]);

  const focusOnSelection = useCallback(() => {
    if (state.selectedStructure) {
      onFocusSelection?.(state.selectedStructure.id);
    }
  }, [state.selectedStructure, onFocusSelection]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ignore if typing in an input
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      switch (event.key) {
        case ' ':
          event.preventDefault();
          resetView();
          break;
        case 'f':
        case 'F':
          if (state.selectedStructure) {
            event.preventDefault();
            focusOnSelection();
          }
          break;
        case 'Escape':
          event.preventDefault();
          closeAllPanels();
          break;
        case 'h':
        case 'H':
          event.preventDefault();
          toggleUIVisibility();
          break;
        case '1':
          event.preventDefault();
          setCameraPreset('anterior');
          break;
        case '2':
          event.preventDefault();
          setCameraPreset('posterior');
          break;
        case '3':
          event.preventDefault();
          setCameraPreset('leftLateral');
          break;
        case '4':
          event.preventDefault();
          setCameraPreset('rightLateral');
          break;
        case '5':
          event.preventDefault();
          setCameraPreset('superior');
          break;
        case '6':
          event.preventDefault();
          setCameraPreset('inferior');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    resetView,
    focusOnSelection,
    closeAllPanels,
    toggleUIVisibility,
    setCameraPreset,
    state.selectedStructure,
  ]);

  const contextValue = useMemo<UnifiedNavigationContextValue>(
    () => ({
      state,
      dispatch,
      setMode,
      setLocation,
      selectStructure,
      toggleUIVisibility,
      openContextMenu,
      closeContextMenu,
      togglePanel,
      openPanel,
      closePanel,
      closeAllPanels,
      setCameraPreset,
      resetView,
      focusOnSelection,
    }),
    [
      state,
      setMode,
      setLocation,
      selectStructure,
      toggleUIVisibility,
      openContextMenu,
      closeContextMenu,
      togglePanel,
      openPanel,
      closePanel,
      closeAllPanels,
      setCameraPreset,
      resetView,
      focusOnSelection,
    ]
  );

  return (
    <UnifiedNavigationContext.Provider value={contextValue}>
      {children}
    </UnifiedNavigationContext.Provider>
  );
}

// ============================================
// Hook
// ============================================

export function useUnifiedNavigation(): UnifiedNavigationContextValue {
  const context = useContext(UnifiedNavigationContext);
  if (!context) {
    throw new Error('useUnifiedNavigation must be used within UnifiedNavigationProvider');
  }
  return context;
}

// ============================================
// Floating Toolbar Component
// ============================================

export interface FloatingToolbarProps {
  position?: 'top' | 'bottom' | 'left' | 'right';
  actions?: ToolbarAction[];
  className?: string;
}

export function FloatingToolbar({
  position = 'left',
  actions = [],
  className = '',
}: FloatingToolbarProps) {
  const { state, toggleUIVisibility, resetView, setCameraPreset, togglePanel } = useUnifiedNavigation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Default actions if none provided
  const defaultActions: ToolbarAction[] = useMemo(() => [
    {
      id: 'reset-view',
      label: 'Reset View',
      shortcut: 'Space',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
          <path d="M3 3v5h5" />
        </svg>
      ),
      onClick: resetView,
    },
    {
      id: 'view-front',
      label: 'Front View',
      shortcut: '1',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      ),
      onClick: () => setCameraPreset('anterior'),
      active: state.cameraPreset === 'anterior',
    },
    {
      id: 'view-back',
      label: 'Back View',
      shortcut: '2',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M7 7h10v10H7z" />
        </svg>
      ),
      onClick: () => setCameraPreset('posterior'),
      active: state.cameraPreset === 'posterior',
    },
    {
      id: 'view-left',
      label: 'Left View',
      shortcut: '3',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 3v18" />
          <path d="M3 9l9 3-9 3" />
        </svg>
      ),
      onClick: () => setCameraPreset('leftLateral'),
      active: state.cameraPreset === 'leftLateral',
    },
    {
      id: 'view-right',
      label: 'Right View',
      shortcut: '4',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 3v18" />
          <path d="M21 9l-9 3 9 3" />
        </svg>
      ),
      onClick: () => setCameraPreset('rightLateral'),
      active: state.cameraPreset === 'rightLateral',
    },
    {
      id: 'toggle-ui',
      label: 'Toggle UI',
      shortcut: 'H',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {state.isUIVisible ? (
            <>
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </>
          ) : (
            <>
              <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
              <line x1="1" y1="1" x2="23" y2="23" />
            </>
          )}
        </svg>
      ),
      onClick: toggleUIVisibility,
    },
    {
      id: 'layers',
      label: 'Layers',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
      onClick: () => togglePanel('layers'),
      active: state.activePanels.includes('layers'),
    },
  ], [state.cameraPreset, state.isUIVisible, state.activePanels, resetView, setCameraPreset, toggleUIVisibility, togglePanel]);

  const toolbarActions = actions.length > 0 ? actions : defaultActions;

  const positionClasses: Record<string, string> = {
    top: 'unified-nav-toolbar--top',
    bottom: 'unified-nav-toolbar--bottom',
    left: 'unified-nav-toolbar--left',
    right: 'unified-nav-toolbar--right',
  };

  if (!state.isUIVisible) {
    return null;
  }

  return (
    <div
      className={`unified-nav-toolbar ${positionClasses[position]} ${isCollapsed ? 'unified-nav-toolbar--collapsed' : ''} ${className}`}
      role="toolbar"
      aria-label="Navigation toolbar"
    >
      <button
        className="unified-nav-toolbar__toggle"
        onClick={() => setIsCollapsed(!isCollapsed)}
        aria-expanded={!isCollapsed}
        aria-label={isCollapsed ? 'Expand toolbar' : 'Collapse toolbar'}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {isCollapsed ? (
            <path d="M9 18l6-6-6-6" />
          ) : (
            <path d="M15 18l-6-6 6-6" />
          )}
        </svg>
      </button>

      {!isCollapsed && (
        <div className="unified-nav-toolbar__actions">
          {toolbarActions.map((action) => (
            <button
              key={action.id}
              className={`unified-nav-toolbar__action ${action.active ? 'unified-nav-toolbar__action--active' : ''} ${action.disabled ? 'unified-nav-toolbar__action--disabled' : ''}`}
              onClick={action.onClick}
              disabled={action.disabled}
              title={`${action.label}${action.shortcut ? ` (${action.shortcut})` : ''}`}
              aria-label={action.label}
              aria-pressed={action.active}
            >
              <span className="unified-nav-toolbar__action-icon">{action.icon}</span>
              <span className="unified-nav-toolbar__action-label">{action.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ============================================
// Spatial Breadcrumbs Component
// ============================================

export interface SpatialBreadcrumbsProps {
  className?: string;
  maxItems?: number;
  separator?: React.ReactNode;
}

export function SpatialBreadcrumbs({
  className = '',
  maxItems = 5,
  separator,
}: SpatialBreadcrumbsProps) {
  const { state, setLocation } = useUnifiedNavigation();
  const { breadcrumbs, isUIVisible } = state;

  const defaultSeparator = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="unified-nav-breadcrumbs__separator-icon">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );

  if (!isUIVisible || breadcrumbs.length === 0) {
    return null;
  }

  // Truncate middle items if too many
  const visibleBreadcrumbs = breadcrumbs.length > maxItems
    ? [
        breadcrumbs[0],
        { id: 'ellipsis', label: '...' },
        ...breadcrumbs.slice(-Math.floor(maxItems / 2)),
      ]
    : breadcrumbs;

  return (
    <nav
      className={`unified-nav-breadcrumbs ${className}`}
      aria-label="Breadcrumb navigation"
    >
      <ol className="unified-nav-breadcrumbs__list">
        {visibleBreadcrumbs.map((item, index) => (
          <li key={item.id} className="unified-nav-breadcrumbs__item">
            {index > 0 && (
              <span className="unified-nav-breadcrumbs__separator" aria-hidden="true">
                {separator || defaultSeparator}
              </span>
            )}
            {item.id === 'ellipsis' ? (
              <span className="unified-nav-breadcrumbs__ellipsis">{item.label}</span>
            ) : index === visibleBreadcrumbs.length - 1 ? (
              <span className="unified-nav-breadcrumbs__current" aria-current="page">
                {item.icon && <span className="unified-nav-breadcrumbs__icon">{item.icon}</span>}
                {item.label}
              </span>
            ) : (
              <button
                className="unified-nav-breadcrumbs__link"
                onClick={item.onClick}
                aria-label={`Go to ${item.label}`}
              >
                {item.icon && <span className="unified-nav-breadcrumbs__icon">{item.icon}</span>}
                {item.label}
              </button>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

// ============================================
// Smart Panel Manager Component
// ============================================

export interface SmartPanelManagerProps {
  panels: PanelConfig[];
  className?: string;
  onPanelClose?: (panelId: string) => void;
  onPanelPin?: (panelId: string, isPinned: boolean) => void;
}

export function SmartPanelManager({
  panels,
  className = '',
  onPanelClose,
  onPanelPin,
}: SmartPanelManagerProps) {
  const { state, closePanel } = useUnifiedNavigation();
  const [panelPositions, setPanelPositions] = useState<Record<string, { x: number; y: number }>>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const lastPositionsRef = useRef<string>('');

  // Memoize active panels to prevent unnecessary recalculations
  // This creates a stable reference that only changes when the actual panel IDs change
  const activePanels = useMemo(() => {
    return panels.filter(
      (p) => p.isOpen && state.activePanels.includes(p.id)
    );
  }, [panels, state.activePanels]);

  // Create a stable key for the active panels based on their IDs and positions
  const activePanelKey = useMemo(() => {
    return activePanels.map(p => `${p.id}:${p.position}:${p.width}:${p.height}`).join(',');
  }, [activePanels]);

  // Auto-position panels to avoid overlap
  useEffect(() => {
    if (!containerRef.current) return;
    if (activePanels.length === 0) {
      // Clear positions if no active panels
      if (lastPositionsRef.current !== '') {
        lastPositionsRef.current = '';
        setPanelPositions({});
      }
      return;
    }

    const containerRect = containerRef.current.getBoundingClientRect();
    const newPositions: Record<string, { x: number; y: number }> = {};

    activePanels.forEach((panel, index) => {
      const baseX = panel.position === 'left' ? 20 : panel.position === 'right' ? containerRect.width - (panel.width || 320) - 20 : 100;
      const baseY = panel.position === 'bottom' ? containerRect.height - (panel.height || 400) - 20 : 100;

      // Stagger panels slightly to show they're separate
      newPositions[panel.id] = {
        x: baseX + index * 30,
        y: baseY + index * 30,
      };
    });

    // Only update state if positions actually changed
    const positionsKey = JSON.stringify(newPositions);
    if (positionsKey !== lastPositionsRef.current) {
      lastPositionsRef.current = positionsKey;
      setPanelPositions(newPositions);
    }
  }, [activePanelKey, activePanels]);

  if (!state.isUIVisible) {
    return null;
  }

  const handleClosePanel = (panelId: string) => {
    closePanel(panelId);
    onPanelClose?.(panelId);
  };

  return (
    <div ref={containerRef} className={`unified-nav-panel-manager ${className}`}>
      {activePanels.map((panel) => (
        <div
          key={panel.id}
          className={`unified-nav-panel unified-nav-panel--${panel.position} ${panel.isPinned ? 'unified-nav-panel--pinned' : ''}`}
          style={{
            width: panel.width || 320,
            height: panel.height || 'auto',
            minWidth: panel.minWidth || 200,
            minHeight: panel.minHeight || 100,
            left: panelPositions[panel.id]?.x,
            top: panelPositions[panel.id]?.y,
          }}
          role="dialog"
          aria-label={panel.title}
        >
          <div className="unified-nav-panel__header">
            <h3 className="unified-nav-panel__title">{panel.title}</h3>
            <div className="unified-nav-panel__controls">
              <button
                className={`unified-nav-panel__pin ${panel.isPinned ? 'unified-nav-panel__pin--active' : ''}`}
                onClick={() => onPanelPin?.(panel.id, !panel.isPinned)}
                title={panel.isPinned ? 'Unpin panel' : 'Pin panel'}
                aria-pressed={panel.isPinned}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 17v5M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4.76z" />
                </svg>
              </button>
              <button
                className="unified-nav-panel__close"
                onClick={() => handleClosePanel(panel.id)}
                title="Close panel"
                aria-label={`Close ${panel.title}`}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div className="unified-nav-panel__content">{panel.content}</div>
        </div>
      ))}
    </div>
  );
}

// ============================================
// Context Menu Integration
// ============================================

export interface NavigationContextMenuProps {
  onAction?: (action: RadialMenuAction) => void;
}

export function NavigationContextMenu({ onAction }: NavigationContextMenuProps) {
  const { state, closeContextMenu } = useUnifiedNavigation();

  const handleAction = useCallback((action: RadialMenuAction) => {
    onAction?.(action);
    closeContextMenu();
  }, [onAction, closeContextMenu]);

  return (
    <RadialContextMenu
      isOpen={state.isContextMenuOpen}
      regionId={state.selectedStructure?.id}
      regionName={state.selectedStructure?.name}
      position={state.contextMenuPosition}
      onSelect={handleAction}
      onClose={closeContextMenu}
    />
  );
}

// ============================================
// Camera Preset Indicator
// ============================================

export interface CameraPresetIndicatorProps {
  className?: string;
}

export function CameraPresetIndicator({ className = '' }: CameraPresetIndicatorProps) {
  const { state } = useUnifiedNavigation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (state.isTransitioning) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [state.isTransitioning, state.cameraPreset]);

  if (!state.isUIVisible || !isVisible || !state.cameraPreset) {
    return null;
  }

  const presetLabels: Record<CameraPreset, string> = {
    anterior: 'Front View',
    posterior: 'Back View',
    leftLateral: 'Left Side',
    rightLateral: 'Right Side',
    superior: 'Top View',
    inferior: 'Bottom View',
  };

  return (
    <div
      className={`unified-nav-camera-indicator ${state.isTransitioning ? 'unified-nav-camera-indicator--transitioning' : ''} ${className}`}
      role="status"
      aria-live="polite"
    >
      <span className="unified-nav-camera-indicator__label">
        {presetLabels[state.cameraPreset]}
      </span>
    </div>
  );
}

// ============================================
// Keyboard Shortcuts Help
// ============================================

export interface KeyboardShortcutsHelpProps {
  isOpen: boolean;
  onClose: () => void;
}

export function KeyboardShortcutsHelp({ isOpen, onClose }: KeyboardShortcutsHelpProps) {
  const shortcuts = [
    { key: 'Space', description: 'Reset view' },
    { key: 'F', description: 'Focus on selection' },
    { key: 'Escape', description: 'Close panels/menus' },
    { key: 'H', description: 'Toggle UI visibility' },
    { key: '1', description: 'Front view' },
    { key: '2', description: 'Back view' },
    { key: '3', description: 'Left side view' },
    { key: '4', description: 'Right side view' },
    { key: '5', description: 'Top view' },
    { key: '6', description: 'Bottom view' },
  ];

  if (!isOpen) return null;

  return (
    <div className="unified-nav-shortcuts-help" role="dialog" aria-label="Keyboard shortcuts">
      <div className="unified-nav-shortcuts-help__overlay" onClick={onClose} />
      <div className="unified-nav-shortcuts-help__content">
        <header className="unified-nav-shortcuts-help__header">
          <h2>Keyboard Shortcuts</h2>
          <button onClick={onClose} aria-label="Close">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </header>
        <ul className="unified-nav-shortcuts-help__list">
          {shortcuts.map((shortcut) => (
            <li key={shortcut.key} className="unified-nav-shortcuts-help__item">
              <kbd className="unified-nav-shortcuts-help__key">{shortcut.key}</kbd>
              <span className="unified-nav-shortcuts-help__description">{shortcut.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ============================================
// Unified Navigation Component
// ============================================

export interface UnifiedNavigationProps {
  children?: ReactNode;
  panels?: PanelConfig[];
  toolbarActions?: ToolbarAction[];
  toolbarPosition?: 'top' | 'bottom' | 'left' | 'right';
  showBreadcrumbs?: boolean;
  showCameraIndicator?: boolean;
  onCameraPresetChange?: (preset: CameraPreset) => void;
  onContextMenuAction?: (action: RadialMenuAction) => void;
  onResetView?: () => void;
  onFocusSelection?: (structureId: string) => void;
  onPanelClose?: (panelId: string) => void;
  onPanelPin?: (panelId: string, isPinned: boolean) => void;
  className?: string;
}

export function UnifiedNavigation({
  children,
  panels = [],
  toolbarActions,
  toolbarPosition = 'left',
  showBreadcrumbs = true,
  showCameraIndicator = true,
  onCameraPresetChange,
  onContextMenuAction,
  onResetView,
  onFocusSelection,
  onPanelClose,
  onPanelPin,
  className = '',
}: UnifiedNavigationProps) {
  const [showShortcutsHelp, setShowShortcutsHelp] = useState(false);

  return (
    <UnifiedNavigationProvider
      onCameraPresetChange={onCameraPresetChange}
      onContextMenuAction={onContextMenuAction}
      onResetView={onResetView}
      onFocusSelection={onFocusSelection}
    >
      <div className={`unified-navigation ${className}`}>
        {/* Floating Toolbar */}
        <FloatingToolbar position={toolbarPosition} actions={toolbarActions} />

        {/* Spatial Breadcrumbs */}
        {showBreadcrumbs && <SpatialBreadcrumbs />}

        {/* Camera Preset Indicator */}
        {showCameraIndicator && <CameraPresetIndicator />}

        {/* Smart Panel Manager */}
        <SmartPanelManager
          panels={panels}
          onPanelClose={onPanelClose}
          onPanelPin={onPanelPin}
        />

        {/* Context Menu */}
        <NavigationContextMenu onAction={onContextMenuAction} />

        {/* Keyboard Shortcuts Help */}
        <KeyboardShortcutsHelp
          isOpen={showShortcutsHelp}
          onClose={() => setShowShortcutsHelp(false)}
        />

        {/* Content */}
        {children}
      </div>
    </UnifiedNavigationProvider>
  );
}

// ============================================
// CSS Styles (injected)
// ============================================

const styles = `
/* Unified Navigation Container */
.unified-navigation {
  position: relative;
  width: 100%;
  height: 100%;
}

/* Floating Toolbar */
.unified-nav-toolbar {
  position: fixed;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px;
  background: rgba(24, 24, 27, 0.95);
  backdrop-filter: blur(12px);
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.unified-nav-toolbar--left {
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
}

.unified-nav-toolbar--right {
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
}

.unified-nav-toolbar--top {
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  flex-direction: row;
}

.unified-nav-toolbar--bottom {
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  flex-direction: row;
}

.unified-nav-toolbar--collapsed {
  padding: 4px;
}

.unified-nav-toolbar__toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: transparent;
  border: none;
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}

.unified-nav-toolbar__toggle:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.unified-nav-toolbar__toggle svg {
  width: 20px;
  height: 20px;
}

.unified-nav-toolbar__actions {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.unified-nav-toolbar--top .unified-nav-toolbar__actions,
.unified-nav-toolbar--bottom .unified-nav-toolbar__actions {
  flex-direction: row;
}

.unified-nav-toolbar__action {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  background: transparent;
  border: none;
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  transition: background 0.2s, color 0.2s, transform 0.1s;
}

.unified-nav-toolbar__action:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.unified-nav-toolbar__action:active {
  transform: scale(0.95);
}

.unified-nav-toolbar__action--active {
  background: rgba(59, 130, 246, 0.2);
  color: #60a5fa;
}

.unified-nav-toolbar__action--disabled {
  opacity: 0.4;
  pointer-events: none;
}

.unified-nav-toolbar__action-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
}

.unified-nav-toolbar__action-icon svg {
  width: 20px;
  height: 20px;
}

.unified-nav-toolbar__action-label {
  font-size: 13px;
  font-weight: 500;
  white-space: nowrap;
}

/* Spatial Breadcrumbs */
.unified-nav-breadcrumbs {
  position: fixed;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  padding: 8px 16px;
  background: rgba(24, 24, 27, 0.9);
  backdrop-filter: blur(12px);
  border-radius: 24px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
}

.unified-nav-breadcrumbs__list {
  display: flex;
  align-items: center;
  gap: 4px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.unified-nav-breadcrumbs__item {
  display: flex;
  align-items: center;
  gap: 4px;
}

.unified-nav-breadcrumbs__separator {
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.3);
}

.unified-nav-breadcrumbs__separator-icon {
  width: 16px;
  height: 16px;
}

.unified-nav-breadcrumbs__link {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  background: transparent;
  border: none;
  border-radius: 4px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 13px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}

.unified-nav-breadcrumbs__link:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.unified-nav-breadcrumbs__current {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  color: white;
  font-size: 13px;
  font-weight: 500;
}

.unified-nav-breadcrumbs__ellipsis {
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;
}

.unified-nav-breadcrumbs__icon {
  display: flex;
  align-items: center;
}

.unified-nav-breadcrumbs__icon svg {
  width: 16px;
  height: 16px;
}

/* Smart Panel Manager */
.unified-nav-panel-manager {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 998;
}

.unified-nav-panel {
  position: absolute;
  display: flex;
  flex-direction: column;
  background: rgba(24, 24, 27, 0.98);
  backdrop-filter: blur(16px);
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  pointer-events: auto;
  transition: transform 0.3s ease, opacity 0.3s ease;
  animation: panelSlideIn 0.3s ease;
}

@keyframes panelSlideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.unified-nav-panel--pinned {
  border: 1px solid rgba(59, 130, 246, 0.3);
}

.unified-nav-panel__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  cursor: move;
}

.unified-nav-panel__title {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: white;
}

.unified-nav-panel__controls {
  display: flex;
  align-items: center;
  gap: 8px;
}

.unified-nav-panel__pin,
.unified-nav-panel__close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: transparent;
  border: none;
  border-radius: 6px;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}

.unified-nav-panel__pin:hover,
.unified-nav-panel__close:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.unified-nav-panel__pin--active {
  color: #60a5fa;
}

.unified-nav-panel__pin svg,
.unified-nav-panel__close svg {
  width: 16px;
  height: 16px;
}

.unified-nav-panel__content {
  flex: 1;
  overflow: auto;
  padding: 16px;
}

/* Camera Preset Indicator */
.unified-nav-camera-indicator {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 997;
  padding: 12px 24px;
  background: rgba(24, 24, 27, 0.95);
  backdrop-filter: blur(12px);
  border-radius: 24px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
  animation: indicatorFadeIn 0.3s ease;
}

@keyframes indicatorFadeIn {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

.unified-nav-camera-indicator--transitioning {
  animation: indicatorPulse 0.5s ease;
}

@keyframes indicatorPulse {
  0%, 100% {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
  }
  50% {
    box-shadow: 0 4px 24px rgba(59, 130, 246, 0.4);
  }
}

.unified-nav-camera-indicator__label {
  font-size: 14px;
  font-weight: 500;
  color: white;
}

/* Keyboard Shortcuts Help */
.unified-nav-shortcuts-help {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.unified-nav-shortcuts-help__overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
}

.unified-nav-shortcuts-help__content {
  position: relative;
  width: 90%;
  max-width: 400px;
  background: rgba(24, 24, 27, 0.98);
  backdrop-filter: blur(16px);
  border-radius: 16px;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.5);
  animation: helpSlideIn 0.3s ease;
}

@keyframes helpSlideIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.unified-nav-shortcuts-help__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.unified-nav-shortcuts-help__header h2 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.unified-nav-shortcuts-help__header button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: transparent;
  border: none;
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}

.unified-nav-shortcuts-help__header button:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.unified-nav-shortcuts-help__header button svg {
  width: 20px;
  height: 20px;
}

.unified-nav-shortcuts-help__list {
  list-style: none;
  margin: 0;
  padding: 12px 20px;
}

.unified-nav-shortcuts-help__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.unified-nav-shortcuts-help__item:last-child {
  border-bottom: none;
}

.unified-nav-shortcuts-help__key {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 28px;
  padding: 4px 10px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  font-family: ui-monospace, monospace;
  font-size: 12px;
  font-weight: 500;
  color: white;
}

.unified-nav-shortcuts-help__description {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
}
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  styleElement.setAttribute('data-unified-navigation', 'true');
  if (!document.querySelector('style[data-unified-navigation]')) {
    document.head.appendChild(styleElement);
  }
}

// ============================================
// Exports
// ============================================

export default UnifiedNavigation;
