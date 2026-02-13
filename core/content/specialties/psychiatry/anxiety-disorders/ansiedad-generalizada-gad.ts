/**
 * Trastorno de Ansiedad Generalizada / Generalized Anxiety Disorder (GAD)
 *
 * Contenido educativo integral sobre el TAG con enfoque
 * en la comunidad hispanohablante. Incluye síntomas, TCC,
 * medicamentos y consideraciones culturales.
 *
 * Comprehensive educational content on GAD with focus
 * on Spanish-speaking communities. Includes symptoms, CBT,
 * medications, and cultural considerations.
 */

import { EducationalContent } from '../../../types';

export const ansiedadGeneralizadaGadContent: EducationalContent = {
  id: 'condition-ansiedad-generalizada-gad',
  type: 'condition',
  name: 'Generalized Anxiety Disorder',
  nameEs: 'Trastorno de Ansiedad Generalizada',
  alternateNames: [
    'TAG',
    'GAD',
    'Ansiedad Generalizada',
    'Generalized Anxiety',
    'Trastorno de Ansiedad',
    'Nervios',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'El Trastorno de Ansiedad Generalizada (TAG) es una condición donde la preocupación excesiva e incontrolable sobre muchas cosas diferentes afecta la vida diaria. No es solo "estar nervioso/a" — es una condición médica tratable. | Generalized Anxiety Disorder (GAD) is a condition where excessive, uncontrollable worry about many different things affects daily life. It is not just "being nervous" — it is a treatable medical condition.',
      explanation: `## Explicación

Todos nos preocupamos a veces. Eso es normal y nos ayuda a prepararnos para situaciones difíciles. Pero cuando la preocupación se vuelve excesiva, constante y difícil de controlar, puede ser un Trastorno de Ansiedad Generalizada (TAG).

**¿Qué se siente con el TAG?**

- Preocuparse demasiado por todo: el trabajo, la familia, la salud, el dinero, cosas pequeñas
- No poder dejar de preocuparse, aunque sabe que está exagerando
- Sentirse inquieto/a, "al borde" o "con los nervios de punta"
- Cansarse fácilmente
- Dificultad para concentrarse, mente en blanco
- Irritabilidad
- Tensión muscular, especialmente en cuello, hombros y espalda
- Problemas para dormir: dificultad para quedarse dormido o permanecer dormido

**El TAG también causa síntomas físicos:**
- Dolor de cabeza
- Dolor de estómago, náuseas, diarrea
- Sudoración excesiva
- Temblores
- Palpitaciones del corazón
- Mareos

**Mensaje importante para la comunidad hispana:**

En muchas familias latinas, la ansiedad se describe como "nervios," "estar nervioso/a," o "tener los nervios alterados." Estas experiencias son reales y válidas. Los "nervios" pueden ser un trastorno de ansiedad que merece atención médica.

La ansiedad NO es:
- Falta de fe o debilidad espiritual
- Ser "débil" o "cobarde"
- Algo que se puede controlar simplemente con fuerza de voluntad
- Un castigo o prueba

La ansiedad ES:
- Una condición médica del cerebro
- Muy común (afecta a millones de personas)
- Muy tratable con terapia, medicamentos o ambos

**¿Qué puedo hacer?**

- Hablar con un médico o profesional de salud mental
- La Terapia Cognitivo-Conductual (TCC) es muy efectiva
- Los medicamentos pueden ayudar a reducir la ansiedad
- Técnicas de relajación: respiración profunda, meditación
- Ejercicio regular ayuda a reducir la ansiedad
- Reducir la cafeína y el alcohol

**Si la ansiedad es abrumadora:**
- Línea 988 de Prevención del Suicidio y Crisis (en español): llama o envía texto al 988
- Línea de Crisis por Texto: envía HOLA al 741741

---
## Explanation

We all worry sometimes. That is normal and helps us prepare for difficult situations. But when worry becomes excessive, constant, and hard to control, it may be Generalized Anxiety Disorder (GAD).

**What does GAD feel like?**

- Worrying too much about everything: work, family, health, money, small things
- Not being able to stop worrying, even knowing you are exaggerating
- Feeling restless, "on edge," or "keyed up"
- Getting tired easily
- Difficulty concentrating, mind going blank
- Irritability
- Muscle tension, especially in neck, shoulders, and back
- Sleep problems: difficulty falling or staying asleep

**GAD also causes physical symptoms:**
- Headaches
- Stomachache, nausea, diarrhea
- Excessive sweating
- Trembling
- Heart palpitations
- Dizziness

**Important message for the Hispanic community:**

In many Latino families, anxiety is described as "nervios," "being nervous," or "having altered nerves." These experiences are real and valid. "Nervios" may be an anxiety disorder that deserves medical attention.

Anxiety is NOT:
- Lack of faith or spiritual weakness
- Being "weak" or "cowardly"
- Something you can simply control with willpower
- A punishment or test

Anxiety IS:
- A medical brain condition
- Very common (affects millions of people)
- Very treatable with therapy, medications, or both

**What can I do?**

- Talk to a doctor or mental health professional
- Cognitive Behavioral Therapy (CBT) is very effective
- Medications can help reduce anxiety
- Relaxation techniques: deep breathing, meditation
- Regular exercise helps reduce anxiety
- Reduce caffeine and alcohol

**If anxiety is overwhelming:**
- 988 Suicide & Crisis Lifeline (in Spanish): call or text 988
- Crisis Text Line: text HELLO to 741741`,
      keyTerms: [
        {
          term: 'ansiedad',
          definition:
            'Sensación de preocupación, nerviosismo o miedo excesivo que interfiere con la vida diaria. Es una respuesta del cerebro que se puede tratar. | Feeling of excessive worry, nervousness, or fear that interferes with daily life. It is a brain response that can be treated.',
        },
        {
          term: 'preocupación excesiva',
          definition:
            'Preocuparse de manera desproporcionada sobre muchas cosas diferentes, la mayor parte del tiempo, y no poder dejar de hacerlo. | Worrying disproportionately about many different things, most of the time, and not being able to stop.',
        },
        {
          term: 'terapia',
          definition:
            'Tratamiento donde hablas con un profesional que te ayuda a entender y manejar tus preocupaciones y miedos. | Treatment where you talk with a professional who helps you understand and manage your worries and fears.',
        },
      ],
      analogies: [
        'La ansiedad generalizada es como tener una alarma de incendios que se activa constantemente, incluso cuando no hay fuego. El cerebro está siempre en modo de alerta. | Generalized anxiety is like having a fire alarm that goes off constantly, even when there is no fire. The brain is always in alert mode.',
        'Es como cargar una mochila invisible llena de preocupaciones. Cada día se agregan más preocupaciones sin quitar ninguna. Con tratamiento, aprendes a vaciar esa mochila. | It is like carrying an invisible backpack full of worries. Every day more worries are added without removing any. With treatment, you learn to empty that backpack.',
      ],
      examples: [
        'Un padre que no puede dormir porque se preocupa por la seguridad de sus hijos, por las cuentas, por su trabajo, por si cerró la puerta con llave, todo al mismo tiempo. | A father who cannot sleep because he worries about his children\'s safety, bills, his job, whether he locked the door, all at the same time.',
        'Una estudiante que siente dolor de estómago y palpitaciones antes de cada clase, no porque tenga un problema médico, sino porque su ansiedad se manifiesta en su cuerpo. | A student who feels stomachache and palpitations before every class, not because of a medical problem, but because her anxiety manifests in her body.',
      ],
      patientCounselingPoints: [
        'La ansiedad es una condición médica, no un defecto personal. Su cerebro simplemente está trabajando demasiado para protegerlo/a. | Anxiety is a medical condition, not a personal flaw. Your brain is simply working too hard to protect you.',
        'No necesita enfrentar esto solo/a. Hay tratamientos muy efectivos que pueden ayudarle a sentirse mucho mejor. | You do not need to face this alone. There are very effective treatments that can help you feel much better.',
        'Practicar la respiración profunda 5 minutos al día puede ayudar a calmar su sistema nervioso. Inhale por 4 segundos, sostenga por 4, exhale por 6. | Practicing deep breathing 5 minutes daily can help calm your nervous system. Inhale for 4 seconds, hold for 4, exhale for 6.',
        'Si los "nervios" le impiden funcionar en el trabajo, escuela o relaciones, eso merece atención médica. No se conforme con "así soy yo." | If "nervios" prevent you from functioning at work, school, or in relationships, that deserves medical attention. Do not settle for "that is just who I am."',
      ],
    },
    2: {
      level: 2,
      summary:
        'El TAG se caracteriza por preocupación excesiva y persistente durante al menos 6 meses, acompañada de síntomas somáticos como tensión muscular e insomnio. Se trata con TCC, ISRS/IRSN y técnicas de manejo del estrés. | GAD is characterized by excessive, persistent worry for at least 6 months, accompanied by somatic symptoms such as muscle tension and insomnia. It is treated with CBT, SSRIs/SNRIs, and stress management techniques.',
      explanation: `## Explicación

**Criterios diagnósticos simplificados:**

Para diagnosticar TAG, se requiere:
1. Ansiedad y preocupación excesiva sobre múltiples eventos o actividades, durante más días de los que no, durante al menos 6 meses
2. La persona encuentra difícil controlar la preocupación
3. Al menos 3 de estos síntomas (1 en niños):
   - Inquietud o sensación de estar "al borde"
   - Fatigarse fácilmente
   - Dificultad para concentrarse o mente en blanco
   - Irritabilidad
   - Tensión muscular
   - Alteración del sueño

**¿Qué causa el TAG?**

- **Factores biológicos:** Desequilibrio de neurotransmisores (serotonina, GABA, norepinefrina), genética (30% heredable)
- **Factores psicológicos:** Intolerancia a la incertidumbre, pensamiento catastrófico, experiencias traumáticas
- **Factores sociales:** Estrés crónico, inseguridad económica, discriminación, aculturación

**Diferencia entre TAG y otros trastornos de ansiedad:**
- **TAG:** Preocupación generalizada sobre muchos temas
- **Trastorno de pánico:** Ataques repentinos de miedo intenso
- **Fobia social:** Miedo específico a situaciones sociales
- **Fobias específicas:** Miedo a objetos o situaciones particulares

**Tratamiento: Terapia Cognitivo-Conductual (TCC)**

La TCC es el tratamiento psicológico más efectivo para el TAG. Incluye:

*Componente cognitivo:*
- Identificar pensamientos ansiosos automáticos
- Cuestionar la evidencia de los pensamientos negativos
- Reducir el pensamiento catastrófico ("¿Qué es lo peor que puede pasar?")
- Aprender a tolerar la incertidumbre

*Componente conductual:*
- Exposición gradual a situaciones temidas
- Técnicas de relajación muscular progresiva
- Respiración diafragmática
- Programación de "tiempo de preocupación" (limitar la preocupación a 30 minutos al día)
- Actividades placenteras y ejercicio

**Tratamiento: Medicamentos**

*Primera línea:*
- ISRS: escitalopram, sertralina, paroxetina
- IRSN: venlafaxina, duloxetina
- Tardan 2-4 semanas para efecto completo

*Para alivio inmediato (uso a corto plazo):*
- Buspirona: ansiolítico no benzodiazepínico, sin riesgo de adicción
- Hidroxizina: antihistamínico con efecto ansiolítico

*Benzodiazepinas (uso cauteloso y limitado):*
- Alprazolam, lorazepam, clonazepam
- Efecto rápido pero riesgo de dependencia
- Reservar para crisis agudas, usar por el menor tiempo posible

**Tratamiento: Estilo de vida**
- Ejercicio aeróbico: 30+ minutos, 3-5 veces por semana
- Higiene del sueño: horario regular, evitar pantallas antes de dormir
- Reducir cafeína (un estimulante que empeora la ansiedad)
- Limitar alcohol (puede empeorar la ansiedad al día siguiente)
- Mindfulness y meditación
- Conexión social y apoyo familiar

**Consideraciones culturales para la comunidad hispana:**

- El concepto de "nervios" o "ataque de nervios" puede ser la forma en que se describe la ansiedad
- Los síntomas físicos (dolor, malestar estomacal) pueden ser la queja principal
- El orgullo y el machismo pueden impedir que hombres latinos busquen ayuda
- La fe y la oración pueden complementar el tratamiento (pero no reemplazarlo)
- Las promotoras de salud pueden facilitar el acceso a servicios
- El estrés migratorio, la separación familiar y la discriminación son factores contribuyentes importantes

---
## Explanation

**Simplified diagnostic criteria:**

To diagnose GAD:
1. Excessive anxiety and worry about multiple events or activities, more days than not, for at least 6 months
2. The person finds it difficult to control the worry
3. At least 3 of these symptoms (1 in children):
   - Restlessness or feeling "on edge"
   - Being easily fatigued
   - Difficulty concentrating or mind going blank
   - Irritability
   - Muscle tension
   - Sleep disturbance

**What causes GAD?**

- **Biological:** Neurotransmitter imbalance (serotonin, GABA, norepinephrine), genetics (30% heritable)
- **Psychological:** Intolerance of uncertainty, catastrophic thinking, traumatic experiences
- **Social:** Chronic stress, economic insecurity, discrimination, acculturation

**Difference between GAD and other anxiety disorders:**
- **GAD:** Generalized worry about many topics
- **Panic disorder:** Sudden attacks of intense fear
- **Social phobia:** Specific fear of social situations
- **Specific phobias:** Fear of particular objects or situations

**Treatment: Cognitive Behavioral Therapy (CBT)**

CBT is the most effective psychological treatment for GAD. It includes:

*Cognitive component:*
- Identify automatic anxious thoughts
- Question evidence for negative thoughts
- Reduce catastrophic thinking ("What is the worst that can happen?")
- Learn to tolerate uncertainty

*Behavioral component:*
- Gradual exposure to feared situations
- Progressive muscle relaxation techniques
- Diaphragmatic breathing
- Scheduling "worry time" (limit worrying to 30 minutes per day)
- Pleasurable activities and exercise

**Treatment: Medications**

*First-line:*
- SSRIs: escitalopram, sertraline, paroxetine
- SNRIs: venlafaxine, duloxetine
- Take 2-4 weeks for full effect

*For immediate relief (short-term use):*
- Buspirone: non-benzodiazepine anxiolytic, no addiction risk
- Hydroxyzine: antihistamine with anxiolytic effect

*Benzodiazepines (cautious, limited use):*
- Alprazolam, lorazepam, clonazepam
- Rapid effect but dependence risk
- Reserve for acute crises, use for shortest time possible

**Treatment: Lifestyle**
- Aerobic exercise: 30+ minutes, 3-5 times per week
- Sleep hygiene: regular schedule, avoid screens before bed
- Reduce caffeine (a stimulant that worsens anxiety)
- Limit alcohol (can worsen anxiety the next day)
- Mindfulness and meditation
- Social connection and family support

**Cultural considerations for the Hispanic community:**

- The concept of "nervios" or "ataque de nervios" may be how anxiety is described
- Physical symptoms (pain, stomach upset) may be the main complaint
- Pride and machismo may prevent Latino men from seeking help
- Faith and prayer can complement treatment (but not replace it)
- Community health workers (promotoras) can facilitate access to services
- Migration stress, family separation, and discrimination are important contributing factors`,
      keyTerms: [
        {
          term: 'TCC / CBT',
          definition:
            'Terapia Cognitivo-Conductual. Tipo de psicoterapia que enseña a identificar y cambiar pensamientos ansiosos y comportamientos de evitación. Es el tratamiento psicológico más efectivo para el TAG. | Cognitive Behavioral Therapy. Type of psychotherapy that teaches to identify and change anxious thoughts and avoidance behaviors. Most effective psychological treatment for GAD.',
        },
        {
          term: 'ISRS / SSRI',
          definition:
            'Inhibidores Selectivos de la Recaptación de Serotonina. Medicamentos de primera línea para el TAG que aumentan la serotonina en el cerebro. No causan adicción. | Selective Serotonin Reuptake Inhibitors. First-line medications for GAD that increase serotonin in the brain. Not addictive.',
        },
        {
          term: 'buspirona / buspirone',
          definition:
            'Medicamento ansiolítico no benzodiazepínico que actúa sobre receptores de serotonina. No causa dependencia y es útil para el TAG crónico. | Non-benzodiazepine anxiolytic medication acting on serotonin receptors. Not habit-forming and useful for chronic GAD.',
        },
        {
          term: 'nervios / ataque de nervios',
          definition:
            'Expresión cultural latina para describir malestar emocional intenso, a menudo equivalente a síntomas de ansiedad o estrés agudo. Reconocido como síndrome cultural en el DSM-5-TR. | Latino cultural expression for intense emotional distress, often equivalent to anxiety or acute stress symptoms. Recognized as a cultural syndrome in DSM-5-TR.',
        },
      ],
      analogies: [
        'La TCC es como enseñar a tu cerebro a ser un detective: en lugar de creer automáticamente cada preocupación, aprendes a investigar si la evidencia realmente apoya esa preocupación. | CBT is like teaching your brain to be a detective: instead of automatically believing every worry, you learn to investigate whether the evidence truly supports that worry.',
      ],
      examples: [
        'Una mujer hispana va al médico por dolores de cabeza constantes y dolor abdominal. Después de descartar causas físicas, el médico descubre que tiene TAG. Los síntomas físicos eran la manifestación de su ansiedad. | A Hispanic woman goes to the doctor for constant headaches and abdominal pain. After ruling out physical causes, the doctor discovers she has GAD. The physical symptoms were the manifestation of her anxiety.',
      ],
      patientCounselingPoints: [
        'Los medicamentos para la ansiedad como los ISRS no causan adicción. Son seguros para uso a largo plazo si su médico lo recomienda. | Anxiety medications like SSRIs are not addictive. They are safe for long-term use if your doctor recommends it.',
        'La terapia (TCC) no es solo "hablar de sus problemas." Es aprender herramientas prácticas para manejar la ansiedad, como la respiración y el cuestionamiento de pensamientos. | Therapy (CBT) is not just "talking about your problems." It is learning practical tools to manage anxiety, like breathing and thought questioning.',
        'Reduzca el café y las bebidas energéticas. La cafeína activa las mismas respuestas del cuerpo que la ansiedad. | Reduce coffee and energy drinks. Caffeine activates the same body responses as anxiety.',
      ],
    },
    3: {
      level: 3,
      summary:
        'El TAG involucra desregulación de los circuitos amígdala-corteza prefrontal, con disfunción GABAérgica, serotoninérgica y noradrenérgica. El diagnóstico DSM-5-TR requiere preocupación excesiva durante 6+ meses con 3+ síntomas asociados. El tratamiento combina TCC (exposición, reestructuración cognitiva) con farmacoterapia de primera línea (ISRS/IRSN). | GAD involves dysregulation of amygdala-prefrontal cortex circuits, with GABAergic, serotonergic, and noradrenergic dysfunction. DSM-5-TR diagnosis requires excessive worry for 6+ months with 3+ associated symptoms. Treatment combines CBT (exposure, cognitive restructuring) with first-line pharmacotherapy (SSRIs/SNRIs).',
      explanation: `## Explicación

**Criterios diagnósticos DSM-5-TR para Trastorno de Ansiedad Generalizada:**

A. Ansiedad y preocupación excesiva (expectación aprensiva) sobre múltiples eventos o actividades, que ocurren más días de los que no, durante al menos 6 meses
B. La persona encuentra difícil controlar la preocupación
C. La ansiedad y preocupación se asocian con 3 o más de los siguientes (1 en niños):
   1. Inquietud o sensación de estar "al borde"
   2. Fatigabilidad
   3. Dificultad para concentrarse o mente en blanco
   4. Irritabilidad
   5. Tensión muscular
   6. Alteración del sueño
D. La perturbación no se explica mejor por otro trastorno mental
E. No es atribuible a sustancias o condición médica
F. Causa malestar clínicamente significativo o deterioro funcional

**Evaluación diferencial:**
- Trastorno de pánico: predominan ataques de pánico discretos
- Fobia social: ansiedad limitada a situaciones sociales
- TOC: preocupaciones intrusivas egodistónicas con rituales
- TEPT: ansiedad vinculada a evento traumático específico
- Trastorno de ansiedad por enfermedad: preocupación centrada en enfermedades
- Hipertiroidismo, feocromocitoma, arritmias: causas médicas de ansiedad
- Abuso de cafeína, estimulantes, abstinencia de sustancias

**Neurobiología del TAG:**

*Circuitos neurales:*
- Hiperactividad de la amígdala ante estímulos ambiguos
- Hipoactivación de la corteza prefrontal ventromedial (regulación emocional deficiente)
- Conectividad aberrante amígdala-corteza cingulada anterior
- Ínsula anterior hiperactiva (interocepción aumentada)
- Alteraciones en la red de modo por defecto (preocupación anticipatoria)

*Neurotransmisores:*
- GABA: reducción de la señalización GABAérgica (receptor GABA-A)
- Serotonina: disfunción del receptor 5-HT1A (autorreceptor y postsináptico)
- Norepinefrina: hiperactividad del locus cerúleo
- Glutamato: exceso de neurotransmisión excitatoria
- Neuropéptidos: CRH elevado, NPY reducido

*Eje HPA:*
- Desregulación de la respuesta al estrés
- Cortisol basal variable (puede ser normal o elevado)
- Reactividad al estrés alterada
- Interacción con el sistema inmunológico (inflamación de bajo grado)

**Genética:**
- Heredabilidad estimada: ~30%
- Genes compartidos con otros trastornos de ansiedad y depresión
- Polimorfismos en genes serotoninérgicos (5-HTTLPR, HTR2A)
- Genes del eje HPA (FKBP5, NR3C1)
- Interacción gen-ambiente: estrés temprano amplifica vulnerabilidad genética

**Farmacoterapia detallada:**

*ISRS (primera línea):*
- Escitalopram: 10-20 mg/día (mejor evidencia, bien tolerado)
- Sertralina: 50-200 mg/día
- Paroxetina: 20-50 mg/día (efectiva pero más efectos de discontinuación)
- Inicio de acción: 2-4 semanas; efecto completo: 4-8 semanas
- Efectos secundarios comunes: náusea, disfunción sexual, cefalea inicial

*IRSN (primera línea):*
- Venlafaxina XR: 75-225 mg/día
- Duloxetina: 60-120 mg/día (útil con dolor comórbido)
- Pueden aumentar presión arterial; monitorear

*Buspirona:*
- 15-60 mg/día en dosis divididas
- Agonista parcial 5-HT1A
- Sin dependencia, sin sedación significativa
- Útil como augmentación o alternativa a ISRS

*Pregabalina (aprobada en Europa, off-label en EE.UU.):*
- 150-600 mg/día
- Ligando alfa-2-delta (canales de calcio voltaje-dependientes)
- Efecto ansiolítico rápido
- Riesgo de abuso y tolerancia

*Benzodiazepinas:*
- Uso a corto plazo (2-4 semanas) o rescate
- Riesgo de dependencia, tolerancia, abstinencia
- Evitar en pacientes con antecedentes de abuso de sustancias
- Clonazepam: vida media larga, efecto más estable
- Reducción gradual para evitar síndrome de abstinencia

**TCC: Protocolos específicos para TAG:**

*Modelo de Borkovec:*
- La preocupación como evitación cognitiva de imágenes emocionales
- Procesamiento emocional de imágenes temidas
- Exposición a la preocupación con procesamiento completo

*Modelo de Dugas (Intolerancia a la Incertidumbre):*
- Reducir la intolerancia a la incertidumbre
- Reevaluación de la utilidad de la preocupación
- Entrenamiento en resolución de problemas
- Exposición imaginaria al peor escenario

*Componentes comunes de la TCC para TAG:*
- Psicoeducación sobre la ansiedad
- Monitoreo de preocupaciones y ansiedad
- Reestructuración cognitiva
- Relajación muscular progresiva
- Exposición a la preocupación
- Prevención de conductas de seguridad y evitación
- Mindfulness y aceptación

**Escalas de evaluación:**
- GAD-7: tamizaje y monitoreo (sensibilidad 89%, especificidad 82% para TAG)
- Hamilton Anxiety Rating Scale (HAM-A)
- Penn State Worry Questionnaire (PSWQ)
- Generalized Anxiety Disorder Severity Scale (GADSS)

**Disparidades y consideraciones culturales:**

*Síndromes culturales relacionados:*
- "Nervios": malestar general con componentes somáticos y emocionales
- "Ataque de nervios": episodio agudo de descontrol emocional, común en el Caribe
- "Susto": miedo intenso tras un evento traumático
- Estos síndromes están reconocidos en el DSM-5-TR

*Presentación en poblaciones hispanas:*
- Mayor tendencia a reportar síntomas somáticos que psicológicos
- La somatización como idioma de angustia culturalmente aceptado
- Subdiagnóstico y subtratamiento por barreras lingüísticas y culturales
- La religión y espiritualidad como mecanismos de afrontamiento importantes

---
## Explanation

**DSM-5-TR Diagnostic Criteria for Generalized Anxiety Disorder:**

A. Excessive anxiety and worry (apprehensive expectation) about multiple events or activities, occurring more days than not, for at least 6 months
B. The person finds it difficult to control the worry
C. The anxiety and worry are associated with 3 or more of the following (1 in children):
   1. Restlessness or feeling "on edge"
   2. Being easily fatigued
   3. Difficulty concentrating or mind going blank
   4. Irritability
   5. Muscle tension
   6. Sleep disturbance
D. The disturbance is not better explained by another mental disorder
E. Not attributable to substances or a medical condition
F. Causes clinically significant distress or functional impairment

**Differential evaluation:**
- Panic disorder: discrete panic attacks predominate
- Social phobia: anxiety limited to social situations
- OCD: ego-dystonic intrusive thoughts with rituals
- PTSD: anxiety linked to specific traumatic event
- Illness anxiety disorder: worry centered on illnesses
- Hyperthyroidism, pheochromocytoma, arrhythmias: medical causes of anxiety
- Caffeine, stimulant abuse, substance withdrawal

**Neurobiology of GAD:**

*Neural circuits:*
- Amygdala hyperactivity to ambiguous stimuli
- Ventromedial prefrontal cortex hypoactivation (poor emotion regulation)
- Aberrant amygdala-anterior cingulate cortex connectivity
- Hyperactive anterior insula (increased interoception)
- Default mode network alterations (anticipatory worry)

*Neurotransmitters:*
- GABA: reduced GABAergic signaling (GABA-A receptor)
- Serotonin: 5-HT1A receptor dysfunction (autoreceptor and postsynaptic)
- Norepinephrine: locus ceruleus hyperactivity
- Glutamate: excess excitatory neurotransmission
- Neuropeptides: elevated CRH, reduced NPY

*HPA axis:*
- Stress response dysregulation
- Variable basal cortisol (may be normal or elevated)
- Altered stress reactivity
- Immune system interaction (low-grade inflammation)

**Genetics:**
- Estimated heritability: ~30%
- Shared genes with other anxiety disorders and depression
- Polymorphisms in serotonergic genes (5-HTTLPR, HTR2A)
- HPA axis genes (FKBP5, NR3C1)
- Gene-environment interaction: early stress amplifies genetic vulnerability

**Detailed pharmacotherapy:**

*SSRIs (first-line):*
- Escitalopram: 10-20 mg/day (best evidence, well tolerated)
- Sertraline: 50-200 mg/day
- Paroxetine: 20-50 mg/day (effective but more discontinuation effects)
- Onset of action: 2-4 weeks; full effect: 4-8 weeks
- Common side effects: nausea, sexual dysfunction, initial headache

*SNRIs (first-line):*
- Venlafaxine XR: 75-225 mg/day
- Duloxetine: 60-120 mg/day (useful with comorbid pain)
- May increase blood pressure; monitor

*Buspirone:*
- 15-60 mg/day in divided doses
- 5-HT1A partial agonist
- No dependence, no significant sedation
- Useful as augmentation or SSRI alternative

*Pregabalin (approved in Europe, off-label in US):*
- 150-600 mg/day
- Alpha-2-delta ligand (voltage-dependent calcium channels)
- Rapid anxiolytic effect
- Abuse and tolerance risk

*Benzodiazepines:*
- Short-term use (2-4 weeks) or rescue
- Dependence, tolerance, withdrawal risk
- Avoid in patients with substance abuse history
- Clonazepam: long half-life, more stable effect
- Gradual tapering to avoid withdrawal syndrome

**CBT: GAD-specific protocols:**

*Borkovec model:*
- Worry as cognitive avoidance of emotional imagery
- Emotional processing of feared imagery
- Worry exposure with complete processing

*Dugas model (Intolerance of Uncertainty):*
- Reduce intolerance of uncertainty
- Reassess the utility of worry
- Problem-solving training
- Imaginal exposure to worst-case scenario

*Common CBT components for GAD:*
- Psychoeducation about anxiety
- Worry and anxiety monitoring
- Cognitive restructuring
- Progressive muscle relaxation
- Worry exposure
- Prevention of safety behaviors and avoidance
- Mindfulness and acceptance

**Assessment scales:**
- GAD-7: screening and monitoring (sensitivity 89%, specificity 82% for GAD)
- Hamilton Anxiety Rating Scale (HAM-A)
- Penn State Worry Questionnaire (PSWQ)
- Generalized Anxiety Disorder Severity Scale (GADSS)

**Disparities and cultural considerations:**

*Related cultural syndromes:*
- "Nervios": general distress with somatic and emotional components
- "Ataque de nervios": acute episode of emotional dyscontrol, common in the Caribbean
- "Susto": intense fear following a traumatic event
- These syndromes are recognized in the DSM-5-TR

*Presentation in Hispanic populations:*
- Greater tendency to report somatic rather than psychological symptoms
- Somatization as a culturally acceptable idiom of distress
- Underdiagnosis and undertreatment due to linguistic and cultural barriers
- Religion and spirituality as important coping mechanisms`,
      keyTerms: [
        {
          term: 'intolerancia a la incertidumbre',
          definition:
            'Tendencia a reaccionar negativamente ante situaciones inciertas o ambiguas. Es un proceso central en el TAG que impulsa la preocupación excesiva. | Tendency to react negatively to uncertain or ambiguous situations. A core process in GAD that drives excessive worry.',
        },
        {
          term: 'GABA',
          definition:
            'Ácido gamma-aminobutírico. Principal neurotransmisor inhibitorio del cerebro. Su reducción en el TAG contribuye a la hiperexcitabilidad neural y la ansiedad. | Gamma-aminobutyric acid. Main inhibitory brain neurotransmitter. Its reduction in GAD contributes to neural hyperexcitability and anxiety.',
        },
        {
          term: 'locus cerúleo / locus coeruleus',
          definition:
            'Núcleo del tronco encefálico, principal fuente de norepinefrina. Su hiperactividad en el TAG media la hipervigilancia y la respuesta exagerada al estrés. | Brainstem nucleus, main source of norepinephrine. Its hyperactivity in GAD mediates hypervigilance and exaggerated stress response.',
          pronunciation: 'LOH-kus seh-ROO-leh-oh',
        },
        {
          term: 'GAD-7',
          definition:
            'Cuestionario de 7 preguntas validado para tamizaje y monitoreo del TAG. Puntuación ≥10 indica TAG probable. Disponible en español. | Validated 7-question questionnaire for GAD screening and monitoring. Score ≥10 indicates probable GAD. Available in Spanish.',
        },
        {
          term: 'reestructuración cognitiva',
          definition:
            'Técnica central de la TCC que consiste en identificar, evaluar y modificar pensamientos distorsionados que generan ansiedad. | Core CBT technique consisting of identifying, evaluating, and modifying distorted thoughts that generate anxiety.',
        },
      ],
      clinicalNotes:
        'El GAD-7 es la herramienta de tamizaje de elección y está validada en español. Puntuación: 5-9 leve, 10-14 moderado, ≥15 severo. Descartar siempre causas médicas de ansiedad (hipertiroidismo, feocromocitoma, arritmias, abuso de cafeína/estimulantes). Los ISRS son primera línea; iniciar a dosis baja para evitar empeoramiento paradójico de la ansiedad. Las benzodiazepinas deben reservarse para uso a corto plazo. La TCC tiene eficacia comparable a la farmacoterapia y menor tasa de recaída. En pacientes hispanos, usar la GAD-7 en español y explorar síndromes culturales (nervios, ataque de nervios). Considerar terapia grupal culturalmente adaptada. | GAD-7 is the screening tool of choice and is validated in Spanish. Score: 5-9 mild, 10-14 moderate, ≥15 severe. Always rule out medical causes of anxiety (hyperthyroidism, pheochromocytoma, arrhythmias, caffeine/stimulant abuse). SSRIs are first-line; start at low dose to avoid paradoxical anxiety worsening. Benzodiazepines should be reserved for short-term use. CBT has comparable efficacy to pharmacotherapy and lower relapse rate. In Hispanic patients, use the Spanish GAD-7 and explore cultural syndromes (nervios, ataque de nervios). Consider culturally adapted group therapy.',
    },
    4: {
      level: 4,
      summary:
        'La fisiopatología del TAG integra disfunción del circuito corticolímbico (amígdala, corteza prefrontal, cíngulo anterior), desregulación GABAérgica/glutamatérgica, inflamación de bajo grado y alteraciones del procesamiento predictivo. Los abordajes farmacológicos avanzados incluyen moduladores glutamatérgicos y terapias basadas en la neuroplasticidad. | GAD pathophysiology integrates corticolimbic circuit dysfunction (amygdala, prefrontal cortex, anterior cingulate), GABAergic/glutamatergic dysregulation, low-grade inflammation, and predictive processing alterations. Advanced pharmacological approaches include glutamatergic modulators and neuroplasticity-based therapies.',
      explanation: `## Explicación

**Modelos neurocircuitales del TAG:**

*Modelo de Eysenck (sesgo atencional):*
- Hipervigilancia hacia estímulos amenazantes
- Dificultad para desengancharse de la amenaza
- Sesgo interpretativo: estímulos ambiguos se interpretan como amenazantes
- Correlato neural: hiperactividad amigdalina ante estímulos faciales ambiguos

*Modelo de regulación emocional:*
- Déficit en el uso de estrategias de regulación adaptativas
- Sobreutilización de la preocupación como estrategia de evitación
- Reevaluación cognitiva deficiente (corteza prefrontal ventrolateral)
- Supresión emocional excesiva
- La preocupación previene el procesamiento emocional completo

*Modelo de procesamiento predictivo:*
- Estimaciones de probabilidad de amenaza infladas
- Modelos internos de un mundo peligroso e impredecible
- Errores de predicción procesados como confirmación de amenaza
- Actualización bayesiana sesgada hacia información negativa

**Neuroimagen avanzada:**

*Hallazgos estructurales:*
- Aumento de volumen de la amígdala en algunos estudios
- Reducción de volumen del hipocampo
- Alteraciones en la sustancia blanca (tractos frontolímbicos)
- Cambios corticales en la ínsula y corteza cingulada

*Hallazgos funcionales (fMRI):*
- Hiperactivación amigdalina ante caras temerosas y ambiguas
- Fallo en la activación prefrontal reguladora
- Conectividad funcional alterada entre amígdala y corteza prefrontal
- Red de saliencia hiperactiva
- Red ejecutiva central hipoactiva durante la preocupación

*Neuroquímica (PET/SPECT):*
- Reducción de la unión a receptores GABA-A (benzodiazepínicas) en el TAG
- Reducción de receptores 5-HT1A en corteza y rafe
- Alteraciones en el sistema de endocannabinoides
- Aumento de la señalización glutamatérgica

**Farmacología avanzada:**

*Mecanismos de los ISRS en la ansiedad:*
- Desensibilización de autorreceptores 5-HT1A en rafe dorsal (2-4 semanas)
- Aumento de serotonina en la amígdala y corteza prefrontal
- Neurogénesis hipocampal (contribuye al efecto ansiolítico)
- Modulación de la señalización CRH
- El empeoramiento paradójico inicial se debe a la activación de autorreceptores

*Pregabalina - mecanismo detallado:*
- Unión a subunidad alfa-2-delta de canales de calcio voltaje-dependientes
- Reducción de la liberación de glutamato, norepinefrina y sustancia P
- Eficacia comparable a benzodiazepinas sin los mismos riesgos
- Inicio de acción más rápido que ISRS (primera semana)
- Consideración: potencial de abuso en algunos pacientes

*Agomatina (investigacional):*
- Agonista de receptores de melatonina MT1/MT2
- Antagonista de receptores 5-HT2C
- Resincronización de ritmos circadianos
- Potencial ansiolítico con perfil de efectos secundarios favorable

*Moduladores glutamatérgicos:*
- Riluzol: inhibidor de liberación de glutamato (estudios abiertos positivos)
- D-cicloserina: agonista parcial NMDA que potencia la exposición terapéutica
- Ketamina: evidencia preliminar para ansiedad resistente

**Psicoterapias de tercera generación:**

*Terapia de Aceptación y Compromiso (ACT):*
- Aceptación de la experiencia interna (vs. luchar contra la ansiedad)
- Defusión cognitiva (separarse de los pensamientos)
- Compromiso con acciones basadas en valores
- Eficacia comparable a TCC en ensayos recientes

*Terapia Metacognitiva (Wells):*
- Aborda las creencias SOBRE la preocupación (metacogniciones)
- Creencias positivas: "preocuparme me prepara"
- Creencias negativas: "mi preocupación es incontrolable y peligrosa"
- Atención separada (detached mindfulness)
- Evidencia de eficacia superior a TCC en algunos ensayos

*MBSR y MBCT:*
- Reducción de Estrés Basada en Mindfulness
- Terapia Cognitiva Basada en Mindfulness
- Atención plena como alternativa a la preocupación
- Reducción de la reactividad amigdalina demostrada por neuroimagen

**Comorbilidad:**
- TDM: 60-70% de comorbilidad a lo largo de la vida
- Otros trastornos de ansiedad: 50%+
- Trastorno por uso de sustancias: 30%
- Dolor crónico: relación bidireccional
- Síndrome de intestino irritable: eje intestino-cerebro compartido
- Enfermedades cardiovasculares: la ansiedad crónica es factor de riesgo

**Factores específicos en poblaciones hispanas/latinas:**

*Estrés por aculturación:*
- Conflicto entre valores culturales de origen y cultura de acogida
- Estrés por discriminación percibida y experimentada
- Estatus migratorio como fuente de ansiedad crónica
- Duelo por pérdida de la red social del país de origen

*Factores protectores culturales:*
- Familismo: red de apoyo familiar fuerte
- Personalismo: valoración de relaciones personales cálidas
- Marianismo/espiritualidad: fuente de resiliencia y significado
- Comunidad: redes de apoyo informal

---
## Explanation

**Neurocircuit models of GAD:**

*Eysenck model (attentional bias):*
- Hypervigilance toward threatening stimuli
- Difficulty disengaging from threat
- Interpretive bias: ambiguous stimuli interpreted as threatening
- Neural correlate: amygdala hyperactivity to ambiguous facial stimuli

*Emotion regulation model:*
- Deficit in use of adaptive regulation strategies
- Overuse of worry as avoidance strategy
- Deficient cognitive reappraisal (ventrolateral prefrontal cortex)
- Excessive emotional suppression
- Worry prevents complete emotional processing

*Predictive processing model:*
- Inflated threat probability estimates
- Internal models of a dangerous and unpredictable world
- Prediction errors processed as threat confirmation
- Bayesian updating biased toward negative information

**Advanced neuroimaging:**

*Structural findings:*
- Amygdala volume increase in some studies
- Hippocampal volume reduction
- White matter alterations (frontolimbic tracts)
- Cortical changes in insula and cingulate cortex

*Functional findings (fMRI):*
- Amygdala hyperactivation to fearful and ambiguous faces
- Failure of regulatory prefrontal activation
- Altered functional connectivity between amygdala and prefrontal cortex
- Hyperactive salience network
- Hypoactive central executive network during worry

*Neurochemistry (PET/SPECT):*
- Reduced GABA-A (benzodiazepine) receptor binding in GAD
- Reduced 5-HT1A receptors in cortex and raphe
- Endocannabinoid system alterations
- Increased glutamatergic signaling

**Advanced pharmacology:**

*SSRI mechanisms in anxiety:*
- Desensitization of 5-HT1A autoreceptors in dorsal raphe (2-4 weeks)
- Increased serotonin in amygdala and prefrontal cortex
- Hippocampal neurogenesis (contributes to anxiolytic effect)
- Modulation of CRH signaling
- Initial paradoxical worsening due to autoreceptor activation

*Pregabalin - detailed mechanism:*
- Binding to alpha-2-delta subunit of voltage-dependent calcium channels
- Reduction of glutamate, norepinephrine, and substance P release
- Comparable efficacy to benzodiazepines without the same risks
- Faster onset than SSRIs (first week)
- Consideration: abuse potential in some patients

*Agomelatine (investigational in US):*
- MT1/MT2 melatonin receptor agonist
- 5-HT2C receptor antagonist
- Circadian rhythm resynchronization
- Anxiolytic potential with favorable side effect profile

*Glutamatergic modulators:*
- Riluzole: glutamate release inhibitor (positive open studies)
- D-cycloserine: NMDA partial agonist that potentiates therapeutic exposure
- Ketamine: preliminary evidence for resistant anxiety

**Third-wave psychotherapies:**

*Acceptance and Commitment Therapy (ACT):*
- Acceptance of internal experience (vs. fighting anxiety)
- Cognitive defusion (separating from thoughts)
- Commitment to values-based actions
- Comparable efficacy to CBT in recent trials

*Metacognitive Therapy (Wells):*
- Addresses beliefs ABOUT worry (metacognitions)
- Positive beliefs: "worrying prepares me"
- Negative beliefs: "my worry is uncontrollable and dangerous"
- Detached mindfulness
- Evidence of superior efficacy to CBT in some trials

*MBSR and MBCT:*
- Mindfulness-Based Stress Reduction
- Mindfulness-Based Cognitive Therapy
- Mindfulness as an alternative to worry
- Amygdala reactivity reduction demonstrated by neuroimaging

**Comorbidity:**
- MDD: 60-70% lifetime comorbidity
- Other anxiety disorders: 50%+
- Substance use disorder: 30%
- Chronic pain: bidirectional relationship
- Irritable bowel syndrome: shared gut-brain axis
- Cardiovascular disease: chronic anxiety is a risk factor

**Hispanic/Latino population-specific factors:**

*Acculturative stress:*
- Conflict between cultural values of origin and host culture
- Perceived and experienced discrimination stress
- Immigration status as source of chronic anxiety
- Grief over loss of home country social network

*Cultural protective factors:*
- Familismo: strong family support network
- Personalismo: valuing warm personal relationships
- Marianismo/spirituality: source of resilience and meaning
- Community: informal support networks`,
      keyTerms: [
        {
          term: 'procesamiento predictivo / predictive processing',
          definition:
            'Modelo computacional del cerebro donde las predicciones internas se comparan con el input sensorial. En el TAG, las predicciones están sesgadas hacia la amenaza. | Computational brain model where internal predictions are compared with sensory input. In GAD, predictions are biased toward threat.',
        },
        {
          term: 'terapia metacognitiva',
          definition:
            'Enfoque terapéutico que aborda las creencias sobre la propia preocupación (metacogniciones), no solo el contenido de la preocupación. | Therapeutic approach addressing beliefs about one\'s own worry (metacognitions), not just worry content.',
        },
        {
          term: 'D-cicloserina / D-cycloserine',
          definition:
            'Agonista parcial del receptor NMDA que potencia el aprendizaje de extinción durante la terapia de exposición, mejorando los resultados de la TCC. | NMDA receptor partial agonist that potentiates extinction learning during exposure therapy, improving CBT outcomes.',
        },
        {
          term: 'defusión cognitiva',
          definition:
            'Técnica de la ACT que consiste en observar los pensamientos como eventos mentales transitorios en lugar de verdades absolutas. Reduce el impacto emocional de los pensamientos ansiosos. | ACT technique of observing thoughts as transient mental events rather than absolute truths. Reduces the emotional impact of anxious thoughts.',
        },
        {
          term: 'estrés por aculturación / acculturative stress',
          definition:
            'Estrés psicológico derivado del proceso de adaptación a una nueva cultura, que incluye conflictos de identidad, discriminación y pérdida cultural. | Psychological stress derived from the process of adapting to a new culture, including identity conflicts, discrimination, and cultural loss.',
        },
      ],
      clinicalNotes:
        'Consideraciones clínicas avanzadas: La D-cicloserina (50 mg) administrada 1 hora antes de sesiones de exposición TCC puede potenciar la extinción del miedo. La pregabalina tiene inicio de acción más rápido que ISRS y puede usarse como puente terapéutico. La terapia metacognitiva de Wells muestra resultados superiores a la TCC en algunos ensayos para TAG. Evaluar siempre la comorbilidad con depresión (GAD-7 + PHQ-9). En poblaciones hispanas, el modelo de estrés por aculturación debe incorporarse en la formulación del caso. Las intervenciones basadas en mindfulness tienen buena aceptación cultural en muchas comunidades latinas por la conexión con prácticas contemplativas tradicionales. La telepsiquiatría en español aumenta significativamente el acceso y la adherencia en comunidades rurales. | Advanced clinical considerations: D-cycloserine (50 mg) administered 1 hour before CBT exposure sessions can potentiate fear extinction. Pregabalin has faster onset than SSRIs and can be used as a therapeutic bridge. Wells\' metacognitive therapy shows superior results to CBT in some GAD trials. Always evaluate depression comorbidity (GAD-7 + PHQ-9). In Hispanic populations, the acculturative stress model should be incorporated in case formulation. Mindfulness-based interventions have good cultural acceptance in many Latino communities through connection with traditional contemplative practices. Telepsychiatry in Spanish significantly increases access and adherence in rural communities.',
    },
    5: {
      level: 5,
      summary:
        'La investigación de vanguardia en TAG se centra en biotipos de ansiedad basados en circuitos neurales, biomarcadores de selección de tratamiento, terapéuticas basadas en neuroplasticidad (psicodélicos, neuromodulación), e intervenciones computacionales de modificación de sesgos cognitivos. La equidad en salud mental requiere modelos culturalmente responsivos para poblaciones hispanas. | Cutting-edge GAD research focuses on neural circuit-based anxiety biotypes, treatment selection biomarkers, neuroplasticity-based therapeutics (psychedelics, neuromodulation), and computational cognitive bias modification interventions. Mental health equity requires culturally responsive models for Hispanic populations.',
      explanation: `## Explicación

**Biotipos de ansiedad y nosología dimensional:**

*Limitaciones del diagnóstico categórico:*
- El TAG tiene alta heterogeneidad fenotípica
- Comorbilidad la regla, no la excepción (>70% con otro trastorno)
- Límites borrosos con TDM, otros trastornos de ansiedad
- El mismo diagnóstico puede tener mecanismos muy diferentes

*Biotipos propuestos (Williams, Etkin):*
- "Ansiedad somática tensional": predominio de tensión muscular, fatiga
- "Ansiedad rumitativa": predominio de preocupación verbal abstracta
- "Ansiedad por excitación autonómica": síntomas de activación simpática
- Cada biotipo puede responder diferente al tratamiento
- Biomarcadores de neuroimagen para clasificación

*Abordaje dimensional - RDoC:*
- Dominio de valencia negativa: sensibilización y respuesta al estrés
- Dominio de valencia positiva: anhedonia comórbida
- Sistemas de excitación: hiperexcitación autonómica
- Sistemas cognitivos: sesgos atencionales e interpretativos
- Procesos sociales: ansiedad social comórbida

**Biomarcadores y predicción de respuesta terapéutica:**

*Neuroimagen como biomarcador:*
- La activación de la corteza cingulada anterior rostral predice respuesta a ISRS
- La conectividad amígdala-prefrontal predice respuesta a TCC
- EEG cuantitativo: la potencia theta frontal como predictor
- La asimetría frontal alfa predice respuesta diferencial a TCC vs. medicación

*Biomarcadores moleculares:*
- Cortisol en cabello como biomarcador de estrés crónico
- BDNF periférico como marcador de tratamiento
- Ratio cortisol/DHEA-S como indicador de capacidad de resiliencia
- Panel inflamatorio (CRP, IL-6) para estratificación
- Metabolómica: perfiles de GABA y glutamato periféricos

*Biomarcadores digitales:*
- Variabilidad de la frecuencia cardíaca (HRV) como indicador de tono vagal
- Electrodermografía para respuesta a amenaza
- Patrones de sueño por actigrafía
- Análisis de voz y lenguaje por IA
- Phenotyping digital pasivo por smartphone

**Terapéuticas de nueva generación:**

*Modificación de sesgos cognitivos (CBM):*
- Entrenamiento computarizado para redirigir atención lejos de la amenaza
- CBM-I: modificación del sesgo interpretativo
- CBM-A: modificación del sesgo atencional
- Resultados mixtos como tratamiento independiente
- Potencial como augmentación de TCC
- Aplicaciones móviles para entrega escalable

*Psicodélicos para la ansiedad:*
- Psilocibina: ensayos para ansiedad existencial y TAG
- MDMA: efecto pro-social y reducción del miedo condicionado
- LSD microdosis: evidencia anecdótica, ensayos en desarrollo
- Mecanismo: neuroplasticidad serotoninérgica, flexibilización cognitiva
- Consideraciones culturales: uso tradicional en comunidades latinoamericanas

*Neuromodulación:*
- EMT sobre corteza prefrontal dorsolateral: modulación del control cognitivo
- tDCS: estimulación transcraneal de corriente directa
- Estimulación del nervio vago (VNS): regulación autonómica
- Neurofeedback: entrenamiento de patrones EEG

*Cannabinoides:*
- CBD (cannabidiol): evidencia preclínica y preliminar para ansiedad
- Mecanismo: modulación del sistema endocannabinoide, receptores 5-HT1A
- Sin los efectos psicoactivos del THC
- Regulación inconsistente, calidad variable de productos
- Necesidad de ensayos clínicos bien diseñados

**Inteligencia artificial en el diagnóstico y tratamiento:**

*Detección y diagnóstico:*
- Modelos de machine learning para detección temprana
- NLP para análisis de narrativas del paciente
- Reconocimiento de patrones en datos de smartphone
- Wearables para monitoreo fisiológico continuo

*Tratamientos digitales:*
- Apps de TCC validadas (ej., Woebot, adaptaciones en español)
- Realidad virtual para exposición
- Chatbots terapéuticos como primer punto de contacto
- Intervenciones escalonadas guiadas por IA

**Investigación en equidad de salud mental para poblaciones hispanas:**

*Modelos de atención integrada:*
- Modelo IMPACT adaptado culturalmente para atención primaria
- Promotoras de salud como facilitadoras de navegación
- Atención en iglesias y centros comunitarios
- Telepsiquiatría bilingüe para eliminar barreras geográficas

*Investigación de implementación:*
- Adaptación cultural de intervenciones basadas en evidencia
- Marco RE-AIM para evaluar alcance e implementación
- Diseño participativo con comunidades latinas
- Ensayos pragmáticos en entornos comunitarios

*Farmacogenómica en poblaciones latinas:*
- Variabilidad en CYP2D6 y CYP2C19 por origen étnico
- Mestizaje genético complica las categorías étnicas simples
- Necesidad de normas farmacogenómicas para poblaciones admixtas
- Proyecto All of Us del NIH: inclusión de diversidad genética

**Direcciones futuras:**
- Tratamiento personalizado basado en biotipos de ansiedad
- Terapéuticas de acción rápida accesibles (vs. semanas de espera)
- Prevención basada en identificación temprana de riesgo
- Integración de perspectivas culturales en la investigación
- Modelos escalables para cerrar la brecha de tratamiento
- Equidad en acceso a innovaciones terapéuticas

---
## Explanation

**Anxiety biotypes and dimensional nosology:**

*Categorical diagnosis limitations:*
- GAD has high phenotypic heterogeneity
- Comorbidity the rule, not the exception (>70% with another disorder)
- Blurred boundaries with MDD, other anxiety disorders
- Same diagnosis can have very different mechanisms

*Proposed biotypes (Williams, Etkin):*
- "Tensional somatic anxiety": predominance of muscle tension, fatigue
- "Ruminative anxiety": predominance of abstract verbal worry
- "Autonomic arousal anxiety": sympathetic activation symptoms
- Each biotype may respond differently to treatment
- Neuroimaging biomarkers for classification

*Dimensional approach - RDoC:*
- Negative valence domain: sensitization and stress response
- Positive valence domain: comorbid anhedonia
- Arousal systems: autonomic hyperarousal
- Cognitive systems: attentional and interpretive biases
- Social processes: comorbid social anxiety

**Biomarkers and treatment response prediction:**

*Neuroimaging as biomarker:*
- Rostral anterior cingulate cortex activation predicts SSRI response
- Amygdala-prefrontal connectivity predicts CBT response
- Quantitative EEG: frontal theta power as predictor
- Alpha frontal asymmetry predicts differential CBT vs. medication response

*Molecular biomarkers:*
- Hair cortisol as chronic stress biomarker
- Peripheral BDNF as treatment marker
- Cortisol/DHEA-S ratio as resilience capacity indicator
- Inflammatory panel (CRP, IL-6) for stratification
- Metabolomics: peripheral GABA and glutamate profiles

*Digital biomarkers:*
- Heart rate variability (HRV) as vagal tone indicator
- Electrodermal activity for threat response
- Sleep patterns by actigraphy
- AI-based voice and language analysis
- Passive digital phenotyping by smartphone

**Next-generation therapeutics:**

*Cognitive bias modification (CBM):*
- Computerized training to redirect attention away from threat
- CBM-I: interpretive bias modification
- CBM-A: attentional bias modification
- Mixed results as standalone treatment
- Potential as CBT augmentation
- Mobile apps for scalable delivery

*Psychedelics for anxiety:*
- Psilocybin: trials for existential anxiety and GAD
- MDMA: pro-social effect and conditioned fear reduction
- LSD microdoses: anecdotal evidence, trials in development
- Mechanism: serotonergic neuroplasticity, cognitive flexibilization
- Cultural considerations: traditional use in Latin American communities

*Neuromodulation:*
- TMS over dorsolateral prefrontal cortex: cognitive control modulation
- tDCS: transcranial direct current stimulation
- Vagus nerve stimulation (VNS): autonomic regulation
- Neurofeedback: EEG pattern training

*Cannabinoids:*
- CBD (cannabidiol): preclinical and preliminary evidence for anxiety
- Mechanism: endocannabinoid system modulation, 5-HT1A receptors
- Without the psychoactive effects of THC
- Inconsistent regulation, variable product quality
- Need for well-designed clinical trials

**Artificial intelligence in diagnosis and treatment:**

*Detection and diagnosis:*
- Machine learning models for early detection
- NLP for patient narrative analysis
- Smartphone data pattern recognition
- Wearables for continuous physiological monitoring

*Digital treatments:*
- Validated CBT apps (e.g., Woebot, Spanish adaptations)
- Virtual reality for exposure
- Therapeutic chatbots as first point of contact
- AI-guided stepped interventions

**Mental health equity research for Hispanic populations:**

*Integrated care models:*
- Culturally adapted IMPACT model for primary care
- Community health workers (promotoras) as navigation facilitators
- Care in churches and community centers
- Bilingual telepsychiatry to eliminate geographic barriers

*Implementation research:*
- Cultural adaptation of evidence-based interventions
- RE-AIM framework for evaluating reach and implementation
- Participatory design with Latino communities
- Pragmatic trials in community settings

*Pharmacogenomics in Latino populations:*
- CYP2D6 and CYP2C19 variability by ethnic origin
- Genetic admixture complicates simple ethnic categories
- Need for pharmacogenomic norms for admixed populations
- NIH's All of Us project: inclusion of genetic diversity

**Future directions:**
- Personalized treatment based on anxiety biotypes
- Accessible rapid-acting therapeutics (vs. weeks of waiting)
- Prevention based on early risk identification
- Integration of cultural perspectives in research
- Scalable models to close the treatment gap
- Equity in access to therapeutic innovations`,
      keyTerms: [
        {
          term: 'modificación de sesgos cognitivos (CBM)',
          definition:
            'Intervención computarizada que entrena al cerebro a redirigir la atención lejos de estímulos amenazantes y hacia interpretaciones benignas. En investigación como augmentación de TCC. | Computerized intervention training the brain to redirect attention away from threatening stimuli toward benign interpretations. Under research as CBT augmentation.',
        },
        {
          term: 'variabilidad de frecuencia cardíaca (HRV)',
          definition:
            'Variación temporal entre latidos cardíacos consecutivos. Refleja el tono vagal y la flexibilidad del sistema nervioso autónomo. Reducida en el TAG. | Temporal variation between consecutive heartbeats. Reflects vagal tone and autonomic nervous system flexibility. Reduced in GAD.',
        },
        {
          term: 'fenotipaje digital / digital phenotyping',
          definition:
            'Uso de datos de sensores de smartphone y wearables para caracterizar patrones de comportamiento y fisiología relevantes a la salud mental en tiempo real. | Use of smartphone and wearable sensor data to characterize behavior and physiology patterns relevant to mental health in real time.',
        },
        {
          term: 'modelo IMPACT',
          definition:
            'Modelo de atención colaborativa para integrar salud mental en atención primaria. Incluye gestor de casos, psiquiatra consultor y médico de atención primaria. Adaptable culturalmente. | Collaborative care model for integrating mental health in primary care. Includes case manager, consulting psychiatrist, and primary care physician. Culturally adaptable.',
        },
      ],
      clinicalNotes:
        'Fronteras de la práctica clínica: Los biotipos de ansiedad están en desarrollo pero aún no son aplicables en la clínica. La farmacogenómica es clínicamente útil para pacientes que no responden (paneles CYP2D6/CYP2C19). La D-cicloserina para potenciar la exposición TCC muestra resultados prometedores pero mixtos. El neurofeedback y la VNS transcutánea son opciones emergentes para pacientes que no responden a tratamientos estándar. Para poblaciones hispanas: las intervenciones basadas en promotoras de salud muestran mayor alcance y aceptabilidad. La telepsiquiatría bilingüe es probablemente la innovación con mayor impacto potencial en equidad de acceso. Los programas de TCC culturalmente adaptada (como el modelo de Interian para latinos) deben ser la norma, no la excepción. La Línea 988 en español debe promoverse activamente en comunidades latinas. | Clinical practice frontiers: Anxiety biotypes are under development but not yet clinically applicable. Pharmacogenomics is clinically useful for non-responders (CYP2D6/CYP2C19 panels). D-cycloserine for potentiating CBT exposure shows promising but mixed results. Neurofeedback and transcutaneous VNS are emerging options for patients not responding to standard treatments. For Hispanic populations: promotora-based interventions show greater reach and acceptability. Bilingual telepsychiatry is probably the innovation with greatest potential equity impact. Culturally adapted CBT programs (like Interian\'s model for Latinos) should be the norm, not the exception. The 988 Lifeline in Spanish must be actively promoted in Latino communities.',
    },
  },

  media: [],

  citations: [
    {
      id: 'ref-dsm5-tr-gad',
      type: 'textbook',
      title: 'Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, Text Revision (DSM-5-TR)',
      authors: ['American Psychiatric Association'],
      source: 'American Psychiatric Publishing, 2022',
      chapter: 'Anxiety Disorders',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-apa-gad-guidelines',
      type: 'article',
      title: 'APA Practice Guidelines for Generalized Anxiety Disorder',
      authors: ['American Psychiatric Association'],
      source: 'American Journal of Psychiatry',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-dugas-gad',
      type: 'textbook',
      title: 'Cognitive-Behavioral Treatment for Generalized Anxiety Disorder: From Science to Practice',
      authors: ['Dugas MJ', 'Robichaud M'],
      source: 'Routledge',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-interian-latino-cbt',
      type: 'article',
      title: 'Culturally Adapted CBT for Latino Primary Care Patients with Anxiety',
      authors: ['Interian A', 'Allen LA', 'Gara MA'],
      source: 'Cognitive and Behavioral Practice',
      license: 'CC BY 4.0',
    },
  ],

  crossReferences: [
    { targetId: 'psychiatry-generalized-anxiety-disorder', targetType: 'condition', relationship: 'related', label: 'GAD (English primary)' },
    { targetId: 'condition-depresion-depression', targetType: 'condition', relationship: 'related', label: 'Depresión Mayor / Major Depression' },
    { targetId: 'condition-trastorno-estres-postraumatico-ptsd', targetType: 'condition', relationship: 'related', label: 'TEPT / PTSD' },
    { targetId: 'psychiatry-ssris', targetType: 'topic', relationship: 'see-also', label: 'SSRIs / ISRS' },
    { targetId: 'psychiatry-anxiolytics', targetType: 'topic', relationship: 'see-also', label: 'Anxiolytics / Ansiolíticos' },
    { targetId: 'psychiatry-panic-disorder', targetType: 'condition', relationship: 'related', label: 'Panic Disorder / Trastorno de Pánico' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['psychiatry', 'mental-health', 'pharmacology', 'cultural-competency'],
    keywords: [
      'ansiedad',
      'anxiety',
      'TAG',
      'GAD',
      'preocupación',
      'worry',
      'TCC',
      'CBT',
      'ISRS',
      'SSRI',
      'nervios',
      'ataque de nervios',
      'buspirona',
      'benzodiazepinas',
      'mindfulness',
      'salud mental latina',
      'Latino mental health',
    ],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['psychiatry', 'medicine'],
    },
  },

  createdAt: '2026-02-05',
  updatedAt: '2026-02-05',
  version: 1,
  status: 'published',
  contributors: ['SOMA AI Content Team'],
};

export default ansiedadGeneralizadaGadContent;
