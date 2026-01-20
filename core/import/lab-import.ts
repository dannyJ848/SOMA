/**
 * Lab Result Import Module
 *
 * Extracts lab results from PDFs using local LLM parsing.
 * Works with various lab report formats by using AI to understand the structure.
 */

import * as fs from 'fs';
import { Ollama } from 'ollama';
import type { LabResult, ReferenceRange } from '../biological-self/types.js';
import { v4 as uuidv4 } from 'uuid';

// ============================================================================
// Types
// ============================================================================

export interface LabImportResult {
  success: boolean;
  labResults: Omit<LabResult, 'id' | 'createdAt' | 'updatedAt'>[];
  rawText: string;
  warnings: string[];
  errors: string[];
}

interface ParsedLabValue {
  testName: string;
  value: string | number;
  unit?: string;
  referenceRange?: {
    low?: number;
    high?: number;
    text?: string;
  };
  status?: 'normal' | 'abnormal-low' | 'abnormal-high' | 'critical';
  collectedAt?: string;
}

// ============================================================================
// Lab Import Class
// ============================================================================

export class LabImporter {
  private ollama: Ollama;
  private model: string;

  constructor(model: string = 'llama3.1:8b') {
    this.ollama = new Ollama();
    this.model = model;
  }

  /**
   * Import lab results from a PDF file
   */
  async importFromPDF(filePath: string): Promise<LabImportResult> {
    const warnings: string[] = [];
    const errors: string[] = [];

    // Read and parse PDF
    let rawText: string;
    try {
      // Dynamic import for pdf-parse (CJS module)
      const pdfParse = await import('pdf-parse');
      const pdf = pdfParse.default;

      const dataBuffer = fs.readFileSync(filePath);
      const pdfData = await pdf(dataBuffer);
      rawText = pdfData.text;

      if (!rawText || rawText.trim().length < 50) {
        return {
          success: false,
          labResults: [],
          rawText: rawText || '',
          warnings,
          errors: ['PDF appears to be empty or contains only images. OCR not yet supported.'],
        };
      }
    } catch (err) {
      return {
        success: false,
        labResults: [],
        rawText: '',
        warnings,
        errors: [`Failed to read PDF: ${err instanceof Error ? err.message : 'Unknown error'}`],
      };
    }

    // Use LLM to extract structured lab data
    try {
      const labResults = await this.parseWithLLM(rawText);

      if (labResults.length === 0) {
        warnings.push('No lab results could be extracted from the document.');
      }

      return {
        success: labResults.length > 0,
        labResults,
        rawText,
        warnings,
        errors,
      };
    } catch (err) {
      return {
        success: false,
        labResults: [],
        rawText,
        warnings,
        errors: [`Failed to parse lab results: ${err instanceof Error ? err.message : 'Unknown error'}`],
      };
    }
  }

  /**
   * Import lab results from plain text (for manual paste)
   */
  async importFromText(text: string): Promise<LabImportResult> {
    const warnings: string[] = [];
    const errors: string[] = [];

    if (!text || text.trim().length < 20) {
      return {
        success: false,
        labResults: [],
        rawText: text || '',
        warnings,
        errors: ['Text is too short to contain lab results.'],
      };
    }

    try {
      const labResults = await this.parseWithLLM(text);

      if (labResults.length === 0) {
        warnings.push('No lab results could be extracted from the text.');
      }

      return {
        success: labResults.length > 0,
        labResults,
        rawText: text,
        warnings,
        errors,
      };
    } catch (err) {
      return {
        success: false,
        labResults: [],
        rawText: text,
        warnings,
        errors: [`Failed to parse lab results: ${err instanceof Error ? err.message : 'Unknown error'}`],
      };
    }
  }

  /**
   * Use local LLM to parse lab results from text
   */
  private async parseWithLLM(text: string): Promise<Omit<LabResult, 'id' | 'createdAt' | 'updatedAt'>[]> {
    const prompt = `You are a medical lab result parser. Extract lab results from the following text and return them as a JSON array.

For each lab result, extract:
- testName: The name of the test (e.g., "Hemoglobin", "TSH", "Ferritin")
- value: The numeric or string value
- unit: The unit of measurement (e.g., "g/dL", "mIU/L")
- referenceRange: An object with "low", "high", and/or "text" for the normal range
- status: One of "normal", "abnormal-low", "abnormal-high", or "critical"
- collectedAt: The collection date in ISO format if available

Return ONLY a valid JSON array. No explanations or markdown.

Example output format:
[
  {
    "testName": "Hemoglobin",
    "value": 14.2,
    "unit": "g/dL",
    "referenceRange": {"low": 12.0, "high": 16.0},
    "status": "normal",
    "collectedAt": "2024-01-15"
  }
]

Lab Report Text:
${text.slice(0, 8000)}`;

    const response = await this.ollama.generate({
      model: this.model,
      prompt,
      options: {
        temperature: 0.1, // Low temperature for consistent parsing
        num_predict: 4000,
      },
    });

    // Extract JSON from response
    const responseText = response.response.trim();

    // Try to find JSON array in response
    const jsonMatch = responseText.match(/\[[\s\S]*\]/);
    if (!jsonMatch) {
      console.error('LLM response did not contain valid JSON array:', responseText.slice(0, 200));
      return [];
    }

    try {
      const parsed: ParsedLabValue[] = JSON.parse(jsonMatch[0]);

      // Convert to LabResult format
      return parsed.map(item => ({
        testName: item.testName,
        value: item.value,
        unit: item.unit,
        referenceRange: item.referenceRange as ReferenceRange | undefined,
        status: item.status,
        collectedAt: item.collectedAt ? new Date(item.collectedAt) : new Date(),
      }));
    } catch (parseErr) {
      console.error('Failed to parse LLM JSON output:', parseErr);
      return [];
    }
  }

  /**
   * Generate IDs and timestamps for lab results
   */
  finalizeLabResults(
    results: Omit<LabResult, 'id' | 'createdAt' | 'updatedAt'>[]
  ): LabResult[] {
    const now = new Date();
    return results.map(result => ({
      ...result,
      id: uuidv4(),
      createdAt: now,
      updatedAt: now,
    }));
  }
}

// ============================================================================
// Convenience Functions
// ============================================================================

export async function importLabsFromPDF(filePath: string): Promise<LabImportResult> {
  const importer = new LabImporter();
  return importer.importFromPDF(filePath);
}

export async function importLabsFromText(text: string): Promise<LabImportResult> {
  const importer = new LabImporter();
  return importer.importFromText(text);
}
