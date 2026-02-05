import { useState, useEffect, useRef, useCallback } from 'react';
import { Canvas, useFrame, useThree, ThreeEvent } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import type { DashboardData } from './utils/anatomyContextBuilder';

interface AnatomyLaunchpadProps {
  onBack: () => void;
  dashboardData: DashboardData | null;
}

// Extended body structure with clinical information
type ViewMode = 'explore' | 'learn' | 'clinical';

type BodyRegion = 
  | 'head' 
  | 'neck' 
  | 'chest' 
  | 'abdomen' 
  | 'pelvis'
  | 'leftArm' 
  | 'rightArm' 
  | 'leftLeg' 
  | 'rightLeg';

interface BodyRegionData {
  id: BodyRegion;
  name: string;
  displayName: string;
  systems: string[];
  conditions: string[];
  relatedLabs: string[];
  relatedModules: { id: string; title: string; specialty: string }[];
  clinicalContext: string[];
  quickFacts: string[];
  explanations: {
    level1: string;
    level2: string;
    level3: string;
  };
}

// Comprehensive body region data
const BODY_REGION_DATA: Record<BodyRegion, BodyRegionData> = {
  head: {
    id: 'head',
    name: 'Head',
    displayName: 'Head & Brain',
    systems: ['Nervous', 'Sensory', 'Integumentary'],
    conditions: ['Migraine', 'Tension Headache', 'Stroke', 'TBI'],
    relatedLabs: ['CBC', 'Metabolic Panel', 'Imaging (CT/MRI)'],
    relatedModules: [
      { id: 'neurology-headache-comprehensive', title: 'Understanding Headaches', specialty: 'Neurology' },
    ],
    clinicalContext: ['Headaches', 'Dizziness', 'Vision changes', 'Cognitive changes'],
    quickFacts: [
      'Brain consumes 20% of body\'s energy',
      'Protected by skull and meninges',
      'Cranial nerves control head functions',
    ],
    explanations: {
      level1: 'The command center of your body that controls everything you think, feel, and do.',
      level2: 'Contains the brain, which processes sensory information, controls movement, and manages thinking and emotions.',
      level3: 'CNS hub with brain, cranial nerves, and sensory organs. Protected by skull, meninges, and CSF.',
    },
  },
  neck: {
    id: 'neck',
    name: 'Neck',
    displayName: 'Neck & Cervical Spine',
    systems: ['Nervous', 'Musculoskeletal', 'Vascular'],
    conditions: ['Cervical Strain', 'Herniated Disc', 'Thyroid Disease'],
    relatedLabs: ['Thyroid Panel', 'Inflammatory Markers'],
    relatedModules: [],
    clinicalContext: ['Neck pain', 'Thyroid enlargement', 'Swallowing difficulty'],
    quickFacts: [
      'Contains 7 cervical vertebrae',
      'Major vessels supply brain',
      'Thyroid gland regulates metabolism',
    ],
    explanations: {
      level1: 'Connects your head to your body and contains important pathways for signals and blood.',
      level2: 'Houses the cervical spine, major blood vessels, thyroid gland, and airway structures.',
      level3: 'Critical junction with cervical spine protecting spinal cord, carotid and vertebral arteries, and airway.',
    },
  },
  chest: {
    id: 'chest',
    name: 'Chest',
    displayName: 'Chest & Thorax',
    systems: ['Cardiovascular', 'Respiratory', 'Skeletal'],
    conditions: ['Hypertension', 'COPD', 'Pneumonia', 'CAD'],
    relatedLabs: ['CBC', 'BMP', 'Troponin', 'BNP', 'ABG'],
    relatedModules: [
      { id: 'cardiology-hypertension-comprehensive', title: 'Understanding Hypertension', specialty: 'Cardiology' },
    ],
    clinicalContext: ['Chest pain', 'Shortness of breath', 'Palpitations', 'Cough'],
    quickFacts: [
      'Heart beats 100,000 times daily',
      'Lungs process 8,000 liters of air daily',
      'Ribcage protects vital organs',
    ],
    explanations: {
      level1: 'Contains your heart and lungs - the organs that pump blood and bring oxygen into your body.',
      level2: 'Houses the heart, lungs, and major blood vessels. Protected by the ribcage.',
      level3: 'Thoracic cavity containing cardiovascular and respiratory systems. Mediastinum separates heart and great vessels from lungs.',
    },
  },
  abdomen: {
    id: 'abdomen',
    name: 'Abdomen',
    displayName: 'Abdomen & Digestive System',
    systems: ['Digestive', 'Urinary', 'Endocrine'],
    conditions: ['GERD', 'IBS', 'Gallstones', 'Pancreatitis'],
    relatedLabs: ['Liver Panel', 'Lipase', 'CBC', 'CMP'],
    relatedModules: [
      { id: 'gastroenterology-gerd-comprehensive', title: 'Understanding Acid Reflux (GERD)', specialty: 'Gastroenterology' },
      { id: 'endocrinology-type2-diabetes', title: 'Understanding Type 2 Diabetes', specialty: 'Endocrinology' },
    ],
    clinicalContext: ['Abdominal pain', 'Heartburn', 'Nausea/vomiting', 'Changes in bowel habits'],
    quickFacts: [
      'Liver performs over 500 functions',
      'Small intestine is 20 feet long',
      'Stomach produces acid for digestion',
    ],
    explanations: {
      level1: 'Contains your digestive organs that process food and absorb nutrients.',
      level2: 'Houses digestive organs (stomach, liver, intestines), kidneys, and endocrine glands (pancreas, adrenal).',
      level3: 'Peritoneal cavity containing GI tract, hepatobiliary system, pancreas, kidneys, and adrenal glands.',
    },
  },
  pelvis: {
    id: 'pelvis',
    name: 'Pelvis',
    displayName: 'Pelvis & Reproductive',
    systems: ['Reproductive', 'Urinary', 'Skeletal'],
    conditions: ['UTI', 'Prostatitis', 'Ovarian Cysts'],
    relatedLabs: ['Urinalysis', 'STI Panel', 'PSA'],
    relatedModules: [],
    clinicalContext: ['Pelvic pain', 'Urinary symptoms', 'Menstrual changes'],
    quickFacts: [
      'Pelvic floor supports pelvic organs',
      'Contains bladder and reproductive organs',
      'Strong bony ring structure',
    ],
    explanations: {
      level1: 'Contains reproductive organs and bladder, supported by a bony ring.',
      level2: 'Houses urinary bladder, reproductive organs, and rectum. Supported by pelvic floor muscles.',
      level3: 'Pelvic cavity containing urogenital and rectal structures. Pelvic floor provides support and sphincter function.',
    },
  },
  leftArm: {
    id: 'leftArm',
    name: 'Left Arm',
    displayName: 'Left Upper Extremity',
    systems: ['Musculoskeletal', 'Nervous', 'Vascular'],
    conditions: ['Fracture', 'Carpal Tunnel', 'DVT'],
    relatedLabs: ['D-dimer', 'Inflammatory Markers'],
    relatedModules: [],
    clinicalContext: ['Pain', 'Weakness', 'Numbness/tingling', 'Swelling'],
    quickFacts: [
      'Brachial plexus innervates arm',
      'Radial, ulnar, median nerves',
      'Upper extremity DVT is uncommon',
    ],
    explanations: {
      level1: 'Used for manipulation and bringing things to your body.',
      level2: 'Contains bones (humerus, radius, ulna), muscles, nerves, and vessels for manipulation.',
      level3: 'Upper limb with complex articulation at shoulder, elbow, wrist, and hand. Innervated by brachial plexus.',
    },
  },
  rightArm: {
    id: 'rightArm',
    name: 'Right Arm',
    displayName: 'Right Upper Extremity',
    systems: ['Musculoskeletal', 'Nervous', 'Vascular'],
    conditions: ['Fracture', 'Carpal Tunnel', 'DVT'],
    relatedLabs: ['D-dimer', 'Inflammatory Markers'],
    relatedModules: [],
    clinicalContext: ['Pain', 'Weakness', 'Numbness/tingling', 'Swelling'],
    quickFacts: [
      'Brachial plexus innervates arm',
      'Radial, ulnar, median nerves',
      'Often dominant limb for most people',
    ],
    explanations: {
      level1: 'Used for manipulation and bringing things to your body.',
      level2: 'Contains bones (humerus, radius, ulna), muscles, nerves, and vessels for manipulation.',
      level3: 'Upper limb with complex articulation at shoulder, elbow, wrist, and hand. Innervated by brachial plexus.',
    },
  },
  leftLeg: {
    id: 'leftLeg',
    name: 'Left Leg',
    displayName: 'Left Lower Extremity',
    systems: ['Musculoskeletal', 'Nervous', 'Vascular'],
    conditions: ['DVT', 'Arthritis', 'Peripheral Neuropathy'],
    relatedLabs: ['D-dimer', 'CBC', 'CMP'],
    relatedModules: [
      { id: 'endocrinology-type2-diabetes', title: 'Understanding Type 2 Diabetes', specialty: 'Endocrinology' },
    ],
    clinicalContext: ['Pain', 'Swelling', 'Numbness', 'Difficulty walking'],
    quickFacts: [
      'Longest bones in body (femur)',
      'Lumbosacral plexus innervation',
      'Common site for DVT',
    ],
    explanations: {
      level1: 'Supports your body and allows walking, running, and standing.',
      level2: 'Contains bones (femur, tibia, fibula), muscles, nerves, and vessels for locomotion and support.',
      level3: 'Lower limb with weight-bearing joints. Innervated by lumbosacral plexus. Common site for venous thrombosis.',
    },
  },
  rightLeg: {
    id: 'rightLeg',
    name: 'Right Leg',
    displayName: 'Right Lower Extremity',
    systems: ['Musculoskeletal', 'Nervous', 'Vascular'],
    conditions: ['DVT', 'Arthritis', 'Peripheral Neuropathy'],
    relatedLabs: ['D-dimer', 'CBC', 'CMP'],
    relatedModules: [
      { id: 'endocrinology-type2-diabetes', title: 'Understanding Type 2 Diabetes', specialty: 'Endocrinology' },
    ],
    clinicalContext: ['Pain', 'Swelling', 'Numbness', 'Difficulty walking'],
    quickFacts: [
      'Longest bones in body (femur)',
      'Lumbosacral plexus innervation',
      'Common site for DVT',
    ],
    explanations: {
      level1: 'Supports your body and allows walking, running, and standing.',
      level2: 'Contains bones (femur, tibia, fibula), muscles, nerves, and vessels for locomotion and support.',
      level3: 'Lower limb with weight-bearing joints. Innervated by lumbosacral plexus. Common site for venous thrombosis.',
    },
  },
};

// Body structure for 3D model
interface BodyStructure {
  id: BodyRegion;
  position: [number, number, number];
  geometry: 'sphere' | 'cylinder' | 'capsule';
  args: number[];
  rotation?: [number, number, number];
}

const BODY_STRUCTURES: BodyStructure[] = [
  { id: 'head', position: [0, 1.35, 0], geometry: 'sphere', args: [0.25, 32, 32] },
  { id: 'neck', position: [0, 1.0, 0], geometry: 'cylinder', args: [0.1, 0.12, 0.2, 16] },
  { id: 'chest', position: [0, 0.55, 0], geometry: 'capsule', args: [0.3, 0.5, 16, 32] },
  { id: 'abdomen', position: [0, -0.1, 0], geometry: 'capsule', args: [0.28, 0.4, 16, 32] },
  { id: 'pelvis', position: [0, -0.6, 0], geometry: 'capsule', args: [0.25, 0.2, 16, 32] },
  { id: 'leftArm', position: [-0.5, 0.4, 0], geometry: 'cylinder', args: [0.08, 0.08, 0.8, 16], rotation: [0, 0, Math.PI / 6] },
  { id: 'rightArm', position: [0.5, 0.4, 0], geometry: 'cylinder', args: [0.08, 0.08, 0.8, 16], rotation: [0, 0, -Math.PI / 6] },
  { id: 'leftLeg', position: [-0.18, -1.0, 0], geometry: 'cylinder', args: [0.1, 0.1, 0.9, 16] },
  { id: 'rightLeg', position: [0.18, -1.0, 0], geometry: 'cylinder', args: [0.1, 0.1, 0.9, 16] },
];

// View presets
const VIEW_PRESETS = {
  anterior: { position: [0, 0, 4], target: [0, 0, 0] },
  posterior: { position: [0, 0, -4], target: [0, 0, 0] },
  left: { position: [-4, 0, 0], target: [0, 0, 0] },
  right: { position: [4, 0, 0], target: [0, 0, 0] },
};

// 3D Body Part Component
function BodyPart({
  structure,
  isHovered,
  isSelected,
  onPointerOver,
  onPointerOut,
  onClick,
}: {
  structure: BodyStructure;
  isHovered: boolean;
  isSelected: boolean;
  onPointerOver: (e: ThreeEvent<PointerEvent>) => void;
  onPointerOut: (e: ThreeEvent<PointerEvent>) => void;
  onClick: (e: ThreeEvent<MouseEvent>) => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const baseColor = '#e8d4c4';
  const hoverColor = '#64b5f6';
  const selectedColor = '#4caf50';
  
  const color = isSelected ? selectedColor : isHovered ? hoverColor : baseColor;
  const emissive = isSelected ? '#1b5e20' : isHovered ? '#1565c0' : '#000000';
  const emissiveIntensity = isSelected ? 0.4 : isHovered ? 0.3 : 0;
  
  const renderGeometry = () => {
    switch (structure.geometry) {
      case 'sphere':
        return <sphereGeometry args={structure.args as [number, number, number]} />;
      case 'cylinder':
        return <cylinderGeometry args={structure.args as [number, number, number, number]} />;
      case 'capsule':
        return <capsuleGeometry args={structure.args as [number, number, number, number]} />;
    }
  };
  
  return (
    <mesh
      ref={meshRef}
      position={structure.position}
      rotation={structure.rotation || [0, 0, 0]}
      onPointerOver={onPointerOver}
      onPointerOut={onPointerOut}
      onClick={onClick}
    >
      {renderGeometry()}
      <meshStandardMaterial
        color={color}
        roughness={0.7}
        metalness={0.1}
        emissive={emissive}
        emissiveIntensity={emissiveIntensity}
      />
    </mesh>
  );
}

// 3D Model Component
function InteractiveBodyModel({
  hoveredRegion,
  selectedRegion,
  onHover,
  onSelect,
}: {
  hoveredRegion: BodyRegion | null;
  selectedRegion: BodyRegion | null;
  onHover: (region: BodyRegion | null) => void;
  onSelect: (region: BodyRegion) => void;
}) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current && !selectedRegion) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.08;
    }
  });
  
  const handlePointerOver = useCallback((regionId: BodyRegion) => (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    onHover(regionId);
    document.body.style.cursor = 'pointer';
  }, [onHover]);
  
  const handlePointerOut = useCallback(() => (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    onHover(null);
    document.body.style.cursor = 'auto';
  }, [onHover]);
  
  const handleClick = useCallback((regionId: BodyRegion) => (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    onSelect(regionId);
  }, [onSelect]);
  
  return (
    <group ref={groupRef}>
      {BODY_STRUCTURES.map((structure) => (
        <BodyPart
          key={structure.id}
          structure={structure}
          isHovered={hoveredRegion === structure.id}
          isSelected={selectedRegion === structure.id}
          onPointerOver={handlePointerOver(structure.id)}
          onPointerOut={handlePointerOut()}
          onClick={handleClick(structure.id)}
        />
      ))}
      
      {/* Ground plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#2a2a3a" roughness={0.9} metalness={0} />
      </mesh>
    </group>
  );
}

// Camera Controller
function CameraController({ controlsRef }: { controlsRef: React.RefObject<any> }) {
  const { camera } = useThree();
  
  useEffect(() => {
    camera.position.set(0, 0, 4);
    camera.lookAt(0, 0, 0);
  }, [camera]);
  
  return (
    <OrbitControls
      ref={controlsRef}
      enablePan={true}
      enableZoom={true}
      enableRotate={true}
      minDistance={1.5}
      maxDistance={20}
      minPolarAngle={0}
      maxPolarAngle={Math.PI}
      target={[0, 0, 0]}
      dampingFactor={0.05}
      enableDamping={true}
    />
  );
}

// Info Panel Component
function RegionInfoPanel({
  region,
  onClose,
  onOpenModule,
  viewMode,
  complexityLevel,
  onComplexityChange,
}: {
  region: BodyRegionData;
  onClose: () => void;
  onOpenModule: (moduleId: string) => void;
  viewMode: ViewMode;
  complexityLevel: number;
  onComplexityChange: (level: number) => void;
}) {
  const [activeTab, setActiveTab] = useState<'overview' | 'conditions' | 'labs' | 'education'>('overview');
  
  const getExplanation = () => {
    if (complexityLevel <= 2) return region.explanations.level1;
    if (complexityLevel <= 4) return region.explanations.level2;
    return region.explanations.level3;
  };
  
  return (
    <div className="region-info-panel">
      <div className="region-info-header">
        <h2>{region.displayName}</h2>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>
      
      {/* Complexity selector */}
      <div className="complexity-selector">
        <span>Detail Level:</span>
        <div className="complexity-buttons">
          {[1, 2, 3, 4, 5, 6].map((level) => (
            <button
              key={level}
              className={complexityLevel === level ? 'active' : ''}
              onClick={() => onComplexityChange(level)}
            >
              {level}
            </button>
          ))}
        </div>
      </div>
      
      {/* Tabs */}
      <div className="region-tabs">
        <button className={activeTab === 'overview' ? 'active' : ''} onClick={() => setActiveTab('overview')}>
          Overview
        </button>
        <button className={activeTab === 'conditions' ? 'active' : ''} onClick={() => setActiveTab('conditions')}>
          Conditions
        </button>
        <button className={activeTab === 'labs' ? 'active' : ''} onClick={() => setActiveTab('labs')}>
          Labs
        </button>
        <button className={activeTab === 'education' ? 'active' : ''} onClick={() => setActiveTab('education')}>
          Learn
        </button>
      </div>
      
      {/* Tab Content */}
      <div className="region-content">
        {activeTab === 'overview' && (
          <div className="tab-content-overview">
            <p className="region-description">{getExplanation()}</p>
            
            <div className="quick-facts">
              <h4>Quick Facts</h4>
              <ul>
                {region.quickFacts.map((fact, i) => (
                  <li key={i}>{fact}</li>
                ))}
              </ul>
            </div>
            
            <div className="body-systems">
              <h4>Body Systems</h4>
              <div className="system-tags">
                {region.systems.map((system) => (
                  <span key={system} className="system-tag">{system}</span>
                ))}
              </div>
            </div>
            
            {viewMode === 'clinical' && (
              <div className="clinical-context">
                <h4>Common Symptoms</h4>
                <ul>
                  {region.clinicalContext.map((symptom, i) => (
                    <li key={i}>{symptom}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
        
        {activeTab === 'conditions' && (
          <div className="tab-content-conditions">
            <h4>Common Conditions</h4>
            <div className="conditions-list">
              {region.conditions.map((condition) => (
                <div key={condition} className="condition-card">
                  <span className="condition-name">{condition}</span>
                  <button className="learn-more-btn">Learn More</button>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {activeTab === 'labs' && (
          <div className="tab-content-labs">
            <h4>Related Lab Tests</h4>
            <ul className="labs-list">
              {region.relatedLabs.map((lab) => (
                <li key={lab}>{lab}</li>
              ))}
            </ul>
          </div>
        )}
        
        {activeTab === 'education' && (
          <div className="tab-content-education">
            <h4>Educational Modules</h4>
            {region.relatedModules.length > 0 ? (
              <div className="modules-list">
                {region.relatedModules.map((module) => (
                  <div key={module.id} className="module-card">
                    <div className="module-info">
                      <span className="module-title">{module.title}</span>
                      <span className="module-specialty">{module.specialty}</span>
                    </div>
                    <button className="open-module-btn" onClick={() => onOpenModule(module.id)}>
                      Open
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="no-modules">No specific modules for this region yet. Check the general education section.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// AI Chat Panel Component
function AIChatPanel({
  region,
  onClose,
}: {
  region: BodyRegionData;
  onClose: () => void;
}) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: `I'm ready to answer questions about the ${region.displayName}. What would you like to know?` },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSend = async () => {
    if (!message.trim()) return;
    
    setMessages((prev) => [...prev, { role: 'user', text: message }]);
    setIsLoading(true);
    
    // Simulate AI response - in real implementation, this would call the AI
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: 'ai', text: `Based on the ${region.displayName}, here's what I can tell you about that... [AI response would be generated here with context about ${region.systems.join(', ')} systems]` },
      ]);
      setIsLoading(false);
    }, 1000);
    
    setMessage('');
  };
  
  return (
    <div className="ai-chat-panel">
      <div className="chat-header">
        <h3>AI Assistant - {region.displayName}</h3>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>
      
      <div className="chat-messages">
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.role}`}>
            <div className="message-bubble">{msg.text}</div>
          </div>
        ))}
        {isLoading && (
          <div className="message ai loading">
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
      </div>
      
      <div className="chat-input">
        <input
          type="text"
          placeholder="Ask about this body region..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend} disabled={isLoading}>Send</button>
      </div>
    </div>
  );
}

// Main Component
export function AnatomyLaunchpad({ onBack, dashboardData }: AnatomyLaunchpadProps) {
  const controlsRef = useRef<any>(null);
  const [hoveredRegion, setHoveredRegion] = useState<BodyRegion | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<BodyRegion | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('explore');
  const [complexityLevel, setComplexityLevel] = useState(3);
  const [showChat, setShowChat] = useState(false);
  const [activePanel, setActivePanel] = useState<'info' | 'systems' | 'education'>('info');
  
  const selectedRegionData = selectedRegion ? BODY_REGION_DATA[selectedRegion] : null;
  
  const animateToView = (preset: keyof typeof VIEW_PRESETS) => {
    if (!controlsRef.current) return;
    const { position, target } = VIEW_PRESETS[preset];
    const camera = controlsRef.current.object;
    const startPos = camera.position.clone();
    const endPos = new THREE.Vector3(...position);
    const startTarget = controlsRef.current.target.clone();
    const endTarget = new THREE.Vector3(...target);
    
    const duration = 500;
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      
      camera.position.lerpVectors(startPos, endPos, eased);
      controlsRef.current.target.lerpVectors(startTarget, endTarget, eased);
      controlsRef.current.update();
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    animate();
  };
  
  const handleOpenModule = (moduleId: string) => {
    // This would integrate with the education system
    console.log('Opening module:', moduleId);
    alert(`Would navigate to education module: ${moduleId}`);
  };
  
  return (
    <div className="anatomy-launchpad">
      {/* Header */}
      <header className="launchpad-header">
        <button className="back-button" onClick={onBack}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back
        </button>
        
        <h1>Anatomy Explorer</h1>
        
        <div className="view-mode-toggle">
          <button className={viewMode === 'explore' ? 'active' : ''} onClick={() => setViewMode('explore')}>
            Explore
          </button>
          <button className={viewMode === 'learn' ? 'active' : ''} onClick={() => setViewMode('learn')}>
            Learn
          </button>
          <button className={viewMode === 'clinical' ? 'active' : ''} onClick={() => setViewMode('clinical')}>
            Clinical
          </button>
        </div>
      </header>
      
      {/* Main Content */}
      <div className="launchpad-content">
        {/* Left Sidebar - Navigation */}
        <aside className="launchpad-sidebar">
          <div className="view-controls">
            <h4>View</h4>
            <button onClick={() => animateToView('anterior')}>Front</button>
            <button onClick={() => animateToView('posterior')}>Back</button>
            <button onClick={() => animateToView('left')}>Left</button>
            <button onClick={() => animateToView('right')}>Right</button>
          </div>
          
          <div className="region-list">
            <h4>Body Regions</h4>
            {Object.values(BODY_REGION_DATA).map((region) => (
              <button
                key={region.id}
                className={selectedRegion === region.id ? 'active' : ''}
                onClick={() => setSelectedRegion(region.id)}
              >
                {region.name}
              </button>
            ))}
          </div>
          
          {viewMode === 'clinical' && dashboardData && (
            <div className="patient-context">
              <h4>Your Health Context</h4>
              {dashboardData.activeConditions?.length > 0 && (
                <div className="context-section">
                  <span className="context-label">Conditions</span>
                  {dashboardData.activeConditions.map((c) => (
                    <span key={c.id} className="context-item">{c.name}</span>
                  ))}
                </div>
              )}
              {dashboardData.recentLabs?.length > 0 && (
                <div className="context-section">
                  <span className="context-label">Recent Labs</span>
                  {dashboardData.recentLabs.slice(0, 3).map((lab) => (
                    <span key={lab.id} className="context-item">
                      {lab.testName}: {lab.value} {lab.unit}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}
        </aside>
        
        {/* Center - 3D Viewer */}
        <div className="launchpad-canvas-container">
          <Canvas
            shadows
            gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
            dpr={[1, 2]}
          >
            <color attach="background" args={['#1a1a2e']} />
            <PerspectiveCamera makeDefault fov={50} near={0.1} far={1000} position={[0, 0, 4]} />
            <CameraController controlsRef={controlsRef} />
            
            {/* Lighting */}
            <ambientLight intensity={0.4} />
            <directionalLight position={[5, 8, 5]} intensity={0.8} castShadow />
            <directionalLight position={[-5, 5, 5]} intensity={0.4} color="#f0f0ff" />
            <directionalLight position={[0, 3, -5]} intensity={0.3} color="#ffe0d0" />
            
            <InteractiveBodyModel
              hoveredRegion={hoveredRegion}
              selectedRegion={selectedRegion}
              onHover={setHoveredRegion}
              onSelect={setSelectedRegion}
            />
          </Canvas>
          
          {/* Hover tooltip */}
          {hoveredRegion && !selectedRegion && (
            <div className="hover-tooltip">
              {BODY_REGION_DATA[hoveredRegion].displayName}
              <span className="tooltip-hint">Click to explore</span>
            </div>
          )}
          
          {/* Controls hint */}
          <div className="controls-hint">
            <span><strong>Rotate:</strong> Drag</span>
            <span><strong>Zoom:</strong> Scroll</span>
            <span><strong>Pan:</strong> Right-click drag</span>
          </div>
        </div>
        
        {/* Right Panel - Info or Chat */}
        <aside className="launchpad-right-panel">
          {showChat && selectedRegionData ? (
            <AIChatPanel region={selectedRegionData} onClose={() => setShowChat(false)} />
          ) : selectedRegionData ? (
            <RegionInfoPanel
              region={selectedRegionData}
              onClose={() => setSelectedRegion(null)}
              onOpenModule={handleOpenModule}
              viewMode={viewMode}
              complexityLevel={complexityLevel}
              onComplexityChange={setComplexityLevel}
            />
          ) : (
            <div className="welcome-panel">
              <h3>Welcome to Anatomy Explorer</h3>
              <p>Click on any body region to explore:</p>
              <ul>
                <li>Anatomical structures and systems</li>
                <li>Common conditions and symptoms</li>
                <li>Related laboratory tests</li>
                <li>Educational modules</li>
              </ul>
              <div className="mode-descriptions">
                <div className="mode-desc">
                  <strong>Explore Mode:</strong> General exploration of anatomy
                </div>
                <div className="mode-desc">
                  <strong>Learn Mode:</strong> Educational focus with detailed explanations
                </div>
                <div className="mode-desc">
                  <strong>Clinical Mode:</strong> Clinical correlations with your health data
                </div>
              </div>
            </div>
          )}
        </aside>
      </div>
      
      {/* Bottom Bar */}
      <footer className="launchpad-footer">
        <div className="selected-region-display">
          {selectedRegionData ? (
            <>
              <span className="region-label">Selected:</span>
              <span className="region-name">{selectedRegionData.displayName}</span>
              {!showChat && (
                <button className="ask-ai-btn" onClick={() => setShowChat(true)}>
                  Ask AI about this region
                </button>
              )}
            </>
          ) : (
            <span className="no-selection">Select a body region to begin exploration</span>
          )}
        </div>
        
        <div className="complexity-indicator">
          <span>Complexity: {complexityLevel}/6</span>
          <div className="complexity-bar">
            <div className="complexity-fill" style={{ width: `${(complexityLevel / 6) * 100}%` }} />
          </div>
        </div>
      </footer>
    </div>
  );
}
