/**
 * Report Generator
 *
 * Generates structured health reports from dashboard data and user inputs.
 */

import type {
  HealthSummaryReport,
  SymptomHistoryReport,
  MedicationReport,
  LabTrendsReport,
  DoctorVisitReport,
  ConditionSummaryReport,
  ExportableCondition,
  ExportableMedication,
  ExportableLabResult,
  ExportableSymptom,
  ExportableVitals,
} from './types';
import { calculateLabTrends, calculateSymptomSummary } from './exportUtils';

// ============================================
// Dashboard Data Interface (from App.tsx)
// ============================================

interface DashboardData {
  summary: {
    totalConditions: number;
    totalMedications: number;
    totalLabResults: number;
    totalWhoopCycles: number;
    totalAppleHealthDays: number;
    lastUpdated: string | null;
  };
  activeConditions: Array<{
    id: string;
    name: string;
    status: string;
    severity?: string;
    diagnosedDate?: string;
  }>;
  currentMedications: Array<{
    id: string;
    name: string;
    dosage?: string;
    frequency?: string;
  }>;
  recentLabs: Array<{
    id: string;
    testName: string;
    value: number | string;
    unit?: string;
    status?: string;
    collectedAt: string;
    trend?: 'up' | 'down' | 'stable' | null;
    previousValue?: number | string;
  }>;
  vitalsSummary: {
    restingHeartRate?: number;
    hrv?: number;
    sleepHours?: number;
    recoveryScore?: number;
    steps?: number;
    lastUpdated?: string;
  };
  recentSymptoms: Array<{
    id: string;
    description: string;
    severity: number;
    location?: string;
    onsetDate: string;
  }>;
}

// ============================================
// Report Generator Class
// ============================================

export class ReportGenerator {
  private dashboardData: DashboardData | null;
  private userDemographics: {
    name?: string;
    dateOfBirth?: string;
    sex?: string;
    bloodType?: string;
    allergies?: string[];
  } | null;

  constructor(
    dashboardData: DashboardData | null = null,
    userDemographics: { name?: string; dateOfBirth?: string; sex?: string; bloodType?: string; allergies?: string[] } | null = null
  ) {
    this.dashboardData = dashboardData;
    this.userDemographics = userDemographics;
  }

  /**
   * Update dashboard data
   */
  setDashboardData(data: DashboardData): void {
    this.dashboardData = data;
  }

  /**
   * Update user demographics
   */
  setUserDemographics(demographics: { name?: string; dateOfBirth?: string; sex?: string; bloodType?: string; allergies?: string[] }): void {
    this.userDemographics = demographics;
  }

  // ============================================
  // Health Summary Report
  // ============================================

  generateHealthSummary(): HealthSummaryReport {
    const now = new Date().toISOString();

    if (!this.dashboardData) {
      return {
        generatedAt: now,
        reportType: 'health-summary',
        conditions: [],
        medications: [],
        recentLabs: [],
        recentSymptoms: [],
        vitals: { date: now },
      };
    }

    const conditions: ExportableCondition[] = this.dashboardData.activeConditions.map(c => ({
      id: c.id,
      name: c.name,
      status: c.status as 'active' | 'resolved' | 'managed',
      severity: c.severity,
      diagnosedDate: c.diagnosedDate,
    }));

    const medications: ExportableMedication[] = this.dashboardData.currentMedications.map(m => ({
      id: m.id,
      name: m.name,
      dosage: m.dosage,
      frequency: m.frequency,
    }));

    const recentLabs: ExportableLabResult[] = this.dashboardData.recentLabs.map(l => ({
      id: l.id,
      testName: l.testName,
      value: l.value,
      unit: l.unit,
      status: l.status as 'normal' | 'low' | 'high' | 'critical' | undefined,
      collectedAt: l.collectedAt,
    }));

    const recentSymptoms: ExportableSymptom[] = this.dashboardData.recentSymptoms.map(s => ({
      id: s.id,
      description: s.description,
      severity: s.severity,
      location: s.location,
      onsetDate: s.onsetDate,
    }));

    const vitals: ExportableVitals = {
      date: this.dashboardData.vitalsSummary.lastUpdated || now,
      restingHeartRate: this.dashboardData.vitalsSummary.restingHeartRate,
      hrv: this.dashboardData.vitalsSummary.hrv,
      sleepHours: this.dashboardData.vitalsSummary.sleepHours,
      recoveryScore: this.dashboardData.vitalsSummary.recoveryScore,
      steps: this.dashboardData.vitalsSummary.steps,
    };

    // Calculate age if date of birth is provided
    let age: number | undefined;
    if (this.userDemographics?.dateOfBirth) {
      const birthDate = new Date(this.userDemographics.dateOfBirth);
      const today = new Date();
      age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
    }

    return {
      generatedAt: now,
      reportType: 'health-summary',
      patientInfo: this.userDemographics ? {
        name: this.userDemographics.name,
        dateOfBirth: this.userDemographics.dateOfBirth,
        age,
        sex: this.userDemographics.sex,
        bloodType: this.userDemographics.bloodType,
      } : undefined,
      conditions,
      medications,
      recentLabs,
      recentSymptoms,
      vitals,
      allergies: this.userDemographics?.allergies,
    };
  }

  // ============================================
  // Symptom History Report
  // ============================================

  generateSymptomHistory(
    symptoms: ExportableSymptom[],
    dateRange?: { start: string; end: string }
  ): SymptomHistoryReport {
    const now = new Date().toISOString();

    // Filter by date range if provided
    let filteredSymptoms = symptoms;
    if (dateRange) {
      const startDate = new Date(dateRange.start).getTime();
      const endDate = new Date(dateRange.end).getTime();
      filteredSymptoms = symptoms.filter(s => {
        const symptomDate = new Date(s.onsetDate).getTime();
        return symptomDate >= startDate && symptomDate <= endDate;
      });
    }

    // Calculate summary statistics
    const summary = calculateSymptomSummary(filteredSymptoms);

    // Determine date range from symptoms if not provided
    const actualDateRange = dateRange || (() => {
      if (filteredSymptoms.length === 0) {
        return { start: now, end: now };
      }
      const dates = filteredSymptoms.map(s => new Date(s.onsetDate).getTime());
      return {
        start: new Date(Math.min(...dates)).toISOString(),
        end: new Date(Math.max(...dates)).toISOString(),
      };
    })();

    return {
      generatedAt: now,
      reportType: 'symptom-history',
      dateRange: actualDateRange,
      symptoms: filteredSymptoms,
      summary,
    };
  }

  // ============================================
  // Medication Report
  // ============================================

  generateMedicationReport(
    activeMedications: ExportableMedication[],
    pastMedications: ExportableMedication[] = [],
    interactions?: Array<{
      medication1: string;
      medication2: string;
      severity: 'minor' | 'moderate' | 'major' | 'contraindicated';
      description: string;
    }>
  ): MedicationReport {
    const now = new Date().toISOString();

    return {
      generatedAt: now,
      reportType: 'medication-report',
      activeMedications,
      pastMedications,
      interactions,
    };
  }

  // ============================================
  // Lab Trends Report
  // ============================================

  generateLabTrendsReport(
    labResults: ExportableLabResult[],
    dateRange?: { start: string; end: string }
  ): LabTrendsReport {
    const now = new Date().toISOString();

    // Filter by date range if provided
    let filteredLabs = labResults;
    if (dateRange) {
      const startDate = new Date(dateRange.start).getTime();
      const endDate = new Date(dateRange.end).getTime();
      filteredLabs = labResults.filter(l => {
        const labDate = new Date(l.collectedAt).getTime();
        return labDate >= startDate && labDate <= endDate;
      });
    }

    // Calculate trends
    const trends = calculateLabTrends(filteredLabs);

    // Find abnormal results
    const abnormalResults = filteredLabs.filter(
      l => l.status && ['low', 'high', 'critical'].includes(l.status)
    );

    // Determine date range from labs if not provided
    const actualDateRange = dateRange || (() => {
      if (filteredLabs.length === 0) {
        return { start: now, end: now };
      }
      const dates = filteredLabs.map(l => new Date(l.collectedAt).getTime());
      return {
        start: new Date(Math.min(...dates)).toISOString(),
        end: new Date(Math.max(...dates)).toISOString(),
      };
    })();

    return {
      generatedAt: now,
      reportType: 'lab-trends',
      dateRange: actualDateRange,
      labResults: filteredLabs,
      trends,
      abnormalResults,
    };
  }

  // ============================================
  // Condition Summary Report
  // ============================================

  generateConditionSummary(
    condition: ExportableCondition & {
      overview?: string;
      affectedSystems?: string[];
      relatedConditions?: string[];
      managementPlan?: string;
      followUpSchedule?: string;
    },
    relatedMedications: ExportableMedication[] = [],
    relatedLabs: ExportableLabResult[] = [],
    timeline: Array<{ date: string; event: string; type: 'diagnosis' | 'treatment' | 'test' | 'milestone' }> = []
  ): ConditionSummaryReport {
    const now = new Date().toISOString();

    return {
      generatedAt: now,
      reportType: 'condition-summary',
      condition,
      relatedMedications,
      relatedLabs,
      timeline,
    };
  }

  // ============================================
  // Doctor Visit Report
  // ============================================

  generateDoctorVisitReport(
    options: {
      visitPurpose?: string;
      currentConcerns?: string[];
      questionsForDoctor?: string[];
      notes?: string;
    } = {}
  ): DoctorVisitReport {
    const now = new Date().toISOString();

    if (!this.dashboardData) {
      return {
        generatedAt: now,
        reportType: 'doctor-visit',
        visitPurpose: options.visitPurpose,
        currentConcerns: options.currentConcerns || [],
        currentSymptoms: [],
        medicationList: [],
        recentLabResults: [],
        questionsForDoctor: options.questionsForDoctor || [],
        vitals: { date: now },
        notes: options.notes,
      };
    }

    const currentSymptoms: ExportableSymptom[] = this.dashboardData.recentSymptoms.map(s => ({
      id: s.id,
      description: s.description,
      severity: s.severity,
      location: s.location,
      onsetDate: s.onsetDate,
    }));

    const medicationList: ExportableMedication[] = this.dashboardData.currentMedications.map(m => ({
      id: m.id,
      name: m.name,
      dosage: m.dosage,
      frequency: m.frequency,
    }));

    const recentLabResults: ExportableLabResult[] = this.dashboardData.recentLabs
      .slice(0, 10) // Limit to 10 most recent
      .map(l => ({
        id: l.id,
        testName: l.testName,
        value: l.value,
        unit: l.unit,
        status: l.status as 'normal' | 'low' | 'high' | 'critical' | undefined,
        collectedAt: l.collectedAt,
      }));

    const vitals: ExportableVitals = {
      date: this.dashboardData.vitalsSummary.lastUpdated || now,
      restingHeartRate: this.dashboardData.vitalsSummary.restingHeartRate,
      hrv: this.dashboardData.vitalsSummary.hrv,
      sleepHours: this.dashboardData.vitalsSummary.sleepHours,
      recoveryScore: this.dashboardData.vitalsSummary.recoveryScore,
      steps: this.dashboardData.vitalsSummary.steps,
    };

    return {
      generatedAt: now,
      reportType: 'doctor-visit',
      visitPurpose: options.visitPurpose,
      currentConcerns: options.currentConcerns || [],
      currentSymptoms,
      medicationList,
      recentLabResults,
      questionsForDoctor: options.questionsForDoctor || [],
      vitals,
      notes: options.notes,
    };
  }
}

// ============================================
// Singleton Factory
// ============================================

let reportGeneratorInstance: ReportGenerator | null = null;

export function getReportGenerator(
  dashboardData?: DashboardData | null,
  userDemographics?: { name?: string; dateOfBirth?: string; sex?: string; bloodType?: string; allergies?: string[] } | null
): ReportGenerator {
  if (!reportGeneratorInstance) {
    reportGeneratorInstance = new ReportGenerator(dashboardData, userDemographics);
  } else {
    if (dashboardData) {
      reportGeneratorInstance.setDashboardData(dashboardData);
    }
    if (userDemographics) {
      reportGeneratorInstance.setUserDemographics(userDemographics);
    }
  }
  return reportGeneratorInstance;
}

// ============================================
// Quick Report Functions
// ============================================

export function quickHealthSummary(dashboardData: DashboardData): HealthSummaryReport {
  const generator = new ReportGenerator(dashboardData);
  return generator.generateHealthSummary();
}

export function quickDoctorVisitReport(
  dashboardData: DashboardData,
  options?: {
    visitPurpose?: string;
    currentConcerns?: string[];
    questionsForDoctor?: string[];
  }
): DoctorVisitReport {
  const generator = new ReportGenerator(dashboardData);
  return generator.generateDoctorVisitReport(options);
}

export function quickMedicationReport(
  dashboardData: DashboardData
): MedicationReport {
  const medications: ExportableMedication[] = dashboardData.currentMedications.map(m => ({
    id: m.id,
    name: m.name,
    dosage: m.dosage,
    frequency: m.frequency,
  }));
  const generator = new ReportGenerator(dashboardData);
  return generator.generateMedicationReport(medications, []);
}

export function quickLabTrendsReport(
  dashboardData: DashboardData,
  dateRange?: { start: string; end: string }
): LabTrendsReport {
  const labs: ExportableLabResult[] = dashboardData.recentLabs.map(l => ({
    id: l.id,
    testName: l.testName,
    value: l.value,
    unit: l.unit,
    status: l.status as 'normal' | 'low' | 'high' | 'critical' | undefined,
    collectedAt: l.collectedAt,
  }));
  const generator = new ReportGenerator(dashboardData);
  return generator.generateLabTrendsReport(labs, dateRange);
}
