/**
 * CulturalContextPanel.tsx
 * 
 * Displays cultural factors and context for Spanish-speaking patients.
 * Shows health belief orientation, family dynamics, and traditional
 * medicine integration preferences.
 * 
 * Features:
 * - Visual display of cultural context
 * - Family sharing controls
 * - Traditional remedies acknowledgment
 * - Healthcare navigation assistance
 */

import React, { useState, useCallback } from 'react';
import {
  SpanishLiteracyProfile,
  CulturalContext,
  FamilyDynamicsAssessment,
  HealthcareSystemAssessment,
  HealthBeliefOrientation,
  FamilyDecisionStyle,
  USHealthcareFamiliarity,
} from '../../../core/assessment/literacy-es';

// ============================================================================
// TYPES
// ============================================================================

interface CulturalContextPanelProps {
  /** User's literacy profile */
  profile: SpanishLiteracyProfile;
  /** Called when profile is updated */
  onUpdate?: (updates: Partial<SpanishLiteracyProfile>) => void;
  /** Called when family sharing is toggled */
  onFamilyShareToggle?: (enabled: boolean) => void;
  /** Called when navigation help is requested */
  onRequestNavigationHelp?: () => void;
  /** Whether the panel is editable */
  editable?: boolean;
  /** Compact mode for sidebars */
  compact?: boolean;
  /** Language preference */
  language?: 'es' | 'en' | 'both';
  /** CSS class name */
  className?: string;
}

interface ContextSectionProps {
  title: string;
  titleEn?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  language: 'es' | 'en' | 'both';
}

interface InfoItemProps {
  label: string;
  labelEn?: string;
  value: React.ReactNode;
  icon?: React.ReactNode;
  language: 'es' | 'en' | 'both';
}

// ============================================================================
// TRANSLATIONS
// ============================================================================

const TRANSLATIONS = {
  es: {
    panelTitle: 'Su Contexto Cultural',
    healthBeliefs: 'Creencias de Salud',
    familyDynamics: 'Dinámica Familiar',
    healthcareSystem: 'Sistema de Salud EE.UU.',
    traditionalMedicine: 'Medicina Tradicional',
    familySharing: 'Compartir con Familia',
    navigationHelp: 'Ayuda de Navegación',
    yearsInUS: 'Años en Estados Unidos',
    primaryLanguage: 'Idioma Principal',
    decisionMaker: 'Toma de Decisiones',
    insuranceUnderstanding: 'Entendimiento del Seguro',
    needNavigationHelp: '¿Necesita ayuda para navegar el sistema?',
    traditionalRemedies: 'Remedios Tradicionales',
    comfortableWith: 'Cómodo usando',
    notComfortableWith: 'No usa',
    enableSharing: 'Habilitar Compartir Familiar',
    sharingDescription: 'Permita que su familia acceda a su información de salud',
    viewNavigationGuide: 'Ver Guía de Navegación',
    editProfile: 'Editar Perfil',
    close: 'Cerrar',
    moreInfo: 'Más Información',
    lessInfo: 'Menos Información',
    // Belief orientations
    traditional: 'Tradicional',
    mixed: 'Mixto (Tradicional + Biomédico)',
    biomedical: 'Biomédico',
    // Decision styles
    individual: 'Individual',
    consultative: 'Consultivo',
    collective: 'Colectivo',
    // Healthcare familiarity
    none: 'Ninguna',
    limited: 'Limitada',
    moderate: 'Moderada',
    extensive: 'Extensiva',
    // Language
    spanish: 'Español',
    english: 'Inglés',
    both: 'Ambos',
  },
  en: {
    panelTitle: 'Your Cultural Context',
    healthBeliefs: 'Health Beliefs',
    familyDynamics: 'Family Dynamics',
    healthcareSystem: 'US Healthcare System',
    traditionalMedicine: 'Traditional Medicine',
    familySharing: 'Family Sharing',
    navigationHelp: 'Navigation Help',
    yearsInUS: 'Years in United States',
    primaryLanguage: 'Primary Language',
    decisionMaker: 'Decision Making',
    insuranceUnderstanding: 'Insurance Understanding',
    needNavigationHelp: 'Do you need help navigating the system?',
    traditionalRemedies: 'Traditional Remedies',
    comfortableWith: 'Comfortable using',
    notComfortableWith: 'Do not use',
    enableSharing: 'Enable Family Sharing',
    sharingDescription: 'Allow your family to access your health information',
    viewNavigationGuide: 'View Navigation Guide',
    editProfile: 'Edit Profile',
    close: 'Close',
    moreInfo: 'More Information',
    lessInfo: 'Less Information',
    // Belief orientations
    traditional: 'Traditional',
    mixed: 'Mixed (Traditional + Biomedical)',
    biomedical: 'Biomedical',
    // Decision styles
    individual: 'Individual',
    consultative: 'Consultative',
    collective: 'Collective',
    // Healthcare familiarity
    none: 'None',
    limited: 'Limited',
    moderate: 'Moderate',
    extensive: 'Extensive',
    // Language
    spanish: 'Spanish',
    english: 'English',
    both: 'Both',
  },
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

function getTranslation(key: keyof typeof TRANSLATIONS.es, language: 'es' | 'en' | 'both'): string {
  const lang = language === 'both' ? 'es' : language;
  return TRANSLATIONS[lang][key] || TRANSLATIONS.es[key];
}

function getBeliefOrientationLabel(orientation: HealthBeliefOrientation, language: 'es' | 'en' | 'both'): string {
  const key = orientation === 'traditional' ? 'traditional' : orientation === 'mixed' ? 'mixed' : 'biomedical';
  return getTranslation(key, language);
}

function getDecisionStyleLabel(style: FamilyDecisionStyle, language: 'es' | 'en' | 'both'): string {
  const key = style === 'individual' ? 'individual' : style === 'consultative' ? 'consultative' : 'collective';
  return getTranslation(key, language);
}

function getFamiliarityLabel(familiarity: USHealthcareFamiliarity, language: 'es' | 'en' | 'both'): string {
  const key = familiarity === 'none' ? 'none' : familiarity === 'limited' ? 'limited' : familiarity === 'moderate' ? 'moderate' : 'extensive';
  return getTranslation(key, language);
}

function getLanguageLabel(lang: string, language: 'es' | 'en' | 'both'): string {
  const key = lang === 'spanish' ? 'spanish' : lang === 'english' ? 'english' : 'both';
  return getTranslation(key, language);
}

// ============================================================================
// ICONS
// ============================================================================

const Icons = {
  health: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
    </svg>
  ),
  family: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
    </svg>
  ),
  hospital: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
    </svg>
  ),
  leaf: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
    </svg>
  ),
  share: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
    </svg>
  ),
  map: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
  ),
  globe: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
    </svg>
  ),
  info: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm1-4.536a.75.75 0 0 0-1.5 0v2.072a.75.75 0 0 0 1.5 0V11.464zM8 4.464a.75.75 0 0 1 .75.75v2.072a.75.75 0 0 1-1.5 0V5.214A.75.75 0 0 1 8 4.464z" clipRule="evenodd" />
    </svg>
  ),
};

// ============================================================================
// SUB-COMPONENTS
// ============================================================================

const ContextSection: React.FC<ContextSectionProps> = ({ title, titleEn, icon, children, language }) => {
  const showBoth = language === 'both';
  
  return (
    <div className="cultural-section">
      <div className="cultural-section-header">
        {icon && <span className="cultural-section-icon">{icon}</span>}
        <h4 className="cultural-section-title">
          {title}
          {showBoth && titleEn && (
            <span className="cultural-title-en"> / {titleEn}</span>
          )}
        </h4>
      </div>
      <div className="cultural-section-content">{children}</div>
    </div>
  );
};

const InfoItem: React.FC<InfoItemProps> = ({ label, labelEn, value, icon, language }) => {
  const showBoth = language === 'both';
  
  return (
    <div className="cultural-info-item">
      {icon && <span className="cultural-info-icon">{icon}</span>}
      <div className="cultural-info-content">
        <span className="cultural-info-label">
          {label}
          {showBoth && labelEn && <span> / {labelEn}</span>}
        </span>
        <span className="cultural-info-value">{value}</span>
      </div>
    </div>
  );
};

const BeliefIndicator: React.FC<{ orientation: HealthBeliefOrientation; language: 'es' | 'en' | 'both' }> = ({ 
  orientation, 
  language 
}) => {
  const getColors = () => {
    switch (orientation) {
      case 'traditional': return { bg: '#fef3c7', border: '#f59e0b', text: '#92400e' };
      case 'mixed': return { bg: '#e0e7ff', border: '#6366f1', text: '#3730a3' };
      case 'biomedical': return { bg: '#d1fae5', border: '#10b981', text: '#065f46' };
    }
  };

  const colors = getColors();
  const label = getBeliefOrientationLabel(orientation, language);

  return (
    <div 
      className="cultural-belief-indicator"
      style={{ 
        backgroundColor: colors.bg, 
        borderColor: colors.border,
        color: colors.text 
      }}
    >
      <span className="cultural-belief-dot" style={{ backgroundColor: colors.border }} />
      <span className="cultural-belief-label">{label}</span>
    </div>
  );
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export const CulturalContextPanel: React.FC<CulturalContextPanelProps> = ({
  profile,
  onUpdate,
  onFamilyShareToggle,
  onRequestNavigationHelp,
  editable = false,
  compact = false,
  language = 'es',
  className = '',
}) => {
  const [expanded, setExpanded] = useState(!compact);
  const [showDetails, setShowDetails] = useState(false);

  const { culturalContext, familyDynamics, healthcareSystem } = profile;

  const handleFamilyShareToggle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const enabled = e.target.checked;
    onFamilyShareToggle?.(enabled);
    onUpdate?.({ 
      familyDynamics: { ...familyDynamics, wantsShareWithFamily: enabled } 
    });
  }, [familyDynamics, onFamilyShareToggle, onUpdate]);

  if (compact) {
    return (
      <div className={`cultural-panel cultural-panel-compact ${className}`}>
        <div 
          className="cultural-panel-header-compact"
          onClick={() => setExpanded(!expanded)}
        >
          {Icons.globe}
          <span>{getTranslation('panelTitle', language)}</span>
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="currentColor"
            className={`cultural-expand-icon ${expanded ? 'expanded' : ''}`}
          >
            <path fillRule="evenodd" d="M4.293 6.293a1 1 0 011.414 0L8 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
        
        {expanded && (
          <div className="cultural-panel-content-compact">
            <BeliefIndicator 
              orientation={culturalContext.healthBeliefOrientation} 
              language={language} 
            />
            
            {healthcareSystem.needsNavigationHelp && (
              <button 
                className="cultural-nav-help-btn"
                onClick={onRequestNavigationHelp}
              >
                {Icons.map}
                {getTranslation('viewNavigationGuide', language)}
              </button>
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`cultural-panel ${className}`}>
      <div className="cultural-panel-header">
        <div className="cultural-panel-title-wrapper">
          {Icons.globe}
          <h3 className="cultural-panel-title">{getTranslation('panelTitle', language)}</h3>
        </div>
        {editable && (
          <button className="cultural-edit-btn">
            {getTranslation('editProfile', language)}
          </button>
        )}
      </div>

      <div className="cultural-panel-content">
        {/* Health Beliefs Section */}
        <ContextSection
          title={getTranslation('healthBeliefs', language)}
          titleEn={language === 'both' ? TRANSLATIONS.en.healthBeliefs : undefined}
          icon={Icons.health}
          language={language}
        >
          <BeliefIndicator 
            orientation={culturalContext.healthBeliefOrientation} 
            language={language} 
          />
          
          {culturalContext.traditionalRemediesUsed && (
            <div className="cultural-traditional-note">
              <span className="cultural-note-icon">{Icons.leaf}</span>
              <span>
                {getTranslation('comfortableWith', language)} {getTranslation('traditionalRemedies', language)}
              </span>
            </div>
          )}
        </ContextSection>

        {/* Family Dynamics Section */}
        <ContextSection
          title={getTranslation('familyDynamics', language)}
          titleEn={language === 'both' ? TRANSLATIONS.en.familyDynamics : undefined}
          icon={Icons.family}
          language={language}
        >
          <InfoItem
            label={getTranslation('decisionMaker', language)}
            labelEn={language === 'both' ? TRANSLATIONS.en.decisionMaker : undefined}
            value={getDecisionStyleLabel(familyDynamics.decisionMakingStyle, language)}
            language={language}
          />

          <div className="cultural-family-sharing">
            <label className="cultural-toggle-label">
              <input
                type="checkbox"
                checked={familyDynamics.wantsShareWithFamily}
                onChange={handleFamilyShareToggle}
                disabled={!editable}
              />
              <span className="cultural-toggle-slider" />
              <span className="cultural-toggle-text">
                {getTranslation('enableSharing', language)}
              </span>
            </label>
            <p className="cultural-toggle-description">
              {getTranslation('sharingDescription', language)}
            </p>
          </div>
        </ContextSection>

        {/* Healthcare System Section */}
        <ContextSection
          title={getTranslation('healthcareSystem', language)}
          titleEn={language === 'both' ? TRANSLATIONS.en.healthcareSystem : undefined}
          icon={Icons.hospital}
          language={language}
        >
          <InfoItem
            label={getTranslation('yearsInUS', language)}
            labelEn={language === 'both' ? TRANSLATIONS.en.yearsInUS : undefined}
            value={`${culturalContext.yearsInUS} ${language === 'en' ? 'years' : 'años'}`}
            icon={Icons.globe}
            language={language}
          />

          <InfoItem
            label={getTranslation('insuranceUnderstanding', language)}
            labelEn={language === 'both' ? TRANSLATIONS.en.insuranceUnderstanding : undefined}
            value={getFamiliarityLabel(healthcareSystem.usHealthcareFamiliarity, language)}
            language={language}
          />

          {healthcareSystem.needsNavigationHelp && (
            <div className="cultural-navigation-alert">
              <div className="cultural-alert-icon">{Icons.info}</div>
              <p>{getTranslation('needNavigationHelp', language)}</p>
              <button 
                className="cultural-nav-btn"
                onClick={onRequestNavigationHelp}
              >
                {getTranslation('viewNavigationGuide', language)}
              </button>
            </div>
          )}
        </ContextSection>

        {/* Show More/Less Details */}
        <button 
          className="cultural-details-toggle"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails 
            ? getTranslation('lessInfo', language) 
            : getTranslation('moreInfo', language)
          }
        </button>

        {showDetails && (
          <div className="cultural-details-panel">
            <InfoItem
              label={getTranslation('primaryLanguage', language)}
              labelEn={language === 'both' ? TRANSLATIONS.en.primaryLanguage : undefined}
              value={getLanguageLabel(culturalContext.primaryLanguage, language)}
              language={language}
            />

            <div className="cultural-detail-section">
              <h5>
                {getTranslation('traditionalMedicine', language)}
                {language === 'both' && <span> / {TRANSLATIONS.en.traditionalMedicine}</span>}
              </h5>
              <ul className="cultural-detail-list">
                <li>
                  {language === 'es' ? 'Remedios caseros: ' : 'Home remedies: '}
                  {culturalContext.traditionalRemediesUsed 
                    ? (language === 'es' ? 'Sí' : 'Yes') 
                    : (language === 'es' ? 'No' : 'No')}
                </li>
                <li>
                  {language === 'es' ? 'Curandero/a: ' : 'Traditional healer: '}
                  {culturalContext.curanderoUsed 
                    ? (language === 'es' ? 'Sí' : 'Yes') 
                    : (language === 'es' ? 'No' : 'No')}
                </li>
                <li>
                  {language === 'es' ? 'Espiritualidad: ' : 'Spirituality: '}
                  {culturalContext.spiritualHealingImportant 
                    ? (language === 'es' ? 'Importante' : 'Important') 
                    : (language === 'es' ? 'No especificado' : 'Not specified')}
                </li>
              </ul>
            </div>

            <div className="cultural-detail-section">
              <h5>
                {language === 'es' ? 'Sistema de Salud' : 'Healthcare System'}
                {language === 'both' && <span> / Healthcare System</span>}
              </h5>
              <ul className="cultural-detail-list">
                <li>
                  {language === 'es' ? 'Entiende médico primario: ' : 'Understands primary care: '}
                  {healthcareSystem.understandsPrimaryCare 
                    ? (language === 'es' ? 'Sí' : 'Yes') 
                    : (language === 'es' ? 'No' : 'No')}
                </li>
                <li>
                  {language === 'es' ? 'Entiende referidos: ' : 'Understands referrals: '}
                  {healthcareSystem.understandsSpecialistReferrals 
                    ? (language === 'es' ? 'Sí' : 'Yes') 
                    : (language === 'es' ? 'No' : 'No')}
                </li>
                <li>
                  {language === 'es' ? 'Entiende seguro: ' : 'Understands insurance: '}
                  {getFamiliarityLabel(healthcareSystem.understandsInsurance, language)}
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// ============================================================================
// EXPORTS
// ============================================================================

export default CulturalContextPanel;
export type { CulturalContextPanelProps };
