/**
 * Clotting Disorders Module Index
 *
 * Educational content covering:
 * - Deep Vein Thrombosis (DVT)
 * - Pulmonary Embolism (PE)
 * - Thrombophilia
 * - Hypercoagulable States
 * - Anticoagulation
 */

// Core clotting disorders
export { deepVeinThrombosis } from './deep-vein-thrombosis';
export { pulmonaryEmbolism } from './pulmonary-embolism';
export { thrombophilia } from './thrombophilia';
export { hypercoagulableStates } from './hypercoagulable-states';
export { anticoagulation } from './anticoagulation';

// Legacy export (dvt-pe.ts) - combined DVT/PE content maintained for backwards compatibility
export { dvtPe } from './dvt-pe';

// All clotting disorders content
export const clottingDisordersContent = {
  category: 'clotting-disorders',
  topics: [
    'deep-vein-thrombosis',
    'pulmonary-embolism',
    'thrombophilia',
    'hypercoagulable-states',
    'anticoagulation',
  ],
};

export default clottingDisordersContent;
