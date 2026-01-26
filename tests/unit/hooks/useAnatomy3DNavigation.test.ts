/**
 * useAnatomy3DNavigation Hook Tests
 *
 * Tests for the 3D anatomy navigation hook.
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import {
  useAnatomy3DNavigation,
  useAnatomy3DEvents,
  LAYER_PRESETS,
  type SymptomSource,
  type MedicationTarget,
  type ConditionArea,
} from '../../../src/hooks/useAnatomy3DNavigation';
import { anatomy3DEventBus, type Anatomy3DEvent } from '../../../src/utils/anatomy3DEventBus';

describe('useAnatomy3DNavigation', () => {
  beforeEach(() => {
    anatomy3DEventBus.clear();
    vi.useFakeTimers();
  });

  afterEach(() => {
    anatomy3DEventBus.clear();
    vi.useRealTimers();
  });

  describe('initialization', () => {
    it('returns navigation API object', () => {
      const { result } = renderHook(() => useAnatomy3DNavigation());

      expect(result.current).toHaveProperty('navigateToStructure');
      expect(result.current).toHaveProperty('navigateToRegion');
      expect(result.current).toHaveProperty('setViewPreset');
      expect(result.current).toHaveProperty('resetView');
      expect(result.current).toHaveProperty('enableLayers');
      expect(result.current).toHaveProperty('disableLayers');
      expect(result.current).toHaveProperty('highlightStructures');
      expect(result.current).toHaveProperty('clearHighlights');
      expect(result.current).toHaveProperty('selectStructure');
      expect(result.current).toHaveProperty('deselectStructure');
    });

    it('accepts componentId option', () => {
      const handler = vi.fn();
      anatomy3DEventBus.on('RESET_VIEW', handler);

      const { result } = renderHook(() =>
        useAnatomy3DNavigation({ componentId: 'test-component' })
      );

      act(() => {
        result.current.resetView();
      });

      expect(handler).toHaveBeenCalledWith(
        expect.objectContaining({
          source: 'test-component',
        })
      );
    });
  });

  describe('navigateToStructure', () => {
    it('emits navigation event and returns promise', async () => {
      const handler = vi.fn();
      anatomy3DEventBus.on('NAVIGATE_TO_STRUCTURE', handler);

      const { result } = renderHook(() => useAnatomy3DNavigation());

      let resolved = false;
      act(() => {
        result.current.navigateToStructure('heart', { animate: true }).then(() => {
          resolved = true;
        });
      });

      expect(handler).toHaveBeenCalledWith(
        expect.objectContaining({
          payload: {
            structureId: 'heart',
            options: { animate: true },
          },
        })
      );

      // Fast-forward timers to resolve promise
      act(() => {
        vi.advanceTimersByTime(500);
      });

      expect(resolved).toBe(true);
    });

    it('respects custom duration option', async () => {
      const { result } = renderHook(() => useAnatomy3DNavigation());

      let resolved = false;
      act(() => {
        result.current.navigateToStructure('heart', { duration: 1000 }).then(() => {
          resolved = true;
        });
      });

      act(() => {
        vi.advanceTimersByTime(500);
      });
      expect(resolved).toBe(false);

      act(() => {
        vi.advanceTimersByTime(500);
      });
      expect(resolved).toBe(true);
    });
  });

  describe('navigateToRegion', () => {
    it('emits region navigation event', async () => {
      const handler = vi.fn();
      anatomy3DEventBus.on('NAVIGATE_TO_REGION', handler);

      const { result } = renderHook(() => useAnatomy3DNavigation());

      act(() => {
        result.current.navigateToRegion('thorax');
        vi.advanceTimersByTime(500);
      });

      expect(handler).toHaveBeenCalledWith(
        expect.objectContaining({
          payload: {
            region: 'thorax',
            options: undefined,
          },
        })
      );
    });
  });

  describe('setViewPreset', () => {
    it('emits view preset event', () => {
      const handler = vi.fn();
      anatomy3DEventBus.on('SET_VIEW_PRESET', handler);

      const { result } = renderHook(() => useAnatomy3DNavigation());

      act(() => {
        result.current.setViewPreset('anterior', true);
      });

      expect(handler).toHaveBeenCalledWith(
        expect.objectContaining({
          payload: { preset: 'anterior', animate: true },
        })
      );
    });
  });

  describe('resetView', () => {
    it('emits reset event and clears state', () => {
      const handler = vi.fn();
      anatomy3DEventBus.on('RESET_VIEW', handler);

      const { result } = renderHook(() => useAnatomy3DNavigation());

      act(() => {
        result.current.resetView(false);
      });

      expect(handler).toHaveBeenCalledWith(
        expect.objectContaining({
          payload: { preserveLayers: false },
        })
      );
    });

    it('preserves layers when specified', () => {
      const handler = vi.fn();
      anatomy3DEventBus.on('RESET_VIEW', handler);

      const { result } = renderHook(() => useAnatomy3DNavigation());

      act(() => {
        result.current.resetView(true);
      });

      expect(handler).toHaveBeenCalledWith(
        expect.objectContaining({
          payload: { preserveLayers: true },
        })
      );
    });
  });

  describe('layer management', () => {
    it('enables layers', () => {
      const handler = vi.fn();
      anatomy3DEventBus.on('ENABLE_LAYERS', handler);

      const { result } = renderHook(() => useAnatomy3DNavigation());

      act(() => {
        result.current.enableLayers(['cardiovascular', 'respiratory']);
      });

      expect(handler).toHaveBeenCalledWith(
        expect.objectContaining({
          payload: { layers: ['cardiovascular', 'respiratory'] },
        })
      );
    });

    it('disables layers', () => {
      const handler = vi.fn();
      anatomy3DEventBus.on('DISABLE_LAYERS', handler);

      const { result } = renderHook(() => useAnatomy3DNavigation());

      act(() => {
        result.current.disableLayers(['muscular']);
      });

      expect(handler).toHaveBeenCalledWith(
        expect.objectContaining({
          payload: { layers: ['muscular'] },
        })
      );
    });

    it('sets layers (enables specified, disables others)', () => {
      const enableHandler = vi.fn();
      anatomy3DEventBus.on('ENABLE_LAYERS', enableHandler);

      const { result } = renderHook(() => useAnatomy3DNavigation());

      act(() => {
        result.current.setLayers(['cardiovascular']);
      });

      expect(enableHandler).toHaveBeenCalledWith(
        expect.objectContaining({
          payload: { layers: ['cardiovascular'] },
        })
      );
    });
  });

  describe('highlighting', () => {
    it('highlights structures', () => {
      const handler = vi.fn();
      anatomy3DEventBus.on('HIGHLIGHT_STRUCTURES', handler);

      const { result } = renderHook(() => useAnatomy3DNavigation());

      const highlights = [
        { structureId: 'heart', color: '#ff0000' },
        { structureId: 'lungs', color: '#00ff00' },
      ];

      act(() => {
        result.current.highlightStructures(highlights);
      });

      expect(handler).toHaveBeenCalledWith(
        expect.objectContaining({
          payload: { highlights },
        })
      );
    });

    it('highlights single structure', () => {
      const handler = vi.fn();
      anatomy3DEventBus.on('HIGHLIGHT_STRUCTURES', handler);

      const { result } = renderHook(() => useAnatomy3DNavigation());

      act(() => {
        result.current.highlightSingleStructure('heart', '#ff0000', true);
      });

      expect(handler).toHaveBeenCalledWith(
        expect.objectContaining({
          payload: {
            highlights: [
              { structureId: 'heart', color: '#ff0000', pulseAnimation: true },
            ],
          },
        })
      );
    });

    it('clears all highlights', () => {
      const handler = vi.fn();
      anatomy3DEventBus.on('CLEAR_HIGHLIGHTS', handler);

      const { result } = renderHook(() => useAnatomy3DNavigation());

      act(() => {
        result.current.clearHighlights();
      });

      expect(handler).toHaveBeenCalledWith(
        expect.objectContaining({
          payload: { structureIds: undefined },
        })
      );
    });

    it('clears specific highlights', () => {
      const handler = vi.fn();
      anatomy3DEventBus.on('CLEAR_HIGHLIGHTS', handler);

      const { result } = renderHook(() => useAnatomy3DNavigation());

      act(() => {
        result.current.clearHighlights(['heart']);
      });

      expect(handler).toHaveBeenCalledWith(
        expect.objectContaining({
          payload: { structureIds: ['heart'] },
        })
      );
    });
  });

  describe('selection', () => {
    it('selects structure', () => {
      const handler = vi.fn();
      anatomy3DEventBus.on('SELECT_STRUCTURE', handler);

      const { result } = renderHook(() => useAnatomy3DNavigation());

      act(() => {
        result.current.selectStructure('heart', true);
      });

      expect(handler).toHaveBeenCalledWith(
        expect.objectContaining({
          payload: { structureId: 'heart', openInfoPanel: true },
        })
      );
    });

    it('deselects structure', () => {
      const handler = vi.fn();
      anatomy3DEventBus.on('DESELECT_STRUCTURE', handler);

      const { result } = renderHook(() => useAnatomy3DNavigation());

      act(() => {
        result.current.deselectStructure();
      });

      expect(handler).toHaveBeenCalled();
    });
  });

  describe('compound actions', () => {
    describe('focusOnSymptomSources', () => {
      it('navigates and highlights symptom sources', () => {
        const navHandler = vi.fn();
        const highlightHandler = vi.fn();

        anatomy3DEventBus.on('NAVIGATE_TO_REGION', navHandler);
        anatomy3DEventBus.on('HIGHLIGHT_STRUCTURES', highlightHandler);

        const { result } = renderHook(() => useAnatomy3DNavigation());

        const sources: SymptomSource[] = [
          { structureId: 'heart', structureName: 'Heart', likelihood: 'common' },
          { structureId: 'lungs', structureName: 'Lungs', likelihood: 'do-not-miss' },
        ];

        act(() => {
          result.current.focusOnSymptomSources(sources);
        });

        expect(navHandler).toHaveBeenCalled();
        expect(highlightHandler).toHaveBeenCalled();
      });

      it('does nothing with empty sources', () => {
        const handler = vi.fn();
        anatomy3DEventBus.onAll(handler);

        const { result } = renderHook(() => useAnatomy3DNavigation());

        act(() => {
          result.current.focusOnSymptomSources([]);
        });

        expect(handler).not.toHaveBeenCalled();
      });

      it('applies pulse animation for do-not-miss symptoms', () => {
        const highlightHandler = vi.fn();
        anatomy3DEventBus.on('HIGHLIGHT_STRUCTURES', highlightHandler);

        const { result } = renderHook(() => useAnatomy3DNavigation());

        const sources: SymptomSource[] = [
          { structureId: 'heart', structureName: 'Heart', likelihood: 'do-not-miss' },
        ];

        act(() => {
          result.current.focusOnSymptomSources(sources);
        });

        const highlights = highlightHandler.mock.calls[0][0].payload.highlights;
        expect(highlights[0].pulseAnimation).toBe(true);
      });
    });

    describe('focusOnMedicationTargets', () => {
      it('navigates to therapeutic targets', () => {
        const navHandler = vi.fn();
        const highlightHandler = vi.fn();

        anatomy3DEventBus.on('NAVIGATE_TO_REGION', navHandler);
        anatomy3DEventBus.on('HIGHLIGHT_STRUCTURES', highlightHandler);

        const { result } = renderHook(() => useAnatomy3DNavigation());

        const targets: MedicationTarget[] = [
          { structureId: 'heart', structureName: 'Heart', effectType: 'therapeutic', intensity: 'strong' },
          { structureId: 'kidneys', structureName: 'Kidneys', effectType: 'adverse', intensity: 'mild' },
        ];

        act(() => {
          result.current.focusOnMedicationTargets(targets);
        });

        expect(navHandler).toHaveBeenCalled();
        expect(highlightHandler).toHaveBeenCalled();
      });

      it('uses appropriate colors for effect types', () => {
        const highlightHandler = vi.fn();
        anatomy3DEventBus.on('HIGHLIGHT_STRUCTURES', highlightHandler);

        const { result } = renderHook(() => useAnatomy3DNavigation());

        const targets: MedicationTarget[] = [
          { structureId: 'heart', structureName: 'Heart', effectType: 'therapeutic', intensity: 'strong' },
          { structureId: 'liver', structureName: 'Liver', effectType: 'adverse', intensity: 'strong' },
        ];

        act(() => {
          result.current.focusOnMedicationTargets(targets);
        });

        const highlights = highlightHandler.mock.calls[0][0].payload.highlights;
        expect(highlights[0].color).toBe('#22c55e'); // therapeutic - green
        expect(highlights[1].color).toBe('#ef4444'); // adverse - red
      });
    });

    describe('showConditionAffectedAreas', () => {
      it('highlights affected areas with involvement-based colors', () => {
        const highlightHandler = vi.fn();
        anatomy3DEventBus.on('HIGHLIGHT_STRUCTURES', highlightHandler);

        const { result } = renderHook(() => useAnatomy3DNavigation());

        const areas: ConditionArea[] = [
          { structureId: 'heart', structureName: 'Heart', involvement: 'primary' },
          { structureId: 'kidneys', structureName: 'Kidneys', involvement: 'secondary' },
          { structureId: 'retina', structureName: 'Retina', involvement: 'complication' },
        ];

        act(() => {
          result.current.showConditionAffectedAreas(areas);
        });

        const highlights = highlightHandler.mock.calls[0][0].payload.highlights;
        expect(highlights[0].color).toBe('#ef4444'); // primary - red
        expect(highlights[1].color).toBe('#f97316'); // secondary - orange
        expect(highlights[2].color).toBe('#a855f7'); // complication - purple
      });

      it('navigates to primary affected area', () => {
        const navHandler = vi.fn();
        anatomy3DEventBus.on('NAVIGATE_TO_REGION', navHandler);

        const { result } = renderHook(() => useAnatomy3DNavigation());

        const areas: ConditionArea[] = [
          { structureId: 'kidneys', structureName: 'Kidneys', involvement: 'secondary' },
          { structureId: 'heart', structureName: 'Heart', involvement: 'primary' },
        ];

        act(() => {
          result.current.showConditionAffectedAreas(areas);
        });

        expect(navHandler).toHaveBeenCalledWith(
          expect.objectContaining({
            payload: expect.objectContaining({
              region: 'heart', // Should navigate to primary, not first in array
            }),
          })
        );
      });
    });
  });

  describe('cleanup on unmount', () => {
    it('resets view when autoResetOnUnmount is true', () => {
      const resetHandler = vi.fn();
      const clearHandler = vi.fn();

      anatomy3DEventBus.on('RESET_VIEW', resetHandler);
      anatomy3DEventBus.on('CLEAR_HIGHLIGHTS', clearHandler);

      const { unmount } = renderHook(() =>
        useAnatomy3DNavigation({ autoResetOnUnmount: true, componentId: 'test' })
      );

      unmount();

      expect(clearHandler).toHaveBeenCalled();
      expect(resetHandler).toHaveBeenCalled();
    });

    it('does not reset when autoResetOnUnmount is false', () => {
      const resetHandler = vi.fn();

      anatomy3DEventBus.on('RESET_VIEW', resetHandler);

      const { unmount } = renderHook(() =>
        useAnatomy3DNavigation({ autoResetOnUnmount: false })
      );

      unmount();

      expect(resetHandler).not.toHaveBeenCalled();
    });
  });
});

describe('useAnatomy3DEvents', () => {
  beforeEach(() => {
    anatomy3DEventBus.clear();
  });

  afterEach(() => {
    anatomy3DEventBus.clear();
  });

  it('subscribes to specific event types', () => {
    const handler = vi.fn();

    renderHook(() => useAnatomy3DEvents('NAVIGATE_TO_STRUCTURE', handler));

    anatomy3DEventBus.emit('NAVIGATE_TO_STRUCTURE', { structureId: 'heart' });

    expect(handler).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'NAVIGATE_TO_STRUCTURE',
      })
    );
  });

  it('subscribes to all events with "all" type', () => {
    const handler = vi.fn();

    renderHook(() => useAnatomy3DEvents('all', handler));

    anatomy3DEventBus.emit('NAVIGATE_TO_STRUCTURE', { structureId: 'heart' });
    anatomy3DEventBus.emit('SET_VIEW_PRESET', { preset: 'anterior' });

    expect(handler).toHaveBeenCalledTimes(2);
  });

  it('unsubscribes on unmount', () => {
    const handler = vi.fn();

    const { unmount } = renderHook(() =>
      useAnatomy3DEvents('NAVIGATE_TO_STRUCTURE', handler)
    );

    anatomy3DEventBus.emit('NAVIGATE_TO_STRUCTURE', { structureId: 'heart' });
    expect(handler).toHaveBeenCalledTimes(1);

    unmount();

    anatomy3DEventBus.emit('NAVIGATE_TO_STRUCTURE', { structureId: 'lungs' });
    expect(handler).toHaveBeenCalledTimes(1);
  });
});

describe('LAYER_PRESETS', () => {
  it('contains cardiovascular preset', () => {
    expect(LAYER_PRESETS.cardiovascular).toContain('cardiovascular');
    expect(LAYER_PRESETS.cardiovascular).toContain('heart');
  });

  it('contains respiratory preset', () => {
    expect(LAYER_PRESETS.respiratory).toContain('respiratory');
    expect(LAYER_PRESETS.respiratory).toContain('lungs');
  });

  it('contains digestive preset', () => {
    expect(LAYER_PRESETS.digestive).toContain('digestive');
    expect(LAYER_PRESETS.digestive).toContain('stomach');
  });

  it('contains nervous preset', () => {
    expect(LAYER_PRESETS.nervous).toContain('nervous');
    expect(LAYER_PRESETS.nervous).toContain('brain');
  });

  it('contains musculoskeletal preset', () => {
    expect(LAYER_PRESETS.musculoskeletal).toContain('skeletal');
    expect(LAYER_PRESETS.musculoskeletal).toContain('muscular');
  });
});
