/**
 * Synaptic Transmission - Physiology Educational Content
 *
 * Chemical and electrical synaptic transmission mechanisms,
 * neurotransmitters, and synaptic integration.
 */

import { EducationalContent } from '../../types';

export const synapticTransmission: EducationalContent = {
  id: 'physiology-synaptic-transmission',
  type: 'process',
  name: 'Synaptic Transmission',
  alternateNames: ['Neurotransmission', 'Synaptic Signaling', 'Neural Communication'],

  levels: {
    1: {
      level: 1,
      summary: 'Synaptic transmission is how neurons communicate with each other by sending chemical messages across tiny gaps called synapses.',
      explanation: `Synaptic transmission is the way brain cells (neurons) talk to each other. When one neuron wants to send a message to another, it releases chemicals that float across a tiny gap and trigger a response.

**How Neurons Communicate:**

**Step 1: The Signal Arrives**
- An electrical signal (action potential) travels down the first neuron
- It reaches the end of the neuron (the terminal)

**Step 2: Chemical Release**
- The electrical signal causes tiny bubbles (vesicles) to burst
- These vesicles release chemical messengers into the gap
- These chemicals are called neurotransmitters

**Step 3: Crossing the Gap**
- The neurotransmitters float across the synaptic cleft (the tiny gap)
- This happens very fast - in less than a millisecond!

**Step 4: Receiving the Message**
- The second neuron has special receivers called receptors
- The neurotransmitters lock into these receptors
- This causes changes in the receiving neuron

**Step 5: The Message Is Received**
- The receiving neuron may become more excited or calmed down
- It might send its own signal further along
- Or it might decide not to respond

**Types of Messages:**

- **Excitatory**: "Wake up! Get excited!" Makes the next neuron more likely to fire
- **Inhibitory**: "Calm down! Relax!" Makes the next neuron less likely to fire

**The Brain Balances These:**
Your brain needs both excitatory and inhibitory messages working together. Too much excitement causes seizures. Too much inhibition makes you sleepy or unresponsive.

**Common Neurotransmitters:**
- **Glutamate**: The main excitatory messenger
- **GABA**: The main calming messenger
- **Dopamine**: Involved in reward and movement
- **Serotonin**: Affects mood and sleep
- **Acetylcholine**: Important for muscle control and memory

This chemical signaling happens trillions of times every day in your brain!`,
      keyTerms: [
        { term: 'synaptic transmission', definition: 'The process of sending signals from one neuron to another across a synapse' },
        { term: 'neurotransmitter', definition: 'Chemical messenger that carries signals across synapses' },
        { term: 'receptor', definition: 'A protein on a cell that receives chemical signals' },
        { term: 'synaptic cleft', definition: 'The tiny gap between two neurons at a synapse' },
        { term: 'vesicle', definition: 'Small bubble in a neuron that stores neurotransmitters' },
      ],
      analogies: [
        'Synaptic transmission is like passing a note in class - one person sends it, it travels across the aisle, and the other person reads it.',
        'Neurotransmitters are like keys, and receptors are like locks - only the right key fits in each lock.',
        'The synapse is like a handshake between two people - it is how they connect and communicate.',
      ],
      examples: [
        'When you learn something new, synapses strengthen so the connection works better next time.',
        'Caffeine works by blocking adenosine receptors, keeping you awake and alert.',
        'Alcohol increases GABA effects, which is why it makes people feel relaxed and sleepy.',
      ],
    },
    2: {
      level: 2,
      summary: 'Synaptic transmission involves action potential-triggered calcium influx, vesicular neurotransmitter release, receptor activation, and subsequent signal termination through reuptake or degradation.',
      explanation: `**Steps of Chemical Synaptic Transmission:**

**1. Action Potential Arrival:**
- Depolarization reaches pre-synaptic terminal
- Opens voltage-gated calcium channels
- Cav2.1 (P/Q-type) and Cav2.2 (N-type) predominant

**2. Calcium Influx:**
- Extracellular Ca2+ enters (concentration gradient)
- Local Ca2+ concentration reaches 10-100 micromolar
- Sensed by synaptotagmin

**3. Vesicle Fusion:**
- SNARE complex formation
- Synaptobrevin (VAMP) + Syntaxin + SNAP-25
- Synaptotagmin triggers fusion
- Exocytosis of neurotransmitter

**4. Neurotransmitter Diffusion:**
- Across synaptic cleft (20-40 nm)
- Millisecond timescale
- Binds to post-synaptic receptors

**5. Post-synaptic Response:**
- Ionotropic receptors: Direct ion channel opening
- Metabotropic receptors: G-protein signaling cascade
- EPSP (excitatory) or IPSP (inhibitory)

**6. Signal Termination:**
- Reuptake transporters
- Enzymatic degradation
- Diffusion away from synapse

**Neurotransmitter Systems:**

**Excitatory:**
- Glutamate: Primary CNS excitatory transmitter
- Receptors: AMPA (fast), NMDA (slow, Ca2+ permeable), Kainate
- Metabotropic glutamate receptors (mGluR1-8)

**Inhibitory:**
- GABA: Primary CNS inhibitory transmitter
- GABA-A: Ionotropic (Cl- channel), fast inhibition
- GABA-B: Metabotropic (Gi/o), slow inhibition
- Glycine: Inhibitory in spinal cord and brainstem

**Modulatory:**
- Acetylcholine: Nicotinic (ionotropic), Muscarinic (metabotropic)
- Dopamine: D1-like (excitatory), D2-like (inhibitory)
- Serotonin (5-HT): Multiple receptor subtypes (5-HT1-7)
- Norepinephrine: Alpha and beta adrenergic receptors
- Histamine: H1-H4 receptors

**Neuropeptides:**
- Co-released with small molecule transmitters
- Slower, longer-lasting effects
- Substance P, opioid peptides, oxytocin, vasopressin
- Distinct vesicle populations

**Synaptic Integration:**

**Temporal Summation:**
- Multiple inputs close in time summate
- EPSPs add together
- Reaches threshold for action potential

**Spatial Summation:**
- Multiple inputs from different locations
- Dendritic integration
- Coincidence detection

**Synaptic Strength:**
- Varies by number of vesicles released
- Release probability
- Receptor number and sensitivity
- Distance from action potential initiation zone`,
      keyTerms: [
        { term: 'exocytosis', definition: 'Process of vesicle fusion releasing contents into synaptic cleft' },
        { term: 'ionotropic receptor', definition: 'Receptor that is itself an ion channel; fast acting' },
        { term: 'metabotropic receptor', definition: 'Receptor coupled to G-proteins; slower, second messenger cascade' },
        { term: 'EPSP', definition: 'Excitatory post-synaptic potential; depolarizing response' },
        { term: 'IPSP', definition: 'Inhibitory post-synaptic potential; hyperpolarizing response' },
      ],
      analogies: [
        'Calcium influx is like the trigger on a gun - it causes the release mechanism to fire.',
        'Ionotropic receptors are like doors that open immediately when the right key is used.',
        'Metabotropic receptors are like starting a Rube Goldberg machine - slower but more complex outcomes.',
      ],
    },
    3: {
      level: 3,
      summary: 'Synaptic transmission involves complex molecular machinery for vesicle trafficking, diverse receptor pharmacology, and sophisticated mechanisms of short-term and long-term plasticity.',
      explanation: `**Vesicle Trafficking and Release:**

**Vesicle Pools:**
- Readily releasable pool (RRP): Docked at active zone
- Recycling pool: Rapidly available
- Reserve pool: Distant, actin-tethered
- Mobilization during sustained activity

**Active Zone Proteins:**
- RIM (Rab3-interacting molecule): Docking and priming
- Munc13: Priming, vesicle maturation
- Bassoon and Piccolo: Scaffold proteins
- CAST/ELKS: Active zone structure
- Liprin-alpha: Assembly

**Calcium Dynamics:**
- Nanodomains near Ca2+ channels
- Channel-vesicle coupling distance (10-50 nm)
- Cooperative Ca2+ binding to synaptotagmin
- Ca2+ clearance mechanisms (pumps, exchangers, buffers)

**Synaptic Vesicle Cycle:**

**Endocytosis:**
- Clathrin-mediated (primary pathway)
- Dynamin pinches off vesicles
- AP-2 complex recruitment
- Actin involvement during intense activity
- Kiss-and-run (rapid retrieval)

**Sorting and Refilling:**
- Endosomal sorting
- Neurotransmitter uptake
- V-ATPase proton pumping
- Vesicular transporters:
  - VGLUT (glutamate)
  - VGAT (GABA/glycine)
  - VMAT (monoamines)
  - VAChT (acetylcholine)

**Receptor Structure and Function:**

**AMPA Receptors:**
- Tetrameric (GluA1-4 subunits)
- GluA2 determines Ca2+ permeability
- Q/R editing at GluA2
- TARP auxiliary subunits (stargazin)
- Rapid desensitization

**NMDA Receptors:**
- Heterotetramers (GluN1 + GluN2A-D or GluN3)
- Voltage-dependent Mg2+ block
- High Ca2+ permeability
- Coincidence detector (requires depolarization + glutamate)
- Critical for LTP

**GABA-A Receptors:**
- Pentameric chloride channels
- Multiple subunits (alpha, beta, gamma, delta, epsilon, theta, pi)
- Alpha-1: Synaptic (phasic inhibition)
- Delta subunit: Extrasynaptic (tonic inhibition)
- Benzodiazepine and barbiturate binding sites

**Short-Term Synaptic Plasticity:**

**Synaptic Depression:**
- Depletion of RRP
- Reduced release probability
- Faster at high-frequency synapses
- Recovery in seconds

**Synaptic Facilitation:**
- Residual Ca2+ accumulates
- Increases release probability
- Decays with Ca2+ clearance
- Time constant ~50-100 ms

**Post-Tetanic Potentiation:**
- Brief high-frequency stimulation
- Ca2+ accumulation in terminal
- Enhanced release for seconds to minutes

**Long-Term Plasticity:**

**Long-Term Potentiation (LTP):**
- NMDA receptor-dependent (most forms)
- Postsynaptic Ca2+ influx
- AMPA receptor insertion
- Spine enlargement
- Protein synthesis required (late LTP)

**Long-Term Depression (LTD):**
- Moderate Ca2+ elevation
- AMPA receptor internalization
- mGluR-dependent forms
- Cerebellar LTD (Purkinje cells)

**Homeostatic Plasticity:**
- Synaptic scaling
- Maintains firing rate stability
- Preserves network dynamics`,
      keyTerms: [
        { term: 'readily releasable pool', definition: 'Vesicles docked at active zone ready for immediate release' },
        { term: 'TARP', definition: 'Transmembrane AMPA receptor regulatory protein; auxiliary subunit' },
        { term: 'tonic inhibition', definition: 'Continuous GABA-mediated inhibition from extrasynaptic receptors' },
        { term: 'synaptic scaling', definition: 'Homeostatic adjustment of synaptic strength to maintain stability' },
        { term: 'kiss-and-run', definition: 'Rapid vesicle fusion and retrieval without full collapse' },
      ],
      clinicalNotes: 'NMDA receptors require both ligand binding (glutamate) and postsynaptic depolarization (to relieve Mg2+ block) for activation. This coincidence detection property makes NMDA receptors critical for Hebbian plasticity ("cells that fire together wire together"). Ketamine and phencyclidine are NMDA receptor antagonists.',
    },
    4: {
      level: 4,
      summary: 'Advanced synaptic physiology encompasses neurotransmitter reuptake mechanisms, synaptic disease pathophysiology, pharmacological targeting, and quantitative analysis of synaptic function.',
      explanation: `**Neurotransmitter Clearance:**

**Reuptake Transporters:**
- High-affinity, Na+-dependent transporters
- GLT-1, GLAST (glutamate, astrocytic)
- GAT-1, GAT-3 (GABA)
- DAT (dopamine)
- SERT (serotonin)
- NET (norepinephrine)
- Electrogenic (coupled to Na+ and Cl- gradients)

**Enzymatic Degradation:**
- Acetylcholinesterase: Rapid ACh hydrolysis
- MAO (monoamine oxidase): Dopamine, serotonin, NE degradation
- COMT (catechol-O-methyltransferase): Synaptic cleft dopamine
- GABA-T (GABA transaminase): GABA metabolism

**Glial Regulation:**
- Astrocytic glutamate uptake
- Glutamine synthetase
- Glutamine shuttle (glutamate-glutamine cycle)
- GABA uptake and metabolism

**Synaptic Pathology:**

**Myasthenia Gravis:**
- Autoantibodies against nicotinic ACh receptors
- Post-synaptic membrane simplification
- Reduced receptor density
- Complement-mediated damage
- Treatable with acetylcholinesterase inhibitors

**Lambert-Eaton Syndrome:**
- Antibodies against P/Q-type Ca2+ channels
- Pre-synaptic active zone disruption
- Reduced quantal release
- Paraneoplastic (often small cell lung cancer)

**Botulism and Tetanus:**
- Botulinum toxin: Cleaves SNARE proteins, blocks ACh release
- Tetanus toxin: Blocks GABA and glycine release (inhibitory interneurons)
- Both clostridial neurotoxins

**Synaptopathies:**
- SHANK3, NLGN mutations (autism)
- NRXN mutations (schizophrenia, autism)
- Synaptic gene copy number variants
- Impaired synapse development and function

**Pharmacological Targeting:**

**Acetylcholinesterase Inhibitors:**
- Donepezil, rivastigmine, galantamine
- Alzheimer disease treatment
- Increase synaptic ACh
- Peripheral toxicity (muscarinic)

**SSRIs and SNRIs:**
- Serotonin/norepinephrine reuptake inhibition
- Antidepressants
- Delayed therapeutic effect (plasticity mechanisms)

**Stimulants:**
- Amphetamine: Reverses DAT, increases DA release
- Methylphenidate: DAT blocker
- Cocaine: DAT blocker (slows reuptake)
- Increase synaptic dopamine

**GABAergic Drugs:**
- Benzodiazepines: Positive allosteric modulators of GABA-A
- Barbiturates: Prolong GABA-A channel opening
- Vigabatrin: Irreversible GABA-T inhibitor
- Tiagabine: GAT-1 blocker

**Glutamate Modulators:**
- Memantine: NMDA open-channel blocker (low affinity, fast kinetics)
- Ketamine: NMDA antagonist (antidepressant effects)
- Lamotrigine: Na+ channel blocker, glutamate release inhibitor
- Riluzole: Glutamate release inhibitor (ALS)

**Quantitative Synaptic Analysis:**

**Quantal Analysis:**
- Quantal content (number of vesicles released)
- Quantal size (neurotransmitter per vesicle)
- Binomial or Poisson statistics
- m = np (mean = release sites x probability)
- Vesicle hypothesis validation

**Miniature EPSCs/IPSCs:**
- Spontaneous quantal events
- TTX-insensitive (action potential-independent)
- Reflect single vesicle release
- Basal synaptic function assessment

**Paired-Pulse Protocols:**
- Two stimuli with varying intervals
- Depression or facilitation indices
- Release probability estimation
- Short-term plasticity characterization

**Evoked vs Spontaneous Release:**
- Action potential-dependent vs independent
- Different vesicle pools
- Different Ca2+ sources
- Distinct functional roles`,
      keyTerms: [
        { term: 'GLT-1', definition: 'Glutamate transporter-1; primary astrocytic glutamate transporter' },
        { term: 'glutamate-glutamine cycle', definition: 'Astrocytic glutamate uptake, conversion to glutamine, neuronal reuse' },
        { term: 'quantal content', definition: 'Number of vesicles released per action potential' },
        { term: 'SNARE', definition: 'Soluble NSF attachment protein receptor; vesicle fusion machinery' },
        { term: 'allosteric modulator', definition: 'Drug binding to modulatory site affecting receptor function' },
      ],
      clinicalNotes: 'The glutamate-glutamine cycle is critical for maintaining neuronal glutamate stores. GLT-1 (EAAT2) on astrocytes clears over 90% of synaptic glutamate. Ceftriaxone and other beta-lactam antibiotics upregulate GLT-1 expression and are being investigated for ALS and other excitotoxic conditions.',
    },
    5: {
      level: 5,
      summary: 'Expert-level synaptic physiology includes molecular dynamics of receptor trafficking, computational modeling of synaptic networks, therapeutic development for synaptic disorders, and emerging optogenetic and chemogenetic tools.',
      explanation: `**Receptor Trafficking:**

**AMPA Receptor Dynamics:**
- Constitutive cycling between membrane and intracellular pools
- Activity-dependent insertion and removal
- Subunit composition changes (GluA1 vs GluA2)
- Long-term potentiation: Insertion of GluA1-containing receptors
- Endocytosis in LTD

**NMDA Receptor Regulation:**
- Subunit composition (GluN2A vs GluN2B)
- GluN2B predominates early development
- GluN2A increases with maturation
- Extrasynaptic vs synaptic populations
- Coupling to different signaling pathways

**GABA-A Receptor Plasticity:**
- Activity-dependent subunit changes
- Alpha-1 vs alpha-2 regulation
- Tonic vs phasic inhibition balance
- Benzodiazepine sensitivity changes

**Metabotropic Receptor Signaling:**

**G-Protein Cascades:**
- Gi/o: Inhibit adenylyl cyclase, activate K+ channels, inhibit Ca2+ channels
- Gq/11: Activate phospholipase C (IP3, DAG)
- Gs: Stimulate adenylyl cyclase (cAMP)
- Beta-arrestin signaling

**Second Messenger Systems:**
- cAMP/PKA pathway
- IP3/Ca2+ release
- DAG/PKC activation
- MAP kinase cascades

**Computational Modeling:**

**Detailed Compartmental Models:**
- Multi-compartment dendritic trees
- Realistic synapse distributions
- Channel kinetics
- Calcium dynamics
- Spine head models

**Simplified Models:**
- Integrate-and-fire neurons
- Spike response models
- Synaptic current approximations
- Population dynamics
- Wilson-Cowan equations

**STDP (Spike-Timing-Dependent Plasticity):**
- Pre before post: LTP
- Post before pre: LTD
- Millisecond timing precision
- Hebbian learning rule
- Computational models

**Therapeutic Development:**

**Synaptic Stabilizers:**
- Ampakines: Positive AMPA receptor modulators
- Nootropic compounds
- Cognitive enhancement potential
- Safety considerations

**Synaptic Inhibitors:**
- GABA-A modulators (anxiolytics, sedatives)
- Glycine receptor modulation
- Control of excessive excitation

**Antidepressant Mechanisms:**
- Ketamine: Rapid antidepressant (NMDA antagonist, mTOR activation)
- Psychedelics: 5-HT2A agonism (synaptic plasticity)
- SSRIs: Chronic neuroplasticity changes
- BDNF/trkB signaling

**Synaptoprotective Agents:**
- Memantine (NMDA partial antagonist)
- Riluzole (glutamate release inhibitor)
- Latrepirdine (multitarget)
- Development pipeline

**Emerging Tools:**

**Optogenetics:**
- Channelrhodopsin-2 (ChR2): Blue light activation
- Halorhodopsin (NpHR): Yellow light inhibition
- Archaerhodopsin (Arch): Yellow light inhibition
- Combined with electrophysiology and behavior
- Circuit mapping applications

**Chemogenetics (DREADDs):**
- hM3Dq: Gq-coupled, excitatory (CNO-activated)
- hM4Di: Gi-coupled, inhibitory (CNO-activated)
- PSAM/PSEM systems
- Reversible, systemic control

**Genetically Encoded Indicators:**
- iGluSnFR: Glutamate imaging
- GACh: Acetylcholine imaging
- dLight: Dopamine imaging
- GRAB sensors for various neurotransmitters

**Research Frontiers:**

**Single-Synapse Resolution:**
- Two-photon glutamate imaging
- Synaptic strength tracking over time
- Structural plasticity correlation
- Learning-related changes

**Synaptic Proteomics:**
- Postsynaptic density composition
- Activity-dependent protein changes
- Mass spectrometry approaches
- Interactome mapping

**Synaptic Organoids:**
- 3D brain cultures
- Synapse formation in vitro
- Disease modeling
- Drug screening platforms

**Synaptic Pruning:**
- Complement cascade (C1q, C3)
- Microglial involvement
- Development and disease
- Therapeutic targeting (C3 inhibitors)`,
      keyTerms: [
        { term: 'DREADDs', definition: 'Designer receptors exclusively activated by designer drugs' },
        { term: 'STDP', definition: 'Spike-timing-dependent plasticity; timing window for LTP/LTD' },
        { term: 'ampakine', definition: 'Positive allosteric modulator of AMPA receptors' },
        { term: 'mTOR', definition: 'Mammalian target of rapamycin; signaling pathway for protein synthesis' },
        { term: 'synaptoprotective', definition: 'Protecting synapses from degeneration or dysfunction' },
      ],
      clinicalNotes: 'Expert insight: Ketamine\'s rapid antidepressant effect (within hours) appears to involve synaptic plasticity mechanisms rather than simple receptor blockade. Ketamine activates mTOR signaling, increases BDNF release, and promotes dendritic spine formation. This has led to development of rapid-acting antidepressants targeting synaptic plasticity pathways.',
    },
  },

  media: [
    {
      id: 'synaptic-transmission-diagram',
      type: 'diagram',
      filename: 'synaptic-transmission-steps.jpg',
      title: 'Synaptic Transmission Steps',
      description: 'Illustration of vesicle release, neurotransmitter diffusion, and receptor binding',
    },
  ],

  citations: [
    {
      id: 'kandel-synapse',
      type: 'textbook',
      title: 'Principles of Neural Science',
      authors: ['Kandel, E.R.'],
      source: 'McGraw-Hill',
    },
    {
      id: 'malenka-nicoll',
      type: 'article',
      title: 'Long-Term Potentiation - A Decade of Progress',
      authors: ['Malenka, R.C.', 'Nicoll, R.A.'],
      source: 'Science',
    },
  ],

  crossReferences: [
    { targetId: 'physiology-action-potentials', targetType: 'process', relationship: 'related', label: 'Action Potentials' },
    { targetId: 'physiology-neuroplasticity', targetType: 'process', relationship: 'related', label: 'Neuroplasticity' },
    { targetId: 'histology-synapse-histology', targetType: 'structure', relationship: 'see-also', label: 'Synapse Histology' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['physiology', 'neuroscience', 'pharmacology'],
    keywords: ['synaptic transmission', 'neurotransmitter', 'receptor', 'plasticity', 'synapse'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'psychiatry'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default synapticTransmission;
