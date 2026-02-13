/**
 * SpanishLiteracyAssessment.tsx
 * 
 * Initial onboarding assessment for Spanish-speaking patients.
 * Evaluates health literacy with cultural context and generates
 * adaptive complexity profiles.
 * 
 * Features:
 * - Step-by-step assessment flow
 * - Spanish-first with English fallback
 * - Visual aids for low-literacy users
 * - Progress tracking
 * - Adaptive question flow based on responses
 */

import React, { useState, useCallback, useEffect } from 'react';
import {
  AssessmentQuestion,
  AssessmentResponse,
  SpanishLiteracyProfile,
  generateLiteracyProfile,
  ASSESSMENT_QUESTIONS,
  SPANISH_COMPLEXITY_PROFILES,
  SpanishComplexityProfile,
  getProfileDisplayName,
  getProfileDescription,
  getRecommendedFeatures,
  AssessmentConfig,
  QuestionType,
} from '../../../core/assessment/literacy-es';

// ============================================================================
// TYPES
// ============================================================================

interface SpanishLiteracyAssessmentProps {
  /** User ID for profile generation */
  userId: string;
  /** Called when assessment is complete */
  onComplete: (profile: SpanishLiteracyProfile) => void;
  /** Called when user cancels */
  onCancel?: () => void;
  /** Allow skipping the assessment */
  allowSkip?: boolean;
  /** Default language preference */
  language?: 'es' | 'en' | 'both';
  /** Custom welcome message */
  customWelcome?: {
    titleEs: string;
    titleEn: string;
    messageEs: string;
    messageEn: string;
  };
  /** Assessment configuration */
  config?: Partial<AssessmentConfig>;
  /** CSS class name */
  className?: string;
}

interface AssessmentStepProps {
  question: AssessmentQuestion;
  currentResponse?: AssessmentResponse;
  onAnswer: (value: string | number) => void;
  onBack?: () => void;
  showBack: boolean;
  isFirst: boolean;
  isLast: boolean;
  progress: number;
  language: 'es' | 'en' | 'both';
}

interface ResultsViewProps {
  profile: SpanishLiteracyProfile;
  onConfirm: () => void;
  onAdjust: () => void;
  onRetake: () => void;
  language: 'es' | 'en' | 'both';
}

// ============================================================================
// TRANSLATIONS
// ============================================================================

const TRANSLATIONS = {
  es: {
    welcome: 'Bienvenido a Biological Self',
    welcomeSubtitle: 'Ayúdenos a personalizar su experiencia',
    introText: 'Vamos a hacerle algunas preguntas para entender mejor sus necesidades de salud y adaptar la información a su nivel. Esto tomará unos 3-5 minutos.',
    whyImportant: '¿Por qué es importante?',
    whyText: 'Cada persona aprende de manera diferente. Al entender su contexto cultural y nivel de educación, podemos presentarle la información de salud de la manera más útil para usted.',
    privacyNote: 'Su información es privada y solo se usa para personalizar su experiencia.',
    startButton: 'Comenzar Evaluación',
    skipButton: 'Saltar por ahora',
    backButton: 'Atrás',
    nextButton: 'Siguiente',
    questionLabel: 'Pregunta',
    of: 'de',
    helpTooltip: 'Ayuda',
    progressLabel: 'Progreso',
    resultsTitle: 'Su Perfil de Salud Personalizado',
    resultsSubtitle: 'Hemos creado un perfil basado en sus respuestas',
    yourLevel: 'Su Nivel',
    whatThisMeans: '¿Qué significa esto?',
    featuresTitle: 'Características recomendadas para usted',
    confirmProfile: 'Confirmar y Continuar',
    adjustSettings: 'Ajustar Configuración',
    retakeAssessment: 'Repetir Evaluación',
    loading: 'Procesando...',
    errorTitle: 'Ha ocurrido un error',
    errorMessage: 'No pudimos procesar su evaluación. Por favor intente de nuevo.',
    retryButton: 'Reintentar',
    categoryLabels: {
      education: 'Educación',
      skills: 'Habilidades',
      cultural: 'Contexto Cultural',
      system: 'Sistema de Salud',
    },
  },
  en: {
    welcome: 'Welcome to Biological Self',
    welcomeSubtitle: 'Help us personalize your experience',
    introText: 'We will ask you some questions to better understand your health needs and adapt the information to your level. This will take about 3-5 minutes.',
    whyImportant: 'Why is this important?',
    whyText: 'Everyone learns differently. By understanding your cultural context and education level, we can present health information in the most useful way for you.',
    privacyNote: 'Your information is private and only used to personalize your experience.',
    startButton: 'Start Assessment',
    skipButton: 'Skip for now',
    backButton: 'Back',
    nextButton: 'Next',
    questionLabel: 'Question',
    of: 'of',
    helpTooltip: 'Help',
    progressLabel: 'Progress',
    resultsTitle: 'Your Personalized Health Profile',
    resultsSubtitle: 'We have created a profile based on your responses',
    yourLevel: 'Your Level',
    whatThisMeans: 'What does this mean?',
    featuresTitle: 'Recommended features for you',
    confirmProfile: 'Confirm and Continue',
    adjustSettings: 'Adjust Settings',
    retakeAssessment: 'Retake Assessment',
    loading: 'Processing...',
    errorTitle: 'An error has occurred',
    errorMessage: 'We could not process your assessment. Please try again.',
    retryButton: 'Retry',
    categoryLabels: {
      education: 'Education',
      skills: 'Skills',
      cultural: 'Cultural Context',
      system: 'Healthcare System',
    },
  },
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

function getTranslation(key: keyof typeof TRANSLATIONS.es, language: 'es' | 'en' | 'both'): string {
  const lang = language === 'both' ? 'es' : language;
  return TRANSLATIONS[lang][key] || TRANSLATIONS.es[key];
}

function getCategoryLabel(category: string, language: 'es' | 'en' | 'both'): string {
  const lang = language === 'both' ? 'es' : language;
  const labels = TRANSLATIONS[lang].categoryLabels as Record<string, string>;
  return labels[category] || category;
}

// ============================================================================
// COMPONENT: Progress Bar
// ============================================================================

interface ProgressBarProps {
  current: number;
  total: number;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total, className = '' }) => {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className={`literacy-progress-container ${className}`}>
      <div className="literacy-progress-bar-bg">
        <div 
          className="literacy-progress-bar-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="literacy-progress-text">{percentage}%</span>
    </div>
  );
};

// ============================================================================
// COMPONENT: Question Card
// ============================================================================

const AssessmentStep: React.FC<AssessmentStepProps> = ({
  question,
  currentResponse,
  onAnswer,
  onBack,
  showBack,
  isFirst,
  isLast,
  progress,
  language,
}) => {
  const [selectedValue, setSelectedValue] = useState<string | number | null>(
    currentResponse?.value ?? null
  );
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    setSelectedValue(currentResponse?.value ?? null);
  }, [currentResponse]);

  const handleSelect = (value: string | number) => {
    setSelectedValue(value);
    onAnswer(value);
  };

  const displayQuestion = language === 'en' ? question.questionEn : question.questionEs;
  const displayHelp = language === 'en' ? question.helpTextEn : question.helpTextEs;

  return (
    <div className="literacy-question-card">
      {/* Header */}
      <div className="literacy-question-header">
        <div className="literacy-category-badge">
          {getCategoryLabel(question.category, language)}
        </div>
        {displayHelp && (
          <button
            className="literacy-help-button"
            onClick={() => setShowHelp(!showHelp)}
            aria-label={getTranslation('helpTooltip', language)}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>

      {/* Help Text */}
      {showHelp && displayHelp && (
        <div className="literacy-help-text">
          <p>{displayHelp}</p>
        </div>
      )}

      {/* Question */}
      <h3 className="literacy-question-text">{displayQuestion}</h3>

      {/* Visual Aid Placeholder */}
      {question.visualAid && (
        <div className="literacy-visual-aid">
          <img src={question.visualAid} alt="" className="literacy-visual-img" />
        </div>
      )}

      {/* Options */}
      <div className="literacy-options-container">
        {question.options.map((option) => {
          const isSelected = selectedValue === option.value;
          const displayLabel = language === 'en' ? option.labelEn : option.labelEs;

          return (
            <button
              key={String(option.value)}
              className={`literacy-option-button ${isSelected ? 'selected' : ''}`}
              onClick={() => handleSelect(option.value)}
              aria-pressed={isSelected}
            >
              {option.icon && (
                <span className="literacy-option-icon">{option.icon}</span>
              )}
              <span className="literacy-option-label">{displayLabel}</span>
              {isSelected && (
                <span className="literacy-option-check">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="literacy-navigation">
        {showBack && onBack && (
          <button
            className="literacy-btn-secondary"
            onClick={onBack}
            disabled={isFirst}
          >
            {getTranslation('backButton', language)}
          </button>
        )}
        <div className="literacy-progress-indicator">
          {Math.round(progress * 100)}%
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// COMPONENT: Results View
// ============================================================================

const ResultsView: React.FC<ResultsViewProps> = ({
  profile,
  onConfirm,
  onAdjust,
  onRetake,
  language,
}) => {
  const profileInfo = SPANISH_COMPLEXITY_PROFILES[profile.complexityProfile];
  const displayName = getProfileDisplayName(profile.complexityProfile, language as 'es' | 'en');
  const displayDescription = getProfileDescription(profile.complexityProfile, language as 'es' | 'en');
  const features = getRecommendedFeatures(profile.complexityProfile);

  return (
    <div className="literacy-results-container">
      <div className="literacy-results-header">
        <div 
          className="literacy-profile-badge"
          style={{ backgroundColor: profileInfo.color }}
        >
          {displayName}
        </div>
        <h2 className="literacy-results-title">
          {getTranslation('resultsTitle', language)}
        </h2>
        <p className="literacy-results-subtitle">
          {getTranslation('resultsSubtitle', language)}
        </p>
      </div>

      <div className="literacy-results-content">
        {/* Profile Card */}
        <div className="literacy-profile-card">
          <div className="literacy-profile-level">
            <span className="literacy-level-label">
              {getTranslation('yourLevel', language)}
            </span>
            <h3 className="literacy-level-name" style={{ color: profileInfo.color }}>
              {displayName}
            </h3>
          </div>
          
          <div className="literacy-profile-description">
            <h4>{getTranslation('whatThisMeans', language)}</h4>
            <p>{displayDescription}</p>
          </div>
        </div>

        {/* Features List */}
        <div className="literacy-features-section">
          <h4>{getTranslation('featuresTitle', language)}</h4>
          <ul className="literacy-features-list">
            {features.map((feature, index) => (
              <li key={index} className="literacy-feature-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z" clipRule="evenodd"/>
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Cultural Context Summary */}
        {profile.culturalContext && (
          <div className="literacy-cultural-summary">
            <h4>Contexto Cultural / Cultural Context</h4>
            <div className="literacy-cultural-grid">
              <div className="literacy-cultural-item">
                <span className="literacy-cultural-label">Sistema de Salud / Healthcare:</span>
                <span className="literacy-cultural-value">
                  {profile.healthcareSystem.usHealthcareFamiliarity === 'none' || 
                   profile.healthcareSystem.usHealthcareFamiliarity === 'limited'
                    ? 'Necesita guía / Needs guidance'
                    : 'Familiarizado / Familiar'}
                </span>
              </div>
              <div className="literacy-cultural-item">
                <span className="literacy-cultural-label">Nivel Educativo / Education:</span>
                <span className="literacy-cultural-value">
                  {profile.education.yearsOfEducation} años / years
                </span>
              </div>
              <div className="literacy-cultural-item">
                <span className="literacy-cultural-label">Habilidad Numérica / Numeracy:</span>
                <span className="literacy-cultural-value">
                  {profile.numeracy.level === 'none' || profile.numeracy.level === 'basic'
                    ? 'Usar visuales / Use visuals'
                    : 'Buena / Good'}
                </span>
              </div>
              <div className="literacy-cultural-item">
                <span className="literacy-cultural-label">Compartir Familiar / Family Share:</span>
                <span className="literacy-cultural-value">
                  {profile.familyDynamics.wantsShareWithFamily 
                    ? 'Sí / Yes' 
                    : 'No'}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="literacy-results-actions">
        <button 
          className="literacy-btn-primary literacy-btn-confirm"
          onClick={onConfirm}
        >
          {getTranslation('confirmProfile', language)}
        </button>
        <div className="literacy-secondary-actions">
          <button 
            className="literacy-btn-text"
            onClick={onAdjust}
          >
            {getTranslation('adjustSettings', language)}
          </button>
          <button 
            className="literacy-btn-text"
            onClick={onRetake}
          >
            {getTranslation('retakeAssessment', language)}
          </button>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// COMPONENT: Welcome Screen
// ============================================================================

interface WelcomeScreenProps {
  onStart: () => void;
  onSkip?: () => void;
  customWelcome?: SpanishLiteracyAssessmentProps['customWelcome'];
  language: 'es' | 'en' | 'both';
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ 
  onStart, 
  onSkip, 
  customWelcome,
  language 
}) => {
  const title = customWelcome 
    ? (language === 'en' ? customWelcome.titleEn : customWelcome.titleEs)
    : getTranslation('welcome', language);
  
  const subtitle = customWelcome
    ? (language === 'en' ? customWelcome.messageEn : customWelcome.messageEs)
    : getTranslation('welcomeSubtitle', language);

  return (
    <div className="literacy-welcome-container">
      <div className="literacy-welcome-icon">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="2"/>
          <path d="M20 32C20 25.373 25.373 20 32 20C38.627 20 44 25.373 44 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M32 20V32L38 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>

      <h1 className="literacy-welcome-title">{title}</h1>
      <p className="literacy-welcome-subtitle">{subtitle}</p>

      <div className="literacy-welcome-content">
        <p className="literacy-intro-text">
          {getTranslation('introText', language)}
        </p>

        <div className="literacy-info-box">
          <h3>{getTranslation('whyImportant', language)}</h3>
          <p>{getTranslation('whyText', language)}</p>
        </div>

        <p className="literacy-privacy-note">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path fillRule="evenodd" d="M8 0a4 4 0 00-4 4v2.17a2.996 2.996 0 00-1.664 2.18C2.093 8.782 2 9.37 2 10c0 3.314 2.686 6 6 6s6-2.686 6-6c0-.63-.093-1.218-.336-1.65A2.996 2.996 0 0012 6.17V4a4 4 0 00-4-4zm2 6.17V4a2 2 0 10-4 0v2.17a2.996 2.996 0 011.664 2.18C7.907 8.782 8 9.37 8 10c0 .034-.002.068-.006.102A2.002 2.002 0 019 12a2 2 0 11-2-2c0-.63.093-1.218.336-1.65A2.996 2.996 0 019 6.17z" clipRule="evenodd"/>
          </svg>
          {getTranslation('privacyNote', language)}
        </p>
      </div>

      <div className="literacy-welcome-actions">
        <button 
          className="literacy-btn-primary literacy-btn-large"
          onClick={onStart}
        >
          {getTranslation('startButton', language)}
        </button>
        {onSkip && (
          <button 
            className="literacy-btn-text"
            onClick={onSkip}
          >
            {getTranslation('skipButton', language)}
          </button>
        )}
      </div>
    </div>
  );
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export const SpanishLiteracyAssessment: React.FC<SpanishLiteracyAssessmentProps> = ({
  userId,
  onComplete,
  onCancel,
  allowSkip = true,
  language = 'es',
  customWelcome,
  config = {},
  className = '',
}) => {
  // State
  const [step, setStep] = useState<'welcome' | 'assessment' | 'processing' | 'results'>('welcome');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<AssessmentResponse[]>([]);
  const [profile, setProfile] = useState<SpanishLiteracyProfile | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Filter questions based on adaptive logic
  const questions = ASSESSMENT_QUESTIONS;

  // Start assessment
  const handleStart = useCallback(() => {
    setStep('assessment');
    setCurrentQuestionIndex(0);
    setResponses([]);
    setError(null);
  }, []);

  // Handle answer
  const handleAnswer = useCallback((value: string | number) => {
    const question = questions[currentQuestionIndex];
    const response: AssessmentResponse = {
      questionId: question.id,
      value,
      timestamp: new Date(),
      timeSpentMs: 0, // Would track in real implementation
    };

    setResponses(prev => {
      const existing = prev.findIndex(r => r.questionId === question.id);
      if (existing >= 0) {
        const updated = [...prev];
        updated[existing] = response;
        return updated;
      }
      return [...prev, response];
    });

    // Move to next question or complete
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setStep('processing');
      // Process results
      try {
        const newProfile = generateLiteracyProfile([...responses, response], userId);
        setProfile(newProfile);
        setStep('results');
      } catch (err) {
        setError('Failed to generate profile');
        setStep('assessment');
      }
    }
  }, [currentQuestionIndex, questions, responses, userId]);

  // Go back
  const handleBack = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  }, [currentQuestionIndex]);

  // Confirm profile
  const handleConfirm = useCallback(() => {
    if (profile) {
      onComplete(profile);
    }
  }, [profile, onComplete]);

  // Adjust settings
  const handleAdjust = useCallback(() => {
    // Would open settings modal
    console.log('Adjust settings');
  }, []);

  // Retake assessment
  const handleRetake = useCallback(() => {
    setStep('welcome');
    setCurrentQuestionIndex(0);
    setResponses([]);
    setProfile(null);
  }, []);

  // Skip assessment
  const handleSkip = useCallback(() => {
    // Create default basic profile
    const defaultProfile = generateLiteracyProfile([], userId);
    onComplete(defaultProfile);
  }, [userId, onComplete]);

  // Render current step
  const renderContent = () => {
    switch (step) {
      case 'welcome':
        return (
          <WelcomeScreen
            onStart={handleStart}
            onSkip={allowSkip ? handleSkip : undefined}
            customWelcome={customWelcome}
            language={language}
          />
        );

      case 'assessment':
        const currentQuestion = questions[currentQuestionIndex];
        const currentResponse = responses.find(r => r.questionId === currentQuestion.id);
        
        return (
          <div className="literacy-assessment-container">
            <ProgressBar 
              current={currentQuestionIndex + 1} 
              total={questions.length} 
            />
            <AssessmentStep
              question={currentQuestion}
              currentResponse={currentResponse}
              onAnswer={handleAnswer}
              onBack={currentQuestionIndex > 0 ? handleBack : undefined}
              showBack={currentQuestionIndex > 0}
              isFirst={currentQuestionIndex === 0}
              isLast={currentQuestionIndex === questions.length - 1}
              progress={(currentQuestionIndex + 1) / questions.length}
              language={language}
            />
          </div>
        );

      case 'processing':
        return (
          <div className="literacy-processing">
            <div className="literacy-spinner" />
            <p>{getTranslation('loading', language)}</p>
          </div>
        );

      case 'results':
        if (profile) {
          return (
            <ResultsView
              profile={profile}
              onConfirm={handleConfirm}
              onAdjust={handleAdjust}
              onRetake={handleRetake}
              language={language}
            />
          );
        }
        return null;

      default:
        return null;
    }
  };

  return (
    <div className={`spanish-literacy-assessment ${className}`}>
      {error && (
        <div className="literacy-error-banner">
          <h4>{getTranslation('errorTitle', language)}</h4>
          <p>{getTranslation('errorMessage', language)}</p>
          <button onClick={() => setError(null)}>
            {getTranslation('retryButton', language)}
          </button>
        </div>
      )}
      {renderContent()}
    </div>
  );
};

// ============================================================================
// EXPORTS
// ============================================================================

export default SpanishLiteracyAssessment;
export type { SpanishLiteracyAssessmentProps };
