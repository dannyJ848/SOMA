/**
 * Keyboard Navigation
 *
 * Comprehensive keyboard navigation utilities and components
 * for accessible user interfaces.
 */

import React, {
  createContext,
  useContext,
  useCallback,
  useRef,
  useEffect,
  useState,
} from 'react';
import { announce, getFocusableElements } from './index';

// ============================================
// Types
// ============================================

interface KeyboardShortcut {
  key: string;
  modifiers?: {
    ctrl?: boolean;
    alt?: boolean;
    shift?: boolean;
    meta?: boolean;
  };
  action: () => void;
  description: string;
  category?: string;
  global?: boolean;
}

interface KeyboardNavigationContextValue {
  registerShortcut: (shortcut: KeyboardShortcut) => () => void;
  unregisterShortcut: (key: string, modifiers?: KeyboardShortcut['modifiers']) => void;
  getShortcuts: () => KeyboardShortcut[];
  isEnabled: boolean;
  setEnabled: (enabled: boolean) => void;
}

// ============================================
// Context
// ============================================

const KeyboardNavigationContext = createContext<KeyboardNavigationContextValue | null>(null);

// ============================================
// Provider
// ============================================

interface KeyboardNavigationProviderProps {
  children: React.ReactNode;
  enableGlobalShortcuts?: boolean;
}

/**
 * Provider for keyboard navigation and shortcuts
 */
export function KeyboardNavigationProvider({
  children,
  enableGlobalShortcuts = true,
}: KeyboardNavigationProviderProps) {
  const shortcutsRef = useRef<Map<string, KeyboardShortcut>>(new Map());
  const [isEnabled, setEnabled] = useState(true);

  // Generate a unique key for a shortcut
  const getShortcutKey = useCallback(
    (key: string, modifiers?: KeyboardShortcut['modifiers']) => {
      const parts = [];
      if (modifiers?.ctrl) parts.push('ctrl');
      if (modifiers?.alt) parts.push('alt');
      if (modifiers?.shift) parts.push('shift');
      if (modifiers?.meta) parts.push('meta');
      parts.push(key.toLowerCase());
      return parts.join('+');
    },
    []
  );

  // Register a keyboard shortcut
  const registerShortcut = useCallback(
    (shortcut: KeyboardShortcut) => {
      const shortcutKey = getShortcutKey(shortcut.key, shortcut.modifiers);
      shortcutsRef.current.set(shortcutKey, shortcut);

      return () => {
        shortcutsRef.current.delete(shortcutKey);
      };
    },
    [getShortcutKey]
  );

  // Unregister a keyboard shortcut
  const unregisterShortcut = useCallback(
    (key: string, modifiers?: KeyboardShortcut['modifiers']) => {
      const shortcutKey = getShortcutKey(key, modifiers);
      shortcutsRef.current.delete(shortcutKey);
    },
    [getShortcutKey]
  );

  // Get all registered shortcuts
  const getShortcuts = useCallback(() => {
    return Array.from(shortcutsRef.current.values());
  }, []);

  // Handle keyboard events
  useEffect(() => {
    if (!enableGlobalShortcuts || !isEnabled) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't handle shortcuts in input fields unless they're global
      const target = e.target as HTMLElement;
      const isInputField =
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable;

      const shortcutKey = getShortcutKey(e.key, {
        ctrl: e.ctrlKey,
        alt: e.altKey,
        shift: e.shiftKey,
        meta: e.metaKey,
      });

      const shortcut = shortcutsRef.current.get(shortcutKey);

      if (shortcut && (!isInputField || shortcut.global)) {
        e.preventDefault();
        shortcut.action();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableGlobalShortcuts, isEnabled, getShortcutKey]);

  const contextValue: KeyboardNavigationContextValue = {
    registerShortcut,
    unregisterShortcut,
    getShortcuts,
    isEnabled,
    setEnabled,
  };

  return (
    <KeyboardNavigationContext.Provider value={contextValue}>
      {children}
    </KeyboardNavigationContext.Provider>
  );
}

// ============================================
// Hook
// ============================================

/**
 * Hook to access keyboard navigation context
 */
export function useKeyboardNavigation(): KeyboardNavigationContextValue {
  const context = useContext(KeyboardNavigationContext);
  if (!context) {
    throw new Error(
      'useKeyboardNavigation must be used within a KeyboardNavigationProvider'
    );
  }
  return context;
}

// ============================================
// Keyboard Shortcut Component
// ============================================

interface KeyboardShortcutProps extends Omit<KeyboardShortcut, 'action'> {
  onActivate: () => void;
  children?: React.ReactNode;
}

/**
 * Declarative component for registering keyboard shortcuts
 */
export function KeyboardShortcut({
  key: shortcutKey,
  modifiers,
  description,
  category,
  global,
  onActivate,
}: KeyboardShortcutProps) {
  const { registerShortcut } = useKeyboardNavigation();

  useEffect(() => {
    return registerShortcut({
      key: shortcutKey,
      modifiers,
      action: onActivate,
      description,
      category,
      global,
    });
  }, [shortcutKey, modifiers, description, category, global, onActivate, registerShortcut]);

  return null;
}

// ============================================
// Arrow Key Navigation Component
// ============================================

interface ArrowKeyNavigationProps {
  children: React.ReactNode;
  orientation?: 'horizontal' | 'vertical' | 'both';
  wrap?: boolean;
  onNavigate?: (index: number) => void;
  selector?: string;
  className?: string;
}

/**
 * Container that enables arrow key navigation between children
 */
export function ArrowKeyNavigation({
  children,
  orientation = 'vertical',
  wrap = true,
  onNavigate,
  selector = '[data-arrow-nav-item]',
  className = '',
}: ArrowKeyNavigationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!containerRef.current) return;

      const items = Array.from(
        containerRef.current.querySelectorAll(selector)
      ) as HTMLElement[];
      if (items.length === 0) return;

      let newIndex = currentIndex;
      const canMoveVertical = orientation === 'vertical' || orientation === 'both';
      const canMoveHorizontal = orientation === 'horizontal' || orientation === 'both';

      switch (e.key) {
        case 'ArrowUp':
          if (canMoveVertical) {
            e.preventDefault();
            newIndex = currentIndex > 0 ? currentIndex - 1 : wrap ? items.length - 1 : currentIndex;
          }
          break;
        case 'ArrowDown':
          if (canMoveVertical) {
            e.preventDefault();
            newIndex = currentIndex < items.length - 1 ? currentIndex + 1 : wrap ? 0 : currentIndex;
          }
          break;
        case 'ArrowLeft':
          if (canMoveHorizontal) {
            e.preventDefault();
            newIndex = currentIndex > 0 ? currentIndex - 1 : wrap ? items.length - 1 : currentIndex;
          }
          break;
        case 'ArrowRight':
          if (canMoveHorizontal) {
            e.preventDefault();
            newIndex = currentIndex < items.length - 1 ? currentIndex + 1 : wrap ? 0 : currentIndex;
          }
          break;
        case 'Home':
          e.preventDefault();
          newIndex = 0;
          break;
        case 'End':
          e.preventDefault();
          newIndex = items.length - 1;
          break;
      }

      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
        items[newIndex]?.focus();
        onNavigate?.(newIndex);
      }
    },
    [currentIndex, orientation, wrap, selector, onNavigate]
  );

  return (
    <div
      ref={containerRef}
      onKeyDown={handleKeyDown}
      className={className}
      role="group"
    >
      {children}
    </div>
  );
}

// ============================================
// Roving Tabindex Component
// ============================================

interface RovingTabindexProps {
  children: React.ReactNode;
  orientation?: 'horizontal' | 'vertical';
  initialIndex?: number;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
}

/**
 * Implements roving tabindex pattern for a group of elements
 */
export function RovingTabindex({
  children,
  orientation = 'vertical',
  initialIndex = 0,
  as: Component = 'div',
  className = '',
}: RovingTabindexProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!containerRef.current) return;

      const items = getFocusableElements(containerRef.current as HTMLElement);
      if (items.length === 0) return;

      const isHorizontal = orientation === 'horizontal';
      const prevKey = isHorizontal ? 'ArrowLeft' : 'ArrowUp';
      const nextKey = isHorizontal ? 'ArrowRight' : 'ArrowDown';

      let newIndex = activeIndex;

      if (e.key === prevKey) {
        e.preventDefault();
        newIndex = activeIndex > 0 ? activeIndex - 1 : items.length - 1;
      } else if (e.key === nextKey) {
        e.preventDefault();
        newIndex = activeIndex < items.length - 1 ? activeIndex + 1 : 0;
      } else if (e.key === 'Home') {
        e.preventDefault();
        newIndex = 0;
      } else if (e.key === 'End') {
        e.preventDefault();
        newIndex = items.length - 1;
      }

      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
        items[newIndex]?.focus();
      }
    },
    [activeIndex, orientation]
  );

  // Update tabindex on children
  const enhancedChildren = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement<Record<string, unknown>>, {
        tabIndex: index === activeIndex ? 0 : -1,
        'data-roving-tabindex-item': true,
      });
    }
    return child;
  });

  return React.createElement(
    Component,
    {
      ref: containerRef,
      onKeyDown: handleKeyDown,
      className,
      role: 'group',
    },
    enhancedChildren
  );
}

// ============================================
// Keyboard Shortcuts Help Dialog
// ============================================

interface KeyboardShortcutsHelpProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

/**
 * Dialog showing available keyboard shortcuts
 */
export function KeyboardShortcutsHelp({
  isOpen,
  onClose,
  title = 'Keyboard Shortcuts',
}: KeyboardShortcutsHelpProps) {
  const { getShortcuts } = useKeyboardNavigation();

  useEffect(() => {
    if (isOpen) {
      announce(`${title} dialog opened`);
    }
  }, [isOpen, title]);

  if (!isOpen) return null;

  const shortcuts = getShortcuts();
  const categories = shortcuts.reduce((acc, shortcut) => {
    const category = shortcut.category || 'General';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(shortcut);
    return acc;
  }, {} as Record<string, KeyboardShortcut[]>);

  const formatShortcut = (shortcut: KeyboardShortcut) => {
    const parts = [];
    if (shortcut.modifiers?.ctrl) parts.push('Ctrl');
    if (shortcut.modifiers?.alt) parts.push('Alt');
    if (shortcut.modifiers?.shift) parts.push('Shift');
    if (shortcut.modifiers?.meta) parts.push('Cmd');
    parts.push(shortcut.key.toUpperCase());
    return parts.join(' + ');
  };

  return (
    <div
      className="keyboard-shortcuts-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="shortcuts-title"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="keyboard-shortcuts-dialog">
        <header className="keyboard-shortcuts-header">
          <h2 id="shortcuts-title">{title}</h2>
          <button
            onClick={onClose}
            className="keyboard-shortcuts-close"
            aria-label="Close shortcuts dialog"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </header>

        <div className="keyboard-shortcuts-content">
          {Object.entries(categories).map(([category, categoryShortcuts]) => (
            <section key={category} className="keyboard-shortcuts-category">
              <h3>{category}</h3>
              <dl className="keyboard-shortcuts-list">
                {categoryShortcuts.map((shortcut, index) => (
                  <div key={index} className="keyboard-shortcut-item">
                    <dt>
                      <kbd className="keyboard-shortcut-key">
                        {formatShortcut(shortcut)}
                      </kbd>
                    </dt>
                    <dd>{shortcut.description}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>

        <footer className="keyboard-shortcuts-footer">
          <p>Press <kbd>?</kbd> to toggle this dialog</p>
        </footer>
      </div>
    </div>
  );
}

// ============================================
// Type-ahead Navigation Component
// ============================================

interface TypeAheadNavigationProps {
  children: React.ReactNode;
  onMatch: (index: number) => void;
  getItemText: (element: HTMLElement) => string;
  timeout?: number;
  selector?: string;
  className?: string;
}

/**
 * Enables type-ahead navigation for lists
 */
export function TypeAheadNavigation({
  children,
  onMatch,
  getItemText,
  timeout = 500,
  selector = '[data-typeahead-item]',
  className = '',
}: TypeAheadNavigationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const searchBufferRef = useRef('');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!containerRef.current) return;

      // Only handle printable characters
      if (e.key.length !== 1 || e.ctrlKey || e.altKey || e.metaKey) return;

      // Clear previous timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Add to search buffer
      searchBufferRef.current += e.key.toLowerCase();

      // Find matching item
      const items = Array.from(
        containerRef.current.querySelectorAll(selector)
      ) as HTMLElement[];

      const matchIndex = items.findIndex((item) => {
        const text = getItemText(item).toLowerCase();
        return text.startsWith(searchBufferRef.current);
      });

      if (matchIndex !== -1) {
        onMatch(matchIndex);
        items[matchIndex]?.focus();
      }

      // Clear search buffer after timeout
      timeoutRef.current = setTimeout(() => {
        searchBufferRef.current = '';
      }, timeout);
    },
    [selector, getItemText, onMatch, timeout]
  );

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} onKeyDown={handleKeyDown} className={className}>
      {children}
    </div>
  );
}

// ============================================
// Grid Navigation Component
// ============================================

interface GridNavigationProps {
  children: React.ReactNode;
  columns: number;
  onNavigate?: (row: number, col: number) => void;
  wrap?: boolean;
  selector?: string;
  className?: string;
}

/**
 * Enables 2D grid navigation with arrow keys
 */
export function GridNavigation({
  children,
  columns,
  onNavigate,
  wrap = true,
  selector = '[data-grid-item]',
  className = '',
}: GridNavigationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!containerRef.current) return;

      const items = Array.from(
        containerRef.current.querySelectorAll(selector)
      ) as HTMLElement[];
      if (items.length === 0) return;

      const rows = Math.ceil(items.length / columns);
      const currentRow = Math.floor(activeIndex / columns);
      const currentCol = activeIndex % columns;

      let newRow = currentRow;
      let newCol = currentCol;

      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault();
          newRow = currentRow > 0 ? currentRow - 1 : wrap ? rows - 1 : currentRow;
          break;
        case 'ArrowDown':
          e.preventDefault();
          newRow = currentRow < rows - 1 ? currentRow + 1 : wrap ? 0 : currentRow;
          break;
        case 'ArrowLeft':
          e.preventDefault();
          newCol = currentCol > 0 ? currentCol - 1 : wrap ? columns - 1 : currentCol;
          break;
        case 'ArrowRight':
          e.preventDefault();
          newCol = currentCol < columns - 1 ? currentCol + 1 : wrap ? 0 : currentCol;
          break;
        case 'Home':
          if (e.ctrlKey) {
            e.preventDefault();
            newRow = 0;
            newCol = 0;
          } else {
            e.preventDefault();
            newCol = 0;
          }
          break;
        case 'End':
          if (e.ctrlKey) {
            e.preventDefault();
            newRow = rows - 1;
            newCol = (items.length - 1) % columns;
          } else {
            e.preventDefault();
            newCol = columns - 1;
          }
          break;
      }

      const newIndex = Math.min(newRow * columns + newCol, items.length - 1);

      if (newIndex !== activeIndex && items[newIndex]) {
        setActiveIndex(newIndex);
        items[newIndex].focus();
        onNavigate?.(newRow, newCol);
      }
    },
    [activeIndex, columns, wrap, selector, onNavigate]
  );

  return (
    <div
      ref={containerRef}
      onKeyDown={handleKeyDown}
      className={className}
      role="grid"
    >
      {children}
    </div>
  );
}

export default KeyboardNavigationProvider;
