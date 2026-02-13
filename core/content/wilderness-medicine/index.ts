/**
 * Wilderness Medicine Educational Content
 *
 * Comprehensive content covering:
 * - Altitude sickness (AMS, HACE, HAPE)
 * - Hypothermia and frostbite
 * - Heat illness (heat exhaustion, heat stroke)
 * - Drowning and water safety
 * - Animal bites and envenomation
 * - Plant poisoning
 * - Wilderness wound care
 * - Lightning injuries
 * - Evacuation decisions
 * - Survival first aid kit
 *
 * All content available at 5 complexity levels for outdoor enthusiast education.
 *
 * IMPORTANT: This content is for educational purposes only and does not
 * constitute medical advice. In any wilderness emergency, prioritize
 * evacuation to definitive medical care when possible.
 */

// Altitude-Related Illness
export { altitudeSickness } from './altitude/altitude-sickness';
export { acuteAltitudeSickness } from './altitude/acute-altitude-sickness';
export { highAltitudeCerebralEdema } from './altitude/high-altitude-cerebral-edema';
export { highAltitudePulmonaryEdema } from './altitude/high-altitude-pulmonary-edema';
export { altitudeAcclimatization } from './altitude/altitude-acclimatization';

// Temperature Extremes
export { hypothermia } from './temperature-extremes/hypothermia';
export { frostbite } from './temperature-extremes/frostbite';
export { coldWaterImmersion } from './temperature-extremes/cold-water-immersion';
export { heatExhaustion } from './temperature-extremes/heat-exhaustion';
export { heatStroke } from './temperature-extremes/heat-stroke';
export { heatCramps } from './temperature-extremes/heat-cramps';

// Water Safety
export { drowning } from './water-safety/drowning';
export { submersionInjury } from './water-safety/submersion-injury';
export { waterRescue } from './water-safety/water-rescue';

// Animal Bites and Envenomation
export { snakeBite } from './envenomation/snake-bite';
export { spiderBite } from './envenomation/spider-bite';
export { scorpionSting } from './envenomation/scorpion-sting';
export { beeWaspSting } from './envenomation/bee-wasp-sting';
export { marineEnvenomation } from './envenomation/marine-envenomation';
export { mammalBites } from './envenomation/mammal-bites';
export { rabiesExposure } from './envenomation/rabies-exposure';

// Plant Poisoning
export { poisonousPlants } from './toxicology/poisonous-plants';
export { contactDermatitis } from './toxicology/contact-dermatitis';
export { mushroomPoisoning } from './toxicology/mushroom-poisoning';

// Wilderness Wound Care
export { wildernessWoundCare } from './wound-care/wilderness-wound-care';
export { bleedingControl } from './wound-care/bleeding-control';
export { woundClosure } from './wound-care/wound-closure';
export { infectionPrevention } from './wound-care/infection-prevention';
export { splinting } from './wound-care/splinting';
export { burnCare } from './wound-care/burn-care';

// Environmental Injuries
export { lightningInjury } from './environmental-injuries/lightning-injury';
export { avalancheInjury } from './environmental-injuries/avalanche-injury';
export { highAltitudeSunburn } from './environmental-injuries/high-altitude-sunburn';

// Decision Making
export { evacuationDecisions } from './decision-making/evacuation-decisions';
export { fieldAssessment } from './decision-making/field-assessment';
export { emergencyCommunication } from './decision-making/emergency-communication';

// Equipment
export { survivalFirstAidKit } from './equipment/survival-first-aid-kit';
export { medicationKit } from './equipment/medication-kit';

// Core Overview Content (New Summary Files)
export { wildernessFirstAidContent } from './wilderness-first-aid';
export { altitudeIllnessContent } from './altitude-illness';
export { coldInjuriesContent } from './cold-injuries';
export { heatIllnessContent } from './heat-illness';
export { wildernessTraumaContent } from './wilderness-trauma';
export { envenomationsContent } from './envenomations';

// Types
export * from './types';

// Content categories
export const WILDERNESS_MEDICINE_CATEGORIES = [
  'altitude',
  'temperature-extremes',
  'water-safety',
  'envenomation',
  'toxicology',
  'wound-care',
  'environmental-injuries',
  'decision-making',
  'equipment',
] as const;

export type WildernessMedicineCategory = (typeof WILDERNESS_MEDICINE_CATEGORIES)[number];
