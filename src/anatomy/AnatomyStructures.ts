/**
 * Anatomical Structure Definitions
 *
 * Defines all anatomical structures with their geometry, positions,
 * materials, and LOD visibility settings.
 */

import type { DetailLevel, StructureVisibility } from './AnatomyLODSystem';

// ============================================
// Types
// ============================================

export type GeometryType = 'sphere' | 'cylinder' | 'capsule' | 'box' | 'torus' | 'custom';
export type AnatomicalSystem =
  | 'integumentary'
  | 'muscular'
  | 'skeletal'
  | 'cardiovascular'
  | 'respiratory'
  | 'digestive'
  | 'nervous'
  | 'urinary'
  | 'reproductive'
  | 'lymphatic'
  | 'endocrine';

export interface AnatomicalStructure {
  id: string;
  name: string;
  latinName?: string;
  parentId?: string; // For hierarchical structures
  system: AnatomicalSystem;

  // Geometry
  geometry: GeometryType;
  position: [number, number, number];
  scale?: [number, number, number];
  rotation?: [number, number, number];
  geometryArgs: number[];

  // Appearance
  color: string;
  emissiveColor?: string;
  opacity?: number;
  roughness?: number;
  metalness?: number;

  // LOD settings
  visibility: StructureVisibility;

  // Metadata
  description?: string;
  clickable?: boolean;
}

// ============================================
// Body-Level Structures (outermost)
// ============================================

export const BODY_STRUCTURES: AnatomicalStructure[] = [
  {
    id: 'body-skin',
    name: 'Skin',
    latinName: 'Integumentum',
    system: 'integumentary',
    geometry: 'custom',
    position: [0, 0, 0],
    geometryArgs: [],
    color: '#e8d4c4',
    roughness: 0.8,
    metalness: 0.05,
    visibility: { structureId: 'body-skin', minDetailLevel: 'body', maxDetailLevel: 'region' },
    description: 'The skin, largest organ of the body',
    clickable: true,
  },
];

// ============================================
// Region-Level Structures
// ============================================

export const REGION_STRUCTURES: AnatomicalStructure[] = [
  // Head region
  {
    id: 'head',
    name: 'Head',
    latinName: 'Caput',
    system: 'skeletal',
    geometry: 'sphere',
    position: [0, 1.35, 0],
    geometryArgs: [0.25, 32, 32],
    color: '#e8d4c4',
    visibility: { structureId: 'head', minDetailLevel: 'body' },
    clickable: true,
  },
  // Neck
  {
    id: 'neck',
    name: 'Neck',
    latinName: 'Collum',
    system: 'muscular',
    geometry: 'cylinder',
    position: [0, 1.0, 0],
    geometryArgs: [0.1, 0.12, 0.2, 16],
    color: '#e8d4c4',
    visibility: { structureId: 'neck', minDetailLevel: 'body' },
    clickable: true,
  },
  // Chest/Thorax
  {
    id: 'chest',
    name: 'Chest',
    latinName: 'Thorax',
    system: 'respiratory',
    geometry: 'capsule',
    position: [0, 0.55, 0],
    geometryArgs: [0.3, 0.5, 16, 32],
    color: '#e8d4c4',
    visibility: { structureId: 'chest', minDetailLevel: 'body' },
    clickable: true,
  },
  // Abdomen
  {
    id: 'abdomen',
    name: 'Abdomen',
    latinName: 'Abdomen',
    system: 'digestive',
    geometry: 'capsule',
    position: [0, -0.1, 0],
    geometryArgs: [0.28, 0.4, 16, 32],
    color: '#e8d4c4',
    visibility: { structureId: 'abdomen', minDetailLevel: 'body' },
    clickable: true,
  },
  // Arms
  {
    id: 'leftArm',
    name: 'Left Arm',
    latinName: 'Brachium Sinistrum',
    system: 'muscular',
    geometry: 'cylinder',
    position: [-0.5, 0.4, 0],
    rotation: [0, 0, Math.PI / 6],
    geometryArgs: [0.08, 0.08, 0.8, 16],
    color: '#e8d4c4',
    visibility: { structureId: 'leftArm', minDetailLevel: 'body' },
    clickable: true,
  },
  {
    id: 'rightArm',
    name: 'Right Arm',
    latinName: 'Brachium Dextrum',
    system: 'muscular',
    geometry: 'cylinder',
    position: [0.5, 0.4, 0],
    rotation: [0, 0, -Math.PI / 6],
    geometryArgs: [0.08, 0.08, 0.8, 16],
    color: '#e8d4c4',
    visibility: { structureId: 'rightArm', minDetailLevel: 'body' },
    clickable: true,
  },
  // Legs
  {
    id: 'leftLeg',
    name: 'Left Leg',
    latinName: 'Crus Sinistrum',
    system: 'muscular',
    geometry: 'cylinder',
    position: [-0.18, -0.85, 0],
    geometryArgs: [0.1, 0.1, 1.0, 16],
    color: '#e8d4c4',
    visibility: { structureId: 'leftLeg', minDetailLevel: 'body' },
    clickable: true,
  },
  {
    id: 'rightLeg',
    name: 'Right Leg',
    latinName: 'Crus Dextrum',
    system: 'muscular',
    geometry: 'cylinder',
    position: [0.18, -0.85, 0],
    geometryArgs: [0.1, 0.1, 1.0, 16],
    color: '#e8d4c4',
    visibility: { structureId: 'rightLeg', minDetailLevel: 'body' },
    clickable: true,
  },
];

// ============================================
// Organ-Level Structures
// ============================================

export const ORGAN_STRUCTURES: AnatomicalStructure[] = [
  // === HEAD ORGANS ===
  {
    id: 'brain',
    name: 'Brain',
    latinName: 'Cerebrum',
    parentId: 'head',
    system: 'nervous',
    geometry: 'sphere',
    position: [0, 1.4, 0],
    scale: [1, 0.85, 0.9],
    geometryArgs: [0.18, 32, 32],
    color: '#f5c0c0',
    emissiveColor: '#ff9999',
    roughness: 0.6,
    visibility: { structureId: 'brain', minDetailLevel: 'organ' },
    description: 'The central organ of the nervous system',
    clickable: true,
  },
  {
    id: 'skull',
    name: 'Skull',
    latinName: 'Cranium',
    parentId: 'head',
    system: 'skeletal',
    geometry: 'sphere',
    position: [0, 1.35, 0],
    geometryArgs: [0.23, 32, 32],
    color: '#f5f5dc',
    opacity: 0.3,
    roughness: 0.4,
    visibility: { structureId: 'skull', minDetailLevel: 'organ' },
    description: 'The bony structure protecting the brain',
    clickable: true,
  },
  {
    id: 'leftEye',
    name: 'Left Eye',
    latinName: 'Oculus Sinister',
    parentId: 'head',
    system: 'nervous',
    geometry: 'sphere',
    position: [-0.08, 1.38, 0.18],
    geometryArgs: [0.03, 16, 16],
    color: '#ffffff',
    emissiveColor: '#4488ff',
    roughness: 0.2,
    metalness: 0.3,
    visibility: { structureId: 'leftEye', minDetailLevel: 'organ' },
    clickable: true,
  },
  {
    id: 'rightEye',
    name: 'Right Eye',
    latinName: 'Oculus Dexter',
    parentId: 'head',
    system: 'nervous',
    geometry: 'sphere',
    position: [0.08, 1.38, 0.18],
    geometryArgs: [0.03, 16, 16],
    color: '#ffffff',
    emissiveColor: '#4488ff',
    roughness: 0.2,
    metalness: 0.3,
    visibility: { structureId: 'rightEye', minDetailLevel: 'organ' },
    clickable: true,
  },

  // === CHEST ORGANS ===
  {
    id: 'heart',
    name: 'Heart',
    latinName: 'Cor',
    parentId: 'chest',
    system: 'cardiovascular',
    geometry: 'sphere',
    position: [-0.05, 0.55, 0.1],
    scale: [0.8, 1, 0.7],
    geometryArgs: [0.1, 32, 32],
    color: '#cc3333',
    emissiveColor: '#ff4444',
    roughness: 0.5,
    visibility: { structureId: 'heart', minDetailLevel: 'organ' },
    description: 'The muscular organ that pumps blood throughout the body',
    clickable: true,
  },
  {
    id: 'leftLung',
    name: 'Left Lung',
    latinName: 'Pulmo Sinister',
    parentId: 'chest',
    system: 'respiratory',
    geometry: 'capsule',
    position: [-0.15, 0.55, 0],
    scale: [0.8, 1, 0.6],
    geometryArgs: [0.08, 0.2, 16, 32],
    color: '#ffaaaa',
    opacity: 0.7,
    roughness: 0.7,
    visibility: { structureId: 'leftLung', minDetailLevel: 'organ' },
    description: 'The left respiratory organ',
    clickable: true,
  },
  {
    id: 'rightLung',
    name: 'Right Lung',
    latinName: 'Pulmo Dexter',
    parentId: 'chest',
    system: 'respiratory',
    geometry: 'capsule',
    position: [0.15, 0.55, 0],
    scale: [0.9, 1.1, 0.6],
    geometryArgs: [0.09, 0.22, 16, 32],
    color: '#ffaaaa',
    opacity: 0.7,
    roughness: 0.7,
    visibility: { structureId: 'rightLung', minDetailLevel: 'organ' },
    description: 'The right respiratory organ, larger than the left',
    clickable: true,
  },
  {
    id: 'ribcage',
    name: 'Rib Cage',
    latinName: 'Cavea Thoracis',
    parentId: 'chest',
    system: 'skeletal',
    geometry: 'capsule',
    position: [0, 0.55, 0],
    geometryArgs: [0.28, 0.45, 16, 32],
    color: '#f5f5dc',
    opacity: 0.2,
    roughness: 0.4,
    visibility: { structureId: 'ribcage', minDetailLevel: 'organ' },
    description: 'The bony cage protecting thoracic organs',
    clickable: true,
  },

  // === ABDOMINAL ORGANS ===
  {
    id: 'liver',
    name: 'Liver',
    latinName: 'Hepar',
    parentId: 'abdomen',
    system: 'digestive',
    geometry: 'sphere',
    position: [0.1, 0.15, 0.05],
    scale: [1.5, 0.7, 0.8],
    geometryArgs: [0.12, 32, 32],
    color: '#8b4513',
    roughness: 0.6,
    visibility: { structureId: 'liver', minDetailLevel: 'organ' },
    description: 'The largest internal organ, essential for metabolism',
    clickable: true,
  },
  {
    id: 'stomach',
    name: 'Stomach',
    latinName: 'Ventriculus',
    parentId: 'abdomen',
    system: 'digestive',
    geometry: 'sphere',
    position: [-0.08, 0.1, 0.08],
    scale: [1.2, 0.8, 0.6],
    geometryArgs: [0.1, 32, 32],
    color: '#ffb6c1',
    roughness: 0.7,
    visibility: { structureId: 'stomach', minDetailLevel: 'organ' },
    description: 'The digestive organ that breaks down food',
    clickable: true,
  },
  {
    id: 'smallIntestine',
    name: 'Small Intestine',
    latinName: 'Intestinum Tenue',
    parentId: 'abdomen',
    system: 'digestive',
    geometry: 'torus',
    position: [0, -0.15, 0.05],
    geometryArgs: [0.12, 0.03, 16, 32],
    color: '#deb887',
    roughness: 0.8,
    visibility: { structureId: 'smallIntestine', minDetailLevel: 'organ' },
    description: 'The primary site of nutrient absorption',
    clickable: true,
  },
  {
    id: 'largeIntestine',
    name: 'Large Intestine',
    latinName: 'Intestinum Crassum',
    parentId: 'abdomen',
    system: 'digestive',
    geometry: 'torus',
    position: [0, -0.1, 0],
    geometryArgs: [0.18, 0.04, 16, 32],
    color: '#cd853f',
    roughness: 0.8,
    visibility: { structureId: 'largeIntestine', minDetailLevel: 'organ' },
    description: 'The organ that absorbs water and forms feces',
    clickable: true,
  },
  {
    id: 'leftKidney',
    name: 'Left Kidney',
    latinName: 'Ren Sinister',
    parentId: 'abdomen',
    system: 'urinary',
    geometry: 'capsule',
    position: [-0.15, 0, -0.05],
    scale: [0.5, 1, 0.4],
    geometryArgs: [0.04, 0.08, 16, 32],
    color: '#8b0000',
    roughness: 0.5,
    visibility: { structureId: 'leftKidney', minDetailLevel: 'organ' },
    description: 'Filters blood and produces urine',
    clickable: true,
  },
  {
    id: 'rightKidney',
    name: 'Right Kidney',
    latinName: 'Ren Dexter',
    parentId: 'abdomen',
    system: 'urinary',
    geometry: 'capsule',
    position: [0.15, -0.02, -0.05],
    scale: [0.5, 1, 0.4],
    geometryArgs: [0.04, 0.08, 16, 32],
    color: '#8b0000',
    roughness: 0.5,
    visibility: { structureId: 'rightKidney', minDetailLevel: 'organ' },
    description: 'Filters blood and produces urine',
    clickable: true,
  },
  {
    id: 'spleen',
    name: 'Spleen',
    latinName: 'Lien',
    parentId: 'abdomen',
    system: 'lymphatic',
    geometry: 'sphere',
    position: [-0.18, 0.12, -0.02],
    scale: [0.8, 1, 0.5],
    geometryArgs: [0.05, 16, 16],
    color: '#800080',
    roughness: 0.6,
    visibility: { structureId: 'spleen', minDetailLevel: 'organ' },
    description: 'Filters blood and stores immune cells',
    clickable: true,
  },
  {
    id: 'pancreas',
    name: 'Pancreas',
    latinName: 'Pancreas',
    parentId: 'abdomen',
    system: 'endocrine',
    geometry: 'capsule',
    position: [0, 0.05, 0.02],
    rotation: [0, 0, Math.PI / 8],
    scale: [1.5, 0.4, 0.4],
    geometryArgs: [0.02, 0.1, 16, 32],
    color: '#ffd700',
    roughness: 0.7,
    visibility: { structureId: 'pancreas', minDetailLevel: 'organ' },
    description: 'Produces digestive enzymes and insulin',
    clickable: true,
  },
];

// ============================================
// Skeletal System Structures
// ============================================

export const SKELETAL_STRUCTURES: AnatomicalStructure[] = [
  // Spine
  {
    id: 'spine',
    name: 'Vertebral Column',
    latinName: 'Columna Vertebralis',
    system: 'skeletal',
    geometry: 'cylinder',
    position: [0, 0.3, -0.1],
    geometryArgs: [0.04, 0.03, 1.4, 16],
    color: '#f5f5dc',
    roughness: 0.4,
    visibility: { structureId: 'spine', minDetailLevel: 'organ' },
    description: 'The backbone, protecting the spinal cord',
    clickable: true,
  },
  // Pelvis
  {
    id: 'pelvis',
    name: 'Pelvis',
    latinName: 'Pelvis',
    system: 'skeletal',
    geometry: 'torus',
    position: [0, -0.45, 0],
    rotation: [Math.PI / 2, 0, 0],
    geometryArgs: [0.18, 0.05, 16, 32],
    color: '#f5f5dc',
    roughness: 0.4,
    visibility: { structureId: 'pelvis', minDetailLevel: 'organ' },
    description: 'The bony structure supporting the lower body',
    clickable: true,
  },
];

// ============================================
// Cardiovascular System (vessels)
// ============================================

export const CARDIOVASCULAR_STRUCTURES: AnatomicalStructure[] = [
  {
    id: 'aorta',
    name: 'Aorta',
    latinName: 'Aorta',
    parentId: 'heart',
    system: 'cardiovascular',
    geometry: 'cylinder',
    position: [0, 0.7, 0.02],
    geometryArgs: [0.025, 0.02, 0.35, 16],
    color: '#cc0000',
    emissiveColor: '#ff0000',
    roughness: 0.4,
    visibility: { structureId: 'aorta', minDetailLevel: 'organ' },
    description: 'The largest artery, carrying blood from the heart',
    clickable: true,
  },
  {
    id: 'superiorVenaCava',
    name: 'Superior Vena Cava',
    latinName: 'Vena Cava Superior',
    parentId: 'heart',
    system: 'cardiovascular',
    geometry: 'cylinder',
    position: [0.04, 0.72, 0],
    geometryArgs: [0.02, 0.018, 0.25, 16],
    color: '#0000cc',
    emissiveColor: '#0000ff',
    roughness: 0.4,
    visibility: { structureId: 'superiorVenaCava', minDetailLevel: 'organ' },
    description: 'Large vein returning blood to the heart',
    clickable: true,
  },
];

// ============================================
// All Structures Combined
// ============================================

export const ALL_STRUCTURES: AnatomicalStructure[] = [
  ...BODY_STRUCTURES,
  ...REGION_STRUCTURES,
  ...ORGAN_STRUCTURES,
  ...SKELETAL_STRUCTURES,
  ...CARDIOVASCULAR_STRUCTURES,
];

// ============================================
// Helper Functions
// ============================================

/**
 * Get structures visible at a given detail level
 */
export function getStructuresAtDetailLevel(level: DetailLevel): AnatomicalStructure[] {
  const levelOrder: DetailLevel[] = ['body', 'region', 'organ', 'tissue', 'cellular'];
  const levelIndex = levelOrder.indexOf(level);

  return ALL_STRUCTURES.filter(structure => {
    const minIndex = levelOrder.indexOf(structure.visibility.minDetailLevel);
    const maxIndex = structure.visibility.maxDetailLevel
      ? levelOrder.indexOf(structure.visibility.maxDetailLevel)
      : levelOrder.length - 1;
    return levelIndex >= minIndex && levelIndex <= maxIndex;
  });
}

/**
 * Get structures by anatomical system
 */
export function getStructuresBySystem(system: AnatomicalSystem): AnatomicalStructure[] {
  return ALL_STRUCTURES.filter(structure => structure.system === system);
}

/**
 * Get child structures of a parent
 */
export function getChildStructures(parentId: string): AnatomicalStructure[] {
  return ALL_STRUCTURES.filter(structure => structure.parentId === parentId);
}

/**
 * System colors for layer panel
 */
export const SYSTEM_COLORS: Record<AnatomicalSystem, string> = {
  integumentary: '#e8d4c4',
  muscular: '#cc6666',
  skeletal: '#f5f5dc',
  cardiovascular: '#cc0000',
  respiratory: '#ffaaaa',
  digestive: '#deb887',
  nervous: '#f5c0c0',
  urinary: '#8b0000',
  reproductive: '#ff69b4',
  lymphatic: '#800080',
  endocrine: '#ffd700',
};

export default ALL_STRUCTURES;
