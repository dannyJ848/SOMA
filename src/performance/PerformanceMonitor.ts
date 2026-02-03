/**
 * Performance Monitor
 *
 * Comprehensive real-time performance monitoring system for the 3D anatomy viewer.
 * Provides FPS tracking, frame time analysis, GPU memory estimation, draw call counting,
 * and device benchmarking capabilities.
 */

import * as THREE from 'three';

// ============================================
// Types
// ============================================

export interface FrameMetrics {
  fps: number;
  frameTime: number;
  avgFrameTime: number;
  minFrameTime: number;
  maxFrameTime: number;
  jankCount: number;
  spikeCount: number;
  timestamp: number;
}

export interface GPUMetrics {
  estimatedMemoryMB: number;
  textureCount: number;
  geometryCount: number;
  materialCount: number;
  triangleCount: number;
  drawCalls: number;
  programs: number;
}

export interface PerformanceSnapshot {
  frame: FrameMetrics;
  gpu: GPUMetrics;
  qualityLevel: QualityLevel;
  timestamp: number;
}

export type QualityLevel = 0 | 1 | 2 | 3 | 4 | 5;

export interface QualitySettings {
  dpr: number;
  shadowsEnabled: boolean;
  lodQuality: 'low' | 'medium' | 'high';
  particleMultiplier: number;
  animationsEnabled: boolean;
  antialias: boolean;
  maxLights: number;
}

export type QualityPreset = 'auto' | 'performance' | 'balanced' | 'quality' | 'custom';

export interface BenchmarkResult {
  score: number;
  tier: 'low' | 'medium' | 'high' | 'ultra';
  recommendedPreset: QualityPreset;
  recommendedSettings: QualitySettings;
  timestamp: number;
  deviceInfo: DeviceInfo;
}

export interface DeviceInfo {
  gpu: string;
  cores: number;
  memory: number;
  isMobile: boolean;
  isLowPower: boolean;
  screenWidth: number;
  screenHeight: number;
  devicePixelRatio: number;
}

// ============================================
// Constants
// ============================================

export const TARGET_FPS = 60;
export const DROP_THRESHOLD_FPS = 45;
export const RECOVERY_THRESHOLD_FPS = 55;
export const JANK_THRESHOLD_MS = 16.67; // 60fps threshold
export const SPIKE_THRESHOLD_MS = 33.33; // 30fps threshold

export const QUALITY_PRESETS: Record<Exclude<QualityPreset, 'custom'>, QualitySettings> = {
  auto: {
    dpr: 2.0,
    shadowsEnabled: true,
    lodQuality: 'high',
    particleMultiplier: 1.0,
    animationsEnabled: true,
    antialias: true,
    maxLights: 4,
  },
  performance: {
    dpr: 1.0,
    shadowsEnabled: false,
    lodQuality: 'low',
    particleMultiplier: 0.25,
    animationsEnabled: false,
    antialias: false,
    maxLights: 2,
  },
  balanced: {
    dpr: 1.5,
    shadowsEnabled: false,
    lodQuality: 'medium',
    particleMultiplier: 0.5,
    animationsEnabled: true,
    antialias: false,
    maxLights: 3,
  },
  quality: {
    dpr: Math.min(window.devicePixelRatio, 2.5),
    shadowsEnabled: true,
    lodQuality: 'high',
    particleMultiplier: 1.0,
    animationsEnabled: true,
    antialias: true,
    maxLights: 6,
  },
};

// Quality degradation steps (in order of application)
export const QUALITY_DEGRADATION_STEPS = [
  'reduceDPR_2.0_to_1.5',
  'reduceDPR_1.5_to_1.0',
  'disableShadows',
  'reduceLOD',
  'reduceParticles',
  'disableAnimations',
] as const;

// ============================================
// Frame Time Ring Buffer
// ============================================

class FrameTimeBuffer {
  private buffer: number[];
  private index: number;
  private size: number;
  private count: number;

  constructor(size: number = 120) {
    this.buffer = new Array(size).fill(0);
    this.index = 0;
    this.size = size;
    this.count = 0;
  }

  push(value: number): void {
    this.buffer[this.index] = value;
    this.index = (this.index + 1) % this.size;
    if (this.count < this.size) {
      this.count++;
    }
  }

  getAverage(): number {
    if (this.count === 0) return 0;
    let sum = 0;
    for (let i = 0; i < this.count; i++) {
      sum += this.buffer[i];
    }
    return sum / this.count;
  }

  getMin(): number {
    if (this.count === 0) return 0;
    let min = Infinity;
    for (let i = 0; i < this.count; i++) {
      if (this.buffer[i] < min) min = this.buffer[i];
    }
    return min;
  }

  getMax(): number {
    if (this.count === 0) return 0;
    let max = 0;
    for (let i = 0; i < this.count; i++) {
      if (this.buffer[i] > max) max = this.buffer[i];
    }
    return max;
  }

  getPercentile(p: number): number {
    if (this.count === 0) return 0;
    const sorted = this.buffer.slice(0, this.count).sort((a, b) => a - b);
    const index = Math.floor((p / 100) * (sorted.length - 1));
    return sorted[index];
  }

  getJankCount(): number {
    let count = 0;
    for (let i = 0; i < this.count; i++) {
      if (this.buffer[i] > JANK_THRESHOLD_MS) count++;
    }
    return count;
  }

  getSpikeCount(): number {
    let count = 0;
    for (let i = 0; i < this.count; i++) {
      if (this.buffer[i] > SPIKE_THRESHOLD_MS) count++;
    }
    return count;
  }

  clear(): void {
    this.buffer.fill(0);
    this.index = 0;
    this.count = 0;
  }

  getCount(): number {
    return this.count;
  }

  getLast(): number {
    if (this.count === 0) return 0;
    const lastIndex = (this.index - 1 + this.size) % this.size;
    return this.buffer[lastIndex];
  }
}

// ============================================
// Performance Monitor Class
// ============================================

export class PerformanceMonitor {
  private frameBuffer: FrameTimeBuffer;
  private lastFrameTime: number;
  private isRunning: boolean;
  private animationFrameId: number | null;
  private listeners: Set<(metrics: FrameMetrics) => void>;
  private renderer: THREE.WebGLRenderer | null;
  private scene: THREE.Scene | null;
  private updateInterval: number;
  private lastUpdateTime: number;
  private frameCount: number;

  constructor(options?: { bufferSize?: number; updateInterval?: number }) {
    this.frameBuffer = new FrameTimeBuffer(options?.bufferSize ?? 120);
    this.lastFrameTime = 0;
    this.isRunning = false;
    this.animationFrameId = null;
    this.listeners = new Set();
    this.renderer = null;
    this.scene = null;
    this.updateInterval = options?.updateInterval ?? 500; // Report every 500ms
    this.lastUpdateTime = 0;
    this.frameCount = 0;
  }

  setRenderer(renderer: THREE.WebGLRenderer): void {
    this.renderer = renderer;
  }

  setScene(scene: THREE.Scene): void {
    this.scene = scene;
  }

  start(): void {
    if (this.isRunning) return;
    this.isRunning = true;
    this.lastFrameTime = performance.now();
    this.lastUpdateTime = performance.now();
    this.tick();
  }

  stop(): void {
    this.isRunning = false;
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }

  subscribe(callback: (metrics: FrameMetrics) => void): () => void {
    this.listeners.add(callback);
    if (!this.isRunning && this.listeners.size > 0) {
      this.start();
    }
    return () => {
      this.listeners.delete(callback);
      if (this.listeners.size === 0) {
        this.stop();
      }
    };
  }

  private tick = (): void => {
    if (!this.isRunning) return;

    const now = performance.now();
    const frameTime = now - this.lastFrameTime;
    this.lastFrameTime = now;

    // Only record valid frame times (ignore very long pauses)
    if (frameTime < 1000) {
      this.frameBuffer.push(frameTime);
      this.frameCount++;
    }

    // Report metrics at interval
    if (now - this.lastUpdateTime >= this.updateInterval) {
      this.reportMetrics();
      this.lastUpdateTime = now;
    }

    this.animationFrameId = requestAnimationFrame(this.tick);
  };

  private reportMetrics(): void {
    const avgFrameTime = this.frameBuffer.getAverage();
    const fps = avgFrameTime > 0 ? 1000 / avgFrameTime : 0;

    const metrics: FrameMetrics = {
      fps: Math.round(fps * 10) / 10,
      frameTime: this.frameBuffer.getLast(),
      avgFrameTime: Math.round(avgFrameTime * 100) / 100,
      minFrameTime: Math.round(this.frameBuffer.getMin() * 100) / 100,
      maxFrameTime: Math.round(this.frameBuffer.getMax() * 100) / 100,
      jankCount: this.frameBuffer.getJankCount(),
      spikeCount: this.frameBuffer.getSpikeCount(),
      timestamp: Date.now(),
    };

    this.listeners.forEach(listener => listener(metrics));
  }

  getFrameMetrics(): FrameMetrics {
    const avgFrameTime = this.frameBuffer.getAverage();
    const fps = avgFrameTime > 0 ? 1000 / avgFrameTime : 0;

    return {
      fps: Math.round(fps * 10) / 10,
      frameTime: this.frameBuffer.getLast(),
      avgFrameTime: Math.round(avgFrameTime * 100) / 100,
      minFrameTime: Math.round(this.frameBuffer.getMin() * 100) / 100,
      maxFrameTime: Math.round(this.frameBuffer.getMax() * 100) / 100,
      jankCount: this.frameBuffer.getJankCount(),
      spikeCount: this.frameBuffer.getSpikeCount(),
      timestamp: Date.now(),
    };
  }

  getGPUMetrics(): GPUMetrics {
    if (!this.renderer) {
      return {
        estimatedMemoryMB: 0,
        textureCount: 0,
        geometryCount: 0,
        materialCount: 0,
        triangleCount: 0,
        drawCalls: 0,
        programs: 0,
      };
    }

    const info = this.renderer.info;
    const memory = info.memory;
    const render = info.render;
    const programs = info.programs?.length ?? 0;

    // Estimate GPU memory usage
    const textureMemory = (memory.textures ?? 0) * 4; // Rough estimate: 4MB per texture
    const geometryMemory = (memory.geometries ?? 0) * 0.5; // Rough estimate: 0.5MB per geometry
    const estimatedMemoryMB = textureMemory + geometryMemory;

    return {
      estimatedMemoryMB: Math.round(estimatedMemoryMB * 10) / 10,
      textureCount: memory.textures ?? 0,
      geometryCount: memory.geometries ?? 0,
      materialCount: 0, // Not directly available
      triangleCount: render.triangles ?? 0,
      drawCalls: render.calls ?? 0,
      programs,
    };
  }

  getSnapshot(): PerformanceSnapshot {
    return {
      frame: this.getFrameMetrics(),
      gpu: this.getGPUMetrics(),
      qualityLevel: 5, // Will be updated by AdaptiveQualitySystem
      timestamp: Date.now(),
    };
  }

  reset(): void {
    this.frameBuffer.clear();
    this.frameCount = 0;
    if (this.renderer) {
      this.renderer.info.reset();
    }
  }

  // Get 1% low FPS (99th percentile frame time)
  get1PercentLowFPS(): number {
    const p99FrameTime = this.frameBuffer.getPercentile(99);
    return p99FrameTime > 0 ? Math.round((1000 / p99FrameTime) * 10) / 10 : 0;
  }
}

// ============================================
// Device Detection
// ============================================

export function getDeviceInfo(): DeviceInfo {
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  let gpu = 'Unknown';

  if (gl) {
    const debugInfo = (gl as WebGLRenderingContext).getExtension('WEBGL_debug_renderer_info');
    if (debugInfo) {
      gpu = (gl as WebGLRenderingContext).getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) || 'Unknown';
    }
  }

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  // Check for battery/power saving mode indicators
  const isLowPower =
    (navigator as any).getBattery !== undefined ||
    (navigator as any).connection?.saveData === true ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return {
    gpu,
    cores: navigator.hardwareConcurrency || 4,
    memory: (navigator as any).deviceMemory || 4,
    isMobile,
    isLowPower,
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
    devicePixelRatio: window.devicePixelRatio || 1,
  };
}

// ============================================
// GPU Benchmarking
// ============================================

const BENCHMARK_CACHE_KEY = 'biological-self-benchmark-result';
const BENCHMARK_CACHE_VERSION = 1;

export async function runGPUBenchmark(forceRun: boolean = false): Promise<BenchmarkResult> {
  // Check cache first
  if (!forceRun) {
    const cached = getCachedBenchmark();
    if (cached) {
      return cached;
    }
  }

  const deviceInfo = getDeviceInfo();

  // Create a temporary canvas and renderer for benchmarking
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: false,
    powerPreference: 'high-performance',
  });
  renderer.setSize(512, 512);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
  camera.position.z = 5;

  // Add lights
  const ambientLight = new THREE.AmbientLight(0x404040);
  scene.add(ambientLight);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);

  // Create benchmark geometry - progressively more complex
  const benchmarkObjects: THREE.Mesh[] = [];
  const geometry = new THREE.SphereGeometry(0.5, 32, 32);
  const material = new THREE.MeshStandardMaterial({ color: 0xff6600 });

  // Create a grid of spheres
  for (let x = -2; x <= 2; x++) {
    for (let y = -2; y <= 2; y++) {
      for (let z = -2; z <= 2; z++) {
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);
        scene.add(mesh);
        benchmarkObjects.push(mesh);
      }
    }
  }

  // Run benchmark frames
  const frameTimes: number[] = [];
  const benchmarkFrames = 60;

  return new Promise((resolve) => {
    let frameCount = 0;
    let lastTime = performance.now();

    function benchmarkFrame() {
      const now = performance.now();
      const frameTime = now - lastTime;
      lastTime = now;

      if (frameCount > 0) { // Skip first frame
        frameTimes.push(frameTime);
      }

      // Rotate objects to simulate animation
      benchmarkObjects.forEach((obj, i) => {
        obj.rotation.x += 0.01 * (i % 3 + 1);
        obj.rotation.y += 0.02 * (i % 2 + 1);
      });

      renderer.render(scene, camera);
      frameCount++;

      if (frameCount < benchmarkFrames) {
        requestAnimationFrame(benchmarkFrame);
      } else {
        // Calculate score
        const avgFrameTime = frameTimes.reduce((a, b) => a + b, 0) / frameTimes.length;
        const fps = 1000 / avgFrameTime;

        // Score is based on achieved FPS (max 100)
        let score = Math.min(100, Math.round((fps / 60) * 100));

        // Adjust for device capabilities
        if (deviceInfo.isMobile) score *= 0.8;
        if (deviceInfo.isLowPower) score *= 0.9;
        if (deviceInfo.cores < 4) score *= 0.9;
        if (deviceInfo.memory < 4) score *= 0.9;

        score = Math.round(score);

        // Determine tier and recommendations
        let tier: BenchmarkResult['tier'];
        let recommendedPreset: QualityPreset;
        let recommendedSettings: QualitySettings;

        if (score >= 90) {
          tier = 'ultra';
          recommendedPreset = 'quality';
          recommendedSettings = { ...QUALITY_PRESETS.quality };
        } else if (score >= 70) {
          tier = 'high';
          recommendedPreset = 'auto';
          recommendedSettings = { ...QUALITY_PRESETS.auto };
        } else if (score >= 50) {
          tier = 'medium';
          recommendedPreset = 'balanced';
          recommendedSettings = { ...QUALITY_PRESETS.balanced };
        } else {
          tier = 'low';
          recommendedPreset = 'performance';
          recommendedSettings = { ...QUALITY_PRESETS.performance };
        }

        // Cleanup
        geometry.dispose();
        material.dispose();
        renderer.dispose();
        benchmarkObjects.length = 0;

        const result: BenchmarkResult = {
          score,
          tier,
          recommendedPreset,
          recommendedSettings,
          timestamp: Date.now(),
          deviceInfo,
        };

        // Cache result
        cacheBenchmarkResult(result);

        resolve(result);
      }
    }

    requestAnimationFrame(benchmarkFrame);
  });
}

function getCachedBenchmark(): BenchmarkResult | null {
  try {
    const cached = localStorage.getItem(BENCHMARK_CACHE_KEY);
    if (!cached) return null;

    const data = JSON.parse(cached);

    // Check version
    if (data.version !== BENCHMARK_CACHE_VERSION) return null;

    // Check if cache is still valid (7 days)
    const cacheAge = Date.now() - data.result.timestamp;
    const maxAge = 7 * 24 * 60 * 60 * 1000; // 7 days
    if (cacheAge > maxAge) return null;

    // Verify device info matches
    const currentDevice = getDeviceInfo();
    if (
      data.result.deviceInfo.gpu !== currentDevice.gpu ||
      data.result.deviceInfo.cores !== currentDevice.cores ||
      data.result.deviceInfo.memory !== currentDevice.memory
    ) {
      return null;
    }

    return data.result as BenchmarkResult;
  } catch {
    return null;
  }
}

function cacheBenchmarkResult(result: BenchmarkResult): void {
  try {
    localStorage.setItem(
      BENCHMARK_CACHE_KEY,
      JSON.stringify({
        version: BENCHMARK_CACHE_VERSION,
        result,
      })
    );
  } catch {
    // Ignore storage errors
  }
}

export function clearBenchmarkCache(): void {
  try {
    localStorage.removeItem(BENCHMARK_CACHE_KEY);
  } catch {
    // Ignore storage errors
  }
}

// ============================================
// Singleton Instance
// ============================================

export const performanceMonitor = new PerformanceMonitor();

export default PerformanceMonitor;
