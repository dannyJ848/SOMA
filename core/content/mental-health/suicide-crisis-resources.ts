/**
 * Suicide and Crisis Resources - Contenido Educativo Bilingue
 *
 * 988 Suicide & Crisis Lifeline, warning signs, how to help,
 * and culturally relevant crisis resources for Latino communities.
 *
 * Spanish-first with English translations separated by " | "
 * Culturally sensitive content for Spanish-speaking populations.
 */

import { EducationalContent } from '../types';

export const suicideCrisisResourcesContent: EducationalContent = {
  id: 'topic-suicide-crisis-resources',
  type: 'topic',
  name: 'Suicide and Crisis Resources (988)',
  nameEs: 'Recursos de Crisis y Suicidio (988)',
  alternateNames: [
    'Prevencion del Suicidio | Suicide Prevention',
    'Linea 988 | 988 Lifeline',
    'Ayuda en Crisis | Crisis Help',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'Si usted o alguien que conoce esta pensando en hacerse dano, hay ayuda disponible AHORA en espanol. Llame o envie un texto al 988. No esta solo/a. La crisis es temporal y hay personas listas para ayudarle. | If you or someone you know is thinking about harming themselves, help is available NOW in Spanish. Call or text 988. You are not alone. The crisis is temporary and there are people ready to help.',
      explanation: `**SI ESTA EN CRISIS AHORA | IF YOU ARE IN CRISIS NOW:**

- **988**: Llame o envie texto (espanol disponible 24/7) | Call or text (Spanish available 24/7)
- **911**: Si hay peligro inmediato | If there is immediate danger
- **Linea de Crisis por texto**: Envie "HOLA" al 741741 | Text "HELLO" to 741741
- **SAMHSA**: 1-800-662-4357 (espanol disponible 24/7)

**Que es una crisis de salud mental? | What is a mental health crisis?**

Una crisis es cuando una persona siente que no puede seguir, que el dolor es demasiado, o que no hay otra salida. No significa que sea debil -- significa que esta sufriendo y necesita ayuda. | A crisis is when a person feels they cannot go on, that the pain is too much, or that there is no other way out. It does not mean they are weak -- it means they are suffering and need help.

**Senales de que alguien puede estar en crisis | Signs someone may be in crisis:**

- Hablar de querer morir o hacerse dano | Talking about wanting to die or harm themselves
- Decir cosas como "seria mejor si yo no estuviera" | Saying things like "it would be better if I were not here"
- Regalar sus cosas personales | Giving away personal belongings
- Despedirse de personas como si no fuera a regresar | Saying goodbye as if not coming back
- Aislarse completamente | Completely isolating themselves
- Cambios dramaticos en el comportamiento | Dramatic behavior changes
- Usar mas alcohol o drogas | Using more alcohol or drugs
- Hablar de sentirse como una carga para otros | Talking about feeling like a burden to others
- Buscar formas de hacerse dano (armas, pastillas) | Looking for ways to harm themselves (weapons, pills)

**Que hacer si alguien esta en crisis | What to do if someone is in crisis:**

- **PREGUNTE directamente**: "Estas pensando en hacerte dano?" | **ASK directly**: "Are you thinking about hurting yourself?"
  - Preguntar NO causa suicidio -- puede salvar una vida | Asking does NOT cause suicide -- it can save a life
- **ESCUCHE** sin juzgar | **LISTEN** without judging
- **ACOMPANE**: No deje a la persona sola | **STAY**: Do not leave the person alone
- **LLAME al 988** o lleve a la persona a urgencias | **CALL 988** or take the person to the ER
- **RETIRE** el acceso a cosas peligrosas (armas, medicamentos, objetos filosos) | **REMOVE** access to dangerous things (guns, medications, sharp objects)

**En nuestra comunidad | In our community:**

- El suicidio no es pecado ni cobardia -- es el resultado de un dolor insoportable | Suicide is not a sin or cowardice -- it is the result of unbearable pain
- Las adolescentes latinas tienen la tasa mas alta de intentos de suicidio en EE.UU. | Latina adolescents have the highest rate of suicide attempts in the U.S.
- Hablar del suicidio NO lo causa -- el silencio es mas peligroso | Talking about suicide does NOT cause it -- silence is more dangerous
- La fe y la oracion pueden ayudar, pero NO sustituyen la ayuda profesional | Faith and prayer can help, but do NOT replace professional help
- Buscar ayuda es la decision mas valiente que puede tomar | Seeking help is the bravest decision you can make`,
      keyTerms: [
        {
          term: '988',
          definition:
            'Numero de telefono nacional para crisis de suicidio y salud mental, disponible en espanol 24/7 | National phone number for suicide and mental health crisis, available in Spanish 24/7',
        },
        {
          term: 'crisis de salud mental | mental health crisis',
          definition:
            'Momento en el que una persona siente que no puede seguir y necesita ayuda inmediata | Moment when a person feels they cannot go on and needs immediate help',
        },
        {
          term: 'ideacion suicida | suicidal ideation',
          definition:
            'Pensamientos sobre querer morir o hacerse dano -- es una senal de que la persona necesita ayuda urgente | Thoughts about wanting to die or harm oneself -- it is a sign the person needs urgent help',
        },
        {
          term: 'plan de seguridad | safety plan',
          definition:
            'Lista de pasos que una persona puede seguir cuando tiene pensamientos suicidas para mantenerse seguro/a | List of steps a person can follow when having suicidal thoughts to stay safe',
        },
      ],
      analogies: [
        'Una crisis suicida es como estar en un tunel oscuro -- en ese momento no puedes ver la salida, pero si la hay. El 988 es la linterna que te ayuda a encontrarla. | A suicidal crisis is like being in a dark tunnel -- in that moment you cannot see the exit, but it is there. 988 is the flashlight that helps you find it.',
        'Preguntar a alguien si tiene pensamientos suicidas es como preguntarle si necesita un salvavidas -- no lo vas a empujar al agua, le estas ofreciendo ayuda. | Asking someone if they have suicidal thoughts is like asking if they need a life preserver -- you are not pushing them into the water, you are offering help.',
      ],
      examples: [
        'Rosa noto que su hijo adolescente estaba regalando sus cosas y se habia aislado. En vez de ignorarlo, le pregunto directamente si estaba pensando en hacerse dano. El le dijo que si. Llamaron juntos al 988 y recibio ayuda. | Rosa noticed her teenage son was giving away his things and had isolated himself. Instead of ignoring it, she asked him directly if he was thinking of harming himself. He said yes. They called 988 together and he received help.',
      ],
      patientCounselingPoints: [
        'Si esta pensando en hacerse dano, llame al 988 AHORA. Hay personas en espanol esperando para ayudarle. | If you are thinking of harming yourself, call 988 NOW. There are Spanish-speaking people waiting to help.',
        'Preguntar directamente sobre el suicidio NO es peligroso -- puede salvar una vida. | Asking directly about suicide is NOT dangerous -- it can save a life.',
        'La crisis es temporal. Con ayuda, el dolor puede disminuir. | The crisis is temporary. With help, the pain can decrease.',
        'Retire armas de fuego y medicamentos del alcance de la persona en crisis. | Remove firearms and medications from the reach of the person in crisis.',
      ],
    },
    2: {
      level: 2,
      summary:
        'El suicidio es prevenible. Los factores de riesgo en la comunidad latina incluyen depresion no tratada, separacion familiar, estres migratorio, abuso de sustancias y barreras de acceso a servicios. Las latinas adolescentes tienen la tasa mas alta de intentos de suicidio en EE.UU. La intervencion temprana, los planes de seguridad, la reduccion de acceso a medios letales y los recursos en espanol son herramientas criticas de prevencion. | Suicide is preventable. Risk factors in the Latino community include untreated depression, family separation, migratory stress, substance abuse, and barriers to service access. Latina adolescents have the highest suicide attempt rate in the U.S. Early intervention, safety plans, lethal means restriction, and Spanish-language resources are critical prevention tools.',
      explanation: `**Epidemiologia del suicidio en la comunidad latina | Suicide epidemiology in the Latino community:**

- Suicidio es la 2da causa de muerte en jovenes latinos de 10-24 anos | Suicide is the 2nd leading cause of death in Latino youth ages 10-24
- Las latinas adolescentes: 18.9% reportan intento de suicidio (CDC YRBS) | Adolescent Latinas: 18.9% report suicide attempt (CDC YRBS)
- Hombres latinos: Completan suicidio a tasas mas altas (usan metodos mas letales) | Latino men: Complete suicide at higher rates (use more lethal methods)
- Adultos mayores latinos: Riesgo subestimado | Older Latino adults: Underestimated risk
- Los latinos tienen menos acceso a servicios de crisis en espanol | Latinos have less access to crisis services in Spanish

**Factores de riesgo especificos | Specific risk factors:**

*Factores individuales | Individual factors:*
- Depresion, ansiedad, TEPT no tratados | Untreated depression, anxiety, PTSD
- Historial previo de intentos | Prior attempt history
- Abuso de alcohol y sustancias | Alcohol and substance abuse
- Desesperanza cronica | Chronic hopelessness
- Dolor cronico | Chronic pain

*Factores sociales y culturales | Social and cultural factors:*
- Separacion familiar por migracion | Family separation due to migration
- Estatus migratorio incierto y miedo a deportacion | Uncertain immigration status and fear of deportation
- Aislamiento social y linguistico | Social and linguistic isolation
- Discriminacion y racismo | Discrimination and racism
- Conflicto bicultural en adolescentes | Bicultural conflict in adolescents
- Violencia domestica | Domestic violence
- Estigma de salud mental que impide buscar ayuda | Mental health stigma preventing help-seeking

**Factores protectores | Protective factors:**

- Conexiones familiares fuertes (familismo) | Strong family connections (familismo)
- Fe y comunidad religiosa | Faith and religious community
- Identidad cultural positiva | Positive cultural identity
- Acceso a servicios de salud mental en espanol | Access to mental health services in Spanish
- Razones para vivir (hijos, familia, fe) | Reasons for living (children, family, faith)

**Plan de seguridad (Stanley & Brown) | Safety plan (Stanley & Brown):**

1. Reconocer senales de advertencia personales | Recognize personal warning signs
2. Usar estrategias internas de afrontamiento | Use internal coping strategies
3. Contactar personas que distraigan de la crisis | Contact people who distract from crisis
4. Contactar personas que puedan ayudar | Contact people who can help
5. Contactar profesionales o servicios de crisis (988) | Contact professionals or crisis services (988)
6. Hacer el entorno seguro (retirar medios letales) | Make the environment safe (remove lethal means)

**Restriccion de acceso a medios letales | Lethal means restriction:**

- Retirar o asegurar armas de fuego | Remove or secure firearms
- Guardar medicamentos bajo llave | Lock up medications
- Retirar objetos cortantes | Remove sharp objects
- Esta es una de las estrategias mas efectivas de prevencion | This is one of the most effective prevention strategies

**Recursos en espanol | Resources in Spanish:**

- **988**: Linea de Crisis (espanol 24/7) | Crisis Line (Spanish 24/7)
- **Linea de texto**: "HOLA" al 741741 | Text "HELLO" to 741741
- **SAMHSA**: 1-800-662-4357
- **The Trevor Project** (LGBTQ+ jovenes): 1-866-488-7386
- **National DV Hotline**: 1-800-799-7233 (espanol)`,
      keyTerms: [
        {
          term: 'plan de seguridad | safety plan',
          definition:
            'Lista personalizada de pasos que una persona puede seguir durante una crisis suicida para mantenerse segura | Personalized list of steps a person can follow during a suicidal crisis to stay safe',
        },
        {
          term: 'restriccion de medios letales | lethal means restriction',
          definition:
            'Reducir el acceso a metodos usados para intentar suicidio, como armas de fuego y medicamentos; una de las estrategias mas efectivas de prevencion | Reducing access to methods used for suicide attempts, such as firearms and medications; one of the most effective prevention strategies',
        },
        {
          term: 'factores de riesgo | risk factors',
          definition:
            'Caracteristicas o circunstancias que aumentan la probabilidad de que alguien considere el suicidio | Characteristics or circumstances increasing the likelihood someone will consider suicide',
        },
        {
          term: 'factores protectores | protective factors',
          definition:
            'Caracteristicas o circunstancias que reducen el riesgo de suicidio, como conexiones familiares y acceso a tratamiento | Characteristics or circumstances reducing suicide risk, such as family connections and treatment access',
        },
        {
          term: 'desesperanza | hopelessness',
          definition:
            'Sentimiento de que nada va a mejorar; uno de los predictores mas fuertes de suicidio | Feeling that nothing will get better; one of the strongest predictors of suicide',
        },
      ],
      analogies: [
        'La restriccion de medios letales es como poner una valla en el borde de un precipicio -- no quita el dolor, pero da tiempo para que la ayuda llegue. | Lethal means restriction is like putting a fence at the edge of a cliff -- it does not take away the pain, but it gives time for help to arrive.',
        'Un plan de seguridad es como un mapa de evacuacion en caso de incendio -- lo haces antes de la emergencia para saber que hacer cuando llega. | A safety plan is like a fire evacuation map -- you make it before the emergency so you know what to do when it arrives.',
      ],
      examples: [
        'Un padre latino guardo su arma de fuego en una caja con llave y le dio la llave a un vecino de confianza despues de que su hijo adolescente expreso pensamientos suicidas. Esta sola accion reduce el riesgo significativamente. | A Latino father stored his firearm in a locked box and gave the key to a trusted neighbor after his teenage son expressed suicidal thoughts. This single action significantly reduces risk.',
      ],
      patientCounselingPoints: [
        'El suicidio es prevenible. La mayoria de las personas que reciben ayuda mejoran. | Suicide is preventable. Most people who receive help improve.',
        'Retirar armas de fuego y medicamentos del hogar es una de las acciones mas efectivas que puede tomar. | Removing firearms and medications from the home is one of the most effective actions you can take.',
        'Las adolescentes latinas tienen un riesgo especialmente alto -- preste atencion a los cambios de comportamiento. | Latina adolescents are at especially high risk -- pay attention to behavior changes.',
        'Crear un plan de seguridad con su ser querido les da a ambos una guia durante la crisis. | Creating a safety plan with your loved one gives both of you a guide during crisis.',
      ],
    },
    3: {
      level: 3,
      summary:
        'La suicidologia en contextos latinos integra modelos de riesgo epidemiologico, evaluacion clinica estructurada, y marcos culturales de comprension. Los modelos contemporaneos (Interpersonal-Psychological Theory, Three-Step Theory, Fluid Vulnerability) informan intervenciones basadas en evidencia como CAMS, DBT y Safety Planning Intervention. La evaluacion cultural del riesgo suicida requiere comprender los sindromes culturales, el estres migratorio y las barreras de acceso. | Suicidology in Latino contexts integrates epidemiological risk models, structured clinical assessment, and cultural understanding frameworks. Contemporary models (Interpersonal-Psychological Theory, Three-Step Theory, Fluid Vulnerability) inform evidence-based interventions like CAMS, DBT, and Safety Planning Intervention. Cultural suicide risk assessment requires understanding cultural syndromes, migratory stress, and access barriers.',
      explanation: `**Modelos teoricos contemporaneos | Contemporary theoretical models:**

*Teoria Interpersonal-Psicologica del Suicidio (Joiner) | Interpersonal-Psychological Theory (Joiner):*
- Pertenencia frustrada (thwarted belongingness): Sentir que no perteneces | Feeling you do not belong
- Percepcion de ser una carga (perceived burdensomeness): Sentir que eres un peso para otros | Feeling you are a burden to others
- Capacidad adquirida (acquired capability): Exposicion al dolor reduce el miedo a la muerte | Pain exposure reduces fear of death
- En contexto latino: Aislamiento migratorio + culpa + exposicion a violencia | In Latino context: Migratory isolation + guilt + violence exposure

*Three-Step Theory (Klonsky & May) | Teoria de Tres Pasos:*
- Paso 1: Dolor + desesperanza -> ideacion suicida | Pain + hopelessness -> suicidal ideation
- Paso 2: Dolor + desesperanza + desconexion -> ideacion suicida fuerte | Pain + hopelessness + disconnection -> strong suicidal ideation
- Paso 3: Ideacion fuerte + capacidad -> intento suicida | Strong ideation + capability -> suicide attempt
- Aplicacion: La conexion social (familismo) es protectora en el paso 2 | Application: Social connection (familismo) is protective at step 2

**Evaluacion clinica del riesgo suicida | Clinical suicide risk assessment:**

*Evaluacion estructurada | Structured assessment:*
- Columbia-Suicide Severity Rating Scale (C-SSRS) en espanol | In Spanish
- PHQ-9 pregunta 9 (pensamientos de muerte) | PHQ-9 question 9 (thoughts of death)
- Ask Suicide-Screening Questions (ASQ) | Validated screening tool
- Entrevista clinica con evaluacion de factores proximales y distales | Clinical interview with proximal and distal factor assessment

*Factores proximales de riesgo (agudos) | Proximal risk factors (acute):*
- Crisis interpersonal reciente | Recent interpersonal crisis
- Intoxicacion aguda | Acute intoxication
- Acceso a armas de fuego | Access to firearms
- Agitacion | Agitation
- Insomnio severo | Severe insomnia
- Desesperanza aguda | Acute hopelessness
- En latinos: Evento migratorio agudo (deportacion, separacion) | In Latinos: Acute migratory event (deportation, separation)

**Intervenciones basadas en evidencia | Evidence-based interventions:**

*Safety Planning Intervention (Stanley & Brown):*
- Intervencion breve con fuerte base de evidencia | Brief intervention with strong evidence base
- Reduce intentos de suicidio en ~50% | Reduces suicide attempts by ~50%
- Adaptable culturalmente (incorporar familia, fe, comunidad) | Culturally adaptable (incorporate family, faith, community)

*CAMS (Collaborative Assessment and Management of Suicidality):*
- Evaluacion colaborativa del riesgo con el paciente | Collaborative risk assessment with the patient
- Plan de tratamiento orientado a drivers del suicidio | Treatment plan oriented to suicide drivers
- Marco terapeutico que empodera al paciente | Therapeutic framework that empowers the patient

*DBT (Dialectical Behavior Therapy):*
- Regulacion emocional, tolerancia al malestar, efectividad interpersonal | Emotion regulation, distress tolerance, interpersonal effectiveness
- Fuerte base de evidencia para reduccion de autolesiones e intentos | Strong evidence base for reducing self-harm and attempts

*Caring Contacts:*
- Contactos breves de seguimiento despues de crisis | Brief follow-up contacts after crisis
- Mensajes de texto/llamadas que comunican cuidado | Text messages/calls communicating care
- Eficaces y de bajo costo | Effective and low-cost
- Facilmente adaptables en espanol | Easily adaptable in Spanish`,
      keyTerms: [
        {
          term: 'pertenencia frustrada | thwarted belongingness',
          definition:
            'Sentimiento de no pertenecer a ningun grupo o comunidad; factor de riesgo central en la teoria de Joiner | Feeling of not belonging to any group or community; central risk factor in Joiner theory',
        },
        {
          term: 'percepcion de ser una carga | perceived burdensomeness',
          definition:
            'Creencia de que uno es una carga para los demas y que estarian mejor sin el/ella; factor de riesgo para ideacion suicida | Belief that one is a burden to others and they would be better off; risk factor for suicidal ideation',
        },
        {
          term: 'C-SSRS (Columbia-Suicide Severity Rating Scale)',
          definition:
            'Instrumento validado de evaluacion estructurada del riesgo suicida, disponible en espanol | Validated structured suicide risk assessment instrument, available in Spanish',
        },
        {
          term: 'CAMS',
          definition:
            'Collaborative Assessment and Management of Suicidality -- marco terapeutico colaborativo para el manejo del riesgo suicida | Collaborative therapeutic framework for suicide risk management',
        },
      ],
      clinicalNotes:
        'La evaluacion del riesgo suicida en pacientes latinos debe integrar: (1) Factores de riesgo universales (depresion, intentos previos, acceso a armas); (2) Factores culturales especificos (estres migratorio, separacion familiar, estigma, perdida de estatus); (3) Factores protectores culturales (familismo, fe, razon de vivir por los hijos). El C-SSRS en espanol debe usarse como evaluacion estructurada. La restriccion de medios letales es la intervencion mas inmediatamente efectiva. Los Caring Contacts son especialmente valiosos para pacientes latinos que pueden no regresar a seguimiento por barreras de acceso. Las latinas adolescentes requieren tamizaje de rutina dado su riesgo elevado. Nunca asumir que un paciente no es suicida porque tiene una familia unida o es religioso -- estos factores protectores pueden fallar bajo estres extremo. | Suicide risk assessment in Latino patients must integrate: (1) Universal risk factors (depression, prior attempts, firearm access); (2) Specific cultural factors (migratory stress, family separation, stigma, loss of status); (3) Cultural protective factors (familismo, faith, reason to live for children). The C-SSRS in Spanish should be used for structured assessment. Lethal means restriction is the most immediately effective intervention. Caring Contacts are especially valuable for Latino patients who may not return for follow-up due to access barriers. Adolescent Latinas require routine screening given their elevated risk. Never assume a patient is not suicidal because they have a close family or are religious -- these protective factors can fail under extreme stress.',
    },
    4: {
      level: 4,
      summary:
        'Los marcos avanzados de suicidologia en contextos latinos integran neurobiologia del suicidio (desregulacion serotoninergica, neuroinflamacion, deficit de toma de decisiones), modelos de trayectorias de riesgo, y ciencia de implementacion de intervenciones de prevencion. La investigacion sobre disparidades muestra que las intervenciones genericas tienen menor efectividad en comunidades latinas sin adaptacion cultural sistematica. | Advanced suicidology frameworks in Latino contexts integrate suicide neurobiology (serotonergic dysregulation, neuroinflammation, decision-making deficit), risk trajectory models, and implementation science for prevention interventions. Disparities research shows generic interventions have lower effectiveness in Latino communities without systematic cultural adaptation.',
      explanation: `**Neurobiologia del suicidio | Suicide neurobiology:**

*Desregulacion serotoninergica | Serotonergic dysregulation:*
- Serotonina reducida en corteza prefrontal ventral | Reduced serotonin in ventral prefrontal cortex
- 5-HIAA reducido en LCR | Reduced 5-HIAA in CSF
- Polimorfismos de TPH2 y SERT asociados con riesgo | TPH2 and SERT polymorphisms associated with risk
- Implicacion: Impulsividad aumentada, toma de decisiones deteriorada | Implication: Increased impulsivity, impaired decision-making

*Neuroinflamacion | Neuroinflammation:*
- Citoquinas proinflamatorias elevadas en suicidas | Elevated pro-inflammatory cytokines in suicidal individuals
- Activacion de kinurenina -> quinolinato (neurotoxica) | Kynurenine activation -> quinolinate (neurotoxic)
- Activacion microglial en CPF y CCA | Microglial activation in PFC and ACC
- Relevancia: Estres cronico migratorio -> inflamacion -> riesgo suicida | Relevance: Chronic migratory stress -> inflammation -> suicide risk

*Circuitos de toma de decisiones | Decision-making circuits:*
- CPF ventrolateral deteriorada: Deficit de inhibicion | Impaired ventrolateral PFC: Inhibition deficit
- Corteza orbitofrontal: Evaluacion alterada de riesgo-beneficio | Orbitofrontal cortex: Altered risk-benefit evaluation
- En crisis: "Vision de tunel" cognitiva | In crisis: Cognitive "tunnel vision"
- Implicacion: La restriccion de medios da tiempo para que la CPF se recupere | Implication: Means restriction gives time for PFC to recover

**Modelos de trayectorias de riesgo | Risk trajectory models:**

*Modelo de vulnerabilidad fluida (Rudd) | Fluid Vulnerability model (Rudd):*
- Riesgo de base (cronico) + activacion aguda = riesgo total | Baseline (chronic) risk + acute activation = total risk
- Factores cronicos: Depresion, historial de intentos, personalidad | Chronic factors: Depression, attempt history, personality
- Factores agudos: Crisis interpersonal, intoxicacion, acceso a medios | Acute factors: Interpersonal crisis, intoxication, means access
- En latinos: Factores cronicos (estres migratorio) + agudos (deportacion, separacion) | In Latinos: Chronic (migratory stress) + acute (deportation, separation)

**Intervenciones avanzadas | Advanced interventions:**

*Zero Suicide Model:*
- Enfoque de sistemas de salud para eliminar suicidios prevenibles | Health system approach to eliminate preventable suicides
- Componentes: Formacion del personal, tamizaje universal, evaluacion, planificacion de seguridad, medios letales, seguimiento | Components: Staff training, universal screening, assessment, safety planning, lethal means, follow-up
- Adaptacion cultural: Integracion de promotores de salud, materiales en espanol | Cultural adaptation: Integration of promotores de salud, Spanish materials

*Brief Cognitive Behavioral Therapy for Suicide (BCBT):*
- 12 sesiones enfocadas en prevenir la recurrencia | 12 sessions focused on preventing recurrence
- Narrativa del intento, plan de seguridad, reestructuracion cognitiva | Attempt narrative, safety plan, cognitive restructuring
- Reduce intentos en ~60% (Rudd et al.) | Reduces attempts by ~60%

*Postvention (intervencion despues de un suicidio):*
- Apoyo a sobrevivientes de perdida por suicidio | Support for suicide loss survivors
- Prevencion de contagio en comunidades | Community contagion prevention
- Especialmente importante en comunidades latinas unidas | Especially important in tight-knit Latino communities`,
      keyTerms: [
        {
          term: 'vulnerabilidad fluida | fluid vulnerability',
          definition:
            'Modelo de Rudd donde el riesgo suicida fluctua entre un nivel base cronico y picos agudos activados por estresores proximales | Rudd model where suicide risk fluctuates between a chronic baseline level and acute peaks activated by proximal stressors',
        },
        {
          term: 'Zero Suicide',
          definition:
            'Modelo de sistemas de salud que busca la aspiracion de cero suicidios a traves de tamizaje universal, evaluacion estructurada y seguimiento sistematico | Health system model aspiring to zero suicides through universal screening, structured assessment, and systematic follow-up',
        },
        {
          term: 'postvention',
          definition:
            'Intervencion despues de un suicidio para apoyar a los sobrevivientes y prevenir el contagio suicida | Intervention after a suicide to support survivors and prevent suicide contagion',
        },
        {
          term: 'vision de tunel cognitiva | cognitive tunnel vision',
          definition:
            'Estrechamiento del pensamiento durante una crisis suicida donde la persona no puede ver alternativas al suicidio | Narrowing of thinking during suicidal crisis where the person cannot see alternatives to suicide',
        },
      ],
      clinicalNotes:
        'La neurobiologia muestra que la crisis suicida involucra deficit de toma de decisiones (CPF deteriorada) que es temporal y reversible -- esto fundamenta la restriccion de medios como intervencion critica (dar tiempo para que la CPF se recupere). El modelo de vulnerabilidad fluida permite entender por que un paciente puede estar en bajo riesgo en una visita y en alto riesgo poco despues. En pacientes latinos, los factores cronicos de riesgo (estres migratorio, pobreza, discriminacion) crean una linea base elevada que requiere menor activacion aguda para alcanzar crisis. El Zero Suicide model debe adaptarse culturalmente para incluir promotores de salud como parte del equipo de seguimiento. La postvention es critica en comunidades latinas donde los vinculos comunitarios fuertes pueden facilitar tanto el contagio como la proteccion. | Neurobiology shows suicidal crisis involves temporary, reversible decision-making deficits (impaired PFC) -- this fundamentally supports means restriction as critical intervention (giving time for PFC to recover). The fluid vulnerability model allows understanding why a patient can be at low risk at one visit and high risk shortly after. In Latino patients, chronic risk factors (migratory stress, poverty, discrimination) create an elevated baseline requiring less acute activation to reach crisis. Zero Suicide model must be culturally adapted to include promotores de salud as part of the follow-up team. Postvention is critical in Latino communities where strong community bonds can facilitate both contagion and protection.',
    },
    5: {
      level: 5,
      summary:
        'La investigacion de frontera en suicidologia y comunidades latinas integra neurociencia computacional de la decision suicida, biomarcadores de riesgo, modelos predictivos basados en machine learning, intervenciones digitales de crisis, y marcos de equidad en prevencion. La personalizacion del riesgo basada en perfiles bio-psico-socio-culturales y las intervenciones de nivel politico representan el futuro de la prevencion del suicidio en comunidades marginadas. | Frontier research in suicidology and Latino communities integrates computational neuroscience of suicidal decision-making, risk biomarkers, machine learning predictive models, digital crisis interventions, and equity frameworks in prevention. Risk personalization based on bio-psycho-socio-cultural profiles and policy-level interventions represent the future of suicide prevention in marginalized communities.',
      explanation: `**Neurociencia computacional de la decision suicida | Computational neuroscience of suicidal decision-making:**

*Modelo de decision bajo dolor | Decision-making under pain model:*
- El suicidio como "decision" bajo condiciones extremas de dolor psicologico | Suicide as "decision" under extreme conditions of psychological pain
- Deficit de CPF: Evaluacion deteriorada de alternativas | PFC deficit: Impaired evaluation of alternatives
- Descuento temporal extremo: Incapacidad de imaginar un futuro mejor | Extreme temporal discounting: Inability to imagine a better future
- Sesgo de valencia negativa: Sobrevaloración de estimulos negativos | Negative valence bias: Overvaluation of negative stimuli
- Modelos computacionales pueden predecir ventanas de riesgo | Computational models can predict risk windows

**Biomarcadores emergentes | Emerging biomarkers:**

- Ratio cortisol/DHEA como indicador de carga allostatica | Cortisol/DHEA ratio as allostatic load indicator
- Citoquinas inflamatorias (IL-6, TNF-alfa, PCR) | Inflammatory cytokines (IL-6, TNF-alpha, CRP)
- Metabolitos de la kinurenina en sangre periferica | Kynurenine metabolites in peripheral blood
- Metilacion de BDNF y CREB como marcadores epigeneticos | BDNF and CREB methylation as epigenetic markers
- Potencial para tamizaje y monitoreo personalizado | Potential for personalized screening and monitoring

**Modelos predictivos y tecnologia | Predictive models and technology:**

*Machine learning para prediccion de riesgo | Machine learning for risk prediction:*
- Algoritmos entrenados en historias clinicas electronicas | Algorithms trained on electronic health records
- Analisis de lenguaje natural en notas clinicas | Natural language analysis in clinical notes
- Integracion de datos sociales y culturales como predictores | Integration of social and cultural data as predictors
- Desafio: Sesgo algoritmico contra comunidades marginadas | Challenge: Algorithmic bias against marginalized communities

*Intervenciones digitales de crisis | Digital crisis interventions:*
- Chatbots de crisis en espanol basados en IA | AI-based Spanish crisis chatbots
- Apps de safety planning con monitoreo activo | Safety planning apps with active monitoring
- Deteccion de riesgo en redes sociales (con protecciones eticas) | Social media risk detection (with ethical protections)
- Caring Contacts automatizados en espanol | Automated Caring Contacts in Spanish

**Equidad en prevencion del suicidio | Equity in suicide prevention:**

- Representacion latina en investigacion de suicidio | Latino representation in suicide research
- Adaptacion cultural de todas las intervenciones basadas en evidencia | Cultural adaptation of all evidence-based interventions
- Formacion de consejeros de crisis bilingues/biculturales | Training bilingual/bicultural crisis counselors
- Politicas de acceso a servicios independiente de estatus migratorio | Service access policies independent of immigration status
- Prevencion del suicidio como responsabilidad comunitaria, no solo clinica | Suicide prevention as community responsibility, not just clinical

**Direcciones futuras | Future directions:**

- Ensayos clinicos de prevencion con representacion latina | Prevention clinical trials with Latino representation
- Biomarcadores personalizados de riesgo suicida | Personalized suicide risk biomarkers
- Intervenciones de nivel politico (acceso a armas, acceso a servicios) | Policy-level interventions (firearm access, service access)
- Modelos de prevencion comunitaria basados en promotores de salud | Community prevention models based on promotores de salud
- Integracion de IA cultural en intervenciones de crisis | Integration of cultural AI in crisis interventions`,
      keyTerms: [
        {
          term: 'descuento temporal | temporal discounting',
          definition:
            'Tendencia a devaluar resultados futuros; en crisis suicida es extremo -- la persona no puede imaginar un futuro diferente | Tendency to devalue future outcomes; in suicidal crisis it is extreme -- the person cannot imagine a different future',
        },
        {
          term: 'sesgo algoritmico | algorithmic bias',
          definition:
            'Cuando los algoritmos de prediccion de riesgo funcionan peor en comunidades marginadas por la subrepresentacion en los datos de entrenamiento | When risk prediction algorithms perform worse in marginalized communities due to underrepresentation in training data',
        },
        {
          term: 'Caring Contacts',
          definition:
            'Intervenciones breves de seguimiento (textos, llamadas, cartas) que comunican cuidado y conexion; reducen intentos de suicidio | Brief follow-up interventions (texts, calls, letters) communicating care and connection; reduce suicide attempts',
        },
        {
          term: 'via de la kinurenina | kynurenine pathway',
          definition:
            'Via metabolica del triptofano activada por inflamacion que produce neurotoxinas (quinolinato) y reduce la serotonina disponible; implicada en suicidio | Tryptophan metabolic pathway activated by inflammation producing neurotoxins (quinolinate) and reducing available serotonin; implicated in suicide',
        },
      ],
      clinicalNotes:
        'La practica de frontera requiere: (1) Comprension de que la crisis suicida es un estado neurocognitivo temporal con deficit de toma de decisiones reversible -- la restriccion de medios y la intervencion en crisis aprovechan esta temporalidad; (2) Los biomarcadores inflamatorios son especialmente relevantes en pacientes latinos con estres cronico elevado; (3) Los modelos predictivos de ML deben validarse especificamente en poblaciones latinas para evitar sesgo algoritmico; (4) Los Caring Contacts automatizados en espanol son una intervencion escalable y costo-efectiva para seguimiento; (5) La prevencion del suicidio en comunidades latinas requiere un enfoque multinivel que incluya intervenciones clinicas, comunitarias (promotores de salud, iglesias) y estructurales (politicas de acceso a armas, acceso a servicios independiente de estatus migratorio). Los ensayos clinicos de prevencion del suicidio sistematicamente subrepresentan a latinos, lo que limita la generalizabilidad de las intervenciones. | Frontier practice requires: (1) Understanding that suicidal crisis is a temporary neurocognitive state with reversible decision-making deficit -- means restriction and crisis intervention leverage this temporality; (2) Inflammatory biomarkers are especially relevant in Latino patients with elevated chronic stress; (3) ML predictive models must be validated specifically in Latino populations to avoid algorithmic bias; (4) Automated Caring Contacts in Spanish are a scalable, cost-effective follow-up intervention; (5) Suicide prevention in Latino communities requires a multi-level approach including clinical, community (promotores de salud, churches), and structural interventions (firearm access policies, service access independent of immigration status). Suicide prevention clinical trials systematically underrepresent Latinos, limiting intervention generalizability.',
    },
  },

  media: [],

  citations: [
    {
      id: 'joiner-2005-interpersonal-theory',
      type: 'textbook',
      title: 'Why People Die by Suicide',
      authors: ['Joiner, T.E.'],
      source: 'Harvard University Press',
    },
    {
      id: 'stanley-2012-safety-planning',
      type: 'journal',
      title: 'Safety Planning Intervention: A Brief Intervention to Mitigate Suicide Risk',
      authors: ['Stanley, B.', 'Brown, G.K.'],
      source: 'Cognitive and Behavioral Practice',
    },
    {
      id: 'cdc-2023-yrbs-suicide',
      type: 'website',
      title: 'Youth Risk Behavior Survey: Suicide-Related Behaviors',
      source: 'Centers for Disease Control and Prevention',
      url: 'https://www.cdc.gov/yrbs/',
      accessedDate: '2026-01-15',
    },
  ],

  crossReferences: [
    {
      targetId: 'mental-health-depresion-depression',
      targetType: 'condition',
      relationship: 'related',
      label: 'Depresion | Depression',
    },
    {
      targetId: 'mental-health-crisis-resources',
      targetType: 'topic',
      relationship: 'related',
      label: 'Recursos de Crisis | Crisis Resources',
    },
    {
      targetId: 'topic-destigmatizing-latino-communities',
      targetType: 'topic',
      relationship: 'see-also',
      label: 'Desestigmatizacion en Comunidades Latinas | Destigmatizing in Latino Communities',
    },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['mental-health', 'crisis', 'suicide-prevention', 'bilingual-content'],
    keywords: [
      'suicidio',
      'suicide',
      '988',
      'crisis',
      'prevencion',
      'prevention',
      'plan de seguridad',
      'safety plan',
      'ideacion suicida',
      'suicidal ideation',
      'salud mental',
      'latino',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['psychiatry', 'medicine'],
    },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default suicideCrisisResourcesContent;
