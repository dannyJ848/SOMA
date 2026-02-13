/**
 * AdaptiveContentToggle.tsx
 * 
 * Allows users to adjust content complexity and adaptive settings.
 * Provides intuitive controls for Spanish-speaking patients to
 * customize their learning experience.
 * 
 * Features:
 * - Complexity level toggle with visual indicators
 * - Adaptive settings controls
 * - Numeracy visualization toggle
 * - Family sharing controls
 * - Navigation guides toggle
 */

import React, { useState, useCallback } from 'react';
import {
  SpanishLiteracyProfile,
  SpanishComplexityProfile,
  SPANISH_COMPLEXITY_PROFILES,
  AdaptiveSettings,
  getProfileDisplayName,
  getProfileDescription,
  DEFAULT_ADAPTIVE_SETTINGS,
} from '../../../core/assessment/literacy-es';
import { ComplexityLevel } from '../../../core/education/types';

// ============================================================================
// TYPES
// ============================================================================

interface AdaptiveContentToggleProps {
  /** User's literacy profile */
  profile: SpanishLiteracyProfile;
  /** Called when settings are updated */
  onUpdate: (settings: AdaptiveSettings, complexityLevel?: ComplexityLevel) => void;
  /** Called when complexity profile is changed */
  onProfileChange?: (profile: SpanishComplexityProfile) => void;
  /** Compact mode for toolbars */
  compact?: boolean;
  /** Show only specific settings */
  showSettings?: Array<keyof AdaptiveSettings>;
  /** Language preference */
  language?: 'es' | 'en' | 'both';
  /** CSS class name */
  className?: string;
}

interface ComplexitySliderProps {
  currentProfile: SpanishComplexityProfile;
  currentLevel: ComplexityLevel;
  maxLevel: ComplexityLevel;
  onChange: (level: ComplexityLevel) => void;
  onProfileChange: (profile: SpanishComplexityProfile) => void;
  language: 'es' | 'en' | 'both';
}

interface SettingToggleProps {
  id: string;
  label: string;
  labelEn?: string;
  description?: string;
  descriptionEn?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  icon?: React.ReactNode;
  language: 'es' | 'en' | 'both';
}

// ============================================================================
// TRANSLATIONS
// ============================================================================

const TRANSLATIONS = {
  es: {
    title: 'Ajustar Contenido',
    subtitle: 'Personalice cómo se muestra la información',
    complexityTitle: 'Nivel de Complejidad',
    complexityDescription: 'Seleccione el nivel de detalle médico',
    currentLevel: 'Nivel Actual',
    adaptiveSettings: 'Configuración Adaptativa',
    visualNumeracy: 'Visuales para Números',
    visualNumeracyDesc: 'Use gráficas e imágenes para explicar resultados numéricos',
    simplifiedLanguage: 'Lenguaje Simplificado',
    simplifiedLanguageDesc: 'Evite términos médicos complejos',
    culturalContext: 'Contexto Cultural',
    culturalContextDesc: 'Muestre información relevante a su cultura',
    navigationGuides: 'Guías de Navegación',
    navigationGuidesDesc: 'Muestre ayuda para navegar el sistema de salud',
    familySharing: 'Compartir con Familia',
    familySharingDesc: 'Permita que su familia vea su información',
    fontSize: 'Tamaño de Letra',
    fontSizeDesc: 'Aumente el tamaño del texto',
    audioEnabled: 'Audio Habilitado',
    audioEnabledDesc: 'Escuche las explicaciones en voz alta',
    highContrast: 'Alto Contraste',
    highContrastDesc: 'Mejore la visibilidad con colores fuertes',
    glossaryTooltips: 'Glosario Emergente',
    glossaryTooltipsDesc: 'Muestre definiciones al pasar el mouse',
    pronunciationGuides: 'Guías de Pronunciación',
    pronunciationGuidesDesc: 'Muestre cómo pronunciar términos médicos',
    extendedExplanations: 'Explicaciones Extendidas',
    extendedExplanationsDesc: 'Muestre información adicional y detalles',
    autoAdjust: 'Ajuste Automático',
    autoAdjustDesc: 'El sistema ajusta automáticamente según su progreso',
    resetDefaults: 'Restablecer Predeterminados',
    saveChanges: 'Guardar Cambios',
    cancel: 'Cancelar',
    // Complexity levels
    basico: 'Nivel Básico',
    intermedio: 'Nivel Intermedio',
    avanzado: 'Nivel Avanzado',
    // Font sizes
    normal: 'Normal',
    large: 'Grande',
    extraLarge: 'Extra Grande',
    // Preview
    previewTitle: 'Vista Previa',
    previewText: 'Así se verá el contenido con su configuración actual',
  },
  en: {
    title: 'Adjust Content',
    subtitle: 'Customize how information is displayed',
    complexityTitle: 'Complexity Level',
    complexityDescription: 'Select the level of medical detail',
    currentLevel: 'Current Level',
    adaptiveSettings: 'Adaptive Settings',
    visualNumeracy: 'Visuals for Numbers',
    visualNumeracyDesc: 'Use charts and images to explain numerical results',
    simplifiedLanguage: 'Simplified Language',
    simplifiedLanguageDesc: 'Avoid complex medical terms',
    culturalContext: 'Cultural Context',
    culturalContextDesc: 'Show information relevant to your culture',
    navigationGuides: 'Navigation Guides',
    navigationGuidesDesc: 'Show help for navigating the healthcare system',
    familySharing: 'Family Sharing',
    familySharingDesc: 'Allow your family to view your information',
    fontSize: 'Font Size',
    fontSizeDesc: 'Increase text size',
    audioEnabled: 'Audio Enabled',
    audioEnabledDesc: 'Listen to explanations out loud',
    highContrast: 'High Contrast',
    highContrastDesc: 'Improve visibility with strong colors',
    glossaryTooltips: 'Glossary Tooltips',
    glossaryTooltipsDesc: 'Show definitions on hover',
    pronunciationGuides: 'Pronunciation Guides',
    pronunciationGuidesDesc: 'Show how to pronounce medical terms',
    extendedExplanations: 'Extended Explanations',
    extendedExplanationsDesc: 'Show additional information and details',
    autoAdjust: 'Auto Adjust',
    autoAdjustDesc: 'System automatically adjusts based on your progress',
    resetDefaults: 'Reset to Defaults',
    saveChanges: 'Save Changes',
    cancel: 'Cancel',
    // Complexity levels
    basico: 'Basic Level',
    intermedio: 'Intermediate Level',
    avanzado: 'Advanced Level',
    // Font sizes
    normal: 'Normal',
    large: 'Large',
    extraLarge: 'Extra Large',
    // Preview
    previewTitle: 'Preview',
    previewText: 'This is how content will look with your current settings',
  },
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

function getTranslation(key: keyof typeof TRANSLATIONS.es, language: 'es' | 'en' | 'both'): string {
  const lang = language === 'both' ? 'es' : language;
  return TRANSLATIONS[lang][key] || TRANSLATIONS.es[key];
}

function getFontSizeLabel(size: 'normal' | 'large' | 'extra-large', language: 'es' | 'en' | 'both'): string {
  const key = size === 'normal' ? 'normal' : size === 'large' ? 'large' : 'extraLarge';
  return getTranslation(key, language);
}

// ============================================================================
// ICONS
// ============================================================================

const Icons = {
  settings: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
    </svg>
  ),
  chart: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
    </svg>
  ),
  text: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
    </svg>
  ),
  globe: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
    </svg>
  ),
  map: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
  ),
  users: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" />
    </svg>
  ),
  font: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v8a2 2 0 002 2h2v2a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2H8a2 2 0 00-2 2v2H4V4h12v8h-2V8h-2v8h-2v-2H8v2H6V8H4V2z" clipRule="evenodd" />
    </svg>
  ),
  volume: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 11H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-5.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  ),
  contrast: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM10 2a8 8 0 110 16 8 8 0 010-16z" clipRule="evenodd" />
      <path d="M10 4a6 6 0 00-6 6h6V4z" />
    </svg>
  ),
  book: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
    </svg>
  ),
  microphone: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
    </svg>
  ),
  information: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
    </svg>
  ),
  refresh: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
    </svg>
  ),
  check: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  ),
};

// ============================================================================
// SUB-COMPONENTS
// ============================================================================

const ComplexitySlider: React.FC<ComplexitySliderProps> = ({
  currentProfile,
  currentLevel,
  maxLevel,
  onChange,
  onProfileChange,
  language,
}) => {
  const profiles: SpanishComplexityProfile[] = ['basico', 'intermedio', 'avanzado'];
  const currentIndex = profiles.indexOf(currentProfile);

  const handleSelectProfile = (profile: SpanishComplexityProfile) => {
    onProfileChange(profile);
    // Set appropriate level for profile
    const newLevel = profile === 'basico' ? 1 : profile === 'intermedio' ? 3 : 5;
    onChange(newLevel as ComplexityLevel);
  };

  const handleLevelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const level = parseInt(e.target.value) as ComplexityLevel;
    onChange(level);
  };

  return (
    <div className="adaptive-complexity-section">
      <div className="adaptive-complexity-profiles">
        {profiles.map((profile, index) => {
          const isActive = profile === currentProfile;
          const profileInfo = SPANISH_COMPLEXITY_PROFILES[profile];
          const displayName = getProfileDisplayName(profile, language as 'es' | 'en');

          return (
            <button
              key={profile}
              className={`adaptive-profile-btn ${isActive ? 'active' : ''}`}
              onClick={() => handleSelectProfile(profile)}
              style={{ 
                '--profile-color': profileInfo.color,
                '--profile-index': index 
              } as React.CSSProperties}
            >
              <span 
                className="adaptive-profile-indicator"
                style={{ backgroundColor: profileInfo.color }}
              />
              <span className="adaptive-profile-name">{displayName}</span>
              {isActive && <span className="adaptive-profile-check">{Icons.check}</span>}
            </button>
          );
        })}
      </div>

      <div className="adaptive-level-slider">
        <label className="adaptive-slider-label">
          {getTranslation('currentLevel', language)}: {currentLevel}
        </label>
        <input
          type="range"
          min="1"
          max={maxLevel}
          value={currentLevel}
          onChange={handleLevelChange}
          className="adaptive-slider"
        />
        <div className="adaptive-slider-marks">
          {Array.from({ length: maxLevel }, (_, i) => i + 1).map((level) => (
            <span 
              key={level}
              className={`adaptive-slider-mark ${level === currentLevel ? 'active' : ''}`}
            >
              {level}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const SettingToggle: React.FC<SettingToggleProps> = ({
  id,
  label,
  labelEn,
  description,
  descriptionEn,
  checked,
  onChange,
  icon,
  language,
}) => {
  const showBoth = language === 'both';

  return (
    <div className={`adaptive-setting ${checked ? 'enabled' : ''}`}>
      <label className="adaptive-setting-label" htmlFor={id}>
        {icon && <span className="adaptive-setting-icon">{icon}</span>}
        <div className="adaptive-setting-text">
          <span className="adaptive-setting-title">
            {label}
            {showBoth && labelEn && <span className="adaptive-setting-en"> / {labelEn}</span>}
          </span>
          {description && (
            <span className="adaptive-setting-desc">
              {description}
              {showBoth && descriptionEn && <span> / {descriptionEn}</span>}
            </span>
          )}
        </div>
        <div className="adaptive-toggle-wrapper">
          <input
            id={id}
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            className="adaptive-toggle-input"
          />
          <span className="adaptive-toggle-slider" />
        </div>
      </label>
    </div>
  );
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export const AdaptiveContentToggle: React.FC<AdaptiveContentToggleProps> = ({
  profile,
  onUpdate,
  onProfileChange,
  compact = false,
  showSettings,
  language = 'es',
  className = '',
}) => {
  const [settings, setSettings] = useState<AdaptiveSettings>(profile.settings);
  const [hasChanges, setHasChanges] = useState(false);

  // Update local settings when profile changes
  React.useEffect(() => {
    setSettings(profile.settings);
  }, [profile.settings]);

  const handleSettingChange = useCallback((key: keyof AdaptiveSettings, value: boolean | string) => {
    setSettings(prev => ({
      ...prev,
      [key]: value,
    }));
    setHasChanges(true);
  }, []);

  const handleProfileChange = useCallback((newProfile: SpanishComplexityProfile) => {
    onProfileChange?.(newProfile);
    // Apply default settings for new profile
    setSettings(DEFAULT_ADAPTIVE_SETTINGS[newProfile]);
    setHasChanges(true);
  }, [onProfileChange]);

  const handleSave = useCallback(() => {
    onUpdate(settings, profile.recommendedComplexityLevel);
    setHasChanges(false);
  }, [settings, onUpdate, profile.recommendedComplexityLevel]);

  const handleReset = useCallback(() => {
    const defaults = DEFAULT_ADAPTIVE_SETTINGS[profile.complexityProfile];
    setSettings(defaults);
    onUpdate(defaults, profile.recommendedComplexityLevel);
    setHasChanges(false);
  }, [profile.complexityProfile, profile.recommendedComplexityLevel, onUpdate]);

  // Filter settings if showSettings is provided
  const allSettings: Array<{ key: keyof AdaptiveSettings; icon: React.ReactNode; translationKey: keyof typeof TRANSLATIONS.es }> = [
    { key: 'useVisualsForNumeracy', icon: Icons.chart, translationKey: 'visualNumeracy' },
    { key: 'useSimplifiedLanguage', icon: Icons.text, translationKey: 'simplifiedLanguage' },
    { key: 'showCulturalContext', icon: Icons.globe, translationKey: 'culturalContext' },
    { key: 'showNavigationGuides', icon: Icons.map, translationKey: 'navigationGuides' },
    { key: 'enableFamilySharing', icon: Icons.users, translationKey: 'familySharing' },
    { key: 'audioEnabled', icon: Icons.volume, translationKey: 'audioEnabled' },
    { key: 'highContrast', icon: Icons.contrast, translationKey: 'highContrast' },
    { key: 'showGlossaryTooltips', icon: Icons.book, translationKey: 'glossaryTooltips' },
    { key: 'showPronunciationGuides', icon: Icons.microphone, translationKey: 'pronunciationGuides' },
    { key: 'extendedExplanations', icon: Icons.information, translationKey: 'extendedExplanations' },
    { key: 'autoAdjustComplexity', icon: Icons.refresh, translationKey: 'autoAdjust' },
  ];

  const visibleSettings = showSettings 
    ? allSettings.filter(s => showSettings.includes(s.key))
    : allSettings;

  if (compact) {
    return (
      <div className={`adaptive-toggle-compact ${className}`}>
        <ComplexitySlider
          currentProfile={profile.complexityProfile}
          currentLevel={profile.recommendedComplexityLevel}
          maxLevel={profile.maxComplexityLevel}
          onChange={(level) => onUpdate(settings, level)}
          onProfileChange={handleProfileChange}
          language={language}
        />
      </div>
    );
  }

  return (
    <div className={`adaptive-toggle-panel ${className}`}>
      <div className="adaptive-toggle-header">
        <div className="adaptive-toggle-title-wrapper">
          {Icons.settings}
          <div>
            <h3 className="adaptive-toggle-title">{getTranslation('title', language)}</h3>
            <p className="adaptive-toggle-subtitle">{getTranslation('subtitle', language)}</p>
          </div>
        </div>
      </div>

      <div className="adaptive-toggle-content">
        {/* Complexity Section */}
        <div className="adaptive-section">
          <h4 className="adaptive-section-title">{getTranslation('complexityTitle', language)}</h4>
          <p className="adaptive-section-desc">{getTranslation('complexityDescription', language)}</p>
          
          <ComplexitySlider
            currentProfile={profile.complexityProfile}
            currentLevel={profile.recommendedComplexityLevel}
            maxLevel={profile.maxComplexityLevel}
            onChange={(level) => {
              onUpdate(settings, level);
            }}
            onProfileChange={handleProfileChange}
            language={language}
          />
        </div>

        {/* Settings Section */}
        <div className="adaptive-section">
          <h4 className="adaptive-section-title">{getTranslation('adaptiveSettings', language)}</h4>
          
          <div className="adaptive-settings-list">
            {visibleSettings.map(({ key, icon, translationKey }) => {
              const tKey = translationKey as keyof typeof TRANSLATIONS.es;
              const label = getTranslation(tKey, language);
              const labelEn = language === 'both' ? TRANSLATIONS.en[tKey] : undefined;
              const descKey = `${translationKey}Desc` as keyof typeof TRANSLATIONS.es;
              const description = TRANSLATIONS.es[descKey] as string | undefined;
              const descriptionEn = language === 'both' ? TRANSLATIONS.en[descKey] as string : undefined;

              return (
                <SettingToggle
                  key={key}
                  id={`setting-${key}`}
                  label={label}
                  labelEn={labelEn}
                  description={description}
                  descriptionEn={descriptionEn}
                  checked={!!settings[key]}
                  onChange={(checked) => handleSettingChange(key, checked)}
                  icon={icon}
                  language={language}
                />
              );
            })}
          </div>
        </div>

        {/* Font Size Section */}
        <div className="adaptive-section">
          <h4 className="adaptive-section-title">
            {getTranslation('fontSize', language)}
          </h4>
          
          <div className="adaptive-font-size-options">
            {(['normal', 'large', 'extra-large'] as const).map((size) => (
              <button
                key={size}
                className={`adaptive-font-btn ${settings.fontSize === size ? 'active' : ''}`}
                onClick={() => handleSettingChange('fontSize', size)}
              >
                <span 
                  className="adaptive-font-sample"
                  style={{ 
                    fontSize: size === 'normal' ? '14px' : size === 'large' ? '18px' : '22px' 
                  }}
                >
                  Aa
                </span>
                <span className="adaptive-font-label">
                  {getFontSizeLabel(size, language)}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="adaptive-toggle-actions">
        <button 
          className="adaptive-btn-text"
          onClick={handleReset}
        >
          {Icons.refresh}
          {getTranslation('resetDefaults', language)}
        </button>
        <div className="adaptive-action-buttons">
          <button 
            className="adaptive-btn-secondary"
            onClick={() => {
              setSettings(profile.settings);
              setHasChanges(false);
            }}
          >
            {getTranslation('cancel', language)}
          </button>
          <button 
            className="adaptive-btn-primary"
            onClick={handleSave}
            disabled={!hasChanges}
          >
            {getTranslation('saveChanges', language)}
          </button>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// EXPORTS
// ============================================================================

export default AdaptiveContentToggle;
export type { AdaptiveContentToggleProps };
