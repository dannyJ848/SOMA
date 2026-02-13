// =============================================================================
// SOMA Sintomas Enciclopedia - Type Definitions
// Spanish-first bilingual symptom encyclopedia for patient education
// =============================================================================

export interface SintomaEntry {
  id: string;
  nombreEs: string;
  nombreEn: string;
  descripcionEs: string;
  descripcionEn: string;
  categorias: string[];
  urgencia: 'baja' | 'media' | 'alta' | 'emergencia';
  causasComunesEs: string[];
  causasComunesEn: string[];
  cuandoVerMedicoEs: string[];
  cuandoVerMedicoEn: string[];
  autoCuidadoEs: string[];
  autoCuidadoEn: string[];
  preguntasParaMedicoEs: string[];
  preguntasParaMedicoEn: string[];
  sintomasRelacionados: string[];
  sistemasCorporales: string[];
}
