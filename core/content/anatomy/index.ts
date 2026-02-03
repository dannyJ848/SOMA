/**
 * Anatomy Content Main Index
 *
 * Central export point for all anatomical content including
 * congenital variations, common anomalies, surgical relevance,
 * and body system anatomy.
 */

// Congenital Variations
export {
  VASCULAR_VARIATIONS,
  ORGAN_VARIATIONS,
  SKELETAL_VARIATIONS,
} from './congenital-variations';

// Common Anomalies
export {
  COMMON_CONGENITAL,
  ANATOMICAL_VARIANTS,
  NORMAL_VARIATION,
  CLINICALLY_SIGNIFICANT,
} from './common-anomalies';

// Surgical Relevance
export {
  SURGICALLY_RELEVANT,
  IMAGING_VARIANTS,
  ANOMALY_DETECTION,
} from './surgical-relevance';

// Body System Anatomy Encyclopedia
export {
  ANATOMY_REGIONS,
  type AnatomyRegion,
  type AnatomySystem,
} from './anatomy-encyclopedia';

// Sensory System Anatomy
export {
  // Vision
  visualSystemAnatomy,
  eyeAnatomy,
  // Auditory
  auditorySystemAnatomy,
  earAnatomy,
  vestibularSystemAnatomy,
  // Chemical Senses
  olfactorySystemAnatomy,
  gustatorySystemAnatomy,
  // Somatosensory
  somatosensorySystemAnatomy,
  sensoryReceptorsAnatomy,
  // Collections
  sensoryAnatomyAll,
} from '../sensory/anatomy';

// Import all for default export
import { sensoryAnatomyAll } from '../sensory/anatomy';

// Combined exports for convenience
export const allAnatomyContent = {
  sensory: sensoryAnatomyAll,
};

export default allAnatomyContent;
