/**
 * Translation Loader
 *
 * Dynamically loads translation files based on language and namespace.
 * Uses lazy loading to only load translations when needed.
 */

import type { Language, TranslationNamespace } from './types.js';

// Cache for loaded translations
const translationCache: Map<string, Record<string, string>> = new Map();

// Import map for each language
const translationModules: Record<
  Language,
  Record<TranslationNamespace, () => Promise<{ [key: string]: string }>>
> = {
  en: {
    common: async () => {
      const mod = await import('./translations/en/common.js');
      return mod.common;
    },
    navigation: async () => {
      const mod = await import('./translations/en/navigation.js');
      return mod.navigation;
    },
    dashboard: async () => {
      const mod = await import('./translations/en/dashboard.js');
      return mod.dashboard;
    },
    symptoms: async () => {
      const mod = await import('./translations/en/symptoms.js');
      return mod.symptoms;
    },
    anatomy: async () => {
      const mod = await import('./translations/en/anatomy.js');
      return mod.anatomy;
    },
    chat: async () => {
      const mod = await import('./translations/en/chat.js');
      return mod.chat;
    },
    medications: async () => {
      const mod = await import('./translations/en/medications.js');
      return mod.medications;
    },
    labs: async () => {
      const mod = await import('./translations/en/labs.js');
      return mod.labs;
    },
    settings: async () => {
      const mod = await import('./translations/en/settings.js');
      return mod.settings;
    },
    errors: async () => {
      const mod = await import('./translations/en/errors.js');
      return mod.errors;
    },
    onboarding: async () => {
      const mod = await import('./translations/en/onboarding.js');
      return mod.onboarding;
    },
    voice: async () => {
      const mod = await import('./translations/en/voice.js');
      return mod.voice;
    },
    complexity: async () => {
      const mod = await import('./translations/en/complexity.js');
      return mod.complexity;
    },
  },
  es: {
    common: async () => {
      const mod = await import('./translations/es/common.js');
      return mod.common;
    },
    navigation: async () => {
      const mod = await import('./translations/es/navigation.js');
      return mod.navigation;
    },
    dashboard: async () => {
      const mod = await import('./translations/es/dashboard.js');
      return mod.dashboard;
    },
    symptoms: async () => {
      const mod = await import('./translations/es/symptoms.js');
      return mod.symptoms;
    },
    anatomy: async () => {
      const mod = await import('./translations/es/anatomy.js');
      return mod.anatomy;
    },
    chat: async () => {
      const mod = await import('./translations/es/chat.js');
      return mod.chat;
    },
    medications: async () => {
      const mod = await import('./translations/es/medications.js');
      return mod.medications;
    },
    labs: async () => {
      const mod = await import('./translations/es/labs.js');
      return mod.labs;
    },
    settings: async () => {
      const mod = await import('./translations/es/settings.js');
      return mod.settings;
    },
    errors: async () => {
      const mod = await import('./translations/es/errors.js');
      return mod.errors;
    },
    onboarding: async () => {
      const mod = await import('./translations/es/onboarding.js');
      return mod.onboarding;
    },
    voice: async () => {
      const mod = await import('./translations/es/voice.js');
      return mod.voice;
    },
    complexity: async () => {
      const mod = await import('./translations/es/complexity.js');
      return mod.complexity;
    },
  },
};

/**
 * Load all translations for a language
 */
export async function loadTranslations(
  language: Language
): Promise<Record<string, string>> {
  const cacheKey = `${language}:all`;

  if (translationCache.has(cacheKey)) {
    return translationCache.get(cacheKey)!;
  }

  const namespaces = Object.keys(translationModules[language]) as TranslationNamespace[];
  const loadedTranslations: Record<string, string> = {};

  // Load all namespaces in parallel
  const results = await Promise.all(
    namespaces.map(async (namespace) => {
      try {
        const translations = await translationModules[language][namespace]();
        // Prefix keys with namespace
        const prefixed: Record<string, string> = {};
        for (const [key, value] of Object.entries(translations)) {
          prefixed[key] = value;
        }
        return prefixed;
      } catch (error) {
        console.warn(`Failed to load translations for ${language}/${namespace}:`, error);
        return {};
      }
    })
  );

  // Merge all translations
  for (const result of results) {
    Object.assign(loadedTranslations, result);
  }

  // Cache the result
  translationCache.set(cacheKey, loadedTranslations);

  return loadedTranslations;
}

/**
 * Get a specific translation
 */
export function getTranslation(
  translations: Record<string, string>,
  key: string,
  namespace?: TranslationNamespace
): string | undefined {
  // Try with namespace prefix first
  if (namespace) {
    const namespacedKey = `${namespace}.${key}`;
    if (translations[namespacedKey]) {
      return translations[namespacedKey];
    }
  }

  // Fall back to direct key lookup
  return translations[key];
}

/**
 * Clear translation cache (useful for testing or language switching)
 */
export function clearTranslationCache(): void {
  translationCache.clear();
}

/**
 * Preload translations for a language (useful for anticipated language switches)
 */
export function preloadTranslations(language: Language): void {
  // Don't await - let it load in background
  loadTranslations(language).catch((error) => {
    console.warn(`Failed to preload translations for ${language}:`, error);
  });
}
