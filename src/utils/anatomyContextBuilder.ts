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
  abdomen: {
    name: 'Abdomen',
    latinName: 'Abdomen',
    system: 'Digestive / Urinary',
    location: 'Region between the thorax and pelvis, contains digestive organs',
    function: 'Contains organs for digestion (stomach, intestines, liver, pancreas), filtration (kidneys), and immune function (spleen).',
    commonConditions: ['Gastritis', 'IBS', 'Appendicitis', 'Kidney stones', 'Liver disease', 'Hernias'],
    relatedStructures: ['Stomach', 'Liver', 'Kidneys', 'Intestines', 'Pancreas', 'Spleen'],
  },
  leftArm: {
    name: 'Left Arm',
    latinName: 'Brachium sinister',
    system: 'Musculoskeletal',
    location: 'Left upper extremity, from shoulder to hand',
    function: 'Allows reaching, grasping, and manipulation of objects. Contains major nerves and blood vessels.',
    commonConditions: ['Carpal tunnel syndrome', 'Tennis elbow', 'Rotator cuff injury', 'Fractures'],
    relatedStructures: ['Humerus', 'Radius', 'Ulna', 'Shoulder joint', 'Elbow joint', 'Wrist'],
  },
  rightArm: {
    name: 'Right Arm',
    latinName: 'Brachium dexter',
    system: 'Musculoskeletal',
    location: 'Right upper extremity, from shoulder to hand',
    function: 'Allows reaching, grasping, and manipulation of objects. Contains major nerves and blood vessels.',
    commonConditions: ['Carpal tunnel syndrome', 'Tennis elbow', 'Rotator cuff injury', 'Fractures'],
    relatedStructures: ['Humerus', 'Radius', 'Ulna', 'Shoulder joint', 'Elbow joint', 'Wrist'],
  },
  leftLeg: {
    name: 'Left Leg',
    latinName: 'Crus sinister',
    system: 'Musculoskeletal',
    location: 'Left lower extremity, from hip to foot',
    function: 'Supports body weight and enables locomotion (walking, running, jumping).',
    commonConditions: ['ACL tears', 'Shin splints', 'Plantar fasciitis', 'DVT', 'Arthritis'],
    relatedStructures: ['Femur', 'Tibia', 'Fibula', 'Hip joint', 'Knee joint', 'Ankle'],
  },
  rightLeg: {
    name: 'Right Leg',
    latinName: 'Crus dexter',
    system: 'Musculoskeletal',
    location: 'Right lower extremity, from hip to foot',
    function: 'Supports body weight and enables locomotion (walking, running, jumping).',
    commonConditions: ['ACL tears', 'Shin splints', 'Plantar fasciitis', 'DVT', 'Arthritis'],
    relatedStructures: ['Femur', 'Tibia', 'Fibula', 'Hip joint', 'Knee joint', 'Ankle'],
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

  return `You are an anatomy and physiology education assistant. The user is viewing the ${structureName} in an interactive 3D anatomy viewer and wants to learn about this structure.

IMPORTANT DISCLAIMER: You provide evidence-based educational information only, NOT medical advice. Always encourage consulting qualified healthcare professionals for medical decisions, diagnoses, and treatments.

=== CURRENT STRUCTURE ===
${structureContent}

${healthContext ? `=== USER HEALTH CONTEXT ===\n${healthContext}` : ''}

=== EDUCATIONAL FRAMEWORK ===

When explaining this anatomical structure, cover these aspects as relevant:

1. GROSS ANATOMY
   - Location and spatial relationships (use anatomical position terms)
   - Surface landmarks and palpable features
   - Regional anatomy context

2. STRUCTURAL ANATOMY
   - Tissue composition (bone, cartilage, muscle, connective tissue)
   - Vascular supply (arteries, veins, lymphatics)
   - Innervation (nerve supply and function)

3. FUNCTIONAL ANATOMY
   - Primary physiological functions
   - Biomechanics (for musculoskeletal structures)
   - Integration with other body systems

4. CLINICAL ANATOMY (when relevant)
   - Common pathologies and their anatomical basis
   - Physical examination considerations
   - Why symptoms manifest in certain patterns

=== RESPONSE GUIDELINES ===

- Use proper anatomical terminology with clear definitions
- Include Latin/Greek origins when helpful for understanding
- Relate structure to function ("form follows function")
- Use citations [1], [2] when referencing educational sources
- Connect to the user's health conditions when relevant
- Keep explanations at an accessible but scientifically accurate level
- NEVER diagnose or prescribe treatments`;
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
