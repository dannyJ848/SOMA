/**
 * AI Medical Encyclopedia
 *
 * The core AI assistant interface for region-specific medical education.
 * Integrates with the Physiology, Histology, and Pathology content
 * and provides complexity-adaptive explanations.
 *
 * Enhanced with patient health data integration for personalized education.
 */

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { invoke } from '../tauri-invoke';
import type {
  UserCondition,
  UserMedication,
  UserLabResult,
  UserHealthProfile,
} from '../../core/personalization/types';
import { COMPLEXITY_LEVELS, type ComplexityLevel } from '../ComplexityLevel';
import type { AnatomyChatContext } from '../ai/types';

// ============================================
// Types
// ============================================

interface Citation {
  index: number;
  source: string;
  section?: string;
  url?: string;
}

interface DiagramReference {
  id: string;
  name: string;
  type: 'anatomy' | 'histology' | 'physiology' | 'pathology';
  description?: string;
}

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  citations?: Citation[];
  diagramReferences?: DiagramReference[];
  complexityLevel?: ComplexityLevel;
  personalizedContext?: PersonalizedMessageContext;
}

interface PersonalizedMessageContext {
  relatedConditions: string[];
  relatedMedications: string[];
  relatedLabs: string[];
  personalRelevance: 'high' | 'medium' | 'low';
}

interface AIChatRAGResponse {
  content: string;
  model: string;
  done: boolean;
  citations: Citation[];
  ragContext?: {
    chunksUsed: number;
    totalTokens: number;
    processingTimeMs: number;
  };
}

interface QuickAction {
  id: string;
  label: string;
  icon: string;
  prompt: string;
}

/**
 * Patient symptom data
 */
export interface PatientSymptom {
  id: string;
  description: string;
  bodyLocation: string;
  severity: number;
  startDate?: Date;
}

/**
 * Patient health data for personalized education
 */
export interface PatientHealthData {
  conditions: UserCondition[];
  medications: UserMedication[];
  labResults: UserLabResult[];
  symptoms: PatientSymptom[];
  allergies?: string[];
  profile?: UserHealthProfile;
}

/**
 * Region-specific health context
 */
export interface RegionHealthContext {
  relevantConditions: UserCondition[];
  relevantMedications: UserMedication[];
  relevantLabs: UserLabResult[];
  relevantSymptoms: PatientSymptom[];
  overallRelevance: 'high' | 'medium' | 'low' | 'none';
}

/**
 * Educational module suggestion
 */
interface EducationalModule {
  id: string;
  title: string;
  description: string;
  relevanceReason: string;
  complexity: ComplexityLevel;
  duration: string;
}

/**
 * "Did you know?" fact
 */
interface DidYouKnowFact {
  fact: string;
  relatedTo: string;
  source?: string;
}

export interface AIMedicalEncyclopediaProps {
  regionId: string;
  regionName: string;
  /** @deprecated Use patientHealthData instead */
  userConditions?: UserCondition[];
  /** Patient health data for personalized education */
  patientHealthData?: PatientHealthData;
  /** Structured anatomy chat context from the body-centric view */
  anatomyChatContext?: AnatomyChatContext | null;
  initialComplexity: 1 | 2 | 3 | 4 | 5;
  onClose: () => void;
  onNavigateToRegion: (regionId: string) => void;
}

// ============================================
// Constants
// ============================================

const COMPLEXITY_LABELS: Record<ComplexityLevel, string> = {
  1: 'Patient',
  2: 'High School',
  3: 'Medical Student',
  4: 'Resident',
  5: 'Physician',
};

/**
 * Mapping of body regions to relevant condition keywords
 */
const REGION_CONDITION_KEYWORDS: Record<string, string[]> = {
  head: ['headache', 'migraine', 'concussion', 'meningitis', 'stroke', 'brain', 'neurological', 'seizure', 'epilepsy', 'sinusitis'],
  neck: ['thyroid', 'hypothyroid', 'hyperthyroid', 'goiter', 'cervical', 'neck pain', 'lymphadenopathy'],
  chest: ['heart', 'cardiac', 'coronary', 'angina', 'arrhythmia', 'heart failure', 'lung', 'pneumonia', 'asthma', 'copd', 'bronchitis', 'pulmonary'],
  abdomen: ['gastric', 'ulcer', 'liver', 'hepatitis', 'cirrhosis', 'pancreatitis', 'cholecystitis', 'appendicitis', 'colitis', 'crohn', 'ibd', 'kidney', 'renal'],
  pelvis: ['bladder', 'urinary', 'kidney', 'prostate', 'ovarian', 'uterine', 'pelvic', 'hip'],
  heart: ['heart', 'cardiac', 'coronary', 'myocardial', 'angina', 'arrhythmia', 'heart failure', 'valve', 'cardiomyopathy', 'hypertension', 'blood pressure'],
  lungs: ['lung', 'pulmonary', 'pneumonia', 'asthma', 'copd', 'bronchitis', 'fibrosis', 'embolism', 'respiratory'],
  brain: ['brain', 'stroke', 'aneurysm', 'tumor', 'dementia', 'alzheimer', 'parkinson', 'ms', 'epilepsy', 'seizure', 'neurological'],
  spine: ['back pain', 'sciatica', 'herniated', 'stenosis', 'scoliosis', 'degenerative', 'vertebral'],
  liver: ['liver', 'hepatitis', 'cirrhosis', 'fatty liver', 'hepatic'],
  kidney: ['kidney', 'renal', 'nephritis', 'nephropathy', 'dialysis', 'creatinine'],
  stomach: ['gastric', 'ulcer', 'gastritis', 'gerd', 'reflux', 'h pylori'],
  intestine: ['intestinal', 'bowel', 'colitis', 'crohn', 'ibs', 'celiac', 'diverticulitis'],
};

/**
 * Mapping of regions to relevant lab keywords
 */
const REGION_LAB_KEYWORDS: Record<string, string[]> = {
  head: ['csf', 'neurological', 'ammonia', 'b12'],
  neck: ['tsh', 'thyroid', 't3', 't4', 'pth', 'calcium'],
  chest: ['troponin', 'bnp', 'ck-mb', 'lipid', 'cholesterol', 'ldl', 'hdl', 'd-dimer'],
  abdomen: ['liver', 'ast', 'alt', 'bilirubin', 'albumin', 'lipase', 'amylase', 'creatinine', 'bun', 'gfr', 'glucose', 'a1c'],
  heart: ['troponin', 'bnp', 'nt-probnp', 'ck-mb', 'lipid', 'cholesterol', 'ldl', 'hdl'],
  lungs: ['abg', 'pco2', 'po2', 'd-dimer', 'bicarbonate'],
  brain: ['csf', 'ammonia', 'b12', 'glucose'],
  liver: ['ast', 'alt', 'bilirubin', 'albumin', 'inr', 'ggt', 'alp', 'hepatitis'],
  kidney: ['creatinine', 'bun', 'gfr', 'potassium', 'sodium', 'urinalysis', 'protein'],
  stomach: ['h pylori', 'gastrin', 'pepsinogen'],
};

/**
 * Mapping of regions to medication classes
 */
const REGION_MEDICATION_CLASSES: Record<string, string[]> = {
  heart: ['beta blocker', 'ace inhibitor', 'arb', 'calcium channel', 'anticoagulant', 'statin', 'diuretic', 'antiarrhythmic', 'antiplatelet'],
  lungs: ['bronchodilator', 'inhaler', 'corticosteroid', 'leukotriene', 'antihistamine'],
  brain: ['antidepressant', 'antipsychotic', 'anticonvulsant', 'anxiolytic', 'stimulant', 'parkinson'],
  liver: ['hepatoprotective', 'ursodiol', 'interferon'],
  kidney: ['ace inhibitor', 'arb', 'diuretic', 'phosphate binder', 'epo'],
  stomach: ['ppi', 'proton pump', 'antacid', 'h2 blocker', 'antiemetic'],
};

const EDUCATIONAL_DISCLAIMER = `IMPORTANT: This content is for educational purposes only and is not intended as medical advice, diagnosis, or treatment. Always consult qualified healthcare professionals for medical decisions.`;

// ============================================
// Helper Functions
// ============================================

const generateMessageId = () => `msg_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

/**
 * Get region health context by filtering patient data relevant to the selected region
 */
function getRegionHealthContext(
  regionId: string,
  regionName: string,
  patientData?: PatientHealthData
): RegionHealthContext | null {
  if (!patientData) return null;

  const normalizedRegionId = regionId.toLowerCase();
  const normalizedRegionName = regionName.toLowerCase();

  // Get relevant keywords for this region
  const conditionKeywords = REGION_CONDITION_KEYWORDS[normalizedRegionId] ||
    REGION_CONDITION_KEYWORDS[normalizedRegionName] ||
    [normalizedRegionId, normalizedRegionName];

  const labKeywords = REGION_LAB_KEYWORDS[normalizedRegionId] ||
    REGION_LAB_KEYWORDS[normalizedRegionName] || [];

  const medKeywords = REGION_MEDICATION_CLASSES[normalizedRegionId] ||
    REGION_MEDICATION_CLASSES[normalizedRegionName] || [];

  // Filter conditions
  const relevantConditions = patientData.conditions.filter(condition => {
    const name = condition.name.toLowerCase();
    const structures = condition.relatedStructures?.map(s => s.toLowerCase()) || [];
    const systems = condition.relatedSystems?.map(s => s.toLowerCase()) || [];

    return conditionKeywords.some(keyword =>
      name.includes(keyword) ||
      structures.some(s => s.includes(keyword)) ||
      systems.some(s => s.includes(keyword))
    );
  });

  // Filter medications
  const relevantMedications = patientData.medications.filter(med => {
    const name = med.name.toLowerCase();
    const genericName = med.genericName.toLowerCase();
    const drugClass = med.drugClass.toLowerCase();
    const targets = med.targetStructures?.map(s => s.toLowerCase()) || [];

    return medKeywords.some(keyword =>
      name.includes(keyword) ||
      genericName.includes(keyword) ||
      drugClass.includes(keyword) ||
      targets.some(t => t.includes(normalizedRegionId) || t.includes(normalizedRegionName))
    );
  });

  // Filter lab results
  const relevantLabs = patientData.labResults.filter(lab => {
    const testName = lab.testName.toLowerCase();
    const organs = lab.relatedOrgans?.map(o => o.toLowerCase()) || [];

    return labKeywords.some(keyword => testName.includes(keyword)) ||
      organs.some(o => o.includes(normalizedRegionId) || o.includes(normalizedRegionName));
  });

  // Filter symptoms
  const relevantSymptoms = patientData.symptoms.filter(symptom => {
    const location = symptom.bodyLocation.toLowerCase();
    const description = symptom.description.toLowerCase();

    return location.includes(normalizedRegionId) ||
      location.includes(normalizedRegionName) ||
      description.includes(normalizedRegionId) ||
      description.includes(normalizedRegionName);
  });

  // Determine overall relevance
  let overallRelevance: 'high' | 'medium' | 'low' | 'none' = 'none';
  const totalRelevant = relevantConditions.length + relevantMedications.length +
    relevantLabs.length + relevantSymptoms.length;

  if (totalRelevant >= 3) overallRelevance = 'high';
  else if (totalRelevant >= 1) overallRelevance = 'medium';
  else if (patientData.conditions.length > 0) overallRelevance = 'low';

  return {
    relevantConditions,
    relevantMedications,
    relevantLabs,
    relevantSymptoms,
    overallRelevance,
  };
}

/**
 * Generate suggested questions based on region and patient context
 */
function generateSuggestedQuestions(
  regionName: string,
  healthContext?: RegionHealthContext | null
): string[] {
  const baseQuestions = [
    `What doctors specialize in treating the ${regionName}?`,
    `What do medical students learn about the ${regionName}?`,
    `What conditions commonly affect the ${regionName}?`,
    `How does the ${regionName} function?`,
    `What tests examine the ${regionName}?`,
  ];

  // Add personalized questions if there's health context
  if (healthContext && healthContext.overallRelevance !== 'none') {
    const personalizedQuestions: string[] = [];

    // Add condition-based questions
    healthContext.relevantConditions.slice(0, 2).forEach(condition => {
      personalizedQuestions.push(
        `How does ${condition.name} affect the ${regionName}? (Educational overview)`
      );
    });

    // Add medication-based questions
    healthContext.relevantMedications.slice(0, 1).forEach(med => {
      personalizedQuestions.push(
        `How does ${med.name} work in relation to the ${regionName}? (Educational)`
      );
    });

    // Add lab-based questions
    if (healthContext.relevantLabs.some(lab => lab.status !== 'normal')) {
      personalizedQuestions.push(
        `What do abnormal lab results tell us about ${regionName} health? (General education)`
      );
    }

    // Add symptom-based questions
    healthContext.relevantSymptoms.slice(0, 1).forEach(symptom => {
      personalizedQuestions.push(
        `What are common causes of ${symptom.description} in the ${regionName}? (Educational)`
      );
    });

    // Combine and limit
    return [...personalizedQuestions.slice(0, 3), ...baseQuestions.slice(0, 2)];
  }

  return baseQuestions;
}

/**
 * Generate "Did you know?" facts based on patient health context
 */
function generateDidYouKnowFacts(
  regionName: string,
  healthContext?: RegionHealthContext | null
): DidYouKnowFact[] {
  const facts: DidYouKnowFact[] = [];

  if (!healthContext || healthContext.overallRelevance === 'none') {
    // Return general facts
    return [
      {
        fact: `The ${regionName} is one of the most complex structures studied in anatomy.`,
        relatedTo: 'General anatomy',
      },
    ];
  }

  // Add condition-related facts
  healthContext.relevantConditions.forEach(condition => {
    if (condition.name.toLowerCase().includes('diabetes')) {
      facts.push({
        fact: `Diabetes can affect multiple organ systems. Learning how blood sugar impacts the ${regionName} can help you understand your health better.`,
        relatedTo: condition.name,
      });
    }
    if (condition.name.toLowerCase().includes('hypertension') || condition.name.toLowerCase().includes('blood pressure')) {
      facts.push({
        fact: `High blood pressure affects blood vessel walls throughout the body. Understanding this can help you appreciate why management is important.`,
        relatedTo: condition.name,
      });
    }
  });

  // Add medication-related facts
  healthContext.relevantMedications.forEach(med => {
    if (med.mechanism) {
      facts.push({
        fact: `Your medication ${med.name} works by: ${med.mechanism}. Understanding the mechanism can help you learn about your treatment.`,
        relatedTo: med.name,
      });
    }
  });

  // Limit facts
  return facts.slice(0, 3);
}

/**
 * Generate educational modules based on patient health profile
 */
function generateEducationalModules(
  regionName: string,
  healthContext?: RegionHealthContext | null,
  complexityLevel: ComplexityLevel = 1
): EducationalModule[] {
  const modules: EducationalModule[] = [];

  // Always include basic anatomy module
  modules.push({
    id: 'basic-anatomy',
    title: `Understanding ${regionName} Anatomy`,
    description: `Learn the basic structure and function of the ${regionName}.`,
    relevanceReason: 'Foundational knowledge',
    complexity: 1,
    duration: '5-10 min',
  });

  if (healthContext && healthContext.overallRelevance !== 'none') {
    // Add condition-specific modules
    healthContext.relevantConditions.forEach(condition => {
      modules.push({
        id: `condition-${condition.conditionId}`,
        title: `${condition.name}: What You Should Know`,
        description: `Educational overview of ${condition.name} and how it relates to the ${regionName}.`,
        relevanceReason: `Related to your condition: ${condition.name}`,
        complexity: complexityLevel,
        duration: '10-15 min',
      });
    });

    // Add medication education modules
    if (healthContext.relevantMedications.length > 0) {
      modules.push({
        id: 'medication-education',
        title: 'Understanding Your Medications',
        description: `Learn how your medications work in relation to the ${regionName}.`,
        relevanceReason: 'Based on your current medications',
        complexity: complexityLevel,
        duration: '10-15 min',
      });
    }

    // Add lab understanding module
    if (healthContext.relevantLabs.length > 0) {
      modules.push({
        id: 'lab-education',
        title: 'Understanding Your Lab Results',
        description: `Learn what your lab tests measure and what the results mean for ${regionName} health.`,
        relevanceReason: 'Based on your recent labs',
        complexity: complexityLevel,
        duration: '10-15 min',
      });
    }
  }

  return modules.slice(0, 5);
}

const QUICK_ACTIONS: QuickAction[] = [
  {
    id: 'doctor-explain',
    label: 'Explain like a doctor would',
    icon: 'stethoscope',
    prompt: 'Explain this in clinical terms, as a physician would explain to a colleague during rounds.',
  },
  {
    id: 'med-student',
    label: 'Show me what medical students learn',
    icon: 'graduation-cap',
    prompt: 'What key concepts about this region do medical students need to master? Include high-yield board exam content.',
  },
  {
    id: 'treatments',
    label: 'What are the latest treatments?',
    icon: 'pills',
    prompt: 'What are the current evidence-based treatments for conditions affecting this region? Include any recent advances.',
  },
  {
    id: 'compare',
    label: 'Compare to similar regions',
    icon: 'compare',
    prompt: 'How does this region compare anatomically and functionally to similar regions in the body?',
  },
];

/**
 * Build system prompt with patient health context for personalized education
 */
const buildSystemPrompt = (
  regionId: string,
  regionName: string,
  complexityLevel: ComplexityLevel,
  healthContext?: RegionHealthContext | null,
  patientData?: PatientHealthData,
  anatomyChatContext?: AnatomyChatContext | null
): string => {
  const levelDef = COMPLEXITY_LEVELS[complexityLevel];

  let healthContextSection = '';

  if (healthContext && healthContext.overallRelevance !== 'none') {
    const contextParts: string[] = [];

    if (healthContext.relevantConditions.length > 0) {
      const conditions = healthContext.relevantConditions
        .map(c => `${c.name}${c.severity ? ` (${c.severity})` : ''}${c.status === 'chronic' ? ' - chronic' : ''}`)
        .join(', ');
      contextParts.push(`Conditions: ${conditions}`);
    }

    if (healthContext.relevantMedications.length > 0) {
      const meds = healthContext.relevantMedications
        .map(m => `${m.name}${m.dose ? ` ${m.dose}` : ''}`)
        .join(', ');
      contextParts.push(`Medications: ${meds}`);
    }

    if (healthContext.relevantLabs.length > 0) {
      const labs = healthContext.relevantLabs
        .filter(l => l.status !== 'normal')
        .map(l => `${l.testName}: ${l.value} ${l.unit} (${l.status})`)
        .join(', ');
      if (labs) {
        contextParts.push(`Notable Labs: ${labs}`);
      }
    }

    if (healthContext.relevantSymptoms.length > 0) {
      const symptoms = healthContext.relevantSymptoms
        .map(s => `${s.description} at ${s.bodyLocation}`)
        .join(', ');
      contextParts.push(`Reported Symptoms: ${symptoms}`);
    }

    if (contextParts.length > 0) {
      healthContextSection = `
=== PATIENT EDUCATIONAL CONTEXT ===
The user has shared the following health information to help personalize their learning experience:
${contextParts.join('\n')}

IMPORTANT EDUCATIONAL FRAMING:
- Use this context ONLY to personalize educational content
- Connect explanations to how this region relates to their conditions
- Explain how their medications may interact with this region's function
- Help them understand their lab results in the context of this region
- NEVER provide diagnoses or treatment recommendations
- ALWAYS encourage discussing specific health concerns with their healthcare provider
- Frame all content as "This is what you can learn about..." rather than "You have..."
`;
    }
  }

  // Include any user conditions from the deprecated prop for backwards compatibility
  if (!healthContextSection && patientData?.conditions && patientData.conditions.length > 0) {
    const activeConditions = patientData.conditions.filter(c => c.status === 'active' || c.status === 'chronic');
    if (activeConditions.length > 0) {
      healthContextSection = `
=== USER'S HEALTH CONTEXT ===
The user has the following relevant conditions: ${activeConditions.map(c => c.name).join(', ')}
When relevant, connect explanations to how this region may be affected by or relate to their conditions.
Frame all information as educational content, not medical advice.
`;
    }
  }

  // Build anatomy chat context section if available
  let anatomyContextSection = '';
  if (anatomyChatContext) {
    const parts: string[] = [];
    if (anatomyChatContext.bodySystems.length > 0) {
      parts.push(`Body Systems: ${anatomyChatContext.bodySystems.join(', ')}`);
    }
    if (anatomyChatContext.anatomyStructures.length > 0) {
      parts.push(`Anatomy Structures: ${anatomyChatContext.anatomyStructures.join(', ')}`);
    }
    if (anatomyChatContext.symptoms.length > 0) {
      parts.push(`Associated Symptoms: ${anatomyChatContext.symptoms.join(', ')}`);
    }
    if (anatomyChatContext.conditions.length > 0) {
      parts.push(`Related Conditions: ${anatomyChatContext.conditions.join(', ')}`);
    }
    if (anatomyChatContext.specialties.length > 0) {
      parts.push(`Relevant Specialties: ${anatomyChatContext.specialties.join(', ')}`);
    }
    if (anatomyChatContext.initialQuestion) {
      parts.push(`User's Initial Question: ${anatomyChatContext.initialQuestion}`);
    }
    if (parts.length > 0) {
      anatomyContextSection = `
=== ANATOMY NAVIGATION CONTEXT ===
The user navigated from the body model with the following context:
Region: ${anatomyChatContext.regionName} (${anatomyChatContext.regionId})
${parts.join('\n')}

Use this context to provide more targeted and relevant educational content.
`;
    }
  }

  return `You are the AI Medical Encyclopedia, an advanced medical education assistant. You specialize in providing evidence-based anatomical and clinical education about the ${regionName}.

${EDUCATIONAL_DISCLAIMER}

=== COMPLEXITY LEVEL: ${levelDef.name} (Level ${complexityLevel}/5) ===
Target audience: ${levelDef.audience}
Content characteristics:
${levelDef.characteristics.map(c => `- ${c}`).join('\n')}

=== CURRENT ANATOMICAL REGION ===
Region ID: ${regionId}
Region Name: ${regionName}

${healthContextSection}
${anatomyContextSection}

=== CONTENT FRAMEWORK ===

When explaining this anatomical region, integrate knowledge from:

1. PHYSIOLOGY
   - Normal functions and mechanisms
   - Homeostatic processes
   - Normal parameters and values
   - System integration

2. HISTOLOGY
   - Tissue types and cellular composition
   - Microscopic anatomy
   - Cell types and their roles
   - Ultrastructure when relevant

3. PATHOLOGY
   - Common conditions affecting this region
   - Disease mechanisms and pathophysiology
   - Clinical presentations
   - Diagnostic approaches

4. CLINICAL CORRELATIONS
   - What physicians look for when examining this region
   - Relevant diagnostic tests and imaging
   - Treatment approaches (educational context only)
   - Specialties that treat conditions in this region

=== PERSONALIZED EDUCATION GUIDELINES ===

When the user has shared health context:
1. Include a "What This Means For Your Learning" section when relevant
2. Connect anatomical concepts to their specific conditions/medications
3. Explain why certain labs are relevant to this region
4. Use phrases like "In conditions like [their condition]..." to make content relevant
5. Suggest what questions they might want to ask their healthcare provider
6. ALWAYS end personalized sections with a reminder to consult their healthcare team

=== RESPONSE GUIDELINES ===

1. Adjust terminology complexity to the selected level
2. Use proper anatomical terminology with definitions at lower complexity levels
3. Include Latin/Greek terms with explanations when helpful
4. Reference diagrams and anatomical structures that could be visualized
5. Provide citations [1], [2], etc. for educational sources
6. Connect to the user's conditions when relevant and appropriate
7. Be thorough but organized - use headers and bullet points
8. NEVER diagnose or prescribe - always refer to healthcare providers
9. Mention which medical specialties would treat conditions when asked
10. Include "Questions to Ask Your Doctor" when discussing the user's conditions

For Level 5 (Physician) responses:
- Include clinical pearls and board-relevant content
- Discuss differential diagnoses
- Reference current clinical guidelines
- Use appropriate medical abbreviations`;
};

// ============================================
// Icon Components
// ============================================

const BrainBookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2a4 4 0 0 0-4 4c0 1.5.8 2.8 2 3.5V11h4V9.5c1.2-.7 2-2 2-3.5a4 4 0 0 0-4-4z" />
    <path d="M8 9.5C6.3 10.3 5 12 5 14c0 2.2 1.8 4 4 4h6c2.2 0 4-1.8 4-4 0-2-1.3-3.7-3-4.5" />
    <path d="M4 19h16" />
    <path d="M6 19v3h12v-3" />
    <path d="M9 15h6" />
  </svg>
);

const MicrophoneIcon = ({ isRecording = false }: { isRecording?: boolean }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={isRecording ? 'recording-pulse' : ''}
  >
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    <line x1="12" y1="19" x2="12" y2="23" />
    <line x1="8" y1="23" x2="16" y2="23" />
  </svg>
);

const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
  </svg>
);

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

const BookIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const HeartIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const PillIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
    <path d="m8.5 8.5 7 7" />
  </svg>
);

const TestTubeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2" />
    <path d="M8.5 2h7" />
    <path d="M14.5 16h-5" />
  </svg>
);

const LightbulbIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 18h6" />
    <path d="M10 22h4" />
    <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
  </svg>
);

const InfoIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4M12 8h.01" />
  </svg>
);

const AlertTriangleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const getQuickActionIcon = (iconName: string) => {
  switch (iconName) {
    case 'stethoscope':
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
          <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
          <circle cx="20" cy="10" r="2" />
        </svg>
      );
    case 'graduation-cap':
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      );
    case 'pills':
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
          <path d="m8.5 8.5 7 7" />
        </svg>
      );
    case 'compare':
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      );
    default:
      return null;
  }
};

// ============================================
// Sub-Components
// ============================================

/**
 * Your Health Context Section - Shows relevant patient data for the selected region
 */
interface YourHealthContextProps {
  healthContext: RegionHealthContext;
  regionName: string;
  isExpanded: boolean;
  onToggle: () => void;
}

const YourHealthContextSection: React.FC<YourHealthContextProps> = ({
  healthContext,
  regionName,
  isExpanded,
  onToggle,
}) => {
  if (healthContext.overallRelevance === 'none') return null;

  const relevanceColors = {
    high: '#10b981',
    medium: '#f59e0b',
    low: '#6b7280',
    none: '#6b7280',
  };

  return (
    <div className="health-context-section">
      <button className="health-context-header" onClick={onToggle}>
        <div className="health-context-title">
          <HeartIcon />
          <span>Your Health Context</span>
          <span
            className="relevance-badge"
            style={{ backgroundColor: relevanceColors[healthContext.overallRelevance] }}
          >
            {healthContext.overallRelevance} relevance
          </span>
        </div>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {isExpanded && (
        <div className="health-context-content">
          <p className="health-context-disclaimer">
            <AlertTriangleIcon />
            This information is shown to personalize your educational experience.
            Always consult your healthcare provider for medical advice.
          </p>

          {healthContext.relevantConditions.length > 0 && (
            <div className="context-group">
              <h4>
                <HeartIcon /> Conditions Related to {regionName}
              </h4>
              <div className="context-items">
                {healthContext.relevantConditions.map(condition => (
                  <div key={condition.conditionId} className="context-item condition">
                    <span className="item-name">{condition.name}</span>
                    {condition.severity && (
                      <span className={`severity-badge ${condition.severity}`}>
                        {condition.severity}
                      </span>
                    )}
                    {condition.status === 'chronic' && (
                      <span className="status-badge chronic">chronic</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {healthContext.relevantMedications.length > 0 && (
            <div className="context-group">
              <h4>
                <PillIcon /> Medications That May Affect {regionName}
              </h4>
              <div className="context-items">
                {healthContext.relevantMedications.map(med => (
                  <div key={med.medicationId} className="context-item medication">
                    <span className="item-name">{med.name}</span>
                    {med.dose && <span className="item-detail">{med.dose}</span>}
                    <span className="item-class">{med.drugClass}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {healthContext.relevantLabs.length > 0 && (
            <div className="context-group">
              <h4>
                <TestTubeIcon /> Relevant Lab Results
              </h4>
              <div className="context-items">
                {healthContext.relevantLabs.map(lab => (
                  <div key={lab.labId} className={`context-item lab ${lab.status}`}>
                    <span className="item-name">{lab.testName}</span>
                    <span className="lab-value">
                      {lab.value} {lab.unit}
                    </span>
                    <span className={`lab-status ${lab.status}`}>
                      {lab.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {healthContext.relevantSymptoms.length > 0 && (
            <div className="context-group">
              <h4>Reported Symptoms in This Area</h4>
              <div className="context-items">
                {healthContext.relevantSymptoms.map(symptom => (
                  <div key={symptom.id} className="context-item symptom">
                    <span className="item-name">{symptom.description}</span>
                    <span className="item-detail">{symptom.bodyLocation}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

/**
 * Educational Modules Section
 */
interface EducationalModulesProps {
  modules: EducationalModule[];
  onSelectModule: (moduleId: string) => void;
}

const EducationalModulesSection: React.FC<EducationalModulesProps> = ({
  modules,
  onSelectModule,
}) => {
  if (modules.length === 0) return null;

  return (
    <div className="educational-modules">
      <h3>
        <BookIcon /> Suggested Learning Modules
      </h3>
      <div className="modules-grid">
        {modules.map(module => (
          <button
            key={module.id}
            className="module-card"
            onClick={() => onSelectModule(module.id)}
          >
            <div className="module-header">
              <span className="module-title">{module.title}</span>
              <span className="module-duration">{module.duration}</span>
            </div>
            <p className="module-description">{module.description}</p>
            <div className="module-footer">
              <span className="module-relevance">{module.relevanceReason}</span>
              <span className="module-complexity">
                Level {module.complexity}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

/**
 * Did You Know Facts Section
 */
interface DidYouKnowProps {
  facts: DidYouKnowFact[];
}

const DidYouKnowSection: React.FC<DidYouKnowProps> = ({ facts }) => {
  if (facts.length === 0) return null;

  return (
    <div className="did-you-know">
      <h3>
        <LightbulbIcon /> Did You Know?
      </h3>
      <div className="facts-list">
        {facts.map((fact, index) => (
          <div key={index} className="fact-card">
            <p className="fact-text">{fact.fact}</p>
            <span className="fact-related">Related to: {fact.relatedTo}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// ============================================
// Main Component
// ============================================

export function AIMedicalEncyclopedia({
  regionId,
  regionName,
  userConditions,
  patientHealthData,
  anatomyChatContext,
  initialComplexity,
  onClose,
  onNavigateToRegion,
}: AIMedicalEncyclopediaProps) {
  // State
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [complexityLevel, setComplexityLevel] = useState<ComplexityLevel>(initialComplexity);
  const [isRecording, setIsRecording] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(true);
  const [ragStats, setRagStats] = useState<{ chunks: number; time: number } | null>(null);
  const [showHealthContext, setShowHealthContext] = useState(true);

  // Refs
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Merge userConditions into patientHealthData for backwards compatibility
  const mergedPatientData = useMemo(() => {
    if (patientHealthData) return patientHealthData;
    if (userConditions && userConditions.length > 0) {
      return {
        conditions: userConditions,
        medications: [],
        labResults: [],
        symptoms: [],
      } as PatientHealthData;
    }
    return undefined;
  }, [patientHealthData, userConditions]);

  // Compute health context for the current region
  const healthContext = useMemo(
    () => getRegionHealthContext(regionId, regionName, mergedPatientData),
    [regionId, regionName, mergedPatientData]
  );

  // Suggested questions based on region and health context
  const suggestedQuestions = useMemo(
    () => generateSuggestedQuestions(regionName, healthContext),
    [regionName, healthContext]
  );

  // Educational modules based on health profile
  const educationalModules = useMemo(
    () => generateEducationalModules(regionName, healthContext, complexityLevel),
    [regionName, healthContext, complexityLevel]
  );

  // Did you know facts
  const didYouKnowFacts = useMemo(
    () => generateDidYouKnowFacts(regionName, healthContext),
    [regionName, healthContext]
  );

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Send message handler
  const sendMessage = useCallback(async (messageText?: string) => {
    const text = messageText || input.trim();
    if (!text || isLoading) return;

    setInput('');
    setShowQuickActions(false);

    const userMessage: ChatMessage = {
      id: generateMessageId(),
      role: 'user',
      content: text,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const systemPrompt = buildSystemPrompt(
        regionId,
        regionName,
        complexityLevel,
        healthContext,
        mergedPatientData,
        anatomyChatContext
      );

      // Build message history for context
      const chatMessages = messages.map(m => ({
        role: m.role,
        content: m.content,
      }));
      chatMessages.push({ role: 'user', content: text });

      // Use RAG-enhanced chat
      const response = await invoke<AIChatRAGResponse>('ai_chat_rag', {
        request: {
          messages: chatMessages,
          systemPrompt,
          temperature: 0.7,
          ragOptions: {
            structureName: regionName,
            complexityLevel: complexityLevel,
            maxTokens: 4000,
          },
        },
      });

      // Extract diagram references from response (look for structure names)
      const diagramReferences: DiagramReference[] = [];
      const structureMatches = response.content.match(/\b(heart|lung|liver|kidney|brain|stomach|intestine|spine|muscle)\b/gi);
      if (structureMatches) {
        const uniqueStructures = [...new Set(structureMatches.map(s => s.toLowerCase()))];
        uniqueStructures.slice(0, 3).forEach(structure => {
          diagramReferences.push({
            id: structure,
            name: structure.charAt(0).toUpperCase() + structure.slice(1),
            type: 'anatomy',
          });
        });
      }

      // Determine personalized context for the message
      let personalizedContext: PersonalizedMessageContext | undefined;
      if (healthContext && healthContext.overallRelevance !== 'none') {
        personalizedContext = {
          relatedConditions: healthContext.relevantConditions.map(c => c.name),
          relatedMedications: healthContext.relevantMedications.map(m => m.name),
          relatedLabs: healthContext.relevantLabs.map(l => l.testName),
          personalRelevance: healthContext.overallRelevance as 'high' | 'medium' | 'low',
        };
      }

      const assistantMessage: ChatMessage = {
        id: generateMessageId(),
        role: 'assistant',
        content: response.content,
        timestamp: new Date(),
        citations: response.citations,
        diagramReferences: diagramReferences.length > 0 ? diagramReferences : undefined,
        complexityLevel: complexityLevel,
        personalizedContext,
      };

      setMessages(prev => [...prev, assistantMessage]);

      if (response.ragContext) {
        setRagStats({
          chunks: response.ragContext.chunksUsed,
          time: response.ragContext.processingTimeMs,
        });
      }
    } catch (err) {
      console.error('Encyclopedia chat error:', err);
      const errorMessage: ChatMessage = {
        id: generateMessageId(),
        role: 'assistant',
        content: 'I apologize, but I encountered an error processing your request. Please try again.',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading, messages, regionId, regionName, complexityLevel, healthContext, mergedPatientData]);

  // Handle keyboard shortcuts
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Handle voice input (placeholder - integrates with VoiceContext)
  const handleVoiceInput = useCallback(() => {
    setIsRecording(!isRecording);
    // In production, this would integrate with the VoiceContext
    // For now, toggle the recording state
    if (isRecording) {
      // Would call stopRecording() from VoiceContext
      setIsRecording(false);
    } else {
      // Would call startRecording() from VoiceContext
      setIsRecording(true);
      // Simulate voice input ending after 3 seconds
      setTimeout(() => setIsRecording(false), 3000);
    }
  }, [isRecording]);

  // Handle quick action click
  const handleQuickAction = (action: QuickAction) => {
    sendMessage(`${action.prompt} (About the ${regionName})`);
  };

  // Handle suggested question click
  const handleSuggestedQuestion = (question: string) => {
    sendMessage(question);
  };

  // Handle diagram reference click
  const handleDiagramClick = (ref: DiagramReference) => {
    onNavigateToRegion(ref.id);
  };

  // Handle module selection
  const handleModuleSelect = (moduleId: string) => {
    const module = educationalModules.find(m => m.id === moduleId);
    if (module) {
      sendMessage(`Please teach me about: ${module.title}. ${module.description}`);
    }
  };

  return (
    <div className="ai-medical-encyclopedia">
      {/* Header */}
      <header className="encyclopedia-header">
        <div className="header-left">
          <div className="header-icon">
            <BrainBookIcon />
          </div>
          <div className="header-text">
            <h1>AI Medical Encyclopedia</h1>
            <span className="header-subtitle">Evidence-based medical education</span>
          </div>
        </div>

        <div className="header-center">
          <div className="region-badge">
            <span className="region-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            </span>
            <span className="region-name">{regionName}</span>
          </div>
        </div>

        <div className="header-right">
          <div className="complexity-selector">
            <label>Complexity:</label>
            <div className="complexity-buttons">
              {([1, 2, 3, 4, 5] as ComplexityLevel[]).map(level => {
                const def = COMPLEXITY_LEVELS[level];
                return (
                  <button
                    key={level}
                    className={`complexity-btn ${complexityLevel === level ? 'active' : ''}`}
                    onClick={() => setComplexityLevel(level)}
                    title={`${def.name}: ${def.description}`}
                    style={{ '--level-color': def.color } as React.CSSProperties}
                  >
                    {COMPLEXITY_LABELS[level]}
                  </button>
                );
              })}
            </div>
          </div>

          <button className="close-btn" onClick={onClose} title="Close">
            <CloseIcon />
          </button>
        </div>
      </header>

      {/* Disclaimer */}
      <div className="encyclopedia-disclaimer">
        <AlertTriangleIcon />
        <span>Educational information only - not medical advice. Consult healthcare professionals for medical decisions.</span>
      </div>

      {/* Main Chat Area */}
      <div className="encyclopedia-main">
        <div className="chat-container">
          {/* Welcome message */}
          {messages.length === 0 && (
            <div className="welcome-section">
              <div className="welcome-icon">
                <BrainBookIcon />
              </div>
              <h2>Welcome to the AI Medical Encyclopedia</h2>
              <p>
                Ask me anything about the <strong>{regionName}</strong> - from basic anatomy to
                clinical correlations. I'll adjust my explanations to match your selected
                complexity level.
              </p>

              {/* Your Health Context Section */}
              {healthContext && healthContext.overallRelevance !== 'none' && (
                <YourHealthContextSection
                  healthContext={healthContext}
                  regionName={regionName}
                  isExpanded={showHealthContext}
                  onToggle={() => setShowHealthContext(!showHealthContext)}
                />
              )}

              {/* Did You Know Facts */}
              {didYouKnowFacts.length > 0 && (
                <DidYouKnowSection facts={didYouKnowFacts} />
              )}

              {/* Educational Modules */}
              {educationalModules.length > 0 && (
                <EducationalModulesSection
                  modules={educationalModules}
                  onSelectModule={handleModuleSelect}
                />
              )}

              {/* Suggested Questions */}
              <div className="suggested-questions">
                <h3>Suggested Questions</h3>
                <div className="questions-grid">
                  {suggestedQuestions.map((question, i) => (
                    <button
                      key={i}
                      className={`suggested-question-btn ${question.includes('Educational') || question.includes('education') ? 'personalized' : ''}`}
                      onClick={() => handleSuggestedQuestion(question)}
                      disabled={isLoading}
                    >
                      <span className="question-icon">
                        {question.includes('Educational') || question.includes('education') ? (
                          <HeartIcon />
                        ) : (
                          '?'
                        )}
                      </span>
                      <span className="question-text">{question}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Messages */}
          <div className="messages-list">
            {messages.map(message => (
              <div key={message.id} className={`message ${message.role}`}>
                {message.role === 'assistant' && (
                  <div className="message-avatar">
                    <BrainBookIcon />
                  </div>
                )}

                <div className="message-body">
                  {/* Complexity indicator for assistant messages */}
                  {message.role === 'assistant' && message.complexityLevel && (
                    <div
                      className="message-complexity"
                      style={{
                        '--level-color': COMPLEXITY_LEVELS[message.complexityLevel].color,
                      } as React.CSSProperties}
                    >
                      Level {message.complexityLevel}: {COMPLEXITY_LEVELS[message.complexityLevel].name}
                    </div>
                  )}

                  {/* Personalized context indicator */}
                  {message.role === 'assistant' && message.personalizedContext && (
                    <div className="personalized-indicator">
                      <HeartIcon />
                      <span>Personalized for your health profile</span>
                    </div>
                  )}

                  <div className="message-content">{message.content}</div>

                  {/* What This Means For You - for personalized messages */}
                  {message.role === 'assistant' && message.personalizedContext &&
                   message.personalizedContext.personalRelevance === 'high' && (
                    <div className="what-this-means">
                      <div className="what-this-means-header">
                        <InfoIcon />
                        <span>What This Means For Your Learning</span>
                      </div>
                      <p className="what-this-means-content">
                        This information relates to your health context. The content above has been
                        tailored to help you better understand the {regionName} in relation to your
                        conditions ({message.personalizedContext.relatedConditions.join(', ') || 'your health profile'}).
                        <br /><br />
                        <strong>Remember:</strong> This is educational content. For specific medical
                        advice about your condition, please consult your healthcare provider.
                      </p>
                    </div>
                  )}

                  {/* Diagram References */}
                  {message.diagramReferences && message.diagramReferences.length > 0 && (
                    <div className="diagram-references">
                      <div className="diagrams-header">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <path d="M21 15l-5-5L5 21" />
                        </svg>
                        <span>View in 3D Model</span>
                      </div>
                      <div className="diagram-chips">
                        {message.diagramReferences.map(ref => (
                          <button
                            key={ref.id}
                            className="diagram-chip"
                            onClick={() => handleDiagramClick(ref)}
                          >
                            {ref.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Citations */}
                  {message.citations && message.citations.length > 0 && (
                    <div className="message-citations">
                      <div className="citations-header">
                        <BookIcon />
                        <span>Sources</span>
                      </div>
                      <div className="citations-list">
                        {message.citations.map(citation => (
                          <a
                            key={citation.index}
                            href={citation.url || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="citation-link"
                            onClick={e => !citation.url && e.preventDefault()}
                          >
                            <span className="citation-index">[{citation.index}]</span>
                            <span className="citation-source">{citation.source}</span>
                            {citation.section && (
                              <span className="citation-section">{citation.section}</span>
                            )}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {message.role === 'user' && (
                  <div className="message-avatar user">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                )}
              </div>
            ))}

            {/* Loading indicator */}
            {isLoading && (
              <div className="message assistant loading">
                <div className="message-avatar">
                  <BrainBookIcon />
                </div>
                <div className="message-body">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Quick Actions Sidebar */}
        {showQuickActions && messages.length > 0 && (
          <div className="quick-actions-sidebar">
            <h3>Quick Actions</h3>
            <div className="quick-actions-list">
              {QUICK_ACTIONS.map(action => (
                <button
                  key={action.id}
                  className="quick-action-btn"
                  onClick={() => handleQuickAction(action)}
                  disabled={isLoading}
                >
                  <span className="action-icon">{getQuickActionIcon(action.icon)}</span>
                  <span className="action-label">{action.label}</span>
                </button>
              ))}
            </div>

            {/* Questions to Ask Your Doctor */}
            {healthContext && healthContext.overallRelevance !== 'none' && (
              <div className="doctor-questions">
                <h4>
                  <InfoIcon /> Questions for Your Doctor
                </h4>
                <p className="doctor-questions-intro">
                  Consider asking your healthcare provider:
                </p>
                <ul className="doctor-questions-list">
                  {healthContext.relevantConditions.length > 0 && (
                    <li>How does my {healthContext.relevantConditions[0].name} affect my {regionName}?</li>
                  )}
                  {healthContext.relevantMedications.length > 0 && (
                    <li>Are there any effects of {healthContext.relevantMedications[0].name} I should watch for?</li>
                  )}
                  <li>What signs or symptoms should I report to you?</li>
                </ul>
              </div>
            )}

            {/* RAG Stats */}
            {ragStats && (
              <div className="rag-stats">
                <span className="stat">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14,2 14,8 20,8" />
                  </svg>
                  {ragStats.chunks} sources
                </span>
                <span className="stat">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12,6 12,12 16,14" />
                  </svg>
                  {ragStats.time}ms
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="encyclopedia-input">
        <button
          className={`voice-btn ${isRecording ? 'recording' : ''}`}
          onClick={handleVoiceInput}
          title={isRecording ? 'Stop recording' : 'Press to speak'}
          disabled={isLoading}
        >
          <MicrophoneIcon isRecording={isRecording} />
          {isRecording && <span className="recording-badge">Recording...</span>}
        </button>

        <div className="text-input-wrapper">
          <textarea
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={`Ask about the ${regionName}...`}
            disabled={isLoading}
            rows={1}
          />
        </div>

        <button
          className="send-btn"
          onClick={() => sendMessage()}
          disabled={!input.trim() || isLoading}
          title="Send message"
        >
          <SendIcon />
        </button>
      </div>

      <style>{`
        .ai-medical-encyclopedia {
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
          background: #0d0d1a;
          color: #e0e0e0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, sans-serif;
          overflow: hidden;
        }

        /* Header */
        .encyclopedia-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 24px;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          border-bottom: 1px solid #2a2a4a;
          gap: 20px;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .header-icon {
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, #4a9eff 0%, #a855f7 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
        }

        .header-text h1 {
          margin: 0;
          font-size: 20px;
          font-weight: 600;
          color: #fff;
        }

        .header-subtitle {
          font-size: 12px;
          color: #888;
        }

        .header-center {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        .region-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(74, 158, 255, 0.15);
          border: 1px solid rgba(74, 158, 255, 0.3);
          border-radius: 20px;
          color: #4a9eff;
          font-weight: 500;
        }

        .region-icon {
          display: flex;
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .complexity-selector {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .complexity-selector label {
          font-size: 12px;
          color: #888;
        }

        .complexity-buttons {
          display: flex;
          gap: 4px;
        }

        .complexity-btn {
          padding: 6px 10px;
          background: #1a1a2e;
          border: 1px solid #333;
          border-radius: 6px;
          color: #888;
          font-size: 11px;
          cursor: pointer;
          transition: all 0.15s;
        }

        .complexity-btn:hover {
          background: #252538;
          color: #ccc;
        }

        .complexity-btn.active {
          background: var(--level-color);
          color: #fff;
          border-color: var(--level-color);
        }

        .close-btn {
          width: 36px;
          height: 36px;
          background: #252538;
          border: 1px solid #333;
          border-radius: 8px;
          color: #888;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.15s;
        }

        .close-btn:hover {
          background: #333;
          color: #fff;
        }

        /* Disclaimer */
        .encyclopedia-disclaimer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(255, 193, 7, 0.1);
          color: #ffc107;
          font-size: 12px;
          border-bottom: 1px solid rgba(255, 193, 7, 0.2);
        }

        /* Main Area */
        .encyclopedia-main {
          flex: 1;
          display: flex;
          overflow: hidden;
        }

        .chat-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        /* Welcome Section */
        .welcome-section {
          padding: 40px;
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
          overflow-y: auto;
        }

        .welcome-icon {
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, #4a9eff 0%, #a855f7 100%);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          color: #fff;
        }

        .welcome-icon svg {
          width: 32px;
          height: 32px;
        }

        .welcome-section h2 {
          margin: 0 0 12px 0;
          font-size: 24px;
          color: #fff;
        }

        .welcome-section p {
          margin: 0 0 24px 0;
          color: #888;
          line-height: 1.6;
        }

        .welcome-section strong {
          color: #4a9eff;
        }

        /* Health Context Section */
        .health-context-section {
          margin-bottom: 24px;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: 12px;
          overflow: hidden;
          text-align: left;
        }

        .health-context-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 16px;
          background: transparent;
          border: none;
          color: #10b981;
          cursor: pointer;
          transition: background 0.15s;
        }

        .health-context-header:hover {
          background: rgba(16, 185, 129, 0.1);
        }

        .health-context-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
        }

        .relevance-badge {
          padding: 2px 8px;
          border-radius: 10px;
          font-size: 10px;
          color: #fff;
          text-transform: uppercase;
          font-weight: 600;
        }

        .health-context-content {
          padding: 0 16px 16px;
        }

        .health-context-disclaimer {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          padding: 12px;
          background: rgba(255, 193, 7, 0.1);
          border-radius: 8px;
          font-size: 12px;
          color: #ffc107;
          margin-bottom: 16px;
        }

        .context-group {
          margin-bottom: 16px;
        }

        .context-group h4 {
          display: flex;
          align-items: center;
          gap: 6px;
          margin: 0 0 8px 0;
          font-size: 13px;
          color: #ccc;
        }

        .context-items {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .context-item {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          background: #1a1a2e;
          border-radius: 8px;
          font-size: 13px;
        }

        .context-item.condition {
          border-left: 3px solid #ef4444;
        }

        .context-item.medication {
          border-left: 3px solid #8b5cf6;
        }

        .context-item.lab {
          border-left: 3px solid #3b82f6;
        }

        .context-item.lab.high,
        .context-item.lab.critical {
          border-left-color: #ef4444;
        }

        .context-item.lab.low {
          border-left-color: #f59e0b;
        }

        .context-item.symptom {
          border-left: 3px solid #f59e0b;
        }

        .item-name {
          color: #fff;
          font-weight: 500;
        }

        .item-detail,
        .item-class {
          color: #888;
          font-size: 11px;
        }

        .severity-badge,
        .status-badge {
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 10px;
          text-transform: uppercase;
        }

        .severity-badge.mild {
          background: rgba(16, 185, 129, 0.2);
          color: #10b981;
        }

        .severity-badge.moderate {
          background: rgba(245, 158, 11, 0.2);
          color: #f59e0b;
        }

        .severity-badge.severe {
          background: rgba(239, 68, 68, 0.2);
          color: #ef4444;
        }

        .status-badge.chronic {
          background: rgba(139, 92, 246, 0.2);
          color: #8b5cf6;
        }

        .lab-value {
          color: #ccc;
          font-family: monospace;
        }

        .lab-status {
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 10px;
          text-transform: uppercase;
        }

        .lab-status.normal {
          background: rgba(16, 185, 129, 0.2);
          color: #10b981;
        }

        .lab-status.high,
        .lab-status.critical {
          background: rgba(239, 68, 68, 0.2);
          color: #ef4444;
        }

        .lab-status.low {
          background: rgba(245, 158, 11, 0.2);
          color: #f59e0b;
        }

        /* Did You Know Section */
        .did-you-know {
          margin-bottom: 24px;
          text-align: left;
        }

        .did-you-know h3 {
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 0 0 12px 0;
          font-size: 14px;
          color: #f59e0b;
        }

        .facts-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .fact-card {
          padding: 12px 16px;
          background: rgba(245, 158, 11, 0.1);
          border: 1px solid rgba(245, 158, 11, 0.2);
          border-radius: 8px;
        }

        .fact-text {
          margin: 0 0 8px 0;
          font-size: 13px;
          color: #ccc;
          line-height: 1.5;
        }

        .fact-related {
          font-size: 11px;
          color: #888;
        }

        /* Educational Modules Section */
        .educational-modules {
          margin-bottom: 24px;
          text-align: left;
        }

        .educational-modules h3 {
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 0 0 12px 0;
          font-size: 14px;
          color: #4a9eff;
        }

        .modules-grid {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .module-card {
          padding: 14px 16px;
          background: #1a1a2e;
          border: 1px solid #2a2a4a;
          border-radius: 10px;
          text-align: left;
          cursor: pointer;
          transition: all 0.15s;
        }

        .module-card:hover {
          background: #252538;
          border-color: #4a9eff;
        }

        .module-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 6px;
        }

        .module-title {
          font-size: 14px;
          font-weight: 600;
          color: #fff;
        }

        .module-duration {
          font-size: 11px;
          color: #888;
        }

        .module-description {
          margin: 0 0 8px 0;
          font-size: 12px;
          color: #888;
          line-height: 1.4;
        }

        .module-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .module-relevance {
          font-size: 11px;
          color: #4a9eff;
        }

        .module-complexity {
          padding: 2px 8px;
          background: rgba(74, 158, 255, 0.15);
          border-radius: 10px;
          font-size: 10px;
          color: #4a9eff;
        }

        /* Suggested Questions */
        .suggested-questions {
          text-align: left;
        }

        .suggested-questions h3 {
          margin: 0 0 16px 0;
          font-size: 14px;
          color: #888;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .questions-grid {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .suggested-question-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          background: #1a1a2e;
          border: 1px solid #2a2a4a;
          border-radius: 10px;
          color: #ccc;
          cursor: pointer;
          text-align: left;
          transition: all 0.15s;
        }

        .suggested-question-btn:hover:not(:disabled) {
          background: #252538;
          border-color: #4a9eff;
          color: #fff;
        }

        .suggested-question-btn.personalized {
          border-color: rgba(16, 185, 129, 0.3);
        }

        .suggested-question-btn.personalized:hover:not(:disabled) {
          border-color: #10b981;
        }

        .suggested-question-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .question-icon {
          width: 28px;
          height: 28px;
          background: rgba(74, 158, 255, 0.15);
          color: #4a9eff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          flex-shrink: 0;
        }

        .suggested-question-btn.personalized .question-icon {
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
        }

        .question-text {
          font-size: 14px;
          line-height: 1.4;
        }

        /* Messages */
        .messages-list {
          flex: 1;
          overflow-y: auto;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .message {
          display: flex;
          gap: 12px;
          max-width: 85%;
          animation: messageIn 0.2s ease-out;
        }

        @keyframes messageIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .message.user {
          align-self: flex-end;
          flex-direction: row-reverse;
        }

        .message-avatar {
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, #4a9eff 0%, #a855f7 100%);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          flex-shrink: 0;
        }

        .message-avatar.user {
          background: #4a9eff;
        }

        .message-avatar svg {
          width: 18px;
          height: 18px;
        }

        .message-body {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .message-complexity {
          font-size: 10px;
          color: var(--level-color);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .personalized-indicator {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          background: rgba(16, 185, 129, 0.15);
          border-radius: 12px;
          font-size: 11px;
          color: #10b981;
          width: fit-content;
        }

        .message-content {
          padding: 14px 18px;
          border-radius: 16px;
          font-size: 14px;
          line-height: 1.6;
          white-space: pre-wrap;
        }

        .message.assistant .message-content {
          background: #1a1a2e;
          border: 1px solid #2a2a4a;
          border-top-left-radius: 4px;
        }

        .message.user .message-content {
          background: linear-gradient(135deg, #4a9eff 0%, #3a8eef 100%);
          color: #fff;
          border-top-right-radius: 4px;
        }

        /* What This Means For You */
        .what-this-means {
          padding: 12px 16px;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.2);
          border-radius: 10px;
        }

        .what-this-means-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
          font-size: 12px;
          font-weight: 600;
          color: #10b981;
        }

        .what-this-means-content {
          margin: 0;
          font-size: 13px;
          color: #a0a0b8;
          line-height: 1.5;
        }

        /* Diagram References */
        .diagram-references {
          padding: 10px 14px;
          background: rgba(74, 158, 255, 0.1);
          border: 1px solid rgba(74, 158, 255, 0.2);
          border-radius: 8px;
        }

        .diagrams-header {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          color: #4a9eff;
          margin-bottom: 8px;
        }

        .diagram-chips {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }

        .diagram-chip {
          padding: 4px 10px;
          background: rgba(74, 158, 255, 0.2);
          border: none;
          border-radius: 12px;
          color: #4a9eff;
          font-size: 12px;
          cursor: pointer;
          transition: all 0.15s;
        }

        .diagram-chip:hover {
          background: #4a9eff;
          color: #fff;
        }

        /* Citations */
        .message-citations {
          padding: 12px 14px;
          background: #151520;
          border: 1px solid #2a2a4a;
          border-radius: 8px;
        }

        .citations-header {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          color: #888;
          margin-bottom: 10px;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .citations-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .citation-link {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 6px;
          padding: 8px 10px;
          background: #1a1a2e;
          border-radius: 6px;
          text-decoration: none;
          transition: all 0.15s;
        }

        .citation-link:hover {
          background: #252538;
        }

        .citation-index {
          color: #4a9eff;
          font-weight: 600;
          font-size: 12px;
        }

        .citation-source {
          color: #ccc;
          font-size: 12px;
        }

        .citation-section {
          color: #666;
          font-size: 11px;
          width: 100%;
          margin-top: 2px;
        }

        /* Loading */
        .message.loading .typing-indicator {
          display: flex;
          gap: 4px;
          padding: 14px 18px;
          background: #1a1a2e;
          border: 1px solid #2a2a4a;
          border-radius: 16px;
          border-top-left-radius: 4px;
        }

        .typing-indicator span {
          width: 8px;
          height: 8px;
          background: #4a9eff;
          border-radius: 50%;
          animation: typing 1.4s infinite ease-in-out;
        }

        .typing-indicator span:nth-child(1) { animation-delay: -0.32s; }
        .typing-indicator span:nth-child(2) { animation-delay: -0.16s; }

        @keyframes typing {
          0%, 80%, 100% { transform: scale(0.5); opacity: 0.5; }
          40% { transform: scale(1); opacity: 1; }
        }

        /* Quick Actions Sidebar */
        .quick-actions-sidebar {
          width: 260px;
          padding: 20px;
          background: #151520;
          border-left: 1px solid #2a2a4a;
          display: flex;
          flex-direction: column;
          gap: 16px;
          overflow-y: auto;
        }

        .quick-actions-sidebar h3 {
          margin: 0;
          font-size: 12px;
          color: #888;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .quick-actions-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .quick-action-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 14px;
          background: #1a1a2e;
          border: 1px solid #2a2a4a;
          border-radius: 8px;
          color: #ccc;
          cursor: pointer;
          text-align: left;
          transition: all 0.15s;
        }

        .quick-action-btn:hover:not(:disabled) {
          background: #252538;
          border-color: #4a9eff;
          color: #fff;
        }

        .quick-action-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .action-icon {
          width: 28px;
          height: 28px;
          background: rgba(74, 158, 255, 0.15);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #4a9eff;
        }

        .action-label {
          font-size: 13px;
          line-height: 1.3;
        }

        /* Doctor Questions */
        .doctor-questions {
          padding: 14px;
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 10px;
        }

        .doctor-questions h4 {
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 0 0 8px 0;
          font-size: 12px;
          color: #a855f7;
        }

        .doctor-questions-intro {
          margin: 0 0 8px 0;
          font-size: 11px;
          color: #888;
        }

        .doctor-questions-list {
          margin: 0;
          padding-left: 16px;
          font-size: 12px;
          color: #ccc;
          line-height: 1.6;
        }

        .doctor-questions-list li {
          margin-bottom: 4px;
        }

        /* RAG Stats */
        .rag-stats {
          margin-top: auto;
          padding: 12px;
          background: #1a1a2e;
          border-radius: 8px;
          display: flex;
          gap: 16px;
        }

        .rag-stats .stat {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 11px;
          color: #666;
        }

        /* Input Area */
        .encyclopedia-input {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 24px;
          background: #151520;
          border-top: 1px solid #2a2a4a;
        }

        .voice-btn {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #a855f7 0%, #7c3aed 100%);
          border: none;
          border-radius: 50%;
          color: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          transition: all 0.15s;
        }

        .voice-btn:hover:not(:disabled) {
          transform: scale(1.05);
          box-shadow: 0 0 20px rgba(168, 85, 247, 0.4);
        }

        .voice-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .voice-btn.recording {
          animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(168, 85, 247, 0.4); }
          50% { box-shadow: 0 0 0 12px rgba(168, 85, 247, 0); }
        }

        .recording-pulse {
          animation: iconPulse 1s infinite;
        }

        @keyframes iconPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .recording-badge {
          position: absolute;
          top: -8px;
          right: -8px;
          padding: 2px 6px;
          background: #ef4444;
          border-radius: 10px;
          font-size: 9px;
          font-weight: 600;
        }

        .text-input-wrapper {
          flex: 1;
          background: #1a1a2e;
          border: 1px solid #2a2a4a;
          border-radius: 24px;
          overflow: hidden;
          transition: border-color 0.15s;
        }

        .text-input-wrapper:focus-within {
          border-color: #4a9eff;
        }

        .text-input-wrapper textarea {
          width: 100%;
          padding: 14px 20px;
          background: transparent;
          border: none;
          color: #fff;
          font-size: 14px;
          line-height: 1.5;
          resize: none;
          outline: none;
          font-family: inherit;
        }

        .text-input-wrapper textarea::placeholder {
          color: #666;
        }

        .send-btn {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #4a9eff 0%, #3a8eef 100%);
          border: none;
          border-radius: 50%;
          color: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.15s;
        }

        .send-btn:hover:not(:disabled) {
          transform: scale(1.05);
          box-shadow: 0 0 20px rgba(74, 158, 255, 0.4);
        }

        .send-btn:disabled {
          background: #333;
          color: #666;
          cursor: not-allowed;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .quick-actions-sidebar {
            display: none;
          }

          .complexity-buttons {
            display: none;
          }

          .encyclopedia-header {
            flex-wrap: wrap;
            gap: 12px;
          }

          .header-center {
            order: 3;
            flex-basis: 100%;
            justify-content: flex-start;
          }
        }

        @media (max-width: 600px) {
          .encyclopedia-header {
            padding: 12px 16px;
          }

          .header-text h1 {
            font-size: 16px;
          }

          .messages-list {
            padding: 12px;
          }

          .message {
            max-width: 95%;
          }

          .welcome-section {
            padding: 24px 16px;
          }

          .encyclopedia-input {
            padding: 12px 16px;
          }
        }
      `}</style>
    </div>
  );
}

export default AIMedicalEncyclopedia;
