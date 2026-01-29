/**
 * i18n Module Index
 * Main entry point for internationalization functionality
 */

// Types
export type {
  Language,
  LanguageInfo,
  TranslationNamespace,
  InterpolationValues,
  TFunction,
  I18nContextValue,
  PluralOptions,
  FormatOptions,
} from './types.js';

// Constants
export {
  AVAILABLE_LANGUAGES,
  DEFAULT_LANGUAGE,
  LANGUAGE_STORAGE_KEY,
} from './types.js';

// Context and Provider
export { I18nContext, I18nProvider } from './I18nContext.js';

// Hook
export { useI18n } from './useI18n.js';

// Utilities
export {
  interpolate,
  formatDate,
  formatNumber,
  formatRelativeTime,
} from './utils.js';

// Translation loader
export { loadTranslations, getTranslation } from './loader.js';
