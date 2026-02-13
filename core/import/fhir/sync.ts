/**
 * FHIR Sync Engine
 * 
 * Handles incremental updates, conflict resolution, and background synchronization
 * of FHIR data with the local BiologicalSelf data store.
 */

import {
  type FHIRClient,
  FHIRAuthError,
} from './fhir-client.js';
import {
  type FHIRResourceType,
  type FHIRSyncState,
  type FHIRPendingChange,
  type FHIRConnection,
  type FHIRBundle,
  type BiologicalSelfCondition,
  type BiologicalSelfMedication,
  type BiologicalSelfLabResult,
  type BiologicalSelfAllergy,
  type BiologicalSelfVaccination,
} from './types.js';
import { FHIRFetcher, fetchFHIRData } from './fetcher.js';
import { FHIRMappers } from './resource-mapper.js';

/**
 * Sync configuration
 */
export interface SyncConfig {
  /** Sync interval in minutes (for background sync) */
  syncIntervalMinutes: number;
  /** Enable automatic background sync */
  enableBackgroundSync: boolean;
  /** Conflict resolution strategy */
  conflictResolution: 'server-wins' | 'client-wins' | 'manual';
  /** Maximum age of data before full refresh (days) */
  maxDataAgeDays: number;
  /** Resource types to sync */
  resourceTypes: FHIRResourceType[];
  /** Notify on new data */
  notifyOnNewData: boolean;
}

/**
 * Default sync configuration
 */
const DEFAULT_SYNC_CONFIG: SyncConfig = {
  syncIntervalMinutes: 60,
  enableBackgroundSync: false,
  conflictResolution: 'server-wins',
  maxDataAgeDays: 7,
  resourceTypes: [
    'Patient',
    'Condition',
    'MedicationRequest',
    'Observation',
    'AllergyIntolerance',
    'Immunization',
  ],
  notifyOnNewData: true,
};

/**
 * Sync result
 */
export interface SyncResult {
  success: boolean;
  connectionId: string;
  syncedAt: Date;
  resourcesSynced: Record<FHIRResourceType, number>;
  conflicts: SyncConflict[];
  errors: SyncError[];
  newData: {
    conditions: BiologicalSelfCondition[];
    medications: BiologicalSelfMedication[];
    labResults: BiologicalSelfLabResult[];
    allergies: BiologicalSelfAllergy[];
    vaccinations: BiologicalSelfVaccination[];
  };
  nextSyncDue?: Date;
}

/**
 * Sync conflict
 */
export interface SyncConflict {
  id: string;
  resourceType: FHIRResourceType;
  resourceId: string;
  serverData: unknown;
  localData: unknown;
  field: string;
  serverValue: unknown;
  localValue: unknown;
  resolved: boolean;
  resolution?: 'server' | 'client' | 'merged';
}

/**
 * Sync error
 */
export interface SyncError {
  resourceType: FHIRResourceType;
  resourceId?: string;
  error: string;
  errorEs: string;
  recoverable: boolean;
}

/**
 * Sync status
 */
export type SyncStatus = 
  | 'idle'
  | 'checking'
  | 'fetching'
  | 'comparing'
  | 'resolving'
  | 'applying'
  | 'completed'
  | 'failed';

/**
 * Sync status with metadata
 */
export interface SyncStatusInfo {
  status: SyncStatus;
  statusEs: string;
  lastSyncAt?: Date;
  lastSuccessfulSyncAt?: Date;
  nextSyncDue?: Date;
  isBackgroundSync: boolean;
  progress?: {
    current: number;
    total: number;
    resourceType?: FHIRResourceType;
  };
}

/**
 * Storage interface for sync state
 */
export interface SyncStorage {
  getSyncState(connectionId: string): Promise<FHIRSyncState | undefined>;
  saveSyncState(state: FHIRSyncState): Promise<void>;
  getPendingChanges(connectionId: string): Promise<FHIRPendingChange[]>;
  savePendingChanges(connectionId: string, changes: FHIRPendingChange[]): Promise<void>;
  getLastResourceTimestamp(
    connectionId: string,
    resourceType: FHIRResourceType
  ): Promise<Date | undefined>;
  saveLastResourceTimestamp(
    connectionId: string,
    resourceType: FHIRResourceType,
    timestamp: Date
  ): Promise<void>;
}

/**
 * Local data store interface
 */
export interface LocalDataStore {
  getConditions(): Promise<BiologicalSelfCondition[]>;
  getMedications(): Promise<BiologicalSelfMedication[]>;
  getLabResults(): Promise<BiologicalSelfLabResult[]>;
  getAllergies(): Promise<BiologicalSelfAllergy[]>;
  getVaccinations(): Promise<BiologicalSelfVaccination[]>;
  
  saveCondition(condition: BiologicalSelfCondition): Promise<void>;
  saveMedication(medication: BiologicalSelfMedication): Promise<void>;
  saveLabResult(labResult: BiologicalSelfLabResult): Promise<void>;
  saveAllergy(allergy: BiologicalSelfAllergy): Promise<void>;
  saveVaccination(vaccination: BiologicalSelfVaccination): Promise<void>;
  
  updateCondition(condition: BiologicalSelfCondition): Promise<void>;
  updateMedication(medication: BiologicalSelfMedication): Promise<void>;
  updateLabResult(labResult: BiologicalSelfLabResult): Promise<void>;
  updateAllergy(allergy: BiologicalSelfAllergy): Promise<void>;
  updateVaccination(vaccination: BiologicalSelfVaccination): Promise<void>;
}

/**
 * FHIR Sync Engine
 */
export class FHIRSyncEngine {
  private client: FHIRClient;
  private config: SyncConfig;
  private storage: SyncStorage;
  private localStore: LocalDataStore;
  private syncState?: FHIRSyncState;
  private status: SyncStatusInfo;
  private statusListeners: Set<(status: SyncStatusInfo) => void> = new Set();
  private backgroundSyncInterval?: number;

  constructor(
    client: FHIRClient,
    storage: SyncStorage,
    localStore: LocalDataStore,
    config: Partial<SyncConfig> = {}
  ) {
    this.client = client;
    this.storage = storage;
    this.localStore = localStore;
    this.config = { ...DEFAULT_SYNC_CONFIG, ...config };
    this.status = {
      status: 'idle',
      statusEs: 'Inactivo',
      isBackgroundSync: false,
    };
  }

  /**
   * Initialize sync engine
   */
  async initialize(): Promise<void> {
    const connection = this.client.getConnection();
    if (!connection) {
      throw new Error('FHIR client not authenticated');
    }

    this.syncState = await this.storage.getSyncState(connection.id);
    
    if (!this.syncState) {
      this.syncState = {
        connectionId: connection.id,
        lastSyncAt: new Date(0),
        resourceTimestamps: {},
        pendingChanges: [],
        conflictResolution: this.config.conflictResolution,
      };
    }

    // Start background sync if enabled
    if (this.config.enableBackgroundSync) {
      this.startBackgroundSync();
    }
  }

  /**
   * Perform a sync operation
   */
  async sync(options: {
    fullRefresh?: boolean;
    background?: boolean;
  } = {}): Promise<SyncResult> {
    const connection = this.client.getConnection();
    if (!connection) {
      throw new Error('Not authenticated');
    }

    // Ensure initialized
    if (!this.syncState) {
      await this.initialize();
    }

    const isFullRefresh =
      options.fullRefresh ||
      !this.syncState?.lastSuccessfulSyncAt ||
      this.shouldDoFullRefresh();

    this.updateStatus({
      status: 'checking',
      statusEs: 'Verificando cambios',
      isBackgroundSync: options.background || false,
    });

    try {
      // Determine since date
      const since = isFullRefresh
        ? undefined
        : this.syncState?.lastSyncAt;

      // Fetch data
      this.updateStatus({
        status: 'fetching',
        statusEs: 'Descargando datos',
      });

      const { data } = await fetchFHIRData(this.client, {
        since,
        resourceTypes: this.config.resourceTypes,
        pageSize: 100,
        includePatient: false,
      });

      // Compare and resolve
      this.updateStatus({
        status: 'comparing',
        statusEs: 'Comparando datos',
      });

      const comparison = await this.compareData(data);

      // Resolve conflicts
      this.updateStatus({
        status: 'resolving',
        statusEs: 'Resolviendo conflictos',
      });

      const resolved = await this.resolveConflicts(comparison.conflicts);

      // Apply changes
      this.updateStatus({
        status: 'applying',
        statusEs: 'Aplicando cambios',
      });

      const applied = await this.applyChanges(comparison.newData, resolved);

      // Update sync state
      const syncedAt = new Date();
      this.syncState = {
        ...this.syncState!,
        lastSyncAt: syncedAt,
        lastSuccessfulSyncAt: syncedAt,
        resourceTimestamps: this.updateResourceTimestamps(
          this.syncState!.resourceTimestamps,
          data
        ),
      };
      await this.storage.saveSyncState(this.syncState);

      // Update status
      this.updateStatus({
        status: 'completed',
        statusEs: 'Sincronización completada',
        lastSyncAt: syncedAt,
        lastSuccessfulSyncAt: syncedAt,
        nextSyncDue: this.calculateNextSyncDue(),
      });

      return {
        success: true,
        connectionId: connection.id,
        syncedAt,
        resourcesSynced: this.countSyncedResources(data),
        conflicts: resolved,
        errors: comparison.errors,
        newData: applied,
        nextSyncDue: this.calculateNextSyncDue(),
      };
    } catch (error) {
      this.updateStatus({
        status: 'failed',
        statusEs: 'Sincronización fallida',
      });

      const err = error as Error;
      return {
        success: false,
        connectionId: connection.id,
        syncedAt: new Date(),
        resourcesSynced: {},
        conflicts: [],
        errors: [
          {
            resourceType: 'Patient',
            error: err.message,
            errorEs: `Error de sincronización: ${err.message}`,
            recoverable: !(error instanceof FHIRAuthError),
          },
        ],
        newData: {
          conditions: [],
          medications: [],
          labResults: [],
          allergies: [],
          vaccinations: [],
        },
      };
    }
  }

  /**
   * Start background sync interval
   */
  startBackgroundSync(): void {
    if (this.backgroundSyncInterval) {
      return;
    }

    const intervalMs = this.config.syncIntervalMinutes * 60 * 1000;
    
    this.backgroundSyncInterval = window.setInterval(() => {
      this.sync({ background: true }).catch(console.error);
    }, intervalMs);
  }

  /**
   * Stop background sync
   */
  stopBackgroundSync(): void {
    if (this.backgroundSyncInterval) {
      clearInterval(this.backgroundSyncInterval);
      this.backgroundSyncInterval = undefined;
    }
  }

  /**
   * Check if sync is needed
   */
  async isSyncNeeded(): Promise<{
    needed: boolean;
    reason?: string;
    reasonEs?: string;
  }> {
    if (!this.syncState?.lastSuccessfulSyncAt) {
      return {
        needed: true,
        reason: 'No previous sync',
        reasonEs: 'No hay sincronización previa',
      };
    }

    const timeSinceLastSync =
      Date.now() - this.syncState.lastSuccessfulSyncAt.getTime();
    const syncIntervalMs = this.config.syncIntervalMinutes * 60 * 1000;

    if (timeSinceLastSync >= syncIntervalMs) {
      return {
        needed: true,
        reason: 'Sync interval elapsed',
        reasonEs: 'Intervalo de sincronización transcurrido',
      };
    }

    return { needed: false };
  }

  /**
   * Get current sync status
   */
  getStatus(): SyncStatusInfo {
    return this.status;
  }

  /**
   * Subscribe to status changes
   */
  onStatusChange(callback: (status: SyncStatusInfo) => void): () => void {
    this.statusListeners.add(callback);
    return () => this.statusListeners.delete(callback);
  }

  /**
   * Force a full refresh on next sync
   */
  async invalidateCache(): Promise<void> {
    if (this.syncState) {
      this.syncState.lastSuccessfulSyncAt = undefined;
      this.syncState.resourceTimestamps = {};
      await this.storage.saveSyncState(this.syncState);
    }
  }

  /**
   * Get pending conflicts for manual resolution
   */
  async getPendingConflicts(): Promise<SyncConflict[]> {
    // This would fetch conflicts from storage
    return [];
  }

  /**
   * Resolve a conflict manually
   */
  async resolveConflict(
    conflictId: string,
    resolution: 'server' | 'client' | 'merged',
    mergedData?: unknown
  ): Promise<void> {
    // Implement manual conflict resolution
  }

  /**
   * Check if we should do a full refresh
   */
  private shouldDoFullRefresh(): boolean {
    if (!this.syncState?.lastSuccessfulSyncAt) {
      return true;
    }

    const maxAgeMs = this.config.maxDataAgeDays * 24 * 60 * 60 * 1000;
    const age = Date.now() - this.syncState.lastSuccessfulSyncAt.getTime();
    
    return age > maxAgeMs;
  }

  /**
   * Compare fetched data with local data
   */
  private async compareData(data: {
    conditions: unknown[];
    medications: unknown[];
    observations: unknown[];
    allergies: unknown[];
    immunizations: unknown[];
  }): Promise<{
    newData: {
      conditions: BiologicalSelfCondition[];
      medications: BiologicalSelfMedication[];
      labResults: BiologicalSelfLabResult[];
      allergies: BiologicalSelfAllergy[];
      vaccinations: BiologicalSelfVaccination[];
    };
    conflicts: SyncConflict[];
    errors: SyncError[];
  }> {
    const newData = {
      conditions: [] as BiologicalSelfCondition[],
      medications: [] as BiologicalSelfMedication[],
      labResults: [] as BiologicalSelfLabResult[],
      allergies: [] as BiologicalSelfAllergy[],
      vaccinations: [] as BiologicalSelfVaccination[],
    };

    const conflicts: SyncConflict[] = [];
    const errors: SyncError[] = [];

    // Get existing local data for comparison
    const existingConditions = await this.localStore.getConditions();
    const existingMeds = await this.localStore.getMedications();
    const existingLabs = await this.localStore.getLabResults();
    const existingAllergies = await this.localStore.getAllergies();
    const existingVaccines = await this.localStore.getVaccinations();

    // Map and compare conditions
    for (const condition of data.conditions) {
      try {
        const mapped = FHIRMappers.condition(condition as never, {
          preferredLanguage: 'es',
        });
        const existing = existingConditions.find(
          (c) => c.fhirReference === mapped.data.fhirReference
        );

        if (!existing) {
          newData.conditions.push(mapped.data);
        } else if (this.hasChanged(existing, mapped.data)) {
          const conflict = this.detectConflict(existing, mapped.data, 'Condition');
          if (conflict) {
            conflicts.push(conflict);
          } else {
            newData.conditions.push(mapped.data);
          }
        }
      } catch (err) {
        errors.push({
          resourceType: 'Condition',
          error: (err as Error).message,
          errorEs: `Error al procesar condición: ${(err as Error).message}`,
          recoverable: true,
        });
      }
    }

    // Map and compare medications
    for (const med of data.medications) {
      try {
        const mapped = FHIRMappers.medicationRequest(med as never, {
          preferredLanguage: 'es',
        });
        const existing = existingMeds.find(
          (m) => m.fhirReference === mapped.data.fhirReference
        );

        if (!existing) {
          newData.medications.push(mapped.data);
        } else if (this.hasChanged(existing, mapped.data)) {
          const conflict = this.detectConflict(existing, mapped.data, 'MedicationRequest');
          if (conflict) {
            conflicts.push(conflict);
          } else {
            newData.medications.push(mapped.data);
          }
        }
      } catch (err) {
        errors.push({
          resourceType: 'MedicationRequest',
          error: (err as Error).message,
          errorEs: `Error al procesar medicamento: ${(err as Error).message}`,
          recoverable: true,
        });
      }
    }

    // Map and compare observations (lab results)
    for (const obs of data.observations) {
      try {
        const mapped = FHIRMappers.observation(obs as never, {
          preferredLanguage: 'es',
        });
        const existing = existingLabs.find(
          (l) => l.fhirReference === mapped.data.fhirReference
        );

        if (!existing) {
          newData.labResults.push(mapped.data);
        } else if (this.hasChanged(existing, mapped.data)) {
          // For lab results, always prefer server data (newer result)
          newData.labResults.push(mapped.data);
        }
      } catch (err) {
        errors.push({
          resourceType: 'Observation',
          error: (err as Error).message,
          errorEs: `Error al procesar resultado de laboratorio: ${(err as Error).message}`,
          recoverable: true,
        });
      }
    }

    // Map and compare allergies
    for (const allergy of data.allergies) {
      try {
        const mapped = FHIRMappers.allergyIntolerance(allergy as never, {
          preferredLanguage: 'es',
        });
        const existing = existingAllergies.find(
          (a) => a.fhirReference === mapped.data.fhirReference
        );

        if (!existing) {
          newData.allergies.push(mapped.data);
        } else if (this.hasChanged(existing, mapped.data)) {
          const conflict = this.detectConflict(existing, mapped.data, 'AllergyIntolerance');
          if (conflict) {
            conflicts.push(conflict);
          } else {
            newData.allergies.push(mapped.data);
          }
        }
      } catch (err) {
        errors.push({
          resourceType: 'AllergyIntolerance',
          error: (err as Error).message,
          errorEs: `Error al procesar alergia: ${(err as Error).message}`,
          recoverable: true,
        });
      }
    }

    // Map and compare immunizations
    for (const imm of data.immunizations) {
      try {
        const mapped = FHIRMappers.immunization(imm as never, {
          preferredLanguage: 'es',
        });
        const existing = existingVaccines.find(
          (v) => v.fhirReference === mapped.data.fhirReference
        );

        if (!existing) {
          newData.vaccinations.push(mapped.data);
        }
        // Immunizations are typically append-only
      } catch (err) {
        errors.push({
          resourceType: 'Immunization',
          error: (err as Error).message,
          errorEs: `Error al procesar vacuna: ${(err as Error).message}`,
          recoverable: true,
        });
      }
    }

    return { newData, conflicts, errors };
  }

  /**
   * Check if data has changed
   */
  private hasChanged(existing: { lastUpdated: Date }, incoming: { lastUpdated: Date }): boolean {
    return incoming.lastUpdated > existing.lastUpdated;
  }

  /**
   * Detect conflict between existing and incoming data
   */
  private detectConflict(
    existing: Record<string, unknown>,
    incoming: Record<string, unknown>,
    resourceType: FHIRResourceType
  ): SyncConflict | undefined {
    // Simple conflict detection - check if both have local modifications
    // This would be more sophisticated in production
    return undefined;
  }

  /**
   * Resolve conflicts based on strategy
   */
  private async resolveConflicts(conflicts: SyncConflict[]): Promise<SyncConflict[]> {
    const resolved: SyncConflict[] = [];

    for (const conflict of conflicts) {
      const resolution = { ...conflict };

      switch (this.config.conflictResolution) {
        case 'server-wins':
          resolution.resolved = true;
          resolution.resolution = 'server';
          break;
        case 'client-wins':
          resolution.resolved = true;
          resolution.resolution = 'client';
          break;
        case 'manual':
          // Keep for manual resolution
          resolution.resolved = false;
          break;
      }

      resolved.push(resolution);
    }

    return resolved;
  }

  /**
   * Apply changes to local store
   */
  private async applyChanges(
    newData: {
      conditions: BiologicalSelfCondition[];
      medications: BiologicalSelfMedication[];
      labResults: BiologicalSelfLabResult[];
      allergies: BiologicalSelfAllergy[];
      vaccinations: BiologicalSelfVaccination[];
    },
    resolvedConflicts: SyncConflict[]
  ): Promise<typeof newData> {
    // Apply conditions
    for (const condition of newData.conditions) {
      const existing = await this.localStore.getConditions();
      const exists = existing.some((c) => c.fhirReference === condition.fhirReference);
      
      if (exists) {
        await this.localStore.updateCondition(condition);
      } else {
        await this.localStore.saveCondition(condition);
      }
    }

    // Apply medications
    for (const medication of newData.medications) {
      const existing = await this.localStore.getMedications();
      const exists = existing.some((m) => m.fhirReference === medication.fhirReference);
      
      if (exists) {
        await this.localStore.updateMedication(medication);
      } else {
        await this.localStore.saveMedication(medication);
      }
    }

    // Apply lab results
    for (const labResult of newData.labResults) {
      const existing = await this.localStore.getLabResults();
      const exists = existing.some((l) => l.fhirReference === labResult.fhirReference);
      
      if (exists) {
        await this.localStore.updateLabResult(labResult);
      } else {
        await this.localStore.saveLabResult(labResult);
      }
    }

    // Apply allergies
    for (const allergy of newData.allergies) {
      const existing = await this.localStore.getAllergies();
      const exists = existing.some((a) => a.fhirReference === allergy.fhirReference);
      
      if (exists) {
        await this.localStore.updateAllergy(allergy);
      } else {
        await this.localStore.saveAllergy(allergy);
      }
    }

    // Apply vaccinations
    for (const vaccination of newData.vaccinations) {
      await this.localStore.saveVaccination(vaccination);
    }

    return newData;
  }

  /**
   * Update resource timestamps
   */
  private updateResourceTimestamps(
    timestamps: Record<FHIRResourceType, Date>,
    data: { [key: string]: unknown[] }
  ): Record<FHIRResourceType, Date> {
    const updated = { ...timestamps };
    const now = new Date();

    for (const [type, resources] of Object.entries(data)) {
      if (resources.length > 0) {
        updated[type as FHIRResourceType] = now;
      }
    }

    return updated;
  }

  /**
   * Count synced resources
   */
  private countSyncedResources(data: {
    conditions: unknown[];
    medications: unknown[];
    observations: unknown[];
    allergies: unknown[];
    immunizations: unknown[];
  }): Record<FHIRResourceType, number> {
    return {
      Condition: data.conditions.length,
      MedicationRequest: data.medications.length,
      Observation: data.observations.length,
      AllergyIntolerance: data.allergies.length,
      Immunization: data.immunizations.length,
      Patient: 0,
      MedicationStatement: 0,
      Procedure: 0,
      DiagnosticReport: 0,
      Encounter: 0,
      DocumentReference: 0,
      CarePlan: 0,
      Goal: 0,
      FamilyMemberHistory: 0,
      RelatedPerson: 0,
      Practitioner: 0,
      Organization: 0,
      Location: 0,
    };
  }

  /**
   * Calculate next sync due time
   */
  private calculateNextSyncDue(): Date {
    return new Date(Date.now() + this.config.syncIntervalMinutes * 60 * 1000);
  }

  /**
   * Update status and notify listeners
   */
  private updateStatus(updates: Partial<SyncStatusInfo>): void {
    this.status = { ...this.status, ...updates };
    this.statusListeners.forEach((listener) => listener(this.status));
  }
}

/**
 * Create sync engine instance
 */
export function createSyncEngine(
  client: FHIRClient,
  storage: SyncStorage,
  localStore: LocalDataStore,
  config?: Partial<SyncConfig>
): FHIRSyncEngine {
  return new FHIRSyncEngine(client, storage, localStore, config);
}
