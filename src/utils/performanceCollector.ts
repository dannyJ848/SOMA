/**
 * Performance Monitoring Utilities
 * Collects and reports performance metrics for the application
 */

export interface PerformanceMetric {
  name: string;
  value: number;
  timestamp: number;
  metadata?: Record<string, unknown>;
}

class PerformanceCollector {
  private metrics: PerformanceMetric[] = [];
  private marks: Map<string, number> = new Map();

  startMark(name: string): void {
    this.marks.set(name, performance.now());
  }

  endMark(name: string, metadata?: Record<string, unknown>): void {
    const startTime = this.marks.get(name);
    if (startTime === undefined) {
      console.warn(`No start mark found for: ${name}`);
      return;
    }

    const duration = performance.now() - startTime;
    this.metrics.push({
      name,
      value: duration,
      timestamp: Date.now(),
      metadata,
    });
    this.marks.delete(name);
  }

  recordMetric(name: string, value: number, metadata?: Record<string, unknown>): void {
    this.metrics.push({
      name,
      value,
      timestamp: Date.now(),
      metadata,
    });
  }

  getMetrics(name?: string): PerformanceMetric[] {
    if (name) {
      return this.metrics.filter((m) => m.name === name);
    }
    return [...this.metrics];
  }

  getAverageMetric(name: string): number | null {
    const filtered = this.metrics.filter((m) => m.name === name);
    if (filtered.length === 0) return null;

    const sum = filtered.reduce((acc, m) => acc + m.value, 0);
    return sum / filtered.length;
  }

  clear(): void {
    this.metrics = [];
    this.marks.clear();
  }
}

export const performanceCollector = new PerformanceCollector();

// Utility function to wrap async functions with performance tracking
export function withPerformanceTracking<T extends (...args: unknown[]) => Promise<unknown>>(
  fn: T,
  metricName: string
): T {
  return (async (...args: unknown[]) => {
    performanceCollector.startMark(metricName);
    try {
      const result = await fn(...args);
      performanceCollector.endMark(metricName);
      return result;
    } catch (error) {
      performanceCollector.endMark(metricName, { error: true });
      throw error;
    }
  }) as T;
}
