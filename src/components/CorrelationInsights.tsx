/**
 * CorrelationInsights.tsx
 * 
 * Componente para mostrar hallazgos de correlaciones y patrones descubiertos
 * 
 * P4.1.3 - UI Component
 */

import React, { useState } from 'react';
import type {
  HallazgoPatron,
  Correlacion,
  PrediccionTemporal,
  AnalisisContextual,
} from '../../../core/import/apple-health/correlations';

interface Props {
  hallazgos: HallazgoPatron[];
  correlaciones: Correlacion[];
  predicciones: PrediccionTemporal[];
  analisisContextuales: AnalisisContextual[];
}

type FiltroTipo = 'todos' | 'sintoma-metrica' | 'metrica-metrica' | 'comportamiento-resultado' | 'temporal' | 'anomalia';
type FiltroConfianza = 'todas' | 'alta' | 'media' | 'baja';

const TIPO_LABELS: Record<HallazgoPatron['tipo'], { label: string; icono: string; color: string }> = {
  'sintoma-metrica': { label: 'Sintoma-Metrica', icono: '🤒', color: '#e74c3c' },
  'metrica-metrica': { label: 'Metrica-Metrica', icono: '📊', color: '#3498db' },
  'comportamiento-resultado': { label: 'Comportamiento-Resultado', icono: '🎯', color: '#2ecc71' },
  'temporal': { label: 'Temporal', icono: '⏰', color: '#9b59b6' },
  'anomalia': { label: 'Anomalia', icono: '⚠️', color: '#f39c12' },
};

const CONFIANZA_LABELS: Record<HallazgoPatron['nivelConfianza'], { label: string; color: string }> = {
  'alta': { label: 'Alta confianza', color: '#2ecc71' },
  'media': { label: 'Confianza media', color: '#f39c12' },
  'baja': { label: 'Confianza baja', color: '#e74c3c' },
};

export const CorrelationInsights: React.FC<Props> = ({
  hallazgos,
  correlaciones,
  predicciones,
  analisisContextuales,
}) => {
  const [filtroTipo, setFiltroTipo] = useState<FiltroTipo>('todos');
  const [filtroConfianza, setFiltroConfianza] = useState<FiltroConfianza>('todas');
  const [hallazgoExpandido, setHallazgoExpandido] = useState<string | null>(null);
  const [vistaActiva, setVistaActiva] = useState<'hallazgos' | 'correlaciones' | 'predicciones' | 'contextos'>('hallazgos');

  const hallazgosFiltrados = hallazgos.filter(h => {
    const cumpleTipo = filtroTipo === 'todos' || h.tipo === filtroTipo;
    const cumpleConfianza = filtroConfianza === 'todas' || h.nivelConfianza === filtroConfianza;
    return cumpleTipo && cumpleConfianza;
  });

  const renderFiltros = () => (
    <div className="insights-filtros">
      <div className="filtro-grupo">
        <label>Tipo:</label>
        <select 
          value={filtroTipo} 
          onChange={(e) => setFiltroTipo(e.target.value as FiltroTipo)}
        >
          <option value="todos">Todos los tipos</option>
          <option value="sintoma-metrica">🤒 Síntoma-Métrica</option>
          <option value="metrica-metrica">📊 Métrica-Métrica</option>
          <option value="comportamiento-resultado">🎯 Comportamiento-Resultado</option>
          <option value="temporal">⏰ Temporal</option>
          <option value="anomalia">⚠️ Anomalía</option>
        </select>
      </div>

      <div className="filtro-grupo">
        <label>Confianza:</label>
        <select 
          value={filtroConfianza} 
          onChange={(e) => setFiltroConfianza(e.target.value as FiltroConfianza)}
        >
          <option value="todas">Todas las confianzas</option>
          <option value="alta">🟢 Alta</option>
          <option value="media">🟡 Media</option>
          <option value="baja">🔴 Baja</option>
        </select>
      </div>
    </div>
  );

  const renderTarjetaHallazgo = (hallazgo: HallazgoPatron) => {
    const tipoInfo = TIPO_LABELS[hallazgo.tipo];
    const confianzaInfo = CONFIANZA_LABELS[hallazgo.nivelConfianza];
    const expandido = hallazgoExpandido === hallazgo.id;

    return (
      <div 
        key={hallazgo.id}
        className={`hallazgo-card ${expandido ? 'expandido' : ''}`}
        style={{ borderLeftColor: tipoInfo.color }}
      >
        <div 
          className="hallazgo-header"
          onClick={() => setHallazgoExpandido(expandido ? null : hallazgo.id)}
        >
          <div className="hallazgo-tipo-badge" style={{ backgroundColor: tipoInfo.color }}>
            <span className="badge-icono">{tipoInfo.icono}</span>
            <span className="badge-label">{tipoInfo.label}</span>
          </div>

          <div className="hallazgo-confianza-badge" style={{ color: confianzaInfo.color }}>
            {confianzaInfo.label}
          </div>

          <h4 className="hallazgo-titulo">{hallazgo.titulo}</h4>
          <p className="hallazgo-descripcion">{hallazgo.descripcion}</p>

          <div className="hallazgo-preview">
            <span className="preview-evidencia">
              📊 Correlación: {Math.abs(Math.round(hallazgo.evidencia.correlacion * 100))}% | 
              p-value: {hallazgo.evidencia.significanciaP.toFixed(3)}
            </span>
            <span className="expandir-icono">{expandido ? '▼' : '▶'}</span>
          </div>
        </div>

        {expandido && (
          <div className="hallazgo-contenido">
            <div className="hallazgo-seccion">
              <h5>🔍 Hallazgo Clave</h5>
              <p>{hallazgo.hallazgoClave}</p>
            </div>

            <div className="hallazgo-seccion">
              <h5>📈 Evidencia Estadística</h5>
              <div className="evidencia-grid">
                <div className="evidencia-item">
                  <span className="evidencia-label">Correlación:</span>
                  <span className="evidencia-valor">
                    {hallazgo.evidencia.correlacion > 0 ? '+' : ''}
                    {Math.round(hallazgo.evidencia.correlacion * 100)}%
                  </span>
                </div>
                <div className="evidencia-item">
                  <span className="evidencia-label">Significancia (p):</span>
                  <span className="evidencia-valor">
                    {hallazgo.evidencia.significanciaP < 0.001 ? '< 0.001' : hallazgo.evidencia.significanciaP.toFixed(3)}
                    {hallazgo.evidencia.significanciaP < 0.05 && ' ✅'}
                  </span>
                </div>
                <div className="evidencia-item">
                  <span className="evidencia-label">Muestras:</span>
                  <span className="evidencia-valor">{hallazgo.evidencia.nMuestras}</span>
                </div>
              </div>
            </div>

            <div className="hallazgo-seccion">
              <h5>💭 Interpretación</h5>
              <p className="interpretacion-texto">{hallazgo.interpretacion}</p>
            </div>

            <div className="hallazgo-seccion">
              <h5>💡 Recomendaciones</h5>
              <ul className="recomendaciones-lista">
                {hallazgo.recomendaciones.map((rec, i) => (
                  <li key={i}>{rec}</li>
                ))}
              </ul>
            </div>

            <div className="hallazgo-footer">
              <span className="hallazgo-fecha">
                Descubierto: {hallazgo.fechaDescubrimiento.toLocaleDateString()}
              </span>
              <div className="hallazgo-metricas">
                {hallazgo.metricasRelacionadas.map(m => (
                  <span key={m} className="metrica-tag">{m}</span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderCorrelaciones = () => (
    <div className="correlaciones-lista">
      {correlaciones.length === 0 ? (
        <p className="sin-datos">No se encontraron correlaciones significativas con los datos actuales.</p>
      ) : (
        correlaciones.map((corr, i) => (
          <div 
            key={i}
            className={`correlacion-card fortaleza-${corr.fortaleza}`}
          >
            <div className="correlacion-header">
              <span className="correlacion-variable">{corr.variableA}</span>
              <span className="correlacion-flecha">
                {corr.direccion === 'positiva' ? '↗️' 
                  : corr.direccion === 'negativa' ? '↘️' 
                  : '➡️'}
              </span>
              <span className="correlacion-variable">{corr.variableB}</span>
            </div>

            <div className="correlacion-stats">
              <div className="correlacion-coeficiente"
                style={{
                  backgroundColor: corr.direccion === 'positiva' 
                    ? `rgba(46, 204, 113, ${Math.abs(corr.coeficiente)})`
                    : corr.direccion === 'negativa'
                    ? `rgba(231, 76, 60, ${Math.abs(corr.coeficiente)})`
                    : '#95a5a6'
                }}
              >
                <span className="coef-valor">{corr.coeficiente > 0 ? '+' : ''}{corr.coeficiente}</span>
                <span className="coef-label">correlación {corr.fortaleza.replace('-', ' ')}</span>
              </div>

              <div className="correlacion-detalles">
                <span className="detalle-p">p = {corr.significanciaP.toFixed(3)}</span>
                <span className="detalle-n">n = {corr.nMuestras}</span>
                <span className={`detalle-sig ${corr.significativa ? 'significativa' : ''}`}>
                  {corr.significativa ? '✅ Significativa' : 'No significativa'}
                </span>
              </div>
            </div>

            <p className="correlacion-descripcion">{corr.descripcion}</p>
            <p className="correlacion-interpretacion">{corr.interpretacion}</p>

            <div className="correlacion-periodo">
              <span>Período: {corr.periodo.inicio.toLocaleDateString()} - {corr.periodo.fin.toLocaleDateString()}</span>
            </div>
          </div>
        ))
      )}
    </div>
  );

  const renderPredicciones = () => (
    <div className="predicciones-lista">
      {predicciones.length === 0 ? (
        <p className="sin-datos">No hay suficientes datos para generar predicciones.</p>
      ) : (
        predicciones.map((pred, i) => (
          <div key={i} className="prediccion-card">
            <div className="prediccion-header">
              <span className="prediccion-icono">🔮</span>
              <h4>{pred.eventoPredicho}</h4>
            </div>

            <div className="prediccion-stats">
              <div className="pred-stat">
                <span className="pred-label">Variable base:</span>
                <span className="pred-valor">{pred.variable}</span>
              </div>
              <div className="pred-stat">
                <span className="pred-label">Horizonte:</span>
                <span className="pred-valor">{pred.horizonte}h</span>
              </div>
              <div className="pred-stat">
                <span className="pred-label">Precisión:</span>
                <span className="pred-valor precision">{Math.round(pred.precision * 100)}%</span>
              </div>
            </div>

            <div className="prediccion-basado">
              <span>Basado en: {pred.basadoEn.join(', ')}</span>
            </div>

            <div className="prediccion-ejemplo">
              <span className="ejemplo-label">Ejemplo histórico:</span>
              <span className="ejemplo-fecha">{pred.ejemplo.fecha.toLocaleDateString()}</span>
              <span className="ejemplo-valor">{pred.ejemplo.valorObservado}</span>
              <span className="ejemplo-resultado">
                {pred.ejemplo.eventoOcurrio ? '✅ Ocurrió' : '❌ No ocurrió'}
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );

  const renderContextos = () => (
    <div className="contextos-lista">
      {analisisContextuales.length === 0 ? (
        <p className="sin-datos">No hay análisis contextuales disponibles.</p>
      ) : (
        analisisContextuales.map((ctx, i) => (
          <div key={i} className="contexto-card">
            <h4>🌍 {ctx.contexto}</h4>
            <p className="contexto-interpretacion">{ctx.interpretacion}</p>

            <div className="contexto-metricas">
              <h5>Métricas diferentes:</h5>
              <div className="metricas-comparacion">
                {ctx.metricasDiferentes.map((m, j) => (
                  <div 
                    key={j} 
                    className={`comparacion-item ${m.significativo ? 'significativo' : ''}`}
                  >
                    <span className="comp-metrica">{m.metrica}</span>
                    <div className="comp-valores">
                      <span className="comp-contexto">{Math.round(m.promedioContexto * 10) / 10}</span>
                      <span className="comp-vs">vs</span>
                      <span className="comp-global">{Math.round(m.promedioGlobal * 10) / 10}</span>
                    </div>
                    <span className={`comp-diferencia ${m.diferenciaPorcentaje > 0 ? 'positivo' : 'negativo'}`}>
                      {m.diferenciaPorcentaje > 0 ? '+' : ''}{Math.round(m.diferenciaPorcentaje * 10) / 10}%
                      {m.significativo && ' ⭐'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );

  return (
    <div className="correlation-insights">
      <header className="insights-header">
        <h2>🔍 Descubrimientos y Correlaciones</h2>
        <p className="insights-descripcion">
          Patrones estadísticamente significativos descubiertos en tus datos de salud.
        </p>
      </header>

      <nav className="insights-tabs">
        {[
          { key: 'hallazgos', label: 'Hallazgos', icono: '💡', count: hallazgos.length },
          { key: 'correlaciones', label: 'Correlaciones', icono: '📈', count: correlaciones.length },
          { key: 'predicciones', label: 'Predicciones', icono: '🔮', count: predicciones.length },
          { key: 'contextos', label: 'Contextos', icono: '🌍', count: analisisContextuales.length },
        ].map((tab) => (
          <button
            key={tab.key}
            className={`insights-tab ${vistaActiva === tab.key ? 'activo' : ''}`}
            onClick={() => setVistaActiva(tab.key as typeof vistaActiva)}
          >
            <span className="tab-icono">{tab.icono}</span>
            <span className="tab-label">{tab.label}</span>
            <span className="tab-count">{tab.count}</span>
          </button>
        ))}
      </nav>

      {vistaActiva === 'hallazgos' && renderFiltros()}

      <div className="insights-content">
        {vistaActiva === 'hallazgos' && (
          hallazgosFiltrados.length > 0 ? (
            hallazgosFiltrados.map(renderTarjetaHallazgo)
          ) : (
            <p className="sin-datos">
              No hay hallazgos que coincidan con los filtros seleccionados.
            </p>
          )
        )}
        {vistaActiva === 'correlaciones' && renderCorrelaciones()}
        {vistaActiva === 'predicciones' && renderPredicciones()}
        {vistaActiva === 'contextos' && renderContextos()}
      </div>
    </div>
  );
};

export default CorrelationInsights;
