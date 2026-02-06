/**
 * Export & Portability Types
 * 
 * Type definitions for data export, PDF generation, encryption,
 * and health data portability features.
 */

import type { TimelineEvent } from '../timeline/events';

// ============================================================================
// Export Format Types
// ============================================================================

export type ExportFormat = 'json' | 'pdf' | 'csv' | 'fhir';

export type ExportDataCategory = 
  | 'all'
  | 'profile'
  | 'labs'
  | 'medications'
  | 'conditions'
  | 'procedures'
  | 'timeline'
  | 'imaging'
  | 'vitals'
  | 'allergies'
  | 'immunizations'
  | 'appointments'
  | 'notes';

export interface DateRangeFilter {
  startDate: Date;
  endDate: Date;
}

export interface ExportOptions {
  /** Export format */
  format: ExportFormat;
  /** Data categories to include */
  categories: ExportDataCategory[];
  /** Date range filter (optional) */
  dateRange?: DateRangeFilter;
  /** Include encrypted backup */
  encrypt?: boolean;
  /** Password for encryption */
  password?: string;
  /** Patient name for PDF header */
  patientName?: string;
  /** Language for export (es/en) */
  language: 'es' | 'en';
  /** PDF template style */
  pdfTemplate?: 'full' | 'summary' | 'provider' | 'emergency';
  /** Include visualizations in PDF */
  includeCharts?: boolean;
  /** FHIR bundle type */
  fhirBundleType?: 'collection' | 'document' | 'transaction';
}

// ============================================================================
// Export Progress Types
// ============================================================================

export type ExportStage = 
  | 'preparing'
  | 'collecting'
  | 'processing'
  | 'generating'
  | 'encrypting'
  | 'finalizing'
  | 'complete'
  | 'error';

export interface ExportProgress {
  /** Current stage */
  stage: ExportStage;
  /** Progress percentage (0-100) */
  percent: number;
  /** Number of records processed */
  processedCount: number;
  /** Total records to process */
  totalCount: number;
  /** Current operation description (Spanish) */
  messageEs: string;
  /** Current operation description (English) */
  messageEn: string;
  /** Error message if stage is 'error' */
  error?: string;
  /** Estimated time remaining in seconds */
  estimatedTimeRemaining?: number;
}

export type ExportProgressCallback = (progress: ExportProgress) => void;

// ============================================================================
// Export Result Types
// ============================================================================

export interface ExportResult {
  /** Success status */
  success: boolean;
  /** Export format */
  format: ExportFormat;
  /** File content (Base64 for binary, string for text) */
  content: string;
  /** File name */
  filename: string;
  /** MIME type */
  mimeType: string;
  /** File size in bytes */
  size: number;
  /** Whether file is encrypted */
  encrypted: boolean;
  /** Export timestamp */
  exportedAt: Date;
  /** Data summary */
  summary: ExportSummary;
  /** Error message if failed */
  error?: string;
}

export interface ExportSummary {
  /** Total records exported */
  totalRecords: number;
  /** Records by category */
  recordsByCategory: Record<ExportDataCategory, number>;
  /** Date range of exported data */
  dateRange?: { start: Date; end: Date };
  /** Categories included */
  categories: ExportDataCategory[];
}

// ============================================================================
// Health Data Types for Export
// ============================================================================

export interface PatientProfile {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth?: Date;
  gender?: 'male' | 'female' | 'other' | 'unknown';
  bloodType?: string;
  height?: { value: number; unit: 'cm' | 'in' };
  weight?: { value: number; unit: 'kg' | 'lbs' };
  emergencyContact?: {
    name: string;
    relationship: string;
    phone: string;
  };
  primaryPhysician?: {
    name: string;
    specialty: string;
    phone: string;
  };
  insurance?: {
    provider: string;
    policyNumber: string;
    groupNumber?: string;
  };
}

export interface LabResult {
  id: string;
  testName: string;
  loincCode?: string;
  value: number | string;
  unit: string;
  referenceRange?: { low: number; high: number };
  status: 'low' | 'normal' | 'high' | 'critical';
  collectedAt: Date;
  resultedAt?: Date;
  laboratory?: string;
  orderingProvider?: string;
  notes?: string;
}

export interface Medication {
  id: string;
  name: string;
  genericName?: string;
  dose: string;
  frequency: string;
  route?: string;
  prescribedAt: Date;
  startedAt?: Date;
  endedAt?: Date;
  status: 'active' | 'discontinued' | 'completed' | 'on-hold';
  prescribedBy?: string;
  indication?: string;
  pharmacy?: string;
  refillsRemaining?: number;
  instructions?: string;
}

export interface Condition {
  id: string;
  name: string;
  icd10Code?: string;
  snomedCode?: string;
  diagnosedAt?: Date;
  diagnosedBy?: string;
  status: 'active' | 'resolved' | 'chronic' | 'in-remission';
  severity?: 'mild' | 'moderate' | 'severe';
  notes?: string;
}

export interface Procedure {
  id: string;
  name: string;
  cptCode?: string;
  snomedCode?: string;
  performedAt: Date;
  performedBy?: string;
  facility?: string;
  outcome?: string;
  complications?: string[];
  followUpNeeded?: boolean;
  notes?: string;
}

export interface Allergy {
  id: string;
  allergen: string;
  allergenType: 'medication' | 'food' | 'environmental' | 'latex' | 'other';
  reaction: string;
  severity: 'mild' | 'moderate' | 'severe' | 'life-threatening';
  onsetDate?: Date;
  verifiedBy?: string;
  notes?: string;
}

export interface Immunization {
  id: string;
  vaccineName: string;
  cvxCode?: string;
  administeredAt: Date;
  doseNumber?: number;
  totalDoses?: number;
  administeredBy?: string;
  facility?: string;
  lotNumber?: string;
  expirationDate?: Date;
  notes?: string;
}

export interface VitalSigns {
  id: string;
  measuredAt: Date;
  temperature?: { value: number; unit: 'C' | 'F' };
  heartRate?: number;
  bloodPressure?: { systolic: number; diastolic: number };
  respiratoryRate?: number;
  oxygenSaturation?: number;
  weight?: { value: number; unit: 'kg' | 'lbs' };
  height?: { value: number; unit: 'cm' | 'in' };
  bmi?: number;
  source?: string;
}

export interface ImagingStudy {
  id: string;
  studyType: string;
  modality: 'x-ray' | 'ct' | 'mri' | 'ultrasound' | 'pet' | 'mammogram' | 'dexa' | 'other';
  bodyPart: string;
  performedAt: Date;
  facility?: string;
  orderingProvider?: string;
  radiologist?: string;
  findings?: string;
  impression?: string;
  significantFinding?: boolean;
  images?: Array<{
    id: string;
    description?: string;
    filePath?: string;
  }>;
}

export interface ClinicalNote {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt?: Date;
  author?: string;
  encounterDate?: Date;
  noteType?: string;
  tags?: string[];
}

// ============================================================================
// Complete Health Record
// ============================================================================

export interface CompleteHealthRecord {
  exportMetadata: {
    version: string;
    exportedAt: string;
    exportedBy: string;
    application: string;
    format: ExportFormat;
  };
  profile?: PatientProfile;
  labs: LabResult[];
  medications: Medication[];
  conditions: Condition[];
  procedures: Procedure[];
  allergies: Allergy[];
  immunizations: Immunization[];
  vitals: VitalSigns[];
  imaging: ImagingStudy[];
  timeline: TimelineEvent[];
  notes: ClinicalNote[];
}

// ============================================================================
// PDF Report Types
// ============================================================================

export interface PDFSection {
  title: string;
  titleEs: string;
  content: string;
  order: number;
}

export interface PDFChartData {
  type: 'line' | 'bar' | 'pie' | 'timeline';
  title: string;
  titleEs: string;
  data: unknown[];
  labels?: string[];
  colors?: string[];
}

export interface PDFReportOptions {
  template: 'full' | 'summary' | 'provider' | 'emergency';
  includeCharts: boolean;
  includeEmergencyCard: boolean;
  patientName?: string;
  patientId?: string;
  generatedAt: Date;
  language: 'es' | 'en';
}

// ============================================================================
// Encryption Types
// ============================================================================

export interface EncryptionOptions {
  password: string;
  iterations?: number;
  keyLength?: number;
}

export interface EncryptedExport {
  encrypted: true;
  salt: string;
  iv: string;
  ciphertext: string;
  iterations: number;
  version: string;
  metadata: {
    exportedAt: string;
    format: ExportFormat;
    originalSize: number;
  };
}

// ============================================================================
// Import/Restore Types
// ============================================================================

export interface ImportOptions {
  /** Whether to merge or replace existing data */
  mode: 'merge' | 'replace';
  /** Password for encrypted imports */
  password?: string;
  /** Validate data before import */
  validate?: boolean;
}

export interface ImportProgress {
  stage: 'reading' | 'decrypting' | 'validating' | 'processing' | 'complete' | 'error';
  percent: number;
  messageEs: string;
  messageEn: string;
  recordsProcessed: number;
  recordsTotal: number;
  error?: string;
}

export interface ImportResult {
  success: boolean;
  recordsImported: number;
  recordsSkipped: number;
  recordsFailed: number;
  errors: string[];
  warnings: string[];
  categoriesImported: Record<ExportDataCategory, number>;
}

// ============================================================================
// CSV Export Types
// ============================================================================

export interface CSVExportConfig {
  category: ExportDataCategory;
  headers: string[];
  headersEs: string[];
  rowMapper: (item: unknown) => (string | number | boolean | undefined)[];
}

// ============================================================================
// FHIR Export Types
// ============================================================================

export type FHIRResourceType =
  | 'Patient'
  | 'Observation'
  | 'MedicationRequest'
  | 'Condition'
  | 'Procedure'
  | 'AllergyIntolerance'
  | 'Immunization'
  | 'DiagnosticReport'
  | 'DocumentReference'
  | 'CarePlan'
  | 'Encounter'
  | 'Organization'
  | 'Practitioner';

export interface FHIRBundleEntry {
  fullUrl: string;
  resource: {
    resourceType: FHIRResourceType;
    id: string;
    [key: string]: unknown;
  };
  request?: {
    method: 'POST' | 'PUT' | 'GET';
    url: string;
  };
}

export interface FHIRBundle {
  resourceType: 'Bundle';
  id: string;
  meta: {
    versionId: string;
    lastUpdated: string;
  };
  type: 'collection' | 'document' | 'transaction';
  timestamp: string;
  entry: FHIRBundleEntry[];
}
