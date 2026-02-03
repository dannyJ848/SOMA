/**
 * Basal Ganglia - Comprehensive Anatomy Content
 *
 * Complete coverage of basal ganglia nuclei, circuits, and clinical correlations.
 */

import { EducationalContent } from '../../types';

export const basalGangliaContent: EducationalContent = {
  id: 'anatomy-basal-ganglia',
  type: 'structure',
  name: 'Basal Ganglia',
  alternateNames: ['Basal nuclei', 'Striatum', 'Corpus striatum'],
  fmaId: 'FMA:84013',

  levels: {
    1: {
      level: 1,
      summary: 'The basal ganglia are groups of brain cells deep inside your brain that help control your movements.',
      explanation: `The basal ganglia are like the brain's movement control center. They sit deep inside your brain and help you:

- **Start movements**: When you decide to pick up a cup, the basal ganglia help your brain start that movement
- **Smooth movements**: They make your movements smooth instead of jerky
- **Stop unwanted movements**: They help prevent movements you don't want to make
- **Learn habits**: Things like riding a bike become automatic because of the basal ganglia

When the basal ganglia don't work right, people can have too much movement (like shaking) or too little movement (like moving very slowly).`,
      keyTerms: [
        { term: 'basal', definition: 'At the base or bottom of something' },
        { term: 'ganglia', definition: 'Groups or clusters of nerve cells' },
        { term: 'movement', definition: 'The act of moving your body or body parts' },
      ],
      analogies: [
        'The basal ganglia are like a filter - they let the right movements through and stop the wrong ones.',
        'Think of them as the volume control for movements - they turn up wanted movements and turn down unwanted ones.',
      ],
    },
    2: {
      level: 2,
      summary: 'The basal ganglia are a group of subcortical nuclei including the caudate, putamen, and globus pallidus that regulate movement through connections with the cortex and thalamus.',
      explanation: `The basal ganglia are deep gray matter structures that form a circuit with the cortex and thalamus.

**Main Structures:**

**Striatum (Input)**
- *Caudate nucleus*: C-shaped structure along lateral ventricle
- *Putamen*: Lateral to globus pallidus
- Together they receive input from the cerebral cortex

**Globus Pallidus (Output)**
- *External segment (GPe)*: Part of indirect pathway
- *Internal segment (GPi)*: Main output nucleus
- Sends output to thalamus

**Related Structures:**
- *Subthalamic nucleus*: Regulates movement, excitatory
- *Substantia nigra*: Contains dopamine neurons
  - Pars compacta (SNc): Produces dopamine
  - Pars reticulata (SNr): Output nucleus like GPi

**Function:**
The basal ganglia don't directly cause movement. Instead, they:
1. Receive plans from cortex
2. Process through their circuits
3. Release or inhibit thalamus
4. Thalamus then activates or suppresses cortex

**Clinical Relevance:**
- Parkinson's disease: Loss of dopamine from SNc
- Huntington's disease: Degeneration of striatum`,
      keyTerms: [
        { term: 'striatum', definition: 'The input structure of basal ganglia, includes caudate and putamen' },
        { term: 'globus pallidus', definition: 'The pale globe; output structure of basal ganglia', pronunciation: 'GLOH-bus PAL-i-dus' },
        { term: 'substantia nigra', definition: 'The black substance; contains dopamine neurons', pronunciation: 'sub-STAN-sha NY-gra' },
        { term: 'dopamine', definition: 'A neurotransmitter important for movement and reward' },
      ],
    },
    3: {
      level: 3,
      summary: 'The basal ganglia process cortical input through direct and indirect pathways that have opposing effects on movement, modulated by dopamine from the substantia nigra.',
      explanation: `**Structural Components:**

**Striatum:**
- Caudate nucleus: Cognitive/limbic circuits
- Putamen: Motor circuits
- Nucleus accumbens: Reward/motivation (ventral striatum)
- Medium spiny neurons (MSNs): Main cell type (GABAergic)
  - D1 receptor MSNs → Direct pathway
  - D2 receptor MSNs → Indirect pathway

**Pallidal Complex:**
- GPe: Inhibits STN (indirect pathway)
- GPi: Final output, inhibits thalamus

**Midbrain:**
- SNc: Dopaminergic neurons (A9)
- SNr: GABAergic output (like GPi)

**Subthalamic Nucleus (STN):**
- Only excitatory (glutamate) nucleus in basal ganglia
- Key node in indirect pathway and hyperdirect pathway

**Classic Circuit Model:**

*Direct Pathway (Facilitates Movement):*
Cortex → Striatum (D1) → GPi → Thalamus → Cortex
- Inhibitory everywhere
- Net effect: Disinhibition of thalamus
- Dopamine excites D1 MSNs (facilitates)

*Indirect Pathway (Inhibits Movement):*
Cortex → Striatum (D2) → GPe → STN → GPi → Thalamus → Cortex
- Net effect: Increased inhibition of thalamus
- Dopamine inhibits D2 MSNs (reduces inhibition)

*Hyperdirect Pathway:*
Cortex → STN → GPi
- Fast, inhibitory brake on movement

**Dopamine Effects:**
- D1 activation: Facilitates direct pathway (Go)
- D2 activation: Inhibits indirect pathway (reduces No-Go)
- Net effect: Promotes movement initiation`,
      keyTerms: [
        { term: 'medium spiny neuron', definition: 'The principal GABAergic neuron of the striatum' },
        { term: 'direct pathway', definition: 'Basal ganglia circuit that facilitates movement' },
        { term: 'indirect pathway', definition: 'Basal ganglia circuit that inhibits movement' },
        { term: 'hyperdirect pathway', definition: 'Fast cortex-STN-GPi pathway that quickly stops movement' },
      ],
    },
    4: {
      level: 4,
      summary: 'The basal ganglia implement action selection through competitive dynamics between parallel cortico-basal ganglia-thalamocortical loops, with distinct motor, cognitive, and limbic circuits.',
      explanation: `**Parallel Circuits:**

Five functionally segregated loops:

1. **Motor Loop:**
   - Cortex: SMA, premotor, M1
   - Striatum: Putamen
   - Pallidum: Posterolateral GPi
   - Thalamus: VLo, VLm
   - Function: Movement selection and execution

2. **Oculomotor Loop:**
   - Cortex: FEF, supplementary eye fields
   - Striatum: Central caudate
   - Pallidum: Central GPi
   - Thalamus: VAmc, MDpl
   - Function: Saccadic eye movements

3. **Prefrontal/Cognitive Loop:**
   - Cortex: DLPFC
   - Striatum: Dorsolateral caudate
   - Pallidum: Lateral GPi/rostral SNr
   - Thalamus: VApc, MDpc
   - Function: Working memory, planning

4. **Orbitofrontal Loop:**
   - Cortex: Lateral OFC
   - Striatum: Ventromedial caudate
   - Pallidum: Medial GPi/rostral SNr
   - Thalamus: VAmc, MDmc
   - Function: Decision-making, reward evaluation

5. **Limbic/Anterior Cingulate Loop:**
   - Cortex: ACC, medial OFC
   - Striatum: Nucleus accumbens
   - Pallidum: Ventral pallidum
   - Thalamus: MD
   - Function: Motivation, emotion

**Computational Models:**

*Actor-Critic:*
- Striatum as actor (selects actions)
- Dopamine as critic (encodes prediction error)
- Temporal difference learning

*Go/No-Go Model:*
- D1 direct pathway: Go signal
- D2 indirect pathway: No-Go signal
- Competition selects action

**Physiology:**
- Striatal neurons: Low spontaneous firing, sparse coding
- Pallidal neurons: High tonic firing (~80 Hz)
- Action = Pause in pallidal firing (release thalamus)

**Pathophysiology:**

*Hypokinetic (Parkinson's):*
- Lost dopamine → Reduced D1, increased D2 activity
- Increased GPi output
- Excessive thalamic inhibition
- Bradykinesia, rigidity

*Hyperkinetic (Huntington's, Hemiballismus):*
- Lost striatal neurons (Huntington's)
- Lost STN (hemiballismus)
- Reduced GPi output
- Insufficient movement suppression
- Chorea, ballismus`,
      keyTerms: [
        { term: 'actor-critic model', definition: 'Computational framework where striatum selects actions and dopamine provides error signal' },
        { term: 'temporal difference learning', definition: 'Learning algorithm based on prediction errors, implemented by dopamine' },
        { term: 'hemiballismus', definition: 'Violent flinging movements of one side of body, from contralateral STN lesion' },
        { term: 'chorea', definition: 'Involuntary, irregular, flowing movements' },
      ],
      clinicalNotes: 'Movement disorders can be classified by basal ganglia pathophysiology: Hypokinetic (bradykinesia, rigidity) suggests increased GPi output (Parkinson\'s). Hyperkinetic (chorea, ballismus) suggests decreased GPi output (Huntington\'s, STN lesion). DBS targets depend on circuit: STN or GPi for Parkinson\'s.',
    },
    5: {
      level: 5,
      summary: 'The basal ganglia are central to motor control, reinforcement learning, and habit formation, with clinical applications in deep brain stimulation and understanding neuropsychiatric disorders.',
      explanation: `**Advanced Basal Ganglia Neuroscience:**

**Dopamine Signaling:**
- Phasic dopamine: Reward prediction error
- Tonic dopamine: Sets response vigor
- Dopamine ramps: Progress toward reward
- Credit assignment problem

**Striosomal Architecture:**
- Striosomes (patches): Limbic input, project to SNc
- Matrix: Sensorimotor input, project to GPi/SNr
- Distinct developmental origins and functions

**Plasticity:**
- Spike-timing dependent plasticity at corticostriatal synapses
- Dopamine gating of plasticity (three-factor rule)
- D1 MSNs: LTP with dopamine + pre-before-post
- D2 MSNs: LTD with dopamine + pre-before-post

**Clinical Applications:**

*Deep Brain Stimulation:*
- Targets: STN, GPi (for Parkinson's)
- Mechanism: Disruption of pathological oscillations
- Beta oscillations (13-30 Hz) in Parkinson's
- Gamma oscillations with levodopa/DBS

*Movement Disorders:*
- Parkinson's disease: SNc degeneration, Lewy bodies
- Huntington's disease: CAG repeats in huntingtin, striatal degeneration
- Dystonia: GPi target for DBS
- Tourette syndrome: Striatal dysfunction, tic suppression

*Neuropsychiatric Applications:*
- OCD: Caudate hyperactivity, ventral capsule/VS DBS
- Addiction: Nucleus accumbens, dopamine dysregulation
- Depression: DBS trials targeting reward circuitry
- Schizophrenia: Dopamine hypothesis, striatal dysfunction

**Imaging:**
- DaTscan (dopamine transporter SPECT): Parkinson's vs essential tremor
- F-DOPA PET: Dopamine synthesis capacity
- fMRI: Striatal activation in reward tasks

**Emerging Understanding:**
- Interneuron diversity (cholinergic, fast-spiking, etc.)
- Thalamostriatal projections (intralaminar nuclei)
- Cortico-basal ganglia-cerebellar interactions
- Striatal microcircuits

**Surgical Considerations:**
- Lesioning (pallidotomy, thalamotomy): Historical
- DBS: Reversible, adjustable
- Lead placement: Frame-based vs frameless
- Programming: Voltage/current, pulse width, frequency`,
      keyTerms: [
        { term: 'deep brain stimulation', definition: 'Implanted device that delivers electrical stimulation to brain targets' },
        { term: 'DaTscan', definition: 'SPECT imaging of dopamine transporters for diagnosing parkinsonism' },
        { term: 'striosome', definition: 'Patch compartments in striatum with distinct connectivity and function' },
        { term: 'beta oscillations', definition: 'Pathological 13-30 Hz rhythms in Parkinson\'s disease' },
      ],
      clinicalNotes: `Basal ganglia assessment:
- Motor: Bradykinesia, rigidity, tremor, postural instability
- Cognitive: Executive function, set-shifting
- Psychiatric: Impulse control disorders, depression

DBS for Parkinson's: Consider when motor fluctuations or medication-refractory tremor. STN vs GPi depends on patient profile. Careful patient selection - cognitive and psychiatric screening essential.

DaTscan helps distinguish Parkinson's (abnormal) from essential tremor, drug-induced parkinsonism, psychogenic (normal).`,
    },
  },

  media: [
    {
      id: 'basal-ganglia-3d',
      type: '3d-model',
      filename: 'basal_ganglia.glb',
      title: 'Interactive 3D Basal Ganglia',
      description: 'Rotatable model showing all nuclei and their relationships',
    },
    {
      id: 'basal-ganglia-circuits',
      type: 'diagram',
      filename: 'basal_ganglia_circuits.svg',
      title: 'Direct and Indirect Pathways',
      description: 'Circuit diagram showing direct, indirect, and hyperdirect pathways',
    },
  ],

  citations: [
    {
      id: 'delong-wichmann',
      type: 'article',
      title: 'Circuits and circuit disorders of the basal ganglia',
      authors: ['DeLong MR', 'Wichmann T'],
      source: 'Archives of Neurology',
    },
    {
      id: 'kandel-basal-ganglia',
      type: 'textbook',
      title: 'Principles of Neural Science',
      authors: ['Kandel ER', 'Schwartz JH', 'Jessell TM'],
      source: 'McGraw-Hill',
      chapter: 'The Basal Ganglia',
    },
  ],

  crossReferences: [
    { targetId: 'anatomy-substantia-nigra', targetType: 'structure', relationship: 'child', label: 'Substantia Nigra' },
    { targetId: 'anatomy-thalamus', targetType: 'structure', relationship: 'related', label: 'Thalamus' },
    { targetId: 'pathology-parkinsons', targetType: 'condition', relationship: 'see-also', label: 'Parkinson\'s Disease' },
    { targetId: 'pathology-huntingtons', targetType: 'condition', relationship: 'see-also', label: 'Huntington\'s Disease' },
  ],

  tags: {
    systems: ['nervous'],
    structures: ['FMA:84013', 'FMA:61889', 'FMA:61888', 'FMA:61835'],
    topics: ['anatomy', 'neuroanatomy', 'movement disorders'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'psychiatry'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default basalGangliaContent;
