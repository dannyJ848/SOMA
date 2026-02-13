/**
 * Emergency Warning Signs Content Module
 *
 * Comprehensive patient education content for recognizing medical emergencies
 * and understanding when to seek different levels of care.
 *
 * IMPORTANT: This content is for educational purposes only and does not
 * constitute medical advice. In any emergency, call 911 or your local
 * emergency number immediately.
 */

// Types export
export * from './types';

// Warning signs content (detailed, focused modules)
export { cardiacWarnings } from './cardiac-warnings';
export { respiratoryWarnings } from './respiratory-warnings';
export { neurologicalWarnings } from './neurological-warnings';
export { abdominalWarnings } from './abdominal-warnings';

// Emergency content (broader emergency-oriented modules)
export { cardiacEmergencies } from './cardiac-emergencies';
export { respiratoryEmergencies } from './respiratory-emergencies';
export { neurologicalEmergencies } from './neurological-emergencies';
export { abdominalEmergencies } from './abdominal-emergencies';
export { psychiatricEmergencies } from './psychiatric-emergencies';

// Content categories
export const EMERGENCY_WARNING_CATEGORIES = [
  'cardiac',
  'respiratory',
  'neurological',
  'abdominal',
  'psychiatric',
  'pediatric',
  'obstetric',
  'metabolic',
] as const;

export type EmergencyWarningCategory = (typeof EMERGENCY_WARNING_CATEGORIES)[number];
