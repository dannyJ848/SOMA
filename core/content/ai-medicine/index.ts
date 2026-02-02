/**
 * AI Medicine Educational Content
 *
 * Comprehensive content covering artificial intelligence in healthcare:
 * - ML Basics: Machine learning fundamentals and neural networks
 * - Clinical AI: AI applications in diagnosis, imaging, and decision support
 * - AI Ethics: Ethical considerations, bias, transparency, and patient consent
 */

import { neuralNetworks } from './ML-basics/neural-networks';
import { mlOverview } from './ML-basics/ml-overview';
import { naturalLanguageML } from './ML-basics/natural-language-ml';
import { aiImaging } from './clinical-AI/ai-imaging';
import { aiDiagnosis } from './clinical-AI/ai-diagnosis';
import { aiDecisionSupport } from './clinical-AI/ai-decision-support';

// ML Basics module exports
export { neuralNetworks } from './ML-basics/neural-networks';
export { mlOverview } from './ML-basics/ml-overview';
export { naturalLanguageML } from './ML-basics/natural-language-ml';

// Clinical AI module exports
export { aiImaging } from './clinical-AI/ai-imaging';
export { aiDiagnosis } from './clinical-AI/ai-diagnosis';
export { aiDecisionSupport } from './clinical-AI/ai-decision-support';

// AI Ethics module exports (re-export from subdirectory index)
export {
  ALGORITHMIC_BIAS,
  patientConsent,
  AI_ETHICS_HEALTHCARE,
  AI_TRANSPARENCY,
  AI_ETHICS_CONTENT_CATEGORIES,
  AI_ETHICS_CLINICAL_PRIORITIES,
  AI_ETHICS_CONTENT_REGISTRY,
  aiEthicsContentModules,
} from './AI-ethics';

// Content categories
export const AI_MEDICINE_CATEGORIES = [
  'ml-basics',
  'clinical-ai',
  'ai-ethics',
  'neural-networks',
  'natural-language',
  'computer-vision',
  'decision-support',
] as const;

export type AIMedicineCategory = typeof AI_MEDICINE_CATEGORIES[number];

// Clinical relevance mapping
export const AI_MEDICINE_CLINICAL_PRIORITIES = {
  'ml-basics': 'high',
  'clinical-ai': 'high',
  'ai-ethics': 'high',
  'neural-networks': 'high',
  'natural-language': 'medium',
  'computer-vision': 'high',
  'decision-support': 'high',
} as const;

// Content registry for programmatic access
export const aiMedicineContent = {
  mlBasics: {
    neuralNetworks,
    mlOverview,
    naturalLanguageML,
  },
  clinicalAI: {
    aiImaging,
    aiDiagnosis,
    aiDecisionSupport,
  },
};

export default aiMedicineContent;
