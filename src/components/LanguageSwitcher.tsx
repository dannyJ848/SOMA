/**
 * Language Switcher Component
 *
 * UI component for switching between English and Spanish.
 * Can be displayed as a dropdown, buttons, or inline toggle.
 */

import React, { useCallback } from 'react';
import { useI18n } from '../i18n/useI18n.js';
import type { Language, LanguageInfo } from '../i18n/types.js';

interface LanguageSwitcherProps {
  /** Display variant */
  variant?: 'dropdown' | 'buttons' | 'toggle' | 'minimal';
  /** Additional CSS class */
  className?: string;
  /** Show native names (e.g., "Español") or English names */
  showNativeNames?: boolean;
  /** Show flag icons */
  showFlags?: boolean;
  /** Callback when language changes */
  onChange?: (language: Language) => void;
}

/**
 * Language Switcher Component
 */
export function LanguageSwitcher({
  variant = 'dropdown',
  className = '',
  showNativeNames = true,
  showFlags = true,
  onChange,
}: LanguageSwitcherProps): React.ReactElement {
  const { language, setLanguage, languageInfo, availableLanguages, t } = useI18n();

  const handleLanguageChange = useCallback(
    (newLanguage: Language) => {
      setLanguage(newLanguage);
      onChange?.(newLanguage);
    },
    [setLanguage, onChange]
  );

  // Render dropdown variant
  if (variant === 'dropdown') {
    return (
      <div className={`language-switcher language-switcher--dropdown ${className}`}>
        <label htmlFor="language-select" className="sr-only">
          {t('language.select', 'common')}
        </label>
        <select
          id="language-select"
          value={language}
          onChange={(e) => handleLanguageChange(e.target.value as Language)}
          className="language-switcher__select"
          aria-label={t('language.select', 'common')}
        >
          {availableLanguages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {showFlags && `${lang.flag} `}
              {showNativeNames ? lang.nativeName : lang.name}
            </option>
          ))}
        </select>
      </div>
    );
  }

  // Render buttons variant
  if (variant === 'buttons') {
    return (
      <div className={`language-switcher language-switcher--buttons ${className}`}>
        {availableLanguages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`language-switcher__button ${
              language === lang.code ? 'language-switcher__button--active' : ''
            }`}
            aria-pressed={language === lang.code}
            aria-label={t('language.select', 'common')}
          >
            {showFlags && <span className="language-switcher__flag">{lang.flag}</span>}
            <span className="language-switcher__name">
              {showNativeNames ? lang.nativeName : lang.name}
            </span>
          </button>
        ))}
      </div>
    );
  }

  // Render toggle variant (switches between two languages)
  if (variant === 'toggle') {
    const otherLang = availableLanguages.find((l) => l.code !== language);

    return (
      <button
        onClick={() => otherLang && handleLanguageChange(otherLang.code)}
        className={`language-switcher language-switcher--toggle ${className}`}
        aria-label={`${t('language.select', 'common')}: ${otherLang?.nativeName}`}
        title={`Switch to ${otherLang?.nativeName}`}
      >
        {showFlags && (
          <>
            <span className="language-switcher__flag language-switcher__flag--current">
              {languageInfo.flag}
            </span>
            <span className="language-switcher__separator">→</span>
            <span className="language-switcher__flag language-switcher__flag--other">
              {otherLang?.flag}
            </span>
          </>
        )}
        {!showFlags && (
          <span className="language-switcher__toggle-text">
            {languageInfo.code.toUpperCase()} → {otherLang?.code.toUpperCase()}
          </span>
        )}
      </button>
    );
  }

  // Render minimal variant (just the current language, clickable)
  return (
    <button
      onClick={() => {
        const otherLang = availableLanguages.find((l) => l.code !== language);
        if (otherLang) handleLanguageChange(otherLang.code);
      }}
      className={`language-switcher language-switcher--minimal ${className}`}
      aria-label={t('language.select', 'common')}
      title={t('language.select', 'common')}
    >
      {showFlags && (
        <span className="language-switcher__flag">{languageInfo.flag}</span>
      )}
      <span className="language-switcher__code">{languageInfo.code.toUpperCase()}</span>
    </button>
  );
}

/**
 * Inline language toggle for compact UIs
 */
export function LanguageToggle({ className = '' }: { className?: string }): React.ReactElement {
  const { language, toggleLanguage, languageInfo } = useI18n();

  return (
    <button
      onClick={toggleLanguage}
      className={`language-toggle ${className}`}
      aria-label={`Current language: ${languageInfo.nativeName}. Click to toggle.`}
    >
      <span className="language-toggle__flag">{languageInfo.flag}</span>
      <span className="language-toggle__code">{language.toUpperCase()}</span>
    </button>
  );
}

/**
 * Language menu for navigation/header
 */
export function LanguageMenu({ className = '' }: { className?: string }): React.ReactElement {
  const { language, setLanguage, availableLanguages, t } = useI18n();
  const [isOpen, setIsOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);

  // Close on click outside
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={menuRef} className={`language-menu ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="language-menu__trigger"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {availableLanguages.find((l) => l.code === language)?.flag}
        <span className="language-menu__code">{language.toUpperCase()}</span>
        <svg
          className={`language-menu__arrow ${isOpen ? 'language-menu__arrow--open' : ''}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {isOpen && (
        <ul className="language-menu__dropdown" role="menu">
          {availableLanguages.map((lang) => (
            <li key={lang.code} role="none">
              <button
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`language-menu__item ${
                  language === lang.code ? 'language-menu__item--active' : ''
                }`}
                role="menuitem"
                aria-current={language === lang.code ? 'true' : undefined}
              >
                <span className="language-menu__flag">{lang.flag}</span>
                <span className="language-menu__name">{lang.nativeName}</span>
                {language === lang.code && (
                  <svg className="language-menu__check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LanguageSwitcher;
