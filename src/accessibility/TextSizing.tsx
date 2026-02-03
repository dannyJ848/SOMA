/**
 * Text Sizing
 *
 * Components and utilities for adjustable text sizing.
 * Supports users who need larger or smaller text for readability.
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

// ============================================
// Types
// ============================================

type TextSizePreset = 'small' | 'normal' | 'large' | 'x-large' | 'xx-large';

interface TextSizeConfig {
  preset: TextSizePreset;
  scale: number;
  lineHeight: number;
  letterSpacing: number;
}

interface TextSizingContextValue {
  config: TextSizeConfig;
  setPreset: (preset: TextSizePreset) => void;
  setScale: (scale: number) => void;
  setLineHeight: (lineHeight: number) => void;
  setLetterSpacing: (letterSpacing: number) => void;
  increaseSize: () => void;
  decreaseSize: () => void;
  resetSize: () => void;
  canIncrease: boolean;
  canDecrease: boolean;
}

// ============================================
// Constants
// ============================================

const PRESET_CONFIGS: Record<TextSizePreset, Omit<TextSizeConfig, 'preset'>> = {
  small: { scale: 0.875, lineHeight: 1.4, letterSpacing: 0 },
  normal: { scale: 1, lineHeight: 1.5, letterSpacing: 0 },
  large: { scale: 1.25, lineHeight: 1.6, letterSpacing: 0.01 },
  'x-large': { scale: 1.5, lineHeight: 1.7, letterSpacing: 0.02 },
  'xx-large': { scale: 2, lineHeight: 1.8, letterSpacing: 0.03 },
};

const PRESET_ORDER: TextSizePreset[] = ['small', 'normal', 'large', 'x-large', 'xx-large'];

const MIN_SCALE = 0.5;
const MAX_SCALE = 3;
const SCALE_STEP = 0.1;

// ============================================
// Context
// ============================================

const TextSizingContext = createContext<TextSizingContextValue | null>(null);

// ============================================
// Provider
// ============================================

interface TextSizingProviderProps {
  children: React.ReactNode;
  defaultPreset?: TextSizePreset;
  persistSettings?: boolean;
}

/**
 * Provider for text sizing settings
 */
export function TextSizingProvider({
  children,
  defaultPreset = 'normal',
  persistSettings = true,
}: TextSizingProviderProps) {
  // Initialize from localStorage or defaults
  const [config, setConfig] = useState<TextSizeConfig>(() => {
    if (typeof window === 'undefined') {
      return { preset: defaultPreset, ...PRESET_CONFIGS[defaultPreset] };
    }

    if (persistSettings) {
      const stored = localStorage.getItem('text-sizing-config');
      if (stored) {
        try {
          return JSON.parse(stored);
        } catch {
          // Fall through to default
        }
      }
    }

    return { preset: defaultPreset, ...PRESET_CONFIGS[defaultPreset] };
  });

  // Sync to localStorage
  useEffect(() => {
    if (persistSettings) {
      localStorage.setItem('text-sizing-config', JSON.stringify(config));
    }
  }, [config, persistSettings]);

  // Apply settings to document
  useEffect(() => {
    const root = document.documentElement;

    root.style.setProperty('--text-scale', String(config.scale));
    root.style.setProperty('--text-line-height', String(config.lineHeight));
    root.style.setProperty('--text-letter-spacing', `${config.letterSpacing}em`);
    root.style.fontSize = `${config.scale * 100}%`;

    // Add class for preset
    PRESET_ORDER.forEach((preset) => {
      root.classList.remove(`text-size-${preset}`);
    });
    root.classList.add(`text-size-${config.preset}`);
  }, [config]);

  const setPreset = useCallback((preset: TextSizePreset) => {
    setConfig({
      preset,
      ...PRESET_CONFIGS[preset],
    });
    announce(`Text size: ${preset}`);
  }, []);

  const setScale = useCallback((scale: number) => {
    const clampedScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, scale));
    setConfig((prev) => ({
      ...prev,
      preset: 'normal', // Reset preset when manually adjusting
      scale: clampedScale,
    }));
    announce(`Text scale: ${Math.round(clampedScale * 100)}%`);
  }, []);

  const setLineHeight = useCallback((lineHeight: number) => {
    setConfig((prev) => ({
      ...prev,
      lineHeight: Math.max(1, Math.min(3, lineHeight)),
    }));
  }, []);

  const setLetterSpacing = useCallback((letterSpacing: number) => {
    setConfig((prev) => ({
      ...prev,
      letterSpacing: Math.max(-0.1, Math.min(0.5, letterSpacing)),
    }));
  }, []);

  const increaseSize = useCallback(() => {
    const currentIndex = PRESET_ORDER.indexOf(config.preset);
    if (currentIndex < PRESET_ORDER.length - 1) {
      setPreset(PRESET_ORDER[currentIndex + 1]);
    } else if (config.scale < MAX_SCALE) {
      setScale(config.scale + SCALE_STEP);
    }
  }, [config, setPreset, setScale]);

  const decreaseSize = useCallback(() => {
    const currentIndex = PRESET_ORDER.indexOf(config.preset);
    if (currentIndex > 0) {
      setPreset(PRESET_ORDER[currentIndex - 1]);
    } else if (config.scale > MIN_SCALE) {
      setScale(config.scale - SCALE_STEP);
    }
  }, [config, setPreset, setScale]);

  const resetSize = useCallback(() => {
    setPreset('normal');
    announce('Text size reset to normal');
  }, [setPreset]);

  const currentIndex = PRESET_ORDER.indexOf(config.preset);
  const canIncrease = currentIndex < PRESET_ORDER.length - 1 || config.scale < MAX_SCALE;
  const canDecrease = currentIndex > 0 || config.scale > MIN_SCALE;

  const contextValue = useMemo<TextSizingContextValue>(
    () => ({
      config,
      setPreset,
      setScale,
      setLineHeight,
      setLetterSpacing,
      increaseSize,
      decreaseSize,
      resetSize,
      canIncrease,
      canDecrease,
    }),
    [
      config,
      setPreset,
      setScale,
      setLineHeight,
      setLetterSpacing,
      increaseSize,
      decreaseSize,
      resetSize,
      canIncrease,
      canDecrease,
    ]
  );

  return (
    <TextSizingContext.Provider value={contextValue}>
      {children}
    </TextSizingContext.Provider>
  );
}

// ============================================
// Hook
// ============================================

/**
 * Hook to access text sizing settings
 */
export function useTextSizing(): TextSizingContextValue {
  const context = useContext(TextSizingContext);
  if (!context) {
    throw new Error('useTextSizing must be used within a TextSizingProvider');
  }
  return context;
}

// ============================================
// Text Size Controls Component
// ============================================

interface TextSizeControlsProps {
  showReset?: boolean;
  showPercentage?: boolean;
  layout?: 'horizontal' | 'vertical' | 'compact';
  className?: string;
}

/**
 * Controls for adjusting text size
 */
export function TextSizeControls({
  showReset = true,
  showPercentage = true,
  layout = 'horizontal',
  className = '',
}: TextSizeControlsProps) {
  const {
    config,
    increaseSize,
    decreaseSize,
    resetSize,
    canIncrease,
    canDecrease,
  } = useTextSizing();

  const percentage = Math.round(config.scale * 100);

  return (
    <div
      className={`text-size-controls text-size-controls--${layout} ${className}`}
      role="group"
      aria-label="Text size controls"
    >
      <button
        type="button"
        onClick={decreaseSize}
        disabled={!canDecrease}
        className="text-size-btn text-size-btn--decrease"
        aria-label="Decrease text size"
        title="Decrease text size"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M4 12h16" />
        </svg>
        {layout !== 'compact' && (
          <span className="text-size-btn-label">Smaller</span>
        )}
      </button>

      {showPercentage && (
        <span
          className="text-size-percentage"
          aria-live="polite"
          aria-atomic="true"
        >
          {percentage}%
        </span>
      )}

      <button
        type="button"
        onClick={increaseSize}
        disabled={!canIncrease}
        className="text-size-btn text-size-btn--increase"
        aria-label="Increase text size"
        title="Increase text size"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M12 4v16M4 12h16" />
        </svg>
        {layout !== 'compact' && (
          <span className="text-size-btn-label">Larger</span>
        )}
      </button>

      {showReset && (
        <button
          type="button"
          onClick={resetSize}
          className="text-size-btn text-size-btn--reset"
          aria-label="Reset text size to default"
          title="Reset text size"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
          </svg>
          {layout !== 'compact' && (
            <span className="text-size-btn-label">Reset</span>
          )}
        </button>
      )}
    </div>
  );
}

// ============================================
// Text Size Preset Selector Component
// ============================================

interface TextSizePresetSelectorProps {
  className?: string;
  layout?: 'buttons' | 'dropdown' | 'slider';
}

/**
 * Preset selector for text sizes
 */
export function TextSizePresetSelector({
  className = '',
  layout = 'buttons',
}: TextSizePresetSelectorProps) {
  const { config, setPreset } = useTextSizing();

  const presetLabels: Record<TextSizePreset, string> = {
    small: 'Small',
    normal: 'Normal',
    large: 'Large',
    'x-large': 'Extra Large',
    'xx-large': 'Maximum',
  };

  if (layout === 'dropdown') {
    return (
      <div className={`text-size-preset-selector text-size-preset-selector--dropdown ${className}`}>
        <label htmlFor="text-size-preset" className="text-size-preset-label">
          Text Size
        </label>
        <select
          id="text-size-preset"
          value={config.preset}
          onChange={(e) => setPreset(e.target.value as TextSizePreset)}
          className="text-size-preset-select"
        >
          {PRESET_ORDER.map((preset) => (
            <option key={preset} value={preset}>
              {presetLabels[preset]}
            </option>
          ))}
        </select>
      </div>
    );
  }

  if (layout === 'slider') {
    const presetIndex = PRESET_ORDER.indexOf(config.preset);

    return (
      <div className={`text-size-preset-selector text-size-preset-selector--slider ${className}`}>
        <label htmlFor="text-size-slider" className="text-size-preset-label">
          Text Size: {presetLabels[config.preset]}
        </label>
        <input
          type="range"
          id="text-size-slider"
          min={0}
          max={PRESET_ORDER.length - 1}
          step={1}
          value={presetIndex}
          onChange={(e) => setPreset(PRESET_ORDER[parseInt(e.target.value, 10)])}
          className="text-size-preset-slider"
          aria-valuetext={presetLabels[config.preset]}
        />
        <div className="text-size-preset-marks" aria-hidden="true">
          {PRESET_ORDER.map((preset) => (
            <span
              key={preset}
              className={`text-size-preset-mark ${config.preset === preset ? 'active' : ''}`}
            >
              {presetLabels[preset].charAt(0)}
            </span>
          ))}
        </div>
      </div>
    );
  }

  // Default: buttons layout
  return (
    <fieldset
      className={`text-size-preset-selector text-size-preset-selector--buttons ${className}`}
    >
      <legend className="text-size-preset-legend">Text Size</legend>
      <div className="text-size-preset-group" role="radiogroup">
        {PRESET_ORDER.map((preset) => (
          <label
            key={preset}
            className={`text-size-preset-option ${
              config.preset === preset ? 'text-size-preset-option--selected' : ''
            }`}
          >
            <input
              type="radio"
              name="text-size-preset"
              value={preset}
              checked={config.preset === preset}
              onChange={() => setPreset(preset)}
              className="text-size-preset-input"
            />
            <span
              className="text-size-preset-button"
              style={{ fontSize: `${PRESET_CONFIGS[preset].scale}em` }}
            >
              A
            </span>
            <span className="text-size-preset-name">{presetLabels[preset]}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

// ============================================
// Advanced Text Settings Component
// ============================================

interface AdvancedTextSettingsProps {
  className?: string;
}

/**
 * Advanced text settings including line height and letter spacing
 */
export function AdvancedTextSettings({ className = '' }: AdvancedTextSettingsProps) {
  const { config, setScale, setLineHeight, setLetterSpacing, resetSize } = useTextSizing();

  return (
    <div className={`advanced-text-settings ${className}`}>
      <h3 className="advanced-text-settings-title">Advanced Text Settings</h3>

      <div className="advanced-text-setting">
        <label htmlFor="text-scale-slider">
          Text Scale: {Math.round(config.scale * 100)}%
        </label>
        <input
          type="range"
          id="text-scale-slider"
          min={MIN_SCALE * 100}
          max={MAX_SCALE * 100}
          step={SCALE_STEP * 100}
          value={config.scale * 100}
          onChange={(e) => setScale(parseInt(e.target.value, 10) / 100)}
        />
      </div>

      <div className="advanced-text-setting">
        <label htmlFor="line-height-slider">
          Line Height: {config.lineHeight.toFixed(1)}
        </label>
        <input
          type="range"
          id="line-height-slider"
          min={1}
          max={3}
          step={0.1}
          value={config.lineHeight}
          onChange={(e) => setLineHeight(parseFloat(e.target.value))}
        />
      </div>

      <div className="advanced-text-setting">
        <label htmlFor="letter-spacing-slider">
          Letter Spacing: {(config.letterSpacing * 100).toFixed(0)}%
        </label>
        <input
          type="range"
          id="letter-spacing-slider"
          min={-10}
          max={50}
          step={1}
          value={config.letterSpacing * 100}
          onChange={(e) => setLetterSpacing(parseInt(e.target.value, 10) / 100)}
        />
      </div>

      <button
        type="button"
        onClick={resetSize}
        className="advanced-text-settings-reset"
      >
        Reset All Settings
      </button>
    </div>
  );
}

// ============================================
// Responsive Text Component
// ============================================

interface ResponsiveTextProps {
  children: React.ReactNode;
  as?: React.ElementType<React.HTMLAttributes<HTMLElement> & { style?: React.CSSProperties }>;
  minScale?: number;
  maxScale?: number;
  className?: string;
}

/**
 * Text component that scales with user preferences
 */
export function ResponsiveText({
  children,
  as: Component = 'p',
  minScale,
  maxScale,
  className = '',
}: ResponsiveTextProps) {
  const { config } = useTextSizing();

  const scale = useMemo(() => {
    let s = config.scale;
    if (minScale !== undefined) s = Math.max(minScale, s);
    if (maxScale !== undefined) s = Math.min(maxScale, s);
    return s;
  }, [config.scale, minScale, maxScale]);

  const style: React.CSSProperties = {
    fontSize: `${scale}em`,
    lineHeight: config.lineHeight,
    letterSpacing: `${config.letterSpacing}em`,
  };

  return (
    <Component className={`responsive-text ${className}`} style={style}>
      {children}
    </Component>
  );
}

export default TextSizingProvider;
