/**
 * Timeline Insights Engine
 * 
 * Pattern detection and insight generation for health timeline data.
 * Generates meaningful observations like "HbA1c improved after starting metformin"
 * and "3 sinus infections since moving to humid climate".
 */

import type { TimelineEvent, EventCategory, LabResultEvent, MedicationEvent, SymptomEvent, DiagnosisEvent, MoveEvent, MedicalEventData, LifestyleEventData, LifeEventData } from './events';
import type { UserHealthProfile } from '../personalization/types';

// ============================================================================
// Insight Types
// ============================================================================

export type InsightType = 
  | 'medication-effectiveness'
  | 'lab-trend'
  | 'symptom-pattern'
  | 'lifestyle-correlation'
  | 'environmental-factor'
  | 'temporal-pattern'
  | 'severity-progression'
  | 'treatment-response';

export type InsightConfidence = 'high' | 'medium' | 'low';

export interface TimelineInsight {
  id: string;
  type: InsightType;
  title: string;
  description: string;
  confidence: InsightConfidence;
  relatedEventIds: string[];
  generatedAt: Date;
  dateRange: { start: Date; end: Date };
  actionable: boolean;
  recommendation?: string;
}

export interface CorrelationResult {
  events1: TimelineEvent[];
  events2: TimelineEvent[];
  correlationType: string;
  timeLag: number; // days between events
  strength: 'strong' | 'moderate' | 'weak';
  confidence: InsightConfidence;
}

// ============================================================================
// Lab Trend Analysis
// ============================================================================

/**
 * Analyze lab result trends over time
 */
export function analyzeLabTrends(events: TimelineEvent[]): TimelineInsight[] {
  const insights: TimelineInsight[] = [];
  
  // Group lab results by test name
  const labResultsByTest = new Map<string, TimelineEvent[]>();
  
  for (const event of events) {
    if (event.type === 'lab-result') {
      const data = event.data as LabResultEvent;
      const existing = labResultsByTest.get(data.testName) || [];
      existing.push(event);
      labResultsByTest.set(data.testName, existing);
    }
  }
  
  // Analyze trends for each test
  for (const [testName, testEvents] of Array.from(labResultsByTest)) {
    if (testEvents.length < 2) continue;
    
    // Sort by date
    const sorted = testEvents.sort((a, b) => a.date.getTime() - b.date.getTime());
    
    const firstEvent = sorted[0];
    const lastEvent = sorted[sorted.length - 1];
    const firstData = firstEvent.data as LabResultEvent;
    const lastData = lastEvent.data as LabResultEvent;
    
    // Check for significant change
    const changePercent = firstData.value !== 0 
      ? ((lastData.value - firstData.value) / Math.abs(firstData.value)) * 100 
      : 0;
    
    // Determine if change is improvement or worsening based on reference range
    const isImprovement = checkIfLabImproved(firstData, lastData);
    const isWorsening = checkIfLabWorsened(firstData, lastData);
    
    if (Math.abs(changePercent) > 10) {
      const direction = changePercent > 0 ? 'increased' : 'decreased';
      const trend = isImprovement ? 'improved' : isWorsening ? 'worsened' : direction;
      
      insights.push({
        id: `lab-trend-${testName}`,
        type: 'lab-trend',
        title: `${testName} has ${trend} over time`,
        description: `Your ${testName} ${direction} by ${Math.abs(changePercent).toFixed(1)}% from ${firstData.value} to ${lastData.value} ${firstData.unit} over ${calculateTimeSpan(firstEvent.date, lastEvent.date)}.`,
        confidence: sorted.length >= 3 ? 'high' : 'medium',
        relatedEventIds: sorted.map(e => e.id),
        generatedAt: new Date(),
        dateRange: { start: firstEvent.date, end: lastEvent.date },
        actionable: isWorsening,
        recommendation: isWorsening ? `Consider discussing your ${testName} trend with your healthcare provider.` : undefined,
      });
    }
    
    // Check for normalization (abnormal becoming normal)
    if ((firstData.status === 'high' || firstData.status === 'low') && lastData.status === 'normal') {
      insights.push({
        id: `lab-normalize-${testName}`,
        type: 'lab-trend',
        title: `${testName} normalized`,
        description: `Your ${testName} returned to normal range after being ${firstData.status} (${firstData.value} → ${lastData.value} ${firstData.unit}).`,
        confidence: 'high',
        relatedEventIds: sorted.map(e => e.id),
        generatedAt: new Date(),
        dateRange: { start: firstEvent.date, end: lastEvent.date },
        actionable: false,
      });
    }
  }
  
  return insights;
}

/**
 * Check if a lab value improved
 */
function checkIfLabImproved(first: LabResultEvent, last: LabResultEvent): boolean {
  const { low, high } = first.referenceRange;
  const midpoint = (low + high) / 2;
  
  // If first was high, decreasing is improvement
  if (first.status === 'high' && last.value < first.value) return true;
  
  // If first was low, increasing is improvement
  if (first.status === 'low' && last.value > first.value) return true;
  
  // If moving closer to midpoint
  const firstDist = Math.abs(first.value - midpoint);
  const lastDist = Math.abs(last.value - midpoint);
  if (lastDist < firstDist) return true;
  
  return false;
}

/**
 * Check if a lab value worsened
 */
function checkIfLabWorsened(first: LabResultEvent, last: LabResultEvent): boolean {
  const { low, high } = first.referenceRange;
  
  // Moving from normal to abnormal
  if (first.status === 'normal' && (last.status === 'high' || last.status === 'low')) return true;
  
  // Getting more abnormal
  if (first.status === 'high' && last.value > first.value) return true;
  if (first.status === 'low' && last.value < first.value) return true;
  
  return false;
}

// ============================================================================
// Medication Effectiveness Analysis
// ============================================================================

/**
 * Analyze medication effectiveness by looking at before/after lab values
 */
export function analyzeMedicationEffectiveness(events: TimelineEvent[]): TimelineInsight[] {
  const insights: TimelineInsight[] = [];
  
  // Find medication start events
  const medStartEvents = events.filter(e => e.type === 'medication-start');
  
  for (const medEvent of medStartEvents) {
    const medData = medEvent.data as MedicationEvent;
    const medStartDate = medEvent.date;
    
    // Look for relevant lab changes 1-6 months after starting medication
    const windowStart = new Date(medStartDate);
    windowStart.setMonth(windowStart.getMonth() + 1);
    const windowEnd = new Date(medStartDate);
    windowEnd.setMonth(windowEnd.getMonth() + 6);
    
    const relevantLabChanges: TimelineEvent[] = [];
    
    for (const event of events) {
      if (event.type !== 'lab-result') continue;
      
      const eventDate = event.date.getTime();
      if (eventDate < windowStart.getTime() || eventDate > windowEnd.getTime()) continue;
      
      const labData = event.data as LabResultEvent;
      
      // Check if this lab is relevant to the medication indication
      if (isLabRelevantToMedication(labData.testName, medData.indication || '')) {
        relevantLabChanges.push(event);
      }
    }
    
    if (relevantLabChanges.length > 0) {
      // Check for improvement
      const improvements = relevantLabChanges.filter(e => {
        const data = e.data as LabResultEvent;
        return data.trend === 'decreasing' || data.status === 'normal' || data.changePercent < -5;
      });
      
      if (improvements.length > 0) {
        const labNames = improvements.map(e => (e.data as LabResultEvent).testName).join(', ');
        insights.push({
          id: `med-effect-${medData.medicationId}`,
          type: 'medication-effectiveness',
          title: `Improvement after starting ${medData.medicationName}`,
          description: `Your ${labNames} showed improvement within ${calculateTimeSpan(medStartDate, improvements[0].date)} of starting ${medData.medicationName}${medData.indication ? ` for ${medData.indication}` : ''}.`,
          confidence: improvements.length >= 2 ? 'high' : 'medium',
          relatedEventIds: [medEvent.id, ...improvements.map(e => e.id)],
          generatedAt: new Date(),
          dateRange: { start: medStartDate, end: improvements[improvements.length - 1].date },
          actionable: false,
        });
      }
    }
  }
  
  return insights;
}

/**
 * Check if a lab test is relevant to a medication indication
 */
function isLabRelevantToMedication(labName: string, indication: string): boolean {
  const lowerLab = labName.toLowerCase();
  const lowerIndication = indication.toLowerCase();
  
  // Diabetes medications
  if (lowerIndication.includes('diabetes') || lowerIndication.includes('glucose')) {
    return lowerLab.includes('glucose') || lowerLab.includes('hba1c') || lowerLab.includes('a1c');
  }
  
  // Cholesterol medications
  if (lowerIndication.includes('cholesterol') || lowerIndication.includes('lipid')) {
    return lowerLab.includes('cholesterol') || lowerLab.includes('ldl') || lowerLab.includes('hdl') || lowerLab.includes('triglyceride');
  }
  
  // Thyroid medications
  if (lowerIndication.includes('thyroid')) {
    return lowerLab.includes('tsh') || lowerLab.includes('t4') || lowerLab.includes('t3');
  }
  
  // Blood pressure medications
  if (lowerIndication.includes('blood pressure') || lowerIndication.includes('hypertension')) {
    return lowerLab.includes('potassium') || lowerLab.includes('creatinine') || lowerLab.includes('bun');
  }
  
  // Heart failure medications
  if (lowerIndication.includes('heart failure')) {
    return lowerLab.includes('bnp') || lowerLab.includes('nt-probnp') || lowerLab.includes('potassium') || lowerLab.includes('creatinine');
  }
  
  return false;
}

// ============================================================================
// Symptom Pattern Analysis
// ============================================================================

/**
 * Analyze symptom patterns and correlations
 */
export function analyzeSymptomPatterns(events: TimelineEvent[]): TimelineInsight[] {
  const insights: TimelineInsight[] = [];
  
  // Group symptom events by name
  const symptomsByName = new Map<string, TimelineEvent[]>();
  
  for (const event of events) {
    if (event.type === 'symptom') {
      const data = event.data as SymptomEvent;
      const existing = symptomsByName.get(data.symptomName) || [];
      existing.push(event);
      symptomsByName.set(data.symptomName, existing);
    }
  }
  
  // Check for recurring symptoms
  for (const [symptomName, symptomEvents] of Array.from(symptomsByName)) {
    if (symptomEvents.length >= 3) {
      insights.push({
        id: `symptom-recurring-${symptomName}`,
        type: 'symptom-pattern',
        title: `Recurring ${symptomName}`,
        description: `You've recorded ${symptomName} ${symptomEvents.length} times. Consider tracking triggers or discussing patterns with your provider.`,
        confidence: 'high',
        relatedEventIds: symptomEvents.map(e => e.id),
        generatedAt: new Date(),
        dateRange: { 
          start: symptomEvents[0].date, 
          end: symptomEvents[symptomEvents.length - 1].date 
        },
        actionable: true,
        recommendation: 'Keep a symptom diary to identify potential triggers or patterns.',
      });
    }
    
    // Check for increasing severity
    const sortedByDate = symptomEvents.sort((a, b) => a.date.getTime() - b.date.getTime());
    const recentEvents = sortedByDate.slice(-3);
    
    if (recentEvents.length >= 2) {
      const severities = recentEvents.map(e => (e.data as SymptomEvent).severity);
      const isIncreasing = severities.every((val, i, arr) => i === 0 || val >= arr[i - 1]);
      
      if (isIncreasing && severities[severities.length - 1] >= 7) {
        insights.push({
          id: `symptom-worsening-${symptomName}`,
          type: 'severity-progression',
          title: `Worsening ${symptomName}`,
          description: `Your ${symptomName} appears to be increasing in severity (severity ${severities[0]} → ${severities[severities.length - 1]}).`,
          confidence: 'medium',
          relatedEventIds: recentEvents.map(e => e.id),
          generatedAt: new Date(),
          dateRange: { 
            start: recentEvents[0].date, 
            end: recentEvents[recentEvents.length - 1].date 
          },
          actionable: true,
          recommendation: `Consider consulting your healthcare provider about your worsening ${symptomName}.`,
        });
      }
    }
  }
  
  return insights;
}

// ============================================================================
// Environmental Factor Analysis
// ============================================================================

/**
 * Analyze correlations with environmental/life changes
 */
export function analyzeEnvironmentalFactors(events: TimelineEvent[]): TimelineInsight[] {
  const insights: TimelineInsight[] = [];
  
  // Find move events
  const moveEvents = events.filter(e => e.type === 'move');
  
  for (const moveEvent of moveEvents) {
    const moveData = moveEvent.data as MoveEvent;
    const moveDate = moveEvent.date;
    
    // Look for health changes after moving
    const windowStart = moveDate;
    const windowEnd = new Date(moveDate);
    windowEnd.setMonth(windowEnd.getMonth() + 6);
    
    const postMoveEvents: TimelineEvent[] = [];
    
    for (const event of events) {
      const eventDate = event.date.getTime();
      if (eventDate >= windowStart.getTime() && eventDate <= windowEnd.getTime()) {
        if (event.category === 'medical' && event.severity !== 'info') {
          postMoveEvents.push(event);
        }
      }
    }
    
    // Check for clusters of similar symptoms
    const symptomEvents = postMoveEvents.filter(e => e.type === 'symptom');
    const symptomNames = new Map<string, number>();
    
    for (const event of symptomEvents) {
      const name = (event.data as SymptomEvent).symptomName;
      symptomNames.set(name, (symptomNames.get(name) || 0) + 1);
    }
    
    for (const [symptomName, count] of Array.from(symptomNames)) {
      if (count >= 2) {
        insights.push({
          id: `env-move-${symptomName}`,
          type: 'environmental-factor',
          title: `${symptomName} after moving`,
          description: `You've had ${count} episodes of ${symptomName} since moving to ${moveData.toLocation}${moveData.climateChange ? ` (${moveData.climateChange} climate)` : ''}.`,
          confidence: 'medium',
          relatedEventIds: [moveEvent.id, ...symptomEvents.filter(e => 
            (e.data as SymptomEvent).symptomName === symptomName
          ).map(e => e.id)],
          generatedAt: new Date(),
          dateRange: { start: moveDate, end: windowEnd },
          actionable: true,
          recommendation: moveData.climateChange === 'more-humid' && symptomName.toLowerCase().includes('sinus') 
            ? 'Consider using a dehumidifier or discussing allergy management with your provider.'
            : 'Consider if environmental factors may be contributing to your symptoms.',
        });
      }
    }
    
    // Check for diagnosis changes
    const diagnosisEvents = postMoveEvents.filter(e => e.type === 'diagnosis');
    if (diagnosisEvents.length > 0) {
      const diagnoses = diagnosisEvents.map(e => (e.data as DiagnosisEvent).conditionName);
      insights.push({
        id: `env-move-diagnoses`,
        type: 'environmental-factor',
        title: `New diagnoses after relocation`,
        description: `You've been diagnosed with ${diagnoses.join(', ')} within 6 months of moving to ${moveData.toLocation}.`,
        confidence: 'low',
        relatedEventIds: [moveEvent.id, ...diagnosisEvents.map(e => e.id)],
        generatedAt: new Date(),
        dateRange: { start: moveDate, end: windowEnd },
        actionable: true,
        recommendation: 'Consider discussing potential environmental triggers with your healthcare provider.',
      });
    }
  }
  
  // Check for seasonal patterns
  const seasonalSymptoms = analyzeSeasonalPatterns(events);
  insights.push(...seasonalSymptoms);
  
  return insights;
}

/**
 * Analyze seasonal patterns in symptoms
 */
function analyzeSeasonalPatterns(events: TimelineEvent[]): TimelineInsight[] {
  const insights: TimelineInsight[] = [];
  
  const symptomEvents = events.filter(e => e.type === 'symptom');
  const symptomsByMonth = new Map<number, Map<string, number>>();
  
  for (const event of symptomEvents) {
    const month = event.date.getMonth();
    const symptomName = (event.data as SymptomEvent).symptomName;
    
    if (!symptomsByMonth.has(month)) {
      symptomsByMonth.set(month, new Map());
    }
    
    const monthSymptoms = symptomsByMonth.get(month)!;
    monthSymptoms.set(symptomName, (monthSymptoms.get(symptomName) || 0) + 1);
  }
  
  // Find symptoms that occur disproportionately in certain months
  for (const [month, symptoms] of symptomsByMonth) {
    for (const [symptomName, count] of symptoms) {
      if (count >= 2) {
        const monthName = new Date(2000, month, 1).toLocaleString('default', { month: 'long' });
        insights.push({
          id: `seasonal-${symptomName}-${month}`,
          type: 'temporal-pattern',
          title: `Seasonal ${symptomName} pattern`,
          description: `You've experienced ${symptomName} ${count} times in ${monthName}. This may indicate a seasonal trigger.`,
          confidence: 'medium',
          relatedEventIds: symptomEvents
            .filter(e => (e.data as SymptomEvent).symptomName === symptomName && e.date.getMonth() === month)
            .map(e => e.id),
          generatedAt: new Date(),
          dateRange: { start: new Date(2000, month, 1), end: new Date(2000, month, 28) },
          actionable: true,
          recommendation: `Consider preventive measures before ${monthName} each year.`,
        });
      }
    }
  }
  
  return insights;
}

// ============================================================================
// Lifestyle Correlation Analysis
// ============================================================================

/**
 * Analyze correlations between lifestyle changes and health outcomes
 */
export function analyzeLifestyleCorrelations(events: TimelineEvent[]): TimelineInsight[] {
  const insights: TimelineInsight[] = [];
  
  // Find exercise streak events
  const exerciseEvents = events.filter(e => e.type === 'exercise-streak');
  
  for (const exerciseEvent of exerciseEvents) {
    const exerciseDate = exerciseEvent.date;
    const exerciseData = exerciseEvent.data as { streakDays: number; activityType: string };
    
    // Look for positive health changes after consistent exercise
    const windowEnd = new Date(exerciseDate);
    windowEnd.setMonth(windowEnd.getMonth() + 3);
    
    const subsequentLabs = events.filter(e => {
      if (e.type !== 'lab-result') return false;
      const eventTime = e.date.getTime();
      return eventTime >= exerciseDate.getTime() && eventTime <= windowEnd.getTime();
    });
    
    // Check for improvements in relevant labs
    const improvingLabs = subsequentLabs.filter(e => {
      const data = e.data as LabResultEvent;
      return data.trend === 'decreasing' && 
        (data.testName.toLowerCase().includes('cholesterol') || 
         data.testName.toLowerCase().includes('ldl') ||
         data.testName.toLowerCase().includes('glucose') ||
         data.testName.toLowerCase().includes('a1c'));
    });
    
    if (improvingLabs.length > 0 && exerciseData.streakDays >= 30) {
      const labNames = improvingLabs.map(e => (e.data as LabResultEvent).testName).join(', ');
      insights.push({
        id: `lifestyle-exercise-${exerciseEvent.id}`,
        type: 'lifestyle-correlation',
        title: 'Exercise correlates with health improvements',
        description: `Your ${labNames} improved after maintaining a ${exerciseData.streakDays}-day ${exerciseData.activityType} streak.`,
        confidence: 'medium',
        relatedEventIds: [exerciseEvent.id, ...improvingLabs.map(e => e.id)],
        generatedAt: new Date(),
        dateRange: { start: exerciseDate, end: windowEnd },
        actionable: false,
      });
    }
  }
  
  // Find diet change events
  const dietEvents = events.filter(e => e.type === 'diet-change');
  
  for (const dietEvent of dietEvents) {
    const dietData = dietEvent.data as { dietType: string; changeDirection: string };
    
    if (dietData.changeDirection === 'started') {
      const dietDate = dietEvent.date;
      const windowEnd = new Date(dietDate);
      windowEnd.setMonth(windowEnd.getMonth() + 3);
      
      // Check for weight changes
      const weightEvents = events.filter(e => {
        if (e.type !== 'weight-change') return false;
        const eventTime = e.date.getTime();
        return eventTime >= dietDate.getTime() && eventTime <= windowEnd.getTime();
      });
      
      if (weightEvents.length > 0) {
        const firstWeight = weightEvents[0].data as { weight: number };
        const lastWeight = weightEvents[weightEvents.length - 1].data as { weight: number };
        const weightChange = lastWeight.weight - firstWeight.weight;
        
        if (weightChange < 0) {
          insights.push({
            id: `lifestyle-diet-${dietEvent.id}`,
            type: 'lifestyle-correlation',
            title: 'Diet change correlates with weight loss',
            description: `You lost ${Math.abs(weightChange).toFixed(1)} lbs after starting the ${dietData.dietType} diet.`,
            confidence: 'medium',
            relatedEventIds: [dietEvent.id, ...weightEvents.map(e => e.id)],
            generatedAt: new Date(),
            dateRange: { start: dietDate, end: windowEnd },
            actionable: false,
          });
        }
      }
    }
  }
  
  return insights;
}

// ============================================================================
// Treatment Response Analysis
// ============================================================================

/**
 * Analyze response to treatments (procedures, surgeries)
 */
export function analyzeTreatmentResponse(events: TimelineEvent[]): TimelineInsight[] {
  const insights: TimelineInsight[] = [];
  
  // Find procedure/surgery events
  const treatmentEvents = events.filter(e => 
    e.type === 'procedure' || e.type === 'surgery'
  );
  
  for (const treatmentEvent of treatmentEvents) {
    const treatmentDate = treatmentEvent.date;
    const treatmentData = treatmentEvent.data as { procedureName: string; outcome?: string };
    
    // Look for symptom resolution after treatment
    const windowEnd = new Date(treatmentDate);
    windowEnd.setMonth(windowEnd.getMonth() + 6);
    
    const resolvedSymptoms = events.filter(e => {
      if (e.type !== 'symptom') return false;
      const data = e.data as { resolved?: boolean; resolutionDate?: Date };
      if (!data.resolved || !data.resolutionDate) return false;
      const resolutionTime = data.resolutionDate.getTime();
      return resolutionTime >= treatmentDate.getTime() && resolutionTime <= windowEnd.getTime();
    });
    
    if (resolvedSymptoms.length > 0) {
      const symptomNames = resolvedSymptoms.map(e => 
        (e.data as SymptomEvent).symptomName
      ).join(', ');
      
      insights.push({
        id: `treatment-response-${treatmentEvent.id}`,
        type: 'treatment-response',
        title: `Symptom resolution after ${treatmentData.procedureName}`,
        description: `Your ${symptomNames} resolved following your ${treatmentData.procedureName}.`,
        confidence: 'medium',
        relatedEventIds: [treatmentEvent.id, ...resolvedSymptoms.map(e => e.id)],
        generatedAt: new Date(),
        dateRange: { start: treatmentDate, end: windowEnd },
        actionable: false,
      });
    }
  }
  
  return insights;
}

// ============================================================================
// Main Insight Generation
// ============================================================================

/**
 * Generate all insights from timeline events
 */
export function generateInsights(events: TimelineEvent[]): TimelineInsight[] {
  const allInsights: TimelineInsight[] = [];
  
  // Run all analysis functions
  allInsights.push(...analyzeLabTrends(events));
  allInsights.push(...analyzeMedicationEffectiveness(events));
  allInsights.push(...analyzeSymptomPatterns(events));
  allInsights.push(...analyzeEnvironmentalFactors(events));
  allInsights.push(...analyzeLifestyleCorrelations(events));
  allInsights.push(...analyzeTreatmentResponse(events));
  
  // Sort by confidence (high first) then by date
  allInsights.sort((a, b) => {
    const confidenceOrder = { high: 0, medium: 1, low: 2 };
    if (confidenceOrder[a.confidence] !== confidenceOrder[b.confidence]) {
      return confidenceOrder[a.confidence] - confidenceOrder[b.confidence];
    }
    return b.dateRange.end.getTime() - a.dateRange.end.getTime();
  });
  
  // Remove duplicate insights (same type and related events)
  const seen = new Set<string>();
  const uniqueInsights: TimelineInsight[] = [];
  
  for (const insight of allInsights) {
    const key = `${insight.type}-${insight.relatedEventIds.sort().join(',')}`;
    if (!seen.has(key)) {
      seen.add(key);
      uniqueInsights.push(insight);
    }
  }
  
  return uniqueInsights;
}

/**
 * Get actionable insights only
 */
export function getActionableInsights(insights: TimelineInsight[]): TimelineInsight[] {
  return insights.filter(i => i.actionable && i.recommendation);
}

/**
 * Get insights by type
 */
export function getInsightsByType(insights: TimelineInsight[], type: InsightType): TimelineInsight[] {
  return insights.filter(i => i.type === type);
}

/**
 * Get insights for a specific time period
 */
export function getInsightsForPeriod(
  insights: TimelineInsight[],
  startDate: Date,
  endDate: Date
): TimelineInsight[] {
  return insights.filter(i => 
    i.dateRange.start >= startDate && i.dateRange.end <= endDate
  );
}

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Calculate time span between two dates
 */
function calculateTimeSpan(start: Date, end: Date): string {
  const diffMs = end.getTime() - start.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  
  if (diffDays < 30) {
    return `${diffDays} days`;
  }
  
  const diffMonths = Math.floor(diffDays / 30);
  if (diffMonths < 12) {
    return `${diffMonths} month${diffMonths > 1 ? 's' : ''}`;
  }
  
  const diffYears = Math.floor(diffMonths / 12);
  const remainingMonths = diffMonths % 12;
  
  if (remainingMonths === 0) {
    return `${diffYears} year${diffYears > 1 ? 's' : ''}`;
  }
  
  return `${diffYears} year${diffYears > 1 ? 's' : ''} and ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`;
}

/**
 * Export insights to JSON
 */
export function exportInsights(insights: TimelineInsight[]): string {
  return JSON.stringify(insights, null, 2);
}

/**
 * Generate insight summary text for export
 */
export function generateInsightSummary(insights: TimelineInsight[]): string {
  const lines: string[] = [];
  lines.push('Health Timeline Insights');
  lines.push('='.repeat(50));
  lines.push('');
  
  const actionable = getActionableInsights(insights);
  if (actionable.length > 0) {
    lines.push('Actionable Insights');
    lines.push('-'.repeat(30));
    for (const insight of actionable) {
      lines.push(`• ${insight.title}`);
      lines.push(`  ${insight.description}`);
      lines.push(`  Recommendation: ${insight.recommendation}`);
      lines.push('');
    }
  }
  
  lines.push('All Insights');
  lines.push('-'.repeat(30));
  for (const insight of insights) {
    lines.push(`[${insight.confidence.toUpperCase()}] ${insight.title}`);
    lines.push(`  ${insight.description}`);
    lines.push('');
  }
  
  return lines.join('\n');
}
