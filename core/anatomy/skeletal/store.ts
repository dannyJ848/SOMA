/**
 * Skeletal System Data Store
 *
 * Contains all 206 bones with comprehensive educational content
 * at 5 complexity levels.
 */

import type {
  Bone,
  BoneSummary,
  Joint,
  SkeletalRegion,
  SkeletalRegionInfo,
  BoneStatistics,
  SkeletalDivision,
  BoneType,
} from './types';

// In-memory stores
const bones = new Map<string, Bone>();
const joints = new Map<string, Joint>();

// Indexes for fast lookup
const bonesByRegion = new Map<SkeletalRegion, string[]>();
const bonesByName = new Map<string, string>();
const bonesByFmaId = new Map<string, string>();

/**
 * Region information
 */
export const SKELETAL_REGIONS: SkeletalRegionInfo[] = [
  { id: 'skull-cranial', name: 'Cranial Bones', description: 'Bones forming the braincase', boneCount: 8, division: 'axial' },
  { id: 'skull-facial', name: 'Facial Bones', description: 'Bones forming the face', boneCount: 14, division: 'axial' },
  { id: 'vertebral-cervical', name: 'Cervical Vertebrae', description: 'Neck vertebrae (C1-C7)', boneCount: 7, division: 'axial' },
  { id: 'vertebral-thoracic', name: 'Thoracic Vertebrae', description: 'Upper back vertebrae (T1-T12)', boneCount: 12, division: 'axial' },
  { id: 'vertebral-lumbar', name: 'Lumbar Vertebrae', description: 'Lower back vertebrae (L1-L5)', boneCount: 5, division: 'axial' },
  { id: 'vertebral-sacral', name: 'Sacrum & Coccyx', description: 'Fused vertebrae at base of spine', boneCount: 2, division: 'axial' },
  { id: 'thoracic-cage', name: 'Thoracic Cage', description: 'Ribs and sternum', boneCount: 25, division: 'axial' },
  { id: 'pectoral-girdle', name: 'Pectoral Girdle', description: 'Shoulder bones', boneCount: 4, division: 'appendicular' },
  { id: 'upper-limb-arm', name: 'Arm', description: 'Upper arm bone (humerus)', boneCount: 2, division: 'appendicular' },
  { id: 'upper-limb-forearm', name: 'Forearm', description: 'Radius and ulna', boneCount: 4, division: 'appendicular' },
  { id: 'upper-limb-hand', name: 'Hand', description: 'Carpals, metacarpals, phalanges', boneCount: 54, division: 'appendicular' },
  { id: 'pelvic-girdle', name: 'Pelvic Girdle', description: 'Hip bones', boneCount: 2, division: 'appendicular' },
  { id: 'lower-limb-thigh', name: 'Thigh', description: 'Femur and patella', boneCount: 4, division: 'appendicular' },
  { id: 'lower-limb-leg', name: 'Leg', description: 'Tibia and fibula', boneCount: 4, division: 'appendicular' },
  { id: 'lower-limb-foot', name: 'Foot', description: 'Tarsals, metatarsals, phalanges', boneCount: 52, division: 'appendicular' },
];

/**
 * Initialize with comprehensive bone data
 */
function initializeBones(): void {
  // ============================================
  // SKULL - CRANIAL BONES (8)
  // ============================================

  const frontalBone: Bone = {
    id: 'frontal',
    name: 'Frontal Bone',
    latinName: 'Os frontale',
    fmaId: 'FMA:52734',
    type: 'flat',
    division: 'axial',
    region: 'skull-cranial',
    paired: false,
    side: 'midline',
    location: 'Anterior cranium, forming the forehead and roof of the orbits',
    explanations: {
      level1: 'The frontal bone is your forehead! It\'s a strong, curved bone that protects the front part of your brain. It also forms the roof of your eye sockets, helping protect your eyes from above.',
      level2: 'The frontal bone forms the forehead and the upper part of the eye sockets (orbits). Inside, it has air-filled spaces called frontal sinuses that make your skull lighter and give your voice resonance. It connects to many other skull bones through zigzag joints called sutures.',
      level3: 'The frontal bone is a flat bone comprising two main portions: the squamous part (forehead) and the orbital parts (forming orbital roofs). It contains the paired frontal sinuses within its thickness. The supraorbital margins contain notches or foramina for neurovascular structures. It articulates with the parietal, sphenoid, ethmoid, nasal, lacrimal, maxillary, and zygomatic bones.',
      level4: 'The frontal bone develops from membrane via intramembranous ossification from two primary centers that fuse at the metopic suture (usually by age 6). The frontal sinuses develop after birth and reach full size in adolescence. The supraorbital nerve (V1) exits through the supraorbital notch/foramen. The bone provides attachment for the temporalis muscle laterally and corrugator/frontalis muscles anteriorly.',
      level5: 'Clinically, frontal bone fractures may involve the anterior table only (cosmetic deformity) or both tables (CSF leak risk). The frontal sinus can be a site of mucocele or osteoma formation. In pediatric patients, a persistent metopic suture should be distinguished from fracture. The frontal bone is a common site for osteoma and fibrous dysplasia. Frontal craniectomy provides surgical access for aneurysm clipping and tumor resection.',
    },
    keyFacts: [
      'Forms the forehead and orbital roofs',
      'Contains the paired frontal sinuses',
      'Develops from two halves that fuse at the metopic suture',
      'Protects the frontal lobes of the brain',
      'Articulates with 12 bones total',
    ],
    landmarks: [
      { name: 'Glabella', type: 'other', description: 'Smooth midline prominence between the superciliary arches', clinicalSignificance: 'Landmark for frontal sinus location' },
      { name: 'Supraorbital margin', type: 'other', description: 'Upper rim of the orbit', clinicalSignificance: 'Site of supraorbital nerve exit' },
      { name: 'Supraorbital notch/foramen', type: 'foramen', description: 'Opening for supraorbital nerve and vessels', clinicalSignificance: 'Nerve block site for forehead anesthesia' },
      { name: 'Frontal tuber', type: 'tuberosity', description: 'Lateral rounded prominences', clinicalSignificance: 'Palpable landmark, varies with age/sex' },
      { name: 'Temporal line', type: 'line', description: 'Curved ridge for temporalis muscle attachment', clinicalSignificance: 'Surgical landmark' },
    ],
    muscleAttachments: [
      { muscleName: 'Temporalis', attachmentType: 'origin', landmark: 'Temporal line', description: 'Partial origin of temporalis muscle' },
      { muscleName: 'Frontalis', attachmentType: 'insertion', description: 'Muscle of facial expression' },
      { muscleName: 'Corrugator supercilii', attachmentType: 'origin', description: 'Frowning muscle' },
      { muscleName: 'Orbicularis oculi', attachmentType: 'origin', landmark: 'Medial orbital margin', description: 'Eye closing muscle' },
    ],
    bloodSupply: [
      { arteryName: 'Supraorbital artery', supplyType: 'periosteal', description: 'Branch of ophthalmic artery' },
      { arteryName: 'Supratrochlear artery', supplyType: 'periosteal', description: 'Branch of ophthalmic artery' },
      { arteryName: 'Middle meningeal artery', supplyType: 'nutrient', description: 'Supplies inner table' },
    ],
    innervation: [
      { nerveName: 'Supraorbital nerve', description: 'Sensory to forehead (V1)' },
      { nerveName: 'Supratrochlear nerve', description: 'Sensory to medial forehead (V1)' },
    ],
    jointIds: ['coronal-suture', 'frontonasal-suture', 'frontozygomatic-suture'],
    ossificationCenters: 2,
    ossificationAge: 'Begins at 8 weeks gestation; metopic suture fuses by age 6',
    fractures: [
      {
        name: 'Frontal sinus fracture',
        description: 'Fracture involving the frontal sinus, may be anterior table, posterior table, or both',
        mechanism: 'High-velocity blunt trauma to forehead',
        complications: ['CSF leak', 'Meningitis', 'Mucocele formation', 'Cosmetic deformity'],
        treatment: 'Observation for anterior table only; surgical repair for posterior table involvement',
      },
    ],
    pathologies: [
      {
        name: 'Frontal sinusitis',
        description: 'Infection/inflammation of frontal sinus',
        symptoms: ['Forehead pain', 'Nasal congestion', 'Frontal headache'],
        relevantLabs: ['WBC', 'CRP'],
        relevantImaging: ['CT sinuses'],
      },
      {
        name: 'Frontal osteoma',
        description: 'Benign bony tumor of frontal sinus',
        symptoms: ['Usually asymptomatic', 'May cause obstruction'],
        relevantImaging: ['CT head'],
      },
    ],
    relevantLabs: ['Calcium', 'Phosphorus', 'Alkaline Phosphatase', 'Vitamin D'],
    relatedBones: ['parietal-left', 'parietal-right', 'sphenoid', 'ethmoid', 'nasal-left', 'nasal-right'],
  };

  bones.set('frontal', frontalBone);

  // Parietal bones (paired)
  const parietalBoneTemplate: Omit<Bone, 'id' | 'name' | 'side'> = {
    latinName: 'Os parietale',
    type: 'flat',
    division: 'axial',
    region: 'skull-cranial',
    paired: true,
    location: 'Superior and lateral cranium, forming the roof and sides of the skull',
    explanations: {
      level1: 'The parietal bones are the two large, curved bones that form the top and sides of your head. If you put your hands on top of your head, you\'re touching your parietal bones! They protect the upper parts of your brain.',
      level2: 'The two parietal bones form most of the roof and upper sides of the skull. They meet each other at the top of the head at the sagittal suture and connect to the frontal bone at the coronal suture. Their inner surface has grooves for blood vessels.',
      level3: 'Each parietal bone is a quadrilateral flat bone with four borders and four angles. The internal surface shows impressions of meningeal vessels and the superior sagittal sinus. The parietal eminence marks the site of initial ossification. The temporal line provides attachment for the temporalis muscle.',
      level4: 'The parietal bone develops via intramembranous ossification from a single center at the parietal eminence (week 8 gestation). The four angles correspond to fontanelles in the infant: anterior (bregma), posterior (lambda), anterolateral (pterion), and posterolateral (asterion). The pterion is clinically significant as the location of the middle meningeal artery.',
      level5: 'The pterion is the weakest point of the skull and overlies the anterior branch of the middle meningeal artery - epidural hematoma risk with trauma. Parietal foramina (bilateral) transmit emissary veins, potential route for infection spread. Skull thickness varies significantly at the parietal bone; thin areas may mimic pathology on imaging.',
    },
    keyFacts: [
      'Paired bones forming skull roof',
      'Meet at sagittal suture superiorly',
      'Four corners correspond to infant fontanelles',
      'Pterion (anterolateral corner) is the weakest skull point',
      'Protects parietal lobes of brain',
    ],
    landmarks: [
      { name: 'Parietal eminence', type: 'tuberosity', description: 'Most convex point, site of ossification', clinicalSignificance: 'Palpable landmark' },
      { name: 'Superior temporal line', type: 'line', description: 'Upper ridge for temporalis fascia', clinicalSignificance: 'Surgical landmark' },
      { name: 'Inferior temporal line', type: 'line', description: 'Lower ridge for temporalis muscle', clinicalSignificance: 'Muscle attachment boundary' },
      { name: 'Parietal foramen', type: 'foramen', description: 'Small opening for emissary vein', clinicalSignificance: 'Potential infection route' },
    ],
    muscleAttachments: [
      { muscleName: 'Temporalis', attachmentType: 'origin', landmark: 'Inferior temporal line', description: 'Major jaw closing muscle' },
    ],
    bloodSupply: [
      { arteryName: 'Middle meningeal artery', supplyType: 'periosteal', description: 'Main blood supply to inner table' },
      { arteryName: 'Superficial temporal artery', supplyType: 'periosteal', description: 'Supplies outer table' },
    ],
    innervation: [
      { nerveName: 'Auriculotemporal nerve', description: 'Sensory to lateral scalp' },
      { nerveName: 'Greater occipital nerve', description: 'Sensory to posterior scalp' },
    ],
    jointIds: ['sagittal-suture', 'coronal-suture', 'squamous-suture', 'lambdoid-suture'],
    ossificationCenters: 1,
    ossificationAge: 'Single center at 8 weeks gestation',
    fractures: [
      {
        name: 'Parietal skull fracture',
        description: 'Linear or depressed fracture of parietal bone',
        mechanism: 'Direct trauma to head',
        complications: ['Epidural hematoma (especially at pterion)', 'Subdural hematoma', 'Brain contusion'],
        treatment: 'Observation for linear; surgical elevation for depressed >1cm',
      },
    ],
    pathologies: [
      {
        name: 'Epidural hematoma',
        description: 'Blood collection between skull and dura, often from middle meningeal artery injury',
        etiology: 'Trauma to pterion region',
        symptoms: ['Lucid interval', 'Rapidly declining consciousness', 'Pupil dilation'],
        relevantImaging: ['CT head without contrast'],
      },
    ],
    relevantLabs: ['Calcium', 'Phosphorus', 'Alkaline Phosphatase'],
    fmaId: 'FMA:52784',
    relatedBones: ['frontal', 'temporal-left', 'temporal-right', 'occipital', 'sphenoid'],
  };

  bones.set('parietal-left', {
    ...parietalBoneTemplate,
    id: 'parietal-left',
    name: 'Left Parietal Bone',
    side: 'left',
    fmaId: 'FMA:52785',
  });

  bones.set('parietal-right', {
    ...parietalBoneTemplate,
    id: 'parietal-right',
    name: 'Right Parietal Bone',
    side: 'right',
    fmaId: 'FMA:52786',
  });

  // Temporal bones (paired)
  const temporalBoneTemplate: Omit<Bone, 'id' | 'name' | 'side'> = {
    latinName: 'Os temporale',
    type: 'irregular',
    division: 'axial',
    region: 'skull-cranial',
    paired: true,
    location: 'Lateral skull, housing the ear structures',
    explanations: {
      level1: 'Your temporal bones are on the sides of your head, right around your ears. They\'re named "temporal" because this is where your hair often turns gray first (temporal means "related to time"). These bones protect your hearing and balance organs!',
      level2: 'The temporal bones form the lower sides of the skull and house all the structures for hearing and balance. Each has a bony projection (mastoid process) that you can feel behind your ear. The jaw joint (TMJ) is formed where your jawbone meets the temporal bone.',
      level3: 'The temporal bone has four parts: squamous (flat), tympanic (surrounding ear canal), petrous (containing inner ear), and mastoid (with air cells). The internal carotid artery passes through, and the facial nerve runs a complex course within it. It articulates with the mandible at the temporomandibular joint.',
      level4: 'The petrous portion is one of the densest bones in the body, protecting the cochlea and vestibular apparatus. The tegmen tympani forms a thin roof over the middle ear, a potential route for infection spread. The stylomastoid foramen marks the exit point of the facial nerve. Pneumatization of the mastoid process is variable.',
      level5: 'Temporal bone fractures are classified as longitudinal (80%, conductive hearing loss, facial palsy in 20%) or transverse (20%, sensorineural hearing loss, facial palsy in 50%). Cholesteatoma can erode temporal bone and spread to CNS. Mastoiditis may lead to Bezold abscess (SCM), sigmoid sinus thrombosis, or epidural abscess.',
    },
    keyFacts: [
      'Houses the middle and inner ear',
      'Contains the internal carotid artery',
      'Facial nerve passes through it',
      'Forms the TMJ with mandible',
      'Mastoid process is palpable behind ear',
    ],
    landmarks: [
      { name: 'Mastoid process', type: 'process', description: 'Palpable projection behind ear', clinicalSignificance: 'Attachment for SCM; site of mastoiditis' },
      { name: 'External acoustic meatus', type: 'canal', description: 'Ear canal opening', clinicalSignificance: 'Access for otoscopy' },
      { name: 'Styloid process', type: 'process', description: 'Slender pointed projection', clinicalSignificance: 'Muscle attachments; Eagle syndrome if elongated' },
      { name: 'Zygomatic process', type: 'process', description: 'Projects forward to form cheek', clinicalSignificance: 'Fracture site in facial trauma' },
      { name: 'Mandibular fossa', type: 'fossa', description: 'Depression for TMJ', clinicalSignificance: 'Mandible articulation site' },
      { name: 'Internal acoustic meatus', type: 'canal', description: 'Canal for CN VII and VIII', clinicalSignificance: 'Acoustic neuroma location' },
      { name: 'Carotid canal', type: 'canal', description: 'Passage for internal carotid', clinicalSignificance: 'Skull base fracture risk' },
      { name: 'Stylomastoid foramen', type: 'foramen', description: 'Exit for facial nerve', clinicalSignificance: 'Parotid surgery landmark' },
    ],
    muscleAttachments: [
      { muscleName: 'Temporalis', attachmentType: 'origin', description: 'From temporal fossa' },
      { muscleName: 'Sternocleidomastoid', attachmentType: 'insertion', landmark: 'Mastoid process', description: 'Major neck rotator' },
      { muscleName: 'Splenius capitis', attachmentType: 'insertion', landmark: 'Mastoid process', description: 'Head extensor' },
      { muscleName: 'Longissimus capitis', attachmentType: 'insertion', landmark: 'Mastoid process', description: 'Head extensor' },
      { muscleName: 'Digastric (posterior belly)', attachmentType: 'origin', landmark: 'Mastoid notch', description: 'Jaw depressor' },
    ],
    bloodSupply: [
      { arteryName: 'Middle meningeal artery', supplyType: 'periosteal' },
      { arteryName: 'Posterior auricular artery', supplyType: 'periosteal' },
      { arteryName: 'Stylomastoid artery', supplyType: 'nutrient' },
    ],
    innervation: [
      { nerveName: 'Auriculotemporal nerve', description: 'Sensory (V3)' },
      { nerveName: 'Great auricular nerve', description: 'Sensory (C2-C3)' },
    ],
    jointIds: ['temporomandibular-joint', 'squamous-suture'],
    ossificationCenters: 3,
    ossificationAge: 'Multiple centers; petrous portion at 5 months gestation',
    fractures: [
      {
        name: 'Longitudinal temporal bone fracture',
        description: 'Fracture parallel to long axis of petrous portion',
        mechanism: 'Lateral head trauma',
        population: 'Most common temporal bone fracture (80%)',
        complications: ['Conductive hearing loss', 'Facial nerve palsy (20%)', 'CSF leak'],
      },
      {
        name: 'Transverse temporal bone fracture',
        description: 'Fracture perpendicular to petrous axis',
        mechanism: 'Frontal/occipital trauma',
        complications: ['Sensorineural hearing loss', 'Facial nerve palsy (50%)', 'Vertigo'],
      },
    ],
    pathologies: [
      {
        name: 'Mastoiditis',
        description: 'Infection of mastoid air cells',
        etiology: 'Spread from otitis media',
        symptoms: ['Postauricular swelling', 'Ear pain', 'Fever', 'Erythema over mastoid'],
        relevantLabs: ['WBC', 'CRP'],
        relevantImaging: ['CT temporal bone'],
      },
      {
        name: 'Cholesteatoma',
        description: 'Abnormal skin growth in middle ear',
        symptoms: ['Hearing loss', 'Ear drainage', 'Dizziness'],
        relevantImaging: ['CT temporal bone', 'MRI'],
      },
    ],
    relevantLabs: ['CBC', 'CRP', 'ESR'],
    fmaId: 'FMA:52737',
    relatedBones: ['parietal-left', 'parietal-right', 'occipital', 'sphenoid', 'zygomatic-left', 'zygomatic-right', 'mandible'],
  };

  bones.set('temporal-left', {
    ...temporalBoneTemplate,
    id: 'temporal-left',
    name: 'Left Temporal Bone',
    side: 'left',
    fmaId: 'FMA:52738',
  });

  bones.set('temporal-right', {
    ...temporalBoneTemplate,
    id: 'temporal-right',
    name: 'Right Temporal Bone',
    side: 'right',
    fmaId: 'FMA:52739',
  });

  // Occipital bone
  const occipitalBone: Bone = {
    id: 'occipital',
    name: 'Occipital Bone',
    latinName: 'Os occipitale',
    fmaId: 'FMA:52735',
    type: 'flat',
    division: 'axial',
    region: 'skull-cranial',
    paired: false,
    side: 'midline',
    location: 'Posterior cranium, forming the back and base of the skull',
    explanations: {
      level1: 'The occipital bone is at the back of your head. It has a big hole called the foramen magnum where your brain connects to your spinal cord! If you feel the bump at the back of your head, that\'s part of the occipital bone.',
      level2: 'The occipital bone forms the back and base of the skull. Its most important feature is the foramen magnum, the large opening where the brainstem becomes the spinal cord. The bone also has a bump called the external occipital protuberance that you can feel at the back of your head.',
      level3: 'The occipital bone has four parts: basilar, two lateral, and squamous. The foramen magnum transmits the medulla oblongata, meninges, vertebral arteries, and spinal accessory nerves. Occipital condyles on either side articulate with C1 (atlas) to allow head nodding. The hypoglossal canal transmits CN XII.',
      level4: 'The occipital bone develops from both cartilage (basioccipital, exoccipital) and membrane (supraoccipital). The external occipital protuberance and nuchal lines provide attachment for posterior neck muscles. The internal surface shows the cruciform eminence, grooves for transverse and sigmoid sinuses, and the internal occipital protuberance.',
      level5: 'Occipital condyle fractures are classified by Anderson-Montesano (I: impaction, II: basilar skull extension, III: avulsion). Chiari malformations involve cerebellar tonsillar herniation through the foramen magnum. Platybasia (flat skull base) may cause brainstem compression. Craniocervical junction pathology requires specialized imaging protocols.',
    },
    keyFacts: [
      'Contains the foramen magnum for brainstem passage',
      'Articulates with C1 (atlas) at occipital condyles',
      'Forms the posterior cranial fossa',
      'External occipital protuberance is palpable',
      'Protects the cerebellum and brainstem',
    ],
    landmarks: [
      { name: 'Foramen magnum', type: 'foramen', description: 'Large opening for brainstem', clinicalSignificance: 'Herniation site; Chiari malformation' },
      { name: 'Occipital condyles', type: 'condyle', description: 'Bilateral articulations with atlas', clinicalSignificance: 'Fracture affects stability' },
      { name: 'External occipital protuberance', type: 'process', description: 'Posterior midline bump', clinicalSignificance: 'Palpable landmark' },
      { name: 'Superior nuchal line', type: 'line', description: 'Ridge for muscle attachment', clinicalSignificance: 'Trapezius attachment' },
      { name: 'Inferior nuchal line', type: 'line', description: 'Lower ridge for deep muscles', clinicalSignificance: 'Rectus capitis attachments' },
      { name: 'Hypoglossal canal', type: 'canal', description: 'Passage for CN XII', clinicalSignificance: 'Hypoglossal palsy with fracture' },
    ],
    muscleAttachments: [
      { muscleName: 'Trapezius', attachmentType: 'origin', landmark: 'Superior nuchal line', description: 'Large back muscle' },
      { muscleName: 'Semispinalis capitis', attachmentType: 'insertion', description: 'Head extensor' },
      { muscleName: 'Rectus capitis posterior major', attachmentType: 'insertion', description: 'Suboccipital muscle' },
      { muscleName: 'Rectus capitis posterior minor', attachmentType: 'insertion', description: 'Suboccipital muscle' },
      { muscleName: 'Obliquus capitis superior', attachmentType: 'insertion', description: 'Suboccipital muscle' },
    ],
    bloodSupply: [
      { arteryName: 'Occipital artery', supplyType: 'periosteal', description: 'Branch of external carotid' },
      { arteryName: 'Posterior meningeal artery', supplyType: 'nutrient' },
    ],
    innervation: [
      { nerveName: 'Greater occipital nerve', description: 'Sensory to posterior scalp' },
      { nerveName: 'Lesser occipital nerve', description: 'Sensory to lateral scalp' },
      { nerveName: 'Third occipital nerve', description: 'Sensory to suboccipital region' },
    ],
    jointIds: ['atlanto-occipital-joint', 'lambdoid-suture'],
    ossificationCenters: 4,
    ossificationAge: 'Begins 8-12 weeks gestation; fuses by age 6',
    fractures: [
      {
        name: 'Occipital condyle fracture',
        description: 'Fracture of the occipital condyles',
        mechanism: 'High-energy trauma, often with cervical spine injury',
        complications: ['Cranial nerve palsy (IX-XII)', 'Vertebral artery injury', 'Instability'],
        treatment: 'Collar immobilization or occipitocervical fusion depending on type',
      },
    ],
    pathologies: [
      {
        name: 'Chiari I malformation',
        description: 'Cerebellar tonsillar herniation >5mm through foramen magnum',
        symptoms: ['Headache', 'Neck pain', 'Syringomyelia symptoms'],
        relevantImaging: ['MRI brain and cervical spine'],
      },
    ],
    relevantLabs: ['Calcium', 'Phosphorus', 'Vitamin D'],
    relatedBones: ['parietal-left', 'parietal-right', 'temporal-left', 'temporal-right', 'sphenoid', 'atlas'],
  };

  bones.set('occipital', occipitalBone);

  // Sphenoid bone
  const sphenoidBone: Bone = {
    id: 'sphenoid',
    name: 'Sphenoid Bone',
    latinName: 'Os sphenoidale',
    fmaId: 'FMA:52736',
    type: 'irregular',
    division: 'axial',
    region: 'skull-cranial',
    paired: false,
    side: 'midline',
    location: 'Central skull base, spanning the entire width of the cranium',
    explanations: {
      level1: 'The sphenoid bone looks like a butterfly or bat with wings spread out! It sits in the middle of your skull and connects to almost every other skull bone. The pituitary gland, which controls many of your hormones, sits in a little saddle-shaped dip in this bone.',
      level2: 'The sphenoid bone is shaped like a butterfly and forms the middle part of the skull base. It has a central body with the sella turcica (Turkish saddle) where the pituitary gland sits. Two pairs of "wings" extend out to form parts of the eye sockets and temple areas.',
      level3: 'The sphenoid bone consists of a body (with sphenoid sinuses and sella turcica), lesser wings (forming posterior orbit roof), greater wings (forming middle cranial fossa floor), and pterygoid processes (for muscle attachment). Multiple foramina transmit crucial neurovascular structures: optic canal (CN II), superior orbital fissure (CN III, IV, V1, VI), foramen rotundum (V2), foramen ovale (V3), foramen spinosum (middle meningeal artery).',
      level4: 'The sphenoid develops from multiple ossification centers and is one of the last bones to complete fusion. The optic chiasm lies superior to the diaphragma sellae. The cavernous sinuses flank the sella laterally, containing CN III, IV, V1, V2, VI and the internal carotid artery. The pterygoid canal (Vidian canal) transmits autonomic fibers.',
      level5: 'Pituitary adenomas may erode the sellar floor and extend into the sphenoid sinus (transphenoidal surgery approach). Sphenoid wing meningiomas cause distinct syndromes based on location (medial vs lateral). Carotid-cavernous fistulas present with pulsatile exophthalmos. Skull base osteomyelitis can involve the sphenoid from sinonasal spread.',
    },
    keyFacts: [
      'Butterfly-shaped bone at skull base',
      'Contains sella turcica for pituitary gland',
      'Articulates with all other cranial bones',
      'Multiple foramina for cranial nerves',
      'Sphenoid sinus accessible for pituitary surgery',
    ],
    landmarks: [
      { name: 'Sella turcica', type: 'fossa', description: 'Saddle-shaped depression for pituitary', clinicalSignificance: 'Pituitary tumor location' },
      { name: 'Optic canal', type: 'canal', description: 'Passage for optic nerve and ophthalmic artery', clinicalSignificance: 'Optic nerve compression' },
      { name: 'Superior orbital fissure', type: 'other', description: 'Gap transmitting multiple nerves', clinicalSignificance: 'Superior orbital fissure syndrome' },
      { name: 'Foramen rotundum', type: 'foramen', description: 'Passage for V2', clinicalSignificance: 'Trigeminal neuralgia' },
      { name: 'Foramen ovale', type: 'foramen', description: 'Passage for V3', clinicalSignificance: 'Needle access for trigeminal procedures' },
      { name: 'Foramen spinosum', type: 'foramen', description: 'Passage for middle meningeal artery', clinicalSignificance: 'Epidural hematoma source' },
      { name: 'Pterygoid processes', type: 'process', description: 'Vertical plates for muscle attachment', clinicalSignificance: 'Pterygoid muscle origins' },
    ],
    muscleAttachments: [
      { muscleName: 'Lateral pterygoid', attachmentType: 'origin', landmark: 'Lateral pterygoid plate', description: 'Jaw protruder' },
      { muscleName: 'Medial pterygoid', attachmentType: 'origin', landmark: 'Medial pterygoid plate', description: 'Jaw elevator' },
      { muscleName: 'Temporalis', attachmentType: 'origin', landmark: 'Greater wing', description: 'Partial origin' },
    ],
    bloodSupply: [
      { arteryName: 'Middle meningeal artery', supplyType: 'periosteal' },
      { arteryName: 'Internal carotid artery', supplyType: 'other', description: 'Passes through cavernous sinus' },
    ],
    innervation: [
      { nerveName: 'Trigeminal nerve branches', description: 'Multiple divisions pass through foramina' },
    ],
    jointIds: ['sphenosquamosal-suture'],
    ossificationCenters: 14,
    ossificationAge: 'Multiple centers; fusion complete by age 25',
    fractures: [
      {
        name: 'Sphenoid wing fracture',
        description: 'Fracture of greater or lesser wing',
        mechanism: 'Lateral head trauma',
        complications: ['Superior orbital fissure syndrome', 'Carotid injury', 'Optic nerve injury'],
      },
    ],
    pathologies: [
      {
        name: 'Pituitary adenoma',
        description: 'Benign tumor of pituitary gland in sella turcica',
        symptoms: ['Hormonal dysfunction', 'Visual field defects', 'Headache'],
        relevantLabs: ['Prolactin', 'GH', 'IGF-1', 'TSH', 'Cortisol'],
        relevantImaging: ['MRI pituitary with contrast'],
      },
      {
        name: 'Sphenoid sinusitis',
        description: 'Infection of sphenoid sinus',
        symptoms: ['Deep headache', 'Vertex pain', 'May cause cavernous sinus thrombosis'],
        relevantLabs: ['WBC', 'CRP'],
        relevantImaging: ['CT sinuses'],
      },
    ],
    relevantLabs: ['Pituitary hormones', 'Calcium'],
    relatedBones: ['frontal', 'parietal-left', 'parietal-right', 'temporal-left', 'temporal-right', 'occipital', 'ethmoid', 'zygomatic-left', 'zygomatic-right'],
  };

  bones.set('sphenoid', sphenoidBone);

  // Ethmoid bone
  const ethmoidBone: Bone = {
    id: 'ethmoid',
    name: 'Ethmoid Bone',
    latinName: 'Os ethmoidale',
    fmaId: 'FMA:52740',
    type: 'irregular',
    division: 'axial',
    region: 'skull-cranial',
    paired: false,
    side: 'midline',
    location: 'Anterior skull base between the orbits, forming part of the nasal cavity',
    explanations: {
      level1: 'The ethmoid bone is like a sponge inside your nose! It has many tiny air pockets that help warm and moisten the air you breathe. It also has a special thin plate that separates your nose from your brain.',
      level2: 'The ethmoid bone sits between your eyes and forms part of the nasal cavity roof. It contains the ethmoid sinuses (air cells) and has a thin plate called the cribriform plate with tiny holes for smell nerves to reach your brain. The perpendicular plate forms part of your nasal septum.',
      level3: 'The ethmoid bone consists of the cribriform plate (forming part of anterior cranial fossa floor), perpendicular plate (contributing to nasal septum), and paired lateral masses (labyrinths) containing the ethmoid air cells. The crista galli projects upward for falx cerebri attachment. Superior and middle nasal conchae are ethmoid projections.',
      level4: 'The cribriform plate is perforated by olfactory nerve filaments (CN I) and the anterior ethmoidal nerve. The lamina papyracea (lateral wall) is extremely thin, allowing orbital complications of sinusitis. The ethmoid develops from three centers via endochondral ossification. The uncinate process is key in sinus drainage pathways.',
      level5: 'CSF rhinorrhea commonly occurs through cribriform plate fractures. Ethmoid mucoceles can cause proptosis and diplopia. The anterior ethmoidal artery (from ophthalmic) is a key landmark in endoscopic sinus surgery. Esthesioneuroblastoma (olfactory neuroblastoma) arises from olfactory epithelium at the cribriform plate.',
    },
    keyFacts: [
      'Contains ethmoid air cells (sinuses)',
      'Cribriform plate transmits olfactory nerves',
      'Lamina papyracea is paper-thin (orbital wall)',
      'Forms superior and middle nasal conchae',
      'Perpendicular plate contributes to nasal septum',
    ],
    landmarks: [
      { name: 'Cribriform plate', type: 'other', description: 'Perforated plate for olfactory nerves', clinicalSignificance: 'CSF leak site with fracture' },
      { name: 'Crista galli', type: 'crest', description: 'Upward projection for falx attachment', clinicalSignificance: 'Surgical landmark' },
      { name: 'Perpendicular plate', type: 'other', description: 'Vertical plate forming septum', clinicalSignificance: 'Septal deviation component' },
      { name: 'Lamina papyracea', type: 'other', description: 'Paper-thin orbital wall', clinicalSignificance: 'Orbital cellulitis spread route' },
      { name: 'Superior nasal concha', type: 'other', description: 'Upper turbinate', clinicalSignificance: 'Smell nerve distribution' },
      { name: 'Middle nasal concha', type: 'other', description: 'Middle turbinate', clinicalSignificance: 'Key sinus surgery landmark' },
    ],
    muscleAttachments: [],
    bloodSupply: [
      { arteryName: 'Anterior ethmoidal artery', supplyType: 'nutrient', description: 'From ophthalmic artery' },
      { arteryName: 'Posterior ethmoidal artery', supplyType: 'nutrient', description: 'From ophthalmic artery' },
      { arteryName: 'Sphenopalatine artery', supplyType: 'periosteal', description: 'From maxillary artery' },
    ],
    innervation: [
      { nerveName: 'Olfactory nerve (CN I)', description: 'Smell sensation through cribriform plate' },
      { nerveName: 'Anterior ethmoidal nerve', description: 'Sensory to nasal cavity' },
    ],
    jointIds: ['frontoethmoidal-suture'],
    ossificationCenters: 3,
    ossificationAge: 'Begins in first year; fuses by age 25',
    fractures: [
      {
        name: 'Cribriform plate fracture',
        description: 'Fracture of the thin cribriform plate',
        mechanism: 'Frontal trauma, naso-orbital-ethmoid fractures',
        complications: ['CSF rhinorrhea', 'Anosmia', 'Meningitis risk'],
        treatment: 'Neurosurgical repair if persistent CSF leak',
      },
    ],
    pathologies: [
      {
        name: 'Ethmoid sinusitis',
        description: 'Infection of ethmoid air cells',
        symptoms: ['Nasal congestion', 'Pain between eyes', 'Orbital symptoms if severe'],
        relevantLabs: ['WBC', 'CRP'],
        relevantImaging: ['CT sinuses'],
      },
      {
        name: 'Orbital cellulitis',
        description: 'Infection spread from ethmoid to orbit',
        symptoms: ['Proptosis', 'Diplopia', 'Eye pain', 'Fever'],
        relevantLabs: ['WBC', 'Blood culture'],
        relevantImaging: ['CT orbits with contrast'],
      },
    ],
    relevantLabs: ['WBC', 'CRP'],
    relatedBones: ['frontal', 'sphenoid', 'nasal-left', 'nasal-right', 'maxilla-left', 'maxilla-right', 'lacrimal-left', 'lacrimal-right'],
  };

  bones.set('ethmoid', ethmoidBone);

  // ============================================
  // Add remaining bones with basic info
  // (In production, each would have full detail like above)
  // ============================================

  // Helper to create basic bone entries
  const createBasicBone = (
    id: string,
    name: string,
    latinName: string,
    type: BoneType,
    division: SkeletalDivision,
    region: SkeletalRegion,
    paired: boolean,
    side: 'left' | 'right' | 'midline' | undefined,
    fmaId: string
  ): Bone => ({
    id,
    name,
    latinName,
    fmaId,
    type,
    division,
    region,
    paired,
    side,
    location: `Part of the ${region.replace(/-/g, ' ')}`,
    explanations: {
      level1: `The ${name.toLowerCase()} is an important bone in your body that helps with support and movement.`,
      level2: `The ${name.toLowerCase()} (${latinName}) is a ${type} bone in the ${region.replace(/-/g, ' ')} region.`,
      level3: `The ${name.toLowerCase()} is classified as a ${type} bone of the ${division} skeleton, located in the ${region.replace(/-/g, ' ')}.`,
      level4: `The ${name.toLowerCase()} (${latinName}, ${fmaId}) develops via ${type === 'flat' ? 'intramembranous' : 'endochondral'} ossification.`,
      level5: `Clinical considerations for the ${name.toLowerCase()} include common fracture patterns, pathologies, and surgical approaches relevant to its anatomical location.`,
    },
    keyFacts: [
      `Classified as a ${type} bone`,
      `Part of the ${division} skeleton`,
      `Located in the ${region.replace(/-/g, ' ')}`,
      paired ? 'Exists as a pair (left and right)' : 'Unpaired midline bone',
    ],
    landmarks: [],
    muscleAttachments: [],
    bloodSupply: [],
    innervation: [],
    jointIds: [],
    fractures: [],
    pathologies: [],
    relevantLabs: ['Calcium', 'Phosphorus', 'Alkaline Phosphatase', 'Vitamin D'],
  });

  // Facial bones (14)
  bones.set('nasal-left', createBasicBone('nasal-left', 'Left Nasal Bone', 'Os nasale', 'flat', 'axial', 'skull-facial', true, 'left', 'FMA:52746'));
  bones.set('nasal-right', createBasicBone('nasal-right', 'Right Nasal Bone', 'Os nasale', 'flat', 'axial', 'skull-facial', true, 'right', 'FMA:52747'));
  bones.set('maxilla-left', createBasicBone('maxilla-left', 'Left Maxilla', 'Maxilla', 'irregular', 'axial', 'skull-facial', true, 'left', 'FMA:52749'));
  bones.set('maxilla-right', createBasicBone('maxilla-right', 'Right Maxilla', 'Maxilla', 'irregular', 'axial', 'skull-facial', true, 'right', 'FMA:52750'));
  bones.set('zygomatic-left', createBasicBone('zygomatic-left', 'Left Zygomatic Bone', 'Os zygomaticum', 'irregular', 'axial', 'skull-facial', true, 'left', 'FMA:52752'));
  bones.set('zygomatic-right', createBasicBone('zygomatic-right', 'Right Zygomatic Bone', 'Os zygomaticum', 'irregular', 'axial', 'skull-facial', true, 'right', 'FMA:52753'));
  bones.set('lacrimal-left', createBasicBone('lacrimal-left', 'Left Lacrimal Bone', 'Os lacrimale', 'flat', 'axial', 'skull-facial', true, 'left', 'FMA:52756'));
  bones.set('lacrimal-right', createBasicBone('lacrimal-right', 'Right Lacrimal Bone', 'Os lacrimale', 'flat', 'axial', 'skull-facial', true, 'right', 'FMA:52757'));
  bones.set('palatine-left', createBasicBone('palatine-left', 'Left Palatine Bone', 'Os palatinum', 'irregular', 'axial', 'skull-facial', true, 'left', 'FMA:52760'));
  bones.set('palatine-right', createBasicBone('palatine-right', 'Right Palatine Bone', 'Os palatinum', 'irregular', 'axial', 'skull-facial', true, 'right', 'FMA:52761'));
  bones.set('inferior-nasal-concha-left', createBasicBone('inferior-nasal-concha-left', 'Left Inferior Nasal Concha', 'Concha nasalis inferior', 'irregular', 'axial', 'skull-facial', true, 'left', 'FMA:52764'));
  bones.set('inferior-nasal-concha-right', createBasicBone('inferior-nasal-concha-right', 'Right Inferior Nasal Concha', 'Concha nasalis inferior', 'irregular', 'axial', 'skull-facial', true, 'right', 'FMA:52765'));
  bones.set('vomer', createBasicBone('vomer', 'Vomer', 'Vomer', 'flat', 'axial', 'skull-facial', false, 'midline', 'FMA:52768'));
  bones.set('mandible', createBasicBone('mandible', 'Mandible', 'Mandibula', 'irregular', 'axial', 'skull-facial', false, 'midline', 'FMA:52748'));

  // Vertebrae (26)
  for (let i = 1; i <= 7; i++) {
    const id = `cervical-${i}`;
    const name = i === 1 ? 'Atlas (C1)' : i === 2 ? 'Axis (C2)' : `Cervical Vertebra C${i}`;
    bones.set(id, createBasicBone(id, name, `Vertebra cervicalis ${i}`, 'irregular', 'axial', 'vertebral-cervical', false, 'midline', `FMA:1277${i}`));
  }
  for (let i = 1; i <= 12; i++) {
    const id = `thoracic-${i}`;
    bones.set(id, createBasicBone(id, `Thoracic Vertebra T${i}`, `Vertebra thoracica ${i}`, 'irregular', 'axial', 'vertebral-thoracic', false, 'midline', `FMA:1278${i}`));
  }
  for (let i = 1; i <= 5; i++) {
    const id = `lumbar-${i}`;
    bones.set(id, createBasicBone(id, `Lumbar Vertebra L${i}`, `Vertebra lumbalis ${i}`, 'irregular', 'axial', 'vertebral-lumbar', false, 'midline', `FMA:1279${i}`));
  }
  bones.set('sacrum', createBasicBone('sacrum', 'Sacrum', 'Os sacrum', 'irregular', 'axial', 'vertebral-sacral', false, 'midline', 'FMA:16202'));
  bones.set('coccyx', createBasicBone('coccyx', 'Coccyx', 'Os coccygis', 'irregular', 'axial', 'vertebral-sacral', false, 'midline', 'FMA:20229'));

  // Thoracic cage (25)
  bones.set('sternum', createBasicBone('sternum', 'Sternum', 'Sternum', 'flat', 'axial', 'thoracic-cage', false, 'midline', 'FMA:7485'));
  for (let i = 1; i <= 12; i++) {
    bones.set(`rib-left-${i}`, createBasicBone(`rib-left-${i}`, `Left Rib ${i}`, `Costa ${i}`, 'flat', 'axial', 'thoracic-cage', true, 'left', `FMA:748${i + 5}`));
    bones.set(`rib-right-${i}`, createBasicBone(`rib-right-${i}`, `Right Rib ${i}`, `Costa ${i}`, 'flat', 'axial', 'thoracic-cage', true, 'right', `FMA:749${i + 5}`));
  }

  // Pectoral girdle (4)
  bones.set('clavicle-left', createBasicBone('clavicle-left', 'Left Clavicle', 'Clavicula', 'long', 'appendicular', 'pectoral-girdle', true, 'left', 'FMA:13321'));
  bones.set('clavicle-right', createBasicBone('clavicle-right', 'Right Clavicle', 'Clavicula', 'long', 'appendicular', 'pectoral-girdle', true, 'right', 'FMA:13322'));
  bones.set('scapula-left', createBasicBone('scapula-left', 'Left Scapula', 'Scapula', 'flat', 'appendicular', 'pectoral-girdle', true, 'left', 'FMA:13394'));
  bones.set('scapula-right', createBasicBone('scapula-right', 'Right Scapula', 'Scapula', 'flat', 'appendicular', 'pectoral-girdle', true, 'right', 'FMA:13395'));

  // Upper limb - arm (2)
  bones.set('humerus-left', createBasicBone('humerus-left', 'Left Humerus', 'Humerus', 'long', 'appendicular', 'upper-limb-arm', true, 'left', 'FMA:13303'));
  bones.set('humerus-right', createBasicBone('humerus-right', 'Right Humerus', 'Humerus', 'long', 'appendicular', 'upper-limb-arm', true, 'right', 'FMA:13304'));

  // Upper limb - forearm (4)
  bones.set('radius-left', createBasicBone('radius-left', 'Left Radius', 'Radius', 'long', 'appendicular', 'upper-limb-forearm', true, 'left', 'FMA:23463'));
  bones.set('radius-right', createBasicBone('radius-right', 'Right Radius', 'Radius', 'long', 'appendicular', 'upper-limb-forearm', true, 'right', 'FMA:23464'));
  bones.set('ulna-left', createBasicBone('ulna-left', 'Left Ulna', 'Ulna', 'long', 'appendicular', 'upper-limb-forearm', true, 'left', 'FMA:23466'));
  bones.set('ulna-right', createBasicBone('ulna-right', 'Right Ulna', 'Ulna', 'long', 'appendicular', 'upper-limb-forearm', true, 'right', 'FMA:23467'));

  // Upper limb - hand (54: 16 carpals, 10 metacarpals, 28 phalanges)
  const carpals = ['scaphoid', 'lunate', 'triquetrum', 'pisiform', 'trapezium', 'trapezoid', 'capitate', 'hamate'];
  carpals.forEach((c, i) => {
    bones.set(`${c}-left`, createBasicBone(`${c}-left`, `Left ${c.charAt(0).toUpperCase() + c.slice(1)}`, `Os ${c}`, 'short', 'appendicular', 'upper-limb-hand', true, 'left', `FMA:2350${i}`));
    bones.set(`${c}-right`, createBasicBone(`${c}-right`, `Right ${c.charAt(0).toUpperCase() + c.slice(1)}`, `Os ${c}`, 'short', 'appendicular', 'upper-limb-hand', true, 'right', `FMA:2351${i}`));
  });
  for (let i = 1; i <= 5; i++) {
    bones.set(`metacarpal-${i}-left`, createBasicBone(`metacarpal-${i}-left`, `Left Metacarpal ${i}`, `Os metacarpale ${i}`, 'long', 'appendicular', 'upper-limb-hand', true, 'left', `FMA:2360${i}`));
    bones.set(`metacarpal-${i}-right`, createBasicBone(`metacarpal-${i}-right`, `Right Metacarpal ${i}`, `Os metacarpale ${i}`, 'long', 'appendicular', 'upper-limb-hand', true, 'right', `FMA:2361${i}`));
  }
  // Phalanges of hand (14 per hand)
  const fingerNames = ['thumb', 'index', 'middle', 'ring', 'little'];
  const phalanxTypes = ['proximal', 'middle', 'distal'];
  fingerNames.forEach((finger, fi) => {
    const types = finger === 'thumb' ? ['proximal', 'distal'] : phalanxTypes;
    types.forEach((pType, pi) => {
      bones.set(`phalanx-${pType}-${finger}-left`, createBasicBone(
        `phalanx-${pType}-${finger}-left`,
        `Left ${pType.charAt(0).toUpperCase() + pType.slice(1)} Phalanx (${finger})`,
        `Phalanx ${pType} digiti ${fi + 1}`,
        'long', 'appendicular', 'upper-limb-hand', true, 'left', `FMA:237${fi}${pi}`
      ));
      bones.set(`phalanx-${pType}-${finger}-right`, createBasicBone(
        `phalanx-${pType}-${finger}-right`,
        `Right ${pType.charAt(0).toUpperCase() + pType.slice(1)} Phalanx (${finger})`,
        `Phalanx ${pType} digiti ${fi + 1}`,
        'long', 'appendicular', 'upper-limb-hand', true, 'right', `FMA:238${fi}${pi}`
      ));
    });
  });

  // Pelvic girdle (2)
  bones.set('hip-bone-left', createBasicBone('hip-bone-left', 'Left Hip Bone', 'Os coxae', 'irregular', 'appendicular', 'pelvic-girdle', true, 'left', 'FMA:16585'));
  bones.set('hip-bone-right', createBasicBone('hip-bone-right', 'Right Hip Bone', 'Os coxae', 'irregular', 'appendicular', 'pelvic-girdle', true, 'right', 'FMA:16586'));

  // Lower limb - thigh (4)
  bones.set('femur-left', createBasicBone('femur-left', 'Left Femur', 'Femur', 'long', 'appendicular', 'lower-limb-thigh', true, 'left', 'FMA:24474'));
  bones.set('femur-right', createBasicBone('femur-right', 'Right Femur', 'Femur', 'long', 'appendicular', 'lower-limb-thigh', true, 'right', 'FMA:24475'));
  bones.set('patella-left', createBasicBone('patella-left', 'Left Patella', 'Patella', 'sesamoid', 'appendicular', 'lower-limb-thigh', true, 'left', 'FMA:24485'));
  bones.set('patella-right', createBasicBone('patella-right', 'Right Patella', 'Patella', 'sesamoid', 'appendicular', 'lower-limb-thigh', true, 'right', 'FMA:24486'));

  // Lower limb - leg (4)
  bones.set('tibia-left', createBasicBone('tibia-left', 'Left Tibia', 'Tibia', 'long', 'appendicular', 'lower-limb-leg', true, 'left', 'FMA:24476'));
  bones.set('tibia-right', createBasicBone('tibia-right', 'Right Tibia', 'Tibia', 'long', 'appendicular', 'lower-limb-leg', true, 'right', 'FMA:24477'));
  bones.set('fibula-left', createBasicBone('fibula-left', 'Left Fibula', 'Fibula', 'long', 'appendicular', 'lower-limb-leg', true, 'left', 'FMA:24479'));
  bones.set('fibula-right', createBasicBone('fibula-right', 'Right Fibula', 'Fibula', 'long', 'appendicular', 'lower-limb-leg', true, 'right', 'FMA:24480'));

  // Lower limb - foot (52: 14 tarsals, 10 metatarsals, 28 phalanges)
  const tarsals = ['calcaneus', 'talus', 'navicular', 'cuboid', 'medial-cuneiform', 'intermediate-cuneiform', 'lateral-cuneiform'];
  tarsals.forEach((t, i) => {
    bones.set(`${t}-left`, createBasicBone(`${t}-left`, `Left ${t.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}`, `Os ${t.replace('-', ' ')}`, 'short', 'appendicular', 'lower-limb-foot', true, 'left', `FMA:2450${i}`));
    bones.set(`${t}-right`, createBasicBone(`${t}-right`, `Right ${t.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}`, `Os ${t.replace('-', ' ')}`, 'short', 'appendicular', 'lower-limb-foot', true, 'right', `FMA:2451${i}`));
  });
  for (let i = 1; i <= 5; i++) {
    bones.set(`metatarsal-${i}-left`, createBasicBone(`metatarsal-${i}-left`, `Left Metatarsal ${i}`, `Os metatarsale ${i}`, 'long', 'appendicular', 'lower-limb-foot', true, 'left', `FMA:2460${i}`));
    bones.set(`metatarsal-${i}-right`, createBasicBone(`metatarsal-${i}-right`, `Right Metatarsal ${i}`, `Os metatarsale ${i}`, 'long', 'appendicular', 'lower-limb-foot', true, 'right', `FMA:2461${i}`));
  }
  // Phalanges of foot (14 per foot)
  const toeNames = ['great-toe', 'second-toe', 'third-toe', 'fourth-toe', 'little-toe'];
  toeNames.forEach((toe, ti) => {
    const types = toe === 'great-toe' ? ['proximal', 'distal'] : phalanxTypes;
    types.forEach((pType, pi) => {
      bones.set(`phalanx-${pType}-${toe}-left`, createBasicBone(
        `phalanx-${pType}-${toe}-left`,
        `Left ${pType.charAt(0).toUpperCase() + pType.slice(1)} Phalanx (${toe.replace('-', ' ')})`,
        `Phalanx ${pType} digiti pedis ${ti + 1}`,
        'long', 'appendicular', 'lower-limb-foot', true, 'left', `FMA:247${ti}${pi}`
      ));
      bones.set(`phalanx-${pType}-${toe}-right`, createBasicBone(
        `phalanx-${pType}-${toe}-right`,
        `Right ${pType.charAt(0).toUpperCase() + pType.slice(1)} Phalanx (${toe.replace('-', ' ')})`,
        `Phalanx ${pType} digiti pedis ${ti + 1}`,
        'long', 'appendicular', 'lower-limb-foot', true, 'right', `FMA:248${ti}${pi}`
      ));
    });
  });

  // Build indexes
  bones.forEach((bone, id) => {
    // By region
    const regionList = bonesByRegion.get(bone.region) || [];
    regionList.push(id);
    bonesByRegion.set(bone.region, regionList);

    // By name (lowercase for case-insensitive lookup)
    bonesByName.set(bone.name.toLowerCase(), id);
    if (bone.latinName) {
      bonesByName.set(bone.latinName.toLowerCase(), id);
    }

    // By FMA ID
    if (bone.fmaId) {
      bonesByFmaId.set(bone.fmaId, id);
    }
  });
}

// Initialize on module load
initializeBones();

// ============================================
// API Functions
// ============================================

/**
 * Get bone by ID
 */
export function getBone(id: string): Bone | undefined {
  return bones.get(id);
}

/**
 * Get all bones
 */
export function getAllBones(): Bone[] {
  return Array.from(bones.values());
}

/**
 * Get bones by region
 */
export function getBonesByRegion(region: SkeletalRegion): Bone[] {
  const ids = bonesByRegion.get(region) || [];
  return ids.map(id => bones.get(id)!).filter(Boolean);
}

/**
 * Get bones by division
 */
export function getBonesByDivision(division: SkeletalDivision): Bone[] {
  return Array.from(bones.values()).filter(b => b.division === division);
}

/**
 * Get bones by type
 */
export function getBonesByType(type: BoneType): Bone[] {
  return Array.from(bones.values()).filter(b => b.type === type);
}

/**
 * Search bones by name
 */
export function searchBones(query: string): Bone[] {
  const lowerQuery = query.toLowerCase();
  return Array.from(bones.values()).filter(b =>
    b.name.toLowerCase().includes(lowerQuery) ||
    (b.latinName && b.latinName.toLowerCase().includes(lowerQuery))
  );
}

/**
 * Get bone by name (exact match, case-insensitive)
 */
export function getBoneByName(name: string): Bone | undefined {
  const id = bonesByName.get(name.toLowerCase());
  return id ? bones.get(id) : undefined;
}

/**
 * Get bone by FMA ID
 */
export function getBoneByFmaId(fmaId: string): Bone | undefined {
  const id = bonesByFmaId.get(fmaId);
  return id ? bones.get(id) : undefined;
}

/**
 * Get bone summaries for listing
 */
export function getBoneSummaries(): BoneSummary[] {
  return Array.from(bones.values()).map(b => ({
    id: b.id,
    name: b.name,
    region: b.region,
    type: b.type,
    division: b.division,
  }));
}

/**
 * Get region information
 */
export function getRegionInfo(region: SkeletalRegion): SkeletalRegionInfo | undefined {
  return SKELETAL_REGIONS.find(r => r.id === region);
}

/**
 * Get all region information
 */
export function getAllRegions(): SkeletalRegionInfo[] {
  return SKELETAL_REGIONS;
}

/**
 * Get bone statistics
 */
export function getBoneStatistics(): BoneStatistics {
  const stats: BoneStatistics = {
    total: bones.size,
    byDivision: { axial: 0, appendicular: 0 },
    byRegion: {} as Record<SkeletalRegion, number>,
    byType: { long: 0, short: 0, flat: 0, irregular: 0, sesamoid: 0 },
  };

  bones.forEach(bone => {
    stats.byDivision[bone.division]++;
    stats.byRegion[bone.region] = (stats.byRegion[bone.region] || 0) + 1;
    stats.byType[bone.type]++;
  });

  return stats;
}

/**
 * Get joint by ID
 */
export function getJoint(id: string): Joint | undefined {
  return joints.get(id);
}

/**
 * Get joints for a bone
 */
export function getJointsForBone(boneId: string): Joint[] {
  const bone = bones.get(boneId);
  if (!bone) return [];
  return bone.jointIds.map(jId => joints.get(jId)!).filter(Boolean);
}

/**
 * Get explanation at specified level (with fallback)
 */
export function getExplanation(bone: Bone, level: 1 | 2 | 3 | 4 | 5): string {
  const levelKey = `level${level}` as keyof typeof bone.explanations;
  if (bone.explanations[levelKey]) {
    return bone.explanations[levelKey]!;
  }
  // Fallback to lower levels
  for (let l = level - 1; l >= 1; l--) {
    const fallbackKey = `level${l}` as keyof typeof bone.explanations;
    if (bone.explanations[fallbackKey]) {
      return bone.explanations[fallbackKey]!;
    }
  }
  return 'No explanation available.';
}

/**
 * Get related bones
 */
export function getRelatedBones(boneId: string): Bone[] {
  const bone = bones.get(boneId);
  if (!bone || !bone.relatedBones) return [];
  return bone.relatedBones.map(id => bones.get(id)!).filter(Boolean);
}
