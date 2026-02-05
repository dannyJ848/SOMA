/**
 * Brain Subsystem Types
 * Deep neuroanatomy and functional systems
 */

export type BrainRegion = 
  | 'cerebrum'
  | 'cerebellum'
  | 'brainstem'
  | 'diencephalon'
  | 'limbic-system'
  | 'basal-ganglia';

export type CerebralLobe = 
  | 'frontal'
  | 'parietal'
  | 'temporal'
  | 'occipital'
  | 'insula';

export interface BrainRegionInfo {
  id: string;
  name: string;
  region: BrainRegion;
  lobe?: CerebralLobe;
  functions: string[];
  bloodSupply: string[];
  clinicalSignificance: ClinicalSignificance[];
  connections: string[];
  imagingAppearance: ImagingAppearance;
}

export interface ClinicalSignificance {
  condition: string;
  symptoms: string[];
  affectedFunctions: string[];
}

export interface ImagingAppearance {
  ct: string;
  mriT1: string;
  mriT2: string;
  fmri?: string;
}

export interface FunctionalSystem {
  id: string;
  name: string;
  primaryRegion: string;
  networkComponents: string[];
  function: string;
  clinicalTests: string[];
}

export interface NeurotransmitterSystem {
  name: string;
  pathways: string[];
  receptors: string[];
  functions: string[];
  clinicalRelevance: string[];
  drugTargets: string[];
}

export interface BrainState {
  regions: Map<string, BrainRegionInfo>;
  functionalSystems: Map<string, FunctionalSystem>;
  neurotransmitterSystems: Map<string, NeurotransmitterSystem>;
  selectedRegion: string | null;
  activeSystem: string | null;
}

export interface BrainQuery {
  regionId?: string;
  function?: string;
  clinicalCondition?: string;
  neurotransmitter?: string;
}
