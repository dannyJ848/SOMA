/**
 * System Development - Index
 * Exports all system development educational content
 */

export { cardiovascularEmbryoContent as cardiovascularEmbryo } from './cardiovascular-embryo';
export { respiratoryEmbryoContent as respiratoryEmbryo } from './respiratory-embryo';
export { giEmbryoContent as giEmbryo } from './gi-embryo';
export { renalEmbryoContent as renalEmbryo } from './renal-embryo';
export { neuralEmbryoContent as neuralEmbryo } from './neural-embryo';
export { musculoskeletalEmbryoContent as musculoskeletalEmbryo } from './musculoskeletal-embryo';

export const systemDevelopmentModules = [
  'cardiovascularEmbryo',
  'respiratoryEmbryo',
  'giEmbryo',
  'renalEmbryo',
  'neuralEmbryo',
  'musculoskeletalEmbryo'
] as const;

export type SystemDevelopmentModule = typeof systemDevelopmentModules[number];
