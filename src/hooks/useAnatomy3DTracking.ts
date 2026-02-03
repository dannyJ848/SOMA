/**
 * useAnatomy3DTracking Hook
 *
 * Bridges anatomy3DEventBus events to the intent prediction system.
 * This hook subscribes to all anatomy 3D events and tracks them
 * as actions for intent prediction.
 */

import { useEffect } from 'react';
import {
  anatomy3DEventBus,
  type StructureHighlight,
} from '../utils/anatomy3DEventBus';
import { useActionTracker } from './useActionTracker';
import type { Anatomy3DAction } from '../../core/intent-prediction/types';

/**
 * Hook that bridges anatomy3DEventBus events to intent tracking.
 * Should be used in a component that wraps or is close to AnatomyViewer.
 */
export function useAnatomy3DTracking() {
  const { track } = useActionTracker<Anatomy3DAction>('anatomy-3d', 'AnatomyViewer');

  useEffect(() => {
    // Subscribe to each event type individually for proper typing
    const unsubscribers: Array<() => void> = [];

    unsubscribers.push(
      anatomy3DEventBus.on('NAVIGATE_TO_STRUCTURE', (event) => {
        track('navigate-structure', {
          structureId: event.payload.structureId,
          metadata: event.payload.options ? { ...event.payload.options } : undefined,
        });
      })
    );

    unsubscribers.push(
      anatomy3DEventBus.on('NAVIGATE_TO_REGION', (event) => {
        track('navigate-region', {
          metadata: { region: event.payload.region, options: event.payload.options },
        });
      })
    );

    unsubscribers.push(
      anatomy3DEventBus.on('SET_VIEW_PRESET', (event) => {
        track('set-view-preset', {
          viewPreset: event.payload.preset,
        });
      })
    );

    unsubscribers.push(
      anatomy3DEventBus.on('ENABLE_LAYERS', (event) => {
        track('enable-layer', {
          layerIds: event.payload.layers,
        });
      })
    );

    unsubscribers.push(
      anatomy3DEventBus.on('DISABLE_LAYERS', (event) => {
        track('disable-layer', {
          layerIds: event.payload.layers,
        });
      })
    );

    unsubscribers.push(
      anatomy3DEventBus.on('HIGHLIGHT_STRUCTURES', (event) => {
        track('highlight', {
          metadata: {
            highlights: event.payload.highlights.map((h: StructureHighlight) => ({
              structureId: h.structureId,
              color: h.color,
            })),
          },
        });
      })
    );

    unsubscribers.push(
      anatomy3DEventBus.on('CLEAR_HIGHLIGHTS', (event) => {
        track('clear-highlight', {
          metadata: { structureIds: event.payload.structureIds },
        });
      })
    );

    unsubscribers.push(
      anatomy3DEventBus.on('SET_CAMERA_POSITION', (event) => {
        track('zoom', {
          metadata: { position: event.payload.position },
        });
      })
    );

    unsubscribers.push(
      anatomy3DEventBus.on('RESET_VIEW', (event) => {
        track('reset-view', {
          metadata: { preserveLayers: event.payload.preserveLayers },
        });
      })
    );

    unsubscribers.push(
      anatomy3DEventBus.on('SELECT_STRUCTURE', (event) => {
        track('select-structure', {
          structureId: event.payload.structureId,
          metadata: { openInfoPanel: event.payload.openInfoPanel },
        });
      })
    );

    unsubscribers.push(
      anatomy3DEventBus.on('DESELECT_STRUCTURE', () => {
        track('deselect-structure', {});
      })
    );

    return () => {
      unsubscribers.forEach((unsub) => unsub());
    };
  }, [track]);
}

export default useAnatomy3DTracking;
