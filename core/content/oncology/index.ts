/**
 * Oncology Content Module
 *
 * Comprehensive educational content covering all aspects of cancer biology,
 * diagnosis, staging, and oncology medicine.
 */

// Basics
export { whatIsCancer } from './basics/what-is-cancer';
export { howCancerDevelops } from './basics/how-cancer-develops';
export { stagingExplained } from './basics/staging-explained';
export { gradingExplained } from './basics/grading-explained';

// Content metadata for discovery
export const oncologyContent = {
  id: 'oncology',
  name: 'Oncology',
  description: 'Comprehensive oncology education covering cancer biology, development, staging, and grading.',
  topics: [
    { id: 'what-is-cancer', name: 'What is Cancer', category: 'basics' },
    { id: 'how-cancer-develops', name: 'How Cancer Develops', category: 'basics' },
    { id: 'staging-explained', name: 'Staging Explained', category: 'basics' },
    { id: 'grading-explained', name: 'Grading Explained', category: 'basics' },
  ],
  categories: [
    { id: 'basics', name: 'Cancer Basics', description: 'Fundamental concepts in cancer biology, development, staging, and grading' },
  ],
  levels: ['beginner', 'intermediate', 'advanced', 'expert', 'master'],
  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: '1.0.0',
};

// Type exports for TypeScript
export type { EducationalContent } from '../types';
