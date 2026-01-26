/**
 * Performance Monitoring Utilities
 *
 * Provides FPS tracking, render time monitoring, and performance metrics
 * for optimizing the app's responsiveness on all devices.
 */

// ============================================
// Types
// ============================================

export interface PerformanceMetrics {
  fps: number;
  frameTime: number;
  avgFrameTime: number;
  minFrameTime: number;
  maxFrameTime: number;
  jankFrames: number; // Frames > 16.67ms (below 60fps)
  memoryUsage?: number; // MB if available
  timestamp: number;
}

export interface RenderMetrics {
  componentName: string;
  renderTime: number;
  renderCount: number;
  lastRenderTimestamp: number;
}

// ============================================
// FPS Monitor Singleton
// ============================================

class FPSMonitor {
  private frameTimes: number[] = [];
  private lastFrameTime: number = 0;
  private frameCount: number = 0;
  private jankFrames: number = 0;
  private isRunning: boolean = false;
  private animationFrameId: number | null = null;
  private listeners: Set<(metrics: PerformanceMetrics) => void> = new Set();
  private readonly maxSamples = 60; // Store last 60 frames
  private readonly jankThreshold = 16.67; // 60fps threshold in ms

  start(): void {
    if (this.isRunning) return;
    this.isRunning = true;
    this.lastFrameTime = performance.now();
    this.tick();
  }

  stop(): void {
    this.isRunning = false;
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }

  subscribe(callback: (metrics: PerformanceMetrics) => void): () => void {
    this.listeners.add(callback);
    if (!this.isRunning) {
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

    // Track frame time
    this.frameTimes.push(frameTime);
    if (this.frameTimes.length > this.maxSamples) {
      this.frameTimes.shift();
    }

    // Track jank
    if (frameTime > this.jankThreshold) {
      this.jankFrames++;
    }

    this.frameCount++;

    // Report metrics every 30 frames (~0.5s at 60fps)
    if (this.frameCount % 30 === 0) {
      this.reportMetrics();
    }

    this.animationFrameId = requestAnimationFrame(this.tick);
  };

  private reportMetrics(): void {
    if (this.frameTimes.length === 0) return;

    const avgFrameTime = this.frameTimes.reduce((a, b) => a + b, 0) / this.frameTimes.length;
    const minFrameTime = Math.min(...this.frameTimes);
    const maxFrameTime = Math.max(...this.frameTimes);
    const fps = 1000 / avgFrameTime;

    // Try to get memory usage (Chrome only)
    let memoryUsage: number | undefined;
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      memoryUsage = memory.usedJSHeapSize / (1024 * 1024);
    }

    const metrics: PerformanceMetrics = {
      fps: Math.round(fps * 10) / 10,
      frameTime: this.frameTimes[this.frameTimes.length - 1],
      avgFrameTime: Math.round(avgFrameTime * 100) / 100,
      minFrameTime: Math.round(minFrameTime * 100) / 100,
      maxFrameTime: Math.round(maxFrameTime * 100) / 100,
      jankFrames: this.jankFrames,
      memoryUsage,
      timestamp: Date.now(),
    };

    this.listeners.forEach(listener => listener(metrics));
  }

  getSnapshot(): PerformanceMetrics | null {
    if (this.frameTimes.length === 0) return null;

    const avgFrameTime = this.frameTimes.reduce((a, b) => a + b, 0) / this.frameTimes.length;
    const fps = 1000 / avgFrameTime;

    return {
      fps: Math.round(fps * 10) / 10,
      frameTime: this.frameTimes[this.frameTimes.length - 1],
      avgFrameTime: Math.round(avgFrameTime * 100) / 100,
      minFrameTime: Math.round(Math.min(...this.frameTimes) * 100) / 100,
      maxFrameTime: Math.round(Math.max(...this.frameTimes) * 100) / 100,
      jankFrames: this.jankFrames,
      timestamp: Date.now(),
    };
  }

  reset(): void {
    this.frameTimes = [];
    this.frameCount = 0;
    this.jankFrames = 0;
  }
}

// Export singleton instance
export const fpsMonitor = new FPSMonitor();

// ============================================
// Component Render Tracking
// ============================================

const renderMetrics = new Map<string, RenderMetrics>();

/**
 * Track a component render for performance analysis
 */
export function trackRender(componentName: string, renderTime: number): void {
  const existing = renderMetrics.get(componentName);
  if (existing) {
    existing.renderTime = renderTime;
    existing.renderCount++;
    existing.lastRenderTimestamp = Date.now();
  } else {
    renderMetrics.set(componentName, {
      componentName,
      renderTime,
      renderCount: 1,
      lastRenderTimestamp: Date.now(),
    });
  }
}

/**
 * Get render metrics for all tracked components
 */
export function getRenderMetrics(): RenderMetrics[] {
  return Array.from(renderMetrics.values());
}

/**
 * Clear render metrics
 */
export function clearRenderMetrics(): void {
  renderMetrics.clear();
}

/**
 * Get slow renders (> threshold ms)
 */
export function getSlowRenders(thresholdMs: number = 16): RenderMetrics[] {
  return Array.from(renderMetrics.values())
    .filter(m => m.renderTime > thresholdMs)
    .sort((a, b) => b.renderTime - a.renderTime);
}

// ============================================
// Measure Hook (for React components)
// ============================================

/**
 * Measure the time a function takes to execute
 */
export function measure<T>(label: string, fn: () => T): T {
  const start = performance.now();
  const result = fn();
  const duration = performance.now() - start;

  if (process.env.NODE_ENV === 'development') {
    if (duration > 16) {
      console.warn(`[Perf] ${label} took ${duration.toFixed(2)}ms (slow)`);
    }
  }

  trackRender(label, duration);
  return result;
}

/**
 * Measure async function execution time
 */
export async function measureAsync<T>(label: string, fn: () => Promise<T>): Promise<T> {
  const start = performance.now();
  const result = await fn();
  const duration = performance.now() - start;

  if (process.env.NODE_ENV === 'development') {
    if (duration > 100) {
      console.warn(`[Perf] ${label} took ${duration.toFixed(2)}ms (slow async)`);
    }
  }

  trackRender(label, duration);
  return result;
}

// ============================================
// Bundle Size Tracking
// ============================================

interface ChunkInfo {
  name: string;
  size: number;
  loaded: boolean;
}

const loadedChunks: ChunkInfo[] = [];

/**
 * Track a dynamically loaded chunk
 */
export function trackChunkLoad(name: string, size: number): void {
  loadedChunks.push({ name, size, loaded: true });

  if (process.env.NODE_ENV === 'development') {
    console.log(`[Perf] Loaded chunk: ${name} (${(size / 1024).toFixed(1)}KB)`);
  }
}

/**
 * Get total size of loaded chunks
 */
export function getTotalChunksSize(): number {
  return loadedChunks.reduce((total, chunk) => total + chunk.size, 0);
}

/**
 * Get loaded chunks info
 */
export function getLoadedChunks(): ChunkInfo[] {
  return [...loadedChunks];
}

// ============================================
// Device Performance Detection
// ============================================

export type DevicePerformanceTier = 'high' | 'medium' | 'low';

/**
 * Detect device performance tier based on hardware
 */
export function detectDevicePerformance(): DevicePerformanceTier {
  // Check for hardware concurrency (CPU cores)
  const cores = navigator.hardwareConcurrency || 2;

  // Check for device memory (Chrome only)
  const memory = (navigator as any).deviceMemory || 4;

  // Check for connection type (Chrome only)
  const connection = (navigator as any).connection;
  const effectiveType = connection?.effectiveType || '4g';

  // Check if mobile
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  // Score based on factors
  let score = 0;

  // CPU cores
  if (cores >= 8) score += 3;
  else if (cores >= 4) score += 2;
  else score += 1;

  // Memory
  if (memory >= 8) score += 3;
  else if (memory >= 4) score += 2;
  else score += 1;

  // Connection
  if (effectiveType === '4g') score += 2;
  else if (effectiveType === '3g') score += 1;

  // Mobile penalty
  if (isMobile) score -= 2;

  // Determine tier
  if (score >= 7) return 'high';
  if (score >= 4) return 'medium';
  return 'low';
}

// ============================================
// Performance Recommendations
// ============================================

export interface PerformanceRecommendation {
  area: string;
  severity: 'high' | 'medium' | 'low';
  message: string;
  action: string;
}

/**
 * Get performance recommendations based on current metrics
 */
export function getPerformanceRecommendations(
  metrics: PerformanceMetrics
): PerformanceRecommendation[] {
  const recommendations: PerformanceRecommendation[] = [];

  // FPS recommendations
  if (metrics.fps < 30) {
    recommendations.push({
      area: 'Frame Rate',
      severity: 'high',
      message: `FPS is critically low at ${metrics.fps}`,
      action: 'Reduce 3D complexity, disable animations, lower DPR',
    });
  } else if (metrics.fps < 45) {
    recommendations.push({
      area: 'Frame Rate',
      severity: 'medium',
      message: `FPS is below target at ${metrics.fps}`,
      action: 'Consider reducing geometry complexity',
    });
  }

  // Jank recommendations
  if (metrics.jankFrames > 10) {
    recommendations.push({
      area: 'Smoothness',
      severity: 'high',
      message: `${metrics.jankFrames} janky frames detected`,
      action: 'Optimize heavy operations, use requestAnimationFrame',
    });
  }

  // Memory recommendations
  if (metrics.memoryUsage && metrics.memoryUsage > 500) {
    recommendations.push({
      area: 'Memory',
      severity: 'high',
      message: `Memory usage is high at ${metrics.memoryUsage.toFixed(0)}MB`,
      action: 'Check for memory leaks, dispose unused resources',
    });
  } else if (metrics.memoryUsage && metrics.memoryUsage > 200) {
    recommendations.push({
      area: 'Memory',
      severity: 'medium',
      message: `Memory usage is elevated at ${metrics.memoryUsage.toFixed(0)}MB`,
      action: 'Monitor for growth over time',
    });
  }

  return recommendations;
}

// ============================================
// Debounce / Throttle Utilities
// ============================================

/**
 * Debounce a function - only execute after delay with no calls
 */
export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  delayMs: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<T>) => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn(...args);
      timeoutId = null;
    }, delayMs);
  };
}

/**
 * Throttle a function - execute at most once per interval
 */
export function throttle<T extends (...args: any[]) => any>(
  fn: T,
  intervalMs: number
): (...args: Parameters<T>) => void {
  let lastCallTime: number = 0;
  let pendingArgs: Parameters<T> | null = null;
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<T>) => {
    const now = Date.now();
    const elapsed = now - lastCallTime;

    if (elapsed >= intervalMs) {
      lastCallTime = now;
      fn(...args);
    } else {
      pendingArgs = args;
      if (timeoutId === null) {
        timeoutId = setTimeout(() => {
          lastCallTime = Date.now();
          if (pendingArgs !== null) {
            fn(...pendingArgs);
            pendingArgs = null;
          }
          timeoutId = null;
        }, intervalMs - elapsed);
      }
    }
  };
}
