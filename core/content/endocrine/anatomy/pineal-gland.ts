/**
 * Pineal Gland - Anatomy
 *
 * A small endocrine gland in the brain producing melatonin
 * for circadian rhythm regulation.
 */

import { EducationalContent } from '../../types';

export const PINEAL_GLAND_ANATOMY: EducationalContent = {
  id: 'anatomy-pineal-gland',
  type: 'structure',
  name: 'Pineal Gland',
  alternateNames: ['Pineal body', 'Epiphysis cerebri', 'Conarium', 'Third eye'],
  fmaId: 'FMA:62033',

  levels: {
    1: {
      level: 1,
      summary: 'The pineal gland is a tiny, pine cone-shaped part of your brain that makes melatonin to help you sleep at night.',
      explanation: `Deep inside your brain is a tiny gland shaped like a pine cone - that is why it is called the "pineal" gland (pinea means pine cone in Latin).

**What Does It Do?**
The pineal gland makes a hormone called melatonin that helps control your sleep:
- When it gets dark, the pineal gland starts making melatonin
- Melatonin makes you feel sleepy
- When it gets light, melatonin stops being made
- You wake up and feel alert!

**Your Internal Clock:**
The pineal gland helps your body know the difference between day and night. This is called your "circadian rhythm" - a fancy term for your body's 24-hour clock.

**Interesting Facts:**
- The pineal gland is only about the size of a grain of rice
- Some animals (like certain lizards) have a "third eye" on top of their head that is connected to a pineal-like structure
- The ancient philosopher Descartes called the pineal gland the "seat of the soul"`,
      keyTerms: [
        { term: 'pineal gland', definition: 'A tiny gland in your brain that makes melatonin' },
        { term: 'melatonin', definition: 'A hormone that makes you sleepy when it gets dark' },
        { term: 'circadian rhythm', definition: 'Your body\'s internal 24-hour clock' },
      ],
      analogies: [
        'The pineal gland is like a light sensor that tells your body when it is time to sleep and when it is time to wake up.',
        'Melatonin is like a dimmer switch that slowly turns down your brain activity so you can fall asleep.',
      ],
      examples: [
        'When you travel to a different time zone and feel jet-lagged, it is because your pineal gland is confused about when to make melatonin.',
        'Looking at bright phone screens at night can stop your pineal gland from making melatonin, making it harder to fall asleep.',
      ],
    },
    2: {
      level: 2,
      summary: 'The pineal gland is a midline neuroendocrine organ in the epithalamus that synthesizes melatonin in response to darkness, regulated by the suprachiasmatic nucleus via sympathetic input, with roles in circadian rhythm, seasonal reproduction, and possibly immune function.',
      explanation: `**Location:**
The pineal gland is located in the midline of the brain, attached to the posterior wall of the third ventricle, between the two thalamic bodies. It lies below the splenium of the corpus callosum.

**Size and Structure:**
- Size: 5-8 mm long, 3-5 mm wide
- Weight: 100-180 mg
- Color: Reddish-gray
- Shape: Pine cone (hence the name)

**Melatonin Production:**

The pineal gland makes melatonin from the amino acid tryptophan:
\`\`\`
Tryptophan → Serotonin → N-acetylserotonin → Melatonin
\`\`\`

*Regulation:*
- Light inhibits melatonin production
- Darkness stimulates melatonin production
- Peak levels occur between 2-4 AM
- Melatonin levels decrease with age

**Neural Pathway:**

The pathway from eyes to pineal gland:
1. Retina detects light/dark
2. Signal to suprachiasmatic nucleus (SCN) - the master clock
3. SCN signals through paraventricular nucleus
4. Sympathetic pathway through superior cervical ganglion
5. Norepinephrine released at pineal gland
6. In darkness: Norepinephrine stimulates melatonin synthesis
7. In light: Pathway inhibited, melatonin not made

**Functions:**
- Regulates sleep-wake cycle
- Influences seasonal reproduction in animals
- May affect puberty timing
- Possible immune system modulation
- Antioxidant properties

**Calcification:**
The pineal gland commonly calcifies with age (called "brain sand" or corpora arenacea). This is visible on X-rays and CT scans, making it a useful radiological landmark.`,
      keyTerms: [
        { term: 'epithalamus', definition: 'The region of the brain containing the pineal gland and habenula' },
        { term: 'suprachiasmatic nucleus', definition: 'The brain\'s master circadian clock in the hypothalamus, abbreviated SCN' },
        { term: 'circadian rhythm', definition: 'Biological processes that follow a roughly 24-hour cycle' },
        { term: 'corpora arenacea', definition: 'Calcium deposits in the pineal gland, also called "brain sand"' },
        { term: 'tryptophan', definition: 'An amino acid that is converted to serotonin and then melatonin' },
      ],
      analogies: [
        'The pineal gland is like a translator - it converts the light signals from your eyes into a hormone signal (melatonin) that your body can use.',
        'The pathway from your eyes to your pineal gland is like a relay race, passing information through several brain regions.',
      ],
    },
    3: {
      level: 3,
      summary: 'The pineal gland is a circumventricular neuroendocrine organ derived from the diencephalon, containing pinealocytes that synthesize melatonin via AANAT and HIOMT enzymes under noradrenergic control from the superior cervical ganglion, with clinical significance in circadian disorders and rare pineal tumors.',
      explanation: `**Embryology:**
- Derives from neuroectoderm of the diencephalon roof
- Develops as a posterior outpocketing of the third ventricle
- Photoreceptor-like cells in lower vertebrates
- Pinealocytes in mammals are modified photoreceptors

**Anatomical Relationships:**

*Superior:*
- Splenium of corpus callosum
- Internal cerebral veins

*Inferior:*
- Superior colliculi of midbrain
- Posterior commissure

*Lateral:*
- Habenular nuclei
- Pulvinar of thalamus

*Attachments:*
- Superior lamina: Habenular commissure
- Inferior lamina: Posterior commissure
- Pineal stalk connects to third ventricle

**Histology:**

*Pinealocytes (95% of cells):*
- Large cells with prominent nuclei
- Long processes ending on capillaries or ependyma
- Synaptic ribbon structures (photoreceptor remnants)
- Produce melatonin

*Interstitial (glial) cells:*
- Astrocyte-like
- GFAP positive
- Support pinealocyte function

*Other features:*
- Highly vascularized (outside blood-brain barrier)
- Fenestrated capillaries
- Sympathetic nerve terminals
- No parasympathetic innervation

**Melatonin Biosynthesis Pathway:**

\`\`\`
Tryptophan
    ↓ (Tryptophan hydroxylase)
5-Hydroxytryptophan
    ↓ (Aromatic amino acid decarboxylase)
Serotonin
    ↓ (AANAT - rate-limiting) **Night: active**
N-acetylserotonin
    ↓ (HIOMT/ASMT)
Melatonin
\`\`\`

*Key Enzymes:*
- AANAT (arylalkylamine N-acetyltransferase): Rate-limiting, 100-fold increase at night
- HIOMT (hydroxyindole-O-methyltransferase): Final step, relatively stable

**Neural Control:**

*Sympathetic Pathway:*
1. Retina → Retinohypothalamic tract → SCN
2. SCN → Paraventricular nucleus (PVN)
3. PVN → Intermediolateral cell column (T1-T2)
4. Preganglionic fibers → Superior cervical ganglion
5. Postganglionic fibers (nervi conarii) → Pineal gland
6. Norepinephrine release → β1 + α1 receptor activation

*Molecular Signaling:*
- β1 receptor → Gs → cAMP → PKA → AANAT transcription/phosphorylation
- α1 receptor → Gq → Ca²⁺ → Potentiates β1 response

**Melatonin Receptors:**

| Receptor | G Protein | Location | Function |
|----------|-----------|----------|----------|
| MT1 | Gi | SCN, pituitary, retina | Inhibits neuronal firing, acute sleep |
| MT2 | Gi | SCN, retina | Phase-shifts circadian rhythm |
| MT3/QR2 | — | Quinone reductase | Detoxification |`,
      keyTerms: [
        { term: 'AANAT', definition: 'Arylalkylamine N-acetyltransferase; rate-limiting enzyme in melatonin synthesis, dramatically upregulated at night' },
        { term: 'pinealocytes', definition: 'Main secretory cells of the pineal gland that produce melatonin' },
        { term: 'circumventricular organ', definition: 'Brain region lacking blood-brain barrier, allowing hormone release into circulation' },
        { term: 'retinohypothalamic tract', definition: 'Direct neural pathway from retina to SCN carrying light information' },
        { term: 'nervi conarii', definition: 'Sympathetic nerve fibers from superior cervical ganglion to pineal gland' },
      ],
      clinicalNotes: 'Pineal calcification is nearly universal by age 20 and visible on CT (useful landmark). Shift of calcified pineal indicates mass effect. Pineal tumors include germinomas (most common), pineocytomas (benign), and pineoblastomas (aggressive, WHO grade 4). Obstructive hydrocephalus may occur due to compression of cerebral aqueduct. Parinaud syndrome (upgaze palsy, convergence-retraction nystagmus) suggests dorsal midbrain compression.',
    },
    4: {
      level: 4,
      summary: 'The pineal gland integrates photic and circadian information to generate rhythmic melatonin synthesis through complex molecular oscillations involving clock genes, cAMP-dependent enzyme regulation, and adrenergic receptor signaling, with implications for chronobiology, sleep disorders, and oncology.',
      explanation: `**Molecular Basis of Melatonin Rhythmicity:**

*Clock Gene Regulation:*
- SCN expresses core clock genes (CLOCK, BMAL1, PER, CRY)
- These generate intrinsic ~24-hour oscillation
- Light resets the clock via glutamate and PACAP signaling
- SCN neurons are electrically active during day, quiet at night

*Nocturnal AANAT Upregulation:*
1. Night: SCN GABAergic output decreases
2. PVN disinhibited → increased sympathetic outflow
3. NE release from superior cervical ganglion terminals
4. β1 receptor → Gs → adenylyl cyclase → cAMP
5. PKA activates CREB → AANAT gene transcription
6. PKA also phosphorylates existing AANAT (stabilization)
7. α1 receptor potentiation via Ca²⁺ → enhanced response

*AANAT Protein Dynamics:*
- Half-life in dark: ~4 hours (14-3-3 protein stabilization)
- Half-life in light: Minutes (proteasomal degradation)
- Phosphorylation creates 14-3-3 binding site
- Light-induced cAMP drop → dephosphorylation → degradation

**Advanced Melatonin Pharmacology:**

*Melatonin Receptor Agonists:*

| Drug | Receptor | Half-life | Clinical Use |
|------|----------|-----------|--------------|
| Melatonin | MT1, MT2 | 20-50 min | Insomnia, jet lag |
| Ramelteon | MT1 > MT2 | 1-2 hours | Sleep onset insomnia |
| Tasimelteon | MT1, MT2 | 1.3 hours | Non-24-hour sleep-wake disorder |
| Agomelatine | MT1, MT2 + 5-HT2C antagonist | 1-2 hours | Depression (Europe) |

*Melatonin Actions Beyond Sleep:*
- Antioxidant: Direct radical scavenging, upregulates antioxidant enzymes
- Immunomodulation: Enhances T cell function, IL-2 production
- Anti-cancer: In vitro effects on breast cancer cells (MT1-mediated)
- Neuroprotection: Mitochondrial function, anti-apoptotic

**Circadian Disorders:**

*Delayed Sleep Phase Disorder:*
- Intrinsic circadian period >24 hours
- Natural bedtime 2-6 AM
- Morning melatonin or evening bright light therapy
- Genetic associations: PER3, CRY1 polymorphisms

*Advanced Sleep Phase Disorder:*
- Intrinsic period <24 hours
- Evening sleepiness, early morning awakening
- Evening bright light, morning melatonin
- CKIδ/PER2 mutations in familial cases

*Non-24-Hour Sleep-Wake Disorder:*
- Common in totally blind individuals
- No light entrainment of circadian clock
- Free-running circadian rhythm
- Tasimelteon FDA-approved

*Irregular Sleep-Wake Rhythm Disorder:*
- No clear circadian pattern
- Associated with dementia, developmental disorders
- Loss of SCN function or melatonin signaling

**Pineal Region Tumors:**

*Classification:*

| Type | Origin | % of Pineal Tumors | Features |
|------|--------|-------------------|----------|
| Germ cell tumors | Primordial germ cells | 50-65% | Germinoma most common; AFP, β-hCG markers |
| Pineal parenchymal | Pinealocytes | 15-30% | Pineocytoma (I-II) to Pineoblastoma (IV) |
| Gliomas | Glial cells | 10-15% | Astrocytoma, rarely GBM |
| Other | Various | 10% | Meningioma, metastases |

*Pineal Parenchymal Tumors:*
- Pineocytoma: Well-differentiated, WHO grade I-II, good prognosis
- PPTID: Pineal parenchymal tumor of intermediate differentiation
- Pineoblastoma: Primitive, WHO grade IV, aggressive, resembles medulloblastoma
- Papillary tumor: WHO grade II-III, distinct entity

*Clinical Presentation:*
- Hydrocephalus (aqueductal compression)
- Parinaud syndrome (tectal compression)
- Precocious puberty (boys - β-hCG from germinoma mimics LH)
- Melatonin deficiency symptoms rare`,
      keyTerms: [
        { term: 'CREB', definition: 'cAMP response element-binding protein; transcription factor activating AANAT gene' },
        { term: '14-3-3 protein', definition: 'Phospho-serine binding protein that stabilizes AANAT, preventing degradation' },
        { term: 'delayed sleep phase disorder', definition: 'Circadian rhythm disorder with chronically delayed sleep onset and wake times' },
        { term: 'non-24-hour sleep-wake disorder', definition: 'Free-running circadian rhythm, typically in blind individuals without light entrainment' },
        { term: 'Parinaud syndrome', definition: 'Dorsal midbrain syndrome with upgaze palsy, convergence-retraction nystagmus, light-near dissociation' },
        { term: 'pineoblastoma', definition: 'Highly malignant primitive neuroectodermal tumor of pineal gland' },
      ],
      clinicalNotes: 'Low-dose melatonin (0.5-3 mg) taken 3-5 hours before desired bedtime helps advance circadian phase. Higher doses (3-10 mg) have hypnotic effect but may cause morning grogginess. Ramelteon is FDA-approved for insomnia and may be useful in elderly due to safety profile. Pineal region tumors require CSF cytology (germ cell tumor seeding) and serum/CSF AFP and β-hCG. β-hCG-secreting germinomas can cause precocious puberty in boys.',
    },
    5: {
      level: 5,
      summary: 'The pineal gland represents a key interface between environmental light and internal physiology, with melatonin serving as a chronobiotic hormone affecting multiple systems, while pineal pathology spans developmental disorders, tumors with specific management protocols, and emerging roles in oncology and aging.',
      explanation: `**Evolutionary Perspective:**

*Photoreceptor Origins:*
- Lower vertebrate pineal: Contains functional photoreceptors
- Lamprey pineal: Direct photosensitivity, melatonin and other opsin
- Avian pineal: Both photoreceptive and clock function
- Mammalian pinealocytes: Lost photoreception, retain photoreceptor gene expression
- Synaptic ribbons and outer segment remnants reflect evolutionary history

*Third Eye:*
- Parietal eye in some reptiles: True photoreceptive organ
- Connected to pineal-like parapineal organ
- Detects photoperiod, shadows (predator detection)
- Mammalian pineal has no direct photoreception

**Melatonin Beyond Circadian Function:**

*Oncostatic Properties:*
- MT1 receptor on tumor cells → antiproliferative signals
- Inhibits estrogen receptor signaling in breast cancer
- Reduces VEGF and angiogenesis
- Clinical trials in advanced cancer (adjuvant role)
- Nighttime shift work associated with increased breast cancer risk (IARC Group 2A carcinogen)

*Immune Function:*
- Melatonin receptors on lymphocytes and macrophages
- Enhances IL-2, IFN-γ production
- Counters glucocorticoid-induced immunosuppression
- Potential role in aging immune dysfunction

*Mitochondrial Protection:*
- Melatonin concentrates in mitochondria
- Preserves mitochondrial membrane potential
- Upregulates complex I and IV activity
- May be relevant in neurodegenerative disease

**Pineal Calcification:**

*Composition and Mechanisms:*
- Hydroxyapatite crystals (same as bone)
- Calcified material called acervuli or brain sand
- Begins in childhood, nearly universal by age 20
- Pinealocyte degeneration and dystrophic calcification
- Higher calcification associated with lower melatonin production

*Imaging:*
- Visible on CT: High-density midline structure
- Calcified pineal is radiological landmark
- Shift suggests mass lesion (toward side of lesion = toward pathology)
- Large calcified pineal (>1 cm) may warrant investigation

**Pineal Region Tumor Management:**

*Diagnostic Approach:*
1. MRI brain with contrast (evaluate mass, hydrocephalus)
2. Serum and CSF tumor markers (AFP, β-hCG)
3. CSF cytology (germ cell tumor staging)
4. Spine MRI (drop metastases)
5. Consider endoscopic biopsy (stereotactic or open)

*Marker Interpretation:*

| Marker Pattern | Likely Diagnosis |
|----------------|------------------|
| AFP elevated | Yolk sac tumor, mixed GCT |
| β-hCG elevated | Choriocarcinoma, germinoma (mild) |
| Both elevated | Mixed GCT |
| Both normal | Germinoma, pineal parenchymal, glioma |

*Treatment by Tumor Type:*

**Germinoma:**
- Highly radiosensitive
- CSF dissemination staging determines field
- Localized: Whole ventricle + boost
- Disseminated: Craniospinal + boost
- Chemotherapy may allow reduced radiation field
- >90% cure rate

**Nongerminomatous Germ Cell Tumors:**
- Chemotherapy (platinum-based) + radiation
- Surgery for residual tumor
- AFP-secreting tumors have worse prognosis

**Pineocytoma:**
- Surgery: Gross total resection when possible
- Observation if complete resection
- Radiation for incomplete resection

**Pineoblastoma:**
- Aggressive multimodal therapy
- Craniospinal radiation + chemotherapy
- High-dose chemotherapy with autologous stem cell rescue in some protocols
- Poor prognosis (5-year survival ~50%)

*Surgical Approaches to Pineal Region:*
- Supracerebellar-infratentorial: Most common
- Occipital-transtentorial
- Transcallosal-interhemispheric
- Endoscopic (biopsy, third ventriculostomy for hydrocephalus)

**Chronotherapy and Shift Work:**

*Shift Work Disorder:*
- Excessive sleepiness during work, insomnia during sleep attempts
- Circadian misalignment increases cardiometabolic risk
- Management: Strategic light exposure, melatonin, napping

*Light-Dark Optimization:*
- Bright light (>1000 lux) during desired wake time
- Light boxes for phase advancement or delay
- Blue-blocking glasses in evening
- Dark environment for sleep

*Jet Lag Management:*
- Eastward travel (phase advance): Morning light, evening melatonin
- Westward travel (phase delay): Evening light, morning melatonin
- Cross >8 time zones: May need antidromic approach

**Emerging Research:**

*Melatonin and Aging:*
- Melatonin production decreases with age
- May contribute to sleep disturbances in elderly
- Possible role in age-related cognitive decline
- Supplementation studies ongoing

*Pineal Cysts:*
- Common incidental finding (1-4% of MRIs)
- Typically asymptomatic, <1 cm
- Follow-up imaging only if symptomatic or large
- Rare: Headache, visual changes, Parinaud syndrome from large cysts

*Melatonin in COVID-19:*
- Anti-inflammatory and antioxidant properties
- Clinical trials explored adjuvant role
- No definitive evidence of benefit yet`,
      keyTerms: [
        { term: 'acervuli', definition: 'Calcified concretions in pineal gland, also called brain sand or corpora arenacea' },
        { term: 'chronotherapy', definition: 'Treatment strategies that manipulate circadian timing, including light and melatonin' },
        { term: 'germinoma', definition: 'Most common pineal region germ cell tumor, highly radiosensitive with excellent prognosis' },
        { term: 'supracerebellar-infratentorial approach', definition: 'Most common surgical route to pineal region, between tentorium and cerebellum' },
        { term: 'shift work disorder', definition: 'Circadian rhythm disorder from work schedule conflicting with intrinsic circadian phase' },
        { term: 'parietal eye', definition: 'Third photoreceptive organ in some reptiles connected to pineal complex' },
      ],
      clinicalNotes: 'Pineal region tumors require multidisciplinary management. Endoscopic third ventriculostomy can treat hydrocephalus and obtain tissue diagnosis simultaneously. Pure germinomas have excellent prognosis with radiation alone (>90% 10-year survival). AFP or β-hCG elevation greater than mild β-hCG rules out pure germinoma and indicates nongerminomatous GCT requiring more intensive therapy. Melatonin supplementation is generally safe but may interact with anticoagulants and immunosuppressants.',
    },
  },

  media: [
    {
      id: 'pineal-location-1',
      type: 'diagram',
      filename: 'pineal-gland-location.svg',
      title: 'Pineal Gland Location',
      description: 'Sagittal view showing pineal gland in relation to third ventricle',
    },
    {
      id: 'melatonin-pathway-1',
      type: 'diagram',
      filename: 'melatonin-synthesis-pathway.svg',
      title: 'Melatonin Synthesis',
      description: 'Biochemical pathway from tryptophan to melatonin',
    },
  ],

  citations: [
    {
      id: 'arendt-melatonin',
      type: 'article',
      title: 'Melatonin and the Mammalian Pineal Gland',
      authors: ['Arendt, J'],
      source: 'Chapman and Hall',
      license: 'Copyrighted',
    },
    {
      id: 'bruce-circadian',
      type: 'article',
      title: 'Circadian Rhythms and Sleep',
      source: 'Principles and Practice of Sleep Medicine',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'anatomy-hypothalamus', targetType: 'structure', relationship: 'related', label: 'Hypothalamus (SCN)' },
    { targetId: 'physiology-circadian-rhythm', targetType: 'pathway', relationship: 'related', label: 'Circadian Rhythm' },
    { targetId: 'pathology-sleep-disorders', targetType: 'condition', relationship: 'see-also', label: 'Sleep Disorders' },
    { targetId: 'pathology-pineal-tumors', targetType: 'condition', relationship: 'see-also', label: 'Pineal Tumors' },
  ],

  tags: {
    systems: ['endocrine', 'nervous'],
    structures: ['FMA:62033', 'pineal gland', 'epiphysis'],
    topics: ['anatomy', 'chronobiology'],
    keywords: ['pineal gland', 'melatonin', 'circadian rhythm', 'sleep', 'third eye'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'psychiatry'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
