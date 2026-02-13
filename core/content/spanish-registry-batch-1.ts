/**
 * Spanish Registry Batch 1 — Modules 1-17
 *
 * Registers the first batch of Spanish bilingual content modules
 * with the central registry for discovery and encyclopedia integration.
 */

import { registerSpanishModule } from './spanish-module-registry';

// Module imports — each enciclopedia file exports data + search functions
import { buscarMedicamento, getMedicamentoById, medicamentosEnciclopedia } from './medicamentos/medicamentos-enciclopedia';
import { buscarSintoma, getSintomaById, SINTOMAS_ENCICLOPEDIA } from './sintomas/sintomas-enciclopedia';
import { buscarAnatomia, getAnatomiaById, anatomiaEnciclopedia } from './anatomia-paciente/anatomia-enciclopedia';
import { buscarCardiologia, getCardiologiaById, cardiologiaEnciclopedia } from './cardiologia-detallada/cardiologia-enciclopedia';
import { buscarPediatria, getPediatriaById, CONDICIONES_PEDIATRICAS } from './pediatria/pediatria-enciclopedia';
import { buscarNeurologia, getNeurologiaById, neurologiaEnciclopedia } from './neurologia-detallada/neurologia-enciclopedia';
import { buscarMedicinaSueno, getMedicinaSuenoById, MEDICINA_SUENO_ENTRIES } from './medicina-sueno/medicina-sueno-enciclopedia';
import { buscarMedicinaTropical, getMedicinaTropicalById, MEDICINA_TROPICAL_ENTRIES } from './medicina-tropical/medicina-tropical-enciclopedia';
import { buscarSaludOcupacional, getSaludOcupacionalById, SALUD_OCUPACIONAL_ENTRIES } from './salud-ocupacional/salud-ocupacional-enciclopedia';
import { buscarSaludMental, getSaludMentalById, saludMentalCondiciones } from './salud-mental/salud-mental-enciclopedia';
import { buscarSaludSexual, getSaludSexualById, saludSexualEnciclopedia } from './salud-sexual/salud-sexual-enciclopedia';
import { buscarSaludMujer, getSaludMujerById, saludMujerEnciclopedia } from './salud-mujer/salud-mujer-enciclopedia';
import { buscarMedicinaViaje, getMedicinaViajeById, MEDICINA_VIAJE_ENTRIES } from './medicina-viaje/medicina-viaje-enciclopedia';
import { buscarMedicinaDeportiva, getMedicinaDeportivaById, MEDICINA_DEPORTIVA_ENTRIES } from './medicina-deportiva/medicina-deportiva-enciclopedia';
import { buscarMedicinaFisica, getMedicinaFisicaById, MEDICINA_FISICA_ENTRIES } from './medicina-fisica/medicina-fisica-enciclopedia';
import { buscarMedicinaDolor, getMedicinaDolorById, MEDICINA_DOLOR_ENTRIES } from './medicina-dolor/medicina-dolor-enciclopedia';
import { buscarMedicinaIntensiva, getMedicinaIntensivaById, MEDICINA_INTENSIVA_ENTRIES } from './medicina-intensiva/medicina-intensiva-enciclopedia';

export function registerBatch1(): void {
  registerSpanishModule({
    category: 'medicamentos',
    label: 'Medications',
    search: (q) => buscarMedicamento(q),
    getById: (id) => getMedicamentoById(id),
    getAll: () => medicamentosEnciclopedia,
    entryType: 'medication',
  });

  registerSpanishModule({
    category: 'sintomas',
    label: 'Symptoms',
    search: (q) => buscarSintoma(q),
    getById: (id) => getSintomaById(id),
    getAll: () => SINTOMAS_ENCICLOPEDIA,
    entryType: 'symptom',
  });

  registerSpanishModule({
    category: 'anatomia-paciente',
    label: 'Anatomy',
    search: (q) => buscarAnatomia(q),
    getById: (id) => getAnatomiaById(id),
    getAll: () => anatomiaEnciclopedia,
    entryType: 'anatomy',
  });

  registerSpanishModule({
    category: 'cardiologia-detallada',
    label: 'Cardiology',
    search: (q) => buscarCardiologia(q),
    getById: (id) => getCardiologiaById(id),
    getAll: () => cardiologiaEnciclopedia,
    entryType: 'condition',
  });

  registerSpanishModule({
    category: 'pediatria',
    label: 'Pediatrics',
    search: (q) => buscarPediatria(q),
    getById: (id) => getPediatriaById(id),
    getAll: () => CONDICIONES_PEDIATRICAS,
    entryType: 'condition',
  });

  registerSpanishModule({
    category: 'neurologia-detallada',
    label: 'Neurology',
    search: (q) => buscarNeurologia(q),
    getById: (id) => getNeurologiaById(id),
    getAll: () => neurologiaEnciclopedia,
    entryType: 'condition',
  });

  registerSpanishModule({
    category: 'medicina-sueno',
    label: 'Sleep Medicine',
    search: (q) => buscarMedicinaSueno(q),
    getById: (id) => getMedicinaSuenoById(id),
    getAll: () => MEDICINA_SUENO_ENTRIES,
    entryType: 'condition',
  });

  registerSpanishModule({
    category: 'medicina-tropical',
    label: 'Tropical Medicine',
    search: (q) => buscarMedicinaTropical(q),
    getById: (id) => getMedicinaTropicalById(id),
    getAll: () => MEDICINA_TROPICAL_ENTRIES,
    entryType: 'condition',
  });

  registerSpanishModule({
    category: 'salud-ocupacional',
    label: 'Occupational Health',
    search: (q) => buscarSaludOcupacional(q),
    getById: (id) => getSaludOcupacionalById(id),
    getAll: () => SALUD_OCUPACIONAL_ENTRIES,
    entryType: 'condition',
  });

  registerSpanishModule({
    category: 'salud-mental',
    label: 'Mental Health',
    search: (q) => buscarSaludMental(q),
    getById: (id) => getSaludMentalById(id),
    getAll: () => saludMentalCondiciones,
    entryType: 'condition',
  });

  registerSpanishModule({
    category: 'salud-sexual',
    label: 'Sexual Health',
    search: (q) => buscarSaludSexual(q),
    getById: (id) => getSaludSexualById(id),
    getAll: () => saludSexualEnciclopedia,
    entryType: 'condition',
  });

  registerSpanishModule({
    category: 'salud-mujer',
    label: "Women's Health",
    search: (q) => buscarSaludMujer(q),
    getById: (id) => getSaludMujerById(id),
    getAll: () => saludMujerEnciclopedia,
    entryType: 'condition',
  });

  registerSpanishModule({
    category: 'medicina-viaje',
    label: 'Travel Medicine',
    search: (q) => buscarMedicinaViaje(q),
    getById: (id) => getMedicinaViajeById(id),
    getAll: () => MEDICINA_VIAJE_ENTRIES,
    entryType: 'condition',
  });

  registerSpanishModule({
    category: 'medicina-deportiva',
    label: 'Sports Medicine',
    search: (q) => buscarMedicinaDeportiva(q),
    getById: (id) => getMedicinaDeportivaById(id),
    getAll: () => MEDICINA_DEPORTIVA_ENTRIES,
    entryType: 'condition',
  });

  registerSpanishModule({
    category: 'medicina-fisica',
    label: 'Physical Medicine',
    search: (q) => buscarMedicinaFisica(q),
    getById: (id) => getMedicinaFisicaById(id),
    getAll: () => MEDICINA_FISICA_ENTRIES,
    entryType: 'condition',
  });

  registerSpanishModule({
    category: 'medicina-dolor',
    label: 'Pain Medicine',
    search: (q) => buscarMedicinaDolor(q),
    getById: (id) => getMedicinaDolorById(id),
    getAll: () => MEDICINA_DOLOR_ENTRIES,
    entryType: 'condition',
  });

  registerSpanishModule({
    category: 'medicina-intensiva',
    label: 'Critical Care',
    search: (q) => buscarMedicinaIntensiva(q),
    getById: (id) => getMedicinaIntensivaById(id),
    getAll: () => MEDICINA_INTENSIVA_ENTRIES,
    entryType: 'condition',
  });
}
