/**
 * Musculoskeletal System Educational Content
 *
 * Comprehensive content covering:
 * - Anatomy: Skeletal structure, joints, muscles, connective tissue
 * - Physiology: Bone remodeling, calcium metabolism, muscle function
 * - Conditions: Musculoskeletal disorders and diseases
 */

// Subdirectory exports
export * from './anatomy';
export * from './physiology';
export * from './conditions';

// Import subdirectory default exports
import anatomyContent from './anatomy';
import physiologyContent from './physiology';
import conditionsContent from './conditions';

// Content metadata for discovery
export const musculoskeletalContent = {
  id: 'musculoskeletal',
  name: 'Musculoskeletal System',
  description: 'Comprehensive educational content covering the musculoskeletal system including bones, joints, muscles, and related conditions.',
  categories: [
    { id: 'anatomy', name: 'Anatomy', description: 'Skeletal structure, joints, muscles, and connective tissue' },
    { id: 'physiology', name: 'Physiology', description: 'Bone metabolism, muscle function, and physiological processes' },
    { id: 'conditions', name: 'Conditions', description: 'Musculoskeletal disorders and diseases' },
  ],
  levels: ['beginner', 'intermediate', 'advanced', 'expert', 'master'],
};

// Default export object
export default {
  anatomy: anatomyContent,
  physiology: physiologyContent,
  conditions: conditionsContent,
  metadata: musculoskeletalContent,
};
