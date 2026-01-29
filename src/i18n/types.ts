/**
 * Internationalization (i18n) Types
 *
 * Defines the type system for bilingual (English/Spanish) support
 * throughout the Biological Self application.
 */

// Supported languages
export type Language = 'en' | 'es';

// Language metadata
export interface LanguageInfo {
  code: Language;
  name: string;
  nativeName: string;
  flag: string;
  direction: 'ltr' | 'rtl';
}

// Available languages configuration
export const AVAILABLE_LANGUAGES: Record<Language, LanguageInfo> = {
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸',
    direction: 'ltr',
  },
  es: {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    flag: '🇪🇸',
    direction: 'ltr',
  },
};

// Default language
export const DEFAULT_LANGUAGE: Language = 'en';

// Storage key for persistence
export const LANGUAGE_STORAGE_KEY = 'biological-self-language';

// Translation namespaces for organization
export type TranslationNamespace =
  | 'common'      // Shared UI elements
  | 'navigation'  // Nav items, menus
  | 'dashboard'   // Dashboard widgets
  | 'symptoms'    // Symptom tracking
  | 'anatomy'     // 3D viewer
  | 'chat'        // AI chat interface
  | 'medications' // Medication management
  | 'labs'        // Lab results
  | 'settings'    // App settings
  | 'errors'      // Error messages
  | 'onboarding'  // First-time setup
  | 'voice'       // Voice commands
  | 'complexity'; // Complexity levels

// Interpolation values for dynamic translations
export type InterpolationValues = Record<string, string | number>;

// Translation function type
export type TFunction = (
  key: string,
  namespace?: TranslationNamespace,
  values?: InterpolationValues
) => string;

// i18n context value
export interface I18nContextValue {
  /** Current language */
  language: Language;
  /** Set language */
  setLanguage: (lang: Language) => void;
  /** Toggle between languages */
  toggleLanguage: () => void;
  /** Translation function */
  t: TFunction;
  /** Check if key exists */
  exists: (key: string, namespace?: TranslationNamespace) => boolean;
  /** Current language info */
  languageInfo: LanguageInfo;
  /** All available languages */
  availableLanguages: LanguageInfo[];
  /** Is the current language RTL */
  isRTL: boolean;
}

// Pluralization rules
export interface PluralOptions {
  count: number;
  singular: string;
  plural: string;
  zero?: string;
}

// Date/time formatting options
export interface FormatOptions {
  date?: Intl.DateTimeFormatOptions;
  time?: Intl.DateTimeFormatOptions;
  number?: Intl.NumberFormatOptions;
  relative?: boolean;
}
