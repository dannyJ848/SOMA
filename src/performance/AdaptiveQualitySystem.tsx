/**
 * Adaptive Quality System
 *
 * A comprehensive React-based performance system that automatically adjusts
 * quality settings to maintain 60fps. Includes:
 * - Real-time FPS monitoring
 * - Adaptive quality controller
 * - Quality presets
 * - Performance overlay (debug mode)
 * - Device benchmarking
 */

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
  memo,
} from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import {
  PerformanceMonitor,
  performanceMonitor,
  runGPUBenchmark,
  getDeviceInfo,
  TARGET_FPS,
  DROP_THRESHOLD_FPS,
  RECOVERY_THRESHOLD_FPS,
  QUALITY_PRESETS,
  QUALITY_DEGRADATION_STEPS,
  type FrameMetrics,
  type GPUMetrics,
  type QualitySettings,
  type QualityPreset,
  type QualityLevel,
  type BenchmarkResult,
  type DeviceInfo,
} from './PerformanceMonitor';

// ============================================
// Types
// ============================================

export interface AdaptiveQualityState {
  currentPreset: QualityPreset;
  currentSettings: QualitySettings;
  qualityLevel: QualityLevel;
  isAdapting: boolean;
  frameMetrics: FrameMetrics | null;
  gpuMetrics: GPUMetrics | null;
  benchmarkResult: BenchmarkResult | null;
  deviceInfo: DeviceInfo;
  lastAdjustmentTime: number;
  adjustmentHistory: QualityAdjustment[];
}

export interface QualityAdjustment {
  timestamp: number;
  previousLevel: QualityLevel;
  newLevel: QualityLevel;
  reason: 'drop' | 'recovery' | 'manual';
  fps: number;
}

export interface AdaptiveQualityContextValue {
  state: AdaptiveQualityState;
  setPreset: (preset: QualityPreset) => void;
  setCustomSettings: (settings: Partial<QualitySettings>) => void;
  forceQualityLevel: (level: QualityLevel) => void;
  runBenchmark: () => Promise<BenchmarkResult>;
  resetToOptimal: () => void;
  isDebugMode: boolean;
  setDebugMode: (enabled: boolean) => void;
}

// ============================================
// Constants
// ============================================

const ADAPTATION_COOLDOWN_MS = 2000; // Minimum time between quality adjustments
const STABILITY_WINDOW_MS = 3000; // Time FPS must be stable before recovery
const FPS_SAMPLE_COUNT = 30; // Number of FPS samples to consider

// Quality level to settings mapping
const QUALITY_LEVEL_SETTINGS: Record<QualityLevel, QualitySettings> = {
  5: { // Maximum quality
    dpr: 2.0,
    shadowsEnabled: true,
    lodQuality: 'high',
    particleMultiplier: 1.0,
    animationsEnabled: true,
    antialias: true,
    maxLights: 6,
  },
  4: { // High quality, reduced DPR
    dpr: 1.5,
    shadowsEnabled: true,
    lodQuality: 'high',
    particleMultiplier: 1.0,
    animationsEnabled: true,
    antialias: true,
    maxLights: 4,
  },
  3: { // Medium-high, minimal DPR
    dpr: 1.0,
    shadowsEnabled: true,
    lodQuality: 'high',
    particleMultiplier: 1.0,
    animationsEnabled: true,
    antialias: false,
    maxLights: 4,
  },
  2: { // Medium, no shadows
    dpr: 1.0,
    shadowsEnabled: false,
    lodQuality: 'medium',
    particleMultiplier: 0.75,
    animationsEnabled: true,
    antialias: false,
    maxLights: 3,
  },
  1: { // Low, reduced particles
    dpr: 1.0,
    shadowsEnabled: false,
    lodQuality: 'low',
    particleMultiplier: 0.5,
    animationsEnabled: true,
    antialias: false,
    maxLights: 2,
  },
  0: { // Minimum, no animations
    dpr: 1.0,
    shadowsEnabled: false,
    lodQuality: 'low',
    particleMultiplier: 0.25,
    animationsEnabled: false,
    antialias: false,
    maxLights: 2,
  },
};

// ============================================
// Context
// ============================================

const AdaptiveQualityContext = createContext<AdaptiveQualityContextValue | null>(null);

export function useAdaptiveQuality(): AdaptiveQualityContextValue {
  const context = useContext(AdaptiveQualityContext);
  if (!context) {
    throw new Error('useAdaptiveQuality must be used within an AdaptiveQualityProvider');
  }
  return context;
}

// ============================================
// Provider Component
// ============================================

interface AdaptiveQualityProviderProps {
  children: React.ReactNode;
  initialPreset?: QualityPreset;
  autoStart?: boolean;
  debugMode?: boolean;
}

export function AdaptiveQualityProvider({
  children,
  initialPreset = 'auto',
  autoStart = true,
  debugMode: initialDebugMode = false,
}: AdaptiveQualityProviderProps) {
  const [state, setState] = useState<AdaptiveQualityState>(() => ({
    currentPreset: initialPreset,
    currentSettings: initialPreset === 'custom'
      ? QUALITY_PRESETS.balanced
      : QUALITY_PRESETS[initialPreset as keyof typeof QUALITY_PRESETS] || QUALITY_PRESETS.auto,
    qualityLevel: 5,
    isAdapting: initialPreset === 'auto',
    frameMetrics: null,
    gpuMetrics: null,
    benchmarkResult: null,
    deviceInfo: getDeviceInfo(),
    lastAdjustmentTime: 0,
    adjustmentHistory: [],
  }));

  const [isDebugMode, setDebugMode] = useState(initialDebugMode);
  const fpsSamplesRef = useRef<number[]>([]);
  const lastStableTimeRef = useRef<number>(0);

  // Initialize with benchmark if auto mode
  useEffect(() => {
    if (autoStart && state.currentPreset === 'auto') {
      runGPUBenchmark().then((result) => {
        setState((prev) => ({
          ...prev,
          benchmarkResult: result,
          currentSettings: result.recommendedSettings,
          qualityLevel: getQualityLevelFromSettings(result.recommendedSettings),
        }));
      });
    }
  }, [autoStart]);

  // Subscribe to performance metrics
  useEffect(() => {
    const unsubscribe = performanceMonitor.subscribe((metrics) => {
      setState((prev) => ({
        ...prev,
        frameMetrics: metrics,
      }));

      // Track FPS samples for adaptation
      fpsSamplesRef.current.push(metrics.fps);
      if (fpsSamplesRef.current.length > FPS_SAMPLE_COUNT) {
        fpsSamplesRef.current.shift();
      }
    });

    performanceMonitor.start();

    return () => {
      unsubscribe();
    };
  }, []);

  // Adaptive quality adjustment logic
  useEffect(() => {
    if (state.currentPreset !== 'auto' || !state.isAdapting) return;

    const samples = fpsSamplesRef.current;
    if (samples.length < 10) return;

    const now = Date.now();
    const timeSinceLastAdjustment = now - state.lastAdjustmentTime;
    if (timeSinceLastAdjustment < ADAPTATION_COOLDOWN_MS) return;

    const avgFPS = samples.reduce((a, b) => a + b, 0) / samples.length;
    const currentLevel = state.qualityLevel;

    // Check for FPS drop
    if (avgFPS < DROP_THRESHOLD_FPS && currentLevel > 0) {
      const newLevel = (currentLevel - 1) as QualityLevel;
      setState((prev) => ({
        ...prev,
        qualityLevel: newLevel,
        currentSettings: QUALITY_LEVEL_SETTINGS[newLevel],
        lastAdjustmentTime: now,
        adjustmentHistory: [
          ...prev.adjustmentHistory.slice(-9),
          {
            timestamp: now,
            previousLevel: currentLevel,
            newLevel,
            reason: 'drop',
            fps: avgFPS,
          },
        ],
      }));
      fpsSamplesRef.current = [];
      lastStableTimeRef.current = 0;
    }
    // Check for recovery
    else if (avgFPS >= RECOVERY_THRESHOLD_FPS && currentLevel < 5) {
      // Require stability before recovering
      if (lastStableTimeRef.current === 0) {
        lastStableTimeRef.current = now;
      } else if (now - lastStableTimeRef.current >= STABILITY_WINDOW_MS) {
        const newLevel = (currentLevel + 1) as QualityLevel;
        setState((prev) => ({
          ...prev,
          qualityLevel: newLevel,
          currentSettings: QUALITY_LEVEL_SETTINGS[newLevel],
          lastAdjustmentTime: now,
          adjustmentHistory: [
            ...prev.adjustmentHistory.slice(-9),
            {
              timestamp: now,
              previousLevel: currentLevel,
              newLevel,
              reason: 'recovery',
              fps: avgFPS,
            },
          ],
        }));
        fpsSamplesRef.current = [];
        lastStableTimeRef.current = 0;
      }
    } else {
      lastStableTimeRef.current = 0;
    }
  }, [state.frameMetrics, state.currentPreset, state.isAdapting, state.qualityLevel, state.lastAdjustmentTime]);

  const setPreset = useCallback((preset: QualityPreset) => {
    if (preset === 'custom') {
      setState((prev) => ({
        ...prev,
        currentPreset: preset,
        isAdapting: false,
      }));
    } else if (preset === 'auto') {
      runGPUBenchmark().then((result) => {
        setState((prev) => ({
          ...prev,
          currentPreset: preset,
          benchmarkResult: result,
          currentSettings: result.recommendedSettings,
          qualityLevel: getQualityLevelFromSettings(result.recommendedSettings),
          isAdapting: true,
        }));
      });
    } else {
      setState((prev) => ({
        ...prev,
        currentPreset: preset,
        currentSettings: QUALITY_PRESETS[preset],
        qualityLevel: getQualityLevelFromPreset(preset),
        isAdapting: false,
      }));
    }
    fpsSamplesRef.current = [];
  }, []);

  const setCustomSettings = useCallback((settings: Partial<QualitySettings>) => {
    setState((prev) => ({
      ...prev,
      currentPreset: 'custom',
      currentSettings: { ...prev.currentSettings, ...settings },
      isAdapting: false,
    }));
  }, []);

  const forceQualityLevel = useCallback((level: QualityLevel) => {
    setState((prev) => ({
      ...prev,
      qualityLevel: level,
      currentSettings: QUALITY_LEVEL_SETTINGS[level],
      lastAdjustmentTime: Date.now(),
      adjustmentHistory: [
        ...prev.adjustmentHistory.slice(-9),
        {
          timestamp: Date.now(),
          previousLevel: prev.qualityLevel,
          newLevel: level,
          reason: 'manual',
          fps: prev.frameMetrics?.fps ?? 0,
        },
      ],
    }));
    fpsSamplesRef.current = [];
  }, []);

  const runBenchmark = useCallback(async () => {
    const result = await runGPUBenchmark(true);
    setState((prev) => ({
      ...prev,
      benchmarkResult: result,
    }));
    return result;
  }, []);

  const resetToOptimal = useCallback(() => {
    if (state.benchmarkResult) {
      setState((prev) => ({
        ...prev,
        currentSettings: prev.benchmarkResult?.recommendedSettings ?? QUALITY_PRESETS.balanced,
        qualityLevel: getQualityLevelFromSettings(
          prev.benchmarkResult?.recommendedSettings ?? QUALITY_PRESETS.balanced
        ),
      }));
    } else {
      runBenchmark().then((result) => {
        setState((prev) => ({
          ...prev,
          currentSettings: result.recommendedSettings,
          qualityLevel: getQualityLevelFromSettings(result.recommendedSettings),
        }));
      });
    }
  }, [state.benchmarkResult, runBenchmark]);

  const contextValue = useMemo<AdaptiveQualityContextValue>(
    () => ({
      state,
      setPreset,
      setCustomSettings,
      forceQualityLevel,
      runBenchmark,
      resetToOptimal,
      isDebugMode,
      setDebugMode,
    }),
    [state, setPreset, setCustomSettings, forceQualityLevel, runBenchmark, resetToOptimal, isDebugMode]
  );

  return (
    <AdaptiveQualityContext.Provider value={contextValue}>
      {children}
    </AdaptiveQualityContext.Provider>
  );
}

// ============================================
// Helper Functions
// ============================================

function getQualityLevelFromSettings(settings: QualitySettings): QualityLevel {
  // Match settings to closest quality level
  if (!settings.animationsEnabled && settings.particleMultiplier <= 0.25) return 0;
  if (!settings.shadowsEnabled && settings.lodQuality === 'low') return 1;
  if (!settings.shadowsEnabled && settings.lodQuality === 'medium') return 2;
  if (settings.dpr <= 1.0 && settings.shadowsEnabled) return 3;
  if (settings.dpr <= 1.5) return 4;
  return 5;
}

function getQualityLevelFromPreset(preset: Exclude<QualityPreset, 'auto' | 'custom'>): QualityLevel {
  switch (preset) {
    case 'performance':
      return 1;
    case 'balanced':
      return 3;
    case 'quality':
      return 5;
    default:
      return 3;
  }
}

// ============================================
// Canvas Quality Applicator (R3F Component)
// ============================================

interface QualityApplicatorProps {
  settings: QualitySettings;
}

export function QualityApplicator({ settings }: QualityApplicatorProps) {
  const { gl, scene } = useThree();

  useEffect(() => {
    // Apply DPR
    gl.setPixelRatio(settings.dpr);

    // Apply shadow settings
    gl.shadowMap.enabled = settings.shadowsEnabled;
    if (settings.shadowsEnabled) {
      gl.shadowMap.type = THREE.PCFSoftShadowMap;
    }

    // Traverse scene to update materials and lights
    let lightCount = 0;
    scene.traverse((object) => {
      // Handle lights
      if (object instanceof THREE.Light) {
        if (lightCount >= settings.maxLights) {
          object.visible = false;
        } else {
          object.visible = true;
          lightCount++;
        }

        if (object instanceof THREE.DirectionalLight || object instanceof THREE.SpotLight) {
          object.castShadow = settings.shadowsEnabled;
        }
      }

      // Handle meshes
      if (object instanceof THREE.Mesh) {
        object.castShadow = settings.shadowsEnabled;
        object.receiveShadow = settings.shadowsEnabled;
      }
    });

    // Connect to performance monitor
    performanceMonitor.setRenderer(gl);
    performanceMonitor.setScene(scene);
  }, [gl, scene, settings]);

  // Update GPU metrics periodically
  useFrame(() => {
    // GPU metrics are collected by PerformanceMonitor
  });

  return null;
}

// ============================================
// Performance Overlay Component
// ============================================

interface PerformanceOverlayProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  compact?: boolean;
}

export const PerformanceOverlay = memo(function PerformanceOverlay({
  position = 'top-right',
  compact = false,
}: PerformanceOverlayProps) {
  const { state, isDebugMode } = useAdaptiveQuality();

  if (!isDebugMode) return null;

  const { frameMetrics, gpuMetrics, qualityLevel, currentPreset, currentSettings } = state;

  const positionStyles: Record<string, React.CSSProperties> = {
    'top-left': { top: 10, left: 10 },
    'top-right': { top: 10, right: 10 },
    'bottom-left': { bottom: 10, left: 10 },
    'bottom-right': { bottom: 10, right: 10 },
  };

  const getFPSColor = (fps: number): string => {
    if (fps >= 55) return '#4ade80'; // Green
    if (fps >= 45) return '#facc15'; // Yellow
    if (fps >= 30) return '#fb923c'; // Orange
    return '#ef4444'; // Red
  };

  const getQualityLabel = (level: QualityLevel): string => {
    const labels = ['Minimum', 'Low', 'Medium', 'Medium-High', 'High', 'Ultra'];
    return labels[level];
  };

  return (
    <div
      style={{
        position: 'fixed',
        ...positionStyles[position],
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        color: '#fff',
        padding: compact ? '8px 12px' : '12px 16px',
        borderRadius: 8,
        fontFamily: 'monospace',
        fontSize: compact ? 11 : 12,
        zIndex: 10000,
        minWidth: compact ? 120 : 200,
        backdropFilter: 'blur(4px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      {/* FPS Counter */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: compact ? 4 : 8,
        }}
      >
        <span>FPS</span>
        <span
          style={{
            color: getFPSColor(frameMetrics?.fps ?? 0),
            fontWeight: 'bold',
            fontSize: compact ? 14 : 18,
          }}
        >
          {frameMetrics?.fps.toFixed(1) ?? '--'}
        </span>
      </div>

      {!compact && (
        <>
          {/* Frame Time */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
            <span style={{ color: '#9ca3af' }}>Frame Time</span>
            <span>{frameMetrics?.avgFrameTime.toFixed(2) ?? '--'} ms</span>
          </div>

          {/* Frame Time Range */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
            <span style={{ color: '#9ca3af' }}>Range</span>
            <span>
              {frameMetrics?.minFrameTime.toFixed(1) ?? '--'} - {frameMetrics?.maxFrameTime.toFixed(1) ?? '--'} ms
            </span>
          </div>

          {/* Jank/Spike Count */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{ color: '#9ca3af' }}>Jank/Spikes</span>
            <span style={{ color: (frameMetrics?.jankCount ?? 0) > 5 ? '#facc15' : '#9ca3af' }}>
              {frameMetrics?.jankCount ?? 0} / {frameMetrics?.spikeCount ?? 0}
            </span>
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', margin: '8px 0' }} />

          {/* GPU Metrics */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
            <span style={{ color: '#9ca3af' }}>Triangles</span>
            <span>{gpuMetrics?.triangleCount.toLocaleString() ?? '--'}</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
            <span style={{ color: '#9ca3af' }}>Draw Calls</span>
            <span>{gpuMetrics?.drawCalls ?? '--'}</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
            <span style={{ color: '#9ca3af' }}>Est. Memory</span>
            <span>{gpuMetrics?.estimatedMemoryMB.toFixed(1) ?? '--'} MB</span>
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', margin: '8px 0' }} />

          {/* Quality Info */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
            <span style={{ color: '#9ca3af' }}>Preset</span>
            <span style={{ textTransform: 'capitalize' }}>{currentPreset}</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
            <span style={{ color: '#9ca3af' }}>Quality</span>
            <span>
              {getQualityLabel(qualityLevel)} ({qualityLevel}/5)
            </span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
            <span style={{ color: '#9ca3af' }}>DPR</span>
            <span>{currentSettings.dpr.toFixed(1)}</span>
          </div>

          {/* Settings Indicators */}
          <div style={{ display: 'flex', gap: 6, marginTop: 8, flexWrap: 'wrap' }}>
            <SettingBadge label="Shadows" enabled={currentSettings.shadowsEnabled} />
            <SettingBadge label="AA" enabled={currentSettings.antialias} />
            <SettingBadge label="Anim" enabled={currentSettings.animationsEnabled} />
            <SettingBadge label={`LOD:${currentSettings.lodQuality[0].toUpperCase()}`} enabled />
          </div>
        </>
      )}

      {compact && (
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10 }}>
          <span style={{ color: '#9ca3af' }}>Q:{qualityLevel}</span>
          <span style={{ color: '#9ca3af' }}>DPR:{currentSettings.dpr.toFixed(1)}</span>
        </div>
      )}
    </div>
  );
});

function SettingBadge({ label, enabled }: { label: string; enabled: boolean }) {
  return (
    <span
      style={{
        padding: '2px 6px',
        borderRadius: 4,
        fontSize: 10,
        backgroundColor: enabled ? 'rgba(74, 222, 128, 0.2)' : 'rgba(255, 255, 255, 0.1)',
        color: enabled ? '#4ade80' : '#6b7280',
      }}
    >
      {label}
    </span>
  );
}

// ============================================
// Quality Controls Component
// ============================================

interface QualityControlsProps {
  className?: string;
  showBenchmark?: boolean;
}

export function QualityControls({ className = '', showBenchmark = true }: QualityControlsProps) {
  const { state, setPreset, setCustomSettings, runBenchmark, isDebugMode, setDebugMode } = useAdaptiveQuality();
  const [isBenchmarking, setIsBenchmarking] = useState(false);

  const handleBenchmark = async () => {
    setIsBenchmarking(true);
    await runBenchmark();
    setIsBenchmarking(false);
  };

  const presets: { value: QualityPreset; label: string; description: string }[] = [
    { value: 'auto', label: 'Auto', description: 'Adapts to maintain 60fps' },
    { value: 'performance', label: 'Performance', description: 'Battery-friendly, low settings' },
    { value: 'balanced', label: 'Balanced', description: 'Medium quality, stable FPS' },
    { value: 'quality', label: 'Quality', description: 'Maximum visual quality' },
    { value: 'custom', label: 'Custom', description: 'User-configured settings' },
  ];

  return (
    <div className={`quality-controls ${className}`} style={styles.container}>
      <h3 style={styles.title}>Quality Settings</h3>

      {/* Preset Selection */}
      <div style={styles.section}>
        <label style={styles.label}>Preset</label>
        <div style={styles.presetGrid}>
          {presets.map((preset) => (
            <button
              key={preset.value}
              onClick={() => setPreset(preset.value)}
              style={{
                ...styles.presetButton,
                ...(state.currentPreset === preset.value ? styles.presetButtonActive : {}),
              }}
              title={preset.description}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      {/* Custom Settings */}
      {state.currentPreset === 'custom' && (
        <div style={styles.section}>
          <label style={styles.label}>Custom Settings</label>

          <div style={styles.sliderRow}>
            <span>DPR</span>
            <input
              type="range"
              min="0.5"
              max="2.5"
              step="0.25"
              value={state.currentSettings.dpr}
              onChange={(e) => setCustomSettings({ dpr: parseFloat(e.target.value) })}
              style={styles.slider}
            />
            <span>{state.currentSettings.dpr.toFixed(2)}</span>
          </div>

          <div style={styles.checkboxRow}>
            <label>
              <input
                type="checkbox"
                checked={state.currentSettings.shadowsEnabled}
                onChange={(e) => setCustomSettings({ shadowsEnabled: e.target.checked })}
              />
              Shadows
            </label>
            <label>
              <input
                type="checkbox"
                checked={state.currentSettings.antialias}
                onChange={(e) => setCustomSettings({ antialias: e.target.checked })}
              />
              Anti-aliasing
            </label>
            <label>
              <input
                type="checkbox"
                checked={state.currentSettings.animationsEnabled}
                onChange={(e) => setCustomSettings({ animationsEnabled: e.target.checked })}
              />
              Animations
            </label>
          </div>

          <div style={styles.sliderRow}>
            <span>LOD Quality</span>
            <select
              value={state.currentSettings.lodQuality}
              onChange={(e) =>
                setCustomSettings({ lodQuality: e.target.value as 'low' | 'medium' | 'high' })
              }
              style={styles.select}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <div style={styles.sliderRow}>
            <span>Particles</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.25"
              value={state.currentSettings.particleMultiplier}
              onChange={(e) => setCustomSettings({ particleMultiplier: parseFloat(e.target.value) })}
              style={styles.slider}
            />
            <span>{Math.round(state.currentSettings.particleMultiplier * 100)}%</span>
          </div>

          <div style={styles.sliderRow}>
            <span>Max Lights</span>
            <input
              type="range"
              min="1"
              max="8"
              step="1"
              value={state.currentSettings.maxLights}
              onChange={(e) => setCustomSettings({ maxLights: parseInt(e.target.value) })}
              style={styles.slider}
            />
            <span>{state.currentSettings.maxLights}</span>
          </div>
        </div>
      )}

      {/* Benchmark & Debug */}
      <div style={styles.section}>
        {showBenchmark && (
          <button
            onClick={handleBenchmark}
            disabled={isBenchmarking}
            style={styles.button}
          >
            {isBenchmarking ? 'Running Benchmark...' : 'Run GPU Benchmark'}
          </button>
        )}

        {state.benchmarkResult && (
          <div style={styles.benchmarkResult}>
            <span>Score: {state.benchmarkResult.score}</span>
            <span>Tier: {state.benchmarkResult.tier}</span>
            <span>GPU: {state.benchmarkResult.deviceInfo.gpu.substring(0, 30)}...</span>
          </div>
        )}

        <div style={styles.checkboxRow}>
          <label>
            <input
              type="checkbox"
              checked={isDebugMode}
              onChange={(e) => setDebugMode(e.target.checked)}
            />
            Show Performance Overlay
          </label>
        </div>
      </div>
    </div>
  );
}

// ============================================
// Styles
// ============================================

const styles: Record<string, React.CSSProperties> = {
  container: {
    padding: 16,
    backgroundColor: 'var(--color-surface, #1a1a1a)',
    borderRadius: 8,
    color: 'var(--color-text, #fff)',
  },
  title: {
    margin: '0 0 16px 0',
    fontSize: 16,
    fontWeight: 600,
  },
  section: {
    marginBottom: 16,
  },
  label: {
    display: 'block',
    marginBottom: 8,
    fontSize: 14,
    color: 'var(--color-text-secondary, #9ca3af)',
  },
  presetGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 8,
  },
  presetButton: {
    padding: '8px 12px',
    border: '1px solid var(--color-border, #333)',
    borderRadius: 6,
    backgroundColor: 'transparent',
    color: 'inherit',
    cursor: 'pointer',
    fontSize: 13,
    transition: 'all 0.2s',
  },
  presetButtonActive: {
    backgroundColor: 'var(--color-primary, #3b82f6)',
    borderColor: 'var(--color-primary, #3b82f6)',
  },
  sliderRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    marginBottom: 8,
    fontSize: 13,
  },
  slider: {
    flex: 1,
    height: 4,
    appearance: 'none' as const,
    backgroundColor: 'var(--color-border, #333)',
    borderRadius: 2,
    cursor: 'pointer',
  },
  select: {
    flex: 1,
    padding: '6px 10px',
    border: '1px solid var(--color-border, #333)',
    borderRadius: 4,
    backgroundColor: 'var(--color-surface, #1a1a1a)',
    color: 'inherit',
    fontSize: 13,
  },
  checkboxRow: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: 16,
    marginBottom: 8,
    fontSize: 13,
  },
  button: {
    width: '100%',
    padding: '10px 16px',
    border: 'none',
    borderRadius: 6,
    backgroundColor: 'var(--color-primary, #3b82f6)',
    color: '#fff',
    fontSize: 14,
    cursor: 'pointer',
    marginBottom: 8,
  },
  benchmarkResult: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 4,
    padding: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 6,
    fontSize: 12,
    marginBottom: 12,
  },
};

// ============================================
// usePerformanceMetrics Hook
// ============================================

export function usePerformanceMetrics() {
  const [frameMetrics, setFrameMetrics] = useState<FrameMetrics | null>(null);
  const [gpuMetrics, setGPUMetrics] = useState<GPUMetrics | null>(null);

  useEffect(() => {
    const unsubscribe = performanceMonitor.subscribe((metrics) => {
      setFrameMetrics(metrics);
      setGPUMetrics(performanceMonitor.getGPUMetrics());
    });

    performanceMonitor.start();

    return () => {
      unsubscribe();
    };
  }, []);

  return { frameMetrics, gpuMetrics };
}

// ============================================
// useAdaptiveSettings Hook
// ============================================

export function useAdaptiveSettings() {
  const { state } = useAdaptiveQuality();
  return state.currentSettings;
}

// ============================================
// Exports
// ============================================

export {
  type FrameMetrics,
  type GPUMetrics,
  type QualitySettings,
  type QualityPreset,
  type QualityLevel,
  type BenchmarkResult,
  type DeviceInfo,
  QUALITY_PRESETS,
  QUALITY_LEVEL_SETTINGS,
  TARGET_FPS,
  DROP_THRESHOLD_FPS,
  RECOVERY_THRESHOLD_FPS,
};

export default AdaptiveQualityProvider;
