/**
 * Apple Health Import Module
 *
 * Imports health data from Apple Health export files.
 * Apple Health exports data as a zip containing export.xml
 */

import * as fs from 'fs';
import { createReadStream } from 'fs';
import { createInterface } from 'readline';
import { v4 as uuidv4 } from 'uuid';
import type { VitalSign, LabResult, BloodPressure } from '../biological-self/types.js';

// ============================================================================
// Types
// ============================================================================

export interface AppleHealthImportResult {
  success: boolean;
  vitals: Omit<VitalSign, 'id' | 'createdAt'>[];
  labs: Omit<LabResult, 'id' | 'createdAt' | 'updatedAt'>[];
  stats: {
    recordsProcessed: number;
    vitalsImported: number;
    labsImported: number;
  };
  warnings: string[];
  errors: string[];
}

interface HealthRecord {
  type: string;
  value: string;
  unit: string;
  startDate: string;
  endDate: string;
  sourceName?: string;
}

// Map Apple Health types to our vital sign types
const VITAL_TYPE_MAP: Record<string, VitalSign['type']> = {
  'HKQuantityTypeIdentifierHeartRate': 'heart-rate',
  'HKQuantityTypeIdentifierBloodPressureSystolic': 'blood-pressure',
  'HKQuantityTypeIdentifierBloodPressureDiastolic': 'blood-pressure',
  'HKQuantityTypeIdentifierBodyTemperature': 'temperature',
  'HKQuantityTypeIdentifierOxygenSaturation': 'oxygen-saturation',
  'HKQuantityTypeIdentifierRespiratoryRate': 'respiratory-rate',
  'HKQuantityTypeIdentifierBodyMass': 'weight',
  'HKQuantityTypeIdentifierBloodGlucose': 'glucose',
  'HKQuantityTypeIdentifierHeartRateVariabilitySDNN': 'hrv',
};

// Map Apple Health types to lab result names
const LAB_TYPE_MAP: Record<string, string> = {
  'HKQuantityTypeIdentifierBloodGlucose': 'Blood Glucose',
  'HKQuantityTypeIdentifierInsulinDelivery': 'Insulin',
  'HKQuantityTypeIdentifierNumberOfTimesFallen': 'Falls',
};

// ============================================================================
// Apple Health Importer
// ============================================================================

export class AppleHealthImporter {
  /**
   * Import from Apple Health export.xml file
   * Uses streaming to handle large files
   */
  async importFromXML(filePath: string): Promise<AppleHealthImportResult> {
    const warnings: string[] = [];
    const errors: string[] = [];
    const vitals: Omit<VitalSign, 'id' | 'createdAt'>[] = [];
    const labs: Omit<LabResult, 'id' | 'createdAt' | 'updatedAt'>[] = [];
    let recordsProcessed = 0;

    if (!fs.existsSync(filePath)) {
      return {
        success: false,
        vitals: [],
        labs: [],
        stats: { recordsProcessed: 0, vitalsImported: 0, labsImported: 0 },
        warnings,
        errors: [`File not found: ${filePath}`],
      };
    }

    try {
      // Stream the file line by line to handle large exports
      const fileStream = createReadStream(filePath);
      const rl = createInterface({
        input: fileStream,
        crlfDelay: Infinity,
      });

      // Buffer for blood pressure pairs
      const bpBuffer: Map<string, { systolic?: number; diastolic?: number; date: Date }> = new Map();

      for await (const line of rl) {
        // Look for Record elements
        if (!line.includes('<Record')) continue;

        try {
          const record = this.parseRecordLine(line);
          if (!record) continue;

          recordsProcessed++;

          // Handle vitals
          if (VITAL_TYPE_MAP[record.type]) {
            const vitalType = VITAL_TYPE_MAP[record.type];
            const value = parseFloat(record.value);
            const recordedAt = new Date(record.startDate);

            // Handle blood pressure specially (need to pair systolic/diastolic)
            if (record.type === 'HKQuantityTypeIdentifierBloodPressureSystolic' ||
                record.type === 'HKQuantityTypeIdentifierBloodPressureDiastolic') {
              const key = record.startDate;
              const existing = bpBuffer.get(key) || { date: recordedAt };

              if (record.type.includes('Systolic')) {
                existing.systolic = value;
              } else {
                existing.diastolic = value;
              }

              if (existing.systolic && existing.diastolic) {
                vitals.push({
                  type: 'blood-pressure',
                  value: { systolic: existing.systolic, diastolic: existing.diastolic } as BloodPressure,
                  unit: 'mmHg',
                  recordedAt: existing.date,
                  source: 'wearable',
                  device: record.sourceName,
                });
                bpBuffer.delete(key);
              } else {
                bpBuffer.set(key, existing);
              }
            } else {
              vitals.push({
                type: vitalType,
                value,
                unit: this.normalizeUnit(record.unit),
                recordedAt,
                source: 'wearable',
                device: record.sourceName,
              });
            }
          }

          // Handle labs (glucose, etc.)
          if (LAB_TYPE_MAP[record.type]) {
            labs.push({
              testName: LAB_TYPE_MAP[record.type],
              value: parseFloat(record.value),
              unit: this.normalizeUnit(record.unit),
              collectedAt: new Date(record.startDate),
              notes: `Imported from Apple Health (${record.sourceName || 'unknown source'})`,
            });
          }
        } catch (parseErr) {
          // Skip malformed records silently
        }
      }

      // Deduplicate vitals (Apple Health can have many duplicates)
      const dedupedVitals = this.deduplicateVitals(vitals);
      const dedupedLabs = this.deduplicateLabs(labs);

      if (dedupedVitals.length < vitals.length) {
        warnings.push(`Removed ${vitals.length - dedupedVitals.length} duplicate vital signs`);
      }

      return {
        success: true,
        vitals: dedupedVitals,
        labs: dedupedLabs,
        stats: {
          recordsProcessed,
          vitalsImported: dedupedVitals.length,
          labsImported: dedupedLabs.length,
        },
        warnings,
        errors,
      };
    } catch (err) {
      return {
        success: false,
        vitals: [],
        labs: [],
        stats: { recordsProcessed, vitalsImported: 0, labsImported: 0 },
        warnings,
        errors: [`Failed to parse XML: ${err instanceof Error ? err.message : 'Unknown error'}`],
      };
    }
  }

  /**
   * Parse a single Record line from the XML
   */
  private parseRecordLine(line: string): HealthRecord | null {
    // Extract attributes using regex
    const typeMatch = line.match(/type="([^"]+)"/);
    const valueMatch = line.match(/value="([^"]+)"/);
    const unitMatch = line.match(/unit="([^"]+)"/);
    const startDateMatch = line.match(/startDate="([^"]+)"/);
    const endDateMatch = line.match(/endDate="([^"]+)"/);
    const sourceMatch = line.match(/sourceName="([^"]+)"/);

    if (!typeMatch || !valueMatch || !startDateMatch) {
      return null;
    }

    return {
      type: typeMatch[1],
      value: valueMatch[1],
      unit: unitMatch ? unitMatch[1] : '',
      startDate: startDateMatch[1],
      endDate: endDateMatch ? endDateMatch[1] : startDateMatch[1],
      sourceName: sourceMatch ? sourceMatch[1] : undefined,
    };
  }

  /**
   * Normalize Apple Health units to standard units
   */
  private normalizeUnit(unit: string): string {
    const unitMap: Record<string, string> = {
      'count/min': 'bpm',
      'degF': '°F',
      'degC': '°C',
      'lb': 'lbs',
      'mg/dL': 'mg/dL',
      '%': '%',
      'ms': 'ms',
    };
    return unitMap[unit] || unit;
  }

  /**
   * Deduplicate vitals by type and timestamp (within 1 minute)
   */
  private deduplicateVitals(
    vitals: Omit<VitalSign, 'id' | 'createdAt'>[]
  ): Omit<VitalSign, 'id' | 'createdAt'>[] {
    const seen = new Set<string>();
    return vitals.filter(v => {
      // Round timestamp to nearest minute for deduplication
      const timestamp = Math.floor(v.recordedAt.getTime() / 60000);
      const key = `${v.type}-${timestamp}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  /**
   * Deduplicate labs by test name and timestamp
   */
  private deduplicateLabs(
    labs: Omit<LabResult, 'id' | 'createdAt' | 'updatedAt'>[]
  ): Omit<LabResult, 'id' | 'createdAt' | 'updatedAt'>[] {
    const seen = new Set<string>();
    return labs.filter(l => {
      const timestamp = Math.floor(l.collectedAt.getTime() / 60000);
      const key = `${l.testName}-${timestamp}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  /**
   * Get summary of what would be imported (for preview)
   */
  async previewImport(filePath: string): Promise<{
    recordTypes: Map<string, number>;
    dateRange: { start: Date | null; end: Date | null };
    totalRecords: number;
  }> {
    const recordTypes = new Map<string, number>();
    let totalRecords = 0;
    let start: Date | null = null;
    let end: Date | null = null;

    if (!fs.existsSync(filePath)) {
      return { recordTypes, dateRange: { start: null, end: null }, totalRecords: 0 };
    }

    const fileStream = createReadStream(filePath);
    const rl = createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });

    for await (const line of rl) {
      if (!line.includes('<Record')) continue;

      const typeMatch = line.match(/type="([^"]+)"/);
      const dateMatch = line.match(/startDate="([^"]+)"/);

      if (typeMatch) {
        const type = typeMatch[1];
        recordTypes.set(type, (recordTypes.get(type) || 0) + 1);
        totalRecords++;
      }

      if (dateMatch) {
        const date = new Date(dateMatch[1]);
        if (!start || date < start) start = date;
        if (!end || date > end) end = date;
      }

      // Stop after sampling enough records for preview
      if (totalRecords > 10000) break;
    }

    return { recordTypes, dateRange: { start, end }, totalRecords };
  }
}

// ============================================================================
// Convenience Functions
// ============================================================================

export async function importFromAppleHealth(filePath: string): Promise<AppleHealthImportResult> {
  const importer = new AppleHealthImporter();
  return importer.importFromXML(filePath);
}
