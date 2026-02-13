/**
 * Thalamus and Hypothalamus - Comprehensive Anatomy Content
 *
 * Complete coverage of diencephalic structures including all thalamic nuclei,
 * hypothalamic regions, and their functions.
 */

import { EducationalContent } from '../../types';

export const thalamusContent: EducationalContent = {
  id: 'anatomy-thalamus',
  type: 'structure',
  name: 'Thalamus',
  alternateNames: ['Dorsal thalamus'],
  fmaId: 'FMA:62007',

  levels: {
    1: {
      level: 1,
      summary: 'The thalamus is like a relay station in the middle of your brain that sends sensory information to the right places.',
      explanation: `The thalamus sits in the middle of your brain, and almost all information going to your thinking brain passes through it.

Think of the thalamus as a mail sorting center:
- **Receives information**: It gets messages from your eyes, ears, skin, and other parts of your body
- **Sorts information**: It figures out what kind of information it is
- **Sends it to the right place**: It sends each type of information to the correct part of your brain

For example:
- Visual information from your eyes goes through the thalamus to the seeing part of your brain
- Sound information goes through to the hearing part
- Touch information goes to the feeling part

The only sense that doesn't go through the thalamus is smell!`,
      keyTerms: [
        { term: 'thalamus', definition: 'A structure in the middle of the brain that relays sensory information' },
        { term: 'relay', definition: 'To receive and pass on information' },
        { term: 'sensory', definition: 'Related to the senses like seeing, hearing, and touching' },
      ],
      analogies: [
        'The thalamus is like a telephone switchboard that connects callers to the right person.',
        'It\'s like an airport hub where all flights must connect before reaching their final destination.',
      ],
    },
    2: {
      level: 2,
      summary: 'The thalamus is a bilateral diencephalic structure containing numerous nuclei that relay sensory, motor, and limbic information to the cerebral cortex.',
      explanation: `The thalamus is an egg-shaped structure on either side of the third ventricle. It processes and relays almost all information going to the cortex.

**Main Thalamic Nuclei and Functions:**

**Sensory Relay Nuclei:**
- *Lateral Geniculate Nucleus (LGN)*: Vision → Occipital cortex
- *Medial Geniculate Nucleus (MGN)*: Hearing → Temporal cortex
- *Ventral Posterolateral (VPL)*: Body sensation → Parietal cortex
- *Ventral Posteromedial (VPM)*: Face sensation → Parietal cortex

**Motor Relay Nuclei:**
- *Ventral Lateral (VL)*: Cerebellum, basal ganglia → Motor cortex
- *Ventral Anterior (VA)*: Basal ganglia → Premotor cortex

**Limbic/Association Nuclei:**
- *Anterior nucleus*: Memory circuit (Papez circuit)
- *Mediodorsal (MD)*: Prefrontal cortex connections
- *Pulvinar*: Attention, visual association areas

**Other Important Nuclei:**
- *Reticular nucleus*: Regulates thalamic activity (GABAergic)
- *Intralaminar nuclei*: Arousal, consciousness

**Clinical Relevance:**
- Thalamic stroke: Sensory loss, sometimes pain (thalamic pain syndrome)
- Thalamic lesions can affect consciousness
- Deep brain stimulation target for tremor`,
      keyTerms: [
        { term: 'lateral geniculate nucleus', definition: 'Thalamic nucleus that relays visual information', pronunciation: 'jeh-NIK-yoo-lit' },
        { term: 'medial geniculate nucleus', definition: 'Thalamic nucleus that relays auditory information' },
        { term: 'ventral posterior nucleus', definition: 'Thalamic nuclei (VPL, VPM) that relay somatosensory information' },
        { term: 'pulvinar', definition: 'Large posterior thalamic nucleus involved in attention' },
      ],
    },
    3: {
      level: 3,
      summary: 'The thalamus contains functionally distinct nuclei organized into groups by internal medullary lamina, each with specific cortical and subcortical connections defining relay, association, and nonspecific functions.',
      explanation: `**Anatomical Organization:**

The internal medullary lamina divides thalamus into:
- Anterior group
- Medial group
- Lateral group (dorsal and ventral tiers)
- Posterior group (pulvinar, geniculate bodies)
- Intralaminar nuclei (within the lamina)
- Reticular nucleus (lateral shell)

**Detailed Nuclei:**

**Anterior Group:**
- Anterior nucleus: Mammillary body → Cingulate cortex (Papez circuit, memory)

**Medial Group:**
- Mediodorsal (MD): Amygdala, prefrontal → Prefrontal cortex
  - Parvocellular: Limbic connections
  - Magnocellular: Association

**Lateral Group - Ventral Tier (Relay):**
- VA: Basal ganglia → Premotor, supplementary motor
- VL:
  - VLo: Basal ganglia → SMA
  - VLc: Cerebellum → Motor cortex
- VPL: Medial lemniscus, spinothalamic → S1 (body)
- VPM: Trigeminothalamic → S1 (face)
  - VPMpc: Taste pathway

**Lateral Group - Dorsal Tier (Association):**
- Lateral dorsal (LD): Limbic associations
- Lateral posterior (LP): Parietal association areas

**Posterior Group:**
- Pulvinar: Visual association, attention
- LGN: Retina → V1 (layers 1-6 topographically organized)
- MGN: Inferior colliculus → A1 (tonotopic)

**Intralaminar Nuclei:**
- Centromedian (CM): Motor, arousal
- Parafascicular (Pf): Striatum projections
- Ascending reticular activating system

**Reticular Nucleus:**
- GABAergic shell
- Receives cortical and thalamic collaterals
- Inhibits relay nuclei
- Attentional gating`,
      keyTerms: [
        { term: 'internal medullary lamina', definition: 'Y-shaped white matter sheet dividing thalamic nuclear groups' },
        { term: 'reticular nucleus', definition: 'GABAergic thalamic shell that modulates thalamic relay' },
        { term: 'intralaminar nuclei', definition: 'Midline nuclei involved in arousal and striatal connections' },
        { term: 'Papez circuit', definition: 'Limbic circuit: hippocampus → fornix → mammillary body → anterior thalamus → cingulate' },
      ],
    },
    4: {
      level: 4,
      summary: 'The thalamus implements both feedforward relay and recurrent corticothalamic processing, with distinct first-order and higher-order circuits supporting sensory processing, attention, and consciousness.',
      explanation: `**Thalamic Circuit Types:**

**First-Order Relays:**
- Receive driver input from ascending pathways
- LGN: Retinal input
- MGN: Inferior colliculus input
- VPL/VPM: Lemniscal/spinothalamic input
- Feedforward to cortex

**Higher-Order Relays:**
- Receive driver input from layer 5 cortical pyramidal cells
- Pulvinar, MD, LP
- Cortico-thalamo-cortical circuits
- May underlie cortical communication

**Driver vs Modulator Inputs:**
- Drivers: Strong, reliable, sparse (define receptive field)
- Modulators: Weaker, numerous (gain control)
- Layer 6 corticothalamic: Modulatory feedback
- Layer 5 corticothalamic: Driver input to higher-order

**Thalamic Physiology:**

*Firing Modes:*
- Tonic mode: Regular firing, accurate relay
- Burst mode: After hyperpolarization, T-type Ca2+ channels
- Burst signals state change, may enhance detection

*Oscillations:*
- Sleep spindles (12-14 Hz): Reticular-relay loop
- Delta waves: Thalamocortical disconnection
- Alpha rhythm: Thalamic contribution

**Clinical Syndromes:**

*Thalamic Stroke:*
- Sensory: Pure sensory stroke (VPL/VPM)
- Motor: Thalamic hand (VL involvement)
- Behavioral: Apathy, anosognosia (MD, pulvinar)
- Dejerine-Roussy: Thalamic pain syndrome

*Thalamic Hemorrhage:*
- Downward eye deviation (pressure on tectal region)
- Contralateral hemiparesis (internal capsule)
- Aphasia if dominant (pulvinar connections)

*Fatal Familial Insomnia:*
- Prion disease affecting thalamus
- Progressive insomnia, dysautonomia
- Thalamic atrophy on imaging`,
      keyTerms: [
        { term: 'first-order relay', definition: 'Thalamic nuclei receiving ascending sensory input' },
        { term: 'higher-order relay', definition: 'Thalamic nuclei receiving cortical layer 5 input' },
        { term: 'Dejerine-Roussy syndrome', definition: 'Thalamic pain syndrome with contralateral burning pain' },
        { term: 'burst mode', definition: 'Thalamic firing pattern with T-type calcium channel activation' },
      ],
      clinicalNotes: 'Thalamic stroke localization: VPL/VPM = pure sensory; VL = motor involvement; MD = behavioral changes; Pulvinar = attention/neglect. Thalamic hemorrhage often extends to internal capsule causing hemiparesis. Downward gaze deviation suggests thalamic hemorrhage.',
    },
    5: {
      level: 5,
      summary: 'The thalamus is central to sensory processing, corticocortical communication, consciousness, and sleep, with clinical applications in deep brain stimulation and understanding disorders of consciousness.',
      explanation: `**Advanced Thalamic Neuroscience:**

**Theories of Thalamic Function:**

*Active Relay:*
- Not passive conduit
- Attentional modulation via reticular nucleus
- Gain control of sensory transmission

*Corticothalamic Communication:*
- Pulvinar as hub for cortical communication
- Higher-order nuclei enable cortical binding
- Disruption → Impaired consciousness

*Thalamic Gating:*
- Reticular nucleus implements selective attention
- Lateral inhibition across modalities
- Cholinergic modulation from brainstem

**Consciousness:**
- Intralaminar nuclei: Part of ascending arousal
- Thalamocortical loops: Integrated information theory (IIT)
- Disorders of consciousness: Thalamic-cortical disconnection
- Central thalamic DBS for minimally conscious state

**Clinical Applications:**

*Deep Brain Stimulation:*
- VIM (cerebellar relay): Essential tremor
- CM-Pf: Tourette syndrome, consciousness
- Anterior nucleus: Epilepsy (SANTE trial)
- Pulvinar: Consciousness disorders

*Thalamic Pain Syndrome:*
- Central post-stroke pain
- Allodynia, hyperesthesia
- Treatment: Anticonvulsants, TCA, motor cortex stimulation

*Sleep Disorders:*
- Fatal familial insomnia: PRNP mutation
- Thalamic lesions: Hypersomnolence
- Spindle abnormalities in schizophrenia

**Imaging:**
- DTI tractography: Thalamocortical connections
- fMRI: Task-related thalamic activation
- VBM: Thalamic atrophy in schizophrenia, ADHD

**Research Frontiers:**
- Pulvinar and attention
- Thalamic reticular nucleus in autism
- Matrix vs core thalamocortical systems
- Thalamic contribution to cortical hierarchies`,
      keyTerms: [
        { term: 'VIM nucleus', definition: 'Ventral intermediate nucleus, target for essential tremor DBS' },
        { term: 'fatal familial insomnia', definition: 'Prion disease causing thalamic degeneration and progressive insomnia' },
        { term: 'integrated information theory', definition: 'Consciousness theory emphasizing thalamocortical integration' },
      ],
      clinicalNotes: `Thalamus in clinical practice:
- Essential tremor: VIM DBS highly effective
- Epilepsy: Anterior thalamic DBS (SANTE study)
- Disorders of consciousness: Central thalamic DBS investigational
- Chronic pain: Motor cortex stimulation if central sensitization

Imaging: Look for thalamic atrophy in schizophrenia, MS, traumatic brain injury. Focal lesions help localize function.`,
    },
  },

  media: [
    {
      id: 'thalamus-3d',
      type: '3d-model',
      filename: 'thalamus.glb',
      title: 'Interactive 3D Thalamus',
      description: 'Rotatable model showing all major nuclear groups',
    },
    {
      id: 'thalamic-nuclei-diagram',
      type: 'diagram',
      filename: 'thalamic_nuclei.svg',
      title: 'Thalamic Nuclei Map',
      description: 'Cross-sectional view showing nuclear organization',
    },
  ],

  citations: [
    {
      id: 'sherman-guillery',
      type: 'textbook',
      title: 'Exploring the Thalamus and Its Role in Cortical Function',
      authors: ['Sherman SM', 'Guillery RW'],
      source: 'MIT Press',
    },
  ],

  crossReferences: [
    { targetId: 'anatomy-hypothalamus', targetType: 'structure', relationship: 'sibling', label: 'Hypothalamus' },
    { targetId: 'anatomy-cerebral-cortex', targetType: 'structure', relationship: 'related', label: 'Cerebral Cortex' },
    { targetId: 'physiology-sensory-pathways', targetType: 'pathway', relationship: 'see-also', label: 'Sensory Pathways' },
  ],

  tags: {
    systems: ['nervous'],
    structures: ['FMA:62007'],
    topics: ['anatomy', 'neuroanatomy', 'diencephalon'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['neurology'] },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export const hypothalamusContent: EducationalContent = {
  id: 'anatomy-hypothalamus',
  type: 'structure',
  name: 'Hypothalamus',
  alternateNames: ['Regio hypothalamica'],
  fmaId: 'FMA:62008',

  levels: {
    1: {
      level: 1,
      summary: 'The hypothalamus is a small but powerful part of your brain that controls things like hunger, thirst, body temperature, and sleep.',
      explanation: `The hypothalamus is about the size of an almond and sits at the base of your brain. Even though it's tiny, it controls many important things:

- **Hunger and thirst**: It tells you when to eat and drink
- **Body temperature**: It keeps you at the right temperature (like a thermostat)
- **Sleep and wake cycles**: It helps you feel sleepy at night and awake during the day
- **Emotions**: It's involved in feelings like anger and pleasure
- **Hormones**: It controls the pituitary gland, which is the "master gland" for hormones

The hypothalamus connects your brain to your body's hormone system!`,
      keyTerms: [
        { term: 'hypothalamus', definition: 'A small brain region that controls basic body functions' },
        { term: 'hormone', definition: 'Chemical messengers in your blood that control body processes' },
        { term: 'thermostat', definition: 'Something that keeps temperature steady' },
      ],
      analogies: [
        'The hypothalamus is like a thermostat for your whole body - it monitors and adjusts many body functions.',
        'It\'s like a control room that manages hunger, thirst, temperature, and sleep.',
      ],
    },
    2: {
      level: 2,
      summary: 'The hypothalamus is a diencephalic structure that regulates homeostasis through connections with the autonomic nervous system and endocrine system via the pituitary gland.',
      explanation: `The hypothalamus forms the floor and walls of the third ventricle and connects to the pituitary gland via the infundibulum (pituitary stalk).

**Major Functions:**

**Homeostatic Regulation:**
- *Temperature*: Anterior hypothalamus detects and triggers cooling; posterior triggers heating
- *Hunger*: Lateral hypothalamus (hunger center); Ventromedial (satiety center)
- *Thirst*: Osmoreceptors detect blood concentration
- *Sleep-wake cycle*: Suprachiasmatic nucleus (circadian rhythm)

**Endocrine Control:**
- Releases hormones to pituitary gland
- *Releasing hormones*: Stimulate anterior pituitary (e.g., GnRH, TRH, CRH, GHRH)
- *Inhibiting hormones*: Suppress anterior pituitary (e.g., dopamine inhibits prolactin)
- *Direct hormones*: ADH and oxytocin to posterior pituitary

**Autonomic Control:**
- Sympathetic: Posterior and lateral hypothalamus
- Parasympathetic: Anterior hypothalamus

**Emotional Regulation:**
- Part of limbic system
- Connected to amygdala and hippocampus
- Involved in fear, pleasure, and aggression

**Clinical Relevance:**
- Hypothalamic tumors: Obesity, hormonal dysfunction
- Diabetes insipidus: ADH deficiency
- Syndrome of inappropriate ADH (SIADH)`,
      keyTerms: [
        { term: 'homeostasis', definition: 'The body\'s ability to maintain stable internal conditions' },
        { term: 'infundibulum', definition: 'The stalk connecting hypothalamus to pituitary gland' },
        { term: 'suprachiasmatic nucleus', definition: 'The master circadian clock located above the optic chiasm' },
        { term: 'releasing hormone', definition: 'Hypothalamic hormones that stimulate the anterior pituitary' },
      ],
    },
    3: {
      level: 3,
      summary: 'The hypothalamus contains distinct nuclear groups organized into periventricular, medial, and lateral zones, each controlling specific homeostatic, neuroendocrine, and autonomic functions.',
      explanation: `**Anatomical Organization:**

*Regions (Anterior to Posterior):*
- Preoptic region
- Supraoptic (anterior) region
- Tuberal (middle) region
- Mammillary (posterior) region

*Zones (Medial to Lateral):*
- Periventricular zone: Neuroendocrine
- Medial zone: Homeostatic regulation
- Lateral zone: Arousal, feeding

**Key Nuclei and Functions:**

**Periventricular Zone:**
- Arcuate nucleus: GHRH, dopamine, feeding regulation (POMC, AgRP neurons)
- Periventricular nucleus: Somatostatin
- Suprachiasmatic nucleus (SCN): Circadian rhythm

**Medial Zone:**
- Preoptic area: Thermoregulation, sexual behavior, sleep
- Anterior nucleus: Parasympathetic, cooling responses
- Paraventricular nucleus (PVN): CRH, TRH, oxytocin, ADH
- Supraoptic nucleus (SON): ADH, oxytocin
- Ventromedial nucleus (VMN): Satiety, female sexual behavior
- Dorsomedial nucleus: Circadian rhythms, feeding
- Posterior nucleus: Sympathetic, heat conservation
- Mammillary bodies: Memory (Papez circuit)

**Lateral Zone:**
- Lateral hypothalamic area: Hunger, arousal
- Orexin/hypocretin neurons: Wakefulness

**Hypothalamic-Pituitary Axis:**

*Anterior Pituitary (Adenohypophysis):*
- Hypophyseal portal system
- Releasing/inhibiting hormones
- GnRH → FSH/LH
- TRH → TSH
- CRH → ACTH
- GHRH → GH; Somatostatin inhibits
- Dopamine → Inhibits prolactin

*Posterior Pituitary (Neurohypophysis):*
- Direct neural connection
- Oxytocin: Milk letdown, uterine contractions
- ADH (vasopressin): Water retention`,
      keyTerms: [
        { term: 'paraventricular nucleus', definition: 'Key hypothalamic nucleus producing CRH, TRH, and magnocellular hormones' },
        { term: 'hypophyseal portal system', definition: 'Blood vessels carrying hormones from hypothalamus to anterior pituitary' },
        { term: 'orexin', definition: 'Neuropeptide from lateral hypothalamus regulating wakefulness and appetite' },
        { term: 'arcuate nucleus', definition: 'Hypothalamic nucleus with GHRH neurons and feeding regulation circuits' },
      ],
    },
    4: {
      level: 4,
      summary: 'The hypothalamus integrates neural and hormonal signals through complex circuits involving neuropeptides, neuromodulators, and feedback loops to maintain physiological homeostasis and drive motivated behaviors.',
      explanation: `**Neuroendocrine Circuits:**

**HPA Axis (Stress Response):**
- PVN → CRH → Anterior pituitary → ACTH → Adrenal cortex → Cortisol
- Negative feedback at multiple levels
- Glucocorticoid receptors in hippocampus, PVN
- Chronic stress: Hippocampal atrophy, HPA dysregulation

**HPT Axis (Metabolism):**
- PVN → TRH → Anterior pituitary → TSH → Thyroid → T3/T4
- T3/T4 negative feedback
- Leptin stimulates TRH; fasting inhibits

**HPG Axis (Reproduction):**
- GnRH neurons (preoptic area) → Anterior pituitary → FSH/LH → Gonads
- Kisspeptin neurons regulate GnRH
- Estrogen/progesterone/testosterone feedback
- Pulsatile GnRH essential (continuous inhibits)

**Feeding Regulation:**

*Arcuate Nucleus:*
- POMC/CART neurons: Anorexigenic (suppress appetite)
- AgRP/NPY neurons: Orexigenic (stimulate appetite)
- Leptin: Activates POMC, inhibits AgRP
- Ghrelin: Activates AgRP
- Insulin: Anorexigenic

*Output:*
- PVN: Satiety, metabolic rate
- Lateral hypothalamus: Hunger drive
- Orexin neurons: Arousal, feeding

**Circadian Regulation:**
- SCN: Master clock
- Melanopsin retinal ganglion cells → SCN
- Clock genes: CLOCK, BMAL1, Per, Cry
- SCN → PVN → Pineal → Melatonin

**Clinical Correlations:**

*Hypothalamic Lesions:*
- Anterior: Hyperthermia, insomnia
- Lateral: Anorexia, adipsia
- Ventromedial: Hyperphagia, obesity
- Posterior: Hypothermia, somnolence
- Mammillary bodies: Wernicke-Korsakoff syndrome

*Endocrine Disorders:*
- Central diabetes insipidus: ADH deficiency
- SIADH: Excess ADH
- Hypopituitarism: Hypothalamic or pituitary lesion
- Kallmann syndrome: GnRH neuron migration failure`,
      keyTerms: [
        { term: 'kisspeptin', definition: 'Neuropeptide that triggers GnRH release, essential for puberty' },
        { term: 'orexigenic', definition: 'Promoting appetite and food intake' },
        { term: 'anorexigenic', definition: 'Suppressing appetite and food intake' },
        { term: 'POMC', definition: 'Pro-opiomelanocortin, precursor to MSH and other anorexigenic peptides' },
      ],
      clinicalNotes: 'Hypothalamic lesion localization: Remember "Anterior = Parasympathetic, cooling" and "Posterior = Sympathetic, heating." Lateral lesions cause anorexia; medial (VMN) lesions cause hyperphagia. Mammillary body lesions cause memory impairment (Korsakoff).',
    },
    5: {
      level: 5,
      summary: 'The hypothalamus is the central regulator of homeostasis, integrating energy balance, circadian rhythms, stress responses, and reproduction through complex neural-hormonal interactions with clinical implications for obesity, sleep disorders, and neuroendocrine disease.',
      explanation: `**Advanced Hypothalamic Neuroscience:**

**Energy Homeostasis:**
- Set-point vs settling point theories
- Leptin resistance in obesity
- Hypothalamic inflammation and gliosis
- Melanocortin system: MC3R, MC4R
- Bariatric surgery effects on gut-brain axis

**Sleep-Wake Regulation:**
- Flip-flop switch: VLPO ↔ Arousal systems
- Orexin stabilizes wakefulness
- Narcolepsy: Orexin neuron loss
- Circadian vs homeostatic sleep drive

**Stress and Allostasis:**
- Allostatic load: Cumulative stress burden
- Glucocorticoid receptor sensitivity
- Epigenetic programming (early life stress)
- HPA axis in depression and PTSD

**Clinical Applications:**

*Neuroendocrine Tumors:*
- Craniopharyngioma: Hypothalamic damage
- Germinoma, glioma: Hormonal dysfunction
- Hypothalamic obesity: Very difficult to treat

*Diabetes Insipidus:*
- Central vs nephrogenic
- Water deprivation test
- Desmopressin response

*Narcolepsy:*
- Type 1: CSF orexin low, cataplexy
- Type 2: Normal orexin, no cataplexy
- Autoimmune etiology (H1N1, strep)

*Hypopituitarism:*
- Test all axes
- Insulin tolerance test (gold standard for GH, cortisol)
- Hormone replacement sequence (cortisol first)

**Research Frontiers:**
- DREADD/optogenetic manipulation of circuits
- AgRP neuron stimulation → Immediate hunger
- Tanycytes and hypothalamic plasticity
- Hypothalamic neurogenesis
- Deep brain stimulation for obesity

**Imaging:**
- MRI with pituitary protocol
- Dynamic contrast for adenomas
- Stalk thickening differential
- Functional imaging of hunger circuits`,
      keyTerms: [
        { term: 'narcolepsy type 1', definition: 'Sleep disorder with orexin deficiency and cataplexy' },
        { term: 'allostatic load', definition: 'Cumulative physiological cost of chronic stress' },
        { term: 'tanycytes', definition: 'Specialized ependymal cells in hypothalamus with sensing and regulatory functions' },
        { term: 'craniopharyngioma', definition: 'Benign tumor near pituitary often causing hypothalamic damage' },
      ],
      clinicalNotes: `Hypothalamic-pituitary evaluation:
- Cortisol first (most life-threatening if deficient)
- Then thyroid (can worsen cortisol deficiency if replaced first)
- Then sex hormones, GH
- ADH assessment with water balance

Craniopharyngioma surgery: High risk of hypothalamic damage causing obesity, memory deficits, personality changes. Consider conservative resection + radiation.

Narcolepsy diagnosis: MSLT with short sleep latency and SOREMPs. CSF orexin if equivocal or for research.`,
    },
  },

  media: [
    {
      id: 'hypothalamus-3d',
      type: '3d-model',
      filename: 'hypothalamus.glb',
      title: 'Interactive 3D Hypothalamus',
      description: 'Rotatable model showing nuclei and pituitary connection',
    },
    {
      id: 'hpa-axis-diagram',
      type: 'diagram',
      filename: 'hpa_axis.svg',
      title: 'Hypothalamic-Pituitary-Adrenal Axis',
      description: 'Complete HPA axis with feedback loops',
    },
  ],

  citations: [
    {
      id: 'saper-hypothalamus',
      type: 'textbook',
      title: 'Principles of Neural Science',
      authors: ['Kandel ER', 'Schwartz JH', 'Jessell TM'],
      source: 'McGraw-Hill',
      chapter: 'Hypothalamus: Autonomic, Hormonal, and Behavioral Functions',
    },
  ],

  crossReferences: [
    { targetId: 'anatomy-thalamus', targetType: 'structure', relationship: 'sibling', label: 'Thalamus' },
    { targetId: 'anatomy-pituitary', targetType: 'structure', relationship: 'related', label: 'Pituitary Gland' },
    { targetId: 'physiology-autonomic', targetType: 'pathway', relationship: 'see-also', label: 'Autonomic Nervous System' },
  ],

  tags: {
    systems: ['nervous', 'endocrine'],
    structures: ['FMA:62008'],
    topics: ['anatomy', 'neuroanatomy', 'neuroendocrine'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['neurology', 'endocrinology'] },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export const diencephalonContent = {
  thalamus: thalamusContent,
  hypothalamus: hypothalamusContent,
};

export default diencephalonContent;
