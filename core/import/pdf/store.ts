/**
 * PDF Medical Record Import Store
 * Manages PDF OCR, LLM extraction, and data import workflow
 */

import type {
  PDFImportJob,
  ExtractedMedicalData,
  PDFExtractionConfig,
  ImportReview,
  ReviewItem,
  DuplicateItem,
  PDFImportState,
} from './types';
import { OCRService, type OCRResult } from '../ocr-service';

class PDFImportStore {
  private state: PDFImportState = {
    jobs: new Map(),
    activeJob: null,
    config: {
      useOCR: true,
      ocrLanguage: 'eng',
      llmModel: 'default',
      batchSize: 10,
      confidenceThreshold: 0.7,
      includeSourceText: true,
    },
  };

  private listeners: Set<() => void> = new Set();
  private ocrService: OCRService | null = null;

  private getOCRService(): OCRService {
    if (!this.ocrService) {
      this.ocrService = new OCRService(this.state.config.ocrLanguage);
    }
    return this.ocrService;
  }

  // Job Management
  createJob(fileName: string, fileSize: number, pages: number): PDFImportJob {
    const job: PDFImportJob = {
      id: `pdf-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      fileName,
      fileSize,
      status: 'pending',
      progress: 0,
      pages,
      createdAt: new Date().toISOString(),
    };

    this.state.jobs.set(job.id, job);
    this.state.activeJob = job.id;
    this.notify();
    return job;
  }

  getJob(id: string): PDFImportJob | undefined {
    return this.state.jobs.get(id);
  }

  getActiveJob(): PDFImportJob | undefined {
    if (!this.state.activeJob) return undefined;
    return this.state.jobs.get(this.state.activeJob);
  }

  getAllJobs(): PDFImportJob[] {
    return Array.from(this.state.jobs.values())
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  // Status Updates
  updateJobStatus(
    jobId: string,
    status: PDFImportJob['status'],
    progress?: number,
    updates?: Partial<PDFImportJob>
  ): void {
    const job = this.state.jobs.get(jobId);
    if (!job) return;

    job.status = status;
    if (progress !== undefined) job.progress = progress;
    if (updates) Object.assign(job, updates);

    if (status === 'completed' || status === 'error') {
      job.completedAt = new Date().toISOString();
    }

    this.notify();
  }

  // OCR Phase - Uses Tesseract.js for image-based PDFs
  async performOCR(jobId: string, pdfBuffer: ArrayBuffer): Promise<string> {
    this.updateJobStatus(jobId, 'processing', 10, { errors: [] });

    const ocrService = this.getOCRService();

    try {
      const result = await ocrService.extractFromPDF(pdfBuffer, {
        language: this.state.config.ocrLanguage,
        onProgress: (page, total, status) => {
          const progress = 10 + Math.round((page / total) * 20); // 10-30% range for OCR phase
          this.updateJobStatus(jobId, 'processing', progress, { pages: total });
        },
        renderQuality: 2,
        confidenceThreshold: 60,
        maxPages: 100, // Prevent runaway processing on huge files
      });

      // Update job with extracted text and OCR metadata
      this.updateJobStatus(jobId, 'processing', 30, {
        extractedText: result.text,
        usedOCR: result.usedOCR,
        ocrConfidence: result.averageConfidence
      });

      // Report any OCR errors as warnings (don't fail the whole import)
      if (result.errors.length > 0) {
        console.warn(`OCR warnings for job ${jobId}:`, result.errors);
        const job = this.state.jobs.get(jobId);
        if (job && !job.errors) {
          job.errors = [];
        }
        if (job && job.errors) {
          job.errors.push(...result.errors.map(e => `Warning: ${e}`));
        }
      }

      return result.text;
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : 'OCR processing failed';
      this.updateJobStatus(jobId, 'error', 0, { errors: [errorMsg] });
      throw error;
    }
  }

  /**
   * Check if a PDF likely needs OCR before processing
   * Useful for showing appropriate UI messaging
   */
  async detectNeedsOCR(pdfBuffer: ArrayBuffer): Promise<boolean> {
    const ocrService = this.getOCRService();
    return ocrService.needsOCR(pdfBuffer, 3); // Sample first 3 pages
  }

  /**
   * Get OCR result with detailed metadata
   * Useful for debugging and quality assessment
   */
  async performOCRWithMetadata(jobId: string, pdfBuffer: ArrayBuffer): Promise<OCRResult> {
    this.updateJobStatus(jobId, 'processing', 10);

    const ocrService = this.getOCRService();

    try {
      const result = await ocrService.extractFromPDF(pdfBuffer, {
        language: this.state.config.ocrLanguage,
        onProgress: (page, total, status) => {
          const progress = 10 + Math.round((page / total) * 20);
          this.updateJobStatus(jobId, 'processing', progress, { pages: total });
        },
        renderQuality: 2,
        confidenceThreshold: 60,
        maxPages: 100,
      });

      this.updateJobStatus(jobId, 'processing', 30, {
        extractedText: result.text,
        usedOCR: result.usedOCR,
        ocrConfidence: result.averageConfidence
      });

      return result;
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : 'OCR processing failed';
      this.updateJobStatus(jobId, 'error', 0, { errors: [errorMsg] });
      throw error;
    }
  }

  // LLM Extraction Phase
  async extractMedicalData(jobId: string, text: string): Promise<ExtractedMedicalData> {
    this.updateJobStatus(jobId, 'extracting', 50);

    // In production, this would call Ollama or similar local LLM
    // For now, use rule-based extraction
    const extractedData = this.performRuleBasedExtraction(text);

    await this.simulateDelay(1500);
    this.updateJobStatus(jobId, 'extracting', 80, { extractedData });

    return extractedData;
  }

  private performRuleBasedExtraction(text: string): ExtractedMedicalData {
    const data: ExtractedMedicalData = {
      conditions: [],
      medications: [],
      labResults: [],
      procedures: [],
      allergies: [],
      vitals: [],
      notes: [],
      confidence: 0.85,
      unmappedData: [],
    };

    // Extract patient info
    const nameMatch = text.match(/Patient:\s*(.+?)(?:\n|$)/i) || text.match(/^([A-Z][a-z]+\s+[A-Z][a-z]+)/m);
    const dobMatch = text.match(/DOB:\s*(\d{4}-\d{2}-\d{2}|\d{2}\/\d{2}\/\d{4})/i);
    const mrnMatch = text.match(/MRN:\s*(\w+)/i);

    data.patientInfo = {
      name: nameMatch?.[1]?.trim(),
      dateOfBirth: dobMatch?.[1],
      mrn: mrnMatch?.[1],
      confidence: 0.9,
    };

    // Extract conditions
    const conditionSection = this.extractSection(text, 'ACTIVE CONDITIONS', 'CURRENT MEDICATIONS');
    if (conditionSection) {
      const conditionLines = conditionSection.split('\n').filter(l => l.trim() && /\d+\./.test(l));
      data.conditions = conditionLines.map(line => {
        const match = line.match(/\d+\.\s*(.+?)\s*\(([A-Z]\d+\.?\d*)\)\s*-?\s*(?:Onset:\s*(.+))?/i);
        return {
          name: match?.[1]?.trim() || line.replace(/^\d+\.\s*/, '').trim(),
          icd10Code: match?.[2],
          onsetDate: match?.[3],
          status: 'active',
          confidence: 0.85,
          sourceText: line.trim(),
        };
      });
    }

    // Extract medications
    const medSection = this.extractSection(text, 'CURRENT MEDICATIONS', 'RECENT LABS');
    if (medSection) {
      const medLines = medSection.split('\n').filter(l => l.trim().startsWith('-'));
      data.medications = medLines.map(line => {
        const cleanLine = line.replace(/^-\s*/, '').trim();
        const match = cleanLine.match(/^(.+?)\s+(\d+(?:\.\d+)?\s*(?:mg|mcg|g|units?))\s*(.+)?$/i);
        return {
          name: match?.[1]?.trim() || cleanLine,
          dosage: match?.[2],
          frequency: match?.[3]?.trim(),
          status: 'active',
          confidence: 0.8,
          sourceText: cleanLine,
        };
      });
    }

    // Extract lab results
    const labSection = this.extractSection(text, 'RECENT LABS', 'VITALS');
    if (labSection) {
      const dateMatch = labSection.match(/\((\d{4}-\d{2}-\d{2})\)/);
      const labDate = dateMatch?.[1] || new Date().toISOString().split('T')[0];

      const labLines = labSection.split('\n').filter(l => l.trim().startsWith('-'));
      data.labResults = labLines.map(line => {
        const cleanLine = line.replace(/^-\s*/, '').trim();
        const match = cleanLine.match(/^(.+?):\s*(.+?)\s*(?:\((.+?)\))?$/);
        let status: ExtractedMedicalData['labResults'][0]['status'] = 'unknown';
        
        if (match?.[3]) {
          const comment = match[3].toLowerCase();
          if (comment.includes('high') || comment.includes('elevated') || comment.includes('>')) {
            status = 'abnormal';
          } else if (comment.includes('critical') || comment.includes('alert')) {
            status = 'critical';
          } else if (comment.includes('normal') || comment.includes('goal')) {
            status = 'normal';
          }
        }

        return {
          testName: match?.[1]?.trim() || cleanLine,
          value: match?.[2]?.trim() || '',
          date: labDate,
          status,
          confidence: 0.75,
          sourceText: cleanLine,
        };
      });
    }

    // Extract allergies
    const allergySection = this.extractSection(text, 'ALLERGIES', 'NOTES');
    if (allergySection) {
      const allergyLines = allergySection.split('\n').filter(l => l.trim().startsWith('-'));
      data.allergies = allergyLines.map(line => {
        const cleanLine = line.replace(/^-\s*/, '').trim();
        const match = cleanLine.match(/^(.+?)\s*\((.+?)\)$/);
        return {
          allergen: match?.[1]?.trim() || cleanLine,
          reaction: match?.[2],
          confidence: 0.8,
          sourceText: cleanLine,
        };
      });
    }

    // Extract vitals
    const vitalsMatch = text.match(/BP:\s*(\d{3}\/\d{2,3})/i);
    const hrMatch = text.match(/HR:\s*(\d+)/i);
    const tempMatch = text.match(/Temp:\s*(\d+\.?\d*)/i);

    if (vitalsMatch || hrMatch || tempMatch) {
      data.vitals.push({
        date: new Date().toISOString().split('T')[0],
        bloodPressure: vitalsMatch?.[1],
        heartRate: hrMatch ? parseInt(hrMatch[1]) : undefined,
        temperature: tempMatch ? parseFloat(tempMatch[1]) : undefined,
        confidence: 0.9,
        sourceText: `BP: ${vitalsMatch?.[1] || 'N/A'}, HR: ${hrMatch?.[1] || 'N/A'}`,
      });
    }

    return data;
  }

  private extractSection(text: string, startMarker: string, endMarker: string): string | null {
    const startIndex = text.indexOf(startMarker);
    if (startIndex === -1) return null;

    const endIndex = text.indexOf(endMarker, startIndex);
    const sectionEnd = endIndex === -1 ? text.length : endIndex;

    return text.substring(startIndex + startMarker.length, sectionEnd).trim();
  }

  // Duplicate Detection
  detectDuplicates(
    extractedData: ExtractedMedicalData,
    existingConditions: Array<{ id: string; name: string }>,
    existingMedications: Array<{ id: string; name: string }>,
    existingLabs: Array<{ id: string; testName: string; date: string }>
  ): DuplicateItem[] {
    const duplicates: DuplicateItem[] = [];

    // Check conditions
    for (const condition of extractedData.conditions) {
      for (const existing of existingConditions) {
        const similarity = this.calculateSimilarity(condition.name, existing.name);
        if (similarity > 0.8) {
          duplicates.push({
            existingId: existing.id,
            existingType: 'condition',
            extractedData: condition,
            similarity,
            suggestion: similarity > 0.95 ? 'skip' : 'merge',
          });
        }
      }
    }

    // Check medications
    for (const med of extractedData.medications) {
      for (const existing of existingMedications) {
        const similarity = this.calculateSimilarity(med.name, existing.name);
        if (similarity > 0.8) {
          duplicates.push({
            existingId: existing.id,
            existingType: 'medication',
            extractedData: med,
            similarity,
            suggestion: similarity > 0.95 ? 'skip' : 'merge',
          });
        }
      }
    }

    return duplicates;
  }

  private calculateSimilarity(str1: string, str2: string): number {
    const s1 = str1.toLowerCase().trim();
    const s2 = str2.toLowerCase().trim();

    if (s1 === s2) return 1;
    if (s1.includes(s2) || s2.includes(s1)) return 0.9;

    // Simple Levenshtein-inspired similarity
    const maxLength = Math.max(s1.length, s2.length);
    if (maxLength === 0) return 1;

    const distance = this.levenshteinDistance(s1, s2);
    return 1 - distance / maxLength;
  }

  private levenshteinDistance(str1: string, str2: string): number {
    const matrix: number[][] = [];

    for (let i = 0; i <= str2.length; i++) {
      matrix[i] = [i];
    }

    for (let j = 0; j <= str1.length; j++) {
      matrix[0][j] = j;
    }

    for (let i = 1; i <= str2.length; i++) {
      for (let j = 1; j <= str1.length; j++) {
        if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          );
        }
      }
    }

    return matrix[str2.length][str1.length];
  }

  // Review Phase
  createReview(jobId: string, extractedData: ExtractedMedicalData): ImportReview {
    const items: ReviewItem[] = [
      ...extractedData.conditions.map(c => ({
        id: `cond-${Math.random().toString(36).substr(2, 9)}`,
        type: 'condition' as const,
        data: c,
        action: (c.confidence >= this.state.config.confidenceThreshold ? 'accept' : 'modify') as 'accept' | 'modify',
      })),
      ...extractedData.medications.map(m => ({
        id: `med-${Math.random().toString(36).substr(2, 9)}`,
        type: 'medication' as const,
        data: m,
        action: (m.confidence >= this.state.config.confidenceThreshold ? 'accept' : 'modify') as 'accept' | 'modify',
      })),
      ...extractedData.labResults.map(l => ({
        id: `lab-${Math.random().toString(36).substr(2, 9)}`,
        type: 'lab' as const,
        data: l,
        action: (l.confidence >= this.state.config.confidenceThreshold ? 'accept' : 'modify') as 'accept' | 'modify',
      })),
    ];

    return {
      jobId,
      items,
      duplicates: [],
    };
  }

  // Config
  updateConfig(config: Partial<PDFExtractionConfig>): void {
    this.state.config = { ...this.state.config, ...config };
    this.notify();
  }

  getConfig(): PDFExtractionConfig {
    return { ...this.state.config };
  }

  // State
  getState(): PDFImportState {
    return { ...this.state };
  }

  subscribe(listener: () => void): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private notify(): void {
    this.listeners.forEach(l => l());
  }

  private simulateDelay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

export const pdfImportStore = new PDFImportStore();
