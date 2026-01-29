import { useState, useEffect, useRef, ReactNode, useCallback } from 'react';

interface ViewTransitionProps {
  /** The key that triggers transitions when changed (e.g., currentView) */
  viewKey: string;
  /** The content to render */
  children: ReactNode;
  /** Transition duration in milliseconds */
  duration?: number;
  /** Type of transition animation */
  transitionType?: 'fade' | 'slide-left' | 'slide-right' | 'slide-up' | 'slide-down';
  /** Optional callback when transition completes */
  onTransitionEnd?: () => void;
  /** Custom class name for the wrapper */
  className?: string;
}

/**
 * ViewTransition component that provides smooth animations when views change.
 * Uses CSS classes for enter/exit animations with requestAnimationFrame for smoothness.
 */
export function ViewTransition({
  viewKey,
  children,
  duration = 250,
  transitionType = 'fade',
  onTransitionEnd,
  className = '',
}: ViewTransitionProps) {
  const [displayedChildren, setDisplayedChildren] = useState<ReactNode>(children);
  const [transitionState, setTransitionState] = useState<'idle' | 'exiting' | 'entering'>('idle');
  const previousKeyRef = useRef<string>(viewKey);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Cleanup function for timeouts
  const clearTimeouts = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  useEffect(() => {
    // If key hasn't changed, just update children without transition
    if (previousKeyRef.current === viewKey) {
      setDisplayedChildren(children);
      return;
    }

    // Key changed - start exit transition
    previousKeyRef.current = viewKey;
    clearTimeouts();

    // Start exit animation
    setTransitionState('exiting');

    // Use requestAnimationFrame for smoother timing
    requestAnimationFrame(() => {
      timeoutRef.current = setTimeout(() => {
        // After exit completes, update content and start enter
        setDisplayedChildren(children);
        setTransitionState('entering');

        // Use another rAF for the enter animation
        requestAnimationFrame(() => {
          timeoutRef.current = setTimeout(() => {
            setTransitionState('idle');
            onTransitionEnd?.();
          }, duration);
        });
      }, duration);
    });

    return clearTimeouts;
  }, [viewKey, children, duration, onTransitionEnd, clearTimeouts]);

  // Build the transition class based on state and type
  const getTransitionClass = (): string => {
    const baseClass = 'view-transition';
    const typeClass = `view-transition--${transitionType}`;

    let stateClass = '';
    switch (transitionState) {
      case 'exiting':
        stateClass = 'view-exit view-exit-active';
        break;
      case 'entering':
        stateClass = 'view-enter view-enter-active';
        break;
      default:
        stateClass = '';
    }

    return `${baseClass} ${typeClass} ${stateClass} ${className}`.trim();
  };

  return (
    <div
      ref={containerRef}
      className={getTransitionClass()}
      style={{
        '--view-transition-duration': `${duration}ms`,
      } as React.CSSProperties}
    >
      {displayedChildren}
    </div>
  );
}

/**
 * Hook for managing view transitions with more control
 */
export function useViewTransition(initialView: string, duration = 250) {
  const [currentView, setCurrentView] = useState(initialView);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const previousViewRef = useRef<string | null>(null);

  const transitionTo = useCallback((newView: string) => {
    if (newView === currentView || isTransitioning) return;

    previousViewRef.current = currentView;
    setIsTransitioning(true);

    // Start exit, then after duration change view and enter
    setTimeout(() => {
      setCurrentView(newView);
      setTimeout(() => {
        setIsTransitioning(false);
      }, duration);
    }, duration);
  }, [currentView, duration, isTransitioning]);

  return {
    currentView,
    previousView: previousViewRef.current,
    isTransitioning,
    transitionTo,
    setCurrentView: transitionTo,
  };
}

/**
 * Determines the appropriate slide direction based on view navigation
 * Useful for creating contextually-aware transitions
 */
export function getSlideDirection(
  fromView: string,
  toView: string,
  viewOrder: string[]
): 'slide-left' | 'slide-right' {
  const fromIndex = viewOrder.indexOf(fromView);
  const toIndex = viewOrder.indexOf(toView);

  if (fromIndex === -1 || toIndex === -1) {
    return 'slide-left'; // Default
  }

  return toIndex > fromIndex ? 'slide-left' : 'slide-right';
}

export default ViewTransition;
