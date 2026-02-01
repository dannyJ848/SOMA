/**
 * useBilingualContent Hook
 *
 * Bridges the i18n system with educational content and the medical glossary,
 * so that all content displays properly switch between English and Spanish.
 *
 * Usage:
 *   const { localizedName, translateMedicalTerm, glossaryLookup } =
 *     useBilingualContent(educationalContent);
 */

import { useMemo, useCallback } from 'react';
import { useI18n } from '../i18n/useI18n.js';
import type { Language } from '../i18n/types.js';
import type { EducationalContent } from '../../core/content/types.js';
import {
  MEDICAL_TERMS_ES,
  translateTerm,
} from '../../core/i18n/medical-translations-es.js';
import {
  MEDICAL_GLOSSARY,
  type GlossaryEntry,
} from '../../core/i18n/medical-glossary.js';

// ── Pre-computed lookup maps (created once at module level) ────────────

/** Case-insensitive term -> GlossaryEntry map */
const glossaryByTerm: Map<string, GlossaryEntry> = new Map(
  MEDICAL_GLOSSARY.map((entry) => [entry.term.toLowerCase(), entry]),
);

/** Reverse map: Spanish translation -> English key (lowercase) */
const esTermToEnKey: Map<string, string> = new Map(
  Object.entries(MEDICAL_TERMS_ES).map(([en, es]) => [
    es.toLowerCase(),
    en.toLowerCase(),
  ]),
);

// ── Hook return type ───────────────────────────────────────────────────

export interface BilingualContentResult {
  /** The content name in the current language (falls back to English) */
  localizedName: string;
  /** Current language code */
  language: Language;
  /**
   * Translate a single medical term to the current language.
   * If the language is English the original term is returned.
   * If Spanish, the MEDICAL_TERMS_ES dictionary is consulted.
   * Returns the original term when no translation is found.
   */
  translateMedicalTerm: (term: string) => string;
  /**
   * Look up a term in the bilingual medical glossary.
   * Returns the plain-language description in the current language,
   * or undefined when the term is not in the glossary.
   */
  glossaryLookup: (term: string) => string | undefined;
  /**
   * Get the full GlossaryEntry for a term (both languages), or undefined.
   */
  getGlossaryEntry: (term: string) => GlossaryEntry | undefined;
  /**
   * Translate an array of medical terms to the current language.
   */
  translateTerms: (terms: string[]) => string[];
}

// ── Hook implementation ────────────────────────────────────────────────

/**
 * Hook that takes an optional EducationalContent object and returns
 * bilingual helpers tied to the current i18n language.
 *
 * Can also be called without content when you only need the medical-term
 * translation utilities.
 */
export function useBilingualContent(
  content?: EducationalContent | null,
): BilingualContentResult {
  const { language } = useI18n();

  // Resolve the display name for the content in the current language
  const localizedName = useMemo<string>(() => {
    if (!content) return '';

    if (language === 'es') {
      // Prefer the explicit nameEs field; fall back to dictionary lookup;
      // ultimate fallback is the English name.
      if (content.nameEs) return content.nameEs;
      const translated = translateTerm(content.name);
      return translated; // translateTerm returns the original if not found
    }

    return content.name;
  }, [content, language]);

  // Single-term translator
  const translateMedicalTerm = useCallback(
    (term: string): string => {
      if (language === 'en') return term;

      // Spanish: use the translations dictionary
      return translateTerm(term);
    },
    [language],
  );

  // Plain-language glossary lookup in the current language
  const glossaryLookup = useCallback(
    (term: string): string | undefined => {
      const entry = glossaryByTerm.get(term.toLowerCase());
      if (!entry) return undefined;
      return language === 'es' ? entry.plainES : entry.plainEN;
    },
    [language],
  );

  // Full glossary entry accessor
  const getGlossaryEntry = useCallback(
    (term: string): GlossaryEntry | undefined => {
      return glossaryByTerm.get(term.toLowerCase());
    },
    [],
  );

  // Batch translator
  const translateTerms = useCallback(
    (terms: string[]): string[] => {
      if (language === 'en') return terms;
      return terms.map((t) => translateTerm(t));
    },
    [language],
  );

  return {
    localizedName,
    language,
    translateMedicalTerm,
    glossaryLookup,
    getGlossaryEntry,
    translateTerms,
  };
}

export default useBilingualContent;
