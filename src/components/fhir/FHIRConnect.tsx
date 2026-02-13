/**
 * FHIRConnect.tsx
 * 
 * EHR Connection Wizard Component
 * Guides users through connecting their health records via FHIR.
 * Spanish-first UI.
 */

import React, { useState, useCallback, useEffect } from 'react';
import type {
  FHIRProvider,
  FHIRConnection,
  FHIRImportProgress,
  FHIRImportResult,
} from '../../core/import/fhir/types';
import {
  FHIRClient,
  getAvailableProviders,
  parseLaunchContext,
  CONNECTION_STEPS,
  getProviderInfo,
  ERROR_MESSAGES,
} from '../../core/import/fhir';
import { FHIRProviderList } from './FHIRProviderList';
import { FHIRSyncStatus } from './FHIRSyncStatus';
import { FHIRImportReview } from './FHIRImportReview';

/**
 * Connection step
 */
type ConnectionStep = 'select' | 'authenticate' | 'authorize' | 'import' | 'review' | 'complete';

/**
 * Connection state
 */
interface ConnectionState {
  step: ConnectionStep;
  selectedProvider?: FHIRProvider;
  client?: FHIRClient;
  connection?: FHIRConnection;
  progress?: FHIRImportProgress;
  result?: FHIRImportResult;
  error?: {
    message: string;
    messageEs: string;
  };
}

/**
 * Props for FHIRConnect
 */
interface FHIRConnectProps {
  /** Called when connection is established */
  onConnected?: (connection: FHIRConnection) => void;
  /** Called when import is complete */
  onComplete?: (result: FHIRImportResult) => void;
  /** Called when user cancels */
  onCancel?: () => void;
  /** Client ID for OAuth */
  clientId: string;
  /** Redirect URI for OAuth callback */
  redirectUri: string;
  /** Initial step to show */
  initialStep?: ConnectionStep;
  /** Whether to skip the review step */
  skipReview?: boolean;
  /** Language preference */
  language?: 'es' | 'en';
  /** Custom styles */
  className?: string;
}

/**
 * FHIR Connection Wizard Component
 */
export const FHIRConnect: React.FC<FHIRConnectProps> = ({
  onConnected,
  onComplete,
  onCancel,
  clientId,
  redirectUri,
  initialStep = 'select',
  skipReview = false,
  language = 'es',
  className = '',
}) => {
  const [state, setState] = useState<ConnectionState>({
    step: initialStep,
  });

  // Handle OAuth callback
  useEffect(() => {
    // Check for OAuth callback in URL
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const state = urlParams.get('state');
    const error = urlParams.get('error');

    if (error) {
      setState((prev) => ({
        ...prev,
        step: 'authenticate',
        error: {
          message: `Authentication error: ${error}`,
          messageEs: `Error de autenticación: ${error}`,
        },
      }));
      return;
    }

    if (code && state) {
      // Retrieve stored verifier
      const verifier = sessionStorage.getItem('fhir_code_verifier');
      if (verifier && state.client) {
        handleTokenExchange(state.client, code, state, verifier);
      }
    }
  }, []);

  /**
   * Handle provider selection
   */
  const handleProviderSelect = useCallback((provider: FHIRProvider) => {
    setState((prev) => ({
      ...prev,
      step: 'authenticate',
      selectedProvider: provider,
      client: new FHIRClient(provider, clientId, redirectUri),
      error: undefined,
    }));
  }, [clientId, redirectUri]);

  /**
   * Handle authentication initiation
   */
  const handleAuthenticate = useCallback(async () => {
    if (!state.client) return;

    try {
      // Check for EHR launch context
      const launchContext = parseLaunchContext(window.location.href);

      const { url } = await state.client.getAuthorizationUrl(launchContext);
      
      // Redirect to authorization URL
      window.location.href = url;
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: {
          message: (error as Error).message,
          messageEs: ERROR_MESSAGES.authFailed.es,
        },
      }));
    }
  }, [state.client]);

  /**
   * Handle token exchange
   */
  const handleTokenExchange = async (
    client: FHIRClient,
    code: string,
    oauthState: string,
    verifier: string
  ) => {
    try {
      const connection = await client.exchangeCodeForToken(code, oauthState, verifier);
      
      setState((prev) => ({
        ...prev,
        step: skipReview ? 'import' : 'review',
        connection,
      }));

      onConnected?.(connection);
    } catch (error) {
      setState((prev) => ({
        ...prev,
        step: 'authenticate',
        error: {
          message: (error as Error).message,
          messageEs: ERROR_MESSAGES.authFailed.es,
        },
      }));
    }
  };

  /**
   * Handle import start
   */
  const handleStartImport = useCallback(() => {
    setState((prev) => ({
      ...prev,
      step: 'import',
    }));
  }, []);

  /**
   * Handle import progress
   */
  const handleImportProgress = useCallback((progress: FHIRImportProgress) => {
    setState((prev) => ({
      ...prev,
      progress,
    }));
  }, []);

  /**
   * Handle import complete
   */
  const handleImportComplete = useCallback((result: FHIRImportResult) => {
    setState((prev) => ({
      ...prev,
      step: 'complete',
      result,
    }));

    onComplete?.(result);
  }, [onComplete]);

  /**
   * Handle back navigation
   */
  const handleBack = useCallback(() => {
    setState((prev) => {
      const stepOrder: ConnectionStep[] = ['select', 'authenticate', 'authorize', 'import', 'review', 'complete'];
      const currentIndex = stepOrder.indexOf(prev.step);
      
      if (currentIndex > 0) {
        return { ...prev, step: stepOrder[currentIndex - 1], error: undefined };
      }
      
      return prev;
    });
  }, []);

  /**
   * Handle cancel
   */
  const handleCancel = useCallback(() => {
    onCancel?.();
  }, [onCancel]);

  /**
   * Get step index for progress indicator
   */
  const getStepIndex = (step: ConnectionStep): number => {
    const steps: ConnectionStep[] = ['select', 'authenticate', 'authorize', 'import', 'review', 'complete'];
    return steps.indexOf(step);
  };

  /**
   * Render step indicator
   */
  const renderStepIndicator = () => {
    const steps = skipReview
      ? ['select', 'authenticate', 'import', 'complete']
      : ['select', 'authenticate', 'review', 'import', 'complete'];
    
    const currentIndex = getStepIndex(state.step);

    return (
      <div className="fhir-connect__steps">
        {steps.map((stepKey, index) => {
          const stepInfo = CONNECTION_STEPS.find((s) => s.id === stepKey) || CONNECTION_STEPS[index];
          const isActive = getStepIndex(state.step) >= getStepIndex(stepKey as ConnectionStep);
          const isCurrent = stepKey === state.step;

          return (
            <div
              key={stepKey}
              className={`fhir-connect__step ${isActive ? 'fhir-connect__step--active' : ''} ${
                isCurrent ? 'fhir-connect__step--current' : ''
              }`}
            >
              <div className="fhir-connect__step-number">{index + 1}</div>
              <div className="fhir-connect__step-label">
                {language === 'es' ? stepInfo.labelEs : stepInfo.labelEn}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  /**
   * Render current step content
   */
  const renderStepContent = () => {
    switch (state.step) {
      case 'select':
        return (
          <div className="fhir-connect__step-content">
            <h2>
              {language === 'es'
                ? 'Conecta tus Registros de Salud'
                : 'Connect Your Health Records'}
            </h2>
            <p className="fhir-connect__description">
              {language === 'es'
                ? 'Selecciona tu sistema de registros médicos electrónicos para importar tus datos de salud de forma segura.'
                : 'Select your electronic health records system to securely import your health data.'}
            </p>
            <FHIRProviderList
              onSelect={handleProviderSelect}
              selectedProvider={state.selectedProvider}
              language={language}
            />
          </div>
        );

      case 'authenticate':
        const providerInfo = state.selectedProvider
          ? getProviderInfo(state.selectedProvider)
          : null;

        return (
          <div className="fhir-connect__step-content">
            <h2>
              {language === 'es' ? 'Iniciar Sesión Segura' : 'Secure Sign In'}
            </h2>
            <p className="fhir-connect__description">
              {language === 'es'
                ? `Vamos a conectar con ${providerInfo?.nameEs || 'tu proveedor de salud'}. Serás redirigido a su sitio web seguro para iniciar sesión.`
                : `We'll connect with ${providerInfo?.name || 'your health provider'}. You'll be redirected to their secure website to sign in.`}
            </p>

            {state.error && (
              <div className="fhir-connect__error">
                <span className="fhir-connect__error-icon">⚠️</span>
                <p>{language === 'es' ? state.error.messageEs : state.error.message}</p>
              </div>
            )}

            <div className="fhir-connect__provider-preview">
              {providerInfo?.logo && (
                <img
                  src={providerInfo.logo}
                  alt={language === 'es' ? providerInfo.nameEs : providerInfo.name}
                  className="fhir-connect__provider-logo"
                />
              )}
              <h3>{language === 'es' ? providerInfo?.nameEs : providerInfo?.name}</h3>
              <p>{language === 'es' ? providerInfo?.description : providerInfo?.descriptionEn}</p>
            </div>

            <div className="fhir-connect__privacy-notice">
              <span className="fhir-connect__privacy-icon">🔒</span>
              <p>
                {language === 'es'
                  ? 'Tus datos están protegidos con encriptación de nivel bancario. Solo tú decides qué información compartir.'
                  : 'Your data is protected with bank-level encryption. Only you decide what information to share.'}
              </p>
            </div>

            <div className="fhir-connect__actions">
              <button
                className="fhir-connect__button fhir-connect__button--secondary"
                onClick={handleBack}
              >
                {language === 'es' ? 'Atrás' : 'Back'}
              </button>
              <button
                className="fhir-connect__button fhir-connect__button--primary"
                onClick={handleAuthenticate}
              >
                {language === 'es' ? 'Continuar a Iniciar Sesión' : 'Continue to Sign In'}
              </button>
            </div>
          </div>
        );

      case 'authorize':
        return (
          <div className="fhir-connect__step-content">
            <h2>
              {language === 'es' ? 'Autorizar Acceso' : 'Authorize Access'}
            </h2>
            <p className="fhir-connect__description">
              {language === 'es'
                ? 'Por favor autoriza el acceso a tus registros de salud en la ventana que se abrió.'
                : 'Please authorize access to your health records in the opened window.'}
            </p>
          </div>
        );

      case 'import':
        return (
          <div className="fhir-connect__step-content">
            <h2>
              {language === 'es' ? 'Importando Datos' : 'Importing Data'}
            </h2>
            <FHIRSyncStatus
              connection={state.connection!}
              progress={state.progress}
              language={language}
              onComplete={handleImportComplete}
            />
          </div>
        );

      case 'review':
        return (
          <div className="fhir-connect__step-content">
            <h2>
              {language === 'es' ? 'Revisar Datos' : 'Review Data'}
            </h2>
            <FHIRImportReview
              connection={state.connection!}
              onConfirm={handleStartImport}
              onBack={handleBack}
              language={language}
            />
          </div>
        );

      case 'complete':
        return (
          <div className="fhir-connect__step-content fhir-connect__step-content--complete">
            <div className="fhir-connect__success-icon">✅</div>
            <h2>
              {language === 'es' ? '¡Conexión Exitosa!' : 'Connection Successful!'}
            </h2>
            <p className="fhir-connect__description">
              {language === 'es'
                ? `Hemos importado tus registros de salud exitosamente. Los datos están ahora disponibles en tu Perfil de Salud.`
                : `We've successfully imported your health records. The data is now available in your Health Profile.`}
            </p>

            {state.result && (
              <div className="fhir-connect__import-summary">
                <h3>{language === 'es' ? 'Resumen de Importación' : 'Import Summary'}</h3>
                <ul>
                  {Object.entries(state.result.importedCounts).map(([type, count]) =>
                    count > 0 ? (
                      <li key={type}>
                        <strong>{count}</strong>{' '}
                        {language === 'es'
                          ? getResourceTypeLabelEs(type)
                          : getResourceTypeLabelEn(type)}
                      </li>
                    ) : null
                  )}
                </ul>

                {state.result.errors.length > 0 && (
                  <div className="fhir-connect__warnings">
                    <p>
                      {language === 'es'
                        ? `Nota: ${state.result.errors.length} elementos no pudieron importarse.`
                        : `Note: ${state.result.errors.length} items could not be imported.`}
                    </p>
                  </div>
                )}
              </div>
            )}

            <div className="fhir-connect__actions">
              <button
                className="fhir-connect__button fhir-connect__button--primary"
                onClick={handleCancel}
              >
                {language === 'es' ? 'Ver mi Perfil de Salud' : 'View My Health Profile'}
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`fhir-connect ${className}`}>
      <div className="fhir-connect__header">
        <h1>
          {language === 'es' ? 'Conectar Registros de Salud' : 'Connect Health Records'}
        </h1>
        <button
          className="fhir-connect__close"
          onClick={handleCancel}
          aria-label={language === 'es' ? 'Cerrar' : 'Close'}
        >
          ×
        </button>
      </div>

      {renderStepIndicator()}

      <div className="fhir-connect__content">
        {renderStepContent()}
      </div>
    </div>
  );
};

/**
 * Helper to get resource type labels
 */
function getResourceTypeLabelEs(type: string): string {
  const labels: Record<string, string> = {
    Patient: 'pacientes',
    Condition: 'condiciones de salud',
    MedicationRequest: 'medicamentos',
    Observation: 'resultados de laboratorio',
    AllergyIntolerance: 'alergias',
    Immunization: 'vacunas',
    Procedure: 'procedimientos',
    DiagnosticReport: 'reportes diagnósticos',
  };
  return labels[type] || type;
}

function getResourceTypeLabelEn(type: string): string {
  const labels: Record<string, string> = {
    Patient: 'patients',
    Condition: 'health conditions',
    MedicationRequest: 'medications',
    Observation: 'lab results',
    AllergyIntolerance: 'allergies',
    Immunization: 'immunizations',
    Procedure: 'procedures',
    DiagnosticReport: 'diagnostic reports',
  };
  return labels[type] || type;
}

export default FHIRConnect;
