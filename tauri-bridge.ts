/**
 * Tauri Bridge - CLI interface for Tauri IPC
 *
 * This script is called by Tauri Rust commands to interact with the
 * TypeScript database layer. It reads environment variables for
 * configuration and outputs JSON to stdout.
 */

import { BiologicalSelfStore } from './core/biological-self/store.js';

interface HealthSummary {
  totalConditions: number;
  totalMedications: number;
  totalLabResults: number;
  totalWhoopCycles: number;
  totalAppleHealthDays: number;
  lastUpdated: string | null;
}

function getEnvOrFail(name: string): string {
  const value = process.env[name];
  if (!value) {
    console.error(`Missing required environment variable: ${name}`);
    process.exit(1);
  }
  return value;
}

function getSummary(store: BiologicalSelfStore): HealthSummary {
  const self = store.get();

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

async function main() {
  const command = process.argv[2];
  const passphrase = getEnvOrFail('BIOSELF_PASSPHRASE');
  const dbPath = getEnvOrFail('BIOSELF_DB_PATH');

  const store = new BiologicalSelfStore(dbPath, passphrase);

  try {
    switch (command) {
      case 'get-summary': {
        const summary = getSummary(store);
        console.log(JSON.stringify(summary));
        break;
      }

      case 'create': {
        // Check if already exists
        const existing = store.get();
        if (existing) {
          const summary = getSummary(store);
          console.log(JSON.stringify(summary));
        } else {
          store.create();
          const summary = getSummary(store);
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
