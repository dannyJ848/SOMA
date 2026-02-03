/**
 * Language Settings Component
 *
 * Language, date format, and measurement system preferences.
 */

import { useSettings } from './useSettings';
import type { SupportedLanguage, LanguageSettings as LanguageSettingsType } from './types';

// ============================================
// Types
// ============================================

interface LanguageOptionProps {
  code: SupportedLanguage;
  name: string;
  nativeName: string;
  selected: boolean;
  onClick: () => void;
}

// ============================================
// Language Option
// ============================================

function LanguageOption({ code, name, nativeName, selected, onClick }: LanguageOptionProps) {
  return (
    <button
      className={`language-option ${selected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <span className="language-code">{code.toUpperCase()}</span>
      <div className="language-names">
        <span className="language-native">{nativeName}</span>
        <span className="language-english">{name}</span>
      </div>
      {selected && (
        <svg className="language-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      )}
    </button>
  );
}

// ============================================
// Main Component
// ============================================

export function LanguageSettings() {
  const { settings, updateLanguage } = useSettings();
  const language = settings.language;

  const handleLanguageChange = (lang: SupportedLanguage) => {
    updateLanguage({ language: lang });
  };

  const handleMedicalLanguageChange = (lang: SupportedLanguage) => {
    updateLanguage({ medicalTermLanguage: lang });
  };

  const handleDateFormatChange = (format: LanguageSettingsType['dateFormat']) => {
    updateLanguage({ dateFormat: format });
  };

  const handleMeasurementChange = (system: LanguageSettingsType['measurementSystem']) => {
    updateLanguage({ measurementSystem: system });
  };

  // Date format examples
  const dateExamples: Record<LanguageSettingsType['dateFormat'], string> = {
    US: '01/24/2026',
    EU: '24/01/2026',
    ISO: '2026-01-24',
  };

  // Measurement examples
  const measurementExamples = {
    metric: { height: '175 cm', weight: '70 kg', temp: '37.0 C' },
    imperial: { height: '5\'9"', weight: '154 lbs', temp: '98.6 F' },
  };

  return (
    <div className="language-settings settings-content">
      {/* App Language */}
      <section className="settings-section">
        <h3 className="settings-section-title">App Language</h3>
        <p className="settings-section-description">
          Choose the language for the app interface
        </p>
        <div className="language-options">
          <LanguageOption
            code="en"
            name="English"
            nativeName="English"
            selected={language.language === 'en'}
            onClick={() => handleLanguageChange('en')}
          />
          <LanguageOption
            code="es"
            name="Spanish"
            nativeName="Espanol"
            selected={language.language === 'es'}
            onClick={() => handleLanguageChange('es')}
          />
        </div>
      </section>

      {/* Medical Terms Language */}
      <section className="settings-section">
        <h3 className="settings-section-title">Medical Terms Language</h3>
        <p className="settings-section-description">
          Choose the language for medical terminology and explanations
        </p>
        <div className="language-options">
          <LanguageOption
            code="en"
            name="English"
            nativeName="English"
            selected={language.medicalTermLanguage === 'en'}
            onClick={() => handleMedicalLanguageChange('en')}
          />
          <LanguageOption
            code="es"
            name="Spanish"
            nativeName="Espanol"
            selected={language.medicalTermLanguage === 'es'}
            onClick={() => handleMedicalLanguageChange('es')}
          />
        </div>
      </section>

      {/* Date Format */}
      <section className="settings-section">
        <h3 className="settings-section-title">Date Format</h3>
        <p className="settings-section-description">
          Choose how dates are displayed
        </p>
        <div className="settings-option-grid date-format-options">
          <button
            className={`option-button ${language.dateFormat === 'US' ? 'active' : ''}`}
            onClick={() => handleDateFormatChange('US')}
          >
            <span className="option-label">US</span>
            <span className="option-example">{dateExamples.US}</span>
            <span className="option-description">MM/DD/YYYY</span>
          </button>
          <button
            className={`option-button ${language.dateFormat === 'EU' ? 'active' : ''}`}
            onClick={() => handleDateFormatChange('EU')}
          >
            <span className="option-label">European</span>
            <span className="option-example">{dateExamples.EU}</span>
            <span className="option-description">DD/MM/YYYY</span>
          </button>
          <button
            className={`option-button ${language.dateFormat === 'ISO' ? 'active' : ''}`}
            onClick={() => handleDateFormatChange('ISO')}
          >
            <span className="option-label">ISO</span>
            <span className="option-example">{dateExamples.ISO}</span>
            <span className="option-description">YYYY-MM-DD</span>
          </button>
        </div>
      </section>

      {/* Measurement System */}
      <section className="settings-section">
        <h3 className="settings-section-title">Measurement System</h3>
        <p className="settings-section-description">
          Choose units for height, weight, and temperature
        </p>
        <div className="measurement-options">
          <button
            className={`measurement-option ${language.measurementSystem === 'metric' ? 'active' : ''}`}
            onClick={() => handleMeasurementChange('metric')}
          >
            <div className="measurement-header">
              <span className="measurement-label">Metric</span>
              {language.measurementSystem === 'metric' && (
                <svg className="measurement-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              )}
            </div>
            <div className="measurement-examples">
              <span>Height: {measurementExamples.metric.height}</span>
              <span>Weight: {measurementExamples.metric.weight}</span>
              <span>Temp: {measurementExamples.metric.temp}</span>
            </div>
          </button>

          <button
            className={`measurement-option ${language.measurementSystem === 'imperial' ? 'active' : ''}`}
            onClick={() => handleMeasurementChange('imperial')}
          >
            <div className="measurement-header">
              <span className="measurement-label">Imperial (US)</span>
              {language.measurementSystem === 'imperial' && (
                <svg className="measurement-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              )}
            </div>
            <div className="measurement-examples">
              <span>Height: {measurementExamples.imperial.height}</span>
              <span>Weight: {measurementExamples.imperial.weight}</span>
              <span>Temp: {measurementExamples.imperial.temp}</span>
            </div>
          </button>
        </div>
      </section>
    </div>
  );
}

export default LanguageSettings;
