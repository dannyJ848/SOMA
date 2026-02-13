/**
 * Manejo Practico del Estres | Practical Stress Management
 *
 * Contenido educativo bilingue sobre tecnicas practicas de manejo del estres,
 * con enfasis en estrategias accesibles y culturalmente relevantes para
 * comunidades latinas.
 * Bilingual educational content on practical stress management techniques,
 * emphasizing accessible and culturally relevant strategies for Latino
 * communities.
 *
 * Spanish-first with English translations separated by " | "
 */

import { EducationalContent } from '../types';

export const stressManagementPracticalContent: EducationalContent = {
  id: 'topic-stress-management-practical',
  type: 'topic',
  name: 'Practical Stress Management | Manejo Practico del Estres',
  nameEs: 'Manejo Practico del Estres',
  alternateNames: [
    'Tecnicas para Manejar el Estres | Stress Management Techniques',
    'Reduccion del Estres | Stress Reduction',
    'Bienestar Emocional | Emotional Wellness',
    'Autocuidado | Self-Care',
    'Manejo de la Tension | Tension Management',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'El estres es la respuesta de tu cuerpo a situaciones dificiles. Algo de estres es normal, pero demasiado puede hacerte dano. Hay formas sencillas y gratuitas de manejar el estres que puedes empezar hoy mismo. | Stress is your body response to difficult situations. Some stress is normal, but too much can harm you. There are simple, free ways to manage stress that you can start today.',
      explanation: `**Que es el estres? | What is stress?**

El estres es como una alarma que tu cuerpo enciende cuando siente peligro o presion. Esta alarma fue disenada para protegerte en situaciones de emergencia. Pero cuando la alarma se queda prendida todo el tiempo -- por problemas de dinero, trabajo, familia, papeles migratorios o salud -- tu cuerpo y tu mente sufren. | Stress is like an alarm your body turns on when it senses danger or pressure. This alarm was designed to protect you in emergencies. But when the alarm stays on all the time -- because of money problems, work, family, immigration papers, or health -- your body and mind suffer.

**Senales de que tienes demasiado estres | Signs you have too much stress:**

*En tu cuerpo | In your body:*
- Dolores de cabeza frecuentes | Frequent headaches
- Dolor de espalda o cuello | Back or neck pain
- Problemas para dormir | Trouble sleeping
- Dolor de estomago o mala digestion | Stomachache or poor digestion
- Sentirte muy cansado/a | Feeling very tired
- Enfermarte mas seguido | Getting sick more often
- Presion alta | High blood pressure

*En tus emociones | In your emotions:*
- Sentirte enojado/a o irritable | Feeling angry or irritable
- Sentirte ansioso/a o preocupado/a todo el tiempo | Feeling anxious or worried all the time
- Sentirte triste o sin ganas | Feeling sad or unmotivated
- No poder concentrarte | Being unable to concentrate
- Sentirte abrumado/a | Feeling overwhelmed

**Tecnicas sencillas que puedes hacer HOY | Simple techniques you can do TODAY:**

**1. Respiracion 4-7-8 | 4-7-8 Breathing:**
- Inhala por la nariz contando hasta 4 | Breathe in through your nose counting to 4
- Aguanta la respiracion contando hasta 7 | Hold your breath counting to 7
- Exhala por la boca contando hasta 8 | Breathe out through your mouth counting to 8
- Repite 3-4 veces | Repeat 3-4 times
- Puedes hacerlo en cualquier lugar: en el trabajo, en la cocina, antes de dormir | You can do it anywhere: at work, in the kitchen, before bed

**2. Caminar al aire libre | Walking outdoors:**
- Solo 15-20 minutos de caminata pueden reducir el estres | Just 15-20 minutes of walking can reduce stress
- Caminar con un amigo/a o familiar agrega el beneficio de la conexion social | Walking with a friend or family member adds the benefit of social connection
- No necesitas equipo especial ni un gimnasio | You do not need special equipment or a gym

**3. Hablar con alguien de confianza | Talking to someone you trust:**
- Compartir tus preocupaciones reduce el peso emocional | Sharing your worries reduces the emotional weight
- Puede ser un familiar, amigo/a, lider religioso, o consejero/a | It can be a family member, friend, religious leader, or counselor
- No tienes que resolver todo solo/a | You do not have to solve everything alone

**4. Limitar el tiempo en redes sociales y noticias | Limiting social media and news time:**
- Las noticias constantes aumentan la ansiedad | Constant news increases anxiety
- Pon un limite de tiempo para tu telefono | Set a time limit for your phone
- Elige momentos especificos para revisar noticias | Choose specific times to check news

**5. Hacer algo que disfrutes | Doing something you enjoy:**
- Cocinar una receta favorita | Cooking a favorite recipe
- Escuchar musica que te guste | Listening to music you enjoy
- Trabajar en el jardin o cuidar plantas | Working in the garden or tending plants
- Rezar, meditar o practicar tu fe | Praying, meditating, or practicing your faith

**Un mensaje para nuestra comunidad | A message for our community:**

En nuestra cultura, a veces sentimos que debemos ser fuertes y no quejarnos. "Echarle ganas" y "salir adelante" son valores importantes, pero tambien necesitamos cuidar nuestra salud emocional. El estres no es debilidad -- es una respuesta natural del cuerpo. Cuidarte a ti mismo/a te permite cuidar mejor a tu familia. Muchas de las mejores tecnicas para el estres son gratuitas y puedes hacerlas en casa. | In our culture, we sometimes feel we must be strong and not complain. "Pushing through" and "getting ahead" are important values, but we also need to take care of our emotional health. Stress is not weakness -- it is a natural body response. Taking care of yourself allows you to take better care of your family. Many of the best stress techniques are free and you can do them at home.

**Cuando buscar mas ayuda | When to seek more help:**

Si el estres no mejora con estas tecnicas, o si sientes que no puedes funcionar en tu vida diaria, habla con un doctor o consejero. No tienes que esperar hasta que sea una crisis. | If stress does not improve with these techniques, or if you feel you cannot function in your daily life, talk to a doctor or counselor. You do not have to wait until it is a crisis.

**SAMHSA Linea de Ayuda | SAMHSA Helpline**: 1-800-662-4357 (espanol disponible | Spanish available)`,
      keyTerms: [
        {
          term: 'estres | stress',
          definition:
            'La respuesta de tu cuerpo a situaciones dificiles o que requieren mucho esfuerzo | Your body response to difficult situations or those requiring a lot of effort',
        },
        {
          term: 'autocuidado | self-care',
          definition:
            'Actividades que haces para cuidar tu salud fisica, mental y emocional | Activities you do to take care of your physical, mental, and emotional health',
        },
        {
          term: 'respuesta de lucha o huida | fight or flight response',
          definition:
            'La reaccion automatica del cuerpo ante el peligro: prepararte para pelear o correr | The body automatic reaction to danger: preparing you to fight or run',
        },
        {
          term: 'respiracion profunda | deep breathing',
          definition:
            'Una tecnica de relajacion que usa respiraciones lentas y profundas para calmar el cuerpo y la mente | A relaxation technique using slow, deep breaths to calm the body and mind',
        },
      ],
      analogies: [
        'El estres es como una olla de presion. Si no dejas salir el vapor poco a poco, eventualmente va a explotar. Las tecnicas de manejo del estres son como valvulas que dejan salir el vapor de forma segura. | Stress is like a pressure cooker. If you do not let the steam out little by little, it will eventually explode. Stress management techniques are like valves that release steam safely.',
        'Tu cuerpo bajo estres cronico es como un carro con el motor acelerado todo el tiempo. Eventualmente, las piezas se desgastan. Las pausas y la relajacion son como apagar el motor para que descanse. | Your body under chronic stress is like a car with the engine revving all the time. Eventually, the parts wear out. Breaks and relaxation are like turning off the engine to let it rest.',
        'Manejar el estres es como cargar tu celular. Si nunca lo cargas, se apaga. Necesitas recargar tu energia todos los dias con descanso, comida sana, y actividades que disfrutes. | Managing stress is like charging your phone. If you never charge it, it turns off. You need to recharge your energy every day with rest, healthy food, and activities you enjoy.',
      ],
      examples: [
        'Maria trabaja limpiando casas y cuida a sus hijos sola. Empezo a hacer la respiracion 4-7-8 cada noche antes de dormir y descubrio que duerme mejor y se despierta con mas energia. | Maria works cleaning houses and takes care of her children alone. She started doing 4-7-8 breathing every night before bed and found she sleeps better and wakes up with more energy.',
        'Don Carlos tiene diabetes y presion alta. Su doctor le dijo que el estres empeora ambas condiciones. Empezo a caminar 20 minutos despues de cenar con su esposa, y sus numeros mejoraron en su siguiente cita medica. | Don Carlos has diabetes and high blood pressure. His doctor told him stress worsens both conditions. He started walking 20 minutes after dinner with his wife, and his numbers improved at his next medical appointment.',
        'Una familia empezo a tener una "noche sin telefonos" una vez por semana, jugando juegos de mesa y platicando. Todos reportaron sentirse menos estresados y mas conectados. | A family started having a "phone-free night" once a week, playing board games and talking. Everyone reported feeling less stressed and more connected.',
      ],
      patientCounselingPoints: [
        'El estres afecta tu salud fisica -- puede empeorar la presion alta, la diabetes y el dolor cronico. | Stress affects your physical health -- it can worsen high blood pressure, diabetes, and chronic pain.',
        'No necesitas dinero ni equipo especial para manejar el estres. Caminar, respirar y hablar con alguien son gratis y efectivos. | You do not need money or special equipment to manage stress. Walking, breathing, and talking to someone are free and effective.',
        'Cuidarte no es egoismo -- es necesario para poder cuidar a tu familia. | Taking care of yourself is not selfishness -- it is necessary to be able to care for your family.',
        'Si el estres no mejora con tecnicas basicas, es importante buscar ayuda profesional. No tienes que esperar a una crisis. | If stress does not improve with basic techniques, it is important to seek professional help. You do not have to wait for a crisis.',
      ],
    },
    2: {
      level: 2,
      summary:
        'El estres cronico activa el sistema de respuesta al estres del cuerpo de forma prolongada, afectando multiples sistemas organicos. Las intervenciones basadas en evidencia incluyen tecnicas de relajacion, actividad fisica, higiene del sueno, conexion social y terapia cognitivo-conductual. El contexto cultural influye en como se experimenta y maneja el estres. | Chronic stress activates the body stress response system in a prolonged way, affecting multiple organ systems. Evidence-based interventions include relaxation techniques, physical activity, sleep hygiene, social connection, and cognitive behavioral therapy. Cultural context influences how stress is experienced and managed.',
      explanation: `**La respuesta al estres | The stress response:**

Cuando percibes una amenaza, tu cerebro activa dos sistemas principales: | When you perceive a threat, your brain activates two main systems:

*Sistema nervioso simpatico (respuesta inmediata) | Sympathetic nervous system (immediate response):*
- Libera adrenalina y noradrenalina | Releases adrenaline and noradrenaline
- Aumenta frecuencia cardiaca y presion arterial | Increases heart rate and blood pressure
- Desvía sangre hacia los musculos | Diverts blood to muscles
- Dilata las pupilas | Dilates pupils
- Suprime la digestion | Suppresses digestion

*Eje HPA (respuesta prolongada) | HPA axis (prolonged response):*
- El hipotalamo libera CRH | Hypothalamus releases CRH
- La pituitaria libera ACTH | Pituitary releases ACTH
- Las glandulas suprarrenales liberan cortisol | Adrenal glands release cortisol
- El cortisol mantiene la respuesta al estres | Cortisol maintains the stress response

**Estres agudo vs. estres cronico | Acute vs. chronic stress:**

- Estres agudo: Respuesta corta, el cuerpo se recupera | Acute stress: Short response, the body recovers
- Estres cronico: La respuesta nunca se apaga, causando dano acumulativo | Chronic stress: The response never turns off, causing cumulative damage
- Carga alostatica: El desgaste acumulado del estres cronico | Allostatic load: The cumulative wear and tear of chronic stress

**Efectos del estres cronico en la salud | Effects of chronic stress on health:**

*Cardiovascular:*
- Hipertension sostenida | Sustained hypertension
- Aterosclerosis acelerada | Accelerated atherosclerosis
- Mayor riesgo de infarto y ACV | Higher risk of heart attack and stroke

*Metabolico | Metabolic:*
- Resistencia a la insulina | Insulin resistance
- Aumento de peso visceral | Visceral weight gain
- Mayor riesgo de diabetes tipo 2 | Higher risk of type 2 diabetes

*Inmunologico | Immunological:*
- Supresion de la funcion inmune | Immune function suppression
- Mayor susceptibilidad a infecciones | Greater susceptibility to infections
- Inflamacion cronica de bajo grado | Chronic low-grade inflammation

*Neurologico | Neurological:*
- Atrofia hipocampal (problemas de memoria) | Hippocampal atrophy (memory problems)
- Hiperactividad de la amigdala (ansiedad) | Amygdala hyperactivity (anxiety)
- Disminucion de funcion prefrontal (mala toma de decisiones) | Decreased prefrontal function (poor decision-making)

**Intervenciones basadas en evidencia | Evidence-based interventions:**

**1. Tecnicas de relajacion | Relaxation techniques:**
- Relajacion muscular progresiva (RMP) | Progressive muscle relaxation (PMR)
- Respiracion diafragmatica | Diaphragmatic breathing
- Visualizacion guiada | Guided imagery
- Mindfulness (atencion plena) | Mindfulness

**2. Actividad fisica | Physical activity:**
- 150 minutos/semana de actividad moderada (recomendacion OMS) | 150 minutes/week of moderate activity (WHO recommendation)
- El ejercicio reduce cortisol y aumenta endorfinas | Exercise reduces cortisol and increases endorphins
- Actividades culturalmente relevantes: bailar salsa, caminar en grupo, futbol | Culturally relevant activities: dancing salsa, walking in groups, soccer

**3. Higiene del sueno | Sleep hygiene:**
- Mantener horario regular de sueno | Maintain regular sleep schedule
- Limitar cafeina despues del mediodia | Limit caffeine after noon
- Ambiente oscuro, fresco y silencioso | Dark, cool, and quiet environment
- Evitar pantallas 1 hora antes de dormir | Avoid screens 1 hour before bed

**4. Conexion social | Social connection:**
- Las relaciones sociales son un factor protector clave | Social relationships are a key protective factor
- Grupos de apoyo, organizaciones comunitarias, iglesia | Support groups, community organizations, church
- El familismo latino como fortaleza: usar la red familiar para apoyo | Latino familismo as strength: using the family network for support

**5. Nutricion | Nutrition:**
- La dieta afecta el eje intestino-cerebro | Diet affects the gut-brain axis
- Alimentos antiinflamatorios (frutas, verduras, pescado, granos integrales) | Anti-inflammatory foods (fruits, vegetables, fish, whole grains)
- Limitar azucar, cafeina y alcohol | Limit sugar, caffeine, and alcohol

**Estresores especificos de la comunidad latina | Stressors specific to the Latino community:**

- Estres de aculturacion | Acculturation stress
- Incertidumbre migratoria | Immigration uncertainty
- Discriminacion y microagresiones | Discrimination and microaggressions
- Barreras de idioma | Language barriers
- Separacion familiar | Family separation
- Estres financiero y laboral | Financial and work stress
- Conflicto generacional por diferencias culturales | Generational conflict over cultural differences`,
      keyTerms: [
        {
          term: 'cortisol',
          definition:
            'La principal hormona del estres, producida por las glandulas suprarrenales. Niveles cronicamente elevados pueden danar multiples sistemas del cuerpo | The main stress hormone, produced by the adrenal glands. Chronically elevated levels can damage multiple body systems',
        },
        {
          term: 'carga alostatica | allostatic load',
          definition:
            'El desgaste acumulado en el cuerpo por la activacion cronica del sistema de estres | The cumulative wear and tear on the body from chronic activation of the stress system',
        },
        {
          term: 'relajacion muscular progresiva | progressive muscle relaxation',
          definition:
            'Una tecnica que consiste en tensar y luego relajar grupos musculares sistematicamente para reducir la tension fisica del estres | A technique of systematically tensing and then relaxing muscle groups to reduce physical tension from stress',
        },
        {
          term: 'atencion plena (mindfulness)',
          definition:
            'La practica de prestar atencion al momento presente sin juzgar, lo cual reduce la rumiacion y la ansiedad | The practice of paying attention to the present moment without judgment, which reduces rumination and anxiety',
        },
        {
          term: 'estres de aculturacion | acculturation stress',
          definition:
            'La tension psicologica que resulta de adaptarse a una nueva cultura mientras se mantiene la cultura de origen | The psychological strain resulting from adapting to a new culture while maintaining the culture of origin',
        },
      ],
      analogies: [
        'El cortisol es como un sistema de alarma contra incendios. En una emergencia real, es esencial. Pero si la alarma suena todo el dia todos los dias, agota las baterias y todos dejan de prestarle atencion. Asi funciona el estres cronico -- tu cuerpo pierde la capacidad de responder apropiadamente. | Cortisol is like a fire alarm system. In a real emergency, it is essential. But if the alarm rings all day every day, it drains the batteries and everyone stops paying attention. This is how chronic stress works -- your body loses the ability to respond appropriately.',
        'La carga alostatica es como el desgaste de un puente. Un carro no lo danan, pero miles de carros todos los dias eventualmente debilitan la estructura. Cada estresor pequeno se acumula. | Allostatic load is like the wear on a bridge. One car does not damage it, but thousands of cars every day eventually weaken the structure. Every small stressor accumulates.',
      ],
      examples: [
        'Un estudio mostro que los latinos que participaban en grupos de "caminata comunitaria" tres veces por semana reportaron reduccion significativa en niveles de estres, presion arterial y sintomas de depresion, ademas de fortalecer lazos sociales. | A study showed that Latinos who participated in "community walking" groups three times per week reported significant reductions in stress levels, blood pressure, and depression symptoms, while also strengthening social bonds.',
        'Un programa de mindfulness adaptado culturalmente que incorporaba oraciones y visualizaciones familiares de la tradicion latina mostro mejor adherencia y resultados que un programa estandar en una comunidad hispana. | A culturally adapted mindfulness program incorporating prayers and visualizations familiar to the Latino tradition showed better adherence and outcomes than a standard program in a Hispanic community.',
      ],
      patientCounselingPoints: [
        'El estres cronico es un factor de riesgo para enfermedades del corazon, diabetes y depresion. Manejarlo es parte del cuidado de tu salud general. | Chronic stress is a risk factor for heart disease, diabetes, and depression. Managing it is part of caring for your overall health.',
        'No necesitas eliminar todo el estres. El objetivo es aprender a manejarlo para que no dane tu salud. | You do not need to eliminate all stress. The goal is to learn to manage it so it does not harm your health.',
        'Las tecnicas de relajacion son como cualquier habilidad -- mejoran con la practica. Empieza con 5 minutos al dia. | Relaxation techniques are like any skill -- they improve with practice. Start with 5 minutes a day.',
        'Si los estresores incluyen situaciones de discriminacion o migracion, es importante buscar apoyo de organizaciones que entiendan tu realidad. | If stressors include discrimination or immigration situations, it is important to seek support from organizations that understand your reality.',
      ],
    },
    3: {
      level: 3,
      summary:
        'La respuesta al estres involucra la activacion coordinada del sistema nervioso simpatico y el eje hipotalamico-hipofisario-adrenal, produciendo cambios neuroendocrinos que afectan la plasticidad cerebral, la funcion inmune y el metabolismo. Las intervenciones basadas en evidencia incluyen TCC, MBSR, intervencion en estilo de vida y farmacoterapia cuando es necesario. La investigacion en disparidades destaca la necesidad de adaptaciones culturales. | The stress response involves coordinated activation of the sympathetic nervous system and hypothalamic-pituitary-adrenal axis, producing neuroendocrine changes that affect brain plasticity, immune function, and metabolism. Evidence-based interventions include CBT, MBSR, lifestyle intervention, and pharmacotherapy when needed. Disparities research highlights the need for cultural adaptations.',
      explanation: `**Neurobiologia del estres | Neurobiology of stress:**

*Eje HPA detallado | Detailed HPA axis:*
- El estres activa neuronas CRH del nucleo paraventricular del hipotalamo | Stress activates CRH neurons of the hypothalamic paraventricular nucleus
- CRH estimula la liberacion de ACTH de la hipofisis anterior | CRH stimulates ACTH release from anterior pituitary
- ACTH estimula la produccion de cortisol en la corteza suprarrenal | ACTH stimulates cortisol production in the adrenal cortex
- Cortisol ejerce retroalimentacion negativa en hipotalamo e hipofisis | Cortisol exerts negative feedback on hypothalamus and pituitary
- Estres cronico deteriora la retroalimentacion negativa | Chronic stress impairs negative feedback

*Cambios cerebrales estructurales y funcionales | Structural and functional brain changes:*
- Hipocampo: Atrofia dendritica, reduccion de neurogenesis, deterioro de memoria | Hippocampus: Dendritic atrophy, reduced neurogenesis, memory impairment
- Amigdala: Hipertrofia dendritica, hiperactividad, mayor reactividad emocional | Amygdala: Dendritic hypertrophy, hyperactivity, greater emotional reactivity
- Corteza prefrontal: Reduccion de espinas dendriticas, deterioro de funcion ejecutiva | Prefrontal cortex: Reduced dendritic spines, impaired executive function
- Estos cambios son parcialmente reversibles con intervencion temprana | These changes are partially reversible with early intervention

*Psiconeuroinmunologia | Psychoneuroimmunology:*
- El estres cronico activa NF-kB y aumenta citoquinas proinflamatorias | Chronic stress activates NF-kB and increases proinflammatory cytokines
- IL-6, TNF-alfa, PCR elevadas en estres cronico | IL-6, TNF-alpha, CRP elevated in chronic stress
- La inflamacion cronica contribuye a depresion, enfermedad cardiovascular y diabetes | Chronic inflammation contributes to depression, cardiovascular disease, and diabetes
- Las intervenciones de manejo de estres reducen biomarcadores inflamatorios | Stress management interventions reduce inflammatory biomarkers

**Intervenciones clinicas | Clinical interventions:**

*TCC para manejo del estres | CBT for stress management:*
- Reestructuracion cognitiva: Identificar y modificar pensamientos catastroficos | Cognitive restructuring: Identify and modify catastrophic thoughts
- Resolucion de problemas estructurada | Structured problem-solving
- Entrenamiento en asertividad y comunicacion | Assertiveness and communication training
- Programacion de actividades placenteras | Pleasant activity scheduling
- Exposicion gradual a estresores evitados | Gradual exposure to avoided stressors

*MBSR (Reduccion de Estres Basada en Mindfulness) | MBSR (Mindfulness-Based Stress Reduction):*
- Programa de 8 semanas desarrollado por Jon Kabat-Zinn | 8-week program developed by Jon Kabat-Zinn
- Meditacion sentada, escaneo corporal, yoga suave | Seated meditation, body scan, gentle yoga
- Evidencia fuerte para reduccion de cortisol, ansiedad y dolor cronico | Strong evidence for cortisol reduction, anxiety, and chronic pain
- Adaptaciones culturales para comunidades latinas incluyen incorporar oracion y elementos familiares | Cultural adaptations for Latino communities include incorporating prayer and familiar elements

*Intervenciones de estilo de vida | Lifestyle interventions:*
- Ejercicio: 150 min/semana reduce cortisol, mejora neuroplasticidad via BDNF | Exercise: 150 min/week reduces cortisol, improves neuroplasticity via BDNF
- Sueno: 7-9 horas; la privacion de sueno aumenta cortisol 37-45% | Sleep: 7-9 hours; sleep deprivation increases cortisol 37-45%
- Nutricion: Dieta mediterranea reduce inflamacion y mejora funcion cerebral | Nutrition: Mediterranean diet reduces inflammation and improves brain function
- Conexion social: Oxitocina amortigua la respuesta del eje HPA | Social connection: Oxytocin buffers HPA axis response

*Farmacoterapia cuando es necesaria | Pharmacotherapy when needed:*
- Benzodiacepinas: Solo a corto plazo por riesgo de dependencia | Benzodiazepines: Short-term only due to dependence risk
- ISRS: Cuando estres cronico se presenta como trastorno de ansiedad o depresion | SSRIs: When chronic stress presents as anxiety or depressive disorder
- Buspirona: Ansiolitico no adictivo, buena opcion a largo plazo | Buspirone: Non-addictive anxiolytic, good long-term option
- Propranolol: Beta-bloqueador para sintomas somaticos de ansiedad | Propranolol: Beta-blocker for somatic anxiety symptoms

**Modelo de estres en minoria (Minority Stress Model) aplicado a latinos | Minority Stress Model applied to Latinos:**

- Estresores distales: Discriminacion, xenofobia, politicas antiinmigrantes | Distal stressors: Discrimination, xenophobia, anti-immigrant policies
- Estresores proximales: Vigilancia constante, expectativas de rechazo, ocultamiento de identidad | Proximal stressors: Constant vigilance, rejection expectations, identity concealment
- Factores protectores: Orgullo etnico, apoyo comunitario, resiliencia cultural, fe | Protective factors: Ethnic pride, community support, cultural resilience, faith
- Necesidad de intervenciones a nivel estructural ademas de individual | Need for structural-level interventions in addition to individual`,
      keyTerms: [
        {
          term: 'MBSR (Reduccion de Estres Basada en Mindfulness)',
          definition:
            'Programa estructurado de 8 semanas que usa meditacion y yoga para reducir estres y mejorar el bienestar, con fuerte evidencia cientifica | Structured 8-week program using meditation and yoga to reduce stress and improve well-being, with strong scientific evidence',
        },
        {
          term: 'psiconeuroinmunologia | psychoneuroimmunology',
          definition:
            'El estudio de como los factores psicologicos, el sistema nervioso y el sistema inmune interactuan, especialmente en el contexto del estres | The study of how psychological factors, the nervous system, and immune system interact, especially in the context of stress',
        },
        {
          term: 'retroalimentacion negativa | negative feedback',
          definition:
            'El mecanismo por el cual el cortisol le indica al cerebro que deje de producir mas hormonas de estres; este mecanismo falla en el estres cronico | The mechanism by which cortisol signals the brain to stop producing more stress hormones; this mechanism fails in chronic stress',
        },
        {
          term: 'modelo de estres en minoria | minority stress model',
          definition:
            'Marco teorico que describe como el estres adicional de pertenecer a un grupo marginalizado afecta la salud mental y fisica | Theoretical framework describing how the additional stress of belonging to a marginalized group affects mental and physical health',
        },
        {
          term: 'resiliencia | resilience',
          definition:
            'La capacidad de adaptarse y recuperarse de la adversidad; no es la ausencia de estres sino la habilidad de manejarlo efectivamente | The ability to adapt and recover from adversity; not the absence of stress but the ability to manage it effectively',
        },
      ],
      analogies: [
        'La retroalimentacion negativa del eje HPA es como el termostato de tu casa. Cuando la temperatura (cortisol) sube lo suficiente, el termostato apaga la calefaccion. En el estres cronico, el termostato esta roto y la calefaccion nunca se apaga, "sobrecalentando" tu cuerpo. | The negative feedback of the HPA axis is like your house thermostat. When the temperature (cortisol) rises enough, the thermostat turns off the heating. In chronic stress, the thermostat is broken and the heating never turns off, "overheating" your body.',
      ],
      examples: [
        'Un ensayo clinico aleatorizado con mujeres latinas en una clinica comunitaria demostro que un programa de MBSR adaptado culturalmente (incluyendo meditaciones en espanol y enfasis en valores colectivistas) redujo niveles de cortisol salival, PCR y sintomas de ansiedad significativamente mas que el grupo control. | A randomized clinical trial with Latina women at a community clinic demonstrated that a culturally adapted MBSR program (including meditations in Spanish and emphasis on collectivist values) significantly reduced salivary cortisol levels, CRP, and anxiety symptoms more than the control group.',
        'Un programa de manejo de estres basado en promotoras de salud en una comunidad agricola latina logro mejorar la adherencia al tratamiento de diabetes al abordar los estresores psicosociales subyacentes. | A stress management program based on promotoras de salud in a Latino agricultural community improved diabetes treatment adherence by addressing underlying psychosocial stressors.',
      ],
    },
    4: {
      level: 4,
      summary:
        'Los mecanismos moleculares del estres cronico involucran cambios epigeneticos, desregulacion del sistema glucocorticoide, neuroinflamacion e interrupcion de circuitos cortico-limbicos. Las intervenciones avanzadas incluyen enfoques de neurofeedback, estimulacion vagal, intervenciones basadas en el microbioma y modelos de atencion integrada que consideran los determinantes sociales de la salud en poblaciones marginalizadas. | Molecular mechanisms of chronic stress involve epigenetic changes, glucocorticoid system dysregulation, neuroinflammation, and disruption of cortico-limbic circuits. Advanced interventions include neurofeedback approaches, vagal stimulation, microbiome-based interventions, and integrated care models addressing social determinants of health in marginalized populations.',
      explanation: `**Mecanismos moleculares del estres cronico | Molecular mechanisms of chronic stress:**

*Epigenetica del estres | Stress epigenetics:*
- Metilacion del promotor del gen NR3C1 (receptor de glucocorticoides) | NR3C1 (glucocorticoid receptor) gene promoter methylation
- Adversidad temprana -> hipermetilacion -> menor expresion de GR -> peor retroalimentacion negativa | Early adversity -> hypermethylation -> reduced GR expression -> worse negative feedback
- Cambios en acetilacion de histonas mediados por estres | Stress-mediated histone acetylation changes
- Efectos transgeneracionales documentados | Documented transgenerational effects
- miR-124, miR-18a como reguladores de la expresion de GR | miR-124, miR-18a as regulators of GR expression

*Desregulacion del receptor de glucocorticoides | Glucocorticoid receptor dysregulation:*
- Resistencia a glucocorticoides: GR fosforilado por JNK, GSK3beta | Glucocorticoid resistance: GR phosphorylated by JNK, GSK3beta
- FKBP5 como regulador negativo de la sensibilidad de GR | FKBP5 as negative regulator of GR sensitivity
- Polimorfismos de FKBP5 x maltrato infantil -> riesgo de TEPT y depresion | FKBP5 polymorphisms x childhood maltreatment -> PTSD and depression risk
- Implicaciones para tratamiento personalizado | Implications for personalized treatment

*Neuroinflamacion inducida por estres | Stress-induced neuroinflammation:*
- Activacion de microglia via DAMP y senalizacion de peligro | Microglial activation via DAMPs and danger signaling
- Activacion del inflamasoma NLRP3 por estres psicologico | NLRP3 inflammasome activation by psychological stress
- Via de la kinurenina: Triptofano -> kinurenina -> acido quinolinico (neurotoxina) | Kynurenine pathway: Tryptophan -> kynurenine -> quinolinic acid (neurotoxin)
- Deplecion de serotonina por desviacion del triptofano | Serotonin depletion from tryptophan diversion

**Intervenciones avanzadas | Advanced interventions:**

*Neurofeedback y biofeedback | Neurofeedback and biofeedback:*
- Biofeedback de variabilidad de frecuencia cardiaca (VFC) | Heart rate variability (HRV) biofeedback
  - Mejora el tono vagal y la regulacion autonomica | Improves vagal tone and autonomic regulation
  - Meta-analisis muestran eficacia para estres y ansiedad | Meta-analyses show efficacy for stress and anxiety
- Neurofeedback EEG: Entrenamiento de ondas alfa en corteza posterior | EEG neurofeedback: Alpha wave training in posterior cortex
- Neurofeedback fMRI en tiempo real (experimental) | Real-time fMRI neurofeedback (experimental)

*Estimulacion del nervio vago | Vagus nerve stimulation:*
- Estimulacion transcutanea del nervio vago auricular (taVNS) | Transcutaneous auricular vagus nerve stimulation (taVNS)
- Mecanismo: Activa el nucleo del tracto solitario -> via antiinflamatoria colinergica | Mechanism: Activates nucleus of the solitary tract -> cholinergic anti-inflammatory pathway
- Reduce TNF-alfa, IL-6 y activacion simpatica | Reduces TNF-alpha, IL-6, and sympathetic activation
- Dispositivos portatiles disponibles | Portable devices available

*Intervenciones basadas en el microbioma | Microbiome-based interventions:*
- Eje intestino-cerebro media respuesta al estres | Gut-brain axis mediates stress response
- Psicobioticos: Probioticos con beneficios en salud mental | Psychobiotics: Probiotics with mental health benefits
  - Lactobacillus rhamnosus: Reduce ansiedad en modelos animales via nervio vago | Reduces anxiety in animal models via vagus nerve
  - Bifidobacterium longum: Reduce cortisol y malestar psicologico en humanos | Reduces cortisol and psychological distress in humans
- Dieta como moduladora del microbioma | Diet as microbiome modulator

**Perspectiva de salud publica: Estres en comunidades latinas | Public health perspective: Stress in Latino communities:**

*Estresores estructurales | Structural stressors:*
- Discriminacion institucional y politicas antiinmigrantes -> activacion cronica del estres | Institutional discrimination and anti-immigrant policies -> chronic stress activation
- "Weathering hypothesis": El estres acumulado de la discriminacion causa envejecimiento biologico acelerado (medido por longitud de telomeros) | The accumulated stress of discrimination causes accelerated biological aging (measured by telomere length)
- Inseguridad alimentaria y habitacional como estresores cronicos | Food and housing insecurity as chronic stressors

*Modelos de intervencion a nivel comunitario | Community-level intervention models:*
- Programas de promotores/promotoras de salud para manejo de estres | Promotores/promotoras de salud programs for stress management
- Integracion de salud mental en atencion primaria (modelo de atencion colaborativa) | Integration of mental health in primary care (collaborative care model)
- Intervenciones grupales culturalmente adaptadas en iglesias y centros comunitarios | Culturally adapted group interventions in churches and community centers
- Abogacia por politicas que reduzcan estresores estructurales | Advocacy for policies that reduce structural stressors`,
      keyTerms: [
        {
          term: 'FKBP5',
          definition:
            'Gen que codifica una proteina cochaperona que regula la sensibilidad del receptor de glucocorticoides; sus polimorfismos interactuan con la adversidad temprana para aumentar el riesgo de trastornos relacionados con el estres | Gene encoding a co-chaperone protein regulating glucocorticoid receptor sensitivity; its polymorphisms interact with early adversity to increase risk of stress-related disorders',
        },
        {
          term: 'psicobioticos | psychobiotics',
          definition:
            'Probioticos o prebioticos que, al modular la microbiota intestinal, producen beneficios en la salud mental a traves del eje intestino-cerebro | Probiotics or prebiotics that, by modulating gut microbiota, produce mental health benefits through the gut-brain axis',
        },
        {
          term: 'variabilidad de frecuencia cardiaca (VFC) | heart rate variability (HRV)',
          definition:
            'La variacion en el tiempo entre latidos consecutivos del corazon, que refleja la regulacion autonomica; mayor VFC indica mejor adaptabilidad al estres | The variation in time between consecutive heartbeats, reflecting autonomic regulation; higher HRV indicates better stress adaptability',
        },
        {
          term: 'weathering hypothesis',
          definition:
            'Teoria que propone que la exposicion cronica a la discriminacion y desventajas sociales causa envejecimiento biologico acelerado en minoras raciales/etnicas | Theory proposing that chronic exposure to discrimination and social disadvantage causes accelerated biological aging in racial/ethnic minorities',
        },
        {
          term: 'longitud de telomeros | telomere length',
          definition:
            'Medida de envejecimiento celular; los telomeros mas cortos se asocian con estres cronico, discriminacion y peores resultados de salud | Measure of cellular aging; shorter telomeres are associated with chronic stress, discrimination, and worse health outcomes',
        },
      ],
      clinicalNotes:
        'En la evaluacion clinica del estres cronico, considerar biomarcadores (cortisol salival diurno, PCR, VFC) ademas de medidas subjetivas (PSS, GAD-7). En pacientes latinos, evaluar activamente estresores de aculturacion, discriminacion, status migratorio e inseguridad economica usando herramientas validadas como el SAFE (Societal, Attitudinal, Familial, and Environmental) Acculturation Stress Scale. Las intervenciones deben ser multimodales: manejo cognitivo-conductual individual + intervenciones de estilo de vida + apoyo comunitario/estructural. La derivacion a servicios de salud mental debe hacerse de manera culturalmente sensible, evitando estigma. La integracion de practicas culturalmente familiares (oracion, meditacion, convivencia familiar) con tecnicas basadas en evidencia mejora la adherencia. | In clinical assessment of chronic stress, consider biomarkers (diurnal salivary cortisol, CRP, HRV) in addition to subjective measures (PSS, GAD-7). In Latino patients, actively assess acculturation stress, discrimination, immigration status, and economic insecurity using validated tools like the SAFE Acculturation Stress Scale. Interventions should be multimodal: individual CBT management + lifestyle interventions + community/structural support. Mental health referral should be done in a culturally sensitive manner, avoiding stigma. Integrating culturally familiar practices (prayer, meditation, family togetherness) with evidence-based techniques improves adherence.',
    },
    5: {
      level: 5,
      summary:
        'La investigacion contemporanea del estres integra biologia de sistemas, endofenotipificacion dimensional, y modelos computacionales de resiliencia. Las fronteras terapeuticas incluyen modulacion del sistema endocannabinoide, terapias dirigidas a FKBP5, intervenciones cronobiologicas de precision y enfoques de salud publica que abordan estresores socioeconomicos sistematicos. La interseccion de estres, racismo estructural y determinantes sociales requiere marcos de investigacion transdisciplinarios. | Contemporary stress research integrates systems biology, dimensional endophenotyping, and computational resilience models. Therapeutic frontiers include endocannabinoid system modulation, FKBP5-targeted therapies, precision chronobiological interventions, and public health approaches addressing systematic socioeconomic stressors. The intersection of stress, structural racism, and social determinants requires transdisciplinary research frameworks.',
      explanation: `**Biologia de sistemas del estres | Systems biology of stress:**

*Redes multi-omicas | Multi-omics networks:*
- Integracion de genomica, transcriptomica, epigenomica y metabolomica del estres | Integration of stress genomics, transcriptomics, epigenomics, and metabolomics
- Perfiles de expresion genica en respuesta aguda vs cronica al estres | Gene expression profiles in acute vs chronic stress response
- Redes de coexpresion genica ponderadas (WGCNA) identifican modulos de estres | Weighted gene co-expression network analysis (WGCNA) identifies stress modules
- Metabolomica del cortisol: vias de 11beta-HSD1/2 como dianas terapeuticas | Cortisol metabolomics: 11beta-HSD1/2 pathways as therapeutic targets

*Endofenotipificacion del estres | Stress endophenotyping:*
- Reactores de cortisol alto vs bajo como subtipos biologicos | High vs low cortisol reactors as biological subtypes
- Patrones de VFC como predictores de vulnerabilidad | HRV patterns as vulnerability predictors
- Reactividad de la amigdala en fMRI como endofenotipo de riesgo | Amygdala reactivity on fMRI as risk endophenotype
- Perfiles de citoquinas para subtipos inflamatorios | Cytokine profiles for inflammatory subtypes

**Fronteras terapeuticas | Therapeutic frontiers:**

*Sistema endocannabinoide | Endocannabinoid system:*
- Anandamida y 2-AG como moduladores de la respuesta al estres | Anandamide and 2-AG as stress response modulators
- Inhibidores de FAAH (enzima que degrada anandamida) en ensayos clinicos | FAAH inhibitors (anandamide-degrading enzyme) in clinical trials
- CB1 en amigdala y CPF: Modulan extincion del miedo y habituacion al estres | CB1 in amygdala and PFC: Modulate fear extinction and stress habituation
- Interaccion con el sistema endocannabinoide y el eje HPA | Interaction between endocannabinoid system and HPA axis

*Terapias dirigidas a FKBP5 | FKBP5-targeted therapies:*
- Antagonistas selectivos de FKBP5 (SAFit2) en desarrollo preclínico | Selective FKBP5 antagonists (SAFit2) in preclinical development
- Restauran la sensibilidad de GR sin efectos secundarios de glucocorticoides exogenos | Restore GR sensitivity without exogenous glucocorticoid side effects
- Potencial para tratamiento personalizado basado en genotipo FKBP5 | Potential for personalized treatment based on FKBP5 genotype

*Intervenciones cronobiologicas de precision | Precision chronobiological interventions:*
- Cronotipos individuales como determinantes de vulnerabilidad al estres | Individual chronotypes as determinants of stress vulnerability
- Terapia de luz temporizada para sincronizacion circadiana | Timed light therapy for circadian synchronization
- Administracion temporizada de cortisol para reconfigurar el ritmo diurno | Timed cortisol administration to reconfigure diurnal rhythm
- Restriccion de sueno terapeutica como intervencion aguda | Therapeutic sleep restriction as acute intervention

**Modelos computacionales de resiliencia | Computational resilience models:**

- Modelado de redes dinamicas de adaptacion al estres | Dynamic network modeling of stress adaptation
- Teoria de catastrofes aplicada a transiciones de estado mental | Catastrophe theory applied to mental state transitions
- Puntos de inflexion ("tipping points") en la transicion de estres adaptativo a maladaptativo | Tipping points in the transition from adaptive to maladaptive stress
- Deteccion temprana de descompensacion usando indicadores de alerta temprana | Early detection of decompensation using early warning indicators
- Gemelos digitales para simulacion de respuestas a intervenciones | Digital twins for intervention response simulation

**Investigacion traslacional en disparidades de estres | Translational research on stress disparities:**

- Estudios de cohorte prospectivos integrando biomarcadores de estres con determinantes sociales en comunidades latinas | Prospective cohort studies integrating stress biomarkers with social determinants in Latino communities
- Ensayos clinicos pragmaticos de intervenciones de estres en entornos comunitarios (FQHCs, iglesias) | Pragmatic clinical trials of stress interventions in community settings (FQHCs, churches)
- Intervenciones a nivel de politicas: Impacto de DACA en biomarcadores de estres | Policy-level interventions: Impact of DACA on stress biomarkers
- Justicia ambiental: Exposicion a contaminacion como estresor biologico adicional en comunidades latinas | Environmental justice: Pollution exposure as additional biological stressor in Latino communities
- Interseaccionalidad: Genero x etnia x status migratorio x pobreza como multiplicadores de estres | Intersectionality: Gender x ethnicity x immigration status x poverty as stress multipliers`,
      keyTerms: [
        {
          term: 'SAFit2 (antagonista selectivo de FKBP5)',
          definition:
            'Compuesto farmacologico en desarrollo que bloquea FKBP5, restaurando la sensibilidad del receptor de glucocorticoides y mejorando la regulacion de la respuesta al estres | Pharmacological compound in development that blocks FKBP5, restoring glucocorticoid receptor sensitivity and improving stress response regulation',
        },
        {
          term: 'FAAH (amida hidrolasa de acidos grasos) | FAAH (fatty acid amide hydrolase)',
          definition:
            'Enzima que degrada la anandamida (endocannabinoide); su inhibicion aumenta los niveles de anandamida y puede reducir la respuesta al estres | Enzyme degrading anandamide (endocannabinoid); its inhibition increases anandamide levels and may reduce stress response',
        },
        {
          term: 'gemelo digital | digital twin',
          definition:
            'Modelo computacional personalizado de un individuo que permite simular respuestas a diferentes intervenciones antes de implementarlas | Personalized computational model of an individual allowing simulation of responses to different interventions before implementation',
        },
        {
          term: 'punto de inflexion (tipping point)',
          definition:
            'En teoria de sistemas dinamicos, el umbral critico donde un sistema de estres adaptativo se vuelve maladaptativo, potencialmente detectable mediante senales de alerta temprana | In dynamic systems theory, the critical threshold where an adaptive stress system becomes maladaptive, potentially detectable through early warning signals',
        },
        {
          term: '11-beta-HSD1/2',
          definition:
            'Enzimas que regulan la conversion entre cortisol activo y cortisona inactiva en tejidos perifericos; dianas para modulacion farmacologica del estres tisular | Enzymes regulating conversion between active cortisol and inactive cortisone in peripheral tissues; targets for pharmacological modulation of tissue stress',
        },
      ],
      clinicalNotes:
        'La practica de vanguardia en manejo del estres integra evaluacion multimodal (psicometrica + biomarcadores + digital) con intervenciones personalizadas. El biofeedback de VFC tiene evidencia solida y es implementable en entornos comunitarios con tecnologia accesible. Las terapias dirigidas a FKBP5 y al sistema endocannabinoide son prometedoras pero aun preclínicas/experimentales. En investigacion con poblaciones latinas, los disenos de investigacion participativa basada en la comunidad (CBPR) son esenciales para generar evidencia culturalmente relevante. Los biomarcadores de envejecimiento acelerado (longitud de telomeros, reloj epigenetico de Horvath) documentan los efectos biologicos de la discriminacion cronica, apoyando intervenciones a nivel de politicas. La inteligencia artificial predictiva para deteccion temprana de descompensacion por estres es un area activa de investigacion pero requiere validacion en poblaciones diversas. | State-of-the-art stress management integrates multimodal assessment (psychometric + biomarkers + digital) with personalized interventions. HRV biofeedback has solid evidence and is implementable in community settings with accessible technology. FKBP5-targeted and endocannabinoid therapies are promising but still preclinical/experimental. In research with Latino populations, community-based participatory research (CBPR) designs are essential for generating culturally relevant evidence. Accelerated aging biomarkers (telomere length, Horvath epigenetic clock) document the biological effects of chronic discrimination, supporting policy-level interventions. Predictive AI for early detection of stress decompensation is an active research area but requires validation in diverse populations.',
    },
  },

  media: [],

  citations: [
    {
      id: 'nimh-stress-fact-sheet',
      type: 'website',
      title: 'NIMH: I Am So Stressed Out! Fact Sheet',
      source: 'National Institute of Mental Health',
      url: 'https://www.nimh.nih.gov/health/publications/so-stressed-out-fact-sheet',
      accessedDate: '2026-02-01',
    },
    {
      id: 'samhsa-stress-and-wellness',
      type: 'website',
      title: 'SAMHSA: Tips for Coping with Stress and Building Resilience',
      source: 'Substance Abuse and Mental Health Services Administration',
      url: 'https://www.samhsa.gov/mental-health/how-to-cope',
      accessedDate: '2026-02-01',
    },
    {
      id: 'medlineplus-stress',
      type: 'website',
      title: 'MedlinePlus: Stress and Your Health',
      source: 'U.S. National Library of Medicine',
      url: 'https://medlineplus.gov/stress.html',
      accessedDate: '2026-02-01',
    },
    {
      id: 'who-stress-management',
      type: 'guideline',
      title: 'WHO Doing What Matters in Times of Stress: An Illustrated Guide',
      authors: ['World Health Organization'],
      source: 'WHO',
      url: 'https://www.who.int/publications/i/item/9789240003927',
    },
  ],

  crossReferences: [
    {
      targetId: 'mental-health-ansiedad-anxiety',
      targetType: 'condition',
      relationship: 'related',
      label: 'Ansiedad | Anxiety',
    },
    {
      targetId: 'mental-health-depresion-depression',
      targetType: 'condition',
      relationship: 'related',
      label: 'Depresion | Depression',
    },
    {
      targetId: 'topic-when-to-seek-mental-help',
      targetType: 'topic',
      relationship: 'see-also',
      label: 'Cuando Buscar Ayuda para Salud Mental | When to Seek Mental Help',
    },
  ],

  tags: {
    systems: ['mental-health'],
    topics: ['mental-health', 'behavioral-health', 'wellness', 'prevention'],
    keywords: [
      'estres',
      'stress',
      'manejo del estres',
      'stress management',
      'relajacion',
      'relaxation',
      'cortisol',
      'mindfulness',
      'atencion plena',
      'autocuidado',
      'self-care',
      'ansiedad',
      'anxiety',
      'bienestar',
      'wellness',
      'salud mental',
      'mental health',
    ],
    clinicalRelevance: 'high',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default stressManagementPracticalContent;
