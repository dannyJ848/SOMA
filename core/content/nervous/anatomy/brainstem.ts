/**
 * Brainstem - Comprehensive Anatomy Content
 *
 * Complete coverage of midbrain, pons, and medulla oblongata including
 * cranial nerve nuclei, ascending/descending tracts, and reticular formation.
 */

import { EducationalContent } from '../../types';

export const brainstemContent: EducationalContent = {
  id: 'anatomy-brainstem',
  type: 'structure',
  name: 'Brainstem',
  alternateNames: ['Brain stem', 'Truncus encephali'],
  fmaId: 'FMA:79876',

  levels: {
    1: {
      level: 1,
      summary: 'The brainstem connects your brain to your spinal cord and controls basic life functions like breathing and heart rate.',
      explanation: `The brainstem is like the trunk of your brain, connecting your thinking brain to your spinal cord. It controls things you don't have to think about:

- **Breathing**: It automatically controls how fast and deep you breathe
- **Heart rate**: It keeps your heart beating at the right speed
- **Blood pressure**: It helps control how hard your blood pushes through your vessels
- **Swallowing and coughing**: It controls these reflexes
- **Sleep and wakefulness**: It helps you wake up and fall asleep
- **Balance**: It helps you stay upright

The brainstem has three parts:
1. **Midbrain** (at the top): Helps with eye movement and hearing
2. **Pons** (in the middle): Like a bridge connecting parts of the brain
3. **Medulla** (at the bottom): Controls breathing and heart rate`,
      keyTerms: [
        { term: 'brainstem', definition: 'The lower part of the brain that connects to the spinal cord' },
        { term: 'reflex', definition: 'An automatic response you don\'t have to think about' },
        { term: 'vital functions', definition: 'Body activities essential for life, like breathing' },
      ],
      analogies: [
        'The brainstem is like the autopilot of an airplane - it handles essential functions automatically.',
        'It\'s like the trunk of a tree that holds up all the branches (the rest of the brain).',
      ],
    },
    2: {
      level: 2,
      summary: 'The brainstem comprises the midbrain, pons, and medulla oblongata, containing cranial nerve nuclei, ascending and descending tracts, and the reticular formation for arousal and autonomic control.',
      explanation: `The brainstem extends from the diencephalon to the spinal cord, passing through the foramen magnum.

**Midbrain (Mesencephalon):**
- *Cerebral peduncles*: Contain corticospinal and corticobulbar tracts
- *Substantia nigra*: Dopamine production (Parkinson's disease when damaged)
- *Red nucleus*: Motor coordination
- *Superior colliculus*: Visual reflexes
- *Inferior colliculus*: Auditory processing
- *Cranial nerves*: III (oculomotor), IV (trochlear)

**Pons:**
- *Basis pontis*: Contains pontine nuclei (cortex → cerebellum relay)
- *Tegmentum*: Contains ascending tracts and nuclei
- *Middle cerebellar peduncle*: Connects pons to cerebellum
- *Cranial nerves*: V (trigeminal), VI (abducens), VII (facial), VIII (vestibulocochlear)

**Medulla Oblongata:**
- *Pyramids*: Corticospinal tracts (decussate here)
- *Olives*: Inferior olivary nucleus (climbing fibers to cerebellum)
- *Gracile and cuneate nuclei*: Dorsal column sensory relay
- *Vital centers*: Respiratory, cardiovascular, vomiting
- *Cranial nerves*: IX (glossopharyngeal), X (vagus), XI (accessory), XII (hypoglossal)

**Reticular Formation:**
- Arousal and consciousness
- Ascending reticular activating system (ARAS)
- Modulates pain, posture, muscle tone`,
      keyTerms: [
        { term: 'midbrain', definition: 'The uppermost part of the brainstem, contains superior and inferior colliculi' },
        { term: 'pons', definition: 'The middle part of the brainstem, acts as a bridge to the cerebellum', pronunciation: 'ponz' },
        { term: 'medulla oblongata', definition: 'The lowest part of the brainstem, controls vital functions', pronunciation: 'meh-DOOL-ah ob-long-GAH-tah' },
        { term: 'reticular formation', definition: 'A network of neurons in the brainstem involved in arousal and vital functions' },
      ],
    },
    3: {
      level: 3,
      summary: 'The brainstem contains organized nuclei and tracts at each level, with cranial nerve nuclei arranged in functional columns and the reticular formation providing modulatory control of arousal, pain, and autonomic function.',
      explanation: `**Midbrain:**

*Tectum (Roof):*
- Superior colliculus: Visual saccade control, superficial visuotopic map
- Inferior colliculus: Auditory relay to MGN
- Pretectal area: Pupillary light reflex

*Tegmentum:*
- Red nucleus: Rubrospinal tract origin
- Substantia nigra: Pars compacta (dopamine), pars reticulata (output)
- Ventral tegmental area (VTA): Reward circuitry
- Periaqueductal gray (PAG): Pain modulation, defensive behaviors
- CN III, IV nuclei

*Cerebral Peduncles:*
- Corticospinal, corticobulbar, corticopontine fibers

**Pons:**

*Basis Pontis (Ventral):*
- Pontine nuclei: Corticopontocerebellar pathway
- Longitudinal fibers (corticospinal, corticobulbar)
- Transverse fibers → Middle cerebellar peduncle

*Tegmentum:*
- CN V motor and sensory nuclei
- CN VI nucleus (abducens)
- CN VII nucleus (facial motor, parasympathetic)
- CN VIII nuclei (cochlear, vestibular)
- Superior olivary complex: Sound localization
- Locus coeruleus: Norepinephrine, arousal
- Raphe nuclei: Serotonin

**Medulla:**

*Closed Medulla (Caudal):*
- Pyramids (corticospinal tracts)
- Pyramidal decussation: 85-90% of fibers cross
- Gracile/cuneate nuclei and fasciculi
- Internal arcuate fibers → Medial lemniscus
- Spinothalamic tract lateral

*Open Medulla (Rostral):*
- Inferior olivary nucleus (climbing fibers)
- Hypoglossal nucleus (CN XII)
- Dorsal motor nucleus of vagus
- Nucleus ambiguus: CN IX, X, XI motor
- Solitary nucleus: Visceral sensation, taste
- Area postrema: Chemoreceptor trigger zone

**Cranial Nerve Nuclei Columns:**
- Somatic motor: CN III, IV, VI, XII
- Branchial motor: CN V, VII, IX, X, XI
- Visceral motor: CN III, VII, IX, X
- General sensory: CN V
- Special sensory: CN VIII (vestibular, cochlear)
- Visceral sensory: CN VII, IX, X (solitary nucleus)`,
      keyTerms: [
        { term: 'periaqueductal gray', definition: 'Midbrain region surrounding cerebral aqueduct, involved in pain modulation' },
        { term: 'locus coeruleus', definition: 'Pontine nucleus that produces norepinephrine, involved in arousal' },
        { term: 'nucleus ambiguus', definition: 'Medullary nucleus providing motor innervation to pharynx and larynx' },
        { term: 'pyramidal decussation', definition: 'Where corticospinal tract fibers cross in lower medulla' },
      ],
    },
    4: {
      level: 4,
      summary: 'The brainstem integrates sensorimotor function, arousal, and autonomic control through precisely organized nuclei and tracts, with lesions producing characteristic clinical syndromes based on affected structures.',
      explanation: `**Brainstem Vascular Supply:**

*Midbrain:*
- Posterior cerebral artery (PCA)
- Superior cerebellar artery (SCA)
- Posterior communicating artery
- Basilar bifurcation

*Pons:*
- Basilar artery perforators
- Anterior inferior cerebellar artery (AICA)
- Superior cerebellar artery (SCA)

*Medulla:*
- Vertebral artery
- Posterior inferior cerebellar artery (PICA)
- Anterior spinal artery

**Classic Brainstem Syndromes:**

*Midbrain Syndromes:*
- Weber: CN III + contralateral hemiparesis (peduncle)
- Benedikt: CN III + contralateral tremor/ataxia (red nucleus)
- Claude: CN III + contralateral ataxia (SCP)
- Parinaud: Upgaze palsy, light-near dissociation (pretectal)

*Pontine Syndromes:*
- Millard-Gubler: CN VI, VII + contralateral hemiparesis
- Foville: Horizontal gaze palsy + CN VII + contralateral hemiparesis
- Locked-in: Bilateral ventral pons, aware but only vertical eye movement/blink
- Lateral pontine: CN V, VII, VIII + cerebellar signs (AICA)

*Medullary Syndromes:*
- Lateral medullary (Wallenberg): PICA/vertebral
  - Ipsilateral: Horner, facial sensory loss, ataxia, dysphagia, vertigo
  - Contralateral: Body pain/temperature loss
- Medial medullary (Dejerine): Anterior spinal artery
  - Ipsilateral: CN XII palsy
  - Contralateral: Hemiparesis, vibration/position loss

**Reticular Formation Functions:**

*Ascending Reticular Activating System:*
- Pedunculopontine and laterodorsal tegmental nuclei (ACh)
- Locus coeruleus (NE)
- Raphe nuclei (5-HT)
- Ventral tegmental area (DA)
- Tuberomammillary nucleus (histamine)
- Projects to thalamus and cortex

*Descending Systems:*
- Respiratory centers: Pre-Botzinger complex, pneumotaxic, apneustic
- Cardiovascular centers: Nucleus ambiguus, CVLM, RVLM
- Reticulospinal tracts: Posture and locomotion

**Brainstem Reflexes (Brain Death Testing):**
- Pupillary light reflex: CN II, III
- Corneal reflex: CN V, VII
- Vestibulo-ocular reflex: CN VIII, III, VI
- Gag reflex: CN IX, X
- Cough reflex: CN X
- Apnea test: Respiratory centers`,
      keyTerms: [
        { term: 'Wallenberg syndrome', definition: 'Lateral medullary syndrome from PICA or vertebral artery occlusion' },
        { term: 'locked-in syndrome', definition: 'Bilateral ventral pontine lesion with preserved consciousness but only vertical eye/blink movement' },
        { term: 'Weber syndrome', definition: 'CN III palsy with contralateral hemiparesis from midbrain lesion' },
        { term: 'ascending reticular activating system', definition: 'Brainstem network maintaining wakefulness and arousal' },
      ],
      clinicalNotes: 'Brainstem lesion localization: Identify cranial nerve level (III/IV = midbrain, V-VIII = pons, IX-XII = medulla), then determine medial vs lateral (medial = motor tract + medial structures; lateral = sensory + lateral structures). Crossed findings (ipsilateral CN, contralateral tract) confirm brainstem level.',
    },
    5: {
      level: 5,
      summary: 'The brainstem is essential for life, with clinical applications in brain death determination, locked-in syndrome recognition, and understanding coma and disorders of consciousness.',
      explanation: `**Advanced Brainstem Neuroscience:**

**Arousal and Consciousness:**
- Reticular activating system lesions → Coma
- Arousal pathways: Cholinergic, monoaminergic, orexinergic
- Thalamocortical vs cortico-cortical consciousness theories
- Minimally conscious state: Preserved arousal with fluctuating awareness

**Respiratory Control:**
- Pre-Botzinger complex: Inspiratory rhythm generator
- Botzinger complex: Expiratory neurons
- Retrotrapezoid nucleus: CO2 sensing
- Central sleep apnea: Medullary dysfunction
- Cheyne-Stokes: Bilateral cortical or cardiac

**Cardiovascular Control:**
- Nucleus tractus solitarius (NTS): Baroreceptor input
- Caudal ventrolateral medulla (CVLM): GABAergic inhibitory
- Rostral ventrolateral medulla (RVLM): Sympathetic output
- Nucleus ambiguus: Cardiac vagal neurons
- Orthostatic hypotension: Autonomic failure

**Clinical Applications:**

*Brain Death Determination:*
- Prerequisite: Known cause, exclude confounders
- Clinical exam: No brainstem reflexes
- Apnea test: No respiratory drive with pCO2 > 60
- Ancillary tests: EEG, cerebral blood flow

*Locked-In Syndrome:*
- Preserved consciousness
- Only vertical eye movement, blink
- Basilar artery thrombosis
- Differentiate from coma

*Central Sleep Apnea:*
- Cheyne-Stokes: Heart failure, high altitude
- Ondine's curse: Congenital central hypoventilation
- Opioid-induced: Respiratory center depression

*Brainstem Tumors:*
- Diffuse intrinsic pontine glioma (DIPG): Children, poor prognosis
- Brainstem glioma: Variable location
- Vestibular schwannoma: CPA, CN VIII compression

**Neuroimaging:**
- MRI with thin cuts through posterior fossa
- DWI for acute stroke
- MRA/CTA for vertebrobasilar circulation
- Susceptibility imaging for hemorrhage

**Neuromonitoring:**
- BAEP: Brainstem auditory evoked potentials
- SSEP: Monitor medial lemniscus
- MEP: Monitor corticospinal tract
- Intraoperative cranial nerve monitoring

**Research Frontiers:**
- Brainstem connectomics
- Circuit-level understanding of arousal
- Novel therapies for brainstem glioma
- Optogenetic dissection of respiratory rhythm`,
      keyTerms: [
        { term: 'brain death', definition: 'Irreversible cessation of all brain functions including brainstem' },
        { term: 'pre-Botzinger complex', definition: 'Medullary kernel generating inspiratory rhythm' },
        { term: 'DIPG', definition: 'Diffuse intrinsic pontine glioma, aggressive pediatric brainstem tumor' },
        { term: 'BAEP', definition: 'Brainstem auditory evoked potentials, test of auditory pathway' },
      ],
      clinicalNotes: `Brain death determination checklist:
1. Known cause of coma
2. Exclude: Hypothermia (<36C), drugs, severe metabolic derangement
3. Two clinical exams (timing per local law)
4. All brainstem reflexes absent
5. Apnea test positive (no drive at pCO2 > 60)
6. Consider ancillary test if clinical exam cannot be completed

Posterior fossa stroke: Think PICA, AICA, SCA, basilar. Rapid progression to obtundation from swelling/hydrocephalus. Consider EVD, decompressive surgery.`,
    },
  },

  media: [
    {
      id: 'brainstem-3d',
      type: '3d-model',
      filename: 'brainstem.glb',
      title: 'Interactive 3D Brainstem',
      description: 'Rotatable model showing midbrain, pons, medulla, and cranial nerve attachments',
    },
    {
      id: 'brainstem-cross-sections',
      type: 'diagram',
      filename: 'brainstem_sections.svg',
      title: 'Brainstem Cross-Sections',
      description: 'Serial cross-sections at each level showing internal structure',
    },
  ],

  citations: [
    {
      id: 'haines-neuroanatomy',
      type: 'textbook',
      title: 'Neuroanatomy in Clinical Context',
      authors: ['Haines DE'],
      source: 'Wolters Kluwer',
    },
  ],

  crossReferences: [
    { targetId: 'anatomy-cranial-nerves', targetType: 'structure', relationship: 'related', label: 'Cranial Nerves' },
    { targetId: 'anatomy-cerebellum', targetType: 'structure', relationship: 'related', label: 'Cerebellum' },
    { targetId: 'anatomy-spinal-cord', targetType: 'structure', relationship: 'child', label: 'Spinal Cord' },
    { targetId: 'physiology-sensory-pathways', targetType: 'pathway', relationship: 'see-also', label: 'Sensory Pathways' },
  ],

  tags: {
    systems: ['nervous'],
    structures: ['FMA:79876', 'FMA:61993', 'FMA:67943', 'FMA:62004'],
    topics: ['anatomy', 'neuroanatomy', 'brainstem'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['neurology', 'surgery'] },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default brainstemContent;
