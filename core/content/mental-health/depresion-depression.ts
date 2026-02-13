/**
 * Depresion / Depression - Contenido Educativo Bilingue
 *
 * Trastorno depresivo mayor, tipos de depresion y enfoques de tratamiento.
 * Major depressive disorder, types, and treatment approaches.
 *
 * Spanish-first with English translations separated by " | "
 * Culturally sensitive content addressing barriers to mental health care
 * in Spanish-speaking communities.
 */

import { EducationalContent } from '../types';

export const depresionDepressionContent: EducationalContent = {
  id: 'mental-health-depresion-depression',
  type: 'condition',
  name: 'Depresion Mayor | Major Depressive Disorder',
  nameEs: 'Depresion',
  alternateNames: [
    'Trastorno Depresivo Mayor | Major Depressive Disorder',
    'Depresion Clinica | Clinical Depression',
    'TDM | MDD',
    'Depresion Mayor | Major Depression',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'La depresion es una condicion medica que afecta como te sientes, piensas y manejas las actividades diarias. No es tu culpa, no es debilidad, y tiene tratamiento. | Depression is a medical condition that affects how you feel, think, and handle daily activities. It is not your fault, not a weakness, and it is treatable.',
      explanation: `**Que es la depresion? | What is depression?**

La depresion es mucho mas que sentirse triste. Es una condicion medica que cambia como funciona tu cerebro. Asi como la diabetes afecta como tu cuerpo usa el azucar, la depresion afecta como tu cerebro controla el estado de animo y la energia. | Depression is much more than feeling sad. It is a medical condition that changes how your brain works. Just as diabetes affects how your body uses sugar, depression affects how your brain controls mood and energy.

**Senales comunes de depresion | Common signs of depression:**

- Sentirse triste, vacio/a o sin esperanza la mayor parte del tiempo | Feeling sad, empty, or hopeless most of the time
- No disfrutar las cosas que antes te gustaban | Not enjoying things you used to like
- Sentirse muy cansado/a, incluso despues de dormir | Feeling very tired, even after sleeping
- Problemas para dormir, o dormir demasiado | Trouble sleeping, or sleeping too much
- No querer comer, o comer demasiado | Not wanting to eat, or eating too much
- Dificultad para concentrarse o tomar decisiones | Having trouble focusing or making decisions
- Sentirse sin valor o con mucha culpa | Feeling worthless or very guilty
- Pensamientos sobre la muerte o hacerse dano | Thoughts about death or hurting yourself

**Datos importantes | Important facts:**

- La depresion NO es tu culpa | Depression is NOT your fault
- No puedes simplemente "animarte" o "echarle ganas" | You cannot just "cheer up" or "snap out of it"
- La depresion es una de las condiciones mas tratables | Depression is one of the most treatable conditions
- La mayoria de las personas mejoran mucho con tratamiento | Most people improve significantly with treatment
- Pedir ayuda es una senal de fortaleza, no de debilidad | Asking for help is a sign of strength, not weakness

**Un mensaje para nuestra comunidad | A message for our community:**

En nuestra cultura, a veces nos dicen que debemos ser fuertes y no hablar de nuestros problemas. Pero la depresion es una enfermedad medica, igual que la presion alta o la diabetes. No es algo que se cura con solo "ponerle buena cara." Buscar ayuda profesional es lo mas valiente que puedes hacer por ti y por tu familia. | In our culture, we are sometimes told to be strong and not talk about our problems. But depression is a medical illness, just like high blood pressure or diabetes. It is not something cured by just "putting on a brave face." Seeking professional help is the bravest thing you can do for yourself and your family.

**Tipos de depresion | Types of depression:**

- **Depresion mayor | Major Depression**: Sentirse muy mal por al menos 2 semanas | Feeling very low for at least 2 weeks
- **Depresion persistente | Persistent Depression**: Sentirse bajo/a la mayoria de los dias por 2 anos o mas | Feeling low most days for 2 years or more
- **Depresion posparto | Postpartum Depression**: Depresion despues de tener un bebe | Depression after having a baby
- **Depresion estacional | Seasonal Depression**: Sentirse deprimido/a en otono e invierno | Feeling depressed in fall and winter

**Donde conseguir ayuda | Where to get help:**

La depresion tiene tratamiento. Las opciones incluyen: | Depression is treatable. Options include:
- Terapia de conversacion (consejeria) | Talk therapy (counseling)
- Medicamentos que ayudan a los quimicos del cerebro | Medications that help brain chemicals
- Cambios en el estilo de vida (ejercicio, sueno, conexion social) | Lifestyle changes (exercise, sleep, social connection)

**RECURSOS DE CRISIS | CRISIS RESOURCES:**
- **988 Linea de Suicidio y Crisis | 988 Suicide & Crisis Lifeline**: Llama o envia un mensaje de texto al 988 (disponible en espanol) | Call or text 988 (available in Spanish)
- **Linea de Crisis por texto | Crisis Text Line**: Envia "HOLA" al 741741 | Text "HELLO" to 741741
- **SAMHSA**: 1-800-662-4357 (espanol disponible | Spanish available)

Si tu o alguien que conoces esta en peligro, llama al 988 o ve a la sala de emergencias mas cercana. | If you or someone you know is in danger, call 988 or go to the nearest emergency room.`,
      keyTerms: [
        {
          term: 'depresion | depression',
          definition:
            'Una condicion medica que causa sentimientos duraderos de tristeza y perdida de interes | A medical condition that causes lasting feelings of sadness and loss of interest',
        },
        {
          term: 'depresion mayor | major depression',
          definition:
            'Un tipo de depresion con sintomas severos que duran al menos 2 semanas | A type of depression with severe symptoms lasting at least 2 weeks',
        },
        {
          term: 'terapia | therapy',
          definition:
            'Tratamiento a traves de hablar con un profesional de salud mental capacitado | Treatment through talking with a trained mental health professional',
        },
        {
          term: 'antidepresivo | antidepressant',
          definition:
            'Un medicamento que ayuda a tratar la depresion equilibrando los quimicos del cerebro | A medication that helps treat depression by balancing brain chemicals',
        },
      ],
      analogies: [
        'La depresion es como cargar un peso invisible que hace todo mas dificil. | Depression is like carrying an invisible weight that makes everything harder.',
        'Asi como irias al doctor por un hueso roto, debes buscar ayuda profesional para la depresion. | Just as you would see a doctor for a broken bone, you should seek professional help for depression.',
        'La depresion afecta tu cerebro como una tormenta afecta el clima -- cambia todo temporalmente, pero pasara con la ayuda correcta. | Depression affects your brain like a storm affects the weather -- it changes everything temporarily, but it will pass with the right help.',
      ],
      examples: [
        'Alguien con depresion puede dejar de ir a actividades que antes amaba, no porque no quiera, sino porque se siente demasiado cansado/a y vacio/a. | Someone with depression might stop going to activities they used to love, not because they do not want to, but because they feel too tired and empty.',
        'Una persona con depresion puede parecer irritable en vez de triste -- la depresion se ve diferente en cada persona. | A person with depression might seem irritable instead of sad -- depression looks different in different people.',
        'En la comunidad latina, la depresion a veces se expresa como dolores fisicos (dolor de cabeza, dolor de estomago) en lugar de tristeza. Esto se llama somatizacion. | In the Latino community, depression sometimes expresses itself as physical aches (headaches, stomachaches) instead of sadness. This is called somatization.',
      ],
      patientCounselingPoints: [
        'La depresion es una enfermedad medica, no una debilidad personal. | Depression is a medical illness, not a personal weakness.',
        'Buscar ayuda es lo mas fuerte que puedes hacer. | Seeking help is the strongest thing you can do.',
        'El tratamiento funciona para la mayoria de las personas. | Treatment works for most people.',
        'No tienes que enfrentar esto solo/a. | You do not have to face this alone.',
      ],
    },
    2: {
      level: 2,
      summary:
        'La depresion es un trastorno del estado de animo que involucra cambios persistentes en la quimica cerebral que afectan las emociones, el pensamiento, el comportamiento y la salud fisica. Es altamente tratable con terapia, medicamentos o ambos. | Depression is a mood disorder involving persistent changes in brain chemistry that affect emotions, thinking, behavior, and physical health. It is highly treatable with therapy, medication, or both.',
      explanation: `**Entendiendo la depresion | Understanding depression:**

La depresion es un trastorno clinico del estado de animo, no solo tristeza. Involucra cambios en los neurotransmisores (quimicos del cerebro) como la serotonina, norepinefrina y dopamina que regulan el animo, la energia y la motivacion. | Depression is a clinical mood disorder, not just sadness. It involves changes in neurotransmitters (brain chemicals) like serotonin, norepinephrine, and dopamine that regulate mood, energy, and motivation.

**Tipos de trastornos depresivos | Types of depressive disorders:**

**Trastorno Depresivo Mayor (TDM) | Major Depressive Disorder (MDD):**
- Episodios que duran al menos 2 semanas | Episodes lasting at least 2 weeks
- 5 o mas sintomas incluyendo animo deprimido o perdida de interes | 5+ symptoms including depressed mood or loss of interest
- Afecta significativamente el funcionamiento diario | Significantly impairs daily functioning
- Puede ser episodio unico o recurrente | Can be single episode or recurrent

**Trastorno Depresivo Persistente (Distimia) | Persistent Depressive Disorder (Dysthymia):**
- Animo deprimido la mayoria de los dias por 2 o mas anos | Depressed mood for most days over 2+ years
- Sintomas menos severos pero mas duraderos | Symptoms less severe but longer lasting
- Puede tener episodios depresivos mayores superpuestos | May have major depressive episodes superimposed

**Otras formas | Other forms:**
- Depresion Posparto: Semanas a meses despues del parto | Postpartum Depression: Weeks to months after childbirth
- Trastorno Disforico Premenstrual (TDPM): Sintomas severos antes de la menstruacion | Premenstrual Dysphoric Disorder (PMDD): Severe symptoms before menstruation
- Trastorno Afectivo Estacional (TAE): Episodios depresivos en otono/invierno | Seasonal Affective Disorder (SAD): Depressive episodes in fall/winter
- Depresion atipica: Reactividad del animo, aumento de sueno y apetito | Atypical Depression: Mood reactivity, increased sleep and appetite

**Sintomas por categoria | Symptoms by category:**

*Emocionales | Emotional:*
- Animo triste, ansioso o "vacio" persistente | Persistent sad, anxious, or "empty" mood
- Desesperanza, pesimismo | Hopelessness, pessimism
- Culpa, sentimientos de inutilidad, impotencia | Guilt, worthlessness, helplessness
- Irritabilidad, frustracion | Irritability, frustration

*Cognitivos | Cognitive:*
- Dificultad para concentrarse y tomar decisiones | Difficulty concentrating and making decisions
- Problemas de memoria | Memory problems
- Patrones de pensamiento negativos | Negative thought patterns
- Pensamientos de muerte o suicidio | Thoughts of death or suicide

*Fisicos | Physical:*
- Fatiga y disminucion de energia | Fatigue and decreased energy
- Alteraciones del sueno (insomnio o hipersomnia) | Sleep disturbances (insomnia or hypersomnia)
- Cambios en el apetito (disminuido o aumentado) | Appetite changes (decreased or increased)
- Cambios psicomotores (lentitud o agitacion) | Psychomotor changes (slowing or agitation)
- Dolores inexplicables | Unexplained aches and pains

*Conductuales | Behavioral:*
- Aislamiento social | Social withdrawal
- Disminucion de productividad | Decreased productivity
- Descuido de responsabilidades | Neglecting responsibilities
- Uso de sustancias (a veces) | Substance use (sometimes)

**Factores de riesgo | Risk factors:**

- Historia familiar de depresion | Family history of depression
- Experiencias traumaticas o estresantes | Traumatic or stressful experiences
- Cambios importantes en la vida | Major life changes
- Ciertas condiciones medicas | Certain medical conditions
- Algunos medicamentos | Some medications
- Uso de sustancias | Substance use
- Barreras culturales para buscar ayuda | Cultural barriers to seeking help
- Estres por inmigracion y aculturacion | Immigration and acculturation stress

**Enfoques de tratamiento | Treatment approaches:**

*Psicoterapia | Psychotherapy:*
- Terapia Cognitivo-Conductual (TCC) -- cambia patrones de pensamiento negativos | Cognitive Behavioral Therapy (CBT) -- changes negative thought patterns
- Terapia Interpersonal (TIP) -- mejora las relaciones | Interpersonal Therapy (IPT) -- improves relationships
- Activacion Conductual -- aumenta actividades positivas | Behavioral Activation -- increases positive activities

*Medicamentos | Medications:*
- ISRS (los mas comunmente recetados) | SSRIs (most commonly prescribed)
- IRSN | SNRIs
- Otros antidepresivos | Other antidepressants
- Generalmente toman 4-6 semanas para efecto completo | Usually take 4-6 weeks for full effect

*Combinacion | Combination:*
- Terapia + medicamentos a menudo es lo mas efectivo | Therapy + medication often most effective
- Modificaciones en el estilo de vida (ejercicio, sueno, dieta) | Lifestyle modifications (exercise, sleep, diet)
- Apoyo social y comunitario | Social and community support`,
      keyTerms: [
        {
          term: 'neurotransmisor | neurotransmitter',
          definition:
            'Mensajeros quimicos en el cerebro que afectan el animo y otras funciones | Chemical messengers in the brain that affect mood and other functions',
        },
        {
          term: 'serotonina | serotonin',
          definition:
            'Un quimico cerebral que ayuda a regular el animo, sueno y apetito | A brain chemical that helps regulate mood, sleep, and appetite',
        },
        {
          term: 'terapia cognitivo-conductual | cognitive behavioral therapy',
          definition:
            'Un tipo de terapia que ayuda a cambiar patrones de pensamiento negativos | A type of therapy that helps change negative thinking patterns',
          pronunciation: 'kog-ni-TI-vo kon-duk-TWAL',
        },
        {
          term: 'ISRS | SSRI',
          definition:
            'Inhibidor selectivo de la recaptacion de serotonina -- un tipo comun de antidepresivo | Selective serotonin reuptake inhibitor -- a common type of antidepressant',
        },
        {
          term: 'psicomotor | psychomotor',
          definition:
            'Relacionado con el movimiento fisico y los procesos mentales | Relating to physical movement and mental processes',
        },
      ],
      analogies: [
        'Los neurotransmisores son como mensajes de texto entre las celulas del cerebro -- en la depresion, algunos mensajes no estan llegando correctamente. | Neurotransmitters are like text messages between brain cells -- in depression, some messages are not getting through properly.',
        'La terapia es como fisioterapia para tu mente -- ayuda a reentrenar patrones de pensamiento y construir fortaleza mental. | Therapy is like physical therapy for your mind -- it helps retrain thought patterns and build mental strength.',
      ],
      examples: [
        'Una madre latina puede experimentar depresion posparto pero no buscar ayuda porque le dicen que deberia estar feliz con su nuevo bebe. La depresion posparto es medica y requiere tratamiento. | A Latina mother may experience postpartum depression but not seek help because she is told she should be happy with her new baby. Postpartum depression is medical and requires treatment.',
        'Un hombre puede expresar su depresion como irritabilidad y enojo en vez de tristeza, lo cual puede dificultar el diagnostico. | A man may express his depression as irritability and anger instead of sadness, which can make diagnosis difficult.',
      ],
    },
    3: {
      level: 3,
      summary:
        'El Trastorno Depresivo Mayor involucra desregulacion de los sistemas de neurotransmisores monoaminicos, disfuncion del eje HPA y anormalidades en circuitos neuronales. Los tratamientos basados en evidencia incluyen ISRS, IRSN, psicoterapia y su combinacion. | Major Depressive Disorder involves dysregulation of monoamine neurotransmitter systems, HPA axis dysfunction, and neural circuit abnormalities. Evidence-based treatments include SSRIs, SNRIs, psychotherapy, and their combination.',
      explanation: `**Criterios diagnosticos (DSM-5-TR) | Diagnostic criteria (DSM-5-TR):**

Un episodio depresivo mayor requiere 5 o mas sintomas por 2 o mas semanas, incluyendo al menos uno de: | A Major Depressive Episode requires 5+ symptoms for 2+ weeks, including at least one of:
1. Animo deprimido la mayor parte del dia, casi todos los dias | Depressed mood most of the day, nearly every day
2. Disminucion marcada del interes/placer (anhedonia) | Markedly diminished interest/pleasure (anhedonia)

Mas sintomas adicionales de: | Plus additional symptoms from:
3. Cambio significativo de peso/apetito | Significant weight/appetite change
4. Insomnio o hipersomnia | Insomnia or hypersomnia
5. Agitacion o retardo psicomotor | Psychomotor agitation or retardation
6. Fatiga o perdida de energia | Fatigue or loss of energy
7. Sentimientos de inutilidad o culpa excesiva | Feelings of worthlessness or excessive guilt
8. Disminucion de la concentracion o indecision | Diminished concentration or indecisiveness
9. Pensamientos recurrentes de muerte, ideacion suicida | Recurrent thoughts of death, suicidal ideation

*Especificadores | Specifiers:*
- Con malestar ansioso | With anxious distress
- Con caracteristicas mixtas | With mixed features
- Con caracteristicas melancolicas | With melancholic features
- Con caracteristicas atipicas | With atypical features
- Con caracteristicas psicoticas congruentes/incongruentes con el animo | With mood-congruent/incongruent psychotic features
- Con catatonia | With catatonia
- Con inicio en el periparto | With peripartum onset
- Con patron estacional | With seasonal pattern

**Base neurobiologica | Neurobiological basis:**

*Hipotesis monoaminica | Monoamine Hypothesis:*
- Deficiencia en serotonina (5-HT), norepinefrina (NE) y/o dopamina (DA) | Deficiency in serotonin (5-HT), norepinephrine (NE), and/or dopamine (DA)
- Apoyada por los mecanismos de los antidepresivos | Supported by antidepressant mechanisms
- Simplificada pero clinicamente util | Oversimplified but clinically useful

*Desregulacion del eje HPA | HPA Axis Dysregulation:*
- Cortisol elevado | Elevated cortisol
- Retroalimentacion negativa deteriorada | Impaired negative feedback
- Modelo de estres cronico | Chronic stress model

*Neuroplasticidad | Neuroplasticity:*
- BDNF reducido (factor neurotrofico derivado del cerebro) | Reduced BDNF (brain-derived neurotrophic factor)
- Reduccion del volumen del hipocampo | Hippocampal volume reduction
- Cambios en la corteza prefrontal | Prefrontal cortex changes

*Circuitos neuronales | Neural Circuits:*
- Hiperactividad de la red de modo predeterminado (rumiacion) | Default mode network hyperactivity (rumination)
- Hipoactividad prefrontal (disfuncion ejecutiva) | Prefrontal hypoactivity (executive dysfunction)
- Hiperreactividad de la amigdala (sesgo negativo) | Amygdala hyperreactivity (negative bias)

**Tratamiento farmacologico | Pharmacological treatment:**

*Agentes de primera linea | First-line agents:*

ISRS (Inhibidores Selectivos de la Recaptacion de Serotonina) | SSRIs (Selective Serotonin Reuptake Inhibitors):
- Fluoxetina, sertralina, paroxetina, citalopram, escitalopram | Fluoxetine, sertraline, paroxetine, citalopram, escitalopram
- Mecanismo: Bloquean el transportador de serotonina (SERT) | Mechanism: Block serotonin transporter (SERT)
- Efectos secundarios: Malestar GI, disfuncion sexual, ansiedad inicial | Side effects: GI upset, sexual dysfunction, initial anxiety

IRSN (Inhibidores de la Recaptacion de Serotonina y Norepinefrina) | SNRIs (Serotonin-Norepinephrine Reuptake Inhibitors):
- Venlafaxina, duloxetina, desvenlafaxina | Venlafaxine, duloxetine, desvenlafaxine
- Mecanismo dual: Bloquean SERT y NET | Dual mechanism: Block SERT and NET
- Pueden ayudar con fatiga y dolor | May help with fatigue and pain

*Otros antidepresivos | Other antidepressants:*
- Bupropion: Inhibidor de la recaptacion de NE/DA, sin efectos sexuales secundarios | NE/DA reuptake inhibitor, no sexual side effects
- Mirtazapina: Antagonista alfa-2, ayuda con sueno/apetito | Alpha-2 antagonist, helps sleep/appetite
- Triciclicos: Mas antiguos, mas efectos secundarios | Older, more side effects
- IMAO: Restricciones dieteticas, usados para resistencia al tratamiento | MAOIs: Dietary restrictions, used for treatment-resistant

**Psicoterapia | Psychotherapy:**

*TCC (Terapia Cognitivo-Conductual) | CBT (Cognitive Behavioral Therapy):*
- Identifica y modifica pensamientos automaticos negativos | Identifies and modifies negative automatic thoughts
- Experimentos conductuales | Behavioral experiments
- Programacion de actividades | Activity scheduling
- Fuerte base de evidencia | Strong evidence base

*TIP (Terapia Interpersonal) | IPT (Interpersonal Therapy):*
- Se enfoca en problemas de relaciones | Focuses on relationship issues
- Duelo, transiciones de roles, conflictos interpersonales | Grief, role transitions, interpersonal conflicts
- Limitada en tiempo (12-16 sesiones) | Time-limited (12-16 sessions)

*Activacion Conductual | Behavioral Activation:*
- Aumenta la participacion en actividades gratificantes | Increases engagement with rewarding activities
- Rompe patrones de evitacion | Breaks avoidance patterns

**Depresion resistente al tratamiento | Treatment-resistant depression:**
Definida como falta de respuesta a 2 o mas ensayos adecuados de antidepresivos. Opciones incluyen: | Defined as failure to respond to 2+ adequate antidepressant trials. Options include:
- Estrategias de potenciacion | Augmentation strategies
- TEC (Terapia Electroconvulsiva) | ECT
- EMT (Estimulacion Magnetica Transcraneal) | TMS
- Ketamina/esketamina | Ketamine/esketamine`,
      keyTerms: [
        {
          term: 'anhedonia',
          definition:
            'Perdida de la capacidad de sentir placer de actividades que antes eran disfrutables | Loss of ability to feel pleasure from activities that were previously enjoyable',
          pronunciation: 'an-e-DO-nia',
        },
        {
          term: 'BDNF | FNDC',
          definition:
            'Factor neurotrofico derivado del cerebro -- proteina que apoya el crecimiento y supervivencia neuronal | Brain-derived neurotrophic factor -- protein supporting neuron growth and survival',
        },
        {
          term: 'eje HPA | HPA axis',
          definition:
            'Eje hipotalamico-hipofisario-adrenal -- el sistema de respuesta al estres | Hypothalamic-pituitary-adrenal axis -- the stress response system',
        },
        {
          term: 'rumiacion | rumination',
          definition:
            'Enfoque repetitivo y pasivo en los sintomas de angustia y sus causas | Repetitive, passive focus on symptoms of distress and their causes',
        },
        {
          term: 'depresion resistente al tratamiento | treatment-resistant depression',
          definition:
            'Depresion que no responde a los enfoques de tratamiento estandar | Depression that does not respond to standard treatment approaches',
        },
      ],
      clinicalNotes:
        'Descartar trastorno bipolar antes de iniciar antidepresivos -- los antidepresivos solos pueden desencadenar mania. Siempre evaluar riesgo suicida. Considerar causas medicas (tiroides, anemia, medicamentos). En poblaciones hispanohablantes, considerar somatizacion y expresiones culturales de la depresion. | Screen for bipolar disorder before starting antidepressants -- antidepressants alone can trigger mania. Always assess suicide risk. Consider medical causes (thyroid, anemia, medications). In Spanish-speaking populations, consider somatization and cultural expressions of depression.',
    },
    4: {
      level: 4,
      summary:
        'La fisiopatologia de la depresion involucra interacciones complejas entre vulnerabilidad genetica, desregulacion del eje HPA, neuroinflamacion, neuroplasticidad alterada y circuitos neuronales interrumpidos. La seleccion de tratamiento considera cada vez mas las caracteristicas fenotipicas y la historia de tratamiento. | Depression pathophysiology involves complex interactions between genetic vulnerability, HPA axis dysregulation, neuroinflammation, altered neuroplasticity, and disrupted neural circuits. Treatment selection increasingly considers phenotypic features and treatment history.',
      explanation: `**Fisiopatologia -- Modelo integrado | Pathophysiology -- Integrated model:**

*Factores geneticos | Genetic factors:*
- Heredabilidad: ~40% | Heritability: ~40%
- Arquitectura poligenica (muchos genes, efectos pequenos) | Polygenic architecture (many genes, small effects)
- Genes clave: SERT (SLC6A4), BDNF, FKBP5, CRHR1 | Key genes: SERT (SLC6A4), BDNF, FKBP5, CRHR1
- Interacciones gen-ambiente (5-HTTLPR x estres) | Gene-environment interactions (5-HTTLPR x stress)

*Desregulacion del eje HPA | HPA Axis Dysregulation:*
- CRH elevada del nucleo paraventricular | Elevated CRH from paraventricular nucleus
- Sensibilidad deteriorada del receptor de glucocorticoides | Impaired glucocorticoid receptor sensitivity
- Cortisol elevado -> dano hipocampal | Elevated cortisol -> hippocampal damage
- Respuesta de cortisol al despertar atenuada en depresion cronica | Blunted cortisol awakening response in chronic depression

*Neuroinflamacion | Neuroinflammation:*
- IL-6, TNF-alfa, PCR elevados en un subgrupo de pacientes | Elevated IL-6, TNF-alpha, CRP in subset of patients
- Activacion de la via de la kinurenina | Kynurenine pathway activation
- Activacion microglial | Microglial activation
- Subtipo potencial para tratamiento antiinflamatorio | Potential subtype for anti-inflammatory treatment

*Deficits de neuroplasticidad | Neuroplasticity deficits:*
- BDNF reducido en suero e hipocampo | Reduced BDNF in serum and hippocampus
- Disminucion de densidad sinaptica en CPF | Decreased synaptic density in PFC
- Neurogénesis deteriorada en hipocampo | Impaired neurogenesis in hippocampus
- Los antidepresivos restauran BDNF y plasticidad | Antidepressants restore BDNF and plasticity

*Disfuncion glutamatergica | Glutamate dysfunction:*
- Glutamato aumentado en depresion | Increased glutamate in depression
- Disfuncion del receptor NMDA | NMDA receptor dysfunction
- Mecanismo de ketamina: Antagonismo NMDA -> activacion AMPA -> BDNF -> sinaptogenesis | Ketamine mechanism: NMDA antagonism -> AMPA activation -> BDNF -> synaptogenesis

**Anormalidades de circuitos neuronales | Neural circuit abnormalities:**

*Circuitos cortico-limbicos | Cortico-limbic circuits:*
- Hiperactividad del cingulado anterior subgenual | Subgenual anterior cingulate hyperactivity
- Hiperreactividad de la amigdala a estimulos negativos | Amygdala hyperreactivity to negative stimuli
- Conectividad prefrontal-amigdala reducida | Reduced prefrontal-amygdala connectivity
- Regulacion emocional descendente deteriorada | Impaired top-down emotional regulation

*Circuitos de recompensa | Reward circuits:*
- Hipoactividad estriatal (anhedonia) | Striatal hypoactivity (anhedonia)
- Senalizacion dopaminica VTA-NAc reducida | Reduced VTA-NAc dopamine signaling
- Respuesta atenuada a estimulos positivos | Blunted response to positive stimuli
- Objetivo: Activacion conductual, bupropion | Target: Behavioral activation, bupropion

*Red de modo predeterminado | Default Mode Network:*
- Hiperactividad e hiperconectividad | Hyperactivity and hyperconnectivity
- Correlaciona con rumiacion | Correlates with rumination
- Se normaliza con tratamiento exitoso | Normalized with successful treatment

**Algoritmo de tratamiento | Treatment algorithm:**

*Depresion leve | Mild depression:*
- Psicoterapia preferida (TCC, TIP, AC) | Psychotherapy preferred (CBT, IPT, BA)
- Modificaciones del estilo de vida | Lifestyle modifications

*Depresion moderada | Moderate depression:*
- Psicoterapia O medicamento | Psychotherapy OR medication
- Preferencia del paciente es importante | Patient preference important
- Considerar combinacion | Consider combination

*Depresion moderada-severa | Moderate-severe depression:*
- Terapia combinada recomendada | Combination therapy recommended
- Primera linea: ISRS + TCC | First-line: SSRI + CBT

*Depresion resistente al tratamiento | Treatment-resistant depression:*
1. Optimizar tratamiento actual (dosis, duracion) | Optimize current treatment (dose, duration)
2. Cambiar dentro de o entre clases | Switch within or between classes
3. Estrategias de potenciacion | Augmentation strategies:
   - Agregar segundo antidepresivo (bupropion + ISRS) | Add second antidepressant (bupropion + SSRI)
   - Agregar antipsicotico atipico (aripiprazol, quetiapina) | Add atypical antipsychotic (aripiprazole, quetiapine)
   - Agregar litio u hormona tiroidea | Add lithium or thyroid hormone
4. Terapias somaticas | Somatic therapies:
   - TEC (mas efectiva) | ECT (most effective)
   - EMT (aprobada por FDA) | TMS (FDA-approved)
   - Ketamina/esketamina (Spravato) | Ketamine/esketamine (Spravato)

**Poblaciones especiales | Special populations:**

*Depresion periparto | Peripartum depression:*
- Tamizaje recomendado | Screening recommended
- Brexanolona (IV) aprobada por FDA | Brexanolone (IV) FDA-approved
- ISRS generalmente aceptables en embarazo/lactancia (riesgo-beneficio) | SSRIs generally acceptable in pregnancy/lactation (risk-benefit)

*Adultos mayores | Elderly:*
- Mayor riesgo suicida | Higher suicide risk
- Comorbilidades medicas | Medical comorbidities
- Iniciar bajo, avanzar lento con medicamentos | Start low, go slow with medications

*Adolescentes | Adolescents:*
- Fluoxetina aprobada por FDA | Fluoxetine FDA-approved
- Advertencia de caja negra (monitorear de cerca) | Black box warning (monitor closely)
- TCC recomendada | CBT recommended

**Consideraciones culturales en el tratamiento | Cultural considerations in treatment:**

- Modelos explicativos culturales de la depresion (nervios, susto, ataque de nervios) | Cultural explanatory models of depression (nervios, susto, ataque de nervios)
- Incorporar la familia en el plan de tratamiento cuando sea apropiado | Incorporate family in treatment plan when appropriate
- Considerar el rol de la religion/espiritualidad | Consider the role of religion/spirituality
- Estres de aculturacion como factor de riesgo | Acculturation stress as risk factor
- Barreras de idioma en el acceso a servicios | Language barriers in accessing services

**Atencion basada en mediciones | Measurement-based care:**
- PHQ-9 (Cuestionario de Salud del Paciente-9) | PHQ-9 (Patient Health Questionnaire-9)
- HAM-D (Escala de Depresion de Hamilton) | HAM-D (Hamilton Depression Rating Scale)
- MADRS (Escala de Depresion de Montgomery-Asberg) | MADRS (Montgomery-Asberg Depression Rating Scale)`,
      keyTerms: [
        {
          term: 'via de la kinurenina | kynurenine pathway',
          definition:
            'Via del metabolismo del triptofano que vincula la inflamacion con cambios en el glutamato | Tryptophan metabolism pathway linking inflammation to glutamate changes',
        },
        {
          term: 'cingulado anterior subgenual | subgenual anterior cingulate',
          definition:
            'Region cerebral hiperactiva en la depresion, objetivo para ECP | Brain region hyperactive in depression, target for DBS',
        },
        {
          term: 'potenciacion | augmentation',
          definition:
            'Agregar un segundo medicamento para mejorar la respuesta antidepresiva | Adding a second medication to enhance antidepressant response',
        },
        {
          term: 'PHQ-9',
          definition:
            'Cuestionario de Salud del Paciente-9 -- herramienta validada de tamizaje y monitoreo de depresion | Patient Health Questionnaire-9 -- validated depression screening and monitoring tool',
        },
        {
          term: 'brexanolona | brexanolone',
          definition:
            'Neuroesteroide IV aprobado por FDA para depresion posparto | IV neurosteroid FDA-approved for postpartum depression',
        },
      ],
      clinicalNotes:
        'La seleccion de tratamiento debe considerar: respuesta previa, historia familiar de respuesta, perfil de efectos secundarios, comorbilidades, interacciones farmacologicas, preferencia del paciente y costo. Siempre reevaluar el diagnostico si es resistente al tratamiento. En pacientes hispanohablantes, considerar sindromes culturales (ataque de nervios, nervios, susto) que pueden solaparse con o enmascarar depresion. | Treatment selection should consider: prior response, family history of response, side effect profile, comorbidities, drug interactions, patient preference, and cost. Always reassess diagnosis if treatment-resistant. In Spanish-speaking patients, consider cultural syndromes (ataque de nervios, nervios, susto) that may overlap with or mask depression.',
    },
    5: {
      level: 5,
      summary:
        'Los enfoques contemporaneos de la depresion enfatizan la fenotipificacion dimensional, la seleccion de tratamiento guiada por biomarcadores y mecanismos novedosos dirigidos al glutamato, neuroplasticidad y neuroinflamacion. La integracion de mecanismos psicoterapeuticos con la neurociencia informa la psiquiatria de precision. | Contemporary approaches to depression emphasize dimensional phenotyping, biomarker-guided treatment selection, and novel mechanisms targeting glutamate, neuroplasticity, and neuroinflammation. Integration of psychotherapy mechanisms with neuroscience informs precision psychiatry.',
      explanation: `**Enfoques de psiquiatria de precision | Precision psychiatry approaches:**

*Subtipificacion fenotipica | Phenotypic subtyping:*
- Depresion ansiosa: Mayor ansiedad, peor pronostico | Anxious depression: Higher anxiety, worse prognosis
- Depresion anhedonica: Disfuncion del circuito de recompensa | Anhedonic depression: Reward circuit dysfunction
- Depresion inflamatoria: PCR/citoquinas elevadas | Inflammatory depression: Elevated CRP/cytokines
- Depresion atipica: Sintomas vegetativos invertidos | Atypical depression: Reversed vegetative symptoms
- Depresion melancolica: Anhedonia severa, cambios psicomotores | Melancholic depression: Severe anhedonia, psychomotor changes

*Investigacion de biomarcadores | Biomarker research:*
- PCR > 3 mg/L puede predecir mejor respuesta a potenciacion antiinflamatoria | CRP > 3 mg/L may predict better response to anti-inflammatory augmentation
- Marcadores EEG (actividad ACC rostral) pueden predecir respuesta a antidepresivos | EEG markers (rostral ACC activity) may predict antidepressant response
- fMRI: Conectividad ACC subgenual predice respuesta a TCC vs medicacion | fMRI: Subgenual ACC connectivity predicts CBT vs medication response
- Aun no validados para uso clinico | Not yet validated for clinical use

*Farmacogenomica | Pharmacogenomics:*
- Genotipado de CYP2D6 y CYP2C19 | CYP2D6 and CYP2C19 genotyping
- Influye en el metabolismo de farmacos (pobre, intermedio, extensivo, ultrarapido) | Influences drug metabolism (poor, intermediate, extensive, ultrarapid)
- Utilidad clinica emergente pero no definitiva | Clinical utility emerging but not definitive

**Mecanismos terapeuticos novedosos | Novel therapeutic mechanisms:**

*Via glutamato/NMDA | Glutamate/NMDA pathway:*
- Ketamina: Antagonista NMDA, efecto antidepresivo rapido | Ketamine: NMDA antagonist, rapid antidepressant effect
  - Infusion unica: Respuesta en horas | Single infusion: Response within hours
  - Mecanismo: Activacion AMPA -> BDNF -> sinaptogenesis | Mechanism: AMPA activation -> BDNF -> synaptogenesis
  - Efectos disociativos, potencial de abuso | Dissociative effects, abuse potential
- Esketamina (Spravato): S-enantiomero, intranasal, aprobada por FDA para DRT | Esketamine (Spravato): S-enantiomer, intranasal, FDA-approved for TRD
  - Programa REMS por sedacion, disociacion, potencial de abuso | REMS program due to sedation, dissociation, abuse potential
  - Administrada en centros de salud certificados | Given in certified healthcare settings

*Psicodelicos | Psychedelics:*
- Psilocibina: Agonista 5-HT2A, designacion de terapia innovadora para DRT | Psilocybin: 5-HT2A agonist, breakthrough therapy designation for TRD
  - Mecanismo: Aumento de neuroplasticidad, interrumpe RMP | Mechanism: Increased neuroplasticity, disrupts DMN
  - Requiere contexto terapeutico | Requires therapeutic context
- MDMA: No aprobada por FDA para depresion (enfoque en TEPT) | MDMA: Not FDA-approved for depression (PTSD focus)

*Neuroesteroides | Neurosteroids:*
- Brexanolona: Modulador alosterico positivo de GABA-A | Brexanolone: GABA-A positive allosteric modulator
  - Aprobada por FDA para depresion posparto | FDA-approved for postpartum depression
  - Infusion IV durante 60 horas | IV infusion over 60 hours
- Zuranolona: Neuroesteroide oral en desarrollo | Zuranolone: Oral neurosteroid in development

**Neuromodulacion | Neuromodulation:**

*Terapia Electroconvulsiva (TEC) | Electroconvulsive Therapy (ECT):*
- Tratamiento mas efectivo para depresion severa/DRT | Most effective treatment for severe/TRD
- Tasa de respuesta: 70-90% en pacientes apropiados | Response rate: 70-90% in appropriate patients
- Mecanismo: Convulsion -> neuroplasticidad, cambios en neurotransmisores | Mechanism: Seizure -> neuroplasticity, neurotransmitter changes
- Efectos cognitivos secundarios (memoria) a menudo transitorios | Cognitive side effects (memory) often transient

*Estimulacion Magnetica Transcraneal (EMT) | Transcranial Magnetic Stimulation (TMS):*
- Aprobada por FDA para DRT | FDA-approved for TRD
- Estandar: CPFDL izquierda, alta frecuencia | Standard: Left DLPFC, high frequency
- EMT profunda, protocolos theta burst | Deep TMS, theta burst protocols
- No invasiva, buena tolerabilidad | Non-invasive, good tolerability

*Experimental:*
- Estimulacion cerebral profunda (ACC subgenual, NAc) | Deep brain stimulation (subgenual ACC, NAc)
- Estimulacion del nervio vago | Vagus nerve stimulation
- Ultrasonido focalizado | Focused ultrasound

**Neurociencia de la psicoterapia | Psychotherapy neuroscience:**

*Mecanismos de TCC | CBT mechanisms:*
- Reduce la reactividad de la amigdala | Reduces amygdala reactivity
- Aumenta conectividad prefrontal-amigdala | Increases prefrontal-amygdala connectivity
- Normaliza funcion del cingulado anterior | Normalizes anterior cingulate function
- Cambios estructurales en hipocampo | Structural changes in hippocampus

**Investigacion emergente | Emerging research:**
- Eje intestino-cerebro: Intervenciones dirigidas al microbioma | Gut-brain axis: Microbiome-targeted interventions
- Intervenciones circadianas: Terapia de luz, terapia de vigilia | Circadian interventions: Light therapy, wake therapy
- Terapeutica digital: TCC basada en aplicaciones | Digital therapeutics: App-based CBT
- Neuromodulacion de circuito cerrado | Closed-loop neuromodulation
- Protocolos combinados de psicodelicos + psicoterapia | Combination psychedelic + psychotherapy protocols

**Consideraciones de disparidades en salud | Health disparities considerations:**
- Los hispanohablantes tienen menor acceso a servicios de salud mental culturalmente competentes | Spanish speakers have less access to culturally competent mental health services
- La escasez de proveedores bilingues es un factor critico | Shortage of bilingual providers is a critical factor
- Los modelos de atencion colaborativa pueden mejorar el acceso | Collaborative care models can improve access
- La integracion de promotores de salud en el cuidado de salud mental | Integration of promotores de salud in mental health care
- Necesidad de investigacion inclusiva con representacion hispanohablante | Need for inclusive research with Spanish-speaking representation`,
      keyTerms: [
        {
          term: 'psiquiatria de precision | precision psychiatry',
          definition:
            'Personalizar el tratamiento basado en caracteristicas biologicas y clinicas individuales | Tailoring treatment based on individual biological and clinical characteristics',
        },
        {
          term: 'REMS',
          definition:
            'Estrategia de Evaluacion y Mitigacion de Riesgos -- programa de la FDA para el uso seguro de ciertos medicamentos | Risk Evaluation and Mitigation Strategy -- FDA program for safe use of certain medications',
        },
        {
          term: 'estimulacion theta burst | theta burst stimulation',
          definition:
            'Protocolo acelerado de EMT con administracion de tratamiento mas rapida | Accelerated TMS protocol with faster treatment delivery',
        },
        {
          term: 'zuranolona | zuranolone',
          definition:
            'Neuroesteroide oral en desarrollo para depresion | Oral neurosteroid in development for depression',
        },
        {
          term: 'modelo de estadificacion | staging model',
          definition:
            'Marco que ve la depresion como progresando a traves de etapas que requieren diferentes intervenciones | Framework viewing depression as progressing through stages requiring different interventions',
        },
      ],
      clinicalNotes:
        'Practica basada en evidencia actual: Atencion basada en mediciones mejora resultados (PHQ-9 en cada visita). Terapia combinada superior para depresion moderada-severa. TEC sigue siendo el estandar de oro para depresion severa/resistente al tratamiento. Esketamina disponible pero con restricciones significativas. Psilocibina: Prometedora pero aun no aprobada. La resistencia al tratamiento a menudo refleja ensayos inadecuados, diagnostico erroneo o comorbilidad. El riesgo suicida requiere evaluacion continua. En investigacion de disparidades, la subrepresentacion de latinos en ensayos clinicos limita la generalizabilidad de las guias de tratamiento. | Current evidence-based practice: Measurement-based care improves outcomes (PHQ-9 at each visit). Combination therapy superior for moderate-severe depression. ECT remains gold standard for severe/treatment-resistant. Esketamine available but with significant restrictions. Psilocybin: Promising but not yet approved. Treatment resistance often reflects inadequate trials, misdiagnosis, or comorbidity. Suicide risk requires ongoing assessment. In disparities research, underrepresentation of Latinos in clinical trials limits generalizability of treatment guidelines.',
    },
  },

  media: [],

  citations: [
    {
      id: 'dsm5tr-depresion',
      type: 'textbook',
      title: 'Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, Text Revision (DSM-5-TR)',
      authors: ['American Psychiatric Association'],
      source: 'American Psychiatric Publishing',
      chapter: 'Depressive Disorders',
    },
    {
      id: 'apa-depression-guideline-2023',
      type: 'guideline',
      title: 'APA Clinical Practice Guideline for the Treatment of Depression Across Three Age Cohorts',
      authors: ['American Psychological Association'],
      source: 'American Psychological Association',
      url: 'https://www.apa.org/depression-guideline',
    },
    {
      id: 'nice-depression-2022',
      type: 'guideline',
      title: 'Depression in Adults: Treatment and Management (NICE Guideline NG222)',
      authors: ['National Institute for Health and Care Excellence'],
      source: 'NICE',
      url: 'https://www.nice.org.uk/guidance/ng222',
    },
    {
      id: 'depresion-latinx-disparities',
      type: 'journal',
      title: 'Mental Health Disparities Among Latinos: A Review of the Literature',
      authors: ['Alegria, M.', 'Canino, G.', 'Shrout, P.E.'],
      source: 'Annual Review of Clinical Psychology',
    },
    {
      id: 'nimh-depresion',
      type: 'website',
      title: 'NIMH: Depression (en espanol)',
      source: 'National Institute of Mental Health',
      url: 'https://www.nimh.nih.gov/health/publications/espanol/depresion',
      accessedDate: '2025-01-01',
    },
  ],

  crossReferences: [
    {
      targetId: 'mental-health-ansiedad-anxiety',
      targetType: 'condition',
      relationship: 'related',
      label: 'Trastornos de Ansiedad | Anxiety Disorders',
    },
    {
      targetId: 'mental-health-tept-ptsd',
      targetType: 'condition',
      relationship: 'related',
      label: 'TEPT | PTSD',
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
      targetId: 'mental-health-suicidal-ideation',
      targetType: 'topic',
      relationship: 'see-also',
      label: 'Ideacion Suicida | Suicidal Ideation',
    },
    {
      targetId: 'mental-health-trastornos-alimentarios',
      targetType: 'condition',
      relationship: 'related',
      label: 'Trastornos Alimentarios | Eating Disorders',
    },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['mental-health', 'psychiatry', 'mood-disorders', 'bilingual-content'],
    keywords: [
      'depresion',
      'depression',
      'trastorno depresivo mayor',
      'major depressive disorder',
      'TDM',
      'MDD',
      'antidepresivos',
      'antidepressants',
      'TCC',
      'CBT',
      'psicoterapia',
      'psychotherapy',
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

export default depresionDepressionContent;
