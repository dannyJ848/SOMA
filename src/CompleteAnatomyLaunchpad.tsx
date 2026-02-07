import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import { type DashboardData } from './App';

interface CompleteAnatomyLaunchpadProps {
  onBack: () => void;
  dashboardData: DashboardData | null;
}

// Body region definitions with anatomical accuracy
type BodySystem = 'integumentary' | 'skeletal' | 'muscular' | 'nervous' | 'cardiovascular' | 'respiratory' | 'digestive' | 'urinary' | 'endocrine' | 'reproductive' | 'lymphatic';

interface BodyRegion {
  id: string;
  name: string;
  latinName: string;
  position: [number, number, number];
  scale: [number, number, number];
  rotation?: [number, number, number];
  systems: BodySystem[];
  description: string;
  commonConditions: string[];
  keyStructures: string[];
}

const BODY_REGIONS: BodyRegion[] = [
  {
    id: 'head',
    name: 'Head',
    latinName: 'Caput',
    position: [0, 1.55, 0],
    scale: [0.22, 0.26, 0.24],
    systems: ['nervous', 'integumentary', 'skeletal'],
    description: 'Contains the brain, sensory organs, and cranial structures',
    commonConditions: ['Migraine', 'Tension headache', 'Sinusitis', 'Vertigo', 'Tinnitus'],
    keyStructures: ['Brain', 'Eyes', 'Ears', 'Nose', 'Mouth', 'Skull'],
  },
  {
    id: 'neck',
    name: 'Neck',
    latinName: 'Cervix',
    position: [0, 1.28, 0],
    scale: [0.12, 0.18, 0.12],
    systems: ['muscular', 'skeletal', 'nervous', 'lymphatic'],
    description: 'Connects head to torso; contains cervical spine and major vessels',
    commonConditions: ['Cervical strain', 'Thyroid disorders', 'Lymphadenopathy'],
    keyStructures: ['Cervical spine', 'Trachea', 'Thyroid', 'Carotid arteries', 'Jugular veins'],
  },
  {
    id: 'chest',
    name: 'Chest',
    latinName: 'Thorax',
    position: [0, 0.85, 0.02],
    scale: [0.38, 0.42, 0.28],
    systems: ['cardiovascular', 'respiratory', 'skeletal', 'muscular'],
    description: 'Houses heart, lungs, and major vessels protected by the rib cage',
    commonConditions: ['Hypertension', 'Asthma', 'COPD', 'Pneumonia', 'Angina', 'GERD'],
    keyStructures: ['Heart', 'Lungs', 'Ribs', 'Sternum', 'Thoracic spine'],
  },
  {
    id: 'abdomen',
    name: 'Abdomen',
    latinName: 'Abdomen',
    position: [0, 0.25, 0.03],
    scale: [0.35, 0.45, 0.3],
    systems: ['digestive', 'urinary', 'endocrine'],
    description: 'Contains digestive organs, kidneys, and endocrine glands',
    commonConditions: ['Diabetes', 'GERD', 'IBS', 'Kidney disease', 'Liver disease', 'Gallstones'],
    keyStructures: ['Stomach', 'Liver', 'Kidneys', 'Pancreas', 'Intestines', 'Gallbladder'],
  },
  {
    id: 'pelvis',
    name: 'Pelvis',
    latinName: 'Pelvis',
    position: [0, -0.32, 0.02],
    scale: [0.32, 0.22, 0.28],
    systems: ['reproductive', 'urinary', 'skeletal', 'digestive'],
    description: 'Bony basin containing reproductive organs, bladder, and rectum',
    commonConditions: ['UTI', 'Prostatitis', 'Endometriosis', 'Hemorrhoids'],
    keyStructures: ['Bladder', 'Reproductive organs', 'Rectum', 'Hip bones', 'Sacrum'],
  },
  {
    id: 'leftShoulder',
    name: 'Left Shoulder',
    latinName: 'Articulatio humeri sinistra',
    position: [-0.42, 1.05, 0],
    scale: [0.14, 0.14, 0.14],
    systems: ['skeletal', 'muscular', 'nervous'],
    description: 'Ball-and-socket joint connecting arm to torso',
    commonConditions: ['Rotator cuff tear', 'Frozen shoulder', 'Bursitis', 'Arthritis'],
    keyStructures: ['Humerus head', 'Scapula', 'Clavicle', 'Rotator cuff muscles'],
  },
  {
    id: 'rightShoulder',
    name: 'Right Shoulder',
    latinName: 'Articulatio humeri dextra',
    position: [0.42, 1.05, 0],
    scale: [0.14, 0.14, 0.14],
    systems: ['skeletal', 'muscular', 'nervous'],
    description: 'Ball-and-socket joint connecting arm to torso',
    commonConditions: ['Rotator cuff tear', 'Frozen shoulder', 'Bursitis', 'Arthritis'],
    keyStructures: ['Humerus head', 'Scapula', 'Clavicle', 'Rotator cuff muscles'],
  },
  {
    id: 'leftArm',
    name: 'Left Arm',
    latinName: 'Brachium sinistrum',
    position: [-0.48, 0.65, 0],
    scale: [0.11, 0.45, 0.11],
    systems: ['muscular', 'skeletal', 'nervous', 'cardiovascular'],
    description: 'Upper extremity from shoulder to elbow',
    commonConditions: ['Tennis elbow', 'Carpal tunnel', 'Tendonitis', 'DVT'],
    keyStructures: ['Humerus', 'Biceps', 'Triceps', 'Brachial artery', 'Median nerve'],
  },
  {
    id: 'rightArm',
    name: 'Right Arm',
    latinName: 'Brachium dextrum',
    position: [0.48, 0.65, 0],
    scale: [0.11, 0.45, 0.11],
    systems: ['muscular', 'skeletal', 'nervous', 'cardiovascular'],
    description: 'Upper extremity from shoulder to elbow',
    commonConditions: ['Tennis elbow', 'Carpal tunnel', 'Tendonitis'],
    keyStructures: ['Humerus', 'Biceps', 'Triceps', 'Brachial artery', 'Median nerve'],
  },
  {
    id: 'leftForearm',
    name: 'Left Forearm',
    latinName: 'Antebrachium sinistrum',
    position: [-0.5, 0.15, 0],
    scale: [0.1, 0.4, 0.1],
    systems: ['muscular', 'skeletal', 'nervous'],
    description: 'From elbow to wrist containing radius and ulna',
    commonConditions: ['Wrist fracture', 'Compartment syndrome', 'Radial nerve palsy'],
    keyStructures: ['Radius', 'Ulna', 'Forearm flexors', 'Radial nerve'],
  },
  {
    id: 'rightForearm',
    name: 'Right Forearm',
    latinName: 'Antebrachium dextrum',
    position: [0.5, 0.15, 0],
    scale: [0.1, 0.4, 0.1],
    systems: ['muscular', 'skeletal', 'nervous'],
    description: 'From elbow to wrist containing radius and ulna',
    commonConditions: ['Wrist fracture', 'Compartment syndrome', 'Radial nerve palsy'],
    keyStructures: ['Radius', 'Ulna', 'Forearm flexors', 'Radial nerve'],
  },
  {
    id: 'leftHand',
    name: 'Left Hand',
    latinName: 'Manus sinistra',
    position: [-0.52, -0.15, 0],
    scale: [0.12, 0.15, 0.05],
    systems: ['skeletal', 'muscular', 'nervous'],
    description: 'Complex structure with 27 bones for manipulation',
    commonConditions: ['Carpal tunnel syndrome', 'Trigger finger', 'Arthritis', 'De Quervain\'s'],
    keyStructures: ['Carpal bones', 'Metacarpals', 'Phalanges', 'Thenar muscles'],
  },
  {
    id: 'rightHand',
    name: 'Right Hand',
    latinName: 'Manus dextra',
    position: [0.52, -0.15, 0],
    scale: [0.12, 0.15, 0.05],
    systems: ['skeletal', 'muscular', 'nervous'],
    description: 'Complex structure with 27 bones for manipulation',
    commonConditions: ['Carpal tunnel syndrome', 'Trigger finger', 'Arthritis', 'De Quervain\'s'],
    keyStructures: ['Carpal bones', 'Metacarpals', 'Phalanges', 'Thenar muscles'],
  },
  {
    id: 'leftHip',
    name: 'Left Hip',
    latinName: 'Articulatio coxae sinistra',
    position: [-0.22, -0.35, 0],
    scale: [0.16, 0.16, 0.16],
    systems: ['skeletal', 'muscular', 'nervous'],
    description: 'Ball-and-socket joint connecting leg to pelvis',
    commonConditions: ['Hip osteoarthritis', 'Bursitis', 'Labral tear', 'Hip fracture'],
    keyStructures: ['Femoral head', 'Acetabulum', 'Hip muscles', 'Sciatic nerve'],
  },
  {
    id: 'rightHip',
    name: 'Right Hip',
    latinName: 'Articulatio coxae dextra',
    position: [0.22, -0.35, 0],
    scale: [0.16, 0.16, 0.16],
    systems: ['skeletal', 'muscular', 'nervous'],
    description: 'Ball-and-socket joint connecting leg to pelvis',
    commonConditions: ['Hip osteoarthritis', 'Bursitis', 'Labral tear', 'Hip fracture'],
    keyStructures: ['Femoral head', 'Acetabulum', 'Hip muscles', 'Sciatic nerve'],
  },
  {
    id: 'leftThigh',
    name: 'Left Thigh',
    latinName: 'Femur sinistrum',
    position: [-0.2, -0.75, 0],
    scale: [0.14, 0.5, 0.14],
    systems: ['muscular', 'skeletal', 'cardiovascular'],
    description: 'Upper leg containing the femur and major muscle groups',
    commonConditions: ['Quadriceps strain', 'DVT', 'Compartment syndrome'],
    keyStructures: ['Femur', 'Quadriceps', 'Hamstrings', 'Femoral artery'],
  },
  {
    id: 'rightThigh',
    name: 'Right Thigh',
    latinName: 'Femur dextrum',
    position: [0.2, -0.75, 0],
    scale: [0.14, 0.5, 0.14],
    systems: ['muscular', 'skeletal', 'cardiovascular'],
    description: 'Upper leg containing the femur and major muscle groups',
    commonConditions: ['Quadriceps strain', 'DVT', 'Compartment syndrome'],
    keyStructures: ['Femur', 'Quadriceps', 'Hamstrings', 'Femoral artery'],
  },
  {
    id: 'leftKnee',
    name: 'Left Knee',
    latinName: 'Articulatio genus sinistra',
    position: [-0.18, -1.08, 0],
    scale: [0.13, 0.15, 0.13],
    systems: ['skeletal', 'muscular', 'nervous'],
    description: 'Hinge joint connecting thigh to lower leg',
    commonConditions: ['ACL tear', 'Meniscus tear', 'Osteoarthritis', 'Bursitis'],
    keyStructures: ['Femoral condyles', 'Tibial plateau', 'Patella', 'Menisci', 'Ligaments'],
  },
  {
    id: 'rightKnee',
    name: 'Right Knee',
    latinName: 'Articulatio genus dextra',
    position: [0.18, -1.08, 0],
    scale: [0.13, 0.15, 0.13],
    systems: ['skeletal', 'muscular', 'nervous'],
    description: 'Hinge joint connecting thigh to lower leg',
    commonConditions: ['ACL tear', 'Meniscus tear', 'Osteoarthritis', 'Bursitis'],
    keyStructures: ['Femoral condyles', 'Tibial plateau', 'Patella', 'Menisci', 'Ligaments'],
  },
  {
    id: 'leftLeg',
    name: 'Left Lower Leg',
    latinName: 'Crus sinistrum',
    position: [-0.18, -1.45, 0],
    scale: [0.11, 0.4, 0.11],
    systems: ['muscular', 'skeletal', 'nervous'],
    description: 'From knee to ankle containing tibia and fibula',
    commonConditions: ['Shin splints', 'Stress fracture', 'Achilles tendonitis'],
    keyStructures: ['Tibia', 'Fibula', 'Gastrocnemius', 'Soleus', 'Tibial nerve'],
  },
  {
    id: 'rightLeg',
    name: 'Right Lower Leg',
    latinName: 'Crus dextrum',
    position: [0.18, -1.45, 0],
    scale: [0.11, 0.4, 0.11],
    systems: ['muscular', 'skeletal', 'nervous'],
    description: 'From knee to ankle containing tibia and fibula',
    commonConditions: ['Shin splints', 'Stress fracture', 'Achilles tendonitis'],
    keyStructures: ['Tibia', 'Fibula', 'Gastrocnemius', 'Soleus', 'Tibial nerve'],
  },
  {
    id: 'leftFoot',
    name: 'Left Foot',
    latinName: 'Pes sinister',
    position: [-0.18, -1.78, 0.05],
    scale: [0.11, 0.08, 0.22],
    systems: ['skeletal', 'muscular', 'nervous'],
    description: 'Complex structure with 26 bones for weight-bearing and locomotion',
    commonConditions: ['Plantar fasciitis', 'Ankle sprain', 'Achilles rupture', 'Bunions'],
    keyStructures: ['Tarsals', 'Metatarsals', 'Phalanges', 'Plantar fascia'],
  },
  {
    id: 'rightFoot',
    name: 'Right Foot',
    latinName: 'Pes dexter',
    position: [0.18, -1.78, 0.05],
    scale: [0.11, 0.08, 0.22],
    systems: ['skeletal', 'muscular', 'nervous'],
    description: 'Complex structure with 26 bones for weight-bearing and locomotion',
    commonConditions: ['Plantar fasciitis', 'Ankle sprain', 'Achilles rupture', 'Bunions'],
    keyStructures: ['Tarsals', 'Metatarsals', 'Phalanges', 'Plantar fascia'],
  },
];

// System colors for highlighting
type SystemVisibility = Record<BodySystem, boolean>;

const SYSTEM_COLORS: Record<BodySystem, string> = {
  integumentary: '#f4d7c4',
  skeletal: '#e8e4dc',
  muscular: '#c44d4d',
  nervous: '#4a90d9',
  cardiovascular: '#c41e3a',
  respiratory: '#87ceeb',
  digestive: '#daa520',
  urinary: '#9370db',
  endocrine: '#ff69b4',
  reproductive: '#20b2aa',
  lymphatic: '#90ee90',
};

interface BodyPartMeshProps {
  region: BodyRegion;
  isHovered: boolean;
  isSelected: boolean;
  visibleSystems: SystemVisibility;
  onPointerOver: () => void;
  onPointerOut: () => void;
  onClick: () => void;
}

function BodyPartMesh({ region, isHovered, isSelected, visibleSystems, onPointerOver, onPointerOut, onClick }: BodyPartMeshProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  // Determine primary system for coloring
  const primarySystem = region.systems[0];
  const baseColor = SYSTEM_COLORS[primarySystem];

  // Calculate opacity based on system visibility
  const isVisible = region.systems.some(sys => visibleSystems[sys]);
  const opacity = isVisible ? 0.85 : 0.15;

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

  return (
    <mesh
      ref={meshRef}
      position={region.position}
      scale={region.scale}
      rotation={region.rotation || [0, 0, 0]}
      onPointerOver={onPointerOver}
      onPointerOut={onPointerOut}
      onClick={onClick}
    >
      <capsuleGeometry args={[0.5, 1, 8, 16]} />
      <meshStandardMaterial
        color={baseColor}
        roughness={0.6}
        metalness={0.1}
        emissive={emissiveColor}
        emissiveIntensity={emissiveIntensity}
        transparent={opacity < 1}
        opacity={opacity}
      />
    </mesh>
  );
}

interface AnatomyModelProps {
  hoveredRegion: string | null;
  selectedRegion: string | null;
  visibleSystems: SystemVisibility;
  onHover: (regionId: string | null) => void;
  onSelect: (regionId: string) => void;
}

function AnatomyModel({ hoveredRegion, selectedRegion, visibleSystems, onHover, onSelect }: AnatomyModelProps) {
  const groupRef = useRef<THREE.Group>(null);

  // Gentle idle rotation
  useEffect(() => {
    if (!groupRef.current) return;
    const animate = () => {
      if (groupRef.current && !selectedRegion) {
        groupRef.current.rotation.y = Math.sin(Date.now() * 0.0002) * 0.1;
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, [selectedRegion]);

  return (
    <group ref={groupRef}>
      {/* Ambient lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 7]} intensity={0.8} castShadow />
      <directionalLight position={[-5, 5, -5]} intensity={0.3} color="#f0f0ff" />

      {/* Body parts */}
      {BODY_REGIONS.map((region) => (
        <BodyPartMesh
          key={region.id}
          region={region}
          isHovered={hoveredRegion === region.id}
          isSelected={selectedRegion === region.id}
          visibleSystems={visibleSystems}
          onPointerOver={() => onHover(region.id)}
          onPointerOut={() => onHover(null)}
          onClick={() => onSelect(region.id)}
        />
      ))}

      {/* Contact shadows */}
      <ContactShadows
        position={[0, -2, 0]}
        opacity={0.3}
        scale={10}
        blur={2}
        far={4}
      />
    </group>
  );
}

// System toggle component
function SystemToggle({
  system,
  color,
  isActive,
  onToggle,
}: {
  system: BodySystem;
  color: string;
  isActive: boolean;
  onToggle: () => void;
}) {
  const displayNames: Record<BodySystem, string> = {
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

  return (
    <button
      className={`system-toggle ${isActive ? 'active' : ''}`}
      onClick={onToggle}
      style={{ '--system-color': color } as React.CSSProperties}
    >
      <span className="system-dot" style={{ backgroundColor: color }} />
      <span className="system-name">{displayNames[system]}</span>
    </button>
  );
}

// Region info panel
function RegionInfoPanel({
  region,
  onClose,
  dashboardData,
}: {
  region: BodyRegion;
  onClose: () => void;
  dashboardData: DashboardData | null;
}) {
  const [activeTab, setActiveTab] = useState<'overview' | 'conditions' | 'structures'>('overview');

  // Check if user has relevant conditions
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

// Main component
export function CompleteAnatomyLaunchpad({ onBack, dashboardData }: CompleteAnatomyLaunchpadProps) {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<BodyRegion | null>(null);
  const [showUI, setShowUI] = useState(true);

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
          gl={{ antialias: true, alpha: true }}
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
            onHover={setHoveredRegion}
            onSelect={handleRegionSelect}
          />
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
        </div>
      )}
    </div>
  );
}
