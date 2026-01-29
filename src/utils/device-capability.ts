/**
 * Device Capability Detection
 *
 * Provides GPU tier detection and adaptive quality settings for 3D rendering.
 * Optimized for iPhone 14+ (A15/A16 Bionic) while supporting fallback for older devices.
 *
 * Target: 60fps at DPR 1.5-2.0 on iPhone 14+
 */

// ============================================
// Types
// ============================================

export type GPUTier = 'high' | 'medium' | 'low' | 'unknown';

export type QualityPreset = 'performance' | 'balanced' | 'quality';

export interface DeviceCapabilities {
  gpuTier: GPUTier;
  maxDPR: number;
  recommendedDPR: number;
  supportsWebGL2: boolean;
  maxTextureSize: number;
  maxRenderbufferSize: number;
  gpuVendor: string;
  gpuRenderer: string;
  isAppleSilicon: boolean;
  isiPhone14Plus: boolean;
  estimatedVRAM: number; // MB estimate
  supportsHalfFloatTextures: boolean;
  supportsFloatTextures: boolean;
  supportsAnisotropicFiltering: boolean;
  maxAnisotropy: number;
}

export interface QualitySettings {
  dpr: number;
  antialias: boolean;
  useFXAA: boolean;
  precision: 'lowp' | 'mediump' | 'highp';
  shadowMapEnabled: boolean;
  shadowMapSize: number;
  maxLights: number;
  geometryDetail: 'low' | 'medium' | 'high';
  textureQuality: 'low' | 'medium' | 'high';
  animationsEnabled: boolean;
  particlesEnabled: boolean;
  postProcessingEnabled: boolean;
}

// ============================================
// GPU Detection Patterns
// ============================================

// Apple GPU patterns for tier classification
const APPLE_GPU_PATTERNS = {
  high: [
    /Apple A1[5-9]/i,     // A15, A16, A17, A18, A19
    /Apple M[1-9]/i,      // M1, M2, M3, M4+
    /Apple GPU/i,         // Generic Apple GPU (WebGL2 capable devices)
  ],
  medium: [
    /Apple A1[2-4]/i,     // A12, A13, A14
  ],
  low: [
    /Apple A[89]/i,       // A8, A9
    /Apple A1[01]/i,      // A10, A11
  ],
};

// Desktop GPU patterns
const DESKTOP_GPU_PATTERNS = {
  high: [
    /NVIDIA.*RTX/i,
    /NVIDIA.*GTX 1[0-9]{3}/i,
    /NVIDIA.*GTX 2[0-9]{3}/i,
    /NVIDIA.*RTX [2-9][0-9]{3}/i,
    /AMD.*RX [5-9][0-9]{3}/i,
    /AMD.*Radeon Pro/i,
    /Intel.*Iris.*Plus/i,
    /Intel.*Iris.*Xe/i,
    /Intel.*Arc/i,
  ],
  medium: [
    /NVIDIA.*GTX [6-9][0-9]{2}/i,
    /AMD.*RX [4-5][0-9]{2}/i,
    /Intel.*UHD/i,
    /Intel.*HD [6-9][0-9]{2}/i,
  ],
  low: [
    /Intel.*HD [1-5][0-9]{2}/i,
    /Intel.*HD Graphics$/i,
    /Mali/i,
    /Adreno [1-5]/i,
    /PowerVR/i,
  ],
};

// iPhone model detection (via screen dimensions and DPR)
const IPHONE_SCREEN_PROFILES = {
  // iPhone 14/14 Plus/14 Pro/14 Pro Max - A15/A16
  iphone14Plus: {
    minWidth: 390,
    maxWidth: 430,
    minHeight: 844,
    maxHeight: 932,
    dpr: [3],
  },
  // iPhone 13/13 Pro series - A15
  iphone13: {
    minWidth: 390,
    maxWidth: 428,
    minHeight: 844,
    maxHeight: 926,
    dpr: [3],
  },
  // iPhone 12 series - A14
  iphone12: {
    minWidth: 375,
    maxWidth: 428,
    minHeight: 812,
    maxHeight: 926,
    dpr: [3],
  },
};

// ============================================
// GPU Tier Detection
// ============================================

/**
 * Detect GPU tier based on WebGL renderer info
 */
function detectGPUTier(gl: WebGLRenderingContext | WebGL2RenderingContext): GPUTier {
  const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
  if (!debugInfo) {
    return 'unknown';
  }

  const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) || '';
  const vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) || '';

  // Check Apple GPUs first (most relevant for iPhone 14+)
  for (const pattern of APPLE_GPU_PATTERNS.high) {
    if (pattern.test(renderer) || pattern.test(vendor)) {
      return 'high';
    }
  }
  for (const pattern of APPLE_GPU_PATTERNS.medium) {
    if (pattern.test(renderer) || pattern.test(vendor)) {
      return 'medium';
    }
  }
  for (const pattern of APPLE_GPU_PATTERNS.low) {
    if (pattern.test(renderer) || pattern.test(vendor)) {
      return 'low';
    }
  }

  // Check desktop GPUs
  for (const pattern of DESKTOP_GPU_PATTERNS.high) {
    if (pattern.test(renderer)) {
      return 'high';
    }
  }
  for (const pattern of DESKTOP_GPU_PATTERNS.medium) {
    if (pattern.test(renderer)) {
      return 'medium';
    }
  }
  for (const pattern of DESKTOP_GPU_PATTERNS.low) {
    if (pattern.test(renderer)) {
      return 'low';
    }
  }

  // Fallback: use performance heuristics
  return detectGPUTierFromPerformance(gl);
}

/**
 * Fallback GPU tier detection using performance metrics
 */
function detectGPUTierFromPerformance(gl: WebGLRenderingContext | WebGL2RenderingContext): GPUTier {
  const maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);
  const maxRenderbufferSize = gl.getParameter(gl.MAX_RENDERBUFFER_SIZE);
  const maxVertexUniformVectors = gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS);
  const maxFragmentUniformVectors = gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS);

  // Score based on GPU capabilities
  let score = 0;

  if (maxTextureSize >= 16384) score += 3;
  else if (maxTextureSize >= 8192) score += 2;
  else if (maxTextureSize >= 4096) score += 1;

  if (maxRenderbufferSize >= 16384) score += 3;
  else if (maxRenderbufferSize >= 8192) score += 2;
  else if (maxRenderbufferSize >= 4096) score += 1;

  if (maxVertexUniformVectors >= 1024) score += 2;
  else if (maxVertexUniformVectors >= 256) score += 1;

  if (maxFragmentUniformVectors >= 1024) score += 2;
  else if (maxFragmentUniformVectors >= 256) score += 1;

  if (score >= 8) return 'high';
  if (score >= 5) return 'medium';
  return 'low';
}

/**
 * Detect if the device is iPhone 14+ based on screen characteristics
 */
function detectiPhone14Plus(): boolean {
  if (typeof window === 'undefined') return false;

  const ua = navigator.userAgent;
  const isiPhone = /iPhone/.test(ua);
  if (!isiPhone) return false;

  const { width, height } = window.screen;
  const dpr = window.devicePixelRatio;

  // iPhone 14/14 Plus/14 Pro/14 Pro Max detection
  const profile = IPHONE_SCREEN_PROFILES.iphone14Plus;
  const matchesWidth = width >= profile.minWidth && width <= profile.maxWidth;
  const matchesHeight = height >= profile.minHeight && height <= profile.maxHeight;
  const matchesDPR = profile.dpr.includes(Math.round(dpr));

  // Also check for iPhone 13 series (A15 chip - same high tier)
  const profile13 = IPHONE_SCREEN_PROFILES.iphone13;
  const matchesiPhone13 =
    width >= profile13.minWidth &&
    width <= profile13.maxWidth &&
    height >= profile13.minHeight &&
    height <= profile13.maxHeight;

  return (matchesWidth && matchesHeight && matchesDPR) || matchesiPhone13;
}

/**
 * Detect if the device has Apple Silicon (M1/M2/M3 or A15+)
 */
function detectAppleSilicon(gpuRenderer: string): boolean {
  return /Apple (M[1-9]|A1[5-9]|GPU)/i.test(gpuRenderer);
}

/**
 * Estimate VRAM based on device type and GPU tier
 */
function estimateVRAM(gpuTier: GPUTier, isAppleSilicon: boolean): number {
  if (isAppleSilicon) {
    // Apple Silicon uses unified memory
    switch (gpuTier) {
      case 'high':
        return 4096; // A15/A16/M1+ typically have 6-8GB+ total, GPU can use ~4GB
      case 'medium':
        return 2048;
      case 'low':
        return 1024;
      default:
        return 1024;
    }
  }

  // Desktop GPUs
  switch (gpuTier) {
    case 'high':
      return 8192;
    case 'medium':
      return 4096;
    case 'low':
      return 2048;
    default:
      return 2048;
  }
}

// ============================================
// Device Capability Detection
// ============================================

let cachedCapabilities: DeviceCapabilities | null = null;

/**
 * Detect full device capabilities for 3D rendering
 * Results are cached after first detection
 */
export function detectDeviceCapabilities(): DeviceCapabilities {
  if (cachedCapabilities) {
    return cachedCapabilities;
  }

  // iOS Simulator detection - use conservative defaults
  const isIOSSimulator = typeof navigator !== 'undefined' &&
    /iPhone|iPad/.test(navigator.userAgent) &&
    (navigator.userAgent.includes('Simulator') ||
     // iOS Simulator often reports as Safari but with specific WebGL quirks
     (typeof window !== 'undefined' && window.devicePixelRatio === 2));

  // Create temporary canvas for WebGL context
  const canvas = document.createElement('canvas');
  // iOS WebKit: Try webgl first for better compatibility, then webgl2
  // iOS Simulator has issues with some WebGL2 features
  const gl = isIOSSimulator
    ? (canvas.getContext('webgl') || canvas.getContext('webgl2'))
    : (canvas.getContext('webgl2') || canvas.getContext('webgl'));

  if (!gl) {
    // WebGL not supported - return minimal capabilities
    cachedCapabilities = {
      gpuTier: 'low',
      maxDPR: 1,
      recommendedDPR: 1,
      supportsWebGL2: false,
      maxTextureSize: 2048,
      maxRenderbufferSize: 2048,
      gpuVendor: 'unknown',
      gpuRenderer: 'unknown',
      isAppleSilicon: false,
      isiPhone14Plus: false,
      estimatedVRAM: 512,
      supportsHalfFloatTextures: false,
      supportsFloatTextures: false,
      supportsAnisotropicFiltering: false,
      maxAnisotropy: 1,
    };
    return cachedCapabilities;
  }

  const isWebGL2 = gl instanceof WebGL2RenderingContext;

  // Get GPU info
  const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
  const gpuVendor = debugInfo
    ? (gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) as string)
    : 'unknown';
  const gpuRenderer = debugInfo
    ? (gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) as string)
    : 'unknown';

  // Detect capabilities
  const gpuTier = detectGPUTier(gl);
  const isAppleSilicon = detectAppleSilicon(gpuRenderer);
  const isiPhone14Plus = detectiPhone14Plus();

  // Get GL limits
  const maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE) as number;
  const maxRenderbufferSize = gl.getParameter(gl.MAX_RENDERBUFFER_SIZE) as number;

  // Check texture float support
  const supportsFloatTextures = !!gl.getExtension('OES_texture_float');
  const supportsHalfFloatTextures =
    !!gl.getExtension('OES_texture_half_float') || isWebGL2;

  // Check anisotropic filtering
  const anisotropicExt =
    gl.getExtension('EXT_texture_filter_anisotropic') ||
    gl.getExtension('WEBKIT_EXT_texture_filter_anisotropic');
  const supportsAnisotropicFiltering = !!anisotropicExt;
  const maxAnisotropy = anisotropicExt
    ? (gl.getParameter(anisotropicExt.MAX_TEXTURE_MAX_ANISOTROPY_EXT) as number)
    : 1;

  // Calculate recommended DPR
  const deviceDPR = window.devicePixelRatio || 1;
  let maxDPR = deviceDPR;
  let recommendedDPR = 1;

  // iPhone 14+ with A15/A16: target DPR 1.5-2.0 for 60fps
  if (isiPhone14Plus || (isAppleSilicon && gpuTier === 'high')) {
    maxDPR = Math.min(deviceDPR, 2.0);
    recommendedDPR = Math.min(deviceDPR, 1.75); // Sweet spot for iPhone 14
  } else if (gpuTier === 'high') {
    maxDPR = Math.min(deviceDPR, 2.0);
    recommendedDPR = Math.min(deviceDPR, 2.0);
  } else if (gpuTier === 'medium') {
    maxDPR = Math.min(deviceDPR, 1.5);
    recommendedDPR = Math.min(deviceDPR, 1.25);
  } else {
    // Low tier: stick with 1.0 for performance
    maxDPR = 1.0;
    recommendedDPR = 1.0;
  }

  cachedCapabilities = {
    gpuTier,
    maxDPR,
    recommendedDPR,
    supportsWebGL2: isWebGL2,
    maxTextureSize,
    maxRenderbufferSize,
    gpuVendor,
    gpuRenderer,
    isAppleSilicon,
    isiPhone14Plus,
    estimatedVRAM: estimateVRAM(gpuTier, isAppleSilicon),
    supportsHalfFloatTextures,
    supportsFloatTextures,
    supportsAnisotropicFiltering,
    maxAnisotropy,
  };

  // Clean up
  canvas.remove();

  return cachedCapabilities;
}

/**
 * Clear cached capabilities (useful for testing or when device context changes)
 */
export function clearCapabilitiesCache(): void {
  cachedCapabilities = null;
}

// ============================================
// Quality Presets
// ============================================

/**
 * Get quality settings based on a preset and device capabilities
 */
export function getQualitySettings(
  preset: QualityPreset,
  capabilities?: DeviceCapabilities
): QualitySettings {
  const caps = capabilities || detectDeviceCapabilities();

  const baseSettings: QualitySettings = {
    dpr: 1,
    antialias: false,
    useFXAA: false,
    precision: 'mediump',
    shadowMapEnabled: false,
    shadowMapSize: 512,
    maxLights: 2,
    geometryDetail: 'low',
    textureQuality: 'low',
    animationsEnabled: true,
    particlesEnabled: false,
    postProcessingEnabled: false,
  };

  switch (preset) {
    case 'performance':
      return {
        ...baseSettings,
        dpr: 1.0,
        antialias: false,
        useFXAA: false,
        precision: 'lowp',
        shadowMapEnabled: false,
        maxLights: 2,
        geometryDetail: 'low',
        textureQuality: 'low',
        animationsEnabled: true,
        particlesEnabled: false,
        postProcessingEnabled: false,
      };

    case 'balanced':
      // Balanced preset: use FXAA instead of MSAA for better performance
      return {
        ...baseSettings,
        dpr: caps.isiPhone14Plus || caps.gpuTier === 'high' ? 1.5 : 1.25,
        antialias: false, // Disable MSAA
        useFXAA: caps.gpuTier !== 'low', // Use FXAA on medium+ GPUs
        precision: 'mediump',
        shadowMapEnabled: false,
        shadowMapSize: 512,
        maxLights: 3,
        geometryDetail: 'medium',
        textureQuality: 'medium',
        animationsEnabled: true,
        particlesEnabled: false,
        postProcessingEnabled: caps.gpuTier !== 'low',
      };

    case 'quality':
      // Quality preset: maximum visual fidelity for high-end devices
      return {
        ...baseSettings,
        dpr: caps.isiPhone14Plus ? 2.0 : caps.recommendedDPR,
        antialias: false, // Still prefer FXAA over MSAA for consistent performance
        useFXAA: true,
        precision: 'highp',
        shadowMapEnabled: caps.gpuTier === 'high',
        shadowMapSize: 1024,
        maxLights: 4,
        geometryDetail: 'high',
        textureQuality: 'high',
        animationsEnabled: true,
        particlesEnabled: caps.gpuTier === 'high',
        postProcessingEnabled: true,
      };

    default:
      return baseSettings;
  }
}

/**
 * Get the recommended quality preset based on device capabilities
 */
export function getRecommendedPreset(capabilities?: DeviceCapabilities): QualityPreset {
  const caps = capabilities || detectDeviceCapabilities();

  // iPhone 14+ or high-tier GPU: recommend balanced (not quality, to maintain 60fps)
  if (caps.isiPhone14Plus || (caps.isAppleSilicon && caps.gpuTier === 'high')) {
    return 'balanced';
  }

  // Based on GPU tier
  switch (caps.gpuTier) {
    case 'high':
      return 'balanced'; // Default to balanced for consistent 60fps
    case 'medium':
      return 'balanced';
    case 'low':
      return 'performance';
    default:
      return 'performance';
  }
}

// ============================================
// Adaptive DPR Manager
// ============================================

export interface AdaptiveDPRState {
  currentDPR: number;
  targetDPR: number;
  isAdapting: boolean;
  lastFPS: number;
  preset: QualityPreset;
}

/**
 * Adaptive DPR manager that adjusts resolution based on frame rate
 * Targets 60fps, will reduce DPR if performance drops
 */
export class AdaptiveDPRManager {
  private state: AdaptiveDPRState;
  private capabilities: DeviceCapabilities;
  private fpsHistory: number[] = [];
  private readonly historySize = 30;
  private readonly targetFPS = 55; // Slightly below 60 to account for variance
  private readonly minFPS = 45;
  private readonly dprStep = 0.125;
  private adaptationCooldown = 0;
  private readonly cooldownFrames = 60; // Wait 60 frames between adaptations

  constructor(initialPreset: QualityPreset = 'balanced') {
    this.capabilities = detectDeviceCapabilities();
    const settings = getQualitySettings(initialPreset, this.capabilities);

    this.state = {
      currentDPR: settings.dpr,
      targetDPR: settings.dpr,
      isAdapting: false,
      lastFPS: 60,
      preset: initialPreset,
    };
  }

  /**
   * Update with current FPS reading
   * Returns true if DPR changed
   */
  update(currentFPS: number): boolean {
    this.fpsHistory.push(currentFPS);
    if (this.fpsHistory.length > this.historySize) {
      this.fpsHistory.shift();
    }

    this.state.lastFPS = currentFPS;

    // Cooldown period
    if (this.adaptationCooldown > 0) {
      this.adaptationCooldown--;
      return false;
    }

    // Need enough history for reliable average
    if (this.fpsHistory.length < this.historySize / 2) {
      return false;
    }

    const avgFPS = this.fpsHistory.reduce((a, b) => a + b, 0) / this.fpsHistory.length;
    const minObservedFPS = Math.min(...this.fpsHistory);

    let dprChanged = false;

    // If performance is poor, reduce DPR
    if (avgFPS < this.minFPS || minObservedFPS < 30) {
      const newDPR = Math.max(1.0, this.state.currentDPR - this.dprStep);
      if (newDPR !== this.state.currentDPR) {
        this.state.targetDPR = newDPR;
        this.state.currentDPR = newDPR;
        this.state.isAdapting = true;
        this.adaptationCooldown = this.cooldownFrames;
        dprChanged = true;
      }
    }
    // If performance is good and we're below max, consider increasing DPR
    else if (avgFPS > this.targetFPS && this.state.currentDPR < this.capabilities.maxDPR) {
      const newDPR = Math.min(this.capabilities.maxDPR, this.state.currentDPR + this.dprStep);
      if (newDPR !== this.state.currentDPR) {
        this.state.targetDPR = newDPR;
        this.state.currentDPR = newDPR;
        this.state.isAdapting = true;
        this.adaptationCooldown = this.cooldownFrames * 2; // Longer cooldown for increases
        dprChanged = true;
      }
    }

    if (!dprChanged) {
      this.state.isAdapting = false;
    }

    return dprChanged;
  }

  /**
   * Set a specific quality preset
   */
  setPreset(preset: QualityPreset): void {
    const settings = getQualitySettings(preset, this.capabilities);
    this.state.preset = preset;
    this.state.targetDPR = settings.dpr;
    this.state.currentDPR = settings.dpr;
    this.fpsHistory = []; // Reset history when changing presets
    this.adaptationCooldown = this.cooldownFrames;
  }

  /**
   * Get current state
   */
  getState(): AdaptiveDPRState {
    return { ...this.state };
  }

  /**
   * Get current DPR value
   */
  getDPR(): number {
    return this.state.currentDPR;
  }

  /**
   * Get device capabilities
   */
  getCapabilities(): DeviceCapabilities {
    return this.capabilities;
  }
}

// ============================================
// React Hook for Device Capabilities
// ============================================

import { useState, useEffect, useMemo, useCallback, useRef } from 'react';

/**
 * React hook for device capability detection
 */
export function useDeviceCapabilities(): DeviceCapabilities {
  const [capabilities] = useState<DeviceCapabilities>(() => detectDeviceCapabilities());
  return capabilities;
}

/**
 * React hook for adaptive quality settings
 */
export function useAdaptiveQualitySettings(
  initialPreset?: QualityPreset
): {
  settings: QualitySettings;
  preset: QualityPreset;
  setPreset: (preset: QualityPreset) => void;
  capabilities: DeviceCapabilities;
} {
  const capabilities = useDeviceCapabilities();
  const [preset, setPreset] = useState<QualityPreset>(
    initialPreset || getRecommendedPreset(capabilities)
  );

  const settings = useMemo(
    () => getQualitySettings(preset, capabilities),
    [preset, capabilities]
  );

  return {
    settings,
    preset,
    setPreset,
    capabilities,
  };
}

/**
 * React hook for adaptive DPR management
 * Automatically adjusts DPR based on frame rate
 */
export function useAdaptiveDPR(
  initialPreset?: QualityPreset,
  enabled: boolean = true
): {
  dpr: number;
  isAdapting: boolean;
  lastFPS: number;
  preset: QualityPreset;
  setPreset: (preset: QualityPreset) => void;
  reportFPS: (fps: number) => void;
  capabilities: DeviceCapabilities;
} {
  const managerRef = useRef<AdaptiveDPRManager | null>(null);
  const [state, setState] = useState<AdaptiveDPRState>(() => {
    const caps = detectDeviceCapabilities();
    const preset = initialPreset || getRecommendedPreset(caps);
    const settings = getQualitySettings(preset, caps);
    return {
      currentDPR: settings.dpr,
      targetDPR: settings.dpr,
      isAdapting: false,
      lastFPS: 60,
      preset,
    };
  });

  // Initialize manager
  useEffect(() => {
    if (!managerRef.current) {
      const preset = initialPreset || getRecommendedPreset();
      managerRef.current = new AdaptiveDPRManager(preset);
    }
  }, [initialPreset]);

  const reportFPS = useCallback((fps: number) => {
    if (!enabled || !managerRef.current) return;

    const changed = managerRef.current.update(fps);
    if (changed) {
      setState(managerRef.current.getState());
    }
  }, [enabled]);

  const setPreset = useCallback((newPreset: QualityPreset) => {
    if (!managerRef.current) return;
    managerRef.current.setPreset(newPreset);
    setState(managerRef.current.getState());
  }, []);

  const capabilities = managerRef.current?.getCapabilities() || detectDeviceCapabilities();

  return {
    dpr: state.currentDPR,
    isAdapting: state.isAdapting,
    lastFPS: state.lastFPS,
    preset: state.preset,
    setPreset,
    reportFPS,
    capabilities,
  };
}
