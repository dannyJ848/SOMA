/**
 * Word Building Module
 *
 * Educational content for understanding medical word construction,
 * including prefixes, suffixes, root words, and combining forms.
 */

// Word building fundamentals
export * from './word-building-fundamentals';
export { wordBuildingFundamentals } from './word-building-fundamentals';

// Module summary
export const wordBuildingModule = {
  id: 'medical-terminology-word-building',
  name: 'Word Building',
  description: 'Comprehensive guide to constructing and deconstructing medical terminology',
  topics: [
    'word-building-fundamentals',
  ],
  category: 'medical-terminology',
};
