/**
 * ENT (Otolaryngology) Specialty Educational Content
 *
 * Comprehensive content covering:
 * - Ear: Anatomy, hearing physiology, hearing loss, infections, tinnitus, vertigo
 * - Nose: Anatomy, sinuses, sinusitis, allergic rhinitis, nasal obstruction
 * - Throat: Anatomy, voice production, tonsillitis, adenoid disorders
 * - Sleep: Obstructive sleep apnea, snoring
 *
 * All content features 5 complexity levels from 8th grade to MD/Professional
 */

// Ear content
export { earAnatomy } from './ear/ear-anatomy';
export { hearingPhysiology } from './ear/hearing-physiology';
export { hearingLoss } from './ear/hearing-loss';
export { otitisMedia } from './ear/otitis-media';
export { otitisExterna } from './ear/otitis-externa';
export { tinnitus } from './ear/tinnitus';
export { vertigo } from './ear/vertigo';

// Nose and sinus content
export { noseAndSinusAnatomy } from './nose/nose-sinus-anatomy';
export { sinusitis } from './nose/sinusitis';
export { allergicRhinitis } from './nose/allergic-rhinitis';

// Throat content
export { throatAnatomy } from './throat/throat-anatomy';
export { voiceAndLarynx } from './throat/voice-larynx';
export { tonsillitisAdenoids } from './throat/tonsillitis-adenoids';

// Sleep disorders
export { sleepApnea } from './throat/sleep-apnea';

// Content categories
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
  'sleep',
] as const;

export type ENTContentCategory = (typeof ENT_CONTENT_CATEGORIES)[number];

// Clinical relevance mapping
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
  hearing: ['hearing-loss'],
  'ear-infections': ['otitis-media', 'otitis-externa'],
  vestibular: ['vertigo', 'tinnitus'],
  'nose-anatomy': ['nose-sinus-anatomy'],
  sinus: ['sinusitis'],
  allergic: ['allergic-rhinitis'],
  'throat-anatomy': ['throat-anatomy', 'voice-larynx'],
  'tonsils-adenoids': ['tonsillitis-adenoids'],
  sleep: ['sleep-apnea'],
} as const;
