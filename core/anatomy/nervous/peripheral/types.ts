/**
 * Peripheral Nervous System Type Definitions
 * 
 * Comprehensive types for cranial nerves, spinal nerves,
 * autonomic nervous system, and peripheral neuropathies.
 */

/**
 * Cranial nerve number
 */
export type CranialNerveNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

/**
 * Cranial nerve functional type
 */
export type CranialNerveType = 'sensory' | 'motor' | 'mixed';

/**
 * Cranial nerve nuclei location
 */
export type CNBrainstemLocation = 
  | 'telencephalon'
  | 'diencephalon'
  | 'midbrain'
  | 'pons'
  | 'medulla'
  | 'spinal-cord';

/**
 * Complete cranial nerve definition
 */
export interface CranialNerve {
  id: string;
  number: CranialNerveNumber;
  name: string;
  latinName: string;
  abbreviation: string;
  type: CranialNerveType;
  brainstemLocation: CNBrainstemLocation;
  nuclei: string[];
  exitForamen: string;
  
  // Functions
  sensoryFunction?: string;
  motorFunction?: string;
  parasympatheticFunction?: string;
  specialSenses?: string[];
  
  // Detailed function breakdown
  somaticMotor?: {
    muscles: string[];
    description: string;
  };
  visceralMotor?: {
    targets: string[];
    description: string;
  };
  somaticSensory?: {
    distribution: string;
    modalities: string[];
  };
  visceralSensory?: {
    targets: string[];
  };
  specialSensory?: {
    modality: string;
    description: string;
  };
  
  // Explanations at different levels
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
  };
  
  // Clinical information
  keyFacts: string[];
  clinicalTests: ClinicalTest[];
  commonPathologies: CranialNervePathology[];
  
  // Related structures
  relatedStructures?: string[];
  relatedConditions?: string[];
}

/**
 * Clinical test for a cranial nerve
 */
export interface ClinicalTest {
  name: string;
  procedure: string;
  normalFinding: string;
  abnormalFinding: string;
  interpretation: string;
}

/**
 * Cranial nerve pathology
 */
export interface CranialNervePathology {
  name: string;
  description: string;
  causes: string[];
  symptoms: string[];
  physicalFindings: string[];
  diagnosticTests: string[];
  treatment?: string[];
}

/**
 * Spinal nerve
 */
export interface SpinalNerve {
  id: string;
  level: string; // C1-T1, etc.
  name: string;
  ventralRoot: string[]; // Motor functions
  dorsalRoot: string[]; // Sensory distributions
  rami: {
    dorsal?: string[];
    ventral?: string[];
    communicating?: string[];
  };
  dermatomes: string;
  myotomes: string;
  reflexes?: string[];
  clinicalSignificance: string[];
  commonPathologies: string[];
}

/**
 * Nerve plexus
 */
export interface NervePlexus {
  id: string;
  name: string;
  location: string;
  spinalLevels: string[];
  terminalBranches: TerminalBranch[];
  clinicalSignificance: string[];
  commonInjuries: PlexusInjury[];
}

/**
 * Terminal branch of a plexus
 */
export interface TerminalBranch {
  name: string;
  origin: string;
  course: string;
  motor: string;
  sensory: string;
  clinicalTests: string[];
}

/**
 * Plexus injury pattern
 */
export interface PlexusInjury {
  name: string;
  description: string;
  affectedNerves: string[];
  mechanism: string;
  symptoms: string[];
  commonCauses: string[];
}

/**
 * Autonomic nervous system division
 */
export type AutonomicDivision = 'sympathetic' | 'parasympathetic' | 'enteric';

/**
 * Autonomic ganglion
 */
export interface AutonomicGanglion {
  id: string;
  name: string;
  division: AutonomicDivision;
  location: string;
  preganglionicOrigin: string;
  postganglionicTargets: string[];
  neurotransmitters: {
    preganglionic: string;
    postganglionic: string;
  };
  receptors: string[];
  function: string;
  clinicalSignificance: string[];
}

/**
 * Autonomic pathway
 */
export interface AutonomicPathway {
  id: string;
  name: string;
  division: AutonomicDivision;
  origin: string;
  preganglionic: {
    neurotransmitter: string;
    receptor: string;
    course: string;
  };
  ganglion: string;
  postganglionic: {
    neurotransmitter: string;
    receptor: string;
    course: string;
  };
  target: {
    organ: string;
    effect: string;
  };
  clinicalRelevance: string[];
}

/**
 * Peripheral nerve (named nerve)
 */
export interface PeripheralNerve {
  id: string;
  name: string;
  latinName?: string;
  origin: string;
  course: string;
  motor?: {
    muscles: string[];
    actions: string[];
  };
  sensory?: {
    distribution: string;
    modalities: string[];
  };
  entrapmentSites: EntrapmentSite[];
  clinicalTests: string[];
  commonPathologies: string[];
}

/**
 * Nerve entrapment site
 */
export interface EntrapmentSite {
  name: string;
  location: string;
  mechanism: string;
  symptoms: string[];
  provocativeTests: string[];
  riskFactors: string[];
}

/**
 * Dermatome
 */
export interface Dermatome {
  level: string;
  landmark: string;
  distribution: string;
  keySensoryPoint: string;
  clinicalSignificance: string[];
}

/**
 * Myotome
 */
export interface Myotome {
  level: string;
  muscleGroup: string;
  action: string;
  test: string;
  clinicalSignificance: string[];
}

/**
 * Reflex arc
 */
export interface ReflexArc {
  name: string;
  afferentNerve: string;
  spinalLevel: string;
  center: string;
  efferentNerve: string;
  effector: string;
  normalResponse: string;
  abnormalFindings: string[];
  clinicalSignificance: string[];
}

/**
 * Peripheral neuropathy pattern
 */
export interface NeuropathyPattern {
  id: string;
  name: string;
  description: string;
  pattern: 'mononeuropathy' | 'mononeuropathy-multiplex' | 'polyneuropathy' | 'radiculopathy' | 'plexopathy';
  distribution: string;
  etiologies: string[];
  clinicalFeatures: string[];
  diagnosticApproach: string[];
  treatments?: string[];
}

/**
 * PNS Statistics
 */
export interface PNSStatistics {
  totalCranialNerves: number;
  totalSpinalNerves: number;
  cervicalSpinalNerves: number;
  thoracicSpinalNerves: number;
  lumbarSpinalNerves: number;
  sacralSpinalNerves: number;
  coccygealSpinalNerves: number;
  estimatedPeripheralNerveLength: string;
}
