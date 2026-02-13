/**
 * Neurotransmission - Physiology Educational Content
 *
 * Synaptic transmission and neurotransmitter signaling including
 * synthesis, release, receptor binding, and signal termination.
 */

import { EducationalContent } from '../../types';

export const neurotransmission: EducationalContent = {
  id: 'physiology-neurotransmission',
  type: 'process',
  name: 'Neurotransmission',
  alternateNames: ['Synaptic Transmission', 'Chemical Signaling', 'Neural Communication'],

  levels: {
    1: {
      level: 1,
      summary: 'Neurotransmission is how nerve cells talk to each other using chemical messengers called neurotransmitters.',
      explanation: `Neurotransmission is the process nerve cells use to communicate. Instead of being physically connected, nerve cells have tiny gaps between them. They send messages across these gaps using chemical messengers.

**How It Works - Simple Version:**

**1. The Signal Arrives**
- An electrical signal travels down the nerve cell
- It reaches the end of the cell (the terminal)

**2. Chemicals Are Released**
- The signal triggers the release of chemical messengers
- These messengers are called neurotransmitters
- They are stored in tiny bubbles (vesicles)

**3. Crossing the Gap**
- Neurotransmitters float across the tiny gap (synapse)
- This gap is incredibly small - about 20 nanometers
- They move very quickly

**4. Message Received**
- Neurotransmitters attach to special receptors
- These receptors are on the next cell
- Like a key fitting into a lock

**5. Response**
- The receiving cell responds to the message
- It might fire its own signal (excitation)
- Or it might be told not to fire (inhibition)

**6. Cleanup**
- Neurotransmitters are removed from the gap
- They are either recycled or broken down
- This ends the message

**Types of Messages:**

**Excitatory (Go Signals):**
- Tell the next cell to fire
- Like pressing the gas pedal
- Example: Glutamate

**Inhibitory (Stop Signals):**
- Tell the next cell NOT to fire
- Like pressing the brake
- Example: GABA

**Important Neurotransmitters:**

| Name | Simple Function |
|------|-----------------|
| Dopamine | Pleasure and reward |
| Serotonin | Mood and happiness |
| GABA | Calming the brain |
| Glutamate | Learning and memory |
| Acetylcholine | Muscle movement |

**Why This Matters:**
- This is how you think, feel, and move
- Problems here cause many brain conditions
- Many medications work on this system`,
      keyTerms: [
        { term: 'neurotransmitter', definition: 'A chemical messenger that carries signals between nerve cells' },
        { term: 'synapse', definition: 'The tiny gap between nerve cells where communication happens' },
        { term: 'receptor', definition: 'A protein on a cell that receives and responds to neurotransmitters' },
        { term: 'vesicle', definition: 'A tiny bubble inside cells that stores neurotransmitters' },
        { term: 'excitation', definition: 'A signal that makes a nerve cell more likely to fire' },
      ],
      analogies: [
        'Neurotransmission is like texting - you send a message (neurotransmitter) to a phone (receptor) across a wireless gap.',
        'Vesicles releasing neurotransmitters is like bubble wrap popping - each bubble releases its contents.',
        'Excitatory and inhibitory signals are like the gas and brake pedals in a car.',
      ],
      examples: [
        'When you feel happy after exercising, that is dopamine being released as a reward signal.',
        'Caffeine works by blocking a neurotransmitter that makes you sleepy, keeping you awake.',
        'Anti-anxiety medicines work by boosting GABA, the calming neurotransmitter.',
      ],
    },
    2: {
      level: 2,
      summary: 'Neurotransmission involves calcium-triggered vesicular release, receptor binding, and signal termination, enabling precise communication between neurons at chemical synapses.',
      explanation: `**Synapse Structure:**

**Presynaptic Terminal:**
- Vesicles containing neurotransmitter
- Voltage-gated Ca2+ channels
- Active zone (release site)
- Mitochondria for energy

**Synaptic Cleft:**
- 20-40 nm gap
- Contains enzymes (e.g., acetylcholinesterase)
- Extracellular matrix

**Postsynaptic Membrane:**
- Receptors (ionotropic and metabotropic)
- Postsynaptic density (scaffolding proteins)
- Ion channels

**Steps of Neurotransmission:**

**1. Action Potential Arrival:**
- AP propagates to terminal
- Depolarizes presynaptic membrane

**2. Calcium Entry:**
- Voltage-gated Ca2+ channels open (Cav2.1, Cav2.2)
- Ca2+ influx occurs (localized, brief)
- [Ca2+] rises from 100 nM to 100 uM locally

**3. Vesicle Fusion:**
| Component | Function |
|-----------|----------|
| Synaptotagmin | Ca2+ sensor on vesicle |
| SNARE complex | Membrane fusion |
| Syntaxin | t-SNARE on plasma membrane |
| SNAP-25 | t-SNARE on plasma membrane |
| Synaptobrevin | v-SNARE on vesicle |

**4. Neurotransmitter Release:**
- Quantal release (one vesicle = one quantum)
- Each vesicle contains thousands of molecules
- Fusion pore opens, contents diffuse out

**5. Receptor Binding:**

**Ionotropic Receptors (Fast):**
| Receptor | Ion | Effect |
|----------|-----|--------|
| Nicotinic ACh | Na+, K+ | Excitation |
| AMPA (Glu) | Na+, K+ | Fast excitation |
| NMDA (Glu) | Na+, K+, Ca2+ | Slow, plasticity |
| GABA-A | Cl- | Inhibition |
| Glycine | Cl- | Inhibition |

**Metabotropic Receptors (Slow):**
| Receptor | G-protein | Effect |
|----------|-----------|--------|
| Muscarinic (ACh) | Gq, Gi | Variable |
| Dopamine D1 | Gs | cAMP increase |
| Dopamine D2 | Gi | cAMP decrease |
| mGluR | Gq, Gi | Modulation |
| GABA-B | Gi | Slow inhibition |

**6. Signal Termination:**

**Reuptake:**
| Transporter | Neurotransmitter |
|-------------|------------------|
| DAT | Dopamine |
| NET | Norepinephrine |
| SERT | Serotonin |
| GAT1 | GABA |
| EAAT | Glutamate |

**Enzymatic Degradation:**
| Enzyme | Substrate | Location |
|--------|-----------|----------|
| Acetylcholinesterase | ACh | Synaptic cleft |
| MAO | Monoamines | Mitochondria |
| COMT | Catecholamines | Cytoplasm |

**Types of Synaptic Transmission:**

**Excitatory (EPSP):**
- Depolarizes postsynaptic cell
- Moves toward threshold
- Mainly glutamate

**Inhibitory (IPSP):**
- Hyperpolarizes or stabilizes
- Moves away from threshold
- GABA and glycine

**Summation:**
| Type | Description |
|------|-------------|
| Temporal | Rapid sequential inputs add together |
| Spatial | Multiple synapses on same cell add together |

**Synaptic Integration:**
- Single neuron receives 1000s of inputs
- Balance of EPSPs and IPSPs
- Decision to fire made at axon hillock`,
      keyTerms: [
        { term: 'SNARE complex', definition: 'Protein machinery that drives vesicle fusion with membrane' },
        { term: 'ionotropic receptor', definition: 'Receptor that is directly an ion channel' },
        { term: 'metabotropic receptor', definition: 'Receptor that acts through G-proteins and second messengers' },
        { term: 'EPSP', definition: 'Excitatory postsynaptic potential; depolarizing signal' },
        { term: 'IPSP', definition: 'Inhibitory postsynaptic potential; hyperpolarizing signal' },
      ],
      analogies: [
        'SNARE proteins are like a zipper - they pull membranes together until they fuse.',
        'Ionotropic receptors are like light switches - fast on, fast off. Metabotropic are like dimmers - slower but more adjustable.',
        'Synaptic integration is like voting - many inputs vote yes (EPSP) or no (IPSP), and the majority decides.',
      ],
    },
    3: {
      level: 3,
      summary: 'Neurotransmission involves sophisticated molecular machinery for vesicle docking, fusion, and recycling, with diverse receptor signaling cascades enabling complex information processing and plasticity.',
      explanation: `**Vesicle Cycle:**

**Vesicle Pools:**
\`\`\`
Ready-Releasable Pool (RRP):
- Docked at active zone
- ~10-20 vesicles
- Immediately releasable

Recycling Pool:
- Refills RRP during activity
- ~10-20% of total vesicles

Reserve Pool:
- Largest pool (~80%)
- Mobilized during intense activity
- Actin-dependent release
\`\`\`

**Vesicle Trafficking:**
| Step | Key Proteins |
|------|--------------|
| Transport to terminal | Kinesin, dynein |
| Tethering | Rab3, RIM |
| Docking | Munc18, syntaxin |
| Priming | Munc13, CAPS |
| Fusion | SNARE, synaptotagmin |
| Endocytosis | Clathrin, dynamin, AP-2 |
| Refilling | VMAT, VAChT, VGLUT |

**SNARE Assembly:**
\`\`\`
Primed State:
- Syntaxin + SNAP-25 + Synaptobrevin partially assembled
- Complexin stabilizes "cocked" state
- Synaptotagmin in Ca2+-sensing position

Ca2+ Triggered Fusion:
1. Ca2+ binds synaptotagmin C2 domains
2. Complexin released
3. SNARE zippering completes
4. Membrane fusion occurs
5. <1 ms from Ca2+ entry to release
\`\`\`

**Receptor Signaling Cascades:**

**NMDA Receptor:**
\`\`\`
Unique Properties:
- Requires Glu + Gly/D-serine co-agonists
- Mg2+ block at resting potential
- Voltage-dependent unblock
- High Ca2+ permeability
- Slow kinetics

Function:
- Coincidence detector
- Requires presynaptic Glu + postsynaptic depolarization
- Key for LTP induction
\`\`\`

**G-Protein Signaling:**
| Receptor | G-protein | Effector | Second Messenger |
|----------|-----------|----------|------------------|
| D1 | Gs | Adenylyl cyclase | cAMP up |
| D2 | Gi | Adenylyl cyclase | cAMP down |
| M1 | Gq | PLC | IP3, DAG |
| M2 | Gi | K+ channels | Hyperpolarization |
| 5-HT1A | Gi | K+ channels | Hyperpolarization |
| 5-HT2A | Gq | PLC | IP3, DAG |

**Synaptic Modulation:**

**Presynaptic:**
| Mechanism | Effect |
|-----------|--------|
| Autoreceptors | Negative feedback on release |
| Heteroreceptors | Modulation by other transmitters |
| Ca2+ channel modulation | Altered release probability |
| Adenosine | Inhibits release |

**Postsynaptic:**
| Mechanism | Effect |
|-----------|--------|
| Receptor phosphorylation | Altered sensitivity |
| Receptor trafficking | Changed surface expression |
| Scaffolding changes | Synapse remodeling |

**Synaptic Plasticity:**

**Short-Term Plasticity:**
| Type | Time Scale | Mechanism |
|------|------------|-----------|
| Facilitation | ms to s | Residual Ca2+ |
| Depression | ms to s | Vesicle depletion |
| Augmentation | s | Ca2+ accumulation |
| Post-tetanic potentiation | s to min | Ca2+-dependent |

**Long-Term Plasticity:**
\`\`\`
Long-Term Potentiation (LTP):
1. High-frequency stimulation
2. NMDA receptor activation
3. Ca2+ influx
4. CaMKII activation
5. AMPA receptor phosphorylation
6. AMPA receptor insertion
7. Enhanced transmission

Long-Term Depression (LTD):
1. Low-frequency stimulation
2. Modest NMDA activation
3. Low Ca2+ rise
4. Phosphatase activation
5. AMPA receptor dephosphorylation
6. AMPA receptor internalization
7. Reduced transmission
\`\`\`

**Glial Involvement:**

**Tripartite Synapse:**
| Glial Function | Mechanism |
|----------------|-----------|
| Glutamate uptake | EAAT1/2 on astrocytes |
| K+ buffering | Kir channels |
| Gliotransmission | D-serine, ATP, glutamate release |
| Metabolic support | Lactate shuttle |
| Synapse formation | Thrombospondins |`,
      keyTerms: [
        { term: 'synaptotagmin', definition: 'Vesicle calcium sensor triggering fusion' },
        { term: 'complexin', definition: 'Protein clamping SNAREs in primed state before Ca2+' },
        { term: 'LTP', definition: 'Long-term potentiation; persistent strengthening of synapses' },
        { term: 'LTD', definition: 'Long-term depression; persistent weakening of synapses' },
        { term: 'tripartite synapse', definition: 'Concept including astrocyte as third synaptic partner' },
      ],
      clinicalNotes: 'The Ca2+-triggered release machinery is incredibly fast (<1 ms latency), enabling precise temporal coding. NMDA receptor hypofunction is implicated in schizophrenia pathophysiology. Lambert-Eaton syndrome antibodies target presynaptic Ca2+ channels, reducing release. Astrocytic glutamate uptake failure contributes to excitotoxicity in stroke and ALS.',
    },
    4: {
      level: 4,
      summary: 'Advanced neurotransmission understanding encompasses release probability dynamics, receptor trafficking mechanisms, neuromodulatory systems, and synaptic dysfunction in disease.',
      explanation: `**Release Probability and Short-Term Dynamics:**

**Quantal Analysis:**
\`\`\`
N = Number of release sites
p = Probability of release
q = Quantal size (postsynaptic response)

Mean response: m = Npq
Variance: sigma^2 = Npq(1-p)

Coefficient of variation: CV = sqrt((1-p)/Np)

Paired-Pulse Ratio (PPR):
- PPR > 1: Facilitation (low initial p)
- PPR < 1: Depression (high initial p)
\`\`\`

**Vesicle Pool Dynamics:**
| Pool | Refilling Rate | Function |
|------|----------------|----------|
| Readily releasable | ~5-10/s | Immediate release |
| Recycling | 10-20 s | Sustains transmission |
| Reserve | Minutes | High-frequency burst |

**Calcium Dynamics:**
\`\`\`
Microdomain Signaling:
- Release sites 10-100 nm from Ca2+ channels
- [Ca2+] reaches 10-100 uM locally
- Synaptotagmin has low Ca2+ affinity
- Coupling distance determines speed

Residual Calcium:
- Underlies facilitation
- Buffers: Calbindin, parvalbumin
- Fast vs slow buffers shape responses
\`\`\`

**Receptor Trafficking:**

**AMPA Receptor Trafficking:**
\`\`\`
Constitutive Cycling:
- Continuous exo/endocytosis
- Maintains surface receptors
- ~15-30 min turnover

Activity-Dependent:
- LTP: Increased insertion (GluA1)
- LTD: Increased internalization
- Lateral diffusion to/from synapses
\`\`\`

**Phosphorylation Sites:**
| Site | Kinase | Effect |
|------|--------|--------|
| GluA1 S831 | CaMKII, PKC | Increased conductance |
| GluA1 S845 | PKA | Increased surface expression |
| GluA2 S880 | PKC | Internalization |
| NR2B Y1472 | Src family | Enhanced currents |

**Neuromodulatory Systems:**

**Dopamine Pathways:**
| Pathway | Origin | Target | Function |
|---------|--------|--------|----------|
| Nigrostriatal | SNpc | Striatum | Motor control |
| Mesolimbic | VTA | NAc | Reward |
| Mesocortical | VTA | PFC | Cognition |
| Tuberoinfundibular | Arcuate | Pituitary | Prolactin |

**Cholinergic Modulation:**
\`\`\`
Basal Forebrain System:
- Nucleus basalis of Meynert
- Projects to cortex
- Attention, memory
- Lost in Alzheimer disease

Pedunculopontine Nucleus:
- Projects to thalamus
- REM sleep, arousal
- PD-related sleep issues
\`\`\`

**Noradrenergic System:**
| Feature | Details |
|---------|---------|
| Origin | Locus coeruleus |
| Projections | Widespread cortical |
| Function | Arousal, attention, stress |
| Receptors | Alpha1, Alpha2, Beta |
| Clinical | ADHD medications |

**Disease Mechanisms:**

**Parkinson Disease:**
\`\`\`
Synaptic Pathology:
- Dopamine terminal loss
- Corticostriatal plasticity impaired
- D2 receptor supersensitivity
- Abnormal oscillations (beta)

Therapeutic Targets:
- L-DOPA replacement
- D2 agonists
- MAO-B/COMT inhibitors
- Deep brain stimulation
\`\`\`

**Alzheimer Disease:**
| Synaptic Change | Mechanism |
|-----------------|-----------|
| Synapse loss | Earliest pathology |
| Abeta oligomer effects | NMDA receptor dysfunction |
| Tau effects | Synaptic protein loss |
| Cholinergic loss | NBM degeneration |

**Schizophrenia:**
\`\`\`
Dopamine Hypothesis:
- Mesolimbic hyperactivity → Positive symptoms
- Mesocortical hypoactivity → Negative/cognitive

Glutamate Hypothesis:
- NMDA receptor hypofunction
- Ketamine/PCP model
- May explain cognitive symptoms
- Novel treatment targets
\`\`\`

**Myasthenia Gravis:**
| Feature | Mechanism |
|---------|-----------|
| Antibodies | Anti-AChR (85%), Anti-MuSK (5%) |
| Effect | Reduced receptor density |
| Electrophysiology | Decrement on RNS |
| Treatment | AChE inhibitors, immunotherapy |

**Lambert-Eaton:**
| Feature | Mechanism |
|---------|-----------|
| Antibodies | Anti-Cav2.1 (P/Q type) |
| Effect | Reduced Ca2+ entry |
| Electrophysiology | Increment on RNS |
| Association | Small cell lung cancer |`,
      keyTerms: [
        { term: 'paired-pulse ratio', definition: 'Ratio of second to first EPSP amplitude; indicates release probability' },
        { term: 'microdomain', definition: 'Localized high [Ca2+] near channels during release' },
        { term: 'neuromodulation', definition: 'Slow modulation of synaptic transmission by peptides, amines' },
        { term: 'release probability', definition: 'Probability that vesicle releases upon action potential' },
        { term: 'MuSK', definition: 'Muscle-specific kinase; target of antibodies in seronegative myasthenia' },
      ],
      clinicalNotes: 'Paired-pulse facilitation/depression provides insight into release probability changes in disease. Anti-CD20 therapies show efficacy in myasthenia gravis by depleting B cells. The NMDA receptor hypofunction model explains why ketamine produces psychotic symptoms and why NMDA modulators are being developed for schizophrenia.',
    },
    5: {
      level: 5,
      summary: 'Expert-level knowledge encompasses molecular mechanisms of synaptic plasticity, advanced pharmacology, optogenetic dissection of circuits, and translational applications in neurological therapeutics.',
      explanation: `**Molecular Mechanisms of Plasticity:**

**LTP Signaling Cascade:**
\`\`\`
Early Phase (E-LTP, 1-3 hours):
1. NMDA receptor Ca2+ influx
2. CaMKII autophosphorylation
3. CaMKII translocation to PSD
4. AMPA receptor S831 phosphorylation
5. Increased conductance
6. AMPA receptor insertion

Late Phase (L-LTP, >3 hours):
1. CREB phosphorylation
2. Gene transcription
3. BDNF synthesis
4. New protein synthesis
5. Structural changes
6. New synapse formation
\`\`\`

**Synaptic Tagging:**
\`\`\`
Concept:
- Strong stimulation sets "tag" at synapse
- Triggers gene transcription
- Plasticity-related proteins (PRPs) synthesized
- PRPs captured by tagged synapses
- Explains synapse specificity

Implications:
- Weak stimulation can be consolidated
- If strong stimulation occurs elsewhere
- "Behavioral tagging" in memory
\`\`\`

**Spike-Timing Dependent Plasticity (STDP):**
| Timing | Window | Result |
|--------|--------|--------|
| Pre before post | 0-20 ms | LTP |
| Post before pre | 0-20 ms | LTD |
| Large intervals | >50 ms | No change |

\`\`\`
Mechanism:
- Back-propagating action potentials
- NMDA receptor as coincidence detector
- Direction determines Ca2+ kinetics
- Different phosphatase/kinase balance
\`\`\`

**Optogenetic Circuit Dissection:**

**Pathway-Specific Manipulation:**
\`\`\`
Approach:
1. Inject Cre-dependent AAV in target region
2. Use Cre-expressing mouse line
3. Express ChR2/ArchT in specific pathway
4. Stimulate or inhibit during behavior

Examples:
- VTA→NAc (reward): Activate for place preference
- LHb→VTA (aversion): Activate for avoidance
- mPFC→amygdala: Required for extinction
\`\`\`

**Terminal Manipulation:**
| Strategy | Application |
|----------|-------------|
| Fiber optic at terminals | Release without soma activation |
| Axon-targeted opsins | Selective terminal control |
| Projection-specific | Understanding pathway function |

**Advanced Pharmacology:**

**Allosteric Modulators:**
| Target | Modulator Type | Examples |
|--------|----------------|----------|
| GABA-A | PAM | Benzodiazepines |
| NMDA | PAM/NAM | Memantine (NAM) |
| mGluR5 | NAM | Fenobam |
| mGluR2 | PAM | Pomaglumetad |
| Alpha7 nAChR | PAM | Galantamine |

**Biased Agonism:**
\`\`\`
Concept:
- Ligands stabilize specific receptor states
- Can activate G-protein but not beta-arrestin
- Or vice versa
- Enables pathway selectivity

Examples:
- 5-HT2A: Psychedelics vs antipsychotics
- mu-opioid: Analgesia without respiratory depression
- D2: Antipsychotic without motor effects
\`\`\`

**Translational Applications:**

**Novel Therapeutic Targets:**
| Target | Indication | Status |
|--------|------------|--------|
| mGluR2/3 | Schizophrenia | Phase 3 failed |
| GlyT1 | Schizophrenia | Phase 3 |
| AMPA PAMs | Depression, cognition | Early phase |
| KCC2 activators | Epilepsy, pain | Preclinical |
| TAAR1 agonists | Schizophrenia | Phase 3 |

**Rapid-Acting Antidepressants:**
\`\`\`
Ketamine Mechanism:
1. NMDA blockade (GABAergic interneurons)
2. Disinhibition of glutamate neurons
3. Glutamate release
4. AMPA receptor activation
5. BDNF release
6. mTORC1 activation
7. Rapid synaptogenesis
8. Hours to clinical effect

Esketamine:
- S-enantiomer
- Higher NMDA affinity
- FDA approved for TRD
- Administered in clinic
\`\`\`

**Psychoplastogens:**
| Agent | Mechanism | Status |
|-------|-----------|--------|
| Psilocybin | 5-HT2A agonist | Breakthrough therapy |
| MDMA | 5-HT/DA/NE release | Phase 3 for PTSD |
| Ketamine | NMDA antagonist | FDA approved |
| Tabernanthalog | Non-hallucinogenic 5-HT2A | Preclinical |

**Gene Therapy Approaches:**

**Optogenetic Therapy:**
\`\`\`
Applications:
- Retinitis pigmentosa (ChR2 in RGCs)
- Epilepsy (halorhodopsin in seizure focus)
- Parkinson disease (ChR2 in SNpc)

Challenges:
- Gene delivery
- Light delivery
- Immune response
- Long-term stability
\`\`\`

**Antisense Oligonucleotides:**
| Target | Disease | Status |
|--------|---------|--------|
| SOD1 | ALS | FDA approved |
| MAPT (tau) | FTD, AD | Phase 2 |
| SNCA | PD | Phase 1 |
| HTT | Huntington | Phase 3 halted |

**Research Frontiers:**

**In Vivo Imaging:**
\`\`\`
Techniques:
- GCaMP (calcium imaging)
- iGluSnFR (glutamate sensor)
- dLight (dopamine sensor)
- GRAB sensors (multiple NTs)

Applications:
- Population activity during behavior
- Neurotransmitter dynamics
- Circuit mapping
- Disease modeling
\`\`\`

**Computational Psychiatry:**
| Approach | Application |
|----------|-------------|
| Bayesian models | Belief updating deficits |
| Reinforcement learning | Reward prediction errors |
| Network models | Connectivity disruption |
| Digital phenotyping | Real-world markers |`,
      keyTerms: [
        { term: 'synaptic tagging', definition: 'Mechanism allowing synapse-specific capture of plasticity proteins' },
        { term: 'STDP', definition: 'Spike-timing dependent plasticity; direction depends on pre-post timing' },
        { term: 'biased agonism', definition: 'Ligand selectivity for specific signaling pathways at a receptor' },
        { term: 'psychoplastogen', definition: 'Compound that rapidly promotes neural plasticity' },
        { term: 'GCaMP', definition: 'Genetically encoded calcium indicator for imaging neural activity' },
      ],
      clinicalNotes: 'Rapid-acting antidepressants (ketamine, psilocybin) work through synaptic plasticity mechanisms rather than slow receptor adaptation. TAAR1 agonists represent a novel mechanism for schizophrenia. Gene therapy using ASOs has achieved FDA approval for ALS (tofersen). Optogenetic therapy for vision restoration is in clinical trials. Understanding STDP rules informs transcranial stimulation protocols for rehabilitation.',
    },
  },

  media: [
    {
      id: 'synapse-diagram',
      type: 'diagram',
      filename: 'synaptic-transmission.png',
      title: 'Synaptic Transmission',
      description: 'Detailed diagram of presynaptic release and postsynaptic response',
    },
    {
      id: 'plasticity-diagram',
      type: 'diagram',
      filename: 'ltp-ltp-mechanisms.png',
      title: 'Synaptic Plasticity Mechanisms',
      description: 'Molecular pathways of LTP and LTD',
    },
  ],

  citations: [
    {
      id: 'sudhof-release',
      type: 'article',
      title: 'Neurotransmitter Release: The Last Millisecond in the Life of a Synaptic Vesicle',
      authors: ['Sudhof, T.C.'],
      source: 'Neuron',
    },
    {
      id: 'malenka-ltp',
      type: 'article',
      title: 'LTP and LTD: An Embarrassment of Riches',
      authors: ['Malenka, R.C.', 'Bear, M.F.'],
      source: 'Neuron',
    },
  ],

  crossReferences: [
    { targetId: 'physiology-action-potential', targetType: 'process', relationship: 'related', label: 'Action Potential' },
    { targetId: 'pathology-neurodegenerative', targetType: 'condition', relationship: 'see-also', label: 'Neurodegenerative Diseases' },
    { targetId: 'histology-synapse-histology', targetType: 'structure', relationship: 'related', label: 'Synapse Histology' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['physiology', 'neuroscience', 'pharmacology'],
    keywords: ['synapse', 'neurotransmitter', 'receptor', 'plasticity', 'LTP', 'release'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'psychiatry', 'pharmacology'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default neurotransmission;
