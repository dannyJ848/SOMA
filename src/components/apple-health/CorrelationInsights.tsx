/**
 * Correlation Insights Component
 * CorrelationInsights.tsx
 * 
 * Visualización de patrones y correlaciones descubiertas:
 * - "Tu HRV baja antes de migrañas"
 * - "Dormir mal se correlaciona con glucosa alta"
 * - Hallazgos de patrones temporales
 * - Predicciones basadas en datos
 * 
 * UI en español (Spanish-first)
 * 
 * P4.1.3 - Correlation Insights
 */

import React, { useState, useMemo } from 'react';
import type {
  Correlacion,
  HallazgoPatron,
  PrediccionTemporal,
  AnalisisContextual,
} from '../../../core/import/apple-health/correlations.js';

// ============================================================================
// Tipos de Props
// ============================================================================

export interface PropsCorrelaciones {
  correlaciones: Correlacion[];
  hallazgos: HallazgoPatron[];
  predicciones: PrediccionTemporal[];
  analisisContextuales: AnalisisContextual[];
  cargando?: boolean;
}

// ============================================================================
// Componentes Auxiliares
// ============================================================================

const TarjetaCorrelacion: React.FC<{ correlacion: Correlacion }> = ({ correlacion }) => {
  const getColorCorrelacion = (coef: number) => {
    const abs = Math.abs(coef);
    if (abs > 0.7) return '#10b981';
    if (abs > 0.5) return '#3b82f6';
    if (abs > 0.3) return '#f59e0b';
    return '#6b7280';
  };

  const getIconoDireccion = (dir: string) => {
    switch (dir) {
      case 'positiva': return '↗️';
      case 'negativa': return '↘️';
      default: return '→';
    }
  };

  return (
    <div style={{
      ...styles.correlationCard,
      borderColor: correlacion.significativa ? getColorCorrelacion(correlacion.coeficiente) : '#e5e7eb',
    }}>
      <div style={styles.correlationHeader}>
        <div style={styles.correlationVariables}>
          <span style={styles.correlationVar}>{correlacion.variableA}</span>
          <span style={{
            ...styles.correlationArrow,
            color: getColorCorrelacion(correlacion.coeficiente),
          }}>
            {getIconoDireccion(correlacion.direccion)}
          </span>
          <span style={styles.correlationVar}>{correlacion.variableB}</span>
        </div>
        <div style={{
          ...styles.correlationStrength,
          backgroundColor: `${getColorCorrelacion(correlacion.coeficiente)}20`,
          color: getColorCorrelacion(correlacion.coeficiente),
        }}>
          {Math.abs(Math.round(correlacion.coeficiente * 100))}%
        </div>
      </div>
      
      <p style={styles.correlationDesc}>{correlacion.descripcion}</p>
      
      <div style={styles.correlationMeta}>
        <span style={{
          ...styles.significanceBadge,
          backgroundColor: correlacion.significativa ? '#d1fae5' : '#f3f4f6',
          color: correlacion.significativa ? '#059669' : '#6b7280',
        }}>
          {correlacion.significativa ? '✓ Significativa' : 'No significativa'}
        </span>
        <span style={styles.correlationSamples}>
          n={correlacion.nMuestras}
        </span>
        <span style={styles.correlationConfidence}>
          Confianza: {correlacion.confianza}
        </span>
      </div>
    </div>
  );
};

const TarjetaHallazgo: React.FC<{ hallazgo: HallazgoPatron; index: number }> = ({ hallazgo, index }) => {
  const getColorConfianza = (confianza: string) => {
    switch (confianza) {
      case 'alta': return '#10b981';
      case 'media': return '#3b82f6';
      default: return '#6b7280';
    }
  };

  const getIconoTipo = (tipo: string) => {
    switch (tipo) {
      case 'sintoma-metrica': return '🤒';
      case 'metrica-metrica': return '📊';
      case 'comportamiento-resultado': return '🎯';
      case 'temporal': return '⏰';
      case 'anomalia': return '⚠️';
      default: return '💡';
    }
  };

  return (
    <div style={{
      ...styles.findingCard,
      borderLeftColor: getColorConfianza(hallazgo.nivelConfianza),
    }}>
      <div style={styles.findingHeader}>
        <div style={styles.findingIcon}>{getIconoTipo(hallazgo.tipo)}</div>
        <div style={styles.findingMeta}>
          <div style={{
            ...styles.confidenceBadge,
            backgroundColor: `${getColorConfianza(hallazgo.nivelConfianza)}20`,
            color: getColorConfianza(hallazgo.nivelConfianza),
          }}>
            Confianza {hallazgo.nivelConfianza}
          </div>
          <span style={styles.findingDate}>
            Descubierto: {hallazgo.fechaDescubrimiento.toLocaleDateString('es-ES')}
          </span>
        </div>
      </div>
      
      <h3 style={styles.findingTitle}>{hallazgo.titulo}</h3>
      <p style={styles.findingDescription}>{hallazgo.descripcion}</p>
      
      <div style={styles.findingKey}>
        <span style={styles.findingKeyLabel}>Hallazgo clave:</span>
        <span style={styles.findingKeyValue}>{hallazgo.hallazgoClave}</span>
      </div>
      
      <div style={styles.findingEvidence}>
        <div style={styles.evidenceItem}>
          <span style={styles.evidenceLabel}>Correlación:</span>
          <span style={styles.evidenceValue}>{Math.abs(Math.round(hallazgo.evidencia.correlacion * 100))}%</span>
        </div>
        <div style={styles.evidenceItem}>
          <span style={styles.evidenceLabel}>p-value:</span>
          <span style={styles.evidenceValue}>{hallazgo.evidencia.significanciaP}</span>
        </div>
        <div style={styles.evidenceItem}>
          <span style={styles.evidenceLabel}>Muestras:</span>
          <span style={styles.evidenceValue}>{hallazgo.evidencia.nMuestras}</span>
        </div>
      </div>
      
      <div style={styles.findingInterpretation}>
        <strong>Interpretación:</strong> {hallazgo.interpretacion}
      </div>
      
      {hallazgo.recomendaciones.length > 0 && (
        <div style={styles.findingRecommendations}>
          <strong>Recomendaciones:</strong>
          <ul style={styles.recommendationsList}>
            {hallazgo.recomendaciones.map((rec, i) => (
              <li key={i} style={styles.recommendationItem}>{rec}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const TarjetaPrediccion: React.FC<{ prediccion: PrediccionTemporal }> = ({ prediccion }) => {
  const getPrecisionColor = (precision: number) => {
    if (precision >= 0.7) return '#10b981';
    if (precision >= 0.5) return '#3b82f6';
    return '#f59e0b';
  };

  return (
    <div style={styles.predictionCard}>
      <div style={styles.predictionHeader}>
        <div style={styles.predictionIcon}>🔮</div>
        <div>
          <div style={styles.predictionTitle}>Predicción basada en datos</div>
          <div style={{
            ...styles.predictionAccuracy,
            color: getPrecisionColor(prediccion.precision),
          }}>
            Precisión: {Math.round(prediccion.precision * 100)}%
          </div>
        </div>
      </div>
      
      <div style={styles.predictionContent}>
        <p style={styles.predictionText}>
          Basándonos en tu historial de <strong>{prediccion.variable}</strong>, 
          podemos predecir <strong>{prediccion.eventoPredicho}</strong> con 
          <strong>{prediccion.horizonte} horas</strong> de anticipación.
        </p>
        
        <div style={styles.predictionFactors}>
          <span style={styles.predictionFactorsLabel}>Basado en:</span>
          <div style={styles.predictionFactorsList}>
            {prediccion.basadoEn.map((factor, i) => (
              <span key={i} style={styles.predictionFactor}>{factor}</span>
            ))}
          </div>
        </div>
        
        <div style={styles.predictionExample}>
          <strong>Ejemplo reciente:</strong>
          <div style={styles.predictionExampleContent}>
            Fecha: {prediccion.ejemplo.fecha.toLocaleDateString('es-ES')}
            <br />
            Valor observado: {prediccion.ejemplo.valorObservado}
            <br />
            Predicción: {prediccion.ejemplo.eventoOcurrio ? '✓ Correcta' : '✗ Incorrecta'}
          </div>
        </div>
      </div>
    </div>
  );
};

const TarjetaContexto: React.FC<{ contexto: AnalisisContextual }> = ({ contexto }) => {
  return (
    <div style={styles.contextCard}>
      <div style={styles.contextHeader}>
        <span style={styles.contextIcon}>🎯</span>
        <h3 style={styles.contextTitle}>{contexto.contexto}</h3>
      </div>
      
      <p style={styles.contextInterpretation}>{contexto.interpretacion}</p>
      
      <div style={styles.contextMetrics}>
        {contexto.metricasDiferentes.map((metrica, i) => (
          <div key={i} style={{
            ...styles.contextMetric,
            backgroundColor: metrica.significativo ? '#dbeafe' : '#f9fafb',
          }}>
            <div style={styles.contextMetricName}>{metrica.metrica}</div>
            <div style={styles.contextMetricComparison}>
              <span style={styles.contextMetricContext}>{Math.round(metrica.promedioContexto * 10) / 10}</span>
              <span style={{
                ...styles.contextMetricDiff,
                color: metrica.diferenciaPorcentaje > 0 ? '#10b981' : '#ef4444',
              }}>
                {metrica.diferenciaPorcentaje > 0 ? '+' : ''}{Math.round(metrica.diferenciaPorcentaje * 10) / 10}%
              </span>
              <span style={styles.contextMetricGlobal}>vs {Math.round(metrica.promedioGlobal * 10) / 10}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ============================================================================
// Componente Principal
// ============================================================================

export const CorrelationInsights: React.FC<PropsCorrelaciones> = ({
  correlaciones,
  hallazgos,
  predicciones,
  analisisContextuales,
  cargando = false,
}) => {
  const [filtroActivo, setFiltroActivo] = useState<'todos' | 'significativas' | 'sintomas' | 'metricas'>('todos');
  const [pestanaActiva, setPestanaActiva] = useState<'hallazgos' | 'correlaciones' | 'predicciones' | 'contexto'>('hallazgos');

  // Filtrar correlaciones
  const correlacionesFiltradas = useMemo(() => {
    switch (filtroActivo) {
      case 'significativas':
        return correlaciones.filter(c => c.significativa);
      case 'sintomas':
        return correlaciones.filter(c => c.tipo === 'sintoma-metrica');
      case 'metricas':
        return correlaciones.filter(c => c.tipo === 'metrica-metrica');
      default:
        return correlaciones;
    }
  }, [correlaciones, filtroActivo]);

  // Ordenar hallazgos por confianza
  const hallazgosOrdenados = useMemo(() => {
    const orden = { alta: 0, media: 1, baja: 2 };
    return [...hallazgos].sort((a, b) => orden[a.nivelConfianza] - orden[b.nivelConfianza]);
  }, [hallazgos]);

  if (cargando) {
    return (
      <div style={styles.loadingContainer}>
        <div style={styles.loadingSpinner}>🔍</div>
        <p>Buscando patrones en tus datos de salud...</p>
        <p style={styles.loadingSubtext}>Esto puede tomar un momento mientras analizamos correlaciones estadísticas</p>
      </div>
    );
  }

  const hayDatos = correlaciones.length > 0 || hallazgos.length > 0 || predicciones.length > 0 || analisisContextuales.length > 0;

  if (!hayDatos) {
    return (
      <div style={styles.emptyContainer}>
        <div style={styles.emptyIcon}>📊</div>
        <h2 style={styles.emptyTitle}>Sin datos suficientes</h2>
        <p style={styles.emptyText}>
          Necesitamos más datos para encontrar correlaciones significativas. 
          Continúa registrando tus síntomas y métricas de salud.
        </p>
        <div style={styles.emptyTips}>
          <strong>Consejos:</strong>
          <ul>
            <li>Registra tus síntomas regularmente</li>
            <li>Importa datos de Apple Health</li>
            <li>Agrega resultados de laboratorio</li>
            <li>Registra tu estado de ánimo</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div>
          <h1 style={styles.title}>Descubrimiento de Patrones</h1>
          <p style={styles.subtitle}>Correlaciones y hallazgos de tus datos de salud</p>
        </div>
        <div style={styles.statsSummary}>
          <div style={styles.statItem}>
            <span style={styles.statValue}>{hallazgos.length}</span>
            <span style={styles.statLabel}>Hallazgos</span>
          </div>
          <div style={styles.statItem}>
            <span style={styles.statValue}>{correlaciones.filter(c => c.significativa).length}</span>
            <span style={styles.statLabel}>Correlaciones</span>
          </div>
          <div style={styles.statItem}>
            <span style={styles.statValue}>{predicciones.length}</span>
            <span style={styles.statLabel}>Predicciones</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={styles.tabs}>
        {[
          { id: 'hallazgos', label: `💡 Hallazgos (${hallazgos.length})` },
          { id: 'correlaciones', label: `📈 Correlaciones (${correlaciones.length})` },
          { id: 'predicciones', label: `🔮 Predicciones (${predicciones.length})` },
          { id: 'contexto', label: `🎯 Contexto (${analisisContextuales.length})` },
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

      {/* Filtros para correlaciones */}
      {pestanaActiva === 'correlaciones' && (
        <div style={styles.filterBar}>
          <span style={styles.filterLabel}>Filtrar:</span>
          {[
            { id: 'todos', label: 'Todos' },
            { id: 'significativas', label: 'Significativas' },
            { id: 'sintomas', label: 'Con síntomas' },
            { id: 'metricas', label: 'Métricas' },
          ].map(filtro => (
            <button
              key={filtro.id}
              style={{
                ...styles.filterButton,
                ...(filtroActivo === filtro.id ? styles.filterButtonActive : {}),
              }}
              onClick={() => setFiltroActivo(filtro.id as typeof filtroActivo)}
            >
              {filtro.label}
            </button>
          ))}
        </div>
      )}

      {/* Contenido */}
      <div style={styles.content}>
        {/* Hallazgos */}
        {pestanaActiva === 'hallazgos' && (
          <div style={styles.tabContent}>
            {hallazgosOrdenados.length === 0 ? (
              <div style={styles.emptyState}>
                <span style={styles.emptyStateIcon}>🔍</span>
                <p>Aún no se han detectado hallazgos significativos</p>
              </div>
            ) : (
              <div style={styles.findingsList}>
                {hallazgosOrdenados.map((hallazgo, i) => (
                  <TarjetaHallazgo key={hallazgo.id} hallazgo={hallazgo} index={i} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Correlaciones */}
        {pestanaActiva === 'correlaciones' && (
          <div style={styles.tabContent}>
            {correlacionesFiltradas.length === 0 ? (
              <div style={styles.emptyState}>
                <span style={styles.emptyStateIcon}>📉</span>
                <p>No se encontraron correlaciones con estos filtros</p>
              </div>
            ) : (
              <>
                <div style={styles.correlationsInfo}>
                  Mostrando {correlacionesFiltradas.length} de {correlaciones.length} correlaciones
                  {filtroActivo !== 'todos' && ` (filtrado: ${filtroActivo})`}
                </div>
                <div style={styles.correlationsGrid}>
                  {correlacionesFiltradas.map((correlacion, i) => (
                    <TarjetaCorrelacion key={i} correlacion={correlacion} />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* Predicciones */}
        {pestanaActiva === 'predicciones' && (
          <div style={styles.tabContent}>
            {predicciones.length === 0 ? (
              <div style={styles.emptyState}>
                <span style={styles.emptyStateIcon}>🔮</span>
                <p>Aún no hay suficientes datos para generar predicciones</p>
              </div>
            ) : (
              <div style={styles.predictionsList}>
                {predicciones.map((prediccion, i) => (
                  <TarjetaPrediccion key={i} prediccion={prediccion} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Contexto */}
        {pestanaActiva === 'contexto' && (
          <div style={styles.tabContent}>
            {analisisContextuales.length === 0 ? (
              <div style={styles.emptyState}>
                <span style={styles.emptyStateIcon}>🎯</span>
                <p>No hay análisis contextuales disponibles</p>
              </div>
            ) : (
              <div style={styles.contextList}>
                {analisisContextuales.map((contexto, i) => (
                  <TarjetaContexto key={i} contexto={contexto} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer informativo */}
      <div style={styles.footer}>
        <div style={styles.footerIcon}>🧠</div>
        <div style={styles.footerText}>
          <strong>¿Cómo funciona?</strong> Los hallazgos se generan mediante análisis estadístico 
          de correlaciones (coeficiente de Pearson) con pruebas de significancia (p-value < 0.05). 
          Requieren al menos 5 puntos de datos para ser considerados.
        </div>
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
    textAlign: 'center',
    padding: '64px',
    color: '#6b7280',
  },
  loadingSpinner: {
    fontSize: '48px',
    animation: 'pulse 2s infinite',
    marginBottom: '16px',
  },
  loadingSubtext: {
    fontSize: '14px',
    color: '#9ca3af',
    marginTop: '8px',
  },
  emptyContainer: {
    textAlign: 'center',
    padding: '48px',
  },
  emptyIcon: {
    fontSize: '64px',
    marginBottom: '16px',
  },
  emptyTitle: {
    fontSize: '20px',
    fontWeight: 600,
    color: '#1a1a2e',
    margin: '0 0 8px 0',
  },
  emptyText: {
    fontSize: '15px',
    color: '#6b7280',
    maxWidth: '500px',
    margin: '0 auto 24px',
  },
  emptyTips: {
    textAlign: 'left',
    display: 'inline-block',
    padding: '20px',
    backgroundColor: '#f9fafb',
    borderRadius: '12px',
    fontSize: '14px',
    color: '#4b5563',
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
  statsSummary: {
    display: 'flex',
    gap: '24px',
  },
  statItem: {
    textAlign: 'center',
  },
  statValue: {
    fontSize: '28px',
    fontWeight: 700,
    color: '#3b82f6',
    display: 'block',
  },
  statLabel: {
    fontSize: '12px',
    color: '#6b7280',
  },
  tabs: {
    display: 'flex',
    gap: '8px',
    marginBottom: '20px',
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
  filterBar: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '20px',
    padding: '12px',
    backgroundColor: '#f9fafb',
    borderRadius: '8px',
  },
  filterLabel: {
    fontSize: '14px',
    fontWeight: 600,
    color: '#4b5563',
    marginRight: '8px',
  },
  filterButton: {
    padding: '6px 12px',
    border: '1px solid #d1d5db',
    borderRadius: '6px',
    backgroundColor: '#ffffff',
    fontSize: '13px',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  filterButtonActive: {
    backgroundColor: '#3b82f6',
    color: '#ffffff',
    borderColor: '#3b82f6',
  },
  content: {
    minHeight: '400px',
  },
  tabContent: {
    animation: 'fadeIn 0.3s ease-out',
  },
  emptyState: {
    textAlign: 'center',
    padding: '48px',
    color: '#6b7280',
  },
  emptyStateIcon: {
    fontSize: '48px',
    display: 'block',
    marginBottom: '16px',
  },
  findingsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  findingCard: {
    padding: '24px',
    backgroundColor: '#f9fafb',
    borderRadius: '12px',
    borderLeft: '4px solid',
  },
  findingHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '12px',
  },
  findingIcon: {
    fontSize: '28px',
  },
  findingMeta: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '4px',
  },
  confidenceBadge: {
    padding: '4px 10px',
    borderRadius: '20px',
    fontSize: '11px',
    fontWeight: 700,
    textTransform: 'uppercase',
  },
  findingDate: {
    fontSize: '12px',
    color: '#9ca3af',
  },
  findingTitle: {
    fontSize: '18px',
    fontWeight: 600,
    color: '#1a1a2e',
    margin: '0 0 8px 0',
  },
  findingDescription: {
    fontSize: '14px',
    color: '#4b5563',
    margin: '0 0 12px 0',
    lineHeight: 1.6,
  },
  findingKey: {
    padding: '12px',
    backgroundColor: '#eff6ff',
    borderRadius: '8px',
    marginBottom: '12px',
  },
  findingKeyLabel: {
    fontSize: '12px',
    fontWeight: 600,
    color: '#3b82f6',
    textTransform: 'uppercase',
    marginRight: '8px',
  },
  findingKeyValue: {
    fontSize: '14px',
    fontWeight: 600,
    color: '#1e40af',
  },
  findingEvidence: {
    display: 'flex',
    gap: '16px',
    marginBottom: '12px',
  },
  evidenceItem: {
    fontSize: '13px',
  },
  evidenceLabel: {
    color: '#6b7280',
    marginRight: '4px',
  },
  evidenceValue: {
    fontWeight: 600,
    color: '#1a1a2e',
  },
  findingInterpretation: {
    fontSize: '14px',
    color: '#4b5563',
    marginBottom: '12px',
    padding: '12px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
  },
  findingRecommendations: {
    fontSize: '14px',
    color: '#4b5563',
  },
  recommendationsList: {
    marginTop: '8px',
    paddingLeft: '20px',
  },
  recommendationItem: {
    padding: '4px 0',
  },
  correlationsInfo: {
    fontSize: '13px',
    color: '#6b7280',
    marginBottom: '16px',
  },
  correlationsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '16px',
  },
  correlationCard: {
    padding: '20px',
    backgroundColor: '#f9fafb',
    borderRadius: '12px',
    border: '2px solid',
  },
  correlationHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px',
  },
  correlationVariables: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    flexWrap: 'wrap',
  },
  correlationVar: {
    fontSize: '14px',
    fontWeight: 600,
    color: '#1a1a2e',
  },
  correlationArrow: {
    fontSize: '18px',
  },
  correlationStrength: {
    padding: '6px 12px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: 700,
  },
  correlationDesc: {
    fontSize: '14px',
    color: '#4b5563',
    margin: '0 0 12px 0',
  },
  correlationMeta: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  significanceBadge: {
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: 600,
  },
  correlationSamples: {
    fontSize: '12px',
    color: '#9ca3af',
  },
  correlationConfidence: {
    fontSize: '12px',
    color: '#9ca3af',
  },
  predictionsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  predictionCard: {
    padding: '24px',
    backgroundColor: '#faf5ff',
    borderRadius: '12px',
    border: '1px solid #e9d5ff',
  },
  predictionHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '16px',
  },
  predictionIcon: {
    fontSize: '32px',
  },
  predictionTitle: {
    fontSize: '16px',
    fontWeight: 600,
    color: '#1a1a2e',
  },
  predictionAccuracy: {
    fontSize: '13px',
    fontWeight: 600,
  },
  predictionContent: {
    fontSize: '14px',
    color: '#4b5563',
  },
  predictionText: {
    margin: '0 0 16px 0',
    lineHeight: 1.6,
  },
  predictionFactors: {
    marginBottom: '16px',
  },
  predictionFactorsLabel: {
    fontSize: '13px',
    fontWeight: 600,
    color: '#6b7280',
    display: 'block',
    marginBottom: '8px',
  },
  predictionFactorsList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  predictionFactor: {
    padding: '4px 10px',
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    fontSize: '12px',
    color: '#6b7280',
  },
  predictionExample: {
    padding: '12px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    fontSize: '13px',
  },
  predictionExampleContent: {
    marginTop: '8px',
    color: '#6b7280',
  },
  contextList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  contextCard: {
    padding: '24px',
    backgroundColor: '#f0fdf4',
    borderRadius: '12px',
    border: '1px solid '#86efac',
  },
  contextHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '12px',
  },
  contextIcon: {
    fontSize: '24px',
  },
  contextTitle: {
    fontSize: '18px',
    fontWeight: 600,
    color: '#1a1a2e',
    margin: 0,
  },
  contextInterpretation: {
    fontSize: '14px',
    color: '#4b5563',
    marginBottom: '16px',
  },
  contextMetrics: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '12px',
  },
  contextMetric: {
    padding: '16px',
    borderRadius: '8px',
  },
  contextMetricName: {
    fontSize: '13px',
    fontWeight: 600,
    color: '#6b7280',
    marginBottom: '8px',
  },
  contextMetricComparison: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  contextMetricContext: {
    fontSize: '20px',
    fontWeight: 700,
    color: '#1a1a2e',
  },
  contextMetricDiff: {
    fontSize: '14px',
    fontWeight: 600,
    padding: '2px 8px',
    borderRadius: '4px',
    backgroundColor: '#ffffff',
  },
  contextMetricGlobal: {
    fontSize: '14px',
    color: '#6b7280',
  },
  footer: {
    display: 'flex',
    gap: '12px',
    marginTop: '32px',
    padding: '16px',
    backgroundColor: '#f3f4f6',
    borderRadius: '12px',
  },
  footerIcon: {
    fontSize: '24px',
  },
  footerText: {
    fontSize: '13px',
    color: '#6b7280',
    lineHeight: 1.6,
  },
};

export default CorrelationInsights;
