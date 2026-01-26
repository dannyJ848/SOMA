/**
 * Emergency Medicine Content Module Index
 *
 * Exports all emergency medicine educational content modules.
 * This module covers the systematic approach to emergency patients,
 * life-threatening conditions, and time-critical interventions.
 */

import { emergencyApproachContent } from './approach';
import { cardiacEmergenciesContent } from './cardiac-emergencies';
import { respiratoryEmergenciesContent } from './respiratory-emergencies';
import { neurologicEmergenciesContent } from './neurologic-emergencies';
import { traumaContent } from './trauma';
import { abdominalEmergenciesContent } from './abdominal-emergencies';
import { infectiousEmergenciesContent } from './infectious-emergencies';
import { environmentalContent } from './environmental';
import { toxicologicEmergenciesContent } from './toxicologic-emergencies';

export { emergencyApproachContent } from './approach';
export { cardiacEmergenciesContent } from './cardiac-emergencies';
export { respiratoryEmergenciesContent } from './respiratory-emergencies';
export { neurologicEmergenciesContent } from './neurologic-emergencies';
export { traumaContent } from './trauma';
export { abdominalEmergenciesContent } from './abdominal-emergencies';
export { infectiousEmergenciesContent } from './infectious-emergencies';
export { environmentalContent } from './environmental';
export { toxicologicEmergenciesContent } from './toxicologic-emergencies';

/**
 * Emergency Medicine Module Collection
 *
 * All emergency medicine content modules organized for easy import.
 */
export const emergencyMedicineModules = {
  approach: emergencyApproachContent,
  cardiac: cardiacEmergenciesContent,
  respiratory: respiratoryEmergenciesContent,
  neurologic: neurologicEmergenciesContent,
  trauma: traumaContent,
  abdominal: abdominalEmergenciesContent,
  infectious: infectiousEmergenciesContent,
  environmental: environmentalContent,
  toxicologic: toxicologicEmergenciesContent,
};

/**
 * Emergency Medicine Module Metadata
 */
export const emergencyMedicineMetadata = {
  id: 'emergency-medicine',
  title: 'Emergency Medicine',
  description: 'Comprehensive coverage of emergency medicine including assessment, triage, and management of life-threatening conditions',
  category: 'clinical',
  subcategories: [
    'approach-triage',
    'cardiac-emergencies',
    'respiratory-emergencies',
    'neurologic-emergencies',
    'trauma',
    'abdominal-emergencies',
    'infectious-emergencies',
    'environmental',
    'toxicologic-emergencies',
  ],
  modules: Object.keys(emergencyMedicineModules),
  createdAt: '2026-01-25T00:00:00.000Z',
  lastUpdated: '2026-01-25',
};

// Default export for convenience
export default emergencyMedicineModules;
