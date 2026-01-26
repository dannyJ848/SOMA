/**
 * Vital Signs Correlations
 *
 * Analyze relationships between different vital signs to uncover
 * patterns and provide holistic health insights.
 */

import type {
  VitalType,
  VitalCorrelation,
  DailyVitalsSummary,
  TrendPeriod,
  VitalInsight,
} from './types.js';
import { mean, standardDeviation } from './trends.js';

// ============================================================================
// Known Clinical Correlations
// ============================================================================

export interface KnownCorrelation {
  vital1: VitalType | string;
  vital2: VitalType | string;
  expectedDirection: 'positive' | 'negative' | 'variable';
  mechanism: string;
  clinicalSignificance: string;
  strength: 'strong' | 'moderate' | 'weak';
}

export const KNOWN_CORRELATIONS: KnownCorrelation[] = [
  // HRV and Recovery
  {
    vital1: 'hrv',
    vital2: 'recovery',
    expectedDirection: 'positive',
    mechanism: 'Higher HRV indicates better parasympathetic tone and autonomic balance, which is a key component of recovery',
    clinicalSignificance: 'HRV is one of the strongest predictors of physical readiness and recovery status',
    strength: 'strong',
  },

  // Resting HR and HRV
  {
    vital1: 'heart-rate',
    vital2: 'hrv',
    expectedDirection: 'negative',
    mechanism: 'Lower resting HR typically accompanies higher HRV due to increased vagal tone',
    clinicalSignificance: 'Together they indicate cardiovascular fitness and autonomic health',
    strength: 'moderate',
  },

  // Sleep and Recovery
  {
    vital1: 'sleep',
    vital2: 'recovery',
    expectedDirection: 'positive',
    mechanism: 'Quality sleep is essential for physical and neural recovery processes',
    clinicalSignificance: 'Sleep duration and efficiency directly impact next-day recovery scores',
    strength: 'strong',
  },

  // Sleep and HRV
  {
    vital1: 'sleep',
    vital2: 'hrv',
    expectedDirection: 'positive',
    mechanism: 'Sleep allows the parasympathetic nervous system to dominate, improving HRV',
    clinicalSignificance: 'Poor sleep often manifests as suppressed HRV the following morning',
    strength: 'moderate',
  },

  // Strain and Recovery (next day)
  {
    vital1: 'strain',
    vital2: 'recovery',
    expectedDirection: 'negative',
    mechanism: 'High strain days require more recovery; excessive strain depletes recovery capacity',
    clinicalSignificance: 'Balancing strain with recovery is key to avoiding overtraining',
    strength: 'moderate',
  },

  // Resting HR and Strain
  {
    vital1: 'heart-rate',
    vital2: 'strain',
    expectedDirection: 'positive',
    mechanism: 'High strain days often lead to elevated resting HR the following day',
    clinicalSignificance: 'Elevated resting HR after rest suggests incomplete recovery',
    strength: 'weak',
  },

  // Deep Sleep and HRV
  {
    vital1: 'deepSleep',
    vital2: 'hrv',
    expectedDirection: 'positive',
    mechanism: 'Deep sleep is when the most parasympathetic activity occurs',
    clinicalSignificance: 'Lack of deep sleep often correlates with lower morning HRV',
    strength: 'moderate',
  },

  // Activity and Sleep
  {
    vital1: 'activity',
    vital2: 'sleep',
    expectedDirection: 'positive',
    mechanism: 'Regular physical activity promotes better sleep quality and duration',
    clinicalSignificance: 'Active individuals often report better sleep, but overtraining can disrupt sleep',
    strength: 'weak',
  },

  // Blood Pressure and Resting HR
  {
    vital1: 'blood-pressure',
    vital2: 'heart-rate',
    expectedDirection: 'variable',
    mechanism: 'Baroreceptor reflex creates an inverse relationship, but both can be elevated with stress',
    clinicalSignificance: 'Persistent elevation of both suggests sympathetic overdrive',
    strength: 'weak',
  },

  // Weight and Blood Pressure
  {
    vital1: 'weight',
    vital2: 'blood-pressure',
    expectedDirection: 'positive',
    mechanism: 'Higher body mass increases vascular resistance and blood volume',
    clinicalSignificance: 'Weight loss of even 5-10% can significantly reduce blood pressure',
    strength: 'moderate',
  },

  // VO2max and Resting HR
  {
    vital1: 'vo2Max',
    vital2: 'heart-rate',
    expectedDirection: 'negative',
    mechanism: 'Higher aerobic fitness leads to increased stroke volume and lower resting HR',
    clinicalSignificance: 'VO2max improvement typically accompanied by resting HR reduction',
    strength: 'strong',
  },

  // Sleep and Blood Glucose
  {
    vital1: 'sleep',
    vital2: 'blood-glucose',
    expectedDirection: 'negative',
    mechanism: 'Poor sleep impairs insulin sensitivity and glucose regulation',
    clinicalSignificance: 'Even one night of poor sleep can affect next-day glucose tolerance',
    strength: 'moderate',
  },

  // Temperature and Recovery
  {
    vital1: 'temperature',
    vital2: 'recovery',
    expectedDirection: 'negative',
    mechanism: 'Elevated temperature may indicate illness, inflammation, or hormonal changes',
    clinicalSignificance: 'Skin temperature deviations often precede other recovery changes',
    strength: 'weak',
  },

  // Respiratory Rate and HRV
  {
    vital1: 'respiratory-rate',
    vital2: 'hrv',
    expectedDirection: 'negative',
    mechanism: 'Slower, deeper breathing enhances parasympathetic activity',
    clinicalSignificance: 'Elevated respiratory rate during sleep may indicate stress or illness',
    strength: 'weak',
  },
];

// ============================================================================
// Correlation Calculation
// ============================================================================

/**
 * Calculate Pearson correlation coefficient between two arrays
 */
export function pearsonCorrelation(x: number[], y: number[]): number {
  if (x.length !== y.length || x.length < 3) {
    return 0;
  }

  const n = x.length;
  const sumX = x.reduce((a, b) => a + b, 0);
  const sumY = y.reduce((a, b) => a + b, 0);
  const sumXY = x.reduce((sum, xi, i) => sum + xi * y[i], 0);
  const sumX2 = x.reduce((sum, xi) => sum + xi * xi, 0);
  const sumY2 = y.reduce((sum, yi) => sum + yi * yi, 0);

  const numerator = n * sumXY - sumX * sumY;
  const denominator = Math.sqrt((n * sumX2 - sumX * sumX) * (n * sumY2 - sumY * sumY));

  if (denominator === 0) return 0;

  return numerator / denominator;
}

/**
 * Calculate Spearman rank correlation (more robust to outliers)
 */
export function spearmanCorrelation(x: number[], y: number[]): number {
  if (x.length !== y.length || x.length < 3) {
    return 0;
  }

  // Convert to ranks
  const rankX = calculateRanks(x);
  const rankY = calculateRanks(y);

  // Use Pearson on ranks
  return pearsonCorrelation(rankX, rankY);
}

function calculateRanks(values: number[]): number[] {
  const indexed = values.map((v, i) => ({ value: v, index: i }));
  indexed.sort((a, b) => a.value - b.value);

  const ranks = new Array(values.length);
  for (let i = 0; i < indexed.length; i++) {
    ranks[indexed[i].index] = i + 1;
  }
  return ranks;
}

/**
 * Interpret correlation strength
 */
function interpretCorrelationStrength(r: number): 'strong' | 'moderate' | 'weak' | 'none' {
  const absR = Math.abs(r);
  if (absR >= 0.7) return 'strong';
  if (absR >= 0.4) return 'moderate';
  if (absR >= 0.2) return 'weak';
  return 'none';
}

/**
 * Get correlation direction
 */
function getCorrelationDirection(r: number): 'positive' | 'negative' | 'none' {
  if (r > 0.15) return 'positive';
  if (r < -0.15) return 'negative';
  return 'none';
}

// ============================================================================
// Daily Summary Correlation Analysis
// ============================================================================

/**
 * Get period in days
 */
function getPeriodDays(period: TrendPeriod): number {
  const days: Record<TrendPeriod, number> = {
    '7d': 7,
    '14d': 14,
    '30d': 30,
    '90d': 90,
    '365d': 365,
  };
  return days[period];
}

/**
 * Filter daily summaries to a specific time period
 */
function filterSummariesByPeriod(
  summaries: DailyVitalsSummary[],
  period: TrendPeriod
): DailyVitalsSummary[] {
  const days = getPeriodDays(period);
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - days);

  return summaries.filter(s => s.date >= cutoff);
}

/**
 * Extract time series for a metric from daily summaries
 */
function extractMetricSeries(
  summaries: DailyVitalsSummary[],
  metric: keyof DailyVitalsSummary
): { values: number[]; dates: Date[] } {
  const values: number[] = [];
  const dates: Date[] = [];

  for (const summary of summaries) {
    const value = summary[metric];
    if (typeof value === 'number' && !isNaN(value)) {
      values.push(value);
      dates.push(summary.date);
    }
  }

  return { values, dates };
}

/**
 * Calculate correlation between two metrics from daily summaries
 */
export function calculateMetricCorrelation(
  summaries: DailyVitalsSummary[],
  metric1: keyof DailyVitalsSummary,
  metric2: keyof DailyVitalsSummary,
  period: TrendPeriod
): VitalCorrelation | null {
  // Filter by period
  const filtered = filterSummariesByPeriod(summaries, period);

  // Extract aligned series
  const series1 = extractMetricSeries(filtered, metric1);
  const series2 = extractMetricSeries(filtered, metric2);

  // Find common dates
  const date1Set = new Set(series1.dates.map(d => d.toISOString().split('T')[0]));
  const commonIndices1: number[] = [];
  const commonIndices2: number[] = [];

  for (let i = 0; i < series2.dates.length; i++) {
    const dateKey = series2.dates[i].toISOString().split('T')[0];
    if (date1Set.has(dateKey)) {
      const idx1 = series1.dates.findIndex(d => d.toISOString().split('T')[0] === dateKey);
      if (idx1 !== -1) {
        commonIndices1.push(idx1);
        commonIndices2.push(i);
      }
    }
  }

  if (commonIndices1.length < 7) {
    return null; // Not enough paired data
  }

  const values1 = commonIndices1.map(i => series1.values[i]);
  const values2 = commonIndices2.map(i => series2.values[i]);

  // Calculate correlation (use Spearman for robustness)
  const correlation = spearmanCorrelation(values1, values2);
  const strength = interpretCorrelationStrength(correlation);
  const direction = getCorrelationDirection(correlation);

  // Map metrics to vital types
  const metricToVitalType: Record<string, VitalType> = {
    restingHeartRate: 'heart-rate',
    averageHeartRate: 'heart-rate',
    hrv: 'hrv',
    sleepDuration: 'sleep',
    sleepEfficiency: 'sleep',
    deepSleepMinutes: 'sleep',
    remSleepMinutes: 'sleep',
    steps: 'activity',
    activeCalories: 'activity',
    recoveryScore: 'recovery',
    strainScore: 'strain',
    bloodOxygen: 'oxygen-saturation',
    respiratoryRate: 'respiratory-rate',
    weight: 'weight',
  };

  const vital1 = metricToVitalType[metric1 as string] || 'activity';
  const vital2 = metricToVitalType[metric2 as string] || 'activity';

  // Find known correlation for clinical relevance
  const known = KNOWN_CORRELATIONS.find(
    k =>
      (k.vital1 === vital1 && k.vital2 === vital2) ||
      (k.vital1 === vital2 && k.vital2 === vital1) ||
      (k.vital1 === metric1 && k.vital2 === metric2) ||
      (k.vital1 === metric2 && k.vital2 === metric1)
  );

  const interpretation = generateCorrelationInterpretation(
    metric1 as string,
    metric2 as string,
    correlation,
    strength,
    direction,
    commonIndices1.length
  );

  return {
    vital1,
    vital2,
    correlation: Math.round(correlation * 100) / 100,
    strength,
    direction,
    sampleSize: commonIndices1.length,
    period,
    interpretation,
    clinicalRelevance: known?.clinicalSignificance || 'The clinical significance of this relationship may vary by individual.',
  };
}

/**
 * Generate interpretation text for a correlation
 */
function generateCorrelationInterpretation(
  metric1: string,
  metric2: string,
  r: number,
  strength: 'strong' | 'moderate' | 'weak' | 'none',
  direction: 'positive' | 'negative' | 'none',
  sampleSize: number
): string {
  const formatMetric = (m: string) =>
    m.replace(/([A-Z])/g, ' $1').toLowerCase().trim();

  const m1 = formatMetric(metric1);
  const m2 = formatMetric(metric2);

  if (strength === 'none') {
    return `No significant correlation found between ${m1} and ${m2} in your data (${sampleSize} observations).`;
  }

  const directionPhrase = direction === 'positive'
    ? 'tend to increase together'
    : 'tend to move in opposite directions';

  return `Your ${m1} and ${m2} show a ${strength} ${direction} correlation (r=${r.toFixed(2)}). They ${directionPhrase}, based on ${sampleSize} days of data.`;
}

/**
 * Analyze all key correlations from daily summaries
 */
export function analyzeAllCorrelations(
  summaries: DailyVitalsSummary[],
  period: TrendPeriod
): VitalCorrelation[] {
  const correlations: VitalCorrelation[] = [];

  // Define metric pairs to analyze
  const metricPairs: [keyof DailyVitalsSummary, keyof DailyVitalsSummary][] = [
    ['hrv', 'recoveryScore'],
    ['restingHeartRate', 'hrv'],
    ['sleepDuration', 'recoveryScore'],
    ['sleepDuration', 'hrv'],
    ['strainScore', 'recoveryScore'],
    ['deepSleepMinutes', 'hrv'],
    ['sleepEfficiency', 'recoveryScore'],
    ['steps', 'sleepDuration'],
    ['activeCalories', 'strainScore'],
    ['restingHeartRate', 'strainScore'],
    ['sleepDuration', 'restingHeartRate'],
  ];

  for (const [m1, m2] of metricPairs) {
    const correlation = calculateMetricCorrelation(summaries, m1, m2, period);
    if (correlation && correlation.strength !== 'none') {
      correlations.push(correlation);
    }
  }

  // Sort by absolute correlation strength
  correlations.sort((a, b) => Math.abs(b.correlation) - Math.abs(a.correlation));

  return correlations;
}

// ============================================================================
// Lagged Correlations (e.g., today's strain vs tomorrow's recovery)
// ============================================================================

/**
 * Calculate correlation with a time lag
 */
export function calculateLaggedCorrelation(
  summaries: DailyVitalsSummary[],
  leadMetric: keyof DailyVitalsSummary,
  lagMetric: keyof DailyVitalsSummary,
  lagDays: number = 1
): { correlation: number; sampleSize: number } | null {
  // Sort by date
  const sorted = [...summaries].sort((a, b) => a.date.getTime() - b.date.getTime());

  const leadValues: number[] = [];
  const lagValues: number[] = [];

  for (let i = 0; i < sorted.length - lagDays; i++) {
    const leadValue = sorted[i][leadMetric];
    const lagValue = sorted[i + lagDays][lagMetric];

    if (
      typeof leadValue === 'number' &&
      typeof lagValue === 'number' &&
      !isNaN(leadValue) &&
      !isNaN(lagValue)
    ) {
      leadValues.push(leadValue);
      lagValues.push(lagValue);
    }
  }

  if (leadValues.length < 7) {
    return null;
  }

  const correlation = spearmanCorrelation(leadValues, lagValues);

  return {
    correlation: Math.round(correlation * 100) / 100,
    sampleSize: leadValues.length,
  };
}

/**
 * Analyze how strain affects next-day recovery
 */
export function analyzeStrainRecoveryRelationship(
  summaries: DailyVitalsSummary[]
): {
  correlation: number;
  insight: string;
  recommendation: string;
} | null {
  const lagged = calculateLaggedCorrelation(summaries, 'strainScore', 'recoveryScore', 1);

  if (!lagged || lagged.sampleSize < 14) {
    return null;
  }

  const r = lagged.correlation;
  let insight: string;
  let recommendation: string;

  if (r < -0.4) {
    insight = 'High strain days strongly predict lower recovery the next day in your data.';
    recommendation = 'Consider moderating high-strain days when you need to perform well the following day.';
  } else if (r < -0.2) {
    insight = 'There is a moderate relationship between your strain and next-day recovery.';
    recommendation = 'Balance high-strain days with adequate sleep and recovery practices.';
  } else if (r > 0.2) {
    insight = 'Interestingly, higher strain days are followed by better recovery in your data.';
    recommendation = 'You may recover well from activity. Ensure this pattern continues and watch for overtraining signs.';
  } else {
    insight = 'Your strain levels do not strongly predict next-day recovery.';
    recommendation = 'Focus on sleep quality and other recovery factors that may be more influential for you.';
  }

  return {
    correlation: r,
    insight,
    recommendation,
  };
}

// ============================================================================
// Correlation-Based Insights
// ============================================================================

/**
 * Generate insights from correlations
 */
export function generateCorrelationInsights(
  correlations: VitalCorrelation[]
): VitalInsight[] {
  const insights: VitalInsight[] = [];

  for (const corr of correlations) {
    if (corr.strength === 'strong') {
      const known = KNOWN_CORRELATIONS.find(
        k =>
          (k.vital1 === corr.vital1 && k.vital2 === corr.vital2) ||
          (k.vital1 === corr.vital2 && k.vital2 === corr.vital1)
      );

      // Check if correlation matches expected direction
      const matchesExpected =
        !known ||
        known.expectedDirection === 'variable' ||
        (known.expectedDirection === 'positive' && corr.direction === 'positive') ||
        (known.expectedDirection === 'negative' && corr.direction === 'negative');

      if (!matchesExpected) {
        insights.push({
          id: `correlation-unexpected-${corr.vital1}-${corr.vital2}`,
          category: 'correlation',
          title: 'Unexpected Pattern Detected',
          description: `Your ${corr.vital1} and ${corr.vital2} show an unexpected relationship. ${corr.interpretation}`,
          vitalTypes: [corr.vital1, corr.vital2],
          confidence: Math.abs(corr.correlation),
          priority: 'medium',
          actionable: true,
          action: 'Consider factors that might be influencing this unexpected pattern.',
          generatedAt: new Date(),
        });
      } else if (known) {
        insights.push({
          id: `correlation-confirmed-${corr.vital1}-${corr.vital2}`,
          category: 'correlation',
          title: 'Strong Health Correlation',
          description: `${corr.interpretation} ${known.clinicalSignificance}`,
          vitalTypes: [corr.vital1, corr.vital2],
          confidence: Math.abs(corr.correlation),
          priority: 'low',
          actionable: false,
          generatedAt: new Date(),
        });
      }
    }
  }

  return insights;
}

/**
 * Find the strongest correlations for a specific vital
 */
export function findStrongestCorrelations(
  summaries: DailyVitalsSummary[],
  targetMetric: keyof DailyVitalsSummary,
  period: TrendPeriod,
  topN: number = 3
): VitalCorrelation[] {
  const allMetrics: (keyof DailyVitalsSummary)[] = [
    'restingHeartRate',
    'averageHeartRate',
    'hrv',
    'sleepDuration',
    'sleepEfficiency',
    'deepSleepMinutes',
    'remSleepMinutes',
    'steps',
    'activeCalories',
    'recoveryScore',
    'strainScore',
    'bloodOxygen',
    'respiratoryRate',
  ];

  const correlations: VitalCorrelation[] = [];

  for (const metric of allMetrics) {
    if (metric === targetMetric) continue;

    const corr = calculateMetricCorrelation(summaries, targetMetric, metric, period);
    if (corr && corr.strength !== 'none') {
      correlations.push(corr);
    }
  }

  // Sort by absolute correlation
  correlations.sort((a, b) => Math.abs(b.correlation) - Math.abs(a.correlation));

  return correlations.slice(0, topN);
}
