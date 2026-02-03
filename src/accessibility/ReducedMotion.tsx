/**
 * Reduced Motion
 *
 * Components and utilities for respecting reduced motion preferences.
 * Helps users who experience motion sickness or vestibular disorders.
 */

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
import { announce, prefersReducedMotion } from './index';

// ============================================
// Types
// ============================================

type MotionPreference = 'no-preference' | 'reduce' | 'auto';

interface ReducedMotionContextValue {
  preference: MotionPreference;
  setPreference: (preference: MotionPreference) => void;
  shouldReduceMotion: boolean;
  getAnimationDuration: (normalDuration: number) => number;
  getTransition: (normalTransition: string) => string;
}

// ============================================
// Context
// ============================================

const ReducedMotionContext = createContext<ReducedMotionContextValue | null>(null);

// ============================================
// Provider
// ============================================

interface ReducedMotionProviderProps {
  children: React.ReactNode;
  defaultPreference?: MotionPreference;
}

/**
 * Provider for reduced motion settings
 */
export function ReducedMotionProvider({
  children,
  defaultPreference = 'auto',
}: ReducedMotionProviderProps) {
  const [preference, setPreferenceState] = useState<MotionPreference>(() => {
    if (typeof window === 'undefined') return defaultPreference;

    const stored = localStorage.getItem('motion-preference');
    return (stored as MotionPreference) || defaultPreference;
  });

  const [systemPreference, setSystemPreference] = useState(() => {
    if (typeof window === 'undefined') return false;
    return prefersReducedMotion();
  });

  // Sync to localStorage and document
  useEffect(() => {
    localStorage.setItem('motion-preference', preference);

    const root = document.documentElement;
    root.dataset.motionPreference = preference;

    // Set class based on effective preference
    const shouldReduce =
      preference === 'reduce' || (preference === 'auto' && systemPreference);

    if (shouldReduce) {
      root.classList.add('reduce-motion');
    } else {
      root.classList.remove('reduce-motion');
    }
  }, [preference, systemPreference]);

  // Listen for system preference changes
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleChange = (e: MediaQueryListEvent) => {
      setSystemPreference(e.matches);
    };

    query.addEventListener('change', handleChange);
    return () => query.removeEventListener('change', handleChange);
  }, []);

  const setPreference = useCallback((newPreference: MotionPreference) => {
    setPreferenceState(newPreference);

    const messages: Record<MotionPreference, string> = {
      'no-preference': 'Full animations enabled',
      reduce: 'Reduced motion enabled',
      auto: 'Using system motion preference',
    };
    announce(messages[newPreference]);
  }, []);

  const shouldReduceMotion = useMemo(() => {
    return preference === 'reduce' || (preference === 'auto' && systemPreference);
  }, [preference, systemPreference]);

  const getAnimationDuration = useCallback(
    (normalDuration: number) => {
      return shouldReduceMotion ? 0 : normalDuration;
    },
    [shouldReduceMotion]
  );

  const getTransition = useCallback(
    (normalTransition: string) => {
      return shouldReduceMotion ? 'none' : normalTransition;
    },
    [shouldReduceMotion]
  );

  const contextValue = useMemo<ReducedMotionContextValue>(
    () => ({
      preference,
      setPreference,
      shouldReduceMotion,
      getAnimationDuration,
      getTransition,
    }),
    [preference, setPreference, shouldReduceMotion, getAnimationDuration, getTransition]
  );

  return (
    <ReducedMotionContext.Provider value={contextValue}>
      {children}
    </ReducedMotionContext.Provider>
  );
}

// ============================================
// Hook
// ============================================

/**
 * Hook to access reduced motion settings
 */
export function useReducedMotionContext(): ReducedMotionContextValue {
  const context = useContext(ReducedMotionContext);
  if (!context) {
    throw new Error('useReducedMotionContext must be used within a ReducedMotionProvider');
  }
  return context;
}

// ============================================
// Motion Preference Selector Component
// ============================================

interface MotionPreferenceSelectorProps {
  className?: string;
  layout?: 'horizontal' | 'vertical';
}

/**
 * Radio group for selecting motion preference
 */
export function MotionPreferenceSelector({
  className = '',
  layout = 'vertical',
}: MotionPreferenceSelectorProps) {
  const { preference, setPreference } = useReducedMotionContext();

  const options: { value: MotionPreference; label: string; description: string }[] = [
    {
      value: 'auto',
      label: 'System Default',
      description: 'Follow your operating system preference',
    },
    {
      value: 'no-preference',
      label: 'Full Motion',
      description: 'Enable all animations and transitions',
    },
    {
      value: 'reduce',
      label: 'Reduced Motion',
      description: 'Minimize animations and transitions',
    },
  ];

  return (
    <fieldset
      className={`motion-preference-selector motion-preference-selector--${layout} ${className}`}
    >
      <legend className="motion-preference-legend">Motion Preference</legend>

      <div className="motion-preference-options" role="radiogroup">
        {options.map((option) => (
          <label
            key={option.value}
            className={`motion-preference-option ${
              preference === option.value ? 'motion-preference-option--selected' : ''
            }`}
          >
            <input
              type="radio"
              name="motion-preference"
              value={option.value}
              checked={preference === option.value}
              onChange={() => setPreference(option.value)}
              className="motion-preference-input"
            />
            <span className="motion-preference-content">
              <span className="motion-preference-label">{option.label}</span>
              <span className="motion-preference-description">
                {option.description}
              </span>
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

// ============================================
// Reduced Motion Toggle Component
// ============================================

interface ReducedMotionToggleProps {
  showLabel?: boolean;
  className?: string;
}

/**
 * Simple toggle for reduced motion
 */
export function ReducedMotionToggle({
  showLabel = true,
  className = '',
}: ReducedMotionToggleProps) {
  const { shouldReduceMotion, setPreference } = useReducedMotionContext();

  const handleToggle = () => {
    setPreference(shouldReduceMotion ? 'no-preference' : 'reduce');
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={`reduced-motion-toggle ${className}`}
      aria-pressed={shouldReduceMotion}
      aria-label={showLabel ? undefined : 'Toggle reduced motion'}
    >
      <span className="reduced-motion-toggle-icon" aria-hidden="true">
        {shouldReduceMotion ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M9 9h6v6H9z" />
          </svg>
        ) : (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8v4l2 2" />
          </svg>
        )}
      </span>
      {showLabel && (
        <span className="reduced-motion-toggle-label">
          {shouldReduceMotion ? 'Motion Reduced' : 'Full Motion'}
        </span>
      )}
    </button>
  );
}

// ============================================
// Motion Safe Component
// ============================================

interface MotionSafeProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

/**
 * Renders children only if motion is allowed, otherwise renders fallback
 */
export function MotionSafe({ children, fallback = null }: MotionSafeProps) {
  const { shouldReduceMotion } = useReducedMotionContext();

  return <>{shouldReduceMotion ? fallback : children}</>;
}

// ============================================
// Animated Component Wrapper
// ============================================

interface AnimatedProps {
  children: React.ReactNode;
  animation?: string;
  duration?: number;
  delay?: number;
  reducedAnimation?: string;
  reducedDuration?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Wrapper that applies animations only when motion is allowed
 */
export function Animated({
  children,
  animation = '',
  duration = 300,
  delay = 0,
  reducedAnimation = '',
  reducedDuration = 0,
  className = '',
  style = {},
}: AnimatedProps) {
  const { shouldReduceMotion } = useReducedMotionContext();

  const animationStyle: React.CSSProperties = shouldReduceMotion
    ? {
        animation: reducedAnimation || 'none',
        animationDuration: `${reducedDuration}ms`,
        animationDelay: '0ms',
        transition: 'none',
      }
    : {
        animation,
        animationDuration: `${duration}ms`,
        animationDelay: `${delay}ms`,
      };

  return (
    <div
      className={`animated ${className}`}
      style={{ ...style, ...animationStyle }}
    >
      {children}
    </div>
  );
}

// ============================================
// Transition Component
// ============================================

interface TransitionProps {
  children: React.ReactNode;
  in: boolean;
  timeout?: number;
  reducedTimeout?: number;
  className?: string;
  enterClassName?: string;
  exitClassName?: string;
  onEnter?: () => void;
  onExited?: () => void;
}

/**
 * Transition wrapper that respects reduced motion
 */
export function Transition({
  children,
  in: isIn,
  timeout = 300,
  reducedTimeout = 0,
  className = '',
  enterClassName = 'transition-enter',
  exitClassName = 'transition-exit',
  onEnter,
  onExited,
}: TransitionProps) {
  const { shouldReduceMotion } = useReducedMotionContext();
  const [state, setState] = useState<'entered' | 'exited' | 'entering' | 'exiting'>(
    isIn ? 'entered' : 'exited'
  );

  const effectiveTimeout = shouldReduceMotion ? reducedTimeout : timeout;

  useEffect(() => {
    if (isIn && state === 'exited') {
      setState('entering');
      onEnter?.();
      setTimeout(() => setState('entered'), effectiveTimeout);
    } else if (!isIn && state === 'entered') {
      setState('exiting');
      setTimeout(() => {
        setState('exited');
        onExited?.();
      }, effectiveTimeout);
    }
  }, [isIn, state, effectiveTimeout, onEnter, onExited]);

  if (state === 'exited') return null;

  const stateClassName =
    state === 'entering' || state === 'entered' ? enterClassName : exitClassName;

  return (
    <div
      className={`transition ${className} ${stateClassName}`}
      style={{
        transitionDuration: shouldReduceMotion ? '0ms' : `${timeout}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ============================================
// Scroll Behavior Component
// ============================================

interface SmoothScrollProps {
  children: React.ReactNode;
}

/**
 * Component that manages smooth scrolling based on motion preference
 */
export function SmoothScroll({ children }: SmoothScrollProps) {
  const { shouldReduceMotion } = useReducedMotionContext();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = shouldReduceMotion
      ? 'auto'
      : 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, [shouldReduceMotion]);

  return <>{children}</>;
}

// ============================================
// Animation Controller Hook
// ============================================

interface AnimationConfig {
  duration: number;
  easing: string;
  delay?: number;
}

/**
 * Hook for controlling animations based on motion preference
 */
export function useAnimationConfig(
  normalConfig: AnimationConfig,
  reducedConfig?: Partial<AnimationConfig>
): AnimationConfig {
  const { shouldReduceMotion } = useReducedMotionContext();

  return useMemo(() => {
    if (shouldReduceMotion) {
      return {
        duration: reducedConfig?.duration ?? 0,
        easing: reducedConfig?.easing ?? 'linear',
        delay: reducedConfig?.delay ?? 0,
      };
    }
    return normalConfig;
  }, [shouldReduceMotion, normalConfig, reducedConfig]);
}

// ============================================
// Parallax Safe Component
// ============================================

interface ParallaxSafeProps {
  children: React.ReactNode;
  offset?: number;
  className?: string;
}

/**
 * Parallax effect that disables in reduced motion mode
 */
export function ParallaxSafe({
  children,
  offset = 50,
  className = '',
}: ParallaxSafeProps) {
  const { shouldReduceMotion } = useReducedMotionContext();
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const handleScroll = () => {
      const scrolled = window.scrollY;
      setTranslateY(scrolled * (offset / 100));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [shouldReduceMotion, offset]);

  const style: React.CSSProperties = shouldReduceMotion
    ? {}
    : { transform: `translateY(${translateY}px)` };

  return (
    <div className={`parallax-safe ${className}`} style={style}>
      {children}
    </div>
  );
}

// ============================================
// Auto-Play Control Component
// ============================================

interface AutoPlayControlProps {
  children: (shouldAutoPlay: boolean) => React.ReactNode;
}

/**
 * Controls auto-play based on motion preference
 */
export function AutoPlayControl({ children }: AutoPlayControlProps) {
  const { shouldReduceMotion } = useReducedMotionContext();
  const shouldAutoPlay = !shouldReduceMotion;

  return <>{children(shouldAutoPlay)}</>;
}

export default ReducedMotionProvider;
