/**
 * Genetic Counseling Content Module
 *
 * Educational content covering genetic counseling practice, genetic testing
 * technologies, result interpretation, pedigree analysis, inheritance patterns,
 * prenatal genetic testing, and ethical considerations.
 *
 * IMPORTANT: This content is for educational purposes only and does not
 * constitute medical advice. Always consult a board-certified genetic
 * counselor or medical geneticist for personal genetic questions.
 */

export { geneticCounselingOverview } from './genetic-counseling-overview';

// Content categories within genetic counseling
export const GENETIC_COUNSELING_CATEGORIES = [
  'overview',
  'genetic-testing-types',
  'result-interpretation',
  'pedigree-analysis',
  'inheritance-patterns',
  'prenatal-testing',
  'ethical-considerations',
  'carrier-screening',
] as const;

export type GeneticCounselingCategory = (typeof GENETIC_COUNSELING_CATEGORIES)[number];
