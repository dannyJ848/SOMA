/**
 * FHIR Integration Module
 * 
 * Enable patients to import health data from major EHR systems using FHIR R4.
 * Supports Epic, Cerner, VA Health, and Medicare Blue Button.
 * 
 * @module core/import/fhir
 */

// Types
export type {
  FHIRProvider,
  FHIRProviderConfig,
  FHIRResourceType,
  FHIRTokenResponse,
  SMARTLaunchContext,
  FHIRConnection,
  FHIRServerMetadata,
  FHIRImportProgress,
  FHIRImportError,
  FHIRImportResult,
  FHIRSyncState,
  FHIRPendingChange,
  FHIRBundle,
  FHIRBundleLink,
  FHIRBundleEntry,
  FHIRMeta,
  FHIRCoding,
  FHIRCodeableConcept,
  FHIRReference,
  FHIRIdentifier,
  FHIRPeriod,
  FHIRQuantity,
  FHIRRange,
  FHIRRatio,
  FHIRAnnotation,
  FHIRHumanName,
  FHIRContactPoint,
  FHIRAddress,
  FHIRPatient,
  FHIRCondition,
  FHIRMedicationRequest,
  FHIRDosage,
  FHIRMedicationDispenseRequest,
  FHIRDuration,
  FHIRObservation,
  FHIRAllergyIntolerance,
  FHIRImmunization,
  FHIRDiagnosticReport,
  BiologicalSelfUserProfile,
  BiologicalSelfCondition,
  BiologicalSelfMedication,
  BiologicalSelfLabResult,
  BiologicalSelfAllergy,
  BiologicalSelfVaccination,
} from './types.js';

// FHIR Client
export {
  FHIRClient,
  FHIRAuthError,
  FHIRRequestError,
  DEFAULT_PROVIDERS,
  parseLaunchContext,
  getAvailableProviders,
  getProviderConfig,
} from './fhir-client.js';

// Resource Mapper
export {
  FHIRMappers,
  mapPatientToUserProfile,
  mapConditionToBiologicalSelf,
  mapMedicationRequestToBiologicalSelf,
  mapObservationToLabResult,
  mapAllergyIntoleranceToBiologicalSelf,
  mapImmunizationToBiologicalSelf,
  mapPatientsBatch,
  mapConditionsBatch,
  mapMedicationsBatch,
  mapObservationsBatch,
  mapAllergiesBatch,
  mapImmunizationsBatch,
} from './resource-mapper.js';

export type {
  MappingResult,
  MappingOptions,
} from './resource-mapper.js';

// Fetcher
export {
  FHIRFetcher,
  fetchFHIRData,
  fetchResourceType,
  fetchResourceById,
  searchResources,
} from './fetcher.js';

export type {
  FetchConfig,
  FetchedData,
  ProgressCallback,
} from './fetcher.js';

// Sync Engine
export {
  FHIRSyncEngine,
  createSyncEngine,
} from './sync.js';

export type {
  SyncConfig,
  SyncResult,
  SyncConflict,
  SyncError,
  SyncStatus,
  SyncStatusInfo,
  SyncStorage,
  LocalDataStore,
} from './sync.js';

/**
 * Supported FHIR providers with display information (Spanish-first)
 */
export const FHIR_PROVIDERS_INFO = [
  {
    id: 'epic' as const,
    name: 'Epic MyChart',
    nameEs: 'Epic MyChart',
    description: 'Accede a tus registros médicos de hospitales y clínicas que usan Epic',
    descriptionEn: 'Access your medical records from hospitals and clinics using Epic',
    logo: '/providers/epic-logo.svg',
    available: true,
    patientFacing: true,
  },
  {
    id: 'cerner' as const,
    name: 'Cerner Health',
    nameEs: 'Cerner Salud',
    description: 'Conecta con sistemas de salud que utilizan Cerner',
    descriptionEn: 'Connect with health systems using Cerner',
    logo: '/providers/cerner-logo.svg',
    available: true,
    patientFacing: true,
  },
  {
    id: 'va-health' as const,
    name: 'VA Health',
    nameEs: 'Salud VA (Veteranos)',
    description: 'Accede a tus registros del Departamento de Asuntos de Veteranos',
    descriptionEn: 'Access your Department of Veterans Affairs records',
    logo: '/providers/va-logo.svg',
    available: true,
    patientFacing: true,
  },
  {
    id: 'medicare-blue-button' as const,
    name: 'Medicare Blue Button',
    nameEs: 'Medicare Blue Button',
    description: 'Descarga tus reclamos de Medicare y datos de salud',
    descriptionEn: 'Download your Medicare claims and health data',
    logo: '/providers/medicare-logo.svg',
    available: true,
    patientFacing: true,
  },
  {
    id: 'athenahealth' as const,
    name: 'athenahealth',
    nameEs: 'athenahealth',
    description: 'Conecta con médicos y clínicas que usan athenahealth',
    descriptionEn: 'Connect with doctors and clinics using athenahealth',
    logo: '/providers/athenahealth-logo.svg',
    available: true,
    patientFacing: true,
  },
  {
    id: 'allscripts' as const,
    name: 'Allscripts',
    nameEs: 'Allscripts',
    description: 'Accede a registros de sistemas de salud con Allscripts',
    descriptionEn: 'Access records from health systems with Allscripts',
    logo: '/providers/allscripts-logo.svg',
    available: true,
    patientFacing: true,
  },
  {
    id: 'meditech' as const,
    name: 'MEDITECH',
    nameEs: 'MEDITECH',
    description: 'Conecta con hospitales que utilizan MEDITECH',
    descriptionEn: 'Connect with hospitals using MEDITECH',
    logo: '/providers/meditech-logo.svg',
    available: true,
    patientFacing: true,
  },
  {
    id: 'custom' as const,
    name: 'Custom FHIR Server',
    nameEs: 'Servidor FHIR Personalizado',
    description: 'Conecta a un servidor FHIR personalizado o de otro proveedor',
    descriptionEn: 'Connect to a custom or other provider FHIR server',
    logo: '/providers/fhir-logo.svg',
    available: true,
    patientFacing: true,
  },
];

/**
 * Get provider info by ID
 */
export function getProviderInfo(id: string) {
  return FHIR_PROVIDERS_INFO.find((p) => p.id === id);
}

/**
 * Get available patient-facing providers
 */
export function getAvailablePatientProviders() {
  return FHIR_PROVIDERS_INFO.filter((p) => p.available && p.patientFacing);
}

/**
 * Resource type display names (Spanish)
 */
export const RESOURCE_TYPE_LABELS: Record<string, { es: string; en: string }> = {
  Patient: { es: 'Información del Paciente', en: 'Patient Information' },
  Condition: { es: 'Condiciones de Salud', en: 'Health Conditions' },
  MedicationRequest: { es: 'Medicamentos', en: 'Medications' },
  Observation: { es: 'Resultados de Laboratorio', en: 'Lab Results' },
  AllergyIntolerance: { es: 'Alergias', en: 'Allergies' },
  Immunization: { es: 'Vacunas', en: 'Immunizations' },
  Procedure: { es: 'Procedimientos', en: 'Procedures' },
  DiagnosticReport: { es: 'Reportes Diagnósticos', en: 'Diagnostic Reports' },
  Encounter: { es: 'Visitas Médicas', en: 'Medical Visits' },
  DocumentReference: { es: 'Documentos', en: 'Documents' },
  CarePlan: { es: 'Planes de Cuidado', en: 'Care Plans' },
  Goal: { es: 'Metas de Salud', en: 'Health Goals' },
};

/**
 * Get resource type label
 */
export function getResourceTypeLabel(
  resourceType: string,
  language: 'es' | 'en' = 'es'
): string {
  return RESOURCE_TYPE_LABELS[resourceType]?.[language] || resourceType;
}

/**
 * Sync status labels (Spanish-first)
 */
export const SYNC_STATUS_LABELS: Record<
  string,
  { es: string; en: string; description: string; descriptionEn: string }
> = {
  idle: {
    es: 'Inactivo',
    en: 'Idle',
    description: 'Listo para sincronizar',
    descriptionEn: 'Ready to sync',
  },
  checking: {
    es: 'Verificando',
    en: 'Checking',
    description: 'Verificando cambios en el servidor',
    descriptionEn: 'Checking for changes on server',
  },
  fetching: {
    es: 'Descargando',
    en: 'Fetching',
    description: 'Descargando datos de salud',
    descriptionEn: 'Downloading health data',
  },
  comparing: {
    es: 'Comparando',
    en: 'Comparing',
    description: 'Comparando datos locales y del servidor',
    descriptionEn: 'Comparing local and server data',
  },
  resolving: {
    es: 'Resolviendo Conflictos',
    en: 'Resolving Conflicts',
    description: 'Resolviendo diferencias entre datos',
    descriptionEn: 'Resolving data differences',
  },
  applying: {
    es: 'Aplicando Cambios',
    en: 'Applying Changes',
    description: 'Guardando nuevos datos en tu dispositivo',
    descriptionEn: 'Saving new data to your device',
  },
  completed: {
    es: 'Completado',
    en: 'Completed',
    description: 'Sincronización completada exitosamente',
    descriptionEn: 'Sync completed successfully',
  },
  failed: {
    es: 'Fallido',
    en: 'Failed',
    description: 'La sincronización encontró un error',
    descriptionEn: 'Sync encountered an error',
  },
};

/**
 * Error messages (Spanish-first)
 */
export const ERROR_MESSAGES = {
  authFailed: {
    es: 'Error de autenticación. Por favor intenta conectarte nuevamente.',
    en: 'Authentication failed. Please try connecting again.',
  },
  networkError: {
    es: 'Error de conexión. Verifica tu conexión a internet.',
    en: 'Connection error. Please check your internet connection.',
  },
  serverError: {
    es: 'El servidor de salud no responde. Intenta más tarde.',
    en: 'Health server is not responding. Please try again later.',
  },
  invalidData: {
    es: 'Los datos recibidos no son válidos.',
    en: 'Received data is invalid.',
  },
  rateLimited: {
    es: 'Demasiadas solicitudes. Por favor espera un momento.',
    en: 'Too many requests. Please wait a moment.',
  },
  sessionExpired: {
    es: 'Tu sesión expiró. Por favor conecta nuevamente.',
    en: 'Your session expired. Please connect again.',
  },
};

/**
 * Get localized error message
 */
export function getErrorMessage(
  key: keyof typeof ERROR_MESSAGES,
  language: 'es' | 'en' = 'es'
): string {
  return ERROR_MESSAGES[key][language];
}

/**
 * Connection step labels for wizard
 */
export const CONNECTION_STEPS = [
  {
    id: 'select-provider',
    labelEs: 'Seleccionar Proveedor',
    labelEn: 'Select Provider',
    descriptionEs: 'Elige tu sistema de registros médicos electrónicos',
    descriptionEn: 'Choose your electronic health records system',
  },
  {
    id: 'authenticate',
    labelEs: 'Autenticar',
    labelEn: 'Authenticate',
    descriptionEs: 'Inicia sesión de forma segura con tu proveedor de salud',
    descriptionEn: 'Securely sign in with your health provider',
  },
  {
    id: 'authorize',
    labelEs: 'Autorizar Acceso',
    labelEn: 'Authorize Access',
    descriptionEs: 'Aprueba el acceso a tus registros de salud',
    descriptionEn: 'Approve access to your health records',
  },
  {
    id: 'import',
    labelEs: 'Importar Datos',
    labelEn: 'Import Data',
    descriptionEs: 'Descargamos y guardamos tus registros de forma segura',
    descriptionEn: 'We download and securely store your records',
  },
  {
    id: 'review',
    labelEs: 'Revisar',
    labelEn: 'Review',
    descriptionEs: 'Revisa los datos importados',
    descriptionEn: 'Review the imported data',
  },
];
