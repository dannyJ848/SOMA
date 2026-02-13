/**
 * TEPT / PTSD - Contenido Educativo Bilingue
 *
 * Trastorno de estres postraumatico, atencion informada en trauma.
 * Post-traumatic stress disorder, trauma-informed care.
 *
 * Spanish-first with English translations separated by " | "
 * Culturally sensitive content addressing trauma in Spanish-speaking communities,
 * including immigration-related trauma, community violence, and family separation.
 */

import { EducationalContent } from '../types';

export const teptPtsdContent: EducationalContent = {
  id: 'mental-health-tept-ptsd',
  type: 'condition',
  name: 'Trastorno de Estres Postraumatico | Post-Traumatic Stress Disorder',
  nameEs: 'Trastorno de Estres Postraumatico (TEPT)',
  alternateNames: [
    'TEPT | PTSD',
    'Estres Postraumatico | Post-Traumatic Stress',
    'Trauma Psicologico | Psychological Trauma',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'El TEPT es una condicion que puede desarrollarse despues de vivir o presenciar un evento traumatico. No es una senal de debilidad -- es una reaccion normal del cerebro a una experiencia anormal. Tiene tratamiento y la recuperacion es posible. | PTSD is a condition that can develop after living through or witnessing a traumatic event. It is not a sign of weakness -- it is a normal brain reaction to an abnormal experience. It has treatment and recovery is possible.',
      explanation: `**Que es el TEPT? | What is PTSD?**

El Trastorno de Estres Postraumatico (TEPT) ocurre cuando tu cerebro tiene dificultad para procesar una experiencia traumatica. Despues de algo muy aterrador o danino, tu cerebro puede quedarse "atascado" en modo de alerta, como si el peligro nunca hubiera terminado. | Post-Traumatic Stress Disorder (PTSD) happens when your brain has difficulty processing a traumatic experience. After something very frightening or harmful, your brain can get "stuck" in alert mode, as if the danger never ended.

**Que tipos de eventos pueden causar TEPT? | What types of events can cause PTSD?**

- Violencia fisica o sexual | Physical or sexual violence
- Accidentes graves | Serious accidents
- Desastres naturales (terremotos, huracanes) | Natural disasters (earthquakes, hurricanes)
- Experiencias de guerra o conflicto armado | War or armed conflict experiences
- Separacion familiar forzada | Forced family separation
- Experiencias traumaticas de inmigracion | Traumatic immigration experiences
- Abuso infantil o negligencia | Child abuse or neglect
- La muerte repentina de un ser querido | Sudden death of a loved one
- Ser testigo de violencia | Witnessing violence

**Senales de TEPT | Signs of PTSD:**

- **Recuerdos intrusivos**: Revivir el evento una y otra vez, pesadillas, flashbacks | **Intrusive memories**: Reliving the event over and over, nightmares, flashbacks
- **Evitacion**: No querer hablar del trauma, evitar lugares o personas que lo recuerden | **Avoidance**: Not wanting to talk about the trauma, avoiding places or people that remind you
- **Cambios en el pensamiento y animo**: Sentirse entumecido/a, culpable, desconfiado/a, sin esperanza | **Changes in thinking and mood**: Feeling numb, guilty, distrustful, hopeless
- **Reactividad excesiva**: Sobresaltarse facilmente, problemas para dormir, irritabilidad, estar siempre "en guardia" | **Excessive reactivity**: Startling easily, trouble sleeping, irritability, always being "on guard"

**Lo que debes saber | What you should know:**

- El TEPT NO es tu culpa | PTSD is NOT your fault
- No significa que estes "loco/a" o seas debil | It does not mean you are "crazy" or weak
- Muchas personas que experimentan trauma desarrollan TEPT -- eres normal | Many people who experience trauma develop PTSD -- you are normal
- Con tratamiento, la mayoria de las personas mejoran significativamente | With treatment, most people improve significantly
- Hablar sobre el trauma en un ambiente seguro puede ayudar a sanar | Talking about trauma in a safe environment can help heal

**Un mensaje importante para nuestra comunidad | An important message for our community:**

Muchas personas en nuestra comunidad han vivido experiencias muy dificiles -- violencia en sus paises de origen, el peligro del camino migratorio, separacion de la familia, discriminacion. Estas experiencias dejan marcas en el cerebro y el cuerpo. No tienes que "aguantar" en silencio. El TEPT es una condicion medica y mereces recibir ayuda. | Many people in our community have lived through very difficult experiences -- violence in their home countries, the danger of the migration journey, family separation, discrimination. These experiences leave marks on the brain and body. You do not have to "endure" in silence. PTSD is a medical condition and you deserve to receive help.

**Tratamiento | Treatment:**

- Terapia especializada en trauma (el tratamiento mas efectivo) | Specialized trauma therapy (the most effective treatment)
- Medicamentos para ayudar con los sintomas | Medications to help with symptoms
- Tecnicas de relajacion y mindfulness | Relaxation and mindfulness techniques
- Apoyo grupal y comunitario | Group and community support

**RECURSOS DE CRISIS | CRISIS RESOURCES:**
- **988 Linea de Suicidio y Crisis**: Llama o envia texto al 988 (espanol disponible) | Call or text 988 (Spanish available)
- **Linea de Crisis por texto**: Envia "HOLA" al 741741 | Text "HELLO" to 741741
- **Linea Nacional de Violencia Domestica**: 1-800-799-7233 (espanol disponible) | National Domestic Violence Hotline: 1-800-799-7233 (Spanish available)
- **SAMHSA**: 1-800-662-4357 (espanol disponible)

Si estas en peligro inmediato, llama al 911. | If you are in immediate danger, call 911.`,
      keyTerms: [
        {
          term: 'TEPT | PTSD',
          definition:
            'Una condicion que se desarrolla despues de vivir o presenciar un evento traumatico | A condition that develops after living through or witnessing a traumatic event',
        },
        {
          term: 'trauma',
          definition:
            'Una experiencia profundamente perturbadora que puede afectar como funciona tu cerebro y cuerpo | A deeply disturbing experience that can affect how your brain and body function',
        },
        {
          term: 'flashback',
          definition:
            'Sentir como si estuvieras reviviendo el evento traumatico en el presente | Feeling as if you are reliving the traumatic event in the present',
        },
        {
          term: 'detonante | trigger',
          definition:
            'Algo que te recuerda el trauma y causa una reaccion emocional o fisica fuerte | Something that reminds you of the trauma and causes a strong emotional or physical reaction',
        },
      ],
      analogies: [
        'El TEPT es como si tu cerebro hubiera grabado el evento traumatico y lo reprodujera una y otra vez sin que tu lo quieras -- como un disco rayado. El tratamiento ayuda a "reparar" esa grabacion. | PTSD is like your brain recorded the traumatic event and plays it over and over without you wanting it -- like a scratched record. Treatment helps "repair" that recording.',
        'Despues de un trauma, tu cerebro se queda en "modo de alerta" como si el peligro todavia estuviera presente -- como una alarma de carro que no deja de sonar. El tratamiento ayuda a apagar esa alarma. | After trauma, your brain stays in "alert mode" as if the danger is still present -- like a car alarm that will not stop. Treatment helps turn off that alarm.',
      ],
      examples: [
        'Una madre que emigro de Centroamerica puede tener pesadillas y sobresaltarse con ruidos fuertes, meses despues de llegar a salvo. Esto es TEPT y tiene tratamiento. | A mother who immigrated from Central America may have nightmares and startle at loud noises, months after arriving safely. This is PTSD and it has treatment.',
        'Un veterano puede evitar las multitudes y los fuegos artificiales porque le recuerdan el combate. No esta siendo "dificil" -- esta experimentando sintomas de TEPT. | A veteran may avoid crowds and fireworks because they remind him of combat. He is not being "difficult" -- he is experiencing PTSD symptoms.',
        'Un nino que fue separado de sus padres en la frontera puede tener pesadillas, aferrarse a los padres y tener regresiones en el comportamiento. Estos son sintomas de trauma. | A child who was separated from parents at the border may have nightmares, cling to parents, and have behavioral regressions. These are trauma symptoms.',
      ],
      patientCounselingPoints: [
        'Lo que te paso no fue tu culpa. | What happened to you was not your fault.',
        'Tus reacciones son normales ante una experiencia anormal. | Your reactions are normal in response to an abnormal experience.',
        'La recuperacion es posible con el tratamiento adecuado. | Recovery is possible with the right treatment.',
        'Pedir ayuda es un acto de valentía. | Asking for help is an act of courage.',
      ],
    },
    2: {
      level: 2,
      summary:
        'El TEPT es un trastorno relacionado con el trauma que se desarrolla despues de la exposicion a un evento traumatico. Se caracteriza por cuatro grupos de sintomas: intrusion, evitacion, alteraciones cognitivas/del animo e hiperactivacion. La terapia centrada en el trauma es el tratamiento mas efectivo. | PTSD is a trauma-related disorder that develops after exposure to a traumatic event. It is characterized by four symptom clusters: intrusion, avoidance, cognitive/mood alterations, and hyperarousal. Trauma-focused therapy is the most effective treatment.',
      explanation: `**Epidemiologia | Epidemiology:**

- Prevalencia de por vida: 6-8% en la poblacion general | Lifetime prevalence: 6-8% in general population
- Mas comun en mujeres (10-12% vs 4% hombres) | More common in women (10-12% vs 4% men)
- 60-80% de la poblacion experimenta trauma; 5-10% desarrolla TEPT | 60-80% of population experiences trauma; 5-10% develops PTSD
- Tasas mas altas en refugiados, inmigrantes, veteranos, sobrevivientes de violencia | Higher rates in refugees, immigrants, veterans, violence survivors
- En poblaciones latinas: Estres migratorio, violencia comunitaria, y discriminacion aumentan el riesgo | In Latino populations: Immigration stress, community violence, and discrimination increase risk

**Criterios de exposicion al trauma (Criterio A) | Trauma exposure criteria (Criterion A):**

Exposicion a muerte real o amenaza de muerte, lesion grave o violencia sexual mediante: | Exposure to actual or threatened death, serious injury, or sexual violence through:
1. Experiencia directa | Direct experience
2. Ser testigo directo | Direct witnessing
3. Enterarse de que le ocurrio a un familiar o amigo cercano | Learning it happened to a close family member or friend
4. Exposicion repetida a detalles aversivos del evento (profesionales) | Repeated exposure to aversive details of events (professionals)

**Cuatro grupos de sintomas | Four symptom clusters:**

**1. Intrusion (Criterio B) | Intrusion (Criterion B):**
- Recuerdos intrusivos, involuntarios y recurrentes | Intrusive, involuntary, recurrent memories
- Suenos angustiantes recurrentes | Recurrent distressing dreams
- Reacciones disociativas (flashbacks) | Dissociative reactions (flashbacks)
- Malestar psicologico intenso ante claves internas/externas | Intense psychological distress at internal/external cues
- Reacciones fisiologicas marcadas | Marked physiological reactions

**2. Evitacion (Criterio C) | Avoidance (Criterion C):**
- Evitacion de recuerdos, pensamientos, sentimientos asociados | Avoidance of associated memories, thoughts, feelings
- Evitacion de recordatorios externos (personas, lugares, situaciones) | Avoidance of external reminders (people, places, situations)

**3. Alteraciones cognitivas y del animo (Criterio D) | Cognitive and mood alterations (Criterion D):**
- Incapacidad de recordar aspectos importantes del trauma | Inability to remember important aspects of trauma
- Creencias negativas persistentes sobre uno mismo, otros o el mundo | Persistent negative beliefs about self, others, or the world
- Culpa distorsionada | Distorted blame
- Estado emocional negativo persistente | Persistent negative emotional state
- Disminucion del interes en actividades | Diminished interest in activities
- Sentimiento de desapego | Feeling of detachment
- Incapacidad de experimentar emociones positivas | Inability to experience positive emotions

**4. Hiperactivacion (Criterio E) | Hyperarousal (Criterion E):**
- Comportamiento irritable o arrebatos de ira | Irritable behavior or anger outbursts
- Comportamiento imprudente o autodestructivo | Reckless or self-destructive behavior
- Hipervigilancia | Hypervigilance
- Respuesta de sobresalto exagerada | Exaggerated startle response
- Problemas de concentracion | Concentration problems
- Alteraciones del sueno | Sleep disturbance

**Duracion y subtipos | Duration and subtypes:**
- Duracion: Mas de 1 mes (Criterio F) | Duration: More than 1 month (Criterion F)
- Con sintomas disociativos: Despersonalizacion y/o desrealizacion | With dissociative symptoms: Depersonalization and/or derealization
- Con expresion retardada: Criterios no se cumplen hasta 6+ meses despues | With delayed expression: Criteria not met until 6+ months after

**Trastorno de Estres Agudo (TEA) | Acute Stress Disorder (ASD):**
- Sintomas similares, 3 dias a 1 mes post-trauma | Similar symptoms, 3 days to 1 month post-trauma
- Predictor de TEPT pero no todos desarrollan TEPT | Predictor of PTSD but not all develop PTSD

**Tratamientos basados en evidencia | Evidence-based treatments:**

*Terapias de primera linea (centradas en el trauma) | First-line therapies (trauma-focused):*
- Terapia de Procesamiento Cognitivo (TPC) | Cognitive Processing Therapy (CPT)
- Exposicion Prolongada (EP) | Prolonged Exposure (PE)
- EMDR (Desensibilizacion y Reprocesamiento por Movimientos Oculares) | EMDR (Eye Movement Desensitization and Reprocessing)
- TCC centrada en el trauma | Trauma-focused CBT

*Farmacoterapia | Pharmacotherapy:*
- ISRS: Sertralina y paroxetina (aprobados por FDA) | SSRIs: Sertraline and paroxetine (FDA-approved)
- IRSN: Venlafaxina | SNRI: Venlafaxine
- Prazosina: Para pesadillas (evidencia mixta) | Prazosin: For nightmares (mixed evidence)
- Nota: La farmacoterapia es segunda linea despues de la psicoterapia | Note: Pharmacotherapy is second-line after psychotherapy

*Atencion informada en trauma | Trauma-informed care:*
- Principios: Seguridad, confianza, empoderamiento, colaboracion, contexto cultural | Principles: Safety, trust, empowerment, collaboration, cultural context
- Evitar retraumatizacion | Avoid retraumatization
- Reconocer la universalidad del impacto del trauma | Recognize universality of trauma impact`,
      keyTerms: [
        {
          term: 'flashback',
          definition:
            'Reaccion disociativa donde la persona siente o actua como si el evento traumatico estuviera ocurriendo de nuevo | Dissociative reaction where the person feels or acts as if the traumatic event is happening again',
        },
        {
          term: 'hipervigilancia | hypervigilance',
          definition:
            'Estado de alerta constante y excesiva, buscando peligros potenciales en el entorno | State of constant, excessive alertness, scanning for potential dangers in the environment',
        },
        {
          term: 'TPC | CPT',
          definition:
            'Terapia de Procesamiento Cognitivo -- terapia estructurada que ayuda a cambiar pensamientos problematicos sobre el trauma | Cognitive Processing Therapy -- structured therapy that helps change problematic thoughts about trauma',
        },
        {
          term: 'EMDR',
          definition:
            'Desensibilizacion y Reprocesamiento por Movimientos Oculares -- terapia que usa movimientos oculares para ayudar al cerebro a procesar memorias traumaticas | Eye Movement Desensitization and Reprocessing -- therapy using eye movements to help the brain process traumatic memories',
        },
        {
          term: 'atencion informada en trauma | trauma-informed care',
          definition:
            'Enfoque de atencion que reconoce la prevalencia del trauma y busca evitar la retraumatizacion | Care approach that recognizes trauma prevalence and seeks to avoid retraumatization',
        },
      ],
      analogies: [
        'En el TEPT, el cerebro almacena el recuerdo traumatico como si estuviera "sin archivar" -- sigue saliendo a la superficie de manera desorganizada. Las terapias de trauma ayudan a "archivar" ese recuerdo correctamente. | In PTSD, the brain stores the traumatic memory as if it is "unfiled" -- it keeps surfacing in a disorganized way. Trauma therapies help "file" that memory correctly.',
        'La hipervigilancia es como un guardia de seguridad que nunca deja su puesto, incluso cuando no hay amenaza. Esto agota el cuerpo y la mente. | Hypervigilance is like a security guard who never leaves their post, even when there is no threat. This exhausts the body and mind.',
      ],
      examples: [
        'Un trabajador agricola que sobrevivio un asalto violento puede evitar el area donde ocurrio, tener problemas para dormir y sentirse constantemente en guardia. Con terapia centrada en el trauma, puede procesar la experiencia y recuperar su calidad de vida. | A farm worker who survived a violent assault may avoid the area where it happened, have trouble sleeping, and feel constantly on guard. With trauma-focused therapy, they can process the experience and regain quality of life.',
      ],
    },
    3: {
      level: 3,
      summary:
        'El TEPT involucra fallo en la extincion del miedo, consolidacion excesiva de la memoria traumatica, disfuncion del eje HPA y alteraciones en circuitos amigdala-CPFm-hipocampo. Los tratamientos de primera linea son terapias centradas en el trauma (TPC, EP, EMDR) con evidencia superior a la farmacoterapia sola. | PTSD involves failure in fear extinction, excessive traumatic memory consolidation, HPA axis dysfunction, and amygdala-mPFC-hippocampus circuit alterations. First-line treatments are trauma-focused therapies (CPT, PE, EMDR) with evidence superior to pharmacotherapy alone.',
      explanation: `**Criterios diagnosticos completos DSM-5-TR | Complete DSM-5-TR diagnostic criteria:**

Criterio A: Exposicion a trauma (experiencia directa, testimonio, enterarse, exposicion profesional) | Criterion A: Trauma exposure (direct experience, witnessing, learning about, professional exposure)

Criterio B: Intrusion (1+ sintomas) -- recuerdos intrusivos, suenos angustiantes, flashbacks disociativos, malestar ante claves, reactividad fisiologica | Criterion B: Intrusion (1+ symptoms) -- intrusive memories, distressing dreams, dissociative flashbacks, distress at cues, physiological reactivity

Criterio C: Evitacion (1+ sintomas) -- pensamientos/sentimientos internos, recordatorios externos | Criterion C: Avoidance (1+ symptoms) -- internal thoughts/feelings, external reminders

Criterio D: Cogniciones/animo negativos (2+ sintomas) -- amnesia, creencias negativas, culpa distorsionada, estado emocional negativo, perdida de interes, desapego, restriccion afectiva | Criterion D: Negative cognitions/mood (2+ symptoms) -- amnesia, negative beliefs, distorted blame, negative emotional state, loss of interest, detachment, affect restriction

Criterio E: Hiperactivacion (2+ sintomas) -- irritabilidad, imprudencia, hipervigilancia, sobresalto exagerado, concentracion, sueno | Criterion E: Hyperarousal (2+ symptoms) -- irritability, recklessness, hypervigilance, exaggerated startle, concentration, sleep

Criterio F: Duracion > 1 mes | Criterion F: Duration > 1 month
Criterio G: Deterioro funcional clinicamente significativo | Criterion G: Clinically significant functional impairment
Criterio H: No atribuible a sustancias u otra condicion medica | Criterion H: Not attributable to substances or another medical condition

Especificadores: Con sintomas disociativos, con expresion retardada | Specifiers: With dissociative symptoms, with delayed expression

**Neurobiologia del TEPT | PTSD neurobiology:**

*Circuito del miedo alterado | Altered fear circuit:*
- Amigdala hiperactiva: Respuestas de miedo exageradas | Hyperactive amygdala: Exaggerated fear responses
- CPFvm hipoactiva: Fallo en la regulacion descendente del miedo | Hypoactive vmPFC: Failure in top-down fear regulation
- Hipocampo reducido en volumen: Fallo en la contextualizacion del miedo | Reduced hippocampus volume: Failure in fear contextualization
- Resultado: Generalizacion del miedo, incapacidad de distinguir seguro vs peligroso | Result: Fear generalization, inability to distinguish safe vs dangerous

*Fallo en la extincion del miedo | Fear extinction failure:*
- Consolidacion excesiva de la memoria traumatica | Excessive traumatic memory consolidation
- Reconsolidacion alterada (la memoria se refuerza con cada reactivacion) | Altered reconsolidation (memory strengthens with each reactivation)
- Extincion deficiente (no aprende que el peligro ya paso) | Deficient extinction (does not learn that danger has passed)
- Base neurobiologica de la terapia de exposicion | Neurobiological basis for exposure therapy

*Desregulacion del eje HPA | HPA axis dysregulation:*
- Paradoja del cortisol: Cortisol basal bajo en muchos pacientes con TEPT | Cortisol paradox: Low basal cortisol in many PTSD patients
- Sensibilidad aumentada del receptor de glucocorticoides | Increased glucocorticoid receptor sensitivity
- CRH elevada | Elevated CRH
- Retroalimentacion negativa excesiva (hipersuprension con dexametasona) | Excessive negative feedback (hypersuppression with dexamethasone)
- Contraste con depresion (cortisol alto, suprresion deficiente) | Contrast with depression (high cortisol, deficient suppression)

*Sistema noradrenergico | Noradrenergic system:*
- Hiperactividad del locus coeruleus | Locus coeruleus hyperactivity
- Norepinefrina elevada | Elevated norepinephrine
- Contribuye a hiperactivacion, pesadillas, flashbacks | Contributes to hyperarousal, nightmares, flashbacks
- Base racional para prazosina (bloqueador alfa-1) | Rationale for prazosin (alpha-1 blocker)

*Cambios epigeneticos | Epigenetic changes:*
- Metilacion del gen NR3C1 (receptor de glucocorticoides) | NR3C1 gene methylation (glucocorticoid receptor)
- Metilacion de FKBP5 | FKBP5 methylation
- Transmision intergeneracional de efectos del trauma | Intergenerational transmission of trauma effects
- Relevante para comunidades con trauma historico | Relevant for communities with historical trauma

**Tratamientos basados en evidencia detallados | Detailed evidence-based treatments:**

*Terapia de Procesamiento Cognitivo (TPC) | Cognitive Processing Therapy (CPT):*
- 12 sesiones estructuradas | 12 structured sessions
- Identifica y modifica "puntos atascados" (stuck points) | Identifies and modifies "stuck points"
- Temas: Seguridad, confianza, poder/control, estima, intimidad | Themes: Safety, trust, power/control, esteem, intimacy
- Tamano del efecto grande (d = 1.0-1.5) | Large effect size (d = 1.0-1.5)

*Exposicion Prolongada (EP) | Prolonged Exposure (PE):*
- 8-15 sesiones | 8-15 sessions
- Exposicion imaginal (narrar el trauma) | Imaginal exposure (narrating the trauma)
- Exposicion in vivo (enfrentar situaciones evitadas) | In vivo exposure (facing avoided situations)
- Procesamiento emocional del recuerdo traumatico | Emotional processing of traumatic memory
- Tamano del efecto grande (d = 1.0-1.5) | Large effect size (d = 1.0-1.5)

*EMDR:*
- 8 fases de tratamiento | 8 treatment phases
- Estimulacion bilateral (movimientos oculares, tapping) | Bilateral stimulation (eye movements, tapping)
- Procesamiento adaptativo de la informacion | Adaptive information processing
- Eficacia comparable a TPC y EP | Efficacy comparable to CPT and PE

*Farmacoterapia | Pharmacotherapy:*
- Sertralina (50-200 mg): Aprobada por FDA para TEPT | Sertraline (50-200 mg): FDA-approved for PTSD
- Paroxetina (20-60 mg): Aprobada por FDA para TEPT | Paroxetine (20-60 mg): FDA-approved for PTSD
- Venlafaxina XR: Evidencia fuerte pero no aprobada por FDA | Venlafaxine XR: Strong evidence but not FDA-approved
- Prazosina (2-15 mg nocturna): Para pesadillas y trastornos del sueno | Prazosin (2-15 mg at bedtime): For nightmares and sleep disturbance
- NOTA: Benzodiazepinas CONTRAINDICADAS en TEPT | NOTE: Benzodiazepines CONTRAINDICATED in PTSD

**Atencion informada en trauma -- principios clinicos | Trauma-informed care -- clinical principles:**

1. Seguridad fisica y emocional | Physical and emotional safety
2. Confiabilidad y transparencia | Trustworthiness and transparency
3. Apoyo entre pares | Peer support
4. Colaboracion y mutualidad | Collaboration and mutuality
5. Empoderamiento, voz y eleccion | Empowerment, voice, and choice
6. Sensibilidad cultural, historica y de genero | Cultural, historical, and gender sensitivity`,
      keyTerms: [
        {
          term: 'reconsolidacion de la memoria | memory reconsolidation',
          definition:
            'Proceso por el cual una memoria reactivada se vuelve inestable y puede ser modificada antes de almacenarse nuevamente | Process by which a reactivated memory becomes unstable and can be modified before being stored again',
        },
        {
          term: 'paradoja del cortisol | cortisol paradox',
          definition:
            'El hallazgo de que el TEPT a menudo presenta cortisol basal bajo, en contraste con el cortisol elevado en depresion | The finding that PTSD often presents with low basal cortisol, in contrast to elevated cortisol in depression',
        },
        {
          term: 'exposicion prolongada | prolonged exposure',
          definition:
            'Terapia basada en evidencia que utiliza la narracion repetida del trauma y la exposicion a situaciones evitadas para reducir el miedo | Evidence-based therapy using repeated trauma narration and exposure to avoided situations to reduce fear',
        },
        {
          term: 'puntos atascados | stuck points',
          definition:
            'Creencias problematicas sobre el trauma que impiden la recuperacion; objetivo central de la TPC | Problematic beliefs about trauma that impede recovery; central target of CPT',
        },
        {
          term: 'transmision intergeneracional | intergenerational transmission',
          definition:
            'El paso de efectos del trauma de una generacion a la siguiente a traves de mecanismos epigeneticos y conductuales | The passing of trauma effects from one generation to the next through epigenetic and behavioral mechanisms',
        },
      ],
      clinicalNotes:
        'Las benzodiazepinas estan CONTRAINDICADAS en TEPT -- interfieren con la extincion del miedo y la consolidacion de la memoria. La psicoterapia centrada en el trauma debe ser primera linea. Evaluar comorbilidades frecuentes: depresion, uso de sustancias, TBI. En poblaciones latinas, considerar trauma colectivo e historico (violencia politica, desplazamiento), trauma migratorio (separacion familiar, detencion), y barreras legales (estatus migratorio) que pueden impedir la busqueda de ayuda. El uso de interpretes capacitados en trauma es esencial cuando se trabaja con pacientes de habla hispana monolingues. | Benzodiazepines are CONTRAINDICATED in PTSD -- they interfere with fear extinction and memory consolidation. Trauma-focused psychotherapy should be first-line. Assess frequent comorbidities: depression, substance use, TBI. In Latino populations, consider collective and historical trauma (political violence, displacement), migration trauma (family separation, detention), and legal barriers (immigration status) that may prevent help-seeking. Use of trauma-trained interpreters is essential when working with monolingual Spanish-speaking patients.',
    },
    4: {
      level: 4,
      summary:
        'El TEPT involucra disrupciones complejas en el procesamiento de la memoria, circuitos del miedo y seguridad, el eje HPA, y sistemas neuroinflamatorios. Mecanismos de tratamiento incluyen extincion del miedo, reconsolidacion de la memoria, procesamiento emocional y reestructuracion cognitiva. La fenotipificacion avanzada, incluyendo el subtipo disociativo, guia la seleccion terapeutica. | PTSD involves complex disruptions in memory processing, fear and safety circuits, the HPA axis, and neuroinflammatory systems. Treatment mechanisms include fear extinction, memory reconsolidation, emotional processing, and cognitive restructuring. Advanced phenotyping, including the dissociative subtype, guides therapeutic selection.',
      explanation: `**Modelos neurobiologicos avanzados | Advanced neurobiological models:**

*Modelo de procesamiento dual de la memoria | Dual representation memory model:*
- Memorias traumaticas: Codificadas por la amigdala (emocionales, sensoriales, fragmentadas) | Traumatic memories: Encoded by amygdala (emotional, sensory, fragmented)
- Memorias contextuales: Codificadas por hipocampo (contextualizadas, narrativas) | Contextual memories: Encoded by hippocampus (contextualized, narrative)
- En TEPT: Memorias amigdalares dominan, memorias hipocampales deficientes | In PTSD: Amygdalar memories dominate, hippocampal memories deficient
- Terapia de exposicion: Activa ambos sistemas para integrar la memoria | Exposure therapy: Activates both systems to integrate memory

*Modelo de circuitos de seguridad y amenaza | Safety and threat circuit model:*
- Circuito de amenaza: Amigdala -> PAG -> respuestas defensivas | Threat circuit: Amygdala -> PAG -> defensive responses
- Circuito de seguridad: CPFvm -> amigdala (inhibicion) | Safety circuit: vmPFC -> amygdala (inhibition)
- BNST (nucleo del lecho de la estria terminal): Ansiedad sostenida | BNST (bed nucleus of stria terminalis): Sustained anxiety
- Extincion = fortalecimiento del circuito de seguridad | Extinction = strengthening of safety circuit

*Neuroinflamacion y TEPT | Neuroinflammation and PTSD:*
- Citoquinas proinflamatorias elevadas (IL-6, TNF-alfa, IL-1beta) | Elevated pro-inflammatory cytokines (IL-6, TNF-alpha, IL-1beta)
- PCR elevada | Elevated CRP
- Activacion microglial en amigdala e hipocampo | Microglial activation in amygdala and hippocampus
- Contribucion al dano neuronal y reduccion hipocampal | Contribution to neuronal damage and hippocampal reduction
- Potencial objetivo terapeutico | Potential therapeutic target

*Epigenetica y transmision intergeneracional | Epigenetics and intergenerational transmission:*
- Metilacion de NR3C1: Altera sensibilidad al estres en descendencia | NR3C1 methylation: Alters stress sensitivity in offspring
- FKBP5: Demetilacion alelo-especifica aumenta riesgo de TEPT | FKBP5: Allele-specific demethylation increases PTSD risk
- Hijos de sobrevivientes de trauma muestran cortisol alterado | Children of trauma survivors show altered cortisol
- Relevancia para comunidades con trauma historico y migratorio | Relevance for communities with historical and migration trauma

**Fenotipificacion clinica avanzada | Advanced clinical phenotyping:**

*Subtipo disociativo:*
- Despersonalizacion: Sentirse separado de si mismo/a | Depersonalization: Feeling detached from self
- Desrealizacion: El mundo se siente irreal | Derealization: World feels unreal
- Neurobiologia: Hipermodulacion prefrontal (opuesto a TEPT clasico) | Neurobiology: Prefrontal hypermodulation (opposite to classic PTSD)
- Amigdala suprimida (no hiperactiva) | Amygdala suppressed (not hyperactive)
- Implicaciones: Puede necesitar trabajo de estabilizacion antes de exposicion | Implications: May need stabilization work before exposure

*TEPT complejo (propuesto en CIE-11) | Complex PTSD (proposed in ICD-11):*
- Sintomas TEPT clasicos + perturbaciones en auto-organizacion | Classic PTSD symptoms + disturbances in self-organization
- Desregulacion afectiva | Affective dysregulation
- Autoconcepto negativo | Negative self-concept
- Perturbaciones en las relaciones | Disturbances in relationships
- Asociado con trauma interpersonal cronico, repetido | Associated with chronic, repeated interpersonal trauma

**Mecanismos de tratamiento avanzados | Advanced treatment mechanisms:**

*Mecanismo de EP | PE mechanism:*
- Teoria del procesamiento emocional (Foa & Kozak) | Emotional processing theory (Foa & Kozak)
- Activar la estructura de miedo | Activate fear structure
- Incorporar informacion correctiva | Incorporate corrective information
- Habituacion entre sesiones e intrasesion | Between-session and within-session habituation
- Actualizacion: Modelo de aprendizaje inhibitorio de Craske | Update: Craske inhibitory learning model

*Mecanismo de TPC | CPT mechanism:*
- Teoria de esquemas socio-cognitiva | Socio-cognitive schema theory
- Modificar creencias de asimilacion y sobreaccommodacion | Modify assimilation and overaccommodation beliefs
- Desafiar puntos atascados sobre seguridad, confianza, poder, estima, intimidad | Challenge stuck points about safety, trust, power, esteem, intimacy
- Hojas de desafio de creencias | Challenging beliefs worksheets

*Mecanismo de EMDR | EMDR mechanism:*
- Modelo de procesamiento adaptativo de la informacion (PAI) | Adaptive Information Processing (AIP) model
- Estimulacion bilateral facilita la reconsolidacion | Bilateral stimulation facilitates reconsolidation
- Accede a redes de memoria mal almacenadas | Accesses maladaptively stored memory networks
- Debate activo: Mecanismo especifico vs exposicion con distraccion | Active debate: Specific mechanism vs exposure with distraction

**Farmacologia avanzada | Advanced pharmacology:**

*Agentes establecidos | Established agents:*
- ISRS: Sertralina, paroxetina (aprobadas FDA); fluoxetina (evidencia) | SSRIs: Sertraline, paroxetine (FDA-approved); fluoxetine (evidence)
- IRSN: Venlafaxina XR (guias VA/DoD primera linea) | SNRIs: Venlafaxine XR (VA/DoD guidelines first-line)
- Prazosina: Bloqueador alfa-1 para pesadillas; resultados mixtos en estudios recientes | Prazosin: Alpha-1 blocker for nightmares; mixed results in recent studies

*Potenciadores de la psicoterapia | Psychotherapy enhancers:*
- MDMA: Potenciador de la extincion del miedo; ensayos fase 3 completados para TEPT | MDMA: Fear extinction enhancer; phase 3 trials completed for PTSD
- Psilocibina: Investigacion emergente en TEPT | Psilocybin: Emerging research in PTSD
- DCS (D-cicloserina): Resultados mixtos como potenciador de exposicion | DCS (D-cycloserine): Mixed results as exposure enhancer

*Agentes en investigacion | Investigational agents:*
- Nabilona: Agonista cannabinoide para pesadillas | Nabilone: Cannabinoid agonist for nightmares
- Losartan: Antagonista de angiotensina II; potencia extincion del miedo | Losartan: Angiotensin II antagonist; enhances fear extinction
- Ketamina: Datos preliminares para TEPT | Ketamine: Preliminary data for PTSD

**Poblaciones especiales y consideraciones culturales | Special populations and cultural considerations:**

*Ninos y adolescentes | Children and adolescents:*
- TF-CBT (TCC centrada en el trauma): Estandar de oro | TF-CBT (Trauma-Focused CBT): Gold standard
- Inclusion del cuidador en el tratamiento | Caregiver inclusion in treatment
- Ninos separados de familias en contexto migratorio | Children separated from families in immigration context

*Refugiados e inmigrantes | Refugees and immigrants:*
- Trauma acumulativo: Pais de origen + transito + pais receptor | Cumulative trauma: Country of origin + transit + host country
- Barreras: Idioma, cultura, estatus legal, desconfianza en autoridades | Barriers: Language, culture, legal status, distrust of authorities
- Terapia Narrativa de Exposicion (NET): Adaptada para trauma multiple | Narrative Exposure Therapy (NET): Adapted for multiple trauma
- Modelos comunitarios y de promotores de salud | Community and promotores de salud models`,
      keyTerms: [
        {
          term: 'TEPT complejo | complex PTSD',
          definition:
            'Propuesto en CIE-11; TEPT clasico mas perturbaciones en auto-organizacion (desregulacion emocional, autoconcepto negativo, problemas relacionales) | Proposed in ICD-11; classic PTSD plus disturbances in self-organization (emotional dysregulation, negative self-concept, relational problems)',
        },
        {
          term: 'procesamiento emocional | emotional processing',
          definition:
            'Teoria de Foa: Activacion de la estructura del miedo e incorporacion de informacion correctiva incompatible | Foa theory: Activation of fear structure and incorporation of incompatible corrective information',
        },
        {
          term: 'aprendizaje inhibitorio | inhibitory learning',
          definition:
            'Modelo actualizado de extincion: El aprendizaje original del miedo no se borra sino que se inhibe por nuevo aprendizaje de seguridad | Updated extinction model: Original fear learning is not erased but inhibited by new safety learning',
        },
        {
          term: 'NET | Narrative Exposure Therapy',
          definition:
            'Terapia Narrativa de Exposicion -- tratamiento adaptado para personas con multiples traumas, creando una narrativa cronologica de vida | Narrative Exposure Therapy -- treatment adapted for people with multiple traumas, creating a chronological life narrative',
        },
        {
          term: 'BNST',
          definition:
            'Nucleo del lecho de la estria terminal -- estructura que media la ansiedad sostenida y la respuesta a amenazas difusas | Bed nucleus of the stria terminalis -- structure mediating sustained anxiety and response to diffuse threats',
        },
      ],
      clinicalNotes:
        'La guia VA/DoD 2023 recomienda fuertemente EP, TPC y EMDR como primera linea. Los ISRS/IRSN son segunda linea cuando la psicoterapia no es accesible o el paciente la rechaza. El subtipo disociativo requiere fase de estabilizacion antes de exposicion directa. TEPT complejo (CIE-11) puede necesitar un enfoque secuencial: estabilizacion -> procesamiento de trauma -> reintegracion. En pacientes hispanos, explorar sindromes culturales (susto como posible reaccion post-traumatica), considerar el rol de la fe y la comunidad como recursos de resiliencia, y abordar barreras estructurales (estatus migratorio, miedo a deportacion) que pueden impedir la busqueda de tratamiento. | VA/DoD 2023 guideline strongly recommends PE, CPT, and EMDR as first-line. SSRIs/SNRIs are second-line when psychotherapy is not accessible or patient declines. Dissociative subtype requires stabilization phase before direct exposure. Complex PTSD (ICD-11) may need sequential approach: stabilization -> trauma processing -> reintegration. In Hispanic patients, explore cultural syndromes (susto as possible post-traumatic reaction), consider the role of faith and community as resilience resources, and address structural barriers (immigration status, fear of deportation) that may prevent treatment seeking.',
    },
    5: {
      level: 5,
      summary:
        'La investigacion de vanguardia en TEPT se enfoca en mecanismos de reconsolidacion de la memoria, potenciadores farmacologicos (MDMA-AT, psilocibina), biomarcadores predictivos, neuromodulacion de precision y modelos computacionales del procesamiento del miedo. La integracion de la neurociencia del trauma con los determinantes sociales de la salud es esencial para un enfoque verdaderamente basado en evidencia. | Cutting-edge PTSD research focuses on memory reconsolidation mechanisms, pharmacological enhancers (MDMA-AT, psilocybin), predictive biomarkers, precision neuromodulation, and computational models of fear processing. Integration of trauma neuroscience with social determinants of health is essential for a truly evidence-based approach.',
      explanation: `**Reconsolidacion de la memoria como objetivo terapeutico | Memory reconsolidation as therapeutic target:**

*Ventana de reconsolidacion | Reconsolidation window:*
- Cuando una memoria es reactivada, se vuelve labil por ~6 horas | When a memory is reactivated, it becomes labile for ~6 hours
- Durante esta ventana, puede ser modificada o debilitada | During this window, it can be modified or weakened
- Agentes que interfieren con la reconsolidacion podrian "actualizar" la memoria traumatica | Agents that interfere with reconsolidation could "update" traumatic memory
- Propranolol: Bloquea la reconsolidacion emocional (resultados mixtos en humanos) | Propranolol: Blocks emotional reconsolidation (mixed results in humans)
- Mifepristona: Antagonista de glucocorticoides; investigacion emergente | Mifepristone: Glucocorticoid antagonist; emerging research

*Prediccion de limite de la reconsolidacion | Prediction error reconsolidation boundary:*
- La reconsolidacion se activa cuando hay un "error de prediccion" (algo inesperado) | Reconsolidation is triggered when there is a "prediction error" (something unexpected)
- Recordatorios simples sin error no desestabilizan la memoria | Simple reminders without error do not destabilize memory
- Implicaciones para optimizacion de la terapia de exposicion | Implications for exposure therapy optimization

**MDMA-Psicoterapia Asistida (MDMA-AT) | MDMA-Assisted Psychotherapy (MDMA-AT):**

- Fase 3 completada: Tamanos del efecto grandes para TEPT severo y resistente | Phase 3 completed: Large effect sizes for severe and resistant PTSD
- Mecanismo propuesto: | Proposed mechanism:
  - Liberacion de serotonina, dopamina, norepinefrina, oxitocina | Release of serotonin, dopamine, norepinephrine, oxytocin
  - Reduccion de la actividad de la amigdala | Reduction of amygdala activity
  - Aumento de conectividad amigdala-CPF | Increased amygdala-PFC connectivity
  - Ventana terapeutica para procesar material traumatico sin abrumacion | Therapeutic window to process traumatic material without overwhelm
- Protocolo: 3 sesiones de MDMA + psicoterapia integrativa (8h cada una) | Protocol: 3 MDMA sessions + integrative psychotherapy (8h each)
- Consideraciones regulatorias y eticas en curso | Ongoing regulatory and ethical considerations

**Biomarcadores y prediccion | Biomarkers and prediction:**

*Biomarcadores biologicos | Biological biomarkers:*
- Cortisol salival: Bajo cortisol post-trauma predice TEPT | Salivary cortisol: Low cortisol post-trauma predicts PTSD
- PCR e IL-6: Inflamacion cronica como marcador de cronicidad | CRP and IL-6: Chronic inflammation as chronicity marker
- FKBP5 SNPs: Interaccion gen-ambiente para riesgo | FKBP5 SNPs: Gene-environment interaction for risk
- Acido graso de nivel periferico (fosfolipidos) | Peripheral fatty acid levels (phospholipids)

*Neuroimagen predictiva | Predictive neuroimaging:*
- Actividad amigdalar pre-tratamiento predice respuesta a exposicion | Pre-treatment amygdalar activity predicts exposure response
- Conectividad CPFvm-amigdala predice respuesta a TPC | vmPFC-amygdala connectivity predicts CPT response
- Grosor cortical prefrontal como marcador de resiliencia | Prefrontal cortical thickness as resilience marker
- Machine learning aplicado a perfiles multimodales | Machine learning applied to multimodal profiles

**Neuromodulacion de precision | Precision neuromodulation:**

*EMT para TEPT | TMS for PTSD:*
- CPFdl derecha: Reduce hiperactivacion | Right dlPFC: Reduces hyperarousal
- CPFdm: Objetivo para desregulacion emocional | dmPFC: Target for emotional dysregulation
- Theta burst combinada con exposicion: Potenciacion de la extincion | Theta burst combined with exposure: Extinction enhancement
- fMRI-guiada para precision de objetivo | fMRI-guided for target precision

*Neurofeedback:*
- Regulacion de amigdala por fMRI en tiempo real | Real-time fMRI amygdala regulation
- Neurofeedback EEG: Protocolo alfa-theta | EEG neurofeedback: Alpha-theta protocol
- Regulacion descendente de la actividad de la amigdala | Downregulation of amygdala activity

*Estimulacion del nervio vago (ENV) | Vagus Nerve Stimulation (VNS):*
- Modula eje HPA y sistema noradrenergico | Modulates HPA axis and noradrenergic system
- Potencia extincion del miedo en modelos animales | Enhances fear extinction in animal models
- Investigacion para emparejamiento con terapia de exposicion | Research for pairing with exposure therapy

**Modelos computacionales | Computational models:**

- Aprendizaje por refuerzo: Modelar la actualizacion de creencias sobre amenaza | Reinforcement learning: Modeling threat belief updating
- Modelos bayesianos: El TEPT como fallo en la actualizacion de las priors de amenaza | Bayesian models: PTSD as failure to update threat priors
- Drift-diffusion: Sesgo en la toma de decisiones bajo amenaza | Drift-diffusion: Bias in decision-making under threat
- Personalizar la exposicion basada en parametros computacionales individuales | Personalize exposure based on individual computational parameters

**Intervencion temprana y prevencion | Early intervention and prevention:**

- Primeros auxilios psicologicos (PFA): Apoyo inmediato post-trauma | Psychological First Aid (PFA): Immediate post-trauma support
- Debriefing psicologico formal NO recomendado (puede empeorar) | Formal psychological debriefing NOT recommended (may worsen)
- Intervencion temprana con TCC breve centrada en el trauma | Early intervention with brief trauma-focused CBT
- Hidrocortisona peritraumatica: Puede prevenir TEPT (evidencia preliminar) | Peritraumatic hydrocortisone: May prevent PTSD (preliminary evidence)
- Propranolol peritraumatico: Resultados inconsistentes | Peritraumatic propranolol: Inconsistent results

**Disparidades, justicia social y TEPT | Disparities, social justice, and PTSD:**

- El trauma no se distribuye equitativamente -- comunidades marginalizadas tienen mayor exposicion | Trauma is not distributed equitably -- marginalized communities have greater exposure
- Latinos en EE.UU.: Mayor exposicion a trauma comunitario, menor acceso a tratamiento basado en evidencia | Latinos in US: Greater exposure to community trauma, less access to evidence-based treatment
- La investigacion de TEPT histolricamente se ha centrado en veteranos blancos; necesidad critica de diversificacion | PTSD research has historically centered on white veterans; critical need for diversification
- Modelos comunitarios de intervencion (promotores de salud, lideres religiosos) son esenciales para alcanzar a poblaciones desatendidas | Community intervention models (promotores de salud, religious leaders) are essential to reach underserved populations
- Integracion de determinantes sociales de la salud (vivienda, empleo, estatus legal) en el plan de tratamiento | Integration of social determinants of health (housing, employment, legal status) in treatment plan
- Investigacion participativa basada en la comunidad (CBPR) para desarrollo de intervenciones culturalmente relevantes | Community-based participatory research (CBPR) for developing culturally relevant interventions`,
      keyTerms: [
        {
          term: 'ventana de reconsolidacion | reconsolidation window',
          definition:
            'Periodo de ~6 horas despues de la reactivacion de una memoria durante el cual puede ser modificada | ~6-hour period after memory reactivation during which it can be modified',
        },
        {
          term: 'MDMA-AT',
          definition:
            'MDMA-Psicoterapia Asistida -- protocolo experimental que usa MDMA para facilitar el procesamiento terapeutico del trauma | MDMA-Assisted Therapy -- experimental protocol using MDMA to facilitate therapeutic trauma processing',
        },
        {
          term: 'error de prediccion | prediction error',
          definition:
            'La diferencia entre lo que se esperaba y lo que ocurrio; necesario para activar la reconsolidacion y el nuevo aprendizaje | The difference between what was expected and what occurred; necessary to trigger reconsolidation and new learning',
        },
        {
          term: 'modelo bayesiano | Bayesian model',
          definition:
            'Marco computacional que modela el TEPT como un fallo en actualizar las estimaciones de probabilidad de amenaza basado en nueva evidencia | Computational framework modeling PTSD as a failure to update threat probability estimates based on new evidence',
        },
        {
          term: 'CBPR',
          definition:
            'Investigacion Participativa Basada en la Comunidad -- enfoque de investigacion que involucra a la comunidad como socios iguales en el diseno, implementacion y diseminacion | Community-Based Participatory Research -- research approach involving the community as equal partners in design, implementation, and dissemination',
        },
      ],
      clinicalNotes:
        'Consideraciones de vanguardia: MDMA-AT muestra resultados prometedores para TEPT severo y resistente al tratamiento, pero enfrenta debates regulatorios y eticos. La reconsolidacion como objetivo terapeutico requiere activacion optima (ni muy poca ni abrumadora). Los biomarcadores no estan listos para uso clinico de rutina pero informan la seleccion de tratamiento en investigacion. La combinacion de neuromodulacion + psicoterapia es un area activa de investigacion. Para la practica clinica con poblaciones hispanohablantes: La confianza terapeutica (personalismo) es fundamental; el estatus migratorio puede ser una barrera de primer orden; los modelos de atencion escalonada comunitaria son mas efectivos que los modelos de clinica tradicional; y la evaluacion de trauma debe incluir la historia migratoria completa. Los protocolos de intervencion temprana post-desastre deben estar disponibles en espanol y ser culturalmente adaptados. | Cutting-edge considerations: MDMA-AT shows promising results for severe and treatment-resistant PTSD but faces regulatory and ethical debates. Reconsolidation as therapeutic target requires optimal activation (neither too little nor overwhelming). Biomarkers are not ready for routine clinical use but inform treatment selection in research. Combination of neuromodulation + psychotherapy is an active research area. For clinical practice with Spanish-speaking populations: Therapeutic trust (personalismo) is fundamental; immigration status may be a first-order barrier; community stepped-care models are more effective than traditional clinic models; and trauma assessment should include complete migration history. Early intervention protocols post-disaster should be available in Spanish and culturally adapted.',
    },
  },

  media: [],

  citations: [
    {
      id: 'dsm5tr-tept',
      type: 'textbook',
      title: 'Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, Text Revision (DSM-5-TR)',
      authors: ['American Psychiatric Association'],
      source: 'American Psychiatric Publishing',
      chapter: 'Trauma- and Stressor-Related Disorders',
    },
    {
      id: 'va-dod-ptsd-2023',
      type: 'guideline',
      title: 'VA/DoD Clinical Practice Guideline for the Management of Posttraumatic Stress Disorder and Acute Stress Disorder',
      authors: ['Department of Veterans Affairs', 'Department of Defense'],
      source: 'VA/DoD',
      url: 'https://www.healthquality.va.gov/guidelines/MH/ptsd/',
    },
    {
      id: 'foa-ep-2019',
      type: 'textbook',
      title: 'Prolonged Exposure Therapy for PTSD: Emotional Processing of Traumatic Experiences',
      authors: ['Foa, E.B.', 'Hembree, E.A.', 'Rothbaum, B.O.', 'Rauch, S.A.M.'],
      source: 'Oxford University Press',
    },
    {
      id: 'resick-cpt-2016',
      type: 'textbook',
      title: 'Cognitive Processing Therapy for PTSD: A Comprehensive Manual',
      authors: ['Resick, P.A.', 'Monson, C.M.', 'Chard, K.M.'],
      source: 'Guilford Press',
    },
    {
      id: 'trauma-latino-populations',
      type: 'journal',
      title: 'Trauma Exposure and Mental Health Among Latino Immigrants',
      authors: ['Fortuna, L.R.', 'Porche, M.V.', 'Alegria, M.'],
      source: 'Journal of Nervous and Mental Disease',
    },
    {
      id: 'cie-11-tept-complejo',
      type: 'guideline',
      title: 'ICD-11 Complex PTSD Diagnostic Guidelines',
      authors: ['World Health Organization'],
      source: 'WHO',
      url: 'https://icd.who.int/',
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
      targetId: 'mental-health-suicidal-ideation',
      targetType: 'topic',
      relationship: 'see-also',
      label: 'Ideacion Suicida | Suicidal Ideation',
    },
    {
      targetId: 'mental-health-crisis-resources',
      targetType: 'topic',
      relationship: 'see-also',
      label: 'Recursos de Crisis | Crisis Resources',
    },
    {
      targetId: 'mental-health-psychotherapy',
      targetType: 'topic',
      relationship: 'see-also',
      label: 'Tipos de Psicoterapia | Psychotherapy Types',
    },
    {
      targetId: 'mental-health-psychiatric-medications',
      targetType: 'topic',
      relationship: 'see-also',
      label: 'Medicamentos Psiquiatricos | Psychiatric Medications',
    },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['mental-health', 'psychiatry', 'trauma', 'bilingual-content'],
    keywords: [
      'TEPT',
      'PTSD',
      'trastorno de estres postraumatico',
      'post-traumatic stress disorder',
      'trauma',
      'flashback',
      'exposicion prolongada',
      'prolonged exposure',
      'TPC',
      'CPT',
      'EMDR',
      'atencion informada en trauma',
      'trauma-informed care',
      'salud mental',
      'mental health',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['psychiatry', 'medicine', 'surgery'],
    },
  },

  createdAt: '2026-02-05T00:00:00.000Z',
  updatedAt: '2026-02-05T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default teptPtsdContent;
