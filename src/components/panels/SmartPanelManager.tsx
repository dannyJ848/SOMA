/**
 * Smart Panel Manager
 *
 * A comprehensive panel management system that handles:
 * - Panel overlap prevention through intelligent positioning
 * - Automatic panel positioning to avoid blocking the 3D view
 * - Panel docking (snap to edges: left, right, bottom, floating)
 * - Panel stacking with tabs when multiple panels are in the same dock
 * - Persistent panel positions via localStorage
 * - Smooth CSS transitions for open/close/move operations
 * - Panel minimization (collapse to icon)
 * - Mobile: converts panels to bottom sheets with drag-to-expand
 */

import React, {
  createContext,
  useContext,
  useReducer,
  useCallback,
  useMemo,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type ComponentType,
} from 'react';

// ============================================
// Types
// ============================================

/** Panel dock position options */
export type DockPosition = 'left' | 'right' | 'bottom' | 'floating';

/** Panel size dimensions */
export interface PanelSize {
  width: number;
  height: number;
}

/** Panel position coordinates */
export interface PanelPosition {
  x: number;
  y: number;
}

/** Configuration for a panel */
export interface PanelConfig {
  /** Unique identifier for the panel */
  id: string;
  /** Display title for the panel */
  title: string;
  /** React component to render as panel content */
  component: ComponentType<PanelContentProps>;
  /** Default dock position when first opened */
  defaultPosition: DockPosition;
  /** Minimum size constraints */
  minSize: PanelSize;
  /** Optional icon for minimized state */
  icon?: string;
  /** Optional maximum size constraints */
  maxSize?: PanelSize;
  /** Whether the panel can be resized */
  resizable?: boolean;
  /** Optional default size */
  defaultSize?: PanelSize;
  /** Priority for stacking order (higher = on top) */
  priority?: number;
}

/** Runtime state of a panel */
export interface PanelState {
  /** Whether the panel is currently open */
  isOpen: boolean;
  /** Whether the panel is minimized (collapsed to icon) */
  isMinimized: boolean;
  /** Current dock position */
  position: DockPosition;
  /** Current size dimensions */
  size: PanelSize;
  /** Coordinates for floating panels */
  floatingPosition?: PanelPosition;
  /** Z-index for stacking order */
  zIndex: number;
  /** Tab index when stacked with other panels */
  tabIndex?: number;
}

/** Props passed to panel content components */
export interface PanelContentProps {
  panelId: string;
  isMinimized: boolean;
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
}

/** State for a dock area containing stacked panels */
interface DockState {
  panels: string[];
  activeTabIndex: number;
  isCollapsed: boolean;
}

/** Mobile bottom sheet state */
interface BottomSheetState {
  activePanelId: string | null;
  expandedHeight: number; // 0-100 percentage
  isDragging: boolean;
}

/** Complete panel manager state */
interface PanelManagerState {
  panels: Record<string, PanelState>;
  docks: Record<DockPosition, DockState>;
  focusedPanelId: string | null;
  nextZIndex: number;
  isMobile: boolean;
  bottomSheet: BottomSheetState;
}

/** Actions for the panel manager reducer */
type PanelManagerAction =
  | { type: 'OPEN_PANEL'; panelId: string; config: PanelConfig }
  | { type: 'CLOSE_PANEL'; panelId: string }
  | { type: 'MINIMIZE_PANEL'; panelId: string }
  | { type: 'MAXIMIZE_PANEL'; panelId: string }
  | { type: 'FOCUS_PANEL'; panelId: string }
  | { type: 'MOVE_PANEL'; panelId: string; position: DockPosition; floatingPosition?: PanelPosition }
  | { type: 'RESIZE_PANEL'; panelId: string; size: PanelSize }
  | { type: 'SET_DOCK_TAB'; dockPosition: DockPosition; tabIndex: number }
  | { type: 'TOGGLE_DOCK_COLLAPSE'; dockPosition: DockPosition }
  | { type: 'SET_MOBILE'; isMobile: boolean }
  | { type: 'SET_BOTTOM_SHEET_HEIGHT'; height: number }
  | { type: 'SET_BOTTOM_SHEET_PANEL'; panelId: string | null }
  | { type: 'SET_BOTTOM_SHEET_DRAGGING'; isDragging: boolean }
  | { type: 'RESTORE_STATE'; state: Partial<PanelManagerState> }
  | { type: 'REORDER_DOCK_PANELS'; dockPosition: DockPosition; panelIds: string[] };

/** Context value exposed to consumers */
interface PanelManagerContextValue {
  state: PanelManagerState;
  configs: Map<string, PanelConfig>;
  openPanel: (panelId: string) => void;
  closePanel: (panelId: string) => void;
  togglePanel: (panelId: string) => void;
  minimizePanel: (panelId: string) => void;
  maximizePanel: (panelId: string) => void;
  focusPanel: (panelId: string) => void;
  movePanel: (panelId: string, position: DockPosition, floatingPosition?: PanelPosition) => void;
  resizePanel: (panelId: string, size: PanelSize) => void;
  setDockTab: (dockPosition: DockPosition, tabIndex: number) => void;
  toggleDockCollapse: (dockPosition: DockPosition) => void;
  registerPanel: (config: PanelConfig) => void;
  unregisterPanel: (panelId: string) => void;
  getPanelState: (panelId: string) => PanelState | undefined;
  getDockPanels: (dockPosition: DockPosition) => PanelConfig[];
  getMinimizedPanels: () => PanelConfig[];
  setBottomSheetHeight: (height: number) => void;
  setBottomSheetPanel: (panelId: string | null) => void;
}

// ============================================
// Constants
// ============================================

const STORAGE_KEY = 'smart-panel-manager-state';
const MOBILE_BREAKPOINT = 768;
const DEFAULT_Z_INDEX = 100;
const TRANSITION_DURATION = 300; // ms

const DEFAULT_DOCK_STATE: DockState = {
  panels: [],
  activeTabIndex: 0,
  isCollapsed: false,
};

const DEFAULT_BOTTOM_SHEET_STATE: BottomSheetState = {
  activePanelId: null,
  expandedHeight: 50,
  isDragging: false,
};

// ============================================
// Initial State
// ============================================

const initialState: PanelManagerState = {
  panels: {},
  docks: {
    left: { ...DEFAULT_DOCK_STATE },
    right: { ...DEFAULT_DOCK_STATE },
    bottom: { ...DEFAULT_DOCK_STATE },
    floating: { ...DEFAULT_DOCK_STATE },
  },
  focusedPanelId: null,
  nextZIndex: DEFAULT_Z_INDEX,
  isMobile: false,
  bottomSheet: { ...DEFAULT_BOTTOM_SHEET_STATE },
};

// ============================================
// Reducer
// ============================================

function panelManagerReducer(
  state: PanelManagerState,
  action: PanelManagerAction
): PanelManagerState {
  switch (action.type) {
    case 'OPEN_PANEL': {
      const { panelId, config } = action;
      const existingState = state.panels[panelId];

      if (existingState?.isOpen) {
        // Panel already open, just focus it
        return {
          ...state,
          focusedPanelId: panelId,
          panels: {
            ...state.panels,
            [panelId]: {
              ...existingState,
              zIndex: state.nextZIndex,
            },
          },
          nextZIndex: state.nextZIndex + 1,
        };
      }

      const newPanelState: PanelState = {
        isOpen: true,
        isMinimized: false,
        position: config.defaultPosition,
        size: config.defaultSize || config.minSize,
        zIndex: state.nextZIndex,
      };

      // Add to appropriate dock
      const dockPosition = config.defaultPosition;
      const updatedDock = {
        ...state.docks[dockPosition],
        panels: [...state.docks[dockPosition].panels, panelId],
        activeTabIndex: state.docks[dockPosition].panels.length,
      };

      return {
        ...state,
        panels: {
          ...state.panels,
          [panelId]: newPanelState,
        },
        docks: {
          ...state.docks,
          [dockPosition]: updatedDock,
        },
        focusedPanelId: panelId,
        nextZIndex: state.nextZIndex + 1,
      };
    }

    case 'CLOSE_PANEL': {
      const { panelId } = action;
      const panelState = state.panels[panelId];

      if (!panelState) return state;

      // Remove from dock
      const dockPosition = panelState.position;
      const dockPanels = state.docks[dockPosition].panels.filter(id => id !== panelId);
      const updatedDock = {
        ...state.docks[dockPosition],
        panels: dockPanels,
        activeTabIndex: Math.min(
          state.docks[dockPosition].activeTabIndex,
          Math.max(0, dockPanels.length - 1)
        ),
      };

      return {
        ...state,
        panels: {
          ...state.panels,
          [panelId]: {
            ...panelState,
            isOpen: false,
          },
        },
        docks: {
          ...state.docks,
          [dockPosition]: updatedDock,
        },
        focusedPanelId: state.focusedPanelId === panelId ? null : state.focusedPanelId,
      };
    }

    case 'MINIMIZE_PANEL': {
      const { panelId } = action;
      const panelState = state.panels[panelId];

      if (!panelState) return state;

      // Remove from dock but keep panel state
      const dockPosition = panelState.position;
      const dockPanels = state.docks[dockPosition].panels.filter(id => id !== panelId);
      const updatedDock = {
        ...state.docks[dockPosition],
        panels: dockPanels,
        activeTabIndex: Math.min(
          state.docks[dockPosition].activeTabIndex,
          Math.max(0, dockPanels.length - 1)
        ),
      };

      return {
        ...state,
        panels: {
          ...state.panels,
          [panelId]: {
            ...panelState,
            isMinimized: true,
          },
        },
        docks: {
          ...state.docks,
          [dockPosition]: updatedDock,
        },
        focusedPanelId: state.focusedPanelId === panelId ? null : state.focusedPanelId,
      };
    }

    case 'MAXIMIZE_PANEL': {
      const { panelId } = action;
      const panelState = state.panels[panelId];

      if (!panelState) return state;

      // Add back to dock
      const dockPosition = panelState.position;
      const updatedDock = {
        ...state.docks[dockPosition],
        panels: [...state.docks[dockPosition].panels, panelId],
        activeTabIndex: state.docks[dockPosition].panels.length,
      };

      return {
        ...state,
        panels: {
          ...state.panels,
          [panelId]: {
            ...panelState,
            isMinimized: false,
            zIndex: state.nextZIndex,
          },
        },
        docks: {
          ...state.docks,
          [dockPosition]: updatedDock,
        },
        focusedPanelId: panelId,
        nextZIndex: state.nextZIndex + 1,
      };
    }

    case 'FOCUS_PANEL': {
      const { panelId } = action;
      const panelState = state.panels[panelId];

      if (!panelState || !panelState.isOpen) return state;

      return {
        ...state,
        panels: {
          ...state.panels,
          [panelId]: {
            ...panelState,
            zIndex: state.nextZIndex,
          },
        },
        focusedPanelId: panelId,
        nextZIndex: state.nextZIndex + 1,
      };
    }

    case 'MOVE_PANEL': {
      const { panelId, position, floatingPosition } = action;
      const panelState = state.panels[panelId];

      if (!panelState) return state;

      // Remove from old dock
      const oldDockPosition = panelState.position;
      const oldDockPanels = state.docks[oldDockPosition].panels.filter(id => id !== panelId);
      const updatedOldDock = {
        ...state.docks[oldDockPosition],
        panels: oldDockPanels,
        activeTabIndex: Math.min(
          state.docks[oldDockPosition].activeTabIndex,
          Math.max(0, oldDockPanels.length - 1)
        ),
      };

      // Add to new dock
      const newDockPanels = [...state.docks[position].panels, panelId];
      const updatedNewDock = {
        ...state.docks[position],
        panels: newDockPanels,
        activeTabIndex: newDockPanels.length - 1,
      };

      return {
        ...state,
        panels: {
          ...state.panels,
          [panelId]: {
            ...panelState,
            position,
            floatingPosition: position === 'floating' ? floatingPosition : undefined,
            zIndex: state.nextZIndex,
          },
        },
        docks: {
          ...state.docks,
          [oldDockPosition]: updatedOldDock,
          [position]: updatedNewDock,
        },
        focusedPanelId: panelId,
        nextZIndex: state.nextZIndex + 1,
      };
    }

    case 'RESIZE_PANEL': {
      const { panelId, size } = action;
      const panelState = state.panels[panelId];

      if (!panelState) return state;

      return {
        ...state,
        panels: {
          ...state.panels,
          [panelId]: {
            ...panelState,
            size,
          },
        },
      };
    }

    case 'SET_DOCK_TAB': {
      const { dockPosition, tabIndex } = action;

      return {
        ...state,
        docks: {
          ...state.docks,
          [dockPosition]: {
            ...state.docks[dockPosition],
            activeTabIndex: tabIndex,
          },
        },
      };
    }

    case 'TOGGLE_DOCK_COLLAPSE': {
      const { dockPosition } = action;

      return {
        ...state,
        docks: {
          ...state.docks,
          [dockPosition]: {
            ...state.docks[dockPosition],
            isCollapsed: !state.docks[dockPosition].isCollapsed,
          },
        },
      };
    }

    case 'SET_MOBILE': {
      return {
        ...state,
        isMobile: action.isMobile,
      };
    }

    case 'SET_BOTTOM_SHEET_HEIGHT': {
      return {
        ...state,
        bottomSheet: {
          ...state.bottomSheet,
          expandedHeight: Math.max(0, Math.min(100, action.height)),
        },
      };
    }

    case 'SET_BOTTOM_SHEET_PANEL': {
      return {
        ...state,
        bottomSheet: {
          ...state.bottomSheet,
          activePanelId: action.panelId,
          expandedHeight: action.panelId ? 50 : 0,
        },
      };
    }

    case 'SET_BOTTOM_SHEET_DRAGGING': {
      return {
        ...state,
        bottomSheet: {
          ...state.bottomSheet,
          isDragging: action.isDragging,
        },
      };
    }

    case 'RESTORE_STATE': {
      return {
        ...state,
        ...action.state,
        // Ensure docks structure is complete
        docks: {
          left: { ...DEFAULT_DOCK_STATE, ...action.state.docks?.left },
          right: { ...DEFAULT_DOCK_STATE, ...action.state.docks?.right },
          bottom: { ...DEFAULT_DOCK_STATE, ...action.state.docks?.bottom },
          floating: { ...DEFAULT_DOCK_STATE, ...action.state.docks?.floating },
        },
      };
    }

    case 'REORDER_DOCK_PANELS': {
      const { dockPosition, panelIds } = action;

      return {
        ...state,
        docks: {
          ...state.docks,
          [dockPosition]: {
            ...state.docks[dockPosition],
            panels: panelIds,
          },
        },
      };
    }

    default:
      return state;
  }
}

// ============================================
// Context
// ============================================

const PanelManagerContext = createContext<PanelManagerContextValue | null>(null);

// ============================================
// Provider
// ============================================

interface PanelManagerProviderProps {
  children: ReactNode;
  /** Initial panel configurations */
  initialPanels?: PanelConfig[];
  /** Key for localStorage persistence */
  storageKey?: string;
  /** Disable localStorage persistence */
  disablePersistence?: boolean;
}

export function PanelManagerProvider({
  children,
  initialPanels = [],
  storageKey = STORAGE_KEY,
  disablePersistence = false,
}: PanelManagerProviderProps) {
  const [state, dispatch] = useReducer(panelManagerReducer, initialState);
  const configsRef = useRef<Map<string, PanelConfig>>(new Map());
  const [isInitialized, setIsInitialized] = useState(false);

  // Register initial panels
  useEffect(() => {
    initialPanels.forEach(config => {
      configsRef.current.set(config.id, config);
    });
  }, [initialPanels]);

  // Restore state from localStorage
  useEffect(() => {
    if (disablePersistence || isInitialized) return;

    try {
      const savedState = localStorage.getItem(storageKey);
      if (savedState) {
        const parsed = JSON.parse(savedState);
        dispatch({ type: 'RESTORE_STATE', state: parsed });
      }
    } catch (error) {
      console.warn('Failed to restore panel state:', error);
    }

    setIsInitialized(true);
  }, [storageKey, disablePersistence, isInitialized]);

  // Save state to localStorage
  useEffect(() => {
    if (disablePersistence || !isInitialized) return;

    const saveState = () => {
      try {
        const stateToSave = {
          panels: state.panels,
          docks: state.docks,
        };
        localStorage.setItem(storageKey, JSON.stringify(stateToSave));
      } catch (error) {
        console.warn('Failed to save panel state:', error);
      }
    };

    // Debounce saves
    const timeoutId = setTimeout(saveState, 500);
    return () => clearTimeout(timeoutId);
  }, [state.panels, state.docks, storageKey, disablePersistence, isInitialized]);

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
      dispatch({ type: 'SET_MOBILE', isMobile });
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Action callbacks
  const openPanel = useCallback((panelId: string) => {
    const config = configsRef.current.get(panelId);
    if (config) {
      dispatch({ type: 'OPEN_PANEL', panelId, config });
    }
  }, []);

  const closePanel = useCallback((panelId: string) => {
    dispatch({ type: 'CLOSE_PANEL', panelId });
  }, []);

  const togglePanel = useCallback((panelId: string) => {
    const panelState = state.panels[panelId];
    if (panelState?.isOpen) {
      dispatch({ type: 'CLOSE_PANEL', panelId });
    } else {
      const config = configsRef.current.get(panelId);
      if (config) {
        dispatch({ type: 'OPEN_PANEL', panelId, config });
      }
    }
  }, [state.panels]);

  const minimizePanel = useCallback((panelId: string) => {
    dispatch({ type: 'MINIMIZE_PANEL', panelId });
  }, []);

  const maximizePanel = useCallback((panelId: string) => {
    dispatch({ type: 'MAXIMIZE_PANEL', panelId });
  }, []);

  const focusPanel = useCallback((panelId: string) => {
    dispatch({ type: 'FOCUS_PANEL', panelId });
  }, []);

  const movePanel = useCallback((
    panelId: string,
    position: DockPosition,
    floatingPosition?: PanelPosition
  ) => {
    dispatch({ type: 'MOVE_PANEL', panelId, position, floatingPosition });
  }, []);

  const resizePanel = useCallback((panelId: string, size: PanelSize) => {
    dispatch({ type: 'RESIZE_PANEL', panelId, size });
  }, []);

  const setDockTab = useCallback((dockPosition: DockPosition, tabIndex: number) => {
    dispatch({ type: 'SET_DOCK_TAB', dockPosition, tabIndex });
  }, []);

  const toggleDockCollapse = useCallback((dockPosition: DockPosition) => {
    dispatch({ type: 'TOGGLE_DOCK_COLLAPSE', dockPosition });
  }, []);

  const registerPanel = useCallback((config: PanelConfig) => {
    configsRef.current.set(config.id, config);
  }, []);

  const unregisterPanel = useCallback((panelId: string) => {
    configsRef.current.delete(panelId);
    dispatch({ type: 'CLOSE_PANEL', panelId });
  }, []);

  const getPanelState = useCallback((panelId: string) => {
    return state.panels[panelId];
  }, [state.panels]);

  const getDockPanels = useCallback((dockPosition: DockPosition) => {
    return state.docks[dockPosition].panels
      .map(id => configsRef.current.get(id))
      .filter((config): config is PanelConfig => config !== undefined);
  }, [state.docks]);

  const getMinimizedPanels = useCallback(() => {
    return Object.entries(state.panels)
      .filter(([, panelState]) => panelState.isMinimized)
      .map(([id]) => configsRef.current.get(id))
      .filter((config): config is PanelConfig => config !== undefined);
  }, [state.panels]);

  const setBottomSheetHeight = useCallback((height: number) => {
    dispatch({ type: 'SET_BOTTOM_SHEET_HEIGHT', height });
  }, []);

  const setBottomSheetPanel = useCallback((panelId: string | null) => {
    dispatch({ type: 'SET_BOTTOM_SHEET_PANEL', panelId });
  }, []);

  // Memoize context value
  const contextValue = useMemo<PanelManagerContextValue>(() => ({
    state,
    configs: configsRef.current,
    openPanel,
    closePanel,
    togglePanel,
    minimizePanel,
    maximizePanel,
    focusPanel,
    movePanel,
    resizePanel,
    setDockTab,
    toggleDockCollapse,
    registerPanel,
    unregisterPanel,
    getPanelState,
    getDockPanels,
    getMinimizedPanels,
    setBottomSheetHeight,
    setBottomSheetPanel,
  }), [
    state,
    openPanel,
    closePanel,
    togglePanel,
    minimizePanel,
    maximizePanel,
    focusPanel,
    movePanel,
    resizePanel,
    setDockTab,
    toggleDockCollapse,
    registerPanel,
    unregisterPanel,
    getPanelState,
    getDockPanels,
    getMinimizedPanels,
    setBottomSheetHeight,
    setBottomSheetPanel,
  ]);

  return (
    <PanelManagerContext.Provider value={contextValue}>
      {children}
    </PanelManagerContext.Provider>
  );
}

// ============================================
// Hook
// ============================================

export function usePanelManager(): PanelManagerContextValue {
  const context = useContext(PanelManagerContext);
  if (!context) {
    throw new Error('usePanelManager must be used within a PanelManagerProvider');
  }
  return context;
}

// ============================================
// Convenience Hooks
// ============================================

/**
 * Get state for a specific panel
 */
export function usePanel(panelId: string) {
  const { state, configs, openPanel, closePanel, minimizePanel, maximizePanel, focusPanel } = usePanelManager();

  return useMemo(() => ({
    config: configs.get(panelId),
    state: state.panels[panelId],
    isOpen: state.panels[panelId]?.isOpen ?? false,
    isMinimized: state.panels[panelId]?.isMinimized ?? false,
    isFocused: state.focusedPanelId === panelId,
    open: () => openPanel(panelId),
    close: () => closePanel(panelId),
    minimize: () => minimizePanel(panelId),
    maximize: () => maximizePanel(panelId),
    focus: () => focusPanel(panelId),
  }), [panelId, configs, state.panels, state.focusedPanelId, openPanel, closePanel, minimizePanel, maximizePanel, focusPanel]);
}

/**
 * Get dock state and panels
 */
export function useDock(dockPosition: DockPosition) {
  const { state, getDockPanels, setDockTab, toggleDockCollapse } = usePanelManager();

  return useMemo(() => ({
    panels: getDockPanels(dockPosition),
    activeTabIndex: state.docks[dockPosition].activeTabIndex,
    isCollapsed: state.docks[dockPosition].isCollapsed,
    setActiveTab: (index: number) => setDockTab(dockPosition, index),
    toggleCollapse: () => toggleDockCollapse(dockPosition),
  }), [dockPosition, state.docks, getDockPanels, setDockTab, toggleDockCollapse]);
}

/**
 * Get minimized panels for the minimized panel bar
 */
export function useMinimizedPanels() {
  const { getMinimizedPanels, maximizePanel } = usePanelManager();

  return useMemo(() => ({
    panels: getMinimizedPanels(),
    restore: maximizePanel,
  }), [getMinimizedPanels, maximizePanel]);
}

/**
 * Get mobile bottom sheet state
 */
export function useBottomSheet() {
  const { state, setBottomSheetHeight, setBottomSheetPanel, configs } = usePanelManager();

  return useMemo(() => ({
    activePanelId: state.bottomSheet.activePanelId,
    activePanel: state.bottomSheet.activePanelId
      ? configs.get(state.bottomSheet.activePanelId)
      : null,
    expandedHeight: state.bottomSheet.expandedHeight,
    isDragging: state.bottomSheet.isDragging,
    setHeight: setBottomSheetHeight,
    setPanel: setBottomSheetPanel,
    close: () => setBottomSheetPanel(null),
  }), [state.bottomSheet, configs, setBottomSheetHeight, setBottomSheetPanel]);
}

// ============================================
// Panel Container Components
// ============================================

interface DockContainerProps {
  position: DockPosition;
  className?: string;
}

/**
 * Container for docked panels with tab support
 */
export function DockContainer({ position, className = '' }: DockContainerProps) {
  const { panels, activeTabIndex, isCollapsed, setActiveTab, toggleCollapse } = useDock(position);
  const { state, focusPanel, closePanel, minimizePanel, maximizePanel } = usePanelManager();

  if (panels.length === 0) return null;

  const activePanel = panels[activeTabIndex];
  const activePanelState = activePanel ? state.panels[activePanel.id] : null;

  const positionStyles: React.CSSProperties = {
    position: 'absolute',
    transition: `all ${TRANSITION_DURATION}ms ease-in-out`,
    ...(position === 'left' && { left: 0, top: 0, bottom: 0 }),
    ...(position === 'right' && { right: 0, top: 0, bottom: 0 }),
    ...(position === 'bottom' && { left: 0, right: 0, bottom: 0 }),
  };

  return (
    <div
      className={`smart-panel-dock smart-panel-dock--${position} ${className}`}
      style={{
        ...positionStyles,
        width: position === 'bottom' ? '100%' : (isCollapsed ? '48px' : `${activePanelState?.size.width ?? 320}px`),
        height: position === 'bottom' ? (isCollapsed ? '48px' : `${activePanelState?.size.height ?? 240}px`) : '100%',
        zIndex: DEFAULT_Z_INDEX,
      }}
    >
      {/* Dock Header with Tabs */}
      <div className="smart-panel-dock__header" style={{
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid var(--border-color, #e0e0e0)',
        backgroundColor: 'var(--panel-header-bg, #f5f5f5)',
        height: '40px',
      }}>
        {/* Collapse Toggle */}
        <button
          onClick={toggleCollapse}
          className="smart-panel-dock__collapse-btn"
          style={{
            padding: '8px',
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
          }}
          aria-label={isCollapsed ? 'Expand dock' : 'Collapse dock'}
        >
          {isCollapsed ? '>' : '<'}
        </button>

        {/* Panel Tabs */}
        {!isCollapsed && panels.length > 1 && (
          <div className="smart-panel-dock__tabs" style={{ display: 'flex', flex: 1 }}>
            {panels.map((panel, index) => (
              <button
                key={panel.id}
                onClick={() => setActiveTab(index)}
                className={`smart-panel-dock__tab ${index === activeTabIndex ? 'smart-panel-dock__tab--active' : ''}`}
                style={{
                  padding: '8px 16px',
                  border: 'none',
                  borderBottom: index === activeTabIndex ? '2px solid var(--accent-color, #007bff)' : 'none',
                  background: index === activeTabIndex ? 'var(--panel-bg, #fff)' : 'transparent',
                  cursor: 'pointer',
                  fontWeight: index === activeTabIndex ? 600 : 400,
                }}
              >
                {panel.icon && <span className="smart-panel-dock__tab-icon">{panel.icon}</span>}
                {panel.title}
              </button>
            ))}
          </div>
        )}

        {!isCollapsed && panels.length === 1 && (
          <span style={{ flex: 1, padding: '0 12px', fontWeight: 600 }}>
            {activePanel?.title}
          </span>
        )}

        {/* Panel Actions */}
        {!isCollapsed && activePanel && (
          <div className="smart-panel-dock__actions" style={{ display: 'flex', gap: '4px', padding: '0 8px' }}>
            <button
              onClick={() => minimizePanel(activePanel.id)}
              style={{ padding: '4px 8px', border: 'none', background: 'transparent', cursor: 'pointer' }}
              aria-label="Minimize panel"
            >
              _
            </button>
            <button
              onClick={() => closePanel(activePanel.id)}
              style={{ padding: '4px 8px', border: 'none', background: 'transparent', cursor: 'pointer' }}
              aria-label="Close panel"
            >
              ×
            </button>
          </div>
        )}
      </div>

      {/* Panel Content */}
      {!isCollapsed && activePanel && activePanelState && (
        <div
          className="smart-panel-dock__content"
          style={{
            flex: 1,
            overflow: 'auto',
            backgroundColor: 'var(--panel-bg, #fff)',
          }}
          onClick={() => focusPanel(activePanel.id)}
        >
          <activePanel.component
            panelId={activePanel.id}
            isMinimized={false}
            onClose={() => closePanel(activePanel.id)}
            onMinimize={() => minimizePanel(activePanel.id)}
            onMaximize={() => maximizePanel(activePanel.id)}
          />
        </div>
      )}
    </div>
  );
}

interface FloatingPanelProps {
  panelId: string;
  config: PanelConfig;
}

/**
 * Floating panel with drag support
 */
export function FloatingPanel({ panelId, config }: FloatingPanelProps) {
  const { state, focusPanel, closePanel, minimizePanel, maximizePanel, movePanel, resizePanel } = usePanelManager();
  const panelState = state.panels[panelId];
  const panelRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const positionStartRef = useRef({ x: 0, y: 0 });

  if (!panelState?.isOpen || panelState.isMinimized || panelState.position !== 'floating') {
    return null;
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('.smart-panel-floating__actions')) return;

    setIsDragging(true);
    dragStartRef.current = { x: e.clientX, y: e.clientY };
    positionStartRef.current = panelState.floatingPosition || { x: 100, y: 100 };
    focusPanel(panelId);
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;

    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;

    const newPosition = {
      x: Math.max(0, positionStartRef.current.x + dx),
      y: Math.max(0, positionStartRef.current.y + dy),
    };

    movePanel(panelId, 'floating', newPosition);
  }, [isDragging, panelId, movePanel]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);

    // Check for dock snapping
    if (panelRef.current) {
      const rect = panelRef.current.getBoundingClientRect();
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      if (rect.left < 50) {
        movePanel(panelId, 'left');
      } else if (rect.right > windowWidth - 50) {
        movePanel(panelId, 'right');
      } else if (rect.bottom > windowHeight - 50) {
        movePanel(panelId, 'bottom');
      }
    }
  }, [panelId, movePanel]);

  // Add global event listeners for dragging
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const position = panelState.floatingPosition || { x: 100, y: 100 };

  return (
    <div
      ref={panelRef}
      className="smart-panel-floating"
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        width: panelState.size.width,
        height: panelState.size.height,
        zIndex: panelState.zIndex,
        backgroundColor: 'var(--panel-bg, #fff)',
        borderRadius: '8px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
        transition: isDragging ? 'none' : `box-shadow ${TRANSITION_DURATION}ms ease-in-out`,
        cursor: isDragging ? 'grabbing' : 'default',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
      onClick={() => focusPanel(panelId)}
    >
      {/* Header */}
      <div
        className="smart-panel-floating__header"
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '8px 12px',
          borderBottom: '1px solid var(--border-color, #e0e0e0)',
          backgroundColor: 'var(--panel-header-bg, #f5f5f5)',
          cursor: isDragging ? 'grabbing' : 'grab',
          userSelect: 'none',
        }}
        onMouseDown={handleMouseDown}
      >
        <span style={{ flex: 1, fontWeight: 600 }}>
          {config.icon && <span style={{ marginRight: '8px' }}>{config.icon}</span>}
          {config.title}
        </span>
        <div className="smart-panel-floating__actions" style={{ display: 'flex', gap: '4px' }}>
          <button
            onClick={() => minimizePanel(panelId)}
            style={{ padding: '4px 8px', border: 'none', background: 'transparent', cursor: 'pointer' }}
            aria-label="Minimize panel"
          >
            _
          </button>
          <button
            onClick={() => closePanel(panelId)}
            style={{ padding: '4px 8px', border: 'none', background: 'transparent', cursor: 'pointer' }}
            aria-label="Close panel"
          >
            ×
          </button>
        </div>
      </div>

      {/* Content */}
      <div
        className="smart-panel-floating__content"
        style={{ flex: 1, overflow: 'auto' }}
      >
        <config.component
          panelId={panelId}
          isMinimized={false}
          onClose={() => closePanel(panelId)}
          onMinimize={() => minimizePanel(panelId)}
          onMaximize={() => maximizePanel(panelId)}
        />
      </div>

      {/* Resize Handle */}
      {config.resizable !== false && (
        <div
          className="smart-panel-floating__resize-handle"
          style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            width: '16px',
            height: '16px',
            cursor: 'se-resize',
          }}
          onMouseDown={(e) => {
            e.stopPropagation();
            const startX = e.clientX;
            const startY = e.clientY;
            const startWidth = panelState.size.width;
            const startHeight = panelState.size.height;

            const handleResize = (moveEvent: MouseEvent) => {
              const newWidth = Math.max(config.minSize.width, startWidth + (moveEvent.clientX - startX));
              const newHeight = Math.max(config.minSize.height, startHeight + (moveEvent.clientY - startY));
              resizePanel(panelId, { width: newWidth, height: newHeight });
            };

            const handleResizeEnd = () => {
              window.removeEventListener('mousemove', handleResize);
              window.removeEventListener('mouseup', handleResizeEnd);
            };

            window.addEventListener('mousemove', handleResize);
            window.addEventListener('mouseup', handleResizeEnd);
          }}
        />
      )}
    </div>
  );
}

/**
 * Minimized panel bar (shows minimized panels as icons)
 */
export function MinimizedPanelBar({ className = '' }: { className?: string }) {
  const { panels, restore } = useMinimizedPanels();

  if (panels.length === 0) return null;

  return (
    <div
      className={`smart-panel-minimized-bar ${className}`}
      style={{
        position: 'fixed',
        bottom: '16px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '8px',
        padding: '8px 16px',
        backgroundColor: 'var(--panel-bg, #fff)',
        borderRadius: '24px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
        zIndex: DEFAULT_Z_INDEX + 50,
      }}
    >
      {panels.map((panel) => (
        <button
          key={panel.id}
          onClick={() => restore(panel.id)}
          className="smart-panel-minimized-bar__item"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            padding: '8px 12px',
            border: 'none',
            borderRadius: '16px',
            backgroundColor: 'var(--panel-header-bg, #f5f5f5)',
            cursor: 'pointer',
            transition: `all ${TRANSITION_DURATION}ms ease-in-out`,
          }}
          aria-label={`Restore ${panel.title}`}
        >
          {panel.icon && <span>{panel.icon}</span>}
          <span>{panel.title}</span>
        </button>
      ))}
    </div>
  );
}

/**
 * Mobile bottom sheet for panels
 */
export function MobileBottomSheet({ className = '' }: { className?: string }) {
  const { activePanel, expandedHeight, isDragging, setHeight, close } = useBottomSheet();
  const { closePanel, minimizePanel, maximizePanel } = usePanelManager();
  const sheetRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef(0);
  const heightStartRef = useRef(0);

  if (!activePanel) return null;

  const handleTouchStart = (e: React.TouchEvent) => {
    dragStartRef.current = e.touches[0].clientY;
    heightStartRef.current = expandedHeight;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const deltaY = dragStartRef.current - e.touches[0].clientY;
    const deltaPercent = (deltaY / window.innerHeight) * 100;
    setHeight(heightStartRef.current + deltaPercent);
  };

  const handleTouchEnd = () => {
    // Snap to discrete positions
    if (expandedHeight < 15) {
      close();
    } else if (expandedHeight < 35) {
      setHeight(25);
    } else if (expandedHeight < 65) {
      setHeight(50);
    } else {
      setHeight(85);
    }
  };

  return (
    <div
      ref={sheetRef}
      className={`smart-panel-bottom-sheet ${className}`}
      style={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        height: `${expandedHeight}vh`,
        backgroundColor: 'var(--panel-bg, #fff)',
        borderTopLeftRadius: '16px',
        borderTopRightRadius: '16px',
        boxShadow: '0 -4px 20px rgba(0,0,0,0.1)',
        zIndex: DEFAULT_Z_INDEX + 100,
        transition: isDragging ? 'none' : `height ${TRANSITION_DURATION}ms ease-in-out`,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Drag Handle */}
      <div
        className="smart-panel-bottom-sheet__handle"
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '12px',
          cursor: 'grab',
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div style={{
          width: '40px',
          height: '4px',
          backgroundColor: 'var(--border-color, #e0e0e0)',
          borderRadius: '2px',
        }} />
      </div>

      {/* Header */}
      <div
        className="smart-panel-bottom-sheet__header"
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '0 16px 12px',
          borderBottom: '1px solid var(--border-color, #e0e0e0)',
        }}
      >
        <span style={{ flex: 1, fontWeight: 600, fontSize: '16px' }}>
          {activePanel.icon && <span style={{ marginRight: '8px' }}>{activePanel.icon}</span>}
          {activePanel.title}
        </span>
        <button
          onClick={close}
          style={{
            padding: '8px',
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            fontSize: '20px',
          }}
          aria-label="Close panel"
        >
          ×
        </button>
      </div>

      {/* Content */}
      <div
        className="smart-panel-bottom-sheet__content"
        style={{ flex: 1, overflow: 'auto', padding: '16px' }}
      >
        <activePanel.component
          panelId={activePanel.id}
          isMinimized={false}
          onClose={close}
          onMinimize={() => {
            minimizePanel(activePanel.id);
            close();
          }}
          onMaximize={() => maximizePanel(activePanel.id)}
        />
      </div>
    </div>
  );
}

// ============================================
// Main Smart Panel Manager Component
// ============================================

interface SmartPanelManagerProps {
  /** Container element or selector for the 3D view (for positioning calculation) */
  viewportRef?: React.RefObject<HTMLElement>;
  className?: string;
}

/**
 * Main component that renders all panel containers
 */
export function SmartPanelManager({ viewportRef, className = '' }: SmartPanelManagerProps) {
  const { state, configs } = usePanelManager();

  // Get floating panels
  const floatingPanels = state.docks.floating.panels
    .map(id => ({ id, config: configs.get(id) }))
    .filter((item): item is { id: string; config: PanelConfig } => item.config !== undefined);

  if (state.isMobile) {
    return (
      <>
        <MobileBottomSheet />
        <MinimizedPanelBar />
      </>
    );
  }

  return (
    <div className={`smart-panel-manager ${className}`} style={{ position: 'relative', width: '100%', height: '100%' }}>
      {/* Dock Containers */}
      <DockContainer position="left" />
      <DockContainer position="right" />
      <DockContainer position="bottom" />

      {/* Floating Panels */}
      {floatingPanels.map(({ id, config }) => (
        <FloatingPanel key={id} panelId={id} config={config} />
      ))}

      {/* Minimized Panel Bar */}
      <MinimizedPanelBar />
    </div>
  );
}

// ============================================
// Exports
// ============================================

export {
  PanelManagerContext,
  STORAGE_KEY,
  MOBILE_BREAKPOINT,
  TRANSITION_DURATION,
  DEFAULT_Z_INDEX,
};
