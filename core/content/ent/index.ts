import { EducationalContent } from '../types';
import { earContent, earDisordersContent } from './ear';
import { noseContent } from './nose';
import { throatContent } from './throat';
import { voiceContent, voiceDisordersContent } from './voice';
import { headNeckCancerContent } from './head-neck-cancer';
import { allergyEntContent } from './allergy-ent';
import { pediatricEntContent } from './pediatric-ent';
import { entProceduresContent } from './ent-procedures';
import { entEmergenciesContent } from './ent-emergencies';

export { earContent };
export { earDisordersContent };
export { noseContent };
export { throatContent };
export { voiceContent };
export { voiceDisordersContent };
export { headNeckCancerContent };
export { allergyEntContent };
export { pediatricEntContent };
export { entProceduresContent };
export { entEmergenciesContent };

/**
 * ENT (Otolaryngology) Educational Content
 *
 * Comprehensive content covering:
 * - Ear: Anatomy, otitis media, externa, hearing loss
 * - Nose: Rhinitis, sinusitis, epistaxis, polyps
 * - Throat: Pharyngitis, tonsillitis, tonsillectomy
 * - Voice: Laryngitis, hoarseness, vocal cord lesions
 * - Head and Neck: Thyroid, salivary, upper airway tumors
 * - Allergy: Allergic rhinitis from ENT perspective
 * - Pediatrics: Ear tubes, tonsils, foreign bodies
 * - Procedures: Endoscopy, FESS, neck procedures
 * - Emergencies: Airway obstruction, epiglottitis
 */

export const ENT_CONTENT_CATEGORIES = [
  'ear-anatomy',
  'hearing',
  'ear-infections',
  'vestibular',
  'nose-anatomy',
  'sinus',
  'allergic',
  'throat-anatomy',
  'voice',
  'tonsils-adenoids',
  'head-neck-cancer',
  'ent-allergy',
  'pediatric-ent',
  'ent-procedures',
  'ent-emergencies',
] as const;

export type ENTContentCategory = typeof ENT_CONTENT_CATEGORIES[number];

// Clinical relevance mapping based on AAO-HNS guidelines
export const ENT_CLINICAL_PRIORITIES = {
  'acute-epiglottitis': 'critical',
  'peritonsillar-abscess': 'critical',
  'sudden-sensorineural-hearing-loss': 'critical',
  'epistaxis-posterior': 'critical',
  'deep-neck-space-infection': 'critical',
  'obstructive-sleep-apnea': 'high',
  'cholesteatoma': 'high',
  'chronic-sinusitis': 'medium',
  'allergic-rhinitis': 'medium',
  'tinnitus': 'medium',
  'benign-positional-vertigo': 'medium',
} as const;

// Content registry for programmatic access
export const ENT_CONTENT_REGISTRY = {
  'ear-anatomy': ['ear-anatomy', 'hearing-physiology'],
  hearing: ['hearing-loss', 'tinnitus'],
  'ear-infections': ['otitis-media', 'otitis-externa'],
  vestibular: ['vertigo', 'dizziness', 'bppv'],
  'nose-anatomy': ['nose-sinus-anatomy'],
  sinus: ['sinusitis', 'nasal-polyps'],
  allergic: ['allergic-rhinitis', 'allergy-ent'],
  'throat-anatomy': ['throat-anatomy', 'voice-larynx'],
  voice: ['voice-disorders', 'laryngitis', 'hoarseness'],
  'tonsils-adenoids': ['tonsillitis', 'adenoids', 'pediatric-ent'],
  'head-neck-cancer': ['head-neck-cancer', 'thyroid', 'salivary-glands'],
  'ent-allergy': ['allergy-ent', 'allergic-rhinitis'],
  'pediatric-ent': ['pediatric-ent', 'ear-tubes', 'tonsillectomy'],
  'ent-procedures': ['ent-procedures', 'fess', 'tonsillectomy', 'ear-tubes'],
  'ent-emergencies': ['ent-emergencies', 'airway-obstruction', 'epiglottitis'],
} as const;

// All content exports
export const entContentModules = {
  earContent,
  earDisordersContent,
  noseContent,
  throatContent,
  voiceContent,
  headNeckCancerContent,
  allergyEntContent,
  pediatricEntContent,
  entProceduresContent,
  entEmergenciesContent,
};

// Default export for convenience
export default entContentModules;
