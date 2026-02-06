/**
 * LanguageSelector.tsx - Language Selection Component
 * 
 * Allows users to select their preferred language with visual indicators
 * for translation completeness and native language names.
 */

import React, { useState, useEffect, useRef } from 'react';
import {
  getAvailableLanguages,
  getCurrentLanguage,
  setLanguage,
  type SupportedLanguage,
} from '../../../../core/i18n';

interface LanguageOption {
  code: SupportedLanguage;
  name: string;
  nativeName: string;
  completionPercentage: number;
  isRTL: boolean;
  flag: string;
}

export interface LanguageSelectorProps {
  variant?: 'dropdown' | 'buttons' | 'minimal';
  showProgress?: boolean;
  showFlags?: boolean;
  onLanguageChange?: (language: SupportedLanguage) => void;
  className?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  variant = 'dropdown',
  showProgress = true,
  showFlags = true,
  onLanguageChange,
  className = '',
}) => {
  const [currentLang, setCurrentLang] = useState<SupportedLanguage>(getCurrentLanguage());
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: LanguageOption[] = getAvailableLanguages().map((lang) => ({
    ...lang,
    flag: getFlagEmoji(lang.code),
  }));

  const currentLanguage = languages.find((l) => l.code === currentLang);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageSelect = async (code: SupportedLanguage) => {
    if (code === currentLang) {
      setIsOpen(false);
      return;
    }

    setIsLoading(true);
    const success = await setLanguage(code);
    
    if (success) {
      setCurrentLang(code);
      onLanguageChange?.(code);
    }
    
    setIsLoading(false);
    setIsOpen(false);
  };

  if (variant === 'minimal') {
    return (
      <select
        value={currentLang}
        onChange={(e) => handleLanguageSelect(e.target.value as SupportedLanguage)}
        disabled={isLoading}
        className={`language-selector-minimal ${className}`}
        aria-label="Select language"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {showFlags && `${lang.flag} `}
            {lang.nativeName}
            {showProgress && lang.completionPercentage < 100 && ` (${lang.completionPercentage}%)`}
          </option>
        ))}
      </select>
    );
  }

  if (variant === 'buttons') {
    return (
      <div className={`language-selector-buttons ${className}`} role="group" aria-label="Language selection">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleLanguageSelect(lang.code)}
            disabled={isLoading || lang.code === currentLang}
            className={`language-btn ${lang.code === currentLang ? 'active' : ''}`}
            aria-pressed={lang.code === currentLang}
          >
            {showFlags && <span className="flag">{lang.flag}</span>}
            <span className="native-name">{lang.nativeName}</span>
            {showProgress && lang.completionPercentage < 100 && (
              <span className="completion-badge" title={`${lang.completionPercentage}% translated`}>
                {lang.completionPercentage}%
              </span>
            )}
          </button>
        ))}
        {isLoading && <span className="loading-indicator">Loading...</span>}
      </div>
    );
  }

  // Dropdown variant (default)
  return (
    <div ref={dropdownRef} className={`language-selector-dropdown ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isLoading}
        className="language-selector-toggle"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        {showFlags && currentLanguage && (
          <span className="flag">{currentLanguage.flag}</span>
        )}
        <span className="current-language">{currentLanguage?.nativeName}</span>
        <svg
          className={`chevron ${isOpen ? 'open' : ''}`}
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M1 1.5L6 6.5L11 1.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <ul
          className="language-dropdown-menu"
          role="listbox"
          aria-label="Available languages"
        >
          {languages.map((lang) => (
            <li
              key={lang.code}
              role="option"
              aria-selected={lang.code === currentLang}
              className={`language-option ${lang.code === currentLang ? 'selected' : ''}`}
            >
              <button
                onClick={() => handleLanguageSelect(lang.code)}
                className="language-option-btn"
              >
                <div className="language-option-content">
                  {showFlags && <span className="flag">{lang.flag}</span>}
                  <div className="language-info">
                    <span className="native-name">{lang.nativeName}</span>
                    <span className="english-name">{lang.name}</span>
                  </div>
                  {showProgress && lang.completionPercentage < 100 && (
                    <TranslationProgressIndicator
                      percentage={lang.completionPercentage}
                      size="small"
                    />
                  )}
                </div>
              </button>
            </li>
          ))}
        </ul>
      )}

      {isLoading && (
        <div className="language-loading-overlay">
          <span>Loading language...</span>
        </div>
      )}
    </div>
  );
};

/**
 * Translation Progress Indicator Component
 */
export interface TranslationProgressIndicatorProps {
  percentage: number;
  size?: 'small' | 'medium' | 'large';
  showLabel?: boolean;
  className?: string;
}

export const TranslationProgressIndicator: React.FC<TranslationProgressIndicatorProps> = ({
  percentage,
  size = 'medium',
  showLabel = true,
  className = '',
}) => {
  const getStatusColor = (pct: number): string => {
    if (pct >= 90) return 'complete';
    if (pct >= 70) return 'good';
    if (pct >= 50) return 'partial';
    return 'minimal';
  };

  const statusColor = getStatusColor(percentage);

  return (
    <div className={`translation-progress ${size} ${statusColor} ${className}`}>
      <div className="progress-bar-container" aria-hidden="true">
        <div
          className="progress-bar-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel && (
        <span className="progress-label">
          {percentage >= 100 ? '✓' : `${percentage}%`}
        </span>
      )}
    </div>
  );
};

/**
 * Contribute Translations CTA Component
 */
export interface ContributeTranslationsCTAProps {
  languageCode?: SupportedLanguage;
  className?: string;
}

export const ContributeTranslationsCTA: React.FC<ContributeTranslationsCTAProps> = ({
  languageCode,
  className = '',
}) => {
  const languages = getAvailableLanguages();
  const incompleteLanguages = languages.filter((l) => l.completionPercentage < 100);

  if (incompleteLanguages.length === 0) {
    return null;
  }

  const targetLanguage = languageCode
    ? incompleteLanguages.find((l) => l.code === languageCode)
    : incompleteLanguages[0];

  if (!targetLanguage) {
    return null;
  }

  return (
    <div className={`contribute-translations-cta ${className}`}>
      <div className="cta-content">
        <span className="cta-icon">🌐</span>
        <div className="cta-text">
          <h4>Help translate Biological Self</h4>
          <p>
            {targetLanguage.nativeName} is only {targetLanguage.completionPercentage}% translated.
            {' '}
            Your contribution can help millions of people understand their health better.
          </p>
        </div>
        <a
          href="https://github.com/biological-self/translations"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
        >
          Contribute Translations
        </a>
      </div>
      
      {incompleteLanguages.length > 1 && (
        <div className="other-languages">
          <span>Other languages needing help:{' '}</span>
          {incompleteLanguages
            .filter((l) => l.code !== targetLanguage.code)
            .map((lang, index, arr) => (
              <span key={lang.code}>
                {lang.nativeName} ({lang.completionPercentage}%)
                {index < arr.length - 1 && ', '}
              </span>
            ))}
        </div>
      )}
    </div>
  );
};

/**
 * Language Settings Panel Component
 */
export interface LanguageSettingsPanelProps {
  className?: string;
}

export const LanguageSettingsPanel: React.FC<LanguageSettingsPanelProps> = ({
  className = '',
}) => {
  const currentLang = getCurrentLanguage();
  const languages = getAvailableLanguages();
  const currentLanguage = languages.find((l) => l.code === currentLang);

  return (
    <div className={`language-settings-panel ${className}`}>
      <section className="settings-section">
        <h3>Language</h3>
        <LanguageSelector
          variant="dropdown"
          showProgress={true}
          showFlags={true}
        />
        <p className="settings-hint">
          Currently displaying content in{' '}
          <strong>{currentLanguage?.nativeName}</strong>.
          {' '}
          {currentLanguage?.isRTL && 'This is a right-to-left language.'}
        </p>
      </section>

      <section className="settings-section">
        <h3>Translation Status</h3>
        <div className="translation-status-list">
          {languages.map((lang) => (
            <div key={lang.code} className="translation-status-item">
              <span className="language-name">
                {lang.flag} {lang.nativeName}
              </span>
              <TranslationProgressIndicator
                percentage={lang.completionPercentage}
                size="small"
              />
            </div>
          ))}
        </div>
      </section>

      <ContributeTranslationsCTA />
    </div>
  );
};

// Helper function to get flag emoji
function getFlagEmoji(countryCode: string): string {
  const codePoints = countryCode
    .toUpperCase()
    .slice(0, 2)
    .split('')
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

export default LanguageSelector;
