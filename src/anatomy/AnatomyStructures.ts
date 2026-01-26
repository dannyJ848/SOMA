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
  // All organs now visible from 'body' level for Complete Anatomy-style layer control
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
    visibility: { structureId: 'brain', minDetailLevel: 'body' },
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
    visibility: { structureId: 'skull', minDetailLevel: 'body' },
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
    visibility: { structureId: 'leftEye', minDetailLevel: 'body' },
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
    visibility: { structureId: 'rightEye', minDetailLevel: 'body' },
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
    visibility: { structureId: 'heart', minDetailLevel: 'body' },
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
    visibility: { structureId: 'leftLung', minDetailLevel: 'body' },
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
    visibility: { structureId: 'rightLung', minDetailLevel: 'body' },
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
    visibility: { structureId: 'ribcage', minDetailLevel: 'body' },
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
    visibility: { structureId: 'liver', minDetailLevel: 'body' },
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
    visibility: { structureId: 'stomach', minDetailLevel: 'body' },
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
    visibility: { structureId: 'smallIntestine', minDetailLevel: 'body' },
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
    visibility: { structureId: 'largeIntestine', minDetailLevel: 'body' },
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
    visibility: { structureId: 'leftKidney', minDetailLevel: 'body' },
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
    visibility: { structureId: 'rightKidney', minDetailLevel: 'body' },
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
    visibility: { structureId: 'spleen', minDetailLevel: 'body' },
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
    visibility: { structureId: 'pancreas', minDetailLevel: 'body' },
    description: 'Produces digestive enzymes and insulin',
    clickable: true,
  },
];

// ============================================
// Skeletal System Structures
// ============================================

export const SKELETAL_STRUCTURES: AnatomicalStructure[] = [
  // Spine - visible at body level for layer toggling
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
    visibility: { structureId: 'spine', minDetailLevel: 'body' },
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
    visibility: { structureId: 'pelvis', minDetailLevel: 'body' },
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
    visibility: { structureId: 'aorta', minDetailLevel: 'body' },
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
    visibility: { structureId: 'superiorVenaCava', minDetailLevel: 'body' },
    description: 'Large vein returning blood to the heart',
    clickable: true,
  },
  {
    id: 'inferiorVenaCava',
    name: 'Inferior Vena Cava',
    latinName: 'Vena Cava Inferior',
    parentId: 'heart',
    system: 'cardiovascular',
    geometry: 'cylinder',
    position: [0.04, 0.35, 0],
    geometryArgs: [0.025, 0.022, 0.4, 16],
    color: '#0000cc',
    emissiveColor: '#0000ff',
    roughness: 0.4,
    visibility: { structureId: 'inferiorVenaCava', minDetailLevel: 'body' },
    description: 'Large vein returning blood from the lower body',
    clickable: true,
  },
  {
    id: 'pulmonaryArtery',
    name: 'Pulmonary Artery',
    latinName: 'Arteria Pulmonalis',
    parentId: 'heart',
    system: 'cardiovascular',
    geometry: 'cylinder',
    position: [-0.03, 0.62, 0.08],
    rotation: [0.3, 0, 0.2],
    geometryArgs: [0.018, 0.015, 0.12, 16],
    color: '#0000cc',
    emissiveColor: '#0000ff',
    roughness: 0.4,
    visibility: { structureId: 'pulmonaryArtery', minDetailLevel: 'body' },
    description: 'Carries deoxygenated blood to the lungs',
    clickable: true,
  },
];

// ============================================
// Nervous System Structures
// ============================================

export const NERVOUS_STRUCTURES: AnatomicalStructure[] = [
  {
    id: 'spinalCord',
    name: 'Spinal Cord',
    latinName: 'Medulla Spinalis',
    system: 'nervous',
    geometry: 'cylinder',
    position: [0, 0.3, -0.08],
    geometryArgs: [0.015, 0.012, 1.2, 16],
    color: '#ffe4c4',
    emissiveColor: '#ffcc99',
    roughness: 0.5,
    visibility: { structureId: 'spinalCord', minDetailLevel: 'body' },
    description: 'The main nerve pathway connecting brain to body',
    clickable: true,
  },
  {
    id: 'cerebellum',
    name: 'Cerebellum',
    latinName: 'Cerebellum',
    parentId: 'head',
    system: 'nervous',
    geometry: 'sphere',
    position: [0, 1.28, -0.1],
    scale: [1.2, 0.7, 0.8],
    geometryArgs: [0.08, 16, 16],
    color: '#e8c0c0',
    emissiveColor: '#ff9999',
    roughness: 0.6,
    visibility: { structureId: 'cerebellum', minDetailLevel: 'body' },
    description: 'Controls motor coordination and balance',
    clickable: true,
  },
  {
    id: 'brainstem',
    name: 'Brainstem',
    latinName: 'Truncus Encephali',
    parentId: 'head',
    system: 'nervous',
    geometry: 'cylinder',
    position: [0, 1.22, 0],
    geometryArgs: [0.03, 0.025, 0.12, 16],
    color: '#e8c0c0',
    emissiveColor: '#ff9999',
    roughness: 0.5,
    visibility: { structureId: 'brainstem', minDetailLevel: 'body' },
    description: 'Controls vital functions like breathing and heart rate',
    clickable: true,
  },
];

// ============================================
// Respiratory System Additional Structures
// ============================================

export const RESPIRATORY_STRUCTURES: AnatomicalStructure[] = [
  {
    id: 'trachea',
    name: 'Trachea',
    latinName: 'Trachea',
    system: 'respiratory',
    geometry: 'cylinder',
    position: [0, 0.85, 0.05],
    geometryArgs: [0.025, 0.025, 0.3, 16],
    color: '#ffcccc',
    roughness: 0.6,
    visibility: { structureId: 'trachea', minDetailLevel: 'body' },
    description: 'The windpipe, conducting air to the lungs',
    clickable: true,
  },
  {
    id: 'leftBronchus',
    name: 'Left Primary Bronchus',
    latinName: 'Bronchus Principalis Sinister',
    system: 'respiratory',
    geometry: 'cylinder',
    position: [-0.08, 0.65, 0.02],
    rotation: [0, 0, Math.PI / 4],
    geometryArgs: [0.018, 0.015, 0.15, 16],
    color: '#ffcccc',
    roughness: 0.6,
    visibility: { structureId: 'leftBronchus', minDetailLevel: 'body' },
    description: 'Main airway to the left lung',
    clickable: true,
  },
  {
    id: 'rightBronchus',
    name: 'Right Primary Bronchus',
    latinName: 'Bronchus Principalis Dexter',
    system: 'respiratory',
    geometry: 'cylinder',
    position: [0.08, 0.65, 0.02],
    rotation: [0, 0, -Math.PI / 5],
    geometryArgs: [0.02, 0.018, 0.12, 16],
    color: '#ffcccc',
    roughness: 0.6,
    visibility: { structureId: 'rightBronchus', minDetailLevel: 'body' },
    description: 'Main airway to the right lung',
    clickable: true,
  },
  {
    id: 'diaphragm',
    name: 'Diaphragm',
    latinName: 'Diaphragma',
    system: 'respiratory',
    geometry: 'torus',
    position: [0, 0.25, 0],
    rotation: [Math.PI / 2, 0, 0],
    geometryArgs: [0.22, 0.03, 16, 32],
    color: '#cc6666',
    roughness: 0.7,
    visibility: { structureId: 'diaphragm', minDetailLevel: 'body' },
    description: 'The primary muscle of respiration',
    clickable: true,
  },
];

// ============================================
// Digestive System Additional Structures
// ============================================

export const DIGESTIVE_STRUCTURES: AnatomicalStructure[] = [
  {
    id: 'esophagus',
    name: 'Esophagus',
    latinName: 'Oesophagus',
    system: 'digestive',
    geometry: 'cylinder',
    position: [0, 0.5, -0.02],
    geometryArgs: [0.015, 0.015, 0.5, 16],
    color: '#e8a0a0',
    roughness: 0.7,
    visibility: { structureId: 'esophagus', minDetailLevel: 'body' },
    description: 'Tube connecting throat to stomach',
    clickable: true,
  },
  {
    id: 'gallbladder',
    name: 'Gallbladder',
    latinName: 'Vesica Biliaris',
    parentId: 'abdomen',
    system: 'digestive',
    geometry: 'sphere',
    position: [0.12, 0.1, 0.12],
    scale: [0.5, 1.2, 0.5],
    geometryArgs: [0.025, 16, 16],
    color: '#228b22',
    roughness: 0.5,
    visibility: { structureId: 'gallbladder', minDetailLevel: 'body' },
    description: 'Stores bile produced by the liver',
    clickable: true,
  },
  {
    id: 'appendix',
    name: 'Appendix',
    latinName: 'Appendix Vermiformis',
    parentId: 'abdomen',
    system: 'digestive',
    geometry: 'cylinder',
    position: [0.18, -0.25, 0.05],
    rotation: [0.5, 0, -0.3],
    geometryArgs: [0.01, 0.008, 0.08, 16],
    color: '#deb887',
    roughness: 0.8,
    visibility: { structureId: 'appendix', minDetailLevel: 'body' },
    description: 'Small pouch attached to the large intestine',
    clickable: true,
  },
];

// ============================================
// Urinary System Additional Structures
// ============================================

export const URINARY_STRUCTURES: AnatomicalStructure[] = [
  {
    id: 'bladder',
    name: 'Urinary Bladder',
    latinName: 'Vesica Urinaria',
    system: 'urinary',
    geometry: 'sphere',
    position: [0, -0.35, 0.08],
    scale: [1, 0.8, 0.7],
    geometryArgs: [0.06, 16, 16],
    color: '#dda0dd',
    roughness: 0.6,
    visibility: { structureId: 'bladder', minDetailLevel: 'body' },
    description: 'Stores urine before excretion',
    clickable: true,
  },
  {
    id: 'leftUreter',
    name: 'Left Ureter',
    latinName: 'Ureter Sinister',
    system: 'urinary',
    geometry: 'cylinder',
    position: [-0.1, -0.18, 0],
    geometryArgs: [0.008, 0.008, 0.3, 16],
    color: '#dda0dd',
    roughness: 0.5,
    visibility: { structureId: 'leftUreter', minDetailLevel: 'body' },
    description: 'Tube carrying urine from kidney to bladder',
    clickable: true,
  },
  {
    id: 'rightUreter',
    name: 'Right Ureter',
    latinName: 'Ureter Dexter',
    system: 'urinary',
    geometry: 'cylinder',
    position: [0.1, -0.18, 0],
    geometryArgs: [0.008, 0.008, 0.3, 16],
    color: '#dda0dd',
    roughness: 0.5,
    visibility: { structureId: 'rightUreter', minDetailLevel: 'body' },
    description: 'Tube carrying urine from kidney to bladder',
    clickable: true,
  },
  {
    id: 'leftAdrenalGland',
    name: 'Left Adrenal Gland',
    latinName: 'Glandula Suprarenalis Sinistra',
    system: 'endocrine',
    geometry: 'sphere',
    position: [-0.15, 0.08, -0.02],
    scale: [1, 0.5, 0.5],
    geometryArgs: [0.025, 16, 16],
    color: '#ffd700',
    roughness: 0.6,
    visibility: { structureId: 'leftAdrenalGland', minDetailLevel: 'body' },
    description: 'Produces hormones including adrenaline',
    clickable: true,
  },
  {
    id: 'rightAdrenalGland',
    name: 'Right Adrenal Gland',
    latinName: 'Glandula Suprarenalis Dextra',
    system: 'endocrine',
    geometry: 'sphere',
    position: [0.15, 0.06, -0.02],
    scale: [1, 0.5, 0.5],
    geometryArgs: [0.025, 16, 16],
    color: '#ffd700',
    roughness: 0.6,
    visibility: { structureId: 'rightAdrenalGland', minDetailLevel: 'body' },
    description: 'Produces hormones including adrenaline',
    clickable: true,
  },
];

// ============================================
// Endocrine System Structures
// ============================================

export const ENDOCRINE_STRUCTURES: AnatomicalStructure[] = [
  {
    id: 'thyroidGland',
    name: 'Thyroid Gland',
    latinName: 'Glandula Thyroidea',
    system: 'endocrine',
    geometry: 'torus',
    position: [0, 0.95, 0.08],
    rotation: [Math.PI / 2, 0, 0],
    geometryArgs: [0.04, 0.015, 16, 32],
    color: '#ff6347',
    roughness: 0.5,
    visibility: { structureId: 'thyroidGland', minDetailLevel: 'body' },
    description: 'Regulates metabolism through hormone production',
    clickable: true,
  },
  {
    id: 'pituitaryGland',
    name: 'Pituitary Gland',
    latinName: 'Glandula Pituitaria',
    parentId: 'head',
    system: 'endocrine',
    geometry: 'sphere',
    position: [0, 1.32, 0.05],
    geometryArgs: [0.015, 16, 16],
    color: '#ff69b4',
    emissiveColor: '#ff69b4',
    roughness: 0.4,
    visibility: { structureId: 'pituitaryGland', minDetailLevel: 'body' },
    description: 'Master gland controlling other endocrine glands',
    clickable: true,
  },
];

// ============================================
// Muscular System Structures (major muscles)
// ============================================

export const MUSCULAR_STRUCTURES: AnatomicalStructure[] = [
  {
    id: 'pectoralisMajor',
    name: 'Pectoralis Major',
    latinName: 'Musculus Pectoralis Major',
    system: 'muscular',
    geometry: 'sphere',
    position: [-0.12, 0.6, 0.15],
    scale: [1.5, 1, 0.3],
    geometryArgs: [0.1, 16, 16],
    color: '#cc6666',
    opacity: 0.8,
    roughness: 0.7,
    visibility: { structureId: 'pectoralisMajor', minDetailLevel: 'body' },
    description: 'Major chest muscle for arm movement',
    clickable: true,
  },
  {
    id: 'pectoralisMajorRight',
    name: 'Pectoralis Major (Right)',
    latinName: 'Musculus Pectoralis Major Dexter',
    system: 'muscular',
    geometry: 'sphere',
    position: [0.12, 0.6, 0.15],
    scale: [1.5, 1, 0.3],
    geometryArgs: [0.1, 16, 16],
    color: '#cc6666',
    opacity: 0.8,
    roughness: 0.7,
    visibility: { structureId: 'pectoralisMajorRight', minDetailLevel: 'body' },
    description: 'Major chest muscle for arm movement',
    clickable: true,
  },
  {
    id: 'rectusAbdominis',
    name: 'Rectus Abdominis',
    latinName: 'Musculus Rectus Abdominis',
    system: 'muscular',
    geometry: 'capsule',
    position: [0, 0, 0.15],
    scale: [0.6, 1, 0.2],
    geometryArgs: [0.08, 0.3, 16, 32],
    color: '#cc6666',
    opacity: 0.8,
    roughness: 0.7,
    visibility: { structureId: 'rectusAbdominis', minDetailLevel: 'body' },
    description: 'Six-pack muscle, flexes the trunk',
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
  ...NERVOUS_STRUCTURES,
  ...RESPIRATORY_STRUCTURES,
  ...DIGESTIVE_STRUCTURES,
  ...URINARY_STRUCTURES,
  ...ENDOCRINE_STRUCTURES,
  ...MUSCULAR_STRUCTURES,
];

// ============================================
// Helper Functions
// ============================================

/**
 * Get structures visible at a given detail level
 * For 'body' level (most zoomed out), returns ALL structures with minDetailLevel: 'body'
 * which includes all organs for Complete Anatomy-style layer toggling
 */
export function getStructuresAtDetailLevel(level: DetailLevel): AnatomicalStructure[] {
  const levelOrder: DetailLevel[] = ['body', 'region', 'organ', 'tissue', 'cellular'];
  const levelIndex = levelOrder.indexOf(level);

  return ALL_STRUCTURES.filter(structure => {
    const minIndex = levelOrder.indexOf(structure.visibility.minDetailLevel);
    const maxIndex = structure.visibility.maxDetailLevel
      ? levelOrder.indexOf(structure.visibility.maxDetailLevel)
      : levelOrder.length - 1;

    // For 'body' level specifically, include ALL structures that have minDetailLevel: 'body'
    // This ensures organs appear when their system is enabled
    if (level === 'body' && structure.visibility.minDetailLevel === 'body') {
      return true;
    }

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
