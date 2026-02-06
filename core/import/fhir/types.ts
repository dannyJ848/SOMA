/**
 * FHIR Integration Types
 * 
 * Type definitions for FHIR R4 integration with BiologicalSelf
 * FHIR R4 standard: http://hl7.org/fhir/R4/
 */

/**
 * Supported FHIR Providers
 */
export type FHIRProvider = 
  | 'epic'
  | 'cerner'
  | 'va-health'
  | 'medicare-blue-button'
  | 'va'
  | 'allscripts'
  | 'athenahealth'
  | 'meditech'
  | 'custom';

/**
 * Provider configuration
 */
export interface FHIRProviderConfig {
  id: FHIRProvider;
  name: string;
  nameEs: string;
  logoUrl?: string;
  baseUrl: string;
  authorizeUrl: string;
  tokenUrl: string;
  introspectUrl?: string;
  scopes: string[];
  supportedResources: FHIRResourceType[];
  requiresLaunchContext: boolean;
  patientFacing: boolean;
}

/**
 * FHIR R4 Resource Types we support
 */
export type FHIRResourceType =
  | 'Patient'
  | 'Condition'
  | 'MedicationRequest'
  | 'MedicationStatement'
  | 'Observation'
  | 'AllergyIntolerance'
  | 'Immunization'
  | 'Procedure'
  | 'DiagnosticReport'
  | 'Encounter'
  | 'DocumentReference'
  | 'CarePlan'
  | 'Goal'
  | 'FamilyMemberHistory'
  | 'RelatedPerson'
  | 'Practitioner'
  | 'Organization'
  | 'Location';

/**
 * OAuth2 Token Response
 */
export interface FHIRTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token?: string;
  scope: string;
  patient?: string;
  encounter?: string;
}

/**
 * SMART on FHIR Launch Context
 */
export interface SMARTLaunchContext {
  launch?: string;
  iss: string;
  aud?: string;
  patient?: string;
  encounter?: string;
  location?: string;
}

/**
 * FHIR Connection State
 */
export interface FHIRConnection {
  id: string;
  provider: FHIRProvider;
  providerName: string;
  baseUrl: string;
  patientId: string;
  accessToken: string;
  refreshToken?: string;
  expiresAt: Date;
  scope: string;
  isActive: boolean;
  createdAt: Date;
  lastSyncAt?: Date;
  metadata?: FHIRServerMetadata;
}

/**
 * FHIR Server Capability Statement (metadata)
 */
export interface FHIRServerMetadata {
  fhirVersion: string;
  software?: {
    name: string;
    version?: string;
  };
  implementation?: {
    description?: string;
    url?: string;
  };
  rest?: FHIRRestEndpoint[];
}

export interface FHIRRestEndpoint {
  mode: 'server' | 'client';
  security?: {
    cors?: boolean;
    service?: Array<{
      coding: Array<{
        system: string;
        code: string;
      }>;
    }>;
    extension?: unknown[];
  };
  resource: FHIRResourceCapability[];
}

export interface FHIRResourceCapability {
  type: FHIRResourceType;
  profile?: string;
  interaction: Array<{
    code: 'read' | 'vread' | 'update' | 'patch' | 'delete' | 'history-instance' | 'history-type' | 'create' | 'search-type';
  }>;
  searchParam?: FHIRSearchParam[];
}

export interface FHIRSearchParam {
  name: string;
  type: 'number' | 'date' | 'string' | 'token' | 'reference' | 'composite' | 'quantity' | 'uri';
  documentation?: string;
}

/**
 * FHIR Import Progress
 */
export interface FHIRImportProgress {
  connectionId: string;
  status: 'pending' | 'authenticating' | 'fetching' | 'mapping' | 'importing' | 'completed' | 'error';
  stage: string;
  stageEs: string;
  totalResources: number;
  processedResources: number;
  currentResource?: FHIRResourceType;
  errors: FHIRImportError[];
  startedAt: Date;
  completedAt?: Date;
  estimatedCompletion?: Date;
}

/**
 * FHIR Import Error
 */
export interface FHIRImportError {
  resourceType: FHIRResourceType;
  resourceId?: string;
  error: string;
  errorEs: string;
  timestamp: Date;
  recoverable: boolean;
}

/**
 * FHIR Import Result
 */
export interface FHIRImportResult {
  connectionId: string;
  success: boolean;
  importedCounts: Record<string, number>;
  errors: FHIRImportError[];
  warnings: string[];
  startedAt: Date;
  completedAt: Date;
  durationMs: number;
}

/**
 * FHIR Sync State
 */
export interface FHIRSyncState {
  connectionId: string;
  lastSyncAt: Date;
  lastSuccessfulSyncAt?: Date;
  syncToken?: string;
  resourceTimestamps: Record<FHIRResourceType, Date>;
  pendingChanges: FHIRPendingChange[];
  conflictResolution: 'server-wins' | 'client-wins' | 'manual';
}

/**
 * Pending Change for Sync
 */
export interface FHIRPendingChange {
  id: string;
  resourceType: FHIRResourceType;
  resourceId: string;
  action: 'create' | 'update' | 'delete';
  localData: unknown;
  serverData?: unknown;
  conflict?: boolean;
  resolved: boolean;
  createdAt: Date;
}

/**
 * FHIR Bundle (simplified)
 */
export interface FHIRBundle<T = unknown> {
  resourceType: 'Bundle';
  id?: string;
  meta?: FHIRMeta;
  type: 'document' | 'message' | 'transaction' | 'transaction-response' | 'batch' | 'batch-response' | 'history' | 'searchset' | 'collection';
  total?: number;
  link?: FHIRBundleLink[];
  entry?: FHIRBundleEntry<T>[];
}

export interface FHIRBundleLink {
  relation: string;
  url: string;
}

export interface FHIRBundleEntry<T = unknown> {
  fullUrl?: string;
  resource?: T;
  search?: {
    mode?: 'match' | 'include' | 'outcome';
    score?: number;
  };
}

/**
 * FHIR Meta (common to all resources)
 */
export interface FHIRMeta {
  versionId?: string;
  lastUpdated?: string;
  source?: string;
  profile?: string[];
  security?: FHIRCoding[];
  tag?: FHIRCoding[];
}

/**
 * FHIR Coding
 */
export interface FHIRCoding {
  system?: string;
  version?: string;
  code?: string;
  display?: string;
  userSelected?: boolean;
}

/**
 * FHIR CodeableConcept
 */
export interface FHIRCodeableConcept {
  coding?: FHIRCoding[];
  text?: string;
}

/**
 * FHIR Reference
 */
export interface FHIRReference {
  reference?: string;
  type?: string;
  identifier?: FHIRIdentifier;
  display?: string;
}

/**
 * FHIR Identifier
 */
export interface FHIRIdentifier {
  use?: 'usual' | 'official' | 'temp' | 'secondary' | 'old';
  type?: FHIRCodeableConcept;
  system?: string;
  value?: string;
  period?: FHIRPeriod;
  assigner?: FHIRReference;
}

/**
 * FHIR Period
 */
export interface FHIRPeriod {
  start?: string;
  end?: string;
}

/**
 * FHIR Quantity
 */
export interface FHIRQuantity {
  value?: number;
  comparator?: '<' | '<=' | '>=' | '>';
  unit?: string;
  system?: string;
  code?: string;
}

/**
 * FHIR Range
 */
export interface FHIRRange {
  low?: FHIRQuantity;
  high?: FHIRQuantity;
}

/**
 * FHIR Ratio
 */
export interface FHIRRatio {
  numerator?: FHIRQuantity;
  denominator?: FHIRQuantity;
}

/**
 * FHIR Annotation
 */
export interface FHIRAnnotation {
  authorString?: string;
  authorReference?: FHIRReference;
  time?: string;
  text: string;
}

/**
 * FHIR HumanName
 */
export interface FHIRHumanName {
  use?: 'usual' | 'official' | 'temp' | 'nickname' | 'anonymous' | 'old' | 'maiden';
  text?: string;
  family?: string;
  given?: string[];
  prefix?: string[];
  suffix?: string[];
  period?: FHIRPeriod;
}

/**
 * FHIR ContactPoint
 */
export interface FHIRContactPoint {
  system?: 'phone' | 'fax' | 'email' | 'pager' | 'url' | 'sms' | 'other';
  value?: string;
  use?: 'home' | 'work' | 'temp' | 'old' | 'mobile';
  rank?: number;
  period?: FHIRPeriod;
}

/**
 * FHIR Address
 */
export interface FHIRAddress {
  use?: 'home' | 'work' | 'temp' | 'old' | 'billing';
  type?: 'postal' | 'physical' | 'both';
  text?: string;
  line?: string[];
  city?: string;
  district?: string;
  state?: string;
  postalCode?: string;
  country?: string;
  period?: FHIRPeriod;
}

/**
 * FHIR Patient Resource
 */
export interface FHIRPatient {
  resourceType: 'Patient';
  id?: string;
  meta?: FHIRMeta;
  identifier?: FHIRIdentifier[];
  active?: boolean;
  name: FHIRHumanName[];
  telecom?: FHIRContactPoint[];
  gender?: 'male' | 'female' | 'other' | 'unknown';
  birthDate?: string;
  deceasedBoolean?: boolean;
  deceasedDateTime?: string;
  address?: FHIRAddress[];
  maritalStatus?: FHIRCodeableConcept;
  photo?: unknown[];
  contact?: unknown[];
  communication?: Array<{
    language: FHIRCodeableConcept;
    preferred?: boolean;
  }>;
  generalPractitioner?: FHIRReference[];
  managingOrganization?: FHIRReference;
}

/**
 * FHIR Condition Resource
 */
export interface FHIRCondition {
  resourceType: 'Condition';
  id?: string;
  meta?: FHIRMeta;
  identifier?: FHIRIdentifier[];
  clinicalStatus?: FHIRCodeableConcept;
  verificationStatus?: FHIRCodeableConcept;
  category?: FHIRCodeableConcept[];
  severity?: FHIRCodeableConcept;
  code: FHIRCodeableConcept;
  bodySite?: FHIRCodeableConcept[];
  subject: FHIRReference;
  encounter?: FHIRReference;
  onsetDateTime?: string;
  onsetAge?: FHIRQuantity;
  onsetPeriod?: FHIRPeriod;
  onsetRange?: FHIRRange;
  onsetString?: string;
  abatementDateTime?: string;
  abatementAge?: FHIRQuantity;
  abatementPeriod?: FHIRPeriod;
  abatementRange?: FHIRRange;
  abatementString?: string;
  recordedDate?: string;
  recorder?: FHIRReference;
  asserter?: FHIRReference;
  stage?: Array<{
    summary?: FHIRCodeableConcept;
    type?: FHIRCodeableConcept;
  }>;
  evidence?: unknown[];
  note?: FHIRAnnotation[];
}

/**
 * FHIR MedicationRequest Resource
 */
export interface FHIRMedicationRequest {
  resourceType: 'MedicationRequest';
  id?: string;
  meta?: FHIRMeta;
  identifier?: FHIRIdentifier[];
  status: 'active' | 'on-hold' | 'cancelled' | 'completed' | 'entered-in-error' | 'stopped' | 'draft' | 'unknown';
  statusReason?: FHIRCodeableConcept;
  intent: 'proposal' | 'plan' | 'order' | 'original-order' | 'reflex-order' | 'filler-order' | 'instance-order' | 'option';
  category?: FHIRCodeableConcept[];
  priority?: 'routine' | 'urgent' | 'asap' | 'stat';
  doNotPerform?: boolean;
  reportedBoolean?: boolean;
  reportedReference?: FHIRReference;
  medicationCodeableConcept?: FHIRCodeableConcept;
  medicationReference?: FHIRReference;
  subject: FHIRReference;
  encounter?: FHIRReference;
  supportingInformation?: FHIRReference[];
  authoredOn?: string;
  requester?: FHIRReference;
  performer?: FHIRReference;
  performerType?: FHIRCodeableConcept;
  recorder?: FHIRReference;
  reasonCode?: FHIRCodeableConcept[];
  reasonReference?: FHIRReference[];
  instantiatesCanonical?: string[];
  instantiatesUri?: string[];
  basedOn?: FHIRReference[];
  groupIdentifier?: FHIRIdentifier;
  courseOfTherapyType?: FHIRCodeableConcept;
  insurance?: FHIRReference[];
  note?: FHIRAnnotation[];
  dosageInstruction?: FHIRDosage[];
  dispenseRequest?: FHIRMedicationDispenseRequest;
  substitution?: {
    allowedBoolean?: boolean;
    allowedCodeableConcept?: FHIRCodeableConcept;
    reason?: FHIRCodeableConcept;
  };
  priorPrescription?: FHIRReference;
  detectedIssue?: FHIRReference[];
  eventHistory?: FHIRReference[];
}

export interface FHIRDosage {
  sequence?: number;
  text?: string;
  additionalInstruction?: FHIRCodeableConcept[];
  patientInstruction?: string;
  timing?: unknown;
  asNeededBoolean?: boolean;
  asNeededCodeableConcept?: FHIRCodeableConcept;
  site?: FHIRCodeableConcept;
  route?: FHIRCodeableConcept;
  method?: FHIRCodeableConcept;
  doseAndRate?: Array<{
    type?: FHIRCodeableConcept;
    doseRange?: FHIRRange;
    doseQuantity?: FHIRQuantity;
    rateRatio?: FHIRRatio;
    rateRange?: FHIRRange;
    rateQuantity?: FHIRQuantity;
  }>;
  maxDosePerPeriod?: FHIRRatio;
  maxDosePerAdministration?: FHIRQuantity;
  maxDosePerLifetime?: FHIRQuantity;
}

export interface FHIRMedicationDispenseRequest {
  initialFill?: {
    quantity?: FHIRQuantity;
    duration?: FHIRDuration;
  };
  dispenseInterval?: FHIRDuration;
  validityPeriod?: FHIRPeriod;
  numberOfRepeatsAllowed?: number;
  quantity?: FHIRQuantity;
  expectedSupplyDuration?: FHIRDuration;
  performer?: FHIRReference;
}

export interface FHIRDuration {
  value?: number;
  comparator?: '<' | '<=' | '>=' | '>';
  unit?: string;
  system?: string;
  code?: string;
}

/**
 * FHIR Observation Resource (for labs)
 */
export interface FHIRObservation {
  resourceType: 'Observation';
  id?: string;
  meta?: FHIRMeta;
  identifier?: FHIRIdentifier[];
  basedOn?: FHIRReference[];
  partOf?: FHIRReference[];
  status: 'registered' | 'preliminary' | 'final' | 'amended' | 'corrected' | 'cancelled' | 'entered-in-error' | 'unknown';
  category?: FHIRCodeableConcept[];
  code: FHIRCodeableConcept;
  subject?: FHIRReference;
  focus?: FHIRReference[];
  encounter?: FHIRReference;
  effectiveDateTime?: string;
  effectivePeriod?: FHIRPeriod;
  effectiveTiming?: unknown;
  effectiveInstant?: string;
  issued?: string;
  performer?: FHIRReference[];
  valueQuantity?: FHIRQuantity;
  valueCodeableConcept?: FHIRCodeableConcept;
  valueString?: string;
  valueBoolean?: boolean;
  valueInteger?: number;
  valueRange?: FHIRRange;
  valueRatio?: FHIRRatio;
  valueSampledData?: unknown;
  valueTime?: string;
  valueDateTime?: string;
  valuePeriod?: FHIRPeriod;
  dataAbsentReason?: FHIRCodeableConcept;
  interpretation?: FHIRCodeableConcept[];
  note?: FHIRAnnotation[];
  bodySite?: FHIRCodeableConcept;
  method?: FHIRCodeableConcept;
  specimen?: FHIRReference;
  device?: FHIRReference;
  referenceRange?: Array<{
    low?: FHIRQuantity;
    high?: FHIRQuantity;
    type?: FHIRCodeableConcept;
    appliesTo?: FHIRCodeableConcept[];
    age?: FHIRRange;
    text?: string;
  }>;
  hasMember?: FHIRReference[];
  derivedFrom?: FHIRReference[];
  component?: Array<{
    code: FHIRCodeableConcept;
    valueQuantity?: FHIRQuantity;
    valueCodeableConcept?: FHIRCodeableConcept;
    valueString?: string;
    valueBoolean?: boolean;
    valueInteger?: number;
    valueRange?: FHIRRange;
    valueRatio?: FHIRRatio;
    valueSampledData?: unknown;
    valueTime?: string;
    valueDateTime?: string;
    valuePeriod?: FHIRPeriod;
    dataAbsentReason?: FHIRCodeableConcept;
    interpretation?: FHIRCodeableConcept[];
    referenceRange?: unknown[];
  }>;
}

/**
 * FHIR AllergyIntolerance Resource
 */
export interface FHIRAllergyIntolerance {
  resourceType: 'AllergyIntolerance';
  id?: string;
  meta?: FHIRMeta;
  identifier?: FHIRIdentifier[];
  clinicalStatus?: FHIRCodeableConcept;
  verificationStatus?: FHIRCodeableConcept;
  type?: 'allergy' | 'intolerance';
  category?: ('food' | 'medication' | 'environment' | 'biologic')[];
  criticality?: 'low' | 'high' | 'unable-to-assess';
  code: FHIRCodeableConcept;
  patient: FHIRReference;
  encounter?: FHIRReference;
  onsetDateTime?: string;
  onsetAge?: FHIRQuantity;
  onsetPeriod?: FHIRPeriod;
  onsetRange?: FHIRRange;
  onsetString?: string;
  recordedDate?: string;
  recorder?: FHIRReference;
  asserter?: FHIRReference;
  lastOccurrence?: string;
  note?: FHIRAnnotation[];
  reaction?: Array<{
    substance?: FHIRCodeableConcept;
    manifestation: FHIRCodeableConcept[];
    description?: string;
    onset?: string;
    severity?: 'mild' | 'moderate' | 'severe';
    exposureRoute?: FHIRCodeableConcept;
    note?: FHIRAnnotation[];
  }>;
}

/**
 * FHIR Immunization Resource
 */
export interface FHIRImmunization {
  resourceType: 'Immunization';
  id?: string;
  meta?: FHIRMeta;
  identifier?: FHIRIdentifier[];
  status: 'completed' | 'entered-in-error' | 'not-done';
  statusReason?: FHIRCodeableConcept;
  vaccineCode: FHIRCodeableConcept;
  patient: FHIRReference;
  encounter?: FHIRReference;
  occurrenceDateTime?: string;
  occurrenceString?: string;
  recorded?: string;
  primarySource?: boolean;
  reportOrigin?: FHIRCodeableConcept;
  location?: FHIRReference;
  manufacturer?: FHIRReference;
  lotNumber?: string;
  expirationDate?: string;
  site?: FHIRCodeableConcept;
  route?: FHIRCodeableConcept;
  doseQuantity?: FHIRQuantity;
  performer?: Array<{
    function?: FHIRCodeableConcept;
    actor: FHIRReference;
  }>;
  note?: FHIRAnnotation[];
  reasonCode?: FHIRCodeableConcept[];
  reasonReference?: FHIRReference[];
  isSubpotent?: boolean;
  subpotentReason?: FHIRCodeableConcept[];
  education?: Array<{
    documentType?: string;
    reference?: FHIRReference;
    publicationDate?: string;
    presentationDate?: string;
  }>;
  programEligibility?: FHIRCodeableConcept[];
  fundingSource?: FHIRCodeableConcept;
}

/**
 * FHIR DiagnosticReport Resource
 */
export interface FHIRDiagnosticReport {
  resourceType: 'DiagnosticReport';
  id?: string;
  meta?: FHIRMeta;
  identifier?: FHIRIdentifier[];
  basedOn?: FHIRReference[];
  status: 'registered' | 'partial' | 'preliminary' | 'final' | 'amended' | 'corrected' | 'appended' | 'cancelled' | 'entered-in-error' | 'unknown';
  category?: FHIRCodeableConcept[];
  code: FHIRCodeableConcept;
  subject?: FHIRReference;
  encounter?: FHIRReference;
  effectiveDateTime?: string;
  effectivePeriod?: FHIRPeriod;
  issued?: string;
  performer?: FHIRReference[];
  resultsInterpreter?: FHIRReference[];
  specimen?: FHIRReference[];
  result?: FHIRReference[];
  imagingStudy?: FHIRReference[];
  media?: unknown[];
  conclusion?: string;
  conclusionCode?: FHIRCodeableConcept[];
  presentedForm?: unknown[];
}

/**
 * Mapped BiologicalSelf Types (for reference)
 */
export interface BiologicalSelfUserProfile {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth?: Date;
  gender?: 'male' | 'female' | 'other' | 'unknown';
  email?: string;
  phone?: string;
  address?: {
    street?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    country?: string;
  };
  preferredLanguage: string;
  emergencyContact?: {
    name: string;
    relationship: string;
    phone: string;
  };
}

export interface BiologicalSelfCondition {
  id: string;
  name: string;
  icd10Code?: string;
  snomedCode?: string;
  diagnosedDate?: Date;
  onsetDate?: Date;
  status: 'active' | 'resolved' | 'chronic' | 'remission';
  severity?: 'mild' | 'moderate' | 'severe';
  clinicalStatus?: 'active' | 'recurrence' | 'relapse' | 'inactive' | 'remission' | 'resolved' | 'unknown';
  verificationStatus?: 'unconfirmed' | 'provisional' | 'differential' | 'confirmed' | 'refuted' | 'entered-in-error';
  notes?: string;
  bodySites?: string[];
  source: 'fhir' | 'manual' | 'import';
  fhirReference?: string;
  lastUpdated: Date;
}

export interface BiologicalSelfMedication {
  id: string;
  name: string;
  genericName?: string;
  rxNormCode?: string;
  dose?: string;
  frequency?: string;
  route?: string;
  indication?: string;
  instructions?: string;
  status: 'active' | 'on-hold' | 'completed' | 'stopped' | 'cancelled';
  prescribedDate?: Date;
  startDate?: Date;
  endDate?: Date;
  prescribingProvider?: string;
  pharmacy?: string;
  notes?: string;
  source: 'fhir' | 'manual' | 'import';
  fhirReference?: string;
  lastUpdated: Date;
}

export interface BiologicalSelfLabResult {
  id: string;
  testName: string;
  loincCode?: string;
  value: number | string;
  unit?: string;
  referenceRangeLow?: number;
  referenceRangeHigh?: number;
  referenceRangeText?: string;
  status: 'pending' | 'preliminary' | 'final' | 'corrected';
  interpretation?: 'low' | 'normal' | 'high' | 'critical-low' | 'critical-high' | 'abnormal';
  collectedDate?: Date;
  resultedDate?: Date;
  performingLab?: string;
  orderingProvider?: string;
  specimenType?: string;
  notes?: string;
  category?: string;
  componentResults?: BiologicalSelfLabResult[];
  source: 'fhir' | 'manual' | 'import';
  fhirReference?: string;
  diagnosticReportId?: string;
  lastUpdated: Date;
}

export interface BiologicalSelfAllergy {
  id: string;
  allergen: string;
  allergenCode?: string;
  codeSystem?: string;
  type: 'allergy' | 'intolerance';
  category?: ('food' | 'medication' | 'environment' | 'biologic')[];
  criticality: 'low' | 'high' | 'unable-to-assess' | 'unknown';
  reactions: Array<{
    manifestation: string;
    severity?: 'mild' | 'moderate' | 'severe';
    description?: string;
  }>;
  onsetDate?: Date;
  recordedDate?: Date;
  status: 'active' | 'inactive' | 'resolved';
  notes?: string;
  source: 'fhir' | 'manual' | 'import';
  fhirReference?: string;
  lastUpdated: Date;
}

export interface BiologicalSelfVaccination {
  id: string;
  vaccineName: string;
  cvxCode?: string;
  manufacturer?: string;
  lotNumber?: string;
  administeredDate: Date;
  status: 'completed' | 'not-done' | 'entered-in-error';
  site?: string;
  route?: string;
  doseQuantity?: string;
  administeringProvider?: string;
  location?: string;
  notes?: string;
  source: 'fhir' | 'manual' | 'import';
  fhirReference?: string;
  nextDueDate?: Date;
  lastUpdated: Date;
}
