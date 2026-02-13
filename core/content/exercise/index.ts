/**
 * Exercise Science & Rehabilitation Database
 *
 * Comprehensive content covering:
 * - Aerobic exercise (walking, running, swimming, cycling, HIIT, dance)
 * - Strength training (bodyweight, bands, free weights, machines, core)
 * - Flexibility (static/dynamic stretching, yoga, foam rolling)
 * - Balance training (fall prevention, single-leg, tai chi)
 * - Rehabilitation (cardiac, pulmonary, stroke, joint replacement, back, shoulder)
 * - Disease-specific exercise (diabetes, heart failure, COPD, arthritis, osteoporosis, pregnancy, obesity, Parkinson's)
 * - Population-specific (pediatric, adolescent, older adult, pregnancy)
 * - Exercise principles (FITT, progressive overload, prescription, RPE)
 *
 * All entries include AHA/ACSM guidelines, contraindications, modifications,
 * and patient-friendly tips in English and Spanish.
 *
 * IMPORTANT: This content is for educational purposes only and does not
 * constitute medical advice. Always consult with a healthcare provider
 * before starting or modifying an exercise program.
 */

export {
  EXERCISE_ENTRIES,
  getExerciseEntry,
  searchExercises,
  getExercisesByCategory,
  getExerciseCount,
} from './exercise-database';

export type { ExerciseEntry, ExerciseCategory } from './exercise-database';

export const EXERCISE_CATEGORIES = [
  'aerobic',
  'strength',
  'flexibility',
  'balance',
  'rehabilitation',
  'disease-specific',
  'population-specific',
  'principles',
] as const;
