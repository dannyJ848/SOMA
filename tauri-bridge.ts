/**
 * Tauri Bridge - CLI interface for Tauri IPC
 *
 * This script is called by Tauri Rust commands to interact with the
 * TypeScript database layer. It reads environment variables for
 * configuration and outputs JSON to stdout.
 */

import { BiologicalSelfStore } from './core/biological-self/store.js';
import type { BiologicalSelf, LabResult, Condition, Medication } from './core/biological-self/types.js';

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
    recentSymptoms: [], // Will be populated when symptoms are added (US-013)
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
