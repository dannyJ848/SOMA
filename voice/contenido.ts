/**
 * Spanish Medical Content - Content Library
 *
 * Comprehensive medical education content in Spanish
 * Sourced from:
 * - MedlinePlus en español
 * - OpenStax Anatomy & Physiology 2e (Spanish)
 * - LibreTexts Español
 * - NIH Spanish health resources
 * - WHO Spanish materials
 */

import type { NivelLectura, TipoVisualizacion, ModuloEducativo } from './types';
import type { CategoriaMedica, NivelLectura, MetadatosNivel } from './spanish/types';

// ============================================================================
// MEDICAL SPECIALTIES IN SPANISH
// ============================================================================
export const ESPECIALIDADES_MEDICAS = {
  cardiologia: {
    nombre: 'Cardiología',
    icono: '❤️',
    color: '#e74c4c',
    descripcion: 'Estudio del corazón y enfermedades cardiovasculares',
    topicos: ['corazón', 'ritmo cardíaco', 'presión arterial', 'enfermedad coronaria', 'insuficiencia cardíaca'],
  },
  neumologia: {
    nombre: 'Neurología',
    icono: '🧠',
    color: '#4a90d9',
    descripcion: 'Estudio del sistema nervioso',
    topicos: ['cerebro', 'médula espinal', 'nervios', 'accidente cerebrovascular', 'esclerosis múltiple'],
  },
  neumologia: {
    nombre: 'Neumología',
    icono: '👃',
    color: '#20b2aa',
    descripcion: 'Cirugía del sistema nervioso',
    topicos: ['tumor cerebral', 'aneurisma', 'epilepsia', 'enfermedad de Parkinson'],
  },
  psiquiatria: {
    nombre: 'Psiquiatría',
    icono: '🧠',
    color: '#9370db',
    descripcion: 'Salud mental y trastornos psiquiátricos',
    topicos: ['depresión', 'ansiedad', 'trastorno bipolar', 'esquizofrenia'],
  },
  endocrinologia: {
    nombre: 'Endocrinología',
    icono: '💊',
    color: '#ff69b4',
    descripcion: 'Sistema endocrino y hormonas',
    topicos: ['diabetes', 'tiroides', 'obesidad', 'síndrome metabólico'],
  },
  gastroenterologia: {
    nombre: 'Gastroenterología',
    icono: '🫃',
    color: '#daa520',
    descripcion: 'Sistema digestivo',
    topicos: ['reflujo gastroesofágico', 'enfermedad inflamatoria intestinal', 'cirrosis', 'úlceras'],
  },
  nefrologia: {
    nombre: 'Nefrología',
    icono: '🫘',
    color: '#9370db',
    descripcion: 'Riñones y sistema urinario',
    topicos: ['insuficiencia renal', 'enfermedad renal crónica', 'diálisis', 'trasplante renal'],
  },
  neumologia: {
    nombre: 'Neumología',
    icono: '🫁',
    color: '#87ceeb',
    descripcion: 'Sistema respiratorio',
    topicos: ['asma', 'EPOC', 'neumonía', 'cáncer de pulmón', 'fibrosis quística'],
  },
  reumatologia: {
    nombre: 'Reumatología',
    icono: '🦴',
    color: '#c44d4d',
    descripcion: 'Enfermedades reumáticas y autoinmunes',
    topicos: ['artritis', 'lupus', 'fibromialgia', 'gota'],
  },
  oncologia: {
    nombre: 'Oncología',
    icono: '🎗',
    color: '#ef4444',
    descripcion: 'Cáncer y tumores',
    topicos: ['quimioterapia', 'inmunoterapia', 'biopsia', 'metástasis'],
  },
  hematologia: {
    nombre: 'Hematología',
    icono: '🩸',
    color: '#f97316',
    descripcion: 'Sangre y tejido sanguíneo',
    topicos: ['anemia', 'leucemia', 'linfoma', 'trastornos de coagulación'],
  },
  inmunologia: {
    nombre: 'Inmunología',
    icono: '🛡️',
    color: '#20b2aa',
    descripcion: 'Sistema inmunitario',
    topicos: ['alergias', 'inmunodeficiencia', 'vacunas', 'autoinmunidad'],
  },
  alergologia: {
    nombre: 'Alergología',
    icono: '🤧',
    color: '#f59e0b',
    descripcion: 'Alergias e hipersensibilidad',
    topicos: ['alergia estacional', 'alergia alimentaria', 'anafilaxia', 'urticaria'],
  },
  dermatologia: {
    nombre: 'Dermatología',
    icono: '🧴',
    color: '#f4d7c4',
    descripcion: 'Piel y sus enfermedades',
    topicos: ['eczema', 'psoriasis', 'acné', 'dermatitis atópica'],
  },
  oftalmologia: {
    nombre: 'Oftalmología',
    icono: '👁️',
    color: '#10b981',
    descripcion: 'Ojos y visión',
    topicos: ['cataratas', 'glaucoma', 'conjuntivitis', 'retinopatía'],
  },
  otorrinolaringologia: {
    nombre: 'Otorrinolaringología',
    icono: '👂',
    color: '#f4d7c4',
    descripcion: 'Oídos y garganta',
    topicos: ['otitis', 'sinusitis', 'amigdalitis', 'hipoacusia'],
  },
  ginecologia: {
    nombre: 'Ginecología',
    icono: '♀️',
    color: '#ff69b4',
    descripcion: 'Salud reproductiva femenina',
    topicos: ['embarazo', 'endometriosis', 'miomas', 'menopausia'],
  },
  urologia: {
    nombre: 'Urología',
    icono: '♂️',
    color: '#20b2aa',
    descripcion: 'Sistema urinario masculino',
    topicos: ['hipertrofia prostática', 'cáncer de próstata', 'infecciones urinarias'],
  },
  ortopedia: {
    nombre: 'Ortopedia',
    icono: '🦴',
    color: '#c44d4d',
    descripcion: 'Huesos, articulaciones y músculos',
    topicos: ['fracturas', 'escoliosis', 'artrosis', 'osteoporosis'],
  },
  pediatria: {
    nombre: 'Pediatría',
    icono: '👶',
    color: '#87ceeb',
    descripcion: 'Salud infantil',
    topicos: ['desarrollo infantil', 'vacunación', 'enfermedades de la niñez'],
  },
  gerontologia: {
    nombre: 'Gerontología',
    icono: '👴',
    color: '#f59e0b',
    descripcion: 'Envejecimiento y salud del adulto mayor',
    topicos: ['demencia', 'osteoporosis', 'caídas', 'cuidados paliativos'],
  },
} as const;

// ============================================================================
// LABORATORY TESTS IN SPANISH
// ============================================================================
export const PRUEBAS_LABORATORIO = {
  hemograma_completo: {
    nombre: 'Hemograma Completo',
    abreviatura: 'HBC',
    descripcion: 'Análisis de sangre completo que evalúa células sanguíneas',
    componente: 'glóbulos rojos',
    icono: '🩸',
    para_que_sirve: 'Diagnosticar anemia, infecciones, trastornos sanguíneos',
    referencia: {
      rango_normal: '4.5-5.5 millones/células',
      bajo: '< 4.5 millones/células',
      alto: '> 5.5 millones/células',
    },
  },
  hemoglobina: {
    nombre: 'Hemoglobina',
    abreviatura: 'Hb',
    descripcion: 'Proteína en glóbulos rojos que transporta oxígeno',
    icono: '🔴',
    referencia: {
      hombres_normal: '13.5-17.5 g/dL',
      mujeres_normal: '12.0-15.5 g/dL',
      bajo: '< 13 g/dL (hombres), < 12 g/dL (mujeres)',
      alto: '> 17.5 g/dL (hombres), > 15.5 g/dL (mujeres)',
      causa_baja: 'Anemia, deficiencia de hierro, pérdida de sangre',
      causa_alta: 'Deshidratación, enfermedad pulmonar, vivir en altitud',
    },
  },
  hematocrito: {
    nombre: 'Hematocrito',
    abreviatura: 'Hct',
    descripcion: 'Porcentaje de volumen sanguíneo ocupado por glóbulos rojos',
    icono: '🩸',
    referencia: {
      hombres_normal: '38.3-48.6%',
      mujeres_normal: '35.5-44.9%',
      bajo: '< 38% (hombres), < 35.5% (mujeres)',
      alto: '> 48.6% (hombres), > 44.9% (mujeres)',
      causa_baja: 'Anemia, hemorragia, hiperplasia',
      causa_alta: 'Deshidratación, síndrome de hiperviscosidad',
    },
  },
  glucosa: {
    nombre: 'Glucosa en Sangre',
    abreviatura: 'Glucosa',
    descripcion: 'Nivel de azúcar en sangre',
    icono: '🍬',
    referencia: {
      ayunas_normal: '70-99 mg/dL',
      posprandial_normal: '< 100 mg/dL',
      alto: '≥ 126 mg/dL (en ayunas) o ≥ 200 mg/dL (2h postprandial)',
      diagnosis: {
        normal: 'Glucemia normal',
        hiperglucemia_ayunas: 'Hiperglucemia de ayunas',
        hiperglucemia_aleatoria: 'Hiperglucemia aleatoria',
        prediabetes: 'Prediabetes',
        diabetes: 'Diabetes',
      },
    },
  },
  hba1c: {
    nombre: 'Hemoglobina A1c',
    abreviatura: 'HbA1c',
    descripcion: 'Promedio de glucosa en sangre de los últimos 3 meses',
    icono: '📊',
    referencia: {
      normal: '< 5.7%',
      prediabetes: '5.7-6.4%',
      diabetes: '≥ 6.5%',
    },
  },
  creatinina: {
    nombre: 'Creatinina',
    abreviatura: 'Cre',
    descripcion: 'Residuo del metabolismo muscular',
    icono: '🧪',
    referencia: {
      hombres_normal: '0.7-1.3 mg/dL',
      mujeres_normal: '0.6-1.1 mg/dL',
      alto: '> 1.3 mg/dL (hombres), > 1.1 mg/dL (mujeres)',
      causas_altas: 'Deshidratación, lesión muscular, ejercicio intenso, enfermedad renal',
      significado: 'Indica función renal',
    },
  },
  nitrogeno_ureico: {
    nombre: 'Nitrógeno Ureico (BUN)',
    abreviatura: 'BUN',
    descripcion: 'Residuo del metabolismo de proteínas',
    icono: '🔬',
    referencia: {
      normal: '7-20 mg/dL',
      alto: '> 20 mg/dL',
      causas_altas: 'Deshidratación, dieta alta en proteínas, enfermedad renal',
      significado: 'Evalúa función renal y estado de hidratación',
    },
  },
  lipidograma: {
    nombre: 'Perfil Lipídico',
    abreviatura: 'Lípidos',
    descripcion: 'Grasas y colesterol en sangre',
    icono: '📊',
    componentes: {
      colesterol_total: {
        nombre: 'Colesterol Total',
        unidades: 'mg/dL',
        referencia: {
          deseable: '< 200 mg/dL',
          limite_superior: '200-239 mg/dL',
          alto: '≥ 240 mg/dL',
        },
      },
      ldl: {
        nombre: 'Colesterol LDL (malo)',
        unidades: 'mg/dL',
        referencia: {
          optimo: '< 100 mg/dL',
          cercano_alto: '100-129 mg/dL',
          alto: '≥ 130 mg/dL',
          muy_alto: '≥ 190 mg/dL',
          significado: 'Colesterol malo que obstruye arterias',
        },
      },
      hdl: {
        nombre: 'Colesterol HDL (bueno)',
        unidades: 'mg/dL',
        referencia: {
          bajo: '< 40 mg/dL (hombres), < 50 mg/dL (mujeres)',
          optimo: '≥ 60 mg/dL',
          significado: 'Colesterol bueno que protege el corazón',
        },
      },
      trigliceridos: {
        nombre: 'Triglicéridos',
        unidades: 'mg/dL',
        referencia: {
          normal: '< 150 mg/dL',
          alto: '150-199 mg/dL',
          muy_alto: '≥ 200 mg/dL',
          causas_altas: 'Obesidad, alcohol, diabetes, dieta alta en carbohidratos',
        },
      },
    },
  },
  pruebas_tiroideas: {
    tsh: {
      nombre: 'Hormona Estimulante de Tiroides (TSH)',
      unidades: 'mU/L',
      referencia: {
        normal: '0.4-4.0 mU/L',
        hipotiroidismo_primario: '> 4.0 mU/L',
        hipotiroidismo_secundario: '< 0.4 mU/L',
        significado: 'TSH alta indica hipotiroidismo, baja indica hipertiroidismo',
      },
    },
    t4_libre: {
      nombre: 'Tiroxina (T4) Libre',
      unidades: 'ng/dL',
      referencia: {
        normal: '0.8-1.8 ng/dL',
        bajo: '< 0.8 ng/dL (hipotiroidismo)',
        alto: '> 1.8 ng/dL (hipertiroidismo)',
      },
    },
  },
  enzimas_cardiacas: {
    troponina: {
      nombre: 'Troponina',
      descripcion: 'Proteína del músculo cardíaco',
      unidades: 'ng/mL',
      referencia: {
        normal: '< 0.04 ng/mL',
        alto: '≥ 0.04 ng/mL',
        significado: 'Indica daño al músculo cardíaco (infarto del miocardio)',
      },
    },
    bnp: {
      nombre: 'Péptido Natriurético (BNP)',
      descripcion: 'Indica función cardíaca',
      unidades: 'pg/mL',
      referencia: {
        normal: '< 100 pg/mL',
        alto: '≥ 100 pg/mL',
        significado: 'Indica insuficiencia cardíaca',
      },
    },
    ck_mb: {
      nombre: 'Creatin Quinasa (CK-MB)',
      descripcion: 'Enzima del músculo',
      unidades: 'U/L',
      referencia: {
        normal: '22-198 U/L (hombres), 14-121 U/L (mujeres)',
        alto: '> 1000 U/L',
        significado: 'Indica daño muscular',
      },
    },
  },
  panel_hepatico: {
    alt: {
      nombre: 'ALT (SGPT)',
      descripcion: 'Enzima del hígado',
      unidades: 'U/L',
      referencia: {
        normal: '7-56 U/L',
        alto: '> 56 U/L',
        significado: 'Indica daño hepático',
      },
    },
    ast: {
      nombre: 'AST (SGOT)',
      unidades: 'U/L',
      referencia: {
        normal: '10-40 U/L',
        alto: '> 40 U/L',
        significado: 'Puede indicar daño hepático o muscular',
      },
    },
    bilirrubina: {
      nombre: 'Bilirrubina Total',
      unidades: 'mg/dL',
      referencia: {
        normal: '0.3-1.2 mg/dL',
        alta: '> 1.2 mg/dL',
        causas: 'Hepatitis, obstrucción biliar, alcoholismo, síndrome de Gilbert',
      },
    },
  },
  marcadores_inflamatorios: {
    proteina_c_reactiva: {
      nombre: 'Proteína C Reactiva (CRP)',
      unidades: 'mg/L',
      referencia: {
        normal: '< 3.0 mg/L',
        elevado: '≥ 10 mg/L',
        significado: 'Indica inflamación en el cuerpo',
      },
    },
    velocidad_sedimentacion: {
      nombre: 'Velocidad de Sedimentación Globular (VSG o ESR)',
      unidades: 'mm/hora',
      referencia: {
        normal_hombres: '0-15 mm/hora',
        normal_mujeres: '0-20 mm/hora',
        elevado: '> 15 (hombres), > 20 (mujeres)',
        significado: 'Indica inflamación crónica o infección',
      },
    },
  },
  electrolitos: {
    sodio: {
      nombre: 'Sodio',
      unidades: 'mEq/L',
      referencia: {
        normal: '135-145 mEq/L',
        bajo: '< 135 mEq/L',
        alto: '> 145 mEq/L',
        causas_bajas: 'Deshidratación, vómitos, sudoración excesiva',
        causas_altas: 'Deshidratación, síndrome de Cushing, insuficiencia renal',
      },
    },
    potasio: {
      nombre: 'Potasio',
      unidades: 'mEq/L',
      referencia: {
        normal: '3.5-5.1 mEq/L',
        bajo: '< 3.5 mEq/L (hipopotasemia)',
        alto: '> 5.1 mEq/L (hiperpotasemia)',
        significado: 'Importante para función nerviosa y muscular',
      },
    },
  },
} as const;

// ============================================================================
// ANATOMY TERMS IN SPANISH
// ============================================================================
export const TERMINO_ANATOMICA = {
  sistemas_corporales: {
    esqueletico: {
      nombre: 'Sistema Esquelético',
      descripcion: 'Huesos y articulaciones que dan estructura al cuerpo',
      estructuras: ['cráneo', 'columna vertebral', 'costillas', 'esternón', 'pelvis', 'extremidades'],
      funciones: ['Protección', 'soporte', 'movimiento', 'producción de células sanguíneas', 'almacenamiento de minerales'],
    },
    muscular: {
      nombre: 'Sistema Muscular',
      descripcion: 'Tejidos que permiten el movimiento',
      tipos: ['esquelético', 'liso', 'cardíaco', 'liso'],
      funciones: ['Movilidad', 'postura', 'producción de calor', 'bombeo sanguíneo'],
    },
    nervioso: {
      nombre: 'Sistema Nervioso',
      descripcion: 'Red de comunicación del cuerpo',
      componentes: ['sistema nervioso central', 'sistema nervioso periférico', 'sistema nervioso autónomo'],
      funciones: ['Procesamiento de información', 'coordinación', 'control del cuerpo', 'sensación'],
    },
    endocrino: {
      nombre: 'Sistema Endocrino',
      descripcion: 'Glándulas que producen hormonas',
      glandulas: ['hipófisis', 'hipófisis', 'tiroides', 'paratiroides', 'suprarrenales', 'adrenales'],
      funciones: ['Regulación del metabolismo', 'crecimiento', 'desarrollo', 'reproducción'],
    },
    cardiovascular: {
      nombre: 'Sistema Cardiovascular',
      descripcion: 'Corazón y vasos sanguíneos',
      componentes: ['corazón', 'arterias', 'venas', 'capilares'],
      funciones: ['Bombeo de sangre', 'oxigenación', 'nutrición', 'regulación térmica'],
    },
    respiratorio: {
      nombre: 'Sistema Respiratorio',
      descripcion: 'Intercambio de gases',
      organos: ['nariz', 'faringe', 'laringe', 'tráquea', 'bronquios', 'pulmones'],
      funciones: ['Ventilación', 'oxigenación', 'fonación'],
    },
    digestivo: {
      nombre: 'Sistema Digestivo',
      descripcion: 'Digestión y absorción de nutrientes',
      organos: ['boca', 'esófago', 'estómago', 'intestino delgado', 'intestino grueso', 'hígado', 'páncreas', 'vesícula biliar', 'intestino grueso'],
      funciones: ['Ingestión', 'digestión', 'absorción', 'procesamiento de nutrientes'],
    },
    urinario: {
      nombre: 'Sistema Urinario',
      descripcion: 'Producción y eliminación de orina',
      organos: ['riñones', 'uréteres', 'vejiga', 'uretra'],
      funciones: ['Filtración de sangre', 'equilibrio de electrolitos', 'presión arterial'],
    },
    reproductor: {
      nombre: 'Sistema Reproductor',
      descripcion: 'Reproducción',
      organos_principales: ['gónadas', 'testículos', 'pene', 'próstata', 'vesículas seminales'],
      funciones: ['Producción de gametos', 'producción de hormonas sexuales'],
    },
  },
  direcciones_anatomicas: {
    anterior: 'Anterior',
    posterior: 'Posterior',
    superior: 'Superior',
    inferior: 'Inferior',
    lateral: 'Lateral',
    medial: 'Medial',
    proximal: 'Proximal',
    distal: 'Distal',
    dorsal: 'Dorsal',
    ventral: 'Ventral',
  },
  planos_anatomicos: {
    sagital: 'Plano Sagital (izquierda-derecha)',
    descripcion: 'Divide el cuerpo en mitades izquierda y derecha',
    coronal: 'Plano Coronal (frente-atrás)',
    descripcion: 'Divide el cuerpo en partes anterior y posterior',
    transversal: 'Plano Transversal (arriba-abajo)',
    descripcion: 'Divide el cuerpo en partes superior e inferior',
  },
};

// ============================================================================
// MEDICATIONS IN SPANISH
// ============================================================================
export const MEDICAMENTOS_COMUNES = {
  analgesicos: {
    descripcion: 'Alivian el dolor',
    tipos: {
      paracetamol: {
        nombre: 'Paracetamol',
        marcas_comunes: ['Tylenol', 'Panadol', 'Excedrin'],
        usos: 'Dolor de cabeza, dolores musculares, dolor articular, fiebre',
        advertencias: 'No exceder 4,000 mg en 24 horas. Puede causar daño hepático.',
      },
      ibuprofeno: {
        nombre: 'Ibuprofeno',
        marcas_comunes: ['Advil', 'Motrin'],
        usos: 'Dolor, inflamación, fiebre',
        advertencias: 'Tomar con alimentos para proteger el estómago. No usar en niños menores de 6 meses.',
      },
      aspirina: {
        nombre: 'Aspirina',
        marcas_comunes: ['Aspirin', 'Bayer'],
        usos: 'Dolor, fiebre, inflamación, protección cardíaca',
        advertencias: 'No usar en niños menores de 16 años (síndrome de Reye). Tomar con alimentos.',
      },
    },
  },
  antiinflamatorios_no_esteroideos: {
    descripcion: 'Reducen la inflamación sin esteroides',
    tipos: {
      naproxeno: {
        nombre: 'Naproxeno',
        marcas_comunes: ['Aleve'],
        usos: 'Artritis, dolor muscular, dolor de muela',
        advertencias: 'Tomar cada 8-12 horas. Puede causar somnolencia.',
      },
      diclofenaco: {
        nombre: 'Diclofenaco',
        marcas_comunes: ['Voltaren'],
        usos: 'Dolor articular, artritis reumatoide',
        advertencias: 'No usar en personas con úlceras estomacales activas.',
      },
    },
  },
  antihipertensivos: {
    descripcion: 'Tratan la presión arterial alta',
    tipos: {
      inhibidores_ace: {
        nombre: 'Inhibidores de la ECA',
        ejemplos: ['Enalapril', 'Lisinopril'],
        usos: 'Hipertensión, insuficiencia cardíaca, nefroprotectora en diabetes',
        advertencias: 'Puede causar tos seca, hiperpotasemia. No usar en embarazo.',
      },
      antagonistas_calcio: {
        nombre: 'Antagonistas del Calcio',
        ejemplos: ['Amlodipina'],
        usos: 'Hipertensión, angina de pecho',
        advertencias: 'No usar con inhibidores de la ECA.',
      },
      diureticos: {
        nombre: 'Diuréticos',
        ejemplos: ['Furosemida', 'Hidroclorotiazida'],
        usos: 'Hipertensión, edema',
        advertencias: 'Aumenta la producción de orina. Puede causar deshidratación.',
      },
    },
  },
};

// ============================================================================
// SYMPTOMS IN SPANISH
// ============================================================================
export const SINTOMAS_COMUNES = {
  dolor: {
    nombre: 'Dolor',
    icono: '😣',
    preguntas_doctor: [
      '¿Cuándo comenzó el dolor?',
      '¿Qué tipo de dolor es (punzante, opresivo, ardor)?',
      '¿Qué tan fuerte es el dolor en escala del 1 al 10?',
      '¿El dolor es constante o intermitente?',
      '¿Qué lo empeora o mejora?',
      '¿El dolor se irradia a otras partes del cuerpo?',
      '¿Tiene otros síntomas acompañantes?',
    ],
    terminos_relacionados: ['dolor crónico', 'dolor agudo', 'umbral de dolor', 'analgesia'],
  },
  fiebre: {
    nombre: 'Fiebre',
    icono: '🌡️',
    preguntas_doctor: [
      '¿Cuánto tiempo tiene la fiebre?',
      '¿Cuál es la temperatura más alta?',
      '¿Tiene escalofríos?',
      '¿Tiene tos o dolor de cabeza?',
      '¿Tiene dolor de garganta?',
      '¿Tiene tos seca o tos con flema?',
      '¿Tiene erupción o sarpullido?',
      '¿Ha tomado algo para la fiebre?',
    ],
    causas_comunes: ['infección viral', 'infección bacteriana', 'inflamación', 'gripe', 'COVID-19'],
    terminos_relacionados: ['pirexia', 'escalofrío', 'fiebre recurrente'],
  },
  nausea: {
    nombre: 'Náusea',
    icono: '🤢',
    preguntas_doctor: [
      '¿Cuándo comenzó la náusea?',
      '¿Tiene vómitos?',
      '¿Tiene mareos?',
      '¿Tiene dolor abdominal?',
      '¿Ha perdido el apetito?',
      '¿Qué ha comido recientemente?',
    ],
    causas_comunes: ['gastroenteritis viral', 'intoxicación alimentaria', 'embarazo', 'migración', 'mareo'],
    terminos_relacionados: ['vómitos', 'deshidratación', 'gastroenteritis', 'reflujo'],
  },
  fatiga: {
    nombre: 'Fatiga',
    icono: '😴',
    preguntas_doctor: [
      '¿Desde cuándo se siente cansado?',
      '¿Cuánto tiempo de sueño tiene?',
      '¿El cansancio es constante o intermitente?',
      '¿Le afecta sus actividades diarias?',
      '¿Ha notado cambios de peso recientemente?',
    ],
    causas_comunes: ['privación de sueño', 'anemia', 'depresión', 'hipotiroidismo', 'enfermedad crónica'],
    terminos_relacionados: ['agotamiento', 'letargo', 'astenia'],
  },
};

// ============================================================================
// VITAL SIGNS IN SPANISH
// ============================================================================
export const SIGNOS_VITALES_ESPANIOL = {
  temperatura: {
    normal: '36.1-37.2°C (97-99°F)',
    fiebre_baja: '37.3-38.0°C',
    fiebre_moderada: '38.1-39.0°C',
    fiebre_alta: '≥ 39.0°C',
    hipotermia: '< 35.0°C',
  },
  presion_arterial: {
    sistolica_normal: '90-120 mmHg',
    sistolica_elevada: '120-129 mmHg',
    hipertension_grado_1: '130-139 mmHg',
    hipertension_grado_2: '≥ 140 mmHg',
    diastolica_normal: '60-80 mmHg',
  },
  frecuencia_cardiaca: {
    reposo_normal: '60-100 lat/min',
    ejercicio: '100-170 lat/min',
    bradicardia: '< 60 o > 100 lat/min',
    taquicardia: '> 100 lat/min',
  },
  saturacion_oxigeno: {
    normal: '95-100%',
    leve: '90-94%',
    moderada: '80-89%',
    severa: '< 80%',
    terminology: {
      hipoxemia: 'Nivel bajo de oxígeno en sangre',
      cianosis: 'Color azulado en piel/labios por bajo oxígeno',
    },
  },
  frecuencia_respiratoria: {
    normal: '12-20 respiraciones/minuto',
    taquipnea: '< 12',
    bradipnea: '> 20',
  },
};

// ============================================================================
// EMERGENCY MEDICINE IN SPANISH
// ============================================================================
export const URGENCIAS_MEDICAS = {
  signos_rojos: {
    nombre: 'Señales de Alarma',
    icono: '🚨',
    descripcion: 'Busque atención médica inmediatamente',
    urgencia: 'alta',
    ejemplos: [
      'Dolor opresivo de pecho',
      'Dificultad para respirar',
      'Dolor o presión en el brazo izquierdo',
      'Dolor o presión en el mandíbula o garganta',
      'Mareo, confusión o desmayo',
      'Sudoración fría y pálida',
      'Apariencia de enfermedad grave',
    ],
    terminos: ['síndrome coronario agudo', 'infarto del miocardio', 'embolia pulmonar'],
  },
  emergencia: {
    nombre: 'Emergencia',
    icono: '🚑',
    urgencia: 'muy alta',
    definicion: 'Condición médica que pone en riesgo la vida',
    ejemplos: [
      'Dolor opresivo de pecho',
      'Dificultad para respirar',
      'Dolor que se irradia al brazo o mandíbula',
      'Sudoración fría y pálida',
      'Mareo o desmayo',
      'Pérdida de conciencia',
      'Apariencia de enfermedad grave',
    ],
    terminos: ['paro cardíaco', 'ataque cardíaco', 'shock'],
    acciones: ['Llamar al 911', 'Ir a urgencias', 'No conducir'],
  },
  urgencia: {
    nombre: 'Urgencia',
    icono: '🏥',
    urgencia: 'alta',
    definicion: 'Condición médica que requiere atención rápida',
    ejemplos: [
      'Fiebre alta (> 39°C) que no responde a tratamiento',
      'Dolor abdominal intenso',
      'Vómitos persistentes',
      'Cambios repentinos en la visión',
      'Dolor de cabeza intenso con rigidez de cuello',
      'Debilidad o confusión repentina',
      'Apariencia de enfermedad significativa',
    ],
    terminos: ['infección', 'lesión', 'dolor agudo', 'trauma'],
    acciones: ['Llamar al médico', 'Ir a urgencias', 'No conducir'],
  },
  consulta_externa: {
    nombre: 'Consulta Externa',
    icono: '👨',
    urgencia: 'baja',
    definicion: 'Cita programada con proveedor de atención médica',
    ejemplos: [
      'Chequeo de salud de rutina',
      'Seguimiento de condición crónica',
      'Renovación de receta médica',
      'Examen físico de trabajo o escuela',
    ],
    terminos: ['medico de cabecera', 'pediatra', 'ginecóloga', 'especialista'],
    acciones: ['Llamar para cita', 'Seguir recomendaciones', 'Preparar preguntas'],
  },
};

// ============================================================================
// PATIENT EDUCATION - HEALTHY LIFESTYLE
// ============================================================================
export const EDUCACION_PACIENTE = {
  nutricion: {
    nombre: 'Nutrición',
    icono: '🥗',
    consejos: [
      'Coma más frutas y verduras',
      'Reduzca el consumo de azúcar',
      'Beba suficiente agua',
      'Limite la sal y alimentos procesados',
      'Elija el alcohol o consuma con moderación',
      'Reduzca grasas saturadas',
      'Aumente fibra con granos integrales',
      'Consuma proteínas magras en moderación',
      'Prefiera métodos de cocción al vapor',
    ],
    terminos: ['macronutrientes', 'micronutrientes', 'calorías', 'carbohidratos', 'proteínas', 'grasas', 'vitaminas'],
  },
  ejercicio: {
    nombre: 'Ejercicio',
    icono: '🏃',
    consejos: [
      'Aimine por 30 minutos de actividad moderada casi todos los días',
      'Incluya entrenamiento de fuerza 2 veces por semana',
      'Aumente su actividad diaria gradualmente',
      'Encuentre actividades que disfrute',
      'Use las escaleras en lugar del ascensor',
      'Haga estiramientos después de estar sentado',
      'Incluya ejercicios de flexibilidad y equilibrio',
      'Camine 10,000 pasos diarios',
    ],
    niveles: {
      ligero: {
        descripcion: 'Caminar a paso ligero',
        ejemplos: ['Pasear', 'caminar', 'jardinería ligera'],
      },
      moderado: {
        descripcion: 'Actividad que aumenta el ritmo cardíaco',
        ejemplos: ['Bailar', 'montar en bicicleta', 'nadar', 'aeróbic ligera'],
      },
      vigoroso: {
        descripcion: 'Ejercicio intenso',
        ejemplos: ['Correr', 'deportes', 'entrenamiento con pesas'],
      },
    },
  },
  sueno: {
    nombre: 'Sueño',
    icono: '😴',
    consejos: [
      'Acuéstese a la misma hora todos los días',
      'Duerma 7-9 horas de sueño por noche',
      'Evite pantallas antes de dormir',
      'Evite la cafeína por lo menos 6 horas antes de dormir',
      'Cree un ambiente relajante para dormir',
      'Evite comidas copiosas antes de dormir',
      'Limite el alcohol antes de dormir',
      'Haga ejercicio regular pero no muy cerca de la hora de dormir',
    ],
    problemas_comunes: ['insomnio', 'apnea del sueño', 'ronquido', 'narcolepsia', 'bruxismo'],
  },
  estres: {
    nombre: 'Manejo del Estrés',
    icono: '😰',
    consejos: [
      'Identifique sus fuentes de estrés',
      'Aprenda técnicas de relajación',
      'Establezca límites claros',
      'Priorice el autocuidado',
      'Conecte con amigos y familiares',
      'Busque ayuda profesional si necesita',
      'Encuentre tiempo para pasatiempos',
    ],
    terminos: ['cortisol', 'adrenalina', 'noradrenalina', 'burnout'],
  },
};

// ============================================================================
// SPANISH CONTENT SUMMARY
// ============================================================================
export const RESUMEN_CONTENIDO_ESPANIOL = {
  encabezados_sistemas: [
    'Nombre del sistema',
    'Descripción general',
    'Órganos principales',
    'Funciones vitales',
    'Condiciones comunes',
  ],
  encabezados_laboratorio: [
    'Nombre de la prueba',
    'Abreviatura',
    '¿Para qué sirve?',
    'Rangos normales',
    '¿Qué significa un resultado alto/bajo?',
    'Cómo prepararse',
  ],
  encabezados_medicamentos: [
    'Nombre genérico',
    'Marcas comerciales',
    'Usos comunes',
    'Cómo funciona',
    'Efectos secundarios',
    'Advertencias importantes',
    'Interacciones con otros medicamentos',
  ],
};

// ============================================================================
// HELPER FUNCTIONS FOR SPANISH CONTENT
// ============================================================================
export function getExplicacionNivel(nivel: NivelLectura): string {
  const explicaciones = {
    basico: 'Explicado con palabras simples, analogías cotidianas',
    intermedio: 'Términos médicos con definiciones incluidas',
    avanzado: 'Mecanismos y procesos detallados',
    experto: 'Investigación actual y controversias clínicas',
    clinico: 'Aplicación al diagnóstico y tratamiento',
  };
  return explicaciones[nivel] || explicaciones.intermedio;
}

export function getTiempoLectura(modulo: ModuloEducativo): string {
  const tiempos = {
    corto: '5-10 minutos',
    medio: '15-30 minutos',
    largo: '30-60 minutos',
    muy_largo: 'Más de 1 hora',
  };
  return tiempos[modulo] || tiempos.medio;
}

export function buscarPorCategoria(
  categoria: CategoriaMedica,
  terminoBusqueda: string
): any[] {
  // Buscar en todos los recursos por categoría
  const resultados = [];

  // Buscar en especialidades médicas
  for (const [key, especialidad] of Object.entries(ESPECIALIDADES_MEDICAS)) {
    if (especialidad.topicos && especialidad.topicos.some(t =>
      t.toLowerCase().includes(terminoBusqueda.toLowerCase())
    )) {
      resultados.push({
        tipo: 'especialidad',
        especialidad: key,
        ...especialidad,
      });
    }
  }

  return resultados;
}

export function getIconoCategoria(categoria: CategoriaMedica): string {
  const iconos = {
    anatomia: '🫀',
    fisiologia: '💓',
    patologia: '🦠',
    farmacologia: '💊',
    diagnostico: '🔬',
    procedimiento: '🏥',
    estilo_de_vida: '🍎',
    preventivo: '🛡️',
  };
  return iconos[categoria] || '📚';
}
