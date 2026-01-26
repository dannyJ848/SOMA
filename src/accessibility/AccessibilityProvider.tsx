/**
 * Accessibility Provider
 *
 * Context provider for application-wide accessibility features:
 * - Reduced motion preference
 * - High contrast mode
 * - Screen reader announcements
 * - Focus management
 */

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { announce, announceError, prefersReducedMotion } from './index';

// ============================================
// Types
// ============================================

interface AccessibilitySettings {
  reducedMotion: boolean;
  highContrast: boolean;
  largeText: boolean;
  focusVisible: boolean;
}

interface AccessibilityContextValue {
  settings: AccessibilitySettings;
  setReducedMotion: (enabled: boolean) => void;
  setHighContrast: (enabled: boolean) => void;
  setLargeText: (enabled: boolean) => void;
  announce: (message: string, priority?: 'polite' | 'assertive') => void;
  announceError: (message: string) => void;
}

// ============================================
// Context
// ============================================

const AccessibilityContext = createContext<AccessibilityContextValue | null>(null);

// ============================================
// Provider
// ============================================

interface AccessibilityProviderProps {
  children: React.ReactNode;
}

export function AccessibilityProvider({ children }: AccessibilityProviderProps) {
  // Initialize settings from system preferences and localStorage
  const [settings, setSettings] = useState<AccessibilitySettings>(() => {
    const stored = localStorage.getItem('a11y-settings');
    const parsed = stored ? JSON.parse(stored) : {};

    return {
      reducedMotion: parsed.reducedMotion ?? prefersReducedMotion(),
      highContrast: parsed.highContrast ?? window.matchMedia('(prefers-contrast: high)').matches,
      largeText: parsed.largeText ?? false,
      focusVisible: true,
    };
  });

  // Sync settings to localStorage
  useEffect(() => {
    localStorage.setItem('a11y-settings', JSON.stringify(settings));
  }, [settings]);

  // Apply settings to document
  useEffect(() => {
    const root = document.documentElement;

    // Reduced motion class
    if (settings.reducedMotion) {
      root.classList.add('reduce-motion');
    } else {
      root.classList.remove('reduce-motion');
    }

    // High contrast class
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Large text class
    if (settings.largeText) {
      root.classList.add('large-text');
      root.style.fontSize = '125%';
    } else {
      root.classList.remove('large-text');
      root.style.fontSize = '';
    }
  }, [settings]);

  // Listen for system preference changes
  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const contrastQuery = window.matchMedia('(prefers-contrast: high)');

    const handleMotionChange = (e: MediaQueryListEvent) => {
      // Only update if user hasn't explicitly set a preference
      const stored = localStorage.getItem('a11y-settings');
      const parsed = stored ? JSON.parse(stored) : {};
      if (parsed.reducedMotion === undefined) {
        setSettings(prev => ({ ...prev, reducedMotion: e.matches }));
      }
    };

    const handleContrastChange = (e: MediaQueryListEvent) => {
      const stored = localStorage.getItem('a11y-settings');
      const parsed = stored ? JSON.parse(stored) : {};
      if (parsed.highContrast === undefined) {
        setSettings(prev => ({ ...prev, highContrast: e.matches }));
      }
    };

    motionQuery.addEventListener('change', handleMotionChange);
    contrastQuery.addEventListener('change', handleContrastChange);

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      contrastQuery.removeEventListener('change', handleContrastChange);
    };
  }, []);

  // Setting updaters
  const setReducedMotion = useCallback((enabled: boolean) => {
    setSettings(prev => ({ ...prev, reducedMotion: enabled }));
    announce(enabled ? 'Reduced motion enabled' : 'Reduced motion disabled');
  }, []);

  const setHighContrast = useCallback((enabled: boolean) => {
    setSettings(prev => ({ ...prev, highContrast: enabled }));
    announce(enabled ? 'High contrast mode enabled' : 'High contrast mode disabled');
  }, []);

  const setLargeText = useCallback((enabled: boolean) => {
    setSettings(prev => ({ ...prev, largeText: enabled }));
    announce(enabled ? 'Large text enabled' : 'Large text disabled');
  }, []);

  // Memoize context value
  const contextValue = useMemo<AccessibilityContextValue>(() => ({
    settings,
    setReducedMotion,
    setHighContrast,
    setLargeText,
    announce,
    announceError,
  }), [settings, setReducedMotion, setHighContrast, setLargeText]);

  return (
    <AccessibilityContext.Provider value={contextValue}>
      {/* Skip link - always first focusable element */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Live region for announcements */}
      <div
        id="a11y-announcements"
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      />

      {children}
    </AccessibilityContext.Provider>
  );
}

// ============================================
// Hook
// ============================================

export function useAccessibility(): AccessibilityContextValue {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
}

// ============================================
// Accessibility Settings Panel Component
// ============================================

interface AccessibilitySettingsPanelProps {
  onClose?: () => void;
}

export function AccessibilitySettingsPanel({ onClose }: AccessibilitySettingsPanelProps) {
  const { settings, setReducedMotion, setHighContrast, setLargeText } = useAccessibility();

  return (
    <div
      className="a11y-settings-panel"
      role="dialog"
      aria-label="Accessibility Settings"
      aria-modal="true"
    >
      <div className="a11y-settings-header">
        <h2 id="a11y-settings-title">Accessibility Settings</h2>
        {onClose && (
          <button
            onClick={onClose}
            className="a11y-settings-close"
            aria-label="Close accessibility settings"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      <div className="a11y-settings-body">
        <div className="a11y-setting">
          <label htmlFor="reduced-motion" className="a11y-setting-label">
            <span className="a11y-setting-title">Reduce Motion</span>
            <span className="a11y-setting-description">
              Minimize animations and transitions
            </span>
          </label>
          <input
            type="checkbox"
            id="reduced-motion"
            checked={settings.reducedMotion}
            onChange={(e) => setReducedMotion(e.target.checked)}
            className="a11y-setting-toggle"
          />
        </div>

        <div className="a11y-setting">
          <label htmlFor="high-contrast" className="a11y-setting-label">
            <span className="a11y-setting-title">High Contrast</span>
            <span className="a11y-setting-description">
              Increase color contrast for better visibility
            </span>
          </label>
          <input
            type="checkbox"
            id="high-contrast"
            checked={settings.highContrast}
            onChange={(e) => setHighContrast(e.target.checked)}
            className="a11y-setting-toggle"
          />
        </div>

        <div className="a11y-setting">
          <label htmlFor="large-text" className="a11y-setting-label">
            <span className="a11y-setting-title">Large Text</span>
            <span className="a11y-setting-description">
              Increase text size by 25%
            </span>
          </label>
          <input
            type="checkbox"
            id="large-text"
            checked={settings.largeText}
            onChange={(e) => setLargeText(e.target.checked)}
            className="a11y-setting-toggle"
          />
        </div>
      </div>

      <div className="a11y-settings-footer">
        <p className="a11y-settings-note">
          These settings are saved locally and will persist between sessions.
        </p>
      </div>
    </div>
  );
}

export default AccessibilityProvider;
