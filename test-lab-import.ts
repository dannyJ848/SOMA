import { LabImporter } from './core/import/lab-import.js';

async function main() {
  const importer = new LabImporter();

  console.log('=== Processing Whoop Labs 10/2025 ===\n');
  const result1 = await importer.importFromPDF('/Users/dannygomez/Desktop/Whoop Labs 10_2025 Final.pdf');

  if (result1.success) {
    console.log('Extracted', result1.labResults.length, 'lab results:\n');
    for (const lab of result1.labResults) {
      const status = lab.status ? ` [${lab.status}]` : '';
      const range = lab.referenceRange ? ` (ref: ${lab.referenceRange.low}-${lab.referenceRange.high})` : '';
      console.log(`  • ${lab.testName}: ${lab.value} ${lab.unit || ''}${range}${status}`);
    }
  } else {
    console.log('Errors:', result1.errors);
    console.log('\nRaw text preview:\n', result1.rawText.slice(0, 500));
  }

  console.log('\n\n=== Processing Whoop Labs 12/2025 ===\n');
  const result2 = await importer.importFromPDF('/Users/dannygomez/Desktop/Whoop_Labs_12_25_Final.pdf');

  if (result2.success) {
    console.log('Extracted', result2.labResults.length, 'lab results:\n');
    for (const lab of result2.labResults) {
      const status = lab.status ? ` [${lab.status}]` : '';
      const range = lab.referenceRange ? ` (ref: ${lab.referenceRange.low}-${lab.referenceRange.high})` : '';
      console.log(`  • ${lab.testName}: ${lab.value} ${lab.unit || ''}${range}${status}`);
    }
  } else {
    console.log('Errors:', result2.errors);
    console.log('\nRaw text preview:\n', result2.rawText.slice(0, 500));
  }
}

main().catch(console.error);
