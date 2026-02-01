/**
 * SimplifiedAnatomyViewer - Minimal 3D Test Component
 *
 * PURPOSE: Verify that Three.js/react-three-fiber renders correctly on iOS.
 * This is a diagnostic component that renders the simplest possible 3D scene.
 *
 * TEST APPROACH:
 * 1. Start with a basic colored box (no model loading)
 * 2. Add simple lighting
 * 3. Add OrbitControls
 * 4. If this works, the issue is with model loading or complex features
 *
 * KNOWN iOS ISSUES TO AVOID:
 * - High DPR values can cause memory pressure
 * - Complex shaders may not be supported on older devices
 * - Large textures can cause WebGL context loss
 * - preserveDrawingBuffer can hurt performance
 */

import { useState, useRef, Suspense, useEffect, useCallback } from 'react';
import { Canvas, useFrame, useThree, ThreeEvent } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';
import {
  markComponentMounted,
  addDebugLogEntry,
  updateCanvasStatus,
} from './components/iOS3DDebugOverlay';

// WebGL Context Loss Recovery Configuration
const CONTEXT_LOSS_CONFIG = {
  // Maximum context losses before triggering memory reduction
  maxLossesBeforeReduction: 3,
  // Time window to track context losses (5 minutes)
  trackingWindowMs: 5 * 60 * 1000,
  // Delay before attempting context restore
  restoreDelayMs: 1000,
};

interface SimplifiedAnatomyViewerProps {
  onBack: () => void;
  onStructureSelect?: (
    structureId: string,
    structureName: string,
    screenPosition: { x: number; y: number }
  ) => void;
}

// Get WebGL capabilities for debugging
function getWebGLInfo(): Record<string, string | number | boolean> {
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

  if (!gl) {
    return { error: 'WebGL not supported' };
  }

  const webgl = gl as WebGLRenderingContext;
  const debugInfo = webgl.getExtension('WEBGL_debug_renderer_info');

  return {
    vendor: debugInfo ? webgl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) : 'Unknown',
    renderer: debugInfo ? webgl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : 'Unknown',
    version: webgl.getParameter(webgl.VERSION),
    shadingVersion: webgl.getParameter(webgl.SHADING_LANGUAGE_VERSION),
    maxTextureSize: webgl.getParameter(webgl.MAX_TEXTURE_SIZE),
    maxVertexAttribs: webgl.getParameter(webgl.MAX_VERTEX_ATTRIBS),
    maxVaryingVectors: webgl.getParameter(webgl.MAX_VARYING_VECTORS),
    maxVertexUniformVectors: webgl.getParameter(webgl.MAX_VERTEX_UNIFORM_VECTORS),
    maxFragmentUniformVectors: webgl.getParameter(webgl.MAX_FRAGMENT_UNIFORM_VECTORS),
    maxRenderbufferSize: webgl.getParameter(webgl.MAX_RENDERBUFFER_SIZE),
    aliasedLineWidthRange: webgl.getParameter(webgl.ALIASED_LINE_WIDTH_RANGE)?.toString() || 'Unknown',
    aliasedPointSizeRange: webgl.getParameter(webgl.ALIASED_POINT_SIZE_RANGE)?.toString() || 'Unknown',
  };
}

// Component to report renderer info from inside Canvas and track FPS
function RendererInfo({ onInfo }: { onInfo: (info: Record<string, unknown>) => void }) {
  const { gl } = useThree();
  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(performance.now());
  const fpsRef = useRef(0);

  useEffect(() => {
    const info = gl.info;
    const capabilities = gl.capabilities;

    // Mark scene and orbit controls as mounted
    markComponentMounted('scene', true);
    addDebugLogEntry('success', `Scene initialized (WebGL2: ${capabilities.isWebGL2})`);

    onInfo({
      maxTextures: capabilities.maxTextures,
      maxVertexTextures: capabilities.maxVertexTextures,
      maxTextureSize: capabilities.maxTextureSize,
      maxCubemapSize: capabilities.maxCubemapSize,
      maxAttributes: capabilities.maxAttributes,
      maxVertexUniforms: capabilities.maxVertexUniforms,
      maxVaryings: capabilities.maxVaryings,
      maxFragmentUniforms: capabilities.maxFragmentUniforms,
      precision: capabilities.precision,
      isWebGL2: capabilities.isWebGL2,
      // Memory info
      geometries: info.memory.geometries,
      textures: info.memory.textures,
      // Render info
      calls: info.render.calls,
      triangles: info.render.triangles,
      points: info.render.points,
      lines: info.render.lines,
    });

    return () => {
      markComponentMounted('scene', false);
    };
  }, [gl, onInfo]);

  // Track FPS and update debug overlay
  useFrame(() => {
    frameCountRef.current++;
    const now = performance.now();
    const delta = now - lastTimeRef.current;

    // Update FPS every 500ms
    if (delta >= 500) {
      fpsRef.current = Math.round((frameCountRef.current / delta) * 1000);
      frameCountRef.current = 0;
      lastTimeRef.current = now;

      // Update debug overlay with FPS
      updateCanvasStatus({
        frameCount: frameCountRef.current,
        fps: fpsRef.current,
        rendering: true,
        lastFrameTime: now,
      });
    }
  });

  return null;
}

// Body part configuration - each part maps to a body system with distinct color
interface BodyPartConfig {
  id: string;
  name: string;
  position: [number, number, number];
  color: string;
  hoverColor: string;
  geometry: 'sphere' | 'cylinder' | 'capsule';
  args: number[]; // geometry-specific args
  rotation?: [number, number, number];
  label: string;
  labelOffset: [number, number, number];
}

const BODY_PARTS: BodyPartConfig[] = [
  {
    id: 'head',
    name: 'Head',
    position: [0, 2.6, 0],
    color: '#9b59b6',  // purple - nervous system
    hoverColor: '#c39bd3',
    geometry: 'sphere',
    args: [0.45, 32, 32],
    label: 'Head',
    labelOffset: [0.7, 0.3, 0],
  },
  {
    id: 'neck',
    name: 'Neck',
    position: [0, 2.0, 0],
    color: '#8e44ad',
    hoverColor: '#bb8fce',
    geometry: 'cylinder',
    args: [0.15, 0.18, 0.35, 16],
    label: 'Neck',
    labelOffset: [0.5, 0, 0],
  },
  {
    id: 'torso',
    name: 'Torso',
    position: [0, 1.0, 0],
    color: '#e74c3c', // red - cardiovascular
    hoverColor: '#f1948a',
    geometry: 'cylinder',
    args: [0.5, 0.4, 1.6, 16],
    label: 'Torso',
    labelOffset: [0.8, 0, 0],
  },
  {
    id: 'pelvis',
    name: 'Pelvis',
    position: [0, -0.05, 0],
    color: '#e67e22', // orange - digestive
    hoverColor: '#f0b27a',
    geometry: 'cylinder',
    args: [0.42, 0.45, 0.5, 16],
    label: 'Pelvis',
    labelOffset: [0.75, 0, 0],
  },
  {
    id: 'left-arm',
    name: 'Left Arm',
    position: [-0.75, 1.35, 0],
    color: '#3498db', // blue - musculoskeletal
    hoverColor: '#85c1e9',
    geometry: 'cylinder',
    args: [0.1, 0.08, 1.4, 12],
    rotation: [0, 0, 0.2],
    label: 'L. Arm',
    labelOffset: [-0.6, 0, 0],
  },
  {
    id: 'right-arm',
    name: 'Right Arm',
    position: [0.75, 1.35, 0],
    color: '#3498db',
    hoverColor: '#85c1e9',
    geometry: 'cylinder',
    args: [0.1, 0.08, 1.4, 12],
    rotation: [0, 0, -0.2],
    label: 'R. Arm',
    labelOffset: [0.6, 0, 0],
  },
  {
    id: 'left-leg',
    name: 'Left Leg',
    position: [-0.22, -1.15, 0],
    color: '#2ecc71', // green - immune/lymphatic
    hoverColor: '#82e0aa',
    geometry: 'cylinder',
    args: [0.14, 0.11, 1.7, 12],
    rotation: [0, 0, 0.03],
    label: 'L. Leg',
    labelOffset: [-0.55, 0, 0],
  },
  {
    id: 'right-leg',
    name: 'Right Leg',
    position: [0.22, -1.15, 0],
    color: '#2ecc71',
    hoverColor: '#82e0aa',
    geometry: 'cylinder',
    args: [0.14, 0.11, 1.7, 12],
    rotation: [0, 0, -0.03],
    label: 'R. Leg',
    labelOffset: [0.55, 0, 0],
  },
];

// Reusable interactive body part with hover + click
function BodyPart({
  config,
  onSelect,
}: {
  config: BodyPartConfig;
  onSelect?: (id: string, name: string, screenPos: { x: number; y: number }) => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Subtle pulse when clicked
  useFrame((_, delta) => {
    if (!meshRef.current) return;
    if (clicked) {
      const s = 1 + Math.sin(performance.now() * 0.005) * 0.04;
      meshRef.current.scale.setScalar(s);
    } else if (hovered) {
      meshRef.current.scale.lerp(new THREE.Vector3(1.08, 1.08, 1.08), delta * 8);
    } else {
      meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), delta * 8);
    }
  });

  const handleClick = useCallback(
    (event: ThreeEvent<MouseEvent>) => {
      event.stopPropagation();
      setClicked((prev) => !prev);
      if (onSelect) {
        const screenPos = {
          x: event.clientX ?? event.nativeEvent?.clientX ?? window.innerWidth / 2,
          y: event.clientY ?? event.nativeEvent?.clientY ?? window.innerHeight / 2,
        };
        onSelect(config.id, config.name, screenPos);
      }
    },
    [onSelect, config.id, config.name]
  );

  const handlePointerOver = useCallback(
    (event: ThreeEvent<PointerEvent>) => {
      event.stopPropagation();
      setHovered(true);
      document.body.style.cursor = 'pointer';
    },
    []
  );

  const handlePointerOut = useCallback(() => {
    setHovered(false);
    document.body.style.cursor = 'auto';
  }, []);

  const renderGeometry = () => {
    switch (config.geometry) {
      case 'sphere':
        return <sphereGeometry args={config.args as [number, number, number]} />;
      case 'cylinder':
        return <cylinderGeometry args={config.args as [number, number, number, number]} />;
      default:
        return <sphereGeometry args={config.args as [number, number, number]} />;
    }
  };

  return (
    <group position={config.position} rotation={config.rotation ?? [0, 0, 0]}>
      <mesh
        ref={meshRef}
        onClick={handleClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        {renderGeometry()}
        <meshStandardMaterial
          color={hovered || clicked ? config.hoverColor : config.color}
          roughness={0.4}
          metalness={0.3}
          emissive={clicked ? config.hoverColor : '#000000'}
          emissiveIntensity={clicked ? 0.3 : 0}
        />
      </mesh>

      {/* Label */}
      <Html
        position={config.labelOffset}
        center
        style={{
          pointerEvents: 'none',
          userSelect: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        <div
          style={{
            background: hovered || clicked ? 'rgba(255,255,255,0.95)' : 'rgba(0,0,0,0.7)',
            color: hovered || clicked ? '#1a1a2e' : '#ffffff',
            padding: '3px 8px',
            borderRadius: '4px',
            fontSize: '11px',
            fontWeight: 600,
            fontFamily: 'system-ui, sans-serif',
            border: hovered || clicked
              ? `2px solid ${config.color}`
              : '1px solid rgba(255,255,255,0.2)',
            transition: 'all 0.2s ease',
            boxShadow: clicked ? `0 0 8px ${config.color}` : 'none',
          }}
        >
          {config.label}
        </div>
      </Html>
    </group>
  );
}

// Floating + slow rotation for the whole body group
function BodyModel({
  onStructureSelect,
}: {
  onStructureSelect?: (id: string, name: string, screenPos: { x: number; y: number }) => void;
}) {
  const groupRef = useRef<THREE.Group>(null);

  // Gentle floating animation + slow Y-axis rotation
  useFrame((_, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.15;
    groupRef.current.position.y = Math.sin(performance.now() * 0.001) * 0.1;
  });

  return (
    <group ref={groupRef}>
      {BODY_PARTS.map((part) => (
        <BodyPart key={part.id} config={part} onSelect={onStructureSelect} />
      ))}
    </group>
  );
}

// Simple scene with human body model
function TestScene({
  onStructureSelect,
}: {
  onStructureSelect?: (id: string, name: string, screenPos: { x: number; y: number }) => void;
}) {
  return (
    <>
      <BodyModel onStructureSelect={onStructureSelect} />

      {/* Ground plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.2, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#2c3e50" transparent opacity={0.3} />
      </mesh>
    </>
  );
}

// Simplified lighting setup
function SimpleLighting() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <directionalLight position={[-5, 5, -5]} intensity={0.5} color="#88ccff" />
    </>
  );
}

// Loading fallback
function LoadingFallback() {
  return (
    <mesh>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshBasicMaterial color="#666666" wireframe />
    </mesh>
  );
}

// OrbitControls wrapper that tracks mount status
function TrackedOrbitControls(props: React.ComponentProps<typeof OrbitControls>) {
  useEffect(() => {
    markComponentMounted('orbitControls', true);
    addDebugLogEntry('success', 'OrbitControls mounted');

    return () => {
      markComponentMounted('orbitControls', false);
    };
  }, []);

  return <OrbitControls {...props} />;
}

export function SimplifiedAnatomyViewer({ onBack, onStructureSelect }: SimplifiedAnatomyViewerProps) {
  const [renderStatus, setRenderStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [webglInfo, setWebglInfo] = useState<Record<string, unknown>>({});
  const [rendererInfo, setRendererInfo] = useState<Record<string, unknown>>({});
  const [showDebugPanel, setShowDebugPanel] = useState(false);

  // WebGL context loss recovery state
  const [isContextLost, setIsContextLost] = useState(false);
  const [contextLossMessage, setContextLossMessage] = useState<string | null>(null);
  const contextLossTimestamps = useRef<number[]>([]);
  const [memoryReductionActive, setMemoryReductionActive] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [currentDPR, setCurrentDPR] = useState(Math.min(window.devicePixelRatio, 2));
  const frameCountRef = useRef(0);

  // Track component mount/unmount for debug overlay
  useEffect(() => {
    markComponentMounted('simplifiedViewer', true);
    addDebugLogEntry('info', 'SimplifiedAnatomyViewer mounted');
    updateCanvasStatus({ mounted: true });

    return () => {
      markComponentMounted('simplifiedViewer', false);
      updateCanvasStatus({ mounted: false, created: false, rendering: false });
    };
  }, []);

  // Get WebGL info on mount
  useEffect(() => {
    try {
      const info = getWebGLInfo();
      setWebglInfo(info);
      addDebugLogEntry('info', `WebGL Renderer: ${info.renderer || 'Unknown'}`);
    } catch (e) {
      addDebugLogEntry('error', `Failed to get WebGL info: ${e instanceof Error ? e.message : String(e)}`);
    }
  }, []);

  // WebGL context loss handling for iOS memory pressure
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleContextLost = (event: WebGLContextEvent) => {
      event.preventDefault(); // Allows for context restoration
      console.warn('[SimplifiedAnatomyViewer] WebGL context lost - iOS memory pressure likely');

      setIsContextLost(true);
      setContextLossMessage('3D rendering paused due to memory pressure. Attempting to restore...');

      // Track context loss for frequency analysis
      const now = Date.now();
      contextLossTimestamps.current.push(now);

      // Clean up old timestamps outside tracking window
      contextLossTimestamps.current = contextLossTimestamps.current.filter(
        ts => now - ts < CONTEXT_LOSS_CONFIG.trackingWindowMs
      );

      // Check if frequent context losses indicate need for memory reduction
      if (contextLossTimestamps.current.length >= CONTEXT_LOSS_CONFIG.maxLossesBeforeReduction) {
        console.warn('[SimplifiedAnatomyViewer] Frequent context losses detected - activating memory reduction mode');
        setMemoryReductionActive(true);
        setContextLossMessage(
          '3D rendering paused due to repeated memory pressure. ' +
          'Quality has been reduced to improve stability.'
        );
        // Reduce DPR to minimum for stability
        setCurrentDPR(1.0);
      }
    };

    const handleContextRestored = () => {
      console.log('[SimplifiedAnatomyViewer] WebGL context restored successfully');

      setIsContextLost(false);

      // Show success message briefly, then clear
      setContextLossMessage('3D rendering restored successfully.');
      setTimeout(() => {
        setContextLossMessage(null);
      }, 3000);
    };

    canvas.addEventListener('webglcontextlost', handleContextLost as EventListener);
    canvas.addEventListener('webglcontextrestored', handleContextRestored);

    return () => {
      canvas.removeEventListener('webglcontextlost', handleContextLost as EventListener);
      canvas.removeEventListener('webglcontextrestored', handleContextRestored);
    };
  }, []);

  // Handle Canvas creation
  const handleCreated = useCallback(() => {
    addDebugLogEntry('success', 'Canvas created successfully');
    markComponentMounted('canvas', true);
    updateCanvasStatus({ created: true, rendering: true });
    setRenderStatus('success');
  }, []);

  // Handle WebGL errors
  const handleCanvasError = useCallback((event: React.SyntheticEvent<HTMLDivElement, Event>) => {
    const message = event.nativeEvent instanceof ErrorEvent ? event.nativeEvent.message : 'Unknown canvas error';
    addDebugLogEntry('error', `Canvas error: ${message}`);
    updateCanvasStatus({ error: message, rendering: false });
    setRenderStatus('error');
    setErrorMessage(message);
  }, []);

  return (
    <div className="simplified-anatomy-viewer" style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      width: '100vw',
      background: '#0a0a0a',
      position: 'fixed',
      inset: 0,
    }}>
      {/* DEBUG: Render check - this should ALWAYS be visible */}
      <div
        id="simplified-viewer-render-check"
        style={{
          position: 'fixed',
          top: '60px',
          left: '16px',
          zIndex: 9999,
          padding: '8px 12px',
          background: '#f59e0b',
          borderRadius: '4px',
          color: 'white',
          fontSize: '11px',
          fontWeight: 600,
          pointerEvents: 'none',
        }}
      >
        SimplifiedViewer RENDERED - Status: {renderStatus}
      </div>
      {/* Header */}
      <div className="simplified-viewer-header" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px',
        background: 'rgba(20, 20, 30, 0.95)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        zIndex: 10,
      }}>
        <button
          onClick={onBack}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '8px',
            color: 'white',
            cursor: 'pointer',
            fontSize: '14px',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back
        </button>

        <h1 style={{
          margin: 0,
          fontSize: '18px',
          fontWeight: 600,
          color: 'white',
        }}>
          3D Test Viewer
        </h1>

        <div style={{
          padding: '4px 12px',
          background: renderStatus === 'success' ? 'rgba(34, 197, 94, 0.2)' :
                     renderStatus === 'error' ? 'rgba(239, 68, 68, 0.2)' :
                     'rgba(59, 130, 246, 0.2)',
          color: renderStatus === 'success' ? '#22c55e' :
                 renderStatus === 'error' ? '#ef4444' :
                 '#3b82f6',
          borderRadius: '4px',
          fontSize: '12px',
          fontWeight: 500,
        }}>
          {renderStatus === 'loading' ? 'Initializing...' :
           renderStatus === 'success' ? 'Rendering OK' :
           'Render Error'}
        </div>
      </div>

      {/* Canvas Container - explicit min-height is critical for iOS */}
      <div className="simplified-canvas-container" style={{
        flex: 1,
        position: 'relative',
        overflow: 'hidden',
        minHeight: '300px', // CRITICAL: iOS needs explicit min-height to prevent 0-height collapse
        width: '100%',
      }}>
        {renderStatus === 'error' ? (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            padding: '20px',
            textAlign: 'center',
            color: '#ef4444',
          }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 8v4M12 16h.01"/>
            </svg>
            <h2 style={{ margin: '16px 0 8px', color: 'white' }}>WebGL Error</h2>
            <p style={{ margin: 0, color: 'rgba(255, 255, 255, 0.7)', maxWidth: '400px' }}>
              {errorMessage || 'Failed to initialize WebGL context. This may be a device compatibility issue.'}
            </p>
          </div>
        ) : (
          <Canvas
            style={{
              width: '100%',
              height: '100%',
              touchAction: 'none', // Prevent touch conflicts with OrbitControls
              display: 'block', // Ensure proper display on iOS
              position: 'absolute', // Fill container
              inset: 0,
            }}
            gl={{
              // iOS-safe WebGL settings
              antialias: memoryReductionActive ? false : false, // Keep disabled for mobile
              alpha: false,
              // Use low-power preference in memory reduction mode for better stability
              powerPreference: memoryReductionActive ? 'low-power' : 'default',
              // IMPORTANT: preserveDrawingBuffer should stay false for iOS stability
              // Setting it to true increases memory usage and can trigger context loss
              preserveDrawingBuffer: false,
              depth: true,
              stencil: false,
              // Lower precision in memory reduction mode to reduce GPU memory
              precision: memoryReductionActive ? 'lowp' : 'mediump',
              failIfMajorPerformanceCaveat: false, // Allow software rendering if needed
            }}
            dpr={currentDPR} // Dynamic DPR, reduced in memory mode
            frameloop={isContextLost ? 'never' : 'always'} // Stop rendering when context is lost
            camera={{
              fov: 50,
              near: 0.1,
              far: 100,
              position: [0, 1, 6],
            }}
            onCreated={(state) => {
              handleCreated();
              // Capture canvas reference for context loss event handling
              canvasRef.current = state.gl.domElement;

              // Log detailed info to debug overlay
              addDebugLogEntry('info', `Canvas size: ${state.size.width}x${state.size.height}`);
              addDebugLogEntry('info', `DPR: ${state.gl.getPixelRatio()}, WebGL2: ${state.gl.capabilities.isWebGL2}`);

              // CRITICAL for iOS: Force an initial render
              state.gl.render(state.scene, state.camera);
              addDebugLogEntry('success', 'Initial render complete');
            }}
            onError={handleCanvasError}
          >
            {/* BRIGHT GREEN background for easy visibility when debugging iOS rendering */}
            <color attach="background" args={['#00ff00']} />

            <Suspense fallback={<LoadingFallback />}>
              <SimpleLighting />
              <TestScene onStructureSelect={onStructureSelect} />
              <TrackedOrbitControls
                enablePan={true}
                enableZoom={true}
                enableRotate={true}
                minDistance={2}
                maxDistance={20}
                target={[0, 0.8, 0]}
              />
              <RendererInfo onInfo={setRendererInfo} />
            </Suspense>
          </Canvas>
        )}

        {/* WebGL Context Loss Message Overlay */}
        {contextLossMessage && (
          <div
            className="webgl-context-message"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              padding: '20px 32px',
              background: isContextLost ? 'rgba(239, 68, 68, 0.95)' : 'rgba(34, 197, 94, 0.95)',
              borderRadius: '12px',
              color: 'white',
              textAlign: 'center',
              zIndex: 100,
              maxWidth: '80%',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
            }}
          >
            <div style={{ marginBottom: '8px' }}>
              {isContextLost ? (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ margin: '0 auto', display: 'block' }}>
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                  <line x1="12" y1="9" x2="12" y2="13"/>
                  <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
              ) : (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ margin: '0 auto', display: 'block' }}>
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              )}
            </div>
            <div style={{ fontSize: '16px', fontWeight: 600, marginBottom: '4px' }}>
              {isContextLost ? 'WebGL Context Lost' : 'Restored'}
            </div>
            <div style={{ fontSize: '14px', opacity: 0.9 }}>
              {contextLossMessage}
            </div>
            {isContextLost && (
              <div style={{ marginTop: '12px', fontSize: '12px', opacity: 0.8 }}>
                {memoryReductionActive
                  ? 'Memory-intensive features have been disabled.'
                  : 'The 3D viewer will automatically restore when memory is available.'}
              </div>
            )}
          </div>
        )}

        {/* Memory Reduction Mode Indicator */}
        {memoryReductionActive && !isContextLost && !contextLossMessage && (
          <div
            className="memory-reduction-indicator"
            style={{
              position: 'absolute',
              top: '8px',
              right: '8px',
              padding: '6px 12px',
              background: 'rgba(251, 191, 36, 0.9)',
              borderRadius: '6px',
              color: '#1a1a1a',
              fontSize: '12px',
              fontWeight: 500,
              zIndex: 50,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
              <line x1="12" y1="9" x2="12" y2="13"/>
              <line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
            Low Memory Mode
          </div>
        )}

        {/* Debug toggle button */}
        <button
          onClick={() => setShowDebugPanel(!showDebugPanel)}
          style={{
            position: 'absolute',
            bottom: '16px',
            left: '16px',
            padding: '10px 16px',
            background: showDebugPanel ? '#22c55e' : 'rgba(0, 0, 0, 0.8)',
            border: 'none',
            borderRadius: '8px',
            color: 'white',
            fontSize: '12px',
            fontWeight: 500,
            cursor: 'pointer',
            zIndex: 20,
          }}
        >
          {showDebugPanel ? 'Hide Debug' : 'Show Debug'}
        </button>

        {/* Expanded debug panel */}
        {showDebugPanel && (
          <div style={{
            position: 'absolute',
            bottom: '60px',
            left: '16px',
            right: '16px',
            maxWidth: '400px',
            maxHeight: '50vh',
            overflow: 'auto',
            padding: '12px 16px',
            background: 'rgba(0, 0, 0, 0.9)',
            borderRadius: '8px',
            color: 'white',
            fontSize: '11px',
            fontFamily: 'monospace',
            zIndex: 10,
          }}>
            <h4 style={{ margin: '0 0 8px', color: '#4ecdc4', fontSize: '13px' }}>Device Info</h4>
            <div>Device Pixel Ratio: {window.devicePixelRatio.toFixed(2)}</div>
            <div>Used DPR: {Math.min(window.devicePixelRatio, 2).toFixed(2)}</div>
            <div>Screen: {window.innerWidth}x{window.innerHeight}</div>
            <div>Touch: {('ontouchstart' in window) ? 'Yes' : 'No'}</div>
            <div>User Agent: {navigator.userAgent.slice(0, 50)}...</div>

            <h4 style={{ margin: '12px 0 8px', color: '#4ecdc4', fontSize: '13px' }}>WebGL Info</h4>
            {Object.entries(webglInfo).map(([key, value]) => (
              <div key={key} style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#888' }}>{key}:</span>
                <span style={{ maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {String(value).slice(0, 40)}
                </span>
              </div>
            ))}

            <h4 style={{ margin: '12px 0 8px', color: '#4ecdc4', fontSize: '13px' }}>Renderer Info</h4>
            {Object.entries(rendererInfo).map(([key, value]) => (
              <div key={key} style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#888' }}>{key}:</span>
                <span>{String(value)}</span>
              </div>
            ))}
          </div>
        )}

        {/* Instructions */}
        <div style={{
          position: 'absolute',
          bottom: '16px',
          right: '16px',
          padding: '12px 16px',
          background: 'rgba(0, 0, 0, 0.8)',
          borderRadius: '8px',
          color: 'rgba(255, 255, 255, 0.8)',
          fontSize: '12px',
          zIndex: 10,
          maxWidth: '200px',
        }}>
          <div><strong>Controls:</strong></div>
          <div>Drag to rotate</div>
          <div>Pinch to zoom</div>
          <div>Tap body part to select</div>
        </div>
      </div>
    </div>
  );
}

export default SimplifiedAnatomyViewer;
