/**
 * Lab Trend Analysis Store
 * Temporal analysis and prediction for lab values
 */

import type {
  LabTrend,
  TrendDataPoint,
  TrendAlert,
  TrendPrediction,
  TrendAnalysisState,
  AlertThreshold,
  ComparisonAnalysis,
  ClinicalSignificance,
} from './types';

class TrendAnalysisStore {
  private state: TrendAnalysisState = {
    trends: new Map(),
    alertThresholds: new Map(),
    activeAlerts: [],
  };

  private listeners: Set<() => void> = new Set();

  constructor() {
    this.initializeDefaultThresholds();
  }

  private initializeDefaultThresholds() {
    const thresholds: AlertThreshold[] = [
      { parameter: 'Hemoglobin', criticalLow: 7, warningLow: 10, warningHigh: 17, criticalHigh: 20 },
      { parameter: 'Sodium', criticalLow: 120, warningLow: 130, warningHigh: 150, criticalHigh: 160 },
      { parameter: 'Potassium', criticalLow: 2.5, warningLow: 3.5, warningHigh: 5.5, criticalHigh: 7 },
      { parameter: 'Creatinine', warningHigh: 1.5, criticalHigh: 3 },
      { parameter: 'Glucose', criticalLow: 50, warningLow: 70, warningHigh: 180, criticalHigh: 400 },
      { parameter: 'Bilirubin', warningHigh: 2, criticalHigh: 5 },
      { parameter: 'INR', warningHigh: 3, criticalHigh: 5 },
    ];

    thresholds.forEach(t => this.state.alertThresholds.set(t.parameter, t));
  }

  // Trend creation and analysis
  createTrend(parameter: string, unit: string, dataPoints: TrendDataPoint[]): LabTrend {
    const direction = this.calculateDirection(dataPoints);
    const rateOfChange = this.calculateRateOfChange(dataPoints);
    const significance = this.assessSignificance(parameter, dataPoints);
    const alerts = this.generateAlerts(parameter, dataPoints);
    const predictions = this.generatePredictions(parameter, dataPoints);

    const trend: LabTrend = {
      id: `${parameter}-${Date.now()}`,
      parameter,
      unit,
      dataPoints,
      direction,
      rateOfChange,
      significance,
      interpretation: this.generateInterpretation(parameter, direction, significance, rateOfChange),
      alerts,
      predictions,
    };

    this.state.trends.set(trend.id, trend);
    this.state.activeAlerts.push(...alerts);
    this.notify();
    
    return trend;
  }

  private calculateDirection(points: TrendDataPoint[]): import('./types').TrendDirection {
    if (points.length < 2) return 'stable';

    const values = points.map(p => p.value);
    const first = values[0];
    const last = values[values.length - 1];
    
    // Calculate simple linear regression slope
    const n = values.length;
    const indices = Array.from({ length: n }, (_, i) => i);
    const sumX = indices.reduce((a, b) => a + b, 0);
    const sumY = values.reduce((a, b) => a + b, 0);
    const sumXY = indices.reduce((sum, x, i) => sum + x * values[i], 0);
    const sumX2 = indices.reduce((sum, x) => sum + x * x, 0);
    
    const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    
    // Calculate R² to determine confidence
    const meanY = sumY / n;
    const ssTotal = values.reduce((sum, y) => sum + Math.pow(y - meanY, 2), 0);
    const ssResidual = values.reduce((sum, y, i) => {
      const predicted = first + slope * i;
      return sum + Math.pow(y - predicted, 2);
    }, 0);
    const rSquared = 1 - (ssResidual / ssTotal);

    if (rSquared < 0.3) return 'fluctuating';
    
    const threshold = 0.01; // Minimum slope threshold
    if (Math.abs(slope) < threshold) return 'stable';
    if (slope > threshold * 2) return 'accelerating';
    if (slope > threshold) return 'increasing';
    return 'decreasing';
  }

  private calculateRateOfChange(points: TrendDataPoint[]): number {
    if (points.length < 2) return 0;
    
    const values = points.map(p => p.value);
    const first = values[0];
    const last = values[values.length - 1];
    
    // Calculate percent change per day
    const firstDate = new Date(points[0].date);
    const lastDate = new Date(points[points.length - 1].date);
    const daysDiff = (lastDate.getTime() - firstDate.getTime()) / (1000 * 60 * 60 * 24);
    
    if (daysDiff === 0) return 0;
    
    const percentChange = ((last - first) / Math.abs(first)) * 100;
    return percentChange / daysDiff;
  }

  private assessSignificance(parameter: string, points: TrendDataPoint[]): ClinicalSignificance {
    const threshold = this.state.alertThresholds.get(parameter);
    if (!threshold) return 'none';

    const latest = points[points.length - 1];
    
    // Check critical thresholds
    if (threshold.criticalLow !== undefined && latest.value <= threshold.criticalLow) return 'critical';
    if (threshold.criticalHigh !== undefined && latest.value >= threshold.criticalHigh) return 'critical';
    
    // Check warning thresholds
    if (threshold.warningLow !== undefined && latest.value <= threshold.warningLow) return 'significant';
    if (threshold.warningHigh !== undefined && latest.value >= threshold.warningHigh) return 'significant';
    
    // Check for rapid change
    const rate = Math.abs(this.calculateRateOfChange(points));
    if (threshold.maxRateOfChange && rate > threshold.maxRateOfChange) return 'significant';
    
    return 'none';
  }

  private generateAlerts(parameter: string, points: TrendDataPoint[]): TrendAlert[] {
    const alerts: TrendAlert[] = [];
    const latest = points[points.length - 1];
    const threshold = this.state.alertThresholds.get(parameter);

    if (!threshold) return alerts;

    // Check threshold crossings
    if (threshold.criticalLow !== undefined && latest.value <= threshold.criticalLow) {
      alerts.push({
        type: 'threshold-crossed',
        severity: 'high',
        message: `${parameter} critically low: ${latest.value}`,
        triggeredAt: latest.date,
      });
    }
    
    if (threshold.criticalHigh !== undefined && latest.value >= threshold.criticalHigh) {
      alerts.push({
        type: 'threshold-crossed',
        severity: 'high',
        message: `${parameter} critically high: ${latest.value}`,
        triggeredAt: latest.date,
      });
    }

    // Check for new abnormality
    if (points.length >= 2) {
      const previous = points[points.length - 2];
      if (previous.status === 'normal' && latest.status !== 'normal') {
        alerts.push({
          type: 'new-abnormal',
          severity: latest.status === 'critical' ? 'high' : 'medium',
          message: `${parameter} newly abnormal: ${latest.value}`,
          triggeredAt: latest.date,
        });
      }
    }

    // Check for rapid change
    const rate = Math.abs(this.calculateRateOfChange(points));
    if (threshold.maxRateOfChange && rate > threshold.maxRateOfChange) {
      alerts.push({
        type: 'rapid-change',
        severity: 'high',
        message: `${parameter} changing rapidly (${rate.toFixed(1)}%/day)`,
        triggeredAt: latest.date,
      });
    }

    // Check for persistent abnormality
    const abnormalPoints = points.filter(p => p.status !== 'normal');
    if (abnormalPoints.length >= 3) {
      const daysAbnormal = abnormalPoints.length;
      alerts.push({
        type: 'persistent-abnormal',
        severity: 'medium',
        message: `${parameter} abnormal for ${daysAbnormal} measurements`,
        triggeredAt: latest.date,
      });
    }

    return alerts;
  }

  private generatePredictions(parameter: string, points: TrendDataPoint[]): TrendPrediction[] {
    const predictions: TrendPrediction[] = [];
    
    if (points.length < 3) return predictions;

    const rate = this.calculateRateOfChange(points);
    const latest = points[points.length - 1];
    
    // 1-week prediction
    const oneWeekValue = latest.value + (rate * 7 * latest.value / 100);
    predictions.push({
      timeframe: '1 week',
      predictedValue: Math.round(oneWeekValue * 100) / 100,
      confidence: Math.min(0.9, points.length * 0.1),
      clinicalImplication: this.getPredictionImplication(parameter, oneWeekValue),
    });

    // 1-month prediction (less confident)
    const oneMonthValue = latest.value + (rate * 30 * latest.value / 100);
    predictions.push({
      timeframe: '1 month',
      predictedValue: Math.round(oneMonthValue * 100) / 100,
      confidence: Math.min(0.7, points.length * 0.05),
      clinicalImplication: this.getPredictionImplication(parameter, oneMonthValue),
    });

    return predictions;
  }

  private getPredictionImplication(parameter: string, value: number): string {
    const threshold = this.state.alertThresholds.get(parameter);
    if (!threshold) return 'Monitor trend';

    if (threshold.criticalLow !== undefined && value <= threshold.criticalLow) {
      return `Projected to reach critically low levels. Intervention recommended.`;
    }
    if (threshold.criticalHigh !== undefined && value >= threshold.criticalHigh) {
      return `Projected to reach critically high levels. Intervention recommended.`;
    }
    if (threshold.warningLow !== undefined && value <= threshold.warningLow) {
      return `Projected to become significantly abnormal. Consider intervention.`;
    }
    if (threshold.warningHigh !== undefined && value >= threshold.warningHigh) {
      return `Projected to become significantly abnormal. Consider intervention.`;
    }
    
    return 'Projected to remain within acceptable range';
  }

  private generateInterpretation(parameter: string, direction: import('./types').TrendDirection, significance: ClinicalSignificance, rate: number): string {
    const significanceText = significance === 'critical' ? 'critical' : 
                            significance === 'significant' ? 'significant' : 'stable';
    
    const directionText = direction === 'increasing' ? 'rising' :
                         direction === 'decreasing' ? 'falling' :
                         direction === 'accelerating' ? 'rapidly changing' :
                         direction === 'fluctuating' ? 'fluctuating' : 'stable';

    return `${parameter} is ${directionText} with ${significanceText} clinical significance (${rate.toFixed(1)}%/day)`;
  }

  // Comparison analysis
  compareToBaseline(current: TrendDataPoint, baselineDate: string): ComparisonAnalysis | null {
    const baselineTrend = Array.from(this.state.trends.values())
      .find(t => t.parameter === current.parameter);
    
    if (!baselineTrend) return null;

    const baseline = baselineTrend.dataPoints.find(p => p.date === baselineDate);
    if (!baseline) return null;

    const absoluteChange = current.value - baseline.value;
    const percentChange = (absoluteChange / Math.abs(baseline.value)) * 100;
    
    const baselineTime = new Date(baselineDate).getTime();
    const currentTime = new Date(current.date).getTime();
    const daysElapsed = (currentTime - baselineTime) / (1000 * 60 * 60 * 24);

    let significance: ClinicalSignificance = 'none';
    if (Math.abs(percentChange) > 50) significance = 'critical';
    else if (Math.abs(percentChange) > 25) significance = 'significant';
    else if (Math.abs(percentChange) > 10) significance = 'mild';

    return {
      baseline,
      current,
      percentChange,
      absoluteChange,
      timeElapsed: `${Math.round(daysElapsed)} days`,
      significance,
    };
  }

  // Queries
  getTrend(id: string): LabTrend | undefined {
    return this.state.trends.get(id);
  }

  getTrendsByParameter(parameter: string): LabTrend[] {
    return Array.from(this.state.trends.values())
      .filter(t => t.parameter === parameter);
  }

  getAllTrends(): LabTrend[] {
    return Array.from(this.state.trends.values());
  }

  getActiveAlerts(): TrendAlert[] {
    return this.state.activeAlerts;
  }

  getAlertsBySeverity(severity: 'low' | 'medium' | 'high'): TrendAlert[] {
    return this.state.activeAlerts.filter(a => a.severity === severity);
  }

  // Threshold management
  setThreshold(parameter: string, threshold: AlertThreshold) {
    this.state.alertThresholds.set(parameter, threshold);
    this.notify();
  }

  getThreshold(parameter: string): AlertThreshold | undefined {
    return this.state.alertThresholds.get(parameter);
  }

  getState(): TrendAnalysisState {
    return { ...this.state };
  }

  subscribe(listener: () => void): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private notify() {
    this.listeners.forEach(l => l());
  }
}

export const trendAnalysisStore = new TrendAnalysisStore();
export type { TrendAnalysisState };
