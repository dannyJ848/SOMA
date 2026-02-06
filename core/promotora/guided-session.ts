/**
 * Guided Session Module
 * 
 * Enables Promotoras to conduct guided sessions with patients,
 * including shared screen view, teaching mode with discussion prompts,
 * and session outcome tracking.
 * 
 * All content supports Spanish/English localization.
 */

import {
  GuidedSession,
  SessionStatus,
  SessionMode,
  DiscussionPrompt,
  SessionOutcome,
  ScreenShareState,
  ScreenAnnotation,
  LocalizedText,
  Language,
  PromotoraApiResponse,
} from './types';

// ============================================================================
// Session Templates
// ============================================================================

export interface SessionTemplate {
  id: string;
  mode: SessionMode;
  name: LocalizedText;
  description: LocalizedText;
  estimatedDuration: number; // minutes
  objectives: LocalizedText[];
  prompts: DiscussionPrompt[];
  recommendedScreens: string[];
  preparationChecklist: LocalizedText[];
}

export const SESSION_TEMPLATES: SessionTemplate[] = [
  {
    id: 'onboarding-new-patient',
    mode: 'onboarding',
    name: {
      es: 'Orientación para Nuevos Pacientes',
      en: 'New Patient Onboarding',
    },
    description: {
      es: 'Introducción completa a la aplicación y sus funciones principales',
      en: 'Complete introduction to the app and its main features',
    },
    estimatedDuration: 45,
    objectives: [
      { es: 'Crear cuenta y configurar perfil', en: 'Create account and set up profile' },
      { es: 'Entender las funciones básicas', en: 'Understand basic features' },
      { es: 'Configurar preferencias de idioma', en: 'Set language preferences' },
      { es: 'Aprender a navegar el menú principal', en: 'Learn to navigate the main menu' },
    ],
    prompts: [
      {
        id: 'onboarding-1',
        topic: { es: 'Introducción', en: 'Introduction' },
        prompt: {
          es: '¿Qué espera obtener de esta aplicación para su salud?',
          en: 'What do you hope to gain from this app for your health?',
        },
        followUpQuestions: [
          { es: '¿Tiene alguna preocupación de salud específica?', en: 'Do you have any specific health concerns?' },
          { es: '¿Quién más en su familia podría beneficiarse?', en: 'Who else in your family might benefit?' },
        ],
        completed: false,
      },
      {
        id: 'onboarding-2',
        topic: { es: 'Privacidad', en: 'Privacy' },
        prompt: {
          es: '¿Tiene alguna preocupación sobre la privacidad de sus datos?',
          en: 'Do you have any concerns about your data privacy?',
        },
        followUpQuestions: [
          { es: '¿Le gustaría saber más sobre cómo protegemos su información?', en: 'Would you like to learn more about how we protect your information?' },
        ],
        completed: false,
      },
    ],
    recommendedScreens: ['welcome', 'profile-setup', 'privacy-info', 'main-menu'],
    preparationChecklist: [
      { es: 'Verificar que el paciente tenga acceso a internet', en: 'Verify patient has internet access' },
      { es: 'Confirmar preferencia de idioma', en: 'Confirm language preference' },
      { es: 'Tener lista información básica de contacto', en: 'Have basic contact information ready' },
    ],
  },
  {
    id: 'lab-results-review',
    mode: 'lab_review',
    name: {
      es: 'Revisión de Resultados de Laboratorio',
      en: 'Lab Results Review',
    },
    description: {
      es: 'Explicar resultados de laboratorio de manera comprensible',
      en: 'Explain lab results in an understandable way',
    },
    estimatedDuration: 30,
    objectives: [
      { es: 'Entender qué mide cada prueba', en: 'Understand what each test measures' },
      { es: 'Saber qué valores son normales', en: 'Know which values are normal' },
      { es: 'Reconocer valores que necesitan atención', en: 'Recognize values that need attention' },
      { es: 'Conocer los siguientes pasos', en: 'Know the next steps' },
    ],
    prompts: [
      {
        id: 'lab-1',
        topic: { es: 'Comprensión', en: 'Understanding' },
        prompt: {
          es: '¿Ha tenido estos análisis antes? ¿Entiende para qué son?',
          en: 'Have you had these tests before? Do you understand what they are for?',
        },
        followUpQuestions: [
          { es: '¿Su médico le ha explicado estos resultados?', en: 'Has your doctor explained these results?' },
          { es: '¿Hay algo específico que le preocupe?', en: 'Is there anything specific that worries you?' },
        ],
        completed: false,
      },
      {
        id: 'lab-2',
        topic: { es: 'Próximos pasos', en: 'Next Steps' },
        prompt: {
          es: '¿Qué preguntas tiene para su próxima visita médica?',
          en: 'What questions do you have for your next medical visit?',
        },
        followUpQuestions: [
          { es: '¿Necesita ayuda para programar una cita?', en: 'Do you need help scheduling an appointment?' },
          { es: '¿Tiene acceso al transporte?', en: 'Do you have transportation access?' },
        ],
        completed: false,
      },
    ],
    recommendedScreens: ['lab-dashboard', 'lab-detail', 'trends'],
    preparationChecklist: [
      { es: 'Revisar resultados de laboratorio antes de la sesión', en: 'Review lab results before session' },
      { es: 'Identificar valores que necesitan explicación', en: 'Identify values that need explanation' },
      { es: 'Tener recursos de seguimiento listos', en: 'Have follow-up resources ready' },
    ],
  },
  {
    id: 'education-module',
    mode: 'education',
    name: {
      es: 'Módulo Educativo Guiado',
      en: 'Guided Education Module',
    },
    description: {
      es: 'Acompañar al paciente a través de un módulo educativo',
      en: 'Guide patient through an educational module',
    },
    estimatedDuration: 40,
    objectives: [
      { es: 'Completar el módulo educativo seleccionado', en: 'Complete selected educational module' },
      { es: 'Aclarar conceptos confusos', en: 'Clarify confusing concepts' },
      { es: 'Conectar con experiencias personales', en: 'Connect with personal experiences' },
      { es: 'Reforzar aprendizaje con preguntas', en: 'Reinforce learning with questions' },
    ],
    prompts: [
      {
        id: 'edu-1',
        topic: { es: 'Conexión personal', en: 'Personal connection' },
        prompt: {
          es: '¿Cómo se relaciona este tema con su experiencia de salud?',
          en: 'How does this topic relate to your health experience?',
        },
        followUpQuestions: [
          { es: '¿Conoce a alguien que haya pasado por esto?', en: 'Do you know someone who has gone through this?' },
          { es: '¿Qué le gustaría saber más?', en: 'What would you like to know more about?' },
        ],
        completed: false,
      },
    ],
    recommendedScreens: ['education-menu', 'module-content', 'quiz'],
    preparationChecklist: [
      { es: 'Seleccionar módulo apropiado para el paciente', en: 'Select appropriate module for patient' },
      { es: 'Revisar el contenido del módulo', en: 'Review module content' },
      { es: 'Preparar ejemplos relevantes', en: 'Prepare relevant examples' },
    ],
  },
  {
    id: 'appointment-preparation',
    mode: 'appointment_prep',
    name: {
      es: 'Preparación para Cita Médica',
      en: 'Medical Appointment Preparation',
    },
    description: {
      es: 'Preparar al paciente para su próxima visita médica',
      en: 'Prepare patient for their next medical visit',
    },
    estimatedDuration: 25,
    objectives: [
      { es: 'Preparar preguntas para el médico', en: 'Prepare questions for the doctor' },
      { es: 'Organar documentos necesarios', en: 'Organize necessary documents' },
      { es: 'Entender qué esperar en la visita', en: 'Understand what to expect at the visit' },
      { es: 'Planificar transporte y logística', en: 'Plan transportation and logistics' },
    ],
    prompts: [
      {
        id: 'appt-1',
        topic: { es: 'Preparación', en: 'Preparation' },
        prompt: {
          es: '¿Qué le preocupa más sobre esta cita?',
          en: 'What concerns you most about this appointment?',
        },
        followUpQuestions: [
          { es: '¿Ha visitado este doctor/clínica antes?', en: 'Have you visited this doctor/clinic before?' },
          { es: '¿Necesita intérprete?', en: 'Do you need an interpreter?' },
        ],
        completed: false,
      },
      {
        id: 'appt-2',
        topic: { es: 'Documentos', en: 'Documents' },
        prompt: {
          es: '¿Tiene todos los documentos necesarios?',
          en: 'Do you have all necessary documents?',
        },
        followUpQuestions: [
          { es: '¿Tiene tarjeta de seguro/identificación?', en: 'Do you have insurance/ID card?' },
          { es: '¿Tiene lista de medicamentos?', en: 'Do you have a medication list?' },
        ],
        completed: false,
      },
    ],
    recommendedScreens: ['appointment-prep', 'document-checklist', 'question-builder'],
    preparationChecklist: [
      { es: 'Obtener detalles de la cita programada', en: 'Get scheduled appointment details' },
      { es: 'Revisar historial médico reciente', en: 'Review recent medical history' },
      { es: 'Preparar lista de verificación de documentos', en: 'Prepare document checklist' },
    ],
  },
];

// ============================================================================
// Session Management
// ============================================================================

export interface CreateSessionOptions {
  promotoraId: string;
  patientId: string;
  mode: SessionMode;
  templateId?: string;
  notes?: string;
}

/**
 * Create a new guided session
 */
export async function createSession(
  options: CreateSessionOptions,
  language: Language = 'es'
): Promise<PromotoraApiResponse<GuidedSession>> {
  try {
    const template = options.templateId
      ? SESSION_TEMPLATES.find((t) => t.id === options.templateId)
      : undefined;

    const session: GuidedSession = {
      id: generateSessionId(),
      promotoraId: options.promotoraId,
      patientId: options.patientId,
      status: 'preparing',
      startedAt: new Date(),
      mode: options.mode,
      sharedViewEnabled: false,
      teachingModeEnabled: false,
      discussionPrompts: template?.prompts.map((p) => ({ ...p })) || [],
      notes: options.notes,
    };

    // Save to database
    await saveSession(session);

    return {
      success: true,
      data: session,
    };
  } catch (error) {
    return {
      success: false,
      error: {
        code: 'CREATE_ERROR',
        message: {
          es: 'Error al crear la sesión. Intente de nuevo.',
          en: 'Error creating session. Please try again.',
        },
      },
    };
  }
}

/**
 * Start an active session
 */
export async function startSession(
  sessionId: string,
  options: {
    enableSharedView?: boolean;
    enableTeachingMode?: boolean;
  } = {},
  language: Language = 'es'
): Promise<PromotoraApiResponse<GuidedSession>> {
  try {
    const session = await getSessionById(sessionId);
    
    if (!session) {
      return {
        success: false,
        error: {
          code: 'NOT_FOUND',
          message: {
            es: 'Sesión no encontrada.',
            en: 'Session not found.',
          },
        },
      };
    }

    session.status = 'active';
    session.sharedViewEnabled = options.enableSharedView ?? false;
    session.teachingModeEnabled = options.enableTeachingMode ?? false;

    await saveSession(session);

    return {
      success: true,
      data: session,
    };
  } catch (error) {
    return {
      success: false,
      error: {
        code: 'UPDATE_ERROR',
        message: {
          es: 'Error al iniciar la sesión.',
          en: 'Error starting session.',
        },
      },
    };
  }
}

/**
 * Complete a session and record outcomes
 */
export async function completeSession(
  sessionId: string,
  outcome: SessionOutcome,
  notes?: string,
  language: Language = 'es'
): Promise<PromotoraApiResponse<GuidedSession>> {
  try {
    const session = await getSessionById(sessionId);
    
    if (!session) {
      return {
        success: false,
        error: {
          code: 'NOT_FOUND',
          message: {
            es: 'Sesión no encontrada.',
            en: 'Session not found.',
          },
        },
      };
    }

    session.status = 'completed';
    session.endedAt = new Date();
    session.outcomes = outcome;
    if (notes) session.notes = notes;

    await saveSession(session);

    return {
      success: true,
      data: session,
    };
  } catch (error) {
    return {
      success: false,
      error: {
        code: 'UPDATE_ERROR',
        message: {
          es: 'Error al completar la sesión.',
          en: 'Error completing session.',
        },
      },
    };
  }
}

/**
 * Update session progress
 */
export async function updateSessionProgress(
  sessionId: string,
  updates: {
    currentScreen?: string;
    promptCompleted?: string;
    promptNotes?: { promptId: string; notes: string };
  },
  language: Language = 'es'
): Promise<PromotoraApiResponse<GuidedSession>> {
  try {
    const session = await getSessionById(sessionId);
    
    if (!session) {
      return {
        success: false,
        error: {
          code: 'NOT_FOUND',
          message: {
            es: 'Sesión no encontrada.',
            en: 'Session not found.',
          },
        },
      };
    }

    if (updates.currentScreen) {
      session.currentScreen = updates.currentScreen;
    }

    if (updates.promptCompleted) {
      const prompt = session.discussionPrompts.find(
        (p) => p.id === updates.promptCompleted
      );
      if (prompt) {
        prompt.completed = true;
      }
    }

    if (updates.promptNotes) {
      const prompt = session.discussionPrompts.find(
        (p) => p.id === updates.promptNotes.promptId
      );
      if (prompt) {
        prompt.notes = updates.promptNotes.notes;
      }
    }

    await saveSession(session);

    return {
      success: true,
      data: session,
    };
  } catch (error) {
    return {
      success: false,
      error: {
        code: 'UPDATE_ERROR',
        message: {
          es: 'Error al actualizar el progreso.',
          en: 'Error updating progress.',
        },
      },
    };
  }
}

// ============================================================================
// Screen Sharing
// ============================================================================

export async function enableScreenShare(
  sessionId: string,
  language: Language = 'es'
): Promise<PromotoraApiResponse<ScreenShareState>> {
  try {
    const session = await getSessionById(sessionId);
    
    if (!session) {
      return {
        success: false,
        error: {
          code: 'NOT_FOUND',
          message: {
            es: 'Sesión no encontrada.',
            en: 'Session not found.',
          },
        },
      };
    }

    session.sharedViewEnabled = true;
    await saveSession(session);

    const screenShareState: ScreenShareState = {
      enabled: true,
      viewerId: session.patientId,
      sharerId: session.promotoraId,
      annotations: [],
    };

    return {
      success: true,
      data: screenShareState,
    };
  } catch (error) {
    return {
      success: false,
      error: {
        code: 'SHARE_ERROR',
        message: {
          es: 'Error al activar compartir pantalla.',
          en: 'Error enabling screen sharing.',
        },
      },
    };
  }
}

export async function addScreenAnnotation(
  sessionId: string,
  annotation: Omit<ScreenAnnotation, 'id'>,
  language: Language = 'es'
): Promise<PromotoraApiResponse<ScreenAnnotation>> {
  try {
    const newAnnotation: ScreenAnnotation = {
      ...annotation,
      id: generateAnnotationId(),
    };

    // Save annotation to session

    return {
      success: true,
      data: newAnnotation,
    };
  } catch (error) {
    return {
      success: false,
      error: {
        code: 'ANNOTATION_ERROR',
        message: {
          es: 'Error al agregar anotación.',
          en: 'Error adding annotation.',
        },
      },
    };
  }
}

// ============================================================================
// Teaching Mode
// ============================================================================

export interface TeachingTip {
  id: string;
  context: string;
  tip: LocalizedText;
  category: 'navigation' | 'explanation' | 'encouragement' | 'cultural';
}

export const TEACHING_TIPS: TeachingTip[] = [
  {
    id: 'nav-1',
    context: 'first-time-user',
    tip: {
      es: 'Tómese su tiempo. No hay prisa.',
      en: 'Take your time. There is no rush.',
    },
    category: 'encouragement',
  },
  {
    id: 'nav-2',
    context: 'complex-concept',
    tip: {
      es: 'Use analogías de la vida diaria para explicar conceptos médicos.',
      en: 'Use everyday life analogies to explain medical concepts.',
    },
    category: 'explanation',
  },
  {
    id: 'nav-3',
    context: 'cultural-bridge',
    tip: {
      es: 'Conecte con remedios caseros o prácticas familiares conocidas.',
      en: 'Connect with familiar home remedies or family practices.',
    },
    category: 'cultural',
  },
  {
    id: 'nav-4',
    context: 'lab-results',
    tip: {
      es: 'Use el botón "Ver en español" para cambiar el idioma.',
      en: 'Use the "View in Spanish" button to change language.',
    },
    category: 'navigation',
  },
  {
    id: 'nav-5',
    context: 'patient-hesitant',
    tip: {
      es: 'Recuerde que esta información es privada y segura.',
      en: 'Remember that this information is private and secure.',
    },
    category: 'encouragement',
  },
];

export function getTeachingTips(
  context: string,
  language: Language = 'es'
): TeachingTip[] {
  return TEACHING_TIPS.filter((t) => t.context === context);
}

// ============================================================================
// Helpers (Mock implementations)
// ============================================================================

function generateSessionId(): string {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

function generateAnnotationId(): string {
  return `annot_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

async function saveSession(session: GuidedSession): Promise<void> {
  // Would save to database
  console.log('Saving session:', session.id);
}

async function getSessionById(sessionId: string): Promise<GuidedSession | null> {
  // Would fetch from database
  return null;
}

// ============================================================================
// Export
// ============================================================================

export { SESSION_TEMPLATES, TEACHING_TIPS };
