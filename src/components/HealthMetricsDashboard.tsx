/**
 * HealthMetricsDashboard.tsx
 * 
 * Dashboard de métricas profundas de salud
 * Muestra HRV, sueño, SpO2, ejercicio y más con visualizaciones
 * 
 * P4.1.3 - UI Component
 */

import React, { useState, useMemo } from 'react';
import type {
  EstadisticasDiariasAvanzadas,
  LecturaHRV,
  SesionEjercicioDetallada,
} from '../../../core/import/apple-health/deep-import';
import type {
  AnalisisHRV,
  AnalisisSueno,
  AnalisisFCReposo,
} from '../../../core/import/apple-health/analysis';
import {
  COLORES_METRICAS,
  COLORES_ZONAS_FC,
  COLORES_ETAPA_SUENO,
} from '../../../core/import/apple-health/visualizations';

interface Props {
  estadisticas: EstadisticasDiariasAvanzadas[];
  lecturasHRV: LecturaHRV[];
  sesionesEjercicio: SesionEjercicioDetallada[];
  analisisHRV?: AnalisisHRV | null;
  analisisSueno?: AnalisisSueno | null;
  analisisFCReposo?: AnalisisFCReposo | null;
}

type Periodo = '7d' | '30d' | '90d';
type Vista = 'resumen' | 'hrv' | 'sueno' | 'ejercicio' | 'respiratorio';

export const HealthMetricsDashboard: React.FC<Props> = ({
  estadisticas,
  lecturasHRV,
  sesionesEjercicio,
  analisisHRV,
  analisisSueno,
  analisisFCReposo,
}) => {
  const [periodo, setPeriodo] = useState<Periodo>('30d');
  const [vista, setVista] = useState<Vista>('resumen');

  const datosFiltrados = useMemo(() => {
    const dias = periodo === '7d' ? 7 : periodo === '30d' ? 30 : 90;
    const fechaLimite = new Date();
    fechaLimite.setDate(fechaLimite.getDate() - dias);
    return estadisticas.filter(e => e.fecha >= fechaLimite);
  }, [estadisticas, periodo]);

  const promedioHRV = useMemo(() => {
    const valores = datosFiltrados
      .filter(e => e.hrvPromedio !== null)
      .map(e => e.hrvPromedio!);
    return valores.length > 0 
      ? Math.round(valores.reduce((a, b) => a + b, 0) / valores.length) 
      : null;
  }, [datosFiltrados]);

  const promedioSueno = useMemo(() => {
    const valores = datosFiltrados
      .filter(e => e.suenoTotalMinutos > 0)
      .map(e => e.suenoTotalMinutos);
    return valores.length > 0 
      ? Math.round(valores.reduce((a, b) => a + b, 0) / valores.length / 60 * 10) / 10
      : null;
  }, [datosFiltrados]);

  const promedioFCReposo = useMemo(() => {
    const valores = datosFiltrados
      .filter(e => e.fcReposo !== null)
      .map(e => e.fcReposo!);
    return valores.length > 0 
      ? Math.round(valores.reduce((a, b) => a + b, 0) / valores.length) 
      : null;
  }, [datosFiltrados]);

  const totalEjercicios = useMemo(() => {
    const fechaLimite = new Date();
    fechaLimite.setDate(fechaLimite.getDate() - (periodo === '7d' ? 7 : periodo === '30d' ? 30 : 90));
    return sesionesEjercicio.filter(s => s.inicio >= fechaLimite).length;
  }, [sesionesEjercicio, periodo]);

  const renderTarjetaResumen = () => (
    <div className="dashboard-resumen">
      <div className="tarjetas-grid">
        <div className="tarjeta-metrica tarjeta-hrv">
          <div className="tarjeta-icono" style={{ color: COLORES_METRICAS.hrv }}>💜</div>
          <div className="tarjeta-contenido">
            <div className="tarjeta-valor">
              {promedioHRV ? `${promedioHRV} ms` : '--'}
            </div>
            <div className="tarjeta-etiqueta">HRV Promedio</div>
            {analisisHRV && (
              <div className={`tarjeta-estado estado-${analisisHRV.estadoRecuperacion}`}>
                {analisisHRV.estadoRecuperacion === 'excelente' && '🌟 Excelente'}
                {analisisHRV.estadoRecuperacion === 'bueno' && '✅ Bueno'}
                {analisisHRV.estadoRecuperacion === 'moderado' && '⚠️ Moderado'}
                {analisisHRV.estadoRecuperacion === 'malo' && '🔴 Deficiente'}
                {analisisHRV.estadoRecuperacion === 'crítico' && '⛔ Crítico'}
              </div>
            )}
          </div>
        </div>

        <div className="tarjeta-metrica tarjeta-sueno">
          <div className="tarjeta-icono" style={{ color: COLORES_METRICAS.sueno }}>😴</div>
          <div className="tarjeta-contenido">
            <div className="tarjeta-valor">
              {promedioSueno ? `${promedioSueno}h` : '--'}
            </div>
            <div className="tarjeta-etiqueta">Sueño Promedio</div>
            {analisisSueno && (
              <div className={`tarjeta-estado estado-${analisisSueno.calidadGeneral}`}>
                {analisisSueno.calidadGeneral === 'excelente' && '🌟 Excelente'}
                {analisisSueno.calidadGeneral === 'buena' && '✅ Buena'}
                {analisisSueno.calidadGeneral === 'regular' && '⚠️ Regular'}
                {analisisSueno.calidadGeneral === 'mala' && '🔴 Mala'}
                {analisisSueno.calidadGeneral === 'crítica' && '⛔ Crítica'}
              </div>
            )}
          </div>
        </div>

        <div className="tarjeta-metrica tarjeta-fc">
          <div className="tarjeta-icono" style={{ color: COLORES_METRICAS['frecuencia-cardiaca'] }}>❤️</div>
          <div className="tarjeta-contenido">
            <div className="tarjeta-valor">
              {promedioFCReposo ? `${promedioFCReposo} bpm` : '--'}
            </div>
            <div className="tarjeta-etiqueta">FC en Reposo</div>
            {analisisFCReposo && (
              <div className={`tarjeta-estado estado-${analisisFCReposo.estadoCardiovascular}`}>
                {analisisFCReposo.estadoCardiovascular === 'excelente' && '🏃 Atleta'}
                {analisisFCReposo.estadoCardiovascular === 'bueno' && '✅ Bueno'}
                {analisisFCReposo.estadoCardiovascular === 'normal' && '👍 Normal'}
                {analisisFCReposo.estadoCardiovascular === 'atención' && '⚠️ Atención'}
                {analisisFCReposo.estadoCardiovascular === 'consultar' && '👨‍⚕️ Consultar'}
              </div>
            )}
          </div>
        </div>

        <div className="tarjeta-metrica tarjeta-ejercicio">
          <div className="tarjeta-icono" style={{ color: COLORES_METRICAS.calorias }}>🏃</div>
          <div className="tarjeta-contenido">
            <div className="tarjeta-valor">{totalEjercicios}</div>
            <div className="tarjeta-etiqueta">Entrenamientos</div>
            <div className="tarjeta-estado">
              {totalEjercicios >= 3 ? '✅ Activo' : '💪 ¡A entrenar!'}
            </div>
          </div>
        </div>
      </div>

      {analisisHRV?.recomendaciones.length > 0 && (
        <div className="recomendaciones-panel">
          <h4>💡 Recomendaciones</h4>
          <ul>
            {analisisHRV.recomendaciones.slice(0, 3).map((rec, i) => (
              <li key={i}>{rec}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );

  const renderVistaHRV = () => (
    <div className="vista-detalle vista-hrv">
      <h3>💜 Análisis de HRV</h3>
      
      {analisisHRV ? (
        <>
          <div className="hrv-estadisticas">
            <div className="hrv-grafico-simplificado">
              <h4>Tendencia de HRV</h4>
              <div className="tendencia-linea">
                {analisisHRV.tendencia.tendenciaDiaria.slice(-14).map((d, i) => (
                  <div 
                    key={i}
                    className="tendencia-punto"
                    style={{
                      height: `${Math.min(100, (d.valor / 100) * 100)}%`,
                      backgroundColor: d.valor < 35 ? '#e74c3c' : d.valor < 50 ? '#f39c12' : '#2ecc71',
                    }}
                    title={`${d.fecha.toLocaleDateString()}: ${d.valor} ms`}
                  />
                ))}
              </div>
              <div className="tendencia-etiquetas">
                <span>{analisisHRV.tendencia.tendenciaDiaria.slice(-14)[0]?.fecha.toLocaleDateString()}</span>
                <span>Hoy</span>
              </div>
            </div>

            <div className="hrv-metricas-grid">
              <div className="metrica-caja">
                <span className="metrica-valor">{analisisHRV.tendencia.valorPromedio}</span>
                <span className="metrica-etiqueta">Promedio (ms)</span>
              </div>
              <div className="metrica-caja">
                <span className="metrica-valor">{analisisHRV.tendencia.valorMinimo}</span>
                <span className="metrica-etiqueta">Mínimo (ms)</span>
              </div>
              <div className="metrica-caja">
                <span className="metrica-valor">{analisisHRV.tendencia.valorMaximo}</span>
                <span className="metrica-etiqueta">Máximo (ms)</span>
              </div>
              <div className="metrica-caja">
                <span className="metrica-valor">{analisisHRV.tendencia.desviacionEstandar}</span>
                <span className="metrica-etiqueta">Desviación</span>
              </div>
            </div>
          </div>

          <div className="hrv-patrones">
            <h4>Patrones Detectados</h4>
            <div className="patrones-grid">
              <div className="patron-item">
                <span className="patron-icono">📅</span>
                <span className="patron-texto">
                  Mayor HRV: <strong>{analisisHRV.patrones.diaSemanaMayorHRV}</strong>
                </span>
              </div>
              <div className="patron-item">
                <span className="patron-icono">📉</span>
                <span className="patron-texto">
                  Menor HRV: <strong>{analisisHRV.patrones.diaSemanaMenorHRV}</strong>
                </span>
              </div>
              {analisisHRV.patrones.correlacionSueno !== null && (
                <div className="patron-item">
                  <span className="patron-icono">😴</span>
                  <span className="patron-texto">
                    Correlación sueño: <strong>{analisisHRV.patrones.correlacionSueno > 0 ? '+' : ''}
                    {Math.round(analisisHRV.patrones.correlacionSueno * 100)}%</strong>
                  </span>
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <p className="sin-datos">No hay suficientes datos de HRV para el período seleccionado.</p>
      )}
    </div>
  );

  const renderVistaSueno = () => (
    <div className="vista-detalle vista-sueno">
      <h3>😴 Análisis del Sueño</h3>

      {analisisSueno ? (
        <>
          <div className="sueno-puntuacion">
            <div className="puntuacion-circulo"
              style={{
                background: `conic-gradient(
                  ${analisisSueno.puntuacionCalidad >= 70 ? '#2ecc71' : analisisSueno.puntuacionCalidad >= 50 ? '#f39c12' : '#e74c3c'} 
                  ${analisisSueno.puntuacionCalidad * 3.6}deg, 
                  #ecf0f1 0deg
                )`
              }}
            >
              <span className="puntuacion-valor">{analisisSueno.puntuacionCalidad}</span>
            </div>
            <div className="puntuacion-info">
              <div className="puntuacion-titulo">Calidad del Sueño</div>
              <div className="puntuacion-estado">
                {analisisSueno.calidadGeneral === 'excelente' && '🌟 Excelente'}
                {analisisSueno.calidadGeneral === 'buena' && '✅ Buena'}
                {analisisSueno.calidadGeneral === 'regular' && '⚠️ Regular'}
                {analisisSueno.calidadGeneral === 'mala' && '🔴 Mala'}
                {analisisSueno.calidadGeneral === 'crítica' && '⛔ Crítica'}
              </div>
            </div>
          </div>

          <div className="sueno-distribucion">
            <h4>Distribución de Etapas</h4>
            <div className="distribucion-barras">
              <div className="distribucion-barra">
                <div 
                  className="barra-fill"
                  style={{ 
                    width: `${analisisSueno.distribucionEtapas.profundo}%`,
                    backgroundColor: COLORES_ETAPA_SUENO['profundo'],
                  }}
                />
                <span className="barra-etiqueta">Profundo {analisisSueno.distribucionEtapas.profundo}%</span>
              </div>
              <div className="distribucion-barra">
                <div 
                  className="barra-fill"
                  style={{ 
                    width: `${analisisSueno.distribucionEtapas.rem}%`,
                    backgroundColor: COLORES_ETAPA_SUENO['rem'],
                  }}
                />
                <span className="barra-etiqueta">REM {analisisSueno.distribucionEtapas.rem}%</span>
              </div>
              <div className="distribucion-barra">
                <div 
                  className="barra-fill"
                  style={{ 
                    width: `${analisisSueno.distribucionEtapas.ligero}%`,
                    backgroundColor: COLORES_ETAPA_SUENO['ligero'],
                  }}
                />
                <span className="barra-etiqueta">Ligero {analisisSueno.distribucionEtapas.ligero}%</span>
              </div>
              <div className="distribucion-barra">
                <div 
                  className="barra-fill"
                  style={{ 
                    width: `${analisisSueno.distribucionEtapas.despierto}%`,
                    backgroundColor: COLORES_ETAPA_SUENO['despierto'],
                  }}
                />
                <span className="barra-etiqueta">Despierto {analisisSueno.distribucionEtapas.despierto}%</span>
              </div>
            </div>
          </div>

          <div className="sueno-metricas">
            <div className="metrica-sueno">
              <span className="metrica-icono">⏱️</span>
              <span className="metrica-valor">{Math.round(analisisSueno.duracionPromedio / 60 * 10) / 10}h</span>
              <span className="metrica-etiqueta">Promedio</span>
            </div>
            <div className="metrica-sueno">
              <span className="metrica-icono">📊</span>
              <span className="metrica-valor">{analisisSueno.eficienciaPromedio}%</span>
              <span className="metrica-etiqueta">Eficiencia</span>
            </div>
            <div className="metrica-sueno">
              <span className="metrica-icono">🌙</span>
              <span className="metrica-valor">{analisisSueno.patrones.latenciaPromedio || '--'} min</span>
              <span className="metrica-etiqueta">Latencia</span>
            </div>
            <div className="metrica-sueno">
              <span className="metrica-icono">👀</span>
              <span className="metrica-valor">{Math.round(analisisSueno.patrones.despertaresPromedio * 10) / 10}</span>
              <span className="metrica-etiqueta">Despertares</span>
            </div>
          </div>

          <div className="sueno-comparacion">
            <h4>Entre Semana vs Fin de Semana</h4>
            <div className="comparacion-barras">
              <div className="comparacion-item">
                <span className="comparacion-label">Entre semana</span>
                <div className="comparacion-barra">
                  <div 
                    className="comparacion-fill"
                    style={{ width: '100%' }}
                  />
                </div>
                <span className="comparacion-valor">
                  {Math.round(analisisSueno.patrones.comparacionFinDeSemana.entreSemana / 60 * 10) / 10}h
                </span>
              </div>
              <div className="comparacion-item">
                <span className="comparacion-label">Fin de semana</span>
                <div className="comparacion-barra">
                  <div 
                    className="comparacion-fill"
                    style={{ 
                      width: `${Math.min(100, ((analisisSueno.patrones.comparacionFinDeSemana.finDeSemana / 
                        analisisSueno.patrones.comparacionFinDeSemana.entreSemana) || 1) * 100)}%`,
                      backgroundColor: analisisSueno.patrones.comparacionFinDeSemana.diferenciaPorcentaje > 10 ? '#2ecc71' : '#f39c12',
                    }}
                  />
                </div>
                <span className="comparacion-valor">
                  {Math.round(analisisSueno.patrones.comparacionFinDeSemana.finDeSemana / 60 * 10) / 10}h
                  {analisisSueno.patrones.comparacionFinDeSemana.diferenciaPorcentaje > 0 && ' ↑'}
                </span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p className="sin-datos">No hay suficientes datos de sueño para el período seleccionado.</p>
      )}
    </div>
  );

  const renderVistaEjercicio = () => (
    <div className="vista-detalle vista-ejercicio">
      <h3>🏃 Entrenamientos Recientes</h3>

      <div className="ejercicio-lista">
        {sesionesEjercicio.slice(-10).reverse().map((sesion) => (
          <div key={sesion.id} className="ejercicio-item">
            <div className="ejercicio-header">
              <span className="ejercicio-tipo">{sesion.tipo}</span>
              <span className="ejercicio-fecha">
                {sesion.inicio.toLocaleDateString()}
              </span>
            </div>
            
            <div className="ejercicio-stats">
              <span className="ejercicio-stat">⏱️ {sesion.duracionMinutos} min</span>
              {sesion.frecuenciaCardiacaPromedio && (
                <span className="ejercicio-stat">❤️ {sesion.frecuenciaCardiacaPromedio} bpm avg</span>
              )}
              {sesion.frecuenciaCardiacaMaxima && (
                <span className="ejercicio-stat">🔥 {sesion.frecuenciaCardiacaMaxima} bpm max</span>
              )}
              {sesion.calorias && (
                <span className="ejercicio-stat">🔥 {sesion.calorias} kcal</span>
              )}
            </div>

            {sesion.zonas.length > 0 && (
              <div className="ejercicio-zonas">
                {sesion.zonas.map((zona) => (
                  <div 
                    key={zona.id}
                    className="zona-barra"
                    style={{
                      width: `${zona.duracionSegundos / 60 / sesion.duracionMinutos * 100}%`,
                      backgroundColor: COLORES_ZONAS_FC[zona.zona],
                    }}
                    title={`Zona ${zona.zona}: ${Math.round(zona.duracionSegundos / 60)} min`}
                  />
                ))}
              </div>
            )}
          </div>
        ))}

        {sesionesEjercicio.length === 0 && (
          <p className="sin-datos">No hay registros de ejercicio en el período seleccionado.</p>
        )}
      </div>
    </div>
  );

  const renderVistaRespiratorio = () => (
    <div className="vista-detalle vista-respiratorio">
      <h3>🫁 Métricas Respiratorias</h3>

      <div className="respiratorio-grid">
        <div className="respiratorio-seccion">
          <h4>Frecuencia Respiratoria</h4>
          <div className="fr-estadisticas">
            {datosFiltrados.filter(e => e.frPromedio !== null).length > 0 ? (
              <>
                <div className="fr-grafico">
                  {datosFiltrados
                    .filter(e => e.frPromedio !== null)
                    .slice(-14)
                    .map((e, i) => (
                      <div 
                        key={i}
                        className="fr-barra"
                        style={{ height: `${(e.frPromedio! / 20) * 100}%` }}
                        title={`${e.frPromedio} rpm`}
                      />
                    ))}
                </div>
                <div className="fr-promedio">
                  <span className="fr-valor">
                    {Math.round(
                      datosFiltrados
                        .filter(e => e.frPromedio !== null)
                        .reduce((sum, e) => sum + e.frPromedio!, 0) /
                      datosFiltrados.filter(e => e.frPromedio !== null).length * 10
                    ) / 10}
                  </span>
                  <span className="fr-etiqueta">rpm promedio</span>
                </div>
              </>
            ) : (
              <p className="sin-datos">No hay datos de frecuencia respiratoria.</p>
            )}
          </div>
        </div>

        <div className="respiratorio-seccion">
          <h4>Oxígeno en Sangre (SpO2)</h4>
          <div className="spo2-estadisticas">
            {datosFiltrados.filter(e => e.spo2Promedio !== null).length > 0 ? (
              <>
                <div className="spo2-promedio-grande">
                  <span className="spo2-valor">
                    {Math.round(
                      datosFiltrados
                        .filter(e => e.spo2Promedio !== null)
                        .reduce((sum, e) => sum + e.spo2Promedio!, 0) /
                      datosFiltrados.filter(e => e.spo2Promedio !== null).length * 10
                    ) / 10}
                  </span>
                  <span className="spo2-unidad">%</span>
                  <span className="spo2-etiqueta">Promedio</span>
                </div>
                
                <div className="spo2-alertas">
                  <div className="spo2-alerta">
                    <span className="alerta-label">Eventos {'<'} 95%:</span>
                    <span className="alerta-valor">
                      {datosFiltrados.reduce((sum, e) => sum + e.eventosBajo95, 0)}
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <p className="sin-datos">No hay datos de SpO2.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="health-metrics-dashboard">
      <header className="dashboard-header">
        <h2>📊 Métricas de Salud Avanzadas</h2>
        
        <div className="dashboard-controles">
          <nav className="vista-tabs">
            {[
              { key: 'resumen', label: '📋 Resumen', icon: '📋' },
              { key: 'hrv', label: '💜 HRV', icon: '💜' },
              { key: 'sueno', label: '😴 Sueño', icon: '😴' },
              { key: 'ejercicio', label: '🏃 Ejercicio', icon: '🏃' },
              { key: 'respiratorio', label: '🫁 Respiratorio', icon: '🫁' },
            ].map((tab) => (
              <button
                key={tab.key}
                className={`vista-tab ${vista === tab.key ? 'activo' : ''}`}
                onClick={() => setVista(tab.key as Vista)}
              >
                <span className="tab-icono">{tab.icon}</span>
                <span className="tab-label">{tab.label}</span>
              </button>
            ))}
          </nav>

          <div className="periodo-selector">
            {[
              { key: '7d', label: '7 días' },
              { key: '30d', label: '30 días' },
              { key: '90d', label: '90 días' },
            ].map((p) => (
              <button
                key={p.key}
                className={`periodo-btn ${periodo === p.key ? 'activo' : ''}`}
                onClick={() => setPeriodo(p.key as Periodo)}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="dashboard-content">
        {vista === 'resumen' && renderTarjetaResumen()}
        {vista === 'hrv' && renderVistaHRV()}
        {vista === 'sueno' && renderVistaSueno()}
        {vista === 'ejercicio' && renderVistaEjercicio()}
        {vista === 'respiratorio' && renderVistaRespiratorio()}
      </main>
    </div>
  );
};

export default HealthMetricsDashboard;
