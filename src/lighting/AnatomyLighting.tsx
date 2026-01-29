/**
 * AnatomyLighting - Enhanced Cinematic Lighting System
 *
 * Provides professional-grade lighting for the 3D anatomy viewer with:
 * - Soft shadows using PCF shadow mapping
 * - Contact shadows for ground plane
 * - Environment mapping for reflections
 * - Camera-following rim light for depth perception
 * - Multiple lighting presets (clinical, studio, ambient, surgical)
 * - Dynamic spotlight following focus point
 * - Lightweight SSAO for depth
 * - Mobile-optimized performance
 *
 * Target: Cinematic lighting at 60fps on iPhone 14
 */

import {
  useRef,
  useState,
  useEffect,
  useMemo,
  useCallback,
  createContext,
  useContext,
  memo,
} from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import {
  ContactShadows,
  Environment,
  SpotLight,
  AccumulativeShadows,
  RandomizedLight,
  SoftShadows,
} from '@react-three/drei';
import * as THREE from 'three';

// ============================================
// Types & Interfaces
// ============================================

export type LightingPreset = 'clinical' | 'studio' | 'ambient' | 'surgical';

export interface LightingConfig {
  preset: LightingPreset;
  intensity: number; // 0-2 multiplier
  shadowsEnabled: boolean;
  ssaoEnabled: boolean;
  environmentEnabled: boolean;
  spotlightFollowsFocus: boolean;
}

export interface LightingState {
  config: LightingConfig;
  focusPoint: THREE.Vector3;
  isMobile: boolean;
  isLowPowerDevice: boolean;
}

export interface LightingPresetConfig {
  name: string;
  description: string;
  ambient: { intensity: number; color: string };
  key: { position: [number, number, number]; intensity: number; color: string };
  fill: { position: [number, number, number]; intensity: number; color: string };
  rim: { intensity: number; color: string };
  spotlight: { intensity: number; angle: number; penumbra: number };
  shadowIntensity: number;
  contactShadowOpacity: number;
  environmentIntensity: number;
}

// ============================================
// Lighting Presets
// ============================================

export const LIGHTING_PRESETS: Record<LightingPreset, LightingPresetConfig> = {
  clinical: {
    name: 'Clinical',
    description: 'Bright, even lighting for clarity',
    ambient: { intensity: 0.6, color: '#ffffff' },
    key: { position: [5, 8, 5], intensity: 1.0, color: '#ffffff' },
    fill: { position: [-5, 5, 5], intensity: 0.6, color: '#f8f8ff' },
    rim: { intensity: 0.4, color: '#e0e0ff' },
    spotlight: { intensity: 0.8, angle: Math.PI / 6, penumbra: 0.5 },
    shadowIntensity: 0.3,
    contactShadowOpacity: 0.4,
    environmentIntensity: 0.3,
  },
  studio: {
    name: 'Studio',
    description: 'Dramatic three-point lighting',
    ambient: { intensity: 0.3, color: '#101020' },
    key: { position: [4, 6, 3], intensity: 1.2, color: '#fff5e6' },
    fill: { position: [-4, 4, 4], intensity: 0.35, color: '#c0d0ff' },
    rim: { intensity: 0.6, color: '#ffddcc' },
    spotlight: { intensity: 1.2, angle: Math.PI / 8, penumbra: 0.3 },
    shadowIntensity: 0.5,
    contactShadowOpacity: 0.6,
    environmentIntensity: 0.2,
  },
  ambient: {
    name: 'Ambient',
    description: 'Soft, diffused lighting',
    ambient: { intensity: 0.8, color: '#e8e8f0' },
    key: { position: [3, 10, 3], intensity: 0.5, color: '#ffffff' },
    fill: { position: [-3, 6, 6], intensity: 0.4, color: '#f0f0ff' },
    rim: { intensity: 0.2, color: '#ffe8e0' },
    spotlight: { intensity: 0.3, angle: Math.PI / 4, penumbra: 0.8 },
    shadowIntensity: 0.15,
    contactShadowOpacity: 0.25,
    environmentIntensity: 0.5,
  },
  surgical: {
    name: 'Surgical',
    description: 'High-intensity focused lighting',
    ambient: { intensity: 0.2, color: '#1a1a2e' },
    key: { position: [0, 10, 2], intensity: 1.8, color: '#ffffff' },
    fill: { position: [-2, 4, 4], intensity: 0.4, color: '#e0e8ff' },
    rim: { intensity: 0.5, color: '#ffd0d0' },
    spotlight: { intensity: 2.0, angle: Math.PI / 10, penumbra: 0.2 },
    shadowIntensity: 0.6,
    contactShadowOpacity: 0.7,
    environmentIntensity: 0.15,
  },
};

// ============================================
// Default Configuration
// ============================================

export const DEFAULT_LIGHTING_CONFIG: LightingConfig = {
  preset: 'clinical',
  intensity: 1.0,
  shadowsEnabled: true,
  ssaoEnabled: true,
  environmentEnabled: true,
  spotlightFollowsFocus: true,
};

// ============================================
// Device Detection
// ============================================

function detectDeviceCapabilities(): { isMobile: boolean; isLowPower: boolean } {
  if (typeof window === 'undefined') {
    return { isMobile: false, isLowPower: false };
  }

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const isLowPower = isMobile && (
    // Older iOS devices
    /iPhone\s*(6|7|8|X|SE)/i.test(navigator.userAgent) ||
    // Low memory indication
    (navigator as { deviceMemory?: number }).deviceMemory !== undefined &&
    (navigator as { deviceMemory?: number }).deviceMemory! < 4
  );

  return { isMobile, isLowPower };
}

// ============================================
// Lighting Context
// ============================================

interface LightingContextValue {
  config: LightingConfig;
  setConfig: (config: Partial<LightingConfig>) => void;
  setFocusPoint: (point: THREE.Vector3) => void;
  focusPoint: THREE.Vector3;
  isMobile: boolean;
  isLowPowerDevice: boolean;
  currentPreset: LightingPresetConfig;
}

const LightingContext = createContext<LightingContextValue | null>(null);

export function useLighting(): LightingContextValue {
  const context = useContext(LightingContext);
  if (!context) {
    throw new Error('useLighting must be used within LightingProvider');
  }
  return context;
}

// ============================================
// Camera-Following Rim Light
// ============================================

interface RimLightProps {
  intensity: number;
  color: string;
  offset?: [number, number, number];
}

const RimLight = memo(function RimLight({
  intensity,
  color,
  offset = [0, 2, -4],
}: RimLightProps) {
  const lightRef = useRef<THREE.DirectionalLight>(null);
  const { camera } = useThree();
  const frameSkip = useRef(0);

  useFrame(() => {
    // Update every 3rd frame for performance
    frameSkip.current++;
    if (frameSkip.current % 3 !== 0) return;

    if (lightRef.current) {
      // Position rim light behind the camera
      const cameraDirection = new THREE.Vector3();
      camera.getWorldDirection(cameraDirection);

      lightRef.current.position.set(
        camera.position.x - cameraDirection.x * 4 + offset[0],
        camera.position.y + offset[1],
        camera.position.z - cameraDirection.z * 4 + offset[2]
      );

      // Look at center of scene
      lightRef.current.target.position.set(0, 0.5, 0);
      lightRef.current.target.updateMatrixWorld();
    }
  });

  return (
    <>
      <directionalLight
        ref={lightRef}
        intensity={intensity}
        color={color}
        position={[0, 3, -5]}
      />
      {/* Target for directional light */}
      <object3D position={[0, 0.5, 0]} />
    </>
  );
});

// ============================================
// Focus-Following Spotlight
// ============================================

interface FocusSpotlightProps {
  focusPoint: THREE.Vector3;
  intensity: number;
  angle: number;
  penumbra: number;
  enabled: boolean;
  shadowMapSize: number;
}

const FocusSpotlight = memo(function FocusSpotlight({
  focusPoint,
  intensity,
  angle,
  penumbra,
  enabled,
  shadowMapSize,
}: FocusSpotlightProps) {
  const spotLightRef = useRef<THREE.SpotLight>(null);
  const targetRef = useRef<THREE.Object3D>(null);

  useFrame(() => {
    if (!enabled || !spotLightRef.current || !targetRef.current) return;

    // Smoothly interpolate target to focus point
    targetRef.current.position.lerp(focusPoint, 0.1);
  });

  if (!enabled) return null;

  return (
    <>
      <spotLight
        ref={spotLightRef}
        position={[0, 6, 2]}
        intensity={intensity}
        angle={angle}
        penumbra={penumbra}
        color="#ffffff"
        castShadow
        shadow-mapSize-width={shadowMapSize}
        shadow-mapSize-height={shadowMapSize}
        shadow-bias={-0.0001}
      />
      <object3D ref={targetRef} position={[0, 0.5, 0]} />
    </>
  );
});

// ============================================
// Lightweight SSAO Effect
// ============================================

/**
 * Lightweight SSAO implementation using drei's built-in components
 * For mobile, we use AccumulativeShadows which provides ambient occlusion-like effect
 * with better performance than full SSAO post-processing
 */
interface LightweightSSAOProps {
  enabled: boolean;
  isMobile: boolean;
  shadowOpacity: number;
}

const LightweightSSAO = memo(function LightweightSSAO({
  enabled,
  isMobile,
  shadowOpacity,
}: LightweightSSAOProps) {
  if (!enabled) return null;

  // On mobile, use simpler ambient shadows
  if (isMobile) {
    return (
      <AccumulativeShadows
        temporal
        frames={30}
        color="#1a1a2e"
        colorBlend={0.5}
        alphaTest={0.65}
        opacity={shadowOpacity * 0.6}
        scale={8}
        position={[0, -1.39, 0]}
      >
        <RandomizedLight
          amount={4}
          radius={4}
          ambient={0.5}
          position={[2.5, 5, -5]}
          bias={0.001}
        />
      </AccumulativeShadows>
    );
  }

  // Desktop: Use soft shadows for better quality
  return (
    <>
      <SoftShadows samples={10} size={25} focus={0.5} />
      <AccumulativeShadows
        temporal
        frames={60}
        color="#1a1a2e"
        colorBlend={0.7}
        alphaTest={0.75}
        opacity={shadowOpacity}
        scale={10}
        position={[0, -1.39, 0]}
      >
        <RandomizedLight
          amount={6}
          radius={6}
          ambient={0.4}
          position={[4, 6, -4]}
          bias={0.001}
        />
      </AccumulativeShadows>
    </>
  );
});

// ============================================
// Contact Shadows Component
// ============================================

interface AnatomyContactShadowsProps {
  enabled: boolean;
  opacity: number;
  isMobile: boolean;
}

const AnatomyContactShadows = memo(function AnatomyContactShadows({
  enabled,
  opacity,
  isMobile,
}: AnatomyContactShadowsProps) {
  if (!enabled) return null;

  return (
    <ContactShadows
      position={[0, -1.39, 0]}
      opacity={opacity}
      scale={8}
      blur={isMobile ? 1.5 : 2.5}
      far={4}
      resolution={isMobile ? 256 : 512}
      color="#1a1a2e"
    />
  );
});

// ============================================
// Environment Mapping
// ============================================

interface AnatomyEnvironmentProps {
  enabled: boolean;
  intensity: number;
  isMobile: boolean;
}

const AnatomyEnvironment = memo(function AnatomyEnvironment({
  enabled,
  intensity,
  isMobile,
}: AnatomyEnvironmentProps) {
  if (!enabled) return null;

  // Use procedural environment for performance
  // 'city' is a lightweight preset, alternatively use 'apartment' or 'studio'
  return (
    <Environment
      preset={isMobile ? 'apartment' : 'city'}
      environmentIntensity={intensity}
      background={false}
    />
  );
});

// ============================================
// Main Lighting Component
// ============================================

interface AnatomyLightingProps {
  preset?: LightingPreset;
  intensity?: number;
  shadowsEnabled?: boolean;
  ssaoEnabled?: boolean;
  environmentEnabled?: boolean;
  spotlightFollowsFocus?: boolean;
  focusPoint?: THREE.Vector3;
}

export const AnatomyLighting = memo(function AnatomyLighting({
  preset = 'clinical',
  intensity = 1.0,
  shadowsEnabled = true,
  ssaoEnabled = true,
  environmentEnabled = true,
  spotlightFollowsFocus = true,
  focusPoint = new THREE.Vector3(0, 0.5, 0),
}: AnatomyLightingProps) {
  const presetConfig = LIGHTING_PRESETS[preset];
  const { isMobile, isLowPower } = useMemo(() => detectDeviceCapabilities(), []);

  // Shadow map size based on device
  const shadowMapSize = useMemo(() => {
    if (isLowPower) return 256;
    if (isMobile) return 512;
    return 1024;
  }, [isMobile, isLowPower]);

  // Disable expensive features on low-power devices
  const effectiveSsaoEnabled = ssaoEnabled && !isLowPower;
  const effectiveShadowsEnabled = shadowsEnabled && !isLowPower;

  return (
    <>
      {/* Ambient Light - base visibility */}
      <ambientLight
        intensity={presetConfig.ambient.intensity * intensity}
        color={presetConfig.ambient.color}
      />

      {/* Key Light - main directional light with shadows */}
      <directionalLight
        position={presetConfig.key.position}
        intensity={presetConfig.key.intensity * intensity}
        color={presetConfig.key.color}
        castShadow={effectiveShadowsEnabled}
        shadow-mapSize-width={shadowMapSize}
        shadow-mapSize-height={shadowMapSize}
        shadow-camera-far={20}
        shadow-camera-left={-4}
        shadow-camera-right={4}
        shadow-camera-top={4}
        shadow-camera-bottom={-4}
        shadow-bias={-0.0001}
      />

      {/* Fill Light - softer secondary light */}
      <directionalLight
        position={presetConfig.fill.position}
        intensity={presetConfig.fill.intensity * intensity}
        color={presetConfig.fill.color}
      />

      {/* Rim Light - follows camera for depth perception */}
      <RimLight
        intensity={presetConfig.rim.intensity * intensity}
        color={presetConfig.rim.color}
      />

      {/* Focus-following Spotlight */}
      <FocusSpotlight
        focusPoint={focusPoint}
        intensity={presetConfig.spotlight.intensity * intensity}
        angle={presetConfig.spotlight.angle}
        penumbra={presetConfig.spotlight.penumbra}
        enabled={spotlightFollowsFocus}
        shadowMapSize={shadowMapSize}
      />

      {/* Contact Shadows for ground plane */}
      <AnatomyContactShadows
        enabled={effectiveShadowsEnabled}
        opacity={presetConfig.contactShadowOpacity * intensity}
        isMobile={isMobile}
      />

      {/* Lightweight SSAO for depth */}
      <LightweightSSAO
        enabled={effectiveSsaoEnabled}
        isMobile={isMobile}
        shadowOpacity={presetConfig.shadowIntensity}
      />

      {/* Environment mapping for reflections */}
      <AnatomyEnvironment
        enabled={environmentEnabled}
        intensity={presetConfig.environmentIntensity * intensity}
        isMobile={isMobile}
      />
    </>
  );
});

// ============================================
// Lighting Provider Component
// ============================================

interface LightingProviderProps {
  children: React.ReactNode;
  initialConfig?: Partial<LightingConfig>;
}

export function LightingProvider({
  children,
  initialConfig,
}: LightingProviderProps) {
  const [config, setConfigState] = useState<LightingConfig>({
    ...DEFAULT_LIGHTING_CONFIG,
    ...initialConfig,
  });

  const [focusPoint, setFocusPoint] = useState<THREE.Vector3>(
    new THREE.Vector3(0, 0.5, 0)
  );

  const { isMobile, isLowPower } = useMemo(() => detectDeviceCapabilities(), []);

  const setConfig = useCallback((updates: Partial<LightingConfig>) => {
    setConfigState((prev) => ({ ...prev, ...updates }));
  }, []);

  const currentPreset = LIGHTING_PRESETS[config.preset];

  const contextValue = useMemo<LightingContextValue>(
    () => ({
      config,
      setConfig,
      setFocusPoint,
      focusPoint,
      isMobile,
      isLowPowerDevice: isLowPower,
      currentPreset,
    }),
    [config, setConfig, focusPoint, isMobile, isLowPower, currentPreset]
  );

  return (
    <LightingContext.Provider value={contextValue}>
      {children}
    </LightingContext.Provider>
  );
}

// ============================================
// Lighting Controls UI Component
// ============================================

interface LightingControlsProps {
  className?: string;
  collapsed?: boolean;
  onToggleCollapse?: () => void;
}

export function LightingControls({
  className = '',
  collapsed = false,
  onToggleCollapse,
}: LightingControlsProps) {
  const { config, setConfig, isMobile, isLowPowerDevice, currentPreset } =
    useLighting();

  const presetOptions: { value: LightingPreset; label: string }[] = [
    { value: 'clinical', label: 'Clinical' },
    { value: 'studio', label: 'Studio' },
    { value: 'ambient', label: 'Ambient' },
    { value: 'surgical', label: 'Surgical' },
  ];

  if (collapsed) {
    return (
      <button
        className={`lighting-controls-toggle ${className}`}
        onClick={onToggleCollapse}
        title="Lighting Controls"
        aria-label="Open lighting controls"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      </button>
    );
  }

  return (
    <div className={`lighting-controls ${className}`}>
      <div className="lighting-controls-header">
        <h3>Lighting</h3>
        {onToggleCollapse && (
          <button
            className="lighting-controls-close"
            onClick={onToggleCollapse}
            aria-label="Close lighting controls"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Device info indicator */}
      {(isMobile || isLowPowerDevice) && (
        <div className="lighting-device-info">
          {isLowPowerDevice
            ? 'Low-power mode: Some effects disabled'
            : 'Mobile mode: Optimized for battery'}
        </div>
      )}

      {/* Preset Selector */}
      <div className="lighting-control-group">
        <label htmlFor="lighting-preset">Preset</label>
        <select
          id="lighting-preset"
          value={config.preset}
          onChange={(e) =>
            setConfig({ preset: e.target.value as LightingPreset })
          }
        >
          {presetOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span className="lighting-preset-description">
          {currentPreset.description}
        </span>
      </div>

      {/* Intensity Slider */}
      <div className="lighting-control-group">
        <label htmlFor="lighting-intensity">
          Intensity: {Math.round(config.intensity * 100)}%
        </label>
        <input
          id="lighting-intensity"
          type="range"
          min="0"
          max="200"
          value={config.intensity * 100}
          onChange={(e) =>
            setConfig({ intensity: parseInt(e.target.value) / 100 })
          }
        />
      </div>

      {/* Shadow Toggle */}
      <div className="lighting-control-group lighting-control-toggle">
        <label htmlFor="lighting-shadows">
          Shadows
          {isLowPowerDevice && (
            <span className="lighting-disabled-hint">(disabled on this device)</span>
          )}
        </label>
        <input
          id="lighting-shadows"
          type="checkbox"
          checked={config.shadowsEnabled}
          disabled={isLowPowerDevice}
          onChange={(e) => setConfig({ shadowsEnabled: e.target.checked })}
        />
      </div>

      {/* SSAO Toggle */}
      <div className="lighting-control-group lighting-control-toggle">
        <label htmlFor="lighting-ssao">
          Ambient Occlusion
          {isLowPowerDevice && (
            <span className="lighting-disabled-hint">(disabled on this device)</span>
          )}
        </label>
        <input
          id="lighting-ssao"
          type="checkbox"
          checked={config.ssaoEnabled}
          disabled={isLowPowerDevice}
          onChange={(e) => setConfig({ ssaoEnabled: e.target.checked })}
        />
      </div>

      {/* Environment Toggle */}
      <div className="lighting-control-group lighting-control-toggle">
        <label htmlFor="lighting-environment">Environment Reflections</label>
        <input
          id="lighting-environment"
          type="checkbox"
          checked={config.environmentEnabled}
          onChange={(e) => setConfig({ environmentEnabled: e.target.checked })}
        />
      </div>

      {/* Focus Spotlight Toggle */}
      <div className="lighting-control-group lighting-control-toggle">
        <label htmlFor="lighting-spotlight">Focus Spotlight</label>
        <input
          id="lighting-spotlight"
          type="checkbox"
          checked={config.spotlightFollowsFocus}
          onChange={(e) =>
            setConfig({ spotlightFollowsFocus: e.target.checked })
          }
        />
      </div>
    </div>
  );
}

// ============================================
// CSS Styles (to be added to styles.css)
// ============================================

export const LIGHTING_CONTROLS_STYLES = `
/* Lighting Controls Panel */
.lighting-controls {
  position: absolute;
  bottom: 80px;
  right: 16px;
  background: rgba(26, 26, 46, 0.95);
  border-radius: 12px;
  padding: 16px;
  min-width: 220px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 100;
}

.lighting-controls-toggle {
  position: absolute;
  bottom: 80px;
  right: 16px;
  width: 40px;
  height: 40px;
  background: rgba(26, 26, 46, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.8);
  transition: all 0.2s ease;
  z-index: 100;
}

.lighting-controls-toggle:hover {
  background: rgba(40, 40, 70, 0.95);
  color: #ffffff;
}

.lighting-controls-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.lighting-controls-header h3 {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
}

.lighting-controls-close {
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.lighting-controls-close:hover {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.1);
}

.lighting-device-info {
  font-size: 11px;
  color: rgba(255, 200, 100, 0.8);
  background: rgba(255, 200, 100, 0.1);
  padding: 6px 10px;
  border-radius: 6px;
  margin-bottom: 12px;
}

.lighting-control-group {
  margin-bottom: 12px;
}

.lighting-control-group label {
  display: block;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 4px;
}

.lighting-control-group select {
  width: 100%;
  padding: 8px 10px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 6px;
  color: #ffffff;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.lighting-control-group select:hover {
  border-color: rgba(255, 255, 255, 0.3);
}

.lighting-control-group select:focus {
  outline: none;
  border-color: rgba(100, 150, 255, 0.5);
}

.lighting-preset-description {
  display: block;
  font-size: 10px;
  color: rgba(255, 255, 255, 0.4);
  margin-top: 4px;
}

.lighting-control-group input[type="range"] {
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  -webkit-appearance: none;
}

.lighting-control-group input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 16px;
  height: 16px;
  background: #6495ed;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease;
}

.lighting-control-group input[type="range"]::-webkit-slider-thumb:hover {
  transform: scale(1.1);
  background: #7aa5ff;
}

.lighting-control-toggle {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.lighting-control-toggle label {
  margin-bottom: 0;
  display: flex;
  align-items: center;
  gap: 6px;
}

.lighting-control-toggle input[type="checkbox"] {
  width: 36px;
  height: 20px;
  -webkit-appearance: none;
  appearance: none;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
}

.lighting-control-toggle input[type="checkbox"]:checked {
  background: rgba(100, 150, 255, 0.5);
}

.lighting-control-toggle input[type="checkbox"]:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.lighting-control-toggle input[type="checkbox"]::before {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  background: #ffffff;
  border-radius: 50%;
  top: 2px;
  left: 2px;
  transition: all 0.2s ease;
}

.lighting-control-toggle input[type="checkbox"]:checked::before {
  transform: translateX(16px);
}

.lighting-disabled-hint {
  font-size: 9px;
  color: rgba(255, 200, 100, 0.6);
  margin-left: 4px;
}
`;

// ============================================
// Export Default
// ============================================

export default AnatomyLighting;
