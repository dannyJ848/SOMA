/**
 * Timeline Event Types
 * 
 * Comprehensive type definitions for all health timeline events
 * including medical, lifestyle, life events, and milestones.
 */

import type { UnlockedAchievement } from '../gamification';

// ============================================================================
// Event Categories & Severities
// ============================================================================

export type EventCategory = 
  | 'medical'
  | 'lifestyle'
  | 'life-event'
  | 'milestone';

export type EventSeverity =
  | 'critical'
  | 'high'
  | 'moderate'
  | 'low'
  | 'info';

export type EventStatus =
  | 'active'
  | 'resolved'
  | 'ongoing'
  | 'scheduled'
  | 'cancelled';

// ============================================================================
// Medical Event Types
// ============================================================================

export type MedicalEventType =
  | 'lab-result'
  | 'diagnosis'
  | 'medication-start'
  | 'medication-stop'
  | 'medication-change'
  | 'procedure'
  | 'surgery'
  | 'symptom'
  | 'vaccination'
  | 'imaging'
  | 'consultation'
  | 'hospitalization'
  | 'emergency-visit'
  | 'allergy-identified';

export interface LabResultEvent {
  type: 'lab-result';
  testName: string;
  value: number;
  unit: string;
  referenceRange: { low: number; high: number };
  status: 'low' | 'normal' | 'high' | 'critical';
  trend?: 'increasing' | 'decreasing' | 'stable';
  previousValue?: number;
  changePercent?: number;
  labId: string;
  collectedBy?: string;
  notes?: string;
}

export interface DiagnosisEvent {
  type: 'diagnosis';
  conditionName: string;
  icdCode?: string;
  diagnosedBy?: string;
  severity?: 'mild' | 'moderate' | 'severe';
  status: 'active' | 'resolved' | 'chronic';
  relatedSymptoms?: string[];
  notes?: string;
}

export interface MedicationEvent {
  type: 'medication-start' | 'medication-stop' | 'medication-change';
  medicationName: string;
  genericName?: string;
  dose?: string;
  frequency?: string;
  indication?: string;
  prescribedBy?: string;
  reasonForChange?: string;
  sideEffects?: string[];
  effectiveness?: 'excellent' | 'good' | 'moderate' | 'poor';
  medicationId: string;
}

export interface ProcedureEvent {
  type: 'procedure' | 'surgery';
  procedureName: string;
  performedBy?: string;
  facility?: string;
  outcome?: 'success' | 'complication' | 'pending';
  complications?: string[];
  followUpRequired?: boolean;
  followUpDate?: Date;
  notes?: string;
}

export interface SymptomEvent {
  type: 'symptom';
  symptomName: string;
  severity: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  duration?: string;
  triggers?: string[];
  relievingFactors?: string[];
  associatedSymptoms?: string[];
  resolved?: boolean;
  resolutionDate?: Date;
}

export interface VaccinationEvent {
  type: 'vaccination';
  vaccineName: string;
  doseNumber?: number;
  totalDoses?: number;
  administeredBy?: string;
  lotNumber?: string;
  site?: string;
  sideEffects?: string[];
}

export interface ImagingEvent {
  type: 'imaging';
  imagingType: 'x-ray' | 'ct' | 'mri' | 'ultrasound' | 'pet' | 'mammogram' | 'dexa' | 'other';
  bodyPart: string;
  findings?: string;
  impression?: string;
  orderedBy?: string;
  facility?: string;
  contrastUsed?: boolean;
  significantFinding?: boolean;
}

export interface ConsultationEvent {
  type: 'consultation' | 'hospitalization' | 'emergency-visit';
  providerType: string;
  providerName?: string;
  facility?: string;
  reason: string;
  findings?: string;
  recommendations?: string[];
  dischargeDate?: Date;
  lengthOfStay?: number; // days
}

export interface AllergyEvent {
  type: 'allergy-identified';
  allergen: string;
  reactionType: 'mild' | 'moderate' | 'severe' | 'anaphylaxis';
  symptoms: string[];
  identifiedBy?: string;
}

export type MedicalEventData =
  | LabResultEvent
  | DiagnosisEvent
  | MedicationEvent
  | ProcedureEvent
  | SymptomEvent
  | VaccinationEvent
  | ImagingEvent
  | ConsultationEvent
  | AllergyEvent;

// ============================================================================
// Lifestyle Event Types
// ============================================================================

export type LifestyleEventType =
  | 'exercise-streak'
  | 'diet-change'
  | 'sleep-pattern'
  | 'weight-change'
  | 'stress-level'
  | 'habit-start'
  | 'habit-stop'
  | 'wellness-activity'
  | 'device-sync';

export interface ExerciseStreakEvent {
  type: 'exercise-streak';
  activityType: string;
  streakDays: number;
  totalSessions?: number;
  averageDuration?: number; // minutes
  caloriesBurned?: number;
  personalRecord?: boolean;
}

export interface DietChangeEvent {
  type: 'diet-change';
  dietType: string;
  changeDirection: 'started' | 'stopped' | 'modified';
  reason?: string;
  goals?: string[];
  adherenceRate?: number; // percentage
}

export interface SleepPatternEvent {
  type: 'sleep-pattern';
  metric: 'average-duration' | 'quality-score' | 'consistency' | 'bedtime';
  value: number;
  unit: string;
  trend: 'improving' | 'worsening' | 'stable';
  sleepScore?: number;
}

export interface WeightChangeEvent {
  type: 'weight-change';
  weight: number;
  unit: 'lbs' | 'kg';
  changeFromPrevious: number;
  bmi?: number;
  bodyFatPercent?: number;
  goalProgress?: number; // percentage toward goal
}

export interface StressLevelEvent {
  type: 'stress-level';
  level: 'low' | 'moderate' | 'high' | 'severe';
  triggers?: string[];
  copingStrategies?: string[];
  duration?: string;
}

export interface HabitEvent {
  type: 'habit-start' | 'habit-stop';
  habitName: string;
  category: 'health' | 'wellness' | 'productivity' | 'social' | 'other';
  motivation?: string;
  success?: boolean;
}

export interface WellnessActivityEvent {
  type: 'wellness-activity';
  activityType: 'meditation' | 'yoga' | 'therapy' | 'massage' | 'sauna' | 'other';
  duration: number; // minutes
  provider?: string;
  benefits?: string[];
}

export interface DeviceSyncEvent {
  type: 'device-sync';
  deviceType: 'fitness-tracker' | 'smartwatch' | 'smart-scale' | 'bp-monitor' | 'glucose-monitor' | 'other';
  deviceName: string;
  dataPoints: number;
  dateRange: { start: Date; end: Date };
}

export type LifestyleEventData =
  | ExerciseStreakEvent
  | DietChangeEvent
  | SleepPatternEvent
  | WeightChangeEvent
  | StressLevelEvent
  | HabitEvent
  | WellnessActivityEvent
  | DeviceSyncEvent;

// ============================================================================
// Life Event Types
// ============================================================================

export type LifeEventType =
  | 'birth'
  | 'death'
  | 'pregnancy'
  | 'birth-given'
  | 'miscarriage'
  | 'marriage'
  | 'divorce'
  | 'move'
  | 'job-change'
  | 'retirement'
  | 'travel'
  | 'trauma'
  | 'accident'
  | 'natural-disaster'
  | 'financial-stress'
  | 'relationship-change'
  | 'caregiving-start'
  | 'caregiving-end';

export interface BirthEvent {
  type: 'birth';
  // User's own birth - minimal details
}

export interface DeathEvent {
  type: 'death';
  relationship: string;
  personName?: string;
  impact: 'minimal' | 'moderate' | 'significant' | 'severe';
  griefSupport?: boolean;
}

export interface PregnancyEvent {
  type: 'pregnancy' | 'birth-given' | 'miscarriage';
  stage?: 'first-trimester' | 'second-trimester' | 'third-trimester' | 'postpartum';
  dueDate?: Date;
  complications?: string[];
  babyBirthDate?: Date;
  babyWeight?: number;
  babyGender?: 'male' | 'female';
}

export interface MoveEvent {
  type: 'move';
  fromLocation: string;
  toLocation: string;
  reason?: 'work' | 'family' | 'health' | 'lifestyle' | 'financial' | 'other';
  climateChange?: 'similar' | 'colder' | 'warmer' | 'drier' | 'more-humid';
  altitudeChange?: 'same' | 'higher' | 'lower';
}

export interface JobChangeEvent {
  type: 'job-change' | 'retirement';
  newRole?: string;
  company?: string;
  changeType: 'promotion' | 'new-job' | 'laid-off' | 'quit' | 'retirement';
  stressLevel?: 'low' | 'moderate' | 'high';
  workLifeBalance?: 'better' | 'worse' | 'same';
}

export interface TravelEvent {
  type: 'travel';
  destination: string;
  duration: number; // days
  purpose: 'leisure' | 'business' | 'medical' | 'family';
  illnesses?: string[]; // Any illnesses contracted
  vaccinations?: string[];
}

export interface TraumaEvent {
  type: 'trauma' | 'accident' | 'natural-disaster';
  description: string;
  severity: 'mild' | 'moderate' | 'severe';
  injuries?: string[];
  psychologicalImpact?: boolean;
  therapyReceived?: boolean;
}

export interface RelationshipChangeEvent {
  type: 'marriage' | 'divorce' | 'relationship-change';
  relationshipStatus: string;
  impact: 'positive' | 'negative' | 'neutral';
  stressLevel?: 'low' | 'moderate' | 'high';
}

export interface CaregivingEvent {
  type: 'caregiving-start' | 'caregiving-end';
  careRecipient: string;
  relationship: string;
  condition?: string;
  duration?: number; // days
  impact?: 'minimal' | 'moderate' | 'significant' | 'severe';
}

export type LifeEventData =
  | BirthEvent
  | DeathEvent
  | PregnancyEvent
  | MoveEvent
  | JobChangeEvent
  | TravelEvent
  | TraumaEvent
  | RelationshipChangeEvent
  | CaregivingEvent;

// ============================================================================
// Milestone Event Types
// ============================================================================

export type MilestoneEventType = 'achievement' | 'goal-reached' | 'anniversary';

export interface AchievementMilestoneEvent {
  type: 'achievement';
  achievement: UnlockedAchievement;
}

export interface GoalReachedEvent {
  type: 'goal-reached';
  goalName: string;
  goalType: 'health' | 'fitness' | 'wellness' | 'education';
  targetValue: number;
  actualValue: number;
  timeToAchieve: number; // days
}

export interface AnniversaryEvent {
  type: 'anniversary';
  milestoneName: string;
  years: number;
  description: string;
}

export type MilestoneEventData =
  | AchievementMilestoneEvent
  | GoalReachedEvent
  | AnniversaryEvent;

// ============================================================================
// Base Timeline Event
// ============================================================================

export interface TimelineEvent {
  id: string;
  date: Date;
  endDate?: Date; // For events with duration
  category: EventCategory;
  type: MedicalEventType | LifestyleEventType | LifeEventType | MilestoneEventType;
  title: string;
  description: string;
  data: MedicalEventData | LifestyleEventData | LifeEventData | MilestoneEventData;
  severity: EventSeverity;
  status: EventStatus;
  tags: string[];
  relatedEvents?: string[]; // IDs of related events
  source: 'user-entry' | 'lab-import' | 'ehr-import' | 'device-sync' | 'calculated' | 'gamification';
  createdAt: Date;
  updatedAt: Date;
  notes?: string;
}

// ============================================================================
// Event Clustering Types
// ============================================================================

export interface EventCluster {
  id: string;
  startDate: Date;
  endDate: Date;
  events: TimelineEvent[];
  theme?: string;
  primaryCategory: EventCategory;
  severity: EventSeverity;
  summary: string;
}

export type ClusteringStrategy = 'time-based' | 'theme-based' | 'severity-based' | 'auto';

// ============================================================================
// Timeline View Types
// ============================================================================

export type ZoomLevel = 'year' | 'month' | 'week' | 'day';

export interface TimelineViewState {
  zoomLevel: ZoomLevel;
  startDate: Date;
  endDate: Date;
  selectedCategories: EventCategory[];
  selectedSeverities: EventSeverity[];
  searchQuery: string;
  selectedEventId?: string;
  expandedClusterIds: string[];
}

// ============================================================================
// Health Summary Types
// ============================================================================

export interface HealthSummary {
  generatedAt: Date;
  dateRange: { start: Date; end: Date };
  totalEvents: number;
  eventsByCategory: Record<EventCategory, number>;
  activeConditions: string[];
  currentMedications: string[];
  recentLabTrends: Array<{
    testName: string;
    trend: 'improving' | 'worsening' | 'stable';
    lastValue: number;
    unit: string;
  }>;
  keyInsights: string[];
}

// ============================================================================
// Export Types
// ============================================================================

export interface TimelineExportOptions {
  format: 'pdf' | 'json' | 'csv';
  dateRange?: { start: Date; end: Date };
  categories?: EventCategory[];
  includeInsights?: boolean;
  includeVisualizations?: boolean;
  template?: 'full' | 'summary' | 'provider';
}

// ============================================================================
// Filter Types
// ============================================================================

export interface TimelineFilters {
  categories: EventCategory[];
  eventTypes: string[];
  severity: EventSeverity[];
  status: EventStatus[];
  dateRange?: { start: Date; end: Date };
  searchQuery: string;
  tags: string[];
  sources: string[];
}

export const ALL_EVENT_CATEGORIES: EventCategory[] = ['medical', 'lifestyle', 'life-event', 'milestone'];

export const ALL_EVENT_SEVERITIES: EventSeverity[] = ['critical', 'high', 'moderate', 'low', 'info'];

export const ALL_EVENT_STATUSES: EventStatus[] = ['active', 'resolved', 'ongoing', 'scheduled', 'cancelled'];
