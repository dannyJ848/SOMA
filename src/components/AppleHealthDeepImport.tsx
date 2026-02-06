/**
 * AppleHealthDeepImport.tsx
 * 
 * Componente de importación profunda de Apple Health
 * Solicita permisos para cada tipo de dato y configura la importación
 * 
 * P4.1.3 - UI Component
 */

import React, { useState, useCallback } from 'react';
import type {
  PermisosImportacion,
  ConfiguracionImportacion,
  ProgresoImportacion,
} from '../../../core/import/apple-health/deep-import';

interface Props {
  onImportar: (config: ConfiguracionImportacion) => Promise<void>;
  onCancelar: () => void;
  progreso?: ProgresoImportacion;
  estaImportando: boolean;
}

const PERMISOS_LABELS: Record<keyof PermisosImportacion, { 
  titulo: string; 
  descripcion: string;
  icono: string;
}> = {
  frecuenciaCardiaca: {
    titulo: 'Frecuencia Cardíaca',
    descripcion: 'Lecturas individuales cada pocos segundos durante todo el día',
    icono: '❤️',
  },
  hrv: {
    titulo: 'Variabilidad del Ritmo Cardíaco (HRV)',
    descripcion: 'Métricas de recuperación y estrés (SDNN, RMSSD)',
    icono: '💜',
  },
  suenoEtapas: {
    titulo: 'Etapas del Sueño',
    descripcion: 'REM, profundo, ligero, despierto con tiempos exactos',
    icono: '😴',
  },
  spo2: {
    titulo: 'Oxígeno en Sangre (SpO2)',
    descripcion: 'Saturación de oxígeno durante sueño y reposo',
    icono: '🫁',
  },
  ejercicioZonas: {
    titulo: 'Zonas de Ejercicio',
    descripcion: 'Intensidad por zonas de frecuencia cardíaca en entrenamientos',
    icono: '🏃',
  },
  frecuenciaRespiratoria: {
    titulo: 'Frecuencia Respiratoria',
    descripcion: 'Respiraciones por minuto durante el sueño',
    icono: '🌬️',
  },
  exposicionAudio: {
    titulo: 'Exposición al Audio',
    descripcion: 'Niveles de decibeles para salud auditiva',
    icono: '🔊',
  },
};

export const AppleHealthDeepImport: React.FC<Props> = ({
  onImportar,
  onCancelar,
  progreso,
  estaImportando,
}) => {
  const [paso, setPaso] = useState<1 | 2 | 3>(1);
  const [archivo, setArchivo] = useState<string>('');
  const [permisos, setPermisos] = useState<PermisosImportacion>({
    frecuenciaCardiaca: false,
    hrv: false,
    suenoEtapas: false,
    spo2: false,
    ejercicioZonas: false,
    frecuenciaRespiratoria: false,
    exposicionAudio: false,
  });
  const [usarRangoFechas, setUsarRangoFechas] = useState(false);
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');

  const togglePermiso = useCallback((clave: keyof PermisosImportacion) => {
    setPermisos(prev => ({
      ...prev,
      [clave]: !prev[clave],
    }));
  }, []);

  const seleccionarTodos = useCallback(() => {
    setPermisos({
      frecuenciaCardiaca: true,
      hrv: true,
      suenoEtapas: true,
      spo2: true,
      ejercicioZonas: true,
      frecuenciaRespiratoria: true,
      exposicionAudio: true,
    });
  }, []);

  const deseleccionarTodos = useCallback(() => {
    setPermisos({
      frecuenciaCardiaca: false,
      hrv: false,
      suenoEtapas: false,
      spo2: false,
      ejercicioZonas: false,
      frecuenciaRespiratoria: false,
      exposicionAudio: false,
    });
  }, []);

  const handleImportar = useCallback(() => {
    const config: ConfiguracionImportacion = {
      archivoExportacion: archivo,
      permisos,
      resolucionMinima: 5,
    };

    if (usarRangoFechas && fechaInicio && fechaFin) {
      config.rangoFechas = {
        inicio: new Date(fechaInicio),
        fin: new Date(fechaFin),
      };
    }

    onImportar(config);
  }, [archivo, permisos, usarRangoFechas, fechaInicio, fechaFin, onImportar]);

  const permisosActivos = Object.values(permisos).filter(Boolean).length;
  const permisosTotales = Object.keys(permisos).length;

  if (estaImportando && progreso) {
    return (
      <div className="apple-health-import apple-health-import--progreso">
        <div className="import-header">
          <h2>📥 Importando datos de Apple Health</h2>
          <p className="import-descripcion">
            Esto puede tomar varios minutos dependiendo de la cantidad de datos.
          </p>
        </div>

        <div className="progreso-container">
          <div className="progreso-barra-externa">
            <div 
              className="progreso-barra-interna"
              style={{ width: `${progreso.porcentaje}%` }}
            />
          </div>
          
          <div className="progreso-estadisticas">
            <span className="progreso-porcentaje">{progreso.porcentaje}%</span>
            <span className="progreso-detalle">
              {progreso.lineasProcesadas.toLocaleString()} líneas procesadas
            </span>
          </div>

          <div className="progreso-tipo">
            <span className="tipo-etiqueta">Procesando:</span>
            <span className="tipo-valor">{progreso.tipoActual}</span>
          </div>

          <div className="progreso-registros">
            <span>{progreso.registrosEncontrados.toLocaleString()} registros encontrados</span>
          </div>

          {progreso.errores.length > 0 && (
            <div className="progreso-errores">
              <h4>⚠️ Errores ({progreso.errores.length})</h4>
              <ul>
                {progreso.errores.slice(0, 5).map((error, i) => (
                  <li key={i}>{error}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="apple-health-import">
      <div className="import-header">
        <h2>🫀 Importación Profunda de Apple Health</h2>
        <p className="import-descripcion">
          Importa datos de series temporales en bruto para análisis avanzado de salud.
          Selecciona qué tipos de datos deseas importar.
        </p>
      </div>

      {paso === 1 && (
        <div className="import-paso">
          <div className="seleccion-archivo">
            <h3>📁 Archivo de Exportación</h3>
            <input
              type="text"
              className="input-archivo"
              placeholder="Ruta al archivo export.xml de Apple Health"
              value={archivo}
              onChange={(e) => setArchivo(e.target.value)}
            />
            <p className="input-ayuda">
              Ejemplo: /Users/tuusuario/Downloads/apple_health_export/export.xml
            </p>
          </div>

          <div className="seleccion-fechas">
            <label className="checkbox-fechas">
              <input
                type="checkbox"
                checked={usarRangoFechas}
                onChange={(e) => setUsarRangoFechas(e.target.checked)}
              />
              Limitar a rango de fechas específico
            </label>

            {usarRangoFechas && (
              <div className="fechas-inputs">
                <div className="fecha-campo">
                  <label>Desde:</label>
                  <input
                    type="date"
                    value={fechaInicio}
                    onChange={(e) => setFechaInicio(e.target.value)}
                  />
                </div>
                <div className="fecha-campo">
                  <label>Hasta:</label>
                  <input
                    type="date"
                    value={fechaFin}
                    onChange={(e) => setFechaFin(e.target.value)}
                  />
                </div>
              </div>
            )}
          </div>

          <div className="acciones-paso">
            <button className="btn-secundario" onClick={onCancelar}>
              Cancelar
            </button>
            <button 
              className="btn-primario"
              onClick={() => setPaso(2)}
              disabled={!archivo}
            >
              Continuar →
            </button>
          </div>
        </div>
      )}

      {paso === 2 && (
        <div className="import-paso">
          <div className="permisos-header">
            <h3>🔒 Seleccionar Datos a Importar</h3>
            <div className="permisos-controles">
              <button className="btn-texto" onClick={seleccionarTodos}>
                Seleccionar todos
              </button>
              <span className="separador">|</span>
              <button className="btn-texto" onClick={deseleccionarTodos}>
                Deseleccionar todos
              </button>
            </div>
          </div>

          <p className="permisos-resumen">
            {permisosActivos} de {permisosTotales} tipos seleccionados
          </p>

          <div className="permisos-lista">
            {(Object.keys(PERMISOS_LABELS) as Array<keyof PermisosImportacion>).map((clave) => {
              const info = PERMISOS_LABELS[clave];
              const activo = permisos[clave];

              return (
                <div 
                  key={clave}
                  className={`permiso-item ${activo ? 'activo' : ''}`}
                  onClick={() => togglePermiso(clave)}
                >
                  <div className="permiso-icono">{info.icono}</div>
                  <div className="permiso-info">
                    <div className="permiso-titulo">{info.titulo}</div>
                    <div className="permiso-descripcion">{info.descripcion}</div>
                  </div>
                  <div className="permiso-checkbox">
                    <input 
                      type="checkbox" 
                      checked={activo}
                      onChange={() => {}}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="acciones-paso">
            <button className="btn-secundario" onClick={() => setPaso(1)}>
              ← Atrás
            </button>
            <button 
              className="btn-primario"
              onClick={() => setPaso(3)}
              disabled={permisosActivos === 0}
            >
              Revisar →
            </button>
          </div>
        </div>
      )}

      {paso === 3 && (
        <div className="import-paso">
          <h3>✅ Resumen de Importación</h3>

          <div className="resumen-seccion">
            <h4>Archivo</h4>
            <p>{archivo}</p>
          </div>

          {usarRangoFechas && (
            <div className="resumen-seccion">
              <h4>Rango de Fechas</h4>
              <p>{fechaInicio} hasta {fechaFin}</p>
            </div>
          )}

          <div className="resumen-seccion">
            <h4>Tipos de Datos ({permisosActivos})</h4>
            <ul className="resumen-permisos">
              {(Object.keys(PERMISOS_LABELS) as Array<keyof PermisosImportacion>)
                .filter(clave => permisos[clave])
                .map(clave => (
                  <li key={clave}>
                    {PERMISOS_LABELS[clave].icono} {PERMISOS_LABELS[clave].titulo}
                  </li>
                ))
              }
            </ul>
          </div>

          <div className="resumen-advertencia">
            ⚠️ La importación puede tomar varios minutos. No cierres la aplicación.
          </div>

          <div className="acciones-paso">
            <button className="btn-secundario" onClick={() => setPaso(2)}>
              ← Atrás
            </button>
            <button className="btn-primario btn-importar" onClick={handleImportar}>
              🚀 Iniciar Importación
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppleHealthDeepImport;
