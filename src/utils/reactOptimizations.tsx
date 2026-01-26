/**
 * React Optimization Utilities
 *
 * Helpers for optimizing React component performance including
 * memoization, context splitting, and render optimization.
 */

import { memo, useRef, useCallback, useMemo, createContext, useContext, useState } from 'react';
import type { ComponentType, FC, ReactNode } from 'react';

// ============================================
// Typed Memo with Display Name
// ============================================

/**
 * Creates a memoized component with proper display name and TypeScript support
 */
export function createMemoComponent<P extends object>(
  Component: FC<P>,
  displayName: string,
  arePropsEqual?: (prevProps: P, nextProps: P) => boolean
): FC<P> {
  const MemoizedComponent = memo(Component, arePropsEqual);
  MemoizedComponent.displayName = displayName;
  return MemoizedComponent;
}

// ============================================
// Deep Equality Comparisons
// ============================================

/**
 * Shallow compare two objects
 */
export function shallowEqual<T extends Record<string, any>>(a: T, b: T): boolean {
  if (a === b) return true;
  if (!a || !b) return false;

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  for (const key of keysA) {
    if (a[key] !== b[key]) return false;
  }

  return true;
}

/**
 * Compare arrays by reference equality of elements
 */
export function arrayShallowEqual<T>(a: T[], b: T[]): boolean {
  if (a === b) return true;
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

/**
 * Compare specific props only
 */
export function createPropComparer<P extends object>(
  keys: (keyof P)[]
): (prevProps: P, nextProps: P) => boolean {
  return (prevProps: P, nextProps: P) => {
    for (const key of keys) {
      if (prevProps[key] !== nextProps[key]) return false;
    }
    return true;
  };
}

// ============================================
// Stable Reference Utilities
// ============================================

/**
 * Create a stable empty array reference
 */
export const EMPTY_ARRAY: readonly any[] = Object.freeze([]);

/**
 * Create a stable empty object reference
 */
export const EMPTY_OBJECT: Readonly<Record<string, never>> = Object.freeze({});

/**
 * Create a stable noop function
 */
export const noop = () => {};

// ============================================
// Context Optimization Patterns
// ============================================

interface SplitContextValue<T> {
  state: T;
  dispatch: React.Dispatch<React.SetStateAction<T>>;
}

/**
 * Create split context for separating state reads from updates
 * This prevents unnecessary re-renders when only dispatch is needed
 */
export function createSplitContext<T>(defaultValue: T) {
  const StateContext = createContext<T>(defaultValue);
  const DispatchContext = createContext<React.Dispatch<React.SetStateAction<T>> | null>(null);

  // Provider that splits state and dispatch
  function Provider({ children, initialValue }: { children: ReactNode; initialValue?: T }) {
    const [state, setState] = useState<T>(initialValue ?? defaultValue);

    return (
      <DispatchContext.Provider value={setState}>
        <StateContext.Provider value={state}>
          {children}
        </StateContext.Provider>
      </DispatchContext.Provider>
    );
  }

  // Hook to read state only (subscribes to state changes)
  function useStateValue(): T {
    return useContext(StateContext);
  }

  // Hook to get dispatch only (never causes re-renders)
  function useDispatch(): React.Dispatch<React.SetStateAction<T>> {
    const dispatch = useContext(DispatchContext);
    if (dispatch === null) {
      throw new Error('useDispatch must be used within Provider');
    }
    return dispatch;
  }

  // Hook to get both (for components that need both)
  function useBoth(): SplitContextValue<T> {
    const state = useStateValue();
    const dispatch = useDispatch();
    return { state, dispatch };
  }

  return {
    Provider,
    useStateValue,
    useDispatch,
    useBoth,
    StateContext,
    DispatchContext,
  };
}

// ============================================
// Selector Pattern for Context
// ============================================

/**
 * Create a context with selector support to prevent unnecessary re-renders
 */
export function createSelectableContext<T extends object>(defaultValue: T) {
  const Context = createContext<T>(defaultValue);

  // Custom hook with selector
  function useSelector<S>(selector: (state: T) => S): S {
    const state = useContext(Context);
    return useMemo(() => selector(state), [state, selector]);
  }

  return {
    Provider: Context.Provider,
    useValue: () => useContext(Context),
    useSelector,
    Context,
  };
}

// ============================================
// Batch Update Utilities
// ============================================

/**
 * Queue multiple state updates to be batched together
 * React 18+ batches automatically, but this ensures explicit batching
 */
export function useBatchedUpdates() {
  const pendingUpdates = useRef<Array<() => void>>([]);
  const rafId = useRef<number | null>(null);

  const flushUpdates = useCallback(() => {
    const updates = pendingUpdates.current;
    pendingUpdates.current = [];
    rafId.current = null;

    // Execute all queued updates
    updates.forEach(update => update());
  }, []);

  const queueUpdate = useCallback((update: () => void) => {
    pendingUpdates.current.push(update);

    if (rafId.current === null) {
      rafId.current = requestAnimationFrame(flushUpdates);
    }
  }, [flushUpdates]);

  const flushSync = useCallback(() => {
    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current);
      flushUpdates();
    }
  }, [flushUpdates]);

  return { queueUpdate, flushSync };
}

// ============================================
// Event Handler Optimization
// ============================================

/**
 * Create a stable event handler that doesn't cause re-renders
 */
export function useStableEventHandler<T extends (...args: any[]) => any>(handler: T): T {
  const handlerRef = useRef<T>(handler);
  handlerRef.current = handler;

  return useCallback(
    ((...args: Parameters<T>) => handlerRef.current(...args)) as T,
    []
  );
}

/**
 * Create an event handler that prevents default and stops propagation
 */
export function usePreventedHandler<E extends React.SyntheticEvent>(
  handler: (event: E) => void
): (event: E) => void {
  const handlerRef = useRef(handler);
  handlerRef.current = handler;

  return useCallback((event: E) => {
    event.preventDefault();
    event.stopPropagation();
    handlerRef.current(event);
  }, []);
}

// ============================================
// Conditional Rendering Optimization
// ============================================

/**
 * Wrapper component that only renders children when condition is true
 * Useful for expensive components that should be completely unmounted
 */
export function ConditionalRender({
  condition,
  children,
  fallback = null,
}: {
  condition: boolean;
  children: ReactNode;
  fallback?: ReactNode;
}) {
  return condition ? <>{children}</> : <>{fallback}</>;
}

/**
 * Component that keeps children mounted but hidden
 * Useful when hiding/showing is expensive but unmounting is worse
 */
export function HiddenRender({
  visible,
  children,
  unmountDelay,
}: {
  visible: boolean;
  children: ReactNode;
  unmountDelay?: number;
}) {
  const [shouldRender, setShouldRender] = useState(visible);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  // Handle visibility changes with optional delay
  if (visible && !shouldRender) {
    setShouldRender(true);
  }

  if (!visible && shouldRender && unmountDelay !== undefined) {
    if (!timeoutRef.current) {
      timeoutRef.current = setTimeout(() => {
        setShouldRender(false);
        timeoutRef.current = undefined;
      }, unmountDelay);
    }
  } else if (!visible && shouldRender && unmountDelay === undefined) {
    // No delay, keep mounted but hidden
  }

  if (!shouldRender) return null;

  return (
    <div style={{ display: visible ? 'block' : 'none' }}>
      {children}
    </div>
  );
}

// ============================================
// List Optimization
// ============================================

/**
 * Optimized list item wrapper that prevents re-renders
 */
export function createListItem<T>(
  ItemComponent: ComponentType<{ item: T; index: number }>,
  getKey: (item: T, index: number) => string | number
) {
  const MemoizedItem = memo(ItemComponent);

  return function OptimizedList({
    items,
    className,
  }: {
    items: T[];
    className?: string;
  }) {
    return (
      <div className={className}>
        {items.map((item, index) => (
          <MemoizedItem key={getKey(item, index)} item={item} index={index} />
        ))}
      </div>
    );
  };
}

// ============================================
// Re-render Debugger (Development Only)
// ============================================

/**
 * Hook to debug why a component re-rendered
 * Only logs in development mode
 */
export function useWhyDidYouUpdate<T extends Record<string, any>>(
  componentName: string,
  props: T
): void {
  const previousProps = useRef<T | undefined>(undefined);

  if (process.env.NODE_ENV !== 'development') return;

  if (previousProps.current) {
    const allKeys = Object.keys({ ...previousProps.current, ...props }) as (keyof T)[];
    const changedProps: Partial<Record<keyof T, { from: any; to: any }>> = {};

    allKeys.forEach(key => {
      if (previousProps.current![key] !== props[key]) {
        changedProps[key] = {
          from: previousProps.current![key],
          to: props[key],
        };
      }
    });

    if (Object.keys(changedProps).length > 0) {
      console.log(`[WhyDidYouUpdate] ${componentName}:`, changedProps);
    }
  }

  previousProps.current = props;
}
