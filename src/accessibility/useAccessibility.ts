/**
 * React Accessibility Hooks
 *
 * Custom hooks for implementing accessibility features in React components.
 */

import { useEffect, useRef, useCallback, useState, useMemo } from 'react';
import {
  trapFocus,
  saveFocus,
  announce,
  announceError,
  getFocusableElements,
  getFirstFocusable,
  prefersReducedMotion,
  createRovingTabindex,
  handle3DKeyboard,
  type Anatomy3DKeyboardHandler,
} from './index';

// ============================================
// Focus Trap Hook
// ============================================

/**
 * Hook to trap focus within a container (for modals, dialogs, etc.)
 */
export function useFocusTrap(isActive: boolean) {
  const containerRef = useRef<HTMLDivElement>(null);
  const restoreFocusRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    // Save current focus
    restoreFocusRef.current = saveFocus();

    // Focus first focusable element
    const firstFocusable = getFirstFocusable(containerRef.current);
    if (firstFocusable) {
      firstFocusable.focus();
    }

    // Trap focus
    const cleanup = trapFocus(containerRef.current);

    return () => {
      cleanup();
      // Restore focus when closing
      if (restoreFocusRef.current) {
        restoreFocusRef.current();
      }
    };
  }, [isActive]);

  return containerRef;
}

// ============================================
// Announcer Hook
// ============================================

/**
 * Hook to announce messages to screen readers
 */
export function useAnnouncer() {
  const announcePolite = useCallback((message: string) => {
    announce(message, 'polite');
  }, []);

  const announceAssertive = useCallback((message: string) => {
    announce(message, 'assertive');
  }, []);

  const announceErrorMessage = useCallback((message: string) => {
    announceError(message);
  }, []);

  return {
    announce: announcePolite,
    announceAssertive,
    announceError: announceErrorMessage,
  };
}

// ============================================
// Reduced Motion Hook
// ============================================

/**
 * Hook to check if user prefers reduced motion
 */
export function useReducedMotion(): boolean {
  const [reducedMotion, setReducedMotion] = useState(prefersReducedMotion());

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return reducedMotion;
}

// ============================================
// Roving Tabindex Hook
// ============================================

interface RovingTabindexOptions {
  orientation?: 'horizontal' | 'vertical';
  initialIndex?: number;
}

/**
 * Hook for roving tabindex pattern
 */
export function useRovingTabindex<T extends HTMLElement>(
  items: T[],
  options: RovingTabindexOptions = {}
) {
  const { orientation = 'vertical', initialIndex = 0 } = options;
  const [focusedIndex, setFocusedIndex] = useState(initialIndex);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      const isHorizontal = orientation === 'horizontal';
      const prevKey = isHorizontal ? 'ArrowLeft' : 'ArrowUp';
      const nextKey = isHorizontal ? 'ArrowRight' : 'ArrowDown';

      let newIndex = focusedIndex;

      if (e.key === prevKey) {
        e.preventDefault();
        newIndex = focusedIndex > 0 ? focusedIndex - 1 : items.length - 1;
      } else if (e.key === nextKey) {
        e.preventDefault();
        newIndex = focusedIndex < items.length - 1 ? focusedIndex + 1 : 0;
      } else if (e.key === 'Home') {
        e.preventDefault();
        newIndex = 0;
      } else if (e.key === 'End') {
        e.preventDefault();
        newIndex = items.length - 1;
      }

      if (newIndex !== focusedIndex) {
        setFocusedIndex(newIndex);
        items[newIndex]?.focus();
      }
    },
    [focusedIndex, items, orientation]
  );

  const getTabIndex = useCallback(
    (index: number) => (index === focusedIndex ? 0 : -1),
    [focusedIndex]
  );

  return {
    focusedIndex,
    setFocusedIndex,
    handleKeyDown,
    getTabIndex,
  };
}

// ============================================
// Keyboard Shortcut Hook
// ============================================

interface KeyboardShortcut {
  key: string;
  modifiers?: {
    ctrl?: boolean;
    alt?: boolean;
    shift?: boolean;
    meta?: boolean;
  };
  handler: () => void;
  description?: string;
}

/**
 * Hook for registering keyboard shortcuts
 */
export function useKeyboardShortcuts(shortcuts: KeyboardShortcut[]) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      for (const shortcut of shortcuts) {
        const { key, modifiers = {}, handler } = shortcut;

        const matchesKey = e.key.toLowerCase() === key.toLowerCase();
        const matchesCtrl = modifiers.ctrl ? e.ctrlKey : !e.ctrlKey;
        const matchesAlt = modifiers.alt ? e.altKey : !e.altKey;
        const matchesShift = modifiers.shift ? e.shiftKey : !e.shiftKey;
        const matchesMeta = modifiers.meta ? e.metaKey : !e.metaKey;

        if (matchesKey && matchesCtrl && matchesAlt && matchesShift && matchesMeta) {
          e.preventDefault();
          handler();
          break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [shortcuts]);
}

// ============================================
// Skip Link Hook
// ============================================

/**
 * Hook for managing skip links
 */
export function useSkipLinks() {
  const mainContentRef = useRef<HTMLElement>(null);

  const skipToMain = useCallback(() => {
    if (mainContentRef.current) {
      mainContentRef.current.tabIndex = -1;
      mainContentRef.current.focus();
      announce('Skipped to main content');
    }
  }, []);

  return {
    mainContentRef,
    skipToMain,
  };
}

// ============================================
// Focus Visible Hook
// ============================================

/**
 * Hook to detect keyboard vs mouse focus for focus ring styling
 */
export function useFocusVisible() {
  const [isFocusVisible, setIsFocusVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let hadKeyboardEvent = false;

    const handleKeyDown = () => {
      hadKeyboardEvent = true;
    };

    const handleMouseDown = () => {
      hadKeyboardEvent = false;
    };

    const handleFocus = () => {
      if (hadKeyboardEvent) {
        setIsFocusVisible(true);
      }
    };

    const handleBlur = () => {
      setIsFocusVisible(false);
    };

    document.addEventListener('keydown', handleKeyDown, true);
    document.addEventListener('mousedown', handleMouseDown, true);
    element.addEventListener('focus', handleFocus);
    element.addEventListener('blur', handleBlur);

    return () => {
      document.removeEventListener('keydown', handleKeyDown, true);
      document.removeEventListener('mousedown', handleMouseDown, true);
      element.removeEventListener('focus', handleFocus);
      element.removeEventListener('blur', handleBlur);
    };
  }, []);

  return {
    ref,
    isFocusVisible,
  };
}

// ============================================
// 3D Viewer Keyboard Navigation Hook
// ============================================

/**
 * Hook for 3D anatomy viewer keyboard controls
 */
export function use3DKeyboardNavigation(
  handlers: Anatomy3DKeyboardHandler,
  isActive = true
) {
  useEffect(() => {
    if (!isActive) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle if not in an input field
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable
      ) {
        return;
      }

      handle3DKeyboard(e, handlers);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handlers, isActive]);
}

// ============================================
// Screen Reader Structure Detection
// ============================================

interface SelectedStructure {
  id: string;
  name: string;
}

/**
 * Hook to announce 3D viewer structure selections
 */
export function useStructureAnnouncement(
  selectedStructure: SelectedStructure | null,
  hoveredStructure: string | null
) {
  const prevSelectedRef = useRef<string | null>(null);
  const prevHoveredRef = useRef<string | null>(null);
  const { announce: announcePolite } = useAnnouncer();

  useEffect(() => {
    // Announce selection changes
    if (selectedStructure?.id !== prevSelectedRef.current) {
      if (selectedStructure) {
        announcePolite(`Selected ${selectedStructure.name}. Press Escape to deselect.`);
      }
      prevSelectedRef.current = selectedStructure?.id || null;
    }
  }, [selectedStructure, announcePolite]);

  useEffect(() => {
    // Announce hover changes (debounced to avoid spam)
    if (hoveredStructure !== prevHoveredRef.current && hoveredStructure) {
      // Only announce if different from selection
      if (hoveredStructure !== selectedStructure?.id) {
        // Don't announce every hover, only when it changes
        prevHoveredRef.current = hoveredStructure;
      }
    }
  }, [hoveredStructure, selectedStructure]);
}

// ============================================
// Live Region for Dynamic Content
// ============================================

/**
 * Hook for managing a live region for dynamic content updates
 */
export function useLiveRegion(options?: { politeness?: 'polite' | 'assertive' }) {
  const { politeness = 'polite' } = options || {};
  const regionRef = useRef<HTMLDivElement>(null);

  const updateContent = useCallback((content: string) => {
    if (regionRef.current) {
      // Clear and update to trigger announcement
      regionRef.current.textContent = '';
      requestAnimationFrame(() => {
        if (regionRef.current) {
          regionRef.current.textContent = content;
        }
      });
    }
  }, []);

  const regionProps = useMemo(
    () => ({
      role: 'status' as const,
      'aria-live': politeness,
      'aria-atomic': true as const,
      className: 'sr-only',
    }),
    [politeness]
  );

  return {
    regionRef,
    regionProps,
    updateContent,
  };
}

// ============================================
// Export All Hooks
// ============================================

export {
  createRovingTabindex,
};
