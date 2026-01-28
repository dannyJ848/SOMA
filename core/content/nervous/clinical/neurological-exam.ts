/**
 * Neurological Examination - Clinical Educational Content
 *
 * Systematic approach to the neurological examination including
 * mental status, cranial nerves, motor, sensory, reflexes, and coordination.
 */

import { EducationalContent } from '../../types';

export const neurologicalExam: EducationalContent = {
  id: 'clinical-neurological-exam',
  type: 'concept',
  name: 'Neurological Examination',
  alternateNames: ['Neuro Exam', 'Neurological Physical Exam', 'CNS Assessment'],

  levels: {
    1: {
      level: 1,
      summary: 'A neurological exam is a set of tests doctors use to check how well your brain, nerves, and muscles are working.',
      explanation: `A neurological exam is like a check-up for your nervous system - the body\'s control center. The doctor checks different parts to make sure everything is working properly.

**What the Doctor Checks:**

1. **Brain Power (Mental Status)**
   - Asks questions like "What day is it?"
   - Tests memory by asking you to remember words
   - Checks if you know where you are

2. **Head Nerves (Cranial Nerves)**
   - Checks eye movements by having you follow a finger
   - Tests face strength by asking you to smile
   - Checks hearing and sense of smell

3. **Muscle Power (Motor System)**
   - Asks you to push against their hands
   - Checks if both sides are equally strong
   - Looks for muscle wasting or twitching

4. **Feeling (Sensory System)**
   - Uses a cotton ball or pinprick to test sensation
   - Checks if you can feel hot and cold
   - Tests vibration sense with a tuning fork

5. **Automatic Responses (Reflexes)**
   - Taps your knee with a rubber hammer
   - Checks ankle and elbow reflexes
   - Tests for normal responses

6. **Balance and Coordination**
   - Asks you to touch your nose with your finger
   - Has you walk heel-to-toe
   - Tests rapid alternating movements

Each test tells the doctor something specific about how your nerves and brain are working.`,
      keyTerms: [
        { term: 'neurological', definition: 'Relating to the nervous system (brain, spinal cord, and nerves)' },
        { term: 'cranial nerves', definition: 'The 12 pairs of nerves that come directly from the brain' },
        { term: 'reflex', definition: 'An automatic response your body makes without thinking' },
        { term: 'coordination', definition: 'How well different body parts work together smoothly' },
        { term: 'sensation', definition: 'The ability to feel things like touch, heat, or pain' },
      ],
      analogies: [
        'The neurological exam is like running diagnostics on a computer - checking each component to ensure the whole system works.',
        'Cranial nerves are like the brain\'s direct phone lines to the face, eyes, ears, and other head areas.',
        'Reflex testing is like checking if the emergency brakes on a car work automatically.',
      ],
      examples: [
        'When the doctor taps your knee and your leg kicks out, that\'s testing the knee-jerk reflex.',
        'Following a moving finger with your eyes tests cranial nerves that control eye muscles.',
        'Walking a straight line heel-to-toe tests balance and coordination.',
      ],
    },
    2: {
      level: 2,
      summary: 'The neurological examination systematically evaluates mental status, cranial nerves, motor function, sensory function, reflexes, and coordination to localize nervous system lesions.',
      explanation: `**Components of the Neurological Examination:**

**I. Mental Status Examination**
- Level of consciousness (alert, lethargic, stuporous, comatose)
- Orientation: Person, place, time, situation
- Attention and concentration: Serial 7s, spelling backward
- Memory: Immediate, recent, remote
- Language: Fluency, comprehension, repetition, naming
- Executive function: Abstraction, judgment, problem-solving

**II. Cranial Nerve Examination (12 pairs)**
- CN I: Olfaction (smell)
- CN II: Visual acuity, visual fields, fundoscopy
- CN III, IV, VI: Pupil size/reaction, extraocular movements
- CN V: Facial sensation, corneal reflex, jaw strength
- CN VII: Facial symmetry, eye closure, smile
- CN VIII: Hearing (Rinne and Weber tests)
- CN IX, X: Palate elevation, gag reflex, voice quality
- CN XI: Sternocleidomastoid and trapezius strength
- CN XII: Tongue movement and symmetry

**III. Motor Examination**
- Muscle bulk: Atrophy, hypertrophy, fasciculations
- Muscle tone: Spasticity, rigidity, flaccidity
- Muscle strength: 0-5 scale testing
  - 0: No contraction
  - 1: Flicker/trace contraction
  - 2: Active movement with gravity eliminated
  - 3: Active movement against gravity
  - 4: Active movement against some resistance
  - 5: Normal strength

**IV. Sensory Examination**
- Primary modalities:
  - Light touch (cotton)
  - Pain and temperature (pinprick)
  - Vibration (128 Hz tuning fork)
  - Position sense (proprioception)
- Cortical sensations (if primary intact):
  - Stereognosis (recognize objects by touch)
  - Graphesthesia (recognize numbers drawn on skin)
  - Two-point discrimination

**V. Reflex Examination**
- Deep tendon reflexes (DTRs):
  - Biceps (C5-6)
  - Brachioradialis (C5-6)
  - Triceps (C7)
  - Patellar (L3-4)
  - Achilles (S1)
- Graded 0-4+: 0=absent, 1+=decreased, 2+=normal, 3+=increased, 4+=clonus
- Pathological reflexes: Babinski, Hoffman, clonus

**VI. Coordination and Gait**
- Finger-to-nose and heel-to-shin tests
- Rapid alternating movements (diadochokinesia)
- Romberg test (balance with eyes closed)
- Gait assessment: Normal, heel walk, toe walk, tandem`,
      keyTerms: [
        { term: 'lesion', definition: 'An area of damage or abnormality in tissue or an organ' },
        { term: 'proprioception', definition: 'The sense of body position in space; joint position sense' },
        { term: 'clonus', definition: 'Rhythmic muscle contractions in response to sudden stretch' },
        { term: 'Babinski sign', definition: 'Extension of the big toe when the sole is stroked; indicates upper motor neuron lesion' },
        { term: 'fasciculations', definition: 'Visible, fine, spontaneous muscle twitches' },
      ],
      analogies: [
        'The neurological exam is like tracing wires in a house to find where the electrical problem is located.',
        'Testing reflexes is like plucking a guitar string - the response tells you if the "circuit" is intact.',
        'Cranial nerves are like numbered ports on a computer - each has a specific function to test.',
      ],
    },
    3: {
      level: 3,
      summary: 'A comprehensive neurological examination integrates neuroanatomical localization principles with systematic testing to identify lesion location (cortex, brainstem, spinal cord, peripheral nerve, neuromuscular junction, muscle).',
      explanation: `**Localization Principles:**

**Upper Motor Neuron vs Lower Motor Neuron Lesions:**

| Feature | Upper Motor Neuron | Lower Motor Neuron |
|---------|-------------------|-------------------|
| Weakness | Spastic (velocity-dependent) | Flaccid |
| Tone | Increased | Decreased/absent |
| Reflexes | Hyperreflexia | Hyporeflexia/areflexia |
| Babinski | Present | Absent |
| Atrophy | Mild, disuse | Severe, neurogenic |
| Fasciculations | Absent | Present |

**Neuroanatomical Localization:**

**Cerebral Cortex:**
- Focal deficits corresponding to specific cortical areas
- Hemiparesis (face, arm > leg)
- Aphasia (dominant hemisphere)
- Neglect (non-dominant hemisphere)
- Seizures possible

**Internal Capsule:**
- Dense hemiparesis (face, arm, leg equally)
- May have hemisensory loss
- No cortical signs (aphasia, neglect)

**Brainstem:**
- Cranial nerve deficits ipsilateral to lesion
- Long tract signs (motor/sensory) contralateral
- Crossed findings are hallmark
- Specific syndromes (Weber, Benedikt, Millard-Gubler)

**Spinal Cord:**
- Sensory level on trunk
- Bilateral motor/sensory deficits
- Bowel/bladder dysfunction
- Dissociated sensory loss (Brown-Sequard, syringomyelia)

**Peripheral Nerve:**
- Deficits in specific nerve distribution
- Mononeuropathy, polyneuropathy patterns
- Dermatomal vs peripheral nerve distribution

**Neuromuscular Junction:**
- Fluctuating weakness
- Fatigue with repetitive use
- Normal sensation, normal reflexes early
- Ocular, bulbar involvement common

**Muscle:**
- Proximal weakness typical
- Normal sensation, normal reflexes
- No fasciculations (vs motor neuron disease)

**Special Examination Techniques:**

**Meningeal Irritation:**
- Nuchal rigidity (neck stiffness)
- Kernig sign: Pain with knee extension when hip flexed
- Brudzinski sign: Hip/knee flexion with passive neck flexion

**Cerebellar Testing:**
- Dysmetria (overshoot on finger-to-nose)
- Dysdiadochokinesia (impaired rapid alternating movements)
- Intention tremor (worse as target approached)
- Ataxia (uncoordinated gait)
- Nystagmus (cerebellar or vestibular)

**Parkinsonism Assessment:**
- Resting tremor (4-6 Hz)
- Bradykinesia (slowness of movement)
- Muscle rigidity (cogwheel or lead-pipe)
- Postural instability`,
      keyTerms: [
        { term: 'upper motor neuron', definition: 'Motor neurons originating in the motor cortex that synapse on lower motor neurons in brainstem or spinal cord' },
        { term: 'lower motor neuron', definition: 'Motor neurons whose cell bodies are in brainstem or spinal cord and axons innervate muscles' },
        { term: 'hemiparesis', definition: 'Weakness affecting one side of the body' },
        { term: 'dissociated sensory loss', definition: 'Loss of some sensory modalities but preservation of others at the same level' },
        { term: 'dysmetria', definition: 'Impaired judgment of distance during movement; overshooting or undershooting target' },
      ],
      clinicalNotes: 'The neurological examination must be adapted based on the clinical scenario. In an unconscious patient, focus on pupillary responses, oculocephalic reflexes, motor response to pain, and breathing pattern to localize the level of dysfunction.',
    },
    4: {
      level: 4,
      summary: 'Advanced neurological examination incorporates pattern recognition for specific neurological syndromes, interpretation of subtle signs, and integration with neuroimaging and electrophysiological findings.',
      explanation: `**Pattern Recognition in Neurological Diagnosis:**

**Stroke Syndromes:**

**Middle Cerebral Artery (MCA) Stroke:**
- Dominant hemisphere: Broca\'s or Wernicke\'s aphasia, hemineglect
- Non-dominant: Hemineglect, anosognosia
- Contralateral face, arm > leg weakness
- Contralateral sensory loss
- Gaze preference toward side of lesion

**Anterior Cerebral Artery (ACA) Stroke:**
- Leg > arm weakness
- Frontal lobe signs: Abulia, grasp reflex
- Urinary incontinence

**Posterior Cerebral Artery (PCA) Stroke:**
- Homonymous hemianopia
- Memory deficits
- Visual agnosia

**Posterior Circulation Stroke:**
- Crossed signs (cranial nerve + contralateral body)
- Vertigo, nystagmus, dysarthria, dysphagia
- Ataxia, drop attacks

**Peripheral Neuropathy Patterns:**

**Distal Symmetric Polyneuropathy:**
- Stocking-glove distribution
- Longest fibers affected first
- Diabetes, alcohol, toxins common causes

**Mononeuropathy Multiplex:**
- Multiple individual nerves affected
- Vasculitis, diabetes, leprosy
- Asymmetric, stepwise progression

**Radiculopathy:**
- Follows dermatome
- Pain radiates along nerve root
- Reflex asymmetry

**Plexopathy:**
- Multiple nerves in a plexus distribution
- Brachial or lumbosacral
- Trauma, radiation, tumor

**Movement Disorder Examination:**

**Tremor Assessment:**
- Rest tremor: Parkinson disease
- Action tremor: Essential tremor, cerebellar
- Postural tremor: Physiologic, enhanced physiologic
- Intention tremor: Cerebellar
- Flapping tremor: Asterixis (metabolic encephalopathy)

**Chorea vs Dystonia vs Athetosis:**
- Chorea: Random, flowing, dance-like movements
- Dystonia: Sustained abnormal postures
- Athetosis: Slow, writhing movements

**Myoclonus Types:**
- Cortical: Focal, stimulus-sensitive
- Brainstem: Palatal myoclonus
- Spinal: Segmental, rhythmic
- Epileptic vs non-epileptic

**Neuro-ophthalmological Examination:**

**Pupil Abnormalities:**
- Holmes-Adie: Tonic pupil, light-near dissociation
- Argyll Robertson: Light-near dissociation, small irregular (neurosyphilis)
- Horner syndrome: Miosis, ptosis, anhidrosis
- CN III palsy: Mydriasis, "down and out" eye

**Nystagmus Characterization:**
- Direction of fast phase
- Gaze-evoked vs spontaneous
- Horizontal vs vertical vs rotary
- Effect of fixation (peripheral vs central)

**Optic Nerve Assessment:**
- Relative afferent pupillary defect (RAPD)
- Color desaturation
- Visual field patterns`,
      keyTerms: [
        { term: 'anosognosia', definition: 'Lack of awareness of one\'s own neurological deficit; seen in non-dominant parietal lesions' },
        { term: 'abulia', definition: 'Loss of willpower or initiative; lack of spontaneity' },
        { term: 'light-near dissociation', definition: 'Pupils that constrict to accommodation but not to light' },
        { term: 'RAPD', definition: 'Relative afferent pupillary defect (Marcus Gunn pupil); indicates asymmetric optic nerve dysfunction' },
        { term: 'chorea', definition: 'Irregular, unpredictable, flowing involuntary movements' },
      ],
      clinicalNotes: 'Subtle neurological signs can be diagnostically crucial. A positive pronator drift may be the only motor sign in a mild hemiparesis. Mirror movements in adults may indicate corticospinal tract dysfunction. Primitive reflexes (grasp, suck, snout) in adults suggest frontal lobe pathology.',
    },
    5: {
      level: 5,
      summary: 'Expert-level neurological examination includes specialized assessments for ICU patients, interpretation of paraclinical tests, research applications, and teaching methodologies for neurological examination skills.',
      explanation: `**ICU Neurological Examination:**

**Coma Examination:**
- Glasgow Coma Scale (GCS): Eye opening, verbal, motor
- Brainstem reflexes:
  - Pupillary light reflex (CN II, III)
  - Corneal reflex (CN V, VII)
  - Oculocephalic reflex (doll\'s eyes) - CN III, IV, VI, VIII
  - Oculovestibular reflex (calorics) - CN III, IV, VI, VIII
  - Gag reflex (CN IX, X)
- Respiratory patterns:
  - Cheyne-Stokes: Bilateral hemisphere, diencephalon
  - Central neurogenic hyperventilation: Midbrain
  - Apneustic: Pons
  - Ataxic: Medulla

**Brain Death Examination:**
- Prerequisites: Known cause, no CNS depressants, normal temperature
- Coma: No response to pain
- Absent brainstem reflexes
- Apnea test: No respiratory drive with PaCO2 > 60 mmHg
- Confirmatory testing: Cerebral blood flow studies, EEG

**Focused Neurological Examinations:**

**Transient Ischemic Attack (TIA):**
- ABCD2 score components
- Carotid and cardiac assessment
- Ocular findings in amaurosis fugax

**Syncope Evaluation:**
- Orthostatic vital signs
- Carotid sinus massage
- Valvular heart disease signs

**Dizziness Differentiation:**
- Vertigo (peripheral vs central)
- Presyncope (cardiovascular)
- Disequilibrium (gait/balance)
- Nonspecific dizziness (psychiatric, metabolic)

**Seizure Semiology:**
- Focal aware vs impaired awareness
- Motor vs non-motor onset
- Generalized tonic-clonic phases
- Post-ictal state characteristics

**Teaching and Assessment:**

**OSCE Design:**
- Standardized patient scenarios
- Checklist development
- Inter-rater reliability
- Feedback methodologies

**Simulation-Based Training:**
- Neurosimulation manikins
- Virtual reality applications
- Procedural simulation (lumbar puncture)

**Competency Assessment:**
- Milestones assessment (ACGME)
- Direct observation tools
- Mini-CEX (Clinical Evaluation Exercise)
- Video analysis of examination technique

**Research Applications:**

**Quantitative Measures:**
- Movement disorder rating scales (UPDRS, UHDRS)
- Cognitive batteries (MoCA, SLUMS, neuropsych testing)
- Gait analysis: Timed up-and-go, 10-meter walk
- Ataxia scales (SARA, ICARS)

**Technology Integration:**
- Smartphone apps for tremor analysis
- Wearable sensors for movement disorders
- AI-assisted gait analysis
- Telemedicine neurological examination adaptations

**Advanced Localization:**

**Spinal Cord Level Determination:**
- Key sensory levels by dermatome
- Myotomal strength testing
- Reflex mapping
- Sacral sparing in central cord syndrome

**Peripheral Nerve Localization:**
- Upper extremity: Median, ulnar, radial nerves
- Lower extremity: Femoral, sciatic, peroneal, tibial nerves
- Entrapment sites: Carpal tunnel, cubital tunnel, tarsal tunnel
- Electrophysiological correlation`,
      keyTerms: [
        { term: 'oculocephalic reflex', definition: 'Reflex eye movement opposite to head turning; tests brainstem integrity' },
        { term: 'apneustic breathing', definition: 'Prolonged inspiratory holds; indicates pontine lesion' },
        { term: 'semiology', definition: 'The study of signs and symptoms, particularly in epilepsy' },
        { term: 'myotome', definition: 'Muscles innervated by a single spinal nerve root' },
        { term: 'sacral sparing', definition: 'Preservation of perianal sensation and toe flexion in spinal cord injury; indicates incomplete lesion' },
      ],
      clinicalNotes: 'Expert tips: (1) In suspected functional neurological disorder, Hoover\'s sign and tremor entrainment can help distinguish organic from functional weakness and tremor. (2) In myasthenia gravis, sustained upgaze causes ptosis and diplopia - the "curtain sign." (3) Myokymia (rippling muscle movements) suggests radiation-induced nerve injury. (4) In acute stroke, the "arm drop" sign when holding arms outstretched for 10 seconds is highly sensitive for upper extremity weakness.',
    },
  },

  media: [
    {
      id: 'neuro-exam-video',
      type: 'video',
      filename: 'neurological-examination-demo.mp4',
      title: 'Complete Neurological Examination',
      description: 'Demonstration of comprehensive neurological examination techniques',
    },
  ],

  citations: [
    {
      id: 'bickley-bates',
      type: 'textbook',
      title: 'Bates\' Guide to Physical Examination and History Taking',
      authors: ['Bickley, L.S.'],
      source: 'Wolters Kluwer',
    },
    {
      id: 'blumenfeld-neuroanatomy',
      type: 'textbook',
      title: 'Neuroanatomy Through Clinical Cases',
      authors: ['Blumenfeld, H.'],
      source: 'Sinauer Associates',
    },
  ],

  crossReferences: [
    { targetId: 'clinical-lumbar-puncture', targetType: 'concept', relationship: 'related', label: 'Lumbar Puncture' },
    { targetId: 'clinical-eeg-basics', targetType: 'concept', relationship: 'related', label: 'EEG Basics' },
    { targetId: 'structure-brain', targetType: 'structure', relationship: 'see-also', label: 'Brain Anatomy' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['clinical', 'physical-exam', 'neurology'],
    keywords: ['neurological exam', 'cranial nerves', 'reflexes', 'motor', 'sensory', 'coordination'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'medicine'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default neurologicalExam;
