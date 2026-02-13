/**
 * Vertigo and Vestibular Disorders - Comprehensive Educational Content
 *
 * Covers vertigo pathophysiology, differential diagnosis, and management.
 */

import { EducationalContent } from '../../../types';

export const vertigo: EducationalContent = {
  id: 'ent-vertigo',
  type: 'condition',
  name: 'Vertigo and Vestibular Disorders',
  alternateNames: ['Dizziness', 'Balance Disorders', 'Vestibular Dysfunction'],

  levels: {
    1: {
      level: 1,
      summary: 'Vertigo is a spinning feeling, like the room is moving around you, caused by problems with your inner ear or brain balance system.',
      explanation: `Have you ever spun around really fast and then stopped? That dizzy, spinning feeling you get is similar to vertigo! But with vertigo, it happens even when you are not spinning.

**What Does Vertigo Feel Like?**
- The room seems to spin around you
- You feel like you are moving when you are standing still
- You might feel sick to your stomach
- It can be hard to walk straight

**Why Does It Happen?**
Your inner ear has a special balance system that tells your brain which way is up and if you are moving. When something goes wrong with this system, you feel dizzy.

Common causes include:
- **Ear crystals out of place (BPPV):** Tiny crystals in your ear move where they should not be
- **Inner ear infection:** Germs make your balance system swollen
- **Meniere's disease:** Extra fluid builds up in your inner ear

**The Good News:**
- Most vertigo goes away on its own or with treatment
- Doctors can often fix it with special head movements
- It is usually not a sign of something serious`,
      keyTerms: [
        { term: 'vertigo', definition: 'A spinning or whirling feeling when you are not actually moving' },
        { term: 'inner ear', definition: 'The deep part of your ear that helps you hear and keep your balance' },
        { term: 'balance', definition: 'Being able to stand and move without falling over' },
        { term: 'dizzy', definition: 'Feeling unsteady or like things are spinning' },
      ],
      analogies: [
        'Your inner ear works like a carpenter level, telling your brain if you are straight or tilted.',
        'Vertigo is like being on a merry-go-round that only you can feel - your body thinks you are spinning when you are not.',
      ],
      examples: [
        'When you get off a spinning ride at a fair, you feel dizzy for a few seconds - that is what vertigo feels like, but it lasts longer.',
        'Some people get vertigo when they turn over in bed, because crystals in their ear move to the wrong spot.',
      ],
    },
    2: {
      level: 2,
      summary: 'Vertigo is an illusion of rotational movement caused by vestibular system dysfunction, classified as peripheral (inner ear) or central (brain), with distinct causes and treatments.',
      explanation: `Vertigo is one of the most common complaints in medicine. Understanding the vestibular system helps explain why it occurs.

**The Vestibular System:**
Your inner ear contains:
1. **Three semicircular canals:** Detect rotation (turning your head)
2. **Utricle and saccule (otolith organs):** Detect linear movement and gravity

These organs send signals to your brain about your position and movement. When signals do not match what your eyes see, you feel vertigo.

**Types of Vertigo:**

**Peripheral Vertigo (inner ear):**
- Usually more severe spinning
- Often triggered by head position
- May have hearing changes or tinnitus
- Typically improves over days to weeks

**Central Vertigo (brain):**
- Less intense but more constant
- Often accompanied by other neurological symptoms
- Caused by stroke, tumors, or multiple sclerosis
- Requires immediate evaluation

**Common Causes:**

| Condition | Features |
|-----------|----------|
| BPPV | Brief spells with position change |
| Vestibular neuritis | Days of severe vertigo after viral illness |
| Meniere's disease | Episodes with hearing loss, tinnitus, ear fullness |
| Migraine | Vertigo with headache or sensitivity to light |
| Stroke | Sudden onset with neurological signs |

**Evaluation:**
- History is key: duration, triggers, associated symptoms
- Neurological exam
- Dix-Hallpike test for BPPV
- Hearing test if hearing symptoms
- MRI if central causes suspected

**Treatment:**
- BPPV: Repositioning maneuvers (Epley)
- Vestibular neuritis: Steroids, then vestibular rehabilitation
- Meniere's: Low-salt diet, diuretics
- Medications: Short-term only (meclizine, diazepam)`,
      keyTerms: [
        { term: 'peripheral vertigo', definition: 'Vertigo caused by inner ear problems, usually more intense but self-limited' },
        { term: 'central vertigo', definition: 'Vertigo caused by brain problems, often with other neurological symptoms' },
        { term: 'BPPV', definition: 'Benign paroxysmal positional vertigo - brief spinning triggered by head position changes' },
        { term: 'vestibular neuritis', definition: 'Inflammation of the balance nerve causing severe vertigo lasting days' },
        { term: 'semicircular canals', definition: 'Three curved tubes in the inner ear that detect rotational head movements' },
        { term: 'Epley maneuver', definition: 'A series of head movements to treat BPPV by repositioning ear crystals' },
      ],
      analogies: [
        'The semicircular canals work like fluid-filled levels - when you turn your head, the fluid moves and tells your brain which way you turned.',
        'BPPV is like sand getting into machinery - small crystals get into the wrong part of the ear and cause malfunction.',
      ],
    },
    3: {
      level: 3,
      summary: 'Vertigo results from asymmetric vestibular input, with peripheral causes involving labyrinthine or vestibular nerve pathology, while central causes affect brainstem or cerebellar vestibular pathways, distinguished by clinical features and bedside testing.',
      explanation: `Accurate diagnosis of vertigo depends on understanding vestibular anatomy and applying systematic clinical assessment.

**Vestibular Anatomy and Physiology:**

*Peripheral Vestibular System:*
- Semicircular canals (3): Angular acceleration
  - Lateral (horizontal): Yaw rotation
  - Anterior (superior): Pitch and roll
  - Posterior: Pitch and roll
- Otolith organs:
  - Utricle: Horizontal linear acceleration, head tilt
  - Saccule: Vertical linear acceleration
- Vestibular nerve (CN VIII): Projects to vestibular nuclei

*Central Vestibular System:*
- Vestibular nuclei (4): Medial, lateral, superior, inferior
- Vestibuloocular reflex (VOR) pathways
- Vestibulocerebellar connections
- Vestibulospinal tracts

**Distinguishing Peripheral vs. Central:**

| Feature | Peripheral | Central |
|---------|-----------|---------|
| Onset | Sudden, severe | Gradual or sudden |
| Nystagmus | Horizontal-torsional, unidirectional | Any direction, may change |
| Suppression by fixation | Yes | No |
| Hearing loss | May be present | Rare |
| Neurological signs | Absent | Present |
| Head impulse test | Abnormal | Normal (or abnormal if brainstem) |
| Skew deviation | Absent | May be present |

**Key Clinical Tests:**

*HINTS Exam (for acute vestibular syndrome):*
1. Head Impulse: Catch-up saccade = peripheral
2. Nystagmus: Direction-changing = central
3. Test of Skew: Vertical misalignment = central

*Dix-Hallpike Test (for BPPV):*
- Position: Supine with head turned 45 degrees and extended
- Positive: Upbeating, torsional nystagmus after latency
- Indicates posterior canal BPPV (most common)

**Common Peripheral Causes:**

*BPPV:*
- Otoconia displaced into semicircular canal
- Posterior canal 80-90%, lateral 10-15%, anterior rare
- Treat with canalith repositioning (Epley, BBQ roll)

*Vestibular Neuritis:*
- Viral or post-viral inflammation
- Superior division most commonly affected
- Acute phase: Horizontal nystagmus away from lesion
- Treat: Steroids acutely, vestibular rehabilitation

*Meniere's Disease:*
- Endolymphatic hydrops
- Classic triad: Episodic vertigo, fluctuating SNHL, tinnitus
- Add aural fullness = tetrad
- Treat: Salt restriction, diuretics, consider intratympanic therapy

**Central Causes Requiring Urgent Evaluation:**
- Posterior circulation stroke (AICA, PICA, vertebral)
- Cerebellar hemorrhage
- Demyelinating disease (MS)
- Cerebellopontine angle tumors`,
      keyTerms: [
        { term: 'nystagmus', definition: 'Rhythmic, involuntary eye movements; fast phase defines direction' },
        { term: 'HINTS exam', definition: 'Head Impulse, Nystagmus, Test of Skew - bedside exam to differentiate peripheral from central vertigo' },
        { term: 'vestibuloocular reflex (VOR)', definition: 'Reflex stabilizing gaze during head movement via vestibular-oculomotor connections' },
        { term: 'otoconia', definition: 'Calcium carbonate crystals in otolith organs that can become displaced in BPPV' },
        { term: 'endolymphatic hydrops', definition: 'Excessive endolymph in the membranous labyrinth, underlying Meniere disease' },
        { term: 'canalith repositioning', definition: 'Maneuvers to move displaced otoconia out of semicircular canals in BPPV' },
      ],
      clinicalNotes: 'The HINTS exam is more sensitive than early MRI for posterior circulation stroke in acute vestibular syndrome. A "dangerous" HINTS pattern (normal head impulse, direction-changing nystagmus, or skew deviation) warrants urgent neuroimaging. Avoid vestibular suppressants beyond acute phase as they impair central compensation.',
    },
    4: {
      level: 4,
      summary: 'Vestibular disorders involve disruption of peripheral mechanotransduction, vestibular nerve transmission, or central integration, with pathophysiology ranging from cupulolithiasis/canalithiasis in BPPV to endolymphatic hydrops in Meniere disease and inflammatory or ischemic damage to vestibular pathways.',
      explanation: `Advanced understanding of vertigo requires integration of vestibular physiology, neuro-ophthalmology, and clinical pharmacology.

**Vestibular Transduction Mechanisms:**

*Hair Cell Function:*
- Kinocilium and stereocilia deflection
- Tip links gate mechanotransduction channels
- Resting discharge rate ~90 spikes/sec
- Deflection toward kinocilium increases firing
- Push-pull organization between paired canals

*Cupula Mechanics:*
- Gelatinous structure sealing ampulla
- Same density as endolymph (neutral buoyancy)
- Angular acceleration causes cupular deflection
- Time constant ~7 seconds

*Otolith Mechanics:*
- Otoconia denser than endolymph
- Respond to gravity and linear acceleration
- Striola: Region of hair cell polarity reversal

**BPPV Pathophysiology:**

*Canalithiasis (most common):*
- Free-floating otoconia in canal
- Produces brief (<1 min) positional vertigo
- Nystagmus direction depends on canal affected:
  - Posterior: Upbeat-torsional
  - Lateral: Horizontal (geotropic or apogeotropic)
  - Anterior: Downbeat-torsional (rare)

*Cupulolithiasis:*
- Otoconia adherent to cupula
- Persistent nystagmus in provoking position
- Treatment more challenging

**Meniere Disease Pathophysiology:**

- Endolymphatic hydrops: Distension of membranous labyrinth
- Rupture of Reissner membrane may cause attacks
- Mixing of endolymph and perilymph
- Potassium intoxication of vestibular nerve
- Progressive hair cell loss over time

**Vestibular Neuritis:**
- HSV-1 reactivation hypothesized
- Superior vestibular nerve predominantly affected
- Ganglion and nerve inflammation
- Partial recovery typical; some permanent deficit

**Central Vestibular Syndromes:**

*Cerebellar Stroke:*
- PICA: Lateral medullary (Wallenberg) + cerebellar
- AICA: Labyrinth, lateral pons, cerebellum
- Superior cerebellar artery: Dentate, superior peduncle

*Vestibular Migraine:*
- Leading cause of episodic vertigo
- May occur without headache
- Variable duration (seconds to days)
- Central and peripheral features possible

**Vestibular Testing:**

*Videonystagmography (VNG):*
- Oculomotor testing (saccades, pursuit, OKN)
- Positional testing
- Caloric testing (30C and 44C water)
- Unilateral weakness >25% = peripheral hypofunction

*Video Head Impulse Test (vHIT):*
- Tests each semicircular canal
- Quantifies VOR gain
- Detects covert saccades
- Can identify bilateral vestibulopathy

*Vestibular Evoked Myogenic Potentials (VEMPs):*
- cVEMP: Saccular/inferior vestibular nerve
- oVEMP: Utricular/superior vestibular nerve
- Useful for Meniere's, superior canal dehiscence

*Electrocochleography (ECoG):*
- Summating potential/action potential ratio
- Elevated in endolymphatic hydrops

**Pharmacotherapy:**

*Acute Vestibular Suppressants:*
- Antihistamines: Meclizine (H1 antagonist)
- Benzodiazepines: Diazepam (GABA agonist)
- Anticholinergics: Scopolamine
- Limit to 48-72 hours to avoid delayed compensation

*Meniere's Management:*
- Betahistine (H3 antagonist, H1 agonist) - not FDA approved in US
- Intratympanic gentamicin (chemical labyrinthectomy)
- Intratympanic steroids (Meniere's and SSNHL)`,
      keyTerms: [
        { term: 'canalithiasis', definition: 'Free-floating otoconia within a semicircular canal causing BPPV' },
        { term: 'cupulolithiasis', definition: 'Otoconia adherent to the cupula causing persistent positional vertigo' },
        { term: 'vestibular compensation', definition: 'Central nervous system adaptation to unilateral vestibular loss' },
        { term: 'vestibular migraine', definition: 'Episodic vestibular symptoms attributable to migraine pathophysiology' },
        { term: 'caloric testing', definition: 'VNG test using temperature to stimulate lateral semicircular canals' },
        { term: 'intratympanic gentamicin', definition: 'Chemical labyrinthectomy for intractable Meniere disease, ablating vestibular function' },
      ],
      clinicalNotes: 'Bilateral vestibulopathy is increasingly recognized, often from ototoxicity or bilateral Meniere disease. Patients have oscillopsia (blurred vision with head movement) and ataxia in dark. vHIT shows bilateral reduced VOR gains. No effective pharmacotherapy; vestibular rehabilitation essential.',
    },
    5: {
      level: 5,
      summary: 'Contemporary vestibular medicine integrates advanced imaging (3T MRI hydrops protocols), quantitative vestibular testing, molecular targets for hair cell regeneration, and surgical innovations including vestibular implants for bilateral vestibulopathy.',
      explanation: `Frontier vestibular research addresses molecular mechanisms, advanced diagnostics, and novel therapeutics.

**Advanced Imaging:**

*Endolymphatic Hydrops Imaging:*
- 3T MRI with delayed gadolinium
- IV gadolinium 4-24 hours before imaging
- FLAIR or REAL-IR sequences
- Perilymph enhances; endolymph remains dark
- Grades: None, mild, significant
- Correlates with clinical Meniere's

*4D-MRI:*
- Dynamic imaging of vestibular organs
- Research application currently
- May visualize hydrops changes over time

**Genetic Vestibular Disorders:**

| Gene | Condition | Features |
|------|-----------|----------|
| COCH | DFNA9 | Progressive SNHL, vestibular loss |
| OTOF | DFNB9 | Auditory neuropathy |
| SLC26A4 | Pendred/EVA | Enlarged vestibular aqueduct |
| MYO7A | Usher 1B | Deaf-blindness, vestibular |
| WFS1 | Wolfram | DIDMOAD syndrome |

**Hair Cell Regeneration Research:**

*Molecular Targets:*
- Atoh1: Master regulator of hair cell differentiation
- Notch inhibition: Promotes transdifferentiation
- Lgr5+ progenitors: Potential regenerative capacity
- Wnt pathway: Proliferation signals

*Current Trials:*
- Gene therapy: AAV-Atoh1 delivery
- Small molecules: Gamma-secretase inhibitors
- Combined approaches

**Vestibular Implants:**

*Concept:*
- Restore vestibular function in bilateral vestibulopathy
- Gyroscope sensors detect head motion
- Electrical stimulation of vestibular nerve branches
- Analogous to cochlear implant for hearing

*Challenges:*
- Three-dimensional motion sensing
- Cross-talk between electrodes
- Preservation of residual function
- Central adaptation

*Clinical Progress:*
- Investigational devices in trials
- Improved balance in bilateral vestibular loss
- Reduced oscillopsia
- Years from widespread clinical use

**Emerging Therapeutics:**

*Vestibular Prehabilitation:*
- Pre-surgery vestibular exercises
- Improved outcomes after planned vestibular ablation
- Reduces acute vestibular symptoms

*Virtual Reality Rehabilitation:*
- Immersive vestibular training
- Graded exposure to provocative stimuli
- Gaze stabilization exercises
- Home-based programs

*Pharmacological Prevention:*
- Otoprotection during cisplatin
- Sodium thiosulfate
- Dexamethasone
- Antioxidants

**Surgical Advances:**

*Superior Canal Dehiscence Repair:*
- Transmastoid vs. middle fossa approach
- Plugging vs. resurfacing
- Outcomes: 85-95% symptom improvement
- Hearing preservation variable

*Endolymphatic Sac Surgery:*
- Decompression or shunt
- Controversial efficacy data
- Alternative to ablative procedures

*Vestibular Neurectomy:*
- Selective section of vestibular nerve
- Preserved hearing in 90%+
- Reserved for intractable Meniere's
- Requires craniotomy

*Labyrinthectomy:*
- Complete ablation of vestibular function
- Sacrifices hearing
- For non-serviceable hearing + intractable vertigo

**Vestibular Network Neuroscience:**

- Resting-state fMRI in chronic vestibulopathy
- Network reorganization after unilateral loss
- Predictive biomarkers for compensation
- Targets for neuromodulation

**Outcome Measures:**

| Domain | Measure |
|--------|---------|
| Symptoms | Dizziness Handicap Inventory (DHI) |
| Function | Functional Gait Assessment |
| Balance | Berg Balance Scale |
| Falls | Falls Efficacy Scale |
| Quality of Life | SF-36, EQ-5D |`,
      keyTerms: [
        { term: 'vestibular implant', definition: 'Investigational device providing electrical stimulation to restore vestibular function in bilateral vestibulopathy' },
        { term: 'superior canal dehiscence', definition: 'Absent bone over superior semicircular canal creating third mobile window with vestibular and auditory symptoms' },
        { term: 'oscillopsia', definition: 'Illusion of environmental motion during head movement, typical of bilateral vestibulopathy' },
        { term: 'hydrops imaging', definition: 'MRI technique using delayed gadolinium to visualize endolymphatic hydrops' },
        { term: 'vestibular prehabilitation', definition: 'Pre-surgical vestibular exercises to optimize post-operative compensation' },
      ],
      clinicalNotes: `**Clinical Pearls:**
1. HINTS exam in acute vestibular syndrome: Normal head impulse + direction-changing nystagmus = stroke until proven otherwise
2. Vertical nystagmus is always concerning for central pathology
3. Bilateral vestibular loss: Check for gentamicin exposure, consider genetic testing
4. Superior canal dehiscence: Tullio phenomenon (vertigo with loud sounds), autophony, low-frequency CHL
5. Post-Meniere's surgery: Intratympanic gentamicin is effective but risks profound hearing loss in 20-30%
6. Vestibular rehabilitation is first-line for chronic vestibular hypofunction - evidence-based benefit
7. MRI with gadolinium 4 hours delayed: Visualizes hydrops in definite Meniere's ~95% sensitivity`,
    },
  },

  media: [
    {
      id: 'vestibular-anatomy',
      type: 'diagram',
      filename: 'vestibular-anatomy.svg',
      title: 'Vestibular System Anatomy',
      description: 'Semicircular canals and otolith organs',
    },
    {
      id: 'dix-hallpike',
      type: 'diagram',
      filename: 'dix-hallpike-maneuver.svg',
      title: 'Dix-Hallpike Maneuver',
      description: 'Step-by-step positioning for BPPV testing',
    },
    {
      id: 'epley-maneuver',
      type: 'diagram',
      filename: 'epley-maneuver.svg',
      title: 'Epley Maneuver',
      description: 'Canalith repositioning procedure for posterior canal BPPV',
    },
  ],

  citations: [
    {
      id: 'cummings-vestibular',
      type: 'textbook',
      title: 'Vestibular Disorders',
      source: 'Cummings Otolaryngology: Head and Neck Surgery',
      chapter: 'Section III - Otology',
    },
    {
      id: 'baloh-vertigo',
      type: 'textbook',
      title: 'Baloh and Honrubia\'s Clinical Neurophysiology of the Vestibular System',
      authors: ['Baloh RW', 'Kerber KA'],
      source: 'Oxford University Press',
    },
  ],

  crossReferences: [
    { targetId: 'ent-ear-anatomy', targetType: 'structure', relationship: 'related', label: 'Ear Anatomy' },
    { targetId: 'ent-hearing-physiology', targetType: 'topic', relationship: 'related', label: 'Hearing Physiology' },
    { targetId: 'ent-tinnitus', targetType: 'condition', relationship: 'related', label: 'Tinnitus' },
  ],

  tags: {
    systems: ['vestibular', 'nervous'],
    topics: ['otology', 'neurotology', 'neurology'],
    keywords: ['vertigo', 'dizziness', 'BPPV', 'Meniere', 'vestibular', 'balance'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'neurology', 'medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default vertigo;
