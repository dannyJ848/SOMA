/**
 * React Hook for 3D Anatomy Navigation
 *
 * Provides programmatic control of the AnatomyViewer from any component.
 * Used by SymptomExplorer, MedicationExplorer, ConditionSimulator, etc.
 */

import { useCallback, useEffect, useState, useRef } from 'react';
import {
  anatomy3DEventBus,
  navigateToStructure,
  navigateToRegion,
  setViewPreset,
  enableLayers,
  disableLayers,
  highlightStructures,
  clearHighlights,
  resetView,
  selectStructure,
  deselectStructure,
  type ViewPreset,
  type StructureHighlight,
  type NavigationOptions,
  type CameraPosition,
  type Anatomy3DEvent,
  type Anatomy3DEventType,
} from '../utils/anatomy3DEventBus';

// ============================================
// Types
// ============================================

export interface Anatomy3DNavigationAPI {
  // Navigation
  navigateToStructure: (structureId: string, options?: NavigationOptions) => Promise<void>;
  navigateToRegion: (region: string, options?: NavigationOptions) => Promise<void>;

  // View Control
  setViewPreset: (preset: ViewPreset, animate?: boolean) => void;
  resetView: (preserveLayers?: boolean) => void;
  setCameraPosition: (position: CameraPosition, animate?: boolean, duration?: number) => void;

  // Layers
  enableLayers: (layers: string[]) => void;
  disableLayers: (layers: string[]) => void;
  setLayers: (layers: string[]) => void; // Enables only specified layers

  // Highlighting
  highlightStructures: (highlights: StructureHighlight[]) => void;
  highlightSingleStructure: (structureId: string, color: string, pulse?: boolean) => void;
  clearHighlights: (structureIds?: string[]) => void;

  // Selection
  selectStructure: (structureId: string, openInfoPanel?: boolean) => void;
  deselectStructure: () => void;

  // Compound Actions
  focusOnSymptomSources: (sources: SymptomSource[]) => void;
  focusOnMedicationTargets: (targets: MedicationTarget[]) => void;
  showConditionAffectedAreas: (areas: ConditionArea[]) => void;
}

export interface SymptomSource {
  structureId: string;
  structureName: string;
  likelihood: 'common' | 'less-common' | 'rare' | 'do-not-miss';
  highlightColor?: string;
}

export interface MedicationTarget {
  structureId: string;
  structureName: string;
  effectType: 'therapeutic' | 'adverse' | 'neutral';
  intensity: 'strong' | 'moderate' | 'mild';
}

export interface ConditionArea {
  structureId: string;
  structureName: string;
  involvement: 'primary' | 'secondary' | 'complication';
  phase?: string;
}

export interface UseAnatomy3DNavigationOptions {
  componentId?: string; // Identifier for event source tracking
  autoResetOnUnmount?: boolean;
  enableDebug?: boolean;
}

// ============================================
// Color Mappings
// ============================================

const LIKELIHOOD_COLORS = {
  common: '#22c55e', // green
  'less-common': '#eab308', // yellow
  rare: '#f97316', // orange
  'do-not-miss': '#ef4444', // red
};

const EFFECT_TYPE_COLORS = {
  therapeutic: '#22c55e', // green
  adverse: '#ef4444', // red
  neutral: '#6b7280', // gray
};

const INVOLVEMENT_COLORS = {
  primary: '#ef4444', // red
  secondary: '#f97316', // orange
  complication: '#a855f7', // purple
};

// ============================================
// Layer Presets
// ============================================

export const LAYER_PRESETS = {
  cardiovascular: ['cardiovascular', 'arteries', 'veins', 'heart'],
  respiratory: ['respiratory', 'lungs', 'airways', 'diaphragm'],
  digestive: ['digestive', 'stomach', 'intestines', 'liver', 'gallbladder', 'pancreas'],
  musculoskeletal: ['skeletal', 'muscular', 'joints', 'spine'],
  nervous: ['nervous', 'brain', 'spinal-cord', 'nerves'],
  urinary: ['urinary', 'kidneys', 'bladder', 'ureters'],
  endocrine: ['endocrine', 'thyroid', 'adrenal', 'pancreas'],
  lymphatic: ['lymphatic', 'spleen', 'lymph-nodes'],
  reproductive: ['reproductive'],
  integumentary: ['skin', 'integumentary'],
};

// ============================================
// Hook Implementation
// ============================================

export function useAnatomy3DNavigation(
  options: UseAnatomy3DNavigationOptions = {}
): Anatomy3DNavigationAPI {
  const {
    componentId = 'unknown',
    autoResetOnUnmount = false,
    enableDebug = false,
  } = options;

  const mountedRef = useRef(true);
  const [activeLayers, setActiveLayers] = useState<string[]>([]);
  // Track active highlights for cleanup
  const [, setActiveHighlights] = useState<string[]>([]);

  // Enable debug mode if requested
  useEffect(() => {
    if (enableDebug) {
      anatomy3DEventBus.setDebugMode(true);
    }
    return () => {
      if (enableDebug) {
        anatomy3DEventBus.setDebugMode(false);
      }
    };
  }, [enableDebug]);

  // Cleanup on unmount
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      if (autoResetOnUnmount) {
        clearHighlights(undefined, componentId);
        resetView(false, componentId);
      }
    };
  }, [autoResetOnUnmount, componentId]);

  // ============================================
  // Navigation Methods
  // ============================================

  const apiNavigateToStructure = useCallback(
    async (structureId: string, navOptions?: NavigationOptions): Promise<void> => {
      return new Promise((resolve) => {
        navigateToStructure(structureId, navOptions, componentId);
        // Give time for animation
        setTimeout(resolve, navOptions?.duration ?? 500);
      });
    },
    [componentId]
  );

  const apiNavigateToRegion = useCallback(
    async (region: string, navOptions?: NavigationOptions): Promise<void> => {
      return new Promise((resolve) => {
        navigateToRegion(region, navOptions, componentId);
        setTimeout(resolve, navOptions?.duration ?? 500);
      });
    },
    [componentId]
  );

  // ============================================
  // View Control Methods
  // ============================================

  const apiSetViewPreset = useCallback(
    (preset: ViewPreset, animate = true): void => {
      setViewPreset(preset, animate, componentId);
    },
    [componentId]
  );

  const apiResetView = useCallback(
    (preserveLayers = false): void => {
      resetView(preserveLayers, componentId);
      if (!preserveLayers) {
        setActiveLayers([]);
      }
      setActiveHighlights([]);
    },
    [componentId]
  );

  const apiSetCameraPosition = useCallback(
    (position: CameraPosition, animate = true, duration = 500): void => {
      anatomy3DEventBus.emit(
        'SET_CAMERA_POSITION',
        { position, animate, duration },
        componentId
      );
    },
    [componentId]
  );

  // ============================================
  // Layer Methods
  // ============================================

  const apiEnableLayers = useCallback(
    (layers: string[]): void => {
      enableLayers(layers, componentId);
      setActiveLayers((prev) => [...new Set([...prev, ...layers])]);
    },
    [componentId]
  );

  const apiDisableLayers = useCallback(
    (layers: string[]): void => {
      disableLayers(layers, componentId);
      setActiveLayers((prev) => prev.filter((l) => !layers.includes(l)));
    },
    [componentId]
  );

  const apiSetLayers = useCallback(
    (layers: string[]): void => {
      // Disable all current layers first
      if (activeLayers.length > 0) {
        disableLayers(activeLayers, componentId);
      }
      // Enable specified layers
      enableLayers(layers, componentId);
      setActiveLayers(layers);
    },
    [activeLayers, componentId]
  );

  // ============================================
  // Highlighting Methods
  // ============================================

  const apiHighlightStructures = useCallback(
    (highlights: StructureHighlight[]): void => {
      highlightStructures(highlights, componentId);
      setActiveHighlights(highlights.map((h) => h.structureId));
    },
    [componentId]
  );

  const apiHighlightSingleStructure = useCallback(
    (structureId: string, color: string, pulse = false): void => {
      highlightStructures(
        [{ structureId, color, pulseAnimation: pulse }],
        componentId
      );
      setActiveHighlights([structureId]);
    },
    [componentId]
  );

  const apiClearHighlights = useCallback(
    (structureIds?: string[]): void => {
      clearHighlights(structureIds, componentId);
      if (structureIds) {
        setActiveHighlights((prev) =>
          prev.filter((id) => !structureIds.includes(id))
        );
      } else {
        setActiveHighlights([]);
      }
    },
    [componentId]
  );

  // ============================================
  // Selection Methods
  // ============================================

  const apiSelectStructure = useCallback(
    (structureId: string, openInfoPanel = true): void => {
      selectStructure(structureId, openInfoPanel, componentId);
    },
    [componentId]
  );

  const apiDeselectStructure = useCallback((): void => {
    deselectStructure(componentId);
  }, [componentId]);

  // ============================================
  // Compound Actions
  // ============================================

  const apiFocusOnSymptomSources = useCallback(
    (sources: SymptomSource[]): void => {
      if (sources.length === 0) return;

      // Create highlights based on likelihood
      const highlights: StructureHighlight[] = sources.map((source) => ({
        structureId: source.structureId,
        color: source.highlightColor ?? LIKELIHOOD_COLORS[source.likelihood],
        intensity:
          source.likelihood === 'do-not-miss'
            ? 'strong'
            : source.likelihood === 'common'
            ? 'strong'
            : source.likelihood === 'less-common'
            ? 'moderate'
            : 'mild',
        pulseAnimation: source.likelihood === 'do-not-miss',
      }));

      // Navigate to first source region
      const firstSource = sources[0];
      navigateToRegion(
        firstSource.structureId,
        {
          animate: true,
          duration: 800,
          highlight: true,
        },
        componentId
      );

      // Apply highlights
      highlightStructures(highlights, componentId);
      setActiveHighlights(sources.map((s) => s.structureId));
    },
    [componentId]
  );

  const apiFocusOnMedicationTargets = useCallback(
    (targets: MedicationTarget[]): void => {
      if (targets.length === 0) return;

      // Get therapeutic targets for navigation priority (adverse targets are still highlighted)
      const therapeuticTargets = targets.filter((t) => t.effectType === 'therapeutic');

      // Create highlights
      const highlights: StructureHighlight[] = targets.map((target) => ({
        structureId: target.structureId,
        color: EFFECT_TYPE_COLORS[target.effectType],
        intensity: target.intensity,
        pulseAnimation: target.effectType === 'adverse' && target.intensity === 'strong',
      }));

      // Navigate to primary therapeutic target if exists
      const primaryTarget = therapeuticTargets[0] ?? targets[0];
      navigateToRegion(
        primaryTarget.structureId,
        {
          animate: true,
          duration: 800,
        },
        componentId
      );

      highlightStructures(highlights, componentId);
      setActiveHighlights(targets.map((t) => t.structureId));
    },
    [componentId]
  );

  const apiShowConditionAffectedAreas = useCallback(
    (areas: ConditionArea[]): void => {
      if (areas.length === 0) return;

      // Create highlights based on involvement
      const highlights: StructureHighlight[] = areas.map((area) => ({
        structureId: area.structureId,
        color: INVOLVEMENT_COLORS[area.involvement],
        intensity: area.involvement === 'primary' ? 'strong' : 'moderate',
        pulseAnimation: area.involvement === 'primary',
      }));

      // Navigate to primary affected area
      const primaryArea = areas.find((a) => a.involvement === 'primary') ?? areas[0];
      navigateToRegion(
        primaryArea.structureId,
        {
          animate: true,
          duration: 800,
        },
        componentId
      );

      highlightStructures(highlights, componentId);
      setActiveHighlights(areas.map((a) => a.structureId));
    },
    [componentId]
  );

  // ============================================
  // Return API
  // ============================================

  return {
    navigateToStructure: apiNavigateToStructure,
    navigateToRegion: apiNavigateToRegion,
    setViewPreset: apiSetViewPreset,
    resetView: apiResetView,
    setCameraPosition: apiSetCameraPosition,
    enableLayers: apiEnableLayers,
    disableLayers: apiDisableLayers,
    setLayers: apiSetLayers,
    highlightStructures: apiHighlightStructures,
    highlightSingleStructure: apiHighlightSingleStructure,
    clearHighlights: apiClearHighlights,
    selectStructure: apiSelectStructure,
    deselectStructure: apiDeselectStructure,
    focusOnSymptomSources: apiFocusOnSymptomSources,
    focusOnMedicationTargets: apiFocusOnMedicationTargets,
    showConditionAffectedAreas: apiShowConditionAffectedAreas,
  };
}

// ============================================
// Event Subscription Hook
// ============================================

/**
 * Hook to subscribe to anatomy 3D events
 */
export function useAnatomy3DEvents(
  eventType: Anatomy3DEventType | 'all',
  handler: (event: Anatomy3DEvent) => void
): void {
  useEffect(() => {
    const unsubscribe =
      eventType === 'all'
        ? anatomy3DEventBus.onAll(handler)
        : anatomy3DEventBus.on(eventType, handler);

    return unsubscribe;
  }, [eventType, handler]);
}

// ============================================
// Re-exports
// ============================================

export type {
  ViewPreset,
  StructureHighlight,
  NavigationOptions,
  CameraPosition,
};
