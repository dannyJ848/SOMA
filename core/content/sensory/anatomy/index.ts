/**
 * Sensory System Anatomy Index
 *
 * Central export point for all sensory system anatomy educational content
 * including vision, hearing, balance, smell, taste, and touch.
 */

// Vision (Eye) Anatomy
export { visualSystemAnatomy } from './visual-system';
export { eyeAnatomy } from './eye-anatomy';

// Hearing & Balance (Ear) Anatomy
export { auditorySystemAnatomy } from './auditory-system';
export { earAnatomy } from './ear-anatomy';
export { vestibularSystemAnatomy } from './vestibular-system';

// Other Sensory Systems
export { olfactorySystemAnatomy } from './olfactory-system';
export { gustatorySystemAnatomy } from './gustatory-system';
export { somatosensorySystemAnatomy } from './somatosensory-system';

// Sensory Receptors
export { sensoryReceptorsAnatomy } from './sensory-receptors';

// Re-export all content
import { visualSystemAnatomy } from './visual-system';
import { auditorySystemAnatomy } from './auditory-system';
import { vestibularSystemAnatomy } from './vestibular-system';
import { olfactorySystemAnatomy } from './olfactory-system';
import { gustatorySystemAnatomy } from './gustatory-system';
import { somatosensorySystemAnatomy } from './somatosensory-system';

export const sensoryAnatomyAll = [
  visualSystemAnatomy,
  auditorySystemAnatomy,
  vestibularSystemAnatomy,
  olfactorySystemAnatomy,
  gustatorySystemAnatomy,
  somatosensorySystemAnatomy,
];

export default sensoryAnatomyAll;
