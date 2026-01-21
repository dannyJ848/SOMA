/**
 * Import CT Imaging Reports
 *
 * Imports 4 CT scan reports showing recurrent small bowel obstruction history
 * and incidental findings (renal calculi, anatomical variants).
 */

import { join } from 'path';
import { BiologicalSelfStore } from './core/biological-self/store.js';
import type { ImagingReport } from './core/biological-self/types.js';

const DATA_DIR = join(process.cwd(), 'data');
const DB_PATH = join(DATA_DIR, 'biological-self.db');

// CT Imaging Reports extracted from PDFs
const CT_REPORTS: Omit<ImagingReport, 'id' | 'createdAt' | 'updatedAt'>[] = [
  {
    type: 'ct',
    bodyPart: 'Abdomen and Pelvis',
    date: new Date('2017-11-12'),
    indication: 'Abdominal pain, nausea, and vomiting',
    findings: `TECHNIQUE: CT of the abdomen and pelvis was obtained with intravenous contrast material. Oral contrast was not administered secondary to patient nausea.

ABDOMEN:
- Liver: Normal in size. No focal hepatic lesion identified.
- Spleen: Normal in size. No focal splenic lesion identified.
- Pancreas: Normal in size. No focal pancreatic lesion identified.
- Kidneys/Adrenal Glands: No hydronephrosis. 1 mm nonobstructing calculus in the lower pole of the left kidney. Circumaortic left renal vein noted, an anatomic variant. No adrenal nodule.
- Stomach: Normal.
- Small Bowel: There is dilatation of the small bowel measuring up to 3.5 cm with fecalized content in the distal ileum consistent with distal small bowel obstruction. There is a transition zone in the right lower quadrant.
- Large Bowel: Normal caliber. No colonic mass lesion.
- Mesentery: Trace ascites noted.
- Abdominal Wall/Soft Tissues: Prior incisions in lower quadrants.
- Abdominal Lymph Nodes: No significant lymphadenopathy.
- Vessels: Normal. No abdominal aortic aneurysm.

PELVIS:
- Bladder: Normal.
- Prostate: Normal in size.
- Osseous Structures: Mild thoracolumbar scoliosis. Schmorl's nodes in the thoracolumbar spine.`,
    impression: `1. Distal small bowel obstruction with transition zone in the right lower quadrant. Recommend surgical consultation.
2. Trace ascites.
3. 1 mm nonobstructing calculus in the lower pole of the left kidney.
4. Circumaortic left renal vein, an anatomic variant.
5. Mild thoracolumbar scoliosis. Schmorl's nodes in the thoracolumbar spine.`,
    notes: 'Provider: Laura McMaster, M.D. Facility: Bronson Methodist Hospital. Clinical history notes prior appendectomy and small bowel obstruction in September 2017.'
  },
  {
    type: 'ct',
    bodyPart: 'Abdomen and Pelvis',
    date: new Date('2019-04-19'),
    indication: 'Small bowel obstruction',
    findings: `TECHNIQUE: CT of the abdomen and pelvis obtained with intravenous contrast. Oral contrast was not administered secondary to patient NPO.

ABDOMEN:
- Liver: Normal in size without a focal hepatic lesion.
- Spleen: Normal without focal lesion.
- Pancreas: Normal without focal pancreatic lesion.
- Kidneys/Adrenal Glands: There is no hydronephrosis. There is a 2 mm calculus in the lower pole of the left kidney, increased from prior exam. Circumaortic left renal vein, an anatomic variant. No adrenal nodule.
- Stomach: Gastric decompression tube is seen in appropriate position. Air and fluid distends the stomach.
- Small Bowel: There are dilated loops of small bowel with some loops reaching greater than 4 cm in diameter. There is a small bowel feces sign. There is a transition zone in the right lower quadrant.
- Large Bowel: The large bowel is decompressed.
- Mesentery: Unremarkable.
- Abdominal Wall/Soft Tissues: Surgical incisions in the lower quadrant.
- Abdominal Lymph Nodes: Unremarkable.
- Vessels: Unremarkable. No abdominal aortic aneurysm.

PELVIS:
- Bladder: Unremarkable.
- Prostate: Normal in size.
- Osseous Structures: Mild thoracolumbar scoliosis and Schmorl's nodes are stable.`,
    impression: `1. Small bowel obstruction with a transition zone in the right lower quadrant.
2. 2 mm left lower pole renal calculus, slightly increased from prior.
3. Circumaortic left renal vein, an anatomic variant.`,
    notes: 'Provider: Matt Bailey, M.D. Facility: Bronson Methodist Hospital. Comparison: November 2017 CT. NG tube in place for decompression.'
  },
  {
    type: 'ct',
    bodyPart: 'Abdomen and Pelvis',
    date: new Date('2019-06-13'),
    indication: 'Small bowel obstruction',
    findings: `TECHNIQUE: CT of abdomen and pelvis was performed with intravenous contrast enhancement. Oral contrast not administered due to patient being NPO.

ABDOMEN:
- Liver: Normal without focal lesion.
- Spleen: Normal without lesion.
- Pancreas: Normal.
- Kidneys/Adrenal Glands: No hydronephrosis. Nonobstructing left renal calculi seen, measuring 2-3 mm. Circumaortic left renal vein. No adrenal nodule.
- Stomach: Decompressed with nasogastric tube in place.
- Small Bowel: There is small bowel obstruction. The small bowel is dilated measuring up to 4.6 cm in diameter, more pronounced compared to April 2019 exam. Small bowel feces sign present. There is a transition zone in the right lower quadrant near surgical clips from prior surgery.
- Large Bowel: Decompressed.
- Mesentery: No mesenteric mass or lymphadenopathy.
- Abdominal Wall/Soft Tissues: Prior surgical incisions noted bilaterally in the lower quadrants.
- Vessels: No abdominal aortic aneurysm.

PELVIS:
- Bladder: Normal.
- Prostate: Normal size.
- Osseous Structures: Mild thoracolumbar scoliosis and Schmorl's nodes, stable.`,
    impression: `1. Small bowel obstruction, more pronounced compared to April 2019 with small bowel loops measuring up to 4.6 cm. Transition zone in the right lower quadrant near surgical clips.
2. Nonobstructing left renal calculi, 2-3 mm.
3. Circumaortic left renal vein, anatomic variant.`,
    notes: 'Provider: Matt Bailey, M.D. Facility: Bronson Methodist Hospital. Comparison: April 2019 CT. Shows worsening obstruction compared to prior study.'
  },
  {
    type: 'ct',
    bodyPart: 'Abdomen and Pelvis',
    date: new Date('2021-12-28'),
    indication: 'Constipation',
    findings: `TECHNIQUE: CT of the abdomen and pelvis was obtained with intravenous contrast. Oral contrast was not administered.

ABDOMEN:
- Liver: Normal in size without focal hepatic lesion.
- Gallbladder: Normal.
- Spleen: Normal without focal lesion.
- Pancreas: Normal.
- Kidneys/Adrenal Glands: No hydronephrosis. Nonobstructing left renal calculus. Circumaortic left renal vein, anatomic variant. No adrenal nodule.
- Stomach: Normal.
- Small Bowel: There is fecalization of small bowel contents in the distal ileum. Some small bowel loops are mildly dilated.
- Large Bowel: The colon is filled with stool. The cecum is dilated measuring up to 8 cm. No colonic mass identified.
- Mesentery: There are several prominent mesenteric lymph nodes, the largest measuring 9 mm in short axis.
- Abdominal Wall/Soft Tissues: Prior surgical incisions in the lower quadrants.
- Vessels: No abdominal aortic aneurysm.

PELVIS:
- Bladder: Normal.
- Prostate: Normal.
- Osseous Structures: Mild thoracolumbar scoliosis and Schmorl's nodes, stable.`,
    impression: `1. Stool-filled colon with dilated cecum measuring up to 8 cm. Fecalization of distal small bowel contents. Findings could represent severe constipation versus developing small bowel obstruction.
2. Prominent mesenteric lymph nodes, likely reactive.
3. Nonobstructing left renal calculus.
4. Circumaortic left renal vein, anatomic variant.`,
    notes: 'Provider: Amanda Stepp, M.D. Facility: Bronson Methodist Hospital. Comparison: June 2019 CT. Clinical presentation: constipation with concern for possible SBO.'
  }
];

async function main() {
  // Get passphrase from environment
  const passphrase = process.env.BIOSELF_PASSPHRASE;
  if (!passphrase) {
    console.error('Error: BIOSELF_PASSPHRASE environment variable is required.');
    console.error('Set it with: export BIOSELF_PASSPHRASE=your_passphrase');
    console.error('Or run with: BIOSELF_PASSPHRASE=your_passphrase npx tsx import-imaging.ts');
    process.exit(1);
  }

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
  console.log(`  Existing imaging reports: ${self.imaging.length}`);

  console.log('\nImporting CT imaging reports...\n');

  let importedCount = 0;
  let skippedCount = 0;

  for (const report of CT_REPORTS) {
    // Check for duplicate by date and body part
    const existingReport = self.imaging.find(
      r => r.date.toDateString() === report.date.toDateString() &&
           r.bodyPart === report.bodyPart &&
           r.type === report.type
    );

    if (existingReport) {
      console.log(`⚠ Skipping: ${report.date.toLocaleDateString()} - ${report.indication} (already exists)`);
      skippedCount++;
    } else {
      store.addImagingReport(self, report);
      self = store.get()!;
      console.log(`✓ Imported: ${report.date.toLocaleDateString()} - ${report.indication}`);
      importedCount++;
    }
  }

  console.log(`\n✓ Successfully imported ${importedCount} CT imaging reports`);
  if (skippedCount > 0) {
    console.log(`  (${skippedCount} already existed)`);
  }

  // Summary of findings
  console.log('\n' + '='.repeat(70));
  console.log('IMAGING HISTORY SUMMARY');
  console.log('='.repeat(70));

  console.log('\nRecurrent Small Bowel Obstruction History:');
  console.log('  • Nov 2017: Distal SBO, transition zone RLQ, 3.5cm dilation');
  console.log('  • Apr 2019: SBO with loops >4cm, transition zone RLQ');
  console.log('  • Jun 2019: SBO worsened, 4.6cm dilation (vs April)');
  console.log('  • Dec 2021: Constipation/possible developing SBO, cecum 8cm');

  console.log('\nConsistent Incidental Findings (present across all studies):');
  console.log('  • Left renal calculi (1mm→2mm→2-3mm, nonobstructing)');
  console.log('  • Circumaortic left renal vein (anatomic variant)');
  console.log('  • Mild thoracolumbar scoliosis');
  console.log('  • Schmorl\'s nodes in thoracolumbar spine');

  console.log('\nClinical Pattern:');
  console.log('  • History of appendectomy and prior SBO (Sept 2017 per clinical notes)');
  console.log('  • Recurrent adhesive small bowel obstructions');
  console.log('  • Transition zone consistently in right lower quadrant near surgical clips');
  console.log('  • Progressive left renal calculi (monitoring recommended)');

  console.log('\nTotal imaging reports in database: ' + self.imaging.length);
}

main().catch(console.error);
