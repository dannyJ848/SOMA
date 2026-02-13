/**
 * Gastrointestinal Physiology Type Definitions
 *
 * Comprehensive types for GI tract function including digestion,
 * absorption, motility, liver, pancreas, and gut-brain axis.
 */

// ============================================================================
// BASE TYPES
// ============================================================================

/**
 * Multi-level explanation structure for patient education
 */
export interface MultiLevelExplanation {
  level1: string; // 8th grade - simple analogies
  level2: string; // High school - basic terminology
  level3: string; // College - full terminology
  level4: string; // Graduate - detailed mechanisms
  level5: string; // MD/Professional - clinical correlations
}

/**
 * GI tract region
 */
export type GIRegion =
  | 'oral-cavity'
  | 'pharynx'
  | 'esophagus'
  | 'stomach'
  | 'duodenum'
  | 'jejunum'
  | 'ileum'
  | 'cecum'
  | 'ascending-colon'
  | 'transverse-colon'
  | 'descending-colon'
  | 'sigmoid-colon'
  | 'rectum'
  | 'anus';

/**
 * Cell type in GI tract
 */
export type GICellType =
  | 'enterocyte'
  | 'goblet-cell'
  | 'paneth-cell'
  | 'enteroendocrine-cell'
  | 'parietal-cell'
  | 'chief-cell'
  | 'mucous-neck-cell'
  | 'g-cell'
  | 'd-cell'
  | 'ecl-cell'
  | 'hepatocyte'
  | 'kupffer-cell'
  | 'stellate-cell'
  | 'cholangiocyte'
  | 'acinar-cell'
  | 'ductal-cell'
  | 'alpha-cell'
  | 'beta-cell'
  | 'delta-cell'
  | 'pp-cell';

// ============================================================================
// DIGESTION TYPES
// ============================================================================

/**
 * Digestion type
 */
export type DigestionType = 'mechanical' | 'chemical';

/**
 * Digestive enzyme class
 */
export type DigestiveEnzymeClass =
  | 'protease'
  | 'lipase'
  | 'amylase'
  | 'nuclease'
  | 'disaccharidase';

/**
 * Digestive enzyme
 */
export interface DigestiveEnzyme {
  id: string;
  name: string;
  class: DigestiveEnzymeClass;
  source: string;
  secretionLocation: GIRegion;
  activationSite?: GIRegion;
  substrate: string;
  products: string[];
  optimalPH: string;
  activator?: string;
  inhibitor?: string;
  proenzyme?: string;
  clinicalNote?: string;
  explanations: MultiLevelExplanation;
}

/**
 * Digestion phase
 */
export interface DigestionPhase {
  id: string;
  name: string;
  type: DigestionType;
  location: GIRegion;
  duration: string;
  description: string;
  processes: string[];
  enzymes?: string[];
  hormones?: string[];
  clinicalNote?: string;
  explanations: MultiLevelExplanation;
}

/**
 * Macronutrient digestion pathway
 */
export interface MacronutrientDigestion {
  id: string;
  nutrient: 'carbohydrate' | 'protein' | 'lipid';
  startingForm: string;
  endProducts: string[];
  steps: DigestionStep[];
  absorptionSite: GIRegion;
  clinicalConditions: string[];
  explanations: MultiLevelExplanation;
}

/**
 * Digestion step
 */
export interface DigestionStep {
  stepNumber: number;
  location: GIRegion;
  enzyme?: string;
  process: string;
  substrate: string;
  products: string[];
  mechanism: string;
}

// ============================================================================
// STOMACH PHYSIOLOGY TYPES
// ============================================================================

/**
 * Gastric cell type
 */
export interface GastricCellType {
  id: string;
  name: string;
  type: GICellType;
  location: string;
  secretion: string[];
  function: string;
  regulation: string[];
  clinicalNote?: string;
  explanations: MultiLevelExplanation;
}

/**
 * Gastric acid secretion phase
 */
export type GastricSecretionPhase = 'cephalic' | 'gastric' | 'intestinal';

/**
 * Gastric acid secretion step
 */
export interface GastricAcidSecretionStep {
  stepNumber: number;
  phase: GastricSecretionPhase;
  trigger: string;
  mediator: string;
  targetCell: string;
  effect: string;
  mechanism: string;
}

/**
 * Parietal cell mechanism
 */
export interface ParietalCellMechanism {
  id: string;
  name: string;
  steps: ParietalCellStep[];
  transporters: string[];
  energySource: string;
  pH: string;
  drugTargets: DrugTarget[];
  explanations: MultiLevelExplanation;
}

/**
 * Parietal cell step
 */
export interface ParietalCellStep {
  stepNumber: number;
  location: 'cytoplasm' | 'apical' | 'basolateral' | 'canaliculus';
  process: string;
  molecules: string[];
  transporter?: string;
}

/**
 * Drug target
 */
export interface DrugTarget {
  target: string;
  drugClass: string;
  examples: string[];
  mechanism: string;
}

/**
 * Gastric mucosal defense mechanism
 */
export interface MucosalDefense {
  id: string;
  name: string;
  component: 'mucus' | 'bicarbonate' | 'blood-flow' | 'prostaglandins' | 'epithelial';
  mechanism: string;
  factors: string[];
  impairment: string[];
  explanations: MultiLevelExplanation;
}

/**
 * Peptic ulcer type
 */
export type UlcerType = 'gastric' | 'duodenal';

/**
 * Peptic ulcer pathophysiology
 */
export interface PepticUlcer {
  id: string;
  type: UlcerType;
  location: string;
  etiology: UlcerEtiology[];
  pathophysiology: string;
  riskFactors: string[];
  clinicalFeatures: string[];
  complications: string[];
  diagnosis: string[];
  treatment: string[];
  explanations: MultiLevelExplanation;
}

/**
 * Ulcer etiology
 */
export interface UlcerEtiology {
  cause: string;
  percentage: string;
  mechanism: string;
}

// ============================================================================
// SMALL INTESTINE TYPES
// ============================================================================

/**
 * Intestinal villi structure
 */
export interface VilliStructure {
  id: string;
  name: string;
  component: string;
  location: string;
  function: string;
  cellTypes: string[];
  specializations: string[];
  surfaceArea: string;
  clinicalNote?: string;
  explanations: MultiLevelExplanation;
}

/**
 * Nutrient transporter
 */
export interface NutrientTransporter {
  id: string;
  name: string;
  gene?: string;
  membrane: 'apical' | 'basolateral';
  substrate: string[];
  mechanism: 'passive' | 'facilitated' | 'active' | 'secondary-active';
  cotransport?: string;
  tissues: string[];
  regulation?: string[];
  clinicalNote?: string;
  explanations: MultiLevelExplanation;
}

/**
 * Nutrient absorption pathway
 */
export interface NutrientAbsorption {
  id: string;
  nutrient: string;
  category: 'carbohydrate' | 'protein' | 'lipid' | 'vitamin' | 'mineral' | 'water';
  absorptionSite: GIRegion[];
  mechanism: string;
  transporters: string[];
  steps: AbsorptionStep[];
  factors: {
    enhancing: string[];
    inhibiting: string[];
  };
  clinicalConditions: string[];
  explanations: MultiLevelExplanation;
}

/**
 * Absorption step
 */
export interface AbsorptionStep {
  stepNumber: number;
  location: string;
  process: string;
  molecules: string[];
  transporter?: string;
  energyRequired: boolean;
}

/**
 * Brush border enzyme
 */
export interface BrushBorderEnzyme {
  id: string;
  name: string;
  substrate: string;
  products: string[];
  location: string;
  deficiencyCondition?: string;
  explanations: MultiLevelExplanation;
}

// ============================================================================
// LARGE INTESTINE TYPES
// ============================================================================

/**
 * Colonic function
 */
export interface ColonicFunction {
  id: string;
  name: string;
  region: GIRegion[];
  process: string;
  mechanism: string;
  regulation: string[];
  clinicalRelevance: string;
  explanations: MultiLevelExplanation;
}

/**
 * Water absorption mechanism
 */
export interface WaterAbsorption {
  id: string;
  name: string;
  region: GIRegion;
  dailyVolume: string;
  mechanism: string;
  drivers: string[];
  transporters: string[];
  disorders: string[];
  explanations: MultiLevelExplanation;
}

/**
 * Microbiome component
 */
export interface MicrobiomeComponent {
  id: string;
  category: 'beneficial' | 'opportunistic' | 'pathogenic';
  phylum: string;
  commonGenera: string[];
  location: GIRegion[];
  functions: string[];
  metabolites: string[];
  dietaryInfluence: string[];
  clinicalRelevance: string[];
  explanations: MultiLevelExplanation;
}

/**
 * Short-chain fatty acid
 */
export interface ShortChainFattyAcid {
  id: string;
  name: string;
  chemicalFormula: string;
  source: string;
  production: string;
  absorption: string;
  functions: string[];
  clinicalNote?: string;
  explanations: MultiLevelExplanation;
}

// ============================================================================
// LIVER FUNCTION TYPES
// ============================================================================

/**
 * Liver function category
 */
export type LiverFunctionCategory =
  | 'metabolism'
  | 'synthesis'
  | 'detoxification'
  | 'bile-production'
  | 'storage'
  | 'immune';

/**
 * Liver function
 */
export interface LiverFunction {
  id: string;
  name: string;
  category: LiverFunctionCategory;
  description: string;
  cellType: GICellType;
  substrates?: string[];
  products?: string[];
  regulation: string[];
  clinicalMarkers?: string[];
  disorders: string[];
  explanations: MultiLevelExplanation;
}

/**
 * Bile component
 */
export interface BileComponent {
  id: string;
  name: string;
  concentration: string;
  function: string;
  source: string;
  fateAfterSecretion: string;
  clinicalNote?: string;
  explanations: MultiLevelExplanation;
}

/**
 * Enterohepatic circulation step
 */
export interface EnterohepaticcirculationStep {
  stepNumber: number;
  location: string;
  process: string;
  molecules: string[];
  transporter?: string;
  efficiency?: string;
}

/**
 * Detoxification phase
 */
export interface DetoxificationPhase {
  id: string;
  phase: 'phase-I' | 'phase-II' | 'phase-III';
  name: string;
  location: string;
  enzymes: string[];
  reactions: string[];
  substrates: string[];
  products: string[];
  clinicalNote?: string;
  explanations: MultiLevelExplanation;
}

/**
 * Hepatic protein synthesis
 */
export interface HepaticProtein {
  id: string;
  name: string;
  function: string;
  halfLife?: string;
  clinicalUse?: string;
  deficiencyEffect?: string;
  explanations: MultiLevelExplanation;
}

// ============================================================================
// PANCREATIC FUNCTION TYPES
// ============================================================================

/**
 * Pancreatic function type
 */
export type PancreaticFunctionType = 'exocrine' | 'endocrine';

/**
 * Pancreatic enzyme
 */
export interface PancreaticEnzyme {
  id: string;
  name: string;
  proenzyme?: string;
  class: DigestiveEnzymeClass;
  substrate: string;
  products: string[];
  activator: string;
  optimalPH: string;
  secretion: string;
  regulation: string[];
  clinicalNote?: string;
  explanations: MultiLevelExplanation;
}

/**
 * Pancreatic secretion regulation
 */
export interface PancreaticSecretionRegulation {
  id: string;
  phase: 'cephalic' | 'gastric' | 'intestinal';
  stimulus: string;
  mediator: string;
  targetCell: string;
  effect: string;
  mechanism: string;
}

/**
 * Islet cell type
 */
export interface IsletCell {
  id: string;
  name: string;
  type: GICellType;
  percentage: string;
  location: string;
  hormone: string;
  stimuli: string[];
  inhibitors: string[];
  targetTissues: string[];
  actions: string[];
  clinicalNote?: string;
  explanations: MultiLevelExplanation;
}

/**
 * Glucose regulation pathway
 */
export interface GlucoseRegulationPathway {
  id: string;
  name: string;
  state: 'fed' | 'fasted' | 'stress';
  hormones: string[];
  targetTissues: string[];
  metabolicEffects: string[];
  netOutcome: string;
  explanations: MultiLevelExplanation;
}

// ============================================================================
// GI MOTILITY TYPES
// ============================================================================

/**
 * Motility pattern type
 */
export type MotilityPatternType =
  | 'peristalsis'
  | 'segmentation'
  | 'haustration'
  | 'mass-movement'
  | 'migrating-motor-complex'
  | 'receptive-relaxation'
  | 'retropulsion';

/**
 * Motility pattern
 */
export interface MotilityPattern {
  id: string;
  name: string;
  type: MotilityPatternType;
  region: GIRegion[];
  frequency?: string;
  description: string;
  purpose: string;
  neuralControl: string[];
  hormonalControl: string[];
  clinicalNote?: string;
  explanations: MultiLevelExplanation;
}

/**
 * GI smooth muscle layer
 */
export interface SmoothMuscleLayer {
  id: string;
  name: string;
  orientation: 'circular' | 'longitudinal';
  location: string;
  function: string;
  innervation: string[];
  pacemakerCells?: string;
  explanations: MultiLevelExplanation;
}

/**
 * Gastric emptying factor
 */
export interface GastricEmptyingFactor {
  id: string;
  factor: string;
  effect: 'accelerates' | 'delays';
  mechanism: string;
  clinicalRelevance: string;
  explanations: MultiLevelExplanation;
}

/**
 * Transit time
 */
export interface TransitTime {
  id: string;
  region: GIRegion;
  normalRange: string;
  factors: string[];
  measurement: string;
  clinicalSignificance: string;
  explanations: MultiLevelExplanation;
}

/**
 * Sphincter
 */
export interface GISphincter {
  id: string;
  name: string;
  location: string;
  type: 'anatomic' | 'physiologic';
  tonicPressure: string;
  relaxationStimuli: string[];
  contractionStimuli: string[];
  dysfunction: string[];
  explanations: MultiLevelExplanation;
}

// ============================================================================
// GUT-BRAIN AXIS TYPES
// ============================================================================

/**
 * Enteric nervous system component
 */
export interface EntericNervousSystem {
  id: string;
  name: string;
  plexus: 'myenteric' | 'submucosal';
  location: string;
  neurons: string[];
  neurotransmitters: string[];
  functions: string[];
  autonomy: string;
  connections: string[];
  explanations: MultiLevelExplanation;
}

/**
 * Gut-brain communication pathway
 */
export interface GutBrainPathway {
  id: string;
  name: string;
  direction: 'gut-to-brain' | 'brain-to-gut' | 'bidirectional';
  mechanism: 'neural' | 'hormonal' | 'immune' | 'microbial';
  components: string[];
  mediators: string[];
  functions: string[];
  clinicalRelevance: string[];
  explanations: MultiLevelExplanation;
}

/**
 * Stress response effect on GI
 */
export interface StressGIEffect {
  id: string;
  stressType: 'acute' | 'chronic';
  pathway: string;
  giEffect: string;
  mechanism: string;
  symptoms: string[];
  conditions: string[];
  management: string[];
  explanations: MultiLevelExplanation;
}

/**
 * Gut hormone
 */
export interface GutHormone {
  id: string;
  name: string;
  source: string;
  stimulus: string[];
  targets: string[];
  actions: string[];
  brainEffects?: string[];
  clinicalUse?: string;
  explanations: MultiLevelExplanation;
}

/**
 * Visceral sensation
 */
export interface VisceralSensation {
  id: string;
  name: string;
  sensoryType: 'mechanoreceptor' | 'chemoreceptor' | 'nociceptor' | 'thermoreceptor';
  location: string;
  afferentPathway: string;
  perception: string;
  modulation: string[];
  clinicalRelevance: string;
  explanations: MultiLevelExplanation;
}

// ============================================================================
// CLINICAL TYPES
// ============================================================================

/**
 * GI condition
 */
export interface GICondition {
  id: string;
  name: string;
  category: string;
  affectedRegion: GIRegion[];
  pathophysiology: string;
  riskFactors: string[];
  symptoms: string[];
  diagnosis: string[];
  treatment: string[];
  complications: string[];
  prognosis: string;
  explanations: MultiLevelExplanation;
}

/**
 * GI diagnostic test
 */
export interface GIDiagnosticTest {
  id: string;
  name: string;
  type: 'laboratory' | 'imaging' | 'endoscopy' | 'functional' | 'biopsy';
  indication: string[];
  procedure: string;
  normalValues?: string;
  interpretation: string;
  limitations: string[];
  explanations: MultiLevelExplanation;
}

/**
 * GI statistics
 */
export interface GIStatistics {
  dailyFoodIntake: string;
  dailyFluidIntake: string;
  giTractLength: string;
  surfaceArea: string;
  transitTimeTotal: string;
  dailySecretions: string;
  bacterialCount: string;
  dailyBileProduction: string;
}
