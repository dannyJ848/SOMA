/**
 * Performance Hooks
 *
 * React hooks for performance monitoring and optimization.
 */

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import {
  fpsMonitor,
  detectDevicePerformance,
  throttle,
  debounce,
  type PerformanceMetrics,
  type DevicePerformanceTier,
} from '../utils/performanceMonitor';

// ============================================
// useFPSMonitor Hook
// ============================================

/**
 * Hook to monitor FPS in real-time
 * @param enabled - Whether to enable monitoring (disable in production)
 */
export function useFPSMonitor(enabled: boolean = true): PerformanceMetrics | null {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const unsubscribe = fpsMonitor.subscribe(setMetrics);
    return () => {
      unsubscribe();
    };
  }, [enabled]);

  return metrics;
}

// ============================================
// useDevicePerformance Hook
// ============================================

/**
 * Hook to detect and react to device performance tier
 */
export function useDevicePerformance(): {
  tier: DevicePerformanceTier;
  isMobile: boolean;
  reducedMotion: boolean;
} {
  const [tier] = useState<DevicePerformanceTier>(() => detectDevicePerformance());
  const [isMobile] = useState(() =>
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  );
  const [reducedMotion] = useState(() =>
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches
  );

  return { tier, isMobile, reducedMotion };
}

// ============================================
// useAdaptiveQuality Hook
// ============================================

interface AdaptiveQualitySettings {
  dpr: number;
  antialias: boolean;
  shadowMapEnabled: boolean;
  maxLights: number;
  geometryDetail: 'low' | 'medium' | 'high';
  animationsEnabled: boolean;
  particlesEnabled: boolean;
}

/**
 * Hook that provides quality settings based on device performance
 */
export function useAdaptiveQuality(): AdaptiveQualitySettings {
  const { tier, reducedMotion } = useDevicePerformance();

  return useMemo(() => {
    const baseSettings: AdaptiveQualitySettings = {
      dpr: 1,
      antialias: false,
      shadowMapEnabled: false,
      maxLights: 2,
      geometryDetail: 'low',
      animationsEnabled: !reducedMotion,
      particlesEnabled: false,
    };

    switch (tier) {
      case 'high':
        return {
          dpr: Math.min(window.devicePixelRatio, 2),
          antialias: true,
          shadowMapEnabled: true,
          maxLights: 4,
          geometryDetail: 'high',
          animationsEnabled: !reducedMotion,
          particlesEnabled: true,
        };
      case 'medium':
        return {
          dpr: 1.5,
          antialias: false,
          shadowMapEnabled: false,
          maxLights: 3,
          geometryDetail: 'medium',
          animationsEnabled: !reducedMotion,
          particlesEnabled: false,
        };
      case 'low':
      default:
        return baseSettings;
    }
  }, [tier, reducedMotion]);
}

// ============================================
// useThrottledCallback Hook
// ============================================

/**
 * Hook that returns a throttled version of a callback
 */
export function useThrottledCallback<T extends (...args: any[]) => any>(
  callback: T,
  intervalMs: number
): (...args: Parameters<T>) => void {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  return useMemo(
    () => throttle((...args: Parameters<T>) => callbackRef.current(...args), intervalMs),
    [intervalMs]
  );
}

// ============================================
// useDebouncedCallback Hook
// ============================================

/**
 * Hook that returns a debounced version of a callback
 */
export function useDebouncedCallback<T extends (...args: any[]) => any>(
  callback: T,
  delayMs: number
): (...args: Parameters<T>) => void {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  return useMemo(
    () => debounce((...args: Parameters<T>) => callbackRef.current(...args), delayMs),
    [delayMs]
  );
}

// ============================================
// useDebouncedValue Hook
// ============================================

/**
 * Hook that returns a debounced version of a value
 */
export function useDebouncedValue<T>(value: T, delayMs: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delayMs);

    return () => clearTimeout(timeoutId);
  }, [value, delayMs]);

  return debouncedValue;
}

// ============================================
// useIntersectionObserver Hook
// ============================================

/**
 * Hook for lazy loading components when they enter the viewport
 */
export function useIntersectionObserver(
  options?: IntersectionObserverInit
): [React.RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        rootMargin: '100px', // Preload 100px before visible
        threshold: 0,
        ...options,
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [options]);

  return [ref, isIntersecting];
}

// ============================================
// useIdleCallback Hook
// ============================================

/**
 * Hook that executes a callback during idle time
 */
export function useIdleCallback(
  callback: () => void,
  deps: React.DependencyList = []
): void {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  useEffect(() => {
    if ('requestIdleCallback' in window) {
      const id = requestIdleCallback(
        () => callbackRef.current(),
        { timeout: 2000 }
      );
      return () => cancelIdleCallback(id);
    } else {
      // Fallback for Safari
      const id = setTimeout(() => callbackRef.current(), 1);
      return () => clearTimeout(id);
    }
  }, deps);
}

// ============================================
// usePrefersReducedMotion Hook
// ============================================

/**
 * Hook to detect user's reduced motion preference
 */
export function usePrefersReducedMotion(): boolean {
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    if (!mediaQuery) return;

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return reducedMotion;
}

// ============================================
// useRenderCount Hook (Development only)
// ============================================

/**
 * Hook to track component render count for debugging
 */
export function useRenderCount(componentName: string): number {
  const renderCount = useRef(0);
  renderCount.current++;

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Render] ${componentName}: ${renderCount.current}`);
    }
  });

  return renderCount.current;
}

// ============================================
// useStableCallback Hook
// ============================================

/**
 * Hook that returns a stable reference to a callback
 * Useful for preventing unnecessary re-renders in children
 */
export function useStableCallback<T extends (...args: any[]) => any>(callback: T): T {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  return useCallback(
    ((...args: Parameters<T>) => callbackRef.current(...args)) as T,
    []
  );
}

// ============================================
// useMemoCompare Hook
// ============================================

/**
 * Hook that memoizes a value with custom comparison
 */
export function useMemoCompare<T>(
  value: T,
  compare: (prev: T | undefined, next: T) => boolean
): T {
  const previousRef = useRef<T | undefined>(undefined);
  const previous = previousRef.current;

  const isEqual = previous !== undefined && compare(previous, value);

  useEffect(() => {
    if (!isEqual) {
      previousRef.current = value;
    }
  });

  return isEqual && previous !== undefined ? previous : value;
}
