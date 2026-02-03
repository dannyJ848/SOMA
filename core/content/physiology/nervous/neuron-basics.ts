/**
 * Neuron Basics - Action Potentials and Neurotransmitters
 *
 * Comprehensive coverage of neuronal physiology including membrane potentials,
 * action potential generation, synaptic transmission, and neurotransmitter systems.
 */

import { EducationalContent } from '../../types';

export const neuronBasicsContent: EducationalContent = {
  id: 'physiology-neuron-basics',
  type: 'process',
  name: 'Neuron Basics',
  alternateNames: ['Neuronal Physiology', 'Nerve Cell Function', 'Neural Signaling'],

  levels: {
    1: {
      level: 1,
      summary: 'Neurons are special cells that send electrical and chemical signals to help your brain and body communicate.',
      explanation: `Your brain contains about 86 billion neurons - special cells that act like tiny messengers, sending signals throughout your body.

**What Makes Neurons Special:**
- They can send electrical signals called "nerve impulses"
- They pass messages to other neurons using chemicals
- They connect your brain to every part of your body

**Parts of a Neuron:**
- **Cell body**: The main part that contains the nucleus (like the control center)
- **Dendrites**: Branch-like parts that receive messages from other neurons
- **Axon**: A long tail that sends messages to other cells
- **Synapse**: The tiny gap where one neuron talks to another

**How Neurons Work:**
1. A signal comes in through the dendrites
2. If the signal is strong enough, the neuron "fires" - sending an electrical impulse down the axon
3. At the end, chemicals called neurotransmitters are released
4. These chemicals cross the gap and signal the next neuron

Think of it like a relay race - each runner (neuron) passes the baton (signal) to the next one!`,
      keyTerms: [
        { term: 'neuron', definition: 'A nerve cell that sends and receives electrical and chemical signals' },
        { term: 'dendrite', definition: 'Branch-like parts of a neuron that receive messages' },
        { term: 'axon', definition: 'The long part of a neuron that sends messages to other cells' },
        { term: 'synapse', definition: 'The tiny gap between neurons where chemical messages are passed' },
        { term: 'neurotransmitter', definition: 'Chemical messengers that neurons use to communicate' },
      ],
      analogies: [
        'A neuron is like a telephone - it receives calls (through dendrites), processes them (in the cell body), and sends messages (through the axon).',
        'Neurotransmitters are like text messages sent between friends (neurons) across a gap.',
      ],
      examples: [
        'When you touch a hot stove, neurons quickly send a signal from your finger to your brain saying "Hot!" and your brain sends back a signal telling your hand to move away.',
        'When you smell cookies baking, neurons in your nose send signals to your brain, and you recognize the delicious smell.',
      ],
    },
    2: {
      level: 2,
      summary: 'Neurons generate action potentials - rapid electrical signals caused by ion flow across the membrane - and communicate at synapses through neurotransmitter release.',
      explanation: `**The Resting Neuron:**

When a neuron is not sending a signal, it maintains a "resting membrane potential" of about -70 millivolts. This means the inside of the cell is negatively charged compared to the outside.

This charge difference is maintained by:
- **Sodium-potassium pump**: Moves 3 Na+ out and 2 K+ in
- **Ion channels**: Allow specific ions to pass through the membrane
- **Concentration gradients**: More Na+ outside, more K+ inside

**The Action Potential:**

When a neuron receives enough stimulation, it "fires" an action potential:

1. **Depolarization**: Na+ channels open, Na+ rushes in, membrane becomes positive (+30mV)
2. **Repolarization**: Na+ channels close, K+ channels open, K+ flows out
3. **Hyperpolarization**: Brief period when membrane is more negative than rest
4. **Recovery**: Return to resting potential

Key features:
- All-or-nothing response (either fires fully or not at all)
- Travels down the axon without weakening
- Can travel up to 120 meters per second

**Synaptic Transmission:**

When the action potential reaches the axon terminal:
1. Calcium channels open
2. Calcium triggers vesicle fusion with membrane
3. Neurotransmitters release into synaptic cleft
4. Neurotransmitters bind receptors on next neuron
5. This can excite or inhibit the next neuron

**Common Neurotransmitters:**
- **Glutamate**: Main excitatory (speeds things up)
- **GABA**: Main inhibitory (slows things down)
- **Dopamine**: Reward, movement, motivation
- **Serotonin**: Mood, sleep, appetite
- **Acetylcholine**: Muscle control, memory`,
      keyTerms: [
        { term: 'action potential', definition: 'A rapid electrical signal that travels down a neuron\'s axon', pronunciation: 'AK-shun poh-TEN-shul' },
        { term: 'resting membrane potential', definition: 'The electrical charge difference across a neuron\'s membrane when it\'s not signaling (about -70mV)' },
        { term: 'depolarization', definition: 'When a neuron becomes more positive inside, triggering an action potential' },
        { term: 'sodium-potassium pump', definition: 'A protein that maintains ion balance by pumping sodium out and potassium in' },
        { term: 'synaptic cleft', definition: 'The tiny gap between two neurons at a synapse' },
        { term: 'excitatory', definition: 'Makes the next neuron more likely to fire' },
        { term: 'inhibitory', definition: 'Makes the next neuron less likely to fire' },
      ],
      analogies: [
        'An action potential is like a "wave" at a sports stadium - once it starts, it goes all the way around without losing strength.',
        'The sodium-potassium pump is like a bouncer at a club - constantly working to keep the right balance of ions inside and outside.',
      ],
    },
    3: {
      level: 3,
      summary: 'Action potentials arise from voltage-gated ion channel kinetics, propagate via local circuit currents enhanced by myelination, and terminate at synapses where calcium-dependent vesicle fusion releases neurotransmitters that activate ionotropic or metabotropic receptors.',
      explanation: `## Ion Channels and Membrane Potential

**Resting Membrane Potential:**

The Goldman-Hodgkin-Katz equation describes resting potential:

\`Vm = RT/F × ln([K+]o + PNa/PK[Na+]o + PCl/PK[Cl-]i) / ([K+]i + PNa/PK[Na+]i + PCl/PK[Cl-]o)\`

At rest:
- PK >> PNa, so Vm approaches EK (-90mV)
- Small Na+ permeability pulls it toward -70mV
- Na+/K+-ATPase maintains gradients (3Na+ out : 2K+ in)

**Voltage-Gated Sodium Channels (Nav):**
- Activation gate: Opens rapidly with depolarization
- Inactivation gate: Closes ~1ms after activation
- Creates refractory periods:
  - Absolute: No stimulus can trigger AP (Na+ channels inactivated)
  - Relative: Stronger stimulus needed (some channels recovered)

**Voltage-Gated Potassium Channels (Kv):**
- Delayed activation relative to Nav
- No inactivation gate
- Responsible for repolarization

## Action Potential Propagation

**Unmyelinated Axons:**
- Continuous conduction
- Local circuit currents depolarize adjacent membrane
- Speed: 0.5-2 m/s
- Found in: C fibers (pain), autonomic postganglionic

**Myelinated Axons:**
- Saltatory conduction
- Myelin insulates internodes
- Nodes of Ranvier contain high Nav density
- AP "jumps" between nodes
- Speed: up to 120 m/s
- Found in: Motor neurons, sensory Aα/Aβ fibers

**Factors Affecting Conduction Velocity:**
- Axon diameter (larger = faster)
- Myelination (myelinated = faster)
- Temperature (warmer = faster)
- Internodal distance

## Synaptic Transmission

**Presynaptic Events:**
1. AP arrives at axon terminal
2. Voltage-gated Ca2+ channels (Cav2.1, 2.2) open
3. Ca2+ influx triggers SNARE-mediated vesicle fusion
   - Synaptobrevin (v-SNARE)
   - Syntaxin + SNAP-25 (t-SNAREs)
   - Synaptotagmin: Ca2+ sensor
4. Neurotransmitter released (quantal release)

**Postsynaptic Receptors:**

*Ionotropic (Ligand-gated ion channels):*
- Fast response (milliseconds)
- Direct ion flow
- Examples: AMPA, NMDA, GABA-A, nicotinic ACh receptors

*Metabotropic (G-protein coupled receptors):*
- Slower response (seconds to minutes)
- Second messenger cascades
- Examples: Muscarinic ACh, GABA-B, dopamine D1/D2, serotonin receptors

**Synaptic Integration:**
- EPSP: Excitatory postsynaptic potential (depolarizing)
- IPSP: Inhibitory postsynaptic potential (hyperpolarizing)
- Spatial summation: EPSPs from multiple synapses
- Temporal summation: Rapid successive EPSPs
- Threshold reached at axon hillock → AP generated

## Neurotransmitter Systems

| Transmitter | Receptor Types | Function | Clinical Relevance |
|-------------|----------------|----------|-------------------|
| Glutamate | AMPA, NMDA, Kainate, mGluR | Main excitatory | Excitotoxicity, epilepsy |
| GABA | GABA-A (ionotropic), GABA-B (metabotropic) | Main inhibitory | Anxiety, seizures |
| Dopamine | D1-D5 | Reward, movement | Parkinson's, schizophrenia |
| Serotonin | 5-HT1-7 | Mood, sleep | Depression, anxiety |
| Norepinephrine | α1, α2, β1-3 | Arousal, attention | ADHD, depression |
| Acetylcholine | Nicotinic, Muscarinic | Memory, muscle | Alzheimer's, myasthenia |`,
      keyTerms: [
        { term: 'saltatory conduction', definition: 'Rapid AP propagation in myelinated axons where signal jumps between nodes of Ranvier', pronunciation: 'SAL-tah-tor-ee' },
        { term: 'node of Ranvier', definition: 'Gaps in myelin sheath with high sodium channel density', pronunciation: 'RAHN-vee-ay' },
        { term: 'SNARE proteins', definition: 'Molecular machinery mediating vesicle fusion with presynaptic membrane' },
        { term: 'EPSP', definition: 'Excitatory postsynaptic potential; depolarizing response to neurotransmitter' },
        { term: 'IPSP', definition: 'Inhibitory postsynaptic potential; hyperpolarizing response to neurotransmitter' },
        { term: 'ionotropic receptor', definition: 'Ligand-gated ion channel providing fast synaptic transmission' },
        { term: 'metabotropic receptor', definition: 'G-protein coupled receptor providing slower, modulatory signaling' },
      ],
      clinicalNotes: 'Multiple sclerosis demyelination slows/blocks conduction. Local anesthetics (lidocaine) block Nav channels. Tetrodotoxin (puffer fish) blocks Nav; batrachotoxin keeps them open. Lambert-Eaton syndrome: antibodies against presynaptic Cav2.1. Botulinum toxin cleaves SNAREs, blocking ACh release.',
    },
    4: {
      level: 4,
      summary: 'Neuronal signaling involves precisely regulated ion channel gating kinetics, calcium-dependent vesicle release machinery, and diverse receptor mechanisms that undergo activity-dependent plasticity underlying learning and memory.',
      explanation: `## Advanced Ion Channel Biophysics

**Hodgkin-Huxley Model:**

The classic model describes conductances:

\`\`\`
I = gNa × m³h × (V - ENa) + gK × n⁴ × (V - EK) + gL × (V - EL)
\`\`\`

Where:
- m: Na+ activation (fast)
- h: Na+ inactivation (slow)
- n: K+ activation (delayed)
- Voltage-dependent rate constants α and β

**Channel Molecular Structure:**
- Nav: α subunit with 4 domains (I-IV), each with 6 TM segments
- S4 segment: Voltage sensor (positively charged residues)
- S5-S6 pore loop: Selectivity filter
- Inactivation: Intracellular loop between III-IV domains

**Channel Diversity:**
- Nav1.1-1.9: Different expression patterns and properties
- Nav1.7: Pain sensation (gain-of-function → erythromelalgia)
- Nav1.8, 1.9: Nociceptors (targets for analgesics)
- Kv1-12 families with varied kinetics

## Presynaptic Mechanisms

**Calcium Microdomains:**
- Ca2+ channels cluster at active zones
- [Ca2+] reaches >100μM near channels
- Ca2+ binding to synaptotagmin triggers fusion
- Cooperativity: Release ∝ [Ca2+]⁴

**Vesicle Pools:**
- Readily releasable pool (RRP): Docked at active zone
- Recycling pool: Replenishes RRP
- Reserve pool: Mobilized with intense activity

**Release Probability and Quantal Analysis:**
- Quantal size (q): Response to single vesicle
- Number of release sites (n)
- Release probability (p)
- Mean response: m = n × p × q

**Short-Term Plasticity:**
- *Facilitation*: Residual Ca2+ enhances next release
- *Depression*: Vesicle depletion
- *Post-tetanic potentiation*: Enhanced release after tetanus

## Postsynaptic Mechanisms

**AMPA Receptors:**
- GluA1-4 subunits
- Na+/K+ permeable
- GluA2-lacking: Also Ca2+ permeable
- Mediates fast excitatory transmission

**NMDA Receptors:**
- GluN1 + GluN2(A-D) subunits
- Requires glutamate + glycine co-agonist
- Mg2+ block at resting potential
- Removed by depolarization (voltage-dependent)
- High Ca2+ permeability
- "Coincidence detector" for LTP

**GABA-A Receptors:**
- Pentameric Cl- channels
- α, β, γ, δ, ε subunits
- α1β2γ2: Most common synaptic
- α4/α6βδ: Extrasynaptic, tonic inhibition
- Binding sites: GABA, benzodiazepines, barbiturates, neurosteroids

## Synaptic Plasticity

**Long-Term Potentiation (LTP):**
- Induction: High-frequency stimulation or pairing
- Early-LTP: Post-translational modifications
  - AMPAR phosphorylation (↑conductance)
  - AMPAR trafficking to synapse
- Late-LTP: Protein synthesis dependent
  - CREB activation
  - New protein synthesis (Arc, BDNF)
  - Structural changes (spine growth)

**Molecular Cascade:**
\`\`\`
NMDAR activation → Ca2+ influx →
CaMKII activation → AMPAR phosphorylation →
AMPAR insertion → Enhanced transmission
\`\`\`

**Long-Term Depression (LTD):**
- Low-frequency stimulation
- Moderate Ca2+ elevation
- Phosphatase activation (calcineurin, PP1)
- AMPAR dephosphorylation and internalization

**Spike-Timing Dependent Plasticity (STDP):**
- Pre before post (10-20ms): LTP
- Post before pre: LTD
- Provides temporal specificity for learning

## Neuromodulatory Systems

**Dopamine:**
- VTA → Mesolimbic (reward) and mesocortical
- SNc → Nigrostriatal (movement)
- D1 (Gs): Excitatory, activates PKA
- D2 (Gi): Inhibitory, reduces cAMP

**Norepinephrine:**
- Locus coeruleus → Widespread projections
- Arousal, attention, stress response
- α2-autoreceptors: Negative feedback

**Serotonin:**
- Raphe nuclei → Widespread projections
- 14+ receptor subtypes
- Mood, anxiety, sleep regulation

**Acetylcholine:**
- Basal forebrain → Cortex (attention, memory)
- Brainstem → Thalamus (arousal)
- Disrupted in Alzheimer's disease`,
      keyTerms: [
        { term: 'Hodgkin-Huxley model', definition: 'Mathematical description of action potential using voltage-dependent conductance equations' },
        { term: 'readily releasable pool', definition: 'Vesicles docked at active zone, immediately available for release' },
        { term: 'coincidence detector', definition: 'NMDA receptor function detecting simultaneous pre- and postsynaptic activity' },
        { term: 'spike-timing dependent plasticity', definition: 'Form of plasticity where relative timing of pre/post spikes determines LTP vs LTD' },
        { term: 'CaMKII', definition: 'Calcium/calmodulin-dependent protein kinase II; key enzyme for LTP induction' },
      ],
      clinicalNotes: 'Anti-NMDAR encephalitis: Autoantibodies against GluN1 cause psychiatric symptoms, seizures. Benzodiazepines enhance GABA-A at benzodiazepine site (α/γ interface). Baclofen activates GABA-B for spasticity. Memantine: NMDAR antagonist for Alzheimer\'s. Channelopathies: SCN1A mutations cause Dravet syndrome (severe epilepsy).',
    },
    5: {
      level: 5,
      summary: 'Neuronal function reflects the integrated activity of molecularly diverse ion channels, complex vesicle release machinery, and plastic synapses, with clinical implications spanning channelopathies, neurodegenerative diseases, and targeted pharmacotherapy.',
      explanation: `## Molecular Neuroscience of Ion Channels

**Structural Biology:**

Cryo-EM has revealed channel structures in multiple states:
- Nav1.7: Understanding pain pathway targets
- GABA-A: Benzodiazepine binding site visualization
- AMPA/NMDA: Glutamate binding and gating mechanisms

**Channelopathies:**

| Channel | Gene | Disease | Mechanism |
|---------|------|---------|-----------|
| Nav1.1 | SCN1A | Dravet syndrome | Loss of function in interneurons |
| Nav1.5 | SCN5A | Brugada, Long QT3 | Cardiac Nav dysfunction |
| Nav1.7 | SCN9A | Erythromelalgia | Gain of function → hyperexcitability |
| Nav1.7 | SCN9A | CIP | Loss of function → pain insensitivity |
| Kv1.1 | KCNA1 | Episodic ataxia type 1 | Reduced K+ conductance |
| Kv7.2/7.3 | KCNQ2/3 | BFNC epilepsy | M-current reduction |
| Cav2.1 | CACNA1A | Episodic ataxia type 2, FHM1 | P/Q channel dysfunction |

**Therapeutic Targeting:**

*Sodium Channel Modulators:*
- Carbamazepine, phenytoin: Use-dependent block
- Lacosamide: Enhances slow inactivation
- Nav1.7-selective blockers: Development for pain

*Potassium Channel Modulators:*
- Retigabine: Kv7 opener (withdrawn due to side effects)
- 4-aminopyridine: Kv blocker for MS

## Synaptic Release Machinery

**SNARE Complex Assembly:**
\`\`\`
Munc18-1 holds syntaxin in closed conformation
Munc13 opens syntaxin, initiates SNARE assembly
Synaptobrevin + Syntaxin + SNAP-25 form 4-helix bundle
Ca2+ binds synaptotagmin-1 C2 domains
Membrane fusion triggered
Complexin regulates fusion timing
\`\`\`

**Vesicle Recycling:**
- Clathrin-mediated endocytosis (seconds)
- Kiss-and-run (fast, partial release)
- Bulk endocytosis (under high activity)
- Ultrafast endocytosis (50-100ms)

**Diseases of Synaptic Transmission:**

| Condition | Target | Mechanism |
|-----------|--------|-----------|
| Botulism | SNARE proteins | Cleavage prevents release |
| Tetanus | SNARE in inhibitory neurons | Disinhibition → spasms |
| Lambert-Eaton | Cav2.1 | Ab reduces Ca2+ entry |
| Myasthenia gravis | nAChR | Ab reduces postsynaptic response |
| Congenital myasthenic syndromes | Multiple | Genetic defects in NMJ |

## Advanced Receptor Pharmacology

**Glutamate Receptor Modulators:**
- NMDA antagonists: Ketamine (anesthetic, antidepressant)
- AMPA potentiators: Cognitive enhancement research
- mGluR modulators: Anxiety, schizophrenia targets

**GABAergic System:**
- Positive allosteric modulators (PAMs): Benzodiazepines
- Neurosteroids: Allopregnanolone (brexanolone for PPD)
- GABA-B agonists: Baclofen (spasticity)
- Extrasynaptic GABA-A (δ-containing): Tonic inhibition, alcohol effects

**Therapeutic Implications:**

*Epilepsy:*
- Multiple mechanisms: Na+ block, Ca2+ block, GABA enhancement, SV2A binding (levetiracetam)
- Network effects beyond single-channel actions

*Depression:*
- SSRI delay: Receptor downregulation required
- Ketamine: Rapid NMDAR blockade → BDNF release
- Glutamatergic theories gaining prominence

*Neurodegeneration:*
- Excitotoxicity: Excessive glutamate → Ca2+ overload → cell death
- NMDAR antagonists: Memantine in Alzheimer's
- α-synuclein effects on synaptic vesicles in Parkinson's

## Systems Integration

**Network Oscillations:**
Neuronal ensembles generate rhythms:
- Fast-spiking interneurons (PV+): Gamma oscillations
- Regular-spiking interneurons (SOM+): Beta/theta
- Pyramidal neurons: Contribute to all frequencies
- Oscillations enable binding, attention, memory

**Homeostatic Plasticity:**
- Synaptic scaling: Global adjustment of synaptic strength
- Metaplasticity: Plasticity of plasticity thresholds
- Intrinsic plasticity: Ion channel expression changes
- Maintains network stability during learning

**Clinical Neurophysiology:**

*EMG:*
- Motor unit potentials: Assess denervation/myopathy
- Nerve conduction studies: Demyelination (prolonged latency, slowed conduction)
- Repetitive stimulation: Decrement (MG) or increment (LEMS)

*EEG:*
- Epileptiform discharges: Channel/synaptic dysfunction
- Background slowing: Reduced cortical excitability
- Sleep stages: Coordinated thalamocortical activity

**Precision Medicine:**

*Pharmacogenomics:*
- CYP2D6: Codeine, antidepressants metabolism
- HLA-B*15:02: Carbamazepine hypersensitivity risk
- SCN1A variants: Sodium blocker response in epilepsy

*Emerging Therapies:*
- Antisense oligonucleotides for SCN channelopathies
- Gene therapy for synaptic protein deficiencies
- Optogenetics: Research tool, future therapy potential`,
      keyTerms: [
        { term: 'channelopathy', definition: 'Disease caused by ion channel dysfunction, either genetic or autoimmune' },
        { term: 'use-dependent block', definition: 'Drug effect that increases with channel activity, preferentially blocking hyperactive channels' },
        { term: 'synaptic scaling', definition: 'Homeostatic mechanism that globally adjusts synaptic strength to maintain stable activity' },
        { term: 'fast-spiking interneuron', definition: 'Parvalbumin-positive GABAergic neurons generating gamma oscillations' },
        { term: 'excitotoxicity', definition: 'Neuronal death from excessive glutamate signaling causing Ca2+ overload' },
      ],
      clinicalNotes: `Neurological examination correlates:
- Fasciculations: Spontaneous motor unit firing (LMN disease)
- Myotonia: Delayed muscle relaxation (Na+ or Cl- channelopathy)
- Weakness pattern: UMN vs LMN vs myopathic
- Reflexes: Hyperreflexia (UMN) vs hyporeflexia (LMN/neuropathy)

Drug interactions: Avoid Na+ blockers in Brugada. SSRIs + MAOIs → serotonin syndrome. Magnesium affects NMDAR block - important in eclampsia treatment.

Emerging: Anti-seizure medications increasingly mechanism-based (e.g., cenobamate with combined Na+ and GABA mechanisms). Gene therapy trials for SMA (affecting NMJ), and Dravet syndrome (SCN1A).`,
    },
  },

  media: [
    {
      id: 'action-potential-diagram',
      type: 'diagram',
      filename: 'action_potential_phases.svg',
      title: 'Action Potential Phases',
      description: 'Diagram showing depolarization, repolarization, and ion channel states',
    },
    {
      id: 'synapse-3d',
      type: '3d-model',
      filename: 'chemical_synapse.glb',
      title: 'Chemical Synapse Structure',
      description: 'Interactive 3D model of presynaptic terminal, cleft, and postsynaptic membrane',
    },
    {
      id: 'neurotransmitter-chart',
      type: 'diagram',
      filename: 'neurotransmitter_systems.svg',
      title: 'Major Neurotransmitter Systems',
      description: 'Brain diagram showing dopamine, serotonin, norepinephrine, and acetylcholine pathways',
    },
  ],

  citations: [
    {
      id: 'kandel-ion-channels',
      type: 'textbook',
      title: 'Principles of Neural Science',
      authors: ['Kandel ER', 'Schwartz JH', 'Jessell TM', 'Siegelbaum SA', 'Hudspeth AJ'],
      source: 'McGraw-Hill, 6th Edition',
      chapter: 'Ion Channels and Electrical Signaling',
    },
    {
      id: 'hille-ion-channels',
      type: 'textbook',
      title: 'Ion Channels of Excitable Membranes',
      authors: ['Hille B'],
      source: 'Sinauer Associates, 3rd Edition',
    },
    {
      id: 'sudhof-neurotransmitter',
      type: 'article',
      title: 'Neurotransmitter release: the last millisecond in the life of a synaptic vesicle',
      authors: ['Sudhof TC'],
      source: 'Neuron 80:675-690, 2013',
    },
  ],

  crossReferences: [
    { targetId: 'anatomy-neuron-structure', targetType: 'structure', relationship: 'related', label: 'Neuron Anatomy' },
    { targetId: 'physiology-synaptic-plasticity', targetType: 'process', relationship: 'see-also', label: 'Synaptic Plasticity' },
    { targetId: 'condition-epilepsy', targetType: 'condition', relationship: 'see-also', label: 'Epilepsy' },
    { targetId: 'condition-myasthenia-gravis', targetType: 'condition', relationship: 'see-also', label: 'Myasthenia Gravis' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['physiology', 'neuroscience', 'electrophysiology'],
    keywords: ['action potential', 'neurotransmitter', 'synapse', 'ion channel', 'GABA', 'glutamate'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'psychiatry'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export default neuronBasicsContent;
