import { useMemo, useCallback } from 'react';
import * as THREE from 'three';
import {
  TISSUE_DENSITIES,
  REGION_DENSITY_PROFILES,
  getTissueDensity,
  getRegionDensityProfile,
  calculateXrayOpacity,
  getDensityColor,
  DENSITY_COLOR_SCALE,
  type TissueDensity,
  type RegionDensityProfile,
} from '../content/tissueDensity.js';

export type VisualizationMode = 'standard' | 'xray' | 'density' | 'cross-section';

export interface DensityMaterialProps {
  regionId: string;
  mode: VisualizationMode;
  baseColor?: string;
  opacity?: number;
  clippingPlanes?: THREE.Plane[];
}

export interface DensityVisualizationState {
  mode: VisualizationMode;
  showTissueLabels: boolean;
  densityRange: { min: number; max: number };
  highlightRadiodensity: 'all' | 'radiolucent' | 'intermediate' | 'radiopaque';
}

// Hook for density-based material properties
export function useDensityMaterial({
  regionId,
  mode,
  baseColor = '#ffffff',
  opacity = 1.0,
  clippingPlanes,
}: DensityMaterialProps) {
  const densityProfile = useMemo(() => {
    return getRegionDensityProfile(regionId);
  }, [regionId]);

  const materialProps = useMemo(() => {
    const baseProps: any = {
      transparent: opacity < 1.0,
      opacity,
      clippingPlanes: clippingPlanes || [],
      clipShadows: true,
      side: THREE.FrontSide,
    };

    switch (mode) {
      case 'xray':
        return {
          ...baseProps,
          color: getDensityColor(densityProfile?.averageDensity || 50),
          transparent: true,
          opacity: calculateXrayOpacity(densityProfile?.averageDensity || 50) * 0.8 + 0.2,
          metalness: 0.1,
          roughness: 0.8,
          emissive: getDensityColor(densityProfile?.averageDensity || 50),
          emissiveIntensity: 0.2,
        };

      case 'density':
        return {
          ...baseProps,
          color: getDensityColor(densityProfile?.averageDensity || 50),
          transparent: true,
          opacity: 0.85,
          metalness: 0.2,
          roughness: 0.6,
        };

      case 'cross-section':
        return {
          ...baseProps,
          color: baseColor,
          transparent: opacity < 1.0,
          opacity,
          side: THREE.DoubleSide, // Show interior when cut
          clippingPlanes: clippingPlanes || [],
          clipShadows: true,
        };

      case 'standard':
      default:
        return {
          ...baseProps,
          color: baseColor,
          transparent: opacity < 0.95,
          opacity,
          metalness: 0.3,
          roughness: 0.5,
        };
    }
  }, [mode, baseColor, opacity, densityProfile, clippingPlanes]);

  return {
    materialProps,
    densityProfile,
    averageDensity: densityProfile?.averageDensity || 50,
    xrayOpacity: densityProfile?.xrayOpacity || 0.5,
  };
}

// Hook for tissue composition breakdown
export function useTissueComposition(regionId: string) {
  const profile = useMemo(() => {
    return getRegionDensityProfile(regionId);
  }, [regionId]);

  const composition = useMemo(() => {
    if (!profile) return [];
    
    return profile.composition.map(item => {
      const tissue = getTissueDensity(item.tissue);
      return {
        ...item,
        tissueDetails: tissue,
        color: tissue?.color || '#cccccc',
      };
    });
  }, [profile]);

  const primaryTissue = useMemo(() => {
    if (!profile) return null;
    return getTissueDensity(profile.primaryTissue);
  }, [profile]);

  return {
    profile,
    composition,
    primaryTissue,
    totalTissues: composition.length,
  };
}

// Get density information for educational display
export function getDensityInfo(regionId: string) {
  const profile = getRegionDensityProfile(regionId);
  if (!profile) return null;

  const primaryTissue = getTissueDensity(profile.primaryTissue);
  
  return {
    averageDensity: profile.averageDensity,
    xrayOpacity: profile.xrayOpacity,
    primaryTissue: primaryTissue?.name || 'Unknown',
    primaryTissueDensity: primaryTissue?.hounsfieldUnits || 0,
    radiodensity: primaryTissue?.radiodensity || 'intermediate',
    composition: profile.composition.map(item => ({
      tissue: getTissueDensity(item.tissue)?.name || item.tissue,
      percentage: item.percentage,
      density: getTissueDensity(item.tissue)?.hounsfieldUnits || 0,
    })),
    clinicalNote: getClinicalDensityNote(profile.averageDensity),
  };
}

function getClinicalDensityNote(hounsfieldUnits: number): string {
  if (hounsfieldUnits < -500) {
    return 'Air-filled region appears black on X-ray (radiolucent). Normal for lungs and sinuses.';
  }
  if (hounsfieldUnits < 0) {
    return 'Fatty tissue appears dark on X-ray. Normal for subcutaneous fat and bone marrow.';
  }
  if (hounsfieldUnits < 100) {
    return 'Soft tissue density. Normal for muscles, organs, and fluid-filled structures.';
  }
  if (hounsfieldUnits < 500) {
    return 'Intermediate density. May indicate tendons, ligaments, or early calcification.';
  }
  if (hounsfieldUnits < 1000) {
    return 'Bone density appears white on X-ray (radiopaque). Normal for skeletal structures.';
  }
  return 'High density suggests calcification, contrast material, or metal. May indicate pathology or implants.';
}

// Density scale for legend/tooltips
export const DENSITY_LEGEND = [
  { 
    label: 'Air', 
    range: '-1000 HU', 
    color: '#000000',
    description: 'Lungs, sinuses, GI gas',
    examples: ['Lung tissue', 'Sinuses', 'Bowel gas'],
  },
  { 
    label: 'Fat', 
    range: '-100 to -50 HU', 
    color: '#f5deb3',
    description: 'Subcutaneous and visceral fat',
    examples: ['Subcutaneous fat', 'Bone marrow fat', 'Peritoneal fat'],
  },
  { 
    label: 'Water/Fluid', 
    range: '0 to 20 HU', 
    color: '#87ceeb',
    description: 'Water, CSF, simple cysts',
    examples: ['CSF', 'Simple cysts', 'Edema'],
  },
  { 
    label: 'Soft Tissue', 
    range: '20 to 60 HU', 
    color: '#ffb6c1',
    description: 'Skin, connective tissue, most organs',
    examples: ['Liver', 'Kidneys', 'Spleen', 'Skin'],
  },
  { 
    label: 'Muscle', 
    range: '40 to 80 HU', 
    color: '#cd5c5c',
    description: 'Skeletal muscle tissue',
    examples: ['Skeletal muscle', 'Heart muscle', 'Tongue'],
  },
  { 
    label: 'Tendon/Ligament', 
    range: '60 to 100 HU', 
    color: '#f5f5dc',
    description: 'Dense connective tissue',
    examples: ['Tendons', 'Ligaments', 'Fascia'],
  },
  { 
    label: 'Spongy Bone', 
    range: '100 to 600 HU', 
    color: '#ffe4c4',
    description: 'Trabecular bone inside vertebrae',
    examples: ['Vertebral bodies', 'Ends of long bones'],
  },
  { 
    label: 'Cortical Bone', 
    range: '600+ HU', 
    color: '#fffaf0',
    description: 'Dense outer layer of bones',
    examples: ['Skull', 'Long bone shafts', 'Ribs'],
  },
  { 
    label: 'Calcification', 
    range: '1200+ HU', 
    color: '#ffffff',
    description: 'Calcified tissues or stones',
    examples: ['Kidney stones', 'Calcified arteries', 'Bone spurs'],
  },
];

// Helper to check if density indicates pathology
export function analyzeDensityForPathology(
  regionId: string,
  observedDensity?: number
): { isNormal: boolean; notes: string[] } {
  const profile = getRegionDensityProfile(regionId);
  if (!profile) return { isNormal: true, notes: [] };

  const expectedDensity = profile.averageDensity;
  const actualDensity = observedDensity || expectedDensity;
  const difference = Math.abs(actualDensity - expectedDensity);
  const notes: string[] = [];

  // Check for significant deviation
  if (difference > 100) {
    if (actualDensity > expectedDensity) {
      notes.push(`Higher than expected density may indicate calcification, fibrosis, or mass.`);
    } else {
      notes.push(`Lower than expected density may indicate edema, cyst, or fatty replacement.`);
    }
  }

  // Check for air where it shouldn't be
  if (actualDensity < -500 && !regionId.includes('chest') && !regionId.includes('head')) {
    notes.push('Air/gas detected outside expected location - possible perforation or surgical change.');
  }

  // Check for fluid collection
  if (Math.abs(actualDensity - 10) < 15 && profile.primaryTissue !== 'water') {
    notes.push('Fluid density detected - may represent effusion, cyst, or inflammation.');
  }

  return {
    isNormal: notes.length === 0,
    notes,
  };
}

// Export all for use in components
export {
  TISSUE_DENSITIES,
  REGION_DENSITY_PROFILES,
  getTissueDensity,
  getRegionDensityProfile,
  calculateXrayOpacity,
  getDensityColor,
  DENSITY_COLOR_SCALE,
};
export type { TissueDensity, RegionDensityProfile };
