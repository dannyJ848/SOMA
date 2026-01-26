/**
 * Anatomy 3D Event Bus Tests
 *
 * Tests for the anatomy 3D event bus system.
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
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
  type Anatomy3DEvent,
  type ViewPreset,
  type StructureHighlight,
} from '../../../src/utils/anatomy3DEventBus';

describe('anatomy3DEventBus', () => {
  beforeEach(() => {
    // Clear all listeners before each test
    anatomy3DEventBus.clear();
  });

  afterEach(() => {
    anatomy3DEventBus.clear();
  });

  describe('on() and emit()', () => {
    it('subscribes to events and receives them', () => {
      const handler = vi.fn();
      anatomy3DEventBus.on('NAVIGATE_TO_STRUCTURE', handler);

      anatomy3DEventBus.emit('NAVIGATE_TO_STRUCTURE', { structureId: 'heart' }, 'test');

      expect(handler).toHaveBeenCalledTimes(1);
      expect(handler).toHaveBeenCalledWith(
        expect.objectContaining({
          type: 'NAVIGATE_TO_STRUCTURE',
          payload: { structureId: 'heart' },
          source: 'test',
        })
      );
    });

    it('includes timestamp in emitted events', () => {
      const handler = vi.fn();
      const beforeTime = Date.now();

      anatomy3DEventBus.on('RESET_VIEW', handler);
      anatomy3DEventBus.emit('RESET_VIEW', { preserveLayers: false });

      const afterTime = Date.now();
      const event = handler.mock.calls[0][0] as Anatomy3DEvent;

      expect(event.timestamp).toBeGreaterThanOrEqual(beforeTime);
      expect(event.timestamp).toBeLessThanOrEqual(afterTime);
    });

    it('returns unsubscribe function', () => {
      const handler = vi.fn();
      const unsubscribe = anatomy3DEventBus.on('NAVIGATE_TO_STRUCTURE', handler);

      // Emit first event
      anatomy3DEventBus.emit('NAVIGATE_TO_STRUCTURE', { structureId: 'heart' });
      expect(handler).toHaveBeenCalledTimes(1);

      // Unsubscribe
      unsubscribe();

      // Emit second event - should not trigger handler
      anatomy3DEventBus.emit('NAVIGATE_TO_STRUCTURE', { structureId: 'lungs' });
      expect(handler).toHaveBeenCalledTimes(1);
    });

    it('supports multiple handlers for the same event', () => {
      const handler1 = vi.fn();
      const handler2 = vi.fn();

      anatomy3DEventBus.on('SET_VIEW_PRESET', handler1);
      anatomy3DEventBus.on('SET_VIEW_PRESET', handler2);

      anatomy3DEventBus.emit('SET_VIEW_PRESET', { preset: 'anterior', animate: true });

      expect(handler1).toHaveBeenCalledTimes(1);
      expect(handler2).toHaveBeenCalledTimes(1);
    });

    it('catches and logs errors from handlers', () => {
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
      const errorHandler = vi.fn(() => {
        throw new Error('Test error');
      });
      const normalHandler = vi.fn();

      anatomy3DEventBus.on('RESET_VIEW', errorHandler);
      anatomy3DEventBus.on('RESET_VIEW', normalHandler);

      // Should not throw
      anatomy3DEventBus.emit('RESET_VIEW', { preserveLayers: false });

      expect(consoleSpy).toHaveBeenCalled();
      expect(normalHandler).toHaveBeenCalled(); // Other handlers should still run

      consoleSpy.mockRestore();
    });
  });

  describe('onAll()', () => {
    it('subscribes to all events', () => {
      const handler = vi.fn();
      anatomy3DEventBus.onAll(handler);

      anatomy3DEventBus.emit('NAVIGATE_TO_STRUCTURE', { structureId: 'heart' });
      anatomy3DEventBus.emit('SET_VIEW_PRESET', { preset: 'anterior' });
      anatomy3DEventBus.emit('RESET_VIEW', { preserveLayers: false });

      expect(handler).toHaveBeenCalledTimes(3);
    });

    it('returns unsubscribe function for global listener', () => {
      const handler = vi.fn();
      const unsubscribe = anatomy3DEventBus.onAll(handler);

      anatomy3DEventBus.emit('RESET_VIEW', { preserveLayers: false });
      expect(handler).toHaveBeenCalledTimes(1);

      unsubscribe();

      anatomy3DEventBus.emit('RESET_VIEW', { preserveLayers: true });
      expect(handler).toHaveBeenCalledTimes(1);
    });
  });

  describe('off()', () => {
    it('removes all listeners for a specific event type', () => {
      const handler1 = vi.fn();
      const handler2 = vi.fn();

      anatomy3DEventBus.on('NAVIGATE_TO_STRUCTURE', handler1);
      anatomy3DEventBus.on('NAVIGATE_TO_STRUCTURE', handler2);

      anatomy3DEventBus.off('NAVIGATE_TO_STRUCTURE');

      anatomy3DEventBus.emit('NAVIGATE_TO_STRUCTURE', { structureId: 'heart' });

      expect(handler1).not.toHaveBeenCalled();
      expect(handler2).not.toHaveBeenCalled();
    });
  });

  describe('clear()', () => {
    it('removes all listeners', () => {
      const handler1 = vi.fn();
      const handler2 = vi.fn();
      const globalHandler = vi.fn();

      anatomy3DEventBus.on('NAVIGATE_TO_STRUCTURE', handler1);
      anatomy3DEventBus.on('SET_VIEW_PRESET', handler2);
      anatomy3DEventBus.onAll(globalHandler);

      anatomy3DEventBus.clear();

      anatomy3DEventBus.emit('NAVIGATE_TO_STRUCTURE', { structureId: 'heart' });
      anatomy3DEventBus.emit('SET_VIEW_PRESET', { preset: 'anterior' });

      expect(handler1).not.toHaveBeenCalled();
      expect(handler2).not.toHaveBeenCalled();
      expect(globalHandler).not.toHaveBeenCalled();
    });
  });

  describe('getHistory()', () => {
    it('returns event history', () => {
      anatomy3DEventBus.emit('NAVIGATE_TO_STRUCTURE', { structureId: 'heart' });
      anatomy3DEventBus.emit('SET_VIEW_PRESET', { preset: 'anterior' });

      const history = anatomy3DEventBus.getHistory();

      expect(history.length).toBe(2);
      expect(history[0].type).toBe('NAVIGATE_TO_STRUCTURE');
      expect(history[1].type).toBe('SET_VIEW_PRESET');
    });

    it('returns a copy of history', () => {
      anatomy3DEventBus.emit('RESET_VIEW', { preserveLayers: false });

      const history1 = anatomy3DEventBus.getHistory();
      const history2 = anatomy3DEventBus.getHistory();

      expect(history1).not.toBe(history2);
      expect(history1).toEqual(history2);
    });
  });

  describe('getLastEvent()', () => {
    it('returns the last event of a specific type', () => {
      anatomy3DEventBus.emit('NAVIGATE_TO_STRUCTURE', { structureId: 'heart' });
      anatomy3DEventBus.emit('NAVIGATE_TO_STRUCTURE', { structureId: 'lungs' });
      anatomy3DEventBus.emit('SET_VIEW_PRESET', { preset: 'anterior' });

      const lastNav = anatomy3DEventBus.getLastEvent('NAVIGATE_TO_STRUCTURE');

      expect(lastNav?.payload.structureId).toBe('lungs');
    });

    it('returns undefined if no event of that type exists', () => {
      anatomy3DEventBus.emit('SET_VIEW_PRESET', { preset: 'anterior' });

      const lastHighlight = anatomy3DEventBus.getLastEvent('HIGHLIGHT_STRUCTURES');

      expect(lastHighlight).toBeUndefined();
    });
  });

  describe('hasListeners()', () => {
    it('returns true when there are specific listeners', () => {
      anatomy3DEventBus.on('NAVIGATE_TO_STRUCTURE', vi.fn());

      expect(anatomy3DEventBus.hasListeners('NAVIGATE_TO_STRUCTURE')).toBe(true);
    });

    it('returns true when there are global listeners', () => {
      anatomy3DEventBus.onAll(vi.fn());

      expect(anatomy3DEventBus.hasListeners('NAVIGATE_TO_STRUCTURE')).toBe(true);
    });

    it('returns false when there are no listeners', () => {
      expect(anatomy3DEventBus.hasListeners('NAVIGATE_TO_STRUCTURE')).toBe(false);
    });
  });

  describe('setDebugMode()', () => {
    it('logs events when debug mode is enabled', () => {
      const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

      anatomy3DEventBus.setDebugMode(true);
      anatomy3DEventBus.emit('RESET_VIEW', { preserveLayers: false });

      expect(consoleSpy).toHaveBeenCalledWith(
        '[Anatomy3DEventBus]',
        'RESET_VIEW',
        { preserveLayers: false }
      );

      anatomy3DEventBus.setDebugMode(false);
      consoleSpy.mockRestore();
    });

    it('does not log when debug mode is disabled', () => {
      const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

      anatomy3DEventBus.setDebugMode(false);
      anatomy3DEventBus.emit('RESET_VIEW', { preserveLayers: false });

      expect(consoleSpy).not.toHaveBeenCalled();

      consoleSpy.mockRestore();
    });
  });
});

describe('Convenience Functions', () => {
  beforeEach(() => {
    anatomy3DEventBus.clear();
  });

  afterEach(() => {
    anatomy3DEventBus.clear();
  });

  describe('navigateToStructure()', () => {
    it('emits NAVIGATE_TO_STRUCTURE event', () => {
      const handler = vi.fn();
      anatomy3DEventBus.on('NAVIGATE_TO_STRUCTURE', handler);

      navigateToStructure('heart', { animate: true, zoom: 2 }, 'test-component');

      expect(handler).toHaveBeenCalledWith(
        expect.objectContaining({
          type: 'NAVIGATE_TO_STRUCTURE',
          payload: {
            structureId: 'heart',
            options: { animate: true, zoom: 2 },
          },
          source: 'test-component',
        })
      );
    });
  });

  describe('navigateToRegion()', () => {
    it('emits NAVIGATE_TO_REGION event', () => {
      const handler = vi.fn();
      anatomy3DEventBus.on('NAVIGATE_TO_REGION', handler);

      navigateToRegion('thorax', { highlight: true });

      expect(handler).toHaveBeenCalledWith(
        expect.objectContaining({
          type: 'NAVIGATE_TO_REGION',
          payload: {
            region: 'thorax',
            options: { highlight: true },
          },
        })
      );
    });
  });

  describe('setViewPreset()', () => {
    it('emits SET_VIEW_PRESET event', () => {
      const handler = vi.fn();
      anatomy3DEventBus.on('SET_VIEW_PRESET', handler);

      setViewPreset('anterior', true, 'viewer');

      expect(handler).toHaveBeenCalledWith(
        expect.objectContaining({
          type: 'SET_VIEW_PRESET',
          payload: { preset: 'anterior', animate: true },
          source: 'viewer',
        })
      );
    });

    it('defaults animate to true', () => {
      const handler = vi.fn();
      anatomy3DEventBus.on('SET_VIEW_PRESET', handler);

      setViewPreset('posterior');

      expect(handler).toHaveBeenCalledWith(
        expect.objectContaining({
          payload: { preset: 'posterior', animate: true },
        })
      );
    });
  });

  describe('enableLayers() and disableLayers()', () => {
    it('emits ENABLE_LAYERS event', () => {
      const handler = vi.fn();
      anatomy3DEventBus.on('ENABLE_LAYERS', handler);

      enableLayers(['cardiovascular', 'respiratory']);

      expect(handler).toHaveBeenCalledWith(
        expect.objectContaining({
          payload: { layers: ['cardiovascular', 'respiratory'] },
        })
      );
    });

    it('emits DISABLE_LAYERS event', () => {
      const handler = vi.fn();
      anatomy3DEventBus.on('DISABLE_LAYERS', handler);

      disableLayers(['muscular']);

      expect(handler).toHaveBeenCalledWith(
        expect.objectContaining({
          payload: { layers: ['muscular'] },
        })
      );
    });
  });

  describe('highlightStructures() and clearHighlights()', () => {
    it('emits HIGHLIGHT_STRUCTURES event', () => {
      const handler = vi.fn();
      anatomy3DEventBus.on('HIGHLIGHT_STRUCTURES', handler);

      const highlights: StructureHighlight[] = [
        { structureId: 'heart', color: '#ff0000', intensity: 'strong' },
        { structureId: 'lungs', color: '#00ff00', pulseAnimation: true },
      ];

      highlightStructures(highlights);

      expect(handler).toHaveBeenCalledWith(
        expect.objectContaining({
          payload: { highlights },
        })
      );
    });

    it('emits CLEAR_HIGHLIGHTS event', () => {
      const handler = vi.fn();
      anatomy3DEventBus.on('CLEAR_HIGHLIGHTS', handler);

      clearHighlights(['heart', 'lungs']);

      expect(handler).toHaveBeenCalledWith(
        expect.objectContaining({
          payload: { structureIds: ['heart', 'lungs'] },
        })
      );
    });

    it('emits CLEAR_HIGHLIGHTS with undefined to clear all', () => {
      const handler = vi.fn();
      anatomy3DEventBus.on('CLEAR_HIGHLIGHTS', handler);

      clearHighlights();

      expect(handler).toHaveBeenCalledWith(
        expect.objectContaining({
          payload: { structureIds: undefined },
        })
      );
    });
  });

  describe('resetView()', () => {
    it('emits RESET_VIEW event with preserveLayers option', () => {
      const handler = vi.fn();
      anatomy3DEventBus.on('RESET_VIEW', handler);

      resetView(true);

      expect(handler).toHaveBeenCalledWith(
        expect.objectContaining({
          payload: { preserveLayers: true },
        })
      );
    });

    it('defaults preserveLayers to false', () => {
      const handler = vi.fn();
      anatomy3DEventBus.on('RESET_VIEW', handler);

      resetView();

      expect(handler).toHaveBeenCalledWith(
        expect.objectContaining({
          payload: { preserveLayers: false },
        })
      );
    });
  });

  describe('selectStructure() and deselectStructure()', () => {
    it('emits SELECT_STRUCTURE event', () => {
      const handler = vi.fn();
      anatomy3DEventBus.on('SELECT_STRUCTURE', handler);

      selectStructure('heart', true, 'explorer');

      expect(handler).toHaveBeenCalledWith(
        expect.objectContaining({
          type: 'SELECT_STRUCTURE',
          payload: { structureId: 'heart', openInfoPanel: true },
          source: 'explorer',
        })
      );
    });

    it('defaults openInfoPanel to true', () => {
      const handler = vi.fn();
      anatomy3DEventBus.on('SELECT_STRUCTURE', handler);

      selectStructure('heart');

      expect(handler).toHaveBeenCalledWith(
        expect.objectContaining({
          payload: { structureId: 'heart', openInfoPanel: true },
        })
      );
    });

    it('emits DESELECT_STRUCTURE event', () => {
      const handler = vi.fn();
      anatomy3DEventBus.on('DESELECT_STRUCTURE', handler);

      deselectStructure('explorer');

      expect(handler).toHaveBeenCalledWith(
        expect.objectContaining({
          type: 'DESELECT_STRUCTURE',
          payload: {},
          source: 'explorer',
        })
      );
    });
  });
});
