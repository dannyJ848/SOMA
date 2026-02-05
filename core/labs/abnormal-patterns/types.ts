/**
 * Lab Abnormal Patterns Types
 * Pattern recognition for common lab abnormalities
 */

export type PatternCategory = 'electrolyte' | 'liver' | 'renal' | 'cbc' | 'metabolic' | 'inflammatory';
export type PatternSeverity = 'mild' | 'moderate' | 'severe' | 'critical';

export interface LabPattern {
  id: string;
  name: string;
  category: PatternCategory;
  description: string;
  requiredFindings: LabFinding[];
  supportingFindings: LabFinding[];
  severity: PatternSeverity;
  differentialDiagnosis: string[];
  nextSteps: NextStep[];
  clinicalPearls: string[];
}

export interface LabFinding {
  parameter: string;
  operator: '>' | '<' | '=' | '>=' | '<=';
  value: number | string;
  unit?: string;
  required: boolean;
}

export interface NextStep {
  action: string;
  urgency: 'immediate' | 'urgent' | 'routine';
  rationale: string;
}

export interface PatternMatch {
  pattern: LabPattern;
  matchedFindings: string[];
  missingFindings: string[];
  confidence: number;
}

export interface AbnormalPatternsState {
  patterns: Map<string, LabPattern>;
  recentMatches: PatternMatch[];
}
