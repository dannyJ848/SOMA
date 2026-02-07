import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, ContactShadows, Grid, Html } from '@react-three/drei';
import * as THREE from 'three';
import { type DashboardData } from './App';

interface CompleteAnatomyLaunchpadProps {
  onBack: () => void;
  dashboardData: DashboardData | null;
}

// Body region definitions with anatomical accuracy
export type BodySystem = 'integumentary' | 'skeletal' | 'muscular' | 'nervous' | 'cardiovascular' | 'respiratory' | 'digestive' | 'urinary' | 'endocrine' | 'reproductive' | 'lymphatic';

export interface BodyRegion {
  id: string;
  name: string;
  latinName: string;
  position: [number, number, number];
  scale: [number, number, number];
  rotation?: [number, number, number];
  geometry: 'capsule' | 'sphere' | 'box' | 'cylinder' | 'torso' | 'head' | 'joint';
  systems: BodySystem[];
  description: string;
  commonConditions: string[];
  keyStructures: string[];
  layer: 'skin' | 'fat' | 'muscle' | 'bone' | 'organ';
}

// Enhanced body regions with better anatomical accuracy
export const BODY_REGIONS: BodyRegion[] = [
  // HEAD & NECK
  {
    id: 'head',
    name: 'Head',
    latinName: 'Caput',
    position: [0, 1.55, 0],
    scale: [0.22, 0.26, 0.24],
    geometry: 'head',
    systems: ['nervous', 'integumentary', 'skeletal'],
    description: 'Contains the brain, sensory organs, and cranial structures',
    commonConditions: ['Migraine', 'Tension headache', 'Sinusitis', 'Vertigo', 'Tinnitus'],
    keyStructures: ['Brain', 'Eyes', 'Ears', 'Nose', 'Mouth', 'Skull'],
    layer: 'bone',
  },
  {
    id: 'neck',
    name: 'Neck',
    latinName: 'Cervix',
    position: [0, 1.28, 0],
    scale: [0.12, 0.18, 0.12],
    geometry: 'capsule',
    systems: ['muscular', 'skeletal', 'nervous', 'lymphatic'],
    description: 'Connects head to torso; contains cervical spine and major vessels',
    commonConditions: ['Cervical strain', 'Thyroid disorders', 'Lymphadenopathy'],
    keyStructures: ['Cervical spine', 'Trachea', 'Thyroid', 'Carotid arteries', 'Jugular veins'],
    layer: 'muscle',
  },

  // TORSO
  {
    id: 'chest',
    name: 'Chest',
    latinName: 'Thorax',
    position: [0, 0.85, 0.02],
    scale: [0.38, 0.42, 0.28],
    geometry: 'torso',
    systems: ['cardiovascular', 'respiratory', 'skeletal', 'muscular'],
    description: 'Houses heart, lungs, and major vessels protected by the rib cage',
    commonConditions: ['Hypertension', 'Asthma', 'COPD', 'Pneumonia', 'Angina', 'GERD'],
    keyStructures: ['Heart', 'Lungs', 'Ribs', 'Sternum', 'Thoracic spine'],
    layer: 'organ',
  },
  {
    id: 'abdomen',
    name: 'Abdomen',
    latinName: 'Abdomen',
    position: [0, 0.25, 0.03],
    scale: [0.35, 0.45, 0.3],
    geometry: 'torso',
    systems: ['digestive', 'urinary', 'endocrine'],
    description: 'Contains digestive organs, kidneys, and endocrine glands',
    commonConditions: ['Diabetes', 'GERD', 'IBS', 'Kidney disease', 'Liver disease', 'Gallstones'],
    keyStructures: ['Stomach', 'Liver', 'Kidneys', 'Pancreas', 'Intestines', 'Gallbladder'],
    layer: 'organ',
  },
  {
    id: 'pelvis',
    name: 'Pelvis',
    latinName: 'Pelvis',
    position: [0, -0.32, 0.02],
    scale: [0.32, 0.22, 0.28],
    geometry: 'torso',
    systems: ['reproductive', 'urinary', 'skeletal', 'digestive'],
    description: 'Bony basin containing reproductive organs, bladder, and rectum',
    commonConditions: ['UTI', 'Prostatitis', 'Endometriosis', 'Hemorrhoids'],
    keyStructures: ['Bladder', 'Reproductive organs', 'Rectum', 'Hip bones', 'Sacrum'],
    layer: 'bone',
  },

  // SHOULDER JOINTS
  {
    id: 'leftShoulder',
    name: 'Left Shoulder',
    latinName: 'Articulatio humeri sinistra',
    position: [-0.42, 1.05, 0],
    scale: [0.14, 0.14, 0.14],
    geometry: 'joint',
    systems: ['skeletal', 'muscular', 'nervous'],
    description: 'Ball-and-socket joint connecting arm to torso',
    commonConditions: ['Rotator cuff tear', 'Frozen shoulder', 'Bursitis', 'Arthritis'],
    keyStructures: ['Humerus head', 'Scapula', 'Clavicle', 'Rotator cuff muscles'],
    layer: 'bone',
  },
  {
    id: 'rightShoulder',
    name: 'Right Shoulder',
    latinName: 'Articulatio humeri dextra',
    position: [0.42, 1.05, 0],
    scale: [0.14, 0.14, 0.14],
    geometry: 'joint',
    systems: ['skeletal', 'muscular', 'nervous'],
    description: 'Ball-and-socket joint connecting arm to torso',
    commonConditions: ['Rotator cuff tear', 'Frozen shoulder', 'Bursitis', 'Arthritis'],
    keyStructures: ['Humerus head', 'Scapula', 'Clavicle', 'Rotator cuff muscles'],
    layer: 'bone',
  },

  // ARMS
  {
    id: 'leftArm',
    name: 'Left Arm',
    latinName: 'Brachium sinistrum',
    position: [-0.48, 0.65, 0],
    scale: [0.11, 0.45, 0.11],
    geometry: 'capsule',
    systems: ['muscular', 'skeletal', 'nervous', 'cardiovascular'],
    description: 'Upper extremity from shoulder to elbow',
    commonConditions: ['Tennis elbow', 'Carpal tunnel', 'Tendonitis', 'DVT'],
    keyStructures: ['Humerus', 'Biceps', 'Triceps', 'Brachial artery', 'Median nerve'],
    layer: 'muscle',
  },
  {
    id: 'rightArm',
    name: 'Right Arm',
    latinName: 'Brachium dextrum',
    position: [0.48, 0.65, 0],
    scale: [0.11, 0.45, 0.11],
    geometry: 'capsule',
    systems: ['muscular', 'skeletal', 'nervous', 'cardiovascular'],
    description: 'Upper extremity from shoulder to elbow',
    commonConditions: ['Tennis elbow', 'Carpal tunnel', 'Tendonitis'],
    keyStructures: ['Humerus', 'Biceps', 'Triceps', 'Brachial artery', 'Median nerve'],
    layer: 'muscle',
  },

  // ELBOW JOINTS
  {
    id: 'leftElbow',
    name: 'Left Elbow',
    latinName: 'Articulatio cubiti sinistra',
    position: [-0.5, 0.35, 0],
    scale: [0.09, 0.09, 0.09],
    geometry: 'joint',
    systems: ['skeletal', 'muscular', 'nervous'],
    description: 'Hinge joint connecting upper arm to forearm',
    commonConditions: ['Tennis elbow', 'Golfer\'s elbow', 'Bursitis', 'Arthritis'],
    keyStructures: ['Humerus', 'Radius', 'Ulna', 'Biceps tendon'],
    layer: 'bone',
  },
  {
    id: 'rightElbow',
    name: 'Right Elbow',
    latinName: 'Articulatio cubiti dextra',
    position: [0.5, 0.35, 0],
    scale: [0.09, 0.09, 0.09],
    geometry: 'joint',
    systems: ['skeletal', 'muscular', 'nervous'],
    description: 'Hinge joint connecting upper arm to forearm',
    commonConditions: ['Tennis elbow', 'Golfer\'s elbow', 'Bursitis', 'Arthritis'],
    keyStructures: ['Humerus', 'Radius', 'Ulna', 'Biceps tendon'],
    layer: 'bone',
  },

  // FOREARMS
  {
    id: 'leftForearm',
    name: 'Left Forearm',
    latinName: 'Antebrachium sinistrum',
    position: [-0.5, 0.0, 0],
    scale: [0.1, 0.4, 0.1],
    rotation: [0, 0, 0.05],
    geometry: 'capsule',
    systems: ['muscular', 'skeletal', 'nervous'],
    description: 'From elbow to wrist containing radius and ulna',
    commonConditions: ['Wrist fracture', 'Compartment syndrome', 'Radial nerve palsy'],
    keyStructures: ['Radius', 'Ulna', 'Forearm flexors', 'Radial nerve'],
    layer: 'muscle',
  },
  {
    id: 'rightForearm',
    name: 'Right Forearm',
    latinName: 'Antebrachium dextrum',
    position: [0.5, 0.0, 0],
    scale: [0.1, 0.4, 0.1],
    rotation: [0, 0, -0.05],
    geometry: 'capsule',
    systems: ['muscular', 'skeletal', 'nervous'],
    description: 'From elbow to wrist containing radius and ulna',
    commonConditions: ['Wrist fracture', 'Compartment syndrome', 'Radial nerve palsy'],
    keyStructures: ['Radius', 'Ulna', 'Forearm flexors', 'Radial nerve'],
    layer: 'muscle',
  },

  // WRIST JOINTS
  {
    id: 'leftWrist',
    name: 'Left Wrist',
    latinName: 'Articulatio radiocarpalis sinistra',
    position: [-0.52, -0.22, 0],
    scale: [0.07, 0.07, 0.07],
    geometry: 'joint',
    systems: ['skeletal', 'muscular', 'nervous'],
    description: 'Complex joint connecting forearm to hand',
    commonConditions: ['Carpal tunnel', 'Sprain', 'Arthritis', 'Fracture'],
    keyStructures: ['Radius', 'Ulna', 'Carpal bones', 'Transverse ligament'],
    layer: 'bone',
  },
  {
    id: 'rightWrist',
    name: 'Right Wrist',
    latinName: 'Articulatio radiocarpalis dextra',
    position: [0.52, -0.22, 0],
    scale: [0.07, 0.07, 0.07],
    geometry: 'joint',
    systems: ['skeletal', 'muscular', 'nervous'],
    description: 'Complex joint connecting forearm to hand',
    commonConditions: ['Carpal tunnel', 'Sprain', 'Arthritis', 'Fracture'],
    keyStructures: ['Radius', 'Ulna', 'Carpal bones', 'Transverse ligament'],
    layer: 'bone',
  },

  // HANDS
  {
    id: 'leftHand',
    name: 'Left Hand',
    latinName: 'Manus sinistra',
    position: [-0.52, -0.35, 0],
    scale: [0.12, 0.12, 0.04],
    geometry: 'box',
    systems: ['skeletal', 'muscular', 'nervous'],
    description: 'Complex structure with 27 bones for manipulation',
    commonConditions: ['Carpal tunnel syndrome', 'Trigger finger', 'Arthritis', 'De Quervain\'s'],
    keyStructures: ['Carpal bones', 'Metacarpals', 'Phalanges', 'Thenar muscles'],
    layer: 'muscle',
  },
  {
    id: 'rightHand',
    name: 'Right Hand',
    latinName: 'Manus dextra',
    position: [0.52, -0.35, 0],
    scale: [0.12, 0.12, 0.04],
    geometry: 'box',
    systems: ['skeletal', 'muscular', 'nervous'],
    description: 'Complex structure with 27 bones for manipulation',
    commonConditions: ['Carpal tunnel syndrome', 'Trigger finger', 'Arthritis', 'De Quervain\'s'],
    keyStructures: ['Carpal bones', 'Metacarpals', 'Phalanges', 'Thenar muscles'],
    layer: 'muscle',
  },

  // HIP JOINTS
  {
    id: 'leftHip',
    name: 'Left Hip',
    latinName: 'Articulatio coxae sinistra',
    position: [-0.22, -0.35, 0],
    scale: [0.16, 0.16, 0.16],
    geometry: 'joint',
    systems: ['skeletal', 'muscular', 'nervous'],
    description: 'Ball-and-socket joint connecting leg to pelvis',
    commonConditions: ['Hip osteoarthritis', 'Bursitis', 'Labral tear', 'Hip fracture'],
    keyStructures: ['Femoral head', 'Acetabulum', 'Hip muscles', 'Sciatic nerve'],
    layer: 'bone',
  },
  {
    id: 'rightHip',
    name: 'Right Hip',
    latinName: 'Articulatio coxae dextra',
    position: [0.22, -0.35, 0],
    scale: [0.16, 0.16, 0.16],
    geometry: 'joint',
    systems: ['skeletal', 'muscular', 'nervous'],
    description: 'Ball-and-socket joint connecting leg to pelvis',
    commonConditions: ['Hip osteoarthritis', 'Bursitis', 'Labral tear', 'Hip fracture'],
    keyStructures: ['Femoral head', 'Acetabulum', 'Hip muscles', 'Sciatic nerve'],
    layer: 'bone',
  },

  // THIGHS
  {
    id: 'leftThigh',
    name: 'Left Thigh',
    latinName: 'Femur sinistrum',
    position: [-0.2, -0.75, 0],
    scale: [0.14, 0.5, 0.14],
    geometry: 'capsule',
    systems: ['muscular', 'skeletal', 'cardiovascular'],
    description: 'Upper leg containing the femur and major muscle groups',
    commonConditions: ['Quadriceps strain', 'DVT', 'Compartment syndrome'],
    keyStructures: ['Femur', 'Quadriceps', 'Hamstrings', 'Femoral artery'],
    layer: 'muscle',
  },
  {
    id: 'rightThigh',
    name: 'Right Thigh',
    latinName: 'Femur dextrum',
    position: [0.2, -0.75, 0],
    scale: [0.14, 0.5, 0.14],
    geometry: 'capsule',
    systems: ['muscular', 'skeletal', 'cardiovascular'],
    description: 'Upper leg containing the femur and major muscle groups',
    commonConditions: ['Quadriceps strain', 'DVT', 'Compartment syndrome'],
    keyStructures: ['Femur', 'Quadriceps', 'Hamstrings', 'Femoral artery'],
    layer: 'muscle',
  },

  // KNEE JOINTS
  {
    id: 'leftKnee',
    name: 'Left Knee',
    latinName: 'Articulatio genus sinistra',
    position: [-0.18, -1.08, 0],
    scale: [0.13, 0.13, 0.13],
    geometry: 'joint',
    systems: ['skeletal', 'muscular', 'nervous'],
    description: 'Hinge joint connecting thigh to lower leg',
    commonConditions: ['ACL tear', 'Meniscus tear', 'Osteoarthritis', 'Bursitis'],
    keyStructures: ['Femoral condyles', 'Tibial plateau', 'Patella', 'Menisci', 'Ligaments'],
    layer: 'bone',
  },
  {
    id: 'rightKnee',
    name: 'Right Knee',
    latinName: 'Articulatio genus dextra',
    position: [0.18, -1.08, 0],
    scale: [0.13, 0.13, 0.13],
    geometry: 'joint',
    systems: ['skeletal', 'muscular', 'nervous'],
    description: 'Hinge joint connecting thigh to lower leg',
    commonConditions: ['ACL tear', 'Meniscus tear', 'Osteoarthritis', 'Bursitis'],
    keyStructures: ['Femoral condyles', 'Tibial plateau', 'Patella', 'Menisci', 'Ligaments'],
    layer: 'bone',
  },

  // LOWER LEGS
  {
    id: 'leftLeg',
    name: 'Left Lower Leg',
    latinName: 'Crus sinistrum',
    position: [-0.18, -1.45, 0],
    scale: [0.11, 0.4, 0.11],
    geometry: 'capsule',
    systems: ['muscular', 'skeletal', 'nervous'],
    description: 'From knee to ankle containing tibia and fibula',
    commonConditions: ['Shin splints', 'Stress fracture', 'Achilles tendonitis'],
    keyStructures: ['Tibia', 'Fibula', 'Gastrocnemius', 'Soleus', 'Tibial nerve'],
    layer: 'muscle',
  },
  {
    id: 'rightLeg',
    name: 'Right Lower Leg',
    latinName: 'Crus dextrum',
    position: [0.18, -1.45, 0],
    scale: [0.11, 0.4, 0.11],
    geometry: 'capsule',
    systems: ['muscular', 'skeletal', 'nervous'],
    description: 'From knee to ankle containing tibia and fibula',
    commonConditions: ['Shin splints', 'Stress fracture', 'Achilles tendonitis'],
    keyStructures: ['Tibia', 'Fibula', 'Gastrocnemius', 'Soleus', 'Tibial nerve'],
    layer: 'muscle',
  },

  // ANKLE JOINTS
  {
    id: 'leftAnkle',
    name: 'Left Ankle',
    latinName: 'Articulatio talocruralis sinistra',
    position: [-0.18, -1.72, 0],
    scale: [0.09, 0.09, 0.09],
    geometry: 'joint',
    systems: ['skeletal', 'muscular', 'nervous'],
    description: 'Hinge joint connecting lower leg to foot',
    commonConditions: ['Sprain', 'Achilles tendonitis', 'Arthritis', 'Fracture'],
    keyStructures: ['Tibia', 'Fibula', 'Talus', 'Calcaneus'],
    layer: 'bone',
  },
  {
    id: 'rightAnkle',
    name: 'Right Ankle',
    latinName: 'Articulatio talocruralis dextra',
    position: [0.18, -1.72, 0],
    scale: [0.09, 0.09, 0.09],
    geometry: 'joint',
    systems: ['skeletal', 'muscular', 'nervous'],
    description: 'Hinge joint connecting lower leg to foot',
    commonConditions: ['Sprain', 'Achilles tendonitis', 'Arthritis', 'Fracture'],
    keyStructures: ['Tibia', 'Fibula', 'Talus', 'Calcaneus'],
    layer: 'bone',
  },

  // FEET
  {
    id: 'leftFoot',
    name: 'Left Foot',
    latinName: 'Pes sinister',
    position: [-0.18, -1.85, 0.08],
    scale: [0.11, 0.08, 0.22],
    geometry: 'box',
    systems: ['skeletal', 'muscular', 'nervous'],
    description: 'Complex structure with 26 bones for weight-bearing and locomotion',
    commonConditions: ['Plantar fasciitis', 'Ankle sprain', 'Achilles rupture', 'Bunions'],
    keyStructures: ['Tarsals', 'Metatarsals', 'Phalanges', 'Plantar fascia'],
    layer: 'muscle',
  },
  {
    id: 'rightFoot',
    name: 'Right Foot',
    latinName: 'Pes dexter',
    position: [0.18, -1.85, 0.08],
    scale: [0.11, 0.08, 0.22],
    geometry: 'box',
    systems: ['skeletal', 'muscular', 'nervous'],
    description: 'Complex structure with 26 bones for weight-bearing and locomotion',
    commonConditions: ['Plantar fasciitis', 'Ankle sprain', 'Achilles rupture', 'Bunions'],
    keyStructures: ['Tarsals', 'Metatarsals', 'Phalanges', 'Plantar fascia'],
    layer: 'muscle',
  },
];

// System colors for highlighting - Complete Anatomy style
export const SYSTEM_COLORS: Record<BodySystem, string> = {
  integumentary: '#f4d7c4',  // Skin tone
  skeletal: '#e8e4dc',       // Bone white
  muscular: '#c44d4d',       // Muscle red
  nervous: '#4a90d9',        // Nerve blue
  cardiovascular: '#c41e3a', // Heart red
  respiratory: '#87ceeb',    // Lung blue
  digestive: '#daa520',      // Stomach gold
  urinary: '#9370db',        // Kidney purple
  endocrine: '#ff69b4',      // Hormone pink
  reproductive: '#20b2aa',   // Teal
  lymphatic: '#90ee90',      // Light green
};

// Layer colors for dissection mode
export const LAYER_COLORS: Record<string, string> = {
  skin: '#f4d7c4',
  fat: '#fff8dc',
  muscle: '#c44d4d',
  bone: '#e8e4dc',
  organ: '#ff9999',
};

// System visibility type
type SystemVisibility = Record<BodySystem, boolean>;

// ============================================================================
// ENHANCED 3D GEOMETRY COMPONENTS
// ============================================================================

// Anatomically accurate torso shape
function TorsoGeometry({ scale }: { scale: [number, number, number] }) {
  // Create a custom torso-like shape using a rounded box approach
  const shape = useMemo(() => {
    const s = new THREE.Shape();
    // Create chest profile
    s.moveTo(0, 0.5);
    s.bezierCurveTo(0.3, 0.5, 0.4, 0.3, 0.4, 0);
    s.bezierCurveTo(0.4, -0.3, 0.3, -0.5, 0, -0.5);
    s.bezierCurveTo(-0.3, -0.5, -0.4, -0.3, -0.4, 0);
    s.bezierCurveTo(-0.4, 0.3, -0.3, 0.5, 0, 0.5);
    return s;
  }, []);

  const config = useMemo(() => ({
    depth: 0.6,
    bevelEnabled: true,
    bevelSegments: 4,
    bevelSize: 0.05,
    bevelThickness: 0.05,
  }), []);

  return (
    <group scale={scale}>
      <mesh>
        <extrudeGeometry args={[shape, config]} />
      </mesh>
    </group>
  );
}

// Anatomically accurate head shape
function HeadGeometry({ scale }: { scale: [number, number, number] }) {
  return (
    <group scale={scale}>
      {/* Main skull */}
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
      </mesh>
      {/* Jaw/chin */}
      <mesh position={[0, -0.3, 0.1]}>
        <sphereGeometry args={[0.35, 24, 24]} />
      </mesh>
      {/* Neck connection */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.2, 0.25, 0.3, 16]} />
      </mesh>
    </group>
  );
}

// Joint articulation with visible joint structure
function JointGeometry({ scale, isSelected, isHovered }: { scale: [number, number, number]; isSelected: boolean; isHovered: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current && isHovered) {
      // Subtle pulse when hovered
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 4) * 0.05;
      groupRef.current.scale.setScalar(pulse);
    } else if (groupRef.current) {
      groupRef.current.scale.setScalar(1);
    }
  });

  return (
    <group ref={groupRef} scale={scale}>
      {/* Main joint sphere */}
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
      </mesh>
      {/* Joint highlight ring */}
      {(isSelected || isHovered) && (
        <mesh>
          <torusGeometry args={[0.55, 0.02, 8, 32]} />
          <meshBasicMaterial color={isSelected ? '#22ff44' : '#4488ff'} transparent opacity={0.8} />
        </mesh>
      )}
    </group>
  );
}

// ============================================================================
// BODY PART MESH COMPONENT
// ============================================================================

interface BodyPartMeshProps {
  region: BodyRegion;
  isHovered: boolean;
  isSelected: boolean;
  visibleSystems: SystemVisibility;
  layerDepth: number;
  onPointerOver: () => void;
  onPointerOut: () => void;
  onClick: () => void;
}

function BodyPartMesh({ 
  region, 
  isHovered, 
  isSelected, 
  visibleSystems, 
  layerDepth,
  onPointerOver, 
  onPointerOut, 
  onClick 
}: BodyPartMeshProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [isVisible, setIsVisible] = useState(true);

  // Determine visibility based on layer depth
  useEffect(() => {
    const layerOrder = ['skin', 'fat', 'muscle', 'bone', 'organ'];
    const currentLayerIndex = layerOrder.indexOf(region.layer);
    const maxVisibleLayer = Math.floor((layerDepth / 100) * layerOrder.length);
    setIsVisible(currentLayerIndex <= maxVisibleLayer);
  }, [layerDepth, region.layer]);

  // Determine primary system for coloring
  const primarySystem = region.systems[0];
  const baseColor = SYSTEM_COLORS[primarySystem];

  // Calculate opacity based on system visibility
  const systemVisible = region.systems.some(sys => visibleSystems[sys]);
  const opacity = systemVisible && isVisible ? 0.9 : isVisible ? 0.2 : 0;

  // Highlight effects
  let emissiveColor = '#000000';
  let emissiveIntensity = 0;

  if (isSelected) {
    emissiveColor = '#22ff44';
    emissiveIntensity = 0.4;
  } else if (isHovered) {
    emissiveColor = '#4488ff';
    emissiveIntensity = 0.3;
  }

  // Render appropriate geometry
  const renderGeometry = () => {
    switch (region.geometry) {
      case 'head':
        return <HeadGeometry scale={[1, 1, 1]} />;
      case 'torso':
        return <torsoShape scale={region.scale} />;
      case 'joint':
        return <JointGeometry scale={[1, 1, 1]} isSelected={isSelected} isHovered={isHovered} />;
      case 'sphere':
        return <sphereGeometry args={[0.5, 32, 32]} />;
      case 'box':
        return <boxGeometry args={[1, 1, 1]} />;
      case 'cylinder':
        return <cylinderGeometry args={[0.5, 0.5, 1, 16]} />;
      case 'capsule':
      default:
        return <capsuleGeometry args={[0.5, 1, 8, 16]} />;
    }
  };

  // For torso, use a custom rounded shape
  const torsoShape = useMemo(() => {
    if (region.geometry !== 'torso') return null;
    return (
      <mesh>
        <capsuleGeometry args={[0.5, 1.2, 8, 16]} />
      </mesh>
    );
  }, [region.geometry]);

  if (opacity <= 0) return null;

  return (
    <group
      position={region.position}
      rotation={region.rotation || [0, 0, 0]}
    >
      {region.geometry === 'head' && (
        <HeadGeometry scale={region.scale} />
      )}
      {region.geometry === 'joint' && (
        <JointGeometry 
          scale={region.scale} 
          isSelected={isSelected} 
          isHovered={isHovered} 
        />
      )}
      {(region.geometry === 'capsule' || region.geometry === 'torso') && (
        <mesh
          ref={meshRef}
          onPointerOver={onPointerOver}
          onPointerOut={onPointerOut}
          onClick={onClick}
        >
          <capsuleGeometry args={[0.5, 1, 8, 16]} />
          <meshStandardMaterial
            color={baseColor}
            roughness={0.5}
            metalness={0.1}
            emissive={emissiveColor}
            emissiveIntensity={emissiveIntensity}
            transparent={opacity < 0.9}
            opacity={opacity}
          />
        </mesh>
      )}
      {region.geometry === 'box' && (
        <mesh
          ref={meshRef}
          scale={region.scale}
          onPointerOver={onPointerOver}
          onPointerOut={onPointerOut}
          onClick={onClick}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color={baseColor}
            roughness={0.5}
            metalness={0.1}
            emissive={emissiveColor}
            emissiveIntensity={emissiveIntensity}
            transparent={opacity < 0.9}
            opacity={opacity}
          />
        </mesh>
      )}
      {region.geometry === 'sphere' && (
        <mesh
          ref={meshRef}
          scale={region.scale}
          onPointerOver={onPointerOver}
          onPointerOut={onPointerOut}
          onClick={onClick}
        >
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial
            color={baseColor}
            roughness={0.5}
            metalness={0.1}
            emissive={emissiveColor}
            emissiveIntensity={emissiveIntensity}
            transparent={opacity < 0.9}
            opacity={opacity}
          />
        </mesh>
      )}
    </group>
  );
}

// ============================================================================
// ENHANCED ANATOMY MODEL COMPONENT
// ============================================================================

interface AnatomyModelProps {
  hoveredRegion: string | null;
  selectedRegion: string | null;
  visibleSystems: SystemVisibility;
  layerDepth: number;
  showPins: boolean;
  showGrid: boolean;
  onHover: (regionId: string | null) => void;
  onSelect: (regionId: string) => void;
}

function AnatomyModel({ 
  hoveredRegion, 
  selectedRegion, 
  visibleSystems, 
  layerDepth,
  showPins,
  showGrid,
  onHover, 
  onSelect 
}: AnatomyModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useThree();

  // Gentle idle rotation
  useFrame((state) => {
    if (groupRef.current && !selectedRegion) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
  });

  // Configure shadows
  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  return (
    <group ref={groupRef}>
      {/* Enhanced Lighting Setup */}
      <ambientLight intensity={0.4} color="#ffffff" />
      
      {/* Main directional light (sun-like) */}
      <directionalLight 
        position={[5, 10, 7]} 
        intensity={1.2} 
        castShadow 
        shadow-mapSize={[2048, 2048]}
        shadow-camera-near={0.1}
        shadow-camera-far={20}
        shadow-camera-left={-5}
        shadow-camera-right={5}
        shadow-camera-top={5}
        shadow-camera-bottom={-5}
        shadow-bias={-0.001}
      />
      
      {/* Fill light from opposite side */}
      <directionalLight 
        position={[-5, 5, -5]} 
        intensity={0.4} 
        color="#e0e8ff"
      />
      
      {/* Rim light for definition */}
      <spotLight
        position={[0, 5, -5]}
        intensity={0.6}
        angle={Math.PI / 4}
        penumbra={0.5}
        color="#ffffff"
      />

      {/* Grid Floor */}
      {showGrid && (
        <Grid
          position={[0, -2.5, 0]}
          args={[10, 10]}
          cellSize={0.5}
          cellThickness={0.5}
          cellColor="#4a90d9"
          sectionSize={2}
          sectionThickness={1}
          sectionColor="#2a6099"
          fadeDistance={15}
          fadeStrength={1}
          infiniteGrid
        />
      )}

      {/* Body parts */}
      {BODY_REGIONS.map((region) => (
        <BodyPartMesh
          key={region.id}
          region={region}
          isHovered={hoveredRegion === region.id}
          isSelected={selectedRegion === region.id}
          visibleSystems={visibleSystems}
          layerDepth={layerDepth}
          onPointerOver={() => onHover(region.id)}
          onPointerOut={() => onHover(null)}
          onClick={() => onSelect(region.id)}
        />
      ))}

      {/* Contact shadows */}
      <ContactShadows
        position={[0, -2, 0]}
        opacity={0.4}
        scale={10}
        blur={2.5}
        far={4}
        resolution={1024}
      />
    </group>
  );
}

// ============================================================================
// PIN LABEL COMPONENT
// ============================================================================

interface PinLabelProps {
  region: BodyRegion;
  isVisible: boolean;
  onClick: () => void;
}

function PinLabel({ region, isVisible, onClick }: PinLabelProps) {
  if (!isVisible) return null;

  return (
    <Html
      position={[
        region.position[0] + region.scale[0] * 0.6,
        region.position[1],
        region.position[2]
      ]}
      center
      distanceFactor={10}
      style={{
        pointerEvents: 'none',
        userSelect: 'none',
      }}
    >
      <div
        style={{
          background: 'rgba(0,0,0,0.8)',
          color: '#fff',
          padding: '4px 10px',
          borderRadius: '4px',
          fontSize: '12px',
          fontWeight: 500,
          whiteSpace: 'nowrap',
          border: '1px solid rgba(255,255,255,0.3)',
          pointerEvents: 'auto',
          cursor: 'pointer',
        }}
        onClick={onClick}
      >
        {region.name}
      </div>
    </Html>
  );
}

// ============================================================================
// SYSTEM TOGGLE COMPONENT
// ============================================================================

const DISPLAY_NAMES: Record<BodySystem, string> = {
  integumentary: 'Skin',
  skeletal: 'Skeleton',
  muscular: 'Muscles',
  nervous: 'Nervous',
  cardiovascular: 'Heart & Vessels',
  respiratory: 'Lungs',
  digestive: 'Digestive',
  urinary: 'Urinary',
  endocrine: 'Endocrine',
  reproductive: 'Reproductive',
  lymphatic: 'Lymphatic',
};

interface SystemToggleProps {
  system: BodySystem;
  color: string;
  isActive: boolean;
  onToggle: () => void;
}

function SystemToggle({ system, color, isActive, onToggle }: SystemToggleProps) {
  return (
    <button
      className={`system-toggle ${isActive ? 'active' : ''}`}
      onClick={onToggle}
      style={{ '--system-color': color } as React.CSSProperties}
    >
      <span className="system-dot" style={{ backgroundColor: color }} />
      <span className="system-name">{DISPLAY_NAMES[system]}</span>
    </button>
  );
}

// ============================================================================
// REGION INFO PANEL COMPONENT
// ============================================================================

interface RegionInfoPanelProps {
  region: BodyRegion;
  onClose: () => void;
  dashboardData: DashboardData | null;
}

function RegionInfoPanel({ region, onClose, dashboardData }: RegionInfoPanelProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'conditions' | 'structures'>('overview');

  const userConditions = useMemo(() => {
    if (!dashboardData?.activeConditions) return [];
    const regionKeywords = region.commonConditions.map(c => c.toLowerCase());
    return dashboardData.activeConditions.filter(c =>
      regionKeywords.some(kw => c.name.toLowerCase().includes(kw.toLowerCase()))
    );
  }, [dashboardData, region]);

  return (
    <div className="region-panel">
      <div className="region-panel-header">
        <div>
          <h2>{region.name}</h2>
          <span className="latin-name">{region.latinName}</span>
        </div>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>

      <div className="region-tabs">
        <button
          className={activeTab === 'overview' ? 'active' : ''}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button
          className={activeTab === 'conditions' ? 'active' : ''}
          onClick={() => setActiveTab('conditions')}
        >
          Conditions
        </button>
        <button
          className={activeTab === 'structures' ? 'active' : ''}
          onClick={() => setActiveTab('structures')}
        >
          Structures
        </button>
      </div>

      <div className="region-panel-content">
        {activeTab === 'overview' && (
          <div className="overview-tab">
            <p className="region-description">{region.description}</p>

            <div className="systems-list">
              <h4>Body Systems</h4>
              <div className="system-tags">
                {region.systems.map(sys => (
                  <span
                    key={sys}
                    className="system-tag"
                    style={{ backgroundColor: SYSTEM_COLORS[sys] }}
                  >
                    {sys}
                  </span>
                ))}
              </div>
            </div>

            {userConditions.length > 0 && (
              <div className="user-conditions">
                <h4>Your Conditions</h4>
                <ul>
                  {userConditions.map(c => (
                    <li key={c.id} className={`condition-${c.status}`}>
                      {c.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="quick-actions">
              <button className="action-btn primary">Learn About This Region</button>
              <button className="action-btn">View Related Labs</button>
            </div>
          </div>
        )}

        {activeTab === 'conditions' && (
          <div className="conditions-tab">
            <h4>Common Conditions</h4>
            <ul className="conditions-list">
              {region.commonConditions.map((condition, i) => (
                <li key={i} className="condition-item">
                  <span className="condition-number">{i + 1}</span>
                  <span className="condition-name">{condition}</span>
                  <button className="learn-link">Learn →</button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'structures' && (
          <div className="structures-tab">
            <h4>Key Anatomical Structures</h4>
            <ul className="structures-list">
              {region.keyStructures.map((structure, i) => (
                <li key={i} className="structure-item">
                  <span className="structure-icon">🔬</span>
                  {structure}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================================================
// LAYER PANEL COMPONENT
// ============================================================================

interface LayerPanelProps {
  layerDepth: number;
  onLayerChange: (depth: number) => void;
}

function LayerPanel({ layerDepth, onLayerChange }: LayerPanelProps) {
  const layers = ['Skin', 'Fat', 'Muscle', 'Bone', 'Organs'];
  const currentLayer = Math.floor((layerDepth / 100) * layers.length);

  return (
    <div className="layer-panel">
      <h4>Layer Dissection</h4>
      <div className="layer-slider-container">
        <input
          type="range"
          min="0"
          max="100"
          value={layerDepth}
          onChange={(e) => onLayerChange(Number(e.target.value))}
          className="layer-slider"
        />
        <div className="layer-labels">
          {layers.map((layer, i) => (
            <span 
              key={layer} 
              className={`layer-label ${i === currentLayer ? 'active' : ''}`}
            >
              {layer}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export function CompleteAnatomyLaunchpad({ onBack, dashboardData }: CompleteAnatomyLaunchpadProps) {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<BodyRegion | null>(null);
  const [showUI, setShowUI] = useState(true);
  const [showPins, setShowPins] = useState(false);
  const [showGrid, setShowGrid] = useState(true);
  const [layerDepth, setLayerDepth] = useState(100);

  const [visibleSystems, setVisibleSystems] = useState<SystemVisibility>({
    integumentary: true,
    skeletal: true,
    muscular: true,
    nervous: true,
    cardiovascular: true,
    respiratory: true,
    digestive: true,
    urinary: true,
    endocrine: true,
    reproductive: true,
    lymphatic: true,
  });

  const toggleSystem = useCallback((system: BodySystem) => {
    setVisibleSystems(prev => ({ ...prev, [system]: !prev[system] }));
  }, []);

  const handleRegionSelect = useCallback((regionId: string) => {
    const region = BODY_REGIONS.find(r => r.id === regionId);
    if (region) {
      setSelectedRegion(region);
    }
  }, []);

  const hoveredRegionData = useMemo(() => {
    if (!hoveredRegion) return null;
    return BODY_REGIONS.find(r => r.id === hoveredRegion);
  }, [hoveredRegion]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Number keys 1-9 for systems
      const systemKeys: BodySystem[] = [
        'integumentary', 'skeletal', 'muscular', 'nervous', 
        'cardiovascular', 'respiratory', 'digestive', 'urinary', 'endocrine'
      ];
      const num = parseInt(e.key);
      if (num >= 1 && num <= 9) {
        toggleSystem(systemKeys[num - 1]);
      }
      // Space to reset
      if (e.key === ' ') {
        setSelectedRegion(null);
        setLayerDepth(100);
        setShowPins(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleSystem]);

  return (
    <div className="complete-anatomy-launchpad">
      {/* Header */}
      <header className={`anatomy-header ${!showUI ? 'hidden' : ''}`}>
        <button className="back-btn" onClick={onBack}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="header-title">
          <h1>Anatomy Explorer</h1>
          <p>Click any body region to explore</p>
        </div>
        <button className="ui-toggle" onClick={() => setShowUI(!showUI)}>
          {showUI ? 'Hide UI' : 'Show UI'}
        </button>
      </header>

      {/* System Toggles */}
      <div className={`system-toggles ${!showUI ? 'hidden' : ''}`}>
        {(Object.keys(SYSTEM_COLORS) as BodySystem[]).map(system => (
          <SystemToggle
            key={system}
            system={system}
            color={SYSTEM_COLORS[system]}
            isActive={visibleSystems[system]}
            onToggle={() => toggleSystem(system)}
          />
        ))}
      </div>

      {/* Layer Panel */}
      <div className={`layer-panel-container ${!showUI ? 'hidden' : ''}`}>
        <LayerPanel layerDepth={layerDepth} onLayerChange={setLayerDepth} />
      </div>

      {/* View Controls */}
      <div className={`view-controls ${!showUI ? 'hidden' : ''}`}>
        <button 
          className={`view-btn ${showPins ? 'active' : ''}`}
          onClick={() => setShowPins(!showPins)}
          title="Toggle Labels"
        >
          📍 Labels
        </button>
        <button 
          className={`view-btn ${showGrid ? 'active' : ''}`}
          onClick={() => setShowGrid(!showGrid)}
          title="Toggle Grid"
        >
          ⊞ Grid
        </button>
      </div>

      {/* Hover Tooltip */}
      {hoveredRegionData && !selectedRegion && (
        <div className="hover-tooltip">
          <span className="tooltip-name">{hoveredRegionData.name}</span>
          <span className="tooltip-latin">{hoveredRegionData.latinName}</span>
        </div>
      )}

      {/* 3D Canvas */}
      <div className="anatomy-canvas-container">
        <Canvas
          shadows
          camera={{ position: [0, 0, 4], fov: 45 }}
          gl={{ antialias: true, alpha: true, shadowMap: true }}
        >
          <PerspectiveCamera makeDefault position={[0, 0, 4]} />
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minDistance={2}
            maxDistance={8}
            target={[0, 0, 0]}
          />
          <Environment preset="studio" />
          <AnatomyModel
            hoveredRegion={hoveredRegion}
            selectedRegion={selectedRegion?.id || null}
            visibleSystems={visibleSystems}
            layerDepth={layerDepth}
            showPins={showPins}
            showGrid={showGrid}
            onHover={setHoveredRegion}
            onSelect={handleRegionSelect}
          />
          {/* Pin Labels */}
          {showPins && BODY_REGIONS.map(region => (
            <PinLabel
              key={`pin-${region.id}`}
              region={region}
              isVisible={region.systems.some(sys => visibleSystems[sys])}
              onClick={() => handleRegionSelect(region.id)}
            />
          ))}
        </Canvas>
      </div>

      {/* Region Info Panel */}
      {selectedRegion && (
        <RegionInfoPanel
          region={selectedRegion}
          onClose={() => setSelectedRegion(null)}
          dashboardData={dashboardData}
        />
      )}

      {/* Instructions */}
      {!selectedRegion && showUI && (
        <div className="anatomy-instructions">
          <div className="instruction-item">
            <span className="key">🖱️ Click</span>
            <span>Select region</span>
          </div>
          <div className="instruction-item">
            <span className="key">🖐️ Drag</span>
            <span>Rotate view</span>
          </div>
          <div className="instruction-item">
            <span className="key">🔍 Scroll</span>
            <span>Zoom in/out</span>
          </div>
          <div className="instruction-item">
            <span className="key">Space</span>
            <span>Reset</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default CompleteAnatomyLaunchpad;
