/**
 * Medical Record PDF Import Module (P4.1.1)
 *
 * Comprehensive PDF medical record importer supporting:
 * - Lab reports
 * - Discharge summaries
 * - Clinic visit notes
 * - Imaging reports
 * - Medication lists
 *
 * Uses local LLM for intelligent extraction of structured data.
 */

import * as fs from 'fs';
import * as http from 'http';
import type {
  LabResult,
  Medication,
  Condition,
  ImagingReport,
  VitalSigns,
  ReferenceRange,
} from '../biological-self/types.js';

// ============================================================================
// Types
// ============================================================================

export type MedicalDocumentType =
  | 'lab-report'
  | 'discharge-summary'
  | 'clinic-note'
  | 'imaging-report'
  | 'medication-list'
  | 'unknown';

export interface ExtractedLabResult {
  testName: string;
  value: string | number;
  unit?: string;
  referenceRange?: ReferenceRange;
  status?: 'normal' | 'abnormal-low' | 'abnormal-high' | 'critical';
  collectedAt?: string;
  notes?: string;
}

export interface ExtractedMedication {
  name: string;
  dosage?: string;
  route?: string;
  frequency?: string;
  prescribedAt?: string;
  prescribedBy?: string;
  indication?: string;
  status: 'active' | 'discontinued' | 'as-needed';
}

export interface ExtractedCondition {
  name: string;
  icd10?: string;
  status: 'active' | 'resolved' | 'chronic' | 'suspected';
  onsetDate?: string;
  resolvedDate?: string;
  severity?: 'mild' | 'moderate' | 'severe';
  notes?: string;
}

export interface ExtractedImagingReport {
  type: string;
  bodyPart: string;
  date: string;
  orderingProvider?: string;
  findings: string;
  impression: string;
  recommendations?: string;
}

export interface ExtractedVitals {
  type: string;
  value: number;
  unit: string;
  measuredAt: string;
  position?: 'sitting' | 'standing' | 'supine';
}

export interface MedicalRecordExtraction {
  documentType: MedicalDocumentType;
  patientName?: string;
  dateOfService?: string;
  facility?: string;
  provider?: string;
  labs: ExtractedLabResult[];
  medications: ExtractedMedication[];
  conditions: ExtractedCondition[];
  imaging: ExtractedImagingReport[];
  vitals: ExtractedVitals[];
  rawText: string;
  confidence: number; // 0-1 overall confidence score
  warnings: string[];
}

export interface PDFParseResult {
  text: string;
  pageCount: number;
  info: {
    title?: string;
    author?: string;
    subject?: string;
    keywords?: string;
    creationDate?: string;
    modificationDate?: string;
  };
}

// ============================================================================
// PDF Text Extraction
// ============================================================================

/**
 * Extract text from PDF file using pdf-parse
 */
export async function extractPDFText(filePath: string): Promise<PDFParseResult> {
  // Dynamic import for pdf-parse v2
  const pdfParseModule = await import('pdf-parse');
  const PDFParse = pdfParseModule.PDFParse;

  const dataBuffer = fs.readFileSync(filePath);
  const parser = new PDFParse({ data: dataBuffer });
  const pdfData = await parser.getText();
  await parser.destroy();

  return {
    text: pdfData.text,
    pageCount: pdfData.numpages,
    info: {
      title: pdfData.info?.Title,
      author: pdfData.info?.Author,
      subject: pdfData.info?.Subject,
      keywords: pdfData.info?.Keywords,
      creationDate: pdfData.info?.CreationDate,
      modificationDate: pdfData.info?.ModDate,
    },
  };
}

/**
 * Detect document type from content and metadata
 */
function detectDocumentType(text: string, info: PDFParseResult['info']): MedicalDocumentType {
  const lowerText = text.toLowerCase();

  // Lab report indicators
  if (lowerText.includes('laboratory') ||
      lowerText.includes('lab report') ||
      lowerText.includes('test results') ||
      lowerText.includes('reference range') ||
      lowerText.includes('specimen')) {
    return 'lab-report';
  }

  // Imaging report indicators
  if (lowerText.includes('radiology') ||
      lowerText.includes('imaging') ||
      lowerText.includes('mri report') ||
      lowerText.includes('ct scan') ||
      lowerText.includes('x-ray report') ||
      lowerText.includes('ultrasound')) {
    return 'imaging-report';
  }

  // Discharge summary indicators
  if (lowerText.includes('discharge summary') ||
      lowerText.includes('hospital course') ||
      lowerText.includes('admission date') ||
      lowerText.includes('discharge date')) {
    return 'discharge-summary';
  }

  // Medication list indicators
  if (lowerText.includes('medication list') ||
      lowerText.includes('current medications') ||
      lowerText.includes('prescription list') ||
      (lowerText.includes('rx') && lowerText.includes('medication'))) {
    return 'medication-list';
  }

  // Clinic note indicators
  if (lowerText.includes('progress note') ||
      lowerText.includes('office visit') ||
      lowerText.includes('encounter note') ||
      lowerText.includes('subjective:') ||
      lowerText.includes('objective:') ||
      lowerText.includes('assessment:') ||
      lowerText.includes('plan:')) {
    return 'clinic-note';
  }

  return 'unknown';
}

// ============================================================================
// Ollama Integration
// ============================================================================

interface OllamaGenerateOptions {
  model: string;
  prompt: string;
  temperature?: number;
  numPredict?: number;
  timeoutMs?: number;
}

function ollamaGenerate(options: OllamaGenerateOptions): Promise<string> {
  const { model, prompt, temperature = 0.1, numPredict = 8000, timeoutMs = 600000 } = options;

  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      model,
      prompt,
      stream: false,
      options: {
        temperature,
        num_predict: numPredict,
      },
    });

    const reqOptions: http.RequestOptions = {
      hostname: '127.0.0.1',
      port: 11434,
      path: '/api/generate',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data),
      },
      timeout: timeoutMs,
    };

    const req = http.request(reqOptions, (res) => {
      let body = '';
      res.on('data', (chunk) => {
        body += chunk;
      });
      res.on('end', () => {
        try {
          const json = JSON.parse(body);
          resolve(json.response);
        } catch (e) {
          reject(new Error(`Failed to parse Ollama response: ${body.slice(0, 200)}`));
        }
      });
    });

    req.on('error', (err) => reject(new Error(`Ollama request failed: ${err.message}`)));
    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Ollama request timed out'));
    });

    req.write(data);
    req.end();
  });
}

// ============================================================================
// LLM Extraction Prompts
// ============================================================================

const EXTRACTION_PROMPT_TEMPLATE = `You are a medical record extraction system. Parse the following medical document and extract structured data.

Document Type: {DOCUMENT_TYPE}

Extract the following information as JSON:

1. patientName: Patient's full name if present
2. dateOfService: Date of service/visit in YYYY-MM-DD format
3. facility: Healthcare facility name
4. provider: Doctor/provider name
5. labs: Array of lab results with testName, value, unit, referenceRange (low/high/text), status (normal/abnormal-low/abnormal-high/critical), collectedAt, notes
6. medications: Array with name, dosage, route, frequency, prescribedAt, prescribedBy, indication, status (active/discontinued/as-needed)
7. conditions: Array with name, icd10 code, status (active/resolved/chronic/suspected), onsetDate, resolvedDate, severity (mild/moderate/severe), notes
8. imaging: Array with type, bodyPart, date, orderingProvider, findings, impression, recommendations
9. vitals: Array with type, value, unit, measuredAt, position

Return ONLY valid JSON in this exact format:
{
  "patientName": "...",
  "dateOfService": "...",
  "facility": "...",
  "provider": "...",
  "labs": [...],
  "medications": [...],
  "conditions": [...],
  "imaging": [...],
  "vitals": [...]
}

If a field is not present in the document, use null or empty array []. Do not include explanations.

Document Text:
{TEXT}`;

// ============================================================================
// Medical Record Extractor Class
// ============================================================================

export class MedicalRecordExtractor {
  private model: string;
  private maxTextLength: number;

  constructor(options: { model?: string; maxTextLength?: number } = {}) {
    this.model = options.model || 'llama3.1:8b';
    this.maxTextLength = options.maxTextLength || 10000;
  }

  /**
   * Extract structured medical data from PDF file
   */
  async extractFromPDF(filePath: string): Promise<MedicalRecordExtraction> {
    const warnings: string[] = [];

    // Extract PDF text
    let pdfResult: PDFParseResult;
    try {
      pdfResult = await extractPDFText(filePath);
    } catch (err) {
      return {
        documentType: 'unknown',
        labs: [],
        medications: [],
        conditions: [],
        imaging: [],
        vitals: [],
        rawText: '',
        confidence: 0,
        warnings: [`Failed to read PDF: ${err instanceof Error ? err.message : 'Unknown error'}`],
      };
    }

    if (!pdfResult.text || pdfResult.text.trim().length < 50) {
      return {
        documentType: 'unknown',
        labs: [],
        medications: [],
        conditions: [],
        imaging: [],
        vitals: [],
        rawText: pdfResult.text || '',
        confidence: 0,
        warnings: ['PDF appears to be empty or contains only images. OCR not yet supported.'],
      };
    }

    // Detect document type
    const documentType = detectDocumentType(pdfResult.text, pdfResult.info);

    // Use LLM to extract structured data
    try {
      const extraction = await this.extractWithLLM(pdfResult.text, documentType);
      
      // Calculate confidence based on extracted data density
      const totalFields = 
        extraction.labs.length +
        extraction.medications.length +
        extraction.conditions.length +
        extraction.imaging.length +
        extraction.vitals.length;
      
      const confidence = Math.min(totalFields / 10, 1); // Normalize to 0-1

      return {
        ...extraction,
        documentType,
        rawText: pdfResult.text,
        confidence,
        warnings,
      };
    } catch (err) {
      warnings.push(`LLM extraction failed: ${err instanceof Error ? err.message : 'Unknown error'}`);
      
      return {
        documentType,
        labs: [],
        medications: [],
        conditions: [],
        imaging: [],
        vitals: [],
        rawText: pdfResult.text,
        confidence: 0,
        warnings,
      };
    }
  }

  /**
   * Extract from raw text (for manual paste)
   */
  async extractFromText(text: string): Promise<MedicalRecordExtraction> {
    const documentType = detectDocumentType(text, {});

    try {
      const extraction = await this.extractWithLLM(text, documentType);
      
      const totalFields = 
        extraction.labs.length +
        extraction.medications.length +
        extraction.conditions.length +
        extraction.imaging.length +
        extraction.vitals.length;
      
      const confidence = Math.min(totalFields / 10, 1);

      return {
        ...extraction,
        documentType,
        rawText: text,
        confidence,
        warnings: [],
      };
    } catch (err) {
      return {
        documentType,
        labs: [],
        medications: [],
        conditions: [],
        imaging: [],
        vitals: [],
        rawText: text,
        confidence: 0,
        warnings: [`Extraction failed: ${err instanceof Error ? err.message : 'Unknown error'}`],
      };
    }
  }

  /**
   * Use LLM to extract structured data
   */
  private async extractWithLLM(
    text: string,
    documentType: MedicalDocumentType
  ): Promise<Omit<MedicalRecordExtraction, 'documentType' | 'rawText' | 'confidence' | 'warnings'>> {
    const prompt = EXTRACTION_PROMPT_TEMPLATE
      .replace('{DOCUMENT_TYPE}', documentType)
      .replace('{TEXT}', text.slice(0, this.maxTextLength));

    const responseText = await ollamaGenerate({
      model: this.model,
      prompt,
      temperature: 0.1,
      numPredict: 8000,
      timeoutMs: 600000,
    });

    // Find JSON object in response
    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('LLM response did not contain valid JSON object');
    }

    try {
      const parsed = JSON.parse(jsonMatch[0]);

      return {
        patientName: parsed.patientName || undefined,
        dateOfService: parsed.dateOfService || undefined,
        facility: parsed.facility || undefined,
        provider: parsed.provider || undefined,
        labs: Array.isArray(parsed.labs) ? parsed.labs : [],
        medications: Array.isArray(parsed.medications) ? parsed.medications : [],
        conditions: Array.isArray(parsed.conditions) ? parsed.conditions : [],
        imaging: Array.isArray(parsed.imaging) ? parsed.imaging : [],
        vitals: Array.isArray(parsed.vitals) ? parsed.vitals : [],
      };
    } catch (parseErr) {
      throw new Error(`Failed to parse LLM JSON: ${parseErr instanceof Error ? parseErr.message : 'Unknown error'}`);
    }
  }
}

// ============================================================================
// Convenience Functions
// ============================================================================

export async function extractMedicalRecordFromPDF(
  filePath: string,
  options?: { model?: string }
): Promise<MedicalRecordExtraction> {
  const extractor = new MedicalRecordExtractor(options);
  return extractor.extractFromPDF(filePath);
}

export async function extractMedicalRecordFromText(
  text: string,
  options?: { model?: string }
): Promise<MedicalRecordExtraction> {
  const extractor = new MedicalRecordExtractor(options);
  return extractor.extractFromText(text);
}

// ============================================================================
// Data Transformation Helpers
// ============================================================================

import { v4 as uuidv4 } from 'uuid';

/**
 * Convert extracted labs to BiologicalSelf LabResult format
 */
export function convertExtractedLabs(
  extracted: ExtractedLabResult[],
  defaultDate?: Date
): Omit<LabResult, 'id' | 'createdAt' | 'updatedAt'>[] {
  return extracted.map(lab => ({
    testName: lab.testName,
    value: lab.value,
    unit: lab.unit,
    referenceRange: lab.referenceRange,
    status: lab.status,
    collectedAt: lab.collectedAt ? new Date(lab.collectedAt) : (defaultDate || new Date()),
    notes: lab.notes,
  }));
}

/**
 * Convert extracted medications to BiologicalSelf Medication format
 */
export function convertExtractedMedications(
  extracted: ExtractedMedication[],
  defaultDate?: Date
): Omit<Medication, 'id' | 'createdAt' | 'updatedAt'>[] {
  return extracted.map(med => ({
    name: med.name,
    dosage: med.dosage,
    route: med.route,
    frequency: med.frequency,
    startDate: med.prescribedAt ? new Date(med.prescribedAt) : (defaultDate || new Date()),
    endDate: undefined,
    status: med.status === 'active' ? 'active' : 'discontinued',
    prescribedBy: med.prescribedBy,
    indication: med.indication,
    effectiveness: undefined,
    sideEffects: [],
  }));
}

/**
 * Convert extracted conditions to BiologicalSelf Condition format
 */
export function convertExtractedConditions(
  extracted: ExtractedCondition[],
  defaultDate?: Date
): Omit<Condition, 'id' | 'createdAt' | 'updatedAt'>[] {
  return extracted.map(cond => ({
    name: cond.name,
    icd10Code: cond.icd10,
    icd10Description: undefined,
    snomedCtId: undefined,
    status: cond.status === 'resolved' ? 'resolved' : 'active',
    severity: cond.severity,
    onsetDate: cond.onsetDate ? new Date(cond.onsetDate) : (defaultDate || new Date()),
    resolutionDate: cond.resolvedDate ? new Date(cond.resolvedDate) : undefined,
    notes: cond.notes,
  }));
}

/**
 * Convert extracted imaging to BiologicalSelf ImagingReport format
 */
export function convertExtractedImaging(
  extracted: ExtractedImagingReport[]
): Omit<ImagingReport, 'id' | 'createdAt' | 'updatedAt'>[] {
  return extracted.map(img => ({
    type: img.type,
    bodyPart: img.bodyPart,
    date: new Date(img.date),
    orderingProvider: img.orderingProvider,
    performingFacility: undefined,
    findings: img.findings,
    impression: img.impression,
    recommendations: img.recommendations,
    images: [],
    comparisonStudies: [],
  }));
}
