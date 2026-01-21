/**
 * Personalized Health Context Store
 *
 * Functions for personalizing AI educational responses based on
 * user's conditions, medications, lab results, and history.
 * All processing is local - no data leaves the device.
 */

import type {
  UserHealthProfile,
  PersonalizationPreferences,
  PersonalizedContentContext,
  RelevanceMatch,
  RelevanceLevel,
  AIPromptContext,
  PersonalizedResponse,
  RelevanceIndicator,
  UserContextSection,
  LabTrendInterpretation,
  MedicationPersonalizedContext,
  PersonalizationSessionState,
  UserMedication,
  UserLabResult,
} from './types';

/**
 * Default personalization preferences
 */
export const defaultPreferences: PersonalizationPreferences = {
  enabled: true,
  showRelevanceIndicators: true,
  includeConditionContext: true,
  includeMedicationContext: true,
  includeLabContext: true,
  includeFamilyHistoryContext: true,
  includePGxContext: true,
  complexityLevel: 2,
  privacyMode: 'full',
};

/**
 * Topic to condition mapping for relevance detection
 */
const topicConditionMappings: Map<string, string[]> = new Map([
  ['cardiovascular', ['hypertension', 'heart failure', 'coronary artery disease', 'atrial fibrillation', 'cardiomyopathy']],
  ['diabetes', ['type 2 diabetes', 'type 1 diabetes', 'prediabetes', 'metabolic syndrome']],
  ['respiratory', ['asthma', 'copd', 'sleep apnea', 'pulmonary fibrosis']],
  ['renal', ['chronic kidney disease', 'kidney stones', 'nephritis']],
  ['hepatic', ['fatty liver', 'hepatitis', 'cirrhosis']],
  ['thyroid', ['hypothyroidism', 'hyperthyroidism', 'thyroid nodule']],
  ['musculoskeletal', ['osteoarthritis', 'rheumatoid arthritis', 'osteoporosis', 'back pain']],
  ['neurologic', ['migraine', 'epilepsy', 'neuropathy', 'parkinsons']],
  ['gastrointestinal', ['gerd', 'ibs', 'crohns', 'ulcerative colitis', 'peptic ulcer']],
  ['psychiatric', ['depression', 'anxiety', 'bipolar', 'adhd']],
  ['hematologic', ['anemia', 'thrombocytopenia', 'coagulation disorder']],
]);

/**
 * Drug class to condition relevance
 */
const drugClassConditionMappings: Map<string, string[]> = new Map([
  ['antihypertensive', ['hypertension', 'heart failure', 'coronary artery disease']],
  ['statin', ['hyperlipidemia', 'coronary artery disease', 'diabetes']],
  ['antidiabetic', ['type 2 diabetes', 'prediabetes']],
  ['anticoagulant', ['atrial fibrillation', 'dvt', 'pulmonary embolism']],
  ['bronchodilator', ['asthma', 'copd']],
  ['thyroid hormone', ['hypothyroidism']],
  ['antidepressant', ['depression', 'anxiety']],
  ['proton pump inhibitor', ['gerd', 'peptic ulcer']],
  ['nsaid', ['osteoarthritis', 'rheumatoid arthritis', 'pain']],
  ['opioid', ['chronic pain', 'cancer pain']],
]);

/**
 * Lab to organ/condition relevance
 */
const labOrganMappings: Map<string, { organs: string[]; conditions: string[] }> = new Map([
  ['hemoglobin', { organs: ['bone-marrow', 'blood'], conditions: ['anemia', 'polycythemia'] }],
  ['creatinine', { organs: ['kidney'], conditions: ['chronic kidney disease', 'acute kidney injury'] }],
  ['alt', { organs: ['liver'], conditions: ['hepatitis', 'fatty liver', 'liver disease'] }],
  ['ast', { organs: ['liver', 'heart'], conditions: ['hepatitis', 'fatty liver', 'myocardial infarction'] }],
  ['tsh', { organs: ['thyroid', 'pituitary'], conditions: ['hypothyroidism', 'hyperthyroidism'] }],
  ['glucose', { organs: ['pancreas'], conditions: ['diabetes', 'prediabetes'] }],
  ['hba1c', { organs: ['pancreas'], conditions: ['diabetes', 'prediabetes'] }],
  ['ldl', { organs: ['liver', 'cardiovascular'], conditions: ['hyperlipidemia', 'coronary artery disease'] }],
  ['triglycerides', { organs: ['liver'], conditions: ['metabolic syndrome', 'hyperlipidemia'] }],
  ['potassium', { organs: ['kidney', 'heart'], conditions: ['kidney disease', 'arrhythmia'] }],
  ['sodium', { organs: ['kidney'], conditions: ['hyponatremia', 'heart failure'] }],
  ['troponin', { organs: ['heart'], conditions: ['myocardial infarction', 'myocarditis'] }],
  ['bnp', { organs: ['heart'], conditions: ['heart failure'] }],
]);

/**
 * Create empty user health profile
 */
export function createEmptyProfile(): UserHealthProfile {
  return {
    conditions: [],
    medications: [],
    labResults: [],
    familyHistory: [],
    pharmacogenomics: [],
    allergies: [],
    surgeries: [],
    demographics: {},
    lastUpdated: new Date(),
  };
}

/**
 * Create initial session state
 */
export function createInitialSessionState(): PersonalizationSessionState {
  return {
    profile: null,
    preferences: defaultPreferences,
    recentContexts: [],
    isLoaded: false,
  };
}

/**
 * Find relevance matches between topic and user profile
 */
export function findRelevanceMatches(
  topicKeywords: string[],
  profile: UserHealthProfile,
  preferences: PersonalizationPreferences
): RelevanceMatch[] {
  const matches: RelevanceMatch[] = [];

  if (!preferences.enabled) return matches;

  // Check conditions
  if (preferences.includeConditionContext) {
    for (const condition of profile.conditions) {
      const conditionName = condition.name.toLowerCase();
      for (const keyword of topicKeywords) {
        if (conditionName.includes(keyword.toLowerCase()) ||
            keyword.toLowerCase().includes(conditionName)) {
          matches.push({
            matchId: `condition-${condition.conditionId}`,
            category: 'condition',
            matchedItem: condition.name,
            relevanceLevel: 'directly-relevant',
            explanation: `You have ${condition.name}`,
            userContext: `This topic directly relates to your ${condition.name} diagnosis.`,
          });
        }
      }

      // Check topic-condition mappings
      for (const [topic, conditions] of topicConditionMappings) {
        if (topicKeywords.some((k) => k.toLowerCase().includes(topic)) &&
            conditions.some((c) => conditionName.includes(c))) {
          if (!matches.some((m) => m.matchedItem === condition.name)) {
            matches.push({
              matchId: `condition-${condition.conditionId}`,
              category: 'condition',
              matchedItem: condition.name,
              relevanceLevel: 'related',
              explanation: `Related to your ${condition.name}`,
              userContext: `This topic may be relevant to your ${condition.name}.`,
            });
          }
        }
      }
    }
  }

  // Check medications
  if (preferences.includeMedicationContext) {
    for (const medication of profile.medications) {
      const medName = medication.name.toLowerCase();
      const genericName = medication.genericName.toLowerCase();
      const drugClass = medication.drugClass.toLowerCase();

      for (const keyword of topicKeywords) {
        const kwLower = keyword.toLowerCase();
        if (medName.includes(kwLower) || genericName.includes(kwLower) ||
            kwLower.includes(medName) || kwLower.includes(genericName)) {
          matches.push({
            matchId: `medication-${medication.medicationId}`,
            category: 'medication',
            matchedItem: medication.name,
            relevanceLevel: 'directly-relevant',
            explanation: `You take ${medication.name}`,
            userContext: `This topic relates to ${medication.name}, which you take${medication.indication ? ` for ${medication.indication}` : ''}.`,
          });
        }
      }

      // Check drug class relevance
      for (const [dClass, conditions] of drugClassConditionMappings) {
        if (drugClass.includes(dClass)) {
          for (const topicKw of topicKeywords) {
            if (conditions.some((c) => topicKw.toLowerCase().includes(c) || c.includes(topicKw.toLowerCase()))) {
              if (!matches.some((m) => m.matchedItem === medication.name)) {
                matches.push({
                  matchId: `medication-${medication.medicationId}`,
                  category: 'medication',
                  matchedItem: medication.name,
                  relevanceLevel: 'related',
                  explanation: `Your ${medication.name} is a ${medication.drugClass}`,
                  userContext: `This topic may relate to your ${medication.name} (${medication.drugClass}).`,
                });
              }
            }
          }
        }
      }
    }
  }

  // Check lab results
  if (preferences.includeLabContext) {
    for (const lab of profile.labResults) {
      const labName = lab.testName.toLowerCase();

      for (const keyword of topicKeywords) {
        if (labName.includes(keyword.toLowerCase()) ||
            keyword.toLowerCase().includes(labName)) {
          const status = lab.status === 'normal' ? 'normal' : `${lab.status}`;
          matches.push({
            matchId: `lab-${lab.labId}`,
            category: 'lab-result',
            matchedItem: lab.testName,
            relevanceLevel: lab.status !== 'normal' ? 'directly-relevant' : 'related',
            explanation: `Your ${lab.testName} is ${status}`,
            userContext: `Your recent ${lab.testName} was ${lab.value} ${lab.unit} (${status}).`,
          });
        }
      }

      // Check lab-organ mappings
      const labMapping = labOrganMappings.get(labName.split(' ')[0]);
      if (labMapping) {
        for (const keyword of topicKeywords) {
          const kwLower = keyword.toLowerCase();
          if (labMapping.organs.some((o) => kwLower.includes(o)) ||
              labMapping.conditions.some((c) => kwLower.includes(c))) {
            if (!matches.some((m) => m.matchedItem === lab.testName)) {
              matches.push({
                matchId: `lab-${lab.labId}`,
                category: 'lab-result',
                matchedItem: lab.testName,
                relevanceLevel: lab.status !== 'normal' ? 'related' : 'general-interest',
                explanation: `Your ${lab.testName} reflects this organ/system`,
                userContext: `Your ${lab.testName} level may be relevant to this topic.`,
              });
            }
          }
        }
      }
    }
  }

  // Check family history
  if (preferences.includeFamilyHistoryContext) {
    for (const history of profile.familyHistory) {
      const conditionName = history.condition.toLowerCase();
      for (const keyword of topicKeywords) {
        if (conditionName.includes(keyword.toLowerCase()) ||
            keyword.toLowerCase().includes(conditionName)) {
          matches.push({
            matchId: `family-${history.condition}`,
            category: 'family-history',
            matchedItem: history.condition,
            relevanceLevel: 'related',
            explanation: `Family history of ${history.condition}`,
            userContext: `You have a family history of ${history.condition} (${history.relatives.join(', ')}).`,
          });
        }
      }
    }
  }

  // Check pharmacogenomics
  if (preferences.includePGxContext) {
    for (const pgx of profile.pharmacogenomics) {
      for (const drug of pgx.affectedDrugs) {
        for (const keyword of topicKeywords) {
          if (drug.toLowerCase().includes(keyword.toLowerCase()) ||
              keyword.toLowerCase().includes(drug.toLowerCase())) {
            matches.push({
              matchId: `pgx-${pgx.gene}-${drug}`,
              category: 'pharmacogenomics',
              matchedItem: `${pgx.gene} variant`,
              relevanceLevel: 'directly-relevant',
              explanation: `Your ${pgx.gene} affects ${drug} metabolism`,
              userContext: `Your ${pgx.gene} ${pgx.variant} variant makes you a ${pgx.phenotype} of ${drug}.`,
            });
          }
        }
      }
    }
  }

  return matches;
}

/**
 * Determine overall relevance level
 */
export function determineOverallRelevance(matches: RelevanceMatch[]): RelevanceLevel {
  if (matches.some((m) => m.relevanceLevel === 'directly-relevant')) {
    return 'directly-relevant';
  }
  if (matches.some((m) => m.relevanceLevel === 'related')) {
    return 'related';
  }
  if (matches.some((m) => m.relevanceLevel === 'general-interest')) {
    return 'general-interest';
  }
  return 'not-relevant';
}

/**
 * Create personalized content context
 */
export function createPersonalizedContext(
  topicId: string,
  topicName: string,
  topicKeywords: string[],
  profile: UserHealthProfile,
  preferences: PersonalizationPreferences
): PersonalizedContentContext {
  const matches = findRelevanceMatches(topicKeywords, profile, preferences);
  const overallRelevance = determineOverallRelevance(matches);

  // Generate personalized explanation
  let explanation = '';
  if (overallRelevance === 'directly-relevant') {
    explanation = `This topic is directly relevant to your health profile.`;
  } else if (overallRelevance === 'related') {
    explanation = `This topic may be relevant based on your health history.`;
  } else {
    explanation = `This is general educational content.`;
  }

  // Extract user-specific notes
  const userNotes: string[] = matches
    .filter((m) => m.relevanceLevel !== 'not-relevant')
    .map((m) => m.userContext);

  return {
    topicId,
    topicName,
    relevanceMatches: matches,
    overallRelevance,
    personalizedExplanation: explanation,
    userSpecificNotes: userNotes,
    relatedUserConditions: matches
      .filter((m) => m.category === 'condition')
      .map((m) => m.matchedItem),
    relatedUserMedications: matches
      .filter((m) => m.category === 'medication')
      .map((m) => m.matchedItem),
    relatedUserLabs: matches
      .filter((m) => m.category === 'lab-result')
      .map((m) => m.matchedItem),
  };
}

/**
 * Create AI prompt context with user health data
 */
export function createAIPromptContext(
  basePrompt: string,
  profile: UserHealthProfile,
  preferences: PersonalizationPreferences,
  topicKeywords: string[]
): AIPromptContext {
  if (!preferences.enabled || preferences.privacyMode === 'off') {
    return {
      basePrompt,
      userHealthContext: '',
      relevantConditions: [],
      relevantMedications: [],
      relevantLabs: [],
      relevantPGx: [],
      privacyLevel: preferences.privacyMode,
      requestedComplexity: preferences.complexityLevel,
    };
  }

  const matches = findRelevanceMatches(topicKeywords, profile, preferences);

  // Find relevant items from profile
  const relevantConditions = profile.conditions.filter((c) =>
    matches.some((m) => m.category === 'condition' && m.matchedItem === c.name)
  );
  const relevantMedications = profile.medications.filter((m) =>
    matches.some((match) => match.category === 'medication' && match.matchedItem === m.name)
  );
  const relevantLabs = profile.labResults.filter((l) =>
    matches.some((m) => m.category === 'lab-result' && m.matchedItem === l.testName)
  );
  const relevantPGx = profile.pharmacogenomics.filter((p) =>
    matches.some((m) => m.category === 'pharmacogenomics' && m.matchedItem.includes(p.gene))
  );

  // Build user health context string
  let contextParts: string[] = [];

  if (preferences.privacyMode === 'full') {
    if (relevantConditions.length > 0) {
      contextParts.push(`User has: ${relevantConditions.map((c) => c.name).join(', ')}`);
    }
    if (relevantMedications.length > 0) {
      contextParts.push(`User takes: ${relevantMedications.map((m) => `${m.name} (${m.drugClass})`).join(', ')}`);
    }
    if (relevantLabs.length > 0) {
      contextParts.push(`Recent labs: ${relevantLabs.map((l) => `${l.testName}: ${l.value} ${l.unit} (${l.status})`).join(', ')}`);
    }
    if (relevantPGx.length > 0) {
      contextParts.push(`PGx: ${relevantPGx.map((p) => `${p.gene} ${p.phenotype}`).join(', ')}`);
    }
  } else if (preferences.privacyMode === 'limited') {
    if (relevantConditions.length > 0) {
      contextParts.push(`User has relevant conditions`);
    }
    if (relevantMedications.length > 0) {
      contextParts.push(`User takes related medications`);
    }
  }

  return {
    basePrompt,
    userHealthContext: contextParts.join('. '),
    relevantConditions,
    relevantMedications,
    relevantLabs,
    relevantPGx,
    privacyLevel: preferences.privacyMode,
    requestedComplexity: preferences.complexityLevel,
  };
}

/**
 * Create relevance indicators for UI
 */
export function createRelevanceIndicators(
  matches: RelevanceMatch[]
): RelevanceIndicator[] {
  const indicators: RelevanceIndicator[] = [];

  const conditionMatches = matches.filter((m) => m.category === 'condition' && m.relevanceLevel !== 'not-relevant');
  if (conditionMatches.length > 0) {
    indicators.push({
      type: 'condition',
      label: `Relevant to ${conditionMatches.length} condition${conditionMatches.length > 1 ? 's' : ''}`,
      description: conditionMatches.map((m) => m.matchedItem).join(', '),
      color: '#E74C3C',
    });
  }

  const medMatches = matches.filter((m) => m.category === 'medication' && m.relevanceLevel !== 'not-relevant');
  if (medMatches.length > 0) {
    indicators.push({
      type: 'medication',
      label: `Related to ${medMatches.length} medication${medMatches.length > 1 ? 's' : ''}`,
      description: medMatches.map((m) => m.matchedItem).join(', '),
      color: '#3498DB',
    });
  }

  const labMatches = matches.filter((m) => m.category === 'lab-result' && m.relevanceLevel !== 'not-relevant');
  if (labMatches.length > 0) {
    indicators.push({
      type: 'lab',
      label: `Connects to ${labMatches.length} lab result${labMatches.length > 1 ? 's' : ''}`,
      description: labMatches.map((m) => m.matchedItem).join(', '),
      color: '#27AE60',
    });
  }

  const familyMatches = matches.filter((m) => m.category === 'family-history' && m.relevanceLevel !== 'not-relevant');
  if (familyMatches.length > 0) {
    indicators.push({
      type: 'family-history',
      label: 'Family history connection',
      description: familyMatches.map((m) => m.matchedItem).join(', '),
      color: '#9B59B6',
    });
  }

  const pgxMatches = matches.filter((m) => m.category === 'pharmacogenomics' && m.relevanceLevel !== 'not-relevant');
  if (pgxMatches.length > 0) {
    indicators.push({
      type: 'pgx',
      label: 'Pharmacogenomics relevant',
      description: pgxMatches.map((m) => m.matchedItem).join(', '),
      color: '#F39C12',
    });
  }

  return indicators;
}

/**
 * Interpret lab trends personally
 */
export function interpretLabTrend(
  lab: UserLabResult,
  profile: UserHealthProfile
): LabTrendInterpretation {
  const relatedConditions = profile.conditions
    .filter((c) => {
      const labMapping = labOrganMappings.get(lab.testName.toLowerCase().split(' ')[0]);
      return labMapping?.conditions.some((mc) => c.name.toLowerCase().includes(mc));
    })
    .map((c) => c.name);

  const relatedMedications = profile.medications
    .filter((m) => {
      const labMapping = labOrganMappings.get(lab.testName.toLowerCase().split(' ')[0]);
      return labMapping?.organs.some((o) => m.targetStructures?.some((t) => t.toLowerCase().includes(o)));
    })
    .map((m) => m.name);

  let interpretation = '';
  let personalizedContext = '';
  const recommendations: string[] = [];

  if (lab.status === 'low') {
    interpretation = `Your ${lab.testName} is below the reference range.`;
    personalizedContext = relatedConditions.length > 0
      ? `This may be related to your ${relatedConditions.join(' or ')}.`
      : 'Discuss with your healthcare provider.';
    recommendations.push('Follow up with your healthcare provider');
  } else if (lab.status === 'high') {
    interpretation = `Your ${lab.testName} is above the reference range.`;
    personalizedContext = relatedConditions.length > 0
      ? `This may be affected by your ${relatedConditions.join(' or ')}.`
      : 'This finding should be discussed with your provider.';
    recommendations.push('Follow up with your healthcare provider');
  } else if (lab.status === 'critical') {
    interpretation = `Your ${lab.testName} is critically abnormal.`;
    personalizedContext = 'This requires immediate medical attention.';
    recommendations.push('Contact your healthcare provider urgently');
  } else {
    interpretation = `Your ${lab.testName} is within normal range.`;
    personalizedContext = 'Continue monitoring as recommended.';
  }

  if (lab.trend === 'increasing') {
    interpretation += ` The trend shows increasing values.`;
  } else if (lab.trend === 'decreasing') {
    interpretation += ` The trend shows decreasing values.`;
  }

  return {
    labName: lab.testName,
    currentValue: lab.value,
    trend: lab.trend || 'stable',
    interpretation,
    personalizedContext,
    recommendations,
    relatedConditions,
    relatedMedications,
  };
}

/**
 * Create medication personalized context
 */
export function createMedicationContext(
  medication: UserMedication,
  profile: UserHealthProfile
): MedicationPersonalizedContext {
  const relevantConditions = profile.conditions
    .filter((c) => medication.indication?.toLowerCase().includes(c.name.toLowerCase()) ||
      c.name.toLowerCase().includes(medication.drugClass.toLowerCase()))
    .map((c) => c.name);

  const relevantLabs = profile.labResults
    .filter((l) => {
      const labMapping = labOrganMappings.get(l.testName.toLowerCase().split(' ')[0]);
      return labMapping?.conditions.some((c) =>
        medication.indication?.toLowerCase().includes(c) ||
        medication.drugClass.toLowerCase().includes(c)
      );
    })
    .map((l) => l.testName);

  const pgxConsiderations = profile.pharmacogenomics
    .filter((p) => p.affectedDrugs.some((d) =>
      d.toLowerCase().includes(medication.genericName.toLowerCase()) ||
      medication.genericName.toLowerCase().includes(d.toLowerCase())
    ))
    .map((p) => `${p.gene}: ${p.phenotype} - ${p.recommendation}`);

  return {
    medicationName: medication.name,
    mechanism: medication.mechanism || 'Mechanism information not available',
    personalizedMechanism: relevantConditions.length > 0
      ? `${medication.name} helps manage your ${relevantConditions.join(', ')} by ${medication.mechanism || 'its therapeutic effect'}.`
      : `${medication.name} works by ${medication.mechanism || 'its therapeutic action'}.`,
    relevantConditions,
    relevantLabs,
    pgxConsiderations,
    interactions: [],
    structuresAffected: medication.targetStructures || [],
  };
}

/**
 * Privacy disclaimer
 */
export const PERSONALIZATION_DISCLAIMER = `
Personalized health context uses your stored health data to make educational content
more relevant. All processing occurs locally on your device - your health data never
leaves your computer. This personalization is for educational purposes only and does
not constitute medical advice. Always consult your healthcare providers for medical
decisions. You can disable personalization at any time in settings.
`;

/**
 * Create personalized response for educational content
 */
export function personalizeEducationalContent(
  baseContent: string,
  topicKeywords: string[],
  profile: UserHealthProfile,
  preferences: PersonalizationPreferences
): PersonalizedResponse {
  if (!preferences.enabled) {
    return {
      baseContent,
      personalizedContent: baseContent,
      relevanceIndicators: [],
      userContextSections: [],
      disclaimers: [PERSONALIZATION_DISCLAIMER],
    };
  }

  const matches = findRelevanceMatches(topicKeywords, profile, preferences);
  const indicators = createRelevanceIndicators(matches);

  const contextSections: UserContextSection[] = [];

  // Add condition context sections
  for (const match of matches.filter((m) => m.category === 'condition' && m.relevanceLevel === 'directly-relevant')) {
    contextSections.push({
      sectionId: match.matchId,
      title: `Relevant to Your ${match.matchedItem}`,
      content: match.userContext,
      relatedTo: match.matchedItem,
      category: 'condition',
    });
  }

  // Add medication context sections
  for (const match of matches.filter((m) => m.category === 'medication' && m.relevanceLevel === 'directly-relevant')) {
    contextSections.push({
      sectionId: match.matchId,
      title: `Your Medication: ${match.matchedItem}`,
      content: match.userContext,
      relatedTo: match.matchedItem,
      category: 'medication',
    });
  }

  // Add lab context sections
  for (const match of matches.filter((m) => m.category === 'lab-result' && m.relevanceLevel === 'directly-relevant')) {
    contextSections.push({
      sectionId: match.matchId,
      title: `Your Lab: ${match.matchedItem}`,
      content: match.userContext,
      relatedTo: match.matchedItem,
      category: 'lab-result',
    });
  }

  // Build personalized content
  let personalizedContent = baseContent;
  if (contextSections.length > 0) {
    personalizedContent += '\n\n---\n**Relevant to You:**\n';
    for (const section of contextSections) {
      personalizedContent += `\n• ${section.content}`;
    }
  }

  return {
    baseContent,
    personalizedContent,
    relevanceIndicators: indicators,
    userContextSections: contextSections,
    disclaimers: [PERSONALIZATION_DISCLAIMER],
  };
}
