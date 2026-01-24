/**
 * Body Proportion Calculator
 *
 * Calculates 3D model proportions based on user demographics.
 * Used to customize the AnatomyViewer body model.
 */

import type { UserDemographics, BiologicalSex, BodyType } from '../hooks/useUserDemographics';

// ============================================
// Types
// ============================================

export interface BodyProportions {
  // Overall scale (1.0 = baseline 170cm)
  heightScale: number;

  // Torso proportions
  torsoLength: number;      // Relative torso length
  shoulderWidth: number;    // Shoulder to shoulder
  hipWidth: number;         // Hip width
  chestDepth: number;       // Front to back chest

  // Limb proportions
  armLength: number;        // Arm length scale
  armThickness: number;     // Arm diameter scale
  legLength: number;        // Leg length scale
  legThickness: number;     // Leg diameter scale

  // Head/neck
  headSize: number;         // Head scale
  neckThickness: number;    // Neck diameter

  // Mass distribution
  abdomenSize: number;      // Abdomen/belly size
  overallMass: number;      // General mass multiplier

  // Derived for 3D rendering
  skinTone: string;         // Base skin color
}

export interface StructureTransform {
  id: string;
  position: [number, number, number];
  scale: [number, number, number];
  rotation?: [number, number, number];
}

// ============================================
// Constants
// ============================================

// Baseline reference (average adult)
const BASELINE_HEIGHT_CM = 170;
const BASELINE_WEIGHT_KG = 70;
const BASELINE_BMI = 24.2;

// Sex-based proportion multipliers
const SEX_PROPORTIONS: Record<BiologicalSex, {
  shoulderMult: number;
  hipMult: number;
  chestMult: number;
  limbMassMult: number;
}> = {
  male: {
    shoulderMult: 1.10,
    hipMult: 0.92,
    chestMult: 1.05,
    limbMassMult: 1.05,
  },
  female: {
    shoulderMult: 0.92,
    hipMult: 1.08,
    chestMult: 0.95,
    limbMassMult: 0.92,
  },
  other: {
    shoulderMult: 1.0,
    hipMult: 1.0,
    chestMult: 1.0,
    limbMassMult: 1.0,
  },
};

// Body type mass distribution
const BODY_TYPE_PROPORTIONS: Record<BodyType, {
  limbThickness: number;
  abdomenSize: number;
  overallMass: number;
  torsoRatio: number;
}> = {
  ectomorph: {
    limbThickness: 0.85,
    abdomenSize: 0.85,
    overallMass: 0.88,
    torsoRatio: 0.95,
  },
  mesomorph: {
    limbThickness: 1.0,
    abdomenSize: 1.0,
    overallMass: 1.0,
    torsoRatio: 1.0,
  },
  endomorph: {
    limbThickness: 1.12,
    abdomenSize: 1.18,
    overallMass: 1.12,
    torsoRatio: 1.05,
  },
};

// ============================================
// Main Calculator Function
// ============================================

export function calculateBodyProportions(demographics: UserDemographics): BodyProportions {
  const { heightCm, weightKg, age, sex, bodyType, bmi = 24.2 } = demographics;

  // Height scale (linear scaling from baseline)
  const heightScale = heightCm / BASELINE_HEIGHT_CM;

  // Weight/BMI factor for mass
  const bmiRatio = bmi / BASELINE_BMI;
  const weightRatio = weightKg / BASELINE_WEIGHT_KG;

  // Get sex and body type modifiers
  const sexProps = SEX_PROPORTIONS[sex];
  const bodyTypeProps = BODY_TYPE_PROPORTIONS[bodyType];

  // Age adjustments (subtle)
  const ageFactor = age < 25 ? 0.98 : age > 60 ? 1.02 : 1.0;

  // Calculate proportions
  const proportions: BodyProportions = {
    heightScale,

    // Torso
    torsoLength: heightScale * bodyTypeProps.torsoRatio,
    shoulderWidth: sexProps.shoulderMult * (0.9 + bmiRatio * 0.1),
    hipWidth: sexProps.hipMult * (0.9 + bmiRatio * 0.1),
    chestDepth: sexProps.chestMult * (0.85 + bmiRatio * 0.15),

    // Limbs
    armLength: heightScale * 0.95, // Arms slightly shorter relative to height
    armThickness: bodyTypeProps.limbThickness * sexProps.limbMassMult * (0.8 + bmiRatio * 0.2),
    legLength: heightScale * 1.0,
    legThickness: bodyTypeProps.limbThickness * sexProps.limbMassMult * (0.85 + bmiRatio * 0.15),

    // Head/neck (less affected by weight)
    headSize: heightScale * (0.95 + bmiRatio * 0.05),
    neckThickness: (0.85 + bmiRatio * 0.15) * sexProps.limbMassMult,

    // Mass distribution
    abdomenSize: bodyTypeProps.abdomenSize * bmiRatio * ageFactor,
    overallMass: bodyTypeProps.overallMass * weightRatio,

    // Skin tone (neutral - could be customized)
    skinTone: '#e8d4c4',
  };

  return proportions;
}

// ============================================
// Transform Structures for 3D Rendering
// ============================================

/**
 * Generate transforms for each body structure based on proportions
 */
export function generateStructureTransforms(proportions: BodyProportions): StructureTransform[] {
  const {
    heightScale,
    shoulderWidth,
    hipWidth,
    chestDepth,
    armThickness,
    legThickness,
    headSize,
    neckThickness,
    abdomenSize,
  } = proportions;

  // Base positions adjusted for height
  const baseY = 0;
  const headY = 1.35 * heightScale + baseY;
  const neckY = 1.0 * heightScale + baseY;
  const chestY = 0.55 * heightScale + baseY;
  const abdomenY = -0.1 * heightScale + baseY;
  const armY = 0.4 * heightScale + baseY;
  const legY = -0.85 * heightScale + baseY;

  // Arm X positions based on shoulder width
  const armXOffset = 0.5 * shoulderWidth;

  // Leg X positions based on hip width
  const legXOffset = 0.18 * hipWidth;

  const transforms: StructureTransform[] = [
    {
      id: 'head',
      position: [0, headY, 0],
      scale: [headSize, headSize, headSize],
    },
    {
      id: 'neck',
      position: [0, neckY, 0],
      scale: [neckThickness, heightScale * 0.9, neckThickness],
    },
    {
      id: 'chest',
      position: [0, chestY, 0],
      scale: [shoulderWidth, heightScale, chestDepth],
    },
    {
      id: 'abdomen',
      position: [0, abdomenY, 0],
      scale: [hipWidth * abdomenSize, heightScale * abdomenSize, chestDepth * abdomenSize],
    },
    {
      id: 'leftArm',
      position: [-armXOffset, armY, 0],
      scale: [armThickness, heightScale, armThickness],
      rotation: [0, 0, Math.PI / 6],
    },
    {
      id: 'rightArm',
      position: [armXOffset, armY, 0],
      scale: [armThickness, heightScale, armThickness],
      rotation: [0, 0, -Math.PI / 6],
    },
    {
      id: 'leftLeg',
      position: [-legXOffset, legY, 0],
      scale: [legThickness, heightScale, legThickness],
    },
    {
      id: 'rightLeg',
      position: [legXOffset, legY, 0],
      scale: [legThickness, heightScale, legThickness],
    },
  ];

  return transforms;
}

// ============================================
// Apply Proportions to Existing Structures
// ============================================

/**
 * Merge base structure with proportional transforms
 */
export function applyProportionsToStructure(
  baseStructure: {
    id: string;
    name: string;
    position: [number, number, number];
    geometry: 'sphere' | 'cylinder' | 'capsule';
    args: number[];
    rotation?: [number, number, number];
  },
  proportions: BodyProportions
): {
  id: string;
  name: string;
  position: [number, number, number];
  geometry: 'sphere' | 'cylinder' | 'capsule';
  args: number[];
  rotation?: [number, number, number];
} {
  const transforms = generateStructureTransforms(proportions);
  const transform = transforms.find(t => t.id === baseStructure.id);

  if (!transform) {
    return baseStructure; // No transform found, return as-is
  }

  // Apply position transform
  const newPosition: [number, number, number] = [
    transform.position[0],
    transform.position[1],
    transform.position[2],
  ];

  // Apply scale to geometry args
  const newArgs = baseStructure.args.map((arg, index) => {
    // Scale based on index (radius/width use x scale, height uses y scale)
    if (index === 0 || index === 1) {
      // Radius or bottom radius
      return arg * transform.scale[0];
    } else if (index === 2 && baseStructure.geometry === 'cylinder') {
      // Height for cylinder
      return arg * transform.scale[1];
    }
    return arg * transform.scale[0]; // Default to x scale
  });

  return {
    ...baseStructure,
    position: newPosition,
    args: newArgs,
    rotation: transform.rotation ?? baseStructure.rotation,
  };
}

// ============================================
// Preview Configuration
// ============================================

/**
 * Generate a quick preview configuration for real-time updates during onboarding
 */
export function getPreviewConfig(demographics: Partial<UserDemographics>): {
  scale: number;
  massMultiplier: number;
} {
  const heightCm = demographics.heightCm ?? 170;
  const weightKg = demographics.weightKg ?? 70;
  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);

  return {
    scale: heightCm / BASELINE_HEIGHT_CM,
    massMultiplier: bmi / BASELINE_BMI,
  };
}

// ============================================
// Exports
// ============================================

export {
  BASELINE_HEIGHT_CM,
  BASELINE_WEIGHT_KG,
  SEX_PROPORTIONS,
  BODY_TYPE_PROPORTIONS,
};
