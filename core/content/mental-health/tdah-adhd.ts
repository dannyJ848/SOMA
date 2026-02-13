/**
 * TDAH / ADHD - Contenido Educativo Bilingue
 *
 * Trastorno por deficit de atencion e hiperactividad en ninos y adultos.
 * Attention deficit hyperactivity disorder in children and adults.
 *
 * Spanish-first with English translations separated by " | "
 * Culturally sensitive content addressing ADHD across the lifespan
 * with attention to cultural perceptions in Spanish-speaking communities.
 */

import { EducationalContent } from '../types';

export const tdahAdhdContent: EducationalContent = {
  id: 'mental-health-tdah-adhd',
  type: 'condition',
  name: 'Trastorno por Deficit de Atencion e Hiperactividad | Attention Deficit Hyperactivity Disorder',
  nameEs: 'Trastorno por Deficit de Atencion e Hiperactividad (TDAH)',
  alternateNames: [
    'TDAH | ADHD',
    'Deficit de Atencion | Attention Deficit',
    'TDA | ADD',
    'Hiperactividad | Hyperactivity',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'El TDAH es una condicion del cerebro que afecta la atencion, el control de impulsos y, a veces, la actividad fisica. No es falta de disciplina ni mala crianza -- es una condicion medica que se puede tratar. Afecta tanto a ninos como a adultos. | ADHD is a brain condition that affects attention, impulse control, and sometimes physical activity. It is not a lack of discipline or bad parenting -- it is a medical condition that can be treated. It affects both children and adults.',
      explanation: `**Que es el TDAH? | What is ADHD?**

El Trastorno por Deficit de Atencion e Hiperactividad (TDAH) es una condicion del cerebro que hace dificil prestar atencion, controlar impulsos y, en algunos casos, quedarse quieto/a. Es una de las condiciones mas comunes en ninos, pero tambien afecta a muchos adultos. | Attention Deficit Hyperactivity Disorder (ADHD) is a brain condition that makes it hard to pay attention, control impulses, and in some cases, stay still. It is one of the most common conditions in children, but it also affects many adults.

**Lo que el TDAH NO es | What ADHD is NOT:**

- NO es falta de disciplina | It is NOT a lack of discipline
- NO es mala crianza de los padres | It is NOT bad parenting
- NO es pereza o flojera | It is NOT laziness
- NO es un problema de inteligencia (las personas con TDAH pueden ser muy inteligentes) | It is NOT an intelligence problem (people with ADHD can be very smart)
- NO es algo que se quita solo con "echarle ganas" | It is NOT something that goes away by just "trying harder"

**Tipos de TDAH | Types of ADHD:**

**Predominantemente inatento (lo que antes se llamaba "TDA") | Predominantly Inattentive (formerly called "ADD"):**
- Dificultad para prestar atencion a detalles | Difficulty paying attention to details
- Parece no escuchar cuando se le habla | Seems not to listen when spoken to
- Pierde cosas frecuentemente | Frequently loses things
- Se distrae facilmente | Gets distracted easily
- Es olvidadizo/a en actividades diarias | Forgetful in daily activities

**Predominantemente hiperactivo-impulsivo | Predominantly Hyperactive-Impulsive:**
- No puede quedarse quieto/a | Cannot stay still
- Habla excesivamente | Talks excessively
- Interrumpe a los demas | Interrupts others
- Tiene dificultad para esperar su turno | Has difficulty waiting for their turn
- Se siente inquieto/a internamente | Feels restless internally

**Combinado | Combined:**
- Tiene sintomas de ambos tipos | Has symptoms of both types
- Es el tipo mas comun | It is the most common type

**En nuestra cultura | In our culture:**

En muchas familias latinas, los ninos con TDAH son vistos como "mal portados," "inquietos," o "flojos." Los adultos con TDAH pueden ser vistos como "irresponsables" o "desorganizados." Pero el TDAH es una condicion medica del cerebro, no un defecto de caracter. Asi como no culpariamos a alguien por necesitar lentes, no debemos culpar a alguien por tener TDAH. | In many Latino families, children with ADHD are seen as "badly behaved," "restless," or "lazy." Adults with ADHD may be seen as "irresponsible" or "disorganized." But ADHD is a medical brain condition, not a character defect. Just as we would not blame someone for needing glasses, we should not blame someone for having ADHD.

**TDAH en adultos | ADHD in adults:**

Muchos adultos tienen TDAH sin saberlo. Pueden haber luchado toda su vida con: | Many adults have ADHD without knowing it. They may have struggled their entire lives with:
- Dificultad para organizar tareas y manejar el tiempo | Difficulty organizing tasks and managing time
- Olvidar citas y fechas importantes | Forgetting appointments and important dates
- Dificultad para completar proyectos | Difficulty completing projects
- Problemas en las relaciones por no "poner atencion" | Relationship problems from not "paying attention"
- Sentirse abrumado/a facilmente | Feeling overwhelmed easily

**Tratamiento | Treatment:**

- Medicamentos que ayudan al cerebro a enfocarse mejor | Medications that help the brain focus better
- Terapia conductual (especialmente para ninos) | Behavioral therapy (especially for children)
- Estrategias de organizacion y manejo del tiempo | Organization and time management strategies
- Apoyo escolar y acomodaciones | School support and accommodations
- Educacion para la familia | Family education

**RECURSOS | RESOURCES:**
- **CHADD en Espanol**: Organizacion de apoyo para familias con TDAH | CHADD in Spanish: Support organization for families with ADHD
- Si tu hijo/a tiene dificultades en la escuela, habla con el pediatra y la escuela sobre evaluaciones. | If your child is having difficulties in school, talk to the pediatrician and school about evaluations.`,
      keyTerms: [
        {
          term: 'TDAH | ADHD',
          definition:
            'Condicion del cerebro que afecta la atencion, el control de impulsos y a veces la actividad fisica | Brain condition that affects attention, impulse control, and sometimes physical activity',
        },
        {
          term: 'inatento | inattentive',
          definition:
            'Tipo de TDAH donde el problema principal es la dificultad para prestar atencion | Type of ADHD where the main problem is difficulty paying attention',
        },
        {
          term: 'hiperactivo | hyperactive',
          definition:
            'Tipo de TDAH donde el problema principal es la inquietud excesiva y dificultad para quedarse quieto | Type of ADHD where the main problem is excessive restlessness and difficulty staying still',
        },
        {
          term: 'impulso | impulse',
          definition:
            'Un deseo repentino de hacer algo sin pensar en las consecuencias | A sudden urge to do something without thinking about the consequences',
        },
      ],
      analogies: [
        'Tener TDAH es como tener un televisor que cambia de canal solo, sin control remoto -- tu cerebro salta de un pensamiento a otro sin que lo quieras. | Having ADHD is like having a TV that changes channels by itself, without a remote -- your brain jumps from one thought to another without you wanting it to.',
        'El cerebro con TDAH es como un motor de carro que esta acelerado todo el tiempo -- tiene mucha energia pero necesita ayuda para dirigirla. | The ADHD brain is like a car engine that is revving all the time -- it has a lot of energy but needs help directing it.',
        'Las medicinas para el TDAH son como los lentes para alguien que no ve bien -- no cambian quien eres, solo te ayudan a enfocarte mejor. | ADHD medications are like glasses for someone who cannot see well -- they do not change who you are, they just help you focus better.',
      ],
      examples: [
        'Carlitos es muy inteligente pero siempre esta en problemas en la escuela porque no puede quedarse quieto y pierde sus tareas. Su mama piensa que es "necio," pero en realidad tiene TDAH. Con tratamiento, sus calificaciones mejoraron mucho. | Carlitos is very smart but is always in trouble at school because he cannot stay still and loses his homework. His mom thinks he is "stubborn," but he actually has ADHD. With treatment, his grades improved a lot.',
        'Sofia es una adulta que siempre llega tarde, pierde sus llaves, y siente que nunca puede terminar nada. Siempre penso que era "desorganizada." A los 35 anos, le diagnosticaron TDAH y finalmente entendio por que siempre le costaba tanto trabajo. | Sofia is an adult who is always late, loses her keys, and feels she can never finish anything. She always thought she was "disorganized." At 35, she was diagnosed with ADHD and finally understood why things were always so hard.',
      ],
      patientCounselingPoints: [
        'El TDAH es una condicion medica del cerebro, no un defecto de caracter. | ADHD is a medical brain condition, not a character defect.',
        'Los ninos con TDAH no se portan mal a proposito -- su cerebro funciona diferente. | Children with ADHD are not misbehaving on purpose -- their brain works differently.',
        'El tratamiento puede hacer una gran diferencia en la vida de tu hijo/a o en la tuya. | Treatment can make a big difference in your child life or in yours.',
        'El TDAH no desaparece con la edad en muchos casos -- los adultos tambien lo pueden tener. | ADHD does not disappear with age in many cases -- adults can have it too.',
      ],
    },
    2: {
      level: 2,
      summary:
        'El TDAH es un trastorno del neurodesarrollo caracterizado por patrones persistentes de inatención, hiperactividad e impulsividad que interfieren con el funcionamiento. Tiene una base neurobiologica fuerte con alta heredabilidad (~75%) y responde bien al tratamiento multimodal (farmacoterapia + intervencion conductual). | ADHD is a neurodevelopmental disorder characterized by persistent patterns of inattention, hyperactivity, and impulsivity that interfere with functioning. It has a strong neurobiological basis with high heritability (~75%) and responds well to multimodal treatment (pharmacotherapy + behavioral intervention).',
      explanation: `**Epidemiologia | Epidemiology:**

- Prevalencia en ninos: 5-7% a nivel mundial | Prevalence in children: 5-7% worldwide
- Prevalencia en adultos: 2.5-4% | Prevalence in adults: 2.5-4%
- Relacion ninos:ninas historica 3:1 (probablemente subdiagnostico en ninas) | Historical boy:girl ratio 3:1 (likely underdiagnosis in girls)
- 60-70% de los ninos continuan con sintomas en la adultez | 60-70% of children continue with symptoms into adulthood
- Subdiagnosticado en comunidades hispanas por barreras culturales y de acceso | Underdiagnosed in Hispanic communities due to cultural and access barriers

**Presentacion por edad | Presentation by age:**

*Ninos en edad preescolar (3-5 anos) | Preschool children (3-5 years):*
- Hiperactividad es el sintoma predominante | Hyperactivity is the predominant symptom
- Dificultad para seguir instrucciones | Difficulty following instructions
- Rabietas frecuentes, dificultad para esperar | Frequent tantrums, difficulty waiting

*Ninos en edad escolar (6-12 anos) | School-age children (6-12 years):*
- Dificultad academica se hace evidente | Academic difficulty becomes evident
- Problemas con organizacion y tareas | Problems with organization and homework
- Dificultades sociales (impulsividad, no respetar turnos) | Social difficulties (impulsivity, not respecting turns)
- Baja autoestima emergente | Emerging low self-esteem

*Adolescentes (13-17 anos) | Adolescents (13-17 years):*
- Hiperactividad disminuye, inatención persiste | Hyperactivity decreases, inattention persists
- Mayor riesgo de conductas de riesgo | Greater risk of risky behaviors
- Dificultades con planificacion a largo plazo | Difficulties with long-term planning
- Comorbilidad con ansiedad y depresion | Comorbidity with anxiety and depression

*Adultos | Adults:*
- Inquietud interna mas que hiperactividad visible | Internal restlessness more than visible hyperactivity
- Dificultades ejecutivas: Organizacion, priorizacion, manejo del tiempo | Executive difficulties: Organization, prioritization, time management
- Inestabilidad emocional y frustracion facil | Emotional instability and easy frustration
- Impacto en relaciones, trabajo, finanzas | Impact on relationships, work, finances

**Tipos DSM-5-TR | DSM-5-TR Types:**

1. **Presentacion predominantemente inatenta** | Predominantly Inattentive Presentation
   - 6+ sintomas de inatención (5+ en adultos, 17+) | 6+ inattention symptoms (5+ in adults 17+)
   - Comun en ninas y mujeres (frecuentemente no diagnosticado) | Common in girls and women (frequently undiagnosed)

2. **Presentacion predominantemente hiperactiva-impulsiva** | Predominantly Hyperactive-Impulsive Presentation
   - 6+ sintomas de hiperactividad-impulsividad (5+ en adultos) | 6+ hyperactivity-impulsivity symptoms (5+ in adults)
   - Menos comun como presentacion aislada | Less common as isolated presentation

3. **Presentacion combinada** | Combined Presentation
   - 6+ sintomas en ambas categorias | 6+ symptoms in both categories
   - La mas comun | Most common

**Neurobiologia basica | Basic neurobiology:**

- Redes dopaminergicas y noradrenergicas alteradas | Altered dopaminergic and noradrenergic networks
- Corteza prefrontal hipoactiva (funciones ejecutivas) | Hypoactive prefrontal cortex (executive functions)
- Red de modo predeterminado hiperactivada (mente divagante) | Hyperactivated default mode network (mind wandering)
- Madurez cortical retrasada (~3 anos promedio en ninos con TDAH) | Delayed cortical maturity (~3 years average in children with ADHD)
- Heredabilidad alta: ~75% | High heritability: ~75%

**Tratamiento | Treatment:**

*Farmacoterapia | Pharmacotherapy:*

Estimulantes (primera linea) | Stimulants (first-line):
- Metilfenidato (Ritalin, Concerta) | Methylphenidate (Ritalin, Concerta)
- Anfetaminas (Adderall, Vyvanse) | Amphetamines (Adderall, Vyvanse)
- Efectividad: 70-80% de los pacientes responden | Effectiveness: 70-80% of patients respond
- Efectos comunes: Perdida de apetito, dificultad para dormir | Common effects: Appetite loss, difficulty sleeping

No estimulantes | Non-stimulants:
- Atomoxetina (Strattera) -- inhibidor de la recaptacion de norepinefrina | Atomoxetine (Strattera) -- norepinephrine reuptake inhibitor
- Guanfacina XR (Intuniv), Clonidina XR (Kapvay) -- agonistas alfa-2 | Guanfacine XR (Intuniv), Clonidine XR (Kapvay) -- alpha-2 agonists
- Utiles cuando hay contraindicaciones o efectos secundarios de estimulantes | Useful when there are contraindications or stimulant side effects

*Intervencion conductual | Behavioral intervention:*
- Entrenamiento para padres en manejo conductual | Parent training in behavioral management
- Terapia conductual para el nino | Behavioral therapy for the child
- Acomodaciones escolares (504/IEP) | School accommodations (504/IEP)
- Entrenamiento en habilidades organizativas | Organizational skills training
- TCC adaptada para adultos con TDAH | CBT adapted for adults with ADHD

*Abordaje multimodal | Multimodal approach:*
- La combinacion de medicamento + intervencion conductual es lo mas efectivo (estudio MTA) | Combination of medication + behavioral intervention is most effective (MTA study)
- Educacion familiar es esencial | Family education is essential
- Apoyo escolar mejora los resultados | School support improves outcomes`,
      keyTerms: [
        {
          term: 'trastorno del neurodesarrollo | neurodevelopmental disorder',
          definition:
            'Condicion que se origina en el desarrollo temprano del cerebro y afecta el funcionamiento a lo largo de la vida | Condition originating in early brain development that affects functioning throughout life',
        },
        {
          term: 'funciones ejecutivas | executive functions',
          definition:
            'Habilidades mentales como planificar, organizar, controlar impulsos y manejar el tiempo | Mental skills like planning, organizing, controlling impulses, and managing time',
        },
        {
          term: 'metilfenidato | methylphenidate',
          definition:
            'Medicamento estimulante de primera linea para el TDAH que aumenta la dopamina y norepinefrina en el cerebro | First-line stimulant medication for ADHD that increases dopamine and norepinephrine in the brain',
        },
        {
          term: 'heredabilidad | heritability',
          definition:
            'La proporcion en que una condicion es explicada por factores geneticos; en TDAH es ~75% | The proportion to which a condition is explained by genetic factors; in ADHD it is ~75%',
        },
        {
          term: 'comorbilidad | comorbidity',
          definition:
            'La presencia de dos o mas condiciones al mismo tiempo; comun en TDAH (ansiedad, depresion, trastornos de aprendizaje) | The presence of two or more conditions at the same time; common in ADHD (anxiety, depression, learning disorders)',
        },
      ],
      analogies: [
        'La corteza prefrontal es como el "director de orquesta" del cerebro -- en el TDAH, este director tiene dificultad para coordinar todas las secciones. | The prefrontal cortex is like the brain "orchestra conductor" -- in ADHD, this conductor has difficulty coordinating all the sections.',
        'Los estimulantes para el TDAH funcionan como los lentes de sol en un dia muy brillante -- reducen el "ruido" mental para que el cerebro pueda enfocarse en lo importante. | Stimulants for ADHD work like sunglasses on a very bright day -- they reduce mental "noise" so the brain can focus on what is important.',
      ],
      examples: [
        'Una nina que "suena despierta" en clase, pierde sus cosas constantemente y tiene dificultad para terminar tareas puede tener TDAH tipo inatento, aunque nunca sea "inquieta." Las ninas con TDAH a menudo pasan desapercibidas. | A girl who "daydreams" in class, constantly loses her things, and has difficulty finishing tasks may have inattentive ADHD, even though she is never "restless." Girls with ADHD often go unnoticed.',
        'Un adulto diagnosticado con TDAH describe sentir que su mente tiene 20 pestanas de navegador abiertas al mismo tiempo, y no puede cerrar ninguna. | An adult diagnosed with ADHD describes feeling like their mind has 20 browser tabs open at the same time, and they cannot close any.',
      ],
    },
    3: {
      level: 3,
      summary:
        'El TDAH involucra disfuncion en los circuitos frontoestriatales dopaminergicos y noradrenergicos, con afectacion de las funciones ejecutivas, regulacion de la atencion y control inhibitorio. Los estimulantes (metilfenidato, anfetaminas) son tratamiento farmacologico de primera linea, con fuerte base de evidencia del estudio MTA para tratamiento multimodal. | ADHD involves dysfunction in dopaminergic and noradrenergic frontostriatal circuits, with impairment of executive functions, attention regulation, and inhibitory control. Stimulants (methylphenidate, amphetamines) are first-line pharmacotherapy, with strong evidence from the MTA study for multimodal treatment.',
      explanation: `**Criterios diagnosticos DSM-5-TR | DSM-5-TR Diagnostic Criteria:**

**Criterio A -- Sintomas de inatención (6+/5+ para adultos 17+) | Criterion A -- Inattention symptoms (6+/5+ for adults 17+):**
a) No presta atencion a detalles / errores por descuido | Fails to give close attention to details / careless mistakes
b) Dificultad para mantener atencion | Difficulty sustaining attention
c) Parece no escuchar cuando se le habla directamente | Does not seem to listen when spoken to directly
d) No sigue instrucciones / no termina tareas | Does not follow through on instructions / fails to finish tasks
e) Dificultad para organizar tareas y actividades | Difficulty organizing tasks and activities
f) Evita tareas que requieren esfuerzo mental sostenido | Avoids tasks requiring sustained mental effort
g) Pierde cosas necesarias | Loses things necessary for tasks
h) Se distrae facilmente por estimulos externos | Easily distracted by extraneous stimuli
i) Olvidadizo en actividades diarias | Forgetful in daily activities

**Criterio A -- Sintomas de hiperactividad-impulsividad (6+/5+ para adultos 17+) | Criterion A -- Hyperactivity-impulsivity symptoms (6+/5+ for adults 17+):**
a) Mueve manos y pies, se retuerce | Fidgets with hands or feet, squirms
b) Se levanta del asiento cuando debe permanecer sentado | Leaves seat when remaining seated is expected
c) Corre o trepa en situaciones inapropiadas | Runs or climbs in inappropriate situations
d) Incapaz de jugar o participar en actividades tranquilamente | Unable to play or engage in activities quietly
e) "En marcha" o actua como si "tuviera un motor" | "On the go" or acts as if "driven by a motor"
f) Habla excesivamente | Talks excessively
g) Responde antes de que se complete la pregunta | Blurts out answers before questions are completed
h) Dificultad para esperar su turno | Difficulty waiting turn
i) Interrumpe o se entromete | Interrupts or intrudes on others

**Criterios adicionales | Additional criteria:**
- Criterio B: Varios sintomas presentes antes de los 12 anos | Several symptoms present before age 12
- Criterio C: Sintomas presentes en 2+ ambientes | Symptoms present in 2+ settings
- Criterio D: Deterioro clinicamente significativo | Clinically significant impairment
- Criterio E: No explicados mejor por otro trastorno | Not better explained by another disorder

**Neurobiologia | Neurobiology:**

*Circuitos frontoestriatales | Frontostriatal circuits:*
- Corteza prefrontal dorsolateral (CPFdl): Memoria de trabajo, planificacion | Dorsolateral PFC (dlPFC): Working memory, planning
- Corteza prefrontal ventrolateral: Control inhibitorio | Ventrolateral PFC: Inhibitory control
- Corteza cingulada anterior: Deteccion de errores, motivacion | Anterior cingulate cortex: Error detection, motivation
- Estriado (nucleo caudado, putamen): Recompensa, motivacion | Striatum (caudate, putamen): Reward, motivation
- Cerebelo: Timing, coordinacion cognitiva | Cerebellum: Timing, cognitive coordination

*Neurotransmisores | Neurotransmitters:*
- Dopamina: Reducida en circuitos prefrontales y estriado | Dopamine: Reduced in prefrontal circuits and striatum
- Norepinefrina: Senalizacion alterada en CPF | Norepinephrine: Altered signaling in PFC
- La corteza prefrontal requiere niveles optimos de DA y NE (curva U invertida) | PFC requires optimal DA and NE levels (inverted U curve)
- Estimulantes normalizan la senalizacion DA/NE prefrontal | Stimulants normalize prefrontal DA/NE signaling

*Neuroimagen estructural | Structural neuroimaging:*
- Volumen cerebral total reducido (~3-5%) | Reduced total brain volume (~3-5%)
- Corteza prefrontal mas delgada | Thinner prefrontal cortex
- Nucleo caudado mas pequeno | Smaller caudate nucleus
- Madurez cortical retrasada (~3 anos) | Delayed cortical maturity (~3 years)
- Los cambios se normalizan parcialmente con la edad y el tratamiento | Changes partially normalize with age and treatment

*Red de modo predeterminado (RMP) | Default Mode Network (DMN):*
- Normalmente se desactiva durante tareas | Normally deactivates during tasks
- En TDAH: Falla de supresion de la RMP -> "mente divagante" | In ADHD: DMN suppression failure -> "mind wandering"
- Anticorrelacion deficiente entre RMP y redes de tarea | Deficient anticorrelation between DMN and task networks
- Objetivo de intervencion (neurofeedback, meditacion) | Intervention target (neurofeedback, meditation)

**Genetica | Genetics:**

- Heredabilidad: ~75% (una de las mas altas en psiquiatria) | Heritability: ~75% (one of the highest in psychiatry)
- Arquitectura poligenica | Polygenic architecture
- Genes clave: DRD4, DRD5, DAT1 (SLC6A3), SNAP25, ADRA2A | Key genes: DRD4, DRD5, DAT1 (SLC6A3), SNAP25, ADRA2A
- GWAS: Multiples loci de efecto pequeno | GWAS: Multiple small-effect loci
- Riesgo compartido con TEA, trastornos de aprendizaje, trastornos de conducta | Shared risk with ASD, learning disorders, conduct disorders

**Farmacoterapia detallada | Detailed pharmacotherapy:**

*Estimulantes | Stimulants:*

Metilfenidato (MPH) | Methylphenidate:
- Mecanismo: Bloquea DAT y NET; aumenta DA y NE sinaptica | Mechanism: Blocks DAT and NET; increases synaptic DA and NE
- Formulaciones: Liberacion inmediata (3-4h), extendida (8-12h) | Formulations: Immediate-release (3-4h), extended-release (8-12h)
- Dosis: 0.3-1.0 mg/kg/dia (ninos) | Dose: 0.3-1.0 mg/kg/day (children)

Anfetaminas | Amphetamines:
- Mecanismo: Liberan DA y NE de las terminales nerviosas + bloquean recaptacion | Mechanism: Release DA and NE from nerve terminals + block reuptake
- Lisdexanfetamina (Vyvanse): Profarmaco, menor potencial de abuso | Lisdexfetamine (Vyvanse): Prodrug, lower abuse potential
- Sales mixtas de anfetamina (Adderall) | Mixed amphetamine salts (Adderall)

*No estimulantes | Non-stimulants:*
- Atomoxetina: Inhibidor selectivo de NET; efecto en 4-6 semanas | Atomoxetine: Selective NET inhibitor; effect in 4-6 weeks
- Guanfacina XR: Agonista alfa-2A; mejora CPF, reduce hiperactividad | Guanfacine XR: Alpha-2A agonist; improves PFC, reduces hyperactivity
- Clonidina XR: Agonista alfa-2; util para tics comorbidos | Clonidine XR: Alpha-2 agonist; useful for comorbid tics
- Viloxazina XR: Inhibidor de NET aprobado 2021 | Viloxazine XR: NET inhibitor approved 2021

*Monitoreo | Monitoring:*
- Altura, peso, presion arterial, frecuencia cardiaca | Height, weight, blood pressure, heart rate
- Escalas de sintomas (Vanderbilt, Conners, SNAP-IV) | Symptom scales (Vanderbilt, Conners, SNAP-IV)
- Evaluacion de efectos secundarios y comorbilidades | Assessment of side effects and comorbidities

**Intervencion conductual basada en evidencia | Evidence-based behavioral intervention:**

- Entrenamiento para padres (primer escalon para preescolares) | Parent training (first step for preschoolers)
- Manejo conductual en el aula | Classroom behavioral management
- TCC adaptada para adultos (organizacion, planificacion, regulacion emocional) | CBT adapted for adults (organization, planning, emotional regulation)
- Entrenamiento en habilidades sociales | Social skills training
- Organizacion escolar y acomodaciones | School organization and accommodations

**Comorbilidades frecuentes | Frequent comorbidities:**

- Trastornos de aprendizaje: 30-50% | Learning disorders: 30-50%
- Trastorno oposicional desafiante: 40-60% | Oppositional defiant disorder: 40-60%
- Trastornos de ansiedad: 25-35% | Anxiety disorders: 25-35%
- Depresion: 15-20% | Depression: 15-20%
- Trastorno de conducta: 20-40% | Conduct disorder: 20-40%
- TEA: Frecuente co-ocurrencia | ASD: Frequent co-occurrence`,
      keyTerms: [
        {
          term: 'circuito frontoestriatal | frontostriatal circuit',
          definition:
            'Conexiones entre la corteza prefrontal y el estriado que regulan la atencion, planificacion y control de impulsos; disfuncionales en TDAH | Connections between prefrontal cortex and striatum regulating attention, planning, and impulse control; dysfunctional in ADHD',
        },
        {
          term: 'DAT1 | dopamine transporter',
          definition:
            'Transportador de dopamina -- proteina que recicla la dopamina; objetivo principal de los estimulantes para TDAH | Dopamine transporter -- protein that recycles dopamine; primary target of ADHD stimulants',
        },
        {
          term: 'red de modo predeterminado | default mode network',
          definition:
            'Red cerebral activa durante el reposo y la mente divagante; su supresion deficiente durante tareas contribuye a la inatención en TDAH | Brain network active during rest and mind wandering; its deficient suppression during tasks contributes to inattention in ADHD',
        },
        {
          term: 'estudio MTA',
          definition:
            'Estudio de Tratamiento Multimodal para TDAH -- el estudio mas grande de tratamiento para TDAH en ninos, que demostro la superioridad del tratamiento multimodal | Multimodal Treatment Study for ADHD -- the largest ADHD treatment study in children, demonstrating superiority of multimodal treatment',
        },
        {
          term: 'lisdexanfetamina | lisdexfetamine',
          definition:
            'Profarmaco de anfetamina con menor potencial de abuso; se convierte en d-anfetamina activa en el cuerpo | Amphetamine prodrug with lower abuse potential; converted to active d-amphetamine in the body',
        },
      ],
      clinicalNotes:
        'El diagnostico de TDAH es clinico (no hay prueba de laboratorio o imagen). Requiere evaluacion comprehensiva incluyendo historia del desarrollo, escalas de multiples informantes, y descarte de diagnos diferenciales (ansiedad, trauma, trastorno del espectro autista, problemas de sueno, problemas de vision/audicion). En ninos hispanohablantes, considerar que los maestros pueden interpretar el comportamiento a traves de lentes culturales; usar escalas validadas en espanol. El subdiagnostico en ninas y en comunidades latinas requiere concienciacion activa. Los estimulantes tienen un perfil de seguridad bien establecido cuando se monitorean adecuadamente. | ADHD diagnosis is clinical (no lab or imaging test). Requires comprehensive evaluation including developmental history, multi-informant scales, and ruling out differential diagnoses (anxiety, trauma, ASD, sleep problems, vision/hearing problems). In Spanish-speaking children, consider that teachers may interpret behavior through cultural lenses; use Spanish-validated scales. Underdiagnosis in girls and Latino communities requires active awareness. Stimulants have a well-established safety profile when properly monitored.',
    },
    4: {
      level: 4,
      summary:
        'El TDAH refleja disfuncion en multiples redes neuronales incluyendo la red frontoparietal, red de saliencia y red de modo predeterminado, con deficits en la senalizacion de dopamina y norepinefrina tonica y fasica. Modelos contemporaneos enfatizan la desregulacion de las funciones ejecutivas, el procesamiento de recompensas alterado y la variabilidad de la respuesta como caracteristicas nucleares. | ADHD reflects dysfunction in multiple neural networks including the frontoparietal, salience, and default mode networks, with deficits in tonic and phasic dopamine and norepinephrine signaling. Contemporary models emphasize executive function dysregulation, altered reward processing, and response variability as core features.',
      explanation: `**Modelos neuropsicologicos avanzados | Advanced neuropsychological models:**

*Modelo de deficit de funciones ejecutivas (Barkley) | Executive function deficit model (Barkley):*
- Deficit central: Control inhibitorio | Core deficit: Inhibitory control
- Esto afecta: Memoria de trabajo, autorregulacion del afecto, internalizacion del habla, reconstitucion | This affects: Working memory, affect self-regulation, internalization of speech, reconstitution
- Critica: No todos los pacientes con TDAH tienen deficits ejecutivos | Critique: Not all ADHD patients have executive deficits

*Modelo de aversion al retraso (Sonuga-Barke) | Delay aversion model (Sonuga-Barke):*
- Via motivacional: Preferencia por recompensas inmediatas pequenas sobre recompensas demoradas mayores | Motivational pathway: Preference for small immediate rewards over larger delayed rewards
- Circuito de recompensa ventral estriatal alterado | Altered ventral striatal reward circuit
- Explica inatención como busqueda de estimulacion | Explains inattention as stimulation seeking

*Modelo de multiples vias (Sonuga-Barke) | Multiple pathway model (Sonuga-Barke):*
- Via ejecutiva: Deficits inhibitorios (circuito frontoestriatal dorsal) | Executive pathway: Inhibitory deficits (dorsal frontostriatal circuit)
- Via motivacional: Aversion al retraso (circuito ventral estriatal) | Motivational pathway: Delay aversion (ventral striatal circuit)
- Via temporal: Procesamiento temporal alterado (cerebelo) | Temporal pathway: Altered temporal processing (cerebellum)

*Modelo de variabilidad de la respuesta | Response variability model:*
- Variabilidad intra-individual (VII) como endofenotipo | Intra-individual variability (IIV) as endophenotype
- Fluctuaciones atencionales momento a momento | Moment-to-moment attentional fluctuations
- Relacionada con regulacion deficiente del arousal | Related to deficient arousal regulation

**Neurociencia avanzada | Advanced neuroscience:**

*Redes a gran escala | Large-scale networks:*
- Red frontoparietal (atencion dirigida): Hipoactivada | Frontoparietal network (directed attention): Hypoactivated
- Red de saliencia (cingulada anterior, insula): Disfuncional | Salience network (anterior cingulate, insula): Dysfunctional
- Red de modo predeterminado: Supresion insuficiente | Default mode network: Insufficient suppression
- Anticorrelacion RMP-tarea: Reducida -> "lapsos atencionales" | DMN-task anticorrelation: Reduced -> "attention lapses"
- Red ventral de atencion: Alterada -> distractibilidad | Ventral attention network: Altered -> distractibility

*Dopamina tonica vs fasica | Tonic vs phasic dopamine:*
- DA tonica: Nivel basal; regula la "relacion senal/ruido" | Tonic DA: Baseline level; regulates "signal-to-noise ratio"
- DA fasica: Rafagas en respuesta a estimulos relevantes | Phasic DA: Bursts in response to relevant stimuli
- En TDAH: Ambos alterados; estimulantes normalizan principalmente la tonica | In ADHD: Both altered; stimulants primarily normalize tonic
- Modelo de dopamina transferencia temporal (TDAH y procesamiento de recompensas) | Temporal difference dopamine model (ADHD and reward processing)

*Conectividad funcional | Functional connectivity:*
- Conectividad intrinseca CPF-estriado reducida | Reduced intrinsic PFC-striatal connectivity
- Hiperconectividad de la RMP con red de tarea | DMN hyperconnectivity with task network
- Redes cerebelosas-prefrontales alteradas | Altered cerebellar-prefrontal networks
- Potencial como biomarcador diagnostico | Potential as diagnostic biomarker

**Farmacologia avanzada | Advanced pharmacology:**

*Mecanismos de estimulantes a nivel molecular | Stimulant mechanisms at molecular level:*

Metilfenidato (MPH):
- Bloquea DAT con afinidad moderada | Blocks DAT with moderate affinity
- Bloquea NET | Blocks NET
- Aumenta DA y NE en hendidura sinaptica | Increases DA and NE in synaptic cleft
- No afecta la liberacion vesicular | Does not affect vesicular release
- Efecto predominante en corteza prefrontal a dosis terapeuticas | Predominant effect in prefrontal cortex at therapeutic doses

Anfetaminas:
- Entran a la terminal nerviosa via DAT/NET | Enter nerve terminal via DAT/NET
- Revierten la direccion del transporte (liberan DA/NE) | Reverse transporter direction (release DA/NE)
- Inhiben VMAT2 (liberan DA vesicular) | Inhibit VMAT2 (release vesicular DA)
- Inhiben MAO levemente | Mildly inhibit MAO
- Mayor potencia que MPH; tambien mayor potencial de abuso | Greater potency than MPH; also greater abuse potential

*Farmacogenomica emergente | Emerging pharmacogenomics:*
- DAT1 VNTR (10-repeat): Posible predictor de respuesta a estimulantes | DAT1 VNTR (10-repeat): Possible predictor of stimulant response
- CYP2D6: Metabolismo de atomoxetina | CYP2D6: Atomoxetine metabolism
- COMT Val158Met: Influye en DA prefrontal | COMT Val158Met: Influences prefrontal DA
- Aun no listo para uso clinico rutinario | Not yet ready for routine clinical use

**TDAH en adultos -- evaluacion y tratamiento | Adult ADHD -- assessment and treatment:**

*Evaluacion | Assessment:*
- Historia retrospectiva de sintomas infantiles | Retrospective history of childhood symptoms
- Escalas validadas: ASRS (WHO), Wender Utah Rating Scale | Validated scales: ASRS (WHO), Wender Utah Rating Scale
- Descartar: Ansiedad, depresion, trastorno bipolar, trauma, uso de sustancias, problemas de sueno | Rule out: Anxiety, depression, bipolar disorder, trauma, substance use, sleep problems
- Evaluacion neuropsicologica puede ser util pero no es necesaria | Neuropsychological evaluation can be helpful but not required

*Tratamiento farmacologico en adultos | Pharmacological treatment in adults:*
- Estimulantes siguen siendo primera linea | Stimulants remain first-line
- Lisdexanfetamina: Preferida por perfil de liberacion suave y menor potencial de abuso | Lisdexfetamine: Preferred for smooth release profile and lower abuse potential
- Atomoxetina: Opcion cuando hay uso de sustancias comorbido | Atomoxetine: Option when there is comorbid substance use
- TCC como complemento para estrategias compensatorias | CBT as complement for compensatory strategies

*TCC para adultos con TDAH | CBT for adults with ADHD:*
- Entrenamiento en organizacion y planificacion | Organization and planning training
- Manejo del tiempo (uso de calendarios, alarmas, rutinas) | Time management (use of calendars, alarms, routines)
- Regulacion emocional | Emotional regulation
- Reduccion de procrastinacion | Procrastination reduction
- Protocolos de Safren (MGH) bien evidenciados | Safren protocols (MGH) well-evidenced

**Consideraciones culturales avanzadas | Advanced cultural considerations:**

- En la cultura latina, el concepto de "disciplina" puede chocar con el diagnostico de TDAH | In Latino culture, the concept of "discipline" may conflict with ADHD diagnosis
- Padres pueden resistir medicacion por estigma y miedo | Parents may resist medication due to stigma and fear
- Psicoeducacion culturalmente adaptada mejora la adherencia | Culturally adapted psychoeducation improves adherence
- Considerar el impacto del bilinguismo en la evaluacion (cambio de codigo no es inatención) | Consider bilingualism impact on evaluation (code-switching is not inattention)
- Acceso desigual a evaluaciones neuropsicologicas en espanol | Unequal access to neuropsychological evaluations in Spanish`,
      keyTerms: [
        {
          term: 'variabilidad intra-individual | intra-individual variability',
          definition:
            'Fluctuaciones en el rendimiento de un momento a otro; un endofenotipo propuesto para TDAH | Moment-to-moment performance fluctuations; a proposed endophenotype for ADHD',
        },
        {
          term: 'aversion al retraso | delay aversion',
          definition:
            'Preferencia por recompensas inmediatas sobre recompensas demoradas mayores; via motivacional propuesta en TDAH | Preference for immediate over larger delayed rewards; proposed motivational pathway in ADHD',
        },
        {
          term: 'dopamina tonica vs fasica | tonic vs phasic dopamine',
          definition:
            'Tonica: Nivel basal de DA que establece la relacion senal/ruido. Fasica: Rafagas de DA en respuesta a estimulos relevantes. Ambas alteradas en TDAH | Tonic: Baseline DA level setting signal-to-noise ratio. Phasic: DA bursts in response to relevant stimuli. Both altered in ADHD',
        },
        {
          term: 'VMAT2',
          definition:
            'Transportador vesicular de monoaminas tipo 2 -- proteina que empaqueta dopamina en vesiculas; inhibida por anfetaminas | Vesicular monoamine transporter type 2 -- protein packaging dopamine into vesicles; inhibited by amphetamines',
        },
        {
          term: 'endofenotipo | endophenotype',
          definition:
            'Marcador biologico medible que esta asociado con un trastorno pero es mas cercano a los genes que los sintomas clinicos | Measurable biological marker associated with a disorder but closer to genes than clinical symptoms',
        },
      ],
      clinicalNotes:
        'Puntos clinicos criticos: 1) El diagnostico de TDAH en adultos requiere evidencia de sintomas antes de los 12 anos -- obtener historia colateral. 2) La comorbilidad es la regla, no la excepcion (~70% tienen al menos una comorbilidad). 3) El uso de sustancias comorbido NO es contraindicacion absoluta para estimulantes, pero requiere monitoreo estrecho y considerar formulaciones de liberacion prolongada o no estimulantes. 4) En pacientes bilingues, evaluar en ambos idiomas; la fatiga del cambio de codigo puede simular inatención. 5) Las escalas deben estar validadas para la poblacion objetivo -- usar versiones en espanol estandarizadas. 6) La educacion familiar en contextos latinos debe abordar directamente el estigma ("No es mala crianza"), el miedo a la medicacion y la importancia de la estructura y rutina. | Critical clinical points: 1) Adult ADHD diagnosis requires evidence of symptoms before age 12 -- obtain collateral history. 2) Comorbidity is the rule, not exception (~70% have at least one comorbidity). 3) Comorbid substance use is NOT absolute contraindication for stimulants, but requires close monitoring and consider extended-release formulations or non-stimulants. 4) In bilingual patients, evaluate in both languages; code-switching fatigue can simulate inattention. 5) Scales should be validated for target population -- use standardized Spanish versions. 6) Family education in Latino contexts should directly address stigma ("It is not bad parenting"), fear of medication, and importance of structure and routine.',
    },
    5: {
      level: 5,
      summary:
        'La investigacion de vanguardia en TDAH abarca modelos de redes neuronales dinamicas, trayectorias de neurodesarrollo, fenotipos dimensionales basados en RDoC/HiTOP, abordajes farmacogenomicos, terapeutica digital y neuromodulacion. La conceptualizacion esta evolucionando de un trastorno de la infancia a una condicion cronica del neurodesarrollo a lo largo de la vida con implicaciones significativas para la salud publica. | Cutting-edge ADHD research spans dynamic neural network models, neurodevelopmental trajectories, dimensional RDoC/HiTOP-based phenotypes, pharmacogenomic approaches, digital therapeutics, and neuromodulation. Conceptualization is evolving from a childhood disorder to a chronic lifespan neurodevelopmental condition with significant public health implications.',
      explanation: `**Modelos neurocientificos de frontera | Frontier neuroscience models:**

*Redes neuronales dinamicas | Dynamic neural networks:*
- Modelo de triple red: Red ejecutiva central, RMP, red de saliencia | Triple network model: Central executive network, DMN, salience network
- Falla de la red de saliencia en la conmutacion entre RMP y red de tarea | Salience network failure in switching between DMN and task network
- Variabilidad neural: Fluctuaciones EEG como endofenotipo | Neural variability: EEG fluctuations as endophenotype
- Analisis de series temporales de actividad de redes en fMRI | Time-series analysis of network activity in fMRI

*Trayectorias de neurodesarrollo | Neurodevelopmental trajectories:*
- Retraso de maduracion cortical: 2-5 anos en espesor cortical | Cortical maturation delay: 2-5 years in cortical thickness
- Regiones prefrontales son las ultimas en madurar | Prefrontal regions are the last to mature
- Poda sinaptica atipica en la adolescencia | Atypical synaptic pruning in adolescence
- Conectividad de largo alcance inmadura | Immature long-range connectivity
- Pregunta abierta: El TDAH es un retraso o una desviacion del neurodesarrollo? | Open question: Is ADHD a delay or deviation in neurodevelopment?

*Epigenetica y exposiciones ambientales | Epigenetics and environmental exposures:*
- Tabaquismo prenatal: Interaccion con DAT1 | Prenatal smoking: Interaction with DAT1
- Estres prenatal: Programacion epigenetica del eje HPA | Prenatal stress: Epigenetic programming of HPA axis
- Exposicion a plomo: Asociacion dosis-respuesta | Lead exposure: Dose-response association
- Contaminacion del aire: Investigacion emergente | Air pollution: Emerging research
- Prematuridad y bajo peso al nacer: Factores de riesgo establecidos | Prematurity and low birth weight: Established risk factors

**Marco dimensional/transdiagnostico | Dimensional/transdiagnostic framework:**

*RDoC aplicado al TDAH | RDoC applied to ADHD:*
- Sistemas cognitivos: Atencion, memoria de trabajo | Cognitive systems: Attention, working memory
- Sistemas de valencia positiva: Procesamiento de recompensa, motivacion | Positive valence systems: Reward processing, motivation
- Sistemas de activacion: Regulacion del arousal | Arousal systems: Arousal regulation
- Permite abordaje mas preciso que categorias diagnosticas | Allows more precise approach than diagnostic categories

*HiTOP:*
- TDAH en la dimension de externalizacion desinhibida | ADHD in the disinhibited externalizing dimension
- Continuidad con impulsividad, conducta antisocial, uso de sustancias | Continuity with impulsivity, antisocial behavior, substance use
- Implicaciones para prevencion y tratamiento transdiagnostico | Implications for prevention and transdiagnostic treatment

**Tratamiento de precision y agentes novedosos | Precision treatment and novel agents:**

*Farmacogenomica aplicada | Applied pharmacogenomics:*
- Panel farmacogenomico: CYP2D6, COMT, DAT1, ADRA2A, DRD4 | Pharmacogenomic panel: CYP2D6, COMT, DAT1, ADRA2A, DRD4
- CYP2D6 metabolizadores pobres: Ajustar atomoxetina | CYP2D6 poor metabolizers: Adjust atomoxetine
- Aun en investigacion; no recomendado rutinariamente | Still in research; not routinely recommended
- Potencial para seleccion de medicamento guiada por genotipo | Potential for genotype-guided medication selection

*Agentes novedosos e investigacion | Novel agents and research:*
- Centanafadina (SPN-812): Triple inhibidor de recaptacion (NE, DA, 5-HT) | Centanafadine (SPN-812): Triple reuptake inhibitor (NE, DA, 5-HT)
- Dasotraline: Inhibidor de recaptacion DA/NE de accion prolongada | Dasotraline: Long-acting DA/NE reuptake inhibitor
- Tipepidina: Antagonista GIRK; mecanismo novedoso | Tipepidine: GIRK antagonist; novel mechanism
- Compuestos glutamatergicos: Investigacion temprana | Glutamatergic compounds: Early research

*Terapeutica digital | Digital therapeutics:*
- EndeavorRx (AKL-T01): Primer videojuego aprobado por FDA para TDAH | EndeavorRx (AKL-T01): First FDA-approved video game for ADHD
- Mecanismo: Entrenamiento de atencion dirigida y multitarea | Mechanism: Directed attention and multitasking training
- Apps de organizacion y manejo del tiempo basadas en TCC | CBT-based organization and time management apps
- Realidad virtual para evaluacion y entrenamiento atencional | Virtual reality for attention assessment and training

*Neuromodulacion | Neuromodulation:*
- Estimulacion de nervio trigemino (eTNS): Aprobada por FDA para ninos con TDAH | Trigeminal nerve stimulation (eTNS): FDA-approved for children with ADHD
- EMT sobre CPFdl: Investigacion para inatención y funciones ejecutivas | TMS over dlPFC: Research for inattention and executive functions
- Neurofeedback: Entrenamiento de ritmos SMR/theta; evidencia mixta | Neurofeedback: SMR/theta rhythm training; mixed evidence
- tDCS: Estimulacion prefrontal; datos preliminares | tDCS: Prefrontal stimulation; preliminary data

**TDAH a lo largo de la vida -- implicaciones clinicas avanzadas | ADHD across the lifespan -- advanced clinical implications:**

*TDAH y envejecimiento | ADHD and aging:*
- Investigacion emergente en TDAH en adultos mayores | Emerging research in ADHD in older adults
- Posible factor de riesgo para deterioro cognitivo | Possible risk factor for cognitive decline
- Diferenciacion de TDAH vs deterioro cognitivo leve | Differentiation of ADHD vs mild cognitive impairment
- Impacto acumulado de disfuncion ejecutiva no tratada | Cumulative impact of untreated executive dysfunction

*TDAH y uso de sustancias | ADHD and substance use:*
- Riesgo 2-3x mayor de trastornos por uso de sustancias | 2-3x greater risk of substance use disorders
- El tratamiento temprano del TDAH REDUCE (no aumenta) el riesgo de uso de sustancias | Early ADHD treatment REDUCES (not increases) substance use risk
- Manejo de comorbilidad: Estimulantes de liberacion prolongada o no estimulantes | Comorbidity management: Extended-release stimulants or non-stimulants

**Disparidades e investigacion cultural | Disparities and cultural research:**

- Ninos latinos diagnosticados 69% menos que ninos blancos en EE.UU. | Latino children diagnosed 69% less than white children in US
- Factores: Acceso a servicios, barreras de idioma, estigma cultural, falta de proveedores bilingues | Factors: Service access, language barriers, cultural stigma, lack of bilingual providers
- Adaptaciones culturales de entrenamiento parental (programa "Familias Unidas") | Cultural adaptations of parent training ("Familias Unidas" program)
- Necesidad critica de normas y validacion de instrumentos en poblaciones latinas | Critical need for norms and instrument validation in Latino populations
- El bilinguismo NO causa TDAH ni confunde el diagnostico cuando se evalua apropiadamente | Bilingualism does NOT cause ADHD nor confound diagnosis when properly evaluated
- Investigacion participativa basada en la comunidad para desarrollo de intervenciones | Community-based participatory research for intervention development`,
      keyTerms: [
        {
          term: 'modelo de triple red | triple network model',
          definition:
            'Marco neurocientifico que propone que el TDAH involucra disfuncion en la interaccion entre la red ejecutiva central, la RMP y la red de saliencia | Neuroscience framework proposing ADHD involves dysfunction in the interaction between central executive network, DMN, and salience network',
        },
        {
          term: 'EndeavorRx',
          definition:
            'Primer tratamiento digital (videojuego) aprobado por la FDA para ninos con TDAH de 8-12 anos | First digital treatment (video game) FDA-approved for children with ADHD ages 8-12',
        },
        {
          term: 'eTNS | trigeminal nerve stimulation',
          definition:
            'Estimulacion electrica del nervio trigemino -- terapia de neuromodulacion aprobada por FDA para TDAH pediatrico | Electrical stimulation of trigeminal nerve -- FDA-approved neuromodulation therapy for pediatric ADHD',
        },
        {
          term: 'endofenotipo conductual | behavioral endophenotype',
          definition:
            'Rasgo medible mas cercano a la biologia subyacente que los sintomas clinicos; ejemplos en TDAH: variabilidad de respuesta, aversion al retraso | Measurable trait closer to underlying biology than clinical symptoms; ADHD examples: response variability, delay aversion',
        },
        {
          term: 'centanafadina | centanafadine',
          definition:
            'Triple inhibidor de recaptacion (NE, DA, 5-HT) en investigacion para TDAH con mecanismo novedoso | Triple reuptake inhibitor (NE, DA, 5-HT) in research for ADHD with novel mechanism',
        },
      ],
      clinicalNotes:
        'Fronteras de la practica clinica: 1) El diagnostico de TDAH en adultos requiere evaluacion longitudinal cuidadosa -- el sobrediagnostico y subdiagnostico coexisten. 2) Los biomarcadores de neuroimagen y EEG estan en investigacion pero NO reemplazan la evaluacion clinica. 3) La farmacogenomica puede informar la seleccion de tratamiento en el futuro pero actualmente tiene utilidad limitada. 4) EndeavorRx y eTNS son complementos, no sustitutos del tratamiento estandar. 5) La relacion TDAH-sustancias es bidireccional y requiere tratamiento integrado. 6) Para la practica con poblaciones latinas: Las disparidades en el diagnostico son sistematicas y requieren intervenciones a nivel de politicas de salud; los modelos de "Familias Unidas" y otros programas culturalmente adaptados muestran resultados prometedores; la evaluacion debe considerar el contexto socioeconomico, migratorio y linguistico; y la alianza terapeutica (personalismo) es clave para la adherencia al tratamiento. | Practice frontiers: 1) Adult ADHD diagnosis requires careful longitudinal evaluation -- overdiagnosis and underdiagnosis coexist. 2) Neuroimaging and EEG biomarkers are in research but do NOT replace clinical evaluation. 3) Pharmacogenomics may inform future treatment selection but currently has limited utility. 4) EndeavorRx and eTNS are complements, not substitutes for standard treatment. 5) ADHD-substance relationship is bidirectional and requires integrated treatment. 6) For practice with Latino populations: Diagnostic disparities are systematic and require health policy-level interventions; "Familias Unidas" and other culturally adapted programs show promising results; evaluation must consider socioeconomic, migratory, and linguistic context; and therapeutic alliance (personalismo) is key for treatment adherence.',
    },
  },

  media: [],

  citations: [
    {
      id: 'dsm5tr-tdah',
      type: 'textbook',
      title: 'Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, Text Revision (DSM-5-TR)',
      authors: ['American Psychiatric Association'],
      source: 'American Psychiatric Publishing',
      chapter: 'Neurodevelopmental Disorders',
    },
    {
      id: 'mta-study',
      type: 'journal',
      title: 'The MTA Cooperative Group: A 14-Month Randomized Clinical Trial of Treatment Strategies for ADHD',
      authors: ['MTA Cooperative Group'],
      source: 'Archives of General Psychiatry',
    },
    {
      id: 'aacap-adhd-2023',
      type: 'guideline',
      title: 'Practice Parameter for the Assessment and Treatment of Children and Adolescents with ADHD',
      authors: ['American Academy of Child and Adolescent Psychiatry'],
      source: 'AACAP',
      url: 'https://www.aacap.org/AACAP/Resources_for_Primary_Care/Practice_Parameters_and_Resource_Centers/Practice_Parameters.aspx',
    },
    {
      id: 'nice-adhd-2024',
      type: 'guideline',
      title: 'Attention Deficit Hyperactivity Disorder: Diagnosis and Management (NICE NG87)',
      authors: ['National Institute for Health and Care Excellence'],
      source: 'NICE',
      url: 'https://www.nice.org.uk/guidance/ng87',
    },
    {
      id: 'tdah-latino-disparities',
      type: 'journal',
      title: 'ADHD Diagnosis and Treatment Disparities in Latino Children',
      authors: ['Morgan, P.L.', 'Staff, J.', 'Hillemeier, M.M.'],
      source: 'Journal of Attention Disorders',
    },
    {
      id: 'safren-cbt-adult-adhd',
      type: 'textbook',
      title: 'Cognitive-Behavioral Therapy for Adult ADHD: Targeting Executive Dysfunction',
      authors: ['Safren, S.A.', 'Perlman, C.A.', 'Sprich, S.', 'Otto, M.W.'],
      source: 'Guilford Press',
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
      targetId: 'mental-health-ansiedad-anxiety',
      targetType: 'condition',
      relationship: 'related',
      label: 'Trastornos de Ansiedad | Anxiety Disorders',
    },
    {
      targetId: 'mental-health-trastornos-alimentarios',
      targetType: 'condition',
      relationship: 'related',
      label: 'Trastornos Alimentarios | Eating Disorders',
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
  ],

  tags: {
    systems: ['nervous'],
    topics: ['mental-health', 'psychiatry', 'neurodevelopmental', 'pediatrics', 'bilingual-content'],
    keywords: [
      'TDAH',
      'ADHD',
      'deficit de atencion',
      'attention deficit',
      'hiperactividad',
      'hyperactivity',
      'metilfenidato',
      'methylphenidate',
      'estimulantes',
      'stimulants',
      'funciones ejecutivas',
      'executive functions',
      'salud mental',
      'mental health',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['psychiatry', 'pediatrics'],
    },
  },

  createdAt: '2026-02-05T00:00:00.000Z',
  updatedAt: '2026-02-05T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default tdahAdhdContent;
