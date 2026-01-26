/**
 * Export System Types
 *
 * Type definitions for the export, print, and share functionality.
 */

// ============================================
// Base Export Types
// ============================================

export type ExportFormat = 'pdf' | 'json' | 'csv' | 'html';
export type ReportType =
  | 'health-summary'
  | 'symptom-history'
  | 'medication-report'
  | 'lab-trends'
  | 'condition-summary'
  | 'encyclopedia-entry'
  | 'doctor-visit';

export interface ExportOptions {
  format: ExportFormat;
  includeCharts?: boolean;
  includeHistory?: boolean;
  dateRange?: {
    start: string;
    end: string;
  };
  includeSensitive?: boolean;
  complexityLevel?: 'patient' | 'intermediate' | 'professional';
}

export interface PrintOptions {
  showPreview?: boolean;
  orientation?: 'portrait' | 'landscape';
  margins?: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
  includeHeader?: boolean;
  includeFooter?: boolean;
  pageBreaks?: boolean;
}

// ============================================
// Health Data Export Types
// ============================================

export interface ExportableCondition {
  id: string;
  name: string;
  status: 'active' | 'resolved' | 'managed';
  severity?: string;
  diagnosedDate?: string;
  notes?: string;
  treatments?: string[];
}

export interface ExportableMedication {
  id: string;
  name: string;
  genericName?: string;
  dosage?: string;
  frequency?: string;
  startDate?: string;
  endDate?: string;
  prescribedFor?: string;
  instructions?: string;
  pharmacy?: string;
  prescriber?: string;
  [key: string]: string | number | undefined;
}

export interface ExportableLabResult {
  id: string;
  testName: string;
  value: number | string;
  unit?: string;
  referenceRange?: {
    low: number;
    high: number;
  };
  status?: 'normal' | 'low' | 'high' | 'critical';
  collectedAt: string;
  orderedBy?: string;
  notes?: string;
}

export interface ExportableSymptom {
  id: string;
  description: string;
  severity: number;
  location?: string;
  onsetDate: string;
  duration?: string;
  triggers?: string[];
  relievingFactors?: string[];
  notes?: string;
}

export interface ExportableVitals {
  date: string;
  restingHeartRate?: number;
  hrv?: number;
  sleepHours?: number;
  recoveryScore?: number;
  steps?: number;
  bloodPressure?: {
    systolic: number;
    diastolic: number;
  };
  temperature?: number;
  weight?: number;
  oxygenSaturation?: number;
}

// ============================================
// Report Types
// ============================================

export interface HealthSummaryReport {
  generatedAt: string;
  reportType: 'health-summary';
  patientInfo?: {
    name?: string;
    dateOfBirth?: string;
    age?: number;
    sex?: string;
    bloodType?: string;
  };
  conditions: ExportableCondition[];
  medications: ExportableMedication[];
  recentLabs: ExportableLabResult[];
  recentSymptoms: ExportableSymptom[];
  vitals: ExportableVitals;
  allergies?: string[];
  emergencyContacts?: Array<{
    name: string;
    relationship: string;
    phone: string;
  }>;
  notes?: string;
}

export interface SymptomHistoryReport {
  generatedAt: string;
  reportType: 'symptom-history';
  dateRange: {
    start: string;
    end: string;
  };
  symptoms: ExportableSymptom[];
  summary: {
    totalSymptoms: number;
    averageSeverity: number;
    mostCommonLocations: string[];
    frequencyTrend: 'increasing' | 'stable' | 'decreasing';
  };
}

export interface MedicationReport {
  generatedAt: string;
  reportType: 'medication-report';
  activeMedications: ExportableMedication[];
  pastMedications: ExportableMedication[];
  interactions?: Array<{
    medication1: string;
    medication2: string;
    severity: 'minor' | 'moderate' | 'major' | 'contraindicated';
    description: string;
  }>;
  adherenceNotes?: string;
}

export interface LabTrendsReport {
  generatedAt: string;
  reportType: 'lab-trends';
  dateRange: {
    start: string;
    end: string;
  };
  labResults: ExportableLabResult[];
  trends: Array<{
    testName: string;
    trend: 'improving' | 'stable' | 'worsening';
    currentValue: number | string;
    previousValue?: number | string;
    percentChange?: number;
  }>;
  abnormalResults: ExportableLabResult[];
}

export interface ConditionSummaryReport {
  generatedAt: string;
  reportType: 'condition-summary';
  condition: ExportableCondition & {
    overview?: string;
    affectedSystems?: string[];
    relatedConditions?: string[];
    managementPlan?: string;
    followUpSchedule?: string;
  };
  relatedMedications: ExportableMedication[];
  relatedLabs: ExportableLabResult[];
  timeline: Array<{
    date: string;
    event: string;
    type: 'diagnosis' | 'treatment' | 'test' | 'milestone';
  }>;
}

export interface DoctorVisitReport {
  generatedAt: string;
  reportType: 'doctor-visit';
  visitPurpose?: string;
  currentConcerns: string[];
  currentSymptoms: ExportableSymptom[];
  medicationList: ExportableMedication[];
  recentLabResults: ExportableLabResult[];
  questionsForDoctor: string[];
  vitals: ExportableVitals;
  notes?: string;
}

// ============================================
// Share Types
// ============================================

export type ShareTarget = 'clipboard' | 'email' | 'file' | 'qr';

export interface ShareOptions {
  target: ShareTarget;
  format: 'text' | 'json' | 'pdf';
  includePersonalInfo?: boolean;
  expiresAt?: string;
}

export interface ShareResult {
  success: boolean;
  message: string;
  data?: string;
  url?: string;
}

// ============================================
// Export Result Types
// ============================================

export interface ExportResult {
  success: boolean;
  format: ExportFormat;
  filename?: string;
  data?: string | Blob;
  error?: string;
  timestamp: string;
}

export interface PrintResult {
  success: boolean;
  printed: boolean;
  cancelled?: boolean;
  error?: string;
}
