/**
 * PatientAssignmentView Component
 * 
 * Dashboard view for Promotoras to see assigned patients, track engagement,
 * identify concerning labs, and manage patient priorities.
 */

import React, { useState, useMemo } from 'react';
import {
  PatientOverview,
  DashboardStats,
  PatientAlert,
  ConcerningLab,
  Language,
  getLocalizedText,
  PriorityLevel,
  AssignmentStatus,
} from '../../../core/promotora';

interface PatientAssignmentViewProps {
  patients: PatientOverview[];
  stats: DashboardStats;
  onPatientClick: (patientId: string) => void;
  onStartSession: (patientId: string) => void;
  onAcknowledgeAlert: (alertId: string) => void;
  onFilterChange: (filters: PatientFilters) => void;
  language?: Language;
  isLoading?: boolean;
}

interface PatientFilters {
  searchQuery: string;
  showInactive: boolean;
  priorityFilter: PriorityLevel | 'all';
  statusFilter: AssignmentStatus | 'all';
  showOnlyConcerningLabs: boolean;
}

export const PatientAssignmentView: React.FC<PatientAssignmentViewProps> = ({
  patients,
  stats,
  onPatientClick,
  onStartSession,
  onAcknowledgeAlert,
  onFilterChange,
  language = 'es',
  isLoading = false,
}) => {
  const [filters, setFilters] = useState<PatientFilters>({
    searchQuery: '',
    showInactive: false,
    priorityFilter: 'all',
    statusFilter: 'active',
    showOnlyConcerningLabs: false,
  });

  const t = (es: string, en: string) => (language === 'es' ? es : en);

  // Filter patients
  const filteredPatients = useMemo(() => {
    let result = [...patients];

    // Search filter
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.id.toLowerCase().includes(query)
      );
    }

    // Inactive filter
    if (!filters.showInactive) {
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      result = result.filter(
        (p) => p.lastLoginAt && p.lastLoginAt > thirtyDaysAgo
      );
    }

    // Concerning labs filter
    if (filters.showOnlyConcerningLabs) {
      result = result.filter((p) => p.concerningLabs.length > 0);
    }

    // Sort: concerning labs first, then by last login
    result.sort((a, b) => {
      const aCritical = a.concerningLabs.some((l) => l.status === 'critical');
      const bCritical = b.concerningLabs.some((l) => l.status === 'critical');
      if (aCritical && !bCritical) return -1;
      if (bCritical && !aCritical) return 1;

      const aHigh = a.concerningLabs.some((l) => l.status === 'high');
      const bHigh = b.concerningLabs.some((l) => l.status === 'high');
      if (aHigh && !bHigh) return -1;
      if (bHigh && !aHigh) return 1;

      return (b.lastLoginAt?.getTime() || 0) - (a.lastLoginAt?.getTime() || 0);
    });

    return result;
  }, [patients, filters]);

  const handleFilterChange = (newFilters: Partial<PatientFilters>) => {
    const updated = { ...filters, ...newFilters };
    setFilters(updated);
    onFilterChange(updated);
  };

  const getDaysSinceLogin = (date?: Date): number => {
    if (!date) return Infinity;
    return Math.floor((Date.now() - date.getTime()) / (1000 * 60 * 60 * 24));
  };

  const getActivityStatus = (days: number): { label: string; color: string } => {
    if (days <= 3) return { label: t('Activo', 'Active'), color: '#4CAF50' };
    if (days <= 7) return { label: t('Reciente', 'Recent'), color: '#8BC34A' };
    if (days <= 14) return { label: t('Inactivo', 'Inactive'), color: '#FF9800' };
    return { label: t('Desconectado', 'Disconnected'), color: '#F44336' };
  };

  return (
    <div className="patient-assignment-view">
      {/* Stats Header */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-value">{stats.totalAssignedPatients}</div>
          <div className="stat-label">{t('Pacientes Asignados', 'Assigned Patients')}</div>
        </div>
        <div className="stat-card highlight">
          <div className="stat-value">{stats.patientsNeedingAttention}</div>
          <div className="stat-label">{t('Necesitan Atención', 'Need Attention')}</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{stats.activePatients}</div>
          <div className="stat-label">{t('Activos (7 días)', 'Active (7 days)')}</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{stats.pendingConsents}</div>
          <div className="stat-label">{t('Consentimientos Pendientes', 'Pending Consents')}</div>
        </div>
      </div>

      {/* Filters */}
      <div className="filters-bar">
        <div className="search-box">
          <input
            type="text"
            placeholder={t('Buscar paciente...', 'Search patient...')}
            value={filters.searchQuery}
            onChange={(e) => handleFilterChange({ searchQuery: e.target.value })}
          />
          <span className="search-icon">🔍</span>
        </div>

        <div className="filter-toggles">
          <label className="toggle">
            <input
              type="checkbox"
              checked={filters.showOnlyConcerningLabs}
              onChange={(e) => handleFilterChange({ showOnlyConcerningLabs: e.target.checked })}
            />
            {t('Solo con labs preocupantes', 'Only concerning labs')}
          </label>

          <label className="toggle">
            <input
              type="checkbox"
              checked={filters.showInactive}
              onChange={(e) => handleFilterChange({ showInactive: e.target.checked })}
            />
            {t('Mostrar inactivos', 'Show inactive')}
          </label>
        </div>
      </div>

      {/* Patient List */}
      <div className="patients-list">
        {isLoading ? (
          <div className="loading-state">
            <div className="spinner">⏳</div>
            <p>{t('Cargando pacientes...', 'Loading patients...')}</p>
          </div>
        ) : filteredPatients.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">👥</div>
            <p>{t('No se encontraron pacientes', 'No patients found')}</p>
          </div>
        ) : (
          filteredPatients.map((patient) => {
            const daysSinceLogin = getDaysSinceLogin(patient.lastLoginAt);
            const activityStatus = getActivityStatus(daysSinceLogin);
            const hasCriticalLabs = patient.concerningLabs.some(
              (l) => l.status === 'critical'
            );
            const hasHighLabs = patient.concerningLabs.some(
              (l) => l.status === 'high'
            );

            return (
              <div
                key={patient.id}
                className={`patient-card ${hasCriticalLabs ? 'critical' : ''} ${hasHighLabs ? 'warning' : ''}`}
              >
                {/* Alert Indicators */}
                {(hasCriticalLabs || hasHighLabs || patient.alerts.length > 0) && (
                  <div className="alert-strip">
                    {hasCriticalLabs && (
                      <span className="alert-badge critical">🚨 {t('Crítico', 'Critical')}</span>
                    )}
                    {hasHighLabs && !hasCriticalLabs && (
                      <span className="alert-badge warning">⚠️ {t('Preocupante', 'Concerning')}</span>
                    )}
                    {patient.alerts.length > 0 && (
                      <span className="alert-badge info">📋 {patient.alerts.length} {t('alertas', 'alerts')}</span>
                    )}
                  </div>
                )}

                <div className="patient-content" onClick={() => onPatientClick(patient.id)}>
                  <div className="patient-info">
                    <div className="patient-avatar">
                      {patient.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="patient-details">
                      <h3>{patient.name}</h3>
                      <div className="patient-meta">
                        <span>{t('Edad:', 'Age:')} {patient.age}</span>
                        <span className="lang-badge">
                          {patient.preferredLanguage === 'es' ? '🇲🇽 ES' : '🇺🇸 EN'}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="patient-status">
                    <div
                      className="status-badge"
                      style={{ backgroundColor: activityStatus.color + '20', color: activityStatus.color }}
                    >
                      {activityStatus.label}
                    </div>
                    <div className="last-login">
                      {daysSinceLogin === Infinity
                        ? t('Nunca', 'Never')
                        : daysSinceLogin === 0
                        ? t('Hoy', 'Today')
                        : daysSinceLogin === 1
                        ? t('Ayer', 'Yesterday')
                        : `${daysSinceLogin} ${t('días', 'days')}`}
                    </div>
                  </div>
                </div>

                {/* Module Progress */}
                <div className="progress-section">
                  <div className="progress-bar-container">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${patient.moduleProgress.totalModules > 0
                          ? (patient.moduleProgress.completedModules / patient.moduleProgress.totalModules) * 100
                          : 0}%`,
                      }}
                    />
                  </div>
                  <div className="progress-text">
                    {patient.moduleProgress.completedModules}/{patient.moduleProgress.totalModules} {t('módulos', 'modules')}
                  </div>
                </div>

                {/* Concerning Labs Summary */}
                {patient.concerningLabs.length > 0 && (
                  <div className="labs-summary">
                    <div className="labs-header">
                      🧪 {t('Resultados que requieren atención:', 'Results needing attention:')}
                    </div>
                    <div className="labs-list">
                      {patient.concerningLabs.slice(0, 3).map((lab, idx) => (
                        <div key={idx} className={`lab-item ${lab.status}`}>
                          <span className="lab-name">{getLocalizedText(lab.testName, language)}</span>
                          <span className="lab-value">
                            {lab.value} {lab.unit}
                            {lab.status === 'high' && ' ↑'}
                            {lab.status === 'low' && ' ↓'}
                            {lab.status === 'critical' && ' 🚨'}
                          </span>
                        </div>
                      ))}
                      {patient.concerningLabs.length > 3 && (
                        <div className="more-labs">
                          +{patient.concerningLabs.length - 3} {t('más', 'more')}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="patient-actions">
                  <button
                    className="action-btn primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      onStartSession(patient.id);
                    }}
                  >
                    ▶️ {t('Iniciar Sesión', 'Start Session')}
                  </button>
                  <button
                    className="action-btn secondary"
                    onClick={(e) => {
                      e.stopPropagation();
                      onPatientClick(patient.id);
                    }}
                  >
                    👁️ {t('Ver Detalles', 'View Details')}
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

      <style>{`
        .patient-assignment-view {
          padding: 1.5rem;
          font-family: system-ui, -apple-system, sans-serif;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .stat-card {
          background: white;
          border: 1px solid #e0e0e0;
          border-radius: 12px;
          padding: 1rem;
          text-align: center;
        }

        .stat-card.highlight {
          border-color: #F44336;
          background: #ffebee;
        }

        .stat-value {
          font-size: 2rem;
          font-weight: 700;
          color: #333;
        }

        .stat-card.highlight .stat-value {
          color: #c62828;
        }

        .stat-label {
          font-size: 0.85rem;
          color: #666;
          margin-top: 0.25rem;
        }

        .filters-bar {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1.5rem;
          align-items: center;
        }

        .search-box {
          position: relative;
          flex: 1;
          min-width: 250px;
        }

        .search-box input {
          width: 100%;
          padding: 0.75rem 2.5rem 0.75rem 1rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 1rem;
        }

        .search-icon {
          position: absolute;
          right: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
        }

        .filter-toggles {
          display: flex;
          gap: 1rem;
        }

        .toggle {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          font-size: 0.9rem;
        }

        .patients-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .patient-card {
          background: white;
          border: 1px solid #e0e0e0;
          border-radius: 12px;
          overflow: hidden;
          transition: box-shadow 0.2s;
        }

        .patient-card:hover {
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .patient-card.critical {
          border-left: 4px solid #F44336;
        }

        .patient-card.warning {
          border-left: 4px solid #FF9800;
        }

        .alert-strip {
          display: flex;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: #fafafa;
          border-bottom: 1px solid #eee;
          flex-wrap: wrap;
        }

        .alert-badge {
          font-size: 0.75rem;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-weight: 500;
        }

        .alert-badge.critical {
          background: #ffebee;
          color: #c62828;
        }

        .alert-badge.warning {
          background: #fff3e0;
          color: #e65100;
        }

        .alert-badge.info {
          background: #e3f2fd;
          color: #1565c0;
        }

        .patient-content {
          display: flex;
          justify-content: space-between;
          padding: 1rem;
          cursor: pointer;
        }

        .patient-info {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .patient-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, #4CAF50, #8BC34A);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
          font-size: 1.25rem;
        }

        .patient-details h3 {
          margin: 0;
          font-size: 1.1rem;
          color: #333;
        }

        .patient-meta {
          display: flex;
          gap: 0.75rem;
          margin-top: 0.25rem;
          font-size: 0.85rem;
          color: #666;
        }

        .lang-badge {
          background: #e8f5e9;
          padding: 0.125rem 0.375rem;
          border-radius: 4px;
        }

        .patient-status {
          text-align: right;
        }

        .status-badge {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .last-login {
          font-size: 0.8rem;
          color: #999;
          margin-top: 0.25rem;
        }

        .progress-section {
          padding: 0 1rem 1rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .progress-bar-container {
          flex: 1;
          height: 8px;
          background: #e0e0e0;
          border-radius: 4px;
          overflow: hidden;
        }

        .progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #4CAF50, #8BC34A);
          border-radius: 4px;
          transition: width 0.3s;
        }

        .progress-text {
          font-size: 0.85rem;
          color: #666;
          white-space: nowrap;
        }

        .labs-summary {
          margin: 0 1rem 1rem;
          padding: 0.75rem;
          background: #fff3e0;
          border-radius: 8px;
        }

        .labs-header {
          font-size: 0.85rem;
          font-weight: 500;
          color: #e65100;
          margin-bottom: 0.5rem;
        }

        .labs-list {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .lab-item {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          padding: 0.25rem 0;
        }

        .lab-item.high {
          color: #e65100;
        }

        .lab-item.critical {
          color: #c62828;
          font-weight: 500;
        }

        .more-labs {
          font-size: 0.8rem;
          color: #999;
          text-align: center;
          padding-top: 0.25rem;
        }

        .patient-actions {
          display: flex;
          gap: 0.5rem;
          padding: 0 1rem 1rem;
        }

        .action-btn {
          flex: 1;
          padding: 0.625rem;
          border: none;
          border-radius: 8px;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .action-btn.primary {
          background: #4CAF50;
          color: white;
        }

        .action-btn.primary:hover {
          background: #45a049;
        }

        .action-btn.secondary {
          background: #f5f5f5;
          color: #666;
        }

        .action-btn.secondary:hover {
          background: #e0e0e0;
        }

        .loading-state, .empty-state {
          text-align: center;
          padding: 3rem;
          color: #666;
        }

        .spinner {
          font-size: 2rem;
          animation: spin 1s linear infinite;
        }

        .empty-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default PatientAssignmentView;
