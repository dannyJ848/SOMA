/**
 * Import Whoop Wearable Data
 *
 * Imports physiological cycles (recovery, strain, sleep) and workouts
 * from Whoop data export.
 */

import { join } from 'path';
import { readFileSync } from 'fs';
import { BiologicalSelfStore } from './core/biological-self/store.js';
import type { WhoopCycle, WhoopWorkout } from './core/biological-self/types.js';

const DATA_DIR = join(process.cwd(), 'data');
const DB_PATH = join(DATA_DIR, 'biological-self.db');

const WHOOP_EXPORT_DIR = '/Users/dannygomez/Downloads/my_whoop_data_2026_01_01';

// Parse CSV helper
function parseCSV(content: string): Record<string, string>[] {
  const lines = content.trim().split('\n');
  const headers = parseCSVLine(lines[0]);
  const rows: Record<string, string>[] = [];

  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i]);
    const row: Record<string, string> = {};
    for (let j = 0; j < headers.length; j++) {
      row[headers[j]] = values[j] || '';
    }
    rows.push(row);
  }

  return rows;
}

function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current.trim());

  return result;
}

// Parse date from various Whoop formats
function parseWhoopDate(dateStr: string): Date | undefined {
  if (!dateStr) return undefined;

  // Try ISO format first: "2025-12-31 23:36:33"
  if (dateStr.includes('-') && dateStr.length > 10) {
    return new Date(dateStr.replace(' ', 'T') + 'Z');
  }

  // Try US format: "11/5/25 2:17"
  const usMatch = dateStr.match(/^(\d{1,2})\/(\d{1,2})\/(\d{2})\s+(\d{1,2}):(\d{2})$/);
  if (usMatch) {
    const [, month, day, year, hour, minute] = usMatch;
    const fullYear = parseInt(year) + 2000;
    return new Date(fullYear, parseInt(month) - 1, parseInt(day), parseInt(hour), parseInt(minute));
  }

  return undefined;
}

function parseNumber(val: string): number | undefined {
  if (!val || val === '') return undefined;
  const num = parseFloat(val);
  return isNaN(num) ? undefined : num;
}

function parseCycles(filePath: string): Omit<WhoopCycle, 'id' | 'createdAt'>[] {
  const content = readFileSync(filePath, 'utf-8');
  const rows = parseCSV(content);
  const cycles: Omit<WhoopCycle, 'id' | 'createdAt'>[] = [];

  for (const row of rows) {
    const cycleStart = parseWhoopDate(row['Cycle start time']);
    if (!cycleStart) continue;

    cycles.push({
      cycleStart,
      cycleEnd: parseWhoopDate(row['Cycle end time']),
      timezone: row['Cycle timezone'] || 'UTC',

      // Recovery metrics
      recoveryScore: parseNumber(row['Recovery score %']),
      restingHeartRate: parseNumber(row['Resting heart rate (bpm)']),
      hrv: parseNumber(row['Heart rate variability (ms)']),
      skinTemp: parseNumber(row['Skin temp (celsius)']),
      bloodOxygen: parseNumber(row['Blood oxygen %']),

      // Strain metrics
      dayStrain: parseNumber(row['Day Strain']),
      energyBurned: parseNumber(row['Energy burned (cal)']),
      maxHR: parseNumber(row['Max HR (bpm)']),
      avgHR: parseNumber(row['Average HR (bpm)']),

      // Sleep metrics
      sleepOnset: parseWhoopDate(row['Sleep onset']),
      wakeOnset: parseWhoopDate(row['Wake onset']),
      sleepPerformance: parseNumber(row['Sleep performance %']),
      respiratoryRate: parseNumber(row['Respiratory rate (rpm)']),
      asleepDuration: parseNumber(row['Asleep duration (min)']),
      inBedDuration: parseNumber(row['In bed duration (min)']),
      lightSleepDuration: parseNumber(row['Light sleep duration (min)']),
      deepSleepDuration: parseNumber(row['Deep (SWS) duration (min)']),
      remSleepDuration: parseNumber(row['REM duration (min)']),
      awakeDuration: parseNumber(row['Awake duration (min)']),
      sleepNeed: parseNumber(row['Sleep need (min)']),
      sleepDebt: parseNumber(row['Sleep debt (min)']),
      sleepEfficiency: parseNumber(row['Sleep efficiency %']),
      sleepConsistency: parseNumber(row['Sleep consistency %']),
    });
  }

  return cycles;
}

function parseWorkouts(filePath: string): Omit<WhoopWorkout, 'id' | 'createdAt'>[] {
  const content = readFileSync(filePath, 'utf-8');
  const rows = parseCSV(content);
  const workouts: Omit<WhoopWorkout, 'id' | 'createdAt'>[] = [];

  for (const row of rows) {
    const workoutStart = parseWhoopDate(row['Workout start time']);
    const workoutEnd = parseWhoopDate(row['Workout end time']);
    const cycleStart = parseWhoopDate(row['Cycle start time']);

    if (!workoutStart || !workoutEnd || !cycleStart) continue;

    workouts.push({
      cycleStart,
      cycleEnd: parseWhoopDate(row['Cycle end time']),
      timezone: row['Cycle timezone'] || 'UTC',

      workoutStart,
      workoutEnd,
      duration: parseNumber(row['Duration (min)']) || 0,

      activityName: row['Activity name'] || 'Unknown',
      activityStrain: parseNumber(row['Activity Strain']) || 0,
      energyBurned: parseNumber(row['Energy burned (cal)']),

      maxHR: parseNumber(row['Max HR (bpm)']),
      avgHR: parseNumber(row['Average HR (bpm)']),

      hrZone1: parseNumber(row['HR Zone 1 %']),
      hrZone2: parseNumber(row['HR Zone 2 %']),
      hrZone3: parseNumber(row['HR Zone 3 %']),
      hrZone4: parseNumber(row['HR Zone 4 %']),
      hrZone5: parseNumber(row['HR Zone 5 %']),

      gpsEnabled: row['GPS enabled']?.toLowerCase() === 'true',
    });
  }

  return workouts;
}

async function main() {
  // Get passphrase from environment
  const passphrase = process.env.BIOSELF_PASSPHRASE;
  if (!passphrase) {
    console.error('Error: BIOSELF_PASSPHRASE environment variable is required.');
    console.error('Set it with: export BIOSELF_PASSPHRASE=your_passphrase');
    console.error('Or run with: BIOSELF_PASSPHRASE=your_passphrase npx tsx import-whoop.ts');
    process.exit(1);
  }

  console.log('╔══════════════════════════════════════════════════════════╗');
  console.log('║              Whoop Data Import                           ║');
  console.log('╚══════════════════════════════════════════════════════════╝\n');

  console.log('Using passphrase from BIOSELF_PASSPHRASE environment variable.\n');

  // Initialize store
  console.log('Connecting to database...');
  const store = new BiologicalSelfStore(DB_PATH, passphrase);

  let self = store.get();
  if (!self) {
    console.error('Error: No existing profile found.');
    process.exit(1);
  }

  console.log(`Loaded existing profile`);
  console.log(`  Existing Whoop cycles: ${self.whoopCycles?.length || 0}`);
  console.log(`  Existing Whoop workouts: ${self.whoopWorkouts?.length || 0}`);

  // Parse Whoop data
  console.log('\nParsing Whoop export files...\n');

  const cyclesFile = join(WHOOP_EXPORT_DIR, 'physiological_cycles.csv');
  const workoutsFile = join(WHOOP_EXPORT_DIR, 'workouts.csv');

  const cycles = parseCycles(cyclesFile);
  const workouts = parseWorkouts(workoutsFile);

  console.log(`Found ${cycles.length} physiological cycles`);
  console.log(`Found ${workouts.length} workouts`);

  // Check for existing data and filter duplicates
  const existingCycleStarts = new Set(
    (self.whoopCycles || []).map(c => c.cycleStart.toISOString())
  );
  const existingWorkoutStarts = new Set(
    (self.whoopWorkouts || []).map(w => w.workoutStart.toISOString())
  );

  const newCycles = cycles.filter(c => !existingCycleStarts.has(c.cycleStart.toISOString()));
  const newWorkouts = workouts.filter(w => !existingWorkoutStarts.has(w.workoutStart.toISOString()));

  console.log(`\nNew cycles to import: ${newCycles.length}`);
  console.log(`New workouts to import: ${newWorkouts.length}`);

  if (newCycles.length === 0 && newWorkouts.length === 0) {
    console.log('\n✓ All data already imported, nothing to do.');
    return;
  }

  // Import data
  if (newCycles.length > 0) {
    console.log('\nImporting physiological cycles...');
    store.addWhoopCycles(self, newCycles);
    self = store.get()!;
    console.log(`✓ Imported ${newCycles.length} cycles`);
  }

  if (newWorkouts.length > 0) {
    console.log('\nImporting workouts...');
    store.addWhoopWorkouts(self, newWorkouts);
    self = store.get()!;
    console.log(`✓ Imported ${newWorkouts.length} workouts`);
  }

  // Summary statistics
  console.log('\n' + '='.repeat(60));
  console.log('WHOOP DATA SUMMARY');
  console.log('='.repeat(60));

  const allCycles = self.whoopCycles || [];
  const allWorkouts = self.whoopWorkouts || [];

  if (allCycles.length > 0) {
    // Date range
    const sortedCycles = [...allCycles].sort((a, b) =>
      a.cycleStart.getTime() - b.cycleStart.getTime()
    );
    const firstDate = sortedCycles[0].cycleStart;
    const lastDate = sortedCycles[sortedCycles.length - 1].cycleStart;

    console.log(`\nData Range: ${firstDate.toLocaleDateString()} - ${lastDate.toLocaleDateString()}`);
    console.log(`Total Days: ${allCycles.length}`);

    // Recovery stats
    const recoveryScores = allCycles
      .map(c => c.recoveryScore)
      .filter((s): s is number => s !== undefined);
    if (recoveryScores.length > 0) {
      const avgRecovery = recoveryScores.reduce((a, b) => a + b, 0) / recoveryScores.length;
      const minRecovery = Math.min(...recoveryScores);
      const maxRecovery = Math.max(...recoveryScores);
      console.log(`\nRecovery Score:`);
      console.log(`  Average: ${avgRecovery.toFixed(1)}%`);
      console.log(`  Range: ${minRecovery}% - ${maxRecovery}%`);
    }

    // HRV stats
    const hrvValues = allCycles
      .map(c => c.hrv)
      .filter((h): h is number => h !== undefined);
    if (hrvValues.length > 0) {
      const avgHRV = hrvValues.reduce((a, b) => a + b, 0) / hrvValues.length;
      const minHRV = Math.min(...hrvValues);
      const maxHRV = Math.max(...hrvValues);
      console.log(`\nHeart Rate Variability:`);
      console.log(`  Average: ${avgHRV.toFixed(1)} ms`);
      console.log(`  Range: ${minHRV} - ${maxHRV} ms`);
    }

    // Resting HR stats
    const rhrValues = allCycles
      .map(c => c.restingHeartRate)
      .filter((r): r is number => r !== undefined);
    if (rhrValues.length > 0) {
      const avgRHR = rhrValues.reduce((a, b) => a + b, 0) / rhrValues.length;
      console.log(`\nResting Heart Rate:`);
      console.log(`  Average: ${avgRHR.toFixed(1)} bpm`);
    }

    // Sleep stats
    const sleepDurations = allCycles
      .map(c => c.asleepDuration)
      .filter((s): s is number => s !== undefined);
    if (sleepDurations.length > 0) {
      const avgSleep = sleepDurations.reduce((a, b) => a + b, 0) / sleepDurations.length;
      console.log(`\nSleep:`);
      console.log(`  Average Duration: ${(avgSleep / 60).toFixed(1)} hours`);
    }

    // Strain stats
    const strainValues = allCycles
      .map(c => c.dayStrain)
      .filter((s): s is number => s !== undefined);
    if (strainValues.length > 0) {
      const avgStrain = strainValues.reduce((a, b) => a + b, 0) / strainValues.length;
      console.log(`\nDaily Strain:`);
      console.log(`  Average: ${avgStrain.toFixed(1)}`);
    }
  }

  // Workout summary
  if (allWorkouts.length > 0) {
    console.log(`\nWorkouts: ${allWorkouts.length} total`);

    // Activity breakdown
    const activityCounts: Record<string, number> = {};
    for (const w of allWorkouts) {
      activityCounts[w.activityName] = (activityCounts[w.activityName] || 0) + 1;
    }

    const sortedActivities = Object.entries(activityCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);

    console.log(`  Top Activities:`);
    for (const [activity, count] of sortedActivities) {
      console.log(`    • ${activity}: ${count}`);
    }
  }

  console.log(`\nTotal Whoop cycles in database: ${self.whoopCycles?.length || 0}`);
  console.log(`Total Whoop workouts in database: ${self.whoopWorkouts?.length || 0}`);
}

main().catch(console.error);
