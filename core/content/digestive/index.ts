/**
 * Digestive System Educational Content
 *
 * Comprehensive content covering:
 * - Anatomy: All major digestive organs and structures
 * - Conditions: Gastrointestinal disorders and diseases
 */

// Subdirectory exports
export * from './anatomy';
export * from './conditions';

// Import subdirectory default exports
import anatomyContent from './anatomy';
import conditionsContent from './conditions';

// Content metadata for discovery
export const digestiveContent = {
  id: 'digestive',
  name: 'Digestive System',
  description: 'Comprehensive educational content covering the digestive system including anatomy, physiology, and related conditions.',
  categories: [
    { id: 'anatomy', name: 'Anatomy', description: 'Major digestive organs and structures from oral cavity to rectum' },
    { id: 'conditions', name: 'Conditions', description: 'Gastrointestinal disorders and diseases' },
  ],
  levels: ['beginner', 'intermediate', 'advanced', 'expert', 'master'],
};

// Default export object
export default {
  anatomy: anatomyContent,
  conditions: conditionsContent,
  metadata: digestiveContent,
};
