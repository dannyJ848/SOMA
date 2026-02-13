/**
 * Action Potential - Physiology Educational Content
 *
 * Generation and propagation of action potentials in neurons,
 * including ion channel function and clinical applications.
 */

import { EducationalContent } from '../../types';

export const actionPotential: EducationalContent = {
  id: 'physiology-action-potential',
  type: 'process',
  name: 'Action Potential',
  alternateNames: ['Nerve Impulse', 'Neural Spike', 'Electrical Signal'],

  levels: {
    1: {
      level: 1,
      summary: 'An action potential is an electrical signal that travels along nerve cells, allowing your brain to communicate with your body.',
      explanation: `An action potential is like a tiny spark of electricity that travels down a nerve cell. This is how your brain sends messages to move your muscles, and how your body sends messages back to your brain about what you feel.

**How It Works - Simple Version:**

**1. Ready and Waiting (Resting State)**
- The nerve cell is like a charged battery
- It has more negative charge inside than outside
- It is ready to fire when needed

**2. Getting Triggered**
- Something causes the nerve to react (like touching something)
- If the signal is strong enough, the nerve fires
- This is called reaching the "threshold"

**3. The Signal Happens**
- Tiny doors (channels) in the nerve cell open
- Positively charged particles rush in
- The inside becomes briefly positive
- This is the "action potential"

**4. Going Back to Normal**
- Other channels open to let positive particles out
- The cell returns to its resting state
- It needs a brief rest before it can fire again

**5. The Message Travels**
- This signal travels down the whole nerve cell
- It moves fast - like a wave
- The signal goes in one direction only

**Key Points:**

- **All or Nothing**: The nerve either fires fully or not at all (like a light switch)
- **Speed**: Some signals travel over 200 miles per hour!
- **Chain Reaction**: Each part of the nerve triggers the next

**Why This Matters:**
- Every thought requires action potentials
- Every movement starts with action potentials
- Every sensation is carried by action potentials
- Problems with action potentials cause diseases like epilepsy`,
      keyTerms: [
        { term: 'action potential', definition: 'An electrical signal that travels along a nerve cell' },
        { term: 'threshold', definition: 'The minimum signal strength needed to trigger an action potential' },
        { term: 'resting state', definition: 'When the nerve cell is quiet and ready to fire' },
        { term: 'ion channel', definition: 'A tiny door in the cell membrane that lets charged particles in or out' },
        { term: 'nerve cell', definition: 'A cell that carries electrical signals; also called a neuron' },
      ],
      analogies: [
        'An action potential is like a line of dominoes falling - each one triggers the next.',
        'The threshold is like the trigger on a gun - once you pull it hard enough, the whole thing fires.',
        'Ion channels are like automatic doors that open when enough people (charges) gather outside.',
      ],
      examples: [
        'When you touch a hot stove, action potentials race from your hand to your brain to signal danger.',
        'When you decide to wave, action potentials travel from your brain to your arm muscles.',
        'Your heart beats because action potentials tell heart muscle cells when to contract.',
      ],
    },
    2: {
      level: 2,
      summary: 'Action potentials are rapid, regenerative changes in membrane potential driven by voltage-gated sodium and potassium channels, enabling long-distance signal transmission in neurons.',
      explanation: `**Resting Membrane Potential:**

**Ion Distribution:**
| Ion | Inside Cell | Outside Cell | Equilibrium Potential |
|-----|-------------|--------------|----------------------|
| K+ | High (140 mM) | Low (5 mM) | -90 mV |
| Na+ | Low (15 mM) | High (145 mM) | +60 mV |
| Cl- | Low (10 mM) | High (110 mM) | -70 mV |

**Resting Potential: -70 mV**
- Maintained by Na+/K+ ATPase (3 Na+ out, 2 K+ in)
- K+ leak channels keep membrane permeable to K+
- Closer to K+ equilibrium than Na+

**Action Potential Phases:**

**1. Resting State (-70 mV):**
- Voltage-gated Na+ channels: Closed but ready
- Voltage-gated K+ channels: Closed
- Maintained by leak channels and pumps

**2. Stimulus and Threshold (-55 mV):**
- Local depolarization from stimulus
- If threshold reached, Na+ channels begin opening
- Positive feedback: More Na+ in = more channels open

**3. Depolarization (to +30 mV):**
- Rapid Na+ influx
- Membrane potential reverses
- Overshoot toward Na+ equilibrium
- Duration: ~0.5 ms

**4. Repolarization:**
- Na+ channels inactivate (time-dependent)
- K+ channels open (delayed)
- K+ efflux returns membrane toward resting
- Duration: ~1 ms

**5. Hyperpolarization (-80 mV):**
- K+ channels slow to close
- Temporary overshoot past resting potential
- "After-hyperpolarization"

**6. Return to Resting:**
- K+ channels close
- Na+ channels recover from inactivation
- Na+/K+ ATPase restores ion gradients

**Key Properties:**

**All-or-None Law:**
- Subthreshold stimulus: No action potential
- Threshold stimulus: Full action potential
- Stronger stimulus = same amplitude, higher frequency

**Refractory Periods:**
| Period | Duration | Mechanism | Effect |
|--------|----------|-----------|--------|
| Absolute | 1-2 ms | Na+ channel inactivation | No AP possible |
| Relative | 2-4 ms | Hyperpolarization | Stronger stimulus needed |

**Propagation:**
- Action potential at one point depolarizes adjacent membrane
- Sequential activation along axon
- Unidirectional (due to refractory period)

**Conduction Velocity:**

**Unmyelinated Axons:**
- Continuous conduction
- 0.5-2 m/s
- Slow but reliable

**Myelinated Axons:**
- Saltatory conduction (jumping between nodes)
- 10-150 m/s
- Fast and energy efficient

**Factors Affecting Velocity:**
| Factor | Effect |
|--------|--------|
| Axon diameter | Larger = faster |
| Myelination | Myelinated = faster |
| Temperature | Higher = faster |`,
      keyTerms: [
        { term: 'depolarization', definition: 'Membrane potential becoming less negative (more positive)' },
        { term: 'repolarization', definition: 'Return of membrane potential toward resting value' },
        { term: 'hyperpolarization', definition: 'Membrane potential more negative than resting' },
        { term: 'refractory period', definition: 'Time after an action potential when another cannot be generated' },
        { term: 'saltatory conduction', definition: 'Action potential jumping between nodes of Ranvier' },
      ],
      analogies: [
        'The Na+/K+ pump is like a bouncer at a club - it actively maintains the right balance of who is inside vs outside.',
        'Saltatory conduction is like skipping stones across water - jumping between nodes is faster than swimming.',
        'The refractory period is like reloading a camera flash - it needs time before it can fire again.',
      ],
    },
    3: {
      level: 3,
      summary: 'Action potential generation involves complex ion channel kinetics, with sodium channel activation/inactivation and potassium channel delayed rectification creating the characteristic waveform and enabling saltatory conduction.',
      explanation: `**Ion Channel Molecular Biology:**

**Voltage-Gated Na+ Channels (Nav):**
\`\`\`
Structure:
- Single alpha subunit (4 domains, I-IV)
- Each domain: 6 transmembrane segments (S1-S6)
- S4 segments: Voltage sensors (positively charged)
- S5-S6 loop: Pore-forming region
- Selectivity filter: DEKA motif

Channel States:
- Closed (resting): Gate closed, ready to activate
- Open: Both gates open, Na+ flows
- Inactivated: Inactivation gate blocks pore
\`\`\`

**Inactivation Mechanism:**
- III-IV cytoplasmic linker (inactivation particle)
- "Ball and chain" model
- Time-dependent (not voltage-dependent)
- Requires repolarization to remove

**Nav Isoforms:**
| Isoform | Location | Function |
|---------|----------|----------|
| Nav1.1 | CNS interneurons | Inhibitory circuits |
| Nav1.2 | CNS axons | Action potential propagation |
| Nav1.6 | Nodes of Ranvier | Saltatory conduction |
| Nav1.7 | Peripheral sensory | Pain transmission |
| Nav1.8, 1.9 | Nociceptors | Persistent pain signaling |

**Voltage-Gated K+ Channels (Kv):**
\`\`\`
Structure:
- Four separate alpha subunits (tetramer)
- Each subunit: 6 transmembrane segments
- Similar S4 voltage sensor
- Selectivity: GYG motif (K+ selective)

Delayed Rectifier Properties:
- Slower activation than Nav
- No inactivation (sustained current)
- Drives repolarization
\`\`\`

**Kv Types:**
| Type | Function |
|------|----------|
| Kv1 | Delayed rectifier |
| Kv2 | Delayed rectifier (somatodendritic) |
| Kv3 | Fast-spiking neurons |
| Kv7 (KCNQ) | M-current, slow deactivation |
| BK | Ca2+-activated, after-hyperpolarization |

**Hodgkin-Huxley Model:**
\`\`\`
I = gNa * m^3 * h * (V - ENa) + gK * n^4 * (V - EK) + gL * (V - EL)

Where:
- m: Na+ activation (fast)
- h: Na+ inactivation (intermediate)
- n: K+ activation (slow)
- g: Conductance
- E: Equilibrium potential

Key Insights:
- Quantitative description of excitability
- Predicted all-or-none behavior
- Nobel Prize 1963
\`\`\`

**Node of Ranvier Organization:**
\`\`\`
Nodal Region:
- High Nav1.6 density (1000-2000/um^2)
- Ankyrin-G scaffold
- 1-2 um length

Paranodal Region:
- Caspr/contactin attachment
- Septate-like junctions
- Myelin anchoring

Juxtaparanodal Region:
- Kv1.1, Kv1.2 clustering
- Repolarization
- Caspr2 localization
\`\`\`

**Factors Modulating Excitability:**

**Extracellular Calcium:**
| [Ca2+] | Effect on Threshold | Mechanism |
|--------|---------------------|-----------|
| Hypocalcemia | Decreased (hyperexcitable) | Surface charge screening |
| Hypercalcemia | Increased (hypoexcitable) | Surface charge screening |

**Temperature:**
- Q10 ~ 2-3 for channel kinetics
- Cooling slows channels
- Heating speeds channels

**pH:**
- Acidosis: Inhibits Na+ channels
- May protect against seizures

**Pharmacology:**
| Drug | Target | Effect |
|------|--------|--------|
| Tetrodotoxin (TTX) | Nav (pore block) | Blocks conduction |
| Local anesthetics | Nav (use-dependent) | Blocks pain |
| Carbamazepine | Nav | Antiepileptic |
| 4-aminopyridine | Kv | Enhances conduction (MS) |`,
      keyTerms: [
        { term: 'Hodgkin-Huxley model', definition: 'Mathematical model describing action potential ion currents' },
        { term: 'selectivity filter', definition: 'Channel region determining which ions can pass' },
        { term: 'inactivation gate', definition: 'Structure blocking Na+ channel after opening' },
        { term: 'use-dependent block', definition: 'Drug blockade increasing with channel activity' },
        { term: 'Q10', definition: 'Factor by which rate changes with 10-degree C temperature increase' },
      ],
      clinicalNotes: 'Local anesthetics block Na+ channels in a use-dependent manner, preferentially affecting active neurons. This explains why painful stimuli (which activate nociceptors repeatedly) are blocked while larger motor fibers (less active) are relatively spared. Hypocalcemia causes hyperexcitability, manifesting as tetany and perioral paresthesias.',
    },
    4: {
      level: 4,
      summary: 'Advanced understanding of action potentials encompasses channelopathies, complex channel kinetics, axonal excitability testing, and therapeutic targeting of ion channels in neurological disease.',
      explanation: `**Channelopathies:**

**Sodium Channelopathies:**
| Disease | Gene | Mutation Effect | Phenotype |
|---------|------|-----------------|-----------|
| SCN1A epilepsy | SCN1A | Loss of function | Dravet syndrome |
| SCN2A epilepsy | SCN2A | Gain or loss | Variable epilepsy |
| Erythromelalgia | SCN9A | Gain of function | Burning pain, redness |
| Congenital insensitivity to pain | SCN9A | Loss of function | No pain sensation |
| Hyperkalemic periodic paralysis | SCN4A | Delayed inactivation | Weakness with high K+ |

**Gain vs Loss of Function:**
\`\`\`
Gain of Function:
- Channels easier to open OR
- Channels stay open longer OR
- More channels available
- Result: Hyperexcitability

Loss of Function:
- Channels harder to open OR
- Channels inactivate faster OR
- Fewer functioning channels
- Result: Hypoexcitability
\`\`\`

**Potassium Channelopathies:**
| Disease | Gene | Channel | Phenotype |
|---------|------|---------|-----------|
| Episodic ataxia type 1 | KCNA1 | Kv1.1 | Myokymia, ataxia |
| BFNC | KCNQ2/3 | Kv7.2/7.3 | Neonatal seizures |
| Long QT syndrome | KCNQ1, KCNH2 | Cardiac K+ | Arrhythmia |

**Axonal Excitability Studies:**

**Threshold Tracking:**
\`\`\`
Technique:
- Apply conditioning stimuli
- Measure threshold changes
- Assess multiple parameters

Parameters Measured:
1. Strength-duration time constant (SDTC)
   - Reflects nodal Na+ channel function
   - Increased in demyelination

2. Threshold electrotonus
   - Response to subthreshold currents
   - Assesses internodal membrane

3. Recovery cycle
   - Refractory period
   - Supernormality
   - Late subnormality
\`\`\`

**Clinical Applications:**
| Finding | Interpretation |
|---------|----------------|
| Increased SDTC | Persistent Na+ current, demyelination |
| Abnormal threshold electrotonus | Internodal pathology |
| Prolonged refractory period | Na+ channel dysfunction |
| Increased supernormality | Hyperpolarization, paranodal dysfunction |

**Disease Patterns:**
| Condition | Excitability Pattern |
|-----------|---------------------|
| ALS | Increased persistent Na+ current |
| MS | Increased SDTC, TEd changes |
| Diabetic neuropathy | Depolarized, reduced refractoriness |
| CIDP | Threshold electrotonus changes |

**Advanced Channel Pharmacology:**

**Antiepileptic Drug Mechanisms:**
| Drug | Primary Target | Mechanism |
|------|----------------|-----------|
| Phenytoin | Nav | Prolongs inactivation |
| Carbamazepine | Nav | Prolongs inactivation |
| Lamotrigine | Nav | Prolongs inactivation |
| Lacosamide | Nav | Enhances slow inactivation |
| Retigabine | Kv7 | Opens K+ channels |

**State-Dependent Block:**
\`\`\`
Tonic Block:
- Drug binds resting channels
- Relatively weak

Phasic (Use-Dependent) Block:
- Drug binds open/inactivated channels
- Accumulates with repeated firing
- Preferentially blocks hyperactive neurons
\`\`\`

**Novel Therapeutic Targets:**
| Target | Approach | Indication |
|--------|----------|------------|
| Nav1.7 | Selective blockers | Chronic pain |
| Nav1.8 | Selective blockers | Neuropathic pain |
| Kv7 | Openers | Epilepsy, pain |
| BK channels | Modulators | Movement disorders |

**Computational Modeling:**

**Markov Models:**
\`\`\`
State Transitions:
C0 ↔ C1 ↔ C2 ↔ O ↔ I

Advantages over Hodgkin-Huxley:
- Explicit state representation
- Better drug binding modeling
- Temperature dependencies
- Stochastic simulations
\`\`\`

**Multi-Compartment Models:**
- Soma, dendrite, axon segments
- Realistic morphology
- Ion channel distributions
- Network-level simulations`,
      keyTerms: [
        { term: 'threshold tracking', definition: 'Technique measuring axonal excitability by tracking threshold changes' },
        { term: 'strength-duration time constant', definition: 'Measure of membrane excitability from threshold tracking' },
        { term: 'state-dependent block', definition: 'Drug blockade varying with channel conformational state' },
        { term: 'Markov model', definition: 'Ion channel model with discrete states and transition probabilities' },
        { term: 'Dravet syndrome', definition: 'Severe SCN1A-related epilepsy with pharmacoresistance' },
      ],
      clinicalNotes: 'Axonal excitability testing can distinguish demyelinating from axonal neuropathies and detect subtle changes not seen on standard NCS. In ALS, increased persistent Na+ current may precede clinical symptoms. Nav1.7 is a validated pain target (genetic knockout causes insensitivity to pain), but selective inhibitors have had mixed clinical trial results.',
    },
    5: {
      level: 5,
      summary: 'Expert-level knowledge encompasses advanced electrophysiology techniques, precision medicine approaches for channelopathies, computational neuroscience applications, and novel neuromodulation strategies.',
      explanation: `**Advanced Electrophysiology:**

**Patch-Clamp Variants:**
\`\`\`
Cell-Attached:
- Records single channel currents
- Minimal intracellular disruption
- Studies native channel behavior

Whole-Cell:
- Access to entire cell
- Studies macroscopic currents
- Dialyzes intracellular contents

Perforated Patch:
- Amphotericin/nystatin pores
- Maintains intracellular milieu
- Better for modulation studies

Outside-Out / Inside-Out:
- Excised membrane patches
- Drug access to specific surface
- Detailed kinetic studies
\`\`\`

**Automated Electrophysiology:**
| Platform | Throughput | Applications |
|----------|------------|--------------|
| QPatch | 48 channels | Drug screening |
| IonFlux | 16 channels | Kinetic studies |
| SyncroPatch | 384 channels | High-throughput |

**In Vivo Recording Techniques:**
\`\`\`
Neuropixels:
- 384 recording sites per probe
- 10 mm probe length
- Multiple brain regions
- Chronic implantation possible

Applications:
- Neural coding studies
- Behavior correlations
- Population dynamics
- Brain-machine interfaces
\`\`\`

**Precision Medicine for Channelopathies:**

**Genotype-Phenotype Correlations:**
\`\`\`
SCN1A Example:
- Truncating mutations → Severe (Dravet)
- Missense mutations → Variable
- Location matters (pore vs voltage sensor)
- Modifier genes influence phenotype

Functional Characterization:
1. Patient variant identification
2. Expression in cell lines
3. Patch-clamp analysis
4. Computational modeling
5. Treatment prediction
\`\`\`

**Precision Therapy:**
| Strategy | Example | Status |
|----------|---------|--------|
| Antisense oligonucleotides | SCN1A upregulation | Clinical trials |
| Gene therapy | Channel replacement | Preclinical |
| Variant-specific drugs | Nav1.7 blockers | Early development |
| Personalized drug selection | Functional testing | Research |

**Computational Neuroscience:**

**Population Coding:**
\`\`\`
Rate Coding:
- Information in firing rate
- Average over time window
- Classical view

Temporal Coding:
- Information in spike timing
- Precise millisecond patterns
- Oscillation-locked spikes

Population Coding:
- Information in ensemble activity
- Dimensionality reduction
- Machine learning approaches
\`\`\`

**Neural Oscillations:**
| Band | Frequency | Function |
|------|-----------|----------|
| Delta | 1-4 Hz | Deep sleep |
| Theta | 4-8 Hz | Memory, navigation |
| Alpha | 8-12 Hz | Relaxed wakefulness |
| Beta | 12-30 Hz | Motor, attention |
| Gamma | 30-100 Hz | Binding, cognition |

**Spike-Field Coherence:**
\`\`\`
Meaning:
- Relationship between spikes and LFP
- Indicates network participation
- Phase-locking to oscillation

Applications:
- Circuit function analysis
- Disease state detection
- Closed-loop neuromodulation
\`\`\`

**Neuromodulation Technologies:**

**Optogenetics:**
| Opsin | Light | Effect | Use |
|-------|-------|--------|-----|
| ChR2 | Blue | Depolarization | Activation |
| NpHR | Yellow | Hyperpolarization | Inhibition |
| ArchT | Green | Hyperpolarization | Inhibition |
| ReaChR | Red | Depolarization | Deep tissue |

**Chemogenetics (DREADDs):**
\`\`\`
hM3Dq: Excitatory DREADD
hM4Di: Inhibitory DREADD

Advantages:
- No implanted hardware
- Reversible with CNO/deschloroclozapine
- Cell-type specificity

Limitations:
- Slow onset (minutes)
- Not millisecond precision
- Metabolism concerns
\`\`\`

**Clinical Neuromodulation:**
| Method | Target | Applications |
|--------|--------|--------------|
| DBS | STN, GPi, VIM | Movement disorders |
| VNS | Vagus nerve | Epilepsy, depression |
| TMS | Cortex | Depression, pain |
| tDCS | Cortex | Rehabilitation |
| Closed-loop | Variable | Epilepsy, tremor |

**Research Frontiers:**

**Ultrasonic Neuromodulation:**
\`\`\`
Mechanism:
- Focused ultrasound
- Non-invasive deep targeting
- Mechanical/thermal effects

Applications:
- Blood-brain barrier opening
- Neuromodulation studies
- Potential therapy delivery
\`\`\`

**Magnetogenetics:**
- Magnetic control of ion channels
- Engineered magnetic-sensitive proteins
- Early development stage

**Bioelectronic Medicine:**
| Approach | Target | Status |
|----------|--------|--------|
| Auricular VNS | Non-invasive vagal | FDA approved |
| Splenic nerve stim | Inflammation | Clinical trials |
| Sacral nerve stim | Bladder dysfunction | FDA approved |
| Closed-loop insulin | Autonomic | Development |

**Neural Interfaces:**
\`\`\`
Brain-Computer Interfaces:
- Signal extraction from action potentials
- Decoding movement intention
- Restoring communication/movement

Challenges:
- Long-term stability
- Immune response
- Signal processing
- Real-time decoding
\`\`\``,
      keyTerms: [
        { term: 'Neuropixels', definition: 'High-density silicon probes for large-scale neural recording' },
        { term: 'optogenetics', definition: 'Light-activated ion channels for precise neural control' },
        { term: 'DREADDs', definition: 'Designer receptors exclusively activated by designer drugs' },
        { term: 'spike-field coherence', definition: 'Measure of spike timing relationship to oscillation' },
        { term: 'closed-loop neuromodulation', definition: 'Stimulation responsive to real-time neural activity' },
      ],
      clinicalNotes: 'Precision medicine for channelopathies involves functional characterization of patient variants to predict drug response. Antisense oligonucleotides for SCN1A upregulation show promise in Dravet syndrome. Closed-loop neuromodulation (responsive neurostimulation) is FDA-approved for epilepsy and demonstrates the clinical translation of spike timing concepts. High-density recording (Neuropixels) is transforming systems neuroscience and may improve brain-computer interfaces.',
    },
  },

  media: [
    {
      id: 'ap-phases-diagram',
      type: 'diagram',
      filename: 'action-potential-phases.png',
      title: 'Action Potential Phases',
      description: 'Graph showing membrane potential changes during action potential',
    },
    {
      id: 'ion-channel-diagram',
      type: 'diagram',
      filename: 'voltage-gated-channel.png',
      title: 'Voltage-Gated Ion Channel',
      description: 'Structure and conformational states of voltage-gated channels',
    },
  ],

  citations: [
    {
      id: 'hodgkin-huxley-1952',
      type: 'article',
      title: 'A Quantitative Description of Membrane Current and Its Application to Conduction and Excitation in Nerve',
      authors: ['Hodgkin, A.L.', 'Huxley, A.F.'],
      source: 'Journal of Physiology',
    },
    {
      id: 'catterall-sodium',
      type: 'article',
      title: 'Structure and Function of Voltage-Gated Sodium Channels',
      authors: ['Catterall, W.A.'],
      source: 'Physiological Reviews',
    },
  ],

  crossReferences: [
    { targetId: 'physiology-neurotransmission', targetType: 'process', relationship: 'related', label: 'Neurotransmission' },
    { targetId: 'pathology-demyelinating-diseases', targetType: 'condition', relationship: 'see-also', label: 'Demyelinating Diseases' },
    { targetId: 'histology-neuron-structure', targetType: 'structure', relationship: 'related', label: 'Neuron Structure' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['physiology', 'neuroscience', 'electrophysiology'],
    keywords: ['action potential', 'ion channels', 'sodium channel', 'potassium channel', 'excitability'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'physiology'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default actionPotential;
