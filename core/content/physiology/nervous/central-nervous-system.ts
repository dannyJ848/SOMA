/**
 * Central Nervous System - Brain Regions and Functions
 *
 * Comprehensive coverage of CNS organization, brain regions, functional
 * neuroanatomy, and clinical correlations for neurological assessment.
 */

import { EducationalContent } from '../../types';

export const centralNervousSystemContent: EducationalContent = {
  id: 'physiology-central-nervous-system',
  type: 'system',
  name: 'Central Nervous System',
  alternateNames: ['CNS', 'Brain and Spinal Cord', 'Neuroaxis'],

  levels: {
    1: {
      level: 1,
      summary: 'The central nervous system is your brain and spinal cord - the command center that controls everything your body does.',
      explanation: `Your central nervous system (CNS) is like the boss of your entire body. It includes two main parts:

**The Brain:**
Your brain sits inside your skull and is in charge of:
- **Thinking and learning**: Math problems, remembering your friend's name
- **Feeling emotions**: Happiness, sadness, fear
- **Moving your body**: Walking, writing, dancing
- **Keeping you alive**: Breathing, heartbeat (you don't even have to think about these!)

**Parts of the Brain:**
- **Cerebrum** (the big wrinkly part): Thinking and movement
- **Cerebellum** (the "little brain" at the back): Balance and coordination
- **Brainstem**: Connects brain to spinal cord, controls breathing and heartbeat

**The Spinal Cord:**
Your spinal cord is like a superhighway for messages:
- Runs from your brain down through your backbone
- Carries messages between your brain and body
- Protected by your vertebrae (backbone bones)

**How They Work Together:**
1. You see a ball coming toward you (eyes send message to brain)
2. Brain decides to catch it
3. Brain sends message down spinal cord
4. Message reaches your arms and hands
5. You catch the ball!

All of this happens in less than a second!`,
      keyTerms: [
        { term: 'central nervous system', definition: 'Your brain and spinal cord - the main control center of your body' },
        { term: 'brain', definition: 'The organ inside your skull that controls thinking, feeling, and body functions' },
        { term: 'spinal cord', definition: 'A long bundle of nerves running from your brain down your back' },
        { term: 'cerebrum', definition: 'The large, wrinkly top part of the brain that handles thinking' },
        { term: 'cerebellum', definition: 'The "little brain" at the back that helps with balance and coordination' },
      ],
      analogies: [
        'Your brain is like the CEO of a company, making decisions and giving orders to all departments (body parts).',
        'The spinal cord is like a major highway connecting the capital city (brain) to all the smaller towns (body parts).',
      ],
      examples: [
        'When you learn to ride a bike, your cerebellum helps you balance, while your cerebrum helps you remember how to do it.',
        'Your brainstem is why you keep breathing while you sleep - it works automatically!',
      ],
    },
    2: {
      level: 2,
      summary: 'The CNS consists of the brain (cerebrum, cerebellum, brainstem) and spinal cord, organized into gray matter (cell bodies) and white matter (axon tracts), processing sensory information and generating motor commands.',
      explanation: `**Organization of the CNS:**

The brain and spinal cord are organized into:
- **Gray matter**: Contains neuron cell bodies (processing)
- **White matter**: Contains myelinated axons (connections)

**Major Brain Regions:**

**1. Cerebrum (Cerebral Hemispheres):**

*Frontal Lobe:*
- Motor cortex: Controls voluntary movement
- Prefrontal cortex: Planning, decision-making, personality
- Broca's area: Speech production

*Parietal Lobe:*
- Somatosensory cortex: Touch, temperature, pain
- Spatial awareness and navigation

*Temporal Lobe:*
- Auditory cortex: Hearing
- Wernicke's area: Language comprehension
- Hippocampus: Memory formation

*Occipital Lobe:*
- Visual cortex: Processes vision

**2. Diencephalon (Between brain):**
- Thalamus: Relay station for sensory information
- Hypothalamus: Homeostasis, hormones, body temperature

**3. Brainstem:**
- Midbrain: Eye movements, alertness
- Pons: Connects cerebrum to cerebellum, breathing
- Medulla: Heart rate, breathing, blood pressure

**4. Cerebellum:**
- Coordination of movement
- Balance and posture
- Motor learning (riding a bike)

**5. Spinal Cord:**
- 31 segments (8 cervical, 12 thoracic, 5 lumbar, 5 sacral, 1 coccygeal)
- Carries ascending (sensory) and descending (motor) tracts
- Contains reflexes (knee jerk)

**Blood Supply:**
- Internal carotid arteries (anterior circulation)
- Vertebral/basilar arteries (posterior circulation)
- Circle of Willis: Connection between anterior and posterior

**Protection:**
- Skull and vertebrae (bone)
- Meninges (three membrane layers)
- Cerebrospinal fluid (CSF): Cushions and nourishes`,
      keyTerms: [
        { term: 'gray matter', definition: 'Brain tissue containing neuron cell bodies, appears gray' },
        { term: 'white matter', definition: 'Brain tissue containing myelinated axons, appears white' },
        { term: 'thalamus', definition: 'Brain structure that relays sensory information to the cortex', pronunciation: 'THAL-uh-mus' },
        { term: 'hypothalamus', definition: 'Brain structure controlling hormones, temperature, hunger, thirst', pronunciation: 'hy-poh-THAL-uh-mus' },
        { term: 'meninges', definition: 'Three protective membrane layers covering the brain and spinal cord', pronunciation: 'meh-NIN-jeez' },
        { term: 'cerebrospinal fluid', definition: 'Clear fluid that cushions and nourishes the brain and spinal cord' },
      ],
      analogies: [
        'The thalamus is like a mail sorting center - it receives all incoming sensory mail and sends it to the right department (cortical area).',
        'Gray matter is like the offices where work gets done, while white matter is like the hallways and cables connecting them.',
      ],
    },
    3: {
      level: 3,
      summary: 'The CNS exhibits hierarchical organization with cortical-subcortical loops, parallel processing streams, and specialized functional networks, connected by white matter tracts and modulated by neurotransmitter systems.',
      explanation: `## Cerebral Cortex Organization

**Cytoarchitecture:**
- Neocortex: 6 layers with distinct cell types
- Allocortex: 3-4 layers (hippocampus, olfactory cortex)
- Brodmann areas: 52 regions based on cellular architecture

**Functional Organization:**

*Primary Cortices:*
- Motor (M1, Area 4): Precentral gyrus
- Somatosensory (S1, Areas 3,1,2): Postcentral gyrus
- Visual (V1, Area 17): Calcarine sulcus
- Auditory (A1, Areas 41,42): Superior temporal gyrus

*Association Cortices:*
- Unimodal: Process single sensory modality
- Heteromodal: Integrate multiple modalities
- Prefrontal: Executive function, working memory
- Posterior parietal: Visuospatial processing

## Subcortical Structures

**Basal Ganglia:**
- Caudate + Putamen = Striatum (input)
- Globus pallidus (internal/external)
- Substantia nigra (pars compacta/reticulata)
- Subthalamic nucleus

*Function:* Movement selection, habit learning, reward

*Circuits:*
- Direct pathway: Facilitates movement (D1 receptors)
- Indirect pathway: Inhibits movement (D2 receptors)

**Thalamus:**

| Nucleus | Input | Output | Function |
|---------|-------|--------|----------|
| VPL/VPM | Somatosensory | S1 | Touch, pain |
| LGN | Retina | V1 | Vision |
| MGN | Inferior colliculus | A1 | Audition |
| VA/VL | Basal ganglia, cerebellum | Motor cortex | Movement |
| Pulvinar | Association cortices | Parietal, temporal | Attention |
| MD | Prefrontal, limbic | Prefrontal | Executive |

**Limbic System:**
- Hippocampus: Episodic memory, spatial navigation
- Amygdala: Emotional processing, fear conditioning
- Cingulate cortex: Error monitoring, emotional regulation
- Mammillary bodies: Memory circuits (Papez circuit)

## Brainstem

**Midbrain:**
- Superior colliculus: Visual reflexes, saccades
- Inferior colliculus: Auditory processing
- Red nucleus: Motor coordination
- Substantia nigra: Dopamine production
- Periaqueductal gray: Pain modulation

**Pons:**
- Pontine nuclei: Corticopontocerebellar relay
- Cranial nerve nuclei: V, VI, VII, VIII
- Locus coeruleus: Norepinephrine (arousal)
- Respiratory centers

**Medulla:**
- Pyramids: Corticospinal tract decussation
- Inferior olive: Cerebellar learning
- Cranial nerve nuclei: IX, X, XI, XII
- Cardiovascular and respiratory centers

## Spinal Cord

**Gray Matter Organization:**
- Dorsal horn (laminae I-VI): Sensory processing
- Intermediate zone (lamina VII): Interneurons
- Ventral horn (laminae VIII-IX): Motor neurons
- Lateral horn (T1-L2): Sympathetic preganglionic

**Major Tracts:**

*Ascending (Sensory):*
- Dorsal columns: Fine touch, proprioception → Medial lemniscus
- Spinothalamic: Pain, temperature → Thalamus
- Spinocerebellar: Proprioception → Cerebellum

*Descending (Motor):*
- Corticospinal: Voluntary movement (lateral = limbs)
- Rubrospinal: Flexor tone
- Vestibulospinal: Posture, balance
- Reticulospinal: Posture, locomotion

## White Matter Connectivity

**Association Fibers:** Connect regions within hemisphere
- Arcuate fasciculus: Broca's ↔ Wernicke's
- Superior longitudinal fasciculus
- Cingulum bundle

**Commissural Fibers:** Connect hemispheres
- Corpus callosum
- Anterior commissure

**Projection Fibers:** Connect cortex to subcortical
- Internal capsule
- Corona radiata`,
      keyTerms: [
        { term: 'basal ganglia', definition: 'Subcortical nuclei involved in movement selection, habit learning, and reward processing' },
        { term: 'Brodmann areas', definition: 'Numbered cortical regions defined by cytoarchitecture (cell arrangement)' },
        { term: 'internal capsule', definition: 'Major white matter structure carrying motor and sensory fibers between cortex and brainstem/spinal cord' },
        { term: 'Papez circuit', definition: 'Limbic circuit connecting hippocampus → fornix → mammillary body → thalamus → cingulate → hippocampus' },
        { term: 'corticospinal tract', definition: 'Main motor pathway from motor cortex to spinal cord motor neurons' },
        { term: 'medial lemniscus', definition: 'Ascending pathway carrying fine touch and proprioception from dorsal column nuclei to thalamus' },
      ],
      clinicalNotes: 'Internal capsule strokes cause contralateral hemiparesis (motor) and hemianesthesia (sensory). Basal ganglia lesions: Parkinson\'s (substantia nigra), Huntington\'s (caudate). Thalamic stroke can cause sensory loss or pain (Dejerine-Roussy syndrome). Medial medullary syndrome: contralateral weakness, ipsilateral tongue weakness.',
    },
    4: {
      level: 4,
      summary: 'The CNS integrates sensory, motor, and cognitive functions through hierarchically organized processing streams, parallel cortico-subcortical circuits, and distributed networks, with specific vulnerability patterns in neurological disease.',
      explanation: `## Functional Networks

**Resting State Networks (fMRI):**

| Network | Key Regions | Function | Disease Association |
|---------|-------------|----------|-------------------|
| Default Mode (DMN) | mPFC, PCC, angular gyrus | Self-referential, mind-wandering | AD (early dysfunction) |
| Salience | Anterior insula, dACC | Detecting relevance | FTD, anxiety |
| Central Executive | DLPFC, posterior parietal | Working memory, attention | Schizophrenia |
| Sensorimotor | Pre/postcentral gyri | Motor execution | Parkinson's |
| Visual | Occipital, ventral temporal | Visual processing | PCA |
| Language | IFG, STG, angular gyrus | Language | Aphasia syndromes |

**Network Dynamics:**
- Networks anti-correlate (DMN vs task-positive)
- Flexibility predicts cognitive function
- Disruption in psychiatric and neurological disease

## Cortico-Basal Ganglia-Thalamic Loops

**Motor Loop:**
\`\`\`
Motor cortex → Putamen → GPi/SNr → VL thalamus → Motor cortex
\`\`\`
- Dysfunction: Parkinson's (bradykinesia), Huntington's (chorea)

**Associative Loop:**
\`\`\`
DLPFC → Caudate → GPi/SNr → VA/MD thalamus → DLPFC
\`\`\`
- Dysfunction: Executive dysfunction, OCD

**Limbic Loop:**
\`\`\`
OFC/ACC → Ventral striatum → VP → MD thalamus → OFC/ACC
\`\`\`
- Dysfunction: Addiction, depression, apathy

## Cerebellar Circuits

**Cerebellar Architecture:**
- Cortex: Molecular, Purkinje, granular layers
- Deep nuclei: Dentate, interposed, fastigial
- Climbing fibers (inferior olive): Error signal
- Mossy fibers (pontine, spinal): Context
- Parallel fibers: Granule cell axons

**Functional Zones:**
- Vestibulocerebellum: Balance (flocculonodular lobe)
- Spinocerebellum: Posture, gait (vermis, intermediate)
- Cerebrocerebellum: Planning, cognition (lateral hemispheres)

**Clinical Signs:**
- Ataxia: Incoordination, dysmetria
- Intention tremor: Worse approaching target
- Dysarthria: Scanning speech
- Nystagmus: Cerebellar eye signs

## Vascular Anatomy and Stroke Syndromes

**Anterior Circulation (Carotid):**

*ACA Territory:*
- Medial frontal and parietal
- Leg > arm weakness
- Abulia (bilateral ACA)

*MCA Territory:*
- Lateral hemisphere
- Face/arm > leg weakness
- Aphasia (dominant), neglect (non-dominant)
- Gaze preference toward lesion

**Posterior Circulation (Vertebrobasilar):**

*PCA Territory:*
- Occipital, medial temporal
- Hemianopia with macular sparing
- Memory impairment (bilateral)
- Alexia without agraphia (left PCA + splenium)

*Basilar Artery:*
- Locked-in syndrome (ventral pons)
- Top of basilar: Coma, eye movement disorders

**Brainstem Stroke Syndromes:**

| Syndrome | Location | Features |
|----------|----------|----------|
| Weber | Midbrain | CN III + contralateral hemiparesis |
| Wallenberg | Lateral medulla | Ipsi: face sensation, ataxia, Horner; Contra: body sensation |
| Medial medullary | Medial medulla | CN XII + contralateral hemiparesis |

## Spinal Cord Syndromes

**Complete Transection:**
- Loss of all function below level
- Spinal shock initially (flaccid)
- Later: UMN signs (spastic)

**Hemisection (Brown-Séquard):**
- Ipsilateral: Weakness, dorsal column loss
- Contralateral: Spinothalamic (pain/temp) loss

**Central Cord:**
- Arms > legs weakness ("cape" distribution)
- Cervical hyperextension injury
- Affects crossing spinothalamic fibers

**Anterior Cord:**
- Bilateral weakness
- Pain/temperature loss
- Preserved dorsal columns (proprioception)
- Often vascular (anterior spinal artery)

**Posterior Cord (rare):**
- Proprioception/vibration loss
- Sensory ataxia
- Usually B12 deficiency or tabes dorsalis`,
      keyTerms: [
        { term: 'default mode network', definition: 'Brain network active during rest and self-referential thought, disrupted early in Alzheimer\'s' },
        { term: 'Brown-Séquard syndrome', definition: 'Spinal cord hemisection causing ipsilateral motor/proprioception loss and contralateral pain/temperature loss' },
        { term: 'locked-in syndrome', definition: 'Ventral pontine lesion causing quadriplegia and anarthria with preserved consciousness and vertical eye movement' },
        { term: 'Wallenberg syndrome', definition: 'Lateral medullary syndrome from PICA stroke with characteristic crossed sensory findings' },
      ],
      clinicalNotes: 'Localization approach: 1) Cortical signs (aphasia, neglect, visual field defect) → cortical lesion. 2) Motor + sensory with no cortical signs → subcortical (internal capsule). 3) Crossed findings (ipsilateral CN + contralateral body) → brainstem. 4) Spinal level with sensory/motor below → cord lesion.',
    },
    5: {
      level: 5,
      summary: 'The CNS exhibits complex network organization with hierarchical and parallel processing, specific patterns of vulnerability in neurodegenerative and vascular disease, and neuroplasticity mechanisms relevant for rehabilitation and emerging interventions.',
      explanation: `## Advanced Network Neuroscience

**Graph Theory Metrics:**
- Hub regions: High connectivity (precuneus, posterior cingulate)
- Rich club: Densely interconnected hubs
- Modularity: Segregation into functional communities
- Small-world: Balance of integration and segregation

**Hub Vulnerability Hypothesis:**
- Highly connected hubs are metabolically expensive
- Preferential accumulation of pathology (Aβ, tau)
- Explains Alzheimer's preferential DMN involvement
- Network degeneration hypothesis of neurodegeneration

**Connectome Approaches:**
- Structural connectome (DTI tractography)
- Functional connectome (resting fMRI correlations)
- Individual variability predicts cognition
- Lesion-symptom mapping

## Neurodegeneration Patterns

**Protein Propagation:**

| Protein | Disease | Spread Pattern | Staging |
|---------|---------|----------------|---------|
| Aβ | Alzheimer's | Isocortex → allocortex | Thal phases |
| Tau | Alzheimer's | Entorhinal → limbic → neocortex | Braak stages |
| α-synuclein | Parkinson's/DLB | Brainstem → limbic → cortex | Braak PD stages |
| TDP-43 | ALS/FTD | Motor cortex → brainstem → frontal | Brettschneider |
| Tau | PSP/CBD | Subcortical → frontal | Variable |

**Network-Based Spread:**
- Prion-like propagation along connections
- Trans-synaptic spread
- Selective neuronal vulnerability
- Predicts disease progression patterns

## Clinical Neurophysiology

**EEG Correlates:**

*Normal Rhythms:*
- Alpha (8-13 Hz): Posterior, relaxed wakefulness
- Beta (>13 Hz): Frontal, active thinking
- Theta (4-8 Hz): Drowsiness, temporal regions
- Delta (<4 Hz): Deep sleep, pathological if awake

*Pathological Patterns:*
- Focal slowing: Structural lesion
- Generalized slowing: Encephalopathy
- Periodic patterns: CJD (PSWC), HSE (PLEDs)
- Epileptiform: Spikes, sharp waves, spike-wave

**Evoked Potentials:**

| Type | Generator | Clinical Use |
|------|-----------|--------------|
| VEP | V1 | Optic neuritis, MS |
| BAEP | Brainstem nuclei | Acoustic neuroma, brainstem lesion |
| SSEP | Dorsal columns | Cord injury, intraoperative monitoring |
| MEP | Motor cortex → cord | Intraoperative motor monitoring |

## Neuroplasticity

**Mechanisms:**
- Synaptic plasticity: LTP, LTD
- Structural plasticity: Spine growth, axon sprouting
- Neurogenesis: Limited in adult (hippocampus, SVZ)
- Representational plasticity: Map reorganization

**Rehabilitation Principles:**
- Use-dependent plasticity: Intensive practice
- Task-specific training: Specificity matters
- Timing: Early windows may be critical
- Enrichment: Cognitive and motor stimulation

**Constraint-Induced Movement Therapy:**
- Overcome learned non-use
- Intensive practice with affected limb
- Constraint of unaffected limb
- Evidence in stroke rehabilitation

## Emerging Interventions

**Non-Invasive Brain Stimulation:**

*Transcranial Magnetic Stimulation (TMS):*
- Single-pulse: Diagnostic (motor threshold, central conduction)
- Repetitive TMS: Therapeutic (depression, migraine)
- High-frequency (>5 Hz): Generally excitatory
- Low-frequency (≤1 Hz): Generally inhibitory

*Transcranial Direct Current Stimulation (tDCS):*
- Weak DC current (1-2 mA)
- Anodal: Generally excitatory
- Cathodal: Generally inhibitory
- Combined with rehabilitation

**Deep Brain Stimulation:**

| Target | Indication |
|--------|------------|
| STN | Parkinson's disease |
| GPi | Parkinson's, dystonia |
| VIM | Essential tremor |
| Anterior thalamus | Epilepsy |
| SCG (Brodmann 25) | Depression (investigational) |

**Brain-Computer Interfaces:**
- Motor cortex decoding for paralysis
- Cognitive/communication interfaces
- Closed-loop stimulation (epilepsy)

## Precision Neurology

**Biomarkers:**

*CSF:*
- Aβ42: Low in Alzheimer's (sequestered in plaques)
- Tau/p-tau: Elevated in neurodegeneration
- NfL: Axonal damage marker (ALS, MS, stroke)
- α-synuclein RT-QuIC: Synucleinopathies

*Blood:*
- Plasma Aβ42/40 ratio: AD screening
- Plasma p-tau217: AD-specific tau
- NfL: Neurodegeneration marker

*Imaging:*
- Amyloid PET: Aβ plaques
- Tau PET: Neurofibrillary tangles
- SV2A PET: Synaptic density

**Genetic Stratification:**
- APOE4: AD risk (testing implications)
- LRRK2, GBA: PD risk and therapy targets
- C9orf72: ALS/FTD diagnosis
- HTT CAG repeats: Huntington's diagnosis

**Therapeutic Implications:**
- Anti-amyloid therapies: Lecanemab (CLARITY-AD)
- Antisense oligonucleotides: SMA (nusinersen), HTT (investigational)
- Gene therapy: AADC deficiency, SMA
- Precision dosing: CYP pharmacogenomics`,
      keyTerms: [
        { term: 'rich club', definition: 'Densely interconnected hub regions in the brain network that are preferentially affected in neurodegeneration' },
        { term: 'Braak staging', definition: 'System describing stereotyped progression of tau pathology through brain regions in Alzheimer\'s disease' },
        { term: 'neurofilament light chain', definition: 'Blood/CSF biomarker of axonal damage used in multiple neurological conditions' },
        { term: 'prion-like spread', definition: 'Concept that misfolded proteins spread along neural connections similar to prions' },
      ],
      clinicalNotes: `Practical approach to CNS localization:
1. Is it CNS or PNS? (UMN vs LMN signs)
2. If CNS: Cortical vs subcortical vs brainstem vs spinal?
3. Cortical: Which lobe(s)? (Aphasia=dominant temporal-frontal; Neglect=non-dominant parietal)
4. Brainstem: Level? (Eye movements=midbrain/pons; Swallowing=medulla)
5. Spinal: Level? (Motor level, sensory level, pattern)

Emerging paradigm: Network-based localization complements lesion localization. Symptoms may reflect disconnection of nodes, not just local damage.

Key transitions in diagnosis: From syndrome-based → biomarker-defined disease (e.g., AT(N) framework in AD). Impacts trial enrollment and future clinical practice.`,
    },
  },

  media: [
    {
      id: 'brain-regions-3d',
      type: '3d-model',
      filename: 'brain_regions.glb',
      title: 'Interactive Brain Regions',
      description: '3D model with selectable lobes, deep structures, and brainstem',
    },
    {
      id: 'vascular-territories',
      type: 'diagram',
      filename: 'vascular_territories.svg',
      title: 'Cerebral Vascular Territories',
      description: 'ACA, MCA, PCA territories with watershed zones',
    },
    {
      id: 'spinal-cord-tracts',
      type: 'diagram',
      filename: 'spinal_cord_tracts.svg',
      title: 'Spinal Cord Tract Organization',
      description: 'Cross-section showing ascending and descending pathways',
    },
  ],

  citations: [
    {
      id: 'blumenfeld-neuroanatomy',
      type: 'textbook',
      title: 'Neuroanatomy through Clinical Cases',
      authors: ['Blumenfeld H'],
      source: 'Sinauer Associates, 3rd Edition',
    },
    {
      id: 'brazis-localization',
      type: 'textbook',
      title: 'Localization in Clinical Neurology',
      authors: ['Brazis PW', 'Masdeu JC', 'Biller J'],
      source: 'Lippincott Williams & Wilkins, 8th Edition',
    },
  ],

  crossReferences: [
    { targetId: 'anatomy-cerebral-cortex', targetType: 'structure', relationship: 'related', label: 'Cerebral Cortex Anatomy' },
    { targetId: 'physiology-peripheral-nervous-system', targetType: 'system', relationship: 'related', label: 'Peripheral Nervous System' },
    { targetId: 'condition-stroke', targetType: 'condition', relationship: 'see-also', label: 'Stroke' },
    { targetId: 'physiology-motor-pathways', targetType: 'pathway', relationship: 'see-also', label: 'Motor Pathways' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['anatomy', 'physiology', 'neuroanatomy', 'neurology'],
    keywords: ['brain', 'spinal cord', 'stroke', 'localization', 'networks'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'surgery'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export default centralNervousSystemContent;
