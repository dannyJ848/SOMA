/**
 * FHIRSyncStatus.tsx
 * 
 * Component to display FHIR synchronization status and progress.
 * Shows real-time import progress, errors, and sync state.
 * Spanish-first UI.
 */

import React, { useEffect, useState, useCallback } from 'react';
import type {
  FHIRConnection,
  FHIRImportProgress,
  FHIRImportResult,
  FHIRImportError,
  FHIRResourceType,
} from '../../core/import/fhir/types';
import {
  SYNC_STATUS_LABELS,
  getResourceTypeLabel,
} from '../../core/import/fhir';
import { FHIRFetcher, fetchFHIRData } from '../../core/import/fhir/fetcher';
import { FHIRMappers } from '../../core/import/fhir/resource-mapper';

/**
 * Props for FHIRSyncStatus
 */
interface FHIRSyncStatusProps {
  /** FHIR connection */
  connection: FHIRConnection;
  /** External progress (if managed externally) */
  progress?: FHIRImportProgress;
  /** Language preference */
  language?: 'es' | 'en';
  /** Called when import completes */
  onComplete?: (result: FHIRImportResult) => void;
  /** Called on error */
  onError?: (error: Error) => void;
  /** Auto-start import on mount */
  autoStart?: boolean;
  /** Show detailed progress */
  showDetails?: boolean;
  /** Custom className */
  className?: string;
  /** Compact mode */
  compact?: boolean;
}

/**
 * FHIR Sync Status Component
 */
export const FHIRSyncStatus: React.FC<FHIRSyncStatusProps> = ({
  connection,
  progress: externalProgress,
  language = 'es',
  onComplete,
  onError,
  autoStart = true,
  showDetails = true,
  className = '',
  compact = false,
}) => {
  const [progress, setProgress] = useState<FHIRImportProgress | undefined>(
    externalProgress
  );
  const [isComplete, setIsComplete] = useState(false);
  const [expandedErrors, setExpandedErrors] = useState(false);

  // Sync with external progress
  useEffect(() => {
    if (externalProgress) {
      setProgress(externalProgress);
    }
  }, [externalProgress]);

  // Start import if autoStart is enabled
  useEffect(() => {
    if (autoStart && !isComplete) {
      startImport();
    }
  }, [autoStart, connection]);

  /**
   * Start the import process
   */
  const startImport = useCallback(async () => {
    try {
      // Import FHIRClient dynamically to avoid circular dependencies
      const { FHIRClient } = await import('../../core/import/fhir/fhir-client');
      
      // Recreate client from connection
      const client = new FHIRClient(
        {
          id: connection.provider,
          name: connection.providerName,
          nameEs: connection.providerName,
          baseUrl: connection.baseUrl,
          authorizeUrl: '',
          tokenUrl: '',
          scopes: connection.scope.split(' '),
          supportedResources: [],
          requiresLaunchContext: false,
          patientFacing: true,
        },
        'client-id', // Will use existing token
        ''
      );

      // Set connection on client (internal method would need to be exposed)
      // For now, we'll use the fetcher directly

      const startTime = Date.now();
      const errors: FHIRImportError[] = [];
      const importedCounts: Record<string, number> = {};

      // Fetch data with progress tracking
      const { data, progress: fetchProgress } = await fetchFHIRData(
        client,
        {
          pageSize: 100,
          includePatient: true,
        },
        (p) => {
          setProgress(p);
        }
      );

      // Map and count resources
      const mappedConditions = data.conditions
        .map((c) => {
          try {
            return FHIRMappers.condition(c).data;
          } catch (e) {
            errors.push({
              resourceType: 'Condition',
              error: (e as Error).message,
              errorEs: `Error en condición: ${(e as Error).message}`,
              timestamp: new Date(),
              recoverable: true,
            });
            return null;
          }
        })
        .filter(Boolean);
      importedCounts['Condition'] = mappedConditions.length;

      const mappedMedications = data.medications
        .map((m) => {
          try {
            return FHIRMappers.medicationRequest(m).data;
          } catch (e) {
            errors.push({
              resourceType: 'MedicationRequest',
              error: (e as Error).message,
              errorEs: `Error en medicamento: ${(e as Error).message}`,
              timestamp: new Date(),
              recoverable: true,
            });
            return null;
          }
        })
        .filter(Boolean);
      importedCounts['MedicationRequest'] = mappedMedications.length;

      const mappedObservations = data.observations
        .map((o) => {
          try {
            return FHIRMappers.observation(o).data;
          } catch (e) {
            errors.push({
              resourceType: 'Observation',
              error: (e as Error).message,
              errorEs: `Error en resultado: ${(e as Error).message}`,
              timestamp: new Date(),
              recoverable: true,
            });
            return null;
          }
        })
        .filter(Boolean);
      importedCounts['Observation'] = mappedObservations.length;

      const mappedAllergies = data.allergies
        .map((a) => {
          try {
            return FHIRMappers.allergyIntolerance(a).data;
          } catch (e) {
            errors.push({
              resourceType: 'AllergyIntolerance',
              error: (e as Error).message,
              errorEs: `Error en alergia: ${(e as Error).message}`,
              timestamp: new Date(),
              recoverable: true,
            });
            return null;
          }
        })
        .filter(Boolean);
      importedCounts['AllergyIntolerance'] = mappedAllergies.length;

      const mappedImmunizations = data.immunizations
        .map((i) => {
          try {
            return FHIRMappers.immunization(i).data;
          } catch (e) {
            errors.push({
              resourceType: 'Immunization',
              error: (e as Error).message,
              errorEs: `Error en vacuna: ${(e as Error).message}`,
              timestamp: new Date(),
              recoverable: true,
            });
            return null;
          }
        })
        .filter(Boolean);
      importedCounts['Immunization'] = mappedImmunizations.length;

      const result: FHIRImportResult = {
        connectionId: connection.id,
        success: errors.length === 0 || Object.values(importedCounts).some((c) => c > 0),
        importedCounts,
        errors,
        warnings: [],
        startedAt: new Date(startTime),
        completedAt: new Date(),
        durationMs: Date.now() - startTime,
      };

      setIsComplete(true);
      onComplete?.(result);
    } catch (error) {
      onError?.(error as Error);
    }
  }, [connection, onComplete, onError]);

  /**
   * Calculate progress percentage
   */
  const getProgressPercentage = (): number => {
    if (!progress) return 0;
    if (progress.totalResources === 0) return 0;
    return Math.round(
      (progress.processedResources / progress.totalResources) * 100
    );
  };

  /**
   * Get status label
   */
  const getStatusLabel = (): { title: string; description: string } => {
    if (!progress) {
      return {
        title: language === 'es' ? 'Preparando...' : 'Preparing...',
        description: language === 'es' ? 'Iniciando importación' : 'Starting import',
      };
    }

    const statusKey = progress.status;
    const labels = SYNC_STATUS_LABELS[statusKey];

    if (labels) {
      return {
        title: language === 'es' ? labels.es : labels.en,
        description: language === 'es' ? labels.description : labels.descriptionEn,
      };
    }

    return {
      title: progress.stageEs || progress.stage,
      description: '',
    };
  };

  /**
   * Format time estimate
   */
  const formatTimeEstimate = (): string => {
    if (!progress?.estimatedCompletion) return '';

    const minutes = Math.ceil(
      (progress.estimatedCompletion.getTime() - Date.now()) / 60000
    );

    if (minutes < 1) {
      return language === 'es' ? 'menos de 1 minuto' : 'less than 1 minute';
    } else if (minutes === 1) {
      return language === 'es' ? '1 minuto' : '1 minute';
    } else {
      return language === 'es' ? `${minutes} minutos` : `${minutes} minutes`;
    }
  };

  /**
   * Toggle error expansion
   */
  const toggleErrors = () => {
    setExpandedErrors(!expandedErrors);
  };

  const status = getStatusLabel();
  const percentage = getProgressPercentage();

  if (compact) {
    return (
      <div className={`fhir-sync-status fhir-sync-status--compact ${className}`}>
        <div className="fhir-sync-status__compact-indicator">
          {isComplete ? (
            <span className="fhir-sync-status__success-icon">✓</span>
          ) : (
            <div
              className="fhir-sync-status__spinner"
              role="status"
              aria-label={language === 'es' ? 'Sincronizando...' : 'Syncing...'}
            />
          )}
          <span className="fhir-sync-status__compact-text">{status.title}</span>
        </div>
        {!isComplete && (
          <div className="fhir-sync-status__compact-bar">
            <div
              className="fhir-sync-status__compact-progress"
              style={{ width: `${percentage}%` }}
            />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`fhir-sync-status ${className}`}>
      <div className="fhir-sync-status__header">
        <div className="fhir-sync-status__status-icon">
          {isComplete ? (
            <div className="fhir-sync-status__success">✅</div>
          ) : progress?.status === 'error' ? (
            <div className="fhir-sync-status__error-icon">⚠️</div>
          ) : (
            <div
              className="fhir-sync-status__spinner"
              role="status"
              aria-label={language === 'es' ? 'Sincronizando...' : 'Syncing...'}
            />
          )}
        </div>

        <div className="fhir-sync-status__status-text">
          <h3>{status.title}</h3>
          <p>{status.description}</p>
        </div>

        <div className="fhir-sync-status__percentage">
          {percentage}%
        </div>
      </div>

      <div className="fhir-sync-status__progress-bar">
        <div
          className="fhir-sync-status__progress-fill"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>

      {showDetails && progress && (
        <div className="fhir-sync-status__details">
          {progress.currentResource && (
            <div className="fhir-sync-status__current-resource">
              <span className="fhir-sync-status__resource-label">
                {language === 'es' ? 'Procesando:' : 'Processing:'}
              </span>
              <span className="fhir-sync-status__resource-name">
                {getResourceTypeLabel(progress.currentResource, language)}
              </span>
            </div>
          )}

          <div className="fhir-sync-status__stats">
            <span>
              {language === 'es'
                ? `${progress.processedResources} de ${progress.totalResources} recursos`
                : `${progress.processedResources} of ${progress.totalResources} resources`}
            </span>
            {progress.estimatedCompletion && !isComplete && (
              <span className="fhir-sync-status__estimate">
                {language === 'es' ? '~' : '~'}
                {formatTimeEstimate()}
                {language === 'es' ? ' restantes' : ' remaining'}
              </span>
            )}
          </div>

          {progress.errors.length > 0 && (
            <div className="fhir-sync-status__errors">
              <button
                className="fhir-sync-status__errors-toggle"
                onClick={toggleErrors}
              >
                {language === 'es'
                  ? `${progress.errors.length} error${
                      progress.errors.length > 1 ? 'es' : ''
                    }`
                  : `${progress.errors.length} error${
                      progress.errors.length > 1 ? 's' : ''
                    }`}
                <span>{expandedErrors ? '▲' : '▼'}</span>
              </button>

              {expandedErrors && (
                <ul className="fhir-sync-status__errors-list">
                  {progress.errors.slice(0, 5).map((error, index) => (
                    <li key={index} className="fhir-sync-status__error-item">
                      <span className="fhir-sync-status__error-type">
                        {getResourceTypeLabel(error.resourceType, language)}
                      </span>
                      <span className="fhir-sync-status__error-message">
                        {language === 'es' ? error.errorEs : error.error}
                      </span>
                    </li>
                  ))}
                  {progress.errors.length > 5 && (
                    <li className="fhir-sync-status__error-more">
                      {language === 'es'
                        ? `+${progress.errors.length - 5} más...`
                        : `+${progress.errors.length - 5} more...`}
                    </li>
                  )}
                </ul>
              )}
            </div>
          )}
        </div>
      )}

      {isComplete && (
        <div className="fhir-sync-status__complete-message">
          <p>
            {language === 'es'
              ? '¡Sincronización completada exitosamente!'
              : 'Sync completed successfully!'}
          </p>
        </div>
      )}
    </div>
  );
};

/**
 * Mini sync indicator for headers/status bars
 */
interface FHIRSyncIndicatorProps {
  lastSyncAt?: Date;
  isSyncing?: boolean;
  language?: 'es' | 'en';
  onClick?: () => void;
  className?: string;
}

export const FHIRSyncIndicator: React.FC<FHIRSyncIndicatorProps> = ({
  lastSyncAt,
  isSyncing = false,
  language = 'es',
  onClick,
  className = '',
}) => {
  const formatLastSync = (): string => {
    if (!lastSyncAt) {
      return language === 'es' ? 'Nunca sincronizado' : 'Never synced';
    }

    const now = new Date();
    const diff = now.getTime() - lastSyncAt.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) {
      return language === 'es' ? 'Hace un momento' : 'Just now';
    } else if (minutes < 60) {
      return language === 'es'
        ? `Hace ${minutes} min`
        : `${minutes}m ago`;
    } else if (hours < 24) {
      return language === 'es'
        ? `Hace ${hours} h`
        : `${hours}h ago`;
    } else {
      return language === 'es'
        ? `Hace ${days} d`
        : `${days}d ago`;
    }
  };

  return (
    <button
      className={`fhir-sync-indicator ${isSyncing ? 'fhir-sync-indicator--syncing' : ''} ${className}`}
      onClick={onClick}
      disabled={isSyncing}
    >
      {isSyncing ? (
        <>
          <span className="fhir-sync-indicator__spinner">⏳</span>
          <span className="fhir-sync-indicator__text">
            {language === 'es' ? 'Sincronizando...' : 'Syncing...'}
          </span>
        </>
      ) : (
        <>
          <span className="fhir-sync-indicator__icon">🔄</span>
          <span className="fhir-sync-indicator__text">
            {formatLastSync()}
          </span>
        </>
      )}
    </button>
  );
};

export default FHIRSyncStatus;
