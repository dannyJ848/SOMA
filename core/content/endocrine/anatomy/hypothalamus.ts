/**
 * Hypothalamus - Anatomy
 *
 * The master regulator of the endocrine system, integrating neural
 * and hormonal signals to control pituitary function.
 */

import { EducationalContent } from '../../types';

export const HYPOTHALAMUS_ANATOMY: EducationalContent = {
  id: 'anatomy-hypothalamus',
  type: 'structure',
  name: 'Hypothalamus',
  alternateNames: ['Hypothalamic region', 'Ventral diencephalon'],
  fmaId: 'FMA:62008',

  levels: {
    1: {
      level: 1,
      summary: 'The hypothalamus is a small part of the brain that acts like a control center, telling other glands in your body what to do.',
      explanation: `Imagine your body has a boss that tells all the other workers what to do. The hypothalamus is like that boss! It sits at the base of your brain, about the size of an almond, and sends messages to a nearby gland called the pituitary.

The hypothalamus helps control:
- When you feel hungry or full
- Your body temperature (like a thermostat)
- When you feel sleepy or awake
- How you grow
- When you feel thirsty

It does all this by releasing special chemicals that travel to other parts of your body.`,
      keyTerms: [
        { term: 'control center', definition: 'A place that sends instructions to other parts of the body' },
        { term: 'gland', definition: 'A body part that makes and releases special chemicals called hormones' },
        { term: 'pituitary', definition: 'A small gland right below the hypothalamus that follows its instructions' },
      ],
      analogies: [
        'The hypothalamus is like a thermostat in your house - it senses what your body needs and turns things on or off to keep everything just right.',
        'Think of the hypothalamus as a text messaging system - it sends quick messages to other glands telling them what to do.',
      ],
      examples: [
        'When you get too hot, the hypothalamus tells your body to sweat to cool down.',
        'When you haven\'t eaten in a while, the hypothalamus makes you feel hungry.',
      ],
    },
    2: {
      level: 2,
      summary: 'The hypothalamus is a region at the base of the brain that produces hormones controlling the pituitary gland and regulates vital body functions like temperature, hunger, and sleep.',
      explanation: `The hypothalamus is located at the base of the brain, just above the brainstem and below the thalamus. Despite being only about 4 grams in weight, it plays a crucial role in maintaining homeostasis - keeping your body in balance.

**Key Functions:**
1. **Hormone production**: Makes releasing and inhibiting hormones that control the pituitary gland
2. **Body temperature regulation**: Acts as the body's thermostat
3. **Hunger and thirst**: Controls appetite and fluid balance
4. **Sleep-wake cycles**: Helps regulate when you feel tired or alert
5. **Emotional responses**: Influences mood and behavior
6. **Autonomic control**: Manages automatic functions like heart rate and blood pressure

**Connection to the Pituitary:**
The hypothalamus connects to the pituitary gland through:
- A stalk called the infundibulum (or pituitary stalk)
- Blood vessels called the hypophyseal portal system
- Nerve fibers that carry signals

The hypothalamus receives input from many parts of the brain and body, integrates this information, and sends appropriate signals to maintain balance.`,
      keyTerms: [
        { term: 'homeostasis', definition: 'The body\'s ability to maintain stable internal conditions', pronunciation: 'hoh-mee-oh-STAY-sis' },
        { term: 'infundibulum', definition: 'The stalk connecting the hypothalamus to the pituitary gland', pronunciation: 'in-fun-DIB-yoo-lum' },
        { term: 'releasing hormone', definition: 'A hormone from the hypothalamus that tells the pituitary to release its own hormones' },
        { term: 'inhibiting hormone', definition: 'A hormone from the hypothalamus that tells the pituitary to stop releasing hormones' },
        { term: 'autonomic', definition: 'Automatic body functions that happen without conscious control' },
      ],
      analogies: [
        'The hypothalamus is like a smart home system - it monitors everything (temperature, time, activity) and automatically adjusts other systems to keep the home comfortable.',
      ],
    },
    3: {
      level: 3,
      summary: 'The hypothalamus is a neuroendocrine structure in the diencephalon that synthesizes releasing and inhibiting hormones, controls anterior pituitary function via the hypophyseal portal system, and directly innervates the posterior pituitary.',
      explanation: `The hypothalamus is located in the ventral portion of the diencephalon, forming the floor and lower lateral walls of the third ventricle. It extends from the optic chiasm anteriorly to the mammillary bodies posteriorly.

**Anatomical Organization:**

*Periventricular Zone:*
- Suprachiasmatic nucleus: Circadian rhythm control
- Arcuate nucleus: GnRH, GHRH, dopamine production
- Paraventricular nucleus: ADH, oxytocin, CRH, TRH synthesis

*Medial Zone:*
- Medial preoptic nucleus: Temperature regulation
- Ventromedial nucleus: Satiety center
- Dorsomedial nucleus: Emotional behavior

*Lateral Zone:*
- Lateral hypothalamic area: Hunger center
- Contains the medial forebrain bundle

**Neuroendocrine Output:**

The hypothalamus exerts endocrine control through two pathways:

1. **Hypophyseal Portal System (Anterior Pituitary)**:
   - Releasing hormones: CRH, TRH, GnRH, GHRH
   - Inhibiting hormones: Dopamine (PIH), Somatostatin (GHIH)
   - Hormones travel via portal vessels to anterior pituitary

2. **Hypothalamo-hypophyseal Tract (Posterior Pituitary)**:
   - Magnocellular neurons in PVN and SON
   - Axons project directly to posterior pituitary
   - ADH and oxytocin released from nerve terminals

**Blood Supply:**
- Superior hypophyseal arteries (internal carotid)
- Form primary capillary plexus in median eminence
- Portal veins carry hormones to anterior pituitary`,
      keyTerms: [
        { term: 'neuroendocrine', definition: 'Relating to the interaction between the nervous system and endocrine system', pronunciation: 'noor-oh-EN-doh-krin' },
        { term: 'diencephalon', definition: 'The posterior part of the forebrain containing the thalamus and hypothalamus', pronunciation: 'dy-en-SEF-uh-lon' },
        { term: 'hypophyseal portal system', definition: 'Specialized blood vessels carrying hormones from hypothalamus to anterior pituitary', pronunciation: 'hy-poh-FIZ-ee-ul' },
        { term: 'median eminence', definition: 'A circumventricular organ at the base of hypothalamus where releasing hormones enter portal vessels' },
        { term: 'magnocellular neurons', definition: 'Large neurons in PVN and SON that produce ADH and oxytocin' },
        { term: 'parvocellular neurons', definition: 'Small neurons that produce releasing and inhibiting hormones' },
      ],
    },
    4: {
      level: 4,
      summary: 'The hypothalamus integrates multimodal sensory input to regulate neuroendocrine axes through pulsatile hormone release, utilizing both magnocellular and parvocellular neurosecretory systems with distinct projection patterns and feedback mechanisms.',
      explanation: `**Cytoarchitectural Organization:**

The hypothalamus contains approximately 11 major nuclear groups, divisible into anterior (preoptic), tuberal (middle), and posterior regions, with distinct functional specializations:

*Anterior/Preoptic Region:*
- **Preoptic nuclei**: GnRH neurons (kisspeptin-responsive)
- **Suprachiasmatic nucleus (SCN)**: Master circadian pacemaker; receives direct retinal input via retinohypothalamic tract; generates ~24hr oscillations via CLOCK/BMAL1 transcription factors
- **Anterior hypothalamic nucleus**: Thermoregulation (heat dissipation)

*Tuberal Region:*
- **Paraventricular nucleus (PVN)**:
  - Magnocellular division: ADH (AVP) and oxytocin synthesis
  - Parvocellular division: CRH, TRH production
  - Preautonomic neurons projecting to brainstem and spinal cord
- **Supraoptic nucleus (SON)**: ADH and oxytocin (magnocellular)
- **Arcuate nucleus (ARC)**:
  - GHRH neurons, dopaminergic neurons (TIDA system)
  - POMC/CART neurons (anorexigenic)
  - NPY/AgRP neurons (orexigenic)
  - Kisspeptin neurons (GnRH pulse generator)
- **Ventromedial nucleus (VMN)**: Satiety, glucose sensing, defensive behavior
- **Dorsomedial nucleus (DMN)**: Circadian output, stress response integration

*Posterior Region:*
- **Posterior hypothalamic nucleus**: Heat conservation, arousal
- **Lateral hypothalamic area (LHA)**: Orexin/hypocretin neurons (sleep-wake, feeding)
- **Mammillary bodies**: Memory circuits (Papez circuit)

**Hypophysiotropic Hormone Secretion:**

Parvocellular neuroendocrine cells release hormones into the primary capillary plexus of the median eminence:

| Hormone | Source | Action |
|---------|--------|--------|
| CRH (41 aa) | PVN | Stimulates ACTH release |
| TRH (tripeptide) | PVN, other | Stimulates TSH, prolactin |
| GnRH (decapeptide) | Preoptic, ARC | Stimulates LH, FSH |
| GHRH (44 aa) | ARC | Stimulates GH release |
| Somatostatin (14/28 aa) | Periventricular | Inhibits GH, TSH |
| Dopamine | ARC (TIDA) | Inhibits prolactin |

**Pulsatile Secretion:**
- GnRH: ~90-minute pulses (luteal), ~60-minute (follicular)
- CRH: Circadian rhythm with morning peak
- GHRH: Nocturnal predominance, sleep-associated

**Feedback Regulation:**
- Long-loop: Target gland hormones (T3, cortisol, estradiol)
- Short-loop: Pituitary hormones (GH, ACTH)
- Ultra-short-loop: Autoregulation within hypothalamus

**Circumventricular Organs:**
The median eminence and organum vasculosum of the lamina terminalis (OVLT) lack a blood-brain barrier, allowing:
- Detection of circulating hormones and metabolites
- Entry of peripherally-produced signals (leptin, ghrelin)
- Release of neurohormones into portal circulation`,
      keyTerms: [
        { term: 'kisspeptin', definition: 'A neuropeptide that stimulates GnRH release, critical for puberty onset and reproductive function' },
        { term: 'POMC', definition: 'Pro-opiomelanocortin; precursor protein yielding ACTH, MSH, and beta-endorphin' },
        { term: 'orexin/hypocretin', definition: 'Neuropeptides from lateral hypothalamus regulating sleep-wake and feeding; deficient in narcolepsy' },
        { term: 'TIDA', definition: 'Tuberoinfundibular dopamine system; inhibits prolactin release' },
        { term: 'circumventricular organs', definition: 'Brain regions lacking blood-brain barrier, serving as neuroendocrine interface' },
      ],
      clinicalNotes: 'Hypothalamic dysfunction causes include tumors (craniopharyngioma), infiltrative disease (sarcoidosis, Langerhans cell histiocytosis), trauma, radiation, and genetic disorders (Kallmann syndrome, Prader-Willi). Manifestations depend on affected nuclei and may include hypogonadotropic hypogonadism, central diabetes insipidus, SIADH, dysthermia, and sleep-wake disturbances.',
    },
    5: {
      level: 5,
      summary: 'The hypothalamus serves as the primary integrative center for neuroendocrine, autonomic, and behavioral homeostasis, with clinical relevance spanning functional disorders, structural lesions, genetic conditions, and therapeutic targeting of specific hypothalamic circuits.',
      explanation: `**Advanced Neuroanatomical Considerations:**

*Developmental Origin:*
The hypothalamus derives from the prosencephalic basal plate, with neurogenesis occurring E10-E16 in mice (approximately weeks 5-12 in humans). The median eminence develops from the infundibular recess of the third ventricle. Transcription factors including NKX2.1, OTP, and SIM1 specify hypothalamic regional identity.

*Detailed Nuclear Connectivity:*

**Paraventricular Nucleus Subdivisions:**
- Magnocellular: ADH (AVP) and OXT → posterior pituitary
- Parvocellular: CRH and TRH → median eminence
- Preautonomic: → NTS, DMV, IML (spinal cord)
- The PVN integrates stress responses via CRH-ACTH-cortisol axis

**GnRH Neuronal Network:**
- ~1000-3000 GnRH neurons scattered from preoptic area to mediobasal hypothalamus
- Kisspeptin neurons in ARC (KNDy neurons: Kisspeptin/Neurokinin B/Dynorphin) serve as GnRH pulse generator
- Kisspeptin neurons in AVPV mediate estrogen positive feedback (LH surge)
- Kallmann syndrome: Failure of GnRH neuron migration from olfactory placode

**Energy Homeostasis Circuits:**
- ARC melanocortin system: POMC→α-MSH→MC4R (anorexigenic) vs. NPY/AgRP→MC4R antagonism (orexigenic)
- Leptin receptors on both populations provide adiposity signal
- Ghrelin receptors on NPY/AgRP neurons signal hunger
- MC4R mutations are most common monogenic cause of obesity

**Clinical Correlation Matrix:**

| Lesion/Condition | Affected Area | Clinical Manifestations |
|------------------|---------------|------------------------|
| Craniopharyngioma | Suprasellar | Panhypopituitarism, DI, visual field defects |
| Kallmann syndrome | GnRH neurons | Hypogonadotropic hypogonadism, anosmia |
| Prader-Willi | Hypothalamic dysfunction | Hyperphagia, hypogonadism, short stature |
| Hypothalamic hamartoma | Tuber cinereum | Precocious puberty, gelastic seizures |
| Langerhans cell histiocytosis | Infiltrative | Central DI (most common manifestation) |
| Septo-optic dysplasia | Hypothalamic/septal | Hypopituitarism, optic nerve hypoplasia |

**Therapeutic Targets:**

*Current Clinical Applications:*
- GnRH agonists/antagonists (pulsatile vs. continuous): Infertility, endometriosis, prostate cancer
- Kisspeptin analogs: Investigational for hypothalamic amenorrhea
- Orexin receptor antagonists (suvorexant, lemborexant): Insomnia
- Setmelanotide (MC4R agonist): POMC/LEPR deficiency obesity

*Emerging Approaches:*
- GLP-1 receptor agonists show hypothalamic effects on appetite
- Optogenetic studies define specific circuit functions
- Deep brain stimulation of posterior hypothalamus for cluster headache

**Imaging Considerations:**
- MRI with thin cuts through sella essential for hypothalamic lesions
- Absent posterior pituitary bright spot suggests central DI
- Thickened stalk >3mm at level of optic chiasm is abnormal
- Enhancement patterns help differentiate tumor vs. infiltrative disease

**Laboratory Assessment of Hypothalamic Function:**
- Dynamic testing required (no direct hypothalamic hormone assays clinically)
- GnRH stimulation test: LH/FSH response
- CRH stimulation test: ACTH/cortisol response (distinguishes central from primary)
- Water deprivation test: For DI evaluation
- Combined pituitary function testing for comprehensive evaluation`,
      keyTerms: [
        { term: 'KNDy neurons', definition: 'Arcuate nucleus neurons co-expressing Kisspeptin, Neurokinin B, and Dynorphin; function as the GnRH pulse generator' },
        { term: 'setmelanotide', definition: 'MC4R agonist FDA-approved for POMC, PCSK1, and LEPR deficiency obesity' },
        { term: 'NKX2.1', definition: 'Transcription factor essential for hypothalamic development; mutations cause brain-lung-thyroid syndrome' },
        { term: 'posterior pituitary bright spot', definition: 'T1 hyperintensity on MRI representing stored ADH; absence suggests central diabetes insipidus' },
      ],
      clinicalNotes: 'Functional hypothalamic disorders (hypothalamic amenorrhea, functional hypercortisolism) require exclusion of structural lesions by MRI. In pediatric patients, craniopharyngioma is the most common suprasellar tumor affecting hypothalamic function. Post-surgical hypothalamic obesity following craniopharyngioma resection remains a major clinical challenge with limited treatment options. Recent trials of setmelanotide show promise for specific genetic obesity syndromes involving the melanocortin pathway.',
    },
  },

  media: [
    {
      id: 'hypothalamus-diagram-1',
      type: 'diagram',
      filename: 'hypothalamus-nuclei.svg',
      title: 'Hypothalamic Nuclei and Their Functions',
      description: 'Sagittal view showing major hypothalamic nuclei and their primary functions',
    },
    {
      id: 'hypothalamus-portal-1',
      type: 'diagram',
      filename: 'hypophyseal-portal-system.svg',
      title: 'Hypophyseal Portal System',
      description: 'Blood supply connecting hypothalamus to anterior pituitary',
    },
  ],

  citations: [
    {
      id: 'guyton-ch76',
      type: 'textbook',
      title: 'Pituitary Hormones and Their Control by the Hypothalamus',
      authors: ['Hall, JE', 'Hall, ME'],
      source: 'Guyton and Hall Textbook of Medical Physiology, 14th Edition',
      chapter: '76',
      license: 'Copyrighted',
    },
    {
      id: 'costanzo-endo',
      type: 'textbook',
      title: 'Endocrine Physiology',
      authors: ['Costanzo, LS'],
      source: 'Physiology, 7th Edition',
      chapter: '9',
      license: 'Copyrighted',
    },
    {
      id: 'openstax-endo',
      type: 'textbook',
      title: 'The Endocrine System',
      source: 'OpenStax Anatomy and Physiology 2e',
      chapter: '17',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/17-introduction',
      license: 'CC BY 4.0',
    },
  ],

  crossReferences: [
    { targetId: 'anatomy-pituitary-anterior', targetType: 'structure', relationship: 'child', label: 'Anterior Pituitary' },
    { targetId: 'anatomy-pituitary-posterior', targetType: 'structure', relationship: 'child', label: 'Posterior Pituitary' },
    { targetId: 'physiology-hypothalamic-pituitary-axes', targetType: 'pathway', relationship: 'related', label: 'Hypothalamic-Pituitary Axes' },
    { targetId: 'pathology-diabetes-insipidus', targetType: 'condition', relationship: 'see-also', label: 'Diabetes Insipidus' },
  ],

  tags: {
    systems: ['endocrine', 'nervous'],
    structures: ['FMA:62008', 'hypothalamus'],
    topics: ['anatomy', 'neuroendocrinology'],
    keywords: ['hypothalamus', 'releasing hormones', 'pituitary control', 'homeostasis', 'neuroendocrine'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['endocrinology', 'neurology'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
