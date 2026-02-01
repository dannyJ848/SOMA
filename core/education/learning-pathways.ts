/**
 * learning-pathways.ts
 *
 * Structured Learning Pathways for Patient Education
 *
 * Defines progressive, multi-module courses for patients with common chronic
 * conditions. Each pathway guides a patient from foundational understanding
 * through practical self-management, advancing only when assessment criteria
 * are met.
 *
 * Pathways are bilingual (EN/ES) and reference the 5-level explanation system
 * from explanation-levels.ts so that content can be rendered at any audience
 * tier.
 */

import type { ExplanationLevelNumber } from './explanation-levels';

// ---------------------------------------------------------------------------
// 1. Types
// ---------------------------------------------------------------------------

/** A single assessment question attached to a module. */
export interface AssessmentQuestion {
  /** Unique id within the module */
  id: string;
  /** Question text (English) */
  question: string;
  /** Question text (Spanish) */
  questionEs: string;
  /** Answer options */
  options: string[];
  /** Answer options (Spanish) */
  optionsEs: string[];
  /** Zero-based index of the correct option */
  correctIndex: number;
  /** Brief explanation shown after answering (English) */
  explanation: string;
  /** Brief explanation shown after answering (Spanish) */
  explanationEs: string;
}

/** A single module inside a learning pathway. */
export interface PathwayModule {
  /** Unique identifier (e.g. "diabetes-m01") */
  id: string;
  /** Module title (English) */
  title: string;
  /** Module title (Spanish) */
  titleEs: string;
  /** Topic tags covered in this module */
  topics: string[];
  /** Estimated time to complete in minutes */
  estimatedMinutes: number;
  /** Content complexity level (maps to ExplanationLevelNumber) */
  complexityLevel: ExplanationLevelNumber;
  /** Assessment questions for this module */
  assessmentQuestions: AssessmentQuestion[];
}

/** Criteria that determine when a learner may advance to the next module. */
export interface ProgressionCriteria {
  /** Minimum percentage score on module assessment (0-100) */
  minimumScore: number;
  /** Whether every assessment question must be attempted */
  requireAllQuestionsAttempted: boolean;
  /** Minimum time (minutes) spent in the module before progressing */
  minimumTimeSpentMinutes: number;
  /** Number of allowed retakes before lockout (-1 = unlimited) */
  maxRetakes: number;
}

/** A complete learning pathway. */
export interface LearningPathway {
  /** Unique identifier (e.g. "pathway-diabetes") */
  id: string;
  /** Pathway title (English) */
  title: string;
  /** Pathway title (Spanish) */
  titleEs: string;
  /** Short description (English) */
  description: string;
  /** Short description (Spanish) */
  descriptionEs: string;
  /** Knowledge the learner should already have before starting */
  prerequisiteKnowledge: string[];
  /** Ordered list of modules */
  modules: PathwayModule[];
  /** Criteria for advancing between modules */
  progressionCriteria: ProgressionCriteria;
}

// ---------------------------------------------------------------------------
// 2. Helper — build an AssessmentQuestion concisely
// ---------------------------------------------------------------------------

function aq(
  id: string,
  question: string,
  questionEs: string,
  options: string[],
  optionsEs: string[],
  correctIndex: number,
  explanation: string,
  explanationEs: string,
): AssessmentQuestion {
  return { id, question, questionEs, options, optionsEs, correctIndex, explanation, explanationEs };
}

// ---------------------------------------------------------------------------
// 3. Pathway definitions
// ---------------------------------------------------------------------------

// ========================== 1. Diabetes ==================================

export const DIABETES_PATHWAY: LearningPathway = {
  id: 'pathway-diabetes',
  title: 'Understanding Your Diabetes',
  titleEs: 'Entendiendo Tu Diabetes',
  description:
    'A 10-module course covering what diabetes is, how to monitor blood sugar, nutrition, medication, exercise, and long-term health.',
  descriptionEs:
    'Un curso de 10 módulos que cubre qué es la diabetes, cómo monitorear el azúcar en sangre, nutrición, medicación, ejercicio y salud a largo plazo.',
  prerequisiteKnowledge: [
    'Basic understanding of food and nutrition',
    'Ability to read a thermometer or simple gauge',
  ],
  progressionCriteria: {
    minimumScore: 70,
    requireAllQuestionsAttempted: true,
    minimumTimeSpentMinutes: 5,
    maxRetakes: -1,
  },
  modules: [
    {
      id: 'diabetes-m01',
      title: 'What Is Diabetes?',
      titleEs: '¿Qué Es la Diabetes?',
      topics: ['definition', 'types', 'insulin basics'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('diabetes-m01-q1',
          'What is the main role of insulin in the body?',
          '¿Cuál es la función principal de la insulina en el cuerpo?',
          ['It fights infections', 'It helps cells absorb sugar for energy', 'It strengthens bones', 'It controls body temperature'],
          ['Combate infecciones', 'Ayuda a las células a absorber azúcar para energía', 'Fortalece los huesos', 'Controla la temperatura corporal'],
          1,
          'Insulin is a hormone that helps your cells take in glucose (sugar) from the blood to use as energy.',
          'La insulina es una hormona que ayuda a las células a absorber glucosa (azúcar) de la sangre para usarla como energía.'),
        aq('diabetes-m01-q2',
          'Which type of diabetes is most common in adults?',
          '¿Qué tipo de diabetes es más común en adultos?',
          ['Type 1', 'Type 2', 'Gestational', 'Type 3'],
          ['Tipo 1', 'Tipo 2', 'Gestacional', 'Tipo 3'],
          1,
          'Type 2 diabetes accounts for about 90-95% of all diabetes cases and is most common in adults.',
          'La diabetes tipo 2 representa aproximadamente el 90-95% de todos los casos de diabetes y es más común en adultos.'),
      ],
    },
    {
      id: 'diabetes-m02',
      title: 'Blood Sugar Basics',
      titleEs: 'Conceptos Básicos del Azúcar en Sangre',
      topics: ['glucose', 'blood sugar ranges', 'hyperglycemia', 'hypoglycemia'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('diabetes-m02-q1',
          'What is a normal fasting blood sugar range for most adults?',
          '¿Cuál es el rango normal de azúcar en sangre en ayunas para la mayoría de los adultos?',
          ['50-60 mg/dL', '70-100 mg/dL', '150-200 mg/dL', '200-300 mg/dL'],
          ['50-60 mg/dL', '70-100 mg/dL', '150-200 mg/dL', '200-300 mg/dL'],
          1,
          'A normal fasting blood sugar is typically between 70 and 100 mg/dL.',
          'Un nivel normal de azúcar en sangre en ayunas está típicamente entre 70 y 100 mg/dL.'),
        aq('diabetes-m02-q2',
          'What does "hypoglycemia" mean?',
          '¿Qué significa "hipoglucemia"?',
          ['High blood sugar', 'Low blood sugar', 'Normal blood sugar', 'No blood sugar'],
          ['Azúcar alta en sangre', 'Azúcar baja en sangre', 'Azúcar normal en sangre', 'Sin azúcar en sangre'],
          1,
          'Hypoglycemia means your blood sugar has dropped below normal levels, usually below 70 mg/dL.',
          'La hipoglucemia significa que el azúcar en sangre ha bajado por debajo de los niveles normales, generalmente por debajo de 70 mg/dL.'),
      ],
    },
    {
      id: 'diabetes-m03',
      title: 'Monitoring Your Blood Sugar',
      titleEs: 'Monitoreando Tu Azúcar en Sangre',
      topics: ['glucometer', 'continuous glucose monitor', 'testing schedule', 'logging results'],
      estimatedMinutes: 20,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('diabetes-m03-q1',
          'How often should most people with Type 2 diabetes check their blood sugar?',
          '¿Con qué frecuencia deben la mayoría de las personas con diabetes tipo 2 revisar su azúcar en sangre?',
          ['Only when feeling sick', 'As recommended by their doctor, often 1-4 times daily', 'Once a month', 'Only at doctor visits'],
          ['Solo cuando se sienten enfermos', 'Según lo recomendado por su médico, a menudo 1-4 veces al día', 'Una vez al mes', 'Solo en visitas al médico'],
          1,
          'Your doctor will recommend a testing schedule based on your treatment plan, but many people check 1-4 times daily.',
          'Su médico recomendará un horario de pruebas según su plan de tratamiento, pero muchas personas revisan de 1 a 4 veces al día.'),
      ],
    },
    {
      id: 'diabetes-m04',
      title: 'Nutrition and Carbohydrates',
      titleEs: 'Nutrición y Carbohidratos',
      topics: ['carb counting', 'glycemic index', 'meal planning', 'portion control'],
      estimatedMinutes: 25,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('diabetes-m04-q1',
          'Which nutrient has the greatest impact on blood sugar levels?',
          '¿Qué nutriente tiene el mayor impacto en los niveles de azúcar en sangre?',
          ['Protein', 'Fat', 'Carbohydrates', 'Vitamins'],
          ['Proteína', 'Grasa', 'Carbohidratos', 'Vitaminas'],
          2,
          'Carbohydrates are broken down into glucose, which directly raises blood sugar levels.',
          'Los carbohidratos se descomponen en glucosa, lo que eleva directamente los niveles de azúcar en sangre.'),
      ],
    },
    {
      id: 'diabetes-m05',
      title: 'Diabetes Medications',
      titleEs: 'Medicamentos para la Diabetes',
      topics: ['metformin', 'insulin therapy', 'oral medications', 'medication adherence'],
      estimatedMinutes: 20,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('diabetes-m05-q1',
          'What is typically the first medication prescribed for Type 2 diabetes?',
          '¿Cuál es típicamente el primer medicamento recetado para la diabetes tipo 2?',
          ['Insulin injections', 'Metformin', 'Aspirin', 'Antibiotics'],
          ['Inyecciones de insulina', 'Metformina', 'Aspirina', 'Antibióticos'],
          1,
          'Metformin is usually the first-line medication for Type 2 diabetes because it is effective, well-tolerated, and affordable.',
          'La metformina es generalmente el medicamento de primera línea para la diabetes tipo 2 porque es eficaz, bien tolerada y asequible.'),
      ],
    },
    {
      id: 'diabetes-m06',
      title: 'Exercise and Physical Activity',
      titleEs: 'Ejercicio y Actividad Física',
      topics: ['exercise benefits', 'safe exercise', 'activity guidelines', 'blood sugar and exercise'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('diabetes-m06-q1',
          'How does exercise typically affect blood sugar?',
          '¿Cómo afecta típicamente el ejercicio al azúcar en sangre?',
          ['Raises it significantly', 'Has no effect', 'Helps lower it', 'Makes it unpredictable'],
          ['La sube significativamente', 'No tiene efecto', 'Ayuda a bajarla', 'La hace impredecible'],
          2,
          'Exercise helps your muscles use glucose for energy, which lowers blood sugar levels.',
          'El ejercicio ayuda a los músculos a usar glucosa como energía, lo que baja los niveles de azúcar en sangre.'),
      ],
    },
    {
      id: 'diabetes-m07',
      title: 'Preventing Complications',
      titleEs: 'Previniendo Complicaciones',
      topics: ['neuropathy', 'retinopathy', 'nephropathy', 'cardiovascular risk'],
      estimatedMinutes: 20,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('diabetes-m07-q1',
          'Which body parts are most at risk for diabetes-related complications?',
          '¿Qué partes del cuerpo están en mayor riesgo de complicaciones relacionadas con la diabetes?',
          ['Hair and nails', 'Eyes, kidneys, nerves, and heart', 'Only the pancreas', 'Muscles and joints'],
          ['Cabello y uñas', 'Ojos, riñones, nervios y corazón', 'Solo el páncreas', 'Músculos y articulaciones'],
          1,
          'High blood sugar over time can damage blood vessels and nerves, particularly affecting eyes, kidneys, nerves, and the cardiovascular system.',
          'El azúcar alta en sangre con el tiempo puede dañar los vasos sanguíneos y los nervios, afectando especialmente los ojos, riñones, nervios y el sistema cardiovascular.'),
      ],
    },
    {
      id: 'diabetes-m08',
      title: 'Foot Care and Skin Health',
      titleEs: 'Cuidado de los Pies y Salud de la Piel',
      topics: ['foot exams', 'wound care', 'infection prevention', 'proper footwear'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('diabetes-m08-q1',
          'Why is foot care especially important for people with diabetes?',
          '¿Por qué el cuidado de los pies es especialmente importante para personas con diabetes?',
          ['Diabetes makes feet grow faster', 'Nerve damage can reduce feeling, making injuries harder to notice', 'Diabetes only affects the feet', 'It is not especially important'],
          ['La diabetes hace que los pies crezcan más rápido', 'El daño a los nervios puede reducir la sensibilidad, haciendo más difícil notar lesiones', 'La diabetes solo afecta los pies', 'No es especialmente importante'],
          1,
          'Diabetic neuropathy can reduce sensation in the feet, meaning cuts or sores may go unnoticed and become infected.',
          'La neuropatía diabética puede reducir la sensibilidad en los pies, lo que significa que cortes o llagas pueden pasar desapercibidos e infectarse.'),
      ],
    },
    {
      id: 'diabetes-m09',
      title: 'Emotional Well-Being and Diabetes',
      titleEs: 'Bienestar Emocional y Diabetes',
      topics: ['diabetes distress', 'mental health', 'support systems', 'burnout'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('diabetes-m09-q1',
          'What is "diabetes distress"?',
          '¿Qué es el "estrés por diabetes"?',
          ['A type of diabetes', 'Feeling overwhelmed by the daily demands of managing diabetes', 'A medication side effect', 'A complication affecting the brain'],
          ['Un tipo de diabetes', 'Sentirse abrumado por las demandas diarias de manejar la diabetes', 'Un efecto secundario de medicamentos', 'Una complicación que afecta el cerebro'],
          1,
          'Diabetes distress refers to the emotional burden of living with and managing diabetes day after day.',
          'El estrés por diabetes se refiere a la carga emocional de vivir con y manejar la diabetes día tras día.'),
      ],
    },
    {
      id: 'diabetes-m10',
      title: 'Living Well Long-Term',
      titleEs: 'Vivir Bien a Largo Plazo',
      topics: ['A1C goals', 'regular checkups', 'self-advocacy', 'community resources'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('diabetes-m10-q1',
          'What does the A1C test measure?',
          '¿Qué mide la prueba de A1C?',
          ['Blood sugar at that exact moment', 'Average blood sugar over the past 2-3 months', 'Cholesterol levels', 'Kidney function'],
          ['Azúcar en sangre en ese momento exacto', 'Promedio de azúcar en sangre de los últimos 2-3 meses', 'Niveles de colesterol', 'Función renal'],
          1,
          'The A1C test reflects your average blood sugar over approximately 2-3 months, giving a bigger picture than a single glucose reading.',
          'La prueba de A1C refleja el promedio de azúcar en sangre durante aproximadamente 2-3 meses, dando una imagen más amplia que una sola lectura de glucosa.'),
      ],
    },
  ],
};

// ========================== 2. Hypertension ==============================

export const HYPERTENSION_PATHWAY: LearningPathway = {
  id: 'pathway-hypertension',
  title: 'Managing Hypertension',
  titleEs: 'Manejando la Hipertensión',
  description:
    'An 8-module course on understanding high blood pressure, lifestyle modifications, medications, and monitoring.',
  descriptionEs:
    'Un curso de 8 módulos sobre la presión arterial alta, modificaciones en el estilo de vida, medicamentos y monitoreo.',
  prerequisiteKnowledge: [
    'Basic understanding of the heart and blood vessels',
    'Ability to read numbers on a blood pressure monitor',
  ],
  progressionCriteria: {
    minimumScore: 70,
    requireAllQuestionsAttempted: true,
    minimumTimeSpentMinutes: 5,
    maxRetakes: -1,
  },
  modules: [
    {
      id: 'htn-m01',
      title: 'What Is Blood Pressure?',
      titleEs: '¿Qué Es la Presión Arterial?',
      topics: ['systolic', 'diastolic', 'blood pressure reading', 'normal ranges'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('htn-m01-q1',
          'What do the two numbers in a blood pressure reading represent?',
          '¿Qué representan los dos números en una lectura de presión arterial?',
          ['Heart rate and breathing rate', 'Systolic (heart pumping) and diastolic (heart resting) pressure', 'Temperature and pulse', 'Weight and height'],
          ['Frecuencia cardíaca y frecuencia respiratoria', 'Presión sistólica (corazón bombeando) y diastólica (corazón en reposo)', 'Temperatura y pulso', 'Peso y altura'],
          1,
          'The top number (systolic) measures pressure when the heart beats; the bottom (diastolic) measures pressure when the heart rests between beats.',
          'El número superior (sistólica) mide la presión cuando el corazón late; el inferior (diastólica) mide la presión cuando el corazón descansa entre latidos.'),
      ],
    },
    {
      id: 'htn-m02',
      title: 'Understanding Hypertension',
      titleEs: 'Entendiendo la Hipertensión',
      topics: ['definition', 'stages', 'risk factors', 'silent killer'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('htn-m02-q1',
          'Why is hypertension often called the "silent killer"?',
          '¿Por qué la hipertensión se llama a menudo el "asesino silencioso"?',
          ['It only occurs at night', 'It usually has no symptoms until serious damage occurs', 'It cannot be detected', 'It is always fatal'],
          ['Solo ocurre de noche', 'Generalmente no tiene síntomas hasta que ocurre un daño grave', 'No se puede detectar', 'Siempre es fatal'],
          1,
          'Most people with hypertension feel fine, but the condition quietly damages blood vessels and organs over time.',
          'La mayoría de las personas con hipertensión se sienten bien, pero la condición daña silenciosamente los vasos sanguíneos y órganos con el tiempo.'),
      ],
    },
    {
      id: 'htn-m03',
      title: 'Diet and Sodium',
      titleEs: 'Dieta y Sodio',
      topics: ['DASH diet', 'sodium reduction', 'potassium', 'healthy eating patterns'],
      estimatedMinutes: 20,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('htn-m03-q1',
          'What is the recommended daily sodium limit for people with high blood pressure?',
          '¿Cuál es el límite diario recomendado de sodio para personas con presión arterial alta?',
          ['5,000 mg', 'Less than 2,300 mg (ideally 1,500 mg)', 'No limit needed', '500 mg'],
          ['5,000 mg', 'Menos de 2,300 mg (idealmente 1,500 mg)', 'No se necesita límite', '500 mg'],
          1,
          'Guidelines recommend less than 2,300 mg per day, with an ideal target of 1,500 mg for most adults with hypertension.',
          'Las guías recomiendan menos de 2,300 mg por día, con un objetivo ideal de 1,500 mg para la mayoría de los adultos con hipertensión.'),
      ],
    },
    {
      id: 'htn-m04',
      title: 'Exercise and Weight Management',
      titleEs: 'Ejercicio y Control de Peso',
      topics: ['aerobic exercise', 'weight loss benefits', 'activity guidelines', 'safe exercise'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('htn-m04-q1',
          'How much moderate exercise per week is recommended to help lower blood pressure?',
          '¿Cuánto ejercicio moderado por semana se recomienda para ayudar a bajar la presión arterial?',
          ['10 minutes per week', 'At least 150 minutes per week', '5 minutes daily', 'Exercise is not recommended'],
          ['10 minutos por semana', 'Al menos 150 minutos por semana', '5 minutos diarios', 'No se recomienda el ejercicio'],
          1,
          'At least 150 minutes of moderate-intensity aerobic exercise per week can help lower blood pressure.',
          'Al menos 150 minutos de ejercicio aeróbico de intensidad moderada por semana puede ayudar a bajar la presión arterial.'),
      ],
    },
    {
      id: 'htn-m05',
      title: 'Blood Pressure Medications',
      titleEs: 'Medicamentos para la Presión Arterial',
      topics: ['ACE inhibitors', 'ARBs', 'diuretics', 'calcium channel blockers', 'adherence'],
      estimatedMinutes: 20,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('htn-m05-q1',
          'Why is it important to take blood pressure medication even when you feel fine?',
          '¿Por qué es importante tomar medicamentos para la presión arterial incluso cuando te sientes bien?',
          ['Medications expire if not used', 'High blood pressure often has no symptoms, so damage continues silently', 'You will feel worse if you stop', 'Doctors require it'],
          ['Los medicamentos caducan si no se usan', 'La presión arterial alta a menudo no tiene síntomas, por lo que el daño continúa en silencio', 'Te sentirás peor si dejas de tomarlos', 'Los médicos lo requieren'],
          1,
          'Since hypertension is usually symptom-free, stopping medication allows silent organ damage to continue.',
          'Dado que la hipertensión generalmente no presenta síntomas, dejar de tomar medicamentos permite que el daño silencioso a los órganos continúe.'),
      ],
    },
    {
      id: 'htn-m06',
      title: 'Home Blood Pressure Monitoring',
      titleEs: 'Monitoreo de Presión Arterial en Casa',
      topics: ['proper technique', 'cuff selection', 'recording readings', 'when to call doctor'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('htn-m06-q1',
          'What should you do before taking a blood pressure reading at home?',
          '¿Qué debes hacer antes de tomar una lectura de presión arterial en casa?',
          ['Exercise vigorously', 'Sit quietly for 5 minutes with feet flat on the floor', 'Drink a cup of coffee', 'Stand up straight'],
          ['Ejercitarte vigorosamente', 'Sentarte tranquilamente por 5 minutos con los pies planos en el suelo', 'Tomar una taza de café', 'Pararte derecho'],
          1,
          'Resting quietly for 5 minutes before measuring ensures an accurate reading without temporary spikes.',
          'Descansar tranquilamente durante 5 minutos antes de medir asegura una lectura precisa sin picos temporales.'),
      ],
    },
    {
      id: 'htn-m07',
      title: 'Stress Management and Sleep',
      titleEs: 'Manejo del Estrés y Sueño',
      topics: ['stress response', 'relaxation techniques', 'sleep hygiene', 'mind-body connection'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('htn-m07-q1',
          'How does chronic stress affect blood pressure?',
          '¿Cómo afecta el estrés crónico a la presión arterial?',
          ['It has no effect', 'It can keep blood pressure elevated over time', 'It lowers blood pressure', 'It only affects blood sugar'],
          ['No tiene efecto', 'Puede mantener la presión arterial elevada con el tiempo', 'Baja la presión arterial', 'Solo afecta el azúcar en sangre'],
          1,
          'Chronic stress triggers ongoing release of stress hormones, which can keep blood pressure elevated.',
          'El estrés crónico desencadena la liberación continua de hormonas del estrés, lo que puede mantener elevada la presión arterial.'),
      ],
    },
    {
      id: 'htn-m08',
      title: 'Long-Term Heart Health',
      titleEs: 'Salud Cardíaca a Largo Plazo',
      topics: ['stroke prevention', 'heart attack risk', 'kidney protection', 'regular checkups'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('htn-m08-q1',
          'Which organs can be damaged by uncontrolled high blood pressure?',
          '¿Qué órganos pueden ser dañados por la presión arterial alta no controlada?',
          ['Only the heart', 'Heart, brain, kidneys, and eyes', 'Only the kidneys', 'No organs are affected if you feel fine'],
          ['Solo el corazón', 'Corazón, cerebro, riñones y ojos', 'Solo los riñones', 'Ningún órgano se afecta si te sientes bien'],
          1,
          'Uncontrolled hypertension can damage the heart, brain (stroke), kidneys, and eyes over time.',
          'La hipertensión no controlada puede dañar el corazón, el cerebro (derrame), los riñones y los ojos con el tiempo.'),
      ],
    },
  ],
};

// ========================== 3. Heart Disease ==============================

export const HEART_DISEASE_PATHWAY: LearningPathway = {
  id: 'pathway-heart-disease',
  title: 'Living with Heart Disease',
  titleEs: 'Viviendo con Enfermedad Cardíaca',
  description:
    'A 10-module course on understanding heart disease, recognizing symptoms, treatment options, cardiac rehabilitation, and heart-healthy living.',
  descriptionEs:
    'Un curso de 10 módulos sobre la enfermedad cardíaca, reconocimiento de síntomas, opciones de tratamiento, rehabilitación cardíaca y vida saludable para el corazón.',
  prerequisiteKnowledge: [
    'Basic understanding of how the heart works',
    'Awareness that heart disease is a common condition',
  ],
  progressionCriteria: {
    minimumScore: 70,
    requireAllQuestionsAttempted: true,
    minimumTimeSpentMinutes: 5,
    maxRetakes: -1,
  },
  modules: [
    {
      id: 'heart-m01',
      title: 'How the Heart Works',
      titleEs: 'Cómo Funciona el Corazón',
      topics: ['heart anatomy', 'blood flow', 'cardiac cycle', 'coronary arteries'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('heart-m01-q1',
          'What is the main function of the coronary arteries?',
          '¿Cuál es la función principal de las arterias coronarias?',
          ['Carry blood to the brain', 'Supply blood and oxygen to the heart muscle itself', 'Filter blood', 'Carry blood to the lungs'],
          ['Llevan sangre al cerebro', 'Suministran sangre y oxígeno al propio músculo cardíaco', 'Filtran la sangre', 'Llevan sangre a los pulmones'],
          1,
          'The coronary arteries supply oxygen-rich blood to the heart muscle so it can keep pumping.',
          'Las arterias coronarias suministran sangre rica en oxígeno al músculo cardíaco para que pueda seguir bombeando.'),
      ],
    },
    {
      id: 'heart-m02',
      title: 'Types of Heart Disease',
      titleEs: 'Tipos de Enfermedad Cardíaca',
      topics: ['coronary artery disease', 'heart failure', 'arrhythmias', 'valvular disease'],
      estimatedMinutes: 20,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('heart-m02-q1',
          'What is coronary artery disease?',
          '¿Qué es la enfermedad de las arterias coronarias?',
          ['A viral infection of the heart', 'Narrowing or blockage of the coronary arteries by plaque buildup', 'A birth defect', 'An allergy affecting the heart'],
          ['Una infección viral del corazón', 'Estrechamiento o bloqueo de las arterias coronarias por acumulación de placa', 'Un defecto de nacimiento', 'Una alergia que afecta el corazón'],
          1,
          'Coronary artery disease occurs when plaque (fat, cholesterol, and other substances) builds up in the coronary arteries, reducing blood flow.',
          'La enfermedad de las arterias coronarias ocurre cuando la placa (grasa, colesterol y otras sustancias) se acumula en las arterias coronarias, reduciendo el flujo sanguíneo.'),
      ],
    },
    {
      id: 'heart-m03',
      title: 'Recognizing Warning Signs',
      titleEs: 'Reconociendo Señales de Alerta',
      topics: ['chest pain', 'shortness of breath', 'heart attack symptoms', 'when to call 911'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('heart-m03-q1',
          'What should you do if you suspect someone is having a heart attack?',
          '¿Qué debes hacer si sospechas que alguien está teniendo un ataque al corazón?',
          ['Wait and see if it passes', 'Call 911 (or local emergency) immediately', 'Give them water', 'Tell them to exercise'],
          ['Esperar a ver si pasa', 'Llamar al 911 (o emergencias locales) inmediatamente', 'Darles agua', 'Decirles que hagan ejercicio'],
          1,
          'A heart attack is a medical emergency. Call 911 immediately — every minute counts.',
          'Un ataque al corazón es una emergencia médica. Llama al 911 inmediatamente — cada minuto cuenta.'),
      ],
    },
    {
      id: 'heart-m04',
      title: 'Risk Factors You Can Control',
      titleEs: 'Factores de Riesgo Que Puedes Controlar',
      topics: ['smoking', 'cholesterol', 'blood pressure', 'diabetes', 'obesity'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('heart-m04-q1',
          'Which of these is a modifiable risk factor for heart disease?',
          '¿Cuál de estos es un factor de riesgo modificable para la enfermedad cardíaca?',
          ['Age', 'Family history', 'High cholesterol', 'Gender'],
          ['Edad', 'Historial familiar', 'Colesterol alto', 'Género'],
          2,
          'High cholesterol can be managed through diet, exercise, and medication, making it a modifiable risk factor.',
          'El colesterol alto puede manejarse con dieta, ejercicio y medicamentos, lo que lo convierte en un factor de riesgo modificable.'),
      ],
    },
    {
      id: 'heart-m05',
      title: 'Heart-Healthy Nutrition',
      titleEs: 'Nutrición Saludable para el Corazón',
      topics: ['Mediterranean diet', 'healthy fats', 'fiber', 'limiting processed foods'],
      estimatedMinutes: 20,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('heart-m05-q1',
          'Which type of fat is considered heart-healthy?',
          '¿Qué tipo de grasa se considera saludable para el corazón?',
          ['Trans fats', 'Saturated fats', 'Unsaturated fats (like olive oil and nuts)', 'All fats are equally harmful'],
          ['Grasas trans', 'Grasas saturadas', 'Grasas insaturadas (como aceite de oliva y nueces)', 'Todas las grasas son igualmente dañinas'],
          2,
          'Unsaturated fats, found in olive oil, nuts, and fish, can help reduce bad cholesterol and protect heart health.',
          'Las grasas insaturadas, que se encuentran en el aceite de oliva, nueces y pescado, pueden ayudar a reducir el colesterol malo y proteger la salud cardíaca.'),
      ],
    },
    {
      id: 'heart-m06',
      title: 'Heart Medications',
      titleEs: 'Medicamentos Cardíacos',
      topics: ['statins', 'blood thinners', 'beta blockers', 'ACE inhibitors', 'adherence'],
      estimatedMinutes: 20,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('heart-m06-q1',
          'What do statin medications do?',
          '¿Qué hacen los medicamentos de estatinas?',
          ['Lower blood sugar', 'Help lower cholesterol levels', 'Reduce pain', 'Fight infections'],
          ['Bajan el azúcar en sangre', 'Ayudan a bajar los niveles de colesterol', 'Reducen el dolor', 'Combaten infecciones'],
          1,
          'Statins reduce the amount of cholesterol produced by the liver, lowering the risk of plaque buildup in arteries.',
          'Las estatinas reducen la cantidad de colesterol producida por el hígado, disminuyendo el riesgo de acumulación de placa en las arterias.'),
      ],
    },
    {
      id: 'heart-m07',
      title: 'Cardiac Procedures and Surgery',
      titleEs: 'Procedimientos y Cirugía Cardíaca',
      topics: ['angioplasty', 'stents', 'bypass surgery', 'pacemakers'],
      estimatedMinutes: 20,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('heart-m07-q1',
          'What is the purpose of a stent placed in a coronary artery?',
          '¿Cuál es el propósito de un stent colocado en una arteria coronaria?',
          ['To measure heart rate', 'To keep a narrowed artery open and improve blood flow', 'To replace the artery', 'To deliver medication'],
          ['Para medir la frecuencia cardíaca', 'Para mantener abierta una arteria estrechada y mejorar el flujo sanguíneo', 'Para reemplazar la arteria', 'Para administrar medicamentos'],
          1,
          'A stent is a small mesh tube placed inside a narrowed artery to hold it open and restore blood flow.',
          'Un stent es un pequeño tubo de malla colocado dentro de una arteria estrechada para mantenerla abierta y restaurar el flujo sanguíneo.'),
      ],
    },
    {
      id: 'heart-m08',
      title: 'Cardiac Rehabilitation',
      titleEs: 'Rehabilitación Cardíaca',
      topics: ['exercise training', 'education', 'counseling', 'supervised recovery'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('heart-m08-q1',
          'What is cardiac rehabilitation?',
          '¿Qué es la rehabilitación cardíaca?',
          ['A type of heart surgery', 'A supervised program of exercise, education, and counseling after a heart event', 'A medication regimen', 'A diagnostic test'],
          ['Un tipo de cirugía cardíaca', 'Un programa supervisado de ejercicio, educación y consejería después de un evento cardíaco', 'Un régimen de medicamentos', 'Una prueba diagnóstica'],
          1,
          'Cardiac rehab is a medically supervised program that helps people recover and improve cardiovascular health after a heart event.',
          'La rehabilitación cardíaca es un programa supervisado médicamente que ayuda a las personas a recuperarse y mejorar la salud cardiovascular después de un evento cardíaco.'),
      ],
    },
    {
      id: 'heart-m09',
      title: 'Emotional Health and Heart Disease',
      titleEs: 'Salud Emocional y Enfermedad Cardíaca',
      topics: ['depression', 'anxiety', 'social support', 'coping strategies'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('heart-m09-q1',
          'Is depression common in people with heart disease?',
          '¿Es la depresión común en personas con enfermedad cardíaca?',
          ['No, they are unrelated', 'Yes, depression is significantly more common in heart disease patients', 'Only in elderly patients', 'Only after surgery'],
          ['No, no están relacionadas', 'Sí, la depresión es significativamente más común en pacientes con enfermedad cardíaca', 'Solo en pacientes ancianos', 'Solo después de cirugía'],
          1,
          'Depression is 2-3 times more common in people with heart disease and can worsen outcomes if untreated.',
          'La depresión es 2-3 veces más común en personas con enfermedad cardíaca y puede empeorar los resultados si no se trata.'),
      ],
    },
    {
      id: 'heart-m10',
      title: 'Planning for a Heart-Healthy Future',
      titleEs: 'Planificando un Futuro Saludable para el Corazón',
      topics: ['long-term goals', 'follow-up care', 'emergency planning', 'lifestyle maintenance'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('heart-m10-q1',
          'How often should most heart disease patients see their cardiologist?',
          '¿Con qué frecuencia deben la mayoría de los pacientes con enfermedad cardíaca ver a su cardiólogo?',
          ['Only when feeling sick', 'At least every 3-12 months as recommended by their doctor', 'Once every 5 years', 'Never after initial diagnosis'],
          ['Solo cuando se sienten enfermos', 'Al menos cada 3-12 meses según lo recomendado por su médico', 'Una vez cada 5 años', 'Nunca después del diagnóstico inicial'],
          1,
          'Regular follow-up with a cardiologist helps monitor your condition, adjust treatments, and catch problems early.',
          'El seguimiento regular con un cardiólogo ayuda a monitorear su condición, ajustar tratamientos y detectar problemas temprano.'),
      ],
    },
  ],
};

// ========================== 4. Thyroid ====================================

export const THYROID_PATHWAY: LearningPathway = {
  id: 'pathway-thyroid',
  title: 'Understanding Your Thyroid',
  titleEs: 'Entendiendo Tu Tiroides',
  description:
    'A 6-module course covering thyroid function, common disorders, diagnosis, treatment options, and daily management.',
  descriptionEs:
    'Un curso de 6 módulos que cubre la función tiroidea, trastornos comunes, diagnóstico, opciones de tratamiento y manejo diario.',
  prerequisiteKnowledge: [
    'Basic understanding of hormones as chemical messengers',
    'Awareness that the thyroid is a gland in the neck',
  ],
  progressionCriteria: {
    minimumScore: 70,
    requireAllQuestionsAttempted: true,
    minimumTimeSpentMinutes: 5,
    maxRetakes: -1,
  },
  modules: [
    {
      id: 'thyroid-m01',
      title: 'What Does the Thyroid Do?',
      titleEs: '¿Qué Hace la Tiroides?',
      topics: ['thyroid gland', 'thyroid hormones', 'metabolism', 'TSH'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('thyroid-m01-q1',
          'What is the primary role of the thyroid gland?',
          '¿Cuál es el papel principal de la glándula tiroides?',
          ['Filtering blood', 'Producing hormones that regulate metabolism', 'Pumping blood', 'Digesting food'],
          ['Filtrar la sangre', 'Producir hormonas que regulan el metabolismo', 'Bombear sangre', 'Digerir alimentos'],
          1,
          'The thyroid produces hormones (T3 and T4) that control how your body uses energy — your metabolism.',
          'La tiroides produce hormonas (T3 y T4) que controlan cómo el cuerpo usa la energía — tu metabolismo.'),
      ],
    },
    {
      id: 'thyroid-m02',
      title: 'Hypothyroidism (Underactive Thyroid)',
      titleEs: 'Hipotiroidismo (Tiroides Hipoactiva)',
      topics: ['causes', 'symptoms', 'Hashimoto disease', 'fatigue and weight gain'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('thyroid-m02-q1',
          'Which symptom is commonly associated with hypothyroidism?',
          '¿Qué síntoma se asocia comúnmente con el hipotiroidismo?',
          ['Rapid weight loss', 'Fatigue and unexplained weight gain', 'Excessive sweating', 'Racing heartbeat'],
          ['Pérdida de peso rápida', 'Fatiga y aumento de peso inexplicable', 'Sudoración excesiva', 'Latido cardíaco acelerado'],
          1,
          'An underactive thyroid slows metabolism, commonly causing fatigue, weight gain, cold sensitivity, and dry skin.',
          'Una tiroides hipoactiva ralentiza el metabolismo, causando comúnmente fatiga, aumento de peso, sensibilidad al frío y piel seca.'),
      ],
    },
    {
      id: 'thyroid-m03',
      title: 'Hyperthyroidism (Overactive Thyroid)',
      titleEs: 'Hipertiroidismo (Tiroides Hiperactiva)',
      topics: ['Graves disease', 'symptoms', 'thyroid storm', 'diagnosis'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('thyroid-m03-q1',
          'Which symptom is commonly associated with hyperthyroidism?',
          '¿Qué síntoma se asocia comúnmente con el hipertiroidismo?',
          ['Weight gain', 'Feeling cold all the time', 'Rapid or irregular heartbeat and weight loss', 'Joint pain'],
          ['Aumento de peso', 'Sentir frío todo el tiempo', 'Latido cardíaco rápido o irregular y pérdida de peso', 'Dolor en las articulaciones'],
          2,
          'An overactive thyroid speeds up metabolism, often causing rapid heartbeat, weight loss, anxiety, and heat intolerance.',
          'Una tiroides hiperactiva acelera el metabolismo, causando frecuentemente latido cardíaco rápido, pérdida de peso, ansiedad e intolerancia al calor.'),
      ],
    },
    {
      id: 'thyroid-m04',
      title: 'Thyroid Testing and Diagnosis',
      titleEs: 'Pruebas y Diagnóstico de la Tiroides',
      topics: ['TSH test', 'T3 and T4', 'thyroid antibodies', 'ultrasound'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('thyroid-m04-q1',
          'Which blood test is most commonly used to check thyroid function?',
          '¿Qué análisis de sangre se usa más comúnmente para verificar la función tiroidea?',
          ['Complete blood count', 'TSH (thyroid-stimulating hormone)', 'Blood sugar test', 'Cholesterol panel'],
          ['Conteo sanguíneo completo', 'TSH (hormona estimulante de la tiroides)', 'Prueba de azúcar en sangre', 'Panel de colesterol'],
          1,
          'The TSH test is the primary screening tool — high TSH suggests hypothyroidism and low TSH suggests hyperthyroidism.',
          'La prueba de TSH es la herramienta de detección principal — TSH alta sugiere hipotiroidismo y TSH baja sugiere hipertiroidismo.'),
      ],
    },
    {
      id: 'thyroid-m05',
      title: 'Thyroid Treatment Options',
      titleEs: 'Opciones de Tratamiento para la Tiroides',
      topics: ['levothyroxine', 'antithyroid drugs', 'radioactive iodine', 'surgery'],
      estimatedMinutes: 20,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('thyroid-m05-q1',
          'What is levothyroxine used for?',
          '¿Para qué se usa la levotiroxina?',
          ['Treating an overactive thyroid', 'Replacing thyroid hormone in hypothyroidism', 'Treating thyroid cancer only', 'Reducing thyroid size'],
          ['Tratar una tiroides hiperactiva', 'Reemplazar la hormona tiroidea en el hipotiroidismo', 'Tratar solo el cáncer de tiroides', 'Reducir el tamaño de la tiroides'],
          1,
          'Levothyroxine is a synthetic thyroid hormone used to replace the hormone that an underactive thyroid cannot produce enough of.',
          'La levotiroxina es una hormona tiroidea sintética utilizada para reemplazar la hormona que una tiroides hipoactiva no puede producir en cantidad suficiente.'),
      ],
    },
    {
      id: 'thyroid-m06',
      title: 'Living with a Thyroid Condition',
      titleEs: 'Vivir con una Condición de Tiroides',
      topics: ['medication timing', 'follow-up labs', 'diet considerations', 'pregnancy and thyroid'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('thyroid-m06-q1',
          'When is the best time to take levothyroxine?',
          '¿Cuándo es el mejor momento para tomar levotiroxina?',
          ['With dinner', 'On an empty stomach, 30-60 minutes before breakfast', 'Right before bed with a snack', 'Any time with food'],
          ['Con la cena', 'Con el estómago vacío, 30-60 minutos antes del desayuno', 'Justo antes de dormir con un bocadillo', 'En cualquier momento con comida'],
          1,
          'Levothyroxine is best absorbed on an empty stomach, so taking it 30-60 minutes before breakfast is recommended.',
          'La levotiroxina se absorbe mejor con el estómago vacío, por lo que se recomienda tomarla 30-60 minutos antes del desayuno.'),
      ],
    },
  ],
};

// ========================== 5. Asthma & COPD ==============================

export const RESPIRATORY_PATHWAY: LearningPathway = {
  id: 'pathway-respiratory',
  title: 'Breathing Better: Asthma & COPD',
  titleEs: 'Respirar Mejor: Asma y EPOC',
  description:
    'An 8-module course on understanding asthma and COPD, managing symptoms, using inhalers correctly, and avoiding triggers.',
  descriptionEs:
    'Un curso de 8 módulos sobre el asma y EPOC, manejo de síntomas, uso correcto de inhaladores y cómo evitar desencadenantes.',
  prerequisiteKnowledge: [
    'Basic understanding of how lungs work',
    'Awareness that breathing difficulties have medical treatments',
  ],
  progressionCriteria: {
    minimumScore: 70,
    requireAllQuestionsAttempted: true,
    minimumTimeSpentMinutes: 5,
    maxRetakes: -1,
  },
  modules: [
    {
      id: 'resp-m01',
      title: 'How Your Lungs Work',
      titleEs: 'Cómo Funcionan Tus Pulmones',
      topics: ['lung anatomy', 'airways', 'gas exchange', 'breathing mechanics'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('resp-m01-q1',
          'What is the main function of the lungs?',
          '¿Cuál es la función principal de los pulmones?',
          ['Pumping blood', 'Exchanging oxygen and carbon dioxide', 'Filtering toxins', 'Producing hormones'],
          ['Bombear sangre', 'Intercambiar oxígeno y dióxido de carbono', 'Filtrar toxinas', 'Producir hormonas'],
          1,
          'The lungs bring in oxygen from the air and remove carbon dioxide, a waste product, from the blood.',
          'Los pulmones traen oxígeno del aire y eliminan dióxido de carbono, un producto de desecho, de la sangre.'),
      ],
    },
    {
      id: 'resp-m02',
      title: 'Understanding Asthma',
      titleEs: 'Entendiendo el Asma',
      topics: ['definition', 'inflammation', 'bronchoconstriction', 'triggers'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('resp-m02-q1',
          'What happens in the airways during an asthma attack?',
          '¿Qué sucede en las vías respiratorias durante un ataque de asma?',
          ['Airways widen', 'Airways become inflamed and narrow, making breathing difficult', 'Lungs fill with fluid', 'The diaphragm stops working'],
          ['Las vías respiratorias se ensanchan', 'Las vías respiratorias se inflaman y estrechan, dificultando la respiración', 'Los pulmones se llenan de líquido', 'El diafragma deja de funcionar'],
          1,
          'During an asthma attack, airway walls swell, muscles around them tighten, and extra mucus is produced, narrowing the air passages.',
          'Durante un ataque de asma, las paredes de las vías respiratorias se hinchan, los músculos alrededor se tensan y se produce mucosidad extra, estrechando los conductos de aire.'),
      ],
    },
    {
      id: 'resp-m03',
      title: 'Understanding COPD',
      titleEs: 'Entendiendo la EPOC',
      topics: ['chronic bronchitis', 'emphysema', 'causes', 'progression'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('resp-m03-q1',
          'What is the most common cause of COPD?',
          '¿Cuál es la causa más común de la EPOC?',
          ['Allergies', 'Long-term cigarette smoking', 'Lack of exercise', 'Eating unhealthy food'],
          ['Alergias', 'Fumar cigarrillos a largo plazo', 'Falta de ejercicio', 'Comer alimentos no saludables'],
          1,
          'Long-term exposure to cigarette smoke is the leading cause of COPD, accounting for about 85-90% of cases.',
          'La exposición a largo plazo al humo de cigarrillo es la causa principal de la EPOC, representando aproximadamente el 85-90% de los casos.'),
      ],
    },
    {
      id: 'resp-m04',
      title: 'Using Inhalers Correctly',
      titleEs: 'Usando los Inhaladores Correctamente',
      topics: ['metered dose inhalers', 'dry powder inhalers', 'spacers', 'technique'],
      estimatedMinutes: 20,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('resp-m04-q1',
          'Why is using a spacer with a metered-dose inhaler recommended?',
          '¿Por qué se recomienda usar un espaciador con un inhalador de dosis medida?',
          ['It makes the inhaler louder', 'It helps more medication reach the lungs instead of staying in the mouth', 'It is only for children', 'It makes the medication stronger'],
          ['Hace que el inhalador sea más ruidoso', 'Ayuda a que más medicamento llegue a los pulmones en lugar de quedarse en la boca', 'Es solo para niños', 'Hace que el medicamento sea más fuerte'],
          1,
          'A spacer slows down the medication spray, allowing you to inhale it more effectively into the lungs.',
          'Un espaciador ralentiza el spray del medicamento, permitiéndote inhalarlo más efectivamente hacia los pulmones.'),
      ],
    },
    {
      id: 'resp-m05',
      title: 'Identifying and Avoiding Triggers',
      titleEs: 'Identificando y Evitando Desencadenantes',
      topics: ['allergens', 'irritants', 'weather', 'exercise-induced symptoms', 'action plan'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('resp-m05-q1',
          'Which of these is a common asthma trigger?',
          '¿Cuál de estos es un desencadenante común del asma?',
          ['Drinking water', 'Dust mites, pollen, and pet dander', 'Eating vegetables', 'Sleeping 8 hours'],
          ['Beber agua', 'Ácaros del polvo, polen y caspa de mascotas', 'Comer vegetales', 'Dormir 8 horas'],
          1,
          'Common triggers include allergens (dust mites, pollen, pet dander), smoke, cold air, and respiratory infections.',
          'Los desencadenantes comunes incluyen alérgenos (ácaros del polvo, polen, caspa de mascotas), humo, aire frío e infecciones respiratorias.'),
      ],
    },
    {
      id: 'resp-m06',
      title: 'Medications for Asthma and COPD',
      titleEs: 'Medicamentos para el Asma y la EPOC',
      topics: ['controllers', 'rescue inhalers', 'bronchodilators', 'corticosteroids'],
      estimatedMinutes: 20,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('resp-m06-q1',
          'What is the difference between a controller and a rescue inhaler?',
          '¿Cuál es la diferencia entre un inhalador de control y uno de rescate?',
          ['There is no difference', 'Controller is used daily to prevent symptoms; rescue is used during an attack for quick relief', 'Rescue is used daily; controller is for emergencies', 'Controller is only for COPD'],
          ['No hay diferencia', 'El de control se usa diariamente para prevenir síntomas; el de rescate se usa durante un ataque para alivio rápido', 'El de rescate se usa diariamente; el de control es para emergencias', 'El de control es solo para EPOC'],
          1,
          'Controller inhalers reduce inflammation over time and are used daily; rescue inhalers quickly open airways during symptoms.',
          'Los inhaladores de control reducen la inflamación con el tiempo y se usan diariamente; los de rescate abren rápidamente las vías respiratorias durante los síntomas.'),
      ],
    },
    {
      id: 'resp-m07',
      title: 'Breathing Exercises and Pulmonary Rehab',
      titleEs: 'Ejercicios de Respiración y Rehabilitación Pulmonar',
      topics: ['pursed-lip breathing', 'diaphragmatic breathing', 'pulmonary rehabilitation', 'exercise tolerance'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('resp-m07-q1',
          'What is pursed-lip breathing?',
          '¿Qué es la respiración con labios fruncidos?',
          ['Breathing through the nose only', 'Inhaling through the nose and exhaling slowly through pursed lips', 'Holding your breath for 30 seconds', 'Breathing as fast as possible'],
          ['Respirar solo por la nariz', 'Inhalar por la nariz y exhalar lentamente por los labios fruncidos', 'Mantener la respiración por 30 segundos', 'Respirar lo más rápido posible'],
          1,
          'Pursed-lip breathing slows your breathing rate and helps keep airways open longer, improving oxygen exchange.',
          'La respiración con labios fruncidos reduce la frecuencia respiratoria y ayuda a mantener las vías respiratorias abiertas por más tiempo, mejorando el intercambio de oxígeno.'),
      ],
    },
    {
      id: 'resp-m08',
      title: 'Emergency Planning and Flare-Ups',
      titleEs: 'Planificación de Emergencia y Crisis',
      topics: ['asthma action plan', 'COPD exacerbation', 'when to seek emergency care', 'oxygen therapy'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('resp-m08-q1',
          'When should you seek emergency medical care for breathing problems?',
          '¿Cuándo debes buscar atención médica de emergencia por problemas respiratorios?',
          ['Only if symptoms last a week', 'If your rescue inhaler is not helping, lips turn blue, or you cannot speak in full sentences', 'Only if you have a fever', 'Never — always wait for a scheduled appointment'],
          ['Solo si los síntomas duran una semana', 'Si tu inhalador de rescate no ayuda, los labios se ponen azules o no puedes hablar en oraciones completas', 'Solo si tienes fiebre', 'Nunca — siempre espera una cita programada'],
          1,
          'Seek emergency care if your rescue inhaler does not relieve symptoms, you have bluish lips, severe shortness of breath, or cannot speak in full sentences.',
          'Busca atención de emergencia si tu inhalador de rescate no alivia los síntomas, tienes labios azulados, dificultad respiratoria grave o no puedes hablar en oraciones completas.'),
      ],
    },
  ],
};

// ========================== 6. Depression & Anxiety =======================

export const MENTAL_HEALTH_PATHWAY: LearningPathway = {
  id: 'pathway-mental-health',
  title: 'Understanding Depression & Anxiety',
  titleEs: 'Entendiendo la Depresión y la Ansiedad',
  description:
    'An 8-module course covering the basics of depression and anxiety, treatment approaches, coping strategies, and building resilience.',
  descriptionEs:
    'Un curso de 8 módulos que cubre los conceptos básicos de la depresión y la ansiedad, enfoques de tratamiento, estrategias de afrontamiento y resiliencia.',
  prerequisiteKnowledge: [
    'Willingness to learn about mental health',
    'Understanding that mental health conditions are medical conditions',
  ],
  progressionCriteria: {
    minimumScore: 70,
    requireAllQuestionsAttempted: true,
    minimumTimeSpentMinutes: 5,
    maxRetakes: -1,
  },
  modules: [
    {
      id: 'mh-m01',
      title: 'What Is Depression?',
      titleEs: '¿Qué Es la Depresión?',
      topics: ['definition', 'types', 'prevalence', 'brain chemistry'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('mh-m01-q1',
          'Depression is best described as:',
          'La depresión se describe mejor como:',
          ['Just feeling sad sometimes', 'A persistent mood disorder that affects daily life and has biological, psychological, and social components', 'A personal weakness', 'Something only older people experience'],
          ['Solo sentirse triste a veces', 'Un trastorno persistente del estado de ánimo que afecta la vida diaria y tiene componentes biológicos, psicológicos y sociales', 'Una debilidad personal', 'Algo que solo experimentan las personas mayores'],
          1,
          'Depression is a medical condition involving persistent changes in mood, thinking, and behavior that significantly impact daily functioning.',
          'La depresión es una condición médica que implica cambios persistentes en el estado de ánimo, pensamiento y comportamiento que impactan significativamente el funcionamiento diario.'),
      ],
    },
    {
      id: 'mh-m02',
      title: 'What Is Anxiety?',
      titleEs: '¿Qué Es la Ansiedad?',
      topics: ['generalized anxiety', 'panic disorder', 'social anxiety', 'fight-or-flight'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('mh-m02-q1',
          'What is the difference between normal worry and an anxiety disorder?',
          '¿Cuál es la diferencia entre la preocupación normal y un trastorno de ansiedad?',
          ['There is no difference', 'Anxiety disorders involve persistent, excessive worry that interferes with daily activities', 'Anxiety disorders only happen at night', 'Normal worry is worse than an anxiety disorder'],
          ['No hay diferencia', 'Los trastornos de ansiedad implican preocupación persistente y excesiva que interfiere con las actividades diarias', 'Los trastornos de ansiedad solo ocurren de noche', 'La preocupación normal es peor que un trastorno de ansiedad'],
          1,
          'While everyone worries sometimes, anxiety disorders involve disproportionate, persistent worry that significantly impairs daily functioning.',
          'Mientras que todos se preocupan a veces, los trastornos de ansiedad implican preocupación desproporcionada y persistente que deteriora significativamente el funcionamiento diario.'),
      ],
    },
    {
      id: 'mh-m03',
      title: 'Recognizing Symptoms',
      titleEs: 'Reconociendo los Síntomas',
      topics: ['emotional symptoms', 'physical symptoms', 'behavioral changes', 'screening tools'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('mh-m03-q1',
          'Which of these can be a physical symptom of depression or anxiety?',
          '¿Cuál de estos puede ser un síntoma físico de depresión o ansiedad?',
          ['Improved appetite', 'Fatigue, headaches, or unexplained body aches', 'Increased energy', 'Better sleep quality'],
          ['Mejor apetito', 'Fatiga, dolores de cabeza o dolores corporales inexplicables', 'Mayor energía', 'Mejor calidad de sueño'],
          1,
          'Depression and anxiety often cause physical symptoms like fatigue, headaches, muscle tension, digestive issues, and sleep disturbances.',
          'La depresión y la ansiedad a menudo causan síntomas físicos como fatiga, dolores de cabeza, tensión muscular, problemas digestivos y alteraciones del sueño.'),
      ],
    },
    {
      id: 'mh-m04',
      title: 'Talk Therapy and Counseling',
      titleEs: 'Terapia de Conversación y Consejería',
      topics: ['CBT', 'talk therapy', 'finding a therapist', 'what to expect'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('mh-m04-q1',
          'What is cognitive behavioral therapy (CBT)?',
          '¿Qué es la terapia cognitivo-conductual (TCC)?',
          ['A type of medication', 'A structured therapy that helps identify and change unhelpful thought patterns and behaviors', 'A surgical procedure', 'A type of exercise'],
          ['Un tipo de medicamento', 'Una terapia estructurada que ayuda a identificar y cambiar patrones de pensamiento y comportamiento no útiles', 'Un procedimiento quirúrgico', 'Un tipo de ejercicio'],
          1,
          'CBT is an evidence-based therapy that teaches skills to recognize negative thinking patterns and develop healthier responses.',
          'La TCC es una terapia basada en evidencia que enseña habilidades para reconocer patrones de pensamiento negativo y desarrollar respuestas más saludables.'),
      ],
    },
    {
      id: 'mh-m05',
      title: 'Medications for Mental Health',
      titleEs: 'Medicamentos para la Salud Mental',
      topics: ['antidepressants', 'anti-anxiety medications', 'how they work', 'side effects'],
      estimatedMinutes: 20,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('mh-m05-q1',
          'How long do most antidepressants take to reach full effect?',
          '¿Cuánto tiempo tardan la mayoría de los antidepresivos en alcanzar su efecto completo?',
          ['Immediately', '4-6 weeks or more', '24 hours', '6 months'],
          ['Inmediatamente', '4-6 semanas o más', '24 horas', '6 meses'],
          1,
          'Most antidepressants take 4-6 weeks to reach full therapeutic effect, which is why it is important not to stop them too early.',
          'La mayoría de los antidepresivos tardan de 4 a 6 semanas en alcanzar su efecto terapéutico completo, por lo que es importante no dejar de tomarlos demasiado pronto.'),
      ],
    },
    {
      id: 'mh-m06',
      title: 'Coping Strategies and Self-Care',
      titleEs: 'Estrategias de Afrontamiento y Autocuidado',
      topics: ['mindfulness', 'exercise', 'sleep hygiene', 'journaling', 'grounding techniques'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('mh-m06-q1',
          'Which self-care practice has strong evidence for improving mood?',
          '¿Qué práctica de autocuidado tiene fuerte evidencia para mejorar el estado de ánimo?',
          ['Avoiding all social contact', 'Regular physical exercise', 'Sleeping as much as possible', 'Working longer hours'],
          ['Evitar todo contacto social', 'Ejercicio físico regular', 'Dormir lo máximo posible', 'Trabajar más horas'],
          1,
          'Regular physical exercise releases endorphins, reduces stress hormones, and is shown to significantly improve depression and anxiety symptoms.',
          'El ejercicio físico regular libera endorfinas, reduce las hormonas del estrés y se ha demostrado que mejora significativamente los síntomas de depresión y ansiedad.'),
      ],
    },
    {
      id: 'mh-m07',
      title: 'Building a Support System',
      titleEs: 'Construyendo un Sistema de Apoyo',
      topics: ['social support', 'support groups', 'communication', 'helping a loved one'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('mh-m07-q1',
          'Why is social support important for mental health recovery?',
          '¿Por qué es importante el apoyo social para la recuperación de la salud mental?',
          ['It is not important', 'Social connections reduce isolation, provide encouragement, and improve treatment outcomes', 'Only professional support matters', 'Social media is sufficient'],
          ['No es importante', 'Las conexiones sociales reducen el aislamiento, proporcionan aliento y mejoran los resultados del tratamiento', 'Solo importa el apoyo profesional', 'Las redes sociales son suficientes'],
          1,
          'Research consistently shows that strong social support reduces relapse risk and improves mental health outcomes.',
          'La investigación muestra consistentemente que el apoyo social fuerte reduce el riesgo de recaída y mejora los resultados de salud mental.'),
      ],
    },
    {
      id: 'mh-m08',
      title: 'Crisis Resources and Safety Planning',
      titleEs: 'Recursos de Crisis y Planificación de Seguridad',
      topics: ['crisis hotlines', 'safety planning', 'warning signs', 'when to seek immediate help'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('mh-m08-q1',
          'What is the 988 Suicide and Crisis Lifeline?',
          '¿Qué es la Línea de Prevención del Suicidio y Crisis 988?',
          ['A hospital', 'A free 24/7 phone and text line for people in emotional distress or suicidal crisis', 'A type of therapy', 'A medication hotline'],
          ['Un hospital', 'Una línea telefónica y de texto gratuita las 24 horas para personas en angustia emocional o crisis suicida', 'Un tipo de terapia', 'Una línea de medicamentos'],
          1,
          'The 988 Lifeline provides free, confidential support 24/7 by phone or text for anyone in emotional distress or suicidal crisis.',
          'La Línea 988 proporciona apoyo gratuito y confidencial las 24 horas del día por teléfono o texto para cualquier persona en angustia emocional o crisis suicida.'),
      ],
    },
  ],
};

// ========================== 7. Healthy Aging ==============================

export const HEALTHY_AGING_PATHWAY: LearningPathway = {
  id: 'pathway-healthy-aging',
  title: 'Healthy Aging',
  titleEs: 'Envejecimiento Saludable',
  description:
    'An 8-module course on maintaining health, mobility, cognitive function, and quality of life as you age.',
  descriptionEs:
    'Un curso de 8 módulos sobre cómo mantener la salud, movilidad, función cognitiva y calidad de vida al envejecer.',
  prerequisiteKnowledge: [
    'General understanding of healthy lifestyle basics',
    'Interest in proactive health maintenance',
  ],
  progressionCriteria: {
    minimumScore: 70,
    requireAllQuestionsAttempted: true,
    minimumTimeSpentMinutes: 5,
    maxRetakes: -1,
  },
  modules: [
    {
      id: 'aging-m01',
      title: 'How the Body Changes with Age',
      titleEs: 'Cómo Cambia el Cuerpo con la Edad',
      topics: ['normal aging', 'body systems', 'cellular aging', 'what is not normal'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('aging-m01-q1',
          'Which of the following is a normal part of aging?',
          '¿Cuál de los siguientes es una parte normal del envejecimiento?',
          ['Severe memory loss', 'Gradual decrease in muscle mass', 'Inability to walk', 'Complete hearing loss'],
          ['Pérdida severa de memoria', 'Disminución gradual de la masa muscular', 'Incapacidad para caminar', 'Pérdida completa de la audición'],
          1,
          'Gradual loss of muscle mass (sarcopenia) is a normal part of aging, but strength training can significantly slow it.',
          'La pérdida gradual de masa muscular (sarcopenia) es una parte normal del envejecimiento, pero el entrenamiento de fuerza puede ralentizarla significativamente.'),
      ],
    },
    {
      id: 'aging-m02',
      title: 'Staying Physically Active',
      titleEs: 'Manteniéndose Físicamente Activo',
      topics: ['exercise types', 'balance training', 'fall prevention', 'flexibility'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('aging-m02-q1',
          'Why is balance training especially important for older adults?',
          '¿Por qué es especialmente importante el entrenamiento de equilibrio para los adultos mayores?',
          ['It builds bigger muscles', 'It helps prevent falls, which are a leading cause of injury in older adults', 'It improves eyesight', 'It is not important'],
          ['Construye músculos más grandes', 'Ayuda a prevenir caídas, que son una causa principal de lesiones en adultos mayores', 'Mejora la vista', 'No es importante'],
          1,
          'Falls are a leading cause of injury and disability in older adults; balance exercises can significantly reduce fall risk.',
          'Las caídas son una causa principal de lesiones y discapacidad en adultos mayores; los ejercicios de equilibrio pueden reducir significativamente el riesgo de caídas.'),
      ],
    },
    {
      id: 'aging-m03',
      title: 'Nutrition for Healthy Aging',
      titleEs: 'Nutrición para un Envejecimiento Saludable',
      topics: ['protein needs', 'calcium and vitamin D', 'hydration', 'nutrient absorption changes'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('aging-m03-q1',
          'Why do older adults need more protein?',
          '¿Por qué los adultos mayores necesitan más proteína?',
          ['To gain weight', 'To help maintain muscle mass and support immune function', 'Protein needs decrease with age', 'Only bodybuilders need extra protein'],
          ['Para ganar peso', 'Para ayudar a mantener la masa muscular y apoyar la función inmunológica', 'Las necesidades de proteína disminuyen con la edad', 'Solo los culturistas necesitan proteína extra'],
          1,
          'Aging bodies become less efficient at using protein, so higher intake is needed to maintain muscle and support healing.',
          'Los cuerpos que envejecen se vuelven menos eficientes en el uso de proteínas, por lo que se necesita una mayor ingesta para mantener los músculos y apoyar la curación.'),
      ],
    },
    {
      id: 'aging-m04',
      title: 'Brain Health and Cognitive Fitness',
      titleEs: 'Salud Cerebral y Fitness Cognitivo',
      topics: ['cognitive changes', 'brain exercises', 'social engagement', 'dementia warning signs'],
      estimatedMinutes: 20,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('aging-m04-q1',
          'Which activity has been shown to support brain health in older adults?',
          '¿Qué actividad ha demostrado apoyar la salud cerebral en adultos mayores?',
          ['Watching TV for long hours', 'Regular social interaction, physical exercise, and learning new skills', 'Sleeping most of the day', 'Avoiding all mental challenges'],
          ['Ver televisión por largas horas', 'Interacción social regular, ejercicio físico y aprender nuevas habilidades', 'Dormir la mayor parte del día', 'Evitar todos los desafíos mentales'],
          1,
          'Staying socially active, exercising regularly, and learning new things all help maintain cognitive function.',
          'Mantenerse socialmente activo, hacer ejercicio regularmente y aprender cosas nuevas ayudan a mantener la función cognitiva.'),
      ],
    },
    {
      id: 'aging-m05',
      title: 'Bone and Joint Health',
      titleEs: 'Salud Ósea y Articular',
      topics: ['osteoporosis', 'arthritis', 'calcium', 'weight-bearing exercise'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('aging-m05-q1',
          'What is osteoporosis?',
          '¿Qué es la osteoporosis?',
          ['A type of arthritis', 'A condition where bones become weak and brittle due to loss of density', 'A muscle disease', 'A skin condition'],
          ['Un tipo de artritis', 'Una condición donde los huesos se vuelven débiles y frágiles debido a la pérdida de densidad', 'Una enfermedad muscular', 'Una condición de la piel'],
          1,
          'Osteoporosis causes bones to lose density and become fragile, increasing fracture risk from minor falls or even coughing.',
          'La osteoporosis causa que los huesos pierdan densidad y se vuelvan frágiles, aumentando el riesgo de fracturas por caídas menores o incluso al toser.'),
      ],
    },
    {
      id: 'aging-m06',
      title: 'Managing Medications Safely',
      titleEs: 'Manejo Seguro de Medicamentos',
      topics: ['polypharmacy', 'drug interactions', 'medication review', 'pill organizers'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('aging-m06-q1',
          'What is "polypharmacy"?',
          '¿Qué es la "polifarmacia"?',
          ['Taking one medication', 'Taking multiple medications, which increases the risk of interactions and side effects', 'A type of pharmacy', 'A medication brand'],
          ['Tomar un medicamento', 'Tomar múltiples medicamentos, lo que aumenta el riesgo de interacciones y efectos secundarios', 'Un tipo de farmacia', 'Una marca de medicamentos'],
          1,
          'Polypharmacy refers to taking multiple medications simultaneously, which is common in older adults and requires careful coordination to avoid harmful interactions.',
          'La polifarmacia se refiere a tomar múltiples medicamentos simultáneamente, lo cual es común en adultos mayores y requiere coordinación cuidadosa para evitar interacciones dañinas.'),
      ],
    },
    {
      id: 'aging-m07',
      title: 'Preventive Screenings and Vaccinations',
      titleEs: 'Exámenes Preventivos y Vacunas',
      topics: ['cancer screenings', 'vaccinations', 'annual checkups', 'dental and vision care'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('aging-m07-q1',
          'Why are preventive screenings important for older adults?',
          '¿Por qué son importantes los exámenes preventivos para los adultos mayores?',
          ['They are not important after age 65', 'They can detect conditions early when they are most treatable', 'They are only for people who feel sick', 'Doctors just want to run tests'],
          ['No son importantes después de los 65 años', 'Pueden detectar condiciones temprano cuando son más tratables', 'Son solo para personas que se sienten enfermas', 'Los médicos solo quieren hacer pruebas'],
          1,
          'Early detection through screenings often leads to simpler, more effective treatments and better outcomes.',
          'La detección temprana a través de exámenes a menudo conduce a tratamientos más simples, efectivos y mejores resultados.'),
      ],
    },
    {
      id: 'aging-m08',
      title: 'Social Connection and Purpose',
      titleEs: 'Conexión Social y Propósito',
      topics: ['loneliness', 'volunteering', 'community engagement', 'mental well-being'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('aging-m08-q1',
          'How does social isolation affect health in older adults?',
          '¿Cómo afecta el aislamiento social a la salud de los adultos mayores?',
          ['It has no effect', 'It increases the risk of depression, cognitive decline, and even heart disease', 'It is healthy to be alone', 'It only affects mood, not physical health'],
          ['No tiene efecto', 'Aumenta el riesgo de depresión, deterioro cognitivo e incluso enfermedad cardíaca', 'Es saludable estar solo', 'Solo afecta el ánimo, no la salud física'],
          1,
          'Social isolation is linked to higher rates of depression, cognitive decline, heart disease, and even premature death.',
          'El aislamiento social está vinculado a tasas más altas de depresión, deterioro cognitivo, enfermedad cardíaca e incluso muerte prematura.'),
      ],
    },
  ],
};

// ========================== 8. Cancer Treatment ===========================

export const CANCER_TREATMENT_PATHWAY: LearningPathway = {
  id: 'pathway-cancer-treatment',
  title: 'Understanding Cancer Treatment',
  titleEs: 'Entendiendo el Tratamiento del Cáncer',
  description:
    'A 10-module course covering what cancer is, treatment types, managing side effects, nutrition, emotional support, and survivorship.',
  descriptionEs:
    'Un curso de 10 módulos que cubre qué es el cáncer, tipos de tratamiento, manejo de efectos secundarios, nutrición, apoyo emocional y sobrevivencia.',
  prerequisiteKnowledge: [
    'Basic understanding of cells and how the body grows',
    'Awareness that cancer has many types and treatments',
  ],
  progressionCriteria: {
    minimumScore: 70,
    requireAllQuestionsAttempted: true,
    minimumTimeSpentMinutes: 5,
    maxRetakes: -1,
  },
  modules: [
    {
      id: 'cancer-m01',
      title: 'What Is Cancer?',
      titleEs: '¿Qué Es el Cáncer?',
      topics: ['cell growth', 'mutations', 'tumors', 'benign vs malignant'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('cancer-m01-q1',
          'What is the basic difference between benign and malignant tumors?',
          '¿Cuál es la diferencia básica entre tumores benignos y malignos?',
          ['There is no difference', 'Benign tumors do not spread; malignant tumors can invade nearby tissue and spread', 'Benign tumors are larger', 'Malignant tumors are not harmful'],
          ['No hay diferencia', 'Los tumores benignos no se propagan; los tumores malignos pueden invadir tejido cercano y propagarse', 'Los tumores benignos son más grandes', 'Los tumores malignos no son dañinos'],
          1,
          'Benign tumors stay in one place and do not invade other tissues. Malignant (cancerous) tumors can grow into nearby tissue and spread to other parts of the body.',
          'Los tumores benignos permanecen en un lugar y no invaden otros tejidos. Los tumores malignos (cancerosos) pueden crecer en tejido cercano y propagarse a otras partes del cuerpo.'),
      ],
    },
    {
      id: 'cancer-m02',
      title: 'How Cancer Is Diagnosed',
      titleEs: 'Cómo Se Diagnostica el Cáncer',
      topics: ['biopsy', 'imaging', 'staging', 'lab tests'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('cancer-m02-q1',
          'What is a biopsy?',
          '¿Qué es una biopsia?',
          ['A blood test', 'A procedure that removes a small sample of tissue to examine under a microscope', 'A type of X-ray', 'A cancer treatment'],
          ['Un análisis de sangre', 'Un procedimiento que extrae una pequeña muestra de tejido para examinar bajo un microscopio', 'Un tipo de radiografía', 'Un tratamiento contra el cáncer'],
          1,
          'A biopsy is the definitive way to determine if cells are cancerous by examining tissue under a microscope.',
          'Una biopsia es la forma definitiva de determinar si las células son cancerosas al examinar tejido bajo un microscopio.'),
      ],
    },
    {
      id: 'cancer-m03',
      title: 'Understanding Chemotherapy',
      titleEs: 'Entendiendo la Quimioterapia',
      topics: ['how chemo works', 'treatment cycles', 'types of chemotherapy', 'what to expect'],
      estimatedMinutes: 20,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('cancer-m03-q1',
          'How does chemotherapy work against cancer?',
          '¿Cómo funciona la quimioterapia contra el cáncer?',
          ['It strengthens cancer cells', 'It uses drugs to kill or slow the growth of rapidly dividing cells', 'It is a type of surgery', 'It replaces damaged cells'],
          ['Fortalece las células cancerosas', 'Usa medicamentos para matar o ralentizar el crecimiento de células que se dividen rápidamente', 'Es un tipo de cirugía', 'Reemplaza las células dañadas'],
          1,
          'Chemotherapy targets rapidly dividing cells, which includes cancer cells, but can also affect some normal cells that divide quickly.',
          'La quimioterapia ataca las células que se dividen rápidamente, lo que incluye las células cancerosas, pero también puede afectar algunas células normales que se dividen rápidamente.'),
      ],
    },
    {
      id: 'cancer-m04',
      title: 'Radiation Therapy',
      titleEs: 'Terapia de Radiación',
      topics: ['how radiation works', 'external beam', 'internal radiation', 'treatment planning'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('cancer-m04-q1',
          'What does radiation therapy do to cancer cells?',
          '¿Qué le hace la terapia de radiación a las células cancerosas?',
          ['Freezes them', 'Uses high-energy beams to damage cancer cell DNA so they cannot grow and divide', 'Removes them surgically', 'Has no direct effect on cells'],
          ['Las congela', 'Usa rayos de alta energía para dañar el ADN de las células cancerosas para que no puedan crecer y dividirse', 'Las elimina quirúrgicamente', 'No tiene efecto directo en las células'],
          1,
          'Radiation damages the DNA inside cancer cells, preventing them from growing and dividing, which causes them to die.',
          'La radiación daña el ADN dentro de las células cancerosas, impidiéndoles crecer y dividirse, lo que causa su muerte.'),
      ],
    },
    {
      id: 'cancer-m05',
      title: 'Surgery for Cancer',
      titleEs: 'Cirugía para el Cáncer',
      topics: ['surgical goals', 'types of surgery', 'recovery', 'when surgery is used'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('cancer-m05-q1',
          'What is the goal of cancer surgery?',
          '¿Cuál es el objetivo de la cirugía contra el cáncer?',
          ['To always cure the cancer completely', 'To remove the tumor and, if possible, a margin of healthy tissue around it', 'To replace damaged organs', 'Surgery is never used for cancer'],
          ['Siempre curar el cáncer por completo', 'Eliminar el tumor y, si es posible, un margen de tejido sano alrededor', 'Reemplazar órganos dañados', 'La cirugía nunca se usa para el cáncer'],
          1,
          'Cancer surgery aims to remove the tumor along with a margin of healthy tissue to ensure all cancer cells are removed from that area.',
          'La cirugía contra el cáncer busca eliminar el tumor junto con un margen de tejido sano para asegurar que todas las células cancerosas sean removidas de esa área.'),
      ],
    },
    {
      id: 'cancer-m06',
      title: 'Immunotherapy and Targeted Therapy',
      titleEs: 'Inmunoterapia y Terapia Dirigida',
      topics: ['immune system', 'checkpoint inhibitors', 'targeted drugs', 'personalized medicine'],
      estimatedMinutes: 20,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('cancer-m06-q1',
          'How does immunotherapy fight cancer?',
          '¿Cómo combate la inmunoterapia el cáncer?',
          ['It directly kills cancer cells like chemotherapy', 'It helps your own immune system recognize and attack cancer cells', 'It uses radiation', 'It prevents all side effects'],
          ['Mata directamente las células cancerosas como la quimioterapia', 'Ayuda a tu propio sistema inmunológico a reconocer y atacar las células cancerosas', 'Usa radiación', 'Previene todos los efectos secundarios'],
          1,
          'Immunotherapy boosts or restores the immune system\'s ability to find and destroy cancer cells.',
          'La inmunoterapia refuerza o restaura la capacidad del sistema inmunológico de encontrar y destruir células cancerosas.'),
      ],
    },
    {
      id: 'cancer-m07',
      title: 'Managing Treatment Side Effects',
      titleEs: 'Manejando los Efectos Secundarios del Tratamiento',
      topics: ['nausea', 'fatigue', 'hair loss', 'infection risk', 'pain management'],
      estimatedMinutes: 20,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('cancer-m07-q1',
          'Why is it important to report side effects to your cancer care team?',
          '¿Por qué es importante informar los efectos secundarios a tu equipo de atención del cáncer?',
          ['Side effects cannot be treated', 'Many side effects can be managed effectively, and some may indicate serious complications', 'Doctors are not interested in side effects', 'You should only report pain'],
          ['Los efectos secundarios no se pueden tratar', 'Muchos efectos secundarios se pueden manejar eficazmente, y algunos pueden indicar complicaciones graves', 'Los médicos no están interesados en los efectos secundarios', 'Solo debes informar el dolor'],
          1,
          'Reporting side effects allows your care team to adjust treatments, prescribe supportive medications, and catch complications early.',
          'Informar los efectos secundarios permite a su equipo de atención ajustar tratamientos, recetar medicamentos de apoyo y detectar complicaciones temprano.'),
      ],
    },
    {
      id: 'cancer-m08',
      title: 'Nutrition During Cancer Treatment',
      titleEs: 'Nutrición Durante el Tratamiento del Cáncer',
      topics: ['maintaining weight', 'protein needs', 'hydration', 'foods to avoid', 'appetite changes'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('cancer-m08-q1',
          'Why is adequate nutrition important during cancer treatment?',
          '¿Por qué es importante una nutrición adecuada durante el tratamiento del cáncer?',
          ['It cures cancer directly', 'Good nutrition supports the immune system, maintains strength, and helps the body heal', 'Diet has no effect on treatment', 'You should eat as little as possible'],
          ['Cura el cáncer directamente', 'Una buena nutrición apoya el sistema inmunológico, mantiene la fuerza y ayuda al cuerpo a sanar', 'La dieta no tiene efecto en el tratamiento', 'Debes comer lo menos posible'],
          1,
          'Proper nutrition during treatment helps maintain strength, supports immune function, and improves the body\'s ability to recover.',
          'Una nutrición adecuada durante el tratamiento ayuda a mantener la fuerza, apoya la función inmunológica y mejora la capacidad del cuerpo para recuperarse.'),
      ],
    },
    {
      id: 'cancer-m09',
      title: 'Emotional Support and Mental Health',
      titleEs: 'Apoyo Emocional y Salud Mental',
      topics: ['coping with diagnosis', 'anxiety and depression', 'support groups', 'caregiver support'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('cancer-m09-q1',
          'Is it normal to feel anxious or depressed after a cancer diagnosis?',
          '¿Es normal sentir ansiedad o depresión después de un diagnóstico de cáncer?',
          ['No, you should always stay positive', 'Yes, emotional distress is very common and treatable — seeking help is a sign of strength', 'Only weak people feel this way', 'Emotional reactions have no impact on health'],
          ['No, siempre debes mantenerte positivo', 'Sí, la angustia emocional es muy común y tratable — buscar ayuda es una señal de fortaleza', 'Solo las personas débiles se sienten así', 'Las reacciones emocionales no tienen impacto en la salud'],
          1,
          'Emotional distress is extremely common and normal. Professional support can improve both quality of life and treatment outcomes.',
          'La angustia emocional es extremadamente común y normal. El apoyo profesional puede mejorar tanto la calidad de vida como los resultados del tratamiento.'),
      ],
    },
    {
      id: 'cancer-m10',
      title: 'Survivorship and Moving Forward',
      titleEs: 'Sobrevivencia y Seguir Adelante',
      topics: ['follow-up care', 'survivorship plan', 'long-term effects', 'returning to daily life'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('cancer-m10-q1',
          'What is a survivorship care plan?',
          '¿Qué es un plan de atención de sobrevivencia?',
          ['A document only for doctors', 'A personalized plan outlining follow-up care, screening schedules, and wellness recommendations after treatment', 'A type of insurance', 'A list of medications'],
          ['Un documento solo para médicos', 'Un plan personalizado que describe la atención de seguimiento, horarios de detección y recomendaciones de bienestar después del tratamiento', 'Un tipo de seguro', 'Una lista de medicamentos'],
          1,
          'A survivorship care plan provides a roadmap for life after treatment, including follow-up schedules, potential late effects to watch for, and wellness recommendations.',
          'Un plan de atención de sobrevivencia proporciona una hoja de ruta para la vida después del tratamiento, incluyendo horarios de seguimiento, posibles efectos tardíos a vigilar y recomendaciones de bienestar.'),
      ],
    },
  ],
};

// ========================== 9. Kidney Health ==============================

export const KIDNEY_HEALTH_PATHWAY: LearningPathway = {
  id: 'pathway-kidney-health',
  title: 'Kidney Health',
  titleEs: 'Salud Renal',
  description:
    'A 6-module course on how kidneys work, chronic kidney disease, managing kidney health, and treatment options.',
  descriptionEs:
    'Un curso de 6 módulos sobre cómo funcionan los riñones, enfermedad renal crónica, manejo de la salud renal y opciones de tratamiento.',
  prerequisiteKnowledge: [
    'Basic understanding that kidneys filter blood',
    'Awareness that kidney problems can develop from other conditions like diabetes or high blood pressure',
  ],
  progressionCriteria: {
    minimumScore: 70,
    requireAllQuestionsAttempted: true,
    minimumTimeSpentMinutes: 5,
    maxRetakes: -1,
  },
  modules: [
    {
      id: 'kidney-m01',
      title: 'How Your Kidneys Work',
      titleEs: 'Cómo Funcionan Tus Riñones',
      topics: ['kidney function', 'filtration', 'electrolytes', 'urine production'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('kidney-m01-q1',
          'What is the primary function of the kidneys?',
          '¿Cuál es la función principal de los riñones?',
          ['Pumping blood', 'Filtering waste and excess fluid from the blood', 'Digesting food', 'Producing insulin'],
          ['Bombear sangre', 'Filtrar desechos y exceso de líquido de la sangre', 'Digerir alimentos', 'Producir insulina'],
          1,
          'The kidneys filter about 200 quarts of blood daily, removing waste products and excess fluid to produce urine.',
          'Los riñones filtran aproximadamente 200 cuartos de sangre diariamente, eliminando productos de desecho y exceso de líquido para producir orina.'),
      ],
    },
    {
      id: 'kidney-m02',
      title: 'Understanding Chronic Kidney Disease',
      titleEs: 'Entendiendo la Enfermedad Renal Crónica',
      topics: ['CKD stages', 'GFR', 'risk factors', 'progression'],
      estimatedMinutes: 20,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('kidney-m02-q1',
          'What does GFR measure?',
          '¿Qué mide la TFG (tasa de filtración glomerular)?',
          ['Blood sugar', 'How well the kidneys are filtering blood', 'Heart rate', 'Blood pressure'],
          ['Azúcar en sangre', 'Qué tan bien los riñones están filtrando la sangre', 'Frecuencia cardíaca', 'Presión arterial'],
          1,
          'GFR (glomerular filtration rate) measures how efficiently your kidneys filter blood. A lower GFR indicates reduced kidney function.',
          'La TFG (tasa de filtración glomerular) mide qué tan eficientemente los riñones filtran la sangre. Una TFG más baja indica función renal reducida.'),
      ],
    },
    {
      id: 'kidney-m03',
      title: 'Diet and Kidney Health',
      titleEs: 'Dieta y Salud Renal',
      topics: ['sodium restriction', 'potassium management', 'phosphorus', 'protein intake', 'fluid management'],
      estimatedMinutes: 20,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('kidney-m03-q1',
          'Why might people with kidney disease need to limit potassium intake?',
          '¿Por qué las personas con enfermedad renal pueden necesitar limitar la ingesta de potasio?',
          ['Potassium is always harmful', 'Damaged kidneys cannot remove excess potassium, which can affect heart rhythm', 'Potassium causes kidney stones', 'There is no reason to limit it'],
          ['El potasio siempre es dañino', 'Los riñones dañados no pueden eliminar el exceso de potasio, lo que puede afectar el ritmo cardíaco', 'El potasio causa cálculos renales', 'No hay razón para limitarlo'],
          1,
          'When kidneys are not working well, potassium can build up in the blood and affect the heart\'s rhythm, which can be dangerous.',
          'Cuando los riñones no funcionan bien, el potasio puede acumularse en la sangre y afectar el ritmo del corazón, lo cual puede ser peligroso.'),
      ],
    },
    {
      id: 'kidney-m04',
      title: 'Medications and Your Kidneys',
      titleEs: 'Medicamentos y Tus Riñones',
      topics: ['nephrotoxic drugs', 'dose adjustments', 'blood pressure medications', 'over-the-counter risks'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('kidney-m04-q1',
          'Which common over-the-counter medication can be harmful to the kidneys if overused?',
          '¿Qué medicamento común de venta libre puede ser dañino para los riñones si se usa en exceso?',
          ['Acetaminophen (Tylenol) at normal doses', 'NSAIDs like ibuprofen (Advil/Motrin)', 'Vitamin C supplements', 'Antacids'],
          ['Acetaminofén (Tylenol) en dosis normales', 'AINEs como ibuprofeno (Advil/Motrin)', 'Suplementos de vitamina C', 'Antiácidos'],
          1,
          'NSAIDs (like ibuprofen and naproxen) can reduce blood flow to the kidneys and cause further damage, especially in people with existing kidney disease.',
          'Los AINEs (como ibuprofeno y naproxeno) pueden reducir el flujo sanguíneo a los riñones y causar más daño, especialmente en personas con enfermedad renal existente.'),
      ],
    },
    {
      id: 'kidney-m05',
      title: 'Dialysis: What to Know',
      titleEs: 'Diálisis: Lo Que Debes Saber',
      topics: ['hemodialysis', 'peritoneal dialysis', 'vascular access', 'lifestyle on dialysis'],
      estimatedMinutes: 20,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('kidney-m05-q1',
          'What does dialysis do?',
          '¿Qué hace la diálisis?',
          ['Cures kidney disease', 'Takes over the filtering function of the kidneys when they can no longer work well enough', 'Replaces the kidneys', 'Is a type of surgery'],
          ['Cura la enfermedad renal', 'Asume la función de filtrado de los riñones cuando ya no pueden funcionar lo suficientemente bien', 'Reemplaza los riñones', 'Es un tipo de cirugía'],
          1,
          'Dialysis is a treatment that filters waste and excess fluid from the blood when the kidneys can no longer do this adequately.',
          'La diálisis es un tratamiento que filtra desechos y exceso de líquido de la sangre cuando los riñones ya no pueden hacerlo adecuadamente.'),
      ],
    },
    {
      id: 'kidney-m06',
      title: 'Kidney Transplant and Long-Term Care',
      titleEs: 'Trasplante Renal y Atención a Largo Plazo',
      topics: ['transplant evaluation', 'living vs deceased donor', 'anti-rejection medications', 'follow-up care'],
      estimatedMinutes: 20,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('kidney-m06-q1',
          'Why do kidney transplant recipients need to take anti-rejection medications?',
          '¿Por qué los receptores de trasplante renal necesitan tomar medicamentos anti-rechazo?',
          ['To prevent infection only', 'To prevent the immune system from attacking the new kidney', 'They only need them for the first week', 'Anti-rejection medications are optional'],
          ['Solo para prevenir infecciones', 'Para evitar que el sistema inmunológico ataque el nuevo riñón', 'Solo los necesitan la primera semana', 'Los medicamentos anti-rechazo son opcionales'],
          1,
          'The immune system recognizes the transplanted kidney as foreign and will try to attack it. Anti-rejection medications suppress this response and must be taken for life.',
          'El sistema inmunológico reconoce el riñón trasplantado como extraño e intentará atacarlo. Los medicamentos anti-rechazo suprimen esta respuesta y deben tomarse de por vida.'),
      ],
    },
  ],
};

// ========================== 10. Chronic Pain ==============================

export const CHRONIC_PAIN_PATHWAY: LearningPathway = {
  id: 'pathway-chronic-pain',
  title: 'Managing Chronic Pain',
  titleEs: 'Manejando el Dolor Crónico',
  description:
    'An 8-module course on understanding chronic pain, treatment strategies, physical therapies, psychological approaches, and building a pain management plan.',
  descriptionEs:
    'Un curso de 8 módulos sobre el dolor crónico, estrategias de tratamiento, terapias físicas, enfoques psicológicos y cómo construir un plan de manejo del dolor.',
  prerequisiteKnowledge: [
    'Understanding that pain is a signal from the nervous system',
    'Awareness that chronic pain is different from acute (short-term) pain',
  ],
  progressionCriteria: {
    minimumScore: 70,
    requireAllQuestionsAttempted: true,
    minimumTimeSpentMinutes: 5,
    maxRetakes: -1,
  },
  modules: [
    {
      id: 'pain-m01',
      title: 'What Is Chronic Pain?',
      titleEs: '¿Qué Es el Dolor Crónico?',
      topics: ['acute vs chronic pain', 'pain signals', 'central sensitization', 'prevalence'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('pain-m01-q1',
          'How is chronic pain different from acute pain?',
          '¿En qué se diferencia el dolor crónico del dolor agudo?',
          ['They are the same thing', 'Chronic pain persists for 3 months or longer and may continue even after the original injury has healed', 'Chronic pain is always more severe', 'Acute pain lasts longer'],
          ['Son lo mismo', 'El dolor crónico persiste durante 3 meses o más y puede continuar incluso después de que la lesión original ha sanado', 'El dolor crónico siempre es más severo', 'El dolor agudo dura más'],
          1,
          'Chronic pain lasts 3 months or more and can persist even after tissues have healed, due to changes in the nervous system.',
          'El dolor crónico dura 3 meses o más y puede persistir incluso después de que los tejidos han sanado, debido a cambios en el sistema nervioso.'),
      ],
    },
    {
      id: 'pain-m02',
      title: 'The Pain and Brain Connection',
      titleEs: 'La Conexión entre el Dolor y el Cerebro',
      topics: ['neuroplasticity', 'pain perception', 'emotions and pain', 'the biopsychosocial model'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('pain-m02-q1',
          'Can emotions and thoughts affect how much pain you feel?',
          '¿Pueden las emociones y los pensamientos afectar cuánto dolor sientes?',
          ['No, pain is purely physical', 'Yes, stress, anxiety, and negative thoughts can amplify pain signals', 'Only positive emotions affect pain', 'Thoughts have no connection to pain'],
          ['No, el dolor es puramente físico', 'Sí, el estrés, la ansiedad y los pensamientos negativos pueden amplificar las señales de dolor', 'Solo las emociones positivas afectan el dolor', 'Los pensamientos no tienen conexión con el dolor'],
          1,
          'Pain is processed in the brain, and emotional states like stress and anxiety can increase pain sensitivity through neurological pathways.',
          'El dolor se procesa en el cerebro, y estados emocionales como el estrés y la ansiedad pueden aumentar la sensibilidad al dolor a través de vías neurológicas.'),
      ],
    },
    {
      id: 'pain-m03',
      title: 'Medication Options for Pain',
      titleEs: 'Opciones de Medicamentos para el Dolor',
      topics: ['acetaminophen', 'NSAIDs', 'antidepressants for pain', 'opioid risks', 'topical treatments'],
      estimatedMinutes: 20,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('pain-m03-q1',
          'Why are opioids generally not recommended as a first-line treatment for chronic pain?',
          '¿Por qué los opioides generalmente no se recomiendan como tratamiento de primera línea para el dolor crónico?',
          ['They do not work for any type of pain', 'They carry risks of dependence, tolerance, and side effects, and other options may work as well or better', 'They are too expensive', 'Doctors are not allowed to prescribe them'],
          ['No funcionan para ningún tipo de dolor', 'Conllevan riesgos de dependencia, tolerancia y efectos secundarios, y otras opciones pueden funcionar igual o mejor', 'Son demasiado caros', 'Los médicos no pueden recetarlos'],
          1,
          'Opioids carry significant risks of dependence, tolerance (needing higher doses), and side effects. Non-opioid approaches are preferred as first-line treatments.',
          'Los opioides conllevan riesgos significativos de dependencia, tolerancia (necesitar dosis más altas) y efectos secundarios. Los enfoques sin opioides son preferidos como tratamientos de primera línea.'),
      ],
    },
    {
      id: 'pain-m04',
      title: 'Physical Therapy and Movement',
      titleEs: 'Terapia Física y Movimiento',
      topics: ['physical therapy', 'gentle exercise', 'stretching', 'pacing activities'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('pain-m04-q1',
          'Why is movement important for managing chronic pain?',
          '¿Por qué es importante el movimiento para manejar el dolor crónico?',
          ['It is not — rest is always better', 'Appropriate movement can reduce pain, improve function, and prevent deconditioning', 'Only intense exercise helps', 'Movement always makes pain worse'],
          ['No lo es — descansar siempre es mejor', 'El movimiento apropiado puede reducir el dolor, mejorar la función y prevenir el desacondicionamiento', 'Solo el ejercicio intenso ayuda', 'El movimiento siempre empeora el dolor'],
          1,
          'Gentle, appropriate movement helps maintain flexibility, strength, and function while reducing pain through natural endorphin release.',
          'El movimiento suave y apropiado ayuda a mantener la flexibilidad, fuerza y función mientras reduce el dolor a través de la liberación natural de endorfinas.'),
      ],
    },
    {
      id: 'pain-m05',
      title: 'Mind-Body Approaches',
      titleEs: 'Enfoques Mente-Cuerpo',
      topics: ['CBT for pain', 'mindfulness meditation', 'relaxation techniques', 'biofeedback'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('pain-m05-q1',
          'How can mindfulness meditation help with chronic pain?',
          '¿Cómo puede la meditación de atención plena ayudar con el dolor crónico?',
          ['It eliminates all pain', 'It helps change the relationship with pain, reducing suffering and improving coping', 'It has no effect on pain', 'It replaces all medications'],
          ['Elimina todo el dolor', 'Ayuda a cambiar la relación con el dolor, reduciendo el sufrimiento y mejorando el afrontamiento', 'No tiene efecto en el dolor', 'Reemplaza todos los medicamentos'],
          1,
          'Mindfulness does not eliminate pain but can change how the brain processes pain signals, reducing emotional suffering and improving coping.',
          'La atención plena no elimina el dolor pero puede cambiar cómo el cerebro procesa las señales de dolor, reduciendo el sufrimiento emocional y mejorando el afrontamiento.'),
      ],
    },
    {
      id: 'pain-m06',
      title: 'Sleep and Pain',
      titleEs: 'Sueño y Dolor',
      topics: ['pain-sleep cycle', 'sleep hygiene', 'sleep disorders', 'improving sleep quality'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('pain-m06-q1',
          'How are sleep and chronic pain related?',
          '¿Cómo se relacionan el sueño y el dolor crónico?',
          ['They are not related', 'Poor sleep worsens pain, and pain disrupts sleep — creating a vicious cycle', 'Pain always helps you sleep', 'Sleep makes pain worse'],
          ['No están relacionados', 'El mal sueño empeora el dolor, y el dolor interrumpe el sueño — creando un ciclo vicioso', 'El dolor siempre ayuda a dormir', 'El sueño empeora el dolor'],
          1,
          'Pain and sleep have a bidirectional relationship: poor sleep increases pain sensitivity, and pain interferes with restful sleep.',
          'El dolor y el sueño tienen una relación bidireccional: el mal sueño aumenta la sensibilidad al dolor, y el dolor interfiere con el sueño reparador.'),
      ],
    },
    {
      id: 'pain-m07',
      title: 'Complementary Therapies',
      titleEs: 'Terapias Complementarias',
      topics: ['acupuncture', 'massage therapy', 'heat and cold therapy', 'TENS units'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('pain-m07-q1',
          'What is a TENS unit?',
          '¿Qué es una unidad TENS?',
          ['A type of medication', 'A device that delivers mild electrical impulses to help reduce pain', 'A surgical implant', 'A type of exercise equipment'],
          ['Un tipo de medicamento', 'Un dispositivo que envía impulsos eléctricos suaves para ayudar a reducir el dolor', 'Un implante quirúrgico', 'Un tipo de equipo de ejercicio'],
          1,
          'TENS (transcutaneous electrical nerve stimulation) is a portable device that sends mild electrical impulses through the skin to help reduce pain.',
          'TENS (estimulación nerviosa eléctrica transcutánea) es un dispositivo portátil que envía impulsos eléctricos suaves a través de la piel para ayudar a reducir el dolor.'),
      ],
    },
    {
      id: 'pain-m08',
      title: 'Building Your Pain Management Plan',
      titleEs: 'Construyendo Tu Plan de Manejo del Dolor',
      topics: ['multimodal approach', 'goal setting', 'flare-up planning', 'self-advocacy'],
      estimatedMinutes: 15,
      complexityLevel: 2,
      assessmentQuestions: [
        aq('pain-m08-q1',
          'What is a "multimodal" approach to pain management?',
          '¿Qué es un enfoque "multimodal" para el manejo del dolor?',
          ['Using only one treatment', 'Combining multiple strategies (medication, physical therapy, psychological support, lifestyle changes) for better results', 'Trying different doctors', 'Ignoring the pain'],
          ['Usar solo un tratamiento', 'Combinar múltiples estrategias (medicamentos, terapia física, apoyo psicológico, cambios de estilo de vida) para mejores resultados', 'Probar diferentes doctores', 'Ignorar el dolor'],
          1,
          'A multimodal approach combines several types of treatment — no single strategy works best alone for chronic pain.',
          'Un enfoque multimodal combina varios tipos de tratamiento — ninguna estrategia única funciona mejor sola para el dolor crónico.'),
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// 4. Master array and default export
// ---------------------------------------------------------------------------

export const LEARNING_PATHWAYS: LearningPathway[] = [
  DIABETES_PATHWAY,
  HYPERTENSION_PATHWAY,
  HEART_DISEASE_PATHWAY,
  THYROID_PATHWAY,
  RESPIRATORY_PATHWAY,
  MENTAL_HEALTH_PATHWAY,
  HEALTHY_AGING_PATHWAY,
  CANCER_TREATMENT_PATHWAY,
  KIDNEY_HEALTH_PATHWAY,
  CHRONIC_PAIN_PATHWAY,
];
