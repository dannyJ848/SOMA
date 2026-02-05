/**
 * PDF Medical Record Import Types
 * OCR and LLM-based data extraction from PDF medical records
 */

export interface PDFImportJob {
  id: string;
  fileName: string;
  fileSize: number;
  status: 'pending' | 'processing' | 'extracting' | 'review' | 'completed' | 'error';
  progress: number;
  pages: number;
  extractedText?: string;
  extractedData?: ExtractedMedicalData;
  errors?: string[];
  createdAt: string;
  completedAt?: string;
}

export interface ExtractedMedicalData {
  patientInfo?: ExtractedPatientInfo;
  conditions: ExtractedCondition[];
  medications: ExtractedMedication[];
  labResults: ExtractedLabResult[];
  procedures: ExtractedProcedure[];
  allergies: ExtractedAllergy[];
  vitals: ExtractedVitals[];
  notes: ExtractedNote[];
  confidence: number;
  unmappedData: string[];
}

export interface ExtractedPatientInfo {
  name?: string;
  dateOfBirth?: string;
  mrn?: string;
  insurance?: string;
  confidence: number;
}

export interface ExtractedCondition {
  name: string;
  icd10Code?: string;
  onsetDate?: string;
  status: 'active' | 'resolved' | 'chronic';
  notes?: string;
  confidence: number;
  sourceText: string;
}

export interface ExtractedMedication {
  name: string;
  dosage?: string;
  frequency?: string;
  route?: string;
  prescribedDate?: string;
  prescribedBy?: string;
  status: 'active' | 'discontinued' | 'as-needed';
  confidence: number;
  sourceText: string;
}

export interface ExtractedLabResult {
  testName: string;
  value: string;
  unit?: string;
  referenceRange?: string;
  date: string;
  status: 'normal' | 'abnormal' | 'critical' | 'unknown';
  confidence: number;
  sourceText: string;
}

export interface ExtractedProcedure {
  name: string;
  date?: string;
  provider?: string;
  notes?: string;
  confidence: number;
  sourceText: string;
}

export interface ExtractedAllergy {
  allergen: string;
  reaction?: string;
  severity?: 'mild' | 'moderate' | 'severe' | 'life-threatening';
  confidence: number;
  sourceText: string;
}

export interface ExtractedVitals {
  date: string;
  bloodPressure?: string;
  heartRate?: number;
  temperature?: number;
  respiratoryRate?: number;
  oxygenSaturation?: number;
  weight?: number;
  height?: number;
  confidence: number;
  sourceText: string;
}

export interface ExtractedNote {
  date: string;
  type: 'progress' | 'consultation' | 'discharge' | 'procedure';
  provider?: string;
  content: string;
  confidence: number;
}

export interface PDFExtractionConfig {
  useOCR: boolean;
  ocrLanguage: string;
  llmModel: string;
  batchSize: number;
  confidenceThreshold: number;
  includeSourceText: boolean;
}

export interface ImportReview {
  jobId: string;
  items: ReviewItem[];
  duplicates: DuplicateItem[];
}

export interface ReviewItem {
  id: string;
  type: 'condition' | 'medication' | 'lab' | 'procedure' | 'allergy' | 'vital';
  data: unknown;
  action: 'accept' | 'reject' | 'modify';
  modifications?: Record<string, unknown>;
}

export interface DuplicateItem {
  existingId: string;
  existingType: string;
  extractedData: unknown;
  similarity: number;
  suggestion: 'merge' | 'keep-both' | 'skip';
}

export interface PDFImportState {
  jobs: Map<string, PDFImportJob>;
  activeJob: string | null;
  config: PDFExtractionConfig;
}
