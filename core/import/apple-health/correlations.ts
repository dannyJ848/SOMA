/**
 * Apple Health Correlations Module
 * core/import/apple-health/correlations.ts
 * 
 * Tipos para análisis de correlaciones entre métricas de salud
 * P4.1.3 - Correlation Insights
 */

// ============================================================================
// Correlación entre Variables
// ============================================================================

export interface Correlacion {
  id: string;
  variableA: string;
  variableB: string;
  coeficiente: number;  // -1 a 1
  direccion: 'positiva' | 'negativa' | 'neutra';
  significativa: boolean;
  descripcion: string;
  nMuestras: number;
  confianza: string;
  tipo: 'sintoma-metrica' | 'metrica-metrica' | 'comportamiento-resultado';
}

// ============================================================================
// Hallazgo de Patrones
// ============================================================================

export interface HallazgoPatron {
  id: string;
  tipo: 'sintoma-metrica' | 'metrica-metrica' | 'comportamiento-resultado' | 'temporal' | 'anomalia';
  titulo: string;
  descripcion: string;
  hallazgoClave: string;
  nivelConfianza: 'alta' | 'media' | 'baja';
  fechaDescubrimiento: Date;
  interpretacion: string;
  recomendaciones: string[];
  evidencia: {
    correlacion: number;
    significanciaP: number;
    nMuestras: number;
  };
}

// ============================================================================
// Predicción Temporal
// ============================================================================

export interface PrediccionTemporal {
  id: string;
  variable: string;
  eventoPredicho: string;
  precision: number;  // 0 a 1
  horizonte: number;  // horas
  basadoEn: string[];
  ejemplo: {
    fecha: Date;
    valorObservado: string | number;
    eventoOcurrio: boolean;
  };
}

// ============================================================================
// Análisis Contextual
// ============================================================================

export interface MetricaContextual {
  metrica: string;
  promedioContexto: number;
  promedioGlobal: number;
  diferenciaPorcentaje: number;
  significativo: boolean;
}

export interface AnalisisContextual {
  id: string;
  contexto: string;
  interpretacion: string;
  metricasDiferentes: MetricaContextual[];
}
