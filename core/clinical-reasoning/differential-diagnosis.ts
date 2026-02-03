/**
 * Differential Diagnosis Generator
 *
 * AI-powered system for generating ranked differential diagnoses from symptoms.
 * Uses Bayesian reasoning enhanced by LLM for nuanced clinical analysis.
 */

import { chatJSON } from '../ai/ollama.js';
import {
  CONDITIONS,
  SYMPTOM_CONDITION_MAPPINGS,
  getMatchingRedFlags,
} from './condition-database.js';
import type {
  SymptomInput,
  PatientDemographics,
  DifferentialDiagnosis,
  DifferentialDiagnosisResult,
  ConfidenceLevel,
  UrgencyLevel,
  ReasoningStep,
  ClarifyingQuestion,
  Condition,
  RedFlagPattern,
} from './types.js';

// ============================================
// Differential Diagnosis Generator
// ============================================

/**
 * Generate differential diagnosis from symptoms
 */
export async function generateDifferentialDiagnosis(
  symptoms: SymptomInput[],
  demographics?: PatientDemographics,
  useLLM: boolean = true
): Promise<DifferentialDiagnosisResult> {
  const startTime = Date.now();
  const id = `ddx-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

  // Step 1: Check for red flags
  const symptomNames = symptoms.map(s => s.name.toLowerCase());
  const redFlagsDetected = getMatchingRedFlags(symptomNames);

  // Step 2: Calculate Bayesian probabilities
  const bayesianDifferentials = calculateBayesianDifferentials(symptoms, demographics);

  // Step 3: Enhance with LLM if available
  let finalDifferentials = bayesianDifferentials;
  let reasoningChain: ReasoningStep[] = [];
  let questionsToAsk: ClarifyingQuestion[] = [];

  if (useLLM) {
    try {
      const llmResult = await enhanceWithLLM(symptoms, bayesianDifferentials, demographics);
      finalDifferentials = llmResult.differentials;
      reasoningChain = llmResult.reasoningChain;
      questionsToAsk = llmResult.questionsToAsk;
    } catch (error) {
      console.warn('LLM enhancement failed, using Bayesian results:', error);
      reasoningChain = generateBasicReasoningChain(symptoms, bayesianDifferentials);
      questionsToAsk = generateBasicQuestions(symptoms, bayesianDifferentials);
    }
  } else {
    reasoningChain = generateBasicReasoningChain(symptoms, bayesianDifferentials);
    questionsToAsk = generateBasicQuestions(symptoms, bayesianDifferentials);
  }

  // Step 4: Determine overall urgency
  const overallUrgency = determineOverallUrgency(finalDifferentials, redFlagsDetected);

  // Step 5: Identify "must not miss" diagnoses
  const mustNotMiss = finalDifferentials.filter(
    d => d.urgency === 'emergency' || d.urgency === 'urgent'
  ).slice(0, 3);

  // Step 6: Generate recommended tests
  const recommendedTests = generateRecommendedTests(finalDifferentials);

  return {
    id,
    timestamp: new Date().toISOString(),
    inputSymptoms: symptoms,
    patientDemographics: demographics,
    differentials: finalDifferentials,
    mostLikely: finalDifferentials[0],
    mustNotMiss,
    redFlagsDetected,
    overallUrgency,
    reasoningChain,
    questionsToAsk,
    recommendedTests,
    modelUsed: useLLM ? 'deepseek-r1:14b + bayesian' : 'bayesian-only',
    processingTimeMs: Date.now() - startTime,
  };
}

// ============================================
// Bayesian Probability Calculation
// ============================================

/**
 * Calculate differential probabilities using Bayesian reasoning
 */
function calculateBayesianDifferentials(
  symptoms: SymptomInput[],
  demographics?: PatientDemographics
): DifferentialDiagnosis[] {
  const conditionScores: Map<string, {
    score: number;
    matchingSymptoms: string[];
    missingKeySymptoms: string[];
    condition: Condition;
  }> = new Map();

  // Initialize all conditions with prior probabilities
  for (const condition of CONDITIONS) {
    const priorProb = getPriorProbability(condition, demographics);
    conditionScores.set(condition.id, {
      score: priorProb,
      matchingSymptoms: [],
      missingKeySymptoms: condition.keySymptoms
        .filter(ks => ks.frequency === 'pathognomonic' || ks.frequency === 'very-common')
        .map(ks => ks.symptomName),
      condition,
    });
  }

  // Update probabilities for each symptom
  for (const symptom of symptoms) {
    const mappings = SYMPTOM_CONDITION_MAPPINGS.filter(
      m => m.symptomName.toLowerCase() === symptom.name.toLowerCase()
    );

    for (const mapping of mappings) {
      const entry = conditionScores.get(mapping.conditionId);
      if (entry) {
        // Apply positive likelihood ratio
        let multiplier = mapping.positiveLikelihoodRatio;

        // Apply characteristic modifiers
        if (mapping.characteristicModifiers && symptom.qualities) {
          for (const modifier of mapping.characteristicModifiers) {
            if (matchesCharacteristic(symptom, modifier.characteristic, modifier.value)) {
              multiplier *= modifier.likelihoodMultiplier;
            }
          }
        }

        entry.score *= multiplier;
        entry.matchingSymptoms.push(symptom.name);
        entry.missingKeySymptoms = entry.missingKeySymptoms.filter(
          s => s.toLowerCase() !== symptom.name.toLowerCase()
        );
      }
    }

    // Penalize conditions that should have this symptom but mapping doesn't exist
    for (const [, entry] of conditionScores) {
      const condition = entry.condition;
      const keySymptom = condition.keySymptoms.find(
        ks => ks.symptomName.toLowerCase() === symptom.name.toLowerCase()
      );

      if (keySymptom && !entry.matchingSymptoms.includes(symptom.name)) {
        entry.matchingSymptoms.push(symptom.name);
        entry.missingKeySymptoms = entry.missingKeySymptoms.filter(
          s => s.toLowerCase() !== symptom.name.toLowerCase()
        );

        // Boost based on symptom frequency
        const frequencyMultiplier = getFrequencyMultiplier(keySymptom.frequency);
        entry.score *= frequencyMultiplier;
      }
    }
  }

  // Apply demographic modifiers
  if (demographics) {
    for (const [, entry] of conditionScores) {
      const demographicMultiplier = getDemographicMultiplier(entry.condition, demographics);
      entry.score *= demographicMultiplier;
    }
  }

  // Normalize scores to probabilities
  const totalScore = Array.from(conditionScores.values()).reduce((sum, e) => sum + e.score, 0);

  // Convert to DifferentialDiagnosis array
  const differentials: DifferentialDiagnosis[] = Array.from(conditionScores.entries())
    .map(([conditionId, entry]) => {
      const probability = entry.score / totalScore;
      return {
        conditionId,
        conditionName: entry.condition.name,
        probability,
        confidence: getConfidenceLevel(probability, entry.matchingSymptoms.length),
        matchingSymptoms: entry.matchingSymptoms,
        missingKeySymptoms: entry.missingKeySymptoms,
        supportingFactors: getSupportingFactors(entry.condition, demographics),
        againstFactors: getAgainstFactors(entry.condition, symptoms, demographics),
        urgency: entry.condition.urgencyLevel,
        nextSteps: getNextSteps(entry.condition),
      };
    })
    .filter(d => d.probability > 0.001) // Filter out very unlikely
    .sort((a, b) => b.probability - a.probability)
    .slice(0, 10); // Top 10

  return differentials;
}

/**
 * Get prior probability adjusted for demographics
 */
function getPriorProbability(condition: Condition, demographics?: PatientDemographics): number {
  const baseProbability = getPrevalenceProbability(condition.prevalence);

  if (!demographics) return baseProbability;

  let multiplier = 1.0;

  // Age adjustment
  if (demographics.age && condition.demographics.typicalAgeRange) {
    const [minAge, maxAge] = condition.demographics.typicalAgeRange;
    if (demographics.age >= minAge && demographics.age <= maxAge) {
      multiplier *= 1.5;
    } else if (demographics.age < minAge - 10 || demographics.age > maxAge + 10) {
      multiplier *= 0.5;
    }
  }

  // Sex adjustment
  if (demographics.sex && condition.demographics.sexPredilection) {
    if (condition.demographics.sexPredilection === demographics.sex) {
      multiplier *= condition.demographics.sexRatio ? (1 / condition.demographics.sexRatio) : 1.5;
    } else if (condition.demographics.sexPredilection !== 'equal') {
      multiplier *= condition.demographics.sexRatio || 0.5;
    }
  }

  return baseProbability * multiplier;
}

function getPrevalenceProbability(prevalence: string): number {
  switch (prevalence) {
    case 'very-common': return 0.15;
    case 'common': return 0.05;
    case 'uncommon': return 0.005;
    case 'rare': return 0.0005;
    case 'very-rare': return 0.00005;
    default: return 0.01;
  }
}

function getFrequencyMultiplier(frequency: string): number {
  switch (frequency) {
    case 'pathognomonic': return 5.0;
    case 'very-common': return 2.5;
    case 'common': return 1.5;
    case 'frequent': return 1.2;
    case 'occasional': return 1.1;
    case 'rare': return 1.0;
    default: return 1.0;
  }
}

function matchesCharacteristic(symptom: SymptomInput, characteristic: string, value: string): boolean {
  if (characteristic === 'quality' && symptom.qualities?.pain) {
    return symptom.qualities.pain.some(q => q.toLowerCase().includes(value.toLowerCase()));
  }
  if (characteristic === 'onset' && symptom.onset) {
    return symptom.onset.toLowerCase() === value.toLowerCase();
  }
  if (characteristic === 'location' && symptom.location?.bodyRegion) {
    return symptom.location.bodyRegion.toLowerCase().includes(value.toLowerCase());
  }
  return false;
}

function getDemographicMultiplier(condition: Condition, demographics: PatientDemographics): number {
  let multiplier = 1.0;

  // Check existing conditions for risk factors
  if (demographics.existingConditions) {
    for (const existing of demographics.existingConditions) {
      if (condition.associatedConditions.some(ac => ac.toLowerCase().includes(existing.toLowerCase()))) {
        multiplier *= 1.5;
      }
      const riskFactor = condition.riskFactors.find(
        rf => rf.name.toLowerCase().includes(existing.toLowerCase())
      );
      if (riskFactor && riskFactor.relativeRisk) {
        multiplier *= riskFactor.relativeRisk;
      }
    }
  }

  // Smoking
  if (demographics.smokingStatus === 'current') {
    const smokingRisk = condition.riskFactors.find(rf => rf.name.toLowerCase().includes('smoking'));
    if (smokingRisk && smokingRisk.relativeRisk) {
      multiplier *= smokingRisk.relativeRisk;
    }
  }

  // Obesity
  if (demographics.bmi && demographics.bmi >= 30) {
    const obesityRisk = condition.riskFactors.find(rf => rf.name.toLowerCase().includes('obesity'));
    if (obesityRisk && obesityRisk.relativeRisk) {
      multiplier *= obesityRisk.relativeRisk;
    }
  }

  return multiplier;
}

function getConfidenceLevel(probability: number, matchingSymptoms: number): ConfidenceLevel {
  if (probability > 0.5 && matchingSymptoms >= 3) return 'high';
  if (probability > 0.2 && matchingSymptoms >= 2) return 'moderate';
  if (probability > 0.05) return 'low';
  return 'uncertain';
}

function getSupportingFactors(condition: Condition, demographics?: PatientDemographics): string[] {
  const factors: string[] = [];

  if (demographics?.age && condition.demographics.typicalAgeRange) {
    const [minAge, maxAge] = condition.demographics.typicalAgeRange;
    if (demographics.age >= minAge && demographics.age <= maxAge) {
      factors.push(`Age ${demographics.age} within typical range`);
    }
  }

  if (demographics?.existingConditions) {
    for (const existing of demographics.existingConditions) {
      if (condition.riskFactors.some(rf => rf.name.toLowerCase().includes(existing.toLowerCase()))) {
        factors.push(`Risk factor: ${existing}`);
      }
    }
  }

  return factors;
}

function getAgainstFactors(
  condition: Condition,
  symptoms: SymptomInput[],
  demographics?: PatientDemographics
): string[] {
  const factors: string[] = [];

  // Missing key symptoms
  const presentSymptoms = symptoms.map(s => s.name.toLowerCase());
  const missingKey = condition.keySymptoms
    .filter(ks => ks.frequency === 'pathognomonic' || ks.frequency === 'very-common')
    .filter(ks => !presentSymptoms.includes(ks.symptomName.toLowerCase()));

  if (missingKey.length > 0) {
    factors.push(`Missing expected: ${missingKey.map(k => k.symptomName).join(', ')}`);
  }

  // Demographic mismatch
  if (demographics?.age && condition.demographics.typicalAgeRange) {
    const [minAge, maxAge] = condition.demographics.typicalAgeRange;
    if (demographics.age < minAge - 10 || demographics.age > maxAge + 10) {
      factors.push(`Age ${demographics.age} outside typical range (${minAge}-${maxAge})`);
    }
  }

  return factors;
}

function getNextSteps(condition: Condition): string[] {
  const steps: string[] = [];

  if (condition.urgencyLevel === 'emergency') {
    steps.push('Seek emergency care immediately');
  } else if (condition.urgencyLevel === 'urgent') {
    steps.push('See a healthcare provider today');
  } else {
    steps.push('Schedule an appointment with your doctor');
  }

  if (condition.diagnosticCriteria?.requiredTests) {
    steps.push(`Consider tests: ${condition.diagnosticCriteria.requiredTests.join(', ')}`);
  }

  return steps;
}

// ============================================
// LLM Enhancement
// ============================================

interface LLMEnhancementResult {
  differentials: DifferentialDiagnosis[];
  reasoningChain: ReasoningStep[];
  questionsToAsk: ClarifyingQuestion[];
}

async function enhanceWithLLM(
  symptoms: SymptomInput[],
  bayesianDifferentials: DifferentialDiagnosis[],
  demographics?: PatientDemographics
): Promise<LLMEnhancementResult> {
  const systemPrompt = `You are a clinical reasoning assistant helping to generate differential diagnoses.
You receive symptoms and preliminary Bayesian-calculated probabilities.
Your task is to:
1. Validate and refine the probability rankings based on clinical patterns
2. Provide clinical reasoning for each diagnosis
3. Suggest clarifying questions
4. Consider rare but serious "must not miss" diagnoses

IMPORTANT: This is for educational purposes only. Always recommend professional medical evaluation.

Respond in JSON format:
{
  "refinedDifferentials": [
    {
      "conditionName": "string",
      "adjustedProbability": number,
      "reasoning": "string"
    }
  ],
  "reasoningSteps": [
    {
      "step": number,
      "type": "observation|hypothesis|evidence|conclusion",
      "content": "string"
    }
  ],
  "clarifyingQuestions": [
    {
      "question": "string",
      "purpose": "string",
      "priority": "high|medium|low"
    }
  ]
}`;

  const userPrompt = `Symptoms: ${JSON.stringify(symptoms)}
Demographics: ${demographics ? JSON.stringify(demographics) : 'Not provided'}
Preliminary differentials: ${JSON.stringify(bayesianDifferentials.slice(0, 5).map(d => ({
  name: d.conditionName,
  probability: d.probability.toFixed(3),
  matching: d.matchingSymptoms,
  missing: d.missingKeySymptoms,
})))}

Please refine these differentials with clinical reasoning.`;

  const response = await chatJSON<{
    refinedDifferentials: Array<{
      conditionName: string;
      adjustedProbability: number;
      reasoning: string;
    }>;
    reasoningSteps: Array<{
      step: number;
      type: string;
      content: string;
    }>;
    clarifyingQuestions: Array<{
      question: string;
      purpose: string;
      priority: string;
    }>;
  }>({
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt },
    ],
    options: {
      temperature: 0.3,
      num_predict: 2000,
    },
  });

  // Merge LLM refinements with Bayesian results
  const refinedDifferentials = bayesianDifferentials.map(d => {
    const llmRefinement = response.refinedDifferentials.find(
      r => r.conditionName.toLowerCase() === d.conditionName.toLowerCase()
    );

    if (llmRefinement) {
      return {
        ...d,
        probability: (d.probability + llmRefinement.adjustedProbability) / 2,
        supportingFactors: [...d.supportingFactors, llmRefinement.reasoning],
      };
    }
    return d;
  }).sort((a, b) => b.probability - a.probability);

  const reasoningChain: ReasoningStep[] = response.reasoningSteps.map(s => ({
    step: s.step,
    type: s.type as ReasoningStep['type'],
    content: s.content,
  }));

  const questionsToAsk: ClarifyingQuestion[] = response.clarifyingQuestions.map(q => ({
    question: q.question,
    purpose: q.purpose,
    relatedConditions: [],
    priority: q.priority as 'high' | 'medium' | 'low',
    expectedAnswerType: 'free-text' as const,
  }));

  return { differentials: refinedDifferentials, reasoningChain, questionsToAsk };
}

// ============================================
// Fallback Generation
// ============================================

function generateBasicReasoningChain(
  symptoms: SymptomInput[],
  differentials: DifferentialDiagnosis[]
): ReasoningStep[] {
  const steps: ReasoningStep[] = [];
  let stepNum = 1;

  // Observation
  steps.push({
    step: stepNum++,
    type: 'observation',
    content: `Patient presents with ${symptoms.length} symptom(s): ${symptoms.map(s => s.name).join(', ')}`,
  });

  // Symptom analysis
  for (const symptom of symptoms) {
    steps.push({
      step: stepNum++,
      type: 'observation',
      content: `${symptom.name}${symptom.severity ? ` (severity ${symptom.severity}/10)` : ''}${symptom.onset ? `, ${symptom.onset} onset` : ''}`,
    });
  }

  // Hypothesis generation
  if (differentials.length > 0) {
    steps.push({
      step: stepNum++,
      type: 'hypothesis',
      content: `Based on symptom pattern, top considerations include: ${differentials.slice(0, 3).map(d => d.conditionName).join(', ')}`,
    });
  }

  // Evidence evaluation
  const topDiff = differentials[0];
  if (topDiff) {
    steps.push({
      step: stepNum++,
      type: 'evidence',
      content: `${topDiff.conditionName} is supported by: ${topDiff.matchingSymptoms.join(', ')}`,
    });

    if (topDiff.missingKeySymptoms.length > 0) {
      steps.push({
        step: stepNum++,
        type: 'evidence',
        content: `However, expected symptoms not reported: ${topDiff.missingKeySymptoms.join(', ')}`,
      });
    }
  }

  // Conclusion
  steps.push({
    step: stepNum++,
    type: 'conclusion',
    content: `Professional evaluation recommended to confirm diagnosis and rule out serious conditions`,
  });

  return steps;
}

function generateBasicQuestions(
  symptoms: SymptomInput[],
  differentials: DifferentialDiagnosis[]
): ClarifyingQuestion[] {
  const questions: ClarifyingQuestion[] = [];

  // Ask about missing key symptoms
  const allMissing = new Set<string>();
  differentials.slice(0, 3).forEach(d => {
    d.missingKeySymptoms.forEach(s => allMissing.add(s));
  });

  for (const missing of Array.from(allMissing).slice(0, 3)) {
    questions.push({
      question: `Do you have ${missing}?`,
      purpose: `Helps distinguish between possible conditions`,
      relatedConditions: differentials.filter(d => d.missingKeySymptoms.includes(missing)).map(d => d.conditionName),
      priority: 'high',
      expectedAnswerType: 'yes-no',
    });
  }

  // Ask about duration if not specified
  if (symptoms.some(s => !s.duration)) {
    questions.push({
      question: 'How long have you had these symptoms?',
      purpose: 'Duration helps determine acute vs chronic conditions',
      relatedConditions: [],
      priority: 'high',
      expectedAnswerType: 'free-text',
    });
  }

  // Ask about aggravating/relieving factors
  questions.push({
    question: 'What makes your symptoms better or worse?',
    purpose: 'Helps identify specific conditions based on modifying factors',
    relatedConditions: [],
    priority: 'medium',
    expectedAnswerType: 'free-text',
  });

  return questions;
}

// ============================================
// Urgency & Recommendations
// ============================================

function determineOverallUrgency(
  differentials: DifferentialDiagnosis[],
  redFlags: RedFlagPattern[]
): UrgencyLevel {
  // Red flags take priority
  if (redFlags.some(rf => rf.urgency === 'emergency')) {
    return 'emergency';
  }

  // Check top differentials
  if (differentials.slice(0, 3).some(d => d.urgency === 'emergency')) {
    return 'emergency';
  }

  if (redFlags.some(rf => rf.urgency === 'urgent')) {
    return 'urgent';
  }

  if (differentials.slice(0, 3).some(d => d.urgency === 'urgent')) {
    return 'urgent';
  }

  if (differentials.slice(0, 3).some(d => d.urgency === 'semi-urgent')) {
    return 'semi-urgent';
  }

  return 'routine';
}

function generateRecommendedTests(differentials: DifferentialDiagnosis[]): string[] {
  const tests = new Set<string>();

  // Get tests from top differentials
  for (const diff of differentials.slice(0, 5)) {
    const condition = CONDITIONS.find(c => c.id === diff.conditionId);
    if (condition?.diagnosticCriteria?.requiredTests) {
      condition.diagnosticCriteria.requiredTests.forEach(t => tests.add(t));
    }
  }

  // Add common baseline tests for multiple categories
  const categories = new Set(differentials.map(d => {
    const c = CONDITIONS.find(cond => cond.id === d.conditionId);
    return c?.category;
  }));

  if (categories.has('cardiovascular')) {
    tests.add('ECG');
    tests.add('Troponin');
  }
  if (categories.has('infectious')) {
    tests.add('CBC');
    tests.add('Blood cultures');
  }
  if (categories.has('endocrine')) {
    tests.add('Basic metabolic panel');
    tests.add('Thyroid panel');
  }

  return Array.from(tests).slice(0, 8);
}

// ============================================
// Exports
// ============================================

export {
  calculateBayesianDifferentials,
  determineOverallUrgency,
  generateRecommendedTests,
};
