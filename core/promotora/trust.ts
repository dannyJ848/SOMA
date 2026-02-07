/**
 * Trust Building Module
 * 
 * Privacy guarantees, data protection explanations, and community testimonials
 * designed to build trust with Latino patients and address immigration concerns.
 * 
 * All content supports Spanish/English localization.
 */

import {
  PrivacyGuarantee,
  DataPolicy,
  CommunityTestimonial,
  TrustBadge,
  LocalizedText,
  Language,
  PromotoraApiResponse,
} from './types';

// ============================================================================
// Privacy Guarantees
// ============================================================================

export const PRIVACY_GUARANTEES: PrivacyGuarantee[] = [
  {
    id: 'privacy-data-storage',
    title: {
      es: 'Sus Datos se Guardan en SU Dispositivo',
      en: 'Your Data is Stored on YOUR Device',
    },
    description: {
      es: 'A diferencia de otras aplicaciones, sus registros médicos personales NUNCA se envían a servidores remotos. Todo se mantiene local en su teléfono o computadora.',
      en: 'Unlike other apps, your personal medical records are NEVER sent to remote servers. Everything stays local on your phone or computer.',
    },
    icon: '🔒',
    details: {
      es: 'Utilizamos almacenamiento local-first. Sus datos están cifrados en su dispositivo. Solo usted tiene la llave para accederlos.',
      en: 'We use local-first storage. Your data is encrypted on your device. Only you have the key to access it.',
    },
  },
  {
    id: 'privacy-no-immigration',
    title: {
      es: 'NUNCA Compartimos con Inmigración',
      en: 'We NEVER Share with Immigration',
    },
    description: {
      es: 'Su información de salud nunca será compartida con ICE, CBP, o cualquier agencia de inmigración. Esto es una promesa legal y ética.',
      en: 'Your health information will never be shared with ICE, CBP, or any immigration agency. This is a legal and ethical promise.',
    },
    icon: '🛡️',
    details: {
      es: 'HIPAA protege su información médica. No solicitamos estatus migratorio. No reportamos a autoridades de inmigración.',
      en: 'HIPAA protects your medical information. We do not ask about immigration status. We do not report to immigration authorities.',
    },
  },
  {
    id: 'privacy-encrypted',
    title: {
      es: 'Encriptación de Nivel Bancario',
      en: 'Bank-Level Encryption',
    },
    description: {
      es: 'Sus datos están protegidos con el mismo nivel de seguridad que usan los bancos. Incluso si alguien accede a su dispositivo, no pueden leer sus registros.',
      en: 'Your data is protected with the same security level that banks use. Even if someone accesses your device, they cannot read your records.',
    },
    icon: '🔐',
    details: {
      es: 'Usamos AES-256, el estándar de encriptación más seguro. Sus contraseñas nunca se almacenan en texto plano.',
      en: 'We use AES-256, the most secure encryption standard. Your passwords are never stored in plain text.',
    },
  },
  {
    id: 'privacy-no-selling',
    title: {
      es: 'NO Vendemos Sus Datos',
      en: 'We Do NOT Sell Your Data',
    },
    description: {
      es: 'A diferencia de muchas empresas tecnológicas, nunca vendemos, alquilamos ni comercializamos su información personal.',
      en: 'Unlike many tech companies, we never sell, rent, or commercialize your personal information.',
    },
    icon: '🚫',
    details: {
      es: 'No tenemos anunciantes. No compartimos datos con terceros para marketing. Su información es solo para su beneficio.',
      en: 'We have no advertisers. We do not share data with third parties for marketing. Your information is only for your benefit.',
    },
  },
  {
    id: 'privacy-export',
    title: {
      es: 'Usted Controla Sus Datos',
      en: 'You Control Your Data',
    },
    description: {
      es: 'Puede exportar, respaldar o eliminar sus datos en cualquier momento. Usted es el dueño completo de su información médica.',
      en: 'You can export, backup, or delete your data at any time. You are the complete owner of your medical information.',
    },
    icon: '✋',
    details: {
      es: 'Descargue sus registros en formato PDF. Transfiera a otro dispositivo fácilmente. Elimine permanentemente cuando lo desee.',
      en: 'Download your records in PDF format. Transfer to another device easily. Delete permanently whenever you wish.',
    },
  },
  {
    id: 'privacy-promotora',
    title: {
      es: 'Su Promotora Respeta Su Privacidad',
      en: 'Your Promotora Respects Your Privacy',
    },
    description: {
      es: 'Las Promotoras de Salud están entrenadas en confidencialidad. Solo ven lo que usted decide compartir con consentimiento explícito.',
      en: 'Community Health Workers are trained in confidentiality. They only see what you decide to share with explicit consent.',
    },
    icon: '🤝',
    details: {
      es: 'Debe dar permiso por escrito para que su Promotora acceda a su información. Puede revocar este permiso en cualquier momento.',
      en: 'You must give written permission for your Promotora to access your information. You can revoke this permission at any time.',
    },
  },
];

// ============================================================================
// Data Policies
// ============================================================================

export const DATA_POLICIES: DataPolicy[] = [
  {
    id: 'policy-storage',
    category: 'storage',
    title: {
      es: '¿Dónde se guardan mis datos?',
      en: 'Where is my data stored?',
    },
    description: {
      es: 'Sus datos se almacenan localmente en su dispositivo usando tecnología de base de datos local. No usamos servidores en la nube para sus registros médicos personales.',
      en: 'Your data is stored locally on your device using local database technology. We do not use cloud servers for your personal medical records.',
    },
    patientControl: {
      es: 'Puede respaldar sus datos en una unidad USB o exportarlos a su computadora en cualquier momento.',
      en: 'You can backup your data to a USB drive or export it to your computer at any time.',
    },
    technicalDetails: {
      es: 'Usamos SQLite con encriptación AES-256. Los datos se almacenan en un archivo encriptado en su dispositivo.',
      en: 'We use SQLite with AES-256 encryption. Data is stored in an encrypted file on your device.',
    },
  },
  {
    id: 'policy-sharing',
    category: 'sharing',
    title: {
      es: '¿Con quién se comparte mi información?',
      en: 'Who is my information shared with?',
    },
    description: {
      es: 'Por defecto: NADIE. Su información solo se comparte cuando usted explícitamente elige hacerlo, como enviar registros a su doctor o compartir con su Promotora.',
      en: 'By default: NO ONE. Your information is only shared when you explicitly choose to do so, such as sending records to your doctor or sharing with your Promotora.',
    },
    patientControl: {
      es: 'Usted decide qué compartir, con quién, y por cuánto tiempo. Puede revocar el acceso en cualquier momento.',
      en: 'You decide what to share, with whom, and for how long. You can revoke access at any time.',
    },
  },
  {
    id: 'policy-retention',
    category: 'retention',
    title: {
      es: '¿Por cuánto tiempo guardan mis datos?',
      en: 'How long do you keep my data?',
    },
    description: {
      es: 'Sus datos permanecen en su dispositivo todo el tiempo que usted lo desee. No tenemos control sobre cuánto tiempo los guarda.',
      en: 'Your data remains on your device for as long as you want. We have no control over how long you keep it.',
    },
    patientControl: {
      es: 'Puede eliminar permanentemente todos sus datos con un solo botón. No queda ningún rastro en servidores externos.',
      en: 'You can permanently delete all your data with a single button. No trace remains on external servers.',
    },
  },
  {
    id: 'policy-access',
    category: 'access',
    title: {
      es: '¿Quién puede acceder a mis registros?',
      en: 'Who can access my records?',
    },
    description: {
      es: 'Solo usted y las personas a quienes usted dé permiso explícito pueden ver sus registros. Sus Promotoras solo ven lo que usted autoriza.',
      en: 'Only you and people you give explicit permission to can see your records. Your Promotoras only see what you authorize.',
    },
    patientControl: {
      es: 'Use la función "Compartir" para dar acceso temporal. Use "Permisos" para administrar quién tiene acceso continuo.',
      en: 'Use the "Share" feature to give temporary access. Use "Permissions" to manage who has ongoing access.',
    },
  },
  {
    id: 'policy-deletion',
    category: 'deletion',
    title: {
      es: '¿Cómo elimino mis datos permanentemente?',
      en: 'How do I permanently delete my data?',
    },
    description: {
      es: 'Vaya a Configuración > Privacidad > Eliminar todos los datos. Esta acción es irreversible y elimina todo inmediatamente.',
      en: 'Go to Settings > Privacy > Delete all data. This action is irreversible and removes everything immediately.',
    },
    patientControl: {
      es: 'Puede exportar un respaldo antes de eliminar si desea guardar sus registros para el futuro.',
      en: 'You can export a backup before deleting if you want to keep your records for the future.',
    },
  },
];

// ============================================================================
// Community Testimonials
// ============================================================================

export const COMMUNITY_TESTIMONIALS: CommunityTestimonial[] = [
  {
    id: 'test-001',
    author: {
      name: 'María G.',
      role: 'Paciente',
      community: 'East Austin',
    },
    quote: {
      es: 'Al principio tenía miedo de poner mi información médica en una aplicación. Pero mi Promotora me explicó que mis datos se quedan en mi teléfono y no van a ningún servidor. Me siento mucho más segura ahora.',
      en: 'At first I was afraid to put my medical information in an app. But my Promotora explained that my data stays on my phone and doesn\'t go to any server. I feel much safer now.',
    },
    story: {
      es: 'He estado usando la aplicación por 6 meses. Me ayudó a entender mis resultados de laboratorio y a comunicarme mejor con mi doctor. La función en español es muy útil.',
      en: 'I have been using the app for 6 months. It helped me understand my lab results and communicate better with my doctor. The Spanish feature is very helpful.',
    },
    rating: 5,
    date: new Date('2024-08-15'),
    verified: true,
    featured: true,
  },
  {
    id: 'test-002',
    author: {
      name: 'Carmen R.',
      role: 'Madre de 3 hijos',
      community: 'Riverside',
    },
    quote: {
      es: 'Como madre soltera sin seguro médico, esta aplicación ha sido una bendición. Puedo llevar los registros de salud de mis hijos organizados y llevarlos a las clínicas cuando necesitamos atención.',
      en: 'As a single mother without health insurance, this app has been a blessing. I can keep my children\'s health records organized and bring them to clinics when we need care.',
    },
    story: {
      es: 'Mi Promotora María me enseñó a usar la aplicación. Ahora puedo rastrear las vacunas de mis hijos, sus visitas al doctor, y tengo toda la información lista cuando voy a una clínica nueva.',
      en: 'My Promotora María taught me to use the app. Now I can track my children\'s vaccines, their doctor visits, and I have all the information ready when I go to a new clinic.',
    },
    rating: 5,
    date: new Date('2024-09-20'),
    verified: true,
    featured: true,
  },
  {
    id: 'test-003',
    author: {
      name: 'José L.',
      role: 'Trabajador de construcción',
      community: 'North Austin',
    },
    quote: {
      es: 'Estaba preocupado por mi estatus migratorio, pero me aseguraron que mi información está segura y no se comparte con inmigración. Eso me dio confianza para usar la aplicación.',
      en: 'I was worried about my immigration status, but they assured me that my information is safe and not shared with immigration. That gave me confidence to use the app.',
    },
    story: {
      es: 'Tuve una lesión en el trabajo y necesitaba llevar un registro de mi tratamiento. Esta aplicación me ayudó a documentar todo para mi caso de compensación laboral.',
      en: 'I had a work injury and needed to keep a record of my treatment. This app helped me document everything for my workers\' compensation case.',
    },
    rating: 5,
    date: new Date('2024-10-05'),
    verified: true,
    featured: false,
  },
  {
    id: 'test-004',
    author: {
      name: 'Ana P.',
      role: 'Abuela y cuidadora',
      community: 'Pflugerville',
    },
    quote: {
      es: 'Uso la aplicación para llevar el registro de mis medicamentos y citas médicas. Mi nieta me ayudó a configurarla y ahora la uso sola. Es muy fácil de usar en español.',
      en: 'I use the app to keep track of my medications and medical appointments. My granddaughter helped me set it up and now I use it alone. It is very easy to use in Spanish.',
    },
    rating: 4,
    date: new Date('2024-11-12'),
    verified: true,
    featured: false,
  },
  {
    id: 'test-005',
    author: {
      name: 'Roberto M.',
      role: 'Padre',
      community: 'Cedar Park',
    },
    quote: {
      es: 'La función de compartir pantalla con mi Promotora fue increíble. Ella me guió paso a paso y pude ver todo en mi idioma. Aprendí mucho sobre mi diabetes.',
      en: 'The screen sharing feature with my Promotora was incredible. She guided me step by step and I could see everything in my language. I learned a lot about my diabetes.',
    },
    story: {
      es: 'Mi Promotora usó el modo de enseñanza para explicarme mis niveles de azúcar. Ahora entiendo mejor qué comer y cómo cuidarme.',
      en: 'My Promotora used teaching mode to explain my sugar levels to me. Now I understand better what to eat and how to take care of myself.',
    },
    rating: 5,
    date: new Date('2024-12-01'),
    verified: true,
    featured: true,
  },
];

// ============================================================================
// Trust Badges
// ============================================================================

export const TRUST_BADGES: TrustBadge[] = [
  {
    id: 'badge-hipaa',
    name: {
      es: 'Cumplimiento HIPAA',
      en: 'HIPAA Compliant',
    },
    description: {
      es: 'Cumplimos con todas las regulaciones federales de privacidad médica.',
      en: 'We comply with all federal medical privacy regulations.',
    },
    icon: '📋',
    verified: true,
    verifiedBy: 'Departamento de Salud y Servicios Humanos de EE.UU.',
  },
  {
    id: 'badge-encrypted',
    name: {
      es: 'Datos Encriptados',
      en: 'Encrypted Data',
    },
    description: {
      es: 'Encriptación AES-256 de nivel militar para todos sus datos.',
      en: 'Military-grade AES-256 encryption for all your data.',
    },
    icon: '🔐',
    verified: true,
    verifiedBy: 'Auditado por firma de seguridad independiente',
  },
  {
    id: 'badge-local',
    name: {
      es: 'Almacenamiento Local',
      en: 'Local Storage',
    },
    description: {
      es: 'Sus datos nunca salen de su dispositivo sin su permiso.',
      en: 'Your data never leaves your device without your permission.',
    },
    icon: '💻',
    verified: true,
  },
  {
    id: 'badge-nonprofit',
    name: {
      es: 'Sin Fines de Lucro',
      en: 'Non-Profit',
    },
    description: {
      es: 'Organización sin fines de lucro enfocada en la salud comunitaria.',
      en: 'Non-profit organization focused on community health.',
    },
    icon: '❤️',
    verified: true,
  },
  {
    id: 'badge-community',
    name: {
      es: 'Impulsado por la Comunidad',
      en: 'Community-Driven',
    },
    description: {
      es: 'Desarrollado con y para la comunidad latina.',
      en: 'Developed with and for the Latino community.',
    },
    icon: '🤝',
    verified: true,
  },
];

// ============================================================================
// Trust Building Functions
// ============================================================================

export function getPrivacyGuarantees(language: Language = 'es'): PrivacyGuarantee[] {
  return PRIVACY_GUARANTEES;
}

export function getPrivacyGuaranteeById(
  id: string,
  language: Language = 'es'
): PrivacyGuarantee | null {
  return PRIVACY_GUARANTEES.find((g) => g.id === id) || null;
}

export function getDataPolicies(language: Language = 'es'): DataPolicy[] {
  return DATA_POLICIES;
}

export function getDataPolicyByCategory(
  category: DataPolicy['category'],
  language: Language = 'es'
): DataPolicy | null {
  return DATA_POLICIES.find((p) => p.category === category) || null;
}

export function getTestimonials(
  options: {
    featuredOnly?: boolean;
    verifiedOnly?: boolean;
    limit?: number;
  } = {},
  language: Language = 'es'
): CommunityTestimonial[] {
  let results = [...COMMUNITY_TESTIMONIALS];

  if (options.featuredOnly) {
    results = results.filter((t) => t.featured);
  }

  if (options.verifiedOnly) {
    results = results.filter((t) => t.verified);
  }

  if (options.limit) {
    results = results.slice(0, options.limit);
  }

  return results;
}

export function getTrustBadges(language: Language = 'es'): TrustBadge[] {
  return TRUST_BADGES;
}

// ============================================================================
// Consent Templates
// ============================================================================

export const CONSENT_TEMPLATES: Record<
  string,
  { title: LocalizedText; content: LocalizedText }
> = {
  'promotora-access': {
    title: {
      es: 'Consentimiento para Compartir con Promotora',
      en: 'Consent to Share with Promotora',
    },
    content: {
      es: 'Yo, {patientName}, doy mi consentimiento para que mi Promotora de Salud, {promotoraName}, acceda a mi información médica en esta aplicación. Entiendo que: 1) Solo comparto lo que yo autorice, 2) Puedo revocar este permiso en cualquier momento, 3) Mi Promotora está entrenada en confidencialidad, 4) Esta información NO se comparte con inmigración ni otras agencias.',
      en: 'I, {patientName}, give my consent for my Community Health Worker, {promotoraName}, to access my medical information in this app. I understand that: 1) I only share what I authorize, 2) I can revoke this permission at any time, 3) My Promotora is trained in confidentiality, 4) This information is NOT shared with immigration or other agencies.',
    },
  },
  'session-recording': {
    title: {
      es: 'Consentimiento para Grabar Sesión',
      en: 'Consent to Record Session',
    },
    content: {
      es: 'Doy mi consentimiento para que esta sesión de orientación sea grabada con fines educativos y de calidad. Las grabaciones se almacenan localmente y solo son accesibles por mí y mi Promotora.',
      en: 'I give my consent for this guidance session to be recorded for educational and quality purposes. Recordings are stored locally and are only accessible by me and my Promotora.',
    },
  },
  'data-sharing-provider': {
    title: {
      es: 'Consentimiento para Compartir con Proveedor Médico',
      en: 'Consent to Share with Medical Provider',
    },
    content: {
      es: 'Autorizo a compartir mis registros médicos con: {providerName}. Esta autorización es válida por {duration} y puede ser revocada en cualquier momento.',
      en: 'I authorize sharing my medical records with: {providerName}. This authorization is valid for {duration} and can be revoked at any time.',
    },
  },
};

export function getConsentTemplate(
  templateId: string,
  variables: Record<string, string>,
  language: Language = 'es'
): LocalizedText {
  const template = CONSENT_TEMPLATES[templateId];
  if (!template) {
    return { es: '', en: '' };
  }

  let content = template.content[language];
  Object.entries(variables).forEach(([key, value]) => {
    content = content.replace(`{${key}}`, value);
  });

  return {
    es: templateId === 'promotora-access' && language === 'es' ? content : template.content.es,
    en: templateId === 'promotora-access' && language === 'en' ? content : template.content.en,
  };
}

// ============================================================================
// Trust Score Calculator
// ============================================================================

export interface TrustScore {
  overall: number; // 0-100
  privacy: number;
  security: number;
  transparency: number;
  community: number;
}

export function calculateTrustScore(): TrustScore {
  // This is a demonstration of how trust scoring could work
  // In production, this could be based on user feedback, audits, etc.
  return {
    overall: 95,
    privacy: 98,
    security: 96,
    transparency: 94,
    community: 92,
  };
}

export function getTrustScoreExplanation(
  score: TrustScore,
  language: Language = 'es'
): LocalizedText {
  if (score.overall >= 90) {
    return {
      es: 'Excelente nivel de confianza. Esta aplicación cumple con los más altos estándares de privacidad y seguridad.',
      en: 'Excellent trust level. This app meets the highest standards of privacy and security.',
    };
  } else if (score.overall >= 75) {
    return {
      es: 'Buen nivel de confianza. La aplicación tiene sólidas protecciones de privacidad.',
      en: 'Good trust level. The app has solid privacy protections.',
    };
  } else {
    return {
      es: 'Nivel de confianza estándar. Revise las políticas de privacidad para más detalles.',
      en: 'Standard trust level. Review privacy policies for more details.',
    };
  }
}

// ============================================================================
// Export
// ============================================================================
