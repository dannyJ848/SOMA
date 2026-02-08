/**
 * Anatomy Context Builder Utility
 *
 * Functions to build AI prompts with anatomical structure + health context.
 * Enhanced with image references for visual learning.
 */

import { getImagesByBodyRegion, getImagesByBodySystem, ImageMetadata } from '../content/imageRegistry.js';

interface DashboardData {
  activeConditions: Array<{ name: string; status: string }>;
  currentMedications: Array<{ name: string; dosage?: string; frequency?: string }>;
  recentSymptoms: Array<{ description: string; severity: number; location?: string }>;
  recentLabs: Array<{ testName: string; value: number | string; unit?: string; status?: string }>;
}

interface StructureEducationalContent {
  name: string;
  latinName?: string;
  system: string;
  location: string;
  function: string;
  commonConditions: string[];
  relatedStructures: string[];
  relatedModules?: string[];
  imageReferences?: ImageMetadata[];
}

// Educational content for body regions (expandable with more data)
const STRUCTURE_DATA: Record<string, StructureEducationalContent> = {
  // HEAD & NECK
  head: {
    name: 'Head',
    latinName: 'Caput',
    system: 'Central Nervous System',
    location: 'Superior aspect of the body, contains the brain and sensory organs',
    function: 'Houses the brain which controls all body functions. Contains eyes, ears, nose, and mouth for sensory input.',
    commonConditions: ['Headaches', 'Migraines', 'Concussion', 'Sinusitis', 'TMJ disorders'],
    relatedStructures: ['Brain', 'Skull', 'Eyes', 'Ears', 'Nose', 'Mouth'],
    relatedModules: ['neurology', 'ophthalmology', 'ent'],
  },
  neck: {
    name: 'Neck',
    latinName: 'Collum',
    system: 'Musculoskeletal / Cardiovascular',
    location: 'Connects the head to the thorax, contains cervical spine (C1-C7)',
    function: 'Supports and moves the head, contains vital blood vessels (carotid arteries, jugular veins), airway (trachea), and esophagus.',
    commonConditions: ['Neck strain', 'Cervical disc herniation', 'Whiplash', 'Thyroid disorders'],
    relatedStructures: ['Cervical vertebrae', 'Thyroid gland', 'Trachea', 'Esophagus', 'Carotid arteries'],
    relatedModules: ['endocrinology', 'orthopedics'],
  },
  face: {
    name: 'Face',
    latinName: 'Facies',
    system: 'Nervous / Musculoskeletal / Sensory',
    location: 'Anterior aspect of the head, containing sensory organs and facial structures',
    function: 'Contains eyes for vision, nose for smell and breathing, mouth for eating and speaking, and facial muscles for expression.',
    commonConditions: ['Sinusitis', 'TMJ disorders', 'Facial nerve palsy', 'Acne', 'Rosacea'],
    relatedStructures: ['Eyes', 'Nose', 'Mouth', 'Sinuses', 'Facial muscles', 'Parotid gland'],
    relatedModules: ['ent', 'ophthalmology', 'neurology', 'dermatology'],
  },

  // TORSO
  chest: {
    name: 'Chest (Thorax)',
    latinName: 'Thorax',
    system: 'Cardiovascular / Respiratory',
    location: 'Upper trunk between the neck and abdomen, enclosed by the rib cage',
    function: 'Protects heart and lungs. The heart pumps blood throughout the body. Lungs exchange oxygen and carbon dioxide.',
    commonConditions: ['Heart disease', 'Angina', 'Pneumonia', 'Asthma', 'GERD', 'Costochondritis'],
    relatedStructures: ['Heart', 'Lungs', 'Ribs', 'Sternum', 'Diaphragm', 'Aorta'],
    relatedModules: ['cardiology', 'pulmonology'],
  },
  thoracicSpine: {
    name: 'Thoracic Spine',
    latinName: 'Columna thoracica',
    system: 'Skeletal / Nervous',
    location: 'Posterior mid-back, between cervical and lumbar spine (T1-T12)',
    function: 'Provides structural support, protects spinal cord, and serves as attachment for ribs.',
    commonConditions: ['Thoracic outlet syndrome', 'Scoliosis', 'Kyphosis', 'Disc herniation'],
    relatedStructures: ['Vertebrae T1-T12', 'Spinal cord', 'Intercostal nerves', 'Ribs'],
    relatedModules: ['orthopedics', 'neurology'],
  },
  lumbarSpine: {
    name: 'Lumbar Spine',
    latinName: 'Columna lumbalis',
    system: 'Skeletal / Muscular / Nervous',
    location: 'Posterior lower back (L1-L5), below thoracic spine',
    function: 'Bears body weight, allows flexion/extension/rotation of trunk. Most common source of back pain.',
    commonConditions: ['Low back pain', 'Lumbar disc herniation', 'Spinal stenosis', 'Sciatica'],
    relatedStructures: ['Vertebrae L1-L5', 'Cauda equina', 'Sciatic nerve', 'Psoas muscle'],
    relatedModules: ['orthopedics', 'neurology'],
  },
  abdomen: {
    name: 'Abdomen',
    latinName: 'Abdomen',
    system: 'Digestive / Urinary',
    location: 'Region between the thorax and pelvis, contains digestive organs',
    function: 'Contains organs for digestion (stomach, intestines, liver, pancreas), filtration (kidneys), and immune function (spleen).',
    commonConditions: ['Gastritis', 'IBS', 'Appendicitis', 'Kidney stones', 'Liver disease', 'Hernias'],
    relatedStructures: ['Stomach', 'Liver', 'Kidneys', 'Intestines', 'Pancreas', 'Spleen'],
    relatedModules: ['gastroenterology', 'endocrinology', 'nephrology'],
  },
  pelvis: {
    name: 'Pelvis',
    latinName: 'Pelvis',
    system: 'Skeletal / Reproductive / Urinary',
    location: 'Bony basin between abdomen and lower extremities',
    function: 'Supports abdominal organs, enables bipedal locomotion, contains reproductive and urinary organs.',
    commonConditions: ['Hip arthritis', 'Pelvic fracture', 'UTI', 'Prostatitis', 'Endometriosis'],
    relatedStructures: ['Hip bones', 'Sacrum', 'Coccyx', 'Bladder', 'Reproductive organs'],
    relatedModules: ['obgyn', 'urology', 'orthopedics'],
  },

  // Kebab-case aliases for BodyRegion type compatibility
  'thoracic-spine': {
    name: 'Thoracic Spine',
    latinName: 'Columna thoracica',
    system: 'Skeletal / Nervous',
    location: 'Posterior mid-back, between cervical and lumbar spine (T1-T12)',
    function: 'Provides structural support, protects spinal cord, and serves as attachment for ribs.',
    commonConditions: ['Thoracic outlet syndrome', 'Scoliosis', 'Kyphosis', 'Disc herniation'],
    relatedStructures: ['Vertebrae T1-T12', 'Spinal cord', 'Intercostal nerves', 'Ribs'],
    relatedModules: ['orthopedics', 'neurology'],
  },
  'lumbar-spine': {
    name: 'Lumbar Spine',
    latinName: 'Columna lumbalis',
    system: 'Skeletal / Muscular / Nervous',
    location: 'Posterior lower back (L1-L5), below thoracic spine',
    function: 'Bears body weight, allows flexion/extension/rotation of trunk. Most common source of back pain.',
    commonConditions: ['Low back pain', 'Lumbar disc herniation', 'Spinal stenosis', 'Sciatica'],
    relatedStructures: ['Vertebrae L1-L5', 'Cauda equina', 'Sciatic nerve', 'Psoas muscle'],
    relatedModules: ['orthopedics', 'neurology'],
  },
  'shoulder-left': {
    name: 'Left Shoulder',
    latinName: 'Articulatio glenohumeralis sinistra',
    system: 'Musculoskeletal',
    location: 'Left ball-and-socket joint connecting arm to torso',
    function: 'Provides wide range of motion for arm movement; connects upper extremity to axial skeleton.',
    commonConditions: ['Rotator cuff tear', 'Frozen shoulder', 'Bursitis', 'Arthritis'],
    relatedStructures: ['Humerus head', 'Scapula', 'Clavicle', 'Rotator cuff muscles'],
    relatedModules: ['orthopedics', 'sports-medicine'],
  },
  'shoulder-right': {
    name: 'Right Shoulder',
    latinName: 'Articulatio glenohumeralis dextra',
    system: 'Musculoskeletal',
    location: 'Right ball-and-socket joint connecting arm to torso',
    function: 'Provides wide range of motion for arm movement; connects upper extremity to axial skeleton.',
    commonConditions: ['Rotator cuff tear', 'Frozen shoulder', 'Bursitis', 'Arthritis'],
    relatedStructures: ['Humerus head', 'Scapula', 'Clavicle', 'Rotator cuff muscles'],
    relatedModules: ['orthopedics', 'sports-medicine'],
  },
  'arm-left': {
    name: 'Left Arm',
    latinName: 'Brachium sinistrum',
    system: 'Musculoskeletal',
    location: 'Left upper extremity, from shoulder to elbow',
    function: 'Allows reaching, grasping, and manipulation of objects. Contains major nerves and blood vessels.',
    commonConditions: ['Biceps tendonitis', 'Humerus fracture', 'Triceps strain'],
    relatedStructures: ['Humerus', 'Biceps', 'Triceps', 'Brachial artery', 'Median nerve'],
    relatedModules: ['orthopedics'],
  },
  'arm-right': {
    name: 'Right Arm',
    latinName: 'Brachium dextrum',
    system: 'Musculoskeletal',
    location: 'Right upper extremity, from shoulder to elbow',
    function: 'Allows reaching, grasping, and manipulation of objects. Contains major nerves and blood vessels.',
    commonConditions: ['Biceps tendonitis', 'Humerus fracture', 'Triceps strain'],
    relatedStructures: ['Humerus', 'Biceps', 'Triceps', 'Brachial artery', 'Median nerve'],
    relatedModules: ['orthopedics'],
  },
  'hand-left': {
    name: 'Left Hand',
    latinName: 'Manus sinistra',
    system: 'Musculoskeletal',
    location: 'Left hand, from wrist to fingertips',
    function: 'Complex structure with 27 bones for fine manipulation and grip.',
    commonConditions: ['Trigger finger', 'Arthritis', 'De Quervain\'s'],
    relatedStructures: ['Carpal bones', 'Metacarpals', 'Phalanges', 'Thenar muscles'],
    relatedModules: ['orthopedics', 'rheumatology'],
  },
  'hand-right': {
    name: 'Right Hand',
    latinName: 'Manus dextra',
    system: 'Musculoskeletal',
    location: 'Right hand, from wrist to fingertips',
    function: 'Complex structure with 27 bones for fine manipulation and grip.',
    commonConditions: ['Trigger finger', 'Arthritis', 'De Quervain\'s'],
    relatedStructures: ['Carpal bones', 'Metacarpals', 'Phalanges', 'Thenar muscles'],
    relatedModules: ['orthopedics', 'rheumatology'],
  },
  'hip-left': {
    name: 'Left Hip',
    latinName: 'Articulatio coxae sinistra',
    system: 'Musculoskeletal',
    location: 'Left ball-and-socket joint connecting leg to pelvis',
    function: 'Supports body weight and enables leg movement in multiple planes.',
    commonConditions: ['Hip osteoarthritis', 'Bursitis', 'Labral tear', 'Hip fracture'],
    relatedStructures: ['Femoral head', 'Acetabulum', 'Hip muscles', 'Sciatic nerve'],
    relatedModules: ['orthopedics'],
  },
  'hip-right': {
    name: 'Right Hip',
    latinName: 'Articulatio coxae dextra',
    system: 'Musculoskeletal',
    location: 'Right ball-and-socket joint connecting leg to pelvis',
    function: 'Supports body weight and enables leg movement in multiple planes.',
    commonConditions: ['Hip osteoarthritis', 'Bursitis', 'Labral tear', 'Hip fracture'],
    relatedStructures: ['Femoral head', 'Acetabulum', 'Hip muscles', 'Sciatic nerve'],
    relatedModules: ['orthopedics'],
  },
  'thigh-left': {
    name: 'Left Thigh',
    latinName: 'Femur sinistrum',
    system: 'Musculoskeletal',
    location: 'Left upper leg, from hip to knee',
    function: 'Contains the femur and major muscle groups (quadriceps, hamstrings) for locomotion.',
    commonConditions: ['Quadriceps strain', 'Hamstring tear', 'Compartment syndrome'],
    relatedStructures: ['Femur', 'Quadriceps', 'Hamstrings', 'Femoral artery'],
    relatedModules: ['orthopedics', 'sports-medicine'],
  },
  'thigh-right': {
    name: 'Right Thigh',
    latinName: 'Femur dextrum',
    system: 'Musculoskeletal',
    location: 'Right upper leg, from hip to knee',
    function: 'Contains the femur and major muscle groups (quadriceps, hamstrings) for locomotion.',
    commonConditions: ['Quadriceps strain', 'Hamstring tear', 'Compartment syndrome'],
    relatedStructures: ['Femur', 'Quadriceps', 'Hamstrings', 'Femoral artery'],
    relatedModules: ['orthopedics', 'sports-medicine'],
  },
  'knee-left': {
    name: 'Left Knee',
    latinName: 'Articulatio genus sinistra',
    system: 'Musculoskeletal',
    location: 'Left hinge joint connecting thigh to lower leg',
    function: 'Bears body weight and allows flexion/extension of the lower leg.',
    commonConditions: ['ACL tear', 'Meniscus tear', 'Osteoarthritis', 'Bursitis'],
    relatedStructures: ['Femoral condyles', 'Tibial plateau', 'Patella', 'Menisci', 'Ligaments'],
    relatedModules: ['orthopedics', 'sports-medicine'],
  },
  'knee-right': {
    name: 'Right Knee',
    latinName: 'Articulatio genus dextra',
    system: 'Musculoskeletal',
    location: 'Right hinge joint connecting thigh to lower leg',
    function: 'Bears body weight and allows flexion/extension of the lower leg.',
    commonConditions: ['ACL tear', 'Meniscus tear', 'Osteoarthritis', 'Bursitis'],
    relatedStructures: ['Femoral condyles', 'Tibial plateau', 'Patella', 'Menisci', 'Ligaments'],
    relatedModules: ['orthopedics', 'sports-medicine'],
  },
  'leg-left': {
    name: 'Left Lower Leg',
    latinName: 'Crus sinistrum',
    system: 'Musculoskeletal',
    location: 'Left lower leg, from knee to ankle',
    function: 'Contains tibia and fibula with calf muscles for locomotion and stability.',
    commonConditions: ['Shin splints', 'Stress fracture', 'Achilles tendonitis'],
    relatedStructures: ['Tibia', 'Fibula', 'Gastrocnemius', 'Soleus', 'Tibial nerve'],
    relatedModules: ['orthopedics'],
  },
  'leg-right': {
    name: 'Right Lower Leg',
    latinName: 'Crus dextrum',
    system: 'Musculoskeletal',
    location: 'Right lower leg, from knee to ankle',
    function: 'Contains tibia and fibula with calf muscles for locomotion and stability.',
    commonConditions: ['Shin splints', 'Stress fracture', 'Achilles tendonitis'],
    relatedStructures: ['Tibia', 'Fibula', 'Gastrocnemius', 'Soleus', 'Tibial nerve'],
    relatedModules: ['orthopedics'],
  },
  'ankle-left': {
    name: 'Left Ankle',
    latinName: 'Articulatio talocruralis sinistra',
    system: 'Musculoskeletal',
    location: 'Left hinge joint connecting lower leg to foot',
    function: 'Allows dorsiflexion and plantarflexion of the foot; critical for walking and balance.',
    commonConditions: ['Sprain', 'Achilles tendonitis', 'Arthritis', 'Fracture'],
    relatedStructures: ['Tibia', 'Fibula', 'Talus', 'Calcaneus'],
    relatedModules: ['orthopedics', 'sports-medicine'],
  },
  'ankle-right': {
    name: 'Right Ankle',
    latinName: 'Articulatio talocruralis dextra',
    system: 'Musculoskeletal',
    location: 'Right hinge joint connecting lower leg to foot',
    function: 'Allows dorsiflexion and plantarflexion of the foot; critical for walking and balance.',
    commonConditions: ['Sprain', 'Achilles tendonitis', 'Arthritis', 'Fracture'],
    relatedStructures: ['Tibia', 'Fibula', 'Talus', 'Calcaneus'],
    relatedModules: ['orthopedics', 'sports-medicine'],
  },
  'foot-left': {
    name: 'Left Foot',
    latinName: 'Pes sinister',
    system: 'Musculoskeletal',
    location: 'Left foot, from ankle to toes',
    function: 'Complex structure with 26 bones for weight-bearing and locomotion.',
    commonConditions: ['Plantar fasciitis', 'Ankle sprain', 'Achilles rupture', 'Bunions'],
    relatedStructures: ['Tarsals', 'Metatarsals', 'Phalanges', 'Plantar fascia'],
    relatedModules: ['orthopedics', 'sports-medicine'],
  },
  'foot-right': {
    name: 'Right Foot',
    latinName: 'Pes dexter',
    system: 'Musculoskeletal',
    location: 'Right foot, from ankle to toes',
    function: 'Complex structure with 26 bones for weight-bearing and locomotion.',
    commonConditions: ['Plantar fasciitis', 'Ankle sprain', 'Achilles rupture', 'Bunions'],
    relatedStructures: ['Tarsals', 'Metatarsals', 'Phalanges', 'Plantar fascia'],
    relatedModules: ['orthopedics', 'sports-medicine'],
  },
  // Additional regions from chief-complaints BodyRegion type
  'elbow-left': {
    name: 'Left Elbow',
    latinName: 'Articulatio cubiti sinistra',
    system: 'Musculoskeletal',
    location: 'Left hinge joint connecting upper arm to forearm',
    function: 'Allows flexion and extension of the forearm; critical for reaching and lifting movements.',
    commonConditions: ['Golfer\'s elbow (medial epicondylitis)', 'Bursitis', 'Arthritis'],
    relatedStructures: ['Humerus', 'Radius', 'Ulna', 'Biceps tendon', 'Lateral epicondyle'],
    relatedModules: ['orthopedics', 'sports-medicine'],
  },
  'elbow-right': {
    name: 'Right Elbow',
    latinName: 'Articulatio cubiti dextra',
    system: 'Musculoskeletal',
    location: 'Right hinge joint connecting upper arm to forearm',
    function: 'Allows flexion and extension of the forearm; critical for reaching and lifting movements.',
    commonConditions: ['Golfer\'s elbow (medial epicondylitis)', 'Bursitis', 'Arthritis'],
    relatedStructures: ['Humerus', 'Radius', 'Ulna', 'Biceps tendon', 'Lateral epicondyle'],
    relatedModules: ['orthopedics', 'sports-medicine'],
  },
  'forearm-left': {
    name: 'Left Forearm',
    latinName: 'Antebrachium sinistrum',
    system: 'Musculoskeletal',
    location: 'Left forearm, from elbow to wrist',
    function: 'Contains radius and ulna for wrist movement and rotation. Houses forearm flexor and extensor muscles.',
    commonConditions: ['Radial nerve palsy', 'Wrist fracture', 'Compartment syndrome'],
    relatedStructures: ['Radius', 'Ulna', 'Forearm flexors', 'Radial nerve'],
    relatedModules: ['orthopedics'],
  },
  'forearm-right': {
    name: 'Right Forearm',
    latinName: 'Antebrachium dextrum',
    system: 'Musculoskeletal',
    location: 'Right forearm, from elbow to wrist',
    function: 'Contains radius and ulna for wrist movement and rotation. Houses forearm flexor and extensor muscles.',
    commonConditions: ['Radial nerve palsy', 'Wrist fracture', 'Compartment syndrome'],
    relatedStructures: ['Radius', 'Ulna', 'Forearm flexors', 'Radial nerve'],
    relatedModules: ['orthopedics'],
  },
  'wrist-left': {
    name: 'Left Wrist',
    latinName: 'Articulatio radiocarpalis sinistra',
    system: 'Musculoskeletal',
    location: 'Left complex joint connecting forearm to hand',
    function: 'Allows flexion, extension, and radial/ulnar deviation of the hand.',
    commonConditions: ['Sprain', 'Arthritis', 'Fracture', 'De Quervain\'s'],
    relatedStructures: ['Radius', 'Ulna', 'Carpal bones', 'Transverse ligament', 'Median nerve'],
    relatedModules: ['orthopedics', 'rheumatology'],
  },
  'wrist-right': {
    name: 'Right Wrist',
    latinName: 'Articulatio radiocarpalis dextra',
    system: 'Musculoskeletal',
    location: 'Right complex joint connecting forearm to hand',
    function: 'Allows flexion, extension, and radial/ulnar deviation of the hand.',
    commonConditions: ['Sprain', 'Arthritis', 'Fracture', 'De Quervain\'s'],
    relatedStructures: ['Radius', 'Ulna', 'Carpal bones', 'Transverse ligament', 'Median nerve'],
    relatedModules: ['orthopedics', 'rheumatology'],
  },
  'abdomen-upper': {
    name: 'Upper Abdomen',
    latinName: 'Abdomen superius',
    system: 'Digestive / Hepatobiliary',
    location: 'Upper portion of abdomen, containing stomach, liver, gallbladder',
    function: 'Contains organs for initial digestion and nutrient processing.',
    commonConditions: ['Gastritis', 'GERD', 'Gallstones', 'Hepatitis', 'Pancreatitis'],
    relatedStructures: ['Stomach', 'Liver', 'Gallbladder', 'Pancreas', 'Duodenum'],
    relatedModules: ['gastroenterology', 'hepatology'],
  },
  'abdomen-lower': {
    name: 'Lower Abdomen',
    latinName: 'Abdomen inferius',
    system: 'Digestive / Urinary / Reproductive',
    location: 'Lower portion of abdomen, containing intestines, bladder, reproductive organs',
    function: 'Contains organs for digestion completion, waste elimination, and reproduction.',
    commonConditions: ['Appendicitis', 'Diverticulitis', 'IBS', 'UTI', 'Kidney stones'],
    relatedStructures: ['Small intestine', 'Colon', 'Appendix', 'Bladder', 'Uterus/Prostate'],
    relatedModules: ['gastroenterology', 'urology', 'obgyn'],
  },
  'back-upper': {
    name: 'Upper Back',
    latinName: 'Dorsum superius',
    system: 'Musculoskeletal',
    location: 'Upper posterior thoracic region',
    function: 'Supports posture and protects thoracic spine and organs.',
    commonConditions: ['Muscle strain', 'Thoracic spine dysfunction', 'Postural pain'],
    relatedStructures: ['Thoracic vertebrae', 'Rhomboids', 'Trapezius', 'Ribs'],
    relatedModules: ['orthopedics', 'physical-therapy'],
  },
  'back-lower': {
    name: 'Lower Back',
    latinName: 'Dorsum inferius',
    system: 'Musculoskeletal / Nervous',
    location: 'Lower posterior lumbar region',
    function: 'Supports body weight and allows trunk movement.',
    commonConditions: ['Low back pain', 'Muscle strain', 'Sciatica', 'Herniated disc'],
    relatedStructures: ['Lumbar vertebrae', 'Paraspinal muscles', 'Sciatic nerve'],
    relatedModules: ['orthopedics', 'neurology', 'physical-therapy'],
  },

  // UPPER EXTREMITIES - SHOULDER
  leftShoulder: {
    name: 'Left Shoulder',
    latinName: 'Articulatio glenohumeralis sinistra',
    system: 'Musculoskeletal',
    location: 'Left ball-and-socket joint connecting arm to torso',
    function: 'Provides wide range of motion for arm movement; connects upper extremity to axial skeleton.',
    commonConditions: ['Rotator cuff tear', 'Frozen shoulder', 'Bursitis', 'Arthritis'],
    relatedStructures: ['Humerus head', 'Scapula', 'Clavicle', 'Rotator cuff muscles'],
    relatedModules: ['orthopedics', 'sports-medicine'],
  },
  rightShoulder: {
    name: 'Right Shoulder',
    latinName: 'Articulatio glenohumeralis dextra',
    system: 'Musculoskeletal',
    location: 'Right ball-and-socket joint connecting arm to torso',
    function: 'Provides wide range of motion for arm movement; connects upper extremity to axial skeleton.',
    commonConditions: ['Rotator cuff tear', 'Frozen shoulder', 'Bursitis', 'Arthritis'],
    relatedStructures: ['Humerus head', 'Scapula', 'Clavicle', 'Rotator cuff muscles'],
    relatedModules: ['orthopedics', 'sports-medicine'],
  },

  // UPPER EXTREMITIES - ARM
  leftArm: {
    name: 'Left Arm',
    latinName: 'Brachium sinistrum',
    system: 'Musculoskeletal',
    location: 'Left upper extremity, from shoulder to elbow',
    function: 'Allows reaching, grasping, and manipulation of objects. Contains major nerves and blood vessels.',
    commonConditions: ['Biceps tendonitis', 'Humerus fracture', 'Triceps strain'],
    relatedStructures: ['Humerus', 'Biceps', 'Triceps', 'Brachial artery', 'Median nerve'],
    relatedModules: ['orthopedics'],
  },
  rightArm: {
    name: 'Right Arm',
    latinName: 'Brachium dextrum',
    system: 'Musculoskeletal',
    location: 'Right upper extremity, from shoulder to elbow',
    function: 'Allows reaching, grasping, and manipulation of objects. Contains major nerves and blood vessels.',
    commonConditions: ['Biceps tendonitis', 'Humerus fracture', 'Triceps strain'],
    relatedStructures: ['Humerus', 'Biceps', 'Triceps', 'Brachial artery', 'Median nerve'],
    relatedModules: ['orthopedics'],
  },

  // UPPER EXTREMITIES - ELBOW
  leftElbow: {
    name: 'Left Elbow',
    latinName: 'Articulatio cubiti sinistra',
    system: 'Musculoskeletal',
    location: 'Left hinge joint connecting upper arm to forearm',
    function: 'Allows flexion and extension of the forearm; critical for reaching and lifting movements.',
    commonConditions: ['Golfer\'s elbow', 'Bursitis', 'Arthritis'],
    relatedStructures: ['Humerus', 'Radius', 'Ulna', 'Biceps tendon'],
    relatedModules: ['orthopedics', 'sports-medicine'],
  },
  rightElbow: {
    name: 'Right Elbow',
    latinName: 'Articulatio cubiti dextra',
    system: 'Musculoskeletal',
    location: 'Right hinge joint connecting upper arm to forearm',
    function: 'Allows flexion and extension of the forearm; critical for reaching and lifting movements.',
    commonConditions: ['Golfer\'s elbow', 'Bursitis', 'Arthritis'],
    relatedStructures: ['Humerus', 'Radius', 'Ulna', 'Biceps tendon'],
    relatedModules: ['orthopedics', 'sports-medicine'],
  },

  // UPPER EXTREMITIES - FOREARM
  leftForearm: {
    name: 'Left Forearm',
    latinName: 'Antebrachium sinistrum',
    system: 'Musculoskeletal',
    location: 'Left forearm, from elbow to wrist',
    function: 'Contains radius and ulna for wrist movement and rotation. Houses forearm flexor and extensor muscles.',
    commonConditions: ['Radial nerve palsy', 'Wrist fracture', 'Compartment syndrome'],
    relatedStructures: ['Radius', 'Ulna', 'Forearm flexors', 'Radial nerve'],
    relatedModules: ['orthopedics'],
  },
  rightForearm: {
    name: 'Right Forearm',
    latinName: 'Antebrachium dextrum',
    system: 'Musculoskeletal',
    location: 'Right forearm, from elbow to wrist',
    function: 'Contains radius and ulna for wrist movement and rotation. Houses forearm flexor and extensor muscles.',
    commonConditions: ['Radial nerve palsy', 'Wrist fracture', 'Compartment syndrome'],
    relatedStructures: ['Radius', 'Ulna', 'Forearm flexors', 'Radial nerve'],
    relatedModules: ['orthopedics'],
  },

  // UPPER EXTREMITIES - WRIST
  leftWrist: {
    name: 'Left Wrist',
    latinName: 'Articulatio radiocarpalis sinistra',
    system: 'Musculoskeletal',
    location: 'Left complex joint connecting forearm to hand',
    function: 'Allows flexion, extension, and radial/ulnar deviation of the hand.',
    commonConditions: ['Sprain', 'Arthritis', 'Fracture'],
    relatedStructures: ['Radius', 'Ulna', 'Carpal bones', 'Transverse ligament'],
    relatedModules: ['orthopedics', 'rheumatology'],
  },
  rightWrist: {
    name: 'Right Wrist',
    latinName: 'Articulatio radiocarpalis dextra',
    system: 'Musculoskeletal',
    location: 'Right complex joint connecting forearm to hand',
    function: 'Allows flexion, extension, and radial/ulnar deviation of the hand.',
    commonConditions: ['Sprain', 'Arthritis', 'Fracture'],
    relatedStructures: ['Radius', 'Ulna', 'Carpal bones', 'Transverse ligament'],
    relatedModules: ['orthopedics', 'rheumatology'],
  },

  // UPPER EXTREMITIES - HAND
  leftHand: {
    name: 'Left Hand',
    latinName: 'Manus sinistra',
    system: 'Musculoskeletal',
    location: 'Left hand, from wrist to fingertips',
    function: 'Complex structure with 27 bones for fine manipulation and grip.',
    commonConditions: ['Trigger finger', 'Arthritis', 'De Quervain\'s'],
    relatedStructures: ['Carpal bones', 'Metacarpals', 'Phalanges', 'Thenar muscles'],
    relatedModules: ['orthopedics', 'rheumatology'],
  },
  rightHand: {
    name: 'Right Hand',
    latinName: 'Manus dextra',
    system: 'Musculoskeletal',
    location: 'Right hand, from wrist to fingertips',
    function: 'Complex structure with 27 bones for fine manipulation and grip.',
    commonConditions: ['Trigger finger', 'Arthritis', 'De Quervain\'s'],
    relatedStructures: ['Carpal bones', 'Metacarpals', 'Phalanges', 'Thenar muscles'],
    relatedModules: ['orthopedics', 'rheumatology'],
  },

  // LOWER EXTREMITIES - HIP
  leftHip: {
    name: 'Left Hip',
    latinName: 'Articulatio coxae sinistra',
    system: 'Musculoskeletal',
    location: 'Left ball-and-socket joint connecting leg to pelvis',
    function: 'Supports body weight and enables leg movement in multiple planes.',
    commonConditions: ['Hip osteoarthritis', 'Bursitis', 'Labral tear', 'Hip fracture'],
    relatedStructures: ['Femoral head', 'Acetabulum', 'Hip muscles', 'Sciatic nerve'],
    relatedModules: ['orthopedics'],
  },
  rightHip: {
    name: 'Right Hip',
    latinName: 'Articulatio coxae dextra',
    system: 'Musculoskeletal',
    location: 'Right ball-and-socket joint connecting leg to pelvis',
    function: 'Supports body weight and enables leg movement in multiple planes.',
    commonConditions: ['Hip osteoarthritis', 'Bursitis', 'Labral tear', 'Hip fracture'],
    relatedStructures: ['Femoral head', 'Acetabulum', 'Hip muscles', 'Sciatic nerve'],
    relatedModules: ['orthopedics'],
  },

  // LOWER EXTREMITIES - THIGH
  leftThigh: {
    name: 'Left Thigh',
    latinName: 'Femur sinistrum',
    system: 'Musculoskeletal',
    location: 'Left upper leg, from hip to knee',
    function: 'Contains the femur and major muscle groups (quadriceps, hamstrings) for locomotion.',
    commonConditions: ['Quadriceps strain', 'Hamstring tear', 'Compartment syndrome'],
    relatedStructures: ['Femur', 'Quadriceps', 'Hamstrings', 'Femoral artery'],
    relatedModules: ['orthopedics', 'sports-medicine'],
  },
  rightThigh: {
    name: 'Right Thigh',
    latinName: 'Femur dextrum',
    system: 'Musculoskeletal',
    location: 'Right upper leg, from hip to knee',
    function: 'Contains the femur and major muscle groups (quadriceps, hamstrings) for locomotion.',
    commonConditions: ['Quadriceps strain', 'Hamstring tear', 'Compartment syndrome'],
    relatedStructures: ['Femur', 'Quadriceps', 'Hamstrings', 'Femoral artery'],
    relatedModules: ['orthopedics', 'sports-medicine'],
  },

  // LOWER EXTREMITIES - KNEE
  leftKnee: {
    name: 'Left Knee',
    latinName: 'Articulatio genus sinistra',
    system: 'Musculoskeletal',
    location: 'Left hinge joint connecting thigh to lower leg',
    function: 'Bears body weight and allows flexion/extension of the lower leg.',
    commonConditions: ['ACL tear', 'Meniscus tear', 'Osteoarthritis', 'Bursitis'],
    relatedStructures: ['Femoral condyles', 'Tibial plateau', 'Patella', 'Menisci', 'Ligaments'],
    relatedModules: ['orthopedics', 'sports-medicine'],
  },
  rightKnee: {
    name: 'Right Knee',
    latinName: 'Articulatio genus dextra',
    system: 'Musculoskeletal',
    location: 'Right hinge joint connecting thigh to lower leg',
    function: 'Bears body weight and allows flexion/extension of the lower leg.',
    commonConditions: ['ACL tear', 'Meniscus tear', 'Osteoarthritis', 'Bursitis'],
    relatedStructures: ['Femoral condyles', 'Tibial plateau', 'Patella', 'Menisci', 'Ligaments'],
    relatedModules: ['orthopedics', 'sports-medicine'],
  },

  // LOWER EXTREMITIES - LEG
  leftLeg: {
    name: 'Left Lower Leg',
    latinName: 'Crus sinistrum',
    system: 'Musculoskeletal',
    location: 'Left lower leg, from knee to ankle',
    function: 'Contains tibia and fibula with calf muscles for locomotion and stability.',
    commonConditions: ['Shin splints', 'Stress fracture', 'Achilles tendonitis'],
    relatedStructures: ['Tibia', 'Fibula', 'Gastrocnemius', 'Soleus', 'Tibial nerve'],
    relatedModules: ['orthopedics'],
  },
  rightLeg: {
    name: 'Right Lower Leg',
    latinName: 'Crus dextrum',
    system: 'Musculoskeletal',
    location: 'Right lower leg, from knee to ankle',
    function: 'Contains tibia and fibula with calf muscles for locomotion and stability.',
    commonConditions: ['Shin splints', 'Stress fracture', 'Achilles tendonitis'],
    relatedStructures: ['Tibia', 'Fibula', 'Gastrocnemius', 'Soleus', 'Tibial nerve'],
    relatedModules: ['orthopedics'],
  },

  // LOWER EXTREMITIES - ANKLE
  leftAnkle: {
    name: 'Left Ankle',
    latinName: 'Articulatio talocruralis sinistra',
    system: 'Musculoskeletal',
    location: 'Left hinge joint connecting lower leg to foot',
    function: 'Allows dorsiflexion and plantarflexion of the foot; critical for walking and balance.',
    commonConditions: ['Sprain', 'Achilles tendonitis', 'Arthritis', 'Fracture'],
    relatedStructures: ['Tibia', 'Fibula', 'Talus', 'Calcaneus'],
    relatedModules: ['orthopedics', 'sports-medicine'],
  },
  rightAnkle: {
    name: 'Right Ankle',
    latinName: 'Articulatio talocruralis dextra',
    system: 'Musculoskeletal',
    location: 'Right hinge joint connecting lower leg to foot',
    function: 'Allows dorsiflexion and plantarflexion of the foot; critical for walking and balance.',
    commonConditions: ['Sprain', 'Achilles tendonitis', 'Arthritis', 'Fracture'],
    relatedStructures: ['Tibia', 'Fibula', 'Talus', 'Calcaneus'],
    relatedModules: ['orthopedics', 'sports-medicine'],
  },

  // LOWER EXTREMITIES - FOOT
  leftFoot: {
    name: 'Left Foot',
    latinName: 'Pes sinister',
    system: 'Musculoskeletal',
    location: 'Left foot, from ankle to toes',
    function: 'Complex structure with 26 bones for weight-bearing and locomotion.',
    commonConditions: ['Plantar fasciitis', 'Ankle sprain', 'Achilles rupture', 'Bunions'],
    relatedStructures: ['Tarsals', 'Metatarsals', 'Phalanges', 'Plantar fascia'],
    relatedModules: ['orthopedics', 'sports-medicine'],
  },
  rightFoot: {
    name: 'Right Foot',
    latinName: 'Pes dexter',
    system: 'Musculoskeletal',
    location: 'Right foot, from ankle to toes',
    function: 'Complex structure with 26 bones for weight-bearing and locomotion.',
    commonConditions: ['Plantar fasciitis', 'Ankle sprain', 'Achilles rupture', 'Bunions'],
    relatedStructures: ['Tarsals', 'Metatarsals', 'Phalanges', 'Plantar fascia'],
    relatedModules: ['orthopedics', 'sports-medicine'],
  },
};

/**
 * Get educational content for a structure by ID with image references
 */
export function buildStructureContext(structureId: string): StructureEducationalContent | null {
  const data = STRUCTURE_DATA[structureId];
  if (!data) return null;

  // Get related images for this structure
  const images = getImagesForStructure(structureId);

  return {
    ...data,
    imageReferences: images,
  };
}

/**
 * Get relevant images for a body structure
 */
export function getImagesForStructure(structureId: string): ImageMetadata[] {
  const structure = STRUCTURE_DATA[structureId];
  if (!structure) return [];

  const images: ImageMetadata[] = [];

  // Map structure IDs to body regions
  const regionMap: Record<string, string> = {
    head: 'head', face: 'head', neck: 'neck', chest: 'chest', abdomen: 'abdomen',
    pelvis: 'pelvis', thoracicSpine: 'back', lumbarSpine: 'back',
    leftShoulder: 'shoulder', rightShoulder: 'shoulder',
    leftArm: 'arm', rightArm: 'arm', leftElbow: 'elbow', rightElbow: 'elbow',
    leftForearm: 'forearm', rightForearm: 'forearm',
    leftWrist: 'wrist', rightWrist: 'wrist', leftHand: 'hand', rightHand: 'hand',
    leftHip: 'hip', rightHip: 'hip', leftThigh: 'thigh', rightThigh: 'thigh',
    leftKnee: 'knee', rightKnee: 'knee', leftLeg: 'leg', rightLeg: 'leg',
    leftAnkle: 'ankle', rightAnkle: 'ankle', leftFoot: 'foot', rightFoot: 'foot',
    'thoracic-spine': 'back', 'lumbar-spine': 'back',
    'shoulder-left': 'shoulder', 'shoulder-right': 'shoulder',
    'arm-left': 'arm', 'arm-right': 'arm',
    'elbow-left': 'elbow', 'elbow-right': 'elbow',
    'forearm-left': 'forearm', 'forearm-right': 'forearm',
    'wrist-left': 'wrist', 'wrist-right': 'wrist',
    'hand-left': 'hand', 'hand-right': 'hand',
    'hip-left': 'hip', 'hip-right': 'hip',
    'thigh-left': 'thigh', 'thigh-right': 'thigh',
    'knee-left': 'knee', 'knee-right': 'knee',
    'leg-left': 'leg', 'leg-right': 'leg',
    'ankle-left': 'ankle', 'ankle-right': 'ankle',
    'foot-left': 'foot', 'foot-right': 'foot',
    'abdomen-upper': 'abdomen', 'abdomen-lower': 'abdomen',
    'back-upper': 'back', 'back-lower': 'back',
  };

  // Get images by region
  const regionKey = regionMap[structureId];
  if (regionKey) {
    images.push(...getImagesByBodyRegion(regionKey as any));
  }

  // Get images by system
  const systemMap: Record<string, string> = {
    'Central Nervous System': 'nervous',
    'Musculoskeletal': 'musculoskeletal',
    'Cardiovascular / Respiratory': 'cardiovascular',
    'Cardiovascular / Respiratory / Musculoskeletal': 'cardiovascular',
    'Digestive / Urinary': 'digestive',
    'Digestive / Urinary / Reproductive': 'digestive',
    'Digestive / Hepatobiliary': 'digestive',
    'Digestive / Urinary / Reproductive': 'urinary',
    'Skeletal / Reproductive / Urinary': 'reproductive',
    'Skeletal / Muscular / Nervous': 'nervous',
    'Skeletal / Nervous': 'nervous',
    'Musculoskeletal / Cardiovascular': 'cardiovascular',
  };

  const systemKey = systemMap[structure.system];
  if (systemKey) {
    images.push(...getImagesByBodySystem(systemKey as any));
  }

  // Also try to find images by common conditions
  structure.commonConditions.forEach(condition => {
    // This would need a condition-based lookup function in imageRegistry
    // For now, we'll rely on region and system matching
  });

  // Remove duplicates and limit
  return [...new Map(images.map(img => [img.id, img])).values()].slice(0, 10);
}

/**
 * Build a system prompt that combines structure education with health context
 * Includes available image references for visual learning
 */
export function buildAnatomySystemPrompt(
  structureId: string,
  structureName: string,
  dashboardData: DashboardData | null
): string {
  const structureInfo = STRUCTURE_DATA[structureId];
  const imageReferences = getImagesForStructure(structureId);

  let structureContent = '';
  if (structureInfo) {
    structureContent = `
Name: ${structureInfo.name}
${structureInfo.latinName ? `Latin Name: ${structureInfo.latinName}` : ''}
Body System: ${structureInfo.system}
Location: ${structureInfo.location}
Function: ${structureInfo.function}
Common Conditions: ${structureInfo.commonConditions.join(', ')}
Related Structures: ${structureInfo.relatedStructures.join(', ')}
`.trim();
  } else {
    structureContent = `Name: ${structureName}\nNo detailed educational content available for this structure.`;
  }

  // Add image references section
  let imageContext = '';
  if (imageReferences.length > 0) {
    imageContext = `
=== AVAILABLE VISUAL REFERENCES ===
${imageReferences.slice(0, 5).map(img => 
  `- ${img.title} (${img.category}): ${img.path}`
).join('\n')}

You can reference these images when explaining anatomy or pathology concepts.
`;
  }

  let healthContext = '';
  if (dashboardData) {
    const parts: string[] = [];

    if (dashboardData.activeConditions.length > 0) {
      parts.push(`Conditions: ${dashboardData.activeConditions.map(c => c.name).join(', ')}`);
    }

    if (dashboardData.currentMedications.length > 0) {
      parts.push(`Medications: ${dashboardData.currentMedications.map(m => `${m.name}${m.dosage ? ` ${m.dosage}` : ''}`).join(', ')}`);
    }

    // Get symptoms that might relate to this structure
    const relevantSymptoms = dashboardData.recentSymptoms.filter(s => {
      if (!s.location) return false;
      const loc = s.location.toLowerCase();
      const structId = structureId.toLowerCase();
      return loc.includes(structId) || structId.includes(loc);
    });

    if (relevantSymptoms.length > 0) {
      parts.push(`Symptoms in this area: ${relevantSymptoms.map(s => s.description).join('; ')}`);
    }

    if (parts.length > 0) {
      healthContext = parts.join('\n');
    }
  }

  return `You are an anatomy education assistant. The user is viewing the ${structureName} in a 3D anatomy viewer.

IMPORTANT: You provide educational information only, not medical advice. Always encourage consulting healthcare professionals for medical decisions.

=== STRUCTURE INFORMATION ===
${structureContent}

${imageContext}

${healthContext ? `=== USER HEALTH CONTEXT ===\n${healthContext}` : ''}

Guidelines:
- Explain anatomy concepts clearly at an accessible level
- When visual references are available, you can describe what the user would see in those images
- When the user has relevant health conditions, explain how they might relate to this structure
- Be educational and informative
- Never diagnose or prescribe treatments
- Keep responses concise but helpful`;
}

/**
 * Generate suggested questions based on the structure and user's health
 */
export function generateSuggestedQuestions(
  structureId: string,
  structureName: string,
  dashboardData: DashboardData | null
): string[] {
  const questions: string[] = [];
  const structureInfo = STRUCTURE_DATA[structureId];

  // Always include basic questions
  questions.push(`What is the function of the ${structureName}?`);
  questions.push(`What are common injuries to the ${structureName}?`);

  // Add structure-specific questions
  if (structureInfo) {
    if (structureInfo.commonConditions.length > 0) {
      questions.push(`Tell me about ${structureInfo.commonConditions[0]}`);
    }
  }

  // Add health-related questions if we have dashboard data
  if (dashboardData) {
    // Check for conditions that might relate to this structure
    const relevantConditions = findRelevantConditions(structureId, dashboardData.activeConditions);
    if (relevantConditions.length > 0) {
      questions.push(`How does ${relevantConditions[0].name} affect the ${structureName}?`);
    }

    // Check for symptoms in this area
    const relevantSymptoms = dashboardData.recentSymptoms.filter(s => {
      if (!s.location) return false;
      return s.location.toLowerCase().includes(structureId.toLowerCase());
    });

    if (relevantSymptoms.length > 0) {
      questions.push(`Could my ${relevantSymptoms[0].description.toLowerCase()} be related to the ${structureName}?`);
    }
  }

  return questions.slice(0, 5); // Max 5 questions
}

/**
 * Find conditions that might be relevant to a structure
 */
function findRelevantConditions(
  structureId: string,
  conditions: Array<{ name: string; status: string }>
): Array<{ name: string; status: string }> {
  const structureInfo = STRUCTURE_DATA[structureId];
  if (!structureInfo) return [];

  const systemKeywords: Record<string, string[]> = {
    'Central Nervous System': ['migraine', 'headache', 'neurological', 'brain'],
    'Cardiovascular / Respiratory': ['heart', 'cardiac', 'hypertension', 'asthma', 'copd', 'respiratory'],
    'Digestive / Urinary': ['diabetes', 'gastric', 'kidney', 'liver', 'ibs', 'gerd'],
    'Musculoskeletal': ['arthritis', 'joint', 'bone', 'muscle', 'fracture'],
  };

  const keywords = systemKeywords[structureInfo.system] || [];

  return conditions.filter(condition => {
    const conditionLower = condition.name.toLowerCase();
    return keywords.some(keyword => conditionLower.includes(keyword));
  });
}

export type { StructureEducationalContent, DashboardData };

// Re-export image-related types and functions from imageRegistry
export { getImagesByBodyRegion, getImagesByBodySystem } from '../content/imageRegistry.js';
export type { ImageMetadata } from '../content/imageRegistry.js';
