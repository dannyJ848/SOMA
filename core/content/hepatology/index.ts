/**
 * Hepatology Content Module
 *
 * Comprehensive educational content covering all aspects of liver disease,
 * hepatic function, and hepatobiliary medicine.
 */

// Liver Function
export { liverEnzymes } from './liver-function/liver-enzymes';
export { liverFunctionTests } from './liver-function/liver-function-tests';
export { whatTheLiverDoes } from './liver-function/what-the-liver-does';

// Content metadata for discovery
export const hepatologyContent = {
  id: 'hepatology',
  name: 'Hepatology',
  description: 'Comprehensive hepatology education covering liver function, liver enzymes, and hepatobiliary disease.',
  topics: [
    { id: 'liver-enzymes', name: 'Liver Enzymes', category: 'liver-function' },
    { id: 'liver-function-tests', name: 'Liver Function Tests', category: 'liver-function' },
    { id: 'what-the-liver-does', name: 'What the Liver Does', category: 'liver-function' },
  ],
  categories: [
    { id: 'liver-function', name: 'Liver Function', description: 'Understanding how the liver works and how to test it' },
  ],
  levels: ['beginner', 'intermediate', 'advanced', 'expert', 'master'],
  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: '1.0.0',
};

// Type exports for TypeScript
export type { EducationalContent } from '../types';
