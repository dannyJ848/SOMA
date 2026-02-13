/**
 * FHIR Resource Mapper
 * 
 * Maps FHIR R4 resources to BiologicalSelf internal types.
 * Supports: Patient, Condition, MedicationRequest, Observation, 
 * AllergyIntolerance, Immunization, DiagnosticReport
 */

import {
  type FHIRPatient,
  type FHIRCondition,
  type FHIRMedicationRequest,
  type FHIRObservation,
  type FHIRAllergyIntolerance,
  type FHIRImmunization,
  type FHIRDiagnosticReport,
  type FHIRCodeableConcept,
  type FHIRQuantity,
  type FHIRPeriod,
  type BiologicalSelfUserProfile,
  type BiologicalSelfCondition,
  type BiologicalSelfMedication,
  type BiologicalSelfLabResult,
  type BiologicalSelfAllergy,
  type BiologicalSelfVaccination,
} from './types.js';

/**
 * Mapping result with warnings
 */
export interface MappingResult<T> {
  data: T;
  warnings: string[];
  warningsEs: string[];
  fhirResourceId: string;
  mappedAt: Date;
}

/**
 * Mapping options
 */
export interface MappingOptions {
  /** Preferred language for text fields (es, en) */
  preferredLanguage?: 'es' | 'en';
  /** Include raw FHIR data in result */
  includeRawData?: boolean;
  /** Default timezone for dates without timezone */
  defaultTimezone?: string;
}

/**
 * Default mapping options
 */
const DEFAULT_OPTIONS: MappingOptions = {
  preferredLanguage: 'es',
  includeRawData: false,
  defaultTimezone: 'America/Chicago',
};

/**
 * Extract text from CodeableConcept (preferring the preferred language)
 */
function getCodeableConceptText(
  concept: FHIRCodeableConcept | undefined,
  options: MappingOptions
): string {
  if (!concept) return '';

  // Prefer text if available
  if (concept.text) {
    return concept.text;
  }

  // Look for coding with display
  if (concept.coding && concept.coding.length > 0) {
    // Try to find a coding with display
    const codingWithDisplay = concept.coding.find((c) => c.display);
    if (codingWithDisplay?.display) {
      return codingWithDisplay.display;
    }
    // Fallback to code
    return concept.coding[0].code || '';
  }

  return '';
}

/**
 * Extract code from CodeableConcept by system
 */
function getCodeBySystem(
  concept: FHIRCodeableConcept | undefined,
  system: string
): string | undefined {
  if (!concept?.coding) return undefined;
  const coding = concept.coding.find((c) => c.system === system);
  return coding?.code;
}

/**
 * Parse FHIR date/datetime string to Date
 */
function parseFhirDate(dateStr: string | undefined): Date | undefined {
  if (!dateStr) return undefined;
  
  // FHIR dates can be: YYYY, YYYY-MM, YYYY-MM-DD, or full ISO datetime
  const date = new Date(dateStr);
  return isNaN(date.getTime()) ? undefined : date;
}

/**
 * Get date from various FHIR date fields
 */
function getDateFromField(
  dateTime?: string,
  period?: FHIRPeriod,
  age?: unknown
): Date | undefined {
  if (dateTime) {
    return parseFhirDate(dateTime);
  }
  if (period?.start) {
    return parseFhirDate(period.start);
  }
  return undefined;
}

/**
 * Map FHIR Patient to BiologicalSelf UserProfile
 */
export function mapPatientToUserProfile(
  patient: FHIRPatient,
  options: MappingOptions = {}
): MappingResult<BiologicalSelfUserProfile> {
  const opts = { ...DEFAULT_OPTIONS, ...options };
  const warnings: string[] = [];
  const warningsEs: string[] = [];

  // Extract name
  const officialName = patient.name?.find((n) => n.use === 'official') || patient.name?.[0];
  const firstName = officialName?.given?.[0] || '';
  const lastName = officialName?.family || '';

  if (!firstName || !lastName) {
    warnings.push('Patient name incomplete');
    warningsEs.push('Nombre del paciente incompleto');
  }

  // Extract address
  const homeAddress = patient.address?.find((a) => a.use === 'home') || patient.address?.[0];
  const address = homeAddress
    ? {
        street: homeAddress.line?.join(', '),
        city: homeAddress.city,
        state: homeAddress.state,
        zipCode: homeAddress.postalCode,
        country: homeAddress.country,
      }
    : undefined;

  // Extract phone
  const phone = patient.telecom?.find(
    (t) => t.system === 'phone' && (t.use === 'mobile' || t.use === 'home')
  )?.value;
  
  const email = patient.telecom?.find((t) => t.system === 'email')?.value;

  // Determine preferred language from patient communication
  const preferredLanguage =
    patient.communication?.find((c) => c.preferred)?.language.text ||
    patient.communication?.[0]?.language.text ||
    'es';

  const profile: BiologicalSelfUserProfile = {
    id: `fhir-patient-${patient.id}`,
    firstName,
    lastName,
    dateOfBirth: parseFhirDate(patient.birthDate),
    gender: patient.gender,
    email,
    phone,
    address,
    preferredLanguage: preferredLanguage.toLowerCase().includes('es') ? 'es' : 'en',
  };

  return {
    data: profile,
    warnings,
    warningsEs,
    fhirResourceId: patient.id || '',
    mappedAt: new Date(),
  };
}

/**
 * Map FHIR Condition to BiologicalSelf Condition
 */
export function mapConditionToBiologicalSelf(
  condition: FHIRCondition,
  options: MappingOptions = {}
): MappingResult<BiologicalSelfCondition> {
  const opts = { ...DEFAULT_OPTIONS, ...options };
  const warnings: string[] = [];
  const warningsEs: string[] = [];

  const name = getCodeableConceptText(condition.code, opts);
  if (!name) {
    warnings.push('Condition missing code/display');
    warningsEs.push('Condición sin código/descripción');
  }

  // Map clinical status
  const clinicalStatusCode = condition.clinicalStatus?.coding?.[0]?.code;
  const clinicalStatusMap: Record<string, BiologicalSelfCondition['clinicalStatus']> = {
    active: 'active',
    recurrence: 'recurrence',
    relapse: 'relapse',
    inactive: 'inactive',
    remission: 'remission',
    resolved: 'resolved',
  };

  // Map verification status
  const verificationStatusCode = condition.verificationStatus?.coding?.[0]?.code;
  const verificationStatusMap: Record<string, BiologicalSelfCondition['verificationStatus']> = {
    unconfirmed: 'unconfirmed',
    provisional: 'provisional',
    differential: 'differential',
    confirmed: 'confirmed',
    refuted: 'refuted',
    'entered-in-error': 'entered-in-error',
  };

  // Map to internal status
  let status: BiologicalSelfCondition['status'] = 'active';
  if (clinicalStatusCode === 'resolved' || clinicalStatusCode === 'remission') {
    status = condition.abatementDateTime ? 'resolved' : 'chronic';
  } else if (clinicalStatusCode === 'inactive') {
    status = 'resolved';
  }

  // Map severity
  const severityCode = condition.severity?.coding?.[0]?.code;
  let severity: BiologicalSelfCondition['severity'] = undefined;
  if (severityCode?.includes('severe')) severity = 'severe';
  else if (severityCode?.includes('moderate')) severity = 'moderate';
  else if (severityCode?.includes('mild')) severity = 'mild';

  const mappedCondition: BiologicalSelfCondition = {
    id: `fhir-cond-${condition.id}`,
    name,
    icd10Code: getCodeBySystem(condition.code, 'http://hl7.org/fhir/sid/icd-10-cm'),
    snomedCode: getCodeBySystem(condition.code, 'http://snomed.info/sct'),
    diagnosedDate: parseFhirDate(condition.recordedDate),
    onsetDate: getDateFromField(condition.onsetDateTime, condition.onsetPeriod),
    status,
    severity,
    clinicalStatus: clinicalStatusMap[clinicalStatusCode || ''] || 'unknown',
    verificationStatus: verificationStatusMap[verificationStatusCode || ''] || 'unconfirmed',
    notes: condition.note?.map((n) => n.text).join('\n'),
    bodySites: condition.bodySite?.map((b) => getCodeableConceptText(b, opts)),
    source: 'fhir',
    fhirReference: `Condition/${condition.id}`,
    lastUpdated: parseFhirDate(condition.meta?.lastUpdated) || new Date(),
  };

  return {
    data: mappedCondition,
    warnings,
    warningsEs,
    fhirResourceId: condition.id || '',
    mappedAt: new Date(),
  };
}

/**
 * Map FHIR MedicationRequest to BiologicalSelf Medication
 */
export function mapMedicationRequestToBiologicalSelf(
  medRequest: FHIRMedicationRequest,
  options: MappingOptions = {}
): MappingResult<BiologicalSelfMedication> {
  const opts = { ...DEFAULT_OPTIONS, ...options };
  const warnings: string[] = [];
  const warningsEs: string[] = [];

  // Get medication name
  let name = '';
  if (medRequest.medicationCodeableConcept) {
    name = getCodeableConceptText(medRequest.medicationCodeableConcept, opts);
  } else if (medRequest.medicationReference?.display) {
    name = medRequest.medicationReference.display;
  }

  if (!name) {
    warnings.push('Medication name not found');
    warningsEs.push('Nombre del medicamento no encontrado');
  }

  // Map status
  const statusMap: Record<string, BiologicalSelfMedication['status']> = {
    active: 'active',
    'on-hold': 'on-hold',
    cancelled: 'cancelled',
    completed: 'completed',
    'entered-in-error': 'stopped',
    stopped: 'stopped',
    draft: 'active', // Treat draft as active for patient view
    unknown: 'active',
  };

  // Extract dosage information
  const dosage = medRequest.dosageInstruction?.[0];
  const dose = dosage?.doseAndRate?.[0];
  
  const doseText = dosage?.text || '';
  const doseValue = dose?.doseQuantity
    ? `${dose.doseQuantity.value} ${dose.doseQuantity.unit || ''}`
    : undefined;
  
  const frequency = dosage?.timing?.repeat
    ? formatFrequency(dosage.timing.repeat)
    : dosage?.patientInstruction;

  const route = dosage?.route
    ? getCodeableConceptText(dosage.route, opts)
    : undefined;

  // Get indication from reasonCode
  const indication = medRequest.reasonCode
    ?.map((r) => getCodeableConceptText(r, opts))
    .join(', ');

  const mappedMedication: BiologicalSelfMedication = {
    id: `fhir-med-${medRequest.id}`,
    name,
    genericName: name, // Will be enriched later if possible
    rxNormCode: getCodeBySystem(medRequest.medicationCodeableConcept, 'http://www.nlm.nih.gov/research/umls/rxnorm'),
    dose: doseValue || doseText,
    frequency,
    route,
    indication,
    instructions: dosage?.patientInstruction || dosage?.text,
    status: statusMap[medRequest.status] || 'active',
    prescribedDate: parseFhirDate(medRequest.authoredOn),
    startDate: dosage?.timing?.repeat?.boundsPeriod?.start
      ? parseFhirDate(dosage.timing.repeat.boundsPeriod.start)
      : undefined,
    endDate: dosage?.timing?.repeat?.boundsPeriod?.end
      ? parseFhirDate(dosage.timing.repeat.boundsPeriod.end)
      : undefined,
    prescribingProvider: medRequest.requester?.display,
    notes: medRequest.note?.map((n) => n.text).join('\n'),
    source: 'fhir',
    fhirReference: `MedicationRequest/${medRequest.id}`,
    lastUpdated: parseFhirDate(medRequest.meta?.lastUpdated) || new Date(),
  };

  return {
    data: mappedMedication,
    warnings,
    warningsEs,
    fhirResourceId: medRequest.id || '',
    mappedAt: new Date(),
  };
}

/**
 * Format FHIR timing repeat to human-readable frequency
 */
function formatFrequency(repeat: unknown): string | undefined {
  if (!repeat || typeof repeat !== 'object') return undefined;
  
  const r = repeat as Record<string, unknown>;
  
  if (r.frequency && r.period) {
    const freq = r.frequency as number;
    const period = r.period as number;
    const periodUnit = (r.periodUnit as string) || 'd';
    
    const unitMap: Record<string, string> = {
      s: 'segundo',
      min: 'minuto',
      h: 'hora',
      d: 'día',
      wk: 'semana',
      mo: 'mes',
      a: 'año',
    };
    
    const unit = unitMap[periodUnit] || periodUnit;
    
    if (freq === 1 && period === 1) {
      return `Una vez por ${unit}`;
    } else if (period === 1) {
      return `${freq} veces por ${unit}`;
    } else {
      return `${freq} veces cada ${period} ${unit}s`;
    }
  }
  
  return undefined;
}

/**
 * Map FHIR Observation to BiologicalSelf LabResult
 */
export function mapObservationToLabResult(
  observation: FHIRObservation,
  options: MappingOptions = {}
): MappingResult<BiologicalSelfLabResult> {
  const opts = { ...DEFAULT_OPTIONS, ...options };
  const warnings: string[] = [];
  const warningsEs: string[] = [];

  const testName = getCodeableConceptText(observation.code, opts);
  if (!testName) {
    warnings.push('Observation missing code/display');
    warningsEs.push('Observación sin código/descripción');
  }

  // Extract value
  let value: number | string = '';
  let unit = '';
  
  if (observation.valueQuantity) {
    value = observation.valueQuantity.value ?? '';
    unit = observation.valueQuantity.unit || '';
  } else if (observation.valueString) {
    value = observation.valueString;
  } else if (observation.valueBoolean !== undefined) {
    value = observation.valueBoolean ? 'Positivo' : 'Negativo';
  } else if (observation.valueInteger !== undefined) {
    value = observation.valueInteger;
  } else if (observation.valueCodeableConcept) {
    value = getCodeableConceptText(observation.valueCodeableConcept, opts);
  }

  // Map interpretation to status
  const interpretation = observation.interpretation?.[0]?.coding?.[0]?.code;
  let status: BiologicalSelfLabResult['interpretation'] = 'normal';
  
  if (interpretation) {
    if (interpretation.includes('H') || interpretation.includes('high')) {
      status = interpretation.includes('HH') || interpretation.includes('critical')
        ? 'critical-high'
        : 'high';
    } else if (interpretation.includes('L') || interpretation.includes('low')) {
      status = interpretation.includes('LL') || interpretation.includes('critical')
        ? 'critical-low'
        : 'low';
    } else if (interpretation.includes('A')) {
      status = 'abnormal';
    }
  }

  // Extract reference range
  const refRange = observation.referenceRange?.[0];
  const referenceRangeLow = refRange?.low?.value;
  const referenceRangeHigh = refRange?.high?.value;
  const referenceRangeText = refRange?.text;

  // Map FHIR status to internal status
  const statusMap: Record<string, BiologicalSelfLabResult['status']> = {
    registered: 'pending',
    preliminary: 'preliminary',
    final: 'final',
    amended: 'corrected',
    corrected: 'corrected',
    cancelled: 'pending',
    'entered-in-error': 'pending',
    unknown: 'pending',
  };

  const mappedLabResult: BiologicalSelfLabResult = {
    id: `fhir-obs-${observation.id}`,
    testName,
    loincCode: getCodeBySystem(observation.code, 'http://loinc.org'),
    value,
    unit,
    referenceRangeLow,
    referenceRangeHigh,
    referenceRangeText,
    status: statusMap[observation.status] || 'pending',
    interpretation: status,
    collectedDate: parseFhirDate(observation.effectiveDateTime),
    resultedDate: parseFhirDate(observation.issued),
    performingLab: observation.performer?.[0]?.display,
    orderingProvider: undefined, // Not directly available in Observation
    specimenType: observation.specimen?.display,
    notes: observation.note?.map((n) => n.text).join('\n'),
    category: observation.category
      ?.map((c) => getCodeableConceptText(c, opts))
      .join(', '),
    componentResults: observation.component?.map((comp) => ({
      id: `${observation.id}-comp-${comp.code.coding?.[0]?.code}`,
      testName: getCodeableConceptText(comp.code, opts),
      loincCode: getCodeBySystem(comp.code, 'http://loinc.org'),
      value: comp.valueQuantity?.value ?? comp.valueString ?? '',
      unit: comp.valueQuantity?.unit || '',
      referenceRangeLow: comp.referenceRange?.[0]?.low?.value,
      referenceRangeHigh: comp.referenceRange?.[0]?.high?.value,
      status: 'final',
      source: 'fhir',
      lastUpdated: new Date(),
    })),
    source: 'fhir',
    fhirReference: `Observation/${observation.id}`,
    lastUpdated: parseFhirDate(observation.meta?.lastUpdated) || new Date(),
  };

  return {
    data: mappedLabResult,
    warnings,
    warningsEs,
    fhirResourceId: observation.id || '',
    mappedAt: new Date(),
  };
}

/**
 * Map FHIR AllergyIntolerance to BiologicalSelf Allergy
 */
export function mapAllergyIntoleranceToBiologicalSelf(
  allergy: FHIRAllergyIntolerance,
  options: MappingOptions = {}
): MappingResult<BiologicalSelfAllergy> {
  const opts = { ...DEFAULT_OPTIONS, ...options };
  const warnings: string[] = [];
  const warningsEs: string[] = [];

  const allergen = getCodeableConceptText(allergy.code, opts);
  if (!allergen) {
    warnings.push('AllergyIntolerance missing code/display');
    warningsEs.push('Alergia/Intolerancia sin código/descripción');
  }

  // Map clinical status
  const clinicalStatus = allergy.clinicalStatus?.coding?.[0]?.code;
  let status: BiologicalSelfAllergy['status'] = 'active';
  if (clinicalStatus === 'inactive') status = 'inactive';
  else if (clinicalStatus === 'resolved') status = 'resolved';

  const mappedAllergy: BiologicalSelfAllergy = {
    id: `fhir-allergy-${allergy.id}`,
    allergen,
    allergenCode: allergy.code?.coding?.[0]?.code,
    codeSystem: allergy.code?.coding?.[0]?.system,
    type: allergy.type || 'allergy',
    category: allergy.category,
    criticality: allergy.criticality || 'unknown',
    reactions: allergy.reaction?.map((r) => ({
      manifestation: r.manifestation
        .map((m) => getCodeableConceptText(m, opts))
        .join(', '),
      severity: r.severity,
      description: r.description,
    })) || [],
    onsetDate: parseFhirDate(allergy.onsetDateTime),
    recordedDate: parseFhirDate(allergy.recordedDate),
    status,
    notes: allergy.note?.map((n) => n.text).join('\n'),
    source: 'fhir',
    fhirReference: `AllergyIntolerance/${allergy.id}`,
    lastUpdated: parseFhirDate(allergy.meta?.lastUpdated) || new Date(),
  };

  return {
    data: mappedAllergy,
    warnings,
    warningsEs,
    fhirResourceId: allergy.id || '',
    mappedAt: new Date(),
  };
}

/**
 * Map FHIR Immunization to BiologicalSelf Vaccination
 */
export function mapImmunizationToBiologicalSelf(
  immunization: FHIRImmunization,
  options: MappingOptions = {}
): MappingResult<BiologicalSelfVaccination> {
  const opts = { ...DEFAULT_OPTIONS, ...options };
  const warnings: string[] = [];
  const warningsEs: string[] = [];

  const vaccineName = getCodeableConceptText(immunization.vaccineCode, opts);
  if (!vaccineName) {
    warnings.push('Immunization missing vaccine code/display');
    warningsEs.push('Vacuna sin código/descripción');
  }

  // Get CVX code
  const cvxCode = getCodeBySystem(
    immunization.vaccineCode,
    'http://hl7.org/fhir/sid/cvx'
  );

  // Map status
  const statusMap: Record<string, BiologicalSelfVaccination['status']> = {
    completed: 'completed',
    'entered-in-error': 'entered-in-error',
    'not-done': 'not-done',
  };

  const mappedVaccination: BiologicalSelfVaccination = {
    id: `fhir-imm-${immunization.id}`,
    vaccineName,
    cvxCode,
    manufacturer: immunization.manufacturer?.display,
    lotNumber: immunization.lotNumber,
    administeredDate: parseFhirDate(immunization.occurrenceDateTime) || new Date(),
    status: statusMap[immunization.status] || 'completed',
    site: immunization.site
      ? getCodeableConceptText(immunization.site, opts)
      : undefined,
    route: immunization.route
      ? getCodeableConceptText(immunization.route, opts)
      : undefined,
    doseQuantity: immunization.doseQuantity
      ? `${immunization.doseQuantity.value} ${immunization.doseQuantity.unit || ''}`
      : undefined,
    administeringProvider: immunization.performer?.[0]?.actor.display,
    location: immunization.location?.display,
    notes: immunization.note?.map((n) => n.text).join('\n'),
    source: 'fhir',
    fhirReference: `Immunization/${immunization.id}`,
    lastUpdated: parseFhirDate(immunization.meta?.lastUpdated) || new Date(),
  };

  return {
    data: mappedVaccination,
    warnings,
    warningsEs,
    fhirResourceId: immunization.id || '',
    mappedAt: new Date(),
  };
}

/**
 * Batch mapping functions for importing multiple resources
 */

export function mapPatientsBatch(
  patients: FHIRPatient[],
  options?: MappingOptions
): MappingResult<BiologicalSelfUserProfile>[] {
  return patients.map((p) => mapPatientToUserProfile(p, options));
}

export function mapConditionsBatch(
  conditions: FHIRCondition[],
  options?: MappingOptions
): MappingResult<BiologicalSelfCondition>[] {
  return conditions.map((c) => mapConditionToBiologicalSelf(c, options));
}

export function mapMedicationsBatch(
  medications: FHIRMedicationRequest[],
  options?: MappingOptions
): MappingResult<BiologicalSelfMedication>[] {
  return medications.map((m) => mapMedicationRequestToBiologicalSelf(m, options));
}

export function mapObservationsBatch(
  observations: FHIRObservation[],
  options?: MappingOptions
): MappingResult<BiologicalSelfLabResult>[] {
  return observations.map((o) => mapObservationToLabResult(o, options));
}

export function mapAllergiesBatch(
  allergies: FHIRAllergyIntolerance[],
  options?: MappingOptions
): MappingResult<BiologicalSelfAllergy>[] {
  return allergies.map((a) => mapAllergyIntoleranceToBiologicalSelf(a, options));
}

export function mapImmunizationsBatch(
  immunizations: FHIRImmunization[],
  options?: MappingOptions
): MappingResult<BiologicalSelfVaccination>[] {
  return immunizations.map((i) => mapImmunizationToBiologicalSelf(i, options));
}

/**
 * Export all mappers
 */
export const FHIRMappers = {
  patient: mapPatientToUserProfile,
  condition: mapConditionToBiologicalSelf,
  medicationRequest: mapMedicationRequestToBiologicalSelf,
  observation: mapObservationToLabResult,
  allergyIntolerance: mapAllergyIntoleranceToBiologicalSelf,
  immunization: mapImmunizationToBiologicalSelf,
  batch: {
    patients: mapPatientsBatch,
    conditions: mapConditionsBatch,
    medications: mapMedicationsBatch,
    observations: mapObservationsBatch,
    allergies: mapAllergiesBatch,
    immunizations: mapImmunizationsBatch,
  },
};
