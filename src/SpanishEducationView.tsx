/**
 * Vista de Educación Médica en Español
 * Spanish Medical Education Viewer
 */

import { useState, useCallback } from 'react';
import type {
  NivelLectura,
  ModuloEducativo,
  CategoriaMedica,
  ContenidoModulo,
  Visualizacion,
  Evaluacion,
  Pregunta,
  CasoClinico,
  SignoSintoma,
  GuiaPreventiva,
  RecursoEducativo,
  ValorLaboratorio,
} from '../../core/education/spanish/types';
import type { MedicalSpecialty } from '../../core/education/types';

import * as SpanishContent from '../../core/education/spanish/contenido';

interface SpanishEducationViewProps {
  onBack: () => void;
  especialidad?: MedicalSpecialty;
}

export function SpanishEducationView({ onBack, especialidad }: SpanishEducationViewProps) {
  const [activeTab, setActiveTab] = useState<'explorar' | 'modulos' | 'laboratorio' | 'signos' | 'patologias' | 'salud'>('explorar');
  const [nivelLectura, setNivelLectura] = useState<NivelLectura>(2);
  const [selectedSystem, setSelectedSystem] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedLab, setSelectedLab] = useState<string | null>(null);
  const [quizActivo, setQuizActivo] = useState(false);
  const [progreso, setProgreso] = useState<Record<string, number>>({});

  // Obtener módulos por especialidad
  const modulosPorEspecialidad = useCallback((especialidad: MedicalSpecialty | undefined): any[] => {
    if (!especialidad) return SpanishContent.ESPECIALIDADES_MEDICAS[especialidad] || [];
    return Object.values(SpanishContent.ESPECIALIDADES_MEDICAS[especialidad]).flat();
  }, [especialidad]);

  // Obtener contenido de laboratorio
  const getContenidoLaboratorio = useCallback((codigo: string): ValorLaboratorio | null => {
    return SpanishContent.PRUEBAS_LABORATORIO[codigo] || null;
  }, []);

  // Obtener términos anatómicos
  const terminosAnatomicos = [
    { termino: 'Sagital', descripcion: 'División vertical del cuerpo en partes iguales (izquierda/derecha)' },
    { termino: 'Coronal', descripcion: 'División vertical del cuerpo en partes frontal y posterior' },
    { termino: 'Transversal', descripcion: 'División vertical del cuerpo en partes superior e inferior' },
    { termino: 'Longitudinal', descripcion: 'División del cuerpo de cabeza a pies' },
    { termino: 'Distal', descripcion: 'Lejos a un punto de referencia' },
    { termino: 'Proximal', descripcion: 'Más cercano al punto de referencia' },
    { termino: 'Medial', descripcion: 'Entre proximal y distal' },
    { termino: 'Lateral', descripcion: 'Hacia los lados del cuerpo' },
    { termino: 'Ipsilateral', descripcion: 'Mismo lado (ej. lado derecho del lado derecho)' },
    { termino: 'Contralateral', descripcion: 'Lado opuesto' },
    { termino: 'Anterior', descripcion: 'Frente/delantera del cuerpo' },
    { termino: 'Posterior', descripcion: 'Atrás/dorsal del cuerpo' },
    { termino: 'Ventral', descripcion: 'Hacia el vientre/abdomen' },
    { termino: 'Dorsal', descripcion: 'Hacia la espalda' },
    { termino: 'Superficial', descripcion: 'Cerca de la superficie del cuerpo' },
    { termino: 'Profundo', descripcion: 'Más profundo dentro del cuerpo' },
    { termino: 'Periférico', descripcion: 'Alrededor de un órgano o estructura' },
    { termino: 'Central', descripcion: 'En o cerca del centro del cuerpo' },
  ];

  return (
    <div className="spanish-education-view">
      {/* Header */}
      <header className="edu-header">
        <button className="back-button" onClick={onBack}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Volver
        </button>
        <div className="header-title">
          <h1>Educación Médica en Español</h1>
          <p>Conocimiento médico para todos</p>
        </div>

        {/* Nivel selector */}
        <div className="level-selector">
          {Object.entries(NIVELES_LECTURA).map(([nivel, datos]) => (
            <button
              key={nivel}
              className={`level-btn ${nivelLectura === nivel ? 'active' : ''}`}
              onClick={() => setNivelLectura(nivel as NivelLectura)}
              title={datos.descripcion}
            >
              {datos.nivel}
            </button>
          ))}
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="edu-nav">
        <button className={activeTab === 'explorar' ? 'active' : ''} onClick={() => setActiveTab('explorar')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 6v12M8 10c0-2 1.8-4 4"/>
          </svg>
          Explorar
        </button>
        <button className={activeTab === 'modulos' ? 'active' : ''} onClick={() => setActiveTab('modulos')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 19.5v16m2 12h20v14h20a2 2 0h.01a2 2 0 0v6h6 6l4 4"/>
          </svg>
          Módulos
        </button>
        <button className={activeTab === 'laboratorio' ? 'active' : ''} onClick={() => setActiveTab('laboratorio')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 5h.01v4c.48-.59 4.41l-1.41-1.41h2"/>
          </svg>
          Laboratorio
        </button>
        <button className={activeTab === 'signos' ? 'active' : ''} onClick={() => setActiveTab('signos')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22c-1.4-2.3-2.3-2.4-2.4-2.3.4-2.5-2.5 2.5 2.5 2.5 2.5 2.5c.4 1.4.2.7 1.2.8.7 2.8 2.9"/>
          </svg>
          Síntomas
        </button>
        <button className={activeTab === 'patologias' ? 'active' : ''} onClick={() => setActiveTab('patologias')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2a2 2h2a2 2v-2c.59 1.41 1.41 1.41-1.41-.59 1.41-1.41 1.41.59c.42"/>
          </svg>
          Patologías
        </button>
        <button className={activeTab === 'salud' ? 'active' : ''} onClick={() => setActiveTab('salud')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20.84 4.63a2.04c.83-1.2.49 1.96-.49 1.96-.49 1.96-.49 1.96c-.83-1.2-.49-.49-.49-.49"/>
          </svg>
          Salud
        </button>
      </nav>

      {/* Main Content */}
      <main className="edu-content">
        {activeTab === 'explorar' && (
          <div className="explore-tab">
            <h2 className="tab-title">Explorar por Especialidad</h2>
            <p className="tab-intro">Seleccione una especialidad médica para ver los módulos educativos disponibles.</p>

            <div className="specialty-grid">
              {Object.entries(SpanishContent.ESPECIALIDADES_MEDICAS).map(([clave, datos]) => (
                <button
                  key={clave}
                  className="specialty-card"
                  onClick={() => { setSelectedSystem(clave); setActiveTab('modulos'); }}
                >
                  <div className="specialty-icon">{datos.icono}</div>
                  <div className="specialty-info">
                    <h3>{datos.nombre}</h3>
                    <p>{datos.descripcion}</p>
                  </div>
                </button>
              ))}
            </div>

            <div className="quick-topics">
              <h3 className="section-title">Temas Rápidos</h3>
              <div className="topic-grid">
                {SpanishContent.SINTOMAS_COMUNES.map((sintoma, i) => (
                  <button
                    key={i}
                    className="topic-card"
                    onClick={() => setSelectedTopic(sintoma)}
                  >
                    <h4>{sintoma.nombre}</h4>
                    <p>{sintoma.descripcion}</p>
                    <div className="symptoms-list">
                      {sintoma.signosAsociados?.slice(0, 4).map((signo, j) => (
                        <span key={j} className="symptom-tag">{signo}</span>
                      ))}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'modulos' && (
          <div className="modules-tab">
            <div className="modules-header">
              <h2>Modulos Educativos</h2>
              <div className="bcrumbs">
                <button
                  className={!selectedSystem ? 'active' : ''}
                  onClick={() => setSelectedSystem(null)}
                >
                  Todos
                </button>
                {selectedSystem && (
                  <>
                    <span className="separator">/</span>
                    <span className="current-system">{SpanishContent.ESPECIALIDADES_MEDICAS[selectedSystem]?.nombre}</span>
                  </>
                )}
              </div>
            </div>

            <div className="modules-content">
              {modulosPorEspecialidad(selectedSystem).map((modulo, i) => (
                <div key={i} className="module-card">
                  <div className="module-header">
                    <span className="module-type-badge">{modulo.tipo}</span>
                    <h3>{modulo.titulo}</h3>
                    <span className="module-duration">{modulo.duracionEstimada}</span>
                  </div>

                  <p className="module-summary">{modulo.resumen}</p>

                  <button className="module-start-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="5 3 19 12 22 12 22 5"/>
                    </svg>
                    Comenzar Aprendizaje
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'laboratorio' && (
          <div className="lab-tab">
            <h2>Interpretación de Análisis de Laboratorio</h2>
            <p className="tab-intro">Seleccione una prueba para ver sus rangos normales, interpretación clínica, y causas de valores anormales.</p>

            <div className="lab-search">
              <input
                type="text"
                placeholder="Buscar prueba de laboratorio..."
                className="search-input"
              />
            </div>

            <div className="lab-categories">
              {Object.entries(SpanishContent.PRUEBAS_LABORATORIO).map(([categoria, datos]) => (
                <div key={categoria} className="lab-category">
                  <h3>{datos.nombre}</h3>
                  <div className="lab-tests">
                    {datos.referencia && Object.entries(datos.referencia).map(([param, valor]) => (
                      <div key={param} className="lab-test">
                        <span className="param-name">{param}:</span>
                        <span className="param-value">{valor}</span>
                        {valor.descripcion && (
                          <span className="param-desc" title={valor.descripcion}>{valor.descripcion}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'signos' && (
          <div className="symptoms-tab">
            <h2>Guía de Síntomas</h2>
            <p className="tab-intro">Seleccione una parte del cuerpo o categoría de síntomas para ver información detallada.</p>

            <div className="symptoms-search">
              <input
                type="text"
                placeholder="Buscar síntomas..."
                className="search-input"
              />
            </div>

            <div className="symptoms-body-regions">
              <h3>Por Región del Cuerpo</h3>
              <div className="regions-grid">
                {['Cabeza', 'Cuello', 'Ojos', 'Nariz', 'Boca', 'Cara', 'Mandíbula', 'Tórax', 'Pecho', 'Abdomen', 'Pelvis', 'Genitales'].map((region) => (
                  <button key={region} className="region-btn">{region}</button>
                ))}
              </div>
            </div>

            <div className="symptoms-categories">
              <h3>Por Tipo de Síntoma</h3>
              <div className="categories-grid">
                {Object.entries(SpanishContent.SINTOMAS_COMUNES).map(([categoria, datos]) => (
                  <button
                    key={categoria}
                    className="category-btn"
                    onClick={() => setSelectedTopic(categoria)}
                  >
                    <span className="cat-icon">{datos.icono}</span>
                    <span className="cat-name">{categoria}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'patologías' && (
          <div className="pathology-tab">
            <h2>Guía de Patologías</h2>
            <p className="tab-intro">Seleccione una especialidad médica para ver información sobre enfermedades del sistema.</p>

            <div className="pathology-grid">
              {Object.entries(SpanishContent.ESPECIALIDADES_MEDICAS).map(([especialidad, datos]) => (
                <button
                  key={especialidad}
                  className="pathology-card"
                  onClick={() => setSelectedSystem(especialidad)}
                >
                  <div className="pathology-icon">{datos.icono}</div>
                  <div className="pathology-info">
                    <h3>{datos.nombre}</h3>
                    <p>{datos.descripcion}</p>
                    <span className="topic-count">{datos.topicos?.length || 0} temas</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'salud' && (
          <div className="health-tab">
            <h2>Consejos de Salud y Prevención</h2>
            <p className="tab-intro">Información importante para mantener su salud y prevenir enfermedades.</p>

            <div className="health-topics">
              <h3>Nutrición</h3>
              <p>{SpanishContent.EDUCACION_PACIENTE.nutricion.descripcion}</p>
              <ul className="health-list">
                {SpanishContent.EDUCACION_PACIENTE.nutricion.consejos.map((consejo, i) => (
                  <li key={i} className="health-item">
                    <span className="bullet">•</span>
                    {consejo}
                  </li>
                ))}
              </ul>

              <h3>Ejercicio</h3>
              <p>{SpanishContent.EDUCACION_PACIENTE.ejercicio.descripcion}</p>
              <ul className="health-list">
                {SpanishContent.EDUCACION_PACIENTE.ejercicio.consejos.map((consejo, i) => (
                  <li key={i} className="health-item">
                    <span className="bullet">•</span>
                    {consejo}
                  </li>
                ))}
              </ul>

              <h3>Sueño</h3>
              <p>{SpanishContent.EDUCACION_PACIENTE.sueno.descripcion}</p>
              <ul className="health-list">
                {SpanishContent.EDUCACION_PACIENTE.sueno.consejos.map((consejo, i) => (
                  <li key={i} className="health-item">
                    <span className="bullet">•</span>
                    {consejo}
                  </li>
                ))}
              </ul>

              <h3>Manejo del Estrés</h3>
              <p>{SpanishContent.EDUCACION_PACIENTE.estres.descripcion}</p>
              <ul className="health-list">
                {SpanishContent.EDUCACION_PACIENTE.estres.consejos.map((consejo, i) => (
                  <li key={i} className="health-item">
                    <span className="bullet">•</span>
                    {consejo}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </main>

      {/* Términos Anatómicos Reference */}
      <aside className="anatomy-terms-sidebar">
        <h3>Términos de Dirección</h3>
        <div className="terms-list">
          {terminosAnatomicos.map((termino) => (
            <div key={termino.termino} className="term-item">
              <span className="term-name">{termino.termino}</span>
              <span className="term-desc">{termino.descripcion}</span>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}

export default SpanishEducationView;
