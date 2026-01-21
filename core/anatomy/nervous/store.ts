/**
 * Nervous System Data Store
 *
 * Brain structures, cranial nerves, spinal cord,
 * peripheral nerves, and autonomic ganglia.
 */

import type {
  BrainStructure,
  CranialNerve,
  SpinalCordStructure,
  PeripheralNerve,
  AutonomicGanglion,
  ReflexArc,
  Dermatome,
  Neurotransmitter,
  NervousStatistics,
  CNSRegion,
  CerebralLobe,
} from './types';

// ============================================================================
// BRAIN STRUCTURES
// ============================================================================

const brainStructures: Map<string, BrainStructure> = new Map();

// --- Cerebrum: Frontal Lobe ---
brainStructures.set('frontal-lobe', {
  id: 'frontal-lobe',
  name: 'Frontal Lobe',
  latinName: 'Lobus frontalis',
  fmaId: 'FMA:61824',
  region: 'cerebrum',
  lobe: 'frontal',
  location: 'Anterior portion of cerebral hemisphere, anterior to central sulcus and superior to lateral sulcus',
  function: 'Executive function, motor control, speech production, personality, working memory, judgment',
  brodmannAreas: [4, 6, 8, 9, 10, 11, 12, 44, 45, 46, 47],
  connections: ['Thalamus', 'Basal ganglia', 'Limbic system', 'Other cortical areas'],
  bloodSupply: ['Anterior cerebral artery (medial)', 'Middle cerebral artery (lateral)'],
  explanations: {
    level1: 'The frontal lobe is at the front of your brain and controls movement, planning, and personality.',
    level2: 'The frontal lobe handles motor control, speech production (Broca\'s area), decision-making, personality, and executive functions like planning and problem-solving.',
    level3: 'The frontal lobe contains the primary motor cortex (precentral gyrus), premotor cortex, prefrontal cortex, and Broca\'s area. It\'s responsible for voluntary movement, executive function, working memory, and social behavior.',
    level4: 'The prefrontal cortex (dorsolateral, ventromedial, orbitofrontal) mediates executive function through connections with the thalamus, basal ganglia, and limbic system. Broca\'s area (BA 44, 45) coordinates speech motor programs. The motor homunculus in the precentral gyrus shows disproportionate representation of hands and face.',
    level5: 'The prefrontal cortex develops last, maturing into the mid-20s. Dorsolateral PFC subserves working memory via recurrent excitation of pyramidal neurons maintaining stimulus representation. Orbitofrontal cortex encodes reward value and enables flexible behavior through OFC-amygdala-striatum circuits. Supplementary motor area (SMA) initiates internally generated movements, while premotor cortex responds to external cues. Corticospinal tract neurons in primary motor cortex (Betz cells) project directly to spinal motor neurons.',
  },
  keyFacts: [
    'Largest lobe (~40% of cortex)',
    'Primary motor cortex in precentral gyrus',
    'Broca\'s area: speech production (usually left hemisphere)',
    'Prefrontal cortex: executive function, planning, personality',
    'Last area to myelinate (continues into 20s)',
  ],
  pathologies: [
    {
      name: 'Broca aphasia',
      description: 'Non-fluent aphasia with impaired speech production',
      symptoms: ['Effortful, telegraphic speech', 'Relatively preserved comprehension', 'Frustration'],
      causes: ['Stroke (MCA superior division)', 'Tumor', 'Trauma'],
      relevantImaging: ['MRI brain', 'CT if acute stroke'],
    },
    {
      name: 'Frontal lobe syndrome',
      description: 'Personality and behavioral changes from frontal damage',
      symptoms: ['Disinhibition', 'Apathy', 'Poor judgment', 'Impaired planning'],
      causes: ['Trauma', 'Tumor', 'Frontotemporal dementia', 'Stroke'],
    },
  ],
  relatedStructures: ['precentral-gyrus', 'prefrontal-cortex', 'brocas-area', 'motor-cortex'],
});

brainStructures.set('primary-motor-cortex', {
  id: 'primary-motor-cortex',
  name: 'Primary Motor Cortex',
  latinName: 'Gyrus precentralis',
  fmaId: 'FMA:61894',
  region: 'cerebrum',
  lobe: 'frontal',
  location: 'Precentral gyrus, anterior to central sulcus',
  function: 'Voluntary movement initiation and execution',
  brodmannAreas: [4],
  connections: ['Thalamus (VL nucleus)', 'Basal ganglia', 'Cerebellum', 'Spinal cord'],
  bloodSupply: ['ACA (leg)', 'MCA (face/arm)'],
  explanations: {
    level1: 'The motor cortex is the part of your brain that tells your muscles to move.',
    level2: 'The primary motor cortex sends signals down the spinal cord to make your muscles contract. Different parts control different body parts, with hands and face having the largest areas.',
    level3: 'The primary motor cortex (M1, BA 4) contains the motor homunculus - a topographic map with disproportionate representation of fine motor regions. Upper motor neurons here project via the corticospinal tract.',
    level4: 'M1 contains large pyramidal (Betz) cells in layer V that give rise to the corticospinal tract. Most fibers decussate at the pyramids (lateral corticospinal tract). Motor commands are refined by basal ganglia and cerebellar loops through the thalamus.',
    level5: 'M1 encodes movement parameters including force, direction, and velocity. Population coding allows flexible movement representation. Long-term potentiation in M1 underlies motor learning. Intracortical microstimulation reveals a fractured somatotopy reflecting muscle synergies rather than strict anatomical mapping.',
  },
  keyFacts: [
    'Motor homunculus: hands and face overrepresented',
    'Contains Betz cells (giant pyramidal neurons)',
    'Corticospinal tract origin',
    'ACA supplies medial (leg), MCA supplies lateral (face/arm)',
    'Lesion causes contralateral UMN weakness',
  ],
  pathologies: [
    {
      name: 'Stroke (motor strip)',
      description: 'Infarction of primary motor cortex',
      symptoms: ['Contralateral hemiparesis', 'Upper motor neuron signs', 'Spasticity (later)'],
      causes: ['MCA stroke (face/arm)', 'ACA stroke (leg)'],
      relevantImaging: ['CT head (acute)', 'MRI DWI'],
    },
  ],
  relatedStructures: ['frontal-lobe', 'corticospinal-tract', 'basal-ganglia', 'thalamus'],
});

// --- Cerebrum: Temporal Lobe ---
brainStructures.set('temporal-lobe', {
  id: 'temporal-lobe',
  name: 'Temporal Lobe',
  latinName: 'Lobus temporalis',
  fmaId: 'FMA:61825',
  region: 'cerebrum',
  lobe: 'temporal',
  location: 'Lateral aspect of cerebral hemisphere, inferior to lateral sulcus',
  function: 'Hearing, language comprehension, memory, emotion (limbic connections)',
  brodmannAreas: [20, 21, 22, 37, 38, 41, 42],
  connections: ['Hippocampus', 'Amygdala', 'Auditory cortex', 'Wernicke\'s area'],
  bloodSupply: ['Middle cerebral artery', 'Posterior cerebral artery (inferior)'],
  explanations: {
    level1: 'The temporal lobe, near your ears, helps you hear and understand language.',
    level2: 'The temporal lobe processes sound (auditory cortex), understands speech (Wernicke\'s area), and contains structures important for memory (hippocampus) and emotion (amygdala).',
    level3: 'The temporal lobe contains primary auditory cortex (Heschl\'s gyrus), Wernicke\'s area for language comprehension, and the medial temporal lobe structures (hippocampus, amygdala) critical for memory and emotion.',
    level4: 'The superior temporal gyrus processes auditory information with tonotopic organization. Wernicke\'s area (posterior STG) integrates auditory input for language comprehension. The ventral visual stream ("what" pathway) terminates in inferotemporal cortex for object recognition.',
    level5: 'The hippocampus performs pattern separation (dentate gyrus) and completion (CA3) for episodic memory encoding via LTP. The amygdala\'s basolateral complex assigns emotional valence, while central nucleus coordinates fear responses. The perirhinal and entorhinal cortices form the parahippocampal memory circuit. Temporal pole dysfunction underlies semantic dementia.',
  },
  keyFacts: [
    'Primary auditory cortex in Heschl\'s gyrus (transverse temporal gyri)',
    'Wernicke\'s area: language comprehension (usually left)',
    'Hippocampus: memory consolidation',
    'Amygdala: emotion processing, fear conditioning',
    'Uncal herniation compresses CN III',
  ],
  pathologies: [
    {
      name: 'Wernicke aphasia',
      description: 'Fluent aphasia with impaired comprehension',
      symptoms: ['Fluent but nonsensical speech', 'Poor comprehension', 'Impaired repetition'],
      causes: ['MCA stroke (posterior division)', 'Tumor', 'Encephalitis'],
    },
    {
      name: 'Temporal lobe epilepsy',
      description: 'Focal seizures originating in temporal lobe',
      symptoms: ['Auras (déjà vu, rising sensation)', 'Automatisms', 'Altered awareness'],
      causes: ['Mesial temporal sclerosis', 'Tumors', 'Malformations'],
      relevantImaging: ['MRI (hippocampal sclerosis)', 'EEG'],
    },
  ],
  relatedStructures: ['hippocampus', 'amygdala', 'auditory-cortex', 'wernickes-area'],
});

// --- Cerebrum: Parietal Lobe ---
brainStructures.set('parietal-lobe', {
  id: 'parietal-lobe',
  name: 'Parietal Lobe',
  latinName: 'Lobus parietalis',
  fmaId: 'FMA:61826',
  region: 'cerebrum',
  lobe: 'parietal',
  location: 'Superior and posterior to central sulcus, superior to temporal lobe, anterior to occipital lobe',
  function: 'Somatosensory processing, spatial awareness, integration of sensory information',
  brodmannAreas: [1, 2, 3, 5, 7, 39, 40],
  connections: ['Thalamus (VPL/VPM)', 'Motor cortex', 'Visual cortex', 'Frontal lobe'],
  bloodSupply: ['Middle cerebral artery', 'Anterior cerebral artery (medial)'],
  explanations: {
    level1: 'The parietal lobe helps you feel touch and know where your body is in space.',
    level2: 'The parietal lobe processes touch, pain, and temperature (primary somatosensory cortex) and helps you understand spatial relationships and coordinate movements.',
    level3: 'The parietal lobe contains primary somatosensory cortex (postcentral gyrus) with a sensory homunculus, and posterior parietal cortex for spatial processing and sensorimotor integration.',
    level4: 'The postcentral gyrus (BA 3,1,2) processes discriminative touch with somatotopic organization. The posterior parietal cortex (BA 5,7) integrates multisensory information for spatial awareness and action planning. The angular gyrus (BA 39) and supramarginal gyrus (BA 40) are involved in language and calculation.',
    level5: 'Primary somatosensory cortex shows hierarchical processing: BA 3b (cutaneous), BA 1 (texture), BA 2 (size/shape). The dorsal visual stream terminates in posterior parietal cortex, creating "spatial maps" for visually guided action. Parietal reach region encodes movement intentions. The intraparietal sulcus contains multiple specialized areas for eye movements, grasping, and number processing.',
  },
  keyFacts: [
    'Primary somatosensory cortex in postcentral gyrus',
    'Sensory homunculus mirrors motor homunculus',
    'Posterior parietal: spatial awareness ("where" pathway)',
    'Angular gyrus: reading, calculation (Gerstmann syndrome)',
    'Non-dominant: neglect syndrome',
  ],
  pathologies: [
    {
      name: 'Hemispatial neglect',
      description: 'Inattention to contralateral space (usually left with right parietal lesion)',
      symptoms: ['Ignoring left side of space/body', 'Drawing half of objects', 'Extinction to double simultaneous stimulation'],
      causes: ['Right parietal stroke', 'Tumor'],
    },
    {
      name: 'Gerstmann syndrome',
      description: 'Dominant (left) angular gyrus damage',
      symptoms: ['Agraphia', 'Acalculia', 'Left-right confusion', 'Finger agnosia'],
      causes: ['Stroke', 'Tumor', 'Atrophy'],
    },
  ],
  relatedStructures: ['postcentral-gyrus', 'angular-gyrus', 'supramarginal-gyrus', 'somatosensory-cortex'],
});

// --- Cerebrum: Occipital Lobe ---
brainStructures.set('occipital-lobe', {
  id: 'occipital-lobe',
  name: 'Occipital Lobe',
  latinName: 'Lobus occipitalis',
  fmaId: 'FMA:61827',
  region: 'cerebrum',
  lobe: 'occipital',
  location: 'Posterior portion of cerebral hemisphere, posterior to parieto-occipital sulcus',
  function: 'Visual processing',
  brodmannAreas: [17, 18, 19],
  connections: ['Lateral geniculate nucleus', 'Parietal lobe (dorsal stream)', 'Temporal lobe (ventral stream)'],
  bloodSupply: ['Posterior cerebral artery'],
  explanations: {
    level1: 'The occipital lobe at the back of your head is where you process what you see.',
    level2: 'The occipital lobe receives visual information from your eyes and processes it to recognize shapes, colors, and movement.',
    level3: 'The occipital lobe contains primary visual cortex (V1) in the calcarine sulcus and visual association areas (V2-V5) for higher-order processing. The retinotopic map is inverted and reversed.',
    level4: 'V1 (BA 17) performs edge detection and orientation selectivity. V2-V4 process color, form, and texture. V5/MT specializes in motion detection. Information flows via ventral stream (object recognition) and dorsal stream (spatial processing, action).',
    level5: 'V1 contains orientation-selective simple and complex cells organized in hypercolumns. Cytochrome oxidase blobs process color. Magnocellular and parvocellular pathways remain segregated through V1-V2. Area V4 shows color constancy computations. MT neurons show direction selectivity and respond to optic flow for self-motion perception.',
  },
  keyFacts: [
    'Primary visual cortex (V1) in calcarine sulcus',
    'Macular vision has largest cortical representation',
    'PCA supplies entire occipital lobe',
    'Retinotopic organization inverted and reversed',
    'Bilateral lesions cause cortical blindness',
  ],
  pathologies: [
    {
      name: 'Cortical blindness',
      description: 'Vision loss from bilateral occipital damage',
      symptoms: ['Complete blindness', 'Intact pupillary reflexes', 'Anton syndrome (denial of blindness)'],
      causes: ['Bilateral PCA strokes', 'Hypoxia', 'PRES'],
    },
    {
      name: 'Homonymous hemianopia',
      description: 'Loss of vision in contralateral visual field',
      symptoms: ['Cannot see left or right visual field (both eyes)', 'May have macular sparing'],
      causes: ['PCA stroke', 'Tumor', 'Trauma'],
      relevantTests: ['Visual field testing', 'MRI brain'],
    },
  ],
  relatedStructures: ['primary-visual-cortex', 'calcarine-sulcus', 'optic-radiations'],
});

// --- Limbic System ---
brainStructures.set('hippocampus', {
  id: 'hippocampus',
  name: 'Hippocampus',
  latinName: 'Hippocampus',
  fmaId: 'FMA:61923',
  region: 'cerebrum',
  lobe: 'limbic',
  location: 'Medial temporal lobe, forming floor of temporal horn of lateral ventricle',
  function: 'Memory consolidation, spatial navigation, learning',
  connections: ['Entorhinal cortex', 'Fornix → Mammillary bodies', 'Amygdala', 'Prefrontal cortex'],
  bloodSupply: ['Posterior cerebral artery (hippocampal branches)'],
  explanations: {
    level1: 'The hippocampus helps you remember things and find your way around.',
    level2: 'The hippocampus is shaped like a seahorse and converts short-term memories into long-term memories. It also helps you navigate and remember where things are.',
    level3: 'The hippocampus is critical for declarative memory (episodic and semantic). The trisynaptic circuit (entorhinal cortex → dentate gyrus → CA3 → CA1) processes information for memory encoding. Place cells support spatial navigation.',
    level4: 'The hippocampus receives multimodal input from entorhinal cortex. Dentate gyrus performs pattern separation, CA3 performs pattern completion via recurrent collaterals. CA1 projects via subiculum to entorhinal cortex and directly to prefrontal cortex. Long-term potentiation (LTP) is the cellular basis of memory.',
    level5: 'Hippocampal LTP involves NMDA receptor-dependent Ca²⁺ influx triggering AMPA receptor trafficking and dendritic spine enlargement. Place cells fire in specific locations; grid cells in entorhinal cortex provide metric spatial coding. Sharp-wave ripples during sleep replay sequences for memory consolidation. Adult neurogenesis in dentate gyrus may support pattern separation.',
  },
  keyFacts: [
    'Essential for declarative memory formation',
    'Contains place cells (Nobel Prize 2014)',
    'One of two sites of adult neurogenesis',
    'Highly vulnerable to hypoxia and hypoglycemia',
    'Bilateral damage causes anterograde amnesia',
  ],
  pathologies: [
    {
      name: 'Anterograde amnesia',
      description: 'Inability to form new declarative memories',
      symptoms: ['Cannot remember new information', 'Preserved remote memory', 'Preserved procedural learning'],
      causes: ['Bilateral hippocampal damage', 'Encephalitis', 'Hypoxia', 'Surgery'],
    },
    {
      name: 'Mesial temporal sclerosis',
      description: 'Hippocampal atrophy and gliosis, common cause of TLE',
      symptoms: ['Temporal lobe seizures', 'Memory impairment'],
      causes: ['Prolonged febrile seizures', 'Status epilepticus', 'Encephalitis'],
      relevantImaging: ['MRI (hippocampal volume loss, T2 signal change)'],
    },
  ],
  relatedStructures: ['entorhinal-cortex', 'fornix', 'amygdala', 'mammillary-bodies'],
});

brainStructures.set('amygdala', {
  id: 'amygdala',
  name: 'Amygdala',
  latinName: 'Corpus amygdaloideum',
  fmaId: 'FMA:61841',
  region: 'cerebrum',
  lobe: 'limbic',
  location: 'Anterior medial temporal lobe, rostral to hippocampus',
  function: 'Emotion processing, fear conditioning, social cognition',
  connections: ['Hippocampus', 'Prefrontal cortex', 'Hypothalamus', 'Brainstem'],
  bloodSupply: ['Anterior choroidal artery', 'Middle cerebral artery'],
  explanations: {
    level1: 'The amygdala is an almond-shaped part of your brain that processes emotions, especially fear.',
    level2: 'The amygdala helps you detect threats and respond emotionally. It\'s why you might feel scared before you even realize what frightened you.',
    level3: 'The amygdala has multiple nuclei: basolateral (emotional learning), central (fear response outputs), medial (social/reproductive behavior). It processes emotional stimuli and modulates memory consolidation.',
    level4: 'The basolateral amygdala receives sensory input and assigns emotional valence via association with aversive/appetitive outcomes. The central nucleus coordinates autonomic, endocrine, and behavioral fear responses through projections to hypothalamus and brainstem.',
    level5: 'Fear conditioning involves LTP at thalamic and cortical inputs to lateral amygdala. CREB-mediated transcription consolidates fear memory. The medial prefrontal cortex (infralimbic region) inhibits amygdala during fear extinction. Amygdala hyperactivity in anxiety disorders and PTSD; hypersociality in bilateral amygdala lesions (Klüver-Bucy syndrome).',
  },
  keyFacts: [
    'Critical for fear conditioning and emotional memory',
    'Processes subliminal threat detection',
    'Modulates hippocampal memory consolidation',
    'Hyperactive in anxiety disorders, PTSD',
    'Part of Klüver-Bucy syndrome when bilaterally damaged',
  ],
  pathologies: [
    {
      name: 'Klüver-Bucy syndrome',
      description: 'Bilateral amygdala/temporal pole damage',
      symptoms: ['Hyperorality', 'Hypersexuality', 'Visual agnosia', 'Placidity', 'Dietary changes'],
      causes: ['Herpes encephalitis', 'Trauma', 'Pick disease'],
    },
  ],
  relatedStructures: ['hippocampus', 'prefrontal-cortex', 'hypothalamus'],
});

// --- Diencephalon ---
brainStructures.set('thalamus', {
  id: 'thalamus',
  name: 'Thalamus',
  latinName: 'Thalamus',
  fmaId: 'FMA:62007',
  region: 'diencephalon',
  location: 'Central portion of brain, surrounding third ventricle',
  function: 'Sensory relay, motor relay, consciousness, attention',
  connections: ['Cortex (thalamocortical radiations)', 'Basal ganglia', 'Cerebellum', 'Brainstem'],
  bloodSupply: ['Posterior cerebral artery', 'Posterior communicating artery'],
  explanations: {
    level1: 'The thalamus is like a relay station that sends information from your body to the right parts of your brain.',
    level2: 'The thalamus receives sensory information (except smell) and sends it to the correct area of the cortex. It also helps regulate consciousness and alertness.',
    level3: 'The thalamus has many nuclei: VPL/VPM (somatosensory), LGN (visual), MGN (auditory), VL (motor), and others. It gates information flow to cortex and participates in cortical oscillations.',
    level4: 'The thalamus is not just a passive relay but actively processes and filters information. Reticular nucleus provides inhibitory control over thalamocortical transmission. Intralaminar nuclei participate in arousal and attention. Pulvinar integrates visual attention.',
    level5: 'Thalamocortical circuits generate oscillatory rhythms: spindles during sleep (reticular nucleus), alpha during relaxed wakefulness, and gamma during attention. The thalamus enables cortico-thalamo-cortical loops linking distant cortical regions. Specific nuclei relay particular modalities while non-specific nuclei modulate cortical excitability.',
  },
  keyFacts: [
    'All sensory relay except olfaction',
    'VPL: body sensation; VPM: face sensation',
    'LGN: vision; MGN: audition',
    'VL: motor (receives cerebellum, basal ganglia)',
    'Bilateral lesions cause coma (arousal function)',
  ],
  pathologies: [
    {
      name: 'Thalamic pain syndrome (Déjerine-Roussy)',
      description: 'Central post-stroke pain from thalamic lesion',
      symptoms: ['Contralateral burning pain', 'Hypersensitivity to stimuli', 'Hemiataxia'],
      causes: ['Thalamic stroke (especially posterolateral)'],
    },
  ],
  relatedStructures: ['internal-capsule', 'basal-ganglia', 'cortex'],
});

brainStructures.set('hypothalamus', {
  id: 'hypothalamus',
  name: 'Hypothalamus',
  latinName: 'Hypothalamus',
  fmaId: 'FMA:62008',
  region: 'diencephalon',
  location: 'Inferior to thalamus, forming walls and floor of third ventricle',
  function: 'Autonomic control, endocrine regulation, homeostasis (temperature, hunger, thirst), circadian rhythms',
  connections: ['Pituitary gland', 'Brainstem', 'Limbic system', 'Thalamus'],
  bloodSupply: ['Circle of Willis branches'],
  explanations: {
    level1: 'The hypothalamus controls basic body functions like temperature, hunger, thirst, and sleep.',
    level2: 'The hypothalamus is the master controller of your body\'s internal environment. It regulates hormones through the pituitary gland and controls hunger, thirst, temperature, and the sleep-wake cycle.',
    level3: 'The hypothalamus contains numerous nuclei: supraoptic and paraventricular (ADH, oxytocin), arcuate (feeding, GnRH), suprachiasmatic (circadian rhythm), lateral (hunger), ventromedial (satiety), anterior (heat dissipation), posterior (heat conservation).',
    level4: 'The hypothalamus integrates autonomic, endocrine, and behavioral responses for homeostasis. The hypothalamic-pituitary axis regulates most endocrine glands. Leptin and ghrelin modulate feeding behavior through arcuate nucleus. The suprachiasmatic nucleus is the master circadian clock.',
    level5: 'The suprachiasmatic nucleus (SCN) maintains ~24-hour rhythms via transcription-translation feedback loops (CLOCK, BMAL1, PER, CRY genes). Light input via retinohypothalamic tract entrains the clock. Melanopsin-containing intrinsically photosensitive RGCs provide non-image-forming vision for circadian entrainment. Hypocretin/orexin neurons in lateral hypothalamus regulate arousal; their loss causes narcolepsy with cataplexy.',
  },
  keyFacts: [
    'Master regulator of autonomic and endocrine function',
    '4 Fs: Fighting, Fleeing, Feeding, Mating',
    'Suprachiasmatic nucleus: biological clock',
    'Releases hormones to anterior pituitary via portal system',
    'ADH and oxytocin made here, released from posterior pituitary',
  ],
  pathologies: [
    {
      name: 'Diabetes insipidus (central)',
      description: 'ADH deficiency from hypothalamic/pituitary damage',
      symptoms: ['Polyuria', 'Polydipsia', 'Dilute urine', 'Hypernatremia'],
      causes: ['Tumor', 'Surgery', 'Trauma', 'Autoimmune', 'Infiltrative disease'],
      relevantTests: ['Water deprivation test', 'MRI pituitary'],
    },
  ],
  relatedStructures: ['pituitary-gland', 'mammillary-bodies', 'third-ventricle'],
});

// --- Brainstem ---
brainStructures.set('midbrain', {
  id: 'midbrain',
  name: 'Midbrain',
  latinName: 'Mesencephalon',
  fmaId: 'FMA:61993',
  region: 'brainstem',
  location: 'Between diencephalon and pons, around cerebral aqueduct',
  function: 'Eye movement, auditory and visual reflexes, motor control (substantia nigra, red nucleus)',
  connections: ['Cerebellum', 'Thalamus', 'Cortex', 'Spinal cord'],
  bloodSupply: ['Posterior cerebral artery', 'Superior cerebellar artery'],
  explanations: {
    level1: 'The midbrain helps control eye movements and connects your brain to the rest of your nervous system.',
    level2: 'The midbrain contains centers for eye movement (CN III, IV), auditory reflexes (inferior colliculus), visual reflexes (superior colliculus), and motor control (substantia nigra, red nucleus).',
    level3: 'The midbrain includes: tectum (superior and inferior colliculi), tegmentum (CN III, IV nuclei, red nucleus, substantia nigra, PAG), and cerebral peduncles (corticospinal tracts). The cerebral aqueduct passes through it.',
    level4: 'The substantia nigra pars compacta provides dopaminergic input to striatum; degeneration causes Parkinson disease. The periaqueductal gray mediates pain modulation and defensive behaviors. The superior colliculus coordinates saccadic eye movements.',
    level5: 'The dopaminergic neurons of SNpc project to striatum via the nigrostriatal pathway, modulating movement via direct and indirect basal ganglia circuits. D1 receptors on direct pathway neurons facilitate movement; D2 on indirect pathway neurons inhibit unwanted movement. Loss of 60-80% of SNpc neurons produces parkinsonian symptoms. The PAG contains opioid and cannabinoid receptors mediating descending pain inhibition.',
  },
  keyFacts: [
    'CN III, IV nuclei',
    'Superior colliculus: visual reflexes, saccades',
    'Inferior colliculus: auditory relay',
    'Substantia nigra: dopamine, Parkinson disease',
    'Red nucleus: motor coordination',
  ],
  pathologies: [
    {
      name: 'Weber syndrome',
      description: 'Midbrain stroke affecting CN III and cerebral peduncle',
      symptoms: ['Ipsilateral CN III palsy (ptosis, "down and out")', 'Contralateral hemiparesis'],
      causes: ['PCA occlusion', 'Basilar artery branch'],
    },
    {
      name: 'Parkinson disease',
      description: 'Degeneration of substantia nigra dopaminergic neurons',
      symptoms: ['Tremor', 'Rigidity', 'Bradykinesia', 'Postural instability'],
      causes: ['Idiopathic (α-synuclein)', 'Genetic', 'Toxins'],
    },
  ],
  relatedStructures: ['substantia-nigra', 'superior-colliculus', 'inferior-colliculus', 'pons'],
});

brainStructures.set('pons', {
  id: 'pons',
  name: 'Pons',
  latinName: 'Pons',
  fmaId: 'FMA:67943',
  region: 'brainstem',
  location: 'Between midbrain and medulla, anterior to cerebellum',
  function: 'Relay between cerebrum and cerebellum, CN V-VIII nuclei, respiratory control, sleep',
  connections: ['Cerebellum (middle cerebellar peduncle)', 'Medulla', 'Midbrain', 'Cortex'],
  bloodSupply: ['Basilar artery', 'AICA', 'SCA'],
  explanations: {
    level1: 'The pons (Latin for "bridge") connects different parts of your brain and helps control breathing and sleep.',
    level2: 'The pons contains nuclei for cranial nerves V-VIII (sensation, chewing, facial movement, hearing, balance) and helps relay information between the cerebrum and cerebellum.',
    level3: 'The pons contains: pontine nuclei (corticopontocerebellar relay), CN V-VIII nuclei, pontine respiratory center, locus coeruleus (norepinephrine), and sleep-related nuclei.',
    level4: 'The corticopontocerebellar pathway relays motor commands through pontine nuclei to cerebellum via middle cerebellar peduncle. The locus coeruleus provides diffuse noradrenergic innervation affecting arousal and attention. Pontine centers regulate REM sleep.',
    level5: 'The locus coeruleus (LC) contains the majority of brain noradrenergic neurons, projecting widely to cortex, hippocampus, and other regions. LC activity increases with arousal and novelty; low activity during REM sleep allows dream activity. Sublaterodorsal nucleus and ventrolateral PAG regulate REM atonia. Central pontine myelinolysis results from rapid sodium correction damaging myelin.',
  },
  keyFacts: [
    'CN V, VI, VII, VIII nuclei',
    'Middle cerebellar peduncle connects to cerebellum',
    'Pontine respiratory center (pneumotaxic center)',
    'Locus coeruleus: norepinephrine, arousal',
    'Vulnerable to osmotic demyelination (CPM)',
  ],
  pathologies: [
    {
      name: 'Locked-in syndrome',
      description: 'Ventral pontine lesion preserving consciousness',
      symptoms: ['Quadriplegia', 'Anarthria', 'Preserved vertical eye movement and blinking', 'Fully conscious'],
      causes: ['Basilar artery thrombosis', 'Trauma'],
    },
    {
      name: 'Central pontine myelinolysis (ODS)',
      description: 'Osmotic demyelination from rapid sodium correction',
      symptoms: ['Dysarthria', 'Dysphagia', 'Quadriparesis', 'Locked-in syndrome'],
      causes: ['Rapid correction of hyponatremia'],
      relevantImaging: ['MRI (T2 hyperintensity in central pons)'],
    },
  ],
  relatedStructures: ['midbrain', 'medulla', 'cerebellum', 'basilar-artery'],
});

brainStructures.set('medulla', {
  id: 'medulla',
  name: 'Medulla Oblongata',
  latinName: 'Medulla oblongata',
  fmaId: 'FMA:62004',
  region: 'brainstem',
  location: 'Inferior brainstem, continuous with spinal cord at foramen magnum',
  function: 'Vital centers (respiratory, cardiovascular, vomiting), CN IX-XII nuclei, relay center',
  connections: ['Spinal cord', 'Pons', 'Cerebellum (inferior cerebellar peduncle)'],
  bloodSupply: ['Vertebral arteries', 'PICA', 'Anterior spinal artery'],
  explanations: {
    level1: 'The medulla controls vital functions like breathing, heart rate, and swallowing.',
    level2: 'The medulla oblongata contains centers that control breathing, heart rate, and blood pressure. It also has nuclei for swallowing, coughing, and vomiting.',
    level3: 'The medulla contains: CN IX-XII nuclei, respiratory centers (dorsal and ventral respiratory groups), cardiovascular center, and ascending/descending tracts. The pyramidal decussation occurs at the medulla-spinal cord junction.',
    level4: 'The nucleus tractus solitarius receives visceral afferents including baroreceptor input. The rostral and caudal ventrolateral medulla regulate blood pressure. The dorsal vagal nucleus provides parasympathetic output to thoracoabdominal viscera.',
    level5: 'The pre-Bötzinger complex in the ventrolateral medulla generates respiratory rhythm. Baroreceptor afferents via CN IX, X synapse in NTS; the baroreflex arc involves NTS → CVLM → RVLM → IML → sympathetic output. Medullary lesions can cause central apnea or cardiovascular instability. Lateral medullary syndrome (Wallenberg) results from PICA territory infarction.',
  },
  keyFacts: [
    'CN IX, X, XI, XII nuclei',
    'Vital centers: respiratory, cardiovascular, vomiting',
    'Pyramidal decussation: motor tracts cross here',
    'Inferior cerebellar peduncle connects to cerebellum',
    'PICA supplies lateral medulla',
  ],
  pathologies: [
    {
      name: 'Lateral medullary syndrome (Wallenberg)',
      description: 'PICA or vertebral artery stroke',
      symptoms: ['Ipsilateral: Horner, facial pain/numbness, ataxia, palate weakness', 'Contralateral: body pain/temp loss', 'Dysphagia', 'Vertigo'],
      causes: ['PICA occlusion', 'Vertebral artery dissection'],
    },
    {
      name: 'Medial medullary syndrome',
      description: 'Anterior spinal artery or vertebral artery stroke',
      symptoms: ['Ipsilateral tongue weakness', 'Contralateral hemiparesis (sparing face)', 'Contralateral proprioception loss'],
      causes: ['Vertebral artery occlusion', 'Anterior spinal artery occlusion'],
    },
  ],
  relatedStructures: ['pons', 'spinal-cord', 'vertebral-artery', 'PICA'],
});

// --- Cerebellum ---
brainStructures.set('cerebellum', {
  id: 'cerebellum',
  name: 'Cerebellum',
  latinName: 'Cerebellum',
  fmaId: 'FMA:67944',
  region: 'cerebellum',
  location: 'Posterior cranial fossa, beneath tentorium cerebelli, posterior to brainstem',
  function: 'Motor coordination, balance, motor learning, cognitive function',
  connections: ['Brainstem via 3 peduncles', 'Thalamus', 'Cortex (via thalamus)', 'Spinal cord'],
  bloodSupply: ['Superior cerebellar artery', 'AICA', 'PICA'],
  explanations: {
    level1: 'The cerebellum (Latin for "little brain") helps you keep your balance and move smoothly.',
    level2: 'The cerebellum coordinates movements, maintains balance, and helps you learn motor skills like riding a bike. It fine-tunes movements initiated by other brain areas.',
    level3: 'The cerebellum has three functional divisions: vestibulocerebellum (balance), spinocerebellum (posture, gait), and cerebrocerebellum (motor planning, coordination). It compares intended vs actual movement and corrects errors.',
    level4: 'Cerebellar cortex has uniform circuitry: mossy fibers and climbing fibers provide input; Purkinje cells provide sole output (inhibitory to deep nuclei). The cerebellum uses error signals to adjust motor programs. Damage causes ipsilateral deficits.',
    level5: 'Purkinje cells receive two distinct inputs: mossy fiber → granule cell → parallel fiber (weak, plastic) and climbing fiber from inferior olive (strong, instructive). LTD at parallel fiber-Purkinje synapses, triggered by climbing fiber co-activation, underlies motor learning. The cerebellum implements forward models predicting sensory consequences of movements, enabling rapid error correction.',
  },
  keyFacts: [
    'Contains more neurons than rest of brain combined',
    'Damage causes ipsilateral deficits (unlike cerebrum)',
    'Vestibulocerebellum: flocculonodular lobe (balance)',
    'Spinocerebellum: vermis + paravermal zone (gait, posture)',
    'Cerebrocerebellum: lateral hemispheres (coordination)',
  ],
  pathologies: [
    {
      name: 'Cerebellar ataxia',
      description: 'Impaired coordination from cerebellar dysfunction',
      symptoms: ['Ataxic gait', 'Intention tremor', 'Dysmetria', 'Dysdiadochokinesia', 'Nystagmus', 'Dysarthria'],
      causes: ['Stroke', 'MS', 'Tumor', 'Alcohol', 'Spinocerebellar ataxias'],
    },
    {
      name: 'Cerebellar hemorrhage',
      description: 'Bleeding into cerebellum, can be life-threatening',
      symptoms: ['Sudden headache', 'Vomiting', 'Ataxia', 'Decreased consciousness'],
      causes: ['Hypertension', 'AVM', 'Coagulopathy'],
      relevantImaging: ['CT head (emergent)', 'MRI'],
    },
  ],
  relatedStructures: ['vermis', 'cerebellar-hemisphere', 'dentate-nucleus', 'brainstem'],
});

// ============================================================================
// CRANIAL NERVES
// ============================================================================

const cranialNerves: Map<string, CranialNerve> = new Map();

cranialNerves.set('cn-i', {
  id: 'cn-i',
  number: 1,
  name: 'Olfactory Nerve',
  latinName: 'Nervus olfactorius',
  fmaId: 'FMA:46787',
  fiberType: 'sensory',
  nuclei: ['Olfactory bulb', 'Olfactory cortex'],
  foramina: ['Cribriform plate'],
  function: 'Smell',
  distribution: 'Olfactory epithelium of nasal cavity',
  sensoryFunction: 'Olfaction (smell)',
  explanations: {
    level1: 'The olfactory nerve lets you smell things.',
    level2: 'Cranial nerve I carries smell signals from your nose to your brain. It\'s the only sense that bypasses the thalamus.',
    level3: 'Olfactory receptor neurons in the nasal epithelium project through the cribriform plate to the olfactory bulb. Mitral cells then project to piriform cortex, amygdala, and entorhinal cortex.',
    level4: 'Olfaction is unique: olfactory neurons are replaced throughout life, and signals reach cortex without thalamic relay. Olfactory connections to amygdala and hippocampus explain the strong link between smell and memory/emotion.',
    level5: 'Each olfactory neuron expresses one odorant receptor (one receptor, one neuron rule). Axons expressing the same receptor converge on the same glomerulus in the olfactory bulb (glomerular map). Lateral inhibition sharpens odor discrimination. Olfactory ensheathing cells are being studied for spinal cord repair.',
  },
  keyFacts: [
    'Only cranial nerve that bypasses thalamus',
    'Olfactory neurons replaced throughout life (neurogenesis)',
    'Close association with memory and emotion',
    'Anosmia can be early sign of Parkinson disease',
    'Cribriform plate fracture can cause CSF leak and anosmia',
  ],
  clinicalTests: ['Identify common scents (coffee, vanilla)', 'Test each nostril separately'],
  pathologies: [
    {
      name: 'Anosmia',
      description: 'Loss of smell',
      symptoms: ['Cannot smell', 'Impaired taste perception'],
      causes: ['Head trauma', 'URI', 'COVID-19', 'Parkinson disease', 'Tumor'],
    },
  ],
  relatedStructures: ['olfactory-bulb', 'cribriform-plate', 'nasal-cavity'],
});

cranialNerves.set('cn-ii', {
  id: 'cn-ii',
  number: 2,
  name: 'Optic Nerve',
  latinName: 'Nervus opticus',
  fmaId: 'FMA:50863',
  fiberType: 'sensory',
  nuclei: ['Retinal ganglion cells', 'Lateral geniculate nucleus', 'Visual cortex'],
  foramina: ['Optic canal'],
  function: 'Vision',
  distribution: 'Retina',
  sensoryFunction: 'Visual information from retina',
  explanations: {
    level1: 'The optic nerve carries visual information from your eyes to your brain.',
    level2: 'Cranial nerve II transmits visual signals from the retina to the brain. The optic nerves from both eyes partially cross at the optic chiasm.',
    level3: 'Retinal ganglion cell axons form the optic nerve, partially decussate at chiasm (nasal fibers cross), continue as optic tract to LGN, then to primary visual cortex via optic radiations.',
    level4: 'The optic nerve is actually a CNS tract (surrounded by meninges). Papilledema (optic disc swelling) indicates increased ICP. The RAPD (Marcus Gunn pupil) indicates afferent pathway dysfunction.',
    level5: 'Different ganglion cell types (M-cells, P-cells, non-M-non-P) carry different visual information to specific LGN layers. The retinotopic map is maintained throughout the visual pathway. Meyer\'s loop (temporal lobe optic radiations) carries superior visual field information; lesions cause contralateral superior quadrantanopia.',
  },
  keyFacts: [
    'Actually a CNS tract (myelinated by oligodendrocytes)',
    'Nasal fibers cross at optic chiasm',
    'Pupillary light reflex: afferent limb',
    'Papilledema indicates increased ICP',
    'RAPD: asymmetric afferent pathway damage',
  ],
  clinicalTests: ['Visual acuity', 'Visual fields (confrontation)', 'Fundoscopy', 'Pupillary light reflex'],
  pathologies: [
    {
      name: 'Optic neuritis',
      description: 'Inflammation of optic nerve, often associated with MS',
      symptoms: ['Vision loss', 'Pain with eye movement', 'RAPD', 'Color desaturation'],
      causes: ['Multiple sclerosis', 'Neuromyelitis optica', 'Infection'],
      relevantImaging: ['MRI brain and orbits with contrast'],
    },
    {
      name: 'Papilledema',
      description: 'Optic disc swelling from increased ICP',
      symptoms: ['Often asymptomatic initially', 'Transient visual obscurations', 'Vision loss if chronic'],
      causes: ['Increased intracranial pressure', 'Idiopathic intracranial hypertension'],
    },
  ],
  relatedStructures: ['retina', 'optic-chiasm', 'optic-tract', 'LGN', 'visual-cortex'],
});

cranialNerves.set('cn-iii', {
  id: 'cn-iii',
  number: 3,
  name: 'Oculomotor Nerve',
  latinName: 'Nervus oculomotorius',
  fmaId: 'FMA:50864',
  fiberType: 'motor',
  nuclei: ['Oculomotor nucleus (midbrain)', 'Edinger-Westphal nucleus (parasympathetic)'],
  foramina: ['Superior orbital fissure'],
  function: 'Most eye movement, pupil constriction, eyelid elevation',
  distribution: 'Extraocular muscles (SR, IR, MR, IO), levator palpebrae, pupil sphincter',
  motorFunction: 'Levator palpebrae superioris, superior rectus, inferior rectus, medial rectus, inferior oblique',
  parasympatheticFunction: 'Pupillary sphincter (miosis), ciliary muscle (accommodation)',
  explanations: {
    level1: 'Cranial nerve III controls most eye movements, opens your eyelid, and makes your pupil smaller.',
    level2: 'The oculomotor nerve controls four of six eye muscles (up, down, in), lifts the upper eyelid, and constricts the pupil. Damage causes ptosis and a dilated, "down and out" eye.',
    level3: 'CN III contains somatic motor fibers (to LPS, SR, IR, MR, IO) and parasympathetic fibers (from Edinger-Westphal nucleus to pupil sphincter and ciliary muscle). The parasympathetic fibers run superficially.',
    level4: 'The superficial location of parasympathetic fibers explains why compression (aneurysm) causes pupil dilation first, while ischemia (diabetes) typically spares the pupil. A complete CN III palsy: ptosis, down-and-out eye, dilated unreactive pupil.',
    level5: 'CN III palsy patterns help localize lesions: nuclear lesion causes bilateral ptosis and contralateral SR weakness. Fascicular lesions produce Weber syndrome (with contralateral hemiparesis) or Benedikt syndrome (with contralateral tremor). Cavernous sinus lesions often involve multiple nerves (III, IV, V1, V2, VI).',
  },
  keyFacts: [
    'Controls SR, IR, MR, IO muscles',
    'Levator palpebrae: opens eyelid',
    'Parasympathetic: pupil constriction, accommodation',
    'Parasympathetic fibers run superficially (compression → dilated pupil)',
    'Pupil-sparing CN III palsy suggests ischemia (diabetes)',
  ],
  clinicalTests: ['Extraocular movements (H pattern)', 'Pupillary light reflex', 'Accommodation', 'Ptosis assessment'],
  pathologies: [
    {
      name: 'CN III palsy',
      description: 'Oculomotor nerve dysfunction',
      symptoms: ['Ptosis', '"Down and out" eye position', 'Diplopia', 'Dilated pupil (if compressive)'],
      causes: ['Posterior communicating artery aneurysm', 'Diabetes (pupil-sparing)', 'Uncal herniation', 'Tumor'],
      relevantImaging: ['MRI/MRA brain', 'CTA if aneurysm suspected'],
    },
  ],
  relatedStructures: ['midbrain', 'cavernous-sinus', 'orbit', 'extraocular-muscles'],
});

cranialNerves.set('cn-vii', {
  id: 'cn-vii',
  number: 7,
  name: 'Facial Nerve',
  latinName: 'Nervus facialis',
  fmaId: 'FMA:50868',
  fiberType: 'mixed',
  nuclei: ['Facial motor nucleus (pons)', 'Superior salivatory nucleus', 'Nucleus tractus solitarius (taste)'],
  foramina: ['Internal acoustic meatus', 'Facial canal', 'Stylomastoid foramen'],
  function: 'Facial expression, taste (anterior 2/3 tongue), lacrimation, salivation, stapedius',
  distribution: 'Muscles of facial expression, anterior tongue, lacrimal/submandibular/sublingual glands',
  motorFunction: 'Muscles of facial expression, stapedius, posterior belly of digastric, stylohyoid',
  sensoryFunction: 'Taste from anterior 2/3 of tongue (via chorda tympani)',
  parasympatheticFunction: 'Lacrimal gland, submandibular gland, sublingual gland',
  explanations: {
    level1: 'The facial nerve controls your facial expressions, taste on the front of your tongue, and tears.',
    level2: 'Cranial nerve VII has multiple functions: facial movement, taste from the front of the tongue, tear production, and some salivary glands. Bell\'s palsy is a common facial nerve problem.',
    level3: 'CN VII has motor fibers (facial expression), parasympathetic fibers (lacrimal, submandibular, sublingual glands), and special sensory (taste). Upper vs lower face pattern distinguishes central from peripheral lesions.',
    level4: 'The forehead receives bilateral cortical input, so UMN lesions spare the forehead while LMN lesions (Bell\'s palsy) affect the entire hemiface. The nerve passes through the internal acoustic meatus, middle ear, and exits at stylomastoid foramen.',
    level5: 'Bell\'s palsy is likely due to HSV-1 reactivation in the geniculate ganglion. The narrow facial canal makes the nerve vulnerable to edema-induced compression. Ramsay Hunt syndrome (VZV) causes facial palsy with vesicular rash in ear. Crocodile tears (aberrant regeneration) can occur after recovery.',
  },
  keyFacts: [
    'Motor: muscles of facial expression',
    'Parasympathetic: lacrimal, submandibular, sublingual glands',
    'Taste: anterior 2/3 tongue (chorda tympani)',
    'Forehead sparing = UMN lesion; entire face = LMN (Bell\'s)',
    'Bell\'s palsy: idiopathic, often HSV-1 related',
  ],
  clinicalTests: ['Facial symmetry', 'Raise eyebrows, close eyes tightly, show teeth', 'Taste testing'],
  pathologies: [
    {
      name: 'Bell\'s palsy',
      description: 'Idiopathic peripheral facial paralysis',
      symptoms: ['Unilateral facial weakness (entire hemiface)', 'Inability to close eye', 'Drooling', 'Hyperacusis', 'Taste disturbance'],
      causes: ['Likely HSV-1 reactivation'],
      relevantImaging: ['MRI if atypical or no improvement'],
    },
    {
      name: 'Ramsay Hunt syndrome',
      description: 'Facial palsy with VZV reactivation',
      symptoms: ['Facial palsy', 'Ear pain', 'Vesicles in ear canal/pinna', 'Hearing loss', 'Vertigo'],
      causes: ['VZV reactivation in geniculate ganglion'],
    },
  ],
  relatedStructures: ['parotid-gland', 'middle-ear', 'stylomastoid-foramen', 'chorda-tympani'],
});

cranialNerves.set('cn-x', {
  id: 'cn-x',
  number: 10,
  name: 'Vagus Nerve',
  latinName: 'Nervus vagus',
  fmaId: 'FMA:50871',
  fiberType: 'mixed',
  nuclei: ['Nucleus ambiguus (motor)', 'Dorsal motor nucleus (parasympathetic)', 'Nucleus tractus solitarius (sensory)'],
  foramina: ['Jugular foramen'],
  function: 'Parasympathetic to thoracoabdominal viscera, pharynx/larynx motor, sensation, taste',
  distribution: 'Pharynx, larynx, heart, lungs, GI tract to splenic flexure',
  motorFunction: 'Pharyngeal muscles, laryngeal muscles (via recurrent laryngeal nerve)',
  sensoryFunction: 'External ear sensation, pharynx/larynx sensation, visceral sensation',
  parasympatheticFunction: 'Heart (decrease rate), Lungs (bronchoconstriction), GI (motility, secretion)',
  explanations: {
    level1: 'The vagus nerve is the "wandering nerve" that controls many organs in your chest and belly.',
    level2: 'Cranial nerve X (vagus means "wandering") is the main parasympathetic nerve to your heart, lungs, and digestive tract. It also controls swallowing and voice.',
    level3: 'The vagus provides parasympathetic innervation to thoracic and abdominal viscera (to splenic flexure), motor to pharynx and larynx (via recurrent laryngeal nerve), and sensation from pharynx/larynx and external ear.',
    level4: 'Vagal tone maintains resting heart rate below intrinsic pacemaker rate. The recurrent laryngeal nerve loops around the aortic arch (left) or subclavian (right) and is vulnerable during thyroid surgery. Vagal afferents mediate the gag reflex (CN IX sensory, CN X motor).',
    level5: 'Vagal efferents release ACh onto cardiac M2 receptors, activating IKACh to slow SA node firing. Inflammatory reflex: vagal sensory afferents detect cytokines, triggering efferent vagal inhibition of splenic TNF release via α7 nicotinic receptors on macrophages. Vagus nerve stimulation is used for epilepsy and depression.',
  },
  keyFacts: [
    'Longest cranial nerve',
    '"Rest and digest" parasympathetic to thoracoabdominal viscera',
    'Recurrent laryngeal: vocal cord movement',
    'Gag reflex: CN IX afferent, CN X efferent',
    'Vagal tone maintains low resting heart rate',
  ],
  clinicalTests: ['Gag reflex', 'Palate elevation ("ah")', 'Voice quality', 'Swallowing'],
  pathologies: [
    {
      name: 'Vocal cord paralysis',
      description: 'Recurrent laryngeal nerve damage',
      symptoms: ['Hoarseness', 'Weak voice', 'Aspiration', 'Stridor (if bilateral)'],
      causes: ['Thyroid surgery', 'Lung cancer', 'Aortic aneurysm', 'Neck trauma'],
      relevantImaging: ['Laryngoscopy', 'CT neck/chest'],
    },
  ],
  relatedStructures: ['pharynx', 'larynx', 'heart', 'esophagus', 'stomach', 'intestines'],
});

// Add remaining cranial nerves (abbreviated for space)
const remainingCranialNerves = [
  { id: 'cn-iv', number: 4, name: 'Trochlear Nerve', fiberType: 'motor' as const, function: 'Superior oblique muscle (down and in)' },
  { id: 'cn-v', number: 5, name: 'Trigeminal Nerve', fiberType: 'mixed' as const, function: 'Facial sensation, mastication' },
  { id: 'cn-vi', number: 6, name: 'Abducens Nerve', fiberType: 'motor' as const, function: 'Lateral rectus (abduction)' },
  { id: 'cn-viii', number: 8, name: 'Vestibulocochlear Nerve', fiberType: 'sensory' as const, function: 'Hearing, balance' },
  { id: 'cn-ix', number: 9, name: 'Glossopharyngeal Nerve', fiberType: 'mixed' as const, function: 'Taste posterior tongue, swallow, carotid body' },
  { id: 'cn-xi', number: 11, name: 'Accessory Nerve', fiberType: 'motor' as const, function: 'SCM, trapezius muscles' },
  { id: 'cn-xii', number: 12, name: 'Hypoglossal Nerve', fiberType: 'motor' as const, function: 'Tongue movement' },
];

for (const cn of remainingCranialNerves) {
  cranialNerves.set(cn.id, {
    id: cn.id,
    number: cn.number,
    name: cn.name,
    latinName: `Nervus ${cn.name.toLowerCase().replace(' nerve', '')}`,
    fiberType: cn.fiberType,
    nuclei: [],
    foramina: [],
    function: cn.function,
    distribution: '',
    explanations: {
      level1: `Cranial nerve ${cn.number} (${cn.name}) - ${cn.function}.`,
      level2: `The ${cn.name} is responsible for ${cn.function}.`,
      level3: `CN ${cn.number} (${cn.name}) provides ${cn.fiberType} function for ${cn.function}.`,
      level4: `The ${cn.name} (CN ${cn.number}) is a ${cn.fiberType} nerve. ${cn.function}.`,
      level5: `CN ${cn.number} (${cn.name}) - detailed neuroanatomical and clinical considerations for ${cn.function}.`,
    },
    keyFacts: [cn.function],
  });
}

// ============================================================================
// SPINAL CORD
// ============================================================================

const spinalCordStructures: Map<string, SpinalCordStructure> = new Map();

spinalCordStructures.set('spinal-cord', {
  id: 'spinal-cord',
  name: 'Spinal Cord',
  latinName: 'Medulla spinalis',
  fmaId: 'FMA:7647',
  region: 'cervical',
  levelRange: 'C1-L1/L2',
  location: 'Within vertebral canal, from foramen magnum to L1-L2 (conus medullaris)',
  function: 'Conducts sensory and motor information, reflex arcs, autonomic function',
  tracts: [
    { name: 'Corticospinal tract (lateral)', type: 'descending', function: 'Voluntary movement', origin: 'Motor cortex', termination: 'Spinal motor neurons', decussation: 'Pyramidal decussation (medulla)' },
    { name: 'Dorsal columns', type: 'ascending', function: 'Fine touch, proprioception, vibration', origin: 'Peripheral receptors', termination: 'Nucleus gracilis/cuneatus', decussation: 'Medial lemniscus (medulla)' },
    { name: 'Spinothalamic tract', type: 'ascending', function: 'Pain, temperature, crude touch', origin: 'Dorsal horn', termination: 'Thalamus (VPL)', decussation: 'At spinal level (anterior commissure)' },
  ],
  bloodSupply: ['Anterior spinal artery (2/3)', 'Posterior spinal arteries (1/3)', 'Segmental arteries'],
  explanations: {
    level1: 'The spinal cord is the main nerve highway connecting your brain to your body.',
    level2: 'The spinal cord carries messages between your brain and body. It also handles reflexes - automatic responses that don\'t need your brain.',
    level3: 'The spinal cord has gray matter (cell bodies, interneurons) surrounded by white matter (ascending and descending tracts). It ends at L1-L2 as the conus medullaris; spinal nerves continue as the cauda equina.',
    level4: 'Major ascending tracts: dorsal columns (ipsilateral proprioception/vibration, cross in medulla), spinothalamic (contralateral pain/temp, cross at level). Major descending tract: lateral corticospinal (crosses at pyramids). The anterior spinal artery supplies the anterior 2/3.',
    level5: 'Spinal cord somatotopy: cervical fibers are medial to sacral in corticospinal tract (legs lateral, arms medial) but reversed in spinothalamic (sacral lateral, cervical medial). This explains central cord syndrome sparing sacral function. The artery of Adamkiewicz (T9-L2) is the major blood supply to lower cord.',
  },
  keyFacts: [
    'Length: 45 cm; ends at L1-L2 (conus medullaris)',
    'Cervical and lumbar enlargements for limb innervation',
    'Gray matter: H-shaped, contains cell bodies',
    'White matter: myelinated tracts surrounding gray',
    'Anterior spinal artery supplies anterior 2/3',
  ],
  pathologies: [
    {
      name: 'Spinal cord injury',
      description: 'Traumatic damage to spinal cord',
      symptoms: ['Paralysis below level', 'Sensory loss', 'Autonomic dysfunction'],
      causes: ['Trauma', 'Falls', 'Motor vehicle accidents'],
      relevantImaging: ['MRI spine', 'CT spine'],
    },
    {
      name: 'Central cord syndrome',
      description: 'Central spinal cord injury, often from hyperextension',
      symptoms: ['Upper extremity > lower extremity weakness', 'Variable sensory loss'],
      causes: ['Hyperextension injury with cervical stenosis'],
    },
  ],
  relatedStructures: ['vertebral-column', 'spinal-nerves', 'meninges'],
});

// ============================================================================
// PERIPHERAL NERVES
// ============================================================================

const peripheralNerves: Map<string, PeripheralNerve> = new Map();

peripheralNerves.set('median-nerve', {
  id: 'median-nerve',
  name: 'Median Nerve',
  latinName: 'Nervus medianus',
  fmaId: 'FMA:14385',
  origin: 'Brachial plexus',
  roots: ['C5', 'C6', 'C7', 'C8', 'T1'],
  type: 'mixed',
  musclesInnervated: ['Pronator teres', 'Flexor carpi radialis', 'Flexor digitorum superficialis', 'LOAF muscles (thenar)'],
  sensoryDistribution: 'Palmar thumb, index, middle, lateral ring finger',
  motorFunction: 'Forearm pronation, wrist flexion, finger flexion, thumb opposition',
  course: 'Descends arm with brachial artery, passes through carpal tunnel',
  explanations: {
    level1: 'The median nerve controls muscles in your forearm and hand, and provides feeling to part of your palm.',
    level2: 'The median nerve runs down your arm, through the carpal tunnel at your wrist, and controls thumb movement and sensation to the palm side of your thumb and fingers.',
    level3: 'The median nerve arises from lateral and medial cords of brachial plexus (C5-T1). It innervates forearm flexors (except FCU and medial FDP) and thenar muscles (LOAF). Carpal tunnel syndrome is the most common entrapment.',
    level4: 'Median nerve branches: anterior interosseous (FPL, pronator quadratus, lateral FDP) is pure motor; palmar cutaneous branch arises proximal to carpal tunnel (spared in CTS). High median lesions show "hand of benediction" with inability to flex index/middle fingers.',
    level5: 'Carpal tunnel syndrome involves compression in the fibroosseous tunnel bounded by carpal bones and transverse carpal ligament. Phalen\'s and Tinel\'s tests are clinical screening; NCS/EMG confirm diagnosis. Provocative tests and symptoms follow dermatomal distribution (D1-3.5). Treatment ranges from splinting to carpal tunnel release.',
  },
  keyFacts: [
    'C5-T1 roots (lateral and medial cords)',
    'Carpal tunnel syndrome: most common entrapment neuropathy',
    'LOAF muscles: Lumbricals 1-2, Opponens pollicis, Abductor pollicis brevis, Flexor pollicis brevis',
    '"Hand of benediction": high median nerve lesion',
    'Anterior interosseous syndrome: pure motor (no sensory loss)',
  ],
  pathologies: [
    {
      name: 'Carpal tunnel syndrome',
      description: 'Median nerve compression at wrist',
      symptoms: ['Numbness in thumb, index, middle, half of ring finger', 'Night pain', 'Thenar weakness (late)'],
      causes: ['Repetitive use', 'Pregnancy', 'Hypothyroidism', 'Diabetes', 'Rheumatoid arthritis'],
      relevantTests: ['Phalen test', 'Tinel sign', 'Nerve conduction studies'],
    },
  ],
  relatedStructures: ['brachial-plexus', 'carpal-tunnel', 'thenar-muscles'],
});

peripheralNerves.set('ulnar-nerve', {
  id: 'ulnar-nerve',
  name: 'Ulnar Nerve',
  latinName: 'Nervus ulnaris',
  fmaId: 'FMA:37319',
  origin: 'Brachial plexus (medial cord)',
  roots: ['C8', 'T1'],
  type: 'mixed',
  musclesInnervated: ['FCU', 'Medial FDP', 'Hypothenar muscles', 'Interossei', 'Medial lumbricals', 'Adductor pollicis'],
  sensoryDistribution: 'Medial hand, little finger, medial ring finger',
  motorFunction: 'Wrist flexion (ulnar), finger flexion (4-5), finger abduction/adduction, thumb adduction',
  course: 'Descends arm, passes behind medial epicondyle (cubital tunnel), through Guyon canal',
  explanations: {
    level1: 'The ulnar nerve controls many small muscles in your hand and provides feeling to your little finger.',
    level2: 'The ulnar nerve runs down the inner arm, passes behind your elbow (the "funny bone"), and controls most of the small muscles in your hand.',
    level3: 'The ulnar nerve (C8-T1) innervates FCU, medial FDP, and most intrinsic hand muscles. Common entrapment sites: cubital tunnel (elbow) and Guyon canal (wrist).',
    level4: 'Ulnar neuropathy causes "claw hand" (hyperextension at MCP, flexion at IP of digits 4-5) due to unopposed extensor action with paralyzed lumbricals/interossei. Paradoxically, low lesions show worse clawing (ulnar paradox) because FDP is preserved.',
    level5: 'Froment sign tests adductor pollicis: patient compensates with FPL (median nerve) causing thumb IP flexion. Wartenberg sign: abducted small finger from EDM action with paralyzed interossei. Cubital tunnel is bounded by medial epicondyle, olecranon, and Osborne ligament.',
  },
  keyFacts: [
    'C8-T1 roots (medial cord)',
    '"Funny bone": vulnerable at medial epicondyle',
    'Claw hand: 4th and 5th digits',
    'Froment sign: compensatory thumb IP flexion',
    'Ulnar paradox: worse clawing with lower lesion',
  ],
  pathologies: [
    {
      name: 'Cubital tunnel syndrome',
      description: 'Ulnar nerve compression at elbow',
      symptoms: ['Medial hand/4th-5th finger numbness', 'Hand weakness', 'Claw hand (late)'],
      causes: ['Prolonged elbow flexion', 'Trauma', 'Cubitus valgus'],
      relevantTests: ['Tinel at elbow', 'Elbow flexion test', 'Nerve conduction studies'],
    },
  ],
  relatedStructures: ['brachial-plexus', 'cubital-tunnel', 'guyon-canal', 'interossei'],
});

peripheralNerves.set('sciatic-nerve', {
  id: 'sciatic-nerve',
  name: 'Sciatic Nerve',
  latinName: 'Nervus ischiadicus',
  fmaId: 'FMA:19034',
  origin: 'Lumbosacral plexus',
  roots: ['L4', 'L5', 'S1', 'S2', 'S3'],
  type: 'mixed',
  musclesInnervated: ['Hamstrings', 'All muscles below knee (via tibial and common peroneal branches)'],
  sensoryDistribution: 'Most of leg and foot (via branches)',
  motorFunction: 'Knee flexion, all movement below knee',
  course: 'Exits pelvis through greater sciatic foramen, descends posterior thigh, divides into tibial and common peroneal nerves',
  explanations: {
    level1: 'The sciatic nerve is the largest nerve in your body, running from your lower back down your leg.',
    level2: 'The sciatic nerve controls muscles in the back of your thigh and all the muscles below your knee. "Sciatica" is pain along this nerve, usually from a herniated disc.',
    level3: 'The sciatic nerve (L4-S3) is the largest nerve in the body. It innervates the hamstrings directly and all leg/foot muscles via tibial and common peroneal divisions. Piriformis syndrome and disc herniation are common causes of sciatic pain.',
    level4: 'The tibial division (posterior leg, plantar foot) and common peroneal division (anterior/lateral leg, dorsal foot) often separate in the popliteal fossa. The common peroneal is vulnerable at the fibular neck. L4-S1 contribute most to sciatic function.',
    level5: 'Sciatic nerve dysfunction patterns help localize lesions: piriformis syndrome spares hamstrings (branch proximal to piriformis). Common peroneal palsy at fibular neck causes foot drop with intact inversion (tibialis posterior). L5 radiculopathy may mimic peroneal palsy but includes hip abductor weakness (gluteus medius).',
  },
  keyFacts: [
    'Largest nerve in the body',
    'L4-S3 roots (lumbosacral plexus)',
    'Divides into tibial and common peroneal nerves',
    'Piriformis syndrome: compression in piriformis muscle',
    'Common peroneal vulnerable at fibular neck → foot drop',
  ],
  pathologies: [
    {
      name: 'Sciatica',
      description: 'Pain radiating along sciatic nerve distribution',
      symptoms: ['Low back pain radiating to leg', 'Numbness', 'Weakness'],
      causes: ['Disc herniation (most common)', 'Piriformis syndrome', 'Spinal stenosis'],
      relevantImaging: ['MRI lumbar spine'],
    },
  ],
  relatedStructures: ['lumbosacral-plexus', 'piriformis', 'tibial-nerve', 'common-peroneal-nerve'],
});

// ============================================================================
// AUTONOMIC GANGLIA
// ============================================================================

const autonomicGanglia: Map<string, AutonomicGanglion> = new Map();

autonomicGanglia.set('superior-cervical-ganglion', {
  id: 'superior-cervical-ganglion',
  name: 'Superior Cervical Ganglion',
  latinName: 'Ganglion cervicale superius',
  division: 'sympathetic',
  location: 'Anterior to C2-C3 transverse processes',
  preganglionicSource: 'T1-T3 intermediolateral cell column via white rami',
  postganglionicTargets: ['Pupil dilator', 'Müller muscle (eyelid)', 'Sweat glands of head/neck', 'Carotid plexus'],
  neurotransmitters: {
    preganglionic: 'Acetylcholine (nicotinic)',
    postganglionic: 'Norepinephrine (adrenergic)',
  },
  function: 'Sympathetic innervation to head and neck',
  explanations: {
    level1: 'This ganglion controls the sympathetic "fight or flight" responses in your head and neck.',
    level2: 'The superior cervical ganglion sends sympathetic signals to your eyes (dilate pupils), eyelids, and blood vessels of the head. Damage causes Horner syndrome.',
    level3: 'The SCG is the largest sympathetic ganglion and provides sympathetic innervation to head/neck structures. Fibers travel along the internal and external carotid arteries. Preganglionic fibers originate from T1-T3.',
    level4: 'The oculosympathetic pathway: hypothalamus → brainstem → T1 ciliospinal center → SCG → internal carotid → pupil dilator and Müller muscle. Disruption at any level causes Horner syndrome (miosis, ptosis, anhidrosis).',
    level5: 'Horner syndrome localization: central (hypothalamus/brainstem), preganglionic (T1, lung apex), or postganglionic (SCG, carotid). Cocaine test: fails to dilate miotic pupil. Hydroxyamphetamine test: dilates if preganglionic, fails if postganglionic (denervated pupil dilator lacks NE stores to release).',
  },
  keyFacts: [
    'Largest sympathetic ganglion',
    'Preganglionic fibers from T1-T3 (ciliospinal center at T1)',
    'Postganglionic fibers via carotid arteries to head',
    'Damage causes Horner syndrome',
    'Horner: miosis, ptosis, anhidrosis (ipsilateral face)',
  ],
});

// ============================================================================
// REFLEXES
// ============================================================================

export const SPINAL_REFLEXES: ReflexArc[] = [
  {
    name: 'Biceps reflex',
    type: 'stretch',
    afferentNerve: 'Musculocutaneous nerve',
    center: 'C5-C6',
    efferentNerve: 'Musculocutaneous nerve',
    effector: 'Biceps brachii',
    spinalLevel: 'C5-C6',
    clinicalNote: 'Tests C5-C6 nerve roots; diminished in C5-C6 radiculopathy',
  },
  {
    name: 'Triceps reflex',
    type: 'stretch',
    afferentNerve: 'Radial nerve',
    center: 'C6-C7',
    efferentNerve: 'Radial nerve',
    effector: 'Triceps brachii',
    spinalLevel: 'C7-C8',
    clinicalNote: 'Tests C7 nerve root primarily',
  },
  {
    name: 'Brachioradialis reflex',
    type: 'stretch',
    afferentNerve: 'Radial nerve',
    center: 'C5-C6',
    efferentNerve: 'Radial nerve',
    effector: 'Brachioradialis',
    spinalLevel: 'C5-C6',
    clinicalNote: 'Tests C5-C6; inversion indicates C5-C6 lesion with intact C7',
  },
  {
    name: 'Patellar (knee-jerk) reflex',
    type: 'stretch',
    afferentNerve: 'Femoral nerve',
    center: 'L2-L4',
    efferentNerve: 'Femoral nerve',
    effector: 'Quadriceps femoris',
    spinalLevel: 'L3-L4',
    clinicalNote: 'Tests L3-L4 nerve roots; absent in L3-L4 radiculopathy, hyperactive in UMN lesion',
  },
  {
    name: 'Achilles (ankle-jerk) reflex',
    type: 'stretch',
    afferentNerve: 'Tibial nerve',
    center: 'S1-S2',
    efferentNerve: 'Tibial nerve',
    effector: 'Gastrocnemius, soleus',
    spinalLevel: 'S1-S2',
    clinicalNote: 'Tests S1 nerve root; often first reflex lost in peripheral neuropathy',
  },
  {
    name: 'Plantar reflex',
    type: 'superficial',
    afferentNerve: 'Tibial nerve',
    center: 'S1-S2',
    efferentNerve: 'Tibial nerve',
    effector: 'Toe flexors',
    spinalLevel: 'S1-S2',
    clinicalNote: 'Babinski sign (upgoing toe) indicates UMN lesion; normal in infants',
  },
];

// ============================================================================
// DERMATOMES
// ============================================================================

export const KEY_DERMATOMES: Dermatome[] = [
  { level: 'C2', landmark: 'Occiput', region: 'Posterior scalp' },
  { level: 'C3', landmark: 'Supraclavicular fossa', region: 'Lower neck' },
  { level: 'C4', landmark: 'Top of shoulder (acromioclavicular joint)', region: 'Upper shoulder' },
  { level: 'C5', landmark: 'Lateral arm (deltoid region)', region: 'Lateral arm' },
  { level: 'C6', landmark: 'Thumb', region: 'Lateral forearm, thumb' },
  { level: 'C7', landmark: 'Middle finger', region: 'Middle finger' },
  { level: 'C8', landmark: 'Little finger', region: 'Medial forearm, small finger' },
  { level: 'T1', landmark: 'Medial arm', region: 'Medial arm above elbow' },
  { level: 'T4', landmark: 'Nipple line', region: 'Chest at nipple level' },
  { level: 'T10', landmark: 'Umbilicus', region: 'Abdomen at umbilicus' },
  { level: 'L1', landmark: 'Inguinal region', region: 'Groin' },
  { level: 'L2', landmark: 'Anterior thigh', region: 'Anterior mid-thigh' },
  { level: 'L3', landmark: 'Medial knee', region: 'Medial knee' },
  { level: 'L4', landmark: 'Medial malleolus', region: 'Medial leg, great toe' },
  { level: 'L5', landmark: 'Dorsum of foot', region: 'Lateral leg, dorsum of foot' },
  { level: 'S1', landmark: 'Lateral foot, small toe', region: 'Lateral foot, sole' },
  { level: 'S2-S4', landmark: 'Perianal region', region: 'Saddle area (sacral sparing)' },
];

// ============================================================================
// NEUROTRANSMITTERS
// ============================================================================

export const NEUROTRANSMITTERS: Neurotransmitter[] = [
  {
    name: 'Acetylcholine (ACh)',
    type: 'excitatory',
    primarySite: 'Neuromuscular junction, autonomic ganglia, basal forebrain',
    function: 'Muscle contraction, autonomic function, memory, attention',
    receptors: ['Nicotinic (ion channel)', 'Muscarinic (M1-M5, GPCR)'],
    clinicalNote: 'Deficient in Alzheimer disease; blocked by botulinum toxin at NMJ',
  },
  {
    name: 'Dopamine',
    type: 'modulatory',
    primarySite: 'Substantia nigra, VTA, hypothalamus',
    function: 'Movement, reward, motivation, hormone regulation',
    receptors: ['D1-like (D1, D5)', 'D2-like (D2, D3, D4)'],
    clinicalNote: 'Deficient in Parkinson disease; excess in schizophrenia positive symptoms',
  },
  {
    name: 'Norepinephrine',
    type: 'modulatory',
    primarySite: 'Locus coeruleus, sympathetic nervous system',
    function: 'Arousal, attention, fight-or-flight',
    receptors: ['α1, α2, β1, β2, β3 adrenergic'],
    clinicalNote: 'Target of many antidepressants (SNRIs)',
  },
  {
    name: 'Serotonin (5-HT)',
    type: 'modulatory',
    primarySite: 'Raphe nuclei',
    function: 'Mood, sleep, appetite, cognition',
    receptors: ['5-HT1-7 (mostly GPCR, 5-HT3 is ion channel)'],
    clinicalNote: 'Target of SSRIs; involved in depression and anxiety',
  },
  {
    name: 'GABA',
    type: 'inhibitory',
    primarySite: 'Throughout brain (interneurons)',
    function: 'Main inhibitory neurotransmitter',
    receptors: ['GABA-A (ion channel, Cl⁻)', 'GABA-B (GPCR)'],
    clinicalNote: 'Enhanced by benzodiazepines, barbiturates, alcohol',
  },
  {
    name: 'Glutamate',
    type: 'excitatory',
    primarySite: 'Throughout brain (pyramidal neurons)',
    function: 'Main excitatory neurotransmitter, learning, memory',
    receptors: ['NMDA', 'AMPA', 'Kainate (ion channels)', 'mGluR (GPCR)'],
    clinicalNote: 'Excitotoxicity in stroke; NMDA blockers used in anesthesia',
  },
];

// ============================================================================
// INDEXES
// ============================================================================

const brainByRegion: Map<string, BrainStructure[]> = new Map();
const brainByLobe: Map<string, BrainStructure[]> = new Map();

for (const structure of brainStructures.values()) {
  // By region
  const regionList = brainByRegion.get(structure.region) || [];
  regionList.push(structure);
  brainByRegion.set(structure.region, regionList);

  // By lobe
  if (structure.lobe) {
    const lobeList = brainByLobe.get(structure.lobe) || [];
    lobeList.push(structure);
    brainByLobe.set(structure.lobe, lobeList);
  }
}

// ============================================================================
// API FUNCTIONS
// ============================================================================

/**
 * Get a brain structure by ID
 */
export function getBrainStructure(id: string): BrainStructure | undefined {
  return brainStructures.get(id);
}

/**
 * Get all brain structures
 */
export function getAllBrainStructures(): BrainStructure[] {
  return Array.from(brainStructures.values());
}

/**
 * Get brain structures by CNS region
 */
export function getBrainStructuresByRegion(region: CNSRegion): BrainStructure[] {
  return brainByRegion.get(region) || [];
}

/**
 * Get brain structures by cerebral lobe
 */
export function getBrainStructuresByLobe(lobe: CerebralLobe): BrainStructure[] {
  return brainByLobe.get(lobe) || [];
}

/**
 * Get a cranial nerve by ID
 */
export function getCranialNerve(id: string): CranialNerve | undefined {
  return cranialNerves.get(id);
}

/**
 * Get a cranial nerve by number
 */
export function getCranialNerveByNumber(num: number): CranialNerve | undefined {
  return Array.from(cranialNerves.values()).find((cn) => cn.number === num);
}

/**
 * Get all cranial nerves
 */
export function getAllCranialNerves(): CranialNerve[] {
  return Array.from(cranialNerves.values()).sort((a, b) => a.number - b.number);
}

/**
 * Get a spinal cord structure by ID
 */
export function getSpinalCordStructure(id: string): SpinalCordStructure | undefined {
  return spinalCordStructures.get(id);
}

/**
 * Get a peripheral nerve by ID
 */
export function getPeripheralNerve(id: string): PeripheralNerve | undefined {
  return peripheralNerves.get(id);
}

/**
 * Get all peripheral nerves
 */
export function getAllPeripheralNerves(): PeripheralNerve[] {
  return Array.from(peripheralNerves.values());
}

/**
 * Get an autonomic ganglion by ID
 */
export function getAutonomicGanglion(id: string): AutonomicGanglion | undefined {
  return autonomicGanglia.get(id);
}

/**
 * Search nervous system structures
 */
export function searchNervousStructures(query: string): (BrainStructure | CranialNerve | PeripheralNerve)[] {
  const lowerQuery = query.toLowerCase();
  const results: (BrainStructure | CranialNerve | PeripheralNerve)[] = [];

  for (const structure of brainStructures.values()) {
    if (
      structure.name.toLowerCase().includes(lowerQuery) ||
      structure.function.toLowerCase().includes(lowerQuery)
    ) {
      results.push(structure);
    }
  }

  for (const nerve of cranialNerves.values()) {
    if (
      nerve.name.toLowerCase().includes(lowerQuery) ||
      nerve.function.toLowerCase().includes(lowerQuery)
    ) {
      results.push(nerve);
    }
  }

  for (const nerve of peripheralNerves.values()) {
    if (
      nerve.name.toLowerCase().includes(lowerQuery) ||
      nerve.motorFunction?.toLowerCase().includes(lowerQuery) ||
      nerve.sensoryDistribution?.toLowerCase().includes(lowerQuery)
    ) {
      results.push(nerve);
    }
  }

  return results;
}

/**
 * Get explanation at a specific level for any nervous structure
 */
export function getNervousExplanation(
  id: string,
  level: 1 | 2 | 3 | 4 | 5
): string | undefined {
  const brain = brainStructures.get(id);
  if (brain) return brain.explanations[`level${level}`];

  const cranial = cranialNerves.get(id);
  if (cranial) return cranial.explanations[`level${level}`];

  const peripheral = peripheralNerves.get(id);
  if (peripheral) return peripheral.explanations[`level${level}`];

  const spinal = spinalCordStructures.get(id);
  if (spinal) return spinal.explanations[`level${level}`];

  return undefined;
}

/**
 * Get nervous system statistics
 */
export function getNervousStatistics(): NervousStatistics {
  return {
    totalBrainStructures: brainStructures.size,
    cranialNerves: cranialNerves.size,
    spinalCordSegments: 31,
    peripheralNerves: peripheralNerves.size,
    estimatedNeurons: '86 billion',
  };
}
