/**
 * Brain Anatomy Encyclopedia Entries
 * 
 * Transcribed from OpenStax Anatomy & Physiology (CC BY 4.0)
 * Local comprehensive reference for offline access
 */

import type { EncyclopediaEntry } from '../types';

/**
 * Brain Overview Entry
 */
export const brainEntry: EncyclopediaEntry = {
  entryId: 'brain',
  name: 'Brain',
  nameEs: 'Cerebro',
  entryType: 'anatomy',
  category: 'neurologic',
  summary: 'The central organ of the nervous system responsible for processing sensory information, controlling motor function, and higher cognitive functions.',
  overview: {
    patient: 'The brain is the control center of your body, weighing about 3 pounds. It receives information from your senses, controls your movements, and is responsible for thinking, learning, memory, and emotions. It uses about 20% of your body\'s energy despite being only 2% of your body weight.',
    intermediate: 'The brain is the most complex organ in the body, containing approximately 86 billion neurons. It is divided into major regions: the cerebrum (cerebral cortex, basal ganglia, limbic system), cerebellum, and brainstem (midbrain, pons, medulla oblongata). It receives sensory input, processes information, generates motor output, and performs higher cognitive functions including consciousness, thought, and memory.',
    professional: 'The brain is the cephalic portion of the central nervous system, weighing approximately 1300-1400g in adults. It consists of the telencephalon (cerebral hemispheres, basal ganglia, limbic structures), cerebellum, and brainstem. The brain demonstrates structural and functional specialization across cortical and subcortical regions, with integrated networks subserving sensory processing, motor control, homeostatic regulation, and higher-order cognition.',
  },
  content: [
    {
      title: 'Major Brain Regions',
      content: {
        patient: `The brain has three main parts: (1) The cerebrum is the large, folded part on top that handles thinking, voluntary movements, and senses. (2) The cerebellum at the back coordinates movement and balance. (3) The brainstem connects to the spinal cord and controls automatic functions like breathing and heart rate.`,
        intermediate: `The cerebrum is the largest portion, divided into two hemispheres connected by the corpus callosum. It contains the cerebral cortex (gray matter) and underlying white matter tracts. The cerebellum coordinates voluntary movements, posture, and balance. The brainstem includes the midbrain (visual/auditory reflexes), pons (relay between cerebrum and cerebellum), and medulla oblongata (vital autonomic functions). The diencephalon (thalamus, hypothalamus, epithalamus) sits beneath the cerebrum.`,
        professional: `Brain organization: (1) Telencephalon - cerebral hemispheres with 6-layered neocortex (allocortex in hippocampus/piriform cortex), white matter association/commissural/projection fibers, basal nuclei (caudate, putamen, globus pallidus, nucleus accumbens), amygdala, hippocampal formation; (2) Diencephalon - thalamus (relay nuclei), hypothalamus (homeostatic control), epithalamus (pineal, habenula), subthalamus; (3) Mesencephalon (midbrain) - tectum (superior/inferior colliculi), tegmentum (red nucleus, substantia nigra, periaqueductal gray), cerebral peduncles; (4) Metencephalon - pons (basis pontis, pontine tegmentum), cerebellum (cortex, deep nuclei); (5) Myelencephalon - medulla oblongata (pyramids, inferior olivary nuclei, cranial nerve nuclei).`,
      },
    },
    {
      title: 'Cerebral Cortex',
      content: {
        patient: `The cerebral cortex is the wrinkled outer layer of the brain responsible for consciousness, thought, language, memory, and voluntary movement. The folds (gyri) and grooves (sulci) increase surface area. Different areas have different jobs: the frontal lobe for decision-making and movement, parietal for sensation, temporal for hearing and memory, and occipital for vision.`,
        intermediate: `The cerebral cortex consists of gray matter organized into six layers (I-VI) with distinct cytoarchitecture across regions. The frontal lobe contains the primary motor cortex (precentral gyrus) and prefrontal cortex (executive function). The parietal lobe contains the primary somatosensory cortex (postcentral gyrus). The temporal lobe processes auditory information and contains the hippocampus (memory). The occipital lobe contains the primary visual cortex. Each lobe also has association areas for complex processing.`,
        professional: `Cortical organization: (1) Cytoarchitecture - six-layered neocortex (molecular, external granular, external pyramidal, internal granular, internal pyramidal, multiform layers); Brodmann areas based on histology; (2) Functional divisions - primary sensory cortices (V1, A1, S1), primary motor cortex (M1), unimodal association areas, heteromodal association areas (prefrontal, parietotemporal), limbic cortex; (3) Frontal lobe - primary motor cortex (layer V Betz cells), premotor cortex (movement planning), supplementary motor cortex, prefrontal cortex (dorsolateral, orbitofrontal, medial), Broca\'s area (left hemisphere, speech production); (4) Parietal lobe - primary somatosensory cortex (areas 3b, 1, 2), posterior parietal cortex (spatial attention, praxis), angular gyrus, supramarginal gyrus; (5) Temporal lobe - primary auditory cortex (transverse temporal gyri), Wernicke\'s area (language comprehension), medial temporal lobe (hippocampus, entorhinal, perirhinal, parahippocampal cortices); (6) Occipital lobe - primary visual cortex (V1, striate cortex), extrastriate areas (V2-V5/MT).`,
      },
    },
    {
      title: 'Basal Ganglia',
      content: {
        patient: `The basal ganglia are deep brain structures involved in movement control, learning, and emotion. They include the caudate, putamen, and globus pallidus. They work with the motor cortex to start and stop movements smoothly. Problems here cause movement disorders like Parkinson's disease and Huntington's disease.`,
        intermediate: `The basal ganglia are subcortical nuclei including the striatum (caudate nucleus and putamen), globus pallidus (external and internal segments), subthalamic nucleus, and substantia nigra (pars compacta and pars reticulata). They form circuits with the cortex and thalamus to regulate voluntary movement initiation, inhibition of competing movements, and procedural learning. Dopamine from substantia nigra pars compacta modulates striatal activity.`,
        professional: `Basal ganglia circuitry: (1) Input nuclei - striatum (caudate, putamen, nucleus accumbens) receives glutamatergic input from cortex, dopaminergic input from SNc; (2) Output nuclei - internal globus pallidus (GPi) and substantia nigra pars reticulata (SNr) project to thalamus; (3) Intrinsic nuclei - external globus pallidus (GPe), subthalamic nucleus (STN); (4) Circuits - direct pathway (striatum→GPi/SNr: D1 receptors, excitatory), indirect pathway (striatum→GPe→STN→GPi/SNr: D2 receptors, inhibitory), hyperdirect pathway (cortex→STN); (5) Functions - action selection, movement initiation, motor learning (habit formation), eye movements, cognition, emotional behavior; (6) Pathology - Parkinson\'s disease (dopamine depletion), Huntington\'s disease (striatal degeneration), dystonia, Tourette syndrome.`,
      },
    },
    {
      title: 'Limbic System',
      content: {
        patient: `The limbic system is a group of structures deep in the brain involved in emotions, memory, and motivation. Key parts include the hippocampus (memory formation), amygdala (fear and emotions), and cingulate gyrus. The hypothalamus connects emotions to body responses.`,
        intermediate: `The limbic system includes cortical and subcortical structures: hippocampal formation (hippocampus, dentate gyrus, subiculum) for memory consolidation, amygdala (basolateral, central nuclei) for fear processing and emotional learning, cingulate gyrus (emotional and cognitive integration), and parahippocampal gyrus. The hypothalamus, while technically part of the diencephalon, is functionally connected. These structures form the Papez circuit for memory and emotional processing.`,
        professional: `Limbic system anatomy: (1) Hippocampal formation - dentate gyrus, hippocampus proper (CA1-CA4 fields), subiculum; three-layered allocortex; major input from entorhinal cortex via perforant path; outputs to fornix, mammillary bodies; (2) Amygdala - basolateral complex (lateral, basal, accessory basal nuclei: cortical input, fear learning), centromedial complex (central, medial nuclei: output to hypothalamus and brainstem), cortical nuclei; extended amygdala (bed nucleus of stria terminalis); (3) Cingulate cortex - anterior (emotional/motor), posterior (cognitive), retrosplenial; connections with prefrontal, parietal, temporal cortices; (4) Other structures - septal nuclei, mammillary bodies, anterior thalamic nuclei, entorhinal cortex, piriform cortex, fornix, stria terminalis; (5) Papez circuit - hippocampus→fornix→mammillary bodies→anterior thalamus→cingulate→hippocampus; (6) Functions - episodic memory, emotional processing, reward/motivation, olfaction, autonomic regulation.`,
      },
    },
  ],
  anatomyLinks: [
    { structureId: 'cerebrum', structureName: 'Cerebrum', linkText: 'Cerebrum', relevance: 'Largest brain region' },
    { structureId: 'cerebellum', structureName: 'Cerebellum', linkText: 'Cerebellum', relevance: 'Movement coordination' },
    { structureId: 'brainstem', structureName: 'Brainstem', linkText: 'Brainstem', relevance: 'Connection to spinal cord' },
    { structureId: 'thalamus', structureName: 'Thalamus', linkText: 'Thalamus', relevance: 'Sensory relay' },
  ],
  references: [
    {
      referenceId: 'openstax-ap-14',
      type: 'textbook',
      title: 'Anatomy and Physiology - Chapter 14: The Brain and Cranial Nerves',
      authors: 'Betts JG, et al.',
      source: 'OpenStax',
      year: 2021,
      url: 'https://openstax.org/books/anatomy-and-physiology/pages/14-introduction',
      citation: 'Betts JG, et al. Anatomy and Physiology. Chapter 14: The Brain and Cranial Nerves. OpenStax; 2021.',
    },
  ],
  relatedEntries: [
    { entryId: 'cerebrum', entryType: 'anatomy', name: 'Cerebrum', relationship: 'part-of' },
    { entryId: 'cerebellum', entryType: 'anatomy', name: 'Cerebellum', relationship: 'part-of' },
    { entryId: 'brainstem', entryType: 'anatomy', name: 'Brainstem', relationship: 'part-of' },
    { entryId: 'neuron', entryType: 'anatomy', name: 'Neuron', relationship: 'see-also' },
  ],
  searchMetadata: {
    primaryKeywords: ['brain', 'cerebrum', 'cerebral cortex', 'basal ganglia', 'limbic system', 'brain anatomy'],
    tags: ['neuroscience', 'anatomy', 'brain', 'central-nervous-system'],
    synonyms: ['encephalon', 'cerebrum', 'brain structure'],
  },
};

/**
 * Cerebrum Entry
 */
export const cerebrumEntry: EncyclopediaEntry = {
  entryId: 'cerebrum',
  name: 'Cerebrum',
  nameEs: 'Cerebro (Hemisferios Cerebrales)',
  entryType: 'anatomy',
  category: 'neurologic',
  summary: 'The largest part of the brain, divided into two hemispheres, responsible for higher brain functions including thought, action, and sensory processing.',
  overview: {
    patient: 'The cerebrum is the large, folded upper part of the brain that you picture when you think of a brain. It\'s divided into left and right halves (hemispheres) that are connected by the corpus callosum. It handles thinking, memory, voluntary movement, and processing of sensory information like touch, vision, and hearing.',
    intermediate: 'The cerebrum consists of two cerebral hemispheres connected by the corpus callosum. Each hemisphere contains the cerebral cortex (convoluted surface with gyri and sulci), underlying white matter, and deep gray matter structures (basal ganglia). It is divided into four lobes (frontal, parietal, temporal, occipital) based on superficial anatomy. The cerebrum is responsible for higher cognitive functions, voluntary motor control, and conscious sensory perception.',
    professional: 'The cerebrum (telencephalon) comprises paired cerebral hemispheres with extensive cortical surfaces (approximately 2200 cm²) achieved through gyrencephalic folding. It includes the six-layered neocortex, allocortical regions (hippocampus, olfactory cortex), white matter fiber systems, and subcortical nuclei. Hemispheric specialization includes language dominance (usually left), spatial processing (usually right), and contralateral motor/sensory control.',
  },
  content: [
    {
      title: 'Cerebral Hemispheres',
      content: {
        patient: `The cerebrum has two halves: the left and right cerebral hemispheres. They look like mirror images but have some specialized functions. In most people, the left hemisphere controls language and the right side of the body, while the right hemisphere handles spatial skills and the left side of the body. They're connected by a thick bundle of fibers called the corpus callosum that lets them communicate.`,
        intermediate: `The cerebral hemispheres are separated by the longitudinal fissure but connected by commissural fibers, primarily the corpus callosum (200-250 million axons). Each hemisphere receives sensory input from and controls movement of the contralateral body side. The left hemisphere is typically dominant for language (Broca's and Wernicke's areas) and analytic processing. The right hemisphere is typically dominant for visuospatial processing, face recognition, and emotional prosody.`,
        professional: `Hemispheric organization: (1) Commissures - corpus callosum (rostrum, genu, trunk/body, splenium), anterior commissure (temporal lobe/amygdala connections), posterior commissure, hippocampal commissure; (2) Contralateral organization - decussation of motor and sensory pathways at pyramidal decussation (corticospinal), medial lemniscus; (3) Lateralization - left: language (95% right-handers, 70% left-handers), praxis, logical/analytic processing; right: visuospatial attention, face processing, emotional prosody, holistic processing; (4) Planum temporale - left usually larger (language); (5) Asymmetries - frontal operculum, Sylvian fissure angle; (6) Split-brain studies - corpus callosum sectioning reveals hemispheric independence.`,
      },
    },
    {
      title: 'Lobes of the Cerebrum',
      content: {
        patient: `Each hemisphere is divided into four lobes named after the skull bones that cover them. The frontal lobe (behind the forehead) handles thinking, planning, and voluntary movement. The parietal lobe (top/back) processes touch and spatial awareness. The temporal lobe (side) handles hearing, memory, and language. The occipital lobe (back) processes vision.`,
        intermediate: `The frontal lobe extends from the frontal pole to the central sulcus, containing the primary motor cortex, premotor areas, and prefrontal cortex. The parietal lobe lies between the central sulcus and parieto-occipital sulcus, containing the somatosensory cortex and posterior parietal association areas. The temporal lobe is inferior to the lateral sulcus (Sylvian fissure), containing auditory cortex and medial temporal memory structures. The occipital lobe at the posterior pole contains the visual cortex.`,
        professional: `Lobar anatomy and boundaries: (1) Frontal lobe - bounded posteriorly by central sulcus, inferiorly by lateral sulcus; contains: primary motor cortex (area 4, precentral gyrus), premotor cortex (area 6), supplementary motor area, frontal eye fields (area 8), prefrontal cortex (dorsolateral PFC, ventrolateral PFC, orbitofrontal, medial PFC), Broca's area (44, 45); (2) Parietal lobe - bounded anteriorly by central sulcus, posteriorly by parieto-occipital sulcus; contains: postcentral gyrus (areas 3,1,2), superior parietal lobule, inferior parietal lobule (supramarginal gyrus, angular gyrus); (3) Temporal lobe - bounded superiorly by lateral sulcus; contains: superior temporal gyrus (auditory), middle temporal gyrus, inferior temporal gyrus, fusiform gyrus, parahippocampal gyrus, uncus; (4) Occipital lobe - bounded anteriorly by parieto-occipital sulcus; contains: calcarine sulcus (V1), cuneus, lingual gyrus; (5) Insula - cortex deep within lateral sulcus, not visible externally; gustatory cortex, visceral sensation, pain.`,
      },
    },
  ],
  anatomyLinks: [
    { structureId: 'frontal-lobe', structureName: 'Frontal Lobe', linkText: 'Frontal Lobe', relevance: 'Motor and executive function' },
    { structureId: 'parietal-lobe', structureName: 'Parietal Lobe', linkText: 'Parietal Lobe', relevance: 'Sensory and spatial processing' },
    { structureId: 'temporal-lobe', structureName: 'Temporal Lobe', linkText: 'Temporal Lobe', relevance: 'Auditory and memory' },
    { structureId: 'occipital-lobe', structureName: 'Occipital Lobe', linkText: 'Occipital Lobe', relevance: 'Visual processing' },
  ],
  references: [
    {
      referenceId: 'openstax-ap-14-2',
      type: 'textbook',
      title: 'Anatomy and Physiology - 14.2 The Central Nervous System',
      authors: 'Betts JG, et al.',
      source: 'OpenStax',
      year: 2021,
      citation: 'Betts JG, et al. Anatomy and Physiology. 14.2 The Central Nervous System. OpenStax; 2021.',
    },
  ],
  relatedEntries: [
    { entryId: 'brain', entryType: 'anatomy', name: 'Brain', relationship: 'part-of' },
    { entryId: 'cerebral-cortex', entryType: 'anatomy', name: 'Cerebral Cortex', relationship: 'part-of' },
    { entryId: 'corpus-callosum', entryType: 'anatomy', name: 'Corpus Callosum', relationship: 'part-of' },
  ],
  searchMetadata: {
    primaryKeywords: ['cerebrum', 'cerebral hemispheres', 'brain lobes', 'frontal lobe', 'parietal lobe'],
    tags: ['neuroscience', 'anatomy', 'brain', 'cerebrum'],
    synonyms: ['cerebral hemispheres', 'telencephalon', 'cerebral cortex'],
  },
};

// Export all entries
export const brainAnatomyEntries: EncyclopediaEntry[] = [
  brainEntry,
  cerebrumEntry,
];
