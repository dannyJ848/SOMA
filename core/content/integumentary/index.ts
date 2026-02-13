/**
 * Integumentary System Educational Content
 *
 * Comprehensive content covering:
 * - Anatomy: Skin layers, hair, nails, glands, and sensory receptors
 * - Future: Physiology, conditions, and dermatological topics
 */

// Subdirectory exports
export * from './anatomy';

// Import subdirectory default exports
import anatomyContent from './anatomy';

// Content metadata for discovery
export const integumentaryContent = {
  id: 'integumentary',
  name: 'Integumentary System',
  description: 'Comprehensive educational content covering the integumentary system including skin, hair, nails, glands, and related structures.',
  categories: [
    { id: 'anatomy', name: 'Anatomy', description: 'Skin layers, hair follicles, nails, glands, and sensory receptors' },
  ],
  levels: ['beginner', 'intermediate', 'advanced', 'expert', 'master'],
};

// Default export object
export default {
  anatomy: anatomyContent,
  metadata: integumentaryContent,
};
