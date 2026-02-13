/**
 * Cerebral Cortex - Comprehensive Anatomy Content
 *
 * Complete coverage of cortical anatomy including all lobes,
 * functional areas, Brodmann areas, and clinical correlations.
 */

import { EducationalContent } from '../../types';

export const cerebralCortexContent: EducationalContent = {
  id: 'anatomy-cerebral-cortex',
  type: 'structure',
  name: 'Cerebral Cortex',
  alternateNames: ['Cortex cerebri', 'Gray matter of cerebrum', 'Pallium'],
  fmaId: 'FMA:61830',

  levels: {
    1: {
      level: 1,
      summary: 'The cerebral cortex is the wrinkly outer layer of your brain that helps you think, feel, and move.',
      explanation: `The cerebral cortex is like the brain's control center. It's the wrinkly gray part on the outside of your brain. These wrinkles let your brain fit more thinking power into your head!

The cortex is divided into four main areas called lobes:
- **Frontal lobe** (front): Helps you think, plan, and control your movements
- **Parietal lobe** (top): Helps you feel touch and know where your body is in space
- **Temporal lobe** (sides): Helps you hear and remember things
- **Occipital lobe** (back): Helps you see

Each area has a special job, but they all work together like a team.`,
      keyTerms: [
        { term: 'cortex', definition: 'The outer layer of an organ (like the bark of a tree)' },
        { term: 'lobe', definition: 'A rounded section or part of something' },
        { term: 'gray matter', definition: 'Brain tissue that looks grayish and contains nerve cell bodies' },
      ],
      analogies: [
        'The cerebral cortex is like the keyboard and screen of a computer - it\'s where you interact with information.',
        'The wrinkles in your brain are like crumpling up a piece of paper to fit more in a smaller space.',
      ],
      examples: [
        'When you solve a math problem, your frontal lobe is working hard.',
        'When you feel a cat\'s soft fur, your parietal lobe processes that touch.',
      ],
    },
    2: {
      level: 2,
      summary: 'The cerebral cortex is a 2-4mm thick layer of gray matter covering the cerebral hemispheres, organized into four lobes with distinct functional regions.',
      explanation: `The cerebral cortex is the outermost layer of the brain, composed of gray matter containing billions of neurons. It's approximately 2-4mm thick and contains about 16 billion neurons.

**Structure:**
- **Gyri** (singular: gyrus): The ridges or "bumps" on the brain surface
- **Sulci** (singular: sulcus): The grooves between gyri
- **Fissures**: Deep grooves that divide major brain regions

**The Four Lobes:**

1. **Frontal Lobe** (anterior to central sulcus)
   - Motor cortex: Controls voluntary movement
   - Prefrontal cortex: Planning, decision-making, personality
   - Broca's area: Speech production (usually left hemisphere)

2. **Parietal Lobe** (posterior to central sulcus, superior)
   - Somatosensory cortex: Processes touch, temperature, pain
   - Spatial awareness and navigation

3. **Temporal Lobe** (lateral, below lateral fissure)
   - Auditory cortex: Processes hearing
   - Wernicke's area: Language comprehension (usually left hemisphere)
   - Hippocampus connections: Memory formation

4. **Occipital Lobe** (posterior)
   - Primary visual cortex: Processes visual information
   - Visual association areas: Interpret what we see`,
      keyTerms: [
        { term: 'gyrus', definition: 'A ridge on the brain surface formed by folding of the cortex', pronunciation: 'JY-rus' },
        { term: 'sulcus', definition: 'A groove or furrow on the brain surface between gyri', pronunciation: 'SUL-kus' },
        { term: 'fissure', definition: 'A deep groove that separates major brain regions' },
        { term: 'hemisphere', definition: 'One half of the brain (left or right)', pronunciation: 'HEM-i-sfeer' },
      ],
      analogies: [
        'Gyri and sulci are like the hills and valleys on a topographic map, increasing the brain\'s surface area.',
      ],
    },
    3: {
      level: 3,
      summary: 'The cerebral cortex is a laminated neocortical structure organized into six histological layers, with functional specialization mapped by Brodmann areas and organized into primary, secondary, and association cortices.',
      explanation: `The cerebral cortex represents the pinnacle of neural evolution, with the neocortex (six-layered cortex) comprising about 90% of the cerebral cortex in humans.

**Histological Organization (Six Layers):**
- **Layer I (Molecular)**: Sparse neurons, mostly dendrites and axons
- **Layer II (External Granular)**: Small pyramidal and stellate cells
- **Layer III (External Pyramidal)**: Medium pyramidal cells; cortico-cortical connections
- **Layer IV (Internal Granular)**: Stellate cells; receives thalamic input
- **Layer V (Internal Pyramidal)**: Large pyramidal cells; major output layer
- **Layer VI (Multiform)**: Heterogeneous cells; corticothalamic projections

**Brodmann Areas (Key Regions):**
- Area 4: Primary motor cortex (precentral gyrus)
- Areas 3, 1, 2: Primary somatosensory cortex (postcentral gyrus)
- Area 17: Primary visual cortex (striate cortex)
- Areas 41, 42: Primary auditory cortex
- Area 44, 45: Broca's area (inferior frontal gyrus)
- Area 22: Wernicke's area (superior temporal gyrus)
- Areas 9, 10, 11, 12, 46, 47: Prefrontal cortex

**Functional Organization:**
- **Primary Cortices**: Direct sensory input or motor output
- **Secondary/Unimodal Association**: Process single modality
- **Multimodal Association**: Integrate multiple sensory modalities
- **Limbic Cortex**: Emotion and memory

**Cortical Columns:**
Neurons in vertical columns share similar response properties, representing the fundamental processing unit of the cortex.`,
      keyTerms: [
        { term: 'neocortex', definition: 'The six-layered cortex that makes up most of the cerebral cortex in mammals', pronunciation: 'NEE-oh-kor-tex' },
        { term: 'Brodmann area', definition: 'Cytoarchitectural regions of the cortex defined by cell type and organization' },
        { term: 'pyramidal cell', definition: 'Excitatory neurons with pyramid-shaped cell bodies; primary output neurons of the cortex' },
        { term: 'stellate cell', definition: 'Star-shaped interneurons, often inhibitory' },
        { term: 'cytoarchitecture', definition: 'The arrangement and types of cells in a tissue', pronunciation: 'SY-toe-ar-ki-tek-chur' },
      ],
    },
    4: {
      level: 4,
      summary: 'The cerebral cortex exhibits complex cytoarchitectural organization with layer-specific connectivity patterns, topographic mapping, and specialized microcircuits that underlie cognitive functions.',
      explanation: `**Cortical Microcircuitry:**

The canonical cortical microcircuit consists of:
1. **Thalamocortical input** → Layer IV granule cells
2. **Layer IV** → Layer II/III pyramidal cells
3. **Layer II/III** → Layer V pyramidal cells (and other cortical areas)
4. **Layer V** → Subcortical structures (basal ganglia, brainstem, spinal cord)
5. **Layer VI** → Thalamus (feedback)

**Excitatory/Inhibitory Balance:**
- ~80% excitatory glutamatergic pyramidal neurons
- ~20% inhibitory GABAergic interneurons
- Interneuron subtypes: Parvalbumin (PV), Somatostatin (SOM), VIP, NPY

**Topographic Organization:**
- **Somatotopy**: Homunculus representation in motor and sensory cortices
- **Retinotopy**: Visual field mapping in occipital cortex
- **Tonotopy**: Frequency mapping in auditory cortex

**Cortical Connectivity:**
- **Feedforward**: Layer II/III → Layer IV of higher areas
- **Feedback**: Layer V/VI → Layer I of lower areas
- **Horizontal**: Long-range connections within same hierarchical level

**Lateralization:**
- Language predominantly left hemisphere (95% right-handers)
- Spatial processing predominantly right hemisphere
- Corpus callosum enables interhemispheric communication

**Plasticity Mechanisms:**
- Hebbian plasticity: "Cells that fire together wire together"
- Critical periods for sensory development
- Adult neuroplasticity in association cortices`,
      keyTerms: [
        { term: 'somatotopy', definition: 'Topographic organization where body regions map to specific cortical areas' },
        { term: 'retinotopy', definition: 'Topographic organization where visual field locations map to specific cortical areas' },
        { term: 'homunculus', definition: 'A "little person" representation showing the cortical mapping of body parts' },
        { term: 'canonical microcircuit', definition: 'The stereotyped pattern of connectivity across cortical layers' },
      ],
      clinicalNotes: 'Cortical lesions produce deficits corresponding to the affected functional area. Stroke in different vascular territories produces characteristic syndromes (MCA: contralateral hemiparesis/sensory loss, aphasia if dominant hemisphere; PCA: contralateral visual field defect).',
    },
    5: {
      level: 5,
      summary: 'The cerebral cortex integrates molecular, cellular, and systems-level mechanisms underlying perception, cognition, and action, with clinical applications in neurological diagnosis, neurosurgery, and neuropsychiatry.',
      explanation: `**Advanced Cortical Neuroscience:**

**Columnar Organization and Processing:**
- Minicolumns (~80-100 neurons): Basic processing unit
- Macrocolumns (~300μm diameter): Functional units
- Orientation columns (V1), ocular dominance columns
- Barrels in rodent somatosensory cortex

**Oscillatory Dynamics:**
- Gamma (30-100Hz): Local processing, attention
- Beta (13-30Hz): Motor control, status quo
- Alpha (8-13Hz): Idle rhythm, attention modulation
- Theta (4-8Hz): Memory encoding
- Delta (0.5-4Hz): Sleep

**Hierarchical Predictive Processing:**
- Predictive coding framework
- Forward connections carry prediction errors
- Backward connections carry predictions
- Free energy minimization principle

**Clinical Applications:**

**Localization of Function:**
- Aphasia syndromes: Broca's (expressive), Wernicke's (receptive), Conduction, Global
- Agnosias: Visual, auditory, tactile
- Apraxias: Ideomotor, ideational, limb-kinetic
- Neglect syndromes (usually right parietal lesions)

**Cortical Mapping:**
- Intraoperative mapping with direct electrical stimulation
- fMRI and PET for preoperative planning
- Magnetoencephalography (MEG) for temporal resolution
- Wada test for language lateralization

**Pathological Conditions:**
- Epilepsy: Focal cortical dysplasia, cortical tubers
- Dementia: Cortical atrophy patterns (Alzheimer's: temporal-parietal; FTD: frontal)
- Psychiatric disorders: Prefrontal dysfunction in schizophrenia, depression

**Emerging Technologies:**
- Brain-computer interfaces targeting motor cortex
- Transcranial magnetic stimulation (TMS)
- Transcranial direct current stimulation (tDCS)
- Optogenetics in research`,
      keyTerms: [
        { term: 'aphasia', definition: 'Language impairment due to brain damage; Broca\'s (non-fluent, anterior) vs Wernicke\'s (fluent, posterior)' },
        { term: 'agnosia', definition: 'Inability to recognize objects, faces, or sounds despite intact sensory processing' },
        { term: 'apraxia', definition: 'Inability to perform learned motor tasks despite intact motor and sensory function' },
        { term: 'neglect syndrome', definition: 'Failure to attend to or report stimuli on one side of space, usually from right parietal lesion' },
        { term: 'predictive coding', definition: 'Theory that the brain constantly generates predictions and updates them based on prediction errors' },
      ],
      clinicalNotes: `Key vascular territories:
- ACA: Medial frontal/parietal → leg weakness, personality changes
- MCA: Lateral hemisphere → face/arm weakness, aphasia (dominant), neglect (non-dominant)
- PCA: Occipital, medial temporal → visual field defects, memory issues

Epilepsy surgery: Cortical resection for drug-resistant focal epilepsy requires detailed mapping. Eloquent cortex must be preserved.`,
    },
  },

  media: [
    {
      id: 'cerebral-cortex-3d',
      type: '3d-model',
      filename: 'cerebral_cortex.glb',
      title: 'Interactive 3D Cerebral Cortex',
      description: 'Rotatable model showing lobes, gyri, and sulci with selectable regions',
    },
    {
      id: 'brodmann-areas-diagram',
      type: 'diagram',
      filename: 'brodmann_areas.svg',
      title: 'Brodmann Areas Map',
      description: 'Lateral and medial views of Brodmann areas',
    },
    {
      id: 'cortical-layers-histology',
      type: 'histology',
      filename: 'cortical_layers.jpg',
      title: 'Six-Layer Cortical Histology',
      description: 'Nissl and Golgi stains showing cortical lamination',
    },
  ],

  citations: [
    {
      id: 'kandel-principles',
      type: 'textbook',
      title: 'Principles of Neural Science',
      authors: ['Kandel ER', 'Schwartz JH', 'Jessell TM', 'Siegelbaum SA', 'Hudspeth AJ'],
      source: 'McGraw-Hill',
      chapter: 'Part VI: The Cerebral Cortex',
    },
    {
      id: 'netter-atlas',
      type: 'textbook',
      title: 'Atlas of Human Anatomy',
      authors: ['Netter FH'],
      source: 'Elsevier',
      chapter: 'Nervous System',
    },
  ],

  crossReferences: [
    { targetId: 'anatomy-frontal-lobe', targetType: 'structure', relationship: 'child', label: 'Frontal Lobe' },
    { targetId: 'anatomy-parietal-lobe', targetType: 'structure', relationship: 'child', label: 'Parietal Lobe' },
    { targetId: 'anatomy-temporal-lobe', targetType: 'structure', relationship: 'child', label: 'Temporal Lobe' },
    { targetId: 'anatomy-occipital-lobe', targetType: 'structure', relationship: 'child', label: 'Occipital Lobe' },
    { targetId: 'anatomy-thalamus', targetType: 'structure', relationship: 'related', label: 'Thalamus' },
    { targetId: 'physiology-action-potential', targetType: 'pathway', relationship: 'see-also', label: 'Action Potential' },
  ],

  tags: {
    systems: ['nervous'],
    structures: ['FMA:61830', 'FMA:61819', 'FMA:61824', 'FMA:61826', 'FMA:61831'],
    topics: ['anatomy', 'neuroanatomy', 'brain'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'psychiatry', 'surgery'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export const frontalLobeContent: EducationalContent = {
  id: 'anatomy-frontal-lobe',
  type: 'structure',
  name: 'Frontal Lobe',
  alternateNames: ['Lobus frontalis'],
  fmaId: 'FMA:61819',

  levels: {
    1: {
      level: 1,
      summary: 'The frontal lobe is the front part of your brain that helps you think, plan, and move your body.',
      explanation: `The frontal lobe is located at the front of your brain, behind your forehead. It's the largest lobe and does many important jobs:

- **Thinking and planning**: When you decide what to have for lunch or plan your day, your frontal lobe is working
- **Personality**: It helps make you who you are
- **Movement**: It controls how you move your arms, legs, and body
- **Speaking**: It helps you form words and sentences
- **Controlling behavior**: It helps you think before you act

The frontal lobe is often called the "CEO of the brain" because it makes decisions and controls other parts.`,
      keyTerms: [
        { term: 'frontal', definition: 'At or relating to the front' },
        { term: 'personality', definition: 'The way a person thinks, feels, and behaves that makes them unique' },
      ],
      analogies: [
        'The frontal lobe is like the boss of a company, making decisions and giving orders to other parts.',
      ],
    },
    2: {
      level: 2,
      summary: 'The frontal lobe contains the primary motor cortex, prefrontal cortex, and Broca\'s area, controlling movement, executive function, and speech production.',
      explanation: `The frontal lobe extends from the front of the brain to the central sulcus. Key structures include:

**Motor Cortex (Precentral Gyrus)**
- Located just anterior to the central sulcus
- Controls voluntary movements
- Organized somatotopically (body parts mapped in order)
- Motor homunculus: Larger areas for hands, face, tongue (precise movements)

**Prefrontal Cortex**
- Largest part of the frontal lobe
- Executive functions: planning, decision-making, problem-solving
- Working memory
- Personality and social behavior
- Impulse control

**Broca's Area (Areas 44, 45)**
- Located in the inferior frontal gyrus (usually left hemisphere)
- Speech production and language processing
- Damage causes Broca's aphasia: difficulty producing speech but comprehension intact

**Frontal Eye Fields**
- Control voluntary eye movements (saccades)
- Located anterior to the premotor cortex`,
      keyTerms: [
        { term: 'precentral gyrus', definition: 'The ridge of brain tissue just in front of the central sulcus containing the primary motor cortex' },
        { term: 'executive function', definition: 'Higher-order cognitive processes including planning, attention, and problem-solving' },
        { term: 'Broca\'s area', definition: 'Region in the inferior frontal gyrus involved in speech production' },
        { term: 'saccade', definition: 'A rapid eye movement that shifts gaze from one point to another' },
      ],
    },
    3: {
      level: 3,
      summary: 'The frontal lobe comprises the primary motor cortex, premotor and supplementary motor areas, prefrontal cortex with dorsolateral and orbitofrontal subdivisions, and frontal language areas.',
      explanation: `**Gross Anatomy:**
- Boundaries: Anterior to central sulcus, superior to lateral fissure, anterior to precentral sulcus
- Major gyri: Superior, middle, and inferior frontal gyri; precentral gyrus

**Functional Subdivisions:**

**1. Primary Motor Cortex (M1, Area 4)**
- Precentral gyrus
- Giant Betz cells in layer V
- Direct corticospinal projections
- Somatotopic organization (inverted homunculus)

**2. Premotor Cortex (Area 6, lateral)**
- Movement planning and preparation
- Externally-cued movements
- Receives input from parietal lobe

**3. Supplementary Motor Area (Area 6, medial)**
- Internally generated movements
- Bimanual coordination
- Sequence learning

**4. Prefrontal Cortex**
- *Dorsolateral (DLPFC)*: Working memory, cognitive flexibility
- *Ventrolateral*: Response inhibition, task switching
- *Orbitofrontal (OFC)*: Decision-making, emotion, reward
- *Medial/Anterior Cingulate*: Error monitoring, motivation

**5. Frontal Language Areas**
- Broca's area (44, 45): Speech production
- Inferior frontal junction: Cognitive control of language

**Connections:**
- Corticospinal tract (motor)
- Superior longitudinal fasciculus (language network)
- Uncinate fasciculus (limbic connections)
- Cingulum bundle (cingulate connections)`,
      keyTerms: [
        { term: 'Betz cells', definition: 'Giant pyramidal neurons in layer V of primary motor cortex that project to spinal cord' },
        { term: 'dorsolateral prefrontal cortex', definition: 'Region involved in working memory and executive function', pronunciation: 'DOR-so-LAT-er-al' },
        { term: 'orbitofrontal cortex', definition: 'Region above the orbits involved in decision-making and emotion processing' },
        { term: 'supplementary motor area', definition: 'Medial frontal region involved in planning internally generated movements' },
      ],
    },
    4: {
      level: 4,
      summary: 'The frontal lobe integrates motor, cognitive, and limbic functions through hierarchical cortical organization and reciprocal connections with basal ganglia, thalamus, and limbic structures.',
      explanation: `**Frontal-Subcortical Circuits:**

Five parallel circuits connect frontal cortex with basal ganglia and thalamus:

1. **Motor Circuit**: M1 → Putamen → GPi/SNr → VL thalamus → M1
2. **Oculomotor Circuit**: FEF → Caudate → GPi/SNr → VA/MD thalamus → FEF
3. **Dorsolateral Prefrontal Circuit**: DLPFC → Caudate → GPi/SNr → VA/MD → DLPFC
4. **Orbitofrontal Circuit**: OFC → Caudate → GPi/SNr → VA/MD → OFC
5. **Anterior Cingulate Circuit**: ACC → NAc → VP → MD → ACC

**Prefrontal Cortex Neurophysiology:**
- Sustained activity during delay periods (working memory)
- Rule representation and task switching
- Error-related negativity (ERN) in ACC
- Value coding in OFC

**Motor Planning Hierarchy:**
- Prefrontal: Goal selection
- Premotor/SMA: Action selection and sequencing
- M1: Movement execution
- Preparatory activity (readiness potential) before voluntary movement

**Frontal Lobe Syndromes:**

*Dorsolateral Syndrome:*
- Executive dysfunction
- Working memory deficits
- Impaired set-shifting
- Decreased verbal fluency

*Orbitofrontal Syndrome:*
- Disinhibition
- Impulsivity
- Emotional lability
- Poor decision-making

*Medial Frontal Syndrome:*
- Akinetic mutism (severe)
- Apathy, abulia
- Reduced spontaneity`,
      keyTerms: [
        { term: 'frontal-subcortical circuit', definition: 'Parallel loops connecting frontal cortex to basal ganglia and thalamus' },
        { term: 'akinetic mutism', definition: 'Severe reduction in spontaneous movement and speech despite preserved alertness' },
        { term: 'abulia', definition: 'Lack of will or initiative to act or speak' },
        { term: 'readiness potential', definition: 'EEG signal preceding voluntary movement, originating in SMA' },
      ],
      clinicalNotes: 'Frontal lobe dysfunction manifests differently depending on location. DLPFC lesions impair executive function (poor planning, perseveration). OFC lesions cause personality changes (disinhibition, Phineas Gage-like syndrome). Medial frontal lesions cause apathy.',
    },
    5: {
      level: 5,
      summary: 'The frontal lobe is central to neuropsychiatric disorders, with implications for forensic neurology, neurorehabilitation, and emerging neuromodulation therapies.',
      explanation: `**Clinical Assessment of Frontal Function:**

*Bedside Tests:*
- Verbal fluency (letter and category)
- Trail Making Test (TMT A/B)
- Stroop test
- Go/No-Go tasks
- Luria motor sequences
- Frontal Assessment Battery (FAB)

*Neuroimaging:*
- Structural MRI: Atrophy patterns
- fMRI: Task-based activation
- FDG-PET: Hypometabolism in FTD
- DTI: White matter tract integrity

**Frontal Lobe in Disease:**

*Frontotemporal Dementia (FTD):*
- Behavioral variant: OFC/medial PFC atrophy
- Progressive nonfluent aphasia: Left posterior frontal
- Pick bodies, TDP-43, tau pathology

*Traumatic Brain Injury:*
- Frontal contusions common (coup-contrecoup)
- Diffuse axonal injury affecting frontal connections
- Executive dysfunction, personality change

*Schizophrenia:*
- Hypofrontality during cognitive tasks
- Working memory deficits
- DLPFC dysfunction

**Neuromodulation:**
- rTMS over DLPFC: Depression (FDA approved)
- Deep brain stimulation of subcallosal cingulate: Treatment-resistant depression
- TMS over motor cortex: Post-stroke rehabilitation

**Forensic Implications:**
- Frontal lesions and criminal responsibility
- Impulse control disorders
- Capacity evaluations

**Surgical Considerations:**
- Frontal lobectomy for epilepsy
- Tumor resection: Preserve motor and language function
- Awake craniotomy for mapping`,
      keyTerms: [
        { term: 'frontotemporal dementia', definition: 'Degenerative disease affecting frontal and temporal lobes; behavioral or language variants' },
        { term: 'hypofrontality', definition: 'Reduced frontal lobe activity on functional imaging' },
        { term: 'awake craniotomy', definition: 'Neurosurgical procedure where patient is awake to allow cortical mapping' },
      ],
      clinicalNotes: `Frontal lobe assessment is crucial in dementia evaluation. FTD often misdiagnosed as psychiatric illness. Key distinguishing features from Alzheimer's: Early personality/behavior changes, relative memory preservation early, frontal hypometabolism on PET.

Montreal Cognitive Assessment (MoCA) includes frontal/executive items. More detailed testing with neuropsychological battery may be needed.`,
    },
  },

  media: [
    {
      id: 'frontal-lobe-3d',
      type: '3d-model',
      filename: 'frontal_lobe.glb',
      title: 'Interactive 3D Frontal Lobe',
      description: 'Rotatable model highlighting major gyri and functional areas',
    },
  ],

  citations: [
    {
      id: 'stuss-principles-frontal',
      type: 'textbook',
      title: 'Principles of Frontal Lobe Function',
      authors: ['Stuss DT', 'Knight RT'],
      source: 'Oxford University Press',
    },
  ],

  crossReferences: [
    { targetId: 'anatomy-cerebral-cortex', targetType: 'structure', relationship: 'parent', label: 'Cerebral Cortex' },
    { targetId: 'anatomy-basal-ganglia', targetType: 'structure', relationship: 'related', label: 'Basal Ganglia' },
    { targetId: 'physiology-motor-pathways', targetType: 'pathway', relationship: 'see-also', label: 'Motor Pathways' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['anatomy', 'neuroanatomy', 'brain'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['neurology', 'psychiatry'] },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export const parietalLobeContent: EducationalContent = {
  id: 'anatomy-parietal-lobe',
  type: 'structure',
  name: 'Parietal Lobe',
  alternateNames: ['Lobus parietalis'],
  fmaId: 'FMA:61824',

  levels: {
    1: {
      level: 1,
      summary: 'The parietal lobe is near the top of your brain and helps you feel touch and understand where things are in space.',
      explanation: `The parietal lobe sits at the top of your brain, behind the frontal lobe. It has important jobs:

- **Feeling touch**: When you touch something hot, cold, or soft, your parietal lobe processes that feeling
- **Knowing where your body is**: It helps you know where your arms and legs are even with your eyes closed
- **Understanding space**: It helps you navigate and understand maps
- **Math and reading**: It helps you work with numbers and read words

Without your parietal lobe, you might have trouble getting dressed because you couldn't figure out how to put your arm through a sleeve!`,
      keyTerms: [
        { term: 'parietal', definition: 'Relating to the wall or side of a body part' },
        { term: 'touch', definition: 'The sense that lets you feel pressure, temperature, and texture' },
        { term: 'spatial', definition: 'Relating to space and the position of things' },
      ],
      analogies: [
        'The parietal lobe is like a GPS system - it knows where you are and where things are around you.',
      ],
    },
    2: {
      level: 2,
      summary: 'The parietal lobe contains the primary somatosensory cortex for processing touch and proprioception, and association areas for spatial awareness and multisensory integration.',
      explanation: `The parietal lobe is located posterior to the central sulcus and superior to the lateral fissure.

**Key Structures:**

**Primary Somatosensory Cortex (Postcentral Gyrus)**
- Located just behind the central sulcus
- Processes touch, pressure, temperature, and pain information
- Organized somatotopically (sensory homunculus)
- Larger areas for sensitive parts: lips, hands, fingers

**Posterior Parietal Cortex**
- *Superior Parietal Lobule*: Spatial attention, reaching movements
- *Inferior Parietal Lobule*: Language, math, multisensory integration
  - Supramarginal gyrus (Area 40)
  - Angular gyrus (Area 39): Reading, writing, calculation

**Functions:**
- Sensory integration
- Spatial reasoning and navigation
- Attention to space
- Body schema (internal representation of body)
- Praxis (learned skilled movements)

**Clinical Importance:**
- Right parietal damage: Hemispatial neglect
- Left parietal damage: Aphasia, apraxia, acalculia (Gerstmann syndrome)`,
      keyTerms: [
        { term: 'somatosensory', definition: 'Relating to body sensations including touch, temperature, and position' },
        { term: 'postcentral gyrus', definition: 'The ridge of brain tissue behind the central sulcus containing primary somatosensory cortex' },
        { term: 'proprioception', definition: 'The sense of the position and movement of your body parts' },
        { term: 'homunculus', definition: 'A distorted human figure showing the relative size of cortical areas devoted to each body part' },
      ],
    },
    3: {
      level: 3,
      summary: 'The parietal lobe integrates somatosensory information through a hierarchical processing stream and contains multimodal association cortex critical for spatial cognition, attention, and sensorimotor transformation.',
      explanation: `**Structural Organization:**

**Primary Somatosensory Cortex (S1, Areas 3, 1, 2):**
- Area 3a: Proprioception from muscle spindles
- Area 3b: Cutaneous mechanoreceptors (main component)
- Area 1: Texture processing
- Area 2: Size and shape processing
- Columnar organization for body region and receptor type

**Secondary Somatosensory Cortex (S2):**
- Located in parietal operculum
- Bilateral representation
- Higher-order tactile processing
- Projects to insular cortex

**Posterior Parietal Cortex (PPC):**

*Superior Parietal Lobule (Area 5, 7):*
- Sensorimotor integration
- Reaching and grasping
- Visuospatial processing
- Dorsal visual stream terminus

*Inferior Parietal Lobule:*
- Supramarginal Gyrus (Area 40):
  - Phonological processing
  - Involved in conduction aphasia when damaged
- Angular Gyrus (Area 39):
  - Semantic processing
  - Reading, writing, calculation
  - Gerstmann syndrome: finger agnosia, agraphia, acalculia, left-right confusion

**Intraparietal Sulcus (IPS):**
- Attention orienting
- Number processing
- Eye-hand coordination
- Multiple functional areas (LIP, VIP, AIP, MIP)`,
      keyTerms: [
        { term: 'parietal operculum', definition: 'Part of parietal lobe overlying the insula, contains S2' },
        { term: 'supramarginal gyrus', definition: 'Inferior parietal region involved in phonological processing' },
        { term: 'angular gyrus', definition: 'Posterior inferior parietal region involved in language and calculation' },
        { term: 'intraparietal sulcus', definition: 'Sulcus dividing superior and inferior parietal lobules, contains multiple functional areas' },
      ],
    },
    4: {
      level: 4,
      summary: 'The parietal lobe implements sensorimotor transformations, spatial attention mechanisms, and multimodal integration through specialized cortical areas with distinct connectivity patterns and physiological properties.',
      explanation: `**Somatosensory Processing:**

*Receptive Field Organization:*
- S1 neurons have small, contralateral receptive fields
- Hierarchical increase in receptive field size
- S2 has bilateral receptive fields
- Feature selectivity increases along hierarchy

*Plasticity:*
- Cortical reorganization after deafferentation
- Phantom limb phenomena
- Training-induced expansion of representations

**Posterior Parietal Cortex Physiology:**

*Spatial Attention:*
- Gain modulation of sensory responses
- Attentional priority maps
- Extinction: Failure to detect contralesional stimuli when competing ipsilesional stimulus present

*Sensorimotor Transformation:*
- LIP: Saccade planning
- AIP: Grasp planning (visuomotor integration)
- MIP/PRR: Reaching movements
- VIP: Head-centered spatial representations

*Neural Coding:*
- Gain fields for coordinate transformations
- Basis function approach to reference frame transformation
- Evidence accumulation for decision-making

**Clinical Syndromes:**

*Hemispatial Neglect (Right Parietal):*
- Inattention to left hemispace
- Multiple subtypes: personal, peripersonal, extrapersonal
- Assessment: Line bisection, cancellation tasks, drawing
- Often with anosognosia

*Apraxia:*
- Ideomotor: Cannot pantomime but can imitate
- Ideational: Cannot sequence complex actions
- Usually left parietal lesions

*Balint Syndrome (Bilateral PPC):*
- Simultanagnosia
- Optic ataxia
- Ocular apraxia`,
      keyTerms: [
        { term: 'gain modulation', definition: 'Multiplicative change in neural response without changing selectivity' },
        { term: 'optic ataxia', definition: 'Misreaching for visual targets, due to visuomotor disconnection' },
        { term: 'simultanagnosia', definition: 'Inability to perceive more than one object at a time' },
        { term: 'anosognosia', definition: 'Lack of awareness of one\'s own neurological deficit' },
      ],
      clinicalNotes: 'Right parietal lesions (usually MCA territory) cause left hemispatial neglect, which predicts poor functional outcome. Left parietal lesions cause apraxia and may contribute to aphasia. Balint syndrome from bilateral watershed infarcts.',
    },
    5: {
      level: 5,
      summary: 'The parietal lobe is central to embodied cognition, mathematical reasoning, and disorders of spatial awareness, with applications in neurorehabilitation, prosthetics, and brain-computer interfaces.',
      explanation: `**Advanced Parietal Lobe Neuroscience:**

**Computational Models:**
- Bayesian integration of multisensory information
- Optimal cue combination
- Internal models for motor control
- Active inference framework

**Body Representation:**
- Body schema vs body image
- Rubber hand illusion (multisensory integration)
- Out-of-body experiences
- Phantom limbs and cortical reorganization

**Number Processing:**
- Triple code theory (analog magnitude, verbal, visual)
- Intraparietal sulcus: Core magnitude representation
- Developmental dyscalculia: IPS abnormalities
- Acalculia subtypes: Anarithmetia, alexia/agraphia for numbers

**Clinical Applications:**

*Neglect Rehabilitation:*
- Prism adaptation therapy
- Vestibular stimulation
- Limb activation therapy
- Virtual reality approaches

*Brain-Computer Interfaces:*
- Parietal reach region for cursor control
- Neural decoding of movement intention
- High-level movement planning signals

**Surgical Considerations:**
- Awake craniotomy for sensory mapping
- Somatosensory evoked potentials (SSEPs)
- Language mapping for left angular/supramarginal gyrus
- Avoid inferior parietal lobule in dominant hemisphere

**Research Frontiers:**
- Neural basis of consciousness (IIT, GNW)
- Tool use and body schema extension
- Posterior parietal cortex in decision-making
- Vestibular-parietal interactions for spatial orientation`,
      keyTerms: [
        { term: 'prism adaptation', definition: 'Therapy using prism goggles to recalibrate spatial attention in neglect' },
        { term: 'rubber hand illusion', definition: 'Phenomenon where synchronous touch makes a rubber hand feel like one\'s own' },
        { term: 'Bayesian integration', definition: 'Statistically optimal combination of sensory information based on reliability' },
      ],
      clinicalNotes: `Parietal lobe assessment requires specific tests:
- Sensory: Two-point discrimination, graphesthesia, stereognosis
- Spatial: Line bisection, clock drawing, copying figures
- Praxis: Pantomime, imitation of gestures
- Body schema: Finger naming, right-left orientation

Key for stroke localization: MCA supplies most of lateral parietal lobe. PCA supplies precuneus and medial parietal regions.`,
    },
  },

  media: [
    {
      id: 'parietal-lobe-3d',
      type: '3d-model',
      filename: 'parietal_lobe.glb',
      title: 'Interactive 3D Parietal Lobe',
      description: 'Rotatable model showing sensory cortex and association areas',
    },
  ],

  citations: [
    {
      id: 'kandel-somatosensory',
      type: 'textbook',
      title: 'Principles of Neural Science',
      authors: ['Kandel ER', 'Schwartz JH', 'Jessell TM'],
      source: 'McGraw-Hill',
      chapter: 'The Somatosensory System',
    },
  ],

  crossReferences: [
    { targetId: 'anatomy-cerebral-cortex', targetType: 'structure', relationship: 'parent', label: 'Cerebral Cortex' },
    { targetId: 'physiology-sensory-pathways', targetType: 'pathway', relationship: 'see-also', label: 'Sensory Pathways' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['anatomy', 'neuroanatomy', 'brain'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['neurology'] },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export const temporalLobeContent: EducationalContent = {
  id: 'anatomy-temporal-lobe',
  type: 'structure',
  name: 'Temporal Lobe',
  alternateNames: ['Lobus temporalis'],
  fmaId: 'FMA:61826',

  levels: {
    1: {
      level: 1,
      summary: 'The temporal lobe is on the sides of your brain and helps you hear sounds and remember things.',
      explanation: `The temporal lobe is located on the sides of your brain, near your ears. It has two main jobs:

- **Hearing**: When you listen to music, a teacher talking, or a car honking, your temporal lobe processes those sounds
- **Memory**: It helps you remember things like what you did yesterday or your friend's name
- **Understanding words**: It helps you understand what people are saying to you

The temporal lobe also helps with recognizing faces and understanding emotions.`,
      keyTerms: [
        { term: 'temporal', definition: 'Relating to time or the temples (sides of the head)' },
        { term: 'memory', definition: 'The ability to store and recall information and experiences' },
      ],
      analogies: [
        'The temporal lobe is like a recording studio - it processes sounds and stores memories like recordings.',
      ],
    },
    2: {
      level: 2,
      summary: 'The temporal lobe contains the auditory cortex for hearing, Wernicke\'s area for language comprehension, and the hippocampus for memory formation.',
      explanation: `The temporal lobe sits below the lateral fissure on the lateral surface of the brain.

**Key Structures:**

**Superior Temporal Gyrus**
- Contains the primary auditory cortex (Heschl's gyrus)
- Wernicke's area (posterior part): Language comprehension
- Auditory association cortex: Processing complex sounds

**Middle Temporal Gyrus**
- Visual motion processing (MT/V5 area)
- Language processing
- Semantic memory

**Inferior Temporal Gyrus**
- Visual object recognition
- Face recognition (fusiform face area)

**Medial Temporal Lobe**
- *Hippocampus*: Formation of new memories
- *Amygdala*: Processing emotions, especially fear
- *Parahippocampal gyrus*: Spatial navigation
- *Entorhinal cortex*: Gateway to hippocampus

**Clinical Importance:**
- Wernicke's aphasia: Fluent but meaningless speech
- Temporal lobe epilepsy: Most common focal epilepsy
- Memory impairment: Hippocampal damage
- Prosopagnosia: Face recognition deficit`,
      keyTerms: [
        { term: 'Wernicke\'s area', definition: 'Region in posterior superior temporal gyrus involved in language comprehension' },
        { term: 'hippocampus', definition: 'Seahorse-shaped structure essential for forming new memories' },
        { term: 'amygdala', definition: 'Almond-shaped structure that processes emotions, especially fear' },
        { term: 'auditory cortex', definition: 'Region that processes sound information' },
      ],
    },
    3: {
      level: 3,
      summary: 'The temporal lobe contains the primary auditory cortex with tonotopic organization, the ventral visual stream for object recognition, and the medial temporal lobe memory system.',
      explanation: `**Auditory System:**

*Primary Auditory Cortex (A1, Areas 41, 42):*
- Located in transverse temporal gyri (Heschl's gyri)
- Tonotopic organization (frequency mapping)
- Columnar organization for frequency and binaural properties

*Auditory Association Areas:*
- Belt and parabelt regions
- "What" vs "Where" auditory streams
- Superior temporal sulcus: Voice processing

**Ventral Visual Stream ("What" pathway):**
- V4 → TEO → TE (anterior temporal)
- Increasingly complex feature selectivity
- Invariant object representations
- Face-selective regions (fusiform face area, occipital face area)

**Language Network:**
- Wernicke's area (Area 22): Phonological processing, comprehension
- Middle temporal gyrus: Semantic processing
- Arcuate fasciculus connects to Broca's area
- Damage causes Wernicke's aphasia: Fluent, paraphasic, poor comprehension

**Medial Temporal Lobe (MTL):**

*Hippocampal Formation:*
- Dentate gyrus → CA3 → CA1 → Subiculum
- Trisynaptic circuit
- Pattern separation and completion
- Spatial navigation and place cells

*Entorhinal Cortex:*
- Layer II: Input to hippocampus
- Grid cells for spatial navigation
- First affected in Alzheimer's disease

*Perirhinal and Parahippocampal Cortex:*
- Object recognition memory
- Spatial context processing`,
      keyTerms: [
        { term: 'tonotopic', definition: 'Organization where sound frequencies map to specific cortical locations' },
        { term: 'fusiform face area', definition: 'Region in fusiform gyrus specialized for face recognition' },
        { term: 'place cells', definition: 'Hippocampal neurons that fire when animal is in specific location' },
        { term: 'grid cells', definition: 'Entorhinal neurons that fire in hexagonal spatial pattern' },
      ],
    },
    4: {
      level: 4,
      summary: 'The temporal lobe implements hierarchical auditory and visual processing, declarative memory consolidation, and semantic knowledge through specialized neural circuits with distinct physiological properties.',
      explanation: `**Auditory Cortex Physiology:**
- Frequency tuning curves
- Spectrotemporal receptive fields
- Forward suppression
- Attentional modulation
- Speech-selective responses in STS

**Ventral Stream Processing:**
- Receptive field size increases anteriorly
- Position and size invariance
- Sparse population coding
- Semantic category selectivity (faces, places, bodies)
- fMRI-adaptation paradigms reveal selectivity

**Memory Systems:**

*Hippocampal Function:*
- Theta oscillations (4-8 Hz): Memory encoding
- Sharp-wave ripples: Consolidation during sleep
- Pattern completion: CA3 recurrent connections
- Complementary learning systems theory
- Indexing theory: Hippocampus indexes cortical representations

*Memory Consolidation:*
- Systems consolidation: MTL → Neocortex
- Standard vs multiple trace theory
- Memory reactivation during sleep

*Amnesia:*
- Anterograde > retrograde in MTL lesions
- H.M. case: Bilateral MTL resection
- Intact procedural memory, working memory
- Temporally graded retrograde amnesia

**Temporal Lobe Epilepsy:**
- Mesial temporal sclerosis
- Hippocampal neuronal loss, gliosis
- Characteristic aura: Deja vu, epigastric rising sensation
- Complex partial seizures with automatisms
- Surgical candidate evaluation: MRI, PET, EEG, Wada`,
      keyTerms: [
        { term: 'sharp-wave ripple', definition: 'High-frequency oscillation during sleep, involved in memory consolidation' },
        { term: 'mesial temporal sclerosis', definition: 'Hippocampal scarring, common cause of temporal lobe epilepsy' },
        { term: 'complementary learning systems', definition: 'Theory that hippocampus and neocortex have different learning rules' },
        { term: 'systems consolidation', definition: 'Process by which memories become independent of hippocampus' },
      ],
      clinicalNotes: 'Temporal lobe epilepsy evaluation includes MRI (look for mesial temporal sclerosis), video-EEG, neuropsychological testing, PET (hypometabolism), and sometimes WADA test for language/memory lateralization before surgery.',
    },
    5: {
      level: 5,
      summary: 'The temporal lobe is central to auditory perception, semantic memory, and episodic memory, with clinical applications in epilepsy surgery, dementia diagnosis, and understanding consciousness.',
      explanation: `**Advanced Topics:**

**Auditory Processing:**
- Predictive coding in auditory cortex
- Mismatch negativity (MMN): Prediction error signal
- Frequency-following response for temporal encoding
- Speech processing: TRACE model, Cohort model

**Face Processing Network:**
- Core system: OFA, FFA, pSTS
- Extended system: Amygdala, insula, reward system
- Congenital vs acquired prosopagnosia
- Super-recognizers

**Semantic Memory:**
- Hub-and-spoke model: Anterior temporal lobe as hub
- Semantic dementia: ATL atrophy
- Category-specific deficits (living vs non-living)
- Embodied semantics

**Clinical Applications:**

*Epilepsy Surgery:*
- Anterior temporal lobectomy
- Selective amygdalohippocampectomy
- Memory outcome prediction
- Language mapping with fMRI/Wada

*Alzheimer's Disease:*
- Entorhinal cortex first affected
- Hippocampal atrophy on MRI (Scheltens scale)
- MTL hypometabolism on FDG-PET
- CSF biomarkers: Aβ, tau

*Herpes Simplex Encephalitis:*
- Temporal lobe predilection
- Hemorrhagic necrosis
- Anterograde and retrograde amnesia
- Personality changes if OFC involved

**Consciousness and Memory:**
- Episodic memory and sense of self
- Mental time travel
- Recollection vs familiarity
- Recognition memory: Remember/Know paradigm

**Research Methods:**
- Intracranial EEG in epilepsy patients
- Single-unit recordings (concept cells)
- fMRI pattern analysis (MVPA)
- Lesion-symptom mapping`,
      keyTerms: [
        { term: 'semantic dementia', definition: 'Progressive loss of semantic knowledge with anterior temporal atrophy' },
        { term: 'concept cells', definition: 'Neurons in MTL that respond to specific concepts regardless of modality' },
        { term: 'MVPA', definition: 'Multi-voxel pattern analysis - machine learning applied to fMRI data' },
      ],
      clinicalNotes: `Temporal lobe pathology approach:
- Acute: HSV encephalitis (hemorrhagic, PCR diagnosis, acyclovir)
- Subacute: Autoimmune limbic encephalitis (anti-LGI1, anti-NMDAR)
- Chronic: Temporal lobe epilepsy, Alzheimer's disease

Red flags for temporal lobe epilepsy: Febrile seizures, family history, aura with automatisms. MRI may show hippocampal atrophy and signal change.`,
    },
  },

  media: [
    {
      id: 'temporal-lobe-3d',
      type: '3d-model',
      filename: 'temporal_lobe.glb',
      title: 'Interactive 3D Temporal Lobe',
      description: 'Rotatable model showing auditory cortex and medial temporal structures',
    },
  ],

  citations: [
    {
      id: 'squire-memory',
      type: 'textbook',
      title: 'Memory and Brain',
      authors: ['Squire LR'],
      source: 'Oxford University Press',
    },
  ],

  crossReferences: [
    { targetId: 'anatomy-cerebral-cortex', targetType: 'structure', relationship: 'parent', label: 'Cerebral Cortex' },
    { targetId: 'physiology-hearing', targetType: 'pathway', relationship: 'see-also', label: 'Hearing Physiology' },
    { targetId: 'physiology-memory', targetType: 'pathway', relationship: 'see-also', label: 'Memory and Learning' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['anatomy', 'neuroanatomy', 'brain'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['neurology', 'psychiatry'] },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export const occipitalLobeContent: EducationalContent = {
  id: 'anatomy-occipital-lobe',
  type: 'structure',
  name: 'Occipital Lobe',
  alternateNames: ['Lobus occipitalis', 'Visual cortex'],
  fmaId: 'FMA:61831',

  levels: {
    1: {
      level: 1,
      summary: 'The occipital lobe is at the back of your brain and helps you see.',
      explanation: `The occipital lobe is located at the very back of your brain, at the back of your head. Its main job is to help you see!

- **Processing what your eyes see**: Light enters your eyes, but your occipital lobe is what actually creates the picture in your mind
- **Colors and shapes**: It helps you see colors, recognize shapes, and understand what you're looking at
- **Movement**: It helps you see things moving

Even though your eyes are in the front of your head, the seeing part of your brain is in the back. The information travels from your eyes to the back of your brain through a special pathway.`,
      keyTerms: [
        { term: 'occipital', definition: 'Relating to the back of the head' },
        { term: 'vision', definition: 'The ability to see' },
      ],
      analogies: [
        'The occipital lobe is like a TV screen that shows you pictures from cameras (your eyes).',
      ],
    },
    2: {
      level: 2,
      summary: 'The occipital lobe contains the primary visual cortex and visual association areas that process visual information from color to motion to object recognition.',
      explanation: `The occipital lobe is the smallest lobe, located at the posterior part of the brain. It's almost entirely dedicated to vision.

**Key Structures:**

**Primary Visual Cortex (V1, Area 17)**
- Located along the calcarine sulcus
- First cortical area to receive visual information
- Organized retinotopically (like a map of what you see)
- Responds to edges, orientations, and simple features

**Visual Association Areas:**
- *V2 (Area 18)*: Further processing of visual features
- *V3*: Form processing
- *V4*: Color processing
- *V5/MT*: Motion processing

**Visual Pathways (After Occipital Lobe):**
- "What" pathway (Ventral): Goes to temporal lobe for object recognition
- "Where" pathway (Dorsal): Goes to parietal lobe for spatial awareness

**Visual Field Mapping:**
- Upper visual field → Below calcarine sulcus
- Lower visual field → Above calcarine sulcus
- Central vision → Posterior occipital cortex (largest representation)
- Peripheral vision → Anterior occipital cortex`,
      keyTerms: [
        { term: 'primary visual cortex', definition: 'The first cortical area to process visual information, located in V1' },
        { term: 'calcarine sulcus', definition: 'A groove in the occipital lobe where primary visual cortex is located' },
        { term: 'retinotopic', definition: 'Organization where nearby points in visual space map to nearby points in cortex' },
      ],
    },
    3: {
      level: 3,
      summary: 'The occipital lobe contains hierarchically organized visual areas with specialized processing for color, motion, form, and spatial location, receiving input from the lateral geniculate nucleus via optic radiations.',
      explanation: `**Visual Pathway to Occipital Cortex:**
1. Retina → Optic nerve
2. Optic chiasm (nasal fibers cross)
3. Optic tract → Lateral Geniculate Nucleus (LGN)
4. Optic radiations → Primary visual cortex

*Meyer's Loop*: Temporal lobe fibers (lower visual field)
*Baum's Loop*: Parietal lobe fibers (upper visual field)

**Primary Visual Cortex (V1/Striate Cortex):**
- Layer 4C receives LGN input
- Magnocellular (M) pathway: Motion, location (layers 4Cα)
- Parvocellular (P) pathway: Color, form (layers 4Cβ)
- Simple and complex cells (Hubel & Wiesel)
- Orientation columns, ocular dominance columns

**Extrastriate Visual Areas:**
- V2: Complex contours, illusory contours
- V3: Dynamic form
- V4: Color constancy, form processing
- V5/MT: Motion direction, speed
- MST: Optic flow, heading direction

**Higher Visual Processing:**
- *Lateral Occipital Complex*: Object shape
- *Fusiform Face Area*: Face recognition (temporal lobe boundary)
- *Parahippocampal Place Area*: Scene/place recognition

**Visual Field Defects:**
- Homonymous hemianopia: Contralateral visual field loss
- Quadrantanopia: Quarter field loss
- Macular sparing: Dual blood supply to occipital pole`,
      keyTerms: [
        { term: 'lateral geniculate nucleus', definition: 'Thalamic relay for visual information' },
        { term: 'optic radiations', definition: 'White matter fibers from LGN to visual cortex' },
        { term: 'homonymous hemianopia', definition: 'Loss of same half of visual field in both eyes' },
        { term: 'magnocellular pathway', definition: 'Visual pathway specialized for motion and location' },
        { term: 'parvocellular pathway', definition: 'Visual pathway specialized for color and fine detail' },
      ],
    },
    4: {
      level: 4,
      summary: 'The occipital lobe implements hierarchical visual processing through canonical cortical computations including edge detection, feature binding, and predictive coding, with distinct dorsal and ventral streams for action and perception.',
      explanation: `**V1 Physiology:**

*Receptive Field Properties:*
- Simple cells: Linear spatial summation, orientation tuned
- Complex cells: Position-invariant, direction selective
- Hypercomplex cells: End-stopped, respond to corners/terminators

*Population Coding:*
- Orientation columns (every 180° represented)
- Hypercolumns: Complete processing module
- Sparse coding: Few neurons active for any stimulus

**Computational Principles:**

*Hierarchical Processing:*
- Increasing receptive field size
- Increasing invariance (position, size, illumination)
- Increasing semantic content

*Predictive Coding:*
- Feedforward: Bottom-up prediction errors
- Feedback: Top-down predictions
- Attention modulates gain of prediction errors

**Dorsal vs Ventral Streams:**

*Dorsal Stream (Parietal):*
- Vision for action
- Real-time spatial processing
- Unaffected by visual illusions
- Preserved in visual agnosia

*Ventral Stream (Temporal):*
- Vision for perception
- Object recognition
- Affected by visual illusions
- Impaired in visual agnosia

**Clinical Correlates:**

*Cortical Blindness:*
- Bilateral V1 lesions
- Anton syndrome: Denial of blindness
- May have blindsight (residual processing)

*Visual Agnosias:*
- Apperceptive: Cannot perceive form
- Associative: Cannot assign meaning
- Prosopagnosia: Face recognition deficit
- Alexia without agraphia: Cannot read but can write

*Higher-Order Deficits:*
- Akinetopsia: Motion blindness (MT lesions)
- Achromatopsia: Color blindness (V4 lesions)
- Visual object agnosia`,
      keyTerms: [
        { term: 'blindsight', definition: 'Residual visual ability in cortically blind patients, without conscious awareness' },
        { term: 'Anton syndrome', definition: 'Denial of blindness despite cortical blindness' },
        { term: 'akinetopsia', definition: 'Inability to perceive motion' },
        { term: 'achromatopsia', definition: 'Complete loss of color vision from cortical damage' },
      ],
      clinicalNotes: 'Visual field testing (confrontation, Humphrey) localizes lesions: Optic nerve = monocular; Chiasm = bitemporal hemianopia; Tract/LGN = homonymous hemianopia; Temporal optic radiations = superior quadrantanopia ("pie in the sky"); Parietal optic radiations = inferior quadrantanopia.',
    },
    5: {
      level: 5,
      summary: 'The occipital lobe is the entry point for conscious visual experience, with clinical applications in stroke localization, visual prosthetics, and understanding disorders of visual awareness.',
      explanation: `**Advanced Visual Neuroscience:**

**Neural Correlates of Visual Awareness:**
- V1 activity not sufficient for awareness
- Recurrent processing between V1 and higher areas
- Feedback loops essential for conscious perception
- Global workspace theory
- Binocular rivalry studies

**Visual Prosthetics:**
- Retinal implants (Argus II)
- Cortical implants targeting V1
- Phosphene generation
- Challenges: Resolution, cortical mapping, plasticity

**Neuroimaging:**
- fMRI retinotopic mapping
- Population receptive field (pRF) modeling
- Visual field mapping for surgical planning
- DTI tractography of optic radiations

**Clinical Applications:**

*Stroke Localization:*
- PCA stroke: Homonymous hemianopia ± macular sparing
- Preserved macular vision suggests dual blood supply
- Alexia without agraphia: Left occipital + splenium

*Migraine Visual Phenomena:*
- Cortical spreading depression
- Scintillating scotoma (V1/V2)
- Visual aura mapping to cortical areas

*Visual Rehabilitation:*
- Compensatory saccade training
- Visual restoration therapy (controversial)
- Prism adaptation for hemianopia

**Posterior Cortical Atrophy (PCA):**
- Visual variant of Alzheimer's disease
- Progressive visual agnosia, apraxia
- Occipitoparietal atrophy
- Relatively preserved memory early

**Research Methods:**
- Single-unit recordings in V1
- Two-photon calcium imaging
- Optogenetics for circuit dissection
- Computational models (CNN parallels to ventral stream)`,
      keyTerms: [
        { term: 'posterior cortical atrophy', definition: 'Neurodegenerative disease affecting visual cortex, often Alzheimer pathology' },
        { term: 'population receptive field', definition: 'fMRI method to map visual field representation in cortex' },
        { term: 'cortical spreading depression', definition: 'Wave of neuronal depolarization thought to underlie migraine aura' },
      ],
      clinicalNotes: `Visual field testing is essential for:
- Stroke localization
- Pituitary tumor (bitemporal hemianopia)
- Glaucoma monitoring
- Driving safety assessment

PCA presents as visual/visuospatial dysfunction with relatively preserved memory. Often misdiagnosed as eye problem. MRI shows posterior atrophy. Consider in patients with progressive visual complaints and normal eye exam.`,
    },
  },

  media: [
    {
      id: 'occipital-lobe-3d',
      type: '3d-model',
      filename: 'occipital_lobe.glb',
      title: 'Interactive 3D Occipital Lobe',
      description: 'Rotatable model showing visual cortex and calcarine sulcus',
    },
    {
      id: 'visual-pathways-diagram',
      type: 'diagram',
      filename: 'visual_pathways.svg',
      title: 'Visual Pathways from Eye to Cortex',
      description: 'Complete visual pathway including optic radiations',
    },
  ],

  citations: [
    {
      id: 'kandel-visual',
      type: 'textbook',
      title: 'Principles of Neural Science',
      authors: ['Kandel ER', 'Schwartz JH', 'Jessell TM'],
      source: 'McGraw-Hill',
      chapter: 'Visual Processing by the Retina and LGN',
    },
  ],

  crossReferences: [
    { targetId: 'anatomy-cerebral-cortex', targetType: 'structure', relationship: 'parent', label: 'Cerebral Cortex' },
    { targetId: 'physiology-vision', targetType: 'pathway', relationship: 'see-also', label: 'Vision Physiology' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['anatomy', 'neuroanatomy', 'brain', 'vision'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['neurology', 'ophthalmology'] },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

// Export all content
export const cortexContent = {
  cerebralCortex: cerebralCortexContent,
  frontalLobe: frontalLobeContent,
  parietalLobe: parietalLobeContent,
  temporalLobe: temporalLobeContent,
  occipitalLobe: occipitalLobeContent,
};
