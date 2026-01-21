/**
 * Import Neuropsychological Evaluations
 *
 * Imports neuropsych testing data from Clinical Psychology Services evaluations.
 * Data from 2018 and 2019 evaluations by Dr. Margaret Ajayi-Nabors.
 */

import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';
import { BiologicalSelfStore } from './core/biological-self/store.js';
import type {
  NeuropsychologicalEvaluation,
  IndexScore,
  SubtestScore,
  InterpretiveCategory,
  CPTMeasure,
  CPTIndicatedIssue,
} from './core/biological-self/types.js';

const DATA_DIR = join(process.cwd(), 'data');
const DB_PATH = join(DATA_DIR, 'biological-self.db');

// Helper to convert string category to InterpretiveCategory type
function toCategory(cat: string): InterpretiveCategory {
  const map: Record<string, InterpretiveCategory> = {
    'very superior': 'very-superior',
    'superior': 'superior',
    'high average': 'high-average',
    'above average': 'above-average',
    'average': 'average',
    'low average': 'low-average',
    'below average': 'below-average',
    'borderline': 'borderline',
    'mildly-to-moderately impaired': 'mildly-impaired',
    'mildly impaired': 'mildly-impaired',
    'moderately impaired': 'moderately-impaired',
    'severely impaired': 'severely-impaired',
  };
  return map[cat.toLowerCase()] || 'average';
}

// ============================================================================
// 2018 Evaluation Data (September 7-8, 2018)
// On Prozac (Fluoxetine) 80mg
// ============================================================================

const EVAL_2018: Omit<NeuropsychologicalEvaluation, 'id' | 'createdAt' | 'updatedAt'> = {
  evaluationDate: new Date('2018-09-07'),
  ageAtTesting: '26 years',

  provider: 'Clinical Psychology Services PLLC',
  psychologist: 'Margaret Ajayi-Nabors, Ph.D.',
  technician: 'Michele Havens',

  referralReason: 'Referred by medical school advisor for possible attention concerns. Evaluation of cognitive function and treatment recommendations.',
  referralSource: 'Medical school advisor',

  medicationsAtTesting: [
    { name: 'Fluoxetine (Prozac)', dosage: '80mg' },
  ],

  testsGiven: [
    'Neuropsychological Assessment Battery (NAB)',
    'Wechsler Adult Intelligence Scale-Fourth Edition (WAIS-IV)',
    'Personality Assessment Inventory (PAI)',
    'Beck Depression Inventory (BDI)',
    'Beck Anxiety Inventory (BAI)',
    'Delis Kaplan Test of Executive Functioning (DKEFS)',
    'Conners Continuous Performance Testing (CPT3)',
    'Test of Memory Malingering (TOMM)',
  ],

  nabResults: {
    form: 'Form 1',
    indices: [
      { indexName: 'Attention Index', abbreviation: 'ATT', standardScore: 104, percentileRank: 61, confidenceInterval: { low: 96, high: 112, level: 95 }, interpretiveCategory: 'average' },
      { indexName: 'Language Index', abbreviation: 'LAN', standardScore: 138, percentileRank: 99, confidenceInterval: { low: 125, high: 151, level: 95 }, interpretiveCategory: 'very-superior' },
      { indexName: 'Memory Index', abbreviation: 'MEM', standardScore: 93, percentileRank: 32, confidenceInterval: { low: 85, high: 101, level: 95 }, interpretiveCategory: 'average' },
      { indexName: 'Spatial Index', abbreviation: 'SPT', standardScore: 113, percentileRank: 81, confidenceInterval: { low: 103, high: 123, level: 95 }, interpretiveCategory: 'above-average' },
      { indexName: 'Executive Functions Index', abbreviation: 'EXE', standardScore: 99, percentileRank: 47, confidenceInterval: { low: 89, high: 109, level: 95 }, interpretiveCategory: 'average' },
      { indexName: 'Total NAB Index', abbreviation: 'T-NAB', standardScore: 111, percentileRank: 77, confidenceInterval: { low: 105, high: 117, level: 95 }, interpretiveCategory: 'above-average' },
    ],
    subtests: [
      // Attention
      { subtestName: 'Digits Forward', category: 'Attention', tScore: 66, interpretiveCategory: 'above-average' },
      { subtestName: 'Digits Backward', category: 'Attention', tScore: 58, interpretiveCategory: 'above-average' },
      { subtestName: 'Dots', category: 'Attention', tScore: 49, interpretiveCategory: 'average' },
      { subtestName: 'Numbers & Letters Part A Efficiency', category: 'Attention', tScore: 33, interpretiveCategory: 'mildly-impaired' },
      { subtestName: 'Numbers & Letters Part B Efficiency', category: 'Attention', tScore: 52, interpretiveCategory: 'average' },
      { subtestName: 'Numbers & Letters Part C Efficiency', category: 'Attention', tScore: 54, interpretiveCategory: 'average' },
      { subtestName: 'Numbers & Letters Part D Efficiency', category: 'Attention', tScore: 49, interpretiveCategory: 'average' },
      { subtestName: 'Driving Scenes', category: 'Attention', tScore: 58, interpretiveCategory: 'above-average' },
      // Language
      { subtestName: 'Oral Production', category: 'Language', tScore: 80, interpretiveCategory: 'above-average' },
      { subtestName: 'Auditory Comprehension', category: 'Language', tScore: 55, interpretiveCategory: 'above-average' },
      { subtestName: 'Naming', category: 'Language', tScore: 59, interpretiveCategory: 'above-average' },
      { subtestName: 'Writing', category: 'Language', tScore: 54, interpretiveCategory: 'average' },
      { subtestName: 'Bill Payment', category: 'Language', tScore: 54, interpretiveCategory: 'average' },
      // Memory
      { subtestName: 'List Learning - Immediate Recall', category: 'Memory', tScore: 40, interpretiveCategory: 'below-average' },
      { subtestName: 'List Learning - Short Delayed Recall', category: 'Memory', tScore: 41, interpretiveCategory: 'below-average' },
      { subtestName: 'List Learning - Long Delayed Recall', category: 'Memory', tScore: 41, interpretiveCategory: 'below-average' },
      { subtestName: 'Shape Learning Immediate Recognition', category: 'Memory', tScore: 33, interpretiveCategory: 'mildly-impaired' },
      { subtestName: 'Shape Learning Delayed Recognition', category: 'Memory', tScore: 41, interpretiveCategory: 'below-average' },
      { subtestName: 'Story Learning Phrase Unit, Immediate Recall', category: 'Memory', tScore: 70, interpretiveCategory: 'above-average' },
      { subtestName: 'Story Learning Phrase Unit, Delayed Recall', category: 'Memory', tScore: 60, interpretiveCategory: 'above-average' },
      { subtestName: 'Daily Living Memory Immediate Recall', category: 'Memory', tScore: 59, interpretiveCategory: 'above-average' },
      { subtestName: 'Daily Living Memory Delayed Recall', category: 'Memory', tScore: 44, interpretiveCategory: 'below-average' },
      // Spatial
      { subtestName: 'Visual Discrimination', category: 'Spatial', tScore: 59, interpretiveCategory: 'above-average' },
      { subtestName: 'Design Construction', category: 'Spatial', tScore: 44, interpretiveCategory: 'below-average' },
      { subtestName: 'Figure Drawing Copy', category: 'Spatial', tScore: 60, interpretiveCategory: 'above-average' },
      { subtestName: 'Map Reading', category: 'Spatial', tScore: 65, interpretiveCategory: 'above-average' },
      // Executive Functions
      { subtestName: 'Mazes', category: 'Executive Functions', tScore: 47, interpretiveCategory: 'average' },
      { subtestName: 'Judgment', category: 'Executive Functions', tScore: 69, interpretiveCategory: 'above-average' },
      { subtestName: 'Categories', category: 'Executive Functions', tScore: 43, interpretiveCategory: 'below-average' },
      { subtestName: 'Word Generation', category: 'Executive Functions', tScore: 43, interpretiveCategory: 'below-average' },
    ],
  },

  waisResults: {
    version: 'WAIS-IV',
    indices: [
      { indexName: 'Verbal Comprehension', abbreviation: 'VCI', standardScore: 132, percentileRank: 98, confidenceInterval: { low: 125, high: 136, level: 95 }, interpretiveCategory: 'very-superior' },
      { indexName: 'Perceptual Reasoning', abbreviation: 'PRI', standardScore: 102, percentileRank: 55, confidenceInterval: { low: 96, high: 108, level: 95 }, interpretiveCategory: 'average' },
      { indexName: 'Working Memory', abbreviation: 'WMI', standardScore: 102, percentileRank: 55, confidenceInterval: { low: 95, high: 109, level: 95 }, interpretiveCategory: 'average' },
      { indexName: 'Processing Speed', abbreviation: 'PSI', standardScore: 81, percentileRank: 10, confidenceInterval: { low: 75, high: 91, level: 95 }, interpretiveCategory: 'low-average' },
      { indexName: 'Full-Scale IQ', abbreviation: 'FSIQ', standardScore: 107, percentileRank: 68, confidenceInterval: { low: 103, high: 111, level: 95 }, interpretiveCategory: 'average' },
      { indexName: 'General Ability', abbreviation: 'GAI', standardScore: 118, percentileRank: 88, confidenceInterval: { low: 113, high: 122, level: 95 }, interpretiveCategory: 'high-average' },
    ],
    subtests: [
      // Verbal Comprehension
      { subtestName: 'Similarities', category: 'Verbal Comprehension', scaledScore: 14, percentileRank: 91, interpretiveCategory: 'superior' },
      { subtestName: 'Vocabulary', category: 'Verbal Comprehension', scaledScore: 19, percentileRank: 99.9, interpretiveCategory: 'very-superior' },
      { subtestName: 'Information', category: 'Verbal Comprehension', scaledScore: 13, percentileRank: 84, interpretiveCategory: 'high-average' },
      // Perceptual Reasoning
      { subtestName: 'Block Design', category: 'Perceptual Reasoning', scaledScore: 8, percentileRank: 25, interpretiveCategory: 'average' },
      { subtestName: 'Matrix Reasoning', category: 'Perceptual Reasoning', scaledScore: 10, percentileRank: 50, interpretiveCategory: 'average' },
      { subtestName: 'Visual Puzzles', category: 'Perceptual Reasoning', scaledScore: 13, percentileRank: 84, interpretiveCategory: 'high-average' },
      // Working Memory
      { subtestName: 'Digit Span', category: 'Working Memory', scaledScore: 10, percentileRank: 50, interpretiveCategory: 'average' },
      { subtestName: 'Arithmetic', category: 'Working Memory', scaledScore: 11, percentileRank: 63, interpretiveCategory: 'average' },
      // Processing Speed
      { subtestName: 'Symbol Search', category: 'Processing Speed', scaledScore: 6, percentileRank: 91.6, interpretiveCategory: 'average' },
      { subtestName: 'Coding', category: 'Processing Speed', scaledScore: 7, percentileRank: 16, interpretiveCategory: 'low-average' },
    ],
  },

  dkefsResults: {
    colorWordInterference: [
      { subtestName: 'Color Naming', scaledScore: 11, interpretiveCategory: 'average' },
      { subtestName: 'Word Reading', scaledScore: 10, interpretiveCategory: 'average' },
      { subtestName: 'Inhibition', scaledScore: 11, interpretiveCategory: 'average' },
      { subtestName: 'Inhibition/Switching', scaledScore: 11, interpretiveCategory: 'average' },
    ],
    towerTest: { subtestName: 'Tower Test', scaledScore: 9, interpretiveCategory: 'average' },
  },

  cptResults: {
    version: 'CPT-3',
    measures: [
      { category: 'detectability', measureName: "d'", tScore: 63 },
      { category: 'errors', measureName: 'Omissions', tScore: 45 },
      { category: 'errors', measureName: 'Commissions', tScore: 78 },
      { category: 'errors', measureName: 'Perseverations', tScore: 45 },
      { category: 'reaction-time', measureName: 'HRT', tScore: 38 },
      { category: 'reaction-time', measureName: 'HRT SD', tScore: 50 },
      { category: 'reaction-time', measureName: 'Variability', tScore: 50 },
      { category: 'reaction-time', measureName: 'HRT Block Change', tScore: 60 },
      { category: 'reaction-time', measureName: 'HRT ISI Change', tScore: 46 },
    ],
    atypicalTScoreCount: 4,
    adhdLikelihood: 'moderate',
    indicatedIssues: [
      { issue: 'inattentiveness', indication: 'some' },
      { issue: 'impulsivity', indication: 'strong' },
      { issue: 'sustained-attention', indication: 'some' },
      { issue: 'vigilance', indication: 'some' },
    ],
  },

  beckDepression: {
    inventoryName: 'BDI-II',
    score: 5,
    severity: 'minimal',
    reportedSymptoms: ['self-confidence', 'changes in sleeping pattern', 'concentration difficulty', 'tiredness or fatigue'],
  },

  beckAnxiety: {
    inventoryName: 'BAI',
    score: 3,
    severity: 'minimal',
    reportedSymptoms: ['wobbliness in legs', 'nervous', 'shaky/unsteady'],
  },

  tommResults: {
    trial1: 48,
    trial2: 50,
    interpretation: 'valid',
  },

  paiValidity: {
    isValid: false,
    invalidReason: 'Scores strongly indicate he did not attend appropriately in responding to the PAI items.',
  },

  diagnoses: [
    {
      diagnosis: 'Attention-Deficit Hyperactivity Disorder',
      icdCode: 'F90.2',
      severity: 'severe',
      presentation: 'Combined presentation',
    },
  ],

  conclusions: 'The results of this neuropsychological evaluation indicate very superior language ability; average memory and executive functions abilities, and average attention ability. Overall, the results suggest his cognitive functioning is in the above range. He meets criteria for Attention-Deficit Hyperactivity Disorder due to symptoms of fidgeting and squirming, difficulty wrapping up details of a project, delay getting started on tasks that requires thought, and feeling as though driven by a motor. Overall, prognosis is good.',

  recommendations: [
    'Begin individual psychotherapy to address attention/focusing difficulties.',
    'Family counseling would be beneficial to increase social support and improve interpersonal relationships.',
    'Consultation with primary care physician for attention/focusing medications.',
    'Repeat neuropsychological evaluation in 12 months, or with any significant changes in cognitive status.',
  ],

  overallCognitiveLevel: 'above-average',
};

// ============================================================================
// 2019 Evaluation Data (May 6, 2019)
// On Atomoxetine 80mg, Fluoxetine 80mg, Mydayis 50mg
// ============================================================================

const EVAL_2019: Omit<NeuropsychologicalEvaluation, 'id' | 'createdAt' | 'updatedAt'> = {
  evaluationDate: new Date('2019-05-06'),
  ageAtTesting: '27 years, 7 months',

  provider: 'Clinical Psychology Services PLLC',
  psychologist: 'Margaret Ajayi-Nabors, Ph.D.',
  technician: 'Michele Havens',

  referralReason: 'Struggling with memory loss. Evaluation of cognitive function and treatment recommendations.',

  medicationsAtTesting: [
    { name: 'Atomoxetine (Strattera)', dosage: '80mg' },
    { name: 'Fluoxetine (Prozac)', dosage: '80mg' },
    { name: 'Mydayis', dosage: '50mg' },
  ],

  testsGiven: [
    'Neuropsychological Assessment Battery (NAB)',
    'Wechsler Adult Intelligence Scale-Fourth Edition (WAIS-IV)',
    'Personality Assessment Inventory (PAI)',
    'Beck Depression Inventory (BDI)',
    'Beck Anxiety Inventory (BAI)',
    'Conners Continuous Performance Test-3 (CPT-3)',
    'Delis-Kaplan Executive Function System (DKEFS)',
    'Test of Memory Malingering (TOMM)',
  ],

  nabResults: {
    form: 'Form 1',
    indices: [
      { indexName: 'Attention Index', abbreviation: 'ATT', standardScore: 109, percentileRank: 73, confidenceInterval: { low: 101, high: 117, level: 95 }, interpretiveCategory: 'above-average' },
      { indexName: 'Language Index', abbreviation: 'LAN', standardScore: 140, percentileRank: 99.62, confidenceInterval: { low: 127, high: 153, level: 95 }, interpretiveCategory: 'very-superior' },
      { indexName: 'Memory Index', abbreviation: 'MEM', standardScore: 107, percentileRank: 68, confidenceInterval: { low: 99, high: 115, level: 95 }, interpretiveCategory: 'above-average' },
      { indexName: 'Spatial Index', abbreviation: 'SPT', standardScore: 107, percentileRank: 68, confidenceInterval: { low: 97, high: 117, level: 95 }, interpretiveCategory: 'above-average' },
      { indexName: 'Executive Functions Index', abbreviation: 'EXE', standardScore: 119, percentileRank: 90, confidenceInterval: { low: 109, high: 129, level: 95 }, interpretiveCategory: 'superior' },
      { indexName: 'Total NAB Index', abbreviation: 'T-NAB', standardScore: 121, percentileRank: 92, confidenceInterval: { low: 115, high: 127, level: 95 }, interpretiveCategory: 'superior' },
    ],
    subtests: [
      // Attention
      { subtestName: 'Digits Forward', category: 'Attention', tScore: 61, interpretiveCategory: 'above-average' },
      { subtestName: 'Digits Backward', category: 'Attention', tScore: 58, interpretiveCategory: 'above-average' },
      { subtestName: 'Dots', category: 'Attention', tScore: 58, interpretiveCategory: 'above-average' },
      { subtestName: 'Numbers & Letters Part A Efficiency', category: 'Attention', tScore: 47, interpretiveCategory: 'average' },
      { subtestName: 'Numbers & Letters Part B Efficiency', category: 'Attention', tScore: 62, interpretiveCategory: 'above-average' },
      { subtestName: 'Numbers & Letters Part C Efficiency', category: 'Attention', tScore: 51, interpretiveCategory: 'average' },
      { subtestName: 'Numbers & Letters Part D Efficiency', category: 'Attention', tScore: 51, interpretiveCategory: 'average' },
      { subtestName: 'Driving Scenes', category: 'Attention', tScore: 47, interpretiveCategory: 'average' },
      // Language
      { subtestName: 'Oral Production', category: 'Language', tScore: 72, interpretiveCategory: 'above-average' },
      { subtestName: 'Auditory Comprehension', category: 'Language', tScore: 55, interpretiveCategory: 'above-average' },
      { subtestName: 'Naming', category: 'Language', tScore: 59, interpretiveCategory: 'above-average' },
      { subtestName: 'Writing', category: 'Language', tScore: 59, interpretiveCategory: 'above-average' },
      { subtestName: 'Bill Payment', category: 'Language', tScore: 58, interpretiveCategory: 'above-average' },
      // Memory
      { subtestName: 'List Learning - Immediate Recall', category: 'Memory', tScore: 43, interpretiveCategory: 'below-average' },
      { subtestName: 'List Learning - Short Delayed Recall', category: 'Memory', tScore: 48, interpretiveCategory: 'average' },
      { subtestName: 'List Learning - Long Delayed Recall', category: 'Memory', tScore: 48, interpretiveCategory: 'average' },
      { subtestName: 'Shape Learning Immediate Recognition', category: 'Memory', tScore: 43, interpretiveCategory: 'below-average' },
      { subtestName: 'Shape Learning Delayed Recognition', category: 'Memory', tScore: 49, interpretiveCategory: 'average' },
      { subtestName: 'Story Learning Phrase Unit, Immediate Recall', category: 'Memory', tScore: 75, interpretiveCategory: 'above-average' },
      { subtestName: 'Story Learning Phrase Unit, Delayed Recall', category: 'Memory', tScore: 70, interpretiveCategory: 'above-average' },
      { subtestName: 'Daily Living Memory Immediate Recall', category: 'Memory', tScore: 62, interpretiveCategory: 'above-average' },
      { subtestName: 'Daily Living Memory Delayed Recall', category: 'Memory', tScore: 52, interpretiveCategory: 'average' },
      // Spatial
      { subtestName: 'Visual Discrimination', category: 'Spatial', tScore: 58, interpretiveCategory: 'above-average' },
      { subtestName: 'Design Construction', category: 'Spatial', tScore: 32, interpretiveCategory: 'mildly-impaired' },
      { subtestName: 'Figure Drawing Copy', category: 'Spatial', tScore: 53, interpretiveCategory: 'average' },
      { subtestName: 'Map Reading', category: 'Spatial', tScore: 74, interpretiveCategory: 'above-average' },
      // Executive Functions
      { subtestName: 'Mazes', category: 'Executive Functions', tScore: 66, interpretiveCategory: 'above-average' },
      { subtestName: 'Judgment', category: 'Executive Functions', tScore: 70, interpretiveCategory: 'above-average' },
      { subtestName: 'Categories', category: 'Executive Functions', tScore: 51, interpretiveCategory: 'average' },
      { subtestName: 'Word Generation', category: 'Executive Functions', tScore: 53, interpretiveCategory: 'average' },
    ],
  },

  waisResults: {
    version: 'WAIS-IV',
    indices: [
      { indexName: 'Verbal Comprehension', abbreviation: 'VCI', standardScore: 136, percentileRank: 99, confidenceInterval: { low: 129, high: 140, level: 95 }, interpretiveCategory: 'very-superior' },
      { indexName: 'Perceptual Reasoning', abbreviation: 'PRI', standardScore: 115, percentileRank: 84, confidenceInterval: { low: 108, high: 120, level: 95 }, interpretiveCategory: 'high-average' },
      { indexName: 'Working Memory', abbreviation: 'WMI', standardScore: 117, percentileRank: 87, confidenceInterval: { low: 109, high: 123, level: 95 }, interpretiveCategory: 'high-average' },
      { indexName: 'Processing Speed', abbreviation: 'PSI', standardScore: 105, percentileRank: 63, confidenceInterval: { low: 96, high: 113, level: 95 }, interpretiveCategory: 'average' },
      { indexName: 'Full-Scale IQ', abbreviation: 'FSIQ', standardScore: 124, percentileRank: 95, confidenceInterval: { low: 119, high: 128, level: 95 }, interpretiveCategory: 'superior' },
      { indexName: 'General Ability', abbreviation: 'GAI', standardScore: 128, percentileRank: 97, confidenceInterval: { low: 122, high: 132, level: 95 }, interpretiveCategory: 'superior' },
    ],
    subtests: [
      // Verbal Comprehension
      { subtestName: 'Similarities', category: 'Verbal Comprehension', scaledScore: 16, percentileRank: 98, interpretiveCategory: 'very-superior' },
      { subtestName: 'Vocabulary', category: 'Verbal Comprehension', scaledScore: 19, percentileRank: 99.9, interpretiveCategory: 'very-superior' },
      { subtestName: 'Information', category: 'Verbal Comprehension', scaledScore: 13, percentileRank: 84, interpretiveCategory: 'high-average' },
      // Perceptual Reasoning
      { subtestName: 'Block Design', category: 'Perceptual Reasoning', scaledScore: 10, percentileRank: 50, interpretiveCategory: 'average' },
      { subtestName: 'Matrix Reasoning', category: 'Perceptual Reasoning', scaledScore: 13, percentileRank: 84, interpretiveCategory: 'high-average' },
      { subtestName: 'Visual Puzzles', category: 'Perceptual Reasoning', scaledScore: 15, percentileRank: 95, interpretiveCategory: 'superior' },
      // Working Memory
      { subtestName: 'Digit Span', category: 'Working Memory', scaledScore: 13, percentileRank: 84, interpretiveCategory: 'high-average' },
      { subtestName: 'Arithmetic', category: 'Working Memory', scaledScore: 13, percentileRank: 84, interpretiveCategory: 'high-average' },
      // Processing Speed
      { subtestName: 'Symbol Search', category: 'Processing Speed', scaledScore: 12, percentileRank: 75, interpretiveCategory: 'high-average' },
      { subtestName: 'Coding', category: 'Processing Speed', scaledScore: 10, percentileRank: 50, interpretiveCategory: 'average' },
    ],
  },

  dkefsResults: {
    colorWordInterference: [
      { subtestName: 'Color Naming', scaledScore: 12, interpretiveCategory: 'average' },
      { subtestName: 'Word Reading', scaledScore: 13, interpretiveCategory: 'high-average' },
      { subtestName: 'Inhibition', scaledScore: 14, interpretiveCategory: 'high-average' },
      { subtestName: 'Inhibition/Switching', scaledScore: 13, interpretiveCategory: 'high-average' },
    ],
    towerTest: { subtestName: 'Tower Test', scaledScore: 11, interpretiveCategory: 'average' },
  },

  cptResults: {
    version: 'CPT-3',
    measures: [
      { category: 'detectability', measureName: "d'", tScore: 51 },
      { category: 'errors', measureName: 'Omissions', tScore: 43 },
      { category: 'errors', measureName: 'Commissions', tScore: 53 },
      { category: 'errors', measureName: 'Perseverations', tScore: 58 },
      { category: 'reaction-time', measureName: 'HRT', tScore: 44 },
      { category: 'reaction-time', measureName: 'HRT SD', tScore: 41 },
      { category: 'reaction-time', measureName: 'Variability', tScore: 42 },
      { category: 'reaction-time', measureName: 'HRT Block Change', tScore: 65 },
      { category: 'reaction-time', measureName: 'HRT ISI Change', tScore: 45 },
    ],
    atypicalTScoreCount: 2,
    adhdLikelihood: 'moderate',
    indicatedIssues: [
      { issue: 'sustained-attention', indication: 'some' },
    ],
  },

  beckDepression: {
    inventoryName: 'BDI-II',
    score: 0,
    severity: 'none',
    reportedSymptoms: [],
  },

  beckAnxiety: {
    inventoryName: 'BAI',
    score: 0,
    severity: 'none',
    reportedSymptoms: [],
  },

  tommResults: {
    trial1: 49,
    trial2: 49,
    interpretation: 'valid',
  },

  paiValidity: {
    isValid: false,
    invalidReason: 'INF scale exceeds cutoff for profile validity, suggesting problems attending to or interpreting item content.',
  },

  diagnoses: [
    {
      diagnosis: 'Attention-Deficit Hyperactivity Disorder',
      icdCode: 'F90.2',
      severity: 'severe',
      presentation: 'Combined presentation',
    },
  ],

  conclusions: 'The neuropsychological results of this twenty-seven-year-old male finds cognitive functioning to be in the superior range. His attention, memory, and spatial abilities are in the above average range while his executive functioning is in the superior range. His language abilities are in the very superior range. He meets criteria for Attention-Deficit Hyperactivity Disorder as a result of difficulty sustaining attention, failure to give close attention to details, making careless mistakes, difficulty following through on instructions, losing items necessary for tasks, being easily distracted and forgetful in daily activities. It appears that his current medication regimen is moderately effective in treating the symptoms of this disorder. His reported difficulties with memory are likely the result of his Attention-Deficit Hyperactivity Disorder.',

  recommendations: [
    'Mr. Gomez would benefit from counseling to address attention difficulties and life stressors.',
    'Family counseling would be beneficial to increase social support and improve interpersonal relationships.',
    'Consult with primary care provider for lowest effective dosage of medication to address attention difficulties.',
    'Re-evaluation in twelve months or with significant change in cognitive status.',
  ],

  overallCognitiveLevel: 'superior',
};

// ============================================================================
// Main Import Function
// ============================================================================

async function main() {
  console.log('╔══════════════════════════════════════════════════════════╗');
  console.log('║     Neuropsychological Evaluations Import                ║');
  console.log('╚══════════════════════════════════════════════════════════╝\n');

  // Ensure data directory exists
  if (!existsSync(DATA_DIR)) {
    mkdirSync(DATA_DIR, { recursive: true });
  }

  // Get passphrase from env
  const passphrase = process.env.BIOSELF_PASSPHRASE;
  if (!passphrase) {
    console.error('Error: BIOSELF_PASSPHRASE environment variable is required.');
    console.error('Set it with: export BIOSELF_PASSPHRASE=your_passphrase');
    process.exit(1);
  }

  console.log('Using passphrase from BIOSELF_PASSPHRASE environment variable.\n');

  // Initialize store
  console.log('Connecting to database...');
  const store = new BiologicalSelfStore(DB_PATH, passphrase);

  // Get or create BiologicalSelf
  let self = store.get();
  if (!self) {
    console.log('Creating new Biological Self profile...');
    self = store.create();
    console.log(`Created profile with ID: ${self.id}`);
  } else {
    console.log(`Loaded existing profile`);
    console.log(`  Lab results: ${self.labResults.length}`);
    console.log(`  Neuropsych evaluations: ${self.neuropsychEvaluations.length}`);
    if (self.pharmacogenomics) {
      console.log(`  Pharmacogenomics: ${self.pharmacogenomics.source}`);
    }
  }

  // Import evaluations
  const evaluations = [
    { data: EVAL_2018, label: 'September 2018' },
    { data: EVAL_2019, label: 'May 2019' },
  ];

  console.log('\n' + '─'.repeat(60));
  console.log('Importing Neuropsychological Evaluations...');
  console.log('─'.repeat(60));

  for (const { data, label } of evaluations) {
    // Check for duplicate by date
    const existingEval = self.neuropsychEvaluations.find(
      e => e.evaluationDate.toDateString() === data.evaluationDate.toDateString()
    );

    if (existingEval) {
      console.log(`\n⚠ ${label}: Already exists, skipping.`);
      continue;
    }

    const newEval = store.addNeuropsychEvaluation(self, data);
    self = store.get()!;

    console.log(`\n✓ ${label} Evaluation Imported`);
    console.log(`  ID: ${newEval.id}`);
    console.log(`  Age: ${newEval.ageAtTesting}`);
    console.log(`  Medications: ${newEval.medicationsAtTesting.map(m => m.name).join(', ')}`);
    console.log(`  Overall Level: ${newEval.overallCognitiveLevel}`);
  }

  // Summary with comparison
  console.log('\n' + '═'.repeat(60));
  console.log('LONGITUDINAL COMPARISON');
  console.log('═'.repeat(60));

  if (self.neuropsychEvaluations.length >= 2) {
    const sorted = [...self.neuropsychEvaluations].sort(
      (a, b) => a.evaluationDate.getTime() - b.evaluationDate.getTime()
    );

    const first = sorted[0];
    const last = sorted[sorted.length - 1];

    console.log('\nWAIS-IV Index Changes (2018 → 2019):');

    if (first.waisResults && last.waisResults) {
      for (const lastIdx of last.waisResults.indices) {
        const firstIdx = first.waisResults.indices.find(i => i.abbreviation === lastIdx.abbreviation);
        if (firstIdx) {
          const change = lastIdx.standardScore - firstIdx.standardScore;
          const arrow = change > 0 ? '↑' : change < 0 ? '↓' : '→';
          const changeStr = change > 0 ? `+${change}` : change.toString();
          console.log(`  ${lastIdx.abbreviation}: ${firstIdx.standardScore} → ${lastIdx.standardScore} (${arrow} ${changeStr})`);
        }
      }
    }

    console.log('\nNAB Index Changes (2018 → 2019):');

    if (first.nabResults && last.nabResults) {
      for (const lastIdx of last.nabResults.indices) {
        const firstIdx = first.nabResults.indices.find(i => i.abbreviation === lastIdx.abbreviation);
        if (firstIdx) {
          const change = lastIdx.standardScore - firstIdx.standardScore;
          const arrow = change > 0 ? '↑' : change < 0 ? '↓' : '→';
          const changeStr = change > 0 ? `+${change}` : change.toString();
          console.log(`  ${lastIdx.abbreviation}: ${firstIdx.standardScore} → ${lastIdx.standardScore} (${arrow} ${changeStr})`);
        }
      }
    }

    console.log('\nMood Changes:');
    console.log(`  Depression (BDI): ${first.beckDepression?.score} → ${last.beckDepression?.score}`);
    console.log(`  Anxiety (BAI): ${first.beckAnxiety?.score} → ${last.beckAnxiety?.score}`);

    console.log('\nCPT-3 Changes:');
    console.log(`  Atypical T-scores: ${first.cptResults?.atypicalTScoreCount} → ${last.cptResults?.atypicalTScoreCount}`);
    console.log(`  Impulsivity: ${first.cptResults?.indicatedIssues.find(i => i.issue === 'impulsivity')?.indication || 'none'} → ${last.cptResults?.indicatedIssues.find(i => i.issue === 'impulsivity')?.indication || 'none'}`);
  }

  // Key findings
  console.log('\n' + '─'.repeat(60));
  console.log('KEY FINDINGS');
  console.log('─'.repeat(60));
  console.log(`
Significant improvements observed between 2018 and 2019 with addition
of ADHD medications (Atomoxetine + Mydayis to Fluoxetine):

  • Full-Scale IQ: 107 → 124 (+17 points)
  • Processing Speed: 81 → 105 (+24 points - normalized from low-average)
  • Working Memory: 102 → 117 (+15 points)
  • Executive Functions: 99 → 119 (+20 points - now superior)
  • Overall cognitive level: Above average → Superior

Depression and anxiety symptoms completely resolved (BDI 5→0, BAI 3→0)
CPT-3 impulsivity indicator improved from "strong" to "none"

Consistent strengths: Verbal Comprehension (very superior)
Consistent weakness: Block Design / visual-spatial construction
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
