/**
 * Enhanced Anatomical Materials System
 *
 * A sophisticated material system for the 3D anatomy viewer, optimized for
 * iPhone 14+ GPU capabilities. Provides cinematic quality materials with:
 *
 * - MeshPhysicalMaterial for key organs (clearcoat, sheen, transmission)
 * - Subsurface scattering simulation for skin/organs (via transmission)
 * - Iridescence for wet tissue appearance
 * - Material LOD (simpler materials at distance)
 * - Three quality levels: 'basic', 'standard', 'cinematic'
 *
 * Target: Cinematic quality at 60fps on iPhone 14
 */

import * as THREE from 'three';
import { useMemo } from 'react';

// ============================================
// Types & Interfaces
// ============================================

/**
 * Material quality levels
 * - basic: MeshLambertMaterial (fastest, for older devices)
 * - standard: MeshStandardMaterial (balanced quality/performance)
 * - cinematic: MeshPhysicalMaterial (full features for iPhone 14+)
 */
export type MaterialQuality = 'basic' | 'standard' | 'cinematic';

/**
 * Tissue types for anatomically accurate materials
 */
export type TissueType =
  | 'skin'
  | 'bone'
  | 'muscle'
  | 'cardiac_muscle'
  | 'smooth_muscle'
  | 'organ_parenchyma'
  | 'organ_wet'
  | 'blood_vessel_artery'
  | 'blood_vessel_vein'
  | 'blood_vessel_capillary'
  | 'neural_tissue'
  | 'neural_white_matter'
  | 'lung_tissue'
  | 'liver_tissue'
  | 'kidney_tissue'
  | 'cartilage'
  | 'tendon'
  | 'fat'
  | 'mucosa'
  | 'serous_membrane'
  | 'connective_tissue'
  | 'glandular'
  | 'eye_sclera'
  | 'eye_cornea';

/**
 * Base material configuration (compatible with all quality levels)
 */
export interface BaseMaterialConfig {
  color: string;
  roughness: number;
  metalness: number;
  opacity?: number;
  transparent?: boolean;
  emissive?: string;
  emissiveIntensity?: number;
  side?: THREE.Side;
}

/**
 * Extended material config for standard quality
 */
export interface StandardMaterialConfig extends BaseMaterialConfig {
  normalScale?: number;
  aoIntensity?: number;
  envMapIntensity?: number;
}

/**
 * Full cinematic material config with physical properties
 */
export interface CinematicMaterialConfig extends StandardMaterialConfig {
  // Subsurface scattering simulation (via transmission)
  transmission?: number;
  thickness?: number;
  attenuationColor?: string;
  attenuationDistance?: number;

  // Clearcoat (wet/shiny surface layer)
  clearcoat?: number;
  clearcoatRoughness?: number;

  // Sheen (soft velvet-like reflection for fabrics/muscles)
  sheen?: number;
  sheenRoughness?: number;
  sheenColor?: string;

  // Iridescence (rainbow effect for wet tissues)
  iridescence?: number;
  iridescenceIOR?: number;
  iridescenceThicknessRange?: [number, number];

  // Anisotropy (directional reflection for muscle fibers)
  anisotropy?: number;
  anisotropyRotation?: number;

  // Index of refraction
  ior?: number;

  // Specular
  specularIntensity?: number;
  specularColor?: string;
}

/**
 * Material preset combining all quality levels
 */
export interface AnatomicalMaterialPreset {
  name: string;
  tissueType: TissueType;
  description: string;
  basic: BaseMaterialConfig;
  standard: StandardMaterialConfig;
  cinematic: CinematicMaterialConfig;
}

/**
 * LOD material settings based on camera distance
 */
export interface MaterialLODConfig {
  /** Distance at which to use basic materials regardless of quality setting */
  basicThreshold: number;
  /** Distance at which to use standard materials */
  standardThreshold: number;
  /** Below this distance, use the full quality setting */
  cinematicThreshold: number;
}

// ============================================
// Default LOD Configuration
// ============================================

export const DEFAULT_MATERIAL_LOD: MaterialLODConfig = {
  basicThreshold: 8, // > 8 units: always basic materials
  standardThreshold: 5, // 5-8 units: standard materials
  cinematicThreshold: 3, // < 3 units: full cinematic quality
};

// ============================================
// Anatomically Accurate Material Presets
// ============================================

/**
 * Comprehensive material presets for all anatomical tissue types
 * Based on real optical properties of biological tissues
 */
export const ANATOMICAL_MATERIAL_PRESETS: Record<string, AnatomicalMaterialPreset> = {
  // ========== SKIN ==========
  skin: {
    name: 'Skin',
    tissueType: 'skin',
    description: 'Human skin with subsurface scattering for realistic flesh tones',
    basic: {
      color: '#e8c4b8',
      roughness: 0.7,
      metalness: 0.0,
      emissive: '#331111',
      emissiveIntensity: 0.05,
    },
    standard: {
      color: '#e8c4b8',
      roughness: 0.65,
      metalness: 0.0,
      envMapIntensity: 0.3,
      emissive: '#331111',
      emissiveIntensity: 0.08,
    },
    cinematic: {
      color: '#f0d0c0',
      roughness: 0.55,
      metalness: 0.0,
      // Subsurface scattering simulation
      transmission: 0.15,
      thickness: 0.8,
      attenuationColor: '#ff8866', // Pink/red undertones
      attenuationDistance: 0.5,
      // Slight sheen for skin oils
      sheen: 0.3,
      sheenRoughness: 0.6,
      sheenColor: '#ffeeee',
      // Very subtle iridescence
      iridescence: 0.05,
      iridescenceIOR: 1.3,
      iridescenceThicknessRange: [100, 400],
      ior: 1.4,
      specularIntensity: 0.3,
      specularColor: '#ffffff',
    },
  },

  // ========== BONE ==========
  compactBone: {
    name: 'Compact Bone',
    tissueType: 'bone',
    description: 'Dense cortical bone with subtle texture variation',
    basic: {
      color: '#f5f0dc',
      roughness: 0.4,
      metalness: 0.1,
    },
    standard: {
      color: '#f5f0dc',
      roughness: 0.35,
      metalness: 0.08,
      normalScale: 0.3,
      envMapIntensity: 0.4,
    },
    cinematic: {
      color: '#f8f4e8',
      roughness: 0.3,
      metalness: 0.05,
      // Bone has slight translucency at edges
      transmission: 0.02,
      thickness: 2.0,
      attenuationColor: '#fff5e0',
      attenuationDistance: 3.0,
      clearcoat: 0.1,
      clearcoatRoughness: 0.4,
      // Subtle pearlescent quality
      iridescence: 0.1,
      iridescenceIOR: 1.45,
      iridescenceThicknessRange: [200, 600],
      ior: 1.55,
      specularIntensity: 0.5,
      specularColor: '#fffef0',
    },
  },

  spongyBone: {
    name: 'Spongy Bone',
    tissueType: 'bone',
    description: 'Trabecular/cancellous bone with porous appearance',
    basic: {
      color: '#e8e0c8',
      roughness: 0.7,
      metalness: 0.05,
    },
    standard: {
      color: '#e8e0c8',
      roughness: 0.65,
      metalness: 0.03,
      normalScale: 0.5,
    },
    cinematic: {
      color: '#f0e8d8',
      roughness: 0.6,
      metalness: 0.02,
      transmission: 0.05,
      thickness: 1.5,
      attenuationColor: '#ffddcc',
      attenuationDistance: 2.0,
      ior: 1.5,
    },
  },

  // ========== MUSCLE ==========
  skeletalMuscle: {
    name: 'Skeletal Muscle',
    tissueType: 'muscle',
    description: 'Striated muscle with fiber direction hints (anisotropy)',
    basic: {
      color: '#b84c4c',
      roughness: 0.65,
      metalness: 0.0,
    },
    standard: {
      color: '#b84c4c',
      roughness: 0.6,
      metalness: 0.0,
      normalScale: 0.4,
      envMapIntensity: 0.2,
    },
    cinematic: {
      color: '#c85858',
      roughness: 0.5,
      metalness: 0.0,
      // Muscle fiber anisotropy
      anisotropy: 0.7,
      anisotropyRotation: 0,
      // Wet muscle sheen
      sheen: 0.4,
      sheenRoughness: 0.5,
      sheenColor: '#ff9999',
      // Slight translucency
      transmission: 0.08,
      thickness: 0.5,
      attenuationColor: '#882222',
      attenuationDistance: 0.8,
      // Wet surface
      clearcoat: 0.2,
      clearcoatRoughness: 0.3,
      iridescence: 0.15,
      iridescenceIOR: 1.33,
      iridescenceThicknessRange: [100, 300],
      ior: 1.4,
      specularIntensity: 0.4,
      specularColor: '#ffcccc',
    },
  },

  cardiacMuscle: {
    name: 'Cardiac Muscle',
    tissueType: 'cardiac_muscle',
    description: 'Heart muscle with rich blood supply coloration',
    basic: {
      color: '#cc3333',
      roughness: 0.6,
      metalness: 0.0,
      emissive: '#ff0000',
      emissiveIntensity: 0.15,
    },
    standard: {
      color: '#cc3333',
      roughness: 0.55,
      metalness: 0.0,
      emissive: '#ff0000',
      emissiveIntensity: 0.12,
      normalScale: 0.35,
    },
    cinematic: {
      color: '#dd4444',
      roughness: 0.45,
      metalness: 0.0,
      emissive: '#ff2222',
      emissiveIntensity: 0.1,
      // Cardiac muscle anisotropy (less pronounced than skeletal)
      anisotropy: 0.4,
      anisotropyRotation: 0.5,
      sheen: 0.5,
      sheenRoughness: 0.4,
      sheenColor: '#ff6666',
      transmission: 0.1,
      thickness: 0.6,
      attenuationColor: '#990000',
      attenuationDistance: 0.6,
      clearcoat: 0.3,
      clearcoatRoughness: 0.25,
      iridescence: 0.2,
      iridescenceIOR: 1.33,
      iridescenceThicknessRange: [100, 350],
      ior: 1.38,
      specularIntensity: 0.45,
      specularColor: '#ffaaaa',
    },
  },

  smoothMuscle: {
    name: 'Smooth Muscle',
    tissueType: 'smooth_muscle',
    description: 'Visceral smooth muscle (organs, vessels)',
    basic: {
      color: '#cc7777',
      roughness: 0.7,
      metalness: 0.0,
    },
    standard: {
      color: '#cc7777',
      roughness: 0.65,
      metalness: 0.0,
      normalScale: 0.25,
    },
    cinematic: {
      color: '#d88888',
      roughness: 0.55,
      metalness: 0.0,
      sheen: 0.35,
      sheenRoughness: 0.5,
      sheenColor: '#ffbbbb',
      transmission: 0.06,
      thickness: 0.4,
      attenuationColor: '#993333',
      attenuationDistance: 0.7,
      clearcoat: 0.15,
      clearcoatRoughness: 0.35,
      ior: 1.37,
    },
  },

  // ========== BLOOD VESSELS ==========
  artery: {
    name: 'Artery',
    tissueType: 'blood_vessel_artery',
    description: 'Arterial wall with oxygenated blood coloration',
    basic: {
      color: '#cc3333',
      roughness: 0.45,
      metalness: 0.0,
      emissive: '#ff0000',
      emissiveIntensity: 0.15,
    },
    standard: {
      color: '#cc3333',
      roughness: 0.4,
      metalness: 0.0,
      emissive: '#ff0000',
      emissiveIntensity: 0.12,
      envMapIntensity: 0.35,
    },
    cinematic: {
      color: '#dd4040',
      roughness: 0.3,
      metalness: 0.0,
      emissive: '#ff1111',
      emissiveIntensity: 0.08,
      // Translucent vessel walls showing blood
      transmission: 0.25,
      thickness: 0.15,
      attenuationColor: '#ff0000',
      attenuationDistance: 0.2,
      clearcoat: 0.4,
      clearcoatRoughness: 0.2,
      iridescence: 0.25,
      iridescenceIOR: 1.33,
      iridescenceThicknessRange: [80, 250],
      ior: 1.35,
      specularIntensity: 0.6,
      specularColor: '#ff8888',
    },
  },

  vein: {
    name: 'Vein',
    tissueType: 'blood_vessel_vein',
    description: 'Venous wall with deoxygenated blood (blue appearance)',
    basic: {
      color: '#3366cc',
      roughness: 0.5,
      metalness: 0.0,
      emissive: '#0000ff',
      emissiveIntensity: 0.1,
    },
    standard: {
      color: '#3366cc',
      roughness: 0.45,
      metalness: 0.0,
      emissive: '#0000ff',
      emissiveIntensity: 0.08,
      envMapIntensity: 0.3,
    },
    cinematic: {
      color: '#4477dd',
      roughness: 0.35,
      metalness: 0.0,
      emissive: '#1122aa',
      emissiveIntensity: 0.05,
      transmission: 0.3,
      thickness: 0.12,
      attenuationColor: '#2244aa',
      attenuationDistance: 0.25,
      clearcoat: 0.35,
      clearcoatRoughness: 0.25,
      iridescence: 0.2,
      iridescenceIOR: 1.33,
      iridescenceThicknessRange: [100, 280],
      ior: 1.35,
      specularIntensity: 0.5,
      specularColor: '#8888ff',
    },
  },

  capillary: {
    name: 'Capillary',
    tissueType: 'blood_vessel_capillary',
    description: 'Thin-walled capillary with high translucency',
    basic: {
      color: '#ff6666',
      roughness: 0.5,
      metalness: 0.0,
      opacity: 0.7,
      transparent: true,
    },
    standard: {
      color: '#ff6666',
      roughness: 0.45,
      metalness: 0.0,
      opacity: 0.65,
      transparent: true,
    },
    cinematic: {
      color: '#ff7777',
      roughness: 0.35,
      metalness: 0.0,
      transmission: 0.5,
      thickness: 0.05,
      attenuationColor: '#ff4444',
      attenuationDistance: 0.1,
      clearcoat: 0.3,
      clearcoatRoughness: 0.2,
      ior: 1.33,
    },
  },

  // ========== NEURAL TISSUE ==========
  brainGrayMatter: {
    name: 'Brain Gray Matter',
    tissueType: 'neural_tissue',
    description: 'Cerebral cortex with subtle neural glow',
    basic: {
      color: '#f5c0c0',
      roughness: 0.7,
      metalness: 0.0,
      emissive: '#ff9999',
      emissiveIntensity: 0.05,
    },
    standard: {
      color: '#f5c0c0',
      roughness: 0.65,
      metalness: 0.0,
      emissive: '#ff9999',
      emissiveIntensity: 0.06,
      normalScale: 0.5,
    },
    cinematic: {
      color: '#f8cccc',
      roughness: 0.55,
      metalness: 0.0,
      emissive: '#ffaaaa',
      emissiveIntensity: 0.04,
      // Brain tissue subsurface
      transmission: 0.12,
      thickness: 0.4,
      attenuationColor: '#ffbbbb',
      attenuationDistance: 0.5,
      sheen: 0.2,
      sheenRoughness: 0.6,
      sheenColor: '#ffdddd',
      // Wet brain surface
      clearcoat: 0.25,
      clearcoatRoughness: 0.3,
      iridescence: 0.15,
      iridescenceIOR: 1.35,
      iridescenceThicknessRange: [120, 350],
      ior: 1.36,
      specularIntensity: 0.35,
      specularColor: '#ffeeee',
    },
  },

  brainWhiteMatter: {
    name: 'Brain White Matter',
    tissueType: 'neural_white_matter',
    description: 'Myelinated nerve fibers with pearly appearance',
    basic: {
      color: '#f0e0d8',
      roughness: 0.6,
      metalness: 0.05,
    },
    standard: {
      color: '#f0e0d8',
      roughness: 0.55,
      metalness: 0.03,
      envMapIntensity: 0.3,
    },
    cinematic: {
      color: '#f5ebe5',
      roughness: 0.45,
      metalness: 0.02,
      transmission: 0.08,
      thickness: 0.6,
      attenuationColor: '#fff0e8',
      attenuationDistance: 0.8,
      // Myelin sheath pearlescence
      iridescence: 0.25,
      iridescenceIOR: 1.4,
      iridescenceThicknessRange: [150, 400],
      sheen: 0.3,
      sheenRoughness: 0.5,
      sheenColor: '#ffffff',
      clearcoat: 0.15,
      clearcoatRoughness: 0.35,
      ior: 1.38,
      specularIntensity: 0.4,
      specularColor: '#fff8f0',
    },
  },

  spinalCord: {
    name: 'Spinal Cord',
    tissueType: 'neural_tissue',
    description: 'Central nervous system with subtle neural glow',
    basic: {
      color: '#ffe4c4',
      roughness: 0.6,
      metalness: 0.0,
      emissive: '#ffcc99',
      emissiveIntensity: 0.08,
    },
    standard: {
      color: '#ffe4c4',
      roughness: 0.55,
      metalness: 0.0,
      emissive: '#ffcc99',
      emissiveIntensity: 0.06,
    },
    cinematic: {
      color: '#ffead0',
      roughness: 0.45,
      metalness: 0.0,
      emissive: '#ffddaa',
      emissiveIntensity: 0.04,
      transmission: 0.1,
      thickness: 0.3,
      attenuationColor: '#ffddbb',
      attenuationDistance: 0.4,
      clearcoat: 0.2,
      clearcoatRoughness: 0.3,
      iridescence: 0.12,
      iridescenceIOR: 1.36,
      iridescenceThicknessRange: [100, 300],
      ior: 1.37,
    },
  },

  // ========== ORGANS ==========
  lungTissue: {
    name: 'Lung Tissue',
    tissueType: 'lung_tissue',
    description: 'Spongy lung parenchyma with high air content',
    basic: {
      color: '#ffaaaa',
      roughness: 0.85,
      metalness: 0.0,
      opacity: 0.85,
      transparent: true,
    },
    standard: {
      color: '#ffaaaa',
      roughness: 0.8,
      metalness: 0.0,
      opacity: 0.8,
      transparent: true,
      normalScale: 0.4,
    },
    cinematic: {
      color: '#ffbbbb',
      roughness: 0.7,
      metalness: 0.0,
      // Lungs have significant air content
      transmission: 0.35,
      thickness: 2.0,
      attenuationColor: '#ff8888',
      attenuationDistance: 1.5,
      sheen: 0.15,
      sheenRoughness: 0.7,
      sheenColor: '#ffcccc',
      clearcoat: 0.1,
      clearcoatRoughness: 0.5,
      iridescence: 0.08,
      iridescenceIOR: 1.33,
      iridescenceThicknessRange: [80, 200],
      ior: 1.33,
    },
  },

  liverTissue: {
    name: 'Liver Tissue',
    tissueType: 'liver_tissue',
    description: 'Dense hepatic tissue with rich blood supply',
    basic: {
      color: '#8b4513',
      roughness: 0.65,
      metalness: 0.0,
    },
    standard: {
      color: '#8b4513',
      roughness: 0.6,
      metalness: 0.0,
      normalScale: 0.3,
      envMapIntensity: 0.25,
    },
    cinematic: {
      color: '#9a5020',
      roughness: 0.5,
      metalness: 0.0,
      transmission: 0.12,
      thickness: 0.8,
      attenuationColor: '#662200',
      attenuationDistance: 0.6,
      sheen: 0.3,
      sheenRoughness: 0.5,
      sheenColor: '#bb6633',
      clearcoat: 0.25,
      clearcoatRoughness: 0.3,
      iridescence: 0.15,
      iridescenceIOR: 1.35,
      iridescenceThicknessRange: [100, 300],
      ior: 1.38,
      specularIntensity: 0.4,
      specularColor: '#cc8855',
    },
  },

  kidneyTissue: {
    name: 'Kidney Tissue',
    tissueType: 'kidney_tissue',
    description: 'Renal parenchyma with cortex/medulla distinction',
    basic: {
      color: '#8b0000',
      roughness: 0.55,
      metalness: 0.0,
    },
    standard: {
      color: '#8b0000',
      roughness: 0.5,
      metalness: 0.0,
      normalScale: 0.35,
      envMapIntensity: 0.3,
    },
    cinematic: {
      color: '#991111',
      roughness: 0.4,
      metalness: 0.0,
      transmission: 0.15,
      thickness: 0.5,
      attenuationColor: '#660000',
      attenuationDistance: 0.4,
      sheen: 0.35,
      sheenRoughness: 0.45,
      sheenColor: '#cc4444',
      clearcoat: 0.3,
      clearcoatRoughness: 0.25,
      iridescence: 0.18,
      iridescenceIOR: 1.35,
      iridescenceThicknessRange: [100, 280],
      ior: 1.37,
      specularIntensity: 0.45,
      specularColor: '#ff6666',
    },
  },

  // ========== WET ORGAN SURFACE ==========
  wetOrganSurface: {
    name: 'Wet Organ Surface',
    tissueType: 'organ_wet',
    description: 'Generic wet/moist organ appearance',
    basic: {
      color: '#cc8080',
      roughness: 0.5,
      metalness: 0.0,
    },
    standard: {
      color: '#cc8080',
      roughness: 0.45,
      metalness: 0.0,
      envMapIntensity: 0.4,
    },
    cinematic: {
      color: '#dd9090',
      roughness: 0.35,
      metalness: 0.0,
      transmission: 0.1,
      thickness: 0.3,
      attenuationColor: '#994444',
      attenuationDistance: 0.5,
      clearcoat: 0.5,
      clearcoatRoughness: 0.15,
      iridescence: 0.3,
      iridescenceIOR: 1.33,
      iridescenceThicknessRange: [80, 250],
      sheen: 0.25,
      sheenRoughness: 0.4,
      sheenColor: '#ffaaaa',
      ior: 1.35,
      specularIntensity: 0.6,
      specularColor: '#ffcccc',
    },
  },

  // ========== DIGESTIVE ==========
  stomachMucosa: {
    name: 'Stomach Mucosa',
    tissueType: 'mucosa',
    description: 'Gastric mucosa with rugae texture',
    basic: {
      color: '#ffb6c1',
      roughness: 0.7,
      metalness: 0.0,
    },
    standard: {
      color: '#ffb6c1',
      roughness: 0.65,
      metalness: 0.0,
      normalScale: 0.5,
    },
    cinematic: {
      color: '#ffc0cb',
      roughness: 0.55,
      metalness: 0.0,
      transmission: 0.08,
      thickness: 0.2,
      attenuationColor: '#ff8899',
      attenuationDistance: 0.3,
      clearcoat: 0.35,
      clearcoatRoughness: 0.25,
      sheen: 0.2,
      sheenRoughness: 0.5,
      sheenColor: '#ffddee',
      iridescence: 0.2,
      iridescenceIOR: 1.33,
      iridescenceThicknessRange: [80, 220],
      ior: 1.35,
    },
  },

  intestineMucosa: {
    name: 'Intestine Mucosa',
    tissueType: 'mucosa',
    description: 'Intestinal lining with villi texture',
    basic: {
      color: '#deb887',
      roughness: 0.8,
      metalness: 0.0,
    },
    standard: {
      color: '#deb887',
      roughness: 0.75,
      metalness: 0.0,
      normalScale: 0.6,
    },
    cinematic: {
      color: '#e8c498',
      roughness: 0.6,
      metalness: 0.0,
      transmission: 0.06,
      thickness: 0.15,
      attenuationColor: '#cc9966',
      attenuationDistance: 0.25,
      clearcoat: 0.25,
      clearcoatRoughness: 0.35,
      sheen: 0.15,
      sheenRoughness: 0.6,
      sheenColor: '#ffddcc',
      iridescence: 0.12,
      iridescenceIOR: 1.33,
      iridescenceThicknessRange: [80, 200],
      ior: 1.35,
    },
  },

  // ========== CONNECTIVE TISSUE ==========
  cartilage: {
    name: 'Cartilage',
    tissueType: 'cartilage',
    description: 'Hyaline cartilage with glassy appearance',
    basic: {
      color: '#b0c4de',
      roughness: 0.4,
      metalness: 0.05,
      opacity: 0.9,
      transparent: true,
    },
    standard: {
      color: '#b0c4de',
      roughness: 0.35,
      metalness: 0.03,
      opacity: 0.85,
      transparent: true,
      envMapIntensity: 0.4,
    },
    cinematic: {
      color: '#c0d4ee',
      roughness: 0.25,
      metalness: 0.02,
      // Cartilage is somewhat translucent
      transmission: 0.4,
      thickness: 0.5,
      attenuationColor: '#8899bb',
      attenuationDistance: 0.8,
      clearcoat: 0.3,
      clearcoatRoughness: 0.2,
      iridescence: 0.15,
      iridescenceIOR: 1.38,
      iridescenceThicknessRange: [150, 400],
      ior: 1.4,
      specularIntensity: 0.5,
      specularColor: '#ddeeff',
    },
  },

  tendon: {
    name: 'Tendon',
    tissueType: 'tendon',
    description: 'Dense fibrous connective tissue with parallel fibers',
    basic: {
      color: '#f5f5f5',
      roughness: 0.5,
      metalness: 0.0,
    },
    standard: {
      color: '#f5f5f5',
      roughness: 0.45,
      metalness: 0.0,
      normalScale: 0.4,
    },
    cinematic: {
      color: '#fafafa',
      roughness: 0.35,
      metalness: 0.0,
      // Strong anisotropy for fiber direction
      anisotropy: 0.8,
      anisotropyRotation: 0,
      sheen: 0.4,
      sheenRoughness: 0.4,
      sheenColor: '#ffffff',
      clearcoat: 0.2,
      clearcoatRoughness: 0.3,
      transmission: 0.05,
      thickness: 0.3,
      attenuationColor: '#eeeeee',
      attenuationDistance: 0.5,
      iridescence: 0.1,
      iridescenceIOR: 1.35,
      iridescenceThicknessRange: [100, 300],
      ior: 1.38,
    },
  },

  fat: {
    name: 'Adipose Tissue',
    tissueType: 'fat',
    description: 'Fatty tissue with yellow coloration',
    basic: {
      color: '#ffe4b5',
      roughness: 0.7,
      metalness: 0.0,
    },
    standard: {
      color: '#ffe4b5',
      roughness: 0.65,
      metalness: 0.0,
      normalScale: 0.3,
    },
    cinematic: {
      color: '#ffebb5',
      roughness: 0.55,
      metalness: 0.0,
      // Fat is quite translucent
      transmission: 0.2,
      thickness: 1.0,
      attenuationColor: '#ffcc88',
      attenuationDistance: 0.8,
      sheen: 0.15,
      sheenRoughness: 0.6,
      sheenColor: '#fff5dd',
      ior: 1.46, // Fat has higher IOR
    },
  },

  // ========== GLANDULAR ==========
  glandularTissue: {
    name: 'Glandular Tissue',
    tissueType: 'glandular',
    description: 'Endocrine/exocrine gland tissue',
    basic: {
      color: '#ffd700',
      roughness: 0.6,
      metalness: 0.0,
    },
    standard: {
      color: '#ffd700',
      roughness: 0.55,
      metalness: 0.0,
      envMapIntensity: 0.3,
    },
    cinematic: {
      color: '#ffe020',
      roughness: 0.45,
      metalness: 0.0,
      transmission: 0.1,
      thickness: 0.4,
      attenuationColor: '#cc9900',
      attenuationDistance: 0.5,
      clearcoat: 0.25,
      clearcoatRoughness: 0.3,
      sheen: 0.25,
      sheenRoughness: 0.5,
      sheenColor: '#ffee88',
      iridescence: 0.15,
      iridescenceIOR: 1.35,
      iridescenceThicknessRange: [100, 280],
      ior: 1.36,
    },
  },

  // ========== EYE ==========
  eyeSclera: {
    name: 'Eye Sclera',
    tissueType: 'eye_sclera',
    description: 'White of the eye with subtle vascular appearance',
    basic: {
      color: '#ffffff',
      roughness: 0.3,
      metalness: 0.0,
    },
    standard: {
      color: '#ffffff',
      roughness: 0.25,
      metalness: 0.0,
      envMapIntensity: 0.4,
    },
    cinematic: {
      color: '#fffffe',
      roughness: 0.2,
      metalness: 0.0,
      clearcoat: 0.6,
      clearcoatRoughness: 0.1,
      transmission: 0.02,
      thickness: 0.5,
      attenuationColor: '#fff0f0',
      attenuationDistance: 1.0,
      iridescence: 0.05,
      iridescenceIOR: 1.38,
      iridescenceThicknessRange: [100, 250],
      ior: 1.38,
      specularIntensity: 0.6,
      specularColor: '#ffffff',
    },
  },

  eyeCornea: {
    name: 'Eye Cornea',
    tissueType: 'eye_cornea',
    description: 'Clear cornea with high refraction',
    basic: {
      color: '#ffffff',
      roughness: 0.1,
      metalness: 0.0,
      opacity: 0.3,
      transparent: true,
    },
    standard: {
      color: '#ffffff',
      roughness: 0.05,
      metalness: 0.0,
      opacity: 0.2,
      transparent: true,
      envMapIntensity: 0.8,
    },
    cinematic: {
      color: '#ffffff',
      roughness: 0.02,
      metalness: 0.0,
      // Highly transparent cornea
      transmission: 0.95,
      thickness: 0.5,
      attenuationColor: '#ffffff',
      attenuationDistance: 5.0,
      clearcoat: 0.8,
      clearcoatRoughness: 0.05,
      ior: 1.376, // Actual cornea IOR
      specularIntensity: 0.8,
      specularColor: '#ffffff',
    },
  },

  // ========== HIGHLIGHTED/HOVERED STATES ==========
  highlighted: {
    name: 'Highlighted',
    tissueType: 'organ_wet',
    description: 'Selected structure highlight effect',
    basic: {
      color: '#ffffff',
      roughness: 0.3,
      metalness: 0.0,
      emissive: '#22ff44',
      emissiveIntensity: 0.4,
    },
    standard: {
      color: '#ffffff',
      roughness: 0.25,
      metalness: 0.0,
      emissive: '#22ff44',
      emissiveIntensity: 0.35,
      envMapIntensity: 0.5,
    },
    cinematic: {
      color: '#ffffff',
      roughness: 0.2,
      metalness: 0.0,
      emissive: '#22ff44',
      emissiveIntensity: 0.3,
      clearcoat: 0.6,
      clearcoatRoughness: 0.1,
      iridescence: 0.4,
      iridescenceIOR: 1.5,
      iridescenceThicknessRange: [100, 400],
      ior: 1.5,
    },
  },

  hovered: {
    name: 'Hovered',
    tissueType: 'organ_wet',
    description: 'Hovered structure highlight effect',
    basic: {
      color: '#ffffff',
      roughness: 0.3,
      metalness: 0.0,
      emissive: '#2244ff',
      emissiveIntensity: 0.3,
    },
    standard: {
      color: '#ffffff',
      roughness: 0.25,
      metalness: 0.0,
      emissive: '#2244ff',
      emissiveIntensity: 0.25,
      envMapIntensity: 0.5,
    },
    cinematic: {
      color: '#ffffff',
      roughness: 0.2,
      metalness: 0.0,
      emissive: '#2244ff',
      emissiveIntensity: 0.2,
      clearcoat: 0.5,
      clearcoatRoughness: 0.15,
      iridescence: 0.3,
      iridescenceIOR: 1.45,
      iridescenceThicknessRange: [100, 350],
      ior: 1.45,
    },
  },
};

// ============================================
// Legacy Material Config (backwards compatibility)
// ============================================

export interface AnatomicalMaterialConfig {
  color: string;
  roughness?: number;
  metalness?: number;
  opacity?: number;
  emissive?: string;
  emissiveIntensity?: number;
}

/**
 * Legacy ANATOMICAL_MATERIALS for backwards compatibility
 * Maps to the basic quality level of the new presets
 */
export const ANATOMICAL_MATERIALS: Record<string, AnatomicalMaterialConfig> = {
  compactBone: ANATOMICAL_MATERIAL_PRESETS.compactBone.basic,
  cardiacMuscle: ANATOMICAL_MATERIAL_PRESETS.cardiacMuscle.basic,
  artery: ANATOMICAL_MATERIAL_PRESETS.artery.basic,
  vein: ANATOMICAL_MATERIAL_PRESETS.vein.basic,
  lungTissue: ANATOMICAL_MATERIAL_PRESETS.lungTissue.basic,
  liver: ANATOMICAL_MATERIAL_PRESETS.liverTissue.basic,
  brainMatter: ANATOMICAL_MATERIAL_PRESETS.brainGrayMatter.basic,
  kidney: ANATOMICAL_MATERIAL_PRESETS.kidneyTissue.basic,
  highlighted: ANATOMICAL_MATERIAL_PRESETS.highlighted.basic,
  hovered: ANATOMICAL_MATERIAL_PRESETS.hovered.basic,
};

// ============================================
// Material Factory Functions
// ============================================

/**
 * Create a THREE.js material from a preset at the specified quality level
 */
export function createMaterialFromPreset(
  presetKey: string,
  quality: MaterialQuality,
  overrides?: Partial<CinematicMaterialConfig>
): THREE.Material {
  const preset = ANATOMICAL_MATERIAL_PRESETS[presetKey];
  if (!preset) {
    console.warn(`Material preset "${presetKey}" not found, using default`);
    return createBasicMaterial({ color: '#888888', roughness: 0.5, metalness: 0 });
  }

  const config = { ...preset[quality], ...overrides };

  switch (quality) {
    case 'basic':
      return createBasicMaterial(config as BaseMaterialConfig);
    case 'standard':
      return createStandardMaterial(config as StandardMaterialConfig);
    case 'cinematic':
      return createCinematicMaterial(config as CinematicMaterialConfig);
    default:
      return createBasicMaterial(config as BaseMaterialConfig);
  }
}

/**
 * Create a MeshLambertMaterial (basic quality, best performance)
 */
export function createBasicMaterial(config: BaseMaterialConfig): THREE.MeshLambertMaterial {
  return new THREE.MeshLambertMaterial({
    color: new THREE.Color(config.color),
    emissive: config.emissive ? new THREE.Color(config.emissive) : undefined,
    emissiveIntensity: config.emissiveIntensity ?? 0,
    transparent: config.transparent ?? (config.opacity !== undefined && config.opacity < 1),
    opacity: config.opacity ?? 1,
    side: config.side ?? THREE.FrontSide,
  });
}

/**
 * Create a MeshStandardMaterial (standard quality, balanced)
 */
export function createStandardMaterial(config: StandardMaterialConfig): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    color: new THREE.Color(config.color),
    roughness: config.roughness,
    metalness: config.metalness,
    emissive: config.emissive ? new THREE.Color(config.emissive) : undefined,
    emissiveIntensity: config.emissiveIntensity ?? 0,
    transparent: config.transparent ?? (config.opacity !== undefined && config.opacity < 1),
    opacity: config.opacity ?? 1,
    side: config.side ?? THREE.FrontSide,
    envMapIntensity: config.envMapIntensity ?? 1,
  });
}

/**
 * Create a MeshPhysicalMaterial (cinematic quality, full features)
 * Optimized for iPhone 14+ GPU
 */
export function createCinematicMaterial(config: CinematicMaterialConfig): THREE.MeshPhysicalMaterial {
  const material = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(config.color),
    roughness: config.roughness,
    metalness: config.metalness,
    emissive: config.emissive ? new THREE.Color(config.emissive) : undefined,
    emissiveIntensity: config.emissiveIntensity ?? 0,
    transparent: config.transparent ?? (config.opacity !== undefined && config.opacity < 1),
    opacity: config.opacity ?? 1,
    side: config.side ?? THREE.FrontSide,
    envMapIntensity: config.envMapIntensity ?? 1,

    // Subsurface scattering simulation via transmission
    transmission: config.transmission ?? 0,
    thickness: config.thickness ?? 0,
    attenuationColor: config.attenuationColor
      ? new THREE.Color(config.attenuationColor)
      : new THREE.Color('#ffffff'),
    attenuationDistance: config.attenuationDistance ?? Infinity,

    // Clearcoat (wet surface layer)
    clearcoat: config.clearcoat ?? 0,
    clearcoatRoughness: config.clearcoatRoughness ?? 0,

    // Sheen (velvet-like soft reflection)
    sheen: config.sheen ?? 0,
    sheenRoughness: config.sheenRoughness ?? 0.8,
    sheenColor: config.sheenColor ? new THREE.Color(config.sheenColor) : new THREE.Color('#ffffff'),

    // Iridescence (rainbow/wet tissue effect)
    iridescence: config.iridescence ?? 0,
    iridescenceIOR: config.iridescenceIOR ?? 1.3,
    iridescenceThicknessRange: config.iridescenceThicknessRange ?? [100, 400],

    // Index of refraction
    ior: config.ior ?? 1.5,

    // Specular
    specularIntensity: config.specularIntensity ?? 1,
    specularColor: config.specularColor
      ? new THREE.Color(config.specularColor)
      : new THREE.Color('#ffffff'),
  });

  // Anisotropy (fiber direction) - set separately as it may need normalization
  if (config.anisotropy !== undefined && config.anisotropy > 0) {
    material.anisotropy = config.anisotropy;
    material.anisotropyRotation = config.anisotropyRotation ?? 0;
  }

  return material;
}

// ============================================
// Material LOD System
// ============================================

/**
 * Determine effective quality level based on camera distance and LOD config
 */
export function getEffectiveQuality(
  distance: number,
  baseQuality: MaterialQuality,
  lodConfig: MaterialLODConfig = DEFAULT_MATERIAL_LOD
): MaterialQuality {
  // Always use basic at far distances
  if (distance > lodConfig.basicThreshold) {
    return 'basic';
  }

  // Use standard at medium distances (unless base is basic)
  if (distance > lodConfig.standardThreshold) {
    return baseQuality === 'basic' ? 'basic' : 'standard';
  }

  // Use cinematic at close distances only if base quality is cinematic
  if (distance > lodConfig.cinematicThreshold) {
    if (baseQuality === 'cinematic') return 'standard';
    return baseQuality;
  }

  // At very close distances, use the base quality
  return baseQuality;
}

/**
 * React hook for material LOD based on camera distance
 */
export function useMaterialQuality(
  cameraDistance: number,
  baseQuality: MaterialQuality,
  lodConfig?: MaterialLODConfig
): MaterialQuality {
  return useMemo(
    () => getEffectiveQuality(cameraDistance, baseQuality, lodConfig),
    [cameraDistance, baseQuality, lodConfig]
  );
}

// ============================================
// Structure-to-Material Mapping
// ============================================

/**
 * Map structure IDs to material preset keys
 */
const STRUCTURE_MATERIAL_MAP: Record<string, string> = {
  // Skeletal
  skull: 'compactBone',
  spine: 'compactBone',
  ribcage: 'compactBone',
  pelvis: 'compactBone',

  // Cardiovascular
  heart: 'cardiacMuscle',
  aorta: 'artery',
  superiorVenaCava: 'vein',
  inferiorVenaCava: 'vein',
  pulmonaryArtery: 'vein',

  // Respiratory
  leftLung: 'lungTissue',
  rightLung: 'lungTissue',
  trachea: 'cartilage',
  leftBronchus: 'cartilage',
  rightBronchus: 'cartilage',
  diaphragm: 'skeletalMuscle',

  // Digestive
  liver: 'liverTissue',
  stomach: 'stomachMucosa',
  smallIntestine: 'intestineMucosa',
  largeIntestine: 'intestineMucosa',
  esophagus: 'smoothMuscle',
  gallbladder: 'wetOrganSurface',
  appendix: 'intestineMucosa',

  // Urinary
  leftKidney: 'kidneyTissue',
  rightKidney: 'kidneyTissue',
  bladder: 'smoothMuscle',
  leftUreter: 'smoothMuscle',
  rightUreter: 'smoothMuscle',

  // Nervous
  brain: 'brainGrayMatter',
  cerebellum: 'brainGrayMatter',
  brainstem: 'brainWhiteMatter',
  spinalCord: 'spinalCord',
  leftEye: 'eyeSclera',
  rightEye: 'eyeSclera',

  // Endocrine
  thyroidGland: 'glandularTissue',
  pituitaryGland: 'glandularTissue',
  pancreas: 'glandularTissue',
  leftAdrenalGland: 'glandularTissue',
  rightAdrenalGland: 'glandularTissue',

  // Lymphatic
  spleen: 'wetOrganSurface',

  // Muscular
  pectoralisMajor: 'skeletalMuscle',
  pectoralisMajorRight: 'skeletalMuscle',
  rectusAbdominis: 'skeletalMuscle',

  // Body regions
  head: 'skin',
  neck: 'skin',
  chest: 'skin',
  abdomen: 'skin',
  leftArm: 'skin',
  rightArm: 'skin',
  leftLeg: 'skin',
  rightLeg: 'skin',
};

/**
 * Get the material preset key for a given structure ID
 */
export function getMaterialPresetForStructure(structureId: string): string {
  return STRUCTURE_MATERIAL_MAP[structureId] || 'wetOrganSurface';
}

/**
 * Get material config for a structure (legacy compatibility function)
 */
export function getMaterialForStructure(structureId: string): AnatomicalMaterialConfig {
  const presetKey = getMaterialPresetForStructure(structureId);
  const preset = ANATOMICAL_MATERIAL_PRESETS[presetKey];
  if (preset) {
    return preset.basic;
  }
  return ANATOMICAL_MATERIALS.compactBone;
}

/**
 * Create a THREE.js material for a structure at the specified quality
 */
export function createMaterialForStructure(
  structureId: string,
  quality: MaterialQuality,
  overrides?: Partial<CinematicMaterialConfig>
): THREE.Material {
  const presetKey = getMaterialPresetForStructure(structureId);
  return createMaterialFromPreset(presetKey, quality, overrides);
}

// ============================================
// React Component Props Material Factory
// ============================================

/**
 * Configuration for applying materials in React Three Fiber
 */
export interface MaterialProps {
  quality: MaterialQuality;
  structureId?: string;
  presetKey?: string;
  isHovered?: boolean;
  isSelected?: boolean;
  opacity?: number;
  cameraDistance?: number;
  lodConfig?: MaterialLODConfig;
}

/**
 * Hook to create material properties for React Three Fiber components
 * Returns props that can be spread onto material components
 */
export function useMaterialProps({
  quality: baseQuality,
  structureId,
  presetKey,
  isHovered = false,
  isSelected = false,
  opacity = 1,
  cameraDistance,
  lodConfig,
}: MaterialProps): CinematicMaterialConfig {
  return useMemo(() => {
    // Determine effective quality based on LOD
    const effectiveQuality =
      cameraDistance !== undefined
        ? getEffectiveQuality(cameraDistance, baseQuality, lodConfig)
        : baseQuality;

    // Get the base preset
    const key = presetKey || (structureId ? getMaterialPresetForStructure(structureId) : 'wetOrganSurface');
    const preset = ANATOMICAL_MATERIAL_PRESETS[key] || ANATOMICAL_MATERIAL_PRESETS.wetOrganSurface;
    const config = preset[effectiveQuality] as CinematicMaterialConfig;

    // Apply hover/selection state
    let result = { ...config };

    if (isSelected) {
      const highlightConfig = ANATOMICAL_MATERIAL_PRESETS.highlighted[effectiveQuality];
      result = {
        ...result,
        emissive: highlightConfig.emissive,
        emissiveIntensity: highlightConfig.emissiveIntensity,
      };
    } else if (isHovered) {
      const hoverConfig = ANATOMICAL_MATERIAL_PRESETS.hovered[effectiveQuality];
      result = {
        ...result,
        emissive: hoverConfig.emissive,
        emissiveIntensity: hoverConfig.emissiveIntensity,
      };
    }

    // Apply opacity override
    if (opacity !== 1) {
      result.opacity = (result.opacity ?? 1) * opacity;
      result.transparent = true;
    }

    return result;
  }, [baseQuality, structureId, presetKey, isHovered, isSelected, opacity, cameraDistance, lodConfig]);
}

// ============================================
// Material Cache for Performance
// ============================================

const materialCache = new Map<string, THREE.Material>();

/**
 * Get a cached material or create a new one
 * Helps reduce material creation overhead
 */
export function getCachedMaterial(
  presetKey: string,
  quality: MaterialQuality,
  cacheKey?: string
): THREE.Material {
  const key = cacheKey || `${presetKey}-${quality}`;

  if (materialCache.has(key)) {
    return materialCache.get(key)!;
  }

  const material = createMaterialFromPreset(presetKey, quality);
  materialCache.set(key, material);
  return material;
}

/**
 * Clear the material cache (call when changing quality settings)
 */
export function clearMaterialCache(): void {
  materialCache.forEach((material) => material.dispose());
  materialCache.clear();
}

/**
 * Get cache statistics
 */
export function getMaterialCacheStats(): { size: number; keys: string[] } {
  return {
    size: materialCache.size,
    keys: Array.from(materialCache.keys()),
  };
}

// ============================================
// Exports
// ============================================

export default ANATOMICAL_MATERIALS;
