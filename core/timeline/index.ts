/**
 * Timeline Module Index
 * 
 * Main exports for the health timeline and life events tracking system.
 */

// Event Types
export type {
  // Base Types
  TimelineEvent,
  EventCluster,
  EventCategory,
  EventSeverity,
  EventStatus,
  ZoomLevel,
  ClusteringStrategy,
  TimelineFilters,
  HealthSummary,
  TimelineExportOptions,
  
  // Medical Events
  MedicalEventType,
  LabResultEvent,
  DiagnosisEvent,
  MedicationEvent,
  ProcedureEvent,
  SymptomEvent,
  VaccinationEvent,
  ImagingEvent,
  ConsultationEvent,
  AllergyEvent,
  MedicalEventData,
  
  // Lifestyle Events
  LifestyleEventType,
  ExerciseStreakEvent,
  DietChangeEvent,
  SleepPatternEvent,
  WeightChangeEvent,
  StressLevelEvent,
  HabitEvent,
  WellnessActivityEvent,
  DeviceSyncEvent,
  LifestyleEventData,
  
  // Life Events
  LifeEventType,
  BirthEvent,
  DeathEvent,
  PregnancyEvent,
  MoveEvent,
  JobChangeEvent,
  TravelEvent,
  TraumaEvent,
  RelationshipChangeEvent,
  CaregivingEvent,
  LifeEventData,
  
  // Milestones
  MilestoneEventType,
  AchievementMilestoneEvent,
  GoalReachedEvent,
  AnniversaryEvent,
  MilestoneEventData,
} from './events';

// Event Constants
export {
  ALL_EVENT_CATEGORIES,
  ALL_EVENT_SEVERITIES,
  ALL_EVENT_STATUSES,
} from './events';

// Timeline Engine
export type {
  AggregatedTimelineData,
  TimelineStatistics,
} from './timeline-engine';

export {
  // Event Creation
  createEventId,
  conditionToTimelineEvents,
  medicationToTimelineEvents,
  labResultToTimelineEvents,
  surgeryToTimelineEvents,
  achievementToTimelineEvent,
  
  // Aggregation
  aggregateTimelineData,
  
  // Clustering
  clusterEvents,
  
  // Filtering
  filterEvents,
  
  // Operations
  addCustomEvent,
  updateEvent,
  deleteEvent,
  linkEvents,
  
  // Zoom/View
  getTimeGroupingForZoom,
  groupEventsByTimePeriod,
  
  // Statistics
  calculateStatistics,
  
  // Storage
  saveTimelineEvents,
  loadTimelineEvents,
  clearTimelineEvents,
  exportTimelineData,
  importTimelineData,
} from './timeline-engine';

// Insights Engine
export type {
  InsightType,
  InsightConfidence,
  TimelineInsight,
  CorrelationResult,
} from './insights';

export {
  // Analysis Functions
  analyzeLabTrends,
  analyzeMedicationEffectiveness,
  analyzeSymptomPatterns,
  analyzeEnvironmentalFactors,
  analyzeLifestyleCorrelations,
  analyzeTreatmentResponse,
  
  // Main Generation
  generateInsights,
  
  // Filtering
  getActionableInsights,
  getInsightsByType,
  getInsightsForPeriod,
  
  // Export
  exportInsights,
  generateInsightSummary,
} from './insights';

// Export Module
export type { } from './export';

export {
  exportToJSON,
  exportToCSV,
  generatePDFHTML,
  downloadFile,
  exportTimeline,
} from './export';
