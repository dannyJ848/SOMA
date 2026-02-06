/**
 * Export Engine
 * 
 * Main export orchestration module that coordinates data collection,
 * format conversion, PDF generation, CSV export, FHIR bundling,
 * and encryption for complete health data portability.
 */

import type {
  ExportOptions,
  ExportResult,
  ExportProgress,
  ExportProgressCallback,
  CompleteHealthRecord,
  ExportDataCategory,
  CSVExportConfig,
  FHIRBundle,
  FHIRResourceType,
  LabResult,
  Medication,
  Condition,
  Allergy,
  Immunization,
  VitalSigns,
  ImagingStudy,
  ClinicalNote,
} from './types';
import { encryptData } from './encryption';
import { generatePDFReport } from './pdf-generator';
import type { TimelineEvent } from '../timeline/events';

// ============================================================================
// Export Orchestrator
// ============================================================================

/**
 * Export health data with the specified options
 */
export async function exportHealthData(
  options: ExportOptions,
  dataFetcher: DataFetcher,
  onProgress?: ExportProgressCallback
): Promise<ExportResult> {
  const startTime = Date.now();
  
  try {
    // Step 1: Prepare
    updateProgress(onProgress, {
      stage: 'preparing',
      percent: 5,
      processedCount: 0,
      totalCount: 100,
      messageEs: 'Preparando exportación...',
      messageEn: 'Preparing export...',
    });
    
    // Step 2: Collect data
    updateProgress(onProgress, {
      stage: 'collecting',
      percent: 15,
      processedCount: 10,
      totalCount: 100,
      messageEs: 'Recopilando datos de salud...',
      messageEn: 'Collecting health data...',
    });
    
    const healthData = await collectHealthData(dataFetcher, options, onProgress);
    
    // Step 3: Process based on format
    updateProgress(onProgress, {
      stage: 'processing',
      percent: 50,
      processedCount: 50,
      totalCount: 100,
      messageEs: 'Procesando datos...',
      messageEn: 'Processing data...',
    });
    
    let content: string;
    let filename: string;
    let mimeType: string;
    
    const timestamp = formatTimestamp();
    
    switch (options.format) {
      case 'json':
        content = await exportToJSON(healthData, options);
        filename = `biological-self-export-${timestamp}.json`;
        mimeType = 'application/json';
        break;
        
      case 'pdf':
        content = await exportToPDF(healthData, options);
        filename = `biological-self-report-${timestamp}.html`;
        mimeType = 'text/html';
        break;
        
      case 'csv':
        content = await exportToCSV(healthData, options);
        filename = `biological-self-data-${timestamp}.csv`;
        mimeType = 'text/csv';
        break;
        
      case 'fhir':
        content = await exportToFHIR(healthData, options);
        filename = `biological-self-fhir-${timestamp}.json`;
        mimeType = 'application/fhir+json';
        break;
        
      default:
        throw new ExportError('Formato no soportado', 'Unsupported format');
    }
    
    // Step 4: Encrypt if requested
    if (options.encrypt && options.password) {
      updateProgress(onProgress, {
        stage: 'encrypting',
        percent: 80,
        processedCount: 80,
        totalCount: 100,
        messageEs: 'Encriptando datos...',
        messageEn: 'Encrypting data...',
      });
      
      const encrypted = await encryptData(content, { password: options.password });
      content = JSON.stringify(encrypted, null, 2);
      filename = filename.replace(/\.[^.]+$/, '.encrypted.json');
    }
    
    // Step 5: Finalize
    updateProgress(onProgress, {
      stage: 'finalizing',
      percent: 95,
      processedCount: 95,
      totalCount: 100,
      messageEs: 'Finalizando exportación...',
      messageEn: 'Finalizing export...',
    });
    
    const result: ExportResult = {
      success: true,
      format: options.format,
      content,
      filename,
      mimeType,
      size: new Blob([content]).size,
      encrypted: options.encrypt || false,
      exportedAt: new Date(),
      summary: generateSummary(healthData),
    };
    
    updateProgress(onProgress, {
      stage: 'complete',
      percent: 100,
      processedCount: 100,
      totalCount: 100,
      messageEs: '¡Exportación completada!',
      messageEn: 'Export completed!',
      estimatedTimeRemaining: 0,
    });
    
    return result;
    
  } catch (error) {
    updateProgress(onProgress, {
      stage: 'error',
      percent: 0,
      processedCount: 0,
      totalCount: 100,
      messageEs: 'Error en la exportación',
      messageEn: 'Export error',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
    
    return {
      success: false,
      format: options.format,
      content: '',
      filename: '',
      mimeType: '',
      size: 0,
      encrypted: false,
      exportedAt: new Date(),
      summary: {
        totalRecords: 0,
        recordsByCategory: {} as Record<ExportDataCategory, number>,
        categories: options.categories,
      },
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

// ============================================================================
// Data Collection
// ============================================================================

export interface DataFetcher {
  getProfile(): Promise<CompleteHealthRecord['profile']>;
  getLabs(dateRange?: { start: Date; end: Date }): Promise<LabResult[]>;
  getMedications(dateRange?: { start: Date; end: Date }): Promise<Medication[]>;
  getConditions(): Promise<Condition[]>;
  getProcedures(dateRange?: { start: Date; end: Date }): Promise<CompleteHealthRecord['procedures']>;
  getAllergies(): Promise<CompleteHealthRecord['allergies']>;
  getImmunizations(): Promise<CompleteHealthRecord['immunizations']>;
  getVitals(dateRange?: { start: Date; end: Date }): Promise<VitalSigns[]>;
  getImaging(dateRange?: { start: Date; end: Date }): Promise<ImagingStudy[]>;
  getTimeline(dateRange?: { start: Date; end: Date }): Promise<TimelineEvent[]>;
  getNotes(dateRange?: { start: Date; end: Date }): Promise<ClinicalNote[]>;
}

async function collectHealthData(
  fetcher: DataFetcher,
  options: ExportOptions,
  onProgress?: ExportProgressCallback
): Promise<CompleteHealthRecord> {
  const dateRange = options.dateRange;
  const categories = options.categories;
  const includeAll = categories.includes('all');
  
  const data: CompleteHealthRecord = {
    exportMetadata: {
      version: '1.0.0',
      exportedAt: new Date().toISOString(),
      exportedBy: 'Biological Self',
      application: 'Biological Self Health App',
      format: options.format,
    },
    profile: undefined,
    labs: [],
    medications: [],
    conditions: [],
    procedures: [],
    allergies: [],
    immunizations: [],
    vitals: [],
    imaging: [],
    timeline: [],
    notes: [],
  };
  
  const categoryMap: Record<ExportDataCategory, () => Promise<void>> = {
    all: async () => {},
    profile: async () => {
      data.profile = await fetcher.getProfile();
    },
    labs: async () => {
      data.labs = await fetcher.getLabs(dateRange);
    },
    medications: async () => {
      data.medications = await fetcher.getMedications(dateRange);
    },
    conditions: async () => {
      data.conditions = await fetcher.getConditions();
    },
    procedures: async () => {
      data.procedures = await fetcher.getProcedures(dateRange);
    },
    timeline: async () => {
      data.timeline = await fetcher.getTimeline(dateRange);
    },
    imaging: async () => {
      data.imaging = await fetcher.getImaging(dateRange);
    },
    vitals: async () => {
      data.vitals = await fetcher.getVitals(dateRange);
    },
    allergies: async () => {
      data.allergies = await fetcher.getAllergies();
    },
    immunizations: async () => {
      data.immunizations = await fetcher.getImmunizations();
    },
    appointments: async () => {},
    notes: async () => {
      data.notes = await fetcher.getNotes(dateRange);
    },
  };
  
  for (const category of categories) {
    if (includeAll || category !== 'all') {
      await categoryMap[category]();
    }
  }
  
  return data;
}

// ============================================================================
// Format Exporters
// ============================================================================

/**
 * Export to JSON format - complete machine-readable data
 */
async function exportToJSON(
  data: CompleteHealthRecord,
  options: ExportOptions
): Promise<string> {
  const exportData = {
    ...data,
    exportMetadata: {
      ...data.exportMetadata,
      exportedAt: new Date().toISOString(),
    },
  };
  
  return JSON.stringify(exportData, null, 2);
}

/**
 * Export to PDF (HTML) format
 */
async function exportToPDF(
  data: CompleteHealthRecord,
  options: ExportOptions
): Promise<string> {
  return generatePDFReport(data, {
    template: options.pdfTemplate || 'full',
    includeCharts: options.includeCharts ?? true,
    includeEmergencyCard: true,
    patientName: options.patientName,
    generatedAt: new Date(),
    language: options.language,
  });
}

/**
 * Export to CSV format - spreadsheet-friendly
 */
async function exportToCSV(
  data: CompleteHealthRecord,
  options: ExportOptions
): Promise<string> {
  const sections: string[] = [];
  const isSpanish = options.language === 'es';
  
  // Labs CSV
  if (data.labs.length > 0) {
    const labHeaders = isSpanish 
      ? ['Prueba', 'Valor', 'Unidad', 'Referencia Min', 'Referencia Max', 'Estado', 'Fecha', 'Laboratorio']
      : ['Test', 'Value', 'Unit', 'Ref Low', 'Ref High', 'Status', 'Date', 'Lab'];
    
    const labRows = data.labs.map(lab => [
      lab.testName,
      lab.value,
      lab.unit,
      lab.referenceRange?.low ?? '',
      lab.referenceRange?.high ?? '',
      lab.status,
      formatDateISO(lab.collectedAt),
      lab.laboratory || '',
    ]);
    
    sections.push(formatCSVSection(isSpanish ? 'RESULTADOS_LABORATORIO' : 'LAB_RESULTS', labHeaders, labRows));
  }
  
  // Medications CSV
  if (data.medications.length > 0) {
    const medHeaders = isSpanish
      ? ['Medicamento', 'Dosis', 'Frecuencia', 'Estado', 'Indicacion', 'Recetado Por', 'Fecha Inicio', 'Fecha Fin']
      : ['Medication', 'Dose', 'Frequency', 'Status', 'Indication', 'Prescribed By', 'Start Date', 'End Date'];
    
    const medRows = data.medications.map(med => [
      med.name,
      med.dose,
      med.frequency,
      med.status,
      med.indication || '',
      med.prescribedBy || '',
      med.startedAt ? formatDateISO(med.startedAt) : '',
      med.endedAt ? formatDateISO(med.endedAt) : '',
    ]);
    
    sections.push(formatCSVSection(isSpanish ? 'MEDICAMENTOS' : 'MEDICATIONS', medHeaders, medRows));
  }
  
  // Conditions CSV
  if (data.conditions.length > 0) {
    const condHeaders = isSpanish
      ? ['Condicion', 'Codigo ICD-10', 'Estado', 'Severidad', 'Fecha Diagnostico', 'Notas']
      : ['Condition', 'ICD-10 Code', 'Status', 'Severity', 'Diagnosed Date', 'Notes'];
    
    const condRows = data.conditions.map(cond => [
      cond.name,
      cond.icd10Code || '',
      cond.status,
      cond.severity || '',
      cond.diagnosedAt ? formatDateISO(cond.diagnosedAt) : '',
      cond.notes || '',
    ]);
    
    sections.push(formatCSVSection(isSpanish ? 'CONDICIONES' : 'CONDITIONS', condHeaders, condRows));
  }
  
  // Vitals CSV
  if (data.vitals.length > 0) {
    const vitalHeaders = isSpanish
      ? ['Fecha', 'Presion Sistolica', 'Presion Diastolica', 'Pulso', 'Temperatura', 'Oxigeno', 'Peso kg', 'IMC']
      : ['Date', 'BP Systolic', 'BP Diastolic', 'Heart Rate', 'Temperature', 'Oxygen', 'Weight kg', 'BMI'];
    
    const vitalRows = data.vitals.map(v => [
      formatDateISO(v.measuredAt),
      v.bloodPressure?.systolic || '',
      v.bloodPressure?.diastolic || '',
      v.heartRate || '',
      v.temperature?.value || '',
      v.oxygenSaturation || '',
      v.weight?.unit === 'kg' ? v.weight.value : (v.weight?.unit === 'lbs' && v.weight.value ? v.weight.value * 0.453592 : ''),
      v.bmi || '',
    ]);
    
    sections.push(formatCSVSection(isSpanish ? 'SIGNOS_VITALES' : 'VITAL_SIGNS', vitalHeaders, vitalRows));
  }
  
  return sections.join('\n\n');
}

/**
 * Export to FHIR R4 Bundle format
 */
async function exportToFHIR(
  data: CompleteHealthRecord,
  options: ExportOptions
): Promise<string> {
  const bundle: FHIRBundle = {
    resourceType: 'Bundle',
    id: generateUUID(),
    meta: {
      versionId: '1',
      lastUpdated: new Date().toISOString(),
    },
    type: options.fhirBundleType || 'collection',
    timestamp: new Date().toISOString(),
    entry: [],
  };
  
  const patientId = data.profile?.id || generateUUID();
  
  // Patient resource
  if (data.profile) {
    bundle.entry.push({
      fullUrl: `urn:uuid:${patientId}`,
      resource: convertToFHIRPatient(data.profile),
    });
  }
  
  // Conditions
  data.conditions.forEach(condition => {
    bundle.entry.push({
      fullUrl: `urn:uuid:${generateUUID()}`,
      resource: convertToFHIRCondition(condition, patientId),
    });
  });
  
  // Medications
  data.medications.forEach(medication => {
    bundle.entry.push({
      fullUrl: `urn:uuid:${generateUUID()}`,
      resource: convertToFHIRMedicationRequest(medication, patientId),
    });
  });
  
  // Lab Results as Observations
  data.labs.forEach(lab => {
    bundle.entry.push({
      fullUrl: `urn:uuid:${generateUUID()}`,
      resource: convertToFHIRObservation(lab, patientId),
    });
  });
  
  // Allergies
  data.allergies.forEach(allergy => {
    bundle.entry.push({
      fullUrl: `urn:uuid:${generateUUID()}`,
      resource: convertToFHIRAllergy(allergy, patientId),
    });
  });
  
  // Immunizations
  data.immunizations.forEach(immunization => {
    bundle.entry.push({
      fullUrl: `urn:uuid:${generateUUID()}`,
      resource: convertToFHIRImmunization(immunization, patientId),
    });
  });
  
  return JSON.stringify(bundle, null, 2);
}

// ============================================================================
// FHIR Converters
// ============================================================================

function convertToFHIRPatient(profile: NonNullable<CompleteHealthRecord['profile']>): Record<string, unknown> {
  return {
    resourceType: 'Patient',
    id: profile.id,
    name: [{
      given: [profile.firstName],
      family: profile.lastName,
    }],
    birthDate: profile.dateOfBirth?.toISOString().split('T')[0],
    gender: profile.gender,
    contact: profile.emergencyContact ? [{
      relationship: [{ text: profile.emergencyContact.relationship }],
      name: { text: profile.emergencyContact.name },
      telecom: [{ system: 'phone', value: profile.emergencyContact.phone }],
    }] : undefined,
  };
}

function convertToFHIRCondition(condition: Condition, patientId: string): Record<string, unknown> {
  const statusMap: Record<string, string> = {
    active: 'active',
    resolved: 'resolved',
    chronic: 'active',
    'in-remission': 'remission',
  };
  
  return {
    resourceType: 'Condition',
    id: condition.id,
    clinicalStatus: {
      coding: [{
        system: 'http://terminology.hl7.org/CodeSystem/condition-clinical',
        code: statusMap[condition.status] || 'active',
      }],
    },
    code: condition.icd10Code ? {
      coding: [{
        system: 'http://hl7.org/fhir/sid/icd-10-cm',
        code: condition.icd10Code,
        display: condition.name,
      }],
      text: condition.name,
    } : {
      text: condition.name,
    },
    subject: { reference: `Patient/${patientId}` },
    onsetDateTime: condition.diagnosedAt?.toISOString(),
    note: condition.notes ? [{ text: condition.notes }] : undefined,
  };
}

function convertToFHIRMedicationRequest(med: Medication, patientId: string): Record<string, unknown> {
  const statusMap: Record<string, string> = {
    active: 'active',
    discontinued: 'stopped',
    completed: 'completed',
    'on-hold': 'on-hold',
  };
  
  return {
    resourceType: 'MedicationRequest',
    id: med.id,
    status: statusMap[med.status] || 'active',
    intent: 'order',
    medicationCodeableConcept: {
      text: med.name,
    },
    subject: { reference: `Patient/${patientId}` },
    authoredOn: med.prescribedAt.toISOString(),
    dosageInstruction: [{
      text: `${med.dose} ${med.frequency}`,
      route: med.route ? { text: med.route } : undefined,
    }],
    reasonCode: med.indication ? [{ text: med.indication }] : undefined,
    note: med.instructions ? [{ text: med.instructions }] : undefined,
  };
}

function convertToFHIRObservation(lab: LabResult, patientId: string): Record<string, unknown> {
  const statusMap: Record<string, string> = {
    normal: 'final',
    low: 'final',
    high: 'final',
    critical: 'amended',
  };
  
  return {
    resourceType: 'Observation',
    id: lab.id,
    status: statusMap[lab.status] || 'final',
    category: [{
      coding: [{
        system: 'http://terminology.hl7.org/CodeSystem/observation-category',
        code: 'laboratory',
      }],
    }],
    code: lab.loincCode ? {
      coding: [{
        system: 'http://loinc.org',
        code: lab.loincCode,
        display: lab.testName,
      }],
      text: lab.testName,
    } : {
      text: lab.testName,
    },
    subject: { reference: `Patient/${patientId}` },
    effectiveDateTime: lab.collectedAt.toISOString(),
    issued: lab.resultedAt?.toISOString(),
    valueQuantity: {
      value: typeof lab.value === 'number' ? lab.value : parseFloat(lab.value as string),
      unit: lab.unit,
    },
    referenceRange: lab.referenceRange ? [{
      low: { value: lab.referenceRange.low },
      high: { value: lab.referenceRange.high },
    }] : undefined,
    note: lab.notes ? [{ text: lab.notes }] : undefined,
  };
}

function convertToFHIRAllergy(allergy: Allergy, patientId: string): Record<string, unknown> {
  const severityMap: Record<string, string> = {
    mild: 'mild',
    moderate: 'moderate',
    severe: 'severe',
    'life-threatening': 'severe',
  };
  
  const typeMap: Record<string, string> = {
    medication: 'medication',
    food: 'food',
    environmental: 'environment',
    latex: 'biologic',
    other: 'other',
  };
  
  return {
    resourceType: 'AllergyIntolerance',
    id: allergy.id,
    clinicalStatus: {
      coding: [{
        system: 'http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical',
        code: 'active',
      }],
    },
    type: typeMap[allergy.allergenType] || 'other',
    category: [typeMap[allergy.allergenType] || 'other'],
    code: { text: allergy.allergen },
    patient: { reference: `Patient/${patientId}` },
    onsetDateTime: allergy.onsetDate?.toISOString(),
    reaction: [{
      manifestation: [{ text: allergy.reaction }],
      severity: severityMap[allergy.severity],
    }],
    note: allergy.notes ? [{ text: allergy.notes }] : undefined,
  };
}

function convertToFHIRImmunization(imm: Immunization, patientId: string): Record<string, unknown> {
  return {
    resourceType: 'Immunization',
    id: imm.id,
    status: 'completed',
    vaccineCode: imm.cvxCode ? {
      coding: [{
        system: 'http://hl7.org/fhir/sid/cvx',
        code: imm.cvxCode,
        display: imm.vaccineName,
      }],
      text: imm.vaccineName,
    } : {
      text: imm.vaccineName,
    },
    patient: { reference: `Patient/${patientId}` },
    occurrenceDateTime: imm.administeredAt.toISOString(),
    doseNumberPositiveInt: imm.doseNumber,
    seriesDosesPositiveInt: imm.totalDoses,
    lotNumber: imm.lotNumber,
    expirationDate: imm.expirationDate?.toISOString().split('T')[0],
    note: imm.notes ? [{ text: imm.notes }] : undefined,
  };
}

// ============================================================================
// CSV Helpers
// ============================================================================

function formatCSVSection(title: string, headers: string[], rows: (string | number)[][]): string {
  const csvRows = rows.map(row =
003e 
    row.map(cell => {
      const str = String(cell ?? '');
      if (str.includes(',') || str.includes('\n') || str.includes('"')) {
        return `"${str.replace(/"/g, '""')}"`;
      }
      return str;
    }).join(',')
  );
  
  return `# ${title}\n${headers.join(',')}\n${csvRows.join('\n')}`;
}

// ============================================================================
// Utility Functions
// ============================================================================

function updateProgress(
  callback: ExportProgressCallback | undefined,
  progress: Omit<ExportProgress, 'totalCount'> & { totalCount?: number }
): void {
  if (callback) {
    callback({
      ...progress,
      totalCount: progress.totalCount || 100,
    } as ExportProgress);
  }
}

function generateSummary(data: CompleteHealthRecord): ExportResult['summary'] {
  return {
    totalRecords: 
      data.labs.length +
      data.medications.length +
      data.conditions.length +
      data.allergies.length +
      data.immunizations.length +
      data.vitals.length +
      data.timeline.length,
    recordsByCategory: {
      labs: data.labs.length,
      medications: data.medications.length,
      conditions: data.conditions.length,
      procedures: data.procedures.length,
      allergies: data.allergies.length,
      immunizations: data.immunizations.length,
      vitals: data.vitals.length,
      imaging: data.imaging.length,
      timeline: data.timeline.length,
      notes: data.notes.length,
      all: 0,
      profile: data.profile ? 1 : 0,
      appointments: 0,
    },
    categories: Object.keys(data.exportMetadata.format) as ExportDataCategory[],
  };
}

function formatTimestamp(): string {
  return new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
}

function formatDateISO(date: Date): string {
  return new Date(date).toISOString();
}

function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

// ============================================================================
// Error Classes
// ============================================================================

export class ExportError extends Error {
  messageEs: string;
  messageEn: string;
  
  constructor(messageEs: string, messageEn: string) {
    super(messageEn);
    this.name = 'ExportError';
    this.messageEs = messageEs;
    this.messageEn = messageEn;
  }
}

// ============================================================================
// Partial Export Helper
// ============================================================================

/**
 * Create a partial export with specific date range and categories
 */
export async function createPartialExport(
  fetcher: DataFetcher,
  categories: ExportDataCategory[],
  dateRange?: { start: Date; end: Date },
  onProgress?: ExportProgressCallback
): Promise<CompleteHealthRecord> {
  const options: ExportOptions = {
    format: 'json',
    categories,
    dateRange,
    language: 'es',
  };
  
  return collectHealthData(fetcher, options, onProgress);
}

// ============================================================================
// Export
// ============================================================================

export {
  formatTimestamp,
  formatDateISO,
  generateUUID,
};
