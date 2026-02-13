/**
 * Regional Encyclopedia Registry
 *
 * Master registry of all anatomical regions with 50+ regions covering
 * the entire human body organized hierarchically.
 */

import {
  AnatomicalRegion,
  RegionStructures,
  RegionContent,
  CameraPosition,
} from './types';

// Helper to create empty structures
const emptyStructures = (): RegionStructures => ({
  bones: [],
  muscles: [],
  vessels: [],
  nerves: [],
  organs: [],
  joints: [],
  ligaments: [],
  tendons: [],
});

// Helper to create empty content
const emptyContent = (): RegionContent => ({
  anatomy: [],
  physiology: [],
  pathology: [],
  histology: [],
  physicalExam: [],
});

// Default camera positions for regions
const defaultCameras: Record<string, CameraPosition> = {
  anterior: { position: { x: 0, y: 0, z: 5 }, target: { x: 0, y: 0, z: 0 }, zoom: 1 },
  posterior: { position: { x: 0, y: 0, z: -5 }, target: { x: 0, y: 0, z: 0 }, zoom: 1 },
  lateral: { position: { x: 5, y: 0, z: 0 }, target: { x: 0, y: 0, z: 0 }, zoom: 1 },
  superior: { position: { x: 0, y: 5, z: 0 }, target: { x: 0, y: 0, z: 0 }, zoom: 1 },
  inferior: { position: { x: 0, y: -5, z: 0 }, target: { x: 0, y: 0, z: 0 }, zoom: 1 },
};

/**
 * Master registry of all anatomical regions
 */
export const regionRegistry: Map<string, AnatomicalRegion> = new Map();

// =============================================================================
// ROOT REGION
// =============================================================================

const bodyRoot: AnatomicalRegion = {
  id: 'body',
  name: 'Human Body',
  latinName: 'Corpus humanum',
  fmaIds: ['FMA:20394'],
  parentRegion: null,
  childRegions: ['body.head', 'body.neck', 'body.thorax', 'body.abdomen', 'body.pelvis', 'body.back', 'body.upper-limb', 'body.lower-limb'],
  level: 0,
  structures: emptyStructures(),
  content: emptyContent(),
  meshIds: ['body_complete'],
  defaultCamera: defaultCameras.anterior,
  description: 'The complete human body',
};

// =============================================================================
// HEAD REGIONS
// =============================================================================

const head: AnatomicalRegion = {
  id: 'body.head',
  name: 'Head',
  latinName: 'Caput',
  fmaIds: ['FMA:7154'],
  parentRegion: 'body',
  childRegions: ['body.head.cranium', 'body.head.face'],
  level: 1,
  structures: {
    ...emptyStructures(),
    bones: [
      { id: 'skull', name: 'Skull', fmaId: 'FMA:9611' },
    ],
    nerves: [
      { id: 'cn-i', name: 'Olfactory nerve (CN I)', fmaId: 'FMA:46787' },
      { id: 'cn-ii', name: 'Optic nerve (CN II)', fmaId: 'FMA:50863' },
    ],
    vessels: [
      { id: 'ica', name: 'Internal carotid artery', fmaId: 'FMA:3947' },
      { id: 'eca', name: 'External carotid artery', fmaId: 'FMA:10635' },
    ],
  },
  content: emptyContent(),
  meshIds: ['head_complete'],
  defaultCamera: { position: { x: 0, y: 1.7, z: 1 }, target: { x: 0, y: 1.7, z: 0 }, zoom: 2 },
};

const cranium: AnatomicalRegion = {
  id: 'body.head.cranium',
  name: 'Cranium',
  latinName: 'Cranium',
  fmaIds: ['FMA:52792'],
  parentRegion: 'body.head',
  childRegions: [],
  level: 2,
  structures: {
    ...emptyStructures(),
    bones: [
      { id: 'frontal', name: 'Frontal bone', fmaId: 'FMA:9703' },
      { id: 'parietal-l', name: 'Left parietal bone', fmaId: 'FMA:9614', laterality: 'left' },
      { id: 'parietal-r', name: 'Right parietal bone', fmaId: 'FMA:9614', laterality: 'right' },
      { id: 'temporal-l', name: 'Left temporal bone', fmaId: 'FMA:9616', laterality: 'left' },
      { id: 'temporal-r', name: 'Right temporal bone', fmaId: 'FMA:9616', laterality: 'right' },
      { id: 'occipital', name: 'Occipital bone', fmaId: 'FMA:9617' },
      { id: 'sphenoid', name: 'Sphenoid bone', fmaId: 'FMA:9618' },
      { id: 'ethmoid', name: 'Ethmoid bone', fmaId: 'FMA:9622' },
    ],
    organs: [
      { id: 'brain', name: 'Brain', fmaId: 'FMA:50801' },
    ],
  },
  content: emptyContent(),
  meshIds: ['cranium'],
  defaultCamera: { position: { x: 0, y: 1.8, z: 0.8 }, target: { x: 0, y: 1.7, z: 0 }, zoom: 2.5 },
};

const face: AnatomicalRegion = {
  id: 'body.head.face',
  name: 'Face',
  latinName: 'Facies',
  fmaIds: ['FMA:53673'],
  parentRegion: 'body.head',
  childRegions: [],
  level: 2,
  structures: {
    ...emptyStructures(),
    bones: [
      { id: 'maxilla', name: 'Maxilla', fmaId: 'FMA:9711' },
      { id: 'mandible', name: 'Mandible', fmaId: 'FMA:9612' },
      { id: 'nasal-l', name: 'Left nasal bone', fmaId: 'FMA:9719', laterality: 'left' },
      { id: 'nasal-r', name: 'Right nasal bone', fmaId: 'FMA:9719', laterality: 'right' },
      { id: 'zygomatic-l', name: 'Left zygomatic bone', fmaId: 'FMA:9720', laterality: 'left' },
      { id: 'zygomatic-r', name: 'Right zygomatic bone', fmaId: 'FMA:9720', laterality: 'right' },
    ],
    muscles: [
      { id: 'orbicularis-oculi', name: 'Orbicularis oculi', fmaId: 'FMA:46779' },
      { id: 'orbicularis-oris', name: 'Orbicularis oris', fmaId: 'FMA:46845' },
      { id: 'masseter', name: 'Masseter', fmaId: 'FMA:45000' },
      { id: 'temporalis', name: 'Temporalis', fmaId: 'FMA:45001' },
    ],
    nerves: [
      { id: 'cn-v', name: 'Trigeminal nerve (CN V)', fmaId: 'FMA:50866' },
      { id: 'cn-vii', name: 'Facial nerve (CN VII)', fmaId: 'FMA:50869' },
    ],
  },
  content: emptyContent(),
  meshIds: ['face'],
  defaultCamera: { position: { x: 0, y: 1.65, z: 0.6 }, target: { x: 0, y: 1.65, z: 0 }, zoom: 3 },
};

// =============================================================================
// NECK REGION
// =============================================================================

const neck: AnatomicalRegion = {
  id: 'body.neck',
  name: 'Neck',
  latinName: 'Collum',
  fmaIds: ['FMA:7155'],
  parentRegion: 'body',
  childRegions: [],
  level: 1,
  structures: {
    ...emptyStructures(),
    bones: [
      { id: 'c1-c7', name: 'Cervical vertebrae (C1-C7)', fmaId: 'FMA:9915' },
      { id: 'hyoid', name: 'Hyoid bone', fmaId: 'FMA:9607' },
    ],
    muscles: [
      { id: 'scm', name: 'Sternocleidomastoid', fmaId: 'FMA:45005' },
      { id: 'trapezius', name: 'Trapezius', fmaId: 'FMA:9626' },
      { id: 'scalenes', name: 'Scalene muscles', fmaId: 'FMA:45002' },
    ],
    vessels: [
      { id: 'cca', name: 'Common carotid artery', fmaId: 'FMA:3940' },
      { id: 'ijv', name: 'Internal jugular vein', fmaId: 'FMA:4721' },
      { id: 'ejv', name: 'External jugular vein', fmaId: 'FMA:13110' },
    ],
    nerves: [
      { id: 'vagus', name: 'Vagus nerve (CN X)', fmaId: 'FMA:5731' },
      { id: 'cervical-plexus', name: 'Cervical plexus', fmaId: 'FMA:5930' },
    ],
    organs: [
      { id: 'thyroid', name: 'Thyroid gland', fmaId: 'FMA:9603' },
      { id: 'larynx', name: 'Larynx', fmaId: 'FMA:55097' },
      { id: 'pharynx', name: 'Pharynx', fmaId: 'FMA:9608' },
    ],
  },
  content: emptyContent(),
  meshIds: ['neck'],
  defaultCamera: { position: { x: 0.5, y: 1.5, z: 0.8 }, target: { x: 0, y: 1.5, z: 0 }, zoom: 2 },
};

// =============================================================================
// THORAX REGIONS
// =============================================================================

const thorax: AnatomicalRegion = {
  id: 'body.thorax',
  name: 'Thorax',
  latinName: 'Thorax',
  fmaIds: ['FMA:9576'],
  parentRegion: 'body',
  childRegions: ['body.thorax.wall', 'body.thorax.cavity'],
  level: 1,
  structures: emptyStructures(),
  content: emptyContent(),
  meshIds: ['thorax_complete'],
  defaultCamera: { position: { x: 0, y: 1.2, z: 1.2 }, target: { x: 0, y: 1.2, z: 0 }, zoom: 1.5 },
};

const thoracicWall: AnatomicalRegion = {
  id: 'body.thorax.wall',
  name: 'Thoracic Wall',
  latinName: 'Paries thoracis',
  fmaIds: ['FMA:9577'],
  parentRegion: 'body.thorax',
  childRegions: [],
  level: 2,
  structures: {
    ...emptyStructures(),
    bones: [
      { id: 'sternum', name: 'Sternum', fmaId: 'FMA:9632' },
      { id: 'ribs', name: 'Ribs (1-12)', fmaId: 'FMA:7574' },
      { id: 't1-t12', name: 'Thoracic vertebrae (T1-T12)', fmaId: 'FMA:9916' },
    ],
    muscles: [
      { id: 'pectoralis-major', name: 'Pectoralis major', fmaId: 'FMA:9627' },
      { id: 'pectoralis-minor', name: 'Pectoralis minor', fmaId: 'FMA:9629' },
      { id: 'intercostals', name: 'Intercostal muscles', fmaId: 'FMA:9622' },
      { id: 'diaphragm', name: 'Diaphragm', fmaId: 'FMA:22356' },
    ],
    nerves: [
      { id: 'intercostal-nerves', name: 'Intercostal nerves', fmaId: 'FMA:65279' },
    ],
  },
  content: emptyContent(),
  meshIds: ['thoracic_wall'],
  defaultCamera: { position: { x: 0, y: 1.2, z: 1 }, target: { x: 0, y: 1.2, z: 0 }, zoom: 1.8 },
};

const thoracicCavity: AnatomicalRegion = {
  id: 'body.thorax.cavity',
  name: 'Thoracic Cavity',
  latinName: 'Cavitas thoracis',
  fmaIds: ['FMA:9580'],
  parentRegion: 'body.thorax',
  childRegions: [],
  level: 2,
  structures: {
    ...emptyStructures(),
    organs: [
      { id: 'heart', name: 'Heart', fmaId: 'FMA:7088' },
      { id: 'lung-l', name: 'Left lung', fmaId: 'FMA:7310', laterality: 'left' },
      { id: 'lung-r', name: 'Right lung', fmaId: 'FMA:7309', laterality: 'right' },
      { id: 'trachea', name: 'Trachea', fmaId: 'FMA:7394' },
      { id: 'esophagus-thoracic', name: 'Esophagus (thoracic part)', fmaId: 'FMA:7145' },
      { id: 'thymus', name: 'Thymus', fmaId: 'FMA:9607' },
    ],
    vessels: [
      { id: 'aorta', name: 'Aorta', fmaId: 'FMA:50040' },
      { id: 'pulmonary-trunk', name: 'Pulmonary trunk', fmaId: 'FMA:8612' },
      { id: 'svc', name: 'Superior vena cava', fmaId: 'FMA:4720' },
      { id: 'ivc-thoracic', name: 'Inferior vena cava (thoracic)', fmaId: 'FMA:10951' },
    ],
    nerves: [
      { id: 'phrenic', name: 'Phrenic nerve', fmaId: 'FMA:6191' },
      { id: 'vagus-thoracic', name: 'Vagus nerve (thoracic)', fmaId: 'FMA:5731' },
    ],
  },
  content: emptyContent(),
  meshIds: ['thoracic_cavity'],
  defaultCamera: { position: { x: 0.5, y: 1.2, z: 0.8 }, target: { x: 0, y: 1.2, z: 0 }, zoom: 2 },
};

// =============================================================================
// ABDOMEN REGIONS
// =============================================================================

const abdomen: AnatomicalRegion = {
  id: 'body.abdomen',
  name: 'Abdomen',
  latinName: 'Abdomen',
  fmaIds: ['FMA:9577'],
  parentRegion: 'body',
  childRegions: ['body.abdomen.wall', 'body.abdomen.cavity'],
  level: 1,
  structures: emptyStructures(),
  content: emptyContent(),
  meshIds: ['abdomen_complete'],
  defaultCamera: { position: { x: 0, y: 1, z: 1.2 }, target: { x: 0, y: 1, z: 0 }, zoom: 1.5 },
};

const abdominalWall: AnatomicalRegion = {
  id: 'body.abdomen.wall',
  name: 'Abdominal Wall',
  latinName: 'Paries abdominis',
  fmaIds: ['FMA:10401'],
  parentRegion: 'body.abdomen',
  childRegions: [],
  level: 2,
  structures: {
    ...emptyStructures(),
    bones: [
      { id: 'l1-l5', name: 'Lumbar vertebrae (L1-L5)', fmaId: 'FMA:9917' },
    ],
    muscles: [
      { id: 'rectus-abdominis', name: 'Rectus abdominis', fmaId: 'FMA:9628' },
      { id: 'external-oblique', name: 'External oblique', fmaId: 'FMA:9632' },
      { id: 'internal-oblique', name: 'Internal oblique', fmaId: 'FMA:9633' },
      { id: 'transversus-abdominis', name: 'Transversus abdominis', fmaId: 'FMA:9634' },
    ],
  },
  content: emptyContent(),
  meshIds: ['abdominal_wall'],
  defaultCamera: { position: { x: 0, y: 1, z: 1 }, target: { x: 0, y: 1, z: 0 }, zoom: 1.8 },
};

const abdominalCavity: AnatomicalRegion = {
  id: 'body.abdomen.cavity',
  name: 'Abdominal Cavity',
  latinName: 'Cavitas abdominis',
  fmaIds: ['FMA:10708'],
  parentRegion: 'body.abdomen',
  childRegions: [],
  level: 2,
  structures: {
    ...emptyStructures(),
    organs: [
      { id: 'liver', name: 'Liver', fmaId: 'FMA:7197' },
      { id: 'stomach', name: 'Stomach', fmaId: 'FMA:7148' },
      { id: 'spleen', name: 'Spleen', fmaId: 'FMA:7196' },
      { id: 'pancreas', name: 'Pancreas', fmaId: 'FMA:7198' },
      { id: 'small-intestine', name: 'Small intestine', fmaId: 'FMA:7200' },
      { id: 'large-intestine', name: 'Large intestine', fmaId: 'FMA:7201' },
      { id: 'kidney-l', name: 'Left kidney', fmaId: 'FMA:7203', laterality: 'left' },
      { id: 'kidney-r', name: 'Right kidney', fmaId: 'FMA:7203', laterality: 'right' },
      { id: 'adrenal-l', name: 'Left adrenal gland', fmaId: 'FMA:9604', laterality: 'left' },
      { id: 'adrenal-r', name: 'Right adrenal gland', fmaId: 'FMA:9604', laterality: 'right' },
    ],
    vessels: [
      { id: 'abdominal-aorta', name: 'Abdominal aorta', fmaId: 'FMA:3781' },
      { id: 'ivc', name: 'Inferior vena cava', fmaId: 'FMA:10951' },
      { id: 'celiac-trunk', name: 'Celiac trunk', fmaId: 'FMA:14786' },
      { id: 'sma', name: 'Superior mesenteric artery', fmaId: 'FMA:14787' },
      { id: 'ima', name: 'Inferior mesenteric artery', fmaId: 'FMA:14788' },
      { id: 'portal-vein', name: 'Portal vein', fmaId: 'FMA:50735' },
    ],
  },
  content: emptyContent(),
  meshIds: ['abdominal_cavity'],
  defaultCamera: { position: { x: 0.5, y: 1, z: 0.8 }, target: { x: 0, y: 1, z: 0 }, zoom: 2 },
};

// =============================================================================
// PELVIS REGIONS
// =============================================================================

const pelvis: AnatomicalRegion = {
  id: 'body.pelvis',
  name: 'Pelvis',
  latinName: 'Pelvis',
  fmaIds: ['FMA:9578'],
  parentRegion: 'body',
  childRegions: ['body.pelvis.wall', 'body.pelvis.cavity', 'body.pelvis.perineum'],
  level: 1,
  structures: emptyStructures(),
  content: emptyContent(),
  meshIds: ['pelvis_complete'],
  defaultCamera: { position: { x: 0, y: 0.9, z: 1.2 }, target: { x: 0, y: 0.9, z: 0 }, zoom: 1.5 },
};

const pelvicWall: AnatomicalRegion = {
  id: 'body.pelvis.wall',
  name: 'Pelvic Wall',
  latinName: 'Paries pelvis',
  fmaIds: ['FMA:10402'],
  parentRegion: 'body.pelvis',
  childRegions: [],
  level: 2,
  structures: {
    ...emptyStructures(),
    bones: [
      { id: 'sacrum', name: 'Sacrum', fmaId: 'FMA:9696' },
      { id: 'coccyx', name: 'Coccyx', fmaId: 'FMA:9697' },
      { id: 'hip-bone-l', name: 'Left hip bone', fmaId: 'FMA:9598', laterality: 'left' },
      { id: 'hip-bone-r', name: 'Right hip bone', fmaId: 'FMA:9598', laterality: 'right' },
    ],
    muscles: [
      { id: 'piriformis', name: 'Piriformis', fmaId: 'FMA:9620' },
      { id: 'obturator-internus', name: 'Obturator internus', fmaId: 'FMA:9621' },
      { id: 'levator-ani', name: 'Levator ani', fmaId: 'FMA:9623' },
    ],
  },
  content: emptyContent(),
  meshIds: ['pelvic_wall'],
  defaultCamera: { position: { x: 0, y: 0.9, z: 1 }, target: { x: 0, y: 0.9, z: 0 }, zoom: 1.8 },
};

const pelvicCavity: AnatomicalRegion = {
  id: 'body.pelvis.cavity',
  name: 'Pelvic Cavity',
  latinName: 'Cavitas pelvis',
  fmaIds: ['FMA:10709'],
  parentRegion: 'body.pelvis',
  childRegions: [],
  level: 2,
  structures: {
    ...emptyStructures(),
    organs: [
      { id: 'bladder', name: 'Urinary bladder', fmaId: 'FMA:15900' },
      { id: 'rectum', name: 'Rectum', fmaId: 'FMA:7207' },
      { id: 'uterus', name: 'Uterus', fmaId: 'FMA:17558' },
      { id: 'ovary-l', name: 'Left ovary', fmaId: 'FMA:7209', laterality: 'left' },
      { id: 'ovary-r', name: 'Right ovary', fmaId: 'FMA:7209', laterality: 'right' },
      { id: 'prostate', name: 'Prostate', fmaId: 'FMA:9600' },
    ],
    vessels: [
      { id: 'internal-iliac-l', name: 'Left internal iliac artery', fmaId: 'FMA:18805', laterality: 'left' },
      { id: 'internal-iliac-r', name: 'Right internal iliac artery', fmaId: 'FMA:18805', laterality: 'right' },
    ],
  },
  content: emptyContent(),
  meshIds: ['pelvic_cavity'],
  defaultCamera: { position: { x: 0.5, y: 0.9, z: 0.8 }, target: { x: 0, y: 0.9, z: 0 }, zoom: 2 },
};

const perineum: AnatomicalRegion = {
  id: 'body.pelvis.perineum',
  name: 'Perineum',
  latinName: 'Perineum',
  fmaIds: ['FMA:9579'],
  parentRegion: 'body.pelvis',
  childRegions: [],
  level: 2,
  structures: emptyStructures(),
  content: emptyContent(),
  meshIds: ['perineum'],
  defaultCamera: { position: { x: 0, y: 0.8, z: -0.5 }, target: { x: 0, y: 0.85, z: 0 }, zoom: 3 },
};

// =============================================================================
// BACK REGION
// =============================================================================

const back: AnatomicalRegion = {
  id: 'body.back',
  name: 'Back',
  latinName: 'Dorsum',
  fmaIds: ['FMA:9580'],
  parentRegion: 'body',
  childRegions: [],
  level: 1,
  structures: {
    ...emptyStructures(),
    bones: [
      { id: 'vertebral-column', name: 'Vertebral column', fmaId: 'FMA:23866' },
      { id: 'scapula-l', name: 'Left scapula', fmaId: 'FMA:9631', laterality: 'left' },
      { id: 'scapula-r', name: 'Right scapula', fmaId: 'FMA:9631', laterality: 'right' },
    ],
    muscles: [
      { id: 'trapezius', name: 'Trapezius', fmaId: 'FMA:9626' },
      { id: 'latissimus-dorsi', name: 'Latissimus dorsi', fmaId: 'FMA:9625' },
      { id: 'erector-spinae', name: 'Erector spinae', fmaId: 'FMA:9640' },
      { id: 'rhomboid-major', name: 'Rhomboid major', fmaId: 'FMA:9630' },
      { id: 'rhomboid-minor', name: 'Rhomboid minor', fmaId: 'FMA:9631' },
    ],
    nerves: [
      { id: 'spinal-cord', name: 'Spinal cord', fmaId: 'FMA:7647' },
      { id: 'spinal-nerves', name: 'Spinal nerves', fmaId: 'FMA:5858' },
    ],
  },
  content: emptyContent(),
  meshIds: ['back'],
  defaultCamera: defaultCameras.posterior,
};

// =============================================================================
// UPPER LIMB REGIONS
// =============================================================================

const upperLimb: AnatomicalRegion = {
  id: 'body.upper-limb',
  name: 'Upper Limb',
  latinName: 'Membrum superius',
  fmaIds: ['FMA:7183'],
  parentRegion: 'body',
  childRegions: ['body.upper-limb.left', 'body.upper-limb.right'],
  level: 1,
  laterality: 'bilateral',
  structures: emptyStructures(),
  content: emptyContent(),
  meshIds: ['upper_limb_bilateral'],
  defaultCamera: defaultCameras.anterior,
};

// Left Upper Limb
const upperLimbLeft: AnatomicalRegion = {
  id: 'body.upper-limb.left',
  name: 'Left Upper Limb',
  latinName: 'Membrum superius sinistrum',
  fmaIds: ['FMA:24897'],
  parentRegion: 'body.upper-limb',
  childRegions: ['body.upper-limb.left.shoulder', 'body.upper-limb.left.arm', 'body.upper-limb.left.forearm', 'body.upper-limb.left.wrist', 'body.upper-limb.left.hand'],
  level: 2,
  laterality: 'left',
  contralateralRegion: 'body.upper-limb.right',
  structures: emptyStructures(),
  content: emptyContent(),
  meshIds: ['upper_limb_left'],
  defaultCamera: { position: { x: -1.5, y: 1.3, z: 1 }, target: { x: -0.5, y: 1.3, z: 0 }, zoom: 1.5 },
};

const shoulderLeft: AnatomicalRegion = {
  id: 'body.upper-limb.left.shoulder',
  name: 'Left Shoulder',
  latinName: 'Articulatio humeri sinistra',
  fmaIds: ['FMA:25912'],
  parentRegion: 'body.upper-limb.left',
  childRegions: [],
  level: 3,
  laterality: 'left',
  contralateralRegion: 'body.upper-limb.right.shoulder',
  structures: {
    ...emptyStructures(),
    bones: [
      { id: 'clavicle-l', name: 'Left clavicle', fmaId: 'FMA:9629', laterality: 'left' },
      { id: 'scapula-l', name: 'Left scapula', fmaId: 'FMA:9631', laterality: 'left' },
      { id: 'humerus-prox-l', name: 'Left proximal humerus', fmaId: 'FMA:23130', laterality: 'left' },
    ],
    muscles: [
      { id: 'deltoid-l', name: 'Left deltoid', fmaId: 'FMA:9626', laterality: 'left' },
      { id: 'supraspinatus-l', name: 'Left supraspinatus', fmaId: 'FMA:9627', laterality: 'left' },
      { id: 'infraspinatus-l', name: 'Left infraspinatus', fmaId: 'FMA:9628', laterality: 'left' },
      { id: 'subscapularis-l', name: 'Left subscapularis', fmaId: 'FMA:9629', laterality: 'left' },
      { id: 'teres-minor-l', name: 'Left teres minor', fmaId: 'FMA:9630', laterality: 'left' },
    ],
    joints: [
      { id: 'glenohumeral-l', name: 'Left glenohumeral joint', fmaId: 'FMA:25912', laterality: 'left' },
      { id: 'acromioclavicular-l', name: 'Left acromioclavicular joint', fmaId: 'FMA:25913', laterality: 'left' },
    ],
  },
  content: emptyContent(),
  meshIds: ['shoulder_left'],
  defaultCamera: { position: { x: -1, y: 1.5, z: 0.8 }, target: { x: -0.4, y: 1.5, z: 0 }, zoom: 2.5 },
};

const armLeft: AnatomicalRegion = {
  id: 'body.upper-limb.left.arm',
  name: 'Left Arm',
  latinName: 'Brachium sinistrum',
  fmaIds: ['FMA:24898'],
  parentRegion: 'body.upper-limb.left',
  childRegions: [],
  level: 3,
  laterality: 'left',
  contralateralRegion: 'body.upper-limb.right.arm',
  structures: {
    ...emptyStructures(),
    bones: [
      { id: 'humerus-l', name: 'Left humerus', fmaId: 'FMA:9623', laterality: 'left' },
    ],
    muscles: [
      { id: 'biceps-l', name: 'Left biceps brachii', fmaId: 'FMA:9626', laterality: 'left' },
      { id: 'triceps-l', name: 'Left triceps brachii', fmaId: 'FMA:9627', laterality: 'left' },
      { id: 'brachialis-l', name: 'Left brachialis', fmaId: 'FMA:9628', laterality: 'left' },
    ],
    vessels: [
      { id: 'brachial-a-l', name: 'Left brachial artery', fmaId: 'FMA:22689', laterality: 'left' },
      { id: 'basilic-v-l', name: 'Left basilic vein', fmaId: 'FMA:22690', laterality: 'left' },
      { id: 'cephalic-v-l', name: 'Left cephalic vein', fmaId: 'FMA:22691', laterality: 'left' },
    ],
    nerves: [
      { id: 'musculocutaneous-l', name: 'Left musculocutaneous nerve', fmaId: 'FMA:37072', laterality: 'left' },
      { id: 'radial-arm-l', name: 'Left radial nerve (arm)', fmaId: 'FMA:37073', laterality: 'left' },
      { id: 'median-arm-l', name: 'Left median nerve (arm)', fmaId: 'FMA:37074', laterality: 'left' },
      { id: 'ulnar-arm-l', name: 'Left ulnar nerve (arm)', fmaId: 'FMA:37075', laterality: 'left' },
    ],
  },
  content: emptyContent(),
  meshIds: ['arm_left'],
  defaultCamera: { position: { x: -1, y: 1.3, z: 0.8 }, target: { x: -0.4, y: 1.3, z: 0 }, zoom: 2 },
};

const forearmLeft: AnatomicalRegion = {
  id: 'body.upper-limb.left.forearm',
  name: 'Left Forearm',
  latinName: 'Antebrachium sinistrum',
  fmaIds: ['FMA:24899'],
  parentRegion: 'body.upper-limb.left',
  childRegions: [],
  level: 3,
  laterality: 'left',
  contralateralRegion: 'body.upper-limb.right.forearm',
  structures: {
    ...emptyStructures(),
    bones: [
      { id: 'radius-l', name: 'Left radius', fmaId: 'FMA:9624', laterality: 'left' },
      { id: 'ulna-l', name: 'Left ulna', fmaId: 'FMA:9625', laterality: 'left' },
    ],
    muscles: [
      { id: 'pronator-teres-l', name: 'Left pronator teres', fmaId: 'FMA:9629', laterality: 'left' },
      { id: 'fcr-l', name: 'Left flexor carpi radialis', fmaId: 'FMA:9630', laterality: 'left' },
      { id: 'fcu-l', name: 'Left flexor carpi ulnaris', fmaId: 'FMA:9631', laterality: 'left' },
      { id: 'ecrl-l', name: 'Left extensor carpi radialis longus', fmaId: 'FMA:9632', laterality: 'left' },
      { id: 'ecu-l', name: 'Left extensor carpi ulnaris', fmaId: 'FMA:9633', laterality: 'left' },
    ],
    vessels: [
      { id: 'radial-a-l', name: 'Left radial artery', fmaId: 'FMA:22730', laterality: 'left' },
      { id: 'ulnar-a-l', name: 'Left ulnar artery', fmaId: 'FMA:22731', laterality: 'left' },
    ],
    nerves: [
      { id: 'median-forearm-l', name: 'Left median nerve (forearm)', fmaId: 'FMA:37076', laterality: 'left' },
      { id: 'ulnar-forearm-l', name: 'Left ulnar nerve (forearm)', fmaId: 'FMA:37077', laterality: 'left' },
      { id: 'radial-forearm-l', name: 'Left radial nerve (forearm)', fmaId: 'FMA:37078', laterality: 'left' },
    ],
    joints: [
      { id: 'elbow-l', name: 'Left elbow joint', fmaId: 'FMA:35291', laterality: 'left' },
      { id: 'prox-radioulnar-l', name: 'Left proximal radioulnar joint', fmaId: 'FMA:35292', laterality: 'left' },
      { id: 'dist-radioulnar-l', name: 'Left distal radioulnar joint', fmaId: 'FMA:35293', laterality: 'left' },
    ],
  },
  content: emptyContent(),
  meshIds: ['forearm_left'],
  defaultCamera: { position: { x: -0.8, y: 1.1, z: 0.6 }, target: { x: -0.35, y: 1.1, z: 0 }, zoom: 2.5 },
};

const wristLeft: AnatomicalRegion = {
  id: 'body.upper-limb.left.wrist',
  name: 'Left Wrist',
  latinName: 'Carpus sinister',
  fmaIds: ['FMA:24920'],
  parentRegion: 'body.upper-limb.left',
  childRegions: [],
  level: 3,
  laterality: 'left',
  contralateralRegion: 'body.upper-limb.right.wrist',
  structures: {
    ...emptyStructures(),
    bones: [
      { id: 'scaphoid-l', name: 'Left scaphoid', fmaId: 'FMA:9640', laterality: 'left' },
      { id: 'lunate-l', name: 'Left lunate', fmaId: 'FMA:9641', laterality: 'left' },
      { id: 'triquetrum-l', name: 'Left triquetrum', fmaId: 'FMA:9642', laterality: 'left' },
      { id: 'pisiform-l', name: 'Left pisiform', fmaId: 'FMA:9643', laterality: 'left' },
      { id: 'trapezium-l', name: 'Left trapezium', fmaId: 'FMA:9644', laterality: 'left' },
      { id: 'trapezoid-l', name: 'Left trapezoid', fmaId: 'FMA:9645', laterality: 'left' },
      { id: 'capitate-l', name: 'Left capitate', fmaId: 'FMA:9646', laterality: 'left' },
      { id: 'hamate-l', name: 'Left hamate', fmaId: 'FMA:9647', laterality: 'left' },
    ],
    joints: [
      { id: 'radiocarpal-l', name: 'Left radiocarpal joint', fmaId: 'FMA:35294', laterality: 'left' },
      { id: 'midcarpal-l', name: 'Left midcarpal joint', fmaId: 'FMA:35295', laterality: 'left' },
    ],
  },
  content: emptyContent(),
  meshIds: ['wrist_left'],
  defaultCamera: { position: { x: -0.6, y: 0.95, z: 0.4 }, target: { x: -0.3, y: 0.95, z: 0 }, zoom: 4 },
};

const handLeft: AnatomicalRegion = {
  id: 'body.upper-limb.left.hand',
  name: 'Left Hand',
  latinName: 'Manus sinistra',
  fmaIds: ['FMA:24919'],
  parentRegion: 'body.upper-limb.left',
  childRegions: [],
  level: 3,
  laterality: 'left',
  contralateralRegion: 'body.upper-limb.right.hand',
  structures: {
    ...emptyStructures(),
    bones: [
      { id: 'metacarpals-l', name: 'Left metacarpals (I-V)', fmaId: 'FMA:9651', laterality: 'left' },
      { id: 'phalanges-hand-l', name: 'Left phalanges of hand', fmaId: 'FMA:9652', laterality: 'left' },
    ],
    muscles: [
      { id: 'thenar-l', name: 'Left thenar muscles', fmaId: 'FMA:9660', laterality: 'left' },
      { id: 'hypothenar-l', name: 'Left hypothenar muscles', fmaId: 'FMA:9661', laterality: 'left' },
      { id: 'lumbricals-hand-l', name: 'Left lumbricals of hand', fmaId: 'FMA:9662', laterality: 'left' },
      { id: 'interossei-hand-l', name: 'Left interossei of hand', fmaId: 'FMA:9663', laterality: 'left' },
    ],
    nerves: [
      { id: 'median-hand-l', name: 'Left median nerve (hand)', fmaId: 'FMA:37079', laterality: 'left' },
      { id: 'ulnar-hand-l', name: 'Left ulnar nerve (hand)', fmaId: 'FMA:37080', laterality: 'left' },
    ],
  },
  content: emptyContent(),
  meshIds: ['hand_left'],
  defaultCamera: { position: { x: -0.5, y: 0.85, z: 0.4 }, target: { x: -0.25, y: 0.85, z: 0 }, zoom: 4 },
};

// Right Upper Limb (mirrors left)
const upperLimbRight: AnatomicalRegion = {
  id: 'body.upper-limb.right',
  name: 'Right Upper Limb',
  latinName: 'Membrum superius dextrum',
  fmaIds: ['FMA:24896'],
  parentRegion: 'body.upper-limb',
  childRegions: ['body.upper-limb.right.shoulder', 'body.upper-limb.right.arm', 'body.upper-limb.right.forearm', 'body.upper-limb.right.wrist', 'body.upper-limb.right.hand'],
  level: 2,
  laterality: 'right',
  contralateralRegion: 'body.upper-limb.left',
  structures: emptyStructures(),
  content: emptyContent(),
  meshIds: ['upper_limb_right'],
  defaultCamera: { position: { x: 1.5, y: 1.3, z: 1 }, target: { x: 0.5, y: 1.3, z: 0 }, zoom: 1.5 },
};

const shoulderRight: AnatomicalRegion = {
  id: 'body.upper-limb.right.shoulder',
  name: 'Right Shoulder',
  latinName: 'Articulatio humeri dextra',
  fmaIds: ['FMA:25911'],
  parentRegion: 'body.upper-limb.right',
  childRegions: [],
  level: 3,
  laterality: 'right',
  contralateralRegion: 'body.upper-limb.left.shoulder',
  structures: {
    ...emptyStructures(),
    bones: [
      { id: 'clavicle-r', name: 'Right clavicle', fmaId: 'FMA:9629', laterality: 'right' },
      { id: 'scapula-r', name: 'Right scapula', fmaId: 'FMA:9631', laterality: 'right' },
      { id: 'humerus-prox-r', name: 'Right proximal humerus', fmaId: 'FMA:23129', laterality: 'right' },
    ],
    muscles: [
      { id: 'deltoid-r', name: 'Right deltoid', fmaId: 'FMA:9626', laterality: 'right' },
      { id: 'supraspinatus-r', name: 'Right supraspinatus', fmaId: 'FMA:9627', laterality: 'right' },
      { id: 'infraspinatus-r', name: 'Right infraspinatus', fmaId: 'FMA:9628', laterality: 'right' },
      { id: 'subscapularis-r', name: 'Right subscapularis', fmaId: 'FMA:9629', laterality: 'right' },
      { id: 'teres-minor-r', name: 'Right teres minor', fmaId: 'FMA:9630', laterality: 'right' },
    ],
    joints: [
      { id: 'glenohumeral-r', name: 'Right glenohumeral joint', fmaId: 'FMA:25911', laterality: 'right' },
      { id: 'acromioclavicular-r', name: 'Right acromioclavicular joint', fmaId: 'FMA:25914', laterality: 'right' },
    ],
  },
  content: emptyContent(),
  meshIds: ['shoulder_right'],
  defaultCamera: { position: { x: 1, y: 1.5, z: 0.8 }, target: { x: 0.4, y: 1.5, z: 0 }, zoom: 2.5 },
};

const armRight: AnatomicalRegion = {
  id: 'body.upper-limb.right.arm',
  name: 'Right Arm',
  latinName: 'Brachium dextrum',
  fmaIds: ['FMA:24891'],
  parentRegion: 'body.upper-limb.right',
  childRegions: [],
  level: 3,
  laterality: 'right',
  contralateralRegion: 'body.upper-limb.left.arm',
  structures: {
    ...emptyStructures(),
    bones: [
      { id: 'humerus-r', name: 'Right humerus', fmaId: 'FMA:9623', laterality: 'right' },
    ],
    muscles: [
      { id: 'biceps-r', name: 'Right biceps brachii', fmaId: 'FMA:9626', laterality: 'right' },
      { id: 'triceps-r', name: 'Right triceps brachii', fmaId: 'FMA:9627', laterality: 'right' },
      { id: 'brachialis-r', name: 'Right brachialis', fmaId: 'FMA:9628', laterality: 'right' },
    ],
    vessels: [
      { id: 'brachial-a-r', name: 'Right brachial artery', fmaId: 'FMA:22689', laterality: 'right' },
      { id: 'basilic-v-r', name: 'Right basilic vein', fmaId: 'FMA:22690', laterality: 'right' },
      { id: 'cephalic-v-r', name: 'Right cephalic vein', fmaId: 'FMA:22691', laterality: 'right' },
    ],
    nerves: [
      { id: 'musculocutaneous-r', name: 'Right musculocutaneous nerve', fmaId: 'FMA:37072', laterality: 'right' },
      { id: 'radial-arm-r', name: 'Right radial nerve (arm)', fmaId: 'FMA:37073', laterality: 'right' },
      { id: 'median-arm-r', name: 'Right median nerve (arm)', fmaId: 'FMA:37074', laterality: 'right' },
      { id: 'ulnar-arm-r', name: 'Right ulnar nerve (arm)', fmaId: 'FMA:37075', laterality: 'right' },
    ],
  },
  content: emptyContent(),
  meshIds: ['arm_right'],
  defaultCamera: { position: { x: 1, y: 1.3, z: 0.8 }, target: { x: 0.4, y: 1.3, z: 0 }, zoom: 2 },
};

const forearmRight: AnatomicalRegion = {
  id: 'body.upper-limb.right.forearm',
  name: 'Right Forearm',
  latinName: 'Antebrachium dextrum',
  fmaIds: ['FMA:24892'],
  parentRegion: 'body.upper-limb.right',
  childRegions: [],
  level: 3,
  laterality: 'right',
  contralateralRegion: 'body.upper-limb.left.forearm',
  structures: {
    ...emptyStructures(),
    bones: [
      { id: 'radius-r', name: 'Right radius', fmaId: 'FMA:9624', laterality: 'right' },
      { id: 'ulna-r', name: 'Right ulna', fmaId: 'FMA:9625', laterality: 'right' },
    ],
    muscles: [
      { id: 'pronator-teres-r', name: 'Right pronator teres', fmaId: 'FMA:9629', laterality: 'right' },
      { id: 'fcr-r', name: 'Right flexor carpi radialis', fmaId: 'FMA:9630', laterality: 'right' },
      { id: 'fcu-r', name: 'Right flexor carpi ulnaris', fmaId: 'FMA:9631', laterality: 'right' },
      { id: 'ecrl-r', name: 'Right extensor carpi radialis longus', fmaId: 'FMA:9632', laterality: 'right' },
      { id: 'ecu-r', name: 'Right extensor carpi ulnaris', fmaId: 'FMA:9633', laterality: 'right' },
    ],
    vessels: [
      { id: 'radial-a-r', name: 'Right radial artery', fmaId: 'FMA:22730', laterality: 'right' },
      { id: 'ulnar-a-r', name: 'Right ulnar artery', fmaId: 'FMA:22731', laterality: 'right' },
    ],
    nerves: [
      { id: 'median-forearm-r', name: 'Right median nerve (forearm)', fmaId: 'FMA:37076', laterality: 'right' },
      { id: 'ulnar-forearm-r', name: 'Right ulnar nerve (forearm)', fmaId: 'FMA:37077', laterality: 'right' },
      { id: 'radial-forearm-r', name: 'Right radial nerve (forearm)', fmaId: 'FMA:37078', laterality: 'right' },
    ],
    joints: [
      { id: 'elbow-r', name: 'Right elbow joint', fmaId: 'FMA:35291', laterality: 'right' },
      { id: 'prox-radioulnar-r', name: 'Right proximal radioulnar joint', fmaId: 'FMA:35292', laterality: 'right' },
      { id: 'dist-radioulnar-r', name: 'Right distal radioulnar joint', fmaId: 'FMA:35293', laterality: 'right' },
    ],
  },
  content: emptyContent(),
  meshIds: ['forearm_right'],
  defaultCamera: { position: { x: 0.8, y: 1.1, z: 0.6 }, target: { x: 0.35, y: 1.1, z: 0 }, zoom: 2.5 },
};

const wristRight: AnatomicalRegion = {
  id: 'body.upper-limb.right.wrist',
  name: 'Right Wrist',
  latinName: 'Carpus dexter',
  fmaIds: ['FMA:24915'],
  parentRegion: 'body.upper-limb.right',
  childRegions: [],
  level: 3,
  laterality: 'right',
  contralateralRegion: 'body.upper-limb.left.wrist',
  structures: {
    ...emptyStructures(),
    bones: [
      { id: 'scaphoid-r', name: 'Right scaphoid', fmaId: 'FMA:9640', laterality: 'right' },
      { id: 'lunate-r', name: 'Right lunate', fmaId: 'FMA:9641', laterality: 'right' },
      { id: 'triquetrum-r', name: 'Right triquetrum', fmaId: 'FMA:9642', laterality: 'right' },
      { id: 'pisiform-r', name: 'Right pisiform', fmaId: 'FMA:9643', laterality: 'right' },
      { id: 'trapezium-r', name: 'Right trapezium', fmaId: 'FMA:9644', laterality: 'right' },
      { id: 'trapezoid-r', name: 'Right trapezoid', fmaId: 'FMA:9645', laterality: 'right' },
      { id: 'capitate-r', name: 'Right capitate', fmaId: 'FMA:9646', laterality: 'right' },
      { id: 'hamate-r', name: 'Right hamate', fmaId: 'FMA:9647', laterality: 'right' },
    ],
    joints: [
      { id: 'radiocarpal-r', name: 'Right radiocarpal joint', fmaId: 'FMA:35294', laterality: 'right' },
      { id: 'midcarpal-r', name: 'Right midcarpal joint', fmaId: 'FMA:35295', laterality: 'right' },
    ],
  },
  content: emptyContent(),
  meshIds: ['wrist_right'],
  defaultCamera: { position: { x: 0.6, y: 0.95, z: 0.4 }, target: { x: 0.3, y: 0.95, z: 0 }, zoom: 4 },
};

const handRight: AnatomicalRegion = {
  id: 'body.upper-limb.right.hand',
  name: 'Right Hand',
  latinName: 'Manus dextra',
  fmaIds: ['FMA:24914'],
  parentRegion: 'body.upper-limb.right',
  childRegions: [],
  level: 3,
  laterality: 'right',
  contralateralRegion: 'body.upper-limb.left.hand',
  structures: {
    ...emptyStructures(),
    bones: [
      { id: 'metacarpals-r', name: 'Right metacarpals (I-V)', fmaId: 'FMA:9651', laterality: 'right' },
      { id: 'phalanges-hand-r', name: 'Right phalanges of hand', fmaId: 'FMA:9652', laterality: 'right' },
    ],
    muscles: [
      { id: 'thenar-r', name: 'Right thenar muscles', fmaId: 'FMA:9660', laterality: 'right' },
      { id: 'hypothenar-r', name: 'Right hypothenar muscles', fmaId: 'FMA:9661', laterality: 'right' },
      { id: 'lumbricals-hand-r', name: 'Right lumbricals of hand', fmaId: 'FMA:9662', laterality: 'right' },
      { id: 'interossei-hand-r', name: 'Right interossei of hand', fmaId: 'FMA:9663', laterality: 'right' },
    ],
    nerves: [
      { id: 'median-hand-r', name: 'Right median nerve (hand)', fmaId: 'FMA:37079', laterality: 'right' },
      { id: 'ulnar-hand-r', name: 'Right ulnar nerve (hand)', fmaId: 'FMA:37080', laterality: 'right' },
    ],
  },
  content: emptyContent(),
  meshIds: ['hand_right'],
  defaultCamera: { position: { x: 0.5, y: 0.85, z: 0.4 }, target: { x: 0.25, y: 0.85, z: 0 }, zoom: 4 },
};

// =============================================================================
// LOWER LIMB REGIONS
// =============================================================================

const lowerLimb: AnatomicalRegion = {
  id: 'body.lower-limb',
  name: 'Lower Limb',
  latinName: 'Membrum inferius',
  fmaIds: ['FMA:7184'],
  parentRegion: 'body',
  childRegions: ['body.lower-limb.left', 'body.lower-limb.right'],
  level: 1,
  laterality: 'bilateral',
  structures: emptyStructures(),
  content: emptyContent(),
  meshIds: ['lower_limb_bilateral'],
  defaultCamera: defaultCameras.anterior,
};

// Left Lower Limb
const lowerLimbLeft: AnatomicalRegion = {
  id: 'body.lower-limb.left',
  name: 'Left Lower Limb',
  latinName: 'Membrum inferius sinistrum',
  fmaIds: ['FMA:24979'],
  parentRegion: 'body.lower-limb',
  childRegions: ['body.lower-limb.left.hip', 'body.lower-limb.left.thigh', 'body.lower-limb.left.knee', 'body.lower-limb.left.leg', 'body.lower-limb.left.ankle', 'body.lower-limb.left.foot'],
  level: 2,
  laterality: 'left',
  contralateralRegion: 'body.lower-limb.right',
  structures: emptyStructures(),
  content: emptyContent(),
  meshIds: ['lower_limb_left'],
  defaultCamera: { position: { x: -1, y: 0.5, z: 1.5 }, target: { x: -0.2, y: 0.5, z: 0 }, zoom: 1 },
};

const hipLeft: AnatomicalRegion = {
  id: 'body.lower-limb.left.hip',
  name: 'Left Hip',
  latinName: 'Coxa sinistra',
  fmaIds: ['FMA:24981'],
  parentRegion: 'body.lower-limb.left',
  childRegions: [],
  level: 3,
  laterality: 'left',
  contralateralRegion: 'body.lower-limb.right.hip',
  structures: {
    ...emptyStructures(),
    bones: [
      { id: 'hip-bone-l', name: 'Left hip bone', fmaId: 'FMA:9598', laterality: 'left' },
      { id: 'femur-prox-l', name: 'Left proximal femur', fmaId: 'FMA:24476', laterality: 'left' },
    ],
    muscles: [
      { id: 'gluteus-max-l', name: 'Left gluteus maximus', fmaId: 'FMA:9622', laterality: 'left' },
      { id: 'gluteus-med-l', name: 'Left gluteus medius', fmaId: 'FMA:9623', laterality: 'left' },
      { id: 'gluteus-min-l', name: 'Left gluteus minimus', fmaId: 'FMA:9624', laterality: 'left' },
      { id: 'iliopsoas-l', name: 'Left iliopsoas', fmaId: 'FMA:9625', laterality: 'left' },
    ],
    joints: [
      { id: 'hip-joint-l', name: 'Left hip joint', fmaId: 'FMA:35178', laterality: 'left' },
    ],
  },
  content: emptyContent(),
  meshIds: ['hip_left'],
  defaultCamera: { position: { x: -0.8, y: 0.9, z: 0.8 }, target: { x: -0.2, y: 0.9, z: 0 }, zoom: 2 },
};

const thighLeft: AnatomicalRegion = {
  id: 'body.lower-limb.left.thigh',
  name: 'Left Thigh',
  latinName: 'Femur sinistrum',
  fmaIds: ['FMA:24982'],
  parentRegion: 'body.lower-limb.left',
  childRegions: [],
  level: 3,
  laterality: 'left',
  contralateralRegion: 'body.lower-limb.right.thigh',
  structures: {
    ...emptyStructures(),
    bones: [
      { id: 'femur-l', name: 'Left femur', fmaId: 'FMA:24474', laterality: 'left' },
    ],
    muscles: [
      { id: 'quadriceps-l', name: 'Left quadriceps femoris', fmaId: 'FMA:9626', laterality: 'left' },
      { id: 'hamstrings-l', name: 'Left hamstrings', fmaId: 'FMA:9627', laterality: 'left' },
      { id: 'adductors-l', name: 'Left adductor muscles', fmaId: 'FMA:9628', laterality: 'left' },
      { id: 'sartorius-l', name: 'Left sartorius', fmaId: 'FMA:9629', laterality: 'left' },
    ],
    vessels: [
      { id: 'femoral-a-l', name: 'Left femoral artery', fmaId: 'FMA:70248', laterality: 'left' },
      { id: 'femoral-v-l', name: 'Left femoral vein', fmaId: 'FMA:70249', laterality: 'left' },
      { id: 'great-saphenous-l', name: 'Left great saphenous vein', fmaId: 'FMA:70250', laterality: 'left' },
    ],
    nerves: [
      { id: 'femoral-n-l', name: 'Left femoral nerve', fmaId: 'FMA:16570', laterality: 'left' },
      { id: 'sciatic-l', name: 'Left sciatic nerve', fmaId: 'FMA:19034', laterality: 'left' },
    ],
  },
  content: emptyContent(),
  meshIds: ['thigh_left'],
  defaultCamera: { position: { x: -0.6, y: 0.6, z: 1 }, target: { x: -0.15, y: 0.6, z: 0 }, zoom: 1.8 },
};

const kneeLeft: AnatomicalRegion = {
  id: 'body.lower-limb.left.knee',
  name: 'Left Knee',
  latinName: 'Genu sinistrum',
  fmaIds: ['FMA:24983'],
  parentRegion: 'body.lower-limb.left',
  childRegions: [],
  level: 3,
  laterality: 'left',
  contralateralRegion: 'body.lower-limb.right.knee',
  structures: {
    ...emptyStructures(),
    bones: [
      { id: 'patella-l', name: 'Left patella', fmaId: 'FMA:9675', laterality: 'left' },
      { id: 'femur-dist-l', name: 'Left distal femur', fmaId: 'FMA:24477', laterality: 'left' },
      { id: 'tibia-prox-l', name: 'Left proximal tibia', fmaId: 'FMA:24479', laterality: 'left' },
    ],
    ligaments: [
      { id: 'acl-l', name: 'Left anterior cruciate ligament', fmaId: 'FMA:44615', laterality: 'left' },
      { id: 'pcl-l', name: 'Left posterior cruciate ligament', fmaId: 'FMA:44616', laterality: 'left' },
      { id: 'mcl-l', name: 'Left medial collateral ligament', fmaId: 'FMA:44617', laterality: 'left' },
      { id: 'lcl-l', name: 'Left lateral collateral ligament', fmaId: 'FMA:44618', laterality: 'left' },
    ],
    joints: [
      { id: 'knee-joint-l', name: 'Left knee joint', fmaId: 'FMA:35350', laterality: 'left' },
    ],
  },
  content: emptyContent(),
  meshIds: ['knee_left'],
  defaultCamera: { position: { x: -0.5, y: 0.45, z: 0.8 }, target: { x: -0.12, y: 0.45, z: 0 }, zoom: 3 },
};

const legLeft: AnatomicalRegion = {
  id: 'body.lower-limb.left.leg',
  name: 'Left Leg',
  latinName: 'Crus sinistrum',
  fmaIds: ['FMA:24984'],
  parentRegion: 'body.lower-limb.left',
  childRegions: [],
  level: 3,
  laterality: 'left',
  contralateralRegion: 'body.lower-limb.right.leg',
  structures: {
    ...emptyStructures(),
    bones: [
      { id: 'tibia-l', name: 'Left tibia', fmaId: 'FMA:9676', laterality: 'left' },
      { id: 'fibula-l', name: 'Left fibula', fmaId: 'FMA:9677', laterality: 'left' },
    ],
    muscles: [
      { id: 'gastrocnemius-l', name: 'Left gastrocnemius', fmaId: 'FMA:9630', laterality: 'left' },
      { id: 'soleus-l', name: 'Left soleus', fmaId: 'FMA:9631', laterality: 'left' },
      { id: 'tibialis-ant-l', name: 'Left tibialis anterior', fmaId: 'FMA:9632', laterality: 'left' },
      { id: 'peroneus-l', name: 'Left peroneus muscles', fmaId: 'FMA:9633', laterality: 'left' },
    ],
    vessels: [
      { id: 'popliteal-a-l', name: 'Left popliteal artery', fmaId: 'FMA:70251', laterality: 'left' },
      { id: 'ant-tibial-a-l', name: 'Left anterior tibial artery', fmaId: 'FMA:70252', laterality: 'left' },
      { id: 'post-tibial-a-l', name: 'Left posterior tibial artery', fmaId: 'FMA:70253', laterality: 'left' },
    ],
    nerves: [
      { id: 'tibial-n-l', name: 'Left tibial nerve', fmaId: 'FMA:19035', laterality: 'left' },
      { id: 'common-peroneal-l', name: 'Left common peroneal nerve', fmaId: 'FMA:19036', laterality: 'left' },
    ],
  },
  content: emptyContent(),
  meshIds: ['leg_left'],
  defaultCamera: { position: { x: -0.4, y: 0.25, z: 0.8 }, target: { x: -0.1, y: 0.25, z: 0 }, zoom: 2 },
};

const ankleLeft: AnatomicalRegion = {
  id: 'body.lower-limb.left.ankle',
  name: 'Left Ankle',
  latinName: 'Tarsus sinister',
  fmaIds: ['FMA:24985'],
  parentRegion: 'body.lower-limb.left',
  childRegions: [],
  level: 3,
  laterality: 'left',
  contralateralRegion: 'body.lower-limb.right.ankle',
  structures: {
    ...emptyStructures(),
    bones: [
      { id: 'talus-l', name: 'Left talus', fmaId: 'FMA:9680', laterality: 'left' },
      { id: 'calcaneus-l', name: 'Left calcaneus', fmaId: 'FMA:9681', laterality: 'left' },
    ],
    ligaments: [
      { id: 'atfl-l', name: 'Left anterior talofibular ligament', fmaId: 'FMA:44620', laterality: 'left' },
      { id: 'cfl-l', name: 'Left calcaneofibular ligament', fmaId: 'FMA:44621', laterality: 'left' },
      { id: 'deltoid-lig-l', name: 'Left deltoid ligament', fmaId: 'FMA:44622', laterality: 'left' },
    ],
    joints: [
      { id: 'ankle-joint-l', name: 'Left ankle joint', fmaId: 'FMA:35360', laterality: 'left' },
      { id: 'subtalar-l', name: 'Left subtalar joint', fmaId: 'FMA:35361', laterality: 'left' },
    ],
  },
  content: emptyContent(),
  meshIds: ['ankle_left'],
  defaultCamera: { position: { x: -0.3, y: 0.08, z: 0.5 }, target: { x: -0.08, y: 0.08, z: 0 }, zoom: 4 },
};

const footLeft: AnatomicalRegion = {
  id: 'body.lower-limb.left.foot',
  name: 'Left Foot',
  latinName: 'Pes sinister',
  fmaIds: ['FMA:24986'],
  parentRegion: 'body.lower-limb.left',
  childRegions: [],
  level: 3,
  laterality: 'left',
  contralateralRegion: 'body.lower-limb.right.foot',
  structures: {
    ...emptyStructures(),
    bones: [
      { id: 'tarsals-l', name: 'Left tarsal bones', fmaId: 'FMA:9682', laterality: 'left' },
      { id: 'metatarsals-l', name: 'Left metatarsals (I-V)', fmaId: 'FMA:9683', laterality: 'left' },
      { id: 'phalanges-foot-l', name: 'Left phalanges of foot', fmaId: 'FMA:9684', laterality: 'left' },
    ],
    muscles: [
      { id: 'intrinsic-foot-l', name: 'Left intrinsic foot muscles', fmaId: 'FMA:9670', laterality: 'left' },
    ],
  },
  content: emptyContent(),
  meshIds: ['foot_left'],
  defaultCamera: { position: { x: -0.2, y: 0.05, z: 0.4 }, target: { x: -0.05, y: 0.02, z: 0.1 }, zoom: 4 },
};

// Right Lower Limb
const lowerLimbRight: AnatomicalRegion = {
  id: 'body.lower-limb.right',
  name: 'Right Lower Limb',
  latinName: 'Membrum inferius dextrum',
  fmaIds: ['FMA:24978'],
  parentRegion: 'body.lower-limb',
  childRegions: ['body.lower-limb.right.hip', 'body.lower-limb.right.thigh', 'body.lower-limb.right.knee', 'body.lower-limb.right.leg', 'body.lower-limb.right.ankle', 'body.lower-limb.right.foot'],
  level: 2,
  laterality: 'right',
  contralateralRegion: 'body.lower-limb.left',
  structures: emptyStructures(),
  content: emptyContent(),
  meshIds: ['lower_limb_right'],
  defaultCamera: { position: { x: 1, y: 0.5, z: 1.5 }, target: { x: 0.2, y: 0.5, z: 0 }, zoom: 1 },
};

const hipRight: AnatomicalRegion = {
  id: 'body.lower-limb.right.hip',
  name: 'Right Hip',
  latinName: 'Coxa dextra',
  fmaIds: ['FMA:24980'],
  parentRegion: 'body.lower-limb.right',
  childRegions: [],
  level: 3,
  laterality: 'right',
  contralateralRegion: 'body.lower-limb.left.hip',
  structures: {
    ...emptyStructures(),
    bones: [
      { id: 'hip-bone-r', name: 'Right hip bone', fmaId: 'FMA:9598', laterality: 'right' },
      { id: 'femur-prox-r', name: 'Right proximal femur', fmaId: 'FMA:24475', laterality: 'right' },
    ],
    muscles: [
      { id: 'gluteus-max-r', name: 'Right gluteus maximus', fmaId: 'FMA:9622', laterality: 'right' },
      { id: 'gluteus-med-r', name: 'Right gluteus medius', fmaId: 'FMA:9623', laterality: 'right' },
      { id: 'gluteus-min-r', name: 'Right gluteus minimus', fmaId: 'FMA:9624', laterality: 'right' },
      { id: 'iliopsoas-r', name: 'Right iliopsoas', fmaId: 'FMA:9625', laterality: 'right' },
    ],
    joints: [
      { id: 'hip-joint-r', name: 'Right hip joint', fmaId: 'FMA:35177', laterality: 'right' },
    ],
  },
  content: emptyContent(),
  meshIds: ['hip_right'],
  defaultCamera: { position: { x: 0.8, y: 0.9, z: 0.8 }, target: { x: 0.2, y: 0.9, z: 0 }, zoom: 2 },
};

const thighRight: AnatomicalRegion = {
  id: 'body.lower-limb.right.thigh',
  name: 'Right Thigh',
  latinName: 'Femur dextrum',
  fmaIds: ['FMA:24970'],
  parentRegion: 'body.lower-limb.right',
  childRegions: [],
  level: 3,
  laterality: 'right',
  contralateralRegion: 'body.lower-limb.left.thigh',
  structures: {
    ...emptyStructures(),
    bones: [
      { id: 'femur-r', name: 'Right femur', fmaId: 'FMA:24474', laterality: 'right' },
    ],
    muscles: [
      { id: 'quadriceps-r', name: 'Right quadriceps femoris', fmaId: 'FMA:9626', laterality: 'right' },
      { id: 'hamstrings-r', name: 'Right hamstrings', fmaId: 'FMA:9627', laterality: 'right' },
      { id: 'adductors-r', name: 'Right adductor muscles', fmaId: 'FMA:9628', laterality: 'right' },
      { id: 'sartorius-r', name: 'Right sartorius', fmaId: 'FMA:9629', laterality: 'right' },
    ],
    vessels: [
      { id: 'femoral-a-r', name: 'Right femoral artery', fmaId: 'FMA:70248', laterality: 'right' },
      { id: 'femoral-v-r', name: 'Right femoral vein', fmaId: 'FMA:70249', laterality: 'right' },
      { id: 'great-saphenous-r', name: 'Right great saphenous vein', fmaId: 'FMA:70250', laterality: 'right' },
    ],
    nerves: [
      { id: 'femoral-n-r', name: 'Right femoral nerve', fmaId: 'FMA:16570', laterality: 'right' },
      { id: 'sciatic-r', name: 'Right sciatic nerve', fmaId: 'FMA:19034', laterality: 'right' },
    ],
  },
  content: emptyContent(),
  meshIds: ['thigh_right'],
  defaultCamera: { position: { x: 0.6, y: 0.6, z: 1 }, target: { x: 0.15, y: 0.6, z: 0 }, zoom: 1.8 },
};

const kneeRight: AnatomicalRegion = {
  id: 'body.lower-limb.right.knee',
  name: 'Right Knee',
  latinName: 'Genu dextrum',
  fmaIds: ['FMA:24971'],
  parentRegion: 'body.lower-limb.right',
  childRegions: [],
  level: 3,
  laterality: 'right',
  contralateralRegion: 'body.lower-limb.left.knee',
  structures: {
    ...emptyStructures(),
    bones: [
      { id: 'patella-r', name: 'Right patella', fmaId: 'FMA:9675', laterality: 'right' },
      { id: 'femur-dist-r', name: 'Right distal femur', fmaId: 'FMA:24477', laterality: 'right' },
      { id: 'tibia-prox-r', name: 'Right proximal tibia', fmaId: 'FMA:24479', laterality: 'right' },
    ],
    ligaments: [
      { id: 'acl-r', name: 'Right anterior cruciate ligament', fmaId: 'FMA:44615', laterality: 'right' },
      { id: 'pcl-r', name: 'Right posterior cruciate ligament', fmaId: 'FMA:44616', laterality: 'right' },
      { id: 'mcl-r', name: 'Right medial collateral ligament', fmaId: 'FMA:44617', laterality: 'right' },
      { id: 'lcl-r', name: 'Right lateral collateral ligament', fmaId: 'FMA:44618', laterality: 'right' },
    ],
    joints: [
      { id: 'knee-joint-r', name: 'Right knee joint', fmaId: 'FMA:35349', laterality: 'right' },
    ],
  },
  content: emptyContent(),
  meshIds: ['knee_right'],
  defaultCamera: { position: { x: 0.5, y: 0.45, z: 0.8 }, target: { x: 0.12, y: 0.45, z: 0 }, zoom: 3 },
};

const legRight: AnatomicalRegion = {
  id: 'body.lower-limb.right.leg',
  name: 'Right Leg',
  latinName: 'Crus dextrum',
  fmaIds: ['FMA:24972'],
  parentRegion: 'body.lower-limb.right',
  childRegions: [],
  level: 3,
  laterality: 'right',
  contralateralRegion: 'body.lower-limb.left.leg',
  structures: {
    ...emptyStructures(),
    bones: [
      { id: 'tibia-r', name: 'Right tibia', fmaId: 'FMA:9676', laterality: 'right' },
      { id: 'fibula-r', name: 'Right fibula', fmaId: 'FMA:9677', laterality: 'right' },
    ],
    muscles: [
      { id: 'gastrocnemius-r', name: 'Right gastrocnemius', fmaId: 'FMA:9630', laterality: 'right' },
      { id: 'soleus-r', name: 'Right soleus', fmaId: 'FMA:9631', laterality: 'right' },
      { id: 'tibialis-ant-r', name: 'Right tibialis anterior', fmaId: 'FMA:9632', laterality: 'right' },
      { id: 'peroneus-r', name: 'Right peroneus muscles', fmaId: 'FMA:9633', laterality: 'right' },
    ],
    vessels: [
      { id: 'popliteal-a-r', name: 'Right popliteal artery', fmaId: 'FMA:70251', laterality: 'right' },
      { id: 'ant-tibial-a-r', name: 'Right anterior tibial artery', fmaId: 'FMA:70252', laterality: 'right' },
      { id: 'post-tibial-a-r', name: 'Right posterior tibial artery', fmaId: 'FMA:70253', laterality: 'right' },
    ],
    nerves: [
      { id: 'tibial-n-r', name: 'Right tibial nerve', fmaId: 'FMA:19035', laterality: 'right' },
      { id: 'common-peroneal-r', name: 'Right common peroneal nerve', fmaId: 'FMA:19036', laterality: 'right' },
    ],
  },
  content: emptyContent(),
  meshIds: ['leg_right'],
  defaultCamera: { position: { x: 0.4, y: 0.25, z: 0.8 }, target: { x: 0.1, y: 0.25, z: 0 }, zoom: 2 },
};

const ankleRight: AnatomicalRegion = {
  id: 'body.lower-limb.right.ankle',
  name: 'Right Ankle',
  latinName: 'Tarsus dexter',
  fmaIds: ['FMA:24973'],
  parentRegion: 'body.lower-limb.right',
  childRegions: [],
  level: 3,
  laterality: 'right',
  contralateralRegion: 'body.lower-limb.left.ankle',
  structures: {
    ...emptyStructures(),
    bones: [
      { id: 'talus-r', name: 'Right talus', fmaId: 'FMA:9680', laterality: 'right' },
      { id: 'calcaneus-r', name: 'Right calcaneus', fmaId: 'FMA:9681', laterality: 'right' },
    ],
    ligaments: [
      { id: 'atfl-r', name: 'Right anterior talofibular ligament', fmaId: 'FMA:44620', laterality: 'right' },
      { id: 'cfl-r', name: 'Right calcaneofibular ligament', fmaId: 'FMA:44621', laterality: 'right' },
      { id: 'deltoid-lig-r', name: 'Right deltoid ligament', fmaId: 'FMA:44622', laterality: 'right' },
    ],
    joints: [
      { id: 'ankle-joint-r', name: 'Right ankle joint', fmaId: 'FMA:35359', laterality: 'right' },
      { id: 'subtalar-r', name: 'Right subtalar joint', fmaId: 'FMA:35361', laterality: 'right' },
    ],
  },
  content: emptyContent(),
  meshIds: ['ankle_right'],
  defaultCamera: { position: { x: 0.3, y: 0.08, z: 0.5 }, target: { x: 0.08, y: 0.08, z: 0 }, zoom: 4 },
};

const footRight: AnatomicalRegion = {
  id: 'body.lower-limb.right.foot',
  name: 'Right Foot',
  latinName: 'Pes dexter',
  fmaIds: ['FMA:24974'],
  parentRegion: 'body.lower-limb.right',
  childRegions: [],
  level: 3,
  laterality: 'right',
  contralateralRegion: 'body.lower-limb.left.foot',
  structures: {
    ...emptyStructures(),
    bones: [
      { id: 'tarsals-r', name: 'Right tarsal bones', fmaId: 'FMA:9682', laterality: 'right' },
      { id: 'metatarsals-r', name: 'Right metatarsals (I-V)', fmaId: 'FMA:9683', laterality: 'right' },
      { id: 'phalanges-foot-r', name: 'Right phalanges of foot', fmaId: 'FMA:9684', laterality: 'right' },
    ],
    muscles: [
      { id: 'intrinsic-foot-r', name: 'Right intrinsic foot muscles', fmaId: 'FMA:9670', laterality: 'right' },
    ],
  },
  content: emptyContent(),
  meshIds: ['foot_right'],
  defaultCamera: { position: { x: 0.2, y: 0.05, z: 0.4 }, target: { x: 0.05, y: 0.02, z: 0.1 }, zoom: 4 },
};

// =============================================================================
// REGISTER ALL REGIONS
// =============================================================================

const allRegions: AnatomicalRegion[] = [
  // Root
  bodyRoot,
  // Head
  head, cranium, face,
  // Neck
  neck,
  // Thorax
  thorax, thoracicWall, thoracicCavity,
  // Abdomen
  abdomen, abdominalWall, abdominalCavity,
  // Pelvis
  pelvis, pelvicWall, pelvicCavity, perineum,
  // Back
  back,
  // Upper limb - bilateral and left
  upperLimb, upperLimbLeft, shoulderLeft, armLeft, forearmLeft, wristLeft, handLeft,
  // Upper limb - right
  upperLimbRight, shoulderRight, armRight, forearmRight, wristRight, handRight,
  // Lower limb - bilateral and left
  lowerLimb, lowerLimbLeft, hipLeft, thighLeft, kneeLeft, legLeft, ankleLeft, footLeft,
  // Lower limb - right
  lowerLimbRight, hipRight, thighRight, kneeRight, legRight, ankleRight, footRight,
];

// Populate the registry
for (const region of allRegions) {
  regionRegistry.set(region.id, region);
}

/**
 * Get a region by ID
 */
export function getRegion(id: string): AnatomicalRegion | undefined {
  return regionRegistry.get(id);
}

/**
 * Get all regions
 */
export function getAllRegions(): AnatomicalRegion[] {
  return Array.from(regionRegistry.values());
}

/**
 * Get regions by level in hierarchy
 */
export function getRegionsByLevel(level: number): AnatomicalRegion[] {
  return getAllRegions().filter(r => r.level === level);
}

/**
 * Get all region IDs
 */
export function getAllRegionIds(): string[] {
  return Array.from(regionRegistry.keys());
}

/**
 * Get regions count
 */
export function getRegionsCount(): number {
  return regionRegistry.size;
}

/**
 * Search regions by name
 */
export function searchRegionsByName(query: string): AnatomicalRegion[] {
  const queryLower = query.toLowerCase();
  return getAllRegions().filter(r =>
    r.name.toLowerCase().includes(queryLower) ||
    r.latinName?.toLowerCase().includes(queryLower) ||
    r.alternativeNames?.some(n => n.toLowerCase().includes(queryLower))
  );
}

/**
 * Get regions by laterality
 */
export function getRegionsByLaterality(laterality: 'left' | 'right' | 'bilateral' | 'midline'): AnatomicalRegion[] {
  return getAllRegions().filter(r => r.laterality === laterality);
}
