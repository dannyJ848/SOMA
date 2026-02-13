/**
 * Translation Utilities
 *
 * Helper functions for internationalization in Biological Self.
 * Provides utilities for accessing translations, interpolation, pluralization,
 * and medical terminology handling.
 */

import type {
  SupportedLanguage,
  TranslationBundle,
  TranslationContext,
  TranslationNamespace,
  PluralForms,
  SUPPORTED_LANGUAGES,
} from './types';

// =============================================================================
// TRANSLATION ACCESS UTILITIES
// =============================================================================

/**
 * Get a nested translation value by dot-notation key
 */
export function getTranslation(
  bundle: TranslationBundle,
  namespace: TranslationNamespace,
  key: string,
  context?: TranslationContext
): string {
  try {
    const namespaceData = bundle[namespace] as unknown as Record<string, unknown>;
    const keys = key.split('.');
    let value: unknown = namespaceData;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        console.warn(`Translation key not found: ${namespace}.${key}`);
        return key;
      }
    }

    if (typeof value === 'string') {
      return interpolate(value, context);
    }

    // Handle plural forms
    if (typeof value === 'object' && context?.count !== undefined) {
      return getPluralForm(value as PluralForms, context.count, bundle.language.code);
    }

    console.warn(`Invalid translation value for: ${namespace}.${key}`);
    return key;
  } catch (error) {
    console.error(`Error getting translation: ${namespace}.${key}`, error);
    return key;
  }
}

/**
 * Interpolate variables in a translation string
 */
export function interpolate(
  template: string,
  context?: TranslationContext
): string {
  if (!context?.interpolations) {
    return template;
  }

  let result = template;
  for (const [key, value] of Object.entries(context.interpolations)) {
    const regex = new RegExp(`\\{\\{\\s*${key}\\s*\\}\\}`, 'g');
    result = result.replace(regex, String(value));
  }

  return result;
}

/**
 * Get the appropriate plural form based on count
 */
export function getPluralForm(
  forms: PluralForms,
  count: number,
  language: SupportedLanguage
): string {
  // Spanish plural rules
  if (language === 'es') {
    if (count === 0 && forms.zero) return forms.zero;
    if (count === 1) return forms.one;
    return forms.other;
  }

  // English plural rules (default)
  if (count === 0 && forms.zero) return forms.zero;
  if (count === 1) return forms.one;
  return forms.other;
}

// =============================================================================
// LANGUAGE DETECTION & DEFAULTS
// =============================================================================

/**
 * Detect user's preferred language from browser
 */
export function detectBrowserLanguage(): SupportedLanguage {
  if (typeof navigator === 'undefined') {
    return 'en';
  }

  const browserLang = navigator.language || (navigator as any).userLanguage;
  const langCode = browserLang?.split('-')[0]?.toLowerCase();

  if (langCode === 'es') {
    return 'es';
  }

  return 'en';
}

/**
 * Get stored language preference
 */
export function getStoredLanguage(): SupportedLanguage | null {
  if (typeof localStorage === 'undefined') {
    return null;
  }

  const stored = localStorage.getItem('biological-self-language');
  if (stored === 'en' || stored === 'es') {
    return stored;
  }

  return null;
}

/**
 * Store language preference
 */
export function setStoredLanguage(language: SupportedLanguage): void {
  if (typeof localStorage === 'undefined') {
    return;
  }

  localStorage.setItem('biological-self-language', language);
}

/**
 * Get the effective language to use
 */
export function getEffectiveLanguage(): SupportedLanguage {
  const stored = getStoredLanguage();
  if (stored) {
    return stored;
  }

  return detectBrowserLanguage();
}

// =============================================================================
// MEDICAL TERMINOLOGY UTILITIES
// =============================================================================

/**
 * Format medical term with optional Latin name
 */
export function formatMedicalTerm(
  commonName: string,
  latinName?: string,
  showLatin: boolean = true
): string {
  if (latinName && showLatin) {
    return `${commonName} (${latinName})`;
  }
  return commonName;
}

/**
 * Format anatomical direction with example
 */
export function formatAnatomicalDirection(
  term: string,
  meaning: string,
  example?: string
): string {
  if (example) {
    return `${term}: ${meaning}. Ejemplo: ${example}`;
  }
  return `${term}: ${meaning}`;
}

/**
 * Format medication dosage with proper units
 */
export function formatDosage(
  amount: number,
  unit: string,
  frequency: string,
  language: SupportedLanguage
): string {
  const formattedAmount = new Intl.NumberFormat(language === 'es' ? 'es-ES' : 'en-US').format(amount);

  if (language === 'es') {
    return `${formattedAmount} ${unit} ${frequency}`;
  }

  return `${formattedAmount} ${unit} ${frequency}`;
}

/**
 * Format vital sign value with unit
 */
export function formatVitalSign(
  value: number,
  unit: string,
  language: SupportedLanguage
): string {
  const formattedValue = new Intl.NumberFormat(language === 'es' ? 'es-ES' : 'en-US', {
    maximumFractionDigits: 1,
  }).format(value);

  return `${formattedValue} ${unit}`;
}

/**
 * Format lab result with reference range
 */
export function formatLabResult(
  value: number,
  unit: string,
  normalRange: string,
  language: SupportedLanguage
): string {
  const formattedValue = new Intl.NumberFormat(language === 'es' ? 'es-ES' : 'en-US', {
    maximumFractionDigits: 2,
  }).format(value);

  if (language === 'es') {
    return `${formattedValue} ${unit} (Rango normal: ${normalRange})`;
  }

  return `${formattedValue} ${unit} (Normal range: ${normalRange})`;
}

// =============================================================================
// DATE & TIME FORMATTING
// =============================================================================

/**
 * Format date according to language
 */
export function formatDate(
  date: Date | string,
  language: SupportedLanguage,
  style: 'short' | 'medium' | 'long' | 'full' = 'medium'
): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const locale = language === 'es' ? 'es-ES' : 'en-US';

  const optionsMap: Record<typeof style, Intl.DateTimeFormatOptions> = {
    short: { month: 'numeric', day: 'numeric', year: '2-digit' },
    medium: { month: 'short', day: 'numeric', year: 'numeric' },
    long: { month: 'long', day: 'numeric', year: 'numeric' },
    full: { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' },
  };
  const options: Intl.DateTimeFormatOptions = optionsMap[style];

  return new Intl.DateTimeFormat(locale, options).format(dateObj);
}

/**
 * Format time according to language
 */
export function formatTime(
  date: Date | string,
  language: SupportedLanguage,
  includeSeconds: boolean = false
): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const locale = language === 'es' ? 'es-ES' : 'en-US';

  const options: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: '2-digit',
    ...(includeSeconds ? { second: '2-digit' } : {}),
  };

  return new Intl.DateTimeFormat(locale, options).format(dateObj);
}

/**
 * Format date and time together
 */
export function formatDateTime(
  date: Date | string,
  language: SupportedLanguage
): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const locale = language === 'es' ? 'es-ES' : 'en-US';

  const options: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  };

  return new Intl.DateTimeFormat(locale, options).format(dateObj);
}

/**
 * Format relative time (e.g., "2 hours ago")
 */
export function formatRelativeTime(
  date: Date | string,
  language: SupportedLanguage
): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffMs = now.getTime() - dateObj.getTime();
  const diffSecs = Math.floor(diffMs / 1000);
  const diffMins = Math.floor(diffSecs / 60);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);
  const diffWeeks = Math.floor(diffDays / 7);
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffDays / 365);

  const locale = language === 'es' ? 'es-ES' : 'en-US';
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });

  if (diffYears > 0) {
    return rtf.format(-diffYears, 'year');
  }
  if (diffMonths > 0) {
    return rtf.format(-diffMonths, 'month');
  }
  if (diffWeeks > 0) {
    return rtf.format(-diffWeeks, 'week');
  }
  if (diffDays > 0) {
    return rtf.format(-diffDays, 'day');
  }
  if (diffHours > 0) {
    return rtf.format(-diffHours, 'hour');
  }
  if (diffMins > 0) {
    return rtf.format(-diffMins, 'minute');
  }

  return rtf.format(-diffSecs, 'second');
}

// =============================================================================
// NUMBER FORMATTING
// =============================================================================

/**
 * Format number according to language
 */
export function formatNumber(
  value: number,
  language: SupportedLanguage,
  options?: Intl.NumberFormatOptions
): string {
  const locale = language === 'es' ? 'es-ES' : 'en-US';
  return new Intl.NumberFormat(locale, options).format(value);
}

/**
 * Format percentage
 */
export function formatPercentage(
  value: number,
  language: SupportedLanguage,
  decimals: number = 0
): string {
  const locale = language === 'es' ? 'es-ES' : 'en-US';
  return new Intl.NumberFormat(locale, {
    style: 'percent',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value / 100);
}

// =============================================================================
// TEXT UTILITIES
// =============================================================================

/**
 * Capitalize first letter of string (language-aware)
 */
export function capitalize(text: string): string {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Title case a string (language-aware)
 */
export function titleCase(text: string, language: SupportedLanguage): string {
  if (!text) return '';

  // Spanish articles/prepositions that should stay lowercase
  const spanishLowercase = ['de', 'del', 'la', 'el', 'los', 'las', 'un', 'una', 'y', 'o', 'e', 'en', 'con', 'por', 'para', 'al'];

  // English articles/prepositions that should stay lowercase
  const englishLowercase = ['a', 'an', 'the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by'];

  const lowercaseWords = language === 'es' ? spanishLowercase : englishLowercase;

  return text
    .toLowerCase()
    .split(' ')
    .map((word, index) => {
      if (index === 0 || !lowercaseWords.includes(word)) {
        return capitalize(word);
      }
      return word;
    })
    .join(' ');
}

/**
 * Get grammatically correct article for Spanish nouns
 */
export function getSpanishArticle(
  noun: string,
  definite: boolean = true,
  gender: 'masculine' | 'feminine' = 'masculine'
): string {
  if (definite) {
    return gender === 'masculine' ? 'el' : 'la';
  }
  return gender === 'masculine' ? 'un' : 'una';
}

/**
 * Get plural form of Spanish noun (basic rules)
 */
export function getSpanishPlural(singular: string): string {
  if (!singular) return '';

  const lastChar = singular.slice(-1).toLowerCase();
  const lastTwoChars = singular.slice(-2).toLowerCase();

  // Words ending in unstressed vowel or stressed a, e, o add -s
  if (['a', 'e', 'i', 'o', 'u'].includes(lastChar)) {
    return singular + 's';
  }

  // Words ending in stressed i or u add -es
  if (['i', 'u'].includes(lastChar)) {
    return singular + 'es';
  }

  // Words ending in consonant add -es
  if (!['a', 'e', 'i', 'o', 'u'].includes(lastChar)) {
    // Special case for -z endings: change z to c before adding -es
    if (lastChar === 'z') {
      return singular.slice(0, -1) + 'ces';
    }
    return singular + 'es';
  }

  return singular + 's';
}

// =============================================================================
// VALIDATION UTILITIES
// =============================================================================

/**
 * Check if a translation key exists in a bundle
 */
export function translationExists(
  bundle: TranslationBundle,
  namespace: TranslationNamespace,
  key: string
): boolean {
  try {
    const namespaceData = bundle[namespace] as unknown as Record<string, unknown>;
    const keys = key.split('.');
    let value: unknown = namespaceData;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return false;
      }
    }

    return typeof value === 'string' || typeof value === 'object';
  } catch {
    return false;
  }
}

/**
 * Get all missing translation keys between two bundles
 */
export function getMissingTranslations(
  reference: TranslationBundle,
  target: TranslationBundle,
  namespace: TranslationNamespace
): string[] {
  const missing: string[] = [];

  function checkKeys(refObj: unknown, targetObj: unknown, path: string = ''): void {
    if (typeof refObj === 'object' && refObj !== null) {
      for (const key of Object.keys(refObj)) {
        const newPath = path ? `${path}.${key}` : key;
        const refValue = (refObj as Record<string, unknown>)[key];
        const targetValue = targetObj && typeof targetObj === 'object'
          ? (targetObj as Record<string, unknown>)[key]
          : undefined;

        if (targetValue === undefined) {
          missing.push(`${namespace}.${newPath}`);
        } else {
          checkKeys(refValue, targetValue, newPath);
        }
      }
    }
  }

  checkKeys(reference[namespace], target[namespace]);
  return missing;
}

// =============================================================================
// EXPORT UTILITY FUNCTIONS
// =============================================================================

export const translationUtils = {
  getTranslation,
  interpolate,
  getPluralForm,
  detectBrowserLanguage,
  getStoredLanguage,
  setStoredLanguage,
  getEffectiveLanguage,
  formatMedicalTerm,
  formatAnatomicalDirection,
  formatDosage,
  formatVitalSign,
  formatLabResult,
  formatDate,
  formatTime,
  formatDateTime,
  formatRelativeTime,
  formatNumber,
  formatPercentage,
  capitalize,
  titleCase,
  getSpanishArticle,
  getSpanishPlural,
  translationExists,
  getMissingTranslations,
};
