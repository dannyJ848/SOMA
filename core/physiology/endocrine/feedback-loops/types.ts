/**
 * Endocrine Feedback Loops Type Definitions
 * 
 * Comprehensive types for hormone axes, feedback mechanisms,
 * and endocrine disorders.
 */

/**
 * Hormone axis type
 */
export type HormoneAxisType = 
  | 'hypothalamic-pituitary-adrenal'
  | 'hypothalamic-pituitary-thyroid'
  | 'hypothalamic-pituitary-gonadal'
  | 'hypothalamic-pituitary-growth'
  | 'renin-angiotensin-aldosterone'
  | 'calcium-parathyroid'
  | 'glucose-insulin';

/**
 * Feedback type
 */
export type FeedbackType = 'negative' | 'positive' | 'ultrashort' | 'short' | 'long';

/**
 * Complete hormone axis
 */
export interface HormoneAxis {
  id: string;
  name: string;
  abbreviation: string;
  type: HormoneAxisType;
  
  // Hierarchy
  levels: AxisLevel[];
  
  // Feedback mechanisms
  feedback: FeedbackLoop[];
  
  // Physiological roles
  functions: string[];
  
  // Regulation factors
  regulation: {
    stimulators: string[];
    inhibitors: string[];
    circadian?: string;
    seasonal?: boolean;
  };
  
  // Clinical testing
  tests: HormoneTest[];
  
  // Disorders
  hyperfunction: EndocrineDisorder;
  hypofunction: EndocrineDisorder;
  
  // Explanations
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
  };
}

/**
 * Axis level (hypothalamus → pituitary → target organ)
 */
export interface AxisLevel {
  order: number;
  name: string;
  organ: string;
  hormone: string;
  target: string;
  effects: string[];
  control: string;
  clinicalMarker: string;
}

/**
 * Feedback loop
 */
export interface FeedbackLoop {
  type: FeedbackType;
  description: string;
  mechanism: string;
  sensors: string[];
  threshold: string;
  response: string;
  clinicalRelevance: string[];
}

/**
 * Hormone test
 */
export interface HormoneTest {
  name: string;
  hormone: string;
  sampleType: string;
  normalRange: string;
  timing: string;
  interpretation: {
    high: string;
    low: string;
    normal: string;
  };
  dynamicTests?: DynamicTest[];
}

/**
 * Dynamic hormone test
 */
export interface DynamicTest {
  name: string;
  stimulus: string;
  expectedResponse: string;
  abnormalResponse: string;
  clinicalUse: string;
}

/**
 * Endocrine disorder
 */
export interface EndocrineDisorder {
  name: string;
  definition: string;
  causes: string[];
  symptoms: string[];
  signs: string[];
  laboratoryFindings: { [key: string]: string };
  treatment: string[];
  complications: string[];
}

/**
 * Hormone receptor
 */
export interface HormoneReceptor {
  hormone: string;
  receptorName: string;
  location: string;
  type: string;
  mechanism: string;
  secondMessengers?: string[];
  clinicalSignificance: string[];
}

/**
 * Signal transduction pathway
 */
export interface SignalTransduction {
  id: string;
  hormone: string;
  receptorType: string;
  mechanism: string;
  steps: string[];
  secondMessengers: string[];
  cellularResponse: string[];
  clinicalDrugs: string[];
}

/**
 * Tropic vs non-tropic hormones
 */
export interface TropicHormone {
  hormone: string;
  target: string;
  effect: string;
  upstreamRegulation: string[];
  clinicalMarker: boolean;
}
