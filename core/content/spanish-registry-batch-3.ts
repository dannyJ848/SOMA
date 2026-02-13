/**
 * Spanish Registry Batch 3 — Modules 35-51
 *
 * Registers the third batch of Spanish bilingual content modules,
 * including emergencias and medicina-preventiva.
 */

import { registerSpanishModule } from './spanish-module-registry';

import { buscarSaludHombre, getSaludHombreById, saludHombreEnciclopedia } from './salud-hombre/salud-hombre-enciclopedia';
import { buscarCuidadosPaliativos, getCuidadosPaliativosById, cuidadosPaliativosEnciclopedia } from './cuidados-paliativos/cuidados-paliativos-enciclopedia';
import { buscarPsiquiatria, getPsiquiatriaById, PSIQUIATRIA_ENTRIES } from './psiquiatria-detallada/psiquiatria-detallada-enciclopedia';
import { buscarRehabilitacion, getRehabilitacionById, rehabilitacionEnciclopedia } from './rehabilitacion/rehabilitacion-enciclopedia';
import { buscarUrologia, getUrologiaById, UROLOGIA_ENTRIES } from './urologia-detallada/urologia-enciclopedia';
import { buscarDental, getDentalById, dentalEnciclopedia } from './salud-dental/dental-enciclopedia';
import { buscarOftalmologia, getOftalmologiaById, OFTALMOLOGIA_ENTRIES } from './oftalmologia/oftalmologia-enciclopedia';
import { buscarInfecciosa, getInfecciosaById, infecciosasEnciclopedia } from './infecciosas/infecciosas-enciclopedia';
import { buscarOncologia, getOncologiaById, ONCOLOGIA_ENTRIES } from './oncologia/oncologia-enciclopedia';
import { buscarNeumologia, getNeumologiaById, NEUMOLOGIA_ENTRIES } from './neumologia/neumologia-enciclopedia';
import { buscarNeonatologia, getNeonatologiaById, NEONATOLOGIA_ENTRIES } from './neonatologia/neonatologia-enciclopedia';
import { PROCEDIMIENTOS_ENCICLOPEDIA } from './procedimientos/procedimientos-enciclopedia';
import { cronicasData } from './enfermedades-cronicas/cronicas-enciclopedia';
import { buscarEmergencias, getEmergenciaById, emergenciasEnciclopedia } from './emergencias/emergencias-enciclopedia';
import { buscarTamizaje, buscarVacuna, buscarHabito, tamizajesData, vacunasData, habitosSaludablesData } from './medicina-preventiva/preventiva-enciclopedia';

export function registerBatch3(): void {
  registerSpanishModule({
    category: 'salud-hombre',
    label: "Men's Health",
    search: (q) => buscarSaludHombre(q),
    getById: (id) => getSaludHombreById(id),
    getAll: () => saludHombreEnciclopedia,
    entryType: 'condition',
  });

  registerSpanishModule({
    category: 'cuidados-paliativos',
    label: 'Palliative Care',
    search: (q) => buscarCuidadosPaliativos(q),
    getById: (id) => getCuidadosPaliativosById(id),
    getAll: () => cuidadosPaliativosEnciclopedia,
    entryType: 'condition',
  });

  registerSpanishModule({
    category: 'psiquiatria-detallada',
    label: 'Psychiatry',
    search: (q) => buscarPsiquiatria(q),
    getById: (id) => getPsiquiatriaById(id),
    getAll: () => PSIQUIATRIA_ENTRIES,
    entryType: 'condition',
  });

  registerSpanishModule({
    category: 'rehabilitacion',
    label: 'Rehabilitation',
    search: (q) => buscarRehabilitacion(q),
    getById: (id) => getRehabilitacionById(id),
    getAll: () => rehabilitacionEnciclopedia,
    entryType: 'condition',
  });

  registerSpanishModule({
    category: 'urologia-detallada',
    label: 'Urology',
    search: (q) => buscarUrologia(q),
    getById: (id) => getUrologiaById(id),
    getAll: () => UROLOGIA_ENTRIES,
    entryType: 'condition',
  });

  registerSpanishModule({
    category: 'salud-dental',
    label: 'Dental Health',
    search: (q) => buscarDental(q),
    getById: (id) => getDentalById(id),
    getAll: () => dentalEnciclopedia,
    entryType: 'condition',
  });

  registerSpanishModule({
    category: 'oftalmologia',
    label: 'Ophthalmology',
    search: (q) => buscarOftalmologia(q),
    getById: (id) => getOftalmologiaById(id),
    getAll: () => OFTALMOLOGIA_ENTRIES,
    entryType: 'condition',
  });

  registerSpanishModule({
    category: 'infecciosas',
    label: 'Infectious Diseases',
    search: (q) => buscarInfecciosa(q),
    getById: (id) => getInfecciosaById(id),
    getAll: () => infecciosasEnciclopedia,
    entryType: 'condition',
  });

  registerSpanishModule({
    category: 'oncologia',
    label: 'Oncology',
    search: (q) => buscarOncologia(q),
    getById: (id) => getOncologiaById(id),
    getAll: () => ONCOLOGIA_ENTRIES,
    entryType: 'condition',
  });

  registerSpanishModule({
    category: 'neumologia',
    label: 'Pulmonology',
    search: (q) => buscarNeumologia(q),
    getById: (id) => getNeumologiaById(id),
    getAll: () => NEUMOLOGIA_ENTRIES,
    entryType: 'condition',
  });

  registerSpanishModule({
    category: 'neonatologia',
    label: 'Neonatology',
    search: (q) => buscarNeonatologia(q),
    getById: (id) => getNeonatologiaById(id),
    getAll: () => NEONATOLOGIA_ENTRIES,
    entryType: 'condition',
  });

  // Data-only modules (no search functions — use name-based search)
  registerSpanishModule({
    category: 'procedimientos',
    label: 'Procedures',
    search: (q) => {
      const lower = q.toLowerCase();
      return PROCEDIMIENTOS_ENCICLOPEDIA.filter((e: any) =>
        e.nombreEs?.toLowerCase().includes(lower) ||
        e.nombreEn?.toLowerCase().includes(lower)
      );
    },
    getById: (id) => PROCEDIMIENTOS_ENCICLOPEDIA.find((e: any) => e.id === id),
    getAll: () => PROCEDIMIENTOS_ENCICLOPEDIA,
    entryType: 'procedure',
  });

  registerSpanishModule({
    category: 'enfermedades-cronicas',
    label: 'Chronic Diseases',
    search: (q) => {
      const lower = q.toLowerCase();
      return cronicasData.filter((e: any) =>
        e.nombreEs?.toLowerCase().includes(lower) ||
        e.nombreEn?.toLowerCase().includes(lower)
      );
    },
    getById: (id) => cronicasData.find((e: any) => e.id === id),
    getAll: () => cronicasData,
    entryType: 'condition',
  });

  registerSpanishModule({
    category: 'emergencias',
    label: 'Emergency Medicine',
    search: (q) => buscarEmergencias(q),
    getById: (id) => getEmergenciaById(id),
    getAll: () => emergenciasEnciclopedia,
    entryType: 'condition',
  });

  // Medicina preventiva has 3 sub-types — register as one module with combined search
  registerSpanishModule({
    category: 'medicina-preventiva',
    label: 'Preventive Medicine',
    search: (q) => {
      return [
        ...buscarTamizaje(q),
        ...buscarVacuna(q),
        ...buscarHabito(q),
      ];
    },
    getById: (id) => {
      return tamizajesData.find((e: any) => e.id === id)
        || vacunasData.find((e: any) => e.id === id)
        || habitosSaludablesData.find((e: any) => e.id === id);
    },
    getAll: () => [...tamizajesData, ...vacunasData, ...habitosSaludablesData],
    entryType: 'condition',
  });
}
