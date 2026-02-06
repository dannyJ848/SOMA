/**
 * Promotora Dashboard Module
 * 
 * Dashboard functionality for Community Health Workers to view and manage
 * their assigned patients with consent, track engagement, and identify
 * patients needing attention.
 * 
 * All content supports Spanish/English localization.
 */

import {
  Promotora,
  PatientAssignment,
  PatientOverview,
  DashboardStats,
  ActivityItem,
  DashboardFilters,
  PatientAlert,
  ConcerningLab,
  ModuleProgressSummary,
  LocalizedText,
  Language,
  PriorityLevel,
  PaginatedResponse,
  PromotoraApiResponse,
} from './types';

// ============================================================================
// Localization Helpers
// ============================================================================

const t = (text: LocalizedText, lang: Language): string => text[lang];

// ============================================================================
// Dashboard Configuration
// ============================================================================

export interface DashboardConfig {
  inactiveThresholdDays: number;
  concerningLabThreshold: 'any' | 'high' | 'critical';
  defaultLanguage: Language;
  itemsPerPage: number;
  refreshIntervalMinutes: number;
}

export const DEFAULT_DASHBOARD_CONFIG: DashboardConfig = {
  inactiveThresholdDays: 7,
  concerningLabThreshold: 'high',
  defaultLanguage: 'es',
  itemsPerPage: 20,
  refreshIntervalMinutes: 5,
};

// ============================================================================
// Patient Retrieval & Filtering
// ============================================================================

export interface GetPatientsOptions {
  promotoraId: string;
  filters?: DashboardFilters;
  searchQuery?: string;
  page?: number;
  pageSize?: number;
  language?: Language;
}

/**
 * Retrieve patients assigned to a promotora with filtering and pagination
 */
export async function getAssignedPatients(
  options: GetPatientsOptions
): Promise<PromotoraApiResponse<PaginatedResponse<PatientOverview>>> {
  // This would integrate with actual data store
  // Mock implementation for structure
  const { promotoraId, filters, page = 1, pageSize = 20 } = options;

  try {
    // Fetch from database/service
    const patients = await fetchPatientOverviews(promotoraId, filters);
    
    // Apply pagination
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const paginatedItems = patients.slice(start, end);

    return {
      success: true,
      data: {
        items: paginatedItems,
        total: patients.length,
        page,
        pageSize,
        hasMore: end < patients.length,
      },
    };
  } catch (error) {
    return {
      success: false,
      error: {
        code: 'FETCH_ERROR',
        message: {
          es: 'Error al cargar los pacientes. Por favor, intente de nuevo.',
          en: 'Error loading patients. Please try again.',
        },
        details: error,
      },
    };
  }
}

/**
 * Get patients who haven't logged in recently
 */
export async function getInactivePatients(
  promotoraId: string,
  daysInactive: number = 7,
  language: Language = 'es'
): Promise<PromotoraApiResponse<PatientOverview[]>> {
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - daysInactive);

  try {
    const patients = await fetchPatientOverviews(promotoraId);
    const inactivePatients = patients.filter(
      (p) => !p.lastLoginAt || p.lastLoginAt < cutoffDate
    );

    return {
      success: true,
      data: inactivePatients,
    };
  } catch (error) {
    return {
      success: false,
      error: {
        code: 'FETCH_ERROR',
        message: {
          es: 'Error al cargar pacientes inactivos.',
          en: 'Error loading inactive patients.',
        },
      },
    };
  }
}

/**
 * Get patients with concerning lab results
 */
export async function getPatientsWithConcerningLabs(
  promotoraId: string,
  severity: 'any' | 'high' | 'critical' = 'high',
  language: Language = 'es'
): Promise<PromotoraApiResponse<PatientOverview[]>> {
  try {
    const patients = await fetchPatientOverviews(promotoraId);
    
    const patientsWithConcerns = patients.filter((p) => {
      if (p.concerningLabs.length === 0) return false;
      
      if (severity === 'critical') {
        return p.concerningLabs.some((lab) => lab.status === 'critical');
      } else if (severity === 'high') {
        return p.concerningLabs.some(
          (lab) => lab.status === 'high' || lab.status === 'critical'
        );
      }
      return true;
    });

    // Sort by most critical first
    patientsWithConcerns.sort((a, b) => {
      const aCritical = a.concerningLabs.some((l) => l.status === 'critical');
      const bCritical = b.concerningLabs.some((l) => l.status === 'critical');
      if (aCritical && !bCritical) return -1;
      if (bCritical && !aCritical) return 1;
      return 0;
    });

    return {
      success: true,
      data: patientsWithConcerns,
    };
  } catch (error) {
    return {
      success: false,
      error: {
        code: 'FETCH_ERROR',
        message: {
          es: 'Error al cargar resultados de laboratorio.',
          en: 'Error loading lab results.',
        },
      },
    };
  }
}

/**
 * Get module completion progress for assigned patients
 */
export async function getModuleCompletionSummary(
  promotoraId: string,
  language: Language = 'es'
): Promise<
  PromotoraApiResponse<{
    overallCompletion: number;
    byPatient: { patientId: string; patientName: string; progress: ModuleProgressSummary }[];
    strugglingPatients: { patientId: string; patientName: string; reason: LocalizedText }[];
  }>
> {
  try {
    const patients = await fetchPatientOverviews(promotoraId);
    
    const totalModules = patients.reduce(
      (sum, p) => sum + p.moduleProgress.totalModules,
      0
    );
    const completedModules = patients.reduce(
      (sum, p) => sum + p.moduleProgress.completedModules,
      0
    );

    const byPatient = patients.map((p) => ({
      patientId: p.id,
      patientName: p.name,
      progress: p.moduleProgress,
    }));

    // Identify patients struggling with modules
    const strugglingPatients = patients
      .filter((p) => {
        const completionRate =
          p.moduleProgress.totalModules > 0
            ? p.moduleProgress.completedModules / p.moduleProgress.totalModules
            : 0;
        return completionRate < 0.3 && p.moduleProgress.totalModules > 0;
      })
      .map((p) => ({
        patientId: p.id,
        patientName: p.name,
        reason: {
          es: `Solo ha completado ${p.moduleProgress.completedModules} de ${p.moduleProgress.totalModules} módulos`,
          en: `Only completed ${p.moduleProgress.completedModules} of ${p.moduleProgress.totalModules} modules`,
        },
      }));

    return {
      success: true,
      data: {
        overallCompletion:
          totalModules > 0 ? Math.round((completedModules / totalModules) * 100) : 0,
        byPatient,
        strugglingPatients,
      },
    };
  } catch (error) {
    return {
      success: false,
      error: {
        code: 'FETCH_ERROR',
        message: {
          es: 'Error al cargar el progreso de módulos.',
          en: 'Error loading module progress.',
        },
      },
    };
  }
}

// ============================================================================
// Dashboard Statistics
// ============================================================================

/**
 * Get dashboard statistics for a promotora
 */
export async function getDashboardStats(
  promotoraId: string,
  language: Language = 'es'
): Promise<PromotoraApiResponse<DashboardStats>> {
  try {
    const patients = await fetchPatientOverviews(promotoraId);
    const assignments = await fetchPatientAssignments(promotoraId);

    const stats: DashboardStats = {
      totalAssignedPatients: patients.length,
      activePatients: patients.filter((p) => {
        const daysSinceLogin = p.lastLoginAt
          ? Math.floor(
              (Date.now() - p.lastLoginAt.getTime()) / (1000 * 60 * 60 * 24)
            )
          : Infinity;
        return daysSinceLogin <= 7;
      }).length,
      patientsNeedingAttention: patients.filter(
        (p) =>
          p.alerts.some((a) => a.severity === 'warning' || a.severity === 'critical') ||
          p.concerningLabs.length > 0
      ).length,
      pendingConsents: assignments.filter((a) => a.consentStatus === 'pending').length,
      upcomingSessions: 0, // Would fetch from scheduled sessions
      completedSessionsThisMonth: 0, // Would fetch from session history
    };

    return {
      success: true,
      data: stats,
    };
  } catch (error) {
    return {
      success: false,
      error: {
        code: 'FETCH_ERROR',
        message: {
          es: 'Error al cargar estadísticas del panel.',
          en: 'Error loading dashboard statistics.',
        },
      },
    };
  }
}

/**
 * Get recent activity for dashboard feed
 */
export async function getRecentActivity(
  promotoraId: string,
  limit: number = 20,
  language: Language = 'es'
): Promise<PromotoraApiResponse<ActivityItem[]>> {
  try {
    // This would fetch from activity log
    const activities: ActivityItem[] = []; // Mock - would be fetched

    return {
      success: true,
      data: activities.slice(0, limit),
    };
  } catch (error) {
    return {
      success: false,
      error: {
        code: 'FETCH_ERROR',
        message: {
          es: 'Error al cargar actividad reciente.',
          en: 'Error loading recent activity.',
        },
      },
    };
  }
}

// ============================================================================
// Alert Management
// ============================================================================

/**
 * Acknowledge a patient alert
 */
export async function acknowledgeAlert(
  alertId: string,
  promotoraId: string,
  notes?: string
): Promise<PromotoraApiResponse<void>> {
  try {
    // Update alert in database
    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      error: {
        code: 'UPDATE_ERROR',
        message: {
          es: 'Error al reconocer la alerta.',
          en: 'Error acknowledging alert.',
        },
      },
    };
  }
}

/**
 * Get all active alerts for promotora's patients
 */
export async function getActiveAlerts(
  promotoraId: string,
  language: Language = 'es'
): Promise<PromotoraApiResponse<PatientAlert[]>> {
  try {
    const patients = await fetchPatientOverviews(promotoraId);
    const allAlerts = patients.flatMap((p) => p.alerts);
    const activeAlerts = allAlerts.filter((a) => !a.acknowledgedAt);

    return {
      success: true,
      data: activeAlerts,
    };
  } catch (error) {
    return {
      success: false,
      error: {
        code: 'FETCH_ERROR',
        message: {
          es: 'Error al cargar alertas.',
          en: 'Error loading alerts.',
        },
      },
    };
  }
}

// ============================================================================
// Mock Data Functions (Would be replaced with actual data layer)
// ============================================================================

async function fetchPatientOverviews(
  promotoraId: string,
  filters?: DashboardFilters
): Promise<PatientOverview[]> {
  // This would query the database
  return [];
}

async function fetchPatientAssignments(
  promotoraId: string
): Promise<PatientAssignment[]> {
  // This would query the database
  return [];
}

// ============================================================================
// Export
// ============================================================================

export * from './types';
