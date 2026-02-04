/**
 * Tauri Bridge - CLI interface for Tauri IPC
 *
 * This script is called by Tauri Rust commands to interact with the
 * TypeScript database layer. It reads environment variables for
 * configuration and outputs JSON to stdout.
 */

import { BiologicalSelfStore } from './core/biological-self/store.js';
import type { BiologicalSelf, LabResult, Condition, Medication, Symptom, AssociatedFactor } from './core/biological-self/types.js';
import {
  MedicalRecordExtractor,
  convertExtractedLabs,
  convertExtractedMedications,
  convertExtractedConditions,
  detectAllDuplicates,
} from './core/import/index.js';
import type { MedicalRecordExtraction } from './core/import/index.js';

interface HealthSummary {
  totalConditions: number;
  totalMedications: number;
  totalLabResults: number;
  totalWhoopCycles: number;
  totalAppleHealthDays: number;
  lastUpdated: string | null;
}

interface LabWithTrend {
  id: string;
  testName: string;
  value: number | string;
  unit?: string;
  status?: string;
  collectedAt: string;
  trend?: 'up' | 'down' | 'stable' | null;
  previousValue?: number | string;
}

interface VitalSummary {
  restingHeartRate?: number;
  hrv?: number;
  sleepHours?: number;
  recoveryScore?: number;
  steps?: number;
  lastUpdated?: string;
}

interface DashboardData {
  summary: HealthSummary;
  activeConditions: Array<{
    id: string;
    name: string;
    status: string;
    severity?: string;
    diagnosedDate?: string;
  }>;
  currentMedications: Array<{
    id: string;
    name: string;
    dosage?: string;
    frequency?: string;
  }>;
  recentLabs: LabWithTrend[];
  vitalsSummary: VitalSummary;
  recentSymptoms: Array<{
    id: string;
    description: string;
    severity: number;
    location?: string;
    onsetDate: string;
  }>;
}

// Timeline event types
type TimelineEventType = 'lab' | 'imaging' | 'condition' | 'medication' | 'surgery' | 'symptom';

interface TimelineEvent {
  id: string;
  type: TimelineEventType;
  date: string;
  title: string;
  subtitle?: string;
  details?: Record<string, unknown>;
}

interface TimelineData {
  events: TimelineEvent[];
  filters: {
    types: TimelineEventType[];
    startDate?: string;
    endDate?: string;
  };
  totalCount: number;
}

function getEnvOrFail(name: string): string {
  const value = process.env[name];
  if (!value) {
    console.error(`Missing required environment variable: ${name}`);
    process.exit(1);
  }
  return value;
}

function getSummary(self: BiologicalSelf | null): HealthSummary {
  if (!self) {
    return {
      totalConditions: 0,
      totalMedications: 0,
      totalLabResults: 0,
      totalWhoopCycles: 0,
      totalAppleHealthDays: 0,
      lastUpdated: null,
    };
  }

  return {
    totalConditions: self.conditions.length,
    totalMedications: self.medications.length,
    totalLabResults: self.labResults.length,
    totalWhoopCycles: self.whoopCycles.length,
    totalAppleHealthDays: self.appleHealthDailySummaries.length,
    lastUpdated: self.updatedAt.toISOString(),
  };
}

function getActiveConditions(self: BiologicalSelf): DashboardData['activeConditions'] {
  return self.conditions
    .filter((c: Condition) => c.status === 'active' || c.status === 'chronic')
    .map((c: Condition) => ({
      id: c.id,
      name: c.name,
      status: c.status,
      severity: c.severity,
      diagnosedDate: c.diagnosedDate?.toISOString(),
    }));
}

function getCurrentMedications(self: BiologicalSelf): DashboardData['currentMedications'] {
  return self.medications
    .filter((m: Medication) => m.status === 'current' || m.status === 'as-needed')
    .map((m: Medication) => ({
      id: m.id,
      name: m.name,
      dosage: m.dosage ? `${m.dosage.amount}${m.dosage.unit}` : undefined,
      frequency: m.frequency,
    }));
}

function getRecentLabsWithTrends(self: BiologicalSelf, limit: number = 10): LabWithTrend[] {
  // Sort by date descending
  const sortedLabs = [...self.labResults].sort(
    (a, b) => b.collectedAt.getTime() - a.collectedAt.getTime()
  );

  // Get unique test names from recent labs
  const seenTests = new Set<string>();
  const recentLabs: LabWithTrend[] = [];

  for (const lab of sortedLabs) {
    if (seenTests.has(lab.testName)) continue;
    seenTests.add(lab.testName);

    // Find previous value for same test
    const previousLab = sortedLabs.find(
      (l: LabResult) => l.testName === lab.testName && l.id !== lab.id
    );

    let trend: 'up' | 'down' | 'stable' | null = null;
    let previousValue: number | string | undefined;

    if (previousLab && typeof lab.value === 'number' && typeof previousLab.value === 'number') {
      previousValue = previousLab.value;
      const diff = lab.value - previousLab.value;
      const threshold = Math.abs(previousLab.value * 0.05); // 5% threshold

      if (diff > threshold) trend = 'up';
      else if (diff < -threshold) trend = 'down';
      else trend = 'stable';
    }

    recentLabs.push({
      id: lab.id,
      testName: lab.testName,
      value: lab.value,
      unit: lab.unit,
      status: lab.status,
      collectedAt: lab.collectedAt.toISOString(),
      trend,
      previousValue,
    });

    if (recentLabs.length >= limit) break;
  }

  return recentLabs;
}

function getVitalsSummary(self: BiologicalSelf): VitalSummary {
  const summary: VitalSummary = {};

  // Get most recent Whoop cycle for recovery metrics
  if (self.whoopCycles.length > 0) {
    const sortedCycles = [...self.whoopCycles].sort(
      (a, b) => b.cycleStart.getTime() - a.cycleStart.getTime()
    );
    const recent = sortedCycles[0];

    if (recent.restingHeartRate) summary.restingHeartRate = recent.restingHeartRate;
    if (recent.hrv) summary.hrv = recent.hrv;
    if (recent.recoveryScore) summary.recoveryScore = recent.recoveryScore;
    if (recent.asleepDuration) {
      // Convert sleep duration from minutes to hours
      summary.sleepHours = Math.round((recent.asleepDuration / 60) * 10) / 10;
    }
    summary.lastUpdated = recent.cycleStart.toISOString();
  }

  // Get steps from Apple Health if available
  if (self.appleHealthDailySummaries.length > 0) {
    const sortedSummaries = [...self.appleHealthDailySummaries].sort(
      (a, b) => b.date.getTime() - a.date.getTime()
    );
    const recent = sortedSummaries[0];

    if (recent.stepCount) summary.steps = recent.stepCount;
    if (!summary.lastUpdated) summary.lastUpdated = recent.date.toISOString();
  }

  return summary;
}

function getTimelineEvents(
  self: BiologicalSelf,
  types?: TimelineEventType[],
  startDate?: Date,
  endDate?: Date
): TimelineEvent[] {
  const events: TimelineEvent[] = [];
  const allowedTypes = types || ['lab', 'imaging', 'condition', 'medication', 'surgery', 'symptom'];

  // Labs
  if (allowedTypes.includes('lab')) {
    for (const lab of self.labResults) {
      const date = lab.collectedAt;
      if (startDate && date < startDate) continue;
      if (endDate && date > endDate) continue;

      events.push({
        id: lab.id,
        type: 'lab',
        date: date.toISOString(),
        title: lab.testName,
        subtitle: typeof lab.value === 'number'
          ? `${lab.value}${lab.unit ? ' ' + lab.unit : ''}`
          : String(lab.value),
        details: {
          value: lab.value,
          unit: lab.unit,
          status: lab.status,
          referenceRange: lab.referenceRange,
        },
      });
    }
  }

  // Imaging
  if (allowedTypes.includes('imaging')) {
    for (const img of self.imaging) {
      const date = img.date;
      if (startDate && date < startDate) continue;
      if (endDate && date > endDate) continue;

      events.push({
        id: img.id,
        type: 'imaging',
        date: date.toISOString(),
        title: `${img.type.toUpperCase()} - ${img.bodyPart}`,
        subtitle: img.indication,
        details: {
          type: img.type,
          bodyPart: img.bodyPart,
          findings: img.findings,
          impression: img.impression,
        },
      });
    }
  }

  // Conditions (diagnosed date)
  if (allowedTypes.includes('condition')) {
    for (const cond of self.conditions) {
      if (cond.diagnosedDate) {
        const date = cond.diagnosedDate;
        if (startDate && date < startDate) continue;
        if (endDate && date > endDate) continue;

        events.push({
          id: cond.id,
          type: 'condition',
          date: date.toISOString(),
          title: cond.name,
          subtitle: `Diagnosed - ${cond.status}`,
          details: {
            status: cond.status,
            severity: cond.severity,
            icdCode: cond.icdCode,
          },
        });
      }
    }
  }

  // Medications (start date)
  if (allowedTypes.includes('medication')) {
    for (const med of self.medications) {
      if (med.startDate) {
        const date = med.startDate;
        if (startDate && date < startDate) continue;
        if (endDate && date > endDate) continue;

        events.push({
          id: med.id,
          type: 'medication',
          date: date.toISOString(),
          title: med.name,
          subtitle: med.dosage ? `Started - ${med.dosage.amount}${med.dosage.unit}` : 'Started',
          details: {
            dosage: med.dosage,
            frequency: med.frequency,
            status: med.status,
            prescribedFor: med.prescribedFor,
          },
        });
      }
    }
  }

  // Surgeries
  if (allowedTypes.includes('surgery')) {
    for (const surg of self.surgicalHistory) {
      if (surg.date) {
        const date = surg.date;
        if (startDate && date < startDate) continue;
        if (endDate && date > endDate) continue;

        events.push({
          id: surg.id,
          type: 'surgery',
          date: date.toISOString(),
          title: surg.procedure,
          subtitle: surg.reason,
          details: {
            outcome: surg.outcome,
            complications: surg.complications,
            hospital: surg.hospital,
          },
        });
      }
    }
  }

  // Symptoms
  if (allowedTypes.includes('symptom')) {
    for (const symptom of self.symptoms) {
      const date = symptom.onsetDate;
      if (startDate && date < startDate) continue;
      if (endDate && date > endDate) continue;

      events.push({
        id: symptom.id,
        type: 'symptom',
        date: date.toISOString(),
        title: symptom.description,
        subtitle: `Severity: ${symptom.severity}/10 - ${symptom.bodyLocation.split('.').pop()?.replace(/-/g, ' ')}`,
        details: {
          severity: symptom.severity,
          bodyLocation: symptom.bodyLocation,
          status: symptom.status,
          frequency: symptom.frequency,
          associatedFactors: symptom.associatedFactors,
          notes: symptom.notes,
        },
      });
    }
  }

  // Sort by date descending (most recent first)
  events.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return events;
}

function getTimelineData(
  self: BiologicalSelf | null,
  types?: TimelineEventType[],
  startDate?: string,
  endDate?: string
): TimelineData {
  if (!self) {
    return {
      events: [],
      filters: { types: types || ['lab', 'imaging', 'condition', 'medication', 'surgery', 'symptom'] },
      totalCount: 0,
    };
  }

  const start = startDate ? new Date(startDate) : undefined;
  const end = endDate ? new Date(endDate) : undefined;
  const events = getTimelineEvents(self, types, start, end);

  return {
    events,
    filters: {
      types: types || ['lab', 'imaging', 'condition', 'medication', 'surgery', 'symptom'],
      startDate,
      endDate,
    },
    totalCount: events.length,
  };
}

function getRecentSymptoms(self: BiologicalSelf): DashboardData['recentSymptoms'] {
  // Get active symptoms, sorted by onset date (most recent first)
  return self.symptoms
    .filter(s => s.status === 'active' || s.status === 'recurring')
    .sort((a, b) => b.onsetDate.getTime() - a.onsetDate.getTime())
    .slice(0, 10)
    .map(s => ({
      id: s.id,
      description: s.description,
      severity: s.severity,
      location: s.bodyLocation,
      onsetDate: s.onsetDate.toISOString(),
    }));
}

function getDashboardData(self: BiologicalSelf | null): DashboardData {
  if (!self) {
    return {
      summary: getSummary(null),
      activeConditions: [],
      currentMedications: [],
      recentLabs: [],
      vitalsSummary: {},
      recentSymptoms: [],
    };
  }

  return {
    summary: getSummary(self),
    activeConditions: getActiveConditions(self),
    currentMedications: getCurrentMedications(self),
    recentLabs: getRecentLabsWithTrends(self),
    vitalsSummary: getVitalsSummary(self),
    recentSymptoms: getRecentSymptoms(self),
  };
}

async function main() {
  const command = process.argv[2];
  const passphrase = getEnvOrFail('BIOSELF_PASSPHRASE');
  const dbPath = getEnvOrFail('BIOSELF_DB_PATH');

  const store = new BiologicalSelfStore(dbPath, passphrase);

  try {
    switch (command) {
      case 'get-summary': {
        const self = store.get();
        const summary = getSummary(self);
        console.log(JSON.stringify(summary));
        break;
      }

      case 'get-dashboard': {
        const self = store.get();
        const dashboard = getDashboardData(self);
        console.log(JSON.stringify(dashboard));
        break;
      }

      case 'get-timeline': {
        const self = store.get();
        // Parse optional filters from args
        const typesArg = process.argv[3];
        const startDateArg = process.argv[4];
        const endDateArg = process.argv[5];

        const types = typesArg ? (typesArg.split(',') as TimelineEventType[]) : undefined;
        const timeline = getTimelineData(self, types, startDateArg, endDateArg);
        console.log(JSON.stringify(timeline));
        break;
      }

      case 'create': {
        const existing = store.get();
        if (existing) {
          const summary = getSummary(existing);
          console.log(JSON.stringify(summary));
        } else {
          store.create();
          const self = store.get();
          const summary = getSummary(self);
          console.log(JSON.stringify(summary));
        }
        break;
      }

      case 'add-symptom': {
        // Read symptom data from argument (JSON string)
        const symptomJson = process.argv[3];
        if (!symptomJson) {
          console.error('Missing symptom data');
          process.exit(1);
        }

        const symptomData = JSON.parse(symptomJson) as {
          description: string;
          severity: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
          bodyLocation: string;
          onsetDate: string;
          duration?: { value: number; unit: string };
          status: 'active' | 'resolved' | 'recurring';
          associatedFactors?: AssociatedFactor[];
          frequency?: string;
          timeOfDay?: string;
          notes?: string;
        };

        let self = store.get();
        if (!self) {
          console.error('No database found');
          process.exit(1);
        }

        const newSymptom = store.addSymptom(self, {
          description: symptomData.description,
          severity: symptomData.severity,
          bodyLocation: symptomData.bodyLocation,
          onsetDate: new Date(symptomData.onsetDate),
          duration: symptomData.duration as Symptom['duration'],
          status: symptomData.status,
          associatedFactors: symptomData.associatedFactors,
          frequency: symptomData.frequency as Symptom['frequency'],
          timeOfDay: symptomData.timeOfDay as Symptom['timeOfDay'],
          notes: symptomData.notes,
        });

        // Refresh to get latest state
        self = store.get();
        console.log(JSON.stringify({
          success: true,
          symptom: {
            ...newSymptom,
            onsetDate: newSymptom.onsetDate.toISOString(),
            resolvedDate: newSymptom.resolvedDate?.toISOString(),
            createdAt: newSymptom.createdAt.toISOString(),
            updatedAt: newSymptom.updatedAt.toISOString(),
          },
        }));
        break;
      }

      // P4.1.1: Medical Record PDF Import
      case 'parse-medical-record-pdf': {
        const filePath = process.argv[3];
        if (!filePath) {
          console.error('Missing file path');
          process.exit(1);
        }

        const extractor = new MedicalRecordExtractor();
        const extraction = await extractor.extractFromPDF(filePath);

        console.log(JSON.stringify({
          ...extraction,
          // Convert dates to ISO strings for JSON serialization
          labs: extraction.labs.map(lab => ({
            ...lab,
            collectedAt: lab.collectedAt,
          })),
          medications: extraction.medications.map(med => ({
            ...med,
            prescribedAt: med.prescribedAt,
          })),
          conditions: extraction.conditions.map(cond => ({
            ...cond,
            onsetDate: cond.onsetDate,
            resolvedDate: cond.resolvedDate,
          })),
          imaging: extraction.imaging.map(img => ({
            ...img,
            date: img.date,
          })),
          vitals: extraction.vitals.map(vital => ({
            ...vital,
            measuredAt: vital.measuredAt,
          })),
        }));
        break;
      }

      case 'check-import-duplicates': {
        const extractionJson = process.argv[3];
        if (!extractionJson) {
          console.error('Missing extraction data');
          process.exit(1);
        }

        const extraction = JSON.parse(extractionJson) as MedicalRecordExtraction;
        const self = store.get();

        if (!self) {
          console.error('No database found');
          process.exit(1);
        }

        // Convert extracted data to BiologicalSelf format
        const defaultDate = extraction.dateOfService ? new Date(extraction.dateOfService) : new Date();
        const labs = convertExtractedLabs(extraction.labs, defaultDate);
        const medications = convertExtractedMedications(extraction.medications, defaultDate);
        const conditions = convertExtractedConditions(extraction.conditions, defaultDate);

        // Check for duplicates
        const duplicates = detectAllDuplicates(
          { labs, medications, conditions },
          {
            labs: self.labResults,
            medications: self.medications,
            conditions: self.conditions,
          }
        );

        console.log(JSON.stringify({
          labs: {
            newItems: duplicates.labs.newItems.length,
            duplicates: duplicates.labs.duplicates.length,
            ambiguous: duplicates.labs.ambiguous.length,
          },
          medications: {
            newItems: duplicates.medications.newItems.length,
            duplicates: duplicates.medications.duplicates.length,
            ambiguous: duplicates.medications.ambiguous.length,
          },
          conditions: {
            newItems: duplicates.conditions.newItems.length,
            duplicates: duplicates.conditions.duplicates.length,
            ambiguous: duplicates.conditions.ambiguous.length,
          },
          details: duplicates,
        }));
        break;
      }

      case 'import-medical-record': {
        const extractionJson = process.argv[3];
        const importOptionsJson = process.argv[4] || '{}';

        if (!extractionJson) {
          console.error('Missing extraction data');
          process.exit(1);
        }

        const extraction = JSON.parse(extractionJson) as MedicalRecordExtraction;
        const importOptions = JSON.parse(importOptionsJson) as {
          skipDuplicates?: boolean;
          skipAmbiguous?: boolean;
        };

        let self = store.get();
        if (!self) {
          console.error('No database found');
          process.exit(1);
        }

        const defaultDate = extraction.dateOfService ? new Date(extraction.dateOfService) : new Date();
        const imported = {
          labs: 0,
          medications: 0,
          conditions: 0,
          imaging: 0,
          skipped: {
            labs: 0,
            medications: 0,
            conditions: 0,
          },
        };

        // Convert and import labs
        const labsToImport = convertExtractedLabs(extraction.labs, defaultDate);
        if (importOptions.skipDuplicates) {
          const dupCheck = detectAllDuplicates(
            { labs: labsToImport, medications: [], conditions: [] },
            { labs: self.labResults, medications: [], conditions: [] }
          );
          for (const lab of dupCheck.labs.newItems) {
            store.addLabResult(self, lab);
            imported.labs++;
          }
          imported.skipped.labs = dupCheck.labs.duplicates.length + dupCheck.labs.ambiguous.length;
        } else {
          for (const lab of labsToImport) {
            store.addLabResult(self, lab);
            imported.labs++;
          }
        }

        // Convert and import medications
        const medsToImport = convertExtractedMedications(extraction.medications, defaultDate);
        if (importOptions.skipDuplicates) {
          const dupCheck = detectAllDuplicates(
            { labs: [], medications: medsToImport, conditions: [] },
            { labs: [], medications: self.medications, conditions: [] }
          );
          for (const med of dupCheck.medications.newItems) {
            store.addMedication(self, med);
            imported.medications++;
          }
          imported.skipped.medications = dupCheck.medications.duplicates.length + dupCheck.medications.ambiguous.length;
        } else {
          for (const med of medsToImport) {
            store.addMedication(self, med);
            imported.medications++;
          }
        }

        // Convert and import conditions
        const condsToImport = convertExtractedConditions(extraction.conditions, defaultDate);
        if (importOptions.skipDuplicates) {
          const dupCheck = detectAllDuplicates(
            { labs: [], medications: [], conditions: condsToImport },
            { labs: [], medications: [], conditions: self.conditions }
          );
          for (const cond of dupCheck.conditions.newItems) {
            store.addCondition(self, cond);
            imported.conditions++;
          }
          imported.skipped.conditions = dupCheck.conditions.duplicates.length + dupCheck.conditions.ambiguous.length;
        } else {
          for (const cond of condsToImport) {
            store.addCondition(self, cond);
            imported.conditions++;
          }
        }

        // Refresh to get latest state
        self = store.get();

        console.log(JSON.stringify({
          success: true,
          imported,
          summary: {
            totalConditions: self.conditions.length,
            totalMedications: self.medications.length,
            totalLabResults: self.labResults.length,
          },
        }));
        break;
      }

      default:
        console.error(`Unknown command: ${command}`);
        process.exit(1);
    }
  } finally {
    store.close();
  }
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
