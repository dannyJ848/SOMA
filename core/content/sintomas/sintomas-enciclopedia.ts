// =============================================================================
// SOMA Sintomas Enciclopedia - Comprehensive Bilingual Symptom Encyclopedia
// Spanish-first (primary language) with English as secondary
// Patient education content - NOT for diagnosis
// =============================================================================

export type { SintomaEntry } from './tipos';
export { type SintomaEntry as SintomaEntryType } from './tipos';

import type { SintomaEntry } from './tipos';
import { SINTOMAS_GENERAL_NEURO } from './datos-general-neuro';
import { SINTOMAS_OJOS_ENT_CARDIO_RESP } from './datos-ojos-ent-cardio-resp';
import { SINTOMAS_GI_URINARIO } from './datos-gi-urinario';
import { SINTOMAS_MSK_PIEL_REPRO_MENTAL } from './datos-msk-piel-repro-mental';

// =============================================================================
// Combined Encyclopedia - 80+ symptoms across ALL body systems
// =============================================================================

export const SINTOMAS_ENCICLOPEDIA: SintomaEntry[] = [
  ...SINTOMAS_GENERAL_NEURO,
  ...SINTOMAS_OJOS_ENT_CARDIO_RESP,
  ...SINTOMAS_GI_URINARIO,
  ...SINTOMAS_MSK_PIEL_REPRO_MENTAL,
];

// =============================================================================
// Helper Functions
// =============================================================================

/**
 * Busca síntomas por texto en nombre o descripción (español o inglés)
 * Searches symptoms by text in name or description (Spanish or English)
 */
export function buscarSintoma(query: string): SintomaEntry[] {
  const q = query.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  return SINTOMAS_ENCICLOPEDIA.filter((s) => {
    const fields = [
      s.nombreEs,
      s.nombreEn,
      s.descripcionEs,
      s.descripcionEn,
      s.id,
      ...s.categorias,
      ...s.sistemasCorporales,
    ];
    return fields.some((f) =>
      f.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(q)
    );
  });
}

/**
 * Obtiene un síntoma por su ID
 * Gets a symptom by its ID
 */
export function getSintomaById(id: string): SintomaEntry | undefined {
  return SINTOMAS_ENCICLOPEDIA.find((s) => s.id === id);
}

/**
 * Obtiene síntomas por sistema corporal
 * Gets symptoms by body system
 */
export function getSintomasPorSistema(sistema: string): SintomaEntry[] {
  const q = sistema.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  return SINTOMAS_ENCICLOPEDIA.filter((s) =>
    s.sistemasCorporales.some(
      (sc) => sc.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(q)
    )
  );
}

/**
 * Obtiene síntomas por nivel de urgencia
 * Gets symptoms by urgency level
 */
export function getSintomasPorUrgencia(urgencia: string): SintomaEntry[] {
  return SINTOMAS_ENCICLOPEDIA.filter(
    (s) => s.urgencia === urgencia
  );
}

/**
 * Obtiene síntomas relacionados a un síntoma dado
 * Gets symptoms related to a given symptom
 */
export function getSintomasRelacionados(sintomaId: string): SintomaEntry[] {
  const sintoma = getSintomaById(sintomaId);
  if (!sintoma) return [];
  return sintoma.sintomasRelacionados
    .map((relId) => getSintomaById(relId))
    .filter((s): s is SintomaEntry => s !== undefined);
}

// =============================================================================
// Statistics & Metadata
// =============================================================================

export const ENCICLOPEDIA_STATS = {
  totalSintomas: SINTOMAS_ENCICLOPEDIA.length,
  sistemasCubiertos: [...new Set(SINTOMAS_ENCICLOPEDIA.flatMap((s) => s.sistemasCorporales))],
  porUrgencia: {
    baja: SINTOMAS_ENCICLOPEDIA.filter((s) => s.urgencia === 'baja').length,
    media: SINTOMAS_ENCICLOPEDIA.filter((s) => s.urgencia === 'media').length,
    alta: SINTOMAS_ENCICLOPEDIA.filter((s) => s.urgencia === 'alta').length,
    emergencia: SINTOMAS_ENCICLOPEDIA.filter((s) => s.urgencia === 'emergencia').length,
  },
} as const;
