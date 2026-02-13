/**
 * FHIR Data Fetcher
 * 
 * Fetches FHIR resources with pagination support, progress tracking,
 * and error handling for partial failures.
 */

import {
  type FHIRClient,
  type FHIRRequestError,
} from './fhir-client.js';
import {
  type FHIRResourceType,
  type FHIRBundle,
  type FHIRPatient,
  type FHIRCondition,
  type FHIRMedicationRequest,
  type FHIRObservation,
  type FHIRAllergyIntolerance,
  type FHIRImmunization,
  type FHIRDiagnosticReport,
  type FHIRImportProgress,
  type FHIRImportError,
  type FHIRImportResult,
} from './types.js';

/**
 * Fetch configuration
 */
export interface FetchConfig {
  /** Maximum resources to fetch per type (undefined = all) */
  maxResourcesPerType?: number;
  /** Page size for pagination */
  pageSize: number;
  /** Date filter - only fetch resources updated since */
  since?: Date;
  /** Specific resource types to fetch (undefined = all supported) */
  resourceTypes?: FHIRResourceType[];
  /** Include patient resource */
  includePatient: boolean;
  /** Timeout per request in ms */
  requestTimeoutMs: number;
  /** Retry attempts for failed requests */
  retryAttempts: number;
  /** Delay between retries in ms */
  retryDelayMs: number;
}

/**
 * Default fetch configuration
 */
const DEFAULT_FETCH_CONFIG: FetchConfig = {
  pageSize: 100,
  includePatient: true,
  requestTimeoutMs: 30000,
  retryAttempts: 3,
  retryDelayMs: 1000,
};

/**
 * Resource type metadata
 */
interface ResourceTypeConfig {
  searchParams: string[];
  dateParam: string;
  sortParam: string;
  countEstimate: number;
}

/**
 * Resource type configurations
 */
const RESOURCE_CONFIGS: Record<FHIRResourceType, ResourceTypeConfig> = {
  Patient: {
    searchParams: ['_id'],
    dateParam: '_lastUpdated',
    sortParam: '_lastUpdated',
    countEstimate: 1,
  },
  Condition: {
    searchParams: ['patient', '_lastUpdated'],
    dateParam: '_lastUpdated',
    sortParam: '-recorded-date',
    countEstimate: 20,
  },
  MedicationRequest: {
    searchParams: ['patient', '_lastUpdated', 'status'],
    dateParam: '_lastUpdated',
    sortParam: '-authoredon',
    countEstimate: 50,
  },
  MedicationStatement: {
    searchParams: ['patient', '_lastUpdated'],
    dateParam: '_lastUpdated',
    sortParam: '-dateasserted',
    countEstimate: 30,
  },
  Observation: {
    searchParams: ['patient', '_lastUpdated', 'category', 'code'],
    dateParam: '_lastUpdated',
    sortParam: '-date',
    countEstimate: 500,
  },
  AllergyIntolerance: {
    searchParams: ['patient', '_lastUpdated'],
    dateParam: '_lastUpdated',
    sortParam: '-date',
    countEstimate: 10,
  },
  Immunization: {
    searchParams: ['patient', '_lastUpdated'],
    dateParam: '_lastUpdated',
    sortParam: '-date',
    countEstimate: 50,
  },
  Procedure: {
    searchParams: ['patient', '_lastUpdated'],
    dateParam: '_lastUpdated',
    sortParam: '-date',
    countEstimate: 30,
  },
  DiagnosticReport: {
    searchParams: ['patient', '_lastUpdated', 'category'],
    dateParam: '_lastUpdated',
    sortParam: '-date',
    countEstimate: 100,
  },
  Encounter: {
    searchParams: ['patient', '_lastUpdated'],
    dateParam: '_lastUpdated',
    sortParam: '-date',
    countEstimate: 100,
  },
  DocumentReference: {
    searchParams: ['patient', '_lastUpdated'],
    dateParam: '_lastUpdated',
    sortParam: '-date',
    countEstimate: 50,
  },
  CarePlan: {
    searchParams: ['patient', '_lastUpdated'],
    dateParam: '_lastUpdated',
    sortParam: '-date',
    countEstimate: 10,
  },
  Goal: {
    searchParams: ['patient', '_lastUpdated'],
    dateParam: '_lastUpdated',
    sortParam: '-start-date',
    countEstimate: 10,
  },
  FamilyMemberHistory: {
    searchParams: ['patient', '_lastUpdated'],
    dateParam: '_lastUpdated',
    sortParam: '-date',
    countEstimate: 5,
  },
  RelatedPerson: {
    searchParams: ['patient', '_lastUpdated'],
    dateParam: '_lastUpdated',
    sortParam: '-date',
    countEstimate: 5,
  },
  Practitioner: {
    searchParams: ['_id'],
    dateParam: '_lastUpdated',
    sortParam: '_lastUpdated',
    countEstimate: 10,
  },
  Organization: {
    searchParams: ['_id'],
    dateParam: '_lastUpdated',
    sortParam: '_lastUpdated',
    countEstimate: 5,
  },
  Location: {
    searchParams: ['_id'],
    dateParam: '_lastUpdated',
    sortParam: '_lastUpdated',
    countEstimate: 5,
  },
};

/**
 * Fetched data container
 */
export interface FetchedData {
  patient?: FHIRPatient;
  conditions: FHIRCondition[];
  medications: FHIRMedicationRequest[];
  observations: FHIRObservation[];
  allergies: FHIRAllergyIntolerance[];
  immunizations: FHIRImmunization[];
  diagnosticReports: FHIRDiagnosticReport[];
  raw: {
    [key: string]: unknown[];
  };
}

/**
 * Progress callback
 */
export type ProgressCallback = (progress: FHIRImportProgress) => void;

/**
 * FHIR Data Fetcher
 */
export class FHIRFetcher {
  private client: FHIRClient;
  private config: FetchConfig;
  private progress: FHIRImportProgress;
  private progressCallback?: ProgressCallback;

  constructor(
    client: FHIRClient,
    config: Partial<FetchConfig> = {},
    progressCallback?: ProgressCallback
  ) {
    this.client = client;
    this.config = { ...DEFAULT_FETCH_CONFIG, ...config };
    this.progressCallback = progressCallback;

    // Determine which resources to fetch
    const resourceTypes = this.config.resourceTypes || [
      'Patient',
      'Condition',
      'MedicationRequest',
      'Observation',
      'AllergyIntolerance',
      'Immunization',
      'DiagnosticReport',
    ];

    // Calculate total estimate
    const totalEstimate = resourceTypes.reduce((sum, type) => {
      return sum + (RESOURCE_CONFIGS[type]?.countEstimate || 10);
    }, 0);

    this.progress = {
      connectionId: client.getConnection()?.id || '',
      status: 'pending',
      stage: 'Initializing',
      stageEs: 'Inicializando',
      totalResources: totalEstimate,
      processedResources: 0,
      errors: [],
      startedAt: new Date(),
    };
  }

  /**
   * Fetch all configured resources
   */
  async fetchAll(): Promise<{
    data: FetchedData;
    progress: FHIRImportProgress;
  }> {
    this.updateProgress({
      status: 'fetching',
      stage: 'Starting fetch',
      stageEs: 'Iniciando descarga',
    });

    const data: FetchedData = {
      conditions: [],
      medications: [],
      observations: [],
      allergies: [],
      immunizations: [],
      diagnosticReports: [],
      raw: {},
    };

    const connection = this.client.getConnection();
    if (!connection) {
      throw new Error('Not authenticated');
    }

    const patientId = connection.patientId;

    try {
      // Fetch patient first if enabled
      if (this.config.includePatient) {
        this.updateProgress({
          currentResource: 'Patient',
          stage: 'Fetching patient information',
          stageEs: 'Obteniendo información del paciente',
        });

        const patient = await this.fetchPatient(patientId);
        if (patient) {
          data.patient = patient;
          data.raw['Patient'] = [patient];
        }
      }

      // Determine which resources to fetch
      const resourceTypes = this.config.resourceTypes || [
        'Condition',
        'MedicationRequest',
        'Observation',
        'AllergyIntolerance',
        'Immunization',
        'DiagnosticReport',
      ];

      // Fetch each resource type
      for (const resourceType of resourceTypes) {
        if (resourceType === 'Patient') continue;

        this.updateProgress({
          currentResource: resourceType,
          stage: `Fetching ${resourceType} resources`,
          stageEs: `Obteniendo recursos de ${resourceType}`,
        });

        try {
          const resources = await this.fetchResourceType(
            resourceType,
            patientId
          );

          // Store in appropriate typed array
          switch (resourceType) {
            case 'Condition':
              data.conditions = resources as FHIRCondition[];
              break;
            case 'MedicationRequest':
              data.medications = resources as FHIRMedicationRequest[];
              break;
            case 'Observation':
              data.observations = resources as FHIRObservation[];
              break;
            case 'AllergyIntolerance':
              data.allergies = resources as FHIRAllergyIntolerance[];
              break;
            case 'Immunization':
              data.immunizations = resources as FHIRImmunization[];
              break;
            case 'DiagnosticReport':
              data.diagnosticReports = resources as FHIRDiagnosticReport[];
              break;
          }

          // Always store in raw
          data.raw[resourceType] = resources;
        } catch (error) {
          const err = error as Error;
          this.addError({
            resourceType,
            error: err.message,
            errorEs: `Error al obtener ${resourceType}: ${err.message}`,
            recoverable: true,
          });
        }
      }

      this.updateProgress({
        status: 'completed',
        stage: 'Fetch completed',
        stageEs: 'Descarga completada',
        completedAt: new Date(),
      });

      return { data, progress: this.progress };
    } catch (error) {
      const err = error as Error;
      this.updateProgress({
        status: 'error',
        stage: 'Fetch failed',
        stageEs: 'Descarga fallida',
      });
      throw err;
    }
  }

  /**
   * Fetch patient resource
   */
  private async fetchPatient(patientId: string): Promise<FHIRPatient | undefined> {
    try {
      return await this.withRetry(() =>
        this.client.request<FHIRPatient>(`Patient/${patientId}`)
      );
    } catch (error) {
      const err = error as Error;
      this.addError({
        resourceType: 'Patient',
        error: err.message,
        errorEs: `Error al obtener paciente: ${err.message}`,
        recoverable: true,
      });
      return undefined;
    }
  }

  /**
   * Fetch resources of a specific type with pagination
   */
  private async fetchResourceType<T>(
    resourceType: FHIRResourceType,
    patientId: string
  ): Promise<T[]> {
    const resources: T[] = [];
    const config = RESOURCE_CONFIGS[resourceType];
    
    let nextUrl: string | undefined = this.buildSearchUrl(resourceType, patientId);
    let pageCount = 0;
    const maxPages = this.config.maxResourcesPerType
      ? Math.ceil(this.config.maxResourcesPerType / this.config.pageSize)
      : 100;

    while (nextUrl && pageCount < maxPages) {
      pageCount++;

      try {
        const bundle = await this.withRetry(() =>
          this.client.request<FHIRBundle<T>>(nextUrl!)
        );

        // Extract resources from bundle
        const entries = bundle.entry || [];
        for (const entry of entries) {
          if (entry.resource) {
            resources.push(entry.resource);
            
            // Update progress
            this.updateProgress({
              processedResources: this.progress.processedResources + 1,
            });

            // Check if we've hit the limit
            if (
              this.config.maxResourcesPerType &&
              resources.length >= this.config.maxResourcesPerType
            ) {
              return resources.slice(0, this.config.maxResourcesPerType);
            }
          }
        }

        // Find next page link
        const nextLink = bundle.link?.find((l) => l.relation === 'next');
        nextUrl = nextLink?.url;

        // If no next link or we've reached max, stop
        if (!nextUrl || resources.length >= (bundle.total || Infinity)) {
          break;
        }
      } catch (error) {
        const err = error as Error;
        this.addError({
          resourceType,
          error: `Page ${pageCount} failed: ${err.message}`,
          errorEs: `Página ${pageCount} falló: ${err.message}`,
          recoverable: true,
        });
        break;
      }
    }

    return resources;
  }

  /**
   * Build search URL for resource type
   */
  private buildSearchUrl(resourceType: FHIRResourceType, patientId: string): string {
    const config = RESOURCE_CONFIGS[resourceType];
    const params = new URLSearchParams();

    // Add patient parameter
    params.set('patient', patientId);

    // Add date filter if specified
    if (this.config.since) {
      params.set(
        config.dateParam,
        `gt${this.config.since.toISOString()}`
      );
    }

    // Add pagination
    params.set('_count', this.config.pageSize.toString());

    // Add sorting
    if (config.sortParam) {
      params.set('_sort', config.sortParam);
    }

    return `${resourceType}?${params.toString()}`;
  }

  /**
   * Execute request with retry logic
   */
  private async withRetry<T>(
    requestFn: () => Promise<T>,
    attempt = 1
  ): Promise<T> {
    try {
      return await requestFn();
    } catch (error) {
      const err = error as FHIRRequestError;
      
      // Don't retry auth errors
      if (err.statusCode === 401 || err.statusCode === 403) {
        throw error;
      }

      // Retry on 5xx or network errors
      if (attempt < this.config.retryAttempts) {
        await this.delay(this.config.retryDelayMs * attempt);
        return this.withRetry(requestFn, attempt + 1);
      }

      throw error;
    }
  }

  /**
   * Delay helper
   */
  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  /**
   * Update progress and notify callback
   */
  private updateProgress(updates: Partial<FHIRImportProgress>): void {
    this.progress = { ...this.progress, ...updates };
    this.progressCallback?.(this.progress);
  }

  /**
   * Add an error to progress
   */
  private addError(error: Omit<FHIRImportError, 'timestamp'>): void {
    this.progress.errors.push({
      ...error,
      timestamp: new Date(),
    });
  }

  /**
   * Get current progress
   */
  getProgress(): FHIRImportProgress {
    return this.progress;
  }
}

/**
 * Convenience function to fetch all data
 */
export async function fetchFHIRData(
  client: FHIRClient,
  config?: Partial<FetchConfig>,
  progressCallback?: ProgressCallback
): Promise<{
  data: FetchedData;
  progress: FHIRImportProgress;
}> {
  const fetcher = new FHIRFetcher(client, config, progressCallback);
  return fetcher.fetchAll();
}

/**
 * Fetch specific resource type with filtering
 */
export async function fetchResourceType<T>(
  client: FHIRClient,
  resourceType: FHIRResourceType,
  params?: Record<string, string>
): Promise<T[]> {
  const searchParams = new URLSearchParams(params);
  const url = searchParams.toString()
    ? `${resourceType}?${searchParams.toString()}`
    : resourceType;

  const bundle = await client.request<FHIRBundle<T>>(url);
  
  return (bundle.entry || [])
    .map((entry) => entry.resource)
    .filter((r): r is T => r !== undefined);
}

/**
 * Fetch a single resource by ID
 */
export async function fetchResourceById<T>(
  client: FHIRClient,
  resourceType: FHIRResourceType,
  id: string
): Promise<T | undefined> {
  try {
    return await client.request<T>(`${resourceType}/${id}`);
  } catch {
    return undefined;
  }
}

/**
 * Search resources with custom parameters
 */
export async function searchResources<T>(
  client: FHIRClient,
  resourceType: FHIRResourceType,
  searchParams: Record<string, string | string[]>
): Promise<{
  resources: T[];
  total?: number;
  nextUrl?: string;
}> {
  const params = new URLSearchParams();
  
  for (const [key, value] of Object.entries(searchParams)) {
    if (Array.isArray(value)) {
      for (const v of value) {
        params.append(key, v);
      }
    } else {
      params.set(key, value);
    }
  }

  const url = `${resourceType}?${params.toString()}`;
  const bundle = await client.request<FHIRBundle<T>>(url);

  return {
    resources: (bundle.entry || [])
      .map((entry) => entry.resource)
      .filter((r): r is T => r !== undefined),
    total: bundle.total,
    nextUrl: bundle.link?.find((l) => l.relation === 'next')?.url,
  };
}
