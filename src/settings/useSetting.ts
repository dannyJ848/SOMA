/**
 * useSetting Hook
 *
 * A hook for accessing and updating individual settings values.
 * Provides a simplified interface for working with specific settings.
 */

import { useCallback, useMemo } from 'react';
import { useSettingsContext } from './SettingsProvider';
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
  ColorScheme,
  ComplexityLevel,
} from './types';

// ============================================
// Types
// ============================================

type NestedKeyOf<T> = T extends object
  ? {
      [K in keyof T]: K extends string
        ? T[K] extends object
          ? K | `${K}.${NestedKeyOf<T[K]>}`
          : K
        : never;
    }[keyof T]
  : never;

type SettingPath = NestedKeyOf<UserSettings>;

// ============================================
// Main Hook
// ============================================

/**
 * Access a single setting value with type safety
 */
export function useSetting<T>(path: string): [T | undefined, (value: T) => Promise<void>] {
  const { settings, updateSettings } = useSettingsContext();

  const value = useMemo(() => {
    const parts = path.split('.');
    let current: unknown = settings;

    for (const part of parts) {
      if (current && typeof current === 'object') {
        current = (current as Record<string, unknown>)[part];
      } else {
        return undefined;
      }
    }

    return current as T;
  }, [settings, path]);

  const setValue = useCallback(
    async (newValue: T) => {
      const parts = path.split('.');

      if (parts.length === 1) {
        await updateSettings({ [parts[0]]: newValue } as Partial<UserSettings>);
        return;
      }

      // For nested paths, we need to build the update object
      const section = parts[0] as keyof UserSettings;
      const sectionValue = settings[section];

      if (typeof sectionValue === 'object' && sectionValue !== null) {
        const updatedSection = setNestedValue(
          sectionValue as unknown as Record<string, unknown>,
          parts.slice(1),
          newValue
        );
        await updateSettings({ [section]: updatedSection } as Partial<UserSettings>);
      }
    },
    [path, settings, updateSettings]
  );

  return [value, setValue];
}

// ============================================
// Specialized Hooks
// ============================================

/**
 * Access theme setting
 */
export function useThemeSetting(): [Theme, (theme: Theme) => Promise<void>] {
  const { settings, setTheme } = useSettingsContext();
  return [settings.appearance.theme, setTheme];
}

/**
 * Access font size setting
 */
export function useFontSizeSetting(): [FontSize, (size: FontSize) => Promise<void>] {
  const { settings, setFontSize } = useSettingsContext();
  return [settings.appearance.fontSize, setFontSize];
}

/**
 * Access color scheme setting
 */
export function useColorSchemeSetting(): [ColorScheme, (scheme: ColorScheme) => Promise<void>] {
  const { settings, updateAppearance } = useSettingsContext();

  const setValue = useCallback(
    async (colorScheme: ColorScheme) => {
      await updateAppearance({ colorScheme });
    },
    [updateAppearance]
  );

  return [settings.appearance.colorScheme, setValue];
}

/**
 * Access complexity level setting
 */
export function useComplexityLevelSetting(): [ComplexityLevel, (level: ComplexityLevel) => Promise<void>] {
  const { settings, setComplexityLevel } = useSettingsContext();
  return [settings.complexity.defaultLevel, setComplexityLevel];
}

/**
 * Access language setting
 */
export function useLanguageSetting(): [string, (lang: 'en' | 'es') => Promise<void>] {
  const { settings, updateLanguage } = useSettingsContext();

  const setLanguage = useCallback(
    async (language: 'en' | 'es') => {
      await updateLanguage({ language });
    },
    [updateLanguage]
  );

  return [settings.language.language, setLanguage];
}

/**
 * Access reduce motion setting
 */
export function useReduceMotionSetting(): [boolean, (value: boolean) => Promise<void>] {
  const { settings, updateAccessibility } = useSettingsContext();

  const setValue = useCallback(
    async (reduceAnimations: boolean) => {
      await updateAccessibility({ reduceAnimations });
    },
    [updateAccessibility]
  );

  return [settings.accessibility.reduceAnimations, setValue];
}

/**
 * Access high contrast setting
 */
export function useHighContrastSetting(): [boolean, (value: boolean) => Promise<void>] {
  const { settings, updateAccessibility } = useSettingsContext();

  const setValue = useCallback(
    async (highContrast: boolean) => {
      await updateAccessibility({ highContrast });
    },
    [updateAccessibility]
  );

  return [settings.accessibility.highContrast, setValue];
}

/**
 * Access notifications enabled setting
 */
export function useNotificationsEnabledSetting(): [boolean, (value: boolean) => Promise<void>] {
  const { settings, updateNotifications } = useSettingsContext();

  const setValue = useCallback(
    async (globalEnabled: boolean) => {
      await updateNotifications({ globalEnabled });
    },
    [updateNotifications]
  );

  return [settings.notifications.globalEnabled, setValue];
}

/**
 * Access analytics setting
 */
export function useAnalyticsSetting(): [boolean, (value: boolean) => Promise<void>] {
  const { settings, updatePrivacy } = useSettingsContext();

  const setValue = useCallback(
    async (allowAnalytics: boolean) => {
      await updatePrivacy({ allowAnalytics });
    },
    [updatePrivacy]
  );

  return [settings.privacy.allowAnalytics, setValue];
}

// ============================================
// Section Hooks
// ============================================

/**
 * Access entire appearance section
 */
export function useAppearanceSettings(): [
  AppearanceSettings,
  (partial: Partial<AppearanceSettings>) => Promise<void>
] {
  const { settings, updateAppearance } = useSettingsContext();
  return [settings.appearance, updateAppearance];
}

/**
 * Access entire language section
 */
export function useLanguageSettings(): [
  LanguageSettings,
  (partial: Partial<LanguageSettings>) => Promise<void>
] {
  const { settings, updateLanguage } = useSettingsContext();
  return [settings.language, updateLanguage];
}

/**
 * Access entire complexity section
 */
export function useComplexitySettings(): [
  ComplexityPreferences,
  (partial: Partial<ComplexityPreferences>) => Promise<void>
] {
  const { settings, updateComplexity } = useSettingsContext();
  return [settings.complexity, updateComplexity];
}

/**
 * Access entire privacy section
 */
export function usePrivacySettings(): [
  PrivacySettings,
  (partial: Partial<PrivacySettings>) => Promise<void>
] {
  const { settings, updatePrivacy } = useSettingsContext();
  return [settings.privacy, updatePrivacy];
}

/**
 * Access entire notification section
 */
export function useNotificationSettings(): [
  NotificationSettings,
  (partial: Partial<NotificationSettings>) => Promise<void>
] {
  const { settings, updateNotifications } = useSettingsContext();
  return [settings.notifications, updateNotifications];
}

/**
 * Access entire accessibility section
 */
export function useAccessibilitySettings(): [
  AccessibilitySettings,
  (partial: Partial<AccessibilitySettings>) => Promise<void>
] {
  const { settings, updateAccessibility } = useSettingsContext();
  return [settings.accessibility, updateAccessibility];
}

/**
 * Access entire health profile section
 */
export function useHealthProfileSettings(): [
  HealthProfile,
  (partial: Partial<HealthProfile>) => Promise<void>
] {
  const { settings, updateHealthProfile } = useSettingsContext();
  return [settings.healthProfile, updateHealthProfile];
}

// ============================================
// Utility Functions
// ============================================

/**
 * Set a nested value in an object
 */
function setNestedValue(
  obj: Record<string, unknown>,
  path: string[],
  value: unknown
): Record<string, unknown> {
  const result = { ...obj };

  if (path.length === 1) {
    result[path[0]] = value;
    return result;
  }

  const [first, ...rest] = path;
  const nested = obj[first];

  if (typeof nested === 'object' && nested !== null) {
    result[first] = setNestedValue(nested as Record<string, unknown>, rest, value);
  } else {
    result[first] = setNestedValue({}, rest, value);
  }

  return result;
}

export default useSetting;
