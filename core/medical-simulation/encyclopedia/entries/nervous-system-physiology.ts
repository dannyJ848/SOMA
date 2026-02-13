/**
 * Nervous System Physiology Encyclopedia Entries
 * 
 * Evidence-based content from OpenStax Anatomy & Physiology (CC BY)
 * and other open-source medical resources.
 */

import type { EncyclopediaEntry } from '../types';

/**
 * Neurotransmission Entry
 * Based on OpenStax A&P Chapter 12 - The Nervous System and Nervous Tissue
 */
export const neurotransmissionEntry: EncyclopediaEntry = {
  entryId: 'neurotransmission',
  name: 'Neurotransmission',
  nameEs: 'Neurotransmision',
  entryType: 'physiology',
  category: 'neurologic',
  summary: 'The process by which neurons communicate with each other and with target cells through electrical and chemical signals.',
  overview: {
    patient: 'Neurotransmission is how nerve cells talk to each other. Think of it like a telephone line where electrical signals travel down the nerve, then chemicals pass the message to the next cell. This happens billions of times every second in your brain and body.',
    intermediate: 'Neurotransmission involves the conversion of electrical signals (action potentials) into chemical signals (neurotransmitter release) at synapses. This process allows neurons to communicate with target cells including other neurons, muscles, and glands.',
    professional: 'Neurotransmission encompasses electrochemical signaling between neurons involving presynaptic depolarization, voltage-gated calcium channel activation, vesicular neurotransmitter release, postsynaptic receptor binding, and subsequent ionotropic or metabotropic signal transduction cascades.',
  },
  content: [
    {
      title: 'Action Potential Propagation',
      content: {
        patient: 'Nerve signals are electrical impulses that travel down the nerve cell like electricity through a wire. When a nerve cell is stimulated, it opens channels that let sodium rush in, making the inside positive. This triggers the next section to do the same, creating a wave of electricity.',
        intermediate: 'Action potentials are generated when membrane potential reaches threshold (-55mV), triggering voltage-gated Na+ channel opening and rapid depolarization. The signal propagates along the axon through sequential channel activation, followed by Na+ channel inactivation and K+ channel-mediated repolarization.',
        professional: 'Action potential propagation involves voltage-gated ion channel dynamics: (1) Threshold depolarization activates NaV channels, causing rapid Na+ influx and membrane depolarization to +30mV; (2) NaV channel inactivation and KV channel activation mediate repolarization; (3) Na+/K+-ATPase restores ion gradients; (4) Myelinated axons exhibit saltatory conduction with nodes of Ranvier showing high NaV channel density.',
      },
    },
    {
      title: 'Synaptic Transmission',
      content: {
        patient: 'When the electrical signal reaches the end of a nerve cell, it causes tiny sacs filled with chemical messengers to release their contents into the gap between cells. These chemicals float across and bind to the next cell, passing on the signal.',
        intermediate: 'Synaptic transmission begins with action potential invasion of the presynaptic terminal, opening voltage-gated Ca2+ channels. Calcium influx triggers synaptic vesicle fusion with the presynaptic membrane via SNARE complex formation, releasing neurotransmitters into the synaptic cleft. These bind to postsynaptic receptors, generating excitatory or inhibitory postsynaptic potentials.',
        professional: 'Synaptic vesicle exocytosis involves: (1) Voltage-gated CaV2.1/CaV2.2 channel activation by depolarization; (2) Ca2+-calmodulin activation of Munc13 and synaptotagmin; (3) SNARE complex (VAMP/synaptobrevin, SNAP-25, syntaxin) mediated vesicle fusion; (4) Quantal neurotransmitter release with probability determined by Ca2+ concentration and readily releasable pool size; (5) Postsynaptic receptor activation (ionotropic: AMPA, NMDA, GABA-A, glycine; metabotropic: mGluR, GABA-B).',
      },
    },
    {
      title: 'Major Neurotransmitters',
      content: {
        patient: 'The brain uses different chemical messengers for different jobs. Glutamate excites cells and is used for learning. GABA calms cells down. Dopamine helps with reward and movement. Serotonin affects mood and sleep. Acetylcholine controls muscles and memory.',
        intermediate: 'Key neurotransmitters include: Glutamate (primary excitatory, ionotropic AMPA/NMDA receptors); GABA (primary inhibitory, GABA-A ionotropic/GABA-B metabotropic); Dopamine (modulatory, D1-D5 receptors, involved in reward and motor control); Serotonin (5-HT receptors, mood regulation); Acetylcholine (NMJ transmission, muscarinic/nicotinic receptors); Norepinephrine (arousal, attention); Endorphins (pain modulation).',
        professional: 'Neurotransmitter systems: (1) Glutamatergic: VGLUT-mediated packaging, ionotropic (AMPA: Na+/K+ flux; NMDA: Ca2+ permeable, Mg2+ blocked) and metabotropic (mGluR1-8) receptors; (2) GABAergic: GAD-synthesized, GABA-A (Cl- channel), GABA-B (Gi/o-coupled); (3) Monoaminergic: Tyrosine hydroxylase pathway (DA, NE, Epi), tryptophan hydroxylase (5-HT), VMAT2 packaging, specific reuptake transporters (DAT, SERT, NET); (4) Cholinergic: ChAT synthesis, VAChT transport, nicotinic (nAChR, ionotropic) and muscarinic (mAChR, G-protein coupled) receptors.',
      },
    },
  ],
  anatomyLinks: [
    { structureId: 'neuron', structureName: 'Neuron', linkText: 'Neuron', relevance: 'Basic functional unit of neurotransmission' },
    { structureId: 'synapse', structureName: 'Synapse', linkText: 'Synapse', relevance: 'Site of interneuronal communication' },
    { structureId: 'axon', structureName: 'Axon', linkText: 'Axon', relevance: 'Conducts action potentials' },
    { structureId: 'dendrite', structureName: 'Dendrite', linkText: 'Dendrite', relevance: 'Receives synaptic inputs' },
  ],
  references: [
    {
      referenceId: 'openstax-ap-12',
      type: 'textbook',
      title: 'Anatomy and Physiology - Chapter 12: The Nervous System and Nervous Tissue',
      authors: 'Betts JG, et al.',
      source: 'OpenStax',
      year: 2021,
      url: 'https://openstax.org/books/anatomy-and-physiology/pages/12-introduction',
      citation: 'Betts JG, et al. Anatomy and Physiology - Chapter 12: The Nervous System and Nervous Tissue. OpenStax; 2021.',
    },
    {
      referenceId: 'kandel-5th',
      type: 'textbook',
      title: 'Principles of Neural Science',
      authors: 'Kandel ER, Schwartz JH, Jessell TM',
      source: 'McGraw-Hill',
      year: 2013,
      citation: 'Kandel ER, Schwartz JH, Jessell TM. Principles of Neural Science. McGraw-Hill; 2013.',
    },
  ],
  relatedEntries: [
    { entryId: 'action-potential', entryType: 'physiology', name: 'Action Potential', relationship: 'part-of' },
    { entryId: 'synaptic-transmission', entryType: 'physiology', name: 'Synaptic Transmission', relationship: 'part-of' },
    { entryId: 'neurotransmitters', entryType: 'physiology', name: 'Neurotransmitters', relationship: 'part-of' },
    { entryId: 'neuron', entryType: 'anatomy', name: 'Neuron', relationship: 'part-of' },
  ],
  searchMetadata: {
    primaryKeywords: ['neurotransmission', 'synaptic signaling', 'nerve impulse', 'electrochemical signaling'],
    tags: ['neuroscience', 'physiology', 'synapse', 'signaling'],
    synonyms: ['neural transmission', 'synaptic transmission', 'nerve signaling'],
  },
};

/**
 * Action Potential Entry
 */
export const actionPotentialEntry: EncyclopediaEntry = {
  entryId: 'action-potential',
  name: 'Action Potential',
  nameEs: 'Potencial de Accion',
  entryType: 'physiology',
  category: 'neurologic',
  summary: 'A rapid, transient change in membrane potential that propagates along the axon of a neuron.',
  overview: {
    patient: 'An action potential is a brief electrical impulse that travels down a nerve fiber. It\'s like a wave of electricity that carries messages from one part of the body to another. All-or-none principle means it either happens fully or not at all.',
    intermediate: 'Action potentials are rapid, all-or-none depolarizations of the neuronal membrane that propagate along axons. They are generated by voltage-gated ion channels and follow a characteristic pattern: depolarization, repolarization, and hyperpolarization phases.',
    professional: 'Action potentials are regenerative electrical signals mediated by voltage-gated ion channels (NaV, KV) exhibiting all-or-none behavior with stereotyped amplitude and duration. Propagation occurs through local circuit currents depolarizing adjacent membrane regions to threshold.',
  },
  content: [
    {
      title: 'Ion Channel Dynamics',
      content: {
        patient: 'Special proteins in the nerve cell membrane act like gates. Sodium gates open to let positive charge in, then potassium gates open to let positive charge out, resetting the cell for the next signal.',
        intermediate: 'Voltage-gated Na+ channels activate rapidly upon depolarization to threshold (-55mV), causing Na+ influx and further depolarization. These channels then inactivate. Delayed voltage-gated K+ channels open, allowing K+ efflux and repolarization.',
        professional: 'NaV channel gating involves: (1) Activation m-gates open with depolarization (time constant ~0.1ms); (2) Inactivation h-gates close with depolarization (time constant ~1ms); (3) KV n-gates open slowly, mediating repolarization; (4) Absolute refractory period: NaV inactivation prevents re-excitation; (5) Relative refractory period: KV activation requires stronger stimulus.',
      },
    },
    {
      title: 'Propagation',
      content: {
        patient: 'The nerve signal travels like a domino effect - each section stimulates the next. In nerves with myelin (insulation), the signal jumps from gap to gap, making it much faster.',
        intermediate: 'Action potentials propagate unidirectionally through local circuit currents depolarizing adjacent membrane. Myelinated axons exhibit saltatory conduction - action potentials "jump" between nodes of Ranvier where NaV channels are concentrated, increasing conduction velocity up to 120 m/s.',
        professional: 'Conduction velocity determinants: (1) Axon diameter (proportional to square root in unmyelinated, linear in myelinated); (2) Myelination (increases membrane resistance and reduces capacitance); (3) Temperature (Q10 ~1.5-2.0); (4) Space constant λ = √(Rm/Ra) determines electrotonic spread; (5) Time constant τ = Rm × Cm determines membrane response speed.',
      },
    },
  ],
  anatomyLinks: [
    { structureId: 'axon', structureName: 'Axon', linkText: 'Axon', relevance: 'Conducts action potentials' },
    { structureId: 'myelin-sheath', structureName: 'Myelin Sheath', linkText: 'Myelin Sheath', relevance: 'Insulates and speeds conduction' },
    { structureId: 'node-of-ranvier', structureName: 'Node of Ranvier', linkText: 'Node of Ranvier', relevance: 'Action potential generation sites in myelinated fibers' },
  ],
  references: [
    {
      referenceId: 'openstax-ap-12-4',
      type: 'textbook',
      title: 'Anatomy and Physiology - 12.4 The Action Potential',
      authors: 'Betts JG, et al.',
      source: 'OpenStax',
      year: 2021,
      url: 'https://openstax.org/books/anatomy-and-physiology/pages/12-4-the-action-potential',
      citation: 'Betts JG, et al. Anatomy and Physiology - 12.4 The Action Potential. OpenStax; 2021.',
    },
  ],
  relatedEntries: [
    { entryId: 'neurotransmission', entryType: 'physiology', name: 'Neurotransmission', relationship: 'see-also' },
    { entryId: 'neuron', entryType: 'anatomy', name: 'Neuron', relationship: 'part-of' },
    { entryId: 'myelin', entryType: 'anatomy', name: 'Myelin Sheath', relationship: 'part-of' },
  ],
  searchMetadata: {
    primaryKeywords: ['action potential', 'nerve impulse', 'electrical signaling', 'depolarization'],
    tags: ['neuroscience', 'physiology', 'electrophysiology'],
    synonyms: ['spike', 'nerve signal', 'impulse'],
    abbreviations: ['AP'],
  },
};

/**
 * Synaptic Transmission Entry
 */
export const synapticTransmissionEntry: EncyclopediaEntry = {
  entryId: 'synaptic-transmission',
  name: 'Synaptic Transmission',
  nameEs: 'Transmision Sinaptica',
  entryType: 'physiology',
  category: 'neurologic',
  summary: 'The process of transferring signals from one neuron to another across a synapse.',
  overview: {
    patient: 'Synaptic transmission is how nerve cells pass messages to each other at their connection points called synapses. The first cell releases chemicals that the second cell detects, continuing the signal.',
    intermediate: 'Synaptic transmission converts electrical signals (action potentials) into chemical signals (neurotransmitter release) and back to electrical signals in the postsynaptic neuron. This occurs at specialized junctions called synapses.',
    professional: 'Synaptic transmission encompasses calcium-triggered exocytosis of synaptic vesicles containing neurotransmitters, quantal release into the synaptic cleft, and ligand-gated receptor activation on the postsynaptic membrane generating graded potentials.',
  },
  content: [
    {
      title: 'Presynaptic Mechanisms',
      content: {
        patient: 'When the electrical signal reaches the nerve ending, it opens calcium channels. Calcium triggers little bubbles (vesicles) filled with message chemicals to fuse with the membrane and release their contents.',
        intermediate: 'Depolarization opens voltage-gated Ca2+ channels (N-type and P/Q-type). Ca2+ binds to synaptotagmin, triggering SNARE complex formation and vesicle fusion. Neurotransmitters are released via exocytosis into the synaptic cleft (20-40nm wide).',
        professional: 'Presynaptic Ca2+ signaling: (1) CaV2.1 (P/Q-type) and CaV2.2 (N-type) channels cluster at active zones; (2) Ca2+ microdomains reach 10-100 μM locally; (3) Synaptotagmin-1/2 act as Ca2+ sensors (KD ~10-50 μM); (4) SNARE complex drives membrane fusion: synaptobrevin/VAMP-2 on vesicle, syntaxin-1 and SNAP-25 on plasma membrane; (5) Complexin stabilizes partially zippered SNAREs until Ca2+ trigger.',
      },
    },
    {
      title: 'Postsynaptic Mechanisms',
      content: {
        patient: 'The receiving cell has special receivers (receptors) that detect the chemical messengers. Some open channels directly, while others trigger internal changes through signaling cascades.',
        intermediate: 'Neurotransmitters bind to receptors: Ionotropic receptors (ligand-gated ion channels) directly alter membrane potential (fast, milliseconds). Metabotropic receptors (G-protein coupled) activate second messenger cascades (slow, seconds to minutes).',
        professional: 'Postsynaptic receptor types: (1) Ionotropic: AMPA (Na+/K+, fast EPSP), NMDA (Ca2+ permeable, Mg2+ blocked, coincidence detector), GABA-A (Cl-, IPSP), glycine (Cl-, IPSP); (2) Metabotropic: mGluR (Group I: PLC/IP3/DAG; Group II/III: cAMP inhibition), GABA-B (Gi/o, K+ channel activation). Postsynaptic density (PSD) contains scaffold proteins (PSD-95, GKAP) organizing receptors and signaling molecules.',
      },
    },
  ],
  anatomyLinks: [
    { structureId: 'synapse', structureName: 'Synapse', linkText: 'Synapse', relevance: 'Site of transmission' },
    { structureId: 'synaptic-vesicle', structureName: 'Synaptic Vesicle', linkText: 'Synaptic Vesicle', relevance: 'Neurotransmitter storage' },
    { structureId: 'postsynaptic-density', structureName: 'Postsynaptic Density', linkText: 'Postsynaptic Density', relevance: 'Receptor organization' },
  ],
  references: [
    {
      referenceId: 'openstax-ap-12-5',
      type: 'textbook',
      title: 'Anatomy and Physiology - 12.5 Communication Between Neurons',
      authors: 'Betts JG, et al.',
      source: 'OpenStax',
      year: 2021,
      url: 'https://openstax.org/books/anatomy-and-physiology/pages/12-5-communication-between-neurons',
      citation: 'Betts JG, et al. Anatomy and Physiology - 12.5 Communication Between Neurons. OpenStax; 2021.',
    },
    {
      referenceId: 'sudhof-2013',
      type: 'journal-article',
      title: 'Neurotransmitter Release: The Last Millisecond in the Life of a Synaptic Vesicle',
      authors: 'Südhof TC',
      source: 'Neuron',
      year: 2013,
      citation: 'Südhof TC. Neurotransmitter Release: The Last Millisecond in the Life of a Synaptic Vesicle. Neuron. 2013.',
    },
  ],
  relatedEntries: [
    { entryId: 'neurotransmission', entryType: 'physiology', name: 'Neurotransmission', relationship: 'see-also' },
    { entryId: 'neurotransmitters', entryType: 'physiology', name: 'Neurotransmitters', relationship: 'part-of' },
    { entryId: 'action-potential', entryType: 'physiology', name: 'Action Potential', relationship: 'causes' },
  ],
  searchMetadata: {
    primaryKeywords: ['synaptic transmission', 'synapse', 'neurotransmitter release', 'chemical synapse'],
    tags: ['neuroscience', 'physiology', 'synapse'],
    synonyms: ['synaptic signaling', 'neurotransmission'],
  },
};

/**
 * Neurotransmitters Overview Entry
 */
export const neurotransmittersEntry: EncyclopediaEntry = {
  entryId: 'neurotransmitters',
  name: 'Neurotransmitters',
  nameEs: 'Neurotransmisores',
  entryType: 'physiology',
  category: 'neurologic',
  summary: 'Chemical messengers that transmit signals across a chemical synapse between neurons and target cells.',
  overview: {
    patient: 'Neurotransmitters are the brain\'s chemical messengers. They carry signals between nerve cells and help control everything from muscle movement to mood. Different neurotransmitters do different jobs - some excite, some calm, some regulate.',
    intermediate: 'Neurotransmitters are endogenous chemicals that enable neurotransmission. They are synthesized in neurons, stored in vesicles, released in response to action potentials, and bind to specific receptors. Major classes include amino acids, monoamines, peptides, and acetylcholine.',
    professional: 'Neurotransmitters are chemical signaling molecules synthesized from precursor compounds through enzymatic pathways, packaged into synaptic vesicles by vesicular transporters (VMAT, VGLUT, VAChT), released by calcium-dependent exocytosis, and acting on specific receptor classes (ionotropic and metabotropic).',
  },
  content: [
    {
      title: 'Glutamate - The Main Excitatory Transmitter',
      content: {
        patient: 'Glutamate is the brain\'s main "go" signal. It excites cells and is crucial for learning and memory. Too much glutamate can damage cells, so the brain carefully controls its levels.',
        intermediate: 'Glutamate is the primary excitatory neurotransmitter in the CNS (used by ~50% of synapses). It acts through ionotropic receptors (AMPA, NMDA, kainate) and metabotropic receptors (mGluR1-8). Excessive glutamate causes excitotoxicity through calcium overload.',
        professional: 'Glutamatergic transmission: (1) Synthesis from glutamine by glutaminase; (2) VGLUT1-3 vesicular packaging; (3) AMPA receptors: fast EPSP (Na+/K+); (4) NMDA receptors: high Ca2+ permeability, voltage-dependent Mg2+ block, coincidence detection; (5) mGluRs: Group I (PLCβ, IP3, DAG), Group II/III (Gi/o, inhibit cAMP); (6) Clearance by EAAT1-5 transporters (astrocytes and neurons); (7) Excitotoxicity via excessive Ca2+ influx activating calpains and caspases.',
      },
    },
    {
      title: 'GABA - The Main Inhibitory Transmitter',
      content: {
        patient: 'GABA is the brain\'s main "stop" signal. It calms down nerve cells and prevents overstimulation. Without enough GABA, people can feel anxious or have seizures.',
        intermediate: 'GABA (gamma-aminobutyric acid) is the primary inhibitory neurotransmitter in the CNS. GABA-A receptors are ionotropic (Cl- channels) producing fast inhibition. GABA-B receptors are metabotropic (Gi/o-coupled) producing slow, prolonged inhibition through K+ channels.',
        professional: 'GABAergic transmission: (1) Synthesis from glutamate by GAD65/67 (glutamic acid decarboxylase); (2) Vesicular GABA transporter (VGAT) packaging; (3) GABA-A: pentameric ligand-gated Cl- channels (α, β, γ, δ subunits), site of benzodiazepine and barbiturate action; (4) GABA-B: GPCR heterodimers (GB1/GB2), Gi/o-coupled, activate Kir3 K+ channels, inhibit CaV2 channels; (5) GABA transporters GAT1-3 for reuptake; (6) Tonic inhibition by extrasynaptic GABA-A receptors containing δ subunits.',
      },
    },
    {
      title: 'Monoamines - Modulatory Systems',
      content: {
        patient: 'Dopamine, serotonin, and norepinephrine are chemical messengers that modulate brain activity. Dopamine affects reward and movement. Serotonin affects mood and sleep. Norepinephrine keeps us alert and focused.',
        intermediate: 'Monoamines are neuromodulators synthesized from aromatic amino acids. They have widespread projections from brainstem nuclei and modulate neural circuits rather than direct fast transmission. Dysfunction is implicated in Parkinson\'s disease, depression, and ADHD.',
        professional: 'Monoaminergic systems: (1) Dopamine: Substantia nigra pars compacta (nigrostriatal, motor), ventral tegmental area (mesolimbic/mesocortical, reward), hypothalamus (tuberoinfundibular); D1-like (Gs, excite) vs D2-like (Gi, inhibit) receptors; (2) Serotonin: Raphe nuclei, 14 receptor subtypes (5-HT1-7), SSRIs block SERT; (3) Norepinephrine: Locus coeruleus, diffuse projections, α1 (Gq), α2 (Gi), β (Gs) receptors; (4) All use VMAT2 for vesicular packaging and specific reuptake transporters (DAT, SERT, NET).',
      },
    },
  ],
  anatomyLinks: [
    { structureId: 'synapse', structureName: 'Synapse', linkText: 'Synapse', relevance: 'Site of neurotransmitter action' },
    { structureId: 'synaptic-vesicle', structureName: 'Synaptic Vesicle', linkText: 'Synaptic Vesicle', relevance: 'Storage and release' },
    { structureId: 'raphe-nuclei', structureName: 'Raphe Nuclei', linkText: 'Raphe Nuclei', relevance: 'Serotonin source' },
    { structureId: 'substantia-nigra', structureName: 'Substantia Nigra', linkText: 'Substantia Nigra', relevance: 'Dopamine source' },
  ],
  references: [
    {
      referenceId: 'openstax-ap-12-5',
      type: 'textbook',
      title: 'Anatomy and Physiology - 12.5 Communication Between Neurons',
      authors: 'Betts JG, et al.',
      source: 'OpenStax',
      year: 2021,
      url: 'https://openstax.org/books/anatomy-and-physiology/pages/12-5-communication-between-neurons',
      citation: 'Betts JG, et al. Anatomy and Physiology - 12.5 Communication Between Neurons. OpenStax; 2021.',
    },
    {
      referenceId: 'purves-neurosci',
      type: 'textbook',
      title: 'Neuroscience',
      authors: 'Purves D, et al.',
      source: 'Sinauer Associates',
      year: 2018,
      citation: 'Purves D, et al. Neuroscience. Sinauer Associates; 2018.',
    },
  ],
  relatedEntries: [
    { entryId: 'neurotransmission', entryType: 'physiology', name: 'Neurotransmission', relationship: 'see-also' },
    { entryId: 'synaptic-transmission', entryType: 'physiology', name: 'Synaptic Transmission', relationship: 'see-also' },
    { entryId: 'glutamate', entryType: 'physiology', name: 'Glutamate', relationship: 'similar-to' },
    { entryId: 'gaba', entryType: 'physiology', name: 'GABA', relationship: 'similar-to' },
    { entryId: 'dopamine', entryType: 'physiology', name: 'Dopamine', relationship: 'similar-to' },
    { entryId: 'serotonin', entryType: 'physiology', name: 'Serotonin', relationship: 'similar-to' },
  ],
  searchMetadata: {
    primaryKeywords: ['neurotransmitters', 'chemical messengers', 'synaptic signaling', 'glutamate', 'GABA'],
    tags: ['neuroscience', 'biochemistry', 'signaling'],
    synonyms: ['neurotransmitter', 'neuromodulator', 'chemical transmitter'],
  },
};

// Export all entries
export const nervousSystemPhysiologyEntries: EncyclopediaEntry[] = [
  neurotransmissionEntry,
  actionPotentialEntry,
  synapticTransmissionEntry,
  neurotransmittersEntry,
];
