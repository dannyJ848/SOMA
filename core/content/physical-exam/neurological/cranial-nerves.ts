/**
 * Cranial Nerve Examination - Physical Examination
 */

import { EducationalContent } from '../../types';

export const cranialNerves: EducationalContent = {
  id: 'neurological-cranial-nerves',
  type: 'process',
  name: 'Cranial Nerve Examination',
  alternateNames: ['CN Exam', 'Cranial Nerve Assessment', 'Brain Nerve Exam'],

  levels: {
    1: {
      level: 1,
      summary: 'A cranial nerve exam tests the 12 pairs of nerves that come directly from the brain to check vision, smell, hearing, facial movement, and swallowing.',
      explanation: `## Checking the Cranial Nerves

Cranial nerves are 12 pairs of nerves that come directly from your brain. They control important functions like seeing, smelling, hearing, and moving your face.

### The 12 Cranial Nerves

**CN I - Smell (Olfactory):** Helps you smell
**CN II - Vision (Optic):** Helps you see
**CN III - Eye movement (Oculomotor):** Moves eye, controls pupil
**CN IV - Eye movement (Trochlear):** Moves eye down and in
**CN V - Face sensation (Trigeminal):** Chewing, face feeling
**CN VI - Eye movement (Abducens):** Moves eye outward
**CN VII - Facial movement (Facial):** Smiling, blinking, taste
**CN VIII - Hearing (Vestibulocochlear):** Hearing and balance
**CN IX - Throat (Glossopharyngeal):** Taste, swallowing
**CN X - Vagus:** Heart, gut, throat muscles
**CN XI - Shoulder movement (Accessory):** Shrugging shoulders
**CN XII - Tongue (Hypoglossal):** Tongue movement

### Quick Tests

- **Smell:** Can you smell coffee or soap?
- **Vision:** Can you see clearly? Check each eye.
- **Eye movement:** Follow my finger with your eyes.
- **Face feeling:** Can you feel this on both sides?
- **Facial movement:** Smile, close eyes tight, puff cheeks.
- **Hearing:** Can you hear this in both ears?
- **Tongue:** Stick out tongue, move side to side.
- **Shoulders:** Shrug shoulders against resistance.

### Why This Matters

Cranial nerve problems can show:
- Stroke
- Brain tumor
- Nerve damage
- Infections
- Multiple sclerosis

Each nerve has a specific job, so doctors can tell where a problem is by which nerve is affected.`,

      keyTerms: [
        { term: 'cranial nerves', definition: 'Twelve pairs of nerves that originate from the brain' },
        { term: 'olfactory', definition: 'Related to smell' },
        { term: 'oculomotor', definition: 'Related to eye movement' },
        { term: 'trigeminal', definition: 'Related to face sensation and chewing' },
        { term: 'vagus', definition: 'Tenth cranial nerve controlling many body functions' },
      ],

      analogies: [
        'Cranial nerves are like direct phone lines from the brain to the head and neck.',
        'Testing cranial nerves is like checking each wire in a circuit to find the break.',
      ],

      examples: [
        'Drooping eyelid and big pupil suggest CN III problem.',
        'Facial droop on one side suggests CN VII (Bell palsy).',
        'Double vision may indicate problem with eye movement nerves.',
      ],

      patientCounselingPoints: [
        'This exam helps us check how your brain nerves are working.',
        'You may be asked to do silly faces during the exam.',
        'Some tests use smells or tastes.',
        'Tell us if you have any double vision or trouble hearing.',
      ],
    },

    2: {
      level: 2,
      summary: 'Systematic cranial nerve examination tests each of the 12 nerves through specific maneuvers to identify neurological lesions.',
      explanation: `## Detailed Cranial Nerve Testing

### CN I - Olfactory
- Test each nostril separately
- Use coffee, vanilla, or soap
- Avoid irritants like ammonia
- Document anosmia

### CN II - Optic
- Visual acuity (Snellen chart)
- Visual fields (confrontation)
- Fundoscopic exam
- Color vision (Ishihara)

### CN III, IV, VI - Eye Movements
- Cardinal positions of gaze
- Nystagmus assessment
- Smooth pursuit
- Saccades
- Convergence

### CN V - Trigeminal
**Motor:**
- Temporalis and masseter strength
- Jaw opening against resistance

**Sensory:**
- Light touch in V1, V2, V3
- Corneal reflex (blink to touch)

### CN VII - Facial
- Forehead wrinkling (frontalis)
- Eye closure (orbicularis oculi)
- Smile/nasolabial fold
- Puff cheeks (buccinator)
- Taste (anterior two-thirds tongue)

### CN VIII - Vestibulocochlear
- Whisper test or Weber/Rinne
- Balance assessment

### CN IX, X - Glossopharyngeal, Vagus
- Palatal elevation (symmetric)
- Gag reflex
- Voice quality
- Swallowing

### CN XI - Accessory
- Trapezius (shoulder shrug)
- Sternocleidomastoid (turn head)

### CN XII - Hypoglossal
- Tongue at rest (fasciculations, atrophy)
- Protrusion (midline)
- Rapid alternating movements`,

      keyTerms: [
        { term: 'nystagmus', definition: 'Involuntary rhythmic eye movement' },
        { term: 'saccades', definition: 'Rapid eye movements between targets' },
        { term: 'convergence', definition: 'Eyes moving inward to focus on near object' },
        { term: 'fasciculation', definition: 'Visible muscle twitching' },
        { term: 'anosmia', definition: 'Loss of smell' },
      ],

      analogies: [
        'The six cardinal positions test all eye muscles like testing all directions on a compass.',
        'Facial nerve testing is like checking all the strings on a puppet.',
      ],

      examples: [
        'Internuclear ophthalmoplegia suggests MS.',
        'Lower facial weakness with spared forehead suggests central lesion.',
        'Uvula deviation away from lesion suggests CN X palsy.',
      ],

      clinicalNotes: 'Upper and lower facial weakness pattern distinguishes central from peripheral facial palsy.',
    },

    3: {
      level: 3,
      summary: 'Advanced cranial nerve examination localizes lesions and identifies specific pathologies through pattern recognition.',
      explanation: `## Pathological Findings

### CN II Pathology
- Papilledema: increased intracranial pressure
- Optic atrophy: pale disc
- Afferent pupillary defect (Marcus Gunn)

### Pupillary Abnormalities
**Relative Afferent Pupillary Defect (RAPD):**
- Swinging flashlight test
- Indicates optic nerve or severe retinal disease

**Anisocoria:**
- Physiologic (<1mm, both react)
- Third nerve palsy (mydriasis, ptosis)
- Horner syndrome (miosis, ptosis, anhidrosis)

**Argyll Robertson Pupil:**
- Light-near dissociation
- Constricts to near but not light
- Neurosyphilis, diabetes

### Eye Movement Disorders

**Internuclear Ophthalmoplegia (INO):**
- Impaired adduction
- Abducting nystagmus
- MLF lesion
- Multiple sclerosis

**One-and-a-Half Syndrome:**
- Horizontal gaze palsy plus INO
- Pontine lesion

**Skew Deviation:**
- Vertical misalignment
- Brainstem lesion

### Facial Nerve Palsy

**Central (UMN):**
- Forehead spared
- Contralateral
- Arm/leg weakness often

**Peripheral (LMN):**
- Entire face affected
- Bell palsy (idiopathic)
- Ramsay Hunt (herpes zoster)
- Lyme disease
- Tumor, trauma

### Jugular Foramen Syndrome
- CN IX, X, XI affected
- Hoarseness, dysphagia
- Sternocleidomastoid weakness
- Reduced gag`,

      keyTerms: [
        { term: 'RAPD', definition: 'Relative afferent pupillary defect' },
        { term: 'anisocoria', definition: 'Unequal pupil size' },
        { term: 'INO', definition: 'Internuclear ophthalmoplegia' },
        { term: 'MLF', definition: 'Medial longitudinal fasciculus' },
        { term: 'Horner syndrome', definition: 'Triad of ptosis, miosis, anhidrosis' },
      ],

      analogies: [
        'The MLF is like a train track connecting eye movement centers.',
        'A pupil that reacts to near but not light is like a door that opens for some but not others.',
      ],

      examples: [
        'Painless CN III palsy with pupil involvement requires urgent aneurysm workup.',
        'Gradenigo syndrome: CN VI palsy with facial pain (petrous apex).',
        'Vernet syndrome: CN IX, X, XI palsies at jugular foramen.',
      ],

      clinicalNotes: 'Isolated CN III palsy with pupillary involvement is posterior communicating artery aneurysm until proven otherwise.',
    },

    4: {
      level: 4,
      summary: 'Clinical integration of cranial nerve findings with neuroimaging and management of complex neurological conditions.',
      explanation: `## Syndromes and Localizations

### Cavernous Sinus Syndromes
- CN III, IV, V1, V2, VI affected
- Proptosis, chemosis
- Pain
- Carotid-cavernous fistula, tumor, thrombosis

### Superior Orbital Fissure
- CN III, IV, V1, VI
- No proptosis (unlike cavernous sinus)

### Orbital Apex
- Same as SOF plus optic nerve (CN II)
- Vision loss

### Brainstem Syndromes
**Weber:** CN III palsy plus contralateral hemiparesis (midbrain)
**Millard-Gubler:** CN VII palsy plus contralateral hemiparesis (pons)

### Diagnostic Workup
- MRI brain with contrast
- MRA if aneurysm suspected
- CSF analysis if demyelination
- Serologies for infectious causes

### Management
- Bell palsy: corticosteroids
- Giant cell arteritis: urgent steroids
- Aneurysm: clipping or coiling
- Tumor: resection, radiation`,

      keyTerms: [
        { term: 'proptosis', definition: 'Bulging of eye' },
        { term: 'chemosis', definition: 'Conjunctival swelling' },
        { term: 'cavernous sinus', definition: 'Venous structure at skull base' },
        { term: 'brainstem syndrome', definition: 'Pattern of deficits from brainstem lesion' },
      ],

      clinicalNotes: 'Multiple cranial nerve palsies suggest skull base pathology or cavernous sinus disease.',
    },

    5: {
      level: 5,
      summary: 'Expert cranial nerve assessment for complex neurosurgical cases and specialized clinical scenarios.',
      explanation: `## Advanced Clinical Applications

**Perioperative Monitoring:**
- Facial nerve monitoring in CPA surgery
- EMG during skull base procedures
- Visual evoked potentials

**Neuro-ophthalmology:**
- Specialized pupil testing
- Optic nerve function tests
- Electrophysiology

**Rehabilitation:**
- Facial reanimation surgery
- Hypoglossal-facial nerve transfer
- Static and dynamic procedures

**Pain Syndromes:**
- Trigeminal neuralgia
- Glossopharyngeal neuralgia
- Microvascular decompression`,

      keyTerms: [
        { term: 'CPA', definition: 'Cerebellopontine angle' },
        { term: 'microvascular decompression', definition: 'Surgical procedure for cranial nerve neuralgia' },
      ],

      clinicalNotes: 'House-Brackmann scale grades facial nerve function from I (normal) to VI (complete paralysis).',
    },
  },

  media: [],

  citations: [
    {
      id: 'biller-neuro',
      type: 'textbook',
      title: 'Localization in Clinical Neurology',
      source: 'Lippincott',
    },
  ],

  crossReferences: [
    { targetId: 'neurological-mental-status', targetType: 'process', relationship: 'sibling', label: 'Mental Status' },
    { targetId: 'neurology-cranial-nerves', targetType: 'topic', relationship: 'related', label: 'Cranial Nerve Disorders' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['physical-examination', 'neurology'],
    keywords: ['cranial nerves', 'neurological exam', 'brainstem'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'neurology'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default cranialNerves;
