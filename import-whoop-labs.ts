/**
 * Import Whoop Labs to Database
 *
 * Extracts lab results from Whoop Labs PDFs and saves them to the encrypted database.
 */

import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';
import { createInterface } from 'readline';
import { LabImporter } from './core/import/lab-import.js';
import { BiologicalSelfStore } from './core/biological-self/store.js';

const DATA_DIR = join(process.cwd(), 'data');
const DB_PATH = join(DATA_DIR, 'biological-self.db');

// PDF files to import
const LAB_FILES = [
  { path: '/Users/dannygomez/Desktop/Whoop Labs 10_2025 Final.pdf', label: 'October 2025' },
  { path: '/Users/dannygomez/Desktop/Whoop_Labs_12_25_Final.pdf', label: 'December 2025' },
];

async function promptPassword(prompt: string): Promise<string> {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    // Hide input for password
    process.stdout.write(prompt);
    const stdin = process.stdin;
    stdin.resume();
    stdin.setRawMode?.(true);

    let password = '';
    stdin.on('data', (char) => {
      const c = char.toString();
      if (c === '\n' || c === '\r') {
        stdin.setRawMode?.(false);
        stdin.pause();
        rl.close();
        console.log();
        resolve(password);
      } else if (c === '\u0003') {
        // Ctrl+C
        process.exit();
      } else if (c === '\u007f') {
        // Backspace
        password = password.slice(0, -1);
      } else {
        password += c;
      }
    });
  });
}

async function main() {
  console.log('╔══════════════════════════════════════════════════════════╗');
  console.log('║        Whoop Labs Import to Biological Self              ║');
  console.log('╚══════════════════════════════════════════════════════════╝\n');

  // Ensure data directory exists
  if (!existsSync(DATA_DIR)) {
    mkdirSync(DATA_DIR, { recursive: true });
  }

  // Get passphrase from env or prompt
  let passphrase = process.env.BIOSELF_PASSPHRASE;
  if (!passphrase) {
    console.log('Your data is encrypted. Enter a passphrase to unlock/create your Biological Self.');
    console.log('(Or set BIOSELF_PASSPHRASE environment variable)');
    passphrase = await promptPassword('Passphrase: ');
  } else {
    console.log('Using passphrase from BIOSELF_PASSPHRASE environment variable.');
  }

  if (!passphrase) {
    console.error('Error: Passphrase is required.');
    process.exit(1);
  }

  // Initialize store
  console.log('\nConnecting to database...');
  const store = new BiologicalSelfStore(DB_PATH, passphrase);

  // Get or create BiologicalSelf
  let self = store.get();
  if (!self) {
    console.log('Creating new Biological Self profile...');
    self = store.create();
    console.log(`Created profile with ID: ${self.id}`);
  } else {
    console.log(`Loaded existing profile (${self.labResults.length} existing lab results)`);
  }

  // Initialize lab importer
  const importer = new LabImporter();
  let totalImported = 0;

  // Process each PDF
  for (const labFile of LAB_FILES) {
    console.log(`\n${'─'.repeat(60)}`);
    console.log(`Processing: ${labFile.label}`);
    console.log(`File: ${labFile.path}`);
    console.log(`${'─'.repeat(60)}`);

    if (!existsSync(labFile.path)) {
      console.log(`⚠ File not found, skipping.`);
      continue;
    }

    console.log('Extracting lab results (this may take several minutes)...');
    const result = await importer.importFromPDF(labFile.path);

    if (!result.success) {
      console.log(`⚠ Failed to extract labs: ${result.errors.join(', ')}`);
      continue;
    }

    console.log(`✓ Extracted ${result.labResults.length} lab results`);

    // Add each lab result to the database
    let added = 0;
    for (const lab of result.labResults) {
      // Check for duplicates by test name and collection date
      const duplicate = self.labResults.find(
        (existing) =>
          existing.testName === lab.testName &&
          existing.collectedAt.toDateString() === lab.collectedAt.toDateString()
      );

      if (duplicate) {
        continue; // Skip duplicates
      }

      store.addLabResult(self, lab);
      added++;
    }

    console.log(`✓ Added ${added} new lab results to database`);
    if (result.labResults.length - added > 0) {
      console.log(`  (${result.labResults.length - added} duplicates skipped)`);
    }

    totalImported += added;

    // Refresh self to get updated data
    self = store.get()!;
  }

  // Summary
  console.log(`\n${'═'.repeat(60)}`);
  console.log('IMPORT COMPLETE');
  console.log(`${'═'.repeat(60)}`);
  console.log(`Total new lab results imported: ${totalImported}`);
  console.log(`Total lab results in database: ${self.labResults.length}`);

  // Show recent labs
  console.log('\nRecent lab results (last 5):');
  const recent = self.labResults
    .sort((a, b) => b.collectedAt.getTime() - a.collectedAt.getTime())
    .slice(0, 5);

  for (const lab of recent) {
    const status = lab.status ? ` [${lab.status}]` : '';
    console.log(`  • ${lab.testName}: ${lab.value} ${lab.unit || ''}${status}`);
  }

  store.close();
  console.log('\nDatabase saved and closed.');
}

main().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});
