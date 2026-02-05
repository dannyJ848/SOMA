/**
 * Peripheral Nervous System Data Store
 * 
 * Comprehensive database of cranial nerves, spinal nerves,
 * autonomic nervous system, and peripheral neuropathies.
 */

import type {
  CranialNerve,
  SpinalNerve,
  NervePlexus,
  AutonomicGanglion,
  AutonomicPathway,
  PeripheralNerve,
  Dermatome,
  Myotome,
  ReflexArc,
  NeuropathyPattern,
  PNSStatistics,
} from './types';

// ============================================================================
// CRANIAL NERVES (Complete)
// ============================================================================

const cranialNerves: Map<number, CranialNerve> = new Map();

cranialNerves.set(1, {
  id: 'cn-i',
  number: 1,
  name: 'Olfactory Nerve',
  latinName: 'Nervus olfactorius',
  abbreviation: 'CN I',
  type: 'sensory',
  brainstemLocation: 'telencephalon',
  nuclei: ['Olfactory bulb', 'Olfactory cortex'],
  exitForamen: 'Cribriform plate of ethmoid',
  specialSensory: {
    modality: 'Olfaction',
    description: 'Smell from olfactory epithelium',
  },
  explanations: {
    level1: 'The nerve that lets you smell things.',
    level2: 'Carries smell signals from your nose to your brain. The only sense that bypasses the thalamus.',
    level3: 'Special sensory nerve for olfaction. Olfactory receptor neurons synapse in the olfactory bulb.',
    level4: 'Unique CNS tract with ongoing neurogenesis. Projects directly to piriform cortex, amygdala, and hippocampus.',
  },
  keyFacts: [
    'Only cranial nerve that bypasses thalamus',
    'Receptor neurons replaced throughout life',
    'Close link to memory and emotion',
    'Anosmia can be early sign of Parkinson disease',
  ],
  clinicalTests: [
    {
      name: 'Olfactory identification',
      procedure: 'Have patient identify common scents (coffee, vanilla, soap) with eyes closed',
      normalFinding: 'Correct identification of scents',
      abnormalFinding: 'Inability to identify scents (anosmia)',
      interpretation: 'Indicates olfactory pathway dysfunction',
    },
  ],
  commonPathologies: [
    {
      name: 'Anosmia',
      description: 'Loss of sense of smell',
      causes: ['Head trauma', 'Upper respiratory infection', 'COVID-19', 'Neurodegenerative disease'],
      symptoms: ['Inability to smell', 'Altered taste perception'],
      physicalFindings: ['Normal nasal exam'],
      diagnosticTests: ['Olfactory testing', 'MRI if focal lesion suspected'],
    },
  ],
  relatedConditions: ['parkinson-disease', 'alzheimer-disease', 'covid-19'],
});

cranialNerves.set(2, {
  id: 'cn-ii',
  number: 2,
  name: 'Optic Nerve',
  latinName: 'Nervus opticus',
  abbreviation: 'CN II',
  type: 'sensory',
  brainstemLocation: 'diencephalon',
  nuclei: ['Retinal ganglion cells', 'Lateral geniculate nucleus'],
  exitForamen: 'Optic canal',
  specialSensory: {
    modality: 'Vision',
    description: 'Visual information from retina',
  },
  explanations: {
    level1: 'The nerve that carries visual information from your eyes.',
    level2: 'Transmits visual signals from the retina to the brain. Actually a CNS tract.',
    level3: 'Special sensory nerve for vision. Retinal ganglion cell axons form the optic nerve.',
    level4: 'Surrounded by meninges and CSF. Papilledema indicates increased ICP. RAPD indicates afferent defect.',
  },
  keyFacts: [
    'Actually a CNS tract (myelinated by oligodendrocytes)',
    'Nasal fibers cross at optic chiasm',
    'Pupillary light reflex afferent',
    'Papilledema indicates increased ICP',
  ],
  clinicalTests: [
    {
      name: 'Visual acuity',
      procedure: 'Snellen chart or near card',
      normalFinding: '20/20 or baseline',
      abnormalFinding: 'Decreased acuity',
      interpretation: 'Indicates optic nerve or ocular pathology',
    },
    {
      name: 'Pupillary light reflex',
      procedure: 'Shine light in eye and observe pupil constriction',
      normalFinding: 'Direct and consensual constriction',
      abnormalFinding: 'RAPD (Marcus Gunn pupil)',
      interpretation: 'Indicates asymmetric afferent pathway damage',
    },
  ],
  commonPathologies: [
    {
      name: 'Optic neuritis',
      description: 'Inflammation of optic nerve',
      causes: ['Multiple sclerosis', 'Neuromyelitis optica', 'Infection'],
      symptoms: ['Vision loss', 'Pain with eye movement', 'Color desaturation'],
      physicalFindings: ['RAPD', 'Disc edema or normal'],
      diagnosticTests: ['MRI brain/orbits', 'VEP'],
    },
    {
      name: 'Papilledema',
      description: 'Optic disc swelling from increased ICP',
      causes: ['Intracranial mass', 'Idiopathic intracranial hypertension'],
      symptoms: ['Headache', 'Transient visual obscurations'],
      physicalFindings: ['Bilateral disc edema', 'Enlarged blind spot'],
      diagnosticTests: ['MRI/MRV brain', 'Lumbar puncture'],
    },
  ],
  relatedConditions: ['multiple-sclerosis', 'idiopathic-intracranial-hypertension'],
});

cranialNerves.set(3, {
  id: 'cn-iii',
  number: 3,
  name: 'Oculomotor Nerve',
  latinName: 'Nervus oculomotorius',
  abbreviation: 'CN III',
  type: 'motor',
  brainstemLocation: 'midbrain',
  nuclei: ['Oculomotor nucleus', 'Edinger-Westphal nucleus'],
  exitForamen: 'Superior orbital fissure',
  somaticMotor: {
    muscles: ['Superior rectus', 'Inferior rectus', 'Medial rectus', 'Inferior oblique', 'Levator palpebrae superioris'],
    description: 'Controls most eye movements and eyelid elevation',
  },
  visceralMotor: {
    targets: ['Pupil sphincter', 'Ciliary muscle'],
    description: 'Parasympathetic innervation for pupil constriction and accommodation',
  },
  explanations: {
    level1: 'Controls most eye movements, opens eyelid, and makes pupil smaller.',
    level2: 'Motor nerve controlling four eye muscles, eyelid, and pupil constriction.',
    level3: 'Motor nerve with somatic and parasympathetic components. Parasympathetic fibers run superficially.',
    level4: 'Complete palsy: ptosis, down-and-out eye, dilated pupil. Pupil-sparing suggests ischemia (diabetes).',
  },
  keyFacts: [
    'Controls SR, IR, MR, IO muscles',
    'Levator palpebrae: opens eyelid',
    'Parasympathetic fibers run superficially',
    'Pupil-sparing CN III palsy suggests ischemia',
    'Complete palsy with dilated pupil suggests compression',
  ],
  clinicalTests: [
    {
      name: 'Extraocular movements',
      procedure: 'H-pattern testing',
      normalFinding: 'Full range of motion',
      abnormalFinding: 'Limitation in SR, IR, MR, IO',
      interpretation: 'CN III palsy',
    },
  ],
  commonPathologies: [
    {
      name: 'CN III palsy',
      description: 'Oculomotor nerve dysfunction',
      causes: ['PCA aneurysm', 'Diabetes', 'Uncal herniation'],
      symptoms: ['Ptosis', 'Down and out eye', 'Dilated pupil (if compressive)'],
      physicalFindings: ['Ophthalmoplegia', 'Mydriasis'],
      diagnosticTests: ['MRI/MRA brain', 'Blood glucose'],
    },
  ],
  relatedConditions: ['aneurysm', 'diabetes', 'uncal-herniation'],
});

cranialNerves.set(4, {
  id: 'cn-iv',
  number: 4,
  name: 'Trochlear Nerve',
  latinName: 'Nervus trochlearis',
  abbreviation: 'CN IV',
  type: 'motor',
  brainstemLocation: 'midbrain',
  nuclei: ['Trochlear nucleus'],
  exitForamen: 'Superior orbital fissure',
  somaticMotor: {
    muscles: ['Superior oblique'],
    description: 'Controls intorsion, depression when adducted, abduction when depressed',
  },
  explanations: {
    level1: 'Controls one eye muscle for looking down and in.',
    level2: 'Motor nerve to superior oblique muscle. Only cranial nerve to exit dorsally.',
    level3: 'Motor nerve to superior oblique. Long intracranial course makes it vulnerable.',
    level4: 'Longest intracranial course. Causes hypertropia worse on contralateral gaze and ipsilateral head tilt.',
  },
  keyFacts: [
    'Only nerve to exit dorsally from brainstem',
    'Longest intracranial course',
    'Only nerve to decussate before exiting',
    'Purely somatic motor',
  ],
  clinicalTests: [
    {
      name: 'Fundus photography',
      procedure: 'Examine optic disc position',
      normalFinding: 'Normal disc position',
      abnormalFinding: 'Excyclotorsion',
      interpretation: 'CN IV palsy',
    },
  ],
  commonPathologies: [
    {
      name: 'CN IV palsy',
      description: 'Trochlear nerve dysfunction',
      causes: ['Trauma', 'Microvascular ischemia', 'Congenital'],
      symptoms: ['Vertical diplopia', 'Head tilt'],
      physicalFindings: ['Hypertropia', 'Positive Bielschowsky'],
      diagnosticTests: ['Park-Bielschowsky test'],
    },
  ],
  relatedConditions: ['trauma', 'microvascular-ischemia'],
});

cranialNerves.set(5, {
  id: 'cn-v',
  number: 5,
  name: 'Trigeminal Nerve',
  latinName: 'Nervus trigeminus',
  abbreviation: 'CN V',
  type: 'mixed',
  brainstemLocation: 'pons',
  nuclei: ['Motor nucleus of V', 'Chief sensory nucleus', 'Spinal nucleus'],
  exitForamen: 'Superior orbital fissure (V1), Foramen rotundum (V2), Foramen ovale (V3)',
  somaticMotor: {
    muscles: ['Muscles of mastication', 'Tensor tympani', 'Tensor veli palatini', 'Mylohyoid', 'Anterior digastric'],
    description: 'Controls chewing and some middle ear/palate muscles',
  },
  somaticSensory: {
    distribution: 'Face, scalp, nasal cavity, oral cavity, meninges',
    modalities: ['Touch', 'Pain', 'Temperature', 'Proprioception'],
  },
  explanations: {
    level1: 'The main sensation nerve for your face and controls chewing muscles.',
    level2: 'Provides sensation to the face and controls chewing muscles. Has three divisions.',
    level3: 'Largest cranial nerve. Three divisions: ophthalmic (V1), maxillary (V2), mandibular (V3).',
    level4: 'Principal sensory nerve of the head. Three divisions pass through different foramina.',
  },
  keyFacts: [
    'Largest cranial nerve',
    'Three divisions: V1, V2, V3',
    'Sensory to face, motor to muscles of mastication',
    'Corneal reflex afferent',
    'Trigeminal neuralgia: severe facial pain',
  ],
  clinicalTests: [
    {
      name: 'Facial sensation',
      procedure: 'Test light touch in V1, V2, V3 distributions',
      normalFinding: 'Symmetric sensation',
      abnormalFinding: 'Decreased sensation in division',
      interpretation: 'CN V sensory loss',
    },
    {
      name: 'Corneal reflex',
      procedure: 'Touch cornea with cotton',
      normalFinding: 'Blink',
      abnormalFinding: 'Absent blink',
      interpretation: 'V1 afferent or VII efferent problem',
    },
  ],
  commonPathologies: [
    {
      name: 'Trigeminal neuralgia',
      description: 'Severe facial pain',
      causes: ['Vascular compression', 'MS', 'Tumor'],
      symptoms: ['Electric shock-like facial pain', 'Triggers'],
      physicalFindings: ['Trigger zones'],
      diagnosticTests: ['MRI brain'],
    },
  ],
  relatedConditions: ['trigeminal-neuralgia', 'facial-pain'],
});

cranialNerves.set(7, {
  id: 'cn-vii',
  number: 7,
  name: 'Facial Nerve',
  latinName: 'Nervus facialis',
  abbreviation: 'CN VII',
  type: 'mixed',
  brainstemLocation: 'pons',
  nuclei: ['Facial motor nucleus', 'Superior salivatory nucleus', 'Nucleus tractus solitarius'],
  exitForamen: 'Internal auditory meatus → stylomastoid foramen',
  somaticMotor: {
    muscles: ['Muscles of facial expression', 'Stapedius', 'Posterior digastric', 'Stylohyoid'],
    description: 'Controls facial expressions and some other head muscles',
  },
  visceralMotor: {
    targets: ['Lacrimal gland', 'Submandibular gland', 'Sublingual gland'],
    description: 'Parasympathetic innervation of glands',
  },
  specialSensory: {
    modality: 'Taste',
    description: 'Anterior 2/3 of tongue',
  },
  explanations: {
    level1: 'Controls facial expressions, taste, and tear production.',
    level2: 'Controls facial movement, taste, and some glands. Bell\'s palsy affects this nerve.',
    level3: 'Motor, parasympathetic, and special sensory nerve. Upper vs lower face distinguishes UMN from LMN.',
    level4: 'Forehead receives bilateral input; UMN lesions spare forehead. Facial canal course makes it vulnerable.',
  },
  keyFacts: [
    'Controls all facial expression muscles',
    'Upper face spared in UMN lesions',
    'Taste: anterior 2/3 tongue',
    'Bell\'s palsy: idiopathic facial paralysis',
    'Ramsay Hunt: VZV with facial palsy',
  ],
  clinicalTests: [
    {
      name: 'Facial symmetry',
      procedure: 'Raise eyebrows, close eyes tightly, show teeth, puff cheeks',
      normalFinding: 'Symmetric movement',
      abnormalFinding: 'Asymmetric weakness',
      interpretation: 'CN VII palsy (LMN if entire face; UMN if forehead spared)',
    },
  ],
  commonPathologies: [
    {
      name: 'Bell\'s palsy',
      description: 'Idiopathic facial paralysis',
      causes: ['HSV reactivation'],
      symptoms: ['Sudden unilateral facial weakness', 'Ear pain', 'Taste change'],
      physicalFindings: ['Complete hemifacial weakness', 'Forehead involved'],
      diagnosticTests: ['Clinical diagnosis', 'MRI if atypical'],
    },
  ],
  relatedConditions: ['bells-palsy', 'ramsays-hunt-syndrome'],
});

cranialNerves.set(10, {
  id: 'cn-x',
  number: 10,
  name: 'Vagus Nerve',
  latinName: 'Nervus vagus',
  abbreviation: 'CN X',
  type: 'mixed',
  brainstemLocation: 'medulla',
  nuclei: ['Nucleus ambiguus', 'Dorsal motor nucleus', 'Nucleus tractus solitarius', 'Spinal trigeminal nucleus'],
  exitForamen: 'Jugular foramen',
  somaticMotor: {
    muscles: ['Pharyngeal muscles', 'Laryngeal muscles (via recurrent laryngeal)'],
    description: 'Controls swallowing and voice',
  },
  visceralMotor: {
    targets: ['Heart', 'Lungs', 'GI tract to splenic flexure'],
    description: 'Parasympathetic innervation of thoracoabdominal viscera',
  },
  visceralSensory: {
    targets: ['Pharynx', 'Larynx', 'Thoracic viscera', 'Abdominal viscera'],
  },
  somaticSensory: {
    distribution: 'External ear',
    modalities: ['General sensation'],
  },
  explanations: {
    level1: 'The "wandering nerve" that controls many organs in chest and belly.',
    level2: 'Main parasympathetic nerve to heart, lungs, and digestive tract. Controls voice and swallowing.',
    level3: 'Longest cranial nerve. Motor to pharynx/larynx; parasympathetic to thoracoabdominal viscera.',
    level4: 'Vagal tone maintains resting heart rate. Recurrent laryngeal nerve vulnerable in thyroid surgery.',
  },
  keyFacts: [
    'Longest cranial nerve',
    '"Rest and digest" parasympathetic',
    'Recurrent laryngeal: vocal cord movement',
    'Gag reflex: IX afferent, X efferent',
    'Vagal tone maintains low resting HR',
  ],
  clinicalTests: [
    {
      name: 'Palate elevation',
      procedure: 'Say "ah"',
      normalFinding: 'Palate elevates symmetrically',
      abnormalFinding: 'Asymmetric elevation',
      interpretation: 'CN X palsy',
    },
  ],
  commonPathologies: [
    {
      name: 'Vocal cord paralysis',
      description: 'Recurrent laryngeal nerve damage',
      causes: ['Thyroid surgery', 'Lung cancer', 'Aortic aneurysm'],
      symptoms: ['Hoarseness', 'Weak voice', 'Aspiration'],
      physicalFindings: ['Unilateral vocal cord paralysis'],
      diagnosticTests: ['Laryngoscopy'],
    },
  ],
  relatedConditions: ['vocal-cord-paralysis', 'dysphagia'],
});

// Add remaining cranial nerves (abbreviated)
const remainingCranialNerves: Omit<CranialNerve, 'explanations' | 'keyFacts' | 'clinicalTests' | 'commonPathologies'>[] = [
  { id: 'cn-vi', number: 6, name: 'Abducens Nerve', latinName: 'Nervus abducens', abbreviation: 'CN VI', type: 'motor', brainstemLocation: 'pons', nuclei: ['Abducens nucleus'], exitForamen: 'Superior orbital fissure', somaticMotor: { muscles: ['Lateral rectus'], description: 'Abducts the eye' } },
  { id: 'cn-viii', number: 8, name: 'Vestibulocochlear Nerve', latinName: 'Nervus vestibulocochlearis', abbreviation: 'CN VIII', type: 'sensory', brainstemLocation: 'pons', nuclei: ['Cochlear nuclei', 'Vestibular nuclei'], exitForamen: 'Internal auditory meatus', specialSensory: { modality: 'Hearing and Balance', description: 'Auditory and vestibular information' } },
  { id: 'cn-ix', number: 9, name: 'Glossopharyngeal Nerve', latinName: 'Nervus glossopharyngeus', abbreviation: 'CN IX', type: 'mixed', brainstemLocation: 'medulla', nuclei: ['Nucleus ambiguus', 'Inferior salivatory nucleus', 'Nucleus tractus solitarius'], exitForamen: 'Jugular foramen' },
  { id: 'cn-xi', number: 11, name: 'Accessory Nerve', latinName: 'Nervus accessorius', abbreviation: 'CN XI', type: 'motor', brainstemLocation: 'medulla', nuclei: ['Spinal accessory nucleus'], exitForamen: 'Jugular foramen', somaticMotor: { muscles: ['Sternocleidomastoid', 'Trapezius'], description: 'Head turning and shoulder shrugging' } },
  { id: 'cn-xii', number: 12, name: 'Hypoglossal Nerve', latinName: 'Nervus hypoglossus', abbreviation: 'CN XII', type: 'motor', brainstemLocation: 'medulla', nuclei: ['Hypoglossal nucleus'], exitForamen: 'Hypoglossal canal', somaticMotor: { muscles: ['Tongue muscles'], description: 'Tongue movement' } },
];

for (const cn of remainingCranialNerves) {
  cranialNerves.set(cn.number, {
    ...cn,
    explanations: {
      level1: `${cn.name} - ${cn.somaticMotor?.description || cn.specialSensory?.description || 'Cranial nerve'}.`,
      level2: `The ${cn.name} (${cn.abbreviation}) has ${cn.type} functions.`,
      level3: `${cn.abbreviation} originates in the ${cn.brainstemLocation} and exits via ${cn.exitForamen}.`,
      level4: `Detailed neuroanatomical considerations for ${cn.name}.`,
    },
    keyFacts: [cn.somaticMotor?.description || 'Cranial nerve function'],
    clinicalTests: [],
    commonPathologies: [],
  } as CranialNerve);
}

// ============================================================================
// NERVE PLEXUSES
// ============================================================================

const nervePlexuses: Map<string, NervePlexus> = new Map();

nervePlexuses.set('cervical-plexus', {
  id: 'cervical-plexus',
  name: 'Cervical Plexus',
  location: 'Posterior triangle of neck, deep to sternocleidomastoid',
  spinalLevels: ['C1', 'C2', 'C3', 'C4'],
  terminalBranches: [
    { name: 'Lesser occipital', origin: 'C2', course: 'Ascends to scalp', motor: 'None', sensory: 'Posterior scalp', clinicalTests: [] },
    { name: 'Great auricular', origin: 'C2-C3', course: 'To parotid', motor: 'None', sensory: 'Ear, angle of mandible', clinicalTests: [] },
    { name: 'Transverse cervical', origin: 'C2-C3', course: 'Across neck', motor: 'None', sensory: 'Anterior neck', clinicalTests: [] },
    { name: 'Supraclavicular', origin: 'C3-C4', course: 'To shoulder', motor: 'None', sensory: 'Shoulder, upper chest', clinicalTests: [] },
    { name: 'Phrenic nerve', origin: 'C3-C4-C5', course: 'Through thorax to diaphragm', motor: 'Diaphragm', sensory: 'Diaphragm pleura/peritoneum', clinicalTests: ['Sniff test'] },
  ],
  clinicalSignificance: ['Phrenic nerve injury causes diaphragm paralysis'],
  commonInjuries: [
    { name: 'Phrenic nerve palsy', description: 'Diaphragm paralysis', affectedNerves: ['Phrenic'], mechanism: 'Surgery, tumor, idiopathic', symptoms: ['Dyspnea', 'Orthopnea'], commonCauses: ['Cardiac surgery', 'Lung cancer'] },
  ],
});

nervePlexuses.set('brachial-plexus', {
  id: 'brachial-plexus',
  name: 'Brachial Plexus',
  location: 'Root of neck and axilla',
  spinalLevels: ['C5', 'C6', 'C7', 'C8', 'T1'],
  terminalBranches: [
    { name: 'Musculocutaneous', origin: 'Lateral cord', course: 'To anterior arm', motor: 'Elbow flexion', sensory: 'Lateral forearm', clinicalTests: ['Elbow flexion against resistance'] },
    { name: 'Median', origin: 'Medial and lateral cords', course: 'To hand', motor: 'Forearm pronation, thumb opposition', sensory: 'Lateral hand', clinicalTests: ['Thumb opposition', 'OK sign'] },
    { name: 'Ulnar', origin: 'Medial cord', course: 'To hand', motor: 'Intrinsic hand muscles', sensory: 'Medial hand', clinicalTests: ['Finger abduction', 'Card test'] },
    { name: 'Radial', origin: 'Posterior cord', course: 'To posterior arm/forearm', motor: 'Wrist and finger extension', sensory: 'Posterior arm, hand', clinicalTests: ['Wrist extension', 'Thumb extension'] },
    { name: 'Axillary', origin: 'Posterior cord', course: 'To deltoid', motor: 'Shoulder abduction', sensory: 'Lateral shoulder', clinicalTests: ['Deltoid testing'] },
  ],
  clinicalSignificance: ['Most complex plexus', 'Common site of birth injury'],
  commonInjuries: [
    { name: 'Erb palsy', description: 'Upper trunk injury', affectedNerves: ['C5-C6'], mechanism: 'Shoulder depression with neck lateral flexion', symptoms: ['Waiter\'s tip posture'], commonCauses: ['Birth trauma', 'Motorcycle accident'] },
    { name: 'Klumpke palsy', description: 'Lower trunk injury', affectedNerves: ['C8-T1'], mechanism: 'Arm hyperabduction', symptoms: ['Claw hand'], commonCauses: ['Birth trauma'] },
  ],
});

nervePlexuses.set('lumbosacral-plexus', {
  id: 'lumbosacral-plexus',
  name: 'Lumbosacral Plexus',
  location: 'Posterior abdominal wall and pelvis',
  spinalLevels: ['L1', 'L2', 'L3', 'L4', 'L5', 'S1', 'S2', 'S3'],
  terminalBranches: [
    { name: 'Femoral', origin: 'L2-L4', course: 'To anterior thigh', motor: 'Knee extension', sensory: 'Anterior thigh, medial leg', clinicalTests: ['Knee extension'] },
    { name: 'Obturator', origin: 'L2-L4', course: 'To medial thigh', motor: 'Thigh adduction', sensory: 'Medial thigh', clinicalTests: ['Hip adduction'] },
    { name: 'Sciatic', origin: 'L4-S3', course: 'To posterior thigh, leg', motor: 'Hamstrings, all below knee', sensory: 'Posterior thigh, leg, foot', clinicalTests: ['Straight leg raise'] },
    { name: 'Superior gluteal', origin: 'L4-S1', course: 'To gluteus medius/minimus', motor: 'Hip abduction', sensory: 'None', clinicalTests: ['Trendelenburg test'] },
    { name: 'Inferior gluteal', origin: 'L5-S2', course: 'To gluteus maximus', motor: 'Hip extension', sensory: 'None', clinicalTests: ['Hip extension testing'] },
  ],
  clinicalSignificance: ['Sciatic nerve is largest nerve in body'],
  commonInjuries: [
    { name: 'Foot drop', description: 'Common peroneal nerve injury', affectedNerves: ['Common peroneal'], mechanism: 'Compression at fibular head', symptoms: ['Foot drop', 'Steppage gait'], commonCauses: ['Leg crossing', 'Prolonged squatting'] },
  ],
});

// ============================================================================
// AUTONOMIC PATHWAYS
// ============================================================================

const autonomicPathways: Map<string, AutonomicPathway> = new Map();

autonomicPathways.set('sympathetic-heart', {
  id: 'sympathetic-heart',
  name: 'Sympathetic to Heart',
  division: 'sympathetic',
  origin: 'T1-T4 lateral horn cells',
  preganglionic: { neurotransmitter: 'Acetylcholine', receptor: 'Nicotinic', course: 'White rami to sympathetic chain' },
  ganglion: 'Cervical and upper thoracic sympathetic ganglia',
  postganglionic: { neurotransmitter: 'Norepinephrine', receptor: 'Beta-1', course: 'Cardiac nerves to heart' },
  target: { organ: 'Heart', effect: 'Increased heart rate and contractility' },
  clinicalRelevance: ['Beta-blockers treat arrhythmias', 'Sympathetic overdrive in heart failure'],
});

autonomicPathways.set('parasympathetic-heart', {
  id: 'parasympathetic-heart',
  name: 'Parasympathetic to Heart',
  division: 'parasympathetic',
  origin: 'Dorsal vagal nucleus',
  preganglionic: { neurotransmitter: 'Acetylcholine', receptor: 'Nicotinic', course: 'Vagus nerve' },
  ganglion: 'Cardiac plexus (intrinsic)',
  postganglionic: { neurotransmitter: 'Acetylcholine', receptor: 'Muscarinic M2', course: 'Short postganglionic to SA and AV nodes' },
  target: { organ: 'Heart', effect: 'Decreased heart rate and contractility' },
  clinicalRelevance: ['Vagal maneuvers terminate SVT', 'Atropine blocks vagal effect'],
});

// ============================================================================
// REFLEX ARCS
// ============================================================================

const reflexArcs: Map<string, ReflexArc> = new Map();

reflexArcs.set('biceps-reflex', {
  name: 'Biceps reflex',
  afferentNerve: 'Musculocutaneous',
  spinalLevel: 'C5-C6',
  center: 'C5-C6 spinal cord',
  efferentNerve: 'Musculocutaneous',
  effector: 'Biceps brachii',
  normalResponse: 'Elbow flexion',
  abnormalFindings: ['Absent (lower motor neuron)', 'Hyperactive (upper motor neuron)', 'Inverted (radiculopathy)'],
  clinicalSignificance: ['Tests C5-C6 integrity'],
});

reflexArcs.set('patellar-reflex', {
  name: 'Patellar reflex',
  afferentNerve: 'Femoral',
  spinalLevel: 'L3-L4',
  center: 'L3-L4 spinal cord',
  efferentNerve: 'Femoral',
  effector: 'Quadriceps',
  normalResponse: 'Knee extension',
  abnormalFindings: ['Absent (lower motor neuron)', 'Hyperactive (upper motor neuron)'],
  clinicalSignificance: ['Tests L3-L4 integrity', 'Most commonly tested reflex'],
});

reflexArcs.set('achilles-reflex', {
  name: 'Achilles reflex',
  afferentNerve: 'Tibial',
  spinalLevel: 'S1-S2',
  center: 'S1-S2 spinal cord',
  efferentNerve: 'Tibial',
  effector: 'Gastrocnemius-soleus',
  normalResponse: 'Plantarflexion',
  abnormalFindings: ['Absent in peripheral neuropathy', 'Hyperactive in UMN lesions'],
  clinicalSignificance: ['Tests S1-S2 integrity'],
});

// ============================================================================
// NEUROPATHY PATTERNS
// ============================================================================

const neuropathyPatterns: Map<string, NeuropathyPattern> = new Map();

neuropathyPatterns.set('diabetic-polyneuropathy', {
  id: 'diabetic-polyneuropathy',
  name: 'Diabetic Distal Symmetric Polyneuropathy',
  description: 'Length-dependent sensorimotor polyneuropathy',
  pattern: 'polyneuropathy',
  distribution: 'Stocking-glove (feet worse than hands)',
  etiologies: ['Diabetes mellitus', 'Prediabetes'],
  clinicalFeatures: ['Burning pain', 'Numbness', 'Allodynia', 'Loss of reflexes'],
  diagnosticApproach: ['EMG/NCS', 'Glucose testing', 'Monofilament exam'],
  treatments: ['Glucose control', 'Gabapentinoids', 'SNRIs', 'TCAs'],
});

neuropathyPatterns.set('carpal-tunnel', {
  id: 'carpal-tunnel',
  name: 'Carpal Tunnel Syndrome',
  description: 'Median nerve entrapment at wrist',
  pattern: 'mononeuropathy',
  distribution: 'Thumb, index, middle fingers (radial half)',
  etiologies: ['Repetitive use', 'Pregnancy', 'Hypothyroidism', 'RA'],
  clinicalFeatures: ['Numbness/tingling', 'Night symptoms', 'Weakness of thumb opposition'],
  diagnosticApproach: ['Phalen test', 'Tinel sign', 'EMG/NCS'],
  treatments: ['Splinting', 'Steroid injection', 'Surgical release'],
});

neuropathyPatterns.set('gbs', {
  id: 'gbs',
  name: 'Guillain-Barré Syndrome',
  description: 'Acute inflammatory demyelinating polyneuropathy',
  pattern: 'polyneuropathy',
  distribution: 'Ascending paralysis',
  etiologies: ['Autoimmune (post-infectious)'],
  clinicalFeatures: ['Progressive weakness', 'Areflexia', 'Paresthesias', 'Autonomic instability'],
  diagnosticApproach: ['Lumbar puncture (albuminocytologic dissociation)', 'EMG/NCS', 'Pulmonary function tests'],
  treatments: ['IVIG', 'Plasma exchange', 'Supportive care'],
});

// ============================================================================
// STATISTICS
// ============================================================================

const pnsStatistics: PNSStatistics = {
  totalCranialNerves: 12,
  totalSpinalNerves: 31,
  cervicalSpinalNerves: 8,
  thoracicSpinalNerves: 12,
  lumbarSpinalNerves: 5,
  sacralSpinalNerves: 5,
  coccygealSpinalNerves: 1,
  estimatedPeripheralNerveLength: '45 miles (72 km) total',
};

// ============================================================================
// EXPORT FUNCTIONS
// ============================================================================

export function getCranialNerve(number: number): CranialNerve | undefined {
  return cranialNerves.get(number);
}

export function getAllCranialNerves(): CranialNerve[] {
  return Array.from(cranialNerves.values());
}

export function getNervePlexus(id: string): NervePlexus | undefined {
  return nervePlexuses.get(id);
}

export function getAllNervePlexuses(): NervePlexus[] {
  return Array.from(nervePlexuses.values());
}

export function getAutonomicPathway(id: string): AutonomicPathway | undefined {
  return autonomicPathways.get(id);
}

export function getReflexArc(name: string): ReflexArc | undefined {
  return reflexArcs.get(name);
}

export function getNeuropathyPattern(id: string): NeuropathyPattern | undefined {
  return neuropathyPatterns.get(id);
}

export function getPNSStatistics(): PNSStatistics {
  return { ...pnsStatistics };
}
