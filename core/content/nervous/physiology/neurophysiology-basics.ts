/**
 * Neurophysiology Basics
 *
 * Fundamental concepts of nervous system function including membrane potentials,
 * action potential generation and propagation, and synaptic transmission.
 */

import { EducationalContent } from '../../types';

export const NEUROPHYSIOLOGY_BASICS: EducationalContent = {
  id: 'nervous-neurophysiology-basics',
  type: 'concept',
  name: 'Neurophysiology Basics',
  alternateNames: ['Neural function', 'Nerve cell physiology', 'Neuronal signaling'],

  levels: {
    1: {
      level: 1,
      summary: 'Nerve cells communicate using electrical signals that travel along their length and chemical signals that pass between cells.',
      explanation: `**How Nerve Cells Work:**

Nerve cells (neurons) are the building blocks of your nervous system. They carry messages throughout your body.

**Parts of a Nerve Cell:**

1. **Cell body** - Contains the nucleus, controls the cell
2. **Dendrites** - Receive messages from other cells
3. **Axon** - Long fiber that carries messages away
4. **Axon terminals** - Pass messages to the next cell

**How Messages Travel:**

*Electrical Signals (within the cell):*
- The nerve cell has an electrical charge
- When stimulated, a quick electrical pulse (action potential) travels down the axon
- This is like flipping dominoes - once started, it continues to the end

*Chemical Signals (between cells):*
- At the end of the axon, the electrical signal triggers release of chemicals
- These chemicals (neurotransmitters) cross a tiny gap
- They signal the next cell to fire or not fire

**The Resting State:**

- Nerve cells maintain an electrical charge when at rest
- Inside is negative compared to outside (-70 millivolts)
- This is like a battery ready to discharge

**The Action Potential:**

- When stimulated enough, the cell "fires"
- The inside briefly becomes positive
- This signal travels quickly down the axon
- Then the cell resets for the next signal

**Why This Matters:**

- This is how you feel, think, and move
- Muscles contract because nerves signal them
- You feel pain because sensory nerves send signals
- Diseases can affect these processes`,
      keyTerms: [
        { term: 'neuron', definition: 'A nerve cell that carries electrical and chemical signals' },
        { term: 'action potential', definition: 'The electrical signal that travels along a nerve cell' },
        { term: 'neurotransmitter', definition: 'Chemical messengers that pass signals between nerve cells' },
        { term: 'axon', definition: 'The long fiber of a nerve cell that carries signals away from the cell body' },
      ],
      analogies: [
        'An action potential is like a wave at a sports stadium - once started, it travels all the way around.',
        'Neurotransmitters are like text messages - they carry information from one phone (cell) to another.',
      ],
      examples: [
        'When you touch a hot stove, sensory neurons quickly send pain signals to your brain.',
        'When you decide to move your hand, motor neurons carry signals from your brain to your muscles.',
      ],
    },
    2: {
      level: 2,
      summary: 'Neurophysiology involves maintenance of resting membrane potential through ion gradients and pumps, generation of action potentials via voltage-gated channels, and synaptic transmission through neurotransmitter release and receptor binding.',
      explanation: `**Resting Membrane Potential:**

*Ion Distribution:*
| Ion | Inside Cell | Outside Cell | Equilibrium Potential |
|-----|-------------|--------------|---------------------|
| K+ | High | Low | -90 mV |
| Na+ | Low | High | +60 mV |
| Cl- | Low | High | -70 mV |
| Ca2+ | Very low | Higher | +120 mV |

*Maintaining the Gradient:*
- Na+/K+ ATPase pump: 3 Na+ out, 2 K+ in
- Uses ATP energy
- Creates concentration gradients

*Resting Potential (~-70 mV):*
- Membrane more permeable to K+ at rest
- K+ leak channels allow K+ efflux
- Approaches K+ equilibrium but not quite
- Small Na+ leak depolarizes slightly

**Action Potential:**

*Phases:*
| Phase | Event | Membrane Potential |
|-------|-------|-------------------|
| Resting | K+ leak dominates | -70 mV |
| Threshold | Depolarization reaches ~-55 mV | Triggers opening |
| Rising | Na+ channels open, Na+ rushes in | -70 to +30 mV |
| Overshoot | Maximum depolarization | +30 to +40 mV |
| Falling | K+ channels open, K+ rushes out | +30 to -70 mV |
| Undershoot | K+ channels still open | -70 to -90 mV |
| Resting | Returns to baseline | -70 mV |

*All-or-None Principle:*
- If threshold is reached, full action potential fires
- If not reached, no action potential
- Cannot have "partial" action potentials

**Propagation:**

*Continuous Conduction:*
- In unmyelinated fibers
- Action potential regenerates at each point
- Slower conduction

*Saltatory Conduction:*
- In myelinated fibers
- Action potential "jumps" between nodes of Ranvier
- Much faster conduction (up to 100 m/s)

**Synaptic Transmission:**

*Steps:*
1. Action potential arrives at axon terminal
2. Voltage-gated Ca2+ channels open
3. Ca2+ entry triggers vesicle fusion
4. Neurotransmitter released into synaptic cleft
5. Neurotransmitter binds postsynaptic receptors
6. Ion channels open or close
7. Postsynaptic potential generated (EPSP or IPSP)

*Types of Postsynaptic Potentials:*
| Type | Effect | Ion Movement |
|------|--------|--------------|
| EPSP (excitatory) | Depolarizes | Na+ in, K+ out |
| IPSP (inhibitory) | Hyperpolarizes | K+ out, Cl- in |

**Integration:**

- Single neuron receives many inputs
- EPSPs and IPSPs sum together
- If sum reaches threshold at axon hillock, action potential fires
- Spatial and temporal summation`,
      keyTerms: [
        { term: 'resting membrane potential', definition: 'The electrical charge across the membrane when the neuron is not active (~-70 mV)' },
        { term: 'depolarization', definition: 'Making the membrane potential less negative (toward zero or positive)' },
        { term: 'saltatory conduction', definition: 'Jumping of action potentials between nodes of Ranvier in myelinated axons' },
        { term: 'EPSP', definition: 'Excitatory postsynaptic potential; brings neuron closer to firing' },
      ],
      analogies: [
        'The Na+/K+ pump is like continuously bailing water out of a boat to maintain the proper level.',
        'Saltatory conduction is like an express train that skips local stops - much faster!',
      ],
    },
    3: {
      level: 3,
      summary: 'Neurophysiology integrates the Nernst and Goldman equations for membrane potential, voltage-gated channel kinetics, cable properties affecting signal propagation, and the molecular mechanisms of synaptic vesicle exocytosis.',
      explanation: `**Membrane Potential - Quantitative:**

*Nernst Equation (single ion):*
\`\`\`
E_ion = (RT/zF) × ln([ion]_out/[ion]_in)

At 37°C: E_ion = (61.5/z) × log([ion]_out/[ion]_in)

Example calculations:
E_K = 61.5 × log(4/140) = -94 mV
E_Na = 61.5 × log(145/12) = +67 mV
\`\`\`

*Goldman-Hodgkin-Katz Equation (multiple ions):*
\`\`\`
Vm = (RT/F) × ln[(P_K[K+]_o + P_Na[Na+]_o + P_Cl[Cl-]_i) /
                   (P_K[K+]_i + P_Na[Na+]_i + P_Cl[Cl-]_o)]

At rest: P_K : P_Na : P_Cl = 1 : 0.04 : 0.45
→ Vm ≈ -70 mV

During AP peak: P_K : P_Na = 1 : 20
→ Vm approaches E_Na
\`\`\`

**Voltage-Gated Sodium Channels:**

*Structure:*
- α subunit: Pore-forming, voltage sensing
- β subunits: Modulatory
- Four homologous domains (I-IV)
- S4 segments: Voltage sensors

*Gating:*
| State | Configuration | Timing |
|-------|---------------|--------|
| Closed (resting) | Activation gate closed | At rest |
| Open | Activation gate open | During depolarization |
| Inactivated | Inactivation gate closed | After opening |

*Inactivation:*
- Ball-and-chain mechanism (III-IV linker)
- Responsible for refractory period
- Must repolarize to remove inactivation

**Refractory Periods:**

*Absolute Refractory Period:*
- Na+ channels inactivated
- Cannot generate another AP regardless of stimulus
- Limits maximum firing frequency

*Relative Refractory Period:*
- Some Na+ channels recovered
- Higher stimulus needed
- Affects timing of subsequent APs

**Cable Properties:**

*Length Constant (λ):*
\`\`\`
λ = √(r_m/r_i)

r_m = membrane resistance
r_i = internal resistance

Larger λ → signal travels farther
Myelination increases r_m → larger λ
\`\`\`

*Time Constant (τ):*
\`\`\`
τ = r_m × c_m

c_m = membrane capacitance

Larger τ → slower response to input
\`\`\`

**Synaptic Vesicle Cycle:**

*Molecular Machinery:*
\`\`\`
Docking:
- Rab proteins target vesicles to active zone
- SNARE proteins form complex

Priming:
- SNARE complex matures
- Munc13, Munc18 involved
- ATP-dependent

Fusion:
- Ca2+ enters via CaV2.1/2.2
- Ca2+ binds synaptotagmin
- Triggers membrane fusion
- Neurotransmitter released

Recycling:
- Clathrin-mediated endocytosis
- Vesicle reformation
- Neurotransmitter refilling
\`\`\`

**Postsynaptic Mechanisms:**

*Ionotropic Receptors:*
| Receptor | Ion Permeability | Effect |
|----------|------------------|--------|
| AMPA | Na+, K+ | Fast EPSP |
| NMDA | Na+, K+, Ca2+ | Slow EPSP, plasticity |
| GABA_A | Cl- | Fast IPSP |
| Glycine | Cl- | Fast IPSP |

*NMDA Receptor Properties:*
- Requires both glutamate binding AND depolarization
- Mg2+ block removed by depolarization
- Ca2+ influx triggers signaling cascades
- Key for learning and memory (LTP)`,
      keyTerms: [
        { term: 'Nernst equation', definition: 'Calculates equilibrium potential for a single ion species' },
        { term: 'Goldman equation', definition: 'Calculates membrane potential considering multiple ion permeabilities' },
        { term: 'SNARE proteins', definition: 'Proteins mediating vesicle fusion: synaptobrevin, syntaxin, SNAP-25' },
        { term: 'synaptotagmin', definition: 'Calcium sensor that triggers vesicle fusion at synapses' },
      ],
      clinicalNotes: 'Local anesthetics block voltage-gated Na+ channels, preventing action potential generation. Channelopathies (mutations in ion channels) cause disorders like epilepsy, periodic paralysis, and cardiac arrhythmias. Botulinum toxin cleaves SNAREs, preventing synaptic transmission at neuromuscular junctions.',
    },
    4: {
      level: 4,
      summary: 'Advanced neurophysiology encompasses ion channel diversity and regulation, neuromodulation, synaptic plasticity mechanisms, and the cellular basis of neural network computation.',
      explanation: `**Ion Channel Diversity:**

*Voltage-Gated Channel Families:*
\`\`\`
Sodium Channels:
- Nav1.1-1.9, Nav2.1
- Tissue-specific expression
- Nav1.7, 1.8, 1.9: Pain neurons
- Nav1.5: Cardiac myocytes

Potassium Channels:
- Kv (voltage-gated): Repolarization
- Kir (inward rectifier): Resting potential
- KCa (Ca-activated): Afterhyperpolarization
- K2P (two-pore): Leak channels

Calcium Channels:
- Cav1 (L-type): Sustained, cardiac
- Cav2.1 (P/Q): Synaptic release
- Cav2.2 (N-type): Synaptic release
- Cav3 (T-type): Pacemaker, burst firing
\`\`\`

**Channel Modulation:**

*Phosphorylation:*
| Kinase | Target | Effect |
|--------|--------|--------|
| PKA | Multiple channels | Generally enhances |
| PKC | Nav, Kv | Context-dependent |
| CaMKII | Cav, AMPAR | Enhances |
| Src | NMDAR | Enhances |

*G-Protein Modulation:*
- Gβγ directly inhibits Cav2 channels
- Example: μ-opioid receptor → reduced Ca2+ entry
- Reduces neurotransmitter release (presynaptic inhibition)

**Synaptic Plasticity:**

*Short-Term Plasticity:*
| Type | Mechanism | Duration |
|------|-----------|----------|
| Facilitation | Residual Ca2+ | ms-seconds |
| Depression | Vesicle depletion | ms-seconds |
| Augmentation | Ca2+-dependent priming | seconds |
| Post-tetanic potentiation | Ca2+-activated pathways | minutes |

*Long-Term Potentiation (LTP):*
\`\`\`
Induction:
1. Strong stimulation depolarizes postsynaptic cell
2. NMDA receptor Mg2+ block removed
3. Ca2+ enters through NMDA receptor
4. Ca2+ activates CaMKII

Expression:
1. CaMKII phosphorylates AMPA receptors
2. More AMPA receptors trafficked to synapse
3. Increased synaptic strength
\`\`\`

*Long-Term Depression (LTD):*
- Lower, slower Ca2+ elevation
- Activates phosphatases (calcineurin)
- AMPA receptor internalization
- Reduced synaptic strength

**Intrinsic Excitability:**

*Factors Determining Firing Pattern:*
| Factor | Effect |
|--------|--------|
| Nav channel density | Threshold, maximum rate |
| Kv channel types | Spike width, pattern |
| HCN (Ih) channels | Pacemaker activity |
| KCa channels | Adaptation |

*Neuronal Firing Patterns:*
| Pattern | Mechanism | Example |
|---------|-----------|---------|
| Tonic | Steady depolarization | Motor neurons |
| Phasic | Strong adaptation | Sensory neurons |
| Bursting | T-type Ca2+ + Ih | Thalamic relay |
| Irregular | Network inhibition | Cortical |

**Dendritic Integration:**

*Dendritic Spines:*
- Small protrusions on dendrites
- Sites of excitatory synapses
- Ca2+ compartmentalization
- Structural basis for synapse-specific plasticity

*Dendritic Computation:*
\`\`\`
Passive Properties:
- Signal attenuation with distance
- Cable filtering (loss of high frequencies)
- Temporal and spatial summation

Active Properties:
- Dendritic spikes (Na+, Ca2+)
- Backpropagation of APs
- Non-linear integration
- Coincidence detection
\`\`\`

**Network Properties:**

*Oscillations:*
| Frequency | Brain State | Generators |
|-----------|-------------|------------|
| Delta (0.5-4 Hz) | Deep sleep | Thalamus, cortex |
| Theta (4-8 Hz) | Navigation, memory | Hippocampus |
| Alpha (8-12 Hz) | Relaxed wakefulness | Thalamus |
| Gamma (30-100 Hz) | Attention, binding | Cortex |

*Circuit Motifs:*
- Feedforward inhibition
- Feedback inhibition
- Recurrent excitation
- Winner-take-all circuits`,
      keyTerms: [
        { term: 'LTP', definition: 'Long-term potentiation; sustained increase in synaptic strength, basis for learning' },
        { term: 'CaMKII', definition: 'Calcium/calmodulin-dependent kinase II; key enzyme in LTP induction' },
        { term: 'dendritic spike', definition: 'Active regenerative potential in dendrites, enabling non-linear computation' },
        { term: 'backpropagation', definition: 'Action potential traveling backward into dendrites, important for plasticity' },
      ],
      clinicalNotes: 'Many neurological drugs target ion channels: anticonvulsants (Nav blockers), anxiolytics (GABA enhancers), and analgesics (Cav blockers). Understanding LTP mechanisms informs therapies for cognitive enhancement and memory disorders. Channelopathies underlie episodic disorders like migraine (Cav2.1) and epilepsy (Nav1.1).',
    },
    5: {
      level: 5,
      summary: 'Expert neurophysiology integrates molecular mechanisms with systems-level function, encompassing computational neuroscience principles, optogenetic dissection of circuits, and translational applications to neurological disease.',
      explanation: `**Molecular Neuroscience - Cutting Edge:**

*Ion Channel Structures:*
\`\`\`
Recent Cryo-EM Advances:
- Nav1.4, Nav1.7 structures resolved
- Reveals drug binding sites
- Informs structure-based drug design

Key Structural Insights:
- Selectivity filter architecture
- Voltage sensor movement
- Inactivation gate conformation
- Drug binding pockets
\`\`\`

*Synaptic Nanoscale Organization:*
| Component | Organization | Function |
|-----------|--------------|----------|
| Active zone | Nanocolumns | Vesicle release sites |
| PSD | Nanodomains | Receptor clustering |
| Adhesion molecules | Trans-synaptic | Align pre and post |
| Scaffolding | Protein complexes | Organize signaling |

**Computational Neuroscience:**

*Hodgkin-Huxley Model:*
\`\`\`
I = Cm(dV/dt) + gNa*m³h(V-ENa) + gK*n⁴(V-EK) + gL(V-EL)

Where:
- m, h, n are gating variables
- Each follows first-order kinetics
- Accurately predicts AP shape and propagation
\`\`\`

*Network Models:*
| Model Type | Scale | Application |
|------------|-------|-------------|
| Biophysical | Single neuron | Drug effects |
| Integrate-and-fire | Networks | Oscillations |
| Rate models | Large-scale | Cognitive models |
| Deep learning | Comparison | Brain-machine |

**Advanced Experimental Techniques:**

*Optogenetics:*
\`\`\`
Activation:
- Channelrhodopsin (ChR2): Light-activated cation channel
- Millisecond precision control
- Cell-type specific expression

Silencing:
- Halorhodopsin (NpHR): Chloride pump
- Archaerhodopsin (Arch): Proton pump
- Inhibits specific populations
\`\`\`

*Chemogenetics (DREADDs):*
| DREADD | Effector | Effect |
|--------|----------|--------|
| hM3Dq | Gq | Activation |
| hM4Di | Gi | Silencing |
| KORD | Gi | Silencing (different ligand) |

*Imaging Techniques:*
| Method | What It Measures | Resolution |
|--------|------------------|------------|
| GCaMP | Calcium/activity | Single neuron |
| Voltage indicators | Membrane potential | ms-level |
| Glutamate sensors | Synaptic release | Synapse-level |
| Dopamine sensors | Neuromodulation | Real-time |

**Synaptic Plasticity - Molecular Details:**

*LTP Induction Cascade:*
\`\`\`
Ca2+ enters NMDAR
    ↓
Binds calmodulin → CaMKII activation
    ↓
CaMKII autophosphorylation (T286)
    ↓
Sustained kinase activity
    ↓
AMPAR phosphorylation (S831)
    ↓
AMPAR insertion (exocytosis, lateral diffusion)
    ↓
Enhanced synaptic transmission
\`\`\`

*Structural Plasticity:*
| Change | Timescale | Mechanism |
|--------|-----------|-----------|
| Spine volume increase | Minutes-hours | Actin polymerization |
| Spine formation | Hours-days | Activity-dependent |
| Synapse elimination | Days-weeks | LTD, competition |

**Translational Applications:**

*Drug Targets:*
| Target | Drug Class | Indication |
|--------|------------|------------|
| Nav1.7 | Blockers | Pain |
| NMDAR | Modulators | Depression (ketamine) |
| GABA-A | PAMs | Anxiety, epilepsy |
| Kv7 | Openers | Epilepsy |
| CaV2.2 | Blockers | Pain (ziconotide) |

*Gene Therapy Approaches:*
\`\`\`
Channelopathies:
- ASO for Nav1.1 (Dravet syndrome)
- Gene replacement for CLN2

Neuromodulation:
- Optogenetic therapy concepts
- Parkinson's (ChR2 in GPe)
- Retinitis pigmentosa (ChR2 in retina)
\`\`\`

**Network Disorders:**

*Epilepsy Mechanisms:*
| Mechanism | Example |
|-----------|---------|
| Excitation excess | NMDAR gain-of-function |
| Inhibition loss | Nav1.1 (inhibitory neurons) |
| Network synchronization | Gap junction changes |
| Homeostatic failure | Plasticity dysregulation |

*Parkinson's Disease:*
\`\`\`
Circuit Changes:
- Dopamine loss in striatum
- Altered striatal output
- Excessive synchronization in basal ganglia
- Beta oscillations

Therapeutic Approaches:
- DBS interrupts pathological oscillations
- Closed-loop stimulation
- Optogenetic circuit manipulation (research)
\`\`\`

**Future Directions:**

*Brain-Machine Interfaces:*
- Neural decoding algorithms
- High-density electrode arrays
- Bidirectional communication
- Sensory feedback

*Connectomics:*
- Complete wiring diagrams
- Synaptic resolution mapping
- Functional interpretation
- Disease state comparisons`,
      keyTerms: [
        { term: 'Hodgkin-Huxley model', definition: 'Mathematical description of action potential based on conductance changes' },
        { term: 'optogenetics', definition: 'Using light-activated proteins to control specific neurons' },
        { term: 'DREADDs', definition: 'Designer Receptors Exclusively Activated by Designer Drugs; chemogenetic tools' },
        { term: 'connectomics', definition: 'Mapping complete neural wiring diagrams at synaptic resolution' },
      ],
      clinicalNotes: 'Nav1.7 blockers are in development for pain without addiction risk. Ketamine rapidly treats depression through NMDAR-dependent synaptic plasticity. Optogenetic approaches are being translated to clinical trials for vision restoration. Understanding network-level pathophysiology is transforming treatment of circuit disorders like epilepsy and Parkinson disease.',
    },
  },

  media: [
    {
      id: 'neurophysiology-1',
      type: 'diagram',
      filename: 'action-potential-phases.svg',
      title: 'Action Potential Phases',
      description: 'Ionic basis of action potential generation',
    },
    {
      id: 'synapse-1',
      type: 'diagram',
      filename: 'synaptic-transmission.svg',
      title: 'Synaptic Transmission',
      description: 'Steps of chemical synaptic transmission',
    },
  ],

  citations: [
    {
      id: 'kandel-neuroscience',
      type: 'textbook',
      title: 'Principles of Neural Science',
      authors: ['Kandel, ER', 'et al'],
      source: 'McGraw-Hill',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'nervous-neurotransmitters', targetType: 'concept', relationship: 'related', label: 'Neurotransmitters' },
    { targetId: 'nervous-nerve-conduction', targetType: 'concept', relationship: 'related', label: 'Nerve Conduction' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['physiology', 'neuroscience'],
    keywords: ['neuron', 'action potential', 'synapse', 'membrane potential', 'ion channels'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'physiology'],
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
