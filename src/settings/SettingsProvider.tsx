/**
 * Settings Provider Component
 *
 * React context provider for the settings system.
 * Provides settings state and update functions to the entire app.
 */

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
  type ReactNode,
} from 'react';
import type {
  UserSettings,
  AppearanceSettings,
  LanguageSettings,
  ComplexityPreferences,
  PrivacySettings,
  NotificationSettings,
  AccessibilitySettings,
  HealthProfile,
  Theme,
  FontSize,
  ComplexityLevel,
} from './types';
import {
  DEFAULT_USER_SETTINGS,
  DEFAULT_APPEARANCE_SETTINGS,
  DEFAULT_LANGUAGE_SETTINGS,
  DEFAULT_COMPLEXITY_PREFERENCES,
  DEFAULT_PRIVACY_SETTINGS,
  DEFAULT_NOTIFICATION_SETTINGS,
  DEFAULT_ACCESSIBILITY_SETTINGS,
} from './types';
import {
  loadSettings,
  saveSettings,
  clearSettings,
  SETTINGS_VERSION,
} from './settingsStorage';
import { migrateSettings } from './settingsMigration';

// ============================================
// Context Types
// ============================================

export interface SettingsContextValue {
  // State
  settings: UserSettings;
  isLoading: boolean;
  error: string | null;
  lastSaved: Date | null;
  isInitialized: boolean;

  // General
  updateSettings: (partial: Partial<UserSettings>) => Promise<void>;
  resetSettings: () => Promise<void>;
  resetSection: <K extends keyof UserSettings>(section: K) => Promise<void>;

  // Appearance
  updateAppearance: (partial: Partial<AppearanceSettings>) => Promise<void>;
  setTheme: (theme: Theme) => Promise<void>;
  setFontSize: (size: FontSize) => Promise<void>;

  // Language
  updateLanguage: (partial: Partial<LanguageSettings>) => Promise<void>;

  // Complexity
  updateComplexity: (partial: Partial<ComplexityPreferences>) => Promise<void>;
  setComplexityLevel: (level: ComplexityLevel) => Promise<void>;

  // Privacy
  updatePrivacy: (partial: Partial<PrivacySettings>) => Promise<void>;

  // Notifications
  updateNotifications: (partial: Partial<NotificationSettings>) => Promise<void>;

  // Accessibility
  updateAccessibility: (partial: Partial<AccessibilitySettings>) => Promise<void>;

  // Health Profile
  updateHealthProfile: (partial: Partial<HealthProfile>) => Promise<void>;
}

// ============================================
// Context Creation
// ============================================

const SettingsContext = createContext<SettingsContextValue | null>(null);

// ============================================
// Provider Props
// ============================================

interface SettingsProviderProps {
  children: ReactNode;
  /** Initial settings to use (for testing or SSR) */
  initialSettings?: Partial<UserSettings>;
  /** Callback when settings change */
  onSettingsChange?: (settings: UserSettings) => void;
}

// ============================================
// Theme Application
// ============================================

function applyTheme(theme: Theme): void {
  const root = document.documentElement;

  let effectiveTheme = theme;
  if (theme === 'system') {
    effectiveTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  if (effectiveTheme === 'light') {
    root.style.setProperty('--bg-primary', '#ffffff');
    root.style.setProperty('--bg-secondary', '#f5f5f5');
    root.style.setProperty('--bg-tertiary', '#ebebeb');
    root.style.setProperty('--bg-card', '#ffffff');
    root.style.setProperty('--text-primary', '#1a1a1a');
    root.style.setProperty('--text-secondary', '#666666');
    root.style.setProperty('--text-tertiary', '#999999');
    root.style.setProperty('--border', '#e0e0e0');
    root.style.setProperty('--border-light', '#f0f0f0');
    root.style.setProperty('--shadow', 'rgba(0, 0, 0, 0.1)');
  } else {
    root.style.setProperty('--bg-primary', '#0a0a0a');
    root.style.setProperty('--bg-secondary', '#141414');
    root.style.setProperty('--bg-tertiary', '#1e1e1e');
    root.style.setProperty('--bg-card', '#1a1a1a');
    root.style.setProperty('--text-primary', '#ffffff');
    root.style.setProperty('--text-secondary', '#888888');
    root.style.setProperty('--text-tertiary', '#666666');
    root.style.setProperty('--border', '#2a2a2a');
    root.style.setProperty('--border-light', '#333333');
    root.style.setProperty('--shadow', 'rgba(0, 0, 0, 0.3)');
  }

  root.setAttribute('data-theme', effectiveTheme);
}

function applyFontSize(size: FontSize): void {
  const root = document.documentElement;
  const sizes: Record<FontSize, string> = {
    small: '14px',
    medium: '16px',
    large: '18px',
    'extra-large': '20px',
  };
  root.style.setProperty('--base-font-size', sizes[size]);
  root.style.fontSize = sizes[size];
}

function applyAccessibility(accessibility: AccessibilitySettings): void {
  const root = document.documentElement;

  // Reduce animations
  if (accessibility.reduceAnimations) {
    root.style.setProperty('--animation-duration', '0s');
    root.style.setProperty('--transition-duration', '0s');
    root.classList.add('reduce-motion');
  } else {
    root.style.setProperty('--animation-duration', '0.2s');
    root.style.setProperty('--transition-duration', '0.15s');
    root.classList.remove('reduce-motion');
  }

  // High contrast
  if (accessibility.highContrast) {
    root.classList.add('high-contrast');
  } else {
    root.classList.remove('high-contrast');
  }

  // Large click targets
  if (accessibility.largeClickTargets) {
    root.classList.add('large-targets');
    root.style.setProperty('--min-tap-target', '48px');
  } else {
    root.classList.remove('large-targets');
    root.style.setProperty('--min-tap-target', '36px');
  }

  // Focus indicators
  if (accessibility.focusIndicators) {
    root.classList.add('focus-visible');
  } else {
    root.classList.remove('focus-visible');
  }

  // Screen reader optimization
  if (accessibility.screenReaderOptimized) {
    root.setAttribute('role', 'application');
    root.setAttribute('aria-label', 'Biological Self Health Application');
  }
}

// ============================================
// Provider Component
// ============================================

export function SettingsProvider({
  children,
  initialSettings,
  onSettingsChange,
}: SettingsProviderProps) {
  const [settings, setSettings] = useState<UserSettings>(() => {
    // Load from storage or use defaults, with optional initial override
    const stored = loadSettings();
    const migrated = migrateSettings(stored);
    return { ...migrated, ...initialSettings };
  });

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize settings and apply theme
  useEffect(() => {
    const init = async () => {
      try {
        const stored = loadSettings();
        const migrated = migrateSettings(stored);
        const merged = { ...migrated, ...initialSettings };

        setSettings(merged);
        applyTheme(merged.appearance.theme);
        applyFontSize(merged.appearance.fontSize);
        applyAccessibility(merged.accessibility);

        setIsInitialized(true);
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Failed to initialize settings');
      } finally {
        setIsLoading(false);
      }
    };

    init();
  }, [initialSettings]);

  // Apply settings when they change
  useEffect(() => {
    if (isInitialized) {
      applyTheme(settings.appearance.theme);
      applyFontSize(settings.appearance.fontSize);
      applyAccessibility(settings.accessibility);
    }
  }, [
    settings.appearance.theme,
    settings.appearance.fontSize,
    settings.accessibility,
    isInitialized,
  ]);

  // Listen for system theme changes
  useEffect(() => {
    if (settings.appearance.theme !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      applyTheme('system');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [settings.appearance.theme]);

  // Persist and notify on change
  const persistSettings = useCallback(
    async (newSettings: UserSettings) => {
      const updated = {
        ...newSettings,
        lastUpdated: new Date().toISOString(),
        version: SETTINGS_VERSION,
      };

      saveSettings(updated);
      setSettings(updated);
      setLastSaved(new Date());

      if (onSettingsChange) {
        onSettingsChange(updated);
      }
    },
    [onSettingsChange]
  );

  // ============================================
  // Update Functions
  // ============================================

  const updateSettings = useCallback(
    async (partial: Partial<UserSettings>) => {
      try {
        setError(null);
        const newSettings = { ...settings, ...partial };
        await persistSettings(newSettings);
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Failed to update settings');
        throw e;
      }
    },
    [settings, persistSettings]
  );

  const resetSettings = useCallback(async () => {
    try {
      setError(null);
      clearSettings();
      await persistSettings(DEFAULT_USER_SETTINGS);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to reset settings');
      throw e;
    }
  }, [persistSettings]);

  const resetSection = useCallback(
    async <K extends keyof UserSettings>(section: K) => {
      try {
        setError(null);
        const defaults: Record<string, unknown> = {
          appearance: DEFAULT_APPEARANCE_SETTINGS,
          language: DEFAULT_LANGUAGE_SETTINGS,
          complexity: DEFAULT_COMPLEXITY_PREFERENCES,
          privacy: DEFAULT_PRIVACY_SETTINGS,
          notifications: DEFAULT_NOTIFICATION_SETTINGS,
          accessibility: DEFAULT_ACCESSIBILITY_SETTINGS,
        };

        if (section in defaults) {
          await updateSettings({ [section]: defaults[section] } as Partial<UserSettings>);
        }
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Failed to reset section');
        throw e;
      }
    },
    [updateSettings]
  );

  const updateAppearance = useCallback(
    async (partial: Partial<AppearanceSettings>) => {
      await updateSettings({
        appearance: { ...settings.appearance, ...partial },
      });
    },
    [settings.appearance, updateSettings]
  );

  const setTheme = useCallback(
    async (theme: Theme) => {
      await updateAppearance({ theme });
    },
    [updateAppearance]
  );

  const setFontSize = useCallback(
    async (fontSize: FontSize) => {
      await updateAppearance({ fontSize });
    },
    [updateAppearance]
  );

  const updateLanguage = useCallback(
    async (partial: Partial<LanguageSettings>) => {
      await updateSettings({
        language: { ...settings.language, ...partial },
      });
    },
    [settings.language, updateSettings]
  );

  const updateComplexity = useCallback(
    async (partial: Partial<ComplexityPreferences>) => {
      await updateSettings({
        complexity: { ...settings.complexity, ...partial },
      });
    },
    [settings.complexity, updateSettings]
  );

  const setComplexityLevel = useCallback(
    async (defaultLevel: ComplexityLevel) => {
      await updateComplexity({ defaultLevel });
    },
    [updateComplexity]
  );

  const updatePrivacy = useCallback(
    async (partial: Partial<PrivacySettings>) => {
      await updateSettings({
        privacy: { ...settings.privacy, ...partial },
      });
    },
    [settings.privacy, updateSettings]
  );

  const updateNotifications = useCallback(
    async (partial: Partial<NotificationSettings>) => {
      await updateSettings({
        notifications: { ...settings.notifications, ...partial },
      });
    },
    [settings.notifications, updateSettings]
  );

  const updateAccessibility = useCallback(
    async (partial: Partial<AccessibilitySettings>) => {
      await updateSettings({
        accessibility: { ...settings.accessibility, ...partial },
      });
    },
    [settings.accessibility, updateSettings]
  );

  const updateHealthProfile = useCallback(
    async (partial: Partial<HealthProfile>) => {
      await updateSettings({
        healthProfile: { ...settings.healthProfile, ...partial },
      });
    },
    [settings.healthProfile, updateSettings]
  );

  // ============================================
  // Context Value
  // ============================================

  const value = useMemo<SettingsContextValue>(
    () => ({
      settings,
      isLoading,
      error,
      lastSaved,
      isInitialized,
      updateSettings,
      resetSettings,
      resetSection,
      updateAppearance,
      setTheme,
      setFontSize,
      updateLanguage,
      updateComplexity,
      setComplexityLevel,
      updatePrivacy,
      updateNotifications,
      updateAccessibility,
      updateHealthProfile,
    }),
    [
      settings,
      isLoading,
      error,
      lastSaved,
      isInitialized,
      updateSettings,
      resetSettings,
      resetSection,
      updateAppearance,
      setTheme,
      setFontSize,
      updateLanguage,
      updateComplexity,
      setComplexityLevel,
      updatePrivacy,
      updateNotifications,
      updateAccessibility,
      updateHealthProfile,
    ]
  );

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}

// ============================================
// Hook
// ============================================

export function useSettingsContext(): SettingsContextValue {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettingsContext must be used within a SettingsProvider');
  }
  return context;
}

export default SettingsProvider;
