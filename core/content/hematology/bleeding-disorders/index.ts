/**
 * Bleeding Disorders Module Index
 *
 * Educational content covering:
 * - Hemophilia A and B
 * - von Willebrand Disease
 * - Platelet Disorders
 */

// Core bleeding disorders
export { hemophilia } from './hemophilia';
export { vonWillebrandDisease } from './von-willebrand-disease';
export { plateletDisorders } from './platelet-disorders';

// Legacy export (von-willebrand.ts) - maintained for backwards compatibility
export { vonWillebrandDisease as vonWillebrand } from './von-willebrand';

// All bleeding disorders content
export const bleedingDisordersContent = {
  category: 'bleeding-disorders',
  topics: [
    'hemophilia',
    'von-willebrand-disease',
    'platelet-disorders',
  ],
};

export default bleedingDisordersContent;
