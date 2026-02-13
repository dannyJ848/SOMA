/**
 * Apple Health Deep Import Module
 * core/import/apple-health/deep-import.ts
 * 
 * Tipos para importación profunda de datos de Apple Health
 * P4.1.3 - Apple Health Deep Integration
 */

// ============================================================================
// Configuración y Permisos
// ============================================================================

export interface PermisosImportacion {
  frecuenciaCardiaca: boolean;
  hrv: boolean;
  suenoEtapas: boolean;
  spo2: boolean;
  ejercicioZonas: boolean;
  frecuenciaRespiratoria: boolean;
  exposicionAudio: boolean;
}

export interface ConfiguracionImportacion {
  permisos: PermisosImportacion;
  rutaArchivo: string;
  fechaInicio?: Date;
  fechaFin?: Date;
  deduplicar?: boolean;
}

export interface ProgresoImportacion {
  etapa: 'analisis' | 'extraccion' | 'procesamiento' | 'completado';
  porcentaje: number;
  registrosProcesados: number;
  totalRegistros: number;
  mensaje: string;
}

// ============================================================================
// Lecturas de Frecuencia Cardíaca
// ============================================================================

export interface LecturaFrecuenciaCardiaca {
  id: string;
  valor: number;  // bpm
  timestamp: Date;
  fuente: string;
  contexto?: 'reposo' | 'actividad' | 'sueno' | 'ejercicio';
}

// ============================================================================
// Lecturas de HRV (Heart Rate Variability)
// ============================================================================

export interface LecturaHRV {
  id: string;
  sdnn?: number;  // ms
  rmssd?: number;  // ms
  timestamp: Date;
  fuente: string;
  calidad?: 'alta' | 'media' | 'baja';
}

// ============================================================================
// Segmentos de Sueño
// ============================================================================

export type EtapaSueno = 'despierto' | 'ligero' | 'profundo' | 'rem';

export interface SegmentoSueno {
  id: string;
  etapa: EtapaSueno;
  inicio: Date;
  fin: Date;
  duracionMinutos: number;
}

// ============================================================================
// Sesiones de Ejercicio
// ============================================================================

export interface SesionEjercicioDetallada {
  id: string;
  tipo: string;
  inicio: Date;
  fin: Date;
  duracionMinutos: number;
  fcPromedio?: number;
  fcMaxima?: number;
  calorias?: number;
  distancia?: number;
  unidadDistancia?: string;
  zonasFC?: {
    zona: string;
    minutos: number;
  }[];
}

// ============================================================================
// Estadísticas Diarias Avanzadas
// ============================================================================

export interface EstadisticasDiariasAvanzadas {
  fecha: Date;
  frecuenciaCardiaca?: {
    promedio: number;
    minimo: number;
    maximo: number;
    reposo?: number;
  };
  hrv?: {
    promedioSDNN?: number;
    promedioRMSSD?: number;
  };
  sueno?: {
    duracionTotal: number;  // minutos
    tiempoEnCama: number;
    eficiencia: number;  // porcentaje
    etapas: Record<EtapaSueno, number>;  // minutos por etapa
    score?: number;  // 0-100
  };
  actividad?: {
    caloriasActivas: number;
    minutosEjercicio: number;
    minutosDePie: number;
  };
  spo2?: {
    promedio: number;
    minimo: number;
  };
}

// ============================================================================
// Resultado de Importación
// ============================================================================

export interface ResultadoImportacionProfunda {
  exito: boolean;
  estadisticas: EstadisticasDiariasAvanzadas[];
  lecturasFC: LecturaFrecuenciaCardiaca[];
  lecturasHRV: LecturaHRV[];
  segmentosSueno: SegmentoSueno[];
  sesionesEjercicio: SesionEjercicioDetallada[];
  totalRegistros: number;
  errores: string[];
  advertencias: string[];
}
