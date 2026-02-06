/**
 * Health Metrics Dashboard Component
 * HealthMetricsDashboard.tsx
 * 
 * Visualización profunda de métricas de salud
 * - Análisis de HRV (tendencias, recuperación)
 * - Puntuación de calidad del sueño
 * - Análisis de actividad
 * - Detección de anomalías
 * 
 * UI en español (Spanish-first)
 * 
 * P4.1.3 - Health Metrics Dashboard
 */

import React, { useState, useMemo } from 'react';
import type {
  EstadisticasDiariasAvanzadas,
  LecturaFrecuenciaCardiaca,
  LecturaHRV,
  SegmentoSueno,
  SesionEjercicioDetallada,
} from '../../../core/import/apple-health/deep-import.js';
import type {
  AnalisisHRV,
  AnalisisSueno,
  AnalisisActividad,
  AnalisisFCReposo,
  AnalisisAnomalias,
  Periodo,
} from '../../../core/import/apple-health/analysis.js';

// ============================================================================
// Tipos de Props
// ============================================================================

export interface PropsPanelMetricas {
  estadisticas: EstadisticasDiariasAvanzadas[];
  lecturasFC?: LecturaFrecuenciaCardiaca[];
  lecturasHRV?: LecturaHRV[];
  segmentosSueno?: SegmentoSueno[];
  sesionesEjercicio?: SesionEjercicioDetallada[];
  analisisHRV?: AnalisisHRV | null;
  analisisSueno?: AnalisisSueno | null;
  analisisActividad?: AnalisisActividad;
  analisisFCReposo?: AnalisisFCReposo | null;
  analisisAnomalias?: AnalisisAnomalias;
  periodoActual?: Periodo;
  onCambiarPeriodo?: (periodo: Periodo) => void;
  cargando?: boolean;
}

// ============================================================================
// Componentes Auxiliares
// ============================================================================

const TarjetaMetrica: React.FC<{
  titulo: string;
  valor: string | number;
  unidad?: string;
  tendencia?: 'subiendo' | 'bajando' | 'estable' | 'fluctuante';
  cambioPorcentaje?: number;
  icono: string;
  color: string;
  subtitulo?: string;
}> = ({ titulo, valor, unidad, tendencia, cambioPorcentaje, icono, color, subtitulo }) => {
  const getIconoTendencia = () => {
    switch (tendencia) {
      case 'subiendo': return '↗️';
      case 'bajando': return '↘️';
      case 'fluctuante': return '↔️';
      default: return '→';
    }
  };

  return (
    <div style={{ ...styles.metricCard, borderLeftColor: color }}>
      <div style={styles.metricHeader}>
        <span style={{ ...styles.metricIcon, backgroundColor: `${color}20` }}>{icono}</span>
        <span style={styles.metricTitle}>{titulo}</span>
      </div>
      <div style={styles.metricValue}>
        {valor}
        {unidad && <span style={styles.metricUnit}>{unidad}</span>}
      </div>
      {subtitulo && <div style={styles.metricSubtitle}>{subtitulo}</div>}
      {tendencia && (
        <div style={styles.metricTrend}>
          <span>{getIconoTendencia()}</span>
          <span style={{ 
            color: tendencia === 'subiendo' ? '#10b981' : tendencia === 'bajando' ? '#ef4444' : '#6b7280'
          }}>
            {cambioPorcentaje ? `${Math.abs(cambioPorcentaje)}%` : 'Estable'}
          </span>
        </div>
      )}
    </div>
  );
};

const BarraProgreso: React.FC<{ valor: number; maximo?: number; color?: string; etiqueta?: string }> = ({ 
  valor, 
  maximo = 100, 
  color = '#3b82f6',
  etiqueta 
}) => {
  const porcentaje = Math.min(100, Math.max(0, (valor / maximo) * 100));
  
  return (
    <div style={styles.progressBarContainer}>
      {etiqueta && <span style={styles.progressBarLabel}>{etiqueta}</span>}
      <div style={styles.progressBarTrack}>
        <div 
          style={{ 
            ...styles.progressBarFill, 
            width: `${porcentaje}%`,
            backgroundColor: color 
          }} 
        />
      </div>
      <span style={styles.progressBarValue}>{Math.round(valor)}</span>
    </div>
  );
};

const IndicadorEstado: React.FC<{ estado: string; tipo: 'hrv' | 'sueno' | 'actividad' | 'fc' }> = ({ estado, tipo }) => {
  const colores: Record<string, Record<string, string>> = {
    hrv: {
      'excelente': '#10b981',
      'bueno': '#84cc16',
      'moderado': '#f59e0b',
      'malo': '#ef4444',
      'crítico': '#dc2626',
    },
    sueno: {
      'excelente': '#10b981',
      'buena': '#84cc16',
      'regular': '#f59e0b',
      'mala': '#ef4444',
      'crítica': '#dc2626',
    },
    actividad: {
      'muy-activo': '#10b981',
      'activo': '#84cc16',
      'moderado': '#3b82f6',
      'ligero': '#f59e0b',
      'sedentario': '#6b7280',
    },
    fc: {
      'excelente': '#10b981',
      'bueno': '#84cc16',
      'normal': '#3b82f6',
      'atención': '#f59e0b',
      'consultar': '#ef4444',
    },
  };

  const color = colores[tipo]?.[estado] || '#6b7280';

  return (
    <div style={{ ...styles.statusBadge, backgroundColor: `${color}20`, color }}>
      <span style={{ ...styles.statusDot, backgroundColor: color }} />
      {estado.charAt(0).toUpperCase() + estado.slice(1).replace('-', ' ')}
    </div>
  );
};

// ============================================================================
// Componente Principal
// ============================================================================

export const HealthMetricsDashboard: React.FC<PropsPanelMetricas> = ({
  estadisticas,
  analisisHRV,
  analisisSueno,
  analisisActividad,
  analisisFCReposo,
  analisisAnomalias,
  periodoActual = '30d',
  onCambiarPeriodo,
  cargando = false,
}) => {
  const [pestanaActiva, setPestanaActiva] = useState<'resumen' | 'hrv' | 'sueno' | 'actividad' | 'anomalias'>('resumen');

  const periodos: { valor: Periodo; etiqueta: string }[] = [
    { valor: '7d', etiqueta: '7 días' },
    { valor: '30d', etiqueta: '30 días' },
    { valor: '90d', etiqueta: '3 meses' },
    { valor: '1y', etiqueta: '1 año' },
  ];

  // Cálculos de resumen
  const resumen = useMemo(() => {
    const diasConDatos = estadisticas.filter(e => e.totalLecturasFC > 0).length;
    const hrvPromedio = estadisticas
      .filter(e => e.hrvPromedio !== null)
      .reduce((sum, e) => sum + e.hrvPromedio!, 0) / (estadisticas.filter(e => e.hrvPromedio !== null).length || 1);
    const suenoPromedio = estadisticas
      .filter(e => e.suenoTotalMinutos > 0)
      .reduce((sum, e) => sum + e.suenoTotalMinutos, 0) / (estadisticas.filter(e => e.suenoTotalMinutos > 0).length || 1);
    
    return { diasConDatos, hrvPromedio, suenoPromedio };
  }, [estadisticas]);

  if (cargando) {
    return (
      <div style={styles.loadingContainer}>
        <div style={styles.loadingSpinner}>⟳</div>
        <p>Analizando tus datos de salud...</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div>
          <h1 style={styles.title}>Panel de Métricas de Salud</h1>
          <p style={styles.subtitle}>Análisis profundo de tus datos de Apple Health</p>
        </div>
        <div style={styles.periodSelector}>
          {periodos.map(p => (
            <button
              key={p.valor}
              style={{
                ...styles.periodButton,
                ...(periodoActual === p.valor ? styles.periodButtonActive : {}),
              }}
              onClick={() => onCambiarPeriodo?.(p.valor)}
            >
              {p.etiqueta}
            </button>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div style={styles.tabs}>
        {[
          { id: 'resumen', label: '📊 Resumen', icono: '📊' },
          { id: 'hrv', label: '💜 HRV', icono: '💜' },
          { id: 'sueno', label: '😴 Sueño', icono: '😴' },
          { id: 'actividad', label: '🏃 Actividad', icono: '🏃' },
          { id: 'anomalias', label: '⚠️ Anomalías', icono: '⚠️' },
        ].map(tab => (
          <button
            key={tab.id}
            style={{
              ...styles.tab,
              ...(pestanaActiva === tab.id ? styles.tabActive : {}),
            }}
            onClick={() => setPestanaActiva(tab.id as typeof pestanaActiva)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Contenido */}
      <div style={styles.content}>
        {/* Resumen */}
        {pestanaActiva === 'resumen' && (
          <div style={styles.tabContent}>
            <div style={styles.overviewGrid}>
              <TarjetaMetrica
                titulo="Días con Datos"
                valor={resumen.diasConDatos}
                unidad="días"
                icono="📅"
                color="#3b82f6"
                subtitulo={`De ${estadisticas.length} días analizados`}
              />
              <TarjetaMetrica
                titulo="HRV Promedio"
                valor={resumen.hrvPromedio ? Math.round(resumen.hrvPromedio) : '-'}
                unidad="ms"
                tendencia={analisisHRV?.tendencia.tendencia}
                cambioPorcentaje={analisisHRV?.tendencia.cambioPorcentaje}
                icono="💜"
                color="#9b59b6"
                subtitulo={analisisHRV?.estadoRecuperacion}
              />
              <TarjetaMetrica
                titulo="Sueño Promedio"
                valor={resumen.suenoPromedio ? Math.round(resumen.suenoPromedio / 60 * 10) / 10 : '-'}
                unidad="h"
                tendencia={analisisSueno?.tendencias.duracion.tendencia}
                icono="😴"
                color="#2c3e50"
                subtitulo={`Eficiencia: ${analisisSueno?.eficienciaPromedio || '-'}%`}
              />
              <TarjetaMetrica
                titulo="FC en Reposo"
                valor={analisisFCReposo?.promedio || '-'}
                unidad="bpm"
                tendencia={analisisFCReposo?.tendencia}
                icono="❤️"
                color="#e74c3c"
                subtitulo={analisisFCReposo?.estadoCardiovascular}
              />
            </div>

            {/* Estados */}
            <div style={styles.statusSection}>
              <h3 style={styles.sectionTitle}>Estado General</h3>
              <div style={styles.statusGrid}>
                {analisisHRV && (
                  <div style={styles.statusCard}>
                    <div style={styles.statusHeader}>
                      <span>Recuperación</span>
                      <IndicadorEstado estado={analisisHRV.estadoRecuperacion} tipo="hrv" />
                    </div>
                    <BarraProgreso 
                      valor={analisisHRV.puntuacionRecuperacion} 
                      etiqueta="Puntuación"
                      color="#9b59b6"
                    />
                    <div style={styles.recommendations}>
                      {analisisHRV.recomendaciones.slice(0, 2).map((rec, i) => (
                        <div key={i} style={styles.recommendation}>💡 {rec}</div>
                      ))}
                    </div>
                  </div>
                )}

                {analisisSueno && (
                  <div style={styles.statusCard}>
                    <div style={styles.statusHeader}>
                      <span>Calidad del Sueño</span>
                      <IndicadorEstado estado={analisisSueno.calidadGeneral} tipo="sueno" />
                    </div>
                    <BarraProgreso 
                      valor={analisisSueno.puntuacionCalidad} 
                      etiqueta="Puntuación"
                      color="#2c3e50"
                    />
                    <div style={styles.sleepStats}>
                      <div style={styles.sleepStat}>
                        <span>Profundo</span>
                        <span style={styles.sleepStatValue}>{analisisSueno.distribucionEtapas.profundo}%</span>
                      </div>
                      <div style={styles.sleepStat}>
                        <span>REM</span>
                        <span style={styles.sleepStatValue}>{analisisSueno.distribucionEtapas.rem}%</span>
                      </div>
                      <div style={styles.sleepStat}>
                        <span>Ligero</span>
                        <span style={styles.sleepStatValue}>{analisisSueno.distribucionEtapas.ligero}%</span>
                      </div>
                    </div>
                  </div>
                )}

                {analisisActividad && (
                  <div style={styles.statusCard}>
                    <div style={styles.statusHeader}>
                      <span>Nivel de Actividad</span>
                      <IndicadorEstado estado={analisisActividad.nivelGeneral} tipo="actividad" />
                    </div>
                    <BarraProgreso 
                      valor={analisisActividad.puntuacionActividad} 
                      etiqueta="Puntuación"
                      color="#2ecc71"
                    />
                    <div style={styles.activityStats}>
                      <div>
                        <span style={styles.activityStatLabel}>Pasos/día promedio: </span>
                        <strong>{analisisActividad.pasosPromedioDiario.toLocaleString()}</strong>
                      </div>
                      <div>
                        <span style={styles.activityStatLabel}>Ejercicios/semana: </span>
                        <strong>{analisisActividad.sesionesEjercicioSemana}</strong>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* HRV */}
        {pestanaActiva === 'hrv' && analisisHRV && (
          <div style={styles.tabContent}>
            <div style={styles.analysisHeader}>
              <div>
                <h2 style={styles.analysisTitle}>Análisis de HRV</h2>
                <p style={styles.analysisSubtitle}>Variabilidad del Ritmo Cardíaco - indicador de estrés y recuperación</p>
              </div>
              <div style={styles.analysisScore}>
                <div style={styles.scoreValue}>{analisisHRV.puntuacionRecuperacion}</div>
                <div style={styles.scoreLabel}>Recuperación</div>
              </div>
            </div>

            <div style={styles.metricsRow}>
              <div style={styles.metricBox}>
                <span style={styles.metricBoxLabel}>Promedio</span>
                <span style={styles.metricBoxValue}>{analisisHRV.tendencia.valorPromedio} ms</span>
              </div>
              <div style={styles.metricBox}>
                <span style={styles.metricBoxLabel}>Mínimo</span>
                <span style={styles.metricBoxValue}>{analisisHRV.tendencia.valorMinimo} ms</span>
              </div>
              <div style={styles.metricBox}>
                <span style={styles.metricBoxLabel}>Máximo</span>
                <span style={styles.metricBoxValue}>{analisisHRV.tendencia.valorMaximo} ms</span>
              </div>
              <div style={styles.metricBox}>
                <span style={styles.metricBoxLabel}>Desviación</span>
                <span style={styles.metricBoxValue}>±{analisisHRV.tendencia.desviacionEstandar}</span>
              </div>
            </div>

            <div style={styles.patternSection}>
              <h3 style={styles.sectionTitle}>Patrones Detectados</h3>
              <div style={styles.patternGrid}>
                <div style={styles.patternCard}>
                  <span style={styles.patternIcon}>📅</span>
                  <div>
                    <div style={styles.patternLabel}>Mejor día de HRV</div>
                    <div style={styles.patternValue}>{analisisHRV.patrones.diaSemanaMayorHRV}</div>
                  </div>
                </div>
                <div style={styles.patternCard}>
                  <span style={styles.patternIcon}>📉</span>
                  <div>
                    <div style={styles.patternLabel}>Día con menor HRV</div>
                    <div style={styles.patternValue}>{analisisHRV.patrones.diaSemanaMenorHRV}</div>
                  </div>
                </div>
                {analisisHRV.patrones.correlacionSueno && (
                  <div style={styles.patternCard}>
                    <span style={styles.patternIcon}>😴</span>
                    <div>
                      <div style={styles.patternLabel}>Correlación con sueño</div>
                      <div style={styles.patternValue}>{analisisHRV.patrones.correlacionSueno > 0 ? '+' : ''}{analisisHRV.patrones.correlacionSueno}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div style={styles.recommendationsSection}>
              <h3 style={styles.sectionTitle}>Recomendaciones</h3>
              <div style={styles.recommendationsList}>
                {analisisHRV.recomendaciones.map((rec, i) => (
                  <div key={i} style={styles.recommendationItem}>
                    <span style={styles.recommendationIcon}>💡</span>
                    {rec}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Sueño */}
        {pestanaActiva === 'sueno' && analisisSueno && (
          <div style={styles.tabContent}>
            <div style={styles.analysisHeader}>
              <div>
                <h2 style={styles.analysisTitle}>Análisis del Sueño</h2>
                <p style={styles.analysisSubtitle}>Calidad, duración y patrones de descanso</p>
              </div>
              <div style={styles.analysisScore}>
                <div style={styles.scoreValue}>{analisisSueno.puntuacionCalidad}</div>
                <div style={styles.scoreLabel}>Calidad</div>
              </div>
            </div>

            <div style={styles.sleepMetrics}>
              <div style={styles.sleepMetricCard}>
                <div style={styles.sleepMetricValue}>{Math.round(analisisSueno.duracionPromedio / 60 * 10) / 10}</div>
                <div style={styles.sleepMetricLabel}>Horas promedio</div>
              </div>
              <div style={styles.sleepMetricCard}>
                <div style={styles.sleepMetricValue}>{analisisSueno.eficienciaPromedio}%</div>
                <div style={styles.sleepMetricLabel}>Eficiencia</div>
              </div>
              <div style={styles.sleepMetricCard}>
                <div style={styles.sleepMetricValue}>{analisisSueno.patrones.despertaresPromedio}</div>
                <div style={styles.sleepMetricLabel}>Despertares/noche</div>
              </div>
            </div>

            <div style={styles.stagesSection}>
              <h3 style={styles.sectionTitle}>Distribución de Etapas</h3>
              <div style={styles.stagesBar}>
                <div 
                  style={{ 
                    ...styles.stageSegment, 
                    width: `${analisisSueno.distribucionEtapas.profundo}%`,
                    backgroundColor: '#2c3e50'
                  }}
                  title={`Profundo: ${analisisSueno.distribucionEtapas.profundo}%`}
                />
                <div 
                  style={{ 
                    ...styles.stageSegment, 
                    width: `${analisisSueno.distribucionEtapas.rem}%`,
                    backgroundColor: '#9b59b6'
                  }}
                  title={`REM: ${analisisSueno.distribucionEtapas.rem}%`}
                />
                <div 
                  style={{ 
                    ...styles.stageSegment, 
                    width: `${analisisSueno.distribucionEtapas.ligero}%`,
                    backgroundColor: '#3498db'
                  }}
                  title={`Ligero: ${analisisSueno.distribucionEtapas.ligero}%`}
                />
                <div 
                  style={{ 
                    ...styles.stageSegment, 
                    width: `${analisisSueno.distribucionEtapas.despierto}%`,
                    backgroundColor: '#e74c3c'
                  }}
                  title={`Despierto: ${analisisSueno.distribucionEtapas.despierto}%`}
                />
              </div>
              <div style={styles.stagesLegend}>
                <div style={styles.legendItem}>
                  <span style={{ ...styles.legendColor, backgroundColor: '#2c3e50' }} />
                  <span>Profundo {analisisSueno.distribucionEtapas.profundo}%</span>
                </div>
                <div style={styles.legendItem}>
                  <span style={{ ...styles.legendColor, backgroundColor: '#9b59b6' }} />
                  <span>REM {analisisSueno.distribucionEtapas.rem}%</span>
                </div>
                <div style={styles.legendItem}>
                  <span style={{ ...styles.legendColor, backgroundColor: '#3498db' }} />
                  <span>Ligero {analisisSueno.distribucionEtapas.ligero}%</span>
                </div>
                <div style={styles.legendItem}>
                  <span style={{ ...styles.legendColor, backgroundColor: '#e74c3c' }} />
                  <span>Despierto {analisisSueno.distribucionEtapas.despierto}%</span>
                </div>
              </div>
            </div>

            {analisisSueno.alertas.length > 0 && (
              <div style={styles.alertsSection}>
                <h3 style={styles.sectionTitle}>Alertas</h3>
                {analisisSueno.alertas.map((alerta, i) => (
                  <div key={i} style={styles.alertItem}>
                    ⚠️ {alerta}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Actividad */}
        {pestanaActiva === 'actividad' && analisisActividad && (
          <div style={styles.tabContent}>
            <div style={styles.analysisHeader}>
              <div>
                <h2 style={styles.analysisTitle}>Análisis de Actividad</h2>
                <p style={styles.analysisSubtitle}>Nivel de actividad física y patrones de ejercicio</p>
              </div>
              <div style={styles.analysisScore}>
                <div style={styles.scoreValue}>{analisisActividad.puntuacionActividad}</div>
                <div style={styles.scoreLabel}>Actividad</div>
              </div>
            </div>

            <div style={styles.activityGrid}>
              <div style={styles.activityCard}>
                <span style={styles.activityIcon}>👟</span>
                <div style={styles.activityValue}>{analisisActividad.pasosPromedioDiario.toLocaleString()}</div>
                <div style={styles.activityLabel}>Pasos/día</div>
              </div>
              <div style={styles.activityCard}>
                <span style={styles.activityIcon}>🏃</span>
                <div style={styles.activityValue}>{analisisActividad.sesionesEjercicioSemana}</div>
                <div style={styles.activityLabel}>Ejercicios/semana</div>
              </div>
              <div style={styles.activityCard}>
                <span style={styles.activityIcon}>⏱️</span>
                <div style={styles.activityValue}>{analisisActividad.duracionEjercicioPromedio} min</div>
                <div style={styles.activityLabel}>Duración promedio</div>
              </div>
              <div style={styles.activityCard}>
                <span style={styles.activityIcon}>📈</span>
                <div style={styles.activityValue}>{analisisActividad.patrones.consistencia}%</div>
                <div style={styles.activityLabel}>Consistencia</div>
              </div>
            </div>

            <div style={styles.zonesSection}>
              <h3 style={styles.sectionTitle}>Distribución de Zonas de Intensidad</h3>
              <div style={styles.zonesList}>
                {[
                  { zona: 1, label: 'Recuperación', color: '#95a5a6' },
                  { zona: 2, label: 'Aeróbica', color: '#3498db' },
                  { zona: 3, label: 'Umbral', color: '#2ecc71' },
                  { zona: 4, label: 'Anaeróbica', color: '#f39c12' },
                  { zona: 5, label: 'Máxima', color: '#e74c3c' },
                ].map(({ zona, label, color }) => {
                  const key = `zona${zona}` as keyof typeof analisisActividad.distribucionIntensidad;
                  const valor = analisisActividad.distribucionIntensidad[key];
                  return (
                    <div key={zona} style={styles.zoneRow}>
                      <div style={styles.zoneInfo}>
                        <span style={{ ...styles.zoneDot, backgroundColor: color }} />
                        <span>Zona {zona} - {label}</span>
                      </div>
                      <div style={styles.zoneBarContainer}>
                        <div style={{ ...styles.zoneBar, width: `${valor}%`, backgroundColor: color }} />
                      </div>
                      <span style={styles.zoneValue}>{valor}%</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Anomalías */}
        {pestanaActiva === 'anomalias' && analisisAnomalias && (
          <div style={styles.tabContent}>
            <div style={styles.anomaliesHeader}>
              <h2 style={styles.analysisTitle}>Detección de Anomalías</h2>
              <div style={styles.anomaliesCount}>
                <div style={styles.anomalyStat}>
                  <span style={{ ...styles.anomalyStatValue, color: '#ef4444' }}>{analisisAnomalias.porSeveridad.crítica}</span>
                  <span style={styles.anomalyStatLabel}>Críticas</span>
                </div>
                <div style={styles.anomalyStat}>
                  <span style={{ ...styles.anomalyStatValue, color: '#f59e0b' }}>{analisisAnomalias.porSeveridad.alta}</span>
                  <span style={styles.anomalyStatLabel}>Altas</span>
                </div>
                <div style={styles.anomalyStat}>
                  <span style={{ ...styles.anomalyStatValue, color: '#3b82f6' }}>{analisisAnomalias.porSeveridad.media}</span>
                  <span style={styles.anomalyStatLabel}>Medias</span>
                </div>
              </div>
            </div>

            {analisisAnomalias.anomalias.length === 0 ? (
              <div style={styles.noAnomalies}>
                <span style={styles.noAnomaliesIcon}>✅</span>
                <p>¡No se detectaron anomalías en este período!</p>
              </div>
            ) : (
              <div style={styles.anomaliesList}>
                {analisisAnomalias.anomalias.map((anomalia, i) => (
                  <div 
                    key={i} 
                    style={{
                      ...styles.anomalyCard,
                      borderLeftColor: 
                        anomalia.severidad === 'crítica' ? '#dc2626' :
                        anomalia.severidad === 'alta' ? '#f59e0b' :
                        anomalia.severidad === 'media' ? '#3b82f6' : '#6b7280'
                    }}
                  >
                    <div style={styles.anomalyHeader}>
                      <span style={styles.anomalyType}>
                        {anomalia.tipo === 'spike' ? '📈 Pico' :
                         anomalia.tipo === 'drop' ? '📉 Caída' :
                         anomalia.tipo === 'pattern-break' ? '🔀 Patrón roto' : '⚠️ Outlier'}
                      </span>
                      <span style={{
                        ...styles.anomalySeverity,
                        backgroundColor: 
                          anomalia.severidad === 'crítica' ? '#fee2e2' :
                          anomalia.severidad === 'alta' ? '#fef3c7' :
                          anomalia.severidad === 'media' ? '#dbeafe' : '#f3f4f6',
                        color: 
                          anomalia.severidad === 'crítica' ? '#dc2626' :
                          anomalia.severidad === 'alta' ? '#d97706' :
                          anomalia.severidad === 'media' ? '#2563eb' : '#4b5563',
                      }}>
                        {anomalia.severidad.toUpperCase()}
                      </span>
                    </div>
                    <div style={styles.anomalyMetric}>{anomalia.metrica} - {anomalia.fecha.toLocaleDateString('es-ES')}</div>
                    <div style={styles.anomalyDescription}>{anomalia.descripcion}</div>
                    
                    <div style={styles.anomalyValues}>
                      <span>Valor: {anomalia.valor}</span>
                      <span>Esperado: ~{anomalia.valorEsperado}</span>
                      <span>{anomalia.desviacion.toFixed(1)}σ desviación</span>
                    </div>
                    
                    {anomalia.posiblesCausas.length > 0 && (
                      <div style={styles.anomalyCauses}>
                        <strong>Posibles causas:</strong> {anomalia.posiblesCausas.join(', ')}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
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
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '24px',
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)',
  },
  loadingContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '64px',
    color: '#6b7280',
  },
  loadingSpinner: {
    fontSize: '48px',
    animation: 'spin 1s linear infinite',
    marginBottom: '16px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '24px',
    paddingBottom: '24px',
    borderBottom: '1px solid #e1e4e8',
    flexWrap: 'wrap',
    gap: '16px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 700,
    color: '#1a1a2e',
    margin: '0 0 8px 0',
  },
  subtitle: {
    fontSize: '14px',
    color: '#6b7280',
    margin: 0,
  },
  periodSelector: {
    display: 'flex',
    gap: '8px',
  },
  periodButton: {
    padding: '8px 16px',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  periodButtonActive: {
    backgroundColor: '#3b82f6',
    color: '#ffffff',
    borderColor: '#3b82f6',
  },
  tabs: {
    display: 'flex',
    gap: '8px',
    marginBottom: '24px',
    borderBottom: '1px solid #e1e4e8',
    paddingBottom: '1px',
  },
  tab: {
    padding: '12px 20px',
    border: 'none',
    borderBottom: '3px solid transparent',
    backgroundColor: 'transparent',
    fontSize: '14px',
    fontWeight: 500,
    color: '#6b7280',
    cursor: 'pointer',
    transition: 'all 0.2s',
    marginBottom: '-2px',
  },
  tabActive: {
    color: '#3b82f6',
    borderBottomColor: '#3b82f6',
  },
  content: {
    minHeight: '400px',
  },
  tabContent: {
    animation: 'fadeIn 0.3s ease-out',
  },
  overviewGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '16px',
    marginBottom: '32px',
  },
  metricCard: {
    padding: '20px',
    backgroundColor: '#f9fafb',
    borderRadius: '12px',
    borderLeft: '4px solid',
  },
  metricHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '12px',
  },
  metricIcon: {
    width: '36px',
    height: '36px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
  },
  metricTitle: {
    fontSize: '13px',
    fontWeight: 600,
    color: '#6b7280',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  metricValue: {
    fontSize: '32px',
    fontWeight: 700,
    color: '#1a1a2e',
  },
  metricUnit: {
    fontSize: '16px',
    fontWeight: 500,
    color: '#6b7280',
    marginLeft: '4px',
  },
  metricSubtitle: {
    fontSize: '13px',
    color: '#6b7280',
    marginTop: '4px',
    textTransform: 'capitalize',
  },
  metricTrend: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    marginTop: '8px',
    fontSize: '13px',
  },
  statusSection: {
    marginTop: '32px',
  },
  sectionTitle: {
    fontSize: '18px',
    fontWeight: 600,
    color: '#1a1a2e',
    margin: '0 0 16px 0',
  },
  statusGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '16px',
  },
  statusCard: {
    padding: '20px',
    backgroundColor: '#f9fafb',
    borderRadius: '12px',
  },
  statusHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
  },
  statusBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '6px 12px',
    borderRadius: '20px',
    fontSize: '13px',
    fontWeight: 600,
  },
  statusDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
  },
  progressBarContainer: {
    marginBottom: '12px',
  },
  progressBarLabel: {
    fontSize: '13px',
    color: '#6b7280',
    marginBottom: '4px',
    display: 'block',
  },
  progressBarTrack: {
    height: '8px',
    backgroundColor: '#e5e7eb',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: '4px',
    transition: 'width 0.5s ease',
  },
  progressBarValue: {
    fontSize: '12px',
    color: '#6b7280',
    marginTop: '4px',
    display: 'block',
  },
  recommendations: {
    marginTop: '12px',
  },
  recommendation: {
    fontSize: '13px',
    color: '#4b5563',
    padding: '6px 0',
  },
  sleepStats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '12px',
    marginTop: '16px',
  },
  sleepStat: {
    textAlign: 'center',
    padding: '12px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
  },
  sleepStatValue: {
    fontSize: '18px',
    fontWeight: 700,
    color: '#1a1a2e',
    display: 'block',
  },
  activityStats: {
    marginTop: '16px',
    fontSize: '14px',
  },
  activityStatLabel: {
    color: '#6b7280',
  },
  analysisHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '24px',
  },
  analysisTitle: {
    fontSize: '20px',
    fontWeight: 600,
    color: '#1a1a2e',
    margin: '0 0 4px 0',
  },
  analysisSubtitle: {
    fontSize: '14px',
    color: '#6b7280',
    margin: 0,
  },
  analysisScore: {
    textAlign: 'center',
    padding: '16px 24px',
    backgroundColor: '#f0fdf4',
    borderRadius: '12px',
  },
  scoreValue: {
    fontSize: '36px',
    fontWeight: 700,
    color: '#10b981',
  },
  scoreLabel: {
    fontSize: '12px',
    color: '#6b7280',
    textTransform: 'uppercase',
  },
  metricsRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '12px',
    marginBottom: '24px',
  },
  metricBox: {
    padding: '16px',
    backgroundColor: '#f9fafb',
    borderRadius: '10px',
    textAlign: 'center',
  },
  metricBoxLabel: {
    fontSize: '12px',
    color: '#6b7280',
    display: 'block',
    marginBottom: '4px',
  },
  metricBoxValue: {
    fontSize: '20px',
    fontWeight: 700,
    color: '#1a1a2e',
  },
  patternSection: {
    marginBottom: '24px',
  },
  patternGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '12px',
  },
  patternCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '16px',
    backgroundColor: '#f9fafb',
    borderRadius: '10px',
  },
  patternIcon: {
    fontSize: '24px',
  },
  patternLabel: {
    fontSize: '12px',
    color: '#6b7280',
  },
  patternValue: {
    fontSize: '16px',
    fontWeight: 600,
    color: '#1a1a2e',
  },
  recommendationsSection: {
    padding: '20px',
    backgroundColor: '#fefce8',
    borderRadius: '12px',
  },
  recommendationsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  recommendationItem: {
    padding: '12px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    fontSize: '14px',
    color: '#4b5563',
  },
  recommendationIcon: {
    marginRight: '8px',
  },
  sleepMetrics: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
    marginBottom: '24px',
  },
  sleepMetricCard: {
    textAlign: 'center',
    padding: '24px',
    backgroundColor: '#f9fafb',
    borderRadius: '12px',
  },
  sleepMetricValue: {
    fontSize: '36px',
    fontWeight: 700,
    color: '#1a1a2e',
  },
  sleepMetricLabel: {
    fontSize: '14px',
    color: '#6b7280',
    marginTop: '4px',
  },
  stagesSection: {
    marginBottom: '24px',
  },
  stagesBar: {
    display: 'flex',
    height: '32px',
    borderRadius: '8px',
    overflow: 'hidden',
    marginBottom: '12px',
  },
  stageSegment: {
    height: '100%',
    transition: 'width 0.5s ease',
  },
  stagesLegend: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
  },
  legendItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '13px',
    color: '#4b5563',
  },
  legendColor: {
    width: '12px',
    height: '12px',
    borderRadius: '3px',
  },
  alertsSection: {
    padding: '16px',
    backgroundColor: '#fef3c7',
    borderRadius: '12px',
  },
  alertItem: {
    padding: '8px 0',
    fontSize: '14px',
    color: '#92400e',
  },
  activityGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '16px',
    marginBottom: '24px',
  },
  activityCard: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f9fafb',
    borderRadius: '12px',
  },
  activityIcon: {
    fontSize: '32px',
    display: 'block',
    marginBottom: '8px',
  },
  activityValue: {
    fontSize: '24px',
    fontWeight: 700,
    color: '#1a1a2e',
  },
  activityLabel: {
    fontSize: '13px',
    color: '#6b7280',
    marginTop: '4px',
  },
  zonesSection: {
    marginBottom: '24px',
  },
  zonesList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  zoneRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  zoneInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    minWidth: '140px',
    fontSize: '14px',
  },
  zoneDot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
  },
  zoneBarContainer: {
    flex: 1,
    height: '8px',
    backgroundColor: '#e5e7eb',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  zoneBar: {
    height: '100%',
    borderRadius: '4px',
    transition: 'width 0.5s ease',
  },
  zoneValue: {
    minWidth: '40px',
    textAlign: 'right',
    fontSize: '13px',
    fontWeight: 600,
    color: '#4b5563',
  },
  anomaliesHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '24px',
    flexWrap: 'wrap',
    gap: '16px',
  },
  anomaliesCount: {
    display: 'flex',
    gap: '16px',
  },
  anomalyStat: {
    textAlign: 'center',
  },
  anomalyStatValue: {
    fontSize: '24px',
    fontWeight: 700,
    display: 'block',
  },
  anomalyStatLabel: {
    fontSize: '12px',
    color: '#6b7280',
  },
  noAnomalies: {
    textAlign: 'center',
    padding: '48px',
    backgroundColor: '#f0fdf4',
    borderRadius: '12px',
  },
  noAnomaliesIcon: {
    fontSize: '48px',
    display: 'block',
    marginBottom: '16px',
  },
  anomaliesList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  anomalyCard: {
    padding: '16px',
    backgroundColor: '#f9fafb',
    borderRadius: '10px',
    borderLeft: '4px solid',
  },
  anomalyHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px',
  },
  anomalyType: {
    fontSize: '13px',
    fontWeight: 600,
    color: '#4b5563',
  },
  anomalySeverity: {
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '11px',
    fontWeight: 700,
  },
  anomalyMetric: {
    fontSize: '12px',
    color: '#6b7280',
    marginBottom: '8px',
  },
  anomalyDescription: {
    fontSize: '14px',
    color: '#1a1a2e',
    marginBottom: '8px',
  },
  anomalyValues: {
    display: 'flex',
    gap: '16px',
    fontSize: '13px',
    color: '#6b7280',
  },
  anomalyCauses: {
    marginTop: '8px',
    paddingTop: '8px',
    borderTop: '1px solid #e5e7eb',
    fontSize: '13px',
    color: '#4b5563',
  },
};

export default HealthMetricsDashboard;
