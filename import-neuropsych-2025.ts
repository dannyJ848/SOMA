/**
 * Import 2025 Neuropsychological Evaluation (Off Medications)
 *
 * This evaluation was done while off all ADHD medications to assess
 * baseline cognitive functioning and confirm ADHD diagnosis.
 */

import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';
import { BiologicalSelfStore } from './core/biological-self/store.js';
import type { NeuropsychologicalEvaluation } from './core/biological-self/types.js';

const DATA_DIR = join(process.cwd(), 'data');
const DB_PATH = join(DATA_DIR, 'biological-self.db');

// ============================================================================
// 2025 Evaluation Data (July 14, 2025) - OFF ALL MEDICATIONS
// ============================================================================

const EVAL_2025: Omit<NeuropsychologicalEvaluation, 'id' | 'createdAt' | 'updatedAt'> = {
  evaluationDate: new Date('2025-07-14'),
  ageAtTesting: '33 years',

  provider: 'Clinical Psychology Services PLLC',
  psychologist: 'Margaret Ajayi-Nabors, Ph.D.',
  technician: 'James Silbernagel',

  referralReason: 'Struggling with attention problems. Evaluated off stimulant medication at request of treating physician to determine whether ADHD symptoms are still present and to provide diagnostic clarity based on current functioning.',

  medicationsAtTesting: [], // OFF ALL MEDICATIONS

  testsGiven: [
    'Wechsler Adult Intelligence Scale-Fourth Edition (WAIS-IV)',
    'Personality Assessment Inventory (PAI)',
    'Beck Depression Inventory (BDI)',
    'Beck Anxiety Inventory (BAI)',
    'Conners Continuous Performance Testing (CPT3)',
    'Test of Memory Malingering (TOMM)',
    'Delis Kaplan Test of Executive Functioning (DKEFS)',
    'Neuropsychological Assessment Battery (NAB)',
  ],

  waisResults: {
    version: 'WAIS-IV',
    indices: [
      { indexName: 'Verbal Comprehension', abbreviation: 'VCI', standardScore: 107, percentileRank: 68, confidenceInterval: { low: 101, high: 112, level: 95 }, interpretiveCategory: 'average' },
      { indexName: 'Perceptual Reasoning', abbreviation: 'PRI', standardScore: 105, percentileRank: 63, confidenceInterval: { low: 99, high: 111, level: 95 }, interpretiveCategory: 'average' },
      { indexName: 'Working Memory', abbreviation: 'WMI', standardScore: 105, percentileRank: 63, confidenceInterval: { low: 98, high: 111, level: 95 }, interpretiveCategory: 'average' },
      { indexName: 'Processing Speed', abbreviation: 'PSI', standardScore: 94, percentileRank: 34, confidenceInterval: { low: 86, high: 103, level: 95 }, interpretiveCategory: 'average' },
      { indexName: 'Full-Scale IQ', abbreviation: 'FSIQ', standardScore: 104, percentileRank: 61, confidenceInterval: { low: 100, high: 108, level: 95 }, interpretiveCategory: 'average' },
    ],
    subtests: [
      // Verbal Comprehension
      { subtestName: 'Similarities', category: 'Verbal Comprehension', scaledScore: 11, percentileRank: 63, interpretiveCategory: 'average' },
      { subtestName: 'Vocabulary', category: 'Verbal Comprehension', scaledScore: 12, percentileRank: 75, interpretiveCategory: 'high-average' },
      { subtestName: 'Information', category: 'Verbal Comprehension', scaledScore: 11, percentileRank: 63, interpretiveCategory: 'average' },
      // Perceptual Reasoning
      { subtestName: 'Block Design', category: 'Perceptual Reasoning', scaledScore: 11, percentileRank: 63, interpretiveCategory: 'average' },
      { subtestName: 'Matrix Reasoning', category: 'Perceptual Reasoning', scaledScore: 10, percentileRank: 50, interpretiveCategory: 'average' },
      { subtestName: 'Visual Puzzles', category: 'Perceptual Reasoning', scaledScore: 12, percentileRank: 75, interpretiveCategory: 'high-average' },
      // Working Memory
      { subtestName: 'Digit Span', category: 'Working Memory', scaledScore: 9, percentileRank: 37, interpretiveCategory: 'average' },
      { subtestName: 'Arithmetic', category: 'Working Memory', scaledScore: 13, percentileRank: 75, interpretiveCategory: 'high-average' },
      // Processing Speed
      { subtestName: 'Symbol Search', category: 'Processing Speed', scaledScore: 9, percentileRank: 37, interpretiveCategory: 'average' },
      { subtestName: 'Coding', category: 'Processing Speed', scaledScore: 9, percentileRank: 37, interpretiveCategory: 'average' },
    ],
  },

  nabResults: {
    form: 'Form 1',
    indices: [
      { indexName: 'Attention Index', abbreviation: 'ATT', standardScore: 94, percentileRank: 34, confidenceInterval: { low: 86, high: 102, level: 95 }, interpretiveCategory: 'average' },
      { indexName: 'Language Index', abbreviation: 'LAN', standardScore: 102, percentileRank: 55, confidenceInterval: { low: 89, high: 115, level: 95 }, interpretiveCategory: 'average' },
      { indexName: 'Memory Index', abbreviation: 'MEM', standardScore: 92, percentileRank: 30, confidenceInterval: { low: 84, high: 100, level: 95 }, interpretiveCategory: 'average' },
      { indexName: 'Spatial Index', abbreviation: 'SPT', standardScore: 112, percentileRank: 79, confidenceInterval: { low: 102, high: 122, level: 95 }, interpretiveCategory: 'above-average' },
      { indexName: 'Executive Functions Index', abbreviation: 'EXE', standardScore: 118, percentileRank: 88, confidenceInterval: { low: 108, high: 128, level: 95 }, interpretiveCategory: 'superior' },
      { indexName: 'Total NAB Index', abbreviation: 'T-NAB', standardScore: 104, percentileRank: 61, confidenceInterval: { low: 98, high: 110, level: 95 }, interpretiveCategory: 'average' },
    ],
    subtests: [
      // Attention
      { subtestName: 'Digits Forward', category: 'Attention', tScore: 28, interpretiveCategory: 'moderately-impaired' },
      { subtestName: 'Digits Backward', category: 'Attention', tScore: 59, interpretiveCategory: 'above-average' },
      { subtestName: 'Dots', category: 'Attention', tScore: 46, interpretiveCategory: 'average' },
      { subtestName: 'Numbers & Letters Part A Efficiency', category: 'Attention', tScore: 45, interpretiveCategory: 'average' },
      { subtestName: 'Numbers & Letters Part B Efficiency', category: 'Attention', tScore: 54, interpretiveCategory: 'average' },
      { subtestName: 'Numbers & Letters Part C Efficiency', category: 'Attention', tScore: 57, interpretiveCategory: 'above-average' },
      { subtestName: 'Numbers & Letters Part D Efficiency', category: 'Attention', tScore: 42, interpretiveCategory: 'below-average' },
      { subtestName: 'Driving Scenes', category: 'Attention', tScore: 55, interpretiveCategory: 'above-average' },
      // Language
      { subtestName: 'Oral Production', category: 'Language', tScore: 56, interpretiveCategory: 'above-average' },
      { subtestName: 'Auditory Comprehension', category: 'Language', tScore: 55, interpretiveCategory: 'above-average' },
      { subtestName: 'Naming', category: 'Language', tScore: 44, interpretiveCategory: 'below-average' },
      { subtestName: 'Writing', category: 'Language', tScore: 54, interpretiveCategory: 'average' },
      { subtestName: 'Bill Payment', category: 'Language', tScore: 54, interpretiveCategory: 'average' },
      // Memory
      { subtestName: 'List Learning - Immediate Recall', category: 'Memory', tScore: 41, interpretiveCategory: 'below-average' },
      { subtestName: 'List Learning - Short Delayed Recall', category: 'Memory', tScore: 48, interpretiveCategory: 'average' },
      { subtestName: 'List Learning - Long Delayed Recall', category: 'Memory', tScore: 48, interpretiveCategory: 'average' },
      { subtestName: 'Shape Learning Immediate Recognition', category: 'Memory', tScore: 56, interpretiveCategory: 'above-average' },
      { subtestName: 'Shape Learning Delayed Recognition', category: 'Memory', tScore: 52, interpretiveCategory: 'average' },
      { subtestName: 'Story Learning Phrase Unit, Immediate Recall', category: 'Memory', tScore: 35, interpretiveCategory: 'mildly-impaired' },
      { subtestName: 'Story Learning Phrase Unit, Delayed Recall', category: 'Memory', tScore: 35, interpretiveCategory: 'mildly-impaired' },
      { subtestName: 'Daily Living Memory Immediate Recall', category: 'Memory', tScore: 55, interpretiveCategory: 'above-average' },
      { subtestName: 'Daily Living Memory Delayed Recall', category: 'Memory', tScore: 56, interpretiveCategory: 'above-average' },
      // Spatial
      { subtestName: 'Visual Discrimination', category: 'Spatial', tScore: 58, interpretiveCategory: 'above-average' },
      { subtestName: 'Design Construction', category: 'Spatial', tScore: 51, interpretiveCategory: 'average' },
      { subtestName: 'Figure Drawing Copy', category: 'Spatial', tScore: 70, interpretiveCategory: 'above-average' },
      { subtestName: 'Map Reading', category: 'Spatial', tScore: 48, interpretiveCategory: 'average' },
      // Executive Functions
      { subtestName: 'Mazes', category: 'Executive Functions', tScore: 63, interpretiveCategory: 'above-average' },
      { subtestName: 'Judgment', category: 'Executive Functions', tScore: 69, interpretiveCategory: 'above-average' },
      { subtestName: 'Categories', category: 'Executive Functions', tScore: 46, interpretiveCategory: 'average' },
      { subtestName: 'Word Generation', category: 'Executive Functions', tScore: 60, interpretiveCategory: 'above-average' },
    ],
  },

  dkefsResults: {
    colorWordInterference: [
      { subtestName: 'Color Naming', scaledScore: 10, interpretiveCategory: 'average' },
      { subtestName: 'Word Reading', scaledScore: 12, interpretiveCategory: 'average' },
      { subtestName: 'Inhibition', scaledScore: 10, interpretiveCategory: 'average' },
      { subtestName: 'Inhibition/Switching', scaledScore: 8, interpretiveCategory: 'average' },
    ],
    towerTest: { subtestName: 'Tower Test', scaledScore: 13, interpretiveCategory: 'high-average' },
  },

  cptResults: {
    version: 'CPT-3',
    measures: [
      { category: 'detectability', measureName: "d'", tScore: 51 },
      { category: 'errors', measureName: 'Omissions', tScore: 46 },
      { category: 'errors', measureName: 'Commissions', tScore: 50 },
      { category: 'errors', measureName: 'Perseverations', tScore: 58 },
      { category: 'reaction-time', measureName: 'HRT', tScore: 45 },
      { category: 'reaction-time', measureName: 'HRT SD', tScore: 40 },
      { category: 'reaction-time', measureName: 'Variability', tScore: 38 },
      { category: 'reaction-time', measureName: 'HRT Block Change', tScore: 59 },
      { category: 'reaction-time', measureName: 'HRT ISI Change', tScore: 41 },
    ],
    atypicalTScoreCount: 0,
    adhdLikelihood: 'low',
    indicatedIssues: [], // None of Danny's T-scores were atypical
  },

  beckDepression: {
    inventoryName: 'BDI-II',
    score: 0,
    severity: 'none',
    reportedSymptoms: [],
  },

  beckAnxiety: {
    inventoryName: 'GAD-7',
    score: 0,
    severity: 'none',
    reportedSymptoms: [],
  },

  tommResults: {
    trial1: 46,
    trial2: 50,
    interpretation: 'valid',
  },

  paiValidity: {
    isValid: true,
    invalidReason: undefined,
  },

  diagnoses: [
    {
      diagnosis: 'Attention-Deficit Hyperactivity Disorder',
      icdCode: 'F90.2',
      severity: 'moderate',
      presentation: 'Combined Presentation',
    },
    {
      diagnosis: 'Generalized Anxiety Disorder',
      icdCode: 'F41.1',
      severity: 'mild',
    },
  ],

  conclusions: `The results of this thirty-three-year-old male indicates overall intellectual ability in the average range when compared to his same age peers. He demonstrated average verbal comprehension, perceptual reasoning, working memory, and processing speed abilities. The patient, a medical student with a previously established diagnosis of Attention-Deficit/Hyperactivity Disorder (ADHD), was evaluated off stimulant medication at the request of his treating physician. The purpose of this assessment was to determine whether ADHD symptoms are still present in the absence of pharmacologic treatment and to provide diagnostic clarity based on current functioning.

The patient's reported symptoms, behavioral observations during testing and clinical interviews, and daily functional difficulties, are consistent with a diagnosis of ADHD. He is a medical student and has a high intellect level, which can also mask symptoms of ADHD. The patient performed well on certain subtests, which may be attributed to our assessment taking place in a highly structured, low-distraction environment that did not reflect the stressors, expectations, and functional difficulties seen in the patient's everyday life.

Although the patient's overall neuropsychological test performance is within normal limits, the relative weaknesses in attention and memory (NAB Attention = 94; NAB Memory = 92) in the context of his higher intellectual functioning and academic demands suggest the continued presence of ADHD symptomatology. The ~13-point difference between his NAB Attention/Memory Index scores (low 90s) and WAIS intellectual indices (ranging from 94 to 107) is clinically significant and unlikely to occur by chance in a person of his intellectual level.

He meets DSM-V criteria for a diagnosis of Attention-Deficit/Hyperactivity Disorder, Combined Presentation as he continues to have symptoms of difficulties paying attention, sustaining attention, listening when spoken to directly, following through on instructions/with task completion, organizing, losing his belongings, being easily distracted, and with forgetfulness. He talks excessively, blurts out answers before questions have been completed, has difficulty waiting his turn, and interrupts/intrudes on others.

A return to or continuation of pharmacological and behavioral support may be beneficial to optimize functioning in high-demand environments.`,

  recommendations: [
    'The patient will benefit from psychotherapy to address ADHD and anxiety. Treatment goals should include: A. Minimize ADHD behavioral interference in daily life and achieve a satisfactory level of balance, structure, and intimacy in his personal life. B. Learn and implement planning and organizational skills to manage ADHD such as using a planner or schedule, focusing on one task at a time, setting routines and schedules, and making daily and weekly goals. C. Enhance ability to cope with the full variety of life\'s worries and anxieties. D. Learn and implement calming strategies to manage stress and regulate emotions including paced breathing, progressive muscle relaxation, and guided imagery.',
    'Group/Family counseling would be beneficial to increase social support and improve interpersonal relationships.',
    'Consult with a primary care provider/psychiatrist regarding the lowest effective dose of medication to address ADHD and anxiety.',
    'The patient is encouraged to consult with student disability services regarding his eligibility for academic accommodations and the types of accommodations available to him under the qualification of Other Health Impairment due to his formal diagnosis of Attention Deficit/Hyperactivity Disorder. The patient\'s impairments in attention, concentration, and impulse control are adversely affecting the patient\'s ability to perform academically.',
    'Suggested materials that offer tips, support, and resources specific to ADHD and anxiety: ADDitude magazine/website/podcast, The Smart but Scattered Guide To Success by Peg Dawson & Richard Guare, The Dialectical Behavior Therapy Skills Workbook for Anxiety, The Anxiety & Worry Workbook by David A. Clark.',
    'Repeat neuropsychological evaluation in 12 months, or with any significant changes in cognitive status.',
  ],

  overallCognitiveLevel: 'average',

  notes: 'This evaluation was conducted OFF ALL MEDICATIONS to establish baseline functioning and confirm ADHD diagnosis. Results show significant decline from 2019 medicated state (FSIQ 124 → 104, 20-point drop) and return to levels similar to 2018 pre-ADHD-medication baseline. PAI was valid for this evaluation (unlike 2018 and 2019). The evaluation confirms ADHD symptoms persist when unmedicated and recommends return to pharmacological treatment.',
};

// ============================================================================
// Main Import Function
// ============================================================================

async function main() {
  console.log('╔══════════════════════════════════════════════════════════╗');
  console.log('║  2025 Neuropsychological Evaluation Import (No Meds)     ║');
  console.log('╚══════════════════════════════════════════════════════════╝\n');

  // Ensure data directory exists
  if (!existsSync(DATA_DIR)) {
    mkdirSync(DATA_DIR, { recursive: true });
  }

  // Get passphrase from env
  const passphrase = process.env.BIOSELF_PASSPHRASE;
  if (!passphrase) {
    console.error('Error: BIOSELF_PASSPHRASE environment variable is required.');
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
  console.log(`  Existing neuropsych evaluations: ${self.neuropsychEvaluations.length}`);

  // Check for duplicate
  const existingEval = self.neuropsychEvaluations.find(
    e => e.evaluationDate.toDateString() === EVAL_2025.evaluationDate.toDateString()
  );

  if (existingEval) {
    console.log(`\n⚠ July 2025 evaluation already exists, skipping.`);
  } else {
    const newEval = store.addNeuropsychEvaluation(self, EVAL_2025);
    self = store.get()!;

    console.log(`\n✓ July 2025 Evaluation Imported (OFF MEDICATIONS)`);
    console.log(`  ID: ${newEval.id}`);
    console.log(`  Age: ${newEval.ageAtTesting}`);
    console.log(`  Medications: NONE (baseline assessment)`);
    console.log(`  Overall Level: ${newEval.overallCognitiveLevel}`);
  }

  // Comprehensive longitudinal comparison
  console.log('\n' + '═'.repeat(60));
  console.log('COMPLETE LONGITUDINAL COMPARISON (2018-2025)');
  console.log('═'.repeat(60));

  const sorted = [...self.neuropsychEvaluations].sort(
    (a, b) => a.evaluationDate.getTime() - b.evaluationDate.getTime()
  );

  // WAIS-IV Comparison Table
  console.log('\nWAIS-IV Index Scores Over Time:');
  console.log('─'.repeat(60));
  console.log('Index      │ 2018 (Prozac) │ 2019 (Full Tx) │ 2025 (No Meds)');
  console.log('─'.repeat(60));

  const waisIndices = ['VCI', 'PRI', 'WMI', 'PSI', 'FSIQ'];
  for (const abbr of waisIndices) {
    const scores = sorted.map(e => {
      const idx = e.waisResults?.indices.find(i => i.abbreviation === abbr);
      return idx ? idx.standardScore.toString().padStart(3) : ' - ';
    });
    const paddedAbbr = abbr.padEnd(10);
    console.log(`${paddedAbbr} │     ${scores[0]}       │      ${scores[1]}       │      ${scores[2]}`);
  }

  // NAB Comparison
  console.log('\nNAB Index Scores Over Time:');
  console.log('─'.repeat(60));
  console.log('Index      │ 2018 (Prozac) │ 2019 (Full Tx) │ 2025 (No Meds)');
  console.log('─'.repeat(60));

  const nabIndices = ['ATT', 'LAN', 'MEM', 'EXE', 'T-NAB'];
  for (const abbr of nabIndices) {
    const scores = sorted.map(e => {
      const idx = e.nabResults?.indices.find(i => i.abbreviation === abbr);
      return idx ? idx.standardScore.toString().padStart(3) : ' - ';
    });
    const paddedAbbr = abbr.padEnd(10);
    console.log(`${paddedAbbr} │     ${scores[0]}       │      ${scores[1]}       │      ${scores[2]}`);
  }

  // Mood comparison
  console.log('\nMood & Anxiety:');
  console.log('─'.repeat(60));
  console.log(`BDI Score  │       ${sorted[0].beckDepression?.score}       │        ${sorted[1].beckDepression?.score}       │        ${sorted[2].beckDepression?.score}`);
  console.log(`BAI/GAD    │       ${sorted[0].beckAnxiety?.score}       │        ${sorted[1].beckAnxiety?.score}       │        ${sorted[2].beckAnxiety?.score}`);

  // CPT comparison
  console.log('\nCPT-3 Attention Testing:');
  console.log('─'.repeat(60));
  console.log(`Atypical   │       ${sorted[0].cptResults?.atypicalTScoreCount}       │        ${sorted[1].cptResults?.atypicalTScoreCount}       │        ${sorted[2].cptResults?.atypicalTScoreCount}`);
  console.log(`ADHD Risk  │  ${sorted[0].cptResults?.adhdLikelihood.padEnd(8)}    │   ${sorted[1].cptResults?.adhdLikelihood.padEnd(8)}     │   ${sorted[2].cptResults?.adhdLikelihood.padEnd(8)}`);

  // Key insights
  console.log('\n' + '═'.repeat(60));
  console.log('KEY INSIGHTS');
  console.log('═'.repeat(60));
  console.log(`
MEDICATION EFFECTS ON COGNITIVE FUNCTIONING:

2018 (Prozac only - pre-ADHD treatment):
  • FSIQ: 107, Processing Speed: 81 (LOW AVERAGE)
  • Strong impulsivity on CPT (4 atypical scores)
  • Depression: 5, Anxiety: 3

2019 (Prozac + Strattera + Mydayis - full ADHD treatment):
  • FSIQ: 124 (+17 points), Processing Speed: 105 (+24 points)
  • Normalized attention (2 atypical scores)
  • Depression: 0, Anxiety: 0
  • BEST COGNITIVE PERFORMANCE

2025 (OFF ALL MEDICATIONS):
  • FSIQ: 104 (-20 points from 2019), Processing Speed: 94
  • Returns to baseline attention difficulties
  • CPT shows 0 atypical scores BUT this is due to structured
    testing environment masking real-world difficulties
  • NAB Attention (94) and Memory (92) below intellectual level
  • Confirms ADHD diagnosis persists; medication recommended

CONCLUSIONS:
  • 20-point IQ swing demonstrates medication effectiveness
  • ADHD is confirmed to persist without medication
  • Vocabulary remains stable (inherent verbal strength)
  • Recommendation: Return to pharmacological treatment
`);

  store.close();
  console.log('═'.repeat(60));
  console.log('Import complete. Database saved and closed.');
  console.log('═'.repeat(60));
}

main().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});
