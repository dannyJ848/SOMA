/**
 * Enhanced Anatomical Materials
 */

import * as THREE from 'three';

export interface AnatomicalMaterialConfig {
  color: string;
  roughness?: number;
  metalness?: number;
  opacity?: number;
  emissive?: string;
  emissiveIntensity?: number;
}

export const ANATOMICAL_MATERIALS: Record<string, AnatomicalMaterialConfig> = {
  compactBone: {
    color: '#f5f5dc',
    roughness: 0.4,
    metalness: 0.1,
    opacity: 1,
  },
  cardiacMuscle: {
    color: '#b84c4c',
    roughness: 0.65,
    emissive: '#ff0000',
    emissiveIntensity: 0.1,
  },
  artery: {
    color: '#cc3333',
    roughness: 0.45,
    emissive: '#ff0000',
    emissiveIntensity: 0.15,
  },
  vein: {
    color: '#3366cc',
    roughness: 0.5,
    emissive: '#0000ff',
    emissiveIntensity: 0.1,
  },
  lungTissue: {
    color: '#ffaaaa',
    roughness: 0.85,
    opacity: 0.85,
  },
  liver: {
    color: '#8b4513',
    roughness: 0.65,
  },
  brainMatter: {
    color: '#f5c0c0',
    roughness: 0.7,
    emissive: '#ff9999',
    emissiveIntensity: 0.05,
  },
  kidney: {
    color: '#8b0000',
    roughness: 0.55,
  },
  highlighted: {
    color: '#ffffff',
    roughness: 0.3,
    emissive: '#22ff44',
    emissiveIntensity: 0.4,
  },
  hovered: {
    color: '#ffffff',
    roughness: 0.3,
    emissive: '#2244ff',
    emissiveIntensity: 0.3,
  },
};

export function getMaterialForStructure(structureId: string): AnatomicalMaterialConfig {
  const map: Record<string, string> = {
    skull: 'compactBone', spine: 'compactBone',
    heart: 'cardiacMuscle', leftLung: 'lungTissue', rightLung: 'lungTissue',
    aorta: 'artery', liver: 'liver', brain: 'brainMatter',
    leftKidney: 'kidney', rightKidney: 'kidney',
  };
  return ANATOMICAL_MATERIALS[map[structureId] || 'compactBone'];
}

export default ANATOMICAL_MATERIALS;
