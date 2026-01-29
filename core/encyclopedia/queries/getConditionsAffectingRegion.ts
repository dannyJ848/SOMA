/**
 * Get Conditions Affecting Region
 *
 * Query conditions that affect a specific anatomical region.
 * Uses CONDITION_ANATOMY_MAP to find matches and returns summaries
 * with links to full content.
 */

import { ConditionSummary, AnatomicalRegion, BodySystemId, RegionalContentOptions, ConditionAnatomyMapping } from './types';
import { ComplexityLevel } from '../../content/types';
import { getRegion, findRegionsByKeywords } from './getAnatomyForRegion';
import {
  CONDITION_ANATOMY_MAP,
  getConditionsByRegion,
  getConditionsBySystem,
} from './condition-anatomy-map';

// ============================================
// Condition Content Details
// ============================================

/**
 * Extended condition information for generating summaries
 * This would typically be loaded from condition content files
 */
const CONDITION_DETAILS: Record<string, {
  summary: string;
  keySymptoms: string[];
  severity: 'mild' | 'moderate' | 'severe' | 'variable';
  prevalence: 'common' | 'uncommon' | 'rare';
  icd10?: string;
}> = {
  'coronary-artery-disease': {
    summary: 'Progressive narrowing of coronary arteries due to atherosclerotic plaque buildup, reducing blood flow to the heart muscle.',
    keySymptoms: ['Chest pain (angina)', 'Shortness of breath', 'Fatigue', 'Heart palpitations'],
    severity: 'variable',
    prevalence: 'common',
    icd10: 'I25.1',
  },
  'heart-failure': {
    summary: 'Condition where the heart cannot pump blood effectively to meet the body\'s needs.',
    keySymptoms: ['Dyspnea', 'Peripheral edema', 'Fatigue', 'Orthopnea', 'Paroxysmal nocturnal dyspnea'],
    severity: 'severe',
    prevalence: 'common',
    icd10: 'I50.9',
  },
  'atrial-fibrillation': {
    summary: 'Irregular and often rapid heart rhythm originating from chaotic electrical signals in the atria.',
    keySymptoms: ['Palpitations', 'Fatigue', 'Dizziness', 'Shortness of breath', 'Chest discomfort'],
    severity: 'moderate',
    prevalence: 'common',
    icd10: 'I48.91',
  },
  'hypertension': {
    summary: 'Persistent elevation of blood pressure that can damage blood vessels and organs over time.',
    keySymptoms: ['Usually asymptomatic', 'Headache (severe cases)', 'Visual changes', 'Chest pain'],
    severity: 'variable',
    prevalence: 'common',
    icd10: 'I10',
  },
  'aortic-aneurysm': {
    summary: 'Abnormal bulging of the aortic wall that can lead to rupture if untreated.',
    keySymptoms: ['Often asymptomatic', 'Abdominal or back pain', 'Pulsatile abdominal mass'],
    severity: 'severe',
    prevalence: 'uncommon',
    icd10: 'I71.9',
  },
  'deep-vein-thrombosis': {
    summary: 'Blood clot formation in deep veins, usually in the legs, with risk of pulmonary embolism.',
    keySymptoms: ['Leg swelling', 'Pain', 'Warmth', 'Redness', 'Leg heaviness'],
    severity: 'moderate',
    prevalence: 'common',
    icd10: 'I82.40',
  },
  'peripheral-artery-disease': {
    summary: 'Narrowing of peripheral arteries, usually in the legs, causing reduced blood flow.',
    keySymptoms: ['Claudication', 'Leg pain at rest', 'Non-healing wounds', 'Cold extremities'],
    severity: 'moderate',
    prevalence: 'common',
    icd10: 'I73.9',
  },
  'copd': {
    summary: 'Chronic inflammatory lung disease causing obstructed airflow and breathing difficulties.',
    keySymptoms: ['Chronic cough', 'Dyspnea', 'Wheezing', 'Sputum production', 'Frequent infections'],
    severity: 'severe',
    prevalence: 'common',
    icd10: 'J44.9',
  },
  'asthma': {
    summary: 'Chronic airway disease characterized by inflammation and episodic bronchoconstriction.',
    keySymptoms: ['Wheezing', 'Cough', 'Chest tightness', 'Shortness of breath', 'Nocturnal symptoms'],
    severity: 'variable',
    prevalence: 'common',
    icd10: 'J45.909',
  },
  'pneumonia': {
    summary: 'Infection causing inflammation of the lung alveoli with fluid accumulation.',
    keySymptoms: ['Fever', 'Cough', 'Dyspnea', 'Chest pain', 'Productive sputum'],
    severity: 'variable',
    prevalence: 'common',
    icd10: 'J18.9',
  },
  'gerd': {
    summary: 'Chronic condition where stomach acid flows back into the esophagus, causing irritation.',
    keySymptoms: ['Heartburn', 'Regurgitation', 'Dysphagia', 'Chronic cough', 'Chest pain'],
    severity: 'mild',
    prevalence: 'common',
    icd10: 'K21.0',
  },
  'ibs': {
    summary: 'Functional gastrointestinal disorder characterized by abdominal pain and altered bowel habits.',
    keySymptoms: ['Abdominal pain', 'Bloating', 'Diarrhea or constipation', 'Mucus in stool'],
    severity: 'mild',
    prevalence: 'common',
    icd10: 'K58.9',
  },
  'inflammatory-bowel-disease': {
    summary: 'Chronic inflammatory conditions of the GI tract including Crohn\'s disease and ulcerative colitis.',
    keySymptoms: ['Diarrhea', 'Abdominal pain', 'Bloody stool', 'Weight loss', 'Fatigue'],
    severity: 'moderate',
    prevalence: 'uncommon',
    icd10: 'K50.90',
  },
  'stroke': {
    summary: 'Sudden interruption of blood supply to the brain causing neurological deficits.',
    keySymptoms: ['Sudden weakness', 'Speech difficulty', 'Vision changes', 'Severe headache', 'Confusion'],
    severity: 'severe',
    prevalence: 'common',
    icd10: 'I63.9',
  },
  'migraine': {
    summary: 'Recurrent headache disorder with moderate to severe pain and associated symptoms.',
    keySymptoms: ['Throbbing headache', 'Nausea', 'Photophobia', 'Phonophobia', 'Aura (in some)'],
    severity: 'moderate',
    prevalence: 'common',
    icd10: 'G43.909',
  },
  'tension-headache': {
    summary: 'Most common primary headache characterized by bilateral pressing pain.',
    keySymptoms: ['Bilateral pressure-like pain', 'Mild to moderate intensity', 'Not aggravated by activity'],
    severity: 'mild',
    prevalence: 'common',
    icd10: 'G44.209',
  },
  'osteoarthritis': {
    summary: 'Degenerative joint disease characterized by cartilage breakdown and bone changes.',
    keySymptoms: ['Joint pain', 'Stiffness', 'Reduced range of motion', 'Crepitus', 'Joint swelling'],
    severity: 'moderate',
    prevalence: 'common',
    icd10: 'M19.90',
  },
  'rheumatoid-arthritis': {
    summary: 'Autoimmune inflammatory arthritis causing symmetric joint inflammation and destruction.',
    keySymptoms: ['Morning stiffness', 'Symmetric joint swelling', 'Joint pain', 'Fatigue', 'Deformity'],
    severity: 'moderate',
    prevalence: 'uncommon',
    icd10: 'M06.9',
  },
  'osteoporosis': {
    summary: 'Skeletal disorder characterized by decreased bone density and increased fracture risk.',
    keySymptoms: ['Often asymptomatic', 'Fragility fractures', 'Back pain', 'Height loss', 'Kyphosis'],
    severity: 'moderate',
    prevalence: 'common',
    icd10: 'M81.0',
  },
  'type2-diabetes': {
    summary: 'Metabolic disorder characterized by insulin resistance and elevated blood glucose.',
    keySymptoms: ['Polyuria', 'Polydipsia', 'Fatigue', 'Blurred vision', 'Slow wound healing'],
    severity: 'variable',
    prevalence: 'common',
    icd10: 'E11.9',
  },
  'hypothyroidism': {
    summary: 'Underactive thyroid causing decreased production of thyroid hormones.',
    keySymptoms: ['Fatigue', 'Weight gain', 'Cold intolerance', 'Constipation', 'Dry skin', 'Depression'],
    severity: 'mild',
    prevalence: 'common',
    icd10: 'E03.9',
  },
  'chronic-kidney-disease': {
    summary: 'Progressive loss of kidney function over months to years.',
    keySymptoms: ['Often asymptomatic early', 'Fatigue', 'Edema', 'Nausea', 'Decreased urine output'],
    severity: 'variable',
    prevalence: 'common',
    icd10: 'N18.9',
  },
  'kidney-stones': {
    summary: 'Hard mineral deposits that form in the kidneys and can cause severe pain when passing.',
    keySymptoms: ['Severe flank pain', 'Hematuria', 'Nausea/vomiting', 'Dysuria', 'Urinary urgency'],
    severity: 'moderate',
    prevalence: 'common',
    icd10: 'N20.0',
  },
  'uti': {
    summary: 'Bacterial infection of the urinary tract, most commonly affecting the bladder.',
    keySymptoms: ['Dysuria', 'Urinary frequency', 'Urgency', 'Suprapubic pain', 'Hematuria'],
    severity: 'mild',
    prevalence: 'common',
    icd10: 'N39.0',
  },
  'psoriasis': {
    summary: 'Chronic autoimmune skin condition causing rapid skin cell buildup and scaling.',
    keySymptoms: ['Scaly patches', 'Itching', 'Plaques', 'Nail changes', 'Joint pain (psoriatic arthritis)'],
    severity: 'variable',
    prevalence: 'uncommon',
    icd10: 'L40.9',
  },
  'major-depression': {
    summary: 'Mood disorder characterized by persistent sadness and loss of interest.',
    keySymptoms: ['Depressed mood', 'Anhedonia', 'Sleep changes', 'Fatigue', 'Concentration difficulty'],
    severity: 'moderate',
    prevalence: 'common',
    icd10: 'F32.9',
  },
  'anxiety': {
    summary: 'Anxiety disorders involve excessive worry and fear affecting daily functioning.',
    keySymptoms: ['Excessive worry', 'Restlessness', 'Muscle tension', 'Sleep disturbance', 'Panic attacks'],
    severity: 'moderate',
    prevalence: 'common',
    icd10: 'F41.9',
  },
};

// ============================================
// Helper Functions
// ============================================

/**
 * Get condition details or generate default
 */
function getConditionDetails(conditionId: string, mapping: ConditionAnatomyMapping): {
  summary: string;
  keySymptoms: string[];
  severity: 'mild' | 'moderate' | 'severe' | 'variable';
  prevalence: 'common' | 'uncommon' | 'rare';
  icd10?: string;
} {
  if (CONDITION_DETAILS[conditionId]) {
    return CONDITION_DETAILS[conditionId];
  }

  // Generate default details from mapping
  return {
    summary: `${mapping.conditionName} affects ${mapping.primaryRegions.join(', ')} with ${mapping.anatomicalEffects}`,
    keySymptoms: ['Related symptoms vary by presentation'],
    severity: 'variable',
    prevalence: 'uncommon',
  };
}

/**
 * Get regional involvement description
 */
function getRegionalInvolvement(
  mapping: ConditionAnatomyMapping,
  regionId: string,
  complexityLevel: ComplexityLevel
): string {
  const isPrimary = mapping.primaryRegions.includes(regionId);
  const involvement = isPrimary ? 'primary' : 'secondary';

  if (complexityLevel <= 2) {
    return isPrimary
      ? `This condition mainly affects this area`
      : `This condition can also affect this area`;
  }

  return `${involvement.charAt(0).toUpperCase() + involvement.slice(1)} involvement: ${mapping.anatomicalEffects}`;
}

/**
 * Get content path for condition
 */
function getConditionContentPath(conditionId: string, systems: BodySystemId[]): string {
  const primarySystem = systems[0] || 'conditions';

  // Map system to content path
  const systemPaths: Record<BodySystemId, string> = {
    cardiovascular: 'core/content/conditions/cardiovascular',
    respiratory: 'core/content/conditions/respiratory',
    digestive: 'core/content/conditions/gastrointestinal',
    nervous: 'core/content/conditions/neurological',
    musculoskeletal: 'core/content/conditions/musculoskeletal',
    endocrine: 'core/content/conditions/metabolic',
    integumentary: 'core/content/dermatology/conditions',
    lymphatic: 'core/content/immune/conditions',
    urinary: 'core/content/urology/conditions',
    reproductive: 'core/content/reproductive/conditions',
    immune: 'core/content/immune/conditions',
  };

  return `${systemPaths[primarySystem] || 'core/content/conditions'}/${conditionId}`;
}

// ============================================
// Main Query Function
// ============================================

/**
 * Get conditions affecting a specific anatomical region
 *
 * Uses CONDITION_ANATOMY_MAP to find conditions affecting this region
 * and returns summaries with links to full content.
 *
 * @param regionId - The ID of the anatomical region
 * @param options - Query options
 * @returns Array of condition summaries
 */
export async function getConditionsAffectingRegion(
  regionId: string,
  options: RegionalContentOptions = {}
): Promise<ConditionSummary[]> {
  const {
    complexityLevel = 3,
    maxItemsPerType = 20,
    searchQuery,
  } = options;

  const region = getRegion(regionId);
  if (!region) {
    // Try keyword matching
    const matchingRegions = findRegionsByKeywords([regionId]);
    if (matchingRegions.length === 0) {
      return [];
    }
    return getConditionsAffectingRegion(matchingRegions[0].id, options);
  }

  const results: ConditionSummary[] = [];

  // Get conditions from the map
  const conditionMappings = getConditionsByRegion(regionId);

  for (const mapping of conditionMappings) {
    const details = getConditionDetails(mapping.conditionId, mapping);

    const summary: ConditionSummary = {
      id: mapping.conditionId,
      name: mapping.conditionName,
      summary: details.summary,
      regionalInvolvement: getRegionalInvolvement(mapping, regionId, complexityLevel),
      keySymptoms: details.keySymptoms,
      severity: details.severity,
      prevalence: details.prevalence,
      contentPath: getConditionContentPath(mapping.conditionId, mapping.systems),
      icd10: details.icd10,
    };

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      if (
        !summary.name.toLowerCase().includes(query) &&
        !summary.summary.toLowerCase().includes(query) &&
        !summary.keySymptoms.some((s) => s.toLowerCase().includes(query))
      ) {
        continue;
      }
    }

    results.push(summary);
  }

  // Sort by prevalence (common first) then by severity (severe first)
  const prevalenceOrder = { common: 0, uncommon: 1, rare: 2 };
  const severityOrder = { severe: 0, moderate: 1, variable: 2, mild: 3 };

  results.sort((a, b) => {
    const prevDiff = prevalenceOrder[a.prevalence] - prevalenceOrder[b.prevalence];
    if (prevDiff !== 0) return prevDiff;
    return severityOrder[a.severity] - severityOrder[b.severity];
  });

  return results.slice(0, maxItemsPerType);
}

/**
 * Get conditions by body system
 */
export async function getConditionsForSystem(
  system: BodySystemId,
  options: RegionalContentOptions = {}
): Promise<ConditionSummary[]> {
  const results: ConditionSummary[] = [];
  const conditionMappings = getConditionsBySystem(system);

  for (const mapping of conditionMappings) {
    const details = getConditionDetails(mapping.conditionId, mapping);

    const summary: ConditionSummary = {
      id: mapping.conditionId,
      name: mapping.conditionName,
      summary: details.summary,
      regionalInvolvement: mapping.anatomicalEffects,
      keySymptoms: details.keySymptoms,
      severity: details.severity,
      prevalence: details.prevalence,
      contentPath: getConditionContentPath(mapping.conditionId, mapping.systems),
      icd10: details.icd10,
    };

    // Apply search filter
    if (options.searchQuery) {
      const query = options.searchQuery.toLowerCase();
      if (
        !summary.name.toLowerCase().includes(query) &&
        !summary.summary.toLowerCase().includes(query)
      ) {
        continue;
      }
    }

    // Avoid duplicates
    if (!results.some((r) => r.id === summary.id)) {
      results.push(summary);
    }
  }

  return results.slice(0, options.maxItemsPerType || 20);
}

/**
 * Search conditions across all regions
 */
export async function searchConditions(
  query: string,
  options: RegionalContentOptions = {}
): Promise<ConditionSummary[]> {
  const results: ConditionSummary[] = [];
  const lowerQuery = query.toLowerCase();

  for (const mapping of CONDITION_ANATOMY_MAP) {
    if (
      mapping.conditionName.toLowerCase().includes(lowerQuery) ||
      mapping.anatomicalEffects.toLowerCase().includes(lowerQuery)
    ) {
      const details = getConditionDetails(mapping.conditionId, mapping);

      const summary: ConditionSummary = {
        id: mapping.conditionId,
        name: mapping.conditionName,
        summary: details.summary,
        regionalInvolvement: mapping.anatomicalEffects,
        keySymptoms: details.keySymptoms,
        severity: details.severity,
        prevalence: details.prevalence,
        contentPath: getConditionContentPath(mapping.conditionId, mapping.systems),
        icd10: details.icd10,
      };

      // Avoid duplicates
      if (!results.some((r) => r.id === summary.id)) {
        results.push(summary);
      }
    }
  }

  // Also search in symptoms
  for (const [conditionId, details] of Object.entries(CONDITION_DETAILS)) {
    if (details.keySymptoms.some((s) => s.toLowerCase().includes(lowerQuery))) {
      const mapping = CONDITION_ANATOMY_MAP.find((m) => m.conditionId === conditionId);
      if (mapping && !results.some((r) => r.id === conditionId)) {
        const summary: ConditionSummary = {
          id: conditionId,
          name: mapping.conditionName,
          summary: details.summary,
          regionalInvolvement: mapping.anatomicalEffects,
          keySymptoms: details.keySymptoms,
          severity: details.severity,
          prevalence: details.prevalence,
          contentPath: getConditionContentPath(conditionId, mapping.systems),
          icd10: details.icd10,
        };
        results.push(summary);
      }
    }
  }

  return results.slice(0, options.maxItemsPerType || 20);
}

/**
 * Get most common conditions for a region
 */
export async function getCommonConditionsForRegion(
  regionId: string,
  limit: number = 5
): Promise<ConditionSummary[]> {
  const allConditions = await getConditionsAffectingRegion(regionId, {
    maxItemsPerType: 50,
  });

  // Filter to only common conditions
  return allConditions
    .filter((c) => c.prevalence === 'common')
    .slice(0, limit);
}

/**
 * Get high-severity conditions for a region (red flags)
 */
export async function getSevereConditionsForRegion(
  regionId: string,
  limit: number = 5
): Promise<ConditionSummary[]> {
  const allConditions = await getConditionsAffectingRegion(regionId, {
    maxItemsPerType: 50,
  });

  // Filter to only severe conditions
  return allConditions
    .filter((c) => c.severity === 'severe')
    .slice(0, limit);
}
