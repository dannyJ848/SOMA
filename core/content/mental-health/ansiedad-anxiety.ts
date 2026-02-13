/**
 * Ansiedad / Anxiety - Contenido Educativo Bilingue
 *
 * Trastorno de ansiedad generalizada, trastorno de panico, ansiedad social y fobias.
 * Generalized anxiety disorder, panic disorder, social anxiety, and phobias.
 *
 * Spanish-first with English translations separated by " | "
 * Culturally sensitive content for Spanish-speaking populations.
 */

import { EducationalContent } from '../types';

export const ansiedadAnxietyContent: EducationalContent = {
  id: 'mental-health-ansiedad-anxiety',
  type: 'condition',
  name: 'Trastornos de Ansiedad | Anxiety Disorders',
  nameEs: 'Trastornos de Ansiedad',
  alternateNames: [
    'Ansiedad Generalizada | Generalized Anxiety',
    'Trastorno de Panico | Panic Disorder',
    'Ansiedad Social | Social Anxiety',
    'Fobias | Phobias',
    'TAG | GAD',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'La ansiedad es una respuesta natural del cuerpo ante el peligro, pero cuando se vuelve excesiva y constante, se convierte en un trastorno que necesita tratamiento. No estas exagerando -- es una condicion medica real. | Anxiety is a natural body response to danger, but when it becomes excessive and constant, it becomes a disorder that needs treatment. You are not exaggerating -- it is a real medical condition.',
      explanation: `**Que es la ansiedad? | What is anxiety?**

Todos sentimos ansiedad a veces -- antes de un examen, una entrevista de trabajo o al hablar en publico. Eso es normal. Pero cuando la preocupacion es tan fuerte que no te deja vivir tu vida normal, puede ser un trastorno de ansiedad. | Everyone feels anxiety sometimes -- before a test, a job interview, or when speaking in public. That is normal. But when the worry is so strong that it does not let you live your normal life, it may be an anxiety disorder.

**Los trastornos de ansiedad son reales | Anxiety disorders are real:**

- No es "estar nervioso/a" o "ser exagerado/a" | It is not "being nervous" or "overreacting"
- Es una condicion medica que afecta el cerebro | It is a medical condition that affects the brain
- Es muy comun -- afecta a millones de personas | It is very common -- it affects millions of people
- Tiene tratamiento y la mayoria de las personas mejoran | It has treatment and most people get better

**Tipos principales de ansiedad | Main types of anxiety:**

**Ansiedad generalizada (TAG) | Generalized Anxiety (GAD):**
- Preocupacion excesiva y constante sobre muchas cosas | Excessive and constant worry about many things
- Dificultad para controlar la preocupacion | Difficulty controlling the worry
- Tension muscular, problemas para dormir, irritabilidad | Muscle tension, trouble sleeping, irritability

**Trastorno de panico | Panic Disorder:**
- Ataques de panico repentinos e intensos | Sudden, intense panic attacks
- Sensacion de que vas a morir o perder el control | Feeling like you are going to die or lose control
- Corazon acelerado, sudor, temblores, falta de aire | Racing heart, sweating, trembling, shortness of breath
- Los ataques de panico NO son peligrosos aunque se sientan aterradores | Panic attacks are NOT dangerous even though they feel terrifying

**Ansiedad social | Social Anxiety:**
- Miedo intenso a ser juzgado/a o avergonzado/a | Intense fear of being judged or embarrassed
- Evitar situaciones sociales | Avoiding social situations
- No es solo ser "timido/a" -- es un miedo que te limita | It is not just being "shy" -- it is a fear that limits you

**Fobias especificas | Specific Phobias:**
- Miedo intenso a algo especifico (alturas, agujas, animales, etc.) | Intense fear of something specific (heights, needles, animals, etc.)
- El miedo es desproporcionado al peligro real | The fear is out of proportion to the actual danger

**En nuestra cultura | In our culture:**

En muchas familias latinas, los sintomas de ansiedad se describen como "nervios," "susto" o "ataque de nervios." Estas experiencias son reales y validas. No tienes que sufrir en silencio -- hay ayuda disponible en espanol. | In many Latino families, anxiety symptoms are described as "nervios," "susto," or "ataque de nervios." These experiences are real and valid. You do not have to suffer in silence -- help is available in Spanish.

**Tratamiento | Treatment:**

- Terapia de conversacion (especialmente TCC) | Talk therapy (especially CBT)
- Medicamentos cuando son necesarios | Medications when needed
- Tecnicas de relajacion y respiracion | Relaxation and breathing techniques
- Ejercicio regular | Regular exercise
- La combinacion de tratamientos funciona mejor | Combination of treatments works best

**RECURSOS DE CRISIS | CRISIS RESOURCES:**
- **988 Linea de Suicidio y Crisis**: Llama o envia texto al 988 (espanol disponible) | Call or text 988 (Spanish available)
- **Linea de Crisis por texto**: Envia "HOLA" al 741741 | Text "HELLO" to 741741
- **SAMHSA**: 1-800-662-4357 (espanol disponible)
- Si sientes que estas en crisis, no estas solo/a. Llama ahora. | If you feel you are in crisis, you are not alone. Call now.`,
      keyTerms: [
        {
          term: 'ansiedad | anxiety',
          definition:
            'Una respuesta del cuerpo ante el peligro que se vuelve un problema cuando es excesiva y constante | A body response to danger that becomes a problem when it is excessive and constant',
        },
        {
          term: 'ataque de panico | panic attack',
          definition:
            'Un episodio repentino de miedo intenso con sintomas fisicos fuertes que NO es peligroso | A sudden episode of intense fear with strong physical symptoms that is NOT dangerous',
        },
        {
          term: 'fobia | phobia',
          definition:
            'Un miedo intenso e irracional hacia algo especifico | An intense, irrational fear of something specific',
        },
        {
          term: 'nervios',
          definition:
            'Termino cultural usado en la comunidad latina para describir sintomas de ansiedad y malestar emocional | Cultural term used in the Latino community to describe anxiety symptoms and emotional distress',
        },
      ],
      analogies: [
        'La ansiedad es como una alarma de incendios que se activa cuando no hay fuego -- tu cuerpo reacciona como si hubiera peligro, aunque no lo haya. | Anxiety is like a fire alarm that goes off when there is no fire -- your body reacts as if there is danger, even though there is not.',
        'Un ataque de panico es como si tu cuerpo pusiera el acelerador a fondo sin razon -- es aterrador, pero no es peligroso y siempre pasa. | A panic attack is like your body pressing the gas pedal to the floor for no reason -- it is terrifying, but it is not dangerous and it always passes.',
        'La ansiedad social es como tener un critico muy severo dentro de tu cabeza que siempre te dice que los demas te estan juzgando. | Social anxiety is like having a very harsh critic inside your head that always tells you others are judging you.',
      ],
      examples: [
        'Maria evita ir a las reuniones de la escuela de sus hijos porque le da mucha ansiedad hablar con otros padres. Esto no es ser "antisocial" -- es ansiedad social y tiene tratamiento. | Maria avoids going to her children school meetings because she gets very anxious talking to other parents. This is not being "antisocial" -- it is social anxiety and it has treatment.',
        'Jose siente que su corazon va muy rapido, le falta el aire y siente que va a morir. Va a la sala de emergencias pero le dicen que su corazon esta bien. Puede ser un ataque de panico. | Jose feels his heart racing, shortness of breath, and feels like he is going to die. He goes to the ER but they tell him his heart is fine. It may be a panic attack.',
      ],
      patientCounselingPoints: [
        'La ansiedad es una condicion medica, no una debilidad. | Anxiety is a medical condition, not a weakness.',
        'Los ataques de panico son aterradores pero NO son peligrosos. | Panic attacks are terrifying but NOT dangerous.',
        'El tratamiento es muy efectivo -- la mayoria de las personas mejoran. | Treatment is very effective -- most people get better.',
        'No tienes que vivir con este sufrimiento. Hay ayuda. | You do not have to live with this suffering. There is help.',
      ],
    },
    2: {
      level: 2,
      summary:
        'Los trastornos de ansiedad son un grupo de condiciones caracterizadas por preocupacion excesiva, miedo y evitacion que causan deterioro funcional significativo. Incluyen TAG, trastorno de panico, ansiedad social y fobias especificas, cada uno con perfiles de sintomas y tratamientos distintos. | Anxiety disorders are a group of conditions characterized by excessive worry, fear, and avoidance causing significant functional impairment. They include GAD, panic disorder, social anxiety, and specific phobias, each with distinct symptom profiles and treatments.',
      explanation: `**Epidemiologia | Epidemiology:**

- Los trastornos de ansiedad son las condiciones de salud mental mas comunes | Anxiety disorders are the most common mental health conditions
- Prevalencia de por vida: ~30% | Lifetime prevalence: ~30%
- Mas comunes en mujeres (2:1) | More common in women (2:1)
- Frecuentemente comorbidos con depresion y uso de sustancias | Frequently comorbid with depression and substance use
- En poblaciones latinas, factores como estres migratorio, aculturacion y barreras de idioma pueden exacerbar los sintomas | In Latino populations, factors like immigration stress, acculturation, and language barriers can exacerbate symptoms

**Trastorno de Ansiedad Generalizada (TAG) | Generalized Anxiety Disorder (GAD):**

*Caracteristicas principales | Key features:*
- Preocupacion excesiva y dificil de controlar sobre multiples areas por al menos 6 meses | Excessive, hard-to-control worry about multiple areas for at least 6 months
- 3 o mas sintomas asociados | 3 or more associated symptoms:
  - Inquietud o sensacion de estar "al limite" | Restlessness or feeling "on edge"
  - Fatiga facil | Easy fatigability
  - Dificultad para concentrarse | Difficulty concentrating
  - Irritabilidad | Irritability
  - Tension muscular | Muscle tension
  - Alteraciones del sueno | Sleep disturbance
- Causa malestar clinicamente significativo | Causes clinically significant distress

**Trastorno de Panico | Panic Disorder:**

*Ataques de panico | Panic attacks:*
- Oleada abrupta de miedo intenso que alcanza su maximo en minutos | Abrupt surge of intense fear that peaks within minutes
- 4 o mas sintomas fisicos y cognitivos | 4 or more physical and cognitive symptoms:
  - Palpitaciones, taquicardia | Palpitations, racing heart
  - Sudoracion | Sweating
  - Temblores | Trembling
  - Sensacion de falta de aire | Shortness of breath
  - Dolor o malestar en el pecho | Chest pain or discomfort
  - Nauseas o malestar abdominal | Nausea or abdominal distress
  - Mareos, inestabilidad | Dizziness, unsteadiness
  - Escalofrios o calor | Chills or heat sensations
  - Parestesias (adormecimiento, hormigueo) | Paresthesias (numbness, tingling)
  - Desrealizacion o despersonalizacion | Derealization or depersonalization
  - Miedo a perder el control o "volverse loco/a" | Fear of losing control or "going crazy"
  - Miedo a morir | Fear of dying

*Agorafobia (comorbida frecuente) | Agoraphobia (frequent comorbidity):*
- Miedo a situaciones donde escapar puede ser dificil | Fear of situations where escape might be difficult
- Evitacion de transporte publico, espacios abiertos, multitudes | Avoidance of public transport, open spaces, crowds

**Trastorno de Ansiedad Social (TAS) | Social Anxiety Disorder (SAD):**

- Miedo marcado a situaciones sociales donde uno puede ser evaluado | Marked fear of social situations where one may be scrutinized
- Miedo a actuar de manera humillante o embarazosa | Fear of acting in a humiliating or embarrassing way
- Las situaciones sociales casi siempre provocan miedo | Social situations almost always provoke fear
- Duracion de 6 o mas meses | Duration of 6 or more months
- Puede ser generalizado o limitado a situaciones de desempeno | Can be generalized or performance-only

**Fobias Especificas | Specific Phobias:**

- Miedo marcado circunscrito a un objeto o situacion especifica | Marked fear circumscribed to a specific object or situation
- Tipos: Animal, entorno natural, sangre-inyeccion-lesion, situacional, otro | Types: Animal, natural environment, blood-injection-injury, situational, other
- El objeto/situacion se evita activamente o se soporta con miedo intenso | The object/situation is actively avoided or endured with intense fear
- El miedo es desproporcionado al peligro real | The fear is out of proportion to actual danger

**Neurobiologia basica | Basic neurobiology:**

- Amigdala hiperactiva (centro del miedo) | Hyperactive amygdala (fear center)
- Corteza prefrontal hipoactiva (control del miedo) | Hypoactive prefrontal cortex (fear control)
- Desequilibrio de GABA, serotonina, norepinefrina | Imbalance of GABA, serotonin, norepinephrine
- Sistema nervioso autonomo desregulado (respuesta de "luchar o huir") | Dysregulated autonomic nervous system (fight-or-flight response)

**Tratamiento | Treatment:**

*Psicoterapia | Psychotherapy:*
- TCC: Reestructuracion cognitiva + exposicion | CBT: Cognitive restructuring + exposure
- Terapia de exposicion: Enfrentar gradualmente los miedos | Exposure therapy: Gradually facing fears
- Terapia de aceptacion y compromiso (ACT) | Acceptance and Commitment Therapy (ACT)

*Farmacoterapia | Pharmacotherapy:*
- ISRS: Primera linea para todos los trastornos de ansiedad | SSRIs: First-line for all anxiety disorders
- IRSN: Venlafaxina, duloxetina | SNRIs: Venlafaxine, duloxetine
- Buspirona: Para TAG | Buspirone: For GAD
- Benzodiazepinas: Solo a corto plazo por riesgo de dependencia | Benzodiazepines: Short-term only due to dependence risk
- Betabloqueadores: Para ansiedad de desempeno | Beta-blockers: For performance anxiety

*Cambios en estilo de vida | Lifestyle changes:*
- Ejercicio regular (30 min, 5 dias/semana) | Regular exercise (30 min, 5 days/week)
- Higiene del sueno | Sleep hygiene
- Reduccion de cafeina y alcohol | Reducing caffeine and alcohol
- Tecnicas de relajacion y mindfulness | Relaxation and mindfulness techniques`,
      keyTerms: [
        {
          term: 'TAG | GAD',
          definition:
            'Trastorno de Ansiedad Generalizada -- preocupacion excesiva y persistente sobre multiples areas de la vida | Generalized Anxiety Disorder -- excessive, persistent worry about multiple areas of life',
        },
        {
          term: 'agorafobia | agoraphobia',
          definition:
            'Miedo a situaciones donde escapar puede ser dificil o la ayuda no esta disponible | Fear of situations where escape might be difficult or help is not available',
          pronunciation: 'a-go-ra-FO-bia',
        },
        {
          term: 'desrealizacion | derealization',
          definition:
            'Sentir que el mundo a tu alrededor no es real | Feeling that the world around you is not real',
        },
        {
          term: 'terapia de exposicion | exposure therapy',
          definition:
            'Tratamiento que involucra enfrentar gradualmente las situaciones temidas de manera controlada | Treatment that involves gradually facing feared situations in a controlled manner',
        },
        {
          term: 'benzodiazepina | benzodiazepine',
          definition:
            'Medicamento de accion rapida para la ansiedad; riesgo de dependencia con uso prolongado | Fast-acting medication for anxiety; risk of dependence with prolonged use',
        },
      ],
      analogies: [
        'La amigdala es como el "detector de humo" del cerebro -- en los trastornos de ansiedad, este detector es demasiado sensible y se activa por cosas que no son peligrosas. | The amygdala is like the brain smoke detector -- in anxiety disorders, this detector is too sensitive and gets triggered by things that are not dangerous.',
        'La terapia de exposicion es como aprender a nadar -- al principio da miedo, pero con practica gradual, tu cerebro aprende que es seguro. | Exposure therapy is like learning to swim -- at first it is scary, but with gradual practice, your brain learns it is safe.',
      ],
      examples: [
        'Una persona con TAG puede pasar horas preocupandose por cosas que probablemente no sucedan, como un terremoto o perder su trabajo, sin poder "apagar" esos pensamientos. | A person with GAD may spend hours worrying about things that probably will not happen, like an earthquake or losing their job, without being able to "turn off" those thoughts.',
        'Un adolescente con ansiedad social puede negarse a ir a la escuela porque tiene miedo de que se burlen de el/ella. | A teenager with social anxiety may refuse to go to school because they are afraid of being made fun of.',
      ],
    },
    3: {
      level: 3,
      summary:
        'Los trastornos de ansiedad involucran disfuncion en el circuito del miedo (amigdala-CPF), desregulacion de neurotransmisores (GABA, serotonina, norepinefrina), y condicionamiento del miedo alterado. La TCC con exposicion y los ISRS son tratamientos de primera linea basados en evidencia. | Anxiety disorders involve fear circuit dysfunction (amygdala-PFC), neurotransmitter dysregulation (GABA, serotonin, norepinephrine), and altered fear conditioning. CBT with exposure and SSRIs are first-line evidence-based treatments.',
      explanation: `**Criterios diagnosticos DSM-5-TR | DSM-5-TR Diagnostic Criteria:**

**TAG | GAD:**
- Ansiedad y preocupacion excesiva sobre multiples eventos/actividades, la mayoria de los dias, por al menos 6 meses | Excessive anxiety and worry about multiple events/activities, more days than not, for at least 6 months
- La persona encuentra dificil controlar la preocupacion | The person finds it difficult to control the worry
- La ansiedad se asocia con 3+ de: inquietud, fatiga facil, dificultad de concentracion, irritabilidad, tension muscular, alteracion del sueno | Anxiety associated with 3+ of: restlessness, easy fatigability, difficulty concentrating, irritability, muscle tension, sleep disturbance
- Causa malestar clinicamente significativo o deterioro funcional | Causes clinically significant distress or functional impairment

**Trastorno de Panico | Panic Disorder:**
- Ataques de panico inesperados recurrentes | Recurrent unexpected panic attacks
- Al menos 1 ataque seguido de 1+ mes de: | At least 1 attack followed by 1+ month of:
  - Preocupacion persistente por mas ataques | Persistent worry about more attacks
  - Cambio desadaptativo significativo en el comportamiento | Significant maladaptive behavioral change

**TAS | SAD:**
- Miedo o ansiedad marcada sobre una o mas situaciones sociales | Marked fear or anxiety about one or more social situations
- El individuo teme actuar de una manera que sera evaluada negativamente | The individual fears acting in a way that will be negatively evaluated
- Las situaciones sociales casi siempre provocan miedo o ansiedad | Social situations almost always provoke fear or anxiety
- Las situaciones se evitan o se soportan con miedo/ansiedad intensa | Situations are avoided or endured with intense fear/anxiety
- El miedo es desproporcionado a la amenaza real | The fear is disproportionate to the actual threat
- Duracion 6+ meses | Duration 6+ months

**Neurobiologia | Neurobiology:**

*Circuito del miedo | Fear circuit:*
- Amigdala: Procesamiento y generacion de respuestas de miedo | Amygdala: Processing and generating fear responses
- Corteza prefrontal medial (CPFm): Regulacion descendente del miedo | Medial prefrontal cortex (mPFC): Top-down fear regulation
- Hipocampo: Contextualizacion del miedo | Hippocampus: Fear contextualization
- Insula: Percepcion interoceptiva (prominente en panico) | Insula: Interoceptive awareness (prominent in panic)
- Corteza cingulada anterior (CCA): Monitoreo de conflictos | Anterior cingulate cortex (ACC): Conflict monitoring

*Neurotransmisores | Neurotransmitters:*
- GABA: Principal neurotransmisor inhibitorio; reducido en ansiedad | GABA: Main inhibitory neurotransmitter; reduced in anxiety
- Serotonina (5-HT): Modula ansiedad; objetivo de ISRS | Serotonin (5-HT): Modulates anxiety; target of SSRIs
- Norepinefrina: Activacion, respuesta de alarma; hiperactividad del locus ceruleus en panico | Norepinephrine: Arousal, alarm response; locus coeruleus hyperactivity in panic
- Glutamato: Excitatorio; implicado en condicionamiento del miedo | Glutamate: Excitatory; implicated in fear conditioning

*Eje HPA | HPA Axis:*
- Cortisol elevado en ansiedad cronica | Elevated cortisol in chronic anxiety
- Sensibilidad al estres aumentada | Increased stress sensitivity
- Superposicion con fisiopatologia de la depresion | Overlap with depression pathophysiology

*Condicionamiento del miedo | Fear conditioning:*
- Adquisicion excesiva del miedo | Excessive fear acquisition
- Extincion del miedo deteriorada | Impaired fear extinction
- Generalizacion del miedo (estimulos seguros provocan miedo) | Fear generalization (safe stimuli provoke fear)
- Base neurobiologica de la terapia de exposicion | Neurobiological basis for exposure therapy

**Tratamiento farmacologico detallado | Detailed pharmacological treatment:**

*ISRS (primera linea) | SSRIs (first-line):*
- Eficaces para TAG, panico, TAS, fobias | Effective for GAD, panic, SAD, phobias
- Sertralina, paroxetina, escitalopram mas estudiados | Sertraline, paroxetine, escitalopram most studied
- Inicio: Dosis baja, titular gradualmente | Start: Low dose, titrate gradually
- Tiempo de respuesta: 4-8 semanas | Response time: 4-8 weeks
- Empeoramiento paradojico inicial posible (especialmente en panico) | Paradoxical initial worsening possible (especially in panic)

*IRSN | SNRIs:*
- Venlafaxina XR: Aprobada para TAG y TAS | Venlafaxine XR: Approved for GAD and SAD
- Duloxetina: Aprobada para TAG | Duloxetine: Approved for GAD

*Benzodiazepinas | Benzodiazepines:*
- Accion rapida (alivio en 30-60 minutos) | Fast-acting (relief in 30-60 minutes)
- Riesgo de dependencia, tolerancia, abstinencia | Risk of dependence, tolerance, withdrawal
- Solo a corto plazo o como puente al inicio de ISRS | Short-term only or as bridge when starting SSRIs
- Contraindicadas con historial de uso de sustancias | Contraindicated with substance use history

*Otros agentes | Other agents:*
- Buspirona: Agonista parcial 5-HT1A; para TAG; sin potencial de abuso | Buspirone: 5-HT1A partial agonist; for GAD; no abuse potential
- Pregabalina: Modulador de canal de calcio; usada en TAG (aprobada en Europa) | Pregabalin: Calcium channel modulator; used in GAD (approved in Europe)
- Hidroxizina: Antihistaminico; uso a corto plazo | Hydroxyzine: Antihistamine; short-term use
- Propranolol: Betabloqueador; ansiedad de desempeno | Propranolol: Beta-blocker; performance anxiety

**Psicoterapia basada en evidencia | Evidence-based psychotherapy:**

*TCC | CBT:*
- Reestructuracion cognitiva: Identificar y desafiar pensamientos catastroficos | Cognitive restructuring: Identify and challenge catastrophic thoughts
- Exposicion gradual: Habituacion a estimulos temidos | Graded exposure: Habituation to feared stimuli
- Prevencion de respuesta: No realizar conductas de seguridad | Response prevention: Not engaging in safety behaviors
- 12-16 sesiones tipicas | 12-16 typical sessions
- Eficacia comparable a medicamentos; efectos mas duraderos | Efficacy comparable to medications; more durable effects

*Terapia de exposicion especifica | Specific exposure therapy:*
- Panico: Exposicion interoceptiva (provocar sensaciones corporales) | Panic: Interoceptive exposure (provoking body sensations)
- TAS: Exposicion social graduada, video feedback | SAD: Graded social exposure, video feedback
- Fobias: Exposicion in vivo sistematica | Phobias: Systematic in vivo exposure

*ACT (Terapia de Aceptacion y Compromiso) | ACT (Acceptance and Commitment Therapy):*
- Aceptar pensamientos ansiosos sin luchar | Accept anxious thoughts without fighting
- Defusion cognitiva | Cognitive defusion
- Actuar segun valores a pesar de la ansiedad | Act according to values despite anxiety`,
      keyTerms: [
        {
          term: 'amigdala | amygdala',
          definition:
            'Estructura cerebral clave en el procesamiento del miedo; hiperactiva en trastornos de ansiedad | Key brain structure in fear processing; hyperactive in anxiety disorders',
          pronunciation: 'a-MIG-da-la',
        },
        {
          term: 'GABA',
          definition:
            'Acido gamma-aminobutirico -- principal neurotransmisor inhibitorio del cerebro; reducido en ansiedad | Gamma-aminobutyric acid -- main inhibitory neurotransmitter; reduced in anxiety',
        },
        {
          term: 'condicionamiento del miedo | fear conditioning',
          definition:
            'Proceso de aprendizaje por el cual un estimulo neutro se asocia con una amenaza | Learning process by which a neutral stimulus becomes associated with a threat',
        },
        {
          term: 'extincion del miedo | fear extinction',
          definition:
            'Nuevo aprendizaje que reduce la respuesta de miedo condicionada; base de la terapia de exposicion | New learning that reduces conditioned fear response; basis of exposure therapy',
        },
        {
          term: 'exposicion interoceptiva | interoceptive exposure',
          definition:
            'Tecnica que provoca intencionalmente sensaciones corporales temidas para reducir el miedo | Technique that intentionally provokes feared body sensations to reduce fear',
        },
      ],
      clinicalNotes:
        'Los trastornos de ansiedad frecuentemente se presentan con quejas somaticas en atencion primaria (dolor de pecho, GI, mareos). Descartar causas medicas (hipertiroidismo, arritmias, feocromocitoma). En pacientes hispanohablantes, "nervios" y "ataque de nervios" pueden representar trastornos de ansiedad y deben explorarse con sensibilidad cultural. El inicio bajo de ISRS es critico en trastorno de panico para evitar empeoramiento paradojico. | Anxiety disorders frequently present with somatic complaints in primary care (chest pain, GI, dizziness). Rule out medical causes (hyperthyroidism, arrhythmias, pheochromocytoma). In Spanish-speaking patients, "nervios" and "ataque de nervios" may represent anxiety disorders and should be explored with cultural sensitivity. Low-start SSRIs are critical in panic disorder to avoid paradoxical worsening.',
    },
    4: {
      level: 4,
      summary:
        'La fisiopatologia avanzada de los trastornos de ansiedad incluye disfuncion de circuitos cortico-limbicos, alteraciones en la conectividad amigdala-CPF, procesamiento interoceptivo anormal y aprendizaje de seguridad deficiente. Los enfoques transdiagnosticos y la precision terapeutica guian el tratamiento contemporaneo. | Advanced anxiety disorder pathophysiology includes cortico-limbic circuit dysfunction, altered amygdala-PFC connectivity, abnormal interoceptive processing, and deficient safety learning. Transdiagnostic approaches and therapeutic precision guide contemporary treatment.',
      explanation: `**Fisiopatologia avanzada | Advanced pathophysiology:**

*Circuitos neuronales por trastorno | Neural circuits by disorder:*

TAG | GAD:
- Hiperactividad de la amigdala y la insula anterior | Amygdala and anterior insula hyperactivity
- Regulacion prefrontal ineficiente (esfuerzo compensatorio) | Inefficient prefrontal regulation (compensatory effort)
- Conectividad amigdala-CPFvm alterada | Altered amygdala-vmPFC connectivity
- Preocupacion como evitacion cognitiva de imagenes emocionales | Worry as cognitive avoidance of emotional imagery

Trastorno de panico | Panic Disorder:
- Red del miedo hiperactiva: Amigdala, insula, sustancia gris periacueductal | Hyperactive fear network: Amygdala, insula, periaqueductal gray
- Sensibilidad interoceptiva aumentada (insula) | Increased interoceptive sensitivity (insula)
- Quimiosensibilidad del tronco encefalico (CO2, lactato) | Brainstem chemosensitivity (CO2, lactate)
- Modelo de alarma por asfixia de Klein | Klein suffocation alarm model

TAS | SAD:
- Amigdala hiperactiva durante evaluacion social | Amygdala hyperactive during social evaluation
- CPFm hipoactiva (falla de regulacion) | mPFC hypoactive (regulatory failure)
- Corteza cingulada anterior dorsal hiperactiva (automonitoreo excesivo) | Dorsal ACC hyperactive (excessive self-monitoring)
- Sesgo atencional hacia caras amenazantes | Attentional bias toward threatening faces

*Genetica y epigenetica | Genetics and epigenetics:*
- Heredabilidad: 30-50% para la mayoria de trastornos de ansiedad | Heritability: 30-50% for most anxiety disorders
- Genes candidatos: SERT (5-HTTLPR), COMT, CRHR1, FKBP5, NPSR1 | Candidate genes: SERT (5-HTTLPR), COMT, CRHR1, FKBP5, NPSR1
- Factores epigeneticos: Metilacion de NR3C1, FKBP5 | Epigenetic factors: NR3C1, FKBP5 methylation
- Transmision intergeneracional del estres (trauma, inmigracion) | Intergenerational stress transmission (trauma, immigration)

*Modelos cognitivos avanzados | Advanced cognitive models:*
- Modelo de intolerancia a la incertidumbre (TAG) | Intolerance of uncertainty model (GAD)
- Modelo cognitivo de Clark (panico): Interpretacion catastrofica de sensaciones | Clark cognitive model (panic): Catastrophic interpretation of sensations
- Modelo de Clark y Wells (TAS): Autoprocesamiento, conductas de seguridad | Clark and Wells model (SAD): Self-processing, safety behaviors
- Sesgo atencional, sesgo interpretativo, sesgo de memoria | Attentional bias, interpretive bias, memory bias

**Tratamiento avanzado | Advanced treatment:**

*Farmacoterapia basada en evidencia | Evidence-based pharmacotherapy:*

Algoritmo TAG | GAD Algorithm:
1. ISRS o IRSN (primera linea) | SSRI or SNRI (first-line)
2. Cambiar a otro ISRS/IRSN si no hay respuesta | Switch to another SSRI/SNRI if no response
3. Potenciacion: Pregabalina, buspirona, hidroxizina | Augmentation: Pregabalin, buspirone, hydroxyzine
4. Considerar: Mirtazapina, quetiapina (segunda linea) | Consider: Mirtazapine, quetiapine (second-line)

Algoritmo Panico | Panic Algorithm:
1. ISRS (iniciar dosis baja) o venlafaxina XR | SSRI (start low dose) or venlafaxine XR
2. BZD puente a corto plazo si es necesario | Short-term BZD bridge if needed
3. Cambiar ISRS si no hay respuesta en 8 semanas | Switch SSRI if no response at 8 weeks
4. TCC + medicamento combinacion | CBT + medication combination
5. Considerar clomipramina para refractarios | Consider clomipramine for refractory

Algoritmo TAS | SAD Algorithm:
1. ISRS (paroxetina, sertralina mas evidencia) o venlafaxina XR | SSRI (paroxetine, sertraline most evidence) or venlafaxine XR
2. TCC como monoterapia o combinada | CBT as monotherapy or combined
3. Fenelzina (IMAO) para refractarios | Phenelzine (MAOI) for refractory
4. Propranolol solo para ansiedad de desempeno | Propranolol for performance anxiety only

*TCC avanzada | Advanced CBT:*
- Protocolos transdiagnosticos (Protocolo Unificado de Barlow) | Transdiagnostic protocols (Barlow Unified Protocol)
- Componentes: Psicoeducacion, atencion plena, revaloracion cognitiva, prevencion de evitacion, exposicion interoceptiva/emocional | Components: Psychoeducation, mindfulness, cognitive reappraisal, avoidance prevention, interoceptive/emotional exposure
- Exposicion asistida por realidad virtual | Virtual reality-assisted exposure
- TCC basada en internet (efectividad comparable) | Internet-based CBT (comparable effectiveness)

*Potenciacion farmacologica de la psicoterapia | Pharmacological augmentation of psychotherapy:*
- D-cicloserina (DCS): Agonista parcial NMDA; potencia la extincion del miedo durante exposicion | D-cycloserine (DCS): NMDA partial agonist; enhances fear extinction during exposure
- Resultados mixtos pero prometedores | Mixed but promising results
- MDMA: Investigacion para ansiedad social resistente | MDMA: Research for treatment-resistant social anxiety

**Comorbilidad y diagnostico diferencial | Comorbidity and differential diagnosis:**

- Depresion (60% de comorbilidad) | Depression (60% comorbidity)
- Otros trastornos de ansiedad (alta co-ocurrencia) | Other anxiety disorders (high co-occurrence)
- TEPT | PTSD
- TOC (ya no clasificado como trastorno de ansiedad en DSM-5) | OCD (no longer classified as anxiety disorder in DSM-5)
- Uso de sustancias (especialmente alcohol, benzodiazepinas) | Substance use (especially alcohol, benzodiazepines)
- Condiciones medicas: Hipertiroidismo, arritmias, EPOC, vestibulares | Medical conditions: Hyperthyroidism, arrhythmias, COPD, vestibular

**Consideraciones culturales avanzadas | Advanced cultural considerations:**

- "Ataque de nervios": Sindrome cultural que puede solaparse con panico; incluye gritar, llorar, temblores, calor, falta de control | "Ataque de nervios": Cultural syndrome overlapping with panic; includes screaming, crying, trembling, heat, loss of control
- "Nervios": Concepto amplio que abarca ansiedad, depresion y malestar somatico | "Nervios": Broad concept encompassing anxiety, depression, and somatic distress
- Adaptaciones culturales de TCC mejoran la efectividad en poblaciones latinas | Cultural adaptations of CBT improve effectiveness in Latino populations
- Incorporar valores familiares (familismo) en el tratamiento | Incorporate family values (familismo) in treatment`,
      keyTerms: [
        {
          term: 'intolerancia a la incertidumbre | intolerance of uncertainty',
          definition:
            'Tendencia a reaccionar negativamente ante situaciones inciertas; factor central en TAG | Tendency to react negatively to uncertain situations; central factor in GAD',
        },
        {
          term: 'exposicion interoceptiva | interoceptive exposure',
          definition:
            'Provocacion deliberada de sensaciones corporales temidas para reducir el miedo al panico | Deliberate provocation of feared body sensations to reduce fear of panic',
        },
        {
          term: 'D-cicloserina | D-cycloserine',
          definition:
            'Agonista parcial del receptor NMDA que puede potenciar la extincion del miedo durante la terapia de exposicion | NMDA receptor partial agonist that may enhance fear extinction during exposure therapy',
        },
        {
          term: 'protocolo unificado | unified protocol',
          definition:
            'Tratamiento transdiagnostico de Barlow para trastornos emocionales basado en la regulacion emocional | Barlow transdiagnostic treatment for emotional disorders based on emotion regulation',
        },
        {
          term: 'ataque de nervios',
          definition:
            'Sindrome cultural reportado en poblaciones latinas que incluye sintomas somaticos y emocionales intensos, frecuentemente solapandose con ataques de panico | Cultural syndrome reported in Latino populations including intense somatic and emotional symptoms, frequently overlapping with panic attacks',
        },
      ],
      clinicalNotes:
        'Considerar comorbilidades: 50-60% de pacientes con TAG tienen depresion comorbida. El trastorno de panico tiene alta tasa de visitas a urgencias (dolor toracico, disnea). Evitar benzodiazepinas a largo plazo; considerar discontinuacion gradual en pacientes que ya las usan. La sensibilidad a la ansiedad (miedo al miedo) es un objetivo transdiagnostico importante. En pacientes hispanohablantes, validar la experiencia de "nervios/ataque de nervios" como punto de entrada para psicoeducacion sobre trastornos de ansiedad. | Consider comorbidities: 50-60% of GAD patients have comorbid depression. Panic disorder has high ER visit rate (chest pain, dyspnea). Avoid long-term benzodiazepines; consider gradual discontinuation in patients already using them. Anxiety sensitivity (fear of fear) is an important transdiagnostic target. In Spanish-speaking patients, validate the experience of "nervios/ataque de nervios" as an entry point for psychoeducation about anxiety disorders.',
    },
    5: {
      level: 5,
      summary:
        'La investigacion de vanguardia en trastornos de ansiedad se centra en el aprendizaje de seguridad versus extincion del miedo, potenciadores farmacologicos de la psicoterapia, circuitos neuronales de precision como objetivos de neuromodulacion, y enfoques dimensionales/transdiagnosticos basados en RDoC. La integracion de disparidades y competencia cultural es esencial para la practica basada en evidencia. | Cutting-edge anxiety disorder research focuses on safety learning versus fear extinction, pharmacological enhancers of psychotherapy, precision neural circuit targets for neuromodulation, and dimensional/transdiagnostic RDoC-based approaches. Integration of disparities and cultural competence is essential for evidence-based practice.',
      explanation: `**Neurociencia translacional avanzada | Advanced translational neuroscience:**

*Aprendizaje de seguridad vs extincion del miedo | Safety learning vs fear extinction:*
- Modelo clasico: Exposicion = extincion del miedo (nuevo aprendizaje inhibitorio) | Classical model: Exposure = fear extinction (new inhibitory learning)
- Modelo actualizado: Aprendizaje de seguridad como proceso activo distinto | Updated model: Safety learning as distinct active process
- Circuito de seguridad: CPFvm, estriado ventral, cuerpo estriado de la cama (BNST) | Safety circuit: vmPFC, ventral striatum, bed nucleus stria terminalis (BNST)
- Implicaciones: Optimizar exposicion para maximizar aprendizaje de seguridad | Implications: Optimize exposure to maximize safety learning
- Estrategias de deepened extinction, expectancy violation | Deepened extinction, expectancy violation strategies

*Conectomica y precision de circuitos | Connectomics and circuit precision:*
- Mapeo funcional del circuito amigdala-CPF a nivel de subregiones | Functional mapping of amygdala-PFC circuit at subregion level
- Amigdala basolateral: Aprendizaje del miedo | Basolateral amygdala: Fear learning
- Amigdala central: Expresion del miedo | Central amygdala: Fear expression
- Celulas intercaladas: Regulacion de la extincion | Intercalated cells: Extinction regulation
- Implicaciones para neuromodulacion precisa | Implications for precise neuromodulation

*Neuroinmunologia | Neuroimmunology:*
- Microglia activada en amigdala en modelos animales de ansiedad | Activated microglia in amygdala in animal anxiety models
- Citoquinas proinflamatorias modulan el condicionamiento del miedo | Pro-inflammatory cytokines modulate fear conditioning
- Eje intestino-cerebro: Disbiosis del microbioma asociada con ansiedad | Gut-brain axis: Microbiome dysbiosis associated with anxiety
- Potencial terapeutico de probioticos (psicobioticos) | Therapeutic potential of probiotics (psychobiotics)

**Farmacologia de precision y agentes novedosos | Precision pharmacology and novel agents:**

*Potenciadores de la extincion del miedo | Fear extinction enhancers:*
- D-cicloserina (DCS): Mejor resultados con dosis aguda pre-exposicion | D-cycloserine (DCS): Better results with acute pre-exposure dosing
- MDMA: Facilita reconsolidacion de memorias de miedo; ensayos para TAS | MDMA: Facilitates fear memory reconsolidation; trials for SAD
- Psilocibina: Neuroplasticidad mejorada; investigacion para ansiedad existencial | Psilocybin: Enhanced neuroplasticity; research for existential anxiety
- Oxitocina intranasal: Modula procesamiento social; resultados mixtos en TAS | Intranasal oxytocin: Modulates social processing; mixed results in SAD

*Moduladores glutamatergicos | Glutamatergic modulators:*
- Ketamina: Eficacia ansiolitica rapida en estudios abiertos | Ketamine: Rapid anxiolytic efficacy in open-label studies
- Riluzol: Modulador de glutamato; datos preliminares en TAG | Riluzole: Glutamate modulator; preliminary data in GAD
- Antagonistas mGluR5: En investigacion | mGluR5 antagonists: In research

*Sistema endocannabinoide | Endocannabinoid system:*
- Anandamida y 2-AG regulan la respuesta al estres | Anandamide and 2-AG regulate stress response
- Inhibidores de FAAH: Potencian senalizacion endocannabinoide | FAAH inhibitors: Enhance endocannabinoid signaling
- CBD: Propiedades ansioliticas; evidencia limitada pero creciente | CBD: Anxiolytic properties; limited but growing evidence

*Neuropeptidos | Neuropeptides:*
- Antagonistas del receptor de CRH tipo 1: Objetivo potencial | CRH type 1 receptor antagonists: Potential target
- Antagonistas del receptor de orexina: Investigacion en ansiedad y sueno | Orexin receptor antagonists: Research in anxiety and sleep
- Neuropeptido Y (NPY): Protector contra estres; potencial terapeutico | Neuropeptide Y (NPY): Stress-protective; therapeutic potential

**Neuromodulacion de precision | Precision neuromodulation:**

*EMT | TMS:*
- CPFdl derecha (frecuencia baja): Reduce hiperactividad de la red del miedo | Right dlPFC (low frequency): Reduces fear network hyperactivity
- CPFvm (facilitatoria): Potencia circuito de seguridad | vmPFC (facilitatory): Enhances safety circuit
- Theta burst intermitente: Protocolo acelerado | Intermittent theta burst: Accelerated protocol
- Combinacion EMT + exposicion: Potenciacion del aprendizaje | TMS + exposure combination: Learning enhancement

*Neurofeedback | Neurofeedback:*
- Regulacion de actividad de la amigdala por fMRI en tiempo real | Real-time fMRI amygdala activity regulation
- Entrenamiento de conectividad amigdala-CPF | Amygdala-PFC connectivity training
- Datos preliminares prometedores | Promising preliminary data

**Marco dimensional/transdiagnostico | Dimensional/transdiagnostic framework:**

*RDoC (Research Domain Criteria) | RDoC:*
- Amenaza aguda: Panico, fobias | Acute threat: Panic, phobias
- Amenaza potencial: TAG, preocupacion anticipatoria | Potential threat: GAD, anticipatory worry
- Rechazo social: Ansiedad social | Social rejection: Social anxiety
- Aproximacion a dimensiones vs categorias diagnosticas | Moving toward dimensions vs diagnostic categories

*Modelo HiTOP (Taxonomia Jerarquica de Psicopatologia) | HiTOP model:*
- Factor de internalizacion: Ansiedad y depresion como espectro compartido | Internalizing factor: Anxiety and depression as shared spectrum
- Subfactores de miedo vs angustia | Fear vs distress subfactors
- Implicaciones para tratamiento transdiagnostico | Implications for transdiagnostic treatment

**Terapeutica digital y tecnologia | Digital therapeutics and technology:**

- Terapia de exposicion por realidad virtual (inmersiva y accesible) | Virtual reality exposure therapy (immersive and accessible)
- TCC por internet con apoyo terapeutico (iCBT) | Internet-based CBT with therapist support (iCBT)
- Aplicaciones de entrenamiento de modificacion del sesgo atencional | Attentional bias modification training apps
- Wearables para monitoreo fisiologico de ansiedad | Wearables for physiological anxiety monitoring
- IA para personalizacion de tratamiento | AI for treatment personalization

**Disparidades en salud e investigacion cultural | Health disparities and cultural research:**

- Los latinos tienen menor acceso a tratamiento de ansiedad basado en evidencia | Latinos have less access to evidence-based anxiety treatment
- Adaptaciones culturales de TCC (protocolo de Interian y Diaz-Martinez para latinos) | Cultural adaptations of CBT (Interian and Diaz-Martinez protocol for Latinos)
- Promotores de salud como facilitadores de acceso a servicios | Promotores de salud as facilitators of service access
- Necesidad critica de validacion transcultural de instrumentos de medicion | Critical need for cross-cultural validation of measurement instruments
- Investigacion sobre la interaccion entre estres migratorio y genetica de ansiedad | Research on interaction between immigration stress and anxiety genetics`,
      keyTerms: [
        {
          term: 'aprendizaje de seguridad | safety learning',
          definition:
            'Proceso activo por el cual el cerebro aprende que un estimulo previamente temido es seguro; distinto de la extincion del miedo | Active process by which the brain learns a previously feared stimulus is safe; distinct from fear extinction',
        },
        {
          term: 'violacion de expectativas | expectancy violation',
          definition:
            'Principio de que la exposicion es mas efectiva cuando el resultado es significativamente mejor de lo esperado | Principle that exposure is most effective when the outcome is significantly better than expected',
        },
        {
          term: 'RDoC',
          definition:
            'Criterios de Dominio de Investigacion -- marco del NIMH que enfoca la investigacion en dimensiones biologicas en vez de categorias diagnosticas | Research Domain Criteria -- NIMH framework focusing research on biological dimensions instead of diagnostic categories',
        },
        {
          term: 'psicobioticos | psychobiotics',
          definition:
            'Probioticos que pueden tener efectos beneficiosos sobre la salud mental a traves del eje intestino-cerebro | Probiotics that may have beneficial effects on mental health through the gut-brain axis',
        },
        {
          term: 'HiTOP',
          definition:
            'Taxonomia Jerarquica de Psicopatologia -- modelo dimensional que organiza los trastornos mentales en un espectro continuo | Hierarchical Taxonomy of Psychopathology -- dimensional model organizing mental disorders on a continuous spectrum',
        },
      ],
      clinicalNotes:
        'Consideraciones clinicas avanzadas: La optimizacion de la exposicion (violacion de expectativas, variabilidad, extincion profunda) mejora los resultados a largo plazo. DCS debe dosificarse agudamente antes de sesiones de exposicion exitosas (las sesiones fallidas pueden potenciar el miedo). La resistencia al tratamiento en ansiedad a menudo involucra comorbilidad no tratada, evitacion residual o sensibilidad a la ansiedad persistente. El subtipado basado en circuitos puede guiar la seleccion entre EMT, neurofeedback y farmacoterapia. Para poblaciones hispanohablantes, la adaptacion cultural de protocolos no es solo traduccion linguistica sino integracion de valores culturales (respeto, familismo, personalismo) y sindromes culturales en el marco terapeutico. | Advanced clinical considerations: Exposure optimization (expectancy violation, variability, deepened extinction) improves long-term outcomes. DCS should be dosed acutely before successful exposure sessions (failed sessions may enhance fear). Treatment resistance in anxiety often involves untreated comorbidity, residual avoidance, or persistent anxiety sensitivity. Circuit-based subtyping may guide selection between TMS, neurofeedback, and pharmacotherapy. For Spanish-speaking populations, cultural adaptation of protocols is not just linguistic translation but integration of cultural values (respeto, familismo, personalismo) and cultural syndromes into the therapeutic framework.',
    },
  },

  media: [],

  citations: [
    {
      id: 'dsm5tr-ansiedad',
      type: 'textbook',
      title: 'Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, Text Revision (DSM-5-TR)',
      authors: ['American Psychiatric Association'],
      source: 'American Psychiatric Publishing',
      chapter: 'Anxiety Disorders',
    },
    {
      id: 'apa-anxiety-guideline',
      type: 'guideline',
      title: 'APA Clinical Practice Guideline for the Treatment of Anxiety Disorders',
      authors: ['American Psychological Association'],
      source: 'American Psychological Association',
    },
    {
      id: 'craske-2022-exposure',
      type: 'journal',
      title: 'Optimizing Exposure Therapy: An Inhibitory Learning Approach',
      authors: ['Craske, M.G.', 'Treanor, M.', 'Conway, C.C.'],
      source: 'Behaviour Research and Therapy',
    },
    {
      id: 'nice-gad-2020',
      type: 'guideline',
      title: 'Generalised Anxiety Disorder and Panic Disorder in Adults: Management (NICE CG113)',
      authors: ['National Institute for Health and Care Excellence'],
      source: 'NICE',
      url: 'https://www.nice.org.uk/guidance/cg113',
    },
    {
      id: 'nervios-cultural-syndrome',
      type: 'journal',
      title: 'Nervios and Ataque de Nervios: Cultural Idioms of Distress Among Latinos',
      authors: ['Lewis-Fernandez, R.', 'Guarnaccia, P.J.'],
      source: 'Culture, Medicine and Psychiatry',
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
      targetId: 'mental-health-tept-ptsd',
      targetType: 'condition',
      relationship: 'related',
      label: 'TEPT | PTSD',
    },
    {
      targetId: 'mental-health-tdah-adhd',
      targetType: 'condition',
      relationship: 'related',
      label: 'TDAH | ADHD',
    },
    {
      targetId: 'mental-health-psychiatric-medications',
      targetType: 'topic',
      relationship: 'see-also',
      label: 'Medicamentos Psiquiatricos | Psychiatric Medications',
    },
    {
      targetId: 'mental-health-psychotherapy',
      targetType: 'topic',
      relationship: 'see-also',
      label: 'Tipos de Psicoterapia | Psychotherapy Types',
    },
    {
      targetId: 'mental-health-crisis-resources',
      targetType: 'topic',
      relationship: 'see-also',
      label: 'Recursos de Crisis | Crisis Resources',
    },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['mental-health', 'psychiatry', 'anxiety-disorders', 'bilingual-content'],
    keywords: [
      'ansiedad',
      'anxiety',
      'trastorno de ansiedad generalizada',
      'generalized anxiety disorder',
      'TAG',
      'GAD',
      'panico',
      'panic',
      'ansiedad social',
      'social anxiety',
      'fobias',
      'phobias',
      'nervios',
      'ataque de nervios',
      'salud mental',
      'mental health',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['psychiatry', 'medicine'],
    },
  },

  createdAt: '2026-02-05T00:00:00.000Z',
  updatedAt: '2026-02-05T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default ansiedadAnxietyContent;
