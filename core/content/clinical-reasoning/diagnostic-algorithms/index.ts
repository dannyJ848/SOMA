/**
 * Diagnostic Algorithms
 *
 * Step-by-step approaches to evaluating common clinical presentations.
 * Each algorithm guides clinical thinking from initial presentation
 * through differential diagnosis and appropriate next steps.
 */

export * from './chest-pain';
export * from './dyspnea';
export * from './abdominal-pain';
export * from './headache';
export * from './syncope';
export * from './fever';

export const DIAGNOSTIC_ALGORITHM_PRESENTATIONS = [
  'chest-pain',
  'dyspnea',
  'abdominal-pain',
  'headache',
  'syncope',
  'fever',
] as const;
