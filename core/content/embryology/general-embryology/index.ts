/**
 * General Embryology - Index
 * Exports all general embryology educational content
 */

export { fertilizationContent as fertilization } from './fertilization';
export { embryogenesisContent as embryogenesis } from './embryogenesis';
export { fetalDevelopmentContent as fetalDevelopment } from './fetal-development';

export const generalEmbryologyModules = [
  'fertilization',
  'embryogenesis',
  'fetalDevelopment'
] as const;

export type GeneralEmbryologyModule = typeof generalEmbryologyModules[number];
