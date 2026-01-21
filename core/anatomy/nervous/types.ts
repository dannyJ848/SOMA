/**
 * Nervous System Type Definitions
 *
 * Comprehensive types for CNS, PNS, autonomic nervous system,
 * brain regions, spinal cord, and peripheral nerves.
 */

/**
 * Nervous system division
 */
export type NervousSystemDivision = 'central' | 'peripheral';

/**
 * CNS region
 */
export type CNSRegion =
  | 'cerebrum'
  | 'diencephalon'
  | 'brainstem'
  | 'cerebellum'
  | 'spinal-cord';

/**
 * Cerebral lobe
 */
export type CerebralLobe = 'frontal' | 'parietal' | 'temporal' | 'occipital' | 'insular' | 'limbic';

/**
 * Brainstem region
 */
export type BrainstemRegion = 'midbrain' | 'pons' | 'medulla';

/**
 * Spinal cord region
 */
export type SpinalCordRegion = 'cervical' | 'thoracic' | 'lumbar' | 'sacral' | 'coccygeal';

/**
 * Peripheral nerve type
 */
export type PeripheralNerveType = 'cranial' | 'spinal' | 'autonomic';

/**
 * Nerve fiber type
 */
export type NerveFiberType = 'sensory' | 'motor' | 'mixed' | 'autonomic';

/**
 * Autonomic division
 */
export type AutonomicDivision = 'sympathetic' | 'parasympathetic' | 'enteric';

/**
 * Neurotransmitter
 */
export interface Neurotransmitter {
  name: string;
  type: 'excitatory' | 'inhibitory' | 'modulatory';
  primarySite?: string;
  function?: string;
  receptors?: string[];
  clinicalNote?: string;
}

/**
 * Brain structure/region
 */
export interface BrainStructure {
  id: string;
  name: string;
  latinName?: string;
  fmaId?: string;
  meshId?: string;
  region: CNSRegion;
  lobe?: CerebralLobe;
  location: string;
  function: string;
  brodmannAreas?: number[];
  connections?: string[];
  bloodSupply?: string[];
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
  keyFacts: string[];
  pathologies?: NervousPathology[];
  relatedStructures?: string[];
}

/**
 * Spinal cord segment/structure
 */
export interface SpinalCordStructure {
  id: string;
  name: string;
  latinName?: string;
  fmaId?: string;
  region: SpinalCordRegion;
  levelRange?: string;
  location: string;
  function: string;
  tracts?: SpinalTract[];
  bloodSupply?: string[];
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
  keyFacts: string[];
  pathologies?: NervousPathology[];
  relatedStructures?: string[];
}

/**
 * Spinal tract
 */
export interface SpinalTract {
  name: string;
  type: 'ascending' | 'descending';
  function: string;
  origin?: string;
  termination?: string;
  decussation?: string;
}

/**
 * Cranial nerve
 */
export interface CranialNerve {
  id: string;
  number: number;
  name: string;
  latinName?: string;
  fmaId?: string;
  fiberType: NerveFiberType;
  nuclei: string[];
  foramina: string[];
  function: string;
  distribution: string;
  motorFunction?: string;
  sensoryFunction?: string;
  parasympatheticFunction?: string;
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
  keyFacts: string[];
  clinicalTests?: string[];
  pathologies?: NervousPathology[];
  relatedStructures?: string[];
}

/**
 * Peripheral nerve (spinal)
 */
export interface PeripheralNerve {
  id: string;
  name: string;
  latinName?: string;
  fmaId?: string;
  origin: string;
  roots?: string[];
  type: NerveFiberType;
  musclesInnervated?: string[];
  sensoryDistribution?: string;
  motorFunction?: string;
  course?: string;
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
  keyFacts: string[];
  pathologies?: NervousPathology[];
  relatedStructures?: string[];
}

/**
 * Autonomic ganglion
 */
export interface AutonomicGanglion {
  id: string;
  name: string;
  latinName?: string;
  division: AutonomicDivision;
  location: string;
  preganglionicSource: string;
  postganglionicTargets: string[];
  neurotransmitters: {
    preganglionic: string;
    postganglionic: string;
  };
  function: string;
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
  keyFacts: string[];
}

/**
 * Nervous system pathology
 */
export interface NervousPathology {
  name: string;
  description: string;
  symptoms?: string[];
  causes?: string[];
  relevantImaging?: string[];
  relevantTests?: string[];
}

/**
 * Reflex arc
 */
export interface ReflexArc {
  name: string;
  type: 'stretch' | 'withdrawal' | 'autonomic' | 'superficial';
  afferentNerve: string;
  center: string;
  efferentNerve: string;
  effector: string;
  spinalLevel: string;
  clinicalNote?: string;
}

/**
 * Dermatome
 */
export interface Dermatome {
  level: string;
  landmark: string;
  region: string;
}

/**
 * Nervous system statistics
 */
export interface NervousStatistics {
  totalBrainStructures: number;
  cranialNerves: number;
  spinalCordSegments: number;
  peripheralNerves: number;
  estimatedNeurons: string;
}
