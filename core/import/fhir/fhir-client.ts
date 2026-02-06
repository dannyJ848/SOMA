/**
 * FHIR Client - SMART on FHIR Authentication
 * 
 * Handles OAuth2 PKCE authentication flow for major EHR systems.
 * Supports Epic, Cerner, VA Health, and Medicare Blue Button.
 * 
 * @see http://www.hl7.org/fhir/smart-app-launch/
 */

import {
  type FHIRProvider,
  type FHIRProviderConfig,
  type FHIRConnection,
  type FHIRTokenResponse,
  type SMARTLaunchContext,
  type FHIRServerMetadata,
  type FHIRBundle,
} from './types.js';

/**
 * PKCE Code Verifier length (must be 43-128 chars)
 */
const PKCE_CODE_VERIFIER_LENGTH = 128;

/**
 * Default provider configurations
 */
export const DEFAULT_PROVIDERS: Record<FHIRProvider, FHIRProviderConfig> = {
  epic: {
    id: 'epic',
    name: 'Epic MyChart',
    nameEs: 'Epic MyChart',
    baseUrl: 'https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4',
    authorizeUrl: 'https://fhir.epic.com/interconnect-fhir-oauth/oauth2/authorize',
    tokenUrl: 'https://fhir.epic.com/interconnect-fhir-oauth/oauth2/token',
    scopes: [
      'openid',
      'fhirUser',
      'launch/patient',
      'patient/Patient.read',
      'patient/Condition.read',
      'patient/MedicationRequest.read',
      'patient/Observation.read',
      'patient/AllergyIntolerance.read',
      'patient/Immunization.read',
      'patient/Procedure.read',
      'patient/DiagnosticReport.read',
      'patient/Encounter.read',
      'patient/DocumentReference.read',
    ],
    supportedResources: [
      'Patient',
      'Condition',
      'MedicationRequest',
      'Observation',
      'AllergyIntolerance',
      'Immunization',
      'Procedure',
      'DiagnosticReport',
      'Encounter',
      'DocumentReference',
    ],
    requiresLaunchContext: true,
    patientFacing: true,
  },
  cerner: {
    id: 'cerner',
    name: 'Cerner Health',
    nameEs: 'Cerner Salud',
    baseUrl: 'https://fhir-ehr.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d',
    authorizeUrl: 'https://authorization.cerner.com/tenants/ec2458f2-1e24-41c8-b71b-0e701af7583d/protocols/oauth2/profiles/smart-v1/personas/provider/authorize',
    tokenUrl: 'https://authorization.cerner.com/tenants/ec2458f2-1e24-41c8-b71b-0e701af7583d/protocols/oauth2/profiles/smart-v1/token',
    scopes: [
      'openid',
      'profile',
      'launch',
      'online_access',
      'user/Patient.read',
      'user/Condition.read',
      'user/MedicationRequest.read',
      'user/Observation.read',
      'user/AllergyIntolerance.read',
      'user/Immunization.read',
      'user/Procedure.read',
      'user/DiagnosticReport.read',
    ],
    supportedResources: [
      'Patient',
      'Condition',
      'MedicationRequest',
      'Observation',
      'AllergyIntolerance',
      'Immunization',
      'Procedure',
      'DiagnosticReport',
    ],
    requiresLaunchContext: true,
    patientFacing: true,
  },
  'va-health': {
    id: 'va-health',
    name: 'VA Health',
    nameEs: 'Salud VA',
    baseUrl: 'https://api.va.gov/services/fhir/v0/r4',
    authorizeUrl: 'https://api.va.gov/oauth2/authorization',
    tokenUrl: 'https://api.va.gov/oauth2/token',
    scopes: [
      'openid',
      'profile',
      'launch/patient',
      'patient/Patient.read',
      'patient/Condition.read',
      'patient/MedicationRequest.read',
      'patient/Observation.read',
      'patient/AllergyIntolerance.read',
      'patient/Immunization.read',
      'patient/Procedure.read',
      'patient/DiagnosticReport.read',
      'patient/DocumentReference.read',
    ],
    supportedResources: [
      'Patient',
      'Condition',
      'MedicationRequest',
      'Observation',
      'AllergyIntolerance',
      'Immunization',
      'Procedure',
      'DiagnosticReport',
      'DocumentReference',
    ],
    requiresLaunchContext: false,
    patientFacing: true,
  },
  'medicare-blue-button': {
    id: 'medicare-blue-button',
    name: 'Medicare Blue Button',
    nameEs: 'Medicare Blue Button',
    baseUrl: 'https://api.bluebutton.cms.gov/v2/fhir',
    authorizeUrl: 'https://api.bluebutton.cms.gov/v2/o/authorize/',
    tokenUrl: 'https://api.bluebutton.cms.gov/v2/o/token/',
    scopes: [
      'profile',
      'patient/Patient.read',
      'patient/Coverage.read',
      'patient/ExplanationOfBenefit.read',
    ],
    supportedResources: [
      'Patient',
      'Coverage',
      'ExplanationOfBenefit',
    ],
    requiresLaunchContext: false,
    patientFacing: true,
  },
  va: {
    id: 'va',
    name: 'VA Health (Legacy)',
    nameEs: 'Salud VA (Legado)',
    baseUrl: 'https://api.va.gov/services/fhir/v0/r4',
    authorizeUrl: 'https://api.va.gov/oauth2/authorization',
    tokenUrl: 'https://api.va.gov/oauth2/token',
    scopes: [
      'openid',
      'profile',
      'launch/patient',
      'patient/Patient.read',
      'patient/Condition.read',
      'patient/MedicationRequest.read',
      'patient/Observation.read',
    ],
    supportedResources: [
      'Patient',
      'Condition',
      'MedicationRequest',
      'Observation',
    ],
    requiresLaunchContext: false,
    patientFacing: true,
  },
  allscripts: {
    id: 'allscripts',
    name: 'Allscripts',
    nameEs: 'Allscripts',
    baseUrl: 'https://fhir.allscripts.com/fhir/R4',
    authorizeUrl: 'https://fhir.allscripts.com/authorization/connect/authorize',
    tokenUrl: 'https://fhir.allscripts.com/authorization/connect/token',
    scopes: [
      'openid',
      'profile',
      'launch/patient',
      'patient/Patient.read',
      'patient/Condition.read',
      'patient/MedicationRequest.read',
      'patient/Observation.read',
    ],
    supportedResources: [
      'Patient',
      'Condition',
      'MedicationRequest',
      'Observation',
      'AllergyIntolerance',
      'Immunization',
    ],
    requiresLaunchContext: true,
    patientFacing: true,
  },
  athenahealth: {
    id: 'athenahealth',
    name: 'athenahealth',
    nameEs: 'athenahealth',
    baseUrl: 'https://fhir.athena.io/fhir/R4',
    authorizeUrl: 'https://api.athenahealth.com/oauth2/v1/authorize',
    tokenUrl: 'https://api.athenahealth.com/oauth2/v1/token',
    scopes: [
      'openid',
      'profile',
      'launch/patient',
      'patient/Patient.read',
      'patient/Condition.read',
      'patient/MedicationRequest.read',
      'patient/Observation.read',
    ],
    supportedResources: [
      'Patient',
      'Condition',
      'MedicationRequest',
      'Observation',
      'AllergyIntolerance',
    ],
    requiresLaunchContext: true,
    patientFacing: true,
  },
  meditech: {
    id: 'meditech',
    name: 'MEDITECH',
    nameEs: 'MEDITECH',
    baseUrl: 'https://fhir.meditech.com/fhir/R4',
    authorizeUrl: 'https://fhir.meditech.com/oauth2/authorize',
    tokenUrl: 'https://fhir.meditech.com/oauth2/token',
    scopes: [
      'openid',
      'profile',
      'launch/patient',
      'patient/Patient.read',
      'patient/Condition.read',
      'patient/MedicationRequest.read',
      'patient/Observation.read',
    ],
    supportedResources: [
      'Patient',
      'Condition',
      'MedicationRequest',
      'Observation',
    ],
    requiresLaunchContext: true,
    patientFacing: true,
  },
  custom: {
    id: 'custom',
    name: 'Custom FHIR Server',
    nameEs: 'Servidor FHIR Personalizado',
    baseUrl: '',
    authorizeUrl: '',
    tokenUrl: '',
    scopes: [
      'openid',
      'profile',
      'launch/patient',
      'patient/Patient.read',
      'patient/Condition.read',
      'patient/MedicationRequest.read',
      'patient/Observation.read',
      'patient/AllergyIntolerance.read',
      'patient/Immunization.read',
    ],
    supportedResources: [
      'Patient',
      'Condition',
      'MedicationRequest',
      'Observation',
      'AllergyIntolerance',
      'Immunization',
    ],
    requiresLaunchContext: false,
    patientFacing: true,
  },
};

/**
 * Generate a cryptographically secure PKCE code verifier
 */
function generateCodeVerifier(): string {
  const array = new Uint8Array(PKCE_CODE_VERIFIER_LENGTH);
  crypto.getRandomValues(array);
  return Array.from(array, (byte) => String.fromCharCode((byte % 26) + 97)).join('');
}

/**
 * Generate PKCE code challenge from verifier (S256 method)
 */
async function generateCodeChallenge(verifier: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(verifier);
  const digest = await crypto.subtle.digest('SHA-256', data);
  const array = Array.from(new Uint8Array(digest));
  return btoa(array.map((b) => String.fromCharCode(b)).join(''))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

/**
 * Generate a random state parameter for OAuth security
 */
function generateState(): string {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, (byte) => byte.toString(16).padStart(2, '0')).join('');
}

/**
 * FHIR Client for SMART on FHIR authentication
 */
export class FHIRClient {
  private config: FHIRProviderConfig;
  private redirectUri: string;
  private clientId: string;
  private connection?: FHIRConnection;

  constructor(
    provider: FHIRProvider | FHIRProviderConfig,
    clientId: string,
    redirectUri: string
  ) {
    this.clientId = clientId;
    this.redirectUri = redirectUri;

    if (typeof provider === 'string') {
      this.config = DEFAULT_PROVIDERS[provider];
    } else {
      this.config = provider;
    }
  }

  /**
   * Get provider configuration
   */
  getProviderConfig(): FHIRProviderConfig {
    return this.config;
  }

  /**
   * Get the current connection (if authenticated)
   */
  getConnection(): FHIRConnection | undefined {
    return this.connection;
  }

  /**
   * Check if currently authenticated
   */
  isAuthenticated(): boolean {
    if (!this.connection) return false;
    return this.connection.isActive && new Date() < this.connection.expiresAt;
  }

  /**
   * Get the authentication URL for OAuth2 flow
   */
  async getAuthorizationUrl(launchContext?: SMARTLaunchContext): Promise<{
    url: string;
    state: string;
    codeVerifier: string;
  }> {
    const state = generateState();
    const codeVerifier = generateCodeVerifier();
    const codeChallenge = await generateCodeChallenge(codeVerifier);

    const params = new URLSearchParams({
      response_type: 'code',
      client_id: this.clientId,
      redirect_uri: this.redirectUri,
      scope: this.config.scopes.join(' '),
      state: state,
      code_challenge: codeChallenge,
      code_challenge_method: 'S256',
      aud: this.config.baseUrl,
    });

    // Add launch context if required
    if (this.config.requiresLaunchContext) {
      if (launchContext?.launch) {
        params.set('launch', launchContext.launch);
      }
      params.set('iss', launchContext?.iss || this.config.baseUrl);
    }

    const url = `${this.config.authorizeUrl}?${params.toString()}`;

    // Store state and verifier for later verification
    this.storeOAuthState(state, codeVerifier);

    return { url, state, codeVerifier };
  }

  /**
   * Exchange authorization code for access token
   */
  async exchangeCodeForToken(
    code: string,
    state: string,
    storedVerifier: string
  ): Promise<FHIRConnection> {
    // Verify state matches
    const storedState = this.retrieveOAuthState();
    if (storedState !== state) {
      throw new FHIRAuthError(
        'Invalid state parameter',
        'Parámetro de estado inválido - posible ataque CSRF'
      );
    }

    const body = new URLSearchParams({
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: this.redirectUri,
      client_id: this.clientId,
      code_verifier: storedVerifier,
    });

    const response = await fetch(this.config.tokenUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
      },
      body: body.toString(),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new FHIRAuthError(
        `Token exchange failed: ${error}`,
        'Error al intercambiar código por token de acceso'
      );
    }

    const tokenData: FHIRTokenResponse = await response.json();

    // Calculate expiration time
    const expiresAt = new Date(Date.now() + tokenData.expires_in * 1000);

    // Create connection object
    this.connection = {
      id: this.generateConnectionId(),
      provider: this.config.id,
      providerName: this.config.name,
      baseUrl: this.config.baseUrl,
      patientId: tokenData.patient || '',
      accessToken: tokenData.access_token,
      refreshToken: tokenData.refresh_token,
      expiresAt,
      scope: tokenData.scope,
      isActive: true,
      createdAt: new Date(),
    };

    // Fetch server metadata
    await this.fetchServerMetadata();

    return this.connection;
  }

  /**
   * Refresh the access token
   */
  async refreshToken(): Promise<FHIRConnection> {
    if (!this.connection?.refreshToken) {
      throw new FHIRAuthError(
        'No refresh token available',
        'No hay token de actualización disponible - requiere reautenticación'
      );
    }

    const body = new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: this.connection.refreshToken,
      client_id: this.clientId,
      scope: this.connection.scope,
    });

    const response = await fetch(this.config.tokenUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
      },
      body: body.toString(),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new FHIRAuthError(
        `Token refresh failed: ${error}`,
        'Error al actualizar el token de acceso'
      );
    }

    const tokenData: FHIRTokenResponse = await response.json();

    // Update connection
    this.connection.accessToken = tokenData.access_token;
    this.connection.expiresAt = new Date(Date.now() + tokenData.expires_in * 1000);
    if (tokenData.refresh_token) {
      this.connection.refreshToken = tokenData.refresh_token;
    }
    if (tokenData.scope) {
      this.connection.scope = tokenData.scope;
    }

    return this.connection;
  }

  /**
   * Ensure token is valid, refresh if needed
   */
  async ensureValidToken(): Promise<string> {
    if (!this.connection) {
      throw new FHIRAuthError(
        'Not authenticated',
        'No autenticado - inicie sesión primero'
      );
    }

    // Refresh if expires within 5 minutes
    const fiveMinutes = 5 * 60 * 1000;
    if (new Date().getTime() + fiveMinutes >= this.connection.expiresAt.getTime()) {
      await this.refreshToken();
    }

    return this.connection.accessToken;
  }

  /**
   * Fetch server metadata/capabilities
   */
  private async fetchServerMetadata(): Promise<void> {
    try {
      const token = await this.ensureValidToken();
      const response = await fetch(`${this.config.baseUrl}/metadata`, {
        headers: {
          'Accept': 'application/fhir+json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const metadata: FHIRServerMetadata = await response.json();
        if (this.connection) {
          this.connection.metadata = metadata;
        }
      }
    } catch {
      // Metadata fetch is optional, don't fail if it doesn't work
    }
  }

  /**
   * Make an authenticated FHIR API request
   */
  async request<T = unknown>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const token = await this.ensureValidToken();

    const url = endpoint.startsWith('http')
      ? endpoint
      : `${this.config.baseUrl}/${endpoint.replace(/^\//, '')}`;

    const response = await fetch(url, {
      ...options,
      headers: {
        'Accept': 'application/fhir+json',
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/fhir+json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new FHIRRequestError(
        `FHIR request failed: ${response.status} ${response.statusText}`,
        `Error en la solicitud FHIR: ${response.status}`,
        response.status,
        errorText
      );
    }

    return response.json() as Promise<T>;
  }

  /**
   * Disconnect and clear tokens
   */
  disconnect(): void {
    this.connection = undefined;
    this.clearOAuthState();
  }

  /**
   * Generate a unique connection ID
   */
  private generateConnectionId(): string {
    return `fhir_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Store OAuth state for verification
   */
  private storeOAuthState(state: string, verifier: string): void {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('fhir_oauth_state', state);
      sessionStorage.setItem('fhir_code_verifier', verifier);
    }
  }

  /**
   * Retrieve stored OAuth state
   */
  private retrieveOAuthState(): string | null {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('fhir_oauth_state');
    }
    return null;
  }

  /**
   * Clear stored OAuth state
   */
  private clearOAuthState(): void {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('fhir_oauth_state');
      sessionStorage.removeItem('fhir_code_verifier');
    }
  }
}

/**
 * FHIR Authentication Error
 */
export class FHIRAuthError extends Error {
  public readonly messageEs: string;

  constructor(message: string, messageEs: string) {
    super(message);
    this.name = 'FHIRAuthError';
    this.messageEs = messageEs;
  }
}

/**
 * FHIR Request Error
 */
export class FHIRRequestError extends Error {
  public readonly messageEs: string;
  public readonly statusCode: number;
  public readonly responseBody: string;

  constructor(
    message: string,
    messageEs: string,
    statusCode: number,
    responseBody: string
  ) {
    super(message);
    this.name = 'FHIRRequestError';
    this.messageEs = messageEs;
    this.statusCode = statusCode;
    this.responseBody = responseBody;
  }
}

/**
 * Parse launch context from URL parameters (for EHR launch)
 */
export function parseLaunchContext(url: string): SMARTLaunchContext {
  const parsedUrl = new URL(url);
  const params = parsedUrl.searchParams;

  return {
    launch: params.get('launch') || undefined,
    iss: params.get('iss') || '',
    aud: params.get('aud') || undefined,
    patient: params.get('patient') || undefined,
    encounter: params.get('encounter') || undefined,
    location: params.get('location') || undefined,
  };
}

/**
 * Get available providers list
 */
export function getAvailableProviders(): FHIRProviderConfig[] {
  return Object.values(DEFAULT_PROVIDERS).filter((p) => p.patientFacing);
}

/**
 * Get provider by ID
 */
export function getProviderConfig(providerId: FHIRProvider): FHIRProviderConfig {
  return DEFAULT_PROVIDERS[providerId];
}
