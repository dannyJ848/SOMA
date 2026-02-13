/**
 * TimeSeriesChart.tsx
 * 
 * Componente de gráfico de series temporales interactivo
 * Soporta zoom, selección, tooltips y múltiples series
 * 
 * P4.1.3 - UI Component
 */

import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import type {
  ConfiguracionGrafico,
  SerieDatos,
  PuntoDatos,
  RangoVisualizacion,
} from '../../../core/import/apple-health/visualizations';

interface Props {
  configuracion: ConfiguracionGrafico;
  altura?: number;
  onPuntoClick?: (punto: PuntoDatos, serie: SerieDatos) => void;
  onRangoCambio?: (rango: RangoVisualizacion) => void;
}

export const TimeSeriesChart: React.FC<Props> = ({
  configuracion,
  altura = 300,
  onPuntoClick,
  onRangoCambio,
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [rangoZoom, setRangoZoom] = useState<RangoVisualizacion | null>(null);
  const [seleccion, setSeleccion] = useState<{ serieId: string; puntoIndex: number } | null>(null);
  const [tooltip, setTooltip] = useState<{
    visible: boolean;
    x: number;
    y: number;
    contenido: React.ReactNode;
  }>({ visible: false, x: 0, y: 0, contenido: null });
  const [arrastrando, setArrastrando] = useState(false);
  const [inicioArrastre, setInicioArrastre] = useState<{ x: number; y: number } | null>(null);

  const margenes = { arriba: 20, derecha: 60, abajo: 40, izquierda: 60 };
  const ancho = svgRef.current?.clientWidth || 800;
  const alto = altura;

  const rangoActual = rangoZoom || configuracion.rango;

  // Escalas
  const escalaX = useCallback(
    (timestamp: number) => {
      const rangoTiempo = rangoActual.fin.getTime() - rangoActual.inicio.getTime();
      const tiempoRelativo = timestamp - rangoActual.inicio.getTime();
      return (
        margenes.izquierda +
        (tiempoRelativo / rangoTiempo) * (ancho - margenes.izquierda - margenes.derecha)
      );
    },
    [ancho, rangoActual, margenes.izquierda, margenes.derecha]
  );

  const escalaY = useCallback(
    (valor: number, min: number, max: number) => {
      const rangoValor = max - min || 1;
      const proporcion = (valor - min) / rangoValor;
      return alto - margenes.abajo - proporcion * (alto - margenes.arriba - margenes.abajo);
    },
    [alto, margenes.arriba, margenes.abajo]
  );

  // Encontrar rangos de valores
  const rangosY = useMemo(() => {
    const rangos: Record<
      string,
      { min: number; max: number; etiqueta?: string }
    > = {};

    for (const serie of configuracion.series.filter(s => s.visible)) {
      if (serie.datos.length === 0) continue;

      const valores = serie.datos.map((d) => d.y);
      const min = configuracion.escalay?.min ?? Math.min(...valores) * 0.9;
      const max = configuracion.escalay?.max ?? Math.max(...valores) * 1.1;

      const ejeKey = serie.ejeY || 'izquierdo';
      if (!rangos[ejeKey] || rangos[ejeKey].min > min) {
        rangos[ejeKey] = { min, max, etiqueta: configuracion.escalay?.etiqueta };
      }
    }

    return rangos;
  }, [configuracion.series, configuracion.escalay, configuracion.escalay2]);

  // Generar líneas de cuadrícula
  const lineasCuadricula = useMemo(() => {
    const lineas: Array<{ x1: number; y1: number; x2: number; y2: number }> = [];

    // Líneas horizontales (eje Y)
    const pasosY = 5;
    for (let i = 0; i <= pasosY; i++) {
      const y = margenes.arriba + (i / pasosY) * (alto - margenes.arriba - margenes.abajo);
      lineas.push({
        x1: margenes.izquierda,
        y1: y,
        x2: ancho - margenes.derecha,
        y2: y,
      });
    }

    // Líneas verticales (eje X) - días o horas según el rango
    const rangoTiempo = rangoActual.fin.getTime() - rangoActual.inicio.getTime();
    const dias = rangoTiempo / (1000 * 60 * 60 * 24);
    const numLineasX = Math.min(10, Math.max(3, Math.floor(dias)));

    for (let i = 0; i <= numLineasX; i++) {
      const x =
        margenes.izquierda +
        (i / numLineasX) * (ancho - margenes.izquierda - margenes.derecha);
      lineas.push({
        x1: x,
        y1: margenes.arriba,
        x2: x,
        y2: alto - margenes.abajo,
      });
    }

    return lineas;
  }, [ancho, alto, margenes, rangoActual]);

  // Formatear fecha para eje X
  const formatearFechaEje = useCallback(
    (timestamp: number) => {
      const fecha = new Date(timestamp);
      const rangoTiempo = rangoActual.fin.getTime() - rangoActual.inicio.getTime();
      const dias = rangoTiempo / (1000 * 60 * 60 * 24);

      if (dias <= 1) {
        return fecha.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
      } else if (dias <= 7) {
        return fecha.toLocaleDateString('es-ES', { weekday: 'short', day: 'numeric' });
      } else {
        return fecha.toLocaleDateString('es-ES', { month: 'short', day: 'numeric' });
      }
    },
    [rangoActual]
  );

  // Manejar clic en punto
  const handlePuntoClick = useCallback(
    (punto: PuntoDatos, serie: SerieDatos, index: number) => {
      setSeleccion({ serieId: serie.id, puntoIndex: index });
      if (onPuntoClick) {
        onPuntoClick(punto, serie);
      }
    },
    [onPuntoClick]
  );

  // Manejar mouse sobre punto (tooltip)
  const handlePuntoHover = useCallback(
    (event: React.MouseEvent, punto: PuntoDatos, serie: SerieDatos) => {
      if (!configuracion.mostrarTooltip) return;

      const rect = svgRef.current?.getBoundingClientRect();
      if (!rect) return;

      setTooltip({
        visible: true,
        x: event.clientX - rect.left + 10,
        y: event.clientY - rect.top - 10,
        contenido: (
          <div className="chart-tooltip">
            <div className="tooltip-serie" style={{ color: serie.color }}>
              {serie.nombre}
            </div>
            <div className="tooltip-valor">{punto.etiqueta || punto.y}</div>
            <div className="tooltip-fecha">
              {new Date(punto.x).toLocaleString('es-ES')}
            </div>
            {punto.metadata && Object.keys(punto.metadata).length > 0 && (
              <div className="tooltip-metadata">
                {Object.entries(punto.metadata).map(([k, v]) => (
                  <div key={k}>{k}: {String(v)}</div>
                ))}
              </div>
            )}
          </div>
        ),
      });
    },
    [configuracion.mostrarTooltip]
  );

  const handleMouseLeave = useCallback(() => {
    setTooltip((prev) => ({ ...prev, visible: false }));
  }, []);

  // Manejar zoom con rueda del ratón
  const handleWheel = useCallback(
    (event: React.WheelEvent) => {
      if (!configuracion.zoomHabilitado) return;
      event.preventDefault();

      const factor = event.deltaY > 0 ? 1.2 : 0.8;
      const rangoTiempo = rangoActual.fin.getTime() - rangoActual.inicio.getTime();
      const nuevoRango = rangoTiempo * factor;

      const centro = (rangoActual.inicio.getTime() + rangoActual.fin.getTime()) / 2;
      const nuevoInicio = new Date(centro - nuevoRango / 2);
      const nuevoFin = new Date(centro + nuevoRango / 2);

      const nuevoRangoZoom = { inicio: nuevoInicio, fin: nuevoFin };
      setRangoZoom(nuevoRangoZoom);

      if (onRangoCambio) {
        onRangoCambio(nuevoRangoZoom);
      }
    },
    [configuracion.zoomHabilitado, rangoActual, onRangoCambio]
  );

  // Reset zoom
  const resetZoom = useCallback(() => {
    setRangoZoom(null);
    if (onRangoCambio) {
      onRangoCambio(configuracion.rango);
    }
  }, [configuracion.rango, onRangoCambio]);

  // Renderizar path para línea
  const renderPathLinea = (serie: SerieDatos, rangoY: { min: number; max: number }) => {
    if (serie.datos.length === 0) return null;

    const puntos = serie.datos.map((d) => ({
      x: escalaX(d.x),
      y: escalaY(d.y, rangoY.min, rangoY.max),
    }));

    let path = `M ${puntos[0].x} ${puntos[0].y}`;
    for (let i = 1; i < puntos.length; i++) {
      path += ` L ${puntos[i].x} ${puntos[i].y}`;
    }

    return path;
  };

  // Renderizar área bajo la curva
  const renderPathArea = (serie: SerieDatos, rangoY: { min: number; max: number }) => {
    if (serie.datos.length === 0) return null;

    const puntos = serie.datos.map((d) => ({
      x: escalaX(d.x),
      y: escalaY(d.y, rangoY.min, rangoY.max),
    }));

    const yBase = escalaY(rangoY.min, rangoY.min, rangoY.max);

    let path = `M ${puntos[0].x} ${yBase}`;
    path += ` L ${puntos[0].x} ${puntos[0].y}`;
    for (let i = 1; i < puntos.length; i++) {
      path += ` L ${puntos[i].x} ${puntos[i].y}`;
    }
    path += ` L ${puntos[puntos.length - 1].x} ${yBase}`;
    path += ' Z';

    return path;
  };

  if (configuracion.series.length === 0) {
    return (
      <div className="time-series-chart time-series-chart--vacio" style={{ height: altura }}>
        <p>No hay datos para mostrar</p>
      </div>
    );
  }

  return (
    <div className="time-series-chart">
      <header className="chart-header">
        <h4 className="chart-titulo">{configuracion.titulo}</h4>
        {configuracion.subtitulo && (
          <span className="chart-subtitulo">{configuracion.subtitulo}</span>
        )}
        {configuracion.zoomHabilitado && rangoZoom && (
          <button className="chart-reset-zoom" onClick={resetZoom}>
            🔄 Reset zoom
          </button>
        )}
      </header>

      <div className="chart-container" style={{ height: altura }}>
        <svg
          ref={svgRef}
          className="chart-svg"
          width="100%"
          height={altura}
          onWheel={handleWheel}
          onMouseLeave={handleMouseLeave}
        >
          <defs>
            <clipPath id="chart-clip">
              <rect
                x={margenes.izquierda}
                y={margenes.arriba}
                width={ancho - margenes.izquierda - margenes.derecha}
                height={alto - margenes.arriba - margenes.abajo}
              />
            </clipPath>
          </defs>

          {/* Fondo */}
          <rect
            x={0}
            y={0}
            width={ancho}
            height={alto}
            fill="#fafafa"
          />

          {/* Líneas de cuadrícula */}
          <g className="chart-grid">
            {lineasCuadricula.map((linea, i) => (
              <line
                key={i}
                x1={linea.x1}
                y1={linea.y1}
                x2={linea.x2}
                y2={linea.y2}
                stroke="#e0e0e0"
                strokeWidth={1}
                strokeDasharray="4,4"
              />
            ))}
          </g>

          {/* Zonas destacadas */}
          {configuracion.zonasDestacadas?.map((zona, i) => {
            const x1 = escalaX(zona.inicio);
            const x2 = escalaX(zona.fin);
            return (
              <rect
                key={i}
                x={x1}
                y={margenes.arriba}
                width={x2 - x1}
                height={alto - margenes.arriba - margenes.abajo}
                fill={zona.color}
                opacity={zona.opacidad || 0.2}
              />
            );
          })}

          {/* Series de datos */}
          <g className="chart-series" clipPath="url(#chart-clip)">
            {configuracion.series.filter(s => s.visible).map((serie) => {
              const rangoY =
                serie.ejeY === 'derecho' ? rangosY['derecho'] || rangosY['izquierdo'] : rangosY['izquierdo'];
              if (!rangoY) return null;

              return (
                <g key={serie.id} className={`serie-${serie.tipo}`}>
                  {/* Área (si aplica) */}
                  {serie.tipo === 'area' && (
                    <path
                      d={renderPathArea(serie, rangoY)}
                      fill={serie.color}
                      opacity={0.3}
                    />
                  )}

                  {/* Línea */}
                  {(serie.tipo === 'linea' || serie.tipo === 'area') && (
                    <path
                      d={renderPathLinea(serie, rangoY)}
                      fill="none"
                      stroke={serie.color}
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  )}

                  {/* Dispersión */}
                  {serie.tipo === 'dispersion' && serie.datos.map((d, i) => (
                    <circle
                      key={i}
                      cx={escalaX(d.x)}
                      cy={escalaY(d.y, rangoY.min, rangoY.max)}
                      r={seleccion?.serieId === serie.id && seleccion?.puntoIndex === i ? 6 : 4}
                      fill={serie.color}
                      stroke="#fff"
                      strokeWidth={seleccion?.serieId === serie.id && seleccion?.puntoIndex === i ? 2 : 1}
                      onClick={() => handlePuntoClick(d, serie, i)}
                      onMouseEnter={(e) => handlePuntoHover(e, d, serie)}
                      onMouseLeave={handleMouseLeave}
                      style={{ cursor: configuracion.interactivo ? 'pointer' : 'default' }}
                    />
                  ))}

                  {/* Barras */}
                  {serie.tipo === 'barra' && serie.datos.map((d, i) => {
                    const x = escalaX(d.x);
                    const y = escalaY(d.y, rangoY.min, rangoY.max);
                    const yBase = escalaY(rangoY.min, rangoY.min, rangoY.max);
                    const anchoBarra = Math.max(2, (ancho - margenes.izquierda - margenes.derecha) / serie.datos.length * 0.8);
                    
                    return (
                      <rect
                        key={i}
                        x={x - anchoBarra / 2}
                        y={y}
                        width={anchoBarra}
                        height={yBase - y}
                        fill={serie.color}
                        opacity={0.7}
                        rx={2}
                        onClick={() => handlePuntoClick(d, serie, i)}
                        onMouseEnter={(e) => handlePuntoHover(e, d, serie)}
                        onMouseLeave={handleMouseLeave}
                        style={{ cursor: configuracion.interactivo ? 'pointer' : 'default' }}
                      />
                    );
                  })}

                  {/* Puntos (para líneas también) */}
                  {(serie.tipo === 'linea' || serie.tipo === 'area') &&
                    serie.datos.map((d, i) => (
                      <circle
                        key={i}
                        cx={escalaX(d.x)}
                        cy={escalaY(d.y, rangoY.min, rangoY.max)}
                        r={seleccion?.serieId === serie.id && seleccion?.puntoIndex === i ? 5 : 3}
                        fill={serie.color}
                        stroke="#fff"
                        strokeWidth={1}
                        onClick={() => handlePuntoClick(d, serie, i)}
                        onMouseEnter={(e) => handlePuntoHover(e, d, serie)}
                        onMouseLeave={handleMouseLeave}
                        style={{ cursor: configuracion.interactivo ? 'pointer' : 'default' }}
                      />
                    ))
                  }
                </g>
              );
            })}
          </g>

          {/* Eje X */}
          <g className="chart-axis chart-axis-x">
            <line
              x1={margenes.izquierda}
              y1={alto - margenes.abajo}
              x2={ancho - margenes.derecha}
              y2={alto - margenes.abajo}
              stroke="#333"
              strokeWidth={1}
            />

            {/* Ticks X */}
            {Array.from({ length: 6 }).map((_, i) => {
              const x =
                margenes.izquierda +
                (i / 5) * (ancho - margenes.izquierda - margenes.derecha);
              const timestamp =
                rangoActual.inicio.getTime() +
                (i / 5) * (rangoActual.fin.getTime() - rangoActual.inicio.getTime());

              return (
                <g key={i}>
                  <line
                    x1={x}
                    y1={alto - margenes.abajo}
                    x2={x}
                    y2={alto - margenes.abajo + 5}
                    stroke="#333"
                    strokeWidth={1}
                  />
                  <text
                    x={x}
                    y={alto - margenes.abajo + 20}
                    textAnchor="middle"
                    fontSize={10}
                    fill="#666"
                  >
                    {formatearFechaEje(timestamp)}
                  </text>
                </g>
              );
            })}
          </g>

          {/* Eje Y izquierdo */}
          {rangosY['izquierdo'] && (
            <g className="chart-axis chart-axis-y">
              <line
                x1={margenes.izquierda}
                y1={margenes.arriba}
                x2={margenes.izquierda}
                y2={alto - margenes.abajo}
                stroke="#333"
                strokeWidth={1}
              />

              {/* Ticks Y */}
              {Array.from({ length: 6 }).map((_, i) => {
                const y =
                  margenes.arriba +
                  (i / 5) * (alto - margenes.arriba - margenes.abajo);
                const valor =
                  rangosY['izquierdo'].max -
                  (i / 5) * (rangosY['izquierdo'].max - rangosY['izquierdo'].min);

                return (
                  <g key={i}>
                    <line
                      x1={margenes.izquierda - 5}
                      y1={y}
                      x2={margenes.izquierda}
                      y2={y}
                      stroke="#333"
                      strokeWidth={1}
                    />
                    <text
                      x={margenes.izquierda - 10}
                      y={y + 4}
                      textAnchor="end"
                      fontSize={10}
                      fill="#666"
                    >
                      {Math.round(valor)}
                    </text>
                  </g>
                );
              })}

              {configuracion.escalay?.etiqueta && (
                <text
                  x={20}
                  y={alto / 2}
                  textAnchor="middle"
                  fontSize={11}
                  fill="#333"
                  transform={`rotate(-90, 20, ${alto / 2})`}
                >
                  {configuracion.escalay.etiqueta}
                </text>
              )}
            </g>
          )}

          {/* Eje Y derecho */}
          {rangosY['derecho'] && (
            <g className="chart-axis chart-axis-y2">
              <line
                x1={ancho - margenes.derecha}
                y1={margenes.arriba}
                x2={ancho - margenes.derecha}
                y2={alto - margenes.abajo}
                stroke="#333"
                strokeWidth={1}
              />

              {Array.from({ length: 6 }).map((_, i) => {
                const y =
                  margenes.arriba +
                  (i / 5) * (alto - margenes.arriba - margenes.abajo);
                const valor =
                  rangosY['derecho'].max -
                  (i / 5) * (rangosY['derecho'].max - rangosY['derecho'].min);

                return (
                  <g key={i}>
                    <line
                      x1={ancho - margenes.derecha}
                      y1={y}
                      x2={ancho - margenes.derecha + 5}
                      y2={y}
                      stroke="#333"
                      strokeWidth={1}
                    />
                    <text
                      x={ancho - margenes.derecha + 10}
                      y={y + 4}
                      textAnchor="start"
                      fontSize={10}
                      fill="#666"
                    >
                      {Math.round(valor)}
                    </text>
                  </g>
                );
              })}

              {configuracion.escalay2?.etiqueta && (
                <text
                  x={ancho - 20}
                  y={alto / 2}
                  textAnchor="middle"
                  fontSize={11}
                  fill="#333"
                  transform={`rotate(90, ${ancho - 20}, ${alto / 2})`}
                >
                  {configuracion.escalay2.etiqueta}
                </text>
              )}
            </g>
          )}
        </svg>

        {/* Tooltip */}
        {tooltip.visible && (
          <div
            className="chart-tooltip-container"
            style={{
              left: tooltip.x,
              top: tooltip.y,
            }}
          >
            {tooltip.contenido}
          </div>
        )}
      </div>

      {/* Leyenda */}
      {configuracion.mostrarLeyenda && (
        <div className="chart-legend">
          {configuracion.series.map((serie) => (
            <div
              key={serie.id}
              className={`legend-item ${serie.visible ? '' : 'disabled'}`}
            >
              <span
                className="legend-color"
                style={{ backgroundColor: serie.color }}
              />
              <span className="legend-label">{serie.nombre}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TimeSeriesChart;
