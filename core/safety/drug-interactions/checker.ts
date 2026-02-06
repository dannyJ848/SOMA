/**
 * Drug Interaction Checker Engine
 * 
 * Core logic for scanning medications and checking for interactions
 * across drug-drug, drug-disease, drug-food, and drug-supplement categories.
 */

import {
  DrugInteraction,
  InteractionSeverity,
  InteractionType,
  SEVERITY_INFO,
  ALL_INTERACTIONS,
  DRUG_INTERACTIONS,
  FOOD_INTERACTIONS,
  SUPPLEMENT_INTERACTIONS,
  DISEASE_INTERACTIONS,
  normalizeDrugName,
  drugNameMatches,
  COMMON_DRUGS
} from './index';

// ============================================================================
// Types
// ============================================================================

export interface UserMedication {
  id: string;
  name: string;
  genericName?: string;
  dosage: string;
  frequency: string;
  startDate?: Date;
  prescribedBy?: string;
  purpose?: string;
  isActive: boolean;
}

export interface UserCondition {
  id: string;
  name: string;
  icd10Code?: string;
  diagnosedDate?: Date;
  severity?: 'mild' | 'moderate' | 'severe';
  isActive: boolean;
}

export interface UserSupplement {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  isActive: boolean;
}

export interface InteractionCheckResult {
  interaction: DrugInteraction;
  involvingMedications: string[];
  involvingConditions?: string[];
  involvingSupplements?: string[];
  severity: InteractionSeverity;
  timestamp: Date;
}

export interface FullSafetyCheckResult {
  newMedication: UserMedication;
  interactions: {
    drugDrug: InteractionCheckResult[];
    drugDisease: InteractionCheckResult[];
    drugFood: InteractionCheckResult[];
    drugSupplement: InteractionCheckResult[];
  };
  summary: {
    totalInteractions: number;
    contraindicated: number;
    major: number;
    moderate: number;
    minor: number;
    highestSeverity: InteractionSeverity | null;
  };
  recommendations: string[];
  timestamp: Date;
}

export interface SafetyReport {
  id: string;
  generatedAt: Date;
  medications: UserMedication[];
  conditions: UserCondition[];
  supplements: UserSupplement[];
  allInteractions: InteractionCheckResult[];
  resolvedInteractions: string[]; // IDs of interactions marked as resolved
  notes?: string;
}

// ============================================================================
// Checker Functions
// ============================================================================

/**
 * Check for drug-drug interactions between a new medication and existing medications
 */
export function checkDrugDrugInteractions(
  newMedication: UserMedication,
  existingMedications: UserMedication[],
  includeInactive: boolean = false
): InteractionCheckResult[] {
  const results: InteractionCheckResult[] = [];
  const activeMeds = includeInactive 
    ? existingMedications 
    : existingMedications.filter(m => m.isActive);

  for (const interaction of DRUG_INTERACTIONS) {
    // Check if new medication matches primary drug
    const newIsPrimary = drugNameMatches(newMedication.name, interaction) ||
      (newMedication.genericName && drugNameMatches(newMedication.genericName, interaction));
    
    if (!newIsPrimary) continue;

    // Check if any existing medication matches the interacting drug
    for (const existingMed of activeMeds) {
      const existingName = existingMed.genericName || existingMed.name;
      const existingMatchesInteracting = 
        interaction.interactsWith.genericNames?.some(name => 
          normalizeDrugName(name) === normalizeDrugName(existingName)
        ) ||
        normalizeDrugName(interaction.interactsWith.name) === normalizeDrugName(existingName);

      if (existingMatchesInteracting) {
        results.push({
          interaction,
          involvingMedications: [newMedication.name, existingMed.name],
          severity: interaction.severity,
          timestamp: new Date()
        });
      }
    }
  }

  // Also check reverse (new medication is the interacting one)
  for (const interaction of DRUG_INTERACTIONS) {
    const newIsInteracting = 
      interaction.interactsWith.genericNames?.some(name => 
        normalizeDrugName(name) === normalizeDrugName(newMedication.name) ||
        (newMedication.genericName && normalizeDrugName(name) === normalizeDrugName(newMedication.genericName))
      ) ||
      normalizeDrugName(interaction.interactsWith.name) === normalizeDrugName(newMedication.name);

    if (!newIsInteracting) continue;

    for (const existingMed of activeMeds) {
      const existingName = existingMed.genericName || existingMed.name;
      const existingMatchesPrimary = drugNameMatches(existingName, interaction);

      if (existingMatchesPrimary) {
        results.push({
          interaction,
          involvingMedications: [existingMed.name, newMedication.name],
          severity: interaction.severity,
          timestamp: new Date()
        });
      }
    }
  }

  return results;
}

/**
 * Check for drug-disease interactions
 */
export function checkDrugDiseaseInteractions(
  newMedication: UserMedication,
  userConditions: UserCondition[],
  includeInactive: boolean = false
): InteractionCheckResult[] {
  const results: InteractionCheckResult[] = [];
  const activeConditions = includeInactive 
    ? userConditions 
    : userConditions.filter(c => c.isActive);

  for (const interaction of DISEASE_INTERACTIONS) {
    const medMatches = drugNameMatches(newMedication.name, interaction) ||
      (newMedication.genericName && drugNameMatches(newMedication.genericName, interaction));

    if (!medMatches) continue;

    const matchingConditions = activeConditions.filter(condition => 
      interaction.interactsWith.conditions?.some(ic => 
        normalizeDrugName(ic).includes(normalizeDrugName(condition.name)) ||
        normalizeDrugName(condition.name).includes(normalizeDrugName(ic))
      )
    );

    if (matchingConditions.length > 0) {
      results.push({
        interaction,
        involvingMedications: [newMedication.name],
        involvingConditions: matchingConditions.map(c => c.name),
        severity: interaction.severity,
        timestamp: new Date()
      });
    }
  }

  return results;
}

/**
 * Check for drug-food interactions
 */
export function checkDrugFoodInteractions(
  newMedication: UserMedication
): InteractionCheckResult[] {
  const results: InteractionCheckResult[] = [];

  for (const interaction of FOOD_INTERACTIONS) {
    const medMatches = drugNameMatches(newMedication.name, interaction) ||
      (newMedication.genericName && drugNameMatches(newMedication.genericName, interaction));

    if (medMatches) {
      results.push({
        interaction,
        involvingMedications: [newMedication.name],
        severity: interaction.severity,
        timestamp: new Date()
      });
    }
  }

  return results;
}

/**
 * Check for drug-supplement interactions
 */
export function checkDrugSupplementInteractions(
  newMedication: UserMedication,
  userSupplements: UserSupplement[],
  includeInactive: boolean = false
): InteractionCheckResult[] {
  const results: InteractionCheckResult[] = [];
  const activeSupplements = includeInactive 
    ? userSupplements 
    : userSupplements.filter(s => s.isActive);

  for (const interaction of SUPPLEMENT_INTERACTIONS) {
    const medMatches = drugNameMatches(newMedication.name, interaction) ||
      (newMedication.genericName && drugNameMatches(newMedication.genericName, interaction));

    if (!medMatches) continue;

    const matchingSupplements = activeSupplements.filter(supplement =>
      interaction.interactsWith.supplements?.some(is =>
        normalizeDrugName(is).includes(normalizeDrugName(supplement.name)) ||
        normalizeDrugName(supplement.name).includes(normalizeDrugName(is))
      )
    );

    if (matchingSupplements.length > 0) {
      results.push({
        interaction,
        involvingMedications: [newMedication.name],
        involvingSupplements: matchingSupplements.map(s => s.name),
        severity: interaction.severity,
        timestamp: new Date()
      });
    }
  }

  return results;
}

/**
 * Perform a full safety check when adding a new medication
 */
export function performFullSafetyCheck(
  newMedication: UserMedication,
  existingMedications: UserMedication[],
  userConditions: UserCondition[],
  userSupplements: UserSupplement[]
): FullSafetyCheckResult {
  const drugDrugResults = checkDrugDrugInteractions(newMedication, existingMedications);
  const drugDiseaseResults = checkDrugDiseaseInteractions(newMedication, userConditions);
  const drugFoodResults = checkDrugFoodInteractions(newMedication);
  const drugSupplementResults = checkDrugSupplementInteractions(newMedication, userSupplements);

  const allResults = [
    ...drugDrugResults,
    ...drugDiseaseResults,
    ...drugFoodResults,
    ...drugSupplementResults
  ];

  // Calculate summary
  const contraindicated = allResults.filter(r => r.severity === 'contraindicated').length;
  const major = allResults.filter(r => r.severity === 'major').length;
  const moderate = allResults.filter(r => r.severity === 'moderate').length;
  const minor = allResults.filter(r => r.severity === 'minor').length;

  let highestSeverity: InteractionSeverity | null = null;
  if (contraindicated > 0) highestSeverity = 'contraindicated';
  else if (major > 0) highestSeverity = 'major';
  else if (moderate > 0) highestSeverity = 'moderate';
  else if (minor > 0) highestSeverity = 'minor';

  // Generate recommendations
  const recommendations = generateRecommendations(allResults, highestSeverity);

  return {
    newMedication,
    interactions: {
      drugDrug: drugDrugResults,
      drugDisease: drugDiseaseResults,
      drugFood: drugFoodResults,
      drugSupplement: drugSupplementResults
    },
    summary: {
      totalInteractions: allResults.length,
      contraindicated,
      major,
      moderate,
      minor,
      highestSeverity
    },
    recommendations,
    timestamp: new Date()
  };
}

/**
 * Scan all current medications against each other
 */
export function scanAllMedications(
  medications: UserMedication[],
  conditions: UserCondition[],
  supplements: UserSupplement[]
): InteractionCheckResult[] {
  const allResults: InteractionCheckResult[] = [];
  const activeMeds = medications.filter(m => m.isActive);

  // Check drug-drug interactions
  for (let i = 0; i < activeMeds.length; i++) {
    const results = checkDrugDrugInteractions(activeMeds[i], activeMeds.slice(i + 1), true);
    allResults.push(...results);
  }

  // Check drug-disease for all medications
  for (const med of activeMeds) {
    const results = checkDrugDiseaseInteractions(med, conditions);
    allResults.push(...results);
  }

  // Check drug-supplement for all medications
  for (const med of activeMeds) {
    const results = checkDrugSupplementInteractions(med, supplements);
    allResults.push(...results);
  }

  // Check drug-food for all medications
  for (const med of activeMeds) {
    const results = checkDrugFoodInteractions(med);
    allResults.push(...results);
  }

  // Remove duplicates
  const uniqueResults = allResults.filter((result, index, self) =>
    index === self.findIndex(r => r.interaction.id === result.interaction.id)
  );

  return uniqueResults;
}

/**
 * Generate recommendations based on interaction results
 */
function generateRecommendations(
  results: InteractionCheckResult[],
  highestSeverity: InteractionSeverity | null
): string[] {
  const recommendations: string[] = [];

  if (highestSeverity === 'contraindicated') {
    recommendations.push('⚠️ CONTRAINDICATION DETECTED: This medication should NOT be taken with your current regimen.');
    recommendations.push('Contact your healthcare provider immediately to discuss alternatives.');
  } else if (highestSeverity === 'major') {
    recommendations.push('⚠️ MAJOR INTERACTION DETECTED: Significant risk requires immediate medical attention.');
    recommendations.push('Do not start this medication without consulting your doctor.');
  } else if (highestSeverity === 'moderate') {
    recommendations.push('⚠️ MODERATE INTERACTION DETECTED: Therapy modification or monitoring may be needed.');
    recommendations.push('Discuss these interactions with your healthcare provider before starting.');
  } else if (highestSeverity === 'minor') {
    recommendations.push('ℹ️ MINOR INTERACTIONS DETECTED: Be aware of potential effects but usually no action needed.');
  }

  // Add specific monitoring recommendations
  const contraindicatedMeds = results
    .filter(r => r.severity === 'contraindicated')
    .map(r => r.interaction.recommendation);
  
  if (contraindicatedMeds.length > 0) {
    recommendations.push('');
    recommendations.push('Specific contraindications:');
    contraindicatedMeds.forEach(rec => recommendations.push(`  • ${rec}`));
  }

  // Add monitoring requirements
  const monitoringNeeds = new Set<string>();
  results.forEach(r => {
    r.interaction.monitoringRequired?.forEach(m => monitoringNeeds.add(m));
  });

  if (monitoringNeeds.size > 0) {
    recommendations.push('');
    recommendations.push('Monitoring required:');
    monitoringNeeds.forEach(m => recommendations.push(`  • ${m}`));
  }

  // Add alternatives if contraindicated
  const alternatives = results
    .filter(r => r.severity === 'contraindicated' || r.severity === 'major')
    .flatMap(r => r.interaction.alternatives || []);

  if (alternatives.length > 0) {
    recommendations.push('');
    recommendations.push('Possible alternatives to discuss with your doctor:');
    [...new Set(alternatives)].forEach(alt => recommendations.push(`  • ${alt}`));
  }

  return recommendations;
}

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Get severity color for UI rendering
 */
export function getSeverityColor(severity: InteractionSeverity): string {
  return SEVERITY_INFO[severity].color;
}

/**
 * Get severity icon for UI rendering
 */
export function getSeverityIcon(severity: InteractionSeverity): string {
  return SEVERITY_INFO[severity].icon;
}

/**
 * Get severity display name
 */
export function getSeverityName(severity: InteractionSeverity): string {
  return SEVERITY_INFO[severity].name;
}

/**
 * Sort interactions by severity (most severe first)
 */
export function sortBySeverity(results: InteractionCheckResult[]): InteractionCheckResult[] {
  const severityOrder: Record<InteractionSeverity, number> = {
    'contraindicated': 4,
    'major': 3,
    'moderate': 2,
    'minor': 1
  };

  return [...results].sort((a, b) => severityOrder[b.severity] - severityOrder[a.severity]);
}

/**
 * Filter interactions by type
 */
export function filterByType(
  results: InteractionCheckResult[],
  type: InteractionType
): InteractionCheckResult[] {
  return results.filter(r => r.interaction.type === type);
}

/**
 * Filter interactions by severity
 */
export function filterBySeverity(
  results: InteractionCheckResult[],
  severity: InteractionSeverity
): InteractionCheckResult[] {
  return results.filter(r => r.severity === severity);
}

/**
 * Check if a medication name is in our common drugs list
 */
export function isKnownDrug(name: string): boolean {
  const normalized = normalizeDrugName(name);
  return COMMON_DRUGS.some(drug => normalizeDrugName(drug) === normalized);
}

/**
 * Get interaction statistics
 */
export function getInteractionStats(results: InteractionCheckResult[]) {
  return {
    total: results.length,
    bySeverity: {
      contraindicated: results.filter(r => r.severity === 'contraindicated').length,
      major: results.filter(r => r.severity === 'major').length,
      moderate: results.filter(r => r.severity === 'moderate').length,
      minor: results.filter(r => r.severity === 'minor').length
    },
    byType: {
      drugDrug: results.filter(r => r.interaction.type === 'drug-drug').length,
      drugDisease: results.filter(r => r.interaction.type === 'drug-disease').length,
      drugFood: results.filter(r => r.interaction.type === 'drug-food').length,
      drugSupplement: results.filter(r => r.interaction.type === 'drug-supplement').length
    }
  };
}
