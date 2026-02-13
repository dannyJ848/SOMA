/**
 * Neurotransmission - Synaptic Signaling & Neurotransmitter Systems
 *
 * Comprehensive coverage of action potential generation, synaptic transmission,
 * major neurotransmitter systems (ACh, dopamine, serotonin, GABA, glutamate,
 * norepinephrine), receptor pharmacology, and clinical correlations.
 */

import { EducationalContent } from '../../types';

export const neurotransmissionContent: EducationalContent = {
  id: 'physiology-neurotransmission',
  type: 'process',
  name: 'Neurotransmission',
  alternateNames: [
    'Synaptic Transmission',
    'Neurotransmitter Systems',
    'Transmision Neuroquimica',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'Nerve cells talk to each other by sending tiny chemical messengers across a small gap, which is how your brain controls everything you think, feel, and do.',
      explanation: `## How Nerve Cells Talk to Each Other

### Sending an Electrical Signal

Your nerve cells (neurons) carry messages using electricity, a lot like a wire carries electricity to a light bulb. Here is how it works:

1. **Resting state**: The neuron is quiet, like a battery that is fully charged but not being used
2. **Trigger**: Something stimulates the neuron -- maybe you touch something hot
3. **Firing**: The neuron sends a quick electrical pulse down its length, like flipping a switch
4. **Reset**: The neuron recharges so it can fire again

This electrical pulse is called an **action potential**. It is an all-or-nothing event -- the neuron either fires completely or not at all, like pulling a trigger.

### Chemical Messengers

When the electrical signal reaches the end of a neuron, it cannot just jump to the next one. Instead, the neuron releases tiny chemical messengers called **neurotransmitters** into a small gap called the **synapse**.

These chemicals float across the gap and attach to special landing pads (**receptors**) on the next neuron, delivering the message.

### Different Messengers, Different Jobs

Your brain uses many different chemical messengers, each with a special role:

- **Dopamine** (doh-pah-MEEN): The "reward" chemical -- makes you feel good when you do something enjoyable
- **Serotonin** (sair-oh-TOH-nin): The "mood" chemical -- helps you feel calm and happy
- **GABA** (GAH-bah): The "brake pedal" -- slows down brain activity to keep you calm
- **Glutamate** (GLOO-tah-mate): The "gas pedal" -- speeds up brain activity for thinking and learning
- **Acetylcholine** (ah-SEE-til-KOH-leen): The "muscle mover" -- tells your muscles to contract
- **Norepinephrine** (nor-ep-ih-NEF-rin): The "alert" chemical -- wakes you up and helps you pay attention`,
      keyTerms: [
        {
          term: 'Action potential',
          definition:
            'The quick electrical pulse a neuron sends down its length to carry a message',
          pronunciation: 'AK-shun poh-TEN-shul',
        },
        {
          term: 'Neurotransmitter',
          definition:
            'A chemical messenger released by neurons to send signals to other cells',
          pronunciation: 'NOOR-oh-TRANS-mit-er',
        },
        {
          term: 'Synapse',
          definition:
            'The tiny gap between two neurons where chemical messages are passed',
          pronunciation: 'SIN-aps',
        },
        {
          term: 'Receptor',
          definition:
            'A special landing pad on a cell that catches a specific chemical messenger',
          pronunciation: 'ree-SEP-tor',
        },
        {
          term: 'Dopamine',
          definition:
            'A brain chemical involved in feeling pleasure, reward, and motivation',
          pronunciation: 'DOH-pah-meen',
        },
      ],
      analogies: [
        'An action potential is like a wave in a stadium -- once it starts, it travels all the way around without stopping.',
        'Neurotransmitters are like text messages your neurons send to each other across the synapse.',
        'Receptors are like locks, and neurotransmitters are the specific keys that fit them.',
        'GABA and glutamate are like the brake and gas pedals of your brain.',
      ],
      examples: [
        'When you smell cookies baking and feel happy, dopamine is being released in your brain.',
        'When you feel sleepy at bedtime, GABA is helping slow your brain down.',
        'When you pull your hand away from a hot stove, neurons are firing action potentials to make your muscles move quickly.',
      ],
      patientCounselingPoints: [
        'Many medications work by changing how neurotransmitters work in your brain.',
        'Feeling good after exercise is partly because your brain releases more serotonin and dopamine.',
        'Sleep, diet, and exercise all affect the balance of chemical messengers in your brain.',
      ],
    },

    2: {
      level: 2,
      summary:
        'Neurons generate action potentials through ion channel activity, and communicate at synapses by releasing neurotransmitters that bind to specific receptors on target cells.',
      explanation: `## Action Potentials and Synaptic Transmission

### How an Action Potential Works

A neuron at rest has a negative electrical charge inside (about -70 millivolts) called the **resting membrane potential**. This is maintained by ion pumps and channels.

**Steps of an action potential:**

1. **Stimulus**: A signal pushes the membrane potential toward zero (depolarization)
2. **Threshold**: If the voltage reaches about -55 mV, voltage-gated sodium (Na+) channels open
3. **Depolarization**: Na+ rushes into the cell, making the inside positive (up to +30 mV)
4. **Repolarization**: Na+ channels close and potassium (K+) channels open; K+ flows out, restoring negative charge
5. **Hyperpolarization**: The cell briefly becomes more negative than resting (undershoot)
6. **Return to rest**: Ion pumps restore the original balance

The signal travels down the axon in one direction. In myelinated neurons, it "jumps" between gaps in the myelin sheath (**saltatory conduction**), making it much faster.

### Synaptic Transmission

When the action potential reaches the **axon terminal**:

1. Voltage-gated calcium (Ca2+) channels open
2. Calcium influx triggers **vesicles** (tiny sacs) to fuse with the membrane
3. Neurotransmitters are released into the synaptic cleft
4. They bind to receptors on the postsynaptic cell
5. The neurotransmitter is then removed by reuptake, enzyme breakdown, or diffusion

### Major Neurotransmitter Systems

| Neurotransmitter | Spanish (nameEs) | Main Functions |
|---|---|---|
| Acetylcholine (ACh) | Acetilcolina | Muscle movement, memory, attention |
| Dopamine (DA) | Dopamina | Reward, motivation, motor control |
| Serotonin (5-HT) | Serotonina | Mood, sleep, appetite, digestion |
| GABA | GABA | Main inhibitory transmitter -- calms neural activity |
| Glutamate | Glutamato | Main excitatory transmitter -- activates neural activity |
| Norepinephrine (NE) | Norepinefrina / Noradrenalina | Alertness, attention, fight-or-flight |

### Excitation vs. Inhibition

- **Excitatory** signals (like glutamate) make the next neuron more likely to fire
- **Inhibitory** signals (like GABA) make the next neuron less likely to fire
- The neuron adds up all incoming signals (**summation**) and fires only if the total exceeds threshold`,
      keyTerms: [
        {
          term: 'Resting membrane potential',
          definition:
            'The electrical charge difference across a neuron membrane at rest, approximately -70 mV',
        },
        {
          term: 'Depolarization',
          definition:
            'The process where the inside of the neuron becomes less negative or positive, moving toward firing',
          pronunciation: 'dee-POH-lar-ih-ZAY-shun',
        },
        {
          term: 'Repolarization',
          definition:
            'The process where the neuron returns to its negative resting charge after firing',
        },
        {
          term: 'Saltatory conduction',
          definition:
            'The way electrical signals jump between gaps in the myelin sheath, speeding up nerve impulses',
          pronunciation: 'SAL-tah-tor-ee',
        },
        {
          term: 'Vesicle',
          definition:
            'A tiny sac inside the axon terminal that stores neurotransmitters until they are released',
          pronunciation: 'VES-ih-kul',
        },
        {
          term: 'Summation',
          definition:
            'The process of adding together excitatory and inhibitory signals to determine if a neuron fires',
        },
      ],
      analogies: [
        'The resting membrane potential is like a loaded spring -- it stores energy that can be quickly released.',
        'Saltatory conduction is like skipping stones across water -- the signal leaps from node to node instead of traveling the whole distance.',
        'Vesicle release is like popping bubble wrap -- calcium triggers the bubbles (vesicles) to burst and release their contents.',
      ],
      examples: [
        'Local anesthetics like lidocaine work by blocking sodium channels, preventing action potentials from traveling along pain nerves.',
        'Multiple sclerosis damages myelin, slowing saltatory conduction and causing neurological symptoms.',
        'Caffeine blocks adenosine receptors, reducing the inhibitory effects of adenosine and making you feel more alert.',
      ],
    },

    3: {
      level: 3,
      summary:
        'Neuronal signaling involves voltage-gated ion channel kinetics for action potential generation, calcium-dependent exocytosis at synapses, and diverse neurotransmitter systems acting through ionotropic and metabotropic receptors.',
      explanation: `## Neurotransmission: Molecular Mechanisms

### Action Potential Generation

The action potential depends on the coordinated activity of voltage-gated ion channels:

**Hodgkin-Huxley Model:**
- **Na+ channels**: Have activation (m) and inactivation (h) gates. Rapid activation followed by inactivation produces the brief depolarization spike.
- **K+ channels**: Have slower activation (n) gates. Delayed opening drives repolarization.
- **Absolute refractory period**: Na+ channels are inactivated; no stimulus can trigger another AP.
- **Relative refractory period**: Some Na+ channels have recovered; a stronger-than-normal stimulus can fire the neuron.

**Propagation:**
- Unmyelinated axons: continuous conduction (0.5-2 m/s)
- Myelinated axons: saltatory conduction between nodes of Ranvier (up to 120 m/s)
- Larger diameter axons conduct faster (less internal resistance)

### Synaptic Transmission in Detail

**Presynaptic events:**
1. AP depolarizes the axon terminal
2. Voltage-gated Ca2+ channels (N-type and P/Q-type) open
3. Ca2+ binds synaptotagmin on synaptic vesicles
4. SNARE complex (synaptobrevin, syntaxin, SNAP-25) mediates vesicle fusion
5. Neurotransmitter is released via exocytosis into the cleft (~20 nm wide)

**Postsynaptic events:**
- **Ionotropic receptors** (ligand-gated ion channels): Fast response (ms). Neurotransmitter binding directly opens an ion channel.
- **Metabotropic receptors** (G-protein coupled): Slower response (seconds-minutes). Activate second messenger cascades (cAMP, IP3/DAG, etc.).

### Neurotransmitter Systems

**Acetylcholine (ACh) -- Acetilcolina:**
- Synthesis: Choline + Acetyl-CoA via choline acetyltransferase (ChAT)
- Receptors: Nicotinic (ionotropic, Na+/K+) and Muscarinic (metabotropic, M1-M5)
- Termination: Acetylcholinesterase (AChE) in the synaptic cleft
- Pathways: Neuromuscular junction, basal forebrain cholinergic system, autonomic ganglia

**Dopamine (DA) -- Dopamina:**
- Synthesis: Tyrosine -> L-DOPA (tyrosine hydroxylase, rate-limiting) -> Dopamine (DOPA decarboxylase)
- Receptors: D1-like (D1, D5: Gs, increase cAMP) and D2-like (D2, D3, D4: Gi, decrease cAMP)
- Termination: Reuptake via DAT; degradation by MAO and COMT
- Pathways: Mesolimbic (reward), mesocortical (cognition), nigrostriatal (motor), tuberoinfundibular (prolactin)

**Serotonin (5-HT) -- Serotonina:**
- Synthesis: Tryptophan -> 5-HTP (tryptophan hydroxylase) -> 5-HT (aromatic amino acid decarboxylase)
- Receptors: 7 families (5-HT1 through 5-HT7), most metabotropic; 5-HT3 is ionotropic
- Termination: Reuptake via SERT; degradation by MAO
- Pathways: Raphe nuclei projections to cortex, limbic system, brainstem, spinal cord

**GABA (gamma-aminobutyric acid):**
- Synthesis: Glutamate -> GABA via glutamic acid decarboxylase (GAD), requires vitamin B6
- Receptors: GABA_A (ionotropic, Cl- channel) and GABA_B (metabotropic, Gi-coupled)
- Termination: Reuptake by GAT transporters; degradation by GABA transaminase
- Role: Primary inhibitory neurotransmitter of the CNS

**Glutamate -- Glutamato:**
- Synthesis: From glutamine via glutaminase; also from alpha-ketoglutarate (Krebs cycle)
- Receptors: NMDA, AMPA, Kainate (ionotropic); mGluR1-8 (metabotropic)
- Termination: Reuptake by EAAT transporters into astrocytes; converted to glutamine
- Role: Primary excitatory neurotransmitter; critical for synaptic plasticity (LTP/LTD)

**Norepinephrine (NE) -- Norepinefrina / Noradrenalina:**
- Synthesis: Dopamine -> Norepinephrine via dopamine beta-hydroxylase (in vesicles)
- Receptors: Alpha-1 (Gq), Alpha-2 (Gi), Beta-1/2/3 (Gs)
- Termination: Reuptake via NET; degradation by MAO and COMT
- Pathways: Locus coeruleus projections; sympathetic nervous system`,
      keyTerms: [
        {
          term: 'Ionotropic receptor',
          definition:
            'A receptor that is itself an ion channel; neurotransmitter binding directly opens the pore for fast synaptic transmission',
          relatedTerms: ['Ligand-gated ion channel', 'Nicotinic receptor', 'GABA_A receptor'],
        },
        {
          term: 'Metabotropic receptor',
          definition:
            'A G-protein coupled receptor that activates intracellular second messenger cascades for slower, modulatory signaling',
          relatedTerms: ['GPCR', 'Muscarinic receptor', 'Dopamine receptor'],
        },
        {
          term: 'SNARE complex',
          definition:
            'A protein complex (synaptobrevin, syntaxin, SNAP-25) that mediates vesicle fusion and neurotransmitter release',
          pronunciation: 'snair',
        },
        {
          term: 'Reuptake',
          definition:
            'The process by which presynaptic neurons reabsorb neurotransmitter from the synaptic cleft to terminate signaling',
        },
        {
          term: 'NMDA receptor',
          definition:
            'A glutamate receptor that requires both glutamate binding and membrane depolarization to open; critical for learning and memory',
          pronunciation: 'N-M-D-A',
          relatedTerms: ['Glutamate', 'LTP', 'Mg2+ block'],
        },
        {
          term: 'Long-term potentiation (LTP)',
          definition:
            'A lasting increase in synaptic strength following high-frequency stimulation; considered a cellular mechanism of learning',
        },
      ],
      analogies: [
        'The SNARE complex is like a zipper that pulls the vesicle membrane and cell membrane together until they fuse.',
        'The NMDA receptor is like a double-locked door -- you need both glutamate (key) and depolarization (pushing the door) to open it.',
        'Reuptake transporters are like vacuum cleaners at the synapse, sucking up leftover neurotransmitter to recycle it.',
      ],
      clinicalNotes:
        'SSRIs (e.g., fluoxetine) block SERT to increase serotonin availability, treating depression. Benzodiazepines enhance GABA_A receptor function for anxiolysis. L-DOPA is converted to dopamine to treat Parkinson disease motor symptoms. Botulinum toxin cleaves SNARE proteins, blocking ACh release at neuromuscular junctions.',
    },

    4: {
      level: 4,
      summary:
        'Neurotransmission integrates ion channel biophysics, calcium-sensor exocytotic machinery, diverse receptor signaling cascades, and synaptic plasticity mechanisms, with disruptions underlying major neurological and psychiatric pathology.',
      explanation: `## Advanced Neurotransmission Physiology

### Ion Channel Biophysics & Action Potential Kinetics

**Voltage-gated Na+ channels (Nav1.1-1.9):**
- Alpha subunit: 4 domains (I-IV), each with 6 TM segments; S4 voltage sensors
- Inactivation: IFMT motif on III-IV linker ("ball-and-chain" mechanism)
- Nav1.7-1.9 are key pain pathway targets

**Voltage-gated K+ channels:**
- Delayed rectifiers (Kv1-4): repolarization; A-type: firing frequency regulation
- Inward rectifiers (Kir): resting potential; GIRK: G-protein modulated
- K_Ca channels: Ca2+-activated, mediate afterhyperpolarization (AHP)

**Conduction velocity determinants:** Axon diameter (space constant), myelination (increased membrane resistance, decreased capacitance), temperature (Q10 effect), node of Ranvier Na+ channel clustering (ankyrin-G).

### Synaptic Vesicle Cycle

1. **Docking**: Rab3/Rab27 tether vesicles to active zones via RIM/Munc13
2. **Priming**: Munc18-1/Munc13 transition SNARE complex to open state
3. **Fusion**: Ca2+ binds synaptotagmin-1 C2 domains (~4 Ca2+ cooperativity)
4. **Endocytosis**: Clathrin-mediated retrieval; dynamin scission; kiss-and-run
5. **Refilling**: Vesicular transporters (VGLUT, VGAT, VAChT, VMAT2) reload transmitter

**Quantal release**: Each vesicle = one quantum (~5,000-10,000 molecules). Miniature EPSPs reflect single-vesicle release (Katz & Fatt).

### Receptor Pharmacology

**Cholinergic:** Nicotinic (nAChR): pentameric cation channel; muscle type (alpha1)2-beta1-delta-epsilon; neuronal: alpha4-beta2 (nicotine-sensitive), alpha7 (Ca2+-permeable). Muscarinic: M1/M3/M5 (Gq->PLC->IP3/DAG); M2/M4 (Gi->decrease cAMP, open GIRK).

**Dopaminergic:** D1/D5 (Gs/Golf->AC->cAMP->DARPP-32); D2/D3/D4 (Gi/Go->decrease cAMP, activate GIRK, inhibit Ca2+ channels). D2 autoreceptors regulate DA release. Striatal D1-direct (movement facilitation) vs. D2-indirect (movement inhibition) pathways.

**Glutamatergic:** AMPA: fast EPSP, GluA2 determines Ca2+ permeability (Q/R editing). NMDA: Mg2+ block, glycine co-agonist, high Ca2+ permeability. LTP: CaMKII->AMPA phosphorylation/trafficking. LTD: calcineurin/PP1->AMPA internalization.

**GABAergic:** GABA_A: pentameric Cl- channel; sites for GABA (beta), benzodiazepines (alpha/gamma), barbiturates, neurosteroids. BZDs increase opening frequency; barbiturates increase duration. GABA_B: Gi-coupled presynaptic (decrease Ca2+) and postsynaptic (open GIRK) inhibition.

### Clinical Correlations

**Parkinson disease (Enfermedad de Parkinson):** SNpc dopaminergic degeneration -> striatal DA depletion -> bradykinesia, rigidity, tremor. Rx: L-DOPA/carbidopa, DA agonists, MAO-B/COMT inhibitors.

**Myasthenia gravis (Miastenia grave):** Anti-nAChR antibodies at NMJ -> fatigable weakness. Rx: AChE inhibitors (pyridostigmine), immunosuppression.

**Epilepsy (Epilepsia):** E/I imbalance. AEDs: Na+ channel blockers (carbamazepine, phenytoin), GABA_A potentiators (BZDs, phenobarbital), SV2A (levetiracetam), T-type Ca2+ (ethosuximide).

**Depression (Depresion):** Monoamine hypothesis (decreased 5-HT/NE). SSRIs, SNRIs, bupropion (NE/DA). Ketamine (NMDA antagonist) for treatment-resistant depression.`,
      keyTerms: [
        {
          term: 'Synaptotagmin',
          definition:
            'The Ca2+ sensor on synaptic vesicles; its C2 domains bind Ca2+ to trigger membrane fusion with ~4-ion cooperativity',
          relatedTerms: ['SNARE complex', 'Exocytosis', 'Quantal release'],
        },
        {
          term: 'DARPP-32',
          definition:
            'Dopamine- and cAMP-regulated phosphoprotein; a key intracellular signal integrator in striatal neurons downstream of D1 receptor activation',
        },
        {
          term: 'Quantal release',
          definition:
            'The concept that neurotransmitter is released in discrete packets (quanta) corresponding to individual vesicles, as demonstrated by miniature end-plate potentials',
        },
        {
          term: 'Long-term depression (LTD)',
          definition:
            'A persistent decrease in synaptic strength induced by low-frequency stimulation, mediated by calcineurin-dependent AMPA receptor internalization',
          relatedTerms: ['LTP', 'Synaptic plasticity', 'AMPA trafficking'],
        },
        {
          term: 'GluA2 subunit',
          definition:
            'An AMPA receptor subunit that, when present and RNA-edited at the Q/R site, renders the channel impermeable to Ca2+, serving a neuroprotective role',
        },
        {
          term: 'Excitotoxicity',
          definition:
            'Neuronal damage caused by excessive glutamate signaling and Ca2+ overload, implicated in stroke, TBI, and neurodegenerative diseases',
          relatedTerms: ['NMDA receptor', 'Glutamate', 'Calcium overload'],
        },
      ],
      clinicalNotes:
        'Serotonin syndrome (excess 5-HT) can result from SSRI-MAOI combinations: hyperthermia, clonus, agitation. Neuroleptic malignant syndrome (D2 blockade) presents with rigidity, hyperthermia, altered mental status. Lambert-Eaton myasthenic syndrome involves antibodies against presynaptic P/Q-type Ca2+ channels. Organophosphates (nerve agents, pesticides) irreversibly inhibit AChE, causing cholinergic crisis -- treated with atropine (muscarinic antagonist) and pralidoxime (AChE reactivator).',
    },

    5: {
      level: 5,
      summary:
        'Neurotransmission encompasses the biophysics of voltage-gated channel state transitions, presynaptic release probability and short-term plasticity, postsynaptic receptor subtype-specific signaling, and synaptic plasticity cascades, with precise pharmacological targeting in neurological and psychiatric therapeutics.',
      explanation: `## Neurotransmission: Professional-Level Review

### Action Potential Biophysics

**Hodgkin-Huxley formalism:**
I_Na = g_Na * m^3 * h * (V - E_Na); I_K = g_K * n^4 * (V - E_K). The m gate activates rapidly (tau ~0.1 ms), h inactivation is slower (tau ~1 ms), and n activation (tau ~1-5 ms) underlies delayed rectification. Nernst potentials: E_Na ~ +60 mV, E_K ~ -90 mV, E_Cl ~ -70 mV.

**Channelopathies:** Nav1.1 (SCN1A) LOF: Dravet syndrome. Nav1.7 (SCN9A) GOF: erythromelalgia; LOF: congenital pain insensitivity. Kv1.1 (KCNA1): episodic ataxia type 1. KCNQ2/3: benign familial neonatal seizures (M-current disruption).

### Presynaptic Release Mechanisms and Short-Term Plasticity

**Release probability (Pr):**
Determined by Ca2+ channel density, distance from active zone, Ca2+ buffering (calbindin, parvalbumin), and SNARE complex priming state. High-Pr synapses (e.g., climbing fiber-Purkinje) show paired-pulse depression; low-Pr synapses (e.g., parallel fiber) show paired-pulse facilitation.

**Short-term plasticity:** Facilitation (residual Ca2+ hypothesis), depression (vesicle depletion, desensitization), post-tetanic potentiation (mitochondrial Ca2+ release), augmentation (PKC-Munc18-syntaxin).

**Autoreceptor regulation:** D2 (reduce DA synthesis/release), alpha-2 (inhibit NE), 5-HT1A/1B/1D (inhibit 5-HT firing/release), mGluR2/3 (inhibit glutamate release).

### Advanced Receptor Pharmacology

**NMDA receptor subtypes:** GluN1/GluN2A: fast kinetics, high Mg2+ sensitivity (mature synapses). GluN1/GluN2B: slower, higher Ca2+ flux, ifenprodil-sensitive (immature/extrasynaptic). GluN2C/D: lower conductance, reduced Mg2+ block (thalamus/cerebellum). Ketamine/PCP: open-channel blockers; memantine: low-trapping blocker (Alzheimer disease).

**Dopamine receptor signaling:** D1: Gs/Golf->AC->cAMP->PKA->DARPP-32 (Thr34)->PP1 inhibition. D2: Gi/Go->decrease cAMP; beta-gamma->GIRK/Cav2.2; beta-arrestin-2->Akt/GSK-3. Biased agonism: aripiprazole (D2 partial agonist, functional selectivity).

**GABAergic subunit pharmacology:** alpha1: sedation/amnesia (zolpidem target). alpha2/3: anxiolysis, muscle relaxation. alpha5: hippocampal tonic inhibition. delta-containing (extrasynaptic): high-affinity, neurosteroid-sensitive tonic inhibition.

### Synaptic Plasticity -- Molecular Cascades

**LTP induction (Hebbian, NMDA-dependent):** HFS->depolarization+glutamate->Mg2+ block relief->NMDA Ca2+ influx->CaMKII autophosphorylation (Thr286, molecular memory switch). Early LTP: AMPA phosphorylation (Ser831/Ser845) and exocytosis. Late LTP: CREB->BDNF->protein synthesis->structural remodeling.

**STDP:** Pre-before-post (~10-20 ms): LTP (NMDA-dependent). Post-before-pre: LTD (mGluR/endocannabinoid-dependent).

### Integrated Clinical Pharmacology

**Schizophrenia (Esquizofrenia):** DA hypothesis: mesolimbic hyperactivity (positive Sx), mesocortical hypoactivity (negative/cognitive Sx). Typicals (haloperidol): D2 antagonism. Atypicals (clozapine): D2/5-HT2A antagonism. Glutamate hypofunction: NMDA antagonists reproduce symptoms.

**Alzheimer disease (Enfermedad de Alzheimer):** Cholinergic deficit (nucleus basalis degeneration). AChE inhibitors (donepezil, rivastigmine, galantamine); memantine (NMDA antagonist); anti-amyloid antibodies (lecanemab).

**Addiction (Neurobiologia de la adiccion):** Mesolimbic DA convergence: cocaine (DAT blockade), amphetamine (DAT reversal), opioids (VTA disinhibition), nicotine (alpha4-beta2 nAChR). Delta-FosB in NAc drives long-term remodeling.`,
      keyTerms: [
        {
          term: 'Channelopathy',
          definition:
            'A disease caused by mutations in ion channel genes, including epilepsy syndromes, pain disorders, and cardiac arrhythmias',
          relatedTerms: ['SCN1A', 'Dravet syndrome', 'Erythromelalgia'],
        },
        {
          term: 'Biased agonism',
          definition:
            'The concept that a ligand can preferentially activate one intracellular signaling pathway over another at the same receptor, enabling functionally selective drug design',
          relatedTerms: ['Aripiprazole', 'Beta-arrestin', 'Functional selectivity'],
        },
        {
          term: 'CaMKII autophosphorylation',
          definition:
            'Self-phosphorylation of CaMKII at Thr286, rendering it constitutively active independent of Ca2+/calmodulin; considered a molecular memory switch essential for LTP',
        },
        {
          term: 'Spike-timing-dependent plasticity',
          definition:
            'A synaptic learning rule where the relative timing of pre- and postsynaptic action potentials determines whether LTP or LTD is induced, providing a biological implementation of Hebbian learning',
          relatedTerms: ['STDP', 'Hebbian plasticity', 'LTP', 'LTD'],
        },
        {
          term: 'Tonic inhibition',
          definition:
            'Persistent GABAergic inhibition mediated by high-affinity extrasynaptic GABA_A receptors (especially delta-subunit-containing), distinct from phasic synaptic inhibition',
        },
        {
          term: 'Delta-FosB',
          definition:
            'A stable transcription factor that accumulates in nucleus accumbens with chronic drug exposure, driving long-term gene expression changes underlying addiction',
          relatedTerms: ['Addiction', 'Nucleus accumbens', 'Synaptic remodeling'],
        },
      ],
      clinicalNotes:
        'Pharmacogenomics: CYP2D6 poor metabolizers show increased side effects with many psychiatric medications (codeine, tramadol, some SSRIs, haloperidol). Status epilepticus management: first-line benzodiazepines (GABA_A potentiation), second-line phenytoin/fosphenytoin (Na+ channel blockade), refractory: propofol or midazolam infusion. Botulinum toxin type A cleaves SNAP-25; type B cleaves synaptobrevin -- both block ACh release for therapeutic (dystonia, spasticity, cosmetic) and toxic (botulism) effects. Anti-NMDAR encephalitis: autoantibodies against GluN1 subunit cause psychiatric symptoms, seizures, dyskinesias -- treatable with immunotherapy.',
    },
  },

  media: [
    {
      id: 'media-neurotransmission-action-potential',
      type: 'diagram',
      filename: 'action-potential-phases.svg',
      title: 'Phases of the Action Potential',
      description:
        'Diagram showing membrane voltage changes during depolarization, repolarization, and hyperpolarization with corresponding ion channel states.',
    },
    {
      id: 'media-neurotransmission-synapse',
      type: 'diagram',
      filename: 'synaptic-transmission-overview.svg',
      title: 'Synaptic Transmission Overview',
      description:
        'Illustration of presynaptic vesicle release, neurotransmitter diffusion across the synaptic cleft, and postsynaptic receptor binding.',
    },
    {
      id: 'media-neurotransmission-receptor-types',
      type: 'diagram',
      filename: 'ionotropic-vs-metabotropic.svg',
      title: 'Ionotropic vs. Metabotropic Receptors',
      description: 'Comparison of direct ion channel gating versus GPCR second messenger signaling.',
    },
    {
      id: 'media-neurotransmission-dopamine-pathways',
      type: 'diagram',
      filename: 'dopamine-pathways-brain.svg',
      title: 'Major Dopaminergic Pathways',
      description: 'Mesolimbic, mesocortical, nigrostriatal, and tuberoinfundibular DA pathways.',
    },
  ],

  citations: [
    { id: 'cite-kandel', type: 'textbook', title: 'Principles of Neural Science',
      authors: ['Kandel, E.R.', 'Schwartz, J.H.', 'Jessell, T.M.'], source: 'McGraw-Hill', chapter: 'Ch 8-15' },
    { id: 'cite-purves', type: 'textbook', title: 'Neuroscience',
      authors: ['Purves, D.', 'Augustine, G.J.', 'Fitzpatrick, D.'], source: 'Oxford University Press', chapter: 'Ch 5-8' },
    { id: 'cite-stahl', type: 'textbook', title: "Stahl's Essential Psychopharmacology",
      authors: ['Stahl, S.M.'], source: 'Cambridge University Press', chapter: 'Ch 1-5' },
  ],

  crossReferences: [
    {
      targetId: 'physiology-neuron-basics',
      targetType: 'process',
      relationship: 'parent',
      label: 'Neuron Basics',
    },
    {
      targetId: 'physiology-central-nervous-system',
      targetType: 'system',
      relationship: 'related',
      label: 'Central Nervous System',
    },
    {
      targetId: 'physiology-peripheral-nervous-system',
      targetType: 'system',
      relationship: 'related',
      label: 'Peripheral Nervous System',
    },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['physiology', 'pharmacology', 'neuroscience'],
    keywords: [
      'action potential',
      'synaptic transmission',
      'neurotransmitter',
      'acetylcholine',
      'dopamine',
      'serotonin',
      'GABA',
      'glutamate',
      'norepinephrine',
      'receptor pharmacology',
      'ion channels',
      'synaptic plasticity',
      'LTP',
      'reuptake',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'psychiatry', 'pharmacology'],
    },
  },

  createdAt: '2026-01-30',
  updatedAt: '2026-01-30',
  version: 1,
  status: 'published',
  contributors: ['Claude Opus 4.5'],
};
