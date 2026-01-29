/**
 * ConditionOverlaySystem Component
 *
 * A React Three Fiber component that renders condition-specific overlays on anatomy.
 * Supports various medical conditions with custom geometry modifications, textures,
 * color changes, transparency effects, and educational annotations.
 *
 * Features:
 * - Multiple condition types (atherosclerosis, arthritis, osteoporosis, etc.)
 * - Severity levels affecting visual intensity
 * - Toggle individual condition overlays
 * - Compare mode showing healthy vs diseased
 * - Educational annotations with pathological features
 */

import { useRef, useMemo, useState, useCallback, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Html, Line, Text } from '@react-three/drei';
import * as THREE from 'three';
import {
  createCinematicMaterial,
  createStandardMaterial,
  type MaterialQuality,
  type CinematicMaterialConfig,
} from './EnhancedMaterials';

// ============================================
// Types & Interfaces
// ============================================

export type ConditionType =
  | 'atherosclerosis'
  | 'arthritis'
  | 'osteoporosis'
  | 'lung_consolidation'
  | 'liver_cirrhosis'
  | 'kidney_damage'
  | 'brain_lesions'
  | 'skin_conditions'
  | 'muscle_wasting';

export type SeverityLevel = 'mild' | 'moderate' | 'severe';

export interface ConditionAnnotation {
  id: string;
  position: [number, number, number];
  title: string;
  description: string;
  feature: string; // What pathological feature this points to
  educationalLink?: string;
}

export interface ConditionOverlayConfig {
  type: ConditionType;
  structureId: string;
  severity: SeverityLevel;
  enabled: boolean;
  annotations?: ConditionAnnotation[];
}

export interface ConditionOverlaySystemProps {
  conditions: ConditionOverlayConfig[];
  materialQuality?: MaterialQuality;
  showAnnotations?: boolean;
  compareMode?: boolean; // Show healthy vs diseased side by side
  onAnnotationClick?: (annotation: ConditionAnnotation) => void;
  onConditionHover?: (conditionType: ConditionType | null) => void;
}

// ============================================
// Condition Visual Configurations
// ============================================

interface ConditionVisualConfig {
  name: string;
  description: string;
  affectedStructures: string[];
  colors: {
    mild: string;
    moderate: string;
    severe: string;
  };
  opacity: {
    mild: number;
    moderate: number;
    severe: number;
  };
  emissive?: {
    mild: string;
    moderate: string;
    severe: string;
  };
  emissiveIntensity?: {
    mild: number;
    moderate: number;
    severe: number;
  };
  geometryModifier?: 'roughen' | 'shrink' | 'expand' | 'nodular' | 'porous' | 'plaque';
  texturePattern?: 'speckled' | 'nodular' | 'linear' | 'patchy' | 'diffuse';
  annotations: ConditionAnnotation[];
}

const CONDITION_CONFIGS: Record<ConditionType, ConditionVisualConfig> = {
  atherosclerosis: {
    name: 'Atherosclerosis',
    description: 'Buildup of plaque inside arteries, causing narrowing and reduced blood flow',
    affectedStructures: ['aorta', 'coronaryArteries', 'carotidArtery', 'femoralArtery'],
    colors: {
      mild: '#f5e6a3', // Light yellow
      moderate: '#e8d080', // Yellow
      severe: '#d4a84a', // Yellow-orange
    },
    opacity: {
      mild: 0.4,
      moderate: 0.6,
      severe: 0.8,
    },
    emissive: {
      mild: '#ffff99',
      moderate: '#ffcc66',
      severe: '#ff9933',
    },
    emissiveIntensity: {
      mild: 0.05,
      moderate: 0.1,
      severe: 0.15,
    },
    geometryModifier: 'plaque',
    texturePattern: 'patchy',
    annotations: [
      {
        id: 'athero-plaque',
        position: [0.05, 0.6, 0.15],
        title: 'Atherosclerotic Plaque',
        description: 'Fatty deposits containing cholesterol, calcium, and cellular debris',
        feature: 'Yellow-white buildup on arterial wall',
        educationalLink: '/education/cardiovascular/atherosclerosis',
      },
      {
        id: 'athero-narrowing',
        position: [-0.02, 0.55, 0.12],
        title: 'Luminal Narrowing',
        description: 'Reduced vessel diameter causing decreased blood flow',
        feature: 'Narrowed arterial lumen',
        educationalLink: '/education/cardiovascular/stenosis',
      },
    ],
  },

  arthritis: {
    name: 'Arthritis',
    description: 'Joint inflammation causing pain, stiffness, and reduced mobility',
    affectedStructures: ['knee', 'hip', 'shoulder', 'fingers', 'spine'],
    colors: {
      mild: '#ff9999',
      moderate: '#ff6666',
      severe: '#ff3333',
    },
    opacity: {
      mild: 0.3,
      moderate: 0.5,
      severe: 0.7,
    },
    emissive: {
      mild: '#ff6666',
      moderate: '#ff4444',
      severe: '#ff2222',
    },
    emissiveIntensity: {
      mild: 0.08,
      moderate: 0.12,
      severe: 0.18,
    },
    geometryModifier: 'roughen',
    texturePattern: 'speckled',
    annotations: [
      {
        id: 'arthritis-space',
        position: [0.2, -0.5, 0.1],
        title: 'Joint Space Narrowing',
        description: 'Loss of cartilage causing bones to move closer together',
        feature: 'Narrowed space between bones',
        educationalLink: '/education/musculoskeletal/joint-space',
      },
      {
        id: 'arthritis-spur',
        position: [0.18, -0.48, 0.08],
        title: 'Bone Spurs (Osteophytes)',
        description: 'Bony projections that develop along joint edges',
        feature: 'Irregular bone growths',
        educationalLink: '/education/musculoskeletal/osteophytes',
      },
    ],
  },

  osteoporosis: {
    name: 'Osteoporosis',
    description: 'Reduced bone density leading to fragile, porous bones',
    affectedStructures: ['spine', 'hip', 'wrist', 'ribcage', 'skull'],
    colors: {
      mild: '#e8e0d0',
      moderate: '#d8d0c0',
      severe: '#c8c0b0',
    },
    opacity: {
      mild: 0.5,
      moderate: 0.4,
      severe: 0.3,
    },
    geometryModifier: 'porous',
    texturePattern: 'speckled',
    annotations: [
      {
        id: 'osteo-trabecular',
        position: [0, 0.1, 0.15],
        title: 'Trabecular Bone Loss',
        description: 'Thinning of the honeycomb-like internal bone structure',
        feature: 'Porous, weakened bone texture',
        educationalLink: '/education/musculoskeletal/bone-density',
      },
      {
        id: 'osteo-cortical',
        position: [0.02, 0.08, 0.12],
        title: 'Cortical Thinning',
        description: 'Reduced thickness of the outer bone layer',
        feature: 'Thinner cortical shell',
        educationalLink: '/education/musculoskeletal/cortical-bone',
      },
    ],
  },

  lung_consolidation: {
    name: 'Lung Consolidation',
    description: 'Fluid or debris filling the alveoli, common in pneumonia',
    affectedStructures: ['leftLung', 'rightLung'],
    colors: {
      mild: '#c9a8a8',
      moderate: '#b08080',
      severe: '#906060',
    },
    opacity: {
      mild: 0.6,
      moderate: 0.75,
      severe: 0.9,
    },
    emissive: {
      mild: '#996666',
      moderate: '#884444',
      severe: '#773333',
    },
    emissiveIntensity: {
      mild: 0.03,
      moderate: 0.06,
      severe: 0.1,
    },
    texturePattern: 'patchy',
    annotations: [
      {
        id: 'lung-consolidation',
        position: [0.15, 0.55, 0.1],
        title: 'Alveolar Consolidation',
        description: 'Air spaces filled with inflammatory exudate or fluid',
        feature: 'Dense, opaque lung tissue',
        educationalLink: '/education/respiratory/consolidation',
      },
      {
        id: 'lung-air-bronchogram',
        position: [0.12, 0.52, 0.08],
        title: 'Air Bronchogram',
        description: 'Air-filled bronchi visible within consolidated lung',
        feature: 'Dark branching airways in white tissue',
        educationalLink: '/education/respiratory/air-bronchogram',
      },
    ],
  },

  liver_cirrhosis: {
    name: 'Liver Cirrhosis',
    description: 'Chronic liver damage with scarring and nodular regeneration',
    affectedStructures: ['liver'],
    colors: {
      mild: '#9a6040',
      moderate: '#8a5030',
      severe: '#6a4020',
    },
    opacity: {
      mild: 0.8,
      moderate: 0.85,
      severe: 0.9,
    },
    geometryModifier: 'nodular',
    texturePattern: 'nodular',
    annotations: [
      {
        id: 'cirrhosis-nodules',
        position: [0.12, 0.15, 0.1],
        title: 'Regenerative Nodules',
        description: 'Clusters of hepatocytes surrounded by fibrous tissue',
        feature: 'Bumpy, nodular surface texture',
        educationalLink: '/education/digestive/cirrhosis-nodules',
      },
      {
        id: 'cirrhosis-fibrosis',
        position: [0.08, 0.12, 0.08],
        title: 'Fibrous Septae',
        description: 'Scar tissue bands dividing liver into nodules',
        feature: 'White fibrous bands',
        educationalLink: '/education/digestive/liver-fibrosis',
      },
    ],
  },

  kidney_damage: {
    name: 'Kidney Damage',
    description: 'Chronic kidney disease causing scarring and reduced function',
    affectedStructures: ['leftKidney', 'rightKidney'],
    colors: {
      mild: '#993333',
      moderate: '#773333',
      severe: '#553333',
    },
    opacity: {
      mild: 0.75,
      moderate: 0.8,
      severe: 0.85,
    },
    geometryModifier: 'shrink',
    texturePattern: 'speckled',
    annotations: [
      {
        id: 'kidney-scarring',
        position: [-0.18, 0.05, 0.08],
        title: 'Cortical Scarring',
        description: 'Areas of fibrosis replacing functional kidney tissue',
        feature: 'Irregular, scarred surface',
        educationalLink: '/education/urinary/kidney-scarring',
      },
      {
        id: 'kidney-atrophy',
        position: [-0.15, 0.02, 0.06],
        title: 'Renal Atrophy',
        description: 'Decreased kidney size due to tissue loss',
        feature: 'Shrunken kidney appearance',
        educationalLink: '/education/urinary/renal-atrophy',
      },
    ],
  },

  brain_lesions: {
    name: 'Brain Lesions',
    description: 'White matter changes often seen in MS, small vessel disease, or aging',
    affectedStructures: ['brain'],
    colors: {
      mild: '#ffffff',
      moderate: '#f0f0f0',
      severe: '#e0e0e0',
    },
    opacity: {
      mild: 0.4,
      moderate: 0.6,
      severe: 0.8,
    },
    emissive: {
      mild: '#ffffff',
      moderate: '#ffffff',
      severe: '#ffffff',
    },
    emissiveIntensity: {
      mild: 0.15,
      moderate: 0.25,
      severe: 0.35,
    },
    texturePattern: 'patchy',
    annotations: [
      {
        id: 'brain-wmh',
        position: [0.05, 1.42, 0.08],
        title: 'White Matter Hyperintensities',
        description: 'Bright spots indicating myelin damage or small vessel disease',
        feature: 'Bright white patches in brain tissue',
        educationalLink: '/education/neurologic/white-matter-lesions',
      },
      {
        id: 'brain-periventricular',
        position: [0, 1.38, 0.05],
        title: 'Periventricular Lesions',
        description: 'Lesions surrounding the brain ventricles',
        feature: 'Halo of changes around ventricles',
        educationalLink: '/education/neurologic/periventricular',
      },
    ],
  },

  skin_conditions: {
    name: 'Skin Conditions',
    description: 'Dermatological conditions including rashes, lesions, and inflammation',
    affectedStructures: ['body-skin', 'head', 'chest', 'abdomen', 'leftArm', 'rightArm'],
    colors: {
      mild: '#ffaaaa',
      moderate: '#ff8888',
      severe: '#ff5555',
    },
    opacity: {
      mild: 0.3,
      moderate: 0.5,
      severe: 0.7,
    },
    emissive: {
      mild: '#ff6666',
      moderate: '#ff4444',
      severe: '#ff2222',
    },
    emissiveIntensity: {
      mild: 0.05,
      moderate: 0.1,
      severe: 0.15,
    },
    texturePattern: 'patchy',
    annotations: [
      {
        id: 'skin-lesion',
        position: [0.3, 0.4, 0.15],
        title: 'Cutaneous Lesions',
        description: 'Areas of abnormal skin appearance',
        feature: 'Red, raised or discolored patches',
        educationalLink: '/education/dermatologic/lesion-types',
      },
      {
        id: 'skin-inflammation',
        position: [0.25, 0.35, 0.12],
        title: 'Inflammatory Response',
        description: 'Redness and swelling from immune activation',
        feature: 'Erythematous (red) skin areas',
        educationalLink: '/education/dermatologic/inflammation',
      },
    ],
  },

  muscle_wasting: {
    name: 'Muscle Wasting',
    description: 'Loss of muscle mass (atrophy) from disuse, disease, or malnutrition',
    affectedStructures: ['leftArm', 'rightArm', 'leftLeg', 'rightLeg', 'chest'],
    colors: {
      mild: '#c08080',
      moderate: '#a06060',
      severe: '#804040',
    },
    opacity: {
      mild: 0.6,
      moderate: 0.7,
      severe: 0.8,
    },
    geometryModifier: 'shrink',
    texturePattern: 'linear',
    annotations: [
      {
        id: 'muscle-atrophy',
        position: [0.45, 0.4, 0.1],
        title: 'Muscular Atrophy',
        description: 'Reduced muscle fiber size and number',
        feature: 'Visibly smaller muscle bulk',
        educationalLink: '/education/musculoskeletal/muscle-atrophy',
      },
      {
        id: 'muscle-fat-infiltration',
        position: [0.4, 0.35, 0.08],
        title: 'Fatty Infiltration',
        description: 'Fat replacing muscle tissue',
        feature: 'Marbled appearance in muscle',
        educationalLink: '/education/musculoskeletal/fatty-infiltration',
      },
    ],
  },
};

// ============================================
// Severity Multipliers
// ============================================

const SEVERITY_MULTIPLIERS = {
  mild: 0.3,
  moderate: 0.6,
  severe: 1.0,
};

// ============================================
// Custom Geometry Generators
// ============================================

/**
 * Generate a procedural plaque geometry for atherosclerosis
 */
function generatePlaqueGeometry(
  baseRadius: number,
  severity: SeverityLevel
): THREE.BufferGeometry {
  const segments = 32;
  const rings = 16;
  const plaqueThickness = baseRadius * 0.3 * SEVERITY_MULTIPLIERS[severity];

  const geometry = new THREE.SphereGeometry(baseRadius + plaqueThickness, segments, rings);
  const positions = geometry.attributes.position;

  // Add irregular bulges to simulate plaque buildup
  for (let i = 0; i < positions.count; i++) {
    const x = positions.getX(i);
    const y = positions.getY(i);
    const z = positions.getZ(i);

    // Apply noise-like distortion
    const noise = Math.sin(x * 10) * Math.cos(y * 10) * Math.sin(z * 10);
    const distortion = noise * plaqueThickness * 0.5;

    const length = Math.sqrt(x * x + y * y + z * z);
    const normalizedX = x / length;
    const normalizedY = y / length;
    const normalizedZ = z / length;

    positions.setXYZ(
      i,
      x + normalizedX * distortion,
      y + normalizedY * distortion,
      z + normalizedZ * distortion
    );
  }

  geometry.computeVertexNormals();
  return geometry;
}

/**
 * Generate a porous bone geometry for osteoporosis
 */
function generatePorousBoneGeometry(
  baseGeometry: THREE.BufferGeometry,
  severity: SeverityLevel
): THREE.BufferGeometry {
  const geometry = baseGeometry.clone();
  const positions = geometry.attributes.position;
  const porosity = SEVERITY_MULTIPLIERS[severity] * 0.15;

  for (let i = 0; i < positions.count; i++) {
    const x = positions.getX(i);
    const y = positions.getY(i);
    const z = positions.getZ(i);

    // Create porous effect by indenting surface
    const noise =
      Math.sin(x * 20) * Math.sin(y * 20) * Math.sin(z * 20) +
      Math.sin(x * 40) * Math.sin(y * 40) * Math.sin(z * 40) * 0.5;

    if (noise > 0.3) {
      const indent = noise * porosity;
      const length = Math.sqrt(x * x + y * y + z * z);
      if (length > 0) {
        positions.setXYZ(
          i,
          x * (1 - indent / length),
          y * (1 - indent / length),
          z * (1 - indent / length)
        );
      }
    }
  }

  geometry.computeVertexNormals();
  return geometry;
}

/**
 * Generate nodular surface for cirrhosis
 */
function generateNodularGeometry(
  baseGeometry: THREE.BufferGeometry,
  severity: SeverityLevel
): THREE.BufferGeometry {
  const geometry = baseGeometry.clone();
  const positions = geometry.attributes.position;
  const noduleSize = SEVERITY_MULTIPLIERS[severity] * 0.08;

  for (let i = 0; i < positions.count; i++) {
    const x = positions.getX(i);
    const y = positions.getY(i);
    const z = positions.getZ(i);

    // Create nodular bumps
    const noise =
      Math.abs(Math.sin(x * 15)) *
      Math.abs(Math.sin(y * 15)) *
      Math.abs(Math.sin(z * 15));

    const bump = noise * noduleSize;
    const length = Math.sqrt(x * x + y * y + z * z);

    if (length > 0) {
      positions.setXYZ(
        i,
        x * (1 + bump / length),
        y * (1 + bump / length),
        z * (1 + bump / length)
      );
    }
  }

  geometry.computeVertexNormals();
  return geometry;
}

// ============================================
// Annotation Component
// ============================================

interface AnnotationMarkerProps {
  annotation: ConditionAnnotation;
  onClick?: (annotation: ConditionAnnotation) => void;
  visible: boolean;
}

function AnnotationMarker({ annotation, onClick, visible }: AnnotationMarkerProps) {
  const [hovered, setHovered] = useState(false);

  // Annotation endpoint (slightly offset for the label)
  const labelOffset: [number, number, number] = [
    annotation.position[0] + 0.15,
    annotation.position[1] + 0.1,
    annotation.position[2] + 0.1,
  ];

  if (!visible) return null;

  return (
    <group>
      {/* Connection line */}
      <Line
        points={[annotation.position, labelOffset]}
        color={hovered ? '#ffffff' : '#88ccff'}
        lineWidth={hovered ? 2 : 1}
        dashed={false}
      />

      {/* Marker point */}
      <mesh position={annotation.position}>
        <sphereGeometry args={[0.008, 16, 16]} />
        <meshBasicMaterial color={hovered ? '#ffffff' : '#44aaff'} />
      </mesh>

      {/* Label */}
      <Html position={labelOffset} distanceFactor={2}>
        <div
          style={{
            backgroundColor: hovered ? 'rgba(68, 170, 255, 0.95)' : 'rgba(30, 60, 90, 0.9)',
            color: 'white',
            padding: '8px 12px',
            borderRadius: '6px',
            fontSize: '12px',
            maxWidth: '200px',
            cursor: onClick ? 'pointer' : 'default',
            transform: 'translateX(-50%)',
            transition: 'all 0.2s ease',
            boxShadow: hovered ? '0 4px 12px rgba(68, 170, 255, 0.4)' : '0 2px 8px rgba(0,0,0,0.3)',
            border: '1px solid rgba(255,255,255,0.2)',
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => onClick?.(annotation)}
        >
          <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>{annotation.title}</div>
          <div style={{ fontSize: '10px', opacity: 0.9, marginBottom: '4px' }}>
            {annotation.feature}
          </div>
          {hovered && (
            <div style={{ fontSize: '10px', opacity: 0.8, borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '4px', marginTop: '4px' }}>
              {annotation.description}
            </div>
          )}
        </div>
      </Html>
    </group>
  );
}

// ============================================
// Individual Condition Overlay Component
// ============================================

interface ConditionOverlayProps {
  config: ConditionOverlayConfig;
  materialQuality: MaterialQuality;
  showAnnotations: boolean;
  compareMode: boolean;
  onAnnotationClick?: (annotation: ConditionAnnotation) => void;
  onHover?: (isHovered: boolean) => void;
}

function ConditionOverlay({
  config,
  materialQuality,
  showAnnotations,
  compareMode,
  onAnnotationClick,
  onHover,
}: ConditionOverlayProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const healthyMeshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  const conditionConfig = CONDITION_CONFIGS[config.type];

  // Create material based on condition and severity
  const material = useMemo(() => {
    const color = conditionConfig.colors[config.severity];
    const opacity = conditionConfig.opacity[config.severity];
    const emissive = conditionConfig.emissive?.[config.severity];
    const emissiveIntensity = conditionConfig.emissiveIntensity?.[config.severity] || 0;

    const materialConfig: CinematicMaterialConfig = {
      color,
      opacity,
      transparent: true,
      roughness: 0.6,
      metalness: 0.0,
      emissive,
      emissiveIntensity: hovered ? emissiveIntensity * 2 : emissiveIntensity,
      clearcoat: 0.2,
      clearcoatRoughness: 0.4,
    };

    if (materialQuality === 'cinematic') {
      return createCinematicMaterial(materialConfig);
    }
    return createStandardMaterial(materialConfig);
  }, [config.severity, config.type, materialQuality, hovered, conditionConfig]);

  // Create healthy comparison material
  const healthyMaterial = useMemo(() => {
    if (!compareMode) return null;

    const materialConfig: CinematicMaterialConfig = {
      color: '#88cc88',
      opacity: 0.6,
      transparent: true,
      roughness: 0.5,
      metalness: 0.0,
      emissive: '#66aa66',
      emissiveIntensity: 0.05,
    };

    return createStandardMaterial(materialConfig);
  }, [compareMode]);

  // Get base geometry for the affected structure
  const baseGeometry = useMemo(() => {
    // For demo purposes, create a representative geometry
    // In production, this would reference actual model geometry
    const geo = new THREE.SphereGeometry(0.1, 32, 32);
    return geo;
  }, []);

  // Apply geometry modifications based on condition type
  const modifiedGeometry = useMemo(() => {
    const modifier = conditionConfig.geometryModifier;

    if (!modifier) return baseGeometry;

    switch (modifier) {
      case 'plaque':
        return generatePlaqueGeometry(0.1, config.severity);
      case 'porous':
        return generatePorousBoneGeometry(baseGeometry, config.severity);
      case 'nodular':
        return generateNodularGeometry(baseGeometry, config.severity);
      case 'shrink': {
        const shrinkFactor = 1 - SEVERITY_MULTIPLIERS[config.severity] * 0.3;
        const shrunkGeo = baseGeometry.clone();
        shrunkGeo.scale(shrinkFactor, shrinkFactor, shrinkFactor);
        return shrunkGeo;
      }
      case 'expand': {
        const expandFactor = 1 + SEVERITY_MULTIPLIERS[config.severity] * 0.2;
        const expandedGeo = baseGeometry.clone();
        expandedGeo.scale(expandFactor, expandFactor, expandFactor);
        return expandedGeo;
      }
      case 'roughen': {
        const roughGeo = baseGeometry.clone();
        const positions = roughGeo.attributes.position;
        const roughness = SEVERITY_MULTIPLIERS[config.severity] * 0.02;
        for (let i = 0; i < positions.count; i++) {
          const x = positions.getX(i);
          const y = positions.getY(i);
          const z = positions.getZ(i);
          const noise = (Math.random() - 0.5) * roughness;
          positions.setXYZ(i, x + noise, y + noise, z + noise);
        }
        roughGeo.computeVertexNormals();
        return roughGeo;
      }
      default:
        return baseGeometry;
    }
  }, [baseGeometry, config.severity, conditionConfig.geometryModifier]);

  // Animation for pulsing effect
  useFrame((state) => {
    if (meshRef.current && config.enabled) {
      const pulse = Math.sin(state.clock.elapsedTime * 2) * 0.05 + 1;
      meshRef.current.scale.setScalar(pulse);
    }
  });

  // Get position based on structure ID
  const getStructurePosition = useCallback(
    (structureId: string): [number, number, number] => {
      // Structure position mapping (simplified)
      const positions: Record<string, [number, number, number]> = {
        heart: [-0.05, 0.55, 0.1],
        aorta: [0, 0.6, 0.08],
        liver: [0.1, 0.15, 0.05],
        leftKidney: [-0.18, 0.05, 0.05],
        rightKidney: [0.18, 0.05, 0.05],
        brain: [0, 1.4, 0],
        leftLung: [-0.15, 0.55, 0],
        rightLung: [0.15, 0.55, 0],
        spine: [0, 0.2, -0.1],
      };
      return positions[structureId] || [0, 0, 0];
    },
    []
  );

  const position = getStructurePosition(config.structureId);
  const compareOffset: [number, number, number] = compareMode ? [0.3, 0, 0] : [0, 0, 0];

  // Get annotations for this condition
  const annotations = config.annotations || conditionConfig.annotations;

  const handlePointerOver = useCallback(() => {
    setHovered(true);
    onHover?.(true);
  }, [onHover]);

  const handlePointerOut = useCallback(() => {
    setHovered(false);
    onHover?.(false);
  }, [onHover]);

  if (!config.enabled) return null;

  return (
    <group position={position}>
      {/* Diseased state */}
      <group position={compareOffset}>
        <mesh
          ref={meshRef}
          geometry={modifiedGeometry}
          material={material}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
        />

        {/* Condition label in compare mode */}
        {compareMode && (
          <Html position={[0, 0.15, 0]} center>
            <div
              style={{
                backgroundColor: 'rgba(200, 50, 50, 0.9)',
                color: 'white',
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '10px',
                fontWeight: 'bold',
                whiteSpace: 'nowrap',
              }}
            >
              {conditionConfig.name} ({config.severity})
            </div>
          </Html>
        )}
      </group>

      {/* Healthy comparison state */}
      {compareMode && healthyMaterial && (
        <group position={[-0.3, 0, 0]}>
          <mesh ref={healthyMeshRef} geometry={baseGeometry} material={healthyMaterial} />
          <Html position={[0, 0.15, 0]} center>
            <div
              style={{
                backgroundColor: 'rgba(50, 150, 50, 0.9)',
                color: 'white',
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '10px',
                fontWeight: 'bold',
                whiteSpace: 'nowrap',
              }}
            >
              Healthy
            </div>
          </Html>
        </group>
      )}

      {/* Annotations */}
      {showAnnotations &&
        annotations.map((annotation) => (
          <AnnotationMarker
            key={annotation.id}
            annotation={{
              ...annotation,
              position: [
                annotation.position[0] + compareOffset[0],
                annotation.position[1],
                annotation.position[2],
              ],
            }}
            onClick={onAnnotationClick}
            visible={config.enabled}
          />
        ))}
    </group>
  );
}

// ============================================
// Condition Legend Component
// ============================================

interface ConditionLegendProps {
  conditions: ConditionOverlayConfig[];
  onToggle: (conditionType: ConditionType, enabled: boolean) => void;
}

function ConditionLegend({ conditions, onToggle }: ConditionLegendProps) {
  return (
    <Html position={[-1, 1, 0]} transform={false}>
      <div
        style={{
          backgroundColor: 'rgba(20, 30, 40, 0.95)',
          color: 'white',
          padding: '16px',
          borderRadius: '8px',
          minWidth: '220px',
          maxHeight: '400px',
          overflowY: 'auto',
          boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
          border: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <div
          style={{
            fontWeight: 'bold',
            marginBottom: '12px',
            fontSize: '14px',
            borderBottom: '1px solid rgba(255,255,255,0.2)',
            paddingBottom: '8px',
          }}
        >
          Condition Overlays
        </div>

        {conditions.map((condition) => {
          const config = CONDITION_CONFIGS[condition.type];
          const color = config.colors[condition.severity];

          return (
            <div
              key={`${condition.type}-${condition.structureId}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '8px',
                padding: '6px',
                backgroundColor: condition.enabled
                  ? 'rgba(255,255,255,0.1)'
                  : 'transparent',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
              onClick={() => onToggle(condition.type, !condition.enabled)}
            >
              <div
                style={{
                  width: '16px',
                  height: '16px',
                  borderRadius: '4px',
                  backgroundColor: color,
                  marginRight: '10px',
                  border: condition.enabled
                    ? '2px solid white'
                    : '2px solid rgba(255,255,255,0.3)',
                  opacity: condition.enabled ? 1 : 0.5,
                }}
              />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '12px', fontWeight: '500' }}>{config.name}</div>
                <div style={{ fontSize: '10px', opacity: 0.7, textTransform: 'capitalize' }}>
                  {condition.severity}
                </div>
              </div>
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                }}
              >
                {condition.enabled ? '✓' : '○'}
              </div>
            </div>
          );
        })}
      </div>
    </Html>
  );
}

// ============================================
// Main ConditionOverlaySystem Component
// ============================================

export function ConditionOverlaySystem({
  conditions,
  materialQuality = 'standard',
  showAnnotations = true,
  compareMode = false,
  onAnnotationClick,
  onConditionHover,
}: ConditionOverlaySystemProps) {
  const [hoveredCondition, setHoveredCondition] = useState<ConditionType | null>(null);

  const handleConditionHover = useCallback(
    (conditionType: ConditionType, isHovered: boolean) => {
      const newHovered = isHovered ? conditionType : null;
      setHoveredCondition(newHovered);
      onConditionHover?.(newHovered);
    },
    [onConditionHover]
  );

  return (
    <group name="condition-overlay-system">
      {conditions.map((condition) => (
        <ConditionOverlay
          key={`${condition.type}-${condition.structureId}`}
          config={condition}
          materialQuality={materialQuality}
          showAnnotations={showAnnotations}
          compareMode={compareMode}
          onAnnotationClick={onAnnotationClick}
          onHover={(isHovered) => handleConditionHover(condition.type, isHovered)}
        />
      ))}
    </group>
  );
}

// ============================================
// Hook for Managing Condition Overlays
// ============================================

export interface UseConditionOverlaysOptions {
  initialConditions?: ConditionOverlayConfig[];
}

export interface UseConditionOverlaysReturn {
  conditions: ConditionOverlayConfig[];
  addCondition: (condition: ConditionOverlayConfig) => void;
  removeCondition: (type: ConditionType, structureId: string) => void;
  toggleCondition: (type: ConditionType, structureId: string, enabled?: boolean) => void;
  setSeverity: (type: ConditionType, structureId: string, severity: SeverityLevel) => void;
  clearAll: () => void;
  getConditionInfo: (type: ConditionType) => ConditionVisualConfig | undefined;
}

export function useConditionOverlays(
  options: UseConditionOverlaysOptions = {}
): UseConditionOverlaysReturn {
  const [conditions, setConditions] = useState<ConditionOverlayConfig[]>(
    options.initialConditions || []
  );

  const addCondition = useCallback((condition: ConditionOverlayConfig) => {
    setConditions((prev) => {
      const exists = prev.some(
        (c) => c.type === condition.type && c.structureId === condition.structureId
      );
      if (exists) return prev;
      return [...prev, condition];
    });
  }, []);

  const removeCondition = useCallback((type: ConditionType, structureId: string) => {
    setConditions((prev) =>
      prev.filter((c) => !(c.type === type && c.structureId === structureId))
    );
  }, []);

  const toggleCondition = useCallback(
    (type: ConditionType, structureId: string, enabled?: boolean) => {
      setConditions((prev) =>
        prev.map((c) => {
          if (c.type === type && c.structureId === structureId) {
            return { ...c, enabled: enabled !== undefined ? enabled : !c.enabled };
          }
          return c;
        })
      );
    },
    []
  );

  const setSeverity = useCallback(
    (type: ConditionType, structureId: string, severity: SeverityLevel) => {
      setConditions((prev) =>
        prev.map((c) => {
          if (c.type === type && c.structureId === structureId) {
            return { ...c, severity };
          }
          return c;
        })
      );
    },
    []
  );

  const clearAll = useCallback(() => {
    setConditions([]);
  }, []);

  const getConditionInfo = useCallback((type: ConditionType) => {
    return CONDITION_CONFIGS[type];
  }, []);

  return {
    conditions,
    addCondition,
    removeCondition,
    toggleCondition,
    setSeverity,
    clearAll,
    getConditionInfo,
  };
}

// ============================================
// Condition Overlay Panel Component (UI)
// ============================================

export interface ConditionOverlayPanelProps {
  conditions: ConditionOverlayConfig[];
  onToggle: (type: ConditionType, structureId: string, enabled: boolean) => void;
  onSeverityChange: (type: ConditionType, structureId: string, severity: SeverityLevel) => void;
  onRemove: (type: ConditionType, structureId: string) => void;
  compareMode: boolean;
  onCompareModeChange: (enabled: boolean) => void;
  showAnnotations: boolean;
  onShowAnnotationsChange: (enabled: boolean) => void;
}

export function ConditionOverlayPanel({
  conditions,
  onToggle,
  onSeverityChange,
  onRemove,
  compareMode,
  onCompareModeChange,
  showAnnotations,
  onShowAnnotationsChange,
}: ConditionOverlayPanelProps) {
  return (
    <div
      style={{
        backgroundColor: 'rgba(20, 30, 40, 0.95)',
        color: 'white',
        padding: '16px',
        borderRadius: '8px',
        minWidth: '280px',
        maxHeight: '500px',
        overflowY: 'auto',
      }}
    >
      <h3 style={{ margin: '0 0 16px 0', fontSize: '16px' }}>Condition Overlays</h3>

      {/* Global Controls */}
      <div
        style={{
          marginBottom: '16px',
          paddingBottom: '16px',
          borderBottom: '1px solid rgba(255,255,255,0.2)',
        }}
      >
        <label
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '8px',
            cursor: 'pointer',
          }}
        >
          <input
            type="checkbox"
            checked={compareMode}
            onChange={(e) => onCompareModeChange(e.target.checked)}
            style={{ marginRight: '8px' }}
          />
          <span style={{ fontSize: '13px' }}>Compare Mode (Healthy vs Diseased)</span>
        </label>

        <label
          style={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
          }}
        >
          <input
            type="checkbox"
            checked={showAnnotations}
            onChange={(e) => onShowAnnotationsChange(e.target.checked)}
            style={{ marginRight: '8px' }}
          />
          <span style={{ fontSize: '13px' }}>Show Educational Annotations</span>
        </label>
      </div>

      {/* Condition List */}
      {conditions.length === 0 ? (
        <p style={{ opacity: 0.6, fontSize: '13px' }}>
          No conditions added. Use the condition browser to add overlays.
        </p>
      ) : (
        conditions.map((condition) => {
          const config = CONDITION_CONFIGS[condition.type];

          return (
            <div
              key={`${condition.type}-${condition.structureId}`}
              style={{
                backgroundColor: condition.enabled
                  ? 'rgba(255,255,255,0.1)'
                  : 'rgba(255,255,255,0.05)',
                padding: '12px',
                borderRadius: '6px',
                marginBottom: '8px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '8px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div
                    style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '3px',
                      backgroundColor: config.colors[condition.severity],
                      marginRight: '8px',
                    }}
                  />
                  <span style={{ fontWeight: '500', fontSize: '13px' }}>{config.name}</span>
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    onClick={() =>
                      onToggle(condition.type, condition.structureId, !condition.enabled)
                    }
                    style={{
                      background: 'none',
                      border: '1px solid rgba(255,255,255,0.3)',
                      color: 'white',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '11px',
                    }}
                  >
                    {condition.enabled ? 'Hide' : 'Show'}
                  </button>
                  <button
                    onClick={() => onRemove(condition.type, condition.structureId)}
                    style={{
                      background: 'rgba(200,50,50,0.3)',
                      border: 'none',
                      color: 'white',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '11px',
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>

              <div style={{ fontSize: '11px', opacity: 0.7, marginBottom: '8px' }}>
                Structure: {condition.structureId}
              </div>

              {/* Severity Selector */}
              <div style={{ display: 'flex', gap: '4px' }}>
                {(['mild', 'moderate', 'severe'] as SeverityLevel[]).map((severity) => (
                  <button
                    key={severity}
                    onClick={() => onSeverityChange(condition.type, condition.structureId, severity)}
                    style={{
                      flex: 1,
                      padding: '4px 8px',
                      borderRadius: '4px',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '11px',
                      textTransform: 'capitalize',
                      backgroundColor:
                        condition.severity === severity
                          ? config.colors[severity]
                          : 'rgba(255,255,255,0.1)',
                      color:
                        condition.severity === severity && severity === 'severe'
                          ? 'white'
                          : condition.severity === severity
                          ? '#333'
                          : 'white',
                    }}
                  >
                    {severity}
                  </button>
                ))}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

// ============================================
// Export Condition Configs for External Use
// ============================================

export { CONDITION_CONFIGS };
export type { ConditionVisualConfig };

export default ConditionOverlaySystem;
