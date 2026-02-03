/**
 * High Contrast Mode
 *
 * Components and utilities for high contrast mode support.
 * Ensures content is readable for users with visual impairments.
 */

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
import { announce } from './index';
import { meetsContrastRatio, getContrastRatio } from './index';

// ============================================
// Types
// ============================================

type ContrastMode = 'normal' | 'high' | 'inverted';

interface HighContrastContextValue {
  mode: ContrastMode;
  setMode: (mode: ContrastMode) => void;
  isHighContrast: boolean;
  toggleHighContrast: () => void;
  contrastRatio: number;
  setContrastRatio: (ratio: number) => void;
}

// ============================================
// Context
// ============================================

const HighContrastContext = createContext<HighContrastContextValue | null>(null);

// ============================================
// Provider
// ============================================

interface HighContrastProviderProps {
  children: React.ReactNode;
  defaultMode?: ContrastMode;
  respectSystemPreference?: boolean;
}

/**
 * Provider for high contrast mode settings
 */
export function HighContrastProvider({
  children,
  defaultMode = 'normal',
  respectSystemPreference = true,
}: HighContrastProviderProps) {
  // Initialize from localStorage or system preference
  const [mode, setModeState] = useState<ContrastMode>(() => {
    if (typeof window === 'undefined') return defaultMode;

    const stored = localStorage.getItem('contrast-mode');
    if (stored) return stored as ContrastMode;

    if (respectSystemPreference) {
      if (window.matchMedia('(prefers-contrast: more)').matches) {
        return 'high';
      }
      if (window.matchMedia('(forced-colors: active)').matches) {
        return 'high';
      }
    }

    return defaultMode;
  });

  const [contrastRatio, setContrastRatio] = useState(4.5); // WCAG AA default

  // Sync to localStorage and document
  useEffect(() => {
    localStorage.setItem('contrast-mode', mode);

    const root = document.documentElement;
    root.classList.remove('contrast-normal', 'contrast-high', 'contrast-inverted');
    root.classList.add(`contrast-${mode}`);

    // Set data attribute for CSS targeting
    root.dataset.contrastMode = mode;
  }, [mode]);

  // Listen for system preference changes
  useEffect(() => {
    if (!respectSystemPreference) return;

    const contrastQuery = window.matchMedia('(prefers-contrast: more)');
    const forcedColorsQuery = window.matchMedia('(forced-colors: active)');

    const handleChange = () => {
      const stored = localStorage.getItem('contrast-mode');
      // Only update if user hasn't explicitly set a preference
      if (!stored) {
        if (contrastQuery.matches || forcedColorsQuery.matches) {
          setModeState('high');
        } else {
          setModeState('normal');
        }
      }
    };

    contrastQuery.addEventListener('change', handleChange);
    forcedColorsQuery.addEventListener('change', handleChange);

    return () => {
      contrastQuery.removeEventListener('change', handleChange);
      forcedColorsQuery.removeEventListener('change', handleChange);
    };
  }, [respectSystemPreference]);

  const setMode = useCallback((newMode: ContrastMode) => {
    setModeState(newMode);
    const modeLabels: Record<ContrastMode, string> = {
      normal: 'Normal contrast',
      high: 'High contrast',
      inverted: 'Inverted colors',
    };
    announce(modeLabels[newMode] + ' mode enabled');
  }, []);

  const toggleHighContrast = useCallback(() => {
    setModeState((current) => {
      const newMode = current === 'high' ? 'normal' : 'high';
      announce(newMode === 'high' ? 'High contrast enabled' : 'High contrast disabled');
      return newMode;
    });
  }, []);

  const isHighContrast = mode === 'high' || mode === 'inverted';

  const contextValue = useMemo<HighContrastContextValue>(
    () => ({
      mode,
      setMode,
      isHighContrast,
      toggleHighContrast,
      contrastRatio,
      setContrastRatio,
    }),
    [mode, setMode, isHighContrast, toggleHighContrast, contrastRatio]
  );

  return (
    <HighContrastContext.Provider value={contextValue}>
      {children}
    </HighContrastContext.Provider>
  );
}

// ============================================
// Hook
// ============================================

/**
 * Hook to access high contrast mode settings
 */
export function useHighContrast(): HighContrastContextValue {
  const context = useContext(HighContrastContext);
  if (!context) {
    throw new Error('useHighContrast must be used within a HighContrastProvider');
  }
  return context;
}

// ============================================
// High Contrast Toggle Component
// ============================================

interface HighContrastToggleProps {
  showLabel?: boolean;
  labelPosition?: 'left' | 'right';
  className?: string;
}

/**
 * Toggle button for high contrast mode
 */
export function HighContrastToggle({
  showLabel = true,
  labelPosition = 'right',
  className = '',
}: HighContrastToggleProps) {
  const { isHighContrast, toggleHighContrast } = useHighContrast();

  const label = isHighContrast ? 'Disable high contrast' : 'Enable high contrast';

  return (
    <button
      type="button"
      onClick={toggleHighContrast}
      className={`high-contrast-toggle ${className}`}
      aria-pressed={isHighContrast}
      aria-label={showLabel ? undefined : label}
    >
      {showLabel && labelPosition === 'left' && (
        <span className="high-contrast-toggle-label">{label}</span>
      )}

      <span className="high-contrast-toggle-icon" aria-hidden="true">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2v20" />
          <path d="M12 2a10 10 0 0 1 0 20" fill="currentColor" />
        </svg>
      </span>

      {showLabel && labelPosition === 'right' && (
        <span className="high-contrast-toggle-label">{label}</span>
      )}
    </button>
  );
}

// ============================================
// Contrast Mode Selector Component
// ============================================

interface ContrastModeSelectorProps {
  className?: string;
  layout?: 'horizontal' | 'vertical';
}

/**
 * Radio group for selecting contrast mode
 */
export function ContrastModeSelector({
  className = '',
  layout = 'horizontal',
}: ContrastModeSelectorProps) {
  const { mode, setMode } = useHighContrast();

  const options: { value: ContrastMode; label: string; description: string }[] = [
    {
      value: 'normal',
      label: 'Normal',
      description: 'Standard color contrast',
    },
    {
      value: 'high',
      label: 'High Contrast',
      description: 'Increased contrast for better visibility',
    },
    {
      value: 'inverted',
      label: 'Inverted',
      description: 'Dark background with light text',
    },
  ];

  return (
    <fieldset
      className={`contrast-mode-selector contrast-mode-selector--${layout} ${className}`}
    >
      <legend className="contrast-mode-selector-legend">Contrast Mode</legend>

      <div className="contrast-mode-selector-options" role="radiogroup">
        {options.map((option) => (
          <label
            key={option.value}
            className={`contrast-mode-option ${
              mode === option.value ? 'contrast-mode-option--selected' : ''
            }`}
          >
            <input
              type="radio"
              name="contrast-mode"
              value={option.value}
              checked={mode === option.value}
              onChange={() => setMode(option.value)}
              className="contrast-mode-option-input"
            />
            <span className="contrast-mode-option-content">
              <span className="contrast-mode-option-label">{option.label}</span>
              <span className="contrast-mode-option-description">
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
// Contrast Checker Component
// ============================================

interface ContrastCheckerProps {
  foreground: string;
  background: string;
  showDetails?: boolean;
  className?: string;
}

/**
 * Visual indicator of color contrast compliance
 */
export function ContrastChecker({
  foreground,
  background,
  showDetails = true,
  className = '',
}: ContrastCheckerProps) {
  const ratio = getContrastRatio(foreground, background);
  const passesAA = meetsContrastRatio(foreground, background, 'AA');
  const passesAALarge = meetsContrastRatio(foreground, background, 'AA', true);
  const passesAAA = meetsContrastRatio(foreground, background, 'AAA');
  const passesAAALarge = meetsContrastRatio(foreground, background, 'AAA', true);

  const getStatusLabel = () => {
    if (passesAAA) return 'Excellent';
    if (passesAA) return 'Good';
    if (passesAALarge) return 'Acceptable for large text';
    return 'Insufficient contrast';
  };

  return (
    <div className={`contrast-checker ${className}`}>
      <div
        className="contrast-checker-preview"
        style={{ color: foreground, backgroundColor: background }}
        aria-hidden="true"
      >
        <span className="contrast-checker-sample-text">Sample Text</span>
      </div>

      <div className="contrast-checker-results">
        <div className="contrast-checker-ratio">
          <span className="contrast-checker-ratio-value">{ratio.toFixed(2)}:1</span>
          <span className="contrast-checker-ratio-label">{getStatusLabel()}</span>
        </div>

        {showDetails && (
          <div className="contrast-checker-details">
            <div className={`contrast-checker-level ${passesAA ? 'pass' : 'fail'}`}>
              <span className="contrast-checker-level-icon" aria-hidden="true">
                {passesAA ? '\u2713' : '\u2717'}
              </span>
              <span>AA Normal ({'\u2265'}4.5:1)</span>
            </div>
            <div className={`contrast-checker-level ${passesAALarge ? 'pass' : 'fail'}`}>
              <span className="contrast-checker-level-icon" aria-hidden="true">
                {passesAALarge ? '\u2713' : '\u2717'}
              </span>
              <span>AA Large ({'\u2265'}3:1)</span>
            </div>
            <div className={`contrast-checker-level ${passesAAA ? 'pass' : 'fail'}`}>
              <span className="contrast-checker-level-icon" aria-hidden="true">
                {passesAAA ? '\u2713' : '\u2717'}
              </span>
              <span>AAA Normal ({'\u2265'}7:1)</span>
            </div>
            <div className={`contrast-checker-level ${passesAAALarge ? 'pass' : 'fail'}`}>
              <span className="contrast-checker-level-icon" aria-hidden="true">
                {passesAAALarge ? '\u2713' : '\u2717'}
              </span>
              <span>AAA Large ({'\u2265'}4.5:1)</span>
            </div>
          </div>
        )}
      </div>

      <div className="sr-only" role="status">
        Contrast ratio: {ratio.toFixed(2)} to 1. {getStatusLabel()}.
        {passesAA ? ' Passes WCAG AA.' : ' Does not pass WCAG AA.'}
      </div>
    </div>
  );
}

// ============================================
// Forced Colors Mode Detector
// ============================================

interface ForcedColorsModeProps {
  children: (isForcedColors: boolean) => React.ReactNode;
}

/**
 * Detects Windows High Contrast Mode (forced-colors)
 */
export function ForcedColorsMode({ children }: ForcedColorsModeProps) {
  const [isForcedColors, setIsForcedColors] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(forced-colors: active)');
    setIsForcedColors(query.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsForcedColors(e.matches);
    };

    query.addEventListener('change', handleChange);
    return () => query.removeEventListener('change', handleChange);
  }, []);

  return <>{children(isForcedColors)}</>;
}

// ============================================
// High Contrast Image Component
// ============================================

interface HighContrastImageProps {
  src: string;
  highContrastSrc?: string;
  alt: string;
  className?: string;
}

/**
 * Image that can swap to a high contrast version
 */
export function HighContrastImage({
  src,
  highContrastSrc,
  alt,
  className = '',
  ...props
}: HighContrastImageProps & React.ImgHTMLAttributes<HTMLImageElement>) {
  const { isHighContrast } = useHighContrast();

  const imageSrc = isHighContrast && highContrastSrc ? highContrastSrc : src;

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={`high-contrast-image ${className}`}
      {...props}
    />
  );
}

// ============================================
// Contrast Safe Text Component
// ============================================

type ContrastSafeTextProps<E extends React.ElementType> = {
  children: React.ReactNode;
  as?: E;
  className?: string;
} & React.ComponentPropsWithoutRef<E>;

/**
 * Text component that ensures readable contrast in high contrast mode
 */
export function ContrastSafeText<E extends React.ElementType>({
  children,
  as: Component = 'span' as E,
  className = '',
  ...rest
}: ContrastSafeTextProps<E>) {
  const { isHighContrast } = useHighContrast();

  return (
    <Component
      className={`contrast-safe-text ${isHighContrast ? 'contrast-safe-text--high' : ''} ${className}`}
      {...(rest as any)}
    >
      {children}
    </Component>
  );
}

// ============================================
// Color Blind Safe Colors
// ============================================

export const colorBlindSafePalette = {
  // Categorical colors that work for most color blindness types
  primary: '#0077BB',
  secondary: '#EE7733',
  tertiary: '#009988',
  quaternary: '#CC3311',
  quinary: '#33BBEE',
  senary: '#EE3377',
  // Status colors
  success: '#009E73',
  warning: '#F0E442',
  error: '#D55E00',
  info: '#56B4E9',
  // Grayscale
  dark: '#000000',
  medium: '#666666',
  light: '#BBBBBB',
  white: '#FFFFFF',
};

/**
 * Get color blind safe color
 */
export function getColorBlindSafeColor(
  semantic: keyof typeof colorBlindSafePalette
): string {
  return colorBlindSafePalette[semantic];
}

export default HighContrastProvider;
