/**
 * Anatomy Context Builder Utility
 *
 * Functions to build AI prompts with anatomical structure + health context.
 */

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
}

// Educational content for body regions (expandable with more data)
const STRUCTURE_DATA: Record<string, StructureEducationalContent> = {
  head: {
    name: 'Head',
    latinName: 'Caput',
    system: 'Central Nervous System',
    location: 'Superior aspect of the body, contains the brain and sensory organs',
    function: 'Houses the brain which controls all body functions. Contains eyes, ears, nose, and mouth for sensory input.',
    commonConditions: ['Headaches', 'Migraines', 'Concussion', 'Sinusitis', 'TMJ disorders'],
    relatedStructures: ['Brain', 'Skull', 'Eyes', 'Ears', 'Nose', 'Mouth'],
  },
  neck: {
    name: 'Neck',
    latinName: 'Collum',
    system: 'Musculoskeletal / Cardiovascular',
    location: 'Connects the head to the thorax, contains cervical spine (C1-C7)',
    function: 'Supports and moves the head, contains vital blood vessels (carotid arteries, jugular veins), airway (trachea), and esophagus.',
    commonConditions: ['Neck strain', 'Cervical disc herniation', 'Whiplash', 'Thyroid disorders'],
    relatedStructures: ['Cervical vertebrae', 'Thyroid gland', 'Trachea', 'Esophagus', 'Carotid arteries'],
  },
  chest: {
    name: 'Chest (Thorax)',
    latinName: 'Thorax',
    system: 'Cardiovascular / Respiratory',
    location: 'Upper trunk between the neck and abdomen, enclosed by the rib cage',
    function: 'Protects heart and lungs. The heart pumps blood throughout the body. Lungs exchange oxygen and carbon dioxide.',
    commonConditions: ['Heart disease', 'Angina', 'Pneumonia', 'Asthma', 'GERD', 'Costochondritis'],
    relatedStructures: ['Heart', 'Lungs', 'Ribs', 'Sternum', 'Diaphragm', 'Aorta'],
  },
  thoracicSpine: {
    name: 'Thoracic Spine',
    latinName: 'Columna thoracica',
    system: 'Skeletal / Nervous',
    location: 'Posterior mid-back, between cervical and lumbar spine (T1-T12)',
    function: 'Provides structural support, protects spinal cord, and serves as attachment for ribs.',
    commonConditions: ['Thoracic outlet syndrome', 'Scoliosis', 'Kyphosis', 'Disc herniation'],
    relatedStructures: ['Vertebrae T1-T12', 'Spinal cord', 'Intercostal nerves', 'Ribs'],
  },
  lumbarSpine: {
    name: 'Lumbar Spine',
    latinName: 'Columna lumbalis',
    system: 'Skeletal / Muscular / Nervous',
    location: 'Posterior lower back (L1-L5), below thoracic spine',
    function: 'Bears body weight, allows flexion/extension/rotation of trunk. Most common source of back pain.',
    commonConditions: ['Low back pain', 'Lumbar disc herniation', 'Spinal stenosis', 'Sciatica'],
    relatedStructures: ['Vertebrae L1-L5', 'Cauda equina', 'Sciatic nerve', 'Psoas muscle'],
  },
  abdomen: {
    name: 'Abdomen',
    latinName: 'Abdomen',
    system: 'Digestive / Urinary',
    location: 'Region between the thorax and pelvis, contains digestive organs',
    function: 'Contains organs for digestion (stomach, intestines, liver, pancreas), filtration (kidneys), and immune function (spleen).',
    commonConditions: ['Gastritis', 'IBS', 'Appendicitis', 'Kidney stones', 'Liver disease', 'Hernias'],
    relatedStructures: ['Stomach', 'Liver', 'Kidneys', 'Intestines', 'Pancreas', 'Spleen'],
  },
  pelvis: {
    name: 'Pelvis',
    latinName: 'Pelvis',
    system: 'Skeletal / Reproductive / Urinary',
    location: 'Bony basin between abdomen and lower extremities',
    function: 'Supports abdominal organs, enables bipedal locomotion, contains reproductive and urinary organs.',
    commonConditions: ['Hip arthritis', 'Pelvic fracture', 'UTI', 'Prostatitis', 'Endometriosis'],
    relatedStructures: ['Hip bones', 'Sacrum', 'Coccyx', 'Bladder', 'Reproductive organs'],
  },
  leftArm: {
    name: 'Left Arm',
    latinName: 'Brachium sinister',
    system: 'Musculoskeletal',
    location: 'Left upper extremity, from shoulder to elbow',
    function: 'Allows reaching, grasping, and manipulation of objects. Contains major nerves and blood vessels.',
    commonConditions: ['Biceps tendonitis', 'Humerus fracture', 'Triceps strain'],
    relatedStructures: ['Humerus', 'Biceps', 'Triceps', 'Brachial artery', 'Median nerve'],
  },
  rightArm: {
    name: 'Right Arm',
    latinName: 'Brachium dexter',
    system: 'Musculoskeletal',
    location: 'Right upper extremity, from shoulder to elbow',
    function: 'Allows reaching, grasping, and manipulation of objects. Contains major nerves and blood vessels.',
    commonConditions: ['Biceps tendonitis', 'Humerus fracture', 'Triceps strain'],
    relatedStructures: ['Humerus', 'Biceps', 'Triceps', 'Brachial artery', 'Median nerve'],
  },
  leftForearm: {
    name: 'Left Forearm',
    latinName: 'Antebrachium sinistrum',
    system: 'Musculoskeletal',
    location: 'Left forearm, from elbow to wrist',
    function: 'Contains radius and ulna for wrist movement and rotation. Houses forearm flexor and extensor muscles.',
    commonConditions: ['Radial nerve palsy', 'Wrist fracture', 'Compartment syndrome'],
    relatedStructures: ['Radius', 'Ulna', 'Forearm flexors', 'Radial nerve'],
  },
  rightForearm: {
    name: 'Right Forearm',
    latinName: 'Antebrachium dextrum',
    system: 'Musculoskeletal',
    location: 'Right forearm, from elbow to wrist',
    function: 'Contains radius and ulna for wrist movement and rotation. Houses forearm flexor and extensor muscles.',
    commonConditions: ['Radial nerve palsy', 'Wrist fracture', 'Compartment syndrome'],
    relatedStructures: ['Radius', 'Ulna', 'Forearm flexors', 'Radial nerve'],
  },
  leftHand: {
    name: 'Left Hand',
    latinName: 'Manus sinistra',
    system: 'Musculoskeletal',
    location: 'Left hand, from wrist to fingertips',
    function: 'Complex structure with 27 bones for fine manipulation and grip.',
    commonConditions: ['Carpal tunnel syndrome', 'Trigger finger', 'Arthritis', 'De Quervain\'s'],
    relatedStructures: ['Carpal bones', 'Metacarpals', 'Phalanges', 'Thenar muscles'],
  },
  rightHand: {
    name: 'Right Hand',
    latinName: 'Manus dextra',
    system: 'Musculoskeletal',
    location: 'Right hand, from wrist to fingertips',
    function: 'Complex structure with 27 bones for fine manipulation and grip.',
    commonConditions: ['Carpal tunnel syndrome', 'Trigger finger', 'Arthritis', 'De Quervain\'s'],
    relatedStructures: ['Carpal bones', 'Metacarpals', 'Phalanges', 'Thenar muscles'],
  },
  leftThigh: {
    name: 'Left Thigh',
    latinName: 'Femur sinistrum',
    system: 'Musculoskeletal',
    location: 'Left upper leg, from hip to knee',
    function: 'Contains the femur and major muscle groups (quadriceps, hamstrings) for locomotion.',
    commonConditions: ['Quadriceps strain', 'Hamstring tear', 'Compartment syndrome'],
    relatedStructures: ['Femur', 'Quadriceps', 'Hamstrings', 'Femoral artery'],
  },
  rightThigh: {
    name: 'Right Thigh',
    latinName: 'Femur dextrum',
    system: 'Musculoskeletal',
    location: 'Right upper leg, from hip to knee',
    function: 'Contains the femur and major muscle groups (quadriceps, hamstrings) for locomotion.',
    commonConditions: ['Quadriceps strain', 'Hamstring tear', 'Compartment syndrome'],
    relatedStructures: ['Femur', 'Quadriceps', 'Hamstrings', 'Femoral artery'],
  },
  leftLeg: {
    name: 'Left Lower Leg',
    latinName: 'Crus sinister',
    system: 'Musculoskeletal',
    location: 'Left lower leg, from knee to ankle',
    function: 'Contains tibia and fibula with calf muscles for locomotion and stability.',
    commonConditions: ['Shin splints', 'Stress fracture', 'Achilles tendonitis'],
    relatedStructures: ['Tibia', 'Fibula', 'Gastrocnemius', 'Soleus', 'Tibial nerve'],
  },
  rightLeg: {
    name: 'Right Lower Leg',
    latinName: 'Crus dexter',
    system: 'Musculoskeletal',
    location: 'Right lower leg, from knee to ankle',
    function: 'Contains tibia and fibula with calf muscles for locomotion and stability.',
    commonConditions: ['Shin splints', 'Stress fracture', 'Achilles tendonitis'],
    relatedStructures: ['Tibia', 'Fibula', 'Gastrocnemius', 'Soleus', 'Tibial nerve'],
  },
  leftFoot: {
    name: 'Left Foot',
    latinName: 'Pes sinister',
    system: 'Musculoskeletal',
    location: 'Left foot, from ankle to toes',
    function: 'Complex structure with 26 bones for weight-bearing and locomotion.',
    commonConditions: ['Plantar fasciitis', 'Ankle sprain', 'Achilles rupture', 'Bunions'],
    relatedStructures: ['Tarsals', 'Metatarsals', 'Phalanges', 'Plantar fascia'],
  },
  rightFoot: {
    name: 'Right Foot',
    latinName: 'Pes dexter',
    system: 'Musculoskeletal',
    location: 'Right foot, from ankle to toes',
    function: 'Complex structure with 26 bones for weight-bearing and locomotion.',
    commonConditions: ['Plantar fasciitis', 'Ankle sprain', 'Achilles rupture', 'Bunions'],
    relatedStructures: ['Tarsals', 'Metatarsals', 'Phalanges', 'Plantar fascia'],
  },
  // Shoulders
  leftShoulder: {
    name: 'Left Shoulder',
    latinName: 'Articulatio glenohumeralis sinistra',
    system: 'Musculoskeletal',
    location: 'Left ball-and-socket joint connecting arm to torso',
    function: 'Provides wide range of motion for arm movement; connects upper extremity to axial skeleton.',
    commonConditions: ['Rotator cuff tear', 'Frozen shoulder', 'Bursitis', 'Arthritis'],
    relatedStructures: ['Humerus head', 'Scapula', 'Clavicle', 'Rotator cuff muscles'],
  },
  rightShoulder: {
    name: 'Right Shoulder',
    latinName: 'Articulatio glenohumeralis dextra',
    system: 'Musculoskeletal',
    location: 'Right ball-and-socket joint connecting arm to torso',
    function: 'Provides wide range of motion for arm movement; connects upper extremity to axial skeleton.',
    commonConditions: ['Rotator cuff tear', 'Frozen shoulder', 'Bursitis', 'Arthritis'],
    relatedStructures: ['Humerus head', 'Scapula', 'Clavicle', 'Rotator cuff muscles'],
  },
  // Arms
  leftArm: {
    name: 'Left Arm',
    latinName: 'Brachium sinistrum',
    system: 'Musculoskeletal',
    location: 'Left upper extremity, from shoulder to elbow',
    function: 'Allows reaching, grasping, and manipulation of objects. Contains major nerves and blood vessels.',
    commonConditions: ['Biceps tendonitis', 'Humerus fracture', 'Triceps strain'],
    relatedStructures: ['Humerus', 'Biceps', 'Triceps', 'Brachial artery', 'Median nerve'],
  },
  rightArm: {
    name: 'Right Arm',
    latinName: 'Brachium dextrum',
    system: 'Musculoskeletal',
    location: 'Right upper extremity, from shoulder to elbow',
    function: 'Allows reaching, grasping, and manipulation of objects. Contains major nerves and blood vessels.',
    commonConditions: ['Biceps tendonitis', 'Humerus fracture', 'Triceps strain'],
    relatedStructures: ['Humerus', 'Biceps', 'Triceps', 'Brachial artery', 'Median nerve'],
  },
  // Elbows
  leftElbow: {
    name: 'Left Elbow',
    latinName: 'Articulatio cubiti sinistra',
    system: 'Musculoskeletal',
    location: 'Left hinge joint connecting upper arm to forearm',
    function: 'Allows flexion and extension of the forearm; critical for reaching and lifting movements.',
    commonConditions: ['Golfer\'s elbow', 'Bursitis', 'Arthritis'],
    relatedStructures: ['Humerus', 'Radius', 'Ulna', 'Biceps tendon'],
  },
  rightElbow: {
    name: 'Right Elbow',
    latinName: 'Articulatio cubiti dextra',
    system: 'Musculoskeletal',
    location: 'Right hinge joint connecting upper arm to forearm',
    function: 'Allows flexion and extension of the forearm; critical for reaching and lifting movements.',
    commonConditions: ['Golfer\'s elbow', 'Bursitis', 'Arthritis'],
    relatedStructures: ['Humerus', 'Radius', 'Ulna', 'Biceps tendon'],
  },
  // Wrists
  leftWrist: {
    name: 'Left Wrist',
    latinName: 'Articulatio radiocarpalis sinistra',
    system: 'Musculoskeletal',
    location: 'Left complex joint connecting forearm to hand',
    function: 'Allows flexion, extension, and radial/ulnar deviation of the hand.',
    commonConditions: ['Sprain', 'Arthritis', 'Fracture'],
    relatedStructures: ['Radius', 'Ulna', 'Carpal bones', 'Transverse ligament'],
  },
  rightWrist: {
    name: 'Right Wrist',
    latinName: 'Articulatio radiocarpalis dextra',
    system: 'Musculoskeletal',
    location: 'Right complex joint connecting forearm to hand',
    function: 'Allows flexion, extension, and radial/ulnar deviation of the hand.',
    commonConditions: ['Sprain', 'Arthritis', 'Fracture'],
    relatedStructures: ['Radius', 'Ulna', 'Carpal bones', 'Transverse ligament'],
  },
  // Hips
  leftHip: {
    name: 'Left Hip',
    latinName: 'Articulatio coxae sinistra',
    system: 'Musculoskeletal',
    location: 'Left ball-and-socket joint connecting leg to pelvis',
    function: 'Supports body weight and enables leg movement in multiple planes.',
    commonConditions: ['Hip osteoarthritis', 'Bursitis', 'Labral tear', 'Hip fracture'],
    relatedStructures: ['Femoral head', 'Acetabulum', 'Hip muscles', 'Sciatic nerve'],
  },
  rightHip: {
    name: 'Right Hip',
    latinName: 'Articulatio coxae dextra',
    system: 'Musculoskeletal',
    location: 'Right ball-and-socket joint connecting leg to pelvis',
    function: 'Supports body weight and enables leg movement in multiple planes.',
    commonConditions: ['Hip osteoarthritis', 'Bursitis', 'Labral tear', 'Hip fracture'],
    relatedStructures: ['Femoral head', 'Acetabulum', 'Hip muscles', 'Sciatic nerve'],
  },
  // Thighs
  leftThigh: {
    name: 'Left Thigh',
    latinName: 'Femur sinistrum',
    system: 'Musculoskeletal',
    location: 'Left upper leg, from hip to knee',
    function: 'Contains the femur and major muscle groups for locomotion.',
    commonConditions: ['Quadriceps strain', 'Hamstring tear', 'Compartment syndrome'],
    relatedStructures: ['Femur', 'Quadriceps', 'Hamstrings', 'Femoral artery'],
  },
  rightThigh: {
    name: 'Right Thigh',
    latinName: 'Femur dextrum',
    system: 'Musculoskeletal',
    location: 'Right upper leg, from hip to knee',
    function: 'Contains the femur and major muscle groups for locomotion.',
    commonConditions: ['Quadriceps strain', 'Hamstring tear', 'Compartment syndrome'],
    relatedStructures: ['Femur', 'Quadriceps', 'Hamstrings', 'Femoral artery'],
  },
  // Knees
  leftKnee: {
    name: 'Left Knee',
    latinName: 'Articulatio genus sinistra',
    system: 'Musculoskeletal',
    location: 'Left hinge joint connecting thigh to lower leg',
    function: 'Bears body weight and allows flexion/extension of the lower leg.',
    commonConditions: ['ACL tear', 'Meniscus tear', 'Osteoarthritis', 'Bursitis'],
    relatedStructures: ['Femoral condyles', 'Tibial plateau', 'Patella', 'Menisci', 'Ligaments'],
  },
  rightKnee: {
    name: 'Right Knee',
    latinName: 'Articulatio genus dextra',
    system: 'Musculoskeletal',
    location: 'Right hinge joint connecting thigh to lower leg',
    function: 'Bears body weight and allows flexion/extension of the lower leg.',
    commonConditions: ['ACL tear', 'Meniscus tear', 'Osteoarthritis', 'Bursitis'],
    relatedStructures: ['Femoral condyles', 'Tibial plateau', 'Patella', 'Menisci', 'Ligaments'],
  },
  // Ankles
  leftAnkle: {
    name: 'Left Ankle',
    latinName: 'Articulatio talocruralis sinistra',
    system: 'Musculoskeletal',
    location: 'Left hinge joint connecting lower leg to foot',
    function: 'Allows dorsiflexion and plantarflexion of the foot; critical for walking and balance.',
    commonConditions: ['Sprain', 'Achilles tendonitis', 'Arthritis', 'Fracture'],
    relatedStructures: ['Tibia', 'Fibula', 'Talus', 'Calcaneus'],
  },
  rightAnkle: {
    name: 'Right Ankle',
    latinName: 'Articulatio talocruralis dextra',
    system: 'Musculoskeletal',
    location: 'Right hinge joint connecting lower leg to foot',
    function: 'Allows dorsiflexion and plantarflexion of the foot; critical for walking and balance.',
    commonConditions: ['Sprain', 'Achilles tendonitis', 'Arthritis', 'Fracture'],
    relatedStructures: ['Tibia', 'Fibula', 'Talus', 'Calcaneus'],
  },
};

/**
 * Get educational content for a structure by ID
 */
export function buildStructureContext(structureId: string): StructureEducationalContent | null {
  return STRUCTURE_DATA[structureId] || null;
}

/**
 * Build a system prompt that combines structure education with health context
 */
export function buildAnatomySystemPrompt(
  structureId: string,
  structureName: string,
  dashboardData: DashboardData | null
): string {
  const structureInfo = STRUCTURE_DATA[structureId];

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

${healthContext ? `=== USER HEALTH CONTEXT ===\n${healthContext}` : ''}

Guidelines:
- Explain anatomy concepts clearly at an accessible level
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
