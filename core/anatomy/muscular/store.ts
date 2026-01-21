/**
 * Muscular System Data Store
 *
 * Contains comprehensive muscle data with educational content
 * at 5 complexity levels.
 */

import type {
  Muscle,
  MuscleSummary,
  MuscularRegion,
  MuscularRegionInfo,
  MuscleStatistics,
  MuscleGroup,
  MuscleShape,
  MuscleAction,
} from './types';

// In-memory stores
const muscles = new Map<string, Muscle>();

// Indexes for fast lookup
const musclesByRegion = new Map<MuscularRegion, string[]>();
const musclesByGroup = new Map<MuscleGroup, string[]>();
const musclesByName = new Map<string, string>();
const musclesByFmaId = new Map<string, string>();

/**
 * Region information
 */
export const MUSCULAR_REGIONS: MuscularRegionInfo[] = [
  { id: 'head-facial', name: 'Facial Muscles', description: 'Muscles of facial expression', muscleCount: 20 },
  { id: 'head-mastication', name: 'Mastication Muscles', description: 'Muscles of chewing', muscleCount: 4 },
  { id: 'neck-anterior', name: 'Anterior Neck', description: 'Front neck muscles', muscleCount: 12 },
  { id: 'neck-lateral', name: 'Lateral Neck', description: 'Side neck muscles', muscleCount: 6 },
  { id: 'neck-posterior', name: 'Posterior Neck', description: 'Back neck muscles', muscleCount: 10 },
  { id: 'back-superficial', name: 'Superficial Back', description: 'Upper back muscles', muscleCount: 8 },
  { id: 'back-deep', name: 'Deep Back', description: 'Intrinsic back muscles', muscleCount: 24 },
  { id: 'thorax-anterior', name: 'Anterior Thorax', description: 'Front chest muscles', muscleCount: 6 },
  { id: 'thorax-posterior', name: 'Posterior Thorax', description: 'Back chest muscles', muscleCount: 4 },
  { id: 'abdomen-anterior', name: 'Anterior Abdomen', description: 'Front abdominal muscles', muscleCount: 4 },
  { id: 'abdomen-lateral', name: 'Lateral Abdomen', description: 'Side abdominal muscles', muscleCount: 6 },
  { id: 'abdomen-posterior', name: 'Posterior Abdomen', description: 'Back abdominal muscles', muscleCount: 4 },
  { id: 'pelvis-floor', name: 'Pelvic Floor', description: 'Muscles of pelvic floor', muscleCount: 12 },
  { id: 'shoulder-girdle', name: 'Shoulder', description: 'Shoulder muscles', muscleCount: 8 },
  { id: 'arm-anterior', name: 'Anterior Arm', description: 'Front upper arm muscles', muscleCount: 4 },
  { id: 'arm-posterior', name: 'Posterior Arm', description: 'Back upper arm muscles', muscleCount: 2 },
  { id: 'forearm-anterior', name: 'Anterior Forearm', description: 'Front forearm muscles', muscleCount: 8 },
  { id: 'forearm-posterior', name: 'Posterior Forearm', description: 'Back forearm muscles', muscleCount: 12 },
  { id: 'hand-thenar', name: 'Thenar', description: 'Thumb muscles', muscleCount: 4 },
  { id: 'hand-hypothenar', name: 'Hypothenar', description: 'Little finger muscles', muscleCount: 4 },
  { id: 'hand-interossei', name: 'Hand Intrinsic', description: 'Interossei and lumbricals', muscleCount: 11 },
  { id: 'gluteal', name: 'Gluteal', description: 'Buttock muscles', muscleCount: 6 },
  { id: 'thigh-anterior', name: 'Anterior Thigh', description: 'Front thigh muscles', muscleCount: 6 },
  { id: 'thigh-medial', name: 'Medial Thigh', description: 'Inner thigh muscles', muscleCount: 5 },
  { id: 'thigh-posterior', name: 'Posterior Thigh', description: 'Hamstring muscles', muscleCount: 3 },
  { id: 'leg-anterior', name: 'Anterior Leg', description: 'Front leg muscles', muscleCount: 4 },
  { id: 'leg-lateral', name: 'Lateral Leg', description: 'Side leg muscles', muscleCount: 2 },
  { id: 'leg-posterior', name: 'Posterior Leg', description: 'Calf muscles', muscleCount: 7 },
  { id: 'foot-dorsal', name: 'Dorsal Foot', description: 'Top of foot muscles', muscleCount: 2 },
  { id: 'foot-plantar', name: 'Plantar Foot', description: 'Sole of foot muscles', muscleCount: 14 },
];

/**
 * Initialize with comprehensive muscle data
 */
function initializeMuscles(): void {
  // ============================================
  // SHOULDER GIRDLE MUSCLES
  // ============================================

  const deltoid: Muscle = {
    id: 'deltoid-left',
    name: 'Left Deltoid',
    latinName: 'Musculus deltoideus',
    fmaId: 'FMA:32521',
    type: 'skeletal',
    shape: 'multipennate',
    region: 'shoulder-girdle',
    group: 'abductors',
    paired: true,
    side: 'left',
    location: 'Covering the shoulder joint, forming the rounded contour of the shoulder',
    explanations: {
      level1: 'The deltoid is the big muscle on your shoulder that makes it look round. When you raise your arm to the side (like making a "T" shape), your deltoid does most of the work. It has three parts: front, middle, and back.',
      level2: 'The deltoid muscle covers the shoulder joint and gives the shoulder its rounded shape. It has three parts (anterior, middle, posterior) that work together to move the arm in different directions - forward, sideways, and backward. It\'s the main muscle for raising your arm away from your body.',
      level3: 'The deltoid is a thick, triangular muscle with three heads: anterior (clavicular), middle (acromial), and posterior (spinal). The anterior fibers flex and internally rotate the arm; the middle fibers abduct; the posterior fibers extend and externally rotate. All three work together for arm abduction past 15°.',
      level4: 'The deltoid receives segmental innervation from the axillary nerve (C5-C6), which wraps around the surgical neck of the humerus - vulnerable in fractures and shoulder dislocation. The muscle\'s multipennate architecture provides strength over range. The subdeltoid bursa separates it from the rotator cuff tendons.',
      level5: 'Axillary nerve palsy presents with deltoid weakness and loss of shoulder contour (flattened deltoid sign). Test by resisted abduction at 90°. EMG studies show denervation patterns. Deltoid splitting approach is used for proximal humerus surgery. Injection site: upper outer quadrant to avoid nerve. Atrophy suggests C5-C6 root pathology or axillary neuropathy.',
    },
    keyFacts: [
      'Three heads: anterior, middle, posterior',
      'Primary abductor of the arm (past 15°)',
      'Innervated by axillary nerve (C5-C6)',
      'Gives the shoulder its rounded contour',
      'Common site for intramuscular injections',
    ],
    origins: [
      { structure: 'Clavicle', structureId: 'FMA:13321', landmark: 'Lateral third', description: 'Anterior fibers' },
      { structure: 'Acromion', structureId: 'FMA:23393', landmark: 'Lateral border', description: 'Middle fibers' },
      { structure: 'Scapula', structureId: 'FMA:13394', landmark: 'Spine of scapula', description: 'Posterior fibers' },
    ],
    insertions: [
      { structure: 'Humerus', structureId: 'FMA:13303', landmark: 'Deltoid tuberosity', description: 'All fibers converge here' },
    ],
    actions: [
      { jointName: 'Shoulder', jointId: 'FMA:25912', action: 'abduction', isPrimary: true, rangeOfMotion: '15-90°' },
      { jointName: 'Shoulder', jointId: 'FMA:25912', action: 'flexion', isPrimary: false },
      { jointName: 'Shoulder', jointId: 'FMA:25912', action: 'extension', isPrimary: false },
      { jointName: 'Shoulder', jointId: 'FMA:25912', action: 'internal-rotation', isPrimary: false },
      { jointName: 'Shoulder', jointId: 'FMA:25912', action: 'external-rotation', isPrimary: false },
    ],
    innervation: [
      { nerveName: 'Axillary nerve', nerveId: 'FMA:37072', roots: ['C5', 'C6'] },
    ],
    bloodSupply: [
      { arteryName: 'Posterior circumflex humeral artery', arteryId: 'FMA:22701' },
      { arteryName: 'Thoracoacromial artery', arteryId: 'FMA:22666', description: 'Deltoid branch' },
    ],
    fiberComposition: { typeI: 50, typeIIa: 35, typeIIb: 15 },
    relationships: [
      { muscleId: 'supraspinatus', muscleName: 'Supraspinatus', relationship: 'synergist', forAction: 'abduction' },
      { muscleId: 'pectoralis-major', muscleName: 'Pectoralis Major', relationship: 'antagonist', forAction: 'abduction' },
      { muscleId: 'latissimus-dorsi', muscleName: 'Latissimus Dorsi', relationship: 'antagonist', forAction: 'abduction' },
    ],
    injuries: [
      {
        name: 'Deltoid strain',
        description: 'Muscle fiber tear in the deltoid',
        mechanism: 'Overuse or sudden forceful arm movement',
        symptoms: ['Pain with arm movement', 'Tenderness over shoulder', 'Weakness with abduction'],
        treatment: 'Rest, ice, NSAIDs, physical therapy',
        recoveryTime: '2-6 weeks depending on severity',
      },
      {
        name: 'Deltoid contusion',
        description: 'Bruising of deltoid muscle',
        mechanism: 'Direct trauma to shoulder',
        symptoms: ['Pain', 'Swelling', 'Discoloration'],
        population: 'Contact sports athletes',
      },
    ],
    pathologies: [
      {
        name: 'Axillary nerve palsy',
        description: 'Injury to axillary nerve causing deltoid weakness',
        etiology: 'Shoulder dislocation, proximal humerus fracture',
        symptoms: ['Weakness of abduction', 'Loss of shoulder contour', 'Numbness over lateral shoulder'],
        relevantLabs: [],
        relevantImaging: ['MRI shoulder', 'EMG/NCS'],
      },
    ],
    exercises: [
      { name: 'Lateral raises', description: 'Arm abduction with weights', type: 'strength', targetedAction: 'abduction' },
      { name: 'Overhead press', description: 'Pressing weight overhead', type: 'strength' },
      { name: 'Deltoid stretch', description: 'Cross-body arm stretch', type: 'stretch' },
    ],
    relevantLabs: ['CK', 'Myoglobin'],
    relatedMuscles: ['supraspinatus', 'infraspinatus', 'teres-minor', 'subscapularis'],
    boneAttachments: ['clavicle-left', 'scapula-left', 'humerus-left'],
  };

  muscles.set('deltoid-left', deltoid);
  muscles.set('deltoid-right', {
    ...deltoid,
    id: 'deltoid-right',
    name: 'Right Deltoid',
    side: 'right',
    fmaId: 'FMA:32522',
    boneAttachments: ['clavicle-right', 'scapula-right', 'humerus-right'],
  });

  // ============================================
  // ARM MUSCLES - ANTERIOR
  // ============================================

  const bicepsBrachii: Muscle = {
    id: 'biceps-brachii-left',
    name: 'Left Biceps Brachii',
    latinName: 'Musculus biceps brachii',
    fmaId: 'FMA:37670',
    type: 'skeletal',
    shape: 'fusiform',
    region: 'arm-anterior',
    group: 'flexors',
    paired: true,
    side: 'left',
    location: 'Anterior arm between shoulder and elbow',
    explanations: {
      level1: 'The biceps is the muscle in your upper arm that you flex when showing off! It has two "heads" which is why it\'s called "bi-ceps" (meaning two heads). It bends your elbow and helps turn your hand palm-up.',
      level2: 'The biceps brachii is a two-headed muscle in the front of your upper arm. The long head attaches to the shoulder blade above the socket; the short head attaches nearby. Both heads join to attach to the radius bone in your forearm. It flexes the elbow and supinates the forearm (turns palm up).',
      level3: 'Biceps brachii has two heads: the long head originates from the supraglenoid tubercle (passes through the shoulder joint), and the short head from the coracoid process. Both insert on the radial tuberosity and bicipital aponeurosis. It\'s a powerful supinator when the elbow is flexed and assists in elbow flexion.',
      level4: 'The musculocutaneous nerve (C5-C6-C7) innervates both heads and continues as the lateral cutaneous nerve of the forearm. The long head tendon is intra-articular and prone to tendinopathy. The bicipital aponeurosis (lacertus fibrosus) protects the brachial artery and median nerve in the cubital fossa.',
      level5: 'Proximal biceps tendon pathology includes SLAP lesions (superior labrum), tendinopathy, and rupture (Popeye deformity). Speed\'s and Yergason\'s tests assess biceps tendinopathy. Distal biceps rupture presents with ecchymosis, weakness of supination, and hook test. Surgical options include tenodesis or tenotomy for proximal; repair or reconstruction for distal.',
    },
    keyFacts: [
      'Two heads: long and short',
      'Primary supinator of the forearm',
      'Assists elbow flexion',
      'Long head passes through shoulder joint',
      'Innervated by musculocutaneous nerve (C5-C6)',
    ],
    origins: [
      { structure: 'Scapula', structureId: 'FMA:13394', landmark: 'Supraglenoid tubercle', description: 'Long head' },
      { structure: 'Scapula', structureId: 'FMA:13394', landmark: 'Coracoid process', description: 'Short head' },
    ],
    insertions: [
      { structure: 'Radius', structureId: 'FMA:23463', landmark: 'Radial tuberosity', description: 'Main tendon insertion' },
      { structure: 'Forearm fascia', landmark: 'Bicipital aponeurosis', description: 'Expansion to deep fascia' },
    ],
    actions: [
      { jointName: 'Elbow', jointId: 'FMA:35289', action: 'flexion', isPrimary: true, rangeOfMotion: '0-145°' },
      { jointName: 'Radioulnar', action: 'supination', isPrimary: true },
      { jointName: 'Shoulder', jointId: 'FMA:25912', action: 'flexion', isPrimary: false },
    ],
    innervation: [
      { nerveName: 'Musculocutaneous nerve', nerveId: 'FMA:37067', roots: ['C5', 'C6'] },
    ],
    bloodSupply: [
      { arteryName: 'Brachial artery', arteryId: 'FMA:22689', description: 'Muscular branches' },
    ],
    fiberComposition: { typeI: 40, typeIIa: 40, typeIIb: 20 },
    relationships: [
      { muscleId: 'brachialis', muscleName: 'Brachialis', relationship: 'synergist', forAction: 'flexion' },
      { muscleId: 'triceps-brachii', muscleName: 'Triceps Brachii', relationship: 'antagonist', forAction: 'flexion' },
      { muscleId: 'supinator', muscleName: 'Supinator', relationship: 'synergist', forAction: 'supination' },
    ],
    injuries: [
      {
        name: 'Biceps tendinopathy',
        description: 'Degeneration of biceps tendon',
        mechanism: 'Repetitive overhead activity',
        symptoms: ['Anterior shoulder pain', 'Pain with lifting', 'Night pain'],
        population: 'Athletes, manual laborers, age >40',
        treatment: 'Physical therapy, injections, surgery if refractory',
      },
      {
        name: 'Biceps rupture (proximal)',
        description: 'Complete tear of long head tendon',
        mechanism: 'Sudden load on flexed elbow, degenerated tendon',
        symptoms: ['Popeye deformity', 'Bruising', 'Weakness (minimal)'],
        treatment: 'Non-operative for low-demand; tenodesis for active patients',
      },
      {
        name: 'Biceps rupture (distal)',
        description: 'Complete tear at radial tuberosity',
        mechanism: 'Eccentric load on flexed elbow',
        symptoms: ['Antecubital pain', 'Weakness (supination > flexion)', 'Palpable defect'],
        population: 'Males 40-60 years',
        treatment: 'Surgical repair for most patients',
      },
    ],
    pathologies: [],
    exercises: [
      { name: 'Biceps curl', description: 'Elbow flexion with weight', type: 'strength', targetedAction: 'flexion' },
      { name: 'Supination curls', description: 'Rotating forearm during curl', type: 'strength', targetedAction: 'supination' },
      { name: 'Biceps stretch', description: 'Arm behind body, palm up', type: 'stretch' },
    ],
    relevantLabs: ['CK', 'Myoglobin'],
    relatedMuscles: ['brachialis', 'brachioradialis', 'triceps-brachii'],
    boneAttachments: ['scapula-left', 'radius-left'],
  };

  muscles.set('biceps-brachii-left', bicepsBrachii);
  muscles.set('biceps-brachii-right', {
    ...bicepsBrachii,
    id: 'biceps-brachii-right',
    name: 'Right Biceps Brachii',
    side: 'right',
    fmaId: 'FMA:37671',
    boneAttachments: ['scapula-right', 'radius-right'],
  });

  // ============================================
  // ARM MUSCLES - POSTERIOR
  // ============================================

  const tricepsBrachii: Muscle = {
    id: 'triceps-brachii-left',
    name: 'Left Triceps Brachii',
    latinName: 'Musculus triceps brachii',
    fmaId: 'FMA:37688',
    type: 'skeletal',
    shape: 'fusiform',
    region: 'arm-posterior',
    group: 'extensors',
    paired: true,
    side: 'left',
    location: 'Posterior arm between shoulder and elbow',
    explanations: {
      level1: 'The triceps is the muscle on the back of your upper arm. It has three parts (tri = three). When you straighten your elbow or push something away from you, your triceps does the work. It\'s the opposite of your biceps!',
      level2: 'The triceps brachii has three heads: long, lateral, and medial. The long head attaches to the shoulder blade, while the other two attach to the humerus. All three join into one tendon that attaches to the ulna at the elbow. It\'s the main muscle that straightens your elbow.',
      level3: 'Triceps brachii has three heads: long (from infraglenoid tubercle of scapula), lateral (from posterior humerus above radial groove), and medial (from posterior humerus below radial groove). All insert on the olecranon process of the ulna via a common tendon. Primary extensor of the elbow; long head assists in shoulder extension and adduction.',
      level4: 'The radial nerve (C6-C8) innervates all three heads, running in the spiral groove between lateral and medial heads. The nerve is at risk in mid-shaft humerus fractures. The medial head is active in all elbow extension; lateral and long heads recruited for resistance. The subtendinous olecranon bursa lies between tendon and olecranon.',
      level5: 'Radial nerve palsy presents with wrist drop (extensors) and finger drop, but triceps often spared in mid-shaft fractures due to proximal branching. Test triceps with elbow extension against gravity. Triceps tendon rupture is rare; consider anabolic steroid use and chronic renal failure as risk factors. Surgical repair is indicated for complete ruptures in active patients.',
    },
    keyFacts: [
      'Three heads: long, lateral, medial',
      'Primary extensor of the elbow',
      'Innervated by radial nerve (C6-C8)',
      'Long head crosses shoulder joint',
      'Antagonist to biceps brachii',
    ],
    origins: [
      { structure: 'Scapula', structureId: 'FMA:13394', landmark: 'Infraglenoid tubercle', description: 'Long head' },
      { structure: 'Humerus', structureId: 'FMA:13303', landmark: 'Posterior surface above radial groove', description: 'Lateral head' },
      { structure: 'Humerus', structureId: 'FMA:13303', landmark: 'Posterior surface below radial groove', description: 'Medial head' },
    ],
    insertions: [
      { structure: 'Ulna', structureId: 'FMA:23466', landmark: 'Olecranon process', description: 'Common tendon' },
    ],
    actions: [
      { jointName: 'Elbow', jointId: 'FMA:35289', action: 'extension', isPrimary: true, rangeOfMotion: '0-145°' },
      { jointName: 'Shoulder', jointId: 'FMA:25912', action: 'extension', isPrimary: false },
      { jointName: 'Shoulder', jointId: 'FMA:25912', action: 'adduction', isPrimary: false },
    ],
    innervation: [
      { nerveName: 'Radial nerve', nerveId: 'FMA:37069', roots: ['C6', 'C7', 'C8'] },
    ],
    bloodSupply: [
      { arteryName: 'Deep brachial artery', arteryId: 'FMA:22692' },
      { arteryName: 'Superior ulnar collateral artery', arteryId: 'FMA:22693' },
    ],
    fiberComposition: { typeI: 35, typeIIa: 40, typeIIb: 25 },
    relationships: [
      { muscleId: 'anconeus', muscleName: 'Anconeus', relationship: 'synergist', forAction: 'extension' },
      { muscleId: 'biceps-brachii', muscleName: 'Biceps Brachii', relationship: 'antagonist', forAction: 'extension' },
      { muscleId: 'brachialis', muscleName: 'Brachialis', relationship: 'antagonist', forAction: 'extension' },
    ],
    injuries: [
      {
        name: 'Triceps tendon rupture',
        description: 'Complete tear of triceps tendon from olecranon',
        mechanism: 'Fall on outstretched hand, direct blow, forced flexion during contraction',
        symptoms: ['Posterior elbow pain', 'Palpable defect', 'Weakness of extension'],
        population: 'Males, anabolic steroid users, renal dialysis patients',
        treatment: 'Surgical repair for complete tears',
      },
    ],
    pathologies: [
      {
        name: 'Radial nerve entrapment',
        description: 'Compression of radial nerve in spiral groove',
        etiology: 'Humerus fracture, compression ("Saturday night palsy")',
        symptoms: ['Wrist drop', 'Finger drop', 'Sensory loss dorsal hand'],
        relevantLabs: [],
        relevantImaging: ['MRI', 'EMG/NCS'],
      },
    ],
    exercises: [
      { name: 'Triceps dips', description: 'Body weight elbow extension', type: 'strength', targetedAction: 'extension' },
      { name: 'Triceps pushdown', description: 'Cable elbow extension', type: 'strength', targetedAction: 'extension' },
      { name: 'Triceps stretch', description: 'Arm overhead, elbow bent', type: 'stretch' },
    ],
    relevantLabs: ['CK', 'Myoglobin', 'Creatinine'],
    relatedMuscles: ['biceps-brachii', 'brachialis', 'anconeus'],
    boneAttachments: ['scapula-left', 'humerus-left', 'ulna-left'],
  };

  muscles.set('triceps-brachii-left', tricepsBrachii);
  muscles.set('triceps-brachii-right', {
    ...tricepsBrachii,
    id: 'triceps-brachii-right',
    name: 'Right Triceps Brachii',
    side: 'right',
    fmaId: 'FMA:37689',
    boneAttachments: ['scapula-right', 'humerus-right', 'ulna-right'],
  });

  // ============================================
  // Add basic entries for remaining major muscles
  // ============================================

  const createBasicMuscle = (
    id: string,
    name: string,
    latinName: string,
    shape: MuscleShape,
    region: MuscularRegion,
    group: MuscleGroup,
    paired: boolean,
    side: 'left' | 'right' | 'midline' | undefined,
    fmaId: string,
    primaryAction: MuscleAction
  ): Muscle => ({
    id,
    name,
    latinName,
    fmaId,
    type: 'skeletal',
    shape,
    region,
    group,
    paired,
    side,
    location: `Part of the ${region.replace(/-/g, ' ')} muscle group`,
    explanations: {
      level1: `The ${name.toLowerCase()} is a muscle that helps with ${primaryAction.replace(/-/g, ' ')}.`,
      level2: `The ${name.toLowerCase()} (${latinName}) is located in the ${region.replace(/-/g, ' ')} and performs ${primaryAction.replace(/-/g, ' ')}.`,
      level3: `The ${name.toLowerCase()} is a ${shape} muscle in the ${region.replace(/-/g, ' ')} region that functions primarily as a ${group.slice(0, -1)}.`,
      level4: `The ${name.toLowerCase()} (${latinName}, ${fmaId}) contributes to ${primaryAction.replace(/-/g, ' ')} through its anatomical attachments and innervation pattern.`,
      level5: `Clinical considerations for the ${name.toLowerCase()} include common injury patterns, surgical approaches, and relevant pathophysiology.`,
    },
    keyFacts: [
      `Primary action: ${primaryAction.replace(/-/g, ' ')}`,
      `Shape: ${shape}`,
      `Region: ${region.replace(/-/g, ' ')}`,
      paired ? 'Exists as a pair (left and right)' : 'Unpaired midline muscle',
    ],
    origins: [],
    insertions: [],
    actions: [{ jointName: 'Various', action: primaryAction, isPrimary: true }],
    innervation: [],
    bloodSupply: [],
    relationships: [],
    injuries: [],
    pathologies: [],
    relevantLabs: ['CK', 'Myoglobin'],
  });

  // Rotator cuff muscles
  muscles.set('supraspinatus-left', createBasicMuscle('supraspinatus-left', 'Left Supraspinatus', 'Musculus supraspinatus', 'fusiform', 'shoulder-girdle', 'abductors', true, 'left', 'FMA:32528', 'abduction'));
  muscles.set('supraspinatus-right', createBasicMuscle('supraspinatus-right', 'Right Supraspinatus', 'Musculus supraspinatus', 'fusiform', 'shoulder-girdle', 'abductors', true, 'right', 'FMA:32529', 'abduction'));
  muscles.set('infraspinatus-left', createBasicMuscle('infraspinatus-left', 'Left Infraspinatus', 'Musculus infraspinatus', 'convergent', 'shoulder-girdle', 'rotators-external', true, 'left', 'FMA:32530', 'external-rotation'));
  muscles.set('infraspinatus-right', createBasicMuscle('infraspinatus-right', 'Right Infraspinatus', 'Musculus infraspinatus', 'convergent', 'shoulder-girdle', 'rotators-external', true, 'right', 'FMA:32531', 'external-rotation'));
  muscles.set('teres-minor-left', createBasicMuscle('teres-minor-left', 'Left Teres Minor', 'Musculus teres minor', 'fusiform', 'shoulder-girdle', 'rotators-external', true, 'left', 'FMA:32532', 'external-rotation'));
  muscles.set('teres-minor-right', createBasicMuscle('teres-minor-right', 'Right Teres Minor', 'Musculus teres minor', 'fusiform', 'shoulder-girdle', 'rotators-external', true, 'right', 'FMA:32533', 'external-rotation'));
  muscles.set('subscapularis-left', createBasicMuscle('subscapularis-left', 'Left Subscapularis', 'Musculus subscapularis', 'multipennate', 'shoulder-girdle', 'rotators-internal', true, 'left', 'FMA:32534', 'internal-rotation'));
  muscles.set('subscapularis-right', createBasicMuscle('subscapularis-right', 'Right Subscapularis', 'Musculus subscapularis', 'multipennate', 'shoulder-girdle', 'rotators-internal', true, 'right', 'FMA:32535', 'internal-rotation'));

  // Chest muscles
  muscles.set('pectoralis-major-left', createBasicMuscle('pectoralis-major-left', 'Left Pectoralis Major', 'Musculus pectoralis major', 'convergent', 'thorax-anterior', 'flexors', true, 'left', 'FMA:9627', 'flexion'));
  muscles.set('pectoralis-major-right', createBasicMuscle('pectoralis-major-right', 'Right Pectoralis Major', 'Musculus pectoralis major', 'convergent', 'thorax-anterior', 'flexors', true, 'right', 'FMA:9628', 'flexion'));
  muscles.set('pectoralis-minor-left', createBasicMuscle('pectoralis-minor-left', 'Left Pectoralis Minor', 'Musculus pectoralis minor', 'convergent', 'thorax-anterior', 'depressors', true, 'left', 'FMA:9629', 'depression'));
  muscles.set('pectoralis-minor-right', createBasicMuscle('pectoralis-minor-right', 'Right Pectoralis Minor', 'Musculus pectoralis minor', 'convergent', 'thorax-anterior', 'depressors', true, 'right', 'FMA:9630', 'depression'));

  // Back muscles
  muscles.set('trapezius-left', createBasicMuscle('trapezius-left', 'Left Trapezius', 'Musculus trapezius', 'triangular', 'back-superficial', 'elevators', true, 'left', 'FMA:9626', 'elevation'));
  muscles.set('trapezius-right', createBasicMuscle('trapezius-right', 'Right Trapezius', 'Musculus trapezius', 'triangular', 'back-superficial', 'elevators', true, 'right', 'FMA:9626', 'elevation'));
  muscles.set('latissimus-dorsi-left', createBasicMuscle('latissimus-dorsi-left', 'Left Latissimus Dorsi', 'Musculus latissimus dorsi', 'triangular', 'back-superficial', 'extensors', true, 'left', 'FMA:13357', 'extension'));
  muscles.set('latissimus-dorsi-right', createBasicMuscle('latissimus-dorsi-right', 'Right Latissimus Dorsi', 'Musculus latissimus dorsi', 'triangular', 'back-superficial', 'extensors', true, 'right', 'FMA:13358', 'extension'));
  muscles.set('rhomboid-major-left', createBasicMuscle('rhomboid-major-left', 'Left Rhomboid Major', 'Musculus rhomboideus major', 'parallel', 'back-superficial', 'adductors', true, 'left', 'FMA:13371', 'retraction'));
  muscles.set('rhomboid-major-right', createBasicMuscle('rhomboid-major-right', 'Right Rhomboid Major', 'Musculus rhomboideus major', 'parallel', 'back-superficial', 'adductors', true, 'right', 'FMA:13372', 'retraction'));
  muscles.set('rhomboid-minor-left', createBasicMuscle('rhomboid-minor-left', 'Left Rhomboid Minor', 'Musculus rhomboideus minor', 'parallel', 'back-superficial', 'adductors', true, 'left', 'FMA:13373', 'retraction'));
  muscles.set('rhomboid-minor-right', createBasicMuscle('rhomboid-minor-right', 'Right Rhomboid Minor', 'Musculus rhomboideus minor', 'parallel', 'back-superficial', 'adductors', true, 'right', 'FMA:13374', 'retraction'));

  // Abdominal muscles
  muscles.set('rectus-abdominis-left', createBasicMuscle('rectus-abdominis-left', 'Left Rectus Abdominis', 'Musculus rectus abdominis', 'parallel', 'abdomen-anterior', 'flexors', true, 'left', 'FMA:15570', 'flexion'));
  muscles.set('rectus-abdominis-right', createBasicMuscle('rectus-abdominis-right', 'Right Rectus Abdominis', 'Musculus rectus abdominis', 'parallel', 'abdomen-anterior', 'flexors', true, 'right', 'FMA:15571', 'flexion'));
  muscles.set('external-oblique-left', createBasicMuscle('external-oblique-left', 'Left External Oblique', 'Musculus obliquus externus abdominis', 'convergent', 'abdomen-lateral', 'rotators-internal', true, 'left', 'FMA:13335', 'rotation'));
  muscles.set('external-oblique-right', createBasicMuscle('external-oblique-right', 'Right External Oblique', 'Musculus obliquus externus abdominis', 'convergent', 'abdomen-lateral', 'rotators-internal', true, 'right', 'FMA:13336', 'rotation'));
  muscles.set('internal-oblique-left', createBasicMuscle('internal-oblique-left', 'Left Internal Oblique', 'Musculus obliquus internus abdominis', 'convergent', 'abdomen-lateral', 'rotators-internal', true, 'left', 'FMA:13337', 'rotation'));
  muscles.set('internal-oblique-right', createBasicMuscle('internal-oblique-right', 'Right Internal Oblique', 'Musculus obliquus internus abdominis', 'convergent', 'abdomen-lateral', 'rotators-internal', true, 'right', 'FMA:13338', 'rotation'));
  muscles.set('transversus-abdominis-left', createBasicMuscle('transversus-abdominis-left', 'Left Transversus Abdominis', 'Musculus transversus abdominis', 'parallel', 'abdomen-lateral', 'postural', true, 'left', 'FMA:15573', 'flexion'));
  muscles.set('transversus-abdominis-right', createBasicMuscle('transversus-abdominis-right', 'Right Transversus Abdominis', 'Musculus transversus abdominis', 'parallel', 'abdomen-lateral', 'postural', true, 'right', 'FMA:15574', 'flexion'));

  // Gluteal muscles
  muscles.set('gluteus-maximus-left', createBasicMuscle('gluteus-maximus-left', 'Left Gluteus Maximus', 'Musculus gluteus maximus', 'multipennate', 'gluteal', 'extensors', true, 'left', 'FMA:22314', 'extension'));
  muscles.set('gluteus-maximus-right', createBasicMuscle('gluteus-maximus-right', 'Right Gluteus Maximus', 'Musculus gluteus maximus', 'multipennate', 'gluteal', 'extensors', true, 'right', 'FMA:22315', 'extension'));
  muscles.set('gluteus-medius-left', createBasicMuscle('gluteus-medius-left', 'Left Gluteus Medius', 'Musculus gluteus medius', 'convergent', 'gluteal', 'abductors', true, 'left', 'FMA:22316', 'abduction'));
  muscles.set('gluteus-medius-right', createBasicMuscle('gluteus-medius-right', 'Right Gluteus Medius', 'Musculus gluteus medius', 'convergent', 'gluteal', 'abductors', true, 'right', 'FMA:22317', 'abduction'));
  muscles.set('gluteus-minimus-left', createBasicMuscle('gluteus-minimus-left', 'Left Gluteus Minimus', 'Musculus gluteus minimus', 'convergent', 'gluteal', 'abductors', true, 'left', 'FMA:22318', 'abduction'));
  muscles.set('gluteus-minimus-right', createBasicMuscle('gluteus-minimus-right', 'Right Gluteus Minimus', 'Musculus gluteus minimus', 'convergent', 'gluteal', 'abductors', true, 'right', 'FMA:22319', 'abduction'));

  // Thigh muscles - anterior
  muscles.set('quadriceps-rectus-femoris-left', createBasicMuscle('quadriceps-rectus-femoris-left', 'Left Rectus Femoris', 'Musculus rectus femoris', 'bipennate', 'thigh-anterior', 'extensors', true, 'left', 'FMA:22430', 'extension'));
  muscles.set('quadriceps-rectus-femoris-right', createBasicMuscle('quadriceps-rectus-femoris-right', 'Right Rectus Femoris', 'Musculus rectus femoris', 'bipennate', 'thigh-anterior', 'extensors', true, 'right', 'FMA:22431', 'extension'));
  muscles.set('quadriceps-vastus-lateralis-left', createBasicMuscle('quadriceps-vastus-lateralis-left', 'Left Vastus Lateralis', 'Musculus vastus lateralis', 'bipennate', 'thigh-anterior', 'extensors', true, 'left', 'FMA:22432', 'extension'));
  muscles.set('quadriceps-vastus-lateralis-right', createBasicMuscle('quadriceps-vastus-lateralis-right', 'Right Vastus Lateralis', 'Musculus vastus lateralis', 'bipennate', 'thigh-anterior', 'extensors', true, 'right', 'FMA:22433', 'extension'));
  muscles.set('quadriceps-vastus-medialis-left', createBasicMuscle('quadriceps-vastus-medialis-left', 'Left Vastus Medialis', 'Musculus vastus medialis', 'bipennate', 'thigh-anterior', 'extensors', true, 'left', 'FMA:22434', 'extension'));
  muscles.set('quadriceps-vastus-medialis-right', createBasicMuscle('quadriceps-vastus-medialis-right', 'Right Vastus Medialis', 'Musculus vastus medialis', 'bipennate', 'thigh-anterior', 'extensors', true, 'right', 'FMA:22435', 'extension'));
  muscles.set('quadriceps-vastus-intermedius-left', createBasicMuscle('quadriceps-vastus-intermedius-left', 'Left Vastus Intermedius', 'Musculus vastus intermedius', 'bipennate', 'thigh-anterior', 'extensors', true, 'left', 'FMA:22436', 'extension'));
  muscles.set('quadriceps-vastus-intermedius-right', createBasicMuscle('quadriceps-vastus-intermedius-right', 'Right Vastus Intermedius', 'Musculus vastus intermedius', 'bipennate', 'thigh-anterior', 'extensors', true, 'right', 'FMA:22437', 'extension'));
  muscles.set('sartorius-left', createBasicMuscle('sartorius-left', 'Left Sartorius', 'Musculus sartorius', 'strap', 'thigh-anterior', 'flexors', true, 'left', 'FMA:22353', 'flexion'));
  muscles.set('sartorius-right', createBasicMuscle('sartorius-right', 'Right Sartorius', 'Musculus sartorius', 'strap', 'thigh-anterior', 'flexors', true, 'right', 'FMA:22354', 'flexion'));

  // Thigh muscles - posterior (hamstrings)
  muscles.set('biceps-femoris-left', createBasicMuscle('biceps-femoris-left', 'Left Biceps Femoris', 'Musculus biceps femoris', 'fusiform', 'thigh-posterior', 'flexors', true, 'left', 'FMA:22356', 'flexion'));
  muscles.set('biceps-femoris-right', createBasicMuscle('biceps-femoris-right', 'Right Biceps Femoris', 'Musculus biceps femoris', 'fusiform', 'thigh-posterior', 'flexors', true, 'right', 'FMA:22357', 'flexion'));
  muscles.set('semitendinosus-left', createBasicMuscle('semitendinosus-left', 'Left Semitendinosus', 'Musculus semitendinosus', 'fusiform', 'thigh-posterior', 'flexors', true, 'left', 'FMA:22358', 'flexion'));
  muscles.set('semitendinosus-right', createBasicMuscle('semitendinosus-right', 'Right Semitendinosus', 'Musculus semitendinosus', 'fusiform', 'thigh-posterior', 'flexors', true, 'right', 'FMA:22359', 'flexion'));
  muscles.set('semimembranosus-left', createBasicMuscle('semimembranosus-left', 'Left Semimembranosus', 'Musculus semimembranosus', 'fusiform', 'thigh-posterior', 'flexors', true, 'left', 'FMA:22360', 'flexion'));
  muscles.set('semimembranosus-right', createBasicMuscle('semimembranosus-right', 'Right Semimembranosus', 'Musculus semimembranosus', 'fusiform', 'thigh-posterior', 'flexors', true, 'right', 'FMA:22361', 'flexion'));

  // Thigh muscles - medial (adductors)
  muscles.set('adductor-magnus-left', createBasicMuscle('adductor-magnus-left', 'Left Adductor Magnus', 'Musculus adductor magnus', 'convergent', 'thigh-medial', 'adductors', true, 'left', 'FMA:22441', 'adduction'));
  muscles.set('adductor-magnus-right', createBasicMuscle('adductor-magnus-right', 'Right Adductor Magnus', 'Musculus adductor magnus', 'convergent', 'thigh-medial', 'adductors', true, 'right', 'FMA:22442', 'adduction'));
  muscles.set('adductor-longus-left', createBasicMuscle('adductor-longus-left', 'Left Adductor Longus', 'Musculus adductor longus', 'convergent', 'thigh-medial', 'adductors', true, 'left', 'FMA:22443', 'adduction'));
  muscles.set('adductor-longus-right', createBasicMuscle('adductor-longus-right', 'Right Adductor Longus', 'Musculus adductor longus', 'convergent', 'thigh-medial', 'adductors', true, 'right', 'FMA:22444', 'adduction'));
  muscles.set('adductor-brevis-left', createBasicMuscle('adductor-brevis-left', 'Left Adductor Brevis', 'Musculus adductor brevis', 'convergent', 'thigh-medial', 'adductors', true, 'left', 'FMA:22445', 'adduction'));
  muscles.set('adductor-brevis-right', createBasicMuscle('adductor-brevis-right', 'Right Adductor Brevis', 'Musculus adductor brevis', 'convergent', 'thigh-medial', 'adductors', true, 'right', 'FMA:22446', 'adduction'));
  muscles.set('gracilis-left', createBasicMuscle('gracilis-left', 'Left Gracilis', 'Musculus gracilis', 'strap', 'thigh-medial', 'adductors', true, 'left', 'FMA:22447', 'adduction'));
  muscles.set('gracilis-right', createBasicMuscle('gracilis-right', 'Right Gracilis', 'Musculus gracilis', 'strap', 'thigh-medial', 'adductors', true, 'right', 'FMA:22448', 'adduction'));
  muscles.set('pectineus-left', createBasicMuscle('pectineus-left', 'Left Pectineus', 'Musculus pectineus', 'quadrilateral', 'thigh-medial', 'adductors', true, 'left', 'FMA:22449', 'adduction'));
  muscles.set('pectineus-right', createBasicMuscle('pectineus-right', 'Right Pectineus', 'Musculus pectineus', 'quadrilateral', 'thigh-medial', 'adductors', true, 'right', 'FMA:22450', 'adduction'));

  // Leg muscles - posterior (calf)
  muscles.set('gastrocnemius-left', createBasicMuscle('gastrocnemius-left', 'Left Gastrocnemius', 'Musculus gastrocnemius', 'bipennate', 'leg-posterior', 'flexors', true, 'left', 'FMA:22541', 'plantarflexion'));
  muscles.set('gastrocnemius-right', createBasicMuscle('gastrocnemius-right', 'Right Gastrocnemius', 'Musculus gastrocnemius', 'bipennate', 'leg-posterior', 'flexors', true, 'right', 'FMA:22542', 'plantarflexion'));
  muscles.set('soleus-left', createBasicMuscle('soleus-left', 'Left Soleus', 'Musculus soleus', 'multipennate', 'leg-posterior', 'flexors', true, 'left', 'FMA:22543', 'plantarflexion'));
  muscles.set('soleus-right', createBasicMuscle('soleus-right', 'Right Soleus', 'Musculus soleus', 'multipennate', 'leg-posterior', 'flexors', true, 'right', 'FMA:22544', 'plantarflexion'));

  // Leg muscles - anterior
  muscles.set('tibialis-anterior-left', createBasicMuscle('tibialis-anterior-left', 'Left Tibialis Anterior', 'Musculus tibialis anterior', 'pennate', 'leg-anterior', 'extensors', true, 'left', 'FMA:22531', 'dorsiflexion'));
  muscles.set('tibialis-anterior-right', createBasicMuscle('tibialis-anterior-right', 'Right Tibialis Anterior', 'Musculus tibialis anterior', 'pennate', 'leg-anterior', 'extensors', true, 'right', 'FMA:22532', 'dorsiflexion'));

  // Respiratory
  muscles.set('diaphragm', createBasicMuscle('diaphragm', 'Diaphragm', 'Musculus diaphragma', 'circular', 'thorax-anterior', 'respiratory', false, 'midline', 'FMA:13295', 'inspiration'));

  // Build indexes
  muscles.forEach((muscle, id) => {
    // By region
    const regionList = musclesByRegion.get(muscle.region) || [];
    regionList.push(id);
    musclesByRegion.set(muscle.region, regionList);

    // By group
    const groupList = musclesByGroup.get(muscle.group) || [];
    groupList.push(id);
    musclesByGroup.set(muscle.group, groupList);

    // By name
    musclesByName.set(muscle.name.toLowerCase(), id);
    if (muscle.latinName) {
      musclesByName.set(muscle.latinName.toLowerCase(), id);
    }

    // By FMA ID
    if (muscle.fmaId) {
      musclesByFmaId.set(muscle.fmaId, id);
    }
  });
}

// Initialize on module load
initializeMuscles();

// ============================================
// API Functions
// ============================================

/**
 * Get muscle by ID
 */
export function getMuscle(id: string): Muscle | undefined {
  return muscles.get(id);
}

/**
 * Get all muscles
 */
export function getAllMuscles(): Muscle[] {
  return Array.from(muscles.values());
}

/**
 * Get muscles by region
 */
export function getMusclesByRegion(region: MuscularRegion): Muscle[] {
  const ids = musclesByRegion.get(region) || [];
  return ids.map(id => muscles.get(id)!).filter(Boolean);
}

/**
 * Get muscles by functional group
 */
export function getMusclesByGroup(group: MuscleGroup): Muscle[] {
  const ids = musclesByGroup.get(group) || [];
  return ids.map(id => muscles.get(id)!).filter(Boolean);
}

/**
 * Search muscles by name
 */
export function searchMuscles(query: string): Muscle[] {
  const lowerQuery = query.toLowerCase();
  return Array.from(muscles.values()).filter(m =>
    m.name.toLowerCase().includes(lowerQuery) ||
    (m.latinName && m.latinName.toLowerCase().includes(lowerQuery))
  );
}

/**
 * Get muscle by name (exact match, case-insensitive)
 */
export function getMuscleByName(name: string): Muscle | undefined {
  const id = musclesByName.get(name.toLowerCase());
  return id ? muscles.get(id) : undefined;
}

/**
 * Get muscle by FMA ID
 */
export function getMuscleByFmaId(fmaId: string): Muscle | undefined {
  const id = musclesByFmaId.get(fmaId);
  return id ? muscles.get(id) : undefined;
}

/**
 * Get muscle summaries for listing
 */
export function getMuscleSummaries(): MuscleSummary[] {
  return Array.from(muscles.values()).map(m => ({
    id: m.id,
    name: m.name,
    region: m.region,
    group: m.group,
    primaryAction: m.actions.find(a => a.isPrimary)?.action,
  }));
}

/**
 * Get region information
 */
export function getRegionInfo(region: MuscularRegion): MuscularRegionInfo | undefined {
  return MUSCULAR_REGIONS.find(r => r.id === region);
}

/**
 * Get all region information
 */
export function getAllRegions(): MuscularRegionInfo[] {
  return MUSCULAR_REGIONS;
}

/**
 * Get muscle statistics
 */
export function getMuscleStatistics(): MuscleStatistics {
  const stats: MuscleStatistics = {
    total: muscles.size,
    byRegion: {} as Record<MuscularRegion, number>,
    byGroup: {} as Record<MuscleGroup, number>,
    byShape: {} as Record<MuscleShape, number>,
  };

  muscles.forEach(muscle => {
    stats.byRegion[muscle.region] = (stats.byRegion[muscle.region] || 0) + 1;
    stats.byGroup[muscle.group] = (stats.byGroup[muscle.group] || 0) + 1;
    stats.byShape[muscle.shape] = (stats.byShape[muscle.shape] || 0) + 1;
  });

  return stats;
}

/**
 * Get explanation at specified level (with fallback)
 */
export function getExplanation(muscle: Muscle, level: 1 | 2 | 3 | 4 | 5): string {
  const levelKey = `level${level}` as keyof typeof muscle.explanations;
  if (muscle.explanations[levelKey]) {
    return muscle.explanations[levelKey]!;
  }
  for (let l = level - 1; l >= 1; l--) {
    const fallbackKey = `level${l}` as keyof typeof muscle.explanations;
    if (muscle.explanations[fallbackKey]) {
      return muscle.explanations[fallbackKey]!;
    }
  }
  return 'No explanation available.';
}

/**
 * Get muscles that attach to a specific bone
 */
export function getMusclesForBone(boneId: string): Muscle[] {
  return Array.from(muscles.values()).filter(m =>
    m.boneAttachments?.includes(boneId)
  );
}

/**
 * Get agonist/antagonist pairs
 */
export function getAntagonists(muscleId: string): Muscle[] {
  const muscle = muscles.get(muscleId);
  if (!muscle) return [];
  return muscle.relationships
    .filter(r => r.relationship === 'antagonist')
    .map(r => muscles.get(r.muscleId)!)
    .filter(Boolean);
}

/**
 * Get synergist muscles
 */
export function getSynergists(muscleId: string): Muscle[] {
  const muscle = muscles.get(muscleId);
  if (!muscle) return [];
  return muscle.relationships
    .filter(r => r.relationship === 'synergist')
    .map(r => muscles.get(r.muscleId)!)
    .filter(Boolean);
}
