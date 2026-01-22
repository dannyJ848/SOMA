/**
 * Event Bus for 3D Anatomy Viewer Communication
 *
 * Enables cross-component communication for programmatic control
 * of the AnatomyViewer from SymptomExplorer, MedicationExplorer,
 * ConditionSimulator, and other components.
 */

// ============================================
// Event Types
// ============================================

export type Anatomy3DEventType =
  | 'NAVIGATE_TO_STRUCTURE'
  | 'NAVIGATE_TO_REGION'
  | 'SET_VIEW_PRESET'
  | 'ENABLE_LAYERS'
  | 'DISABLE_LAYERS'
  | 'HIGHLIGHT_STRUCTURES'
  | 'CLEAR_HIGHLIGHTS'
  | 'SET_CAMERA_POSITION'
  | 'RESET_VIEW'
  | 'SELECT_STRUCTURE'
  | 'DESELECT_STRUCTURE';

// ============================================
// Event Payloads
// ============================================

export type ViewPreset =
  | 'anterior'
  | 'posterior'
  | 'left'
  | 'right'
  | 'superior'
  | 'inferior';

export interface StructureHighlight {
  structureId: string;
  color: string;
  intensity?: 'strong' | 'moderate' | 'mild';
  pulseAnimation?: boolean;
  duration?: number; // ms, 0 = indefinite
}

export interface NavigationOptions {
  animate?: boolean;
  duration?: number; // ms
  zoom?: number;
  enableLayers?: string[];
  highlight?: boolean;
  highlightColor?: string;
}

export interface CameraPosition {
  x: number;
  y: number;
  z: number;
  targetX?: number;
  targetY?: number;
  targetZ?: number;
}

// Event payload map
export interface Anatomy3DEventPayloads {
  NAVIGATE_TO_STRUCTURE: {
    structureId: string;
    options?: NavigationOptions;
  };
  NAVIGATE_TO_REGION: {
    region: string;
    options?: NavigationOptions;
  };
  SET_VIEW_PRESET: {
    preset: ViewPreset;
    animate?: boolean;
  };
  ENABLE_LAYERS: {
    layers: string[];
  };
  DISABLE_LAYERS: {
    layers: string[];
  };
  HIGHLIGHT_STRUCTURES: {
    highlights: StructureHighlight[];
  };
  CLEAR_HIGHLIGHTS: {
    structureIds?: string[]; // If empty, clears all
  };
  SET_CAMERA_POSITION: {
    position: CameraPosition;
    animate?: boolean;
    duration?: number;
  };
  RESET_VIEW: {
    preserveLayers?: boolean;
  };
  SELECT_STRUCTURE: {
    structureId: string;
    openInfoPanel?: boolean;
  };
  DESELECT_STRUCTURE: Record<string, never>;
}

// ============================================
// Event Interface
// ============================================

export interface Anatomy3DEvent<T extends Anatomy3DEventType = Anatomy3DEventType> {
  type: T;
  payload: Anatomy3DEventPayloads[T];
  timestamp: number;
  source?: string; // Component that emitted the event
}

export type Anatomy3DEventHandler<T extends Anatomy3DEventType = Anatomy3DEventType> = (
  event: Anatomy3DEvent<T>
) => void;

// ============================================
// Event Bus Implementation
// ============================================

class Anatomy3DEventBusImpl {
  private listeners: Map<Anatomy3DEventType, Set<Anatomy3DEventHandler<any>>> = new Map();
  private globalListeners: Set<Anatomy3DEventHandler<any>> = new Set();
  private eventHistory: Anatomy3DEvent[] = [];
  private maxHistorySize = 100;
  private debugMode = false;

  constructor() {
    // Initialize listener sets for each event type
    const eventTypes: Anatomy3DEventType[] = [
      'NAVIGATE_TO_STRUCTURE',
      'NAVIGATE_TO_REGION',
      'SET_VIEW_PRESET',
      'ENABLE_LAYERS',
      'DISABLE_LAYERS',
      'HIGHLIGHT_STRUCTURES',
      'CLEAR_HIGHLIGHTS',
      'SET_CAMERA_POSITION',
      'RESET_VIEW',
      'SELECT_STRUCTURE',
      'DESELECT_STRUCTURE',
    ];

    eventTypes.forEach(type => {
      this.listeners.set(type, new Set());
    });
  }

  /**
   * Subscribe to a specific event type
   */
  on<T extends Anatomy3DEventType>(
    eventType: T,
    handler: Anatomy3DEventHandler<T>
  ): () => void {
    const handlers = this.listeners.get(eventType);
    if (handlers) {
      handlers.add(handler);
    }

    // Return unsubscribe function
    return () => {
      handlers?.delete(handler);
    };
  }

  /**
   * Subscribe to all events
   */
  onAll(handler: Anatomy3DEventHandler<any>): () => void {
    this.globalListeners.add(handler);
    return () => {
      this.globalListeners.delete(handler);
    };
  }

  /**
   * Emit an event
   */
  emit<T extends Anatomy3DEventType>(
    eventType: T,
    payload: Anatomy3DEventPayloads[T],
    source?: string
  ): void {
    const event: Anatomy3DEvent<T> = {
      type: eventType,
      payload,
      timestamp: Date.now(),
      source,
    };

    // Add to history
    this.eventHistory.push(event);
    if (this.eventHistory.length > this.maxHistorySize) {
      this.eventHistory.shift();
    }

    if (this.debugMode) {
      console.log('[Anatomy3DEventBus]', eventType, payload);
    }

    // Notify specific handlers
    const handlers = this.listeners.get(eventType);
    handlers?.forEach(handler => {
      try {
        handler(event);
      } catch (error) {
        console.error(`[Anatomy3DEventBus] Error in handler for ${eventType}:`, error);
      }
    });

    // Notify global handlers
    this.globalListeners.forEach(handler => {
      try {
        handler(event);
      } catch (error) {
        console.error(`[Anatomy3DEventBus] Error in global handler:`, error);
      }
    });
  }

  /**
   * Remove all listeners for a specific event type
   */
  off(eventType: Anatomy3DEventType): void {
    const handlers = this.listeners.get(eventType);
    handlers?.clear();
  }

  /**
   * Remove all listeners
   */
  clear(): void {
    this.listeners.forEach(handlers => handlers.clear());
    this.globalListeners.clear();
  }

  /**
   * Get event history
   */
  getHistory(): Anatomy3DEvent[] {
    return [...this.eventHistory];
  }

  /**
   * Get last event of a specific type
   */
  getLastEvent<T extends Anatomy3DEventType>(eventType: T): Anatomy3DEvent<T> | undefined {
    for (let i = this.eventHistory.length - 1; i >= 0; i--) {
      if (this.eventHistory[i].type === eventType) {
        return this.eventHistory[i] as Anatomy3DEvent<T>;
      }
    }
    return undefined;
  }

  /**
   * Enable debug mode
   */
  setDebugMode(enabled: boolean): void {
    this.debugMode = enabled;
  }

  /**
   * Check if there are any listeners for an event type
   */
  hasListeners(eventType: Anatomy3DEventType): boolean {
    const handlers = this.listeners.get(eventType);
    return (handlers?.size ?? 0) > 0 || this.globalListeners.size > 0;
  }
}

// ============================================
// Singleton Export
// ============================================

export const anatomy3DEventBus = new Anatomy3DEventBusImpl();

// ============================================
// Convenience Functions
// ============================================

/**
 * Navigate to a specific anatomical structure
 */
export function navigateToStructure(
  structureId: string,
  options?: NavigationOptions,
  source?: string
): void {
  anatomy3DEventBus.emit('NAVIGATE_TO_STRUCTURE', { structureId, options }, source);
}

/**
 * Navigate to a body region
 */
export function navigateToRegion(
  region: string,
  options?: NavigationOptions,
  source?: string
): void {
  anatomy3DEventBus.emit('NAVIGATE_TO_REGION', { region, options }, source);
}

/**
 * Set the view preset
 */
export function setViewPreset(
  preset: ViewPreset,
  animate = true,
  source?: string
): void {
  anatomy3DEventBus.emit('SET_VIEW_PRESET', { preset, animate }, source);
}

/**
 * Enable specific anatomical layers
 */
export function enableLayers(layers: string[], source?: string): void {
  anatomy3DEventBus.emit('ENABLE_LAYERS', { layers }, source);
}

/**
 * Disable specific anatomical layers
 */
export function disableLayers(layers: string[], source?: string): void {
  anatomy3DEventBus.emit('DISABLE_LAYERS', { layers }, source);
}

/**
 * Highlight structures with colors and optional animation
 */
export function highlightStructures(
  highlights: StructureHighlight[],
  source?: string
): void {
  anatomy3DEventBus.emit('HIGHLIGHT_STRUCTURES', { highlights }, source);
}

/**
 * Clear structure highlights
 */
export function clearHighlights(structureIds?: string[], source?: string): void {
  anatomy3DEventBus.emit('CLEAR_HIGHLIGHTS', { structureIds }, source);
}

/**
 * Reset the 3D view to default state
 */
export function resetView(preserveLayers = false, source?: string): void {
  anatomy3DEventBus.emit('RESET_VIEW', { preserveLayers }, source);
}

/**
 * Select a structure programmatically
 */
export function selectStructure(
  structureId: string,
  openInfoPanel = true,
  source?: string
): void {
  anatomy3DEventBus.emit('SELECT_STRUCTURE', { structureId, openInfoPanel }, source);
}

/**
 * Deselect current structure
 */
export function deselectStructure(source?: string): void {
  anatomy3DEventBus.emit('DESELECT_STRUCTURE', {}, source);
}

// ============================================
// Type Exports
// ============================================

export type { Anatomy3DEventBusImpl };
