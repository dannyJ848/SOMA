/**
 * User-Friendly Interaction Explanations
 */

import type { DrugInteraction, InteractionExplanation } from './types.js';

const SEVERITY_TITLES: Record<string, string> = {
  contraindicated: 'Do Not Take Together',
  major: 'Important Interaction',
  moderate: 'Use With Caution',
  minor: 'Minor Caution Advised',
};

export function getUserFriendlyExplanation(interaction: DrugInteraction): InteractionExplanation {
  const severity = interaction.patientSpecificModifications?.severity || interaction.severity;
  
  return {
    severity,
    title: SEVERITY_TITLES[severity] || 'Drug Interaction',
    whatHappens: generateWhatHappens(interaction),
    whyItMatters: generateWhyItMatters(interaction),
    whatToWatchFor: generateSymptoms(interaction),
    whatToDo: generateActionSteps(interaction, severity),
    whenToSeekHelp: generateWhenToSeekHelp(severity),
    questionsToAsk: ['Is it safe to take these together?', 'What alternatives exist?', 'What should I monitor?'],
  };
}

function generateWhatHappens(interaction: DrugInteraction): string {
  const d1 = interaction.drug1.name;
  const d2 = interaction.drug2.name;
  const effect = interaction.clinicalEffect.toLowerCase();
  
  if (interaction.severity === 'contraindicated') {
    return 'Taking ' + d1 + ' and ' + d2 + ' together can cause: ' + effect;
  }
  return 'When you take ' + d1 + ' and ' + d2 + ' together, they may cause: ' + effect;
}

function generateWhyItMatters(interaction: DrugInteraction): string {
  if (interaction.type === 'pharmacokinetic') {
    return 'One medication affects how your body processes the other, changing drug levels.';
  }
  return 'Both medications affect similar systems, causing effects to add up.';
}

function generateSymptoms(interaction: DrugInteraction): string[] | undefined {
  const effect = interaction.clinicalEffect.toLowerCase();
  const symptoms: string[] = [];
  
  if (effect.includes('bleed') || effect.includes('hemorrhage')) {
    symptoms.push('Unusual bruising', 'Bleeding gums', 'Dark stools');
  }
  if (effect.includes('sedation') || effect.includes('respiratory')) {
    symptoms.push('Extreme drowsiness', 'Slow breathing', 'Confusion');
  }
  if (effect.includes('potassium')) {
    symptoms.push('Muscle weakness', 'Irregular heartbeat');
  }
  if (effect.includes('serotonin')) {
    symptoms.push('Agitation', 'Confusion', 'Rapid heartbeat', 'Fever');
  }
  
  return symptoms.length > 0 ? symptoms : undefined;
}

function generateActionSteps(interaction: DrugInteraction, severity: string): string[] {
  if (severity === 'contraindicated') {
    return ['Do NOT take these together', 'Contact your provider immediately'];
  }
  if (severity === 'major') {
    return ['Contact your provider before taking together', 'Be aware of symptoms'];
  }
  if (severity === 'moderate') {
    return ['Discuss with your healthcare provider', 'Report concerning symptoms'];
  }
  return ['This is usually not a concern', 'Tell your provider about unusual symptoms'];
}

function generateWhenToSeekHelp(severity: string): string {
  if (severity === 'contraindicated') {
    return 'Seek immediate medical attention.';
  }
  if (severity === 'major') {
    return 'Contact your provider right away if you have symptoms.';
  }
  return 'Contact your provider if symptoms are concerning.';
}
