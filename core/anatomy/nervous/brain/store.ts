/**
 * Brain Subsystem Store
 * Manages deep neuroanatomy data and queries
 */

import type {
  BrainRegionInfo,
  FunctionalSystem,
  NeurotransmitterSystem,
  BrainState,
  BrainQuery,
} from './types';

class BrainStore {
  private state: BrainState = {
    regions: new Map(),
    functionalSystems: new Map(),
    neurotransmitterSystems: new Map(),
    selectedRegion: null,
    activeSystem: null,
  };

  private listeners: Set<() => void> = new Set();

  constructor() {
    this.initializeRegions();
    this.initializeFunctionalSystems();
    this.initializeNeurotransmitterSystems();
  }

  private initializeRegions() {
    const regions: BrainRegionInfo[] = [
      {
        id: 'frontal-lobe',
        name: 'Frontal Lobe',
        region: 'cerebrum',
        lobe: 'frontal',
        functions: ['Executive function', 'Motor control', 'Planning', 'Personality', 'Working memory'],
        bloodSupply: ['Anterior cerebral artery', 'Middle cerebral artery'],
        clinicalSignificance: [
          { condition: 'Frontal lobe syndrome', symptoms: ['Disinhibition', 'Apathy', 'Executive dysfunction'], affectedFunctions: ['Planning', 'Impulse control'] },
          { condition: 'Broca\'s aphasia', symptoms: ['Non-fluent speech', 'Preserved comprehension'], affectedFunctions: ['Speech production'] },
        ],
        connections: ['Basal ganglia', 'Thalamus', 'Brainstem'],
        imagingAppearance: {
          ct: 'Gray-white matter differentiation visible',
          mriT1: 'Gray matter darker than white matter',
          mriT2: 'Gray matter brighter than white matter',
          fmri: 'Activation during executive tasks',
        },
      },
      {
        id: 'temporal-lobe',
        name: 'Temporal Lobe',
        region: 'cerebrum',
        lobe: 'temporal',
        functions: ['Auditory processing', 'Memory formation', 'Language comprehension', 'Visual recognition'],
        bloodSupply: ['Middle cerebral artery', 'Posterior cerebral artery'],
        clinicalSignificance: [
          { condition: 'Wernicke\'s aphasia', symptoms: ['Fluent but nonsensical speech', 'Poor comprehension'], affectedFunctions: ['Language comprehension'] },
          { condition: 'Hippocampal sclerosis', symptoms: ['Memory deficits', 'Seizures'], affectedFunctions: ['Memory formation'] },
        ],
        connections: ['Hippocampus', 'Amygdala', 'Thalamus'],
        imagingAppearance: {
          ct: 'Medial temporal structures visible',
          mriT1: 'Hippocampus well-delineated',
          mriT2: 'Medial temporal lobe hyperintensity in pathology',
          fmri: 'Activation during memory tasks',
        },
      },
      {
        id: 'brainstem',
        name: 'Brainstem',
        region: 'brainstem',
        functions: ['Vital functions', 'Consciousness', 'Cranial nerve nuclei', 'Motor/sensory pathways'],
        bloodSupply: ['Vertebral arteries', 'Basilar artery'],
        clinicalSignificance: [
          { condition: 'Locked-in syndrome', symptoms: ['Paralysis of all muscles except eyes'], affectedFunctions: ['Motor control'] },
          { condition: 'Brainstem stroke', symptoms: ['Cranial nerve deficits', 'Ataxia'], affectedFunctions: ['Multiple cranial nerves'] },
        ],
        connections: ['Cerebrum', 'Cerebellum', 'Spinal cord'],
        imagingAppearance: {
          ct: 'Dense bone artifacts in posterior fossa',
          mriT1: 'Midbrain, pons, medulla distinct',
          mriT2: 'CSF bright around brainstem',
        },
      },
    ];

    regions.forEach(r => this.state.regions.set(r.id, r));
  }

  private initializeFunctionalSystems() {
    const systems: FunctionalSystem[] = [
      {
        id: 'default-mode-network',
        name: 'Default Mode Network',
        primaryRegion: 'Medial prefrontal cortex',
        networkComponents: ['Medial prefrontal cortex', 'Posterior cingulate', 'Angular gyrus', 'Hippocampus'],
        function: 'Self-referential thinking, memory, mind-wandering',
        clinicalTests: ['Resting-state fMRI', 'Task-negative activation'],
      },
      {
        id: 'motor-cortex',
        name: 'Primary Motor System',
        primaryRegion: 'Precentral gyrus',
        networkComponents: ['Motor cortex', 'Premotor cortex', 'Supplementary motor area', 'Basal ganglia'],
        function: 'Voluntary movement execution and planning',
        clinicalTests: ['Motor strength testing', 'Coordination tests', 'Reflexes'],
      },
      {
        id: 'limbic-system',
        name: 'Limbic System',
        primaryRegion: 'Hippocampus/Amygdala',
        networkComponents: ['Hippocampus', 'Amygdala', 'Hypothalamus', 'Cingulate gyrus'],
        function: 'Emotion, memory, motivation, olfaction',
        clinicalTests: ['Memory testing', 'Emotional response assessment'],
      },
    ];

    systems.forEach(s => this.state.functionalSystems.set(s.id, s));
  }

  private initializeNeurotransmitterSystems() {
    const systems: NeurotransmitterSystem[] = [
      {
        name: 'Dopaminergic',
        pathways: ['Nigrostriatal', 'Mesolimbic', 'Mesocortical', 'Tuberoinfundibular'],
        receptors: ['D1', 'D2', 'D3', 'D4', 'D5'],
        functions: ['Movement', 'Reward', 'Motivation', 'Prolactin inhibition'],
        clinicalRelevance: ['Parkinson\'s disease', 'Schizophrenia', 'Addiction', 'Hyperprolactinemia'],
        drugTargets: ['Levodopa', 'Antipsychotics', 'Dopamine agonists'],
      },
      {
        name: 'Cholinergic',
        pathways: ['Basal forebrain', 'Brainstem', 'Striatal interneurons'],
        receptors: ['Nicotinic', 'Muscarinic M1-M5'],
        functions: ['Learning', 'Memory', 'Attention', 'REM sleep'],
        clinicalRelevance: ['Alzheimer\'s disease', 'Myasthenia gravis', 'Anticholinergic toxicity'],
        drugTargets: ['Donepezil', 'Rivastigmine', 'Pyridostigmine'],
      },
      {
        name: 'Serotonergic',
        pathways: ['Raphe nuclei projections'],
        receptors: ['5-HT1A', '5-HT2A', '5-HT3', '5-HT4', '5-HT7'],
        functions: ['Mood regulation', 'Sleep', 'Appetite', 'Pain modulation'],
        clinicalRelevance: ['Depression', 'Anxiety', 'Migraine', 'IBS'],
        drugTargets: ['SSRIs', 'Triptans', 'Atypical antipsychotics'],
      },
    ];

    systems.forEach((s, i) => this.state.neurotransmitterSystems.set(`nt-${i}`, s));
  }

  // Queries
  getRegion(id: string): BrainRegionInfo | undefined {
    return this.state.regions.get(id);
  }

  getRegionsByFunction(functionName: string): BrainRegionInfo[] {
    return Array.from(this.state.regions.values())
      .filter(r => r.functions.some(f => f.toLowerCase().includes(functionName.toLowerCase())));
  }

  getFunctionalSystem(id: string): FunctionalSystem | undefined {
    return this.state.functionalSystems.get(id);
  }

  getAllRegions(): BrainRegionInfo[] {
    return Array.from(this.state.regions.values());
  }

  getNeurotransmitterSystem(name: string): NeurotransmitterSystem | undefined {
    return Array.from(this.state.neurotransmitterSystems.values())
      .find(s => s.name.toLowerCase() === name.toLowerCase());
  }

  query(query: BrainQuery): BrainRegionInfo[] {
    let results = this.getAllRegions();
    
    if (query.regionId) {
      const region = this.getRegion(query.regionId);
      return region ? [region] : [];
    }
    
    if (query.function) {
      results = results.filter(r => 
        r.functions.some(f => f.toLowerCase().includes(query.function!.toLowerCase()))
      );
    }
    
    if (query.clinicalCondition) {
      results = results.filter(r => 
        r.clinicalSignificance.some(c => 
          c.condition.toLowerCase().includes(query.clinicalCondition!.toLowerCase())
        )
      );
    }
    
    return results;
  }

  // State management
  selectRegion(id: string | null) {
    this.state.selectedRegion = id;
    this.notify();
  }

  setActiveSystem(id: string | null) {
    this.state.activeSystem = id;
    this.notify();
  }

  getState(): BrainState {
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

export const brainStore = new BrainStore();
export type { BrainState };
