/**
 * Emergency Warning Signs Content Module
 *
 * Comprehensive patient education content for recognizing medical emergencies
 * and understanding when to seek different levels of care.
 *
 * IMPORTANT: This content is for educational purposes only and does not
 * constitute medical advice. In any emergency, call 911 or your local
 * emergency number immediately.
 *
 * NOTE: Content modules are planned for future implementation.
 */

// Types export
export * from './types';

// Content categories for future implementation
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
