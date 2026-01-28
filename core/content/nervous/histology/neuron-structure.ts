/**
 * Neuron Structure - Histology Educational Content
 *
 * Cellular architecture of neurons including soma, dendrites,
 * axons, and supporting structures.
 */

import { EducationalContent } from '../../types';

export const neuronStructure: EducationalContent = {
  id: 'histology-neuron-structure',
  type: 'structure',
  name: 'Neuron Structure',
  alternateNames: ['Neuron Histology', 'Neural Cell Structure', 'Nerve Cell Anatomy'],

  levels: {
    1: {
      level: 1,
      summary: 'Neurons are special cells in your brain and nerves that send messages using electrical and chemical signals.',
      explanation: `Neurons are the building blocks of your nervous system. Think of them as tiny messengers that carry information throughout your body at lightning speed.

**The Main Parts of a Neuron:**

1. **The Cell Body (Soma)**
   - The control center of the neuron
   - Contains the nucleus with DNA
   - Makes proteins and energy for the cell
   - Usually round or star-shaped

2. **Dendrites (Input Branches)**
   - Branch-like extensions that receive messages
   - Spread out like tree branches
   - Collect signals from other neurons
   - The more branches, the more connections possible

3. **Axon (Output Highway)**
   - A long fiber that sends messages away
   - Can be very short or very long (up to 3 feet!)
   - Carries electrical signals to other cells
   - Usually only one per neuron

4. **Axon Terminals (Message Endings)**
   - The end of the axon splits into branches
   - Releases chemical messengers called neurotransmitters
   - Sends signals across tiny gaps to the next cell

**Special Features:**

- Neurons can be very different sizes
- Some have short axons for local connections
- Others have long axons to reach distant body parts
- The longest neurons run from your spine to your toes

**Support Cells:**

Neurons do not work alone. They are helped by glial cells that:
- Provide nutrition and protection
- Clean up waste
- Insulate axons for faster signaling
- Help form connections

Imagine a neuron like a tree with roots (dendrites), a trunk (axon), and branches at the top (axon terminals) that pass messages to other trees nearby.`,
      keyTerms: [
        { term: 'neuron', definition: 'A specialized cell that carries messages in the nervous system' },
        { term: 'dendrite', definition: 'Branch-like part of a neuron that receives signals from other cells' },
        { term: 'axon', definition: 'Long fiber that carries electrical signals away from the cell body' },
        { term: 'nucleus', definition: 'The control center of a cell containing genetic material' },
        { term: 'neurotransmitter', definition: 'Chemical messenger that transmits signals between neurons' },
      ],
      analogies: [
        'A neuron is like a tree - roots receive water (signals), the trunk carries it up (axon), and branches distribute it (axon terminals).',
        'Neurons work like a relay race - each neuron passes the message to the next runner in line.',
        'The nervous system is like a telephone network with neurons as phones and axons as phone lines.',
      ],
      examples: [
        'Motor neurons in your spinal cord have axons that run all the way to your foot muscles.',
        'Pyramidal neurons in the brain have a pyramid-shaped cell body and many branching dendrites.',
        'Sensory neurons in your skin send touch information to your brain through long axons.',
      ],
    },
    2: {
      level: 2,
      summary: 'Neurons are highly specialized cells with distinct structural components including the cell body with Nissl substance, dendritic tree for input integration, and axon for signal propagation.',
      explanation: `**Neuronal Cell Body (Soma):**

**Size and Shape:**
- Diameter: 4-100 micrometers
- Shapes vary: Pyramidal, stellate (star), fusiform (spindle), granule
- Shape relates to function and location

**Cytoplasmic Components:**
- Nissl substance: Rough endoplasmic reticulum + polyribosomes
- Stains with basic dyes (cresyl violet)
- Protein synthesis machinery
- Prominent in large motor neurons
- Neuron-specific enolase (NSE) immunohistochemistry marker

**Cytoskeleton:**
- Neurofilaments: Intermediate filaments (10 nm)
- Microtubules: Transport tracks (25 nm)
- Microfilaments: Actin at periphery (6 nm)

**Dendrites:**

**Structural Features:**
- Tapering branches emerging from cell body
- Contain Nissl substance (unlike axons)
- Dendritic spines: Small protrusions for synaptic contact
- Surface area increases with branching

**Types:**
- Apical dendrite: Single, long projection (pyramidal cells)
- Basal dendrites: Multiple, shorter branches
- Dendritic tree pattern defines neuron class

**Axon:**

**Origin and Structure:**
- Axon hillock: Cone-shaped origin from soma
- No Nissl substance (axoplasm lacks rough ER)
- Uniform diameter along length
- Maintains diameter at branches (collaterals)

**Length Variations:**
- Golgi type I: Long axons (projecting neurons)
- Golgi type II: Short axons (interneurons)
- Longest human axon: 1 meter (sciatic nerve)

**Axon Transport:**
- Anterograde: Soma to terminal (kinesin motor)
- Retrograde: Terminal to soma (dynein motor)
- Fast transport: 200-400 mm/day (organelles)
- Slow transport: 1-10 mm/day (cytoskeletal)

**Axon Terminal:**

**Synaptic Bouton Features:**
- Swollen terminal endings
- Contains synaptic vesicles (40-50 nm)
- Neurotransmitter storage
- Active zones for vesicle release
- Mitochondria for energy
- Synaptic cleft: 20-40 nm gap

**Myelination:**
- Formed by glial cells (oligodendrocytes in CNS, Schwann cells in PNS)
- Nodes of Ranvier: Unmyelinated gaps
- Saltatory conduction at nodes`,
      keyTerms: [
        { term: 'Nissl substance', definition: 'Rough endoplasmic reticulum in neurons; stains with basic dyes' },
        { term: 'axon hillock', definition: 'Cone-shaped origin of axon from cell body; action potential initiation site' },
        { term: 'dendritic spine', definition: 'Small membranous protrusion from dendrite; postsynaptic compartment' },
        { term: 'neurofilament', definition: 'Neuron-specific intermediate filament; structural support' },
        { term: 'Golgi type I', definition: 'Neuron with long axon projecting to distant targets' },
      ],
      analogies: [
        'The Nissl substance is like a neuron\'s factory - where proteins are manufactured.',
        'Dendritic spines are like tiny antennae receiving signals from other neurons.',
        'Axon transport is like a highway system with trucks moving cargo in both directions.',
      ],
    },
    3: {
      level: 3,
      summary: 'Neuronal ultrastructure reveals specialized organelle distributions, cytoskeletal organization for transport, and specific molecular markers that distinguish neuronal subtypes in histological analysis.',
      explanation: `**Ultrastructural Features:**

**Nuclear Characteristics:**
- Large, pale-staining nucleus with prominent nucleolus
- Euchromatin predominant (transcriptionally active)
- NeuN (NeuN/Fox-3) immunohistochemistry marker
- Neuron-specific gene expression profile

**Organelle Distribution:**

**Rough Endoplasmic Reticulum (Nissl Bodies):**
- Stacked cisternae with attached ribosomes
- Basophilic staining (RNA content)
- Protein synthesis for neurotransmission
- Dispersed throughout soma and dendrites
- Absent from axon hillock and axon

**Golgi Apparatus:**
- Near nucleus
- Protein modification and packaging
- Synaptic vesicle precursor processing

**Mitochondria:**
- High density in terminals and active zones
- Energy for ion pumps and neurotransmitter release
- Axonal transport occurs
- Particularly abundant at synapses

**Lysosomes:**
- Autophagy and waste processing
- Lipofuscin accumulation (aging pigment)
- Neuromelanin in substantia nigra, locus coeruleus

**Cytoskeletal Organization:**

**Neurofilament Triplet Proteins:**
- NFL (light), NFM (medium), NFH (heavy)
- Phosphorylation states vary by location
- Heavily phosphorylated in axons
- Less phosphorylated in soma/dendrites
- SMI-31, SMI-32 antibodies distinguish compartments

**Microtubules:**
- alpha/beta-tubulin polymers
- MAPs (microtubule-associated proteins):
  - MAP2: Dendrite-specific
  - Tau: Axon-specific
- Tau isoforms: 3-repeat vs 4-repeat

**Microfilaments (Actin):**
- Dendritic spines (high concentration)
- Growth cones during development
- Synaptic plasticity

**Molecular Markers by Neuron Type:**

**Excitatory Neurons:**
- Glutamatergic markers: VGLUT1, VGLUT2
- CAMKIIalpha in cortical excitatory neurons

**Inhibitory Interneurons:**
- Parvalbumin+: Fast-spiking basket cells, chandelier cells
- Somatostatin+: Martinotti cells
- VIP+: Bipolar interneurons
- Calretinin+, calbindin+: Various subtypes

**Neuromodulatory:**
- Tyrosine hydroxylase (dopaminergic)
- TPH2 (serotonergic)
- ChAT (cholinergic)

**Histological Staining Methods:**

**Golgi Method:**
- Silver impregnation (1-2% of neurons stained)
- Reveals complete neuron morphology
- Ramon y Cajal\'s pioneering work

**Nissl Stains:**
- Cresyl violet, thionine
- Shows cell body distribution
- Cytoarchitectonic mapping

**Myelin Stains:**
- Luxol fast blue, Weil stain
- Reveals white matter tracts
- Demyelination detection

**Immunohistochemistry:**
- Neurofilament antibodies
- Synaptic markers (synaptophysin)
- Transmitter-specific markers`,
      keyTerms: [
        { term: 'euchromatin', definition: 'Less condensed DNA that is transcriptionally active' },
        { term: 'lipofuscin', definition: 'Brownish pigment accumulating with age; "wear-and-tear" pigment' },
        { term: 'neuromelanin', definition: 'Dark pigment in catecholaminergic neurons' },
        { term: 'SMI-31', definition: 'Antibody against phosphorylated neurofilament; axonal marker' },
        { term: 'VGLUT', definition: 'Vesicular glutamate transporter; glutamatergic marker' },
      ],
      clinicalNotes: 'Neurofibrillary tangles in Alzheimer disease contain hyperphosphorylated tau. Lewy bodies in Parkinson disease contain aggregated alpha-synuclein. These pathological inclusions are visible with specific histological stains and immunohistochemistry.',
    },
    4: {
      level: 4,
      summary: 'Advanced neuronal histology encompasses subcellular compartment organization, protein trafficking pathways, pathological changes in neurodegenerative disease, and quantitative morphometry for research applications.',
      explanation: `**Compartment-Specific Organization:**

**Axon Initial Segment (AIS):**
- High density of voltage-gated sodium channels (Nav1.6)
- Ankyrin-G and beta-IV spectrin scaffold
- Action potential initiation zone
- Target of autoimmune encephalitis (anti-Neurofascin, anti-CASPR2)
- Length: 10-60 micrometers

**Pre-Synaptic Terminal:**
- Active zone proteins: Bassoon, Piccolo, Munc13
- SNARE complex: Syntaxin, SNAP-25, synaptobrevin/VAMP
- Synapsin: Tethers vesicles to cytoskeleton
- Complexin: Clamps fusion machinery
- Synaptotagmin: Calcium sensor
- Endocytosis: Clathrin-mediated recycling

**Post-Synaptic Density (PSD):**
- Electron-dense specialization
- PSD-95, PSD-93 scaffold proteins
- NMDA and AMPA receptor anchoring
- SHANK, Homer scaffolding complexes
- Dendritic spine head (mushroom, thin, stubby types)

**Axonal Transport Mechanisms:**

**Molecular Motors:**
- Kinesin-1 (KIF5): Anterograde, various cargos
- Kinesin-2, Kinesin-3 families
- Cytoplasmic dynein: Retrograde transport
- Dynactin complex: Dynein regulator

**Transport Deficits in Disease:**
- Amyotrophic lateral sclerosis (ALS): SOD1, TDP-43 affect transport
- Charcot-Marie-Tooth disease (HSPB1, HSPB8 mutations)
- Huntington disease: Axonal transport deficits
- Alzheimer disease: APP transport abnormalities

**Pathological Changes:**

**Neurofibrillary Tangles:**
- Hyperphosphorylated tau (paired helical filaments)
- Bielschowsky silver stain positive
- Braak staging for Alzheimer progression
- 3-repeat and 4-repeat tau isoforms

**Lewy Bodies:**
- Alpha-synuclein aggregates
- Ubiquitin positive
- Pale body precursor
- Cortical vs brainstem types

**Pick Bodies:**
- 3-repeat tau inclusions
- Pick disease (frontotemporal dementia)
- Silver staining (Bodian)

**Hirano Bodies:**
- Actin aggregates
- Crystal-like inclusions
- Alzheimer disease, aging

**Granulovacuolar Degeneration:**
- Cytoplasmic granules in hippocampus
- TDP-43 positive
- Alzheimer disease, aging

**Quantitative Morphometry:**

**Dendritic Analysis:**
- Sholl analysis: Concentric ring intersections
- Branch order quantification
- Spine density counts
- 3D reconstruction from confocal stacks

**Axon Analysis:**
- Axon diameter measurements
- G-ratio (axon diameter/total diameter)
- Myelin thickness correlation
- Node of Ranvier spacing

**Stereological Methods:**
- Unbiased cell counting (Optical fractionator)
- Cavalieri estimator for volume
- Systematic random sampling
- Coefficient of error calculations

**Electron Microscopy:**
- Vesicle pool sizes (readily releasable, reserve)
- Active zone ultrastructure
- PSD thickness and area
- Mitochondrial morphology`,
      keyTerms: [
        { term: 'ankyrin-G', definition: 'Scaffold protein organizing ion channels at axon initial segment' },
        { term: 'SNARE complex', definition: 'Protein complex mediating vesicle fusion with membrane' },
        { term: 'Sholl analysis', definition: 'Method quantifying dendritic branching complexity' },
        { term: 'G-ratio', definition: 'Ratio of axon diameter to total fiber diameter; optimal ~0.6' },
        { term: 'optical fractionator', definition: 'Unbiased stereological method for cell counting' },
      ],
      clinicalNotes: 'Axon initial segment antibodies (anti-AIS) can cause encephalitis with prominent seizures. The AIS is also a therapeutic target for antiepileptic drugs (Nav1.6 sodium channels) and may be involved in neuroplasticity responses to injury.',
    },
    5: {
      level: 5,
      summary: 'Expert-level neuronal histology includes super-resolution microscopy, single-cell transcriptomics, connectomic reconstruction, and advanced analysis of neurodegenerative pathology using quantitative and molecular techniques.',
      explanation: `**Advanced Microscopy Techniques:**

**Super-Resolution Microscopy:**
- STED (Stimulated Emission Depletion): ~50 nm resolution
- PALM/STORM: Single molecule localization
- Structured illumination (SIM): ~100 nm resolution
- Applications: Synaptic vesicle organization, PSD structure

**Expansion Microscopy:**
- Hydrogel embedding and expansion
- Physical magnification up to 20x
- Isotropic expansion for 3D reconstruction
- Nanoscale resolution with standard microscopes

**Light-Sheet Microscopy:**
- Rapid volumetric imaging
- Reduced phototoxicity
- Whole-brain clearing (CLARITY, iDISCO, uDISCO)
- Brain-wide projection mapping

**Single-Cell Analysis:**

**Single-Cell RNA Sequencing:**
- Cell type classification by transcriptome
- Patch-seq: Electrophysiology + morphology + transcriptome
- Drop-seq, 10x Genomics platforms
- Neuronal subtype identification

**Transcriptomic Taxonomy:**
- Excitatory neuron classes by layer and projection
- Inhibitory interneuron subclasses
- Region-specific markers
- Disease-associated gene expression changes

**Spatial Transcriptomics:**
- Slide-seq, MERFISH, seqFISH
- Gene expression with spatial context
- Layer-specific gene patterns
- Pathology correlation

**Connectomics:**

**Electron Microscopy Connectomics:**
- Serial section EM
- Automated sectioning (ATUM, SBEM)
- Automated segmentation algorithms
- Synapse-level wiring diagrams

**Projects:**
- FlyEM (Drosophila)
- MICrONS (mouse visual cortex)
- Human connectome efforts

**Functional Connectomics:**
- Calcium imaging + EM correlation
- GRASP (GFP reconstitution across synaptic partners)
- Transsynaptic tracing (rabies, HSV)

**Pathology Quantification:**

**Digital Pathology:**
- Whole slide imaging
- AI-assisted detection
- Deep learning classification
- Quantitative immunohistochemistry

**Alzheimer Disease:**
- Amyloid plaque burden quantification
- Neurofibrillary tangle staging
- Neuritic plaque counts
- Braak and Braak staging
- CERAD scoring

**Parkinson Disease:**
- Lewy body density counts
- Alpha-synuclein immunohistochemistry
- Braak PD staging (ascending pathology)
- Cell loss in substantia nigra

**FTLD Classification:**
- FTLD-tau (Pick, PSP, CBD)
- FTLD-TDP (types A, B, C)
- FTLD-FUS
- MAPT, GRN, C9orf72 genetic associations

**Research Applications:**

**Brain Banking:**
- Tissue acquisition protocols
- Fixation optimization
- Cryopreservation methods
- Quality control standards

**Biomarker Development:**
- Tissue-based biomarkers
- Correlation with CSF and imaging
- Digital biomarker extraction
- Prognostic histological features

**Drug Development:**
- Target engagement markers
- Pathway modulation evidence
- Histological efficacy endpoints
- Clinical trial tissue collection

**Emerging Techniques:**

**Array Tomography:**
- Ultrathin sections on arrays
- Multiple immunolabeling rounds
- Synapse molecular profiling
- 3D reconstruction

**Correlative Light-Electron Microscopy:**
- Fluorescence targeting
- EM ultrastructure
- Specific cell type identification
- Synaptic connectivity

**In Situ Sequencing:**
- FISSEQ, ISS methods
- Spatial transcriptomics at subcellular resolution
- Microenvironment analysis
- Pathology-transcriptome correlation`,
      keyTerms: [
        { term: 'STED microscopy', definition: 'Stimulated emission depletion; super-resolution technique' },
        { term: 'expansion microscopy', definition: 'Technique physically expanding tissue for nanoscale resolution' },
        { term: 'CLARITY', definition: 'Tissue clearing method enabling whole-brain imaging' },
        { term: 'MERFISH', definition: 'Multiplexed error-robust fluorescence in situ hybridization' },
        { term: 'CERAD', definition: 'Consortium to Establish a Registry for Alzheimer\'s Disease; plaque scoring' },
      ],
      clinicalNotes: 'Expert diagnostic pearls: (1) The thioflavin S and Congo red stains detect amyloid beta-sheet structure; Congo red shows apple-green birefringence under polarized light. (2) Alpha-synuclein immunohistochemistry on skin biopsy is a sensitive diagnostic test for synucleinopathies. (3) TDP-43 pathology has distinct patterns in ALS (skein-like) vs FTLD (inclusion types A, B, C). (4) Brain banking requires standardized protocols - postmortem interval, fixation time, and tissue pH significantly affect molecular marker preservation.',
    },
  },

  media: [
    {
      id: 'neuron-histology',
      type: 'histology',
      filename: 'neuron-stained-section.jpg',
      title: 'Neuron Histology',
      description: 'Golgi-stained neurons showing dendritic trees',
    },
  ],

  citations: [
    {
      id: 'peters-neurohistology',
      type: 'textbook',
      title: 'The Fine Structure of the Nervous System',
      authors: ['Peters, A.'],
      source: 'Oxford University Press',
    },
    {
      id: 'braak-staging',
      type: 'article',
      title: 'Staging of Brain Pathology Related to Sporadic Parkinson\'s Disease',
      authors: ['Braak, H.'],
      source: 'Neurobiology of Aging',
    },
  ],

  crossReferences: [
    { targetId: 'histology-synapse-histology', targetType: 'structure', relationship: 'related', label: 'Synapse Histology' },
    { targetId: 'histology-cns-tissue', targetType: 'structure', relationship: 'related', label: 'CNS Tissue' },
    { targetId: 'physiology-synaptic-transmission', targetType: 'concept', relationship: 'see-also', label: 'Synaptic Transmission' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['histology', 'anatomy', 'neuroscience'],
    keywords: ['neuron', 'dendrite', 'axon', 'synapse', 'neurohistology'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['pathology', 'neurology'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default neuronStructure;
