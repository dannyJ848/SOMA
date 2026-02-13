/**
 * Get Symptoms in Region
 *
 * Query symptom content from core/symptoms/ and core/content/
 * that relates to a specific anatomical region.
 */

import { SymptomSummary, AnatomicalRegion, BodySystemId, RegionalContentOptions } from './types';
import { ComplexityLevel } from '../../content/types';
import { getRegion, findRegionsByKeywords } from './getAnatomyForRegion';

// ============================================
// Symptom Data by Region
// ============================================

/**
 * Common symptoms organized by anatomical region
 */
const REGION_SYMPTOMS: Record<string, {
  symptoms: Array<{
    id: string;
    name: string;
    description: string;
    commonCauses: string[];
    redFlags?: string[];
    urgencyLevel: 'routine' | 'soon' | 'urgent' | 'emergency';
  }>;
}> = {
  heart: {
    symptoms: [
      {
        id: 'chest-pain-cardiac',
        name: 'Chest pain (cardiac)',
        description: 'Pain or discomfort in the chest that may be related to heart conditions',
        commonCauses: ['Angina', 'Myocardial infarction', 'Pericarditis', 'Aortic dissection'],
        redFlags: ['Crushing chest pain', 'Pain radiating to arm/jaw', 'Shortness of breath', 'Diaphoresis', 'Syncope'],
        urgencyLevel: 'emergency',
      },
      {
        id: 'palpitations',
        name: 'Palpitations',
        description: 'Awareness of heartbeat that may feel rapid, pounding, or irregular',
        commonCauses: ['Arrhythmia', 'Anxiety', 'Caffeine', 'Thyroid disorders', 'Anemia'],
        redFlags: ['Syncope with palpitations', 'Chest pain', 'Severe shortness of breath'],
        urgencyLevel: 'soon',
      },
      {
        id: 'dyspnea-cardiac',
        name: 'Shortness of breath (cardiac)',
        description: 'Difficulty breathing that may be caused by heart conditions',
        commonCauses: ['Heart failure', 'Coronary artery disease', 'Valvular disease', 'Arrhythmia'],
        redFlags: ['Acute onset', 'At rest', 'Lying flat (orthopnea)', 'Waking from sleep (PND)'],
        urgencyLevel: 'urgent',
      },
      {
        id: 'edema-peripheral',
        name: 'Peripheral edema',
        description: 'Swelling in the legs, ankles, or feet',
        commonCauses: ['Heart failure', 'Venous insufficiency', 'DVT', 'Medications', 'Kidney disease'],
        redFlags: ['Unilateral swelling', 'Pain/tenderness', 'Sudden onset'],
        urgencyLevel: 'soon',
      },
    ],
  },
  lungs: {
    symptoms: [
      {
        id: 'dyspnea-respiratory',
        name: 'Shortness of breath (respiratory)',
        description: 'Difficulty breathing related to lung or airway conditions',
        commonCauses: ['Asthma', 'COPD', 'Pneumonia', 'Pulmonary embolism', 'Interstitial lung disease'],
        redFlags: ['Acute severe dyspnea', 'Cyanosis', 'Inability to speak', 'Confusion'],
        urgencyLevel: 'emergency',
      },
      {
        id: 'cough',
        name: 'Cough',
        description: 'Forceful expulsion of air from the lungs',
        commonCauses: ['Viral infection', 'Asthma', 'GERD', 'ACE inhibitor', 'Bronchitis', 'Pneumonia'],
        redFlags: ['Hemoptysis', 'Weight loss', 'Night sweats', 'Prolonged fever'],
        urgencyLevel: 'routine',
      },
      {
        id: 'wheezing',
        name: 'Wheezing',
        description: 'High-pitched whistling sound during breathing',
        commonCauses: ['Asthma', 'COPD', 'Bronchitis', 'Allergic reaction', 'Foreign body'],
        redFlags: ['Severe distress', 'Cyanosis', 'Silent chest', 'Stridor'],
        urgencyLevel: 'urgent',
      },
      {
        id: 'hemoptysis',
        name: 'Hemoptysis',
        description: 'Coughing up blood from the respiratory tract',
        commonCauses: ['Bronchitis', 'Pneumonia', 'Lung cancer', 'Pulmonary embolism', 'TB'],
        redFlags: ['Massive hemoptysis (>500mL)', 'Respiratory distress', 'Hypotension'],
        urgencyLevel: 'emergency',
      },
    ],
  },
  head: {
    symptoms: [
      {
        id: 'headache',
        name: 'Headache',
        description: 'Pain in any part of the head',
        commonCauses: ['Tension headache', 'Migraine', 'Sinusitis', 'Medication overuse', 'Hypertension'],
        redFlags: ['Thunderclap onset', 'Worst headache of life', 'Fever/neck stiffness', 'Neurological deficits', 'New headache >50yo'],
        urgencyLevel: 'routine',
      },
      {
        id: 'dizziness',
        name: 'Dizziness',
        description: 'Sensation of lightheadedness, unsteadiness, or vertigo',
        commonCauses: ['BPPV', 'Vestibular neuritis', 'Orthostatic hypotension', 'Medication side effect', 'Anxiety'],
        redFlags: ['Sudden onset with neurological symptoms', 'Severe unilateral hearing loss', 'Gait ataxia'],
        urgencyLevel: 'soon',
      },
      {
        id: 'vision-changes',
        name: 'Vision changes',
        description: 'Alterations in vision including blurring, loss, or distortion',
        commonCauses: ['Refractive error', 'Cataracts', 'Glaucoma', 'Diabetic retinopathy', 'Migraine'],
        redFlags: ['Sudden vision loss', 'Curtain over vision', 'New floaters/flashes', 'Eye pain'],
        urgencyLevel: 'urgent',
      },
    ],
  },
  brain: {
    symptoms: [
      {
        id: 'confusion',
        name: 'Confusion/Altered mental status',
        description: 'Changes in cognition, awareness, or orientation',
        commonCauses: ['Infection', 'Metabolic disturbance', 'Medication effect', 'Stroke', 'Delirium'],
        redFlags: ['Acute onset', 'Focal neurological signs', 'Fever', 'Head trauma'],
        urgencyLevel: 'emergency',
      },
      {
        id: 'weakness-focal',
        name: 'Focal weakness',
        description: 'Weakness affecting specific body parts',
        commonCauses: ['Stroke', 'TIA', 'Multiple sclerosis', 'Peripheral neuropathy', 'Brain tumor'],
        redFlags: ['Sudden onset', 'Face/arm/speech involvement', 'Headache'],
        urgencyLevel: 'emergency',
      },
      {
        id: 'seizure',
        name: 'Seizure',
        description: 'Episode of abnormal electrical brain activity causing changes in behavior or consciousness',
        commonCauses: ['Epilepsy', 'Metabolic disturbance', 'Medication', 'Brain lesion', 'Withdrawal'],
        redFlags: ['Prolonged seizure >5min', 'Multiple seizures', 'No return to baseline', 'First seizure'],
        urgencyLevel: 'emergency',
      },
    ],
  },
  abdomen: {
    symptoms: [
      {
        id: 'abdominal-pain',
        name: 'Abdominal pain',
        description: 'Pain anywhere between the chest and groin',
        commonCauses: ['Gastritis', 'Gastroenteritis', 'Appendicitis', 'Cholecystitis', 'IBS', 'Constipation'],
        redFlags: ['Rigid abdomen', 'Rebound tenderness', 'Severe pain', 'Hemodynamic instability', 'Fever'],
        urgencyLevel: 'urgent',
      },
      {
        id: 'nausea-vomiting',
        name: 'Nausea and vomiting',
        description: 'Uncomfortable sensation of needing to vomit, with or without actual vomiting',
        commonCauses: ['Gastroenteritis', 'Medication side effect', 'Pregnancy', 'Migraine', 'Bowel obstruction'],
        redFlags: ['Bloody vomitus', 'Severe dehydration', 'Abdominal distension', 'Feculent vomiting'],
        urgencyLevel: 'soon',
      },
      {
        id: 'diarrhea',
        name: 'Diarrhea',
        description: 'Loose or watery stools occurring more frequently than normal',
        commonCauses: ['Viral gastroenteritis', 'Food poisoning', 'Medication', 'IBS', 'IBD', 'Infection'],
        redFlags: ['Bloody diarrhea', 'High fever', 'Severe dehydration', 'Prolonged duration'],
        urgencyLevel: 'routine',
      },
      {
        id: 'constipation',
        name: 'Constipation',
        description: 'Infrequent bowel movements or difficulty passing stool',
        commonCauses: ['Low fiber diet', 'Dehydration', 'Medication', 'Hypothyroidism', 'Obstruction'],
        redFlags: ['Absolute constipation', 'Vomiting', 'Abdominal distension', 'Rectal bleeding'],
        urgencyLevel: 'routine',
      },
    ],
  },
  joints: {
    symptoms: [
      {
        id: 'joint-pain',
        name: 'Joint pain',
        description: 'Pain affecting one or more joints',
        commonCauses: ['Osteoarthritis', 'Rheumatoid arthritis', 'Gout', 'Trauma', 'Infection'],
        redFlags: ['Hot, red, swollen joint', 'Fever', 'Multiple joint involvement', 'Recent procedure'],
        urgencyLevel: 'soon',
      },
      {
        id: 'joint-swelling',
        name: 'Joint swelling',
        description: 'Visible or palpable enlargement of a joint',
        commonCauses: ['Arthritis', 'Injury', 'Gout', 'Infection', 'Bursitis'],
        redFlags: ['Acute monoarticular swelling with fever', 'Severe pain', 'Inability to bear weight'],
        urgencyLevel: 'urgent',
      },
      {
        id: 'stiffness',
        name: 'Joint stiffness',
        description: 'Reduced range of motion or difficulty moving a joint',
        commonCauses: ['Osteoarthritis', 'Rheumatoid arthritis', 'Inactivity', 'Fibromyalgia'],
        redFlags: ['Prolonged morning stiffness >1 hour', 'Progressive weakness'],
        urgencyLevel: 'routine',
      },
    ],
  },
  skin: {
    symptoms: [
      {
        id: 'rash',
        name: 'Rash',
        description: 'Change in skin color, texture, or appearance',
        commonCauses: ['Contact dermatitis', 'Eczema', 'Psoriasis', 'Viral exanthem', 'Drug reaction', 'Infection'],
        redFlags: ['Petechiae/purpura', 'Blistering', 'Mucosal involvement', 'Fever', 'Rapidly spreading'],
        urgencyLevel: 'soon',
      },
      {
        id: 'itching',
        name: 'Pruritus (itching)',
        description: 'Uncomfortable sensation that creates the urge to scratch',
        commonCauses: ['Dry skin', 'Eczema', 'Allergic reaction', 'Liver/kidney disease', 'Medication'],
        redFlags: ['Jaundice', 'Weight loss', 'Generalized without rash'],
        urgencyLevel: 'routine',
      },
    ],
  },
};

// ============================================
// Helper Functions
// ============================================

/**
 * Get symptom description for complexity level
 */
function getSymptomDescription(
  symptom: { description: string; commonCauses: string[] },
  level: ComplexityLevel
): string {
  if (level <= 2) {
    return symptom.description;
  }
  return `${symptom.description}. Common causes include: ${symptom.commonCauses.slice(0, 3).join(', ')}.`;
}

/**
 * Get content path for symptom
 */
function getSymptomContentPath(symptomId: string): string {
  return `core/symptoms/${symptomId}`;
}

// ============================================
// Main Query Function
// ============================================

/**
 * Get symptoms associated with a specific anatomical region
 *
 * @param regionId - The ID of the anatomical region
 * @param options - Query options
 * @returns Array of symptom summaries
 */
export async function getSymptomsInRegion(
  regionId: string,
  options: RegionalContentOptions = {}
): Promise<SymptomSummary[]> {
  const {
    complexityLevel = 3,
    maxItemsPerType = 15,
    searchQuery,
  } = options;

  const region = getRegion(regionId);
  if (!region) {
    // Try keyword matching
    const matchingRegions = findRegionsByKeywords([regionId]);
    if (matchingRegions.length === 0) {
      return [];
    }
    return getSymptomsInRegion(matchingRegions[0].id, options);
  }

  const results: SymptomSummary[] = [];

  // Get region-specific symptoms
  const regionSymptoms = REGION_SYMPTOMS[regionId];

  if (regionSymptoms) {
    for (const symptom of regionSymptoms.symptoms) {
      const summary: SymptomSummary = {
        id: symptom.id,
        name: symptom.name,
        description: getSymptomDescription(symptom, complexityLevel),
        commonCauses: symptom.commonCauses,
        redFlags: complexityLevel >= 3 ? symptom.redFlags : undefined,
        urgencyLevel: symptom.urgencyLevel,
        contentPath: getSymptomContentPath(symptom.id),
      };

      // Apply search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        if (
          !summary.name.toLowerCase().includes(query) &&
          !summary.description.toLowerCase().includes(query) &&
          !summary.commonCauses.some((c) => c.toLowerCase().includes(query))
        ) {
          continue;
        }
      }

      results.push(summary);
    }
  }

  // Sort by urgency (emergency first)
  const urgencyOrder = { emergency: 0, urgent: 1, soon: 2, routine: 3 };
  results.sort((a, b) => urgencyOrder[a.urgencyLevel] - urgencyOrder[b.urgencyLevel]);

  return results.slice(0, maxItemsPerType);
}

/**
 * Get symptoms by urgency level
 */
export async function getSymptomsByUrgency(
  urgencyLevel: 'routine' | 'soon' | 'urgent' | 'emergency',
  options: RegionalContentOptions = {}
): Promise<SymptomSummary[]> {
  const results: SymptomSummary[] = [];

  for (const regionId of Object.keys(REGION_SYMPTOMS)) {
    const regionSymptoms = await getSymptomsInRegion(regionId, options);
    const filtered = regionSymptoms.filter((s) => s.urgencyLevel === urgencyLevel);
    results.push(...filtered);
  }

  // Remove duplicates
  const unique = results.filter(
    (item, index, self) => self.findIndex((t) => t.id === item.id) === index
  );

  return unique.slice(0, options.maxItemsPerType || 20);
}

/**
 * Search symptoms across all regions
 */
export async function searchSymptoms(
  query: string,
  options: RegionalContentOptions = {}
): Promise<SymptomSummary[]> {
  const results: SymptomSummary[] = [];

  for (const regionId of Object.keys(REGION_SYMPTOMS)) {
    const regionSymptoms = await getSymptomsInRegion(regionId, {
      ...options,
      searchQuery: query,
    });
    results.push(...regionSymptoms);
  }

  // Remove duplicates
  const unique = results.filter(
    (item, index, self) => self.findIndex((t) => t.id === item.id) === index
  );

  return unique.slice(0, options.maxItemsPerType || 20);
}

/**
 * Get red flag symptoms for a region
 */
export async function getRedFlagSymptoms(
  regionId: string,
  options: RegionalContentOptions = {}
): Promise<SymptomSummary[]> {
  const allSymptoms = await getSymptomsInRegion(regionId, {
    ...options,
    complexityLevel: 5, // Ensure red flags are included
  });

  return allSymptoms.filter(
    (s) => s.urgencyLevel === 'emergency' || s.urgencyLevel === 'urgent'
  );
}

/**
 * Get symptoms by body system
 */
export async function getSymptomsBySystem(
  system: BodySystemId,
  options: RegionalContentOptions = {}
): Promise<SymptomSummary[]> {
  const results: SymptomSummary[] = [];

  // Map systems to regions
  const systemRegions: Record<BodySystemId, string[]> = {
    cardiovascular: ['heart'],
    respiratory: ['lungs'],
    digestive: ['abdomen'],
    nervous: ['brain', 'head'],
    musculoskeletal: ['joints'],
    endocrine: [],
    integumentary: ['skin'],
    lymphatic: [],
    urinary: [],
    reproductive: [],
    immune: [],
  };

  const regions = systemRegions[system] || [];

  for (const regionId of regions) {
    const regionSymptoms = await getSymptomsInRegion(regionId, options);
    results.push(...regionSymptoms);
  }

  // Remove duplicates
  const unique = results.filter(
    (item, index, self) => self.findIndex((t) => t.id === item.id) === index
  );

  return unique.slice(0, options.maxItemsPerType || 20);
}
