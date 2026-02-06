/**
 * Promotora (Community Health Worker) Integration Module
 * 
 * Main entry point for all Promotora de Salud features.
 * Supports culturally appropriate healthcare navigation for Latino communities.
 * 
 * Features:
 * - Dashboard for managing assigned patients
 * - Guided session mode for patient education
 * - Community resources directory
 * - Cultural healthcare navigation guides
 * - Trust building and privacy guarantees
 * 
 * All content supports Spanish/English localization.
 */

// ============================================================================
// Type Exports
// ============================================================================

export * from './types';

// ============================================================================
// Module Exports
// ============================================================================

export * as Dashboard from './dashboard';
export * as GuidedSession from './guided-session';
export * as Resources from './resources';
export * as Navigation from './navigation';
export * as Trust from './trust';

// ============================================================================
// Re-exports for convenience
// ============================================================================

// Dashboard
export {
  getAssignedPatients,
  getInactivePatients,
  getPatientsWithConcerningLabs,
  getModuleCompletionSummary,
  getDashboardStats,
  getRecentActivity,
  acknowledgeAlert,
  getActiveAlerts,
  DEFAULT_DASHBOARD_CONFIG,
  type DashboardConfig,
  type GetPatientsOptions,
} from './dashboard';

// Guided Session
export {
  SESSION_TEMPLATES,
  TEACHING_TIPS,
  createSession,
  startSession,
  completeSession,
  updateSessionProgress,
  enableScreenShare,
  addScreenAnnotation,
  getTeachingTips,
  type SessionTemplate,
  type TeachingTip,
  type CreateSessionOptions,
} from './guided-session';

// Resources
export {
  SAMPLE_RESOURCES,
  RESOURCE_CATEGORY_LABELS,
  RESOURCE_CATEGORIES,
  searchResources,
  getResourcesByType,
  getResourceById,
  getNearbyResources,
  getImmigrationSafeResources,
  formatHours,
  formatCostInfo,
  type SearchResourcesOptions,
} from './resources';

// Navigation
export {
  NAVIGATION_GUIDES,
  CATEGORY_LABELS,
  getAllGuides,
  getGuideById,
  getGuidesByCategory,
  searchGuides,
  formatSteps,
  formatFAQ,
  getRequiredDocumentsList,
} from './navigation';

// Trust
export {
  PRIVACY_GUARANTEES,
  DATA_POLICIES,
  COMMUNITY_TESTIMONIALS,
  TRUST_BADGES,
  CONSENT_TEMPLATES,
  getPrivacyGuarantees,
  getPrivacyGuaranteeById,
  getDataPolicies,
  getDataPolicyByCategory,
  getTestimonials,
  getTrustBadges,
  getConsentTemplate,
  calculateTrustScore,
  getTrustScoreExplanation,
  type TrustScore,
} from './trust';

// ============================================================================
// Module Metadata
// ============================================================================

export const PROMOTORA_MODULE_VERSION = '1.0.0';

export const PROMOTORA_MODULE_INFO = {
  name: 'Promotora Integration',
  nameEs: 'Integración de Promotoras de Salud',
  description: 'Community Health Worker integration for Latino health support',
  descriptionEs: 'Integración de Promotoras de Salud para apoyo de salud latina',
  version: PROMOTORA_MODULE_VERSION,
  supportedLanguages: ['es', 'en'] as const,
  defaultLanguage: 'es' as const,
};

// ============================================================================
// Utility Functions
// ============================================================================

import type { LocalizedText, Language } from './types';

/**
 * Get localized text in the requested language
 */
export function getLocalizedText(
  text: LocalizedText,
  language: Language = 'es'
): string {
  return text[language] || text.es;
}

/**
 * Create a localized text object
 */
export function createLocalizedText(
  es: string,
  en: string
): LocalizedText {
  return { es, en };
}

/**
 * Format a date for display in the appropriate language
 */
export function formatDate(
  date: Date,
  language: Language = 'es',
  options?: Intl.DateTimeFormatOptions
): string {
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options,
  };

  const locale = language === 'es' ? 'es-US' : 'en-US';
  return date.toLocaleDateString(locale, defaultOptions);
}

/**
 * Check if a feature is available for a given language
 */
export function isLanguageSupported(language: string): language is Language {
  return PROMOTORA_MODULE_INFO.supportedLanguages.includes(language as Language);
}

// ============================================================================
// Quick Start Guide
// ============================================================================

export const QUICK_START_GUIDE = {
  forPromotoras: {
    title: createLocalizedText(
      'Guía Rápida para Promotoras',
      'Quick Start Guide for Promotoras'
    ),
    steps: [
      {
        title: createLocalizedText('Iniciar Sesión', 'Log In'),
        description: createLocalizedText(
          'Use sus credenciales para acceder al panel de Promotora.',
          'Use your credentials to access the Promotora dashboard.'
        ),
      },
      {
        title: createLocalizedText('Ver Pacientes Asignados', 'View Assigned Patients'),
        description: createLocalizedText(
          'Revise su lista de pacientes y quienes necesitan atención.',
          'Review your patient list and who needs attention.'
        ),
      },
      {
        title: createLocalizedText('Iniciar Sesión Guiada', 'Start Guided Session'),
        description: createLocalizedText(
          'Seleccione un paciente y el modo de sesión apropiado.',
          'Select a patient and the appropriate session mode.'
        ),
      },
      {
        title: createLocalizedText('Explorar Recursos', 'Explore Resources'),
        description: createLocalizedText(
          'Encuentre recursos comunitarios para sus pacientes.',
          'Find community resources for your patients.'
        ),
      },
    ],
  },
  forPatients: {
    title: createLocalizedText(
      'Guía Rápida para Pacientes',
      'Quick Start Guide for Patients'
    ),
    steps: [
      {
        title: createLocalizedText('Conectar con Promotora', 'Connect with Promotora'),
        description: createLocalizedText(
          'Su Promotora le enviará una invitación para conectar.',
          'Your Promotora will send you an invitation to connect.'
        ),
      },
      {
        title: createLocalizedText('Dar Consentimiento', 'Give Consent'),
        description: createLocalizedText(
          'Revise y apruebe el acceso de su Promotora a su información.',
          'Review and approve your Promotora\'s access to your information.'
        ),
      },
      {
        title: createLocalizedText('Programar Sesión', 'Schedule Session'),
        description: createLocalizedText(
          'Coordine una hora para su sesión guiada.',
          'Coordinate a time for your guided session.'
        ),
      },
      {
        title: createLocalizedText('Aprender Juntos', 'Learn Together'),
        description: createLocalizedText(
          'Su Promotora le guiará a través de la aplicación.',
          'Your Promotora will guide you through the app.'
        ),
      },
    ],
  },
};
