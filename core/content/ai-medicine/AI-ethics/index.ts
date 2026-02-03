/**
 * AI Ethics in Healthcare Educational Content
 *
 * Comprehensive content covering ethical considerations for AI in medicine:
 * - Algorithmic Bias: Sources, detection, and mitigation of bias in healthcare AI
 * - Patient Consent: Informed consent frameworks for AI-assisted care
 * - AI Ethics Healthcare: Overarching ethical principles for AI in medicine
 * - AI Transparency: Explainability and interpretability in healthcare AI
 */

import { EducationalContent } from '../../types';

export { ALGORITHMIC_BIAS } from './algorithmic-bias';
export { patientConsent } from './patient-consent';
export { AI_ETHICS_HEALTHCARE } from './ai-ethics-healthcare';
export { AI_TRANSPARENCY } from './ai-transparency';

export const AI_ETHICS_CONTENT_CATEGORIES = [
  'algorithmic-bias',
  'patient-consent',
  'ai-ethics-general',
  'transparency',
  'accountability',
  'fairness',
  'privacy',
] as const;

export type AIEthicsContentCategory = typeof AI_ETHICS_CONTENT_CATEGORIES[number];

// Clinical relevance mapping
export const AI_ETHICS_CLINICAL_PRIORITIES = {
  'algorithmic-bias': 'high',
  'patient-consent': 'high',
  'ai-ethics-general': 'high',
  'transparency': 'high',
  'accountability': 'medium',
  'fairness': 'high',
  'privacy': 'high',
} as const;

// Content registry for programmatic access
export const AI_ETHICS_CONTENT_REGISTRY = {
  'algorithmic-bias': ['bias-detection', 'bias-mitigation', 'fairness-metrics'],
  'patient-consent': ['informed-consent', 'disclosure', 'data-governance'],
  'ai-ethics-general': ['beneficence', 'non-maleficence', 'autonomy', 'justice'],
  transparency: ['explainability', 'documentation', 'audit', 'xai'],
  accountability: ['liability', 'governance', 'oversight'],
  fairness: ['equity', 'discrimination', 'health-disparities'],
  privacy: ['data-protection', 'hipaa', 'gdpr'],
} as const;

// All content exports
import { ALGORITHMIC_BIAS } from './algorithmic-bias';
import { patientConsent } from './patient-consent';
import { AI_ETHICS_HEALTHCARE } from './ai-ethics-healthcare';
import { AI_TRANSPARENCY } from './ai-transparency';

export const aiEthicsContentModules = {
  algorithmicBias: ALGORITHMIC_BIAS,
  patientConsent,
  aiEthicsHealthcare: AI_ETHICS_HEALTHCARE,
  aiTransparency: AI_TRANSPARENCY,
};

// Default export for convenience
export default aiEthicsContentModules;
