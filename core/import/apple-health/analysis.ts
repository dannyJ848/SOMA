/**
 * Apple Health Analysis Module
 * core/import/apple-health/analysis.ts
 * 
 * Tipos para análisis de métricas de salud
 * P4.1.3 - Health Metrics Analysis
 */

// ============================================================================
// Períodos de Análisis
// ============================================================================

export type Periodo = '7d' | '30d' | '90d' | '6m' | '1y';

// ============================================================================
// Análisis de HRV
// ============================================================================

export interface MetricaHRV {
  fecha: Date;
  sdnn?: number;
  rmssd?: number;
  tendencia: 'subiendo' | 'estable' | 'bajando';
}

export interface AnalisisHRV {
  promedioSDNN: number;
  promedioRMSSD: number;
  tendencia: 'mejorando' | 'estable' | 'degradandose';
  variabilidad: 'alta' | 'normal' | 'baja';
  recuperacion: 'optima' | 'buena' | 'regular' | 'mala';
  metricas: MetricaHRV[];
  insights: string[];
}

// ============================================================================
// Análisis de Sueño
// ============================================================================

export interface MetricaSueno {
  fecha: Date;
  duracionHoras: number;
  eficiencia: number;
  score: number;
  etapas: {
    profundo: number;  // minutos
    rem: number;
    ligero: number;
    despierto: number;
  };
}

export interface AnalisisSueno {
  promedioDuracion: number;  // horas
  promedioEficiencia: number;  // porcentaje
  promedioScore: number;
  tendencia: 'mejorando' | 'estable' | 'degradandose';
  calidadGeneral: 'excelente' | 'buena' | 'regular' | 'mala';
  metricas: MetricaSueno[];
  patrones: string[];
  insights: string[];
}

// ============================================================================
// Análisis de Actividad
// ============================================================================

export interface MetricaActividad {
  fecha: Date;
  calorias: number;
  minutosEjercicio: number;
  minutosDePie: number;
  cumplioObjetivo: boolean;
}

export interface AnalisisActividad {
  promedioCalorias: number;
  promedioEjercicio: number;  // minutos
  promedioDePie: number;  // minutos
  diasCumplidos: number;
  porcentajeCumplimiento: number;
  tendencia: 'mejorando' | 'estable' | 'degradandose';
  nivel: 'muy-activo' | 'activo' | 'moderado' | 'sedentario';
  metricas: MetricaActividad[];
  insights: string[];
}

// ============================================================================
// Análisis de FC en Reposo
// ============================================================================

export interface MetricaFCReposo {
  fecha: Date;
  valor: number;  // bpm
  tendencia: 'subiendo' | 'estable' | 'bajando';
}

export interface AnalisisFCReposo {
  promedio: number;  // bpm
  minimo: number;
  maximo: number;
  tendencia: 'mejorando' | 'estable' | 'degradandose';
  nivel: 'excelente' | 'bueno' | 'regular' | 'elevado';
  metricas: MetricaFCReposo[];
  insights: string[];
}

// ============================================================================
// Detección de Anomalías
// ============================================================================

export interface AnomaliaDetectada {
  id: string;
  tipo: 'hrv-bajo' | 'fc-elevada' | 'sueno-pobre' | 'spo2-bajo' | 'patron-inusual';
  severidad: 'alta' | 'media' | 'baja';
  fecha: Date;
  descripcion: string;
  metricaAfectada: string;
  valorObservado: number;
  valorEsperado: number;
  recomendacion?: string;
}

export interface AnalisisAnomalias {
  totalAnomalias: number;
  anomalias: AnomaliaDetectada[];
  resumenPorTipo: Record<string, number>;
  tendencia: 'aumentando' | 'estable' | 'disminuyendo';
  alertas: string[];
}
