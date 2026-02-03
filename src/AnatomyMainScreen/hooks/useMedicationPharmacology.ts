/**
 * useMedicationPharmacology Hook
 *
 * Aggregates real pharmacology data from the content databases and
 * medication-target-map to provide comprehensive medication information
 * for the MedicationTargets 3D visualization component.
 *
 * Data sources:
 * - medication-target-map.ts: organ/region mapping with mechanisms
 * - medication-database.ts: drug names, classes, side effects, warnings
 * - pharmacokinetics-database.ts: half-life, metabolism, therapeutic range
 * - drug-interactions-database.ts: drug-drug interactions
 * - side-effects-explained.ts: patient-friendly side effect explanations
 * - mechanisms-explained.ts: patient-friendly mechanism descriptions
 */

import { useMemo } from 'react';
import type { PatientMedication, MedicationTarget } from '../types';
import {
  MEDICATION_TARGET_MAP,
  getMedicationMapping,
  type MedicationTargetMapping,
} from '../../../core/anatomy-patient-bridge/medication-target-map';
import {
  getMedication,
  type MedicationEntry,
} from '../../../core/content/medications/medication-database';
import {
  getPKEntry,
  type PharmacokineticEntry,
} from '../../../core/content/pharmacology/pharmacokinetics-database';
import {
  getInteractionsForDrug,
  type DrugInteractionEntry,
} from '../../../core/content/pharmacology/drug-interactions-database';
import {
  getSideEffectsForDrug,
} from '../../../core/content/pharmacology/side-effects-explained';
import {
  searchMechanisms,
  type MechanismExplained,
} from '../../../core/content/pharmacology/mechanisms-explained';

// ============================================
// Enriched Medication Data Types
// ============================================

export interface EnrichedMedicationTarget extends MedicationTarget {
  /** Full drug name (capitalized) */
  drugName: string;
  /** Drug class (e.g., 'beta-blocker', 'SSRI') */
  drugClass: string;
  /** Mechanism of action specific to this target organ */
  organMechanism: string;
  /** General mechanism of action */
  generalMechanism: string;
  /** Patient-friendly mechanism explanation */
  patientMechanism?: string;
  /** Patient-friendly analogy */
  mechanismAnalogy?: string;
  /** Key side effects */
  sideEffects: string[];
  /** Patient-friendly side effect explanations */
  sideEffectExplanations: SideEffectExplanationSummary[];
  /** Drug interactions relevant to this medication */
  interactions: InteractionSummary[];
  /** Pharmacokinetic highlights */
  pharmacokinetics?: PKSummary;
  /** Warnings and precautions */
  warnings: string[];
  /** Patient counseling tip */
  patientTip?: string;
  /** RxNorm code for medication identification */
  rxNormCode?: string;
}

export interface SideEffectExplanationSummary {
  sideEffect: string;
  whyItHappens: string;
  whatToWatch: string[];
}

export interface InteractionSummary {
  interactingDrug: string;
  severity: 'major' | 'moderate' | 'minor';
  clinicalEffect: string;
  management: string;
}

export interface PKSummary {
  halfLife: string;
  metabolism: string;
  therapeuticRange: string;
  clinicalPearl: string;
  requiresMonitoring: boolean;
  narrowTherapeuticIndex: boolean;
}

export interface EnrichedMedicationData {
  /** Medication targets grouped by organ, enriched with real pharmacology data */
  targetsByOrgan: Map<string, EnrichedMedicationTarget[]>;
  /** All unique interactions across patient medications */
  allInteractions: InteractionSummary[];
  /** Cross-medication interaction warnings (between the patient's own meds) */
  crossInteractions: DrugInteractionEntry[];
  /** Summary statistics */
  stats: {
    totalMedications: number;
    totalTargetOrgans: number;
    totalInteractions: number;
    majorInteractions: number;
    narrowTherapeuticIndexDrugs: string[];
  };
}

// ============================================
// Internal Helpers
// ============================================

/**
 * Normalize a medication name to a key for lookup in MEDICATION_TARGET_MAP.
 */
function normalizeMedKey(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+\d+\s*mg.*$/i, '')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

/**
 * Look up the MedicationTargetMapping for a patient medication.
 */
function findTargetMapping(med: PatientMedication): MedicationTargetMapping | undefined {
  const byId = getMedicationMapping(med.id);
  if (byId) return byId;

  const normalizedName = normalizeMedKey(med.name);
  const byName = getMedicationMapping(normalizedName);
  if (byName) return byName;

  const keys = Object.keys(MEDICATION_TARGET_MAP);
  const partialKey = keys.find(
    (k) => normalizedName.includes(k) || k.includes(normalizedName)
  );
  if (partialKey) return MEDICATION_TARGET_MAP[partialKey];

  return undefined;
}

function findMedicationEntry(med: PatientMedication): MedicationEntry | undefined {
  const byId = getMedication(med.id);
  if (byId) return byId;
  return getMedication(normalizeMedKey(med.name));
}

function findPKEntry(med: PatientMedication): PharmacokineticEntry | undefined {
  const byId = getPKEntry(med.id);
  if (byId) return byId;
  return getPKEntry(normalizeMedKey(med.name));
}

function findMechanismExplanation(drugClass: string): MechanismExplained | undefined {
  const results = searchMechanisms(drugClass);
  return results.length > 0 ? results[0] : undefined;
}

function buildPKSummary(pk: PharmacokineticEntry): PKSummary {
  return {
    halfLife: pk.elimination.halfLife,
    metabolism: pk.metabolism.primaryCYP,
    therapeuticRange: pk.therapeuticRange,
    clinicalPearl: pk.clinicalPearl,
    requiresMonitoring: pk.category.includes('requires-monitoring'),
    narrowTherapeuticIndex: pk.category.includes('narrow-therapeutic-index'),
  };
}

function buildSideEffectSummaries(drugName: string): SideEffectExplanationSummary[] {
  const entries = getSideEffectsForDrug(drugName);
  return entries.map((entry) => ({
    sideEffect: entry.sideEffect,
    whyItHappens: entry.levels[2].whyItHappens,
    whatToWatch: entry.whatToWatch,
  }));
}

function buildInteractionSummaries(drugName: string): InteractionSummary[] {
  const entries = getInteractionsForDrug(drugName);
  return entries.map((entry) => ({
    interactingDrug: entry.drug1.toLowerCase().includes(drugName.toLowerCase())
      ? entry.drug2
      : entry.drug1,
    severity: entry.severity,
    clinicalEffect: entry.clinicalEffect,
    management: entry.management,
  }));
}

// ============================================
// Main Hook
// ============================================

export function useMedicationPharmacology(
  medications: PatientMedication[]
): EnrichedMedicationData {
  return useMemo(() => {
    const targetsByOrgan = new Map<string, EnrichedMedicationTarget[]>();
    const allInteractions: InteractionSummary[] = [];
    const crossInteractions: DrugInteractionEntry[] = [];
    const narrowTherapeuticIndexDrugs: string[] = [];
    const seenInteractionIds = new Set<string>();

    for (const med of medications) {
      const targetMapping = findTargetMapping(med);
      const medEntry = findMedicationEntry(med);
      const pkEntry = findPKEntry(med);
      const drugName = targetMapping?.medicationName ?? med.name;
      const drugClass = targetMapping?.drugClass ?? medEntry?.class ?? '';

      const mechanismExplained = findMechanismExplanation(drugClass);
      const pkSummary = pkEntry ? buildPKSummary(pkEntry) : undefined;
      if (pkSummary?.narrowTherapeuticIndex) {
        narrowTherapeuticIndexDrugs.push(drugName);
      }

      const sideEffectExplanations = buildSideEffectSummaries(drugName);
      const interactionSummaries = buildInteractionSummaries(drugName);

      for (const interaction of interactionSummaries) {
        const key = [drugName, interaction.interactingDrug].sort().join('_');
        if (!seenInteractionIds.has(key)) {
          seenInteractionIds.add(key);
          allInteractions.push(interaction);
        }
      }

      const generalMechanism = medEntry?.mechanism ?? '';
      const patientMechanism = mechanismExplained?.whatItDoes;
      const mechanismAnalogy = mechanismExplained?.analogy;
      const sideEffects = medEntry?.sideEffects ?? [];
      const warnings = medEntry?.warnings ?? [];
      const patientTip = medEntry?.patientTip;

      if (targetMapping) {
        for (const target of targetMapping.primaryTargets) {
          const organKey = target.organ;
          const existing = targetsByOrgan.get(organKey) || [];
          existing.push({
            medication: med,
            effectType: 'therapeutic',
            isPrimaryTarget: true,
            drugName,
            drugClass,
            organMechanism: target.effect,
            generalMechanism,
            patientMechanism,
            mechanismAnalogy,
            sideEffects,
            sideEffectExplanations,
            interactions: interactionSummaries,
            pharmacokinetics: pkSummary,
            warnings,
            patientTip,
            rxNormCode: targetMapping.rxNormCode,
          });
          targetsByOrgan.set(organKey, existing);
        }

        if (targetMapping.secondaryTargets) {
          for (const target of targetMapping.secondaryTargets) {
            const organKey = target.organ;
            const existing = targetsByOrgan.get(organKey) || [];

            const effectText = target.effect.toLowerCase();
            let effectType: 'therapeutic' | 'side-effect' | 'protective' = 'side-effect';
            if (
              effectText.includes('protect') ||
              effectText.includes('reduces remodeling') ||
              effectText.includes('nephroprotect') ||
              (effectText.includes('cardiovascular') && effectText.includes('benefit'))
            ) {
              effectType = 'protective';
            } else if (
              effectText.includes('may cause') ||
              effectText.includes('risk of') ||
              effectText.includes('may affect') ||
              effectText.includes('toxicity') ||
              effectText.includes('sensitivity') ||
              effectText.includes('damage') ||
              effectText.includes('disrupt') ||
              effectText.includes('prolong')
            ) {
              effectType = 'side-effect';
            } else {
              effectType = 'therapeutic';
            }

            existing.push({
              medication: med,
              effectType,
              isPrimaryTarget: false,
              drugName,
              drugClass,
              organMechanism: target.effect,
              generalMechanism,
              patientMechanism,
              mechanismAnalogy,
              sideEffects,
              sideEffectExplanations,
              interactions: interactionSummaries,
              pharmacokinetics: pkSummary,
              warnings,
              patientTip,
              rxNormCode: targetMapping.rxNormCode,
            });
            targetsByOrgan.set(organKey, existing);
          }
        }
      } else {
        for (const organId of med.targetOrgans) {
          const existing = targetsByOrgan.get(organId) || [];
          existing.push({
            medication: med,
            effectType: 'therapeutic',
            isPrimaryTarget: true,
            drugName,
            drugClass,
            organMechanism: generalMechanism,
            generalMechanism,
            patientMechanism,
            mechanismAnalogy,
            sideEffects,
            sideEffectExplanations,
            interactions: interactionSummaries,
            pharmacokinetics: pkSummary,
            warnings,
            patientTip,
          });
          targetsByOrgan.set(organId, existing);
        }
      }
    }

    // Detect cross-interactions between the patient's own medications
    const medNames = medications.map((m) => m.name.toLowerCase());
    for (let i = 0; i < medNames.length; i++) {
      const iInteractions = getInteractionsForDrug(medNames[i]);
      for (const interaction of iInteractions) {
        const otherDrug =
          interaction.drug1.toLowerCase().includes(medNames[i])
            ? interaction.drug2.toLowerCase()
            : interaction.drug1.toLowerCase();

        for (let j = 0; j < medNames.length; j++) {
          if (i !== j && otherDrug.includes(medNames[j])) {
            if (!crossInteractions.some((ci) => ci.id === interaction.id)) {
              crossInteractions.push(interaction);
            }
          }
        }
      }
    }

    return {
      targetsByOrgan,
      allInteractions,
      crossInteractions,
      stats: {
        totalMedications: medications.length,
        totalTargetOrgans: targetsByOrgan.size,
        totalInteractions: allInteractions.length,
        majorInteractions: allInteractions.filter((i) => i.severity === 'major').length,
        narrowTherapeuticIndexDrugs,
      },
    };
  }, [medications]);
}

export default useMedicationPharmacology;
