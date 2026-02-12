/**
 * Test Recommendation Engine
 *
 * Suggests appropriate diagnostic tests based on symptoms and suspected conditions.
 * Considers test characteristics, clinical context, and practical factors.
 */

import type { SymptomInput, Condition, UrgencyLevel } from '../clinical-reasoning/types';

// ============================================
// Types
// ============================================

export interface DiagnosticTest {
  id: string;
  name: string;
  category: TestCategory;
  description: string;
  whatItReveals: string[];
  sensitivity?: number;  // 0-1
  specificity?: number;  // 0-1
  turnaround: string;    // e.g., "minutes", "hours", "days"
  invasiveness: 'none' | 'minimal' | 'moderate' | 'significant';
  cost: 'low' | 'moderate' | 'high' | 'very-high';
  preparation?: string;
  risks?: string[];
  contraindications?: string[];
}

export type TestCategory =
  | 'laboratory'
  | 'imaging'
  | 'cardiac'
  | 'pulmonary'
  | 'endoscopy'
  | 'biopsy'
  | 'neurological'
  | 'specialized';

export interface TestRecommendation {
  test: DiagnosticTest;
  priority: 'essential' | 'recommended' | 'consider';
  rationale: string;
  whatLookingFor: string;
  alternateTests?: string[];
  timing: string;
}

export interface TestRecommendationResult {
  recommendations: TestRecommendation[];
  byPriority: {
    essential: TestRecommendation[];
    recommended: TestRecommendation[];
    consider: TestRecommendation[];
  };
  byCategory: Record<TestCategory, TestRecommendation[]>;
  estimatedTimeframe: string;
  totalCost: string;
  disclaimers: string[];
}

// ============================================
// Test Database
// ============================================

export const DIAGNOSTIC_TESTS: Map<string, DiagnosticTest> = new Map();

// Laboratory Tests
DIAGNOSTIC_TESTS.set('cbc', {
  id: 'cbc',
  name: 'Complete Blood Count (CBC)',
  category: 'laboratory',
  description: 'Measures red blood cells, white blood cells, and platelets',
  whatItReveals: ['Anemia', 'Infection', 'Bleeding disorders', 'Blood cancers'],
  sensitivity: 0.85,
  specificity: 0.70,
  turnaround: 'hours',
  invasiveness: 'minimal',
  cost: 'low',
});

DIAGNOSTIC_TESTS.set('cmp', {
  id: 'cmp',
  name: 'Comprehensive Metabolic Panel (CMP)',
  category: 'laboratory',
  description: 'Measures glucose, electrolytes, kidney and liver function',
  whatItReveals: ['Diabetes', 'Kidney disease', 'Liver disease', 'Electrolyte imbalances'],
  sensitivity: 0.80,
  specificity: 0.75,
  turnaround: 'hours',
  invasiveness: 'minimal',
  cost: 'low',
});

DIAGNOSTIC_TESTS.set('troponin', {
  id: 'troponin',
  name: 'Troponin (Cardiac Biomarker)',
  category: 'laboratory',
  description: 'Measures proteins released when heart muscle is damaged',
  whatItReveals: ['Heart attack', 'Myocardial injury', 'Heart strain'],
  sensitivity: 0.95,
  specificity: 0.90,
  turnaround: 'minutes',
  invasiveness: 'minimal',
  cost: 'moderate',
});

DIAGNOSTIC_TESTS.set('bnp', {
  id: 'bnp',
  name: 'BNP (B-type Natriuretic Peptide)',
  category: 'laboratory',
  description: 'Measures hormone elevated in heart failure',
  whatItReveals: ['Heart failure', 'Cardiac dysfunction'],
  sensitivity: 0.90,
  specificity: 0.85,
  turnaround: 'hours',
  invasiveness: 'minimal',
  cost: 'moderate',
});

DIAGNOSTIC_TESTS.set('d-dimer', {
  id: 'd-dimer',
  name: 'D-Dimer',
  category: 'laboratory',
  description: 'Measures clot breakdown products',
  whatItReveals: ['Blood clots', 'PE', 'DVT', 'DIC'],
  sensitivity: 0.95,
  specificity: 0.40,
  turnaround: 'hours',
  invasiveness: 'minimal',
  cost: 'low',
});

DIAGNOSTIC_TESTS.set('tsh', {
  id: 'tsh',
  name: 'TSH (Thyroid Stimulating Hormone)',
  category: 'laboratory',
  description: 'Measures pituitary hormone that regulates thyroid',
  whatItReveals: ['Hypothyroidism', 'Hyperthyroidism', 'Thyroid dysfunction'],
  sensitivity: 0.90,
  specificity: 0.90,
  turnaround: 'hours',
  invasiveness: 'minimal',
  cost: 'low',
});

DIAGNOSTIC_TESTS.set('lipase', {
  id: 'lipase',
  name: 'Lipase',
  category: 'laboratory',
  description: 'Measures pancreatic enzyme elevated in pancreatitis',
  whatItReveals: ['Pancreatitis', 'Pancreatic injury'],
  sensitivity: 0.90,
  specificity: 0.85,
  turnaround: 'hours',
  invasiveness: 'minimal',
  cost: 'low',
});

DIAGNOSTIC_TESTS.set('lactate', {
  id: 'lactate',
  name: 'Lactate',
  category: 'laboratory',
  description: 'Measures lactic acid, marker of tissue hypoxia',
  whatItReveals: ['Sepsis', 'Shock', 'Tissue hypoxia', 'Metabolic stress'],
  sensitivity: 0.80,
  specificity: 0.60,
  turnaround: 'minutes',
  invasiveness: 'minimal',
  cost: 'low',
});

// Imaging Tests
DIAGNOSTIC_TESTS.set('cxr', {
  id: 'cxr',
  name: 'Chest X-Ray',
  category: 'imaging',
  description: 'X-ray image of the chest showing heart, lungs, and bones',
  whatItReveals: ['Pneumonia', 'Heart failure', 'Lung masses', 'Rib fractures'],
  sensitivity: 0.70,
  specificity: 0.80,
  turnaround: 'minutes',
  invasiveness: 'none',
  cost: 'low',
});

DIAGNOSTIC_TESTS.set('ct-chest', {
  id: 'ct-chest',
  name: 'CT Chest',
  category: 'imaging',
  description: 'Detailed cross-sectional imaging of the chest',
  whatItReveals: ['Pulmonary embolism', 'Lung cancer', 'Interstitial lung disease', 'Aortic disease'],
  sensitivity: 0.95,
  specificity: 0.90,
  turnaround: 'hours',
  invasiveness: 'minimal',
  cost: 'high',
  preparation: 'May require contrast - discuss kidney function',
  risks: ['Radiation exposure', 'Contrast allergy', 'Kidney injury from contrast'],
});

DIAGNOSTIC_TESTS.set('ct-abdomen', {
  id: 'ct-abdomen',
  name: 'CT Abdomen/Pelvis',
  category: 'imaging',
  description: 'Detailed cross-sectional imaging of abdomen and pelvis',
  whatItReveals: ['Appendicitis', 'Diverticulitis', 'Kidney stones', 'Tumors', 'Bowel obstruction'],
  sensitivity: 0.95,
  specificity: 0.90,
  turnaround: 'hours',
  invasiveness: 'minimal',
  cost: 'high',
  preparation: 'May require oral and IV contrast',
  risks: ['Radiation exposure', 'Contrast allergy'],
});

DIAGNOSTIC_TESTS.set('mri-brain', {
  id: 'mri-brain',
  name: 'MRI Brain',
  category: 'imaging',
  description: 'Magnetic resonance imaging of the brain',
  whatItReveals: ['Stroke', 'Tumors', 'MS', 'Infection', 'Bleeding'],
  sensitivity: 0.95,
  specificity: 0.92,
  turnaround: 'hours',
  invasiveness: 'none',
  cost: 'high',
  contraindications: ['Metal implants', 'Pacemakers', 'Claustrophobia'],
});

DIAGNOSTIC_TESTS.set('ultrasound-abdomen', {
  id: 'ultrasound-abdomen',
  name: 'Abdominal Ultrasound',
  category: 'imaging',
  description: 'Sound wave imaging of abdominal organs',
  whatItReveals: ['Gallstones', 'Liver disease', 'Kidney disease', 'Aortic aneurysm'],
  sensitivity: 0.85,
  specificity: 0.85,
  turnaround: 'hours',
  invasiveness: 'none',
  cost: 'moderate',
});

// Cardiac Tests
DIAGNOSTIC_TESTS.set('ecg', {
  id: 'ecg',
  name: 'ECG (Electrocardiogram)',
  category: 'cardiac',
  description: 'Records electrical activity of the heart',
  whatItReveals: ['Arrhythmias', 'Heart attack', 'Heart strain', 'Conduction abnormalities'],
  sensitivity: 0.80,
  specificity: 0.85,
  turnaround: 'minutes',
  invasiveness: 'none',
  cost: 'low',
});

DIAGNOSTIC_TESTS.set('echo', {
  id: 'echo',
  name: 'Echocardiogram',
  category: 'cardiac',
  description: 'Ultrasound of the heart structure and function',
  whatItReveals: ['Heart failure', 'Valve disease', 'Wall motion abnormalities', 'Pericardial effusion'],
  sensitivity: 0.90,
  specificity: 0.90,
  turnaround: 'hours',
  invasiveness: 'none',
  cost: 'moderate',
});

DIAGNOSTIC_TESTS.set('stress-test', {
  id: 'stress-test',
  name: 'Cardiac Stress Test',
  category: 'cardiac',
  description: 'Heart function testing during exercise or medication-induced stress',
  whatItReveals: ['Coronary artery disease', 'Exercise capacity', 'Arrhythmias'],
  sensitivity: 0.75,
  specificity: 0.80,
  turnaround: 'hours',
  invasiveness: 'minimal',
  cost: 'moderate',
  risks: ['Cardiac event during test'],
  contraindications: ['Acute MI', 'Unstable angina', 'Severe aortic stenosis'],
});

// Pulmonary Tests
DIAGNOSTIC_TESTS.set('pft', {
  id: 'pft',
  name: 'Pulmonary Function Tests',
  category: 'pulmonary',
  description: 'Measures lung capacity and airflow',
  whatItReveals: ['COPD', 'Asthma', 'Restrictive lung disease', 'Pulmonary fibrosis'],
  sensitivity: 0.85,
  specificity: 0.80,
  turnaround: 'hours',
  invasiveness: 'none',
  cost: 'moderate',
});

// ============================================
// Symptom-to-Test Mappings
// ============================================

const SYMPTOM_TEST_MAPPINGS: Record<string, { testId: string; priority: TestRecommendation['priority']; rationale: string }[]> = {
  'chest pain': [
    { testId: 'ecg', priority: 'essential', rationale: 'First-line test to evaluate for cardiac cause' },
    { testId: 'troponin', priority: 'essential', rationale: 'Detect heart muscle damage' },
    { testId: 'cxr', priority: 'recommended', rationale: 'Evaluate for pulmonary or aortic causes' },
    { testId: 'd-dimer', priority: 'consider', rationale: 'If PE suspected and low pretest probability' },
  ],
  'shortness of breath': [
    { testId: 'cxr', priority: 'essential', rationale: 'Evaluate lungs and heart size' },
    { testId: 'bnp', priority: 'recommended', rationale: 'Screen for heart failure' },
    { testId: 'd-dimer', priority: 'consider', rationale: 'If PE suspected' },
    { testId: 'pft', priority: 'consider', rationale: 'If COPD/asthma suspected' },
  ],
  'abdominal pain': [
    { testId: 'cmp', priority: 'essential', rationale: 'Evaluate liver, kidney, and metabolic status' },
    { testId: 'cbc', priority: 'essential', rationale: 'Check for infection or bleeding' },
    { testId: 'lipase', priority: 'recommended', rationale: 'Rule out pancreatitis' },
    { testId: 'ct-abdomen', priority: 'consider', rationale: 'If diagnosis uncertain or severe pain' },
  ],
  'fatigue': [
    { testId: 'cbc', priority: 'essential', rationale: 'Check for anemia' },
    { testId: 'tsh', priority: 'essential', rationale: 'Screen for thyroid dysfunction' },
    { testId: 'cmp', priority: 'recommended', rationale: 'Evaluate metabolic status' },
  ],
  'dizziness': [
    { testId: 'cbc', priority: 'essential', rationale: 'Check for anemia' },
    { testId: 'cmp', priority: 'essential', rationale: 'Check electrolytes and glucose' },
    { testId: 'ecg', priority: 'recommended', rationale: 'Evaluate for arrhythmia' },
  ],
  'fever': [
    { testId: 'cbc', priority: 'essential', rationale: 'Check for infection markers' },
    { testId: 'cmp', priority: 'recommended', rationale: 'Evaluate metabolic status' },
    { testId: 'lactate', priority: 'consider', rationale: 'If sepsis suspected' },
  ],
  'headache': [
    { testId: 'mri-brain', priority: 'consider', rationale: 'If red flags present or severe' },
  ],
  'palpitations': [
    { testId: 'ecg', priority: 'essential', rationale: 'Detect arrhythmia' },
    { testId: 'tsh', priority: 'essential', rationale: 'Check thyroid function' },
    { testId: 'cbc', priority: 'recommended', rationale: 'Check for anemia' },
  ],
};

// ============================================
// Recommendation Engine
// ============================================

/**
 * Generate test recommendations based on symptoms and suspected conditions
 */
export function generateTestRecommendations(
  symptoms: SymptomInput[],
  suspectedConditions?: string[],
  urgency?: UrgencyLevel
): TestRecommendationResult {
  const recommendations: TestRecommendation[] = [];
  const addedTests = new Set<string>();

  // Get recommendations for each symptom
  for (const symptom of symptoms) {
    const symptomLower = symptom.name.toLowerCase();
    const mappings = SYMPTOM_TEST_MAPPINGS[symptomLower];

    if (mappings) {
      for (const mapping of mappings) {
        if (addedTests.has(mapping.testId)) continue;

        const test = DIAGNOSTIC_TESTS.get(mapping.testId);
        if (!test) continue;

        addedTests.add(mapping.testId);
        recommendations.push({
          test,
          priority: mapping.priority,
          rationale: mapping.rationale,
          whatLookingFor: test.whatItReveals.join(', '),
          timing: urgency === 'emergency' ? 'immediate' : 'within 24-48 hours',
        });
      }
    }
  }

  // If no specific mappings, add basic panel
  if (recommendations.length === 0) {
    const basicTests = ['cbc', 'cmp'];
    for (const testId of basicTests) {
      const test = DIAGNOSTIC_TESTS.get(testId);
      if (test) {
        recommendations.push({
          test,
          priority: 'recommended',
          rationale: 'General screening tests',
          whatLookingFor: test.whatItReveals.join(', '),
          timing: 'routine',
        });
      }
    }
  }

  // Sort by priority
  const essential = recommendations.filter(r => r.priority === 'essential');
  const recommended = recommendations.filter(r => r.priority === 'recommended');
  const consider = recommendations.filter(r => r.priority === 'consider');

  // Group by category
  const byCategory: Record<TestCategory, TestRecommendation[]> = {
    laboratory: [],
    imaging: [],
    cardiac: [],
    pulmonary: [],
    endoscopy: [],
    biopsy: [],
    neurological: [],
    specialized: [],
  };

  for (const rec of recommendations) {
    byCategory[rec.test.category].push(rec);
  }

  // Estimate timeframe and cost
  const hasImaging = recommendations.some(r => r.test.category === 'imaging');
  const hasSpecialized = recommendations.some(r => r.test.cost === 'high' || r.test.cost === 'very-high');

  const estimatedTimeframe = urgency === 'emergency'
    ? 'Immediate (ER setting)'
    : hasImaging
    ? 'Same day to 2-3 days'
    : 'Same day';

  const totalCost = hasSpecialized
    ? 'High ($500-2000+)'
    : hasImaging
    ? 'Moderate ($200-500)'
    : 'Low ($50-200)';

  return {
    recommendations,
    byPriority: { essential, recommended, consider },
    byCategory,
    estimatedTimeframe,
    totalCost,
    disclaimers: [
      'These are general recommendations based on common presentations',
      'Actual testing should be determined by a healthcare provider',
      'Individual factors may change the priority of tests',
      'Some tests may not be appropriate for all patients',
    ],
  };
}

/**
 * Get test by ID
 */
export function getTestById(id: string): DiagnosticTest | undefined {
  return DIAGNOSTIC_TESTS.get(id);
}

/**
 * Get all tests in a category
 */
export function getTestsByCategory(category: TestCategory): DiagnosticTest[] {
  return Array.from(DIAGNOSTIC_TESTS.values()).filter(t => t.category === category);
}

/**
 * Get all available tests
 */
export function getAllTests(): DiagnosticTest[] {
  return Array.from(DIAGNOSTIC_TESTS.values());
}
