/**
 * Lab Abnormal Patterns Store
 * Pattern recognition for lab abnormalities
 */

import type { LabPattern, PatternMatch, AbnormalPatternsState, LabFinding } from './types';

class AbnormalPatternsStore {
  private state: AbnormalPatternsState = {
    patterns: new Map(),
    recentMatches: [],
  };

  private listeners: Set<() => void> = new Set();

  constructor() {
    this.initializePatterns();
  }

  private initializePatterns() {
    const patterns: LabPattern[] = [
      // Electrolyte patterns
      {
        id: 'hypovolemic-hyponatremia',
        name: 'Hypovolemic Hyponatremia',
        category: 'electrolyte',
        description: 'Low sodium with low extracellular fluid volume',
        requiredFindings: [
          { parameter: 'Sodium', operator: '<', value: 135, unit: 'mEq/L', required: true },
          { parameter: 'BUN/Creatinine Ratio', operator: '>', value: 20, required: true },
        ],
        supportingFindings: [
          { parameter: 'Urine Sodium', operator: '<', value: 20, unit: 'mEq/L', required: false },
          { parameter: 'Uric Acid', operator: '>', value: 7, unit: 'mg/dL', required: false },
        ],
        severity: 'moderate',
        differentialDiagnosis: ['GI losses (vomiting, diarrhea)', 'Diuretic use', 'Third spacing', 'Adrenal insufficiency'],
        nextSteps: [
          { action: 'Assess volume status clinically', urgency: 'immediate', rationale: 'Determines treatment approach' },
          { action: 'Check urine sodium', urgency: 'urgent', rationale: 'Distinguishes renal from extrarenal losses' },
          { action: 'Volume replacement with isotonic saline', urgency: 'urgent', rationale: 'Restore volume before correcting sodium' },
        ],
        clinicalPearls: ['Correct slowly to avoid osmotic demyelination', 'Volume restoration often corrects sodium'],
      },
      {
        id: 'euvolemic-hyponatremia',
        name: 'Euvolemic Hyponatremia',
        category: 'electrolyte',
        description: 'Low sodium with normal volume status',
        requiredFindings: [
          { parameter: 'Sodium', operator: '<', value: 135, unit: 'mEq/L', required: true },
          { parameter: 'Urine Sodium', operator: '>', value: 20, unit: 'mEq/L', required: true },
          { parameter: 'Serum Osmolality', operator: '<', value: 275, unit: 'mOsm/kg', required: true },
        ],
        supportingFindings: [
          { parameter: 'Uric Acid', operator: '<', value: 4, unit: 'mg/dL', required: false },
        ],
        severity: 'moderate',
        differentialDiagnosis: ['SIADH', 'Hypothyroidism', 'Adrenal insufficiency', 'Psychogenic polydipsia'],
        nextSteps: [
          { action: 'Check TSH, cortisol', urgency: 'urgent', rationale: 'Rule out endocrine causes' },
          { action: 'Fluid restriction (800-1200 mL/day)', urgency: 'routine', rationale: 'First-line for SIADH' },
          { action: 'Consider tolvaptan if severe', urgency: 'routine', rationale: 'V2 receptor antagonist for SIADH' },
        ],
        clinicalPearls: ['Most common cause is SIADH', 'Check medication list for triggers'],
      },
      {
        id: 'hypervolemic-hyponatremia',
        name: 'Hypervolemic Hyponatremia',
        category: 'electrolyte',
        description: 'Low sodium with fluid overload',
        requiredFindings: [
          { parameter: 'Sodium', operator: '<', value: 135, unit: 'mEq/L', required: true },
          { parameter: 'BNP', operator: '>', value: 400, unit: 'pg/mL', required: false },
        ],
        supportingFindings: [
          { parameter: 'Creatinine', operator: '>', value: 1.5, unit: 'mg/dL', required: false },
          { parameter: 'Albumin', operator: '<', value: 3.5, unit: 'g/dL', required: false },
        ],
        severity: 'moderate',
        differentialDiagnosis: ['Heart failure', 'Cirrhosis', 'Nephrotic syndrome', 'Renal failure'],
        nextSteps: [
          { action: 'Evaluate for peripheral edema, JVD', urgency: 'immediate', rationale: 'Assess volume overload' },
          { action: 'Restrict fluid and sodium', urgency: 'urgent', rationale: 'Reduce volume overload' },
          { action: 'Treat underlying condition', urgency: 'urgent', rationale: 'HF, cirrhosis, etc.' },
        ],
        clinicalPearls: ['Effective circulating volume is low despite total body water excess', 'Diuretics may worsen hyponatremia'],
      },
      // Liver patterns
      {
        id: 'cholestatic-pattern',
        name: 'Cholestatic Liver Pattern',
        category: 'liver',
        description: 'Predominant elevation of alkaline phosphatase and bilirubin',
        requiredFindings: [
          { parameter: 'Alkaline Phosphatase', operator: '>', value: 150, unit: 'U/L', required: true },
          { parameter: 'Direct Bilirubin', operator: '>', value: 0.3, unit: 'mg/dL', required: true },
        ],
        supportingFindings: [
          { parameter: 'GGT', operator: '>', value: 50, unit: 'U/L', required: false },
          { parameter: 'ALT', operator: '<', value: 100, unit: 'U/L', required: false },
        ],
        severity: 'moderate',
        differentialDiagnosis: ['Biliary obstruction', 'Primary biliary cholangitis', 'Drug-induced cholestasis', 'Infiltrative disease'],
        nextSteps: [
          { action: 'Right upper quadrant ultrasound', urgency: 'urgent', rationale: 'Evaluate for obstruction' },
          { action: 'Check ANA, AMA, anti-smooth muscle', urgency: 'routine', rationale: 'Autoimmune workup' },
          { action: 'Review medication list', urgency: 'routine', rationale: 'Drug-induced causes common' },
        ],
        clinicalPearls: ['If ALP elevated but GGT normal, consider bone source', 'Pruritus common symptom'],
      },
      {
        id: 'hepatocellular-pattern',
        name: 'Hepatocellular Liver Pattern',
        category: 'liver',
        description: 'Predominant elevation of transaminases',
        requiredFindings: [
          { parameter: 'ALT', operator: '>', value: 100, unit: 'U/L', required: true },
          { parameter: 'AST', operator: '>', value: 100, unit: 'U/L', required: true },
        ],
        supportingFindings: [
          { parameter: 'AST/ALT Ratio', operator: '>', value: 2, required: false },
          { parameter: 'Bilirubin', operator: '>', value: 1.2, unit: 'mg/dL', required: false },
        ],
        severity: 'severe',
        differentialDiagnosis: ['Viral hepatitis', 'Alcoholic liver disease', 'NAFLD', 'Ischemic hepatitis', 'Toxin/drug-induced'],
        nextSteps: [
          { action: 'Viral hepatitis panel', urgency: 'urgent', rationale: 'Rule out acute hepatitis' },
          { action: 'Prothrombin time/INR', urgency: 'immediate', rationale: 'Assess synthetic function' },
          { action: 'Review medications, alcohol use', urgency: 'urgent', rationale: 'Common causes' },
        ],
        clinicalPearls: ['AST/ALT >2 suggests alcohol; >3000 suggests toxin/ischemia', 'Check INR - more important than enzymes'],
      },
      // Renal patterns
      {
        id: 'prerenal-azotemia',
        name: 'Prerenal Azotemia',
        category: 'renal',
        description: 'Kidney hypoperfusion with preserved tubular function',
        requiredFindings: [
          { parameter: 'BUN', operator: '>', value: 20, unit: 'mg/dL', required: true },
          { parameter: 'Creatinine', operator: '>', value: 1.2, unit: 'mg/dL', required: true },
          { parameter: 'BUN/Creatinine Ratio', operator: '>', value: 20, required: true },
        ],
        supportingFindings: [
          { parameter: 'Urine Sodium', operator: '<', value: 20, unit: 'mEq/L', required: false },
          { parameter: 'Urine Osmolality', operator: '>', value: 500, unit: 'mOsm/kg', required: false },
        ],
        severity: 'moderate',
        differentialDiagnosis: ['Hypovolemia', 'Heart failure', 'Cirrhosis', 'NSAIDs', 'ACE inhibitors'],
        nextSteps: [
          { action: 'Assess volume status', urgency: 'immediate', rationale: 'Determine etiology' },
          { action: 'Volume challenge if hypovolemic', urgency: 'urgent', rationale: 'Restore perfusion' },
          { action: 'Check urine sodium, osmolality', urgency: 'urgent', rationale: 'Confirm prerenal physiology' },
        ],
        clinicalPearls: ['Reversible with restoration of perfusion', 'Urine sodium <20 confirms appropriate response'],
      },
      {
        id: 'acute-kidney-injury',
        name: 'Acute Kidney Injury',
        category: 'renal',
        description: 'Rapid decline in kidney function',
        requiredFindings: [
          { parameter: 'Creatinine', operator: '>=', value: 0.3, unit: 'mg/dL', required: true },
          { parameter: 'Creatinine Change Type', operator: '=', value: 'increase', required: true },
        ],
        supportingFindings: [
          { parameter: 'Potassium', operator: '>', value: 5, unit: 'mEq/L', required: false },
          { parameter: 'Bicarbonate', operator: '<', value: 22, unit: 'mEq/L', required: false },
        ],
        severity: 'critical',
        differentialDiagnosis: ['Prerenal (hypoperfusion)', 'Intrinsic (ATN, GN, AIN)', 'Postrenal (obstruction)'],
        nextSteps: [
          { action: 'Check potassium urgently', urgency: 'immediate', rationale: 'Hyperkalemia is life-threatening' },
          { action: 'Renal ultrasound', urgency: 'urgent', rationale: 'Rule out obstruction' },
          { action: 'Urine microscopy', urgency: 'urgent', rationale: 'Distinguish causes' },
        ],
        clinicalPearls: ['FeNa >2% suggests intrinsic cause', 'Muddy brown casts = ATN'],
      },
      // CBC patterns
      {
        id: 'iron-deficiency-anemia',
        name: 'Iron Deficiency Anemia',
        category: 'cbc',
        description: 'Microcytic, hypochromic anemia due to iron deficiency',
        requiredFindings: [
          { parameter: 'Hemoglobin', operator: '<', value: 12, unit: 'g/dL', required: true },
          { parameter: 'MCV', operator: '<', value: 80, unit: 'fL', required: true },
          { parameter: 'Ferritin', operator: '<', value: 30, unit: 'ng/mL', required: true },
        ],
        supportingFindings: [
          { parameter: 'Iron', operator: '<', value: 60, unit: 'mcg/dL', required: false },
          { parameter: 'TIBC', operator: '>', value: 400, unit: 'mcg/dL', required: false },
          { parameter: 'RDW', operator: '>', value: 15, unit: '%', required: false },
        ],
        severity: 'moderate',
        differentialDiagnosis: ['Chronic blood loss (GI, menorrhagia)', 'Malabsorption', 'Poor intake', 'Increased demand'],
        nextSteps: [
          { action: 'Fecal occult blood testing', urgency: 'urgent', rationale: 'Rule out GI bleeding' },
          { action: 'Iron supplementation', urgency: 'urgent', rationale: 'Replete stores' },
          { action: 'Colonoscopy if >50 or GI symptoms', urgency: 'routine', rationale: 'Evaluate for malignancy' },
        ],
        clinicalPearls: ['RDW elevated early (anisocytosis)', 'Ferritin <15 is diagnostic, 15-30 is possible'],
      },
      {
        id: 'b12-folate-deficiency',
        name: 'B12/Folate Deficiency',
        category: 'cbc',
        description: 'Macrocytic anemia with hypersegmented neutrophils',
        requiredFindings: [
          { parameter: 'Hemoglobin', operator: '<', value: 12, unit: 'g/dL', required: true },
          { parameter: 'MCV', operator: '>', value: 100, unit: 'fL', required: true },
        ],
        supportingFindings: [
          { parameter: 'B12', operator: '<', value: 200, unit: 'pg/mL', required: false },
          { parameter: 'Folate', operator: '<', value: 4, unit: 'ng/mL', required: false },
          { parameter: 'LDH', operator: '>', value: 250, unit: 'U/L', required: false },
        ],
        severity: 'moderate',
        differentialDiagnosis: ['B12 deficiency (pernicious anemia, malabsorption)', 'Folate deficiency', 'Liver disease', 'Hypothyroidism', 'Medications (methotrexate, phenytoin)'],
        nextSteps: [
          { action: 'Check B12 and folate levels', urgency: 'urgent', rationale: 'Determine deficiency type' },
          { action: 'Check methylmalonic acid if B12 borderline', urgency: 'routine', rationale: 'More sensitive than B12 alone' },
          { action: 'Intrinsic factor antibodies', urgency: 'routine', rationale: 'Diagnose pernicious anemia' },
        ],
        clinicalPearls: ['Neurologic deficits with B12 deficiency (posterior columns)', 'Folate deficiency causes anemia only'],
      },
    ];

    patterns.forEach(p => this.state.patterns.set(p.id, p));
  }

  // Analysis
  analyzeLabs(labs: Record<string, number | string>): PatternMatch[] {
    const matches: PatternMatch[] = [];

    this.state.patterns.forEach(pattern => {
      const matchedFindings: string[] = [];
      const missingFindings: string[] = [];
      let requiredMet = 0;
      let requiredTotal = 0;

      // Check all findings
      const allFindings = [...pattern.requiredFindings, ...pattern.supportingFindings];
      
      for (const finding of allFindings) {
        const labValue = labs[finding.parameter];
        if (labValue === undefined) {
          if (finding.required) {
            missingFindings.push(finding.parameter);
            requiredTotal++;
          }
          continue;
        }

        const matches = this.checkFinding(labValue, finding);
        
        if (matches) {
          matchedFindings.push(finding.parameter);
          if (finding.required) requiredMet++;
        } else if (finding.required) {
          missingFindings.push(finding.parameter);
        }
        
        if (finding.required) requiredTotal++;
      }

      // Calculate confidence
      const requiredConfidence = requiredTotal > 0 ? requiredMet / requiredTotal : 0;
      const totalFindings = pattern.requiredFindings.length + pattern.supportingFindings.length;
      const findingConfidence = matchedFindings.length / totalFindings;
      const confidence = (requiredConfidence * 0.7) + (findingConfidence * 0.3);

      // Only include if meets minimum threshold
      if (requiredMet >= pattern.requiredFindings.filter(f => f.required).length * 0.5) {
        matches.push({
          pattern,
          matchedFindings,
          missingFindings,
          confidence,
        });
      }
    });

    // Sort by confidence
    matches.sort((a, b) => b.confidence - a.confidence);
    
    this.state.recentMatches = matches.slice(0, 5);
    return matches;
  }

  private checkFinding(value: number | string, finding: LabFinding): boolean {
    const numValue = typeof value === 'string' ? parseFloat(value) : value;
    if (isNaN(numValue)) return false;

    const threshold = typeof finding.value === 'string' ? parseFloat(finding.value) : finding.value;

    switch (finding.operator) {
      case '>': return numValue > threshold;
      case '<': return numValue < threshold;
      case '=': return numValue === threshold;
      case '>=': return numValue >= threshold;
      case '<=': return numValue <= threshold;
      default: return false;
    }
  }

  getPattern(id: string): LabPattern | undefined {
    return this.state.patterns.get(id);
  }

  getPatternsByCategory(category: string): LabPattern[] {
    return Array.from(this.state.patterns.values())
      .filter(p => p.category === category);
  }

  getAllPatterns(): LabPattern[] {
    return Array.from(this.state.patterns.values());
  }

  getRecentMatches(): PatternMatch[] {
    return this.state.recentMatches;
  }

  getState(): AbnormalPatternsState {
    return { ...this.state };
  }

  subscribe(listener: () => void): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private notify() {
    this.listeners.forEach(l => l());
  }
}

export const abnormalPatternsStore = new AbnormalPatternsStore();
export type { AbnormalPatternsState };
