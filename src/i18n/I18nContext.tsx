/**
 * I18n Context Provider
 *
 * Provides language state and translation functionality to the entire app.
 */

import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import type {
  Language,
  LanguageInfo,
  I18nContextValue,
  TranslationNamespace,
  InterpolationValues,
} from './types.js';
import {
  AVAILABLE_LANGUAGES,
  DEFAULT_LANGUAGE,
} from './types.js';
import { loadTranslations, getTranslation } from './loader.js';
import { interpolate, loadLanguagePreference, saveLanguagePreference } from './utils.js';

// Create context with undefined default
export const I18nContext = createContext<I18nContextValue | undefined>(undefined);

interface I18nProviderProps {
  children: ReactNode;
  /** Initial language (defaults to stored preference or browser language) */
  initialLanguage?: Language;
}

export function I18nProvider({
  children,
  initialLanguage,
}: I18nProviderProps): React.ReactElement {
  // Initialize language from props, localStorage, or browser detection
  const [language, setLanguageState] = useState<Language>(() => {
    if (initialLanguage && AVAILABLE_LANGUAGES[initialLanguage]) {
      return initialLanguage;
    }

    const stored = loadLanguagePreference();
    if (stored) {
      return stored;
    }

    // Default to English
    return DEFAULT_LANGUAGE;
  });

  // Store loaded translations
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(true);

  // Load translations when language changes
  useEffect(() => {
    let cancelled = false;

    async function load() {
      setIsLoading(true);
      try {
        const loaded = await loadTranslations(language);
        if (!cancelled) {
          setTranslations(loaded);
        }
      } catch (error) {
        console.error('Failed to load translations:', error);
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, [language]);

  // Set language with persistence
  const setLanguage = useCallback((newLanguage: Language) => {
    if (AVAILABLE_LANGUAGES[newLanguage]) {
      setLanguageState(newLanguage);
      saveLanguagePreference(newLanguage);

      // Update HTML lang attribute for accessibility
      if (typeof document !== 'undefined') {
        document.documentElement.lang = newLanguage;
      }
    }
  }, []);

  // Toggle between English and Spanish
  const toggleLanguage = useCallback(() => {
    setLanguage(language === 'en' ? 'es' : 'en');
  }, [language, setLanguage]);

  // Translation function
  const t = useCallback(
    (
      key: string,
      namespace?: TranslationNamespace,
      values?: InterpolationValues
    ): string => {
      if (isLoading) {
        // Return key as fallback during loading
        return key;
      }

      // Get translation
      let translation = getTranslation(translations, key, namespace);

      // Fallback to key if not found
      if (!translation) {
        // Try common namespace as last resort
        translation = getTranslation(translations, key, 'common') || key;
      }

      // Interpolate values
      return interpolate(translation, values);
    },
    [translations, isLoading]
  );

  // Check if key exists
  const exists = useCallback(
    (key: string, namespace?: TranslationNamespace): boolean => {
      return getTranslation(translations, key, namespace) !== undefined;
    },
    [translations]
  );

  // Get current language info
  const languageInfo = useMemo(() => AVAILABLE_LANGUAGES[language], [language]);

  // Get all available languages
  const availableLanguages = useMemo(
    () => Object.values(AVAILABLE_LANGUAGES),
    []
  );

  // Check if RTL (neither English nor Spanish are RTL, but prepared for future)
  const isRTL = useMemo(() => languageInfo.direction === 'rtl', [languageInfo]);

  // Context value
  const contextValue = useMemo<I18nContextValue>(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      t,
      exists,
      languageInfo,
      availableLanguages,
      isRTL,
    }),
    [language, setLanguage, toggleLanguage, t, exists, languageInfo, availableLanguages, isRTL]
  );

  // Set initial HTML lang attribute
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);

  return (
    <I18nContext.Provider value={contextValue}>
      {children}
    </I18nContext.Provider>
  );
}
