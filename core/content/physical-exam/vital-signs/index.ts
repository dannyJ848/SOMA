/**
 * Vital Signs Module Index
 *
 * Exports all vital signs content for the physical examination module.
 */

export { bodyTemperature } from './temperature';
export { bloodPressure } from './blood-pressure';
export { heartRate } from './heart-rate';
export { respiratoryRate } from './respiratory-rate';
export { oxygenSaturation } from './oxygen-saturation';

// Re-export as named collection
import { bodyTemperature } from './temperature';
import { bloodPressure } from './blood-pressure';
import { heartRate } from './heart-rate';
import { respiratoryRate } from './respiratory-rate';
import { oxygenSaturation } from './oxygen-saturation';

export const vitalSignsContent = {
  temperature: bodyTemperature,
  bloodPressure: bloodPressure,
  heartRate: heartRate,
  respiratoryRate: respiratoryRate,
  oxygenSaturation: oxygenSaturation,
};

export default vitalSignsContent;
