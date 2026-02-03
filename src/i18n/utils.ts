/**
 * i18n Utilities
 *
 * Helper functions for string interpolation, date/number formatting,
 * and pluralization.
 */

import type { InterpolationValues, PluralOptions, Language } from './types.js';

/**
 * Interpolate values into a translation string
 * Supports: {{key}} for simple substitution
 */
export function interpolate(
  template: string,
  values?: InterpolationValues
): string {
  if (!values) return template;

  return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
    const value = values[key];
    return value !== undefined ? String(value) : match;
  });
}

/**
 * Format a date according to the language/locale
 */
export function formatDate(
  date: Date | number | string,
  language: Language,
  options?: Intl.DateTimeFormatOptions
): string {
  const d = typeof date === 'string' ? new Date(date) : new Date(date);
  const locale = language === 'es' ? 'es-ES' : 'en-US';

  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    ...options,
  };

  return new Intl.DateTimeFormat(locale, defaultOptions).format(d);
}

/**
 * Format a time according to the language/locale
 */
export function formatTime(
  date: Date | number | string,
  language: Language,
  options?: Intl.DateTimeFormatOptions
): string {
  const d = typeof date === 'string' ? new Date(date) : new Date(date);
  const locale = language === 'es' ? 'es-ES' : 'en-US';

  const defaultOptions: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: '2-digit',
    ...options,
  };

  return new Intl.DateTimeFormat(locale, defaultOptions).format(d);
}

/**
 * Format a number according to the language/locale
 */
export function formatNumber(
  num: number,
  language: Language,
  options?: Intl.NumberFormatOptions
): string {
  const locale = language === 'es' ? 'es-ES' : 'en-US';
  return new Intl.NumberFormat(locale, options).format(num);
}

/**
 * Format relative time (e.g., "2 hours ago", "in 3 days")
 */
export function formatRelativeTime(
  date: Date | number | string,
  language: Language,
  now: Date = new Date()
): string {
  const d = typeof date === 'string' ? new Date(date) : new Date(date);
  const diffMs = now.getTime() - d.getTime();
  const diffSecs = Math.round(diffMs / 1000);
  const diffMins = Math.round(diffSecs / 60);
  const diffHours = Math.round(diffMins / 60);
  const diffDays = Math.round(diffHours / 24);
  const diffWeeks = Math.round(diffDays / 7);
  const diffMonths = Math.round(diffDays / 30);
  const diffYears = Math.round(diffDays / 365);

  const isPast = diffMs > 0;
  const locale = language === 'es' ? 'es-ES' : 'en-US';

  // Use Intl.RelativeTimeFormat if available
  if (typeof Intl !== 'undefined' && 'RelativeTimeFormat' in Intl) {
    const rtf = new (Intl as typeof Intl & {
      RelativeTimeFormat: typeof Intl.RelativeTimeFormat;
    }).RelativeTimeFormat(locale, { numeric: 'auto' });

    if (Math.abs(diffYears) >= 1) {
      return rtf.format(isPast ? -diffYears : diffYears, 'year');
    }
    if (Math.abs(diffMonths) >= 1) {
      return rtf.format(isPast ? -diffMonths : diffMonths, 'month');
    }
    if (Math.abs(diffWeeks) >= 1) {
      return rtf.format(isPast ? -diffWeeks : diffWeeks, 'week');
    }
    if (Math.abs(diffDays) >= 1) {
      return rtf.format(isPast ? -diffDays : diffDays, 'day');
    }
    if (Math.abs(diffHours) >= 1) {
      return rtf.format(isPast ? -diffHours : diffHours, 'hour');
    }
    if (Math.abs(diffMins) >= 1) {
      return rtf.format(isPast ? -diffMins : diffMins, 'minute');
    }
    return rtf.format(isPast ? -diffSecs : diffSecs, 'second');
  }

  // Fallback for browsers without RelativeTimeFormat
  const translations = {
    en: {
      justNow: 'just now',
      seconds: 'seconds',
      minutes: 'minutes',
      hours: 'hours',
      days: 'days',
      weeks: 'weeks',
      months: 'months',
      years: 'years',
      ago: 'ago',
      in: 'in',
    },
    es: {
      justNow: 'ahora mismo',
      seconds: 'segundos',
      minutes: 'minutos',
      hours: 'horas',
      days: 'días',
      weeks: 'semanas',
      months: 'meses',
      years: 'años',
      ago: 'hace',
      in: 'en',
    },
  };

  const t = translations[language];

  if (Math.abs(diffSecs) < 10) {
    return t.justNow;
  }
  if (Math.abs(diffYears) >= 1) {
    return isPast
      ? `${t.ago} ${diffYears} ${t.years}`
      : `${t.in} ${diffYears} ${t.years}`;
  }
  if (Math.abs(diffMonths) >= 1) {
    return isPast
      ? `${t.ago} ${diffMonths} ${t.months}`
      : `${t.in} ${diffMonths} ${t.months}`;
  }
  if (Math.abs(diffWeeks) >= 1) {
    return isPast
      ? `${t.ago} ${diffWeeks} ${t.weeks}`
      : `${t.in} ${diffWeeks} ${t.weeks}`;
  }
  if (Math.abs(diffDays) >= 1) {
    return isPast
      ? `${t.ago} ${diffDays} ${t.days}`
      : `${t.in} ${diffDays} ${t.days}`;
  }
  if (Math.abs(diffHours) >= 1) {
    return isPast
      ? `${t.ago} ${diffHours} ${t.hours}`
      : `${t.in} ${diffHours} ${t.hours}`;
  }
  if (Math.abs(diffMins) >= 1) {
    return isPast
      ? `${t.ago} ${diffMins} ${t.minutes}`
      : `${t.in} ${diffMins} ${t.minutes}`;
  }
  return isPast
    ? `${t.ago} ${diffSecs} ${t.seconds}`
    : `${t.in} ${diffSecs} ${t.seconds}`;
}

/**
 * Select plural form based on count
 * Simple English/Spanish pluralization (both use similar rules)
 */
export function pluralize(
  count: number,
  singular: string,
  plural: string,
  zero?: string
): string {
  if (count === 0 && zero) {
    return zero;
  }
  return count === 1 ? singular : plural;
}

/**
 * Get browser language preference
 */
export function detectBrowserLanguage(): Language {
  if (typeof navigator === 'undefined') return 'en';

  const browserLang = navigator.language || navigator.languages?.[0] || 'en';

  // Check for Spanish variants
  if (browserLang.toLowerCase().startsWith('es')) {
    return 'es';
  }

  // Default to English
  return 'en';
}

/**
 * Storage helpers for language persistence
 */
const STORAGE_KEY = 'biological-self-language';

export function saveLanguagePreference(language: Language): void {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, language);
  }
}

export function loadLanguagePreference(): Language | null {
  if (typeof localStorage !== 'undefined') {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'es') {
      return stored;
    }
  }
  return null;
}
