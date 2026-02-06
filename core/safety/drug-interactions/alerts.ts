/**
 * Alert System for Drug Interactions
 * 
 * Generates severity-based visual alerts and plain-language explanations
 * with actionable recommendations for users.
 */

import {
  DrugInteraction,
  InteractionSeverity,
  InteractionType,
  SEVERITY_INFO,
  InteractionCheckResult,
  FullSafetyCheckResult
} from './checker';

// ============================================================================
// Alert Types
// ============================================================================

export interface InteractionAlert {
  id: string;
  severity: InteractionSeverity;
  title: string;
  message: string;
  details: {
    description: string;
    whatCouldHappen: string[];
    whatToDo: string[];
    askYourDoctor: string[];
    monitoringRequired?: string[];
    alternatives?: string[];
  };
  affectedItems: {
    medications: string[];
    conditions?: string[];
    supplements?: string[];
    foods?: string[];
  };
  mechanism: string;
  onset: string;
  evidenceLevel: string;
  timestamp: Date;
  dismissed: boolean;
  resolved: boolean;
}

export interface AlertSummary {
  totalAlerts: number;
  criticalCount: number;
  warningCount: number;
  infoCount: number;
  canProceed: boolean;
  requiresDoctorApproval: boolean;
  immediateActionRequired: boolean;
}

export interface PlainLanguageExplanation {
  summary: string;
  mechanismExplained: string;
  riskLevel: string;
  actionableSteps: string[];
  timeline: string;
  whenToSeekHelp: string[];
}

// ============================================================================
// Alert Generation
// ============================================================================

/**
 * Generate an alert from an interaction check result
 */
export function generateAlert(result: InteractionCheckResult): InteractionAlert {
  const interaction = result.interaction;
  const severityInfo = SEVERITY_INFO[interaction.severity];

  return {
    id: `alert-${interaction.id}-${Date.now()}`,
    severity: interaction.severity,
    title: generateAlertTitle(interaction, result),
    message: generateAlertMessage(interaction),
    details: {
      description: interaction.description,
      whatCouldHappen: interaction.clinicalEffects,
      whatToDo: [interaction.recommendation, ...(interaction.alternatives || [])],
      askYourDoctor: generateDoctorQuestions(interaction, result),
      monitoringRequired: interaction.monitoringRequired,
      alternatives: interaction.alternatives
    },
    affectedItems: {
      medications: result.involvingMedications,
      conditions: result.involvingConditions,
      supplements: result.involvingSupplements,
      foods: interaction.interactsWith.foods
    },
    mechanism: formatMechanism(interaction.mechanism),
    onset: formatOnset(interaction.onset),
    evidenceLevel: formatEvidenceLevel(interaction.evidenceLevel),
    timestamp: result.timestamp,
    dismissed: false,
    resolved: false
  };
}

/**
 * Generate alerts from a full safety check result
 */
export function generateAlertsFromCheck(result: FullSafetyCheckResult): InteractionAlert[] {
  const allResults = [
    ...result.interactions.drugDrug,
    ...result.interactions.drugDisease,
    ...result.interactions.drugFood,
    ...result.interactions.drugSupplement
  ];

  return allResults.map(generateAlert);
}

/**
 * Generate alert summary for quick assessment
 */
export function generateAlertSummary(alerts: InteractionAlert[]): AlertSummary {
  const criticalCount = alerts.filter(a => a.severity === 'contraindicated' || a.severity === 'major').length;
  const warningCount = alerts.filter(a => a.severity === 'moderate').length;
  const infoCount = alerts.filter(a => a.severity === 'minor').length;

  const hasContraindication = alerts.some(a => a.severity === 'contraindicated');
  const hasMajor = alerts.some(a => a.severity === 'major');

  return {
    totalAlerts: alerts.length,
    criticalCount,
    warningCount,
    infoCount,
    canProceed: !hasContraindication,
    requiresDoctorApproval: hasContraindication || hasMajor,
    immediateActionRequired: hasContraindication
  };
}

// ============================================================================
// Plain Language Explanations
// ============================================================================

/**
 * Generate a plain-language explanation of an interaction
 */
export function generatePlainLanguageExplanation(
  interaction: DrugInteraction
): PlainLanguageExplanation {
  return {
    summary: simplifyDescription(interaction.description),
    mechanismExplained: explainMechanism(interaction.mechanism),
    riskLevel: getRiskDescription(interaction.severity),
    actionableSteps: generateActionableSteps(interaction),
    timeline: explainTimeline(interaction.onset),
    whenToSeekHelp: getWhenToSeekHelp(interaction)
  };
}

/**
 * Simplify medical description for lay understanding
 */
function simplifyDescription(description: string): string {
  // Dictionary of medical terms to simpler alternatives
  const simplifications: Record<string, string> = {
    'CYP3A4': 'a liver enzyme',
    'CYP2C9': 'a liver enzyme',
    'CYP2D6': 'a liver enzyme',
    'CYP1A2': 'a liver enzyme',
    'inhibits': 'blocks',
    'inhibition': 'blocking',
    'induces': 'speeds up',
    'induction': 'speeding up',
    'metabolism': 'breakdown',
    'metabolite': 'breakdown product',
    'pharmacokinetic': 'how the body processes the drug',
    'pharmacodynamic': 'how the drug affects the body',
    'plasma levels': 'amount in blood',
    'bioavailability': 'amount absorbed',
    'excretion': 'removal from body',
    'clearance': 'removal from body',
    'protein binding': 'attachment to blood proteins',
    'displaces': 'pushes off',
    'antagonistic': 'opposing',
    'synergistic': 'combining',
    'additive': 'adding together',
    'contraindicated': 'should not be used together',
    'myopathy': 'muscle damage',
    'rhabdomyolysis': 'severe muscle breakdown',
    'hyperkalemia': 'high potassium levels',
    'hypertensive crisis': 'dangerously high blood pressure',
    'torsades de pointes': 'dangerous heart rhythm',
    'QT prolongation': 'heart rhythm change'
  };

  let simplified = description;
  Object.entries(simplifications).forEach(([medical, simple]) => {
    simplified = simplified.replace(new RegExp(medical, 'gi'), simple);
  });

  return simplified;
}

/**
 * Explain mechanism in plain language
 */
function explainMechanism(mechanism: string): string {
  const explanations: Record<string, string> = {
    'cyp450-inhibition': 'One drug blocks the liver enzyme that normally breaks down the other drug, causing it to build up in your body.',
    'cyp450-induction': 'One drug speeds up the liver enzyme that breaks down the other drug, causing it to be removed from your body too quickly.',
    'additive-effect': 'Both drugs have similar effects, and when taken together, these effects add up and become too strong.',
    'synergistic': 'The drugs work together in a way that creates a much stronger effect than either drug alone.',
    'antagonistic': 'The drugs work against each other, potentially making one or both less effective.',
    'pharmacodynamic': 'The drugs affect the same body system, which can cause problems when combined.',
    'pharmacokinetic': 'One drug changes how your body absorbs, distributes, or removes the other drug.',
    'serotonergic': 'Both drugs increase serotonin, and too much serotonin can be dangerous.',
    'qt-prolongation': 'Both drugs can affect your heart rhythm, and together they increase the risk of a dangerous heart rhythm.',
    'nephrotoxic': 'Both drugs can damage your kidneys, and together they increase this risk.',
    'hepatotoxic': 'Both drugs can damage your liver, and together they increase this risk.',
    'hematologic': 'The drugs affect your blood or blood clotting.',
    'hypotensive': 'Both drugs lower blood pressure, and together they may lower it too much.',
    'hyperkalemia': 'Both drugs increase potassium levels, which can cause heart problems.',
    'bleeding-risk': 'Both drugs increase bleeding risk, and together this risk is much higher.',
    'respiratory-depression': 'Both drugs slow breathing, and together they may slow it too much.',
    'metabolic': 'The drugs affect your metabolism or how your body processes nutrients.',
    'excretion-reduction': 'One drug reduces how quickly your body removes the other drug, causing it to build up.',
    'absorption-reduction': 'One substance prevents your body from absorbing the other drug properly.',
    'protein-binding-displacement': 'One drug pushes the other off blood proteins, increasing the active amount.',
    'unknown': 'The exact mechanism is not fully understood.'
  };

  return explanations[mechanism] || 'The interaction occurs through complex processes in your body.';
}

/**
 * Get risk description based on severity
 */
function getRiskDescription(severity: InteractionSeverity): string {
  const descriptions: Record<InteractionSeverity, string> = {
    'contraindicated': 'VERY HIGH RISK - These should never be taken together. Serious harm or death could occur.',
    'major': 'HIGH RISK - These combinations can cause serious problems and require medical supervision.',
    'moderate': 'MODERATE RISK - These combinations may cause problems and should be monitored by your doctor.',
    'minor': 'LOW RISK - These combinations are usually not serious, but be aware of potential effects.'
  };

  return descriptions[severity];
}

/**
 * Generate actionable steps
 */
function generateActionableSteps(interaction: DrugInteraction): string[] {
  const steps: string[] = [];

  if (interaction.severity === 'contraindicated') {
    steps.push('Do NOT take these medications together.');
    steps.push('Contact your doctor immediately to discuss alternatives.');
  } else if (interaction.severity === 'major') {
    steps.push('Talk to your doctor before starting or continuing these medications together.');
    steps.push('Your doctor may need to adjust doses or choose different medications.');
  } else if (interaction.severity === 'moderate') {
    steps.push('Discuss this combination with your doctor or pharmacist.');
    steps.push('You may need extra monitoring while taking these together.');
  } else {
    steps.push('Be aware of this interaction.');
    steps.push('Report any unusual symptoms to your doctor.');
  }

  if (interaction.monitoringRequired) {
    steps.push(`Monitoring needed: ${interaction.monitoringRequired.join(', ')}`);
  }

  return steps;
}

/**
 * Explain timeline in plain language
 */
function explainTimeline(onset: string): string {
  const timelines: Record<string, string> = {
    'rapid': 'Effects can happen within hours to a day of starting or changing the medication.',
    'delayed': 'Effects may take days to weeks to appear after starting the medication.',
    'variable': 'Effects can happen at any time - some people experience problems right away, while others may not have issues for weeks or months.'
  };

  return timelines[onset] || 'The timing of effects can vary.';
}

/**
 * Get when to seek help
 */
function getWhenToSeekHelp(interaction: DrugInteraction): string[] {
  const helpIndicators: Record<InteractionSeverity, string[]> = {
    'contraindicated': [
      'If you accidentally took these together, seek emergency medical help immediately.',
      'Call 911 if you experience severe symptoms like chest pain, difficulty breathing, or loss of consciousness.'
    ],
    'major': [
      'Contact your doctor if you experience any unusual symptoms.',
      'Seek emergency care for severe symptoms like chest pain, severe dizziness, or difficulty breathing.',
      'Report any signs of bleeding, severe muscle pain, or confusion immediately.'
    ],
    'moderate': [
      'Contact your doctor if symptoms persist or worsen.',
      'Seek care if you experience significant side effects.',
      'Regular check-ins with your doctor are recommended.'
    ],
    'minor': [
      'Contact your doctor if you have concerns.',
      'Report persistent or bothersome symptoms at your next appointment.'
    ]
  };

  return helpIndicators[interaction.severity];
}

// ============================================================================
// Helper Functions
// ============================================================================

function generateAlertTitle(interaction: DrugInteraction, result: InteractionCheckResult): string {
  const severityIcon = SEVERITY_INFO[interaction.severity].icon;
  const drugName = result.involvingMedications[0];
  const interactingWith = result.involvingMedications[1] || 
    result.involvingConditions?.[0] ||
    result.involvingSupplements?.[0] ||
    interaction.interactsWith.foods?.[0] ||
    interaction.interactsWith.name;

  return `${severityIcon} ${drugName} + ${interactingWith}`;
}

function generateAlertMessage(interaction: DrugInteraction): string {
  return `${SEVERITY_INFO[interaction.severity].name}: ${interaction.description}`;
}

function generateDoctorQuestions(interaction: DrugInteraction, result: InteractionCheckResult): string[] {
  const questions: string[] = [];

  questions.push(`Is it safe for me to take ${result.involvingMedications[0]} with my current medications?`);
  
  if (interaction.alternatives && interaction.alternatives.length > 0) {
    questions.push(`Are there safer alternatives like ${interaction.alternatives.slice(0, 2).join(' or ')}?`);
  }

  if (interaction.monitoringRequired) {
    questions.push(`What monitoring will I need: ${interaction.monitoringRequired.join(', ')}?`);
  }

  questions.push('How long should I watch for symptoms?');
  questions.push('What symptoms should prompt me to call you or seek emergency care?');

  return questions;
}

function formatMechanism(mechanism: string): string {
  return mechanism
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function formatOnset(onset: string): string {
  const onsetMap: Record<string, string> = {
    'rapid': 'Hours to 1 day',
    'delayed': 'Days to weeks',
    'variable': 'Variable timing'
  };
  return onsetMap[onset] || onset;
}

function formatEvidenceLevel(level: string): string {
  const levelMap: Record<string, string> = {
    'theoretical': 'Theoretical concern',
    'case-reports': 'Reported in case studies',
    'clinical-trial': 'Shown in clinical trials',
    'established': 'Well established'
  };
  return levelMap[level] || level;
}

// ============================================================================
// Alert Management
// ============================================================================

/**
 * Dismiss an alert (user acknowledged)
 */
export function dismissAlert(alert: InteractionAlert): InteractionAlert {
  return { ...alert, dismissed: true };
}

/**
 * Mark an alert as resolved
 */
export function resolveAlert(alert: InteractionAlert): InteractionAlert {
  return { ...alert, resolved: true, dismissed: true };
}

/**
 * Filter active (non-dismissed) alerts
 */
export function getActiveAlerts(alerts: InteractionAlert[]): InteractionAlert[] {
  return alerts.filter(a => !a.dismissed);
}

/**
 * Filter alerts by severity
 */
export function filterAlertsBySeverity(
  alerts: InteractionAlert[],
  severity: InteractionSeverity
): InteractionAlert[] {
  return alerts.filter(a => a.severity === severity);
}

/**
 * Get alerts requiring immediate attention
 */
export function getCriticalAlerts(alerts: InteractionAlert[]): InteractionAlert[] {
  return alerts.filter(a => a.severity === 'contraindicated' || a.severity === 'major');
}

/**
 * Generate a summary message for the user
 */
export function generateUserSummary(alerts: InteractionAlert[]): string {
  const summary = generateAlertSummary(alerts);

  if (summary.immediateActionRequired) {
    return `⚠️ URGENT: ${summary.criticalCount} contraindication(s) detected. Do not proceed without doctor approval.`;
  }

  if (summary.requiresDoctorApproval) {
    return `⚠️ CAUTION: ${summary.criticalCount} major interaction(s) found. Please consult your doctor before proceeding.`;
  }

  if (summary.warningCount > 0) {
    return `ℹ️ ${summary.warningCount} moderate interaction(s) detected. Review with your pharmacist.`;
  }

  if (summary.infoCount > 0) {
    return `ℹ️ ${summary.infoCount} minor interaction(s) found. Usually no action needed.`;
  }

  return '✅ No interactions detected. This medication appears safe with your current regimen.';
}
