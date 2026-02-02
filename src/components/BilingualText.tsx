/**
 * BilingualText Component
 *
 * Renders text in the current language with optional support for
 * showing both languages simultaneously (via hover tooltip or inline toggle).
 * Uses the medical glossary for term translations.
 *
 * Usage:
 *   <BilingualText en="Heart" es="Corazon" />
 *   <BilingualText term="Myocardial infarction" showBoth />
 *   <BilingualText en="Heart" es="Corazon" mode="hover" />
 */

import React, { useState, useMemo, useCallback } from 'react';
import { useI18n } from '../i18n/useI18n.js';
import type { Language } from '../i18n/types.js';
import { translateTerm } from '../../core/i18n/medical-translations-es.js';
import {
  MEDICAL_GLOSSARY,
  type GlossaryEntry,
} from '../../core/i18n/medical-glossary.js';

// ── Glossary lookup (module-level, built once) ─────────────────────────

const glossaryByTerm: Map<string, GlossaryEntry> = new Map(
  MEDICAL_GLOSSARY.map((entry) => [entry.term.toLowerCase(), entry]),
);

// ── Props ──────────────────────────────────────────────────────────────

export interface BilingualTextProps {
  /** English text. If omitted, derived from `term` via the glossary/dictionary. */
  en?: string;
  /** Spanish text. If omitted, derived from `term` via the glossary/dictionary. */
  es?: string;
  /**
   * A medical term to look up automatically.
   * When provided, `en` and `es` are resolved from the medical glossary
   * (plain-language descriptions) or the translation dictionary.
   * Explicit `en`/`es` props take precedence over the lookup.
   */
  term?: string;
  /**
   * How both languages are exposed to the user:
   * - "auto"   : only shows the current language (default)
   * - "hover"  : shows the alternate language in a tooltip on hover
   * - "toggle" : renders a small inline toggle to flip between languages
   * - "both"   : always renders both languages (primary bold, secondary muted)
   */
  mode?: 'auto' | 'hover' | 'toggle' | 'both';
  /** Shorthand for mode="both" */
  showBoth?: boolean;
  /** Additional CSS class name */
  className?: string;
  /** Additional inline styles */
  style?: React.CSSProperties;
}

// ── Resolve texts helper ───────────────────────────────────────────────

interface ResolvedTexts {
  en: string;
  es: string;
}

function resolveTexts(
  en: string | undefined,
  es: string | undefined,
  term: string | undefined,
): ResolvedTexts {
  let resolvedEN = en ?? '';
  let resolvedES = es ?? '';

  if (term) {
    // Try glossary first (plain-language descriptions)
    const entry = glossaryByTerm.get(term.toLowerCase());
    if (entry) {
      if (!resolvedEN) resolvedEN = entry.plainEN;
      if (!resolvedES) resolvedES = entry.plainES;
    }

    // Fall back to translation dictionary for missing parts
    if (!resolvedEN) resolvedEN = term;
    if (!resolvedES) resolvedES = translateTerm(term);
  }

  // Last resort: mirror what we have
  if (!resolvedEN && resolvedES) resolvedEN = resolvedES;
  if (!resolvedES && resolvedEN) resolvedES = translateTerm(resolvedEN);

  return { en: resolvedEN, es: resolvedES };
}

// ── Component ──────────────────────────────────────────────────────────

export function BilingualText({
  en,
  es,
  term,
  mode: modeProp,
  showBoth = false,
  className = '',
  style,
}: BilingualTextProps): React.ReactElement {
  const { language } = useI18n();

  const mode = showBoth ? 'both' : (modeProp ?? 'auto');

  const resolved = useMemo(
    () => resolveTexts(en, es, term),
    [en, es, term],
  );

  // For the "toggle" mode we let the user flip locally
  const [localLang, setLocalLang] = useState<Language>(language);

  // Keep local toggle in sync when the global language changes
  // (useEffect not needed; we derive on render to avoid stale state)
  const effectiveLang = mode === 'toggle' ? localLang : language;

  const primaryText = effectiveLang === 'es' ? resolved.es : resolved.en;
  const secondaryText = effectiveLang === 'es' ? resolved.en : resolved.es;
  const secondaryLabel = effectiveLang === 'es' ? 'EN' : 'ES';

  const handleToggle = useCallback(() => {
    setLocalLang((prev) => (prev === 'en' ? 'es' : 'en'));
  }, []);

  // ── Render: auto ───────────────────────────────────────────────────
  if (mode === 'auto') {
    return (
      <span className={`bilingual-text bilingual-text--auto ${className}`} style={style}>
        {primaryText}
      </span>
    );
  }

  // ── Render: hover ──────────────────────────────────────────────────
  if (mode === 'hover') {
    return (
      <span
        className={`bilingual-text bilingual-text--hover ${className}`}
        style={{ ...style, cursor: 'help' }}
        title={`${secondaryLabel}: ${secondaryText}`}
        aria-label={`${primaryText} (${secondaryLabel}: ${secondaryText})`}
      >
        {primaryText}
      </span>
    );
  }

  // ── Render: toggle ─────────────────────────────────────────────────
  if (mode === 'toggle') {
    return (
      <span className={`bilingual-text bilingual-text--toggle ${className}`} style={style}>
        <span className="bilingual-text__primary">{primaryText}</span>
        <button
          type="button"
          className="bilingual-text__toggle-btn"
          onClick={handleToggle}
          aria-label={`Show in ${secondaryLabel === 'EN' ? 'English' : 'Spanish'}`}
          style={{
            marginLeft: '0.35em',
            fontSize: '0.7em',
            verticalAlign: 'super',
            background: 'none',
            border: '1px solid currentColor',
            borderRadius: '3px',
            padding: '0 0.3em',
            cursor: 'pointer',
            opacity: 0.65,
            lineHeight: 1.4,
          }}
        >
          {secondaryLabel}
        </button>
      </span>
    );
  }

  // ── Render: both ───────────────────────────────────────────────────
  return (
    <span className={`bilingual-text bilingual-text--both ${className}`} style={style}>
      <span className="bilingual-text__primary" style={{ fontWeight: 600 }}>
        {primaryText}
      </span>
      <span
        className="bilingual-text__secondary"
        style={{ marginLeft: '0.4em', opacity: 0.7, fontStyle: 'italic' }}
      >
        ({secondaryText})
      </span>
    </span>
  );
}

export default BilingualText;
