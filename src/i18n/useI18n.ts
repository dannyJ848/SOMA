/**
 * useI18n Hook
 *
 * Custom hook for accessing i18n functionality in components.
 */

import { useContext, useCallback } from 'react';
import { I18nContext } from './I18nContext.js';
import type { TranslationNamespace, InterpolationValues } from './types.js';

/**
 * Hook for accessing i18n context
 * @throws Error if used outside of I18nProvider
 */
export function useI18n() {
  const context = useContext(I18nContext);

  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }

  return context;
}

/**
 * Hook for a simplified translation function with default namespace
 */
export function useTranslation(namespace?: TranslationNamespace) {
  const { t: translate, language, languageInfo } = useI18n();

  /**
   * Translation function with optional namespace override
   */
  const t = useCallback(
    (key: string, values?: InterpolationValues, overrideNamespace?: TranslationNamespace) => {
      return translate(key, overrideNamespace || namespace, values);
    },
    [translate, namespace]
  );

  return {
    t,
    language,
    languageInfo,
  };
}

/**
 * Hook specifically for common translations (most used)
 */
export function useCommonTranslation() {
  return useTranslation('common');
}

/**
 * Hook for navigation translations
 */
export function useNavigationTranslation() {
  return useTranslation('navigation');
}

/**
 * Hook for dashboard translations
 */
export function useDashboardTranslation() {
  return useTranslation('dashboard');
}

/**
 * Hook for symptom translations
 */
export function useSymptomsTranslation() {
  return useTranslation('symptoms');
}

/**
 * Hook for chat translations
 */
export function useChatTranslation() {
  return useTranslation('chat');
}

/**
 * Hook for settings translations
 */
export function useSettingsTranslation() {
  return useTranslation('settings');
}
