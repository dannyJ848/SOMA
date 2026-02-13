/**
 * Apple Health Deep Import Component
 * AppleHealthDeepImport.tsx
 * 
 * Componente de configuración de importación profunda de Apple Health
 * Permisos granulares para datos de series temporales
 * UI en español (Spanish-first)
 * 
 * P4.1.3 - Apple Health Deep Integration
 */

import React, { useState, useCallback } from 'react';
import type {
  ConfiguracionImportacion,
  PermisosImportacion,
  ProgresoImportacion,
} from '../../../core/import/apple-health/deep-import.js';

// ============================================================================
// Tipos Extendidos para UI
// ============================================================================

export interface PropsImportacionProfunda {
  archivoExportacion?: string;
  onIniciarImportacion: (config: ConfiguracionImportacion) => Promise<void>;
  onProgreso?: (progreso: ProgresoImportacion) => void;
  onCompletado?: (resultado: ResultadoImportacion) => void;
  onError?: (error: Error) => void;
}

export interface ResultadoImportacion {
  totalLecturasFC: number;
  totalLecturasHRV: number;
  totalSegmentosSueno: number;
  totalLecturasSpO2: number;
  totalSesionesEjercicio: number;
  totalLecturasFR: number;
  totalLecturasAudio: number;
  diasEstadisticas: number;
}

// ============================================================================
// Configuración de Tipos de Datos
// ============================================================================

interface TipoDatoConfig {
  clave: keyof PermisosImportacion;
  titulo: string;
  descripcion: string;
  icono: string;
  color: string;
  datosEsperados: string;
  privacidad: 'alta' | 'media' | 'baja';
}

const TIPOS_DATOS: TipoDatoConfig[] = [
  {
    clave: 'frecuenciaCardiaca',
    titulo: 'Frecuencia Cardíaca',
    descripcion: 'Lecturas individuales de ritmo cardíaco capturadas cada pocos segundos durante todo el día',
    icono: '❤️',
    color: '#e74c3c',
    datosEsperados: '~1,000-2,000 lecturas/día',
    privacidad: 'alta',
  },
  {
    clave: 'hrv',
    titulo: 'Variabilidad del Ritmo Cardíaco (HRV)',
    descripcion: 'Mediciones de HRV (SDNN/RMSSD) para análisis de estrés y recuperación',
    icono: '💜',
    color: '#9b59b6',
    datosEsperados: '~5-20 lecturas/día',
    privacidad: 'alta',
  },
  {
    clave: 'suenoEtapas',
    titulo: 'Etapas del Sueño',
    descripcion: 'Segmentos detallados de sueño: REM, profundo, ligero y despierto con horarios exactos',
    icono: '😴',
    color: '#2c3e50',
    datosEsperados: '~10-30 segmentos/noche',
    privacidad: 'media',
  },
  {
    clave: 'spo2',
    titulo: 'Oxígeno en Sangre (SpO2)',
    descripcion: 'Mediciones de saturación de oxígeno, especialmente durante el sueño',
    icono: '💨',
    color: '#3498db',
    datosEsperados: '~50-200 lecturas/noche',
    privacidad: 'alta',
  },
  {
    clave: 'ejercicioZonas',
    titulo: 'Ejercicio e Intensidad',
    descripcion: 'Zonas de frecuencia cardíaca durante ejercicios y lecturas detalladas',
    icono: '🏃',
    color: '#2ecc71',
    datosEsperados: 'Según actividad',
    privacidad: 'baja',
  },
  {
    clave: 'frecuenciaRespiratoria',
    titulo: 'Frecuencia Respiratoria',
    descripcion: 'Respiraciones por minuto, típicamente medidas durante el sueño',
    icono: '🫁',
    color: '#1abc9c',
    datosEsperados: '~1 lectura/noche',
    privacidad: 'media',
  },
  {
    clave: 'exposicionAudio',
    titulo: 'Exposición al Audio',
    descripcion: 'Niveles de decibeles del ambiente y auriculares para salud auditiva',
    icono: '🔊',
    color: '#f39c12',
    datosEsperados: 'Datos continuos',
    privacidad: 'baja',
  },
];

// ============================================================================
// Componente Principal
// ============================================================================

export const AppleHealthDeepImport: React.FC<PropsImportacionProfunda> = ({
  archivoExportacion = '/ruta/a/export.xml',
  onIniciarImportacion,
  onProgreso,
  onCompletado,
  onError,
}) => {
  // Estados
  const [permisos, setPermisos] = useState<PermisosImportacion>({
    frecuenciaCardiaca: true,
    hrv: true,
    suenoEtapas: true,
    spo2: true,
    ejercicioZonas: true,
    frecuenciaRespiratoria: true,
    exposicionAudio: false,
  });

  const [rangoFechas, setRangoFechas] = useState<{
    inicio: string;
    fin: string;
  }>({
    inicio: '',
    fin: '',
  });

  const [resolucionMinima, setResolucionMinima] = useState<number>(5);
  const [archivo, setArchivo] = useState<string>(archivoExportacion);
  const [importando, setImportando] = useState(false);
  const [progreso, setProgreso] = useState<ProgresoImportacion | null>(null);
  const [pasoActual, setPasoActual] = useState<number>(1);
  const [errores, setErrores] = useState<string[]>([]);

  // Handlers
  const togglePermiso = useCallback((clave: keyof PermisosImportacion) => {
    setPermisos(prev => ({ ...prev, [clave]: !prev[clave] }));
  }, []);

  const seleccionarTodos = useCallback(() => {
    const todosActivados: PermisosImportacion = {
      frecuenciaCardiaca: true,
      hrv: true,
      suenoEtapas: true,
      spo2: true,
      ejercicioZonas: true,
      frecuenciaRespiratoria: true,
      exposicionAudio: true,
    };
    setPermisos(todosActivados);
  }, []);

  const deseleccionarTodos = useCallback(() => {
    const todosDesactivados: PermisosImportacion = {
      frecuenciaCardiaca: false,
      hrv: false,
      suenoEtapas: false,
      spo2: false,
      ejercicioZonas: false,
      frecuenciaRespiratoria: false,
      exposicionAudio: false,
    };
    setPermisos(todosDesactivados);
  }, []);

  const usarPermisosMinimos = useCallback(() => {
    setPermisos({
      frecuenciaCardiaca: true,
      hrv: false,
      suenoEtapas: true,
      spo2: false,
      ejercicioZonas: true,
      frecuenciaRespiratoria: false,
      exposicionAudio: false,
    });
  }, []);

  const usarPermisosRecomendados = useCallback(() => {
    setPermisos({
      frecuenciaCardiaca: true,
      hrv: true,
      suenoEtapas: true,
      spo2: true,
      ejercicioZonas: true,
      frecuenciaRespiratoria: true,
      exposicionAudio: false,
    });
  }, []);

  const iniciarImportacion = useCallback(async () => {
    if (importando) return;

    // Validaciones
    const nuevosErrores: string[] = [];
    if (!archivo) nuevosErrores.push('Debes seleccionar un archivo de exportación');
    if (!Object.values(permisos).some(p => p)) {
      nuevosErrores.push('Debes seleccionar al menos un tipo de dato para importar');
    }

    if (nuevosErrores.length > 0) {
      setErrores(nuevosErrores);
      return;
    }

    setErrores([]);
    setImportando(true);
    setProgreso(null);

    try {
      const config: ConfiguracionImportacion = {
        archivoExportacion: archivo,
        permisos,
        resolucionMinima,
        rangoFechas: rangoFechas.inicio && rangoFechas.fin
          ? {
              inicio: new Date(rangoFechas.inicio),
              fin: new Date(rangoFechas.fin),
            }
          : undefined,
      };

      await onIniciarImportacion(config);
    } catch (error) {
      onError?.(error as Error);
    } finally {
      setImportando(false);
    }
  }, [archivo, permisos, resolucionMinima, rangoFechas, importando, onIniciarImportacion, onError]);

  const totalSeleccionados = Object.values(permisos).filter(Boolean).length;

  // Render
  return (
    <div className="apple-health-deep-import" style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerIcon}>🫀</div>
        <div>
          <h1 style={styles.title}>Importación Profunda de Apple Health</h1>
          <p style={styles.subtitle}>
            Importa datos de series temporales para análisis avanzado. Todo se procesa localmente.
          </p>
        </div>
      </div>

      {/* Navegación de pasos */}
      <div style={styles.stepsNav}>
        {[
          { num: 1, label: 'Permisos' },
          { num: 2, label: 'Configuración' },
          { num: 3, label: 'Importar' },
        ].map((paso) => (
          <div
            key={paso.num}
            style={{
              ...styles.step,
              ...(pasoActual === paso.num ? styles.stepActive : {}),
              ...(paso.num < pasoActual ? styles.stepCompleted : {}),
            }}
            onClick={() => setPasoActual(paso.num)}
          >
            <div style={styles.stepNumber}>{paso.num}</div>
            <span style={styles.stepLabel}>{paso.label}</span>
          </div>
        ))}
      </div>

      {/* Contenido según paso */}
      <div style={styles.content}>
        {pasoActual === 1 && (
          <div style={styles.stepContent}>
            {/* Alerta de privacidad */}
            <div style={styles.privacyBanner}>
              <span style={styles.privacyIcon}>🔒</span>
              <div>
                <strong>Privacidad Primero</strong>
                <p style={styles.privacyText}>
                  Todos los datos se procesan localmente en tu dispositivo. 
                  Nada se envía a servidores externos.
                </p>
              </div>
            </div>

            {/* Acciones rápidas */}
            <div style={styles.quickActions}>
              <span style={styles.quickActionsLabel}>Configuración rápida:</span>
              <button style={styles.quickButton} onClick={seleccionarTodos}>
                Seleccionar todo
              </button>
              <button style={styles.quickButton} onClick={deseleccionarTodos}>
                Ninguno
              </button>
              <button style={styles.quickButton} onClick={usarPermisosMinimos}>
                Mínimo
              </button>
              <button style={{ ...styles.quickButton, ...styles.recommendedButton }} onClick={usarPermisosRecomendados}>
                Recomendado
              </button>
            </div>

            {/* Grid de tipos de datos */}
            <div style={styles.dataTypesGrid}>
              {TIPOS_DATOS.map((tipo) => (
                <div
                  key={tipo.clave}
                  style={{
                    ...styles.dataTypeCard,
                    ...(permisos[tipo.clave] ? styles.dataTypeCardSelected : {}),
                    borderColor: permisos[tipo.clave] ? tipo.color : '#e1e4e8',
                  }}
                  onClick={() => togglePermiso(tipo.clave)}
                >
                  <div style={styles.dataTypeHeader}>
                    <span style={{ ...styles.dataTypeIcon, backgroundColor: `${tipo.color}20` }}>
                      {tipo.icono}
                    </span>
                    <div style={styles.checkbox}>
                      {permisos[tipo.clave] && (
                        <span style={{ ...styles.checkmark, color: tipo.color }}>✓</span>
                      )}
                    </div>
                  </div>
                  <h3 style={styles.dataTypeTitle}>{tipo.titulo}</h3>
                  <p style={styles.dataTypeDescription}>{tipo.descripcion}</p>
                  <div style={styles.dataTypeMeta}>
                    <span style={styles.dataTypeVolume}>{tipo.datosEsperados}</span>
                    <span
                      style={{
                        ...styles.privacyBadge,
                        backgroundColor:
                          tipo.privacidad === 'alta'
                            ? '#fee2e2'
                            : tipo.privacidad === 'media'
                            ? '#fef3c7'
                            : '#d1fae5',
                        color:
                          tipo.privacidad === 'alta'
                            ? '#dc2626'
                            : tipo.privacidad === 'media'
                            ? '#d97706'
                            : '#059669',
                      }}
                    >
                      Privacidad {tipo.privacidad}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Resumen de selección */}
            <div style={styles.selectionSummary}>
              <span style={styles.summaryText}>
                {totalSeleccionados} de {TIPOS_DATOS.length} tipos seleccionados
              </span>
              <button style={styles.nextButton} onClick={() => setPasoActual(2)}>
                Continuar →
              </button>
            </div>
          </div>
        )}

        {pasoActual === 2 && (
          <div style={styles.stepContent}>
            <h2 style={styles.sectionTitle}>Configuración Avanzada</h2>

            {/* Archivo */}
            <div style={styles.configSection}>
              <label style={styles.configLabel}>Archivo de Exportación</label>
              <div style={styles.fileInput}>
                <input
                  type="text"
                  value={archivo}
                  onChange={(e) => setArchivo(e.target.value)}
                  placeholder="/ruta/a/apple_health_export/export.xml"
                  style={styles.textInput}
                />
                <button style={styles.browseButton}>Buscar...</button>
              </div>
              <p style={styles.configHelp}>
                Ubicación del archivo export.xml de Apple Health
              </p>
            </div>

            {/* Rango de fechas */}
            <div style={styles.configSection}>
              <label style={styles.configLabel}>Rango de Fechas (opcional)</label>
              <div style={styles.dateRange}>
                <input
                  type="date"
                  value={rangoFechas.inicio}
                  onChange={(e) => setRangoFechas(prev => ({ ...prev, inicio: e.target.value }))}
                  style={styles.dateInput}
                />
                <span style={styles.dateSeparator}>hasta</span>
                <input
                  type="date"
                  value={rangoFechas.fin}
                  onChange={(e) => setRangoFechas(prev => ({ ...prev, fin: e.target.value }))}
                  style={styles.dateInput}
                />
              </div>
              <p style={styles.configHelp}>
                Deja en blanco para importar todos los datos disponibles
              </p>
            </div>

            {/* Resolución */}
            <div style={styles.configSection}>
              <label style={styles.configLabel}>Resolución Mínima (segundos)</label>
              <input
                type="range"
                min="1"
                max="60"
                value={resolucionMinima}
                onChange={(e) => setResolucionMinima(Number(e.target.value))}
                style={styles.rangeInput}
              />
              <div style={styles.rangeLabels}>
                <span>1s (más detallado)</span>
                <span style={styles.rangeValue}>{resolucionMinima}s</span>
                <span>60s (más rápido)</span>
              </div>
            </div>

            {/* Resumen de importación */}
            <div style={styles.importSummary}>
              <h3 style={styles.summaryTitle}>Resumen de la Importación</h3>
              <ul style={styles.summaryList}>
                {TIPOS_DATOS.filter(t => permisos[t.clave]).map(t => (
                  <li key={t.clave} style={styles.summaryItem}>
                    <span>{t.icono}</span>
                    <span>{t.titulo}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navegación */}
            <div style={styles.navigation}>
              <button style={styles.backButton} onClick={() => setPasoActual(1)}>
                ← Atrás
              </button>
              <button style={styles.nextButton} onClick={() => setPasoActual(3)}>
                Revisar y Confirmar →
              </button>
            </div>
          </div>
        )}

        {pasoActual === 3 && (
          <div style={styles.stepContent}>
            <h2 style={styles.sectionTitle}>Confirmar Importación</h2>

            {/* Errores */}
            {errores.length > 0 && (
              <div style={styles.errorBanner}>
                {errores.map((err, i) => (
                  <div key={i} style={styles.errorItem}>⚠️ {err}</div>
                ))}
              </div>
            )}

            {/* Confirmación */}
            <div style={styles.confirmationBox}>
              <div style={styles.confirmationIcon}>📊</div>
              <h3 style={styles.confirmationTitle}>¿Listo para importar?</h3>
              <p style={styles.confirmationText}>
                Estás a punto de importar datos de salud detallados. Este proceso puede tomar varios minutos dependiendo del tamaño del archivo.
              </p>
              
              <div style={styles.confirmationDetails}>
                <div style={styles.detailRow}>
                  <span style={styles.detailLabel}>Archivo:</span>
                  <span style={styles.detailValue}>{archivo || 'No seleccionado'}</span>
                </div>
                <div style={styles.detailRow}>
                  <span style={styles.detailLabel}>Tipos de datos:</span>
                  <span style={styles.detailValue}>{totalSeleccionados} seleccionados</span>
                </div>
                <div style={styles.detailRow}>
                  <span style={styles.detailLabel}>Resolución:</span>
                  <span style={styles.detailValue}>{resolucionMinima} segundos</span>
                </div>
              </div>
            </div>

            {/* Progreso */}
            {importando && progreso && (
              <div style={styles.progressContainer}>
                <div style={styles.progressHeader}>
                  <span style={styles.progressTitle}>Importando datos...</span>
                  <span style={styles.progressPercent}>{progreso.porcentaje}%</span>
                </div>
                <div style={styles.progressBar}>
                  <div
                    style={{
                      ...styles.progressFill,
                      width: `${progreso.porcentaje}%`,
                    }}
                  />
                </div>
                <div style={styles.progressDetails}>
                  <span>Procesando: {progreso.tipoActual}</span>
                  <span>{progreso.registrosEncontrados.toLocaleString()} registros encontrados</span>
                </div>
              </div>
            )}

            {/* Navegación */}
            <div style={styles.navigation}>
              <button 
                style={styles.backButton} 
                onClick={() => setPasoActual(2)}
                disabled={importando}
              >
                ← Atrás
              </button>
              <button
                style={{
                  ...styles.importButton,
                  ...(importando ? styles.importButtonDisabled : {}),
                }}
                onClick={iniciarImportacion}
                disabled={importando}
              >
                {importando ? 'Importando...' : '🚀 Iniciar Importación'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// ============================================================================
// Estilos
// ============================================================================

const styles: Record<string, React.CSSProperties> = {
  container: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    maxWidth: '900px',
    margin: '0 auto',
    padding: '24px',
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '32px',
    paddingBottom: '24px',
    borderBottom: '1px solid #e1e4e8',
  },
  headerIcon: {
    fontSize: '48px',
  },
  title: {
    fontSize: '28px',
    fontWeight: 700,
    color: '#1a1a2e',
    margin: '0 0 8px 0',
  },
  subtitle: {
    fontSize: '16px',
    color: '#6b7280',
    margin: 0,
  },
  stepsNav: {
    display: 'flex',
    gap: '8px',
    marginBottom: '32px',
    padding: '4px',
    backgroundColor: '#f3f4f6',
    borderRadius: '12px',
  },
  step: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: '12px 16px',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  stepActive: {
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
  },
  stepCompleted: {
    color: '#10b981',
  },
  stepNumber: {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    backgroundColor: '#e5e7eb',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    fontWeight: 600,
  },
  stepLabel: {
    fontSize: '14px',
    fontWeight: 500,
  },
  content: {
    minHeight: '400px',
  },
  stepContent: {
    animation: 'fadeIn 0.3s ease-out',
  },
  privacyBanner: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
    padding: '20px',
    backgroundColor: '#dbeafe',
    borderRadius: '12px',
    marginBottom: '24px',
    border: '1px solid #93c5fd',
  },
  privacyIcon: {
    fontSize: '24px',
  },
  privacyText: {
    margin: '4px 0 0 0',
    fontSize: '14px',
    color: '#1e40af',
  },
  quickActions: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '20px',
    flexWrap: 'wrap',
  },
  quickActionsLabel: {
    fontSize: '14px',
    color: '#6b7280',
    marginRight: '8px',
  },
  quickButton: {
    padding: '8px 16px',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  recommendedButton: {
    backgroundColor: '#3b82f6',
    color: '#ffffff',
    borderColor: '#3b82f6',
  },
  dataTypesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '16px',
    marginBottom: '24px',
  },
  dataTypeCard: {
    padding: '20px',
    border: '2px solid #e1e4e8',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    backgroundColor: '#ffffff',
  },
  dataTypeCardSelected: {
    backgroundColor: '#f8fafc',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
  },
  dataTypeHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px',
  },
  dataTypeIcon: {
    fontSize: '28px',
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkbox: {
    width: '24px',
    height: '24px',
    border: '2px solid #d1d5db',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmark: {
    fontSize: '16px',
    fontWeight: 'bold',
  },
  dataTypeTitle: {
    fontSize: '16px',
    fontWeight: 600,
    color: '#1a1a2e',
    margin: '0 0 8px 0',
  },
  dataTypeDescription: {
    fontSize: '14px',
    color: '#6b7280',
    margin: '0 0 12px 0',
    lineHeight: 1.5,
  },
  dataTypeMeta: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '8px',
  },
  dataTypeVolume: {
    fontSize: '12px',
    color: '#9ca3af',
  },
  privacyBadge: {
    fontSize: '11px',
    padding: '4px 8px',
    borderRadius: '4px',
    fontWeight: 500,
  },
  selectionSummary: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f9fafb',
    borderRadius: '12px',
  },
  summaryText: {
    fontSize: '16px',
    color: '#374151',
  },
  nextButton: {
    padding: '12px 24px',
    backgroundColor: '#3b82f6',
    color: '#ffffff',
    border: 'none',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  sectionTitle: {
    fontSize: '22px',
    fontWeight: 600,
    color: '#1a1a2e',
    margin: '0 0 24px 0',
  },
  configSection: {
    marginBottom: '24px',
  },
  configLabel: {
    display: 'block',
    fontSize: '14px',
    fontWeight: 600,
    color: '#374151',
    marginBottom: '8px',
  },
  fileInput: {
    display: 'flex',
    gap: '8px',
  },
  textInput: {
    flex: 1,
    padding: '12px 16px',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '14px',
  },
  browseButton: {
    padding: '12px 20px',
    backgroundColor: '#f3f4f6',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '14px',
    cursor: 'pointer',
  },
  configHelp: {
    fontSize: '13px',
    color: '#6b7280',
    margin: '8px 0 0 0',
  },
  dateRange: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  dateInput: {
    padding: '12px 16px',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '14px',
  },
  dateSeparator: {
    color: '#6b7280',
  },
  rangeInput: {
    width: '100%',
    marginTop: '8px',
  },
  rangeLabels: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '8px',
    fontSize: '12px',
    color: '#6b7280',
  },
  rangeValue: {
    fontWeight: 600,
    color: '#3b82f6',
  },
  importSummary: {
    padding: '20px',
    backgroundColor: '#f0fdf4',
    borderRadius: '12px',
    border: '1px solid #86efac',
  },
  summaryTitle: {
    fontSize: '16px',
    fontWeight: 600,
    color: '#166534',
    margin: '0 0 12px 0',
  },
  summaryList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  summaryItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    color: '#374151',
  },
  navigation: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '32px',
  },
  backButton: {
    padding: '12px 24px',
    backgroundColor: '#f3f4f6',
    border: 'none',
    borderRadius: '10px',
    fontSize: '16px',
    color: '#374151',
    cursor: 'pointer',
  },
  confirmationBox: {
    textAlign: 'center',
    padding: '32px',
    backgroundColor: '#f9fafb',
    borderRadius: '16px',
    marginBottom: '24px',
  },
  confirmationIcon: {
    fontSize: '64px',
    marginBottom: '16px',
  },
  confirmationTitle: {
    fontSize: '20px',
    fontWeight: 600,
    color: '#1a1a2e',
    margin: '0 0 8px 0',
  },
  confirmationText: {
    fontSize: '15px',
    color: '#6b7280',
    margin: '0 0 24px 0',
    maxWidth: '480px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  confirmationDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    maxWidth: '400px',
    margin: '0 auto',
  },
  detailRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '12px 16px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
  },
  detailLabel: {
    fontSize: '14px',
    color: '#6b7280',
  },
  detailValue: {
    fontSize: '14px',
    fontWeight: 600,
    color: '#1a1a2e',
  },
  errorBanner: {
    padding: '16px',
    backgroundColor: '#fee2e2',
    border: '1px solid #fecaca',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  errorItem: {
    fontSize: '14px',
    color: '#dc2626',
  },
  progressContainer: {
    padding: '24px',
    backgroundColor: '#eff6ff',
    borderRadius: '12px',
    marginBottom: '24px',
  },
  progressHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '12px',
  },
  progressTitle: {
    fontSize: '14px',
    fontWeight: 600,
    color: '#1e40af',
  },
  progressPercent: {
    fontSize: '14px',
    fontWeight: 700,
    color: '#3b82f6',
  },
  progressBar: {
    height: '8px',
    backgroundColor: '#dbeafe',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#3b82f6',
    borderRadius: '4px',
    transition: 'width 0.3s ease',
  },
  progressDetails: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '12px',
    fontSize: '13px',
    color: '#6b7280',
  },
  importButton: {
    padding: '16px 32px',
    backgroundColor: '#10b981',
    color: '#ffffff',
    border: 'none',
    borderRadius: '12px',
    fontSize: '18px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  importButtonDisabled: {
    backgroundColor: '#9ca3af',
    cursor: 'not-allowed',
  },
};

export default AppleHealthDeepImport;
