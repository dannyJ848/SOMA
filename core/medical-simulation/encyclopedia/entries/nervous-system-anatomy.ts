/**
 * Nervous System Anatomy Encyclopedia Entries
 * 
 * Transcribed from OpenStax Anatomy & Physiology (CC BY 4.0)
 * This content is stored locally in the app for offline access.
 */

import type { EncyclopediaEntry } from '../types';

/**
 * Neuron Entry - Complete neuron structure and function
 */
export const neuronEntry: EncyclopediaEntry = {
  entryId: 'neuron',
  name: 'Neuron',
  entryType: 'anatomy',
  category: 'neurologic',
  summary: 'The functional cell of the nervous system responsible for electrical and chemical signaling.',
  overview: {
    patient: 'Neurons are the brain and nerve cells that carry messages throughout your body. They have a cell body with long extensions that send and receive signals. Think of them like tiny wires that connect your brain to every part of your body, allowing you to move, feel, and think.',
    intermediate: 'Neurons are electrically excitable cells that transmit information through electrochemical signaling. They consist of a cell body (soma), dendrites that receive input, and an axon that transmits signals to other cells. Neurons communicate at synapses using neurotransmitters.',
    professional: 'Neurons are the fundamental functional units of the nervous system, specialized for electrochemical information processing and transmission. They exhibit polarized morphology with dendritic input zones, a soma containing the nucleus and metabolic machinery, and an axonal output zone capable of propagating action potentials over long distances.',
  },
  content: [
    {
      title: 'Parts of a Neuron',
      content: {
        patient: `A neuron has three main parts: (1) The cell body (soma) contains the nucleus and keeps the cell alive. (2) Dendrites are branch-like extensions that receive messages from other neurons. (3) The axon is a long fiber that carries signals away to other cells. At the end of the axon are terminal branches that pass the signal to the next cell in line.`,
        intermediate: `The soma (cell body) contains the nucleus and major organelles responsible for metabolic functions. Dendrites are highly branched processes that receive synaptic input from other neurons. The axon is a single process (with rare exceptions) that conducts action potentials away from the cell body. The axon hillock is the tapering region where the axon emerges and serves as the spike initiation zone. Axon terminals contain synaptic vesicles and form synapses with target cells.`,
        professional: `Structural components: (1) Soma - contains nucleus, rough ER (Nissl bodies), Golgi apparatus, mitochondria; cytoskeletal elements include neurofilaments and microtubules; (2) Dendrites - arborizing processes containing dendritic spines (postsynaptic specializations); cytosolic composition similar to soma; (3) Axon - uniform diameter, axoplasm contains neurofilaments, microtubules, mitochondria, smooth ER; axon hillock/initial segment has high NaV channel density; (4) Axon terminals - contain synaptic vesicles, active zones, mitochondria; (5) Myelin sheath - lipid-rich membrane wrapping formed by oligodendrocytes (CNS) or Schwann cells (PNS); nodes of Ranvier are unmyelinated gaps with high channel density.`,
      },
    },
    {
      title: 'Neuron Classification by Polarity',
      content: {
        patient: `Neurons come in different shapes based on how many extensions they have. Multipolar neurons have many branches and are the most common. Bipolar neurons have two extensions and are found in special senses like vision and smell. Unipolar (or pseudo-unipolar) neurons have one extension that splits into two branches and carry sensory information like touch and pain.`,
        intermediate: `Multipolar neurons possess one axon and multiple dendrites; they are the most abundant type in the CNS (e.g., motor neurons, pyramidal cells, Purkinje cells). Bipolar neurons have one axon and one dendrite extending from opposite poles; found in retina, olfactory epithelium, and vestibulocochlear ganglia. Pseudo-unipolar neurons have a single process that bifurcates into peripheral and central branches; cell bodies reside in dorsal root ganglia and cranial nerve ganglia; functionally sensory.`,
        professional: `Classification by process number: (1) Multipolar - single axon, multiple dendritic trees; includes projection neurons (motor, pyramidal), interneurons, and most CNS neurons; (2) Bipolar - single axon, single dendrite; specialized sensory transduction (photoreceptors, olfactory receptor neurons, hair cells); (3) Pseudo-unipolar - single process bifurcating into T-shape; peripheral branch with sensory endings, central branch entering CNS; exclusively primary sensory neurons from somatic and visceral structures; (4) Anaxonic - small neurons lacking distinguishable axon; all processes similar; CNS interneurons (retina amacrine cells, olfactory granule cells).`,
      },
    },
    {
      title: 'Gray Matter and White Matter',
      content: {
        patient: `The nervous system has two types of tissue that look different. Gray matter contains mostly cell bodies and looks darker. White matter contains mostly axons covered in myelin (a fatty insulation) and looks white or pale. The brain has gray matter on the outside (cerebral cortex) and white matter inside, while the spinal cord has the opposite arrangement.`,
        intermediate: `Gray matter consists of neuronal cell bodies, dendrites, unmyelinated axons, and glial cells; it appears pinkish-tan in fresh tissue due to blood content. White matter is composed predominantly of myelinated axons; the lipid content of myelin gives it a white appearance. In the brain, gray matter forms the cerebral cortex and deep nuclei, with white matter tracts beneath. The spinal cord has central gray matter (butterfly-shaped) surrounded by white matter columns.`,
        professional: `Structural organization: (1) Gray matter - contains neuronal somata, dendritic arborizations, unmyelinated axons, synaptic neuropil, astrocytes, microglia; capillary density is high; metabolic demand is elevated; (2) White matter - composed of myelinated axons (tracts/fasciculi), oligodendrocytes, astrocytes; organized into commissural, association, and projection fiber systems; myelin consists of compacted oligodendrocyte/Schwann cell membranes (70% lipid, 30% protein); nodes of Ranvier, paranodes, and juxtaparanodes have distinct molecular specializations; (3) Regional variations - cerebral cortex (6-layered neocortex), cerebellar cortex (3-layered with Purkinje cells), spinal cord gray matter (dorsal/ventral horns, intermediate zone).`,
      },
    },
    {
      title: 'Nuclei, Ganglia, Tracts, and Nerves',
      content: {
        patient: `Groups of neuron cell bodies have different names depending on location. In the brain and spinal cord, they're called nuclei. In the periphery, they're called ganglia. Bundles of axons also have different names: tracts in the CNS and nerves in the PNS. For example, the optic nerve becomes the optic tract once it enters the brain, but it's the same axons.`,
        intermediate: `A nucleus (plural: nuclei) is a localized collection of neuron cell bodies within the CNS (e.g., caudate nucleus, dentate nucleus). A ganglion (plural: ganglia) is a cluster of neuron cell bodies in the PNS (e.g., dorsal root ganglion, trigeminal ganglion). A tract is a bundle of axons within the CNS (e.g., corticospinal tract, spinothalamic tract). A nerve is a bundle of axons in the PNS (e.g., sciatic nerve, vagus nerve). The same axons can change names at anatomical boundaries (e.g., optic nerve → optic chiasm → optic tract).`,
        professional: `Anatomical terminology: (1) CNS cell body aggregations - nuclei (compact collections like basal ganglia) or layers/laminae (cortical arrangements); exceptions include "basal ganglia" (historical term for basal nuclei: caudate, putamen, globus pallidus); (2) PNS cell body aggregations - ganglia (sensory: dorsal root, cranial nerve; autonomic: sympathetic chain, prevertebral, terminal/intramural); (3) CNS axon bundles - tracts (fasciculi, peduncles, lemnisci, pathways); white matter organization includes commissural (corpus callosum), association (arcuate fasciculus), projection (internal capsule); (4) PNS axon bundles - nerves (spinal nerves, cranial nerves, peripheral nerve branches); connective tissue organization: endoneurium (around single fibers), perineurium (around fascicles), epineurium (around whole nerve).`,
      },
    },
  ],
  anatomyLinks: [
    { structureId: 'dendrite', structureName: 'Dendrite', linkText: 'Dendrite', relevance: 'Input-receiving processes of neuron' },
    { structureId: 'axon', structureName: 'Axon', linkText: 'Axon', relevance: 'Signal-conducting output fiber' },
    { structureId: 'synapse', structureName: 'Synapse', linkText: 'Synapse', relevance: 'Site of interneuronal communication' },
    { structureId: 'myelin', structureName: 'Myelin Sheath', linkText: 'Myelin', relevance: 'Axonal insulation' },
  ],
  references: [
    {
      referenceId: 'openstax-ap-12-2',
      type: 'textbook',
      title: 'Anatomy and Physiology - 12.2 Nervous Tissue',
      authors: 'Betts JG, et al.',
      source: 'OpenStax',
      year: 2021,
      url: 'https://openstax.org/books/anatomy-and-physiology/pages/12-2-nervous-tissue',
      citation: 'Betts JG, et al. Anatomy and Physiology. 12.2 Nervous Tissue. OpenStax; 2021.',
    },
  ],
  relatedEntries: [
    { entryId: 'neurotransmission', entryType: 'physiology', name: 'Neurotransmission', relationship: 'see-also' },
    { entryId: 'action-potential', entryType: 'physiology', name: 'Action Potential', relationship: 'see-also' },
    { entryId: 'neuroglia', entryType: 'anatomy', name: 'Neuroglia', relationship: 'see-also' },
    { entryId: 'synaptic-transmission', entryType: 'physiology', name: 'Synaptic Transmission', relationship: 'see-also' },
  ],
  searchMetadata: {
    primaryKeywords: ['neuron', 'nerve cell', 'neuronal structure', 'axon', 'dendrite', 'soma'],
    tags: ['neuroscience', 'anatomy', 'histology', 'cell-biology'],
    synonyms: ['neurone', 'nerve cell', 'neural cell'],
  },
};

/**
 * Glial Cells Entry
 */
export const glialCellsEntry: EncyclopediaEntry = {
  entryId: 'neuroglia',
  name: 'Neuroglia (Glial Cells)',
  entryType: 'anatomy',
  category: 'neurologic',
  summary: 'Supporting cells of the nervous system that provide structural support, nutrition, and protection for neurons.',
  overview: {
    patient: 'Glial cells are the support cells of the nervous system. They outnumber neurons and provide important functions like insulation, nutrition, cleanup, and protection. There are different types in the brain (astrocytes, oligodendrocytes, microglia, ependymal cells) and in the peripheral nerves (Schwann cells, satellite cells).',
    intermediate: 'Glial cells (neuroglia) are non-neuronal cells that provide support and protection for neurons. CNS glia include: astrocytes (blood-brain barrier, ion homeostasis), oligodendrocytes (myelination), microglia (immune defense), and ependymal cells (CSF production/circulation). PNS glia include: Schwann cells (myelination) and satellite cells (support ganglia).',
    professional: 'Neuroglia are non-excitable cells comprising approximately 50% of CNS volume, outnumbering neurons. They provide structural scaffolding, metabolic support, ion homeostasis, immune surveillance, and myelination. Specific types exhibit distinct developmental origins, molecular markers, and functional specializations.',
  },
  content: [
    {
      title: 'Astrocytes',
      content: {
        patient: `Astrocytes are star-shaped cells that are the most abundant glial cells in the brain. They help form the blood-brain barrier, regulate the chemical environment around neurons, and provide nutrients. They also help repair and scarring after injury.`,
        intermediate: `Astrocytes are the most numerous glial cells in the CNS. They have star-shaped morphology with many processes. Functions include: (1) forming the blood-brain barrier via end-feet on capillaries; (2) regulating extracellular K+ concentration; (3) taking up and recycling glutamate and GABA; (4) glycogen storage and lactate provision to neurons; (5) releasing gliotransmitters; (6) responding to injury (reactive astrogliosis).`,
        professional: `Astrocyte characteristics: (1) Morphology - protoplasmic (gray matter) and fibrous (white matter) types; express GFAP (glial fibrillary acidic protein); (2) End-feet - perivascular processes enveloping capillaries, controlling BBB permeability; (3) Ion homeostasis - Kir4.1 K+ channels buffer extracellular K+; (4) Neurotransmitter uptake - EAAT1/2 glutamate transporters, GAT-3 GABA transporter; (5) Metabolic coupling - glycogenolysis producing lactate for neuronal oxidative phosphorylation; (6) Gliotransmission - release of ATP, D-serine, glutamate via Ca2+-dependent exocytosis; (7) Tripartite synapse - astrocytic processes ensheathing synapses modulating transmission; (8) Reactive astrogliosis - hypertrophy, proliferation, scar formation post-injury.`,
      },
    },
    {
      title: 'Oligodendrocytes and Schwann Cells',
      content: {
        patient: `These cells produce myelin, the fatty insulation around axons. Oligodendrocytes are in the brain and spinal cord, wrapping myelin around multiple nearby axons. Schwann cells are in the peripheral nerves, each wrapping just one segment of a single axon. Myelin helps nerve signals travel faster.`,
        intermediate: `Oligodendrocytes (CNS) myelinate multiple axons (up to 50). Each oligodendrocyte extends processes to wrap axons with myelin. Schwann cells (PNS) myelinate single axons; one Schwann cell forms one internode between nodes of Ranvier. Myelin consists of compacted glial cell membranes rich in lipids (sphingomyelin, cholesterol) and proteins (MBP, PLP in CNS; P0, PMP22 in PNS). Myelination increases conduction velocity via saltatory conduction.`,
        professional: `Myelin-forming cells: (1) Oligodendrocytes - originate from OPCs (NG2+ cells); each oligodendrocyte myelinates 10-50 axons; paranodal junctions contain Caspr and contactin; major dense line compaction via MBP; intraperiod line via PLP/DM20; cannot degrade myelin (microglia/macrophages required); (2) Schwann cells - neural crest origin; one Schwann cell per internode; basal lamina surrounds each cell; nodes of Ranvier contain axonal NaV channels and glial CAMs; Remak cells ensheath unmyelinated C fibers; produce neurotrophins (NGF, BDNF); can dedifferentiate and remyelinate after injury; (3) Myelin composition - 70% lipid (cholesterol, galactocerebroside, sulfatide), 30% protein; PNS myelin has more compact spacing than CNS.`,
      },
    },
    {
      title: 'Microglia',
      content: {
        patient: `Microglia are the immune cells of the nervous system. They constantly patrol the brain looking for infections, damage, or debris. When they find problems, they activate and clean up by engulfing debris (phagocytosis). They also help shape neural circuits during development by pruning unnecessary connections.`,
        intermediate: `Microglia are the resident macrophages of the CNS, derived from yolk sac progenitors. They have ramified morphology in resting state with constant process motility surveying the environment. Upon activation (by injury, infection, or neurodegeneration), they transform to amoeboid phagocytic phenotype. Functions include: phagocytosis of debris and pathogens, antigen presentation, release of inflammatory mediators, and synaptic pruning during development.`,
        professional: `Microglia characteristics: (1) Origin - primitive yolk sac macrophages (not bone marrow-derived in steady state); self-renewing population; (2) Markers - Iba1, CD11b, CX3CR1, P2RY12; (3) Surveillance - process extension/retraction monitoring local environment; respond to ATP, neurotransmitters, cytokines; (4) Activation states - M1 (pro-inflammatory: TNF-α, IL-6, iNOS, ROS) vs M2 (anti-inflammatory/reparative: IL-10, TGF-β, arginase); (5) Phagocytosis - complement receptor 3 (CD11b/CD18), Fc receptors, scavenger receptors; clear apoptotic cells, myelin debris, protein aggregates; (6) Synaptic pruning - complement C1q and C3 tagging weak synapses for elimination during development; (7) Neurodegeneration - chronic activation in Alzheimer\'s, Parkinson\'s, ALS.`,
      },
    },
    {
      title: 'Ependymal Cells',
      content: {
        patient: `Ependymal cells line the fluid-filled spaces (ventricles) inside the brain and the central canal of the spinal cord. They have cilia (tiny hair-like structures) that help circulate the cerebrospinal fluid (CSF). Some specialized ependymal cells in the ventricles help produce CSF.`,
        intermediate: `Ependymal cells form the epithelial lining (ependyma) of the ventricles and central canal. They are cuboidal to columnar epithelial cells with cilia on their apical surface. Ciliary beating contributes to CSF circulation. Specialized ependymal cells of the choroid plexus (modified by tight junctions and blood vessels) produce CSF. Ependymal cells also function as neural stem cells in some regions.`,
        professional: `Ependymal cell types: (1) Ependymocytes - cuboidal/columnar epithelium lining ventricles; apical surface with 9+2 motile cilia and microvilli; basal processes contact astrocytes; tight junctions prevent paracellular diffusion; ciliary beating creates CSF flow; (2) Choroid plexus epithelium - modified ependymal cells with extensive microvilli and tight junctions; highly vascularized by fenestrated capillaries; active transport of ions (Na+, K+, Cl-, HCO3-) and water creates CSF; produce growth factors (IGF-2, transferrin); (3) Tanycytes - specialized ependymal cells in third ventricle floor with long basal processes contacting hypothalamic nuclei and portal blood; transport hormones and metabolites; (4) Adult neurogenesis - subventricular zone ependymal-like cells serve as neural stem cells producing olfactory bulb interneurons and cortex glia.`,
      },
    },
  ],
  anatomyLinks: [
    { structureId: 'myelin', structureName: 'Myelin Sheath', linkText: 'Myelin', relevance: 'Axonal insulation by oligodendrocytes/Schwann cells' },
    { structureId: 'blood-brain-barrier', structureName: 'Blood-Brain Barrier', linkText: 'Blood-Brain Barrier', relevance: 'Formed by astrocyte end-feet' },
    { structureId: 'choroid-plexus', structureName: 'Choroid Plexus', linkText: 'Choroid Plexus', relevance: 'CSF-producing ependymal tissue' },
  ],
  references: [
    {
      referenceId: 'openstax-ap-12-2-glia',
      type: 'textbook',
      title: 'Anatomy and Physiology - 12.2 Nervous Tissue (Glial Cells)',
      authors: 'Betts JG, et al.',
      source: 'OpenStax',
      year: 2021,
      url: 'https://openstax.org/books/anatomy-and-physiology/pages/12-2-nervous-tissue',
      citation: 'Betts JG, et al. Anatomy and Physiology. 12.2 Nervous Tissue. OpenStax; 2021.',
    },
  ],
  relatedEntries: [
    { entryId: 'neuron', entryType: 'anatomy', name: 'Neuron', relationship: 'part-of' },
    { entryId: 'myelin', entryType: 'anatomy', name: 'Myelin Sheath', relationship: 'see-also' },
    { entryId: 'blood-brain-barrier', entryType: 'anatomy', name: 'Blood-Brain Barrier', relationship: 'see-also' },
  ],
  searchMetadata: {
    primaryKeywords: ['glial cells', 'neuroglia', 'astrocytes', 'oligodendrocytes', 'microglia', 'schwann cells'],
    tags: ['neuroscience', 'anatomy', 'histology', 'supporting-cells'],
    synonyms: ['glia', 'supporting cells', 'astrocyte', 'oligodendrocyte', 'microglia'],
  },
};

// Export all entries
export const nervousSystemAnatomyEntries: EncyclopediaEntry[] = [
  neuronEntry,
  glialCellsEntry,
];
