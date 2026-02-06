/**
 * Cultural Navigation Module
 * 
 * Explains US healthcare system in Spanish with English toggle.
 * Covers insurance basics, appointments, patient rights, and more.
 * 
 * Designed to bridge cultural gaps and reduce barriers to care.
 */

import {
  HealthcareNavigationGuide,
  NavigationCategory,
  LocalizedText,
  Language,
  LocalizedStep,
  FAQItem,
  RequiredDocument,
  PromotoraApiResponse,
} from './types';

// ============================================================================
// Navigation Guides Database
// ============================================================================

export const NAVIGATION_GUIDES: HealthcareNavigationGuide[] = [
  // Insurance Basics
  {
    id: 'nav-insurance-basics',
    category: 'insurance_basics',
    title: {
      es: 'Conceptos Básicos de Seguros Médicos',
      en: 'Health Insurance Basics',
    },
    content: {
      summary: {
        es: 'El seguro médico ayuda a pagar los gastos médicos. En Estados Unidos, existen diferentes tipos de seguros y programas gubernamentales.',
        en: 'Health insurance helps pay for medical expenses. In the United States, there are different types of insurance and government programs.',
      },
      steps: [
        {
          order: 1,
          title: { es: '¿Qué es el seguro médico?', en: 'What is health insurance?' },
          description: {
            es: 'Es un contrato donde usted paga una prima mensual y el seguro ayuda a cubrir sus gastos médicos cuando se enferma o tiene una lesión.',
            en: 'It is a contract where you pay a monthly premium and the insurance helps cover your medical expenses when you get sick or injured.',
          },
          actionItems: [
            { es: 'Revise su tarjeta de seguro', en: 'Review your insurance card' },
            { es: 'Guarde copias de sus documentos', en: 'Keep copies of your documents' },
          ],
        },
        {
          order: 2,
          title: { es: 'Términos importantes', en: 'Important terms' },
          description: {
            es: 'Prima: pago mensual. Deducible: cantidad que paga antes de que el seguro comience a pagar. Copago: cantidad fija por cada visita.',
            en: 'Premium: monthly payment. Deductible: amount you pay before insurance starts paying. Copay: fixed amount for each visit.',
          },
        },
        {
          order: 3,
          title: { es: 'Red de proveedores', en: 'Provider network' },
          description: {
            es: 'Los doctores y hospitales "dentro de la red" cuestan menos. Los "fuera de la red" pueden ser más caros.',
            en: 'Doctors and hospitals "in-network" cost less. "Out-of-network" providers may be more expensive.',
          },
        },
      ],
      faq: [
        {
          question: {
            es: '¿Qué pasa si no tengo seguro?',
            en: 'What happens if I don\'t have insurance?',
          },
          answer: {
            es: 'Puede buscar atención en clínicas comunitarias que cobran según sus ingresos. Algunos hospitales tienen programas de asistencia financiera.',
            en: 'You can seek care at community clinics that charge based on income. Some hospitals have financial assistance programs.',
          },
        },
        {
          question: {
            es: '¿Puedo usar mi seguro de otro estado?',
            en: 'Can I use my insurance from another state?',
          },
          answer: {
            es: 'Depende de su plan. Medicaid generalmente no funciona fuera del estado. Los seguros privados pueden tener red nacional.',
            en: 'It depends on your plan. Medicaid generally does not work out of state. Private insurance may have a national network.',
          },
        },
        {
          question: {
            es: '¿Los documentos de inmigración afectan mi seguro?',
            en: 'Do immigration documents affect my insurance?',
          },
          answer: {
            es: 'No. Solicitar seguro médico no afecta su estatus migratorio. Es seguro aplicar.',
            en: 'No. Applying for health insurance does not affect your immigration status. It is safe to apply.',
          },
        },
      ],
      tips: [
        { es: 'Siempre lleve su tarjeta de seguro a las citas médicas', en: 'Always bring your insurance card to medical appointments' },
        { es: 'Guarde todos los recibos y explicaciones de beneficios', en: 'Keep all receipts and explanations of benefits' },
        { es: 'Pregunte siempre si el doctor está "in-network"', en: 'Always ask if the doctor is "in-network"' },
        { es: 'Llame al número en su tarjeta para preguntas', en: 'Call the number on your card for questions' },
      ],
    },
    tags: ['insurance', 'basics', 'costs', 'coverage'],
  },
  
  // Medicaid
  {
    id: 'nav-medicaid',
    category: 'medicaid',
    title: {
      es: 'Medicaid: Seguro para Familias de Bajos Recursos',
      en: 'Medicaid: Insurance for Low-Income Families',
    },
    content: {
      summary: {
        es: 'Medicaid es un programa federal y estatal que proporciona cobertura médica gratuita o de bajo costo para personas de bajos ingresos.',
        en: 'Medicaid is a federal and state program that provides free or low-cost medical coverage for people with low income.',
      },
      steps: [
        {
          order: 1,
          title: { es: '¿Quién califica?', en: 'Who qualifies?' },
          description: {
            es: 'Depende de su estado, ingresos, tamaño de familia, y situación (embarazo, discapacidad, etc.). En muchos estados, los ingresos deben estar debajo de cierto nivel.',
            en: 'It depends on your state, income, family size, and situation (pregnancy, disability, etc.). In many states, income must be below a certain level.',
          },
        },
        {
          order: 2,
          title: { es: 'Cómo aplicar', en: 'How to apply' },
          description: {
            es: 'Aplique en línea, por teléfono, en persona o por correo. Cada estado tiene su propio proceso.',
            en: 'Apply online, by phone, in person, or by mail. Each state has its own process.',
          },
          actionItems: [
            { es: 'Visite Healthcare.gov o el sitio de su estado', en: 'Visit Healthcare.gov or your state\'s website' },
            { es: 'Llame al 1-800-318-2596', en: 'Call 1-800-318-2596' },
            { es: 'Busque una oficina local de Medicaid', en: 'Find a local Medicaid office' },
          ],
        },
        {
          order: 3,
          title: { es: 'Lo que cubre', en: 'What it covers' },
          description: {
            es: 'Visitas al doctor, hospitalizaciones, medicamentos recetados, servicios de emergencia, maternidad y pediatría, y más.',
            en: 'Doctor visits, hospitalizations, prescription medications, emergency services, maternity and pediatric care, and more.',
          },
        },
      ],
      documents: [
        {
          name: { es: 'Identificación con foto', en: 'Photo ID' },
          required: true,
          alternatives: [
            { es: 'Pasaporte extranjero', en: 'Foreign passport' },
            { es: 'Matrícula consular', en: 'Consular ID' },
          ],
        },
        {
          name: { es: 'Comprobante de residencia', en: 'Proof of residency' },
          required: true,
          alternatives: [
            { es: 'Recibo de servicios', en: 'Utility bill' },
            { es: 'Contrato de alquiler', en: 'Lease agreement' },
          ],
        },
        {
          name: { es: 'Comprobante de ingresos', en: 'Proof of income' },
          required: true,
          alternatives: [
            { es: 'Talones de cheque', en: 'Pay stubs' },
            { es: 'Carta del empleador', en: 'Employer letter' },
          ],
        },
      ],
      faq: [
        {
          question: {
            es: '¿Afecta Medicaid mi estatus migratorio?',
            en: 'Does Medicaid affect my immigration status?',
          },
          answer: {
            es: 'No. Usar Medicaid NO es considerado "carga pública" para la mayoría de las personas. Es seguro usar Medicaid si califica.',
            en: 'No. Using Medicaid is NOT considered a "public charge" for most people. It is safe to use Medicaid if you qualify.',
          },
        },
        {
          question: {
            es: '¿Puedo tener Medicaid y otro seguro?',
            en: 'Can I have Medicaid and other insurance?',
          },
          answer: {
            es: 'Sí, es posible tener ambos. Medicaid generalmente se convierte en seguro secundario.',
            en: 'Yes, it is possible to have both. Medicaid generally becomes secondary insurance.',
          },
        },
        {
          question: {
            es: '¿Cuánto tiempo dura mi cobertura?',
            en: 'How long does my coverage last?',
          },
          answer: {
            es: 'Generalmente 12 meses, pero debe renovar anualmente. Algunos estados verifican ingresos periódicamente.',
            en: 'Generally 12 months, but you must renew annually. Some states verify income periodically.',
          },
        },
      ],
      tips: [
        { es: 'Aplique lo antes posible si cree que califica', en: 'Apply as soon as possible if you think you qualify' },
        { es: 'Guarde copias de su solicitud', en: 'Keep copies of your application' },
        { es: 'Renueve antes de la fecha de vencimiento', en: 'Renew before the expiration date' },
        { es: 'Reporte cambios de ingresos o dirección', en: 'Report changes in income or address' },
      ],
    },
    tags: ['medicaid', 'government', 'low-income', 'free'],
  },

  // Medicare
  {
    id: 'nav-medicare',
    category: 'medicare',
    title: {
      es: 'Medicare: Seguro para Adultos Mayores',
      en: 'Medicare: Insurance for Seniors',
    },
    content: {
      summary: {
        es: 'Medicare es el seguro federal para personas de 65+ años y algunos adultos jóvenes con discapacidades. Tiene diferentes partes que cubren diferentes servicios.',
        en: 'Medicare is federal insurance for people 65+ years old and some younger adults with disabilities. It has different parts that cover different services.',
      },
      steps: [
        {
          order: 1,
          title: { es: 'Las 4 partes de Medicare', en: 'The 4 parts of Medicare' },
          description: {
            es: 'Parte A: Hospital. Parte B: Servicios médicos. Parte C (Medicare Advantage): Planes privados. Parte D: Medicamentos recetados.',
            en: 'Part A: Hospital. Part B: Medical services. Part C (Medicare Advantage): Private plans. Part D: Prescription drugs.',
          },
        },
        {
          order: 2,
          title: { es: 'Cuándo inscribirse', en: 'When to enroll' },
          description: {
            es: 'Período inicial: 3 meses antes, mes de, y 3 meses después de cumplir 65 años. Hay períodos especiales para ciertas situaciones.',
            en: 'Initial period: 3 months before, month of, and 3 months after turning 65. There are special periods for certain situations.',
          },
          actionItems: [
            { es: 'Inscríbase en SSA.gov o llame al 1-800-772-1213', en: 'Enroll at SSA.gov or call 1-800-772-1213' },
            { es: 'Considere Medicare Advantage si desea más cobertura', en: 'Consider Medicare Advantage if you want more coverage' },
          ],
        },
      ],
      faq: [
        {
          question: {
            es: '¿Medicare es gratis?',
            en: 'Is Medicare free?',
          },
          answer: {
            es: 'La Parte A es gratuita si pagó impuestos de Medicare por 10 años. Las otras partes tienen primas mensuales.',
            en: 'Part A is free if you paid Medicare taxes for 10 years. Other parts have monthly premiums.',
          },
        },
        {
          question: {
            es: '¿Puedo tener Medicaid y Medicare?',
            en: 'Can I have Medicaid and Medicare?',
          },
          answer: {
            es: 'Sí, se llama "dual eligible". Medicaid puede ayudar a pagar costos de Medicare.',
            en: 'Yes, it is called "dual eligible". Medicaid can help pay Medicare costs.',
          },
        },
      ],
      tips: [
        { es: 'Compare Medicare Advantage vs Medicare Original', en: 'Compare Medicare Advantage vs Original Medicare' },
        { es: 'Revise su cobertura anualmente', en: 'Review your coverage annually' },
        { es: 'Considere un plan suplementario (Medigap)', en: 'Consider a supplemental plan (Medigap)' },
      ],
    },
    tags: ['medicare', 'seniors', '65+', 'federal'],
  },

  // Appointments
  {
    id: 'nav-appointments',
    category: 'appointments',
    title: {
      es: 'Cómo Hacer Citas Médicas',
      en: 'How to Make Medical Appointments',
    },
    content: {
      summary: {
        es: 'Saber cómo hacer y prepararse para citas médicas puede ayudarle a recibir mejor atención. Aquí aprenderá el proceso paso a paso.',
        en: 'Knowing how to make and prepare for medical appointments can help you receive better care. Here you will learn the step-by-step process.',
      },
      steps: [
        {
          order: 1,
          title: { es: 'Encontrar un doctor', en: 'Find a doctor' },
          description: {
            es: 'Busque doctores que acepten su seguro y hablen su idioma. Pregunte a amigos o use el directorio de su seguro.',
            en: 'Look for doctors who accept your insurance and speak your language. Ask friends or use your insurance directory.',
          },
          actionItems: [
            { es: 'Verifique que el doctor acepte su seguro', en: 'Verify the doctor accepts your insurance' },
            { es: 'Pregunte si tienen intérpretes disponibles', en: 'Ask if they have interpreters available' },
          ],
        },
        {
          order: 2,
          title: { es: 'Hacer la cita', en: 'Make the appointment' },
          description: {
            es: 'Llame a la oficina del doctor. Tenga lista su información de seguro. Pregunte por la primera cita disponible.',
            en: 'Call the doctor\'s office. Have your insurance information ready. Ask for the first available appointment.',
          },
          actionItems: [
            { es: 'Diga: "Necesito hacer una cita como paciente nuevo"', en: 'Say: "I need to make an appointment as a new patient"' },
            { es: 'Pregunte: "¿Aceptan mi seguro [nombre]?"', en: 'Ask: "Do you accept my [name] insurance?"' },
            { es: 'Pregunte: "¿Tienen personal que hable español?"', en: 'Ask: "Do you have Spanish-speaking staff?"' },
          ],
          estimatedTime: { es: '5-10 minutos', en: '5-10 minutes' },
        },
        {
          order: 3,
          title: { es: 'Preparar documentos', en: 'Prepare documents' },
          description: {
            es: 'Lleve su tarjeta de seguro, identificación, lista de medicamentos, y registros médicos previos si los tiene.',
            en: 'Bring your insurance card, ID, medication list, and previous medical records if you have them.',
          },
        },
        {
          order: 4,
          title: { es: 'Preparar preguntas', en: 'Prepare questions' },
          description: {
            es: 'Escriba sus síntomas, cuándo comenzaron, y las preguntas que tiene para el doctor.',
            en: 'Write down your symptoms, when they started, and questions you have for the doctor.',
          },
        },
        {
          order: 5,
          title: { es: 'Durante la cita', en: 'During the appointment' },
          description: {
            es: 'Llegue 15 minutos antes. Sea honesto sobre sus síntomas. Pregunte si no entiende algo. Tome notas.',
            en: 'Arrive 15 minutes early. Be honest about your symptoms. Ask if you don\'t understand something. Take notes.',
          },
        },
      ],
      documents: [
        {
          name: { es: 'Tarjeta de seguro médico', en: 'Health insurance card' },
          required: true,
        },
        {
          name: { es: 'Identificación con foto', en: 'Photo ID' },
          required: true,
        },
        {
          name: { es: 'Lista de medicamentos', en: 'Medication list' },
          required: true,
        },
        {
          name: { es: 'Historial médico', en: 'Medical history' },
          required: false,
        },
        {
          name: { es: 'Método de pago', en: 'Payment method' },
          required: true,
        },
      ],
      faq: [
        {
          question: {
            es: '¿Qué pasa si no tengo seguro?',
            en: 'What if I don\'t have insurance?',
          },
          answer: {
            es: 'Llame y pregunte: "¿Cuánto cuesta una cita sin seguro?" Muchas clínicas ofrecen descuentos o escala móvil.',
            en: 'Call and ask: "How much is an appointment without insurance?" Many clinics offer discounts or sliding scale.',
          },
        },
        {
          question: {
            es: '¿Puedo llevar a alguien conmigo?',
            en: 'Can I bring someone with me?',
          },
          answer: {
            es: 'Sí, puede llevar un familiar o amigo. También puede solicitar un intérprete profesional sin costo.',
            en: 'Yes, you can bring a family member or friend. You can also request a professional interpreter at no cost.',
          },
        },
        {
          question: {
            es: '¿Qué significa "deducible"?',
            en: 'What does "deductible" mean?',
          },
          answer: {
            es: 'Es la cantidad que debe pagar de su bolsillo antes de que su seguro comience a pagar. Varía según su plan.',
            en: 'It is the amount you must pay out of pocket before your insurance starts paying. It varies by plan.',
          },
        },
      ],
      tips: [
        { es: 'Llegue temprano para completar papeleo', en: 'Arrive early to complete paperwork' },
        { es: 'Traiga un cuaderno para tomar notas', en: 'Bring a notebook to take notes' },
        { es: 'No tenga miedo de hacer preguntas', en: 'Don\'t be afraid to ask questions' },
        { es: 'Pida instrucciones por escrito', en: 'Ask for written instructions' },
        { es: 'Confirme su cita un día antes', en: 'Confirm your appointment one day before' },
      ],
    },
    tags: ['appointments', 'doctor', 'preparation', 'visit'],
  },

  // Patient Rights
  {
    id: 'nav-patient-rights',
    category: 'patient_rights',
    title: {
      es: 'Sus Derechos como Paciente',
      en: 'Your Rights as a Patient',
    },
    content: {
      summary: {
        es: 'Como paciente, tiene derechos importantes que protegen su dignidad, privacidad, y acceso a información sobre su salud.',
        en: 'As a patient, you have important rights that protect your dignity, privacy, and access to information about your health.',
      },
      steps: [
        {
          order: 1,
          title: { es: 'Derecho a información', en: 'Right to information' },
          description: {
            es: 'Tiene derecho a entender su diagnóstico, opciones de tratamiento, y riesgos en su idioma.',
            en: 'You have the right to understand your diagnosis, treatment options, and risks in your language.',
          },
          actionItems: [
            { es: 'Pida un intérprete si lo necesita', en: 'Ask for an interpreter if needed' },
            { es: 'Solicite materiales en español', en: 'Request materials in Spanish' },
          ],
        },
        {
          order: 2,
          title: { es: 'Derecho a privacidad', en: 'Right to privacy' },
          description: {
            es: 'Su información médica es confidencial. Nadie puede verla sin su permiso (excepto en emergencias).',
            en: 'Your medical information is confidential. No one can see it without your permission (except in emergencies).',
          },
        },
        {
          order: 3,
          title: { es: 'Derecho a consentimiento', en: 'Right to consent' },
          description: {
            es: 'Debe dar permiso antes de cualquier tratamiento. Puede negarse o pedir una segunda opinión.',
            en: 'You must give permission before any treatment. You can refuse or ask for a second opinion.',
          },
        },
        {
          order: 4,
          title: { es: 'Derecho a no discriminación', en: 'Right to non-discrimination' },
          description: {
            es: 'No puede ser tratado diferente por su raza, origen nacional, idioma, estatus migratorio, o capacidad de pago.',
            en: 'You cannot be treated differently because of your race, national origin, language, immigration status, or ability to pay.',
          },
        },
        {
          order: 5,
          title: { es: 'Derecho a emergencias', en: 'Right to emergencies' },
          description: {
            es: 'Los hospitales deben tratar emergencias médicas sin preguntar sobre seguro o estatus migratorio primero.',
            en: 'Hospitals must treat medical emergencies without asking about insurance or immigration status first.',
          },
        },
      ],
      faq: [
        {
          question: {
            es: '¿Pueden negarme servicios por no tener papeles?',
            en: 'Can they deny me services for not having papers?',
          },
          answer: {
            es: 'No. Las emergencias médicas deben ser tratadas. Para servicios no de emergencia, las clínicas comunitarias atienden a todos.',
            en: 'No. Medical emergencies must be treated. For non-emergency services, community clinics serve everyone.',
          },
        },
        {
          question: {
            es: '¿Puedo pedir una segunda opinión?',
            en: 'Can I ask for a second opinion?',
          },
          answer: {
            es: 'Sí. Es su derecho buscar otra opinión médica, especialmente para diagnósticos graves o cirugías.',
            en: 'Yes. It is your right to seek another medical opinion, especially for serious diagnoses or surgeries.',
          },
        },
        {
          question: {
            es: '¿Qué hago si me tratan mal?',
            en: 'What do I do if I am treated poorly?',
          },
          answer: {
            es: 'Pida hablar con el administrador del hospital. Puede presentar una queja con el Departamento de Salud del estado.',
            en: 'Ask to speak with the hospital administrator. You can file a complaint with the state Health Department.',
          },
        },
      ],
      tips: [
        { es: 'Conozca sus derechos antes de cada visita', en: 'Know your rights before each visit' },
        { es: 'Guarde copias de todos sus registros', en: 'Keep copies of all your records' },
        { es: 'No firme nada que no entienda', en: 'Don\'t sign anything you don\'t understand' },
        { es: 'Busque ayuda si siente que violaron sus derechos', en: 'Seek help if you feel your rights were violated' },
      ],
    },
    tags: ['rights', 'privacy', 'discrimination', 'consent'],
  },

  // Emergency Care
  {
    id: 'nav-emergency',
    category: 'emergency_care',
    title: {
      es: 'Atención de Emergencia',
      en: 'Emergency Care',
    },
    content: {
      summary: {
        es: 'Saber cuándo ir a la sala de emergencias y qué esperar puede salvar vidas y reducir ansiedad.',
        en: 'Knowing when to go to the emergency room and what to expect can save lives and reduce anxiety.',
      },
      steps: [
        {
          order: 1,
          title: { es: '¿Es una emergencia?', en: 'Is it an emergency?' },
          description: {
            es: 'Vaya a emergencias SI: dolor de pecho, dificultad para respirar, sangrado severo, pérdida de consciencia, o lesión grave.',
            en: 'Go to the ER IF: chest pain, difficulty breathing, severe bleeding, loss of consciousness, or serious injury.',
          },
        },
        {
          order: 2,
          title: { es: 'Emergencias vs Urgencias', en: 'Emergencies vs Urgent Care' },
          description: {
            es: 'Emergencias: amenaza para la vida. Urgencias: necesita atención pronto pero no es inmediato. Clínica regular: chequeos y citas programadas.',
            en: 'ER: life-threatening. Urgent Care: needs attention soon but not immediately. Regular clinic: checkups and scheduled appointments.',
          },
        },
        {
          order: 3,
          title: { es: 'Qué esperar', en: 'What to expect' },
          description: {
            es: 'Pueden pedir información de seguro, pero deben tratar la emergencia primero. Es ilegal negar tratamiento de emergencia.',
            en: 'They may ask for insurance information, but must treat the emergency first. It is illegal to deny emergency treatment.',
          },
        },
      ],
      faq: [
        {
          question: {
            es: '¿Me tratarán sin seguro?',
            en: 'Will they treat me without insurance?',
          },
          answer: {
            es: 'Sí. Por ley federal, los hospitales deben estabilizar pacientes en emergencias sin preguntar sobre pago primero.',
            en: 'Yes. By federal law, hospitals must stabilize emergency patients without asking about payment first.',
          },
        },
        {
          question: {
            es: '¿Necesito llamar antes de ir?',
            en: 'Do I need to call before going?',
          },
          answer: {
            es: 'No para emergencias. Llame al 911 si no puede transportarse o es muy grave.',
            en: 'No for emergencies. Call 911 if you cannot transport yourself or it is very serious.',
          },
        },
      ],
      tips: [
        { es: 'No espere en emergencias verdaderas', en: 'Don\'t wait for true emergencies' },
        { es: 'Lleve lista de medicamentos si es posible', en: 'Bring medication list if possible' },
        { es: 'Tenga a alguien que lo acompañe', en: 'Have someone accompany you' },
      ],
    },
    tags: ['emergency', 'urgent', 'hospital', '911'],
  },
];

// ============================================================================
// Navigation Functions
// ============================================================================

export function getAllGuides(language: Language = 'es'): HealthcareNavigationGuide[] {
  return NAVIGATION_GUIDES;
}

export function getGuideById(
  id: string,
  language: Language = 'es'
): HealthcareNavigationGuide | null {
  return NAVIGATION_GUIDES.find((g) => g.id === id) || null;
}

export function getGuidesByCategory(
  category: NavigationCategory,
  language: Language = 'es'
): HealthcareNavigationGuide[] {
  return NAVIGATION_GUIDES.filter((g) => g.category === category);
}

export function searchGuides(
  query: string,
  language: Language = 'es'
): HealthcareNavigationGuide[] {
  const lowerQuery = query.toLowerCase();
  return NAVIGATION_GUIDES.filter(
    (g) =>
      g.title[language].toLowerCase().includes(lowerQuery) ||
      g.content.summary[language].toLowerCase().includes(lowerQuery) ||
      g.tags.some((t) => t.toLowerCase().includes(lowerQuery))
  );
}

// ============================================================================
// Category Labels
// ============================================================================

export const CATEGORY_LABELS: Record<NavigationCategory, LocalizedText> = {
  insurance_basics: {
    es: 'Conceptos Básicos de Seguros',
    en: 'Insurance Basics',
  },
  medicaid: {
    es: 'Medicaid',
    en: 'Medicaid',
  },
  medicare: {
    es: 'Medicare',
    en: 'Medicare',
  },
  marketplace: {
    es: 'Mercado de Seguros',
    en: 'Insurance Marketplace',
  },
  appointments: {
    es: 'Citas Médicas',
    en: 'Medical Appointments',
  },
  emergency_care: {
    es: 'Atención de Emergencia',
    en: 'Emergency Care',
  },
  patient_rights: {
    es: 'Derechos del Paciente',
    en: 'Patient Rights',
  },
  prescriptions: {
    es: 'Recetas Médicas',
    en: 'Prescriptions',
  },
  specialist_referrals: {
    es: 'Referencias a Especialistas',
    en: 'Specialist Referrals',
  },
  medical_records: {
    es: 'Expedientes Médicos',
    en: 'Medical Records',
  },
};

// ============================================================================
// Helper Functions
// ============================================================================

export function formatSteps(
  steps: LocalizedStep[],
  language: Language = 'es'
): string {
  return steps
    .map(
      (s) =>
        `${s.order}. ${s.title[language]}\n${s.description[language]}${
          s.actionItems
            ? '\n• ' + s.actionItems.map((a) => a[language]).join('\n• ')
            : ''
        }`
    )
    .join('\n\n');
}

export function formatFAQ(
  faq: FAQItem[],
  language: Language = 'es'
): string {
  return faq
    .map(
      (f) =>
        `Q: ${f.question[language]}\nA: ${f.answer[language]}`
    )
    .join('\n\n');
}

export function getRequiredDocumentsList(
  documents: RequiredDocument[],
  language: Language = 'es'
): string {
  return documents
    .map(
      (d) =>
        `${d.name[language]} ${d.required ? '(Requerido)' : '(Opcional)'}`
    )
    .join('\n');
}

// ============================================================================
// Export
// ============================================================================

export { NAVIGATION_GUIDES };
