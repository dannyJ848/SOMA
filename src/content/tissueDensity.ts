/**
 * Tissue Density System for Biological Self 3D Anatomy
 * 
 * Anatomically accurate density values (in Hounsfield Units - HU)
 * Used for X-ray visualization, cross-section density mapping, and education
 */

export interface TissueDensity {
  name: string;
  hounsfieldUnits: number; // Standard CT density scale
  normalizedDensity: number; // 0-1 scale for visualization
  color: string; // Representative color for density visualization
  description: string;
  radiodensity: 'radiolucent' | 'radiopaque' | 'intermediate';
}

// Anatomical tissue densities based on Hounsfield Units (HU)
// Air: -1000, Water: 0, Bone: 200-1000+, Metal: 3000+
export const TISSUE_DENSITIES: Record<string, TissueDensity> = {
  // Air/gas
  air: {
    name: 'Air/Gas',
    hounsfieldUnits: -1000,
    normalizedDensity: 0.0,
    color: '#000000',
    description: 'Air spaces (lungs, sinuses, GI tract)',
    radiodensity: 'radiolucent',
  },
  
  // Soft tissues (low density)
  fat: {
    name: 'Adipose Tissue (Fat)',
    hounsfieldUnits: -100,
    normalizedDensity: 0.15,
    color: '#f5deb3',
    description: 'Subcutaneous and visceral fat',
    radiodensity: 'radiolucent',
  },
  
  water: {
    name: 'Water/Fluid',
    hounsfieldUnits: 0,
    normalizedDensity: 0.25,
    color: '#87ceeb',
    description: 'Water, cerebrospinal fluid, simple cysts',
    radiodensity: 'radiolucent',
  },
  
  // Soft tissues (intermediate)
  softTissue: {
    name: 'Soft Tissue',
    hounsfieldUnits: 40,
    normalizedDensity: 0.4,
    color: '#ffb6c1',
    description: 'General soft tissue, skin, connective tissue',
    radiodensity: 'intermediate',
  },
  
  muscle: {
    name: 'Skeletal Muscle',
    hounsfieldUnits: 50,
    normalizedDensity: 0.45,
    color: '#cd5c5c',
    description: 'Skeletal muscle tissue',
    radiodensity: 'intermediate',
  },
  
  solidOrgan: {
    name: 'Solid Organ',
    hounsfieldUnits: 60,
    normalizedDensity: 0.5,
    color: '#8b4513',
    description: 'Liver, spleen, kidneys, pancreas',
    radiodensity: 'intermediate',
  },
  
  blood: {
    name: 'Blood',
    hounsfieldUnits: 40,
    normalizedDensity: 0.42,
    color: '#dc143c',
    description: 'Flowing blood in vessels',
    radiodensity: 'intermediate',
  },
  
  bloodClot: {
    name: 'Blood Clot',
    hounsfieldUnits: 70,
    normalizedDensity: 0.55,
    color: '#8b0000',
    description: 'Coagulated blood, thrombus',
    radiodensity: 'intermediate',
  },
  
  // Connective tissues
  tendon: {
    name: 'Tendon/Ligament',
    hounsfieldUnits: 80,
    normalizedDensity: 0.6,
    color: '#f5f5dc',
    description: 'Dense connective tissue',
    radiodensity: 'intermediate',
  },
  
  cartilage: {
    name: 'Cartilage',
    hounsfieldUnits: 60,
    normalizedDensity: 0.48,
    color: '#fffacd',
    description: 'Hyaline and fibrocartilage',
    radiodensity: 'intermediate',
  },
  
  // Hard tissues (high density)
  boneSpongy: {
    name: 'Spongy (Cancellous) Bone',
    hounsfieldUnits: 300,
    normalizedDensity: 0.75,
    color: '#ffe4c4',
    description: 'Trabecular bone inside vertebrae and ends of long bones',
    radiodensity: 'radiopaque',
  },
  
  boneCortical: {
    name: 'Cortical (Compact) Bone',
    hounsfieldUnits: 1000,
    normalizedDensity: 0.95,
    color: '#fffaf0',
    description: 'Dense outer layer of bones',
    radiodensity: 'radiopaque',
  },
  
  // Highest density
  calcification: {
    name: 'Calcification',
    hounsfieldUnits: 1200,
    normalizedDensity: 1.0,
    color: '#ffffff',
    description: 'Calcified tissues, stones, calcified plaques',
    radiodensity: 'radiopaque',
  },
  
  contrast: {
    name: 'Contrast Agent',
    hounsfieldUnits: 2000,
    normalizedDensity: 1.0,
    color: '#00ffff',
    description: 'Iodinated contrast for imaging',
    radiodensity: 'radiopaque',
  },
  
  metal: {
    name: 'Metal/Implant',
    hounsfieldUnits: 3000,
    normalizedDensity: 1.0,
    color: '#c0c0c0',
    description: 'Surgical implants, prosthetics',
    radiodensity: 'radiopaque',
  },
};

// Density mappings for each body region - anatomically accurate composition
export interface RegionDensityProfile {
  regionId: string;
  primaryTissue: string;
  composition: {
    tissue: string;
    percentage: number; // 0-100
  }[];
  averageDensity: number; // HU
  xrayOpacity: number; // 0-1 for visualization
}

// Density profiles for body regions
export const REGION_DENSITY_PROFILES: Record<string, RegionDensityProfile> = {
  // Head
  head: {
    regionId: 'head',
    primaryTissue: 'boneCortical',
    composition: [
      { tissue: 'boneCortical', percentage: 45 },
      { tissue: 'boneSpongy', percentage: 15 },
      { tissue: 'softTissue', percentage: 20 },
      { tissue: 'solidOrgan', percentage: 15 }, // Brain
      { tissue: 'water', percentage: 5 }, // CSF
    ],
    averageDensity: 180,
    xrayOpacity: 0.6,
  },
  
  neck: {
    regionId: 'neck',
    primaryTissue: 'muscle',
    composition: [
      { tissue: 'muscle', percentage: 40 },
      { tissue: 'softTissue', percentage: 25 },
      { tissue: 'boneCortical', percentage: 15 }, // Cervical spine
      { tissue: 'cartilage', percentage: 10 }, // Trachea, thyroid cartilage
      { tissue: 'fat', percentage: 10 },
    ],
    averageDensity: 80,
    xrayOpacity: 0.4,
  },
  
  // Torso
  chest: {
    regionId: 'chest',
    primaryTissue: 'air',
    composition: [
      { tissue: 'air', percentage: 50 }, // Lungs
      { tissue: 'muscle', percentage: 20 }, // Chest wall
      { tissue: 'boneCortical', percentage: 15 }, // Ribs, spine
      { tissue: 'blood', percentage: 10 }, // Heart, vessels
      { tissue: 'fat', percentage: 5 },
    ],
    averageDensity: -350,
    xrayOpacity: 0.2,
  },
  
  thoracicSpine: {
    regionId: 'thoracicSpine',
    primaryTissue: 'boneCortical',
    composition: [
      { tissue: 'boneCortical', percentage: 40 },
      { tissue: 'boneSpongy', percentage: 30 },
      { tissue: 'muscle', percentage: 20 },
      { tissue: 'tendon', percentage: 10 },
    ],
    averageDensity: 520,
    xrayOpacity: 0.78,
  },
  
  lumbarSpine: {
    regionId: 'lumbarSpine',
    primaryTissue: 'boneCortical',
    composition: [
      { tissue: 'boneCortical', percentage: 45 },
      { tissue: 'boneSpongy', percentage: 25 },
      { tissue: 'muscle', percentage: 20 },
      { tissue: 'tendon', percentage: 10 },
    ],
    averageDensity: 580,
    xrayOpacity: 0.82,
  },
  
  abdomen: {
    regionId: 'abdomen',
    primaryTissue: 'softTissue',
    composition: [
      { tissue: 'softTissue', percentage: 35 },
      { tissue: 'solidOrgan', percentage: 30 }, // Liver, kidneys, etc.
      { tissue: 'muscle', percentage: 15 }, // Abdominal wall
      { tissue: 'fat', percentage: 15 }, // Peritoneal fat
      { tissue: 'boneCortical', percentage: 5 }, // Lumbar spine
    ],
    averageDensity: 45,
    xrayOpacity: 0.35,
  },
  
  pelvis: {
    regionId: 'pelvis',
    primaryTissue: 'boneCortical',
    composition: [
      { tissue: 'boneCortical', percentage: 35 },
      { tissue: 'boneSpongy', percentage: 20 },
      { tissue: 'muscle', percentage: 25 },
      { tissue: 'softTissue', percentage: 15 },
      { tissue: 'fat', percentage: 5 },
    ],
    averageDensity: 380,
    xrayOpacity: 0.7,
  },
  
  // Upper limbs
  leftShoulder: {
    regionId: 'leftShoulder',
    primaryTissue: 'muscle',
    composition: [
      { tissue: 'muscle', percentage: 40 },
      { tissue: 'boneCortical', percentage: 20 },
      { tissue: 'tendon', percentage: 20 }, // Rotator cuff
      { tissue: 'cartilage', percentage: 10 },
      { tissue: 'softTissue', percentage: 10 },
    ],
    averageDensity: 110,
    xrayOpacity: 0.45,
  },
  
  rightShoulder: {
    regionId: 'rightShoulder',
    primaryTissue: 'muscle',
    composition: [
      { tissue: 'muscle', percentage: 40 },
      { tissue: 'boneCortical', percentage: 20 },
      { tissue: 'tendon', percentage: 20 },
      { tissue: 'cartilage', percentage: 10 },
      { tissue: 'softTissue', percentage: 10 },
    ],
    averageDensity: 110,
    xrayOpacity: 0.45,
  },
  
  leftArm: {
    regionId: 'leftArm',
    primaryTissue: 'muscle',
    composition: [
      { tissue: 'muscle', percentage: 55 },
      { tissue: 'boneCortical', percentage: 25 },
      { tissue: 'softTissue', percentage: 15 },
      { tissue: 'fat', percentage: 5 },
    ],
    averageDensity: 95,
    xrayOpacity: 0.42,
  },
  
  rightArm: {
    regionId: 'rightArm',
    primaryTissue: 'muscle',
    composition: [
      { tissue: 'muscle', percentage: 55 },
      { tissue: 'boneCortical', percentage: 25 },
      { tissue: 'softTissue', percentage: 15 },
      { tissue: 'fat', percentage: 5 },
    ],
    averageDensity: 95,
    xrayOpacity: 0.42,
  },
  
  leftElbow: {
    regionId: 'leftElbow',
    primaryTissue: 'boneCortical',
    composition: [
      { tissue: 'boneCortical', percentage: 35 },
      { tissue: 'cartilage', percentage: 25 },
      { tissue: 'muscle', percentage: 20 },
      { tissue: 'tendon', percentage: 15 },
      { tissue: 'softTissue', percentage: 5 },
    ],
    averageDensity: 220,
    xrayOpacity: 0.58,
  },
  
  rightElbow: {
    regionId: 'rightElbow',
    primaryTissue: 'boneCortical',
    composition: [
      { tissue: 'boneCortical', percentage: 35 },
      { tissue: 'cartilage', percentage: 25 },
      { tissue: 'muscle', percentage: 20 },
      { tissue: 'tendon', percentage: 15 },
      { tissue: 'softTissue', percentage: 5 },
    ],
    averageDensity: 220,
    xrayOpacity: 0.58,
  },
  
  leftForearm: {
    regionId: 'leftForearm',
    primaryTissue: 'muscle',
    composition: [
      { tissue: 'muscle', percentage: 50 },
      { tissue: 'boneCortical', percentage: 30 },
      { tissue: 'softTissue', percentage: 15 },
      { tissue: 'fat', percentage: 5 },
    ],
    averageDensity: 100,
    xrayOpacity: 0.43,
  },
  
  rightForearm: {
    regionId: 'rightForearm',
    primaryTissue: 'muscle',
    composition: [
      { tissue: 'muscle', percentage: 50 },
      { tissue: 'boneCortical', percentage: 30 },
      { tissue: 'softTissue', percentage: 15 },
      { tissue: 'fat', percentage: 5 },
    ],
    averageDensity: 100,
    xrayOpacity: 0.43,
  },
  
  leftWrist: {
    regionId: 'leftWrist',
    primaryTissue: 'boneCortical',
    composition: [
      { tissue: 'boneCortical', percentage: 30 },
      { tissue: 'cartilage', percentage: 25 },
      { tissue: 'tendon', percentage: 25 }, // Carpal tunnel
      { tissue: 'muscle', percentage: 15 },
      { tissue: 'softTissue', percentage: 5 },
    ],
    averageDensity: 180,
    xrayOpacity: 0.55,
  },
  
  rightWrist: {
    regionId: 'rightWrist',
    primaryTissue: 'boneCortical',
    composition: [
      { tissue: 'boneCortical', percentage: 30 },
      { tissue: 'cartilage', percentage: 25 },
      { tissue: 'tendon', percentage: 25 },
      { tissue: 'muscle', percentage: 15 },
      { tissue: 'softTissue', percentage: 5 },
    ],
    averageDensity: 180,
    xrayOpacity: 0.55,
  },
  
  leftHand: {
    regionId: 'leftHand',
    primaryTissue: 'boneCortical',
    composition: [
      { tissue: 'boneCortical', percentage: 35 },
      { tissue: 'muscle', percentage: 25 },
      { tissue: 'tendon', percentage: 25 },
      { tissue: 'softTissue', percentage: 10 },
      { tissue: 'fat', percentage: 5 },
    ],
    averageDensity: 160,
    xrayOpacity: 0.52,
  },
  
  rightHand: {
    regionId: 'rightHand',
    primaryTissue: 'boneCortical',
    composition: [
      { tissue: 'boneCortical', percentage: 35 },
      { tissue: 'muscle', percentage: 25 },
      { tissue: 'tendon', percentage: 25 },
      { tissue: 'softTissue', percentage: 10 },
      { tissue: 'fat', percentage: 5 },
    ],
    averageDensity: 160,
    xrayOpacity: 0.52,
  },
  
  // Lower limbs
  leftHip: {
    regionId: 'leftHip',
    primaryTissue: 'boneCortical',
    composition: [
      { tissue: 'boneCortical', percentage: 30 },
      { tissue: 'muscle', percentage: 30 },
      { tissue: 'cartilage', percentage: 20 }, // Hip joint
      { tissue: 'tendon', percentage: 10 },
      { tissue: 'softTissue', percentage: 10 },
    ],
    averageDensity: 200,
    xrayOpacity: 0.56,
  },
  
  rightHip: {
    regionId: 'rightHip',
    primaryTissue: 'boneCortical',
    composition: [
      { tissue: 'boneCortical', percentage: 30 },
      { tissue: 'muscle', percentage: 30 },
      { tissue: 'cartilage', percentage: 20 },
      { tissue: 'tendon', percentage: 10 },
      { tissue: 'softTissue', percentage: 10 },
    ],
    averageDensity: 200,
    xrayOpacity: 0.56,
  },
  
  leftThigh: {
    regionId: 'leftThigh',
    primaryTissue: 'muscle',
    composition: [
      { tissue: 'muscle', percentage: 50 },
      { tissue: 'boneCortical', percentage: 25 }, // Femur
      { tissue: 'fat', percentage: 15 },
      { tissue: 'softTissue', percentage: 10 },
    ],
    averageDensity: 85,
    xrayOpacity: 0.4,
  },
  
  rightThigh: {
    regionId: 'rightThigh',
    primaryTissue: 'muscle',
    composition: [
      { tissue: 'muscle', percentage: 50 },
      { tissue: 'boneCortical', percentage: 25 },
      { tissue: 'fat', percentage: 15 },
      { tissue: 'softTissue', percentage: 10 },
    ],
    averageDensity: 85,
    xrayOpacity: 0.4,
  },
  
  leftKnee: {
    regionId: 'leftKnee',
    primaryTissue: 'boneCortical',
    composition: [
      { tissue: 'boneCortical', percentage: 35 },
      { tissue: 'cartilage', percentage: 30 }, // Meniscus
      { tissue: 'muscle', percentage: 20 },
      { tissue: 'tendon', percentage: 10 }, // ACL, PCL, etc.
      { tissue: 'softTissue', percentage: 5 },
    ],
    averageDensity: 250,
    xrayOpacity: 0.62,
  },
  
  rightKnee: {
    regionId: 'rightKnee',
    primaryTissue: 'boneCortical',
    composition: [
      { tissue: 'boneCortical', percentage: 35 },
      { tissue: 'cartilage', percentage: 30 },
      { tissue: 'muscle', percentage: 20 },
      { tissue: 'tendon', percentage: 10 },
      { tissue: 'softTissue', percentage: 5 },
    ],
    averageDensity: 250,
    xrayOpacity: 0.62,
  },
  
  leftLeg: {
    regionId: 'leftLeg',
    primaryTissue: 'muscle',
    composition: [
      { tissue: 'muscle', percentage: 45 },
      { tissue: 'boneCortical', percentage: 35 }, // Tibia, fibula
      { tissue: 'softTissue', percentage: 15 },
      { tissue: 'fat', percentage: 5 },
    ],
    averageDensity: 110,
    xrayOpacity: 0.45,
  },
  
  rightLeg: {
    regionId: 'rightLeg',
    primaryTissue: 'muscle',
    composition: [
      { tissue: 'muscle', percentage: 45 },
      { tissue: 'boneCortical', percentage: 35 },
      { tissue: 'softTissue', percentage: 15 },
      { tissue: 'fat', percentage: 5 },
    ],
    averageDensity: 110,
    xrayOpacity: 0.45,
  },
  
  leftAnkle: {
    regionId: 'leftAnkle',
    primaryTissue: 'boneCortical',
    composition: [
      { tissue: 'boneCortical', percentage: 35 },
      { tissue: 'cartilage', percentage: 25 },
      { tissue: 'tendon', percentage: 25 }, // Achilles
      { tissue: 'muscle', percentage: 10 },
      { tissue: 'softTissue', percentage: 5 },
    ],
    averageDensity: 200,
    xrayOpacity: 0.56,
  },
  
  rightAnkle: {
    regionId: 'rightAnkle',
    primaryTissue: 'boneCortical',
    composition: [
      { tissue: 'boneCortical', percentage: 35 },
      { tissue: 'cartilage', percentage: 25 },
      { tissue: 'tendon', percentage: 25 },
      { tissue: 'muscle', percentage: 10 },
      { tissue: 'softTissue', percentage: 5 },
    ],
    averageDensity: 200,
    xrayOpacity: 0.56,
  },
  
  leftFoot: {
    regionId: 'leftFoot',
    primaryTissue: 'boneCortical',
    composition: [
      { tissue: 'boneCortical', percentage: 40 },
      { tissue: 'muscle', percentage: 25 },
      { tissue: 'tendon', percentage: 20 },
      { tissue: 'softTissue', percentage: 10 },
      { tissue: 'fat', percentage: 5 },
    ],
    averageDensity: 180,
    xrayOpacity: 0.53,
  },
  
  rightFoot: {
    regionId: 'rightFoot',
    primaryTissue: 'boneCortical',
    composition: [
      { tissue: 'boneCortical', percentage: 40 },
      { tissue: 'muscle', percentage: 25 },
      { tissue: 'tendon', percentage: 20 },
      { tissue: 'softTissue', percentage: 10 },
      { tissue: 'fat', percentage: 5 },
    ],
    averageDensity: 180,
    xrayOpacity: 0.53,
  },
};

// Helper functions for density calculations
export function getTissueDensity(tissueKey: string): TissueDensity | undefined {
  return TISSUE_DENSITIES[tissueKey];
}

export function getRegionDensityProfile(regionId: string): RegionDensityProfile | undefined {
  return REGION_DENSITY_PROFILES[regionId];
}

export function calculateAverageDensity(composition: { tissue: string; percentage: number }[]): number {
  return composition.reduce((total, item) => {
    const tissue = getTissueDensity(item.tissue);
    if (!tissue) return total;
    return total + (tissue.hounsfieldUnits * (item.percentage / 100));
  }, 0);
}

// Get color for density visualization (X-ray mode)
export function getDensityColor(hounsfieldUnits: number): string {
  if (hounsfieldUnits < -500) return TISSUE_DENSITIES.air.color; // Air
  if (hounsfieldUnits < 0) return TISSUE_DENSITIES.fat.color; // Fat
  if (hounsfieldUnits < 40) return TISSUE_DENSITIES.water.color; // Water/fluid
  if (hounsfieldUnits < 60) return TISSUE_DENSITIES.softTissue.color; // Soft tissue
  if (hounsfieldUnits < 80) return TISSUE_DENSITIES.muscle.color; // Muscle
  if (hounsfieldUnits < 200) return TISSUE_DENSITIES.tendon.color; // Tendon/ligament
  if (hounsfieldUnits < 600) return TISSUE_DENSITIES.boneSpongy.color; // Spongy bone
  if (hounsfieldUnits < 1500) return TISSUE_DENSITIES.boneCortical.color; // Cortical bone
  return TISSUE_DENSITIES.calcification.color; // Calcification/metal
}

// Export for use in 3D visualization
export const DENSITY_COLOR_SCALE = [
  { hu: -1000, color: '#000000', label: 'Air' },
  { hu: -100, color: '#f5deb3', label: 'Fat' },
  { hu: 0, color: '#87ceeb', label: 'Water' },
  { hu: 40, color: '#ffb6c1', label: 'Soft Tissue' },
  { hu: 60, color: '#cd5c5c', label: 'Muscle/Organ' },
  { hu: 80, color: '#f5f5dc', label: 'Tendon' },
  { hu: 300, color: '#ffe4c4', label: 'Spongy Bone' },
  { hu: 1000, color: '#fffaf0', label: 'Cortical Bone' },
  { hu: 1200, color: '#ffffff', label: 'Calcification' },
];

// X-ray opacity calculation (for visualization)
export function calculateXrayOpacity(hounsfieldUnits: number): number {
  // Normalize to 0-1 range (typical X-ray range: -1000 to 1000 HU)
  const minHU = -1000;
  const maxHU = 1000;
  const normalized = (hounsfieldUnits - minHU) / (maxHU - minHU);
  return Math.max(0, Math.min(1, normalized));
}

// Get radiodensity classification
export function getRadiodensityClass(hounsfieldUnits: number): 'radiolucent' | 'intermediate' | 'radiopaque' {
  if (hounsfieldUnits < 0) return 'radiolucent';
  if (hounsfieldUnits < 200) return 'intermediate';
  return 'radiopaque';
}
