import { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stats } from '@react-three/drei';
import * as THREE from 'three';

interface AnatomyViewerProps {
  onBack: () => void;
}

// Performance monitor component (dev mode only)
function PerformanceMonitor() {
  // Check for development mode via Vite
  const isDev = typeof window !== 'undefined' && window.location.hostname === 'localhost';
  if (!isDev) return null;
  return <Stats />;
}

// Lighting setup optimized for anatomical visualization
function AnatomicalLighting() {
  return (
    <>
      {/* Ambient light for base visibility */}
      <ambientLight intensity={0.4} color="#ffffff" />

      {/* Key light - main directional light from upper front-right */}
      <directionalLight
        position={[5, 8, 5]}
        intensity={0.8}
        color="#ffffff"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />

      {/* Fill light - softer light from front-left */}
      <directionalLight
        position={[-5, 5, 5]}
        intensity={0.4}
        color="#f0f0ff"
      />

      {/* Rim light - from behind for edge definition */}
      <directionalLight
        position={[0, 3, -5]}
        intensity={0.3}
        color="#ffe0d0"
      />
    </>
  );
}

// Placeholder anatomy model (will be replaced with actual models in US-022)
function PlaceholderModel() {
  const meshRef = useRef<THREE.Mesh>(null);

  // Gentle rotation for visual interest
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group>
      {/* Body placeholder - capsule shape */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <capsuleGeometry args={[0.4, 1.2, 16, 32]} />
        <meshStandardMaterial
          color="#e8d4c4"
          roughness={0.7}
          metalness={0.1}
        />
      </mesh>

      {/* Head placeholder */}
      <mesh position={[0, 1.2, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial
          color="#e8d4c4"
          roughness={0.7}
          metalness={0.1}
        />
      </mesh>

      {/* Ground plane for reference */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.1, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial
          color="#2a2a3a"
          roughness={0.9}
          metalness={0}
        />
      </mesh>

      {/* Axis helper for orientation (subtle) */}
      <axesHelper args={[0.5]} />
    </group>
  );
}

// Camera controller with preset views
interface CameraControllerProps {
  controlsRef: React.RefObject<any>;
}

function CameraController({ controlsRef }: CameraControllerProps) {
  const { camera } = useThree();

  useEffect(() => {
    // Set initial camera position
    camera.position.set(0, 1, 4);
    camera.lookAt(0, 0.5, 0);
  }, [camera]);

  return (
    <OrbitControls
      ref={controlsRef}
      enablePan={true}
      enableZoom={true}
      enableRotate={true}
      minDistance={1}
      maxDistance={20}
      minPolarAngle={0}
      maxPolarAngle={Math.PI}
      target={[0, 0.5, 0]}
      dampingFactor={0.05}
      enableDamping={true}
    />
  );
}

// View presets for anatomical positions
const VIEW_PRESETS = {
  anterior: { position: [0, 1, 4], target: [0, 0.5, 0] },
  posterior: { position: [0, 1, -4], target: [0, 0.5, 0] },
  leftLateral: { position: [-4, 1, 0], target: [0, 0.5, 0] },
  rightLateral: { position: [4, 1, 0], target: [0, 0.5, 0] },
  superior: { position: [0, 5, 0.01], target: [0, 0.5, 0] },
  inferior: { position: [0, -3, 0.01], target: [0, 0.5, 0] },
} as const;

type ViewPreset = keyof typeof VIEW_PRESETS;

export function AnatomyViewer({ onBack }: AnatomyViewerProps) {
  const controlsRef = useRef<any>(null);
  const [currentView, setCurrentView] = useState<ViewPreset | null>(null);

  // Animate to a preset view
  const animateToView = (preset: ViewPreset) => {
    if (!controlsRef.current) return;

    const { position, target } = VIEW_PRESETS[preset];
    const controls = controlsRef.current;

    // Get current camera position
    const camera = controls.object;
    const startPos = camera.position.clone();
    const endPos = new THREE.Vector3(...position);
    const startTarget = controls.target.clone();
    const endTarget = new THREE.Vector3(...target);

    // Animate over 500ms
    const duration = 500;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);

      camera.position.lerpVectors(startPos, endPos, eased);
      controls.target.lerpVectors(startTarget, endTarget, eased);
      controls.update();

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    setCurrentView(preset);
    animate();
  };

  // Reset to default view
  const resetView = () => {
    animateToView('anterior');
  };

  return (
    <div className="anatomy-viewer">
      <div className="anatomy-header">
        <button onClick={onBack} className="back-button">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back
        </button>
        <h1>3D Anatomy Viewer</h1>
        <div className="view-info">
          {currentView && <span className="current-view">{currentView}</span>}
        </div>
      </div>

      <div className="anatomy-controls">
        <div className="view-presets">
          <span className="control-label">Views:</span>
          <button
            onClick={() => animateToView('anterior')}
            className={currentView === 'anterior' ? 'active' : ''}
          >
            Anterior
          </button>
          <button
            onClick={() => animateToView('posterior')}
            className={currentView === 'posterior' ? 'active' : ''}
          >
            Posterior
          </button>
          <button
            onClick={() => animateToView('leftLateral')}
            className={currentView === 'leftLateral' ? 'active' : ''}
          >
            Left
          </button>
          <button
            onClick={() => animateToView('rightLateral')}
            className={currentView === 'rightLateral' ? 'active' : ''}
          >
            Right
          </button>
          <button
            onClick={() => animateToView('superior')}
            className={currentView === 'superior' ? 'active' : ''}
          >
            Superior
          </button>
          <button
            onClick={() => animateToView('inferior')}
            className={currentView === 'inferior' ? 'active' : ''}
          >
            Inferior
          </button>
          <button onClick={resetView} className="reset-button">
            Reset
          </button>
        </div>
      </div>

      <div className="canvas-container">
        <Canvas
          shadows
          gl={{
            antialias: true,
            alpha: false,
            powerPreference: 'high-performance',
          }}
          dpr={[1, 2]}
        >
          <color attach="background" args={['#1a1a2e']} />

          <PerspectiveCamera
            makeDefault
            fov={45}
            near={0.1}
            far={1000}
            position={[0, 1, 4]}
          />

          <CameraController controlsRef={controlsRef} />
          <AnatomicalLighting />
          <PlaceholderModel />
          <PerformanceMonitor />
        </Canvas>
      </div>

      <div className="anatomy-footer">
        <div className="controls-help">
          <span>
            <strong>Rotate:</strong> Left-drag
          </span>
          <span>
            <strong>Zoom:</strong> Scroll
          </span>
          <span>
            <strong>Pan:</strong> Right-drag
          </span>
        </div>
      </div>
    </div>
  );
}
