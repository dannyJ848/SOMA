/**
 * Sistema de Educación Médica en Español
 * Spanish Medical Education System
 *
 * Comprehensive content types for Spanish-speaking patients
 */

export type NivelLectura = 'basico' | 'intermedio' | 'avanzado' | 'experto' | 'clinico';

export interface MetadatosNivel {
  nivel: NivelLectura;
  nombre: string;
  descripcion: string;
  publicoObjetivo: string;
}

export const NIVELES_LECTURA: Record<NivelLectura, MetadatosNivel> = {
  basico: {
    nivel: 1 as NivelLectura,
    nombre: 'Básico',
    descripcion: 'Lenguaje simple, analogías de la vida cotidiana',
    publicoObjetivo: 'Paciente general sin antecedentes médicos',
  },
  intermedio: {
    nivel: 2 as NivelLectura,
    nombre: 'Intermedio',
    descripcion: 'Términos introducidos con definiciones',
    publicoObjetivo: 'Estudiante de secundaria',
  },
  avanzado: {
    nivel: 3 as NivelLectura,
    nombre: 'Avanzado',
    descripcion: 'Terminología médica estándar',
    publicoObjetivo: 'Estudiante universitario',
  },
  experto: {
    nivel: 4 as NivelLectura,
    nombre: 'Experto',
    descripcion: 'Nivel de posgrado, investigación',
    publicoObjetivo: 'Profesionales de salud',
  },
  clinico: {
    nivel: 5 as NivelLectura,
    nombre: 'Clínico',
    descripcion: 'Razonamiento clínico completo',
    publicoObjetivo: 'Médicos y residentes',
  },
};

export type CategoriaMedica =
  | 'anatomia'
  | 'fisiologia'
  | 'patologia'
  | 'farmacologia'
  | 'diagnostico'
  | 'laboratorio'
  | 'sintomas'
  | 'procedimientos'
  | 'prevencion'
  | 'estilo-de-vida'
  | 'salud-mental'
  | 'emergencias';

export interface ModuloEducativo {
  id: string;
  titulo: string;
  tituloEspanol: string;
  categoria: CategoriaMedica;
  especialidad: string;
  nivel: NivelLectura;
  duracionEstimada: string;
  objetivos: string[];
  contenido: ContenidoModulo;
  evaluacion?: Evaluacion;
  recursos?: RecursoEducativo[];
}

export interface ContenidoModulo {
  resumen: string;
  conceptosClave: ConceptoClave[];
  explicacionDetallada: string;
  analogias: string[];
  visualizaciones?: Visualizacion[];
  conexionesCuerpo?: string[];
  implicacionesClinicas?: string[];
}

export interface ConceptoClave {
  termino: string;
  definicion: string;
  ejemplos?: string[];
  importancia: 'alta' | 'media' | 'baja';
}

export type TipoVisualizacion = 'diagrama' | 'animacion' | 'modelo-3d' | 'grafico' | 'tabla' | 'video';

export interface Visualizacion {
  id: string;
  tipo: TipoVisualizacion;
  titulo: string;
  descripcion?: string;
  url?: string;
  datos?: any;
}

export interface Evaluacion {
  tipo: 'cuestionario' | 'practica' | 'caso-clinico' | 'flashcards';
  preguntas?: Pregunta[];
  casos?: CasoClinico[];
}

export interface Pregunta {
  id: string;
  pregunta: string;
  opciones?: string[];
  respuestaCorrecta: number | string;
  explicacion: string;
  nivel: NivelLectura;
}

export interface CasoClinico {
  id: string;
  titulo: string;
  presentacion: string;
  hallazgos: string;
  plan?: string[];
}

export interface RecursoEducativo {
  id: string;
  tipo: 'articulo' | 'video' | 'infografia' | 'calculadora' | 'referencia' | 'ejercicio';
  titulo: string;
  url: string;
  fuente?: string;
}

export interface ValorLaboratorio {
  nombre: string;
  valorNormal: {
    min: number;
    max: number;
    unidad: string;
  };
  valorCritico?: {
    alto: number;
    bajo: number;
    unidad: string;
  };
  explicacionNivelBasico: string;
  explicacionNivelAvanzado: string;
  causasAumento: string[];
  causasDisminucion: string[];
  implicaciones: string[];
}

export interface SignosSintoma {
  nombre: string;
  descripcionCorta: string;
  descripcionDetallada: string;
  signosAsociados: string[];
  posibleCausa: string[];
  cuandoPreocuparse: string[];
}

export interface GuiaPreventiva {
  condicion: string;
  medidas: string[];
  importancia: 'alta' | 'media' | 'baja';
}
