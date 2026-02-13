/**
 * Import Apple Health Data
 *
 * Parses Apple Health export.xml and imports:
 * - Daily activity summaries (steps, distance, energy, heart rate stats)
 * - Workouts
 * - Body measurements
 */

import { join } from 'path';
import { createReadStream } from 'fs';
import { createInterface } from 'readline';
import { BiologicalSelfStore } from './core/biological-self/store.js';
import type { AppleHealthDailySummary, AppleHealthWorkout } from './core/biological-self/types.js';

const DATA_DIR = join(process.cwd(), 'data');
const DB_PATH = join(DATA_DIR, 'biological-self.db');

const APPLE_HEALTH_EXPORT = '/Users/dannygomez/Downloads/apple_health_export/apple_health_export/export.xml';

// Types for aggregating daily data
interface DailyData {
  stepCount: number;
  distanceWalkingRunning: number;
  flightsClimbed: number;
  activeEnergyBurned: number;
  basalEnergyBurned: number;
  heartRates: number[];
  restingHeartRate?: number;
  bloodOxygen: number[];
  respiratoryRates: number[];
  sleepInBed: number;
  sleepAsleep: number;
  sleepAwake: number;
  sleepCore: number;
  sleepDeep: number;
  sleepREM: number;
  weight?: number;
  bodyFatPercentage?: number;
}

interface ParsedWorkout {
  workoutType: string;
  startDate: Date;
  endDate: Date;
  duration: number;
  totalDistance?: number;
  totalEnergyBurned?: number;
  sourceName: string;
}

// Extract attribute value from XML tag
function getAttr(line: string, attr: string): string | undefined {
  const regex = new RegExp(`${attr}="([^"]*)"`, 'i');
  const match = line.match(regex);
  return match ? match[1] : undefined;
}

// Parse Apple Health date format: "2025-01-15 10:30:00 -0600"
function parseDate(dateStr: string): Date | undefined {
  if (!dateStr) return undefined;
  // Convert to ISO format
  const isoStr = dateStr.replace(' ', 'T').replace(/ ([+-]\d{4})$/, '$1');
  const date = new Date(isoStr);
  return isNaN(date.getTime()) ? undefined : date;
}

// Get date key for daily aggregation (YYYY-MM-DD)
function getDateKey(date: Date): string {
  return date.toISOString().split('T')[0];
}

// Map workout activity type to readable name
function mapWorkoutType(hkType: string): string {
  const mapping: Record<string, string> = {
    'HKWorkoutActivityTypeRunning': 'Running',
    'HKWorkoutActivityTypeWalking': 'Walking',
    'HKWorkoutActivityTypeCycling': 'Cycling',
    'HKWorkoutActivityTypeSwimming': 'Swimming',
    'HKWorkoutActivityTypeYoga': 'Yoga',
    'HKWorkoutActivityTypeTraditionalStrengthTraining': 'Strength Training',
    'HKWorkoutActivityTypeFunctionalStrengthTraining': 'Functional Training',
    'HKWorkoutActivityTypeHiking': 'Hiking',
    'HKWorkoutActivityTypeElliptical': 'Elliptical',
    'HKWorkoutActivityTypeRowing': 'Rowing',
    'HKWorkoutActivityTypeStairClimbing': 'Stair Climbing',
    'HKWorkoutActivityTypeHighIntensityIntervalTraining': 'HIIT',
    'HKWorkoutActivityTypeOther': 'Other',
  };
  return mapping[hkType] || hkType.replace('HKWorkoutActivityType', '');
}

async function parseAppleHealthExport(): Promise<{
  dailyData: Map<string, DailyData>;
  workouts: ParsedWorkout[];
}> {
  const dailyData = new Map<string, DailyData>();
  const workouts: ParsedWorkout[] = [];

  const getOrCreateDay = (dateKey: string): DailyData => {
    if (!dailyData.has(dateKey)) {
      dailyData.set(dateKey, {
        stepCount: 0,
        distanceWalkingRunning: 0,
        flightsClimbed: 0,
        activeEnergyBurned: 0,
        basalEnergyBurned: 0,
        heartRates: [],
        bloodOxygen: [],
        respiratoryRates: [],
        sleepInBed: 0,
        sleepAsleep: 0,
        sleepAwake: 0,
        sleepCore: 0,
        sleepDeep: 0,
        sleepREM: 0,
      });
    }
    return dailyData.get(dateKey)!;
  };

  return new Promise((resolve, reject) => {
    const rl = createInterface({
      input: createReadStream(APPLE_HEALTH_EXPORT),
      crlfDelay: Infinity,
    });

    let lineCount = 0;
    let recordCount = 0;
    let workoutBuffer = '';
    let inWorkout = false;

    rl.on('line', (line) => {
      lineCount++;
      if (lineCount % 100000 === 0) {
        process.stdout.write(`\r  Processed ${lineCount.toLocaleString()} lines, ${recordCount.toLocaleString()} records...`);
      }

      // Handle multi-line workout elements
      if (line.includes('<Workout ')) {
        inWorkout = true;
        workoutBuffer = line;
      } else if (inWorkout) {
        workoutBuffer += ' ' + line.trim();
        if (line.includes('</Workout>') || line.includes('/>')) {
          inWorkout = false;
          // Process workout
          const workoutType = getAttr(workoutBuffer, 'workoutActivityType');
          const startDateStr = getAttr(workoutBuffer, 'startDate');
          const endDateStr = getAttr(workoutBuffer, 'endDate');
          const duration = parseFloat(getAttr(workoutBuffer, 'duration') || '0');
          const totalDistance = parseFloat(getAttr(workoutBuffer, 'totalDistance') || '0');
          const totalEnergyBurned = parseFloat(getAttr(workoutBuffer, 'totalEnergyBurned') || '0');
          const sourceName = getAttr(workoutBuffer, 'sourceName') || 'Unknown';

          if (workoutType && startDateStr && endDateStr) {
            const startDate = parseDate(startDateStr);
            const endDate = parseDate(endDateStr);
            if (startDate && endDate) {
              workouts.push({
                workoutType: mapWorkoutType(workoutType),
                startDate,
                endDate,
                duration,
                totalDistance: totalDistance > 0 ? totalDistance : undefined,
                totalEnergyBurned: totalEnergyBurned > 0 ? totalEnergyBurned : undefined,
                sourceName,
              });
            }
          }
          workoutBuffer = '';
        }
        return;
      }

      // Process Record elements
      if (!line.includes('<Record ')) return;

      const type = getAttr(line, 'type');
      const valueStr = getAttr(line, 'value');
      const startDateStr = getAttr(line, 'startDate');
      const endDateStr = getAttr(line, 'endDate');

      if (!type || !startDateStr) return;

      const startDate = parseDate(startDateStr);
      if (!startDate) return;

      const dateKey = getDateKey(startDate);
      const day = getOrCreateDay(dateKey);
      const value = valueStr ? parseFloat(valueStr) : 0;

      recordCount++;

      switch (type) {
        case 'HKQuantityTypeIdentifierStepCount':
          day.stepCount += value;
          break;

        case 'HKQuantityTypeIdentifierDistanceWalkingRunning':
          // Value is in meters or km depending on unit - Apple exports in km
          const unit = getAttr(line, 'unit');
          day.distanceWalkingRunning += unit === 'km' ? value * 1000 : value;
          break;

        case 'HKQuantityTypeIdentifierFlightsClimbed':
          day.flightsClimbed += value;
          break;

        case 'HKQuantityTypeIdentifierActiveEnergyBurned':
          day.activeEnergyBurned += value;
          break;

        case 'HKQuantityTypeIdentifierBasalEnergyBurned':
          day.basalEnergyBurned += value;
          break;

        case 'HKQuantityTypeIdentifierHeartRate':
          if (value > 0 && value < 300) {
            day.heartRates.push(value);
          }
          break;

        case 'HKQuantityTypeIdentifierRestingHeartRate':
          day.restingHeartRate = value;
          break;

        case 'HKQuantityTypeIdentifierOxygenSaturation':
          // Value is 0-1, convert to percentage
          const spo2 = value <= 1 ? value * 100 : value;
          if (spo2 > 0 && spo2 <= 100) {
            day.bloodOxygen.push(spo2);
          }
          break;

        case 'HKQuantityTypeIdentifierRespiratoryRate':
          if (value > 0 && value < 60) {
            day.respiratoryRates.push(value);
          }
          break;

        case 'HKQuantityTypeIdentifierBodyMass':
          // Store most recent weight for the day
          const weightUnit = getAttr(line, 'unit');
          day.weight = weightUnit === 'lb' ? value * 0.453592 : value; // Convert to kg
          break;

        case 'HKQuantityTypeIdentifierBodyFatPercentage':
          day.bodyFatPercentage = value <= 1 ? value * 100 : value;
          break;

        case 'HKCategoryTypeIdentifierSleepAnalysis':
          // Sleep analysis - value indicates sleep state
          // HKCategoryValueSleepAnalysis: 0=InBed, 1=Asleep, 2=Awake, 3=Core, 4=Deep, 5=REM
          const endDate = parseDate(endDateStr || '');
          if (endDate) {
            const durationMins = (endDate.getTime() - startDate.getTime()) / 60000;
            const sleepValue = parseInt(valueStr || '0');
            switch (sleepValue) {
              case 0: day.sleepInBed += durationMins; break;
              case 1: day.sleepAsleep += durationMins; break;
              case 2: day.sleepAwake += durationMins; break;
              case 3: day.sleepCore += durationMins; break;
              case 4: day.sleepDeep += durationMins; break;
              case 5: day.sleepREM += durationMins; break;
            }
          }
          break;
      }
    });

    rl.on('close', () => {
      console.log(`\r  Processed ${lineCount.toLocaleString()} lines, ${recordCount.toLocaleString()} records.`);
      resolve({ dailyData, workouts });
    });

    rl.on('error', reject);
  });
}

async function main() {
  // Get passphrase from environment
  const passphrase = process.env.BIOSELF_PASSPHRASE;
  if (!passphrase) {
    console.error('Error: BIOSELF_PASSPHRASE environment variable is required.');
    console.error('Set it with: export BIOSELF_PASSPHRASE=your_passphrase');
    console.error('Or run with: BIOSELF_PASSPHRASE=your_passphrase npx tsx import-apple-health.ts');
    process.exit(1);
  }

  console.log('╔══════════════════════════════════════════════════════════╗');
  console.log('║            Apple Health Data Import                      ║');
  console.log('╚══════════════════════════════════════════════════════════╝\n');

  console.log('Using passphrase from BIOSELF_PASSPHRASE environment variable.\n');

  // Parse Apple Health export
  console.log('Parsing Apple Health export (this may take a moment)...\n');
  const { dailyData, workouts } = await parseAppleHealthExport();

  console.log(`\nFound ${dailyData.size} days of health data`);
  console.log(`Found ${workouts.length} workouts`);

  // Initialize store
  console.log('\nConnecting to database...');
  const store = new BiologicalSelfStore(DB_PATH, passphrase);

  let self = store.get();
  if (!self) {
    console.error('Error: No existing profile found.');
    process.exit(1);
  }

  console.log(`Loaded existing profile`);
  console.log(`  Existing Apple Health summaries: ${self.appleHealthDailySummaries?.length || 0}`);
  console.log(`  Existing Apple Health workouts: ${self.appleHealthWorkouts?.length || 0}`);

  // Convert daily data to summaries
  const summaries: Omit<AppleHealthDailySummary, 'id' | 'createdAt'>[] = [];

  for (const [dateKey, day] of dailyData) {
    const date = new Date(dateKey + 'T00:00:00');

    // Calculate heart rate stats
    let heartRateAvg: number | undefined;
    let heartRateMin: number | undefined;
    let heartRateMax: number | undefined;
    if (day.heartRates.length > 0) {
      heartRateAvg = day.heartRates.reduce((a, b) => a + b, 0) / day.heartRates.length;
      heartRateMin = Math.min(...day.heartRates);
      heartRateMax = Math.max(...day.heartRates);
    }

    // Calculate blood oxygen average
    let bloodOxygen: number | undefined;
    if (day.bloodOxygen.length > 0) {
      bloodOxygen = day.bloodOxygen.reduce((a, b) => a + b, 0) / day.bloodOxygen.length;
    }

    // Calculate respiratory rate average
    let respiratoryRate: number | undefined;
    if (day.respiratoryRates.length > 0) {
      respiratoryRate = day.respiratoryRates.reduce((a, b) => a + b, 0) / day.respiratoryRates.length;
    }

    summaries.push({
      date,
      stepCount: day.stepCount > 0 ? Math.round(day.stepCount) : undefined,
      distanceWalkingRunning: day.distanceWalkingRunning > 0 ? Math.round(day.distanceWalkingRunning) : undefined,
      flightsClimbed: day.flightsClimbed > 0 ? Math.round(day.flightsClimbed) : undefined,
      activeEnergyBurned: day.activeEnergyBurned > 0 ? Math.round(day.activeEnergyBurned) : undefined,
      basalEnergyBurned: day.basalEnergyBurned > 0 ? Math.round(day.basalEnergyBurned) : undefined,
      restingHeartRate: day.restingHeartRate,
      heartRateAvg: heartRateAvg ? Math.round(heartRateAvg) : undefined,
      heartRateMin: heartRateMin ? Math.round(heartRateMin) : undefined,
      heartRateMax: heartRateMax ? Math.round(heartRateMax) : undefined,
      bloodOxygen: bloodOxygen ? Math.round(bloodOxygen * 10) / 10 : undefined,
      sleepInBed: day.sleepInBed > 0 ? Math.round(day.sleepInBed) : undefined,
      sleepAsleep: day.sleepAsleep > 0 ? Math.round(day.sleepAsleep) : undefined,
      sleepAwake: day.sleepAwake > 0 ? Math.round(day.sleepAwake) : undefined,
      sleepCore: day.sleepCore > 0 ? Math.round(day.sleepCore) : undefined,
      sleepDeep: day.sleepDeep > 0 ? Math.round(day.sleepDeep) : undefined,
      sleepREM: day.sleepREM > 0 ? Math.round(day.sleepREM) : undefined,
      weight: day.weight,
      bodyFatPercentage: day.bodyFatPercentage,
      respiratoryRate: respiratoryRate ? Math.round(respiratoryRate * 10) / 10 : undefined,
    });
  }

  // Convert workouts
  const appleWorkouts: Omit<AppleHealthWorkout, 'id' | 'createdAt'>[] = workouts.map(w => ({
    workoutType: w.workoutType,
    startDate: w.startDate,
    endDate: w.endDate,
    duration: Math.round(w.duration),
    totalDistance: w.totalDistance,
    totalEnergyBurned: w.totalEnergyBurned,
    sourceName: w.sourceName,
  }));

  // Check for duplicates
  const existingSummaryDates = new Set(
    (self.appleHealthDailySummaries || []).map(s => s.date.toISOString().split('T')[0])
  );
  const existingWorkoutStarts = new Set(
    (self.appleHealthWorkouts || []).map(w => w.startDate.toISOString())
  );

  const newSummaries = summaries.filter(s => !existingSummaryDates.has(s.date.toISOString().split('T')[0]));
  const newWorkouts = appleWorkouts.filter(w => !existingWorkoutStarts.has(w.startDate.toISOString()));

  console.log(`\nNew daily summaries to import: ${newSummaries.length}`);
  console.log(`New workouts to import: ${newWorkouts.length}`);

  if (newSummaries.length === 0 && newWorkouts.length === 0) {
    console.log('\n✓ All data already imported, nothing to do.');
    return;
  }

  // Import data
  if (newSummaries.length > 0) {
    console.log('\nImporting daily summaries...');
    store.addAppleHealthDailySummaries(self, newSummaries);
    self = store.get()!;
    console.log(`✓ Imported ${newSummaries.length} daily summaries`);
  }

  if (newWorkouts.length > 0) {
    console.log('\nImporting workouts...');
    store.addAppleHealthWorkouts(self, newWorkouts);
    self = store.get()!;
    console.log(`✓ Imported ${newWorkouts.length} workouts`);
  }

  // Summary statistics
  console.log('\n' + '='.repeat(60));
  console.log('APPLE HEALTH DATA SUMMARY');
  console.log('='.repeat(60));

  const allSummaries = self.appleHealthDailySummaries || [];
  const allWorkouts = self.appleHealthWorkouts || [];

  if (allSummaries.length > 0) {
    // Date range
    const sortedSummaries = [...allSummaries].sort((a, b) =>
      a.date.getTime() - b.date.getTime()
    );
    const firstDate = sortedSummaries[0].date;
    const lastDate = sortedSummaries[sortedSummaries.length - 1].date;

    console.log(`\nData Range: ${firstDate.toLocaleDateString()} - ${lastDate.toLocaleDateString()}`);
    console.log(`Total Days: ${allSummaries.length}`);

    // Step stats
    const stepCounts = allSummaries
      .map(s => s.stepCount)
      .filter((s): s is number => s !== undefined && s > 0);
    if (stepCounts.length > 0) {
      const avgSteps = stepCounts.reduce((a, b) => a + b, 0) / stepCounts.length;
      const maxSteps = Math.max(...stepCounts);
      console.log(`\nDaily Steps:`);
      console.log(`  Average: ${Math.round(avgSteps).toLocaleString()}`);
      console.log(`  Max: ${maxSteps.toLocaleString()}`);
    }

    // Resting HR stats
    const restingHRs = allSummaries
      .map(s => s.restingHeartRate)
      .filter((r): r is number => r !== undefined);
    if (restingHRs.length > 0) {
      const avgRHR = restingHRs.reduce((a, b) => a + b, 0) / restingHRs.length;
      console.log(`\nResting Heart Rate:`);
      console.log(`  Average: ${avgRHR.toFixed(1)} bpm`);
    }

    // Weight stats
    const weights = allSummaries
      .map(s => s.weight)
      .filter((w): w is number => w !== undefined);
    if (weights.length > 0) {
      const latestWeight = weights[weights.length - 1];
      const avgWeight = weights.reduce((a, b) => a + b, 0) / weights.length;
      console.log(`\nWeight:`);
      console.log(`  Latest: ${(latestWeight * 2.20462).toFixed(1)} lbs (${latestWeight.toFixed(1)} kg)`);
      console.log(`  Average: ${(avgWeight * 2.20462).toFixed(1)} lbs`);
      console.log(`  Measurements: ${weights.length}`);
    }
  }

  // Workout summary
  if (allWorkouts.length > 0) {
    console.log(`\nWorkouts: ${allWorkouts.length} total`);

    // Activity breakdown
    const activityCounts: Record<string, number> = {};
    for (const w of allWorkouts) {
      activityCounts[w.workoutType] = (activityCounts[w.workoutType] || 0) + 1;
    }

    const sortedActivities = Object.entries(activityCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);

    console.log(`  Top Activities:`);
    for (const [activity, count] of sortedActivities) {
      console.log(`    • ${activity}: ${count}`);
    }

    // Source breakdown
    const sourceCounts: Record<string, number> = {};
    for (const w of allWorkouts) {
      sourceCounts[w.sourceName] = (sourceCounts[w.sourceName] || 0) + 1;
    }
    console.log(`  Sources:`);
    for (const [source, count] of Object.entries(sourceCounts).sort((a, b) => b[1] - a[1])) {
      console.log(`    • ${source}: ${count}`);
    }
  }

  console.log(`\nTotal Apple Health summaries in database: ${self.appleHealthDailySummaries?.length || 0}`);
  console.log(`Total Apple Health workouts in database: ${self.appleHealthWorkouts?.length || 0}`);
}

main().catch(console.error);
