/**
 * CNS Tissue Histology - Educational Content
 *
 * Organization of brain and spinal cord tissue including gray matter,
 * white matter, meninges, and ventricular system.
 */

import { EducationalContent } from '../../types';

export const cnsTissue: EducationalContent = {
  id: 'histology-cns-tissue',
  type: 'structure',
  name: 'CNS Tissue',
  alternateNames: ['Central Nervous System Histology', 'Brain Tissue', 'Spinal Cord Tissue'],

  levels: {
    1: {
      level: 1,
      summary: 'The central nervous system is made up of gray matter and white matter, protected by special coverings called meninges and fluid-filled spaces called ventricles.',
      explanation: `The central nervous system (CNS) includes your brain and spinal cord. These delicate organs are protected by layers of tissue and bathed in special fluid.

**The Two Types of Brain Tissue:**

1. **Gray Matter**
   - Contains the cell bodies of neurons
   - Looks darker in color
   - Found on the outer surface of the brain (cortex)
   - Also found deep inside the brain (nuclei)
   - Where processing and thinking happens

2. **White Matter**
   - Contains the long fibers (axons) connecting brain areas
   - Looks lighter in color
   - Found under the gray matter
   - Like the brain\'s communication highways
   - Gets its color from myelin insulation

**Protective Coverings (Meninges):**

The brain and spinal cord have three protective layers:

1. **Dura Mater** (outer layer)
   - Thick and tough
   - Like a strong leather covering

2. **Arachnoid Mater** (middle layer)
   - Thin and web-like
   - Has fluid underneath

3. **Pia Mater** (inner layer)
   - Very thin
   - Sticks closely to the brain surface
   - Follows every bump and groove

**Fluid Spaces (Ventricles):**

- Hollow spaces deep inside the brain
- Filled with cerebrospinal fluid (CSF)
- CSF cushions and protects the brain
- Acts like a shock absorber

**Support Cells:**

Besides neurons, the CNS contains glial cells that:
- Form myelin (white matter color)
- Support and nourish neurons
- Clean up waste
- Help with immune defense

Think of gray matter as the computer processors, white matter as the cables connecting them, and the meninges as a protective case.`,
      keyTerms: [
        { term: 'gray matter', definition: 'Brain tissue containing neuron cell bodies; processing centers' },
        { term: 'white matter', definition: 'Brain tissue containing myelinated axons; communication pathways' },
        { term: 'meninges', definition: 'The three protective layers covering the brain and spinal cord' },
        { term: 'ventricles', definition: 'Fluid-filled spaces within the brain' },
        { term: 'cerebrospinal fluid', definition: 'Clear fluid that cushions and protects the brain and spinal cord' },
      ],
      analogies: [
        'Gray matter is like computer processors; white matter is like the cables connecting them.',
        'The meninges are like the protective layers of an onion surrounding the delicate brain.',
        'Cerebrospinal fluid is like the shock absorbers in a car, protecting the brain from bumps.',
      ],
      examples: [
        'The cerebral cortex is gray matter on the outside of the brain.',
        'The corpus callosum is white matter connecting the left and right sides of the brain.',
        'The ventricles produce about a cup of cerebrospinal fluid every day.',
      ],
    },
    2: {
      level: 2,
      summary: 'CNS tissue consists of gray matter (neuronal cell bodies, dendrites, unmyelinated axons) and white matter (myelinated axons), organized with specific architecture and protected by meninges and CSF.',
      explanation: `**Gray Matter Organization:**

**Cerebral Cortex:**
- Six-layered structure (isocortex)
- Layer I: Molecular layer (few neurons)
- Layer II: External granular layer (small pyramidal)
- Layer III: External pyramidal layer (medium pyramidal)
- Layer IV: Internal granular layer (stellate cells)
- Layer V: Internal pyramidal layer (large pyramidal)
- Layer VI: Multiform layer (fusiform cells)

**Deep Gray Matter Nuclei:**
- Basal ganglia: Caudate, putamen, globus pallidus
- Thalamus, hypothalamus
- Subthalamic nucleus, substantia nigra
- Clusters of neuron cell bodies

**Spinal Cord Gray Matter:**
- Butterfly or H-shaped on cross-section
- Anterior horns: Motor neurons
- Posterior horns: Sensory processing
- Lateral horns: Autonomic (T1-L2)
- Rexed laminae (I-X)

**White Matter Organization:**

**Myelinated Axon Tracts:**
- Projection fibers: Connect cortex to lower centers
- Commissural fibers: Connect hemispheres (corpus callosum)
- Association fibers: Connect cortical areas within hemisphere

**Spinal Cord White Matter:**
- Posterior columns: Fine touch, proprioception
- Lateral columns: Corticospinal tracts (motor)
- Anterior columns: Various motor and sensory
- Tracts organized somatotopically

**Meninges:**

**Dura Mater:**
- Dense fibrous connective tissue
- Outer periosteal layer attached to skull
- Inner meningeal layer
- Dural venous sinuses between layers
- Falx cerebri, tentorium cerebelli reflections

**Arachnoid Mater:**
- Thin avascular membrane
- Arachnoid trabeculations extend to pia
- Subarachnoid space contains CSF
- Arachnoid granulations (villi) for CSF reabsorption

**Pia Mater:**
- Delicate connective tissue
- Intimately adherent to CNS surface
- Follows gyri and sulci
- Contains blood vessels
- Forms tela choroidea of ventricles

**Ventricles:**
- Two lateral ventricles (C-shaped)
- Third ventricle (midline slit)
- Fourth ventricle (diamond-shaped, posterior to pons)
- Cerebral aqueduct connects third and fourth
- Choroid plexus produces CSF

**Glial Cells:**

**Astrocytes:**
- Star-shaped, many processes
- End-feet on blood vessels
- Blood-brain barrier component
- Glutamate reuptake
- Reactivity in injury (gliosis)

**Oligodendrocytes:**
- Form myelin in CNS
- One cell myelinates multiple axon segments
- Inhibits axon regeneration
- Target in multiple sclerosis

**Microglia:**
- CNS macrophages
- Bone marrow derived
- Activated in injury/disease
- Phagocytosis, immune response

**Ependymal Cells:**
- Line ventricles
- Ciliated for CSF flow
- Form choroid plexus epithelium`,
      keyTerms: [
        { term: 'isocortex', definition: 'Six-layered cerebral cortex characteristic of neocortex' },
        { term: 'choroid plexus', definition: 'Tissue in ventricles that produces cerebrospinal fluid' },
        { term: 'dural sinus', definition: 'Venous channel between dural layers; drains blood and CSF' },
        { term: 'somatotopic', definition: 'Organized according to body surface representation' },
        { term: 'gliosis', definition: 'Reactive astrocyte proliferation in response to CNS injury' },
      ],
      analogies: [
        'The six cortical layers are like floors in a building, each with different functions and connections.',
        'Oligodendrocytes are like electricians insulating many wires with one wrapping action.',
        'Microglia are like security guards and cleanup crew in the brain.',
      ],
    },
    3: {
      level: 3,
      summary: 'CNS histology reveals laminar cortical organization, specific neuronal populations in nuclei, myelinated fiber tracts with organization patterns, and specialized barrier systems maintaining CNS homeostasis.',
      explanation: `**Cortical Cytoarchitecture:**

**Laminar Organization:**
- Layer-specific projection patterns:
  - Layers II-III: Corticocortical (ipsilateral and contralateral)
  - Layer IV: Receives thalamic input
  - Layer V: Subcortical projections (striatum, brainstem, spinal cord)
  - Layer VI: Projects to thalamus
- Interneuron distribution varies by layer
- Myelin staining reveals stripes of Baillarger (IV) and outer (V)

**Regional Specializations:**
- Primary motor cortex: Large pyramidal cells (Betz cells) in layer V
- Visual cortex: Prominent line of Gennari (myelinated layer IV)
- Auditory cortex: Prominent granular layers
- Entorhinal cortex: Pre-alpha islands (layer II cell clusters)
- Hippocampus: Three-layered archicortex

**White Matter Tract Histology:**

**Axon Diameter and Myelin:**
- G-ratio optimization (axon/total diameter ~0.6)
- Large fibers: Faster conduction, motor pathways
- Small fibers: Slower, pain/temperature pathways
- Internodal length correlates with fiber diameter

**Tract Identification:**
- Weigert-Pal myelin stain
- Luxol fast blue
- Weil stain
- Marchi method for degenerating myelin

**Blood-Brain Barrier:**

**Structural Components:**
- Non-fenestrated capillary endothelium
- Tight junctions (claudin-5, occludin)
- Basal lamina
- Pericytes
- Astrocyte end-feet

**Functions:**
- Prevents paracellular diffusion
- Active transport mechanisms
- Metabolic barrier (enzymes)
- Breakdown in pathology

** circumventricular Organs:**
- Lack blood-brain barrier
- Median eminence, area postrema
- Neurohypophysis, pineal
- Subfornical organ, OVLT

**Spinal Cord Cytoarchitecture:**

**Rexed Laminae:**
- Lamina I: Posteromarginal nucleus (pain/temperature)
- Lamina II: Substantia gelatinosa (pain modulation)
- Laminae III-IV: Nucleus proprius (light touch)
- Lamina V: Neck of dorsal horn (various sensory)
- Lamina VI: Base of dorsal horn (proprioception)
- Lamina VII: Intermediate zone (Clarke nucleus, autonomic)
- Lamina VIII: Medial motor interneurons
- Lamina IX: Motor neuron pools
- Lamina X: Gray commissure around central canal

**Motor Neuron Pools:**
- Alpha motor neurons: Large, innervate extrafusal muscle
- Gamma motor neurons: Small, innervate intrafusal muscle
- Medial groups: Axial muscles
- Lateral groups: Distal muscles (especially cervical, lumbosacral)

**Pathology Correlations:**

**Demyelination:**
- Multiple sclerosis plaques
- Luxol fast blue shows pale areas
- CD68+ macrophages at plaque edge
- Reactive astrocytes (gliosis)

**Neurodegeneration:**
- Neuron loss visible with Nissl stain
- Atrophy of nuclei (Huntington disease)
- Lewy bodies in Parkinson disease
- Plaques and tangles in Alzheimer disease

**Cerebrovascular:**
- Lacunar infarcts in white matter
- Watershed infarct patterns
- Hypertensive hemorrhage sites`,
      keyTerms: [
        { term: 'cytoarchitecture', definition: 'Cellular organization of tissue, especially cortex' },
        { term: 'Betz cells', definition: 'Giant pyramidal neurons in motor cortex layer V' },
        { term: 'line of Gennari', definition: 'Myelinated stripe in visual cortex visible with naked eye' },
        { term: 'pericyte', definition: 'Contractile cells wrapping capillaries; part of blood-brain barrier' },
        { term: 'circumventricular organ', definition: 'Brain region lacking blood-brain barrier' },
      ],
      clinicalNotes: 'The blood-brain barrier prevents many drugs from entering the CNS. Small, lipophilic molecules cross easily; large, hydrophilic molecules require specific transport systems. Understanding barrier properties is crucial for CNS drug development.',
    },
    4: {
      level: 4,
      summary: 'Advanced CNS histology includes specialized staining techniques, cortical area classification systems, white matter tractography correlations, and interpretation of pathological changes in neurodegenerative and vascular disease.',
      explanation: `**Histological Techniques:**

**Cellular Stains:**
- Nissl (cresyl violet): RNA in rough ER, shows cell bodies
- Golgi: Silver impregnation of random neurons
- Hematoxylin and eosin: General morphology
- NeuN immunohistochemistry: Neuronal nuclei marker

**Myelin Stains:**
- Weil stain: Luxol fast blue with hematoxylin
- Weigert-Pal: Potassium dichromate followed by hematoxylin
- Marchi: Degenerating myelin (osmium tetroxide)
- Fluoromyelin: Fluorescent myelin stain

**Pathology Stains:**
- Bielschowsky silver: Neurofibrillary tangles, axons
- Bodian silver: Neurofibrillary pathology
- Thioflavin S and T: Amyloid fluorescence
- Congo red: Amyloid with apple-green birefringence
- Perl iron stain: Hemosiderin

**Cortical Classification Systems:**

**Brodmann Areas:**
- 52 distinct cortical areas based on cytoarchitecture
- Area 4: Primary motor cortex
- Area 17: Primary visual cortex
- Area 41, 42: Primary auditory cortex
- Area 44, 45: Broca area (motor speech)

**Von Economo Classification:**
- Agranular cortex (motor)
- Frontal cortex
- Parietal cortex
- Polar cortex
- Granular cortex (sensory)

**White Matter Pathology:**

**Small Vessel Disease:**
- Arteriolosclerosis
- Lipohyalinosis
- White matter rarefaction
- Incomplete infarction (cribriform state)
- MRI correlate: White matter hyperintensities

**Multiple Sclerosis Histology:**
- Acute plaques: Myelin-laden macrophages
- Chronic active plaques: Hypercellular rim
- Chronic inactive plaques: Hypocellular, gliotic center
- Shadow plaques: Partial remyelination
- Pattern III (diffuse degeneration)

**Traumatic Brain Injury:**
- Diffuse axonal injury (beta-APP immunostaining)
- Hemorrhagic contusions
- Axonal retraction balls
- Chronic traumatic encephalopathy (tau pathology)

**Neurodegenerative Pathology:**

**Alzheimer Disease:**
- Neurofibrillary tangles (tau, Braak staging)
- Senile plaques (amyloid-beta)
- Neuritic plaques with dystrophic neurites
- Amyloid angiopathy
- Granulovacuolar degeneration

**Frontotemporal Lobar Degeneration:**
- Pick bodies (3-repeat tau)
- TDP-43 inclusions (types A, B, C)
- FUS inclusions
- Tau-positive ballooned neurons

**Parkinson Disease and Synucleinopathies:**
- Lewy bodies (alpha-synuclein)
- Braak staging of PD pathology
- Cortical Lewy bodies in dementia with Lewy bodies
- Glial cytoplasmic inclusions in MSA

**Quantitative Neuropathology:**

**Stereology:**
- Unbiased cell counting (optical fractionator)
- Volume estimation (Cavalieri method)
- Reference space definition
- Coefficient of error calculation

**Digital Pathology:**
- Whole slide imaging
- Automated plaque counting
- Tangle quantification
- Machine learning classification`,
      keyTerms: [
        { term: 'cribriform state', definition: 'Incomplete infarction with tissue rarefaction' },
        { term: 'shadow plaque', definition: 'MS plaque with partial remyelination; paler than normal myelin' },
        { term: 'amyloid angiopathy', definition: 'Amyloid-beta deposition in cerebral vessel walls' },
        { term: 'granulovacuolar degeneration', definition: 'Cytoplasmic granules in hippocampal neurons in AD' },
        { term: 'lipohyalinosis', definition: 'Hyaline thickening of small vessel walls in hypertension' },
      ],
      clinicalNotes: 'Braak staging of Alzheimer pathology shows neurofibrillary tangles begin in transentorhinal cortex (stages I-II), spread to limbic areas (III-IV), and finally neocortex (V-VI). Clinical symptoms typically appear at Braak stage IV or higher.',
    },
    5: {
      level: 5,
      summary: 'Expert-level CNS histology encompasses quantitative morphometry, molecular pathology techniques, brain banking standards, and correlation of histological findings with in vivo neuroimaging biomarkers.',
      explanation: `**Molecular Pathology Techniques:**

**Immunohistochemistry Panels:**
- Neurodegeneration: Amyloid-beta, tau, alpha-synuclein, TDP-43, FUS
- Inflammation: CD68, GFAP, HLA-DR
- Vascular: Collagen IV, fibrinogen
- Cell type markers: NeuN, GFAP, Iba1, Olig2, CNPase

**Advanced IHC:**
- Multiplex immunofluorescence
- Opal, TSA methods
- Spectral unmixing
- Automated quantification

**In Situ Hybridization:**
- DNA and RNA probes
- Chromogenic and fluorescent (FISH/CISH)
- Viral detection (HSV, CMV, JC)
- Gene expression localization

**Proteomic Analysis:**
- Laser capture microdissection
- Mass spectrometry of brain regions
- Post-translational modification analysis
- Protein aggregation characterization

**Brain Banking:**

**Standardized Protocols:**
- Rapid autopsy (minimal postmortem interval)
- Hemibrain fixation vs freezing
- Fixation time optimization
- pH measurement as quality indicator
- RNA integrity number (RIN)

**Tissue Sampling:**
- Standardized dissection
- Region-specific sampling
- Mirror image samples (frozen/fixed)
- Cerebrospinal fluid collection

**Quality Control:**
- Histological assessment
- Immunohistochemistry validation
- RNA/DNA quality assessment
- Clinical-pathological correlation

**Research Applications:**

**Genetic Studies:**
- GWAS correlation with pathology
- Rare variant analysis
- Somatic mutation analysis
- Epigenetic modifications

**Biomarker Validation:**
- CSF biomarker correlation
- PET ligand validation
- Pathology-PET correlation
- Antemortem prediction accuracy

**Digital Neuropathology:**

**Whole Slide Imaging:**
- High-resolution scanning
- Z-stack acquisition
- Automated focus
- Image compression standards

**Artificial Intelligence:**
- Automated cell counting
- Plaque and tangle detection
- Vessel analysis
- Pattern classification
- Predictive modeling

**Quantitative Analysis:**
- Stereology software (Stereoinvestigator)
- ImageJ/Fiji applications
- Machine learning segmentation
- Cloud-based analysis platforms

**Clinical-Pathological Correlation:**

**Longitudinal Studies:**
- Religious Orders Study
- Rush Memory and Aging Project
- UK Biobank
- Clinical trial autopsy programs

**Cognitive Reserve:**
- Pathology vs cognition discordance
- Educational attainment effects
- Lifelong cognitive activity
- Synaptic compensation

**Diagnostic Accuracy:**
- Clinical vs pathological diagnosis
- Diagnostic criteria evolution
- Mixed pathologies common
- Incidental pathology

**Emerging Techniques:**

**Tissue Clearing:**
- CLARITY, iDISCO, uDISCO
- Whole-brain antibody labeling
- 3D reconstruction
- Light-sheet microscopy

**Spatial Transcriptomics:**
- Slide-seq, MERFISH, seqFISH
- Gene expression in anatomical context
- Cell type mapping
- Pathology-gene correlation

**Correlative Microscopy:**
- Light and electron microscopy
- Fluorescence-targeted EM
- Volume EM methods
- Correlative cryo-EM`,
      keyTerms: [
        { term: 'postmortem interval', definition: 'Time between death and tissue processing' },
        { term: 'RNA integrity number', definition: 'Measure of RNA quality; 10 = perfect, 1 = degraded' },
        { term: 'multiplex immunofluorescence', definition: 'Multiple antibody staining with spectral separation' },
        { term: 'laser capture microdissection', definition: 'Isolation of specific cell types from tissue sections' },
        { term: 'spectral unmixing', definition: 'Computational separation of overlapping fluorophore signals' },
      ],
      clinicalNotes: 'Expert neuropathology requires standardized protocols. The postmortem interval significantly affects tissue quality - RNA degrades within hours, proteins are more stable, and some histological features remain interpretable for days. Brain pH correlates with agonal state and tissue quality.',
    },
  },

  media: [
    {
      id: 'cns-tissue-section',
      type: 'histology',
      filename: 'brain-cortex-histology.jpg',
      title: 'Cerebral Cortex Histology',
      description: 'Nissl stain showing six cortical layers',
    },
  ],

  citations: [
    {
      id: 'paxinos-atlas',
      type: 'textbook',
      title: 'The Human Nervous System',
      authors: ['Paxinos, G.'],
      source: 'Elsevier',
    },
    {
      id: 'montine-guidelines',
      type: 'article',
      title: 'National Institute on Aging-Alzheimer\'s Association Guidelines for Neuropathologic Assessment',
      source: 'Journal of Neuropathology and Experimental Neurology',
    },
  ],

  crossReferences: [
    { targetId: 'histology-neuron-structure', targetType: 'structure', relationship: 'related', label: 'Neuron Structure' },
    { targetId: 'histology-synapse-histology', targetType: 'structure', relationship: 'related', label: 'Synapse Histology' },
    { targetId: 'structure-brain', targetType: 'structure', relationship: 'see-also', label: 'Brain Anatomy' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['histology', 'anatomy', 'pathology'],
    keywords: ['CNS', 'gray matter', 'white matter', 'meninges', 'ventricles', 'cortex'],
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

export default cnsTissue;
