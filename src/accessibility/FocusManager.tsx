/**
 * Focus Manager
 *
 * Comprehensive focus management utilities for accessible components.
 * Handles focus trapping, restoration, and visible focus indicators.
 */

import React, {
  createContext,
  useContext,
  useCallback,
  useRef,
  useEffect,
  useState,
} from 'react';
import {
  getFocusableElements,
  getFirstFocusable,
  getLastFocusable,
  saveFocus,
  trapFocus,
} from './index';

// ============================================
// Types
// ============================================

interface FocusManagerContextValue {
  pushFocusScope: (scopeId: string, container: HTMLElement) => void;
  popFocusScope: (scopeId: string) => void;
  getCurrentScope: () => string | null;
  focusFirst: (container?: HTMLElement) => void;
  focusLast: (container?: HTMLElement) => void;
  isKeyboardNavigation: boolean;
}

interface FocusScope {
  id: string;
  container: HTMLElement;
  restoreFocus: () => void;
  cleanup: () => void;
}

// ============================================
// Context
// ============================================

const FocusManagerContext = createContext<FocusManagerContextValue | null>(null);

// ============================================
// Provider
// ============================================

interface FocusManagerProviderProps {
  children: React.ReactNode;
}

/**
 * Provider for managing focus across the application
 */
export function FocusManagerProvider({ children }: FocusManagerProviderProps) {
  const scopeStackRef = useRef<FocusScope[]>([]);
  const [isKeyboardNavigation, setIsKeyboardNavigation] = useState(false);

  // Track keyboard vs mouse navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        setIsKeyboardNavigation(true);
        document.body.classList.add('keyboard-navigation');
      }
    };

    const handleMouseDown = () => {
      setIsKeyboardNavigation(false);
      document.body.classList.remove('keyboard-navigation');
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  // Push a new focus scope (for modals, dialogs, etc.)
  const pushFocusScope = useCallback((scopeId: string, container: HTMLElement) => {
    const restoreFocus = saveFocus();
    const cleanup = trapFocus(container);

    scopeStackRef.current.push({
      id: scopeId,
      container,
      restoreFocus,
      cleanup,
    });

    // Focus first focusable element in the new scope
    const firstFocusable = getFirstFocusable(container);
    if (firstFocusable) {
      firstFocusable.focus();
    }
  }, []);

  // Pop a focus scope and restore previous focus
  const popFocusScope = useCallback((scopeId: string) => {
    const index = scopeStackRef.current.findIndex((scope) => scope.id === scopeId);
    if (index === -1) return;

    const scope = scopeStackRef.current[index];
    scope.cleanup();
    scope.restoreFocus();

    scopeStackRef.current.splice(index, 1);
  }, []);

  // Get current active scope
  const getCurrentScope = useCallback(() => {
    const stack = scopeStackRef.current;
    return stack.length > 0 ? stack[stack.length - 1].id : null;
  }, []);

  // Focus first focusable element
  const focusFirst = useCallback((container?: HTMLElement) => {
    const target = container || document.body;
    const firstFocusable = getFirstFocusable(target);
    if (firstFocusable) {
      firstFocusable.focus();
    }
  }, []);

  // Focus last focusable element
  const focusLast = useCallback((container?: HTMLElement) => {
    const target = container || document.body;
    const lastFocusable = getLastFocusable(target);
    if (lastFocusable) {
      lastFocusable.focus();
    }
  }, []);

  const contextValue: FocusManagerContextValue = {
    pushFocusScope,
    popFocusScope,
    getCurrentScope,
    focusFirst,
    focusLast,
    isKeyboardNavigation,
  };

  return (
    <FocusManagerContext.Provider value={contextValue}>
      {children}
    </FocusManagerContext.Provider>
  );
}

// ============================================
// Hook
// ============================================

/**
 * Hook to access focus management functions
 */
export function useFocusManager(): FocusManagerContextValue {
  const context = useContext(FocusManagerContext);
  if (!context) {
    throw new Error('useFocusManager must be used within a FocusManagerProvider');
  }
  return context;
}

// ============================================
// Focus Scope Component
// ============================================

interface FocusScopeProps {
  id: string;
  isActive: boolean;
  restoreFocus?: boolean;
  autoFocus?: boolean;
  contain?: boolean;
  children: React.ReactNode;
}

/**
 * Creates a focus scope that can trap focus within it
 */
export function FocusScope({
  id,
  isActive,
  restoreFocus = true,
  autoFocus = true,
  contain = true,
  children,
}: FocusScopeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { pushFocusScope, popFocusScope } = useFocusManager();

  useEffect(() => {
    if (!containerRef.current || !isActive) return;

    if (contain) {
      pushFocusScope(id, containerRef.current);
    } else if (autoFocus) {
      const firstFocusable = getFirstFocusable(containerRef.current);
      if (firstFocusable) {
        firstFocusable.focus();
      }
    }

    return () => {
      if (contain) {
        popFocusScope(id);
      }
    };
  }, [id, isActive, contain, autoFocus, pushFocusScope, popFocusScope]);

  return (
    <div ref={containerRef} data-focus-scope={id}>
      {children}
    </div>
  );
}

// ============================================
// Focus Guard Component
// ============================================

interface FocusGuardProps {
  onFocus: () => void;
}

/**
 * Invisible element that triggers focus handling at container boundaries
 */
export function FocusGuard({ onFocus }: FocusGuardProps) {
  return (
    <div
      tabIndex={0}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 1,
        height: 0,
        padding: 0,
        margin: -1,
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        border: 0,
      }}
      onFocus={onFocus}
    />
  );
}

// ============================================
// Focus Ring Component
// ============================================

interface FocusRingProps {
  children: React.ReactElement;
  focusRingClass?: string;
  within?: boolean;
}

/**
 * Provides visible focus ring for keyboard navigation only
 */
export function FocusRing({
  children,
  focusRingClass = 'focus-visible',
  within = false,
}: FocusRingProps) {
  const [isFocused, setIsFocused] = useState(false);
  const { isKeyboardNavigation } = useFocusManager();

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const showFocusRing = isFocused && isKeyboardNavigation;

  const childProps = children.props as {
    onFocus?: (e: React.FocusEvent) => void;
    onBlur?: (e: React.FocusEvent) => void;
    className?: string;
  };

  return React.cloneElement(children as React.ReactElement<Record<string, unknown>>, {
    onFocus: (e: React.FocusEvent) => {
      handleFocus();
      childProps.onFocus?.(e);
    },
    onBlur: (e: React.FocusEvent) => {
      handleBlur();
      childProps.onBlur?.(e);
    },
    className: `${childProps.className || ''} ${showFocusRing ? focusRingClass : ''}`.trim(),
    'data-focus-visible': showFocusRing || undefined,
  });
}

// ============================================
// Auto Focus Component
// ============================================

interface AutoFocusProps {
  children: React.ReactElement;
  disabled?: boolean;
  delay?: number;
}

/**
 * Automatically focuses the child element on mount
 */
export function AutoFocus({ children, disabled = false, delay = 0 }: AutoFocusProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (disabled || !ref.current) return;

    const timeoutId = setTimeout(() => {
      ref.current?.focus();
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [disabled, delay]);

  return React.cloneElement(children as React.ReactElement<Record<string, unknown>>, { ref });
}

// ============================================
// Focus Trap Component
// ============================================

interface FocusTrapProps {
  isActive: boolean;
  children: React.ReactNode;
  initialFocus?: React.RefObject<HTMLElement>;
  finalFocus?: React.RefObject<HTMLElement>;
  returnFocus?: boolean;
}

/**
 * Traps focus within a container while active
 */
export function FocusTrap({
  isActive,
  children,
  initialFocus,
  finalFocus,
  returnFocus = true,
}: FocusTrapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    // Save current focus
    previousFocusRef.current = document.activeElement as HTMLElement;

    // Focus initial element or first focusable
    if (initialFocus?.current) {
      initialFocus.current.focus();
    } else {
      const firstFocusable = getFirstFocusable(containerRef.current);
      if (firstFocusable) {
        firstFocusable.focus();
      }
    }

    // Set up focus trap
    const cleanup = trapFocus(containerRef.current);

    return () => {
      cleanup();

      // Restore focus
      if (returnFocus) {
        if (finalFocus?.current) {
          finalFocus.current.focus();
        } else if (previousFocusRef.current) {
          previousFocusRef.current.focus();
        }
      }
    };
  }, [isActive, initialFocus, finalFocus, returnFocus]);

  return <div ref={containerRef}>{children}</div>;
}

// ============================================
// Focus Within Component
// ============================================

interface FocusWithinProps {
  children: (isFocusWithin: boolean) => React.ReactNode;
  onFocusWithinChange?: (isFocusWithin: boolean) => void;
}

/**
 * Tracks whether focus is within the container
 */
export function FocusWithin({ children, onFocusWithinChange }: FocusWithinProps) {
  const [isFocusWithin, setIsFocusWithin] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleFocusIn = () => {
      setIsFocusWithin(true);
      onFocusWithinChange?.(true);
    };

    const handleFocusOut = (e: FocusEvent) => {
      if (!container.contains(e.relatedTarget as Node)) {
        setIsFocusWithin(false);
        onFocusWithinChange?.(false);
      }
    };

    container.addEventListener('focusin', handleFocusIn);
    container.addEventListener('focusout', handleFocusOut);

    return () => {
      container.removeEventListener('focusin', handleFocusIn);
      container.removeEventListener('focusout', handleFocusOut);
    };
  }, [onFocusWithinChange]);

  return <div ref={containerRef}>{children(isFocusWithin)}</div>;
}

// ============================================
// Restore Focus Component
// ============================================

interface RestoreFocusProps {
  children: React.ReactNode;
  restoreRef?: React.RefObject<HTMLElement>;
}

/**
 * Restores focus to a specific element when unmounted
 */
export function RestoreFocus({ children, restoreRef }: RestoreFocusProps) {
  const savedFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    savedFocusRef.current = document.activeElement as HTMLElement;

    return () => {
      const restoreTarget = restoreRef?.current || savedFocusRef.current;
      if (restoreTarget && typeof restoreTarget.focus === 'function') {
        restoreTarget.focus();
      }
    };
  }, [restoreRef]);

  return <>{children}</>;
}

export default FocusManagerProvider;
