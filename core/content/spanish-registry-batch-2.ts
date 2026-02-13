/**
 * Spanish Registry Batch 2 — Modules 18-34
 *
 * Registers the second batch of Spanish bilingual content modules.
 */

import { registerSpanishModule } from './spanish-module-registry';

import { buscarAdultoMayor, getAdultoMayorById, adultoMayorEnciclopedia } from './adulto-mayor/adulto-mayor-enciclopedia';
import { buscarDermatologia, getDermatologiaById, DERMATOLOGIA_ENTRIES } from './dermatologia-detallada/dermatologia-detallada-enciclopedia';
import { buscarEndocrinologia, getEndocrinologiaById, ENDOCRINOLOGIA_ENTRIES } from './endocrinologia-detallada/endocrinologia-enciclopedia';
import { buscarToxicologia, getToxicologiaById, TOXICOLOGIA_ENTRIES } from './toxicologia/toxicologia-enciclopedia';
import { buscarNutriente, NUTRIENTES } from './nutricion/nutricion-enciclopedia';
import { buscarAlergia, getAlergiaById, alergiasEnciclopedia } from './alergias/alergias-enciclopedia';
import { buscarHematologia, getHematologiaById, HEMATOLOGIA_ENTRIES } from './hematologia/hematologia-enciclopedia';
import { buscarGastroenterologia, getGastroenterologiaById, GASTROENTEROLOGIA_ENTRIES } from './gastroenterologia/gastroenterologia-enciclopedia';
import { buscarCirugiaGeneral, getCirugiaGeneralById, CIRUGIA_GENERAL_ENTRIES } from './cirugia-general/cirugia-general-enciclopedia';
import { buscarRadiologia, getRadiologiaById, RADIOLOGIA_ENTRIES } from './radiologia-pacientes/radiologia-pacientes-enciclopedia';
import { buscarGeneticaConsejeria, getGeneticaConsejeriaById, GENETICA_CONSEJERIA_ENTRIES } from './genetica-consejeria/genetica-consejeria-enciclopedia';
import { buscarReumatologia, getReumatologiaById, REUMATOLOGIA_ENTRIES } from './reumatologia/reumatologia-enciclopedia';
import { buscarPrueba, getPruebaById, pruebasDiagnosticas } from './pruebas-diagnosticas/pruebas-diagnosticas-enciclopedia';
import { buscarInmunologia, getInmunologiaById, INMUNOLOGIA_ENTRIES } from './inmunologia/inmunologia-enciclopedia';
import { buscarNutricionClinica, getNutricionClinicaById, NUTRICION_CLINICA_ENTRIES } from './nutricion-clinica/nutricion-clinica-enciclopedia';
import { buscarOtorrino, getOtorrinoById, OTORRINO_ENTRIES } from './otorrino/otorrino-enciclopedia';
import { buscarNefrologia, getNefrologiaById, NEFROLOGIA_ENTRIES } from './nefrologia/nefrologia-enciclopedia';

export function registerBatch2(): void {
  registerSpanishModule({
    category: 'adulto-mayor',
    label: 'Geriatrics',
    search: (q) => buscarAdultoMayor(q),
    getById: (id) => getAdultoMayorById(id),
    getAll: () => adultoMayorEnciclopedia,
    entryType: 'condition',
  });

  registerSpanishModule({
    category: 'dermatologia-detallada',
    label: 'Dermatology',
    search: (q) => buscarDermatologia(q),
    getById: (id) => getDermatologiaById(id),
    getAll: () => DERMATOLOGIA_ENTRIES,
    entryType: 'condition',
  });

  registerSpanishModule({
    category: 'endocrinologia-detallada',
    label: 'Endocrinology',
    search: (q) => buscarEndocrinologia(q),
    getById: (id) => getEndocrinologiaById(id),
    getAll: () => ENDOCRINOLOGIA_ENTRIES,
    entryType: 'condition',
  });

  registerSpanishModule({
    category: 'toxicologia',
    label: 'Toxicology',
    search: (q) => buscarToxicologia(q),
    getById: (id) => getToxicologiaById(id),
    getAll: () => TOXICOLOGIA_ENTRIES,
    entryType: 'condition',
  });

  registerSpanishModule({
    category: 'nutricion',
    label: 'Nutrition',
    search: (q) => buscarNutriente(q),
    getById: () => undefined,
    getAll: () => NUTRIENTES,
    entryType: 'condition',
  });

  registerSpanishModule({
    category: 'alergias',
    label: 'Allergies',
    search: (q) => buscarAlergia(q),
    getById: (id) => getAlergiaById(id),
    getAll: () => alergiasEnciclopedia,
    entryType: 'condition',
  });

  registerSpanishModule({
    category: 'hematologia',
    label: 'Hematology',
    search: (q) => buscarHematologia(q),
    getById: (id) => getHematologiaById(id),
    getAll: () => HEMATOLOGIA_ENTRIES,
    entryType: 'condition',
  });

  registerSpanishModule({
    category: 'gastroenterologia',
    label: 'Gastroenterology',
    search: (q) => buscarGastroenterologia(q),
    getById: (id) => getGastroenterologiaById(id),
    getAll: () => GASTROENTEROLOGIA_ENTRIES,
    entryType: 'condition',
  });

  registerSpanishModule({
    category: 'cirugia-general',
    label: 'General Surgery',
    search: (q) => buscarCirugiaGeneral(q),
    getById: (id) => getCirugiaGeneralById(id),
    getAll: () => CIRUGIA_GENERAL_ENTRIES,
    entryType: 'procedure',
  });

  registerSpanishModule({
    category: 'radiologia-pacientes',
    label: 'Radiology',
    search: (q) => buscarRadiologia(q),
    getById: (id) => getRadiologiaById(id),
    getAll: () => RADIOLOGIA_ENTRIES,
    entryType: 'imaging',
  });

  registerSpanishModule({
    category: 'genetica-consejeria',
    label: 'Genetics & Counseling',
    search: (q) => buscarGeneticaConsejeria(q),
    getById: (id) => getGeneticaConsejeriaById(id),
    getAll: () => GENETICA_CONSEJERIA_ENTRIES,
    entryType: 'condition',
  });

  registerSpanishModule({
    category: 'reumatologia',
    label: 'Rheumatology',
    search: (q) => buscarReumatologia(q),
    getById: (id) => getReumatologiaById(id),
    getAll: () => REUMATOLOGIA_ENTRIES,
    entryType: 'condition',
  });

  registerSpanishModule({
    category: 'pruebas-diagnosticas',
    label: 'Diagnostic Tests',
    search: (q) => buscarPrueba(q),
    getById: (id) => getPruebaById(id),
    getAll: () => pruebasDiagnosticas,
    entryType: 'lab-test',
  });

  registerSpanishModule({
    category: 'inmunologia',
    label: 'Immunology',
    search: (q) => buscarInmunologia(q),
    getById: (id) => getInmunologiaById(id),
    getAll: () => INMUNOLOGIA_ENTRIES,
    entryType: 'condition',
  });

  registerSpanishModule({
    category: 'nutricion-clinica',
    label: 'Clinical Nutrition',
    search: (q) => buscarNutricionClinica(q),
    getById: (id) => getNutricionClinicaById(id),
    getAll: () => NUTRICION_CLINICA_ENTRIES,
    entryType: 'condition',
  });

  registerSpanishModule({
    category: 'otorrino',
    label: 'ENT',
    search: (q) => buscarOtorrino(q),
    getById: (id) => getOtorrinoById(id),
    getAll: () => OTORRINO_ENTRIES,
    entryType: 'condition',
  });

  registerSpanishModule({
    category: 'nefrologia',
    label: 'Nephrology',
    search: (q) => buscarNefrologia(q),
    getById: (id) => getNefrologiaById(id),
    getAll: () => NEFROLOGIA_ENTRIES,
    entryType: 'condition',
  });
}
