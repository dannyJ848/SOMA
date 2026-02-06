/**
 * Safety Reports Module
 * 
 * Generates comprehensive safety reports for doctor visits,
 * tracks resolved interactions, and manages report history.
 */

import {
  UserMedication,
  UserCondition,
  UserSupplement,
  InteractionCheckResult,
  SafetyReport,
  scanAllMedications,
  sortBySeverity,
  getSeverityName,
  getSeverityColor
} from './checker';
import { InteractionAlert, generateAlert, generateAlertSummary } from './alerts';

// ============================================================================
// Report Types
// ============================================================================

export interface DoctorVisitReport {
  reportId: string;
  generatedAt: Date;
  patientSummary: {
    totalMedications: number;
    totalConditions: number;
    totalSupplements: number;
  };
  criticalFindings: ReportFinding[];
  moderateFindings: ReportFinding[];
  minorFindings: ReportFinding[];
  resolvedInteractions: ResolvedInteraction[];
  medicationList: MedicationListItem[];
  recommendationsForDoctor: string[];
  questionsToAsk: string[];
  printVersion: string;
}

export interface ReportFinding {
  severity: string;
  medications: string[];
  description: string;
  mechanism: string;
  clinicalEffects: string[];
  recommendation: string;
  monitoringRequired?: string[];
  alternatives?: string[];
  evidenceLevel: string;
}

export interface ResolvedInteraction {
  interactionId: string;
  medications: string[];
  originalSeverity: string;
  resolvedDate: Date;
  resolutionReason: string;
  resolvedBy?: string;
}

export interface MedicationListItem {
  name: string;
  dosage: string;
  frequency: string;
  purpose?: string;
  prescribedBy?: string;
  startDate?: Date;
}

export interface ReportOptions {
  includeInactiveMedications?: boolean;
  includeFoodInteractions?: boolean;
  includeSupplementInteractions?: boolean;
  dateRange?: { start: Date; end: Date };
  format?: 'clinical' | 'patient-friendly';
}

// ============================================================================
// Report Generation
// ============================================================================

/**
 * Generate a comprehensive safety report for doctor visit
 */
export function generateDoctorVisitReport(
  medications: UserMedication[],
  conditions: UserCondition[],
  supplements: UserSupplement[],
  resolvedInteractionIds: string[] = [],
  options: ReportOptions = {}
): DoctorVisitReport {
  const opts = {
    includeInactiveMedications: false,
    includeFoodInteractions: true,
    includeSupplementInteractions: true,
    format: 'clinical',
    ...options
  };

  // Get current interactions
  const currentInteractions = scanAllMedications(medications, conditions, supplements);
  
  // Filter out resolved interactions
  const activeInteractions = currentInteractions.filter(
    i => !resolvedInteractionIds.includes(i.interaction.id)
  );

  // Sort by severity
  const sortedInteractions = sortBySeverity(activeInteractions);

  // Generate findings
  const allFindings = sortedInteractions.map(convertToFinding);
  const criticalFindings = allFindings.filter(f => f.severity === 'Contraindicated' || f.severity === 'Major');
  const moderateFindings = allFindings.filter(f => f.severity === 'Moderate');
  const minorFindings = allFindings.filter(f => f.severity === 'Minor');

  // Generate medication list
  const medicationList = generateMedicationList(medications, opts.includeInactiveMedications);

  // Generate recommendations and questions
  const recommendationsForDoctor = generateDoctorRecommendations(sortedInteractions);
  const questionsToAsk = generateQuestionsForDoctor(sortedInteractions);

  // Generate print version
  const printVersion = generatePrintVersion({
    generatedAt: new Date(),
    patientSummary: {
      totalMedications: medications.filter(m => m.isActive).length,
      totalConditions: conditions.filter(c => c.isActive).length,
      totalSupplements: supplements.filter(s => s.isActive).length
    },
    criticalFindings,
    moderateFindings,
    minorFindings,
    medicationList,
    recommendationsForDoctor,
    questionsToAsk
  });

  return {
    reportId: `report-${Date.now()}`,
    generatedAt: new Date(),
    patientSummary: {
      totalMedications: medications.filter(m => m.isActive).length,
      totalConditions: conditions.filter(c => c.isActive).length,
      totalSupplements: supplements.filter(s => s.isActive).length
    },
    criticalFindings,
    moderateFindings,
    minorFindings,
    resolvedInteractions: [], // Would be populated from stored data
    medicationList,
    recommendationsForDoctor,
    questionsToAsk,
    printVersion
  };
}

/**
 * Generate a quick summary report
 */
export function generateQuickSummary(
  medications: UserMedication[],
  conditions: UserCondition[],
  supplements: UserSupplement[]
): {
  safeToProceed: boolean;
  interactionCount: number;
  criticalCount: number;
  summaryText: string;
  topConcern?: string;
} {
  const interactions = scanAllMedications(medications, conditions, supplements);
  const sorted = sortBySeverity(interactions);
  
  const criticalCount = sorted.filter(i => 
    i.severity === 'contraindicated' || i.severity === 'major'
  ).length;

  const safeToProceed = criticalCount === 0;

  let summaryText: string;
  let topConcern: string | undefined;

  if (sorted.length === 0) {
    summaryText = 'No interactions detected with current medications and conditions.';
  } else if (sorted[0].severity === 'contraindicated') {
    summaryText = `CRITICAL: Contraindication detected with ${sorted[0].involvingMedications.join(' + ')}.`;
    topConcern = sorted[0].interaction.description;
  } else if (sorted[0].severity === 'major') {
    summaryText = `WARNING: ${criticalCount} major interaction(s) detected. Medical consultation recommended.`;
    topConcern = sorted[0].interaction.description;
  } else if (sorted[0].severity === 'moderate') {
    summaryText = `CAUTION: ${sorted.filter(i => i.severity === 'moderate').length} moderate interaction(s) found.`;
  } else {
    summaryText = `INFO: ${sorted.length} minor interaction(s) detected. Usually no action needed.`;
  }

  return {
    safeToProceed,
    interactionCount: interactions.length,
    criticalCount,
    summaryText,
    topConcern
  };
}

// ============================================================================
// Resolved Interaction Management
// ============================================================================

/**
 * Mark an interaction as resolved
 */
export function resolveInteraction(
  interaction: InteractionCheckResult,
  reason: string,
  resolvedBy?: string
): ResolvedInteraction {
  return {
    interactionId: interaction.interaction.id,
    medications: interaction.involvingMedications,
    originalSeverity: interaction.severity,
    resolvedDate: new Date(),
    resolutionReason: reason,
    resolvedBy
  };
}

/**
 * Create a safety report with resolved interactions
 */
export function createSafetyReport(
  medications: UserMedication[],
  conditions: UserCondition[],
  supplements: UserSupplement[],
  resolvedInteractions: ResolvedInteraction[] = [],
  notes?: string
): SafetyReport {
  const allInteractions = scanAllMedications(medications, conditions, supplements);
  
  return {
    id: `safety-${Date.now()}`,
    generatedAt: new Date(),
    medications: medications.filter(m => m.isActive),
    conditions: conditions.filter(c => c.isActive),
    supplements: supplements.filter(s => s.isActive),
    allInteractions,
    resolvedInteractions: resolvedInteractions.map(r => r.interactionId),
    notes
  };
}

/**
 * Check if an interaction is resolved
 */
export function isInteractionResolved(
  interaction: InteractionCheckResult,
  resolvedIds: string[]
): boolean {
  return resolvedIds.includes(interaction.interaction.id);
}

/**
 * Get unresolved interactions only
 */
export function getUnresolvedInteractions(
  interactions: InteractionCheckResult[],
  resolvedIds: string[]
): InteractionCheckResult[] {
  return interactions.filter(i => !resolvedIds.includes(i.interaction.id));
}

// ============================================================================
// Helper Functions
// ============================================================================

function convertToFinding(result: InteractionCheckResult): ReportFinding {
  return {
    severity: getSeverityName(result.severity),
    medications: result.involvingMedications,
    description: result.interaction.description,
    mechanism: result.interaction.mechanism,
    clinicalEffects: result.interaction.clinicalEffects,
    recommendation: result.interaction.recommendation,
    monitoringRequired: result.interaction.monitoringRequired,
    alternatives: result.interaction.alternatives,
    evidenceLevel: result.interaction.evidenceLevel
  };
}

function generateMedicationList(
  medications: UserMedication[],
  includeInactive: boolean
): MedicationListItem[] {
  const meds = includeInactive 
    ? medications 
    : medications.filter(m => m.isActive);

  return meds.map(m => ({
    name: m.name,
    dosage: m.dosage,
    frequency: m.frequency,
    purpose: m.purpose,
    prescribedBy: m.prescribedBy,
    startDate: m.startDate
  }));
}

function generateDoctorRecommendations(interactions: InteractionCheckResult[]): string[] {
  const recommendations: string[] = [];

  const contraindications = interactions.filter(i => i.severity === 'contraindicated');
  const majors = interactions.filter(i => i.severity === 'major');

  if (contraindications.length > 0) {
    recommendations.push('Review and address contraindicated combinations immediately');
    contraindications.forEach(c => {
      recommendations.push(`  - Consider alternatives to: ${c.involvingMedications.join(' + ')}`);
    });
  }

  if (majors.length > 0) {
    recommendations.push('Evaluate need for therapy modification for major interactions');
  }

  // Add monitoring recommendations
  const monitoringNeeds = new Set<string>();
  interactions.forEach(i => {
    i.interaction.monitoringRequired?.forEach(m => monitoringNeeds.add(m));
  });

  if (monitoringNeeds.size > 0) {
    recommendations.push('Monitoring recommendations:');
    monitoringNeeds.forEach(m => recommendations.push(`  - ${m}`));
  }

  return recommendations;
}

function generateQuestionsForDoctor(interactions: InteractionCheckResult[]): string[] {
  const questions = new Set<string>();

  interactions.forEach(i => {
    if (i.severity === 'contraindicated' || i.severity === 'major') {
      questions.add(`Is ${i.involvingMedications[0]} safe to take with ${i.involvingMedications[1] || 'my condition'}?`);
    }
  });

  if (interactions.length > 0) {
    questions.add('Are there any medication adjustments I should make?');
    questions.add('What symptoms should I watch for?');
    questions.add('When should I contact you about side effects?');
  }

  return Array.from(questions);
}

function generatePrintVersion(report: Omit<DoctorVisitReport, 'reportId' | 'printVersion' | 'resolvedInteractions'>): string {
  const lines: string[] = [];
  
  lines.push('='.repeat(60));
  lines.push('MEDICATION SAFETY REPORT');
  lines.push('='.repeat(60));
  lines.push(`Generated: ${report.generatedAt.toLocaleString()}`);
  lines.push('');
  
  lines.push('PATIENT SUMMARY');
  lines.push('-'.repeat(40));
  lines.push(`Active Medications: ${report.patientSummary.totalMedications}`);
  lines.push(`Active Conditions: ${report.patientSummary.totalConditions}`);
  lines.push(`Active Supplements: ${report.patientSummary.totalSupplements}`);
  lines.push('');

  if (report.criticalFindings.length > 0) {
    lines.push('⚠️  CRITICAL FINDINGS (Contraindications & Major Interactions)');
    lines.push('-'.repeat(40));
    report.criticalFindings.forEach(f => {
      lines.push(`SEVERITY: ${f.severity.toUpperCase()}`);
      lines.push(`Medications: ${f.medications.join(' + ')}`);
      lines.push(`Description: ${f.description}`);
      lines.push(`Recommendation: ${f.recommendation}`);
      lines.push('');
    });
  }

  if (report.moderateFindings.length > 0) {
    lines.push('⚠️  MODERATE INTERACTIONS');
    lines.push('-'.repeat(40));
    report.moderateFindings.forEach(f => {
      lines.push(`Medications: ${f.medications.join(' + ')}`);
      lines.push(`Description: ${f.description}`);
      lines.push('');
    });
  }

  lines.push('CURRENT MEDICATIONS');
  lines.push('-'.repeat(40));
  report.medicationList.forEach(m => {
    lines.push(`${m.name} - ${m.dosage} - ${m.frequency}`);
    if (m.purpose) lines.push(`  Purpose: ${m.purpose}`);
  });
  lines.push('');

  if (report.recommendationsForDoctor.length > 0) {
    lines.push('RECOMMENDATIONS FOR DOCTOR');
    lines.push('-'.repeat(40));
    report.recommendationsForDoctor.forEach(r => lines.push(`• ${r}`));
    lines.push('');
  }

  if (report.questionsToAsk.length > 0) {
    lines.push('QUESTIONS TO ASK YOUR DOCTOR');
    lines.push('-'.repeat(40));
    report.questionsToAsk.forEach((q, i) => lines.push(`${i + 1}. ${q}`));
  }

  lines.push('');
  lines.push('='.repeat(60));
  lines.push('This report was generated by Biological Self Drug Interaction Checker');
  lines.push('Bring this report to your next doctor appointment');
  lines.push('='.repeat(60));

  return lines.join('\n');
}

// ============================================================================
// Export/Import
// ============================================================================

/**
 * Export report as JSON
 */
export function exportReportAsJSON(report: DoctorVisitReport): string {
  return JSON.stringify(report, null, 2);
}

/**
 * Export report as text for printing
 */
export function exportReportAsText(report: DoctorVisitReport): string {
  return report.printVersion;
}

/**
 * Create a shareable summary
 */
export function createShareableSummary(report: DoctorVisitReport): string {
  const lines: string[] = [];
  
  lines.push('Medication Safety Summary');
  lines.push(`Generated: ${report.generatedAt.toLocaleDateString()}`);
  lines.push('');
  lines.push(`Medications: ${report.patientSummary.totalMedications}`);
  lines.push(`Critical Issues: ${report.criticalFindings.length}`);
  lines.push(`Moderate Issues: ${report.moderateFindings.length}`);
  lines.push('');
  
  if (report.criticalFindings.length > 0) {
    lines.push('Requires immediate medical attention');
  } else if (report.moderateFindings.length > 0) {
    lines.push('Review recommended with healthcare provider');
  } else {
    lines.push('No significant interactions detected');
  }

  return lines.join('\n');
}
