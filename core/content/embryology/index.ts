/**
 * Embryology - Main Index
 * Exports all embryology educational content
 */

// General Embryology
export {
  fertilization,
  embryogenesis,
  fetalDevelopment,
  generalEmbryologyModules,
  type GeneralEmbryologyModule
} from './general-embryology';

// System Development
export {
  cardiovascularEmbryo,
  respiratoryEmbryo,
  giEmbryo,
  renalEmbryo,
  neuralEmbryo,
  musculoskeletalEmbryo,
  systemDevelopmentModules,
  type SystemDevelopmentModule
} from './system-development';

// Congenital Anomalies
export {
  malformations,
  syndromes,
  teratogens,
  congenitalAnomaliesModules,
  type CongenitalAnomaliesModule
} from './congenital-anomalies';

// All embryology modules
export const embryologyModules = [
  ...['fertilization', 'embryogenesis', 'fetalDevelopment'] as const,
  ...['cardiovascularEmbryo', 'respiratoryEmbryo', 'giEmbryo', 'renalEmbryo', 'neuralEmbryo', 'musculoskeletalEmbryo'] as const,
  ...['malformations', 'syndromes', 'teratogens'] as const
] as const;

export type EmbryologyModule = typeof embryologyModules[number];

// Content by category
export const embryologyContentByCategory = {
  general: {
    fertilization: () => import('./general-embryology/fertilization').then(m => m.fertilizationContent),
    embryogenesis: () => import('./general-embryology/embryogenesis').then(m => m.embryogenesisContent),
    fetalDevelopment: () => import('./general-embryology/fetal-development').then(m => m.fetalDevelopmentContent)
  },
  systems: {
    cardiovascular: () => import('./system-development/cardiovascular-embryo').then(m => m.cardiovascularEmbryoContent),
    respiratory: () => import('./system-development/respiratory-embryo').then(m => m.respiratoryEmbryoContent),
    gastrointestinal: () => import('./system-development/gi-embryo').then(m => m.giEmbryoContent),
    renal: () => import('./system-development/renal-embryo').then(m => m.renalEmbryoContent),
    neural: () => import('./system-development/neural-embryo').then(m => m.neuralEmbryoContent),
    musculoskeletal: () => import('./system-development/musculoskeletal-embryo').then(m => m.musculoskeletalEmbryoContent)
  },
  anomalies: {
    malformations: () => import('./congenital-anomalies/malformations').then(m => m.malformationsContent),
    syndromes: () => import('./congenital-anomalies/syndromes').then(m => m.syndromesContent),
    teratogens: () => import('./congenital-anomalies/teratogens').then(m => m.teratogensContent)
  }
} as const;

export type EmbryologyCategory = keyof typeof embryologyContentByCategory;
